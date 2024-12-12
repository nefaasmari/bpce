/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-indicateur-badge
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export interface IDataIndicateurBadge {
        intitule: string;
        valeur: string;
        isSousIntitule: boolean;
        debranchementLisa: number;
        debranchementLocal: string;
        showZero: boolean;  // le lien est quand même affiché si zéro : 0
    }

    /**
     * Classe du controleur
     */
    export class PfIndicateurBadgeControleur {
        public static CLASS_NAME = "PfIndicateurBadgeControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfIndicateurBadgeControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Services.portefeuilleService,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.statService,
            PdtEntreprise.Constantes.Inject.Services.LISA_SERVICE,
            PdtEntreprise.Constantes.Inject.Services.POPUP_SERVICE
        ];

        // Variables d'entrées
        public intitule: string;
        public valeur: string;
        public isSousIntitule: boolean;
        public debranchementLisa: number;
        public debranchementLocal: string;
        public showZero: boolean;

        // Variables utiles
        public chargementIndicateurBadgeEnCours: boolean;

        /**
         * Constructeur
         */
        constructor(
            private portefeuilleService: Services.Application.IPortefeuilleService,
            private contexteService: Services.Application.IContexteService,
            private statsService: Services.Application.IStatsService,
            private lisaService: PdtEntreprise.Services.ILisaService,
            private popupService: PdtEntreprise.Services.IPopupService
        ) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfIndicateurBadgeControleur.logger.info(">>> Appel de la méthode : PfIndicateurBadgeControleur.initialiser <<<");
            this.chargementIndicateurBadgeEnCours = false;
        }

        public show(): boolean {
            return (this.debranchementLisa > 0
                && (this.valeur > "0"
                    || this.showZero === true))
                ? true : false;
        }

        public debrancherVers() {
            PfIndicateurBadgeControleur.logger.info(">>> Appel de la méthode : PfIndicateurBadgeControleur.debrancherVers <<<");
            if (!this.portefeuilleService.getCaracteristiquesAgent()) {
                this.portefeuilleService.getCaracteristiquesAgentConnecte().then((retour: Modeles.Application.ICaracteristiquesAgent) => {
                    this.portefeuilleService.setCaracteristiquesAgent(retour);
                    this.debrancherVersSuite();
                });
            } else {
                this.debrancherVersSuite();
            }
        }

        public debrancherVersSuite(): ng.IPromise<void> {
            PfIndicateurBadgeControleur.logger.info(">>> Appel de la méthode : PfIndicateurBadgeControleur.debrancherVersSuite <<<");

            if (this.debranchementLisa === Constantes.CodeProcessusLisa.CODE_LISA_BILAN_REVUES_PORTEFEUILLE ||
                this.debranchementLisa === Constantes.CodeProcessusLisa.CODE_LISA_BILAN_APPETENCES_PORTEFEUILLE ||
                this.debranchementLisa === Constantes.CodeProcessusLisa.CODE_LISA_GESTION_AFFAIRES ||
                this.debranchementLisa === Constantes.CodeProcessusLisa.CODE_LISA_PROPOSITONS) {

                let contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille = <Modeles.Application.IContexteGererPortefeuille>{};

                let objetEdsChoisi: Modeles.Application.IObjetEdsChoisi = <Modeles.Application.IObjetEdsChoisi>{};
                objetEdsChoisi.objCaractAgent = this.portefeuilleService.getCaracteristiquesAgent();
                objetEdsChoisi.listePtfVisu = _.pluck(_.where(this.portefeuilleService.getListePortefeuillesVisu(), { "estAffiche": true }), "id");
                objetEdsChoisi.nombrePortefeuilleTotalAgent = this.portefeuilleService.getListePortefeuillesVisu().length;
                objetEdsChoisi.locationPath = Constantes.Url.PORTEFEUILLE;
                contexteGererPortefeuille.objetEdsVisu = objetEdsChoisi;

                return this.contexteService.ajouterDonneesDebranchementBilanRevuePortefeuille(contexteGererPortefeuille)
                    .then(() => {
                        return this.lisaService.next(this.debranchementLisa, this.debranchementLocal)
                            .then(() => {
                         //       this.contexteService.supprimerContexteDevenuInutile([Constantes.Contexte.CONTEXTE_VERS_REVUE]);
                            })
                            .catch((erreur: MyWay.Services.Erreur) => {
                                ClientsControleur.logger.debug(">>> Echec sur lisa.next de la méthode : PfIndicateurBadgeControleur.debrancherVers <<<");
                                this.popupService.showErreur(erreur);
                            });
                    });
            } else if (this.debranchementLisa === Portefeuille.Enum.Revue.POPUP_REVUE.POPUP_CLIENTS_A_ACTIVER) {
                let caracteristiquesAgent: Modeles.Application.ICaracteristiquesAgent;
                let listeIdsPortefeuilles: Array<number>;

                if (this.portefeuilleService) {
                    caracteristiquesAgent = this.portefeuilleService.getCaracteristiquesAgent();
                    listeIdsPortefeuilles = _.pluck(_.where(this.portefeuilleService.getListePortefeuillesVisu(), { "estAffiche": true }), "id");

                    if (caracteristiquesAgent && listeIdsPortefeuilles && listeIdsPortefeuilles.length > 0) {
                        this.chargementIndicateurBadgeEnCours = true;

                        this.statsService.getClientsAActiver(caracteristiquesAgent.codeEtablissement, caracteristiquesAgent.identifiantElementStructure, listeIdsPortefeuilles
                        ).then((resultatPromesse: Array<Modeles.ApplicationStats.IClientSimplifie>) => {
                            if (resultatPromesse && resultatPromesse.length > 0) {
                                this.popupService.showModal("vues/template-modale/modale-clients-activer-vue.html", "ModaleClientsActiverControleur", resultatPromesse);
                            }
                        }).catch((erreur: MyWay.Services.Erreur) => {
                            ClientsControleur.logger.debug(">>> Echec sur l'ouverture de la popup des clients à activer: PfIndicateurBadgeControleur.debrancherVers <<<");
                            this.popupService.showErreur(erreur);
                        }).finally(() => {
                        this.chargementIndicateurBadgeEnCours = false;
                        });
                    }
                }
            } else if (this.debranchementLisa === Portefeuille.Enum.Revue.POPUP_REVUE.POPUP_CLIENTS_TARIFICATION) {
                let caracteristiquesAgent: Modeles.Application.ICaracteristiquesAgent;
                let listeIdsPortefeuilles: Array<number>;

                if (this.portefeuilleService) {
                    caracteristiquesAgent = this.portefeuilleService.getCaracteristiquesAgent();
                    listeIdsPortefeuilles = _.pluck(_.where(this.portefeuilleService.getListePortefeuillesVisu(), { "estAffiche": true }), "id");

                    if (caracteristiquesAgent && listeIdsPortefeuilles && listeIdsPortefeuilles.length > 0) {
                        this.chargementIndicateurBadgeEnCours = true;

                        this.statsService.getClientsARenegocier(caracteristiquesAgent.codeEtablissement, caracteristiquesAgent.identifiantElementStructure, listeIdsPortefeuilles
                        ).then((resultatPromesse: Array<Modeles.ApplicationStats.IClientSimplifie>) => {
                            if (resultatPromesse && resultatPromesse.length > 0) { // @note la modale est la mm pr les A activer et les A renégocier
                                this.popupService.showModal("vues/template-modale/modale-clients-activer-vue.html", "ModaleClientsRenegocierControleur", resultatPromesse);
                            }
                        }).catch((erreur: MyWay.Services.Erreur) => {
                            ClientsControleur.logger.debug(">>> Echec sur l'ouverture de la popup des clients à activer: PfIndicateurBadgeControleur.debrancherVers <<<");
                            this.popupService.showErreur(erreur);
                        }).finally(() => {
                            this.chargementIndicateurBadgeEnCours = false;
                        });
                    }
                }
            } else {
                return this.lisaService.next(this.debranchementLisa, this.debranchementLocal)
                    .catch((erreur: MyWay.Services.Erreur) => {
                        ClientsControleur.logger.debug(">>> Echec sur lisa.next de la méthode : PfIndicateurBadgeControleur.debrancherVers <<<");
                        this.popupService.showErreur(erreur);
                    });
            }
        }
    }

    // Déclaration du controleur
    app.controller("PfIndicateurBadgeControleur", PfIndicateurBadgeControleur);
} 