
declare module EpsCommun.Constantes {
    module CodeEtatOuverture {
        const OUVERT: string;
        const FERMER: string;
    }
    module CodeActivite {
        /** 08 */
        const ENTREPRISE: string;
        /** 04 */
        const PERSONNEL: string;
        /** [08,88] */
        const ENTREPRISES: string[];
        /** 02 */
        const TECHNIQUE: string;
    }
    module CompteFacturation {
        module TitulaireCompte {
            const COMPTE_INTERNE: string;
        }
        module CompteInterne {
            const INVALIDE: string;
            const NON_EXISTANT: string;
            const CODE_ETABLISSEMENT_INCOMPATIBLE: string;
            const VALIDE: string;
        }
    }
    module Filtre {
        const ORDER_BY: string;
        module Critere {
            const DATE_OUVERTURE_ADMINISTRATIVE_CONTRAT: string;
        }
    }
    module CodeNatureEligibleFacturation {
        module Compte {
            const COURANT: string;
            const DEPOT_PROFESSIONNEL: string;
            const PROMOTION_IMMOBILIERE: string;
            const COMPTE_PRET_A_IMPACT: string;
            const ELIGIBLE: string[];
        }
    }
    module IndicateurRestitutionComptes {
        const COMPTES_CLOS_ET_ACTIFS: string;
        const COMPTES_ACTIFS_UNIQUEMENT: string;
    }
    module Inject {
        module Angular {
            const $Q: string;
            const $FILTER: string;
            const $TIME_OUT: string;
        }
        module MyWay {
            const SERVICE_AGENT_EXTENDED: string;
            const MODAL_SERVICE: string;
            const MODAL_INSTANCE: string;
            const MW_NOTIFICATION_SERVICE: string;
        }
        module Services {
            const CONTRAT_SERVICE: string;
            const RECHERCHE_ENGAGEMENT_GLOBAL_SERVICE: string;
            const POPUP_SERVICE: string;
            const RETOUR_QR_SERVICE: string;
            const ENTITE_TITULAIRE_SERVICE: string;
            const CONTENTIEUX_SERVICE: string;
            const OPPOSITION_SERVICE: string;
            const TIERS_SERVICE: string;
            const INFORMATIONS_ENTITE_TITULAIRE_SERVICE: string;
        }
        module Modale {
            const DATA: string;
        }
    }
    module Modal {
        module Size {
            const MEDIUM: string;
            const LARGE: string;
        }
        module Titre {
            const DEMANDE_DE_CONFIRMATION: string;
            const ERREUR_TRAITEMENT: string;
        }
        module BtnAction {
            const VALIDER: string;
            const ANNULER: string;
        }
    }
    module Date {
        module Format {
            /** 0001-01-01 */
            const EMPTY: string;
            /** DD/MM/YYYY */
            const IHM: string;
            /** YYYY-MM-DD */
            const REST: string;
            /** YYYY-MM-DDTHH:mm:ss.SSSZZ */
            const REST_TIME_ZONE: string;
        }
    }
    module IdentifiantFamilleEps {
        module Code {
            const F01: string;
            const F02: string;
        }
    }
    module ReglesDateButoir {
        module Code {
            const NON: string;
            const FIN_TRAVAUX: string;
            const DEBUT: string;
        }
    }
}

declare module EpsCommun {
    var app: any;
}

declare module EpsCommun.Constantes.CadreFinancement {
    module CodeSupportRecouvrement {
        /** M */
        const EPS_POOL_PARTICIPANT: string;
    }
}

declare module EpsCommun.Constantes.ModeReglement {
    module CodeDomaineExecutionReglement {
        const REGROUPER: string;
    }
    module CodeModeReglement {
        /** REA */
        const RECOUVREMENT_S_CPTE_CPTABLE: string;
        /** TSS */
        const TIP_SEPA_SANS_COORDONNEES_IBAN: string;
        /** PIN */
        const PRELEVMT_COMPTE_INTERNE_ETAB: string;
        /** PIG */
        const PRELEVEMENT_INTERNE_EPS: string;
        /** PIM */
        const PRELEVEMENT_MANUEL_INTERNE_ETAB: string;
        /** PSP */
        const PRELEVEMENT_EXTERNE_SEPA: string;
        /** CH1 */
        const RECOUVREMENT_PAR_CHEQUE: string;
        /** RVI */
        const REGLEMENT_PAR_VIREMENT_EXTERNE: string;
    }
    module CodeTypeDomiciliation {
        const RIB: string;
        const IBAN: string;
        const TRESORERIE: string;
        const NOM: string;
    }
}

declare module EpsCommun.Constantes {
    /**
     * Gestion des urls pour les appels aux services REST
     */
    module Services {
        module UrlRessourcesRest {
            var URL_RESSOURCE_ATTRIBUTCLIENT: string;
            var URL_RESSOURCE_CHANGEMENTPARTENARIAT: string;
            var URL_RESSOURCE_TARIFICATIONSSTANDARD: string;
            var URL_RESSOURCE_TARIFICATIONDEROGATOIRE: string;
            var URL_RESSOURCE_ARRET_TARIFICATION_EPS: string;
            var URL_RESSOURCE_ADRESSE: string;
            var URL_RESSOURCE_TIERS: string;
            var URL_RESSOURCE_RECHERCHE_COMPTES_PRELEVEMENTS: string;
            var URL_RESSOURCE_INFORMATIONCONTRAT: string;
            var URL_RESSOURCE_NOTATIONTIERS: string;
            var URL_RESSOURCE_DETERMINERBIC: string;
            var URL_RESSOURCE_RECHERCHEFAMILLEEPS: string;
            var URL_RESSOURCE_RECHERCHEPARTENARIATEPS: string;
            var URL_RESSOURCE_RECHERCHEBIBLMODELEEPS: string;
            var URL_RESSOURCE_RECHERCHEACTESMODELEEPS: string;
            var URL_RESSOURCE_RECHERCHEMODEREGLEMENT: string;
            var URL_RESSOURCE_RECHERCHESTRUCTURE: string;
            var URL_RESSOURCE_RECHERCHEENTITETITULAIRE: string;
            var URL_RESSOURCE_RECHERCHECADREFINANCEMENT: string;
            var URL_RESSOURCE_RECHERCHEOPPOSITION: string;
            var URL_RESSOURCE_RECHERCHECTRLHABILITATIONCAUTION: string;
            var URL_RESSOURCE_RECHERCHEEPSENGAGEMENT: string;
            var URL_RESSOURCE_LISTEACCESSOIREPRODUIT: string;
        }
    }
}

declare module EpsCommun.Modeles.InformationsEntiteTitulaire {
    interface ISyntheseEntiteTitulaire {
        codeEtablissement: string;
        identifiantEntiteTitulaire: string;
        libelleEntiteTitulaire: string;
        libelleAgence: string;
        opposition: boolean;
        balois: boolean;
        listeComptes: IContratAffichage[];
    }
    interface IContratAffichage {
        numeroContrat: string;
        identifiantRice: string;
        cleRice: string;
        domiciliation: string;
        libelleCompte: string;
        libelleComplet: string;
        identifiantPersonne: string;
    }
}

