
declare module PiecesControles {
    var app: any;
}

declare module PiecesControles.Injection {
    module Services {
        const consoleLoggerService: string;
        const exceptionService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
        const navigationInterneService: string;
    }
    module MyWay {
        const serviceAgentExtended: string;
        const modalService: string;
    }
    module Angular {
        const $filter: string;
        const $location: string;
        const $modalInstance: string;
        const $q: string;
        const $window: string;
    }
    class Logger {
        static applicationLoggerName: string;
    }
}

declare module PiecesControles.Constantes {
    class Parametrage {
        static codeDeviseEuro: string;
        static rubriquesFiltreDevise: string;
        static valeursFiltreDevise: string;
        static rubriquesTriDevise: string;
        static valeurTriDevise: string;
        static idCaisseCFF: number;
        static nomCookieRepriseDossier: string;
        static valeursFiltresAtoutClic: Array<string>;
        static clesSmac: Array<string>;
        static codeRetourSmac: string;
        static rubriquesFiltreSmac: Array<string>;
        static valeursFiltresSmac: Array<string>;
        static rubriquesFiltreGestionPeriode: Array<string>;
        static valeursFiltresGestionPeriode: Array<string>;
        static codeSuccesCreationSmac: string;
        static codeSuccesConsultationSmac: string;
        static codeConstanteTypeAssiette: string;
        static codeMultiDevise: string;
        static valeurActivationMultiDevise: string;
        static codeTauxMontage: string;
        static valeurActivationTauxMontage: string;
        static valeurActivationAdressesParamRubrique: number;
        static codeTypeTransportPersonne: string;
        static codeEmployeurCommunPersonne: string;
        static idChampPacteCommissoire: string;
        static rubriqueFiltreEnvoiSaccef: string;
        static rubriqueFiltreLiaisonTpAvantPreteur: string;
        static valeurEnvoiTpAvantDecision: string;
        static valeurEnvoiTpApresDecision: string;
        static delaiAttenteInterrogationCEGC: string;
        static nombreInterrogationCEGC: string;
        static modeDeTransmissionCEGC: string;
        static utilisationsPacteCommissoire: IUtilisationPacteCommissoire[];
        static codeDelegationDecisionAgent: string;
        static codeModuleDelegation: string;
        static valeurActivationAdelys: string;
        static valeurActivationNeoDeleg: string;
        static codeDeterminationSysteme: string;
        static valeurSystemeBloquant: string;
        static valeurSystemeNonBloquant: string;
        static valeurSystemeDebrayable: string;
        static codeParametreApplicatifTransfertConformite: string;
        static codeParametreApplicatifOuvCmpteSupp: string;
        static codePieco: string;
        static debranchement: string;
        static modifPersonneMorale: string;
        static modifPersonnePhysique: string;
        static debranchementENET: string;
        static valeursFiltreMRH: Array<string>;
        static debranchementVersImpulse: string;
        static applicationImpulseDepuisMontage: string;
        static applicationImpulseDepuisDecision: string;
        static codeDebranchementDossierVente: string;
        static valeurDebranchementDossierVente: string;
        static comeFromOtherProcess: string;
        static regroupementCredit: {
            numDoc: string;
            informationPopup: string;
        };
        static codeLisaDossierNumeriqueMyWay: number;
        static codeParametreDossierNumeriqueMyWay: string;
        static valeurParametrageO: string;
        static codeParametreDocsCNP: string;
        static valeurActivationDocsCNP: string[];
        static valeurActiveDocsCNP: string[];
        static valeurInactiveDocsCNP: string[];
    }
    class ErreurCnp {
        static bloquant: number;
    }
    class ErreurCEGC {
        static codeErreur: string;
    }
    interface IUtilisationPacteCommissoire {
        code: number;
        valeur: number;
        editable: boolean;
    }
}

