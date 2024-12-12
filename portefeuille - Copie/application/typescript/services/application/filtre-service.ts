/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service de gestion des filtres
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service de gestion de la liste des clients
     */
    class FiltreService implements IFiltreService {
        public static CLASS_NAME = "IndicateurService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(FiltreService.CLASS_NAME);

        private filtresClients: Modeles.Application.IFiltre[];
        private filtresRelationsEco: Modeles.Application.IFiltre[];

        // Proprietés

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.begacliService
        ];

        /**
         * Constructeur
         */
        constructor(
            private eventService: Services.Application.IEventService,
            private begacliService: Services.Application.IBegacliService
        ) {
            this.filtresClients = [];
            this.filtresRelationsEco = [];
        } 

        /**
         * Methode qui permet de filtrer une liste de client à partir d'une liste de filtre
         * @param {Array<Modeles.Application.IClient>} listeDeClient
         * @param {Array<Modeles.Application.IFiltre>} listeFiltres
         * @returns {Array<Modeles.Application.IClient>}
         */
        public filtrerListeClients(
            listeDeClient: Array<Modeles.Application.IClient>,
            listeFiltres: Array<Modeles.Application.IFiltre>): Array<Modeles.Application.IClient> {
            if (listeFiltres.length > 0) {
                return _.filter(listeDeClient, (client: Modeles.Application.IClient) => {
                    return this.estConformeAuxCriteres(this.creerTableauResultatsFiltre(client.listeIndicateurs, listeFiltres, true), listeFiltres);
                });
            } else {
                return listeDeClient;
            }
        }

        /**
         * Methode qui permet de filtrer une liste de relation économique à partir d'une liste de filtre
         * @param {Array<Modeles.Application.IRelationEconomique>} listeRelationsEco
         * @param {Array<Modeles.Application.IFiltre>} listeFiltres
         * @returns {Array<Modeles.Application.IRelationEconomique>}
         */
        public filtrerListeRelationsEco(
            listeRelationsEco: Array<Modeles.Application.IRelationEconomique>,
            listeFiltres: Array<Modeles.Application.IFiltre>): Array<Modeles.Application.IRelationEconomique> {
            if (listeFiltres.length > 0) {
                return _.filter(listeRelationsEco, (relationEco: Modeles.Application.IRelationEconomique) => {
                    return this.estConformeAuxCriteres(this.creerTableauResultatsFiltre(relationEco.listeIndicateurs, listeFiltres, false), listeFiltres);
                });
            } else {
                return listeRelationsEco;
            }
        }

        /**
         * Methode qui permet de savoir si une liste de resultats de filtre d'un client est conforme ou non
         * @param {Array<boolean>} listeResultatsFiltre
         * @returns {boolean}
         */
        private estConformeAuxCriteres(listeResultatsFiltre: Array<boolean>, listeFiltres: Array<Modeles.Application.IFiltre>): boolean {
            if (listeFiltres.length === 1) {
                return listeResultatsFiltre[0];
            } else {
                switch (listeFiltres[1].operateur) {
                    case Enum.Filtre.OPERATEUR.ET:
                        // Faux s'il y a au moins un resultat faux dans la liste des resultats
                        let trouveResultatFaux = _.find(listeResultatsFiltre, (resultat: boolean) => {
                            return resultat === false;
                        });
                        return trouveResultatFaux === false ? false : true;
                    case Enum.Filtre.OPERATEUR.OU:
                        // Vrai s'il y a au moins un resultat vrai dans la liste des resultats
                        let trouveResultatVrai = _.find(listeResultatsFiltre, (resultat: boolean) => {
                            return resultat === true;
                        });
                        return trouveResultatVrai ? true : false;
                    default:
                        return false;
                }
            }
        }

        /**
         * Methode qui permet de creer le tableau de resultats des filtres sur un client
         * @param {Array<Modeles.Application.IIndicateur>} listeIndicateursClient
         * @returns {Array<boolean>}
         */
        private creerTableauResultatsFiltre(
            listeIndicateurs: Array<Modeles.Application.IIndicateur>,
            listeFiltres: Array<Modeles.Application.IFiltre>,
            estVueClient: boolean): Array<boolean> {
            let listeResultats = [];

            _.forEach(listeFiltres, (filtre: Modeles.Application.IFiltre) => {
                let indicateurClient = _.find(listeIndicateurs, { code: filtre.indicateur.indicateur.code });
                switch (filtre.indicateur.indicateur.typeIndicateur) {
                    case Enum.Indicateur.TYPE.TEXTE:
                        listeResultats.push(this.traiterFiltreTypeTexte(indicateurClient.valeur, filtre.indicateur.listeValeurs));
                        break;
                    case Enum.Indicateur.TYPE.BEGACLI:
                        listeResultats.push(this.traiterFiltreTypeBegacli(indicateurClient.valeur, filtre.indicateur.listeValeurs));
                        break;
                    case Enum.Indicateur.TYPE.DATE:
                        listeResultats.push(this.traiterFiltreTypeDate(indicateurClient.valeurDate, filtre));
                        break;
                    case Enum.Indicateur.TYPE.NOMBRE:
                    case Enum.Indicateur.TYPE.POURCENT:
                    case Enum.Indicateur.TYPE.MONTANT:
                        listeResultats.push(this.traiterFiltreTypeNombre(indicateurClient.valeurNumber, filtre));
                        break;
                    default:
                        break;
                }
            });
            return listeResultats;
        }

        /**
         * Methode qui permet de traiter un filtre de type texte
         * @param {string} valeurClient
         * @param {Array<Modeles.Application.IValeurFiltre>} listeValeursFiltre
         * @returns {boolean}
         */
        private traiterFiltreTypeTexte(valeurClient: string, listeValeursFiltre: Array<Modeles.Application.IValeurFiltre>): boolean {
            let trouve = _.find(listeValeursFiltre, (valeur: Modeles.Application.IValeurFiltre) => {

                // gère les NC avec un tri: la valeur dans ce cas est xxxxDate_du_jour pour les forcer a la fin
                let estNCTrie: boolean = (valeur.libelle === "NC" && valeurClient.indexOf(Constantes.Application.FIN_CHAINE_MAX) !== -1);

                return valeur.actif && (valeur.libelle === valeurClient || estNCTrie);
            });

            if (valeurClient === null || valeurClient === undefined) {
                trouve = null;
            }
            
            return trouve ? true : false;
        }

        /**
         * Methode qui permet de traiter un filtre de type texte
         * @param {string} valeurClient
         * @param {Array<Modeles.Application.IValeurFiltre>} listeValeursFiltre
         * @returns {boolean}
         */
        private traiterFiltreTypeBegacli(valeurClient: string, listeValeursFiltre: Array<Modeles.Application.IValeurFiltre>): boolean {
            let expReg: string = this.begacliService.getExpReguliere();
            //console.log("===> ici filtre begacli appliqué");
            //console.log("===> valeurClient : ", valeurClient);
            //console.log("===> listeValeursFiltre : ", listeValeursFiltre);
            //console.log("===> expReg : ", expReg);

            let trouve: boolean = false;

            if (this.begacliService.getFiltreBegacli().choisiNC) {
                if (valeurClient === "NC") {
                    trouve = true;
                    return trouve;
                };
            }

            if (expReg !== "") {
                let leTest: RegExp = new RegExp(expReg);
                if (leTest.test(valeurClient)) {
                    trouve = true;
                }
            }
            // console.log("--> trouve : ", trouve);
            return trouve;
        }


        /**
         * Methode qui permet de traiter un filtre de type nombre
         * @param {number} valeurClient
         * @param {Modeles.Application.IFiltre} filtre
         * @returns {boolean}
         */
        private traiterFiltreTypeNombre(valeurClient: number, filtre: Modeles.Application.IFiltre): boolean {
            // le NC est par défaut null ou undefined
            // sauf que si on tri la colonne, il se tranforme en -infinity ou +infinity
            // ce cas est à prendre en compte pour ignorer les NC si filtre.
            // et les prendre si filtre = NC

            // si filtre, les NC sont ignorés dans tous les cas
            if (valeurClient === null ||
                valeurClient === undefined ||
                valeurClient === Number.POSITIVE_INFINITY ||
                valeurClient === Number.NEGATIVE_INFINITY) {
                return filtre.comparateur === Enum.Filtre.COMPARATEUR.NC ? true : false;
            }

            switch (filtre.comparateur) {
                case Enum.Filtre.COMPARATEUR.SUPERIEUR:
                    return valeurClient > filtre.valeurUnique;
                case Enum.Filtre.COMPARATEUR.INFERIEUR:
                    return valeurClient < filtre.valeurUnique;
                case Enum.Filtre.COMPARATEUR.EGALE:
                    return valeurClient === filtre.valeurUnique;
                case Enum.Filtre.COMPARATEUR.ENTRE:
                    return valeurClient >= filtre.valeurMultiple1 && valeurClient <= filtre.valeurMultiple2;
                default:
                    return false;
            }
        }

        /**
         * Methode qui permet de traiter un filtre de type Date
         * @param {number} valeurClient
         * @param {Modeles.Application.IFiltre} filtre
         * @returns {boolean}
         */
        private traiterFiltreTypeDate(valeurClient: any, filtre: Modeles.Application.IFiltre): boolean {
            // le NC est par défaut null ou undefined
            // sauf que si on tri la colonne, il se tranforme en 01.01.1970 ou 31.12.9999
            // ce cas est à prendre en compte pour ignorer les NC si filtre.--> erreur dans code existant
            // et les prendre si filtre = NC

            let valeurDate: Date = valeurClient;

            if (valeurClient === null 
                || valeurClient === undefined
                || moment(valeurDate).isSame(Constantes.Application.DATE_MIN)
                || moment(valeurDate).isSame(Constantes.Application.DATE_MAX)) {
                return (filtre.comparateur === Enum.Filtre.COMPARATEUR.NC
                    || filtre.comparateur === Enum.Filtre.COMPARATEUR.NONREALISEE) ?
                    true :
                    false;
            }

            switch (filtre.comparateur) {
                case Enum.Filtre.COMPARATEUR.SUPERIEUR:
                    return valeurClient > filtre.valeurUnique;
                case Enum.Filtre.COMPARATEUR.INFERIEUR:
                    return valeurClient < filtre.valeurUnique;
                case Enum.Filtre.COMPARATEUR.EGALE:
                    return moment(valeurClient).format("MMM Do YY") === moment(filtre.valeurUnique.toString()).format("MMM Do YY");
                case Enum.Filtre.COMPARATEUR.ENTRE:
                    return (valeurClient >= filtre.valeurMultiple1 && valeurClient <= filtre.valeurMultiple2);
                case Enum.Filtre.COMPARATEUR.ECHUE:
                    return valeurClient < moment().subtract(1, "year").toDate();
                case Enum.Filtre.COMPARATEUR.ENCOURS:
                    return valeurClient >= moment().subtract(1, "year").toDate();
                default:
                    return false;
            }
        }

        /**
         * Methode qui permet de maj les filtres client par rapport à la nouvelle configuration des indicateurs
         * @param {Array<Modeles.Application.IFiltre>} listeFiltres
         * @param {Array<Modeles.Application.IIndicateurChoix>} listeChoixIndicateurs
         * @param {Array<Modeles.Application.IIndicateurFiltre>} listeIndicateursFiltre
         * @param {Array<Modeles.Application.IClient>} listeClients
         * @return {void}
         */
        public majFiltresClientNouveauxIndicateurs(
            listeFiltres: Array<Modeles.Application.IFiltre>,
            listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>,
            listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>,
            listeClients: Array<Modeles.Application.IClient>): void {

            // Suppression des filtres des indicateurs supprimés
            this.supprimerFiltres(listeFiltres, listeChoixIndicateurs, listeIndicateursFiltre);

            // Ajout des nouveaux indicateurs filtre
            _.forEach(listeChoixIndicateurs, (choixIndicateur: Modeles.Application.IIndicateurChoix) => {
                let indicateurFiltreExistant = _.find(listeIndicateursFiltre, (indicateurFiltre: Modeles.Application.IIndicateurFiltre) => {
                    return indicateurFiltre.indicateur.code === choixIndicateur.indicateur.code;
                });

                // Si l'indicateur filtre n'est pas présent dans la liste, on l'ajoute
                if (!indicateurFiltreExistant) {
                    let nouvelIndicateurFiltre = <Modeles.Application.IIndicateurFiltre>{};
                    nouvelIndicateurFiltre.indicateur = choixIndicateur.indicateur;
                    nouvelIndicateurFiltre.utilise = false;
                    nouvelIndicateurFiltre.utiliseRelationEco = false;
                    nouvelIndicateurFiltre.listeValeurs = [];

                    if (nouvelIndicateurFiltre.indicateur.typeIndicateur === Enum.Indicateur.TYPE.TEXTE) {
                        _.forEach(listeClients, (client: Modeles.Application.IClient) => {

                            let indicateurClient = _.find(client.listeIndicateurs, (indicateur: Modeles.Application.IIndicateur) => {
                                return indicateur.code === nouvelIndicateurFiltre.indicateur.code;
                            });

                            let valeurFiltre = <Modeles.Application.IValeurFiltre>{};
                            valeurFiltre.libelle = indicateurClient.valeur;
                            valeurFiltre.actif = false;
                            if (indicateurClient.code === Enum.Indicateur.CODE.TOP_CC.toString()) {
                                valeurFiltre.ordreAffichage = Services.Utils.ApplicationUtils.ValeurNumberTopCC(indicateurClient.valeur);
                            }
                            nouvelIndicateurFiltre.listeValeurs.push(valeurFiltre);
                            nouvelIndicateurFiltre.listeValeurs = _.uniq(nouvelIndicateurFiltre.listeValeurs, "libelle");
                        });
                    }

                    listeIndicateursFiltre.push(nouvelIndicateurFiltre);
                }
            });
        }

        /**
         * Methode qui permet de maj les filtres client par rapport à la nouvelle configuration des indicateurs
         * @param {Array<Modeles.Application.IFiltre>} listeFiltres
         * @param {Array<Modeles.Application.IIndicateurChoix>} listeChoixIndicateurs
         * @param {Array<Modeles.Application.IIndicateurFiltre>} listeIndicateursFiltre
         * @param {Array<Modeles.Application.IRelationEconomique>} listeRelationEco
         * @return {void}
         */
        public majFiltresRelationEcoNouveauxIndicateurs(
            listeFiltres: Array<Modeles.Application.IFiltre>,
            listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>,
            listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>,
            listeRelationEco: Array<Modeles.Application.IRelationEconomique>): void {

            // Suppression des filtres des indicateurs supprimés
            this.supprimerFiltres(listeFiltres, listeChoixIndicateurs, listeIndicateursFiltre);

            // Ajout des nouveaux indicateurs filtre
            _.forEach(listeChoixIndicateurs, (choixIndicateur: Modeles.Application.IIndicateurChoix) => {
                let indicateurFiltreExistant = _.find(listeIndicateursFiltre, (indicateurFiltre: Modeles.Application.IIndicateurFiltre) => {
                    return indicateurFiltre.indicateur.code === choixIndicateur.indicateur.code;
                });

                // Si l'indicateur filtre n'est pas présent dans la liste, on l'ajoute
                if (!indicateurFiltreExistant) {
                    let nouvelIndicateurFiltre = <Modeles.Application.IIndicateurFiltre>{};
                    nouvelIndicateurFiltre.indicateur = choixIndicateur.indicateur;
                    nouvelIndicateurFiltre.utilise = false;
                    nouvelIndicateurFiltre.utiliseRelationEco = false;
                    nouvelIndicateurFiltre.listeValeurs = [];

                    if (nouvelIndicateurFiltre.indicateur.typeIndicateur === Enum.Indicateur.TYPE.TEXTE) {
                        _.forEach(listeRelationEco, (relationEco: Modeles.Application.IRelationEconomique) => {

                            let indicateurRelationEco = _.find(relationEco.listeIndicateurs, (indicateur: Modeles.Application.IIndicateur) => {
                                return indicateur.code === nouvelIndicateurFiltre.indicateur.codeRel;
                            });

                            if (indicateurRelationEco) {
                                let valeurFiltre = <Modeles.Application.IValeurFiltre>{};
                                valeurFiltre.libelle = indicateurRelationEco.valeur;
                                valeurFiltre.actif = false;
                                nouvelIndicateurFiltre.listeValeurs.push(valeurFiltre);
                                nouvelIndicateurFiltre.listeValeurs = _.uniq(nouvelIndicateurFiltre.listeValeurs, "libelle");
                            }
                        });
                    }

                    listeIndicateursFiltre.push(nouvelIndicateurFiltre);
                }
            });
        }

        /**
         * Methode qui permet de supprimer les filtres par rapport à la nouvelle configuration des indicateurs
         * @param {Array<Modeles.Application.IFiltre>} listeFiltres
         * @param {Array<Modeles.Application.IIndicateurChoix>} listeChoixIndicateurs
         * @return {void}
         */
        private supprimerFiltres(
            listeFiltres: Array<Modeles.Application.IFiltre>,
            listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>,
            listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>
        ): void {
            // Suppression des filtres dont l'indicateur n'est plus présent
            _.forEach(angular.copy(listeFiltres), (filtre: Modeles.Application.IFiltre) => {
                let indicateurChoixExistant = _.find(listeChoixIndicateurs, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {
                    return indicateurChoix.indicateur.code === filtre.indicateur.indicateur.code;
                });
                // Si le filtre n'est pas présent dans la liste des indicateurs, on le supprime
                if (!indicateurChoixExistant) {
                    // Récupération de l'indicateur filtre pour le mettre à faux
                    let indicateurFiltreExistant = _.find(listeIndicateursFiltre, (indicateurFiltre: Modeles.Application.IIndicateurFiltre) => {
                        return indicateurFiltre.indicateur.code === filtre.indicateur.indicateur.code;
                    });
                    indicateurFiltreExistant.utilise = false;
                    indicateurFiltreExistant.utiliseRelationEco = false;

                    // Suppression du filtre
                    _.remove(listeFiltres, (vraiFiltre: Modeles.Application.IFiltre) => {
                        return vraiFiltre.indicateur.indicateur.code === filtre.indicateur.indicateur.code;
                    });
                }
            });

            //S'il ne reste plus qu'un filtre, on supprime l'opérateur
            if (listeFiltres.length === 1) {
                listeFiltres[0].operateur = null;
            }
        }

        /**
         * Vidage des filtres relation eco
         */
        public razFiltresRelationEco(): void {
            this.filtresRelationsEco = [];
        }

        /**
         * Vidage des filtres client
         */
        public razFiltresClient(): void {
            this.filtresClients = [];
        }

        /**
         * Méthode permettant d'ajouter un filtre
         * @returns {void}
         */
        public ajouterFiltre(listeFiltres: Array<Modeles.Application.IFiltre>, setDefaultEt: boolean): void {
            let filtre = <Modeles.Application.IFiltre>{};
            filtre.id = Services.Utils.ApplicationUtils.genererIdentifiantAleatoire();
            
            // positionne par défaut sur ET
            if (setDefaultEt) {
                filtre.operateur = Enum.Filtre.OPERATEUR.ET;
            }

            listeFiltres.push(filtre);
        }

        /**
         * mise à jour de la liste des filtres relation éco
         * @param inListe
         */
        public setFiltresRelationsEco(inListe: Modeles.Application.IFiltre[]) {
            this.filtresRelationsEco = inListe;
        }

        /**
         * mise à jour de la liste des filtres client
         * @param inListe
         */
        public setFiltresClients(inListe: Modeles.Application.IFiltre[]) {
            this.filtresClients = inListe;
        }

        /**
         * Récupération de la liste des filtres relation éco
         */
        public getFiltresRelationsEco() {
            return this.filtresRelationsEco;
        }

        /**
         * Récupération de la liste des filtres client
         */
        public getFiltresClients() {
            return this.filtresClients;
        }

        /**
         * Méthode de mise à jour des filtres client en fonction des indicateurs choisis pour le tableau client
         * @param listeIndicateursChoix Liste des indicateurs du tableau client
         * @returns {Modeles.Application.IFiltre[]} Retourne la liste des filtres clients à jour
         */
        public majAndGetFiltresClientsAvecListeIndicateursDispo(listeIndicateursChoix: Modeles.Application.IIndicateurChoix[]): Modeles.Application.IFiltre[] {
            let listeFiltre: Modeles.Application.IFiltre[] = angular.copy(this.filtresClients);
            _.forEach(listeFiltre, (filtre: Modeles.Application.IFiltre) => {
                if (_.findIndex(_.pluck(listeIndicateursChoix, "indicateur"), {
                    "code": filtre.indicateur.indicateur.code
                    }) < 0) {
                    _.remove(this.filtresClients, (filtreI: Modeles.Application.IFiltre) => {
                        // XXXX
                        // si filtre typePersonne (Client/Prospect), top actif ou sans contrat, 
                        // ou leader on ne supprime pas car ce n'est pas un indicateur (gestion exception)
                        
                        if (filtreI.indicateur &&
                            filtreI.indicateur.indicateur &&
                            _.indexOf(Constantes.Indicateur.INDICATEUR_TAG, filtreI.indicateur.indicateur.code) === -1) {
                            return filtreI.id === filtre.id;
                        }
                    });
                }
            });
            // on verifie s'il n'en reste qu'un: si c'est le cas, ou supprime l'operateur présent
            if (this.filtresClients &&
                this.filtresClients.length === 1) {
                this.filtresClients[0].operateur = undefined;
            }
            return this.filtresClients;
        }

        /**
         * Méthode de mise à jour des filtres relation économique en fonction des indicateurs choisis pour le tableau relation économique
         * @param listeIndicateursChoix Liste des indicateurs du tableau relation économique
         * @returns {Modeles.Application.IFiltre[]} Retourne la liste des filtres relation économique à jour
         */
        public majAndGetFiltresRelationsEcoAvecListeIndicateursDispo(listeIndicateursChoix: Modeles.Application.IIndicateurChoix[]): Modeles.Application.IFiltre[] {
            let listeFiltre: Modeles.Application.IFiltre[] = angular.copy(this.filtresRelationsEco);
            _.forEach(listeFiltre, (filtre: Modeles.Application.IFiltre) => {
                if (_.findIndex(_.pluck(listeIndicateursChoix, "indicateur"), {
                    "codeRel": filtre.indicateur.indicateur.code
                }) < 0) {
                    _.remove(this.filtresRelationsEco, (filtreI: Modeles.Application.IFiltre) => {
                        // si filtre typePersonne (Client/Prospect), on ne supprime pas car ce n'est pas un indicateur (gestion exception)
                        if (filtreI.indicateur
                            && filtreI.indicateur.indicateur
                            && filtreI.indicateur.indicateur.code !== Enum.Indicateur.CODEREL.CLIENTPROSPECT.toString()) {
                            return filtreI.id === filtre.id;
                        }
                    });
                }
            });
            // on verifie s'il n'en reste qu'un: si c'est le cas, ou supprime l'operateur présent
            if (this.filtresRelationsEco && this.filtresRelationsEco.length === 1) {
                this.filtresRelationsEco[0].operateur = undefined;
            }
            return this.filtresRelationsEco;
        }
    }

    /**
     * Interface de la classe FiltreService
     */
    export interface IFiltreService {
        filtrerListeClients(listeDeClient: Array<Modeles.Application.IClient>, listeFiltres: Array<Modeles.Application.IFiltre>): Array<Modeles.Application.IClient>;
        filtrerListeRelationsEco(listeRelationsEco: Array<Modeles.Application.IRelationEconomique>, listeFiltres: Array<Modeles.Application.IFiltre>): Array<Modeles.Application.IRelationEconomique>;
        majFiltresClientNouveauxIndicateurs(
            listeFiltres: Array<Modeles.Application.IFiltre>,
            listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>,
            listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>,
            listeClients: Array<Modeles.Application.IClient>): void;
        majFiltresRelationEcoNouveauxIndicateurs(
            listeFiltres: Array<Modeles.Application.IFiltre>,
            listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>,
            listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>,
            listeRelationEco: Array<Modeles.Application.IRelationEconomique>): void;
        razFiltresRelationEco(): void;
        razFiltresClient(): void;
        ajouterFiltre(listeFiltres: Array<Modeles.Application.IFiltre>, setDefaultEt: boolean): void;
        setFiltresRelationsEco(listeFiltresRelationsEco: Modeles.Application.IFiltre[]): void;
        setFiltresClients(listeFiltresClients: Modeles.Application.IFiltre[]): void;
        getFiltresRelationsEco(): Modeles.Application.IFiltre[];
        getFiltresClients(): Modeles.Application.IFiltre[];
        majAndGetFiltresClientsAvecListeIndicateursDispo(listeIndicateursChoix: Modeles.Application.IIndicateurChoix[]): Modeles.Application.IFiltre[];
        majAndGetFiltresRelationsEcoAvecListeIndicateursDispo(listeIndicateursChoix: Modeles.Application.IIndicateurChoix[]): Modeles.Application.IFiltre[];
    }

    app.service("FiltreService", FiltreService);
}  