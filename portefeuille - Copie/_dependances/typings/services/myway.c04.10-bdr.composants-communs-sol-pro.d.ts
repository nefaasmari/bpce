
declare module ComposantsCommunsSolPro {
    var app: any;
}

declare module ComposantsCommunsSolPro {
}

/**
 * Contrôleur de la page de tests pour l'utilisation des services REST du projet
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSolPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevServiceRestControleur {
        private $scope;
        private solProService;
        private porteurSolProService;
        private compteSupSecuraccesService;
        private adresseService;
        private mediaService;
        private contratCarteRechercheService;
        static $inject: string[];
        porteurSolProServiceGetQuery: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolProServiceGetQuery;
        porteurSolProServiceGetReponse: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro;
        porteurSolProServiceGetErreur: MyWay.Services.Erreur;
        indicateurPorteurSolProServiceGetEnCours: boolean;
        indicateurRecherchePorteurSolProServiceGet: boolean;
        indicateurSuccesPorteurSolProServiceGet: boolean;
        indicateurSuccesPorteurSolProServiceGetNull: boolean;
        porteurSolProServicePostQuery: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur;
        porteurSolProServicePostReponse: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro;
        porteurSolProServicePostErreur: MyWay.Services.Erreur;
        indicateurPorteurSolProServicePostEnCours: boolean;
        indicateurRecherchePorteurSolProServicePost: boolean;
        indicateurSuccesPorteurSolProServicePost: boolean;
        indicateurSuccesPorteurSolProServicePostNull: boolean;
        porteurSolProServicePutQuery: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur;
        porteurSolProServicePutReponse: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro;
        porteurSolProServicePutErreur: MyWay.Services.Erreur;
        indicateurPorteurSolProServicePutEnCours: boolean;
        indicateurRecherchePorteurSolProServicePut: boolean;
        indicateurSuccesPorteurSolProServicePut: boolean;
        indicateurSuccesPorteurSolProServicePutNull: boolean;
        solProServiceGetQuery: Modeles.ContratBqdPro.SolPro.ISolProServiceGetQuery;
        solProServiceGetReponse: Array<Modeles.ContratBqdPro.SolPro.IPorteur>;
        solProServiceGetErreur: MyWay.Services.Erreur;
        indicateurSolProServiceGetEnCours: boolean;
        indicateurRechercheSolProServiceGet: boolean;
        indicateurSuccesSolProServiceGet: boolean;
        indicateurSuccesSolProServiceGetNull: boolean;
        solProServicePostQuery: Modeles.ContratBqdPro.SolPro.IPorteur;
        solProServicePostReponse: Modeles.ContratBqdPro.SolPro.IPorteur;
        solProServicePostErreur: MyWay.Services.Erreur;
        indicateurSolProServicePostEnCours: boolean;
        indicateurRechercheSolProServicePost: boolean;
        indicateurSuccesSolProServicePost: boolean;
        indicateurSuccesSolProServicePostNull: boolean;
        solProServicePutQuery: Modeles.ContratBqdPro.SolPro.IPorteur;
        solProServicePutReponse: Modeles.ContratBqdPro.SolPro.IPorteur;
        solProServicePutErreur: MyWay.Services.Erreur;
        indicateurSolProServicePutEnCours: boolean;
        indicateurRechercheSolProServicePut: boolean;
        indicateurSuccesSolProServicePut: boolean;
        indicateurSuccesSolProServicePutNull: boolean;
        solProServiceDeleteQuery: Modeles.ContratBqdPro.SolPro.IPorteur;
        solProServiceDeleteReponse: Modeles.ContratBqdPro.SolPro.IPorteur;
        solProServiceDeleteErreur: MyWay.Services.Erreur;
        indicateurSolProServiceDeleteEnCours: boolean;
        indicateurRechercheSolProServiceDelete: boolean;
        indicateurSuccesSolProServiceDelete: boolean;
        indicateurSuccesSolProServiceDeleteNull: boolean;
        compteSupSecuraccesServiceGetQuery: Modeles.ContratBqdPro.CompteSupSecuracces.ICompteSupSecuraccesServiceGetQuery;
        compteSupSecuraccesServiceGetReponse: Array<Modeles.ContratBqdPro.CompteSupSecuracces.ICompteCCE>;
        compteSupSecuraccesServiceGetErreur: MyWay.Services.Erreur;
        indicateurCompteSupSecuraccesServiceGetEnCours: boolean;
        indicateurRechercheCompteSupSecuraccesServiceGet: boolean;
        indicateurSuccesCompteSupSecuraccesServiceGet: boolean;
        indicateurSuccesCompteSupSecuraccesServiceGetNull: boolean;
        mediaServiceGetQuery: Modeles.Tiers.Media.IMediaServiceGetQuery;
        mediaServiceGetReponse: Modeles.Tiers.Media.IMedia;
        mediaServiceGetErreur: MyWay.Services.Erreur;
        indicateurMediaServiceGetEnCours: boolean;
        indicateurRechercheMediaServiceGet: boolean;
        indicateurSuccesMediaServiceGet: boolean;
        indicateurSuccesMediaServiceGetNull: boolean;
        adresseServiceGetQuery: Modeles.Tiers.Adresse.IAdresseServiceGetQuery;
        adresseServiceGetReponse: Array<Modeles.Tiers.Adresse.IAdresse>;
        adresseServiceGetErreur: MyWay.Services.Erreur;
        indicateurAdresseServiceGetEnCours: boolean;
        indicateurRechercheAdresseServiceGet: boolean;
        indicateurSuccesAdresseServiceGet: boolean;
        indicateurSuccesAdresseServiceGetNull: boolean;
        contratCarteRechercheServiceGetQuery: Modeles.ContratCarte.Recherche.IContratCarteRechercheServiceGetQuery;
        contratCarteRechercheServiceGetReponse: Modeles.ContratCarte.Recherche.IRecherche;
        contratCarteRechercheServiceGetErreur: MyWay.Services.Erreur;
        indicateurContratCarteRechercheServiceGetEnCours: boolean;
        indicateurRechercheContratCarteRechercheServiceGet: boolean;
        indicateurSuccesContratCarteRechercheServiceGet: boolean;
        indicateurSuccesContratCarteRechercheServiceGetNull: boolean;
        codeActionServiceSolProNonSelectionne: Enumerations.CodeActionServiceSolPro;
        codeEtatBlocPorteurNonSelectionne: Enumerations.CodeEtatBlocPorteur;
        listePorteursNonSelectionne: any[];
        codeEtablissementNonSelectionne: string;
        identifiantClientNonSelectionne: string;
        referenceExterneAgentNonSelectionne: number;
        boutonAnnulerActifNonSelectionne: boolean;
        boutonSupprimerActifNonSelectionne: boolean;
        codeActionServiceSolProAjoutable: Enumerations.CodeActionServiceSolPro;
        codeEtatBlocPorteurAjoutable: Enumerations.CodeEtatBlocPorteur;
        listePorteursAjoutable: any[];
        codeEtablissementAjoutable: string;
        identifiantClientAjoutable: string;
        referenceExterneAgentAjoutable: number;
        boutonAnnulerActifAjoutable: boolean;
        boutonSupprimerActifAjoutable: boolean;
        codeActionServiceSolProNonAjoutable: Enumerations.CodeActionServiceSolPro;
        codeEtatBlocPorteurNonAjoutable: Enumerations.CodeEtatBlocPorteur;
        listePorteursNonAjoutable: any[];
        codeEtablissementNonAjoutable: string;
        identifiantClientNonAjoutable: string;
        referenceExterneAgentNonAjoutable: number;
        boutonAnnulerActifNonAjoutable: boolean;
        boutonSupprimerActifNonAjoutable: boolean;
        messageErreurPorteur: string;
        codeActionServiceSolProAjoute: Enumerations.CodeActionServiceSolPro;
        codeEtatBlocPorteurAjoute: Enumerations.CodeEtatBlocPorteur;
        listePorteursAjoute: any[];
        codeEtablissementAjoute: string;
        identifiantClientAjoute: string;
        referenceExterneAgentAjoute: number;
        boutonAnnulerActifAjoute: boolean;
        boutonSupprimerActifAjoute: boolean;
        codeActionServiceSolProAjouteAvenant: Enumerations.CodeActionServiceSolPro;
        codeEtatBlocPorteurAjouteAvenant: Enumerations.CodeEtatBlocPorteur;
        listePorteursAjouteAvenant: any[];
        codeEtablissementAjouteAvenant: string;
        identifiantClientAjouteAvenant: string;
        referenceExterneAgentAjouteAvenant: number;
        boutonAnnulerActifAjouteAvenant: boolean;
        boutonSupprimerActifAjouteAvenant: boolean;
        listeComptesSupports: any[];
        constructor($scope: ng.IScope, solProService: Services.ISolProService, porteurSolProService: Services.IPorteurSolProService, compteSupSecuraccesService: Services.ICompteSupSecuraccesService, adresseService: Services.IAdresseService, mediaService: Services.IMediaService, contratCarteRechercheService: Services.IContratCarteRechercheSolProService);
        private initTestDirectivePorteurSmsCap();
        private initTestPorteurSolProGet();
        private initTestPorteurSolProPost();
        private initTestPorteurSolProPut();
        private initTestSolProGet();
        private initTestSolProPost();
        private initTestSolProPut();
        private initTestSolProDelete();
        private initTestAdresseGet();
        private initTestMediaGet();
        private initTestContratCarteRechercheGet();
        private initTestCompteSupSecuraccesGet();
        recupererPorteurSolPro(): void;
        creerPorteurSolPro(): void;
        modifierPorteurSolPro(): void;
        recupererSolPro(): void;
        creerSolPro(): void;
        modifierSolPro(): void;
        supprimerSolPro(): void;
        recupererCompteSupSecuracces(): void;
        recupererAdresse(): void;
        recupererTelephone(): void;
        recupererContratCarte(): void;
    }
}

/**
 * Ensemble des constantes pour le projet sol pro
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsSolPro.Constantes {
    var CODE_ETABLISSEMENT_CCOOP: string;
    var CODE_ETABLISSEMENT_BTP: string;
    var CODE_PRODUIT_CARTE_SECURACCESS: string;
    var CODE_PRODUIT_CARTE_SESAME: string;
    var LIBELLE_SECURACCESS: string;
    var LIBELLE_SESAME: string;
    var CODE_PRODUIT_SERVICE_SECURACCESS: number;
    var CODE_PRODUIT_SERVICE_SESAME: number;
    var CODE_ACTE_GESTION_SECURACCESS: string;
    var CODE_ACTE_GESTION_SESAME: string;
    var CODE_REST_INDICATEUR_MAX_COMPTE_OUI: string;
    var CODE_REST_INDICATEUR_MAX_COMPTE_NON: string;
    var NB_MIN_CHIFFRES_RECHERCHE_NUMERO_COMPTE: number;
}

/**
 * Ensemble d'énumérations pour le projet sol pro
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSolPro.Enumerations {
    enum CodeActionServiceSolPro {
        OUVERTURE,
        AVENANT,
        CONSULTATION,
        GESTION,
    }
    enum EvenementSolPro {
        AVENANT_SOL_PRO_SMS_ANNULATION = 0,
        AVENANT_SOL_PRO_SMS_VALIDATION = 1,
        OUVERTURE_SOL_PRO_SMS_ANNULATION = 2,
        OUVERTURE_SOL_PRO_SMS_VALIDATION = 3,
        AVENANT_SOL_PRO_CAP_ANNULATION = 4,
        AVENANT_SOL_PRO_CAP_VALIDATION = 5,
        OUVERTURE_SOL_PRO_CAP_ANNULATION = 6,
        OUVERTURE_SOL_PRO_CAP_VALIDATION = 7,
        CLOTURE_SOL_PRO_SMS_VALIDATION = 8,
        CLOTURE_SOL_PRO_CAP_VALIDATION = 9,
    }
    enum TypeCarteSolPro {
        CARTE_SECURACCESS = 0,
        CARTE_SESAME = 1,
    }
    enum CodeEtatBlocPorteur {
        NON_SELECTIONNE,
        AJOUTABLE,
        NON_AJOUTABLE,
        AJOUTE,
    }
    class Listes {
        static periodicites: any;
    }
}

declare module MonApplication {
}

/**
 * Ensemble de filtre pour l'ouverture sol pro cap
 */
