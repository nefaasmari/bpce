
declare module virements {
    var app: ng.IModule;
}

declare module virements {
    class Constantes {
        static CODE_APPLICATION: string;
        /**
         * Constantes pour enchaînements LISA
         */
        static codeLisaNext: {
            QUITTER: number;
        };
        /**
         * Constantes pour routes
         */
        static route: {
            PATH_DEFAUT: string;
            PATH_CREATION_VIREMENT_COMPTE_IDENTIFIE: string;
            PATH_CREATION_ECHEANCIER_VIREMENT: string;
            PATH_GESTION_VIREMENTS: string;
            PATH_ERREUR_NU: string;
            PATH_ERREUR: string;
            PATH_RECHERCHE_VIREMENTS: string;
        };
        /**
         * Constantes pour les URL WS REST-IT
         */
        static urlREST: {
            URL_REST_OPERATION_FINANCIERE_SERVICE_GET_DETERMINATION_BIC: string;
            URL_REST_OPERATION_FINANCIERE_SERVICE_GET_CONTROLE_IBAN: string;
            URL_REST_OPERATION_FINANCIERE_SERVICE_GET_CONTROLE_ROUTAB_SEPA: string;
            URL_REST_VIREMENT_PARAMETRE_GET_CAISSE_HABILITATION: string;
            URL_REST_VIREMENT_PARAMETRE_GET_CATEGORIE_PAIEMENT: string;
            URL_REST_VIREMENT_PARAMETRE_GET_CODE_ECONOMIQUE: string;
            URL_REST_VIREMENT_PARAMETRE_GET_NATURE_PAIEMENT: string;
            URL_REST_VIREMENT_PUT_RECHERCHE: string;
            URL_REST_CONTRAT_GET_RECHERCHE: string;
        };
        /**
         * Constantes pour titres
         */
        static titre: {
            TEMPLATE_TITRE_CREATION_VIREMENT: string;
            TEMPLATE_TITRE_GESTION_VIREMENT: string;
        };
        /**
         * Constantes pour titres
         */
        static action: {
            ACTION_CREATION_VIREMENT: string;
            ACTION_CREATION_ECHEANCIER: string;
        };
        /**
         * Constante(s) pour gestion des infos
         */
        static info: {
            ENTETE_INFO_CREATION_EFFECTUEE: string;
            MESSAGE_INFO_CREATION_EFFECTUEE: string;
        };
        /**
         * Constante(s) pour gestion des erreurs
         */
        static erreur: {
            TITRE_SYNTHESE_ERREUR_1: string;
            TEMPLATE_TITRE_SYNTHESE_ERREUR_SUFFIXE_SUP_1: string;
            MESSAGE_ERREUR_VALIDATION_COMPTE_ORIGINE: string;
            MESSAGE_ERREUR_VALIDATION_COMPTE_BENEFICIAIRE: string;
            MESSAGE_ERREUR_VALIDATION_DEVISE: string;
            MESSAGE_ERREUR_VALIDATION_MONTANT: string;
            MESSAGE_ERREUR_VALIDATION_DATE_EFFET_VIREMENT: string;
            ENTETE_ERREUR_INIT: string;
            ENTETE_ERREUR_NON_HABILITE: string;
            ENTETE_ERREUR_CREATION_VIREMENT: string;
            MESSAGE_ERREUR_IBAN_BENEFICIAIRE_INVALIDE: string;
            MESSAGE_ERREUR_BIC_BENEFICIAIRE_NON_ROUTABLE_SEPA: string;
            MESSAGE_ERREUR_MONTANT_INFERIEUR_A_PLANCHER: string;
            MESSAGE_ERREUR_MONTANT_SUPERIEUR_A_PLAFOND: string;
            MESSAGE_ERREUR_MONTANT_SUPERIEUR_A_NORMAL: string;
            TEMPLATE_MESSAGE_ERREUR_NON_HABILITE: string;
        };
        /**
         * Constante(s) pour gestion des confirmations
         */
        static confirmation: {
            ENTETE_CONFIRMATION_CREATION_VIREMENT: string;
            TEMPLATE_MESSAGE_CONFIRMATION_MONTANT_SUPERIEUR_POPUP: string;
        };
        /**
         * Constantes pour identifier les données de contexte
         */
        static codeParametreLisa: {
            IDENTIFIANT_PERSONNE: string;
            DESIGNATION_PERSONNE: string;
            RICE_CONTRAT: string;
        };
        /**
         * Constantes pour identifier les données délocalisées
         */
        static donneesDelocalisees: {
            CENEDP: string;
            COHDAO: string;
            CTHMIN: string;
            PTNEEC: string;
            DU1V: string;
            H81E: string;
        };
        /**
         * Constantes pour identifier les habilitations
         */
        static habilitations: {
            SHXNS1: string;
            SHXNS6: string;
            SEPA_Role_CreerDossier: string;
            SEPA_Role_CreerDossierMontantSuperieurANormal: string;
            SEPA_Role_CloturerDossier: string;
            SEPA_Role_ModifierDossier: string;
            SEPA_Role_SuspendreDossier: string;
            SEPA_Role_ReactiverDossier: string;
            SEPA_Role_ConsulterDossier: string;
            SEPA_Role_DoubleValider: string;
        };
        /**
         * Constantes pour devises
         */
        static devise: {
            CODE_ISO_EURO: string;
        };
        /**
         * Constantes pour virement
         */
        static virement: {
            CODE_EFFET_VIREMENT_IMMEDIAT: string;
            CODE_EFFET_VIREMENT_DIFFERE: string;
            CODE_TYPE_VIREMENT_UNIQUE: string;
            CODE_TYPE_VIREMENT_PERMANENT: string;
        };
        /**
         * Constantes pour opération
         */
        static operation: {
            CODE_TYPE_OPERATION_VIREMENT_SEPA: string;
        };
        /**
         * Constantes binaires
         */
        static binaire: {
            OUI: string;
            NON: string;
        };
        /**
         * Constantes pour téléphone
         */
        static telephone: {
            INDICATIF_TELEPHONE_FRANCE: string;
        };
        /**
         * Constantes pour type d'instruction
         */
        static instruction: {
            CODE_TYPE_INSTRUCTION_GUICHET: string;
        };
        /**
         * Constantes pour nature paiement
         */
        static naturePaiement: {
            NATURE_PAIEMENT_AUTRE: {
                codeNaturePaiementEnFrancais: string;
                descriptionNaturePaiement: string;
            };
        };
        /**
         * Constantes pour modes
         */
        static mode: {
            MODE_CREATION: string;
        };
        static rechercheVirement: {
            CODE_ACTION_RECHERCHE: string;
            CODE_ACTION_LISTE: string;
        };
        static codeTypeSynthese: {
            TOUS_PRODUITS: string;
            AVOIRS: string;
            DEBIST: string;
        };
        static indicateurRestitutionComptes: {
            COMPTES_ACTIFS_ET_CLOS: string;
            COMPTES_ACTIFS: string;
            COMPTES_CLOS: string;
        };
        static indicateurRestitutionServices: {
            SERVICES: string;
            COMPTES_UNIQUEMENT: string;
        };
        static statutDossierEcheancier: {
            ACTIF: string;
            CLOS: string;
            SUSPENDU: string;
            A_VALIDER: string;
        };
        constructor();
    }
}