declare module EpsCommun.Services {
    module Contexte {
        var IDENTIFIANT_ENTITE_TITULAIRE: string;
        var CODE_ETABLISSEMENT: string;
        var SYNTHESE_ENTITE_TITULAIRE: string;
    }
    /**
     * Service qui fournit l'ensemble d'une grappe d'informations sur une entite titulaire
     */
    class InformationsEntiteTitulaireService {
        private serviceAgentExtended;
        private qService;
        private entitetitulaire;
        private contentieuxService;
        private oppositionService;
        private contratService;
        private tiersService;
        private promesseInformationsEntiteTitulaire;
        private collecteur;
        private collecteurAdresse;
        private listeComptes;
        private listeAdresses;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService, entitetitulaire: Services.EntiteTitulaireService, contentieuxService: Services.ContentieuxService, oppositionService: Services.OppositionService, contratService: EpsCommun.Services.ContratService, tiersService: EpsCommun.Services.TiersService);
        /**
         * Méthode qui récupère les informations essentiels du client bancaire en cours de navigation dans EPS
         * @return reponse {IPromise<Modeles.InformationsEntiteTitulaire.ISyntheseEntiteTitulaire>} les éléments du client globaux du client bancaire en cours
         */
        recupererInformationsEntiteTitulaire(): ng.IPromise<Modeles.InformationsEntiteTitulaire.ISyntheseEntiteTitulaire>;
        private initSyntheseClientComplete(identifiantEntiteTitulaire, codeEtablissement);
        /**
         * Instancie les éléments dit de "synthèse" du client bancaire en cours (infos encart client + liste des comptes)
         */
        private initSynthese(entiteTitulaire, codeEtablissement, informationEntite);
        /**
         * Instancie les éléments dit de "synthèse" du client bancaire en cours pour alimenter l'encart client présent dans le header
         */
        getInfoEncartClient(identifiantEntiteTitulaire: string, codeEtablissement: string, informationEntite: EpsCommun.Modeles.EntiteTitulaire.IInformationEntiteTitulaire): ng.IPromise<Modeles.InformationsEntiteTitulaire.ISyntheseEntiteTitulaire>;
        initEncartClient(identifiantEntiteTitulaire: string, codeEtablissement: string): ng.IPromise<Modeles.InformationsEntiteTitulaire.ISyntheseEntiteTitulaire>;
        /**
         * Ajoute dans le contexte les informations de synthèse du client
         * @param synthese Modeles.InformationsEntiteTitulaire.ISyntheseEntiteTitulaire
         * @return reponse {IPromise<void>} Fin de la promesse
         */
        private mettreSyntheseEntiteTitulaireDansLeContexte(synthese);
        /**
         * Récupération d'un éventuel contentieux de la liste des personnes qui compose l'entité titulaire
         * @param listePersonneTitulaire Tableaux des personnes composants l'entité titulaire
         * @param codeEtablissement Code établissement
         */
        private recupererContentieuxListePersonnes(listePersonneTitulaire, codeEtablissement);
        /** Recherche du contentieux éventuel via un identifiant tiers qui compose le client bancaire
         * @param identifiantTiers {number} Identifiant du tiers
         * @return reponse {IPromise<boolean>} Promesse qui renvoie la présence ou non d'un contentieux
         */
        private rechercherOppositionClient(entiteTitulaire);
        /**
         * Récupère la liste des comptes d'un client bancaire (composante des personnes de l'entite)
         * @param listePersonnesEntiteTitulaire {Array<Modeles.IPersonneEntiteTitulaire>} Liste des personnes de l'entite
         * @param codeEtablissement {string} code établissement
         * @return reponse {IPromise<EpsCommun.Modeles.Contrat.IContrat[]>} Promesse qui retourne un tableau de contrats
         */
        private recupererListeComptesClientBancaire(listePersonnesEntiteTitulaire, codeEtablissement);
        /**
         * Récupère les contrats d'une personne et ajout dans la liste des contrats ceux de la personne
         * @param identifiantTiers {string} Identifiant personne à rechercher
         * @param codeEtablissement {string} code établissement
         * @param designationTiers {string} désignation du tiers
         * @return reponse {IPromise<void>} Fin de requête
         */
        private recupererContratsPersonne(identifiantTiers, codeEtablissement, designationTiers);
        /**
         * Retourne un affichage correct pour compte RIB
         * @param domiciliationPayeurGAC {string} domiciliation du compte payeur
         * @return reponse {string} Retourne une chaîne RICE correctement formaté
         */
        private definirAffichageRib(domiciliationPayeurGAC);
        /**
         * Récupère la liste des adresses d'un client bancaire (composante des personnes de l'entite)
         * @param listePersonnesEntiteTitulaire {Array<Modeles.IPersonneEntiteTitulaire>} Liste des personnes de l'entite
         * @param codeEtablissement {string} code établissement
         * @return reponse {IPromise<Modeles.Adresse.ILigneAdresse[]>} Promesse qui retourne un tableau d'adresses
         */
        recupererListeAdressesClientBancaire(listePersonnesEntiteTitulaire: Array<Modeles.EntiteTitulaire.IPersonneEntiteTitulaire>, codeEtablissement: string): ng.IPromise<Modeles.Adresse.ILigneAdresse[]>;
        /** Récupération de/des la/les ligne(s) adresse d'un tiers
         * @param codeEtablissement {string} code de l'établissement
         * @param identifiantTiers {string} identifiant du tiers composant le client bancaire
         * @return response {IPromise<EpsCommun.Modeles.Adresse.ILigneAdresse>} Promesse de la ligne adresse du tiers
         */
        private rechercherAdresse(codeEtablissement, identifiantTiers);
    }
}

declare module EpsCommun.Controleurs {
    /**
     * Controleur de la création par défaut
     */
    class CreationAttributsGACControleur {
        private serviceAgentExtended;
        private data;
        private $modalInstance;
        private creationService;
        private modalService;
        /** Injection de dépendances */
        static $inject: string[];
        /** Données de la modale */
        identifiantTiers: string;
        identifiantClient: string;
        codeEtablissement: string;
        dateTraitement: string;
        validationAuto: boolean;
        creerClientEtape: number;
        libelleNomClient: string;
        listePartenariatEPS: Modeles.Partenariat.IPartenariatEPS[];
        choixPartenariat: Modeles.Partenariat.IPartenariatEPS;
        loading: boolean;
        /** Initialiation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, creationService: Services.CreationService, modalService: MyWay.UI.IModalService);
        /** Fermeture de la modal */
        non(): void;
        /** Etape de création (choix partenariat) */
        oui(): void;
        /** Valider la création par défaut */
        valider(): void;
        /** Génère le libellé client */
        private construireLibelleClient();
        /** Construit la liste des partenariats possible à la création par défaut
         * @return reponse {Promise<void>} libère la promesse à la fin de recherche des partenariats
         */
        private definirListePartenariats();
    }
}

declare module EpsCommun.Services {
    /**
     * Implémentation du service de création par défaut des attributs gac
     */
    class CreationService {
        private serviceAgentExtended;
        private epsAttributsService;
        private modalService;
        private engagementParametreService;
        private contratService;
        private tiersService;
        private riceService;
        /** Injection de dépendances */
        static $inject: string[];
        private identifiantTiers;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, epsAttributsService: Services.EpsAttributsService, modalService: MyWay.UI.IModalService, engagementParametreService: Services.EngagementParametreService, contratService: Services.ContratService, tiersService: Services.TiersService, riceService: myway.comInterdomaine.SaisieRiceService);
        /** Création par défaut des attributs GAC du client bancaire
         * @param identifiantTiers {string} identifiant du tiers titulaire du client bancaire
         * @param identifiantClient {string} identifiant du client bancaire
         * @param codePartenariat {string} code du partenariat choisi pour la création par défaut
         * @param codeEtablissement {string} code établissement du client bancaire
         * @return reponse {IPromise<Modeles.Attributs.ICaracteristiqueGAC>} Retour du post de création, l'objet caracteristiquesGac rempli
         */
        creationAttributsParDefaut(identifiantTiers: string, identifiantClient: string, codePartenariat: string, codeEtablissement: string, dateTraitement: string, validationAuto: boolean): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /** Récupération des partenariats valides pour la création par défaut
         * @param codeEtablissement {string} code établissement
         * @return reponse {IPromise<Modeles.Partenariat.IPartenariatEPS[]>} Liste des partenariats disponibles
         */
        recupererPartenariatsValide(codeEtablissement: string): ng.IPromise<Modeles.Partenariat.IPartenariatEPS[]>;
        /** Générer la modale de création par défaut
         * @param identifiantTiers {string} identifiant du tiers titulaire du client bancaire
         * @param identifiantClient {string} identifiant du client bancaire
         * @param libelleEDSGestionEntiteTitulaire {string} nom de la personne composant le client bancaire
         * @param codeEtablissement {string} code établissement du client bancaire
         * @return reponse {Promise<Modeles.Attributs.ICaracteristiqueGAC>} retourne la promesse de l'instance de la modale
         */
        genererModaleCreation(identifiantTiers: string, libelleEDSGestionEntiteTitulaire: string, identifiantClient: string, codeEtablissement: string, dateTraitement: string, validationAuto: boolean): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /** Récupérer le premier compte de facturation à vue du client bancaire (à défaut entite titulaire)
         * @param codeEtablissement {string} code établissement
         * @return reponse {IPromise<string>} Numéro du compte de facturation
         */
        private recupererComptefacturation(codeEtablissement);
        /** Récupérer l'adresse légale du client bancaire
         * @param codeEtablissement {string} code établissement
         * @return reponse {IPromise<number>} identifiant de l'adresse légale
         */
        private recupererAdresseLegale(codeEtablissement);
    }
}