declare module ComposantsCommunsSolPro.Filtres {
}

/**
 * Filtre pour la transformation de l'affichage des numéros de téléphone
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ComposantsCommunsSolPro.Filtres {
}

declare module ComposantsCommunsSolPro.Modales {
    class ConsulterCartesModaleControleur {
        private $modalInstance;
        porteur: any;
        static $inject: string[];
        tableauAbonnement: MyWay.UI.ImwTableOptions;
        tableauCartePorteur: MyWay.UI.ImwTableOptions;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        fermer(): void;
    }
}

declare module ComposantsCommunsSolPro.Modales {
    class DefinirAutorisation2ModaleControleur implements MyWay.UI.ISelectionChangeHandler {
        private $modalInstance;
        porteur: any;
        static $inject: string[];
        tableauSimpleMultiple: MyWay.UI.ImwTableOptions;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        onSelectionChange(selectedObject: Object): void;
        valider(): void;
        annuler(): void;
    }
}

declare module ComposantsCommunsSolPro.Modales {
    interface IPersonne {
        nomFamille: string;
        nomUsage: string;
        prenom: string;
        identifiantPersonne: number;
        procuration: boolean;
    }
    class GererCarteSecurAccessControleur {
        private $modalInstance;
        private serviceAgentExtended;
        private mwNotificationService;
        private intervenantEntiteTitService;
        private modalService;
        private mainService;
        private compteSupSecuraccesService;
        static $inject: string[];
        listeComptesSupports: any[];
        compteSupportChoisi: any;
        numeroPersonneIdentifiee: number;
        numeroPersonneDetentrice: number;
        identifiantEntiteTitulaire: number;
        typeCarteSolPro: ComposantsCommunsSolPro.Enumerations.TypeCarteSolPro;
        libelleCarte: string;
        indicateurMaxComptePorteur: boolean;
        indicateurMaxCompteInitial: boolean;
        numeroCompteDeRecherche: string;
        indicateurBoutonRechercherDesactive: boolean;
        indicateurChargementRechercheCompteSupport: boolean;
        codeEtablissement: string;
        identifiantTiers: number;
        private accesGghopEpiAutoriseSU1P;
        listPersonne: Array<IPersonne>;
        donneesContexte: ComposantsCommunsSolPro.Modeles.ContratBqdPro.SolProCap.IDonneesContexte;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, intervenantEntiteTitService: Services.IIntervenantEntiteTitService, modalService: MyWay.UI.IModalService, mainService: ComposantsCommunsSolPro.Services.MainService, compteSupSecuraccesService: Services.ICompteSupSecuraccesService);
        recupererLibelleCarte(): void;
        /**
         * Méthode permettant de valider et débrancher vers GGHO via LISA
         * CODE DEBRANCHEMENT LISA -> 2
         * @return {void}
         */
        valider(): void;
        annuler(): void;
        /**
         * Méthode appelé lorsque l'utilisateur modifie le numéro de compte de recherche
         * @return void
         */
        numeroCompteRechercheChange(): void;
        /**
         * Méthode permettant de rechercher les comptes supports
         * @return void
         */
        rechercherComptesSupports(): void;
        /**
         * Méthode permettant d'effacer la recherche d'un compte support carte
         * @return void
         */
        effacerRecherche(): void;
        private recuperParametrageTableSU1P();
    }
}