declare module virements.Controleurs {
    /**
     * Contrôleur pour création d'un échéancier de virement
     */
    class CreationEcheancierVirementControleur {
        private mainService;
        private messageService;
        private $q;
        private $window;
        private $location;
        private $route;
        private navigationService;
        private virementParametreService;
        estOperationEnCours: boolean;
        estHabilite: boolean;
        listeInstructions: Array<Modeles.IMapItem>;
        instructionSelected: Modeles.IMapItem;
        listePeriodicites: Array<Modeles.IMapItem>;
        periodiciteSelected: Modeles.IMapItem;
        listePays: Array<Modeles.IMapItem>;
        listePaysISO: Array<any>;
        paysBanqueSelected: Modeles.IMapItem;
        paysResidenceSelected: Modeles.IMapItem;
        listeCodesEconomiques: Array<Modeles.IDetailCodeEconomique>;
        listeNaturesPaiement: Array<Modeles.IDetailNaturePaiement>;
        listeCategoriesPaiement: Array<Modeles.IDetailCategoriePaiement>;
        static $inject: string[];
        /** Constructeur
         * @param mainService {MainService}
         * @param messageService {IMessageService}
         * @param $q {IQService}
         * @param $window {IWindowService}
         * @param $location {ILocationService}
         * @param $route {IRouteService}
         * @param navigationService {NavigationAppService}
         * @param virementParametreService {IVirementParametreService}
         */
        constructor(mainService: Services.MainService, messageService: Services.IMessageService, $q: ng.IQService, $window: ng.IWindowService, $location: ng.ILocationService, $route: ng.route.IRouteService, navigationService: Services.NavigationAppService, virementParametreService: Services.IVirementParametreService);
        /**
         * Initialiser les données
         */
        private init();
        /**
         * Retour à la création de virement
         */
        retour(): void;
        /**
         * Valider la création de l'échéancier de virement
         */
        valider(): void;
    }
}

declare module virements.Controleurs {
    /**
     * Contrôleur pour création d'un virement depuis un compte identifié
     */
    class CreationVirementCompteIdentifieControleur {
        private mainService;
        private messageService;
        private routageService;
        private mwsfDeviseService;
        private $location;
        private navigationService;
        private operationFinanciereServiceService;
        private virementParametreService;
        private $filter;
        estOperationEnCours: boolean;
        estHabilite: boolean;
        estVerifie: boolean;
        listeDevises: Array<MyWay.Model.Devise>;
        criteresVirement: Modeles.ICriteresVirement;
        listeErreur: Array<string>;
        titreErreur: string;
        static $inject: string[];
        /** Constructeur
         * @param mainService {MainService}
         * @param messageService {MessageService}
         * @param routageService {IRoutageService}
         * @param mwsfDeviseService {DeviseService}
         * @param $location {ILocationService}
         * @param navigationService {NavigationAppService}
         * @param operationFinanciereServiceService {IOperationFinanciereServiceService}
         * @param virementParametreService {IVirementParametreService}
         * @param $filter {IFilterService}
         */
        constructor(mainService: Services.MainService, messageService: Services.IMessageService, routageService: Services.IRoutageService, mwsfDeviseService: myway.comInterdomaine.DeviseService, $location: ng.ILocationService, navigationService: Services.NavigationAppService, operationFinanciereServiceService: Services.IOperationFinanciereServiceService, virementParametreService: Services.IVirementParametreService, $filter: ng.IFilterService);
        /**
         * Initialiser les données
         */
        private init();
        /**
         * Vérifier la validité des champs du formulaire
         * @return {boolean} true si tous les champs sont valides, false s'il y a une erreur ou plus
         */
        verifierFormulaire(): boolean;
        /**
         * Annuler la création de virement
         */
        annuler(): void;
        /**
         * Continuer la création de virement
         */
        continuer(): void;
    }
}