declare module PiecesControles.Constantes.Navigation {
    class Events {
        static REFRESH_NAVIGATION_SECONDAIRE: string;
    }
    enum SousChapitre {
        Proposition,
        Montage,
        Actions,
    }
    /**
     * Pages de l'application
     */
    module Page {
        /**
         * Page du menu principal
         */
        class VuePrincipale extends MyWay.Services.StringEnum {
            static routeur: VuePrincipale;
            static routeurInterne: VuePrincipale;
            static client: VuePrincipale;
            static projet: VuePrincipale;
            static financement: VuePrincipale;
            static gestionAdministrative: VuePrincipale;
            static transfertNeo: VuePrincipale;
            static decisionPreteur: VuePrincipale;
            static editionOffre: VuePrincipale;
            static remiseOffre: VuePrincipale;
            static signatureOffre: VuePrincipale;
            static piecesControles: VuePrincipale;
            static conformiteDuDossier: VuePrincipale;
            static multiRisqueHabitation: VuePrincipale;
            static blocNotes: VuePrincipale;
            static historiqueDuDossier: VuePrincipale;
            static gestionsDesAttentes: VuePrincipale;
            static emissionDocuments: VuePrincipale;
            static risques: VuePrincipale;
            static erreur: VuePrincipale;
        }
        /**
         * Page de niveau secondaire pour la page client
         */
        class VueSecondaireClient extends MyWay.Services.StringEnum {
            static detailPersonne: VueSecondaireClient;
        }
        /**
         * Page de niveau secondaire pour la page projet
         */
        class VueSecondaireProjet extends MyWay.Services.StringEnum {
            static detailDonneesLocatives: VueSecondaireProjet;
            static detailBienAVendre: VueSecondaireProjet;
            static detailObjetFinance: VueSecondaireProjet;
        }
        /**
         * Page de niveau secondaire pour la page financement
         */
        class VueSecondaireFinancement extends MyWay.Services.StringEnum {
            static detailCredit: VueSecondaireFinancement;
            static simulation: VueSecondaireFinancement;
            static creditEpargneLogement: VueSecondaireFinancement;
            static synthese: VueSecondaireFinancement;
            static fraisAccessoires: VueSecondaireFinancement;
            static conventionBonification: VueSecondaireFinancement;
            static refusAssuranceExterne: VueSecondaireFinancement;
            static consultationRefusAssuranceExterne: VueSecondaireFinancement;
            static comparaisonPropositions: VueSecondaireFinancement;
            static consultationInfosPTZ: VueSecondaireFinancement;
        }
        class VueTertiaireFinancement extends MyWay.Services.StringEnum {
            static detailPhases: VueTertiaireFinancement;
            static ajusterTaux: VueTertiaireFinancement;
        }
        /**
         * Page de niveau secondaire pour la page gestion administrative (montage)
         */
        class VueSecondaireMontage extends MyWay.Services.StringEnum {
            static decisionAssurance: VueSecondaireMontage;
            static modificationGarantie: VueSecondaireMontage;
            static detailPayeur: VueSecondaireMontage;
            static modificationSuiviPlanifie: VueSecondaireMontage;
            static ajoutSuiviPlanifie: VueSecondaireMontage;
        }
        /**
         * Page de niveau secondaire pour la page décision
         */
        class VueSecondaireDecision extends MyWay.Services.StringEnum {
            static forcageDecision: VueSecondaireDecision;
        }
        /**
         * Page de niveau secondaire pour la page d'édition de l'offre
         */
        class VueSecondaireEdition extends MyWay.Services.StringEnum {
            static majAdministrative: VueSecondaireEdition;
            static impressionAgence: VueSecondaireEdition;
            static impressionIndustrialisee: VueSecondaireEdition;
            static signatureElectronique: VueSecondaireEdition;
        }
    }
    /**
     * Sections contenues par les pages de l'application
     * Pour les sections des menus de niveau secondaires, mettre SecondaireXxxxx
     */
    module Section {
        /**
         * Sections de la page client du menu principal
         */
        class Client extends MyWay.Services.StringEnum {
            static intervenants: Client;
            static revenusCharges: Client;
            static surfaceFinanciere: Client;
            static droitsEL: Client;
        }
        /**
         * Sections de la page projet du menu principal
         */
        class Projet extends MyWay.Services.StringEnum {
            static description: Projet;
            static montantProjet: Projet;
            static objetFinance: Projet;
        }
        /**
         * Sections de la page Financement du menu principal
         */
        class Financement extends MyWay.Services.StringEnum {
            static criteres: Financement;
            static financement: Financement;
        }
        /**
         * Sections de la page GestionAdministrative du menu principal (présent à partir de l'étape du montage)
         */
        class GestionAdministrative extends MyWay.Services.StringEnum {
            static assurances: GestionAdministrative;
            static garanties: GestionAdministrative;
            static modalites: GestionAdministrative;
            static redacteurActe: GestionAdministrative;
            static avisDecision: GestionAdministrative;
            static suivisPlanifies: GestionAdministrative;
        }
        /**
         * Sections de la page Décision du menu principal (présent à partir de l'étape de la décision)
         */
        class Decision extends MyWay.Services.StringEnum {
            static avis: Decision;
            static indicateursOctroi: Decision;
            static decision: Decision;
        }
        /**
         * Sections de la page Edition de l'offre du menu principal (présent lors de l'étape édition)
         */
        class EditionOffre extends MyWay.Services.StringEnum {
            static caracteristiques: Decision;
            static clauses: Decision;
            static listeMandats: Decision;
            static institutsEmission: Decision;
        }
        /**
         * Sections de la page transverse Pièces et contrôles
         */
        class Pieco extends MyWay.Services.StringEnum {
            static clients: Pieco;
            static agence: Pieco;
            static controles: Pieco;
        }
        /**
         * Sections de la page transverse Pièces et contrôles
         */
        class EmissionsDocuments extends MyWay.Services.StringEnum {
            static documentsClient: EmissionsDocuments;
            static ficheSuiveuse: EmissionsDocuments;
            static refusAssuranceExterne: EmissionsDocuments;
        }
        /**
         * Sections de la page transverse Conformité du dossier
         */
        class ConformiteDuDossier extends MyWay.Services.StringEnum {
            static avisSurConformite: ConformiteDuDossier;
        }
        /**
         * Sections de la page transverse Multirisque Habitation
         */
        class MultiRisqueHabitation extends MyWay.Services.StringEnum {
            static devis: MultiRisqueHabitation;
        }
        /**
         * Sections de la page transverse Risques
         */
        class Risques extends MyWay.Services.StringEnum {
            static analyseDeRisque: Risques;
        }
        /**
         * Sections de la page transverse Bloc Notes
         */
        class BlocNotes extends MyWay.Services.StringEnum {
            static notesAssociees: BlocNotes;
        }
        /**
         * Sections de la page transverse Historique du dossier
         */
        class HistoriqueDuDossier extends MyWay.Services.StringEnum {
            static listeDesEvenements: HistoriqueDuDossier;
        }
        /**
         * Sections de la page transverse Gestion des attentes
         */
        class GestionDesAttentes extends MyWay.Services.StringEnum {
            static motifsEnCours: GestionDesAttentes;
        }
        /**
         * Sections de la page secondaire Crédit Epargne Logement
         */
        class SecondaireEL extends MyWay.Services.StringEnum {
            static ajustements: SecondaireEL;
        }
        /**
         * Sections de la page secondaire Crédit
         */
        class SecondaireCredit extends MyWay.Services.StringEnum {
            static detail: SecondaireCredit;
            static compteCourant: SecondaireCredit;
        }
        /**
         * Sections de la page simulation modulation
         */
        class SecondaireSimulationModulation extends MyWay.Services.StringEnum {
            static modulation: SecondaireSimulationModulation;
            static revision: SecondaireSimulationModulation;
        }
        /**
         * Sections de la page secondaire Synthèse
         */
        class SecondaireSynthese extends MyWay.Services.StringEnum {
            static planFinancement: SecondaireSynthese;
            static detailsCredits: SecondaireSynthese;
            static coutFinancement: SecondaireSynthese;
            static syntheseFinanciere: SecondaireSynthese;
            static justificationTEG: SecondaireSynthese;
        }
        /**
         * Sections de la page Mettre à jour les données administratives
         */
        class SecondaireMajAdministrative extends MyWay.Services.StringEnum {
            static assurances: SecondaireMajAdministrative;
            static garanties: SecondaireMajAdministrative;
            static signatureElectronique: SecondaireMajAdministrative;
        }
    }
}

declare module PiecesControles {
    import ApiModel = ApiInstuctionCredit.Modele;
    class PiecesControlesControleur {
        private $q;
        private $location;
        private navigationService;
        private mwNotificationService;
        private serviceAgentExtended;
        private erreurService;
        private pagePiecesControlesService;
        private cheminFerService;
        private navigationInterneService;
        private controleActionsService;
        private stateService;
        private fichierService;
        private dossierNumeriqueService;
        private wsCatalogueProjetService;
        private sessionService;
        private $scope;
        private modaleFactory;
        chargementEnCours: boolean;
        chargementLongEnCours: boolean;
        chargementLongEtat: number;
        dataPieco: ApiModel.IPieco;
        estAutoriseAccesDNC: boolean;
        static $inject: Array<string>;
        private confirmedShown;
        private redirectionAsked;
        constructor($q: ng.IQService, $location: ng.ILocationService, navigationService: MyWay.UI.INavigationService, mwNotificationService: MyWay.UI.IMwNotificationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, erreurService: ApiInstuctionCredit.Service.ErreurService, pagePiecesControlesService: Service.PagePiecesControlesService, cheminFerService: Service.CheminFerService, navigationInterneService: Service.NavigationInterneService, controleActionsService: Service.ControleActionsService, stateService: Service.StateService, fichierService: ApiInstuctionCredit.Service.FichierService, dossierNumeriqueService: ApiInstuctionCredit.Service.Data.DossierNumeriqueService, wsCatalogueProjetService: ApiInstuctionCredit.Service.Data.CatalogueProjetService, sessionService: Service.SessionService, $scope: ng.IScope, modaleFactory: Service.ModaleFactory);
        /**
         * Impression du document et l'enregitre sur le poste
         */
        imprimer(): void;
        /**
         * Débranche sur l’écran de consultation du dossier numérique
         */
        consulterDocuments(): void;
        /**
         * Débranche sur l’écran d’acquisition du dossier numérique
         */
        acquerirDocuments(): void;
        /**
         * Enregistrement des données de la page
         */
        enregistrer(): ng.IPromise<any>;
        /**
         * Enregistrement des commentaires
         */
        private enregistrerCommentaires();
        /**
         * Enregistrement des pièces clients et agences
         */
        private enregistrerPieces();
        /**
         * Débranche vers un écran du dossier numérique
         */
        private debrancherDossierNumerique(contexteRefrRegr, etapeLisa, dossierNumMyWay?);
        checkIfModifications(): ng.IPromise<void>;
        /**
         * Débranche sur l’écran du dossier numérique MyWay
         */
        accederDossierNumerique(): void;
        /**
         * Pour ajouter l'icône de complétude dans le totem
         */
        private majCompletudeTotem(listePieceClient, listePieceAgence, listeControle);
        estDossierNumeriqueMyWay: boolean;
        /**
         * L'agent connecté est-il autorisé à l'accès DNC
         */
        checkAccesDNC(): ng.IPromise<void>;
    }
}

