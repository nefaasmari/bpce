
declare module LanceurIzivente {
    var app: any;
}

declare module LanceurIzivente.Constantes {
    /**
     * Clés de reroutage nécessaires à la constitution du fichier de reroutage
     */
    module ClesReroutage {
        var CODE_ETABLISSEMENT: string;
        var CODE_AGENCE_OPERANTE: string;
        var CODE_AGENCE_DOMICILIATION: string;
        var CODE_AGENT_OPERANT: string;
        var CODE_FONCTION_AGENT_OPERANT: string;
        var CODE_CANAL_DISTRIBUTION: string;
        var CODE_UNIVERS_PRODUIT: string;
        var CODE_OFFRE: string;
        var CODE_BIN: string;
        var COMPTE_SUPPORT_CARTE: string;
        var COMPTE_NATURE_SUPPORT_CARTE: string;
        var NIVEAU_DELEGATAIRE_AGENT_OPERANT: string;
        var CODE_TRANSACTION: string;
        var MODE_DE_VENTE: string;
        var PROFIL_ACCES_IZIVENTE: string;
        var URL_MISE_A_JOUR_CLIENT: string;
        var MODE_EDITIQUE: string;
        var URL_REROUTAGE: string;
        var VENTE_COUPLEE: string;
        var REFERENCE_ACTE_DISTANT: string;
        var SENS_APPEL: string;
    }
}

declare module LanceurIzivente.Constantes {
    /**
     * Ensemble des balises XML constituant le fichier de reroutage
     */
    module FichierReRoutage {
        var ENTETE_FICHIER_XML: string;
        /**
         * Ensemble des balises ouvrantes constituant le fichier de reroutage
         */
        module BalisesOuvrante {
            var FLUX_REROUTAGE: string;
            var LISTE_PARTICIPANTS: string;
            var LISTE_CONTEXTE: string;
            var PROTOCOLE_TECHNIQUE: string;
            /**
             * Ensemble des balises constituant le bloc liste participants
             */
            module BlocListeParticipants {
                var PERSONNE_PHYSIQUE: string;
                var IDENTIFIANT_CLIENT_DISTRIBUTION: string;
                var CODE_ROLE: string;
            }
            /**
             * Ensemble des balises constituant le bloc liste contexte
             */
            module BlocListeContexte {
                var CONTEXTE: string;
                var CODE: string;
                var VALEUR: string;
            }
            /**
             * Ensemble des balises constituant le bloc protocole technique
             */
            module BlocProtocoleTechnique {
                var CODE_PROFIL_AGENT: string;
                var IDENTIFIANT_ETABLISSEMENT_ENTETE: string;
                var IDENTIFIANT_INTERNE_EDS_AGENT: string;
                var REFERENCE_POSTE_FONCTIONNEL_AGENT: string;
                var IDENTIFIANT_AGENT: string;
                var IDENTIFIANT_AGENT_TECHNIQUE: string;
                var TYPE_CANAL_ACCES: string;
                var IDENTIFIANT_AGENT_ACCES: string;
                var REFERENCE_EXTERNE_AGENT: string;
                var CODE_TYPE_IDENTIFIANT_EXTERNE: string;
                var IDENTIFIANT_EXTERNE_CONNEXION: string;
                var TYPE_PROFIL_AGENT: string;
            }
        }
        /**
         * Ensemble des balises fermantes constituant le fichier de reroutage
         */
        module BalisesFermante {
            var FLUX_REROUTAGE: string;
            var LISTE_PARTICIPANTS: string;
            var LISTE_CONTEXTE: string;
            var PROTOCOLE_TECHNIQUE: string;
            /**
             * Ensemble des balises constituant le bloc liste participants
             */
            module BlocListeParticipants {
                var PERSONNE_PHYSIQUE: string;
                var IDENTIFIANT_CLIENT_DISTRIBUTION: string;
                var CODE_ROLE: string;
            }
            /**
             * Ensemble des balises constituant le bloc liste contexte
             */
            module BlocListeContexte {
                var CONTEXTE: string;
                var CODE: string;
                var VALEUR: string;
            }
            /**
             * Ensemble des balises constituant le bloc protocole technique
             */
            module BlocProtocoleTechnique {
                var CODE_PROFIL_AGENT: string;
                var IDENTIFIANT_ETABLISSEMENT_ENTETE: string;
                var IDENTIFIANT_INTERNE_EDS_AGENT: string;
                var REFERENCE_POSTE_FONCTIONNEL_AGENT: string;
                var IDENTIFIANT_AGENT: string;
                var IDENTIFIANT_AGENT_TECHNIQUE: string;
                var TYPE_CANAL_ACCES: string;
                var IDENTIFIANT_AGENT_ACCES: string;
                var REFERENCE_EXTERNE_AGENT: string;
                var CODE_TYPE_IDENTIFIANT_EXTERNE: string;
                var IDENTIFIANT_EXTERNE_CONNEXION: string;
                var TYPE_PROFIL_AGENT: string;
            }
        }
    }
}