declare module virements.Controleurs {
}

declare module virements.Controleurs {
}

declare module virements.Controleurs {
}

declare module virements.Controleurs {
}

declare module virements.Controleurs {
    /**
     * Contrôleur pour la recherche des virements.
     */
    class RechercheVirementsControleur {
        private navigationService;
        private mainService;
        private $scope;
        static $inject: string[];
        codeEtablissement: string;
        listeDossierSepa: Modeles.IDossierSEPA[];
        virementSelectionne: Modeles.IVirement;
        afficherPaneauxListeVirements: boolean;
        constructor(navigationService: Services.NavigationAppService, mainService: Services.MainService, $scope: ng.IScope);
    }
}

declare module virements.Filtres {
}

declare module virements.Modeles {
    interface ICaisseHabilitation {
        listeCaisseHabilitation: Array<IDetailCaisseHabilitation>;
    }
    interface IDetailCaisseHabilitation {
        codeEtablissement: string;
        codeNaturePaiement: string;
        codeNatureCanal: string;
        codeProduit: string;
        codeTypeSegmentMarche: string;
        mtSeuilMinimum: number;
        montantSeuilMaximum: number;
        montantSeuilPopUp: number;
        montantValidationSeuilNormal: number;
        montantDoubleValidation: number;
        montantSeuilAlerte: number;
        montantSeuilRisque: number;
        typeCompteNantissement: string;
        codeSegment3PremierCar: string;
    }
}

declare module virements.Modeles {
    interface ICategoriePaiement {
        listeCategoriePaiement: Array<IDetailCategoriePaiement>;
    }
    interface IDetailCategoriePaiement {
        descriptionCategoriePaiement: string;
        codeCategoriePaiement: string;
    }
}

declare module virements.Modeles {
    interface ICodeEconomique {
        listeCodeEconomique: Array<IDetailCodeEconomique>;
    }
    interface IDetailCodeEconomique {
        codeEconomique: string;
        libelleCodeEconomique: string;
        codeFrequenceUtilisationCodeEco: string;
    }
}

declare module virements.Modeles {
    interface IContrat {
        identifiantContrat: string;
        libelleContrat: string;
        codeProduit: string;
        codeEtat: string;
        roleTiers: string;
        identifiantEntiteTitulaire: string;
        identifiantRice: string;
        cleRice: string;
        codeDevise: string;
        codeGuichet: string;
        numeroCompte: string;
        designationBancaire: string;
        soldeCompte: number;
        compteIBAN: string;
        compteRIB: string;
        compteBIC: string;
        compteCodePays: string;
        libelleProduit: string;
    }
    interface ITiers {
        codeEtablissement: string;
        identifiantTiers: string;
        listeContrat: Array<IContrat>;
    }
    interface ITravailEv2x {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ITravailEv2xItem>;
    }
    interface ITravailEv2xItem {
        COEGPY: string;
        COEGPX: string;
        LLEGXE: string;
    }
}

declare module virements.Modeles {
    interface IControleIban {
        numeroIbanCompte: string;
        indicateurValiditeIban: boolean;
    }
}

declare module virements.Modeles {
    interface IControleRoutabSepa {
        codeBic: string;
        numeroIbanCompte: string;
        codeTypeOperationSrd: string;
        indicateurRoutabiliteSepa: boolean;
    }
}

declare module virements.Modeles {
    interface ICriteresVirement {
        compteOrigine: MyWay.Model.Contrat;
        compteBeneficiaire?: MyWay.Model.Contrat;
        estSansContrepartie?: boolean;
        devise: MyWay.Model.Devise;
        montant: number;
        codeEffetVirement: string;
        dateEffetVirement?: Date;
        codeTypeVirement?: string;
    }
}

declare module virements.Modeles {
    interface IDeterminationBic {
        numeroIbanCompte: string;
        codeBic: string;
    }
}

declare module virements.Modeles {
    /**
     * Interface données de contexte
     */
    interface IDonneesContexte {
        contextAuthentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresLisa: IParametresLisa;
        donneesDelocalisees: IDonneesDelocalisees;
        habilitations: IHabilitations;
    }
    /**
     * Interface paramètres LISA
     */
    interface IParametresLisa {
        identifiantPersonne: string;
        designationPersonne: string;
        riceContrat: string;
    }
    /**
     * Interface données délocalisées
     */
    interface IDonneesDelocalisees {
        donneesDelocaliseesCENEDP: Array<IDonneesDelocaliseesItem>;
        donneesDelocaliseesCOHDAO: Array<IDonneesDelocaliseesItem>;
        donneesDelocaliseesCTHMIN: Array<IDonneesDelocaliseesItem>;
        donneesDelocaliseesPTNEEC: Array<IDonneesDelocaliseesItem>;
        donneesDelocaliseesDU1V: Array<Object>;
        donneesDelocaliseesH81E: Array<Object>;
    }
    /**
     * Interface élément de données délocalisées
     */
    interface IDonneesDelocaliseesItem {
        Key: string;
        Value: string;
    }
    /**
     * Interface élément de map
     */
    interface IMapItem {
        key: string;
        value: string;
    }
    /**
     * Interface habilitations
     */
    interface IHabilitations {
        SHNXS1: boolean;
        SHNXS6: boolean;
        SEPA_Role_CreerDossier: boolean;
        SEPA_Role_CreerDossierMontantSuperieurANormal: boolean;
        SEPA_Role_CloturerDossier: boolean;
        SEPA_Role_ModifierDossier: boolean;
        SEPA_Role_SuspendreDossier: boolean;
        SEPA_Role_ReactiverDossier: boolean;
        SEPA_Role_ConsulterDossier: boolean;
        SEPA_Role_DoubleValider: boolean;
    }
}