declare module EpsCommun.Services {
    /**
     * Service de récupération des habilitations
     */
    class HabilitationService {
        protected $q: ng.IQService;
        protected $location: ng.ILocationService;
        protected serviceAgent: MyWay.Services.ServiceAgentExtended;
        /**
         * Contient une liste d'habilitations indexée par le code
         */
        habilitations: Habilitations;
        static $inject: string[];
        constructor($q: ng.IQService, $location: ng.ILocationService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupère l'ensemble des habilitations de l'utilisateur
         * @returns ng.IPromise<void> - Résolu quand l'opération est terminée
         */
        recupererHabilitations(): ng.IPromise<void>;
        /**
         * Renvoie toutes les habilitations stockées dans le service.
         */
        protected getHabilitations(): ng.IPromise<{
            [code: string]: boolean;
        }>;
    }
}

declare module EpsCommun {
    /**
     * Conteneur pour les habilitations.
     */
    class Habilitations {
        private habilitations;
        consultation: boolean;
        creationParDefaut: boolean;
        validationGAC: boolean;
        suppressionGAC: boolean;
        changementPartenariat: boolean;
        miseAJourDonneesAdministratives: boolean;
        miseAJourLignesAutorisations: boolean;
        miseAJourDateClotureLigneAuto: boolean;
        miseAJourModelesActes: boolean;
        derogationTarification: boolean;
        rattachementPoolLigneAutorisation: boolean;
        consultationIHMPool: boolean;
        modificationIHMPool: boolean;
        modificationsCadre: boolean;
        constructor(habilitations: {
            [code: string]: boolean;
        });
    }
    /**
     * Liste des codes habilitations utilisés par l'administration aide
     */
    class CodeHabilitation {
        static SHFCII: string;
        static SHFCIJ: string;
        static SHFCIK: string;
        static SHFCIL: string;
        static SHFCIM: string;
        static SHFCIN: string;
        static SHFCIO: string;
        static SHFCIP: string;
        static SHFCIQ: string;
        static SHFCIR: string;
        static SHFCIS: string;
        static SHFCFN: string;
        static SHFCFO: string;
        static SHFCFQ: string;
        static list(): string[];
    }
}

declare module EpsCommun.Tools {
    type UniteDeDuree = "days" | "months" | "years";
    class DateUtils {
        static isDateSuperieureDateDuJour(date: Date | string | moment.Moment): boolean;
        static getDateJour(): string;
        static getDateFuture(date: Date, nombre: number, uniteDuree: UniteDeDuree, format?: string): string;
        static getDatePassee(date: Date, nombre: number, uniteDuree: UniteDeDuree, format?: string): string;
        static isDateValid(date: Date | string | moment.Moment): boolean;
        static formaterDate(date: Date, format?: string): string;
        static stringToDate(date: string): Date;
    }
}

declare module EpsCommun.Tools {
    class Formatage {
        static formaterIdClientBancaireFromContext(idClientBancaire: string): string;
        static formaterIdClientBancaire(idClientBancaire: string): string;
    }
}

declare module EpsCommun.Services {
    interface IPopupService {
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
    }
}

declare module EpsCommun.Services {
    class RetourQRService {
        constructor();
        hasErreurQR(listeRetourQR: EpsCommun.Modeles.IRetourQR[]): boolean;
        hasErreurQRBloquante(listeRetourQR: EpsCommun.Modeles.IRetourQR[]): boolean;
        getListeMessageErreurQRBloquante(listeRetourQR: EpsCommun.Modeles.IRetourQR[]): string[];
    }
}

declare module EpsCommun.Modeles.Actes {
    interface IEntreeRechercheModeleActe {
        autoriseAgence?: boolean;
        autoriseInternet?: boolean;
        identifiantFamille?: string;
        codeDateButoirDateFin?: string;
    }
    interface IRechercheModeleActeEPS {
        listeModelesActes: Array<ISyntheseModeleActe>;
    }
    interface ISyntheseModeleActe {
        libelleCourt: string;
        libelle: string;
        identifiant: string;
        ordreAffichage: number;
        codeEtablissement: string;
        bibliothequeActes: string;
        codeDateButoirDateFin: string;
        autoriseAgence: boolean;
        autoriseInternet: boolean;
        familleEps: string;
        familleInternet: string;
        codeTypePartenariatClientEPS: string;
    }
}

declare module EpsCommun.Modeles.Adresse {
    interface IAdresseEntree {
        codeEtablissement: string;
        idPersonne: string;
        numeroChronoProfessionnel?: string;
        numeroChronoLieuActivite?: string;
    }
    interface IAdresseRetour {
        identificationPersonne: IIdentificationPersonne;
        listeAdresse: Array<IListeAdresse>;
    }
    interface IListeAdresse {
        ligneAdresse: ILigneAdresse;
        caracteristiqueAdresse: ICaracteristiqueAdresse;
    }
    class ILigneAdresse {
        identifiantPersonne: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
    }
    interface ICaracteristiqueAdresse {
        codeRetourDistribution: string;
        libelleRetourDistribution: string;
        indicateurEnvoiCourrier: boolean;
        indicateurDifferencePostFisc: boolean;
    }
    interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
    }
}

