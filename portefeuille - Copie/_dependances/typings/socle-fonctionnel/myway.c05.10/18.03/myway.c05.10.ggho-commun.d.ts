
declare module myway.gestionEpargne.gghoCommun {
    var app: any;
}

declare module myway.gestionEpargne.gghoCommun {
    interface IDonneesOuverture {
        /**
         * Données établissement
         */
        etablissement: horsOffre.commun.Etablissement;
        /**
         * Informations du détenteur visé dans la synthèse
         */
        detenteur: horsOffre.commun.Detenteur;
        /*** Données de l'agent connecté
         */
        agent: horsOffre.commun.Agent;
        /**
         * Données du produit en cours d'ouverture
         */
        produit: IDonneesProduit;
    }
    interface IDonneesProduit {
        montantNominalSouscription: number;
        libelleProduitCatalogueDAT: string;
    }
    class OuvertureProduitControleur {
        protected $scope: ng.IScope;
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected contexteProcessusService: myway.gestionEpargne.horsOffre.commun.ContexteProcessusService;
        protected identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService;
        protected saisieRiceService: myway.comInterdomaine.SaisieRiceService;
        protected postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService;
        protected opeFiService: OpeFiService;
        protected ouvertureProduitService: OuvertureProduitService;
        protected gghoService: GghoService;
        protected resultatCommercialService: ResultatCommercialService;
        protected blocMDECDATService: myway.gestionEpargne.gghoCommun.BlocMDECDATService;
        protected creerDossierDeVenteService: myway.gestionEpargne.gghoCommun.CreerDossierDeVenteService;
        protected donneesSauvegardeProduitServiceDATService: myway.gestionEpargne.gghoCommun.DonneesSauvegardeProduitServiceDATService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        contexteAppel: string;
        codeActeGestion: string;
        idBloc: string;
        modeAcces: string;
        modeAffichage: string;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        codeModeFinancierParDefaut: string;
        donneesOuverture: IDonneesOuverture;
        /**
         * liste de type compte qui seront proposé dans les composant virement interne
         */
        listeTypesComptesPourVersements: string[];
        /**
         * Liste alimentée quand les signataires changent pour iniquer les clients (personnes)
         * dont les comptes peuvent être listés dans les listes de compte
         */
        listeNumerosPersonnesPourVirementInterne: string[];
        estInitialise: boolean;
        estTraitementOpefiTermine: ng.IPromise<void>;
        donneesMDEC: GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        donneesSauvegardeProduitServiceDAT: GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService;
        donneesOuvertureProduits: myway.gestionEpargne.horsOffre.commun.DonneesOuvertureDAT | myway.gestionEpargne.horsOffre.commun.DonneesOuvertureQuadreto;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteProcessusService: myway.gestionEpargne.horsOffre.commun.ContexteProcessusService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, opeFiService: OpeFiService, ouvertureProduitService: OuvertureProduitService, gghoService: GghoService, resultatCommercialService: ResultatCommercialService, blocMDECDATService: myway.gestionEpargne.gghoCommun.BlocMDECDATService, creerDossierDeVenteService: myway.gestionEpargne.gghoCommun.CreerDossierDeVenteService, donneesSauvegardeProduitServiceDATService: myway.gestionEpargne.gghoCommun.DonneesSauvegardeProduitServiceDATService);
        setDonneesOuvertureProduits(donneesOuvertureProduits: myway.gestionEpargne.horsOffre.commun.DonneesOuvertureDAT | myway.gestionEpargne.horsOffre.commun.DonneesOuvertureQuadreto): void;
        /**
         * Les class fille doivent surcharger cette fonction, appeler leur ressource specifique de donnees d'ouverture et stocker le résultat dans donneesOuverture
         *
         */
        protected getDonneesOuverture(): ng.IPromise<void>;
        protected associerBoutonGGHOavecFonctionControleur(): void;
        /**
         * Les class fille doivent surcharger cette fonction pour renseigner dans this.contexte.libTitreProduit le libelle du produit
         *
         */
        protected transmettreLibelleProduitAGGHO(): void;
        /**
         * Permet d'écouter sur le bloc signataires pour récupérer les changements de signataires
         * @returns {void}
         */
        private ecouteBlocSignataire();
        private initialiserOperationFinancierePourComposant();
        validerDonneesPourOuverture: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Permet de lancer la mise en Gestion depuis GGHO
         * @implements {GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion}
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} compte rendu de mise en gestion de l'offre pour renvoi à GGHO
         */
        realiserLaMiseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private obtenirEligibiliteSAG(contractualisationActe?);
        protected ouvrirProduit(): ng.IPromise<DonneesProcessMiseEnGestion>;
        protected initialiserLesListesDeCompteSupport(): void;
        private traitementPostMiseEnGestion(donneesProcessusMiseEnGestion, eligibiliteSag);
        protected preparerOpeFiPourBordereau(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, donneesProcessusMiseEnGestion: DonneesProcessMiseEnGestion): void;
        private ajouterLibelleAutorisation(operationFinanciere);
        private renseignerSignataireDansOperationFinanciere(operationFinanciere);
        private trouverSignataireDansListeSignataires();
        private obtenirSignataireOpeFiDepuisSignataireComplet(signataire);
        private trouverSignataireDansListePersonnes();
        private obtenirSignataireOpeFiDepuisPersonne(personne);
        protected creerMDEC(): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC>;
        /**
         * Permet de sauvergarder le formulaire de saisie du DAT dans le dossier de vente,
         * @implements {GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde}
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>}
         */
        sauvegarderDossierDeVente: GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    interface IDonneesCommunes {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        codeProduitNational: string;
        codeBaremeTauxProgressif: string;
        typeTaux: string;
        dateEffetContrat: string;
        dateEcheanceContrat: string;
        codeDevise: string;
        compteSupport: ICompteSupport;
        numeroCompte: string;
    }
    interface IInfosOperationDiverse {
        codeReference: string;
        libelleType: string;
        codeFamille: string;
        libelle1Saisi: string;
        libelle2Saisi: string;
    }
    interface IInfosVirementInterne {
        riceCompteVirement: string;
        libelleVirement: string;
    }
    interface IOperationFinanciere {
        modeFinancierNumerique: string;
        codeEvenementAtome: string;
        modeFinancierChoisi: string;
        libelleOperation1: string;
        libelleOperation2: string;
        infosOperationDiverse: IInfosOperationDiverse;
        infosCheque: IInfosCheque;
        infosVirementInterne: IInfosVirementInterne;
        codeDeviseOperation: string;
        montantOperation: number;
        dateValeurOperation: string;
    }
    interface IInfosComplementaires {
        typeVersementInterets: string;
        codeIndexTauxReference: string;
        codeSigneTxMargeNego: string;
        tauxMargeNegoAgent: number;
    }
    interface IInfosCheque {
        riceCompteVirement: string;
        typeCheque: string;
        nombreJourReserveEncaissement: string;
    }
    interface ICompteSupport {
        numeroRICECompteRevenus: string;
        numeroRICECompteCapital: string;
        numeroRIBComptePaiementInterets: string;
    }
    interface ICaracteristiqueDAT {
        donneesCommunes: IDonneesCommunes;
        infosComplementaires: IInfosComplementaires;
        operationFinanciere: IOperationFinanciere;
        informationsPersonne: IInformationsPersonne;
    }
    interface IInformationsPersonne {
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        codeNatureJuridique: string;
        codeResidenceFiscale: string;
        codePaysResidencePrincipale: string;
        designationBancaire: string;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    /**
     * Information sur la devise utilisé dans le compte (euros, dollars, etc.)
     */
    class Devise {
        codeDevise: string;
        libelleDevise: string;
        symboleDevise: string;
        nombreDecimalesReelles: number;
        nombreDecimalesGerees: number;
        constructor();
    }
}

