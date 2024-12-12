/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif des habilitations
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer le choix EDS
     */
    class HabilitationService implements IHabilitationService {
        public static CLASS_NAME = "EventService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(HabilitationService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [];

        // Variables utiles
        private habiliteAgenceNiveau2: boolean;
        private habiliteAccesPNB: boolean;
        private habiliteConsultREVUE: boolean;
        private habiliteMajREVUE: boolean;
        private habiliteConsultAFFAIRES: boolean;
        private habiliteConsultPropositions: boolean;
        private habiliteConsultPotProspect: boolean;
        private habiliteConsultSegmentations: boolean;

        /**
         * Constructeur
         */
        constructor() { }

        /**
         * Méthode permettant de modifier l'habilitation niveau 2
         * @param {boolean} estHabilite
         * @return {void}
         */
        public setHabiliteAgenceNiveau2(estHabilite: boolean): void {
            this.habiliteAgenceNiveau2 = estHabilite;
        }

        /**
         * Méthode permettant de savoir si l'utilisateur est habilité agence niveau 2
         * @return {boolean}
         */
        public estHabiliteAgenceNiveau2(): boolean {
            return this.habiliteAgenceNiveau2;
        }

        /**
         * Méthode permettant de modifier l'habilitation d'acces aux donnnees PNB
         * @param {boolean} estHabilite
         * @return {void}
         */
        public setHabiliteAccesPNB(estHabilite: boolean): void {
            this.habiliteAccesPNB = estHabilite;
        }

        /**
         * Méthode permettant de savoir si l'utilisateur est habilité acces aux donnnees PNB
         * @return {boolean}
         */
        public estHabiliteAccesPNB(): boolean {
            return this.habiliteAccesPNB;
        }

        /**
         * Méthode permettant de modifier l'habilitation d'acces a la consultation revue de portefeuille
         * @param {boolean} estHabilite
         * @return {void}
         */
        public setHabiliteConsultRevue(estHabilite: boolean): void {
            this.habiliteConsultREVUE = estHabilite;
        }

        /**
         * Méthode permettant de savoir si l'utilisateur est habilité a la consultation revue de portefeuille
         * @return {boolean}
         */
        public estHabiliteConsultRevue(): boolean {
            return this.habiliteConsultREVUE;
        }

        /**
         * Méthode permettant de modifier l'habilitation d'acces a la mise à jour revue de portefeuille
         * @param {boolean} estHabilite
         * @return {void}
         */
        public setHabiliteMajRevue(estHabilite: boolean): void {
            this.habiliteMajREVUE = estHabilite;
        }

        /**
         * Méthode permettant de savoir si l'utilisateur est habilité a la mise à jour revue de portefeuille
         * @return {boolean}
         */
        public estHabiliteMajRevue(): boolean {
            return this.habiliteMajREVUE;
        }

        /**
         * Méthode permettant de modifier l'habilitation d'acces a la consultation des affaires
         * @param {boolean} estHabilite
         * @return {void}
         */
        public setHabiliteConsultAffaires(estHabilite: boolean): void {
            this.habiliteConsultAFFAIRES = estHabilite;
        }

        /**
         * Méthode permettant de modifier l'habilitation d'acces a la consultation des propositions
         * @param {boolean} estHabilite
         * @return {void}
         */
        public setHabiliteConsultPropositions(estHabilite: boolean): void {
            this.habiliteConsultPropositions = estHabilite;
        }

        /**
         * Méthode permettant de savoir si l'utilisateur est habilité a la consultation des affaires
         * @return {boolean}
         */
        public estHabiliteConsultAffaires(): boolean {
            return this.habiliteConsultAFFAIRES;
        }

        /**
         * Méthode permettant de savoir si l'utilisateur est habilité a la consultation des propositions en cours
         * @return {boolean}
         */
        public estHabiliteConsultPropositions(): boolean {
            return this.habiliteConsultPropositions;
        }


        /**
         * Méthode permettant de modifier l'habilitation d'acces a la consultation des affaires
         * @param {boolean} estHabilite
         * @return {void}
         */
        public setHabiliteConsultPotentielProspect(estHabilite: boolean): void {
            this.habiliteConsultPotProspect = estHabilite;
        }

        /**
         * Méthode permettant de savoir si l'utilisateur est habilité a la consultation du potentiel prospect
         * @return {boolean}
         */
        public estHabiliteConsultPotentielProspect(): boolean {
            return this.habiliteConsultPotProspect;
        }

        /**
         * Méthode permettant de modifier l'habilitation d'acces a la consultation des segmentations
         * @param {boolean} estHabilite
         * @return {void}
         */
        public setHabiliteConsultSegmentations(estHabilite: boolean): void {
            this.habiliteConsultSegmentations = estHabilite;
        }

        /**
         * Méthode permettant de savoir si l'utilisateur est habilité a la consultation des segmentations
         * @return {boolean}
         */
        public estHabiliteConsultSegmentations(): boolean {
            return this.habiliteConsultSegmentations;
        }
    }

    /**
     * Interface de la classe HabilitationService
     */
    export interface IHabilitationService {
        setHabiliteAgenceNiveau2(estHabilite: boolean): void;
        estHabiliteAgenceNiveau2(): boolean;
        setHabiliteAccesPNB(estHabilite: boolean): void;
        estHabiliteAccesPNB(): boolean;
        setHabiliteConsultRevue(estHabilite: boolean): void;
        estHabiliteConsultRevue(): boolean;
        setHabiliteMajRevue(estHabilite: boolean): void;
        estHabiliteMajRevue(): boolean;
        setHabiliteConsultAffaires(estHabilite: boolean): void;
        estHabiliteConsultAffaires(): boolean;
        setHabiliteConsultPropositions(estHabilite: boolean): void;
        estHabiliteConsultPropositions(): boolean;
        setHabiliteConsultPotentielProspect(estHabilite: boolean): void;
        estHabiliteConsultPotentielProspect(): boolean;
        setHabiliteConsultSegmentations(estHabilite: boolean): void;
        estHabiliteConsultSegmentations(): boolean;
    }

    // Déclaration du service
    app.service("HabilitationService", HabilitationService);
}  