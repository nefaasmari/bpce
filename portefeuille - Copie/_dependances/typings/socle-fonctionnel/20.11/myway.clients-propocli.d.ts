
declare module propoClient {
    var app: any;
    var compteurDossier: boolean;
}

declare module propoClient.Constantes {
    class PropoClientConstantes {
        personnePhysique: string;
        personneMorale: string;
        codeCivilite: string[];
        genre: string[];
        static codeCanalTel: string;
        static codeCanalFace: string;
        static codeCanalNet: string;
        static codeCanalCourrier: string;
        static codeCanalMobilite: string;
        static libelleCanalTel: string;
        static libelleCanalFace: string;
        static libelleInternet: string;
        static libelleCourrier: string;
        static libelleMobilite: string;
        titrePage: string;
        titreDossiers: string;
        titreDossVide: string;
        titrePropositionVide: string;
        contenuVoletPropositionVMC: string;
        sousTitre: string;
        formatDate: string;
        referenceMomentDossier: {
            "01": string;
            "02": string;
            "03": string;
            "04": string;
            "05": string;
            "06": string;
        };
        referenceCodeEntiteVente: {
            "1": string;
            "2": string;
            "3": string;
            "4": string;
            "5": string;
        };
    }
}

declare module propoClient.T {
    function isDefined(value: any): boolean;
    function isUndefined(value: any): boolean;
    function isBoolean(value: boolean): boolean;
    function isBooleanOfValue(object: any, value: boolean): boolean;
    function isString(value: string): boolean;
    function isStringOfValue(object: any, value: string): boolean;
    function isArray(value: Array<any>): boolean;
    function isArrayNotEmpty(value: any): boolean;
    function isDate(value: Date): boolean;
    function isNumber(value: number): boolean;
    function replaceNUStringWith(value: string, replacedValue: string): string;
}

declare module propoClient {
    class ChargementControleur {
        private serviceAgentExtended;
        private propoClientChargementService;
        private propoClientUtilsService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propoClientChargementService: Service.PropoClientChargementService, propoClientUtilsService: Service.PropoClientUtilsService);
        /**
         * initialisation du service de chargement
         */
        init(): void;
    }
}

