
declare module myway.c0410.compteDeDepot {
    var compteDeDepotModule: ng.IModule;
}

declare module myway.c0410.compteDeDepot {
    class CompteDepotService {
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        static $inject: string[];
        private restServiceUrl;
        private restPrerequisServiceUrl;
        private restExistenceLSEUrl;
        private listeRatacheUrl;
        private infosCDDUrl;
        private soldeAgiosUrl;
        private resultatEntretien;
        private restSuppressionLSEUrl;
        private restTarificationCFNUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService);
        creerCompteDepot(numeroEntiteTitulaire: number, numeroOffreSouscrite: number, identifiantProduitService: number, donneesCompteDeDepot: DonneesCompteDeDepot, bordereau: number, codeUniversTracabilite?: string, forcage?: string): ng.IPromise<DonneesCompteDeDepot>;
        recupererCompteDepot(codeEtablissementCompteSource?: string, codeGuichetCompteSource?: string, numeroCompteCompteSource?: string, habilitationReversementAgios?: boolean, habilitationLibellePersonnalise?: boolean): ng.IPromise<DonneesCompteDeDepot>;
        modifierCompteDepot(donneesCompteDepot: DonneesCompteDeDepot): ng.IPromise<DonneesCompteDeDepot>;
        getPrerequisOuvertureCDD(codeAction: string, codeEtablissement: string, numeroEntiteTitulaire: number, listePrerequisOuvertureCDD: IPrerequisOuvertureCDD[]): ng.IPromise<IPrerequisOuvertureCDD[]>;
        supprimerCompteDepot(contratCDD: ContratCDDCloture, numeroOffreSouscrite: number, identifiantPersonne: number, numeroEntiteTitulaire: number, identifiantProduitService: number, bordereau: number, forcage: string, indicateurChoixTracabilite: string, codeUniversTracabilite: string): ng.IPromise<DonneesCompteDeDepot>;
        verifieExistenceLSE(codeEtablissement: string, codeGuichet: string, numeroPersonne: number, numeroCompte: string, dateNaissancePersonne: Date): ng.IPromise<IExistenceLSE>;
        private toLocalString(date);
        toJmaString(): string;
        /** Requête GET
         *  Permet dans le cadre des opérations de clôture et d'annulation d'ouverture d'identifier les produits et services rattachés à un compte
         *  @return promise<ReleveCompteIListePsRattache>
         */
        getPrerequisClotureCDD(numeroOffreSouscrite: number, codeGuichetInterbancaire: string, codeEtablissement: string, codeTypeProduitService: string, referenceProduitService: string): ng.IPromise<IListePsRattache>;
        /** Requête GET
         * Restitue toutes les informations d'un compte de dépôt.
         *  @return promise<CaracteristiqueCDD>
         */
        getCaracteristiqueCDD(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string): ng.IPromise<ICaracteristiqueCDD>;
        /** Requête GET
         * Retourne les montants des agios et de la rémunération à imputer au compte.
         *  @return promise<ICalculAgiosRemun>
         */
        getCalculAgiosRemun(codeEtablissement: string, codeDevise: string, numeroCompteProduitService: string, montantSoldeBrutCDD: number, montantReversementAgios: number, codeAction: string, codeGuichetInterbancaire: string, dateOperation: Date): ng.IPromise<ICalculAgiosRemun>;
        postResultatEntretien(resultatEntretien: Resultat, versionTraitement?: string): ng.IPromise<void>;
        putLibreServiceEcureuil(contratLibreServiceEcureuil: IContratLibreServiceEcureuil, dateNaissancePersonne: Date): ng.IPromise<IContratLibreServiceEcureuil>;
        getCoffreFortNumerique(codeBanque: string, identifiantCoffreFortNumerique: string): ng.IPromise<ICoffreFortNumerique>;
    }
}