declare module EpsCommun.Modeles.Attributs {
    interface ICaracteristiqueGACEntree {
        codeEtablissement: string;
        identifiantClientBancaire: string;
    }
    interface ITarificationDerogatoireEntree {
        codeEtablissement: string;
        identifiantClientBancaire: string;
    }
    interface IChangementPartenariatEntree {
        codeEtablissement: string;
        identifiantClientBancaire: string;
        nouveauPartenariat: string;
    }
    interface IModificationPartenariat {
        caracteristiqueGAC: ICaracteristiqueGAC;
    }
    interface ILigneAutorisation {
        identifiantLigneAutorisation: string;
        identifiantFamilleEPS: string;
        delaiDateButoir: number;
        listeCadreFinancement: Array<IModeleCadreFinancement>;
        typeLigneAutorisation: string;
        topAutoriseInternet: boolean;
        regleDateButoir: string;
        periodiciteDateButoir: string;
        montantPlafondGlobal: number;
        montantMaximumEPSInternet: number;
        montantUtilise: number;
        indicateurComptabilise: boolean;
        indicateurPoolAutomatique: boolean;
        indicateurPoolObligatoire: boolean;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteDroitTirage: string;
        codeDevise: string;
        identifiantCadreFinancement: string;
        topRetrocessionEPS: boolean;
        codeTypePartenariatClientEPS: string;
        dateMAJLigneAutorisation: string;
        listePayeurGAC: Array<IPayeurGAC>;
        identifiantUserDerniereMAJ: string;
        dateCloture: string;
        /**
         * Date de radiation calculée avec delaiDateButoir et regleDateButoir
         */
        dateRadiationAutomatique?: string;
    }
    interface IModeleCadreFinancement {
        identifiantCadreFinancement: string;
        numeroVersionCadre: number;
        identifiantLigneAutorisation: string;
        numeroOrdrePool: number;
        codeNaturePool: string;
        typeRoleEntiteGestion: string;
    }
    interface IPayeurGAC {
        identifiantPayeurGAC: string;
        payeurPrincipal: boolean;
        numeroRelatif: number;
        identifiantLigneAutorisation: string;
        codeModeReglement: string;
        pourcentagePayeurGAC: number;
        domiciliationPayeurGAC: string;
        referenceUniqueMandat: string;
        dateSignatureMandat: string;
        typePropagationCompteFacturation: string;
    }
    interface IBibliothequeActeAutorise {
        identifiantBibliothequeActes: string;
    }
    interface IModeleActeAutorise {
        identifiantModeleActeAutorise: string;
    }
    interface ICaracteristiqueGAC {
        codeEtablissement: number;
        identifiantClientBancaire: string;
        identifiantAdresse: number;
        /**
         * Cette rubrique constitue l'identifiant de l'adresse légale à utiliser dans l'acte de caution EPS lors de son édition (Sur 9 Chiffres)
         */
        identifiantAdresseCaution: number;
        codeEtatAttributEPS: string;
        codeTypePartenariatClientEPS: string;
        dateCreation: string;
        dateDerniereMAJ: string;
        utilisateurDerniereMAJ: string;
        codeActionValidationGAC: string;
        codeCategorieEmprunteur: string;
        identifiantPersonne: string;
        listeLigneAutorisation: Array<ILigneAutorisation>;
        listeBibliothequeActeAutorise: Array<IBibliothequeActeAutorise>;
        listeModeleActeAutorise: Array<IModeleActeAutorise>;
        retourQR: Array<IRetourQR>;
    }
    interface ITarification {
        identifiantRemise: string;
        identifiantLigneAutorisation: string;
        codeTypeAccessoire: string;
        tauxRemise: number;
        codeReceptionPVTravaux: string;
        canalDistribution: string;
        montantFacturation: number;
        dateDebutValiditeRemise: string;
        dateFinValiditeRemise: string;
        codeDateButoir: string;
        identifiantUserDerniereMAJ: string;
        codeEtablissement: number;
        dateDerniereMAJRemise: string;
    }
    interface ITarificationDerogatoire {
        listeTarificationDerogatoire: Array<ITarification>;
        retourQR: Array<IRetourQR>;
        codeEtablissement: number;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}

declare module EpsCommun.Modeles.Bibliotheque {
    interface IRechercheBiblModeleEPSEntree {
        codeEtablissement: number;
        dateTraitement: string;
    }
    interface IBiblModeleEPS {
        codeEtablissement: number;
        identifiantBibliothequeActe: string;
        codeTypeBibliothequeActe: string;
        libelleTypeBibliothequeActe: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
    }
    interface IRechercheBiblModeleEPS {
        listeBiblModeleEPS: Array<IBiblModeleEPS>;
    }
}

declare module EpsCommun.Modeles.Pools {
    interface IEntreeRechercheCadreFinancement {
        codeEtablissement: string;
        identifiantLigneAutorisation?: string;
        dateTraitement?: string;
    }
    interface ICadreFinancement {
        checked?: boolean;
        identifiantCadreFinancement: string;
        libelleLong: string;
        dateFin: Date;
        tauxMiniParticipationRisque: number;
        tauxAppliqueParticipation: number;
        codeCadreModele: string;
        identifiantCadreModele: string;
        codeEtablissement: number;
        dateDebut: Date;
        numeroVersionCadre: number;
        numeroOrdrePool: number;
        typeSousRolePool: string;
        codeNaturePool: string;
        typeRoleEntiteGestion: string;
    }
    interface IRechercheCadreFinancement {
        listeCadreFinancement: Array<ICadreFinancement>;
    }
}

declare module EpsCommun.Modeles.Contentieux {
    interface IContentieuxEntree {
        codeEtablissement: string;
        identifiantTiers: number;
    }
    interface INotationTiers {
        codeSegmentRisque: string;
        libelleSegmentRisque: string;
        dateSegmentationRisque: Date;
        codeModeleNotationRisque: string;
        libelleModeleNotationRisque: string;
        valeurNoteRisque: string;
        dateNoteRisque: Date;
        heureNoteRisque: number;
        codeInscriptionFICP: string;
        libelleInscriptionFICP: string;
        dateDebutInscriptionFICP: Date;
        dateFinInscriptionFICP: Date;
        codeTypeFichageFCC: string;
        libelleTypeFichageFCC: string;
        dateDebutFichageFCC: Date;
        dateFinFichageFCC: Date;
        dateInterrogationFichage: Date;
        codeContexteMetier: string;
        libelleContexteMetier: string;
        codeSituationBDF: string;
        libelleSituationBDF: string;
        libelleStatutPersonne: string;
        codeMotifModificationSain: string;
        libelleMotifModificationSain: string;
        dateModificationStatutDouteux: Date;
        dateDecisionPassageDouteux: Date;
        codeEtablissement: string;
        identifiantTiers: number;
        codeStatutDouteuxPersonne: string;
        typeCotationFIBEN: string;
        valeurCotationFIBEN: string;
        dateCotationFIBEN: Date;
        dateSituationBDF: Date;
        libelleCotationFIBEN: string;
        codeCotationCoface: string;
        dateCotationCoface: Date;
        codeBanqueEntitePilote: string;
        codeCategorieClient: string;
        codeMoteurSegmentationCatCli: string;
        libelleMoteurSegmentationCatCli: string;
        dateMiseAJourSegmentationCatCli: Date;
        commentaireForcageSegmentationCatCli: string;
        codeMoteurSegmentationSegRis: string;
        libelleMoteurSegmentationSegRis: string;
        dateMiseAJourSegmentationSegRis: Date;
        commentaireForcageSegmentationSegRis: string;
    }
}

declare module EpsCommun.Modeles.Contrat {
    interface IContratsEntree {
        codeEtablissement: string;
        identifiantTiers: string;
        indicateurRestitutionComptes: string;
    }
    interface IInformationContratEntree {
        codeEtablissement: string;
        identifiantContrat: string;
    }
    interface IContrat {
        identifiantContrat: string;
        libelleContrat: string;
        codeProduit: string;
        codeEtat: string;
        roleTiers: string;
        identifiantEntiteTitulaire: string;
        identifiantRice: string;
        cleRice: string;
        codeDevise: string;
        codeGuichet: string;
        numeroCompte: string;
        designationBancaire: string;
        soldeCompte: number;
        compteIBAN: string;
        compteRIB: string;
        compteBIC: string;
        compteCodePays: string;
        libelleProduit: string;
        identifiantOffre: string;
        codeNatureCompteCCE: string;
        dateOuvertureAdmContrat: string;
    }
    interface ITiers {
        codeEtablissement: string;
        identifiantTiers: string;
        indicateurRestitutionComptes: string;
        listeContrat: Array<IContrat>;
    }
    interface IInformationContrat {
        codeEtablissement: string;
        identifiantContrat: string;
        numeroRib: string;
        referenceCompteService: string;
        codeEtat: string;
        codeDeviseIsoContrat: string;
        codeProduit: string;
        identifiantEdsDomcContrat: number;
        codeTypeOuverture: string;
        identifiantEntiteTitulaire: number;
        codeTypeFermeture: string;
        dateOuvertureAdmContrat: Date;
        dateClotureAdmContrat: Date;
        identifiantEdsGestionContrat: number;
        referencePfGestionContrat: number;
        dateDebutEffetContrat: Date;
        dateFinEffetContrat: Date;
        numeroCompteIban: string;
    }
}

declare module EpsCommun.Modeles.ctrlhabilitcaution {
    interface ICtrlHabilitCaution {
        codeRetourEchange: number;
        identifiantPersonne: number;
        indicHabilitattionSurCaution: string;
        indicHabilitSurCautionSigne: string;
    }
}

declare module EpsCommun.Modeles.ConventionGlobale {
    interface IConventionGlobale {
        codeEtablissement: number;
        identifiantFamilleEps: string;
        libelleFamille: string;
        partenariat: string;
        dateCreation: string;
        statut: string;
        libelleStatut: string;
        codeSousStatut: string;
        montant: number;
        montantEncours: number;
        dateDebutEps: string;
        dateFinEps: string;
        produit: IProduit;
        identifiantModeleActe: string;
        origine: string;
        indicateurGarantie: boolean;
        identifiantConventionGlobale: string;
    }
    interface IProduit {
        codeFamilleProduit: string;
        numeroRelatif: string;
        libelle: string;
    }
}

declare module EpsCommun.Modeles.EntiteTitulaire {
    interface IInformationEntiteTitulaireEntree {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        complementDesignationBancaire: string;
        codeEtatEntiteTitulaire: string;
        dateMAJEntiteTitulaire: Date;
        codeMotifClotureEntiteTitulaire: string;
        dateClotureEntiteTitulaire: Date;
        sousCodeModeCompositionET: string;
        codeAgentGestionEntiteTitulaire: number;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        codeTypeDesignationEntiteTitulaire: string;
        typeElementStructure: string;
        refExterneEDSDomiciliationET: number;
        refExterneEDSGestionET: number;
        identifiantEDSGuichet: number;
        identEDSGestionETNouveau: number;
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonneEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        natureLienET: string;
        pourcentageNuePropriete: number;
        pourcentagePleinePropriete: number;
        pourcentageUsufruit: number;
        nomCommercialProfessionnel: string;
        enseigneCommercialeLieuActivite: string;
        designationCourteLieuActivite: string;
        designationTiers: string;
        indicateurAffectationAdresse: boolean;
    }
}

declare module EpsCommun.Modeles.EpsEngagement {
    interface ISyntheseEps {
        refInterneEps: string;
        identifiantClient: string;
        dateCreation: string;
        montant: number;
        montantEncours: number;
        statut: Element;
        sousStatut: string;
        origine: string;
        famille: Element;
        produit: IProduit;
        modeleActe: string;
        partenariat: string;
        indicateurGarantie: boolean;
        codeEtablissement: string;
        refExterneEps: string;
        structure: IStructure;
        refMigration: string;
        numeroEps: string;
        beneficiaire: IBeneficiaire;
        indicateurSignatureElectronique: boolean;
        indicateurDecision: boolean;
        message: string;
        identifiantLigneAutorisation: string;
    }
    interface IElement {
        code: string;
        libelleCourt: string;
        libelle: string;
    }
    interface IRecherche {
        listeEps: Array<ISyntheseEps>;
    }
    interface IStatut {
    }
    interface IFamille {
    }
    interface IProduit {
        codeFamilleProduit: string;
        numeroRelatif: string;
        libelle: string;
        identifiantProduit: string;
    }
    interface IStructure {
    }
    interface IBeneficiaire {
        nom: string;
        identifiant: string;
        domiciliation: string;
    }
}

declare module EpsCommun.Modeles.Famille {
    interface IRechercheFamilleEPSEntree {
        codeEtablissement: number;
        dateTraitement: string;
    }
    interface IFamilleEPS {
        codeEtablissement: number;
        identifiantFamilleEPS: string;
        libelleCourtFamilleEPS: string;
        libelleLongFamilleEPS: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
    }
    interface IRechercheFamilleEPS {
        listeFamilleEPS: Array<IFamilleEPS>;
    }
}

declare module EpsCommun.Modeles.EngagementParametre {
    interface IListeAccessoiresProduit {
        numeroRelatif: string;
        identifiantProduit: string;
        codeFamilleProduit: string;
        listeAccessoireProduit: Array<IModaliteCalculAccessoireProduit>;
    }
    interface IModaliteCalculAccessoireProduit {
        numeroRelatifPhase: number;
        modeCalcul: string;
        accessoireObligatoire: boolean;
        typePhase: string;
        typeAccessoire: string;
        numeroRegleCalcul: string;
        montantConseille: number;
        typeAssietteCalcul: string;
        montantMinPlage: number;
        montantMaxPlage: number;
        tranche1: ITranche1;
        tranche2: ITranche2;
        tranche3: ITranche3;
        tranche4: ITranche4;
        tranche5: ITranche5;
        montantMin: number;
        montantMax: number;
        montantMinRecouv: number;
        numeroRegleApplication: string;
        regleAppelAccessoireAperiodique: string;
        regleDeclencheur1erAppel: string;
        periodiciteAccessoire: string;
        uniteDureeApplication: string;
        dureeApplicationAccessoire: number;
        regleAppelAccAperiodique: string;
        codeAccessoireDansTEG: string;
        appelEcheance: boolean;
        dateDebutValidite: string;
        dateFinValidite: string;
        indicateurDerogation: boolean;
        fractionFinanciableMax: number;
        compatibleInstruction: boolean;
        compatibleAvenant: boolean;
        codeFinancementFrais: boolean;
        codeCanalDistribution: string;
        libelleAccessoire: string;
        regleAppelAccPeriodique: string;
        nombreJourDansAnneeNumerateur: number;
        nombreJourDansAnneeDenominateur: number;
        codeRecouvAccTermeEchu: string;
    }
    interface ITranche {
        montantPlafond: number;
        tauxElement: number;
        tauxMin: number;
        tauxMax: number;
    }
    interface ITranche1 extends ITranche {
    }
    interface ITranche2 extends ITranche {
    }
    interface ITranche4 extends ITranche {
    }
    interface ITranche3 extends ITranche {
    }
    interface ITranche5 extends ITranche {
    }
    interface IListeAccessoireProduitQuery {
        codeFamilleProduit: string;
        numeroRelatifProduit: string;
        typeCalcul?: string;
        filtreInstruction?: string;
        filtreAvenant?: string;
        filtreCanalDistribution?: string;
        dateTraitement?: string;
    }
}

declare module EpsCommun.Modeles.ModeReglement {
    interface IModeReglementEntree {
        codeEtablissement: string;
        dateTraitement: string;
        codeModeReglement: string;
    }
    interface IAllModeReglementEntree {
        codeEtablissement: number;
        dateTraitement: string;
        codeUtilisation?: string;
    }
    interface IModeReglement {
        libelleCourt: string;
        libelle: string;
        codeModeReglement: string;
        codeTypeDomiciliation: string;
        codeUtilisationModeReglement: string;
        codeModeTraitement: string;
        delaiExecutionModeReglement: number;
        delaiRetourPaiement: number;
        codeModeExecutionReglement: string;
        codeReglementInterneExterne: string;
        codeDomaineExecutionReglement: string;
        numeroOrdreClassement: number;
        codeModeRepresentation: string;
        delaiRetourPaiementRA: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        codeModeReglementComptable: string;
    }
    interface IRechercheModeReglement {
        listeModeReglement: Array<IModeReglement>;
    }
}

declare module EpsCommun.Modeles.Opposition {
    interface IOpposition {
        codeRetourEchange: number;
        codeActionPresenceOpposition: string;
        indicateurCaptureCarte: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        referenceProduitService: string;
        codeTypeProduitService: string;
        codeNiveauOpposition: string;
        codeDiffusionOpposition: string;
        codeMotifOpposition: string;
        numeroOpposition: number;
        indicateurOppositionActive: string;
        dateDebut: string;
        dateFin: string;
        libelleOpposition: string;
        indicateurOppositionNational: string;
        indicateurCreationAuto: string;
        numeroBureauOperantCreation: number;
        referentExterneAgentCreation: number;
        numeroStationCreation: string;
        dateCreationSysteme: string;
        heureCreationSysteme: number;
        numeroBureauOperantSuppression: number;
        referentExtAgentSuppression: number;
        numeroStationSuppression: string;
        dateSuppressionSysteme: string;
        heureSuppressionSysteme: number;
        identifiantPersonne: number;
        numeroEntiteTitulaire: number;
        indicateurInitiativeCaisse: string;
        indicateurGenerationAuto: string;
        dateHeureEcritureDB2: string;
        partieSpecifiqueOpposition: string;
        libelleMotifOpposition: string;
    }
    interface IControle {
        listeOpposition: Array<IOpposition>;
    }
    interface IEntreeControle {
        codeFonctionModuleControle: string;
        codeGuichetInterbancaire: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        numeroEntiteTitulaire: number;
        codeOrigineOperation: string;
        codeFinanceAtome: string;
        codeLotMQSeries: string;
        codeModeFinancier: string;
        dateOperation: string;
        soldeProduit: number;
        codeDeviseTenueCompte: string;
        montantOperationMonnaie: number;
        codeDeviseOperation: string;
        numeroNationalEmetteur: string;
        numeroCheque: string;
        categorieCarteBancaire: string;
    }
}

declare module EpsCommun.Modeles.Partenariat {
    interface IRecherchePartenariatEPSEntree {
        codeEtablissement: number;
        dateTraitement: string;
    }
    interface IPartenariatEPS {
        codeEtablissement: number;
        codePartenariatEPS: string;
        codeNaturePartenariat: string;
        libelleCourtPartenariatEPS: string;
        libelleLongPartenariatEPS: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
    }
    interface IRecherchePartenariatEPS {
        listePartenariatEPS: IPartenariatEPS[];
    }
}

declare module EpsCommun.Modeles.RechercheEngtGlobal {
    interface IRechercheEngtGlobaux {
        listeEngtGlobaux: Array<ISyntheseEngtGlobaux>;
    }
    interface ISyntheseEngtGlobaux {
        codeEtablissement: number;
        identifiantLigneAutorisation: string;
        identifiantFamilleEPS: string;
        libelleCourtFamilleEPS: string;
        montantPlafondEngtGlobal: number;
        refInterneEPS: string;
        codeStatut: string;
        montantInitialEPS: number;
        montantEngagement: number;
        montantUtilise: number;
        montantMisEnJeu: number;
        dateDebutEPS: Date;
        dateFinEPS: Date;
    }
}

declare module EpsCommun.Modeles.RechercheEpsTirage {
    interface ISyntheseEpsTirage {
        codeEtablissement: number;
        refInterneEPS: string;
        codeSousStatut: string;
        origine: string;
        dateCreation: string;
        montant: number;
        montantEncours: number;
        partenariat: string;
        produit: IProduit;
        dateDebutEps: string;
        dateFinEps: string;
        identifiantModeleActe: string;
        indicateurGarantie: boolean;
        identifiantFamilleEPS: string;
        statut: string;
        libelleStatut: string;
        libelleFamille: string;
    }
    interface IRechercheTirage {
        listeEpsTirage: Array<ISyntheseEpsTirage>;
    }
    interface IProduit {
        codeFamilleProduit: string;
        numeroRelatif: string;
        libelle: string;
    }
}

declare module EpsCommun.Modeles {
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}

declare module EpsCommun.Modeles.Structure {
    interface IStructureEntree {
        typeRechercheEDS: number;
        codeEtablissement: string;
        typeEDS: string;
        referenceExterneEDS: number;
        libelleEDS: string;
        identifiantEDS: number;
    }
    interface IDonneesCommunesEDS {
        codeEtablissement: string;
        identifiantElementStructure: number;
        typeElementStructure: string;
        libelleCourtTypeEDS: string;
        libelleLongTypeEDS: string;
        referenceExterneEDS: number;
        libelleElementStructure: string;
        libelleCourtEDS: string;
        libelleLongEDS: string;
        dateDebutValiditeEDS: Date;
        dateFinValiditeEDS: Date;
        identifiantEDSDirigeant: number;
    }
}

declare module EpsCommun.Modeles.TarificationStandard {
    interface ITarificationStandardEntree {
        codeEtablissement: number;
        identifiantClientBancaire: string;
    }
    interface ITarification {
        codeEtablissement: number;
        identifiantLigneAutorisation: string;
        codeTypeAccessoire: string;
        montantConseilleAccessoire: number;
        tauxConseilleAccessoire: number;
        codeCanalDistribution: string;
        indicateurDateButoir: string;
        montantMinimumPerception: number;
        codeFamilleProduit: string;
        numeroRelatifProduit: string;
        codeTypeLigneAutorisation: string;
        libelleCourtProduit: string;
        indicateurReceptionPvTravaux: string;
    }
    interface ITarificationStandard {
        listeTarificationStandard: Array<ITarification>;
        retourQR: Array<IRetourQR>;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}

declare module EpsCommun.Modeles.Tiers {
    interface ITiersEntree {
        codeEtablissement: string;
        codeTypeRecherche: string;
        identifiantRecherche?: string;
    }
    interface IDonneeCommune {
        codeEtablissement: string;
        identifiantPersonne: number;
        codeTypePersonne: string;
        codePersonnaliteJuridique: string;
        edsDomiciliation: number;
        codeStatut: string;
    }
    interface IDonneePersonnePhysique {
        nomMarital: string;
        prenom: string;
        dateNaissance: Date;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        indicateurCodeActiviteProfessionnel: string;
    }
    interface IDonneePersonneMorale {
        numeroSiren: string;
        raisonSociale: string;
        sigle: string;
    }
    interface IAdresse {
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
    }
    interface IMedia {
        codeTypeMedia: string;
        referenceAccesMedia: string;
    }
    interface ITiers {
        donneeCommune: IDonneeCommune;
        donneePersonnePhysique: IDonneePersonnePhysique;
        donneePersonneMorale: IDonneePersonneMorale;
        adresse: IAdresse;
        listMedia: Array<IMedia>;
    }
    interface IMessageErreur {
        codeErreur: string;
        libelleErreur: string;
    }
    interface IMediaTraitement {
        telephoneMobile: string;
        telephonePersonnel: string;
        adresseEmailPrincipal: string;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant la recherche REST de contentieux d'une personne
     */
    class ContentieuxService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère potentiellement le contentieux du client
         * @param entreeContentieux {Modeles.Contentieux.IContentieuxEntree} L'ensemble des paramètres nécessaires à la récupération du contentieux
         * @return reponse {IPromise<Modeles.Contentieux.INotationTiers>} Récupérer les informations relatives au contentieux éventuel du client
         */
        recupererContentieux(entreeContentieux: Modeles.Contentieux.IContentieuxEntree): ng.IPromise<Modeles.Contentieux.INotationTiers>;
    }
}

declare module EpsCommun.Services {
    class ContratService {
        private serviceAgentExtended;
        private filter;
        static $inject: string[];
        private codeNatureEligibleFacturation;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, filter: angular.IFilterService);
        /**
         * Recupère la liste des contrats du client
         * @param entreeContrats {Modeles.Contrat.IContratsEntree} L'ensemble des paramètres nécessaires à la récupération des comptes de facturation
         * @return reponse {IPromise<Modeles.Contrat.ITiersContrat>} retourne les contrats en rapport avec l'identifiant du tiers
         */
        recupererContratsTiers(entreeContrats: Modeles.Contrat.IContratsEntree): ng.IPromise<Modeles.Contrat.ITiers>;
        /**
         * Recupère les informations du contrat de facturation
         * @param entreeContrats {Modeles.Contrat.IInformationContratEntree} L'ensemble des paramètres nécessaires à la récupération des informations sur un contrat
         * @return reponse {IPromise<Modeles.Contrat.IInformationContrat>} Retourne le descriptif d'un contrat en fonction de son idnetifiant d'entrée
         */
        recupererInformationsContrat(entreeContrats: Modeles.Contrat.IInformationContratEntree): ng.IPromise<Modeles.Contrat.IInformationContrat>;
        /**
         * Détermine si le code activité du compte de facturation est correct (Filtre métier EPS)
         * @param rice {string} rice du compte de facturation
         * @return reponse {boolean} possède ou non le bon code d'activité
         */
        codeActiviteCorrectEtCodeNatureCCE(contrat: Modeles.Contrat.IContrat): boolean;
        isComptePersonnel(codeActivite: string): boolean;
        isCompteEntreprise(codeActivite: string): boolean;
        private isCompteTechnique(codeActivite);
        isCompteEntreprises(codeActivite: string): boolean;
        private isEpsPoolParticipant(codeSupportRecouvrement);
        contratEstEligibleFacturation(contrat: Modeles.Contrat.IContrat): boolean;
        /**
         * Méthode utilisée lors de la saisie manuelle d'un compte interne dans la GAC
         * @param codeActiviteCompte
         */
        isCompteValideSaisieRice(codeActiviteCompte: string): boolean;
        /**
         * Méthode utilisée lors de la saisie manuelle d'un compte interne dans le socle (instruction)
         * @param codeActiviteCompte
         */
        isSaisieRiceAvecCompteValide(codeActiviteCompte: string): boolean;
        /**
         * Méthode utilisée lors de la saisie manuelle d'un compte interne dans le socle (gestion)
         * @param codeActiviteCompte
         * @param codeSupportRecouvrement: string
         */
        isSaisieRiceAvecCompteValideEpsGestion(codeActiviteCompte: string, codeSupportRecouvrement: string): boolean;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant la ressource REST des cadres de financement
     */
    class CadreFinancementService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère la liste des cadres de financement
         * @param entreeRechercheCadre {Modeles.Pools.IEntreeRechercheCadreFinancement} L'ensemble des paramètres nécessaires à la récupération des cadres de financement
         * @return reponse {IPromise<Modeles.Pools.IRechercheCadreFinancement>} retourne les cadres de financements en fonction d'un code établissement
         */
        rechercheCadreFinancement(entreeRechercheCadre: Modeles.Pools.IEntreeRechercheCadreFinancement): ng.IPromise<Modeles.Pools.IRechercheCadreFinancement>;
        /**
         * Récupère les types différents de types date butoir
         * @returns promesse: IDeferred - Promesse de traitement
         */
        listerMockCadreFinancement(): ng.IPromise<Modeles.Pools.IRechercheCadreFinancement>;
    }
}

declare module EpsCommun.Services {
    /**
     * Récupération des abonnements CE NET avec au moins une habilitation
     */
    class CtrlHabilitationCautionService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Cette ressource est utilisée pour préciser si le client possède un abonnement CE NET avec au moins une habilitation utilisateur sur les services "gestion cautions" ou
         * "gestion cautions signées" à partir du numéro de personne lié au client bancaire de Myeps
         * @param codeEtablissement
         * @param identifiantPersonne
         * @return IPromise<Modeles.ctrlhabilitcaution.ICtrlHabilitCaution>
         */
        getCtrlHabilitCaution(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Modeles.ctrlhabilitcaution.ICtrlHabilitCaution>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant la ressource REST des informations utiles à EPS
     */
    class EngagementParametreService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        private partenariatEPS;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère un partenariat EPS éventuel
         * @param entreeRecherchePartenariat {Modeles.Partenariat.IRecherchePartenariatEPSEntree} L'ensemble des paramètres nécessaires à la récupération du partenariat
         * @return reponse {IPromise<Modeles.Partenariat.IRecherchePartenariatEPS>} Renvoie la liste de partenariat paramétré pour l'établissement
         */
        recupererPartenariat(entreeRecherchePartenariat: Modeles.Partenariat.IRecherchePartenariatEPSEntree): ng.IPromise<Modeles.Partenariat.IRecherchePartenariatEPS>;
        /**
         * Recupère la liste des modèles de bibliothèque
         * @param entreeRechercheBiblModele {Modeles.Bibliotheque.IRechercheBiblModeleEPSEntree} L'ensemble des paramètres nécessaires à la récupération des bibliothèques modèle
         * @return reponse {IPromise<Modeles.Bibliotheque.IRechercheBiblModeleEPS>} Renvoie la liste des bibliothèques standard paramétré pour l'établissement
         */
        rechercheBibliothequesModeleEPS(entreeRechercheBiblModele: Modeles.Bibliotheque.IRechercheBiblModeleEPSEntree): ng.IPromise<Modeles.Bibliotheque.IRechercheBiblModeleEPS>;
        /**
         * Recupère la liste des modèles d'actes
         * @param entreeRechercheBiblModele {Modeles.Bibliotheque.IRechercheBiblModeleEPSEntree} L'ensemble des paramètres nécessaires à la récupération des bibliothèques modèle
         * @return reponse {IPromise<Modeles.Bibliotheque.IRechercheBiblModeleEPS>} Renvoie la liste des bibliothèques standard paramétré pour l'établissement
         */
        rechercheModeleActesEPS(entreeRechercheModeleActe: Modeles.Actes.IEntreeRechercheModeleActe): ng.IPromise<Modeles.Actes.IRechercheModeleActeEPS>;
        /**
         * Recupère la liste des familles EPS
         * @param entreeRechercheFamilleEPS {Modeles.Famille.IRechercheFamilleEPSEntree} L'ensemble des paramètres nécessaires à la récupération des familles de l'EPS
         * @return reponse {IPromise<Modeles.Famille.IRechercheFamilleEPS>} Renvoie la liste des familles EPS paramétré
         */
        rechercheFamilleEPS(entreeRechercheFamilleEPS: Modeles.Famille.IRechercheFamilleEPSEntree): ng.IPromise<Modeles.Famille.IRechercheFamilleEPS>;
        /**
         * Ressource permettant de retourner les informations d'un mode de réglement spécifique.
         * @param entreeModeReglement {Modeles.ModeReglement.IModeReglementEntree} L'ensemble des paramètres nécessaires à la récupération des mode de réglement
         * @return reponse {IPromise<Modeles.ModeReglement.IRechercheModeReglement>} Renvoie le descriptif du mode de réglement
         */
        rechercherModeReglement(entreeModeReglement: Modeles.ModeReglement.IModeReglementEntree): ng.IPromise<Modeles.ModeReglement.IRechercheModeReglement>;
        /**
         * Ressource permettant de retourner la liste des modes de réglement paramétré pour un établissement
         * @return reponse {IPromise<Modeles.ModeReglement.IRechercheModeReglement>} Renvoie la liste des modes de réglements
         */
        recupererAllModeReglement(entreeRecupererAllModes: Modeles.ModeReglement.IAllModeReglementEntree): ng.IPromise<Modeles.ModeReglement.IRechercheModeReglement>;
        /**
         * Ressource permettant de retourner la liste accessoires autorisés sur un produit
         * @return reponse {IPromise<EpsCommun.Modeles.EngagementParametre.IListeAccessoiresProduit>} Renvoie la liste des accessoires produit
         */
        getListeAccessoireProduit(query: EpsCommun.Modeles.EngagementParametre.IListeAccessoireProduitQuery): ng.IPromise<EpsCommun.Modeles.EngagementParametre.IListeAccessoiresProduit>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe service de gestion des attributs EPS
     */
    class EpsAttributsService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        private caracteristiquesGAC;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère les attributs client EPS
         * @param entreeAttributsClient {Modeles.IAttributsEPSEntree} L'ensemble des paramètres nécessaires à la récupération des attributs EPS du client$
         * @param nouvelleRecherche {boolean} Indique si c'est une recherche sur un nouvel identifiant
         * @return reponse {Modeles.IAttributsEPSEntreeIPromise<Modeles.ReponseRest.IRetourRest>} retourne les attributs du clients ou erreur de recherche (client non existant)
         */
        recupererAttributsClient(entreeAttributsClient: Modeles.Attributs.ICaracteristiqueGACEntree, nouvelleRecherche: boolean): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /**
         * Modifier les attributs du client EPS
         * @param caracteristiquesGAC {Modeles.Attributs.ICaracteristiqueGAC} L'ensemble des paramètres nécessaires à la modification des attributs EPS du client
         * @return reponse IPromise<Modeles.Attributs.ICaracteristiqueGAC> Renvoie les données modifiées des attributs client
         */
        modifierAttributsClient(caracteristiqueGAC: Modeles.Attributs.ICaracteristiqueGAC): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /**
         * Création des attributs EPS par défaut
         * @param creationCaracteristiqueGAC {Modeles.Attributs.IDefautGAC} L'ensemble des paramètres nécessaires à la création des attributs EPS du client
         * @return reponse {IPromise<Modeles.Attributs.IDefautGAC>} Renvoie les paramètres envoyés en cas de succés
         */
        creerAttributsClient(creationCaracteristiqueGAC: Modeles.Attributs.ICaracteristiqueGAC): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /**
         * Cette opération permet de supprimer les attributs d'un client.
         * @param attributsGac {Modeles.Attributs.ICaracteristiqueGAC} Objet représentant les attributs GAC du client
         * @return reponse {IPromise<Modeles.Attributs.ICaracteristiqueGAC>} Renvoie les paramètres envoyés en cas de succés
         */
        supprimerAttributsClient(attributsGac: Modeles.Attributs.ICaracteristiqueGAC): ng.IPromise<{}>;
        /**
         * Récupère la tarification standard
         * @param entreeTarificationStandard {Modeles.TarificationStandard.ITarificationStandardEntree} L'ensemble des paramètres nécessaires à la récupération de la tarification standard
         * @return reponse {IPromise<Modeles.TarificationStandard.ITarificationStandard>} Renvoie la liste des tarifications standard
         */
        recupererTarificationStandard(entreeTarificationStandard: Modeles.TarificationStandard.ITarificationStandardEntree): ng.IPromise<Modeles.TarificationStandard.ITarificationStandard>;
        /**
         * Récupère les attributs EPS avec le changement de partenariat si succès
         * @param entreeChangementPartenariat {Modeles.Attributs.IChangementPartenariatEntree} L'ensemble des paramètres nécessaires au changement de partenariat
         * @return reponse {IPromise<Modeles.Attributs.IModificationPartenariat>} Renvoie les attributs EPS avec le changement de partenariat
         */
        changementPartenariat(entreeChangementPartenariat: Modeles.Attributs.IChangementPartenariatEntree): ng.IPromise<Modeles.Attributs.IModificationPartenariat>;
        /**
         * Récupération de la tarification dérogatoire de l'entité titulaire
         * @param entreeTarificationDerogatoire Paramètres d'interrogation de la ressource tarif
         * @return reponse {IPromise<Modeles.Attributs.ITarificationDerogatoire>} Renvoie la liste des tarifications dérogatoires de l'entité
         */
        recupererTarificationDerogatoire(entreeTarificationDerogatoire: Modeles.Attributs.ITarificationDerogatoireEntree): ng.IPromise<Modeles.Attributs.ITarificationDerogatoire>;
        /**
         * Méthode d'enregistrement de la liste de tarification dérogatoire
         * @param entreeTarificationDerogatoire Liste des tarifs déro
         */
        enregistrerTarificationDerogatoire(entreeTarificationDerogatoire: Modeles.Attributs.ITarificationDerogatoire): ng.IPromise<Modeles.Attributs.ITarificationDerogatoire>;
        /**
         * Méthode permettant d'arrêter la tarification des EPS en gestion du client
         * @param codeEtablissement
         * @param identifiantEmprunteur
         */
        putArretTarificationEPS(codeEtablissement: number, identifiantEmprunteur: string): ng.IPromise<{}>;
    }
}

declare module EpsCommun.Services {
    interface IRechercheQuery {
        codeSupportDonneesEps: string;
        identifiantClient?: string;
        typeTri?: string;
        codeFamille?: string;
        codeFamilleProduit?: string;
        numeroRelatifProduit?: string;
        indicateurAvecGarantie?: boolean;
        indicateurSansGarantie?: boolean;
        indicateurAvecModele?: boolean;
        indicateurSansModele?: boolean;
        indicateurStatutValide?: boolean;
        indicateurStatutRadie?: boolean;
        indicateurStatutTermine?: boolean;
        indicateurStatutEnAttente?: boolean;
        indicateurOrigineBO?: boolean;
        indicateurOrigineAgence?: boolean;
        indicateurOrigineInternet?: boolean;
        idEds?: string;
        codeEtablissement?: string;
        typeAttenteEpsWeb?: string;
    }
    class EpsEngagementRechercheService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        recherche(query: IRechercheQuery): ng.IPromise<Modeles.EpsEngagement.IRecherche>;
        rechercheListeEpsEnAttente(query: IRechercheQuery): ng.IPromise<Modeles.EpsEngagement.IRecherche>;
    }
}