declare module virements.Modeles {
    interface IDetailInfoEcheancier {
        codeTypeTraitement: string;
        referenceExterneAgent: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteClientDonneurOrdre: string;
        cleRibNumeroCompte: string;
        codeBicBanqueDonneurOrdre: string;
        numeroIbanCompteDonneurOrdre: string;
        prioriteVirement: string;
        typeVirementImmediat: string;
        codeDevise: string;
        montantContreValeur: number;
        codeDeviseContreValeur: string;
        codePeriodicite: string;
        datePremiereEcheance: Date;
        dateDerniereEcheance: Date;
        codeEtatDossierPrelevement: string;
        jourReferenceEcheancier: string;
        typeJourReferenceEcheancier: string;
        codeApplicationDeiOrigine: string;
        typeInstruction: string;
        dateContreAppel: Date;
        numeroTelephone: string;
        referenceTransaction: string;
        codeBicDestinataire: string;
        numeroIbanCompteBeneficiaire: string;
        libelleCompletBeneficiaire: string;
        identifiantBeneficiaire: string;
        indicatifPaysBeneficiaire: string;
        codePaysBanqueBeneficiaire: string;
        codePaysResidenceBeneficiaire: string;
        codeEconomique: string;
        libelle1VirementImmediat: string;
        libelle2VirementImmediat: string;
        libelle3VirementImmediat: string;
        libelle4VirementImmediat: string;
        typeCompteDestinataire: string;
        referenceDonneurOrdre: string;
        identifiantDonneurOrdre: string;
        libelleBeneficiaireUltime: string;
        identifiantBeneficiaireUltime: string;
        libelleDonneurOrdreUltime: string;
        identifiantDonneurOrdreUltime: string;
        codeClasseIdtBeneficiaireUltime: string;
        codeClasseIdtDonneurOrdreUltime: string;
        codeClasseIdtDonneurOrdre: string;
        codeClasseIdtBeneficiaire: string;
        libelleNaturePaiement: string;
        codeCategoriePaiement: string;
        valeurDernierNumeroDistribue: string;
        codeActeurCreationDossier: string;
        identifiantProduitService: number;
        numeroPersonne: number;
        referenceVirementTutelle: number;
        identifiantRemiseMagnetique: string;
        numeroOrdreOperation: number;
        adresse1Beneficiaire: string;
        adresse2Beneficiaire: string;
        adresse3Beneficiaire: string;
        adresse4Beneficiaire: string;
        identifiantDossierSepa: string;
        identifiantDossierVirementSepa: string;
        montantMouvementVirmtImmediat: number;
        dateCreationEcheancier: Date;
        dateModificationEcheancier: Date;
        dateProchaineEcheance: Date;
        codeInitiateurDemande: string;
        codeMotifSuspension: string;
        libelleMotifSuspension: string;
        libelleLongCRE: string;
    }
    interface IInfoEcheancier {
        listeDetailInfoEcheancier: Array<IDetailInfoEcheancier>;
        listeDetailRechercheSEPA: Array<IDetailRechercheSEPA>;
    }
    interface IDetailRechercheSEPA {
        identifiantDossierVirementSepa: string;
        codeDevise: string;
        codeBICDestinataire: string;
        numeroIBANCompteBeneficiare: string;
        codeEtatOperationVirement: string;
        dateEcheanceVirement: Date;
        dateReglementVirement: Date;
        libelleErreur: string;
        identifiantBeneficiare: string;
        referenceOperationEIB: string;
        montantVirementImmediat: number;
    }
    interface IInfoTraitementDivers {
    }
}

declare module virements.Modeles {
    interface INaturePaiement {
        listeNaturePaiement: Array<IDetailNaturePaiement>;
    }
    interface IDetailNaturePaiement {
        codeNaturePaiementEnFrancais: string;
        descriptionNaturePaiement: string;
    }
}