declare module myway.c0410.compteDeDepot {
    class CompteDeDepotConstantes {
        static CLOTURE_TITRE_LABEL: string;
        static CLOTURE_TYPE: any;
        static HABILITATION_CTX: string;
        static HABILITATION_PERTE: string;
    }
    enum TypeAffichageSolde {
        DISPONIBLE = 0,
        ACTUEL = 1,
    }
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
        private produitEngageService;
        private signatureElectroniqueService;
        private identifiantBordereauService;
        private libreServiceEcureuilService;
        private operationFinanciereService;
        private resultsCommerciauxService;
        private $timeout;
        private chequeBanqueService;
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
        CODE_LIBELLE_MSG_FORCE: string;
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
        donneesSauvegardeCompteDepot: myway.c0410.commun.IDonneesSauvegardeTechniqueProduitService;
        donneesCompte: myway.c0410.commun.DonneesCompte;
        compteDepotFormulaire: CompteDepotFormulaire;
        formulaireRecapAvenantCdd: CompteDepotFormulaire;
        donneesCompteDeDepot: DonneesCompteDeDepot;
        codeActeGestion: string;
        possedeHabilitation: boolean;
        clotureLabel: string;
        infosCDD: CaracteristiqueCDD;
        agiosRemu: ICalculAgiosRemun;
        listeTypeCloture: any;
        typecloture: string;
        plusOuMoins: string;
        afficherDetailSolde: boolean;
        comptePourLeSolde: MyWay.Model.Contrat;
        typeAffichageSolde: TypeAffichageSolde;
        afficherPerteProfit: boolean;
        produitCFN: GestionGeneriqueOffres.Types.ReferenceProduit;
        isAgentHabiliteCTX: boolean;
        isAgentHabilitePERTE: boolean;
        soldeBrut: string;
        reversAgiosTrimestriels: string;
        remuBruteAnnuelle: string;
        fiscaliteAnnuelle: string;
        soldeNetAPayer: string;
        agiosTrimestriels: string;
        soldeActuel: string;
        agiosCalcules: string;
        tarifCFNLibelle: string;
        cddHabilitations: CompteDepotHabilitations;
        intitule: string;
        modeAffichage: string;
        modeChoisi: string;
        numeroCompteCodeGuichet: string;
        private identifiantFormulaire;
        estHabilite: boolean;
        modeFinancierChoisi: string;
        tarifCFN: number;
        soldeNetCDD: number;
        habilitationCTX: string;
        habilitationPERTE: string;
        private donneesMiseEnGestionCDD;
        private isEligibleSAG;
        private numeroBordereau;
        private detenteur;
        private dateNaissance;
        private personnes;
        private isCantonnement;
        private compteDepotModifier;
        private donneesProduitEngagee;
        private formulaireProduitEngage;
        infoPartageTracab: myway.transProduitEngage.IInfoPartageTracab;
        private estProduitEngage;
        private _contratCDDCloture;
        private _contratLSE;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $q: ng.IQService, compteDepotService: CompteDepotService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, affectationRadicalService: myway.comInterdomaine.AffectationRadicalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, modalService: MyWay.UI.ModalService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, produitEngageService: myway.transProduitEngage.ProduitEngageService, signatureElectroniqueService: myway.comContract.Services.SignatureElectroniqueService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, libreServiceEcureuilService: myway.c0410.commun.LibreServiceEcureuilCommunService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, resultsCommerciauxService: myway.c0410.commun.ResultsCommerciauxService, $timeout: ng.ITimeoutService, chequeBanqueService: myway.comOpesFinancieres.ChequeBanqueService);
        /**
         * Permet de recupperer la liste des identifiants de personnes contenu dans le contexte sous forme de string
         */
        private getNumeroPersonnes();
        /**
         * Permet de lancer le Compte de depot en mode ouverture
         */
        lancerOuvertureCompteDepot(): void;
        /**
         * Met à jour la variable de contexte de mise à jour interrogation banque de france de GGO
         */
        miseAJourIndicateurBDF(): void;
        /**
         * Verifie les prérequis en Ouverture CDD
         */
        private verifieHabilitationsEnOuverture();
        /**
         * Permet de lancer le compte de depôt en mode avenant
         */
        lancerAvenantCompteDepot(): void;
        /**
         * Permet de lancer le Compte de depot en mode Cloture
         */
        lancerClotureCompteDepot(): void;
        private finChargementComposant();
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
        verifierPrerequis(enOuverture: boolean, isBloque?: boolean): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        afficherDetailSoldeEnCloture(): void;
        /**
         * Restitue toutes les informations d'un compte de dépôt.
         */
        getDonneesCDD(): ng.IPromise<ICaracteristiqueCDD>;
        editOpefiEnPerte(calculAgiosRemun: ICalculAgiosRemun): void;
        getDonneesAuthentification(): void;
        /**
         * Cette methode permet à partir du segment mode financier de déterminer le mode financier à afficher dans l'ecran de recapitulatif
         */
        setModeFinancierPourRecap(operationFinanciere: myway.comOpesFinancieres.Model.SegmentPRVRIO): void;
        /**
         * Cette fonction permet de recuperer sous forme de chaine de caractères
         */
        getCoupuresBillets(billeterie: myway.comOpesFinancieres.Model.SegmentBilleterie): string;
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
        supprimerDonneesCompteDeDepot(isContractualisationActeUndefined: boolean): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Permet de créer l'objet le Compte de Depot à l'aide des données génériques ou des données existantes
         */
        private enregistrerCompteDeDepot(isContractualisationActeUndefined);
        /**
         * Permet de sauvergarder le formulaire de saisie du compte de depot dans le dossier de vente,
         * @Param: l'identifiant du dossier de vente
         * @Retrun: un object contenant deux blocs:
         *           1- la vue myway c'est à dire le formulaire saisie
         *           2- la vue MDEC qui correspond à une vue resumée du formulaire
         */
        sauvergarderDossierDeVente: GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde;
        /**
         * Permet de recuperer les données de sauvegarde du compte de depot
         */
        private getDonneesSauvegardeProduitService();
        /**
         * permet de recuperer un objet light permettant de sauvegarder l'operation financière à fin de le restaurer
         */
        private getDonneesSauvegardeOperationFinanciere();
        /**
         * Permet de restaurer le dossier de vente à l'etat avant la dernière sauvegarde
         * @Param:
         * @Return:
         */
        restaurerDossierDeVente(): void;
        /**
         * Permet de recharger le CDD en recap directement quand on est en ouverture
         */
        rechargerRecapVPC(): void;
        /**
         * Permet de retourner la vue MDEC du compte de depôt
         *
         */
        getVueMDEC(): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
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
        lancerPopupOperationFinanciere(isHabiliteForcage: boolean, messagesErreurs?: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
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
        /**
         * Permet de verfier si l'on est en ouverture par changement d'offre
         */
        isChangementOffre(): boolean;
        private initialiserDonneesProduitEngage();
    }
}

