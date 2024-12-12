
declare module instructionCredit {
    var app: any;
}

declare module instructionCredit.Constantes {
    class Donnees {
        /**
         * Crédit existant :  type du crédit
         */
        static listeTypeCredit: Array<Modele.ISelectboxNumber>;
        /**
         * Crédit existant : motif associé à un remboursement avec anticipation
         */
        static listeMotifRemboursementAnticipe: Array<Modele.ISelectbox>;
        /**
         * Type de phases d'un crédit
         */
        static codeTypePhaseAmortissement: string;
        static codeTypePhasePrefinancement: string;
        static codeTypePhaseDiffereAmortissement: string;
        static codeTypePhaseMobilite: string;
        static codeTypePhaseDiffereTotal: string;
        static listeTypePhase: Array<Modele.ISelectbox>;
        /**
         * Périodicité de recouvrement d'une phase d'un crédit
         */
        static listePeriodicitePhase: Array<Modele.ISelectbox>;
        /**
         * Bien à vendre : liste des types de vente
         * Attention les code sont en ASCII: 0-> 48; 1-> 49...
         */
        static listeObjetBienRevendu: Array<Modele.ISelectbox>;
        /**
         * Bien à vendre : liste des modes d'acquisition
         * Attention les code sont en ASCII: 1-> 49; 2-> 50...
         */
        static listeModesAcquisition: Array<Modele.ISelectboxNumber>;
        /**
         * Bien à vendre : liste des types de vente
         * Attention les code sont en ASCII: 0-> 48; 1-> 49...
         */
        static listeTypesDeVente: Array<Modele.ISelectboxNumber>;
    }
}

declare module instructionCredit.Constantes {
    class Ecrans {
        /**
         * Cas d'affichage des champs Montant
         */
        static casChampsMontant: Array<Modele.ChampMontant>;
        /**
         * Cas d'affichage des champs Informations complémentaires
         */
        static casChampsInfosCompl: Array<Modele.ChampInformationsComplementaires>;
        /**
         * Cas d'affichage des champs Montant et Informations Complémentaires
         */
        static affichageChamps: Array<Modele.ChampAssociation>;
    }
}

declare module instructionCredit.Constantes {
    class Editique {
        /**
         * Paramètres suplémentaires pour documents particuliers lors de l'édition
         */
        static paramsEditiqueProposition: Array<Object>;
        static paramsEditiquePtz: Array<Object>;
    }
}

declare module instructionCredit.Constantes {
    /**
     * Données contantes propres à l'emprunteur
     */
    class Emprunteur {
        static codeRoleCaution: string;
        static codeRoleEmprunteur: string;
        static typeDeChargeAtoutClic: string;
    }
}

declare module instructionCredit.Constantes {
    class EpargneLogement {
        /**
         *  Code famille des produits CEL et PEL
         */
        static codeFamilleCEL: string;
        static codeFamillePEL: string;
        /**
         * Types d'Epargne Logement
         */
        static listeTypesEpargneLogement: Array<Modele.ISelectbox>;
        /**
         * Epargne Logement : Types réservation de droit acquis
         */
        static listeReservationsDroitsAcquis: Array<Modele.ISelectbox>;
        /**
         * Epargne Logement : Types résidence  encours
         */
        static listeResidencesEncours: Array<Modele.ISelectboxNumber>;
    }
}

declare module instructionCredit.Constantes {
    /**
     * Données utilisées dans la navigation
     */
    module Navigation {
        class PageEnum extends MyWay.Services.StringEnum {
            static ROUTEUR: PageEnum;
            static CLIENT: PageEnum;
            static PROJET: PageEnum;
            static PROPOSITIONS: PageEnum;
            static EMISSIONDOCUMENTS: PageEnum;
            static BLOCNOTE: PageEnum;
            static TRANSFERTNEO: PageEnum;
            static CREDIT_DETAIL: PageEnum;
            static CREDIT_EPARGNE_LOGEMENT_DETAIL: PageEnum;
            static SYNTHESE: PageEnum;
            static FRAIS_ACCESSOIRES: PageEnum;
        }
        /**
         *  Sections de la navigation principale
         */
        class SectionNavigationEnum extends MyWay.Services.StringEnum {
            static CLIENT_SECTION_1: SectionNavigationEnum;
            static CLIENT_SECTION_2: SectionNavigationEnum;
            static CLIENT_SECTION_3: SectionNavigationEnum;
            static CLIENT_SECTION_4: SectionNavigationEnum;
            static PROJET_SECTION_1: SectionNavigationEnum;
            static PROJET_SECTION_2: SectionNavigationEnum;
            static PROJET_SECTION_3: SectionNavigationEnum;
            static PROPOSITIONS_SECTION_1: SectionNavigationEnum;
            static PROPOSITIONS_SECTION_2: SectionNavigationEnum;
        }
        class SectionEnum extends MyWay.Services.StringEnum {
            static CLIENT: SectionEnum;
            static PROJET: SectionEnum;
            static PROPOSITIONS: SectionEnum;
            static fromKey<T extends MyWay.Services.StringEnum>(key: string): T;
        }
    }
}

declare module instructionCredit.Constantes {
    class Parametrage {
        static valeursFiltresAtoutClic: Array<string>;
        static rubriquesFiltreSmac: Array<string>;
        static valeursFiltresSmac: Array<string>;
        static codeSuccesCreationSmac: string;
        static codeSuccesConsultationSmac: string;
        static codeConstanteTypeAssiette: string;
    }
}

declare module instructionCredit.Constantes {
    /**
     * Gestion de la personnalisation pour l’utilisateur
     */
    class PreferencesUtilisateur {
        static modeCalculLibelle: string;
        static modeRestitutionLibelle: string;
    }
}

declare module instructionCredit.Constantes {
    /**
     * Données pour les services
     */
    class Service {
        static versionWsdl: string;
        static codeApplication: string;
        static restParametre: string;
        static restConsultation: string;
        static restCalcul: string;
        static restEntiteTitulaire: string;
        static restRisqueClient: string;
        static restTiers: string;
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit.Enum {
    /**
     * Dans le cas d'un reste à financer, selction du mode d'affectation
     */
    enum AffectationResteAFinancer {
        Totalement,
        ParRepartition,
    }
}

declare module instructionCredit.Enum {
    enum CreditDuree {
        Maxi,
        Fixe,
    }
}

declare module instructionCredit.Enum {
    enum CreditEpargneLogementConcours {
        Interne,
        Externe,
    }
}

declare module instructionCredit.Enum {
    enum CreditEpargneLogementObligatoire {
        Oui,
        Non,
    }
}

declare module instructionCredit.Enum {
    enum CreditModeOptimisation {
        Total,
        Partiel,
    }
}

declare module instructionCredit.Enum {
    /**
     *  Cette rubrique permet d'indiquer le type de critère d'optimisation défini pour le calcul
     */
    enum CritereOptim {
        Echeance,
        Endettement,
        Duree,
        Palier,
        NonRenseigne,
    }
}

declare module instructionCredit.Enum {
    enum FeuTricolore {
        Vert,
        Orange,
        Rouge,
    }
}

declare module instructionCredit.Enum {
    /**
     *  Cette rubrique permet d'indiquer la vue en cours dans une popin à étape
     */
    enum PopinEtape {
        Une = 0,
        Deux = 1,
        Trois = 2,
    }
}

declare module instructionCredit.Enum {
    /**
     *  Contient les possibilités pour la personnalisation
     */
    class ModeCalcul extends MyWay.Services.StringEnum {
        static OPTIMISE: ModeCalcul;
        static MANUEL: ModeCalcul;
    }
    class ModeRestitution extends MyWay.Services.StringEnum {
        static GRAPHIQUE: ModeRestitution;
        static TABLEAU: ModeRestitution;
    }
}

declare module instructionCredit.Enum {
    /**
     * Dans le cas du RAF lors de l'affectation totale, il ets nécessaire d econnaitre le type de l'élément selectionné
     */
    enum RafTypeElement {
        Apport = 0,
        CreditInterne = 1,
        CreditComplementaire = 2,
    }
}

declare module instructionCredit.Enum {
    class TypeControleDossier {
        code: number;
        libelle: string;
        constructor(code: number, libelle: string);
        toString(): string;
        static CONTROLE_DOSSIER: TypeControleDossier;
        static ALERTE_DOSSIER: TypeControleDossier;
        static CONTROLE_PIECES_JUSTIFICATIVES: TypeControleDossier;
        static CONTROLE_PIECES_AGENCE: TypeControleDossier;
        static CONTROLE_MANUEL: TypeControleDossier;
        static CONTROLE_MODALITES: TypeControleDossier;
        static CONTROLE_EMPRUNTEUR: TypeControleDossier;
        static CONTROLE_CAUTION: TypeControleDossier;
        static CONTROLE_PERSONNE: TypeControleDossier;
        static CONTROLE_PROJET: TypeControleDossier;
        static CONTROLE_PLAN_FINANCEMENT: TypeControleDossier;
        static CONTROLE_ASSURANCES: TypeControleDossier;
        static CONTROLE_GARANTIES: TypeControleDossier;
        static CONTROLE_CREDITS_EXTERNES: TypeControleDossier;
        static CONTROLE_CREDITS_INTERNES: TypeControleDossier;
        static getTypeControleDossierByCode(code: number): Enum.TypeControleDossier;
    }
}

declare module instructionCredit {
    class AjoutChargeControleur {
        private clientService;
        static $inject: string[];
        charge: Modele.IChargePersonne;
        chargeHorsEtablissement: boolean;
        affectations: Array<Modele.PersonneAffectation>;
        personneAffectee: Modele.PersonneAffectation;
        typeCharge: Modele.TypeCharge;
        annuel: number;
        statut: Modele.IStatutRessource;
        typesCharge: Array<Modele.TypeCharge>;
        typesChargeAjoutable: Array<Modele.TypeCharge>;
        status: Array<Modele.IStatutRessource>;
        statusEtablissement: Array<Modele.IStatutRessource>;
        statusHorsEtablissement: Array<Modele.IStatutRessource>;
        erreurs: Array<string>;
        /**
         * Constructeur
         */
        constructor(clientService: Service.ClientService);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutCharge(): void;
        affectationsGroupes(item: Modele.PersonneAffectation): string;
        calculMontantAnnuel(): void;
        private typeParCode(code);
        private statutParCode(code);
        private selectAffectation();
        changeTypeCharge(): void;
        changeAffectation(idws: string): void;
        statutCharge(): void;
    }
}

declare module instructionCredit {
    class AjoutChargeCreditExistantControleur {
        chargeCreditExistant: Modele.CreditExistant;
        usageLocatif: boolean;
        constructor();
        /**
         *  'P' : Usage personnel           -> 80
         *  'C' : Caution                   -> 67
         *  'L' : Investissement locatif    -> 76
         *  ' ' : Non significatif          -> 32
         */
        majUsageLocatif(): void;
    }
}

declare module instructionCredit {
    class AjoutCompteControleur {
        private clientService;
        static $inject: string[];
        compte: Modele.IComptePersonne;
        affectations: Array<Object>;
        personneAffectee: Object;
        isComptePro: boolean;
        typeCompte: string;
        moyenPaiement: boolean;
        dateOuverture: Date;
        /**
         * Constructeur
         */
        constructor(clientService: Service.ClientService);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutCompte(): void;
    }
}

declare module instructionCredit {
    class AjoutCompteHorsCeControleur {
        private clientService;
        static $inject: string[];
        compte: instructionCredit.Modele.IComptePersonne;
        affectations: Array<Object>;
        personneAffectee: Object;
        comptesHorsCE: Array<instructionCredit.Modele.IComptePersonne>;
        typesFonctionnementCompte: Array<instructionCredit.Modele.ISelectbox>;
        typeFonctionnementCompte: instructionCredit.Modele.ISelectbox;
        erreurs: Array<string>;
        openedDateOuverture: boolean;
        /**
         * Constructeur
         */
        constructor(clientService: instructionCredit.Service.ClientService);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutCompteHorsCe(): void;
        affichePersonnes(item: Object): boolean;
        affectationsGroupes(item: Modele.PersonneAffectation): string;
        private selectAffectation();
        changeAffectation(idws: string): void;
        changeTypeCompte(): void;
    }
}

declare module instructionCredit {
    class AjoutEpargneHorsCeControleur {
        private clientService;
        private serviceAgentExtended;
        static $inject: string[];
        epargne: instructionCredit.Modele.IEpargnePersonne;
        affectations: Array<Object>;
        personneAffectee: Object;
        apport: number;
        typesEpargnes: Array<instructionCredit.Modele.IAdrRisqueEpargne>;
        typeEpargne: instructionCredit.Modele.IAdrRisqueEpargne;
        erreurs: Array<string>;
        /**
         * Constructeur
         */
        constructor(clientService: instructionCredit.Service.ClientService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutEpargneHorsCe(): void;
        affichePersonnes(item: Object): boolean;
        affectationsGroupes(item: Modele.PersonneAffectation): string;
        calculMontantEpargneApreOper(): void;
        private typeParCode(code);
        private selectAffectation();
        changeTypeEpargne(): void;
        changeAffectation(idws: string): void;
    }
}

declare module instructionCredit {
    class AjoutPretControleur {
        proposition: instructionCredit.Modele.Proposition;
        pret: instructionCredit.Modele.Pret;
        echeance: number;
        capital: number;
        typePret: string;
        taux: number;
        duree: number;
        ajouterPret: boolean;
        /**
         * Permet de construire le composant de gestion des prets internes et externes
         */
        constructor();
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutPret(): void;
        /**
         * Permet de créer le prêt à l'aide des données saisies dans le formulaire
         */
        creerPret(): void;
    }
}

declare module instructionCredit {
    class AjoutRevenuControleur {
        private clientService;
        static $inject: string[];
        revenu: instructionCredit.Modele.IRevenuPersonne;
        revenuHorsEtablissement: boolean;
        affectations: Array<Object>;
        personneAffectee: Object;
        typeRevenu: instructionCredit.Modele.TypeRevenu;
        annuel: number;
        statut: instructionCredit.Modele.IStatutRessource;
        typesRevenu: Array<instructionCredit.Modele.TypeRevenu>;
        status: Array<instructionCredit.Modele.IStatutRessource>;
        statusEtablissement: Array<instructionCredit.Modele.IStatutRessource>;
        statusHorsEtablissement: Array<instructionCredit.Modele.IStatutRessource>;
        erreurs: Array<string>;
        /**
         * Constructeur
         */
        constructor(clientService: instructionCredit.Service.ClientService);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutRevenu(): void;
        affectationsGroupes(item: Modele.PersonneAffectation): string;
        private selectAffectation();
        changeAffectation(idws: string): void;
        calculMontantAnnuel(): void;
        private typeParCode(code);
        private statutParCode(code);
        changerTypeRevenu(): void;
        statutRevenu(): void;
    }
}

declare module instructionCredit {
    class ArborescenceControleur {
        private $scope;
        static $inject: string[];
        static evenementCliqueArborecence: string;
        liste: Array<instructionCredit.Modele.IArborescence>;
        private largeurTuile;
        private hauteurTuile;
        private margeTuile;
        private margeTuileHauteur;
        private margeTuileLargeur;
        private liseret;
        private margeTexte;
        private tailleTitre;
        private interligneTexte;
        private tailleTexte;
        private longueurTrait;
        private positionLargeur1;
        private positionLargeur2;
        private positionLargeur3;
        private positionHauteur1;
        private positionHauteur2;
        private positionHauteur3;
        private positionTexte;
        private positionInitiale1;
        private positionInitiale2;
        private finTraitNiveau3;
        private finTraitNiveau2;
        selection: instructionCredit.Modele.IArborescence;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         */
        constructor($scope: ng.IScope);
        /**
         *
         */
        creationTuile(positionLargeur: number, positionHauteur: number, objet: instructionCredit.Modele.IArborescence): void;
        creationLignePrecedente(positionLargeur: number, positionHauteur: number): void;
        creationLigneSuivante(positionLargeur: number, positionHauteur: number): void;
        creationLigneVerticale(positionLargeur: number, positionHauteur: number, positionInitiale: number): void;
    }
}

declare module instructionCredit {
    class BlocAdresseControleur {
        private $scope;
        static $inject: string[];
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        adresseDetaillee: boolean;
        constructor($scope: ng.IScope);
    }
}

declare module instructionCredit {
    class BlocNoteControleur {
        private $scope;
        private serviceAgentExtended;
        private navigationService;
        private initialisationService;
        static $inject: string[];
        /**
         * Contruction de la page Bloc NOte
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param NavigationService: MyWay.UI.INavigationService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, initialisationService: instructionCredit.Service.InitialisationService);
    }
}

declare module instructionCredit {
    class EmissionDocumentsControleur implements MyWay.UI.ISelectionChangeHandler {
        private $q;
        private serviceAgentExtended;
        private navigationService;
        private modaleFactory;
        private initialisationService;
        private financementService;
        private controleDossierService;
        static $inject: string[];
        propositionsData: Array<Modele.IPlanFinancementSchema>;
        tableauPropositions: MyWay.UI.ImwTableOptions;
        documentsData: Array<Modele.IInfoDocument>;
        tableauDocuments: MyWay.UI.ImwTableOptions;
        documentsSelectionnes: Array<Modele.IInfoDocument>;
        private _idwsPropositionSelectionne;
        anomaliesBloquantes: Array<Object>;
        anomaliesNonBloquantes: Array<Object>;
        loader: boolean;
        afficherTableauDocuments: boolean;
        impressionDocumentsAutorise: boolean;
        private promisesEditions;
        colonnePropositionsLibelle: MyWay.UI.ImwTableColumnOptions;
        colonnePropositionsMontant: MyWay.UI.ImwTableColumnOptions;
        colonnePropositionsEcheance: MyWay.UI.ImwTableColumnOptions;
        colonnePropositionsDuree: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsCode: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsLibelle: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreEmpr: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreNotaire: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreDossier: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreCaution: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreAutre: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreTotal: MyWay.UI.ImwTableColumnOptions;
        /**
         * Contruction de la page Emission de documents
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, modaleFactory: instructionCredit.Service.ModaleFactory, initialisationService: instructionCredit.Service.InitialisationService, financementService: instructionCredit.Service.FinancementService, controleDossierService: Service.ControleDossierService);
        onSelectionChange(selectedObject: Object): void;
        visualiserPropositions(listeInformationDocument: Array<Modele.IInfoDocument>): ng.IPromise<void>;
        /**
         * Action principale de la page : impression des documents
         */
        visualiserDocuments(): void;
        /**
         * Permet d'ajouter l'appel au document dans la liste des promesses
         * @Param: Document à imprimer
         * @Param: identifiant de l'élémént à ajouter (credit, plan...)
         */
        private ajouterPromesse(document, identifiant, paramsEditiques);
        /**
         *  Vérifie l'éligibilité du dossier à changer
         *  Si c'est le cas les propositions ne sont plus correctes
         */
        private initialisation();
        private creationTableauPlans();
        private creationTableauDocuments();
        /**
         *  Vérifie l'éligibilité du dossier à changer
         *  Si c'est le cas les propositions ne sont plus correctes
         */
        private isEligibiliteChange();
        /**
         *  Eligibilité du dossier : vérifie la correspondance du profil PTZ
         */
        private isEligibiliteProfilPtzModifie(dataResultatEligibilite);
        /**
         * Vérifie le dossier + charge la dernière version si souhaité
         * @param {boolean} chargerDossier
         * @returns
         */
        private controlerEtChargerDossier(chargerDossier);
    }
}

declare module instructionCredit {
    class DetailPalierContraintControleur implements MyWay.UI.ITuileHandler {
        private $q;
        private financementService;
        private initPaliersialisationService;
        private modalService;
        private modaleFactory;
        static $inject: string[];
        listePaliersContraints: Array<Modele.PalierContraint>;
        loader: boolean;
        loaderCriteresRemboursement: boolean;
        palierContraintTraite: Modele.PalierContraint;
        palierContraintTraiteOld: Modele.PalierContraint;
        titreEditionPalier: string;
        inputPalierDateFin: Date;
        minDatePalierDateFin: Date;
        openPalierDateFin: boolean;
        isPalierMaj: boolean;
        configTuileAvecMarquage: MyWay.UI.iMwConfigTuile;
        listeErreurs: Array<Modele.ErreurFormulaire>;
        hideBtnAjoutPalier: boolean;
        /**
         * Contruction du composant
         */
        constructor($q: ng.IQService, financementService: Service.FinancementService, initPaliersialisationService: Service.InitialisationService, modalService: MyWay.UI.IModalService, modaleFactory: Service.ModaleFactory);
        /**
         * Action effectuée lorsqu'il y a un clic sur une Tuile --> maj d'un palier souhaité
         */
        onTuileClick(palierSelect: Modele.PalierContraint): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        /**
         * Action sur le bouton ajouter
         */
        btnTuileAjouterPalier(): void;
        /**
         * Le champ « Pendant une durée » et « Jusqu'au » sont interdépendant.
         * Une modification du champ « Pendant une durée», entraine la mise à jour du champ « jusqu’au »
         */
        setDureePalier(): void;
        /**
         * Le champ « Pendant une durée » et « Jusqu'au » sont interdépendant.
         * Une modification du champ « jusqu’au », entraine la mise à jour du champ « Pendant une durée »
         */
        setPalierDateFin(): void;
        /**
         * Gestion de la popin de confirmation d'annulation
         */
        private gestionPopinConfirmationAnnulation();
        /**
         * Contrôle si des modifications ont été apportées au palier
         */
        private controleModificationPalier();
        /**
         * Annulation
         */
        btnAnnuler(): void;
        /**
         * Suppression du palier
         */
        btnSupprimerPalier(): void;
        /**
         * Enregistrement du palier
         */
        btnEnregistrerPalier(): void;
        /**
         * Donne le curseur à l'élement souhaité
         * @param {string} ancre
         */
        goToAnchor(ancre: string): void;
        /**
         * Initialise l'affichage
         */
        private initPaliers();
        /**
         * Gère la gestion de l'affichage du bouton d'ajout d'un palier : si le dernier palier est présent, alors il est caché
         */
        private gestionAffichageBtnAjoutPalier();
        /**
         * Règle la date de fin sur le dernier jour du mois
         */
        private ajustementDateFinPalier(majDepuisDuree);
        /**
         * Vérifie l'authenticité des données
         * @returns True si des erreurs sont présentent
         */
        private verificationDonnees();
        /**
         * Pour l'ajout, la modification ou la suppression l'appel est le même
         */
        private majDonneesPaliers(paliersMaj);
    }
}

declare module instructionCredit {
    class FormulaireClientControleur implements MyWay.UI.ITuileHandler {
        private $scope;
        private serviceAgentExtended;
        private navigationService;
        private modalService;
        private clientService;
        private calculService;
        private initialisationService;
        private mwgcRechercherPersonneService;
        private $q;
        private $location;
        private mwsfAdresseService;
        private projetService;
        private $filter;
        private financementService;
        private controleDossierService;
        private agentExterneService;
        private modaleFactory;
        private authentificationService;
        private navigationInterneService;
        private contratEpargneLogementService;
        private mwNotificationService;
        static $inject: string[];
        private _elementsEmprunteur;
        private _listeIdws;
        private _dossierSchema;
        personneSelectionne: Modele.IPersonne;
        categorieEmprunteur: Modele.CategorieEmprunteur;
        situationFamilialeEmprunteur: Modele.SituationFamilialeEmprunteur;
        statutOccupationLogementEmprunteur: Modele.ISelectbox;
        affichageAdresse: myway.comAdresseDqe.Adresse;
        affPersLieesEmprunteur: boolean;
        paramsResteAVivre: Modele.IParamsResteAVivre[];
        employeurCommun: boolean;
        codeIntituleEpargne: string[];
        totalEpargneUtilise: number;
        totalEpargneContractuelle: number;
        totalEpargneLiquide: number;
        partEpargneLogement: number;
        syntheseEpargne: boolean;
        libellesTypeCharge: Object;
        libellesTypeRevenu: Object;
        momentVerite: string;
        filtreClientRevenus: Object;
        typesTransport: Modele.ISelectbox[];
        categoriesSocioPro: Modele.ICatSocioProfessionnelle[];
        categoriesEmprunteur: Modele.CategorieEmprunteur[];
        situationsFamilialesEmprunteur: Modele.SituationFamilialeEmprunteur[];
        statutsOccupationLogementEmprunteur: Modele.ISelectbox[];
        typesContrat: Modele.ISelectbox[];
        loader: boolean;
        chargementRessourcesChargesEnCours: boolean;
        chargementSurfaceFinanciereEnCours: boolean;
        private identifiantPersonne;
        listePrimoAccedant: Modele.ISelectboxNumber[];
        codeDerogationPtz: Modele.ISelectboxNumber;
        numCarte: Object;
        clientPhysique: MyWay.Model.Client;
        feuTricolore: string;
        etiquetteTuile: string;
        configTuile: MyWay.UI.iMwConfigTuile;
        private nombrePersonnesChargees;
        private nombreRevenusFiscauxCharges;
        private nombreChargesChargees;
        private nombreRessourcesChargees;
        private nombreComptesCharges;
        private nombreEpargnesChargees;
        isCreationDossier: boolean;
        isClientSelectionne: boolean;
        private infobulleRevenusEtCharges;
        private infobulleRfr;
        /**
         * Contruction du formulaire client
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param NavigationService: MyWay.UI.INavigationService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, modalService: MyWay.UI.IModalService, clientService: Service.ClientService, calculService: Service.CalculService, initialisationService: Service.InitialisationService, mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService, $q: ng.IQService, $location: ng.ILocationService, mwsfAdresseService: myway.comAdresseDqe.AdresseService, projetService: Service.ProjetService, $filter: ng.IFilterService, financementService: Service.FinancementService, controleDossierService: Service.ControleDossierService, agentExterneService: Service.AgentExterneService, modaleFactory: Service.ModaleFactory, authentificationService: Service.AuthentificationService, navigationInterneService: Service.NavigationInterneService, contratEpargneLogementService: Service.ContratEpargneLogementService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         *  Initialise la page Client
         *  Effectue les appels pour mise en session et les contrôles
         */
        private initialisationPageClient();
        /**
         *  Vérifie les mises à jours nécessaires et contrôle si la page peut être chargée
         */
        private verificationMajNecessairesEtControle();
        /**
         *  Chargement du dossier et de tous les éléments du client
         */
        private chargementInitial();
        /**
         *  Charge les données catalogue dès le départ en asycnhone pour gain de performance
         *  Uniquement les données utiles à l'initialisation des données
         */
        private chargementDonneesSession();
        /**
         *  Charge les données TypeCharge
         */
        private initTypeCharge();
        /**
         *  Charge les données TypeRevenu
         */
        private initTypeRevenu();
        onTuileClick(objetTuile: any): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        chargerPersonne(indexRecursif: number, idsPersonne: string[]): ng.IPromise<void>;
        private chargerRevenuFiscal(id);
        private chargerCharge(id);
        private chargerRevenu(id);
        /**
         * Chargement des comptes CE et Hors CE
         * Valeurs possibles pour CE et Hors CE : 'C' : En caisse d'epargne / 'H' : hors caisse d'epargne
         */
        private chargerCompte(id, comptePro);
        /**
         * Chargement des famille d'épargne CE et Hors CE
         * Valeurs possibles pour CE et Hors CE : 'C' : En caisse d'epargne / 'H' : hors caisse d'epargne
         */
        private chargerEpargne(id);
        /**
         * Chargement des contrats Epargne Logement
         */
        private chargerContratEpargneLogement(id);
        /**
         * Permet de calculer les valeurs pour "Détail de la synthèse de l'épargne"
         */
        private calculDetailsSyntheseEpargne();
        private calculValeursEpargne(epargne);
        /**
         * Contrôle la présence d'un emprunteur sur le dossier
         */
        private gererPresenceEmprunteur(definirEmprunteur, listeIdPersonne);
        /**
         *  Recharge l'emprunteur et mets à jour ses données IHM
         *  definirEmprunteur : si true alors on vient de le définir, pas besoin d'effectuer une maj
         */
        private rafraichirDonneesEmprunteur(definirEmprunteur, forcerGetEmprunteur);
        /**
         *  Une fois tous les chargements et initialisation effectués, gère les données
         */
        private initDetailsEmprunteur(forcerGetEndettement);
        /**
         *  Mets à jour le dossier traité et récupère l'ensemble des éléments si besoin
         */
        private getEtMajDossier(forcerRecuperationElements);
        /**
         *  Récupère l'ensemble des élements composant l'emprunteur
         *  Puis initialisation des éléments dans l'IHM
         */
        private getElementsEmprunteur();
        /**
         *  Gère les attributs dépendant de l'emprunteur
         */
        private initInfosEmprunteur();
        /**
         * Alimentation des listes déroulantes et selection par défaut des attributs de l'emprunteur
         */
        private alimentationListesEmprunteur();
        /**
         *  Calcul de l'endettement, on récupère la donnée uniquement si l'emprunteur est modifié
         *  Sinon utilisation de la donnée déjà présente
         */
        private calculEndettement(forcerGetEndettement);
        /**
         * Chargement des données des sections revenu et charge et surface financière et droits Epargne Logement
         */
        private initialisationRubriques();
        /**
         * Popin recherche d'une personne physique
         */
        rechercherPersonnePhysique(): void;
        /**
         * Débranchement création prospect
         */
        private debranchementCreationProspect(recherchePersonneRetour);
        /**
         * Ajout ou suppression d'une personne du client bancaire
         */
        private ajoutOuSuppressionPersonne(ajout);
        /**
         * Stockage des revenues et charges par personne
         */
        private stockageRevenusEtChargesParPersonne(listePersonnePhysiqueMaj, anciensRevenusParPersonne, anciennesChargesParPersonne, listeIdPersonneSI, ajoutPersonne);
        /**
         * Maj emprunteur (ajout ou suppression d'une personne)
         */
        majEmprunteurDepuisListePersonne(listePersonnePhysiqueMaj: Modele.PersonnePhysiqueMaj[], anciensRevenusParPersonne: Modele.RevenuPersonneMaj[][], anciennesChargesParPersonne: Modele.ChargePersonneMaj[][], appelClient: boolean): void;
        /**
         * Rechargement du dossier
         */
        private rechargementDossier();
        /**
         * Affiche la popin de selection du client bancaire
         */
        private popinClientsBancaires();
        /**
         * Si la donnée n'est pas conforme, maj de l'emprunteur
         */
        private correctionDonneesEmprunteur(emprunteur);
        /**
         * Suppression d'un personne phsique du client bancaire
         */
        suppressionPersonnePhysique(personne: Modele.IPersonne): void;
        /**
         * Affiche le composant adresse de la personne physique selectionnée
         */
        private afficheAdressePersonnePhysique(personne);
        /**
         * Popin situation banque de france
         */
        popinSituationBdf(personne: Modele.IPersonne): void;
        /**
         * Affiche la popin de saisi des revenus fiscaux
         */
        popinRevenuFiscal(revenuFiscal: Modele.IRevenuFiscalPersonne): void;
        /**
         * Suppression d'un revenu fiscal
         */
        private supprimerRevenuFiscal(index, confirm?);
        /**
         * Création d'un revenu fiscal
         */
        private creerRevenuFiscal(revenuFiscal);
        /**
         * Mets à jour le revenu fiscal du ménage dans l'objet emprunteur (RFR pour FI14)
         */
        private majRevenuFiscalMenage(montantRevnMeng);
        /**
         * Affiche la popin de saisi des revenus
         */
        popinRevenu(revenu: Modele.IRevenuPersonne): void;
        /**
         *  Effectue la somme des revenus
         */
        sommeRevenus(revenus: Modele.IRevenuPersonne[]): number;
        /**
         * Suppression d'un revenu
         */
        supprimerRevenu(index: number, confirm?: boolean): void;
        /**
         * Création d'un revenu
         */
        private creerRevenu(revenu, revenuMaj);
        /**
         * Affiche la popin de saisi des charges
         */
        popinCharge(charge: Modele.IChargePersonne): void;
        /**
         * Affiche la popin de saisi des charges de type crédit existant
         */
        popinChargeCreditExistant(charge: Modele.IChargePersonne): void;
        /**
         *  Mets à jour une charge de type Personne
         */
        private majCharge(chargeModifiee, chargeMaj);
        sommeCharges(charges: Modele.IChargePersonne[]): number;
        /**
         * Suppression d'une charge
         */
        private supprimerCharge(index, confirm?);
        /**
         * Création d'une charge
         */
        private creerCharge(charge, chargeMaj);
        /**
         * Affiche la popin de saisi des Comptes CE
         */
        popinCompteCE(compte: Modele.IComptePersonne): void;
        /**
         * Affiche la popin de saisi des Comptes Hors CE
         */
        popinCompteHorsCE(compte: Modele.IComptePersonne): void;
        /**
         * Suppression d'un compte hors Ce
         */
        supprimerCompteHorsCe(index: number, confirm?: boolean): ng.IPromise<boolean>;
        /**
         * Création d'un compte hors Ce
         */
        private creerCompteHorsCe(compte, compteMaj);
        /**
         * Affiche la popin de saisi des epargnes hors CE
         */
        popinEpargneHorsCE(epargne: Modele.IEpargnePersonne): void;
        /**
         * Suppression d'une epargne hors Ce
         */
        supprimerEpargneHorsCe(index: number, confirm?: boolean): ng.IPromise<boolean>;
        /**
         * Création d'une epargne hors Ce
         */
        private creerEpargneHorsCe(epargne, epargneMaj);
        /**
         * Affiche la popin de saisi des contrats Epargne Logement
         */
        popinContratEpargneLogement(modeCreation: boolean, contratEL: Modele.IContratEpargneLogement): void;
        /**
         * Suppression d'un contrat Epargne Logement
         */
        supprimerContratEpargneLogement(indexForContrats: number): ng.IPromise<void>;
        /**
         * Modification d'un contrat Epargne Logement
         */
        private restorationContratEpargneLogement(ancienContrat);
        /**
         * Mise à jour des tranches Epargne Logement
         */
        majTranchesEpargneLogement(indexRecursivite: number, tranchesEL: Modele.TrancheEL[]): ng.IPromise<void>;
        infobulleSyntheseFinanciere: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        afficherCasesAgeEnfant(): void;
        changePrimoAccedant(): void;
        calculNombrePersCompMenage(): void;
        montantTuileEpargeCe(epargne: Modele.IEpargnePersonne): string;
        changePersonneCharge(): void;
        nombreNonNull(ngModel: any): number;
        /**
         * Récupere la liste des idws
         */
        getListeIdws(dossierSchema: Modele.IDossierSchema, listeIdws: string[]): void;
        /**
         *  Mets à jour la donnée Catégorie de l'emprunteur
         */
        enregistrerCategorieEmprunteur(): void;
        /**
         *  Mets à jour le statut d'occupation du logement actuel de l'emprunteur
         */
        enregistrerStatutOccupationLogEmp(): void;
        /**
         *  Mets à jour des attributs d'un objet
         */
        private majDonneesPartiellesObjet(identifiantClasse, objetMaj);
        majClient(personne: Modele.IPersonne): void;
        getTitreBandeauPersonne(personne: Modele.IPersonne): string;
        /**
         *  Création du particulier en PersonnePhysiqueMaj Neo
         */
        private genererPersonnePhysiqueMaj(detailParticulier);
        /**
         * Si la donnée existe, c'est un retour de connaissance client
         * Il faut savoir si c'est un ajout de prospect ou juste une simple modification de l'emprunteur
         * @returns s'il faut continuer le traitement ou non
         */
        private gererRetourConnaissanceClient();
        /**
         * Vérifie le dossier + charge la dernière version si souhaité
         * @param {boolean} chargerDossier
         * @returns
         */
        private controlerEtChargerDossier(chargerDossier);
        /**
         * Rafraichissement des contrat
         */
        rafraichissementContrats(): void;
    }
}

declare module instructionCredit {
    class FormulaireFinancementControleur implements MyWay.UI.ISelectionChangeHandler, MyWay.UI.ITuileHandler {
        private $scope;
        private $window;
        private serviceAgentExtended;
        private financementService;
        private projetService;
        private formulaireClientService;
        private initialisationService;
        private modalService;
        private calculService;
        private $q;
        private modaleFactory;
        private $location;
        private navigationService;
        private $document;
        private controleDossierService;
        private $filter;
        private navigationInterneService;
        private personnalisationService;
        private creditInterneService;
        private mwNotificationService;
        private garantieService;
        private assuranceService;
        private resteAFinancerService;
        private authentificationService;
        private fraisAccessoiresService;
        static $inject: string[];
        private _compteCourant;
        private _traitementEligibiliteEffectue;
        private _eligibilieChargee;
        private _chargementEmprunteurEffectue;
        listeModalites: Array<Modele.ISelectbox>;
        private nombreChargesRessourcesChargees;
        focusCriteresRemboursement: boolean;
        private libellePersonnes;
        dossierSchema: Modele.IDossierSchema;
        listePersonnes: Array<Modele.IPersonne>;
        listeProduitsStandard: Array<Modele.IProduitsAutorises>;
        listePaliersContraints: Array<Modele.PalierContraint>;
        listePhases: Array<any>;
        creditInterneSelectTA: Object;
        listeCreditsInterneTA: Array<Object>;
        sommeCreditsExternes: number;
        listeCreditsExistant: Array<Modele.ICreditExistant>;
        creditComplementaireActive: boolean;
        listeCouverturesCredits: Array<Modele.ICouvertureCredit>;
        listeTypeAssurance: Array<string>;
        tableauGaranties: MyWay.UI.ImwTableOptions;
        listeGaranties: Array<Modele.IGarantie>;
        listeNatureGarantie: Array<Modele.INatureGarantie>;
        listeConventionsGarantie: Array<Modele.IConventionGarantie>;
        listeConventionsGarantieParIdProduit: Array<Array<Modele.IConventionGarantie>>;
        idGarantieSelectionnee: string;
        dataTableauGarantie: Array<any>;
        tableauAssurances: MyWay.UI.ImwTableOptions;
        listeAssurances: Array<Modele.IAssurance>;
        idAssuranceSelectionnee: string;
        dataTableauAssurance: Array<any>;
        creditsLoader: boolean;
        loaderCriteresRemboursement: boolean;
        chargementLongEnCours: boolean;
        private erreursFonctionnelles;
        etiquetteTuile: string;
        configTuileAvecMarquage: MyWay.UI.iMwConfigTuile;
        configTuile: MyWay.UI.iMwConfigTuile;
        activationSmac: boolean;
        resultatSmac: Modele.IResultatSmac;
        revenusParPersonne: Array<Array<Modele.IRevenuPersonne>>;
        private nbreMajOk;
        private changementTypeEcoPtz;
        infobulleCreditsExistant: Object;
        /**
         * Contruction du formulaire
         * @param $scope: ng.IScope
         * @param propositionService: Service.PropositionService
         */
        constructor($scope: ng.IScope, $window: ng.IWindowService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, financementService: Service.FinancementService, projetService: Service.ProjetService, formulaireClientService: Service.ClientService, initialisationService: Service.InitialisationService, modalService: MyWay.UI.IModalService, calculService: Service.CalculService, $q: ng.IQService, modaleFactory: instructionCredit.Service.ModaleFactory, $location: ng.ILocationService, navigationService: MyWay.UI.INavigationService, $document: ng.IDocumentService, controleDossierService: Service.ControleDossierService, $filter: any, navigationInterneService: Service.NavigationInterneService, personnalisationService: Service.PersonnalisationService, creditInterneService: Service.CreditInterneService, mwNotificationService: MyWay.UI.IMwNotificationService, garantieService: Service.GarantieService, assuranceService: Service.AssuranceService, resteAFinancerService: Service.ResteAFinancerService, authentificationService: Service.AuthentificationService, fraisAccessoiresService: Service.FraisAccessoiresService);
        /**
         *  Initialise la page Financement
         */
        private initialisationPageFinancement();
        /**
         *  Vérifie les mises à jours nécessaires et contrôle si la page peut être chargée
         */
        private verificationMajNecessaires();
        /**
         *  Initialise les Watcher de la vue
         */
        private initWatchers();
        /**
         *  Charge les données catalogue dès le départ en asycnhone pour gain de performance
         *  Uniquement les données utiles à l'initialisation des données
         */
        private chargementDonneesSession();
        /**
         *  Réinitialisation des modalités de remboursement
         */
        changerModalitesRemboursement(): void;
        /**
         * Chargement des plans de financement
         * Si demande de bascule, pas besoin de charger les éléments de nouveau
         */
        private chargementInitial(chargerElements?, optim?);
        /**
         *  Charge l'emprunteur du dossier et calcule sa capacité de remboursement
         */
        private chargerEmprunteur();
        /**
         *  Vérifie l'éligibilité du dossier et agit en conséquence
         */
        private gererEligibilite();
        /**
         *  Eligibilité du dossier : vérifie la correspondance du profil PTZ
         */
        private isEligibiliteProfilPtzModifie(dataResultatEligibilite);
        /**
         *  S'il existe, récupère le crédit PTZ existant dans le plan de financement traité actuellement
         */
        private getCreditPtz();
        /**
         * Action effectuée lorsqu'il y a un clic sur une Tuile
         */
        onTuileClick(objetTuile: any): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        /**
         * Construction du tableau de garantie
         */
        constructionTableauGaranties(): void;
        /**
         * Construction du tableau d'assurance
         */
        constructionTableauAssurances(): void;
        /**
         * Fonction de vérification si il s'agit d'un compte courant
         */
        verificationCompteCourant(): void;
        /**
         * Action après sélection dans le tableau
         */
        onSelectionChange(selectedObject: Object): void;
        /**
         *  Vérifie si une sauvegarde est nécessaire
         */
        private majPlanFinancement();
        /**
         * Construction credit interne
         */
        listerCreditInterne(): ng.IPromise<any>;
        /**
         * Construction des crédits externes
         */
        listerCreditExterne(): void;
        /**
         * Construction des crédits existant
         */
        private listerCreditsExistant();
        /**
         * Construction des crédits complémentaires
         */
        private listerCreditsComplementaires();
        /**
         * Construction Garantie
         */
        listerGarantie(): void;
        /**
         * Construction la liste des identifiants produits des credits internes
         */
        listerIdentifiantsProduits(): Array<string>;
        /**
         * Construction du contenu du tableau des assurances
         */
        listerAssurance(): ng.IPromise<any>;
        /**
         * Affiche assurance creee
         */
        afficheAssurance(assuranceObj: Modele.IAssurance, conventionAssurance: Modele.IConventionResume): void;
        /**
         * Génère le libellé à afficher pour la tuile de crédit interne
         */
        getLibelleLigneDeuxCreditInterne(creditInterne: Modele.ICreditInterne): string;
        /**
         * Génère le titre de la tuile d'un crédit existant
         */
        getTitreCreditExistant(creditExistant: Modele.ICreditExistant): string;
        /**
         * Récupère les élements du plan de financement
         */
        private getElementsFinancement(chargerElements, dossierSchema, indexPlan);
        /**
         * Fonction appellée au changement de proposition dans le panier
         */
        planFinancementChargement(index: number, chargerElements: boolean, optim?: Modele.IResultatPlanOptimisation): ng.IPromise<any>;
        /**
         * Affiche la popin Garantie
         */
        popinGarantie(): void;
        /**
         * Afifchage de la popin de création de garantie crédit logement
         */
        popinGarantieCreditLogement(idsCredit: string[]): ng.IPromise<Modele.IGarantieSchema>;
        /**
         * Suppression d'une garantie
         */
        supprimerGarantie(): void;
        /**
         * Mets à jour le crédit dans la liste des crédits internes présent dans la vue et les affichages dépendants
         * @param {Modele.ICreditInterne} oCreditInterne
         */
        private majCreditInterneInVue(oCreditInterne);
        /**
         * Affiche garantie creee
         */
        afficheGarantie(garantieObj: Modele.IGarantie): void;
        /**
         * Affiche la popin Assurance
         */
        popinAssurance(): void;
        /**
         * Suppression d'une asssurance
         */
        supprimerAssurance(): void;
        /**
         * Affiche la popin qui permet de gérer les crédits existant associées au financement
         */
        ajouterCreditExistantFinancement(): void;
        /**
         * Mise à jour du crédit existant dans les données session
         * @param {Modele.CreditExistant} creditExistant
         */
        private majCreditExistantIhm(creditExistant);
        /**
         *  Demande de validation de la suppresion de la prise en compte du crédit existant dans le lissage
         */
        private popinSupprimerCreditExistant(creditExistant);
        /**
         * Affiche la popin Crédit Interne
         */
        popinCreditInterne(creditInterne: Modele.ICreditInterne): void;
        /**
         * Gestion du PTZ à la fermeture de la popin
         */
        private gestionPopinPtz(result);
        /**
         * Mise à jour des assurances
         */
        private majListeAssurancesCredits();
        /**
         * Rafraichit le PTZ dans la vue
         * Le PTZ peut être modifié suite à la modification des autres crédits
         */
        private rafraichissementPtz();
        /**
         * Supprimer le crédit interne, reset les données et traite les données annexes
         * @param {number} indexCreditInterne
         * @returns
         */
        private supprimerCreditInterne(indexCreditInterne);
        /**
         * Supprime la présence du crédit existant dans le financement
         * @param {Modele.CreditExistant} creditExistant
         */
        private supprimerCreditExistantFinancement(creditExistant);
        /**
         * Supprime la présence de tous crédits existant pésent dans le financement
         * => Dans le cas d'une suppression du crédit de lissage
         * @param {Modele.CreditExistant} creditExistant
         */
        private supprimerLesCreditsExistantFinancement();
        /**
         * Création d'un credit interne (ajout + mise à jour)
         */
        /**
         * Affiche la popin Crédit Externe
         */
        popinCreditExterne(creditExterne: instructionCredit.Modele.ICreditExterne): void;
        /**
         * Suppression d'un credit externe
         */
        supprimerCreditExterne(index: number, confirm?: boolean): ng.IPromise<boolean>;
        /**
         * Création d'un credit externe
         */
        private creerCreditExterne(creditExterneMaj);
        /**
         * Contrôle si smac est activé
         */
        controleActivationSmac(): ng.IPromise<any>;
        /**
         * Consulter le dossier smac
         */
        consulterSmac(): ng.IPromise<Modele.IDossierSmac>;
        /**
         * Fonction permettant de caculer et d'afficher la capacité de Remboursement
         */
        calculCapaciteRemboursement(avecLoader: boolean): ng.IPromise<void>;
        private capaciteRemboursement(listeRessourcesCharges);
        /**
         * Permet de générer la liste de l'ensemble des ressources et charges
         */
        private getListeRessourcesCharges(charges, ressources);
        onFocusCriteresRemboursement(): void;
        /**
         * Permet de calculer une proposition
         */
        calculerProposition(): void;
        /**
         * Rafraichissement des indiceCalculAFaire des crédits internes
         */
        rafraichissementIndiceCalculAfaire(): ng.IPromise<void>;
        /**
         * Valide toutes les actions réalisées dans le bloc « Reste à financer ».
         * Enregistre les crédits et mets à jours les données
         */
        private validerCalculResteAFinancer();
        /**
         * Vérifie les bornes pour les nouveaux montants
         * Retourne si des erreurs sont présentes
         */
        private verificationDonnes();
        /**
         *  Initialise les données après un clacul d'optimisation et recharge la proposition suite au résultat
         */
        private resetDonneesApresOptimisation(resultatPlanOptimisation);
        /**
         * Permet d'ajouter une proposition
         */
        ajouterProposition: () => void;
        /**
         * Permet de réinitialiser le plan de financement
         */
        resetPlan(chargerElements?: boolean): void;
        /**
         * Fonction permettant de créer les objets PersonneSmac
         */
        /**
         * Fonction permettant de créer les objets creditSmac
         */
        /**
         * Fonction permettant la création (ou maj) de dossier SMAC
         */
        /**
         * Fonction permettant de lire une valeur contenue dans un cookie en fonction d'un code
         */
        lectureCookie(code: string): string;
        private majTotemCredits();
        /**
         *  Récupère le libellé de la nature du pret selon son code
         */
        private getLibelleNaturePret(codeIndiceNaturePret);
        /**
         * Tarfication smac
         */
        /**
         * Débranchement vers smac
         */
        debranchementSmac(): void;
        /**
         * Retour du débranchement smac
         */
        retourDebranchementSmac(): ng.IPromise<any>;
        /**
         * Mise à jour des crédits en retour de consultation smac
         */
        /**
         * Fonction récursive de maj des crédits en retour de consultation smac
         */
        /**
         * Vérifie le dossier + charge la dernière version si souhaité
         * @param {boolean} chargerDossier
         * @returns
         */
        private controlerEtChargerDossier(chargerDossier);
        /**
         * Redirige vers la page synthèse
         */
        voirSynthese(): void;
        /**
         * Initialise la liste des crédits qui permettra de générer les tableau d'amortissement
         */
        private initListeCreditsTA();
        /**
         * Permet d'organiser la liste déroulante "Tableau d'amortissement"
         */
        getCategorieTableauAmortissement(item: Object): string;
        /**
         * Imprime le tableau d'amortissement du crédit selectionné
         */
        editerCreditInterneTA(): void;
        /**
         * Popin pour la gestion d'un crédit de consommation (Atout clic)
         */
        popinCreditConso(creditConsommation?: Modele.CreditExistant): void;
        /**
         * Récupération de la liste des produits standards (= non lissage)
         */
        private listerProduitsStandards();
        /**
         * Recharge toutes les données et effectue la mise à jours des frais et accessoires
         */
        private rafraichirContexte();
    }
}

declare module instructionCredit {
    class FormulaireFraisAccessoiresControleur {
        private $q;
        private $document;
        private $location;
        private modalService;
        private financementService;
        private fraisAccessoiresService;
        private initialisationService;
        private navigationInterneService;
        private creditInterneService;
        private modaleFactory;
        static $inject: Array<string>;
        private _accessoireLie;
        modeCreation: boolean;
        creditInterne: Modele.ICreditInterne;
        accessoire: Modele.IAccessoire;
        modaliteCalcul: Modele.ModaliteCalcul;
        montantFraisConseille: number;
        libelleDureeApplicationAccessoire: string;
        beneficiaire: Modele.IBeneficiaire;
        libelleTypeAssiette: string;
        private _tauxFrais;
        tauxFrais: number;
        private _montantFraisSouhaite;
        montantFraisSouhaite: number;
        nombrePeriodeApplicationCotisation: number;
        listePhases: Array<Modele.FraisPhaseChoix>;
        montantFraisRetenus: number;
        loader: boolean;
        saisieAutorisee: boolean;
        champTauxAffiche: boolean;
        champPayableEnAffiche: boolean;
        champPhaseAffiche: boolean;
        champTypeAssietteAffiche: boolean;
        champFinancesSaisissable: boolean;
        indicationModeMixteAffiche: boolean;
        erreurMontant: string;
        erreurTaux: string;
        constructor($q: ng.IQService, $document: ng.IDocumentService, $location: ng.ILocationService, modalService: MyWay.UI.IModalService, financementService: Service.FinancementService, fraisAccessoiresService: Service.FraisAccessoiresService, initialisationService: Service.InitialisationService, navigationInterneService: Service.NavigationInterneService, creditInterneService: Service.CreditInterneService, modaleFactory: Service.ModaleFactory);
        /**
         * Rends éditable les champs pouvant le devenir
         */
        modifierChamps(): void;
        /**
         * Remets les champs en mode lecture et permet de revenir sur la saisie précédente qui a été écrasée
         * --> ne reprend pas les valeurs conseillés systématiquement
         */
        annulerSaisie(): void;
        /**
         * Vérifie que le montant respecte les bornes
         * /!\ au mode de calcul
         */
        majChampMontant(): void;
        private setMontantRetenu();
        /**
         * Vérifie que le taux respecte les bornes
         */
        majChampTaux(saisieTaux: boolean): void;
        /**
         * Action lorsque le financement du frais est modifié
         * @param {boolean} finance : true il est financé, false il ne l'est pas
         */
        majChampFinance(finance: boolean): void;
        /**
         * Validation de la page
         */
        valider(): void;
        /**
         * Popin permettant la gestion du tiers
         */
        popinTiers(): ng.IPromise<void>;
        /**
         * Enregistrement des modifications
         */
        private enregistrementDonnees();
        /**
         * Dans le cas d'une création ce bouton annule la création de l'accessoire et retourne à la page précédente
         */
        retour(): void;
        /**
         * Dans le cas d'une modification d'un accessoire facultatif, la suppression est possible
         */
        supprimer(): void;
        /**
         * Initialise les données par défaut
         */
        private initValeursDefaut();
        /**
         * Gestion de l'affichage des champs
         */
        private initAffichageChamps();
        /**
         * Initailise les valeurs par défaut des champs
         */
        private initValeursChamps();
        /**
         * Récupère les informations constantes liées aux objets courants
         */
        private initValeursChampsAnnexes();
        /**
         * Fournit le montant des frais conseillé
         * Attention aux bornes pour les frais de dossier
         * @param {number} montantConsolideAccessoire: si null alors c'est un mode de calcul par taux, le montant doit être calculé
         */
        private getMontantConseille(montantConsolideAccessoire);
        /**
         * Vérification de toutes les données saisies
         * @returns True si des erreurs sont présentes
         */
        private verificationDonnees();
        /**
         * Lors d'un mode de calcul par taux, calcul le nouveau montant
         */
        private calculMontantFraisParTaux();
        /**
         * Supprime l'accesoire et revient à la page propositions
         */
        private supprimerAccessoire();
    }
}

declare module instructionCredit {
    class FormulaireProjetControleur {
        private $q;
        private $scope;
        private serviceAgentExtended;
        private $location;
        private navigationService;
        private modalService;
        private mwsfAdresseService;
        private initialisationService;
        private projetService;
        private calculService;
        private clientService;
        private financementService;
        private controleDossierService;
        private authentificationService;
        private navigationInterneService;
        private mwNotificationService;
        static $inject: string[];
        private _initialisationAdresse;
        dossierSchema: Modele.IDossierSchema;
        calculEnveloppe: string;
        devises: Array<instructionCredit.Modele.IDevise>;
        negociationNotaire: boolean;
        emoluments: Array<instructionCredit.Modele.IEmolument>;
        modeOccupationSelectionne: instructionCredit.Modele.ISelectboxNumber;
        destinationBienSelectionnee: instructionCredit.Modele.ISelectboxNumber;
        logementHlm: boolean;
        emolument: instructionCredit.Modele.IEmolument;
        unitesPermisContruire: Array<instructionCredit.Modele.IUnitesPermisConstruire>;
        uniteePermisConstruire: instructionCredit.Modele.IUnitesPermisConstruire;
        prescripteurBoolean: boolean;
        prescripteur: string;
        elements: Array<any>;
        tocs: Array<instructionCredit.Modele.ITypeObjetCommercial>;
        tors: Array<instructionCredit.Modele.ITypeObjetReglemente>;
        libelleTocTor: string;
        tocTorVide: boolean;
        formulaireProjetType: Array<instructionCredit.Modele.FormulaireProjetType>;
        formulaireProjetDelais: Array<string>;
        listeDestination: Array<instructionCredit.Modele.ISelectboxNumber>;
        listeModeOccupation: Array<instructionCredit.Modele.ISelectboxNumber>;
        formulaireProjetCadre: Array<string>;
        itemNature: instructionCredit.Modele.FormulaireProjetNature;
        itemNiveau: instructionCredit.Modele.FormulaireProjetNiveau;
        itemDelais: instructionCredit.Modele.IFormulaireProjetDelais;
        formulaireProjetPerformance: Array<instructionCredit.Modele.ISelectbox>;
        formulaireProjetTypeLogement: Array<instructionCredit.Modele.IFormulaireProjetTypeLogement>;
        private champsObjetLogement;
        private champsObjetTravaux;
        affichageAdresse: myway.comAdresseDqe.Adresse;
        settingsAdresse: myway.comAdresseDqe.IAdresseSettings;
        openDateFinConstruction: boolean;
        openDateAchevementTravaux: boolean;
        creditsInternesRegroupement: Modele.IPretReamenagement[];
        creditsExternesRegroupement: Modele.IPretReamenagement[];
        configTuile: MyWay.UI.iMwConfigTuile;
        titreTuileAjoutInterne: string;
        titreTuileAjoutExterne: string;
        titreBlocRachatRegroupement: string;
        private infobulleEnveloppe;
        private infobulleAdresse;
        private infobulleDetailsEcoPtz;
        private affichageDetail;
        private messageDetail;
        montantNotaire: any;
        montantAcquisition: string;
        montantTerrain: string;
        private totalMontantNotaire;
        private totalMontantAcquisition;
        private totalMontantTerrain;
        private totalCoutTotalObjet;
        private tauxNotaire;
        private totalMontant;
        private totalMontantTravauxEcoPtz;
        private erreurMontantTravauxEcoPtz;
        private champsMontant;
        private champsInformationsComplementaires;
        dateFinConstruction: Date;
        dateAchevementTravaux: Date;
        private listePrirRegroupement;
        formulaireProjetTechnique: Array<instructionCredit.Modele.ISelectbox>;
        formulaireProjetOrigine: Array<instructionCredit.Modele.ISelectbox>;
        contexteOrigine: instructionCredit.Modele.ISelectbox;
        contexteTechnique: instructionCredit.Modele.ISelectbox;
        loader: boolean;
        loaderRachat: boolean;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param projetService: instructionCredit.Service.ProjetService
         * @param navigationService: MyWay.UI.INavigationService
         */
        constructor($q: ng.IQService, $scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, navigationService: MyWay.UI.INavigationService, modalService: MyWay.UI.IModalService, mwsfAdresseService: myway.comAdresseDqe.AdresseService, initialisationService: instructionCredit.Service.InitialisationService, projetService: instructionCredit.Service.ProjetService, calculService: instructionCredit.Service.CalculService, clientService: Service.ClientService, financementService: Service.FinancementService, controleDossierService: Service.ControleDossierService, authentificationService: Service.AuthentificationService, navigationInterneService: instructionCredit.Service.NavigationInterneService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         *  Initialise la page Projet
         */
        private initialisationPageProjet();
        /**
         *  Charge les données catalogue dès le départ en asycnhone pour gain de performance
         *  Uniquement les données utiles à l'initialisation des données
         */
        private chargementDonneesSession();
        /**
         *  Vérifie les mises à jours nécessaires et contrôle si la page peut être chargée
         */
        private verificationMajNecessaires();
        /**
         *  Initialise la liste des modes d'occupation du projet en fonction de l'usage (destination) selectionné
         */
        private chargementModeOccupationByUsageDuBien();
        /**
         *  Initialise la liste des modes d'occupation du projet et selectionne un mode par défaut
         */
        private majModeOccupation();
        /**
         * Vérifie l'uniformité des données et le retour de sdpi si besoin
         */
        private verificationPrescripteur();
        /**
         * Charge les données de la page projet
         * @returns
         */
        private chargementDonneesProjet();
        private chargementTocTor();
        /**
         *  Libelle TOC TOR
         */
        private genererLibelleTocTor(projet);
        /**
         * Affiche la popin du Rédacteur
         */
        popinRedacteur(): void;
        /**
         * Affiche la popin de détails de travaux de l'éco-PTZ
         */
        popinDetailsTravauxEcoPtz(): void;
        /**
         * Permet de gérer l'affichage des champs montant supllémentaires
         */
        afficherDetail(): void;
        affichageMontant(): void;
        /**
         * Permet de calculer les frais de notaire
         */
        calculFraisNotaire(): void;
        /**
         * Permet de calculer le cout total de l'objet
         */
        calculCoutTotalObjet(): void;
        private objetSelectionneSelectbox(liste, code);
        selectionCodeUsage(selection: instructionCredit.Modele.ISelectboxNumber): void;
        selectionModeOccupation(selection: instructionCredit.Modele.ISelectboxNumber): void;
        /**
         * Vérification de la zone en fonction de l'adresse
         */
        private verificationZoneRobien();
        /**
         * Mise à jour des infos projet en fonction du composant adresse
         */
        miseAJourAdresse(): void;
        /**
         * Affiche la popin de recherche avancée TOC-TOR
         */
        popinTocTor(): void;
        private definirTocTor(tocSelectionne, torSelectionne);
        affichageInformationsComplementaires(): void;
        affichageChampsPrescripteur(): void;
        private affichagePrescripteur();
        controleSurfaceHabitableConstruction(): void;
        controleSurfaceHabitableBatiment(): void;
        controleSurfaceHabitableTravaux(): void;
        /**
         * Affiche la popin d'ajout de crédit interne
         */
        popinAjoutCreditsInternes(): void;
        /**
         * Méthode d'appel pour l'ajout en mode synchrone d'un pret
         */
        private ajoutPretReamenagement(index, liste, dateRa);
        onTuileClick(objetTuile: Modele.IPretReamenagement): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        /**
         * Affiche la popin de modification d'un crédit interne réaménagé
         */
        popinCreditInterneReamenage(credit: Modele.IPretReamenagement): void;
        /**
         * Affiche la popin de modification d'un crédit externe réaménagé
         */
        popinCreditExterneReamenage(credit: Modele.IPretReamenagement): void;
        /**
         * Appel au débranchement vers sdpi
         */
        sdpi(): void;
        /**
         * Retour de sdpi
         */
        retourSdpi(): void;
        /**
         * Dans le cas d'un rachat ou d'un regroupement de crédits internes, récupère la somme
         * @returns Somme
         */
        private getSommeMensualitesRegroupementInterne();
        /**
         * Rachat / Regroupement de Crédits
         */
        private recupererPreaPrir(elements);
        initComplementDossier(libelle: string): void;
        /**
         *  Permet de mettre à jour la date de fin de construction
         */
        majDateFinConstruction(): void;
        /**
         *  Permet de mettre à jour la date d'achèvement des travaus
         */
        majDateAchevementTravaux(): void;
        /**
         * Permet de mettre à jour les objets Projet et Reamenagement
         */
        private majProjetReamenagement(suppressionCredit?);
        private diffDatesEnMois(date1, date2);
        verifCoutAcqsBatimentHabitationIsNotNull(): void;
        verifSoulteFinanceIsNotNull(): void;
        verifMontantMoblFinancierIsNotNull(): void;
        verifCoutTravauxIsNotNull(): void;
        verifCoutTerrIsNotNull(): void;
        verifCoutConstructionFinancierIsNotNull(): void;
        verifCoutTravauxAChargeMoaIsNotNull(): void;
        verifMontantRachCrenIsNotNull(): void;
        verifMontantDiversIsNotNull(): void;
        verifCoutFrsNotaireIsNotNull(): void;
        verifMontantFrsNegocieBatimentIsNotNull(): void;
        verifMontantFrsNegocieTerrainIsNotNull(): void;
        verifMmontantCRDRachSurBienVendIsNotNull(): void;
        majCodeLogementHlm(): void;
        /**
         *  Mets à jour des attributs d'un objet
         */
        private majDonneesPartiellesObjet(identifiantClasse, objetMaj, avecLoader?);
        private majAnomaliesTotemProjet();
    }
}

declare module instructionCredit {
    class SyntheseControleur {
        private $q;
        private $scope;
        private $document;
        private serviceAgentExtended;
        private initialisationService;
        private financementService;
        private projetService;
        private syntheseService;
        private personnalisationService;
        static $inject: string[];
        chargementEnCours: boolean;
        accordACompleter: Enum.FeuTricolore;
        accordAApprondir: Enum.FeuTricolore;
        tabGraphiqueDefaut: boolean;
        tabTableauDefaut: boolean;
        planFinancementSchema: Modele.IPlanFinancementSchema;
        donneesSyntheseFrais: Modele.SyntheseFrais;
        coutTotalCreditsExternes: number;
        coutTotalProjet: number;
        coutTotalFinancement: number;
        coutGlobalCreditEtablissements: number;
        creditsSyntheseFinancement: Array<Modele.CreditSyntheseFinancement>;
        montantTotalPremiereEchance: number;
        montantTotalPremiereEchanceAssurance: number;
        listePhases: Array<Modele.ICreditPhase>;
        endettement: Modele.IEndettement;
        synthesePlanFinancement: Modele.ISynthesePlanFinancement;
        creditInterneSelect: Modele.ICreditInterne;
        constructor($q: ng.IQService, $scope: ng.IScope, $document: ng.IDocumentService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService, financementService: instructionCredit.Service.FinancementService, projetService: instructionCredit.Service.ProjetService, syntheseService: instructionCredit.Service.SyntheseService, personnalisationService: instructionCredit.Service.PersonnalisationService);
        /**
         * Au clic sur le lien, si les anomalies ne sont pas visibles, elles le deviennent
         */
        consulterDetailAccordPrincipe(): void;
        /**
         * Charge les données mise à jour nécessaire à la construction de la page synthèse
         */
        private chargementDonneesService();
        /**
         * Initialise les données calculées pour les parties "Plan de financement" et "Coût de financement"
         */
        private initFinancement();
        private initSyntheseFrais();
        /**
         * Permet de créer le tableau de synthèse avec les crédits INTERNES
         */
        private initSyntheseCreditsInternes();
        /**
         * calcul montant assurance
         */
        calculMontantAssurance(): void;
        /**
         * Initialise le composant accord de princpe
         */
        private initAccordPrincipe();
        /**
         *  Edition proposition
         */
        editionProposition(): void;
    }
}

declare module instructionCredit {
    class GraphiqueAreaControleur {
        donnees: any;
        width: number;
        height: number;
        private padding;
        private pathClass;
        private xScale;
        private yScale;
        private xAxisGen;
        private yAxisGen;
        private area;
        private graphe2;
        private area2;
        /**
         * Contruction du graphique de type Area
         */
        constructor();
        private dessinerGraphique(svg);
        private setChartParameters();
    }
}

declare module instructionCredit {
    class GraphiquePretControleur {
        private $scope;
        private financementService;
        private projetService;
        private initialisationService;
        private $q;
        static $inject: string[];
        creditsInternes: Array<Modele.ICreditInterne>;
        creditsExternes: Array<Modele.ICreditExterne>;
        listePhases: Array<Modele.ICreditPhase>;
        creditLissage: Modele.CreditGraphique;
        intersectionsMax: Array<number>;
        private padding;
        private pathClass;
        private xScale;
        private yScale;
        private xAxisGen;
        private yAxisGen;
        private area;
        private listeCredits;
        private dureesPhases;
        private dureeMax;
        private echeanceMax;
        private grapheReference;
        private creditGraphique;
        private colors;
        private graphs;
        private graphiqueDessine;
        private margin;
        private legendRectSize;
        width: number;
        height: number;
        /**
         * Contruction du graphique de type Area
         */
        constructor($scope: ng.IScope, financementService: instructionCredit.Service.FinancementService, projetService: instructionCredit.Service.ProjetService, initialisationService: instructionCredit.Service.InitialisationService, $q: ng.IQService);
        /**
         * Permet de générer les points d'intersection pour chaque crédit
         */
        private creationPhases();
        /**
         * Permet de générer les points d'intersection pour chaque crédit
         */
        private creationPoints();
        /**
         * Permet de dessiner le graphique
         */
        private dessinerGraphique(svg);
        /**
         * Permet de paramétrer les axes X et Y
         */
        private parametresAxes();
        /**
         * Permet de dessinner les axes X et Y
         */
        private dessinerAxes(svg);
        /**
         * Permet d'ajouter la légende au graphique
         */
        private legende(svg, color);
        /**
         * Permet de traiter les crédits internes pour les transformer dans le bon format
         */
        private traitementCreditsInternes();
        /**
         * Permet de traiter les crédits externes pour les transformer dans le bon format
         */
        private traitementCreditsExternes();
    }
}

declare module instructionCredit {
    class GraphiqueSyntheseControleur {
        private $scope;
        static $inject: string[];
        endettement: Modele.IEndettement;
        private donnees;
        private feuxTricolores;
        private pathClass;
        private width;
        private height;
        private radius;
        private infoWidth;
        /**
         * Contruction du graphique de type Area
         */
        constructor($scope: ng.IScope);
        private dessinerDonut(couleurEtat);
        private descriptionCharge(couleurEtat);
    }
}

declare module instructionCredit {
    class DetailGraphiqueSyntheseControleur {
        private $scope;
        private initialisationService;
        static $inject: string[];
        endettement: Modele.IEndettement;
        momentVerite: string;
        constructor($scope: ng.IScope, initialisationService: instructionCredit.Service.InitialisationService);
    }
}

declare module instructionCredit {
    class ModaleAjoutChargesControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        chargeTemporaire: instructionCredit.Modele.IChargePersonne;
        chargeHorsEtablissement: boolean;
        enModification: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin de gestion des charges
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutComptesControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        compteTemporaire: instructionCredit.Modele.IComptePersonne;
        moyenPaiement: boolean;
        /**
         * Permet de construire la popin d'affichage des comptes
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutComptesHorsCeControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        compteTemporaire: instructionCredit.Modele.IComptePersonne;
        enModification: boolean;
        erreurs: Array<string>;
        openedDateOuverture: boolean;
        /**
         * Permet de construire la popin de gestion des comptes hors ce
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutCreditIntRegroupementControleur implements MyWay.UI.ISelectionChangeHandler {
        private $q;
        private $scope;
        private $modalInstance;
        private projetService;
        private initialisationService;
        private modaleFactory;
        static $inject: string[];
        modalDatas: any;
        headerText: string;
        toc: string;
        private creditsPresentsDansDossier;
        dateEnvisageeRa: Date;
        openDateEnvisageeRa: boolean;
        regroupement: boolean;
        tableauCreditsInternes: MyWay.UI.ImwTableOptions;
        creditsInternes: Array<Modele.IDetailPret>;
        creditsSelectionnes: Array<Modele.IDetailPret>;
        loader: boolean;
        colonneOrigine: MyWay.UI.ImwTableColumnOptions;
        colonneDateFin: MyWay.UI.ImwTableColumnOptions;
        colonneDuree: MyWay.UI.ImwTableColumnOptions;
        colonneNumCredit: MyWay.UI.ImwTableColumnOptions;
        colonneCrd: MyWay.UI.ImwTableColumnOptions;
        colonneLibProduit: MyWay.UI.ImwTableColumnOptions;
        colonneEcheance: MyWay.UI.ImwTableColumnOptions;
        colonnePeriodicite: MyWay.UI.ImwTableColumnOptions;
        /**
         * Permet de construire la popin Ajout des Crédits Internes au Regroupement
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($q: ng.IQService, $scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, projetService: instructionCredit.Service.ProjetService, initialisationService: instructionCredit.Service.InitialisationService, modaleFactory: instructionCredit.Service.ModaleFactory);
        onSelectionChange(selectedObject: Object): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        /**
         * Initialise les données de la vue
         */
        private initVue(listePretReamenagement);
        /**
         * Initialise le tableau
         */
        private initTableau();
        /**
         * Récupére le détail des prêts
         * @param {Array<string>} listeIdcredits
         * @param {Array<Modele.IPretReamenagement>} listeCreditsTermines
         * @returns
         */
        private getCredits(listeIdcredits, listeCreditsTermines);
    }
}

declare module instructionCredit {
    class ModaleAjoutEpargnesHorsCeControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        epargneTemporaire: instructionCredit.Modele.IEpargnePersonne;
        enModification: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin de gestion des epargnes
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutRevenusControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        revenuTemporaire: instructionCredit.Modele.IRevenuPersonne;
        revenuHorsEtablissement: boolean;
        enModification: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin de gestion des revenus
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutRevenusFiscauxControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        static $inject: Array<string>;
        modalDatas: any;
        revenuFiscalTemporaire: Modele.IRevenuFiscalPersonne;
        enModification: boolean;
        erreurs: Array<string>;
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAlerteNeoControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        /**
         * Permet de construire la popin d'affichae du détail des frais
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleAlerteQuitterControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        valider(): void;
        annuler(): void;
    }
}

declare module instructionCredit {
    class ModaleChargeCreditExistantControleur {
        private $scope;
        private $modalInstance;
        private modaleFactory;
        static $inject: string[];
        modalDatas: any;
        etapeUne: Enum.PopinEtape;
        etapeDeux: Enum.PopinEtape;
        etapeTrois: Enum.PopinEtape;
        etapePopin: Enum.PopinEtape;
        chargementEnCours: boolean;
        creditExistant: instructionCredit.Modele.CreditExistant;
        personnesAffectation: Array<Modele.PersonneAffectation>;
        isCreditCE: boolean;
        /**
         * Permet de construire la popin
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, modaleFactory: Service.ModaleFactory);
        /**
         * Permet de fermer la popin
         */
        close: () => void;
        /**
         * Quitte la popin après avoir effectué des sauvegardes
         */
        fermerPopin: () => void;
    }
}

declare module instructionCredit {
    class ModaleControleDossierControleur {
        private $modalInstance;
        private serviceAgentExtended;
        private $q;
        private initialisationService;
        private controleDossierService;
        static $inject: string[];
        modalDatas: any;
        listeControles: Array<Modele.AnomalieDossier>;
        titrePartieTraitee: string;
        avecRedirection: boolean;
        pageActuelle: boolean;
        libelleBouton: string;
        chargementEnCours: boolean;
        /**
         * Permet de construire la popin
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, initialisationService: Service.InitialisationService, controleDossierService: Service.ControleDossierService);
        /**
         *  Rafraichit les données de la popin
         *  /!\ Mets à jour les données nécessaire en amont
         */
        rafraichir(): void;
        /**
         * Fermeture de la popin
         */
        valider(): void;
        /**
         * Gère le libellé du bouton d'action principale pour la popin
         */
        private getLibelleBouton();
        /**
         * Recherche les controles pour la page traitée actuellement
         */
        rechargementControles(): ng.IPromise<void>;
    }
}

declare module instructionCredit {
    class ModaleCreditExtRegroupementControleur {
        private $scope;
        private $modalInstance;
        projetService: instructionCredit.Service.ProjetService;
        private initialisationService;
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        credit: Modele.IPretReamenagement;
        titre: string;
        reglementations: Array<Modele.ISelectboxNumber>;
        dateFinCredit: Date;
        dateRa: Date;
        periodicites: Array<Modele.ISelectbox>;
        reglementation: Modele.ISelectboxNumber;
        periodicite: Modele.ISelectbox;
        etablissements: Array<Object>;
        erreurs: Array<string>;
        erreurPresentes: boolean;
        creditAffecte: boolean;
        aFinancerIndemnite: boolean;
        aFinancerMainLevee: boolean;
        preavisContractuel: boolean;
        regroupement: boolean;
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, projetService: instructionCredit.Service.ProjetService, initialisationService: instructionCredit.Service.InitialisationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Test des champs obligatoires
         */
        private validationChamps();
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleCreditIntRegroupementControleur {
        private $scope;
        private $modalInstance;
        private projetService;
        private initialisationService;
        static $inject: string[];
        credit: Modele.IPretReamenagement;
        dateDuRa: Date;
        toc: string;
        titre: string;
        chargement: boolean;
        preavisContractuel: boolean;
        aFinancerIndemnite: boolean;
        aFinancerMainLevee: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin Ajout des Crédits Internes au Regroupement
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, projetService: instructionCredit.Service.ProjetService, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Test des champs obligatoires
         */
        private validationChamps();
        valider(): void;
        supprimer(): void;
        /**
         * Permet de mettre à jour le montant d'Indemnité de RA
         */
        rafraichir(): void;
    }
}

declare module instructionCredit {
    class ModaleDetailsEcoPtzControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $filter;
        private initialisationService;
        private projetService;
        private modaleFactory;
        static $inject: string[];
        modalDatas: any;
        loader: boolean;
        changement: boolean;
        listeDetailCoutObjet: Modele.IDetailCoutObjet[];
        montantTravauxMax: number;
        valeurNatureTravauxAucun: string;
        listeNatureTravaux: Modele.IElementConstante[];
        natureTravauxSelectionnee: Modele.IElementConstante;
        champsCout: Modele.IParamTypologieTravaux[];
        clePremierChamp: string;
        cleDernierChamp: string;
        coupComplementaireActif: boolean;
        montantTotal: number;
        erreurs: string[];
        /**
         * Permet de construire la popin de détails de l'éco-Ptz
         * @param $scope: ng.IScope
         * @param $modalInstance: ng.ui.bootstrap.IModalServiceInstance
         * @param data: any
         * @param $filter: ng.IFilterService
         * @param initialisationService: Service.InitialisationService
         * @param projetService: Service.ProjetService
         * @param modaleFactory: Service.ModaleFactory
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $filter: ng.IFilterService, initialisationService: Service.InitialisationService, projetService: Service.ProjetService, modaleFactory: Service.ModaleFactory);
        changeNatureTravaux(): void;
        /**
         * Permet de trier les champs
         */
        trierChamps(champs: Modele.IParamTypologieTravaux[]): Modele.IParamTypologieTravaux[];
        /**
         * Permet de changer la position d'un element dans un tableau
         */
        changementPositionTableau(tableau: any[], indexAvant: number, indexApres: number): void;
        /**
         * Calcul du total après changement d'un champ montant
         */
        calculTotal(): void;
        /**
         * Contrôle si le champ cout complémentaire est actif
         */
        controleActivationCoutComplementaire(champ: Modele.IParamTypologieTravaux): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de valider la popin
         */
        valider(): void;
    }
}

declare module instructionCredit {
    class ModaleDetailsEligibiliteControleur {
        private $modalInstance;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        eligibilite: Modele.IResultatEligibilite;
        loaderEligibilite: boolean;
        /**
         * Permet de construire la popin
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleAssuranceControleur {
        private $scope;
        private $modalInstance;
        private initialisationService;
        private $q;
        private $filter;
        private assuranceService;
        static $inject: string[];
        modalDatas: any;
        loader: boolean;
        codeAssuranceObligatoire: number;
        listeProduitSelectionnee: Modele.ICreditInterne[];
        listePersonneSelectionnee: Modele.IPersonne[];
        affichageRechercheAvancee: boolean;
        _listeConventionsAssurance: Modele.IConventionAssurance[][][];
        listeConventionsAssurance: Modele.IConventionAssurance[];
        listeConventionAfficheeN1: any[];
        listeConventionAfficheeN2: any[];
        listeConventionAfficheeN3: any[];
        listeConventionAfficheeN4: any[];
        oldSelectionCol: any;
        listeTypeAssurance: Modele.ITypeAssurance[];
        conventionAssurance: Modele.IConventionAssurance;
        libelleConventionSelectionnee: string;
        isExterne: boolean;
        siren: string;
        nomCompagnie: string;
        quotientCouverture: number;
        afficheMontantCotisation: boolean;
        affichePlageMontantCotisation: boolean;
        afficheTauxCotisation: boolean;
        affichePlageTauxCotisation: boolean;
        montantCotisation: number;
        tauxCotisation: number;
        min: number;
        max: number;
        step: number;
        nbDecimale: number;
        listeMontant: Object[];
        objetMontantCotisation: Object;
        listeTaux: Object[];
        objetTauxCotisation: Object;
        erreurConventionNonPrisEnCompte: boolean;
        erreurs: string[];
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, initialisationService: Service.InitialisationService, $q: ng.IQService, $filter: ng.IFilterService, assuranceService: Service.AssuranceService);
        resetConvention(): void;
        majListeProduit(): void;
        majListePersonne(): void;
        rechercheAvancee(): void;
        private listerScConvAss();
        private getLibelleConvention(convention);
        onSelectionChangeNavcolList(selectionCol: any, colId: string): void;
        chargerFormulaireConvention(): void;
        /**
         * Contrôle si la valeur saisie (montant ou taux) est entre min et max
         */
        controlePlage(valeur: number, min: number, max: number): boolean;
        /**
         * Changement de selection du montant
         */
        changeMontant(): void;
        /**
         * Changement de selection du taux
         */
        changeTaux(): void;
        /**
         * Controle du format Siren : uniquement des chiffres
         */
        controleFormatSiren(): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        /**
         * Création d'une assurance
         */
        private creationAssurance(index, assurancesCreees, listeIdCreditCouvParAss, listeIdentifiantPersonne, elementsAssurance, libelleAnomalie);
        /**
         * Mise a jour de l'assurance
         */
        private majAssurance(assurancesCreees, assuranceSchema, assurance, elementsAssurance);
    }
}

declare module instructionCredit {
    class ModaleCreditConsommationControleur {
        private $scope;
        private $modalInstance;
        private $q;
        private initialisationService;
        private financementService;
        private clientService;
        private projetService;
        private creditConsoService;
        private modaleFactory;
        static $inject: string[];
        private _montantCatalogue;
        private _creditConsoDepart;
        private _listeGaranties;
        modalDatas: any;
        creditConso: Modele.CreditExistant;
        produitFinancier: Modele.IProduitFinancier;
        enCreation: boolean;
        donneesCatalogue: boolean;
        listeDuree: Array<number>;
        integrationLissage: string;
        chargementEnCours: boolean;
        erreurMontant: string;
        erreurTaux: string;
        erreurDuree: string;
        calculAFaire: boolean;
        erreursPresentes: boolean;
        /**
         * Permet de construire la popin qui va permettre d'ajouter et de modifier un crédit consommation
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, $q: ng.IQService, initialisationService: Service.InitialisationService, financementService: Service.FinancementService, clientService: Service.ClientService, projetService: Service.ProjetService, creditConsoService: Service.CreditConsoService, modaleFactory: Service.ModaleFactory);
        /**
         * Une donnée du crédit vient d'être modifiée
         * Vérifie si les données sont correctes et indique si un caclul doit être fait
         */
        majDonneesCredits(): void;
        /**
         * Mise à jour de la durée depuis la liste de valeurs possibles
         * @param {number} nouvelleDuree
         */
        majDureeCreditDepuisListe(nouvelleDuree: number): void;
        /**
         * Calcule la nouvelle échéance du crédit
         */
        calculerCredit(): ng.IPromise<void>;
        /**
         * Lors d'une création ou d'une remise à niveau, utilise les données du catalogue
         * @param {boolean} creation : indique si c'est une création ou un remise à niveau du catalogue
         */
        initDonneesCatalogue(creation: boolean): ng.IPromise<void>;
        /**
         * Ferme la popin sans sauvegarde
         */
        close(): void;
        /**
         * Supprime le crédit conso du dossier
         */
        supprimerCreditConso(): void;
        /**
         * Validation du crédit
         */
        valider(): void;
        /**
         * A partir de la date de traitement, récupèration de la date au format string du 1er jour du mois correspondant
         */
        private getFirstDayOfMonthByDate();
        /**
         * Vérification des erreurs
         * @returns true si des erreurs existent / False si tout est ok
         */
        private verificationDonnees();
        /**
         * Si c'est un pas de 0 : il faut proposer les solutions pour la durée du crédit
         */
        private gestionSaisieDuree();
        /**
         * Ce champ est par défaut initialisé avec le calcul automatique du montant des frais éligibles comprenant:
         * - les frais de garanties
         * - les frais de notaire
         * - les frais de courtage dans la limite de 1% du coût d’opération(hors frais)
         */
        private getMontantCatalogue();
    }
}

declare module instructionCredit {
    class ModaleCreditExterneControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        private financementService;
        static $inject: string[];
        modalDatas: any;
        creditExterneTemporaire: instructionCredit.Modele.ICreditExterne;
        naturePret: instructionCredit.Modele.ISelectbox;
        typePeriodicite: instructionCredit.Modele.ISelectbox;
        typePeriodiciteDiffere: instructionCredit.Modele.ISelectbox;
        naturesPret: Array<instructionCredit.Modele.ISelectbox>;
        typesPeriodicite: Array<instructionCredit.Modele.ISelectbox>;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin des credits externes
         * @param $scope: ng.IScope
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService, financementService: instructionCredit.Service.FinancementService);
        changeNaturePret(): void;
        changeTypePeriodicite(): void;
        changeTypePeriodiciteDiffere(): void;
        calculValeursAmortissement(): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleCreditsExistantControleur {
        private $scope;
        private $modalInstance;
        private financementService;
        private $q;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        private _listeCreditsExistants;
        private _listeTypeCredit;
        chargementEnCours: boolean;
        tableauCreditsExistant: MyWay.UI.ImwTableOptions;
        afficherMessageErreur: boolean;
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, financementService: instructionCredit.Service.FinancementService, $q: ng.IQService, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Valide le choix et enregistre les crédits
         */
        valider(): void;
        /**
         *  Effectue la maj pour un crédit
         */
        private majCredit(creditExistant);
        private constructionTableauCreditsExistant();
    }
}

declare module instructionCredit {
    class ModaleFraisAccessoireControleur {
        private $modalInstance;
        private $q;
        private $location;
        private initialisationService;
        private financementService;
        private fraisAccessoiresService;
        static $inject: string[];
        private _listeModalitesComplementaire;
        chargementEnCours: boolean;
        creditInterne: Modele.ICreditInterne;
        listeAccessoiresChoix: Array<Modele.ISelectboxAccessoire>;
        accessoireSelect: Modele.ISelectboxAccessoire;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, $q: ng.IQService, $location: ng.ILocationService, initialisationService: Service.InitialisationService, financementService: Service.FinancementService, fraisAccessoiresService: Service.FraisAccessoiresService);
        /**
         * Ferme la popin
         */
        close(): void;
        /**
         * Dirige vers la page en profondeur de détails de frais
         */
        detaillerFrais(): void;
        /**
         * Création de l'accessoire sélectionné
         */
        private creerAccessoire();
        /**
         * Récupère les phases du crédit et les cotisations
         * @param {Array<string>} listeIdCotisation
         */
        private getElementsAccessoires(listeIdCotisation);
        /**
         * Vérifie si la modalité de calcul pour l'accessoire lié est autorisé à être ajouté au crédit
         * @param {Modele.IModalitesCalculHorsConventionParProduit} modalite
         * @param {Modele.ICreditInterne} creditInterne
         */
        private accessoireDispo(modalite, creditInterne);
        /**
         * Génère la liste des frais dispos
         * @param {Array<Modele.IAccessoireType>} listeAccessoireType
         * @param {Array<Modele.IModalitesCalculHorsConventionParProduit>} listeModalitesCalculHorsConventionParProduit
         * @param {Array<Modele.IModalitesCalculAccessoireComplementaire>} listeModalitesCalculAccessoireComplementaire
         */
        private initListeAccessoiresDispo(listeAccessoireType, listeModalitesCalculHorsConventionParProduit, listeModalitesCalculAccessoireComplementaire);
    }
}

declare module instructionCredit {
    class ModaleGarantieControleur {
        private $scope;
        private $modalInstance;
        private initialisationService;
        private $q;
        private financementService;
        private mwgcRechercherPersonneService;
        private $filter;
        private clientService;
        private garantieService;
        private fraisAccessoiresService;
        static $inject: string[];
        modalDatas: any;
        tableauCredit: MyWay.UI.ImwTableOptions;
        listeIdProduitFinancier: string[];
        affichageRechercheAvancee: boolean;
        loaderNature: boolean;
        loaderCouverture: boolean;
        loaderPopin: boolean;
        listeTypeAccessoire: Modele.IAccessoireType[];
        listeNatureGarantie: Modele.INatureGarantie[];
        natureGarantieSelectionnee: Modele.INatureGarantie;
        typeDeFraisGarantie: Modele.ITypesDeFraisGarantie;
        doublonNatureGarantie: string;
        isSuretePersonnelle: boolean;
        isSuretePersonnelleSansCotisation: boolean;
        isSureteReelleHP: boolean;
        isSureteReelleNonHP: boolean;
        isSureteAutre: boolean;
        isAvecConvention: boolean;
        garantiePersonnelle: Modele.IGarantiePersonnelleSchema;
        garantieReelle: Modele.IGarantieReelleSchema;
        listeConvention: Modele.IConventionGarantie[];
        tableauConvention: MyWay.UI.ImwTableOptions;
        conventionTmp: Modele.IConventionGarantie;
        conventionSelectionnee: Modele.IConventionGarantie;
        libelleNatureCaution: string;
        isCouvertureEnQuotite: boolean;
        erreurConventionNonPrisEnCompte: boolean;
        isSaccef: boolean;
        isSaccefMaisSaisissable: boolean;
        idGarant: string;
        garant: MyWay.Model.Client;
        organismeCautionnement: Modele.IResultatGarantPersonnePM;
        lignesCouvertureGarantie: Modele.ILigneCouvertureGarantie[];
        tableauCouverturesGarantie: MyWay.UI.ImwTableOptions;
        indexLigneCouvSelectionnee: number;
        couvertureGlobaleQuotite: number;
        couvertureGlobaleMontant: number;
        couvertureReste: number;
        couvertureQuotite: number;
        coutTotalGarantie: number;
        cotisationMontant: number;
        cotisationTaux: number;
        afficheMontantCotisation: boolean;
        affichePlageMontantCotisation: boolean;
        afficheTauxCotisation: boolean;
        affichePlageTauxCotisation: boolean;
        min: number;
        max: number;
        step: number;
        nbDecimale: number;
        listeTauxOuMontant: Object[];
        objetCotisation: Object;
        selectTauxCotisation: boolean;
        etatBoutonValiderCotisation: boolean;
        etatBoutonValiderCoutTotalSRHP: boolean;
        finance: boolean;
        financeMode: number;
        financeNbEcheances: number;
        erreurs: string[];
        /**
         * Permet de construire la popin du bien a vendre
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, initialisationService: Service.InitialisationService, $q: ng.IQService, financementService: Service.FinancementService, mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService, $filter: any, clientService: Service.ClientService, garantieService: Service.GarantieService, fraisAccessoiresService: Service.FraisAccessoiresService);
        /**
         * Construction du tableau de crédits
         */
        private initialisationTableauCredit();
        private resetNatureGarantie();
        private resetConvention();
        private resetCouverture();
        private resetCotisation();
        rechercheAvancee(): void;
        private natureGarantieGroupes(item);
        changeNatureGarantie(): void;
        private controleDoublonCouverture();
        private listerConventions();
        /**
         * Construction du tableau de convention
         */
        private initialisationTableauConvention();
        /**
         * Construction du tableau de couverture des crédits
         */
        private initialisationTableauCouvertureCreditGarantie();
        /**
         * Action après sélection dans le tableau
         */
        onSelectionChange(selectedObject: Object): void;
        /**
         * Action de validation du choix de convention (uniquement sureté personnelle)
         */
        validerConvention(): void;
        /**
         * Chargement de la liste des couvertures en fonction de couvertures schema
         */
        private chargerListeCouvertureBySchema(garantie);
        /**
         * Chargement de la liste des couvertures en fonction de couvertures lecture
         */
        /**
         * Initialisation du tableau de couvertures
         */
        private initialisationTableauCouverture();
        /**
         * Récupération du libellé de type de frais
         */
        private getLibelleTypeFrais(garantie);
        /**
         * Popin recherche d'un garant pour sureté personnelle
         */
        rechercheGarant(): void;
        /**
         * Popin recherche d'un garant pour sureté réelle ou autre
         */
        /**
         * Sélection d'un garant pour sureté réelle ou autre
         */
        /**
         * Chargement des couvertures si garantie non conventionnée => sureté personnelle ou réelle HP uniquement
         */
        private chargerCouverturesNonConventionne();
        /**
         * Récupère le montant emprunté total
         */
        private getMontantEmprunteTotal();
        /**
         * Action de changement de taux de la liste déroulante => sureté personnelle uniquement
         */
        changeTauxCotisationSP(): void;
        /**
         * Récupèration des ids des crédits sélectionnées
         */
        private getIdsCreditSelectionne();
        /**
         * Affichage du message d'intégration au plan financier
         */
        private affichageMessageIntegrationPlanFinancier();
        /**
         * Création de la garantie personnelle non conventionnée => sureté personnelle non conventionnée uniquement
         */
        private creationGarantiePersonnelleNonConventionnee();
        /**
         * Action de validation du champ quotité ou montant global couverture => sureté personnelle uniquement
         */
        validerCouvertureGlobalSP(): void;
        /**
         * Calcul du montant global en fonction des montants des couvertures => sureté personnelle uniquement
         */
        private calculMontantCouvertureGlobaleSP();
        /**
         * Calcul de la quotité global en fonction des couvertures => sureté personnelle uniquement
         */
        private calculQuotiteCouvertureGlobaleSP();
        /**
         * Action de validation de la couverture => sureté personnelle
         */
        validerLigneCouvertureSP(cotisationEnTaux: boolean): void;
        /**
         * Création de la garantie réelle => sureté réelle uniquement
         */
        private creationGarantieReelle();
        /**
         * Action de validation du champ montant cotisation => sureté réelle HP uniquement
         */
        validerMontantCotisationSRHP(): void;
        /**
         * Action de validation du champ montant total => sureté réelle HP uniquement
         */
        validerMontantTotalSRHP(): void;
        /**
         * Estimer les coûts en fonction du pourcentage de couverture
         */
        estimerSRHP(): void;
        /**
         * Action de modification du champ montant global couverture
         */
        changementCouvertureGlobaleMontant(): void;
        /**
         * Calcul taux cotisation en fonction d'un montant
         */
        private calculTauxCotisation();
        /**
         * Calcul du reste à financer
         */
        private calculCouvertureReste();
        /**
         * Calcul du coût global garantie
         */
        private calculerCoutGlobalGarantie();
        /**
         * Mise a jour de la checkbox financé
         */
        majFinance(): void;
        /**
         * Contrôle si la valeur saisie (montant ou taux) est entre min et max
         */
        private controlePlage(valeur, min, max);
        /**
         * Suppression de la garantie HP temporaire
         */
        private suppressionGarantie();
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de valider la popin
         */
        valider(): void;
        /**
         * Permet de contrôler le crédit est en mode manuel
         */
        private estCreditManuel(idProduitFinancier);
        /**
         * Permet de contrôler si la quotité de couverture est correct
         */
        private controleQuotiteCouverture(couv);
        /**
         * Permet de contrôler si le taux de cotisation est correct
         */
        private controleTauxCotisation(couv);
        /**
         * Permet de contrôler si le montant de cotisation est correct
         */
        private controleMontantCotisation(couv);
    }
}

declare module instructionCredit {
    class ModaleListeAnomaliesControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        listeAnomalies: Array<Modele.AnomalieDossier>;
        /**
         * Permet de construire la popin
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        /**
         * Fermeture de la popin
         */
        valider(): void;
    }
}

declare module instructionCredit {
    class ModalePersonnalisationControleur {
        private $q;
        private $modalInstance;
        private personnalisationService;
        static $inject: string[];
        modeCalculSelect: string;
        modeRestitutionSelect: string;
        chargementEnCours: boolean;
        infobulleModeCalcul: Object;
        infobulleModeRestitution: Object;
        /**
         * Permet de construire la popin
         */
        constructor($q: ng.IQService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, personnalisationService: instructionCredit.Service.PersonnalisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Enregistre les choix de préférences de l'utilisateur
         */
        appliquer(): void;
        /**
         * Sauvegarde la personnalisation du mode de calcul
         */
        private personnaliserModeCalcul();
        /**
         * Sauvegarde la personnalisation du mode de restitution
         */
        private personnaliserModeRestitution();
    }
}

declare module instructionCredit {
    class ModaleRechercheClientBancaireControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private $modalInstance;
        private clientService;
        private $q;
        private $filter;
        static $inject: string[];
        modalDatas: any;
        headerText: string;
        clientBancaireSelectionne: Modele.IInformationEntiteTitulaire;
        tableauResultats: MyWay.UI.ImwTableOptions;
        resultats: Array<Modele.IInformationEntiteTitulaire>;
        identifiantEntieTitulaire: number;
        chargementEnCours: boolean;
        emprunteur: Modele.IEmprunteur;
        /**
         * Permet de construire la popin de recherche de client bancaire
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         * @para  $q: ng.IQService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, clientService: instructionCredit.Service.ClientService, data: any, $modal: any, $q: ng.IQService, $filter: any);
        getTableauResultatsEntiteTitulaire(codeEtablissement: string, resultEntiteTitulaire: Array<Modele.IEntiteTitulaire>): ng.IPromise<any>;
        initialiserTableau(): MyWay.UI.ImwTableOptions;
        onSelectionChange(selectedObject: Modele.IInformationEntiteTitulaire): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de valider la popin
         */
        valider(): void;
    }
}

declare module instructionCredit {
    class ModaleRechercheProduitControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        /**
         * Permet de construire la popin de recherche d'un produit de pret
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleRedacteurControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        private redacteur;
        private afficherResultats;
        private tableauResultats;
        private redacteurSelectionne;
        private resultats;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        rechercherRedacteur(): void;
        construireTableau(tableau: Array<instructionCredit.Modele.IRedacteurActe>): void;
        onSelectionChange(selectedObject: instructionCredit.Modele.RedacteurActe): void;
        valider(): void;
        annuler(): void;
    }
}

declare module instructionCredit {
    class ModaleSituationBdfControleur {
        private $scope;
        private $modalInstance;
        private clientService;
        private initialisationService;
        private $q;
        private interroBDFService;
        static $inject: string[];
        modalDatas: any;
        situationBdfTemporaire: instructionCredit.Modele.INotationTiers;
        enModification: boolean;
        interditBancaire: Modele.IInterditBancaire;
        enAttenteBdf: boolean;
        enAttenteFicp: boolean;
        codeTypeReponseOk: string;
        codeTypeReponseKO: string;
        personneSelectionne: instructionCredit.Modele.IPersonne;
        codeEtablissement: string;
        tableauOppositions: MyWay.UI.ImwTableOptions;
        listeOppositions: Array<Modele.IOpposition>;
        chargementEnCours: boolean;
        /**
         * Permet de construire la popin de gestion de la situation BDF
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, clientService: instructionCredit.Service.ClientService, data: any, $modal: any, initialisationService: instructionCredit.Service.InitialisationService, $q: ng.IQService, interroBDFService: myway.comRisquesClient.InterroBDFService);
        /**
         *  Récupération des données à charger
         */
        private initElementsPopin();
        interrogerSituationBdf(): void;
        /**
         * Construction du tableau d'oppositions
         */
        private initialisationTableauOppositions();
        /**
         *  Initialise les données d'interdit bancaires
         */
        private initInterditBancaire();
        /**
         * Récupération des libellés pour chacune des oppositions et initialisation du tableau
         */
        private initOppositions();
        private getLibelleCodeInscription(codeInscription);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleTocTorControleur implements MyWay.UI.INavcolHandler {
        private $scope;
        private $modalInstance;
        private $filter;
        static $inject: string[];
        modalDatas: any;
        recherche: string;
        listTocs: Array<Modele.ITypeObjetCommercial>;
        listTors: Array<Modele.ITypeObjetReglemente>;
        tocsAffichage: Array<Modele.ITypeObjetCommercial>;
        torsAffichage: Array<Modele.ITypeObjetReglemente>;
        tocSelectionne: Modele.ITypeObjetCommercial;
        torSelectionne: Modele.ITypeObjetReglemente;
        torsFiltres: Array<Modele.ITypeObjetReglemente>;
        /**
         * Permet de construire la popin de gestion des charges
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: any, $filter: any);
        onNavcolRecherche(critere: string, id: string): void;
        onSelectionChangeNavcolList(selectionCol: any, colId: string): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de fermer la popin en ayant effectuer un choix
         */
        valider(): void;
        /**
         *  Récupère les tors correpondant à un toc
         */
        private getTorsByToc(toc, avecRecherche);
    }
}

declare module instructionCredit {
    class NavigationControleur {
        private $rootScope;
        private navigationService;
        private initialisationService;
        private navigationInterneService;
        private syntheseService;
        private contratEpargneLogementService;
        private agentExterneService;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, navigationService: MyWay.UI.INavigationService, initialisationService: Service.InitialisationService, navigationInterneService: Service.NavigationInterneService, syntheseService: Service.SyntheseService, contratEpargneLogementService: Service.ContratEpargneLogementService, agentExterneService: Service.AgentExterneService);
        /**
         * Organise le menu selon la page cible
         */
        private gestionPage(pageCourante);
        /**
         *   Génère le totem principal de l'application
         */
        private creerTotemPrincipal();
    }
}

declare module instructionCredit {
    class RouteurControleur {
        private serviceAgentExtended;
        private $location;
        private $q;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, $q: ng.IQService);
        /**
         * Récupére la code de la page à accéder
         */
        private getPageEnum();
    }
}

declare module instructionCredit {
    class TransfertNeoControleur {
        private $q;
        private serviceAgentExtended;
        private initialisationService;
        private cookieFactory;
        static $inject: string[];
        loader: boolean;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: Service.InitialisationService, cookieFactory: Service.CookieFactory);
        /**
         * Débranchement vers NEO
         */
        private debranchementNeo();
        /**
         *  Vérifie les mises à jours nécessaires et contrôle si la page peut être chargée
         */
        private verificationMajNecessaires();
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
    /**
     * Calcul la date de fin d'un credit en fonction de la date de début et du nombre d'échéances en mois
     * @param nbMois: number - Nombre de mois
     */
    var dateFinCredit: () => (dateDebut: any, nbMois: number) => Date;
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit.Modele {
    class Adresse {
        codePostalVille: string;
        batiment: string;
        etage: string;
        rue: string;
        /**
         * Construction d'un objet de type Adresse
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class AnomalieDossier implements IAnomalieLecture {
        typeControle: number;
        idAno: string;
        libelleAno: string;
        typeAno: number;
        dateHeureAno: number;
        idControleRegle: string;
        idObjet: string;
        typeControleDetail: Enum.TypeControleDossier;
        constructor(anomalieLecture?: IAnomalieLecture);
    }
}

declare module instructionCredit.Modele {
    class Ape {
        libelle: string;
        /**
         * Construction d'un objet de type APE
         * @param libelle: string - Nom de l'APE
         */
        constructor(libelle: string);
    }
}

declare module instructionCredit.Modele {
    interface IArborescence {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
        niveau2?: Array<IArborescence2>;
    }
    class Arborescence {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        niveau2: Array<IArborescence2>;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         * @param niveau2: Array<IArborescence2> - 2ème niveau de tuile
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IArborescence2 {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
        niveau3?: Array<IArborescence3>;
    }
    class Arborescence2 {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        niveau3: Array<IArborescence3>;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         * @param niveau3: Array<IArborescence3> - 3ème niveau facultatif
         */
        constructor(libelle: string, ligne1: string, ligne2?: string, ligne3?: string, ligne4?: string, niveau3?: Array<IArborescence3>);
    }
}

declare module instructionCredit.Modele {
    interface IArborescence3 {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
    }
    class Arborescence3 {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         */
        constructor(libelle: string, ligne1: string, ligne2?: string, ligne3?: string, ligne4?: string);
    }
}

declare module instructionCredit.Modele {
    interface ICadreFiscal {
        idCaisseEpargne: number;
        codeTypologieCadreFiscal: string;
        codeNatureFinancier: string;
        codeDestinataireAutreObjet: number;
        dateDebutApplication: number;
        dateFinApplication: number;
        libelleCadreFiscal: string;
    }
}

declare module instructionCredit.Modele {
    class ChampsRequis {
        etape: number;
        libelle: string;
        section: string;
        page: string;
        renseigne: boolean;
        necessaire: boolean;
        /**
         * Création d'un champs requis
         * @param etape: number - 1 => simulation, 2 => accord prêteur, 3 => édition
         * @param libelle: string - Nom afficher dans le cartouche de complétude
         * @param section: string - Titre de la section où se trouve le champs
         * @param page: string - Titre de la page où se trouve la section
         * @param renseigne: boolean - Le champs est-il renseigné ou vide dans le formulaire. Défaut : false (vide)
         * @param necessaire: boolean - Le champs est-il toujours nécessaire ou dépend-t-il d'un autre élément. Défaut : true
         */
        constructor(etape: number, libelle: string, section: string, page: string, renseigne?: boolean, necessaire?: boolean);
    }
}

declare module instructionCredit.Modele {
    class Constantes {
        static codeDevise: string;
        static symboleDevise: string;
        static codeCategorieEmprunteurParticulier: string;
        static listeStatutsEtablissement: instructionCredit.Modele.IStatutRessource[];
        static listeStatutsHorsEtablissement: instructionCredit.Modele.IStatutRessource[];
        static listeDelaisRealisation: string[];
        static emoluments: instructionCredit.Modele.IEmolument[];
        static dateTraitement: any;
        static dateTraitementYYYYMMDD: string;
        static inArray(tableau: Array<Object>, obj: Object): boolean;
        static modesOccupationLogement: instructionCredit.Modele.ISelectboxNumber[];
        static destinationsBien: instructionCredit.Modele.ISelectboxNumber[];
        static typesDeCharge: instructionCredit.Modele.TypeCharge[];
        static typesDeChargeAjoutable: instructionCredit.Modele.TypeCharge[];
        static typesDeRevenu: instructionCredit.Modele.TypeRevenu[];
        static origineDemande: instructionCredit.Modele.ISelectbox[];
        static techniqueVente: instructionCredit.Modele.ISelectbox[];
        static typesEpargnes: instructionCredit.Modele.IAdrRisqueEpargne[];
        static listeModeTransport: instructionCredit.Modele.ISelectbox[];
        static modesLogement: instructionCredit.Modele.ISelectbox[];
        static indicePerformance: instructionCredit.Modele.ISelectbox[];
        static unitesPermisConstruire: instructionCredit.Modele.IUnitesPermisConstruire[];
        static listeModalites: instructionCredit.Modele.ISelectbox[];
        static statutsOccupationLogementEmprunteur: instructionCredit.Modele.ISelectbox[];
        static typesContrat: instructionCredit.Modele.ISelectbox[];
        static listeTypesCompte: instructionCredit.Modele.ISelectbox[];
        static typesPeriodicite: instructionCredit.Modele.ISelectbox[];
        static naturesPret: instructionCredit.Modele.ISelectbox[];
        static naturesGarantie: instructionCredit.Modele.ISelectbox[];
        static listeCodeHypothequeOuPrivilege: string[];
        static primoAccedant: instructionCredit.Modele.ISelectboxNumber[];
        static typesMensualitesCredit: instructionCredit.Modele.ISelectbox[];
        static compagniesAssurance: instructionCredit.Modele.ISelectbox[];
        static segmentBaleII: Modele.ISelectbox[];
        static codeUidUtilisateur: string;
        static couleursGraphiques: Array<string>;
        static typeFonctionnementCompte: instructionCredit.Modele.ISelectbox[];
        static reglementations: instructionCredit.Modele.ISelectboxNumber[];
        static modeRestitution: Modele.ISelectbox[];
        static modeCalculCotisation: Object[];
        static natureConventionGarantie: instructionCredit.Modele.ISelectbox[];
        static listeAncienContratAssurance: string[];
        static natureLienEntiteTitulaire: instructionCredit.Modele.ISelectbox[];
        static nomCookieRepriseDossier: string;
        static actionsSurDossier: Object;
        static dureePlancherReglementation: number;
        static unitePeriodeDureePhase: Modele.ISelectbox[];
        static idChampNatureTravauxEcoPtz: string;
        static clePremierChampTravauxEcoPtz: string;
        static cleDernierChampTravauxEcoPtz: string;
        static natureTravauxEcoPtz: Modele.ISelectbox[];
        static indiceCreditInterneModeOptim: string;
        static indiceCreditInterneModeManuel: string;
        static clesSmac: string[];
        static codeRetourSmac: string;
        static typeTauxPropCreditExistant: number;
        static periodiciteCreditExistant: number;
        static idCaisseCFF: number;
        static codeLoiConso: number;
        static codeLoiImmo: number;
    }
}

declare module instructionCredit.Modele {
    interface ICookieRepriseDossier {
        codeEtablissement: string;
        idDossier: string;
        referenceExterneAgent: string;
        codeAction: string;
        dateTraitement: number;
    }
}

declare module instructionCredit.Modele {
    interface ICreationDossier {
        codeDevise: string;
        codeCanalCreation: string;
    }
}

declare module instructionCredit.Modele {
    interface IDevise {
        codeDevise: string;
        libelleDevise: string;
        nombreDecmDevise: number;
        dateDebutUtilisationDevise: number;
        dateSuspensionUtilisationDevise: number;
        nombreChiffreMaximumDevise: number;
        niveauArrondiDevise: number;
        codeSeprDecision: number;
        codeSeprChiffreMontant: number;
        libelleCreationDevise: string;
        codeIndiceDeviseInstruction: number;
        numeroOrdreDevise: number;
    }
}

declare module instructionCredit.Modele {
    class EntreeEligibilite {
        revnFiscal: number;
        nombreEnfant: number;
        nombrePersonne: number;
        surfHabitation: number;
        typeLogement: number;
        indiceCalculEnvl: boolean;
        montantAcht: number;
        montantTravaux: number;
        montantApport: number;
        indiceLogementPerf: boolean;
        indicePerfEnergetique: number;
        indiceLogementHlm: boolean;
        dateAcqsTerr: string;
        montantFrsNegocie: number;
        indicePrimoAccedant: boolean;
        codePoste: string;
        ville: string;
        constructor(projet: Modele.IProjet, emprunteur: Modele.IEmprunteur, bat: Modele.IBatimentHabitableFinance, revenusFiscaux: number, travaux: Modele.ITravauxFinances, plan: Modele.IPlanFinancementDetail);
    }
    interface IProfilPhasePTZ {
        codeTypePhase: string;
        dureeMinimumPhase: number;
        dureeMaximumPhase: number;
        periodicitePhase: number;
        quotientAmortissement: number;
        montantEcheance: number;
    }
    interface IProfilProduitPTZ {
        idPtz: string;
        montantMaximumPtz: number;
        montantMinimumPtz: number;
        montantMaximumMajrePtz: number;
        montantMaximumOprt: number;
        listePhssProduitPtz: Array<IProfilPhasePTZ>;
        idProduitFinancier: string;
        dureeConseillee: number;
        montantRessourcesRetenu: number;
        rFR: number;
        coefficientFamilial: number;
        coefficientPonderation: number;
        coutOperation: number;
        messages: string[];
    }
    interface IProfilEcoPTZ {
        idProduitFinancier: string;
        dureeMaximum: number;
        dureeConseillee: number;
        montantMaximum: number;
        messages: string[];
    }
    interface IProfilProduitsPELCEL {
        idProduitFinancierPEL: string;
        idProduitFinancierCEL: string;
        libelleProduitFinancierPEL: string;
        libelleProduitFinancierCEL: string;
        montantMaximumPEL: number;
        montantMinimumPEL: number;
        montantMaximumCel: number;
        montantMinimumCel: number;
        dureeConseilleeProduitPEL: number;
        dureeConseilleeProduitCEL: number;
        messages: Array<string>;
    }
    interface IResultatEligibilite {
        indiceEligibilitePtz: boolean;
        indiceEligibilitePC: boolean;
        indiceEligibilitePas: boolean;
        indiceEligibiliteMajrePtz: boolean;
        indiceEligibilitePEL: boolean;
        indiceEligibiliteCel: boolean;
        indiceEligibiliteEcoPTZ: boolean;
        listeAnmlEligibilitePtz: Array<string>;
        listeAnmlEligibilitePC: Array<string>;
        listeAnmlEligibilitePas: Array<string>;
        listeAnmlEligibilitePEL: Array<string>;
        listeAnmlEligibiliteCel: Array<string>;
        listeAnmlEligibiliteEcoPTZ: Array<string>;
        profilPtzEligibilite: IProfilProduitPTZ;
        profilEcoPtzEligibilite: IProfilEcoPTZ;
        profilPELCelElg: IProfilProduitsPELCEL;
    }
}

declare module instructionCredit.Modele {
    class IInfoDocument {
        codeDoc: string;
        libelleDoc: string;
        codeVariance: number;
        nombreEmp: number;
        nombreNotaire: number;
        nombreCaution: number;
        nombreDossier: number;
        nombreAutre: number;
        nombreTotal: number;
        typeTraitement: number;
        niveauTraitement: number;
        modeleTheorique: string;
        codeProcessus: string;
    }
}

declare module instructionCredit.Modele {
    interface IEmolument {
        libelle: string;
        valeur: number;
    }
}

declare module instructionCredit.Modele {
    interface IEndettement {
        montantRessources: number;
        montantRessourcesAvecAPL: number;
        montantCharges: number;
        montantChargesAvecAPL: number;
        tauxEndettement: number;
        tauxEndettementAvecAPL: number;
        mntResteAVivre: number;
        indiceResteAVivre: number;
        indiceResteAVivreAvecAPL: number;
        mntResteAVivreAvecAPL: number;
    }
}

declare module instructionCredit.Modele {
    /**
     * Objet permattant l'affichage dans le composant Synthèse des erreurs
     */
    class ErreurFormulaire {
        ancre: string;
        libelle: string;
        description: string;
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IException {
        libelle: string;
        valeurs: Array<string>;
        codeLibelle: string;
        causes?: Array<string>;
        codeHttp?: number;
    }
    class Exception implements IException {
        libelle: string;
        valeurs: Array<string>;
        codeLibelle: string;
        constructor(libelle?: string);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetUsage {
        libelle: string;
    }
    class FormulaireProjetUsage implements IFormulaireProjetUsage {
        libelle: string;
        /**
         * Construction de Usage
         * @param libelle: string - libellé de l'usage du bien
         */
        constructor(donnees: FormulaireProjetUsage);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetDelais {
        libelle: string;
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetNature {
        libelle: string;
        niveaux: Array<IFormulaireProjetNiveau>;
    }
    class FormulaireProjetNature implements IFormulaireProjetNature {
        libelle: string;
        niveaux: Array<IFormulaireProjetNiveau>;
        /**
         * Construction de Nature
         * @param libelle: string - libellé de la nature du projet
         * @param niveaux: IFormulaireProjetNiveau - liste des niveaux
         */
        constructor(donnees: FormulaireProjetNature);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetNiveau {
        libelle: string;
    }
    class FormulaireProjetNiveau implements IFormulaireProjetNiveau {
        libelle: string;
        /**
         * Construction d'un Pret externe
         * @param libelle: string - Libellé du 3ème niveau de la liste déroulante
         */
        constructor(donnees: FormulaireProjetNiveau);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetType {
        libelle: string;
        natures: Array<IFormulaireProjetNature>;
    }
    class FormulaireProjetType implements IFormulaireProjetType {
        libelle: string;
        natures: Array<IFormulaireProjetNature>;
        /**
         * Construction du Type de bien
         * @param libelle: string - libellé du type de projet
         * @param natures: Array<IFormulaireProjetNature> - Tableau des natures possible du projet
         */
        constructor(donnees: FormulaireProjetType);
    }
}

declare module instructionCredit.Modele {
    class Garantie {
        libelle: string;
        /**
         * Construction d'une Garantie
         * @param valeurs: Garantie
         */
        constructor(valeurs: Garantie);
    }
}

declare module instructionCredit.Modele {
    class MapChampsRequis {
        /**
         * Liste de l'ensemble des champs obligatoires
         * La liste des champs est renseignée dans l'ordre des pages et sections
         */
        static MAP_CHAMPS_REQUIS: {
            "TYPE-DE-PROJET": ChampsRequis;
            "VALEUR-BIEN-A-VENDRE": ChampsRequis;
            "CRD": ChampsRequis;
            "MONTANT-OPERATION": ChampsRequis;
            "LOCALISATION-BIEN": ChampsRequis;
            "CRITERE-REMBOURSEMENT": ChampsRequis;
        };
    }
}

declare module instructionCredit.Modele {
    interface IMetaObjet {
        idCaisseEpargne: number;
        idMetierObjet: string;
        numeroRelation: number;
        libelleMetierObjet: string;
        libelleComplementMetierObjet: string;
        codeNatureFinancier: string;
        codeCategorieEmprunt: string;
        typeObjetFinancierGarantie: string;
        typeDobjetReglemente: string;
        codeReamenagement: number;
        numeroOrdreClasse: number;
    }
}

declare module instructionCredit.Modele {
    /**
     *  Recense les éléments communs aux différentes modalités de calcul
     */
    interface IModaliteCalcul {
        codeModeCalculAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        tauxConsolideAccessoire: number;
        montantConsolideAccessoire: number;
        regleApplicationAccessoireAprd: string;
        numeroRegleApplicationAccessoire: string;
        codeTypeAssietteCalculAccessoire: string;
        fractionFinancierMaximum: number;
        codeTypeAccessoire: string;
    }
    /**
     *  Modalité de calcul lié au produit
     */
    interface IModalitesCalculHorsConventionParProduit extends IModaliteCalcul {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypeAccessoire: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        dateTraitement: Date;
        codeAccessoireObligatoire: number;
        codeModeCalculAccessoire: number;
        numeroRegleCalculAccessoire: string;
        montantConsolideAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypeAssietteCalculAccessoire: string;
        montantPlafondTrancheCalculAccessoire: number;
        tauxConsolideAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        montantPlafondTrancheCalculAccessoire1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantPlafondTrancheCalculAccessoire2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        montantPlafondTrancheCalculAccessoire3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        montantPlafondTrancheCalculAccessoire4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcul: number;
        montantMaximumAccessoireCalcul: number;
        montantMinimumAccessoirePourRecouvrement: number;
        numeroRegleApplicationAccessoire: string;
        regleDateDebutApplicationAccessoire: string;
        regleEvenementDeclaration1ErApplication: string;
        periodiciteApplicationAccessoire: number;
        codeRecouvrementAccessoire: number;
        uniteDureeApplicationAccessoire: number;
        dureeApplicationAccessoire: number;
        regleApplicationAccessoireAprd: string;
        codeAccessoireCalculteg: number;
        codeApplicationEcheance: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        codeIndiceDerogationBorne: number;
        fractionFinancierMaximum: number;
        codeCompAccessoireInstruction: number;
        codeCompAccessoireAvenant: number;
        codeFinancierFrsParDeft: number;
    }
    /**
     *  Modalité de calcul complémentaire pour les caisses pour tous les produits
     */
    interface IModalitesCalculAccessoireComplementaire extends IModaliteCalcul {
        idCaisseEpargne: number;
        codeTypeAccessoire: string;
        codeSousTAccessoireComplement: string;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        codeModeCalculAccessoire: number;
        montantConsolideAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypeAssietteCalculAccessoire: string;
        montantPlafondTrancheCalculAccessoire: number;
        tauxConsolideAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        montantPlafondTrancheCalculAccessoire1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantPlafondTrancheCalculAccessoire2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        montantPlafondTrancheCalculAccessoire3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        montantPlafondTrancheCalculAccessoire4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        numeroRegleApplicationAccessoire: string;
        regleDateDebutApplicationAccessoire: string;
        regleEvenementDeclaration1ErApplication: string;
        periodiciteApplicationAccessoire: number;
        codeRecouvrementAccessoire: number;
        uniteDureeApplicationAccessoire: number;
        dureeApplicationAccessoire: number;
        regleApplicationAccessoireAprd: string;
        codeAccessoireCalculteg: number;
        codeApplicationEcheance: number;
        codeCommissionIntervenantExterne: number;
        modeCalculTaux: number;
        libelleLongAccessoireComplement: string;
        libelleCreationAccessoireComplement: string;
        codeApplication: number;
        codeTypeApplicationAccessoire: number;
        codeIndiceDerogationBorne: number;
        fractionFinancierMaximum: number;
        codeCompAccessoireInstruction: number;
        codeCompAccessoireAvenant: number;
        codeCompatibiliteAccessoirePool: number;
        codeCompatibiliteAccessoireEPS: number;
        codeTypeTVA: string;
    }
    /**
     *  Objet générique utilisé dans l'IHM pour manipulé les modalités
     */
    class ModaliteCalcul implements IModaliteCalcul {
        codeModeCalculAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        tauxConsolideAccessoire: number;
        montantConsolideAccessoire: number;
        regleApplicationAccessoireAprd: string;
        numeroRegleApplicationAccessoire: string;
        codeTypeAssietteCalculAccessoire: string;
        fractionFinancierMaximum: number;
        codeTypeAccessoire: string;
        codeTypePhase: string;
        obligatoire: boolean;
        montantMinimumAccessoireCalcul: number;
        montantMaximumAccessoireCalcul: number;
        constructor(modaliteLieProduit: IModalitesCalculHorsConventionParProduit, modaliteComplementaire: IModalitesCalculAccessoireComplementaire);
    }
}

declare module instructionCredit.Modele {
    /**
     *  Typologies de bénéficiaires de la BT33 liées à la typologie de frais traité.
     */
    interface IModalitesTypeDeRoleTiersParAccessoire {
        idCaisseEpargne: number;
        codeSousTAccessoireComplement: string;
        typeRolePersonne: string;
        roleLint: string;
    }
    /**
     *  Détail des tiers pour un rôle spécifique
     */
    interface IModalitesTiersParTypeDeRole {
        idCaisseEpargne: number;
        identifiantTiers: string;
        typeRolePersonne: string;
        intitule: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePostal: string;
        localite: string;
    }
}

declare module instructionCredit.Modele {
    interface IParametreApplicatif {
        idCaisseEpargne: number;
        idElementStructureInstruction: string;
        codeParametreApplicatif: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        libelleParametre: string;
        codeTypeParametre: string;
        montantParametreMontant: number;
        dureeDunParametre: number;
        dateParametreDate: Date;
        tauxParametreTaux: number;
        valeurParametre: string;
        codeVersementNEO: string;
        codeReleaseNEO: string;
        versementParametre: number;
    }
}

declare module instructionCredit.Modele {
    interface IPret extends Produit {
        typePret: string;
    }
    class Pret implements IPret {
        typePret: string;
        libelle: string;
        sousFamille: instructionCredit.Modele.Produit;
        famille: instructionCredit.Modele.Produit;
        /**
         * Construction d'un Pret
         * @param valeurs: Pret
         */
        constructor(valeurs: instructionCredit.Modele.Produit, typePret: string);
    }
}

declare module instructionCredit.Modele {
    class PretPrincipal extends Pret {
        isLissable: boolean;
        /**
         * Construction d'un pret principal
         * @param valeurs: Pret
         * @param categorie: string
         * @param isLissable: boolean
         * @param favorie: boolean - Défaut : false
         */
        constructor(valeurs: instructionCredit.Modele.Produit, isLissable: boolean);
    }
}

declare module instructionCredit.Modele {
    interface IProduitFinancier {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dateTraitement: Date;
        libelleLongProduit: string;
        libelleCreationProduit: string;
        commentaireProduit: string;
        commentaireProduit1: string;
        codeEtatProduit: number;
        dateDebutSuspensionProduit: Date;
        dateMiseServiceProduit: Date;
        dateFinMiseServiceProduit: Date;
        dateCommercialisationProduit: Date;
        dateCreation: Date;
        codeAutreDuplicationProduit: number;
        dateAnnulationModification: Date;
        dateCloture: Date;
        codeFamilleControle: string;
        quotientFinancierAutre: number;
        codeEngagementRctb: number;
        codeDevise: string;
        montantMinimumCredit: number;
        montantMaximumCredit: number;
        pasSurMontantCredit: number;
        uniteDureeCredit: number;
        modeExpressionDureeCredit: number;
        dureeCredit: number;
        dureeCredit1: number;
        dureeCredit2: number;
        dureeCredit3: number;
        dureeCredit4: number;
        codePossibiliteMERMADDevise: number;
        codePossibilitePrefinancement: number;
        codePossibiliteDiffereAmortissement: number;
        codePossibiliteDiffereTotal: number;
        nombrePhaseAmortissement: number;
        codeGarantieObligatoire: number;
        nombrePeriodeValiditeOffreContrat: number;
        periodeBaseValiditeOffreContrat: number;
        codeEcheancierVersementContrat: number;
        numeroCalculDateEffetCredit: string;
        modeDetrVersement: string;
        numeroRegleCalculMontantVersement: string;
        numeroRegleCalculDatsVersement: string;
        evenementCalculDateLimiteVersement: string;
        dureePeriodeVersement: number;
        uniteDureeVersement: number;
        dureePeriodePremierVersement: number;
        unitePeriodePremierVersement: number;
        nombreMaximumVersement: number;
        montantMinimumVersement: number;
        codeConfirmationVersement: number;
        codePrimeDernierVersement: number;
        delaiPourJustificatifManquantMAD: number;
        delaiConfirmationVersement: number;
        delaiAnticipeVersement: number;
        codeTraitementIntrIntr: number;
        codeTraitementIntrIntr1: number;
        codeTraitementIntrIntr2: number;
        codeTraitementIntrIntr3: number;
        codeTraitementIntrIntr4: number;
        codeActuarielIntrIntr: number;
        numeroModulableCalculta: string;
        numeroRegleDateMERZero: string;
        jourDateEcheance: string;
        moisDateEcheance: string;
        moisDateEcheance1: string;
        moisDateEcheance2: string;
        moisDateEcheance3: string;
        moisDateEcheance4: string;
        moisDateEcheance5: string;
        codeIntrCompRa: number;
        compteurMAJ: number;
        codeCreditRelease: number;
        codeSousclasseBafi: string;
        codeDestinataireAutreObjet: number;
        codeTauxCreditDirecteur: number;
        referenceRessource: string;
        numeroOrdreClasse: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        indiceCompteCrrt: number;
        codeEligibiliteAPL: number;
        codeTypePretCbin: number;
        codeProduitRevision: number;
        codeAccessoireCompBonificationAutre: number;
        codeIndiceMargeNegocie: number;
        codeIndiceDerogationBorne: number;
        indicateurPossibilitePhaseMobln: number;
        codetaCRDReel: number;
        codeFamilleCommissionPres: string;
        phssAssuranceProduit: Array<IProduitPhase>;
        listeConditionTauxAssuranceProduit: Array<IConditionsDeTaux>;
        listeModeleRa: Array<IModalitesRemboursementParProduit>;
        listeModeleCalculHorsConvention: Array<IModalitesCalculHorsConventionParProduit>;
        transfertProduit: Array<ITranscodifProduit>;
        conditionSpecifiqueAssuranceProduit: Array<IConditionsSpecifiques>;
        vartDuree: Array<IVariationDuree>;
        listeInformationParametreChatel: Array<IProduitParamSimulationRevision>;
        phaseProduit: Array<IPhaseProduitS33A>;
        recuperationLesNatureGarantiePourCEProduit: Array<INaturesDeGarantieParProduit>;
        listeParametreAssuranceProduit: Array<IParamRevisionParProduit>;
        estModulable: boolean;
        estBonifiableFlat: boolean;
        estLissage: boolean;
        estPATZ: boolean;
        estECOPATZ: boolean;
        estECOPATZCOPRO: boolean;
        estPC: boolean;
        estPAS: boolean;
        estPEL: boolean;
        estCEL: boolean;
        estATauxRevisable: boolean;
    }
    interface IProduitPhase {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        dateTraitement: Date;
        dateFinApplication: Date;
        dateDebutApplication: Date;
        uniteDureeDunPhase: number;
        modeExpressionDureePhase: number;
        dureePhaseProduit: number;
        dureePhaseProduit1: number;
        dureePhaseProduit2: number;
        dureeDunPhasePas: number;
        periodiciteCalculIntr: number;
        periodiciteCalculIntr1: number;
        periodiciteCalculIntr2: number;
        periodiciteCalculIntr3: number;
        periodiciteCalculIntr4: number;
        periodiciteMERAmortissement: number;
        periodiciteMERAmortissement1: number;
        periodiciteMERAmortissement2: number;
        periodiciteMERAmortissement3: number;
        periodiciteMERAmortissement4: number;
        codePeriodiciteDiffereMER: number;
        codeRecouvrementIntrTermeEchu: number;
        codeRecouvrementAmortissementTermeEchu: number;
        codeTypeConfirmationTauxIntr: number;
        modeCalculTaux: number;
        nombreJourAnnulationNumerateur: number;
        modeCalculAmortissement: number;
        capitalReferenceTableConstante: number;
        typeAssietteRemboursement: number;
        codeVersementAutrePendantPhase: number;
        codeReductionDureePrefinancement: number;
        codePrelevementDureePrefinancement: number;
        codeTypePrefinancement: number;
        codeRecouvrementPartielIntr: number;
        codeCalculIntrRepr: number;
        codeCapitalIntrDiffere: number;
        calculIntrJourReel: number;
        periodiciteMERIntr: number;
        periodiciteMERIntr1: number;
        periodiciteMERIntr2: number;
        periodiciteMERIntr3: number;
        modeCapitalIntr: number;
        modeRecouvrementIntr: number;
        periodiciteCompositionIntr: number;
        codeModeExpressionTauxMoyenPhase: number;
        valeurMinimumTauxMoyenPhase: number;
        valeurMaximumTauxMoyenPhase: number;
        valeurConsolideTauxMoyenPhase: number;
        codeTauxPalierCalcul: number;
        codeIndice: string;
        nombreMaximumPeriodeVartDuree: number;
        codeOptionSurPhaseProduit: number;
        codeObjetOption: number;
        typeOption: number;
        codeCourtPourPresenceDopt: number;
        delaiCourtPresenceDopt: number;
        periodiciteOption: number;
        nombreJourAnnulationDenomination: number;
        quotientConsolideCapitalAmortissement: number;
        quotientMinimumCapitalAmortissement: number;
        quotientMaximumCapitalAmortissement: number;
        unitePeriodeValeurIntituleIndice: number;
        nombrePeriodeValeurIntituleIndice: number;
        codeTypeTraitementDech: number;
        quotientMaximumCapitalIfin: number;
        quotientConsolideCapitalAmortissement1: number;
        quotientMinimumCapitalAmortissement1: number;
        quotientMaximumCapitalAmortissement1: number;
        idRegleButoireDuree: string;
    }
    interface IConditionsDeTaux {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dureeMinimumPlageConditionTaux: number;
        dateTraitement: Date;
        dateFinApplication: Date;
        dateDebutApplication: Date;
        dureeMaximumPlageConditionTaux: number;
        codeModeExpressionTaux: number;
        codeIndice: string;
        tauxMoyenMinimumCredit: number;
        tauxMoyenMaximumCredit: number;
        tauxMoyenConsolideCredit: number;
        tauxRessource: number;
        codeIndexTauxConsolide: string;
        vartLindTauxConsolide: number;
        codeTypeParametrePondere: number;
        margeFixePourRevision: number;
        vartMargeFixePourRevision: number;
        codeTypeTranchePret0: string;
    }
    interface IModalitesRemboursementParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        numeroModeleRa: number;
        dateTraitement: Date;
        idConditionRa: string;
        idModeleCalculIndemniteRa: string;
        pourAssociationCalculModeleRa: number;
        pourAssociationRegleAutreRa: number;
        pourcentageMontantMinimumRaAutre: number;
        codeTypeAssietteMontantMinimumRa: number;
        codeAutreRaTotalInferieurMontantMinimum: number;
        sucouTaux: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
    }
    interface ITranscodifProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeProduitRestant: string;
        codeTypeRestant: string;
        codeRestant: string;
        dateDebutApplication: Date;
        libelleLongProduit: string;
    }
    interface IConditionsSpecifiques {
        idCaisseEpargne: number;
        idProduit: string;
        libelleLongProduit: string;
        idClasse: string;
        libelleClasse: string;
        nOrdreRatClasseProduit: number;
        nOrdreRatParagrapheClasse: number;
        titreParagraphe: string;
        corpsParagraphe: string;
        numeroRelation: number;
        codeMiseFormeParagraphe: string;
        codeTypeClasse: string;
    }
    interface IVariationDuree {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypeButoireDuree: number;
        numeroJeuxIndiceRevision: number;
        dateDebutApplication: Date;
        dureeMinimumPlageConditionTaux: number;
        dateFinApplication: Date;
        dureeMaximumPlageConditionTaux: number;
        regleDetrDall: string;
        nombrePeriodeAllongementDureeCredit: number;
        allongementDureeCredit: number;
        nombrePeriodeMinimumDallCredit: number;
        nombrePeriodeMaximumDallCredit: number;
        regleDetrReduction: string;
        nombrePeriodeReductionDureeCredit: number;
        reductionDureeCredit: number;
    }
    interface IProduitParamSimulationRevision {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        variableSimulationHausse: number;
        variableSimulationBaisse: number;
        idAgent: string;
        commentaireSimulationRevision: string;
    }
    interface IPhaseProduitS33A {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        constanteAppliqueTauxOmga: number;
        regleDetrTauxOmga: string;
    }
    interface INaturesDeGarantieParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeNatureGarantie: string;
        dateTraitement: Date;
        dateDebutApplication: Date;
        dateFinApplication: Date;
    }
    interface IParamRevisionParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        numeroJeuxIndiceRevision: number;
        numeroPeriodeRevision: number;
        nombreJeuxParametreRevision: number;
        idLoiRevision: string;
        codeEcheanceReclameParRevision: number;
        evenementDeclarationDebutPeriode: string;
        codeUnitePeriodeDebutRevision: number;
        nombrePeriodePourDeterminationDebutPeriode: number;
        dureePeriodeRevision: number;
        uniteDureePeriodeRevision: number;
        nombreEcheanceAvenantReclameMontant: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        libelleJeuxRevision: string;
    }
}

declare module instructionCredit.Modele {
    interface IProduit {
        libelle: string;
        famille?: instructionCredit.Modele.Produit;
        sousFamille?: instructionCredit.Modele.Produit;
    }
    class Produit implements IProduit {
        libelle: string;
        famille: instructionCredit.Modele.Produit;
        sousFamille: instructionCredit.Modele.Produit;
        /**
         * Construction d'un Produit
         * @param libelle: string
         * @param sousFamille: string - Facultatif. Est null pour une famille et une sous-famille
         * @param famille: string - Facultatif. Est null pour une famille
         */
        constructor(libelle: string, sousFamille?: instructionCredit.Modele.Produit, famille?: instructionCredit.Modele.Produit);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetTypeLogement {
        typeLogement: string;
        dateDebutValidite: number;
        dateFinValidite: number;
        dateCreation: number;
    }
}

declare module instructionCredit.Modele {
    interface IProposition {
        echeance: number;
        duree: number;
        montant: number;
        echeanceSouhaitee: number;
        dureeSouhaitee: number;
        endettementSouhaite: number;
        tauxSouhaite: number;
        coutTotalCredit: number;
        apport: number;
        compteCourant: boolean;
        prets: Array<instructionCredit.Modele.Pret>;
        fraisDossier: number;
        fraisCourtage: number;
        garantie: Array<instructionCredit.Modele.Garantie>;
        garantieCout: number;
        assurances: Array<instructionCredit.Modele.IAssurance>;
    }
    class Proposition {
        echeance: number;
        duree: number;
        montant: number;
        echeanceSouhaitee: number;
        dureeSouhaitee: number;
        endettementSouhaite: number;
        tauxSouhaite: number;
        coutTotalCredit: number;
        apport: number;
        compteCourant: boolean;
        prets: Array<instructionCredit.Modele.Pret>;
        fraisDossier: number;
        fraisCourtage: number;
        garantie: instructionCredit.Modele.Garantie;
        garantieCout: number;
        assurances: Array<instructionCredit.Modele.IAssurance>;
        constructor();
        constructor(donnees: Proposition);
    }
}

declare module instructionCredit.Modele {
    interface IPretReamenagement {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: Date;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: any;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idReamenagement: string;
        idInformationCompRegr: string;
        idws: string;
        origine?: string;
        libellePeriodicite?: string;
        complement?: InfoRegroupement;
        duree?: number;
    }
    class PretReamenagement implements IPretReamenagement {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: Date;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: any;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idReamenagement: string;
        idInformationCompRegr: string;
        idws: string;
        origine: string;
        libellePeriodicite: string;
        complement: InfoRegroupement;
        duree: number;
        constructor();
    }
    class PretReamenagementMaj {
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: Date;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: Date;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idws: string;
        constructor(pretReamenagement?: IPretReamenagement);
    }
    class InfoRegroupement {
        codeBanque: string;
        idDossierCommercialisation: string;
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: Date;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: string;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        idPretReamenagement: string;
        idws: string;
        constructor();
    }
    class InfoRegroupementMaj {
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: Date;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: string;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        idws: string;
        constructor(infoRegroupement?: Modele.InfoRegroupement);
    }
    interface IReamenagement {
        typeReamenagement: number;
        usagePretTres: number;
        ancnEcheance: number;
        capitalRestantDu: number;
        valeurAchtObjetFinancier: number;
        dureResdPretRefn: number;
        dateAcqsObjetRefn: string;
        coutAcqsObjetRefn: number;
        idProjet: string;
        listeIdPretReamenagement: Array<string>;
        idws: string;
        sommeRemboursementAnticipe?: number;
        montantTotalDu?: number;
    }
    class ReamenagementMaj {
        typeReamenagement: number;
        usagePretTres: number;
        ancnEcheance: number;
        capitalRestantDu: number;
        valeurAchtObjetFinancier: number;
        dureResdPretRefn: number;
        dateAcqsObjetRefn: string;
        coutAcqsObjetRefn: number;
        idws: string;
        constructor(reamenagement?: IReamenagement);
    }
    class IDetailPret {
        idws: string;
        informationPret: Modele.IPretReamenagement;
        informationRegroupement: Modele.InfoRegroupement;
        origine: string;
        constructor();
    }
}

declare module instructionCredit.Modele {
    class RechercherDossier {
        types: instructionCredit.Modele.RechercherDossierStructure;
        dateDeTraitement: number;
        champsAgent: string;
        champsStructure: string;
        idAgentProprietaireDossier: string;
        premierElementStructure: string;
        deuxiemeElementStructure: string;
        troisiemeElementStructure: string;
        quatriemeElementStructure: string;
        cinquiemeElementStructure: string;
        sixiemeElementStructure: string;
        codeEtatDossier: string;
        codeTypeDestinataire: string;
        idDossier: string;
        nomRaisonSocialeEmprunt: string;
        referenceExterneDossier: string;
        idEntiteTitulaireClient: string;
        dateDebutPeriode: Date;
        dateFinPeriode: Date;
        dateDebutPeriode1: Date;
        dateFinPeriode1: Date;
        nomPres: Date;
        dateDebutPeriodeSigneNotaire: Date;
        dateFinPeriodeSigneNotaire: Date;
        codeVisbInstruction: string;
        codeDevise: string;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeOrigineDemande: string;
        codeApplicationChargeDossier: string;
        codeImprParExpressionVersement: string;
        codeEtapeSimulation: string;
        idParentPrincipal: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        suiteDossier: string;
        /**
         * Construction de l'objet rechercher dossier
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class RechercherDossierStructure {
        idCaisseEpargne: number;
        codeTypeDelmStructure: string;
        libelleTypeDelmStructure: string;
        codeIndiceDentProprietaire: number;
        codeIndiceStructureInstruction: number;
        rangNiveauStructure: number;
        codeMetierCreditEDS: number;
        /**
         * Construction de l'objet structure d'origine du dossier
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IRedacteurActe {
        personne?: string;
        dateNaissance?: Date;
        siren?: string;
        raisonSociale?: string;
    }
    class RedacteurActe {
        personne: string;
        dateNaissance: Date;
        siren: string;
        raisonSociale: string;
        /**
         * Construction d'un rédacteur
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class TypeCharge {
        idCaisseEpargne: number;
        typeCharge: string;
        libelleCharge: string;
        codeSigneCharge: number;
        tauxPondereRessourceCharge: number;
        numeroOrdreClasse: number;
        codeUsageTypologieCharge: number;
        typeRessource: string;
        /**
         * Construction d'un type de revenu
         * @param libelle: string - Nom du type de revenu
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class TypeRevenu {
        idCaisseEpargne: number;
        typeRessource: string;
        commissionRessource: string;
        codeSigneRessource: number;
        tauxPondereRessourceCharge: number;
        numeroOrdreClasse: number;
        codeUsageTypologieRessource: number;
        typeDeRessource: string;
        /**
         * Construction d'un type de revenu
         */
        constructor();
    }
}

declare module instructionCredit.Service {
    class AgentExterneService {
        static $inject: Array<string>;
        estAgentExterne: boolean;
        constructor();
        /**
         * Indique si l'agent utilisé sur le dossier est externe (gestion CFF, mandataire agent externe
         * Peut engendrer des restrictions
         * @param {Modele.IDossierSchema} dataDossier
         * @param {MyWay.Services.Context.AuthentificationInfo} utilisateurConnecte
         */
        setAgentIsAgentExterne(dataDossier: Modele.IDossierSchema, utilisateurConnecte: MyWay.Services.Context.AuthentificationInfo): void;
    }
}

declare module instructionCredit.Service {
    class AssuranceService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private _listeTypeAssurance;
        private _listeConventionAssurance;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer les conventions d'assurances compatibles avec le produit
         * @param idDossier : string
         * @param listeIdentifiantProduit : string[]
         * @param ageMax : string
         * @return promise<IConventionAssurance>
         */
        listerScConvAss(idDossier: string, listeIdentifiantProduit: string[], ageMax: number): ng.IPromise<Modele.IConventionAssurance[]>;
        /**
         * Permet de récupérer le détail de plusieurs conventions d'assurance
         * Les données chargées sont stockées dans la session
         * @return ng.IPromise<IParametreApplicatif[]>
         */
        listerConventionsAssuranceAvecDetail(codeEtablissement: string, listeIdsConventionsSouhaitees: string[]): ng.IPromise<Modele.IConventionAssurance[]>;
        /**
         * Permet de récupérer le détail d'une convention d'assurance
         * @param identifiantConvention : string
         * @return promise<IConventionAssurance>
         */
        private getDetailConventionAssurance(codeEtablissement, identifiantConvention);
        /**
         * Récupère les conventions d'assurance demandées en se basant sur les données chargées en session au préalable
         * @return IConventionAssurance[]
         */
        private filtrerConventionsAssurance(listeIdsConventions);
        /**
         * Permet de récupérer les types d'assurances
         * @return promise<ITypeAssurance[]>
         */
        listerTypeAssurance(codeEtablissement: string): ng.IPromise<Modele.ITypeAssurance[]>;
        /**
         * Permet d'ajouter une assurance
         * @param identifiantDossier : string
         * @param listeIdwsCreditCouvertureParAss : string[]
         * @param identifiantPersonne : string
         * @param identifiantConventionAssurance : string
         */
        ajouterAssAvcControl(identifiantDossier: string, listeIdwsCreditCouvertureParAss: string[], identifiantPersonne: string, identifiantConventionAssurance: string): ng.IPromise<Modele.IResultatAjouterAssuranceAvecControles>;
        /**
         * Récupère la liste des idws d'une assurance (assurance + couvertures + cotisations)
         */
        getAllIdwsAssurance(assurance: Modele.IAssuranceSchema): string[];
    }
}

declare module instructionCredit.Service {
    /**
     *  Fonctions manipulant les informations afin de controler le dossier
     */
    class AuthentificationService {
        private $q;
        private serviceAgentExtended;
        private navigationService;
        private $location;
        private initialisationService;
        private clientService;
        private projetService;
        private financementService;
        private controleDossierService;
        private cookieFactory;
        private navigationInterneService;
        private personnalisationService;
        static $inject: string[];
        private _entiteTitulaire;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, $location: ng.ILocationService, initialisationService: Service.InitialisationService, clientService: Service.ClientService, projetService: instructionCredit.Service.ProjetService, financementService: Service.FinancementService, controleDossierService: instructionCredit.Service.ControleDossierService, cookieFactory: instructionCredit.Service.CookieFactory, navigationInterneService: instructionCredit.Service.NavigationInterneService, personnalisationService: instructionCredit.Service.PersonnalisationService);
        /**
         *   Initialise les données nécessaire pour naviguer dans toute l'application
         */
        initDonneesSession(): ng.IPromise<void>;
        /**
         *   Initialise les données pour la reprise de dossier en cas de fermeture intempestive
         */
        repriseDossier(valeursCookie: Modele.ICookieRepriseDossier): ng.IPromise<void>;
        /**
         *   Récupère les informations de l'utilisateur depuis le contexte
         */
        private getContext();
        /**
         *   Actionne les actions en fonction de l'existance d'un dossier ou non
         */
        private gererDossierSession();
        /**
         *   Ouvre un dossier existant
         */
        private ouvertureDossier(dossierComplet);
        /**
         *   Crée un dossier
         */
        private creationDossier();
        /**
         *   Récupère le dossier complet
         */
        private recupererDossierComplet(idDossier);
        /**
         * Initialise les données personnalisées de l'utilisateurs
         */
        private initialisationPreferences();
    }
}

declare module instructionCredit.Service {
    class CalculService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de calculer le Reste à vivre, le taux d'endettement et l'échéance maxi
         * @return promise<CapaciteRemboursement>
         */
        getCapaciteRemoursement(listeRessourceCharge: Modele.IEntreeRessourceCharge[], echeance?: Object, endettement?: Object): ng.IPromise<Modele.ICapaciteRemboursement>;
        /**
         * Permet de calculer les frais de notaire
         * @param montant de l'aquisition ou du terrain
         * @param toc
         * @param tor
         * @return promise<number>
         */
        calculFraisNotaires(montant: number, toc: string, tor: string): ng.IPromise<number>;
    }
}

declare module instructionCredit.Service {
    class ClientService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private _listeTypeRevenu;
        private _listeTypeCharge;
        private _listeCategorieEmprunteur;
        private _listeSituationFamilialeEmprunteur;
        private _listeCatSocioProfessionnelle;
        private _listeAdrRisqueEpargne;
        emprunteur: Modele.IEmprunteur;
        listeRessourcesCharges: Modele.IEntreeRessourceCharge[];
        listeAdrOpposition: Modele.IAdrOpposition[];
        listePersonnesDossier: Modele.IPersonne[];
        personnesAffectation: Array<Modele.PersonneAffectation>;
        codeIntitulePersonne: string[];
        typePersonne: string;
        telephoneEmprunteur: string;
        endettement: Modele.IEndettement;
        revenus: Modele.IRevenuPersonne[];
        charges: Modele.IChargePersonne[];
        revenusFiscaux: Modele.IRevenuFiscalPersonne[];
        epargnesCE: Modele.IEpargnePersonne[];
        epargnesHorsCE: Modele.IEpargnePersonne[];
        comptesCE: Modele.IComptePersonne[];
        comptesHorsCE: Modele.IComptePersonne[];
        contratsEpargneLogement: Modele.IContratEpargneLogement[];
        personne: Modele.IPersonne;
        idDossier: string;
        codeEtablissement: string;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer l'ensemble des types de revenus
         */
        getTypeRevenus(): ng.IPromise<Array<instructionCredit.Modele.TypeRevenu>>;
        /**
         * Permet de récupérer les différentes catégories d'emprunteur
         */
        getCategoriesEmprunteur(): ng.IPromise<Array<instructionCredit.Modele.CategorieEmprunteur>>;
        /**
         * Permet de récupérer les différentes situations familiales d'emprunteur
         */
        getSituationsFamilialesEmprunteur(): ng.IPromise<Array<instructionCredit.Modele.SituationFamilialeEmprunteur>>;
        /**
         * Permet de récupérer les différentes situations familiales d'emprunteur
         */
        getStatutOccupationLogementEmprunteur(): ng.IPromise<Object[]>;
        /**
         * Permet de récupérer l'ensemble des types de revenus
         */
        getTypeCharges(): ng.IPromise<Array<instructionCredit.Modele.TypeCharge>>;
        /**
         * Permet de récupérer le détail de l'emprunteur
         * @param identifiantDossier : string
         * @return promise<Emprunteur>
         */
        getEmprunteur(identifiantDossier: string): ng.IPromise<instructionCredit.Modele.IEmprunteur>;
        /**
         * Permet de récupérer le détail d'une personne physique ou morale
         * @param identifiantDossier : string
         * @param identifiantPersonne : string
         * @return promise<Personne>
         */
        getPersonne(identifiantDossier: string, identifiantPersonne: string): ng.IPromise<instructionCredit.Modele.IPersonne>;
        /**
         * Permet de récupérer le détail de l'emprunteur
         * @param identifiantDossier : string
         * @param identifiantActivite : string
         * @return promise<IActivitePersonne>
         */
        getActivitePersonne(identifiantDossier: string, identifiantActivite: string): ng.IPromise<instructionCredit.Modele.IActivitePersonne>;
        /**
         * Permet de récupérer le d'une charge
         * @param identifiantDossier : string
         * @param identifiantCharge : string
         * @return promise<IChargePersonne>
         */
        getChargePersonne(identifiantDossier: string, identifiantCharge: string): ng.IPromise<instructionCredit.Modele.IChargePersonne>;
        /**
         * Permet de récupérer un revenu fiscal
         * @param identifiantDossier : string
         * @param identifiantRevenu : string
         * @return promise<IRevenuFiscalPersonne>
         */
        getRevenuFiscal(identifiantDossier: string, identifiantRevenu: string): ng.IPromise<instructionCredit.Modele.IRevenuFiscalPersonne>;
        /**
         * Permet de récupérer un revenu
         * @param identifiantDossier : string
         * @param identifiantRevenu : string
         * @return promise<IRevenuPersonne>
         */
        getRevenuPersonne(identifiantDossier: string, identifiantRevenu: string): ng.IPromise<instructionCredit.Modele.IRevenuPersonne>;
        /**
         * Permet de récupérer des ADR Risque Epargne
         */
        getAdrRisqueEpargne(): ng.IPromise<Array<Modele.IAdrRisqueEpargne>>;
        /**
         * Permet de récupérer un compte
         * @param identifiantDossier : string
         * @param identifiantCompte : string
         * @return promise<IComptePersonne>
         */
        getCompte(identifiantDossier: string, identifiantCompte: string): ng.IPromise<instructionCredit.Modele.IComptePersonne>;
        /**
         * Permet de récupérer une Famille d'epargne
         * @param identifiantDossier : string
         * @param identifiantEpargne : string
         * @return promise<IEpargnePersonne>
         */
        getEpargne(identifiantDossier: string, identifiantEpargne: string): ng.IPromise<instructionCredit.Modele.IEpargnePersonne>;
        /**
         * Permet d'ajouter ou de modifier une charge
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param charge : ChargePersonneMaj
         */
        addChargePersonne(idDossier: string, idEmprunteur: string, charge: instructionCredit.Modele.ChargePersonneMaj): ng.IPromise<instructionCredit.Modele.IChargePersonne>;
        /**
         * Permet de récupérer les différentes catégories socio-professionnelles
         */
        getCategoriesSocioPro(): ng.IPromise<Array<Modele.ICatSocioProfessionnelle>>;
        /**
         * Permet de récupérer les entités titulaires en fonction d'une personne
         * @param codeEtablissement : string
         * @param identifiantTiers : string
         * @return promise<IEntiteTitulaire[]>
         */
        getEntitesTitulaires(codeEtablissement: string, identifiantTiers: string): ng.IPromise<Modele.IEntiteTitulaire[]>;
        /**
         * Permet de rechercher une personne
         * @param codeEtablissement : string
         * @param identifiantPersonne : string
         * @param: nom: string
         * @param: prenom : string
         * @return promise<IEntiteTitulaire[]>
         */
        getPersonneTiers(identifiantPersonne: string): ng.IPromise<Modele.IParticulierInformation>;
        /**
         * Permet de récupérer les informations de l'entite titulaire
         * @param codeEtablissement : string
         * @param identifiantEntiteTitulaire : string
         * @return promise<IInformationEntiteTitulaire>
         */
        getInformationsEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Modele.IInformationEntiteTitulaire>;
        /**
         * Permet de creer un dossier
         */
        creerDossier(canalDeCreation: string): ng.IPromise<any>;
        /**
         * Permet d'ajouter ou de modifier un revenu fiscal
         * @param idDossier : string
         * @param revenuFiscal : RevenuFiscalPersonne
         */
        addRevenuFiscalPersonne(idDossier: string, revenuFiscal: instructionCredit.Modele.RevenuFiscalPersonne): ng.IPromise<instructionCredit.Modele.IRevenuFiscalPersonne>;
        /**
         * Permet d'ajouter ou de modifier un revenu
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param revenu : RevenuPersonneMaj
         */
        addRevenuPersonne(idDossier: string, idEmprunteur: string, revenu: instructionCredit.Modele.RevenuPersonneMaj): ng.IPromise<instructionCredit.Modele.IRevenuPersonne>;
        /**
         * Permet d'ajouter ou de modifier un compte
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param compte : ComptePersonneMaj
         */
        addComptePersonne(idDossier: string, idEmprunteur: string, compte: instructionCredit.Modele.ComptePersonneMaj): ng.IPromise<any>;
        /**
         * Permet d'ajouter ou de modifier une epargne
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param epargne : EpargnePersonneMaj
         */
        addEpargnePersonne(idDossier: string, idEmprunteur: string, epargne: instructionCredit.Modele.EpargnePersonneMaj): ng.IPromise<Modele.IEpargnePersonne>;
        /**
         * Permet de récupérer les différentes oppositions
         */
        getAdrOpposition(): ng.IPromise<Array<instructionCredit.Modele.IAdrOpposition>>;
        /**
         * Permet de récupérer les paramétrages du Reste A vivre
         */
        listerParamsResteAVivre(): ng.IPromise<instructionCredit.Modele.IParamsResteAVivre[]>;
        /**
         * Permet de créer une liste de ressources
         */
        definirRessources(idDossier: string, idPersonneEmprunt: string, listeRessourceMAJ: Array<Modele.RevenuPersonneMaj>): ng.IPromise<Array<Modele.IRevenuPersonne>>;
        /**
         * Permet de créer une liste de charges
         */
        definirCharges(idDossier: string, idPersonneEmprunt: string, listeChargeMAJ: Array<Modele.ChargePersonneMaj>): ng.IPromise<Array<Modele.IChargePersonne>>;
        /**
         * Permet de récupérer les informations de l'entite titulaire
         * @param idPersonne : string
         * @param typeCompositionRelation : string
         * @return promise<any>
         */
        getTiersClient(idPersonne: string, typeCompositionRelation: string): ng.IPromise<any>;
        /**
         * Permet de récupérer les informations d'une personne via un identifiant
         * @param idDossier : string
         * @param identifiantPersonne : string
         * @param numeroCarteBancaire : string
         * @param numeroInsee : string
         * @param typeRolePersonne : string
         * @param codeTypePersonne : string
         * @param idEntiteTitulaireClient : string
         * @param codeTypeMarche : string
         * @return promise<any>
         */
        lirePersonne(idDossier: string, identifiantPersonne: string, numeroCarteBancaire: string, numeroInsee: string, typeRolePersonne: string, codeTypePersonne: string, idEntiteTitulaireClient: string, codeTypeMarche: string): ng.IPromise<Modele.IResultatGarant>;
        /**
         *  Récupèration du statut
         *  P(80): Conservé - A(65): Non conservé - F(70): Future
         */
        getLibelleStatutRessourceApreOper(codeExisteRessourceApreOper: number): string;
        /**
         * Permet de définir un emprunteur depuis une liste de personnes (pour ajout ou suppression de personne)
         * @param: identifiantDossier
         * @param: listePersonnePhysiqueMaj
         */
        definirEmprunteurDepuisListePersonne(idDossier: string, listePersonnePhysiqueMaj: Array<Modele.PersonnePhysiqueMaj>): ng.IPromise<Modele.IEmprunteur>;
        /**
         * Récupération et création des revenus et charges de tiers client
         */
        creationRevenusEtChargesConnaissanceClient(idDossier: string, indexRecursivite: number, personnes: Modele.IPersonne[], revenusParPersonne: Modele.RevenuPersonneMaj[][], chargesParPersonne: Modele.ChargePersonneMaj[][], appelClient: boolean): ng.IPromise<any>;
        /**
         * création des ressources et charges
         */
        creationRevenusEtCharges(idDossier: string, idwsPersonne: string, revenus: Modele.RevenuPersonneMaj[], charges: Modele.ChargePersonneMaj[]): ng.IPromise<any>;
        /**
         * Permet de gérer des fonctions synchrones pour la création de ressouces et charges
         */
        private promessesSynchronesDefinirRC<T>(list, fonctionPromise);
    }
}

declare module instructionCredit.Service {
    interface IDataAjustementsEpargneLogement {
        creditInterne: Modele.ICreditInterne;
        estPel: boolean;
        resultatCalculEL: Modele.IResultatCalculEL;
    }
    interface IParamsImpressionEL {
        listeDroitsAcquis: Array<Modele.IDroitAcquisEL>;
        listeDroitsAPrets: Array<Modele.IDroitAPretEL>;
        periodiciteDroits: number;
        dureeAnneeCredit: number;
        taux: number;
        montant: number;
        echeance: number;
    }
    class ContratEpargneLogementService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private _liensParente;
        private _montantsEncoursEL;
        dataAjustementsEpargneLogement: IDataAjustementsEpargneLogement;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Formate le titre de l'épargne logement
         * @param {Modele.IContratEpargneLogement} oContratEL
         * @returns
         */
        getTitreEpargneLogement(codeTypeEL: number): string;
        convertionIdContratToRice(idcontrat: string): MyWay.Model.Rice;
        convertionRiceToIdContrat(rice: MyWay.Model.Rice): string;
        /**
         * Permet de contrôler si des erreurs sont présentes dans l'étape 1 de la popin
         */
        controleErreurEtape1(contratEL: Modele.IContratEpargneLogement, rice: MyWay.Model.Rice, dateCreationDossier: string): string[];
        /**
         * Permet de lister les liens de parenté
         */
        listerLienParente(): ng.IPromise<Modele.ILienParente[]>;
        /**
         * Permet d'ajouter un contrat Epargne Logement
         */
        ajouterContratEpargneLogement(identifiantDossier: string, contratEpargneLogementMAJ: Modele.ContratEpargneLogementMaj): ng.IPromise<Modele.IContratEpargneLogement>;
        /**
         * Permet de calculer la somme des encours EL
         */
        calculerEnCoursEL(identifiantDossier: string, idwsProjet: string, idProduit: string): ng.IPromise<Modele.IResultatCalculEnCoursEL>;
        /**
         * Permet de calculer la somme des encours EL
         * @param identifiantDossier: string
         * @returns Modele.IContratEpargneLogement[]
         */
        rapatrierContratEL(identifiantDossier: string): ng.IPromise<Modele.IContratEpargneLogement[]>;
        /**
         * Permet de lister les montants d'encours d'Eparne Logement
         */
        /**
         * Permet de lister les droits acquis pour un PEL/CEL
         */
        listerDroitsAcquisEL(identifiantDossier: string, idCredit: string, periodicite: string): ng.IPromise<Modele.IResultatCalculEL>;
        /**
         * Permet de lister les droits à prêt pour un PEL/CEL
         */
        listerDroitsAPretEL(identifiantDossier: string, idCredit: string, periodicite: string): ng.IPromise<Modele.IDroitAPretEL[]>;
        /**
         * Permet de calculer le crédit EL
         */
        calculerCreditEL(identifiantDossier: string, idCredit: string, periodicite: string, duree: number, montant: number, estEcheance: boolean, estManuel: boolean): ng.IPromise<Modele.IResultatCalculEL>;
        /**
         * Permet de retenir le crédit EL dans la propostion
         */
        retenirPropositionEL(identifiantDossier: string, idCredit: string, periodicite: string, duree: number, montantPret: number, montantEcheance: number, tauxPret: number, estEcheance: boolean, estManuel: boolean): ng.IPromise<any>;
        /**
         * Permet de retenir le crédit EL dans la propostion
         */
        editerDocumentEL(identifiantDossier: string, idCredit: string, params: IParamsImpressionEL): ng.IPromise<any>;
    }
}

declare module instructionCredit.Service {
    /**
     *  Fonctions manipulant les informations afin de controler le dossier
     */
    class ControleDossierService {
        private $q;
        private $location;
        private modalService;
        private navigationService;
        private initialisationService;
        private navigationInterneService;
        static $inject: Array<string>;
        btnControleStyle: string;
        btnControleIcone: string;
        verificationContinue: boolean;
        listeControlesPageActuelle: Array<Modele.AnomalieDossier>;
        chargementControlesEnCours: boolean;
        constructor($q: ng.IQService, $location: ng.ILocationService, modalService: MyWay.UI.IModalService, navigationService: MyWay.UI.INavigationService, initialisationService: Service.InitialisationService, navigationInterneService: instructionCredit.Service.NavigationInterneService);
        /**
         * Gère les contrôles sur le dossier : pour la page précedente et la page actuelle
         *  Cas particuliers: this.verificationContinue = true
         *      Rachat :        T0C à 148; TOR à B7
         *      Regroupement :  TOC à 145; TOR à A6
         * Retour true si des anomalies bloquantes sont présentes : pas de chargement possible car la redirection est obligatoire
         */
        gererControleDossier(fermetureDossier?: boolean): ng.IPromise<boolean>;
        /**
         *  Récupère les controles pour la page actuellement traitée en rechargement les données
         */
        chargerControlesDossierPageActuelleForcee(): ng.IPromise<void>;
        /**
         *  Récupère les controles pour la page qui vient d'être traitée auparavant (elle vient d'être quittée)
         *  Retour true si des anomalies bloquantes sont présentes : pas de chargement possible car la redirection est obligatoire
         */
        private gererControlesDossierPageSortante(listeControles, fermetureDossier);
        /**
         * Ouvre la popin d'information sur les controles pour la page traitée actuellement
         */
        ouvrirPopinControlesPageActuelle(): void;
        /**
         *  Récupère les controles pour la page actuellement traitée
         */
        private chargerControlesDossierPageActuelle(listeControles);
        /**
         * En fonction de la paage ou de l'action (fermeture), indique quels type de contrôle doivent être pris en compte
         */
        private getTypesControleByPage(pathPage);
        /**
         * Filtre les contrôles de dossier en fonction des types de contrôles propres à la page
         */
        private getControlesDossierByPage(listeControles, listeTypeControles);
        /**
         * Selon l'url, indique le titre de la page traitée
         */
        private getTitreByUrlPage(pathPage);
        /**
         *  Les anomalies bloquantes sont les anomalies de typeControle 0 et de typeAno 1;
         *  Return true si les anomalies doivent obligatoirement être prise en compte
         */
        private existeAnomaliesBloquantes(listeControles);
        /**
         *  Affiche les point de contrôle qu'il faut prendre et redirige l'utilisateur vers la page correspondante
         */
        private popinControleDossier(listeControles, pageTraitee, avecRedirection, pageActuelle);
    }
}

declare module instructionCredit.Service {
    class CookieFactory {
        private initialisationService;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(initialisationService: Service.InitialisationService);
        /**
         *   Crée un cookie de reprise de dossier en cas de fermeture intempestive
         */
        creationCookieReprise(idDossier: string, codeAction: string): void;
        /**
         *   Supprime le cookie de reprise de dossier
         */
        suppressionCookieReprise(): void;
    }
}

declare module instructionCredit.Service {
    class CreditConsoService {
        private $q;
        private initialisationService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, initialisationService: Service.InitialisationService);
        /**
         * Mise à jour du crédit existant
         * @param {Modele.CreditExistant} creditConso
         * @param {Modele.CreditExistant} creditConsoDepart
         * @param {boolean} enCreation
         * @returns
         */
        majCreditExistantComplet(creditConso: Modele.CreditExistant, creditConsoDepart: Modele.CreditExistant, enCreation: boolean): ng.IPromise<Modele.CreditExistant>;
        /**
         * Le crédit complémentaire est composé de 2 objets : charge et crédit existant
         * Ici est géré la maj de la partie crédit existant
         */
        majPartieCreditExistant(creditConso: Modele.CreditExistant, creditConsoDepart: Modele.CreditExistant, enCreation: boolean): ng.IPromise<Modele.CreditExistant>;
        /**
         * Enregistre les données pour la phase du crédit Conso
         */
        private majPhase(creditConso, enCreation);
        /**
         * Le crédit complémentaire est composé de 2 objets : charge et crédit existant
         * Enregitre ici les données de type Charge
         */
        private majPartieCharge(creditConso, creditConsoDepart);
    }
}

declare module instructionCredit.Service {
    interface ICreditInterneModale {
        produitFinancier: Modele.IProduitFinancier;
        estPtz: boolean;
        creditPrisEnCompte?: boolean;
        listeNombrePeriodesCredit?: number[];
        montantCreditInterieur?: number;
        tauxProp?: number;
        inclurePriorite?: boolean;
        libelleLabelTauxDefini?: string;
        dataPtz?: ICreditInterneModalePtz;
    }
    interface ICreditInterneModalePtz {
        typeMensualite: string;
        phaseDiffereTotal: Modele.ICreditPhase;
        phaseDiffereTotalProduitFinancier: Modele.IProduitPhase;
        dureePhaseDiffereTotalTmp: number;
        uniteDureePhaseDiffereTotal: string;
        phaseAmortissement: Modele.ICreditPhase;
        phaseAmortissementProduitFinancier: Modele.IProduitPhase;
        dureePhaseAmortissementTmp: number;
        uniteDureePhaseAmortissement: string;
        erreursPtz: string[];
    }
    class CreditInterneService {
        private financementService;
        private initialisationService;
        private fraisAccessoiresService;
        private modaleFactory;
        private $q;
        private serviceAgentExtended;
        static EVENEMENT_FERMETURE_MODALE: string;
        static EVENEMENT_FERMETURE_MODALE_DETAIL: string;
        static EVENEMENT_LOADER: string;
        static EVENEMENT_CHARGEMENT_PRODUIT_FINANCIER: string;
        private _caissesRegleNeo;
        _regleNeoActive: boolean;
        dataAjustementCreditInterne: any;
        boutonCalculManuel: boolean;
        static $inject: string[];
        constructor(financementService: Service.FinancementService, initialisationService: Service.InitialisationService, fraisAccessoiresService: Service.FraisAccessoiresService, modaleFactory: instructionCredit.Service.ModaleFactory, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *  Charge le produit financier et initisalise les valeurs
         */
        initialisationCreditInterne(creditInterne: Modele.ICreditInterne): ng.IPromise<ICreditInterneModale>;
        /**
         *  Initisalise les données nécessaires au PTZ
         */
        private initialisationPtz(produitFinancier, creditPtz, creditPrisEnCompte);
        /**
         *  Gère une règle de gestion issue de néo
         *  Pour le mode d'expression 3 : un paramétrage NEO (dans le fichier paramétre FIPARAM) contient 3 établissements 14265,12579,13825
         *  pour lesquels l'utilisateur doit saisir la marge et non pas le taux. Le socle ne sachant pas gérer à ce jour une mise à jour en marge,
         *  il faut que l'IHM mycredimmo déduise le taux en additionnant la marge plus l'indice afin d'envoyer la taux résultant au socle NEO.
         */
        private gestionRegleNeo(tauxInitial);
        /**
         *  Vérification du taux
         */
        verificationTaux(creditInterne: Modele.ICreditInterne, produitFinancier: Modele.IProduitFinancier): string;
        /**
         *  Vérification de la durée
         */
        verificationBornesDuree(creditInterne: Modele.ICreditInterne, produitFinancier: Modele.IProduitFinancier): string;
        /**
         *  Pour le mode d'expression 4 : La marge par défaut est en fonction de la durée du crédit
         */
        majDureeCredit(creditInterne: Modele.ICreditInterne, produitFinancier: Modele.IProduitFinancier): void;
        /**
         *  Récupère les champs à afficher en fonction du type de crédit
         */
        getChampsAffiches(produitFinancier: Modele.IProduitFinancier, modeManuel: boolean): Object;
        /**
         * Permet de calculer une proposition
         */
        calculerPropositionOptimisation(listePaliersContraints: Modele.PalierContraint[], setLoader: (value: boolean) => void, resetDonneesApresOptimisation: (resultatPlanOptimisation: Modele.IResultatPlanOptimisation) => void): ng.IPromise<void>;
        /**
         * Permet de continuer le calcul d'optim avancé
         */
        private continuerCalculOptimisationAvancee(resultatOptim, setLoader, resetDonneesApresOptimisation);
        /**
         * Recupère les erreurs fonctionelles des crédits : taux d'usure
         * @param {Modele.IResultatPlanOptimisation} resultatPlanOptimisation
         */
        private getErreursFonctionnelles(resultatPlanOptimisation);
        validerModeOptimise(modaleData: Service.ICreditInterneModale, creditInterneTemporaire: Modele.ICreditInterne, erreurs: {
            erreurTaux: string;
            erreurDuree: string;
        }, modeCreation: boolean, fermeturePopin: () => void): void;
        /**
         * Initialisation des lignes de phases
         */
        initLignesPhases(phases: Modele.ICreditPhase[], produitFinancier: Modele.IProduitFinancier): Modele.ILignePhaseCredit[];
        /**
         * Mise à jour des phases
         */
        majPhases(indexRecursivite: number, lignesPhase: Modele.ILignePhaseCredit[], idwsCreditInterne: string, identifiantClasses: string, phasesMaj: Object[]): ng.IPromise<boolean>;
        /**
         * Récupération de l'indice de phase en fonction du code type phase
         */
        getIndicePhase(codeTypePhase: string): number;
        /**
         * Récupération de l'identifiant de la classe MAJ
         */
        getIdentifiantClassePhase(codeTypePhase: string): string;
        /**
         *  Ajoute un ptz à la liste des crédits
         */
        ajoutCreditPtz(optim: boolean): ng.IPromise<void>;
        /**
         *  Supprime le ptz à la liste des crédits
         *  Vérifie si un ptz exsite déjà
         */
        suppressionCreditPtz(): ng.IPromise<void>;
        /**
         * Gestion activation du bouton calcule en mode manuel
         */
        getBoutonCalculManuel(creditInterne: Modele.ICreditInterne, mensualite: number, calculMensualiteAFaire: boolean): boolean;
        /**
         * Permet d'ajouter un crédit
         * @param idDossier : string
         * @param idPlan : string
         * @param idProduit : string
         * @param montant : number
         */
        ajouterCreditInterne(idDossier: string, idPlan: string, idProduit: string, montant: number, initMontant: boolean, enOptim: boolean): ng.IPromise<instructionCredit.Modele.ICreditInterne>;
    }
}

declare module instructionCredit.Service {
    class FinancementService {
        private $q;
        private serviceAgentExtended;
        private navigationService;
        private navigationInterneService;
        private modaleFactory;
        static $inject: string[];
        private _listeProduitFinancier;
        loader: boolean;
        listeIdsProduitsStandard: Array<string>;
        listeIdsProduitsLissage: Array<string>;
        listeIdsProduitsStandardManuel: Array<string>;
        listeProduitsAutorises: Array<instructionCredit.Modele.IProduitsAutorises>;
        listeFamillesProduits: Array<instructionCredit.Modele.IFamillesProduits>;
        listeGammeLissage: Array<instructionCredit.Modele.IGammeLissage>;
        elements: Array<any>;
        listeCreditsInterne: Array<instructionCredit.Modele.ICreditInterne>;
        listeCreditsExterne: Array<instructionCredit.Modele.ICreditExterne>;
        listeCreditsComplementaires: Array<Modele.CreditExistant>;
        listePlanFinancementDetail: Array<Modele.IPlanFinancementSchema>;
        planFinancementSchema: Modele.IPlanFinancementSchema;
        planFinancementActif: Modele.IPlanFinancementDetail;
        idwsPlanActif: string;
        listeErreursFinancement: Array<Modele.ErreurFormulaire>;
        propositionSelected: number;
        affichageBlocCritereRemboursement: boolean;
        modalite: instructionCredit.Modele.ISelectbox;
        assuranceIncluse: boolean;
        echeanceMax: number;
        echeanceResultante: number;
        endettementMax: number;
        endettementResultant: number;
        eligibilite: Modele.IResultatEligibilite;
        calculOptimAvancee: Modele.EntreeOptimisationAvancee;
        codeEtablissement: string;
        dataModificationCreditInterne: any;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, navigationInterneService: Service.NavigationInterneService, modaleFactory: Service.ModaleFactory);
        /**
         * Permet de récupérer le contenu du projet
         * @param identifiantDossier : string
         * @param identifiantProjet : string
         * @return promise<PlanFinancement>
         */
        getProjetFinancement(identifiantDossier: string, identifiantPlanFinancement: string): ng.IPromise<instructionCredit.Modele.IPlanFinancementDetail>;
        /**
         * Permet de récupérer les crédits existants du projet actuelle pouvant être ajouté au financement
         * @param idDossier : string
         * @param idProjet : string
         * @return promise<Array<Modele.ICreditExistant>>
         */
        getCreditsExistant(idDossier: string, idProjet: string): ng.IPromise<Array<Modele.ICreditExistant>>;
        /**
         * Permet de récupérer la liste des ids des produits autorisés pour le projet
         */
        listerIdsProduitsAutorises(identifiantDossier: string, identifiantProjet: string, indiceProduitLissage: boolean, optim: boolean): ng.IPromise<string[]>;
        /**
         * Permet de récupérer la liste des produits autorisés pour le projet
         */
        listerProdEtFamAuto(identifiantDossier: string, identifiantProjet: string, idPlanFinancement: string, optim: boolean): ng.IPromise<Modele.IFamillesProduits[]>;
        /**
         * Permet de récupérer la liste des produits autorisés pour le projet
         */
        listerProduitsAutorises(codeCategorieEmprunteur: string, typeObjetFinancierGarantie: string, codeStructureInstruction: string, codeDestinataireAutreParObjet: string): ng.IPromise<instructionCredit.Modele.IProduitsAutorises[]>;
        /**
         * Permet de récupérer la liste des ids des produits autorisés pour le projet
         */
        listerGammesLissageAutorisees(identifiantDossier: string, identifiantProjet: string): ng.IPromise<Array<instructionCredit.Modele.IGammeLissage>>;
        /**
         * Permet de récupérer la liste des produits de lissage
         */
        /**
         * Permet de récupérer la liste des familles de produits
         */
        listerFamillesDeProduits(codeEtablissement: string, codeCategorieEmprunteur: string, typeObjetFinancierGarantie: string, codeStructureInstruction: string): ng.IPromise<instructionCredit.Modele.IFamillesProduits[]>;
        /**
         * Permet d'ajouter un crédit externe
         * @param idDossier : string
         * @param idPlan : string
         * @param idProduit : string
         * @param montant : number
         */
        addCreditExterne(idDossier: string, idPlan: string, creditExterne: instructionCredit.Modele.CreditExterneMaj): ng.IPromise<instructionCredit.Modele.ICreditExterne>;
        /**
         * Permet de calculer une proposition en mode auto (Pas en cas de calcul d'enveloppe)
         * @param identifiantDossier: string
         * @param identifiantPlanFinancier: string
         * @param identifiantLissage: string  - Facultatif - null
         * @param montantMaximumRemboursement: number
         * @param lissageTotal: boolean  - True si TOUS les crédits sont lissés
         * @param dureeFixeLissage: boolean - Défaut à False - True si lissageTotal=True et durée Souhaitée renseignée
         * @param dureeSouhLissage: number - Durée souhaitée
         */
        calculOptimisation(idDossier: string, idPlan: string, idLissage: string, montant: number, lissage: boolean, dureeLissage: boolean, duree: number): ng.IPromise<Modele.IResultatOptimisation>;
        /**
         * Permet de calculer une proposition en mode auto (Pas en cas de calcul d'enveloppe) et en conservant les assurances
         * @param identifiantDossier: string
         * @param identifiantPlanFinancier: string
         * @param montantMaximumRemboursement: number
         * @param entreeOptimisationAvancee: Modele.EntreeOptimisationAvancee
         */
        calculOptimisationAvancee(idDossier: string, idPlan: string, montantEcheanceMaximum: number, tauxEndtMaximum: number, entreeOptimisationAvancee: Modele.EntreeOptimisationAvancee): ng.IPromise<Modele.IResultatOptimisation>;
        /**
         * Permet de retenir un plan de financement Optimisé
         * @param idDossier : string
         * @param idPlanOptimise : string
         */
        retenirPlanOptimise(idDossier: string, idPlanOptimise: string): ng.IPromise<any>;
        /**
         * Permet de consulter le dossier smac
         * @return promise<IDossierSmac>
         */
        consulterDossierSmac(idDossier: string, numeroPlanFinanacement: string): ng.IPromise<instructionCredit.Modele.IDossierSmac>;
        /**
         * Permet de créer le dossier smac
         * @return promise<IDossierSmac>
         */
        creerDossierSmac(listeEmprunteurs: Array<Modele.IEmprunteurSmac>, projet: Modele.IProjetSmac, listeCredits: Array<Modele.ICreditSmac>, uidUtilisateur: string): ng.IPromise<instructionCredit.Modele.IResultatSmac>;
        /**
         * Permet de modifier le dossier smac
         * @return promise<IDossierSmac>
         */
        modifierDossierSmac(listeEmprunteurs: Array<Modele.IEmprunteurSmac>, projet: Modele.IProjetSmac, listeCredits: Array<Modele.ICreditSmac>, uidUtilisateur: string): ng.IPromise<instructionCredit.Modele.IResultatSmac>;
        /**
         * Permet de synchroniser avec smac
         * @param identifiantDossier : string
         * @param identifiantPlanFinancement : string
         * @param miseAJourDossierSMAC : boolean
         * @return promise<IAnomalieLecture>
         */
        synchroniserAvecSmac(identifiantDossier: string, identifiantPlanFinancement: string, miseAJourDossierSMAC: boolean, uIDSmac: string): ng.IPromise<Modele.IAnomalieLecture[]>;
        /**
         * Permet de lire la notation Bale II
         * @return promise<IResultatBaleII>
         */
        lireBaleII(idDossier: string, idPersonneSI: string): ng.IPromise<Modele.IResultatBaleII>;
        /**
         * Permet d'ajouter un plan de financement
         * @param idDossier : string
         * @param idProjet : string
         * @param planFinancement : Modele.planFinancementMaj
         */
        ajouterPlanFinancement(idDossier: string, idProjet: string, planFinancement: Modele.PlanFinancementMaj): ng.IPromise<instructionCredit.Modele.IPlanFinancementDetail>;
        /**
         * Permet de récupérer les paramètres d'un produit
         */
        chargerProduitFinancier(idProduit: string): ng.IPromise<Modele.IProduitFinancier>;
        /**
         * Permet de calculer le crédit (mensualités, frais, ...)
         */
        calculerCreditInterne(identifiantDossier: string, idwsCredit: string, financeRAF: boolean): ng.IPromise<Modele.IResultatCalculCreditInterne>;
        /**
         * Permet de calculer la caractèritiques manquante du crédit
         */
        calculerCaracteristiqueCredit(capital?: number, echeance?: number, taux?: number, typeTaux?: number, nombrePeriode?: number, periodicite?: number): ng.IPromise<Modele.IResultatCalculSimple>;
        /**
         * Permet d'ajouter, mettre à jour ou supprimer des paliers en lui fournissant la liste des paliers du dossier
         * @param {string} identifiantDossier
         * @param {string} idPlanFinancier
         * @param {Array<Modele.PalierContraintMaj>} listePaliers
         * @returns
         */
        definirPaliersContraints(identifiantDossier: string, idPlanFinancier: string, listePaliers: Array<Modele.PalierContraintMaj>): ng.IPromise<Array<Modele.IPalierContraint>>;
        /**
         * Supprime l'erreur de la liste pour ne pas dupliquer les données
         * Se base soit sur l'ancre, soit le libellé
         * @param {string} ancreErreur
         * @param {string} libelleErreur
         * @returns
         */
        supprimerErreurPresente(ancreErreur: string, libelleErreur?: string): void;
        /**
         * Permet d'ajouter une phase de crédit interne
         * @param identifiantDossier : string
         * @param idwsCredit : string
         * @param codeIndiceTypePhase : number
         */
        definirPhase(identifiantDossier: string, idwsCredit: string, codeIndiceTypePhase: number): ng.IPromise<Modele.ICreditPhase>;
        /**
         * Permet de calculer h'ypothèque de capitalisation
         * @param identifiantDossier : string
         * @param idwsCredit : string
         * @return promise<number>
         */
        calculerHypotheseCap(identifiantDossier: string, idwsCredit: string): ng.IPromise<number>;
        /**
         *  Liste des plans de Financement
         */
        chargerPlanFinancementDetail(dossierSchema: Modele.IDossierSchema): void;
        /**
         * Indique si des crédits sont à optimiser
         */
        controleCreditsAOptimiser(controleCalculAFaire: boolean): boolean;
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
        controleAffichageBlocCriteresRemboursement(modeCalcul: Enum.ModeCalcul, redirection: boolean): void;
        /**
         * Affichage des messages reçus en Exception
         */
        private affichageException(exception);
        /**
         * Récupération des paliers contraints
         */
        getPaliersContraints(): Modele.PalierContraint[];
    }
}

declare module instructionCredit.Service {
    /**
     * Données pour aller vers le formulaire de détail des frais et accessoires depuis la page de financement
     */
    interface IDataFormulaireFraisAccessoires {
        accessoire: Modele.IAccessoire;
        creditInterne: Modele.ICreditInterne;
        modeCreation: boolean;
    }
    class FraisAccessoiresService {
        private $q;
        private serviceAgentExtended;
        private initialisationService;
        private financementService;
        static $inject: Array<string>;
        private _listeAccessoireType;
        private _listeTypeAssiette;
        private _listeBeneficiaire;
        private _listeModalitesCalculAccessoireComplementaire;
        dataFormulaireFraisAccessoires: IDataFormulaireFraisAccessoires;
        totalFraisDossier: number;
        totalFraisAccessoires: number;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: Service.InitialisationService, financementService: Service.FinancementService);
        /**
         * Pour chaque crédit interne regroupe les cotisations des frais et accessoires
         * @param {Array<any>} elements
         */
        setFraisAccessoiresAtAllCredits(elements: Array<any>): ng.IPromise<void>;
        /**
         * Formate les cotisations et les modalités de calcul piour un crédit en particulier
         * @param {number} positionCredit
         * @param {Array<any>} elements
         * @param {boolean} calculerFrais
         */
        setFraisAccessoiresAtCredit(positionCredit: number, elements: Array<any>, calculerFrais: boolean): ng.IPromise<void>;
        /**
         * Récupère tous les accessoires liés au produit formatés pour l'utilisation
         * @param {Modele.ICreditInterne} creditInterne
         * @param {Array<any>} elements
         */
        private getAccessoiresLiesProduitsFromatesByCredit(creditInterne, elements);
        /**
         * Récupère tous les accessoires complémentaires formatés pour l'utilisation
         * @param {Modele.ICreditInterne} creditInterne
         * @param {Array<any>} elements
         * @param {Array<Modele.IModalitesCalculAccessoireComplementaire>} listeModalitesComplementaire
         */
        private getAccessoiresComplementairesFromatesByCredit(creditInterne, elements, listeModalitesComplementaire);
        /**
         * Calcul la somme total de sfrais de dossier et des autres frais
         */
        calculSommesFrais(listeCreditsInterne: Modele.ICreditInterne): void;
        /**
         * Recherche le libélle correspond au code
         * Cette rechecrhe s'effectue dans la liste chargée en amont
         * @param {string} codeTypeAcessoire
         */
        private getLibelleTypeAcessoire(pCodeTypeAcessoire);
        /**
         * Formate l'accessoire complémentaire
         * @param {string} idwsCredit
         * @param {Modele.IAccessoireComplementaire} accessoire
         * @param {Array<any>} elements
         * @param {Array<Modele.IModalitesCalculAccessoireComplementaire>} listeModalitesComplementaire
         */
        formateComplementaire(idwsCredit: string, accessoire: Modele.IAccessoireComplementaire, elements: Array<any>, listeModalitesComplementaire: Array<Modele.IModalitesCalculAccessoireComplementaire>): Modele.IAccessoireComplementaire;
        /**
         * Formate l'accessoire lié
         * @param {Modele.ICreditInterne} creditInterne
         * @param {Modele.IAccessoireLieProduit} accessoire
         * @param {Array<any>} elements
         */
        formateAccessoireLie(creditInterne: Modele.ICreditInterne, accessoire: Modele.IAccessoireLieProduit, elements: Array<any>): Modele.IAccessoireLieProduit;
        /**
         * Le montant du frais à prendre en compte est spécifique au mode de calcul,
         * @param {Modele.IAccessoireLieProduit} accessoire
         * @param {Modele.ICreditInterne} creditInterne
         */
        getMontantFraisReels(accessoire: Modele.IAccessoire, creditInterne: Modele.ICreditInterne): number;
        /**
         * Calcule le montant des frais réels
         * @param {Modele.IAccessoire} accessoire
         * @param {Modele.ICreditInterne} creditInterne
         * @param {number} montant
         * @param {number} taux
         */
        getMontantFraisCalcule(accessoire: Modele.IAccessoire, creditInterne: Modele.ICreditInterne, montant: number, taux: number): number;
        /**
         * Récupération de la modalité correspondante
         * @param {number} codeTypeAccessoire
         * @param {Modele.ICotisation} cotisation
         * @param {Array<Modele.IModalitesCalculHorsConventionParProduit>} dataModalites
         * @param {Array<any>} elements
         */
        private getModaliteCalculForCotisation(codeTypeAccessoire, cotisation, dataModalites, elements);
        /**
         * Permet de récupérer la liste des types de frais disponibles
         */
        listerTypeAccessoire(): ng.IPromise<Array<Modele.IAccessoireType>>;
        /**
         * Permet de récupérer la liste des accessoires pour un produit
         */
        listerModCalculHorsConvParProd(idProduit: string): ng.IPromise<Array<Modele.IModalitesCalculHorsConventionParProduit>>;
        /**
         * Charge les accessoires complémentaires indépendant de la caisse
         */
        listerModCalculAccesComp(): ng.IPromise<Array<Modele.IModalitesCalculAccessoireComplementaire>>;
        /**
         * Mets à jour un accessoire lié pour les frais
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {Modele.AccessoireLieMaj} accessoire
         * @param {number} montant
         * @param {number} taux
         * @param {number} nbPaiment
         * @param {Array<string>} listeIdsPhase
         */
        miseAJourAccessoireLieProd(idDossier: string, idCredit: string, accessoire: Modele.AccessoireLieMaj, montant: number, taux: number, nbPaiment: number, listeIdsPhase: Array<string>): ng.IPromise<any>;
        /**
         * Mets à jour un accessoire complémentaire pour les frais
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {Modele.AccessoireLieMaj} accessoire
         * @param {number} montant
         * @param {number} taux
         * @param {number} nbPaiment
         * @param {Array<string>} listeIdsPhase
         */
        miseAJourAccessComp(idDossier: string, idCredit: string, accessoire: Modele.AccessoireLieMaj, montant: number, taux: number, nbPaiment: number, listeIdsPhase: Array<string>): ng.IPromise<any>;
        /**
         * Liste les bénéfichiaire disponibles au sein de la caisse
         */
        listerBeneficiaire(): ng.IPromise<Array<Modele.IBeneficiaire>>;
        /**
         * Ajoute au crédit un accesooire lié facultatif
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {string} codeTypeAccessoire
         */
        ajouterAccessoireLieProduit(idDossier: string, idCredit: string, codeTypeAccessoire: string): ng.IPromise<Modele.IAccessoireLieProduit>;
        /**
         * Ajoute au crédit un accesooire complémentaire
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {string} codeTypeAccessoire
         * @param {string} codeSousTypeAccessoire
         */
        ajouterAccessoireComp(idDossier: string, idCredit: string, codeTypeAccessoire: string, codeSousTypeAccessoire: string): ng.IPromise<Modele.IAccessoireComplementaire>;
        /**
         * Récupère la liste des constantes type d'assiette
         */
        getListeTypeAssiette(): ng.IPromise<Array<Modele.IElementConstante>>;
        /**
         * Rôles du tiers pour l'accessoire complémentaire
         * @param {string} codeSousTypeAccessoire
         */
        listerModTypeDeRoleTiersParAcces(codeSousTypeAccessoire: string): ng.IPromise<Array<Modele.IModalitesTypeDeRoleTiersParAccessoire>>;
        /**
         * Détails des tiers pour un rôle donné
         * @param {string} typeRolePersonne
         * @param {string} intitule
         * @param {string} cp
         */
        listerModTiersTypRol(typeRolePersonne: string, intitule: string, cp: string): ng.IPromise<Array<Modele.IModalitesTiersParTypeDeRole>>;
        /**
         * Ajoute un tiers à l'accessoire complémentaire
         * @param {string} idDossier
         * @param {string} idAccessoire
         * @param {string} identifiantTiers
         * @param {string} typeRolePersonne
         */
        ajouterAccCompTier(idDossier: string, idAccessoire: string, identifiantTiers: string, typeRolePersonne: string): ng.IPromise<Modele.IAccessoireComplementaire>;
        /**
         * Supprime le tiers affecté
         * @param {string} idDossier
         * @param {string} idAccessoire
         */
        supprimerTiersAccCmp(idDossier: string, idAccessoire: string): ng.IPromise<Modele.IAccessoireComplementaire>;
    }
}

declare module instructionCredit.Service {
    class GarantieService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private _listeNatureGarantie;
        private _listeITypesDeFraisGarantie;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet d'ajouter une garantie
         * @param idDossier : string
         * @param listeIdentifiantCredCouv : string[]
         * @param natureGarantie : string
         * @param idGarant : string
         */
        ajouterGarantie(idDossier: string, listeIdentifiantCredCouv: string[], natureGarantie: string, idGarant: string): ng.IPromise<Modele.IGarantieSchema>;
        /**
         * Permet d'ajouter une garantie conventionnée
         * @param idDossier : string
         * @param listeIdentifiantCredCouv : string[]
         * @param idConventionGarantie : string
         */
        ajouterGarantiePersoConv(idDossier: string, listeIdentifiantCredCouv: string[], idConventionGarantie: string): ng.IPromise<Modele.IGarantieSchema>;
        /**
         * Permet de récupérer les natures de garantie
         * @return promise<INatureGarantie>
         */
        listerNatureGarantie(codeEtablissement: string): ng.IPromise<Modele.INatureGarantie[]>;
        /**
         * Permet de récupérer les conventions de garantie
         * @return promise<IConventionGarantie>
         */
        listerConventionsGarantie(codeEtablissement: string, typeObjetFinancierGarantie: string, codeCategorieEmprunt: string, codeNatureGarantie: string, codeFamilleProduit: string, numeroRelationProduit: string): ng.IPromise<Modele.IConventionGarantie[]>;
        /**
         * Permet de récupérer les ids des conventions de garantie compatibles
         * @param identifiantDossier : string
         * @param listeIdwsCredit : string
         * @param cdfcod : string
         * @param cdfcng : string
         * @param libelleLong : string
         * @param topGarantie : string
         * @return promise<IConventionGarantie[]>
         */
        listerConventionsGarantieParCredit(identifiantDossier: string, listeIdwsCredit: string[], cdfcod: string, cdfcng: string, libelleLong: string, topGarantie: boolean): ng.IPromise<Modele.IConventionGarantie[]>;
        /**
         * Permet de récupérer les natures garantie les plus utilisées
         * @return promise<IInformationGarantie>
         */
        listerInformationGarantie(identifiantDossier: string, listeIdwsCredit: string[], conseille: boolean): ng.IPromise<Modele.IInformationGarantie[]>;
        /**
         * Permet de récupérer montant des frais de garantie hypotheque ou privilege
         * @return promise<number>
         */
        calculerFraisHypotheque(identifiantDossier: string, idwsGarantieReelle: string): ng.IPromise<number>;
        /**
         * Permet de lister les types de frais garantie
         * @return promise<ITypesDeFraisGarantie[]>
         */
        listerTypesDeFraisGarantie(codeEtablissement: string, codeNatureGarantie: string): ng.IPromise<Modele.ITypesDeFraisGarantie[]>;
        /**
         * Récupère la liste des idws d'une garantie (garantie + couvertures + cotisations)
         */
        getAllIdwsGarantie(garantiePersonnelle: Modele.IGarantiePersonnelleSchema, garantieReelle: Modele.IGarantieReelleSchema): string[];
    }
}

declare module instructionCredit.Service {
    class InitialisationService {
        private $q;
        private serviceAgentExtended;
        private clientService;
        private projetService;
        private financementService;
        private agentExterneService;
        private modalService;
        private mwNotificationService;
        private modaleFactory;
        static $inject: string[];
        private _parametresApplicatif;
        idntDossier: string;
        dossier: Modele.IDossierComplet;
        dossierSchema: Modele.IDossierSchema;
        majPartielleDossier: boolean;
        utilisateurConnecte: MyWay.Services.Context.AuthentificationInfo;
        modificationsEnCours: Object;
        elementsModifies: Array<Object>;
        listeIdws: Array<string>;
        feuxTricolore: Array<string>;
        affichageEligibilite: boolean;
        erreurTauxUsure: boolean;
        idwsCreditACalculer: string;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, clientService: Service.ClientService, projetService: Service.ProjetService, financementService: Service.FinancementService, agentExterneService: Service.AgentExterneService, modalService: MyWay.UI.IModalService, mwNotificationService: MyWay.UI.IMwNotificationService, modaleFactory: Service.ModaleFactory);
        /**
         * Permet de creer un dossier vide
         * @param: canalDeCreation
         */
        creerProjet(canalDeCreation: string, toc: string, tor: string, idClientBancaire?: string): ng.IPromise<any>;
        /**
         * Permet de récupérer le contenu du dossier sélectionné
         * @param identifiantDossier : string
         * @return promise<DossierOuvert>
         */
        getDossierComplet(identifiantDossier: string): ng.IPromise<instructionCredit.Modele.IDossierComplet>;
        /**
         * Permet de récupérer le schema complet d'un dossier
         * @param identifiantDossier : string
         * @return promise<IDossierSchema>
         */
        getDossierSchema(identifiantDossier: string): ng.IPromise<Modele.IDossierSchema>;
        /**
         * Permet de définir un emprunteur
         * @param: idDossier
         * @param: idClientBancaire
         */
        definirEmprunteur(idDossier: string, idClientBancaire: string): ng.IPromise<Modele.IEmprunteur>;
        /**
         * Permet de fermer le dossier avec sauvegarde
         * @param identifiantDossier : string
         * @return promise<Object>
         */
        getFermerDossier(identifiantDossier: string, sauvegarde: boolean): ng.IPromise<Object>;
        /**
         * Permet de mettre à jour un élément
         * @param identifiantClasse: string
         * @param identifiantDossier: string
         * @param element: Object
         * @return : boolean => connaitre le statut de la maj
         */
        majElement(identifiantClasse: string, identifiantDossier: string, element: Object): ng.IPromise<boolean>;
        /**
         * Permet de mettre à jour un ensemble d'éléments
         * @param identifiantClasses: string
         * @param identifiantDossier : string
         * @param elements : Object[]
         */
        majElements(identifiantClasses: string, identifiantDossier: string, elements: Object[]): ng.IPromise<boolean>;
        private trierElementsMaj(element);
        /**
         * Permet de tester si des mise à jour sont nécessaires
         */
        testMajElementsNecessaire(): boolean;
        /**
         * Méthode permettant d'effectuer la mise à jour des éléments
         * --> traite les cas particuliers (Bien à vendre), puis effectue les maj en mode synchrone
         */
        majElementsDossier(deferred: ng.IDeferred<any>, elements: Array<any>, index?: number): ng.IPromise<number>;
        /**
         * Méthode permettant d'effectuer la mise à jour des éléments en mode synchrone
         */
        private majElementsSynchrone(deferred, elements, index?);
        /**
         * Edition de plusieurs documents PDF
         * @param: canalDeCreation
         */
        editionDocuments(identifiantDossier: string, identifiantDocument: string, identifiantWs: string, paramsEditiques: Array<Object>, niveauTraitement: number): ng.IPromise<Array<Object>>;
        /**
         * Affichage des messages reçus en Exception
         */
        affichageException(exception: Modele.IException): void;
        /**
         * Permet de supprimer un élément
         * @param identifiantDossier : string
         * @param identifiantElement : string
         */
        supprimerElement(identifiantDossier: string, identifiantElement: string): ng.IPromise<any>;
        /**
         * Permet d'enregistrer un dossier en central
         * @param idDossier : string
         */
        enregistrerDossier(idDossier: string): ng.IPromise<any>;
        /**
         * Permet de calculer l'égilibilité
         */
        calculerEligibilite(idDossier: string): ng.IPromise<Modele.IResultatEligibilite>;
        /**
         * Popin d'affichage des alertes NEO (fonctionnelles)
         */
        popinAlertesNeo(messages: Array<string>): void;
        /**
         * Permet de récupérer l'ensemble des objets dont l'identifiant est passé dans l'Array
         * @param: identifiantDossier
         * @param: liste
         */
        lireElements(identifiantDossier: string, liste: Array<string>): ng.IPromise<any[]>;
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
         * Permet de récupérer les paramètres applicatifs
         * Les données chargées sont stockées dans la session
         * @return ng.IPromise<Array<IParametreApplicatif>>
         */
        listerParametresApplicatifs(rubriquesFiltre: Array<string>, valeursFiltre: Array<string>): ng.IPromise<instructionCredit.Modele.IParametreApplicatif[]>;
        /**
         * Permet de retourner l'endettement d'un client
         *
         */
        calculerEndettement(idDossier: string, surProposition: boolean, proposition?: string): ng.IPromise<Modele.IEndettement>;
        /**
         * Permet de lister tous les documents disponibles pour un dossier
         *
         */
        listerDocuments(idDossier: string, idProposition: string): ng.IPromise<Array<Modele.IInfoDocument>>;
        /**
         * Permet de transferer le dossier dans neo
         *
         */
        transfererDossierDansNeo(idDossier: string, visibleNEO: boolean): ng.IPromise<any>;
        /**
         * Permet d'ajouter un garant  (pour le moment)
         * Appel au WS "ajouterPersonne" avec en params du query l'identifiantClasse (
         * @param idDosser: string
         * @param personne: instructionCreditModel.IPersonne
         */
        ajouterPersonne(idDossier: string, personne: instructionCredit.Modele.IPersonne): ng.IPromise<instructionCredit.Modele.IPersonne>;
        /**
         * Permet de retourner l'intitulé de la personne (civilité + nom + prénom)
         * @param personne: instructionCreditModel.IPersonne
         */
        getIntitulePersonne(personne: Modele.IPersonne): string;
        /**
         * Permet de récupérer les points de contrôle sur le dossier traité actuellement
         * @param identifiantDossier: string
         * @return promise<Array<Modele.AnomalieDossier>>
         */
        controlerDossier(identifiantDossier: string): ng.IPromise<Array<Modele.AnomalieDossier>>;
        /**
         * Charge le dossier complet dans la session (this : initialisationService)
         * @returns
         */
        chargerDossierComplet(): ng.IPromise<void>;
        /**
         * Permet de récupérer les paramètres applicatifs
         * @return ng.IPromise<Array<IParametreApplicatif>>
         */
        getParametresApplicatifs(): ng.IPromise<instructionCredit.Modele.IParametreApplicatif[]>;
        /**
         * Permet de récupérer le constantes en fonction d'un champ
         * @param identifiantChamp : string
         * @return promise<IElementConstante>
         */
        listerConstantes(identifiantChamp: string): ng.IPromise<Modele.IElementConstante[]>;
        /**
         *  Mets à jour des attributs d'un objet
         */
        majDonneesPartiellesObjet(identifiantClasse: string, objetMaj: Object): ng.IPromise<boolean>;
        /**
         *  Mets à jour des attributs d'une liste d'objets
         */
        majDonneesPartiellesObjets(identifiantClasses: string, objetsMaj: Object[]): ng.IPromise<boolean>;
        /**
         * Ajoute une phase au crédit
         * @param {Modele.AjouterPhaseCreditExistant} ajoutPhase
         * @returns
         */
        ajouterPhaseCreditExistant(ajoutPhase: Modele.AjouterPhaseCreditExistant): ng.IPromise<Modele.IResultatAjoutPhaseCreditExistant>;
        /**
         * Convertie un flux de données en document pour l'enregistrer sur le poste du conseiller
         * @param {string} fluxDonnees
         * @param {string} nomDocument
         */
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string): ng.IPromise<boolean>;
        /**
         * Donne le curseur à l'élement souhaité
         * @param {string} ancre
         */
        goToAnchor(ancre: string): void;
        /**
         * Permet de lancer le calcul du crédit interne (mensualités, frais, ...), avec si besoin le calcul de compte courant
         * @param idwsCredit: string
         * @param financeRAF: boolean
         */
        calculCreditInterne(idwsCredit: string, financeRAF: boolean): ng.IPromise<Modele.ICreditInterne>;
        /**
         * Permet d'afficher les impacts sur l'éligibilité (ECO-PTZ)
         */
        getImpactsEligibilite(): ng.IPromise<void>;
        /**
         * Contrôle s'il s'agit d'une caisse CFF
         */
        controleCaisseCFF(): ng.IPromise<boolean>;
        /**
         * Edition de la proposition
         */
        editionProposition(resteAFinancer: number, setLoader: (value: boolean) => void): void;
        /**
         * Contrôle si le dossier est sur une loi conso
         */
        estLoiConso(): boolean;
    }
}

declare module instructionCredit.Service {
    class ModaleFactory {
        private modalService;
        private navigationService;
        private $location;
        private $q;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(modalService: MyWay.UI.IModalService, navigationService: MyWay.UI.INavigationService, $location: ng.ILocationService, $q: ng.IQService);
        /**
         * Permet d'afficher une popin
         */
        popinSimple(titre: string, message: string, taille: string): void;
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
         * Permet d'afficher la popin avertissant qu'un crédit à optimiser est obligatoire
         * lancer le calcul d'optimisation
         */
        popinPasDeCreditAOptimiser(): void;
        /**
         * Permet d'afficher la popin avertissant qu'un seul crédit doit être sélectionné lors d'un rachat
         */
        popinAvertissementRachat(): void;
        /**
         * Permet d'afficher la popin avertissant un taux d'usure fort
         */
        popinErreurTauxUsure(): void;
        /**
         * Permet d'afficher une popin contenant une liste d'anomalies
         */
        popinListeAnomalies(titre: string, listeAnomaliesLecture: Array<Modele.IAnomalieLecture>): ng.IPromise<void>;
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
        popinErreur(erreur: Modele.IException): void;
        /**
         * Permet d'afficher une popin de confirmation d'annulation des modifications droits PEL
         */
        popinConfirmationModificationDroitPEL(): ng.IPromise<boolean>;
    }
}

declare module instructionCredit.Service {
    /**
     * Fonctions et données utiles pour manpiluer la navigation de l'application
     * /!\ Ne pas confondre avec le NavigationService MyWay
     */
    class NavigationInterneService {
        private navigationService;
        static $inject: Array<string>;
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
        constructor(navigationService: MyWay.UI.INavigationService);
        /**
         *  Initialise les différents affichages en les cachant
         */
        init(): void;
        /**
         * Force l'activation dans le menu (utile en cas de retour arrière)
         */
        setActiveSection(titrePage: string, titreSection: string): void;
        /**
         * Mets à jour les sections de la partie CLient en fonction de la présence ou non d'un emprunteur
         */
        majTotemEmprunteur(emprunteur: boolean, activationMenu: boolean): void;
        /**
         * Mets à jour les sections de la partie Propositions: avec ou sans la partie critères de remboursement
         */
        majTotemFinancement(avecCriteres: boolean): void;
        /**
         * Mets à jour les sections de la partie crédit en fonction de la présence ou non d'un compte courant
         */
        majTotemCredit(libelleCredit: string, compteCourant: boolean): void;
    }
}

declare module instructionCredit.Service {
    /**
     *  Fonctions permettant de gérer la personnalisation de l'utilisateur
     */
    class PersonnalisationService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        private initialisationService;
        static $inject: string[];
        modeCalcul: Enum.ModeCalcul;
        modeRestitution: Enum.ModeRestitution;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, initialisationService: Service.InitialisationService);
        /**
         * Si la personnalisation n'est pas en place, ouverture par défaut
         */
        gererPersonnalisation(): void;
        /**
         * Ouvre une popin permettant de gèrer les favoris de l'utilisateur
         */
        ouvrirPopinPersonnalisation(): ng.IPromise<void>;
        /**
         * Recherche dans le contexte la personnalisation demandée
         * @param {string} nomPreference: la donnée est stocké sous ce nom
         * @returns La donnée trouvée
         */
        lirePersonnalisation(nomPreference: string): ng.IPromise<any>;
        /**
         * Ecrire la données mise à jour
         * @param {string} nomPreference: la donnée est stocké sous ce nom
         * @param {string} valeurPreference: valeur de la donnée stockée
         * @param {any} fonctionReussite: action à effectuer lorsque la sauvegarde s'est bien passé
         */
        sauverPersonnalisation(nomPreference: string, valeurPreference: string, fonctionReussite: any): ng.IPromise<void>;
    }
}

declare module instructionCredit.Service {
    class ProjetService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private _localite;
        private _listeProjetTypeLogement;
        private _listeTypeObjetReglemente;
        private _listeTypeObjetCommercial;
        private _listeCadreFiscal;
        projet: Modele.IProjet;
        batimentHabitableFinance: Modele.IBatimentHabitableFinance;
        bienAVendre: Modele.IBienAVendre;
        terrainFinance: Modele.ITerrainFinancee;
        constructionFinancee: Modele.IConstructionFinancee;
        travauxFinances: Modele.ITravauxFinances;
        soulteFinance: Modele.ISoulteFinancee;
        bienDetaille: Modele.IBienDetaille;
        reamenagement: Modele.IReamenagement;
        complementDossier: Modele.IComplementDossier;
        codeEtablissement: string;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer le contenu du projet
         * @param identifiantDossier : string
         * @param identifiantProjet : string
         * @return promise<Projet>
         */
        getProjet(identifiantDossier: string, identifiantProjet: string): ng.IPromise<void>;
        /**
         * Permet de récupérer le contenu du projet
         * @param identifiantDossier : string
         * @param identifiantProjet : string
         * @return promise<PlanFinancement>
         */
        /**
         * Permet de récupérer le détail d'un bien à vendre
         * @param identifiantDossier : string
         * @param identifiantBien : string
         * @return promise<BienAVendre>
         */
        getBienAVendre(identifiantDossier: string, identifiantBien: string): ng.IPromise<instructionCredit.Modele.IBienAVendre>;
        /**
         * Permet de définir un bien a vendre
         */
        definirBienAVendre(idDossier: string, idProjet: string, bien: Modele.BienAVendreMaj): ng.IPromise<Modele.IBienAVendre>;
        /**
         * Permet de récupérer la liste de cadre fiscal
         * @return promise<CadreFiscal>
         */
        getFormulaireProjetCadre(): ng.IPromise<Array<instructionCredit.Modele.ICadreFiscal>>;
        /**
         * Permet de récupérer la liste de type de logement
         * @return promise<TypeLogement>
         */
        getFormulaireProjetTypeLogement(): ng.IPromise<Array<instructionCredit.Modele.IFormulaireProjetTypeLogement>>;
        /**
         * Permet de récupérer la liste des devises
         * @return promise<Devise>
         */
        getDevises(): ng.IPromise<instructionCredit.Modele.IDevise[]>;
        /**
         * Permet de récupérer le complément d'un dossier
         * @param identifiantDossier : string
         * @param identifiantComplement : string
         * @return promise<IComplementDossier>
         */
        getComplementDossier(identifiantDossier: string, identifiantComplement: string): ng.IPromise<instructionCredit.Modele.IComplementDossier>;
        /**
         * Permet de récupérer le complément d'un dossier
         * @param codePostal : string
         * @param ville : string
         * @return promise<ILocalites>
         */
        getLocalite(codePostal: string, ville: string): ng.IPromise<instructionCredit.Modele.ILocalites>;
        /**
         * Permet de récupérer les travaux financés
         * @param identifiantDossier : string
         * @param identifiantTravaux : string
         * @return promise<ITravauxFinances>
         */
        getTravauxFinances(identifiantDossier: string, identifiantTravaux: string): ng.IPromise<instructionCredit.Modele.ITravauxFinances>;
        /**
         * Permet de récupérer le batiment habitable Finance
         * @param identifiantDossier : string
         * @param identifiantBafi : string
         * @return promise<IBatimentHabitableFinance>
         */
        getBatimentHabitableFinance(identifiantDossier: string, identifiantBafi: string): ng.IPromise<instructionCredit.Modele.IBatimentHabitableFinance>;
        /**
         * Permet de récupérer la liste des Types d'objet Commercialises (TOC)
         * @return promise<ITypeObjetCommercial>
         */
        getTypeObjetCommercial(): ng.IPromise<Array<instructionCredit.Modele.ITypeObjetCommercial>>;
        /**
         * Permet de récupérer la liste des Types d'Objets Réglementés (TOR)
         * @return promise<ITypeObjetReglemente>
         */
        getTypeObjetReglemente(): ng.IPromise<Array<instructionCredit.Modele.ITypeObjetReglemente>>;
        /**
         * Permet de définir un projet Immobilier (Changement du TOC TOR)
         */
        definirProjet(idDossier: string, toc: string, tor: string, projetMaj: Modele.ProjetImmobilierMaj): ng.IPromise<Modele.IProjet>;
        /**
         * Permet de récupérer les crédits réaménagés internes
         */
        listerPretsReamenagebles(idDossier: string, idReamenagement: string): ng.IPromise<Array<Modele.IPretReamenagement>>;
        /**
         * Permet de récupérer le détail des crédits réaménagés
         */
        detailsPretsRea(idDossier: string, date: Date, idReamenagement: string, listePrets: Array<string>): ng.IPromise<Array<Modele.IDetailPret>>;
        /**
         * Permet d'ajouter un pret de réaménagement (Rachat / Regroupement de crédit)
         */
        ajouterPretReamenagement(idDossier: string, idReamenagement: string, codeBanque: string, idCreditGestion: string, pretAmenagement: Modele.PretReamenagementMaj, infosRegroupement: Modele.InfoRegroupementMaj): ng.IPromise<Modele.IPretReamenagement>;
        /**
         * Permet de définir un reamenagement
         */
        definirReamenagement(idDossier: string, idProjet: string, reamenagement: Modele.ReamenagementMaj): ng.IPromise<Modele.IReamenagement>;
        /**
         * Permet de définir un complément de dossier
         */
        definirComplementDossier(idDossier: string, complement: Modele.ComplementDossierMaj): ng.IPromise<Modele.IComplementDossier>;
        /**
         * Ajout d'un évènement sur un dossier
         */
        ajouterEvenementDossier(idDossier: string, codeTypeEvenement: string, libelleFacultatif: string): ng.IPromise<any>;
        /**
         * Permet de récupérer les paramètres couts travaux pour l'éco-PTZ
         * @param rubriquesFiltre : string
         * @param valeursFiltre : string
         * @return promise<IParamCoutTravauxEcoPtz>
         */
        listerParamCoutTravauxEcoPtz(rubriquesFiltre: string, valeursFiltre: string): ng.IPromise<Modele.IParamCoutTravauxEcoPtz[]>;
        /**
         * Définie le détail des couts
         */
        definirDetailCoutObj(idDossier: string, typeTravaux: string, listeDetailCoutObjetMAJ: Modele.DetailCoutObjetMaj[]): ng.IPromise<any>;
        /**
         * Permet de récupérer les anomalies
         * @param identifiantDossier : string
         * @param idwsPlanFinancement : string
         * @return promise<IAnomalieLecture>
         */
        impactsEligibilite(identifiantDossier: string, idwsPlanFinancement: string): ng.IPromise<Modele.IAnomalieLecture[]>;
    }
}

declare module instructionCredit.Service {
    class ResteAFinancerService {
        private $q;
        private initialisationService;
        private financementService;
        private mwNotificationService;
        static $inject: Array<string>;
        apportInitial: number;
        apportPrecedent: number;
        apportMontantAjoute: number;
        apportMontantCalcule: number;
        resteAFinancer: number;
        afficherBlocRaf: boolean;
        modeAffectation: Enum.AffectationResteAFinancer;
        listeAffectationTotaleChoix: Array<Modele.ISelectboxRafTotal>;
        resteAAffecter: number;
        constructor($q: ng.IQService, initialisationService: Service.InitialisationService, financementService: Service.FinancementService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Formate les crédits pour les rendre manipulable dans le bloc du reste à financer
         */
        gestionCreditsEditableResteAFinancer(): void;
        /**
         * Récupération du plan de financement et mise à jour des éléments suite à une affectation totale
         */
        majResteAFinancerAffectationTotale(): ng.IPromise<void>;
        /**
         * Mise à jour des données du plan de financment et le reste à financer suite à une affectation partielle (=> par répartition)
         */
        majPlanFinancementRafAffectationPartielle(newPlanFinancement?: Modele.IPlanFinancementDetail): ng.IPromise<void>;
        /**
         *  Notification Reste à financer
         */
        notifResteFinancer(): void;
        /**
         * ResteAAffecter  = Reste à financer (montant de la barre de titre) - le montant affecté dans la (les) lignes des différents crédits internes
         * @param {number} resteAFinancer
         * @param {boolean} affectationParRepartition: si True, alors prendre en compte le nouveau montant de l'apport
         */
        calculResteAAffecter(resteAFinancer: number): void;
        /**
         * Inialise et remplis la liste de choix possible pour l'affectation totale
         */
        initChoixAffectationsTotale(): void;
        /**
         * Maj de l'apport et du plan de financement suite à une action sur un crédit conso
         * @param {number} ancienMontant
         * @param {number} nouveauMontant
         */
        majPlanCreditConso(ancienMontant: number, nouveauMontant: number): ng.IPromise<void>;
        /**
         * Mets-à-jours les données
         * @param {Modele.IPlanFinancementDetail} newPlanFinancement
         */
        private setDonneesPlanFinancementResteAFinancerAffectationPartielle(newPlanFinancement);
    }
}

declare module instructionCredit.Service {
    /**
     * Données de la synthèse utilisé à travers les différentes vues
     */
    class SyntheseService {
        static $inject: Array<string>;
        listeErreurs: Array<Modele.ErreurFormulaire>;
        afficherBlocErreur: boolean;
        etatAccordPrincipe: Enum.FeuTricolore;
        constructor();
    }
}

declare module instructionCredit {
    class BtnFooterCalculerControleur {
        private $rootScope;
        private financementService;
        private creditInterneService;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, financementService: Service.FinancementService, creditInterneService: Service.CreditInterneService);
        calculer(): void;
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class BtnFooterPlusActionsControleur {
        private $q;
        private $scope;
        private modalService;
        private initialisationService;
        private financementService;
        private projetService;
        private controleDossierService;
        private navigationInterneService;
        private modaleFactory;
        private personnalisationService;
        static $inject: string[];
        estOuvert: boolean;
        chargementEnCours: boolean;
        pageFinancement: string;
        constructor($q: ng.IQService, $scope: ng.IScope, modalService: MyWay.UI.IModalService, initialisationService: instructionCredit.Service.InitialisationService, financementService: Service.FinancementService, projetService: instructionCredit.Service.ProjetService, controleDossierService: instructionCredit.Service.ControleDossierService, navigationInterneService: instructionCredit.Service.NavigationInterneService, modaleFactory: instructionCredit.Service.ModaleFactory, personnalisationService: instructionCredit.Service.PersonnalisationService);
        /**
         * Gère l'action toogle du composant
         * @param {boolean} open
         */
        changement(open: boolean): void;
        calculEligibilite(): void;
        /**
         *  Demande d'ouverture de la popin d'informations pour contrôler le dossier
         */
        controlerDossier(): void;
        /**
         * Ouvre une popin permettant de gèrer les favoris de l'utilisateur
         */
        personnaliser(): void;
        /**
         * Imprime la proposition en cours
         */
        imprimerProposition(): void;
        /**
         * Affiche la popin de détails d'éligibilité
         */
        private popinDetailsEligibilite();
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class BtnQuitterDossierControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private modalService;
        private initialisationService;
        private clientService;
        private projetService;
        private controleDossierService;
        private navigationInterneService;
        private modaleFactory;
        private cookieFactory;
        static $inject: string[];
        constructor($scope: any, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, initialisationService: instructionCredit.Service.InitialisationService, clientService: instructionCredit.Service.ClientService, projetService: instructionCredit.Service.ProjetService, controleDossierService: instructionCredit.Service.ControleDossierService, navigationInterneService: instructionCredit.Service.NavigationInterneService, modaleFactory: instructionCredit.Service.ModaleFactory, cookieFactory: instructionCredit.Service.CookieFactory);
        btnQuitterDossier(): void;
        /**
         * Popin les informations nécessaires ne sont pas requise pour l'enregistrement du dossier
         */
        private popinAlerteQuitter();
        /**
         * Fermeture du dossier
         */
        private fermerDossier(sauvegarde);
        private fermetureDossier(sauvegarde);
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class BtnRetourPagePrecedenteControleur {
        private $location;
        private navigationInterneService;
        private navigationService;
        static $inject: string[];
        constructor($location: ng.ILocationService, navigationInterneService: instructionCredit.Service.NavigationInterneService, navigationService: MyWay.UI.INavigationService);
        retourPagePrecedente(): void;
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
    class FinancementApportControleur {
        private $q;
        private initialisationService;
        private financementService;
        private resteAFinancerService;
        static $inject: string[];
        affectationRafRepartition: Enum.AffectationResteAFinancer;
        constructor($q: ng.IQService, initialisationService: instructionCredit.Service.InitialisationService, financementService: Service.FinancementService, resteAFinancerService: Service.ResteAFinancerService);
        /**
         * Fonction permettant de contrôler la valeur correte de l'apport et de mettre à jour le plan
         */
        majApport(): void;
        /**
         * Mise à jour du plan de financement et du reste à financer en fonction de l'apport
         */
        private madDonnesLiees();
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class FinancementFraisAccessoiresControleur implements MyWay.UI.ITuileHandler {
        private $location;
        private financementService;
        private fraisAccessoiresService;
        private modalService;
        static $inject: Array<string>;
        configTuileAvecMarquage: MyWay.UI.iMwConfigTuile;
        constructor($location: ng.ILocationService, financementService: Service.FinancementService, fraisAccessoiresService: Service.FraisAccessoiresService, modalService: MyWay.UI.IModalService);
        ajouterFrais(creditInterne: Modele.ICreditInterne): void;
        /**
         * Action effectuée lorsqu'il y a un clic sur une tuile de frais
         */
        onTuileClick(objetAccessoire: Modele.IAccessoire): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        /**
         * Vérifie que la manipulation des frais est autorisée sur ce crédit : il ne doit pas être en "optimisé non calculé"
         * @param {boolean} creationFrais : indique si c'est une demande de création ou de modification
         * @param {Modele.ICreditInterne} creditInterne
         * @param {string} libelleTypeAccessoire : utilse en cas de modification pour afficher le type de frais
         */
        private verificationSaisieFrais(creationFrais, creditInterne, libelleTypeAccessoire);
        /**
         * Afficher la popin avertissant qu'il y a une erreur
         * @param {string} titre de la popin
         * @param {string} contenu du message à afficher
         */
        private popinAlerte(titre, texte);
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class ResteAFinancerControleur {
        private $q;
        private $rootScope;
        private initialisationService;
        private financementService;
        private resteAFinancerService;
        private creditConsoService;
        private fraisAccessoiresService;
        static $inject: Array<string>;
        affectationRafTotale: Enum.AffectationResteAFinancer;
        affectationRafRepartition: Enum.AffectationResteAFinancer;
        modeAffectation: Enum.AffectationResteAFinancer;
        affectationTotaleSelect: Modele.ISelectboxRafTotal;
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, initialisationService: Service.InitialisationService, financementService: Service.FinancementService, resteAFinancerService: Service.ResteAFinancerService, creditConsoService: Service.CreditConsoService, fraisAccessoiresService: Service.FraisAccessoiresService);
        /**
         * Action suite à la selection d'un élément dans la liste des propositions pour l'affectation totale
         * L'affectation se fait sur l'apport OU sur un crédit
         */
        selectChoixAffectationTotale(): void;
        /**
         * Ajoute un montant à l'apport et maj du plan de financement
         * @param {number} montantAjoute
         */
        private affectationApport(montantAjoute);
        /**
         * Rénitialise les données suite au choix du mode d'affectation
         */
        selectModeAffectation(): void;
        /**
         * Ajoute un montant à l'apport
         */
        majApport(): void;
        /**
         * Mise à jour et vérification des données saisies pour les crédits internes
         */
        majCreditsInterneCalculResteAFinancer(oCreditInterne: Modele.ICreditInterne): void;
        /**
         * Mise à jour et vérification des données saisies pour les crédits internes
         */
        majCreditsConsoCalculResteAFinancer(oCreditExistant: Modele.CreditExistant): void;
        /**
         * Annuler toutes les actions réalisées dans le bloc "Reste à financer"
         */
        annulerCalculResteAFinancer(): void;
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class MarqueurAccordPrincipeControleur {
        private syntheseService;
        static $inject: string[];
        accordOk: Enum.FeuTricolore;
        accordACompleter: Enum.FeuTricolore;
        accordAApprondir: Enum.FeuTricolore;
        constructor(syntheseService: instructionCredit.Service.SyntheseService);
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class ChargeCreditExistantDetailsControleur {
        private $scope;
        private initialisationService;
        private clientService;
        static $inject: string[];
        fonctionFermer: () => void;
        etapePopin: Enum.PopinEtape;
        isCreditCE: boolean;
        creditExistant: instructionCredit.Modele.CreditExistant;
        chargementEnCours: boolean;
        personnesAffectation: Array<Modele.PersonneAffectation>;
        listeTypeCredit: Array<Modele.ISelectboxNumber>;
        listeMotifRemboursementAnticipe: Array<Modele.ISelectbox>;
        private _creditExistantDepart;
        private _personneAffectationCredit;
        typeCreditSelect: Modele.ISelectboxNumber;
        motfRemboursementAnticipeSelect: Modele.ISelectbox;
        priseEnCompteCredit: boolean;
        listeErreurs: Array<Object>;
        openDateDebutAmmortissement: boolean;
        libelleActionPrincipal: string;
        /**
         * Permet de construire la popin
         */
        constructor($scope: ng.IScope, initialisationService: instructionCredit.Service.InitialisationService, clientService: instructionCredit.Service.ClientService);
        /**
         *  En modification, mise à jours du code crédit en fonction de la selection
         */
        setCodeTypeCredit(): void;
        /**
         *  En modification, maj
         */
        setMotfRemboursementAnticipe(): void;
        /**
         *  En modification, mise à jour de la prise en compte ou non du crédit et réinitialisation des données
         */
        setPriseEnCompteCredit(): void;
        /**
         * Retour à l'étape précedente : la 1, vue générale
         */
        etapePrecedente(): void;
        /**
         * Validation de la popin: enregistrement des données
         * Vérification de l'authenticité des données et maj du crédit
         */
        validerDetails(): void;
        /**
         * Passe à l'étape suivante: Si caution, fermeture, si non, passage aux phases
         */
        private majEtapeSuivante();
        /**
         * Vérifie que les données sont correctes
         * @returns Un boolean indiquant si des erreurs sont présentes
         */
        private verificationDonnees();
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class ChargeCreditExistantGeneralControleur {
        private $scope;
        private initialisationService;
        private clientService;
        static $inject: string[];
        etapePopin: Enum.PopinEtape;
        isCreditCE: boolean;
        creditExistant: Modele.CreditExistant;
        chargementEnCours: boolean;
        private _creditExistantDepart;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin
         */
        constructor($scope: ng.IScope, initialisationService: instructionCredit.Service.InitialisationService, clientService: instructionCredit.Service.ClientService);
        /**
         * Ici l'objet crédit existant doit être traité comme une charge
         */
        validerVueGenerale(): void;
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class ChargeCreditExistantPhasesControleur implements MyWay.UI.ITuileHandler {
        private $scope;
        private initialisationService;
        static $inject: string[];
        fonctionFermer: () => void;
        etapePopin: Enum.PopinEtape;
        isCreditCE: boolean;
        creditExistant: instructionCredit.Modele.CreditExistant;
        chargementEnCours: boolean;
        listeTypePhase: Array<Modele.ISelectbox>;
        listePeriodicitePhase: Array<Modele.ISelectbox>;
        configTuilesPhases: MyWay.UI.iMwConfigTuile;
        listePhases: Array<Modele.PhaseCreditExistant>;
        ajoutPhase: boolean;
        modificationPhase: boolean;
        phaseTraitee: Modele.PhaseCreditExistant;
        typePhaseSelect: Modele.ISelectbox;
        periodiciteSelect: Modele.ISelectbox;
        listeErreurs: Array<Modele.ErreurFormulaire>;
        /**
         * Permet de construire la popin
         */
        constructor($scope: ng.IScope, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Récupère en fonction du code de l'objet passé en paramètre le libellé correspondant afin de l'afficher dans la tuile
         */
        getLibelle(codeTypePhase: string): string;
        /**
         * Click sur une tuile de phase pour édition
         */
        onTuileClick(objetTuile: Modele.PhaseCreditExistant): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        /**
         * Souhaite ajouter une phase au crédit
         */
        btnTuileAjouterPhase(): void;
        /**
         * Quitte le mode d'édtion d'une phase et reset l'IHM
         */
        annulerEditionPhase(): void;
        /**
         * Supprime la phase du crédit
         */
        supprimerPhase(): void;
        /**
         * Enregistre la phase
         */
        enregistrerPhase(): void;
        /**
         *  Mise à jour du code typePhase en fonction de la selection au sein de la liste proposée
         */
        setTypePhase(): void;
        /**
         *  Maj du code periodeAmortissement en fonction de la selection au sein de la liste proposée
         */
        setPeriodeAmortissementCredit(): void;
        /**
         * Retour à l'étape précedente : la 2, consultation/modification des détails
         */
        etapePrecedente(): void;
        /**
         * Validation de la popin, enregistrement de toutes les données
         */
        validerPopin(): void;
        /**
         * Charge les phases pour le crédit en cours ainsi que le crédit à la demande
         */
        private initialisationDonnees(chargerCredit);
        /**
         * Formate les phases fournit par le service pour les rendre utilisables dans le vue
         * @param {Array<Modele.IPhaseCreditExistant>} dataPhases
         */
        private formaterPhases(dataPhases);
        /**
         * Réinitialise l'affichage des tuiles et du panneau d'édition
         */
        private initTuilesPhases();
        /**
         * Initialise la partie d'édition d'une phase (ajout ou modification)
         */
        private initEditionPhase(phaseExistante?);
        /**
         * Vérifie que les données sont correctes
         * @returns Un boolean indiquant si des erreurs sont présentes
         */
        private verificationDonneesPhase();
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class ModaleFraisTiersControleur {
        private $q;
        private $modalInstance;
        private modaleFactory;
        private initialisationService;
        private fraisAccessoiresService;
        static $inject: Array<string>;
        accessoire: Modele.IAccessoireComplementaire;
        beneficiaire: Modele.IBeneficiaire;
        loader: boolean;
        typeRoleSelect: Modele.IModalitesTypeDeRoleTiersParAccessoire;
        listeTypeRoles: Array<Modele.IModalitesTypeDeRoleTiersParAccessoire>;
        rechercheLibelleTiers: string;
        rechercheCpTiers: string;
        erreurRechercheLibelleTiers: string;
        tableauTiers: MyWay.UI.ImwTableOptions;
        constructor(data: any, $q: ng.IQService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, modaleFactory: Service.ModaleFactory, initialisationService: Service.InitialisationService, fraisAccessoiresService: Service.FraisAccessoiresService);
        /**
         * Ferme la popin
         */
        close(): void;
        /**
         * Recherche les tiers correpondnates au rôle selectionné et à la recherche
         */
        rechercherTiers(): void;
        /**
         * Enregistre l'affectation du bénéficiaire
         */
        retenirBeneficiaire(): void;
        /**
         * Supprime l'affectation existante
         */
        supprimerBeneficiaire(): void;
        /**
         * Active la recherche par tiers
         * Effectue la recherche des rôles dispos pour cet accessoire
         */
        private activerRechercheTiers();
        /**
         * Initialise le tableau de résultat et l'erreur
         */
        private initDonneesRecherche();
        /**
         * En cas de non résultat lors de la recherche de tiers, une popin de message d'erreur s'affiche
         */
        private rechercheSansResultat();
        /**
         * Construit le tableau de résultat de tiers
         */
        private constructionTableauTiers();
    }
}

declare module instructionCredit {
    class ProjetBienAVendreDetailControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private initialisationService;
        private projetService;
        private mwsfAdresseService;
        static $inject: string[];
        loaderPanneau: boolean;
        detailsOpen: boolean;
        private _chargerDetails;
        private _initialisationAdresseBienAvendre;
        listeObjetsBienVendu: Array<Modele.ISelectbox>;
        listeTypesDeVente: Array<Modele.ISelectboxNumber>;
        listeModesAcquisition: Array<Modele.ISelectboxNumber>;
        objetBienVenduSelect: Modele.ISelectbox;
        typeDeVenteSelect: Modele.ISelectboxNumber;
        modeAcquisitionSelect: Modele.ISelectboxNumber;
        openedDateAcquisition: boolean;
        openedDateEstimation: boolean;
        affichageAdresseBienAVendre: myway.comAdresseDqe.Adresse;
        settingsAdresseBienAVendre: myway.comAdresseDqe.IAdresseSettings;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: Service.InitialisationService, projetService: Service.ProjetService, mwsfAdresseService: myway.comAdresseDqe.AdresseService);
        /**
         * Prise en compte ou non d'un bien à vendre
         */
        setPresBienAVendre(): void;
        /**
         *  Indique que l'élément doit être mis à jour
         */
        majBienAVendre(): void;
        /**
         * Maj de l'objet du bien vendu
         */
        setObjetBienVendu(): void;
        /**
         * Maj du type de vente
         */
        setTypeDeVente(): void;
        /**
         * Maj du mode d'occupation
         */
        setModeAcquisition(): void;
        /**
         * Calcul automatique du prix net vendeur :
         * Différence entre le montant de l'estimation et le montant de CRD sur le bien à vendre.
         */
        calculPrixNetVendeur(): void;
        /**
         * Mise à jour des infos adresse pour le bien à vendre
         */
        miseAJourAdresseBienAVendre(): void;
        /**
         * Initialise les données lors de la première ouverture du panneau
         */
        private initDetailsBienAVendre();
        /**
         * Initialise l'affichage par défaut des liste en fonction des codes
         */
        private initListe();
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class VoletPropositionsControleur implements MyWay.UI.ITuileHandler {
        private $q;
        private $scope;
        private $route;
        private $location;
        private modalService;
        private initialisationService;
        private financementService;
        private modaleFactory;
        static $inject: string[];
        loader: boolean;
        pagePropositions: boolean;
        resteAFinancer: number;
        fonctionAjouterProposition: () => void;
        ouvert: boolean;
        configTuile: MyWay.UI.iMwConfigTuile;
        constructor($q: ng.IQService, $scope: ng.IScope, $route: any, $location: ng.ILocationService, modalService: MyWay.UI.IModalService, initialisationService: instructionCredit.Service.InitialisationService, financementService: Service.FinancementService, modaleFactory: instructionCredit.Service.ModaleFactory);
        /**
         * Changement de l'état ouverture du volet
         */
        changementEtatVolet(): ng.IPromise<any>;
        /**
         * Méthodes permettant d'afficher les informations dans les tuiles du panier
         */
        affichageTuileLigne1(plan: Modele.IPlanFinancementSchema): string;
        affichageTuileLigne2(plan: Modele.IPlanFinancementSchema): string;
        affichageTuileLigne3(plan: Modele.IPlanFinancementSchema): string;
        /**
         *  Changement de proposition dans le panier: initialise les données du nouveau plan et lance son chargement
         */
        changementPlan(idwsMaj: string): void;
        /**
         * Mets à jour les données IHM suite à la demande d'un changement de plan
         */
        private majDonneesIHMChangementPlanFinancement(idws);
        /**
         *  Vérifie si une sauvegarde est nécessaire
         */
        private majPlanFinancement();
        /**
         *  Ajouter proposition
         */
        ajouterProposition(): void;
        /**
         *  Edition proposition
         */
        editionProposition(): void;
        onTuileClick(): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    class EncoursControleur {
        private $scope;
        private initialisationService;
        private contratEpargneLogementService;
        private modalService;
        private clientService;
        private $q;
        static $inject: string[];
        private contratsEpargneLogement;
        private emprunteur;
        private idwsProjet;
        private residencesEncours;
        private residenceEncoursSelectionnee;
        private residenceEncoursTmp;
        private resultatCalculEnCoursEL;
        private restePel;
        private resteCel;
        private encoursLoader;
        /**
         * Constructeur
         */
        constructor($scope: any, initialisationService: Service.InitialisationService, contratEpargneLogementService: Service.ContratEpargneLogementService, modalService: MyWay.UI.IModalService, clientService: Service.ClientService, $q: ng.IQService);
        /**
         * Rafraichissement des encours
         */
        rafraichissementEncours(): void;
        /**
         * Changement des montants PEL
         */
        changeMontantsPel(): void;
        /**
         * Changement des montants CEL
         */
        changeMontantsCel(): void;
        /**
         * Changement de type de résidence
         */
        changeResidence(): void;
    }
}

declare module instructionCredit {
    class FormulaireCreditInterneEpargneLogementControleur {
        private $q;
        private serviceAgentExtended;
        private $location;
        private initialisationService;
        private financementService;
        private contratEpargneLogementService;
        private modaleFactory;
        static $inject: string[];
        creditInterne: Modele.ICreditInterne;
        estPEL: boolean;
        titrePage: string;
        creditAjuste: boolean;
        chargementEnCours: boolean;
        chargementLongEnCours: boolean;
        private _listeDroitsAcquis;
        private _listeDroitsAcquisFormates;
        private _listeContratELCLient;
        tableauDroitsAcquis: MyWay.UI.ImwTableOptions;
        droitAcquisELSelect: Modele.DroitAcquisEL;
        modificationDA: boolean;
        listePriseEnCompteDA: Array<Modele.ISelectbox>;
        priseEnCompteDASelectionnee: Modele.ISelectbox;
        private _listeDroitsAPretEL;
        private _listeDroitsAPretELFormates;
        private _droitAPretELDefaut;
        tableauDroitsPret: MyWay.UI.ImwTableOptions;
        droitAPretELSelect: Modele.DroitAPretEL;
        modificationDP: boolean;
        listePeriodicitesDP: Array<Modele.ISelectbox>;
        periodiciteDPSelectionnee: Modele.ISelectbox;
        alertePrime: boolean;
        texteAlertePrime: string;
        erreurTaux: string;
        /**
         * Permet de construire l'écran de modification de PEL / CEL
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, initialisationService: Service.InitialisationService, financementService: instructionCredit.Service.FinancementService, contratEpargneLogementService: Service.ContratEpargneLogementService, modaleFactory: Service.ModaleFactory);
        /**
         * Action sélection d'un élement dans le tableau
         */
        onSelectionChange(selectedObject: any): void;
        /**
         * Contrôle si modification du droit acquis pour rendre possible le bouton d'enregistrement
         */
        controleModificationDA(): void;
        /**
         * PEL : Modifcation de la prise en compte du droit acquis
         */
        majPriseEnCompteDA(): void;
        /**
         * PEL : Modification de la prise en compte du droit acquis
         */
        modifierPriseEnCompteDA(): void;
        /**
         * CEL : Modification du montant limite du droit acquis
         */
        modifierMontantLimiteDA(): void;
        /**
         * Contrôle si modification du droit à pret pour rendre actif le bouton de calcul
         */
        controleModificationDP(): void;
        /**
         * Calcule du droit à prêt
         */
        calculerDP(): void;
        /**
         *  Vérification du taux
         */
        private verificationTaux();
        /**
         * Lance l'impression pour le document possibilités de prêt EL
         */
        imprimer(): void;
        /**
         * Vérifie si l'utilisateur a réalisé une modifiction dans l'écran pour l'informer
         * Retourne à la page de propositions
         */
        annuler(): void;
        /**
         * Valider le choix en cours et retourne à la page propositions
         */
        valider(): void;
        /**
         * Initialise les données
         */
        private initialisationDonnees();
        /**
         * Initialisation des données et du tableau des droits acquis
         */
        private initDroitsAcquisEtDroitParDefaut(oResultatCalculEL, initialisation);
        /**
         * Initialisation des données et du tableau des droits A Prêt EL
         */
        private initDroitsAPretEL();
        /**
         * Initialise les droits utilisés du crédit en cours
         */
        private initDroitsUtilises();
        /**
         * Formate les droits acquis pour obtenir les données manipulables
         */
        private getDroitsAcquisFormates(listeDroitAcquisELLecture, listeDroitsUtilises, listeLienParente);
        /**
         * récupère le schéma du crédit traité dans la page
         */
        private getCreditInterneSchemaActif();
        /**
         * Construction du tableau de droits acquis
         */
        private initialisationTableauDroitsAcquis();
        /**
         * Construction du tableau de droits à prêt
         */
        private initialisationTableauDroitsPret();
        /**
         * Evénement déclenché lorsqu'il y a un clic sur une ligne du tableau droits acquis
         */
        private onSelectionChangeTableauDroitsAcquis(selectedObject);
        /**
         * Evénement déclenché lorsqu'il y a un clic sur une ligne du tableau Droits à Prêt selon la durée
         */
        private onSelectionChangeTableauDroitsAPret(selectedObject);
        /**
         * Désélectionne le droit sélectionné
         */
        private resetDASelect();
        /**
         * Suite ç un calcul ou au chargement par défaut, affichage de droit à prêt EL traité
         * @param {Modele.ICritereAjustementCredit} critereAjustementCredit
         */
        private finCalculDroitsAPretEL(critereAjustementCredit, initialisation);
    }
}

declare module instructionCredit {
    class ModaleContratEpargneLogementControleur {
        private $scope;
        private data;
        private $q;
        private initialisationService;
        private contratEpargneLogementService;
        private modaleFactory;
        static $inject: string[];
        private _contratELDepart;
        contratEL: Modele.IContratEpargneLogement;
        private modeCreation;
        loader: boolean;
        erreurs: string[];
        rice: MyWay.Model.Rice;
        openDateOuverture: boolean;
        openDateCloture: boolean;
        beneficiaireSelectionne: Modele.IPersonne;
        liensParente: Modele.ILienParente[];
        attributionPrime: boolean;
        lienParenteSelectionne: Modele.ILienParente;
        private _listeTranchesELFormates;
        etape2: boolean;
        tableauDroits: MyWay.UI.ImwTableOptions;
        trancheELSelect: Modele.TrancheEL;
        modificationMontantDroitAcquis: boolean;
        /**
         * Permet de construire la popin de contrat EL
         * @param $scope: ng.IScope
         * @param data: any
         * @param $q: ng.IQService
         * @param initialisationService: Service.InitialisationService
         * @param contratEpargneLogementService: Service.ContratEpargneLogementService
         * @param modaleFactory: Service.ModaleFactory
         */
        constructor($scope: any, data: any, $q: ng.IQService, initialisationService: Service.InitialisationService, contratEpargneLogementService: Service.ContratEpargneLogementService, modaleFactory: Service.ModaleFactory);
        affichePersonnes(item: Modele.PersonneAffectation): boolean;
        changeBeneficiaire(): void;
        changeAttributionPrime(): void;
        changeLienParente(): void;
        /**
         * Permet d'accéder à l'étape suivante
         */
        etapeSuivante(): void;
        /**
         * Enregistre le contrat
         * @returns
         */
        private enregistrerContrat();
        /**
         * Construction du tableau de droits
         */
        private initialisationTableauDroits();
        /**
         * Action sélection d'un élement dans le tableau
         */
        onSelectionChange(selectedObject: Object): void;
        /**
         * Contrôle si modification du montant de droit acquis
         */
        controleModificationMontantDroitAcquis(): void;
        /**
         * Modification du montant de droit acquis
         */
        modifierMontantDroitAcquis(): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de passer à l'étape précédente
         */
        etapePrecedente(): void;
        /**
         * Permet de valider la popin
         */
        valider(): void;
        /**
         * Permet de supprimer le contrat
         */
        supprimer(): void;
    }
}

declare module instructionCredit {
    class FormulaireCompteCourantControleur {
        private $q;
        private initialisationService;
        private financementService;
        static $inject: string[];
        private creditInterne;
        private compteCourant;
        private loader;
        /**
         * Permet de construire l'écran de modification du compte courant
         * @param $q: ng.IQService
         * @param initialisationService: Service.InitialisationService
         * @param financementService: Service.FinancementService
         */
        constructor($q: ng.IQService, initialisationService: Service.InitialisationService, financementService: Service.FinancementService);
        /**
         * Calcule du droit à prêt
         */
        calculerHypotheque(): void;
    }
}

declare module instructionCredit {
    class CreditDetailControleur {
        private $q;
        private $location;
        private $document;
        private navigationInterneService;
        private navigationService;
        private modaleFactory;
        private initialisationService;
        private creditInterneService;
        static $inject: string[];
        private creditInterneTemporaire;
        private produitFinancier;
        private compteCourant;
        private estPelCel;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, $location: ng.ILocationService, $document: ng.IDocumentService, navigationInterneService: Service.NavigationInterneService, navigationService: MyWay.UI.INavigationService, modaleFactory: Service.ModaleFactory, initialisationService: Service.InitialisationService, creditInterneService: Service.CreditInterneService);
        /**
         * Permet d'annuler les modifications
         */
        annuler(): void;
        /**
         * Permet d'enregistrer les modifications
         */
        valider(): void;
        /**
         * Permet de revenir à la page précédante
         */
        retourPagePrecedente(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutCreditInterneControleur implements MyWay.UI.ITuileHandler {
        private $scope;
        private data;
        private $q;
        private $filter;
        private financementService;
        private initialisationService;
        private personnalisationService;
        private creditInterneService;
        static $inject: string[];
        etapeUne: Enum.PopinEtape;
        etapeDeux: Enum.PopinEtape;
        etapePopin: Enum.PopinEtape;
        private creditInterneTemporaire;
        private modeManuel;
        private typePret;
        private wsModeOptim;
        private wsModeManuel;
        private listeCategorieAffichee;
        private listeProduitAffichee;
        private listeProduitsStandard;
        private listeProduitsLissage;
        private listeProduitsModeManuel;
        private listeGammesLissage;
        private produitSelectionne;
        private creditsLoader;
        private configTuile;
        private affichageTuilePTZ;
        private affichageTuileCEL;
        private affichageTuilePEL;
        /**
         * Permet de construire la popin du bien a vendre
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: any, data: any, $q: ng.IQService, $filter: any, financementService: Service.FinancementService, initialisationService: Service.InitialisationService, personnalisationService: Service.PersonnalisationService, creditInterneService: Service.CreditInterneService);
        /**
         * Chargement des produits optimisés
         */
        appelsWsModeOptim(): ng.IPromise<any>;
        /**
         * Chargement des produits manuels
         */
        appelsWsModeManuel(): ng.IPromise<any>;
        /**
         * Changement de mode optim/manuel
         */
        changeMode(modeManuel: boolean): void;
        /**
         * Changement vers mode manuel
         */
        chargeModeManuel(): void;
        /**
         * Changement de catégorie standard/lissage
         */
        changeCategorie(categorie: string): void;
        /**
         * Gestion de l'affichage du bloc tuiles
         */
        private gestionAffichageTuile();
        onTuileClick(objetTuile: string): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        onSelectionChangeNavcolList(selectionCol: any, colId: string): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet d'accéder à l'étape suivante dans le cas de l'eco-ptz
         */
        etapeSuivante(): void;
        ajoutCreditModeOptim(idProduitFinancier: string): ng.IPromise<void>;
        /**
         * Initiliase les propriétés d'un crédit optimisé
         */
        private initCreditOptimise();
        ajoutCreditModeManuel(produitAutorise: Modele.IProduitsAutorises): ng.IPromise<void>;
        /**
         * Initiliase le montant par défaut du crédit
         * @param {string} idProduitSelectionne
         * @param {number} montantMaximumCredit
         * @returns
         */
        private getMontantEmprunte(idProduitSelectionne, montantMaximumCredit);
    }
}

declare module instructionCredit {
    class ModaleModificationCreditInterneControleur {
        private $scope;
        private $rootScope;
        private $q;
        private serviceAgentExtended;
        private financementService;
        private initialisationService;
        private creditInterneService;
        private modaleFactory;
        private assuranceService;
        static $inject: Array<string>;
        private data;
        etapePopin: Enum.PopinEtape;
        private creditInterneTemporaire;
        private modaleData;
        private phases;
        private lignesPhase;
        private lignesPhaseInitial;
        private phasesChargees;
        private modeCreation;
        private modeManuel;
        private calculAFaire;
        private saisieTaux;
        private calculMensualiteEffectue;
        private calculMensualiteAFaire;
        erreurTaux: string;
        erreurDuree: string;
        private creditsLoader;
        /**
         * Constructeur
         */
        constructor($scope: any, $rootScope: ng.IRootScopeService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, financementService: Service.FinancementService, initialisationService: Service.InitialisationService, creditInterneService: Service.CreditInterneService, modaleFactory: Service.ModaleFactory, assuranceService: Service.AssuranceService);
        /**
         * Permet de revenir à l'étape précédente dans le cas de l'eco-ptz
         */
        etapePrecedente(): void;
        /**
         * Permet de valider la popin
         */
        valider(): void;
        /**
         * Permet de valider le PTZ
         */
        validerPtz(): void;
        /**
         * Vérifie qu'une maj du plan n'est pas nécessaire, puis ferme la popin
         */
        private fermeturePopin();
        supprimer(): void;
        /**
         * Contrôle si des modifications ont été effectuées
         */
        private controleModifications();
        /**
         * Gestion de la popin de confirmation d'annulation
         */
        private gestionPopinConfirmationAnnulation();
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de'annuler les modifications faites sur un crédit manuel
         */
        private annulationModeManuel();
        /**
         * Permet de gérer la fermeture dans le cas du template (étape 2) ou d'une modale (modification directe)
         */
        private fermeture(param);
        /**
         * Permet de charger les conventions assurances en asynchrone (peu importe le résultat) pour en charger le plus possible
         */
        private chargerConventionsAssurance();
        /**
         * Gestion bouton valider
         */
        getEtatBoutonValider(taux: number): boolean;
        /**
         * Permet de savoir si le crédit est un PTZ
         */
        private estCreditPtz();
    }
}

declare module instructionCredit {
    class ModificationCreditInterneModeManuelControleur {
        private $scope;
        private $rootScope;
        private $location;
        private $q;
        private $filter;
        private financementService;
        private initialisationService;
        private creditInterneService;
        private projetService;
        private contratEpargneLogementService;
        static $inject: string[];
        private champsAffiches;
        creditsLoader: boolean;
        private creditInterne;
        private produitFinancier;
        private libelleLabelTauxDefini;
        private calculMensualiteEffectue;
        private calculMensualiteAFaire;
        dureesPossibles: Object[];
        dureePossibleSelectionee: Object;
        private phases;
        private lignesPhase;
        private lignesPhaseInitial;
        private erreursDureePhase;
        private totalMontantTravauxEcoPtz;
        private erreurDuree;
        private erreurMontant;
        private erreurTaux;
        private erreursPtz;
        resultatCalculEnCoursEL: Modele.IResultatCalculEnCoursEL;
        resultatCalculEL: Modele.IResultatCalculEL;
        libellePeriodicite: string;
        private compteCourant;
        /**
         * Constructeur
         */
        constructor($scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $q: ng.IQService, $filter: any, financementService: Service.FinancementService, initialisationService: Service.InitialisationService, creditInterneService: Service.CreditInterneService, projetService: Service.ProjetService, contratEpargneLogementService: Service.ContratEpargneLogementService);
        /**
         * Changement de selection de la durée
         */
        changeDureePossible(): void;
        /**
         * Initailise les données d'un crédit de type Epargne Logement
         * Calcul les en cours et charges les Droits Acquis
         */
        private initCreditEpargneLogement();
        /**
         * Permet de lancer le calcul de mensualité
         */
        calculMensualite(): void;
        /**
         * Controle de la durée des phases selectionnées
         */
        private controleDureePhase();
        /**
         * Changement de la durée du crédit
         */
        changementDureeCredit(): void;
        /**
         * Permet de récupérer la mensualité du crédit
         */
        getMensualite(): number;
        /**
         * Permet d'ajuster le crédit
         */
        ajusterCreditEpargneLogement(): void;
        /**
         * Permet de définir si la phase est obligatoire ou non
         */
        getObligationPhase(lignePhase: Modele.ILignePhaseCredit): boolean;
        /**
         * Permet de récupérer le libelle de la phase
         */
        getLibellePhase(lignePhase: Modele.ILignePhaseCredit): string;
        /**
         * Changement de la durée d'une des phases
         */
        changementDureePhase(lignePhase: Modele.ILignePhaseCredit, index: number): void;
        /**
         * Vérification de la durée de la phase
         */
        verificationBornesDureePhase(lignePhase: Modele.ILignePhaseCredit): string;
        /**
         * Recalcul de la durée de la dernière phase
         */
        recalculDureeDernierePhase(): void;
        /**
         * Accéder à la page détail du compte courant
         */
        detaillerCompteCourant(): void;
        /**
         * si c'est un éco-ptz, suppression des propriétés qui génèrent des erreurs
         */
        private formateCreditEcoPatz();
    }
}

declare module instructionCredit {
    class ModificationCreditInterneModeOptimControleur {
        private $rootScope;
        private $location;
        private creditInterneService;
        private initialisationService;
        static $inject: string[];
        private champsAffiches;
        private creditInterne;
        private produitFinancier;
        private calculAFaire;
        private saisieTaux;
        private libelleLabelTauxDefini;
        private inclurePriorite;
        private montantCreditInterieur;
        private listeNombrePeriodesCredit;
        private infobulleModeOptimisation;
        private infobulleEpargneLogementDuree;
        private infobulleEpargneLogementObligatoire;
        private dureeAnneesPELCEL;
        private erreurTaux;
        private erreurDuree;
        modeCreation: boolean;
        /**
         * Constructeur
         */
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService, creditInterneService: Service.CreditInterneService, initialisationService: Service.InitialisationService);
        /**
         *  Contrôle lors de la saisie du montant : ne doit pas être inférieur à 1 (hors saisie du 0)
         */
        controleMontant(keyEvent: any): void;
        /**
         *  Changement de durée
         */
        changementDuree(): void;
        /**
         * Accéder à la page détail du crédit
         */
        detaillerCredit(): void;
    }
}

declare module instructionCredit {
    class ModificationCreditInternePtzControleur {
        private financementService;
        static $inject: string[];
        private creditPtz;
        private produitFinancier;
        private typeMensualite;
        private phaseDiffereTotal;
        private phaseDiffereTotalProduitFinancier;
        private dureePhaseDiffereTotalTmp;
        private uniteDureePhaseDiffereTotal;
        private phaseAmortissement;
        private phaseAmortissementProduitFinancier;
        private dureePhaseAmortissementTmp;
        private uniteDureePhaseAmortissement;
        private erreursPtz;
        private infobullePhaseDiffereTotal;
        private infobulleMontantReglement;
        /**
         * Permet de construire la popin des credits Ptz
         * @param financementService: Service.FinancementService
         */
        constructor(financementService: Service.FinancementService);
        /**
         * Ouverture du cadenas du champ phase de différé total
         */
        deverrouillerPhaseDiffereTotal(): void;
        /**
         * Fermeture du cadenas du champ phase de différé total
         */
        verrouillerPhaseDiffereTotal(): void;
        /**
         * Ouverture du cadenas du champ montant réglement
         */
        deverrouillerMontantReglement(): void;
        /**
         * Fermeture du cadenas du champ montant réglement
         */
        verrouillerMontantReglement(): void;
    }
}

declare module instructionCredit.Modele {
    interface ICapaciteRemboursement {
        tauxEndt: number;
        tauxEndtAvecAPL: number;
        restantVivr: number;
        echeanceMaximum: number;
    }
}

declare module instructionCredit.Modele {
    interface IEntreeRessourceCharge {
        codeIndiceRessourceCharge: number;
        typeRessourceCharge: string;
        montantRessourceCharge: number;
        nombrePeriode: number;
        codeExisteRessourceCharge: number;
        codeDevise: string;
    }
    class EntreeRessourceCharge implements IEntreeRessourceCharge {
        codeIndiceRessourceCharge: number;
        typeRessourceCharge: string;
        montantRessourceCharge: number;
        nombrePeriode: number;
        codeExisteRessourceCharge: number;
        codeDevise: string;
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IAdrOpposition {
        codeOpposition: string;
        libelleOpposition: string;
    }
}

declare module instructionCredit.Modele {
    interface IAdrRisqueEpargne {
        codeFamilleProduitAdresse: string;
        libelleFamilleProduitAdresse: string;
        codeProduitCEHorsCE: number;
        codeTypeEpargneLiquide: number;
    }
}

declare module instructionCredit.Modele {
    interface ICatSocioProfessionnelle {
        codeClasseRisqueCSP: number;
        libelleClasseRisqueCSP: string;
    }
}

declare module instructionCredit.Modele {
    class CategorieEmprunteur {
        codeCategorieEmprunt: string;
        libelleCategorieEmprunteur: string;
        codeTypeMarche: number;
        libelleCreationCategorieEmprunt: string;
        numeroOrdreClasse: number;
        /**
         * Construction d'une catégorie
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IChargePersonne {
        typeDeCharge?: string;
        montantCharge?: number;
        tauxPondereCharge?: number;
        nombrePeriodeParAn?: number;
        codeDevise?: string;
        numeroContratEpargne?: string;
        codeExisteRessourceApreOper?: number;
        idPersonne?: string;
        idGrpeIntervenant?: string;
        idws?: string;
        statut?: string;
    }
    class ChargePersonne implements IChargePersonne {
        typeDeCharge: string;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        constructor();
    }
    class ChargePersonneMaj {
        typeDeCharge: string;
        montantCharge: number;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idws: string;
        constructor();
        constructor(charge: IChargePersonne);
    }
}

declare module instructionCredit.Modele {
    interface IComptePersonne {
        numeroCompte?: string;
        dateOuvertureProduitCE?: number;
        modeComposition?: number;
        codeDeviseCompte: string;
        typeCompte?: string;
        dateOuverture?: number;
        titre?: string;
        idPersonne?: string;
        idws?: string;
        isCe?: boolean;
        dateOuvertureProduitCEDate?: Date;
        dateOuerCompteDepoHorsCEDate?: Date;
        dateOuvertureDate?: Date;
        codeProduitCE?: number;
        numeroEntiteTitulaire?: number;
        libelleEntiteTitulaire?: string;
        codeEtatProduit?: number;
        soldMoyenLongTermeCompteDepoCE?: number;
        soldMinimumCompteDepoCE?: number;
        soldRelCompteDepoCE?: number;
        codeTypeCartographie?: number;
        dateDelvCartographie?: string;
        codeTypeDecvCompteDepo?: number;
        montantDecvAutreSurCompteDepo?: number;
        montantTotalVersementCreditReleaseSurCompteDepo?: number;
        nombreJourDepsAutreDecv?: number;
        montantPrelExteReleaseSurCompteDepo?: number;
        codeDepsJustificatif?: number;
        codePresDecvIrreSurCompteDepo?: number;
        codeExisteCartographieBancaireHorsCE?: number;
        codeComnRelvCompteHorsCE?: number;
        codeExisteCheq?: number;
        soldMoyenMensCreationCompteDepoCE?: number;
        mvtCreditMensSurCompteDepo?: number;
        codeTypeFctCompteDepoCEHorsCE?: number;
        dateOuerCompteDepoHorsCE?: number;
        codeEtablissement?: string;
        codeGuic?: string;
        referenceProduitCE?: string;
        nombreJourDepsAutrePourCompteProf?: number;
        codeContentieuxOuPretDimpaye?: number;
    }
    class ComptePersonne implements IComptePersonne {
        codeComnRelvCompteHorsCE: number;
        codeDepsJustificatif: number;
        codeDeviseCompte: string;
        codeEtatProduit: number;
        codeExisteCartographieBancaireHorsCE: number;
        codeExisteCheq: number;
        codePresDecvIrreSurCompteDepo: number;
        codeProduitCE: number;
        codeTypeCartographie: number;
        codeTypeDecvCompteDepo: number;
        codeTypeFctCompteDepoCEHorsCE: number;
        dateDelvCartographie: string;
        dateOuerCompteDepoHorsCE: number;
        dateOuvertureProduitCE: any;
        libelleEntiteTitulaire: string;
        montantDecvAutreSurCompteDepo: number;
        montantPrelExteReleaseSurCompteDepo: number;
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        mvtCreditMensSurCompteDepo: number;
        nombreJourDepsAutreDecv: number;
        numeroEntiteTitulaire: number;
        soldMinimumCompteDepoCE: number;
        soldMoyenLongTermeCompteDepoCE: number;
        soldMoyenMensCreationCompteDepoCE: number;
        soldRelCompteDepoCE: number;
        constructor();
    }
    class ComptePersonneMaj implements IComptePersonne {
        dateOuverture: number;
        codeDeviseCompte: string;
        idws: string;
        codeProduitCE: number;
        numeroEntiteTitulaire: number;
        libelleEntiteTitulaire: string;
        codeEtatProduit: number;
        soldMoyenLongTermeCompteDepoCE: number;
        soldMinimumCompteDepoCE: number;
        soldRelCompteDepoCE: number;
        codeTypeCartographie: number;
        dateDelvCartographie: string;
        codeTypeDecvCompteDepo: number;
        montantDecvAutreSurCompteDepo: number;
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        nombreJourDepsAutreDecv: number;
        montantPrelExteReleaseSurCompteDepo: number;
        codeDepsJustificatif: number;
        codePresDecvIrreSurCompteDepo: number;
        codeExisteCartographieBancaireHorsCE: number;
        codeComnRelvCompteHorsCE: number;
        codeExisteCheq: number;
        soldMoyenMensCreationCompteDepoCE: number;
        mvtCreditMensSurCompteDepo: number;
        codeTypeFctCompteDepoCEHorsCE: number;
        dateOuerCompteDepoHorsCE: number;
        constructor();
        constructor(compte: IComptePersonne);
    }
}

declare module instructionCredit.Modele {
    interface ICreditExistant extends IChargePersonne {
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        dateMER0?: string;
        dateFinCredit?: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        montantPrcheche?: number;
        montantPrmeecheAmortissement?: number;
        mtechePresenceComp?: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        periodeAmortissement?: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        investissementLocatifVisible?: boolean;
        investissementLocatifAccessible?: boolean;
        listeIdPhssCreditExiste?: string[];
        idws?: string;
        libelleLongTableau?: string;
        tauxCalcule?: number;
        invsUsageLocfInitial?: number;
    }
    class CreditExistant implements ICreditExistant {
        typeDeCharge: string;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idPersonne: string;
        idGrpeIntervenant: string;
        idws: string;
        statut: string;
        montantCharge: number;
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        dateMER0: string;
        dateFinCredit: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        montantPrcheche: number;
        montantPrmeecheAmortissement: number;
        mtechePresenceComp: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        periodeAmortissement: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        investissementLocatifVisible: boolean;
        investissementLocatifAccessible: boolean;
        listeIdPhssCreditExiste: string[];
        tauxCalcule: number;
        invsUsageLocfInitial: number;
        montantAAjouter: number;
        montantApresAjout: number;
        constructor(pTypeDeCharge: string);
    }
    class CreditExistantMaj implements ICreditExistant {
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        idws: string;
        constructor();
        constructor(creditExistant: ICreditExistant);
    }
}

declare module instructionCredit.Modele {
    interface IEmprunteur {
        nombreEnfantCharge?: number;
        nombrePersonneGrpe?: number;
        nombrePersonneSuppCharge?: number;
        typeLienEntreLesPersonne?: number;
        nomGrpe?: string;
        ageEnfant?: Array<number>;
        dateDernierRapp?: Date;
        anneNaisEnfant?: Array<number>;
        codeEmplrComun?: number;
        capceprgAvantOper?: number;
        ancnChargeLiesAOperImmobilier?: number;
        valeurPatrimoineImmobilier?: number;
        codeDevise?: string;
        montantPatrimoineMobl?: number;
        nombreVoiture?: number;
        montantRessourcePondere?: number;
        montantChargeEmpruntHorsProjetPondere?: number;
        montantAutreChargePondere?: number;
        denmEmprunt?: string;
        libelleLongEmprunt?: string;
        intlcEmprunt?: string;
        idEntiteTitulaireClient?: string;
        idElementStructureGestion?: string;
        codeCateEmprunt?: string;
        codeTypeMarche?: number;
        codeTypeMarchePersonne?: number;
        codeTypeRevnMeng?: number;
        cateAgntecnmBafi?: number;
        cateClientBafi?: number;
        typeAdmnBafi?: number;
        classeAgentBafi?: string;
        codeSituationFamille?: number;
        codeSituationFamilleRegle?: number;
        nombrePersonneCmpstMeng?: number;
        nombrePersonneACharge?: number;
        nombreActfMeng?: number;
        dateEncoursEpargneLogement?: Date;
        montantEncoursIsssPretPEL?: number;
        montantEncoursIsssPretLEL?: number;
        montantEncoursLivrAutretbl?: number;
        montantEncoursPlnsAutretbl?: number;
        totalRevnAnnulationNets?: number;
        montantRevnMeng?: number;
        stttOccpLogementActuariel?: string;
        codeTitreCivilite?: string;
        nomRaisonSocialeEmprunt?: string;
        intituleLigne1?: string;
        adresseLigne3?: string;
        adresseLigne4?: string;
        codePoste?: string;
        ville?: string;
        compIntituleLigne2?: string;
        adresseLigne5?: string;
        codeDestinataireAutreParObjet?: number;
        codeSecteurRattachement?: string;
        codeJeunMeng?: number;
        presUnePersonneAttnRepnFicp?: boolean;
        presUnePersonneFichFicp?: boolean;
        esperVie?: number;
        esperVieDecision?: number;
        esperVieStress?: number;
        montantRessourceAvenantProjet?: number;
        montantChargeEmpruntAvenantProjet?: number;
        montantAutreChargeAvenantProjet?: number;
        restantVivrAvenantProjet?: number;
        indiceRestantVivrAvenantProjet?: number;
        tauxEndtAvenantProjet?: number;
        listeIdPersonne?: Array<string>;
        listeIdCompteDeptGrpePersonne?: Array<string>;
        listeIdComptePrfsPersonne?: Array<string>;
        listeIdRessourceGrpe?: Array<string>;
        listeIdChargeGrpe?: Array<string>;
        listeIdCreditExisteGrpe?: Array<string>;
        listeIdFamilleEpargnePersonne?: Array<string>;
        listeIdRevnFiscalAssuranceEmprunt?: Array<string>;
        listeIdDonneurPatrimoineImmobilier?: Array<string>;
        idws?: string;
        description?: string;
    }
    class EmprunteurMaj implements IEmprunteur {
        nombreEnfantCharge: number;
        nombrePersonneGrpe: number;
        nombrePersonneSuppCharge: number;
        typeLienEntreLesPersonne: number;
        nomGrpe: string;
        ageEnfant: Array<number>;
        dateDernierRapp: Date;
        anneNaisEnfant: Array<number>;
        codeEmplrComun: number;
        capceprgAvenantOper: number;
        ancnChargeLiesAOperImmobilier: number;
        valeurPatrimoineImmobilier: number;
        codeDevise: string;
        montantPatrimoineMobl: number;
        nombreVoiture: number;
        denmEmprunt: string;
        libelleLongEmprunt: string;
        intlcEmprunt: string;
        idEntiteTitulaireClient: string;
        idElementStructureGestion: string;
        codeCateEmprunt: string;
        codeTypeMarchePersonne: number;
        cateAgentEcnmBafi: number;
        cateClientBafi: number;
        typeAdmnBafi: number;
        classeAgentBafi: string;
        codeSituationFamille: number;
        codeSituationFamilleRegle: number;
        nombrePersonneCmpstMeng: number;
        nombreActfMeng: number;
        dateEncoursEpargneLogement: Date;
        montantEncoursIsssPretPEL: number;
        montantEncoursIsssPretLEL: number;
        montantEncoursLivrAutreEtbl: number;
        montantEncoursPlnsAutreEtbl: number;
        totalRevnAnnulationNets: number;
        montantRevnMeng: number;
        stttOccpLogementActuariel: string;
        codeTitreCivilite: string;
        nomRaisonSocialeEmprunt: string;
        intituleLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        compIntituleLigne2: string;
        adresseLigne5: string;
        codeDestinataireAutreParObjet: number;
        codeSecteurRattachement: string;
        codeJeunMeng: number;
        esperVie: number;
        esperVieDecision: number;
        esperVieStress: number;
        listeIdPersonne: Array<string>;
        idws: string;
        constructor(emprunteur?: IEmprunteur);
    }
}

declare module instructionCredit.Modele {
    interface IEntiteTitulaire {
        codeEtablissement: string;
        codeEtatEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        complementDesignationEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantEntiteTitulaire: number;
        modeCompositionEntiteTitulaire: string;
        modeCompositionIndivision: string;
    }
}

declare module instructionCredit.Modele {
    interface IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        nombreProduitDetnPourUneFamilleProduitAdresse?: number;
        montantValeurEpargneAvantOper?: number;
        libelleCaisseEpargne: string;
        dateValeurEpargne: number;
        montantEpargneApreOper?: number;
        codeDevise?: string;
        idPersonne?: string;
        idws?: string;
        isCe?: boolean;
        dateValorisation?: Date;
    }
    class EpargnePersonne implements IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        libelleCaisseEpargne: string;
        dateValeurEpargne: number;
        codeDevise: string;
        constructor();
    }
    class EpargnePersonneMaj implements IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        nombreProduitDetnPourUneFamilleProduitAdresse: number;
        montantValeurEpargneAvantOper: number;
        libelleCaisseEpargne: string;
        dateValeurEpargne: number;
        montantEpargneApreOper: number;
        idws: string;
        constructor();
        constructor(epargne: IEpargnePersonne);
    }
}

declare module instructionCredit.Modele {
    interface IInformationEntiteTitulaire {
        CaracteristiqueEntiteTitulaire: Modele.ICaracteristiqueEntiteTitulaire;
        listeCompositionEntiteTitulaire: Array<Modele.ICompositionEntiteTitulaire>;
        libelleType?: string;
        designationEntiteTitulaire?: string;
    }
    interface ICaracteristiqueEntiteTitulaire {
        codeAgentGestionEntiteTitulaire: number;
        codeEtablissement: string;
        codeEtatEntiteTitulaire: string;
        codeMotifClotureEntiteTitulaire: string;
        codeTypeDesignationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        complementDesignationBancaire: string;
        dateClotureEntiteTitulaire: string;
        dateMAJEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        identifiantEntiteTitulaire: number;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        sousCodeModeCompositionET: string;
    }
    interface ICompositionEntiteTitulaire {
        codeRangEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantLieuActivite: number;
        identifiantProfessionnel: number;
        identifiantTiers: number;
        indicateurResponsableCompteET: string;
        natureLienET: string;
        libelleType?: string;
    }
}

declare module instructionCredit.Modele {
    interface IInterditBancaire {
        codeRepnBDF: number;
        codeRepnFicp: number;
        codeTypeRepnBDF: string;
        codeTypeRepnFicp: string;
        dateApplicationBDF: string;
        dateApplicationFicp: string;
        libelleRepnBDF: string;
        libelleRepnFicp: string;
        codeArreSurSalr: number;
        dateApplicationFbe: string;
        codeRepnFbe: number;
        codePresListnSurCntrTechniqueRegn: number;
        libelleListnSurCntrTechniqueRegn: string;
        codeCotisationFibenDirg: string;
        idPersonnePhys: string;
        idws: string;
    }
    class InterditBancaireMaj {
        codeRepnBDF: number;
        codeRepnFicp: number;
        codeTypeRepnBDF: string;
        codeTypeRepnFicp: string;
        dateApplicationBDF: string;
        dateApplicationFicp: string;
        libelleRepnBDF: string;
        libelleRepnFicp: string;
        codeArreSurSalr: number;
        dateApplicationFbe: string;
        codeRepnFbe: number;
        codePresListnSurCntrTechniqueRegn: number;
        libelleListnSurCntrTechniqueRegn: string;
        codeCotisationFibenDirg: string;
        idws: string;
        constructor(interdit?: IInterditBancaire);
    }
}

declare module instructionCredit.Modele {
    interface INotationTiers {
        codeSegmentRisque?: string;
        libelleSegmentRisque?: string;
        dateSegmentationRisque?: string;
        codeModeleNotationRisque?: string;
        libelleModeleNotationRisque?: string;
        valeurNoteRisque?: string;
        dateNoteRisque?: string;
        heureNoteRisque?: number;
        codeInscriptionFICP?: string;
        libelleInscriptionFICP?: string;
        dateDebutInscriptionFICP?: string;
        dateFinInscriptionFICP?: string;
        codeTypeFichageFCC?: string;
        libelleTypeFichageFCC?: string;
        dateDebutFichageFCC?: string;
        dateFinFichageFCC?: string;
        dateInterrogationFichage?: string;
        codeContexteMetier?: string;
        libelleContexteMetier?: string;
        codeSituationBDF?: string;
        libelleSituationBDF?: string;
        libelleStatutPersonne?: string;
        codeMotifModificationSain?: string;
        libelleMotifModificationSain?: string;
        dateModificationStatutDouteux?: string;
        dateDecisionPassageDouteux?: string;
        codeEtablissement?: string;
        identifiantTiers?: number;
        codeStatutDouteuxPersonne?: string;
        typeCotationFIBEN?: string;
        valeurCotationFIBEN?: string;
        dateCotationFIBEN?: string;
        dateSituationBDF?: string;
        libelleCotationFIBEN?: string;
        codeCotationCoface?: string;
        dateCotationCoface?: string;
        codeBanqueEntitePilote?: string;
    }
    class NotationTiers implements INotationTiers {
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IOpposition {
        codeOpposition: string;
        libelleOpposition?: string;
        dateDebutOpposition: string;
        dateFinOpposition: string;
        idPersonnePhys: string;
        idws: string;
    }
}

declare module instructionCredit.Modele {
    interface IParamsResteAVivre {
        dateDebutValidite: string;
        dateFinValidite: string;
        nombreDemp: number;
        nombreMinimumPersonneCharge: number;
        nombreMaximumPersonneCharge: number;
        seuilMinimum: number;
        seuilOptimisation: number;
    }
}

declare module instructionCredit.Modele {
    interface IActivitePersonne {
        codeClasseRisqueCSP: number;
        dateEffetCSP: string;
        dateEmbc: string;
        codeTypeContratEmbc: number;
        raisonSocialeEmplr: string;
        codePosteEmplr: string;
        codeApNEmplr: string;
        codeSalrDomiciliationCE: number;
        codePresActiviteSalr: number;
        codePresSuivantPersonne: number;
        nombreKilmEntreLogementTrvl: number;
        dateFinCdd: string;
        codeSecteurActivite: number;
        idPersonnePhys: string;
        libelleTypeContratEmbc: string;
    }
}

declare module instructionCredit.Modele {
    /**
     * Données synthètiques qui permet d'obtenir des données IHM Emprunteur / Personne
     */
    class PersonneAffectation {
        idws: string;
        description: string;
        rolsPersonnePourDossier: Array<string>;
        estEmprunteur: boolean;
        idPersonneSI: string;
        constructor(oPersonne: Modele.IPersonne, oEmprunteur: Modele.IEmprunteur);
        /**
         * Vérifie si la personne est caution sur le dossier
         */
        estCaution(): boolean;
    }
}

declare module instructionCredit.Modele {
    interface IPersonne {
        crteResd?: number;
        cateAgntecnmBafi?: number;
        cateClientBafi?: number;
        cateTypeAdmnBafi?: number;
        classeAgentBafi?: string;
        cleBDF?: string;
        idPersonneSI?: string;
        dateEntrRelationAvecConsolide?: string;
        codeTypePersonne?: number;
        nomRaisonSociale?: string;
        codeAssmPartc?: number;
        intituleAdresse?: string;
        adresseLigne3?: string;
        adresseLigne4?: string;
        codePoste?: string;
        ville?: string;
        complementIntitule?: string;
        adresseLigne5?: string;
        emailPerso?: string;
        numeroTeleProf?: string;
        numeroTelePersonne?: string;
        numeroTcpyProf?: string;
        numeroPortPersonne?: string;
        ensgCommission?: string;
        lieuInscRC?: string;
        numeroInscRC?: string;
        rolsPersonnePourDossier?: Array<string>;
        personneEstAssurance?: boolean;
        numeroOrdrePersonneEmprunt?: number;
        reltnEntrPersonne?: Array<string>;
        listeIdRessource?: Array<string>;
        listeIdCharge?: Array<string>;
        listeIdCompte?: Array<string>;
        listeIdFamilleEpargne?: Array<string>;
        idFicheContact?: string;
        idws?: string;
        codeTitreCivilite?: string;
        libelleTitreCivilite?: string;
        prenom?: string;
        codeSexePersonne?: number;
        nomJeunFill?: string;
        dateNais?: string;
        lieuNais?: string;
        codePersonneCE?: number;
        codeRegimeMatrimonial?: string;
        codeSituationFamille?: number;
        nombrePersonneACharge?: number;
        cateInteret?: string;
        dateEffetSituationFamille?: string;
        codeSalrDomiciliationCE?: number;
        codeModeLogement?: number;
        dateEntrLogement?: string;
        codeCapcJuridique?: number;
        codeTypeCapJuridique?: string;
        codeNational?: number;
        codeSaisieAvisTiersDtnr?: number;
        codeContentieuxHorsComptCE?: number;
        montantEncoursSaccefHorsOprt?: number;
        typeTrspUtilisation?: number;
        codeGeotAdresseDomiciliation?: string;
        codePaysResdEmprunt?: string;
        codePaysLocalisationEmprunt?: string;
        codeProfilEmprunt?: number;
        codePstlLieuNais?: string;
        idActivite?: string;
        idIntdBancaire?: string;
        listeIdOpps?: Array<string>;
        numeroINSEE?: string;
        dateInscRcs?: string;
        dateCreationSoce?: string;
        chiffreAffrHtExrcPrec?: number;
        nombreSalr?: number;
        formeJuridique?: string;
        libelleFormeJuridique?: string;
        typeDroitPersonneMorl?: number;
        montantCapital?: number;
        listeIdPersonnePhys?: Array<string>;
        listeRolePersonnePhys?: Array<string>;
        activite?: instructionCredit.Modele.IActivitePersonne;
        libModeLogement?: string;
        typeDeTransport?: instructionCredit.Modele.ISelectbox;
        catSocioProfessionnelle?: instructionCredit.Modele.ICatSocioProfessionnelle;
        adrsLign3?: string;
        adrsLign4?: string;
        adrsLign5?: string;
        complementIntt?: string;
        checked?: boolean;
        situationFamiliale?: string;
        affichageAdresse?: any;
    }
    class Personne implements IPersonne {
        idws: string;
        description: string;
        constructor(personne: IPersonne);
    }
    class PersonneMaj {
        idPersonneSI: string;
        crteResd: number;
        cateAgntecnmBafi: number;
        cateClientBafi: number;
        cateTypeAdmnBafi: number;
        classeAgentBafi: string;
        cleBDF: string;
        dateEntrRelationAvecConsolide: string;
        nomRaisonSociale: string;
        codeAssmPartc: number;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
        ensgCommission: string;
        lieuInscRC: string;
        numeroInscRC: string;
        idws: string;
        constructor();
        constructor(personne: IPersonne);
    }
    class PersonnePhysiqueMaj {
        codeTitreCivilite: string;
        prenom: string;
        codeSexePersonne: number;
        nomJeunFill: string;
        dateNais: string;
        lieuNais: string;
        codePersonneCE: number;
        codeRegimeMatrimonial: string;
        codeSituationFamille: number;
        nombrePersonneACharge: number;
        cateInteret: string;
        dateEffetSituationFamille: string;
        codeSalrDomiciliationCE: number;
        codeModeLogement: number;
        dateEntrLogement: string;
        codeCapcJuridique: number;
        codeTypeCapJuridique: string;
        codeNational: number;
        codeSaisieAvisTiersDtnr: number;
        codeContentieuxHorsComptCE: number;
        montantEncoursSaccefHorsOprt: number;
        typeTrspUtilisation: number;
        codeGeotAdresseDomiciliation: string;
        codePaysResdEmprunt: string;
        codePaysLocalisationEmprunt: string;
        codeProfilEmprunt: number;
        codePstlLieuNais: string;
        idPersonneSI: string;
        constructor();
        constructor(personne: IPersonne);
    }
    interface IContexteCreationProspect {
        identifiantPersonne: string;
        CLIENT: IContextCreationProspectClient;
        displayName: string;
    }
    interface IContextCreationProspectClient {
        nomFamille: string;
        prenom: string;
        dateNaissance: string;
    }
}

declare module instructionCredit.Modele {
    interface ITiersObjetPrincipal {
        adresseEmployeur?: any;
        chargeImposition: any;
        etablissement?: any;
        identification: ITiersIdentification;
        informationProfessionnelle?: any;
        listeAdresse: any[];
        listeBlocNotes: any[];
        listeCharge: ITiersCharge[];
        listeFraicheurRubrique?: any[];
        listeMedia: any[];
        listeParticulierProjet: any[];
        listeParticulierSensibilite: any[];
        listePatrimoineFinancier: any[];
        listePatrimoineImmobilier: any[];
        listeRevenu: ITiersRevenu[];
        listeTiersLies: any[];
        listeTiersLiesAdministratifs: any[];
        listeTypeRelationEconomique: any[][];
        particulierInformation: IParticulierInformation;
        particulierNotation: any;
        succession: any;
        status?: any;
    }
    interface ITiersIdentification {
        codeEtablissement?: string;
        identifiantPersonne?: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeStatut: any;
        libelleStatut?: any;
        codeTypeRelation: string;
        libelleTypeRelation?: any;
        dateEntreeRelation: number;
        codeGuichetRisque?: string;
        codeMarche?: any;
    }
    interface ITiersCharge {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreCharge: number;
        codeTypeCharge: string;
        nombrePeriode: number;
        montantPeriodiqueCharge: number;
        montantChargeAnnuel: number;
        dateFinValiditeCharge?: any;
        dateDebutValiditeCharge?: any;
    }
    interface ITiersRevenu {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreRevenu: number;
        codeTypeRevenu: string;
        libelleTypeRevenu?: any;
        nombrePeriode: number;
        montantRevenuAnnuel: number;
        dateFinValiditeRevenu?: any;
        dateDebutValiditeRevenu?: any;
        montantPeriodiqueRevenu: number;
    }
    interface IParticulierInformation {
        identifiantPersonne: number;
        codeEtablissement: string;
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libelleCapaciteJuridique: string;
        libellePaysNaissance: string;
        libelleInseePaysDoubleNationalite: string;
        libelleSituationFamiliale: string;
        libelleRegimeMatirimonial: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleTypeContratTravail: string;
        libelleNAFInsee: string;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        autresPrenom: string;
        codeSexe: string;
        dateNaissance: Date;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: Date;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: string;
        codeRegimeMatrimonial: string;
        typeClauseMatrimoniale: string;
        indicDonationEntreEpoux: string;
        nombreEnfantACharge: number;
        categorieSocioprofessionnelle: string;
        nomEmployeur: string;
        dateEffetCSP: string;
        dateEmbaucheEmployeurActuel: Date;
        codeTypeContratTravail: string;
        dateFinContratTravail: Date;
        libelleProfession: string;
        codeResident: string;
        codeAppartenanceReseau: string;
        edsDomiciliation: number;
        codePieceJustif: string;
        dateObtentionPieceJustificative: string;
        refPieceJustificative: string;
        codeTypeNIF: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        edsInterneDomiciliation: number;
        sirenEmployeur: string;
        sirenAutoEntrepreneur: string;
        indicateurAutoEntrepreneur: string;
        indicateurSocietaire: string;
        identifiantRelationtEconomique: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
        dateNaturalisation: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
        indicateurActiviteProfessionnel: string;
        codeGuichetRisque: number;
        identifiantAdresse: number;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeInseeLocalite: string;
        numeroVoiePTT: number;
        codePostalPTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        codeInseePays: string;
        codeTypeAdresse: string;
        codeRetourDistribution: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        libelleInseeLocalite: string;
        codeISOPays: string;
        indicateurEnvoiCourrier: string;
        indiceAmericaniteFATCA: string;
        libelleStatutFATCA: string;
        dateAttributionFATCA: Date;
        codeBlocageVAO: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        statutPro: Modele.IStatutPro;
        gestionPrivee: Modele.IGestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        nif: string;
    }
    interface IGestionPrivee {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: string;
        identifiantExterneEDS: string;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: string;
        identifiantExterneEDS2: string;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
    }
    interface IStatutPro {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: string;
        identifiantInterneAgentModification: string;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
}

declare module instructionCredit.Modele {
    /**
     * Image de l'objet exposé par le service
     */
    interface IPhaseCreditExistant {
        codeTypePhase: string;
        dateDebutPhase: string;
        dateFinPhase?: string;
        dureePhase?: number;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        idCreditExistant?: string;
        idws?: string;
    }
    /**
     * Objet permettant sa manipulation dans la vue au sein d'un fonctionnement à l'aide de tuile
     */
    class PhaseCreditExistant implements IPhaseCreditExistant {
        codeTypePhase: string;
        dateDebutPhase: string;
        dateFinPhase: string;
        dureePhase: number;
        idCreditExistant: string;
        idws: string;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        statut: string;
        marquage: boolean;
        constructor(oPhase?: IPhaseCreditExistant);
    }
    /**
     * Pour la mise à jour de la phase
     */
    class PhaseCreditExistantMaj implements IPhaseCreditExistant {
        codeTypePhase: string;
        dateDebutPhase: string;
        dateFinPhase: string;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        idws: string;
        constructor(oPhase: PhaseCreditExistant);
    }
    /**
     * Pour la création d'une phase
     */
    class AjouterPhaseCreditExistant implements IPhaseCreditExistant {
        codeTypePhase: string;
        dateDebutPhase: string;
        dureePhase: number;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        identifiantDossier: string;
        idCreditExistant: string;
        constructor(oPhase: IPhaseCreditExistant, oIdCreditExistant: string, oIdentifiantDossier: string);
    }
    /**
     * Objet de retour suite à la création d'une phase
     */
    interface IResultatAjoutPhaseCreditExistant {
        creditExistantLecture: Modele.CreditExistant;
        listePhaseCreditExistantLecture: Array<Modele.IPhaseCreditExistant>;
    }
}

declare module instructionCredit.Modele {
    interface IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idEmprunt?: string;
        idws?: string;
        titre?: string;
    }
    class RevenuFiscalPersonne implements IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idEmprunt: string;
        constructor();
    }
    class RevenuFiscalMaj implements IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idws: string;
        constructor();
        constructor(revenuFiscal: IRevenuFiscalPersonne);
    }
}

declare module instructionCredit.Modele {
    interface IRevenuPersonne {
        typeRessource: string;
        montantRessource?: number;
        tauxPondereRessource?: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        idPersonne?: string;
        idGrpeIntervenant?: string;
        idws?: string;
        LibellePers?: string;
        statut?: string;
    }
    class RevenuPersonne implements IRevenuPersonne {
        typeRessource: string;
        tauxPondereRessource: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        constructor();
    }
    class RevenuPersonneMaj implements IRevenuPersonne {
        typeRessource: string;
        montantRessource: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        idws: string;
        constructor();
        constructor(revenu: IRevenuPersonne);
    }
}

declare module instructionCredit.Modele {
    class SituationFamilialeEmprunteur {
        codeSituationFamille: number;
        libelleSituationFamille: string;
        typeSituationFamille: number;
        /**
         * Construction d'une situation familiale
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IStatutRessource {
        libelle: string;
        code: string;
    }
}

declare module instructionCredit.Modele {
    interface IComplementDossier {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: Date;
        idws: string;
    }
    class ComplementDossier {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: Date;
        idws: string;
        constructor(libelle: string);
    }
    class ComplementDossierMaj {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: Date;
        idws: string;
        constructor(complement?: IComplementDossier);
    }
}

declare module instructionCredit.Modele {
    interface ICoutObjet {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idTravauxFinancier: string;
    }
}

declare module instructionCredit.Modele {
    interface IDossierComplet {
        idDossier: string;
        versionDossier: number;
        codeImprParExpressionVersement: number;
        codeApplicationChargeDossier: number;
        nombrePassOffre: number;
        dateDernierReslAdresse: string;
        dateHorizonProjet: string;
        codeVisbInstruction: number;
        dossierExisteCentral: boolean;
        nombrePersonneAssuranceParDeft: number;
        modificationEffcPendantSess: boolean;
        modeOuvertureDossier: number;
        dossierModification: boolean;
        techniqueVent: number;
        codeLivrnImme: boolean;
        numeroAccrCmps: number;
        engagementRevc: number;
        dateSignePret: string;
        evenMomnVertPourContratConf: string;
        dateTraitement: string;
        dateTraitementRegle: string;
        modRegleVersement: string;
        indicePrrgOffre: number;
        idConventionPres: string;
        idPres: string;
        ensgnPres: string;
        montantSouhInitialEmprunt: number;
        origineCommissionProjet: number;
        codeEtatPlns: number;
        codeApplicationAnlsRisque: boolean;
        idDossierGestion: string;
        idElementStructureGestion: string;
        idElementStructureInstruction: string;
        codeAgentDecd: string;
        codeTypologieCadreFiscal: string;
        codeDevise: string;
        codeLevrSecrBancaire: number;
        dateCreationDossier: string;
        dateDernierMAJ: string;
        etatDossier: number;
        sousEtatDossier: number;
        dateDemandeFinancier: string;
        dateemssOffre: string;
        dateCiblProjet: string;
        codeOrigineDemande: string;
        dateAccrPrtr: string;
        codeEtatEngagementHors: number;
        montantEngagementHorsBiln: number;
        dateFinValiditeOffre: string;
        dateRecuperationOffreParClient: string;
        dateEffetOffre: string;
        modeRegle: string;
        numeroCompteSecoPrel: string;
        domiciliationTresCompteSeco: string;
        dateLimiteRetardEmpruntLoiConsommation: string;
        dateLimiteRetardOffreLoiConsommation: string;
        dateMinimumAccpOffreLoiImmobilier: string;
        dateSigneEmprunt: string;
        dateRefuOffreParEmprunt: string;
        dateMinnPourVersementFondLoiConsommation: string;
        dateEditionOffre: string;
        idExterneDossier: string;
        typeLoiScrivener: number;
        codeAuthentiqueContrat: boolean;
        delRetardScrivener1: number;
        codeVersementCreation: string;
        codeVersementDernierModification: string;
        montantVersementCnvn: number;
        pourcentageFinancier: number;
        numeroEchelleVersement: number;
        torechlVersement: string;
        codeEtatEnvoiDossierSaccef: number;
        dateLieEnvoiSaccef: string;
        idEnvoiSaccef: string;
        idOrigineDemande: string;
        libelleOrigineDemande: string;
        datePrevSigneNotaire: string;
        referenceExterneDossier: string;
        elementStructure5: string;
        elementStructure6: string;
        modeDecn: boolean;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        codeTypeEngagement: string;
        dateSigneDossierEnvoi: string;
        dateFinValiditeAccr: string;
        indiceOffrePre: boolean;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeEtatPresenceChargeDossier: number;
        codeEtatActiviteDossier: number;
        indicePresenceChargePieceJustificatifParPiece: number;
        idAgentBoActuarielChargeDossier: string;
        idAgentProprietaireDossier: string;
        idAgentInstructionDossier: string;
        idAgentConnaissanceDossier: string;
        idAgentPourDecisionConf: string;
        idEntiteDecision: string;
        idEntitePourTransfertBo: string;
        BblocNotes: string;
        codeEtapeSimulation: number;
        numeroFichPres: string;
        codePrscDossierPres: number;
        dateSigneMand: string;
        precisionTaux: number;
        codeDevCreditDev: string;
        numeroCompteDev: string;
        modeRegleDev: string;
        modRegleVersementDev: string;
        idComplementDossier: string;
        integrationDossierDeVente: number;
        canalDeCreation: string;
        canalDeDistribution: string;
        idBlocNoteNotsDivr: string;
        idReductionActe: string;
        idEmprunt: string;
        listeIdEven: Array<string>;
        listeIdAvis: Array<string>;
        listeIdAlerteEntr: Array<string>;
        listeIdAlerteSort: Array<string>;
        listeIdProjet: Array<string>;
        listeIdVersement: Array<string>;
        listeIdPersonne: Array<string>;
        listeIdClassePersonne: Array<string>;
        idPoolEPS: string;
        listeIdPlanFinancier: Array<string>;
    }
    class DossierMaj {
        dateHorizonProjet: string;
        codeImprParExpressionVersement: number;
        codeApplicationChargeDossier: number;
        codeVisbInstruction: number;
        techniqueVent: number;
        codeLivrnImme: boolean;
        numeroAccrCmps: number;
        engagementRevc: number;
        dateSignePret: string;
        dateTraitement: string;
        idConventionPres: string;
        idPres: string;
        ensgnPres: string;
        origineCommissionProjet: number;
        codeEtatPlns: number;
        codeApplicationAnlsRisque: boolean;
        codeTypologieCadreFiscal: string;
        cdeDevise: string;
        codeLevrSecrBancaire: number;
        dateRecuperationOffreParClient: string;
        modeRegle: string;
        modeRegleVersement: string;
        numeroCompteSecoPrel: string;
        domiciliationTresCompteSeco: string;
        dateLimiteRetardEmpruntLoiConsommation: string;
        idExterneDossier: string;
        typeLoiScrivener: number;
        codeAuthentiqueContrat: boolean;
        montantVersementCnvn: number;
        pourcentageFinancier: number;
        idReductionActe: string;
        idOrigineDemande: string;
        libelleOrigineDemande: string;
        datePrevSigneNotaire: string;
        referenceExterneDossier: string;
        elementStructure5: string;
        elementStructure6: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        codeTypeEngagement: string;
        idAgentInstructionDossier: string;
        idAgentPourDecisionConf: string;
        idEntitePourTransfertBo: string;
        blocNotes: string;
        codeEtapeSimulation: number;
        numeroFichPres: string;
        codePrscDossierPres: number;
        codeDevCreditDev: string;
        numeroCompteDev: string;
        modeRegleDev: string;
        modRegleVersementDev: string;
        canalDeDistribution: string;
        idws: string;
        constructor(dossier?: IDossierComplet);
    }
}

declare module instructionCredit.Modele {
    class DossierResume {
        versionDossier: string;
        dateCreationDossier: Date;
        libelleEntiteProprietaireDossier: string;
        libelleAgenceAffectation: string;
        codeTitreCivilite: string;
        dateDernierMAJ: Date;
        codeEtatOuvertureDossier: string;
        idAgentConnaissanceDossier: string;
        typeDossier: string;
        codeTypeObjetCommercialisation: string;
        codeNatureFinancier: string;
        codeCategorieEmprunt: string;
        ville: string;
        coutTotalObjet: number;
        idAgentInstructionDossier: string;
        libelleConventionPres: string;
        idElementStructureInstruction: string;
        nomPatrPartc: string;
        premierPrenomEtatCivilitePartc: string;
        dateFinValiditeOffre: Date;
        nombrePeriodeValiditeOffreContrat: string;
        dateEditionOffre: Date;
        dateHorizonProjet: Date;
        codeEtatPresenceChargeDossier: string;
        codeEtatActiviteDossier: string;
        codeTypeEngagement: string;
        idAgentPourDecisionConf: string;
        codeTypeElementStructure: string;
        idAgentBoActuarielChargeDossier: string;
        idEntitePourTransfertBo: string;
        codeTypeElementStructureBo: string;
        premierElementStructure1: string;
        deuxiemeElementStructure1: string;
        troisiemeElementStructure1: string;
        quatriemeElementStructure1: string;
        cinquiemeElementStructure1: string;
        sixiemeElementStructure1: string;
        codeAlerte: string;
        codeTypeEven: string;
        codeAlerteEmis: string;
        numeroAlerte: number;
        numeroRelationEvenDossier: number;
        referenceExterneAgentConnaissance: string;
        idAgentProprietaireDossier: string;
        premierElementStructure: string;
        deuxiemeElementStructure: string;
        troisiemeElementStructure: string;
        quatriemeElementStructure: string;
        cinquiemeElementStructure: string;
        sixiemeElementStructure: string;
        codeEtatDossier: string;
        idDossier: string;
        nomRaisonSocialeEmprunt: string;
        idEntiteTitulaireClient: string;
        nomPres: Date;
        codeVisbInstruction: string;
        codeDevise: string;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeOrigineDemande: string;
        codeApplicationChargeDossier: string;
        codeImprParExpressionVersement: string;
        codeEtapeSimulation: string;
        idParentPrincipal: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        /**
         * Construction de l'objet résumé du dossier
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IRelationPersonne {
        codeNatureRelation: string;
        idPersonne2: string;
        idws: string;
        description?: string;
    }
}

declare module instructionCredit.Modele {
    interface IElementSchema {
        idws: string;
        description: string;
    }
    interface IBlocNotesSchema {
        typeBlocNote: string;
        idws: string;
        description: string;
    }
    interface IClausePersonnaliseeSchema {
        destinataireClassePersonne: number;
        idws: string;
        description: string;
    }
    interface IAlerteEnSortieSchema {
        codeAlerte: string;
        numberEmissionAlerte: number;
        idws: string;
        description: string;
    }
    interface IAlerteEnEntreeSchema {
        codeAlerte: number;
        numberEmissionAlerte: number;
        idws: string;
        description: string;
    }
    interface IAvisSchema {
        codeTypologieAvis: string;
        numberSaisieAvis: number;
        idws: string;
        description: string;
    }
    interface IEvenementSchema {
        codeTypeEven: string;
        numberEffetEven: number;
        idws: string;
        description: string;
    }
    interface IVersementSchema {
        pourcentageVersement: number;
        idws: string;
        description: string;
    }
    interface IRedacteurActeSchema {
        idPersonneSI: string;
        idws: string;
        description: string;
    }
    interface IRessourceSchema {
        typeRessource: string;
        montantRessource: number;
        nombrePeriodeParAn: number;
        idws: string;
        description: string;
    }
    interface IChargeSchema {
        typeDech: string;
        montantCharge: number;
        nombrePeriodeParAn: number;
        idws: string;
        description: string;
    }
    interface IPhaseCreditExistantSchema {
        codeTypePhase: string;
        idws: string;
        description: string;
    }
    interface ICreditExistantSchema {
        montantRestantDu: number;
        phasesCreditExistant: Array<IPhaseCreditExistantSchema>;
        idws: string;
        description: string;
    }
    interface IRevenuFiscalSchema {
        montantRevnMeng: number;
        idws: string;
        description: string;
    }
    interface IPatrimoineImmobilierSchema {
        naturePatrimoineImmobilier: number;
        valeurActuarielPatrimoine: number;
        idws: string;
        description: string;
    }
    interface IEmprunteurSchema {
        idwsPersonnes: Array<string>;
        ressources: Array<IRessourceSchema>;
        charges: Array<IChargeSchema>;
        revenusFiscaux: Array<IRevenuFiscalSchema>;
        patrimoinesImmobilier: Array<IPatrimoineImmobilierSchema>;
        idws: string;
        description: string;
    }
    interface IFamilleEpargneSchema {
        codeFamilleProduitAdresse: string;
        montantValeurEpargneAvantOper: number;
        idws: string;
        description: string;
    }
    interface ICompteSchema {
        numeroCompte: string;
        typeCompte: string;
        idws: string;
        description: string;
    }
    interface ICompteProfessionnelSchema {
        idws: string;
        description: string;
    }
    interface ICompteDepotSchema {
        idws: string;
        description: string;
    }
    interface IRelationEntrePersonnesSchema {
        codeNatureRelation: string;
        idPersonne2: string;
        idws: string;
        description: string;
    }
    interface IComplementFicheContactSchema {
        idws: string;
        description: string;
    }
    interface IPersonneSchema {
        codeTypePersonne: number;
        nomRaisonSociale: string;
        idPersonneSI: string;
        roles: Array<string>;
        ressources: Array<IRessourceSchema>;
        charges: Array<IChargeSchema>;
        famillesEpargne: Array<IFamilleEpargneSchema>;
        comptes: Array<ICompteSchema>;
        relationsEntrePersonnes: Array<IRelationEntrePersonnesSchema>;
        complementFicheContact: IComplementFicheContactSchema;
        idws: string;
        description: string;
    }
    interface IPersonneMoraleSchema {
        listeIdPersonnePhys: Array<string>;
        idws: string;
        description: string;
    }
    interface IOppositionSchema {
        codeOpposition: string;
        numberDebutOpposition: number;
        numberFinOpposition: number;
        idws: string;
        description: string;
    }
    interface IInterditBancaireSchema {
        idws: string;
        description: string;
    }
    interface IActiviteSchema {
        codeClasseRisqueCSP: number;
        idws: string;
        description: string;
    }
    interface IPersonnePhysiqueSchema {
        oppositions: Array<IOppositionSchema>;
        interditBancaire: IInterditBancaireSchema;
        activite: IActiviteSchema;
        idws: string;
        description: string;
    }
    interface IBienAVendreSchema {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        prixNetVendeur: number;
        idws: string;
        description: string;
    }
    interface IInfoRegroupementSchema {
        idws: string;
        description: string;
    }
    interface IPretReamenageSchema {
        codeBanque: string;
        idCreditGestion: string;
        montantRestantDuSurPretRefn: number;
        informationRegroupement: IInfoRegroupementSchema;
        idws: string;
        description: string;
    }
    interface IReamenagementSchema {
        typeReamenagement: number;
        capitalRestantDu: number;
        pretsReamenages: Array<IPretReamenageSchema>;
        idws: string;
        description: string;
    }
    interface IAplSchema extends IElementSchema {
        montantAPL: number;
        typeAPL: number;
    }
    interface ICreditExterneSchema {
        libletblPret: string;
        montantCapital: number;
        tegActu: number;
        idws: string;
        description: string;
    }
    interface IPalierContraintSchema {
        numberDebutPeriode: number;
        durePalier: number;
        montantEcheance: number;
        idws: string;
        description: string;
    }
    interface IRemiseClientSchema extends IElementSchema {
        montantApplication: number;
        tauxApplication: number;
    }
    interface ITrancheMontantSchema extends IElementSchema {
        tauxTrancheMontant: number;
        debutTrancheMontant: number;
        finTrancheMontant: number;
        remiseClient: IRemiseClientSchema;
    }
    interface ICotisationSchema extends IElementSchema {
        tauxCotisation: number;
        montantCotisation: number;
        nombrePeriodeApplicationCotisation: number;
        partFinancier: number;
        montantFrsGarantie: number;
        remiseClient: IRemiseClientSchema;
        tranchesMontant: ITrancheMontantSchema[];
    }
    interface ICotisationTrancheAgeSchema {
        idws: string;
        description: string;
    }
    interface ICotisationPhaseSchema {
        idws: string;
        description: string;
    }
    interface ICotisationDerogationSchema {
        idws: string;
        description: string;
    }
    interface ICotisationPeriodeSchema {
        idws: string;
        description: string;
    }
    interface ICouvertureCreditSchema extends IElementSchema {
        montantCouverture: number;
        quotientCouverture: number;
        idCredit: string;
        cotisations: ICotisationSchema[];
    }
    interface IAccessoireSchema extends IElementSchema {
        couverturesCredits: ICouvertureCreditSchema[];
        codeTypeAccessoire: string;
    }
    interface IAccessoireComplementaireSchema {
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
        idws: string;
        description: string;
    }
    interface IAccessoireLieProduitSchema {
        codeTypeAccessoire: string;
        idProduitFinancier: string;
        idws: string;
        description: string;
    }
    interface IAvisOrganismeExterneSchema extends IElementSchema {
        codeDecision: string;
        dateAvis: Date;
    }
    interface IAssuranceSchema extends IAccessoireSchema {
        idPersonne: string;
        idConvention: string;
        avisOrganismeExterne: IAvisOrganismeExterneSchema[];
    }
    interface IGarantieSchema extends IAccessoireSchema {
        idPersonne: string;
    }
    interface IBienPorteEnGarantieSchema extends IElementSchema {
    }
    interface IHypothequeAerienneSchema {
        idws: string;
        description: string;
    }
    interface IBonDeCaisseCapitalisationSchema {
        idws: string;
        description: string;
    }
    interface IDelegationLoyerSchema {
        idws: string;
        description: string;
    }
    interface ICessionDaillyAutreSchema {
        idws: string;
        description: string;
    }
    interface ICessionDaillyLoyerImmeubleSchema {
        idws: string;
        description: string;
    }
    interface IGageVehiculeSchema {
        idws: string;
        description: string;
    }
    interface IGageCompteInstrumentFinancierSchema {
        idws: string;
        description: string;
    }
    interface INantissementPartSocialeSchema {
        idws: string;
        description: string;
    }
    interface INantissementValeurMaterielleSchema {
        idws: string;
        description: string;
    }
    interface INantissementValeurMobiliereSchema {
        idws: string;
        description: string;
    }
    interface INantissementFondDeCommerceSchema {
        idws: string;
        description: string;
    }
    interface IProprietaireSchema {
        idws: string;
        description: string;
    }
    interface IHypothequeImmobiliereSchema {
        proprietaires: Array<IProprietaireSchema>;
        idws: string;
        description: string;
    }
    interface IBienDiversSchema {
        idws: string;
        description: string;
    }
    interface IVersementAttenduSchema {
        montantVersement: number;
        idws: string;
        description: string;
    }
    interface IContratAssuranceSchema {
        versementsAttendus: Array<IVersementAttenduSchema>;
        idws: string;
        description: string;
    }
    interface IAntichreseSchema {
        idws: string;
        description: string;
    }
    interface ICreditHDSchema extends IElementSchema {
        referencePret: string;
        montantPret: number;
        idCreditExnt: string;
    }
    interface IGarantieHDSchema extends IElementSchema {
        natureGarantieHorsDossier: string;
        idOrigineGarantieHorsDossier: string;
        creditsHD: ICreditHDSchema[];
    }
    interface IGarantieReelleSchema extends IGarantieSchema {
        bienPorteEnGarantie: IBienPorteEnGarantieSchema;
        garantieHD: IGarantieHDSchema;
    }
    interface IGarantiePersonnelleSchema extends IGarantieSchema {
        avisOrganismeExterne: IAvisOrganismeExterneSchema[];
    }
    interface IServiceSurObjetSchema {
        idConvention: string;
        idws: string;
        description: string;
    }
    interface ITauxFixeLecture extends TauxInteretAnnuel {
        idws: string;
        description: string;
    }
    interface ITauxMixteLecture extends TauxInteretAnnuel {
        repartition: number;
        tauxIndiceCmpstTauxMixte: ITauxIndiceLecture;
        tauxFixeCmpstTauxMixte: ITauxFixeLecture;
        idws: string;
        description: string;
    }
    interface IEcheanceOptimisationSchema {
        montantRemboursementSaisie: number;
        codeTypeElementSaisie: number;
        idws: string;
        description: string;
    }
    interface ICreditPalierTauxSchema {
        tauxInterieurPalier: TauxInteretAnnuel;
        dureeEnMois: number;
        echeancesOptimisation: Array<IEcheanceOptimisationSchema>;
        idws: string;
        description: string;
    }
    interface ICreditParamIndexationSchema {
        numeroIndiceRevisionCredit: number;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionSchema {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        creditParamsIndexation: Array<ICreditParamIndexationSchema>;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionParPhaseSchema extends ICreditParamRevisionSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseSchema {
        dureeEnMois: number;
        creditPaliersTaux: Array<ICreditPalierTauxSchema>;
        creditParamsRevisionParPhase: ICreditParamRevisionParPhaseSchema;
        idws: string;
        description: string;
    }
    interface ICreditPalierProgressionSchema {
        idws: string;
        description: string;
    }
    interface IComplementPhasePretCombineSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseAmortissementSchema extends ICreditPhaseSchema {
        creditPaliersProgression: Array<ICreditPalierProgressionSchema>;
        complementPhasePretCombine: IComplementPhasePretCombineSchema;
        idws: string;
        description: string;
    }
    interface ICreditPhaseDiffereAmortissementSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseDiffereTotalSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseMobilisationSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhasePrefinancementSchema {
        idws: string;
        description: string;
    }
    interface ISuiviPlanifieSchema {
        idws: string;
        description: string;
    }
    interface IPayeurSchema {
        pourcentagePaiementCredit: number;
        idPersonne: string;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionParPeriodeSchema {
        idws: string;
        description: string;
    }
    interface ICreditModaliteSchema {
        idModeleCalculImpe: string;
        numeroModeleRemboursementAnticipe: number;
        idws: string;
        description: string;
    }
    interface ICreditBonificationInfoSchema {
        codeInformation: string;
        codeDetail: string;
        idws: string;
        description: string;
    }
    interface ICreditBonificationSchema {
        idConvention: string;
        information: Array<ICreditBonificationInfoSchema>;
        idws: string;
        description: string;
    }
    interface IDroitUtiliseSchema {
        montantDroitAcqsUtilisation: number;
        idTrancheEL: string;
        idws: string;
        description: string;
    }
    interface ICompteCourantSchema {
        montantHypothequeCapital: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
        idws: string;
        description: string;
    }
    interface IVariationDureeSchema {
        nombrePeriodeVartPossibilite: number;
        typeButoireVartDure: number;
        idws: string;
        description: string;
    }
    interface IVersementFractionneSchema {
        nombreVersementSouh: number;
        montantVersementFraction: number;
        idws: string;
        description: string;
    }
    interface IComplementEPSSchema {
        idDossierInstruction: string;
        idEPS: string;
        libelleLongEngagementParSigne: string;
        idExterneAlis: string;
        referenceExterneDossierParent: string;
        idws: string;
        description: string;
    }
    interface ITACreditEPSSchema {
        numberEcheanceMER: number;
        montantCapitalAmortissement: number;
        montantCapitalRestantDu: number;
        idws: string;
        description: string;
    }
    interface ICreditEPSSchema {
        codeDevise: string;
        quotientCreditCouvertureParEPS: number;
        referenceExterneCreditCouvertureEPS: string;
        taCreditCouvertureParEPS: Array<ITACreditEPSSchema>;
        idws: string;
        description: string;
    }
    interface ICreditInterneSchema {
        idProduitFinancier: string;
        montantCapitalCredit: number;
        tegProp: number;
        phases: Array<ICreditPhaseSchema>;
        remiseClient: IRemiseClientSchema;
        suivisPlanifies: Array<ISuiviPlanifieSchema>;
        payeurs: Array<IPayeurSchema>;
        creditParamsRevision: Array<ICreditParamRevisionSchema>;
        creditModalite: ICreditModaliteSchema;
        creditBonification: ICreditBonificationSchema;
        droitsUtilises: Array<IDroitUtiliseSchema>;
        compteCourant: ICompteCourantSchema;
        variationsDuree: Array<IVariationDureeSchema>;
        versementFractionne: IVersementFractionneSchema;
        complementEPS: IComplementEPSSchema;
        creditsEPS: Array<ICreditEPSSchema>;
        idws: string;
        description: string;
    }
    interface IPlanFinancementSchema {
        montantTotalEmpruntPlan: number;
        montantApportPersonne: number;
        montantPreEchPhase: number;
        aPL: IAplSchema;
        creditsExternes: Array<ICreditExterneSchema>;
        paliersContraints: Array<IPalierContraintSchema>;
        accessoiresComplementaires: Array<IAccessoireComplementaireSchema>;
        accessoiresLiesProduit: Array<IAccessoireLieProduitSchema>;
        assurances: Array<IAssuranceSchema>;
        garanties: Array<IGarantieSchema>;
        servicesSurObjet: Array<IServiceSurObjetSchema>;
        creditsInternes: Array<ICreditInterneSchema>;
        idws: string;
        description: string;
        libelle?: string;
        dureeMax?: number;
    }
    interface IProjetSchema {
        typeObjetFinancier: string;
        typeObjetRegle: string;
        codeNatureFinancier: string;
        coutTotalObjet: number;
        bienAVendre: IBienAVendreSchema;
        reamenagement: IReamenagementSchema;
        plansFinancement: Array<IPlanFinancementSchema>;
        idPlanRetn: string;
        idws: string;
        description: string;
    }
    interface IBienConsoFinanceSchema {
        idws: string;
        description: string;
    }
    interface IAutoMotoSchema {
        idws: string;
        description: string;
    }
    interface IBienDetailleSchema {
        idws: string;
        description: string;
    }
    interface IBienEquipementProSchema {
        idws: string;
        description: string;
    }
    interface ITresorerieFinanceeSchema {
        idws: string;
        description: string;
    }
    interface IProjetNonImmobilierSchema extends IProjetSchema {
        bienConsommationFinance: IBienConsoFinanceSchema;
        bienEquipementPro: IBienEquipementProSchema;
        tresorerieFinancee: ITresorerieFinanceeSchema;
        idws: string;
        description: string;
    }
    interface IPromotionImmobiliereSchema {
        intituleProgramme: string;
        situationProgramme: number;
        idws: string;
        description: string;
    }
    interface ITerrainFinanceSchema {
        coutTerr: number;
        idws: string;
        description: string;
    }
    interface IBienSousJacentSchema {
        idws: string;
        description: string;
    }
    interface ITerrainSousJacentSchema {
        idws: string;
        description: string;
    }
    interface ISoulteFinanceeSchema {
        montantSoul: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IDetailCoutObjetSchema {
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idws: string;
        description: string;
    }
    interface ITravauxFinancesSchema {
        coutTravaux: number;
        bienSousJacent: IBienSousJacentSchema;
        detailsCoutObjet: Array<IDetailCoutObjetSchema>;
        idws: string;
        description: string;
    }
    interface IConstructionFinanceeSchema {
        coutConstructionFinancier: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IBatimentHabitableFinanceSchema {
        coutAcqsBatimentHabitation: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IButLocatifSchema {
        montantAnnuLoyePerc: number;
        idws: string;
        description: string;
    }
    interface ITrancheELSchema {
        montantDroitAcqs: number;
        idws: string;
        description: string;
    }
    interface IContratEpargneLogementSchema {
        codeTypeEL: number;
        idContratEpargneLogement: string;
        tranchesEL: Array<ITrancheELSchema>;
        idPersonneBeneficiaire: string;
        idws: string;
        description: string;
    }
    interface IProjetImmobilierSchema extends IProjetSchema {
        promotionImmobiliere: IPromotionImmobiliereSchema;
        terrainFinance: ITerrainFinanceSchema;
        soulteFinance: ISoulteFinanceeSchema;
        travauxFinance: ITravauxFinancesSchema;
        constructionFinance: IConstructionFinanceeSchema;
        batimentHabitableFinance: IBatimentHabitableFinanceSchema;
        butLocatif: IButLocatifSchema;
        contratsEL: Array<IContratEpargneLogementSchema>;
        idws: string;
        description: string;
    }
    interface IProjetEPSSchema {
        idws: string;
        description: string;
    }
    interface IComplementDossierSchema {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        numberSaisieSurInternet: number;
        heureSaisieSurInternet: number;
        idws: string;
        description: string;
    }
    interface IPoolEPSSchema {
        idDossierInstruction: string;
        idOprtCess: string;
        idCadreFinancier: string;
        codeNaturePool: number;
        codeOrigineCess: number;
        typeSousRolePool: number;
        idws: string;
        description: string;
    }
    interface IBeneficiaireEpsSchema {
        idPersonneSI: string;
        idws: string;
        description: string;
    }
    interface IAgentSchema {
        idAgent: string;
        lblAgent: string;
        estAgentBO: boolean;
        estBackup: boolean;
        estAgentExterne: boolean;
        idEDSGestion: string;
        lblAgenceRat: string;
        cdeAgentRat: string;
        typeUtilisateurCo: number;
        etabBaofCentral: number;
        idEDSBaofCentral: string;
        techniqueDeVente: number;
        derogationBornes: boolean;
        role: number;
    }
    interface IDossierSchema {
        etatDossier: number;
        sousEtatDossier: number;
        codeDevise: string;
        blocNotesDivers: Array<IBlocNotesSchema>;
        clausesPersonnalisees: Array<IClausePersonnaliseeSchema>;
        alertesEnSortie: Array<IAlerteEnSortieSchema>;
        alertesEnEntree: Array<IAlerteEnEntreeSchema>;
        avis: Array<IAvisSchema>;
        evenements: Array<IEvenementSchema>;
        versements: Array<IVersementSchema>;
        redacteurActe: IRedacteurActeSchema;
        emprunteur: IEmprunteurSchema;
        personnes: Array<IPersonneSchema>;
        projet: IProjetSchema;
        complementDossier: IComplementDossierSchema;
        poolEPS: IPoolEPSSchema;
        beneficiaireEPS: IBeneficiaireEpsSchema;
        idws: string;
        description: string;
        agents: Array<IAgentSchema>;
    }
}

declare module instructionCredit.Modele {
    interface ITravauxFinances {
        coutTravaux: number;
        dateFinTravaux: string;
        surfHabitationCree: number;
        typeTravauxCadreEcpt: number;
        surfHabitationTotalApreTravaux: number;
        dateConstructionBatimentSousJacent: string;
        surfHabitationBatimentSousJacent: number;
        dateAcqsBatimentSousJacent: number;
        typeLogementBatimentSous: number;
        idProjet: string;
        idBbienSousJacent: string;
        listeIdDetlCoutTravauxEcpt: Array<string>;
        idws: string;
    }
    class TravauxFinancesMaj {
        coutTravaux: number;
        dateFinTravaux: string;
        surfHabitationCree: number;
        typeTravauxCadreEcpt: number;
        dateConstructionBatimentSousJacent: string;
        surfHabitationBatimentSousJacent: number;
        dateAcqsBatimentSousJacent: Date;
        typeLogementBatimentSous: number;
        idws: string;
        constructor(travaux?: Modele.ITravauxFinances);
    }
}

declare module instructionCredit.Modele {
    interface IContratEpargneLogement {
        codeTypeEL: number;
        codeDeviseCompte: string;
        typeDroit?: number;
        lienParentAvecCedn: number;
        idContratEpargneLogement?: string;
        libelleTitulaireContrat: string;
        codeIndiceBenePrimeEpargneLogement?: number;
        dateOuvertureContrat?: number;
        dateClotureContrat?: number;
        codeForc?: number;
        codeRaptContratEpargneLogement?: number;
        etabOrigineInterieur?: string;
        idPersonneApportDroitContrat: string;
        codeDroitJustificatif?: number;
        codeResrDroitAcqs?: number;
        listeIdTrancheEpargneLogement?: string[];
        idPersonneBeneficiaire?: string;
        idws?: string;
        titre?: string;
    }
    class ContratEpargneLogementMaj implements IContratEpargneLogement {
        codeTypeEL: any;
        codeDeviseCompte: string;
        lienParentAvecCedn: number;
        libelleTitulaireContrat: string;
        codeIndiceBenePrimeEpargneLogement: number;
        dateOuvertureContrat: number;
        dateClotureContrat: number;
        codeForc: number;
        codeRaptContratEpargneLogement: number;
        idPersonneApportDroitContrat: string;
        codeDroitJustificatif: number;
        codeResrDroitAcqs: number;
        rapatrierTranche: boolean;
        droitEstCede: boolean;
        idContratEpargneLogement: string;
        idws: string;
        constructor();
        constructor(contratEL: IContratEpargneLogement);
    }
    interface ITrancheEL {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: Date;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
        idDroitUtilisation?: string;
        idContratEpargneLogement?: string;
        idws: string;
    }
    /**
     * Objet qui permet d'etre manipulé dans les tableaux
     */
    class TrancheEL implements ITrancheEL {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: Date;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
        idDroitUtilisation: string;
        idContratEpargneLogement: string;
        idws: string;
        libelleResrDroitAcqs: string;
        montantDroitAcqsInitial: number;
        libelleMontantDroitUtilises: string;
        constructor(iTrancheEL: ITrancheEL, libelleResrDroitAcqs: string);
    }
    class TrancheMaj implements ITrancheEL {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: Date;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
        idws: string;
        constructor();
        constructor(trancheEL: ITrancheEL);
    }
    interface ILienParente {
        lienParentAvecCedn: number;
        libelleLienParent: string;
    }
    interface IResultatCalculEnCoursEL {
        mntMaximumAutorisePEL: number;
        mntMaximumAutoriseCEL: number;
        mntMaximumAutorisePELCEL: number;
    }
    interface IMontantEncoursEpargneLogement {
        dateDebutValidite: Date;
        dateFinValidite: Date;
        montantDencPrtsPEL: number;
        montantDencPrtsLEL: number;
        montantDencPrtsEpargneLogement: number;
        dateCreation: Date;
    }
    interface IDroitAPretEL {
        duree: number;
        tauxMoyen: number;
        pretMaximum: number;
        echHorsAccessoire: number;
        echAvecAccessoire: number;
        coutHorsAccessoire: number;
        coutAvecAccessoire: number;
    }
    /**
     * Objet qui permet d'etre manipulé dans les tableaux
     */
    class DroitAPretEL implements IDroitAPretEL {
        duree: number;
        tauxMoyen: number;
        pretMaximum: number;
        echHorsAccessoire: number;
        echAvecAccessoire: number;
        coutHorsAccessoire: number;
        coutAvecAccessoire: number;
        indexTmp: number;
        constructor(iDroitAPretEL: IDroitAPretEL, index: number);
    }
}

declare module instructionCredit.Modele {
    interface IResultatCalculEL {
        critereAjustementCreditLecture: ICritereAjustementCredit;
        listeDroitAcquisELLecture: Array<IDroitAcquisEL>;
    }
    interface ICritereAjustementCredit {
        montantPret: number;
        montantEcheance: number;
        dureeCredit: number;
        alertePrime: boolean;
        texteAlertePrime: string;
        tauxActuariel: number;
        montantRAF: number;
    }
    interface IDroitAcquisEL {
        idwsTrancheEL: string;
        idDossier: string;
        idContrat: string;
        numeroRelatifDossier: number;
        dateOuvertureContrat: string;
        tauxEpargne: number;
        montantDroitsAcquis: number;
        dateArrete: string;
        lienParenteAvecCedant: string;
        cdfadv: string;
        montantDroitsAcquisUtilises: number;
        tauxPretCatalogue: number;
        capMaximumOct: number;
        montantPretOctroye: number;
        echMaximumOct: number;
        montantEchUtilise: number;
        montantLimite: number;
        droitUtilisable: boolean;
        priseEnCompte: string;
        contratPosteReforme: boolean;
    }
    /**
     * Objet qui permet d'etre manipulé dans les tableaux
     */
    class DroitAcquisEL implements IDroitAcquisEL {
        idwsTrancheEL: string;
        idDossier: string;
        idContrat: string;
        numeroRelatifDossier: number;
        dateOuvertureContrat: string;
        tauxEpargne: number;
        montantDroitsAcquis: number;
        dateArrete: string;
        lienParenteAvecCedant: string;
        cdfadv: string;
        montantDroitsAcquisUtilises: number;
        tauxPretCatalogue: number;
        capMaximumOct: number;
        montantPretOctroye: number;
        echMaximumOct: number;
        montantEchUtilise: number;
        montantLimite: number;
        droitUtilisable: boolean;
        priseEnCompte: string;
        contratPosteReforme: boolean;
        priseEnCompteInitial: string;
        montantLimiteInitial: number;
        libelleLienParent: string;
        libellePriseEnCompte: string;
        libelleTaux: string;
        libelleMontantsDroits: string;
        libelleMontantsLimite: string;
        droitUtilise: Modele.IDroitUtiliseSchema;
        constructor(iDroitAcquisEL: IDroitAcquisEL, libelleLienParent: string, droitUtilise: Modele.IDroitUtiliseSchema);
    }
    class DroitUtiliseMaj {
        idws: string;
        montantDroitAcqsUtilisation: number;
        montantDroitLimite: number;
        constructor(droitUtilise: Modele.IDroitUtiliseSchema, montant: number);
    }
}

declare module instructionCredit.Modele {
    interface IAccessoire {
        idAccessoireGestion?: string;
        idExterneAccessoire?: string;
        codeSousTypeAccessoire?: string;
        codeTypeAccessoire?: string;
        codeTypologieAccessoire?: string;
        partFinancierAccessoire?: number;
        codeIndiceAccessoireAper?: boolean;
        codeIndiceAccessoireFinancier?: boolean;
        dateCreation?: Date;
        dateAccpAccessoire?: Date;
        dateCloture?: Date;
        codeEtatAccessoire?: number;
        dateEnvoi?: Date;
        dateEffet?: Date;
        dateFinEffet?: Date;
        listeIdCouverture?: Array<string>;
        listeIdCotisation?: Array<string>;
        idConvention?: string;
        listeIdAvisOrgnExtr?: Array<string>;
        idPlan?: string;
        idws: string;
        codeBeneficiaire?: string;
        listeModalitesCalcul?: Array<Modele.IModaliteCalcul>;
        listeCotisations?: Array<Modele.ICotisation>;
        libelleTypeAccessoire?: string;
        obligatoire?: boolean;
        idwsCredit?: string;
    }
    interface IAccessoireLieProduit extends IAccessoire {
        idProduitFinancier: string;
        listeModalitesCalcul?: Array<Modele.IModalitesCalculHorsConventionParProduit>;
    }
    interface IAccessoireComplementaire extends IAccessoire {
        codeNatureOrigineAccessoire: number;
        idCatlFrsComp: string;
        idCatlParametreRverTiers: string;
        roleTiers: string;
        intitule: string;
        listeModalitesCalcul?: Array<Modele.IModalitesCalculAccessoireComplementaire>;
    }
    interface IAccessoireMaj {
        idExterneAccessoire: string;
        partFinancierAccessoire: number;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        idws: string;
    }
    class AccessoireLieMaj implements IAccessoireMaj {
        idExterneAccessoire: string;
        partFinancierAccessoire: number;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        idws: string;
        constructor(accessoire: IAccessoireLieProduit);
    }
    class AccessoireComplementaireMaj implements IAccessoireMaj {
        idExterneAccessoire: string;
        partFinancierAccessoire: number;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        idws: string;
        codeNatureOrigineAccessoire: number;
        constructor(accessoire: IAccessoireComplementaire);
    }
}

declare module instructionCredit.Modele {
    interface IAccessoireType {
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        codeAccessoireCalculICNE: number;
        codeAccessoireCumuleFrsTTCCt4R: number;
        codeNatureAccessoire: string;
        libelleCreationTypeAccessoire: string;
        numeroOrdreClasse: number;
        codeTypologieAccessoire: string;
    }
}

declare module instructionCredit.Modele {
    interface IAssurance {
        typeAssurance?: string;
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeAssuranceObligatoire: number;
        codeAssurancePart: number;
        codeResr: number;
        libelleAssuranceExterne: string;
        numeroSirenCieAssurance: string;
        numeroRegleCalculDateEffet: string;
        codeAgreAssuranceExtr: number;
        idPersonneAssurance?: string;
        idConvention?: string;
        quotite?: string;
        nomAssure?: string;
        risqueTypeAssurance?: string;
        libelleConvention?: string;
        montant?: number;
        taux?: number;
        idAccessoireGestion?: string;
        idExterneAccessoire?: string;
        codeSousTypeAccessoire?: string;
        codeTypeAccessoire?: string;
        codeTypologieAccessoire?: string;
        partFinancierAccessoire?: number;
        codeIndiceAccessoireAper?: boolean;
        codeIndiceAccessoireFinancier?: boolean;
        dateCreation?: string;
        dateAccpAccessoire?: string;
        dateCloture?: string;
        codeEtatAccessoire?: number;
        dateEnvoi?: string;
        dateEffet?: string;
        dateFinEffet?: string;
        listeIdCouverture?: Array<string>;
        listeIdCotisation?: Array<string>;
        listeIdAvisOrgnExtr?: Array<string>;
        idPlan?: string;
        idws?: string;
    }
    class AssuranceMaj implements IAssurance {
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeAssuranceObligatoire: number;
        codeAssurancePart: number;
        codeResr: number;
        libelleAssuranceExterne: string;
        numeroSirenCieAssurance: string;
        numeroRegleCalculDateEffet: string;
        codeAgreAssuranceExtr: number;
        idws: string;
        constructor();
        constructor(assurance: IAssurance);
    }
    interface IResultatAjouterAssuranceAvecControles {
        assuranceSchema: IAssuranceSchema;
        listeAnomalieLecture: IAnomalieLecture[];
    }
}

declare module instructionCredit.Modele {
    interface IBeneficiaire {
        codeBeneficiaire: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        estRestantEdit: number;
        libelleFise: string;
        libelleIhm: string;
    }
}

declare module instructionCredit.Modele {
    interface IEntreeOptimisationAvancee {
        idwsPlanFinancier: string;
        montantEcheanceMaximum: number;
        tauxEndtMaximum: number;
        inclAssurance: boolean;
        inclAPL: boolean;
        alerteBlqn: boolean;
        idProduitLissage: string;
        dureeCreditLissage: number;
        dureeCreditLissageFixe: boolean;
        lissageTotal: boolean;
        tauxCreditLissage: number;
        idProduitInterieur: string;
        dureeCreditInterieur: number;
        dureeCreditInterieurFixe: boolean;
        tauxCreditInterieur: number;
        montantCreditInterieur: number;
        creditInterieurPrio: boolean;
        inclPEL: boolean;
        inclCEL: boolean;
        epargneLogementObligatoire: boolean;
        epargneLogementExterne: boolean;
        dureeEpargneLogement: number;
        dureeEpargneLogementFixe: boolean;
        inclPATZ: boolean;
        inclEcoPTZ: boolean;
        dureeEcoPTZ: number;
    }
    class EntreeOptimisationAvancee implements IEntreeOptimisationAvancee {
        idwsPlanFinancier: string;
        montantEcheanceMaximum: number;
        tauxEndtMaximum: number;
        inclAssurance: boolean;
        inclAPL: boolean;
        alerteBlqn: boolean;
        idProduitLissage: string;
        dureeCreditLissage: number;
        dureeCreditLissageFixe: boolean;
        lissageTotal: boolean;
        tauxCreditLissage: number;
        idProduitInterieur: string;
        dureeCreditInterieur: number;
        dureeCreditInterieurFixe: boolean;
        tauxCreditInterieur: number;
        montantCreditInterieur: number;
        creditInterieurPrio: boolean;
        inclPEL: boolean;
        inclCEL: boolean;
        epargneLogementObligatoire: boolean;
        epargneLogementExterne: boolean;
        dureeEpargneLogement: number;
        dureeEpargneLogementFixe: boolean;
        inclPATZ: boolean;
        inclEcoPTZ: boolean;
        dureeEcoPTZ: number;
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ICaracteristiqueCredit {
        capitalCredit: number;
        echeanceCredit: number;
        tauxCredit: number;
        typeTaux: number;
        nombrePeriode: number;
        periodicite: number;
    }
}

declare module instructionCredit.Modele {
    class ChampInformationsComplementaires {
        champsDateFinConstruction: boolean;
        champsSurfaceHabitable: boolean;
        champsDateAchevementTravaux: boolean;
        /**
         * Construction d'un objet d'affichage des champs informations complémentaires
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class ChampMontant {
        champsAcquisition: boolean;
        champsMobilier: boolean;
        champsTravaux: boolean;
        champsEcoPTZ: boolean;
        champsTerrain: boolean;
        champsPrixConvenu: boolean;
        champsTravauxReserves: boolean;
        champsCoutConstruction: boolean;
        champsRachatCreance: boolean;
        champsBesoin: boolean;
        afficheFraisNotaire: boolean;
        afficheBoutonNegociation: boolean;
        fraisDivers: boolean;
        champsNegociation: boolean;
        rachatRegroupement: boolean;
        /**
         * Construction d'un objet d'affichage des champs montant
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class ChampAssociation {
        typeObjetToc: string;
        typeObjetTor: string;
        cas: instructionCredit.Modele.ChampMontant;
        eligibilite: boolean;
        casInfosCompl: instructionCredit.Modele.ChampInformationsComplementaires;
        /**
         * Construction d'un objet associant les toc/tor à un cas d'affichage
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ICheckBox {
        titre: string;
        checked: boolean;
        active: boolean;
    }
}

declare module instructionCredit.Modele {
    interface ICompteCourant {
        montantHypothequeCapital?: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital?: number;
        idCreditIntr?: string;
        idws?: string;
        montantHypothequeCapitalInitial?: number;
    }
    class CompteCourantMaj implements ICompteCourant {
        montantHypothequeCapital: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
        idws: string;
        constructor();
        constructor(compteCourant: ICompteCourant);
    }
}

declare module instructionCredit.Modele {
    interface IConventionResume {
        idConvention: string;
        numeroExterneConvention: string;
        idIntervenant: string;
        libelleLongConvention: string;
        libelleCreationConvention: string;
        commentaireConvention: string;
        commentaireConvention1: string;
        codeNatureCaution: string;
        datePresenceDeffConvention: Date;
        dateFinDeffConvention: Date;
        regleDateDeff: string;
        modeDexp: number;
        montantMinimumCreditPourConvention: number;
        montantMaximumCreditPourConvention: number;
        nombrePeriodeMinimumCredit: number;
        periodiciteDexpConvention: number;
        nombrePeriodeMaximumCredit: number;
        quotientMinimumParBeneficiaire: number;
        quotientMaximumParBeneficiaire: number;
        pasQuotient: number;
        montantMinimumGarantieParTete: number;
        montantMaximumGarantieParTete: number;
        pasMontantGarantie: number;
        naturePresenceCharge: number;
        periodiciteRecouvrement: number;
        codeDetrDateRecouvrement: number;
        delaiRver: number;
        codeCommissionIntervenantExterieur: number;
        tauxCommissionCaisse: number;
        codeTypeAssietteCommission: number;
        codeModeleRegleCommission: number;
        codeTiersGarantie: number;
        codeTypeDobjAutre: number;
        codeNatureBonification: number;
        codeModeRegle: string;
        montantMaximumEncours: number;
        nombrePeriodeMaximumPf: number;
        nombrePeriodeMaximumDt: number;
        nombrePeriodeMaximumDa: number;
        nombrePeriodeMaximumAm: number;
        codeRestant: string;
        montantPlafondPourDelegation: number;
        typeConvention: string;
        ageMaximumRequisParConvention: number;
        ageMinimumRequisParConvention: number;
        typeDacc: string;
        codeDevise: string;
        libelleLongConventionJuridique: string;
        typeDass: string;
        codeDerogationAge: number;
        estExterne: boolean;
        estConventionSaccef: boolean;
        estConventionOSEOEtudiant: boolean;
        estConventionSIAGI: boolean;
        estConventionCFG: boolean;
        estAERAS: boolean;
        estCautionMutuelle: boolean;
        estCautionMutuelle_ClausesEditiquePieco: boolean;
        estCreditLogementInitio: boolean;
        estCreditLogement: boolean;
        estInterne: boolean;
        estTAEA: boolean;
        estSFGAS: boolean;
    }
    interface IConvention extends IConventionResume {
        listeCotisation?: ICotisationConvention[];
        listeCritereId?: string[];
    }
    interface IConventionAssurance extends IConvention {
        ageMinimumEntrAssurance?: number;
        ageMaximumEntrAssurance?: number;
        codeDestinataireRegleSinistre?: number;
        nDomiciliationBancaire?: string;
        ageMaximumCouvertureAssurance?: number;
        ageMaximumAssuranceDerogation?: number;
        libelleCompAssurance?: string;
    }
    interface IConventionGarantie extends IConvention {
        formeGarantie?: string;
        casImpAutomatique?: number;
        delaiInformation?: number;
        idPersonneCouverture?: string;
        codeNatureCautionSimpleLimite?: string;
        conventionCautionMutuel?: number;
    }
    interface ICotisationConvention {
        sousTypeAccessoire: string;
        typeDaccCtfc: string;
        repriseCarObligatoireFacultatifCotisation: number;
        modeCalculLacc: number;
        dateDebutDapp: Date;
        dateFinDapp: Date;
        regleDappLacc: string;
        regleDateDebutDappLacc: string;
        regleEvenementDeclaration: string;
        codePeriodiciteApplication: number;
        codeRecouvrementAccessoire: number;
        codeTypeApplicationAccessoire: number;
        nombrePeriodeDappLacc: number;
        periodiciteDappLacc: number;
        regleDappAprd: string;
        codeCalculteg: number;
        codeAccessoireRemboursementFinCredit: boolean;
        codeApplicationEcheance: boolean;
        codeModeCalculTaux: number;
        regleCalculLacc: string;
        informationTauxCotisation: Array<number>;
        informationMontantCotisation: Array<number>;
        fractionFinancierMaximumLacc: number;
        compatibiliteInstruction: boolean;
        compatibiliteAvenant: boolean;
        financierAccessoireCredit: boolean;
        retardCodeIndiceDerogation: number;
        codeIntegrationPlanFinancier: number;
        listeCoutCotisation: Array<Object>;
        listeTrancheMontant: Array<Object>;
    }
}

declare module instructionCredit.Modele {
    interface ICotisation {
        tauxCotisation: number;
        montantCotisation: number;
        codeIndiceBlcgSaisieMontant: number;
        codeModeCalcul?: number;
        codeIndiceApplicationEcheance?: boolean;
        codePeriodeCalcul: number;
        dateApplicationCotisation: Date;
        dateDebutApplicationCotisation: Date;
        dateFinApplicationCotisation?: Date;
        codeRecouvrement?: number;
        montantAssiette: number;
        typeAccessoire?: string;
        codeSousTypeAccessoire?: string;
        nombrePeriodeApplicationCotisation: number;
        periodeApplicationCotisation: number;
        numeroRegleCalculCotisation?: string;
        numeroRegleApplicationCotisation?: string;
        codeTypeApplicationCotisation?: number;
        montantFrsGarantie: number;
        tauxConsolideFrsDossier?: number;
        montantConsolideFrsDossier?: number;
        partFinancier: number;
        codeIndiceDepsBorne?: number;
        codeIndiceInterieurPlanFinancier?: number;
        idAccessoire?: string;
        idCouverture?: string;
        listeIdTrancheMontant?: Array<string>;
        idRemsClient?: string;
        idws?: string;
        idPhase?: string;
        modaliteCalculLieProduit?: Modele.IModalitesCalculHorsConventionParProduit;
        modaliteCalculComplementaire?: Modele.IModalitesCalculAccessoireComplementaire;
    }
    class CotisationtMaj implements ICotisation {
        tauxCotisation: number;
        montantCotisation: number;
        codeIndiceBlcgSaisieMontant: number;
        codePeriodeCalcul: number;
        dateApplicationCotisation: Date;
        dateDebutApplicationCotisation: Date;
        montantAssiette: number;
        nombrePeriodeApplicationCotisation: number;
        periodeApplicationCotisation: number;
        montantFrsGarantie: number;
        partFinancier: number;
        idws: string;
        constructor();
        constructor(cotisation: ICotisation);
    }
}

declare module instructionCredit.Modele {
    interface ICouvertureCredit {
        montantCouverture: number;
        quotientCouverture: number;
        montantEcheanceCouverture: number;
        dateFinAffectationCouverture: Date;
        idAccessoire?: string;
        idCreditCouverture?: string;
        listeIdCotisation?: Array<string>;
        idws?: string;
    }
    class CouvertureCreditMaj implements ICouvertureCredit {
        montantCouverture: number;
        quotientCouverture: number;
        montantEcheanceCouverture: number;
        dateFinAffectationCouverture: Date;
        idws: string;
        constructor();
        constructor(couverture: ICouvertureCredit);
    }
    interface IDataTableauCouvertureLigne {
        libelleCredit: string;
        quotite: number;
        montant: number;
        taux: number;
    }
}

declare module instructionCredit.Modele {
    interface ICreditExterne {
        etablissementPreteur?: string;
        dureAmortissementMois?: number;
        tauxAmortissement?: number;
        montantCapital?: number;
        montantEcheanceAmortissement?: number;
        codePeriodeAmortissement?: number;
        codeIndiceInterieurTantPPersonne?: number;
        libelleLibrSurConcr?: string;
        codeDevise?: string;
        codeIndiceNaturePret?: number;
        libelleNaturePret?: string;
        codeIndiceTauxRevision?: number;
        dureDiffereMois?: number;
        typeSurtaxe?: number;
        codeIndicePresAssurancePertEmpl?: number;
        codeIndiceTypeRemboursement?: number;
        tegActu?: number;
        montantEcheanceDiffere?: number;
        codePeriodeDiffere?: number;
        idPlanFinancier?: string;
        libletblPret?: string;
        idws?: string;
    }
    class CreditExterne implements ICreditExterne {
        codeDevise: string;
        constructor();
    }
    class CreditExterneMaj implements ICreditExterne {
        libletblPret: string;
        dureAmortissementMois: number;
        tauxAmortissement: number;
        montantCapital: number;
        mtecheAmortissement: number;
        codePeriodeAmortissement: number;
        codeIndiceInterieurTantPPersonne: number;
        libelleLibrSurConcr: string;
        codeDevise: string;
        codeIndiceNaturePret: number;
        codeIndiceTauxRevision: number;
        dureDiffereMois: number;
        typeSurtaxe: number;
        codeIndicePresAssurancePertEmpl: number;
        codeIndiceTypeRemboursement: number;
        tegActu: number;
        mtecheDiffere: number;
        codePeriodeDiffere: number;
        idws: string;
        constructor();
        constructor(credit: ICreditExterne);
    }
}

declare module instructionCredit.Modele {
    interface ICreditInterne {
        indiceEvolutionTauxConsolidePondere?: number;
        idConventionPres?: string;
        codeIndiceEnvoiAvisEcheance?: number;
        codeIndiceOptimisationImps?: number;
        codeIndiceTauxInterieurRevision?: number;
        numeroCreditPlanFinancier?: number;
        referenceExterneCredit?: string;
        idProduitFinancier?: string;
        libelleLongProduit?: string;
        codeFamilleContratRegle?: string;
        codeSousclasseBafi?: string;
        codeIndiceCreditRelease?: number;
        idCreditGestion?: string;
        codeIndiceTraitementInterieurIntr?: number;
        codeTypeActuarielInterieurIntr?: number;
        codeDeviseVersement?: string;
        codeIndiceExistePieceJustificatifPourDeclechlVersement?: number;
        codeTypeRattachementJustificatifDeclaration?: number;
        modeRegleVersement?: string;
        numeroEchelleVersement?: number;
        dateMER0?: Date;
        dateMER1?: Date;
        dateCreationCredit?: Date;
        dateLimiteVersementFond?: Date;
        jourDateEcheance?: number;
        dateLimitePremierVersementFond?: Date;
        codeIndiceEligibiliteAPL?: number;
        codeIndicelgbAuprInstemss?: number;
        codeIndiceGestionCreditAvecCompteCrrt?: number;
        dateDernierCalculCredit?: Date;
        codeIndiceCalculAFaire?: number;
        montantPrimeEpargneLogement?: number;
        tauxNegocieSurcRemboursementAnticipe?: number;
        tauxPondereCntExtr?: number;
        tauxPondereConsolide?: number;
        margePondereConsolide?: number;
        codeCalculEcheanceVersement?: number;
        codeettEcheanceVersement?: number;
        codeIndiceNatureEcheanceVersement?: number;
        intituleLigneUn?: string;
        domiciliationTres?: string;
        numeroDomiciliationPourMiseADispFond?: string;
        montantMinimumVersement?: number;
        codeIndiceNaturePretComb?: number;
        codeIndicePresUneBonificationUneMajreTaux?: number;
        codeConfirmationReductionDurePTZ?: number;
        codeConfirmationReductionMontantPTZ?: number;
        montantReglePTZ?: number;
        montantMinimumPTZ?: number;
        montantCreditEuro?: number;
        montantMaximumPretPVH?: number;
        codeDevise?: string;
        codeDeviseSaccef?: string;
        nombrePeriodeCredit?: number;
        codePeriodeCredit?: number;
        montantCapitalCredit?: number;
        montantPrmeEcheanceHorsAccessoireCredit?: number;
        montantPrmeEcheanceAssurance?: number;
        montantTotalCreditHorsAccessoireHorsPeriodePref?: number;
        coutTotalAccessoirePosteSurCredit?: number;
        coutTotalFrsCrtgeAssuranceCredit?: number;
        coutTotalFrsDossierAssuranceCredit?: number;
        coutTotalFrsGarantieAssuranceCredit?: number;
        coutTotalServiceSurObjetPeriodeAssuranceCredit?: number;
        coutTotalAccessoireCompPeriodeAssuranceCredit?: number;
        coutTotalServiceSurObjetAperAssuranceCredit?: number;
        coutTotalAccessoireCompAperAssuranceCredit?: number;
        montantPrmeEcheanceServiceSurObjet?: number;
        montantPrmeEcheanceAccessoireComp?: number;
        montantTotalAssurancePeriode?: number;
        codeIndiceModeCalculTaux?: number;
        tauxMoyenActuHorsBonification?: number;
        tauxMoyenPropHorsBonification?: number;
        tauxFutr?: instructionCredit.Modele.ITauxIndiceLecture;
        tauxInitial?: Modele.TauxInteretAnnuel;
        tauxMoyenActu?: number;
        tauxMoyenProp?: number;
        tauxUsure?: number;
        tegActu?: number;
        tegProp?: number;
        tAEA?: number;
        tauxMontage?: number;
        idPlanFinancier?: string;
        idCompteCrrt?: string;
        idModele?: string;
        idModeleVersementFraction?: string;
        idRemsClient?: string;
        listeIdDroitUtilisation?: Array<string>;
        listeIdPayr?: Array<string>;
        listeIdPhase?: Array<string>;
        listeIdSuivantPlafond?: Array<string>;
        listeIdParametreRevision?: Array<string>;
        listeIdVartDure?: Array<string>;
        listeIdAccessoire?: Array<string>;
        listeIdAssurance?: Array<string>;
        listeIdGarantie?: Array<string>;
        listeIdAccessoireComp?: Array<string>;
        listeIdAccessoireLiesProduit?: Array<string>;
        listeIdCreditsEPS?: Array<string>;
        idComplementEPS?: string;
        tegModeRestitution?: number;
        numeroDomiciliationDispFond?: string;
        margeTauxFutr?: number;
        valeurTauxInitial?: number;
        montantPTZVerrouille?: boolean;
        dureePTZVerrouillee?: boolean;
        idws?: string;
        echeancesJustifieesAssociees?: Array<Modele.IEcheancesJustifieesAssociees>;
        etatForcageFraisDossier?: string;
        bornesFraisDossier?: Array<number>;
        checked?: boolean;
        etatDuree?: Enum.CreditDuree;
        etatModeOptimisation?: Enum.CreditModeOptimisation;
        etatEpargneLogementConcours?: Enum.CreditEpargneLogementConcours;
        etatEpargneLogementObligatoire?: Enum.CreditEpargneLogementObligatoire;
        montantAAjouter?: number;
        montantApresAjout?: number;
        editableModeManuel?: boolean;
        listeAccessoiresLies?: Array<Modele.IAccessoireLieProduit>;
        listeAccessoiresComplementaires?: Array<Modele.IAccessoireComplementaire>;
        listeModalitesCalculParProduit?: Array<Modele.IModalitesCalculHorsConventionParProduit>;
    }
    class CreditInterne implements ICreditInterne {
        codeDevise: string;
        etatDuree: Enum.CreditDuree;
        etatModeOptimisation: Enum.CreditModeOptimisation;
        etatEpargneLogementConcours: Enum.CreditEpargneLogementConcours;
        etatEpargneLogementObligatoire: Enum.CreditEpargneLogementObligatoire;
        constructor();
    }
    class CreditInterneMaj implements ICreditInterne {
        idConventionPres: string;
        codeIndiceEnvoiAvisEcheance: number;
        codeIndiceOptimisationImps: number;
        referenceExterneCredit: string;
        codeIndiceTraitementInterieurIntr: number;
        codeTypeActuarielInterieurIntr: number;
        codeDeviseVersement: string;
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        codeTypeRattachementJustificatifDeclaration: number;
        modeRegleVersement: string;
        numeroEchelleVersement: number;
        jourDateEcheance: number;
        codeIndicelgbAuprInstemss: number;
        codeIndiceCalculAFaire: number;
        montantPrimeEpargneLogement: number;
        tauxNegocieSurcRemboursementAnticipe: number;
        tauxPondereCntExtr: number;
        intituleLigneUn: string;
        domiciliationTres: string;
        numeroDomiciliationDispFond: string;
        montantMinimumVersement: number;
        codeIndicePresUneBonificationUneMajreTaux: number;
        codeConfirmationReductionDurePTZ: number;
        codeConfirmationReductionMontantPTZ: number;
        montantCreditEuro: number;
        montantMaximumPretPVH: number;
        codeDeviseSaccef: string;
        nombrePeriodeCredit: number;
        codePeriodeCredit: number;
        montantCapitalCredit: number;
        coutTotalFrsDossierAssuranceCredit: number;
        margeTauxFutr: number;
        valeurTauxInitial: number;
        tauxMontage: number;
        montantPTZVerrouille: boolean;
        dureePTZVerrouillee: boolean;
        etatForcageFraisDossier: string;
        idws: string;
        constructor();
        constructor(credit: ICreditInterne);
    }
    interface ICreditParamRevision {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        codeIndicecheReclame: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
        idCreditIntr: string;
        listeIdParametreIndex: Array<string>;
        idws: string;
    }
    interface ICreditPalierTaux {
        tauxInterieurPalier: Object;
        codeTypeRemboursement: number;
        tauxProgressifEcheanceSurPalier: number;
        codePeriodeApplicationTauxProgressifEcheancePalier: number;
        numeroRelationPrmeEcheancePalier: number;
        numeroRelationDernierEcheancePalier: number;
        nombrePeriodeDureePalier: number;
        idCreditPhase: string;
        listeIdEcheanceOptimisation: Array<string>;
        idPalierTauxAssuranceProduit: string;
        idws: string;
    }
    interface IResultatCalculCreditInterne {
        creditInterneLecture: ICreditInterne;
        listeAnomalieLecture: IAnomalieLecture[];
    }
}

declare module instructionCredit.Modele {
    class CreditGraphique {
        idws: string;
        phases: Array<Modele.PhaseGraphique>;
        libelle: string;
        montant: number;
        dureeTotale: number;
        montantPremierePhase: number;
        intersections: Array<Modele.Point>;
        lissage: boolean;
        constructor();
    }
    class PhaseGraphique {
        idws: string;
        montant: number;
        duree: number;
        constructor();
    }
    class Point {
        duree: number;
        echeance: number;
    }
}

declare module instructionCredit.Modele {
    interface IDetailAccessoire {
        idAccessoireGestion: string;
        idExterneAccessoire: string;
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
        codeTypologieAccessoire: string;
        partFinancierAccessoire: number;
        codeIndiceAccessoireAper: boolean;
        codeIndiceAccessoireFinancier: boolean;
        dateCreation: Date;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        listeIdCouverture: Array<string>;
        listeIdCotisation: Array<string>;
        idConvention: string;
        listeIdAvisOrgnExtr: Array<string>;
        idPlan: string;
        idws: string;
        idProduitFinancier: string;
        idCreditInterne?: string;
    }
}

declare module instructionCredit.Modele {
    interface IEcheancesJustifieesAssociees {
        titreCredit: string;
        messagesInterets: Array<string>;
        typesFrais: Array<Modele.IGroupeJustificationTEG>;
    }
    interface IGroupeJustificationTEG {
        libelleFrais: string;
        messagesFrais: Array<string>;
    }
}

declare module instructionCredit.Modele {
    interface IFamillesProduits {
        codeCategorieEmprunt: string;
        typeObjetFinancierGarantie: string;
        codeStructureInstruction: string;
        codeFamilleProduit: string;
        libelleLongFamilleProduit: string;
        listeProduits: Modele.IProduitsAutorises[];
    }
}

declare module instructionCredit.Modele {
    interface IFrais {
        IdntFrais: string;
        libelle: string;
        caractere: string;
        montant: number;
        taux: number;
    }
}

declare module instructionCredit.Modele {
    interface IGammeLissage {
        idGammeLissage: string;
        libelleGammeLissage: string;
        nombrePhaseAmortissementMinimum: number;
        nombrePhaseAmortissementMaximum: number;
        idPremierProduitGamme: string;
    }
}

declare module instructionCredit.Modele {
    interface IGarantie extends IAccessoire {
        natureGarantie?: string;
        commentaire: string;
        dateLimiteRetardCaution?: Date;
        codeFormeActeAuthentique: number;
        codeClasseGarantie?: number;
        typeSurete?: number;
        idPersonne?: string;
        quotite?: number;
        frais?: number;
        libelleNature?: string;
        libelleConvention?: string;
        finance?: boolean;
    }
    interface IGarantiePersonnelle extends IGarantie {
        codeNatureCaution?: number;
        listeErrrTechniqueNonBlqn?: Array<string>;
    }
    interface IGarantieReelle extends IGarantie {
        codeGarantieRchab?: number;
        numeroRangSecnHypotheque?: number;
        dureHypothequeMois?: number;
        pactCommr?: number;
        rangHypotheque?: number;
        codeCessRangHypotheque?: number;
        montantCouvertureParHypothequeRangInfe?: number;
        idGarantieHorsDossier?: string;
        idObjetPortGarantie?: string;
    }
    class GarantieReelleMaj implements IGarantieReelle {
        commentaire: string;
        codeFormeActeAuthentique: number;
        numeroRangSecnHypotheque: number;
        dureHypothequeMois: number;
        pactCommr: number;
        rangHypotheque: number;
        codeCessRangHypotheque: number;
        montantCouvertureParHypothequeRangInfe: number;
        montantFrais: number;
        idws: string;
        constructor();
        constructor(garantie: IGarantieReelle);
    }
    interface ILigneCouvertureGarantie {
        idwsCreditInterne: string;
        idwsCouverture: string;
        idwsCotisation?: string;
        idProduitFinancier: string;
        libelleLongProduit: string;
        montantEmprunte: number;
        montantCouvert?: number;
        quotite?: number;
        typeFrais?: string;
        tauxCotisation?: number;
        montantCotisation?: number;
    }
    interface ITypesDeFraisGarantie {
        idCaisseEpargne: number;
        codeNatureGarantie: string;
        dateTraitement: Date;
        codeTypeAccessoire: string;
        dateFinApplication: Date;
        dateDebutApplication: Date;
        codeAccessoireObligatoire: number;
        codeModeCalculAccessoire: number;
        numeroRegleCalculAccessoire: string;
        montantConsolideAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypeAssietteCalculAccessoire: string;
        montantPlafondTrancheCalculAccessoire: number;
        tauxConsolideAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        montantPlafondTrancheCalculAccessoire1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantPlafondTrancheCalculAccessoire2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        montantPlafondTrancheCalculAccessoire3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        montantPlafondTrancheCalculAccessoire4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcul: number;
        montantMaximumAccessoireCalcul: number;
        numeroRegleApplicationAccessoire: string;
        regleDateDebutApplicationAccessoire: string;
        regleEvenementDeclaration1ErApplication: string;
        periodiciteApplicationAccessoire: number;
        codeRecouvrementAccessoire: number;
        uniteDureeApplicationAccessoire: number;
        dureeApplicationAccessoire: number;
        regleApplicationAccessoireAprd: string;
        codeAccessoireCalculteg: number;
        codeApplicationEcheance: number;
        codeCommissionIntervenantExterne: number;
        modeCalculTaux: number;
        fractionFinancierMaximum: number;
        codeCompAccessoireInstruction: number;
        codeCompAccessoireAvenant: number;
    }
    interface IGarantSureteRA {
        idws: string;
        prenom: string;
        nom: string;
        idPersonneSI: string;
        codeTitreCivilite: string;
        dateNais: number;
    }
    interface IResultatGarant {
        personnePM: IResultatGarantPersonnePM;
        personnePP: IResultatGarantPersonnePP;
        erreurTp: IResultatGarantErreurTp;
    }
    interface IResultatGarantPersonnePM {
        identifiantPersonne: string;
        codeTypePersonne: string;
        nomRaisonSociale: string;
        numeroInsee: string;
        formeJuridique: string;
        typeDroitPersonneMorale: string;
        typeAdministrationPublique: string;
        numeroInscriptionRCS: string;
        dateInscriptionRCS: Date;
        lieuInscriptionRCS: string;
        dateCreationSociete: Date;
        montantCapital: number;
        codeAPE: string;
        enseigneCommerciale: string;
        cAhtExercicePrecedent: number;
        nombreSalaries: number;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        numeroTelephone: string;
        numeroTelecopie: string;
        adresseEMail: string;
        cleBanqueFrance: string;
        dateEntreeEnRelation: Date;
        categorieAgentEconomique: string;
        categorieClienteleTypeEc: string;
        classeAgentEconomique: string;
        codePresenceEnSuiviPersonnalise: string;
        criteresResidence: string;
        codeNaceInsee: string;
        codeStatutPpe: string;
        codeIndicRetourAutoDeclarPpe: string;
        codeNiveauWatchListLocale: string;
        codeNiveauWatchListNationale: string;
        codeNiveauWatchListBanqueRef: string;
        codeEtatCompletudeDossier: string;
        codePaysResidenceEmprunteur: string;
        codeTypePersonne1: string;
        intituleLigne1: string;
        complementIntituleLigne2: string;
        codePostalLigne6: string;
        localiteLigne6: string;
        idElementStructureGestionnaire: string;
    }
    interface IResultatGarantPersonnePP {
        identifiantPersonne: string;
        codeTypePersonne: string;
        codeSexePersonne: string;
        codeTitreCivilite: string;
        nomRaisonSociale: string;
        prenoms: string;
        nomJeuneFille: string;
        dateNaissance: Date;
        lieuNaissance: string;
        codeInseePaysNaissance: string;
        codeInseePaysNationalite: string;
        codeNationalite: string;
        codeCapaciteJuridique: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        numeroTelephone: string;
        telephonePortable: string;
        numeroTelecopie: string;
        adresseEMail: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: Date;
        codeRegimeMatrimonial: string;
        criteresResidence: string;
        codeModeLogement: string;
        dateEntreeDansLesMurs: Date;
        categorieSocioProfessionnelle: string;
        dateEffetCSP: Date;
        dateEmbauche: Date;
        dateFinCdd: Date;
        codePresenceActiviteSalariee: string;
        codeTypeContratEmbauche: number;
        codeTypeActiviteSalariee: string;
        codeTypeSecteurActivite: string;
        raisonSocialeLEmployeur: string;
        codePostalLEmployeur: string;
        codeApeEmployeur: string;
        cleBanqueFrance: string;
        codePersonnelCaisseEpargne: string;
        dateEntreeEnRelation: Date;
        codeSalaireDomicilieEnCe: string;
        categorieAgentEconomique: string;
        categorieClienteleTypeEc: string;
        classeAgentEconomique: string;
        codePresenceEnSuiviPersonnalise: string;
        libelleListeNoire: string;
        codeSaisieAvisTiersDetenteur: string;
        codeArretSurSalaire: string;
        codeDevise: string;
        enseigneCommerciale: string;
        codeAPE: string;
        numeroInscriptionRCS: string;
        lieuInscriptionRCS: string;
        codePaysResidenceEmprunteur: string;
        codePaysLocalisation: string;
        codeProfil: string;
        codeTypeCapaciteJuridique: string;
        codeNaceInsee: string;
        codeStatutPpe: string;
        codeIndicRetourAutoDeclarPpe: string;
        codeNiveauWatchListLocale: string;
        codeNiveauWatchListNationale: string;
        codeNiveauWatchListBanqueRef: string;
        codeEtatCompletudeDossier: string;
        codeTypePersonne1: string;
        intituleLigne1: string;
        complementIntituleLigne2: string;
        codePostalLigne6: string;
        localiteLigne6: string;
        numTelephoneBureauParticulier: string;
        numTelephonePortableProfession: string;
        idElementStructureGestionnaire: string;
        codeContentieuxHorsComptePro: string;
        montantEncoursSaccefHorsOpe: number;
    }
    interface IResultatGarantErreurTp {
        codeRetour: number;
        codeDomaineGestionPacbase: string;
        codeLibelleErreur008: string;
        libelleReponse: string;
    }
}

declare module instructionCredit.Modele {
    interface INatureGarantie {
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        typeSurete: number;
        acteAuthentiqueSurNatureGarantie: number;
        classeGarantie: number;
        libelleCreationNatureGarantie: string;
        numeroOrdreClasse: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        libelleLongNatureGarantie: string;
        codeHypothequeRchab: string;
        conseille?: boolean;
        cdfcod?: string;
    }
    interface IInformationGarantie {
        cdfcod: string;
        cdfcng: string;
        libelleLong: string;
        topGarantie: boolean;
    }
}

declare module instructionCredit.Modele {
    interface IAnomalieLecture {
        typeControle: number;
        idAno: string;
        libelleAno: string;
        typeAno: number;
        dateHeureAno: number;
        idControleRegle: string;
        idObjet: string;
    }
    interface IResultatCalculSimple {
        capital: number;
        echeance: number;
        taux: number;
        typeTaux: number;
        nombrePeriode: number;
        periodicite: number;
        coutTotal: number;
    }
    interface IResultatPeriodeOptimisation {
        dureeMois: number;
        codeTypePhase: string;
        montantPremierEcheanceHorsAccessoire: number;
        montantPremierEcheanceAvecAccessoire: number;
        codePeriodicite: number;
        montantPremierEcheanceHorsAccessoirePeriodicite: number;
        montantPremierEcheanceAvecAccessoirePeriodicite: number;
        montantEcheanceOptimisation: number;
        codePeriodiciteChs: number;
    }
    interface IResultatCreditOptimisation {
        idCredit: string;
        idProduit: string;
        libelleProduit: string;
        typeCredit: number;
        montantPremierEcheanceHorsAccessoire: number;
        teg: number;
        montantFrsDossier: number;
        montantFrsGarantie: number;
        tauxUsur: number;
        codeIndiceEligibiliteAPL: number;
        dureeTotalReglePtz: number;
        montantReglePtz: number;
        indiceReductionDureePtz: boolean;
        indiceReductionMontantPtz: boolean;
        listeIdAssurance: Array<string>;
        listePeriodeOptimisation: Array<IResultatPeriodeOptimisation>;
    }
    interface IResultatPlanOptimisation {
        idWsPlanOptimisation: string;
        montantMaximumFinancier: number;
        montantMinimumRemboursement: number;
        montantFinancierInterieur: number;
        montantFinancierExterne: number;
        montantRestantFinancier: number;
        montantApport: number;
        coutTotal: number;
        montantPremierEcheanceHorsAccessoire: number;
        montantPremierEcheanceAvecAccessoire: number;
        listeCreditOptimisation: Array<IResultatCreditOptimisation>;
    }
    interface IResultatOptimisation {
        listeAno: Array<IAnomalieLecture>;
        listePlanOptimisation: Array<IResultatPlanOptimisation>;
    }
    interface ICalculerOptimisationRequest {
        identifiantDossier: string;
        identifiantPlanFinancier: string;
        identifiantLissage: string;
        montantMaximumRemboursement: number;
        lissageTotal: boolean;
        dureeFixeLissage: boolean;
        dureeSouhLissage: number;
    }
}

declare module instructionCredit.Modele {
    /**
     * Image de l'objet exposé par le service
     */
    interface IPalierContraint {
        dateDebutPeriode: string;
        dateFinPeriode: string;
        montantEcheance: number;
        durePalier: number;
        idPlanFinancier: string;
        idws: string;
    }
    /**
     * Objet permettant sa manipulation dans la vue au sein d'un fonctionnement à l'aide de tuile
     */
    class PalierContraint implements IPalierContraint {
        dateDebutPeriode: string;
        dateFinPeriode: string;
        montantEcheance: number;
        durePalier: number;
        idPlanFinancier: string;
        statut: string;
        marquage: boolean;
        idws: string;
        constructor(oPalier?: IPalierContraint);
    }
    class PalierContraintMaj {
        dateFinPeriode: string;
        montantEcheance: number;
        durePalier: number;
        idws: string;
        constructor(oPalier: IPalierContraint);
    }
}

declare module instructionCredit.Modele {
    interface ICreditPhase {
        codeCalculInterieurRepr: number;
        modeCapitalRecouvrementInterieur: number;
        codeCapitalRecouvrementInterieur: number;
        codePeriodeAssuranceCalculInterieur: number;
        codePeriodeCalculMER: number;
        codeCalculInterieurJourRelease: number;
        codePeriodeCompositionInterieur: number;
        montantPrmeecheService: number;
        montantPrmeecheAccessoireComp: number;
        codeTypePhase: string;
        codeIndiceVersementFondAutrePendantPhase: number;
        dateCreationPhase: Date;
        codeConfirmationTauxInterieurCredit: number;
        nombrePeriodePhase: number;
        codePeriodeDurePhase: number;
        tauxPhase: Modele.TauxInteretAnnuel;
        tauxPhaseHorsBonificationMajre: Modele.TauxInteretAnnuel;
        montantPrmeecheHorsAccessoire: number;
        montantPrmeecheAccessoirePeriode: number;
        interetsDifferes: boolean;
        codeRecouvCapitInterets: number;
        modeRecouvInterets: number;
        modeCapitInterets: number;
        capitActive: boolean;
        recouvActive: boolean;
        choixCapitalisation: boolean;
        choixRecouvrement: boolean;
        capitalisation: boolean;
        recouvrement: boolean;
        idCreditIntr: string;
        idParametreRevisionParPhase: string;
        listeIdPalierTaux: string[];
        phaseProduit: Modele.IProduitPhase;
        montantPremiereEcheance: number;
        idws: string;
    }
    interface ILignePhaseCredit {
        idws?: string;
        nombrePeriodePhase?: number;
        codeTypePhase?: string;
        numeroRelationPhase?: number;
        montantPremiereEcheance?: number;
        nombrePeriodePhaseInitial?: number;
        dureePhaseMin?: number;
        dureePhaseMax?: number;
        dureePhasePas?: number;
        priseEnCompte?: boolean;
    }
    interface ICreditPhaseAmortissement extends ICreditPhase {
        codeRecouvrementAmortissementTermeEchu: number;
        quotientAmortissement: number;
        modeCalculAmortissement: number;
        codePrelFinPhase: number;
        tauxConstructionPhaseCredit: number;
        idCompPhasePourPretComb: string;
        listeIdPalierProgressifAmortissement: Array<string>;
    }
    interface ICreditPhaseDiffereAmortissement extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeRecouvrementPartielInterieur: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseDiffereTotal extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseMobilisation extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeRecouvrementPartielInterieur: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhasePrefinancement extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeReductionDureePref: number;
    }
    class CreditPhaseMaj {
        modeCapitalRecouvrementInterieur: number;
        codeCapitalRecouvrementInterieur: number;
        codePeriodeAssuranceCalculInterieur: number;
        codePeriodeCalculMER: number;
        nombrePeriodePhase: number;
        codePeriodeDurePhase: number;
        valeurTauxPhase: number;
        idws: string;
        constructor(creditPhase?: ICreditPhase);
    }
}

declare module instructionCredit.Modele {
    interface IPlanFinancementDetail {
        libelleRetardAdresse: string;
        montantTotalEmpruntPlan: number;
        codeEtatPlanFinancier: number;
        codeContratPlan: number;
        dateCreationPlan: string;
        dateDernierAnlsAdresse: string;
        dateEditPropCredit: string;
        notfEngagementBale2: string;
        codeAnlsMeneTerme: number;
        codeDecisionSpec: number;
        corcTarfCalculParAdresse: number;
        cotisationAnlsRisque: number;
        coefficientTarfCalculParAdresse: number;
        codeOriginePretPrincipal: number;
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        montantRestantFinancier: number;
        numeroDossierSmac: string;
        typeCritereOptim: number;
        valeurCritereOptim: number;
        idProjet: string;
        listeIdCreditIntr: Array<string>;
        listeIdCreditExtr: Array<string>;
        listeIdAssurance: Array<string>;
        listeIdGarantie: Array<string>;
        listeIdAccessoireComp: Array<string>;
        listeIdAccessoireLiesProduit: Array<string>;
        listeIdServiceSurObjet: Array<string>;
        listeIdPalierContrat: Array<string>;
        idAPL: string;
        idws: string;
        idSynthesePlanFinancement: string;
        description?: string;
        fraisCourtage?: number;
        accordDePrincipe: number;
        listeResultatControle: Array<Modele.IResultatControle>;
    }
    class PlanFinancement implements IPlanFinancementDetail {
        libelleRetardAdresse: string;
        montantTotalEmpruntPlan: number;
        codeEtatPlanFinancier: number;
        codeContratPlan: number;
        dateCreationPlan: string;
        dateDernierAnlsAdresse: string;
        dateEditPropCredit: string;
        notfEngagementBale2: string;
        codeAnlsMeneTerme: number;
        codeDecisionSpec: number;
        corcTarfCalculParAdresse: number;
        cotisationAnlsRisque: number;
        coefficientTarfCalculParAdresse: number;
        codeOriginePretPrincipal: number;
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        montantRestantFinancier: number;
        numeroDossierSmac: string;
        typeCritereOptim: number;
        valeurCritereOptim: number;
        idProjet: string;
        listeIdCreditIntr: Array<string>;
        listeIdCreditExtr: Array<string>;
        listeIdAssurance: Array<string>;
        listeIdGarantie: Array<string>;
        listeIdAccessoireComp: Array<string>;
        listeIdAccessoireLiesProduit: Array<string>;
        listeIdServiceSurObjet: Array<string>;
        listeIdPalierContrat: Array<string>;
        idAPL: string;
        idws: string;
        idSynthesePlanFinancement: string;
        accordDePrincipe: number;
        listeResultatControle: Array<Modele.IResultatControle>;
        constructor();
    }
    class PlanFinancementMaj {
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        dateEditPropCredit: string;
        dureeSouh: number;
        idws: string;
        constructor(plan?: IPlanFinancementDetail);
    }
}

declare module instructionCredit.Modele {
    interface IProduitsAutorises {
        codeFamilleProduit?: string;
        numeroRelationProduit?: string;
        libelleLongProduit?: string;
        numeroOrdreClasse?: number;
        codeFamilleControle?: string;
        montantMinimumCredit?: number;
        montantMaximumCredit?: number;
        dureeCredit?: number;
        dureeCredit1?: number;
        quotientFinancierAutre?: number;
        nombrePhaseAmortissement?: number;
        codePossibiliteDiffereTotal?: number;
        codePossibiliteDiffereAmortissement?: number;
        codeCreditRelease?: number;
        codeTauxCreditDirecteur?: number;
        indiceTypeTaux?: number;
        indiceCreditModele?: number;
        indiceProduitLissage?: number;
        indiceProduitComplement?: number;
        cleRecherche?: string;
        codeTypeTranchePret0?: string;
        indiceCompte?: number;
        codeEngagementConsolide?: number;
        codeProduitRestant?: string;
        dateFinValiditeProduit?: Date;
        idGammeLissage?: string;
        libelleGammeLissage?: string;
        nombrePhaseAmortissementMinimum?: number;
        nombrePhaseAmortissementMaximum?: number;
        idPremierProduitGamme?: string;
    }
}

declare module instructionCredit.Modele {
    interface IProduitsLissage {
        idProduit: string;
        nombrePhaseAmortissement: number;
        codeUtilisationReglePrdn: number;
    }
}

declare module instructionCredit.Modele {
    interface IResultatControle {
        libelle: string;
        messages: Array<string>;
    }
}

declare module instructionCredit.Modele {
    interface IDossierSmac {
        numeroEntiteTitulaire: string;
        listeDesEmprunteurs: Array<IEmprunteurSmac>;
        projet: IProjetSmac;
        listeDesCredits: Array<ICreditSmac>;
        reference: IReferenceNeoSmac;
        tauxPlancher1: number;
        tauxPlancher2: number;
        numeroOrdrePretTauxPlancher: number;
        tauxClientPretPrincipal: number;
        tauxDepartPretPrincipal: number;
        tauxClientPretComplementaire1: number;
        tauxDepartPretComplementaire1: number;
        tauxClientPretComplementaire2: number;
        tauxDepartPretComplementaire2: number;
        resultat: IResultatSmac;
    }
    interface IResultatSmac {
        code: string;
        description: string;
        details: string;
        typeResultat: number;
        identifiantDossierSmac: number;
    }
    interface IReferenceNeoSmac {
        numeroDossierNEO: string;
        numeroPlanFinancement: number;
        identifiantDossierSMAC: number;
        numeroOrdrePretTauxClientPP: number;
        numeroOrdrePretTauxClientPC1: number;
        numeroOrdrePretTauxClientPC2: number;
        modificationsSauvegardees: boolean;
        dateCreationDossier: Date;
    }
    interface IProjetSmac {
        numeroDossier: string;
        numeroPlanFinancement: string;
        numeroEntiteTitulaire: string;
        ilYAUnApporteurDAffaire: string;
        montant: string;
        marche: string;
        fraisDeDossier: string;
    }
    interface IEmprunteurSmac {
        nom: string;
        prenom: string;
        dateNaissance: string;
        numeroDePersonne: string;
        leSalaireEstDomicilie: string;
        montantDomiciliation: string;
        codeSegment: string;
        notationRisque: string;
    }
    interface ICreditSmac {
        identifiantProduitRegional: string;
        numeroDOrdre: string;
        nombreDePeriodes: string;
        montant: string;
        modeDAmortissement: string;
        periodeDAmortissement: string;
        estFloore: string;
        floor: string;
        estCape: string;
        cap: string;
        indiceDeRevision: string;
        quotiteRepartition: string;
        tauxProgressionEcheances: string;
    }
    interface IResultatBaleII {
        codeSegmentMarche: string;
        valeurNoteRisque: string;
    }
}

declare module instructionCredit.Modele {
    class SynteseFinancement {
        chargesBrutes: number;
        chargesNettes: number;
        totalPretsInternes: number;
        coutOperation: number;
        constructor();
    }
    class CreditSyntheseFinancement {
        description: string;
        montant: number;
        cout: number;
        phases: Array<PhaseSyntheseFinancement>;
        idws: string;
        teg: number;
        modeRestitution: Modele.ISelectbox;
        constructor();
    }
    class PhaseSyntheseFinancement {
        taux: number;
        description: string;
        mensualite: number;
        duree: number;
        idws: string;
        assurance: number;
        constructor();
    }
}

declare module instructionCredit.Modele {
    class SyntheseFrais {
        dossier: number;
        assurances: number;
        garanties: number;
        interets: number;
        liesAuprojet: number;
        courtage: number;
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ISynthesePlanFinancement {
        coutTotalTTC: number;
        coutTotalFraisGarantie: number;
        coutTotalFraisDossier: number;
        montantApportPersonnel: number;
        mtfaso_MontantConcoursInternes: number;
        mkface_MontantConcoursExternes: number;
        coutTotalFraisCourtage: number;
        montantMensualiteAvecAssurance: number;
        montantMensualiteNet: number;
        idPlanFinancier: string;
    }
}

declare module instructionCredit.Modele {
    interface ITauxIndiceLecture {
        marge: number;
        valeurIndice: number;
    }
}

declare module instructionCredit.Modele {
    class TauxInteretAnnuel {
        modeCalculTaux: number;
        nombrePeriodeParAn: number;
        tauxActu: number;
        tauxProp: number;
        marge: number;
        valeurIndice: number;
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ITypeAssurance {
        codeTypeAssurance: string;
        libelleTypeAssurance: string;
        codeNatureEntiteAssurance: number;
        libelleCreationTypeAssurance: string;
    }
}

declare module instructionCredit.Modele {
    interface ITypeGarantie {
        natureGarantieEPS: string;
        libelleLongNatureGarantie: string;
        libelleCreationNatureGarantie: string;
        classeGarantie: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        typeGarantieEPSNational: string;
        codeDeclarationABDF: number;
    }
}

declare module instructionCredit.Modele {
    /**
     * Objet manipulé dans la liste de selection multiple des phases des frais
     */
    class FraisPhaseChoix {
        codeTypePhase: string;
        libelleTypePhase: string;
        value: boolean;
        listeIdPhase: Array<string>;
        constructor(typePhase: Modele.ISelectbox);
    }
}

declare module instructionCredit.Modele {
    interface ISelectbox {
        libelle: string;
        code: string;
    }
    interface ISelectboxNumber {
        libelle: string;
        code: number;
        tri?: Array<number>;
    }
    /**
     * Dans le cadre de l'ajout d'un accessoire complé
     */
    interface ISelectboxAccessoire {
        libelle: string;
        codeTypeAccessoire: string;
        codeSousTAccessoireComplement: string;
    }
    /**
     * Dans le cas du RAF lors de l'affectation totale
     */
    interface ISelectboxRafTotal extends ISelectbox {
        libelle: string;
        code: string;
        typeElement: Enum.RafTypeElement;
    }
}

declare module instructionCredit.Modele {
    interface IBatimentHabitableFinance {
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        coutAcqsBatimentHabitation: number;
        codePrixMarcheBale2: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        dateAcqsBatimentHabitation: string;
        dateConstructionBatimentHabitation: string;
        montantTVAFinancierARemboursement: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idProjet: string;
        idTerrSousJacent: string;
        idws: string;
    }
    class BatimentHabitableFinanceMaj {
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        coutAcqsBatimentHabitation: number;
        codePrixMarcheBale2: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        dateAcqsBatimentHabitation: string;
        dateConstructionBatimentHabitation: string;
        montantTVAFinancierARemboursement: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idws: string;
        constructor(batiment?: Modele.IBatimentHabitableFinance);
    }
}

declare module instructionCredit.Modele {
    interface IBienAVendre {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: string;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idProjet: string;
        idws: string;
    }
    class BienAVendre implements IBienAVendre {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: string;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idProjet: string;
        idws: string;
        constructor(pIdProjet: string);
    }
    class BienAVendreMaj {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: string;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idws: string;
        constructor(bien?: IBienAVendre);
    }
}

declare module instructionCredit.Modele {
    interface IBienDetaille {
        coutTerr: number;
        coutAcqsCommercialisationInds: number;
        coutAcqsHabitation: number;
        coutConstruction: number;
        coutTravauxAmen: number;
        coutPasPort: number;
        coutFondComc: number;
        coutEqpmMte: number;
        coutVehcPrfs: number;
        coutPartSociale: number;
        montantFrsNegocie: number;
        montantFrsNotaire: number;
        coutStck: number;
        coutStckHorsInstruction: number;
        coutBfr: number;
        coutBfrHorsInstruction: number;
        coutAutreFrsPrfs: number;
        coutAutreFrsPrfsHorsInstruction: number;
        montantTVAFinancier: number;
        montantRachCren: number;
        coutPartSoce: number;
        idProjet: string;
        idws: string;
    }
    class BienDetailleMaj {
        coutTerr: number;
        coutAcqsCommercialisationInds: number;
        coutAcqsHabitation: number;
        coutConstruction: number;
        coutTravauxAmen: number;
        coutPasPort: number;
        coutFondComc: number;
        coutEqpmMte: number;
        coutVehcPrfs: number;
        coutPartSociale: number;
        montantFrsNegocie: number;
        montantFrsNotaire: number;
        coutStck: number;
        coutStckHorsInstruction: number;
        coutBfr: number;
        coutBfrHorsInstruction: number;
        coutAutreFrsPrfs: number;
        coutAutreFrsPrfsHorsInstruction: number;
        montantTVAFinancier: number;
        montantRachCren: number;
        coutPartSoce: number;
        idws: string;
        constructor(bien?: Modele.IBienDetaille);
    }
}

declare module instructionCredit.Modele {
    interface IConstructionFinancee {
        coutConstructionFinancier: number;
        dateDebutConstruction: number;
        dateFinConstruction: string;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        typeContratConstruction: number;
        typeImeu: number;
        presUneGarantieAcheTravaux: number;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idProjet: string;
        idTerrSousJacent: string;
        idws: string;
    }
    class ConstructionFinanceeMaj {
        coutConstructionFinancier: number;
        dateDebutConstruction: number;
        dateFinConstruction: string;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        typeContratConstruction: number;
        typeImeu: number;
        presUneGarantieAcheTravaux: number;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idws: string;
        constructor(construction?: Modele.IConstructionFinancee);
    }
}

declare module instructionCredit.Modele {
    interface IDetailCoutObjet {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idTravauxFinancier?: string;
        idws?: string;
    }
    class DetailCoutObjetMaj implements IDetailCoutObjet {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        constructor();
        constructor(detailCoutObjet: IDetailCoutObjet);
    }
}

declare module instructionCredit.Modele {
    interface IElementConstante {
        libelle: string;
        valeur: string;
    }
}

declare module instructionCredit.Modele {
    interface ILocalites {
        codePoste: string;
        ville: string;
        zonePlus: string;
        zoneDeRobien: string;
        zoneBourgadeRural: string;
    }
}

declare module instructionCredit.Modele {
    interface ILocalitesSchemaParent {
        ArrayOfScLocalite: Array<instructionCredit.Modele.ILocalitesSchema>;
    }
}

declare module instructionCredit.Modele {
    interface ILocalitesSchema {
        ScLocalite: Array<instructionCredit.Modele.ILocalites>;
    }
}

declare module instructionCredit.Modele {
    interface IProjet {
        defnSiEmpruntEstPrm: boolean;
        codeConditionDerogationPourPtz: number;
        valdelgbaPrmAccessoirePourCateRegleAttribut: boolean;
        eligibilitePtz: boolean;
        eligibilitePC: boolean;
        eligibilitePas: boolean;
        elgbaEpargneLogement: boolean;
        elgbaEcpt: boolean;
        codeBatimentBassConsommation: number;
        codeModeleOccpLogement: number;
        codePrixMarche: number;
        codeTypeMarche: number;
        typeProprietaire: number;
        pourcentageProprietaireApreOper: number;
        montantInscHypotheque: number;
        qualEmplaProjet: number;
        zoneRegleRobnBien: string;
        zonePlusLogement: string;
        codeZoneGegrRegle: number;
        typeImeu: number;
        codeLogementHlm: number;
        idProgrammeImmobilier: string;
        idAccrPourInstruction: string;
        indicemssNouvPartScpi: number;
        codeTypeMarchePourVent: number;
        nomSoceGestion: string;
        centreBourgadeRural: boolean;
        idBatimentHabitationFinancier: string;
        idws: string;
        typeObjetFinancier: string;
        typeObjetRegle: string;
        codeNatureFinancier: string;
        descriptionObjet: string;
        coutTotalObjet: number;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        montantFrsDivr: number;
        interieurFrsDivrFinancier: string;
        cateRegleAttribut: string;
        montantRachCren: number;
        codeMiseOeuvrProjetPro: number;
        coutObjetSaisieCalculEnvl: number;
        presBienAVend: boolean;
        negocieEffcParNotaire: boolean;
        typeAcqs: number;
        codeDestinataireAutreParObjet: number;
        nombreUnteContratProgrammeImmobilier: string;
        coutFrsNotaire: number;
        coutRelOper: number;
        montantEstmVenl: number;
        dateEstmVenl: number;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        fraisDeNotairesSaisissables: boolean;
        listeIdPlanFinancier: Array<string>;
        idBienAVend?: string;
        idTravauxFinancier?: string;
        idReamenagement?: string;
        typeProjet?: string;
        nature?: string;
        usage?: string;
        revente?: boolean;
        valeur?: string;
        crd?: string;
        delais?: string;
        prescripteur?: string;
        calcul?: string;
        montantOperation?: number;
        adresse?: string;
        zone?: string;
        propositions?: Array<instructionCredit.Modele.Proposition>;
        blocNote?: string;
    }
    class ProjetImmobilierMaj {
        defnSiEmpruntEstPrm: boolean;
        codeConditionDerogationPourPtz: number;
        codeBatimentBassConsommation: number;
        codeDestinataireAutreParObjet: number;
        codeModeleOccpLogement: number;
        codePrixMarche: number;
        codeTypeMarche: number;
        typeProprietaire: number;
        pourcentageProprietaireApreOper: number;
        codePaysLocalisation: string;
        montantInscHypotheque: number;
        qualEmplaProjet: number;
        zoneRegleRobnBien: string;
        zonePlusLogement: string;
        codeZoneFrncSinistre: number;
        typeImeu: number;
        idProgrammeImmobilier: string;
        idAccrPourInstruction: string;
        indicemssNouvPartScpi: number;
        codeTypeMarchePourVent: number;
        nomSoceGestion: string;
        centreBourgadeRural: boolean;
        descriptionObjet: string;
        coutTotalObjet: number;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        montantFrsDivr: number;
        montantRachCren: number;
        codeMiseOeuvrProjetPro: number;
        coutObjetSaisieCalculEnvl: number;
        negocieEffcParNotaire: boolean;
        typeAcqs: number;
        nombreUnteContratProgrammeImmobilier: string;
        coutFrsNotaire: number;
        coutRelOper: number;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        montantEstmVenl: number;
        dateEstmVenl: number;
        codeModeleEstmVenl: string;
        indiceAchtRvnt: boolean;
        idws: string;
        constructor(projet: Modele.IProjet, majToc: boolean, majAllAttributs?: boolean);
        private majSelonTocTor(toc, tor);
    }
}

declare module instructionCredit.Modele {
    interface ISoulteFinancee {
        montantSoul: number;
        permDetrSiSoulFaitSuiteDivo: boolean;
        pourcentageProprietaireOrigine: number;
        valeurActiviteCorrValeurBienOrigine: number;
        surfHabitationBienSous: number;
        dateAcqsBienSous: number;
        idProjet: string;
        idBienSousJacent: string;
        idws: string;
    }
    class SoulteFinanceeMaj {
        montantSoul: number;
        permDetrSiSoulFaitSuiteDivo: boolean;
        pourcentageProprietaireOrigine: number;
        valeurActiviteCorrValeurBienOrigine: number;
        surfHabitationBienSous: number;
        dateAcqsBienSous: Date;
        idws: string;
        constructor(soulte?: Modele.ISoulteFinancee);
    }
}

declare module instructionCredit.Modele {
    interface ITerrainFinancee {
        coutTerr: number;
        dateAcqsTerr: number;
        surfTerr: number;
        codeDonTerr: number;
        codeFinancierTerr: number;
        montantFrsNegocie: number;
        idProjet: string;
        idws: string;
    }
    class TerrainFinanceMaj {
        coutTerr: number;
        dateAcqsTerr: Date;
        surfTerr: number;
        codeFinancierTerr: number;
        montantFrsNegocie: number;
        idws: string;
        constructor(terrain?: Modele.ITerrainFinancee);
    }
}

declare module instructionCredit.Modele {
    interface IParamCoutTravauxEcoPtz {
        idCaisseEpargne: number;
        dateDebutApplication: Date;
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        dateFinApplication: Date;
        paramTypologieTravaux: IParamTypologieTravaux;
    }
    interface IParamTypologieTravaux {
        idCaisseEpargne: number;
        codeTypologieCoutTravaux: string;
        libelleCreationTypologieCout: string;
        libelleLongTypologieCout: string;
        montant: number;
    }
}

declare module instructionCredit.Modele {
    interface ITypeObjetCommercial {
        typeObjetFinancierGarantie: string;
        codeNatureFinancier: string;
        categorieRegleAttribut: string;
        libTypeObjetCommToc: string;
        codeVentilationSousclasseBafi: string;
        codeAffectationObjet: number;
        libCreationTypeObjetCommToc: string;
        listeTypeObjetReglemente: Array<string>;
    }
}

declare module instructionCredit.Modele {
    interface ITypeObjetReglemente {
        typeObjetRegleTor: string;
        libelleTypeObjetRegleTor: string;
        libCreationTypeObjetRegleTor: string;
    }
}

declare module instructionCredit.Modele {
    interface IUnitesPermisConstruire {
        code: string;
        libelle: string;
        emolument: number;
    }
}