declare module PiecesControles {
}

declare module PiecesControles.Logger {
    interface ILogger {
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
    }
}

declare module PiecesControles {
    interface IDataModaleAlerteNeo {
        headerText: string;
        messages: Array<string>;
    }
    class ModaleAlerteNeoControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: IDataModaleAlerteNeo;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: IDataModaleAlerteNeo);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module PiecesControles {
    interface IDataModaleAlertes {
        alertes: ApiInstuctionCredit.Modele.IAnomalieLecture[];
    }
    class ModaleAlertesControleur {
        private $modalInstance;
        static $inject: string[];
        tableau: MyWay.UI.ImwTableOptions;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: IDataModaleAlertes);
        /**
         * Construction du tableau
         */
        private initialisationTableau(caption);
        /**
         * Action après sélection dans le tableau
         */
        onSelectionChange(selectedObject: Object): void;
        /**
         * Récupération du libellé du tableau
         */
        getLibelleTableau(): string;
        /**
         * Permet de fermer la popin en mode "Poursuivre"
         */
        poursuivre(): void;
        /**
         * Permet de fermer la popin en mode "Anuuler"
         */
        annuler(): void;
    }
}

declare module PiecesControles.Service {
    class ModaleFactory {
        private $q;
        private $location;
        private modalService;
        private popinService;
        static $inject: string[];
        constructor($q: ng.IQService, $location: ng.ILocationService, modalService: MyWay.UI.IModalService, popinService: PopinService);
        /**
         * Permet d'afficher une popin
         */
        popinSimple(titre: string, message: string, taille: string): void;
        /**
         * Permet d'afficher une popin de confirmation
         */
        popinConfirmation(titre: string, message: string, taille: string): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin de confirmation pour Pieco
         */
        popinConfirmationPieco(titre: string, message: string, taille: string): ng.IPromise<boolean>;
        /**
         * Permet d'afficher la popin avertissant qu'un montant d'opération est obligatoire pour
         * accéder au formulaire financement
         */
        popinMontantOperationObligatoire(avecRedirection: boolean): void;
        /**
         * Afficher la popin avertissant que la proposition n'est pas équilibrée pour aller à la page de synthèse
         */
        popinPropositionNonEquilibre(): void;
        /**
         * Afficher la popin avertissant que la proposition n'est pas équilibrée pour aller à la page de synthèse
         */
        popinPropositionNonCalculer(): void;
        /**
         * Permet d'afficher la popin avertissant qu'une échéance est obligatoire pour
         * lancer le calcul d'optimisation
         */
        popinEcheanceObligatoireCalculOptimisation(): void;
        /**
         * Permet d'afficher la popin avertissant qu'un endettement est obligatoire pour
         * lancer le calcul d'optimisation
         */
        popinEndettementObligatoireCalculOptimisation(): void;
        /**
         * Permet d'afficher la popin avertissant qu'un endettement est obligatoire pour
         * lancer le calcul d'optimisation
         */
        popinPaliersContraintsCalculOptimisation(): void;
        /**
         * Permet d'afficher la popin avertissant que l'apport est négatif pour
         * lancer le calcul d'optimisation
         */
        popinApportNegatif(): void;
        /**
         * Permet d'afficher la popin avertissant qu'un crédit à optimiser est obligatoire
         * lancer le calcul d'optimisation
         */
        popinPasDeCreditAOptimiser(): void;
        /**
         * Permet d'afficher la popin avertissant qu'un seul crédit doit être sélectionné lors d'un rachat
         */
        popinAvertissementRachat(): void;
        /**
         * Permet d'afficher une popin contenant une liste d'anomalies
         */
        popinListeAnomalies(titre: string, listeAnomaliesLecture: Array<ApiInstuctionCredit.Modele.IAnomalieLecture>, affichageIdAno: boolean): ng.IPromise<void>;
        /**
         * Permet d'afficher une popin de confirmation d'annulation
         */
        popinConfirmationAnnulation(): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin de confirmation de suppression
         */
        popinConfirmationSuppression(titre: string, message: string): ng.IPromise<boolean>;
        /**
         * Popin d'affichage des erreurs
         */
        popinErreur(erreur: ApiInstuctionCredit.Modele.IException): ng.IPromise<any>;
        /**
         * Permet d'afficher une popin de confirmation d'annulation des modifications droits PEL
         */
        popinConfirmationModificationDroitPEL(): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin indiquant des devises différentes sur des crédits
         */
        popinDevisesDifferentesCredits(): void;
        /**
         * Permet d'afficher une popin de confirmation de création d'une personne SI à partir d'un prospect
         */
        popinConfirmationCreationPersonneSI(libellePersonne: string): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin de confirmation de création d'une personne SI à partir d'un prospect
         */
        popinConfirmationRafraichissementClient(): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin de confirmation de suppression d'un emprunteur
         */
        popinConfirmationSuppressionEmprunteur(): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin de confirmation de suppression d'un garant
         */
        popinConfirmationSuppressionGarant(): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin de confirmation de refus de garantie ou d'assurance
         */
        popinConfirmationRefusAccessoire(titre: string, texte: string): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin de confirmation de forçage de la décision
         */
        popinConfirmationForcageDecision(): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin contenant une liste d'anomalies
         */
        popinAlertes(anomalies: ApiInstuctionCredit.Modele.IAnomalieLecture[]): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin de confirmation de l'annulation de l'accord prêteur
         */
        popinConfirmationAnnulationAccordPreteur(): ng.IPromise<boolean>;
        /**
         * Permet d'afficher une popin informant de l'absence d'avis lors de l'envoi saccef avant décision
         */
        popinConfirmationAbsenceAvisSaccefAvantDecision(): ng.IPromise<boolean>;
    }
}

declare module PiecesControles {
    interface IDataModaleListeAnomalies {
        closeButtonText: string;
        actionButtonText: string;
        headerText: string;
        iconName: string;
        bodyText: string;
        model: {
            listeAnomalies: ApiInstuctionCredit.Modele.AnomalieDossier[];
            affichageIdAno: boolean;
        };
    }
    class ModaleListeAnomaliesControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        listeAnomalies: Array<ApiInstuctionCredit.Modele.AnomalieDossier>;
        affichageIdAno: boolean;
        /**
         * Permet de construire la popin
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: IDataModaleListeAnomalies);
        /**
         * Fermeture de la popin
         */
        valider(): void;
    }
}