declare module myway.gestionEpargne.gghoCommun {
    interface IResultatCommercial {
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
    class ResultatCommercial {
        private _identifiantPersonne;
        identifiantPersonne: number;
        private _codeTypeFamilleResultat;
        codeTypeFamilleResultat: string;
        private _identifiantProduitService;
        identifiantProduitService: number;
        private _codeNatureResultatCommercial;
        codeNatureResultatCommercial: string;
        private _codeTypeResultatCommercial;
        codeTypeResultatCommercial: string;
        private _codeTypeProduitService;
        codeTypeProduitService: string;
        private _indicRattachableCRE;
        indicRattachableCRE: string;
        private _codeTypeProduitServiceGCP;
        codeTypeProduitServiceGCP: string;
        private _codeOrigineFonds;
        codeOrigineFonds: number;
        private _montantResultatCommercial;
        montantResultatCommercial: number;
        private _codeModeGestionLivret;
        codeModeGestionLivret: string;
        private _sousCodeProduitService;
        sousCodeProduitService: string;
        private _codeProduitCarte;
        codeProduitCarte: string;
        private _codeModeFinancier;
        codeModeFinancier: string;
        private _codeCaractereForfaitaireOffre;
        codeCaractereForfaitaireOffre: string;
        private _indicProduitServiceObligatoire;
        indicProduitServiceObligatoire: string;
        constructor(resultat: IResultatCommercial);
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class DeviseService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête GET
         * Permet d'avoir les caractéristique de la devise
         * @returns promise<Devise>
         */
        getDeviseCaracteristique(codeDevise: string): ng.IPromise<Devise>;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class CodeTypeProduitsEnum {
        static LIVRET_A: string;
        static LIVRET_B: string;
        static LIVRET_GRAND_PRIX: string;
        static COMPTE_ATTENTE: string;
        static COMPTE_DEPOTS: string;
        static LIVRET_EPARGNE_POPULAIRE: string;
        static LIVRET_DEVELOPPEMENT_DURABLE: string;
        static COMPTE_COURANT_ENTREPRISE: string;
        static LIVRET_JEUNE: string;
        static COMPTE_EPARGNE_LOGEMENT: string;
        static PLAN_EPARGNE_LOGEMENT: string;
        static CSL_DEVISE_CAD: string;
        static CSL_DEVISE_USD: string;
        static DEPOT_A_TERME: string;
        static COMPTE_PRO_INTERNE: string;
    }
    class FiltreCodeProduitService {
        constructor();
        getFiltreProduit(produit: string): string[];
        private listeProduitBDDHorsCompteAttente();
        private listeProduitBDD();
        private listeProduitCSLDevise();
        private listeProduitPourDAT();
    }
}

/**
 * Ce service référence des fonctionnalités ggho réutilisable
 */
declare module myway.gestionEpargne.gghoCommun {
    class CodeCanalEnum {
        static FF: string;
        static VAD: string;
    }
    class GghoService {
        private identifiantBordereau;
        /**
         * Permet de remplir tabErreurs dans le cas où pas de problème après l'envoi de la requête ouverture mode contrôle
         */
        formulaireOk(): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre;
        /**
         * Permet de remplir tabErreurs dans le cas où on a un problème après forçage dans l'envoi de la requête ouverture mode contrôle
         */
        formulaireKo(messageErreur: string): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre;
        /**
         * Permet de remplir tabErreurs dans le cas où on a un problème après forçage dans l'envoi de la requête ouverture mode contrôle
         */
        miseEnGestionKoAnnulationForcage(messageErreur: string): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre;
        /**
         * Permet de remplir tabErreursMiseEnGestion quand le produit est ouvert
         */
        miseEnGestionOk(nomProduit: string): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre;
        /**
         * Permet de remplir tabErreursMiseEnGestion quand il y a un problème d'ouverture du produit
         */
        miseEnGestionKo(error: MyWay.Services.Erreur, nomProduit: string): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre;
        /**
         * Permet de remplir tabErreursMiseEnGestion quand il y a un problème d'enregistrement du résultat commercial
         */
        resultatCommercialKo(): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre;
        /**
         * Concaténer les messages d'erreurs du service
         */
        listerValeursErreur(error: MyWay.Services.Erreur): string;
        /**
         *
         * @param compteRendu
         */
        getIdentifiantBordereau(): string;
        setIdentifiantBordereau(identifiantBordereau: string): void;
        isCompteRenduEnErreur(compteRendu: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion): boolean;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class InterfaceAvecGGHOService {
        static $inject: string[];
        constructor();
        faireMiseEnGestionPourGGHO(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class OpeFiService {
        private $parse;
        private $q;
        private serviceAgentExtended;
        private deviseService;
        private filtreCodeProduitService;
        private saisieRiceService;
        static $inject: string[];
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        forcageBadge: boolean;
        constructor($parse: ng.IParseService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, deviseService: DeviseService, filtreCodeProduitService: FiltreCodeProduitService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        obtenirOperationFinancierePourComposant(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, numeroPersonne: string, montant: number): ng.IPromise<myway.comOpesFinancieres.Model.OperationFinanciere>;
        /**
         * Initialiser l'objet de la BAT OP-FI au chargement de l'offre
         * @returns myway.comOpesFinancieres.Model.OperationFinanciere
         */
        initialiserOperationFinancierePourComposant(codeTypeProduit: string, numeroPersonne: string, compte: MyWay.Model.Compte, codeCanal?: string, codeFonctionnalite?: string): myway.comOpesFinancieres.Model.OperationFinanciere;
        private paddy(n, p, c);
        obtenirListeDesTypesDeCompte(codeTypeProduit: string): string[];
        obtenirComptePourOperationFinanciere(codeProduit: string, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, codeTypeProduit: string): ng.IPromise<MyWay.Model.Compte>;
        fixerMontantOperationFinanciere(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, montant: number): void;
        obtenirNumeroRibDepuisRiceOuContrat(rice: MyWay.Model.Rice, compte: MyWay.Model.Contrat): string;
        ajouterCleAuRib(ribSansCle: string): string;
        obtenirCleDepuisRibSansCle(ribSansCle: string): string;
        obtenirRiceDepuisRibSansCle(ribSansCle: string): MyWay.Model.Rice;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class DonneesProcessMiseEnGestion extends GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion {
        constructor();
        numeroCompte: string;
        montantOperation: number;
        numeroPersonne: number;
        ilYAUneDemandeAutorisation: boolean;
    }
    class OuvertureProduitService {
        private $q;
        private serviceAgentExtended;
        private opeFiService;
        private gghoService;
        private modalService;
        private contexteProcessusService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, opeFiService: gghoCommun.OpeFiService, gghoService: gghoCommun.GghoService, modalService: MyWay.UI.IModalService, contexteProcessusService: horsOffre.commun.ContexteProcessusService);
        ouvrirProduit(adapteurOuvertureProduit: AdapteurOuvertureProduit): ng.IPromise<DonneesProcessMiseEnGestion>;
        traiterDemandeDeForcage(erreur: MyWay.Services.Erreur, adapteur: AdapteurOuvertureProduit): ng.IPromise<DonneesProcessMiseEnGestion>;
        private ouvrirProduitAvecDemandeForcage(adapteur, erreur);
        private traitementSuiteARefusDeForcage(adapteur, erreur);
    }
    /**
     * Interface contenant les paramètres commun entre les query pour les cat et le quadreto
     */
    interface IpostCaracteristiqueDATQuery {
        dateOperation?: string;
        codeOptionAutorisation?: string;
        codeOptionAutorisation2?: string;
    }
    class AdapteurOuvertureProduit {
        private saisieRiceService;
        query: IpostCaracteristiqueDATQuery;
        protected operationFinancierePourRessource: IOperationFinanciere;
        libelleProduitCatalogue: string;
        constructor(saisieRiceService: myway.comInterdomaine.SaisieRiceService, operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere);
        /**
         * Fonction générique d'initialisation de la ressource modèle d'operation financière pour les ressources REST C05.10
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {myway.comOpesFinancieres.Model.SegmentPRVRIO} segmentPRVRIO - Le segment PRVRIO de l'operation financiere
         * @param {myway.comOpesFinancieres.Model.SegmentPRJO} SegmentPRJO - Le segment PRJO de l'operation financiere
         */
        initialiserOperationFinancierePourRessource(segmentPRVRIO: myway.comOpesFinancieres.Model.SegmentPRVRIO, segmentPRJO: myway.comOpesFinancieres.Model.SegmentPRJO): IOperationFinanciere;
        /**
         * Extrait les info pour le virement interne de la ressource à partir du segment operation multiple
         */
        private obtenirInfoVirementInterne(segmentPRVRIOUGR);
        ajouterCleAuRib(ribSansCle: string): string;
        obtenirRiceDepuisRibSansCle(ribSansCle: string): MyWay.Model.Rice;
        demanderOuverture(): ng.IPromise<gghoCommun.DonneesProcessMiseEnGestion>;
        setBadgeDemandeForcageOpposition(erreur: MyWay.Services.Erreur): void;
        setBadgeRefusForcageOpposition(erreur: MyWay.Services.Erreur): void;
        setBadgeDemandeForcageEpargne(erreur: MyWay.Services.Erreur): void;
        setBadgeRefusForcageEpargne(erreur: MyWay.Services.Erreur): void;
        ilYAUneDemandeAutorisation(): boolean;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    /**
     * Ce serice gère les resultats commerciaux
     */
    class ResultatCommercialService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête POST
         * Permet d'enregistrer un résultat commercial
         * @param {number} numeroPersonne
         * @param {number} identifiantProduitService - IDEGPS
         * @param {number} montantOperation - montant du versement initial
         * @returns {ng.IPromise<IResultat>}
         */
        enregistrerResultatCommercial(numeroPersonne: number, identifiantProduitService: number, montantOperation: number): ng.IPromise<IResultatCommercial>;
        /**
         * Créer la stucture qui permet d'enregistrer un résultat commercial d'un produit
         * @param {number} numeroPersonne
         * @param {number} identifiantProduitService - IDEGPS
         * @param {number} montantOperation - montant du versement initial
         * @returns {ng.IPromise<IResultat>}
         */
        private creerResultatCommercialProduit(numeroPersonne, identifiantProduitService, montantOperation);
    }
}

declare module myway.gestionEpargne.gghoCommun {
    /**
     * class permettant de définir les données à enregistrer dans le DV concernant l'OPE-FI dans le cadre de la VAD
     */
    class DonneeOuvertureDV {
        donneeOuverture: IDonneesOuverture;
        constructor();
    }
}

declare module myway.gestionEpargne.gghoCommun {
    /**
     * Données permettant de sauvegarder et restaurer les données du Livret Developpement Durable dans le dossier de vente à distance
     */
    interface IDonneesSauvegardeProduitServiceDAT extends GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService {
        operationFinanciereDV: myway.gestionEpargne.gghoCommun.OperationFinanciereDV;
        donneeProduitDatDV: myway.gestionEpargne.gghoCommun.DonneesProduitDATDV | myway.gestionEpargne.gghoCommun.DonneesProduitQuadretoDV;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    /**
     * class permettant de définir les données à enregistrer dans le DV concernant l'OPE-FI dans le cadre de la VAD
     */
    class OperationFinanciereDV {
        operationFinanciere: myway.comOpesFinancieres.Model.ChoixUtilisateurOpeFi;
        constructor();
    }
    class DonneesProduitDATDV {
        /**
         * Code devise du DAT selectionné
         */
        deviseInterIso: string;
        /**
         * Code produit régional caisse
         */
        codeProduit: string;
        /**
         * Identifie un produit  selon la codification CENCEP.
         */
        codeProduitNational: string;
        /**
         * CODE BAREME TAUX PROGRESSIF
         */
        codeBaremeTauxProgressif: string;
        /**
         * Date d'échéance au format aaaammjj
         */
        dateEcheanceContrat: string;
        /**
         * Date d'ouverture au format aaaammjj
         */
        dateEffetContrat: string;
        /**
         * Ce code permet de déterminer le type de taux du contrat CAT (Fixe ou Progressif).
         *
         * * PLAGE DE VALEUR :
         * 'F'        Taux fixe
         * 'P'        Captio  (tx progressif)
         * 'Q'        Capciel (tx progressif)
         * 'G'        Taux Progressif (PII, sans PII)
         * 'R'        Taux révisable
         * 'I'        Taux Fixe avec Bonus Inflation
         * 'T'        TRAAB (QUADRETO)
         * 'N'        Renouvelable BDR
         */
        typeTaux: string;
        /**
         * Numéro de dérogation
         */
        numeroDerogation: string;
        /**
         * Montant de souscription
         */
        montantNominalSouscription: number;
        /**
         * CODE INDEX MARCHE
         */
        codeIndexTauxReference: string;
        /**
         * TYPE VERSEMENT INTERETS
         */
        typeVersementInterets: string;
        /**
         * Taux marge négociation de l'agent
         */
        tauxMargeNegoAgent: number;
        /**
         * Code signe (+/-)
         */
        codeSigneTxMargeNego: string;
        /**
         * Heure d'ouverture de la simulation au format hhmmss
         */
        heureDebutApplication: string;
        /**
         * C'est le libellé de désignation d'un produit du catalogue DAT.
         * Exemples : "Comptes A Terme 1 mois"
         */
        libelleProduitCatalogueDAT: string;
        /**
         * Taux de rendement annuel brut.
         */
        tauxActuarielNet: number;
        detenteur: myway.gestionEpargne.horsOffre.commun.Detenteur;
        constructor();
    }
    class DonneesProduitQuadretoDV {
        /**
         * Code devise du DAT selectionné
         */
        deviseInterIso: string;
        /**
         * Code produit régional caisse
         */
        codeProduit: string;
        /**
         * Identifie un produit  selon la codification CENCEP.
         */
        codeProduitNational: string;
        /**
         * Date d'échéance au format aaaammjj
         */
        dateEcheanceContrat: string;
        /**
         * Date d'ouverture au format aaaammjj
         */
        dateEffetContrat: string;
        /**
         * Montant de souscription
         */
        montantNominalSouscription: number;
        /**
         * CODE INDEX MARCHE
         */
        codeIndexTauxReference: string;
        /**
         * C'est le libellé de désignation d'un produit du catalogue DAT.
         * Exemples : "Comptes A Terme 1 mois"
         */
        libelleProduitCatalogueDAT: string;
        /**
         * Heure d'ouverture de la simulation au format hhmmss
         */
        heureDebutApplication: string;
        /**
         * Montant net revenu souhaité
         * Uniquement pour Quadreto à revenus
         */
        mtRevenuNetSouhaite: number;
        /**
         * Revenu préconisé
         */
        mtNetRevenuCalcule: number;
        /**
         * Détermine la périodicité des revenus d'un placement
         *
         * VALEURS POSSIBLES :
         * ' '        Sans Objet
         * 'M'        Tous les mois
         * 'T'        Tous les trois mois
         * 'S'        Tous les six mois
         * 'A'        Tous les ans
         */
        codePeriodiciteRevenus: string;
        /**
         * Taux de rendement annuel brut.
         */
        tauxActuarielNet: number;
        /**
         * Valeur nette PEL à échéance
         */
        montantNetPrevisionnelEcheancePEL: number;
        detenteur: myway.gestionEpargne.horsOffre.commun.Detenteur;
        constructor();
    }
}

declare module myway.gestionEpargne.gghoCommun {
    interface ICompositionPanier {
        codeSousFamilleActeComposition: string;
        identifiantProduitServiceCompo: number;
        familleIzicarte: boolean;
        codeProduitServiceCompo: string;
    }
    interface IPieceJustif {
        documentJustificatif: string;
        messageJustificatif: string;
    }
    interface IRecherchePieceJustif {
        codeGuichetCompte: string;
        codeEtablissementCompte: string;
        numeroCompte: string;
        listePersonneComposantOffre: Array<IPersonneComposantOffre>;
        entiteTitulaireComposantOffre: IEntiteTitulaireComposantOffre;
        sections: Array<ISection>;
        presencePJ: boolean;
    }
    interface IPersonneComposantOffre {
        numeroPersonne: number;
        dateNaissancePersonne: string;
        listeCompositionPanier: Array<ICompositionPanier>;
        listePieceJustif: Array<IPieceJustif>;
        rangPersonneET: string;
        nomPersonne: string;
        prenomPersonne: string;
        codeCivilitePersonne: string;
    }
    interface IEntiteTitulaireComposantOffre {
        numeroEntiteTitulaire: number;
        listeCompositionPanier: Array<ICompositionPanier>;
        dateCreationCB: string;
        listeRepresentantLegal: Array<IRepresentantLegal>;
    }
    interface IRepresentantLegal {
        numeroPersonneRepresentant: number;
        listePieceJustif: Array<IPieceJustif>;
        nomRepresentantLegal: string;
        prenomRepresentantLegal: string;
        codeCiviliteRepresentantLegal: string;
    }
    interface ISection {
        champs: Array<IChamp>;
        titresSections: Array<ITitre>;
    }
    interface IChamp {
        libelle: string;
        valeur: string;
        vision: string;
    }
    interface ITitre {
        libelle: string;
        vision: string;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    /**
     * Ce service gère le bloc MDEC du LDD dans le cadre de la VAD
     */
    class BlocMDECDATService {
        private $q;
        private enregistrerOpeFiDansDVService;
        private enregistrerDonneeOuvertureDansDVService;
        static $inject: string[];
        constructor($q: ng.IQService, enregistrerOpeFiDansDVService: myway.gestionEpargne.gghoCommun.EnregistrerOpeFiDansDVService, enregistrerDonneeOuvertureDansDVService: myway.gestionEpargne.gghoCommun.EnregistrerDonneeOuvertureDansDVService);
        creerDonneesMDEC(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, blocMDECDonneeOuverture: GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        creerDonneeMDECCat(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, donneesOuverture: horsOffre.commun.DonneesOuvertureDAT): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC>;
        creerDonneeMDECQuadreto(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, donneesOuverture: horsOffre.commun.DonneesOuvertureQuadreto): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC>;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class CreerDossierDeVenteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de créer un dossier de vente complet pour tous les produits/services
         * @param {GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC} donneesMDEC
         * @param {GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService} donneesSauvegardeProduitService
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>}
         */
        creerDossierDeVente(donneesMDEC: GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC, donneesSauvegardeProduitService: GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    /**
     * Ce service gère le bloc MDEC du LDD dans le cadre de la VAD
     */
    class DonneesSauvegardeProduitServiceDATService {
        private enregistrerOpeFiDansDVService;
        private enregistrerDonneeOuvertureDansDVService;
        static $inject: string[];
        constructor(enregistrerOpeFiDansDVService: myway.gestionEpargne.gghoCommun.EnregistrerOpeFiDansDVService, enregistrerDonneeOuvertureDansDVService: myway.gestionEpargne.gghoCommun.EnregistrerDonneeOuvertureDansDVService);
        /**
         * Permet de créer les données de sauvegarde du produit LDD dans le DV
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @param {myway.transProduitEngage.ProduitEngageFormulaire} formulaireProduitEngage
         * @returns {GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService}
         */
        creerDonneesSauvegardeProduitServiceDAT(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, donneesOuvertureProduits: myway.gestionEpargne.horsOffre.commun.DonneesOuvertureDAT | myway.gestionEpargne.horsOffre.commun.DonneesOuvertureQuadreto): GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class EnregistrerDonneeOuvertureDansDVService {
        private $q;
        private operationFinanciereService;
        private numberFormatService;
        static $inject: string[];
        constructor($q: ng.IQService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, numberFormatService: myway.gestionEpargne.horsOffre.commun.NumberFormatService);
        enregisterDonneeProuitDansJsonData(donneesOuvertureProduits: myway.gestionEpargne.horsOffre.commun.DonneesOuvertureDAT | myway.gestionEpargne.horsOffre.commun.DonneesOuvertureQuadreto): any;
        /**
         * Pérmet d'enregistrer les données MDEC pour l'operation financière
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC}
         */
        getVueMDECDonneeOuvertureCat(donneesOuverture: horsOffre.commun.DonneesOuvertureDAT, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        /**
         * Pérmet d'enregistrer les données MDEC pour l'operation financière
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC}
         */
        getVueMDECDonneeOuvertureQuadreto(donneesOuverture: horsOffre.commun.DonneesOuvertureQuadreto, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        private afficherTRAAN(traan);
        private calculDureeDat(effet, echeance);
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class EnregistrerOpeFiDansDVService {
        private $q;
        private operationFinanciereService;
        private epargneCommunService;
        private numberFormatService;
        static $inject: string[];
        constructor($q: ng.IQService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, epargneCommunService: EpargneCommunService, numberFormatService: myway.gestionEpargne.horsOffre.commun.NumberFormatService);
        /**
         * Permet de créer les données technique lié à la BAT OPE-FI
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @returns {OperationFinanciereDV}
         */
        creerDonneesSauvegardeOperationFinanciere(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere): OperationFinanciereDV;
        /**
         * Pérmet d'enregistrer les données MDEC pour l'operation financière
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC}
         */
        getVueMDECOPEFI(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
    }
}

declare module myway.gestionEpargne.gghoCommun {
    class EpargneCommunService {
        static $inject: string[];
        constructor();
        /**
         * Permet de convertir une date au format ISO
         */
        toLocalString(date: Date): string;
        /**
         * Permet de calculer l'age à partir de la date de naissance
         * @param {Date} dateNaissance
         * @returns {number}
         */
        calculateAge(dateNaissance: Date): number;
        /**
         * Affiche un compte en séparant les partie caisse/guichet/numeroCompte(RICE + clé RICE)/clé compte
         * @param {string} numeroCompte - nuléro complet du compte
         * @param {boolean} avecCle - présence de la clé dans le numéro de compte
         * @returns {string} numero de compte formaté avec espaces
         */
        formatCompte(numeroCompte: string, avecCle: boolean): string;
    }
}