declare module LanceurIzivente.Constantes {
    /**
     * Ensemble des constantes pour l'application izivente
     */
    module Application {
        var CONTEXTE_IZIVENTE: string;
    }
    /**
     * Ensemble des constantes pour la gestion des codes transaction
     */
    module CodeTransaction {
        var IZV_CA_CALC: string;
        var IZV: string;
        var IZV_CA_LIST: string;
        var IZV_CP_LIST: string;
        var IZV_CP_DC_LIST: string;
        var IZV_DC_LIST: string;
        var IZV_CP_DC_INSTR: string;
        var IZV_DC_LIST_OCTROI: string;
        var IZV_CP_FC_LIST: string;
        var IZV_NB: string;
        var IZV_CP_DC_OCTROI: string;
    }
    /**
     * Ensemble des constantes pour la gestion du profil izivente
     */
    module ProfilIzivente {
        var IZV_CONSULT: string;
        var IZV_SIMU: string;
        var IZV_INSTR: string;
        var IZV_OCTROI: string;
        var IZV_OCTROI_CR: string;
    }
    /**
     * Ensemble des constantes pour la gestion du mode éditique
     */
    module ModeEditique {
        var DISTRIBUTEUR: string;
        var PRODUCTEUR: string;
    }
    /**
     * Ensemble des constantes pour la gestion de l'url de reroutage
     */
    module UrlReroutage {
        var MYWAY: string;
        var ENVIRONNEMENT: string;
        var VERSION: string;
        var DOMAINE_GCE: string;
    }
    /**
     * Ensemble des constantes pour la gestion du protocole technique
     */
    module ProtocoleTechnique {
        var CODE_TYPE_IDENTIFIANT_EXTERNE: string;
        var TYPE_CANAL_ACCES: string;
    }
    /**
     * Ensemble des constantes pour la gestion de la liste des participants
     */
    module ListeParticipants {
        var CODE_ROLE_EMPRUNTEUR: string;
    }
    /**
     * Ensemble des constantes pour la gestion du jeton sécurisé
     */
    module JetonSecurise {
        var CODE_APPLICATION_PRODUCTEUR: string;
        var CODE_TYPE_CANAL: string;
        var GESTIONNAIRE_HABILITATION: string;
        var NIVEAU_AUTHENTIFICATION_USER: string;
        var TYPE_IDENTIFIANT_USER: string;
    }
    module ContexteReroutage {
        var VENTE_COUPLEE_N: string;
    }
}

declare module LanceurIzivente.Constantes {
    /**
     * Gestion des urls pour les appels aux services REST
     */
    module Services {
        module UrlRessourcesRest {
            var URL_RESSOURCE_CONTROLECONSOCOMPTE: string;
            var URL_RESSOURCE_ELIGIBILITECREDITCONSO: string;
            var URL_RESSOURCE_LIRETABLEPARAMETRAGEVERSION: string;
            var URL_RESSOURCE_DEMANDEJETONSECURISE: string;
        }
    }
}

