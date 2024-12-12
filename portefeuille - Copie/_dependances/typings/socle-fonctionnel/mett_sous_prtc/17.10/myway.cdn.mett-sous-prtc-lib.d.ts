
declare module libMettSousPrtc {
    var lib: any;
}

declare module libMettSousPrtc {
    class Constantes {
        static CODE_APPLICATION: string;
        static codeParametreLisa: {
            IDENTIFIANT_PERSONNE: string;
            NOM_PROCESSUS_APPELANT: string;
        };
        static codeActionCommunication: {
            INCLUS: string;
            EXCLUS: string;
        };
        static NOMBRE_ET_PAR_PAGE_TABLEAU: number;
        static identifiantChampsRequis: {
            IDENTIFIANT_MOIS_REEDITION: string;
            IDENTIFIANT_DATE_RECEPTION: string;
        };
        static modeAffichageCJ: {
            CREATION: string;
            MODIFICATION: string;
        };
        /**
         * Constantes pour format de date
         */
        static formatDate: {
            FORMAT_DATE_DD_MM_YYYY: string;
        };
        /**
         * Constantes pour identifier les données délocalisées
         */
        static donneesDelocalisees: {
            DU2C: string;
            XX52: string;
            XX51: string;
        };
        constructor();
    }
}

declare module libMettSousPrtc {
    /**
     * Classe de gestion de la casse
     */
    class HistoriqueCapaciteJuridiqueControleur {
        private $modalInstance;
        private historiqueCapaciteJuridiqueService;
        private miseSousProtectionService;
        private utilService;
        static $inject: string[];
        chargementEnCours: boolean;
        listeCJ: Array<modeles.ICapaciteJuridique>;
        paramPaginationHistoCJ: Object;
        /**
         * Getter sur date de mise à jour de l'entité titulaire au format JJ/MM/AAAA
         * @return {string} date formatée
         */
        formaterDate(dateAFormater: string): string;
        /**
         * Getter sur libellé numéro de personne
         * @return {string} le libellé sur 9 caractères paddé avec des 0 à gauche
         */
        formaterLibelleNumeroAgent(numeroPersonne: number): string;
        /**
         * Constructeur
         * @param $modalInstance {IModalServiceInstance}
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, historiqueCapaciteJuridiqueService: HistoriqueCapaciteJuridiqueService, miseSousProtectionService: MiseSousProtectionService, utilService: UtilService);
        /**
         * Vérifier s'il faut afficher la pagination pour la liste des entités titulaires actives
         * @return {boolean} true s'il faut afficher, false sinon
         */
        afficherPaginationHistoCJ(): boolean;
        getLibelleCJ(codeCJ: string): string;
        afficherCaracteristiqueJugement(): void;
        /**
         * Annuler la navigation vers données de gestion
         */
        fermer(): void;
    }
}

declare module libMettSousPrtc {
    class MiseSousProtectionControleur {
        private serviceAgent;
        private miseSousProtectionService;
        private utilService;
        private $modalInstance;
        private $q;
        private messageService;
        private $rootScope;
        private $document;
        private mwEvents;
        static $inject: string[];
        listeCompte: Array<modeles.Contrat>;
        listeEquipementExclus: Array<modeles.ContratCommGerant>;
        informationTutelle: modeles.Tutelle;
        chargementEnCours: boolean;
        labelCJ: string;
        listeMois: Array<modeles.Mois>;
        mesErreurs: Array<MyWay.UI.IErreurFormulaire>;
        afficherSyntheseErreurs: boolean;
        panelComDisable: boolean;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, miseSousProtectionService: MiseSousProtectionService, utilService: UtilService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $q: ng.IQService, messageService: MessageService, $rootScope: ng.IRootScopeService, $document: ng.IDocumentService, mwEvents: MyWay.UI.IMwEvents);
        getLibelle(contrat: modeles.ContratCommGerant): string;
        init(): void;
        valider(): void;
        /**
         * Naviguer vers une ancre dans la page
         */
        goToAnchor(ancre: string): void;
        validerFormulaire(): boolean;
        annuler(): void;
        /**
         * Annuler la navigation vers données de gestion
         */
        fermer(): void;
        testerServiceAgent(): void;
    }
}

declare module libMettSousPrtc.modeles {
    class CapaciteJuridique implements ICapaciteJuridique {
        codeCapaciteJuridique: string;
        codeAgent: number;
        codeEtablissement: string;
        identifiantPersonne: number;
        dateModification: Date;
        identifiantEDS: number;
    }
}

