/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de gestion d'événement
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service de gestion des préférences IHM MyWay via le service serviceAgent.Preferences
     */
    export class PreferencesService implements IPreferencesService {
        public static CLASS_NAME = "PreferencesService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PreferencesService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgent,
            Constantes.Inject.Services.indicateurService,
            Constantes.Inject.Services.preferenceUtilisateurRestService,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Angular.$q
        ];

        public listePaniersPreference: Array<Modeles.Application.IPanier>;

        /**
         * Constructeur
         */
        constructor(
            private serviceAgent: MyWay.Services.ServiceAgent,
            private indicateurService: Services.Application.IIndicateurService,
            private preferenceUtilisateurRestService: Services.Rest.PreferenceUtilisateur.IPreferenceUtilisateurService,
            private contexteService: Services.Application.IContexteService,
            private $q: ng.IQService
        ) {
        }

        /**
         * Permet de completer les paniers manquants
         */
        public completerCreationPaniers(): ng.IPromise<void> {
            let panierTemp: Modeles.Application.IPanier;
            let listeTotaleIndicateurs: Modeles.Application.IIndicateurType[] = this.indicateurService.getListeTotaleIndicateursType();
            let listePanier: Modeles.Application.IPanier[] = [];
            return this.lirePreference(Constantes.Preferences.CODE_PANIER)
                .then((valeur: string) => {
                    if (valeur) {
                        let paniers: Array<string> = valeur.split("|");
                        if (paniers.length < Constantes.Application.LIMITE_NB_PANIERS) {
                            // Traitement du premier panier car il lui manque potentiellement les 
                            // proprétés "estDefaut" et "nom"(versions précédententes de l'applicatif)
                            _.forEach(paniers, (panierString: string) => {
                                panierTemp = this.convertirPanierPreferenceEnApplicatif(JSON.parse(panierString), listeTotaleIndicateurs);
                                panierTemp.nom = panierTemp.nom ? panierTemp.nom : Constantes.Application.NOM_PANIER_DEFAUT;
                                panierTemp.estDefaut = panierTemp.estDefaut !== undefined ? panierTemp.estDefaut : true;
                                listePanier.push(panierTemp);
                            });
                            // Ajout paniers vides pour compléter                   
                            for (let _i = paniers.length; _i < Constantes.Application.LIMITE_NB_PANIERS; _i++) {
                                let panierNom: string = `${Constantes.Application.NOM_PANIER_CREATION} ${_i + 1}`;
                                let dataPanier: Modeles.Application.IPanierPreferences = this.convertirPanierApplicatifEnPreference([], _i + 1, panierNom, false);
                                valeur = valeur + "|" + JSON.stringify(dataPanier);
                                panierTemp = this.convertirPanierPreferenceEnApplicatif(dataPanier, listeTotaleIndicateurs);
                                listePanier.push(panierTemp);
                            }
                            return this.ecrirePaniers(listePanier);
                        } else {
                            return this.$q.when();
                        }
                    } else {
                        // creation des X paniers vides
                        let pref: string = "";
                        for (let _i = 0; _i < Constantes.Application.LIMITE_NB_PANIERS; _i++) {
                            let panierNom: string = `${Constantes.Application.NOM_PANIER_CREATION} ${_i + 1}`;
                            pref = ((_i === 0) ? "" : pref + "|") +
                                JSON.stringify(this.convertirPanierApplicatifEnPreference([], _i + 1, panierNom, (_i === 0)));
                        }
                        return <ng.IPromise<void>>this.serviceAgent.Preferences.EcrirePreference(Constantes.Preferences.CODE_PANIER, pref);
                    }                    
                });
        }

        /**
         * Permet d'ecrire les preferences de portefeuilles affiches
         * @param {Array<Modeles.Application.IPortefeuille>} portefeuilles
         * @returns {MyWay.Services.IPromesse<void>}
         */
        public ecrireChoixPortefeuilles(
            portefeuilles: Array<Modeles.Application.IPortefeuille>): ng.IPromise<void> {
            let valeur = JSON.stringify(this.convertirListePortefeuilleEnPreference(portefeuilles));
            return <ng.IPromise<void>>this.serviceAgent.Preferences.EcrirePreference(Constantes.Preferences.CODE_PORTEFEUILLE, valeur);
        }

        /**
         * Permet de lire une liste d'identifiants portefeuilles selectionnes provenant des préférences 
         * @returns {Array<number>}
         */
        public lireChoixPortefeuilles(): ng.IPromise<Array<number>> {
            return this.lirePreference(Constantes.Preferences.CODE_PORTEFEUILLE).then((valeur: any) => {
                return valeur ? <Array<number>>JSON.parse(valeur) : null;
            });
        }

        /**
         * Permet de convertir la liste des portefeuilles en liste d'identifiants correspondant aux portefeuilles selectionnes
         * @param {Array<Modeles.Application.IPortefeuille>} portefeuilles
         * @returns {Array<number>}
         */
        public convertirListePortefeuilleEnPreference(
            portefeuilles: Array<Modeles.Application.IPortefeuille>): Array<number> {
            return <Array<number>>_.pluck(_.where(portefeuilles, { "estAffiche": true }), "id").filter((num: number) => num !== 0);
        }
        
        /**
         * Permet d'écrire un panier dans les préférences 
         * @param {Array<Modeles.Application.IPanier>} liste des paniers
         * @returns {MyWay.Services.IPromesse<void>}
         */
        public ecrirePaniers(paniers: Array<Modeles.Application.IPanier>): ng.IPromise<void> {
            let valeurs: string = "";
            let i: number = 1;
            _.forEach(paniers, (panier: Modeles.Application.IPanier) => {
                let valeur =
                    JSON.stringify(
                        this.convertirPanierApplicatifEnPreference(
                            panier.listeChoixIndicateurs, i, panier.nom, panier.estDefaut));
                // "|" est le séparateur de paniers
                valeurs = valeurs ? `${valeurs}|${valeur}` : valeur; 
                i++;
            });
            return <ng.IPromise<void>>this.serviceAgent.Preferences.EcrirePreference(
                Constantes.Preferences.CODE_PANIER, valeurs).then(() => {
                    this.listePaniersPreference = paniers;
                    return <MyWay.Services.IPromesse<void>>this.$q.when();
            });
        }

        /**
         * permet de récupérer la liste des paniers provenant des préférence
         * @param {Array<Modeles.Application.IIndicateurType>} listeTotaleIndicateurs
         * @return {Array<Modeles.Application.IPanier>} liste des paniers en préférence
         */
        public lirePaniers(
            listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>,
            sansMajListeIndicateursChoix?: boolean): ng.IPromise<Array<Modeles.Application.IPanier>> {
            return this.lirePreference(Constantes.Preferences.CODE_PANIER)
                .then((valeur: string) => {
                    if (valeur) {
                        let paniers: Array<string> = valeur.split("|");
                        let listePaniers: Array<Modeles.Application.IPanier> = [];
                        _.forEach(paniers, (panierString: string) => {
                            let panierTemp: Modeles.Application.IPanier =
                                this.convertirPanierPreferenceEnApplicatif(JSON.parse(panierString), listeTotaleIndicateurs);
                            // gestion initiale pour la version avec 1 seul panier sans estDefaut
                            if (panierTemp.estDefaut || paniers.length === 1) { 
                                // si on ne souhaite pas mettre à jour la liste d'indicateurs. Si non renseigné, on met à jour
                                if (!sansMajListeIndicateursChoix) { 
                                    this.indicateurService.setListeIndicateurChoix(panierTemp.listeChoixIndicateurs);
                                }
                                panierTemp.estDefaut = true;
                            }
                            if (!panierTemp.nom) {
                                panierTemp.nom = Constantes.Application.NOM_PANIER_DEFAUT;
                            }
                            listePaniers.push(panierTemp);
                        });
                        return listePaniers;
                    } else {
                        return undefined;
                    }
                });
        }

        /**
         * Permet de lire un panier provenant des préférences 
         * @param {Array<Modeles.Application.IIndicateurType>} listeTotaleIndicateurs
         * @returns {Modeles.Application.IPanier}
         */
        public lirePanierDefaut(listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>): ng.IPromise<Modeles.Application.IPanier> {
            return this.lirePreference(Constantes.Preferences.CODE_PANIER)
                .then((valeur: string) => {
                    if (valeur) {
                        let paniers: Array<string> = valeur.split("|");
                        let panierDef: Modeles.Application.IPanier;
                        _.forEach(paniers, (panierString: string) => {
                            let panierTemp: Modeles.Application.IPanier =
                                this.convertirPanierPreferenceEnApplicatif(JSON.parse(panierString), listeTotaleIndicateurs);
                            // gestion initiale pour la version avec 1 seul panier sans estDefaut
                            if (panierTemp.estDefaut ||
                                paniers.length === 1) {
                                panierTemp.estDefaut = true;
                                if (!panierTemp.nom) {
                                    panierTemp.nom = Constantes.Application.NOM_PANIER_DEFAUT;
                                }
                                panierDef = panierTemp;
                            }
                        });
                        return panierDef;
                    } else {
                        return undefined;
                    }
                });
        }

        /**
         * Permet de convertir un panier applicatif en panier pour les préférences
         * @param {Array<Modeles.Application.IIndicateurChoix>} listeIndicateursChoix
         * @param {number} numeroPanier
         * @returns {Modeles.Application.IPanierPreferences}
         */
        public convertirPanierApplicatifEnPreference(
            listeIndicateursChoix: Array<Modeles.Application.IIndicateurChoix>,
            numeroPanier: number,
            nomPanier: string,
            estDefautPanier: boolean): Modeles.Application.IPanierPreferences {
            let panierPreferenceVMin = <Modeles.Application.IPanierPreferences>{};
            panierPreferenceVMin.listeCodesIndicateurs = [];
            panierPreferenceVMin.numero = numeroPanier;
            panierPreferenceVMin.nom = nomPanier;
            panierPreferenceVMin.estDefaut = estDefautPanier;
            _.forEach(listeIndicateursChoix, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {
                if (indicateurChoix.choisi) {
                    panierPreferenceVMin.listeCodesIndicateurs.push(indicateurChoix.indicateur.codePreference);
                }
            });
            return panierPreferenceVMin;
        }

        /**
         * Permet de convertir un panier provenant des préférences en panier applicatif
         * @param {Modeles.Application.IPanierPreferences} panierPreference
         * @returns {Modeles.Application.IPanier}
         */
        public convertirPanierPreferenceEnApplicatif(
            panierPreference: Modeles.Application.IPanierPreferences,
            listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>): Modeles.Application.IPanier {
            let listeIndicateursChoix = [];
            let panier: Modeles.Application.IPanier;

            if (panierPreference) {
                _.forEach(panierPreference.listeCodesIndicateurs, (codeIndicateur: string) => {
                    let indicateurChoix = <Modeles.Application.IIndicateurChoix>{};
                    indicateurChoix.choisi = true;
                    indicateurChoix.desactive = null;
                    indicateurChoix.indicateur = _.find(listeTotaleIndicateurs, (indicateurType: Modeles.Application.IIndicateurType) => {
                        // gestion du passage de l'ancienne gestion des preference avec code, à la nouvelle avec codePreference
                        return indicateurType.code === codeIndicateur || indicateurType.codePreference === codeIndicateur; 
                    });
                    if (indicateurChoix.indicateur) {
                        listeIndicateursChoix.push(indicateurChoix);
                    }
                });
                panier = <Modeles.Application.IPanier>{};
                panier.listeChoixIndicateurs = listeIndicateursChoix;
                panier.nom = panierPreference.nom ? panierPreference.nom : "";
                panier.estDefaut = panierPreference.estDefaut;
                panier.numero = panierPreference.numero;
            }
            return panier;
        }

        /**
         * Permet de recupérer une préférence
         * @param {string} cle
         * @returns {ng.IPromise<any>}
         */
        private lirePreference(cle: string): ng.IPromise<Array<Modeles.Rest.PreferenceUtilisateur.IPreference>|boolean|string> {
            return this.contexteService.getContexte()
                .then((contexteRecu: Modeles.Application.IContexte) => {
                    let query = <Modeles.Rest.PreferenceUtilisateur.IParametresEntree>{};
                    query.codeAgent = contexteRecu.identifiantUser;
                    return this.preferenceUtilisateurRestService.getListePreferences(query);
                }).then((listePreferences: Array<Modeles.Rest.PreferenceUtilisateur.IPreference>) => {
                    let maPreference = _.find(listePreferences, (preference: Modeles.Rest.PreferenceUtilisateur.IPreference) => {
                        return preference.cle === cle;
                    });
                    return maPreference ? maPreference.valeur : null;
                });
        }
    }

    /**
     * Interface de la classe PreferencesService
     */
    export interface IPreferencesService {
        ecrirePaniers(
            paniers: Array<Modeles.Application.IPanier>): ng.IPromise<void>;
        lirePanierDefaut(
            listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>): ng.IPromise<Modeles.Application.IPanier>;
        lirePaniers(
            listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>,
            sansMajListeIndicateursChoix?: boolean): ng.IPromise<Array<Modeles.Application.IPanier>>;
        ecrireChoixPortefeuilles(
            portefeuilles: Array<Modeles.Application.IPortefeuille>): ng.IPromise<void>;
        lireChoixPortefeuilles(): ng.IPromise<Array<number>>;
        convertirPanierPreferenceEnApplicatif(
            panierPreference: Modeles.Application.IPanierPreferences,
            listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>,
            nomPanier: string, estDefautPanier: boolean): Modeles.Application.IPanier;
        completerCreationPaniers(): ng.IPromise<void>;
    }

    // Déclaration du service
    app.service(PreferencesService.CLASS_NAME, PreferencesService);
}  