declare module PiecesControles.State {
    enum FonctionnaliteEnum {
        AUCUNE = 0,
        /**
         * Création d'une personne physique ou morale lors de la création d'une garantie
         */
        CREATION_GARANT = 1,
        /**
         * Lancement de l'application Dossier Numérique depuis Pièces et contrôles
         */
        PIECO_DOSSIER_NUMERIQUE = 2,
        /**
         * Mise à jour de l'emprunteur (section intervenants du dossier)
         */
        MISE_A_JOUR_EMPRUNTEUR = 3,
    }
    /**
     * Contient des informations sur l'état actuel dans l'application.
     * Ces informations peuvent être utilisées pour restaurer l'état après un retour LISA par exemple.
     */
    interface IApplicationState {
        fonctionnalite?: FonctionnaliteEnum;
        /**
         * Id de l'élément HTML où il faudra scroller au chargement de la page
         */
        scrollElementId?: string;
    }
    /**
     * Information d'une route
     */
    interface IStateRoute {
        /**
         * Libellé de la route (affiché dans le totem de navigation, et surtout utilisé comme clé)
         */
        label: string;
        /**
         * URL de la route
         */
        url: string;
    }
}

declare module PiecesControles.Service {
    class AgentExterneService {
        static $inject: Array<string>;
        estAgentExterne: boolean;
        constructor();
        /**
         * Indique si l'agent utilisé sur le dossier est externe (gestion CFF, mandataire agent externe
         * Peut engendrer des restrictions
         * @param {ApiInstuctionCredit.Modele.IDossierSchema} dataDossier
         * @param {MyWay.Services.Context.AuthentificationInfo} utilisateurConnecte
         */
        setAgentIsAgentExterne(dataDossier: ApiInstuctionCredit.Modele.IDossierSchema, utilisateurConnecte: MyWay.Services.Context.AgentConnecte): void;
    }
}

declare module PiecesControles.Service {
    class CheminFerService {
        static $inject: Array<string>;
        sousEtatDossierActuel: number;
        cssEtapeUne: string;
        cssEtapeDeux: string;
        cssEtapeTrois: string;
        cssEtapeQuatre: string;
        cssEtapeCinq: string;
        cssEtapeSix: string;
        constructor();
        /**
         * En fonction de l'étape, gère le style de l'étape active et le responsive
         */
        majChemin(sousEtatDossier: number, pageActuelle: string, redirection?: boolean): void;
        /**
         * A chaque changement d'état, le style est réinitialisé
         */
        private reset();
        /**
         * Cas particulier de la décision : pas d'état dans le dossier, c'est une nuance avec l'étape de montage
         */
        private isCasDecision(sousEtatDossier, pageActuelle);
        /**
         * La sous-étape de synthèse n'est visible que si le dossier est en proposition ET si la page visitée est la synthèse
         * @param sousEtatDossier
         * @param pageActuelle
         */
        private isPageSynthese(sousEtatDossier, pageActuelle);
        private isPageSecondaireEdition(sousEtatDossier, pageActuelle);
        /**
         * Mise à jour du chemin de fer à Edition en signature electronique
         */
        majCheminFerEditionSignatureElectronique(): void;
        /**
         * Cas particulier du dossier en Remise, mais redirection vers Edition signature electronique
         */
        isCasRemiseMaisPageEditionSignatureElectronique(sousEtatDossier: number, pageActuelle: string): boolean;
    }
}

declare module PiecesControles.Service {
    class ClientService {
        private $q;
        private wsTiersService;
        private wsClientService;
        private wsCatalogueClientService;
        static $inject: string[];
        _dossierSchema: ApiInstuctionCredit.Modele.IDossierSchema;
        emprunteur: ApiInstuctionCredit.Modele.IEmprunteur;
        listeRessourcesCharges: ApiInstuctionCredit.Modele.IEntreeRessourceCharge[];
        groupesGarant: ApiInstuctionCredit.Modele.IGarant[];
        listePersonnesDossier: ApiInstuctionCredit.Modele.IPersonne[];
        personnesAffectation: Array<ApiInstuctionCredit.Modele.PersonneAffectation>;
        codeIntitulePersonne: string[];
        endettement: ApiInstuctionCredit.Modele.IEndettement;
        personne: ApiInstuctionCredit.Modele.IPersonne;
        categoriesEmprunteur: ApiInstuctionCredit.Modele.CategorieEmprunteur[];
        categorieEmprunteur: ApiInstuctionCredit.Modele.CategorieEmprunteur;
        codeDerogationPtz: ApiInstuctionCredit.Modele.ISelectboxNumber;
        listePrimoAccedant: ApiInstuctionCredit.Modele.ISelectboxNumber[];
        idDetailPersonne: string;
        dataBoutonActionPersonne: MyWay.UI.IBoutonActionRiche[];
        personneMorale: ApiInstuctionCredit.Modele.IPersonne;
        personnesPhysiques: ApiInstuctionCredit.Modele.IPersonne[];
        garants: ApiInstuctionCredit.Modele.IPersonne[];
        constructor($q: ng.IQService, wsTiersService: ApiInstuctionCredit.Service.Data.TiersService, wsClientService: ApiInstuctionCredit.Service.Data.ClientService, wsCatalogueClientService: ApiInstuctionCredit.Service.Data.CatalogueClientService);
        /**
         * Permet de récupérer le détail de l'emprunteur
         * @param identifiantDossier : string
         * @param suppressionRC : boolean
         * @return promise<Emprunteur>
         */
        getEmprunteur(identifiantDossier: string, suppressionRC: boolean): ng.IPromise<ApiInstuctionCredit.Modele.IEmprunteur>;
        /**
         * création des ressources et charges
         */
        private creationRevenusEtCharges(idDossier, idwsPersonne, revenus, charges);
        /**
         * Permet de récupere la personne en fonction d'un idws
         */
        getPersonneByIdws(idwsPersonne: string): ApiInstuctionCredit.Modele.IPersonne;
        /**
         * Contrôle si le debranchement vers connaissance client est possible
         */
        controleAffichageMajClient(idwsPersonne: string): boolean;
        /**
         * Permet de déterminer l'affichage du bouton "Rattacher"
         */
        gestionAffichageRattachement(): boolean;
        /**
         * Permet de récupérer le libellé de type personne
         */
        getLibelleTypePersonne(personne: ApiInstuctionCredit.Modele.IPersonne): string;
        /**
         * Permet d'initialiser les liste personnes (morale, physique, garants)
         */
        initListesPersonnesParType(): void;
        /**
         * Permet de savoir si la personne est un garant
         */
        estGarant(personne: ApiInstuctionCredit.Modele.IPersonne): boolean;
        /**
         * Permet de savoir si la personne est morale
         */
        estPersonneMorale(personne: ApiInstuctionCredit.Modele.IPersonne): boolean;
        /**
         * Permet de savoir si la personne est à afficher dans la page client
         */
        private estClient(personne);
        /**
         * Permet de créer le titre du bandeau personne
         */
        getTitreBandeauPersonne(personne: ApiInstuctionCredit.Modele.IPersonne): string;
        /**
         * Calcul du nombre de personnes composant le ménage
         */
        calculNombrePersCompMenage(): void;
        /**
         * Initialisation des catégories emprunteur
         */
        initCategorieEmprunteur(): ng.IPromise<void>;
        /**
         * Récupération de la catégorie emprunteur
         */
        getCategorieEmprunteur(): void;
        /**
         * Contrôle si la catégorie emprunteur est compatible avec un emprunteur morale
         */
        controleCategorieEmprunteurMorale(oCategorieEmprunteur: ApiInstuctionCredit.Modele.CategorieEmprunteur): boolean;
        /**
         * Contrôle si la catégorie emprunteur est compatible avec un emprunteur physique
         */
        controleCategorieEmprunteurPhysique(oCategorieEmprunteur: ApiInstuctionCredit.Modele.CategorieEmprunteur): boolean;
        /**
         * Indique si la personne est un prospect
         * @param personne
         */
        estProspect(personne: ApiInstuctionCredit.Modele.IPersonne): boolean;
        /**
         * Indique si la personne est un prospect
         * @param personne
         */
        estTiers(personne: ApiInstuctionCredit.Modele.IPersonne): boolean;
        /**
         * Génération du libellé du rôle de la personne
         * @param personne
         */
        getLibelleRolePersonne(personne: ApiInstuctionCredit.Modele.IPersonne): string;
        /**
         * Récupération et création des revenus et charges de tiers client
         */
        creationRevenusEtChargesConnaissanceClient(idDossier: string, indexRecursivite: number, personnes: ApiInstuctionCredit.Modele.IPersonne[], revenusParPersonne: ApiInstuctionCredit.Modele.RevenuPersonneMaj[][], chargesParPersonne: ApiInstuctionCredit.Modele.ChargePersonneMaj[][]): ng.IPromise<any>;
        /**
         * Récupération du client dans la ressource Tiers
         */
        private getTiersClient(idPersonneSI);
        /**
         * Retourne un revenu à ajouter
         */
        private getRevenuAAjouter(indexTypeRevenu, montantPeriodiqueRevenu, nombrePeriode);
        /**
         * Retourne une charge à ajouter
         */
        private getChargeAAjouter(indexTypeCharge, montantPeriodiqueCharge, nombrePeriode, montantAnnuel);
    }
}

