/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Implémentation du service gérant le contexte de l'application
     * @author: S0077481
     */
    class ContexteService implements IContexteService {
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Services.eventService
        ];

        public static CLASS_NAME: string = "ContexteService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ContexteService.CLASS_NAME);
        private contexte: Modeles.Application.IContexte;
        private authentificationInfo: MyWay.Services.Context.AuthentificationInfo;

        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $q: ng.IQService,
            private $location: ng.ILocationService,
            private eventService: Services.Application.IEventService
        ) {
            
        }

        /**
         * Retourne l'objet Authentification
         */
        public getAuthentification(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo> {
            ContexteService.logger.info(">>> Appel de la méthode : ContexteService.getAuthentification <<<");

            if (this.authentificationInfo) {
                return this.$q.when(this.authentificationInfo);
            } else {
                return this.setAuthentification().then(() => {
                    return this.authentificationInfo;
                });
            }
        }

        /**
         * Methode permettant de recuperer les informations d'authentification
         */
        private setAuthentification(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo> {
            ContexteService.logger.info(">>> Appel de la méthode : ContexteService.setAuthentification <<<");
            return this.serviceAgentExtended.getAuthentificationInfo().then((result: MyWay.Services.Context.AuthentificationInfo) => {
                return this.authentificationInfo = result;
            });

        }

        /**
         * Mise en place du contexte LISA
         * @author: S0005354
         */
        public setContexte(): ng.IPromise<Modeles.Application.IContexte> {
            ContexteService.logger.debug(">>> Appel de la méthode : ContexteService.setContexte <<<");
            let contexteRetour: Modeles.Application.IContexte = null;
            if (this.contexte) {
                contexteRetour = this.contexte;
            } else if (this.authentificationInfo &&
                this.authentificationInfo.agentConnecte) {
                contexteRetour = <Modeles.Application.IContexte>{};
                contexteRetour.identifiantUser = this.authentificationInfo.agentConnecte.referenceExterneAgent;
                contexteRetour.codeEtablissement = this.authentificationInfo.codeEtablissement;
                contexteRetour.designation = this.authentificationInfo.agentConnecte.designationLongueAgent;
                contexteRetour.edsUser = +this.authentificationInfo.agentConnecte.numeroInterneEds;
                contexteRetour.edsVisu = +this.authentificationInfo.agentConnecte.numeroInterneEds;
                contexteRetour.edsSuperieurUser = +this.authentificationInfo.agentConnecte.numeroEdsSuperieur;
                this.contexte = contexteRetour;
            }
            return this.$q.when(contexteRetour);
        }

        /**
         * Récupération de l'objet IContexte
         */
        public getContexte(): ng.IPromise<Modeles.Application.IContexte> {
            ContexteService.logger.debug(">>> Appel de la méthode : ContexteApplication.getContexte <<<");
            if (this.contexte) {
                return this.$q.when(this.contexte);
            } else {
                return this.setContexte().then(() => {
                    return this.$q.when(this.contexte);
                });
            }
        }

        /**
         * 
         */
        public getDesignation(): string {
            return (this.contexte) ? this.contexte.designation : "";
        }

        /**
         * 
         * @param edsVisu
         */
        public setEdsVisu(edsVisu: number): void {
            this.contexte.edsVisu = edsVisu;
        }

        /**
         * 
         * @param edsVisu
         */
        public setestVueMultiSuiviPar(estVueMultiSuiviPar: boolean): void {
            this.contexte.estVueMultiSuiviPar = estVueMultiSuiviPar;
        }

        public ajoutPourDebranchementSyntheseClient(identifiantPersonne: string, typeSynthese: string): ng.IPromise<any> {
            var tabPromesses = [];

            let listeClesContexteAEffacer: Array<string> = [
                Constantes.Contexte.IDENTIFIANT_PERSONNE,
                Constantes.Contexte.TYPE_SYNTHESE];

            return this.viderContexteDebranchement(listeClesContexteAEffacer)
                .then(() => {
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.IDENTIFIANT_PERSONNE, identifiantPersonne));
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.TYPE_SYNTHESE, typeSynthese));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.IDENTIFIANT_PERSONNE, identifiantPersonne));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.TYPE_SYNTHESE, typeSynthese));
                    return this.$q.all(tabPromesses)
                        .catch((erreur: MyWay.Services.Erreur) => {
                            ContexteService.logger.error("Erreur lors de l'ajout dans le contexte pour l'appel de synthèse client", erreur);
                            throw erreur;
                        });
                });
        }

        /**
         * Methode permetant d'ajouter les données utiles au débranchement vers Synthèse client
         * @param {string} identifiantPersonne
         * @returns {ng.IPromise<any>}
         */
        public ajouterDonneesDebranchementSyntheseClient(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille, typeSynthese: string): ng.IPromise<any> {
            var tabPromesses = [];

            if (!contexteGererPortefeuille) {
                return this.$q.reject(
                    new MyWay.Services.Erreur("Paramètre contexteGererPortefeuille absent à tort => Débranchement vers Synthèse Client impossible.")
                );
            }

            let listeClesContexteAEffacer: Array<string> = [
                Constantes.Contexte.CONTEXTE_GERR_PORTF,
                Constantes.Contexte.IDENTIFIANT_PERSONNE,
                Constantes.Contexte.TYPE_SYNTHESE];

            return this.viderContexteDebranchement(listeClesContexteAEffacer)
                .then(() => {
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteGererPortefeuille));
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.IDENTIFIANT_PERSONNE, contexteGererPortefeuille.identifiantPersonne));
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.TYPE_SYNTHESE, typeSynthese));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteGererPortefeuille));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.IDENTIFIANT_PERSONNE, contexteGererPortefeuille.identifiantPersonne));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.TYPE_SYNTHESE, typeSynthese));

                    return this.$q.all(tabPromesses)
                        .catch((erreur: MyWay.Services.Erreur) => {
                            ContexteService.logger.error("Erreur lors de l'ajout dans le contexte du contrat d'entrée de synthése client", erreur);
                            throw erreur;
                        });
                });
        }
                        
        /**
         * Methode permettant d'ajouter les données utiles au débranchement vers la revue de portefeuille d'un client
         * @param contexteGererPortefeuille
         */
        public ajouterDonneesDebranchementRevueClient(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void> {
            var tabPromesses = [];

            if (!contexteGererPortefeuille) {
                return this.$q.reject(new MyWay.Services.Erreur("Paramètre contexteGererPortefeuille absent à tort => Débranchement vers Revue Client impossible."));
            }

            let listeClesContexteAEffacer: Array<string> = [
                Constantes.Contexte.CONTEXTE_GERR_PORTF,
                Constantes.Contexte.CONTEXTE_VERS_REVUE
            ];

            return this.viderContexteDebranchement(listeClesContexteAEffacer)
                .then(() => {
                    let contextePourRevue: Modeles.Application.IContexteVersRevue = this.alimenterContexteVersRevue(contexteGererPortefeuille);
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteGererPortefeuille));
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_VERS_REVUE, contextePourRevue));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteGererPortefeuille));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_VERS_REVUE, contextePourRevue));

                    return this.$q.all(tabPromesses)
                        .catch((erreur: MyWay.Services.Erreur) => {
                            ContexteService.logger.error("Erreur lors de l'ajout dans le contexte du contrat d'entrée de la revue client", erreur);
                            throw erreur;
                        });
                });
        }
        

        /**
         * Methode permettant d'ajouter les données utiles au débranchement vers le bilan revue de portefeuille d'une relation économique
         * @param contexteGererPortefeuille
         */
        public ajouterDonneesDebranchementBilanRevueRelationEco(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void> {
            var tabPromesses = [];

            if (!contexteGererPortefeuille) {
                return this.$q.reject(new MyWay.Services.Erreur("Paramètre contexteGererPortefeuille absent à tort => Débranchement vers Bilan Revue Relation éco impossible."));
            }

            let listeClesContexteAEffacer: Array<string> = [
                Constantes.Contexte.CONTEXTE_GERR_PORTF,
                Constantes.Contexte.CONTEXTE_VERS_REVUE
            ];

            return this.viderContexteDebranchement(listeClesContexteAEffacer)
                .then(() => {
                    let contextePourRevue: Modeles.Application.IContexteVersRevue = this.alimenterContexteVersRevue(contexteGererPortefeuille);

                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteGererPortefeuille));
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_VERS_REVUE, contextePourRevue));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteGererPortefeuille));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_VERS_REVUE, contextePourRevue));

                    return this.$q.all(tabPromesses)
                        .catch((erreur: MyWay.Services.Erreur) => {
                            ContexteService.logger.error("Erreur lors de l'ajout dans le contexte du contrat d'entrée du bilan de revues d'une relation économique", erreur);
                            throw erreur;
                        });
                });
        }

        /**
         * Methode permettant d'ajouter les données utiles au débranchement vers le bilan revue de portefeuille
         * @param contexteGererPortefeuille
         */
        public ajouterDonneesDebranchementBilanRevuePortefeuille(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void> {
            var tabPromesses = [];

            if (!contexteGererPortefeuille) {
                return this.$q.reject(new MyWay.Services.Erreur("Paramètre contexteGererPortefeuille absent à tort => Débranchement vers Bilan Revue Portefeuille impossible."));
            }

            let listeClesContexteAEffacer: Array<string> = [
                Constantes.Contexte.CONTEXTE_GERR_PORTF,
                Constantes.Contexte.CONTEXTE_VERS_REVUE,
                Constantes.Contexte.CONTEXTE_EDS_PORTEFEUILLES
            ];

            return this.viderContexteDebranchement(listeClesContexteAEffacer)
                .then(() => {
                    let contextePourRevue: Modeles.Application.IContexteVersRevue = this.alimenterContexteVersRevue(contexteGererPortefeuille);
                    let contextePourEdsPortefeuilles: Modeles.Application.IContexteVersEdsPortefeuilles = this.alimenterContexteVersEsdPortefeuilles(contexteGererPortefeuille);
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteGererPortefeuille));
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_VERS_REVUE, contextePourRevue));
                    //tabPromesses.push(this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_EDS_PORTEFEUILLES, JSON.stringify(contextePourEdsPortefeuilles)));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteGererPortefeuille));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_VERS_REVUE, contextePourRevue));
                    tabPromesses.push(this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_EDS_PORTEFEUILLES, JSON.stringify(contextePourEdsPortefeuilles)));

                    return this.$q.all(tabPromesses)
                        .catch((erreur: MyWay.Services.Erreur) => {
                            ContexteService.logger.error("Erreur lors de l'ajout dans le contexte du contrat d'entrée du bilan de revues d'une liste de portefeuilles", erreur);
                            throw erreur;
                        });
                });
        }

        /**
         * Supprime le(s) contexte(s) dont l'application n'a plus besoin.
         * @param listeClesAEffacer
         */
        public supprimerContexteDevenuInutile(listeClesAEffacer: Array<string>): ng.IPromise<void> {
            return this.viderContexteDebranchement(listeClesAEffacer)
                .then(() => {
                    ContexteService.logger.info("Suppression du contexte réalisée avec succès.");
                })
                .catch((erreur: MyWay.Services.Erreur) => {
                    ContexteService.logger.error("Erreur lors de la suppression du contexte", erreur);
                    throw erreur;
                });
        }

        /**
         * Methode permettant de récupérer du contexte de gestion du retour
         * @returns {ng.IPromise<Modeles.Application.IObjetEdsChoisi>}
         */
        public recupererRetourDebranchement(): ng.IPromise<Modeles.Application.IContexteGererPortefeuille> {
            return this.serviceAgentExtended.getFromContext(Constantes.Contexte.CONTEXTE_GERR_PORTF).then((contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille) => {
                return this.$q.when(contexteGererPortefeuille);
            });
        }

        /**
         * Méthode permettant de vérifier si on est dans un contexte PCM
         * @returns {ng.IPromise<boolean>}
         */
        public isPCM(): ng.IPromise<boolean> {
            ContexteService.logger.info("Vérification intéropérabilité application bancaire");
            return <ng.IPromise<boolean>>this.serviceAgentExtended.Capacites.getCapacite(MyWay.Services.Capacites.REGLE.INTEROP_APPLI_BANCAIRE);
        }

        /**
         * Supprime du contexte toutes les clés passées en paramètre
         * @param listeClesAEffacer
         */
        private viderContexteDebranchement(listeClesAEffacer: Array<string>): ng.IPromise<void> {
            var tabPromesses: ng.IPromise<void>[] = [];

            _.forEach(listeClesAEffacer, (cleLue: string) => {
                if (cleLue) {
                    //tabPromesses.push(this.serviceAgentExtended.removeFromSharedContext(cleLue));
                    // on ne mets plus rien dans le shared contexte. Il n'y a pas de méthode equivalente au remove shared context donc on met "null" dans la valeur
                    tabPromesses.push(this.serviceAgentExtended.addToContext(cleLue, null));
                }
            });

            return this.$q.all(tabPromesses).then((resultats: string[]) => {
                return this.$q.when();
            });
        }

        /**
         * Alimente le contexte nécessaire au fonctionnement de l'application Revue de Portefeuilles à partir de celui de l'application Animer les Portefeuilles
         * @param contexteGererPortefeuille
         */
        private alimenterContexteVersRevue(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): Modeles.Application.IContexteVersRevue {
            let resultat: Modeles.Application.IContexteVersRevue;

            if (contexteGererPortefeuille) {
                resultat = <Modeles.Application.IContexteVersRevue>{};

                //On ne crée les propriétés que si la source est renseignée.
                if (contexteGererPortefeuille.identifiantPersonne) {
                    resultat.identifiantPersonne = contexteGererPortefeuille.identifiantPersonne;
                }

                resultat.estClient = contexteGererPortefeuille.estClient;

                if (contexteGererPortefeuille.raisonSociale) {
                    resultat.raisonSociale = contexteGererPortefeuille.raisonSociale;
                }

                if (contexteGererPortefeuille.identifiantRelation) {
                    resultat.identifiantRelation = contexteGererPortefeuille.identifiantRelation;
                }

                if (contexteGererPortefeuille.libelleRelation) {
                    resultat.libelleRelation = contexteGererPortefeuille.libelleRelation;
                }

                if (contexteGererPortefeuille.siren) {
                    resultat.siren = contexteGererPortefeuille.siren;
                }
                if (contexteGererPortefeuille.objetEdsVisu) {
                    if (contexteGererPortefeuille.objetEdsVisu.objCaractAgent) {
                        resultat.idEds = contexteGererPortefeuille.objetEdsVisu.objCaractAgent.identifiantElementStructure;
                        resultat.designationAgent = contexteGererPortefeuille.objetEdsVisu.objCaractAgent.designationAgent;
                    }
                    resultat.nombreTotalPortefeuilles = contexteGererPortefeuille.objetEdsVisu.nombrePortefeuilleTotalAgent;
                    resultat.listeIdsPortefeuille = contexteGererPortefeuille.objetEdsVisu.listePtfVisu;
                }
                resultat.typeForcage = contexteGererPortefeuille.typeForcage;

                resultat.listeClientAffiches = contexteGererPortefeuille.listeClientAffiches;
            }

            return resultat;
        }

        /**
         * Alimente le contexte nécessaire au fonctionnement de l'application Revue de Portefeuilles à partir de celui de l'application Animer les Portefeuilles
         * @param contexteGererPortefeuille
         */
        private alimenterContexteVersEsdPortefeuilles(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): Modeles.Application.IContexteVersEdsPortefeuilles {
            let resultat: Modeles.Application.IContexteVersEdsPortefeuilles;
            resultat = <Modeles.Application.IContexteVersEdsPortefeuilles>{};
            if (contexteGererPortefeuille) {
                if (contexteGererPortefeuille.objetEdsVisu) {
                    if (contexteGererPortefeuille.objetEdsVisu.objCaractAgent) {
                        resultat.idEds = contexteGererPortefeuille.objetEdsVisu.objCaractAgent.identifiantElementStructure;
                    }
                    resultat.listeIdsPortefeuille = contexteGererPortefeuille.objetEdsVisu.listePtfVisu;
                }
            }
            return resultat;
        }

        public tracerSuiviAction(logger: MyWay.Services.Loggers.ILogger, action: string): void {
            logger.warn("ActionBouton " + action);
        }


        /*
         * Trace le suivi d'une action remarquable
         * @param action {string} action associée
         */
        public tracerSuiviActionPromise(action: string): ng.IPromise<number> {
            var traceSuivi: MyWay.Services.TraceSuivi.TraceSuiviModel = {
                action: action,
                agentCode: null,
                agentEdsCode: null,
                agentEdsInternalRef: null,
                agentEdsType: null,
                computerEdsInternalId: null,
                computerSi: null,
                data: null,
                dateUse: null,
                deviceId: null,
                deviceType: null,
                establishment: null,
                processIdBusiness: null,
                processIdCurrent: null,
                processIdMaster: null,
                resultStep: null,
                state: null,
                stepIdCurrent: null,
                timezone: null
            };
            return <ng.IPromise<number>>this.serviceAgentExtended.TraceSuivi.tracer(traceSuivi);
        }
    }

    


    /**
     * Service contenant des méthodes utiles pour gérer le contexte applicatif
     * @author: S0005354
     */
    export interface IContexteService {
        /**
         * Chargement contexte habilitation
         *  -> données d'authentification
         *  -> Habilitations
         *  -> Données délocalisées
         */
        getContexte(): ng.IPromise<Modeles.Application.IContexte>;
        getAuthentification(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        getDesignation(): string;
        ajoutPourDebranchementSyntheseClient(identifiantPersonne: string, typeSynthese: string): ng.IPromise<any>;
        ajouterDonneesDebranchementSyntheseClient(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille, typeSynthese : string): ng.IPromise<any>;
        ajouterDonneesDebranchementRevueClient(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void>;
        recupererRetourDebranchement(): ng.IPromise<Modeles.Application.IContexteGererPortefeuille>;
        supprimerContexteDevenuInutile(listeClesAEffacer: Array<string>): ng.IPromise<void>;
        ajouterDonneesDebranchementBilanRevueRelationEco(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void>;
        ajouterDonneesDebranchementBilanRevuePortefeuille(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void>;
        setEdsVisu(edsVisu: number): void;
        setestVueMultiSuiviPar(estVueMultiSuiviPar: boolean): void;
        isPCM(): ng.IPromise<boolean>;
        tracerSuiviAction(logger: MyWay.Services.Loggers.ILogger, action: string): void;
        tracerSuiviActionPromise(action: string): ng.IPromise<number>;
    }
    app.service(ContexteService.CLASS_NAME, ContexteService);
}
