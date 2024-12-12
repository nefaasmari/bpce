/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-diagramme-donut
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfDiagrammeDonutControleur {
        public static CLASS_NAME = "PfDiagrammeDonutControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfDiagrammeDonutControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Angular.$element,
            Constantes.Inject.LibrairieD3.creationDonutService,
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.statService,
            Constantes.Inject.Angular.$scope
        ];

        // Variables d'entrées
        public svgId: string;
        public config: Services.LibrairieD3.IConfigDonutD3;
        public listeDonuts: Array<string> = [Constantes.Application.DONUT_PME_ESI, Constantes.Application.DONUT_PRO];

        // Variables utiles
        public listeConfigPuceLegende: Array<Portefeuille.Controleurs.IConfigPuceLegende>;

        /**
         * Constructeur
         */
        constructor(
            private $element: ng.IAugmentedJQuery,
            private creationDonutService: Services.LibrairieD3.ICreationDonutService,
            private eventService: Services.Application.IEventService,
            private statService: Services.Application.IStatsService,
            private scope: ng.IScope
        ) {
            this.eventService.setPfDiagrammeDonutControleur(this);
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        public initialiser(): void {
            PfDiagrammeDonutControleur.logger.info(">>> Appel de la méthode : PfDiagrammeDonutControleur.initialiser <<<");
            
            this.$element.ready(() => {
                let existeDonneePertinente: number = -1; //-1 indique non trouvée

                //On cherche une donnée > 0; càd pertinente pour afficher un donut à pourcentages
                existeDonneePertinente = _.findIndex(this.config.listeDonnees, (donneeLue: Services.LibrairieD3.IDonneeFluxD3) => {
                    if (donneeLue && donneeLue.pourcentage > 0) {
                        return true;
                    }
                });
                // Gestion du cas avec aucun client 
                if (this.config.nombreClients === "0") {
                    existeDonneePertinente = -1;
                }

                if (existeDonneePertinente === -1) {
                    //Aucune donnée pertinente trouvée => affichage d'un donut Gris sans chiffre, ni légende
                    let configDonutGris: Services.LibrairieD3.IConfigDonutD3 = <Services.LibrairieD3.IConfigDonutD3>{
                        titre: this.config.titre,
                        degrade: Services.LibrairieD3.DEGRADE_DONUT.GRIS,
                        nombreClients: this.config.nombreClients,
                        listeDonnees: []
                    };

                    configDonutGris.listeDonnees.push(<Services.LibrairieD3.IDonneeFluxD3>{
                        nom: "Donut Gris",
                        pourcentage: Number.MAX_VALUE
                    });

                    this.creationDonutService.creerDonut(configDonutGris, this.svgId);

                    this.listeConfigPuceLegende = [];
                } else {
                    // Au moins un pourcentage est différent de 0, donc significatif => on affiche un donut coloré et la(les) légende(s) qui l'accompagne(nt)
                    this.creationDonutService.creerDonut(this.config, this.svgId);

                    if (this.config && this.config.listeDonnees) {
                        this.listeConfigPuceLegende = [];

                        let echelle = this.creationDonutService.getCouleurDegrade(this.config.degrade);

                        _.forEach(this.config.listeDonnees, (donneeLue: Services.LibrairieD3.IDonneeFluxD3) => {
                            let configPuceLegende: Portefeuille.Controleurs.IConfigPuceLegende = <Portefeuille.Controleurs.IConfigPuceLegende>{};

                            configPuceLegende.intitule = donneeLue.nom;

                            configPuceLegende.couleur = echelle(donneeLue.nom);
                            configPuceLegende.affichagePuceLegendeActif = (donneeLue.pourcentage && donneeLue.pourcentage > 0) ? true : false;

                            this.listeConfigPuceLegende.push(configPuceLegende);
                        });
                    }
                }

                this.scope.$applyAsync();
            });
        }

        public echangerDonuts(item: string, model: any, label: any, evt: any): void {
            this.statService.getStatsRdvEtPortefeuille().then((statsRdvEtPortefeuille: Modeles.ApplicationStats.IRdvPtf) => {
                if (statsRdvEtPortefeuille) {
                    this.config = Services.Utils.ApplicationUtils.getConfigDonutSelonType(item, statsRdvEtPortefeuille);

                    this.initialiser();
                }
            });
        }
    }

    // Déclaration du controleur
    app.controller("PfDiagrammeDonutControleur", PfDiagrammeDonutControleur);
} 