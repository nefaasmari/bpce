
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
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerCompteDepot(numeroEntiteTitulaire: number, numeroOffreSouscrite: number, identifiantProduitService: number, donneesCompteDeDepot: DonneesCompteDeDepot, bordereau: number, forcage?: string): ng.IPromise<DonneesCompteDeDepot>;
        recupererCompteDepot(codeEtablissementCompteSource?: string, codeGuichetCompteSource?: string, numeroCompteCompteSource?: string): ng.IPromise<DonneesCompteDeDepot>;
        modifierCompteDepot(donneesCompteDepot: DonneesCompteDeDepot): ng.IPromise<DonneesCompteDeDepot>;
        getPrerequisOuvertureCDD(codeAction: string, codeEtablissement: string, numeroEntiteTitulaire: number, listePrerequisOuvertureCDD: IPrerequisOuvertureCDD[]): ng.IPromise<IPrerequisOuvertureCDD[]>;
        supprimerCompteDepot(numeroOffreSouscrite: number, identifiantProduitService: number, donneesCompteDepot: DonneesCompteDeDepot): ng.IPromise<void>;
    }
}

declare module myway.c0410.compteDeDepot {
    class CompteDepotControleur {
        private $scope;
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
        static $inject: string[];
        CODE_HABILITATION_OUVERTURE_AVENANT_CLOTURE: string;
        CODE_HABILITATION_MODIFICATION_LIBELLE_PERSONNALISE: string;
        CODE_HABILITATION_FORCAGE_OPERATION_FINANCIERE: string;
        CODE_HABILITATION_GESTION_REVERSEMENT_AGIO: string;
        CODE_HABILITATION_PROFILCOMPLET_PROFILREDUIS: string;
        CODE_ACTION_DONNEES_PERSONNE: string;
        CODE_ACTION_DONNEES_DOSSIER_COMMERCIAL: string;
        CODE_ACTION_DONNEES_DOSSIER_COMMERCIAL_ET_PERSONNE: string;
        NIVEAU_MESSAGE_ERREUR_BLOCANT: string;
        NIVEAU_MESSAGE_ERREUR_INFORMATIF: string;
        LIBELLE_FORCAGE_POPUP: string;
        CODE_LIBELLE_FORCAGE: string;
        private CODE_FORCAGE;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        idBloc: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        donneesCompte: DonneesCompte;
        compteDepotFormulaire: CompteDepotFormulaire;
        formulaireRecapAvenantCdd: CompteDepotFormulaire;
        donneesCompteDeDepot: DonneesCompteDeDepot;
        codeActeGestion: string;
        possedeHabilitation: boolean;
        isHabiliteCaseAgio: boolean;
        isHabiliteLibellePersonnalise: boolean;
        isHabiliteOuvertureAveantClotureCDD: boolean;
        isHabiliteProfilReduisProfilComplet: boolean;
        intitule: string;
        modeAffichage: string;
        modeChoisi: string;
        numeroCompteCodeGuichet: string;
        private identifiantFormulaire;
        estHabilite: boolean;
        private donneesMiseEnGestionCDD;
        private isEligibleSAG;
        private numeroBordereau;
        constructor($scope: ng.IScope, $q: ng.IQService, compteDepotService: CompteDepotService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, affectationRadicalService: myway.comInterdomaine.AffectationRadicalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, modalService: MyWay.UI.ModalService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, signatureElectroniqueService: myway.comEditiqueNumerisation.Services.SignatureElectroniqueService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService);
        lancerOuvertureCompteDepot(): void;
        private verifieHabilitationsEnOuverture();
        lancerAvenantCompteDepot(): void;
        private verifieHabilitationEnAvenant();
        reserverNumeroDeCompte(): void;
        isNumeroDeCompteReserve(): boolean;
        verifierPrerequis(enOuverture: boolean): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        getModeFinancierPourRecap(operationFinanciere: myway.comOpesFinancieres.Model.SegmentPRVRIO): string;
        private getCoupuresBillets(billeterie);
        validerderDonneesCompteDeDepot: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        supprimerDonneesCompteDeDepot(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        private enregistrerCompteDeDepot();
        private miseaJourDonneeCDDDepuisFormulaire();
        gererErreursPostCompteDepot(error: MyWay.Services.Erreur, listeMessageErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        private modifierCompteDeDepot();
        lancerPopupDeForcage(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        lancerPopupOperationFinanciere(messagesErreurs?: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        hasModifieChamps(nomChamps: string): boolean;
        private determinerMode(mode);
    }
}

declare module myway.c0410.compteDeDepot {
    function mwcdComptedepot(): ng.IDirective;
}

declare module myway.c0410.compteDeDepot {
    class CompteDepotFormulaire extends myway.c0410.commun.ObjetGenerique {
        intitule: string;
        reversementAgio: boolean;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        constructor(identifiantFormulaire: string, codeBanque?: string, codeGuichet?: string, numeroPersonne?: number);
        setDonneesCompteDeDepot(donneesCompteDepot: DonneesCompteDeDepot): void;
        metAJourFormulaire(donneesCompteDepot: DonneesCompteDeDepot): void;
        getInformationsChampsInvalidesFormulaire(): myway.c0410.commun.StatutChampsFormulaire[];
        private initialiserOperationFinanciere(codeBanque, codeGuichet, numeroPersonne);
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
