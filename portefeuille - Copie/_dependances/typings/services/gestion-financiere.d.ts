
declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    var module: ng.IModule;
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IBilletterieScope extends ng.IScope {
        viewModelBilletterieCtrl: IBilletterieController;
    }
    interface IBilletterieController {
        billet500: number;
        billet200: number;
        billet100: number;
        billet50: number;
        billet20: number;
        billet10: number;
        billet5: number;
        valeurBillet500: number;
        valeurBillet200: number;
        valeurBillet100: number;
        valeurBillet50: number;
        valeurBillet20: number;
        valeurBillet10: number;
        valeurBillet5: number;
        montantBilletterie: number;
        montantMonnaie: number;
        afficherBilletterie: boolean;
        afficherSyntheseBilletterie: boolean;
        afficherBoutonEffacerBilletterie: boolean;
    }
    class BilletterieController implements IBilletterieController {
        private $scope;
        static $inject: string[];
        billet500: number;
        billet200: number;
        billet100: number;
        billet50: number;
        billet20: number;
        billet10: number;
        billet5: number;
        valeurBillet500: number;
        valeurBillet200: number;
        valeurBillet100: number;
        valeurBillet50: number;
        valeurBillet20: number;
        valeurBillet10: number;
        valeurBillet5: number;
        montantBilletterie: number;
        montantMonnaie: number;
        differenceMontant: number;
        isNegatifDifference: boolean;
        afficherBilletterie: boolean;
        afficherSyntheseBilletterie: boolean;
        afficherBoutonEffacerBilletterie: boolean;
        montant: number;
        constructor($scope: IBilletterieScope);
        private effacerBilletterie();
        private sommeBilletterie();
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IChequeBanqueScope extends ng.IScope {
        viewModelChequeBanqueCtrl: IChequeBanqueController;
    }
    interface IChequeBanqueController {
        desactiverDernierCheque: boolean;
        choixCheque: string;
        dernierCheque: boolean;
        beneficiaireCheque: string;
        afficherMontantGlobal: boolean;
        numeroCheque: string;
    }
    class ChequeBanqueController implements IChequeBanqueController {
        private $scope;
        static $inject: string[];
        desactiverDernierCheque: boolean;
        choixCheque: string;
        dernierCheque: boolean;
        beneficiaireCheque: string;
        afficherMontantGlobal: boolean;
        numeroCheque: string;
        constructor($scope: IChequeBanqueScope);
        /**
         * @Returns a {void}.
         * @Alias affinerNumeroCheque.
         * @Param {numeroCheque: string}.
         * @Description Ajout du chiffre 0 devant le numero de cheque pour avoir un total de 7 chiffres.
         * @Return {void}.
         */
        affinerNumeroCheque(numeroCheque: string): void;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IInformationClientScope extends ng.IScope {
        viewModelInformationClientController: IInformationClientController;
    }
    interface IInformationClientController {
        listeClient: MyWay.UI.ImwTableOptions;
        listeParticipant: MyWay.Model.ParticipantInformationClient[];
        client: MyWay.Model.ParticipantInformationClient;
    }
    class InformationClientController implements IInformationClientController {
        private $scope;
        static $inject: string[];
        listeClient: MyWay.UI.ImwTableOptions;
        listeParticipant: MyWay.Model.ParticipantInformationClient[];
        participantSelectionne: Object[];
        client: MyWay.Model.ParticipantInformationClient;
        constructor($scope: IInformationClientScope);
        private initTableauClient(listeParticipant);
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IInformationsComplementairesScope extends ng.IScope {
        viewModelListeCompteCtrl: InformationsComplementairesController;
    }
    interface IInformationsComplementairesController {
        libelleOperation: MyWay.Model.LibelleOperation;
        dateValeur: string;
        referenceEnveloppe: MyWay.Model.ReferenceEnveloppe;
        estDesactive: boolean;
        dateValeurFormatee: string;
    }
    class InformationsComplementairesController implements IInformationsComplementairesController {
        private $scope;
        private operationFinanciereService;
        private serviceAgentExtended;
        static $inject: string[];
        libelleOperation: MyWay.Model.LibelleOperation;
        dateValeur: string;
        referenceEnveloppe: MyWay.Model.ReferenceEnveloppe;
        estDesactive: boolean;
        dateValeurFormatee: string;
        constructor($scope: IInformationsComplementairesScope, operationFinanciereService: OperationFinanciereService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.Model {
    class LibelleOperation {
        libelleCourt: string;
        libelleLong: string;
        constructor(libelleCourt: string, libelleLong: string);
    }
}

declare module MyWay.Model {
    class OperationFinanciere {
        client: Client;
        compte: Compte;
        rice: Rice;
        rice2: Rice;
        fonctionnalite: Fonctionnalite;
        montant: number;
        modeFinancier: ModeFinancier;
        codeOperation: string;
        libelleOperation: LibelleOperation;
    }
}

declare module MyWay.Model {
    class ReferenceEnveloppe {
        numeroReferenceEnveloppe: string;
        isCocher: boolean;
        constructor(isCocher: boolean, numeroReferenceEnveloppe: string);
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IOperationDiverseScope extends ng.IScope {
        viewModelOperationDiverseCtrl: IOperationDiverseController;
    }
    interface IOperationDiverseController {
        openPopupOperationDiverse(): void;
        listeOperationDiverse: MyWay.Model.OperationDiverse;
    }
    class OperationDiverseController implements IOperationDiverseController {
        private $scope;
        private modalService;
        private operationDiverseService;
        static $inject: string[];
        listeOperationDiverse: MyWay.Model.OperationDiverse;
        codeInterneRattachementGuichetComptable: string;
        typeRattachementGuichetComptable: string;
        codeGuichetInterbancaire: string;
        montant: number;
        fonctionnalite: string;
        codeFonctionnalite: string;
        devise: string;
        voirContenuPanel: boolean;
        panelOuvert: boolean;
        panelFermer: boolean;
        listeTypeOperationDiverse: MyWay.Model.TypeOperationDiverse[];
        listeRegroupement: MyWay.Model.RegroupementOperationDiverse[];
        listeFamilleParRegroupement: MyWay.Model.FamilleOperationDiverse[];
        listeFamilleParEds: MyWay.Model.FamilleOperationDiverse[];
        listeFamilleParSens: MyWay.Model.FamilleOperationDiverse[];
        constructor($scope: IOperationDiverseScope, modalService: MyWay.UI.IModalService, operationDiverseService: OperationDiverseService);
        private ouvrirPanel();
        private initialisationTableauFamilles();
        openPopupOperationDiverse(): void;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class OperationDiverseService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private listeCodeRegroupementUCGWRT;
        private listeCodeRegroupementYNOXCE;
        typeRattachement: string;
        montant: number;
        devise: string;
        codeFonctionnalite: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @Alias getAllFamilles.
         * @Params {fonctionnalite : string}
         * @Description Récupère la liste de toute les familles via les donnees delocalisees.
         * @Return {ng.IPromise<MyWay.Model.FamilleOperationDiverse[]>}.
         */
        getAllFamilles(fonctionnalite: string): ng.IPromise<MyWay.Model.FamilleOperationDiverse[]>;
        /**
         * @Alias getTypesParEds.
         * @Params {listeType : MyWay.Model.TypeOperationDiverse[]}
         * @Description Récupère la liste des types filtres par EDS.
         * @Return {ng.IPromise<MyWay.Model.TypeOperationDiverse[]>}.
         */
        getTypesParEds(listeType: MyWay.Model.TypeOperationDiverse[]): MyWay.Model.TypeOperationDiverse[];
        /**
         * @Alias getAllTypesParFamilleSelectionne.
         * @Params {familleSelectionne : string, codeGuichet: string}
         * @Description Récupère la liste des types pour la famille sélectionné.
         * @Return listeTypeFiltreParFamile.
         */
        getAllTypesParFamilleSelectionne(familleSelectionne: string, codeGuichet: string): ng.IPromise<MyWay.Model.TypeOperationDiverse[]>;
        /**
         * @Alias getAllCodeRegroupement.
         * @Params {codeInterneRattachementEds: string, codeGuichetInterbancaire: string}
         * @Description Récupère la liste de tous les codes de regroupement.
         * @Return listeRegroupementFiltre.
         */
        getAllCodeRegroupement(codeInterneRattachementEds: string, codeGuichetInterbancaire: string): ng.IPromise<MyWay.Model.RegroupementOperationDiverse[]>;
        /**
         * @Alias getParametresComptables.
         * @Description Récupère les parametres comptables a partir du fichier sur le poste.
         * @Return {ng.IPromise<any>}.
         */
        getParametresComptables(): ng.IPromise<any>;
        /**
         * @Alias getMontant.
         * @Description Récupère le montant du context.
         * @Return {ng.IPromise<number>}.
         */
        getMontant(): ng.IPromise<number>;
        /**
         * @Alias getDevise.
         * @Description Récupère la devise du context.
         * @Return {ng.IPromise<string>}.
         */
        getDevise(): ng.IPromise<string>;
        /**
         * @Alias getFamillesParRegroupement
         * @Description Récupère la liste des familles triés par regroupement.
         * @Params {listeFamille: MyWay.Model.FamilleOperationDiverse[]}
         * @Return listeFamilleFiltreRegroupement
         */
        getFamillesParRegroupement(listeFamille: MyWay.Model.FamilleOperationDiverse[]): MyWay.Model.FamilleOperationDiverse[];
        /**
         * @Alias getFamillesParEds
         * @Description Récupère la liste des familles triés par EDS.
         * @Params {listeFamille: MyWay.Model.FamilleOperationDiverse[]}
         * @Return listeFamilleFiltreRegroupement
         */
        getFamillesParEds(listeFamille: MyWay.Model.FamilleOperationDiverse[], typeRattachementGuichetComptable: string): MyWay.Model.FamilleOperationDiverse[];
        /**
         * @Alias getTypesParSens
         * @Description Récupère la liste des types triés par sens.
         * @Params {listeTypes: MyWay.Model.TypeOperationDiverse[]}
         * @Return listeTypeParSens
         */
        getTypesParSens(listeTypes: MyWay.Model.TypeOperationDiverse[]): MyWay.Model.TypeOperationDiverse[];
        /**
         * @Alias getTypesParDateComptableEtCodesInterdits
         * @Description Récupère la liste des types triés par date comptable et par codes interdits.
         * @Params {listeTypes: MyWay.Model.TypeOperationDiverse[]}
         * @Return listeTypesParDate
         */
        getTypesParDateComptableEtCodesInterdits(listeTypes: MyWay.Model.TypeOperationDiverse[], dateJourneeComptable: string): MyWay.Model.TypeOperationDiverse[];
        /**
         * @Alias getTypesPourAffichage
         * @Description Récupère la liste des types triés pour l'affichage en remplaçant les R par remboursement et V par versement.
         * @Params {listeTypes: MyWay.Model.TypeOperationDiverse[]}
         * @Return listeTypesPourAffichage
         */
        getTypesPourAffichage(listeTypes: MyWay.Model.TypeOperationDiverse[]): MyWay.Model.TypeOperationDiverse[];
        /**
         * @Alias getTypesFiltre
         * @Description Récupère la liste des types triés par code de transaction et devise.
         * @Params {listeTypes: MyWay.Model.TypeOperationDiverse[]}
         * @Return listeTypesFiltre
         */
        getTypesFiltre(listeTypes: MyWay.Model.TypeOperationDiverse[]): MyWay.Model.TypeOperationDiverse[];
        /**
         * @Alias getFamilleParSens
         * @Description Récupère la liste des familles triés par sens.
         * @Params {listeFamille: MyWay.Model.FamilleOperationDiverse[], montant: number}
         * @Return listeFamilleFiltreSens
         */
        getFamilleParSens(listeFamille: MyWay.Model.FamilleOperationDiverse[], montant: number): MyWay.Model.FamilleOperationDiverse[];
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IOperationDiverse2Scope extends ng.IScope {
        viewModelOperationDiverse2Ctrl: IOperationDiverse2Controller;
    }
    interface IOperationDiverse2Controller {
        listeOperationDiverse: MyWay.Model.OperationDiverse;
        listeFamille: MyWay.UI.ImwTableOptions;
        listeType: MyWay.UI.ImwTableOptions;
        dateOperationJourneeComptable: string;
        isDesactiver: boolean;
        isAfficherLibelle: boolean;
        isAfficherLibelleUlip06: boolean;
        isAfficherLibelleUlip08: boolean;
        texteLibelleUlip06: string;
        texteLibelleUlip07: string;
        texteLibelleUlip08: string;
        libelleUlip08: string;
        libelleUlip06: string;
        libelleUlip07: string;
        messageErreurSaisieNumeroCommande: string;
        messageErreurSaisieObligatoire: string;
        isAfficherMessageNumeroCommande: boolean;
        isAfficherMessageSaisieObligatoireUlip06: boolean;
        isAfficherMessageSaisieObligatoireUlip07: boolean;
    }
    class OperationDiverse2Controller implements IOperationDiverse2Controller {
        private $scope;
        private operationDiverseService;
        static $inject: string[];
        listeOperationDiverse: MyWay.Model.OperationDiverse;
        codeInterneRattachementGuichetComptable: string;
        typeRattachementGuichetComptable: string;
        codeGuichetInterbancaire: string;
        montant: number;
        fonctionnalite: string;
        codeFonctionnalite: string;
        devise: string;
        voirContenuPanel: boolean;
        panelOuvert: boolean;
        panelFermer: boolean;
        listeTypeOperationDiverse: MyWay.Model.TypeOperationDiverse[];
        listeRegroupement: MyWay.Model.RegroupementOperationDiverse[];
        listeFamilleParRegroupement: MyWay.Model.FamilleOperationDiverse[];
        listeFamilleParEds: MyWay.Model.FamilleOperationDiverse[];
        listeFamilleParSens: MyWay.Model.FamilleOperationDiverse[];
        dateOperationJourneeComptable: string;
        listeFamille: MyWay.UI.ImwTableOptions;
        familleSelectionne: Object[];
        listeType: MyWay.UI.ImwTableOptions;
        typeSelectionne: Object[];
        isAfficherLibelle: boolean;
        isAfficherLibelleUlip06: boolean;
        isAfficherLibelleUlip08: boolean;
        texteLibelleUlip06: string;
        texteLibelleUlip07: string;
        texteLibelleUlip08: string;
        libelleUlip08: string;
        libelleUlip06: string;
        libelleUlip07: string;
        messageErreurSaisieNumeroCommande: string;
        messageErreurSaisieObligatoire: string;
        isAfficherMessageNumeroCommande: boolean;
        isAfficherMessageSaisieObligatoireUlip06: boolean;
        isAfficherMessageSaisieObligatoireUlip07: boolean;
        codeFamille: string;
        libelleFamile: string;
        codeType: string;
        libelleType: string;
        identificationRequete: string;
        indicateurZoneTiers: string;
        indicateurZoneObjet: string;
        isDesactiver: boolean;
        constructor($scope: IOperationDiverse2Scope, operationDiverseService: OperationDiverseService);
        private initialisationFamilles();
        private initTableauFamille(listeFamilles);
        private initTableauType(listeTypesParFamille);
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class SaisirReferenceEnveloppeControleur {
        private $scope;
        private $q;
        private saisieReferenceEnveloppeService;
        static $inject: string[];
        referenceEnveloppe: MyWay.Model.ReferenceEnveloppe;
        setFocus: boolean;
        modeFinancier: string;
        habilitation: string;
        isVisible: boolean;
        isNumeroEnveloppeVisible: boolean;
        isDesactiverCochage: boolean;
        isAfficherMessage: boolean;
        texteMessageConfirmation: string;
        isHabilitationSHJE07: boolean;
        isHabilitationSHJE06: boolean;
        isHabilitationSHJE05: boolean;
        habilitationTest: string;
        static MAX_NOMBRE: number;
        constructor($scope: ng.IScope, $q: ng.IQService, saisieReferenceEnveloppeService: SaisieReferenceEnveloppeService);
        /**
         * @Alias recuperationHabilitation
         * @Description Permet de récupérer les habilitations via le service agent.
         */
        recuperationHabilitation(): void;
        /**
         * @Returns a {boolean}.
         * @Alias afficherOuNon.
         * @Params {modeFinancier : string}
         * @Description Afficher ou non le composant ReferenceEnveloppe en fonction du mode financier sélectionné et de l'habilitation.
         * @Return {afficherReference}.
         */
        afficherOuNonReference(modeFinancier: string): boolean;
        /**
         * @Returns a {void}.
         * @Alias affinerNumeroEnveloppe.
         * @Param {numeroReferenceEnveloppe: string}.
         * @Description Ajout du chiffre 0 devant la reference enveloppe pour avoir un total de 10 chiffres.
         * @Return {void}.
         */
        affinerNumeroEnveloppe(numeroReferenceEnveloppe: string): void;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class SaisieReferenceEnveloppeService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        estHabilite(): ng.IPromise<boolean[]>;
        estHabiliteSHJE07(): ng.IPromise<boolean>;
        estHabiliteSHJE06(): ng.IPromise<boolean>;
        estHabiliteSHJE05(): ng.IPromise<boolean>;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class MwgfSaisirOperationFinanciereController {
        private $scope;
        private $attrs;
        private operationFinanciereService;
        private serviceAgentExtended;
        private saisieOperationFinanciereService;
        operation: MyWay.Model.OperationFinanciere;
        montantMin: number;
        montantMax: number;
        montantMessages: MyWay.SocleFonctionnel.IMwsfSaisieMontantMessages;
        majeur: boolean;
        modeVente: string;
        canal: string;
        afficherTypeCheque: boolean;
        reserveEncaissement: MyWay.Model.ReserveEncaissement;
        afficherVirementInterne: boolean;
        rice: MyWay.Model.Rice;
        listeCompte: MyWay.Model.Compte[];
        afficherBoutonOperationDiverses: boolean;
        afficherReferenceIdentite: boolean;
        isAfficherBilletterie: boolean;
        texteBoutonBilletterie: string;
        afficherBoutonBilletterie: boolean;
        afficherChequeBanque: boolean;
        montantBilletterie: number;
        cocherVrac: boolean;
        operationVersement: MyWay.Model.OperationFinanciere;
        referenceEnveloppe: MyWay.Model.ReferenceEnveloppe;
        dateValeur: string;
        segment: MyWay.Model.SegmentPRVRIO;
        private identifiantProcessus;
        static $inject: string[];
        private checkInputData();
        private afficherBilletterie();
        constructor($scope: ng.IScope, $attrs: ng.IAttributes, operationFinanciereService: OperationFinanciereService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, saisieOperationFinanciereService: SaisieOperationFinanciereService);
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class MwgfSaisirOperationFinanciereModalController {
        private $modalInstance;
        private operation;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, operation: MyWay.Model.OperationFinanciere);
        annuler(): void;
        valider(): void;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class SaisieOperationFinanciereService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        initOperationVersement(): MyWay.Model.OperationFinanciere;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class OperationFinanciereService {
        private $q;
        private modalService;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.ModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        appeller(operation: MyWay.Model.OperationFinanciere): ng.IPromise<MyWay.Model.OperationFinanciere>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'ouverture d'un compte CDD ou bien d'un compte d'attente
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioOuvertureCompte(operationFinanciere: MyWay.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<MyWay.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'ouverture d'un livret
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioOuvertureLivret(operationFinanciere: MyWay.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<MyWay.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à la cloture d'un compte
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         * @param {estContentieux} indique s'il y a un contentieux
         */
        initSegmentPrvRioClotureCompte(operationFinanciere: MyWay.Model.OperationFinanciere, estModeDivers: boolean, estContentieux: boolean): ng.IPromise<MyWay.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à la cloture d'un livret
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         * @param {estContentieux} indique s'il y a un contentieux
         */
        initSegmentPrvRioClotureLivret(operationFinanciere: MyWay.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<MyWay.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'annulation de l'ouveture d'un compte, ou bien de la cloture d'un compte
         * Pré-requis : le composant opération financière doit être bien intialisé avec les bonnes valeurs récupérés de l'écran
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioAnnulation(operationFinanciere: MyWay.Model.OperationFinanciere, estModeDivers: boolean, estContentieux: boolean, estCloture: boolean): ng.IPromise<MyWay.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'annulation de l'ouveture d'un livret
         * Pré-requis : le composant opération financière doit être bien intialisé avec les bonnes valeurs récupérés de l'écran
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioAnnulationOuvertureLivret(operationFinanciere: MyWay.Model.OperationFinanciere, estModeDivers: boolean, estCloture: boolean): ng.IPromise<MyWay.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'annulation de la clôture d'un livret
         * Pré-requis : le composant opération financière doit être bien intialisé avec les bonnes valeurs récupérés de l'écran
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioAnnulationClotureLivret(operationFinanciere: MyWay.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<MyWay.Model.SegmentPRVRIO>;
        /**
         * Permet d'initialiser le segment prvrio au chargement de l'écran versement / remboursement
         */
        initSegmentPrvRioVersement(operationFinanciere: MyWay.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<MyWay.Model.SegmentPRVRIO>;
        /**
         * Méthode permettant d'obtenir le libellé de l'opération financière
         */
        getLibelleOperationFinanciere(codeEtablissement: string, codeOperation: string, segmentPrvRio: MyWay.Model.SegmentPRVRIO): ng.IPromise<MyWay.Model.LibelleOperation>;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class ProduitService {
        private $q;
        private $timeout;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService);
        getProduits(): ng.IPromise<MyWay.Model.Produit[]>;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IListeCompteScope extends ng.IScope {
        viewModelListeCompteCtrl: IListeCompteController;
    }
    interface IListeCompteController {
        listeCompte: MyWay.Model.Compte[];
        comptePrincipal: MyWay.Model.Compte;
        compteSelectionne: Object;
        listeCompteFormate: Object[];
    }
    class ListeCompteController implements IListeCompteController {
        private $scope;
        private virementInterneService;
        static $inject: string[];
        listeCompte: MyWay.Model.Compte[];
        comptePrincipal: MyWay.Model.Compte;
        compteSelectionne: Object;
        listeCompteFormate: Object[];
        codeTransaction: string;
        constructor($scope: IListeCompteScope, virementInterneService: VirementInterneService);
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IVirementInterneScope extends ng.IScope {
        viewModelVirementInterneCtrl: IVirementInterneController;
    }
    interface IVirementInterneController {
        rice: MyWay.Model.Rice;
        comptePrincipal: MyWay.Model.Compte;
        listeCompte: MyWay.Model.Compte[];
        openPopupChoixDesComptes(): void;
    }
    class VirementInterneController implements IVirementInterneController {
        private $scope;
        private modalService;
        private virementInterneService;
        static $inject: string[];
        rice: MyWay.Model.Rice;
        comptePrincipal: MyWay.Model.Compte;
        listeCompte: MyWay.Model.Compte[];
        popupChoixDesComptes: Object;
        compteChoisi: Object;
        codeTransaction: string;
        constructor($scope: IVirementInterneScope, modalService: MyWay.UI.IModalService, virementInterneService: VirementInterneService);
        openPopupChoixDesComptes(): void;
        private initDataTableau(listeCompte);
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    class VirementInterneService {
        private $q;
        private $timeout;
        private serviceAgentExtended;
        static $inject: string[];
        private listeCodeProduit;
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Filtre les comptes pour ne renvoyer que ceux éligibles au virement
         * @param listeCompte Liste des comptes du client
         */
        getComptesEligibleAuVirement(listeCompte: MyWay.Model.Compte[], codeTransaction: string): MyWay.Model.Compte[];
        /**
         * Formate le libelle des comptes que l'on peut choisir dans une liste deroulante
         * @param listeCompte la liste des comptes à formater
         */
        getListeCompteFormatesPourListeDeroulante(listeCompte: MyWay.Model.Compte[]): Object[];
        getListeCompteDuClient(compte: MyWay.Model.Compte): MyWay.Model.Compte[];
        mockListeCompteDuClient(): MyWay.Model.Compte[];
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IModalOperationDiverseScope extends ng.IScope {
        viewModelModalOperationDiverseCtrl: IModalOperationDiverseController;
    }
    interface IModalOperationDiverseController {
        modalDatas: any;
        ok(): void;
        close(): void;
        openPopupValidationOperationDiverse(): void;
        listeFamille: MyWay.UI.ImwTableOptions;
        listeType: MyWay.UI.ImwTableOptions;
        dateOperationJourneeComptable: string;
        isDesactiver: boolean;
        isAfficherLibelle: boolean;
        isAfficherLibelleUlip06: boolean;
        isAfficherLibelleUlip08: boolean;
        texteLibelleUlip06: string;
        texteLibelleUlip07: string;
        texteLibelleUlip08: string;
        libelleUlip08: string;
        libelleUlip06: string;
        libelleUlip07: string;
        messageErreurSaisieNumeroCommande: string;
        messageErreurSaisieObligatoire: string;
        isAfficherMessageNumeroCommande: boolean;
        isAfficherMessageSaisieObligatoireUlip06: boolean;
        isAfficherMessageSaisieObligatoireUlip07: boolean;
    }
    class ModalOperationDiverseController implements IModalOperationDiverseController {
        private $scope;
        private $modalInstance;
        private modalService;
        private operationDiverseService;
        static $inject: string[];
        modalDatas: any;
        dateOperationJourneeComptable: string;
        listeFamille: MyWay.UI.ImwTableOptions;
        familleSelectionne: Object[];
        listeType: MyWay.UI.ImwTableOptions;
        typeSelectionne: Object[];
        isAfficherLibelle: boolean;
        isAfficherLibelleUlip06: boolean;
        isAfficherLibelleUlip08: boolean;
        texteLibelleUlip06: string;
        texteLibelleUlip07: string;
        texteLibelleUlip08: string;
        libelleUlip08: string;
        libelleUlip06: string;
        libelleUlip07: string;
        messageErreurSaisieNumeroCommande: string;
        messageErreurSaisieObligatoire: string;
        isAfficherMessageNumeroCommande: boolean;
        isAfficherMessageSaisieObligatoireUlip06: boolean;
        isAfficherMessageSaisieObligatoireUlip07: boolean;
        codeFamille: string;
        libelleFamile: string;
        codeType: string;
        libelleType: string;
        identificationRequete: string;
        indicateurZoneTiers: string;
        indicateurZoneObjet: string;
        isDesactiver: boolean;
        constructor($scope: IModalOperationDiverseScope, $modalInstance: any, modalService: MyWay.UI.IModalService, data: any, $modal: any, operationDiverseService: OperationDiverseService);
        ok(): void;
        close(): void;
        private initTableauFamille(data);
        openPopupValidationOperationDiverse(): void;
        private initTableauType(listeTypesParFamille);
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IModalValidationOperationDiverseScope extends ng.IScope {
        viewModelModalValidationOperationDiverseCtrl: IModalValidationOperationDiverseController;
    }
    interface IModalValidationOperationDiverseController {
        modalDatas: any;
        ok(): void;
        close(): void;
        isDesactiver: boolean;
        montant: number;
        devise: string;
    }
    class ModalValidationOperationDiverseController implements IModalValidationOperationDiverseController {
        private $scope;
        private $modalInstance;
        private modalService;
        private operationDiverseService;
        static $inject: string[];
        modalDatas: any;
        isDesactiver: boolean;
        montant: number;
        devise: string;
        constructor($scope: IModalValidationOperationDiverseScope, $modalInstance: any, modalService: MyWay.UI.IModalService, data: any, $modal: any, operationDiverseService: OperationDiverseService);
        ok(): void;
        close(): void;
    }
}

declare module MyWay.JCP.GestionFinanciere.ServicesCommuns {
    interface IModalGestionCompteScope extends ng.IScope {
        viewModelModalGestionCompteCtrl: IModalGestionCompteController;
    }
    interface IModalGestionCompteController {
        modalDatas: any;
        listeDesComptes: MyWay.UI.ImwTableOptions;
        compteSelectionne: Object[];
        ok(result: any): void;
        close(): void;
    }
    class ModalGestionCompteController implements IModalGestionCompteController {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        listeDesComptes: MyWay.UI.ImwTableOptions;
        compteSelectionne: Object[];
        constructor($scope: IModalGestionCompteScope, $modalInstance: any, data: any, $modal: any);
        ok(compte: any): void;
        close(): void;
        private initTableau(data, compteSelectionne);
    }
}
