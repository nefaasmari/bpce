/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-indicateur-pourcentage
 * @module portefeuille.Controleurs
 * @author S0005355 (Eric ALBERT)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfIndicateurPourcentageControleur {
        public static CLASS_NAME = "PfIndicateurPourcentageControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfIndicateurPourcentageControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Services.creationPourcentageService
        ];

        // Variables d'entrées
        public config: Services.LibrairieD3.IConfigPourcentageD3;

        // Variables utiles

        /**
         * Constructeur
         */
        constructor(private creationPourcentageService: Portefeuille.Services.LibrairieD3.ICreationPourcentageService) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfIndicateurColonneControleur.logger.info(">>> Appel de la méthode : PfIndicateurPourcentageControleur.initialiser <<<");

            angular.element(document.querySelector("#" + this.config.id)).ready(() => {
                this.creationPourcentageService.creerPourcentage(this.config, this.config.id);
            });
        }

        /**
         * 
         */
        public get id(): string {
            return this.config.id;
        }

        /**
         * 
         */
        public get isIE(): boolean {
            return Services.Utils.ApplicationUtils.isIE();
        }
    }

    // Déclaration du controleur
    app.controller("PfIndicateurPourcentageControleur", PfIndicateurPourcentageControleur);
} 