declare module libMettSousPrtc.modeles {
    interface ICapaciteJuridique {
        codeCapaciteJuridique: string;
        codeAgent: number;
        codeEtablissement: string;
        identifiantPersonne: number;
        dateModification: Date;
        identifiantEDS: number;
    }
}

declare module libMettSousPrtc.modeles {
    class Compte implements ICompte {
        numeroCompte: string;
        codeAction: string;
        codeTypeProduitService: string;
    }
    class Personne implements IPersonne {
        identifiantPersonne: number;
        codeTypeCapaciteJuridique: string;
        codeAdministration: string;
    }
    class CompteExclu implements ICompteExclu {
        codeGuichet: string;
        listeCompte: Array<Compte>;
        personneProtegee: Personne;
        codeEtablissement: string;
    }
}

declare module libMettSousPrtc.modeles {
    interface ICompte {
        numeroCompte: string;
        codeAction: string;
        codeTypeProduitService: string;
    }
    interface IPersonne {
        identifiantPersonne: number;
        codeTypeCapaciteJuridique: string;
        codeAdministration: string;
    }
    interface ICompteExclu {
        codeGuichet: string;
        listeCompte: Array<ICompte>;
        personneProtegee: IPersonne;
        codeEtablissement: string;
    }
}

declare module libMettSousPrtc.modeles {
    interface IDonneesContexte {
        donneesDelocalisees: IDonneesDelocalisees;
    }
    /**
     * Interface paramètres LISA
     */
    interface IParametresLisa {
        identifiantPersonne: string;
        nomProcessusAppelant?: string;
    }
    /**
     * Interface données délocalisées
     */
    interface IDonneesDelocalisees {
        donneesDelocaliseesDU2C: Array<any>;
        donneesDelocaliseesXX52: Array<any>;
        donneesDelocaliseesXX51: Array<any>;
    }
    interface IDonneeFamilleOpposition {
        codeFamille: string;
        libelleFamille: string;
        listeMotif: Array<IDonneeMotifOpposition>;
    }
    interface IDonneeMotifOpposition {
        codeMotif: string;
        libelleMotif: string;
    }
    class DonneeFamilleOpposition implements IDonneeFamilleOpposition {
        codeFamille: string;
        libelleFamille: string;
        listeMotif: Array<DonneeMotifOpposition>;
    }
    class DonneeMotifOpposition implements IDonneeMotifOpposition {
        constructor(code: string, libelle: string);
        codeMotif: string;
        libelleMotif: string;
    }
    /**
     * Interface élément de données délocalisées
     */
    interface IDonneesDelocaliseesItem {
        Key: string;
        Value: string;
    }
}

declare module libMettSousPrtc.modeles {
    class EquipementClient implements IEquipementClient {
        listeClient: Array<Client>;
    }
    class Client implements IClient {
        constructor();
        codeEtablissement: string;
        identifiantTiers: string;
        listeContrat: Array<Contrat>;
    }
    class Contrat implements IContrat {
        identifiantContrat: string;
        riceContrat: string;
        codeEtatContrat: string;
        dateDebutEffet: Date;
        dateFinEffet: Date;
        identifiantEntiteTitulaire: string;
        libelleEntiteTitulaire: string;
        indicateurResponsableET: boolean;
        modeCompositionET: string;
        codeUsageET: string;
        identifiantProduit: number;
        libelleProduit: string;
        valeurProduit: number;
        codeDeviseContrat: string;
        valeurProduitDevise: number;
    }
    class ContratCommGerant extends Contrat {
        estInclus: boolean;
        numeroContrat: string;
        codeTypeProduitService: string;
        constructor(contratBase: Contrat, estInclus: boolean, numeroContrat: string, codeTypeProduitService: string);
    }
}

declare module libMettSousPrtc.modeles {
    interface IEquipementClient {
        listeClient: Array<IClient>;
    }
    interface IClient {
        codeEtablissement: string;
        identifiantTiers: string;
        listeContrat: Array<IContrat>;
    }
    interface IContrat {
        identifiantContrat: string;
        riceContrat: string;
        codeEtatContrat: string;
        dateDebutEffet: Date;
        dateFinEffet: Date;
        identifiantEntiteTitulaire: string;
        libelleEntiteTitulaire: string;
        indicateurResponsableET: boolean;
        modeCompositionET: string;
        codeUsageET: string;
        identifiantProduit: number;
        libelleProduit: string;
        valeurProduit: number;
        codeDeviseContrat: string;
        valeurProduitDevise: number;
    }
}