declare module virements.Modeles {
    interface IDossierSEPA {
        indicPresenceInfoComplementaire: string;
        nombreDossiersPossibles: number;
        typeVirementImmediat: string;
        codeEtablissement: string;
        codeBicBanqueDonneurOrdre: string;
        numeroIbanCompteDonneurOrdre: string;
        codeDevise: string;
        codePeriodicite: string;
        datePremiereEcheance: Date;
        dateDerniereEcheance: Date;
        dateProchaineEcheance: Date;
        codeApplicationDeiOrigine: string;
        libelleCompletBeneficiaire: string;
        identifiantBeneficiaire: string;
        numeroIbanCompteBeneficiaire: string;
        libelle1VirementImmediat: string;
        libelle2VirementImmediat: string;
        libelle3VirementImmediat: string;
        libelle4VirementImmediat: string;
        referenceExterneAgent: number;
        idtElementStructure: number;
        dateOuvertureDossier: Date;
        indicateurAutorisationCloture: boolean;
        identifiantDossierVirement: string;
        numeroCompteDonneurOrdre: string;
        montantMouvVirementImmediat: number;
        indicateurAutorisationModif: boolean;
        indicActivationSuspReactiv: boolean;
        codeBicBeneficiaire: string;
        codeGuichetDonneurOrdre: string;
        cleRibDonneurOrdre: string;
        statutDossier: string;
    }
    interface ICritereRecherche {
        codeEtablissement: string;
        referenceExterneAgent: number;
        dateDebutPeriode: string;
        dateFinPeriode: string;
        datePremiereEcheance: string;
        dateDerniereEcheance: string;
        codePeriodicite: string;
        codeApplicationDeiOrigine: string;
        codeGuichetDonneurOrdre: string;
        numeroCompteDonneurOrdre: string;
        cleRibDonneurOrdre: string;
        codeBicBeneficiaire: string;
        montantMinimum: number;
        montantMaximum: number;
        edsCreation: number;
        identifiantDossierVirement: string;
        statutDossier: string;
        numeroIbanCompteBeneficiaire: string;
    }
    interface IRecherche {
        listeDossierSEPA: Array<IDossierSEPA>;
        listeCritereRecherche: Array<ICritereRecherche>;
    }
}

declare module virements.Modeles {
    enum ModeAffichageListeVirements {
        Simple = 0,
        Complexe = 1,
    }
    interface ISelectionVirementHandler {
        onSelectionChange: (virement: any) => any;
    }
    interface IListeVirementsOptions {
        modeAffichage: ModeAffichageListeVirements;
        data: any[];
        selectionChangeHandler?: ISelectionVirementHandler;
    }
    interface IVirement extends IDossierSEPA {
        libelleCompteDebite: string;
        libelleProduit: string;
        typeVirement: string;
        paysBanqueBeneficiaire: string;
    }
}

declare module virements.Services {
    class ContratService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        listeComptesActifsEligiblesVirement(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<Modeles.IContrat[]>;
        private sendRequestGetRecherche(codeEtablissement, identifiantTiers, codeTypeSynthese, indicateurRestitutionComptes, indicateurRestitutionServices, virement);
    }
}

declare module virements.Services {
    class MainService {
        private serviceAgentExtended;
        private messageService;
        private routageService;
        private $q;
        donneesContexte: Modeles.IDonneesContexte;
        static $inject: string[];
        /**
         * Constructeur
         * @param serviceAgentExtended {ServiceAgentExtended}
         * @param messageService {IMessageService}
         * @param routageService {IRoutageService}
         * @param $q {IQService}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, messageService: Services.IMessageService, routageService: Services.IRoutageService, $q: ng.IQService);
        /**
         * Initialiser le service agent et le contexte
         * @return promesse {IPromise<MainService>} sur le service initialisé, contenant les données de contexte, à savoir :
         * - les données d'authentification de l'agent connecté
         * - les données de contexte passées par LISA
         * - les données délocalisées
         */
        initContexte(): ng.IPromise<MainService>;
        /**
         * Valoriser les données délocalisées à partir de leur rubrique
         * @param rubrique {string} rubrique de données délocalisées
         * @param donnees {Array<IDonneesDelocaliseesItem>} données délocalisées correspondant à la rubrique
         */
        private setDonneesDelocaliseesRubrique(rubrique, donnees);
        /**
         * Rechercher des données délocalisées à partir de leur rubrique
         * @param rubrique {string} rubrique de données délocalisées
         * @return {Array<IDonneesDelocaliseesItem>} données délocalisées correspondant à la rubrique, null si non trouvée
         */
        getDonneesDelocaliseesRubrique(rubrique: string): Array<Modeles.IDonneesDelocaliseesItem>;
        /**
         * Valoriser les données délocalisées de la table DU1V
         * @param donnees {Array<Object>} données délocalisées correspondant à la table
         */
        private setDonneesDelocaliseesTableDU1V(donnees);
        /**
         * Valoriser les données délocalisées de la table H81E
         * @param donnees {Array<Object>} données délocalisées correspondant à la table
         */
        private setDonneesDelocaliseesTableH81E(donnees);
        /**
         * Rechercher des données délocalisées à partir de leur nom de table
         * @param table {string} table de données délocalisées
         * @return {Array<Object>} données délocalisées correspondant à la table, null si non trouvée
         */
        getDonneesDelocaliseesTable(table: string): Array<Object>;
        /**
         * Rechercher la valeur d'une donnée délocalisée à partir de sa clé
         * @param rubrique {string} rubrique de données délocalisées
         * @param cle {string} clé recherchée
         * @return {string} valeur correspondant à la clé, null si non trouvée
         */
        getValeurDonneesDelocaliseesRubriqueParCle(rubrique: string, cle: string): string;
        /**
         * Récupérer des donnée délocalisées sous forme d'objet map (tableau d'objets de type (key, value)),
         *   utilisable dans une liste déroulante
         * @param rubrique {string} rubrique de données délocalisées
         * @return {Array<IMapItem>} objet map trié par key ascendant, et filtré des items éventuels à retirer
         */
        getDonneesDelocaliseesRubriqueAsMap(rubrique: string): Array<Modeles.IMapItem>;
        /**
         * Récupérer des donnée délocalisées de la table DU1V sous forme d'objet map (tableau d'objets de type (key, value)),
         *   utilisable dans une liste déroulante
         * @param codeEtablissement {string} code de l'établissement
         * @return {Array<IMapItem>} objet map filtré par code de l'établissement et trié par value ascendant,
         *   key étant le code guichet et value le libellé d'établissement
         */
        getDonneesDelocaliseesTableDU1VAsMap(codeEtablissement: string): Array<Modeles.IMapItem>;
        /**
         * Vérifier si l'utilisateur est habilité pour une page donnée, sinon rediriger vers la page 'non-habilite' et quitter l'application
         * @param habilitation {boolean} valeur de l'habilitation à vérifier
         * @param titrePage {string} titre de la page demandée
         */
        verifierHabilitation(habilitation: boolean, titrePage: string): void;
    }
}