declare module PiecesControles.Logger {
    class ConsoleLoggerService implements ILogger {
        private $injector;
        private serviceAgentExtended;
        static $inject: string[];
        private loggerLevel;
        constructor($injector: ng.auto.IInjectorService);
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private canLog(level);
        private getTime();
    }
}

declare module PiecesControles.Service {
    import ApiModel = ApiInstuctionCredit.Modele;
    class ControleActionsService {
        private wsCatalogueCommunService;
        private wsCatalogueProjetService;
        private anomalieService;
        private sessionService;
        static $inject: Array<string>;
        constructor(wsCatalogueCommunService: ApiInstuctionCredit.Service.Data.CatalogueCommunService, wsCatalogueProjetService: ApiInstuctionCredit.Service.Data.CatalogueProjetService, anomalieService: ApiInstuctionCredit.Service.AnomalieService, sessionService: Service.SessionService);
        /**
         * Récupération du paramétrage du bouton "Continuer"
         */
        getParametrageBoutonContinuer(anomalies: ApiInstuctionCredit.Modele.IAnomalieLecture[]): ng.IPromise<ApiInstuctionCredit.Modele.IParametrageBoutonContinuer>;
        /**
         * Récupération du paramètre applicatif
         */
        getParametreApplicatif(codeParametre: string): ng.IPromise<ApiInstuctionCredit.Modele.IScParamApplicatif>;
        listerInfoAgent(): ng.IPromise<ApiModel.IInformationAgent>;
        /**
         * Contrôle activation PIECO
         */
        controleActivationPieco(): ng.IPromise<boolean>;
    }
}

declare module PiecesControles.Service {
    class ElementService {
        private $q;
        private wsDossierService;
        private logger;
        private cachedElements;
        private fromCache;
        private timerId;
        static $inject: string[];
        constructor($q: ng.IQService, wsDossierService: ApiInstuctionCredit.Service.Data.DossierService, logger: Logger.ILogger);
        beginExchange(): void;
        finishExchangeAfter(millisecond: number): void;
        finishExchange(): void;
        /**
         * Calls lireElements with all the idws and add them to local cache
         * @param idDossier
         * @param idws
         * @param fromCache if true, calls lireElements only if not in cache
         */
        getElements(idDossier: string, idwsParam: string[], noCache?: boolean): ng.IPromise<any[]>;
        private getElementsInCache(idws);
        private getIdwsNotInCache(idws);
        /**
         * Retrieve one element within a list from the Idws
         * @param elements
         * @param idws
         */
        findElement<T>(elements: any[], idws: string): T;
        /**
         * Retrieve all elements within a list from the Idws array
         * @param elements
         * @param listIdws
         */
        findElements<T>(elements: any[], listIdws: string[]): T[];
        /**
         * Retrieve one element within a list from the Idws
         * @param elements
         * @param idwsCodeFontion
         */
        findElementsWithIdStartingWith<T>(elements: any[], idwsCodeFontion: string): T[];
        /**
         * Retrieve one index element within a list from the Idws
         * @param elements
         * @param idws
         */
        findIndexElement(elements: any[], idws: string): number;
    }
}

declare module PiecesControles.Service {
    import ApiModel = ApiInstuctionCredit.Modele;
    class FinancementService {
        private $q;
        private navigationService;
        private wsFinancementService;
        private navigationInterneService;
        static $inject: string[];
        loader: boolean;
        listeIdsProduitsStandard: Array<string>;
        listeIdsProduitsLissage: Array<string>;
        listeIdsProduitsStandardManuel: Array<string>;
        listeGammeLissage: Array<ApiModel.IGammeLissage>;
        elements: Array<any>;
        listeCreditsInterne: Array<ApiModel.ICreditInterne>;
        listeCreditsExterne: Array<ApiModel.ICreditExterne>;
        listeCreditsComplementaires: Array<ApiModel.CreditExistant>;
        listePlanFinancementSchema: Array<ApiModel.IPlanFinancementSchema>;
        planFinancementActif: ApiModel.IPlanFinancementDetail;
        idwsPlanActif: string;
        listeErreursFinancement: Array<ApiModel.ErreurFormulaire>;
        affichageBlocCritereRemboursement: boolean;
        modalite: ApiModel.ISelectbox;
        assuranceIncluse: boolean;
        echeanceMax: number;
        echeanceResultante: number;
        endettementMax: number;
        endettementResultant: number;
        eligibilite: ApiModel.IResultatEligibilite;
        calculOptimAvancee: ApiModel.EntreeOptimisationAvancee;
        listeCreditsInterneTA: Object[];
        ptzSupprime: boolean;
        constructor($q: ng.IQService, navigationService: MyWay.UI.INavigationService, wsFinancementService: ApiInstuctionCredit.Service.Data.FinancementService, navigationInterneService: Service.NavigationInterneService);
        /**
         * Permet de récupérer la liste des ids des produits autorisés pour le projet
         */
        listerIdsProduitsAutorises(idDossier: string, idProjet: string, indiceProduitLissage: boolean, optim: boolean, codeDevise: string): ng.IPromise<string[]>;
        /**
         * Permet de récupérer la liste des ids des produits autorisés pour le projet
         */
        listerGammesLissageAutorisees(idDossier: string, idProjet: string, codeDevise: string): ng.IPromise<Array<ApiModel.IGammeLissage>>;
        /**
         * Supprime l'erreur de la liste pour ne pas dupliquer les données
         * Se base soit sur l'ancre, soit le libellé
         * @param {string} ancreErreur
         * @param {string} libelleErreur
         * @returns
         */
        supprimerErreurPresente(ancreErreur: string, libelleErreur?: string): void;
        /**
         * Indique si des crédits sont à optimiser
         */
        controleCreditsAOptimiser(): boolean;
        /**
         * Indique si des crédits sont à calculer
         */
        controleCreditsACalculer(): boolean;
        /**
         * Indique le plan de financement doit être mis à jour en fonction d'assurances ou garanties ajoutées/supprimées
         */
        controleMajPlanFinancementAssurancesGaranties(): boolean;
        /**
         * Gestion de l'affichage ou non du bloc critères de remboursement
         */
        controleAffichageBlocCriteresRemboursement(modeCalcul: ApiInstuctionCredit.Enum.ModeCalcul, redirection: boolean): void;
        /**
         * Récupération des paliers contraints
         */
        getPaliersContraints(): ApiModel.PalierContraint[];
        majSuiteSuppresionCreditInterne(creditInterneSupprimer: ApiInstuctionCredit.Modele.ICreditInterne): void;
    }
}

