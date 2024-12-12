/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Application {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * service d'initialisation de l'application
     */
    export class InitialisationApplicationService {
        public static CLASS_NAME = "InitialisationApplicationService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(InitialisationApplicationService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject: string[] = [
            Constantes.Inject.Angular.$rootScope,
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.popupService,
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.habilitationService,
            Constantes.Inject.Services.preferencesService
        ];

        public promesseInitialisation: boolean = false;

        private static LISTE_HABILITATION: string[] = [
            Constantes.Application.CODE_HABILITATION_CHOIX_AGENT, // 0
            Constantes.Application.CODE_HABILITATION_AGENCE_NIVEAU_2, // 1
            Constantes.Application.CODE_HABILITATION_ACCES_PNB, // 2
            Constantes.Application.CODE_HABILITATION_CONSULT_REVUE, // 3
            Constantes.Application.CODE_HABILITATION_MAJ_REVUE, // 4
            Constantes.Application.CODE_HABILITATION_CONSULT_AFFAIRES, //5 
            Constantes.Application.CODE_HABILITATION_CONSULT_POT_PROSPECT, //6 
            Constantes.Application.CODE_HABILITATION_CONSULT_SEGMENTATIONS, // 7
            Constantes.Application.CODE_HABILITATION_CHOIX_EDS, // 8
            Constantes.Application.CODE_HABILITATION_CONSULT_PROPOSITIONS //9

        ];

        private static SERVICE_AGENT_INIT: MyWay.Services.IServiceAgentInitialisation = {
            codeApplication: "portefeuille",
            disableScopeSave: false,
            scopeType: MyWay.Services.Context.ScopeType.Service,
            donneesScopeASauvegarder: ["portefeuille"]
        };

        // Constructeur
        constructor(
            private $rootScope: ng.IRootScopeService,
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $q: ng.IQService,
            private $location: ng.ILocationService,
            private contexteService: Services.Application.IContexteService,
            private popupService: Services.Application.IPopupService,
            private eventService: Services.Application.IEventService,
            private habilitationService: Services.Application.IHabilitationService,
            private preferencesService: Services.Application.IPreferencesService) {
        }

        /**
         * Initialisation des services
         */
        public initialisation(): ng.IPromise<void> {
            let defer = this.$q.defer();
            if (!this.promesseInitialisation) {
                return <ng.IPromise<void>>this.serviceAgentExtended.init(
                    InitialisationApplicationService.SERVICE_AGENT_INIT).then(() => {
                    return this.contexteService.getAuthentification();
                }).then(() => {
                    let promises: ng.IPromise<any>[] = [];
                    promises.push(this.contexteService.getContexte());
                    promises.push(this.preferencesService.completerCreationPaniers());
                    InitialisationApplicationService.logger.info(">>> Appel de la méthode : InitialisationApplicationService.initialisation <<<");
                    return MyWay.Services.CoreCommon.ServiceDePromesse.all(promises).then((resultat: any) => {
                        return this.eventService.initialiserListePortfeuilleIndexControleur().then(() => {
                            return this.serviceAgentExtended.Habilitation.EstHabilite(InitialisationApplicationService.LISTE_HABILITATION).
                                then((habilitations: Array<boolean>) => {
                                // a laisser car utile pr débugger les habilitations meme en prod
                                console.log("--> habilitations : ", habilitations); 

                                let estHabiliteChoixAgent = habilitations[0];
                                let estHabiliteAgenceNiv2 = habilitations[1];
                                this.habilitationService.setHabiliteAgenceNiveau2(estHabiliteAgenceNiv2);
                                this.habilitationService.setHabiliteAccesPNB(habilitations[2]);
                                this.habilitationService.setHabiliteConsultRevue(habilitations[3]);
                                this.habilitationService.setHabiliteMajRevue(habilitations[4]);
                                this.habilitationService.setHabiliteConsultAffaires(habilitations[5]);
                                this.habilitationService.setHabiliteConsultPotentielProspect(habilitations[6]);
                                this.habilitationService.setHabiliteConsultSegmentations(habilitations[7]);
                                let estHabiliteChoixEds = habilitations[8];
                                this.habilitationService.setHabiliteConsultPropositions(habilitations[9]);
                                
                                this.eventService.initialiserHabilitationChoixAgentIndexControleur(estHabiliteChoixAgent);
                                this.eventService.initialiserHabilitationChoixEDSIndexControleur(estHabiliteChoixEds);

                                // Dans le cas d'un retour de debranchement, on vérifie si l'eds visualisée est dans le contexte LISA
                                return this.serviceAgentExtended.getFromContext(Constantes.Contexte.CONTEXTE_GERR_PORTF).
                                    then((contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille) => {
                                        console.log("=>>>>> Retour débranchement contexteGererPortefeuille", contexteGererPortefeuille);
                                        if (contexteGererPortefeuille &&
                                            contexteGererPortefeuille.objetEdsVisu) {
                                            return this.contexteService.getContexte().then((ctx: Modeles.Application.IContexte) => {
                                                console.log("=>>>>> Retour débranchement getContexte", ctx);
                                                return this.eventService.majDonneesDonneesEdsIndexControleur(
                                                    contexteGererPortefeuille.objetEdsVisu.objCaractAgent,
                                                    ctx,
                                                    contexteGererPortefeuille.objetEdsVisu.listePtfVisu).then(() => {
                                                        this.promesseInitialisation = true;
                                                        this.$location.path(contexteGererPortefeuille.objetEdsVisu.locationPath);
                                                        return this.$q.when();
                                                    });
                                                });
                                        } else {
                                            this.promesseInitialisation = true;
                                            return this.$q.when();
                                        }
                                    });
                                });
                            });
                        }).catch((error: MyWay.Services.Erreur) => {
                        defer.reject();
                        this.popupService.showErreur(error);
                    });
                }).catch((error: MyWay.Services.Erreur) => {
                    defer.reject();
                    this.popupService.showErreur(error);
                });
            } else {
                return this.$q.when();
            }
        }
    }

    /**
     * Interface de la classe InitialisationService
     */
    export interface IInitialisationService {
        initialisation(): ng.IPromise<void>;
    }

    app.service(InitialisationApplicationService.CLASS_NAME, InitialisationApplicationService);
}