declare module libMettSousPrtc.modeles {
    class Tutelle implements ITutelle {
        constructor();
        referenceTribunal: string;
        nomTribunal: string;
        dateJugement: Date;
        nomDelegue: string;
        dateDerniereModificationMesure: Date;
        motifDerniereModification: string;
        dateDebutApplicationMesure: Date;
        moisReddition: string;
        dateReceptionMesure: Date;
        conditionRepresentation: string;
        dateFinApplicationMesure: Date;
        codeTypeCapaciteJuridique: string;
        codeAdministrationSpecifique: string;
        codeEtablissement: string;
        libelleTypeCapaciteJuridique: string;
        libelleAdministrationSpecifique: string;
        identifiantPersonne: number;
    }
}

declare module libMettSousPrtc.modeles {
    interface ITutelle {
        referenceTribunal: string;
        nomTribunal: string;
        dateJugement: Date;
        nomDelegue: string;
        dateDerniereModificationMesure: Date;
        motifDerniereModification: string;
        dateDebutApplicationMesure: Date;
        moisReddition: string;
        dateReceptionMesure: Date;
        conditionRepresentation: string;
        dateFinApplicationMesure: Date;
        codeTypeCapaciteJuridique: string;
        codeAdministrationSpecifique: string;
        codeEtablissement: string;
        libelleTypeCapaciteJuridique: string;
        libelleAdministrationSpecifique: string;
        identifiantPersonne: number;
    }
}

declare module libMettSousPrtc.modeles {
    class Mois {
        libelle: string;
        code: string;
        constructor(libelle: string, code: string);
    }
}

declare module libMettSousPrtc {
    interface IDonneesDelocaliseesItem {
        Key: string;
        Value: string;
    }
    /**
     * Classe de gestion de la casse
     */
    class HistoriqueCapaciteJuridiqueService {
        private serviceAgentExtended;
        private $q;
        private modalService;
        private urlCapaciteJuridique;
        private utilService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, modalService: MyWay.UI.IModalService, urlCapaciteJuridique: string, utilService: UtilService);
        codeEtablissement: string;
        identifiantPersonne: string;
        recupererListeHistoriqueCJ(): ng.IPromise<Array<modeles.ICapaciteJuridique>>;
        /**
         * Affiche la popin
         */
        afficherHistoriqueCJ(codeEtablissement: string, identifiantPersonne: string): void;
    }
}

