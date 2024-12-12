
declare module myway.comOpesFinancieres {
    var module: ng.IModule;
}

declare module myway.comOpesFinancieres {
    class AccreditifController {
        private $scope;
        static $inject: string[];
        /** Indique si la case à cocher accréditif est coché. */
        accreditifCoche: boolean;
        constructor($scope: ng.IScope);
    }
}

declare module myway.comOpesFinancieres {
    function mwsfAccreditif(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class BilletterieController {
        private $scope;
        static $inject: string[];
        coupure: MyWay.Model.Coupure;
        valeurBillet500: number;
        valeurBillet200: number;
        valeurBillet100: number;
        valeurBillet50: number;
        valeurBillet20: number;
        valeurBillet10: number;
        valeurBillet5: number;
        valeurMonnaie: number;
        montantBilletterie: number;
        montantMonnaie: number;
        differenceMontant: number;
        texteDifferenceMontant: string;
        isNegatifDifference: boolean;
        isDifference: boolean;
        afficherBilletterie: boolean;
        afficherSyntheseBilletterie: boolean;
        afficherBoutonEffacerBilletterie: boolean;
        static MONTANT_MAX_VALEUR_BILLET_MONNAIE: number;
        static VALEUR_A_ZERO_BILLETTERIE: number;
        maxValeurBilletMonnaie: number;
        montant: number;
        forcePositiveMontant: boolean;
        estOuvertParDefaut: boolean;
        constructor($scope: ng.IScope);
        /**
         * Indique si on est sortit d'un des champs des billets.
         * Permet de remettre à 0 la valeur du billet si rien n'est saisit
         * @param {number} valeurBillet La valeur du billet
         * @param {number} nombreBillet Indique le billet concerné
         */
        sortirFocusBillet(valeurBillet: number, nombreBillet: number): void;
        /**
         * Indique si on est entrer dans le focus du champ de monnaie
         * Permet de le mettre à null s'il vaut 0
         * @param {number} montant de la monnaie
         */
        verifierFocusMonnaie(montantMonnaie: number): void;
        /**
         * Indique si on est sortit du focus de la monnaie
         * Permet de le remettre à 0 si rien n'est saisit
         * @param {number} Montant de la monnaie
         */
        sortirFocusMonnaie(montantMonnaie: number): void;
        /**
         * Indique si on est entrer dans le focus d'un des champs des billets.
         * Permet de mettre à null la valeur du billet si il est de 0.
         * @param {number} valeurBillet La valeur du billet
         * @param {number} nombreBillet Indique le billet concerné
         */
        verifierFocusBillet(valeurBillet: number, nombreBillet: number): void;
        afficherLaBilletterie(afficher: boolean): boolean;
        changerValeurBillet(valeurBillet: number, nombreBillet: number): void;
        changerValeurMonnaie(nombreMonnaie: number): void;
        private evalutationBoutonBilletterie();
        private effacerBilletterie();
        private sommeBilletterie();
    }
}

declare module myway.comOpesFinancieres {
    function mwsfBilletterie(): ng.IDirective;
}

declare module myway.comOpesFinancieres.CarteTMF {
    /**
     * Interface répartition de proposition pour algorithme de distribution
     */
    interface IRepartitionProposition {
        numeroGab: string;
        etatGab: string;
        montant: number;
        coupure: Array<number>;
        reste: Array<number>;
        ventilation: Array<number>;
        statutVentilation: number;
    }
}

declare module myway.comOpesFinancieres.CarteTMF {
    class AlgorithmeDistributionService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         * @param serviceAgentExtended {ServiceAgentExtended}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Algorithme de distribution : récupération de la ventilation proposée
         * @param repProp {IRepartitionProposition} objet contenant le montant à retirer, la valeur des coupures et le nombre de billets
         *   restant de chaque cassette, alimenté en sortie par la ventilation en billets proposée
         */
        calcProposition(repProp: IRepartitionProposition): void;
        /**
         * Algorithme de distribution : fonction distrib
         */
        private distrib(montant, coupure, reste, ventilationPossible);
        /**
         * Algorithme de distribution : fonction repartit
         */
        private repartit(montant, coupure, reste, ventilationPossible, nb);
    }
}

declare module myway.comOpesFinancieres.CarteTMF {
    enum ModeTMF {
        DEPOT_TMF = 0,
        RETRAIT_TMF = 1,
        RETRAIT_OAD_TMF = 2,
    }
    class CarteTempoMultiFonctionsService {
        private $q;
        private serviceAgentExtended;
        private gabEncaisseGabService;
        private structureserviceInfoAgenceCarteTmfService;
        private opecartetmfparametreHoraireEdsDateTmfService;
        private opecartetmfCompteEligibleTmfService;
        private opecartetmfAutorisationOpeTmfService;
        private opecartetmfOperationCarteTmfService;
        private opecartetmfparametrePlafondRetraitService;
        private opecartetmfparametrePlafondOpeAgenceService;
        private mwNotificationService;
        private modalService;
        private algorithmeDistributionService;
        HABILITATION_DEPOT_RETRAIT_TMF: string;
        HABILITATION_RETRAIT_OAD_TMF: string;
        FORMAT_DATE: string;
        FORMAT_TIME: string;
        RETRAIT_KO_HORS_HEURES_OUVERTURE: string;
        DEPOT_KO_HORS_HEURES_OUVERTURE: string;
        PRODUITS_AUTORISES_OAD: string[];
        private isDepotRetraitAutorise;
        private listeEncaisseGab;
        private compteEligibleTmf;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gabEncaisseGabService: GabEncaisseGabService, structureserviceInfoAgenceCarteTmfService: StructureserviceInfoAgenceCarteTmfService, opecartetmfparametreHoraireEdsDateTmfService: OpecartetmfparametreHoraireEdsDateTmfService, opecartetmfCompteEligibleTmfService: OpecartetmfCompteEligibleTmfService, opecartetmfAutorisationOpeTmfService: OpecartetmfAutorisationOpeTmfService, opecartetmfOperationCarteTmfService: OpecartetmfOperationCarteTmfService, opecartetmfparametrePlafondRetraitService: OpecartetmfparametrePlafondRetraitService, opecartetmfparametrePlafondOpeAgenceService: OpecartetmfparametrePlafondOpeAgenceService, mwNotificationService: MyWay.UI.MwNotificationService, modalService: MyWay.UI.IModalService, algorithmeDistributionService: AlgorithmeDistributionService);
        /**
         * Retourne si le dépot/retrait TMF est autorisé ou non
         */
        isDepotRetraitTMFAutorise(): boolean;
        isRetraitOADTMFOpposition(): boolean;
        forceRetraitOADTMF(): boolean;
        /**
         * Initialisation du service Carte TMF :
         * - Récupération des habilitations TMF de l'agent
         * - Récupération des autorisations TMF de l'agence et du compte
         * - Récupération des horaires d'ouverture de l'agence
         */
        initCarteTMFService(mode: ModeTMF, rice: MyWay.Model.Rice, numeroPersonne?: number): ng.IPromise<void>;
        private isAgentHabiliteDepotRetraitTMF(mode);
        private isEncaisseGABRepertoriee();
        private isDepotTMFAutoriseDansAgence();
        private isCompteAutoriseTMF(rice, isOAD, numeroPersonne?);
        private isAgenceOuverteTMF();
        /**
         * Valide l'opération de dépôt TMF
         * @param operationFinanciere {OperationFinanciere} l'opération financière de dépôt TMF à valider
         * @return {IPromise<ICarteTmf>} promesse contenant la confirmation de création de carte TMF, ou null si non confirmée
         */
        validerDepotTMF(operationFinanciere: Model.OperationFinanciere): ng.IPromise<ICarteTmf>;
        /**
         * Valide l'opération de retrait TMF
         * @param operationFinanciere {OperationFinanciere} l'opération financière de retrait TMF à valider
         * @param estOAD {boolean} true si opération à distance, false sinon (valeur par défaut)
         * @return {IPromise<ICarteTmf>} promesse contenant la confirmation de création de carte TMF, ou null si non confirmée
         */
        validerRetraitTMF(operationFinanciere: Model.OperationFinanciere, estOAD?: boolean): ng.IPromise<ICarteTmf>;
        /**
         * En cas de dépassement d'un plafond de retrait, demander le forçage ou la confirmation de l'opération
         *   ou afficher un message d'erreur
         * @param estAForcerOuAConfirmer {boolean} true s'il faut demander le forçage ou la confirmation de l'opération,
         *   false s'il faut afficher un message d'erreur
         * @param entete {string} entête des popins
         * @param texteBoutonAction {string} texte du bouton action
         * @param texteBoutonFermer {string} texte du bouton fermer
         * @param messageConfirmation {string} texte du message de confirmation
         * @param messageErreur {string} texte du message d'erreur
         * @return {IPromise<void>} promesse vide validant le forçage ou la confirmation de l'opération
         */
        private forcerOuConfirmerPlafondDepasseCarteTMF(estAForcerOuAConfirmer, entete, texteBoutonAction, texteBoutonFermer, messageConfirmation, messageErreur);
        /**
         * Générer la liste des messages d'alerte pour chaque GAB
         * @param listeRepartitionProposition {IRepartitionProposition[]} liste des répartitions de proposition par GAB
         * @return {string[]} liste des messages d'alerte pour chaque GAB
         */
        private genererListeMessageAlerteGab(listeRepartitionProposition);
    }
}

/**
 * Ressource : /gab/v1/encaisseGab
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/gab/encaisseGab
 * Fichier généré le : 2017-09-12
 */
declare module myway.comOpesFinancieres.CarteTMF {
    interface IEncaisseGabDetail {
        codeCaisse: string;
        identifiantEds: string;
        identifiantNumeroNational: string;
        soldeEncaisseGab: number;
        listesCassettesGab: Array<ICassetteGab>;
        etatGab: string;
    }
    interface ICassetteGab {
        numeroCassette: number;
        nombreBilletsRestants: number;
        nombreBilletsPurges: number;
        nombreBilletsDistribues: number;
        etatCassette: string;
        montantCoupureCassette: number;
        deviseCassette: string;
    }
}

/**
 * Ressource : /gab/v1/encaisseGab
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/gab/encaisseGab
 * Fichier généré le : 2017-09-12
 */
declare module myway.comOpesFinancieres.CarteTMF {
    class GabEncaisseGabService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getEncaisseGab(codeAgent: string, codeCaisse: string, identifiantEds: string, referenceExterneAgent: string): ng.IPromise<IEncaisseGabDetail[]>;
    }
}

/**
 * Ressource : /opecartetmf/v1/autorisationOpeTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmf/autorisationOpeTmf
 * Fichier généré le : 2017-10-02
 */
declare module myway.comOpesFinancieres.CarteTMF {
    interface IAutorisationCompteOperationTmf {
        /**
         * Code Etab Banque Entité Juridique.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeCaisse: string;
        /**
         * Code Guichet Interbancaire
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Numéro d'identification d'un compte
         */
        numeroCompte: string;
        /**
         * Clé du RIB ou RICE modulo 97 du compte
         */
        cleRib: string;
        /**
         * Montant de l'opération
         */
        montantOperation: number;
        /**
         * Type d'opération
         * R - Retrait
         * D - Depot
         */
        typeOperation: string;
        /**
         * Code motif rejet (opposition)
         */
        codeMotifRejet: string;
        /**
         * Libellé motif rejet (opposition)
         */
        libelleMotifRejet: string;
        /**
         * Indique si l'opération est autorisée ou non
         */
        indicateurAutorisationOperation: boolean;
        /**
         * Libellé de l'erreur
         */
        messageAlerte: string;
        /**
         * Indicateur Opération A Distance pour TMF
         * 'N' : ce n'est pas une OAD
         * 'I' : OAD Interne
         * 'E' : OAD Externe
         */
        indicateurOAD: string;
    }
}

/**
 * Ressource : /opecartetmf/v1/autorisationOpeTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmf/autorisationOpeTmf
 * Fichier généré le : 2017-10-02
 */
declare module myway.comOpesFinancieres.CarteTMF {
    class OpecartetmfAutorisationOpeTmfService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getAutorisationOpeCompteCarte(codeCaisse: string, codeGuichet: string, numeroCompte: string, cleRib: string, montantOpe: number, typeOpe: string, indicateurOAD: string): ng.IPromise<IAutorisationCompteOperationTmf>;
    }
}

/**
 * Ressource : /opecartetmf/v1/compteEligibleTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmf/compteEligibleTmf
 * Fichier généré le : 2017-09-27
 */
declare module myway.comOpesFinancieres.CarteTMF {
    interface ICompteEligibleTmf {
        /**
         * Code Etab Banque Entité Juridique. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         * --> ici il s'agit du code caisse du porteur
         */
        codeCaisse: string;
        /**
         * Code Guichet Interbancaire Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Numéro d'identification d'un compte
         */
        numeroCompte: string;
        /**
         * Top permettant de savoir s'il s'agit d'une opération à distance (OAD)
         */
        topOAD: boolean;
        detailOAD: IDetailOAD;
        /**
         * Top indiquant si le compte est éligible aux cartes TMF
         */
        topCompteEligibleTmf: boolean;
    }
    interface IDetailClient {
        /**
         * Numéro d'identification de la personne référencée comme client, tiers ou prospect
         */
        identifiantPersonne: string;
        /**
         * Code rôle personne mini-profil
         */
        codeRolePersonne: string;
        /**
         * Nom usage Personne Physique
         */
        nomUsagePersonne: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        premierPrenomPersonne: string;
        /**
         * Désignation de la personne morale
         */
        raisonSociale: string;
        /**
         * Date naissance personne physique
         */
        dateNaissancePersonne: string;
        /**
         * Code civilité personne physique
         */
        codeCivilite: string;
        /**
         * Code personnalité juridique
         */
        codePersonnaliteJuridique: string;
    }
    interface IDetailCompte {
        /**
         * Code caisse porteur
         */
        codeCaisse: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Identifiant du compte
         */
        numeroCompte: string;
        /**
         * Solde du compte hors intérêts capitalisés
         */
        soldeCompte: number;
        /**
         * Indicateur d'existence d'une opposition sur le compte
         */
        indicateurExistenceOppo: boolean;
        /**
         * Référence Opération A Distance pour TMF
         */
        referenceOadTmf: string;
        /**
         * Indicateur Opération A Distance pour TMF
         */
        indicateurOAD: string;
    }
    interface IDetailOAD {
        detailCompte: IDetailCompte;
        detailClient: IDetailClient;
    }
}

/**
 * Ressource : /opecartetmf/v1/compteEligibleTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmf/compteEligibleTmf
 * Fichier généré le : 2017-09-27
 */
declare module myway.comOpesFinancieres.CarteTMF {
    class OpecartetmfCompteEligibleTmfService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getCompteEligibleTmf(codeCaisse: string, codeGuichet: string, numeroCompte: string, topOAD: boolean, cleRIB?: string, numeroPersonne?: number, typeOperation?: string): ng.IPromise<ICompteEligibleTmf>;
    }
}

/**
 * Ressource : /opecartetmf/v1/operationCarteTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmf/operationCarteTmf
 * Fichier généré le : 2017-10-02
 */
declare module myway.comOpesFinancieres.CarteTMF {
    interface IOperationCarteTmf {
        codeCaisse: string;
        codeGuichet: string;
        numeroCompte: string;
        cleRib: string;
        nomProduitService: string;
        typeOperation: string;
        rolePersonneSurContrat: string;
        designationPersonne: string;
        montantOperation: number;
        codeMotifOpposition: string;
        codeValidationOpposition: string;
        codeMotifOppositionSupprimee: string;
        indicateurForcageSoldeDebiteur: boolean;
    }
    interface ICarteClientTmf {
        /**
         * identifiant du supporte carte
         */
        identifiantSupportCarte: string;
        identifiantPersonne: string;
        designationPersonneTitulaire: string;
        referencePieceJustificative: string;
        indicateurOperationFaiteParTier: boolean;
        designationPersonneTier: string;
        montantTotalPriseOrdre: number;
        typeDistribution: string;
        montantCoupure1: number;
        nombreBilletsCoupure1: number;
        montantCoupure2: number;
        nombreBilletsCoupure2: number;
        montantCoupure3: number;
        nombreBilletsCoupure3: number;
        montantCoupure4: number;
        nombreBilletsCoupure4: number;
        premierLibelleReleveCompte: string;
        referenceOperationOadTmf: string;
        /**
         * indique s'il s'agit d'une TMF OAD ou pas
         */
        topOad: boolean;
    }
    interface ICarteTmf {
        informationsClientCarte: ICarteClientTmf;
        listeOperationsCarte: Array<IOperationCarteTmf>;
    }
}

/**
 * Ressource : /opecartetmf/v1/operationCarteTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmf/operationCarteTmf
 * Fichier généré le : 2017-10-02
 */
declare module myway.comOpesFinancieres.CarteTMF {
    class OpecartetmfOperationCarteTmfService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        postCarteTmf(carteTmf: ICarteTmf): ng.IPromise<ICarteTmf>;
    }
}

/**
 * Ressource : /opecartetmfparametre/v1/horaireEdsDateTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmfparametre/horaireEdsDateTmf
 * Fichier généré le : 2017-09-12
 */
declare module myway.comOpesFinancieres.CarteTMF {
    interface IHoraireEdsDateDetail {
        horaireMatin: IHoraireEds;
        horaireApresMidi: IHoraireEds;
        codeCaisse: string;
        identifiantEds: string;
        referenceEds: string;
        dateHoraire: string;
    }
    interface IHoraireEds {
        heureOuverture: string;
        heureFermeture: string;
        codeTypeHoraire: string;
    }
}

/**
 * Ressource : /opecartetmfparametre/v1/horaireEdsDateTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmfparametre/horaireEdsDateTmf
 * Fichier généré le : 2017-09-12
 */
declare module myway.comOpesFinancieres.CarteTMF {
    class OpecartetmfparametreHoraireEdsDateTmfService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getHoraireEdsTmf(codeCaisse: string, identifiantEds: string, referenceEds: string, typeEds: string, dateHoraireEds: string): ng.IPromise<IHoraireEdsDateDetail>;
    }
}

/**
 * Ressource : /opecartetmfparametre/v1/plafondOpeAgence
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmfparametre/plafondOpeAgence
 * Fichier généré le : 2017-10-02
 */
declare module myway.comOpesFinancieres.CarteTMF {
    interface IPlafondRetraitAgenceDetail {
        devise: string;
        codeCaisse: string;
        referenceExterneAgence: string;
        nombreMinutesPeriodePlafond: number;
        montantPlafondRetrait: number;
        indicateurForcageOperation: boolean;
        montantOperationRetrait: number;
    }
}

/**
 * Ressource : /opecartetmfparametre/v1/plafondOpeAgence
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmfparametre/plafondOpeAgence
 * Fichier généré le : 2017-10-02
 */
declare module myway.comOpesFinancieres.CarteTMF {
    class OpecartetmfparametrePlafondOpeAgenceService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getPlafondOperationAgence(codeCaisse: string, referenceExterneAgence: string): ng.IPromise<IPlafondRetraitAgenceDetail>;
    }
}

/**
 * Ressource : /opecartetmfparametre/v1/plafondRetrait
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmfparametre/plafondRetrait
 * Fichier généré le : 2017-10-02
 */
declare module myway.comOpesFinancieres.CarteTMF {
    interface IPlafondRetraitDetail {
        devise: string;
        montantPlafondRetraitUnitaire: number;
        montantPlafondRetraitsCumules: number;
        montantPlafondJournalierRetrait: number;
        indicateurForcageOperation: boolean;
        indicateurForcagCumulJournalier: boolean;
        indicateurForcageCumulRetraits: boolean;
        montantCumulRetraits: number;
        montantCumulRtrtsJournaliersTmf: number;
    }
}

/**
 * Ressource : /opecartetmfparametre/v1/plafondRetrait
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/opecartetmfparametre/plafondRetrait
 * Fichier généré le : 2017-10-02
 */
declare module myway.comOpesFinancieres.CarteTMF {
    class OpecartetmfparametrePlafondRetraitService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getPlafondRetrait(codeCaisse: string, codeGuichet: string, numeroCompte: string, codeTypeCompte: string, referenceExterneAgence: string, topOAD: boolean): ng.IPromise<IPlafondRetraitDetail>;
    }
}

/**
 * Ressource : /structureservice/v1/infoAgenceCarteTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/structureservice/infoAgenceCarteTmf
 * Fichier généré le : 2017-09-12
 */
declare module myway.comOpesFinancieres.CarteTMF {
    interface IParametresCarteTmfAgence {
        codeCaisse: string;
        identifiantEds: string;
        delaiValiditeCarteTmf: number;
        indicateurDepotGabAutorise: boolean;
        montantRetraitMaximumAutorise: number;
    }
}

/**
 * Ressource : /structureservice/v1/infoAgenceCarteTmf
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/structureservice/infoAgenceCarteTmf
 * Fichier généré le : 2017-09-12
 */
declare module myway.comOpesFinancieres.CarteTMF {
    class StructureserviceInfoAgenceCarteTmfService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getParametreCarteTmf(codeCaisse: string, identifiantEds: string): ng.IPromise<IParametresCarteTmfAgence>;
    }
}

