/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service de gestion des indicateurs
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service de gestion des indicateurs
     */
    class IndicateurService implements IIndicateurService {
        public static CLASS_NAME = "IndicateurService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(IndicateurService.CLASS_NAME);

        // Proprietés
        private listeIndicateursChoix: Array<Modeles.Application.IIndicateurChoix>;

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.Services.habilitationService
        ];

        /**
         * Constructeur
         */
        constructor(
            private habilitationService: Services.Application.IHabilitationService
        ) {
            this.listeIndicateursChoix = [];
        }

        /**
         * 
         */
        public getListeIndicateurChoix(): Array<Modeles.Application.IIndicateurChoix> {
            return this.listeIndicateursChoix;
        }

        /**
         * 
         * @param liste
         */
        public setListeIndicateurChoix(liste: Array<Modeles.Application.IIndicateurChoix>): void {
            this.listeIndicateursChoix = liste;
        }

        /**
         * Méthode qui retourne la liste des nouveaux indicateurs choisis nécéssitant un appel REST
         * @param liste
         */
        public getListeEcartIndicateurParametrable(liste: Array<Modeles.Application.IIndicateurChoix>): Array<Modeles.Application.IIndicateurType> {
            let reponse: Array<Modeles.Application.IIndicateurType> = [];
            if (this.listeIndicateursChoix) {
                let listeIndicateurNew: Array<string> = _.pluck(liste, "indicateur.code");
                let listeIndicateurOld: Array<string> = _.pluck(this.listeIndicateursChoix, "indicateur.code");
                let ecarts: Array<string> = listeIndicateurNew.filter((item: string) => listeIndicateurOld.indexOf(item) < 0);
                if (ecarts) {
                    _.forEach(this.getListeTotalIndicateursParametrables(), (indic: Modeles.Application.IIndicateurType) => {
                        if (ecarts.indexOf(indic.code) > -1) {
                            reponse.push(indic);
                        }
                    });
                }
            } 
            return reponse;
        }

        /**
         * Méthode de récupération des indicateurType pour lesquels la propriété codeRest est non vide
         */
        private getListeTotalIndicateursParametrables(): Array<Modeles.Application.IIndicateurType> {
            let listeIndicateursParametrables: Array<Modeles.Application.IIndicateurType> = this.getListeTotaleIndicateursType();
            _.remove(listeIndicateursParametrables, (indic: Modeles.Application.IIndicateurType) => {
                return indic.codeRest === "";
            });
            return listeIndicateursParametrables;
        }

        /**
         * Recuperation de liste de tous les type d'indicateurs
         * @returns {Array<Modeles.Application.IIndicateurType>}
         */
        public getListeTotaleIndicateursType(): Array<Modeles.Application.IIndicateurType> {
            let reponse: Array<Modeles.Application.IIndicateurType> = angular.copy(Constantes.Indicateur.LISTE_TOTAL_INDICATEUR);
            let isNotHabiliteFamillePNB: boolean = !this.habilitationService.estHabiliteAccesPNB();
            let isNotHabiliteRevue: boolean = !this.habilitationService.estHabiliteConsultRevue();
            let isNotHabiliteAffaireOuRevue: boolean = !this.habilitationService.estHabiliteConsultAffaires() || !this.habilitationService.estHabiliteConsultRevue();
            let isNotHabilitePotentielProspect: boolean = !this.habilitationService.estHabiliteConsultPotentielProspect();

            if (isNotHabiliteFamillePNB ||
                isNotHabiliteRevue ||
                isNotHabiliteAffaireOuRevue ||
                isNotHabilitePotentielProspect) {
                reponse = _.filter(reponse, (indic: Modeles.Application.IIndicateurType) => {
                        // on supprime les indicateurs de la famille PNB
                    return ((isNotHabiliteFamillePNB) ? (indic.famille !== Enum.Indicateur.FAMILLE.PNB) : true) &&
                        // on supprime les indicateurs de la famille Revue (ca comprend le score d'appétence)
                        ((isNotHabiliteRevue) ? (indic.famille !== Enum.Indicateur.FAMILLE.REVUE) : true) &&
                        // on supprime les indicateurs de la famille Affaires
                        ((isNotHabiliteAffaireOuRevue) ? (indic.famille !== Enum.Indicateur.FAMILLE.OPPORTUNITES &&
                            indic.code !== Enum.Indicateur.CODE.NB_PROPOSITIONS_EN_COURS.toString()) : true) &&
                        // on supprime les indicateurs de la famille Revue
                        // il faut seulement retirer cet indicateur, pas la famille !
                        ((isNotHabilitePotentielProspect) ? (indic.code !== Enum.Indicateur.CODE.POTENTIEL_PROSPECT.toString()) : true);
                });
            }
            return reponse;
        }

        /**
         * Retourne le panier de forcage
         * @returns {Array<Modeles.Application.IIndicateurType>}
         */
        public getPanierDeForcage(): Modeles.Application.IPanierPreferences {
            let panierPreference = <Modeles.Application.IPanierPreferences>{};
            panierPreference.listeCodesIndicateurs = [];
            panierPreference.listeCodesIndicateurs.push(...Constantes.Indicateur.INDICATEUR_PANIER_FORCAGE);
            // Evolution multi panier
            panierPreference.estDefaut = false;
            panierPreference.nom = Constantes.Application.NOM_PANIER_FORCAGE;
            // fin Evolution multi panier
            return panierPreference;
        }

        /**
         * Retourne la liste des indicateurs spécifiques à la revue
         */
        public getListeIndicateursRevue(): Array<Modeles.Application.IIndicateurChoix> {
            let listeIndicateursRevue: Array<Modeles.Application.IIndicateurChoix> = [];
            let indicateurRevue: Modeles.Application.IIndicateurChoix;
            let position: number;
            _.forEach(this.getListeTotaleIndicateursType(), (indicateurType: Modeles.Application.IIndicateurType) => {
                position = _.indexOf(Constantes.Indicateur.ORDRE_INDICATEUR_REVUE, indicateurType.code);
                if (position !== -1) {
                    indicateurRevue = <Modeles.Application.IIndicateurChoix>{};
                    indicateurRevue.indicateur = indicateurType;
                    indicateurRevue.choisi = true;
                    indicateurRevue.position = position;
                    listeIndicateursRevue.push(indicateurRevue);
                }
            });
            return _.sortByOrder(listeIndicateursRevue, ["position"]);
        }

        /**
         * 
         * @param objet
         * @param codeIndicateur
         */
        public getIndicateurIListeIndicateur(
            objet: Modeles.Application.IListeIndicateur,
            codeIndicateur: Enum.Indicateur.CODE): Modeles.Application.IIndicateur {
            return this.getIndicateur(objet.listeIndicateurs, codeIndicateur);
        }

        /**
         * 
         * @param listeIndicateurs
         * @param codeIndicateur
         */
        public getIndicateur(
            listeIndicateurs: Array<Modeles.Application.IIndicateur>,
            codeIndicateur: Enum.Indicateur.CODE): Modeles.Application.IIndicateur {
            return _.find(listeIndicateurs, { "code": codeIndicateur });
        }
    }

    /**
     * Interface de la classe IndicateurService
     */
    export interface IIndicateurService {
        getListeTotaleIndicateursType(): Array<Modeles.Application.IIndicateurType>;
        getListeIndicateurChoix(): Array<Modeles.Application.IIndicateurChoix>;
        setListeIndicateurChoix(liste: Array<Modeles.Application.IIndicateurChoix>): void;
        getListeEcartIndicateurParametrable(liste: Array<Modeles.Application.IIndicateurChoix>): Array<Modeles.Application.IIndicateurType>;
        getPanierDeForcage(): Modeles.Application.IPanierPreferences;
        getListeIndicateursRevue(): Array<Modeles.Application.IIndicateurChoix>;
        getIndicateurIListeIndicateur(
            objet: Modeles.Application.IListeIndicateur,
            codeIndicateur: Enum.Indicateur.CODE): Modeles.Application.IIndicateur;
        getIndicateur(
            listeIndicateurs: Array<Modeles.Application.IIndicateur>,
            codeIndicateur: Enum.Indicateur.CODE): Modeles.Application.IIndicateur;
    }

    app.service(IndicateurService.CLASS_NAME, IndicateurService);
}  