declare module PiecesControles.Service {
    class InitialisationService {
        private $q;
        private serviceAgentExtended;
        private sessionService;
        private clientService;
        private wsProjetService;
        private financementService;
        private wsDossierService;
        private wsPiecoService;
        private agentExterneService;
        private cheminFerService;
        private navigationInterneService;
        private modalService;
        private popinService;
        private mwNotificationService;
        private modaleFactory;
        private anomalieService;
        private elementService;
        private wsCatalogueCommunService;
        private fichierService;
        static $inject: string[];
        majPartielleDossier: boolean;
        feuxTricolore: Array<string>;
        affichageEligibilite: boolean;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, sessionService: Service.SessionService, clientService: Service.ClientService, wsProjetService: ApiInstuctionCredit.Service.Data.ProjetService, financementService: Service.FinancementService, wsDossierService: ApiInstuctionCredit.Service.Data.DossierService, wsPiecoService: ApiInstuctionCredit.Service.Data.PiecoService, agentExterneService: Service.AgentExterneService, cheminFerService: Service.CheminFerService, navigationInterneService: Service.NavigationInterneService, modalService: MyWay.UI.IModalService, popinService: PopinService, mwNotificationService: MyWay.UI.IMwNotificationService, modaleFactory: Service.ModaleFactory, anomalieService: ApiInstuctionCredit.Service.AnomalieService, elementService: ElementService, wsCatalogueCommunService: ApiInstuctionCredit.Service.Data.CatalogueCommunService, fichierService: ApiInstuctionCredit.Service.FichierService);
        /**
         * A partir de ce moment, Le cache est utiilisé pour lire élément
         * Cela signifie que si plusieurs Idws sont envoyé plusieur fois, l'objet en cache correspondant sera retouné.
         * ATTENTION, Pour chaque beginLireElementsExchange, il faut appeler finishLireElementExchange
         */
        beginLireElementsExchange(): void;
        /**
         * Fin d'utilisation du cache pour lire les éléments
         */
        finishLireElementExchange(milliseconde?: number): void;
        /**
         * Création d'un projet
         */
        creerProjet(toc: string, tor: string, canalDeCreation: string, codeDevise: string, idClientBancaire?: string, identifiantPourLeCompteDe?: string): ng.IPromise<ApiInstuctionCredit.Modele.IDossierSchema>;
        /**
         * Permet de récupérer le contenu du dossier sélectionné
         */
        getDossierComplet(identifiantDossier: string, majChemin?: boolean): ng.IPromise<ApiInstuctionCredit.Modele.IDossierComplet>;
        /**
         * Permet de Créer de l'objet Reamenagement
         * @param idntiftDossier : string
         * @param idwsProjet : string
         * @return promise<DossierOuvert>
         */
        definirReamenagement(idntDossier: string, idwsProjet: string): ng.IPromise<ApiInstuctionCredit.Modele.IReamenagement>;
        /**
         * Permet de récupérer le schema complet d'un dossier
         * @param identifiantDossier : string
         * @return promise<IDossierSchema>
         */
        getDossierSchema(identifiantDossier: string): ng.IPromise<ApiInstuctionCredit.Modele.IDossierSchema>;
        /**
         * Permet de mettre à jour un élément
         * @param identifiantClasse: string
         * @param identifiantDossier: string
         * @param element: Object
         * @return : boolean => connaitre le statut de la maj
         */
        majElement(identifiantClasse: string, identifiantDossier: string, element: Object): ng.IPromise<boolean>;
        /**
         * Permet de mettre à jour un élément avec un catch en erreur lorsqu'il y en une
         * @param identifiantClasse: string
         * @param identifiantDossier: string
         * @param element: Object
         */
        majElementSynchrone(identifiantClasse: string, identifiantDossier: string, element: Object): ng.IPromise<void>;
        /**
         * Permet de mettre à jour un ensemble d'éléments
         * @param identifiantClasses
         * @param idDossier
         * @param listElements
         */
        majElements(identifiantClasses: string, idDossier: string, listElements: Array<Object>): ng.IPromise<void>;
        /**
         * Supprimession d'un élément
         * @param identifiantDossier : string
         * @param identifiantElement : string
         */
        supprimerElement(identifiantDossier: string, identifiantElement: string): ng.IPromise<any>;
        /**
         * Supprimession d'un élément avec controle
         * @param identifiantDossier : string
         * @param identifiantElement : string
         */
        supprimerElementAvecControle(identifiantDossier: string, identifiantElement: string, forceeControle: boolean): ng.IPromise<ApiInstuctionCredit.Modele.IRapportTransaction>;
        /**
         * Récupération d'un ensemble d'objets
         * @param: identifiantDossier
         * @param: listeIdws
         */
        lireElements(identifiantDossier: string, listeIdws: Array<string>, noCache?: boolean): ng.IPromise<any[]>;
        /**
         * Pour pouvoir naviguer dans le dossier, le projet doit être chargée dès le premier appel à LireElement
         * Ajout de la récupération du projet
         */
        private lireElementsAvecProjet(idDossier, listeIdws);
        /**
         * Affichage des messages reçus en Exception
         */
        affichageException(exception: ApiInstuctionCredit.Modele.IException): ng.IPromise<any>;
        /**
         * Popin d'affichage des alertes NEO (fonctionnelles)
         */
        popinAlertesNeo(messages: Array<string>): void;
        /**
         * Permet de récupérer l'ensemble des attributs d'un objet avec récursivité
         */
        listeIdwsSchema(collection: any, attribut: string): Array<string>;
        private static pickDeep(collection, attribut, retour);
        /**
         * Permet d'afficher ou non le bouton éligibilité
         */
        afficherEligibilite(): void;
        /**
         * Permet de retourner l'intitulé de la personne (civilité + nom + prénom)
         * @param personne: instructionCreditModel.IPersonne
         */
        getIntitulePersonne(personne: ApiInstuctionCredit.Modele.IPersonne): string;
        /**
         * Charge le dossier complet dans la session (this : initialisationService)
         * @returns
         */
        chargerDossierComplet(): ng.IPromise<void>;
        /**
         *  Mets à jour des attributs d'un objet
         */
        majDonneesPartiellesObjet(identifiantClasse: string, objetMaj: Object): ng.IPromise<boolean>;
        /**
         *  Mets à jour des attributs d'une liste d'objets
         */
        majDonneesPartiellesObjets(identifiantClasses: string, objetsMaj: Object[]): ng.IPromise<void>;
        /**
         * Donne le curseur à l'élement souhaité
         * @param {string} ancre
         */
        goToAnchor(ancre: string): void;
        /**
         * Permet d'afficher les impacts sur l'éligibilité (ECO-PTZ)
         */
        getImpactsEligibilite(): ng.IPromise<void>;
        /**
         * Edition de la proposition
         */
        editionProposition(resteAFinancer: number, setLoader: (value: boolean) => void): void;
        /**
         * Contrôle si le dossier est sur une loi conso
         */
        estLoiConso(): boolean;
        /**
         * Gestion de l'affichage du Droit Epargne Logement
         */
        affichageSectionClientDroitsEL(): boolean;
        /**
         * Gestion de l'affichage de la section Multi Risque Habitation
         */
        affichageSectionMultiRisqueHabitation(): boolean;
        /**
         * Permet de récupérer les devises
         */
        getListeDevises(deviseInstructible: boolean): ng.IPromise<ApiInstuctionCredit.Modele.IScDevise[]>;
    }
}

