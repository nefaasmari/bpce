/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-ligne-relation-eco
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfLigneRelationEcoControleur {
        public static CLASS_NAME = "PfLigneRelationEcoControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfLigneRelationEcoControleur.CLASS_NAME);
        //public tableauClientEconomique: Modeles.Tableaux.TableauClientEco;


        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Angular.$filter,
            Constantes.Inject.Angular.$parse,
            Constantes.Inject.Services.eventService
        ];

        // Variables d'entrées
        public relationEconomique: Modeles.Application.IRelationEconomique;
        public listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>;

        // Variables utiles
        public estOuvert: boolean;
        public listeIndicateursAAfficher: Array<Modeles.Application.IIndicateur>;

        /**
         * Constructeur
         */
        constructor(
            private $filter: ng.IFilterService,
            private $parse: ng.IParseService,
            private eventService: Services.Application.IEventService) {
            this.eventService.setPfLigneRelationEcoControleur(this);
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant avec une liste d'indicateurs définis
         * @returns {void}
         */
        public reInitialiser(listeIndicateurs: Array<Modeles.Application.IIndicateurChoix>): void {
            PfLigneRelationEcoControleur.logger.info(">>> Appel de la méthode : PfLigneRelationEcoControleur.initialiser <<<");
            this.estOuvert = false;

            this.listeIndicateursAAfficher = [];

            _.forEach(listeIndicateurs, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {

                let indexIndicateur = _.findIndex(this.relationEconomique.listeIndicateurs, (indicateurData: Modeles.Application.IIndicateur) => {
                    return indicateurData.code === indicateurChoix.indicateur.codeRel;
                });

                if (indexIndicateur !== -1 && indicateurChoix.indicateur.estVisibleColonne) {
                    this.listeIndicateursAAfficher.push(this.relationEconomique.listeIndicateurs[indexIndicateur]);
                }

            });
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfLigneRelationEcoControleur.logger.info(">>> Appel de la méthode : PfLigneRelationEcoControleur.initialiser <<<");
            this.estOuvert = false;

            this.listeIndicateursAAfficher = [];

            _.forEach(this.listeIndicateursTableau, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {

                let indexIndicateur = _.findIndex(this.relationEconomique.listeIndicateurs, (indicateurData: Modeles.Application.IIndicateur) => {
                    return indicateurData.code === indicateurChoix.indicateur.codeRel;
                });

                if (indexIndicateur !== -1 && indicateurChoix.indicateur.estVisibleColonne) {
                    this.listeIndicateursAAfficher.push(this.relationEconomique.listeIndicateurs[indexIndicateur]);
                }
            });
        }

        /**
         * Méthode permettant d'ouvrir ou fermer le détail de la ligne
         * @returns {void}
         */
        public afficherMoinsPlus(): void {
            PfLigneRelationEcoControleur.logger.info(">>> Appel de la méthode : PfLigneRelationEcoControleur.afficherMoinsPlus <<<");
            this.estOuvert = !this.estOuvert;
        }

        public onSelectionChange(selectedObject: Modeles.Application.IClient) {

        }
    }

    // Déclaration du controleur
    app.controller("PfLigneRelationEcoControleur", PfLigneRelationEcoControleur);
} 