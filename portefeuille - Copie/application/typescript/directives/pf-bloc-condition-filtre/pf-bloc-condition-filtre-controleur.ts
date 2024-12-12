/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-bloc-condition-filtre
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfBlocConditionFiltreControleur {
        public static CLASS_NAME = "PfBlocConditionFiltreControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfBlocConditionFiltreControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Services.filtreService,
            Constantes.Inject.Services.begacliService
        ];

        // Variables d'entrée
        public listeIndicateurs: Array<Modeles.Application.IIndicateurFiltre>;
        public listeFiltres: Array<Modeles.Application.IFiltre>;
        public noIndex: number;
        public filtre: Modeles.Application.IFiltre;
        public filtreBegacli: Modeles.Application.IFiltreBegacli;
        public afficherOperateur: boolean;
        public estVueClient: boolean;

        // Variables utiles
        public listeComparateurs: Array<Enum.Filtre.COMPARATEUR>;
        public listeOperateurs: Array<Enum.Filtre.OPERATEUR> = Constantes.Indicateur.LISTE_OPERATEURS_FILTRE;
        private dernierIndicateurSelect: Modeles.Application.IIndicateurFiltre;
        private sauvegardeIndicateur: Modeles.Application.IIndicateurFiltre;
        public isOpen: boolean = true;

        /**
         * Constructeur
         */
        constructor(
            private filtreService: Services.Application.IFiltreService,
            private begacliService: Services.Application.IBegacliService
        ) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfBlocConditionFiltreControleur.logger.info(">>> Appel de la méthode : PfBlocConditionFiltreControleur.initialiser <<<");
            //console.log("->no index : ", this.noIndex);
            //console.log("-> listeFiltres : ", this.listeFiltres);
            //console.log("-> listeIndicateurs : ", this.listeIndicateurs);

            this.sauvegardeIndicateur = null;
            this.filtreBegacli = this.begacliService.getFiltreBegacli();

            // Initialisation de l'indicateur
            if (this.filtre.indicateur) {
                // on va garder les valeurs filtrées pour les indicateurs type texte et begacli ????
                let listeValeursActives: string[] = _.pluck(_.where(this.filtre.indicateur.listeValeurs, { "actif": true }), "libelle");
                let indicateurTrouve: Modeles.Application.IIndicateurFiltre =
                    _.find(this.listeIndicateurs, (indicateur: Modeles.Application.IIndicateurFiltre) => {
                        if (this.filtre.indicateur.indicateur.code === indicateur.indicateur.code) {
                            this.filtre.indicateur = indicateur;
                            this.dernierIndicateurSelect = indicateur;
                            return true;
                        } else {
                            return false;
                        }
                    });
                // remise en place des valeurs actives dans listeValeurs
                if (indicateurTrouve &&
                    this.filtre.indicateur.listeValeurs &&
                    this.filtre.indicateur.listeValeurs.length > 0) {
                    _.forEach(indicateurTrouve.listeValeurs, (valeur: Modeles.Application.IValeurFiltre) => {
                        if (listeValeursActives.indexOf(valeur.libelle) >= 0) {
                            valeur.actif = true;
                        }
                    });
                }
                this.selectionnerListeFiltre();
            }
        }

        // dans HTML, listeIndicateurs remplacé par getListeIndicateurs(noIndex)
        // ce qui permet de filtrer BEGACLI dans le 1er ou 2ème filtre, si présent dans l'autre.
        public getListeIndicateurs(noIndex: number): Array<Modeles.Application.IIndicateurFiltre> {
            // 2 filtres max. donc noIndex vaut 0 ou 1
            let liste: Array<Modeles.Application.IIndicateurFiltre>;
            let presenceBegacli: boolean = this.presenceBegacliAutreIndex(noIndex);
            liste = [];
            _.forEach(this.listeIndicateurs, (unIndicateur: Modeles.Application.IIndicateurFiltre) => {
                if (presenceBegacli === true) {
                    if (unIndicateur.indicateur.code !== Enum.Indicateur.CODE.BEGACLI.toString()) {
                        liste.push(unIndicateur);
                    }
                } else {
                    liste.push(unIndicateur);
                }
            });
            //console.log("-> getListeIndicateurs noIndex : ", noIndex);
            //console.log("-> getListeIndicateurs liste : ", liste);
            return liste;
        }

        public presenceBegacliAutreIndex(noIndex: number): boolean {
            if (this.listeFiltres.length === 1) {
                // pas d'autre filtre car 1 seul
                return false;
            };
            // l'autre index
            let index: number = 0;
            if (noIndex === 0) {
                index = 1;
            };
            // l'autre filtre
            let filtre: Modeles.Application.IFiltre = this.listeFiltres[index];
            if (filtre && filtre.indicateur && filtre.indicateur.indicateur && filtre.indicateur.indicateur.code === Enum.Indicateur.CODE.BEGACLI.toString()) {
                return true;
            }
            return false;
        }

        public begacliChangeMaj(lettreBegacli: Modeles.Application.ILettreBegacli) {
            // console.log("--> lettreBegacli Maj : ", lettreBegacli);
            if (lettreBegacli.choisiMaj === true) {
                lettreBegacli.choisiMin = false;
            }

        }

        public begacliChangeMin(lettreBegacli: Modeles.Application.ILettreBegacli) {
            // console.log("--> lettreBegacli Min : ", lettreBegacli);
            if (lettreBegacli.choisiMin === true) {
                lettreBegacli.choisiMaj = false;
            }
        }


        public selectionnerListeFiltre(): void {
            // Initialisation de la liste 
            type listeFiltreParIndicateur = {
                [key: string]: Array<Enum.Filtre.COMPARATEUR>;
            }

            const listeDeListeComparateur: listeFiltreParIndicateur = {
                "DateDerniereRevue": Constantes.Indicateur.LISTE_COMPARATEUR_DERNIERE_REVUE,
                "DateDerniereRevueRel": Constantes.Indicateur.LISTE_COMPARATEUR_DERNIERE_REVUE
                // "PREMIER_EQUIPEMENT": Constantes.Indicateur.LISTE_COMPARATEUR_INTERVAL // ici virer cette ligne....
            };

            this.listeComparateurs = listeDeListeComparateur[this.filtre.indicateur.indicateur.code] ?
                listeDeListeComparateur[this.filtre.indicateur.indicateur.code] :
                Constantes.Indicateur.LISTE_COMPARATEUR_COMMUNE;

            // Si on selectionne un indicateur n'ayant pas le comparateur selection reinitalise le comparateur
            if (_.indexOf(this.listeComparateurs, this.filtre.comparateur) === -1) {
                this.filtre.comparateur = null;
            }
            // Si on selectionne un indicateur différent on reinitalise les valeurs 
            // (si on ne valide pas le filtre les valeurs précédentes sont restitué)
            if (this.sauvegardeIndicateur
                && this.sauvegardeIndicateur.indicateur.code !== this.filtre.indicateur.indicateur.code) {
                this.filtre.valeurUnique = undefined;
                this.filtre.valeurMultiple1 = undefined;
                this.filtre.valeurMultiple2 = undefined;
            }
            this.sauvegardeIndicateur = this.filtre.indicateur;
        }
        /**
         * Méthode appelée lors du clique sur le bouton Supprimer de la condition
         * @returns {void}
         */
        public supprimerCondition(): void {
            // Initialisation de l'utilisation de l'indicateur à faux
            if (this.filtre.indicateur) {
                if (this.estVueClient) {
                    this.filtre.indicateur.utilise = false;
                } else {
                    this.filtre.indicateur.utiliseRelationEco = false;
                }
            }

            // Suppression du filtre de la liste des filtres
            this.listeFiltres.splice(this.listeFiltres.indexOf(this.filtre), 1);

            //S'il ne reste plus qu'un filtre
            if (this.listeFiltres.length === 1) {
                // on supprime l'opérateur
                this.listeFiltres[0].operateur = null;
            }
        }

        /**
         * Méthode appelée lors de la selection d'un indicateur
         * @returns {void}
         */
        public selectionIndicateur(): void {
            this.selectionnerListeFiltre();
           
            if (this.dernierIndicateurSelect) {
                if (this.estVueClient) {
                    this.dernierIndicateurSelect.utilise = false;
                } else {
                    this.dernierIndicateurSelect.utiliseRelationEco = false;
                }
            }

            if (this.filtre.indicateur) {
                if (this.estVueClient) {
                    this.filtre.indicateur.utilise = true;
                } else {
                    this.filtre.indicateur.utiliseRelationEco = true;
                }
                this.dernierIndicateurSelect = this.filtre.indicateur;
            }
        }
        public get comparateurUniqueInactif(): boolean {
            return this.estComparateurDeTypeEntre
                || (_.indexOf(Constantes.Indicateur.LISTE_COMPARATEUR, this.filtre.comparateur) === -1);
        }

        /**
         * Méthode permettant de savoir si un comparateur est du type Entre
         * @param {Enum.Filtre.COMPARATEUR} comparateur
         * @returns {boolean}
         */
        public comparateurEstDeTypeEntre(comparateur: Enum.Filtre.COMPARATEUR): boolean {
            return comparateur === Enum.Filtre.COMPARATEUR.ENTRE;
        }
        /**
         * Méthode permettant de savoir si un comparateur est du type = NC
         * @param {Enum.Filtre.COMPARATEUR} comparateur
         * @returns {boolean}
         */
        public comparateurEstDeTypeNC(comparateur: Enum.Filtre.COMPARATEUR): boolean {
            return comparateur === Enum.Filtre.COMPARATEUR.NC;
        }
        /**
         * Méthode permettant de savoir si un comparateur est du type = Null (PlaceHolder)
         * @param {Enum.Filtre.COMPARATEUR} comparateur
         * @returns {boolean}
         */
        public comparateurNonRenseigne(comparateur: Enum.Filtre.COMPARATEUR): boolean {
            return !comparateur;
        }
        /**
         * Propriété récupérent le type d'indicateur
         */
        public get estComparateurDeTypeEntre(): boolean {
            return this.comparateurEstDeTypeEntre(this.filtre.comparateur);
        }
        /**
         * Propriété récupérent le type d'indicateur
         */
        public get typeIndicateur(): Enum.Indicateur.TYPE {
            return this.estIndicateur ? this.filtre.indicateur.indicateur.typeIndicateur : null;
        }
        /**
         * Propriété retourne le code de l'indicateur
         */
        public get codeIndicateur(): string {
            return this.estIndicateur ? this.filtre.indicateur.indicateur.code : null;
        }

        public get estIndicateur(): boolean {
            return (this.filtre
                && this.filtre.indicateur
                && this.filtre.indicateur.indicateur) ? true : false;
        }
        /**
         * Propriété retournant la liste des valeur possible
         */
        public get listeValeurs(): Modeles.Application.IValeurFiltre[] {
            return (this.filtre
                && this.filtre.indicateur) ?
                this.filtre.indicateur.listeValeurs : null;
        }
        /**
         * Propriété indiquant de cacher le champ saisie date simple
         */
        public get cacheChampSaisieDateSimple(): boolean {
            return this.comparateurEstDeTypeEntre(this.filtre.comparateur)
                || this.comparateurNonRenseigne(this.filtre.comparateur);
        }
        /**
         * Propriété indiquant de cacher le champ saisie date
         */
        public get cacheChampsSaisieDate(): boolean {
            return (_.indexOf(Constantes.Indicateur.LISTE_COMPARATEUR_DERNIERE_REVUE, this.filtre.comparateur) !== -1) ||
                this.comparateurEstDeTypeNC(this.filtre.comparateur);
        }
        /**
         * Propriété indiquant si c'est l'indicateur de type date
         */
        public get estIndicateurDeTypeDate(): boolean {
            return this.typeIndicateur === Enum.Indicateur.TYPE.DATE;
        }

        /**
         * Propriété indiquant si c'est l'indicateur de type numérique
         */
        public get estIndicateurNumerique(): boolean {
            return _.indexOf(Constantes.Indicateur.LISTE_INDICATEUR_NUMERIQUE, this.typeIndicateur) !== -1;
        }

        /**
         * Propriété indiquant le comparateur de type NC
         */
        public get estComparateurDeTypeNC(): boolean {
            return this.comparateurEstDeTypeNC(this.filtre.comparateur);
        }

        /**
         * Propriété retournant l'unité borne min de l'indicateur
         */
        public get uniteMin(): string {
            return this.getUnite("");
        }

        /**
         * Propriété retournant l'unité borne max de l'indicateur
         */
        public get uniteMax(): string {
            return this.getUnite(this.codeIndicateur === Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TAG.toString() ? "mois" : "");
        }

        public get estUniteMin(): boolean {
            return this.uniteMin
                && this.uniteMin.length !== 0;
        }

        private getUnite(chaineMois: string): string {
            return this.estIndicateurMontant ? this.devise :
                (this.estIndicateurPourcent ? "%" :
                (!this.estIndicateurDeTypeDate ? chaineMois : ""));
        }

        /**
         * Propriété retournant la devise de l'indicateur
         */
        public get devise(): string {
            return (_.indexOf(Constantes.Indicateur.INDICATEUR_EN_EURO, this.codeIndicateur) !== -1) ? "€" : "k€";
        }
        /**
         * Propriété indiquant l'indicateur de type montant
         */
        public get estIndicateurMontant(): boolean {
            return this.typeIndicateur === Enum.Indicateur.TYPE.MONTANT;
        }
        /**
         * Propriété indiquant l'indicateur de type pourcentage
         */
        public get estIndicateurPourcent(): boolean {
            return this.typeIndicateur === Enum.Indicateur.TYPE.POURCENT;
        }
        /**
         * Propriété indiquant l'indicateur de type texte
         */
        public get estIndicateurTexte(): boolean {
            return this.typeIndicateur === Enum.Indicateur.TYPE.TEXTE;
        }

        public get estIndicateurBegacli(): boolean {
            return this.typeIndicateur === Enum.Indicateur.TYPE.BEGACLI;
        }

    }
    // Déclaration du controleur
    app.controller("PfBlocConditionFiltreControleur", PfBlocConditionFiltreControleur);
} 