declare module ComposantsCommunsSolPro.Modales {
    class GererLecteurCapControleur {
        private $modalInstance;
        private porteurSolProService;
        static $inject: string[];
        data: any;
        listeEtatCommandeLecteurCap: Array<any>;
        choixEtatCommande: any;
        choixLecteurCap: boolean;
        indicateurChangementEtatLecteurCap: boolean;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, porteurSolProService: Services.IPorteurSolProService);
        private trouverChoixEtatCommande(code);
        valider(): void;
        annuler(): void;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tiers/v2/adresse"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSolPro.Modeles.Tiers.Adresse {
    interface IAdresseServiceGetQuery {
        codeEtablissement: string;
        idPersonne: string;
        numeroChronoProfessionnel?: string;
        numeroChronoLieuActivite?: string;
    }
    interface IAdresse {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        libelleRetourDistribution: string;
        indicateurEnvoiCourrier: boolean;
        indicateurDifferencePostFisc: boolean;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        codeValiditeAdresseUNIVERS: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        numeroVoiePTT: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: Date;
        nombreRetourPTT: number;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tiersservice/v1/adressePorteurCarte"
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsSolPro.Modeles.TiersService.AdressePorteurCarte {
    interface IAdressePorteurCarteServiceGetQuery {
        identifiantAgent: string;
        codeEtablissement: string;
        numeroPersonne: number;
    }
    interface IAdressePorteurCarte {
        codeEtablissement: string;
        designationLongueParticulier: string;
        codePays: string;
        dateCreationAdresse: Date;
        dateDerniereMiseAJourAdresse: Date;
        codeTypeLieu: string;
        codeType: string;
        libelleType: string;
        codeQuartier: string;
        codeNatureAdresseSolCapPro: string;
        codeRetourEchange: number;
        identifiantPersonne: number;
        designationCourteParticulier: string;
        identifiantAdresse: number;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeInseeLocalite: string;
        dateRestructurationAdresse: Date;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/cartePartagee"
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsSolPro.Modeles.ContratBqdPro.CartePartagee {
    interface ICartePartageeServiceGetQuery {
        codeEtablissement: string;
        identifiantClient: string;
        identifiantPersonne: number;
        coupleDetenteur: boolean;
        codeAction: string;
    }
    interface ICartePartagee {
        carte: ICarte;
        listeCarte: Array<ICarte>;
        listeCarteAutresPersMorales: Array<ICarte>;
        listeCartePersMoraleDetentrice: Array<ICarte>;
        enrolement: IEnrolement;
    }
    interface ICarte {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroCarte: string;
        dateFinValidite: Date;
        autorisationAuthentification: string;
        designationPersonne: string;
        identifiantClient: string;
        raisonSociale: string;
        codeAction: string;
    }
    interface IEnrolement {
        identifiantEnrolement: string;
        identifiantPersonne: number;
        codeAction: string;
        codeActionEnrolement: string;
        codeEtablissement: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/compteSupSecuracces"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSolPro.Modeles.ContratBqdPro.CompteSupSecuracces {
    interface ICompteSupSecuraccesServiceGetQuery {
        codeEtablissement: string;
        identifiantTiers: number;
        numeroCompte?: string;
    }
    interface ICompteCCE {
        codeMessageErreurSAC: string;
        codeEtablissement: string;
        codeGuichet: string;
        referenceProduitService: string;
        designationBancaire: string;
        cleRib: string;
        /**
         * indicateurMaxCompte à :
         * - O si le nombre max de compte à restituer est atteint( 100).
         * - N sinon
         */
        indicateurMaxCompte: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratcarte/v1/recherche"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSolPro.Modeles.ContratCarte.Recherche {
    interface IContratCarteRechercheServiceGetQuery {
        codeEtablissement: string;
        codeTypeRecherche: number;
        premierePersonneEnRelation: number;
        typeInterrogationPourLesCartes: string;
    }
    interface IRecherche {
        parametre: IParametreDeRecherche;
        contratsCartes: Array<IContratCarte>;
        informationComplementaire: IInformationComplementaire;
    }
    interface IParametreDeRecherche {
        codeEtablissement: string;
        typeInterrogationPourLesCartes: string;
        codeTypeRecherche: number;
        codeGuichetInterbancaire: string;
        premierePersonneEnRelation: number;
        identifiantElementDeStructure: number;
        identifiantElementDeStructureBis: number;
        identifiantDeLaPersonne: number;
        codeEtablissementBis: string;
        codeFonctionChoixRechercheEtatCompte: string;
        dateRechercheDeLEtatDuCompte: Date;
        codeGuichetInterbancaireBis: string;
        dateRechercheDeLEtatDuCompteBis: Date;
        identifiantElementDeStructureTiers: number;
        dateOuvertureProduitOuService: Date;
        designationLongueElementStructure: string;
    }
    interface IContratCarte {
        historiqueDesCartes: Array<ICarteDuContratCarte>;
        numeroDeCompte: string;
        numeroDuContratCarte: number;
        proprietaire: IProprietaireDuContratCarte;
        serviceDerogatoire: IServiceDerogatoireDuContratCarte;
        option: IOptionDuContratCarte;
        dateDOuvertureDuContratCarte: Date;
        dateDeModificationDuContratCarte: Date;
        dateDeFinDuContratCarte: Date;
        codeDuProduitCarte: string;
        codeDuProduitCarteDeRemplacement: string;
        numeroDeLOffreSouscrite: number;
        identifiantDuProduitOuService: number;
        motDePasse: string;
        dateDeSignatureDuContratCarte: Date;
        identifiantDuReseauCommercial: string;
        libelleDuReseauCommercial: string;
        numeroRIBDuCompte: string;
        codeDuMotifDeBlocageDuContratCarte: string;
        codeDuModeDEnvoiDeLaCarteAEcheance: string;
        identifiantElementDeStructureDeDistribution: number;
        libelleCalculeCourtEDS: string;
        codeDeSituationDuContratCarte: string;
        codeVisuelDeLaCarte: string;
        codeDeRepresentationGraphiqueDeLaCarte: string;
        libelleLongDuVisuelDeLaCarte: string;
        codeDuModeDEnvoiDeLaCarteAEcheanceBis: string;
        numeroDuContratTAP: number;
        identifiantDuContratCEFI: string;
        numeroDeDossierCredit: string;
        codeDuMotifDeCommandeAEcheance: string;
        codeVisuelAEcheance: string;
        libelleLongTypeEDS: string;
        libelleCalculeCourtEDSBis: string;
        historiqueDesCartesTEOZ: Array<ICarteTEOZ>;
        codeRegionMonde: string;
        numeroDuContratCarteEnInstance: number;
        date: Date;
        codeEtablissement: string;
        codeGuichet: string;
        identifiantElementStructure: number;
        identifiantElementStructureBis: number;
        designationElementStructure: string;
        designationAgentInterne: string;
        motifCommande: string;
    }
    interface ICommandeDeLaCarte {
        dateDeRetourDeLaCommande: Date;
        dateDeLaCommandeDeLaCarte: Date;
        codeDuMotifDeLaCommande: string;
        libelleDuMotifDeLaCommande: string;
    }
    interface IOppositionSurLaCarte {
        codeDuMotifDOpposition: string;
        libelleDuMotifDOpposition: string;
        dateDeDebutDEffetDeLOpposition: Date;
        dateDOpposition: Date;
        dateDeclarationOppositionCarte: Date;
        heureDeclarationOppositionCarte: number;
        numeroAutorisationOpposition: number;
        dateDeConfirmationOppposition: Date;
        codeLieuDeclarationOppositionCarte: string;
        dateMainLeveeOppositionCarte: Date;
        dateCreationOppositionPreAbusif: Date;
        dateDeMiseEnLeveeDePreAbusif: Date;
        dateDemandeDeclarationBDF: Date;
        dateDeclarationBDFOppositionCompte: Date;
        dateDemandeLeveeBDFOppositionCpte: Date;
        dateLeveeBDFOppositionCompte: Date;
        codeMotifOpposition: number;
        nombreDeJoursDepuisCreationPreAbusif: number;
    }
    interface IRecuperationDeLaCarte {
        codeDuMotifDeRecuperationDeLaCarte: string;
        libelleDuMotifDeRecuperationDeLaCarte: string;
        codeDuLieuDeRecuperationDeLaCarte: string;
        libelleDuLieuDeRecuperationDeLaCarte: string;
        dateDeRecuperationDeLaCarte: Date;
        codeDuModeDEnvoiDeLaCarte: string;
        codeDuModeDeDistributionDeLaCarte: string;
    }
    interface IPlafondDeLaCarte {
        periodeDesPlafondsDePaiements: number;
        plafondDActiviteDeLaFonctionDeBase: number;
        montantDesAutorisationsHorsRetrait: number;
        montantResiduelDesAutorisationsHorsRetrait: number;
        periodeDesPlafondsDeRetraits: number;
        montantResiduelDesAutorisationsPourLesRetraits: number;
        montantDesAutorisationsPourLesRetraits: number;
    }
    interface ISituationDeLaCarte {
        codeDeSituationDeLaCarte: string;
        libelleDeLaSituationDeLaCarte: string;
        codeDuStatutDeLaCarte: string;
        libelleDuStatutDeLaCarte: string;
        dateDeDerniereSituationDeLaCarte: Date;
        codeDeLEtatDUneCarteDuStock: string;
        libelleDeLEtatDUneCarteDuStock: string;
    }
    interface IUtilisateurDeLaCarte {
        premierePersonneEnRelation: number;
        codeCiviliteDeLaPersonnePhysique: string;
        nomDeFamilleDeLaPersonnePhysique: string;
        nomDUsageDeLaPersonnePhysique: string;
        premierPrenomDeLEtatCivilDeLaPersonne: string;
        tiersDeConfiance: string;
        codeDuRoleDuPorteurSurLaReserve: string;
        designationCourte: string;
    }
    interface ICarteDuContratCarte {
        numeroDuContratCarte: number;
        utilisateur: IUtilisateurDeLaCarte;
        plafond: IPlafondDeLaCarte;
        situation: ISituationDeLaCarte;
        recuperation: IRecuperationDeLaCarte;
        opposition: IOppositionSurLaCarte;
        commande: ICommandeDeLaCarte;
        identifiantDuSupportDeCarte: string;
        codeVisuelDuSupportDeCarte: string;
        libelleLongDuVisuelDeLaCarte: string;
        faconnierDeLaPuce: string;
        dateDeDebutDeValiditeDeLaCarte: number;
        dateDeFinDeValiditeDeLaCarte: number;
        dateDeRemiseEnClientele: Date;
        nomDuPersonnalisateurDeCarte: string;
        codeDuProduitCarte: string;
        numeroDeSerieDeLaCarteEnCours: string;
        referenceDeLAncienneCarte: string;
        identifiantDuSupportDeCartePourCodeReconduit: string;
        indicateurDActivationDeLaCarte: string;
        dateDActivationDeLaCarte: Date;
        indicateurDEtatDeLaCarteDeRemplacement: string;
        identifiantElementDeStructureDeDistribution: number;
        libelleConstruitDuTypeEDS: string;
        dateDeReeditionDuCodeSecret: Date;
        codeActivationDeLOptionMoneo: string;
        dateDeChargementPegasus: Date;
        referenceOTA: string;
        indicateurDe2emeAppelIzicefi: string;
        dateDeDebutDeLaPeriode: Date;
        libelleDuTypeDeCarte: string;
        referenceDeLaPuce: string;
        identifiantDeRemplacementPourUneCarteVisa1er: string;
        dateExpirationCarte: Date;
        deplacements: Array<IDeplacement>;
    }
    interface IOptionDuContratCarte {
        codeDuNiveauDeServiceDuContratCarte: string;
        codeDeModaliteDeTarificationDuContratCarte: number;
        codeActivationECarteBleue: string;
        codeEtatDuServiceECarteBleue: string;
        codeDuNiveauDeGamme: string;
        typeDeDebitLorsDuPaiementParCarte: string;
        codeActivationDeLOptionMoneo: string;
        indicateurDeSouscriptionIzicarte: string;
    }
    interface IServiceDerogatoireDuContratCarte {
        codeDuNiveauDeServiceDerogatoireDuContratCarte: string;
        dateDeDebutDEffetDuNiveauDeServiceDerogatoire: Date;
        dateDeFinDEffetDuNiveauDeServiceDerogatoire: Date;
        indicateurDeTarificationNSD: string;
    }
    interface IProprietaireDuContratCarte {
        identifiantDeLaPersonne: number;
        premierePersonneEnRelation: number;
        identifiantPersonneDuRepresentantLegal: number;
        codeDuTypeDeLienInterPersonnes: string;
        indicateurDuNomDeJeuneFille: string;
        nomPatrinomyqueOuRaisonSociale: string;
        numeroDuTelephonePortableDuClient: string;
        referenceDeLOperateurTelephonique: string;
        identifiantDuClientChezLOperateur: string;
        designationCourte: string;
        codeDuTypeDeLien: string;
        codeDActionDeLIdentiteDuPorteur: string;
        nomDuBeneficiaire: string;
        dateNaissancePersonnePhysique: Date;
    }
    interface IInformationComplementaire {
        dateDeGratuiteDuPremierVisuel: Date;
        nombreOccurenceQuestionServeur: number;
        nombreOccurenceReponseFonction: number;
        montantOperation: number;
        designationLongueAgentInterne: string;
    }
    interface ICarteTEOZ {
        nuneroCarteRevolving: string;
        referenceInternePersonneContrat: string;
        dateDeReceptionTEOZ: Date;
        dateDeValiditeCarte: Date;
        nomEtPrenom: string;
        dateRecepAccuseFabricationTEOZ: Date;
        numeroDeLotCommandeDeCartes: number;
        alphanumeriqueBanalisee040: string;
        codeEtatDUneCarteTEOZ: string;
        libelleDeDestruction: string;
        lieuDeProvenanceDeLaCarte: string;
        lieuDeDestinationDeLaCarte: string;
    }
    interface IDeplacement {
        dateDebutEffetPorteurDeplacement: Date;
        dateFinEffetPorteurDeplacement: Date;
    }
}

declare module ComposantsCommunsSolPro.Modeles.ContratBqdPro.EntiteTitulaire {
    interface IInformationEntiteTitulaire {
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
        listePersonneMandataire: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne  V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *  - 1 Usage privé
         *  - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         *  - 1 mode simple
         *  - 2 mode joint entre époux
         *  - 3 mode joint entre tiers
         *  - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         *  - 0 Actif
         *  - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateMAJEntiteTitulaire: string;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         *  - ' ' Non clôturé
         *  - '1' Plus d'activité bancaire
         *  - '2' Décédé
         *  - '3' Transféré
         *  - '4' Incident
         *  - '5' Indésirable
         *  - '6' Séparé
         *  - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        /**
         * Date de fermeture de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateClotureEntiteTitulaire: string;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         *  - 1 Mode indivision successorale
         *  - 2 Mode indivision conventionnel avec solidarité
         *  - 3 Mode indivision conventionnel sans solidarité
         */
        sousCodeModeCompositionET: string;
        /**
         * Numéro d'identification de l' agent de gestion de l'entité titulaire.
         */
        codeAgentGestionEntiteTitulaire: number;
        /**
         * Libellé de l'EDS de Gestion de l'entité titulaire.
         */
        libelleEDSGestionEntiteTitulaire: string;
        /**
         * Libellé associé au Code Etat de l'entité titulaire.
         */
        libelleEtatEntiteTitulaire: string;
        /**
         * Libellé associé au Type de désignation de l'entité titulaire.
         */
        libelleTypeDesignationEntiteTitulaire: string;
        /**
         * Libellé associé au Code usage de l"entité titulaire.
         */
        libelleUsageEntiteTitulaire: string;
        /**
         * Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        /**
         * Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        /**
         * Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique.
         */
        identifiantAdresseEntiteTitulaire: number;
        /**
         * Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        /**
         * Référence externe du Géré par = EDS de gestion de l'entité titulaire
         */
        refExterneEDSGestionET: number;
        /**
         * Référence externe du Domicilié à = EDS de domiciliation de l'entité titulaire
         */
        refExterneEDSDomiciliationET: number;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire, du mode de composition et de l'usage.
         * Valeurs :
         *  * POUR ET MODE SIMPLE
         *  11 Désignation de la personne
         *  * POUR ET A USAGE PROFESSIONNEL
         *  21 Nom commercial
         *  22 Désignation courte de l'établissement
         *  23 Enseigne commerciale de l'établissement
         *  * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         *  PRIVE
         *  31 Mr ou Mme+nom patronymique Mr+prénom Mr
         *  32 Mr ou Mme+nom patronymique Mr+nom
         *  patronymique Mme+prénom Mme
         *  * POUR ET MODE JOINT ET USAGE PRIVE
         *  41 Désignation personne 1 ou désignation
         *  personne 2
         *  42 Désignation personne 2 ou désignation
         *  personne 1
         *
         *  99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
        /**
         * Type élément structure
         */
        typeElementStructure: string;
        /**
         * Nouvelle identifiant élement de structure gestion de l'entité titulaire
         */
        identEDSGestionETNouveau: number;
        /**
         * Nouvelle identifiant élement de structure domicilation de l'entité titulaire
         */
        identEDSDomiciliationETNouveau: number;
        /**
         * identifiant élement de structure du guichet de l'entité titulaire
         */
        identifiantEDSGuichet: number;
    }
    interface IPersonneEntiteTitulaire {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe BPCE.
         * Numéro chrono attribué par le système.
         * Une personne morale est enregistrée sous une seule activité : valeur 1.
         * Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono.
         * Un professionnel est référencé dans le SI d'un Etablissement du Groupe BPCE par :
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         * Constitue une référence unique dans MYSYS.
         */
        identifiantProfessionnel: number;
        /**
         * Numéro d'identification du lieu d'activité d'un
         * professionnel dans le SI d'un Etablissement du Groupe BPCE.
         * Implantation d'une activité d'un professionnel.
         * Peut correspondre à un établissement au sens INSEE.
         * Numéro chrono attribué par le système.
         * Identification du lieu :
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         *  - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Dénomination commerciale se rapportant à un fonds
         * de commerce exploité par une société ou assimilée
         * Nom commercial du professionnel. C'est la dénomination vis à vis de la clientèle. Elle peut correspondre à l'enseigne. Une société peut avoir un nom commercial différent pour chacun des fonds de commerce qu'elle exploite.
         * Exemples :  La Samaritaine, But ...
         */
        nomCommercialProfessionnel: string;
        /**
         * Enseigne du lieu d'activité d'un professionnel.
         * Signe/marque/appellation apposé sur un établissement commercial le distinguant des autres établissements. L'enseigne peut être commune.
         * Elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         * Exemple : Café du Commerce
         */
        enseigneCommercialeLieuActivite: string;
        /**
         * Libellé court du lieu d'activité du Professionnel.
         */
        designationCourteLieuActivite: string;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         *  - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         *  - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
         * Valeurs :
         * '0' non responsable
         * '1' responsable
         */
        indicateurResponsableCompteET: string;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire.
         * Numéro chrono attribué par le système à chaque création de personne dans l'ET.
         */
        codeRangEntiteTitulaire: string;
        /**
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         *  - Désignation courte du particulier si personne physique
         *  - Nom commercial si professionnel
         *  - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationTiers: string;
        /**
         * Indique quelle est la nature du lien Personne / Entité titulaire.
         * Valeurs :
         * PE : Lien Entité Titulaire / Personne
         * PR : Lien Entité Titulaire / Professionnel
         * LA : Lien Entité Titulaire / Lieu d'activité
         */
        natureLienET: string;
        /**
         * Pourcentage de Nue Propriété (valeur max 100,00 %)
         */
        pourcentageNuePropriete: number;
        /**
         * Pourcentage de pleine propriété (valeur max 100,00 %)
         */
        pourcentagePleinePropriete: number;
        /**
         * Pourcentage d'usufruit (valeur max 100,00 %)
         */
        pourcentageUsufruit: number;
        /**
         * Personne titulaire à qui on a affecté l'adresse de l'entité titulaire. (Notion non applicable aux usufruitiers).
         */
        indicateurAffectationAdresse: boolean;
        /**
         * Le type de mandat permet d'enregistrer une
         * procuration qu'accorde un client sur tout
         * ou partie de ses comptes à une autre personne.
         *
         *            Valeurs :
         * 'G'        Procuration générale (sauf CDD,cpte titre,coffre)
         *            On donne procuration sur tous les comptes
         *            de la personne.
         * 'P'        Procuration générale par compte
         *            On donne procuration sur un compte
         *            en disposition
         * 'PS'       Procuration spéciale d'administration
         *            On donne le droit de gérer le compte, mais
         *            pas d'en bénéficier.
         * 'K'        Procuration spéciale porteur de carte pro
         *            On donne procuration sur les comptes support
         *            pour détention de carte
         */
        typeMandat: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/entitetitulaireservice/v2/intervenantEntiteTit"
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsSolPro.Modeles.EntiteTitulaireService.IntervenantEntiteTit {
    interface IIntervenantEntiteTitServiceGetQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantEntiteTitulaire: number;
        codeGuichet: string;
        codeTypeProduitService: string;
        codeProduitService: string;
        incideRechercheIdentifiantBAD: string;
    }
    interface IPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        indiceResponsableET: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLiensInterPersonnes: string;
        numeroRangPersonneET: string;
        identifiantEntiteTitulaire: number;
        codeTypePersonne: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        dateFin: string;
        dateDebut: string;
        informationPersonneMoral: IInformationPersonneMoral;
        informationPersonnePhysique: IInformationPersonnePhysique;
        ligne2adresse: string;
        ligne3adresse: string;
        ligne4adresse: string;
        ligne5adresse: string;
        ligne6adresse: string;
        numeroTelephoneAdresse: string;
        identifiantClient: string;
    }
    interface IIntervenantEntiteTit {
        listPersonne: Array<IPersonne>;
    }
    interface IInformationPersonneMoral {
        raisonSocial: string;
    }
    interface IInformationPersonnePhysique {
        nomFamille: string;
        nomUsage: string;
        prenom: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeMandat: string;
        nomLocaliteINSEE: string;
        libelleNationalitePays: string;
        numeroTelephoneCorrespondance: string;
        codeTypeRegimeMatrimonial: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tiers/v2/media"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSolPro.Modeles.Tiers.Media {
    interface IMediaServiceGetQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IMedia {
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IListeMedia {
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: boolean;
        referenceAccesMedia: string;
        indicateurOptin: boolean;
        commentaire: string;
        indicatifTelephone: string;
        indicateurSecu: boolean;
        indicateurProOptout: boolean;
        indicateurSmsFax: boolean;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/porteurSolPro"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSolPro.Modeles.ContratBqdPro.PorteurSolPro {
    interface IPorteurSolProServiceGetQuery {
        typeSelection: string;
        codeEtablissement: string;
        identifiantClient: string;
        typeEnrolement: string;
        typeTraitement: string;
        identifiantPersonne: number;
    }
    interface IPorteurSolPro {
        porteurService: Array<IPorteurService>;
    }
    interface IPorteurService {
        identifiantPersonne: number;
        identifiantClient: string;
        dateEnrolement: Date;
        designation: string;
        codeEtatEnrolement: string;
        codeEtatEdition: string;
        codeModeDistributionLecteur: string;
        codeMessageErreurSac: string;
        nomFamille: string;
        codeCivilite: string;
        nomUsage: string;
        dateNaissance: Date;
        premierPrenomEtatCivil: string;
        canalCreationEnrolement: string;
        indicateurPriseCompteProvision: string;
        dateResiliationEnrolement: Date;
        telephoneGsm: string;
        numeroCarte: string;
        datedebutValiditeLecteur: Date;
        dateFinValiditeLecteur: Date;
        numeroSerieLecteur: string;
        dateCommandeLecteur: Date;
        codeEtatCommande: string;
        dateDemandeEnrolement: Date;
        dateTraitementCourrier: Date;
        codeProduitCarte: string;
        dateModifMoyenAuthentification: Date;
        numeroContratCarte: number;
        indicateurCartePartagee: string;
    }
    interface IActionPorteur {
        identifiantClient: string;
        codeTypeEnrolement: string;
        codeActionMaj: string;
        codeActionEnrolement: string;
        numeroTelephone: string;
        codeClientEquipeLecteur: string;
        codeEtatCommandeLecteur: string;
        codeCommandeLecteur: string;
        referenceExterneAgent: number;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant l'application sol pro cap
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsSolPro.Modeles.ContratBqdPro.SolProCap {
    interface IParametresGgho {
        numeroPersonneDetentrice: number;
        codeEtablissementContrat: string;
        codeGuichetContrat: string;
        codeTypeProduitServiceContrat: string;
        referenceProduitServiceContrat: string;
        codeProduitService: number;
        codeActeGestion: string;
    }
    interface IDonneesContexte {
        codeCaisse: string;
        numeroComtpeSupport: string;
        numeroCarte: string;
        typeDeVente: string;
        identifiantPersonne: string;
        identifiantEntiteTitulaire: number;
        codeGuichetInterbancaire: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/solPro"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSolPro.Modeles.ContratBqdPro.SolPro {
    interface ISolProServiceGetQuery {
        codeEtablissement: string;
        identifiantClient: string;
        codeTypeEnrolement: string;
        codeAction: string;
    }
    interface IPorteur {
        designation: string;
        codeModeDistributionLecteurCAP: string;
        codeRolePorteurReserveCredit: string;
        identifiantProduitService: number;
        numeroOffreSouscrite: number;
        codeEtablissement: string;
        codeTypeEnrolement: string;
        identifiantClient: string;
        identifiantTiersTitulaire: number;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class AdressePorteurCarteService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.TiersService.AdressePorteurCarte.IAdressePorteurCarteServiceGetQuery): ng.IPromise<Modeles.TiersService.AdressePorteurCarte.IAdressePorteurCarte>;
    }
    interface IAdressePorteurCarteService {
        getRequest: (query: Modeles.TiersService.AdressePorteurCarte.IAdressePorteurCarteServiceGetQuery) => ng.IPromise<Modeles.TiersService.AdressePorteurCarte.IAdressePorteurCarte>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class AdresseService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.Tiers.Adresse.IAdresseServiceGetQuery): ng.IPromise<Array<Modeles.Tiers.Adresse.IAdresse>>;
    }
    interface IAdresseService {
        getRequest: (query: Modeles.Tiers.Adresse.IAdresseServiceGetQuery) => ng.IPromise<Array<Modeles.Tiers.Adresse.IAdresse>>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class CartePartageeService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.ContratBqdPro.CartePartagee.ICartePartageeServiceGetQuery): ng.IPromise<Modeles.ContratBqdPro.CartePartagee.ICartePartagee>;
        postRequest(query: Modeles.ContratBqdPro.CartePartagee.ICartePartagee): ng.IPromise<Modeles.ContratBqdPro.CartePartagee.ICartePartagee>;
        putRequest(query: Modeles.ContratBqdPro.CartePartagee.ICartePartagee): ng.IPromise<Modeles.ContratBqdPro.CartePartagee.ICartePartagee>;
    }
    interface ICartePartageeService {
        getRequest: (query: Modeles.ContratBqdPro.CartePartagee.ICartePartageeServiceGetQuery) => ng.IPromise<Modeles.ContratBqdPro.CartePartagee.ICartePartagee>;
        postRequest: (query: Modeles.ContratBqdPro.CartePartagee.ICartePartagee) => ng.IPromise<Modeles.ContratBqdPro.CartePartagee.ICartePartagee>;
        putRequest: (query: Modeles.ContratBqdPro.CartePartagee.ICartePartagee) => ng.IPromise<Modeles.ContratBqdPro.CartePartagee.ICartePartagee>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class CompteSupSecuraccesService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.ContratBqdPro.CompteSupSecuracces.ICompteSupSecuraccesServiceGetQuery): ng.IPromise<Modeles.ContratBqdPro.CompteSupSecuracces.ICompteCCE[]>;
        getRequestAvecRecherche(query: Modeles.ContratBqdPro.CompteSupSecuracces.ICompteSupSecuraccesServiceGetQuery): ng.IPromise<Modeles.ContratBqdPro.CompteSupSecuracces.ICompteCCE[]>;
    }
    interface ICompteSupSecuraccesService {
        getRequest: (query: Modeles.ContratBqdPro.CompteSupSecuracces.ICompteSupSecuraccesServiceGetQuery) => ng.IPromise<Modeles.ContratBqdPro.CompteSupSecuracces.ICompteCCE[]>;
        getRequestAvecRecherche: (query: Modeles.ContratBqdPro.CompteSupSecuracces.ICompteSupSecuraccesServiceGetQuery) => ng.IPromise<Modeles.ContratBqdPro.CompteSupSecuracces.ICompteCCE[]>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class ContratCarteRechercheSolProService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.ContratCarte.Recherche.IContratCarteRechercheServiceGetQuery): ng.IPromise<Modeles.ContratCarte.Recherche.IRecherche>;
    }
    interface IContratCarteRechercheSolProService {
        getRequest: (query: Modeles.ContratCarte.Recherche.IContratCarteRechercheServiceGetQuery) => ng.IPromise<Modeles.ContratCarte.Recherche.IRecherche>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IInfoEntiteQuery {
        codeEtablissement: string;
        /**
         *  Numéro d'identification d'un client détenteur de contrat(s) de produit / service dans le SI d'un établissement de BPCE.
         *  Synonyme : Client bancaire Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
    }
    /**
     * Déclaration du service
     */
    class InformationEntiteTitulaireService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: IInfoEntiteQuery): ng.IPromise<Modeles.ContratBqdPro.EntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class IntervenantEntiteTitService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.EntiteTitulaireService.IntervenantEntiteTit.IIntervenantEntiteTitServiceGetQuery): ng.IPromise<Modeles.EntiteTitulaireService.IntervenantEntiteTit.IIntervenantEntiteTit>;
    }
    interface IIntervenantEntiteTitService {
        getRequest: (query: Modeles.EntiteTitulaireService.IntervenantEntiteTit.IIntervenantEntiteTitServiceGetQuery) => ng.IPromise<Modeles.EntiteTitulaireService.IntervenantEntiteTit.IIntervenantEntiteTit>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class MainService {
        private serviceAgent;
        private qService;
        private infoEntiteTitulaireService;
        static $inject: string[];
        donneesContexte: ComposantsCommunsSolPro.Modeles.ContratBqdPro.SolProCap.IDonneesContexte;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        static CODE_USAGE_ENTITE_PRO: string;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        codeEtablissement: string;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService, infoEntiteTitulaireService: Services.InformationEntiteTitulaireService);
        isEntiteTitulairePro(identifiantEntite: number, codeEtablissementContrat: string): ng.IPromise<boolean>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class MediaService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.Tiers.Media.IMediaServiceGetQuery): ng.IPromise<Modeles.Tiers.Media.IMedia>;
    }
    interface IMediaService {
        getRequest: (query: Modeles.Tiers.Media.IMediaServiceGetQuery) => ng.IPromise<Modeles.Tiers.Media.IMedia>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class PorteurSolProService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolProServiceGetQuery): ng.IPromise<Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro>;
        putRequest(query: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur): ng.IPromise<Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro>;
        putRequestSansGestionErreur(query: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur): ng.IPromise<Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro>;
        postRequest(query: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur): ng.IPromise<Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro>;
        deleteRequest(query: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur): ng.IPromise<any>;
    }
    interface IPorteurSolProService {
        getRequest: (query: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolProServiceGetQuery) => ng.IPromise<Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro>;
        putRequest: (query: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur) => ng.IPromise<Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro>;
        putRequestSansGestionErreur: (query: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur) => ng.IPromise<Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro>;
        postRequest: (query: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur) => ng.IPromise<Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro>;
        deleteRequest: (query: Modeles.ContratBqdPro.PorteurSolPro.IActionPorteur) => ng.IPromise<any>;
    }
}

declare module ComposantsCommunsSolPro.Services {
    class SolProService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.ContratBqdPro.SolPro.ISolProServiceGetQuery): ng.IPromise<Modeles.ContratBqdPro.SolPro.IPorteur[]>;
        putRequest(query: Modeles.ContratBqdPro.SolPro.IPorteur): ng.IPromise<Modeles.ContratBqdPro.SolPro.IPorteur>;
        postRequest(query: Modeles.ContratBqdPro.SolPro.IPorteur): ng.IPromise<Modeles.ContratBqdPro.SolPro.IPorteur>;
        deleteRequest(query: Modeles.ContratBqdPro.SolPro.IPorteur): ng.IPromise<any>;
        supprimerPorteursSecurpassROA(codeEtablissement: string, identifiantClient: string, numeroOffreSouscrite: number): ng.IPromise<any>;
    }
    interface ISolProService {
        getRequest: (query: Modeles.ContratBqdPro.SolPro.ISolProServiceGetQuery) => ng.IPromise<Modeles.ContratBqdPro.SolPro.IPorteur[]>;
        putRequest: (query: Modeles.ContratBqdPro.SolPro.IPorteur) => ng.IPromise<Modeles.ContratBqdPro.SolPro.IPorteur>;
        postRequest: (query: Modeles.ContratBqdPro.SolPro.IPorteur) => ng.IPromise<Modeles.ContratBqdPro.SolPro.IPorteur>;
        deleteRequest: (query: Modeles.ContratBqdPro.SolPro.IPorteur) => ng.IPromise<any>;
        supprimerPorteursSecurpassROA: (codeEtablissement: string, identifiantClient: string, numeroOffreSouscrite: number) => ng.IPromise<any>;
    }
}

/**
 * Contrôleur de la directive mw-erreur-sol-pro
 * @author S0080162 (François GALOPIN
 */
declare module ComposantsCommunsSolPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwErreurSolProControleur {
        static $inject: any[];
        mwErreur: MyWay.Services.Erreur;
        constructor();
    }
}

declare module ComposantsCommunsSolPro.Directives {
    function mwErreurSolPro(): ng.IDirective;
}

declare module ComposantsCommunsSolPro.Controleurs {
    class PorteurCapControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private porteurSolProService;
        private modalService;
        private cartePartageeService;
        private mwNotificationService;
        private compteSupSecuraccesService;
        static $inject: string[];
        typeCarteSolPro: ComposantsCommunsSolPro.Enumerations.TypeCarteSolPro;
        codeActionServiceSolPro: Enumerations.CodeActionServiceSolPro;
        codeEtatBlocPorteur: Enumerations.CodeEtatBlocPorteur;
        codeEtablissement: string;
        identifiantClient: string;
        identifiantPersonne: number;
        listePorteurs: any[];
        listePorteursDisponibles: any[];
        listeComptesSupports: any[];
        indicateurMaxCompte: boolean;
        referenceExterneAgent: number;
        boutonAnnulerActif: boolean;
        boutonSupprimerActif: boolean;
        estPartageable: boolean;
        idBloc: string;
        porteurChoisi: any;
        compteSupportChoisi: any;
        codeActionServiceSolProAvenant: Enumerations.CodeActionServiceSolPro;
        retourIframe: any;
        libelleCarte: string;
        numeroCompteDeRecherche: string;
        indicateurBoutonRechercherDesactive: boolean;
        identifiantTiers: number;
        indicateurChargementRechercheCompteSupport: boolean;
        indicateurMaxComptePorteur: boolean;
        porteurSolProServicePostReponse: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro;
        porteurSolProServicePostErreur: MyWay.Services.Erreur;
        indicateurPorteurSolProServicePostEnCours: boolean;
        indicateurRecherchePorteurSolProServicePost: boolean;
        indicateurSuccesPorteurSolProServicePost: boolean;
        indicateurSuccesPorteurSolProServicePostNull: boolean;
        porteurSolProServicePutReponse: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro;
        porteurSolProServicePutErreur: MyWay.Services.Erreur;
        indicateurPorteurSolProServicePutEnCours: boolean;
        indicateurRecherchePorteurSolProServicePut: boolean;
        indicateurSuccesPorteurSolProServicePut: boolean;
        indicateurSuccesPorteurSolProServicePutNull: boolean;
        indicateurChangementEtatEnrolement: boolean;
        mode: number;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, porteurSolProService: Services.IPorteurSolProService, modalService: MyWay.UI.IModalService, cartePartageeService: Services.ICartePartageeService, mwNotificationService: MyWay.UI.IMwNotificationService, compteSupSecuraccesService: Services.ICompteSupSecuraccesService);
        recupererLibelleCarte(): void;
        mettreEnFormeAffichagePorteur(codeEtatBlocPorteur: Enumerations.CodeEtatBlocPorteur): void;
        construireListePorteursDisponibles(): void;
        annulerAjoutPorteur(porteurSelected: any): void;
        selectionnerPorteur(porteurSelected: any): void;
        annulerSelectionPorteur(porteurSelected: any): void;
        modifierCaseCarteAcces(porteurSelected: any): void;
        enregistrerPorteur(porteurSelected: any): void;
        private traitementEnregistrerPorteur();
        supprimerPorteur(porteurSelected: any): void;
        gererPartage(): void;
        private supprimerPorteurPartageable();
        private supprimerPorteurEligible();
        private supprimerPorteurSolPro();
        consulterCartes(): void;
        /**
         * Méthode permettant de bloquer un porteur
         */
        bloquerPorteur(): void;
        /**
         * Méthode permettant de débloquer un porteur
         */
        debloquerPorteur(): void;
        /**
         * Méthode permettant de modifier l'état de l'enrolement
         */
        private modifierEtatEnrolement(codeAction);
        /**
         * Méthode permettant de savoir s'il faut afficher la date de création ou non
         * @return {boolean}
         */
        afficherDateCreation(): boolean;
        /**
         * Méthode permettant de savoir s'il faut afficher le bouton gerer partage ou non
         * @return {boolean}
         */
        afficherBoutonGererPartage(): boolean;
        /**
         * Méthode permettant de savoir s'il faut afficher les blocs qui ne sont pas des consultations ou des gestions
         * @return {boolean}
         */
        afficherBlocNonConsultationEtGestion(): boolean;
        /**
         * Méthode permettant de changer de mode
         * @return {void}
         */
        changerMode(currentMode: number): void;
        /**
         * Méthode permettant d'ouvrir la modale de gestion de lecteur CAP
         * @return void
         */
        gererLecteurCap(): void;
        /**
         * Méthode permettant d'ouvrir la modale de gestion de la carte Secur@ccess
         * @return void
         */
        gererCarteSecurAccess(): void;
        /**
         * Méthode appelé lorsque l'utilisateur modifie le numéro de compte de recherche
         * @return void
         */
        numeroCompteRechercheChange(): void;
        /**
         * Méthode permettant de rechercher les comptes supports
         * @return void
         */
        rechercherComptesSupports(): void;
        /**
         * Méthode permettant d'effacer la recherche d'un compte support carte
         * @return void
         */
        effacerRecherche(): void;
    }
}

