/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-element-eds
 * @module portefeuille.Controleurs
 * @author S0005355 (Eric ALBERT)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfElementEdsControleur {
        public static CLASS_NAME = "PfElementEdsControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfElementEdsControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            "$compile",
            Constantes.Inject.Services.choixUtilisateurService];

        // Variables d'entrées
        public eds: Modeles.Application.IAgenceEds;

        // Variables utiles

        /**
         * Constructeur
         */
        constructor(
            private $compile: ng.ICompileService,
            private choixUtilisateurService: Services.Application.IChoixUtilisateurService) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfTuileIndicateurControleur.logger.info(">>> Appel de la méthode : PfTuileIndicateurControleur.initialiser <<<");
        }

        /**
         * 
         */
        private get nomEds(): string {
            return (this.eds &&
                 this.eds.nomEds &&
                 this.eds.nomEds.length > 0) ?
                this.eds.nomEds :
                "-x-";
        }

        /**
         * 
         */
        public set edsSelectionne(edsItem: Modeles.Application.IAgenceEds) {
            this.choixUtilisateurService.edsSelectionne = edsItem;
        }

        /**
         * 
         */
        public ouvrir(): ng.IPromise<void> {
            if (!this.eds.agencesInferieur) {
                return this.choixUtilisateurService.rechercherEdsInferieurs(this.eds).then(() => {
                    this.eds.affiche = true;
                    return;
                });
            } else {
                this.eds.affiche = !this.eds.affiche;
            }
        }

        /**
         * 
         */
        public get estfermer(): boolean {
            return !(this.eds && this.eds.affiche);
        }

        /**
         * 
         */
        public get estOuvert(): boolean {
            return (this.eds && this.eds.affiche);
        }

        public get estCoche(): boolean {
            return this.choixUtilisateurService.edsSelectionne === this.eds;
        }

        /**
         * 
         */
        public selectionnerEDS() {
            return this.choixUtilisateurService.edsSelectionne = this.eds;
        }

        /**
         * 
         */
        public get estVide(): boolean { 
            return (this.eds && this.eds.agencesInferieur && this.eds.agencesInferieur.length === 0);
        }
    }

    // Déclaration du controleur
    app.controller("PfElementEdsControleur", PfElementEdsControleur);
} 