declare module PiecesControles.Service {
    /**
     * Fonctions et données utiles pour manpiluer la navigation de l'application
     * /!\ Ne pas confondre avec le NavigationService MyWay
     */
    class NavigationInterneService {
        private $q;
        private $timeout;
        private navigationService;
        private cheminFerService;
        private parametrageService;
        private apiParametrageService;
        private _totemInit;
        locationPrecedente: string;
        locationActuelle: string;
        navigationPrincipal: Array<MyWay.UI.TotemComponent>;
        navigationSecondaire: Array<MyWay.UI.TotemComponent>;
        pageAvecTotem: boolean;
        afficherNavPrincipal: boolean;
        afficherNavSecondaire: boolean;
        forcerActivationPageApresRetour: boolean;
        loaderFermeture: boolean;
        accordPrincipeAffiche: boolean;
        static $inject: Array<string>;
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, navigationService: MyWay.UI.INavigationService, cheminFerService: Service.CheminFerService, parametrageService: Service.ParametrageService, apiParametrageService: ApiInstuctionCredit.Service.ParametrageService);
        /**
         *  Initialise les différents affichages en les cachant
         */
        init(): void;
        addPageNavigationPrincipaleWithoutDuplicate(page: MyWay.UI.TotemComponent): void;
        addPageNavigationSecondaireWithoutDuplicate(page: MyWay.UI.TotemComponent): void;
        private addPageWithoutDuplicate(pages, page);
        removePageNavigationPrincipale(page: MyWay.UI.TotemComponent): void;
        removePageNavigationSecondaire(page: MyWay.UI.TotemComponent): void;
        private removePage(pages, page);
        /**
         * Active la section dans la page
         * @param titrePage
         * @param titreSection
         */
        setActiveSectionTotemCharge(titrePage: string, titreSection: string): void;
        /**
         * Force l'activation dans le menu dans le cas où la page peut être une finalité suite à un retour arrière
         */
        setActiveSectionForcee(titrePage: string, titreSection: string): void;
        /**
         * Force l'activation dans le totem sans scroll
         * @param titrePage
         * @param titreSection
         * @param activationSecurite : un section peut être active dans la page et cet appel ne doit faire l'action que si aucune section n'est activée
         */
        setActiveSectionTotem(titrePage: string, titreSection: string, activationSecurite?: boolean): void;
        /**
         * Le totem est composé de pages tranverses, peu importe l'état
         */
        initTotemPrincipalPagesTransverses(): void;
        /**
         * Génère le totem principal de l'application, selon l'étape du dossier
         * Les pages transverses du menu sont déjà présentes
         */
        setTotemPrincipal(sousEtatDossier: ApiInstuctionCredit.Enum.SousEtatDossier, emprunteurPresent: boolean, redirection: boolean, affichageSectionClientDroitsEL: boolean, affichageMultiRisqueHabitation: boolean, majChemin?: boolean): void;
        /**
         * Certaines pages transverses changent selon l'état du dossier
         */
        private setPagesTransverses(sousEtatDossier, affichageMultiRisqueHabitation);
        private setPagesTransversesNotProposition(sousEtatDossier);
        /**
         * La page émission de documents peut prendre en compte la section fiche suiveuse
         */
        private setPageEmissionWithFicheSuiveuse(sousEtatDossier);
        /**
         *  Ajoute la page Riques dans la partie du Totem "Actions complémentaires" lors de l'étape du montage (CFF)
         */
        private initPageRisques(isCFF);
        /**
         * Récupération d'une page transverse
         * @param titre
         */
        private getPageTransverseByTitre(titre);
        /**
         * Maj du totem page piece et controle sur la présence d'incomplétude
         */
        majTotemPieco(complet: boolean, section: string): void;
        /**
         * Initialise le menu pour l'étape du montage
         */
        private initTotemMontage(emprunteurPresent, affichageSectionClientDroitsEL);
        /**
         *  Ajoute la page multirisque-habitation dans la partie du Totem "Actions complémentaires" lors de l'étape du montage
         */
        initPageMultiRisqueHabilitation(affichage: boolean): ng.IPromise<void>;
        /**
         *  Ajoute la page conformite-du-dossier dans la partie du Totem "Actions complémentaires" lors de l'étape du montage
         *  Affichage non conditionné par une habilitation
         */
        private initPageConformiteDuDossier();
        /**
         *  Ajoute la page Bloc Notes dans la partie du Totem "Actions complémentaires" lors de l'étape du montage
         *  Affichage non conditionné par une habilitation
         */
        private initPageBlocNotes();
        /**
         *  Ajoute la page Historique du dossier dans la partie du Totem "Actions complémentaires" lors de l'étape du montage
         *  Affichage non conditionné par une habilitation
         */
        private initPageHistoriqueDossier();
        /**
         * Méthode permettant de récupérer la position d'une page dans la partie du totem "actions complémentaire"
         * @param {string} page
         * @returns number
         */
        private getIndexPageTotem(page);
        /**
         * Mets à jour les sections de la partie CLient en fonction de la présence ou non d'un emprunteur
         */
        majTotemEmprunteur(emprunteur: boolean, activationMenu: boolean, affichageSectionClientDroitsEL: boolean, affichageMultiRisqueHabitation: boolean): void;
        /**
         * Mets à jour les sections de la partie Propositions: avec ou sans la partie critères de remboursement
         */
        majTotemFinancement(avecCriteres: boolean): void;
        /**
         * Maj du totem page financement sur la présence ou non de crédit
         * @param nombreCreditPresent
         */
        majTotemFInancementCredits(nombreCreditPresent: number): void;
        majTotemEdition(existeMandats: boolean): void;
        /**
         * Positionne le nouvel élément lors de 'linitailisation d'une vue à la place souhaitée dans le totem
         */
        private majTotemPrincipal(nouvelElement);
        /**
         * Génère le totem pour la partie proposition
         */
        private initSousChapitreProposition(sousChapitre, emprunteurPresent, affichageSectionClientDroitsEL);
        /**
         * Ajoute la page "Gestion adminsitrative" et ses sestions au menu
         */
        private initPageGestionAdministrative();
        /**
         * Dans le totem principal, création de la page "Décision" (étape 3) qui remplace le sous-chapitre "Proposition" des étapes 1 et 2
         */
        private initPageDecision();
        /**
         * Dans le totem principal, création de la page "Edition" (étape 4) qui remplace la page "Décision" de l'étape 3
         */
        private initPageEdition();
        /**
         * Dans le totem principal, création de la page "Remise" (étape 5) qui remplace la page "Edition" de l'étape 4
         */
        private initPageRemise();
        /**
         * Dans le totem principal, création de la page "Signature" (étape 6)
         * /!\ Dans le cas d'un passage d'étape, elle remplace la page "Remise" de l'étape 5
         */
        private initTotemSignature();
    }
}