declare module virements.Services {
    interface IMessageService {
        afficherModaleInfo(entete: string, message: string, avecIcon?: boolean): ng.IPromise<any>;
        afficherModaleErreur(entete: string, message: string): ng.IPromise<any>;
        afficherConfirmation(entete: string, message: string): ng.IPromise<any>;
        extractErreur(data: any): any;
        log(message: string, detail?: any): void;
        logSendRequest(msg: string): void;
        debug(message: string, action?: string, detail?: any): void;
        error(message: string, action?: string, detail?: any): void;
        info(message: string, action?: string, detail?: any): void;
        warning(message: string, action?: string, detail?: any): void;
    }
    class MessageService implements IMessageService {
        private modalService;
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         * @param modalService {IModalService}
         * @param serviceAgentExtended {ServiceAgentExtended}
         */
        constructor(modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Afficher une information sous forme de modale
         * @param entete {string} intitulé de l'information en entête de la modale
         * @param message {string} message d'information dans le corps de la modale
         * @param avecIcon {boolean} affichage avec icône info ou non (par défaut)
         * @return {IPromise<any>} promesse sur objet quelconque retourné lors de la fermeture de la modale
         */
        afficherModaleInfo(entete: string, message: string, avecIcon?: boolean): ng.IPromise<any>;
        /**
         * Afficher une erreur sous forme de modale
         * @param entete {string} intitulé de l'erreur en entête de la modale
         * @param message {string} message d'erreur dans le corps de la modale
         * @return {IPromise<any>} promesse sur objet quelconque retourné lors de la fermeture de la modale
         */
        afficherModaleErreur(entete: string, message: string): ng.IPromise<any>;
        /**
         * Afficher une demande de confirmation sous forme de modale
         * @param entete {string} intitulé de la confirmation en entête de la modale
         * @param message {string} message de confirmation dans le corps de la modale
         * @return {IPromise<any>} promesse sur objet quelconque retourné lors de la fermeture de la modale
         */
        afficherConfirmation(entete: string, message: string): ng.IPromise<any>;
        /**
         * Extraire les données d'erreur pour en faire un message texte
         * @param data {any} données d'erreur (de type MyWay.Services.Erreur ou autre)
         * @return {any} message d'erreur (texte ou autre)
         */
        extractErreur(data: any): any;
        /**
         * L'idée ici est de centraliser les LOGS afin de pouvoir les désactiver sur une ligne de code.
         * log/warn() sont temporaires, et doivent pouvoir être supprimés.
         * trace/error/info/warning() a pour objectif d'être permanent et géré par le socle technique.
         *
         * Loguer un message d'erreur suivi éventuellement d'un objet associé
         * @param message {string} message d'erreur
         * @param detail {any} objet associé à l'erreur, facultatif
         */
        log(message: string, detail?: any): void;
        /**
         * Loguer un appel WS REST
         * @param message {string} URL appelée
         */
        logSendRequest(message: string): void;
        /**
         * Loguer un message de niveau debug
         * @param message {string} message de debug
         * @param action {string} action associée, facultatif
         * @param detail {any} objet associé, facultatif
         */
        debug(message: string, action?: string, detail?: any): void;
        info(message: string, action?: string, detail?: any): void;
        warning(message: string, action?: string, detail?: any): void;
        error(message: string, action?: string, detail?: any): void;
    }
}

declare module virements.Services {
    class NavigationAppService {
        private mainService;
        private navigationService;
        private estAvecTotem;
        private headerTexte;
        private navigation;
        static $inject: string[];
        constructor(mainService: Services.MainService, navigationService: MyWay.UI.INavigationService);
        getEstAvecTotem(): boolean;
        getHeaderTexte(): string;
        getNavigation(): MyWay.UI.TotemComponent[];
        initNavigationCreationVirement(): void;
        initNavigationCreationEcheancier(): void;
        initNavigationRechercheVirements(): void;
        initNavigationRechercheVirementsApresRecherche(): void;
        initNavigationGestionVirements(): void;
    }
}

declare module virements.Services {
    /**
     * Interface du service d'appel aux WS operationfinanciereservice
     */
    interface IOperationFinanciereServiceService {
        getDeterminationBic(numeroIbanCompte: string): ng.IPromise<Modeles.IDeterminationBic>;
        getControleIban(numeroIbanCompte: string): ng.IPromise<Modeles.IControleIban>;
        getControleRoutabSepa(codeBic: string, numeroIbanCompte: string, codeTypeOperationSrd: string): ng.IPromise<Modeles.IControleRoutabSepa>;
    }
    /**
     * Service d'appel aux WS virementparametre
     */
    class OperationFinanciereServiceService implements IOperationFinanciereServiceService {
        private serviceAgentExtended;
        private messageService;
        static $inject: string[];
        /**
         * Constructeur
         * @param serviceAgentExtended {ServiceAgentExtended}
         * @param messageService {IMessageService}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, messageService: Services.IMessageService);
        /**
         * Déterminer le BIC à partir d'un IBAN
         * @param numeroIbanCompte {string} numéro IBAN du compte
         * @return {IPromise<IDeterminationBic>} promesse sur la réponse WS
         */
        getDeterminationBic(numeroIbanCompte: string): ng.IPromise<Modeles.IDeterminationBic>;
        /**
         * Contrôler la validité d'un IBAN
         * @param numeroIbanCompte {string} numéro IBAN du compte
         * @return {IPromise<IControleIban>} promesse sur la réponse WS
         */
        getControleIban(numeroIbanCompte: string): ng.IPromise<Modeles.IControleIban>;
        /**
         * Valider la routabilité SEPA d'une association BIC/IBAN/Opération
         * @param codeBic {string} code BIC identifiant l'établissement financier
         * @param numeroIbanCompte {string} numéro IBAN du compte
         * @param codeTypeOperationSrd {string} opération-type pour SEPA dans SRD
         * @return {IPromise<IControleRoutabSepa>} promesse sur la réponse WS
         */
        getControleRoutabSepa(codeBic: string, numeroIbanCompte: string, codeTypeOperationSrd: string): ng.IPromise<Modeles.IControleRoutabSepa>;
        /**
         * Tracer une erreur retournée par un appel WS
         * @param {string} la chaîne à tronquer
         * @return {string} la chaîne tronquée
         */
        private traceErreur(requete, erreur);
    }
}

declare module virements.Services {
    /**
     * Interface du service de routage
     */
    interface IRoutageService {
        quitter(): void;
    }
    /**
     * Service de routage
     */
    class RoutageService implements IRoutageService {
        private $q;
        private serviceAgentExtended;
        private messageService;
        static $inject: string[];
        /**
         * Constructeur
         * @param $q {IQService}
         * @param serviceAgentExtended {ServiceAgentExtended}
         * @param messageService {IMessageService}
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, messageService: Services.IMessageService);
        /**
         * Quitter l'application entité titulaire
         */
        quitter(): void;
    }
}

declare module virements.Services {
    /**
     * Interface du service d'appel aux WS virementparametre
     */
    interface IVirementParametreService {
        getCaisseHabilitation(): ng.IPromise<Modeles.ICaisseHabilitation>;
        getCategoriePaiement(): ng.IPromise<Modeles.ICategoriePaiement>;
        getCodeEconomique(): ng.IPromise<Modeles.ICodeEconomique>;
        getNaturePaiement(): ng.IPromise<Modeles.INaturePaiement>;
    }
    /**
     * Service d'appel aux WS virementparametre
     */
    class VirementParametreService implements IVirementParametreService {
        private serviceAgentExtended;
        private messageService;
        static $inject: string[];
        /**
         * Constructeur
         * @param serviceAgentExtended {ServiceAgentExtended}
         * @param messageService {IMessageService}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, messageService: Services.IMessageService);
        /**
         * Récupérer le paramétrage des habilitations caisse
         * @return {IPromise<ICaisseHabilitation>} promesse sur la réponse WS
         */
        getCaisseHabilitation(): ng.IPromise<Modeles.ICaisseHabilitation>;
        /**
         * Récupérer la liste des catégories de paiement
         * @return {IPromise<ICategoriePaiement>} promesse sur la réponse WS
         */
        getCategoriePaiement(): ng.IPromise<Modeles.ICategoriePaiement>;
        /**
         * Récupérer la liste des codes économiques
         * @return {IPromise<ICodeEconomique>} promesse sur la réponse WS
         */
        getCodeEconomique(): ng.IPromise<Modeles.ICodeEconomique>;
        /**
         * Récupérer la liste des natures de paiement
         * @return {IPromise<INaturePaiement>} promesse sur la réponse WS
         */
        getNaturePaiement(): ng.IPromise<Modeles.INaturePaiement>;
        /**
         * Tracer une erreur retournée par un appel WS
         * @param {string} la chaîne à tronquer
         * @return {string} la chaîne tronquée
         */
        private traceErreur(requete, erreur);
    }
}

declare module virements.Services {
    class VirementService {
        private serviceAgentExtended;
        private contratService;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contratService: Services.ContratService, $q: ng.IQService);
        /**
         * Liste les virements pour la personne passée en paramètre
         * @param {string} codeEtablissement
         * @param {string} identifiantPersonne
         * @returns
         */
        listeVirementsPourUnePersonne(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<Modeles.IVirement[]>;
        /**
         * Liste les virements pour le contrat passé en paramètre
         */
        listeVirementsPourUnContrat(codeEtablissement: string, contrat: Modeles.IContrat): ng.IPromise<Modeles.IVirement[]>;
        listeRechercheParCriteres(critere: Modeles.ICritereRecherche): ng.IPromise<Modeles.IDossierSEPA[]>;
        convertDossierSEPAintoVirement(dossierSEPA: Modeles.IDossierSEPA, libelleProduit: string): Modeles.IVirement;
        private sendRequestPutRecherche(codeAction, criteres);
    }
}

declare module virements.Directives {
    /**
     * Contrôleur pour directive caractéristiques d'un échéancier de virement
     */
    class CaracteristiquesEcheancierVirementControleur {
        private mainService;
        mode: string;
        montantDeviseSaisi: MyWay.Model.MontantDevise;
        settingsMontant: myway.comInterdomaine.IMwMontantSettings;
        listeInstructions: Array<Modeles.IMapItem>;
        instructionSelected: Modeles.IMapItem;
        listePeriodicites: Array<Modeles.IMapItem>;
        periodiciteSelected: Modeles.IMapItem;
        datePremiereEcheance: Date;
        dateDerniereEcheance: Date;
        dateContreAppel: Date;
        dateMinEcheance: Date;
        dateMaxEcheance: Date;
        estOuvertDatePremiereEcheance: boolean;
        estOuvertDateDerniereEcheance: boolean;
        estOuvertDateContreAppel: boolean;
        indicatifTelephone: string;
        telephone: string;
        indicateurFinMois: string;
        listePays: Array<Modeles.IMapItem>;
        paysBanqueSelected: Modeles.IMapItem;
        paysResidenceSelected: Modeles.IMapItem;
        nomBeneficiaire: string;
        etageBeneficiaire: string;
        batimentBeneficiaire: string;
        rueBeneficiaire: string;
        lieuDitBeneficiaire: string;
        codePostalVilleBeneficiaire: string;
        identifiantBeneficiaire: string;
        compteDepot: string;
        identifiantDonneurOrdre: string;
        libelle1: string;
        libelle2: string;
        libelleComplementaire: string;
        referenceDonneurOrdre: string;
        listeCodesEconomiques: Array<Modeles.IDetailCodeEconomique>;
        codeEconomiqueSelected: Modeles.IDetailCodeEconomique;
        suiteLibelleComplementaire: string;
        nomDonneurOrdreInitial: string;
        identifiantDonneurOrdreInitial: string;
        nomBeneficiaireFinal: string;
        identifiantBeneficiaireFinal: string;
        listeNaturesPaiement: Array<Modeles.IDetailNaturePaiement>;
        naturePaiementSelected: Modeles.IDetailNaturePaiement;
        naturePaiementAutre: string;
        listeCategoriesPaiement: Array<Modeles.IDetailCategoriePaiement>;
        categoriePaiementSelected: Modeles.IDetailCategoriePaiement;
        form: ng.IFormController;
        constantes: typeof Constantes;
        static $inject: string[];
        /**
         * Constructeur
         * @param mainService {MainService}
         */
        constructor(mainService: Services.MainService);
        init(): void;
    }
}

declare module virements.Directives {
    /**
     * Directive caractéristiques d'un échéancier de virement
     */
    function CaracteristiquesEcheancierVirementDirective(): ng.IDirective;
}

declare module virements.Directives {
    /**
     * Contrôleur pour directive caractéristiques d'un virement
     */
    class CaracteristiquesVirementControleur {
        private mainService;
        parametresCompteOrigine: MyWay.Model.ParametresListeComptes;
        parametresCompteBeneficiaire: MyWay.Model.ParametresListeComptes;
        infoBulleCompteBeneficiaire: any;
        listeDevises: Array<MyWay.Model.Devise>;
        settingsMontant: myway.comInterdomaine.IMwMontantSettings;
        dateMinEffetVirement: Date;
        dateMaxEffetVirement: Date;
        estOuvertDateEffetVirement: boolean;
        estAfficheListeVirements: boolean;
        criteresVirement: Modeles.ICriteresVirement;
        estVerifie: boolean;
        tableauListeVirements: Modeles.IListeVirementsOptions;
        listeVirements: Array<any>;
        form: ng.IFormController;
        constantes: typeof Constantes;
        static $inject: string[];
        /**
         * Constructeur
         * @param mainService {MainService}
         */
        constructor(mainService: Services.MainService);
        init(): void;
        /**
         * Gestion de la sélection/désélection de la case à cocher "sans contrepartie"
         */
        toggleSansContrepartie(): void;
    }
}

declare module virements.Directives {
    /**
     * Directive caractéristiques d'un virement
     */
    function CaracteristiquesVirementDirective(): ng.IDirective;
}

declare module virements.Directives {
}

declare module virements.Directives {
    /**
     * Directive comprenant le bloc de recherche d'un virement
     */
    function CriteresRechercheDirective(): ng.IDirective;
}

declare module virements.Directives {
    /**
     * Contrôleur pour directive footer générique avec boutons annuler, action et valider
     */
    class FooterAnnulerActionValiderControleur {
        estAfficheValider: boolean;
        estAfficheAction: boolean;
        estAfficheAnnuler: boolean;
        titreBoutonValider: string;
        titreBoutonAction: string;
        titreBoutonAnnuler: string;
        estValidable: boolean;
        estActionnable: boolean;
        valider: Function;
        actionner: Function;
        annuler: Function;
    }
}

declare module virements.Directives {
    /**
     * Directive footer générique avec boutons annuler, action et valider
     */
    function FooterAnnulerActionValiderDirective(): ng.IDirective;
}

declare module virements.Directives {
}

declare module virements.Directives {
    function FooterGestionVirementsDirective(): ng.IDirective;
}

declare module virements.Directives {
}

declare module virements.Directives {
}

declare module virements.Directives {
}

declare module virements.Directives {
}
