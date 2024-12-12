
declare module myway.c0410.compteDeDepot {
    var compteDeDepotModule: ng.IModule;
}

declare module myway.c0410.compteDeDepot {
    class CompteDepotService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private restPrerequisServiceUrl;
        private restExistenceLSEUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerCompteDepot(numeroEntiteTitulaire: number, numeroOffreSouscrite: number, identifiantProduitService: number, donneesCompteDeDepot: DonneesCompteDeDepot, bordereau: number, forcage?: string): ng.IPromise<DonneesCompteDeDepot>;
        recupererCompteDepot(codeEtablissementCompteSource?: string, codeGuichetCompteSource?: string, numeroCompteCompteSource?: string, habilitationReversementAgios?: boolean, habilitationLibellePersonnalise?: boolean): ng.IPromise<DonneesCompteDeDepot>;
        modifierCompteDepot(donneesCompteDepot: DonneesCompteDeDepot): ng.IPromise<DonneesCompteDeDepot>;
        getPrerequisOuvertureCDD(codeAction: string, codeEtablissement: string, numeroEntiteTitulaire: number, listePrerequisOuvertureCDD: IPrerequisOuvertureCDD[]): ng.IPromise<IPrerequisOuvertureCDD[]>;
        supprimerCompteDepot(numeroOffreSouscrite: number, identifiantProduitService: number, donneesCompteDepot: DonneesCompteDeDepot): ng.IPromise<void>;
        verifieExistenceLSE(codeEtablissement: string, codeGuichet: string, numeroPersonne: number, numeroCompte: string, dateNaissancePersonne: Date): ng.IPromise<IExistenceLSE>;
        private toLocalString(date);
    }
}