declare module propoClient {
    class ErreurControleur {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module propoClient {
    class VuePropoClientControleur {
        private objetHistoriqueDossier;
        private dossiersVenteService;
        private constantes;
        private serviceUtilitaire;
        private objetHistoriqueDossierMembres;
        private loader;
        private typeSelectionne;
        private statutTabPersonne;
        private tableauDossiersPersonne;
        private tableauPropositionsPersonne;
        private listeDossiersPersonneActive;
        private listePropositionsPersonneActive;
        private designationPersonneActive;
        private dossiersEnCours;
        private dossiersProposition;
        ongletPersonneActive: number;
        private listeDossiersParPersonne;
        private listePropositionsParPersonne;
        private tableauDossiersMembres;
        private tableauPropositionsMembres;
        private dossiersEnCoursMembres;
        private dossiersPropositionMembres;
        private designationMembres;
        private desactiverOngletMembre;
        ongletMembres: number;
        private typePersonne;
        static $inject: string[];
        constructor(objetHistoriqueDossier: Modeles.HistoriqueDossier.IHistoriqueDossier, dossiersVenteService: Service.PropoDossiersVenteService, constantes: Constantes.PropoClientConstantes, serviceUtilitaire: Service.PropoClientUtilsService, objetHistoriqueDossierMembres: Modeles.HistoriqueDossier.IHistoriqueDossier);
        /**
         * obtenir le titre de l'onglet produit en fonction du codeEtatProduitService
         */
        titrePage: string;
        /**
         * initialisation des données
         */
        private init();
        private typeCourantSelectionne;
        /**
         * modifier le type de personne sélectionnée en cliquant sur un onglet; pas de retour attendu, seulement une affectation
         * @param typeOnglet {number} le code état
         */
        changementOnglet(typeOnglet: number): void;
        /**
         * switch l'onglet active .
         * @param typeOnglet {number} le code état
         */
        private toggleActiveTab(typeOnglet);
    }
}

declare module propoClient.Modeles.CompteursDossiers {
    interface ICriteresRechercheCompteurs {
        /**
         * '1' : Dossiers de la personne
         * '2' : Dossiers des relations de la personne
         * '3' : Dossiers de la personne + de ses relations
         * '4' : Recherche de dossier par numéro d'agent
         * '5' : Recherche de dossier par numéro de dossier
         *
         * rubrique Pacbase : CTD2CH
         */
        typeRecherche: string;
        /**
         * code de l'établissement sur 5 caractères
         * rubrique Pacbase : COCXBQ
         */
        codeEtablissement: string;
        /**
         * identifiant de la personne sur 9 caractères
         * rubrique Pacbase : NODAPE
         */
        identifiantPersonne: number;
        /**
         * composition type de relation sur 1 caractère
         * rubrique Pacbase : CTDMLI
         */
        typeRelation: string;
        /**
         * identifiant de l'agent de création sur 7 caractères.
         * rubrique Pacbase : NUCEET
         */
        agentCreation: number;
    }
    interface ICompteursDossiers {
        /**
         * code de l'établissement sur 5 caractères
         * rubrique Pacbase : COCXBQ
         */
        codeEtablissement: string;
        /**
         * identifiant de la personne sur 9 caractères
         * rubrique Pacbase : NODAPE
         */
        identifiantPersonne: number;
        /**
         * nombre de dossiers de vente actifs d'une personne sur 4 caractères
         * rubrique Pacbase : QCDSDV
         */
        nbDossiersActifs: number;
        /**
         * 'O' : Prospect valide sa demande de souscription
         * 'E' : Relance automatique effectuée
         * ' ' : Non validé
         *
         * rubrique Pacbase : CID2VP
         */
        indiceValidationProspect: string;
        /**
         * nombre de dossiers de vente pour un signataire sur 4 caractères.
         * rubrique Pacbase : QCD2SD
         */
        nbDossiersSignataire: number;
        /**
         * nombre de dossiers de vente en attente de signature mode panier sur 4 caractères.
         * rubrique Pacbase : QCD2AS
         */
        nbDossierAttente: number;
    }
}

declare module propoClient {
    interface IScopeEcpElementProduit extends ng.IScope {
        typeObjet: string;
        objetOrigine: Modeles.HistoriqueDossier.IListeDossier;
        dateCreation: string;
        titre: string;
        id: string;
        avecMarquage: string;
        indicateur: string;
        libelleActeGestion: string;
        libelleAction: number;
        libelleCanal: string;
        pictogramme: string;
        libellePictogramme: string;
        titulaire: string;
        typeOnglet: number;
    }
    interface IObjetDossierFormate {
        idDossier: string;
        libelleProduit: string;
        typeDossier: string;
        objetOrigine: Modeles.HistoriqueDossier.IListeDossier;
        indicateur: string;
        libelleActeGestion: string;
        libelleAction: string;
        dateCreation: string;
        libelleCanal: string;
        pictogramme: string;
        libellePictogramme: string;
        titulaire: string;
    }
    interface IListeDossierFormate {
        dateNaissance: string;
        designationCourteParticulier: string;
        identifiantPersonne: number;
        typeLienInterPersonnes: string;
        codeCivilite: string;
        codePersonnaliteJuridique: string;
        raisonSociale: string;
        listeDossier: Array<IObjetDossierFormate>;
    }
    class ListeDossierFormate implements IListeDossierFormate {
        dateNaissance: string;
        designationCourteParticulier: string;
        identifiantPersonne: number;
        typeLienInterPersonnes: string;
        codeCivilite: string;
        codePersonnaliteJuridique: string;
        raisonSociale: string;
        listeDossier: Array<IObjetDossierFormate>;
        constructor();
    }
    class ObjetDossierFormate implements IObjetDossierFormate {
        idDossier: string;
        libelleProduit: string;
        typeDossier: string;
        objetOrigine: Modeles.HistoriqueDossier.IListeDossier;
        indicateur: string;
        libelleActeGestion: string;
        libelleAction: string;
        dateCreation: string;
        libelleCanal: string;
        pictogramme: string;
        libellePictogramme: string;
        titulaire: string;
        constructor();
    }
}

declare module propoClient.Modeles.GestionDossierVente {
    interface IActeurContexte {
        codeEntiteVenteContexte: string;
        libelleEntiteVenteContexte: string;
        codeEdsInternePFContexte: number;
        codeEdsExternePFContexte: number;
        typeEdsExterneContexte: string;
        codeEdsInterneRattachContexte: number;
        referenceExterneAgentContexte: number;
    }
    interface IActeurDerniereModification {
        codeEntiteVenteDerMod: string;
        libelleEntiteVenteDerMod: string;
        codeEdsInternePFDerMod: number;
        nomAgentDerMod: string;
        prenomAgentDerMod: string;
        codeEdsInterneRattachDerMod: number;
        referenceExterneAgentDerMod: number;
    }
    interface IActionPossible {
        codeActionPossible: string;
        libelleActionPossibleAgent: string;
        libelleActionPossibleClient: string;
        codeTypeActionPossible: string;
        codeOperationFonctionnelle: string;
        identifiantProcessusSI: string;
        valeurEntreeProcessusSI: number;
        rangBoutonAction: number;
    }
    interface IAlerteFonctionnelle {
        codeAlerteFonctionnelle: number;
        libelleAlerteFonctionnelle: string;
    }
    interface ICanalReprise {
        codeCanalReprise: string;
        libelleCanalReprise: string;
        rangAffichageCanalReprise: number;
        codeSensCommunicReprise: string;
        libelleSensCommunicReprise: string;
    }
    interface ICheminAvancement {
        codeJalon: string;
        libelleJalon: string;
        codeFranchissement: string;
        rangJalon: number;
    }
    interface ICommentaire {
        texteCommentaire: string;
    }
    interface ICompositionCaracteristique {
        referenceProduitServiceCompo: string;
        identifiantOccurrence: number;
        identifiantPereOccurrence: number;
        codeActeGestionComposition: string;
        libelleActeGestionComposition: string;
        codeSousFamilleActeComposition: string;
        codeNatureActeGestion: string;
        codeModaliteDetention: string;
        numeroEntiteTitulaireCompo: number;
        numeroPersonneComposition: number;
        codeModeFinancier: string;
        codeEtablissementOperation: string;
        numeroOffreOrigine: number;
        indicateurMiseEnGestion: string;
        dateCreationLigneComposition: string;
        identifiantProduitServiceCompo: number;
        identifiantLigneComposition: number;
        libelleComplementaireActe: string;
        indicateurProduitRepris: string;
        indicateurProduitModifie: string;
    }
    interface ICompositionDonneeDetail {
        identifiantDonneeDetailJson: number;
        referenceExterneData: string;
        donneeData: string;
    }
    interface ICompositionDossier {
        compositionCaracteristique: ICompositionCaracteristique;
        listeCompositionDonneeDetail: Array<ICompositionDonneeDetail>;
    }
    interface IContractualisationSignature {
        codeModeSignature: string;
        libelleModeSignature: string;
        identifiantDocumentNumerise: string;
        indicateurEnvoiHubmail: string;
        identifiantTransactionContract: string;
        dateSignature: string;
    }
    interface IDonneePrincipale {
        numeroOffre: number;
        libelleOffreVisionAgent: string;
        libelleOffreVisionClient: string;
        codeActeGestionPrincipal: string;
        indicateurProcessusMyway: string;
        dateCreationDossier: string;
        dateDerniereRelance: string;
        indicateurGestionPiece: string;
        codeNotificationAEmettre: string;
        referenceOffreMysys: number;
        codeModeVente: string;
        codeCaractereSignature: string;
        dateModificationDossier: string;
        indicateurExecutionImmediate: string;
        nomAgentAffecte: string;
        prenomAgentCreation: string;
        nomAgentCreation: string;
        prenomAgentAffecte: string;
        dateConfirmationDossier: string;
        codeSousFamilleActePrincipal: string;
        identProduitServicePrincipal: number;
        libelleModeVente: string;
        libelleCaractereSignature: string;
        libelleActeGestionPrincipal: string;
        referenceExterneAgentCreation: number;
        referenceExterneAgentAffecte: number;
        indicateurBlocageFinalisation: string;
        numeroEntiteTitulairePrincipale: number;
        identifiantContratSupport: string;
        codeCanalCreation: string;
        typeCreationDossier: string;
        codeEdsAttribueCreation: number;
    }
    interface IDossierVente {
        codeEtablissement: string;
        identifiantDossierVente: number;
        codeExterneApplication: string;
        identifiantExterneDossierVente: string;
    }
    interface IEtapeEnCours {
        codeCanalEnCours: string;
        libelleCanalEnCours: string;
        libelleStatutActionAMener: string;
        identifiantEtape: number;
        codeProcessus: string;
        libelleProcessus: string;
        codeEtape: string;
        libelleEtapeClient: string;
        libelleEtapeAgent: string;
        codeStatut: string;
        libelleStatutClient: string;
        libelleStatutAgent: string;
        libelleActionReservee: string;
        dateDebutEtape: string;
        dateFinEtape: string;
        dateEcheanceEtape: string;
        codeSensCommunicEnCours: string;
        libelleSensCommunicEnCours: string;
    }
    interface IGestionDossierVente {
        dossierVente: IDossierVente;
        donneePrincipale: IDonneePrincipale;
        commentaire: ICommentaire;
        etapeEnCours: IEtapeEnCours;
        partenaire: IPartenaire;
        acteurDerniereModification: IActeurDerniereModification;
        acteurContexte: IActeurContexte;
        contractualisationSignature: IContractualisationSignature;
        listePersonneLiee: Array<IPersonneLiee>;
        listeCompositionDossier: Array<ICompositionDossier>;
        listeCheminAvancement: Array<ICheminAvancement>;
        listeActionPossible: Array<IActionPossible>;
        listeCanalReprise: Array<ICanalReprise>;
        listeAlerteFonctionnelle: Array<IAlerteFonctionnelle>;
    }
    interface IPartenaire {
        identifiantPartenaire: string;
        libellePartenaire: string;
    }
    interface IPersonneLiee {
        identifiantPersonne: number;
        codeRolePersonne: string;
        libelleRolePersonne: string;
        adresseMailPersonne: string;
        indicateurSignataire: string;
    }
}

declare module propoClient.Modeles.HistoriqueDossier {
    interface IHistoriqueDossier {
        listeMomentDeVie: Array<IListeMomentDeVie>;
    }
    interface IListeDossier {
        identifiantDossierVente: number;
        numeroOffre: number;
        codeEntiteVente: string;
        codeCanal: string;
        codeEntiteVenteCourante: string;
        codeCanalDossierVenteCourant: string;
        timestampCreationDossierVente: string;
        codeEtapeVente: string;
        codeStatutEtape: string;
        dateEcheance: string;
        codeEtablissement: string;
        typeProcessus: string;
        codeProcessus: string;
        indicateurProcessMyway: string;
        libelleLongActionAMener: string;
        codeMomentVie: string;
        designationCourteParticulier: string;
        numeroEntiteTitulaire: number;
        typeUsageEntiteTitulaire: string;
        modeCompoEntiteTitulaire: string;
        libelleProduitCommercial: string;
        libellePersonnalise: string;
        libelleOperation: string;
        libelleJSONResume: string;
        codeRoleInterlocuteur: string;
        indicateurPersSignataire: string;
        identifiantPersonne: number;
        sousModeCompoEntiteTitulaire: string;
        numeroOffreSouscrite: number;
        dernierCodeEntiteVente: string;
        dernierCodeSensCommunication: string;
        dernierCodeCanalDossierVente: string;
        dernierDateIntervention: string;
    }
    interface IListePersonne {
        dateNaissance: string;
        designationCourteParticulier: string;
        identifiantPersonne: number;
        typeLienInterPersonnes: string;
        codeCivilite: string;
        codePersonnaliteJuridique?: string;
        raisonSociale?: string;
        listeDossier: Array<IListeDossier>;
    }
    interface IListeMomentDeVie {
        codeMomentVie: string;
        listePersonne: Array<IListePersonne>;
    }
    interface IDossierInfoCommune {
        dateEcheance: string;
    }
}

declare module propoClient.Modeles.Routage {
    interface IScRouteParam extends ng.route.IRouteParamsService {
        typePersonne: string;
        codeAgent: number;
        idEds: number;
        numeroPersonne: number;
    }
    interface IScopeEcpElementNav extends ng.IScope {
        id: string;
        codePersonnaliteJuridique: string;
    }
    interface IRootScope extends ng.IRootScopeService {
        title: string;
    }
    interface IDetailCurrentRoute {
        title: string;
        originalPath: string;
    }
    interface ICurrentRoute {
        $$route: IDetailCurrentRoute;
        loadedTemplateUrl: string;
        params: propoClient.Modeles.Routage.IScRouteParam;
    }
    interface IRoute extends ng.route.IRoute {
        title?: string;
    }
    interface IRouteProvider extends ng.route.IRouteProvider {
        otherwise(route: IRoute): IRouteProvider;
        when(path: string, route: IRoute): IRouteProvider;
    }
    interface IContexteDv {
        codeActeGestion: string;
        codeApplicationAppelante: string;
        codeCanal: string;
        codeEntite: string;
        codeProduitServiceOffre: number;
        codeSensCommunication: string;
        identifiantDossierVente: number;
        identifiantEntiteTitulaire: number;
        numeroOffreSouscrite: number;
        numeroPersonneIdentifiee: number;
    }
    interface IContexteDossierVMC {
        typeFonction: string;
        codeEtablissement: string;
        codeEntiteVente: string;
        identifiantDossierVente: number;
        contract: string;
        postefonctionnel: string;
        idGuichet: string;
        idGuichetJour: string;
    }
    interface IContexteDossierPropositionVMC {
        agenceRatt: string;
        codeEtablissement: string;
        codeEntiteVente: string;
        identifiantPersonne: string;
        postefonctionnel: string;
        idGuichet: string;
        idGuichetJour: string;
        identifiantDossierVente: number;
    }
    interface IDelocKeyValue {
        Value: string;
        Key: string;
    }
    interface IListeDelocKeyValue {
        donnees: Array<IDelocKeyValue>;
    }
    interface IDonneesDelocalisees<T> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
}

declare module propoClient.Service {
    interface IChargement {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<any>;
    }
    class PropoClientChargementService {
        private serviceAgentExtended;
        private propoClientUtilsService;
        private propoClientInitService;
        private propoClientRestService;
        private propoCompteursDossiersRestService;
        private $q;
        texteChargement: Array<string>;
        chargementLong: IChargement;
        private authentificationInfo;
        private parametresComptables;
        private numeroPersonne;
        private codeEtab;
        private referenceExterneAgent;
        private typePersonne;
        private objetAuthentificationFormate;
        private identifiantPersonne;
        private historiqueDossier;
        private objetParametresComptables;
        private codeEntite;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propoClientUtilsService: Service.PropoClientUtilsService, propoClientInitService: Service.PropoClientInitService, propoClientRestService: Service.PropoClientRestService, propoCompteursDossiersRestService: Service.PropoCompteursDossiersRestService, $q: ng.IQService);
        /**
         * initialisation du chargement de l'pplication
         * (promesses d'authentification, paramètres comptables, critères de recherche et identifiant dans le contexte)
         * @param {boolean} rechargement : facultatif, pour indiquer si on doit aller chercher dans le contexte client
         */
        initialisationChargement(): void;
        /**
         * permet de recuperer les erreurs et de les afficher dans la vue erreur
         * @param erreur
         */
        erreur(erreur: string): void;
        /**
         * annulation d'un chargement long
         */
        annulerChargementLong(): void;
    }
}

declare module propoClient.Service {
    class PropoCompteursDossiersRestService {
        private serviceAgentExtended;
        private $q;
        private propoClientErreurService;
        private propoClientUtilsService;
        private urlCompteursDossiers;
        private _compteursDossiers;
        identifiantPersonne: number;
        static $inject: string[];
        /**
         * constructeur de la classe
         * @param serviceAgentExtended
         * @param $q
         * @param propoClientErreurService
         * @param propoClientUtilsService
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, propoClientErreurService: Service.ErreursManagement, propoClientUtilsService: Service.PropoClientUtilsService, urlCompteursDossiers: string);
        /**
         * Service debranchement url Rest historique dossier de vente
         * @param idPersonne
         * @param codeEtablissement
         * @param referenceExterneAgent
         * @param typeRecherche
         * @param typeCompositionRelation
         * @param forcer
         */
        recupererCompteursDossiers(typeRecherche: string, idPersonne: number, codeEtablissement: string, typeRelation: string, referenceExterneAgent: number, forcer?: boolean): ng.IPromise<Modeles.CompteursDossiers.ICompteursDossiers[]>;
        setCompteursDossiers(compteurs: Modeles.CompteursDossiers.ICompteursDossiers[]): void;
        /**
         * retourne les compteurs
         */
        getCompteursDossiers(): Modeles.CompteursDossiers.ICompteursDossiers[];
    }
}

declare module propoClient.Service {
    /**
     * test de récupération de logs de comportement utilisateur; version POC, à voir si conservée au final ou non
     */
    interface IActionUtilisateur {
        typeAction: string;
        action?: IComportement;
        erreur?: IErreur;
        cause?: any;
    }
    interface IErreur {
        url: string;
        codeHttp: number;
        methode: string;
        params: string;
        message: string;
    }
    interface IComportement {
        entree: string;
        sortie: string;
        timestamp?: string;
        idElement: string;
        element: any;
    }
    class Comportement implements IComportement {
        entree: any;
        sortie: any;
        timestamp: any;
        idElement: any;
        element: any;
        constructor(comportement: IComportement);
    }
    class ErreursManagement {
        private maximum;
        tableauListeActions: IActionUtilisateur[];
        /**
         * ajout d'une action utilisateur dans le tableau des événements
         * @param {string} action : l'action utilisateur loggée ("click", "lectureContexte", "changement Route", etc.)
         * @param {IComportement} complement : un objet permettant d'avoir plus d'information sur l'action
         */
        ajouterAction(action: string, complement: IComportement): void;
        /**
         * ajout d'une erreur dans le tableau des événements
         * @param {IErreur} erreur : l'erreur remontée, avec les informations ciblées
         * @param {string} cause : un message complémentaire
         */
        ajouterErreur(erreur: IErreur, cause: any): void;
        /**
         * retourne le tableau des "maximum" dernières actions utilisateur
         * @param {string} le format attendu, facultatif, "string" pour stringifier le retour, objet dans les autres cas
         * @return {any} le tableau, soit en objet JSON, soit stringifié pour envoi
         */
        getListeActions(format?: string): any;
    }
}

declare module propoClient.Service {
    interface IAgent {
        codeEtablissement: string;
        codeAgent: number;
    }
    class PropoClientInitService {
        private $location;
        private $route;
        private _numeroPersonne;
        private _codeEtablissement;
        private _codeAgent;
        private _urlAppel;
        private _posteFonctionnel;
        private _edsExterne;
        private _edsInterne;
        private _typeEds;
        private _idGuichetComptable;
        private _agenceRatt;
        private _idGuichetJour;
        private _codeEntite;
        static $inject: string[];
        constructor($location: ng.ILocationService, $route: ng.route.IRouteService);
        /**
         * formate le numéro de personne depuis une string vers un nombre,
         * renvoi null si valeur d'entrée undefined ou non convertible en nombre
         * @param numeroPersonne {string}
         * @return retour {number}
         */
        formaterNumeroPersonne(numeroPersonne: string): number;
        /**
         * retourne un objet simplifié, contenant le code etablissement,
         * à partir des informations d'authentification du contexte MyWay
         * @param authentificationInfo {MyWay.Services.Context.AuthentificationInfo}
         *
         */
        preparerDonnesAgent(authentificationInfo: MyWay.Services.Context.AuthentificationInfo): IAgent;
        /**
         * Permet de recuperer les données du paramètres comptables
         * @param paramComptables {MyWay.Services.Context.ParametresComptables}
         */
        preparerDonnesComptables(paramComptables: MyWay.Services.Context.ParametresComptables): void;
        chargerVuesClient(route: string): void;
        getCodeEtablissement(): string;
        setCodeEtablissement(codeEtab: string): void;
        getCodeAgent(): number;
        getNumeroPersonne(): number;
        setNumeroPersonne(numero: number): void;
        getCodeEntite(): string;
        setCodeEntite(codeEntite: string): void;
        getPosteFonctionnel(): string;
        getEdsExterne(): string;
        getTypeEds(): string;
        getEdsInterne(): string;
        setUrlAppel(url: string): void;
        getUrlAppel(): string;
        getIdGuichet(): string;
        getAgenceRatt(): string;
        getIdGuichetJour(): string;
        genererUrlClient(numeroPersonne: number, typePersonne: string): string;
    }
}

declare module propoClient.Service {
    class PropoClientProfilService {
        private propoClientUtilsService;
        static $inject: string[];
        constructor(propoClientUtilsService: Service.PropoClientUtilsService);
        /**
         * Permet de calculer l'age d'une personne à partir de sa date de naissance et de la date du jour
         * @param dateNaissance:string
         * @param dateDuJour:Date
         * @return age:number
         */
        calculerAgePersonne(dateNaissance: string, dateDuJour: Date): number;
        /**
         * Permet d'afficher le pictogramme en fonction de la civilité et de l'age de la personne
         * @param dateNaissance:string
         * @param codeCivilité: string
         * @param dateDuJour: {Date}
         */
        afficherPictogramme(codeCivilite: string, dateNaissance: string, dateDuJour: Date): string;
        /**
         * Permet d'afficher le code civilite et la designation courte de la personne physique
         * @param libelleDesignationCourte:string
         */
        afficherDesignationCourte(designationCourte: string): string;
        /**
         * formatage du numero de personne sur 9 chiffres
         * @param numero
         */
        getIdentifiant(idPersonne: number): string;
    }
}

declare module propoClient.Service {
    class PropoClientRestService {
        private serviceAgentExtended;
        private $q;
        private propoClientErreurService;
        private propoClientUtilsService;
        private urlHistoriqueDossier;
        private urlGestionDossierVente;
        private _historiqueVente;
        private _historiqueVenteMembres;
        private _gestionDossierVente;
        static $inject: string[];
        /**
         * constructeur de la classe
         * @param serviceAgentExtended
         * @param $q
         * @param propoClientErreurService
         * @param propoClientUtilsService
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, propoClientErreurService: Service.ErreursManagement, propoClientUtilsService: Service.PropoClientUtilsService, urlHistoriqueDossier: string, urlGestionDossierVente: string);
        setHistoriqueDossier(historique: Modeles.HistoriqueDossier.IHistoriqueDossier): void;
        /**
         * Service debranchement url Rest historique dossier de vente
         * @param idPersonne
         * @param codeEtablissement
         * @param referenceExterneAgent
         * @param typeRecherche
         * @param typeCompositionRelation
         * @param forcer
         */
        recupererHistoriqueVente(idPersonne: number, codeEtablissement: string, referenceExterneAgent: number, forcer?: boolean): ng.IPromise<Modeles.HistoriqueDossier.IHistoriqueDossier>;
        /**
         * retourne les historiques de vente
         */
        getHistoriqueDossier(): Modeles.HistoriqueDossier.IHistoriqueDossier;
        setHistoriqueDossierMembres(historique: Modeles.HistoriqueDossier.IHistoriqueDossier): void;
        /**
         *
         * @param idPersonne
         * @param codeEtablissement
         * @param referenceExterneAgent
         * @param typeRecherche
         * @param typeCompositionRelation
         * @param forcer
         */
        recupererHistoriqueVenteMembres(idPersonne: number, codeEtablissement: string, referenceExterneAgent: number, forcer?: boolean): ng.IPromise<Modeles.HistoriqueDossier.IHistoriqueDossier>;
        setGestionHistoriqueVente(gestion: Modeles.GestionDossierVente.IGestionDossierVente): void;
        /**
         * Permet de recuperer les données de gestion d'un dossier de vente
         * @param codeEtablissement
         * @param identifiantDossierVente
         * @param codeEdsExternePFContexte
         * @param typeEdsExterneContexte
         * @param codeEdsInternePFContexte
         * @param codeEntiteVenteContexte
         * @param forcer
         */
        recupererGestionDossierVente(codeEtablissement: string, identifiantDossierVente: number, codeEdsExternePFContexte: number, typeEdsExterneContexte: string, codeEdsInternePFContexte: number, codeEntiteVenteContexte: string, forcer?: boolean): ng.IPromise<Modeles.GestionDossierVente.IGestionDossierVente>;
        /**
         * recupere les données d'un dossier de vente
         */
        getGestionDossierVente(): Modeles.GestionDossierVente.IGestionDossierVente;
    }
}

declare module propoClient.Service {
    class PropoDossiersVenteService {
        private propoClientInitService;
        private propoClientUtilsService;
        private propoClientConstantes;
        private serviceRest;
        private $q;
        private serviceProfil;
        private serviceAgentExtended;
        private referencesModeComposition;
        private referencesSousModeIndivision;
        private referenceCodeUsage;
        static $inject: string[];
        constructor(propoClientInitService: Service.PropoClientInitService, propoClientUtilsService: Service.PropoClientUtilsService, propoClientConstantes: Constantes.PropoClientConstantes, serviceRest: Service.PropoClientRestService, $q: ng.IQService, serviceProfil: Service.PropoClientProfilService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * initilisation des données délocalisées
         * Permet de recuperer les donnees de la table delocalisée à partir d'une cle d'entree
         */
        init(): ng.IPromise<string>;
        /**
         * Retourne la valeur correspondant à la cle d'entreee
         * @param cle la cle d'entree
         * @param sousMode deuxième cle à verifier pour les modes indivisions
         */
        recupererLibelleModeComposition(mode: string, sousMode: string): string;
        /**
         * recupération du libelle du type usage en renseignant le code usage
         * @param code
         * @return _libelle retourne la valeur correspondant au code
         */
        recupererLibelleUsage(code: string): string;
        /** ligne1
         * Permet de recuperer l"indicateur du produit
         * @param objetDossier {Modeles.HistoriqueDossier.IListeDossier} le type de produit
         * @return indicateur {string} le texte de l'indicateur à positionner
         */
        afficherMarqueurDossier(objetDossier: Modeles.HistoriqueDossier.IListeDossier, dateDujour: Date): string;
        recupererLibelleProduit(objetDossier: Modeles.HistoriqueDossier.IListeDossier): string;
        /**
         * Permet d"afficher le libellé de l'acte de gestion
         * (Ouverture, Souscription, Avenant, Clôture, Signature ..)
         * @return le libellé de l'acte de gestion ligne3
         */
        afficherLibelleActeGestion(objetDossier: Modeles.HistoriqueDossier.IListeDossier, personneActive: number): string;
        /**
         * Permet de recuperer le libelle de l'action à effectuer sur le dossier
         * @param objetDossier {Modeles.HistoriqueDossier.IListeDossier}
         * @return libelle de l'action {string} à effectuer sur le dossier cor. ligne4
         */
        recupererLibelleAction(objetDossier: Modeles.HistoriqueDossier.IListeDossier): string;
        /**
         * Permet de recuperer la date de creation du dossier ou de la proposition
         * @param objetDossier {Modeles.HistoriqueDossier.IListeDossier}
         * @return date {string} ligne5
         */
        recupererDateCreation(objetDossier: Modeles.HistoriqueDossier.IListeDossier): string;
        /** "TU TODO"
         * Permet de recuperer le libellé de la dernière entité plus le picto
         * @param objetDossier {Modeles.HistoriqueDossier.IListeDossier}
         * @return libelle {string}
         */
        recupererLibelleCanal(objetDossier: Modeles.HistoriqueDossier.IListeDossier): string;
        /**
         * Permet d'afficher le numero de la personne titulaire du dossier
         * si ce dernier est different de celui de la personne active
         * @param objetDossier
         */
        afficherPersonneTitulaire(objetDossier: Modeles.HistoriqueDossier.IListeDossier, personneActive: number): string;
        private formaterDossier(dossierVente, type, personneActive, indicateur?, idDossier?);
        /**
         * generer tableau des dossiers en cours et des propositions
         * @param listeDossierPersonne {Modeles.HistoriqueDossier.IListePersonne[]}
         */
        genererTableauDossiers(listeDossierPersonne: Modeles.HistoriqueDossier.IListePersonne[]): IListeDossierFormate[];
        /**
         * Permet de recuperer la liste des dossiers ou propositions de toutes les personnes
         * @param liste
         */
        recupererTotalListeDossier(liste: IListeDossierFormate[]): IObjetDossierFormate[];
        /**
         * permet de recuperer la liste des dossiers de vente en cours
         * @param listeDossiersPropositions
         * @return listeDossiersPropositions {Modeles.HistoriqueDossier.IListePersonne[]}
         */
        getListeDossiersPropositions(listeDossiersPropositions: Modeles.HistoriqueDossier.IHistoriqueDossier, codeMomentVie: string): Modeles.HistoriqueDossier.IListePersonne[];
        /**
         * recupère le total des dossiers en cours ou propositions des membres de la relation
         * @param listeDossiersPropositions
         */
        getTotalDossiers(listeDossiersPropositions: Modeles.HistoriqueDossier.IListePersonne[]): number;
        /**
         * Permet de recuperer l'objet gestion dossier de vente d'un dossier ou proposition myway
         * et de mapper les données du contrat d'entree vers le processus CONS_REPRI_DOSS_VENT avec le code 2
         * @param dossierVente
         */
        getContratDossierVenteMyWay(dossierVente: Modeles.HistoriqueDossier.IListeDossier): ng.IPromise<Modeles.Routage.IContexteDv>;
        /**
         * permet de recuperer le contrat d'entrée Lisa vers le processus SUIV_REPRI_DOSS_VENT avec le code 4
         * @param dossierVente {dossierVente: Modeles.HistoriqueDossier.IListeDossier}
         * @return _contrat {Modeles.Routage.IContexteDossierPropositionVMC}
         */
        getContratDossierVmc(dossierVente: Modeles.HistoriqueDossier.IListeDossier): Modeles.Routage.IContexteDossierVMC;
        /**
         * recupère le contrat de débranchement LISA vers OVAD avec le code processus 3
         * @param dossierVente {dossierVente: Modeles.HistoriqueDossier.IListeDossier}
         * @return _contrat {Modeles.Routage.IContexteDossierPropositionVMC}
         */
        getContratPropositionVmc(dossierVente: Modeles.HistoriqueDossier.IListeDossier): Modeles.Routage.IContexteDossierPropositionVMC;
    }
}

declare module propoClient.Service {
    class PropoClientUtilsService {
        private propoClientConstantes;
        private modalService;
        private notificationService;
        static $inject: string[];
        constructor(propoClientConstantes: propoClient.Constantes.PropoClientConstantes, modalService: MyWay.UI.IModalService, notificationService: MyWay.UI.IMwNotificationService);
        /**
         * permet d'afficher le libelle du code civilite
         * le resultat doit etre Mme ou Melle ou M
         * @param {string} codeCivilite
         * @return {string} libellé associé à la civilité
         */
        afficherCodeCivilite(genre: string): string;
        /**
         * permet d'afficher le format de la date
         * le resultat doit etre JJ/MM/AAAA
         * @param {string} formatDate
         * @return {string} la date au format JJ/MM/AAAA
         */
        formaterDate(date: any): string;
        /**
         * Permet de calculer le nombre de jour restant entre la du jour et la date d'echeance
         * @param date {string}
         * @return nombreJourRestant {number} nombre de jour entre deux dates
         */
        calculNombreJourRestant(dateEcheance: string, dateDuJour: Date): number;
        /**
         * permet de determiner si le nombre de jour restant entre la date du jour
         * et la date d'échéance est entre 10 et 20 jours
         * @param nombreJourRestant {number}
         * @return boolExpiration {boolean} verifie si le marqueur est orange
         */
        isMarqueurOrange(nombreJourRestant: number): boolean;
        /**
         * permet de determiner si le nombre de jour restant entre la date du jour
         * et la date d'échéance est entre 0 et 10 jours
         * @param nombreJourRestant {number}
         * @return boolExpiration {boolean} verifie si le marqueur est rouge
         */
        isMarqueurRouge(nombreJourRestant: number): boolean;
        /**
         * Permet de verifier si la date d'echeance est inferieure à la date du jour
         * @param dateEcheance {string}
         */
        isMarqueurExpire(codeStatutEtape: string): boolean;
        /**
         * Permet de retourner le statut "pp" ou "pm" (personne physique ou personne morale)
         * @param codeCivilite:string ("defini" pour particulier, "non defini" pour professionnel)
         * @return {string} le code pp ou pm
         */
        getStatutPersonne(codeCivilite: string): string;
        /**
         * permet d'extraire les erreurs
         * @param data
         */
        extractErreur(data: any): any;
        /**
         * permet d'afficher un popup d'information
         * @param header
         * @param msg
         * @param icon
         * @param size
         */
        MsgBox(header: string, msg: string, icon?: string, size?: any): any;
        /**
         * Retourne la chaine tronqué pour limiter la taille du libellé
         * @param {string} chaine d'origine
         * @param {number} le nombre de caractères maximum attendues
         * @return {string} la chaine tronquée
         */
        tronquerChaine(chaineATronquer: string, longueurMaximal: number): string;
        /**
         *
         * @param value
         */
        transformerAccents(value: string): string;
        /**
         * permet d'afficher l'icone correspondant à un code canal
         * @param codeCanal
         */
        getIcone(codeCanal: string): string;
        /**
         * permet d'afficher le libelle correspondant à un code canal
         * @param codeCanal
         */
        getLibelleCanal(codeCanal: string): string;
        /**
         * permet de tester si le dossier est en cours ou non
         * un dossier de vente en cours est un dossier dont le moment de vie est différent de ‘Non encore validé (01)‘ et de ‘Terminé (05)‘
         * @param idMoment
         * @return {boolean} retourne true si le dossier est en cours
         */
        isDossierEnCours(idMoment: string): boolean;
        /**
         * permet de tester si le dossier de vente est à l'etat 'Propositions"
         * un dossier de vente à l'état proposition est un dossier dont le moment de vie est égale à 'Non encore validé (01)'
         * @param idMoment
         * @return {boolean} retourne true si le dossier de vente est à l'état de proposition
         */
        isDossierProposition(idMoment: string): boolean;
        /**
         * Message de notification lors d'une validation
         * @param mes
         */
        displayInfo(mes: string): void;
    }
}

declare module propoClient.Directive {
    interface IContenu extends ng.IScope {
        listeDossier: IObjetDossierFormate[];
        listeProposition: IObjetDossierFormate[];
        tableauPersonneProposition: Array<IListeDossierFormate>;
        tableauPersonneDossier: Array<IListeDossierFormate>;
        typeOnglet: number;
    }
    class PropoClientContenuOngletControleur {
        private $scope;
        private dossiersVenteService;
        private constantes;
        private propoClientProfilService;
        private $timeout;
        private serviceAgentExtended;
        flagAffichageProposition: boolean;
        flagAffichageDossier: boolean;
        nombreDossiers: number;
        nombreProposition: number;
        private dateDuJour;
        static $inject: string[];
        constructor($scope: IContenu, dossiersVenteService: Service.PropoDossiersVenteService, constantes: Constantes.PropoClientConstantes, propoClientProfilService: Service.PropoClientProfilService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        nbDossierMembreTotal: number;
        nbPropositionMembreTotal: number;
        /**
         * permet d'afficher 3 ou toute la liste des dossiers ou propositions
         * @param limit
         * @param liste
         */
        afficherTout(limit: number, liste: IListeDossierFormate[], isDossierProposition: boolean): IObjetDossierFormate[];
        /**
         * permet d'afficher 3 ou toute la liste des dossiers ou propositions
         * @param limit
         * @param liste
         */
        afficherToutMembre(limit: number, liste: IListeDossierFormate[], isDossierProposition: boolean): void;
        /**
         * Débranchement vers la synthese NSDK
         * @param numeroPersonne
         */
        lancerSyntheseClient: (numeroPersonne: string) => void;
    }
}

declare module propoClient.Directive {
    function PropoClientContenuOngletDirective(): ng.IDirective;
}

declare module propoClient.Directive {
    class PropoClientElementProduitControleur {
        private $scope;
        private dossiersVenteService;
        private constantes;
        private propoClientUtilsService;
        private serviceAgentExtended;
        private voletOuvert;
        contenuVoletDossier: string;
        contenuVoletProposition: string;
        isProposition: boolean;
        libele: string;
        private isMarqueurOrange;
        private isMarqueurRouge;
        private libelleModeComposition;
        private typeUsage;
        private estAvec;
        private afficherBtnAcceder;
        private isModeouType;
        private isVmcProposition;
        private isDossierMyway;
        private chargementLong;
        private numDossierVente;
        static $inject: string[];
        constructor($scope: IScopeEcpElementProduit, dossiersVenteService: Service.PropoDossiersVenteService, constantes: Constantes.PropoClientConstantes, propoClientUtilsService: Service.PropoClientUtilsService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de débrancher vers l'application SUIV_REPRI_DOSS_VENT avec le code 4
         * ou vers CONS_REPRI_DOSS_VENT avec le code 2
         */
        lancerProcessus(): ng.IPromise<void>;
        /**
         * Lancement du processus d'un dossier VMC à l'état de proposition
         */
        lancerProcessusVolet(): ng.IPromise<void>;
        /**
         * permet d'ouvrir le volet si le dossier est de type VMC en proposition
         */
        ouvrirVolet(): boolean;
        /**
         * Permet de fermer le volet en cliquant sur l'icone x
         */
        fermerVolet(): void;
    }
}

declare module propoClient.Directive {
    function PropoClientElementProduitDirective(): ng.IDirective;
}

declare module propoClient.Directive {
    class PropoClientEnteteControleur {
        private propoClientProfilService;
        private propoClientRestService;
        private propoClientInitService;
        private serviceAgentExtended;
        private serviceUtils;
        titreHeader: string;
        static $inject: string[];
        constructor(propoClientProfilService: propoClient.Service.PropoClientProfilService, propoClientRestService: Service.PropoClientRestService, propoClientInitService: Service.PropoClientInitService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, serviceUtils: Service.PropoClientUtilsService);
        numeroPersonne: string;
        designationCourte: string;
        /**
         * permet de fermer l'application
         */
        quitter(): void;
    }
}

declare module propoClient.Directive {
    function PropoClientEnteteDirective(): ng.IDirective;
}

declare module propoClient.Directive {
    class PropoClientFooterControleur {
        private $scope;
        private serviceAgentExtended;
        private propoCompteursDossiersRestService;
        static $inject: string[];
        constructor($scope: IScopeEcpElementProduit, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propoCompteursDossiersRestService: Service.PropoCompteursDossiersRestService);
        goToSignature(): void;
        nbDossiers(): number;
    }
}

declare module propoClient.Directive {
    function PropoClientFooterDirective(): ng.IDirective;
}