declare module myway.comOpesFinancieres {
    class ChequeBanqueController {
        private $scope;
        private chequeBanqueService;
        private serviceAgentExtended;
        static $inject: string[];
        modeFinancier: MyWay.Model.ModeFinancier;
        devise: MyWay.Model.Devise;
        montant: number;
        numeroConseiller: string;
        desactiverDernierCheque: boolean;
        choixCheque: string;
        dernierCheque: boolean;
        beneficiaireCheque: string;
        afficherMontantGlobal: boolean;
        montantDeviseTexteGlobalCheque: string;
        numeroCheque: string;
        messageErreurChequeBanque: string;
        verrouillerChampNumeroCheque: boolean;
        afficherChequeEnCours: boolean;
        isChequeEnCours: boolean;
        chequeEnCours: myway.comOpesFinancieres.Model.ChequeBanque;
        isDerogationImpression: boolean;
        estMultiRetrait: boolean;
        contexteSaisieOpeFi: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere;
        static VARIABLE_A_ZERO_CHEQUE_BANQUE: number;
        static NOMBRE_MAXIMUM_CHIFFRE_NUMERO_CHEQUE_BANQUE: number;
        static CHOIX_CHEQUE_MULTI_BOUTONS_RADIOS_CHEQUE_BANQUE: string;
        static CHOIX_CHEQUE_UNIQUE_BOUTONS_RADIOS_CHEQUE_BANQUE: string;
        constructor($scope: ng.IScope, chequeBanqueService: myway.comOpesFinancieres.ChequeBanqueService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Gestion du clic sur un des choix du chèque.
         * Attention le test est inversé car le ng-click se fait avant la mise à jour du Ng-model
         * @param {string} choixCheque
         */
        clicChoixCheque(choixCheque: string): void;
        /**
         * Gére le clic sur la case à cocher dernier chèque. Attention on inverse les contrôles car le ng-click passe avant la mise à jour du ng-model
         * @param {number} dernierCheque
         */
        clicDernierCheque(dernierCheque: number): void;
        /**
         * Initialisation données et variables
         */
        initialisationVariablesEtDonnes(): void;
        /**
         * Permet d'ouvrir la popup de confirmation
         */
        ouverturePopupConfirmationCheque(): void;
        /**
         * Remplit les champs de l'IHM avec le chèque en cours.
         * @param {myway.comOpesFinancieres.Model.ChequeBanque} chequeBanqueEnCours
         */
        remplissageChampsChequeEnCours(chequeBanqueEnCours: myway.comOpesFinancieres.Model.ChequeBanque): void;
        /**
         * Ajout du chiffre 0 devant le numero de cheque pour avoir un total de 7 chiffres.
         * @param {string} numeroCheque
         */
        affinerNumeroCheque(numeroCheque: string): void;
        /**
         * Permet d'emettre le cheque de banque vers le composant principal
         */
        emissionChequeDeBanque(): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfChequeBanque(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class ChequeBanqueOperationControleur {
        private $scope;
        static $inject: string[];
        /** Numéro du chèque de banque. */
        numeroCheque: string;
        /** Bénéficiaire du chèque de banque. */
        beneficiaireCheque: string;
        /** Cheque Banque Operation. */
        chequeBanqueOperation: myway.comOpesFinancieres.Model.ChequeBanqueOperation;
        /**
         * Constructeur
         * @param $scope {IScope}
         */
        constructor($scope: ng.IScope);
        /**
         * Ajout du chiffre 0 devant le numero de cheque pour avoir un total de 7 chiffres.
         * @param {string} numeroCheque
         */
        affinerNumeroCheque(numeroCheque: string): void;
        /**
         * Détermine une modification dans le bénéficiaire du chèque de banque
         * @param beneficiaireCheque Bénéficiaire du chèque de banque
         */
        modificationBeneficaire(beneficiaireCheque: string): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfChequeBanqueOperation(): ng.IDirective;
}

declare module myway.comOpesFinancieres.Constantes {
    /**
     * Contient les identifiants des champs d'operations financieres.
     */
    class IdentfiantsChampsOperationsFinancieres {
        static ID_LIBELLE_OPERATION_FINANCIERE: string;
        static ID_NUMERO_CHEQUE_BANQUE_OPERATION_FINANCIERE: string;
        static ID_BENEFICIAIRE_CHEQUE_BANQUE_OPERATION_FINANCIERE: string;
        static ID_MONTANT_OPERATION_FINANCIERE: string;
        static ID_OPERATION_DIVERSE: string;
        static ID_TITULAIRE_COMPTE: string;
        static ID_LISTE_COMPTE_VIREMENT_INTERNE: string;
        static ID_RICE_SAISIT_VIREMENT_INTERNE: string;
        static ID_REFERENCE_ENVELOPPE: string;
        static ID_BILLETTERIE: string;
        static ID_REFERENCE_OAD: string;
    }
    /**
     * Contient les messages d'erreurs des champs d'opérations financieres.
     */
    class MessagesErreursChampsOperationsFinancieres {
        static MESSAGE_LIBELLE_OPERATION_VIDE: string;
        static MESSAGE_LIBELLE_NUMERO_CHEQUE_BANQUE_VIDE: string;
        static MESSAGE_LIBELLE_BENEFICIAIRE_CHEQUE_BANQUE_VIDE: string;
        static MESSAGE_MONTANT_VIDE: string;
        static MESSAGE_OPERATION_DIVERSE: string;
        static MESSAGE_TITULAIRE_COMPTE: string;
        static MESSAGE_COMPTE_SELECTIONNE_VIREMENT_INTERNE: string;
        static MESSAGE_RICE_SAISIT_VIREMENT_INTERNE: string;
        static MESSAGE_REFERENCE_ENVELOPPE: string;
        static MESSAGE_BILLETTERIE_INCORRECT: string;
        static MESSAGE_REFERENCE_OAD: string;
        static MESSAGE_MONTANT_NON_MULTIPLE_DE_10: string;
    }
}

declare module myway.comOpesFinancieres.Constantes {
    class Devise {
        static TEXTE_CODE_DEVISE_EURO: string;
    }
    class OperationFinanciere {
        static CODE_OPERATION_N: string;
        static CODE_OPERATION_A: string;
        static RESERVE_ENCAISSEMENT_DEFAUT_CINQ: number;
        static TITRE_PANEL_PRINCIPAL_DEFAUT: string;
        static TEXTE_SOLDE_COMPTE_AVANT_VIREMENT_INTERNE: string;
        static TEXTE_NOUVEAU_SOLDE_APRES_VIREMENT_INTERNE: string;
        static TEXTE_LIBELLE_DEPOT_ESP_NUMERO: string;
        static CODE_REFERENCE_OD_VEOD: string;
        static TEXTE_OUI_O: string;
        static TEXTE_NON_N: string;
        static CODE_MODE_ESPECES_ESP: string;
        static TEXTE_BOUTON_VALIDER: string;
        static TEXTE_NUMERO_BORDEREAU: string;
        static TEXTE_BORD_TIRET_BAS: string;
        static NOM_FICHIER_PDF_BORDEREAU_OPERATION: string;
        static MESSAGE_ERREUR_UTILISATEUR_HABILITATION_SHJM25: string;
        static TYPE_RECHERCHE_COMPTE_NUMERO_PERSONNE: string;
        static CODE_APPLICATION_BILLETTERIE_AUTO: string;
        static CODE_SAG: string;
        static LIBELLE_MONTANT_DEFAUT: string;
        static LIBELLE_MONTANT_RETRAIT: string;
        static LIBELLE_MONTANT_DEPOT: string;
        static TEXTE_LIBELLE_ANNULATION_DEPOT_ESP_NUMERO: string;
    }
    class Fonctionnalite {
        static TEXTE_VERSEMENT_SIMPLE_MAJ: string;
        static TEXTE_CLOTURE_CDD_MAJ: string;
        static TEXTE_CLOTURE_COMPTE_MAJ: string;
        static TEXTE_OUVERTURE_COMPTE_MAJ: string;
        static TEXTE_OUVERTURE_CDD_MAJ: string;
        static TEXTE_VERSEMENT_MAJ: string;
        static TEXTE_OUVERTURE_EPARGNE: string;
        static TEXTE_OUVERTURE_PEL: string;
        static TEXTE_OUVERTURE_CEL: string;
        static TEXTE_COMPTE_CANTONNEMENT: string;
        static TEXTE_OUVERTURE_VAD: string;
        static TEXTE_OUVERTURE_DAT: string;
        static TEXTE_OUVERTURE_LIVRET_A: string;
        static TEXTE_OUVERTURE_PEA: string;
        static TEXTE_EXTOURNE_OUVERTURE_PEA: string;
        static TEXTE_EXTOURNE_CLOTURE_PEA: string;
        static TEXTE_OUVERTURE_COMPTE_ATTENTE: string;
        static TEXTE_OPERATION_RETRAIT: string;
        static TEXTE_OPERATION_DEPOT: string;
        static TEXTE_OPERATION_RETRAIT_HORS_CLIENTELE: string;
        static TEXTE_OPERATION_DEPOT_HORS_CLIENTELE: string;
        static TEXTE_OPERATION_DEPOT_OAD: string;
        static TEXTE_OPERATION_RETRAIT_OAD: string;
        static TEXTE_OPERATION_DEPOT_DEVISE: string;
        static TEXTE_OPERATION_RETRAIT_DEVISE: string;
    }
    class ConstantesSolde {
        static MINI_PROFIL_TYPE_RESTITUTION_UNITAIRE: string;
        static MINI_PROFIL_TYPE_RECHERCHE_RICE: string;
        static MINI_PROFIL_TYPE_RECHERCHE_SOLDE_D: string;
    }
    class CodeModeFinancier {
        static MODE_FINANCIER_OPERATIONS_DIVERSES: string;
        static MODE_FINANCIER_ESPECES: string;
        static MODE_FINANCIER_CHEQUE_RECU: string;
        static MODE_FINANCIER_VIREMENT_INTERNE: string;
        static MODE_FINANCIER_ESPECES_DIVERS: string;
        static MODE_FINANCIER_CHEQUE_BANQUE: string;
        static MODE_FINANCIER_DIVERS: string;
    }
    class ChiffreString {
        static CHIFFRE_ZERO_STRING: string;
        static CHIFFRE_UN_STRING: string;
        static CHIFFRE_TROIS_ZERO_STRING: string;
    }
    class ChiffreNumber {
        static CHIFFRE_ZERO_NUMBER: number;
        static CHIFFRE_CINQ_NUMBER: number;
        static CHIFFRE_DIX_NUMBER: number;
        static CHIFFRE_VINGT_NUMBER: number;
        static CHIFFRE_CINQUANTE_NUMBER: number;
        static CHIFFRE_CENT_NUMBER: number;
        static CHIFFRE_DEUX_CENT_NUMBER: number;
        static CHIFFRE_CINQ_CENT_NUMBER: number;
    }
    class CodeHabilitation {
        static CODE_HABILITATION_SHJE05: string;
        static CODE_HABILITATION_SHJE06: string;
        static CODE_HABILITATION_SHJE07: string;
        static CODE_HABILITATION_SHJM25: string;
    }
    class Segment {
        static TEXTE_SEGMENTPRVRIO_MAJUSCULE: string;
    }
    class ParametresComptables {
        static EDS_INTERNE_RATTACHEMENT_GUICHET_COMPTABLE: string;
        static EDS_TYPE_RATTACHEMENT_GUICHET_COMPTABLE: string;
        static CODE_GUICHET_INTERBANCAIRE: string;
        static DATE_OPERATION_JOURNEE_COMPTABLE: string;
    }
    class TablesDelocaliseesOperationDiverse {
        static TABLE_DELOC_FAMILLES_OD_JU2A: string;
        static TABLE_DELOC_CODE_REGROUPEMENT_OD_JU2C: string;
        static TABLE_DELOC_TYPES_OD_JU2B: string;
        static PROPRIETE_TABLE_DELOC_COJOFA: string;
        static PROPRIETE_TABLE_DELOC_YNOXCE: string;
        static PROPRIETE_TABLE_DELOC_UCGWBD: string;
        static PROPRIETE_TABLE_DELOC_UCGWGA: string;
        static PROPRIETE_TABLE_DELOC_UCGWBA: string;
        static PROPRIETE_TABLE_DELOC_UCGWRT: string;
        static PROPRIETE_TABLE_DELOC_UCGWMO: string;
        static PROPRIETE_TABLE_DELOC_CIJOAS: string;
        static PROPRIETE_TABLE_DELOC_UCGWSR: string;
        static PROPRIETE_TABLE_DELOC_ULIWFO: string;
        static PROPRIETE_TABLE_DELOC_UCTXS5: string;
        static PROPRIETE_TABLE_DELOC_DDEXPH: string;
        static PROPRIETE_TABLE_DELOC_DFJOVA: string;
        static PROPRIETE_TABLE_DELOC_LIJMTI: string;
        static PROPRIETE_TABLE_DELOC_LIJMOB: string;
        static PROPRIETE_TABLE_DELOC_CIJMTI: string;
        static PROPRIETE_TABLE_DELOC_CIJMOB: string;
        static PROPRIETE_TABLE_DELOC_COJXHD: string;
        static PROPRIETE_TABLE_DELOC_ULIWOD: string;
        static PROPRIETE_TABLE_DELOC_IDSEQ3: string;
    }
    /**
     * Table délocalisées produit
     */
    class TableDelocaliseesProduit {
        static TABLE_DELOC_PRODUIT: string;
        static PROPRIETE_TABLE_DELOC_CODIPR: string;
        static PROPRIETE_TABLE_DELOC_COLIDV: string;
    }
    class TableDelocaliseesLibelleComplementaire {
        static TABLE_DELOC_LIBELLE_COMPLEMENTAIRE: string;
        static PROPRIETE_TABLE_DELOC_CTGXMF: string;
        static PROPRIETE_TABLE_DELOC_COGXEF: string;
        static PROPRIETE_TABLE_DELOC_COGXAO: string;
        static PROPRIETE_TABLE_DELOC_LBGXOP: string;
        static PROPRIETE_TABLE_DELOC_LBGXOA: string;
    }
    class TablesDelocaliseesReserveEncaissement {
        static TABLE_DELOC_RESERVE_ENCAISSEMENT_GU4E: string;
        static PROPRIETE_TABLE_DELOC_CIGXRC: string;
        static PROPRIETE_TABLE_DELOC_QTGXRE: string;
        static PROPRIETE_TABLE_DELOC_QTGXR7: string;
        static PROPRIETE_TABLE_DELOC_CODIPR: string;
        static PROPRIETE_TABLE_DELOC_COHCBQ: string;
        static PROPRIETE_TABLE_DELOC_MSHCCH: string;
        static PROPRIETE_TABLE_DELOC_CDMBSR: string;
        static PROPRIETE_TABLE_DELOC_COMBNC: string;
        static PROPRIETE_TABLE_DELOC_PEHCAM: string;
        static PROPRIETE_TABLE_DELOC_PEHCAO: string;
    }
    /**
     * Tout ce qui concerne la billetterie.
     */
    class Billetterie {
        static CODE_VALEUR_5_EUROS: string;
        static CODE_VALEUR_10_EUROS: string;
        static CODE_VALEUR_20_EUROS: string;
        static CODE_VALEUR_50_EUROS: string;
        static CODE_VALEUR_100_EUROS: string;
        static CODE_VALEUR_200_EUROS: string;
        static CODE_VALEUR_500_EUROS: string;
        static CODE_VALEUR_MONNAIE: string;
        static TYPE_OPERATION_BILLETTERIE_DEPOT: string;
        static TYPE_OPERATION_BILLETTERIE_RETRAIT: string;
    }
    class OperationDiverse {
        static TEXTE_REMBOURSEMENT: string;
        static TEXTE_CODE_REMBOURSEMENT_R: string;
        static TEXTE_CODE_VERSEMENT_V: string;
        static TEXTE_VERSEMENT: string;
        static TEXTE_QUATRE_ETOILES: string;
        static TEXTE_DEUX_ETOILES: string;
        static TEXTE_UNE_ETOILE: string;
        static TEXTE_MODE_APPARITION_CL: string;
        static TEXTE_NOM_MODEL_REGROUPEMENT_OD: string;
        static TEXTE_NOM_MODEL_FAMILLE_OD: string;
        static TEXTE_CODE_DECOUPAGE_OD_ZZ: string;
        static CODE_INTERDIT_OD_J17O5G01: string;
        static CODE_INTERDIT_OD_J17O3G01: string;
        static CODE_INTERDIT_OD_J17O4A01: string;
        static TEXTE_OUI_O: string;
        static CODE_RATTACHEMENT_GUICHET_COMPTABLE_AGENCE_OD_003: string;
    }
    class ReserveEncaissementCheque {
        static TEXTE_CODE_R: string;
    }
    /**
     * Choix utilisateur Operation Financiere
     */
    class ChoixUtilisateurOpeFi {
        /** Version de l'objet 1.0 */
        static VERSION_1_0_OBJET: string;
    }
    /**
     * Constantes pour carte TMF
     */
    class CarteTMF {
        static TEXTE_PREFIXE_NUMERO_CARTE_TMF: string;
        static TEXTE_CODE_TITULAIRE_T: string;
        static TEXTE_CODE_AUTRE_A: string;
        static TEXTE_ENTETE_INITIALISER_CARTE_TMF: string;
        static TEXTE_ENTETE_FORCER_OPERATION_RETRAIT: string;
        static TEXTE_ENTETE_CONFIRMER_OPERATION_RETRAIT: string;
        static TEXTE_TEMPLATE_MESSAGE_FORCER_SAISIE: string;
        static TEXTE_TEMPLATE_MESSAGE_CONFIRMER_SAISIE: string;
        static TEXTE_TEMPLATE_MESSAGE_GAB_DISTRIBUTION_IMPOSSIBLE: string;
        static TEXTE_TEMPLATE_MESSAGE_GAB_STATUT: string;
        static TEXTE_TEMPLATE_MESSAGE_GAB_NON_RESPECT_RISQUE: string;
        static TEXTE_TEMPLATE_MESSAGE_GAB_NON_RESPECT: string;
        static TEXTE_TEMPLATE_MESSAGE_GAB_RISQUE: string;
        static TEXTE_STATUT_HORS_SERVICE: string;
        static TEXTE_STATUT_INCONNU: string;
        static TEXTE_MESSAGE_DEPASSEMENT_SEUIL_OPERATION: string;
        static TEXTE_MESSAGE_DEPASSEMENT_SEUIL_PERIODE: string;
        static TEXTE_MESSAGE_DEPASSEMENT_SEUIL_QUOTIDIEN: string;
        static TEXTE_MESSAGE_FORCAGE_MONTANT_MAXIMUM_AGENCE: string;
        static TEXTE_MESSAGE_ATTEINTE_MONTANT_MAXIMUM_AGENCE: string;
        static TEXTE_MESSAGE_MONTANT_NON_DISTRIBUABLE_GAB: string;
        static TEXTE_BOUTON_FORCER: string;
        static TEXTE_BOUTON_CONFIRMER: string;
        static TEXTE_BOUTON_ANNULER: string;
        static SEUIL_DISTRIBUTION_MULTIPLE: number;
    }
}

declare module myway.comOpesFinancieres {
    class InformationClientController implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private informationClientService;
        static $inject: string[];
        tableauListeParticipants: MyWay.UI.ImwTableOptions;
        listeParticipants: MyWay.Model.ParticipantInformationClient[];
        participantSelectionne: MyWay.Model.ParticipantInformationClient[];
        comptePrincipal: MyWay.Model.Compte;
        numeroPersonne: string;
        /** Participant. */
        participant: MyWay.Model.ParticipantInformationClient;
        static TEXTE_ROLE: string;
        static TEXTE_CODE_ROLE: string;
        static TEXTE_PARTICIPANT: string;
        static TEXTE_CODE_NOM_PRENOM_PARTICIPANT: string;
        static TEXTE_DATE_NAISSANCE: string;
        static TEXTE_CODE_DATE_NAISSANCE: string;
        static CLASS_BOOTSTRAP_COLONNE_TABLEAU: string;
        static CLASS_BOOTSTRAP_TAILLE_TABLEAU: string;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, informationClientService: InformationClientService);
        /**
         * Permet d'initialiser le tableau des clients
         * @param {MyWay.Model.ParticipantInformationClient[]} listeParticipant
         * @returns MyWay.UI.ImwTableOptions
         */
        initTableauClient(listeParticipant: MyWay.Model.ParticipantInformationClient[]): MyWay.UI.ImwTableOptions;
        /**
         * Evenement déclenché si sélection d'un participant dans le tableau
         * @param {MyWay.Model.ParticipantInformationClient} participantSelectionne
         */
        onSelectionChange(participantSelectionne: MyWay.Model.ParticipantInformationClient): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfInformationClient(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class InformationClientService {
        private $q;
        private serviceAgentExtended;
        private compteService;
        private static MINI_PROFIL_VERSION;
        private static TIERS_VERSION;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, compteService: myway.comInterdomaine.CompteService);
        /**
         * Méthode permettant de récupérer la liste des comptes clients à partir d'un compte passé en paramètre
         * @param {string} codeEtablissement
         * @param {MyWay.Model.Compte} compte
         * @param {string} numeroPersonne
         * @returns ng.IPromise<MyWay.Model.ParticipantInformationClient[]
         */
        recupererInformationsParticipants(codeEtablissement: string, compte: MyWay.Model.Compte, numeroPersonne: string): ng.IPromise<MyWay.Model.ParticipantInformationClient[]>;
        /**
         * Récupère la liste des participants avec le libelle de role.
         * @param {string} codeEtablissement
         * @param {MyWay.Model.ParticipantInformationClient[]} listeParticipants
         * @returns ng.IPromise<MyWay.Model.ParticipantInformationClient[]>
         */
        recupererListeParticipantsAvecLibelleRole(codeEtablissement: string, listeParticipants: MyWay.Model.ParticipantInformationClient[]): ng.IPromise<MyWay.Model.ParticipantInformationClient[]>;
        /**
         * Permet de recuper les tiers lies
         * @param {string} codeEtablissement
         * @param {string} numeroPersonne
         * @returns ng.IPromise<MyWay.Model.ParticipantInformationClient[]>
         */
        recupererTiersLies(codeEtablissement: string, numeroPersonne: string): ng.IPromise<MyWay.Model.ParticipantInformationClient[]>;
        /**
         * Permet de filtrer les tiers par famille et par sens
         * @param {Object[]} listeLien
         * @param {string} codeFamille
         * @param {number} codeSens
         * @returns MyWay.Model.ParticipantInformationClient[]
         */
        filtrerTiersLiesParFamilleEtParSens(listeLien: Object[], codeFamille: string, codeSens: number): MyWay.Model.ParticipantInformationClient[];
    }
}

declare module myway.comOpesFinancieres {
    class FacturationAutomatiqueController {
        private $scope;
        private serviceAgentExtended;
        private facturationAutomatiqueService;
        static $inject: string[];
        /** Facturation prestatation. */
        facturationPrestation: myway.comOpesFinancieres.Model.FacturationPrestation;
        /** Compte de l'opération financière. */
        compte: MyWay.Model.Compte;
        /** Identifiant de la personne. */
        identifiantPersonne: number;
        /** Affiche le composant montant devise. */
        afficherComposantMontant: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, facturationAutomatiqueService: myway.comOpesFinancieres.FacturationAutomatiqueService);
    }
}

declare module myway.comOpesFinancieres {
    function mwsfFacturationAutomatique(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class FacturationAutomatiqueService {
        private serviceAgentExtended;
        private tarificationTarificationPrestationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, tarificationTarificationPrestationService: myway.comOpesFinancieres.TarificationTarificationPrestationService);
        /**
         * Permet de récupérer le montant de la facturation automatique.
         * @param facturation Objet de facturation de prestation
         */
        getMontantFacturationAutomatique(facturation: myway.comOpesFinancieres.Model.FacturationPrestation, compte: MyWay.Model.Compte, montantOperation: number, identifiantPersonne: number): ng.IPromise<MyWay.Model.MontantDevise>;
        /**
         * Récupère le code de prestatation de facturation automatique en fonction du RICE
         * @param rice RICE du compte
         */
        getCodePrestationEnFonctionRice(rice: MyWay.Model.Rice): string;
    }
}

declare module myway.comOpesFinancieres {
    class InformationsComplementairesController {
        private $scope;
        private operationFinanciereService;
        private serviceAgentExtended;
        static $inject: string[];
        libelleOperation: myway.comOpesFinancieres.Model.LibelleOperation;
        dateValeur: string;
        referenceEnveloppe: myway.comOpesFinancieres.Model.ReferenceEnveloppe;
        estDesactive: boolean;
        afficherLibelleCourt: boolean;
        static MODE_FINANCIER_ESPECES_INFORMATIONS_COMPLEMENTAIRES: string;
        static MODE_FINANCIER_ESPECES_DIVERS_INFORMATIONS_COMPLEMENTAIRES: string;
        static TEXTE_DEPOT_ESP_NUMERO: string;
        static TEXTE_MESSAGE_ERREUR_SAISIE_LIBELLE_VIDE: string;
        estModificationManuelle: boolean;
        /** Indique si le calendrier est ouvert ou non. */
        ouvrirCalendrier: boolean;
        /** Indique si le libelle est vide ou non. */
        estLibelleVide: boolean;
        /** Message d'erreur de saisie du libelle. */
        messageErreurSaisieLibelle: string;
        /** Texte anniversaire pour les PEL en depot retrait. */
        texteAnniversaire: string;
        /** Affiche ou non le champs date de valeur */
        masquerDateValeur: boolean;
        constructor($scope: ng.IScope, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Se déclenche quand on modifie manuellement le libelle
         */
        modificationManuelle(): void;
        /**
         * Permet d'envoyer un evenement au composant principal indiquant que le libelle est vide
         */
        envoiEvenementLibelleVide(): void;
        /**
         * Verification de la validation du libelle, voir s'il est vide.
         */
        validationLibelleVide(): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfInformationsComplementaires(): ng.IDirective;
}

/**
 * Ressource : /document/v1/contenu
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/document/contenu
 * Fichier généré le : 2017-01-24
 */
declare module myway.comOpesFinancieres {
    class DocumentContenuService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getDocument(codeApplication: string, idDocument: string): ng.IPromise<ConsulterDocumentOutput>;
    }
}

/**
 * Ressource : /journalactivitebancaire/v1/bordereau
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/journalactivitebancaire/bordereau
 * Fichier généré le : 2017-01-09
 */
declare module myway.comOpesFinancieres {
    class JournalactivitebancaireBordereauService {
        private serviceAgent;
        private postOperationFinanciereService;
        private documentContenuService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, postOperationFinanciereService: myway.comOpesFinancieres.PostOperationFinanciereService, documentContenuService: myway.comOpesFinancieres.DocumentContenuService);
        /**
         * Permet de poster un bordereau dans le JAB via le service REST
         */
        postBordereau(bordereau: Bordereau): ng.IPromise<Bordereau>;
        /**
         * Création de l'objet bordereauJab utilisé dans le service REST
         */
        remplissageBordereauJab(bordereauOperation: myway.comOpesFinancieres.Model.BordereauOperation, client: MyWay.Model.Client, proprietesDoc: MyWay.Services.Impression.ProprietesDoc, identificationCodeApplication: string, identifiantArchivage: string): ng.IPromise<myway.comOpesFinancieres.Bordereau>;
        /**
         * Mise en place de la billetterie JAB en fonction des depots et retraits
         */
        gestionBilletterieBordereauJab(bordereauOperation: myway.comOpesFinancieres.Model.BordereauOperation): myway.comOpesFinancieres.BilletterieJAB[];
        /**
         * Mappage de la billetterie Opéfi en billetterie Jab
         */
        creationValeurTableauBilletterieJab(typeOperation: string, bordereauOperation: myway.comOpesFinancieres.Model.BordereauOperation): myway.comOpesFinancieres.BilletterieJAB[];
        /**
         * Creation de l'objet biletterie JAB
         */
        creationObjetBilletterieJab(codeValeurFaciale: string, typeOperationBilletterie: string, nombreBillet?: number, montantMonnaie?: number, chiffreValeurBillet?: number): myway.comOpesFinancieres.BilletterieJAB;
    }
}

declare module myway.comOpesFinancieres {
    class JournalApplicatif {
        private $q;
        private serviceAgentExtended;
        private modalService;
        private operationFinanciereService;
        private saisieRiceService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        private stringDefi(donnee);
        /**
         * Test opé à jabber?
         */
        private getAJabber();
        /**
         * numéro de plan
         */
        private getNumPlan();
        /**
         * Alimentation du JAB
         * @param opefi
         * @param eligibiliteSag
         * @param contrepartie
         */
        alimenterJAB(opefi: myway.comOpesFinancieres.Model.OperationFinanciere, eligibiliteSag: boolean, contrepartie: boolean): ng.IPromise<void>;
        /**
         * Transforme un RICE caractères en RICE Objet
         * @param chaine rice en chaine de caractères
         */
        private transformeEnRice(chaine);
        private alimenterBordereauPTU(opefi, eligibiliteSag);
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle permettant de gérer une ligne du bordereau d'opération financière
     */
    class LigneBordereauOperation {
        /**
         * le mode financier de l'opération financière
         */
        modeFinancier: string;
        /**
         * la date de valeur de l'opération financière
         */
        dateDeValeur: string;
        /**
         * l'intitulé de l'opération qui a été réalisée
         */
        intituleOperation: string;
        /**
         * indique si l'opération financière est un versement ou un remboursement
         */
        sensOperation: string;
        /**
         * Montant de l'opération financière qui a été réalisée
         */
        montantOperation: number;
        /**
         * rice sur lequel a été effectué l'opération financière
         */
        riceCompte: string;
        /**
         * rice sur lequel a été effectué l'opération financière
         */
        rice: string;
        /**
         * devise de l'opération financière
         */
        devise: string;
        /**
         * valeur du solde après réalisation de l'opération financière
         */
        nouveauSolde: number;
        /**
         * libellé du produit
         */
        libelleProduit: string;
        /**
         * cheque de banque
         */
        chequeDeBanque: myway.comOpesFinancieres.Model.ChequeBanque;
        /**
         * Operation Diverse
         */
        operationDiverse: MyWay.Model.OperationDiverse;
        /**
         * Contient le compte du virement interne sélectionné dans la liste.
         */
        compteVirementInterneSelectionne: MyWay.Model.Contrat;
    }
    /**
     * Modèle permettant de gérer un bordereau d'opération financière
     */
    class BordereauOperation {
        /**
         * l'identifiant du bordereau : numéro du poste + numéro bordereau
         */
        identifiantBorderau: string;
        /**
         * l'ensemble des lignes du bordereau d'opération financière
         */
        lignesBorderauOperation: LigneBordereauOperation[];
        /**
         * liste des participants pour l'ensemble des opérations financières réalisées
         */
        participant: MyWay.Model.ParticipantInformationClient;
        /**
         * billetterie gérant les dépots en espèce des différentes opérations financières rattachées à un bordereau
         */
        billetterieDepot: myway.comOpesFinancieres.Model.SegmentBilleterie;
        /**
         * billetterie gérant les retraits en espèce des différentes opérations financières rattachées à un bordereau
         */
        billetterieRetrait: myway.comOpesFinancieres.Model.SegmentBilleterie;
        /**
         * montant total de la billetterie gérant le dépot des espèces
         */
        montantBilletterieDepot: number;
        /**
         * montant total de la billetterie gérant le retrait des espèces
         */
        montantBilletterieRetrait: number;
        /**
         * Référence identité de l'opération financière
         */
        referenceIdentite: string;
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modele pour gérer les chèques de banque opérations
     */
    class ChequeBanqueOperation {
        /** Numéro du chèque. */
        numeroCheque: string;
        /** Bénéficiaire du chèque. */
        beneficiaireCheque: string;
    }
    /**
     * Modèle permettant de gérer le chèque de banque
     */
    class ChequeBanque {
        /**
         * numéro du chèque de banque utilisé lors d'une opération financière
         */
        numero: string;
        /**
         * devise du chèque de banque
         */
        devise: MyWay.Model.Devise;
        /**
         * montant global du chèque de banque
         */
        montantGlobal: number;
        /**
         * mode financier du chèque de banque
         */
        modeFinancier: MyWay.Model.ModeFinancier;
        /**
         * bénéficiaire
         */
        beneficiaire: string;
        /**
         * indique si le chèque de banque est alimenté par un seul ou plusieurs comptes
         */
        multiRetrait: boolean;
        /**
         * indique s'il s'agit du dernier compte qui alimente le chèque de banque
         */
        derniereContrepartie: boolean;
    }
    /**
     * Permet de définir les paramètres pour la popup d'impression de chèque de banque
     */
    class ParamPopupChequeBanque {
        /**
         * Définit le titre de la popup
         */
        titrePopup: string;
        /**
         * Permet de définir le style MyWay du bouton "imprimer" : Principal, Secondaire, Zone ou Contextuel
         */
        styleBoutonImprimer: string;
        /**
         * Permet de définir le style MyWay du bouton "ne pas imprimer" : Principale, Secondaire, Zone ou Contextuel
         */
        styleBoutonNePasImprimer: string;
        constructor();
    }
}

declare module myway.comOpesFinancieres.Model {
    /** Contient l'objet d'entrée des choix utilisateurs d'une OpeFi.
     *  @version 1.0
     *  @: Février 2017
     */
    class ChoixUtilisateurOpeFi {
        /** Numero de personne */
        numeroPersonne: string;
        /** Code du mode financier. */
        codeModeFinancier: string;
        /** Montant de l'opération financière. */
        montant: number;
        /** référence identité. */
        referenceIdentite: string;
        /** Libelle long de l'opération financière (Par exemple "OUVERTURE ESPECES"). */
        libelleLongOpeFi: string;
        /** Libellé court de l'opération financière (Par exemple "OV ESP") */
        libelleCourtOpeFi: string;
        /** Date de valeur. */
        dateValeur: Date;
        /** Code de la devise de l'opéfi (par exemple : EUR). */
        codeDevise: string;
        /** Objet contenant ce qui est nécessaire pour les modes financiers Especes et Especes Divers (01 et 07). */
        modeFiEspecesEtEspecesDivers: ModeFinancierEspecesEtEspecesDivers;
        /** Objet contenant ce qui est nécessaire pour le mode financier Cheque (02). */
        modeFiCheque: ModeFinancierCheque;
        /** Objet contenant ce qui est nécessaire pour le mode virement interne (06). */
        modeFiVirInterne: ModeFinancierVirInterne;
        /** Objet contenant ce qui est nécessaire pour le mode financier OD (00). */
        modeFiOD: ModeFinancierOperationDiverse;
        /** Objet contenant ce qui est nécessaire pour le mode financier chèque de banque (09) */
        modeFiChequeBanque: ModeFinanciereChequeBanque;
        /** Le code de l'opération financière, par exemple "N" */
        codeOperation: string;
        /** Indique si l'opération financière est réalisé pour un majeur ou pour un mineur, Utilisé uniquement si le canal est défini */
        estMajeur: boolean;
        /** Version de l'objet. */
        version: string;
    }
    /** Contient l'objet pour les modes financiers 01 et 07. */
    class ModeFinancierEspecesEtEspecesDivers {
        /** Indique s'il y a une réference enveloppe ou non. */
        presenceReferenceEnveloppe: boolean;
        /** numéro de la référence enveloppe saisi lors d'une opération financière */
        numeroReferenceEnveloppe: string;
        referenceEnveloppeIsCocher: boolean;
        /** Contient les billets de la billetterie. */
        coupure: MyWay.Model.Coupure;
        /** Monnaie de la billeterie */
        monnaieBilleterie: number;
    }
    /** Contient l'objet pour le mode financier cheque 02. */
    class ModeFinancierCheque {
        /** Delai d'encaissement. */
        delaiEncaissement: number;
    }
    /** Contient l'objet pour le mode financier virement interne. */
    class ModeFinancierVirInterne {
        /** Indique si c'est un compte sélectionné (true), sinon compte saisit (false). */
        estVirementInterneSelectionne: boolean;
        /** Contient le RICE complet si saisit, si selection mettre le riceContrat de l'objet Contrat. */
        numeroRice: string;
    }
    /** Contient ce qui est nécessaire pour un mode financier Opération Diverse (00). */
    class ModeFinancierOperationDiverse {
        /** Code Famille (Champ COJOFA). */
        codeFamille: string;
        /** Code Type (Champ COJXHD). */
        codeType: string;
        /** Code Guichet de la famille (Champ YNOXCE) */
        codeGuichet: string;
        /** Libelle 1 de saisie. */
        libelle1SaisiOD: string;
        /** Libelle 2 de saisie. */
        libelle2SaisiOD: string;
        /** Code transaction (Champ IDSEQ3) */
        codeTransaction: string;
    }
    /** Contient ce qui est nécessaire pour un mod financier Chèqu de Banque (09) */
    class ModeFinanciereChequeBanque {
        /** Contient le chèque de banque. */
        chequeDeBanque: myway.comOpesFinancieres.Model.ChequeBanque;
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle permettant de gérer le contexte de la saisie de l'opération Financière
     * Ce contexte sera très utile pour les traitements post opérations financière
     */
    class ContexteSaisieOperationFinanciere {
        /**
         * le code établissement dans lequel a été effectué l'opération financière
         */
        codeEtablissement: string;
        /**
         * la référence externe de l'agent qui a réalisé l'opération financière
         */
        referenceExterneAgent: string;
        /**
         * l'eds externe du guichet comptable sur lequel a été réalisé l'opération financière
         */
        edsExterneGuichetComptable: string;
        /**
         * Localité de l'EDS Externe du guichet comptable sur lequel a été réalisé l'opération financière.
         */
        localiteEdsExterneGuichetComptable: string;
        /**
         * l'eds externe de rattachement du guichet comptable sur lequel a été réalisé l'opération financière
         */
        edsExterneRattachementGuichetComptable: string;
        /**
         * la date à laquelle a été réalisé l'opération financière
         */
        dateOperationJourneeComptable: string;
        /**
         * l'identifiant du bordereau auquel l'opération financière est rattachée
         */
        identifiantBordereau: string;
        /**
         * Le libelle de l'EDS de rattachement au guichet comptable
         */
        libelleEdsRattachementGuichetComptable: string;
        /**
         * Numéro de téléphone de l'EDS de rattachement du guichet comptable.
         */
        numTelEdsRattachementguichetComptable: string;
        /**
         * Contient le numéro d'offre utilisé dans l'édition du bordereau (dans l'en tête NUM_REFACTE)
         */
        numeroOffre: string;
        /**
         * Type de caisse auto utilisée ('' 'D'- ditributive 'R'-Recyclante).
         */
        typeCA: string;
    }
}

/**
 * Ressource : /document/v1/contenu
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/document/contenu
 * Fichier généré le : 2017-01-24
 */
declare module myway.comOpesFinancieres {
    class ProprietesDoc {
        /**
         * CodeEtablissement
         */
        codeEtablissement: string;
        /**
         * IdntLot
         */
        idLot: string;
        /**
         * DateCrtn
         */
        dateCreation: string;
        /**
         * DateModification
         */
        dateModification: string;
        /**
         * DateFinVald
         */
        dateFinValidite: string;
        /**
         * NumUnitePhysique
         */
        numeroUnitePhysique: string;
        /**
         * TopAnnotation
         */
        topAnnotation: boolean;
        /**
         * IdntPJ
         */
        idDocument: string;
        /**
         * IdntCmpstApplf
         */
        codeApplication: string;
        /**
         * CodeTypeModeAcqs
         */
        moyenAcquisition: string;
        /**
         * CodeTypeOrigAcqs
         */
        origineAcquisition: string;
        /**
         * RefrAgntAcqs
         */
        agentAcquisition: string;
        /**
         * CodeTypeNatrDoc
         */
        codeNature: string;
        /**
         * LibelleNatrDoc
         */
        libelleNature: string;
        /**
         * CodeTypeAttrb
         */
        typeAttributaire: string;
        /**
         * IdntAttrb
         */
        idAttributaire: string;
        /**
         * IdntAttrSecn
         */
        idAttributaireSecondaire: string;
        /**
         * DateDeliv
         */
        dateDelivrance: string;
        /**
         * DateNumr
         */
        dateNumerisation: string;
        /**
         * DateColt
         */
        dateCollecte: string;
        /**
         * DatePerm
         */
        datePeremption: string;
        /**
         * PosUnitePhysique
         */
        positionUnitePhysique: number;
        /**
         * InttAttr
         */
        intituleAttributaire: string;
        /**
         * DateAttr
         */
        dateAttributaire: string;
        /**
         * RefrPosteFoncAcqs
         */
        referencePosteFonctionAcquisition: string;
        /**
         * DescDoc
         */
        descriptionDocument: string;
        /**
         * CodeTypeStck
         */
        codeTypeStockage: string;
        /**
         * CodeForcAccs
         */
        codeAccessibilite: number;
        /**
         * CodeTypeSign
         */
        methodeSignature: string;
        constructor();
    }
    class ConsulterDocumentOutput {
        fichier: Fichier;
        details: Details;
        annotations: Array<Annotation>;
        constructor();
    }
    class Fichier {
        nom: string;
        taille: number;
        contenu: string;
        constructor();
    }
    class Details extends ProprietesDoc {
        constructor();
    }
    class Annotation {
        id: string;
        contenu: string;
        constructor();
    }
    class ConsulterDocumentInput {
        /**
         * CodeEtablissement
         */
        codeEtablissement: string;
        /**
         * IdntCmpstApplf
         */
        codeApplication: string;
        /**
         * IdntPJ
         */
        idDocument: string;
        /**
         * IndicRecupDoc
         */
        indicateurDocument: boolean;
        /**
         * IndicRecupDetl
         */
        indicateurDetails: boolean;
        /**
         * IndicPrscAnnt
         */
        indicePresenceAnnotation: boolean;
        /**
         * IndicRecupAnnt
         */
        indiceRecuperationAnnotation: boolean;
        constructor();
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Model contenant la facturation d'une prestation
     */
    class FacturationPrestation {
        montant: MyWay.Model.MontantDevise;
        /** Contient le code prestatation. */
        codePrestation: string;
        /** Permet d'indiquer si on facture ou non la prestatation, pour le vrac cela veut dire que la case est cochée. */
        estFacturationPrestation: boolean;
        /** Libelle de la prestatation. */
        libellePrestation: string;
        constructor(codePrestation?: string);
    }
}

/**
 * Ressource : /journalactivitebancaire/v1/bordereau
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/journalactivitebancaire/bordereau
 * Fichier généré le : 2017-01-09
 */
declare module myway.comOpesFinancieres {
    class Bordereau {
        bordereauJAB: BordereauJAB;
        billetterieJAB: Array<BilletterieJAB>;
        constructor();
    }
    class BilletterieJAB {
        /**
         * Détermine la monnaie dans laquelle la billetterie de l'opération financière a été gérée. Il s'agit du code monnaie / devise selon la nomenclature ISO 4217 alpha.
         *
         * Exemples de valeurs :
         * USD / dollar - USA
         * JPY / yen - JAPON
         * CNY / yuan - CHINE
         * DKK / couronne - DANEMARK
         */
        codeDevise: string;
        /**
         * Détermine pour une devise donnée :
         *      - la valeur faciale du billet
         *      - le vrac de la monnaie
         * Valeurs possibles :
         * 'MONNAIE' - Pour désigner la monnaie "vrac" de la billetterie
         * '5' - Coupure de 5 euros
         * '10' - Coupure de 10 euros
         * '20' - Coupure de 20 euros
         * '50' - Coupure de 50 euros
         * '100' - Coupure de 100 euros
         * '200' - Coupure de 200 euros
         * '500' - Coupure de 500 euros
         */
        codeValeurFaciale: string;
        /**
         * Détermine le sens du mouvement d'une opération financière effectuée en agence dans le cadre de la comptabilisation de la billetterie.
         *
         * Valeurs possibles :
         *      'D' - Dépôt
         *      'R' - Retrait
         */
        typeOperationBilletterie: string;
        /**
         * Nombre de billet pour une coupure donnée dans une devise donnée enregistré dans le cadre d'une opération de dépôt ou de retrait.
         */
        nombreBillet: number;
        /**
         * Détermine le montant du vrac de monnaie dans une devise donnée d'une opération financière réalisée (dépôt ou retrait) en agence.
         */
        montantMonnaie: number;
        /**
         * Détermine le montant des billets d'une coupure donnée pour un mouvement (dépôt ou retrait) d'opération financière en agence.
         */
        montantBilletterie: number;
        /**
         * Timestamp de création de la billetterie pour l'opération
         */
        horodatageCreationBilleterie: string;
        constructor();
    }
    class BordereauJAB {
        /**
         * Référence libre de la pièce justificative qui a servi lors de l'opération financière.
         *
         * Exemple :
         *      Carte d'identité 678 888 10/01/85
         */
        referencePieceJustificative: string;
        /**
         * Nom du titulaire du compte mouvementé dans l'opération financière.
         */
        nomTitulaireCompte: string;
        /**
         * Détermine la nature d'un document dans la GED.
         * Etablit son contenu.
         * Permet de faciliter la recherche de documents en liste.           Correspond au niveau le plus fin caractérisant un document.
         *
         * Exemple de valeurs :
         * ' ' - Ouverture contrat
         * 'CGEE' - Conditions générales
         * 'DPSO' - Documents Parts Sociales
         */
        codeNatureDocumentGed: string;
        /**
         * Référence d'identification du document numérisé archivé dans l'ECM FileNet.
         * Permet d'identifier les pièces ayant été acquittées par FileNet : image du doc intégrée en GED.
         * Identifiant fourni par le traitement d'acquittement FILENET.
         */
        identifiantFileNet: string;
        /**
         * Précise le type de signature du bordereau de l'opération financière effectuée à l'agence.
         *
         * Valeurs possibles :
         * 'PAP' - Papier
         * 'SAG' - Signature électronique
         */
        typeSignatureBordereau: string;
        /**
         * Ligne 2 de l'adresse du titulaire du compte mouvementé.
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identification du destinataire : N° APP ou BAL - ÉTAGE - COULOIR - ESC
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2AdresseTitulaire: string;
        /**
         * Identifiant de la personne qui a signé le bordereau d'opération financière.
         */
        identifiantSignataire: number;
        /**
         * Nom de famille de la personne qui a signé le bordereau d'opération financière.
         */
        nomSignataire: string;
        /**
         * Prénom de la personne qui a signé le bordereau d'opération financière.
         */
        prenomSignataire: string;
        /**
         * Code rôle de la personne qui a signé le bordereau d'opération financière.
         *
         * Valeurs possibles :
         * '01' - Titulaire
         * '02' - Cotitulaire
         * '03' - Procu. générale
         * '04' - Procu. générale/compte
         * '05' - Représentant légal
         * '06' - Représentant légal pers. morale
         * '07' - Procuration spéciale porteur de carte pro
         */
        roleSignataire: string;
        /**
         * Numéro d'identification unique du dossier de Numérisation (contrat, client).
         * Format : AA + C + 12 chiffres  (où AA = année et C = N° couloir).
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantDossierNumerise: number;
        /**
         * Identifie une application émettrice de documents dans la GED (FileNet / CMOD).
         *
         * Exemple :
         *      'INFOGREF' - Application Info GREFE
         */
        codeEmetteurGed: string;
        /**
         * Ligne 3 de l'adresse du titulaire du compte mouvementé.
         * La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution) : ENTRÉE - BÂTIMENT - IMMEUBLE - RÉSIDENCE
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment : entrée, bâtiment, bloc, tour, etc.
         */
        ligne3AdresseTitulaire: string;
        /**
         * Ligne 4 de l'adresse du titulaire du compte mouvementé.
         * La ligne 4 permet d'identifier la voie de destination NUMERO - LIBELLE DE LA VOIE
         * Peut comprendre :
         *      - Le numéro dans la voie, type et nom de voie
         *      - Le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit
         *      - Un service X
         *      - Une boîte postale
         *      - Un numéro de CEDEX
         */
        ligne4AdresseTitulaire: string;
        /**
         * Ligne 5 de l'adresse du titulaire du compte mouvementé.
         * La ligne 5 permet d'identifier la destination : LIEU DIT ou SERVICE PARTICULIER DE DISTRIBUTION
         * Peut comprendre :
         *      - Nom d'un quartier, d'un lieu dit, d'un hameau
         *      - Nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu dit et possédant plusieurs voies internes.
         */
        ligne5AdresseTitulaire: string;
        /**
         * Ligne 6 de l'adresse du titulaire du compte mouvementé.
         * La ligne 6 permet d'identifier la destination : CODE POSTAL et LOCALITE DE DESTINATION ou CODE CEDEX et LIBELLE CEDEX.
         * Peut comprendre :
         *      - Le numéro de code postal et nom de la localité
         *      - Le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6AdresseTitulaire: string;
        /**
         * Identifiant du client concerné par l'opération financière.
         */
        identifiantClientOperation: number;
        /**
         * Référence d'identification d'un bordereau d'opération financière effectuée en agence
         */
        identifiantBordereauJab: string;
        constructor();
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle permettant de gérer le libellé de l'opération financière
     */
    class LibelleOperation {
        /**
         * libellé court de l'opération financière
         */
        libelleCourt: string;
        /**
         * libellé long de l'opération financière
         */
        libelleLong: string;
        constructor(libelleCourt: string, libelleLong: string);
    }
}

/**
 * Ressource : /syntheseservice/v1/miniProfil
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/syntheseservice/miniProfil
 * Fichier généré le : 2017-02-10
 */
declare module myway.comOpesFinancieres {
    interface IParticipantProduit {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantTiers: number;
        /**
         * Code rôle des participants dans le mini-profil.
         *
         * Valeurs :
         * '01'       Titulaire
         * '02'       Cotitulaire
         * '03'       Procuration générale
         * '04'       Procuration générale par compte
         * '05'       Représentant légal
         * '06'       Représentant légal personne morale
         * '07'       Procuration spéciale porteur de carte pro
         */
        codeRolePersonne: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         *    - soit au nom de famille de l'époux(se) (conjoint)
         *    - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque.
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         * Donnée réglementaire : information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille.
         * Appelée auparavant nom marital.
         */
        nomUsage: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         * Nom joint au patronyme qui distingue les personnes d'un même groupe familial entre elles.
         * Donnée réglementaire.
         */
        prenom: string;
        /**
         * Désignation de la personne morale.
         * Identique à celle de l'INSEE ou du Registre du Commerce et des Sociétés (RCS).
         * Figure impérativement dans les statuts.
         * La nature et la composition de ce nom ainsi que les principes le régissant varient selon que la société est commerciale ou civile.
         * Désignation propre à la personne : contrôle de l'unicité.
         */
        raisonSociale: string;
        /**
         * Date de naissance de la personne physique.
         * Donnée réglementaire : information figurant sur toute pièce officielle d'identité.
         * Règle dérogatoire pour les personnes physiques
         * appartenant à un pays sans état civil : le 1er du mois de l'année de naissance supposée.
         */
        dateNaissance: string;
        /**
         * Détermine le type de personnalité juridique de la personne.
         * Il existe principalement deux types de personnalité :
         *            - PJ physique : concerne les individus,
         *            - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations, ...),
         * La personnalité juridique conditionne les droits et obligations.
         *
         * Valeurs :
         * '1'        Personne physique
         * '2'        Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Code qui permet de respecter la dénomination de la personne suivant sa situation de famille.
         * Donnée réglementaire.
         *
         * Valeurs :
         * '1'        MME
         * '2'        MLLE
         * '3'        M
         */
        codeCivilite: string;
    }
    interface IIdentificationProduit {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France.
         * Un Etablissement bancaire peut disposer de plusieurs guichets.
         *
         * Exemples :
         * '90000' : IDF PARIS de la CE Ile de France
         * '00600' : LILLE de la CE Nord France Europe
         */
        codeGuichetInterbancaire: string;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S.
         * Détermine le format de la référence du contrat (produit ou service en gestion : compte, crédit ...).
         *
         * Exemples :
         * '0000'     LIVRET A
         * '0001'     LIVRET EPARGNE SUPPLEMENTAIRE
         * '0002'     COMPTE D INSTANCE
         * '0003'     PLAN EPARGNE RETRAITE
         * '0004'     CDD
         * '0005'     LIVRET EPARGNE POPULAIRE
         * '0006'     CODEVI
         * '0007'     CREDIT PERMANENT ECUREUIL
         * '0008'     COMPTE COURANT ENTREPRISE
         * '0009'     COMPTE A TERME
         */
        codeProduitService: string;
        /**
         * Référence d'identification d'un compte, service, crédit, etc, détenu par un client d'un Etablissement du GCE.
         * Codification spécifique au GCE.
         * Référence établie par le système de gestion spécifique à chaque type de P/S.
         * Exemples de format :
         * Pour les produits radicalisables (hors CCE), le numéro de compte :
         *   - Code produit/service : '00' à '01', '10' à '17', '19' à '21', '48' et '88'
         *   - Radical : Numéro chronologique attribué par le système
         *                     Référence unique par Etablissement et par guichet.
         *   - Clé Modulo 97
         * Pour les prêts de type P000
         *   - Numéro de dossier (7car)
         */
        referenceProduitService: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire.
         * Une ET se compose d'une ou plusieurs personnes.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         * Numéro chronologique attribué par le système :
         *   - P/S simple : référence unique dans MYSYS,
         *   - autres P/S : référence unique par Etablissement.
         */
        identifiantProduitService: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         * Numéro chrono attribué par le système : référence unique dans MYSYS.
         */
        numeroOffre: number;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaireCourte: string;
    }
    interface IDonneeCommuneProduit {
        /**
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha.
         * Nomenclature adoptée par BPCE.
         *
         * Exemples :
         * USD / dollar - USA
         * JPY / yen - JAPON
         * CNY / yuan - CHINE
         * DKK / couronne - DANEMARK
         */
        deviseTenueCompte: string;
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service.
         * Produit ou service souscrit auprès de la clientèle.
         * Situation établie par l'application de gestion.
         *
         * Valeurs :
         * '0'        Produit/Service ouvert
         * '1'        Clôture demandée
         * '2'        Clôture en cours
         * '3'        Produit/Service fermé
         * '8'        Produit/Service en cours d'ouverture
         * '9'        Versements non autorisés
         */
        codeEtatProduitService: string;
        /**
         * Précise s'il existe une opposition active sur un contrat donné (compte, crédit, service, ...).
         *
         * Valeurs :
         * '0'        pas d'opposition
         * '1'        opposition
         */
        indicateurExistenceOpposition: string;
        /**
         * Détermine une variante ou une version de produit/service dans le Catalogue avec des caractéristiques spécifiques.
         * Ce sous code est ajouté au code produit pour déterminer une variante ou version de P/S.
         * Concerne essentiellement des P/S de dépôt-épargne.
         */
        sousCodeProduitService: string;
        /**
         * Détermine si le livret est géré avec un support (matérialisé) ou avec une tenue de compte (dématérialisé).
         *
         * Valeurs :
         * '0'        Support Livret
         * '1'        Relevés de Comptes
         */
        indicateurModeGestionLivret: string;
        /**
         * Le solde du compte est la position du compte en capital à un instant donné (solde magnétique).
         * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
         * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
         * Le solde calculé 'fin de période' sert de base pour établir celui de la période suivante.
         */
        soldeMinuteCompte: number;
        /**
         * Montant reprenant le total des échéances prêts Crédécureuil en Impayé ayant pour compte de prélèvement un CCE donné.
         */
        montantCumuleImpayePret: number;
        /**
         * Charge mensuelle d'endettement.
         */
        chargeMensuelleEndettement: number;
        participantProduit: Array<IParticipantProduit>;
    }
    interface IDonneeSpecifiqueProfilComplet {
        /**
         * Détermine si le compte PEL était en respect au dernier anniversaire contractuel.
         * Donnée établie lors de chaque traitement anniversaire si le terme du contrat n'est pas atteint.
         * Elle peut être modifiée lors de versements rétroactifs à une date anniversaire.
         * Un PEL est considéré "en respect total", à un anniversaire donné, si le solde du compte est >= au solde minimum réglementaire qui varie selon l'ancienneté du compte.
         *
         * Plage de valeurs :
         * 'RT'       Respect au dernier anniversaire
         * 'NR'       Non-Respect au dernier anniversaire
         */
        codeEtatContractuelAnniversaire: string;
        /**
         * Montant du découvert autorisé.
         */
        montantDecouvertAutorise: number;
        /**
         * Montant reprenant le total des opérations en attente de décision dans le MAD pour un CCE donné.
         */
        montantCumuleOperationEcartee: number;
        /**
         * Le montant à régulariser correspond à tout ce qui n'a pas été versé depuis l'ouverture jusqu'à la date de l'opération e en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
         * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
         * Le solde calculé 'fin de période' sert de base pour établir celui de la période suivante.
         */
        montantARegulariser: number;
        /**
         * Montant du versement périodique alimentant un contrat donné.
         * Peut être cadré par la réglementation : fonction de la date de souscription et de la périodicité.
         * Contrôle catalogue possible des montants mini / maxi.
         * Peut faire l'objet d'un engagement du client.
         */
        montantVersementRegulier: number;
        /**
         * Montant des effets encaissement Crédit du mois.
         */
        montantEffetEncaissement: number;
    }
    interface IDonneeSpecifiqueMiniProfil {
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         *
         * Valeurs :
         * 1          Usage privé
         * 2          Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Permet de qualifier le client détenteur d'un contrat.
         *
         * Valeurs :
         * 1          mode simple
         * 2          mode joint entre époux
         * 3          mode joint entre tiers
         * 4          mode indivision
         */
        modeCompositionEntiteTitulaire: string;
    }
    interface IDetailSoldeDisponible {
        montantDecouvertAutorise: number;
        montantEffetEncaissement: number;
        montantCumuleOperationEcartee: number;
        montantCumuleImpayePret: number;
        soldeMinuteCompte: number;
        /**
         * Code etat contractuel anniversaire utilisé par exemple pour l'affichage du texte d'anniversaire PEL.
         */
        codeEtatContractuelAnniversaire: string;
    }
    interface ICaracteristiqueMiniProfil {
        identificationProduit: Array<IIdentificationProduit>;
        donneeCommuneProduit: Array<IDonneeCommuneProduit>;
        donneeSpecfiqueMiniProfil: Array<IDonneeSpecifiqueMiniProfil>;
        donneeSpecifiqueProfilComplet: Array<IDonneeSpecifiqueProfilComplet>;
        detailSoldeDisponible: IDetailSoldeDisponible;
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle contenant toutes les informations nécessaires pour réaliser une opération financière
     */
    class OperationFinanciere {
        /**
         * Le contexte de la saisie de l'opération financière : code établissement, agent, etc ...
         */
        contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere;
        /**
         * Le client concerné par la saisie de l'opération financière
         */
        client: MyWay.Model.Client;
        /**
         * Le compte concerné par l'opération financière
         */
        compte: MyWay.Model.Compte;
        /**
         * La fonctionnalité réalisé par l'opération financière : ouverture cdd, clôture cdd, versement, etc ...
         */
        fonctionnalite: MyWay.Model.Fonctionnalite;
        /**
         * Le montant de l'opération financière
         */
        montant: number;
        /**
         * Le mode financier choisi pour l'opération financière
         */
        modeFinancier: MyWay.Model.ModeFinancier;
        /**
         * Le code de l'opération financière
         */
        codeOperation: string;
        /**
         * Le libellé de l'opération financière
         */
        libelleOperation: myway.comOpesFinancieres.Model.LibelleOperation;
        /**
         * La structure PRVRIO alimenté pour poser la Q/R correspondante à l'opération financière
         */
        segmentPrvRio: myway.comOpesFinancieres.Model.SegmentPRVRIO;
        segmentPrjo: myway.comOpesFinancieres.Model.SegmentPRJO;
        /**
         * Indique si l'opération financière saisie est valide
         */
        estValide: boolean;
        /**
         * Indique par quel canal l'opération financière est réalisée
         * Si canal est déclaré à undefined, il s'agit d'une opération financière en face à face
         * Si canal est défini à TL, il s'agit d'une opération financière à distance
         */
        canal: string;
        /**
         * Indique le mode de vente utilisé pour saisir l'opération financière
         * Uniquement renseigné si le canal est défini (opération à distance)
         * modeDeVente peut prendre les valeurs suivantes : null, IND, VPC, MEGI
         */
        modeDeVente: string;
        /**
         * Indique si l'opération financière est réalisé pour un majeur ou pour un mineur
         * Utilisé uniquement si le canal est défini
         */
        estMajeur: boolean;
        /**
         * Objet contenant le signataire de l'opération financière de type participant
         */
        signataire: MyWay.Model.ParticipantInformationClient;
        /**
         * champ permettant de stocker le nouveau solde du compte utilisé pour le virement après virement
         * uniquement renseigné dans le cadre d'un virement interne
         */
        nouveauSoldeCompteVirementApresVirement: number;
        /**
         * Contient le compte sélectionné dans le virement interne.
         */
        compteVirementInterneSelectionne: MyWay.Model.Contrat;
        /**
         * Objet comprenant le RICE du virement interne saisie.
         */
        riceVirementInterneSaisie: MyWay.Model.Rice;
        /**
         * Champ permettant de stocker le solde du compte utilisé avant virement
         * uniquement pour le virement interne
         */
        soldeCompteAvantVirement: number;
        /**
         * Titre du panel principal de l'opération financière.
         */
        titrePanelPrincipal: string;
        /**
         * Boolean qui indique si on désactive la saisie du montant,
         * si oui on affichera sous forme de texte le montant
         * sinon on affichera le champ de texte
         */
        estDesactiverSaisieMontant: boolean;
        /**
         * Indique si on ouvre la billetterie ou non par défaut.
         */
        billetterieOuvertParDefaut: boolean;
        typeRechercheListeCompteVirementInterne: string;
        /**
         * Permet de spécifier quels codes Etat de contrat sont attendus en résultat de la ressource (par défaut T) :
         * - T : Tous les contrats, actifs et clos.
         * - C : Tous les contrats clos
         * - A : Tous les contrats actifs
         */
        codeEtatRechercheListeCompteVirementInterne: string;
        /**
         * Liste des numéros de personnes à utiliser pour le virement interne.
         * Si on a plusieurs listes de numéros de personne, il faut remplir cet objet pour afficher la liste des comptes
         * correspond dans le virement interne.
         */
        listeNumerosPersonnesPourVirementInterne: string[];
        /**
         * Liste des types de produits à filtrer - Ex : ["0004", "0008"]
         */
        listeTypesProduitsPourVirementInterne: string[];
        /**
         * Boolean qui indique si le processus a forcer une operation financiere.
         * Permet de déclencher les traitements pour afficher les modules etc.
         */
        estForcageOperationFinanciere: boolean;
        /**
         * Contient la liste des operations diverses sélectionnés.
         */
        operationDiverse: MyWay.Model.OperationDiverse;
        /**
         * Contient la référence enveloppe.
         */
        referenceEnveloppe: myway.comOpesFinancieres.Model.ReferenceEnveloppe;
        /**
         * Libelle bénéficiaire utilisé pour les bordereaux de virement immediats.
         */
        libelleBeneficiaire: string;
        /**
         * IBAN bénéficiaire utilisé pour les bordereaux de virement immediats.
         */
        ibanBeneficiaire: string;
        /**
         * BIC bénéficiaire utilisé pour les bordereaux de virement immediats.
         */
        bicBeneficiaire: string;
        /**
         * Contient la répartition.
         */
        repartition: myway.comOpesFinancieres.Model.Repartition;
        /**
         * Liste des chèques déposés (liste de montants)
         */
        plusieursCheques: MyWay.Model.MontantDevise[];
        /**
         * Contient les données sur la facturation d'une prestation pour un retrait avec chèque de banque ou vrac
         */
        facturationPrestation: myway.comOpesFinancieres.Model.FacturationPrestation;
        /**
         * Indique si un libelle d'opération a était personnalisé dans l'objet LibelleOperation.
         * Si oui on ne déclenchera pas le traitement qui récupère le libellé de la caisse par son mode financier
         * au chargement.
         */
        estLibelleOperationPersonnalise: boolean;
        /**
         * Detail du solde récupéré du composant Solde affiché pour certaines fonctionnalités comme DEPOT et RETRAIT par exemple.
         */
        detailDuSolde: IDetailSoldeCompte;
        /**
         * Titulaire du compte pour les Opérations DEPOT et RETRAIT en OAD par exemple
         */
        titulaireCompte: string;
        /**
         * Indique si l'opération de DEPOT et RETRAIT est interne ou non (elle est interne quand le code établissement de l'opération financière est dans la liste des établissements IP1)
         */
        estOperationDepotRetraitInterne: boolean;
        /**
         * Indique si la case à cocher accréditif est coché ou non (utilisé pour les OAD en dépôts)
         */
        accreditifCoche: boolean;
        /**
         * Cheque de banque de l'opération financière.
         */
        chequeBanqueOperation: myway.comOpesFinancieres.Model.ChequeBanqueOperation;
        /**
         * Indique si l'opération de DEPOT et RETRAIT se fait avec une carte Tempo Multi-Fonctions ou non.
         */
        estOperationDepotRetraitCarteTMF: boolean;
        /**
         * Stocke la référence de l'OAD.
         */
        referenceOAD: string;
    }
    /**
     *  Contient l'id du champ en erreur et son message d'erreur lors d'une opération financière non valide.
     */
    class ChampErreurOperationFinanciere {
        idChampErreurOpeFi: string;
        messageErreurChampErreurOpeFi: string;
    }
}

declare module myway.comOpesFinancieres.Model {
    interface IParamPlafondVersementRessource {
        codeEtablissement: string;
        modeFinancier: string;
        codeProduit: string;
    }
    interface IPlafondVersement {
        codeEtablissement: string;
        modeFinancier: string;
        codeProduit: string;
        codeDevise: string;
        montantPlafondVersement: number;
        indicateurForcageOperation: boolean;
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle permettant de gérer les références enveloppes pour le mode financier "Espèces divers"
     */
    class ReferenceEnveloppe {
        /**
         * numéro de la référence enveloppe saisi lors d'une opération financière
         */
        numeroReferenceEnveloppe: string;
        /**
         * indique si référence enveloppe sac est cochée ou pas
         */
        isCocher: boolean;
        constructor(isCocher: boolean, numeroReferenceEnveloppe: string);
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle permettant de gérer les paramètres d'entrée de la directive repartition d'opération financière
     */
    class ParametreRepartition {
        montantTotal: MyWay.Model.MontantDevise;
        iban: string;
        rice: MyWay.Model.Rice;
        parametreListeComptes: MyWay.Model.ParametresListeComptes;
        constructor(paramLC?: MyWay.Model.ParametresListeComptes, montantTotal?: MyWay.Model.MontantDevise, rice?: MyWay.Model.Rice, iban?: string);
    }
    /**
     * Modèle permettant de gérer le ng-model de la directive repartition d'opération financière
     */
    class Repartition {
        montantDevise1: MyWay.Model.MontantDevise;
        libelle1: string;
        montantDevise2: MyWay.Model.MontantDevise;
        libelle2: string;
        compteCredite2: MyWay.Model.Contrat;
        rice2: MyWay.Model.Rice;
        compteCredite3: MyWay.Model.Contrat;
        montantDevise3: MyWay.Model.MontantDevise;
        libelle3: string;
        rice3: MyWay.Model.Rice;
        isValid: boolean;
        constructor(montant1?: MyWay.Model.MontantDevise, libelle1?: string, montant2?: MyWay.Model.MontantDevise, libelle2?: string, compteCredite2?: MyWay.Model.Contrat, rice2?: MyWay.Model.Rice, montant3?: MyWay.Model.MontantDevise, libelle3?: string, compteCredite3?: MyWay.Model.Contrat, rice3?: MyWay.Model.Rice);
        private valideRepartition();
        getIsValid(): void;
        private verifieLiaison(compte, montant, libelle, rice);
    }
}

/**
 * Ressource : /tarification/v1/tarificationPrestation
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/tarification/tarificationPrestation
 * Fichier généré le : 2017-06-02
 */
declare module myway.comOpesFinancieres {
    interface ITarificationPrestation {
        /**
         * Code Etab Banque Entité Juridique.
         *
         * Correspond au code Banque sous lequel une Caisse ou
         * un Etablissement du réseau CE est répertoriée par la
         * Banque de France
         */
        codeEtablissement?: string;
        /**
         * Code externe d'identification d'une prestation
         * tarifiable ( automatique ou non ) :
         * code connu du domaine tarifant.
         */
        codePrestationTarifiable?: number;
        /**
         * Montant de référence de la prestation.
         *
         * Le montant de la prestation permet de calculer son
         * prix lorsque celui ci doit être proportionnel au
         * montant.
         *
         * exemple : cas des remboursements anticipés de prêts
         * dont le prix correspond à un pourcentage du capital
         * restant dû.
         */
        montantDeReferencePrestation?: number;
        /**
         * Date d'application de la tarification
         */
        dateApplication?: string;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement du GCE.
         * Synonyme : Client bancaire
         */
        numeroEntiteTitulaire?: number;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement
         */
        identifiantPersonne?: number;
        /**
         * C'est le prix normal avant toute remise
         * ou réduction.
         */
        montantATariferInitial?: number;
        /**
         * Montant à tarifer.
         *
         * HT + TVA (sur HT) + Frais Refacturés
         */
        montantATarifer?: number;
        /**
         * Libellé PTU prestation tarifiable
         */
        libellePrestationTarifiable?: string;
        /**
         * Détermine une monnaie / devise selon la nomenclature
         * ISO 4217 alpha
         */
        monnaieMontantReference?: string;
    }
}

declare module myway.comOpesFinancieres {
    class OperationDiverseListeController {
        private $scope;
        private operationDiverseService;
        private $q;
        static $inject: string[];
        /** Boolean qui indique le chargement. */
        estEnChargement: boolean;
        rice: MyWay.Model.Rice;
        segmentPrjo: myway.comOpesFinancieres.Model.SegmentPRJO;
        montant: number;
        fonctionnalite: MyWay.Model.Fonctionnalite;
        devise: MyWay.Model.Devise;
        isAfficherLibelleUlip06: boolean;
        isAfficherLibelleUlip08: boolean;
        texteLibelleUlip06: string;
        texteLibelleUlip07: string;
        texteLibelleUlip08: string;
        saisieLibelleUlip08: string;
        saisieLibelleUlip06: string;
        saisieLibelleUlip07: string;
        verificationDesChampsRequis: boolean;
        champRequisUlip07: boolean;
        champRequisUlip06: boolean;
        isAfficherMessageNumeroCommande: boolean;
        isAfficherMessageSaisieObligatoireUlip06: boolean;
        isAfficherMessageSaisieObligatoireUlip07: boolean;
        estOperationDiverse: boolean;
        messageErreurSaisieObligatoire: string;
        messageErreurSaisieNumeroCommande: string;
        libelleCodeFamille: string;
        libelleFamille: string;
        libelleCodeType: string;
        libelleType: string;
        codeIdentificationRequete: string;
        indicateurZoneTiers: string;
        indicateurZoneObjet: string;
        static CODE_TYPE_OD_ICCC: string;
        static INDICATEUR_ZONE_OBJET_A_O_OD: string;
        static TEXTE_MESSAGE_ERREUR_SAISIE_OBLIGATOIRE_OD: string;
        static TEXTE_MESSAGE_ERREUR_SAISIE_NUM_COMMANDE_OD: string;
        estOperationDiverseValide: boolean;
        estForcageOperationFinanciere: boolean;
        listeTypeOperationDiverse: MyWay.Model.TypeOperationDiverse[];
        isAfficherBlocSaisieLibelle: boolean;
        tableauDesRegroupements: MyWay.Model.TableauDeRegroupementOperationDiverse;
        listeFamilleParSens: MyWay.Model.FamilleOperationDiverse[];
        listeOperationDiverse: MyWay.Model.OperationDiverse;
        codeInterneRattachementGuichetComptable: string;
        typeRattachementGuichetComptable: string;
        codeGuichetInterbancaire: string;
        dateOperationJourneeComptable: string;
        ancienMontantOpeFi: number;
        typeOdChoix: MyWay.Model.TypeOperationDiverse;
        familleOdChoix: MyWay.Model.FamilleOperationDiverse;
        constructor($scope: ng.IScope, operationDiverseService: OperationDiverseService, $q: ng.IQService);
        /**
         * Initialisation de la liste déroulante
         */
        initialisationListeDeroulante(): ng.IPromise<void>;
        /**
         * Permet d'initialiser les types d'OD à partir d'une famille en paramètre.
         * @param {MyWay.Model.TypeOperationDiverse[]} listeTypesParFamille
         * @returns MyWay.Model.TypeOperationDiverse[]
         */
        private initialisationListeType(listeTypesParFamille);
        /**
         * Permet d'initialiser les données et variables.
         */
        private initialisationDonneesVariables();
        /**
         * Sélection d'une OD
         */
        selectionOD(): void;
        /**
         * Permet de vérifier si les champs sont bien remplis.
         */
        validationOperationDiverse(): void;
        /**
         * Permet d'inialiser les familles.
         * @returns ng.IPromise<void>
         */
        private initialisationFamilles();
    }
}

declare module myway.comOpesFinancieres {
    function mwsfOperationDiverseListe(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class OperationDiverseController implements MyWay.UI.INavcolHandler {
        private $scope;
        private operationDiverseService;
        private $q;
        static $inject: string[];
        rice: MyWay.Model.Rice;
        segmentPrjo: myway.comOpesFinancieres.Model.SegmentPRJO;
        listeOperationDiverse: MyWay.Model.OperationDiverse;
        codeInterneRattachementGuichetComptable: string;
        typeRattachementGuichetComptable: string;
        codeGuichetInterbancaire: string;
        montant: number;
        fonctionnalite: MyWay.Model.Fonctionnalite;
        devise: MyWay.Model.Devise;
        listeTypeOperationDiverse: MyWay.Model.TypeOperationDiverse[];
        tableauDesRegroupements: MyWay.Model.TableauDeRegroupementOperationDiverse;
        listeFamilleParSens: MyWay.Model.FamilleOperationDiverse[];
        dateOperationJourneeComptable: string;
        isAfficherBlocSaisieLibelle: boolean;
        isAfficherLibelleUlip06: boolean;
        isAfficherLibelleUlip08: boolean;
        texteLibelleUlip06: string;
        texteLibelleUlip07: string;
        texteLibelleUlip08: string;
        saisieLibelleUlip08: string;
        saisieLibelleUlip06: string;
        saisieLibelleUlip07: string;
        libelleCodeFamille: string;
        libelleFamille: string;
        libelleCodeType: string;
        libelleType: string;
        messageErreurSaisieNumeroCommande: string;
        static TEXTE_MESSAGE_ERREUR_SAISIE_NUM_COMMANDE_OD: string;
        messageErreurSaisieObligatoire: string;
        static TEXTE_MESSAGE_ERREUR_SAISIE_OBLIGATOIRE_OD: string;
        static INDICATEUR_ZONE_OBJET_A_O_OD: string;
        isAfficherMessageNumeroCommande: boolean;
        isAfficherMessageSaisieObligatoireUlip06: boolean;
        isAfficherMessageSaisieObligatoireUlip07: boolean;
        codeIdentificationRequete: string;
        indicateurZoneTiers: string;
        indicateurZoneObjet: string;
        operationDiverseSearch: string;
        estOperationDiverse: boolean;
        familleOdChoix: MyWay.Model.FamilleOperationDiverse;
        typeOdChoix: MyWay.Model.TypeOperationDiverse;
        static CODE_TYPE_OD_ICCC: string;
        static MONTANT_COMMISSION_A_ZERO_OD: number;
        static TEST_MONTANT_A_ZERO_OD: number;
        static ID_COLONNE_FAMILLE_COMPOSANT_COLONNE_OD: string;
        static ID_COLONNE_TYPE_COMPOSANT_COLONNE_OD: string;
        static FORMAT_DATE_JOURNEE_COMPTABLE: string;
        estOperationDiverseValide: boolean;
        static TEXTE_TITRE_OPERATION_DIVERSE: string;
        titrePanneauRetractableOperationDiverse: string;
        estOuvertPanneau: boolean;
        estForcageOperationFinanciere: boolean;
        estListeTypesODVide: boolean;
        ancienMontantOpeFi: number;
        estEnChargement: boolean;
        familleSelectionneForcage: MyWay.Model.FamilleOperationDiverse;
        indexFamilleSelectionneForcage: number;
        indexTypeSelectionneForcage: number;
        typeSelectionneForcage: MyWay.Model.TypeOperationDiverse;
        verificationDesChampsRequis: boolean;
        champRequisUlip07: boolean;
        champRequisUlip06: boolean;
        constructor($scope: ng.IScope, operationDiverseService: OperationDiverseService, $q: ng.IQService);
        /**
         * Permet d'initialiser les données et variables.
         */
        initialisationVariablesEtDonnes(): void;
        /**
         * Permet de vérifier si les champs sont bien remplis.
         */
        validationOperationDiverse(): void;
        /**
         * Permet d'inialiser les familles.
         * @returns ng.IPromise<void>
         */
        private initialisationFamilles();
        /**
         * Permet d'initialiser les types d'OD à partir d'une famille en paramètre.
         * @param {MyWay.Model.TypeOperationDiverse[]} listeTypesParFamille
         * @returns MyWay.Model.TypeOperationDiverse[]
         */
        private initialisationListeType(listeTypesParFamille);
        /**
         * Composant navigation en colonne. Se déclenche a chaque clic d'une ligne
         * @param {any} selectionCol
         * @param {string} colId
         */
        onSelectionChangeNavcolList(selectionCol: any, colId: string): void;
        /**
         * Composant navigation en colonne. Définit la recherche.
         * @param {string} critere
         */
        onNavcolRecherche(critere: string): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfOperationDiverse(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class OperationDiverseService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private TEXTE_DEVISE_EURO;
        private TABLE_DELOC_JU2A_FAMILLES;
        private TABLE_DELOC_JU2C_TYPES;
        private TABLE_DELOC_JU2B_CODE_REGROUPEMENT;
        private PROPRIETE_TABLE_DELOC_COJOFA;
        private PROPRIETE_TABLE_DELOC_YNOXCE;
        private TEXTE_REMBOURSEMENT;
        private TEXTE_CODE_R;
        private TEXTE_CODE_V;
        private TEXTE_VERSEMENT;
        private TEXTE_SEGMENTPRVRIO_MAJ;
        private TEXTE_QUATRE_ETOILES;
        private TEXTE_NOM_MODEL_REGROUPEMENT_OD;
        private TEXTE_MODE_APPARITION_CL;
        private TEXTE_DEUX_ETOILES;
        private TEXTE_UNE_ETOILE;
        private TEXTE_VERSEMENT_SIMPLE_MAJ;
        private TEXTE_CODE_DECOUPAGE_ZZ;
        private CODE_INTERDIT_OD_J17O5G01;
        private CODE_INTERDIT_OD_J17O3G01;
        private CODE_INTERDIT_OD_J17O4A01;
        private TEXTE_OUI_O;
        private CODE_RATTACHEMENT_GUICHET_COMPTABLE_AGENCE_OD_003;
        private TEXTE_NOM_MODEL_FAMILLE_OD;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupère la liste de toute les familles via les donnees delocalisees.
         * @returns {ng.IPromise<MyWay.Model.FamilleOperationDiverse[]>}.
         */
        getAllFamilles(): ng.IPromise<MyWay.Model.FamilleOperationDiverse[]>;
        /**
         * Permet de récupérer un type d'OD par son code.
         * @param {string} codeType COJXHD
         * @param {string} codeGuichet YNOXCE
         * @param {string} codeFamille COJOFA
         * @returns ng.IPromise<MyWay.Model.TypeOperationDiverse>
         */
        getTypeParCodeTypeEtCodeFamille(codeType: string, codeGuichet: string, codeFamille: string): ng.IPromise<MyWay.Model.TypeOperationDiverse>;
        /**
         * Permet de récupérer une famille d'OD par son code.
         * @param {string} codeFamille
         * @param {string} codeGuichet
         * @returns ng.IPromise<MyWay.Model.FamilleOperationDiverse>
         */
        getFamilleParCodeFamille(codeFamille: string, codeGuichet: string): ng.IPromise<MyWay.Model.FamilleOperationDiverse>;
        /**
         * Permet de récupérer et de filtrer toutes les familles d'Opérations Diverses
         * @param {string} codeInterneRattachementGuichetComptable
         * @param {string} codeGuichetInterbancaire
         * @param {string} typeRattachementGuichetComptable
         * @param {number} montant
         * @returns ng.IPromise<MyWay.Model.FamilleOperationDiverse[]>
         */
        getFamillesFiltre(codeInterneRattachementGuichetComptable: string, codeGuichetInterbancaire: string, typeRattachementGuichetComptable: string, montant: number): ng.IPromise<MyWay.Model.FamilleOperationDiverse[]>;
        /**
         * Permet de tester la validite d'un filtre de famille d'OD par rapport au montant et à son code CIJOAS
         * @param {number} montant
         * @param {string} codeFamilleOd
         * @returns boolean
         */
        testValiditeFamilleOdFiltre3(montant: number, codeFamilleOd: string): boolean;
        /**
         * Permet de filtrer les types d'OD
         * @param {MyWay.Model.TypeOperationDiverse[]} listeType
         * @param {string} typeRattachementGuichetComptable
         * @param {MyWay.Model.TableauDeRegroupementOperationDiverse} tableauDesRegroupements
         * @param {number} montant
         * @param {string} dateJourneeComptable
         * @param {string} devise
         * @param {string} codeFonctionnalite
         * @returns MyWay.Model.TypeOperationDiverse[]
         */
        getTypesFiltre(listeType: MyWay.Model.TypeOperationDiverse[], typeRattachementGuichetComptable: string, tableauDesRegroupements: MyWay.Model.TableauDeRegroupementOperationDiverse, montant: number, dateJourneeComptable: string, devise: string, codeFonctionnalite: string): MyWay.Model.TypeOperationDiverse[];
        /**
         * Permet de tester la validite d'un type d'OD par rapport à des codes interdits.
         * @param {string} codeTypeOD
         * @returns
         */
        testValiditeTypeOdFiltre5(codeTypeOD: string): boolean;
        /**
         * Permet de tester la validite d'un type d'OD par rapport à la date de journee comptable.
         * @param {string} dateDebutDDEXPH
         * @param {string} dateFinDFJOVA
         * @param {string} dateJourneeComptable
         * @returns
         */
        testValiditeTypeOdFiltre4(dateDebutDDEXPH: string, dateFinDFJOVA: string, dateJourneeComptable: string): boolean;
        /**
         * Permet de tester la validite d'un type d'OD par rapport la devise et à un code.
         * @param {string} decoupageCodeOperationDiverse
         * @param {string} devise
         * @param {string} codeFonctionnalite
         * @returns
         */
        testValiditeTypeOdFiltre6(decoupageCodeOperationDiverse: string, devise: string, codeFonctionnalite: string): boolean;
        /**
         * Permet de récupérer tous les types par rapport à une famille sélectionné
         * @param {string} familleSelectionne
         * @param {string} codeGuichet
         * @returns ng.IPromise<MyWay.Model.TypeOperationDiverse[]>
         */
        getAllTypesParFamilleSelectionne(familleSelectionne: string, codeGuichet: string): ng.IPromise<MyWay.Model.TypeOperationDiverse[]>;
        /**
         * Permet de récupérer tous les codes de regroupements
         * @param {string} codeInterneRattachementEds
         * @param {string} codeGuichetInterbancaire
         * @returns ng.IPromise<MyWay.Model.TableauDeRegroupementOperationDiverse>
         */
        getAllCodeRegroupement(codeInterneRattachementEds: string, codeGuichetInterbancaire: string): ng.IPromise<MyWay.Model.TableauDeRegroupementOperationDiverse>;
        /**
         * Permet de récupérer les parametres comptables
         * @returns
         */
        getParametresComptables(): ng.IPromise<MyWay.Services.Context.ParametresComptables>;
        /**
         * Permet de récupérer la devise
         * @returns {ng.IPromise<string>}.
         */
        getDevise(): ng.IPromise<string>;
        /**
         * Permet de filtrer les types pour l'affichage IHM
         * @param {MyWay.Model.TypeOperationDiverse[]} listeTypes
         * @returns MyWay.Model.TypeOperationDiverse[]
         */
        getTypesPourAffichage(listeTypes: MyWay.Model.TypeOperationDiverse[]): MyWay.Model.TypeOperationDiverse[];
        /**
         * Permet de trier les types
         * @param {MyWay.Model.TypeOperationDiverse} typeOd
         * @returns
         */
        private triTypesOd(typeOd);
    }
}

declare module myway.comOpesFinancieres {
    class OperationFinanciereExtourneController {
        private $scope;
        private operationFinanciereService;
        private operationDiverseService;
        private $q;
        static $inject: string[];
        operationFinanciere: Model.OperationFinanciere;
        libelleMontant: string;
        /** Objet de type Contrat pour le solde. */
        comptePourLeSolde: MyWay.Model.Contrat;
        /** Type d'affichage du solde (ici : actuel) */
        typeAffichageSolde: TypeAffichageSolde;
        afficherSolde: boolean;
        afficherReserveEncaissement: boolean;
        afficherReferenceSac: boolean;
        afficherOD: boolean;
        afficherChequeBanque: boolean;
        afficherTitulaireCompte: boolean;
        afficherDateValeur: boolean;
        afficherReferenceOAD: boolean;
        chargement: boolean;
        dateValeur: string;
        libelleOperationDiverse: string;
        libelleReserveEncaissement: string;
        constructor($scope: ng.IScope, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, operationDiverseService: myway.comOpesFinancieres.OperationDiverseService, $q: ng.IQService);
        /**
         * Traitement d'affichage ou non de la date de valeur
         * @param dateValeur Date de valeur
         */
        traitementDateDevaleur(dateValeur: Date): boolean;
        /**
         * Traitement pour le composant Sold
         * @param rice RICE du compte
         * @param devise Devise du compte
         */
        traitementPourLeSolde(rice: MyWay.Model.Rice, devise: MyWay.Model.Devise): MyWay.Model.Contrat;
        /**
         * Traitement de la réserve d'encaissement
         * @param codeModeFinancier Code mode financier
         * @param nombreJoursReserve Nombre de jours de réserve d'encaissement
         */
        traitementReserveEncaissement(codeModeFinancier: string, nombreJoursReserve: string): void;
        /**
         * Traitement pour afficher ou non le titulaire du compte
         */
        traitementAfficherReferenceOAD(fonctionnalite: MyWay.Model.Fonctionnalite, referenceOAD: string): boolean;
        /**
         * Traitement pour afficher ou non le titulaire du compte
         */
        traitementAfficherTitulaireCompte(fonctionnalite: MyWay.Model.Fonctionnalite, titulaireCompte: string): boolean;
        /**
         * Traitement pour la référence sac
         * @param codeModeFinancier Code mode financier
         */
        traitementReferenceSac(codeModeFinancier: string): void;
        /**
         * Traitement du mode financier OD
         * @param codeModeFinancier Code mode financier
         */
        traitementModeFinancierOD(codeModeFinancier: string): ng.IPromise<MyWay.Model.OperationDiverse>;
        /**
         * Modification du libellé d'opération
         */
        modificationLibelleOperation(): void;
        /**
         * Récupère le libellé du montant en fonction de la fonctionnalité.
         * @param fonctionnalite Fonctionnalite
         */
        getLibelleMontant(fonctionnalite: string): string;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfOperationFinanciereExtourne(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class PlusieursChequesController {
        private $scope;
        private serviceAgentExtended;
        private montantDepose;
        private $modalInstance;
        private data;
        private chequesSaisis;
        private modalService;
        private $timeout;
        static $inject: string[];
        cheques: MyWay.Model.MontantDevise[];
        montantTotal: MyWay.Model.MontantDevise;
        total: number;
        focus: boolean[];
        visibles: boolean[];
        deuxMontantsSaisis: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, montantDepose: MyWay.Model.MontantDevise, $modalInstance: any, data: any, chequesSaisis: MyWay.Model.MontantDevise[], modalService: MyWay.UI.ModalService, $timeout: ng.ITimeoutService);
        /**
         * Calcule la somme des montants saisis et la retourne
         */
        calculTotal(): number;
        /**
         * Action du clic sur le bouton valider :
         * Si la somme des montants saisis est différente du montant déposé on affiche la popup d'alerte
         */
        valider(): void;
        /**
         * Action du clic sur le bouton réinitialiser :
         * Vide tous les montants saisis
         */
        reinitialiser(): void;
        /**
         * Action du clic sur le bouton annuler :
         * ferme la popup et retourne les cheques saisis
         */
        annuler(): void;
        /**
         * A la fermeture de la popup on envoie à l'appelant la liste des montants saisis et on supprime les montant initialisés à 0
         */
        private supprimerMontantsVides();
        /**
         * action sur la touche tabulation : affiche le champs montant suivant et lui donne le focus
         * @param index montant en cours de saisie
         */
        donneFocusAuMontantSuivant(index: number): void;
        /**
         * action sur le clic d'un champs montant (affiche le montant suivant)
         * @param index
         */
        afficheMontantSuivant(index: number): void;
        /**
         * action sur la touche entrée : simule la sortie du champs montant saisi (pour prise en compte du total) et valide le formulaire
         * @param index montant en cours de saisie
         */
        actionEntree(index: number): void;
        getConditionAffichageMontants(index: number): boolean;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfPlusieursCheques(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class PlusieursChequesService {
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        /**
         * Ouvre la modale Plusieurs chèques
         */
        ouvrirPlusieursCheques(montantDepose: MyWay.Model.MontantDevise, chequesSaisis?: MyWay.Model.MontantDevise[]): ng.IPromise<MyWay.Model.MontantDevise[]>;
    }
}

declare module myway.comOpesFinancieres {
    class SaisirReferenceEnveloppeControleur {
        private $scope;
        private $q;
        private saisieReferenceEnveloppeService;
        static $inject: string[];
        referenceEnveloppe: myway.comOpesFinancieres.Model.ReferenceEnveloppe;
        setFocus: boolean;
        modeFinancier: string;
        isVisible: boolean;
        isNumeroEnveloppeVisible: boolean;
        isDesactiverCochage: boolean;
        isAfficherMessage: boolean;
        isNumeroEnveloppeSaisit: boolean;
        texteMessageConfirmation: string;
        isHabilitationSHJE07: boolean;
        isHabilitationSHJE06: boolean;
        isHabilitationSHJE05: boolean;
        static MAX_NOMBRE_REFERENCE_ENVELOPPE: number;
        static MESSAGE_CONFIRMATION_REFERENCE_ENVELOPPE: string;
        constructor($scope: ng.IScope, $q: ng.IQService, saisieReferenceEnveloppeService: SaisieReferenceEnveloppeService);
        /**
         * Génère l'état de la case à cocher au clic.
         * Attention l'état de l'objet reference.isCocher se met à jour après le click
         * C'est pour cela que les tests (des if en dessous) sont inversés
         */
        clicCaseACocherRefEnveloppe(): void;
        /**
         * Permet de récupérer les habilitations via le service agent.
         */
        recuperationHabilitation(): void;
        /**
         * Afficher ou non le composant ReferenceEnveloppe en fonction du mode financier sélectionné et de l'habilitation.
         * @param {string} modeFinancier
         * @returns {afficherReference}.
         */
        afficherOuNonReference(modeFinancier: string): boolean;
        /**
         * Ajout du chiffre 0 devant la reference enveloppe pour avoir un total de 10 chiffres.
         * @param {string} numeroReferenceEnveloppe
         */
        affinerNumeroEnveloppe(numeroReferenceEnveloppe: string): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfSaisieReferenceEnveloppe(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class SaisieReferenceEnveloppeService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne un tableau de boolean indiquant pour chaque habilitation SHJE05, SHJE06 ou SHJE07 si on est habilite.
         * @returns ng.IPromise<boolean[]>
         */
        estHabilite(): ng.IPromise<boolean[]>;
    }
}

declare module myway.comOpesFinancieres {
    class ReferenceEnveloppeOperationControleur {
        private $scope;
        private $q;
        private saisieReferenceEnveloppeService;
        static $inject: string[];
        referenceEnveloppe: myway.comOpesFinancieres.Model.ReferenceEnveloppe;
        setFocus: boolean;
        modeFinancier: string;
        isVisible: boolean;
        isNumeroEnveloppeVisible: boolean;
        /** Indique si la saisie de la référence sac est obligatoire ou non. */
        saisieReferenceSacObligatoire: boolean;
        /** Indique si on doit afficher le message d'erreur de saisie. */
        afficherMessageErreurReferenceSac: boolean;
        isNumeroEnveloppeSaisit: boolean;
        isHabilitationSHJE07: boolean;
        isHabilitationSHJE06: boolean;
        isHabilitationSHJE05: boolean;
        static MAX_NOMBRE_REFERENCE_ENVELOPPE: number;
        texteMessageConfirmation: string;
        static MESSAGE_CONFIRMATION_REFERENCE_ENVELOPPE: string;
        constructor($scope: ng.IScope, $q: ng.IQService, saisieReferenceEnveloppeService: SaisieReferenceEnveloppeService);
        /**
         * Permet de récupérer les habilitations via le service agent.
         */
        recuperationHabilitation(): void;
        /**
         * Afficher ou non le composant ReferenceEnveloppe en fonction du mode financier sélectionné et de l'habilitation.
         * @param {string} modeFinancier
         * @returns {afficherReference}.
         */
        afficherOuNonReference(modeFinancier: string): boolean;
        /**
         * Ajout du chiffre 0 devant la reference enveloppe pour avoir un total de 10 chiffres.
         * @param {string} numeroReferenceEnveloppe
         */
        affinerNumeroEnveloppe(numeroReferenceEnveloppe: string): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfReferenceEnveloppeOperation(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class ReferenceEnveloppeOperationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne un tableau de boolean indiquant pour chaque habilitation SHJE05, SHJE06 ou SHJE07 si on est habilite.
         * @returns ng.IPromise<boolean[]>
         */
        estHabilite(): ng.IPromise<boolean[]>;
    }
}

declare module myway.comOpesFinancieres {
    class RepartitionController {
        private $scope;
        private serviceAgentExtended;
        private $modalInstance;
        private data;
        private parametre;
        private modalService;
        static $inject: string[];
        donnees: myway.comOpesFinancieres.Model.Repartition;
        max: number;
        parametreListeComptes2: MyWay.Model.ParametresListeComptes;
        parametreListeComptes3: MyWay.Model.ParametresListeComptes;
        static libelleParDefaut: string;
        differenceRepartition: number;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $modalInstance: any, data: any, parametre: myway.comOpesFinancieres.Model.ParametreRepartition, modalService: MyWay.UI.ModalService);
        /**
         * Si la différence entre le montant initial et les sommes saisis vaut 0 on valide les autres champs sinon le formulaire n'est pas valide
         */
        private verifieChampsSaisisModeRepartition();
        /**
         * Iinitialise les objets de la popup
         */
        private initData();
        /**
         * Action de la sélection du compte crédité 2
         */
        onSelect2(): void;
        /**
         * Action de la sélection du compte crédité 3
         */
        onSelect3(): void;
        /**
         * Convertit l'IBAN en RICE
         */
        private convertIbanToRice();
        /**
         * Action lors du clic sur le bouton valider, on vide les champs initialisés mais non saisis et on ferme la popup
         */
        valider(): void;
    }
}


declare module myway.comOpesFinancieres {
    class RepartitionService {
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        /**
         * Ouvre la modale Répartition
         */
        ouvrirRepartition(parametre: myway.comOpesFinancieres.Model.ParametreRepartition): ng.IPromise<myway.comOpesFinancieres.Model.Repartition>;
    }
}

declare module myway.comOpesFinancieres {
    class SaisieOperationFinanciereController {
        private $scope;
        private serviceAgentExtended;
        private operationFinanciereService;
        private compteService;
        private modeFinancierService;
        deviseService: myway.comInterdomaine.DeviseService;
        private modalService;
        private interDomainCoreService;
        private $q;
        private repartitionService;
        private plusieursChequesService;
        private facturationAutomatiqueService;
        private miniProfilService;
        private carteTempoMultiFonctionsService;
        private caisseAutoService;
        private saisieRiceService;
        static $inject: string[];
        /**
         * indique s'il faut afficher le rice ou pas.
         */
        afficherRice: boolean;
        /**
         * Parametre entree du composant.
         */
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        /**
         * Boolean qui affiche le bouton de répartition en fonction du mode financier.
         */
        afficherRepartitionParModeFinancier: boolean;
        /**
         * Boolean qui affiche le bouton de répartition en fonction de la fonctionnalité.
         */
        afficherRepartitionParFonctionnalite: boolean;
        /**
         * Indique si on affiche ou non le vrac pour mode financier.
         */
        afficherVracParModeFinancier: boolean;
        afficherVracParFonctionnalite: boolean;
        /**
         * Objet comprenant la référence enveloppe.
         */
        referenceEnveloppe: myway.comOpesFinancieres.Model.ReferenceEnveloppe;
        /**
         * Comprend la date de valeur des informations complèmentaires.
         */
        dateValeur: Date;
        /**
         * Indique si on affiche non la billetterie.
         */
        isAfficherBilletterie: boolean;
        /**
         * Montant de la billetterie.
         */
        montantBilletterie: number;
        /**
         * Objet comprenant toutes les coupures de la billetterie.
         */
        coupure: MyWay.Model.Coupure;
        /**
         * Indique si on affiche ou non la reference identite.
         */
        afficherReferenceIdentite: boolean;
        /**
         * Indique si on affiche ou non les operations diverses.
         */
        afficherOperationDiverse: boolean;
        /**
         * Objet comprenant l'Operation Diverse (Famille + type) sélectionné.
         */
        listeOperationDiverse: MyWay.Model.OperationDiverse;
        reserveEncaissement: MyWay.Model.ReserveEncaissement;
        /**
         * Indique si on affiche ou non la réserve d'encaissement.
         */
        afficherReserveEncaissement: boolean;
        /**
         * Indique si on affiche ou non le virement interne.
         */
        afficherVirementInterne: boolean;
        /**
         * Objet comprenant le RICE du virement interne.
         */
        riceVirementInterneSaisie: MyWay.Model.Rice;
        /**
         * Indique si on affiche ou non le chèque de banque.
         */
        afficherChequeBanque: boolean;
        /**
         * Indique si on affiche ou non le solde.
         */
        afficherSolde: boolean;
        /**
         * Objet comprenant le participant selectionne.
         */
        participantSelectionne: MyWay.Model.ParticipantInformationClient[];
        /**
         * Indique si on desactive ou non le montant.
         */
        montantDesactive: boolean;
        /**
         * Indique si on desactive ou non le signe moins pour le montant.
         */
        desactiveSigneMoins: boolean;
        /**
         * Montannt minimum.
         */
        montantMinimum: number;
        /**
         * Code du mode financier par defaut à afficher au chargement.
         */
        codeModeFinancierParDefaut: string;
        /**
         * Libelle operation memorise.
         */
        libelleOperationMemorise: myway.comOpesFinancieres.Model.LibelleOperation;
        /**
         * Libelle operation 1 memorise.
         */
        libelleOperation1Memorise: string;
        /**
         * Type de recherche de compte.
         */
        typeRechercheCompte: string;
        /**
         * Objet du composant de montant.
         */
        montantDevise: MyWay.Model.MontantDevise;
        /**
         * Code d'identifiant du processus.
         */
        /**
         * Clé du segment principal.
         */
        private cleSegmentPrvRrio;
        /**
         * Indique si l'Operation Diverse est valide (champ requis saisis).
         */
        estOperationDiverseValide: boolean;
        /**
         * Indique si le montant est vide pour afficher ou non les OD.
         */
        estMontantVidePourOd: boolean;
        /**
         * Indique si le libelle d'operation a été modifié manuellement.
         */
        estModificationManuelleLibelleOperation: boolean;
        /**
         * Niveau par defaut des panels interieurs à 3.
         */
        static NIVEAU_DEFAUT_INTERIEUR_PANEL: string;
        /**
         * Définit le niveau interieur des panels.
         */
        niveauInterieurPanel: string;
        /**
         * Niveau par defaut des panels interieurs à 3.
         */
        static NIVEAU_DEFAUT_PANEL_PRINCIPAL: string;
        /**
         * Définit le niveau interieur des panels.
         */
        niveauPanelPrincipal: string;
        estExtourne: boolean;
        /**
         * Texte du message de montant maximum de plafond de versement.
         */
        static TEXTE_PLAFOND_VERSEMENT: string;
        /**
         * Texte d'erreur du montan maximum du plafond de versement.
         */
        texteErreurPlafondMaximumVersement: string;
        /**
         * Indique le montant maximum du plafond de versement.
         */
        montantMaximumPlafondVersement: number;
        /**
         * Indique la devise du plafond de versement.
         */
        devisePlafondVersement: string;
        /**
         * Indique si on affiche ou non le message d'erreur de plafond de versement.
         */
        estAfficherMessageErreurPlafondVersement: boolean;
        /**
         * Bolean du required pour afficher l'étoile sur le mode financier en le rendant obligatoire.
         */
        modeFinancierObligatoire: boolean;
        /**
         * Boolean qui indique si on affiche la popup de confirmation de forcage du seuil.
         * Si false c'est qu'elle a déjà était ouverte
         */
        estAfficherPopupPlafondVersement: boolean;
        /**
         * Contient la référence identité correspondant au champ de l'IHM.
         */
        referenceIdentite: string;
        /**
         * Indique si le libelle d'opération est vide.
         */
        estLibelleOperationVide: boolean;
        plafondVersement: myway.comOpesFinancieres.Model.IPlafondVersement;
        private debounceChargerPlafondVersement;
        billetterieAutoPourBascule: boolean;
        comptePourLeSolde: MyWay.Model.Contrat;
        /**
         * Type d'affichage du solde (ici : actuel)
         */
        typeAffichageSolde: TypeAffichageSolde;
        /**
         * Indique s'il y a un traitement.
         */
        estTraitementTermine: ng.IPromise<void>;
        private estTraitementTermineDeferred;
        private estTraitementMontantTermine;
        private estTraitementRiceTermine;
        /**  Libelle du montant. */
        libelleMontant: string;
        /**
         * Indique si on affiche ou non le bouton 'Plusieurs chèques' en fonction de la fonctionnalité
         */
        afficherPlusieursChequesParFonctionnalite: boolean;
        /**
         * Indique si on affiche ou non le bouton 'Plusieurs chèques' en fonction du mode financier
         */
        afficherPlusieursChequesParModeFinancier: boolean;
        /**
         * Indique si on affiche ou non la facturation automatique en fonction de la fonctionnalité
         */
        afficherFacturationAutomatiqueParFonctionnalite: boolean;
        /**
         * Indique si on affiche ou non la facturation automatique en fonction du mode financier
         */
        afficherFacturationAutomatiqueParModeFinancier: boolean;
        /**
         * Indique si on affiche la zone de texte du titulaire du compte (pour les OAD par exemple).
         */
        afficherTitulaireCompteParFonctionnalite: boolean;
        /**
         * Indique si l'opération est un versement.
         */
        estVersement: boolean;
        /**
         * Texte anniversaire pour les PEL en depôt.
         */
        texteAnniversaire: string;
        /**
         * Indique si on affiche ou non le composant accreditif.
         */
        afficherAccreditif: boolean;
        /**
         * Paramètre montant pour la directive operation-diverse-liste.
         * Il est pré-rempli par 1 et est remplacé par le montant de l'opéfi quand il est renseigné.
         */
        montantPourOperationDiverseListe: number;
        /**
         * Contient les id des champs en erreurs de l'opération.
         */
        champsErreursOpefi: Model.ChampErreurOperationFinanciere[];
        carteTMFModeDepotActive: boolean;
        carteTMFModeRetraitActive: boolean;
        carteTMFModeRetraitOADActive: boolean;
        afficherCaseCarteTMF: boolean;
        carteTMFCochee: boolean;
        loading: boolean;
        /**
         * Affiche ou non la référence OAD
         */
        afficherReferenceOAD: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, compteService: myway.comInterdomaine.CompteService, modeFinancierService: myway.comInterdomaine.ModeFinancierService, deviseService: myway.comInterdomaine.DeviseService, modalService: MyWay.UI.ModalService, interDomainCoreService: myway.comInterdomaine.InterDomainCoreService, $q: ng.IQService, repartitionService: myway.comOpesFinancieres.RepartitionService, plusieursChequesService: myway.comOpesFinancieres.PlusieursChequesService, facturationAutomatiqueService: myway.comOpesFinancieres.FacturationAutomatiqueService, miniProfilService: myway.comOpesFinancieres.MiniProfilService, carteTempoMultiFonctionsService: CarteTMF.CarteTempoMultiFonctionsService, caisseAutoService: CaisseAutoService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * Permet de valoriser le segment avec le participant selectionne
         * @param {myway.comOpesFinancieres.Model.SegmentPRVRIO} segment
         * @param {MyWay.Model.ParticipantInformationClient[]} participant
         * @returns segment
         */
        private valorisationSegmentAvecParticipantSelectionne(segment, participant);
        /**
         * Permet de déterminer pour chaque mode financier si on doit activer le bouton valider.
         * On renvoit en sortie du composant le boolean l'indiquant.
         */
        private determinerActivationBoutonValider();
        /**
         * Permet d'afficher les blocs par mode financier en passant le code mode financier (CTGXM1)
         * @param {string} modeFinancier
         */
        affichageBlocsParModeFinancier(modeFinancier: string): void;
        /**
         * Permet d'initialiser les données des variables.
         */
        initialisationDonneesVariables(): void;
        /**
         * Permet de vérifier le plafond de versement.
         */
        verifierPlafondVersement(): void;
        /**
         * Permet d'ouvrir la popup de confirmation pour le plafond de versement.
         */
        ouverturePopupConfirmationPlafondVersement(): void;
        /**
         * Permet d'initialiser l'ouverture de compte.
         * @param {boolean} modeDivers
         */
        private initialisationOuvertureCompte(modeDivers);
        /**
         * Permet d'initialisation une operation financière de retrait.
         * @param modeDivers Mode divers
         */
        initialisationOperationRetraitOAD(modeDivers: boolean): void;
        /**
         * Permet d'initialiser une opération financière de depot.
         * @param modeDivers Mode divers
         */
        initialisationOperationDepotOAD(modeDivers: boolean): void;
        /**
         * Permet d'initialisation une operation financière de retrait.
         * @param modeDivers Mode divers
         */
        initialisationOperationRetrait(modeDivers: boolean): void;
        /**
         * Permet d'initialiser une opération financière de depot.
         * @param modeDivers Mode divers
         */
        initialisationOperationDepot(modeDivers: boolean): void;
        /**
         * Permet d'initialiser l'ouverture de compte DAT.
         * @param {boolean} modeDivers
         */
        private initialisationOuvertureCompteDat(modeDivers);
        /**
         * Permet d'initialiser l'ouverture de compte.
         * @param {boolean} modeDivers
         */
        private initialisationOuvertureCompteCantonnement(modeDivers);
        /**
         * Se déclenche quand on modifie la référence identité.
         */
        modificationReferenceIdentite(): void;
        /**
         * Se déclenche lors de la modification du titulaire du compte pour les OAD
         */
        modificationTitulaireCompte(): void;
        /**
         * Se déclenche lors de la modification de la référence OAD
         */
        modificationReferenceOAD(): void;
        /**
         * Permet d'initialiser l'ouverte d'epargne.
         * @param {boolean} modeDivers
         */
        private initialisationOuvertureEpargne(modeDivers);
        /**
         * Initialisation du segment pour une extourne d'ouverture PEA
         * @param modeDivers
         */
        private initialisationExtourneOuverturePEA(modeDivers);
        /**
         * Permet d'initialiser une extourne de cloture PEA
         * @param modeDivers Est mode divers
         */
        private initialisationExtourneCloturePEA(modeDivers);
        /**
         * Permet d'initialiser une ouverture PEA
         * @param {boolean} modeDivers
         */
        private initialisationOuverturePEA(modeDivers);
        /**
         * Permet d'initialiser l'ouverte CEL
         * @param {boolean} modeDivers
         */
        private initialisationOuvertureCEL(modeDivers);
        /**
         * Permet de calculer le plafond de versement via le service
         */
        calculPlafondVersementService(): void;
        /**
         * Permet d'initialiser la cloture de compte
         * @param {boolean} modeDivers
         */
        private initialisationClotureCompte(modeDivers);
        /**
         * Permet d'ouvrir la popup de répartition lors du clic sur le bouton et d'effectuer les traitements d'alimentation du segment
         */
        ouvertureRepartition(): void;
        /**
         * Permet d'initialiser le versement.
         * @param {boolean} modeDivers
         */
        private initialisationVersement(modeDivers);
        /**
         * Permet d'initialiser l'ouverture PEL
         * @param {boolean} modeDivers
         */
        private initialisationOuverturePEL(modeDivers);
        /**
         * Permet l'ouverture de la popup PlusieursChèques lors du clic sur le bouton
         */
        ouverturePlusieursCheques(): void;
        /**
         * Afficher la facturation auto
         */
        afficheFacturationAuto(): boolean;
        /**
         * Traitement specifique pour afficher les composants depots ou retraits (En OAD ou non)
         */
        traitementSpecifiqueDepotRetrait(): void;
        showTitulaireCompteParFonctionnalite(): boolean;
        isCompteDebiteEnOpposition(): boolean;
        forceRetraitOADTMF(): boolean;
        isCarteTMFRetraitOAD(): boolean;
        isCarteTMFRetrait(): boolean;
        isCarteTMFDepot(): boolean;
        private verifieEstTraitementTermine();
    }
}

declare module myway.comOpesFinancieres {
    function mwsfSaisieOperationFinanciere(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class CaisseAutoService {
        private serviceAgentExtended;
        private identifiantBordereauService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService);
        /**
         * numéro de plan
         */
        private getNumPlan();
        deposerEspeces(referenceExterneAgent: string, numeroPersonne: string): ng.IPromise<number>;
        annulerDepotEspeces(): ng.IPromise<number>;
        inventaireEspeces(): ng.IPromise<number>;
    }
}

declare module myway.comOpesFinancieres {
    class ChampsErreursOpeFiService {
        static $inject: string[];
        constructor();
        /**
         * Champ en erreur de la référence OAD (Retrait et Depot OAD)
         */
        getChampErreurReferenceOAD(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur du libellé d'opération vide
         */
        getChampErreurLibelleOperationVide(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur numéro du chèque de banque vide
         */
        getChampErreurNumeroChequeBanqueVide(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur numéro du chèque de banque vide
         */
        getChampErreurBeneficiaireChequeBanqueVide(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur du montant de l'opération vide.
         */
        getChampErreurMontantVide(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur concernant la billetterie incorrect
         */
        getChampErreurBilletterieIncorrect(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur de l'opération diverse.
         */
        getChampErreurOperationDiverse(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur du titulaire du compte
         */
        getChampErreurTitulaireCompte(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur virement interne compte non selecitonne
         */
        getChampErreurCompteNonSelectionneVirementInterne(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur virement interne compte non selecitonne
         */
        getChampErreurRiceSaisieIncorrectVirementInterne(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur référence sac
         */
        getChampErreurReferenceSac(): Model.ChampErreurOperationFinanciere;
        /**
         * Champ en erreur Montant Retrait TMF
         */
        getChampErreurMontantNonMultipleDe10(): Model.ChampErreurOperationFinanciere;
    }
}

declare module myway.comOpesFinancieres {
    class ChequeBanqueService {
        private serviceAgentExtended;
        private modalService;
        private impressionService;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, impressionService: myway.comInterdomaine.ImpressionService, $q: ng.IQService);
        openPopupChequeBanque(chequeBanqueEnCours: myway.comOpesFinancieres.Model.ChequeBanque, clicNePasReprendreChequeEnCours: boolean, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere, paramPopupChequeBanque?: myway.comOpesFinancieres.Model.ParamPopupChequeBanque): ng.IPromise<boolean>;
        /**
         * Ouvre la popup du chèque de banque pour les depots retraits, en fonction de l'habilitation on pourra ou non imprimer, ou déroger à l'impression.
         * @param chequeBanqueEnCours Cheque de banque en cours
         * @param clicNePasReprendreChequeEnCours
         * @param contexteSaisieOperationFinanciere Contexte de saisie d'operation financiere
         * @param isDerogationImpression Si on est en derogation d'impression
         * @param paramPopupChequeBanque
         */
        openPopupChequeBanqueOperationDepotRetrait(chequeBanqueEnCours: myway.comOpesFinancieres.Model.ChequeBanque, clicNePasReprendreChequeEnCours: boolean, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere, isDerogationImpression: boolean, paramPopupChequeBanque?: myway.comOpesFinancieres.Model.ParamPopupChequeBanque): ng.IPromise<boolean>;
        getNumeroConseiller(): ng.IPromise<string>;
        getChequeBanqueEnCours(numeroConseiller: string): ng.IPromise<myway.comOpesFinancieres.Model.ChequeBanque>;
        setChequeGlobal(chequeBanque: myway.comOpesFinancieres.Model.ChequeBanque, montant: number, numeroConseiller: string): ng.IPromise<string>;
        imprimerChequeBanque(chequeBanque: myway.comOpesFinancieres.Model.ChequeBanque, montant: number, contexteOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere): void;
        razChequeGlobal(chequeBanque: myway.comOpesFinancieres.Model.ChequeBanque, numeroConseiller: string): ng.IPromise<string>;
    }
}

/**
 * Ressource : /syntheseservice/v1/miniProfil
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/syntheseservice/miniProfil
 * Fichier généré le : 2017-02-10
 */
declare module myway.comOpesFinancieres {
    class MiniProfilService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getMiniProfil(codeEtablissement: string, typeRecherche: string, typeRestitution: string, codeGuichetInterbancaire?: string, codeProduitService?: string, referenceProduitService?: string, numeroCarteBancaire?: string, identifiantEntiteTitulaire?: number, identifiantTiers?: number): ng.IPromise<Array<ICaracteristiqueMiniProfil>>;
    }
}

declare module myway.comOpesFinancieres {
    class OperationFinanciereService {
        private $q;
        private modalService;
        private serviceAgentExtended;
        private modeFinancierService;
        private deviseService;
        private operationDiverseService;
        private champsErreursOpeFiService;
        static $inject: string[];
        /** Champs en erreurs de l'opération financière. */
        listeErreursChampsOperationFinancieres: Model.ChampErreurOperationFinanciere[];
        constructor($q: ng.IQService, modalService: MyWay.UI.ModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modeFinancierService: myway.comInterdomaine.ModeFinancierService, deviseService: myway.comInterdomaine.DeviseService, operationDiverseService: myway.comOpesFinancieres.OperationDiverseService, champsErreursOpeFiService: myway.comOpesFinancieres.ChampsErreursOpeFiService);
        /**
         * Réinitialise la liste des champs en erreurs de l'opération financière.
         */
        reinitialisationListeChampsEnErreursOperationFinancieres(): Model.ChampErreurOperationFinanciere[];
        /**
         * Récupère la liste des champs en erreurs de l'opération financière.
         */
        getListeChampsEnErreursOperationFinancieres(): Model.ChampErreurOperationFinanciere[];
        /**
         * Ajout un champ en erreur dans la liste des champs en erreurs de l'opération financière.
         * @param champ Champ en erreur
         */
        addChampEnErreurListeOperationFinancieres(champ: Model.ChampErreurOperationFinanciere): void;
        /**
         * Permet de restituer un objet de plafond versement, pour les modes financiers 01 et 07 il permet de savoir le plafond maximum
         * @param {string} codeEtablissement
         * @param {string} codeModeFinancier
         * @param {string} codeProduit
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.IPlafondVersement>
         */
        getPlafondVersement(codeEtablissement: string, codeModeFinancier: string, codeProduit: string): ng.IPromise<myway.comOpesFinancieres.Model.IPlafondVersement>;
        /**
         * Modal d'OpeFi
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operation
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.OperationFinanciere>
         */
        appeller(operation: myway.comOpesFinancieres.Model.OperationFinanciere): ng.IPromise<myway.comOpesFinancieres.Model.OperationFinanciere>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'ouverture d'un compte CDD ou bien d'un compte d'attente
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {boolean} estModeDivers
         */
        initSegmentPrvRioOuvertureCompte(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'ouverture d'un compte de cantonnement
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {boolean} estModeDivers
         */
        initSegmentPrvRioOuvertureCompteCantonnement(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'ouverture d'un livret
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioOuvertureLivret(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Initialisation du segment PrvRio pour les PEA
         * @param operationFinanciere Operation financiere
         * @param estModeDivers est mode divers
         * @param codeAtome code atome
         */
        initSegmentPrvRioPEA(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean, codeAtome: string): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'ouverture d'un CEL
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioOuvertureCEL(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Initialisation segment pour PEL
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {boolean} estModeDivers
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>
         */
        initSegmentPrvRioOuverturePEL(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à la cloture d'un compte
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         * @param {estContentieux} indique s'il y a un contentieux
         */
        initSegmentPrvRioClotureCompte(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean, estContentieux: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à la cloture d'un livret
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         * @param {estContentieux} indique s'il y a un contentieux
         */
        initSegmentPrvRioClotureLivret(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'annulation de l'ouveture d'un compte, ou bien de la cloture d'un compte
         * Pré-requis : le composant opération financière doit être bien intialisé avec les bonnes valeurs récupérés de l'écran
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioAnnulation(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean, estContentieux: boolean, estCloture: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'annulation de l'ouveture d'un livret
         * Pré-requis : le composant opération financière doit être bien intialisé avec les bonnes valeurs récupérés de l'écran
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioAnnulationOuvertureLivret(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean, estCloture: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO à l'annulation de la clôture d'un livret
         * Pré-requis : le composant opération financière doit être bien intialisé avec les bonnes valeurs récupérés de l'écran
         * @param {MyWay.Model.OperationFinanciere} opération financière
         * @param {estModeDivers} indique si la personne est habilité au mode divers
         */
        initSegmentPrvRioAnnulationClotureLivret(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Permet d'initialiser le segment prvrio au chargement de l'écran versement / remboursement
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {boolean} estModeDivers
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>
         */
        initSegmentPrvRioVersement(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Permet d'initialiser le segment prvrio au chargement de l'écran pour une opération de depot
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {boolean} estModeDivers
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>
         */
        initSegmentPrvRioOperationDepot(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Permet d'initialiser le segment prvrio au chargement de l'écran pour une opération de retrait
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {boolean} estModeDivers
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>
         */
        initSegmentPrvRioOperationRetrait(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode permettant d'obtenir le libellé de l'opération financière
         * @param {string} codeEtablissement
         * @param {string} codeOperation
         * @param {myway.comOpesFinancieres.Model.SegmentPRVRIO} segmentPrvRio
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.LibelleOperation>
         */
        getLibelleOperationFinanciere(codeEtablissement: string, codeOperation: string, segmentPrvRio: myway.comOpesFinancieres.Model.SegmentPRVRIO): ng.IPromise<myway.comOpesFinancieres.Model.LibelleOperation>;
        /**
         * Méthode qui permet de récupérer le libelle complémentaire pour une opération financière.
         * @param {string} codeEtablissement
         * @param {string} codeOperation
         * @param {string} codeEvenementAtome
         * @param {string} modeFinancierChoisi
         * @returns ng.IPromise<string>
         */
        getLibelleComplementaire(codeEtablissement: string, codeOperation: string, codeEvenementAtome: string, modeFinancierChoisi: string): ng.IPromise<string>;
        /**
         * Determiner activation du bouton valider pour le mode financier cheque
         * @param {number} montant
         * @param {boolean} estLibelleOperationVide
         * @returns boolean
         */
        determinerActivationBoutonValiderCheque(montant: number, estLibelleOperationVide: boolean): boolean;
        /**
         * Determiner activation du bouton valider pour le mode financier Operation Diverses
         * @param {number} montant
         * @param {boolean} estOperationDiverseValide
         * @param {boolean} estLibelleOperationVide
         * @returns boolean
         */
        determinerActivationBoutonValiderOperationDiverse(montant: number, estOperationDiverseValide: boolean, estLibelleOperationVide: boolean): boolean;
        /**
         * Determiner activation du bouton valider pour le virement interne.
         * @param {number} montant
         * @param {MyWay.Model.Rice} rice
         * @param {MyWay.Model.Contrat} compteSelectionne
         * @param {boolean} estLibelleOperationVide
         * @returns
         */
        determinerActivationBoutonValiderVirementInterne(montant: number, rice: MyWay.Model.Rice, compteSelectionne: MyWay.Model.Contrat, estLibelleOperationVide: boolean): boolean;
        /**
         * Determiner activation du bouton valider pour le mode financier especes
         * @param {number} montant
         * @param {number} montantBilletterie
         * @param {boolean} estDepassePlafondVersement
         * @param {boolean} estLibelleOperationVide
         * @returns boolean
         */
        determinerActivationBoutonValiderEspeces(montant: number, montantBilletterie: number, estDepassePlafondVersement: boolean, estLibelleOperationVide: boolean, referenceEnveloppe?: Model.ReferenceEnveloppe, afficherTitulaireCompte?: boolean, titulaireCompte?: string, afficherReferenceOAD?: boolean, referenceOAD?: string): boolean;
        determinerActivationBoutonValiderEspecesRetraitCarteTMF(operationFinanciere: Model.OperationFinanciere, estLibelleOperationVide: boolean, isOAD: boolean): boolean;
        /**
         * Determiner activation du bouton valider pour le mode financier especes divers
         * @param {number} montant
         * @param {string} numeroReferenceEnveloppe
         * @param {number} montantBilletterie
         * @param {boolean} estDepassePlafondVersement
         * @param {boolean} estLibelleOperationVide
         * @returns boolean
         */
        determinerActivationBoutonValiderEspecesDivers(montant: number, numeroReferenceEnveloppe: string, montantBilletterie: number, estDepassePlafondVersement: boolean, estLibelleOperationVide: boolean): boolean;
        /**
         * Déterminer s'il faut activer ou non le bouton valider pour le chèque de banque
         * @param montant Montant de l'opération financière
         * @param estLibelleOperationVide Est libelle opération vide
         * @param numeroCheque Numéro du chèque de banque
         * @param beneficiaireCheque Bénéficiaire du chèque de banque
         */
        determinerActivationBoutonValiderChequeBanque(montant: number, estLibelleOperationVide: boolean, numeroCheque: string, beneficiaireCheque: string, afficherReferenceOAD?: boolean, referenceOAD?: string): boolean;
        /**
         * Determiner activation du bouton valider pour mode financier divers
         * @param {number} montant
         * @param {boolean} estLibelleOperationVide
         * @returns boolean
         */
        determinerActivationBoutonValiderDivers(montant: number, estLibelleOperationVide: boolean, afficherTitulaireCompte?: boolean, titulaireCompte?: string, afficherReferenceOAD?: boolean, referenceOAD?: string): boolean;
        /**
         * Méthode qui permet d'initialiser le segment PRVRIO grâce aux choix utilisateurs
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {boolean} estModeDivers
         */
        initSegmentPrvRioOuvertureViaChoixUtilisateurs(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, devise: MyWay.Model.Devise, estModeDivers: boolean): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Alimentation de base d'une OpéFi avec un DV.
         */
        alimentationOpeFiAvecChoixUtil(operationFinanciereChoixUtil: myway.comOpesFinancieres.Model.ChoixUtilisateurOpeFi): myway.comOpesFinancieres.Model.OperationFinanciere;
        /**
         * Alimente un segment PrvRio à partir d'un DV
         */
        alimentationSegmentPrvrioAvecChoixUtil(operationFinanciereChoixUtil: myway.comOpesFinancieres.Model.ChoixUtilisateurOpeFi, segmentPrvRioParam: myway.comOpesFinancieres.Model.SegmentPRVRIO): Model.SegmentPRVRIO;
        /**
         * Création d'un objet Choix Utilisateurs à partir d'un objet Opération Financière
         * @param operationFinanciere
         */
        creationObjetChoixUtilisateursParObjetOpeFi(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere): myway.comOpesFinancieres.Model.ChoixUtilisateurOpeFi;
        /**
         * Création d'un objet OpéFi à partir d'un objet de Choix Utilisateurs Opefi
         * @param operationFinanciereChoixUtil Choix utilisateurs OpeFi
         */
        creationObjetOpeFiParObjetChoixUtilisateurs(operationFinanciereChoixUtil: myway.comOpesFinancieres.Model.ChoixUtilisateurOpeFi): ng.IPromise<myway.comOpesFinancieres.Model.OperationFinanciere>;
        /**
         * Permet de récupérer un objet ParametreListeComptes alimentés
         */
        creationObjetParametreListeComptes(typeRecherche?: string, codeEtatRecherche?: string, listeNumerosPersonnes?: string[], numeroPersonne?: string, listeTypesProduits?: string[], codeDevise?: string): MyWay.Model.ParametresListeComptes;
        /**
         * Permet de découper un numéro de compte en objet RICE.
         */
        decoupageEtCreationRice(numeroCompte: string): MyWay.Model.Rice;
    }
}

declare module myway.comOpesFinancieres {
    interface IPostOperationFinanciereService {
        traitementPostOperationFinanciere(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, eligibiliteSag: boolean): any;
        traitementAnnulOperationFinanciere(): any;
    }
    class PostOperationFinanciereService implements IPostOperationFinanciereService {
        private serviceAgentExtended;
        private journalApplicatif;
        private identifiantBordereauService;
        private operationFinanciereService;
        private riceService;
        private caisseAutoService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, journalApplicatif: myway.comOpesFinancieres.JournalApplicatif, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, riceService: myway.comInterdomaine.SaisieRiceService, caisseAutoService: CaisseAutoService);
        traitementPostOperationFinanciere(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, eligibiliteSag: boolean): ng.IPromise<void>;
        traitementAnnulOperationFinanciere(): ng.IPromise<void>;
        /**
         * Permet d'alimenter le bordereau
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         */
        private alimenterBordereau(operationFinanciere);
        /**
         * Alimentation d'une ligne bordereau operation avec la tarification du vrac
         * @param operationFinanciere Operation Financiere
         */
        private alimenterLigneBordereauPourTarification(operationFinanciere, intituleOperation, estDepot);
        /**
         * Permet d'alimenter les lignes du bordereau
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @returns  myway.comOpesFinancieres.Model.LigneBordereauOperation
         */
        private alimenterLigneBorderau(operationFinanciere);
        /**
         * Determine la saisie de la billetterie
         * @param {myway.comOpesFinancieres.Model.SegmentBilleterie} billetterie
         * @returns boolean
         */
        determinerSaisieBilletterie(billetterie: myway.comOpesFinancieres.Model.SegmentBilleterie): boolean;
        /**
         * Aliment le segment de la billetterie.
         * @param {myway.comOpesFinancieres.Model.SegmentBilleterie} billetterieTotale
         * @param {myway.comOpesFinancieres.Model.SegmentBilleterie} billetterieLigneOperation
         * @returns myway.comOpesFinancieres.Model.SegmentBilleterie
         */
        private alimenterBilletterie(billetterieTotale, billetterieLigneOperation);
        /**
         * Récupère le libelle d'un produit à partir d'un compte dans la table delocalisee PRODUIT
         * @param {string} codeEtablissement code etablissement
         * @param {string} codeProduit Equivalent au CODIPR
         * @returns
         */
        recupererLibelleProduitPourUnCompte(codeEtablissement: string, codeProduit: string, codeDevise: string): ng.IPromise<string>;
        /** Retourne un rice avec sa clé calculé
         * @param rice {string} rice du compte de facturation
         * @return reponse {string} rice + clé
         */
        private formatageRice(rice);
        private convertionDateSegmentEnFormatDateStandard(date);
    }
}

declare module myway.comOpesFinancieres {
    class ProduitService {
        private $q;
        private $timeout;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService);
        getProduits(): ng.IPromise<MyWay.Model.Produit[]>;
    }
}

/**
 * Ressource : /tarification/v1/tarificationPrestation
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/tarification/tarificationPrestation
 * Fichier généré le : 2017-06-02
 */
declare module myway.comOpesFinancieres {
    class TarificationTarificationPrestationService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getTarificationPrestation(codeEtablissement: string, codePrestationTarifiable: number, montantDeReferencePrestation: number, monnaieMontantReference: string, numeroEntiteTitulaire?: number, identifiantPersonne?: number, codeGuichet?: string, numeroCompte?: string, topTarifAuto?: string): ng.IPromise<ITarificationPrestation>;
    }
}

declare module myway.comOpesFinancieres {
    class SoldeCompteController {
        private $scope;
        private compteService;
        private serviceAgentExtended;
        private modalService;
        private miniProfilService;
        private operationFinanciereService;
        static $inject: string[];
        comptePrincipal: MyWay.Model.Contrat;
        /** Contient tout le détail du solde. */
        soldeDetail: IDetailSoldeCompte;
        /** Affichage du solde disponible ou actuel (par défaut: disponible) */
        typeAffichageSolde: TypeAffichageSolde;
        /** Chargement. */
        chargementSolde: boolean;
        /** Affichage du bouton du solde. */
        afficherBoutonSolde: boolean;
        /** Code produit du compte. */
        codeProduit: string;
        /** Affiche ou non la mention Oppo (utilisé si le compte est en opposition) */
        isOpposition: boolean;
        private affichageSoldeActuel;
        masquerBoutonDetail: boolean;
        constructor($scope: ng.IScope, compteService: myway.comInterdomaine.CompteService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, miniProfilService: MiniProfilService, operationFinanciereService: OperationFinanciereService);
        /**
         * Traitement de récupération du solde
         */
        traitementRecuperationSolde(): void;
        /**
         * Permet d'afficher la popup du détail du solde.
         */
        afficherPopupSolde(): void;
        /**
         * Initialisation des donnees et variables.
         */
        initialisationVariablesEtDonnees(): void;
        /**
         * Méthode qui permet de calculer le solde disponible
         */
        private calculerSoldeDisponible();
    }
    /**
     * Contient les données du solde.
     */
    interface IDetailSoldeCompte {
        /** Montant du solde disponible. */
        soldeDisponible: number;
        /** Montant du decouvert autorise. */
        decouvertAutorise: number;
        /** Delai d'encaissement. */
        delaiEncaissement: number;
        /**  Ecartes */
        ecartes: number;
        /** Impayes sur pret. */
        impayesSurPret: number;
        /** Solde actuel. */
        soldeActuel: number;
        /** Code devise. */
        codeDevise: string;
    }
    enum TypeAffichageSolde {
        DISPONIBLE = 0,
        ACTUEL = 1,
    }
}

declare module myway.comOpesFinancieres {
    function mwsfSoldeCompte(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
}

declare module myway.comOpesFinancieres {
    class TypeChequeController {
        private $scope;
        private serviceAgentExtended;
        private typeChequeService;
        private $q;
        static $inject: string[];
        reserveEncaissement: MyWay.Model.ReserveEncaissement;
        rice: MyWay.Model.Rice;
        choixTypeCheque: string;
        static CHOIX_SANS_RESERVE_TYPE_CHEQUE: string;
        static CHOIX_DELAI_ENCAISSEMENT_TYPE_CHEQUE: string;
        static DELAI_ENCAISSEMENT_A_ZERO_TYPE_CHEQUE: number;
        montantOperationFinanciere: number;
        nbJoursRecup: number;
        private static TEXTE_JOURS;
        estForcageOpeFi: boolean;
        private recuperationReserveEncaissementPromise;
        encaissementCheque: MyWay.Model.EncaissementCheque;
        codeEtablissement: string;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, typeChequeService: TypeChequeService, $q: ng.IQService);
        /**
         * Méthode qui renvoit le texte static pour l'affichage en sans réserve
         * @returns string
         */
        texteStaticReserveEncaissement(): string;
        /**
         * Se déclenche lors d'un clic sur les boutons radios
         * @param {string} choixTypeCheque
         */
        clicCaseCocherTypeCheque(choixTypeCheque: string): void;
        /**
         * Methode qui permet de récupérer la réserve encaissement et de faire les différents traitements à l'initialisation.
         * @returns ng.IPromise<any>
         */
        recuperationReserveEncaissementInit(): ng.IPromise<any>;
        /**
         * Met en place dans l'IHM la réserve d'encaissement calculé.
         * @param {MyWay.Model.ReserveEncaissement} reserveEncaissement
         */
        miseEnPlaceReserveEncaissementIHM(reserveEncaissement: MyWay.Model.ReserveEncaissement): void;
        /**
         * Recalcule la réserve d'encaissement à chaque changement (montant, Mode financier)
         * @returns ng.IPromise<any>
         */
        recalculReserveEncaissement(): ng.IPromise<any>;
        /**
         * Méthode qui envoi l'évènement au composant principal si on change la valeur du délai d'encaissement
         */
        changementDelaiEncaissement(): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfTypeCheque(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class TypeChequeService {
        private $q;
        private serviceAgentExtended;
        private static MOYEN_PAIEMENT_VERSION;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer l'objet de réserve encaissement via le service.
         * @param {string} codeEtablissement
         * @param {string} identifiantElementStructure
         * @param {MyWay.Model.Rice} rice
         * @param {number} montant
         * @returns ng.IPromise<MyWay.Model.ReserveEncaissement>
         */
        getEncaissementChequeService(codeEtablissement: string, identifiantElementStructure: string, rice: MyWay.Model.Rice): ng.IPromise<MyWay.Model.EncaissementCheque>;
        /**
         * Permet de calculer la réserve d'encaissement en fonction des règles de gestions
         * @param {MyWay.Model.EncaissementCheque} encaissementCheque
         * @param {string} codeEtablissement
         * @param {string} codeProduit
         * @param {number} montant
         * @returns ng.IPromise<MyWay.Model.ReserveEncaissement>
         */
        calculerReserveEncaissement(encaissementCheque: MyWay.Model.EncaissementCheque, codeEtablissement: string, codeProduit: string, montant: number): ng.IPromise<MyWay.Model.ReserveEncaissement>;
        /**
         * Permet de calculer le nombre de jours de la reserve encaissement.
         * @param {number} nombreJours
         * @returns number
         */
        private calculerNombreJoursReserveEncaissement(nombreJours);
    }
}

declare module myway.comOpesFinancieres {
    class VirementInterneController {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        rice: MyWay.Model.Rice;
        numeroPersonne: string;
        soldeCompteChoisi: number;
        afficherBoutonSaisirCompte: boolean;
        static TEXTE_SAISIR_AUTRE_COMPTE: string;
        static TEXTE_BOUTON_AFFICHER_LISTE: string;
        static TEXTE_LETTRE_CODE_ETAT_RECHERCHE_T: string;
        static TEXTE_LETTRE_TYPE_RECHERCHE_B: string;
        texteBouton: string;
        compteSelectionne: MyWay.Model.Contrat;
        parametreListeComptes: MyWay.Model.ParametresListeComptes;
        typeRecherche: string;
        codeEtatRecherche: string;
        listeNumerosPersonnes: string[];
        listeTypesProduits: string[];
        codeDevise: string;
        estForcage: boolean;
        blocageEditionVirement: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet les traitements pour mettre a jour la liste des comptes en fonction des paramètres.
         */
        traitementRechercheComptes(): void;
        /**
         * Permet de switcher entre les 2 boutons (Saisir Compte et Afficher la liste)
         */
        boutonSaisirCompte(): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfVirementInterne(): ng.IDirective;
}

declare module myway.comOpesFinancieres {
    class VracTarificationController {
        private $scope;
        private serviceAgentExtended;
        private tarificationTarificationPrestationService;
        static $inject: string[];
        /** Indique si on affiche la case à cocher. */
        afficherCaseCocher: boolean;
        /** Indique si la case est coché. */
        caseCoche: boolean;
        /** Compte de l'opération financière. */
        compte: MyWay.Model.Compte;
        /** Montant de la tarification. */
        montantTarification: number;
        /** Code de la devise */
        codeDevise: string;
        /** Identifiant de la personne. */
        identifiantPersonne: number;
        /** Code de la prestation tarifaire. */
        codePrestationTarifiable: string;
        /** Facturation prestation. */
        facturationPrestation: myway.comOpesFinancieres.Model.FacturationPrestation;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, tarificationTarificationPrestationService: myway.comOpesFinancieres.TarificationTarificationPrestationService);
        /**
         * Calcul la tarification à partir du montant et de l'établissement.
         * @param montant
         * @param codeEtablissement
         */
        calculMontantTarification(montant: number, codeEtablissement: string, codeDevise: string, identifiantPersonne: number, codeGuichet: string, numeroCompte: string): ng.IPromise<number>;
        /**
         * Se déclenche lors de la coche du vrac.
         */
        cocheDuVrac(): void;
    }
}

declare module myway.comOpesFinancieres {
    function mwsfVracTarification(): ng.IDirective;
}

declare module myway.comOpesFinancieres.CarteTMF.impression.sikggceBordTmf {
    function createArchiverParams(): SikggceBordTmfArchiverParams;
    function createGenererParams(): SikggceBordTmfGenererParams;
    function createArchiverGenererParams(): SikggceBordTmfArchiverGenererParams;
    function createImpressionParams(): SikggceBordTmfImpressionParams;
    function createArchiverImpressionParams(): SikggceBordTmfArchiverImpressionParams;
    function createImpressionLotParams(): SikggceBordTmfImpressionLotParams;
    function createDocument(authentificationInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, libellesEtablissement: ILibellesEtablissement, champsImpressionCarteTmf: IChampsImpressionCarteTmf): SikggceBordTmf;
    function genererEntete(authentificationInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables): IgenericEnteteets[];
}

declare module myway.comOpesFinancieres.CarteTMF.impression.sikggceBordTmf {
    interface IsikggceBordTmf {
        section1: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IsikggceBordTmfSection1[];
        genericEnteteets: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericEnteteets[];
        genericPiedpageets: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsikggceBordTmfSection1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04)[];
    }
    interface Ich00 {
        blClient: IsikggceBordTmfSection1BlClient;
    }
    interface Ich01 {
        blTexte: IsikggceBordTmfSection1BlTexte;
    }
    interface Ich02 {
        blMouvements: IsikggceBordTmfSection1BlMouvements;
    }
    interface Ich03 {
        genericClausecnilSeul: IgenericClausecnilSeul;
    }
    interface Ich04 {
        blSignature: IsikggceBordTmfSection1BlSignature;
    }
    interface IgenericEnteteets {
        logoEtablissement: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericEnteteetsLogoEtablissement;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        dateEdition: string;
        heureEdition: string;
        numRefdoc: string;
        codeBarre: string;
        refActe: string;
    }
    interface IgenericEnteteetsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB10175[];
        b13135: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB13135[];
        b13705: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB13705[];
        b14445: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB14445[];
        b14505: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB14505[];
        b15135: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB15135[];
        b15905: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB15905[];
        b15965: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB15965[];
        b16275: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB16275[];
        b18025: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB18025[];
        b18279: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB18279[];
        b43199: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB43199[];
        b18715: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB18715[];
        b13335: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB13335[];
        b17515: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB17515[];
        b62108: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB62108[];
        b12579: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB12579[];
        b13825: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB13825[];
        b16705: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB16705[];
        b12135: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB12135[];
        b14265: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB14265[];
        b13485: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB13485[];
        b18315: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB18315[];
        b11315: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB11315[];
        b11425: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB11425[];
        b12548: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB12548[];
        b30051: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageetsB30051[];
    }
    interface IgenericPiedpageetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IgenericPiedpageetsB13135 {
        d13135L1: string;
    }
    interface IgenericPiedpageetsB13705 {
        d13705L1: string;
    }
    interface IgenericPiedpageetsB14445 {
        d14445L1: string;
    }
    interface IgenericPiedpageetsB14505 {
        d14505L1: string;
    }
    interface IgenericPiedpageetsB15135 {
        d15135L1: string;
    }
    interface IgenericPiedpageetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IgenericPiedpageetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IgenericPiedpageetsB16275 {
        d16275L1: string;
    }
    interface IgenericPiedpageetsB18025 {
        d18025L1: string;
    }
    interface IgenericPiedpageetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IgenericPiedpageetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IgenericPiedpageetsB18715 {
        d18715L1: string;
    }
    interface IgenericPiedpageetsB13335 {
        d13335L1: string;
    }
    interface IgenericPiedpageetsB17515 {
        d17515L1: string;
    }
    interface IgenericPiedpageetsB62108 {
        d62108L1: string;
    }
    interface IgenericPiedpageetsB12579 {
        d12579L1: string;
    }
    interface IgenericPiedpageetsB13825 {
        d13825L1: string;
    }
    interface IgenericPiedpageetsB16705 {
        d16705L1: string;
    }
    interface IgenericPiedpageetsB12135 {
        d12135L1: string;
    }
    interface IgenericPiedpageetsB14265 {
        d14265L1: string;
    }
    interface IgenericPiedpageetsB13485 {
        d13485L1: string;
    }
    interface IgenericPiedpageetsB18315 {
        d18315L1: string;
    }
    interface IgenericPiedpageetsB11315 {
        d11315L1: string;
    }
    interface IgenericPiedpageetsB11425 {
        d11425L1: string;
    }
    interface IgenericPiedpageetsB12548 {
        d12548L1: string;
    }
    interface IgenericPiedpageetsB30051 {
        d30051L1: string;
    }
    interface IsikggceBordTmfSection1BlClient {
        nomclient: string;
        adresse: string;
    }
    interface IgenericClausecnilSeul {
        alaEtab1: string;
        laEtab1: string;
        laEtab11: string;
        laEtab2: string;
        delaEtab1: string;
        laEtab21: string;
    }
    interface IsikggceBordTmfSection1BlMouvements {
        listemouv: IsikggceBordTmfSection1BlMouvementsListemouv[];
    }
    interface IsikggceBordTmfSection1BlMouvementsListemouv {
        ligne1: IsikggceBordTmfSection1BlMouvementsListemouvLigne1[];
    }
    interface IsikggceBordTmfSection1BlMouvementsListemouvLigne1 {
        libligne: string;
    }
    interface IsikggceBordTmfSection1BlSignature {
        etablissement: string;
        agent: string;
        piece: string;
    }
    interface IsikggceBordTmfSection1BlTexte {
        nomclient: string;
        numcarte: string;
    }
    class SikggceBordTmf implements IsikggceBordTmf {
        section1: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IsikggceBordTmfSection1[];
        genericEnteteets: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericEnteteets[];
        genericPiedpageets: comOpesFinancieres.CarteTMF.impression.sikggceBordTmf.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SikggceBordTmfArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SikggceBordTmfGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SikggceBordTmfArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SikggceBordTmfImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SikggceBordTmfArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SikggceBordTmfImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.comOpesFinancieres.CarteTMF.impression {
    interface ILibellesEtablissement {
        alaEtab1: string;
        laEtab1: string;
        laEtab11: string;
        laEtab2: string;
        delaEtab1: string;
        laEtab21: string;
    }
    interface IChampsImpressionCarteTmf {
        nomclient: string;
        adresse: string;
        numcarte: string;
        libligne: string;
        piece: string;
    }
    class ImpressionBordereauCarteTMFService {
        private serviceAgentExtended;
        private $q;
        private libelleCaisseService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, libelleCaisseService: LibelleCaisseService);
        /**
         * Permet de générer et d'imprimer le bordereau.
         * @returns void
         */
        genererImprimerBordereau(operationFinanciere: Model.OperationFinanciere, numeroCarte: string, estOAD?: boolean): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
    }
}

declare module myway.comOpesFinancieres.CarteTMF.impression {
    /**
     * Article placé devant le libellé de la caisse.
     * Un article à plusieurs variantes suivant le genre du libellé (masculin, féminin, pluriel).
     */
    enum ArticleCaisse {
        DES = 0,
        LA = 1,
        SA = 2,
        A_LA = 3,
        PAR_LA = 4,
        DE_SA = 5,
        DE_LA = 6,
    }
    function isArticlePluriel(article: ArticleCaisse): boolean;
    enum Genre {
        F = 0,
        M = 1,
    }
    interface ILibelleCaisse {
        genre: Genre;
        libelleSingulier: string;
        libellePluriel: string;
    }
    interface IArticlesCaisse {
        DES: string;
        LA: string;
        SA: string;
        A_LA: string;
        PAR_LA: string;
        DE_SA: string;
        DE_LA: string;
    }
    /**
     * Classe utilitaire pour la récupértion du libellé de la banque avec ou sans articles.
     */
    class LibelleCaisseService {
        private articlesFeminin;
        private articlesMasculin;
        private defaultLibelleCaisse;
        private exceptionsLibelleCaisse;
        constructor();
        /**
         * Retourne le libellé de la caisse : "Caisse d'Epargne" ou cas particulier (ex: Crédit Foncier).
         * Cette méthode gère les cas particuliers des caisses 12579, 13220, 13798, 30258, 42559, 43199.
         * Les articles DES, LA, SA, A_LA, PAR_LA, DE_SA, DE_LA sont gérés.
         * En présence d'article, cette méthode gère les genres : maculin, féminin, pluriel.
         * @param {string} codeEtablissement code établissement sur 5 caractères
         * @param {ArticleCaisse} article article placé devant le libellé (par défaut: undefined = sans article)
         * @param {boolean} majusculePremiereLettreArticle premère lettre de l'article en majuscule : true ou false (par défaut: false)
         */
        getLibelleCaisse(codeEtablissement: string, article?: ArticleCaisse, majusculePremiereLettreArticle?: boolean): string;
        private genererLibelle(libelleCaisse, article, isArticlePluriel, majusculePremiereLettreArticle);
    }
}

declare module myway.comOpesFinancieres {
    class ModalInitialiserCarteTmfController {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        estVerifie: boolean;
        estAvecAlertesGab: boolean;
        private form;
        constantes: typeof Constantes;
        modalDatas: any;
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        /**
         * Vérification de la saisie du formulaire
         * @return {boolean} true si valide, false sinon
         */
        verifierFormulaire(): boolean;
        /**
         * Vérification de la saisie du numéro de carte
         * @return {boolean} true si valide, false sinon
         */
        saisieErroneeNumeroCarte(): boolean;
        annuler(): void;
        /**
         * Validation de la carte TMF saisie et fermeture de la popup
         */
        valider(): void;
    }
}

declare module myway.comOpesFinancieres {
    class ModalChequeBanqueController {
        private $scope;
        private impressionChequeDeBanqueService;
        private chequeBanqueService;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        isDerogationImpression: boolean;
        constructor($scope: ng.IScope, impressionChequeDeBanqueService: ImpressionChequeDeBanqueService, chequeBanqueService: myway.comOpesFinancieres.ChequeBanqueService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        close(): void;
        /**
         * Bouton "Ne pas imprimer", c'est à dire qu'on a l'habilitation pour ne pas imprimer
         */
        nePasImprimer(): void;
        /**
         * Lancement du service d'impression et fermeture de la popup
         */
        imprimer(): void;
    }
}

declare module myway.comOpesFinancieres {
    class ModalChequeBanqueOperationDepotRetraitController {
        private $scope;
        private impressionChequeDeBanqueService;
        private chequeBanqueService;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        isDerogationImpression: boolean;
        constructor($scope: ng.IScope, impressionChequeDeBanqueService: ImpressionChequeDeBanqueService, chequeBanqueService: myway.comOpesFinancieres.ChequeBanqueService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        close(): void;
        /**
         * Bouton "Ne pas imprimer", c'est à dire qu'on a l'habilitation pour ne pas imprimer
         */
        nePasImprimer(): void;
        /**
         * Lancement du service d'impression et fermeture de la popup
         */
        imprimer(): void;
    }
}

declare module myway.comOpesFinancieres.Model {
    interface IParamAdresseRessource {
        codeEtablissement: string;
        idPersonne: string;
    }
    interface IAdresse {
        identifiantPersonne: string;
        codeEtablissement: string;
        identifiantAgent: string;
        typePersonne: string;
        agenceRattachement: string;
        codeQualiteAgent: string;
        numeroChronoProfessionnel: string;
        numeroChronoLieuActivite: string;
        identifiantAdresse: string;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        codeValiditeAdresseUNIVERS: string;
        indicateurEnvoiCourrier: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        numeroVoiePTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: string;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: string;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: string;
        nombreRetourPTT: string;
    }
}

declare module myway.comOpesFinancieres.Model {
    interface IParamIdentificationRessource {
        codeEtablissement: string;
        idPersonne: string;
    }
    interface IIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeStatut: string;
        libelleStatut: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: Date;
        codeGuichetRisque: string;
        codeMarche: ICodeMarche;
    }
    interface ICodeMarche {
        codeTypeSegmentation: string;
        codeSegmenation2DernCar: string;
        libelleLongSegmentation: string;
        libelleCourtSegmentation: string;
        codeSegmentationCalculee: string;
        libelleFamilleMarche: string;
        codeSegmentationConfirmee: string;
        recalculSegmentation: string;
        indicateurForcage: string;
        codeTypeSegmentationForcage: string;
        codeSegmentationForcage: string;
    }
}

declare module myway.comOpesFinancieres.Model {
    interface IParamPersonneMoraleInformationRessource {
        codeEtablissement: string;
        identifiantTiers: string;
    }
    interface ISituationFinanciere {
        montantCapitalSocial: number;
        montantChiffreAffaires: number;
        effectif: number;
        dateArreteComptable: number;
        anneeChiffreAffaires: number;
    }
    interface ICorporateInformation {
        codeSituationJuridique: string;
        numeroSiren: string;
        codeIndicateurEntrepriseEtrangere: string;
        dateCreationJuridique: Date;
        raisonSociale: string;
        nomCommercial: string;
        codeTypeCommerceOrganise: string;
        codeAgentEconomique: string;
        identifiantTiers: number;
        situationFinanciere: ISituationFinanciere;
        codeEtablissement: string;
        codeDeviseISO4217a3: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        codeTypeTiers: string;
        codeRegimeFiscal: string;
        codeCotation: string;
        codeAppartenanceReseau: string;
        adresse: IAdresseCorporate;
        codeCategoJuridi2DerCaracteres: string;
        codeFamilleCategorieJuridique: string;
        codeGuichetRisque: number;
        referenceExterneEDS: number;
        eligibiliteTiers: string;
        codeTypeRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: Date;
        numeroImmatriculation: string;
        sigle: string;
        etablissement: IEtablissement;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
        listeMotCle: Array<string>;
        numeroChrono: number;
        codeTeteGroupe: string;
        troisDerniersCaracteresNAF: string;
        codeFamilleNAFINSEE: string;
        activiteEconomiqueReelleProfessionnelle: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEconomique: string;
        codeTypePersonne: string;
        prospect: IProspect;
        indicateurDroitAuCompte: string;
        professionnelImmobilier: IProfessionnelImmobilier;
        dateClotureJuridique: Date;
        codeMajImmatriculation: string;
        listeImmatriculation: Array<IImmatriculation>;
    }
    interface IAdresseCorporate {
        identifiant: number;
        codeType: string;
        indicateurEnvoiCourrier: string;
        codePays: string;
        codeTypeLieu: string;
    }
    interface IEtablissement {
        designationCourteLieuActivite: string;
        designationLongueLieuActivite: string;
        dateDebutExploitationLieuActivite: Date;
        codeResident: string;
        numeroComplementSIRET: string;
        dateFinExploitation: Date;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    interface IProspect {
        codeSegmentation: string;
        CodeTypeSegmentation: string;
        numeroPortefeuille: number;
    }
    interface IProfessionnelImmobilier {
        indicateurSteCivileImmoPatrimoniale: boolean;
        indicateurSocieteExploitation: boolean;
        indicateurStrDedieeA1OpeImmoMax: boolean;
        indicateurGarantieSurActifImmoFi: boolean;
        indicateurStrRemboursementDesConcours: boolean;
        indicateurExerciceSup1ActiviteImmo: boolean;
        codeCategorieProfImmo: string;
        timestampCreationQuestionnairePIM: string;
    }
    interface IImmatriculation {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfesionnel: number;
        codeTypeRegistre: string;
        numeroImmatriculationRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: Date;
    }
}

declare module myway.comOpesFinancieres.Model {
    interface IParamPersonneParticulierInformationRessource {
        codeEtablissement: string;
        idPersonne: string;
    }
    interface IParticulierInformation {
        autresPrenom: string;
        categorieSocioprofessionnelle: string;
        codeAccesMinitel: string;
        codeAppartenanceReseau: string;
        codeBlocageVAO: string;
        codeCapaciteJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        codeCivilite: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeEtablissement: string;
        codeExistenceListeRouge: string;
        codeFamilleCategorieJuridique: string;
        codeFamilleNAFINSEE: string;
        codeGuichetRisque: string;
        codeISOPays: string;
        codeInseeLocalite: string;
        codeInseePays: string;
        codeInseePaysDoubleNationalite: string;
        codeInseePaysNationnalite: string;
        codePaysNaissance: string;
        codePieceJustif: string;
        codePostalFranceEtEtranger: string;
        codePostalPTT: string;
        codeQuartier: string;
        codeRegimeMatrimonial: string;
        codeResident: string;
        codeRetourDistribution: string;
        codeSecteurEmploi: string;
        codeSexe: string;
        codeSituationFamiliale: string;
        codeTypeAdresse: string;
        codeTypeContratTravail: string;
        codeTypeNIF: string;
        commentaireTelephone: string;
        dateAttributionFATCA: string;
        dateDeces: string;
        dateDecesPresume: string;
        dateEffetCSP: string;
        dateEffetOptionResidence: string;
        dateEffetSituationFamiliale: string;
        dateEmbaucheEmployeurActuel: string;
        dateFinContratTravail: string;
        dateNaissance: string;
        dateNaissanceConjoint: string;
        dateNaturalisation: string;
        dateObtentionPieceJustificative: string;
        designationCourte: string;
        domiciliationRevenu: string;
        droitAuCompte: string;
        edsDomiciliation: number;
        edsInterneDomiciliation: number;
        eligibiliteFGDR: string;
        horsPresenceClient: string;
        identifiantAdresse: number;
        identifiantPersonne: number;
        identifiantRelationtEconomique: number;
        indicDecesPresume: string;
        indicDonationEntreEpoux: string;
        indicateurActiviteProfessionnel: string;
        indicateurAutoEntrepreneur: string;
        indicateurDetentionTelephone: string;
        indicateurEnvoiCourrier: string;
        indicateurPPE: string;
        indicateurSocietaire: string;
        indiceAmericaniteFATCA: string;
        libelleAppartenanceReseau: string;
        libelleCapaciteJuridique: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleCivilite: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libelleInseeLocalite: string;
        libelleInseePaysDoubleNationalite: string;
        libelleNAFInsee: string;
        libellePaysNaissance: string;
        libellePaysNationnalite: string;
        libelleProfession: string;
        libelleRegimeMatirimonial: string;
        libelleSexe: string;
        libelleSituationFamiliale: string;
        libelleSocietaire: string;
        libelleStatutFATCA: string;
        libelleTypeContratTravail: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        nif: string;
        nomEmployeur: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        nombreEnfantACharge: number;
        numeroFax: string;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        numeroTourneeFacteur: number;
        numeroVoieHexavia: number;
        numeroVoiePTT: number;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        prenom: string;
        refPieceJustificative: string;
        sirenAutoEntrepreneur: string;
        sirenEmployeur: string;
        troisDerniersCaracteresNAF: string;
        typeClauseMatrimoniale: string;
        gestionPrivee: IGestionPriveeComplementPersonnePhysique;
        statutPro: IStatutProComplementPersonnePhysique;
    }
    interface IGestionPriveeComplementPersonnePhysique {
        codeActnMajSuivSpclGp: string;
        codeEtablissement: string;
        codeEtatSuiviGP: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS: string;
        identifiantEDS2: string;
        identifiantExterneEDS: string;
        identifiantExterneEDS2: string;
        identifiantPersonne: string;
        libelleCalculeEDS: string;
        libelleCalculeEDS2: string;
        libelleEDS: string;
        libelleFonctionPF: string;
        typeEDS: string;
    }
    interface IStatutProComplementPersonnePhysique {
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateFinValiditeStatutPro: string;
        dateModificationStatutPro: string;
        identifiantExterneAgentModification: string;
        identifiantInterneAgentModification: string;
        identifiantPersonne: string;
        libelleCalculeEDS: string;
        libelleEDS: string;
        libelleFonctionPF: string;
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Represensation du segment billeterie
     */
    class SegmentBilleterie {
        /**
         * Monnaie de la billeterie
         */
        monnaieBilleterie: number;
        /**
         * Nombre de coupure
         */
        nombreCoupure: MyWay.Model.Coupure;
        /**
         * // divers espèce autres que billet (pièces de monnaie)
         */
        monnaieSansBillet: number;
        constructor();
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Representation du segment cheque
     */
    class SegmentCheque {
        /**
         * Mode de fonctionnement : 0 = sans lecteur, 1 = avec
         */
        modeFonctionnement: string;
        /**
         * Montant global de l'opération
         */
        montant: number;
        /**
         * Devise du montant
         */
        deviseMontant: string;
        /**
         * Structure info chèque
         */
        S_INFOCHEQUE: myway.comOpesFinancieres.Model.SegmentInfoCheque[];
        constructor();
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle représentant le segment des informations d'un chèque
     */
    class SegmentInfoCheque {
        /**
         *  COLIDV
         */
        deviseCheque: string;
        /**
         * NumCheque
         */
        numeroCheque: string;
        /**
         * ZoneInterB
         */
        zoneInterBancaire: string;
        /**
         * ZoneInterne
         */
        zoneInterne: string;
        /**
         * MontantChq
         */
        montantCheque: number;
        constructor();
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle représentant les informations d'opérations diverses
     * Utilisé dans une opération financière de type versement ou clôture
     */
    class SegmentInfoOd {
        mode: string;
        codeRegroupement: string;
        modeSerie: string;
        codeRequete: string;
        codeFamilleOd: string;
        codeTypeOd: string;
        codeSensOd: string;
        libelleFamilleOd: string;
        libelleTypeOd: string;
        libelleIndicateurZoneTiers: string;
        indicateurZoneTiers: string;
        libelleIndicateurZoneObligatoire: string;
        indicateurZoneObjetObligatoire: string;
        constructor();
    }
    /**
     * Modèle représentant les informations d'opérations diverses (Segment NSDK PRJO)
     * Utilisé dans les opérations financières de type ouverture CDD
     */
    class SegmentPRJO {
        /**
         * Numero compte client. Champ NOGXRC
         */
        numeroCompteclient: string;
        /**
         * Code devise operation. Champ COLIDV
         */
        codeDeviseOperation: string;
        /**
         * Montant operation
         */
        montantOperation: number;
        /**
         * Montant commission. Champ MntCom.
         */
        montantCommission: number;
        /**
         * Libelle famille OD. Champ ULIWFO
         */
        libelleFamilleOD: string;
        /**
         * Libelle type OD. Champ ULIWOD
         */
        libelleTypeOD: string;
        /**
         * Code de a famille d'OD. Champ COJOFA.
         */
        codeFamilleOD: string;
        /**
         * Detail a imprimer.
         */
        detailAImprimer: string;
        /**
         * Code transaction. Champ IDSEQ3
         */
        codeTransaction: string;
        /**
         * Code reference Operation Diverse. Champ COJXHD
         */
        codeReferenceOD: string;
        /**
         * Libelle 1 saisi par l'utilisateur pour l'OD. Champ ULIP06 ou ULIP08 (en fonction des cas).
         */
        libelle1SaisiOD: string;
        /**
         * Libelle 2 saisi par l'utilisateur pour l'OD. Champ ULIP07
         */
        libelle2SaisiOD: string;
        constructor();
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle représentant le segment transitant entre le module de versement/remboursement un module appelant
     */
    class SegmentPRVRIO {
        /**
         * titre
         */
        titre: string;
        /**
         * indicateur mode financier
         */
        mfIndicateur: string;
        /**
         * texte du bouton validation
         */
        texteBoutonValidation: string;
        /**
         * montant minimum autorisé pour l'opération financière
         */
        montantMinimum: number;
        /**
         * montant maximum autorisé pour l'opération financière
         */
        montantMaximum: number;
        /**
         * COLIDVParam
         */
        codeDeviseMontantParametre: string;
        /**
         * NOGXRC
         */
        numeroCompteRice: string;
        /**
         * QTGLPR
         */
        anneesProrogationPEL: string;
        /**
         * CTGXM1
         */
        modeFinancierNumerique: string;
        /**
         * COGXEF
         */
        codeEvenementAtome: string;
        /**
         * COERPR
         */
        codePrestationTarifaire: string;
        /**
         * adresse segment cheque
         */
        S_CHEQUE: myway.comOpesFinancieres.Model.SegmentCheque;
        /**
         * CTGXMF
         */
        modeFinancierChoisi: string;
        /**
         * COLIDV
         */
        codeDeviseMontantOperation: string;
        /**
         * montant global de l'opération
         */
        montantGlobalOperation: number;
        /**
         * LBGXO1
         */
        libelleOperation1: string;
        /**
         * libellé de l'indicateur blocage
         */
        indicateurLibelleBlocage: string;
        /**
         * DVHDO1
         */
        dateDeValeur: Date;
        /**
         * indicateur de la date de blocage
         */
        indicateurDateBlocage: string;
        /**
         * CODARO
         */
        codeRoleParticipant: string;
        /**
         * LIDANP
         */
        nomPatronymiqueParticipant: string;
        /**
         * LIDAPP
         */
        prenomParticipant: string;
        /**
         * Identite
         */
        identiteParticipant: string;
        /**
         * NODATP
         */
        numeroTelephoneParticipant: string;
        /**
         * NUKXMP
         */
        numeroCheque: string;
        /**
         * LNDABE
         */
        ordreCheque: string;
        chequeGlobal: string;
        derniereContrepartie: string;
        /**
         * CTGXCH
         */
        typeCheque: string;
        /**
         * QTGXRE
         */
        nombreJourReserveEncaissement: string;
        /**
         * CIGLDM
         */
        supportLivret: string;
        /**
         * CIGLPR
         */
        presentationLivret: string;
        /**
         * indicateur (O/N) bloquant la bascule O/N du CIGLPR
         */
        indicOblig: string;
        /**
         * MTGELI
         */
        ancienSoldeLivret: number;
        /**
         * indicateur de blocage de l'ancien solde
         */
        indicateurBlocageAncienSolde: string;
        /**
         * NOGELI
         */
        prochainNumeroLigneAImprimer: string;
        /**
         * indicateur de blocage de numero de ligne
         */
        ligneBlocage: string;
        /**
         * COLIDA
         */
        codeDeviseSoldeLivret: string;
        /**
         * indicateur de présence d'une OD
         */
        indicateurOD: string;
        /**
         * segment operation multiple
         */
        S_PRVRIOUGR: myway.comOpesFinancieres.Model.SegmentPRVRIOUGR[];
        /**
         * segment billeterie
         */
        S_BILLETERIE: myway.comOpesFinancieres.Model.SegmentBilleterie;
        /**
         * LBGXO2 libelle de l'operation
         */
        libelleOperation2: string;
        /**
         * NODAPE
         */
        numeroPersonneSignataire: string;
        constructor();
    }
}

declare module myway.comOpesFinancieres.Model {
    /**
     * Modèle représentant le segment d'une des répartitions d'une opération,
     * ou d'une des contreparties d'un virement
     */
    class SegmentPRVRIOUGR {
        /**
         * numéro du compte - rice - NOGXRC
         */
        numeroCompte: string;
        /**
         * montant du virement
         */
        montantVirement: number;
        /**
         * libellé du virement
         */
        libelleVirement: string;
        constructor();
    }
}

declare module myway.comOpesFinancieres.ImpressionBordereau {
    class GenerationBordereauUtils {
        static formatageRicePourBordereau(rice: string): string;
        static formatageMontantPourBordereau(montant: number): string;
    }
}

declare module myway.comOpesFinancieres.ImpressionBordereau {
    class GenerationBordereau {
        createDocument(bordereauOperation: myway.comOpesFinancieres.Model.BordereauOperation, client: MyWay.Model.Client, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere, authentificationInfo: MyWay.Services.Context.AuthentificationInfo): siprgce_bordereau_BORD001;
        private initialisationBordereau();
        private constructionBlocTitre();
        private constructionBlocEntete(authentificationInfo, contexteSaisieOperationFinanciere);
        private constructionBlocPiedPage();
        private constructionBlocAvis(lignesBordereauOperation);
        private constructionBlocInfosGenerales(client, contexteSaisieOperationFinanciere);
        private constructionBlocLignes();
        private constructionBlocLignes2();
        private constructionBlocOperationLigne2(blocLignes, lignesBordereauOperation);
        private constructionLignes3(blocLignes, ligneBordereauOperation);
        private constructionLignes4(blocLignes);
        private constructionLignes5(blocLignes, ligneBordereauOperation);
        private constructionLignes5Bis(blocLignes);
        private constructionLignes6(blocLignes, contenuLigne);
        /**
         * Permet la construction du bloc de synthese de billetterie pour le depot.
         */
        private constructionBlocSyntheseBilletterieDepot(lignesBorderauOperation, montantBilletterieDepot, billetterieDepot);
        /**
         * Permet la construction du bloc de synthese de billetterie pour le depot.
         */
        private constructionBlocSyntheseBilletterieRetrait(lignesBorderauOperation, montantBilletterieRetrait, billetterieRetrait);
        /**
         * Permet la construction du tableau de billetterie pour le bordereau en depot.
         */
        private constructionBlocTableauBilletterieDepot(lignesBorderauOperation, billetterieDepot);
        /**
        * Permet la construction du tableau de billetterie pour le bordereau.
        */
        private constructionBlocTableauBilletterieRetrait(lignesBorderauOperation, billetterieRetrait);
        private constructionBlocSignature(participant, referenceIdentite);
    }
}

declare module myway.comOpesFinancieres {
    class ImpressionBordereauService {
        private serviceAgentExtended;
        private journalactivitebancaireBordereauService;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, journalactivitebancaireBordereauService: myway.comOpesFinancieres.JournalactivitebancaireBordereauService, $q: ng.IQService);
        /**
         * Permet de visualiser un PDF de bordereau d'opération.
         * @param {MyWay.Model.Client} client
         * @param {myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere} contexteSaisieOperationFinanciere
         * @returns void
         */
        visualiserBordereau(client: MyWay.Model.Client, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere): void;
        /**
         * Permet de générer et d'imprimer le bordereau.
         * @param {MyWay.Model.Client} client
         * @param {myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere} contexteSaisieOperationFinanciere
         * @returns void
         */
        genererImprimerBordereau(client: MyWay.Model.Client, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
        /**
         * Permet de générer et d'imprimer le bordereau MyWay sans SAG, donc avec la popup Active X d'impression
         * @param {MyWay.Model.Client} client
         * @param {myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere} contexteSaisieOperationFinanciere
         * @returns void
         */
        genererImprimerBordereauMyWaySansSag(client: MyWay.Model.Client, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere, operationFinanciere?: myway.comOpesFinancieres.Model.OperationFinanciere): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
        /**
         * Permet de générer le bordereau.
         * @param {MyWay.Model.Client} client
         * @param {myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere} contexteSaisieOperationFinanciere
         * @returns ng.IPromise<MyWay.Services.Impression.DocumentGenere>
         */
        genererBordereau(client: MyWay.Model.Client, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
        /**
         * Permet de générer et d'archiver un bordereau d'opération.
         * @param {MyWay.Model.Client} client
         * @param {myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere} contexteSaisieOperationFinanciere
         * @param {string} idntCmpstApplf
         * @param {MyWay.Services.Impression.ProprietesDoc} proprietesDoc
         * @returns ng.IPromise<string>
         */
        genererArchiverBordereau(client: MyWay.Model.Client, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere, idntCmpstApplf: string, proprietesDoc: MyWay.Services.Impression.ProprietesDoc): ng.IPromise<string>;
        /**
         * Permet de récupérer l'identification d'un client.
         * @param {string} identifiantPersonne
         * @param {string} codeEtablissement
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.IIdentification>
         */
        ressourceIdentificationParNumeroPersonne(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<myway.comOpesFinancieres.Model.IIdentification>;
        /**
         * Ressource qui permet de récupérer les informations d'une personne morale.
         * @param {string} identifiantPersonne
         * @param {string} codeEtablissement
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.ICorporateInformation>
         */
        ressourceInformationPersonneMorale(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<myway.comOpesFinancieres.Model.ICorporateInformation>;
        /**
         * Ressource qui permet de recupérer les informations d'un particulier.
         * @param {string} identifiantPersonne
         * @param {string} codeEtablissement
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.IParticulierInformation>
         */
        ressourceInformationParticulier(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<myway.comOpesFinancieres.Model.IParticulierInformation>;
        /**
         * Ressource qui permet de récupérer l'adresse d'un tiers.
         * @param {string} identifiantPersonne
         * @param {string} codeEtablissement
         * @returns ng.IPromise<myway.comOpesFinancieres.Model.IAdresse>
         */
        ressourceAdresse(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<myway.comOpesFinancieres.Model.IAdresse>;
        /**
         * Permet de récupérer les informations clients pour un bordereau
         * @param {string} identifiantPersonne
         * @param {string} codeEtablissement
         * @returns ng.IPromise<MyWay.Model.Client>
         */
        recupererInformationsClientPourBordereau(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<MyWay.Model.Client>;
    }
}

declare module myway.comOpesFinancieres.ImpressionBordereau {
    interface Isiprgce_bordereau_BORD001 {
        SECTION1: myway.comOpesFinancieres.ImpressionBordereau.siprgce_bordereau_BORD001SECTION1[];
        GENERIC_ENTETEETS: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB10175[];
        b13135: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB13135[];
        b13705: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB13705[];
        b14445: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB14445[];
        b14505: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB14505[];
        b15135: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB15135[];
        b15905: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB15905[];
        b15965: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB15965[];
        b16275: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB16275[];
        b18025: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB18025[];
        b18279: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB18279[];
        b43199: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB43199[];
        b18715: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB18715[];
        b13335: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB13335[];
        b17515: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB17515[];
        b62108: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB62108[];
        b12579: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB12579[];
        b13825: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB13825[];
        b16705: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB16705[];
        b12135: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB12135[];
        b14265: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB14265[];
        b13485: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB13485[];
        b18315: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB18315[];
        b11315: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB11315[];
        b11425: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB11425[];
        b12548: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB12548[];
        b30051: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETSB30051[];
    }
    interface GENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13135 {
        d13135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14445 {
        d14445_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15135 {
        d15135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18025 {
        d18025_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13335 {
        d13335_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB62108 {
        d62108_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13825 {
        d13825_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12135 {
        d12135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13485 {
        d13485_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11315 {
        d11315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12548 {
        d12548_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_1 {
        TITRE: string;
    }
    interface GENERIC_SIGNATURE_BORD {
        QUALITE_SIGNATAIRE: string;
        LIDANM: string;
        LIDAPP: string;
        LIB_PROCURATION: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_Infosgene {
        D3: string;
        D9: string;
        D4: string;
        D10: string;
        D5: string;
        D12: string;
        D6: string;
        D7: string;
        D8: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE2 {
        D1: string;
        D2: string;
        D3: string;
        D4: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE2BIS {
        D1B: string;
        D2B: string;
        D3B: string;
        D4B: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE3 {
        D6: string;
        D7: string;
        D8: string;
        D9: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE5 {
        D21: string;
        D22: string;
        D23: string;
        D24: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE5BIS {
        D21B: string;
        D22B: string;
        D23B: string;
        D24B: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE6 {
        D31: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_Lignes2 {
        LIGNE2: number;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_Suite {
        D1: string;
        D2: string;
        D6: string;
        D7: string;
        D8: string;
        D9: string;
        D10: string;
        D5: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_SuiteFin {
        D5: string;
        D6: string;
        D7: string;
        D8: string;
        D9: string;
        D10: string;
        D11: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_SuiteMon {
        NB1: string;
        VB1: string;
        NP1: string;
        VP1: string;
        NB2: string;
        VB2: string;
        NP2: string;
        VP2: string;
        NB3: string;
        VB3: string;
        NP3: string;
        VP3: string;
        NB4: string;
        VB4: string;
        NP4: string;
        VP4: string;
        NB5: string;
        VB5: string;
        NP5: string;
        VP5: string;
        NB6: string;
        VB6: string;
        NP6: string;
        VP6: string;
        NB7: string;
        VB7: string;
        NP7: string;
        VP7: string;
        NP8: string;
        VP8: string;
        TotBil: string;
        TotMon: string;
        TotEnc: string;
    }
    interface siprgce_bordereau_BORD001SECTION1 {
        _blocChoice_: (BL_1 | BL_Avis | BL_Infosgene | BL_Lignes | BL_Lignes2 | BL_Saut | BL_Suite | BL_SuiteFin | BL_SuiteMon | GENERIC_CLAUSECNIL | IGENERIC_SIGNATURE_BORD)[];
    }
    interface BL_1 {
        BL_1: siprgce_bordereau_BORD001SECTION1BL_1;
    }
    interface BL_Avis {
        BL_Avis: number;
    }
    interface BL_Infosgene {
        BL_Infosgene: siprgce_bordereau_BORD001SECTION1BL_Infosgene;
    }
    interface BL_Lignes {
        BL_Lignes: Isiprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes;
    }
    interface BL_Lignes2 {
        BL_Lignes2: siprgce_bordereau_BORD001SECTION1BL_Lignes2;
    }
    interface BL_Saut {
        BL_Saut: number;
    }
    interface BL_Suite {
        BL_Suite: siprgce_bordereau_BORD001SECTION1BL_Suite;
    }
    interface BL_SuiteFin {
        BL_SuiteFin: siprgce_bordereau_BORD001SECTION1BL_SuiteFin;
    }
    interface BL_SuiteMon {
        BL_SuiteMon: siprgce_bordereau_BORD001SECTION1BL_SuiteMon;
    }
    interface GENERIC_CLAUSECNIL {
        GENERIC_CLAUSECNIL: number;
    }
    interface IGENERIC_SIGNATURE_BORD {
        GENERIC_SIGNATURE_BORD: GENERIC_SIGNATURE_BORD;
    }
    interface Isiprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes {
        Tableau_Lignes: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes {
        _blocChoice_: (LIGNE1 | LIGNE2 | LIGNE2BIS | LIGNE3 | LIGNE4 | LIGNE5 | LIGNE5BIS | LIGNE6)[];
    }
    interface LIGNE1 {
        LIGNE1: number;
    }
    interface LIGNE2 {
        LIGNE2: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE2;
    }
    interface LIGNE2BIS {
        LIGNE2BIS: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE2BIS;
    }
    interface LIGNE3 {
        LIGNE3: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE3;
    }
    interface LIGNE4 {
        LIGNE4: number;
    }
    interface LIGNE5 {
        LIGNE5: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE5;
    }
    interface LIGNE5BIS {
        LIGNE5BIS: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE5BIS;
    }
    interface LIGNE6 {
        LIGNE6: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE6;
    }
    class siprgce_bordereau_BORD001 implements Isiprgce_bordereau_BORD001 {
        SECTION1: myway.comOpesFinancieres.ImpressionBordereau.siprgce_bordereau_BORD001SECTION1[];
        GENERIC_ENTETEETS: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: myway.comOpesFinancieres.ImpressionBordereau.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class siprgce_bordereau_BORD001GenerationParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor(action: MyWay.Services.Impression.GENERATION_ACTION);
        constructor(action: MyWay.Services.Impression.GENERATION_ACTION, idntCmpstApplf: string, proprietesDoc: MyWay.Services.Impression.ProprietesDoc);
    }
    class siprgce_bordereau_BORD001ImpressionParams {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class siprgce_bordereau_BORD001GenerationImpressionMyWayParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class siprgce_bordereau_BORD001GenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor(action: MyWay.Services.Impression.GENERATION_IMPRESSION_ACTION);
        constructor(action: MyWay.Services.Impression.GENERATION_IMPRESSION_ACTION, idntCmpstApplf: string, proprietesDoc: MyWay.Services.Impression.ProprietesDoc);
    }
}

declare module myway.comOpesFinancieres.ImpressionChequeDeBanque {
    class GenerationChequeBanqueUtils {
        /**
         * Cette méthode permet de couper le montant en lettre du chèque de banque en deux lignes.
         * Les valeurs sont définis par rapport au mode financier passé en paramètre.
         */
        static couperMontantLettresEnDeuxLignes(modeFinancier: string, montantEnLettres: string): Array<string>;
    }
}

declare module myway.comOpesFinancieres.ImpressionChequeDeBanque {
    class GenerationChequeDeBanque {
        creerChequeDeBanque(chequeDeBanque: myway.comOpesFinancieres.Model.ChequeBanque, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere, montantLettre: string): cheque_de_banque;
    }
}

declare module myway.comOpesFinancieres {
    class ImpressionChequeDeBanqueService {
        private serviceAgentExtended;
        static $inject: string[];
        private static OUTIL_COMMUN;
        private static VERSION;
        private static NOM_RESSOURCE_CONVERSION;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet la génératio d'un PDF de chèque de banque.
         * @Param : Objet cheque de banque de type myway.comOpesFinancieres.Model.ChequeBanque
         * @Param : Objet contexte de saisie d'operation financiere de type myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere
         */
        genererChequeDeBanque(chequeDeBanque: myway.comOpesFinancieres.Model.ChequeBanque, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
        /**
         * Permet l'impression directement du chèque de banque
         * @param {myway.comOpesFinancieres.Model.ChequeBanque} cchequeDeBanque
         * @param {myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere} contexteSaisieOperationFinanciere
         */
        impressionChequeDeBanque(chequeDeBanque: myway.comOpesFinancieres.Model.ChequeBanque, contexteSaisieOperationFinanciere: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere): void;
        /**
         * Permet la convertion d'un montant en lettres.
         * @Param: Montant de type number
         * @Return : Retour une promesse de type string
         */
        convertirNombreEnLettres(nombreChiffres: number): ng.IPromise<string>;
    }
}

declare module myway.comOpesFinancieres.ImpressionChequeDeBanque {
    interface Icheque_de_banque {
        montantligne1: string;
        montantligne2: string;
        beneficiare: string;
        montantchiffre: string;
        lieu: string;
        date: string;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    class cheque_de_banque implements Icheque_de_banque {
        montantligne1: string;
        montantligne2: string;
        beneficiare: string;
        montantchiffre: string;
        lieu: string;
        date: string;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class cheque_de_banqueGenerationParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class cheque_de_banqueImpressionParams {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class cheque_de_banqueGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}