declare module libMettSousPrtc {
    interface IMessageService {
        afficherModaleInfo(entete: string, message: string, avecIcon?: boolean): ng.IPromise<any>;
        afficherModaleErreur(entete: string, message: string): ng.IPromise<any>;
        afficherConfirmation(entete: string, message: string): ng.IPromise<any>;
        afficherNotificationConfirmation(message: string): void;
        extractErreur(data: any): any;
        log(message: string, detail?: any): void;
        logSendRequest(msg: string): void;
        debug(message: string, action?: string, detail?: any): void;
        error(message: string, action?: string, detail?: any): void;
        info(message: string, action?: string, detail?: any): void;
        warning(message: string, action?: string, detail?: any): void;
    }
    class MessageService implements IMessageService {
        private modalService;
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Constructeur
         * @param modalService {IModalService}
         * @param serviceAgentExtended {ServiceAgentExtended}
         * @param mwNotificationService {IMwNotificationService}
         */
        constructor(modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Afficher une information sous forme de modale
         * @param entete {string} intitulé de l'information en entête de la modale
         * @param message {string} message d'information dans le corps de la modale
         * @param avecIcon {boolean} affichage avec icône info ou non (par défaut)
         * @return {IPromise<any>} promesse sur objet quelconque retourné lors de la fermeture de la modale
         */
        afficherModaleInfo(entete: string, message: string, avecIcon?: boolean): ng.IPromise<any>;
        /**
         * Afficher une erreur sous forme de modale
         * @param entete {string} intitulé de l'erreur en entête de la modale
         * @param message {string} message d'erreur dans le corps de la modale
         * @return {IPromise<any>} promesse sur objet quelconque retourné lors de la fermeture de la modale
         */
        afficherModaleErreur(entete: string, message: string): ng.IPromise<any>;
        /**
         * Afficher une demande de confirmation sous forme de modale
         * @param entete {string} intitulé de la confirmation en entête de la modale
         * @param message {string} message de confirmation dans le corps de la modale
         * @return {IPromise<any>} promesse sur objet quelconque retourné lors de la fermeture de la modale
         */
        afficherConfirmation(entete: string, message: string): ng.IPromise<any>;
        /**
         * Extraire les données d'erreur pour en faire un message texte
         * @param data {any} données d'erreur (de type MyWay.Services.Erreur ou autre)
         * @return {any} message d'erreur (texte ou autre)
         */
        extractErreur(data: any): any;
        /**
         * L'idée ici est de centraliser les LOGS afin de pouvoir les désactiver sur une ligne de code.
         * log/warn() sont temporaires, et doivent pouvoir être supprimés.
         * trace/error/info/warning() a pour objectif d'être permanent et géré par le socle technique.
         *
         * Loguer un message d'erreur suivi éventuellement d'un objet associé
         * @param message {string} message d'erreur
         * @param detail {any} objet associé à l'erreur, facultatif
         */
        log(message: string, detail?: any): void;
        /**
         * Loguer un appel WS REST
         * @param message {string} URL appelée
         */
        logSendRequest(message: string): void;
        /**
         * Loguer un message de niveau debug
         * @param message {string} message de debug
         * @param action {string} action associée, facultatif
         * @param detail {any} objet associé, facultatif
         */
        debug(message: string, action?: string, detail?: any): void;
        info(message: string, action?: string, detail?: any): void;
        warning(message: string, action?: string, detail?: any): void;
        error(message: string, action?: string, detail?: any): void;
        afficherNotificationConfirmation(message: string): void;
    }
}

declare module libMettSousPrtc {
    class MiseSousProtectionService {
        private serviceAgentExtended;
        private $q;
        private urlPPTutelle;
        private urlEquipementClient;
        private urlCompteExclus;
        private utilService;
        private modalService;
        static $inject: string[];
        personneProtege: modeles.Personne;
        codeEtablissement: string;
        identifiantPersonne: string;
        codeGuichet: string;
        modeAffichage: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, urlPPTutelle: string, urlEquipementClient: string, urlCompteExclus: string, utilService: UtilService, modalService: MyWay.UI.IModalService);
        /**
         * Valoriser les données délocalisées à partir de leur rubrique
         * @param rubrique {string} rubrique de données délocalisées
         * @param donnees {Array<IDonneesDelocaliseesItem>} données délocalisées correspondant à la rubrique
         */
        recupererInfoTutelle(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<modeles.Tutelle>;
        recupererListeCompteExclus(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<Array<modeles.ContratCommGerant>>;
        /**
         * Affiche la popin
         */
        afficherCaracteristiquesJugement(codeEtablissement: string, identifiantPersonne: string, mode?: string): void;
        /**
         * caracteristique de jugement de mise sous protection via Q/R
         */
        modificationTutelle(tutelle: modeles.Tutelle): ng.IPromise<modeles.Tutelle>;
        modificationCompteCommGerant(listeCompteCommGerant: Array<modeles.ContratCommGerant>): ng.IPromise<modeles.CompteExclu>;
    }
}

declare module libMettSousPrtc {
    class UtilService {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        private $q;
        private urlEquipementClient;
        static $inject: string[];
        donneesContexte: modeles.IDonneesContexte;
        valider: Function;
        annuler: Function;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, urlEquipementClient: string);
        /**
         * Effectuer un padding de zéros à gauche sur un nombre
         * @param nb {number} le nombre à transformer
         * @param longueurCible {number} longueur de la chaîne retournée
         * @return {string} la chaîne constituée du nombre en entrée paddé avec des 0 à gauche telle que sa longueur vaut longueurCible
         */
        leftPad(nb: number, longueurCible: number): string;
        initialiserDonneesDeloc(): ng.IPromise<boolean>;
        /**
         * Valoriser les données délocalisées à partir de leur rubrique
         * @param rubrique {string} rubrique de données délocalisées
         * @param donnees {Array<IDonneesDelocaliseesItem>} données délocalisées correspondant à la rubrique
         */
        private setDonneesDelocaliseesRubrique(rubrique, donnees);
        recupererListeCompte(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<modeles.IEquipementClient>;
    }
}