declare module myway.c0410.compteDeDepot {
    function mwcdComptedepot(): ng.IDirective;
}

declare module myway.c0410.compteDeDepot {
    class CompteDepotFormulaire extends myway.c0410.commun.ObjetGenerique {
        private _formulaireProduitEngage;
        private static ROLE_PERSONNE_0;
        private _intitule;
        private _reversementAgio;
        private _compteDepotModifier;
        private modeFinancierDefaut;
        private CODE_FAMILLE_GESTION_PRODUIT_SERVICE;
        private _agiosRemu;
        private _habilitations;
        private _codeActionModeCloture;
        private _detailSolde;
        private _listeServices;
        agiosRemu: ICalculAgiosRemun;
        formulaireProduitEngage: myway.transProduitEngage.ProduitEngageFormulaire;
        habilitations: CompteDepotHabilitations;
        listeServices: Array<Service>;
        codeActionModeCloture: string;
        detailSolde: DetailSolde;
        compteDepotModifier: boolean;
        intitule: string;
        reversementAgio: boolean;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        constructor(identifiantFormulaire: string, codeBanque?: string, codeGuichet?: string, produit?: GestionGeneriqueOffres.Types.ProduitCaracteristique, libelleOffre?: string, listeIdPersonnes?: string[], numeroPersonneIdentifiee?: string, _mode?: string, codeFamille?: string, identifiantProduitService?: number, codeCanal?: string, modeVpc?: boolean);
        setDonneesCompteDeDepot(donneesCompteDepot: DonneesCompteDeDepot): void;
        metAJourFormulaire(donneesCompteDepot: DonneesCompteDeDepot): void;
        getInformationsChampsInvalidesFormulaire(): myway.c0410.commun.StatutChampsFormulaire[];
        private initialiserOperationFinanciere(codeBanque, codeGuichet, produit, libelleOffre, listeNumerosPersonnes, numeroPersonneIdentifiee, _mode?, identifiantProduitService?, codeCanal?, modeVpc?, codeFamille?);
        setOperationFinanciereSignataire(listeDesSignataires: myway.comContract.modeles.ISignataireComplet[], numeroPersonneIdentifiee: number): void;
        viderLeLibelle(): void;
        setOperationFinanciereAvecPersonne(signataire: GestionGeneriqueOffres.Types.Tiers.Personne): void;
        /** Détermine si un signataire est vide */
        estSignataireVide(): boolean;
        /**
         * Fonction permettant de retourner les données de sauvegarde du compte de depot
         */
        getModeFinancier(): GestionGeneriqueOffres.Types.DossierDeVente.IModeFinancier;
        /**
         * Permet de restaurer le l'operation financiere en cas de sauvegarde et de restauration de produit/service en VAD
         */
        restaureOperationFinanciere(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere): void;
    }
    /**
     * Permet de restaurer les le formualire à partir des données du dossier de vente
     */
    class CompteDepotHabilitations {
        isHabiliteLectureLibellePersonnalise: boolean;
        isHabiliteModificationLibellePersonnalise: boolean;
        isHabiliteOuvertureAveantClotureCDD: boolean;
        isHabiliteLectureReversementAgio: boolean;
        isHabiliteModificationReversementAgio: boolean;
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
    class OperationRepartition implements IOperationRepartition {
        numeroCompte: string;
        montantVirement: number;
        libelleVirement: string;
        constructor(numeroCompte: string, montantVirement: number, libelleVirement: string);
    }
    interface IModeFinancier {
        CIJMMC: string;
        CIJMMS: string;
        CTGXM1: string;
        CTGXMF: string;
        LIJMMI: string;
    }
    class ModeFinancier implements IModeFinancier {
        CIJMMC: string;
        CIJMMS: string;
        CTGXM1: string;
        CTGXMF: string;
        LIJMMI: string;
        constructor();
    }
    interface IDetailBilleterie {
        monnaieBilleterie: number;
        nombreCoupure: ICoupure;
        monnaieSansBillet: number;
    }
    class DetailBilleterie implements IDetailBilleterie {
        monnaieBilleterie: number;
        nombreCoupure: ICoupure;
        monnaieSansBillet: number;
        constructor(monnaieBilleterie: number, nombreCoupure: ICoupure, monnaieSansBillet: number);
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
    class Coupure implements ICoupure {
        b500: number;
        b200: number;
        b100: number;
        b50: number;
        b20: number;
        b10: number;
        b5: number;
        constructor(b500: number, b200: number, b100: number, b50: number, b20: number, b10: number, b5: number);
    }
    interface ILibelleOperation {
        libelleCourt: string;
        libelleLong: string;
    }
    class LibelleOperation implements ILibelleOperation {
        libelleCourt: string;
        libelleLong: string;
        constructor();
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
    class SegmentPrvRio implements ISegmentPrvRio {
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
        constructor(dateDeValeur: Date, titre: string, mfIndicateur: string, texteBoutonValidation: string, montantMinimum: number, montantMaximum: number, codeDeviseMontantParametre: string, numeroCompteRice: string, anneesProrogationPEL: string, modeFinancierNumerique: string, codeEvenementAtome: string, codePrestationTarifaire: string, modeFinancierChoisi: string, codeDeviseMontantOperation: string, montantGlobalOperation: number, libelleOperation1: string, indicateurLibelleBlocage: string, indicateurDateBlocage: string, codeRoleParticipant: string, nomPatronymiqueParticipant: string, prenomParticipant: string, identiteParticipant: string, numeroTelephoneParticipant: string, numeroCheque: string, ordreCheque: string, chequeGlobal: string, derniereContrepartie: string, typeCheque: string, nombreJourReserveEncaissement: string, supportLivret: string, presentationLivret: string, indicOblig: string, ancienSoldeLivret: number, indicateurBlocageAncienSolde: string, prochainNumeroLigneAImprimer: string, ligneBlocage: string, codeDeviseSoldeLivret: string, indicateurOD: string, S_BILLETERIE: IDetailBilleterie, S_PRVRIOUGR: Array<IOperationRepartition>, libelleOperation2: string, numeroPersonneSignataire: string, S_CHEQUE: IChequeOperationFinanciere);
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
    class SegmentPrjo implements ISegmentPrjo {
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
        constructor();
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
        miseAjourDuModele(formulaireCompteDepot: CompteDepotFormulaire, codeEtablissement?: string, codeGuichetInterbancaire?: string, numeroDeCompte?: string): void;
        miseAjourOperationFinanciere(operation: myway.comOpesFinancieres.Model.OperationFinanciere): void;
        miseAjourDuModeleDepuisParametre(codeBanque: string, codeGuichet: string, numeroCompte: string): void;
        private getnumeroCompteRice(codeBanque, codeGuichet, numeroCompte);
    }
    class CompteDepotGenerique extends myway.c0410.commun.ObjetGenerique {
        static IDENTIFIANT_CDD: string;
        compteDeDepot: ICompteDeDepot;
        constructor(compteDeDepot: ICompteDeDepot);
    }
    interface IListePsRattache {
        listeServicesInformations: Array<IService>;
        listeServicesBloquants: Array<IService>;
        listeServicesClotureSuppression: Array<IService>;
        listeServicesChoix: Array<IService>;
    }
    interface IService {
        codeActionService: string;
        codeTypeProduitService: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        numeroCompteProduitService: string;
        anneeCreationDossierEcheancier: number;
        numeroChronoDossierEcheancier: number;
        codeActeurCreationDossier: string;
        codeBanqueCompteRecepteur: string;
        codeGuichetCompteRecepteur: string;
        numeroCompteRecepteur: string;
        anneeCreationDossierPrelevement: number;
        numeroCreationDossierPrelvement: number;
        codeApplicatifCreateurDossier: string;
        numeroContratEpar: number;
        numeroOffreSouscrite: number;
        codeInterbancaireBanque: string;
        codeGuichetBanque: string;
        referenceProduitService: string;
        messageErreur: IMessageErreur;
    }
    class Service implements IService {
        codeActionService: string;
        codeTypeProduitService: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        numeroCompteProduitService: string;
        anneeCreationDossierEcheancier: number;
        numeroChronoDossierEcheancier: number;
        codeActeurCreationDossier: string;
        codeBanqueCompteRecepteur: string;
        codeGuichetCompteRecepteur: string;
        numeroCompteRecepteur: string;
        anneeCreationDossierPrelevement: number;
        numeroCreationDossierPrelvement: number;
        codeApplicatifCreateurDossier: string;
        numeroContratEpar: number;
        numeroOffreSouscrite: number;
        codeInterbancaireBanque: string;
        codeGuichetBanque: string;
        referenceProduitService: string;
        messageErreur: IMessageErreur;
    }
    class ServiceClotureContratCdd {
        codeActionService: string;
        codeTypeProduitService: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        numeroCompteProduitService: string;
        anneeCreationDossierEcheancier: number;
        numeroChronoDossierEcheancier: number;
        codeActeurCreationDossier: string;
        codeBanqueCompteRecepteur: string;
        codeGuichetCompteRecepteur: string;
        numeroCompteRecepteur: string;
        anneeCreationDossierPrelevement: number;
        numeroCreationDossierPrelvement: number;
        codeApplicatifCreateurDossier: string;
        numeroContratEpar: number;
        numeroOffreSouscrite: number;
        codeInterbancaireBanque: string;
        codeGuichetBanque: string;
        referenceProduitService: string;
        constructor(servicesCloture: IService);
    }
    interface IMessageErreur {
        code: string;
        libelle: string;
    }
    interface ICaracteristiqueCDD {
        engagementDomiciliation: IEngagementDomiciliation;
        informationsCDD: IInformationsCDD;
        opposition: IOpposition;
    }
    class CaracteristiqueCDD implements ICaracteristiqueCDD {
        engagementDomiciliation: IEngagementDomiciliation;
        informationsCDD: IInformationsCDD;
        opposition: IOpposition;
    }
    interface IEngagementDomiciliation {
        montantEngagementDomiciliation: number;
        codeRespectEngtDomiciliation: string;
        dateDernierControleContrat: string;
        dateProchainControleContrat: string;
        periodiciteVersementEnMois: number;
    }
    interface IInformationsCDD {
        codeDevise: string;
        dateTransformationEnEuro: string;
        montantSoldeEnFrancs: number;
        soldeMinuteCompte: number;
        montantMoyen: number;
        montantSoldePlusBas: number;
        reversementAgios: string;
        codeParametrageDateValeur: string;
        dateDebutSuppressionDateValeur: string;
        typeOffre: string;
        dateDerniereOperation: string;
        montantSoldeReelEnFrancs: number;
        anneeDerniereDomiciliation: string;
        moisDerniereDomiciliation: string;
        montantDomiciliationDesRevenus: number;
        cumulReservesEncaissement: number;
        montantDecouvert: number;
        montantCumuleImpayePret: number;
        montantCumuleOperationEcartee: number;
        numeroOffre: number;
        indicateurHabilitationPredic: string;
        indicateurPertinencePredic: string;
        dateSituationPredic: string;
        codeCouleurMois: string;
        codeDerniereNoteMois: string;
        presenceFranchiseSeuil: string;
        soldeDebiteurAttenduDeviseOrig: number;
        codeEtatProduitService: string;
        dateOuvertureProduitService: string;
        dateAvenantProduitService: string;
        dateClotureProduitService: string;
        soldePlusHautParPeriode: number;
        codeAppliRemunerationCompte: string;
        dateDebutAppliRemuneration: string;
        tauxRemunerationCompteCDD: number;
        indicateurGestionContentieuse: string;
        indicateurCompteInactif: string;
        montantSoldeDisponibleCDD: number;
        indicateurRevenusReguliers: string;
        typeClotureCDD: string;
    }
    interface IOpposition {
        codeOpposition: string;
        libelleOpposition: string;
        libelleOppositionComplement: string;
        libelleInfoService1: string;
        libelleInfoService2: string;
        libelleInfoService3: string;
        dateDebutEffetOpposition: string;
        dateFinEffetOpposition: string;
        identifiantOpposition: number;
        indicateurOppositionCondition: string;
    }
    interface ICompensation {
        anneeCalcuAgiosRemunerationCDD: string;
        trimestreCalculAgiosRemun: string;
        agiosTrimestre: number;
        reversementAgiosTrimestre: number;
        remunTrimestrielleBruteCDD: number;
        montantPartRemunCDD1: number;
    }
    interface ICalculAgiosRemun {
        codeDeviseISO: string;
        montantReversementAgios: number;
        montantBrutRemunerationCDD: number;
        soldeNetCDD: number;
        montantTotalPrelevements: number;
        codeTypeCalculAgios: string;
        montantFranchiseAgiosSeuil: number;
        montantPlafondAgiosOffre: number;
        seuilAgios: number;
        montantForfaitaireAgios: number;
        montantAgiosImputes: number;
        montantAgiosCalcule: number;
        indicateurGestionContentieuse: string;
        indicateurFranchiseSeuil: string;
        montantFranchiseAgios: number;
        indicateurCompensationInterets: string;
        codeTypeUsageEntiteTitulaire: string;
        montantPartRemunCDDFiscalite: number;
        periodiciteCalculAgiosReversmt: string;
        periodiciteCalculRemunFisca: string;
        listeCompensations: Array<ICompensation>;
    }
    interface IDetailSolde {
        soldeBrut: number;
        montantAgiosNormaux: number;
        montantBrutRemunerationCDD: number;
        montantTotalPrelevements: number;
        soldeNetCDD: number;
        montantReversementAgios: number;
        montantPartRemunCDDFiscalite: number;
    }
    class DetailSolde implements IDetailSolde {
        soldeBrut: number;
        montantAgiosNormaux: number;
        montantBrutRemunerationCDD: number;
        montantTotalPrelevements: number;
        soldeNetCDD: number;
        montantReversementAgios: number;
        montantPartRemunCDDFiscalite: number;
        constructor(soldeBrut: number, montantAgiosNormaux: number, montantBrutRemunerationCDD: number, montantTotalPrelevements: number, soldeNetCDD: number, montantReversementAgios: number, montantPartRemunCDDFiscalite: number);
    }
    interface IContratCDDCloture {
        listeServices: Array<ServiceClotureContratCdd>;
        codeActionModeCloture: string;
        nomBeneficiaire: string;
        detailSolde: DetailSolde;
        referenceProduitService: string;
    }
    class ContratCDD implements IContratCDD {
        compteDeDepot: ICompteDeDepot;
        operationFinanciere: IOperationFinanciere;
    }
    class ContratCDDCloture extends ContratCDD implements IContratCDDCloture {
        listeServices: Array<ServiceClotureContratCdd>;
        codeActionModeCloture: string;
        nomBeneficiaire: string;
        detailSolde: DetailSolde;
        referenceProduitService: string;
        constructor(listeServices: any, codeActionModeCloture: string, nomBeneficiaire: string, detailSolde: DetailSolde, referenceProduitService: string);
    }
    interface IResultat {
        identifiantPersonne: number;
        codeTypeFamilleResultat: string;
        identifiantProduitService: number;
        codeNatureResultatCommercial: string;
        codeTypeResultatCommercial: string;
        codeTypeProduitService: string;
        indicRattachableCRE: string;
        codeTypeProduitServiceGCP: string;
        codeOrigineFonds: number;
        montantResultatCommercial: number;
        codeModeGestionLivret: string;
        sousCodeProduitService: string;
        codeProduitCarte: string;
        codeModeFinancier: string;
        codeCaractereForfaitaireOffre: string;
        indicProduitServiceObligatoire: string;
    }
    class Resultat implements IResultat {
        identifiantPersonne: number;
        codeTypeFamilleResultat: string;
        identifiantProduitService: number;
        codeNatureResultatCommercial: string;
        codeTypeResultatCommercial: string;
        codeTypeProduitService: string;
        indicRattachableCRE: string;
        codeTypeProduitServiceGCP: string;
        codeOrigineFonds: number;
        montantResultatCommercial: number;
        codeModeGestionLivret: string;
        sousCodeProduitService: string;
        codeProduitCarte: string;
        codeModeFinancier: string;
        codeCaractereForfaitaireOffre: string;
        indicProduitServiceObligatoire: string;
        constructor(identifiantPersonne: number, codeTypeProduitServiceGCP: string, codeTypeFamilleResultat: string, codeTypeResultatCommercial: string, codeNatureResultatCommercial: string, codeOrigineFonds: number, montantResultatCommercial: number, indicRattachableCRE: string, identifiantProduitService: number, codeTypeProduitService: string, codeModeGestionLivret: string, sousCodeProduitService: string, codeProduitCarte: string, codeModeFinancier: string, codeCaractereForfaitaireOffre: string, indicProduitServiceObligatoire: string);
    }
    interface ICompteDansAbonnement {
        referenceProduitService: string;
        numeroRangDuCompte: string;
        codeQualitePersonne: string;
        codeEtablissementBanque: string;
        codeGuichetInterbancaire: string;
    }
    interface IContratLibreServiceEcureuil {
        codeEtablissementBanque: string;
        identifiantPersonne: number;
        contratCarte: Array<IContratCarte>;
        compteAEnlever: ICompteAEnlever;
    }
    class ContratLibreServiceEcureuil implements IContratLibreServiceEcureuil {
        codeEtablissementBanque: string;
        identifiantPersonne: number;
        contratCarte: Array<IContratCarte>;
        compteAEnlever: ICompteAEnlever;
        constructor();
    }
    interface IContratCarte {
        identifiantSupportCarte: string;
        libelleCodeProduitCarte: string;
        codeEtablissementBanque: string;
        codeGuichetInterbancaire: string;
        numeroCompteSupportCarte: string;
        compteDansAbonnement: Array<ICompteDansAbonnement>;
        compteHorsAbonnement: Array<ICompteHorsAbonnement>;
        numeroContratCarte: number;
        codeQualiteAgentSupportCarte: string;
    }
    class ContratCarte implements IContratCarte {
        identifiantSupportCarte: string;
        libelleCodeProduitCarte: string;
        codeEtablissementBanque: string;
        codeGuichetInterbancaire: string;
        numeroCompteSupportCarte: string;
        compteDansAbonnement: Array<ICompteDansAbonnement>;
        compteHorsAbonnement: Array<ICompteHorsAbonnement>;
        numeroContratCarte: number;
        codeQualiteAgentSupportCarte: string;
    }
    interface ICompteHorsAbonnement {
        codeEtablissementBanque: string;
        codeGuichetInterbancaire: string;
        codeQualitePersonne: string;
        referenceProduitService: string;
    }
    class CompteHorsAbonnement implements ICompteHorsAbonnement {
        codeEtablissementBanque: string;
        codeGuichetInterbancaire: string;
        codeQualitePersonne: string;
        referenceProduitService: string;
    }
    interface ICompteAEnlever {
        codeGuichetInterbancaire: string;
        referenceProduitService: string;
        identifiantPremierePersonne: number;
    }
    class CompteAEnlever implements ICompteAEnlever {
        codeGuichetInterbancaire: string;
        referenceProduitService: string;
        identifiantPremierePersonne: number;
    }
    interface ICoffreFortNumerique {
        codeBanque: string;
        codeBanqueComptePrelevement: string;
        codeGuichetComptePrelevement: string;
        numeroComptePrelevement: string;
        identifiantProduitService: number;
        identifiantCoffreFortNumerique: string;
        dateSouscriptionCoffreFortNumerique: string;
        codeDevise: string;
        montantTarificationService: number;
        dateClotureCoffreFortNumerique: string;
        identifiantExterneCFNISAN: string;
    }
    /**
     * Données permettant de sauvegarder et restaurer les données du compte depot dans le dossier de vente à distance
     *
     */
    /**
     * Données permettant de sauvegarder et restaurer les données du compte depot dans le dossier de vente à distance
     *
     */
    interface IDonneesSauvegardeSecondaireCompteDepot extends GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService {
        donneesSauvegardeOpeFi: myway.comOpesFinancieres.Model.ChoixUtilisateurOpeFi;
        donneesProduitEngage?: myway.transProduitEngage.IInfoPartageTracab;
    }
    interface IOperationFinanciereModaleModele {
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        isHabiliteForcage: boolean;
    }
}

declare module myway.c0410.compteDeDepot {
    function noSpecialChar(): ng.IDirective;
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
        enregistrerCompteDeDepot(): void;
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