declare module myway.c0410.compteDeDepot {
    class CompteDepotControleur {
        private $scope;
        private $rootScope;
        private $q;
        private compteDepotService;
        private espaceGlobalService;
        private serviceAgentExtended;
        private affectationRadicalService;
        private compteBddCommunService;
        private modalService;
        private postOperationFinanciere;
        private signatureElectroniqueService;
        private identifiantBordereauService;
        private libreServiceEcureuilService;
        private resultsCommerciauxService;
        static $inject: string[];
        CODE_TYPE_PRODUIT_SERVICE_GCP_TABLE_DELOCALISE: string;
        REFERENCE_PRODUIT_PRINCIPAL: string;
        CSPR_DEFINIR_ROUTAGE_EDITIQUE: string;
        CODE_HABILITATION_OUVERTURE_AVENANT_CLOTURE: string;
        CODE_HABILITATION_MODIFICATION_LIBELLE_PERSONNALISE: string;
        CODE_HABILITATION_LECTURE_LIBELLE_PERSONNALISE: string;
        CODE_HABILITATION_FORCAGE_OPERATION_FINANCIERE: string;
        CODE_HABILITATION_MODIFICATION_REVERSEMENT_AGIO: string;
        CODE_HABILITATION_LECTURE_REVERSEMENT_AGIO: string;
        CODE_ACTION_DONNEES_PERSONNE: string;
        CODE_ACTION_DONNEES_DOSSIER_COMMERCIAL: string;
        CODE_ACTION_DONNEES_DOSSIER_COMMERCIAL_ET_PERSONNE: string;
        NIVEAU_MESSAGE_ERREUR_BLOCANT: string;
        NIVEAU_MESSAGE_ERREUR_INFORMATIF: string;
        LIBELLE_FORCAGE_POPUP: string;
        CODE_LIBELLE_FORCAGE: string;
        CODE_LIBELLE_OPERATIONFINANCIERE_IMPOSSIBLE: string;
        private CODE_FORCAGE;
        MODE_PRECEDENT: string;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        idBloc: string;
        contexteAppel: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        donneesCompte: DonneesCompte;
        compteDepotFormulaire: CompteDepotFormulaire;
        formulaireRecapAvenantCdd: CompteDepotFormulaire;
        donneesCompteDeDepot: DonneesCompteDeDepot;
        codeActeGestion: string;
        possedeHabilitation: boolean;
        isHabiliteLectureLibellePersonnalise: boolean;
        isHabiliteModificationLibellePersonnalise: boolean;
        isHabiliteOuvertureAveantClotureCDD: boolean;
        isHabiliteLectureReversementAgio: boolean;
        isHabiliteModificationReversementAgio: boolean;
        intitule: string;
        modeAffichage: string;
        modeChoisi: string;
        numeroCompteCodeGuichet: string;
        private identifiantFormulaire;
        estHabilite: boolean;
        private donneesMiseEnGestionCDD;
        private isEligibleSAG;
        private numeroBordereau;
        private detenteur;
        private isCantonnement;
        private compteDepotModifier;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $q: ng.IQService, compteDepotService: CompteDepotService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, affectationRadicalService: myway.comInterdomaine.AffectationRadicalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, modalService: MyWay.UI.ModalService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, signatureElectroniqueService: myway.comContract.Services.SignatureElectroniqueService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, libreServiceEcureuilService: myway.c0410.commun.LibreServiceEcureuilCommunService, resultsCommerciauxService: myway.c0410.commun.ResultsCommerciauxService);
        /**
         * Permet de recupperer la liste des identifiants de personnes contenu dans le contexte sous forme de string
         */
        private getNumeroPersonnes();
        /**
         * Permet de lancer le Compte de depot en mode ouverture
         */
        lancerOuvertureCompteDepot(): void;
        /**
         * Verifie les prérequis en Ouverture CDD
         */
        private verifieHabilitationsEnOuverture();
        /**
         * Permet de lancer le compte de depôt en mode avenant
         */
        lancerAvenantCompteDepot(): void;
        private estLibelleVide();
        /**
         * Verifie les prérequis en Avenant CDD
         */
        private verifieHabilitationEnAvenant();
        /**
         * Cette methode permet de reserver un numero de compte et l'enregistre dans l'espace global. Avant de le reserver il doit s'assurer
         * qu'il n'y pas eu une reservation anterieure
         */
        reserverNumeroDeCompte(): ng.IPromise<string>;
        /**
         * Permet de savoir s'il y a une reservation de numero de compte à été effectuée. Elle assure l'unicté de la reservation
         */
        isNumeroDeCompteReserve(): boolean;
        /**
         * Cette permet de verifier les prerequis pour le compte de depot. Elle est appelée au niveau de l'initialisation du CDD et
         * rejouée au niveau de la validation de formulaire. Si l'on est en ouverture on emet un message d'erreur, si l'on est en validation ou
         * en mise en gestion on rajoute la liste des messages d'erreur du prerequis dans le compte rendu de mise en gestion
         */
        verifierPrerequis(enOuverture: boolean): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        /**
         * Cette methode permet à partir du segment mode financier de retourner le mode financier à afficher dans l'ecran de recapitulatif
         */
        getModeFinancierPourRecap(operationFinanciere: myway.comOpesFinancieres.Model.SegmentPRVRIO): string;
        /**
         * Cette fonction permet de recuperer sous forme de chaine de caractères
         */
        private getCoupuresBillets(billeterie);
        /**
         * Permet de valider les données du compte de depot
         */
        validerderDonneesCompteDeDepot: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Permet d'indiquer que le CDD est la reference principale du Bouquet Liberté
         */
        private definirReferenceProduitPrincipal(codeEtablissement, codeGuichetInterbancaire, numeroCompte);
        /**
         * permet de verifier dans la liste des prérequis s'il un prerequis bloquant
         */
        private isPrerequisBloquant(messagesErreursPrerequis);
        /**
         * Permet de verifier que les champs de saisie de l'opération financière (Montant, type de virement) sont valorisés
         * en modification, il n'y a pas d'operation financière, donc pas de vérification
         */
        private isValideOperationFinanciere();
        /**
         * Permet de lancer la mise en gestion du compte de depot: soit ouverture, avenant ou cloture
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private CompteRenduMiseEnGestionSansModifier(data);
        /**
         * Permet de supprimer les données du compte de depot
         */
        supprimerDonneesCompteDeDepot(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Permet de créer l'objet le Compte de Depot à l'aide des données génériques ou des données existantes
         */
        private enregistrerCompteDeDepot();
        /**
         * Verifie s'il existe un Libre service Ecureuil pour la personne, si rattache le compte CDD au LSE
         */
        rattacheServiceLSE(personne: GestionGeneriqueOffres.Types.Tiers.Personne, listeMessageErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        /**
         * Permet de repercuter les données saisies dans le formulaire dans celle du compte depot
         */
        private miseaJourDonneeCDDDepuisFormulaire();
        /**
         * Cette methodes permet en cas d'echec du post CDD de lancer les modales de forçage Operation financière
         */
        gererErreursPostCompteDepot(error: MyWay.Services.Erreur, listeMessageErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Permet de lancer la popup de forçage impossible de l'operation finacière
         */
        private lancerPopupSimple(libelle, valeurs);
        /**
         * Permet d'effectuer un avenant sur un compte de depot
         */
        private modifierCompteDeDepot();
        /**
         * Permet de lancer la popup de forçage si l'utilisateur possède l'habilitation SHGCAE
         */
        lancerPopupDeForcage(libelle: string, valeurs: string[]): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Lance la pop-up permettant d'afficher la modification de l'operation financière en d'echec sur le post
         */
        lancerPopupOperationFinanciere(messagesErreurs?: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Cette fonction permet de detecter si un champs d'un formulaire à été modifié
         */
        hasModifieChamps(nomChamps: string): boolean;
        /**
         * Permet de savoir si la directive est appelée en modification (Avenant) ou en ouverture
         */
        private determinerMode(mode);
        private traitementPostOperationFinanciere();
        private getCodMPR(donneesTableDelocalisee);
        /**
         * Permet de mettre à jour les resultats commerciaux après modification du montant en avenant BL, avenant decouvert
         */
        private mettreAJourResultatsCommerciaux();
        /**
         * Permet de recupperer les resultats commerciaux
         */
        private getDonneesResultatCommerciaux();
    }
}

declare module myway.c0410.compteDeDepot {
    function mwcdComptedepot(): ng.IDirective;
}

declare module myway.c0410.compteDeDepot {
    class CompteDepotFormulaire extends myway.c0410.commun.ObjetGenerique {
        private static ROLE_PERSONNE_0;
        private _intitule;
        private _reversementAgio;
        private _compteDepotModifier;
        private modeFinancierDefaut;
        compteDepotModifier: boolean;
        intitule: string;
        reversementAgio: boolean;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        constructor(identifiantFormulaire: string, codeBanque?: string, codeGuichet?: string, produit?: GestionGeneriqueOffres.Types.ProduitCaracteristique, libelleOffre?: string, listeIdPersonnes?: string[], numeroPersonneIdentifiee?: string);
        setDonneesCompteDeDepot(donneesCompteDepot: DonneesCompteDeDepot): void;
        metAJourFormulaire(donneesCompteDepot: DonneesCompteDeDepot): void;
        getInformationsChampsInvalidesFormulaire(): myway.c0410.commun.StatutChampsFormulaire[];
        private initialiserOperationFinanciere(codeBanque, codeGuichet, produit, libelleOffre, listeNumerosPersonnes, numeroPersonneIdentifiee);
        setOperationFinanciereSignataire(listeDesSignataires: myway.comContract.modeles.ISignataireComplet[], numeroPersonneIdentifiee: number): void;
        viderLeLibelle(): void;
        setOperationFinanciereAvecPersonne(signataire: GestionGeneriqueOffres.Types.Tiers.Personne): void;
        /** Détermine si un signataire est vide */
        estSignataireVide(): boolean;
    }
}

declare module myway.c0410.compteDeDepot {
    interface IOperationFinanciere {
        montant: number;
        codeModeFinancier: string;
        libelleCourt: string;
        libelleLong: string;
        segmentPrvRio: ISegmentPrvRio;
        segmentPrjo: ISegmentPrjo;
    }
    interface IOperationRepartition {
        numeroCompte: string;
        montantVirement: number;
        libelleVirement: string;
    }
    interface IDetailBilleterie {
        monnaieBilleterie: number;
        nombreCoupure: ICoupure;
        monnaieSansBillet: number;
    }
    interface IInfosCheque {
        deviseCheque: string;
        numeroCheque: string;
        zoneInterne: string;
        montantCheque: number;
    }
    interface IChequeOperationFinanciere {
        S_INFOCHEQUE: Array<IInfosCheque>;
        modeFonctionnement: string;
        montant: number;
        deviseMontant: string;
    }
    interface IContratCDD {
        compteDeDepot: ICompteDeDepot;
        operationFinanciere: IOperationFinanciere;
    }
    interface ICompteDeDepot {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        reversementAgios: boolean;
        libellePersonnalise: string;
        deviseDuCompte: string;
        codeTypeProduitService: string;
    }
    interface ICoupure {
        b500: number;
        b200: number;
        b100: number;
        b50: number;
        b20: number;
        b10: number;
        b5: number;
    }
    interface ISegmentPrvRio {
        dateDeValeur: Date;
        titre: string;
        mfIndicateur: string;
        texteBoutonValidation: string;
        montantMinimum: number;
        montantMaximum: number;
        codeDeviseMontantParametre: string;
        numeroCompteRice: string;
        anneesProrogationPEL: string;
        modeFinancierNumerique: string;
        codeEvenementAtome: string;
        codePrestationTarifaire: string;
        modeFinancierChoisi: string;
        codeDeviseMontantOperation: string;
        montantGlobalOperation: number;
        libelleOperation1: string;
        indicateurLibelleBlocage: string;
        indicateurDateBlocage: string;
        codeRoleParticipant: string;
        nomPatronymiqueParticipant: string;
        prenomParticipant: string;
        identiteParticipant: string;
        numeroTelephoneParticipant: string;
        numeroCheque: string;
        ordreCheque: string;
        chequeGlobal: string;
        derniereContrepartie: string;
        typeCheque: string;
        nombreJourReserveEncaissement: string;
        supportLivret: string;
        presentationLivret: string;
        indicOblig: string;
        ancienSoldeLivret: number;
        indicateurBlocageAncienSolde: string;
        prochainNumeroLigneAImprimer: string;
        ligneBlocage: string;
        codeDeviseSoldeLivret: string;
        indicateurOD: string;
        S_BILLETERIE: IDetailBilleterie;
        S_PRVRIOUGR: Array<IOperationRepartition>;
        libelleOperation2: string;
        numeroPersonneSignataire: string;
        S_CHEQUE: IChequeOperationFinanciere;
    }
    interface ISegmentPrjo {
        numeroCompteclient: string;
        codeDeviseOperation: string;
        montantOperation: number;
        montantCommission: number;
        libelleFamilleOD: string;
        libelleTypeOD: string;
        detailAImprimer: string;
        codeTransaction: string;
        codeReferenceOD: string;
        codeFamilleOD: string;
        libelle1SaisiOD: string;
        libelle2SaisiOD: string;
    }
    interface IPrerequisOuvertureCDD {
        numeroPersonne: number;
        listeMessagesErreurPrerequisOuvertureCDD: Array<IMessageErreurPrerequisOuvertureCDD>;
    }
    interface IMessageErreurPrerequisOuvertureCDD {
        libelleMessageErreur: string;
        niveauMessageErreur: string;
        codeMessageErreur: string;
        origineMessageErreur: string;
    }
    interface IDonneesMiseEnGestionCDD {
        formulaireCdd: CompteDepotFormulaire;
        identifiantEntiteTitulaire: number;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        donneesCompteDeDepot: DonneesCompteDeDepot;
        isEligibleSAG: boolean;
        numeroBordereau: string;
    }
    interface IExistenceLSE {
        numeroPersonne: number;
        codeGuichet: string;
        numeroCompte: string;
        codeEtablissement: string;
        existence: boolean;
    }
    interface IRetourModale {
        annuler: boolean;
        valider: boolean;
    }
    class DonneesCompteDeDepot {
        compteDeDepot: ICompteDeDepot;
        operationFinanciere: IOperationFinanciere;
        constructor(donneesCompteDeDepot?: DonneesCompteDeDepot);
        miseAjourDuModele(formulaireCompteDepot: CompteDepotFormulaire): void;
        miseAjourOperationFinanciere(operation: myway.comOpesFinancieres.Model.OperationFinanciere): void;
        miseAjourDuModeleDepuisParametre(codeBanque: string, codeGuichet: string, numeroCompte: string): void;
        private getnumeroCompteRice(codeBanque, codeGuichet, numeroCompte);
    }
    class CompteDepotGenerique extends myway.c0410.commun.ObjetGenerique {
        static IDENTIFIANT_CDD: string;
        compteDeDepot: ICompteDeDepot;
        constructor(compteDeDepot: ICompteDeDepot);
    }
    class DonneesCompte extends myway.c0410.commun.ObjetGenerique {
        static IDENTIFIANT_DONNEES_COMPTE: string;
        numeroDeCompte: string;
        codeGuichet: string;
        codeEtablissement: string;
        identifiantBordereau: string;
        constructor(numeroDeCompte: string);
    }
}

declare module myway.c0410.compteDeDepot {
    class OperationFinanciereModaleControleur {
        private $q;
        private $modalInstance;
        private data;
        private $location;
        private serviceAgentExtended;
        private modalService;
        private espaceGlobalService;
        private compteDepotService;
        static $inject: string[];
        constructor($q: ng.IQService, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, $location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteDepotService: CompteDepotService);
        fermer(retourModale: IRetourModale): void;
        private enregistrerCompteDeDepot();
    }
}

declare module myway.c0410.compteDeDepot {
    class PopupForcageControleur {
        private $q;
        private $modalInstance;
        private data;
        private $location;
        private serviceAgentExtended;
        private modalService;
        private espaceGlobalService;
        private compteDepotService;
        static $inject: string[];
        constructor($q: ng.IQService, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, $location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteDepotService: CompteDepotService);
        fermer(retourModale: IRetourModale): void;
        enregistrerCompteDepotEnModeForcage(): void;
    }
}