declare module LanceurIzivente.Controleurs {
    class FormulaireContexteControleur {
        private contexteIzivente;
        private serviceAgentExtended;
        private $location;
        static $inject: string[];
        constructor(contexteIzivente: Modeles.IContexteIzivente, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService);
        valider(): void;
        private redirigerVersLanceur();
        contexteIziventeEstComplet(): boolean;
        contexteIziventeJson(value?: any): string;
        contexteIziventeJsonOptions: {
            getterSetter: boolean;
        };
    }
}

declare module LanceurIzivente.Rest.TiersV3.ParticulierInformation {
    interface IParticulierInformation {
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libellePaysNaissance: string;
        libelleCapaciteJuridique: string;
        libelleInseePaysDoubleNationalite: string;
        libelleSituationFamiliale: string;
        libelleRegimeMatirimonial: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleTypeContratTravail: string;
        libelleNAFInsee: string;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        autresPrenom: string;
        codeSexe: string;
        dateNaissance: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: string;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: string;
        codeRegimeMatrimonial: string;
        typeClauseMatrimoniale: string;
        indicDonationEntreEpoux: string;
        nombreEnfantACharge: number;
        categorieSocioprofessionnelle: string;
        dateEffetCSP: string;
        dateEmbaucheEmployeurActuel: string;
        codeTypeContratTravail: string;
        dateFinContratTravail: string;
        libelleProfession: string;
        codeResident: string;
        codeAppartenanceReseau: string;
        edsDomiciliation: number;
        codePieceJustif: string;
        dateObtentionPieceJustificative: string;
        refPieceJustificative: string;
        codeTypeNIF: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        edsInterneDomiciliation: number;
        sirenEmployeur: string;
        sirenAutoEntrepreneur: string;
        indicateurAutoEntrepreneur: string;
        indicateurSocietaire: string;
        identifiantRelationtEconomique: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
        dateNaturalisation: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
        indicateurActiviteProfessionnel: string;
        codeGuichetRisque: number;
        identifiantAdresse: number;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeInseeLocalite: string;
        numeroVoiePTT: number;
        codePostalPTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        codeInseePays: string;
        codeTypeAdresse: string;
        codeRetourDistribution: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        libelleInseeLocalite: string;
        codeISOPays: string;
        indicateurEnvoiCourrier: string;
        indiceAmericaniteFATCA: string;
        libelleStatutFATCA: string;
        dateAttributionFATCA: string;
        codeBlocageVAO: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        statutPro: IStatutPro;
        gestionPrivee: IGestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        codeEtablissement: string;
        identifiantPersonne: number;
        nomEmployeur: string;
        codeResidenceFiscale: string;
        codeInseePaysResidenceFiscale: string;
        nif: string;
        email: string;
    }
    interface IGestionPrivee {
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: number;
        identifiantExterneEDS: number;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: number;
        identifiantExterneEDS2: number;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
        identifiantPersonne: number;
        codeEtablissement: string;
    }
    interface IStatutPro {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: number;
        identifiantInterneAgentModification: number;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
    interface IAdresse {
        numeroChronoLieuActivite: number;
        numeroChronoProfessionnel: number;
        codeTypeAdresse: string;
    }
    interface IMedia {
        codeTypeMedia: string;
        portableEtranger: string;
        codeTypeMoyenContact: string;
        codeTypeUsageMedia: string;
        preferenceTelephone: string;
        clientAccepte: string;
        indicateurOppositionTelephone: string;
        referenceAccessMedia: string;
        indicateurPreferenceMedia: string;
    }
}

/**
 * Service de gestion de la ressource "/tiers/v3/particulierInformation"
 * @author S0012451 (Philippe LEMAIRE)
 */
declare module LanceurIzivente.Rest.TiersV3.ParticulierInformation {
    interface IParametresTiersV3ParticulierInformation {
        codeEtablissement: string;
        idPersonne: string;
    }
    /**
     * Déclaration du service
     */
    class TiersV3ParticulierInformation {
        protected svcAgent: MyWay.Services.ServiceAgent;
        protected $q: ng.IQService;
        protected $timeout: ng.ITimeoutService;
        static nomService: string;
        url: string;
        static $inject: string[];
        constructor(svcAgent: MyWay.Services.ServiceAgent, $q: ng.IQService, $timeout: ng.ITimeoutService);
        protected debug(message: string, detail?: any): void;
        protected error(message: string, detail?: any): void;
        protected sendMyway(question: any): ng.IPromise<any>;
        getHttpParam(question: any, methode: MyWay.Services.MethodEnum): any;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGet(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPost(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPut(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendDelete(data: any): ng.IPromise<any>;
        /**
         * Appel au Rest TiersV3.ParticulierInformation
         * @param {string} idPersonne - Identifiant / Numéro de personne
         * @return Une promesse de type {IParticulierInformation}
         */
        getParticulierInformation(parametres: IParametresTiersV3ParticulierInformation): ng.IPromise<IParticulierInformation>;
    }
}

declare module LanceurIzivente.Controleurs {
    /**
     * Contrôleur principal du lancement de la SPA Izivente
     */
    enum FormatDateStringEnum {
        DATABASE = 0,
        AFFICHAGE = 1,
        SERVICE = 2,
    }
    class LanceurIziVenteControleur {
        private serviceAgentExtended;
        private ressourcesRestService;
        private iziventeMappingService;
        private iziventeService;
        private modalService;
        private $sce;
        private $q;
        private svcInterroBdf;
        private svcParticulierInformation;
        private authentification;
        private contexteIzivente;
        private particulierInformation;
        private reponseControleConsoCompte;
        private eligibiliteCreditConsoCompte;
        private stepInfo;
        private jetonSecurise;
        private adresseIzivente;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, ressourcesRestService: LanceurIzivente.Services.RessourcesRestService, iziventeMappingService: LanceurIzivente.Services.IziventeMappingService, iziventeService: LanceurIzivente.Services.IziventeService, modalService: MyWay.UI.IModalService, $sce: ng.ISCEService, $q: ng.IQService, svcInterroBdf: myway.comRisquesClient.InterroBDFService, svcParticulierInformation: Rest.TiersV3.ParticulierInformation.TiersV3ParticulierInformation);
        /**
         * Méthode permettant de lancer le lanceur izivente
         */
        lancementIizivente(): void;
        /**
         * Méthode permettant d'ouvrir la popup des messages non bloquant
         * @param {string[] | string} listeMessage - La liste des messages à afficher (soit une liste de message, soit un message simple)
         */
        private ouvrirModaleMessagesNonBloquants(listeMessage);
        /**
         * Méthode permettant d'ouvrir la popup des messages bloquant
         * @param {string[] | string} listeMessage - Un seul message est afficher
         */
        private ouvrirModaleMessageBloquant(message);
        stringEnDate(dateString: string, format: FormatDateStringEnum): Date;
    }
}

declare module LanceurIzivente.Controleurs {
    /**
     * Contrôleur permettant de gérer l'affichage de la popup des messages non bloquant
     * Ne nécessite pas de test car aucune logique métier
     */
    class PopupLanceurIziVenteControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        listeMessage: string[];
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any);
        /**
         * Méthode appeler lors du clic sur le bouton continuer
         */
        continuer(): void;
    }
}

declare module LanceurIzivente.Modeles {
    interface IControleConsoCompteEntree {
        codeAgent: string;
        codeEtablissement: string;
        numeroPersonne: string;
        codeAction: string;
        idEdsInterne: string;
    }
    interface IReponseStandard {
        codeRetour: number;
        codeDomaineGestionPac: string;
        codeMessageErreur: string;
        libelleErreur: string;
    }
    interface IErreur {
        libelle: string;
        valeurs: string[];
        codeErreur: number;
        codeLibelle: string;
    }
    interface IControleAcces {
        numeroPersonne: string;
        idAgenceDomiciliation: string;
        codeActionPresenceOpposition: string;
        codeEtablissement: string;
        codeFamilleGestionProduit: string;
    }
    interface IConsoControleCompteResponse {
        controleAcces: IControleAcces;
        reponseStandard: Array<IReponseStandard>;
    }
}

declare module LanceurIzivente.Modeles {
    /**
     * Objet représentant le contexte izivente alimenté par Lisa
     */
    interface IContexteIzivente {
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
}

declare module LanceurIzivente.Modeles {
    interface IEligibiliteCreditConsoEntree {
        codeEtablissement: string;
        codeAgent: string;
        codeActionPresenceOpposition: string;
        codeFamilleGestionProduit: string;
    }
    interface IEligibiliteCreditConso {
        codeRetour: number;
        indicateurProfilIzivente: string;
        codeCanalDistribution: string;
        indicateurNiveauConseiller: string;
    }
}

declare module LanceurIzivente.Modeles {
    interface IDemandeJetonSecurise {
        roleApplicatif: string;
        identifiantEtablissement: string;
        identifiantEtablissementSJR: string;
        typeIdentifiantUser: string;
        gestionnaireHabilitation: string;
        niveauAuthentificationUser: string;
        identifiantExterneUser: string;
        domaineADUser: string;
        identifiantWindowsUser: string;
        codeApplicationProducteur: string;
        codeTypeCanal: string;
        blocNoteDonneurFonction: string;
    }
    interface IReponseJetonSecurise {
        jetonSecuriseFourni: string;
    }
}

declare module LanceurIzivente.Modeles {
    interface ILireParamVersionEntree {
        codeEtablissement: string;
        dateTraitementInformatique: string;
        typeEDS: string;
        edsDomicialiation: string;
    }
    interface ILireParamVersionResponse {
        codeEtab: string;
        codeAgenceOperante: string;
        refVersionApplication: string;
        codeParametreDivers: string;
        libelleAdresseWeb: string;
    }
}

declare module LanceurIzivente.Modeles {
    /**
     * Objet permet de stocker les informations liées au participant pour le reroutage
     */
    interface IParticipantReroutage {
        identifiantClientDistribution: string;
        codeRole: string;
    }
    /**
     * Objet permet de stocker les informations liées au contexte du reroutage
     */
    interface IContexteReroutage {
        codeEtablissement: string;
        codeAgenceOperante: string;
        codeAgenceDomicilation: string;
        codeAgentOperant: string;
        codeFonctionAgentOperant: string;
        codeCanalDistribution: string;
        codeUniversProduit: string;
        codeOffre: string;
        codeBin: string;
        compteSupportCarte: string;
        compteNatureSupportCarte: any;
        niveauDelegataireAgentOperant: string;
        codeTransaction: string;
        modeDeVente: string;
        profilAccesIzivente: string;
        urlMiseAJourClient: string;
        modeEditique: string;
        urlReroutage: string;
        venteCouplee: string;
        referenceActeDistant: string;
        sensAppel: string;
    }
    /**
     * Objet permet de stocker les informations liées au protocole technique du reroutage
     */
    interface IProtocoleTechniqueReroutage {
        codeProfilAgent: string;
        identifiantEtablissementEntete: string;
        identifiantInterneEdsAgent: string;
        referencePosteFonctionnelAgent: string;
        identifiantAgent: string;
        identifiantAgentTechnique: string;
        typeCanalAcces: string;
        identifiantAgentAcces: string;
        referenceExterneAgent: string;
        codeTypeIdentifiantExterne: string;
        identifiantExterneConnexion: string;
        typeProfilAgent: string;
    }
}

declare module LanceurIzivente.Modeles {
    class TranscodificationEtablissement {
        private MAP_TRANSCODIFICATION_ETABLISSEMENT;
        getMapTranscodificationEtablissement(): Object;
    }
}

declare module LanceurIzivente.Services {
    class GenerationFluxReroutageService {
        /**
         * Méthode permettant de générer le flux de reroutage pour la demande de jeton sécurisée
         * @param {LanceurIzivente.Modeles.IParticipantReroutage} participant - Les informations liées au participant du reroutage
         * @param {LanceurIzivente.Modeles.IContexteReroutage} contexte - Les informations liées au contexte du reroutage
         * @param {LanceurIzivente.Modeles.IProtocoleTechniqueReroutage} protocoleTechnique - Les informations liées au protocole technique du reroutage
         */
        genererFluxReroutage(participant: LanceurIzivente.Modeles.IParticipantReroutage, contexte: LanceurIzivente.Modeles.IContexteReroutage, protocoleTechnique: LanceurIzivente.Modeles.IProtocoleTechniqueReroutage): string;
        /**
         * Méthode pour générer l'entête du flux de reroutage
         */
        genererEnteteFlux(): string;
        /**
         * Méthode permettant de générer la balise liste des participants nécessaires au flux de reroutage
         * @param {LanceurIzivente.Modeles.IParticipantReroutage} participant - Les informations liées au participant du reroutage
         */
        genererBaliseParticipant(participant: LanceurIzivente.Modeles.IParticipantReroutage): string;
        /**
         * Méthode qui permet de générer l'ensemble des balises contextes du flux de reroutage
         * @param {LanceurIzivente.Modeles.IContexteReroutage} contexte - le contexte de reroutage
         */
        genererBaliseContexteFlux(contexte: LanceurIzivente.Modeles.IContexteReroutage): string;
        /**
         * Méthode permettant de générer la balise contexte
         * @param {string} cle - correspond au libellé de la balise <Cd>
         * @param {string} valeur - correspond à la valeur contenu dans la balise <Val>
         */
        genererBaliseContexte(cle: string, valeur: string): string;
        /**
         * Méthode permettant de générer la balise protocole technique
         * @param {LanceurIzivente.Modeles.IProtocoleTechniqueReroutage} profilTechnique - le profil technique nécessaire au flux de reroutage
         */
        genererBaliseProtocoleTechnique(protocoleTechnique: LanceurIzivente.Modeles.IProtocoleTechniqueReroutage): string;
    }
}

declare module LanceurIzivente.Services {
    /**
     * Classe de services permettant de faire le mapping entre le contexte izivente, le résultat des services REST et les ressources à construire pour obtenir le
     * contexte de reroutage
     */
    class IziventeMappingService {
        private iziventeService;
        private generationFluxReroutageService;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(iziventeService: LanceurIzivente.Services.IziventeService, generationFluxReroutageService: LanceurIzivente.Services.GenerationFluxReroutageService);
        /**
         * Méthode permettant d'alimenter l'objet en entrée de la ressource REST consoControleCompte à partir du contexte Izivente
         * @param {LanceurIzivente.Modeles.IContexteIzivente} contexteIzivente - Le contexte izivente
         */
        alimenterObjetParametreControleConsoCompte(contexteIzivente: LanceurIzivente.Modeles.IContexteIzivente): LanceurIzivente.Modeles.IControleConsoCompteEntree;
        /**
         * Méthode permettant d'alimenter l'objet en entrée de la ressource REST consoControleCompte à partir du contexte Izivente
         * @param {LanceurIzivente.Modeles.IContexteIzivente} contexteIzivente - Le contexte izivente
         */
        /**
         * Méthode permettant d'alimenter l'objet en entrée de la ressource REST eligibiliteCreditConso à partir du contexte Izivente et de la réponse de la ressource
         * REST consoControleCompte
         * @param {LanceurIzivente.Modeles.IContexteIzivente} contexteIzivente - Le contexte izivente
         * @param {LanceurIzivente.Modeles.IConsoControleCompteResponse} reponseControleConsoCompte - La réponse de la ressource REST consoControleCompte
         */
        alimenterObjetParametreEligibiliteCreditConso(contexteIzivente: LanceurIzivente.Modeles.IContexteIzivente, reponseControleConsoCompte: LanceurIzivente.Modeles.IConsoControleCompteResponse): LanceurIzivente.Modeles.IEligibiliteCreditConsoEntree;
        /**
         * Méthode permettant d'alimenter l'objet en entrée de la ressource REST LireParamVersion à partir du contexte Izivente
         * @param {LanceurIzivente.Modeles.IContexteIzivente} contexteIzivente - Le contexte izivente
         */
        alimenterObjetParametreLireParametrageVersionApplication(contexteIzivente: LanceurIzivente.Modeles.IContexteIzivente): LanceurIzivente.Modeles.ILireParamVersionEntree;
        /**
         * Méthode permettant d'alimenter l'objet en entrée de la ressource REST jetonSecurise à partir du contexte Izivente, de la réponse de la ressource REST LireParamVersion,
         * de la réponse de la ressource REST eligibiliteCreditConso et de la réponse de la ressource REST consoControleCompte
         * @param {LanceurIzivente.Modeles.IContexteIzivente} contexteIzivente - Le contexte izivente
         */
        alimenterObjetParametreDemandeJetonSecurise(contexteIzivente: LanceurIzivente.Modeles.IContexteIzivente, parametre: LanceurIzivente.Modeles.ILireParamVersionResponse, eligibiliteCreditConso: LanceurIzivente.Modeles.IEligibiliteCreditConso, consoControleCompte: LanceurIzivente.Modeles.IConsoControleCompteResponse, valeurEntree: any): LanceurIzivente.Modeles.IDemandeJetonSecurise;
        /**
         * Méthode permettant d'alimenter le contexte de reroutage à partir du contexte Izivente, de la réponse de la ressource REST LireParamVersion,
         * de la réponse de la ressource REST consoControleCompte, de la réponse de la ressource REST eligibiliteCreditConso et du code transaction
         * @param {LanceurIzivente.Modeles.IContexteIzivente} contexteIzivente - Le contexte izivente
         */
        alimenterContextReroutage(contexteIzivente: LanceurIzivente.Modeles.IContexteIzivente, parametre: LanceurIzivente.Modeles.ILireParamVersionResponse, consoControlCompte: LanceurIzivente.Modeles.IConsoControleCompteResponse, eligibiliteCreditConso: LanceurIzivente.Modeles.IEligibiliteCreditConso, codeTransaction: string): LanceurIzivente.Modeles.IContexteReroutage;
        /**
         * Méthode permettant d'alimenter la liste des participants pour le contexte de reroutage
         * @param {string} numeroPersonne - Le numéro de la personne
         */
        alimenterParticipantReroutage(numeroPersonne: string): LanceurIzivente.Modeles.IParticipantReroutage;
        /**
         * Méthode permettant d'alimenter le protocoke technique du contexte de reroutage
         * @param {LanceurIzivente.Modeles.IContexteIzivente} contexteIzivente - Le contexte izivente
         */
        alimenterProtocoleTechniqueReroutage(contexteIzivente: LanceurIzivente.Modeles.IContexteIzivente): LanceurIzivente.Modeles.IProtocoleTechniqueReroutage;
    }
}

declare module LanceurIzivente.Services {
    /**
     * Ensemble des services métiers nécessaires au lancement d'Izivente
     */
    class IziventeService {
        private $timeout;
        private serviceAgentExtended;
        private $location;
        private transcodification;
        valeurEntree: any;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService);
        /**
         * Méthode permettant de déterminer si l'utilisateur d'une application est habilité à accéder à izivente
         * @param {LanceurIzivente.Modeles.IConsoControleCompteResponse || LanceurIzivente.Modeles.IErreur } reponseIzivente - La réponse izivente à traiter
         */
        determinerAccesIzivente(reponseIzivente: any): string[];
        /**
         * Méthode permettant de déterminer le code établissement pour natixis à partir du code établissement de la caisse d'Epargne
         * @param {string} codeEtablissement - Le code établissement de la caisse d'Epargne
         */
        determinerCodeEtablissementPourNatixis(codeEtablissement: string): string;
        /**
         * Méthode permettant de déterminer le code transaction à transmettre dans le flux de reroutage
         * @param {string} valeurEntree - La valeur d'entrée dans la SPA (1 ou 2)
         * @param {string} numeroPersonne - Le numéro de la personne provenant du contrat d'entrée de Lisa
         * @param {string} compteSupport - Le compte support provenant du contrat d'entrée de Lisa
         * @param {string} typeAppel - Le type d'appel provenant du contrat d'entrée de Lisa
         * @param {string} produit - Le produit provenant du contrat d'entrée de Lisa
         */
        determinerCodeTransaction(numeroPersonne: string, compteSupport: string, typeAppel: string, produit: string, valeurEntree: any): any;
        /**
         * Détermine la valeur du mode éditique
         * @param {string} identifiant - L'ID_IDN provenant du contrat LISA
         * @param {string} compteSupport - Le compte support provenant du contrat LISA
         * @param {string} parametre - Le code paramètre provenant de l'appel à la ressource LireTableParametrageVersionApplication
         */
        determinerModeEditique(identifiant: string, compteSupport: string, parametre: string): string;
        /**
         * Détermine le profil d'accès à izivente à partir du code profil
         * @param {string} codeProfil - Le code profil récupéré
         */
        determinerProfilAccesIzivente(codeProfil: string): string;
        /**
         * Méthode permmetant de soummettre le formulaire izivente pour lancer Izivente
         * Ne nécessite pas de tests unitaires car pas de règles métier
         */
        soumissionFormulaireIzivente(adresseIzivente: string): void;
    }
}

declare module LanceurIzivente.Services {
    /**
     * Classe représentant l'ensemble des ressources REST de l'application
     */
    class RessourcesRestService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Recupère l'éligibilité au crédit conso
         * @param {LanceurIzivente.Modeles.IControleConsoCompteEntree} entreeConsoCompte - L'ensemble des paramètres nécessaires au contrôle conso compte
         */
        controlerConsoCompte(entreeConsoCompte: LanceurIzivente.Modeles.IControleConsoCompteEntree): ng.IPromise<LanceurIzivente.Modeles.IConsoControleCompteResponse>;
        /**
         * Recupère l'éligibilité au crédit conso
         * @param {LanceurIzivente.Modeles.IEligibiliteCreditConsoEntree} entreeEligibiliteCrediConso - L'ensemble des paramètres nécessaires à la récupération de l'éligibilité du crédit conso
         */
        recupererEligibiliteCrediConso(entreeEligibiliteCrediConso: LanceurIzivente.Modeles.IEligibiliteCreditConsoEntree): ng.IPromise<LanceurIzivente.Modeles.IEligibiliteCreditConso>;
        /**
         * Recupère le paramétrage de l'appel à l'application izivente
         * @param {LanceurIzivente.Modeles.ILireParamVersionEntree} entreeLireParamVersion - L'ensemble des paramètres nécessaires à la récupération du paramétrage
         */
        lireTableParametrageVersionApplication(entreeLireParamVersion: LanceurIzivente.Modeles.ILireParamVersionEntree): ng.IPromise<LanceurIzivente.Modeles.ILireParamVersionResponse>;
        /**
         * Recupère un jeton sécurisé pour faire l'appel à izivente
         * @param {LanceurIzivente.Modeles.IDemandeJetonSecurise} demandeJetonSecurise - Représente la demande de jeton sécurisé
         */
        demanderJetonSecurise(demandeJetonSecurise: LanceurIzivente.Modeles.IDemandeJetonSecurise): ng.IPromise<LanceurIzivente.Modeles.IReponseJetonSecurise>;
    }
}