declare module EpsCommun.Services {
    class OppositionService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        rechercheOpposition(ouvertureEPS: Modeles.Opposition.IEntreeControle): ng.IPromise<Modeles.Opposition.IControle>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe service des éléments de structure
     */
    class StructureService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère la structure
         * @param entreeStructureRecherche {Modeles.Structure.IStructureEntree} L'ensemble des paramètres nécessaires à la récupération de la structure
         * @return reponse {Modeles.Structure.IDonneesCommunesEDS} retourne le résultat de la recherche structure
         */
        rechercherStructure(entreeStructureRecherche: Modeles.Structure.IStructureEntree, nouvelleRecherche: boolean): ng.IPromise<Modeles.Structure.IDonneesCommunesEDS>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe service de récupération d'infos pour l'entite titulaire
     */
    class EntiteTitulaireService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Récupère une entite titulaire en fonction d'un identifiant bancaire si celui-ci existe dans la BDD client
         * @param entreeRechercheEntiteTitulaire {Modeles.EntiteTitulaire.IInformationEntiteTitulaireEntree} L'ensemble des paramètres nécessaires à la récupération des informations sur l'entite titulaire
         * @return reponse {IPromise<Modeles.EntiteTitulaire.IInformationEntiteTitulaire>} Renvoie les informations d'une entite titulaire
         */
        rechercherEntiteTitulaire(entreeRechercheEntiteTitulaire: Modeles.EntiteTitulaire.IInformationEntiteTitulaireEntree): ng.IPromise<Modeles.EntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant l'ensemble des ressources REST de l'application
     */
    class TiersService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère l'adresse du client
         * @param entreeAdresseClient {Modeles.IAdresseEntree} L'ensemble des paramètres nécessaires à la récupération de l'adresse du client
         * @return reponse {IPromise<Modeles.Adresse.IAdresseRetour>} Renvoie une liste d'adresse en fonction de l'identifiant client
         */
        recupererAdresseClient(entreeAdresseClient: Modeles.Adresse.IAdresseEntree): ng.IPromise<Modeles.Adresse.ILigneAdresse[]>;
        /**
         * Recupère la liste de tiers liées à un identifiant bancaire
         * @param entreeTiersRecherche {Modeles.Tiers.ITiersEntree} L'ensemble des paramètres nécessaires à la récupération des tiers
         * @return reponse {ng.IPromise<Modeles.Tiers.ITiers[]>} Renvoie une liste des tiers
         */
        recupererTiers(entreeTiersRecherche: Modeles.Tiers.ITiersEntree): ng.IPromise<Modeles.Tiers.ITiers[]>;
    }
}
