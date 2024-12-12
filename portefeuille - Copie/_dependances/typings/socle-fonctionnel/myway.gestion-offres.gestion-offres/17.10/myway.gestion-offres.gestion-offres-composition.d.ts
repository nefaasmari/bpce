
declare module GestionGeneriqueOffres.Demarrage {
    class Constantes {
        static addConstantsToRootScope($rootScope: GestionGeneriqueOffres.Constantes.IRootScopeServiceWithConstants, constantes: GestionGeneriqueOffres.Constantes.Definitions): void;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    class AppProviders {
        private _provide;
        provide: ng.auto.IProvideService;
        private _routeProvider;
        routeProvider: ng.route.IRouteProvider;
        private _controllerProvider;
        controllerProvider: ng.IControllerProvider;
        private _compileProvider;
        compileProvider: ng.ICompileProvider;
        private _filterProvider;
        filterProvider: ng.IFilterProvider;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IConfigMocks {
        mockEntiteTitulaire: boolean;
        mockParametrageBlocs: boolean;
        mockPersonnes: boolean;
        mockSouscriptionAvenant: boolean;
        mockTarification: boolean;
        mockReprise: boolean;
        mockAvantageFamille: boolean;
        mockMiseEnGestionPsExternes: boolean;
        mockGestionDossierVente: boolean;
    }
    interface IConfigShunts {
        bdf: boolean;
        bale2: boolean;
        popInSelect: boolean;
        producteurs: boolean;
    }
    interface IConfig {
        mocks: ConfigMocks;
        shunts: ConfigShunts;
    }
    class ConfigMocks {
        private _mockEntiteTitulaire;
        /**
         * Mocker les entités titulaires ?
         */
        mockEntiteTitulaire: boolean;
        private _mockParametrageBlocs;
        /**
         * Mocker le paramétrage des composants P/S ?
         */
        mockParametrageBlocs: boolean;
        private _mockPersonnes;
        /**
         * Mocker les personnes ?
         */
        mockPersonnes: boolean;
        private _mockSouscriptionAvenant;
        /**
         * Mocker les entités titulaires ?
         */
        mockSouscriptionAvenant: boolean;
        private _mockTarification;
        /**
         * Mocker les ressources liéees à la tarification
         */
        mockTarification: boolean;
        private _mockReprise;
        /**
         * Mocker les reprises de P/S en avenant
         */
        mockReprise: boolean;
        private _mockAvantageFamille;
        /**
         * Mocker les reprises de P/S en avenant
         */
        mockAvantageFamille: boolean;
        private _mockMiseEnGestionPsExternes;
        /**
         * Mocker les reprises de P/S en avenant
         */
        mockMiseEnGestionPsExternes: boolean;
        private _mockGestionDossierVente;
        /**
         * Mocker le dossier de vente
         */
        mockGestionDossierVente: boolean;
        constructor(icm: IConfigMocks);
    }
    class ConfigShunts {
        private _bdf;
        /**
         * Shunter les interro BDF ?
         */
        bdf: boolean;
        private _bale2;
        /**
         * Shunter le contrôle Bâle 2 ?
         */
        bale2: boolean;
        private _popInSelect;
        /**
         * Shunter les pop in de sélection ?
         */
        popInSelect: boolean;
        private _producteurs;
        /**
         * Shunter les producteurs lors de la MEG ?
         */
        producteurs: boolean;
        constructor(ics: IConfigShunts);
    }
    class Config {
        /**
         * Configuration des mocks
         * TODO : ajouter le n° du jeu d'essai ?
         */
        private _mocks;
        /**
         *
         */
        mocks: ConfigMocks;
        /**
         * Configuration des shunts
         */
        private _shunts;
        /**
         *
         */
        shunts: ConfigShunts;
        constructor(ic: IConfig);
    }
}

declare module GestionGeneriqueOffres.Composition {
    var app: ng.IModule;
    var appProviders: Types.AppProviders;
}

declare module GestionGeneriqueOffres.Composition {
    class AfficherErreur {
        private constantes;
        message: string;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition du service de Entite titulaire.
     * @author S0076105
     */
    interface IEntiteTitulaireService {
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<Types.IInformationEntiteTitulaire>;
        getEntitesTitulaires(): Types.InformationEntiteTitulaire[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "entitetitulaire/informationEntiteTitulaire"
     * avec le verbe d'action GET.
     * @author S0076105
     */
    interface IEntiteTitulaireGetInformationEntiteTitulaireQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "Entite titulaire".
     * @author S0076105
     */
    class EntiteTitulaireAjaxImplService implements IEntiteTitulaireService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<Types.IInformationEntiteTitulaire>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getEntitesTitulaires(): Types.InformationEntiteTitulaire[];
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "Entite titulaire".
     * @author S0076105
     */
    class EntiteTitulaireMockImplService implements IEntiteTitulaireService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<Types.IInformationEntiteTitulaire>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getEntitesTitulaires(): Types.InformationEntiteTitulaire[];
    }
    class EntiteTitulaireService {
        static entiteTitulaireServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    import Tiers = GestionGeneriqueOffres.Types.Tiers;
    import Constantes = GestionGeneriqueOffres.Constantes;
    interface ITiersService {
        /**
         *  Méthode de restitution des informations sur tiers (particulier information, media, identification, tiers liés)
         */
        getTiers(identifiantPersonne: number, codeEtablissement: string): ng.IPromise<Tiers.Personne>;
        /**
         * Renvoie les tiers chargés par les sendGetRequest (version mockée ou réelle)
         */
        getPersonnes: () => Types.Tiers.Personne[];
        /**
         * raz
         */
        raz: () => void;
    }
    class TiersService implements ITiersService {
        private constantes;
        private $q;
        private tiersParticulierInformationService;
        private tiersIdentificationService;
        private tiersMediaService;
        private tiersParticulierTiersLiesService;
        static tiersServiceId: string;
        static $inject: string[];
        private static _instance;
        private _$q;
        private _tiersParticulierInformationService;
        private _tiersIdentificationService;
        private _tiersMediaService;
        private _tiersParticulierTiersLiesService;
        private traiterTiersServices(identifiantPersonne, codeEtablissementConnexion);
        /**
         * Renvoie un tiers depuis le SI
         */
        getTiers: (identifiantPersonne: number, codeEtablissement: string) => ng.IPromise<Tiers.Personne>;
        /**
         * Renvoie la liste des tiers
         */
        getPersonnes: () => Types.Tiers.Personne[];
        /**
         * raz
         */
        raz: () => void;
        constructor(constantes: Constantes.Definitions, $q: ng.IQService, tiersParticulierInformationService: Services.ITiersParticulierInformationService, tiersIdentificationService: Services.ITiersIdentificationService, tiersMediaService: Services.ITiersMediaService, tiersParticulierTiersLiesService: Services.ITiersParticulierTiersLiesService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IContexteService {
        getContexte(): ng.IPromise<Types.Contexte>;
    }
    class ContexteService implements IContexteService {
        private $q;
        private $timeout;
        private constantes;
        private serviceAgent;
        private serviceAgentExtended;
        static contexteServiceId: string;
        static $inject: string[];
        getContexte: () => ng.IPromise<Types.Contexte>;
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition du service Dossier de vente.
     * @author S0070531
     */
    interface IGestionDossierVenteService {
        /**
         * Méthode de restitution du dossier de vente
         * @param {IGestionDossierVenteGetDossierVenteQuery} data : Les données à passer en entrée de la ressource, dont notamment
         * l'identifiant du dossier de vente.
         */
        sendGetRequest(data: IGestionDossierVenteGetDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de màj d'un dossier de vente
         * @param {IGestionDossierVentePutDossierVenteQuery} data : Les données à mettre à jour.
         */
        sendPutRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de création d'un dossier de vente
         * @param {IGestionDossierVentePostDossierVenteQuery} data : Les données du dossier de vente
         */
        sendPostRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePostDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Renvoie le dossier de vente stocké en mémoire
         */
        getGestionDossierVente(): Types.DossierDeVente.GestionDossierVente;
        /**
         *  Renvoie les données génériques du dossier de vente
         */
        consoliderDonneesGeneriques(): Types.DossierDeVente.DonneesGeneriques[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "dossiervente/gestionDossierVente"
     * avec le verbe d'action GET.
     * @author S0070531
     */
    interface IGestionDossierVenteGetDossierVenteQuery {
        /**
         *  Identifiant d'un Etablissement du Réseau BPCE
         */
        codeEtablissement: string;
        /**
         *  Numéro d'identification du dossier de vente
         *  Cette entrée est obligatoire si l'identifiantExterneDossierVente et le codeExterneApplication ne sont pas renseignés.
         */
        identifiantDossierVente?: number;
        /**
         * Référence du dossier fournie par le producteur qui gère l'offre.
         * Cette entrée est obligatoire si l'identifiantDossierVente n'est pas renseigné. Si l'identifiantExterneDossierVente est renseigné, le
         * codeExterneApplication doit être renseigné.
         */
        identifiantExterneDossierVente?: string;
        /**
         * Code de désignation externe de l'application dans la gestion des dossiers de vente.
         * Cette entrée est obligatoire si l'identifiantExterneDossierVente est renseigné.
         */
        codeExterneApplication?: string;
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte?: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cette rubrique spécifie l'entité type de l'organisation consultant, créant ou modifiant le dossier de vente.
         * Valeurs :
         *   '1' = Agence
         *   '2' = CRC
         *   '3' = E - Agence
         *   '4' = Internet
         *   '5' = Administratif
         *   Si cette entrée n'est pas renseignée, les entrées sur l'EDS doivent être renseignées.
         */
        codeEntiteVenteContexte?: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Cette entrée doit être renseignée si le codeEntiteVenteContexte et le codeEdsExternePFContexte ne sont pas renseignés.
         */
        codeEdsInternePFContexte?: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement
         * Identifiant défini en fonction du type d'élément de structure (type EDS).
         *
         * Cette entrée doit être renseignée, si le codeEntiteVenteContexte et le codeEdsInternePFContexte ne sont pas renseignés
         */
        codeEdsExternePFContexte?: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE.
         *   Typologie propre à chaque Etablissement du GCE.
         *   Cette entrée est obligatoire si le codeEdsExternePFContexte est renseigné.
         */
        typeEdsExterneContexte?: string;
        /**
         * Référence externe de l' agent ayant demandé à consulter, le dossier de vente.
         * Cette entrée est facultative.
         */
        referenceExterneAgentContexte?: number;
        /**
         * Cet indicateur permet de savoir si les données Composition (objet compositionCaracteristique) seules ou complétées des données Détail
         * Composition (objet compositionDonneeDetail), ou aucune donnée composition, sont à restituer en sortie de la ressource.
         *   Valeurs :
         *  'C' = seules les données Composition caractéristique sont à restituer
         *  'D' = les données Composition caractéristique et détail sont à restituer
         *  'N' = pas de restitution des données Composition
         */
        indicRestCompoDetail: string;
        /**
         * Cet indicateur permet de savoir si le chemin d'avancement (objet cheminAvancement) du Dossier de Vente est à restituer en sortie de la
         * ressource. Valeurs :
         *   'O' = le chemin d'avancement est à restituer
         *   'N' = le chemin d'avancement n'est pas à restituer
         */
        indicRestCheminAvancement: string;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "dossiervente/gestionDossierVente"
     * avec le verbe d'action PUT.
     * @author S0070531
     */
    interface IGestionDossierVentePutDossierVenteQuery {
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cet indicateur permet de savoir si le commentaire lié au dossier de vente (objet Commentaire) doit être ou pas mis à jour dans la base
         * de donnée dossier de vente. En cas de mise à jour, le commentaire existant sera écrasé et remplacé par le nouveau commentaire (annule et
         *  remplace).
         *  Valeurs :
         * 'O' = le commentaire est à mettre à jour
         * 'N' = aucune mise à jour du commentaire
         */
        indicMajCommentaire: string;
        /**
         * En cas de mise à jour, toutes les personnes liées au dossier de vente seront annulées et remplacées par les nouvelles données fournies
         * en entrée de la ressource.
         *  Valeurs :
         *  'O' = toutes les personnes liées sont à mettre à jour
         *  'N' = aucune mise à jour des personnes liées
         */
        indicMajPersonne: string;
        /**
         * Cet indicateur permet de savoir si les données des partenaires prescripteur (objet Partenaire) doivent être mises à jour dans la base
         * de donnée dossier de vente.
         * En cas de mise à jour, toutes les données liées au partenaire seront annulées et remplacées par les nouvelles données fournies en entrée
         *  de la ressource.Valeurs :
         * 'O' = toutes les données partenaire sont à mettre à jour
         * 'N' = aucune mise à jour des données partenaire
         * nb : non utilisé dans GGO
         */
        indicMajPartenaire: string;
        /**
         * Cet indicateur permet de savoir si la composition du dossier (objet CompositionDossier) doit être ou pas mise à jour dans la base de donnée
         * dossier de vente
         * Si oui , c'est toute la composition (caractéristique et détail) qui est mise à jour en annule et remplace.
         * Valeurs:
         *
         * 'O' = Toutes les données composition sont à mettre à jour
         * 'N' = Aucune mise à jour des données composition
         */
        indicMajCompositionDetail: string;
        /**
         * Cet indicateur permet de savoir si la contractualisation du dossier de vente doit être ou pas mise à jour dans la base de données
         * dossier de vente.
         * Si oui c'est toutes les données de la contractualisation qui seront mises à jour en annule et remplace. Valeurs :
         *
         * 'O' : Toutes les données contractualisation signature sont à mettre à jour
         * 'N' : Aucune mise à jour des données contractualisation signature
         */
        indicMajContractSignature: string;
        /**
         * Code retour renvoyé par les applications externes au dossier de vente.
         * Ce code retour peut prendre des valeurs très différentes en fonction de l'application externe. Exemples :
         *
         * 'OK'
         * 'KO'
         * '01'
         * '00'
         * Cette entrée est à renseigner si une application externe a été appelée (Mise en gestion, BAT éditique, Pop up...)
         */
        codeRetourAppliExterne?: string;
        /**
         * Réponse renvoyée par les applications externes au dossier de vente.
         * La réponse peut prendre des valeurs très différentes en fonction de l'application externe. Exemples : 'OUI'
         * 'NON'
         * 'VALIDER' 'ANNULER'
         *
         * Cette entrée est à renseigner, si besoin, en complément du codeRetourAppliExterne si une application externe a été appelée.
         */
        valeurReponseAppliExterne?: string;
        /**
         * Cet indicateur permet de savoir si l'envoi du mail au client pour la signature électronique a été effectuée ou non.
         * Valeurs:
         *
         * ' ' = Non concerné
         * 'O' = L'envoi du mail SED a été effectué
         * 'N' = L'envoi du mail SED n'a pas été effectué
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'E' (électronique).Elle est renseignée en retour de l'application éditique.
         *
         */
        indicateurEnvoiMail?: string;
        /**
         * Indique si le client a demandé un exemplaire papier des documents lors de la signature électronique en face à face (SAG).Valeurs :
         *
         * ' ' Non concerné.
         * 'O' Le client a demandé un exemplaire papier.
         * 'N' Le client n'a pas demandé d'exemplaire papier.
         * Cette entrée n'est pas obligatoire et est alimentée lorsque le codeModeSignature est égal à 'E' (électronique) et que le
         * codeCanalContexte est égal à 'FF' (face à face).Elle est renseignée en retour de l'application éditique.
         */
        indicateurExemplairePapier?: string;
        /**
         * Désigne le mode d'envoi souhaité pour les documents papier.
         * Lorsque l'utilisateur a choisi un mode de signature papier, il doit préciser comment doit se faire l'envoi.
         *
         *     Valeurs :
         *
         * ' ' Non concerné
         * 'M' Manuel - envoi à la charge de l'utilisateur
         * 'H' Hubmail - service d'envoi vers un sous-traitant qui édite les documents associés au dossier
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier).Elle est renseignée en retour de l'application éditique.
         *
         */
        modeEnvoiDocumentPapier?: string;
        /**
         * Cet indicateur permet de savoir si l'impression papier des documents a été effectuée ou non.
         *
         * Valeurs:
         *
         * ' ' Non concerné
         * 'O' L'impression papier n'a pas été effectuée.
         * 'N' L'impression papier a été effectuée.
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier).Elle est renseignée en retour de l'application éditique.
         *
         */
        indicateurImpressionEffectuee?: string;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "dossiervente/gestionDossierVente"
     * avec le verbe d'action POST.
     * @author S0070531
     */
    interface IGestionDossierVentePostDossierVenteQuery {
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cet indicateur permet de savoir si le commentaire lié au dossier de vente (objet Commentaire) doit être ou pas mis à jour dans la base
         * de donnée dossier de vente. En cas de mise à jour, le commentaire existant sera écrasé et remplacé par le nouveau commentaire (annule et
         *  remplace).
         *  Valeurs :
         * 'O' = le commentaire est à mettre à jour
         * 'N' = aucune mise à jour du commentaire
         */
        indicMajCommentaire: string;
        /**
         * En cas de mise à jour, toutes les personnes liées au dossier de vente seront annulées et remplacées par les nouvelles données fournies
         * en entrée de la ressource.
         *  Valeurs :
         *  'O' = toutes les personnes liées sont à mettre à jour
         *  'N' = aucune mise à jour des personnes liées
         */
        indicMajPersonne: string;
        /**
         * Cet indicateur permet de savoir si les données des partenaires prescripteur (objet Partenaire) doivent être mises à jour dans la base
         * de donnée dossier de vente.
         * En cas de mise à jour, toutes les données liées au partenaire seront annulées et remplacées par les nouvelles données fournies en entrée
         *  de la ressource.Valeurs :
         * 'O' = toutes les données partenaire sont à mettre à jour
         * 'N' = aucune mise à jour des données partenaire
         * nb : non utilisé dans GGO
         */
        indicMajPartenaire: string;
        /**
         * Cet indicateur permet de savoir si la composition du dossier (objet CompositionDossier) doit être ou pas mise à jour dans la base de donnée
         * dossier de vente
         * Si oui , c'est toute la composition (caractéristique et détail) qui est mise à jour en annule et remplace.
         * Valeurs:
         *
         * 'O' = Toutes les données composition sont à mettre à jour
         * 'N' = Aucune mise à jour des données composition
         */
        indicMajCompositionDetail: string;
        /**
         * Cet indicateur permet de savoir si la contractualisation du dossier de vente doit être ou pas mise à jour dans la base de données
         * dossier de vente.
         * Si oui c'est toutes les données de la contractualisation qui seront mises à jour en annule et remplace. Valeurs :
         *
         * 'O' : Toutes les données contractualisation signature sont à mettre à jour
         * 'N' : Aucune mise à jour des données contractualisation signature
         */
        indicMajContractSignature: string;
        /**
         * Code retour renvoyé par les applications externes au dossier de vente.
         * Ce code retour peut prendre des valeurs très différentes en fonction de l'application externe. Exemples :
         *
         * 'OK'
         * 'KO'
         * '01'
         * '00'
         * Cette entrée est à renseigner si une application externe a été appelée (Mise en gestion, BAT éditique, Pop up...)
         */
        codeRetourAppliExterne?: string;
        /**
         * Réponse renvoyée par les applications externes au dossier de vente.
         * La réponse peut prendre des valeurs très différentes en fonction de l'application externe. Exemples : 'OUI'
         * 'NON'
         * 'VALIDER' 'ANNULER'
         *
         * Cette entrée est à renseigner, si besoin, en complément du codeRetourAppliExterne si une application externe a été appelée.
         */
        valeurReponseAppliExterne?: string;
        /**
         * Cet indicateur permet de savoir si l'envoi du mail au client pour la signature électronique a été effectuée ou non.
         * Valeurs:
         *
         * ' ' = Non concerné
         * 'O' = L'envoi du mail SED a été effectué
         * 'N' = L'envoi du mail SED n'a pas été effectué
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'E' (électronique).Elle est renseignée en retour de l'application éditique.
         *
         */
        indicateurEnvoiMail?: string;
        /**
         * Indique si le client a demandé un exemplaire papier des documents lors de la signature électronique en face à face (SAG).Valeurs :
         *
         * ' ' Non concerné.
         * 'O' Le client a demandé un exemplaire papier.
         * 'N' Le client n'a pas demandé d'exemplaire papier.
         * Cette entrée n'est pas obligatoire et est alimentée lorsque le codeModeSignature est égal à 'E' (électronique) et que le
         * codeCanalContexte est égal
         * à 'FF' (face à face).Elle est renseignée en retour de l'application éditique.
         */
        indicateurExemplairePapier?: string;
        /**
         * Désigne le mode d'envoi souhaité pour les documents papier.
         * Lorsque l'utilisateur a choisi un mode de signature papier, il doit préciser comment doit se faire l'envoi.
         *
         *     Valeurs :
         *
         * ' ' Non concerné
         * 'M' Manuel - envoi à la charge de l'utilisateur
         * 'H' Hubmail - service d'envoi vers un sous-traitant qui édite les documents associés au dossier
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier).Elle est renseignée en retour de l'application éditique.
         *
         */
        modeEnvoiDocumentPapier?: string;
        /**
         * Cet indicateur permet de savoir si l'impression papier des documents a été effectuée ou non.
         *
         * Valeurs:
         *
         * ' ' Non concerné
         * 'O' L'impression papier n'a pas été effectuée.
         * 'N' L'impression papier a été effectuée.
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier).Elle est renseignée en retour de l'application éditique.
         *
         */
        indicateurImpressionEffectuee?: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource dossier de vente.
     * @author S0076105
     */
    class GestionDossierVenteAjaxImplService implements IGestionDossierVenteService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Méthode de restitution du dossier de vente
         * @param {IGestionDossierVenteGetDossierVenteQuery} data : Les données à passer en entrée de la ressource, dont notamment
         * l'identifiant du dossier de vente.
         */
        sendGetRequest(params: IGestionDossierVenteGetDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de mise à jour du dossier de vente.
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à màj
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPutRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de mise à jour du dossier de vente.
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à màj
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPostRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le dossier de vente
         * chargé via sendGetRequest
         * @author S0070531
         * @return Dossier de vente
         */
        getGestionDossierVente(): Types.DossierDeVente.GestionDossierVente;
        consoliderDonneesGeneriques(): Types.DossierDeVente.DonneesGeneriques[];
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource dossier de vente (version mockée).
     * @author S0070531
     */
    class GestionDossierVenteMockImplService implements IGestionDossierVenteService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @author S0070531
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse mockée
         */
        sendGetRequest(data: IGestionDossierVenteGetDossierVenteQuery): ng.IPromise<Types.DossierDeVente.IGestionDossierVente>;
        /**
         * Méthode de mise à jour du dossier de vente.
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à màj
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPutRequest(dossier: Types.DossierDeVente.GestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de création du dossier de vente.
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à créer
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPostRequest(dossier: Types.DossierDeVente.GestionDossierVente, query: IGestionDossierVentePostDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getGestionDossierVente(): Types.DossierDeVente.GestionDossierVente;
        consoliderDonneesGeneriques(): Types.DossierDeVente.DonneesGeneriques[];
    }
    class GestionDossierVenteService {
        static gestionDossierVenteServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IContexteGgoService {
        getContexteGgo(): ng.IPromise<Types.ContexteGgo>;
    }
    class ContexteGgoService implements IContexteGgoService {
        private $q;
        private serviceAgentExtended;
        private constantes;
        private contexteService;
        private gestionDossierVenteService;
        static contexteGgoServiceId: string;
        static $inject: string[];
        getContexteGgo: () => ng.IPromise<Types.ContexteGgo>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.ContexteService, gestionDossierVenteService: Services.GestionDossierVenteService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IContexteGgoStockageService {
        getContexteGgo(): Types.ContexteGgo;
        setContexteGgo(offreSouscrite: Types.ContexteGgo): void;
    }
    class ContexteGgoStockageService implements IContexteGgoStockageService {
        static contexteGgoStockageServiceId: string;
        static $inject: string[];
        private static contexteGgoStockage;
        /**
         * Récupère le contexte depuis une variable statique
         */
        getContexteGgo: () => Types.ContexteGgo;
        /**
         *  Sauve le contexte dans une variable statique
         */
        setContexteGgo: (contexteGgo: Types.ContexteGgo) => void;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "offre/avantageFamilleOffre".
     */
    interface IAvantageFamilleOffreService {
        sendGetRequest(data: IOffreGetAvantageFamilleQuery): ng.IPromise<Types.IAvantageFamilleOffre>;
        sendPostRequest(produitService: Types.IAvantageFamilleOffreModification): ng.IPromise<Types.IAvantageFamilleOffre>;
        getAvantageFamilleOffre(): Types.AvantageFamilleOffre;
        presencePSFamille: boolean;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "offre/avantageFamilleOffre"
     * avec le verbe d'action GET.
     */
    interface IOffreGetAvantageFamilleQuery {
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        numeroPersonne: number;
        identifiantTiers?: number;
        modeAppelModule: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "offre/avantageFamilleOffre".
     */
    class AvantageFamilleOffreAjaxImplService implements IAvantageFamilleOffreService {
        private serviceAgent;
        private qService;
        private static _instance;
        private _presencePSFamille;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: IOffreGetAvantageFamilleQuery): ng.IPromise<Types.IAvantageFamilleOffre>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(avantageFamille: Types.IAvantageFamilleOffreModification): ng.IPromise<Types.IAvantageFamilleOffre>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet AvantageFamilleOffre
         */
        getAvantageFamilleOffre(): Types.AvantageFamilleOffre;
        /**
         * Indicateur qui permet de savoir si un P/S typé famille a été ajouté
         * @return boolean presencePSFamille
         */
        presencePSFamille: boolean;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "offre/avantageFamilleOffre".
     */
    class AvantageFamilleOffreMockImplService implements IAvantageFamilleOffreService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        private _presencePSFamille;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: IOffreGetAvantageFamilleQuery): ng.IPromise<Types.IAvantageFamilleOffre>;
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(avantageFamille: Types.IAvantageFamilleOffreModification): ng.IPromise<Types.IAvantageFamilleOffre>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet AvantageFamilleOffre
         */
        getAvantageFamilleOffre(): Types.AvantageFamilleOffre;
        /**
         * Indicateur qui permet de savoir si un P/S typé famille a été ajouté
         * @return boolean presencePSFamille
         */
        presencePSFamille: boolean;
    }
    class AvantageFamilleOffreService {
        static avantageFamilleOffreServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IOffreDonneesService {
        /**
         *  Renvoie les informations liées à l'offre
         */
        get(): Types.OffreSouscrite;
        /**
         * Positionne les données de l'offre
         */
        set(offre: Types.OffreSouscrite): void;
    }
    class OffreDonneesService implements IOffreDonneesService {
        static offreDonneesServiceId: string;
        static $inject: any[];
        private _offreDonnees;
        /**
         *  Renvoie les informations liées à l'offre
         */
        get: () => Types.OffreSouscrite;
        /**
         * Positionne les données de l'offre
         */
        set: (offre: Types.OffreSouscrite) => void;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface comportant les données permettant d'interroger la ressource parametrageOffre
     * avec le verbe d'action GET.
     * @author S0070531
     */
    interface IParametrageBlocsGetParametrageBlocsQuery {
        codeEtablissement: string;
    }
    /**
     * Interface de définition du service de récupération du paramétrage des composants P/S.
     * @author S0070531
     */
    interface IParametrageBlocsService {
        sendGetRequest(data: IParametrageBlocsGetParametrageBlocsQuery): ng.IPromise<Types.IParametrageBlocs>;
        getParametrageBlocs(): Types.ParametrageBlocs;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource parametrageOffre
     * @author S0076105
     */
    class ParametrageBlocsAjaxImplService implements IParametrageBlocsService {
        private serviceAgent;
        private $q;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $q: ng.IQService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IParametrageBlocsGetParametrageBlocsQuery): ng.IPromise<Types.IParametrageBlocs>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getParametrageBlocs(): Types.ParametrageBlocs;
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource "parametrageOffre".
     * @author S0076105
     */
    class ParametrageBlocsMockImplService implements IParametrageBlocsService {
        private serviceAgent;
        private mockLoaderService;
        private $q;
        static _instance: Types.ParametrageBlocs;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, $q: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IParametrageBlocsGetParametrageBlocsQuery): ng.IPromise<Types.IParametrageBlocs>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getParametrageBlocs(): Types.ParametrageBlocs;
    }
    class ParametrageBlocsService {
        static parametrageBlocsServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition du service de Entite titulaire.
     * @author S0070531
     */
    interface ICatalogueService {
        /**
         *  Méthode de restitution des produits du catalogue
         */
        sendGetRequest(data: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
        /**
         * Renvoie un tableau de produits avec leurs références contrat
         * En souscription ce tableau contient les P/S repris
         * En avenant ce tableau contient les P/S de l'offre
         */
        getReferencesProduits(): Types.ReferenceProduit[];
        /**
         * Renvoie le catalogue "brut" tel qu'il a été reçu de la ressource
         * Ce catalogue brut est utilisé lors de la mise en gestion pour effectuer la mise en référence
         */
        getCatalogueBrut(): Types.CatalogueSouscriptionAvenant;
        /**
         *  Renvoie les entités chargées par sendGetRequest (version mockée ou réelle)
         */
        getCatalogue(): Types.CatalogueNode;
        /**
         * Renvoie les données de niveau offre
         */
        getOffre(): Types.Offre;
        /**
         * Renvoie l'identifiant P/S de l'offre
         */
        getIdentifiantProduitServiceOffre(): number;
        /**
         * Renvoie le libellé de l'offre
         */
        getLibelleProduitServiceOffre(): string;
        /**
         * Supprime les références circulaires présentes dans le catalogue (liens "ascendant") en vue d'une sérialisation de celui-ci.
         */
        supprimerReferencesCirculaires(): void;
        /**
         * Rétabli les liens ascendants du catalogue. [non implémenté]
         */
        retablirReferencesCirculaires(): void;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "souscription/avenant"
     * avec le verbe d'action GET.
     * @author S0070531
     */
    interface ICatalogueGetCatalogueQuery {
        codeActeGestion: string;
        codeEtablissement: string;
        referenceExterneAgent: number;
        identifiantElementStructure: number;
        posteRattachementAgent: number;
        identifiantProduitService: number;
        numeroEntiteTitulaire: number;
        codeEntiteVente: string;
        codeEtablissementProduitService: string;
        codeGuichetProduitService: string;
        referenceProduitService: string;
        codeTypeProduitService: string;
        codeCanalDossierVente: string;
        numeroOffreSouscrite: number;
        indicateurTypeClotureOffre: string;
    }
    class CatalogueAjaxImplService implements ICatalogueService {
        private serviceAgent;
        private serviceAgentExtended;
        private modalService;
        private qService;
        private parametrageBlocsService;
        private tiersService;
        private entiteTitulaireService;
        private offreDonneesService;
        private codeTypeProduitServicePrincipalOffre;
        private static _instanceCatalogueBrut;
        private static _instanceCatalogue;
        private static _instanceOffre;
        private static _instanceReferencesProduits;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, qService: ng.IQService, parametrageBlocsService: Services.IParametrageBlocsService, tiersService: Services.TiersService, entiteTitulaireService: Services.IEntiteTitulaireService, offreDonneesService: Services.OffreDonneesService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
        /**
         * Renvoie un tableau de produits avec leurs références contrat
         * En souscription ce tableau contient les P/S repris
         * En avenant ce tableau contient les P/S de l'offre
         */
        getReferencesProduits(): Types.ReferenceProduit[];
        /**
         * Renvoie le catalogue "brut" tel qu'il a été reçu de la ressource
         * Ce catalogue brut est utilisé lors de la mise en gestion pour effectuer la mise en référence
         * @return catalogue brut de type Types.CatalogueSouscriptionAvenant
         */
        getCatalogueBrut(): Types.CatalogueSouscriptionAvenant;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Catalogue
         */
        getCatalogue(): Types.CatalogueNode;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage niveau offre
         * chargé via sendGetRequest
         * @author S0070531
         * @return Offre
         */
        getOffre(): Types.Offre;
        /**
         * Renvoie l'identifiant P/S de l'offre
         * @author S0070531
         * @return identifiant P/S de l'offre
         */
        getIdentifiantProduitServiceOffre(): number;
        /**
         * Renvoie le libellé de l'offre
         * @author S0070531
         * @return le libellé de l'offre
         */
        getLibelleProduitServiceOffre(): string;
        /**
         * Supprime les références circulaires créées dans le catalogue par les liens ascendants
         * @author S0070531
         * @return void
         */
        supprimerReferencesCirculaires(): void;
        /**
         * Rétabli les liens ascendants
         * @author S0070531
         * @return void
         */
        retablirReferencesCirculaires(): void;
        /**
         * Méthode de construction de l'url du web service
         * @author S0070531
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec le mock "Catalogue".
     * @author S0070531
     */
    class CatalogueMockImplService implements ICatalogueService {
        private serviceAgent;
        private serviceAgentExtended;
        private modalService;
        private mockLoaderService;
        private qService;
        private parametrageBlocsService;
        private tiersService;
        private entiteTitulaireService;
        private offreDonneesService;
        private codeTypeProduitServicePrincipalOffre;
        private static _instanceCatalogueBrut;
        private static _instanceCatalogue;
        private static _instanceOffre;
        private static _instanceReferencesProduits;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService, parametrageBlocsService: Services.IParametrageBlocsService, tiersService: Services.TiersService, entiteTitulaireService: Services.IEntiteTitulaireService, offreDonneesService: Services.OffreDonneesService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
        /**
         * Renvoie un tableau de produits avec leurs références contrat
         * En souscription ce tableau contient les P/S repris
         * En avenant ce tableau contient les P/S de l'offre
         */
        getReferencesProduits(): Types.ReferenceProduit[];
        /**
         * Renvoie le catalogue "brut" tel qu'il a été reçu de la ressource
         * Ce catalogue brut est utilisé lors de la mise en gestion pour effectuer la mise en référence
         * @return catalogue brut de type Types.CatalogueSouscriptionAvenant
         */
        getCatalogueBrut(): Types.CatalogueSouscriptionAvenant;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Catalogue
         */
        getCatalogue(): Types.CatalogueNode;
        /**
         * Renvoie l'identifiant P/S de l'offre
         * @author S0070531
         * @return identifiant P/S de l'offre
         */
        getIdentifiantProduitServiceOffre(): number;
        /**
         * Renvoie le libellé de l'offre
         * @author S0070531
         * @return le libellé de l'offre
         */
        getLibelleProduitServiceOffre(): string;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage niveau offre
         * chargé via sendGetRequest
         * @author S0070531
         * @return Offre
         */
        getOffre(): Types.Offre;
        /**
         * Supprime les références circulaires créées dans le catalogue par les liens ascendants
         * @author S0070531
         * @return void
         */
        supprimerReferencesCirculaires(): void;
        /**
         * Rétabli les liens ascendants
         * @author S0070531
         * @return void
         */
        retablirReferencesCirculaires(): void;
    }
    class CatalogueService {
        static catalogueServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ICompositionOffreService {
        /**
         * Renvoie le panier de l'offre en cours
         */
        getCompositionOffre(): Types.CompositionOffre;
        /**
         * Supprime les références circulaires présentes dans le panier (liens "ascendant") en vue d'une sérialisation de celui-ci.
         */
        supprimerReferencesCirculaires(): void;
        /**
         * Rétabli les liens ascendants du panier. [non implémenté]
         */
        retablirReferencesCirculaires(): void;
    }
    class CompositionOffreService implements ICompositionOffreService {
        private constantes;
        private entiteTitulaireService;
        private tiersService;
        private contexteGgoStockageService;
        private catalogueService;
        private parametrageBlocsService;
        private gestionDossierVenteService;
        static compositionOffreServiceId: string;
        static $inject: string[];
        private static compositionOffre;
        getCompositionOffre: () => Types.CompositionOffre;
        supprimerReferencesCirculaires: () => void;
        retablirReferencesCirculaires: () => void;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireService: Services.IEntiteTitulaireService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService, gestionDossierVenteService: Services.IGestionDossierVenteService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    /**
     * Classe du controleur Avantage Famille
     * @class AvantageFamille
     */
    class AvantageFamille {
        private $q;
        private $rootScope;
        private $location;
        private constantes;
        private entiteTitulaireService;
        private contexteGgoStockageService;
        private avantageFamilleOffreService;
        private compositionOffreService;
        avantageFamilleOffre: Types.IAvantageFamilleOffrePersonne[];
        traitementEnCours: boolean;
        private _$q;
        private _avantageFamilleOffreService;
        private _identifiantPersonneTitulaire;
        private _deuxiemePersonneEnRelation;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _numeroOffreSouscrite;
        private _modeAppelModule;
        private _presencePSFamille;
        static $inject: string[];
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireService: Services.IEntiteTitulaireService, contexteGgoStockageService: Services.ContexteGgoStockageService, avantageFamilleOffreService: Services.IAvantageFamilleOffreService, compositionOffreService: Services.CompositionOffreService);
        presencePSFamille: boolean;
        getPresenceProduitServiceFamille(): boolean;
        terminerTraitementEnErreur(message: string): void;
        getAvantageFamilleSendGetRequest(): ng.IPromise<Types.IAvantageFamilleOffre>;
        getAvantageFamille(): void;
        getModeAppelModule(codeActeGestion: string): string;
        getDesignationPersonne(civilite: string, prenom: string, nom: string): string;
        getLibelleLienInterPersonnes(lienInterPersonnes: string): string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IErreurService {
        /**
         *  Renvoie les messages d'erreur à afficher
         */
        getMessagesErreur(): Types.ErreurGestionGeneriqueOffre[];
        /**
         * Remet à zéro la liste des messages d'erreur
         */
        raz(): void;
        /**
         * Ajoute un message à la liste. L'emetteur est l'id du bloc émettant l'erreur
         */
        ajouterMessageErreur(emetteur: string, messageErreur: Types.ErreurGestionGeneriqueOffre): void;
        /**
         * Renvoie le nombre de messages correspondant au(x) niveau(x) de criticité passés en paramètre. Seuls les messages visibles sont décomptés.
         */
        compterMessages(criticites?: GestionGeneriqueOffres.Types.NiveauErreur[]): number;
    }
    class ErreurService implements IErreurService {
        private $rootScope;
        private constantes;
        static erreurServiceId: string;
        static $inject: string[];
        private static listeMessagesErreur;
        /**
         * Insertion d'un message d'erreur en fonction de sa criticité.
         */
        private static insererMessage(messageErreur);
        /**
         *  Renvoie les messages d'erreur à afficher
         */
        getMessagesErreur: () => Types.ErreurGestionGeneriqueOffre[];
        raz: () => void;
        /**
         * Ajoute un message à la liste.
         * @param [emetteur] L'emetteur est par exemple l'id du bloc émettant l'erreur. Dans un autre contexte celà peut être autre chose qui permet
         * d'identifier l'émetteur du message
         * @param [messageErreur] Le message à rajouter
         * @return rien
         */
        ajouterMessageErreur: (emetteur: string, messageErreur: Types.ErreurGestionGeneriqueOffre) => void;
        /**
         * Ajoute plusieurs messages à la liste.
         * @param [emetteur] L'emetteur est par exemple l'id du bloc émettant l'erreur. Dans un autre contexte celà peut être autre chose qui permet
         * d'identifier l'émetteur du message
         * @param [messagesErreur] Les messages à rajouter
         * @param [libelleComposantEmetteur] Sera rajouté dans le message si il est présent, sinon affichera "Emetteur inconnu".
         * @return rien
         */
        ajouterMessagesErreur: (emetteur: string, messagesErreur: Types.ErreurGestionGeneriqueOffre[], libelleComposantEmetteur?: string) => void;
        /**
         * Renvoie le nombre de messages correspondant au(x) niveau(x) de criticité passés en paramètre. Seuls les messages visibles sont décomptés.
         * @param [criticites] Une liste de niveaux de criticité. Tous les messages dont le niveau de criticité figure dans la liste seront intégrés
         * au comptage. Si la liste est vide ou non passée, tous les messages sont comptés.
         * @return Nombre de messages correspondant au(x) niveau(x) de criticité passés en paramètre
         */
        compterMessages: (criticites?: GestionGeneriqueOffres.Types.NiveauErreur[]) => number;
        nombreMessages: number;
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IActionsService {
        /**
         *  Renvoie les actions à afficher
         */
        getActions(): Types.Action[];
        /**
         * Remet à zéro la liste des actions
         */
        raz(): void;
        /**
         * Ajoute une action à la liste.
         */
        ajouterAction(action: Types.Action): void;
        /**
         * Modifie l'état d'un bouton
         */
        modifierAction(codeAction: string, modificateur: any): void;
        /**
         * Supprime une action à la liste.
         */
        supprimerAction(codeAction: string): void;
    }
    class ActionsService implements IActionsService {
        private constantes;
        static actionsServiceId: string;
        static $inject: string[];
        private listeActions;
        /**
         *  Renvoie les actions à afficher
         */
        getActions: () => Types.Action[];
        /**
         * Remet à zéro la liste des actions
         */
        raz: () => void;
        /**
         * Ajoute une action à la liste.
         */
        ajouterAction: (action: Types.IAction) => void;
        /**
         * Supprime une action de la liste.
         */
        supprimerAction: (codeAction: string) => void;
        /**
         * Modifie l'état d'un bouton
         * @param codeAction : L'id du bouton que l'on souhaite modifier
         * @param modificateur : peut être soit un objet composé de deux propriétés, soit un tableau d'objets composés de deux propriétés chacun,
         * si l'on souhaite modifier plusieurs propriétés du bouton en même temps. La première propriété est le nom de la propriété du bouton que l'on souhaite modifier, la seconde est la nouvelle valeur à y attribuer
         * ex : modifierAction("btn-fermer", { "visible": true });
         * ex : modifierAction("btn-fermer", [{ "visible": true }, {"texte" : "Coucou"}]);
         */
        modifierAction: (codeAction: string, modificateur: any) => void;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class BarreAction {
        private actionsService;
        actions: Types.Action[];
        nonImplemente: () => void;
        static $inject: string[];
        constructor(actionsService: Services.ActionsService);
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    interface IChargementScope extends ng.IScope {
        $location: ng.ILocationService;
    }
    class ChargementControleur {
        private $location;
        private serviceAgentExtended;
        private progressionChargement;
        static $inject: string[];
        constructor($location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, progressionChargement: Types.ProgressionChargement);
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Classe de chargement des mocks
     */
    class InitialisationService {
        private $location;
        private config;
        static initialisationServiceId: string;
        static $inject: string[];
        constructor($location: ng.ILocationService, config: Types.Config);
        /**
         * Méthode permettant de déterminer si les mocks sont activés.
         * @author S0076105
         * @return Un booléen indiquant l'activation des mocks
         */
        isMockEnabled(leMock: string): boolean;
        /**
         * Méthode permettant de déterminer si un shunt est activé.
         * @author S0070531
         * @param [leShunt] Id du shunt à activer. Pour savoir ce qui existe, regarder la définition de l'objet "config" dans app.ts
         * @return Un booléen indiquant l'activation du shunt
         */
        isShuntEnabled(leShunt: string): boolean;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IMessagesService {
        /**
         *  Renvoie les messages à afficher
         */
        getMessages(): Types.Message[];
        raz(): void;
        ajouterMessage(message: string, style?: string, visible?: boolean, delai?: number): void;
    }
    class MessagesService implements IMessagesService {
        private $timeout;
        private mwNotificationService;
        private constantes;
        static messagesServiceId: string;
        static $inject: string[];
        /**
         * Contient les messages
         */
        private listeMessages;
        /**
         * Nombre maxi de messages
         */
        private nombreMaximumMessages;
        /**
         *  Renvoie les messages à afficher
         */
        getMessages: () => Types.Message[];
        /**
         * Remet à zéro la liste des messages
         */
        raz: () => void;
        /**
         * Ajoute un message à la liste.
         */
        ajouterMessage: (message: string, style?: string, visible?: boolean, delai?: number) => void;
        /**
         * Supprime un message a un index donné du tableau
         */
        private supprimerMessageParId;
        constructor($timeout: ng.ITimeoutService, mwNotificationService: MyWay.UI.IMwNotificationService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "offre/repriseOffre"
     */
    interface IRepriseOffreService {
        sendGetRequest(data: IOffreGetRepriseOffreQuery): ng.IPromise<Types.IRepriseOffre>;
        getRepriseOffre(): Types.IRepriseOffre;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "offre/repriseOffre"
     * avec le verbe d'action GET.
     */
    interface IOffreGetRepriseOffreQuery {
        referenceExterneAgent: number;
        identifiantElementStructure: number;
        identifiantElementStructureBis: number;
        identifiantProduitService: number;
        codeEtablissement: string;
        codeTypeProduitService: string;
        codeModaliteDetentionProduitService: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        codeModeGestionDansClient?: string;
        codeProduitServiceExterne?: string;
        codeDevise?: string;
        codeActionRepriseUnitaire?: string;
        codeEtablissementContrat?: string;
        codeGuichet?: string;
        referenceProduitService?: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "offre/repriseOffre".
     */
    class RepriseOffreAjaxImplService implements IRepriseOffreService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: IOffreGetRepriseOffreQuery): ng.IPromise<Types.IRepriseOffre>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet RepriseOffre
         */
        getRepriseOffre(): Types.RepriseOffre;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "offre/repriseOffre".
     */
    class RepriseOffreMockImplService implements IRepriseOffreService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: IOffreGetRepriseOffreQuery): ng.IPromise<Types.IRepriseOffre>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet RepriseOffre
         */
        getRepriseOffre(): Types.RepriseOffre;
    }
    class RepriseOffreService {
        static repriseOffreServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    class CompositionEntite {
        private $rootScope;
        private $scope;
        private $location;
        private $anchorScroll;
        private $timeout;
        private serviceAgent;
        private constantes;
        private contexteGgoStockageService;
        private entiteTitulaireService;
        private tiersService;
        private offreDonneesService;
        private messagesService;
        private catalogueService;
        private compositionOffreService;
        compositionOffreEntitePersonne: Types.CompositionOffreEntitePersonne;
        conditionEntites: boolean;
        bouton: any;
        desabonnerSupprimerProduit: () => void;
        basculerBouton(): void;
        codeSousFamilleActeDeGestionOffre: string;
        /**
         * Fait scroller la perso vers une ancre de bloc.
         */
        allerAncre(idBloc: string): void;
        /**
         * Affiche la référence produit en fonction des données de référence et du mode d'affichage de la référence
         * (codeAffichageReferenceProduitService)
         */
        afficherReference(produit: Types.CompositionOffreProduit): string;
        /**
         * Cette fonction permet de ne pas afficher l'entête de la personne dans la composition si l'entité est en mode simple
         * (càd que l'entité ne contient qu'une personne, donc inutile de redonder la personne et l'entité dans la compo).
         */
        afficherPersonneDeLEntite(): boolean;
        /**
         * On force le recalcul de la directive métier en supprimant le produit du panier et en l'insérant à nouveau
         */
        private substituerProduitService(produit);
        /**
         * Gère les marqueurs (coche) et l'état (actif/inactif) de la tuile associée au produit passé en paramètre.
         */
        private gererEtatTuile(produit, assemblage);
        /**
         * Clôture d'un produit suite au clic sur la poubelle dans la composition
         * Soit le produit est purement et simplement supprimé du panier, soit il est marqué pour clôture
         */
        cloturerProduit(produit: Types.CompositionOffreProduit): void;
        /**
         * Annule le statut marquePourCloture positionné lorsque l'utilisateur clique sur l'icone d'annulation d'un produit déjà existant dans l'offre
         */
        retablirProduit(produit: Types.CompositionOffreProduit): void;
        /**
         * Condition pour l'affichage de la poubelle
         * La poubelle est toujours affichée pour un produit repris, afin de permettre à l'utilisateur de choisir s'il veut le reprendre ou pas.
         * On n'affiche la poubelle que si le produit n'est pas marqué pour clôture (on ne peut pas supprimer un produit déjà supprimé)
         * On n'affiche la poubelle que pour les produits non obligatoire ou pour les produits qui ont un nb d'exemplaires mini = 0
         * qui ne sont pas dans un assemblage.
         * En avenant d'offre, si le produit est obligatoire, on ne doit pas afficher la poubelle. Sinon il faut que le code sous famille
         * acte de gestion CL soit présent pour le produit si le produit est en avenant
         * TODO : faire en sorte que ca ne soit appelé qu'une fois. Actuellement cette fonction est bindée directement depuis le template.
         */
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $scope: ng.IScope, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgent: MyWay.Services.ServiceAgent, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireService: Services.IEntiteTitulaireService, tiersService: Services.TiersService, offreDonneesService: Services.OffreDonneesService, messagesService: Services.MessagesService, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class CompositionTagsProduits {
        private constantes;
        private contexteGgoStockageService;
        modeAjoutProduitDansOffre: string;
        estEnSouscription: boolean;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class CompteRenduControleur {
        private $q;
        private serviceAgentExtended;
        private idIDN;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private retourContractualisation();
        /**
         * Permet de rafraîchir la synthèse NSDK avec la nouvelle offre souscrite
         */
        private majSyntheseNSDK();
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IDefautModaleScope extends ng.IScope {
        modalDatas: any;
    }
    class DefautModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        private constantes;
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IDefautModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}


declare module GestionGeneriqueOffres.Utilitaires {
    interface IModalOptions {
        closeButtonText: string;
        headerText: string;
        bodyText: string;
        iconName: string;
        size: string;
    }
    interface IDoPopInParametrage {
        confirmationOptions: IModalOptions;
        quitter: boolean;
    }
    class Utils {
        /**
         * Essaie de décoder ce qu'il y a dans raison.
         * @param [raison] Une erreur, typiquement le contenu du paramètre d'un callback (reject ou catch)
         * @param [message] Optionnel - Message
         * @return La fonction essaie de décoder le contenu de raison afin d'y trouver un message d'erreur significatif. Si la fonction s'avère être
         * incapable de comprendre le contenu de raison, elle renvoie soit le second paramètre optionnel "message" s'il est présent. Autrement, elle
         * renvoie "Erreur indéterminée".
         */
        static decoderRaison(raison: any, message?: string): string;
        static checkInject(classe: any, args: IArguments): void;
        /**
         * Reroute vers la page d'erreur GGO
         * message : le message d'erreur à afficher
         * cause : la cause
         * infosTechniques : optionnel. Peut être une stacktrace par exemple.
         */
        static erreurGGO(message: string, cause: any, modeAffichageErreur: Constantes.ModeAffichageErreur, infosTechniques?: string): void;
        /**
         * Permet de récupérer le titre principal
         */
        static getTitrePrincipal(codeActeGestion: string): string;
        /**
         * Ajouter des '0' devant un nombre
         * @param [num] le nombre à formater
         * @param [size] la taille de la chaîne retournée
         */
        static leadingZero(num: number, size: number): string;
        /**
         * Détermine si le domaine est autorisé à appeler les fonctions de débogage.
         * Les domaines autorisés sont localhost et dua.
         * Les fonctions sont les toolstips catalogue/panier, le bouton debug, les mocks etc.
         * @param [domaine] le domaine
         * @return vrai autorisé, faux non autorisé
         */
        static domaineAutorisePourDebug(domaine: string): boolean;
        /**
         * Formatte un numéro de compte si celui-ci fait + que 10 c
         * 131350008004123456789 ==> 13135-00080-04123456789
         * @param [numeroCompte] le n° de compte non formatté
         * @return le n° de compte formatté, vide si le numéro de compte = INDEFINI, inchangé si longueur < 10 caractères en entrée.
         */
        static formatterNumeroCompte(numeroCompte: string): string;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class EditiqueControleur {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private updateDocumentsGeneres();
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IErreurChargementComposantModaleScope extends ng.IScope {
        modalDatas: any;
    }
    class ErreurChargementComposantModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IDefautModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IErreurScope extends ng.IScope {
        constantes: GestionGeneriqueOffres.Constantes.Definitions;
        source: string;
        message: string;
        cause: any;
        infosTechniques: string;
        contexte: Types.ContexteGgo;
    }
    class ErreurControleur {
        private $scope;
        private $rootScope;
        private $location;
        private $http;
        private constantes;
        private contexteGgoStockageService;
        private serviceAgentExtended;
        static controllerId: string;
        static $inject: string[];
        source: string;
        message: string;
        cause: any;
        infosTechniques: string;
        contexte: Types.ContexteGgo;
        date: Date;
        constructor($scope: IErreurScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $http: ng.IHttpService, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private analyserStackTrace();
        private retourGgo();
        private quitterGgo();
    }
}

declare module GestionGeneriqueOffres.Composition {
    class InformationDossier {
        private $rootScope;
        private constantes;
        libelleModeVente: string;
        libelleActeGestion: string;
        titreInfoDossier: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}


declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    class PanneauMessages {
        private messagesService;
        listeMessages: Types.Message[];
        static $inject: string[];
        constructor(messagesService: Services.MessagesService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ISignatairesService {
        listeSignataires: myway.comContract.modeles.ISignataireComplet[];
        messageErreur: string;
        afficherListeSignataires: boolean;
    }
    class SignatairesService implements ISignatairesService {
        static signatairesServiceId: string;
        afficherListeSignataires: boolean;
        private _listeSignataires;
        private _messageErreur;
        static $inject: string[];
        constructor();
        /**
         * Liste des signataires sélectionnés
         * @return tableau d'Object ISignataireDirective
         */
        listeSignataires: myway.comContract.modeles.ISignataireComplet[];
        /**
         * Message d'erreur renseigné si :
         * - le champ précision signataire n'est pas renseigné
         * - la règle de gestion n'est pas respectée
         * @return string messageErreur
         */
        messageErreur: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IValidationFormulaireService {
        /**
         *  Validation des formulaires
         */
        validerFormulaire(): void;
    }
    class ValidationFormulaireService implements IValidationFormulaireService {
        private $rootScope;
        private $q;
        private $location;
        private $anchorScroll;
        private $timeout;
        private serviceAgentExtended;
        private constantes;
        private catalogueService;
        private compositionOffreService;
        private actionsService;
        private erreurService;
        private signatairesService;
        private modalService;
        private contexteGgoStockageService;
        private tarificationOffreService;
        static validationFormulaireServiceId: string;
        static $inject: string[];
        /**
         * Validation des formulaires
         */
        validerFormulaire: () => void;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService, actionsService: Services.ActionsService, erreurService: Services.ErreurService, signatairesService: Services.ISignatairesService, modalService: MyWay.UI.IModalService, contexteGgoStockageService: Services.IContexteGgoStockageService, tarificationOffreService: Services.ITarificationOffreService);
    }
}

/**
 * Service permettant de lancer la sauvegarde du dossier de vente
 * Pour le moment le service permet juste de sauvergarde le dossier dans le local storage
 *
 */
declare module GestionGeneriqueOffres.Services {
    interface ISauvegardeDossierDeVenteService {
        /**
         * Permet de sauvergarder le dossier de vente dans le local storage
         */
        sauvegarderDossierDeVente(): void;
    }
    class SauvegardeDossierDeVenteService implements ISauvegardeDossierDeVenteService {
        private $rootScope;
        private $q;
        private $location;
        private $anchorScroll;
        private $timeout;
        private serviceAgentExtended;
        private constantes;
        private catalogueService;
        private compositionOffreService;
        private actionsService;
        private erreurService;
        private signatairesService;
        private modalService;
        private contexteGgoStockageService;
        static sauvegardeDossierDeVenteServiceId: string;
        static $inject: string[];
        sauvegarderDossierDeVente: () => void;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService, actionsService: Services.ActionsService, erreurService: Services.ErreurService, signatairesService: Services.ISignatairesService, modalService: MyWay.UI.IModalService, contexteGgoStockageService: Services.IContexteGgoStockageService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ISurveillanceChargementService {
        /**
         * Vrai si l'initialisation des P/S est terminée, faux sinon
         */
        /**
         * Ajoute un indicateur de chargement pour le bloc idBloc
         */
        ajouterIndicateurChargementProduitService(idBloc: string, etat: boolean, libelle: string): void;
        /**
         * Met à jour l'indicateur de chargement pour le bloc idBloc
         */
        majEtatIndicateurChargementProduitService(idBloc: string, etat: boolean): void;
    }
    class Indicateur {
        /**
         * L'id du bloc associé à la directive métier
         */
        idBloc: string;
        /**
         * Vrai : la directive est initialisée. Faux : Elle n'est pas encore initialisée.
         */
        etat: boolean;
        /**
         * Le libellé : nom du P/S et détenteur
         */
        libelle: string;
        constructor();
    }
    class SurveillanceChargementService implements ISurveillanceChargementService {
        private $rootScope;
        static surveillanceChargementServiceId: string;
        static $inject: string[];
        private _indicateurs;
        private _chargementTermine;
        /**
         * Ajoute un indicateur de chargement pour le bloc idBloc
         */
        ajouterIndicateurChargementProduitService: (idBloc: string, etat: boolean, libelle: string) => void;
        /**
         * Met à jour l'indicateur de chargement pour le bloc idBloc
         */
        majEtatIndicateurChargementProduitService: (idBloc: string, etat: boolean) => void;
        /**
         * Vrai si le chargement est terminé, faux sinon
         * Pour que l'initialisation soit terminée, il faut que tous les P/S aient répondu.
         */
        /**
         * Récupère la liste des indicateurs
         */
        indicateurs: Indicateur[];
        /**
         * Récupère l'état global du chargement des P/S
         */
        chargementTermine: boolean;
        constructor($rootScope: ng.IRootScopeService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IChargementFichiersComposantService {
        charger(): void;
    }
    class ChargementFichiersComposantService implements IChargementFichiersComposantService {
        private $rootScope;
        private $q;
        private $ocLazyLoad;
        private modalService;
        private serviceAgent;
        private parametrageBlocsService;
        private catalogueService;
        private messagesService;
        static chargementFichiersComposantServiceId: string;
        static $inject: string[];
        charger: () => ng.IPromise<boolean>;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $ocLazyLoad: oc.ILazyLoad, modalService: MyWay.UI.IModalService, serviceAgent: MyWay.Services.ServiceAgent, parametrageBlocsService: Services.IParametrageBlocsService, catalogueService: Services.ICatalogueService, messagesService: Services.MessagesService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IDonneesInitialesService {
        /**
         * Effectue le traitement de chargement des données utilisées par GGO : personnes, entités, catalogue, paramétrage, ...
         * et renvoie une promesse sur un objet de type "Types.DonneesInitiales" qui doit être résolu avant de passer à la route /perso
         * (page de perso de GGO)
         * @return Promesse sur les données initiales
         */
        get(): ng.IPromise<Types.DonneesInitiales>;
    }
    class DonneesInitialesService implements IDonneesInitialesService {
        private $rootScope;
        private $q;
        private $timeout;
        private constantes;
        private progressionChargement;
        private contexteGgoService;
        private contexteGgoStockageService;
        private entiteTitulaireService;
        private tiersService;
        private catalogueService;
        private parametrageBlocsService;
        private gestionDossierVenteService;
        private offreDonneesService;
        private chargementFichiersComposantService;
        private serviceAgentExtended;
        private $location;
        /**
         * Indique si le get a déjà été appelé au cours de cette session
         */
        private static _donneesChargees;
        static donneesInitialesServiceId: string;
        static $inject: string[];
        get: () => ng.IPromise<Types.DonneesInitiales>;
        donneesChargees: boolean;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions, progressionChargement: Types.ProgressionChargement, contexteGgoService: Services.ContexteGgoService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireService: Services.IEntiteTitulaireService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService, gestionDossierVenteService: Services.IGestionDossierVenteService, offreDonneesService: Services.OffreDonneesService, chargementFichiersComposantService: Services.ChargementFichiersComposantService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ISauvegardeDossierVenteService {
        /**
         *  Sauvegarde de l'offre en cours dans le dossier de vente
         */
        sauvegarder(): void;
    }
    class SauvegardeDossierVenteService implements ISauvegardeDossierVenteService {
        private $rootScope;
        private $q;
        private serviceAgentExtended;
        private constantes;
        private compositionOffreService;
        private erreurService;
        private gestionDossierVenteService;
        private contexteGgoStockageService;
        private referenceProduitPrincipalOffre;
        static sauvegardeDossierVenteServiceId: string;
        static $inject: string[];
        /**
         * Sauvegarde du dossier de vente
         */
        sauvegarder: () => void;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, gestionDossierVenteService: Services.IGestionDossierVenteService, contexteGgoStockageService: Services.IContexteGgoStockageService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class PersoControleur {
        private $scope;
        private $rootScope;
        private $location;
        private $anchorScroll;
        private $timeout;
        private $q;
        private donneesInitiales;
        private donneesInitialesService;
        private actionsService;
        private erreurService;
        private constantes;
        private validationFormulaireService;
        private contexteGgoStockageService;
        private surveillanceChargementService;
        private serviceAgentExtended;
        private sauvegardeContexteService;
        private sauvegardeDossierDeVenteService;
        private gestionDossierVenteMockService;
        private gestionDossierVenteService;
        private modalService;
        private signatairesService;
        private sauvegardeDossierVenteService;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        contexteAppel: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        desabonnerChargementTermine: () => void;
        desabonnerChargementEnEchec: () => void;
        desabonnerActiverPanneauErreur: () => void;
        desabonnerActiverBloqueur: () => void;
        desabonnerDesactiverBloqueur: () => void;
        traitementEnCours: boolean;
        erreurChargementJs: boolean;
        chargementPerso: boolean;
        afficherLesErreurs: boolean;
        dossierVente: {};
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, donneesInitialesService: Services.DonneesInitialesService, actionsService: Services.ActionsService, erreurService: Services.ErreurService, constantes: GestionGeneriqueOffres.Constantes.Definitions, validationFormulaireService: Services.ValidationFormulaireService, contexteGgoStockageService: Services.ContexteGgoStockageService, surveillanceChargementService: Services.SurveillanceChargementService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, sauvegardeContexteService: Services.ISauvegardeContexteService, sauvegardeDossierDeVenteService: Services.SauvegardeDossierDeVenteService, gestionDossierVenteMockService: myway.clients.suiviDossierVente.IGestionDossierVenteMockService, gestionDossierVenteService: Services.IGestionDossierVenteService, modalService: MyWay.UI.IModalService, signatairesService: Services.SignatairesService, sauvegardeDossierVenteService: Services.SauvegardeDossierVenteService);
        afficherListeSignataires: boolean;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Personnalisation {
        private $scope;
        private $rootScope;
        private $location;
        private $anchorScroll;
        private constantes;
        private compositionOffreService;
        private erreurService;
        private contexteGgoStockageService;
        modeAcces: string;
        modeAffichage: string;
        contexteAppel: string;
        compositionOffre: Types.CompositionOffre;
        contexte: Types.ContexteGgo;
        allerAncreTop: () => void;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        activerModeDebug: boolean;
        desabonnerModeDebug: () => void;
        codeSousFamilleActeDeGestionOffre: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, contexteGgoStockageService: Services.ContexteGgoStockageService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Personnes implements ng.IDirective {
        private $rootScope;
        private constantes;
        private tiersService;
        personnes: Types.Tiers.Personne[];
        determinerStyleAlerte: (personne: Types.Tiers.Personne) => string;
        filtrerParPersonne: () => void;
        desabonnerTopControle: () => void;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions, tiersService: Services.TiersService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IDonneesMiseEnGestionService {
        /**
         *  Renvoie les données de mise en gestion de tous les composants P/S
         */
        getDonneesMiseEnGestion(): Types.DonneesMiseEnGestion[];
        /**
         * Remet à zéro la liste des données de mise en gestion
         */
        raz(): void;
        /**
         * Ajoute une donnée de mise en gestion à la liste.
         */
        ajouterDonneeMiseEnGestion(donnee: Types.DonneesMiseEnGestion): void;
        /**
         * Recherche dans les données de mise en gestion une propriété de nom "cle", et en renvoie la valeur. Undifined si la clé n'est pas trouvée.
         */
        rechercherOccurenceCle(cle: string): any;
    }
    class DonneesMiseEnGestionService implements IDonneesMiseEnGestionService {
        private constantes;
        static donneesMiseEnGestionServiceId: string;
        static $inject: string[];
        private static listeDonneesMiseEnGestion;
        /**
         *    Renvoie les données de mise en gestion de tous les composants P/S
         */
        getDonneesMiseEnGestion: () => Types.DonneesMiseEnGestion[];
        /**
         * Remet à zéro la liste des données de mise en gestion
         */
        raz: () => void;
        /**
         * Ajoute une donnée de mise en gestion à la liste.
         */
        ajouterDonneeMiseEnGestion: (donneeMiseEnGestion: Types.DonneesMiseEnGestion) => void;
        /**
         * Recherche dans les données de mise en gestion une propriété de nom "cle", et renvoie la valeur de la première occurence trouvée. Undefined si la clé n'est pas trouvée.
         *
         */
        rechercherOccurenceCle: (cle: string) => any;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "offre\enveloppeOffre".
     */
    interface IEnveloppeOffreService {
        sendPostRequest(enveloppeOffre: Types.IEnveloppeOffre): ng.IPromise<Types.IEnveloppeOffreReponse>;
        /**
         * CodeAction="REF" : Mise en référence d'une offre dans le cas d'un avenant
         * CodeAction="MAJ" : Mise à jour d'une offre
         */
        sendPutRequest(enveloppeOffre: Types.IEnveloppeOffre, codeAction: IEnveloppeOffrePutQuery): ng.IPromise<Types.IEnveloppeOffreReponse>;
        getEnveloppeOffre(): Types.IEnveloppeOffreReponse;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "offre\enveloppeOffre"
     * avec le verbe d'action PUT.
     */
    interface IEnveloppeOffrePutQuery {
        codeAction: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "offre\enveloppeOffre".
     */
    class EnveloppeOffreAjaxImplService implements IEnveloppeOffreService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(enveloppeOffre: Types.IEnveloppeOffre): ng.IPromise<Types.IEnveloppeOffreReponse>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param [enveloppeOffre] Objet contenant les champs permettant d'effectuer l'appel
         * @param [codeAction] Objet contenant le codeAction "MAJ" ou "REF" passé en query
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(enveloppeOffre: Types.IEnveloppeOffre, codeAction: IEnveloppeOffrePutQuery): ng.IPromise<Types.IEnveloppeOffreReponse>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet EnveloppeOffreReponse
         */
        getEnveloppeOffre(): Types.EnveloppeOffreReponse;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    class EnveloppeOffreService {
        static enveloppeOffreServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarification/tarificationOffrePrelevement".
     */
    interface ITarificationOffrePrelevementService {
        sendGetRequest(data: ITarificationGetInformationDossierPrelevementQuery): ng.IPromise<Types.IInformationDossierPrelevement>;
        sendPostRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        sendPutRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        getInformationDossierPrelevement(): Types.InformationDossierPrelevement;
        compteSupport: MyWay.Model.Contrat;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tarification/tarificationOffrePrelevement"
     * avec le verbe d'action GET.
     */
    interface ITarificationGetInformationDossierPrelevementQuery {
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitServiceOffre: number;
        dateApplication: string;
        codeActeGestion: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification/tarificationOffrePrelevement".
     */
    class TarificationOffrePrelevementAjaxImplService implements ITarificationOffrePrelevementService {
        private serviceAgent;
        private qService;
        private static _instance;
        compteSupport: MyWay.Model.Contrat;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITarificationGetInformationDossierPrelevementQuery): ng.IPromise<Types.IInformationDossierPrelevement>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet InformationDossierPrelevement
         */
        getInformationDossierPrelevement(): Types.InformationDossierPrelevement;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification/tarificationOffrePrelevement".
     */
    class TarificationOffrePrelevementMockImplService implements ITarificationOffrePrelevementService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        compteSupport: MyWay.Model.Contrat;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITarificationGetInformationDossierPrelevementQuery): ng.IPromise<Types.IInformationDossierPrelevement>;
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet InformationDossierPrelevement
         */
        getInformationDossierPrelevement(): Types.InformationDossierPrelevement;
    }
    class TarificationOffrePrelevementService {
        static tarificationOffrePrelevementServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IForcageProduitsService {
        /**
         *  Renvoie les actions à afficher
         */
        getForcages(): Types.ForcageSuiteControleBdf;
        /**
         * Ajoute une personne à la liste.
         */
        ajouterPersonne(personne: Types.ForcagePersonne): void;
        modifierEtatPersonne(identifiantPersonne: number, pbCommFicp: boolean, pbCommFcc: boolean, ficheFicp: boolean, ficheFcc: boolean): void;
        /**
         * Ajoute un produit à la liste.
         */
        ajouterProduit(produit: Types.ForcageProduit): void;
        /**
         * Modifie l'état de forcage d'un produit. Aucune action si le produit n'existe pas.
         */
        modifierEtatForcageProduit(produitAModifier: Types.ForcageProduit, valeurForcage: boolean): void;
        /**
         * Indique si le produit a été forcé ou pas.
         */
        estForce(produit: Types.CompositionOffreProduit): boolean;
        /**
         * Mise à jour du controle associé au produit. donnee de type Any parce que donnee est potentiellement n'importe quoi renvoyé par un service quelconque.
         * idControle correspond à l'id du controle ("BDF" ...), id correspond à l'id de la personne.
         * En pratique comme le seul controle implémenté est le controle BDF, ca devrait être une myway.comRisquesClient.Model.PersonneBDF
         */
        mettreAJourResultatControles(idControle: string, id: number, donnee: any): void;
    }
    class ForcageProduitsService implements IForcageProduitsService {
        private constantes;
        static forcageProduitsServiceId: string;
        static $inject: string[];
        private forcages;
        /**
         *  Renvoie les forcages
         */
        getForcages: () => Types.ForcageSuiteControleBdf;
        /**
         * Ajoute une personne à la liste.
         */
        ajouterPersonne: (personne: Types.ForcagePersonne) => void;
        modifierEtatPersonne: (identifiantPersonne: number, pbCommFicp: boolean, pbCommFcc: boolean, ficheFicp: boolean, ficheFcc: boolean) => void;
        /**
         * Ajoute un produit à la liste. Evite d'y mettre des doublons
         */
        ajouterProduit: (produitAInserer: Types.ForcageProduit) => void;
        /**
         * Modifie l'état de forcage d'un produit. Aucune action si le produit n'existe pas.
         */
        modifierEtatForcageProduit: (produitAModifier: Types.ForcageProduit, valeurForcage: boolean) => void;
        /**
         * Indique si le produit a été forcé ou pas.
         * @return true si le produit a été trouvé dans la liste des produits à forcer, et que son indicateur de forcage est à true.
         * Renvoie aussi true si un controle a été demandé et que le contrôle s'est bien passé, donc l'indicateur de forcage ne s'applique pas.
         * Faux sinon.
         */
        estForce: (produit: Types.CompositionOffreProduit) => boolean;
        /**
         * Fonction spécifique d'interprétation du résultat du contrôle BDF depuis
         */
        static testResultatControleBdf: (donnee: myway.comRisquesClient.Model.PersonneBDF) => boolean;
        /**
         * Mise à jour du résultat du contrôle afin que le P/S demandeur puisse éventuellement en prendre connaissance
         * (cartes pour la mise en instance par ex.)
         */
        mettreAJourResultatControles: (idControle: string, id: number, donnee: any) => void;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    class GestionEditiqueService {
        private $q;
        private serviceAgentExtended;
        private constantes;
        private contexteService;
        private contractualisationActeService;
        private tiersService;
        private contexteGgoStockageService;
        private entiteTitulaireService;
        private offreDonneesService;
        private signataireService;
        private compositionOffreService;
        static gestionEditiqueServiceId: string;
        static codeModeMiseEnGestion: string;
        static codeTypeMarcheEntreprise: string;
        contractualisationActe: any;
        private _numeroEntiteTitulaire;
        private _codeEtablissement;
        private _codeActionGestion;
        private _codeCanal;
        private _offreDonneesService;
        private titulaires;
        static $inject: string[];
        /**
         * Constructeur du service GestionEditiqueService
         *
         * @param $q {ng.IQService}
         * @param serviceAgentExtended {MyWay.Services.ServiceAgentExtended}
         * @param constantes {GestionGeneriqueOffres.Constantes.Definitions}
         * @param contexteService {Services.ContexteService}
         * @param contractualisationActeService {myway.comEditiqueNumerisation.Services.ContractualisationActeService}
         * @param tiersService {Services.TiersService}
         * @param contexteGgoStockageService {Services.ContexteGgoStockageService}
         * @param entiteTitulaireService {Services.IEntiteTitulaireService}
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.ContexteService, contractualisationActeService: myway.comContract.Services.ContractualisationActeService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireService: Services.IEntiteTitulaireService, offreDonneesService: Services.IOffreDonneesService, signataireService: Services.SignatairesService, compositionOffreService: Services.ICompositionOffreService);
        /**
         * TODO
         * @param {void}
         * @return {ng.IPromise}
         */
        verifierEligibiliteReduit(): ng.IPromise<void>;
        /**
         * TODO
         * @param {void}
         * @return {ng.IPromise}
         */
        verifierEligibiliteComplet(): ng.IPromise<void>;
        private getDonneesEligibilite();
        private getDonneesProduitsServices();
        private rechercheActeGestionSecondaire(descendant);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IControlePreRequisService {
        /**
         * Déclenche tous les prérequis déclarés dans donneesContextuelles.donneesProduit.controlesPreRequis
         * lorsqu'un produit est ajouté à la composition de l'offre
         */
        effectuerControlesPreRequisComposition: (donneesContextuelles: Types.DonneesContextuelles) => void;
        /**
         * Déclenche tous les prérequis déclarés dans donneesContextuelles.donneesProduit.controlesPreRequis
         * au moment de la mise en gestion
         */
        effectuerControlesPreRequisMiseEnGestion: (donneesContextuelles: Types.DonneesContextuelles[]) => ng.IPromise<boolean>;
    }
    class ControlePreRequisService implements IControlePreRequisService {
        private $q;
        private initialisationService;
        private constantes;
        private serviceAgent;
        private modalService;
        private serviceAgentExtended;
        private interroBDFService;
        private tiersService;
        private catalogueService;
        private forcageProduitsService;
        private gestionEditiqueService;
        private compositionOffreService;
        static controlePreRequisId: string;
        static $inject: string[];
        /**
         * Construit un tableau de personnes à controler vis a vis d'un controle principal et secondaire
         */
        private construireTableauPersonnesAControler;
        /**
         * Construit la question Contrôle BDF manuel
         */
        private construireQuestionControleBdfManuel;
        /**
         * Construit la question Contrôle BDF découvert
         */
        private construireQuestionControleBdfDecouvert;
        /**
         * Construit la question Contrôle BDF carte
         */
        private construireQuestionControleBdfCarte;
        /**
         * Construit la question Contrôle BDF Chèque
         */
        private construireQuestionControleBdfCheque;
        /**
         * Effectue le contrôle des pré-requis sur l'écran composition, à la mise au panier des produits
         */
        effectuerControlesPreRequisComposition: (donneesContextuelles: Types.DonneesContextuelles) => void;
        /**
         * Effectue le contrôle des pré-requis sur l'écran récap, lors de la mise en gestion des produits
         * @param [listeDonneesContextuelles] Correspond à une collecte des objets DonneesContextuelles associés aux produits services mis en gestion
         * @return Rien
         */
        effectuerControlesPreRequisMiseEnGestion: (listeDonneesContextuelles: Types.DonneesContextuelles[]) => ng.IPromise<boolean>;
        constructor($q: ng.IQService, initialisationService: Services.InitialisationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgent: MyWay.Services.ServiceAgent, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, interroBDFService: myway.comRisquesClient.InterroBDFService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService, forcageProduitsService: Services.ForcageProduitsService, gestionEditiqueService: Services.GestionEditiqueService, compositionOffreService: Services.CompositionOffreService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IMiseEnGestionCommunService {
        /**
         *  Effectue la mise en gestion des produits service en les appelant en fonction de leur niveau de priorité
         *
         *
         */
        appelerMiseEnGestionProduitsServices(phase: number): ng.IPromise<boolean>;
    }
    class MiseEnGestionCommunService implements IMiseEnGestionCommunService {
        private $q;
        private $location;
        private $anchorScroll;
        private constantes;
        private compositionOffreService;
        private donneesMiseEnGestionService;
        private messagesService;
        private erreurService;
        private activerErreurGgo;
        private contexteGgoStockageService;
        private catalogueService;
        private offreDonneesService;
        private forcageProduitsService;
        private gestionEditiqueService;
        static miseEnGestionCommunServiceId: string;
        static $inject: string[];
        appelerMiseEnGestionProduitsServices: (phase: number) => ng.IPromise<boolean>;
        constructor($q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, offreDonneesService: Services.OffreDonneesService, forcageProduitsService: Services.ForcageProduitsService, gestionEditiqueService: Services.GestionEditiqueService);
    }
}


declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarification/tarificationOffrePromotion".
     */
    interface ITarificationOffrePromotionService {
        sendPutRequest(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification/tarificationOffrePromotion".
     */
    class TarificationOffrePromotionAjaxImplService implements ITarificationOffrePromotionService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification/tarificationOffrePromotion".
     */
    class TarificationOffrePromotionMockImplService implements ITarificationOffrePromotionService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
    }
    class TarificationOffrePromotionService {
        static tarificationOffrePromotionServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IMiseEnGestionPostProducteurService {
        /**
         *  Effectue la mise en gestion :
         *
         *   Ce qui suit est partiellement obsolète depuis l'ajout des phases pré et post producteur.
         *
         *   - Appel de la création de l'enveloppe, ressource offre-v1/enveloppeOffre POST (enveloppe-offre-service) -- fait CHBR --
         *   - Appel de la liste des documents à produire (renvoie d'id IDN) (librairie contractualisationActe en mode complet) -- à faire CERI --
         *   - Appel des prérequis BdF / Bâle 2 en mode complet (édition / archivage) -- en cours CHBR --
         *   - Appel de chacun des P/S selon leur ordre de priorité -- fait CHBR --
         *   - Appel des producteurs (appel-producteur-service) -- à faire --
         *        Impulse
         *          Appel de Impulse conditionné par la présence de la valeur "BPCEA_IMPULSE" dans IdProducteur du contexte.
         *          Appel de Impulse via LISA, 1 appel par personne et par groupe de 3 P/S (lié à la structure de la querystring Impulse)
         *        Izivente
         *          Appel de Izivente via LISA, réserve
         *
         *   - Appel de la création du dossier de prélèvement, ressource tarification-v1/tarificationOffrePrelevement
         *     (tarification-offre-prelevement-service) -- fait ADIAZ --
         *   - Appel du rattachement du code promo manuelle à l'offre, ressource tarification-v1/tarificationOffrePromotion
         *     (tarification-offre-promotion-service) -- A confirmer --  -- à faire --
         *   - Appel de la levée de l'instance, ressource offre-v1/enveloppeOffre PUT (enveloppe-offre-service) -- fait ADIAZ --
         *   - Rattachement des P/S externes, ressource offre-v1/miseEnGestionPSExterne (offre-mise-en-gestion-ps-externe-service)-- à faire --
         *   - Avantage famille, ressource offre-v1/avantageFamilleOffre POST -- fait ADIAZ --
         *
         */
        /**
         * Mise en gestion post-producteur
         * Retour promise : true, on peut continuer vers l'éditique. False, on ne peut pas.
         */
        mettreOffreEnGestionPostProducteur(): ng.IPromise<boolean>;
    }
    class MiseEnGestionPostProducteurService implements IMiseEnGestionPostProducteurService {
        private $rootScope;
        private $q;
        private $location;
        private $anchorScroll;
        private $timeout;
        private modalService;
        private serviceAgentExtended;
        private constantes;
        private compositionOffreService;
        private donneesMiseEnGestionService;
        private messagesService;
        private erreurService;
        private activerErreurGgo;
        private contexteGgoStockageService;
        private enveloppeOffreService;
        private catalogueService;
        private offreDonneesService;
        private avantageFamilleOffreService;
        private tarificationOffrePrelevementService;
        private tarificationOffrePromotionService;
        private tarificationOffreService;
        private actionsService;
        private tiersService;
        private entiteTitulaireService;
        private controlePreRequisService;
        private forcageProduitsService;
        private signataireService;
        private miseEnGestionCommunService;
        private gestionEditiqueService;
        private referenceProduitPrincipalOffre;
        private codeTypeProduitServicePrincipalOffre;
        static miseEnGestionPostProducteurServiceId: string;
        static $inject: string[];
        mettreOffreEnGestion: () => void;
        mettreOffreEnGestionPostProducteur: () => ng.IPromise<boolean>;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, contexteGgoStockageService: Services.ContexteGgoStockageService, enveloppeOffreService: Services.IEnveloppeOffreService, catalogueService: Services.ICatalogueService, offreDonneesService: Services.OffreDonneesService, avantageFamilleOffreService: Services.IAvantageFamilleOffreService, tarificationOffrePrelevementService: Services.ITarificationOffrePrelevementService, tarificationOffrePromotionService: Services.ITarificationOffrePromotionService, tarificationOffreService: Services.ITarificationOffreService, actionsService: Services.ActionsService, tiersService: Services.TiersService, entiteTitulaireService: Services.IEntiteTitulaireService, controlePreRequisService: Services.ControlePreRequisService, forcageProduitsService: Services.ForcageProduitsService, signataireService: Services.SignatairesService, miseEnGestionCommunService: Services.MiseEnGestionCommunService, gestionEditiqueService: Services.GestionEditiqueService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IMiseEnGestionPreProducteurService {
        /**
         *  Effectue la mise en gestion :
         *
         *   Ce qui suit est partiellement obsolète depuis l'ajout des phases pré et post producteur.
         *
         *   - Appel de la création de l'enveloppe, ressource offre-v1/enveloppeOffre POST (enveloppe-offre-service) -- fait CHBR --
         *   - Appel de la liste des documents à produire (renvoie d'id IDN) (librairie contractualisationActe en mode complet) -- à faire CERI --
         *   - Appel des prérequis BdF / Bâle 2 en mode complet (édition / archivage) -- en cours CHBR --
         *   - Appel de chacun des P/S selon leur ordre de priorité -- fait CHBR --
         *   - Appel des producteurs (appel-producteur-service) -- à faire --
         *        Impulse
         *          Appel de Impulse conditionné par la présence de la valeur "BPCEA_IMPULSE" dans IdProducteur du contexte.
         *          Appel de Impulse via LISA, 1 appel par personne et par groupe de 3 P/S (lié à la structure de la querystring Impulse)
         *        Izivente
         *          Appel de Izivente via LISA, réserve
         *
         *   - Appel de la création du dossier de prélèvement, ressource tarification-v1/tarificationOffrePrelevement
         *     (tarification-offre-prelevement-service) -- en cours ADIAZ --
         *   - Appel du rattachement du code promo manuelle à l'offre, ressource tarification-v1/tarificationOffrePromotion
         *     (tarification-offre-promotion-service) -- A confirmer --  -- à faire --
         *   - Appel de la levée de l'instance, ressource offre-v1/enveloppeOffre PUT (enveloppe-offre-service) -- fait ADIAZ --
         *   - Rattachement des P/S externes, ressource offre-v1/miseEnGestionPSExterne (offre-mise-en-gestion-ps-externe-service)-- à faire --
         *   - Avantage famille, ressource offre-v1/avantageFamilleOffre POST -- fait ADIAZ --
         *
         */
        /**
         * Mise en gestion pré-producteur
         */
        mettreOffreEnGestionPreProducteur(): void;
    }
    class MiseEnGestionPreProducteurService implements IMiseEnGestionPreProducteurService {
        private $rootScope;
        private $q;
        private modalService;
        private serviceAgentExtended;
        private constantes;
        private compositionOffreService;
        private donneesMiseEnGestionService;
        private messagesService;
        private erreurService;
        private activerErreurGgo;
        private contexteGgoStockageService;
        private enveloppeOffreService;
        private catalogueService;
        private offreDonneesService;
        private actionsService;
        private tiersService;
        private entiteTitulaireService;
        private controlePreRequisService;
        private forcageProduitsService;
        private signataireService;
        private miseEnGestionCommunService;
        private gestionEditiqueService;
        private sauvegardeContexteService;
        static miseEnGestionPreProducteurServiceId: string;
        static $inject: string[];
        mettreOffreEnGestionPreProducteur: () => void;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, contexteGgoStockageService: Services.ContexteGgoStockageService, enveloppeOffreService: Services.IEnveloppeOffreService, catalogueService: Services.ICatalogueService, offreDonneesService: Services.OffreDonneesService, actionsService: Services.ActionsService, tiersService: Services.TiersService, entiteTitulaireService: Services.IEntiteTitulaireService, controlePreRequisService: Services.ControlePreRequisService, forcageProduitsService: Services.ForcageProduitsService, signataireService: Services.SignatairesService, miseEnGestionCommunService: Services.MiseEnGestionCommunService, gestionEditiqueService: Services.GestionEditiqueService, sauvegardeContexteService: Services.ISauvegardeContexteService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class RecapControleur {
        private $scope;
        private $rootScope;
        private $timeout;
        private $location;
        private $anchorScroll;
        private $q;
        private donneesInitiales;
        private actionsService;
        private constantes;
        private miseEnGestionPreProducteurService;
        private serviceAgentExtended;
        private gestionEditiqueService;
        private sauvegardeContexteService;
        private modalService;
        private donneesMiseEnGestionService;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        traitementEnCours: boolean;
        chargementRecap: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, constantes: GestionGeneriqueOffres.Constantes.Definitions, miseEnGestionPreProducteurService: Services.MiseEnGestionPreProducteurService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionEditiqueService: Services.GestionEditiqueService, sauvegardeContexteService: Services.ISauvegardeContexteService, modalService: MyWay.UI.IModalService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService);
        onNotif: (notification: MyWay.Services.NotificationMessage) => void;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarification\tarificationOffreSynthese".
     */
    interface ITarificationOffreSyntheseService {
        sendPostRequest(produitService: Types.IProduitServiceOffre): ng.IPromise<Types.ITarificationOffreSynthese>;
        getTarificationOffreSynthese(): Types.TarificationOffreSynthese;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification\tarificationOffreSynthese".
     */
    class TarificationOffreSyntheseAjaxImplService implements ITarificationOffreSyntheseService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(produitService: Types.IProduitServiceOffre): ng.IPromise<Types.ITarificationOffreSynthese>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet TarificationOffreSynthese
         */
        getTarificationOffreSynthese(): Types.TarificationOffreSynthese;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification\tarificationOffreSynthese".
     */
    class TarificationOffreSyntheseMockImplService implements ITarificationOffreSyntheseService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(produitService: Types.IProduitServiceOffre): ng.IPromise<Types.ITarificationOffreSynthese>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet TarificationOffreSynthese
         */
        getTarificationOffreSynthese(): Types.TarificationOffreSynthese;
    }
    class TarificationOffreSyntheseService {
        static tarificationOffreSyntheseServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Recapitulatif {
        private $scope;
        private $rootScope;
        private $location;
        private constantes;
        private compositionOffreService;
        private erreurService;
        private entiteTitulaireService;
        private tarificationOffreSyntheseService;
        private tarificationOffrePrelevementService;
        private contexteGgoStockageService;
        private tiersService;
        private catalogueService;
        modeAcces: string;
        modeAffichage: string;
        compatibiliteTarification: boolean;
        compositionOffre: Types.CompositionOffre;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        codeSousFamilleActeDeGestionOffre: string;
        activerModeDebug: boolean;
        desabonnerModeDebug: () => void;
        codeActeGestion: string;
        libelleOffreBouquet: string;
        listeCompositionEntiteTitulaire: Types.CompositionEntiteTitulaire[];
        listePersonnes: Types.Tiers.Personne[];
        afficherPersonne: boolean;
        static $inject: string[];
        afficherRecapitulatifTarification(): string;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, entiteTitulaireService: Services.IEntiteTitulaireService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, tarificationOffrePrelevementService: Services.ITarificationOffrePrelevementService, contexteGgoStockageService: Services.ContexteGgoStockageService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IRecapitulatifSection extends ng.IScope {
        codeSection: string;
        compositionOffre: Types.CompositionOffre;
        titre: string;
        modeAcces: string;
        modeAffichage: string;
    }
    class RecapitulatifSection {
        private $scope;
        private $rootScope;
        private $location;
        private constantes;
        private compositionOffreService;
        private erreurService;
        private entiteTitulaireService;
        private tarificationOffreSyntheseService;
        private tarificationOffrePrelevementService;
        private contexteGgoStockageService;
        private catalogueService;
        private referenceProduitPrincipalOffre;
        modeAcces: string;
        modeAffichage: string;
        compatibiliteTarification: boolean;
        compositionOffre: Types.CompositionOffre;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        codeSousFamilleActeDeGestionOffre: string;
        activerModeDebug: boolean;
        desabonnerModeDebug: () => void;
        codeActeGestion: string;
        codeSection: string;
        titre: string;
        afficherSection: boolean;
        referencesProduits: Types.ReferenceProduit[];
        numeroDeCompte: string;
        constantesAffichage: GestionGeneriqueOffres.Constantes.Definitions;
        static $inject: string[];
        constructor($scope: IRecapitulatifSection, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, entiteTitulaireService: Services.IEntiteTitulaireService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, tarificationOffrePrelevementService: Services.ITarificationOffrePrelevementService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
        /**
         * Cette fonction permet de ne pas afficher l'entête de la personne dans la composition si l'entité est en mode simple
         * (càd que l'entité ne contient qu'une personne, donc inutile de redonder la personne et l'entité dans la compo).
         * cette fonction tient compte également de la présence ou non de produit pour l'entité ou la personne
         */
        afficherPersonneDeLEntite(compositionOffreEntitePersonne: Types.CompositionOffreEntitePersonne): boolean;
        afficherProduit(produit: Types.CompositionOffreProduit): boolean;
    }
}

declare module GestionGeneriqueOffres.Composition {
    /**
     * Classe du controleur Recapitulatif Signataires
     * @class RecapitulatifSignataires
     */
    class RecapitulatifSignataires {
        private gestionEditiqueService;
        private signatairesService;
        private actionsService;
        listeSignataires: myway.comContract.modeles.ISignataire[];
        afficherSignataires: boolean;
        eligibiliteSignatureElectronique: boolean;
        private libelleNonEligibilite;
        static $inject: string[];
        constructor(gestionEditiqueService: Services.GestionEditiqueService, signatairesService: Services.ISignatairesService, actionsService: Services.ActionsService);
        terminerTraitementEnErreur(message: string): void;
        getListeSignataires(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class RecapitulatifTagsMiseEnGestion {
        private constantes;
        codeMiseEnGestion: string;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Composition {
    /**
     * Classe du controleur Signataires
     * @class Signataires
     */
    class Signataires {
        private $rootScope;
        private constantes;
        private contexteGgoStockageService;
        private signatairesService;
        private compositionOffreService;
        private tarificationOffrePrelevementService;
        private catalogueService;
        private codeTypeProduitServicePrincipalOffre;
        donnees: myway.comContract.modeles.ISignataireInput;
        private _listSignataire;
        private _messageErreur;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService, signatairesService: Services.SignatairesService, compositionOffreService: Services.CompositionOffreService, tarificationOffrePrelevementService: Services.ITarificationOffrePrelevementService, catalogueService: Services.ICatalogueService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
        /**
         * Liste des signataires sélectionnés
         * @return tableau d'Object ISignataireDirective
         */
        listSignataire: myway.comContract.modeles.ISignataireComplet[];
        /**
         * Message d'erreur renseigné si :
         * - le champ précision signataire n'est pas complété
         * - la règle de gestion n'est pas respectée
         * @return string messageErreur
         */
        messageErreur: string;
        afficherListeSignataires: boolean;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Spinner implements ng.IDirective {
        afficher: boolean;
        static $inject: any[];
        constructor();
    }
}

declare module GestionGeneriqueOffres.Composition {
    class SurveillanceChargement {
        private $scope;
        private $rootScope;
        private $timeout;
        private modalService;
        private serviceAgentExtended;
        private contexteGgoStockageService;
        private surveillanceChargementService;
        contexteAppel: string;
        afficherMessageChargementOk: boolean;
        nePasAfficher: boolean;
        desabonnerErreurFatale: () => void;
        desabonnerChargementTermine: () => void;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteGgoStockageService: Services.ContexteGgoStockageService, surveillanceChargementService: Services.SurveillanceChargementService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface ITarificationControleur {
    }
    /**
     * Classe du controleur Tarification
     * @class Tarification
     */
    class TarificationControleur implements ITarificationControleur {
        private $rootScope;
        private tiersService;
        private entiteTitulaireService;
        private modalService;
        private tarificationOffreDetailService;
        private serviceAgent;
        private tarificationOffrePrelevementService;
        private tarificationOffreService;
        private contexteGgoStockageService;
        private constantes;
        private $q;
        pictoData: any;
        titre: string;
        habilitationPersonnalisation: boolean;
        private _ouverturePanneau;
        private _numeroEntiteTitulaire;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _codeProduitService;
        private _numeroOffreSouscrite;
        private _codeSousFamilleActeGestion;
        private _compteSelectionne;
        private _messageErreur;
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du controleur Tarification
         *
         * @param $rootScope {ng.IRootScopeService}
         * @param tiersService {Services.TiersService}
         * @param entiteTitulaireService {Services.IEntiteTitulaireService}
         * @param modalService {Services.IModalService}
         * @param tarificationOffreDetailService {Services.ITarificationOffreDetailService}
         * @param serviceAgent {MyWay.Services.ServiceAgent}
         * @param tarificationOffrePrelevementService {Services.ITarificationOffrePrelevementService}
         * @param tarificationOffreService {Services.ITarificationOffreService}
         * @returns {void}
         */
        constructor($rootScope: ng.IRootScopeService, tiersService: Services.TiersService, entiteTitulaireService: Services.IEntiteTitulaireService, modalService: MyWay.UI.IModalService, tarificationOffreDetailService: Services.ITarificationOffreDetailService, serviceAgent: MyWay.Services.ServiceAgent, tarificationOffrePrelevementService: Services.ITarificationOffrePrelevementService, tarificationOffreService: Services.ITarificationOffreService, contexteGgoStockageService: Services.ContexteGgoStockageService, constantes: GestionGeneriqueOffres.Constantes.Definitions, $q: ng.IQService);
        /**
         * @ngdoc getter
         * @name estOuvert
         * @description
         *
         * @returns this._ouverturePanneau {Boolean}
         */
        /**
         * @ngdoc setter
         * @name estOuvert
         * @description
         *
         * @param ouverture {Boolean}
         * @returns {void}
         */
        estOuvert: boolean;
        /**
         * @ngdoc method
         * @name verificationHabilitations
         * @description
         *
         *
         * @returns {void}
         */
        verificationHabilitations(): void;
        terminerTraitementEnErreur(message: string): void;
        compatibiliteTarification: boolean;
        activationBoutonRafraichir: boolean;
        getTarificationOffreSynthese(): void;
        animationChargementTarification: boolean;
        activationBoutonDetails: boolean;
        activationBoutonPerso: boolean;
        affichageDetailAssurances: boolean;
        tarificationOffreSynthese: any;
        getTarificationDetailsRequete(): {
            "listeTarificationPSDetail": {
                "typeLigneEcran": string;
                "prixMensuelStandard": number;
                "tauxReduction": number;
                "prixFacture": number;
                "libelleRemise": string;
                "libelleProduitService": string;
            }[];
        };
        /**
         * Récupération d'informations concernant le dossier de prélèvement
         */
        getInformationDossierPrelevement(): ng.IPromise<Types.IInformationDossierPrelevement>;
        getTarificationDetailsPopin(): void;
        getTarificationPersonnalisationPopin(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface ITarificationModaleScope extends ng.IScope {
        modalDatas: any;
        ajoutCodePromo: any;
    }
    interface ITarificationOffreAvecPromotions {
        socleComplementaire: boolean;
        promoS: Types.IPromotionProduitServiceBase;
        promoC: Types.IPromotionProduitServiceComplementaire[];
    }
    class TarificationModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        private constantes;
        private tarificationOffreService;
        private personnalisationPromotionService;
        private $q;
        private contexteGgoStockageService;
        private entiteTitulaireService;
        private _numeroEntiteTitulaire;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _codeProduitService;
        private _numeroOffreSouscrite;
        modalDatas: any;
        ajoutCodePromo: any;
        private _periodicitePromotion;
        static controllerId: string;
        static $inject: string[];
        constructor($scope: ITarificationModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, constantes: GestionGeneriqueOffres.Constantes.Definitions, tarificationOffreService: Services.ITarificationOffreService, personnalisationPromotionService: Services.IPersonnalisationPromotionService, $q: ng.IQService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireService: Services.IEntiteTitulaireService);
        codeSousFamilleActeGestion: string;
        activationBoutonValider: boolean;
        activationBoutonCalculer: boolean;
        promotionsApresBestOf: Types.IPromotionAppliquee[];
        promotionsAppliquees: any[];
        promotionsCaisse: Types.CodePromotionCaisse[];
        tarificationOffreSynthese: any;
        valider(): void;
        retour(): void;
        terminerTraitementEnErreur(message: string): void;
        calculerBestOf(): ng.IPromise<{}>;
        recalculerTarificationApresBestOf(): void;
        ajouterCodePromoCaisse(): void;
        supprimerCodePromo(position: number): void;
        ajouterCodePromoManuelle(): void;
    }
}


declare module GestionGeneriqueOffres.Composition {
    /**
     * Classe du controleur Titre Principal
     * @class TitrePrincipal
     */
    class TitrePrincipal {
        private $scope;
        private $location;
        private $anchorScroll;
        private $timeout;
        private contexteGgoStockageService;
        private constantes;
        private catalogueService;
        private erreurService;
        private signatairesService;
        private tiersService;
        private referenceProduitPrincipalOffre;
        titrePrincipal: string;
        allerA: (ancre: string) => void;
        afficherSignataires(): void;
        activerPanneauErreur(): void;
        static $inject: string[];
        affichageModeRecap: boolean;
        affichageModePerso: boolean;
        constructor($scope: ng.IScope, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, contexteGgoStockageService: Services.ContexteGgoStockageService, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, erreurService: Services.ErreurService, signatairesService: Services.SignatairesService, tiersService: Services.ITiersService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
        numeroDeCompte: string;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class TuileCatalogue {
        private $rootScope;
        private constantes;
        static $inject: string[];
        /**
         *
         */
        identifiantProduitService: number;
        codeNatureProduitServiceAssocie: string;
        libelleProduitService: string;
        infoTuile: string;
        disabled: boolean;
        cochee: boolean;
        visible: boolean;
        obligatoire: boolean;
        /**
         * Vrai si la tuile correspond à un assemblage
         */
        disableSiNonAssemblage: () => boolean;
        /**
         * Fonction permettant de déterminer la classe CSS à appliquer à la tuile en fonction du codeNatureProduitServiceAssocie et de l'état de la tuile (active/inactive)
         */
        determinerClasseCssPourProduitService: (codeNatureProduitServiceAssocie: string, disabled: boolean) => string;
        tuileCatalogueAction: () => void;
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Composition {
}

/**
 * Filtres utilisés dans la barre d'action pour filtrer les boutons du côté droit ou gauche
 */
declare module GestionGeneriqueOffres.Filtres {
    class FiltrerBoutonsGauche {
        static filtrerBoutonsGaucheId: string;
        static filtrerBoutonsGauche(): (items: Types.Action[]) => Types.Action[];
    }
    class FiltrerBoutonsDroit {
        static filtrerBoutonsDroitId: string;
        static filtrerBoutonsDroit(): (items: Types.Action[]) => Types.Action[];
    }
}

declare module GestionGeneriqueOffres.Filtres {
    class Newline {
        static newlineId: string;
        static newline(): (data: string) => string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Classe de chargement des mocks
     */
    class MockLoaderService {
        private httpService;
        private qService;
        private serviceAgent;
        static BASE_URL: string;
        static FILE_TYPE_JSON: string;
        static $inject: string[];
        constructor(httpService: ng.IHttpService, qService: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de restitution des données d'un fichier json à partir du nom du fichier.
         * Les fichiers sont à placer dans le dossier "assets/mocks/".
         * @author S0076105
         * @param fileNane  Nom du fichier json à récupérer
         * @param <T> Type représentant les données du mock
         * @return Une promesse ayant un type T paramétrable en fonction des données du mock
         */
        getDataByFileName<T>(fileName: string): ng.IPromise<T>;
        /**
         * Méthode de construction de l'URL du mock
         * @author S0076105
         * @param fileNane  Nom du fichier json à récupérer
         * @return L'url du web service
         */
        private url(fileNane);
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "offre/miseEnGestionPSExterne".
     */
    interface IMiseEnGestionPSExterneService {
        sendPostRequest(miseEnGestion: Types.IMiseEnGestionPSExterneDemande): ng.IPromise<Types.IMiseEnGestionPSExterne>;
        getMiseEnGestionPSExterne(): Types.MiseEnGestionPSExterne;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "offre/miseEnGestionPSExterne".
     */
    class MiseEnGestionPSExterneAjaxImplService implements IMiseEnGestionPSExterneService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(miseEnGestion: Types.IMiseEnGestionPSExterneDemande): ng.IPromise<Types.IMiseEnGestionPSExterne>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet MiseEnGestionPSExterne
         */
        getMiseEnGestionPSExterne(): Types.MiseEnGestionPSExterne;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "offre/miseEnGestionPSExterne".
     */
    class MiseEnGestionPSExterneMockImplService implements IMiseEnGestionPSExterneService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(miseEnGestion: Types.IMiseEnGestionPSExterneDemande): ng.IPromise<Types.IMiseEnGestionPSExterne>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet MiseEnGestionPSExterne
         */
        getMiseEnGestionPSExterne(): Types.MiseEnGestionPSExterne;
    }
    class MiseEnGestionPSExterneService {
        static miseEnGestionPSExterneServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarificationparametre/personnalisationPromotion".
     */
    interface IPersonnalisationPromotionService {
        sendPutRequest(personnalisationPromotion: Types.IPersonnalisationPromotionBestOf): ng.IPromise<Types.IPersonnalisationPromotionBestOf>;
        getPersonnalisationPromotion(): Types.PersonnalisationPromotionBestOf;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarificationparametre/personnalisationPromotion".
     */
    class PersonnalisationPromotionAjaxImplService implements IPersonnalisationPromotionService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(personnalisationPromotion: Types.IPersonnalisationPromotionBestOf): ng.IPromise<Types.IPersonnalisationPromotionBestOf>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPutRequest
         * @return Objet PersonnalisationPromotionBestOf
         */
        getPersonnalisationPromotion(): Types.PersonnalisationPromotionBestOf;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarificationparametre/personnalisationPromotion".
     */
    class PersonnalisationPromotionMockImplService implements IPersonnalisationPromotionService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.IPersonnalisationPromotionBestOf): ng.IPromise<Types.IPersonnalisationPromotionBestOf>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPutRequest
         * @return Objet PersonnalisationPromotionBestOf
         */
        getPersonnalisationPromotion(): Types.PersonnalisationPromotionBestOf;
    }
    class PersonnalisationPromotionService {
        static personnalisationPromotionServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarificationparametre\promotionCaisse"
     */
    interface IPromotionCaisseService {
        sendGetRequest(data: ITarificationGetPromotionCaisseQuery): ng.IPromise<Types.IPromotionCaisse>;
        getPromotionCaisse(): Types.PromotionCaisse;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tarificationparametre\promotionCaisse"
     * avec le verbe d'action GET.
     */
    interface ITarificationGetPromotionCaisseQuery {
        codeEtablissement: string;
        referenceExterneAgent?: number;
        identifiantProduitServiceOffre: number;
        dateApplication: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarificationparametre\promotionCaisse".
     */
    class PromotionCaisseAjaxImplService implements IPromotionCaisseService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITarificationGetPromotionCaisseQuery): ng.IPromise<Types.IPromotionCaisse>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet PromotionCaisse
         */
        getPromotionCaisse(): Types.PromotionCaisse;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarificationparametre/promotionCaisse".
     */
    class PromotionCaisseMockImplService implements IPromotionCaisseService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITarificationGetPromotionCaisseQuery): ng.IPromise<Types.IPromotionCaisse>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet PromotionCaisse
         */
        getPromotionCaisse(): Types.PromotionCaisse;
    }
    class PromotionCaisseService {
        static promotionCaisseServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarificationparametre\promotionManuelle"
     */
    interface IPromotionManuelleService {
        sendGetRequest(data: ITarificationGetPromotionManuelleQuery): ng.IPromise<Types.IPromotionManuelle>;
        getPromotionManuelle(): Types.PromotionManuelle;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tarificationparametre\promotionManuelle"
     * avec le verbe d'action GET.
     */
    interface ITarificationGetPromotionManuelleQuery {
        referenceExterneAgent: number;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        dateApplication: string;
        /**
         * Mode de relation des personnes composant une entité titulaire :
         * 1 mode simple
         * 2 mode joint entre époux
         * 3 mode joint entre tiers
         * 4 mode indivision
         */
        modeCompositionEntiteTitulaire?: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarificationparametre\promotionManuelle".
     */
    class PromotionManuelleAjaxImplService implements IPromotionManuelleService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITarificationGetPromotionManuelleQuery): ng.IPromise<Types.IPromotionManuelle>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet PromotionManuelle
         */
        getPromotionManuelle(): Types.PromotionManuelle;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarificationparametre/promotionManuelle".
     */
    class PromotionManuelleMockImplService implements IPromotionManuelleService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITarificationGetPromotionManuelleQuery): ng.IPromise<Types.IPromotionManuelle>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet PromotionManuelle
         */
        getPromotionManuelle(): Types.PromotionManuelle;
    }
    class PromotionManuelleService {
        static promotionManuelleServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarificationparametre/promotionSystematique".
     */
    interface IPromotionSystematiqueService {
        sendPostRequest(personnalisationPromotion: Types.IPersonnalisationPromotion): ng.IPromise<Types.IPromotionSystematique>;
        getPromotionSystematique(): Types.PromotionSystematique;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarificationparametre/promotionSystematique".
     */
    class PromotionSystematiqueAjaxImplService implements IPromotionSystematiqueService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(personnalisationPromotion: Types.IPersonnalisationPromotion): ng.IPromise<Types.IPromotionSystematique>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet PromotionSystematique
         */
        getPromotionSystematique(): Types.PromotionSystematique;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarificationparametre/promotionSystematique".
     */
    class PromotionSystematiqueMockImplService implements IPromotionSystematiqueService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(personnalisationPromotion: Types.IPersonnalisationPromotion): ng.IPromise<Types.IPromotionSystematique>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet PromotionSystematique
         */
        getPromotionSystematique(): Types.PromotionSystematique;
    }
    class PromotionSystematiqueService {
        static promotionSystematiqueServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IRechargeDossierDeVenteService {
        /**
         * Permet de recharger le dossier de vente depuis le local storage
         */
        getDossierDeVente(): Types.DossierDeVente.DonneesGeneriques[];
    }
    class RechargeDossierDeVenteService implements IRechargeDossierDeVenteService {
        private $rootScope;
        private $q;
        private $location;
        private $anchorScroll;
        private $timeout;
        private serviceAgentExtended;
        private constantes;
        private catalogueService;
        private compositionOffreService;
        private actionsService;
        private erreurService;
        private signatairesService;
        private modalService;
        private contexteGgoStockageService;
        static rechargeDossierDeVenteServiceId: string;
        static $inject: string[];
        getDossierDeVente: () => Types.DossierDeVente.DonneesGeneriques[];
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService, actionsService: Services.ActionsService, erreurService: Services.ErreurService, signatairesService: Services.ISignatairesService, modalService: MyWay.UI.IModalService, contexteGgoStockageService: Services.IContexteGgoStockageService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ISauvegardeContexteService {
        sauvegarderContexteImpulse(tier?: string, codeProduit?: string, codeEtablissement?: string): ng.IPromise<any>;
        sauvegarderContexteIzivente(contexteIzivente?: any): ng.IPromise<any>;
        sauvegarderContexteEditique(): ng.IPromise<any>;
        verificationDebranchementProducteur(reprise?: IPanierProducteur): void;
        poursuivreDebranchement(): void;
        lancerSPAEditique(): void;
    }
    interface IContratEntreeImpulse {
        Sigle: string;
        CdOrgnFinnActrEtab: string;
        CdPrflAssr: string;
        IdTier: string;
        IdEdsActrEtabl: string;
        IdIDN: string;
        NomUsgActrEtab: string;
        IdActrEtab: string;
        CdAppliApl: string;
        CdTypeCanlDistn: string;
        CdTypePerimEnt: string;
        RefExterne: string;
        CodeProduit: string;
        CdInfoTarif: string;
        CdPilotageEdition: string;
        CdTypeSign: string;
        Theme: string;
        CdEtabFinnTier: string;
    }
    interface IContratEntreeIzivente {
        valeurEntree: string;
        codeEtablissement: string;
        codeAgent: string;
        posteFonctionnelAgent: string;
        typeEds: string;
        idEdsExterne: string;
        numeroPersonne: string;
        compteSupport: string;
        natureCompte: string;
        codeBin: string;
        typeAppel: string;
        modeVente: string;
        sensAppel: string;
        identifiant: string;
        produit: string;
        codeAction: string;
    }
    interface IContratEntreeContractualisation {
        libelleActe: string;
        codeGuichet: string;
        referenceContrat: number;
        identifiantAgence: string;
        codeEntite: string;
        identifiantAgent: string;
        identifiantActeExterne: number;
        referenceActeProducteur: number;
        rangSign: number;
        codeRoleSignataire: string;
        codeTypeAttributaireDocument: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        libelleExterneDocumentEntreprise: string;
        libelleDescriptionDocument: string;
        identifiantDocumentGED: number;
        identifiantComposantApplicatif: string;
        codeTypeSignataire: string;
        numeroAffichageDocument: string;
        idOptSignr: string;
        msgOptSignr: string;
    }
    interface IPanierProducteurIzivente {
        codeBinProducteur: number;
        compteSupportProducteur: string;
        typeAppelProducteur: string;
        numeroPersonneProducteur: string;
    }
    interface IPanierProducteurImpulse {
        typeDetenteur: string;
        idDetenteur: number;
        codeProducteur: string;
        codeEtablissement: string;
    }
    interface IPanierProducteur {
        impulse: any;
        izivente: any;
    }
    interface IAttributaire {
        id: string;
        intitule: string;
    }
    interface IDocumentBanqueDeFrance {
        idGED: string;
        numeroPersonne: number;
    }
    class SauvegardeContexteService implements ISauvegardeContexteService {
        private $q;
        private serviceAgentExtended;
        private constantes;
        private contexteService;
        private tiersService;
        private contexteGgoStockageService;
        private entiteTitulaireService;
        private compositionOffreService;
        private gestionEditiqueService;
        private catalogueService;
        private signataireService;
        private donneesMiseEnGestionService;
        private enveloppeOffreService;
        private modalService;
        private offreDonneesService;
        private saisieRiceService;
        private miseEnGestionPostProducteurService;
        private actionsService;
        private initialisationService;
        private routageEditique;
        static sauvegardeContexteServiceId: string;
        compteSupport: any;
        private _ggoConstantes;
        private _numeroEntiteTitulaire;
        private _nombrePersonneEntiteTitulaire;
        private _libelleEntiteTitulaire;
        private _codeEtablissement;
        private _codeActionGestion;
        private _codeCanal;
        private _referenceExterneAgent;
        private _numeroExterneEds;
        private _numeroOffre;
        private _idTier;
        private _agent;
        private _codeGuichet;
        private _titrePrincipal;
        private _contexteGgo;
        private _idEdsExterne;
        private _catalogue;
        private _libelleOffre;
        private _typeEds;
        private _contratEntreeImpulseClefs;
        private _contratEntreeIziventeClefs;
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du service SauvegardeContexteService
         *
         * @param $q {ng.IQService}
         * @param serviceAgentExtended {MyWay.Services.ServiceAgentExtended}
         * @param constantes {GestionGeneriqueOffres.Constantes.Definitions}
         * @param contexteService {Services.ContexteService}
         * @param tiersService {Services.TiersService}
         * @param contexteGgoStockageService {Services.ContexteGgoStockageService}
         * @param entiteTitulaireService {Services.IEntiteTitulaireService}
         * @param compositionOffreService {Services.ICompositionOffreService}
         * @param gestionEditiqueService {Services.GestionEditiqueService}
         * @param catalogueService {Services.ICatalogueService}
         * @param signataireService {Services.SignatairesService}
         * @param donneesMiseEnGestionService {Services.IDonneesMiseEnGestionService}
         * @param enveloppeOffreService {Services.IEnveloppeOffreService}
         * @param modalService {MyWay.UI.IModalService}
         * @param offreDonneesService {Services.IOffreDonneesService}
         * @param saisieRiceService {myway.comInterdomaine.SaisieRiceService}
         * @param miseEnGestionPostProducteurService {Services.MiseEnGestionPostProducteurService}
         * @param actionsService {Services.IActionsService}
         * @returns {void}
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.IContexteService, tiersService: Services.ITiersService, contexteGgoStockageService: Services.IContexteGgoStockageService, entiteTitulaireService: Services.IEntiteTitulaireService, compositionOffreService: Services.ICompositionOffreService, gestionEditiqueService: Services.GestionEditiqueService, catalogueService: Services.ICatalogueService, signataireService: Services.SignatairesService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService, enveloppeOffreService: Services.IEnveloppeOffreService, modalService: MyWay.UI.IModalService, offreDonneesService: Services.IOffreDonneesService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, miseEnGestionPostProducteurService: Services.MiseEnGestionPostProducteurService, actionsService: Services.IActionsService, initialisationService: Services.InitialisationService, routageEditique: Types.RoutageEditique);
        /**
         * @ngdoc method
         * @name extraireInformationsIzivente
         * @description
         * Méthode permettant d'extraire les informations relatives à IZIVENTE
         *
         * @param {Types.CompositionOffreProduit} compositionOffreProduit
         * @returns {IPanierProducteurIzivente} izivente
         */
        extraireInformationsIzivente(compositionOffreProduit: Types.CompositionOffreProduit): IPanierProducteurIzivente;
        /**
         * @ngdoc method
         * @name extraireInformationsImpulse
         * @description
         * Méthode permettant d'extraire les informations relatives à IMPULSE
         *
         * @param {Types.CompositionOffreProduit} compositionOffreProduit
         * @returns {IPanierProducteurImpulse} detenteur
         */
        extraireInformationsImpulse(compositionOffreProduit: Types.CompositionOffreProduit): IPanierProducteurImpulse;
        /**
         * @ngdoc method
         * @name verificationPanierIzivente
         * @description
         * Méthode permettant de détecter si un débranchement vers l'appli IZIVENTE est demandé
         *
         * @returns {Object} panier
         */
        verificationPanierIzivente(): {};
        /**
         * @ngdoc method
         * @name verificationPanierImpulse
         * @description
         * Méthode permettant de détecter si un débranchement vers l'appli IMPULSE est demandé
         *
         * Pendant la mise en gestion, il faudra analyser si il y a besoin de débrancher sur Impulse,
         * il faut donc sauvegarder chaque panier pour chaque personne et si un panier est trouvé avec des produits IARD,
         * il faudra débrancher (pour chaque personne si besoin)
         *
         * @returns {Object} panier
         */
        verificationPanierImpulse(): any;
        /**
         * @ngdoc method
         * @name optimisationPanierImpulse
         * @description
         * Méthode qui optimise si possible le nombre de débranchements IMPULSE
         *
         * @param {Object} panier
         * @returns {Object} panier
         */
        optimisationPanierImpulse(panier: any): any;
        /**
         * @ngdoc method
         * @name poursuivreDebranchement
         * @description
         * Méthode qui récupère le panier stocké dans le contexte afin de le transmettre à une autre
         *
         *
         * @returns {void}
         */
        poursuivreDebranchement(): void;
        /**
         * @ngdoc method
         * @name verificationDebranchementProducteur
         * @description
         * Méthode responsable de la gestion des débranchements, elle détermine suivant le contenu du panier
         * si il y a besoin de débrancher ou de poursuivre vers la SPA éditique
         *
         * @param {IPanierProducteur} reprise
         * @returns {void}
         */
        verificationDebranchementProducteur(reprise?: IPanierProducteur): void;
        /**
         * @ngdoc method
         * @name genererIban
         * @description
         * Méthode qui génère l'IBAN nécessaire au débranchement vers IZIVENTE
         *
         * @returns {string}
         */
        genererIban(): string;
        /**
         * @ngdoc method
         * @name demarrerDebranchementProducteur
         * @description
         * Méthode qui permet de débrancher vers l'application correspondante
         *
         * @param {IPanierProducteur} panierProducteur
         * @returns {void}
         */
        demarrerDebranchementProducteur(panierProducteur: IPanierProducteur): void;
        /**
         * @ngdoc method
         * @name sauvegarderContexteImpulse
         * @description
         * Méthode permettant de sauvegarder dans le contexte les informations attendues par l'application IMPULSE avant le débranchement
         *
         * @param {string} tier
         * @param {string} codeProduit
         * @param {string} codeEtablissement
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexteImpulse(tier: string, codeProduit: string, codeEtablissement: string): ng.IPromise<{}>;
        /**
         * @ngdoc method
         * @name sauvegarderContexteIzivente
         * @description
         * Méthode permettant de sauvegarder dans le contexte les informations attendues par l'application IZIVENTE avant le débranchement
         *
         * @param {IPanierProducteurIzivente} contexteIzivente
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexteIzivente(contexteIzivente: IPanierProducteurIzivente): ng.IPromise<{}>;
        /**
         * @ngdoc method
         * @name lancerSPAEditique
         * @description
         * Méthode appelée après la mise en gestion et les débranchements, afin de poursuivre sur la SPA éditique
         *
         * @param {void}
         * @returns {void}
         */
        lancerSPAEditique(): void;
        /**
         * @ngdoc method
         * @name sauvegarderContexteEditique
         * @description
         * Méthode permettant de sauvegarder dans le contexte les informations attendues par l'application éditique avant le débranchement
         *
         * @param {void}
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexteEditique(): ng.IPromise<{}>;
        private getListeProduitsServices();
        private epureActesSecondairesApresMiseEnGestion(codeMiseEnGestion, etatProduit, acteGestion);
        private traitementProduitService(descendant);
        private constructionProduitService(descendant, etatDuProduit);
        constructionContexteContractualisation(): Myway.Ressource.ContractualisationActe.IContractualisationActe;
        private recuperationDocumentBanqueDeFrance();
        private getDonneesAttributaire(codeType);
        private getLibellePersonne(numeroPersonne);
        private constructionSignatairesParDocument(docAProduire, signatairesActe);
        /**
         * @ngdoc method
         * @name sauvegarderContexte
         * @description
         * Méthode permettant de sauvegarder un contexte à partir d'une structure et de ses valeurs
         *
         * @param {any} contratEntree
         * @param {any} contratEntreeClefs
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexte(contratEntree: any, contratEntreeClefs: any): ng.IPromise<any[]>;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarification\tarificationOffreDetail".
     */
    interface ITarificationOffreDetailService {
        sendPostRequest(produitService: Types.IProduitServiceOffreDetail): ng.IPromise<Types.ITarificationOffreDetail>;
        getTarificationOffreDetail(): Types.TarificationOffreDetail;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification\tarificationOffreDetail".
     */
    class TarificationOffreDetailAjaxImplService implements ITarificationOffreDetailService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(produitService: Types.IProduitServiceOffreDetail): ng.IPromise<Types.ITarificationOffreDetail>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet TarificationOffreDetail
         */
        getTarificationOffreDetail(): Types.TarificationOffreDetail;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification\tarificationOffreDetail".
     */
    class TarificationOffreDetailMockImplService implements ITarificationOffreDetailService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(produitService: Types.IProduitServiceOffreDetail): ng.IPromise<Types.ITarificationOffreDetail>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet TarificationOffreDetail
         */
        getTarificationOffreDetail(): Types.TarificationOffreDetail;
    }
    class TarificationOffreDetailService {
        static tarificationOffreDetailServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ITarificationOffreService {
        estModifie: boolean;
        activationBoutonValider: boolean;
        activationBoutonCalculer: boolean;
        promotionsApresBestOf: Types.IPromotionAppliquee[];
        promotionsSystematiques: Types.CodePromotionSystematique[];
        promotionsCaisse: Types.CodePromotionCaisse[];
        promotionsAppliquees: Array<any>;
        compatibiliteTarification: boolean;
        activationBoutonRafraichir: boolean;
        activationBoutonDetails: boolean;
        activationBoutonPerso: boolean;
        animationChargementTarification: boolean;
        tarificationOffreSynthese: any;
        affichageDetailAssurances: boolean;
        promotionsAjoutees: Array<any>;
        promotionsSupprimees: Array<any>;
        getTarificationOffreSynthese(_codePeriodicite?: string, _date?: Date, _promoS?: Types.IPromotionProduitServiceBase, _promoC?: Types.IPromotionProduitServiceComplementaire[]): void;
        getCompositionOffre(): any[];
        miseAZeroTarification(): void;
        calculMontantEtRemiseTarification(tarifs: Types.ITarificationOffreSynthese): any;
        getProduitServiceTarificationDetails(_codePeriodicite?: string, _date?: any): Types.IProduitServiceOffreDetail;
        getPromotionSystematique(_date?: any): ng.IPromise<Types.IPromotionSystematique>;
        getPromotionCaisse(): ng.IPromise<Types.IPromotionCaisse>;
        getPromotionCaisseEtSystematique(): ng.IPromise<{}>;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification/tarificationOffrePromotion".
     */
    class TarificationOffreService implements ITarificationOffreService {
        private serviceAgent;
        private $q;
        private constantes;
        private entiteTitulaireService;
        private contexteGgoStockageService;
        private compositionOffreService;
        private tarificationOffreSyntheseService;
        private catalogueService;
        private promotionSystematiqueService;
        private promotionCaisseService;
        estModifie: boolean;
        activationBoutonValider: boolean;
        activationBoutonCalculer: boolean;
        promotionsApresBestOf: Types.IPromotionAppliquee[];
        promotionsSystematiques: Types.CodePromotionSystematique[];
        promotionsCaisse: Types.CodePromotionCaisse[];
        promotionsAppliquees: any[];
        activationBoutonDetails: boolean;
        activationBoutonPerso: boolean;
        activationBoutonRafraichir: boolean;
        animationChargementTarification: boolean;
        compatibiliteTarification: boolean;
        tarificationOffreSynthese: any;
        affichageDetailAssurances: boolean;
        promotionsAjoutees: Array<any>;
        promotionsSupprimees: Array<any>;
        private _numeroEntiteTitulaire;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _codeProduitService;
        private _numeroOffreSouscrite;
        private _messageErreur;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $q: ng.IQService, constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireService: Services.IEntiteTitulaireService, contexteGgoStockageService: Services.ContexteGgoStockageService, compositionOffreService: Services.CompositionOffreService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, catalogueService: Services.ICatalogueService, promotionSystematiqueService: Services.IPromotionSystematiqueService, promotionCaisseService: Services.IPromotionCaisseService);
        /**
         * @ngdoc method
         * @name miseAZeroTarification
         * @description
         * Remets à 0€ les montants de la tarification
         *
         * @returns {void}
         */
        miseAZeroTarification(): void;
        /**
         * Récupération de la composition de l'offre
         *
         * @param {void}
         * @return {array}
         */
        getCompositionOffre(): any[];
        /**
         * Demande de MAJ de la tarification
         *
         * @param {string || null} _codePeriodicite
         * @param {Date || null} _date
         * @return {Types.IProduitServiceOffre}
         */
        getProduitServiceTarification(_codePeriodicite: string, _date: any, _promoS: Types.IPromotionProduitServiceBase, _promoC: Types.IPromotionProduitServiceComplementaire[]): Types.IProduitServiceOffre;
        /**
         * Demande de MAJ de la tarification
         *
         * @param {string || null} _codePeriodicite
         * @param {Date || null} _date
         * @return {void}
         */
        getTarificationOffreSynthese(_codePeriodicite?: string, _date?: Date, _promoS?: Types.IPromotionProduitServiceBase, _promoC?: Types.IPromotionProduitServiceComplementaire[]): void;
        getProduitServiceTarificationDetails(_codePeriodicite?: string, _date?: any): Types.IProduitServiceOffreDetail;
        getPromotionSystematique(_date?: any): ng.IPromise<Types.IPromotionSystematique>;
        getPromotionCaisse(_date?: any): ng.IPromise<Types.IPromotionCaisse>;
        getPromotionSystematiqueRequete(): Types.CodePromotionSystematique[];
        getPromotionCaisseEtSystematique(): ng.IPromise<{}>;
        calculMontantEtRemiseTarification(tarifs: Types.ITarificationOffreSynthese): Types.ITarificationOffreSynthese;
        terminerTraitementEnErreur(message: string): void;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\identification".
     */
    interface ITiersIdentificationService {
        sendGetRequest(data: ITiersGetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        getTiersIdentification(): Types.Tiers.Identification;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\identification"
     * avec le verbe d'action GET.
     */
    interface ITiersGetIdentificationQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\identification".
     */
    class TiersIdentificationAjaxImplService implements ITiersIdentificationService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersIdentification(): Types.Tiers.Identification;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\identification".
     */
    class TiersIdentificationMockImplService implements ITiersIdentificationService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersIdentification(): Types.Tiers.Identification;
    }
    class TiersIdentificationService {
        static tiersIdentificationServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\media".
     */
    interface ITiersMediaService {
        sendGetRequest(data: ITiersGetMediaQuery): ng.IPromise<Types.Tiers.IMedia[]>;
        getTiersMedia(): Types.Tiers.Media[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\media"
     * avec le verbe d'action GET.
     */
    interface ITiersGetMediaQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\media".
     */
    class TiersMediaAjaxImplService implements ITiersMediaService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetMediaQuery): ng.IPromise<Types.Tiers.IMedia[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Media
         */
        getTiersMedia(): Types.Tiers.Media[];
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\media".
     */
    class TiersMediaMockImplService implements ITiersMediaService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetMediaQuery): ng.IPromise<Types.Tiers.IMedia[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Media
         */
        getTiersMedia(): Types.Tiers.Media[];
    }
    class TiersMediaService {
        static tiersMediaServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\particulierInformation".
     */
    interface ITiersParticulierInformationService {
        sendGetRequest(data: ITiersGetParticulierInformationQuery): ng.IPromise<Types.Tiers.IParticulierInformation>;
        getParticulierInformation(): Types.Tiers.ParticulierInformation;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\particulierInformation"
     * avec le verbe d'action GET.
     */
    interface ITiersGetParticulierInformationQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\particulierInformation".
     */
    class TiersParticulierInformationAjaxImplService implements ITiersParticulierInformationService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetParticulierInformationQuery): ng.IPromise<Types.Tiers.IParticulierInformation>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierInformation
         */
        getParticulierInformation(): Types.Tiers.ParticulierInformation;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\particulierInformation".
     */
    class TiersParticulierInformationMockImplService implements ITiersParticulierInformationService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetParticulierInformationQuery): ng.IPromise<Types.Tiers.IParticulierInformation>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierInformation
         */
        getParticulierInformation(): Types.Tiers.ParticulierInformation;
    }
    class TiersParticulierInformationService {
        static tiersParticulierInformationServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\particulierTiersLies".
     */
    interface ITiersParticulierTiersLiesService {
        sendGetRequest(data: ITiersGetParticulierTiersLiesQuery): ng.IPromise<Types.Tiers.IParticulierTiersLie[]>;
        getTiersParticulierTiersLies(): Types.Tiers.ParticulierTiersLie[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\particulierTiersLies"
     * avec le verbe d'action GET.
     */
    interface ITiersGetParticulierTiersLiesQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\particulierTiersLies".
     */
    class TiersParticulierTiersLiesAjaxImplService implements ITiersParticulierTiersLiesService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetParticulierTiersLiesQuery): ng.IPromise<Types.Tiers.IParticulierTiersLie[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierTiersLies
         */
        getTiersParticulierTiersLies(): Types.Tiers.ParticulierTiersLie[];
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\particulierTiersLies".
     */
    class TiersParticulierTiersLiesMockImplService implements ITiersParticulierTiersLiesService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetParticulierTiersLiesQuery): ng.IPromise<Types.Tiers.IParticulierTiersLie[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierTiersLies
         */
        getTiersParticulierTiersLies(): Types.Tiers.ParticulierTiersLie[];
    }
    class TiersParticulierTiersLiesService {
        static tiersParticulierTiersLiesServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IAction {
        id: string;
        texte: string;
        modele: string;
        ngClick: () => void;
        visible: boolean;
        actif: boolean;
        enCours: boolean;
        rang: number;
        largeur?: number;
    }
    class Action {
        private _id;
        /**
         * Id du bouton
         */
        id: string;
        private _texte;
        /**
         * Texte affiché sur le bouton (ex : Valider)
         */
        texte: string;
        private _modele;
        /**
         * Apparence du bouton ("principale" => vert | "secondaire" => gris clair | "zone" => gris foncé | "contextuel" => blanc)
         */
        modele: string;
        private _ngClick;
        /**
         * Action exécutée lorsque le bouton est cliqué
         */
        ngClick: () => void;
        private _visible;
        /**
         * Bouton visible ou pas
         */
        visible: boolean;
        private _actif;
        /**
         * Bouton visible ou pas
         */
        actif: boolean;
        private _enCours;
        /**
         * Affiche un spinner, ou pas
         */
        enCours: boolean;
        private _rang;
        /**
         * Rang d'affichage du bouton.
         * Les rangs négatifs sont affichés à droite du plus petit vers le plus grand
         * Les rangs positifs sont affichés à gauche du plus petit au plus grand
         * Pas de rang à 0 (rien ne sera affiché !)
         *
         * |                                                                                   |
         * | [..-3..] [..-2..] [..-1..]                        [..1..] [..2..] [..3..] [..4..] |
         * |                                                                                   |
         *
         */
        rang: number;
        private _largeur;
        /**
         * @returns Largeur en colonnes du bouton. Par défaut, deux colonnes
         */
        largeur: number;
        constructor(action: IAction);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IAvantageFamilleOffre {
        listePersonnes: IAvantageFamilleOffrePersonne[];
    }
    class AvantageFamilleOffre {
        private _listePersonnes;
        listePersonnes: IAvantageFamilleOffrePersonne[];
        constructor(offre: IAvantageFamilleOffre);
    }
    interface IAvantageFamilleOffrePersonne {
        agePersonnePhysique: number;
        dateFinValiditeLien: Date;
        codeTypeLienInterPersonnes: string;
        civilitePersonnePhysique: string;
        nomPersonnePhysique: string;
        prenomPersonnePhysique: string;
        dateNaissancePersonnePhysique: Date;
        beneficiaireCarte: number;
        possedeAvantageFamille: string;
    }
    interface IAvantageFamilleOffreModification {
        identifiantElementStructure: number;
        deuxiemePersonneEnRelation: number;
        dateFinValiditeLien: Date;
        codeAction: string;
        referenceExterneAgent: number;
        posteRattachementAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantPersonneTitulaire: number;
        codeTypeLienInterPersonnes: string;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ICaracteristiqueProposition {
        codeEtablissement: string;
        /**
         * Indique le caractère Forfaitaire ou Unitaire d'une offre
         *     Valeurs:
         *     'F'        Forfaitaire
         *     'U'        Unitaire
         */
        codeCaractereForfaitaireOffre: string;
    }
    interface IProduit {
        produitCaracteristique: IProduitCaracteristique;
        produitCatalogue: IProduitCatalogue;
        listePropositionReprise: IPropositionReprise[];
    }
    interface ICatalogueSouscriptionAvenant {
        /**
         *   Caractéristiques de la proposition
         */
        caracteristiqueProposition: ICaracteristiqueProposition;
        /**
         *   Liste des produits de l'offre
         */
        listeProduits: Types.IProduit[];
    }
    class Produit implements IProduit {
        private _produitCaracteristique;
        /**
         * Caractéristiques d'identification du produit
         */
        produitCaracteristique: Types.ProduitCaracteristique;
        private _produitCatalogue;
        /**
         * Autres caractéristiques
         */
        produitCatalogue: ProduitCatalogue;
        private _listePropositionReprise;
        /**
         * Propositions et reprise
         */
        listePropositionReprise: PropositionReprise[];
    }
    class CaracteristiqueProposition implements ICaracteristiqueProposition {
        private _codeEtablissement;
        codeEtablissement: string;
        private _codeCaractereForfaitaireOffre;
        codeCaractereForfaitaireOffre: string;
        constructor();
    }
    class CatalogueSouscriptionAvenant implements ICatalogueSouscriptionAvenant {
        private _caracteristiqueProposition;
        /**
         * Caractéristiques de la proposition
         */
        caracteristiqueProposition: ICaracteristiqueProposition;
        private _listeProduits;
        /**
         * Liste des produits de l'offre
         */
        listeProduits: Types.Produit[];
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Etat de la navigation entre les pages perso et recap
     * Initial : On est jamais allé sur l'écran recap
     * Retour : On est allé sur l'écran recap et on a demandé à revenir
     * InitialRecap : On est arrivé sur l'écran récap et il est interdit de revenir sur l'écran perso (cas du dossier de vente)
     */
    enum EtatNav {
        Initial = 0,
        Retour = 1,
        InitialRecap = 2,
    }
    /**
     * Objet contenant les données à charger durant la phase de chargement initiale. Doit être resolve pour passer sur l'écran de personnalisation
     */
    class DonneesInitiales {
        private _entitesTitulaires;
        /**
         * La liste des entités titulaires
         */
        entitesTitulaires: Types.InformationEntiteTitulaire[];
        private _personnes;
        /**
         * La liste des personnes
         */
        personnes: Types.Tiers.Personne[];
        private _catalogue;
        /**
         * Le catalogue de l'offre
         */
        catalogue: CatalogueNode;
        private _contexteGgo;
        contexteGgo: Types.ContexteGgo;
        private _dossierVente;
        /**
         * Le dossier de vente (VAD seulement)
         */
        dossierVente: Types.DossierDeVente.GestionDossierVente;
        private _etatNav;
        /**
         * Etat de la navigation
         */
        etatNav: EtatNav;
        constructor(etatNav: EtatNav, entitesTitulaires: Types.InformationEntiteTitulaire[], personnes: Types.Tiers.Personne[], catalogue: CatalogueNode, contexteGgo: Types.ContexteGgo, dossierVente: Types.DossierDeVente.GestionDossierVente);
    }
}


/**
 * Définition de la ressource Enveloppe Offre
 */
declare module GestionGeneriqueOffres.Types {
    interface IEnveloppeOffreContexte {
        /**
         * Code qualité agent affecté au PF
         */
        codeQualiteAgent?: string;
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService?: number;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire?: number;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant élément structure
         */
        identifiantElementStructureBis?: number;
        /**
         * Identifiant Elément structure
         */
        identifiantElementStructure: number;
        /***
         * Numéro de l'offre. Optionnel en création (POST)
         */
        numeroOffre?: number;
        /***
         * Optionnel en création (POST)
         * Lors de l'impression en ouverture ou en avenant, permet d'indiquer au "central" que tous les P/S OBLIGATOIRES dans l'Offre ont été ouverts.
         * Si toutes les ouvertures sont correctes, l'Offre passe de l'état d'instance à celui d'ouverture effective.
         * En avenant sans ouverture ou en utilisation de l'impression lors du processus de synthése, il n'y a pas lieu de positionner l'indicateur.
         * Valeurs :
         * 'O'	Toutes les P/S obligatoires sont ouverts
         * 'N'	Au moins un P/S obligatoire n'a pas été ouvert
         * 'R'	Aucune ouverture de P/S obligatoire n'a été déclenchée (l'Offre a déjà été validée)
         */
        indicateurValidationOuvertureOffre?: string;
    }
    interface IEnveloppeOffreProduitService {
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService: number;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Identifiant Produit / Service support
         */
        identifiantProduitServiceSupport: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Code Guichet Interbancaire
         */
        codeGuichet: string;
        /**
         * Code type Produit / Service
         */
        codeTypeProduitService: string;
        /**
         * Référence produit
         */
        numeroCompte: string;
        /**
         * Numéro offre souscrite
         */
        numeroOffre: number;
        /**
         * Indique l'action entreprise sur la référence d'un produit service dans le cadre d'un avenant
         * Indique quelle type d'action est entreprise sur la Référence d'un P/S dans le cadre d'un Avenant. Valeurs : 'R' Aucune Action sur la Référence.
         * 'T' Transfert (reprise unitaire) d'une Référence de P/S. 'D' Avenant Direct sur le P/S par l'interface locale de l'applicatif de gestion du P/S.
         * 'A' Avenant avec substitution d'un P/S par un autre P/S possédant le même CODIPR, mais un IDEGPS différent. ex: Découvert 3000 -> Découvert 4000
         * 'C' Clôture du P/S 'O' A ouvrir : positionné en central (envoi d'une SU29 pour ce P/S)
         */
        codeActionSurAvenantProduitService: string;
        modeTraitementProduitService: number;
    }
    interface IEnveloppeOffreReponse {
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService: number;
        /**
         * Numéro offre souscrite
         */
        numeroOffre: number;
        /**
         * Date ouverture offre souscrite
         */
        dateOuvertureOffreSouscrite: Date;
        /**
         * Nom Commercial Court Produit / Service
         */
        nomCommercialCourtProduitService: string;
        /**
         * Date du dernier avenant effectué avant l'avenant du jour
         */
        dateAvantDernierAvenantOffre: Date;
        /**
         * Date du dernier avenant établi sur une offre donnée
         */
        dateDernierAvenantOffre: Date;
    }
    class EnveloppeOffreReponse {
        private _codeRetour;
        codeRetour: number;
        private _identifiantProduitService;
        identifiantProduitService: number;
        private _numeroOffre;
        numeroOffre: number;
        private _dateOuvertureOffreSouscrite;
        dateOuvertureOffreSouscrite: Date;
        private _nomCommercialCourtProduitService;
        nomCommercialCourtProduitService: string;
        private _dateAvantDernierAvenantOffre;
        dateAvantDernierAvenantOffre: Date;
        private _dateDernierAvenantOffre;
        dateDernierAvenantOffre: Date;
        constructor(enveloppeOffreReponse: IEnveloppeOffreReponse);
    }
    interface IEnveloppeOffre {
        offre: IEnveloppeOffreContexte;
        /**
         * Liste des produits services associés
         */
        listeProduitService: IEnveloppeOffreProduitService[];
    }
}

declare module GestionGeneriqueOffres.Types {
    class ErreursGestionGeneriqueOffre {
        private _nombreMessages;
        /**
         * Nombre de messages significatifs. Si > 0, le panneau est ouvert
         * Significatifs = Erreurs fatales, Erreurs, Warning avec pté visible = true
         */
        nombreMessages: number;
        private _messages;
        /**
         * Les messages.
         */
        messages: Types.ErreurGestionGeneriqueOffre[];
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Description associée à un produit à forcer
     */
    class ForcageProduit {
        private _produit;
        /** Lien vers les informations relatives au produit */
        produit: Types.ProduitService;
        private _lienVersComposition;
        /** Lien vers le panier (rend produit redondant) */
        lienVersComposition: Types.CompositionOffreProduit;
        private _detenteur;
        /**
         * Le détenteur du produit service
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne;
        private _forcer;
        /**
         * Indicateur de forcage. Si vrai, il faut forcer le produit lors de la mise en gestion
         */
        forcer: boolean;
        private _controles;
        /**
         * Controle
         */
        controles: Types.ControlePreRequis[];
        constructor(produit: Types.ProduitService, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne, controles: any, lienVersComposition: Types.CompositionOffreProduit);
    }
    /**
     * Description associée à une personne : données FCC/FICP + liste des produits à forcer
     */
    class ForcagePersonne {
        private _identifiantPersonne;
        /**
         * Idenfiant personne (NODAPE)
         */
        identifiantPersonne: number;
        private _intitulePersonne;
        /**
         * Intitulé de la personne
         */
        intitulePersonne: string;
        private _pbCommFicp;
        /**
         *  Vrai si pb de comm FICP
         */
        pbCommFicp: boolean;
        private _pbCommFcc;
        /**
         * Vrai si pb de comm FCC
         */
        pbCommFcc: boolean;
        private _ficheFicp;
        /**
         * Vrai si fiché FICP, faux si non fiché ou si pb comm FICP
         */
        ficheFicp: boolean;
        private _ficheFcc;
        /**
         * Vrai si fiché FCC, faux si non fiché ou si pb comm FCC
         */
        ficheFcc: boolean;
        constructor(identifiantPersonne: number, intitulePersonne: string, personneBdf?: myway.comRisquesClient.Model.PersonneBDF);
    }
    /**
     * Description associéeà l'ensemble des forcages
     */
    class ForcageSuiteControleBdf {
        private _forcer;
        /**
         * Indicateur de forcage global. Si vrai, tous les produits sont forcés (toutes personnes confondues)
         */
        forcer: boolean;
        private _personnes;
        /**
         * Liste des personnes
         */
        personnes: ForcagePersonne[];
        private _produits;
        /**
         * Liste des produits
         */
        produits: ForcageProduit[];
        constructor(personnes: ForcagePersonne[], produits: ForcageProduit[]);
    }
}

declare module GestionGeneriqueOffres.Types {
    class Message {
        private _id;
        /**
         * id de message unique (timestamp)
         */
        id: number;
        private _visible;
        /**
         * Si visible est vrai, cela signifie que le message doit être restitué par GGO.
         * Dans le cas contraire, le message n'est pas restitué à l'écran mais peut néanmoins être utilisé à fins de contrôle ou autre.
         */
        visible: boolean;
        private _message;
        /**
         * Le message à afficher
         */
        message: string;
        private _style;
        /**
         * Un style optionnel. Doit être défini dans le less
         */
        style: string;
        private _delai;
        /**
         * Delai au bout duquel le message sera effacé. Défaut 3 sec. si non spécifié
         */
        delai: number;
        /**
         * Le paramètre message est obligatoire
         * Les paramètres visible et style sont facultatifs
         * Si visible est omis, il est considéré vrai.
         */
        constructor(message: string, style?: string, visible?: boolean, delai?: number);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IMiseEnGestionPSExterneDemande {
        identifiantProduitService: number;
        referenceProduitService: string;
        codeActionMajContenuOffre: string;
        referenceExterneAgent: number;
        identifiantElementStructure: number;
        numeroOffreSouscrite: number;
        codeEtablissement: string;
        codeTypeProduitService: string;
        codeAffichageReferenceProduitService: string;
        codeGuichet: string;
    }
    interface IMiseEnGestionPSExterne {
        codeRetour: number;
        alphanumeriqueBanalisee080: string;
        indicateurAjoutProduitServiceOffre: string;
        referenceProduitService: string;
    }
    class MiseEnGestionPSExterne {
        private _codeRetour;
        codeRetour: number;
        private _alphanumeriqueBanalisee080;
        alphanumeriqueBanalisee080: string;
        private _indicateurAjoutProduitServiceOffre;
        indicateurAjoutProduitServiceOffre: string;
        private _referenceProduitService;
        referenceProduitService: string;
        constructor(miseEnGestion: IMiseEnGestionPSExterne);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IOffre {
        codeCaractereForfaitaireOffre: string;
    }
    class Offre {
        private _codeCaractereForfaitaireOffre;
        /**
         * Indique le caractère Forfaitaire ou Unitaire d'une offre (CIECGF)
         *     Valeurs:
         *     'F'        Forfaitaire
         *     'U'        Unitaire
         */
        codeCaractereForfaitaireOffre: string;
        constructor(offre: IOffre);
    }
}



declare module GestionGeneriqueOffres.Types {
    interface IPersonnalisationPromotionBestOf {
        listePromotionAppliquee: IPromotionAppliquee[];
    }
    class PersonnalisationPromotionBestOf {
        private _listePromotionAppliquee;
        listePromotionAppliquee: IPromotionAppliquee[];
        constructor(promotion: IPersonnalisationPromotionBestOf);
    }
    interface IPromotionAppliquee {
        tauxApplicationParDefaut: number;
        periodeValiditeNegocieeParDefaut: number;
        dateFinApplication: string;
        codeEtablissement: string;
        identifiantProduitService: number;
        codePromotion: string;
        typePSSocleComplementaire: string;
        referenceExterneAgent: number;
        dateApplication: string;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IProgressionChargement {
        valeur: number;
        message: string;
    }
    class ProgressionChargement {
        private _valeur;
        valeur: number;
        private _message;
        message: string;
        updateStatut: (progression: IProgressionChargement) => void;
        constructor(progression: IProgressionChargement);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IPromotionCaisse {
        listePromotionCaisse: ICodePromotionCaisse[];
    }
    class PromotionCaisse {
        private _listePromotionCaisse;
        listePromotionCaisse: ICodePromotionCaisse[];
        constructor(promotion: IPromotionCaisse);
    }
    interface ICodePromotionCaisse {
        typeMotifTarification: string;
        codeInternePrestationTarifiable: number;
        typeNatureCondition: string;
        periodeValiditeNegocieeNormale: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        dateDerniereMajDonnee: Date;
        codeMonnaiePriseOrdre: string;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        identifiantProduitService: number;
        codePromotion: string;
        typeApplicationCondition: string;
        libelleRemise: string;
        referenceExterneAgent: number;
        typeConditionParticuliere: string;
        montantDeductionPrixNormal: number;
        typePSSocleComplementaire: string;
        libellePTUPrestationTarifiable: string;
        pourcentageRemise: number;
    }
    class CodePromotionCaisse {
        typeMotifTarification: string;
        codeInternePrestationTarifiable: number;
        typeNatureCondition: string;
        periodeValiditeNegocieeNormale: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        dateDerniereMajDonnee: Date;
        codeMonnaiePriseOrdre: string;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        identifiantProduitService: number;
        codePromotion: string;
        typeApplicationCondition: string;
        libelleRemise: string;
        referenceExterneAgent: number;
        typeConditionParticuliere: string;
        montantDeductionPrixNormal: number;
        typePSSocleComplementaire: string;
        libellePTUPrestationTarifiable: string;
        pourcentageRemise: number;
        constructor(codePromotionCaisse: Types.ICodePromotionCaisse);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IPromotionManuelle {
        listePromotionManuelle: ICodePromotionManuelle[];
    }
    class PromotionManuelle {
        private _listePromotionManuelle;
        listePromotionManuelle: ICodePromotionManuelle[];
        constructor(promotion: IPromotionManuelle);
    }
    interface ICodePromotionManuelle {
        tauxApplicationNegocieNormal: number;
        tauxApplicationNegocieHabilite: number;
        periodeValiditeNegocieeParDefaut: number;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        identifiantProduitService: number;
        codePromotion: string;
        typePSSocleComplementaire: string;
        libellePTUPrestationTarifiable: string;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IPromotionSystematique {
        listeCodePromotionSystematique: ICodePromotionSystematique[];
    }
    class PromotionSystematique {
        private _listeCodePromotionSystematique;
        listeCodePromotionSystematique: ICodePromotionSystematique[];
        constructor(promotion: IPromotionSystematique);
    }
    interface ICodePromotionSystematique {
        typeMotifTarification: string;
        pourcentageRemise: number;
        dateFinApplication: Date;
        indicateurPromotionSystematique: string;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        codePromotion: string;
        libelleRemise: string;
        typePSSocleComplementaire: string;
    }
    interface IPersonnalisationPromotion {
        dateApplication: Date;
        referenceExterneAgent: number;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        numeroOffreSouscrite: number;
        codeActionOuvertureAvenant: string;
        produitServiceOffre?: IProduitServiceOffrePromotionSystematique;
    }
    interface IProduitServiceOffrePromotionSystematique {
        codePeriodicite: string;
        numeroEntiteTitulaire: number;
        listeProduitServiceAssocie: IProduitServiceAssocie[];
    }
    class CodePromotionSystematique {
        typeMotifTarification: string;
        pourcentageRemise: number;
        dateFinApplication: Date;
        indicateurPromotionSystematique: string;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        codePromotion: string;
        libelleRemise: string;
        typePSSocleComplementaire: string;
        constructor(codePromotionSystematique: Types.ICodePromotionSystematique);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IRepriseOffreProduitServiceRepris {
        codeGuichet: string;
        referenceProduitService: string;
        numeroOffre: number;
        codeRepriseEnForcage: string;
        codeEtablissement: string;
        codeTypeProduitService: string;
    }
    interface IRepriseOffre {
        listeProduitServiceRepris: IRepriseOffreProduitServiceRepris[];
    }
    class RepriseOffre {
        private _listeProduitServiceRepris;
        listeProduitServiceRepris: IRepriseOffreProduitServiceRepris[];
        constructor(repriseOffre: IRepriseOffre);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ITarificationOffreDetail {
        listeTarificationPSDetail: ITarificationPSDetail[];
    }
    class TarificationOffreDetail {
        private _listeTarificationPSDetail;
        listeTarificationPSDetail: ITarificationPSDetail[];
        constructor(tarification: ITarificationOffreDetail);
    }
    interface ITarificationPSDetail {
        typeLigneEcran: string;
        prixMensuelStandard: number;
        tauxReduction: number;
        prixFacture: number;
        libelleRemise: string;
        libelleProduitService: string;
    }
    interface IProduitServiceOffreDetail {
        codePeriodicite: string;
        numeroEntiteTitulaire: number;
        dateApplication: Date;
        referenceExterneAgent: number;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        numeroOffreSouscrite: number;
        listeProduitServiceAssocie: Array<IProduitServiceAssocie>;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IInformationDossierPrelevement {
        codeDevise: string;
        codePeriodicite: string;
        dateDerniereEcheanceEffectuee: Date;
        dateProchaineEcheance: string;
        codeBanqueComptePrelevement: string;
        codeGuichet: string;
        dateOuvertureService: Date;
        codeNatureProchaineEcheance: string;
        dateEcheanceIntercalaire: Date;
        codeProduit: string;
        datePremiereEcheance: string;
        prixMensuel: number;
        numeroComptePrelevement: string;
        libellePeriodicite: string;
        periodeParDefaut: string;
        indicateurCalculProrata: string;
        codeTypePeriodicite: string;
        codeTypeAugmentation: string;
        periodiciteProrata: string;
        indicateurPremiereEcheance: string;
    }
    class InformationDossierPrelevement {
        private _codeDevise;
        codeDevise: string;
        private _codePeriodicite;
        codePeriodicite: string;
        private _dateDerniereEcheanceEffectuee;
        dateDerniereEcheanceEffectuee: Date;
        private _dateProchaineEcheance;
        dateProchaineEcheance: string;
        private _codeBanqueComptePrelevement;
        codeBanqueComptePrelevement: string;
        private _codeGuichet;
        codeGuichet: string;
        private _dateOuvertureService;
        dateOuvertureService: Date;
        private _codeNatureProchaineEcheance;
        codeNatureProchaineEcheance: string;
        private _dateEcheanceIntercalaire;
        dateEcheanceIntercalaire: Date;
        private _codeProduit;
        codeProduit: string;
        private _datePremiereEcheance;
        datePremiereEcheance: string;
        private _prixMensuel;
        prixMensuel: number;
        private _numeroComptePrelevement;
        numeroComptePrelevement: string;
        private _libellePeriodicite;
        libellePeriodicite: string;
        private _periodeParDefaut;
        periodeParDefaut: string;
        private _indicateurCalculProrata;
        indicateurCalculProrata: string;
        private _codeTypePeriodicite;
        codeTypePeriodicite: string;
        private _codeTypeAugmentation;
        codeTypeAugmentation: string;
        private _periodiciteProrata;
        periodiciteProrata: string;
        private _indicateurPremiereEcheance;
        indicateurPremiereEcheance: string;
        constructor(information: IInformationDossierPrelevement);
    }
    interface ITarificationOffrePrelevement {
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        informationDossierPrelevement: IInformationDossierPrelevement;
    }
    class TarificationOffrePrelevement {
        private _referenceExterneAgent;
        referenceExterneAgent: number;
        private _codeEtablissement;
        codeEtablissement: string;
        private _numeroOffreSouscrite;
        numeroOffreSouscrite: number;
        private _informationDossierPrelevement;
        informationDossierPrelevement: IInformationDossierPrelevement;
        constructor(tarification: ITarificationOffrePrelevement);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ITarificationOffrePromotion {
        typeMotifTarification: string;
        dateApplication: string;
        periodeValiditeNegociee: number;
        codePeriodicite: string;
        codeActionMajDb2: string;
        identifiantElementStructure: number;
        posteRattachementAgent: number;
        codeActionMajContenuOffre: string;
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitServiceOffre: number;
        codePromotion: string;
        tauxReduction: number;
        libelleRemise: string;
        listePromotionPSAssocie: IPromotionProduitServiceAssocie[];
    }
    interface IPromotionProduitServiceAssocie {
        typeMotifTarification: string;
        codeActionMajDb2: string;
        codePromotion: string;
        tauxReduction: number;
        libelleRemise: string;
        periodeValiditeNegociee: number;
        identifiantProduitService: number;
        typeProduitServiceAssurance: string;
    }
    class TarificationOffrePromotion {
        private _typeMotifTarification;
        typeMotifTarification: string;
        private _dateApplication;
        dateApplication: string;
        private _periodeValiditeNegociee;
        periodeValiditeNegociee: number;
        private _codePeriodicite;
        codePeriodicite: string;
        private _codeActionMajDb2;
        codeActionMajDb2: string;
        private _identifiantElementStructure;
        identifiantElementStructure: number;
        private _posteRattachementAgent;
        posteRattachementAgent: number;
        private _codeActionMajContenuOffre;
        codeActionMajContenuOffre: string;
        private _referenceExterneAgent;
        referenceExterneAgent: number;
        private _codeEtablissement;
        codeEtablissement: string;
        private _numeroOffreSouscrite;
        numeroOffreSouscrite: number;
        private _identifiantProduitServiceOffre;
        identifiantProduitServiceOffre: number;
        private _codePromotion;
        codePromotion: string;
        private _tauxReduction;
        tauxReduction: number;
        private _libelleRemise;
        libelleRemise: string;
        private _listePromotionPSAssocie;
        listePromotionPSAssocie: IPromotionProduitServiceAssocie[];
        constructor(tarification: ITarificationOffrePromotion);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ITarificationGlobale {
        codeDevise: string;
        codePeriodicite: string;
        codePrestationTarifiable: number;
        prixMensuel: number;
        montantNonRemise: number;
        montantRemisesCumulees: number;
    }
    interface IProduitServiceBase {
        numeroOffreSouscrite: number;
    }
    interface IProduitServiceAssocie {
        identifiantProduitService: number;
    }
    interface ITarificationOffreSynthese {
        tarificationAssurance: ITarificationAssurance;
        tarificationGlobale: ITarificationGlobale;
        prixMensuelNet: number;
        codeDeviseIHM: string;
    }
    class TarificationOffreSynthese {
        private _tarificationAssurance;
        tarificationAssurance: ITarificationAssurance;
        private _tarificationGlobale;
        tarificationGlobale: ITarificationGlobale;
        private _prixMensuelNet;
        prixMensuelNet: number;
        private _codeDeviseIHM;
        codeDeviseIHM: string;
        constructor(tarification: ITarificationOffreSynthese);
    }
    interface IPromotionProduitServiceBase {
        codePromotion: string;
        tauxApplicationTarification: number;
    }
    interface IPromotionProduitServiceComplementaire {
        codePromotion: string;
        tauxApplicationTarification: number;
        identifiantProduitService: number;
    }
    interface IProduitServiceOffre {
        codePeriodicite: string;
        numeroEntiteTitulaire: number;
        dateApplication: Date;
        identifiantProduitServiceOffre: number;
        referenceExterneAgent: number;
        codeEtablissement: string;
        /**
         * Objet contenant le numéro d'offre souscrite NOBCOF
         */
        produitServiceBase?: IProduitServiceBase;
        listeProduitServiceAssocie: IProduitServiceAssocie[];
        promotionProduitServiceBase?: IPromotionProduitServiceBase;
        listePromotionPSAssocie?: IPromotionProduitServiceComplementaire[];
    }
    interface ITarificationAssurance {
        nbProduitsComplAssurance: number;
        montantRemiseAssurance: number;
        montantNonRemiseAssurance: number;
    }
}

declare module GestionGeneriqueOffres.Constantes {
    enum ModeAffichageErreur {
        ModePleinEcran = 0,
        PopIn = 1,
        PopInAmelioree = 2,
    }
    /**
     * Les évènement internes à GGO
     */
    class Evenements {
        /**
         * Evènement déclenché lorsque l'utilisateur clique sur une tuile du catalogue
         */
        static TUILE_CATALOGUE_CLICK: string;
        /**
         * Evènement déclenché lorsque l'utilisateur clique sur le filtrage personne
         * Le filtrage personne ayant été désactivé, cet évènement n'est jamais déclenché.
         */
        static PERSONNE_CLICK: string;
        /**
         * Evènement déclenché lorsque l'utilisateur change le produit sélectionné dans un assemblage
         * dont l'IHM de gestion est externalisée dans un composant P/S ("exception carte")
         */
        static SUBSTITUTION_PRODUIT_SERVICE: string;
        /**
         * Activation du spinner
         */
        static WORK_IN_PROGRESS_DEBUT: string;
        /**
         * Désactivation du spinner
         */
        static WORK_IN_PROGRESS_FIN: string;
        /**
         * Activation/désactivation du mode debug
         */
        static MODE_DEBUG: string;
        /**
         * Activation/désactivation du mode debug
         */
        static ACTIVER_BLOQUEUR: string;
        /**
         * Notification émise lorsque le délai d'init des P/S est écoulé.
         */
        static DELAI_INIT_COMPOSANTS_ECOULE: string;
        /**
         * Notification émise en cas d'erreur fatale (écran d'erreur GGO)
         */
        static ERREUR_FATALE: string;
        /**
         * Interne Notification émise lorsqu'un produit est supprimé. Utilisé lorsque l'utilisateur
         * décide de substituer un P/S d'un assemblage par un autre, afin de pouvoir appeler le traitement de
         * suppression de l'ancien P/S qui va être remplacé par le nouveau. Comme le traitement de suppression est raccroché
         * au bouton poubelle et que celui ci n'est pas géné dans le même contrôleur, on passe par un évènement.
         */
        static SUPPRIMER_PRODUIT: string;
        /**
         * Rend visible le panneau des erreurs sur l'écran composition
         */
        static ACTIVER_PANNEAU_ERREUR: string;
    }
    /**
     * Tous les time-out sont exprimés en ms
     */
    class TimeOuts {
        /**
         * Timeout associé à la durée maxi des contrôles de surface. Au delà : erreur
         */
        static TIMEOUT_CONTROLE_SURFACE: number;
        /**
         * Timeout associé à la durée maxi de récupération des js/css des composants P/S
         * Une fois ce délai achevé, on vérifie qu'on a bien tout reçu.
         */
        static TIMEOUT_LECTURE_FICHIERS_COMPOSANTS: number;
        /**
         * Timeout maximal autorisé pour l'enregistrement dans angular des composants P/S
         * Devrait être divisible par TIMEOUT_INTERVALLE_ENREGISTREMENT_COMPOSANTS
         */
        static TIMEOUT_MAXI_ENREGISTREMENT_COMPOSANTS: number;
        /**
         * Intervalle d'attente lorsque l'on détermine qu'un composant P/S n'est pas encore enregistré
         */
        static TIMEOUT_INTERVALLE_ENREGISTREMENT_COMPOSANTS: number;
        /**
         * Timeout associé à la durée maxi d'initialisation du contexte (initialisation du serviceAgent). Au delà : erreur.
         */
        static TIMEOUT_INIT_SERVICE_AGENT: number;
        /**
         * Timeout associé à la durée maxi d'initialisation des P/S. Au delà : erreur.
         */
        static TIMEOUT_INIT_COMPOSANTS: number;
        /**
         * Timeout associé à la durée au delà de laquelle on fait disparaitre les indicateurs d'init des P/S
         */
        static TIMEOUT_EFFACER_INDICATEURS: number;
    }
    class PhaseMiseEnGestion {
        static PHASE_PRE_PRODUCTEUR: number;
        static PHASE_POST_PRODUCTEUR: number;
    }
    class LisaConfig {
        static CodeEntree: any;
        static RAFRAICHISSEMENT_SYNTHESE_NSDK: number;
        static CHARGEMENT_PAGE_COMPO: number;
        static DEBRANCHEMENT_SPA_CONTRACTUALISATION: number;
        static RETOUR_PAGE_COMPO: number;
        static DEBRANCHEMENT_SPA_EDITIQUE_BL: number;
        static DEBRANCHEMENT_SPA_EDITIQUE_EPARGNE: number;
        static CHARGEMENT_PAGE_RECAP: number;
        static DEBRANCHEMENT_IZIVENTE: number;
        static DEBRANCHEMENT_IMPULSE: number;
        static DEBRANCHEMENT_SYNTHESE_NSDK: number;
        static QUITTER_GGO: number;
        static EVENEMENT_RETOUR_IFRAME: string;
    }
    class Promotions {
        static TYPE_PS_COMPLEMENTAIRE: string;
        static TYPE_PS_SOCLE: string;
    }
}

declare module GestionGeneriqueOffres.Debug {
    class Chronometre {
        private elapse;
        private topDebut;
        private topFin;
        nom: string;
        start: () => void;
        stop: () => void;
        get: () => number;
        reset: () => void;
        constructor(nom?: string);
    }
    class GestionScopes {
        private static getScopes(root);
        static getWatchersNumber(): number;
        static calculDureeCycleDigest(): string;
    }
    class StressLoad {
        static stressLoad(iteration: number, max: number, tabDebut: any[], tabFin: any[], fn: any, ...args: any[]): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}







declare module GestionGeneriqueOffres.ComposantsProduitsService {
    function blocLse(): ng.IDirective;
}

declare module GestionGeneriqueOffres.ComposantsProduitsService {
    function blocReleveCompteNumerique(): ng.IDirective;
}

declare module GestionGeneriqueOffres.ComposantsProduitsService {
    function blocReleveCompte(): ng.IDirective;
}

declare module GestionGeneriqueOffres.Composition {
}
declare module GestionGeneriqueOffres.Composition {
}


declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Personnalisation {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    function entete(): ng.IDirective;
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Personnalisation {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}