declare module ComposantsCommunsSolPro.Directives {
    function mwPorteurCap(): ng.IDirective;
}

declare module ComposantsCommunsSolPro.Controleurs {
    class PorteurSmsControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private porteurSolProService;
        private modalService;
        private adresseService;
        private mediaService;
        private mwNotificationService;
        static $inject: string[];
        codeActionServiceSolPro: Enumerations.CodeActionServiceSolPro;
        codeEtatBlocPorteur: Enumerations.CodeEtatBlocPorteur;
        codeEtablissement: string;
        identifiantClient: string;
        identifiantPersonne: number;
        listePorteurs: any[];
        listePorteursDisponibles: any[];
        referenceExterneAgent: number;
        boutonAnnulerActif: boolean;
        boutonSupprimerActif: boolean;
        porteurChoisi: any;
        messageErreurPorteur: string;
        retourIframe: any;
        porteurSolProServicePostReponse: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro;
        porteurSolProServicePostErreur: MyWay.Services.Erreur;
        indicateurPorteurSolProServicePostEnCours: boolean;
        indicateurRecherchePorteurSolProServicePost: boolean;
        indicateurSuccesPorteurSolProServicePost: boolean;
        indicateurSuccesPorteurSolProServicePostNull: boolean;
        porteurSolProServicePutReponse: Modeles.ContratBqdPro.PorteurSolPro.IPorteurSolPro;
        porteurSolProServicePutErreur: MyWay.Services.Erreur;
        indicateurPorteurSolProServicePutEnCours: boolean;
        indicateurRecherchePorteurSolProServicePut: boolean;
        indicateurSuccesPorteurSolProServicePut: boolean;
        indicateurSuccesPorteurSolProServicePutNull: boolean;
        indicateurChangementEtatEnrolement: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, porteurSolProService: Services.IPorteurSolProService, modalService: MyWay.UI.IModalService, adresseService: ComposantsCommunsSolPro.Services.IAdresseService, mediaService: ComposantsCommunsSolPro.Services.IMediaService, mwNotificationService: MyWay.UI.IMwNotificationService);
        mettreEnFormeAffichagePorteur(codeEtatBlocPorteur: Enumerations.CodeEtatBlocPorteur): void;
        construireListePorteursDisponibles(): void;
        annulerAjoutPorteur(porteurSelected: any): void;
        selectionnerPorteur(porteurSelected: any): void;
        annulerSelectionPorteur(porteurSelected: any): void;
        enregistrerPorteur(porteurSelected: any): void;
        supprimerPorteur(porteurSelected: any): void;
        mettreAJourCoordonnees(porteurSelected: any): void;
        /**
         * Méthode pour récupérer l'adresse des porteurs éligibles au service SOL PRO SMS
         */
        private recupererAdressePorteur(porteur);
        /**
         * Méthode pour récupérer le téléphone des porteurs éligibles au service SOL PRO SMS
         */
        private recupererTelephonePorteur(porteur);
        /**
         * Méthode permettant de bloquer un porteur
         */
        bloquerPorteur(): void;
        /**
         * Méthode permettant de débloquer un porteur
         */
        debloquerPorteur(): void;
        /**
         * Méthode permettant de modifier l'état de l'enrolement
         */
        private modifierEtatEnrolement(codeAction);
        /**
         * Méthode permettant de savoir s'il faut afficher les blocs qui ne sont pas des consultations ou des gestions
         * @return {boolean}
         */
        afficherBlocNonConsultationEtGestion(): boolean;
    }
}

declare module ComposantsCommunsSolPro.Directives {
    function mwPorteurSms(): ng.IDirective;
}