declare module PiecesControles.Service {
    class ParametrageService {
        private $q;
        private wsCatalogueCommunService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, wsCatalogueCommunService: ApiInstuctionCredit.Service.Data.CatalogueCommunService);
        getAfficherTransfertNeo(dateTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        getAfficherRefusAssuranceExterne(dateTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifie si la caisse a le paramètrage pour le devis MRH
         */
        controleParametrageMultiRisqueHabitation(): ng.IPromise<boolean>;
    }
}

declare module PiecesControles.Service {
    import ApiModel = ApiInstuctionCredit.Modele;
    class PagePiecesControlesService {
        private $q;
        private sessionService;
        private initialisationService;
        private apiPiecoService;
        private wsPiecoService;
        private navigationService;
        private wsCatalogueCommunService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, sessionService: Service.SessionService, initialisationService: Service.InitialisationService, apiPiecoService: ApiInstuctionCredit.Service.PiecoService, wsPiecoService: ApiInstuctionCredit.Service.Data.PiecoService, navigationService: MyWay.UI.INavigationService, wsCatalogueCommunService: ApiInstuctionCredit.Service.Data.CatalogueCommunService);
        getDataPieco(idDossier: string, dateTraitement: string, codeEtbt: string, sousEtatDossierActuel: ApiInstuctionCredit.Enum.SousEtatDossier): ng.IPromise<ApiModel.IPieco>;
        private getDataPiecoComplet(idDossier, dateTraitement, codeEtbt, dossierComplet, dossierSchema, sousEtatDossierActuel);
        private getDossierComplet(idDossier);
        /**
         * Lance l'édition du document
         */
        editer(idDossier: string): ng.IPromise<string>;
        enregistrementDonnees(idDossier: string, data: ApiModel.IPieco): ng.IPromise<boolean>;
        /**
         * Compare les pièces pour ne garder que les pièces ayant subit des modifications
         */
        private getListePiecesUpdate(listePieceClient, listeInitiale);
        /**
         * Compare les conrtoles pour ne garder que ceux ayant subit des modifications
         */
        private getListeControleUpdate(listeControle, listeInitiale);
        /**
         * Enregistrement des pièces
         */
        private enregistrementPieces(idDossier, listePieceClient, listePieceAgence, listeControle);
        /**
         * Enregistrement des commentaires PIECO
         */
        enregistrerCommentaires(idDossier: string, commentaireClient: string, commentaireAgence: string): ng.IPromise<void>;
        private getDossierSchema(idDossier);
    }
}

declare module PiecesControles {
    type Backdrop = "static";
    class PopinService {
        private modalService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService);
        openPopinAlerteNeo(data: IDataModaleAlerteNeo): ng.IPromise<void>;
        openPopinAlertes(data: IDataModaleAlertes): ng.IPromise<boolean>;
        openPopinListeAnomalies(data: IDataModaleListeAnomalies): ng.IPromise<void>;
        private showLargeModal<T>(data, templateUrl, ctrl, ctrlAs, backdrop?, keyboard?);
        private showMediumModal<T>(data, templateUrl, ctrl, ctrlAs, backdrop?, keyboard?);
        private getModalSetting<T>(data, templateUrl, ctrl, ctrlAs, size, backdrop, keyboard);
    }
}

declare module PiecesControles.Service {
    /**
     * Service permettant de stocker les données utilisées dans l'application à garder en session
     * /!\ Pas de métier, uniquement des données.
     */
    class SessionService {
        static codeDevise: string;
        static symboleDevise: string;
        static multiDevise: boolean;
        static monoDevise: boolean;
        static dateTraitement: any;
        static dateTraitementYYYYMMDD: string;
        static dateTraiementDate: Date;
        static authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        static idntDossier: string;
        dossierComplet: ApiInstuctionCredit.Modele.IDossierComplet;
        dossierSchema: ApiInstuctionCredit.Modele.IDossierSchema;
        donneesProjet: ApiInstuctionCredit.Modele.IProjetSession;
        rechargementPageClient: boolean;
        /**
         * Indique si le context d'authentification est sur l'établissement Crédit Foncier de France
         */
        static estAuthentifieEtablissementCFF: boolean;
        constructor();
    }
}

declare module PiecesControles.Service {
    class StateService {
        private $q;
        private $location;
        private $timeout;
        private serviceAgent;
        private navigationService;
        private sessionService;
        private initialisationService;
        private STATE_KEY;
        private loadStatePromise;
        static $inject: Array<string>;
        constructor($q: ng.IQService, $location: ng.ILocationService, $timeout: ng.ITimeoutService, serviceAgent: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, sessionService: Service.SessionService, initialisationService: Service.InitialisationService);
        /**
         * Charger les éléments du projet nécessaires pour pouvoir démarrer sur n'importe quelle route.
         * (et ainsi éviter de devoir systématiquement passer par telle ou telle route au préalable)
         */
        chargerProjet(): ng.IPromise<void>;
        /**
         * Sauvegarde l'état de l'application dans le contexte myway.
         * @param state
         */
        saveState(state: State.IApplicationState): ng.IPromise<void>;
        /**
         * Charge l'état de l'application à partir du contexte myway.
         * L'état est supprimé du contexte après lecture.
         * La promesse est rejetée si aucun état n'est trouvé.
         */
        loadState(): ng.IPromise<State.IApplicationState>;
        /**
         * Supprime la promesse de récupération d'un état.
         * Permet de supprimer l'état de la session courante.
         */
        clearLoadStatePromise(): void;
        /**
         * Renvoie true si un état existe.
         */
        isState(): ng.IPromise<boolean>;
        /**
         * Supprime l'état du contexte myway.
         */
        removeState(): ng.IPromise<void>;
        /**
         * Change la route courante avec celle définie dans l'état
         */
        changeToStateRoute(): ng.IPromise<void>;
        /**
         * Met à jour le totem de navigation avec la route définie dans l'état
         */
        updateNavigationFromStateRoute(): ng.IPromise<void>;
        /**
         * Scroll la page à l'élément indiqué dans l'état.
         */
        scrollToElement(): ng.IPromise<void>;
        /**
         * Renvoie la route d'un état à partir de sa fonctionnalité
         */
        private getStateRouteFromFonctionnalite(fonctionnalite);
    }
}
