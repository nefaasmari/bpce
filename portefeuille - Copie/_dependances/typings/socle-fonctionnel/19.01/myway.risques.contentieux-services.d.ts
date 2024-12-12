
declare namespace ContentieuxServices.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
        const serviceAgent: string;
        const modalService: string;
    }
    namespace Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
        const applicationLoggerName: string;
    }
    namespace Metier {
        const entiteTitulaireUtils: string;
    }
    namespace Services {
        const habilitationsService: string;
        const cacheService: string;
        const actionPlanifieeService: string;
        const noteAlerteService: string;
        const entiteTitulaireService: string;
        const personneService: string;
        const dossierSyntheseService: string;
        const garantieService: string;
        const soldeService: string;
    }
}

declare namespace ContentieuxServices {
    var app: any;
}

declare namespace ContentieuxServices.Constantes.Agenda {
    namespace NoteAlerte {
        const libellePlusieursAlertesSurDossier: string;
    }
}

declare namespace ContentieuxServices.Constantes.Dossier {
    namespace Etiquette {
        const cede: string;
        const archive: string;
        const cloture: string;
        const lienEtatDate: string;
    }
}

declare namespace ContentieuxServices.Constantes {
    namespace ContentieuxHabilitations {
        const superviseur: string;
        const consultation: string;
        const gestionnaire: string;
        type Roles = "superviseur" | "consultation" | "gestionnaire";
    }
}

declare namespace ContentieuxServices.Modeles.Agenda {
    interface IActionPlanifiee extends IEvenement {
        commentaire: string;
        libelle: string;
        prioriteAlerte: string;
    }
}

declare namespace ContentieuxServices.Modeles.Agenda {
    interface IEvenement {
        dateEvenement: string;
        numeroDossier: number;
        portefeuille: string;
        identifiantEntiteTitulaire: string;
        entiteTitulaire: ContentieuxServices.Modeles.EntiteTitulaire.IEntiteTitulaire;
    }
}

declare namespace ContentieuxServices.Modeles.Agenda {
    interface IAlerteAffectation extends IAlerte {
        montantTotal: number;
        montantExigible: number;
        motif: string;
        numeroPersonneGarantie: number;
        garantiePersonneMorale: Modeles.Garantie.IGarantiePersonneMorale;
    }
    interface IAlerteProcedureCollective extends IAlerte {
        montantExigible: number;
        montantTotal: number;
        motif: string;
        numeroPersonneGarantie: number;
        garantiePersonneMorale: Modeles.Garantie.IGarantiePersonneMorale;
    }
    interface IAlerteSurendettement extends IAlerte {
        motifRejet: string;
    }
    interface IAlerteEcheancier extends IAlerte {
        nombreAlertesDossier: number;
        libelleAlertePourListe: string;
        numeroPersonneGarantie: number;
        garantiePersonneMorale: Modeles.Garantie.IGarantiePersonneMorale;
    }
    interface IAlerte extends IEvenement {
        libelleAlerte: string;
    }
}

declare namespace ContentieuxServices.Modeles.Contrat {
    interface IContratMySys {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        estOuvert: boolean;
        referenceProduitService: string;
        libelleTypeProduitService: string;
        numeroEntiteTitulaireContrat: number;
        identifiantPersonneContrat: number;
        codeRolePersonneContrat: string;
        nomPersonnePhysiqueContrat: string;
        prenomPersonnePhysiqueContrat: string;
        designationPersonnePhysiqueContrat: string;
        raisonSocialePersonneMoraleContrat: string;
    }
    interface IContratTuile {
        nature: string;
        reference: string;
        etiquetteContrat: string;
        dettes: Array<IDette>;
        etatEcheancier: string;
        dateDefaillance: string;
        topSynchro: boolean;
        dateRegularisation: string;
        identifiantCreance: string;
        codeActiviteCreance: number;
        codeDecheanceDuTerme: number;
        codePassageCreditStatutDouteux: string;
        codeGuichetInterbancaire: string;
        mtProvisionIFRS: number;
        nombreGarantie: number;
        topSolde: boolean;
        libelleTypeContrat: string;
    }
    interface IDette {
        nbImpaye: number;
        type: string;
        montant: number;
        montantCumuleEcheancesReportees?: number;
    }
}

declare namespace ContentieuxServices.Modeles.Dossier {
    interface IInfoDossierHistorique {
        listeEvenementsATraiter: Array<IEvenementCalendrier>;
        listeEvenementsRealises: Array<IEvenementCalendrierRealise>;
        listeEvenementsFuturs: Array<IEvenementCalendrier>;
        limiteEvenementsRealises?: number;
        limiteEvenementsFuturs?: number;
    }
    interface IEvenementCalendrier {
        dateEvenement: string;
        libelleEvenement?: string;
        libelleEvenementEtapeProcedure?: string;
        commentaire: string;
        identifiantContrat: string;
        dateCreationEvenement: string;
    }
    interface IEvenementCalendrierRealise extends IEvenementCalendrier {
        dateValidation: string;
    }
}

declare namespace ContentieuxServices.Modeles.Dossier {
    interface IInputDossier {
        identifiantPersonne: string;
        numeroDossier: string;
    }
    interface IDossier {
        numeroDossier: number;
        identifiantEntiteTitulaire: string;
        dateSuppressionPrevisionelle: string;
        dateBlocageConsultation: string;
        dateClotureDossier: string;
        dateCession: string;
        codeStatutDossier: string;
    }
    interface IDossierSynthese extends IDossier {
        typeUsageEntiteTitulaire: string;
        gerePar: string;
        cedeA: string;
        portefeuille: string;
        domiciliation: string;
        etiquette: string;
        montantTotal: number;
        exigible: number;
        statutDossierConsultable: string;
        motif: string;
    }
}

declare namespace ContentieuxServices.Modeles.EntiteTitulaire {
    interface IEntiteTitulaire {
        designation: string;
        identifiantEntiteTitulaire?: number;
        domiciliation: string;
        idDomiciliation: number;
        gerePar?: string;
        idGerePar?: number;
        modeComposition: string;
        typeUsage?: string;
        codeUsage?: string;
        modeCompositionIndivision?: string;
    }
}

declare namespace ContentieuxServices.Modeles.Garantie {
    interface IGarantiePersonneMorale {
        numeroPersonneGarantie: number;
        designationLongue: string;
    }
}

declare namespace ContentieuxServices.Modeles.Garantie {
    interface IGarantie {
        dateFinGarantie: string;
        surete: ISurete;
    }
    interface ISurete {
    }
    interface ISuretePersonnelle extends ISurete {
        quotite: number;
        numeroPersonne: number;
        designation: string;
    }
    interface ISureteReelle extends ISurete {
        montant: number;
        libelleGarantie: string;
    }
}

declare namespace ContentieuxServices.Modeles.Participant {
    type TypeRole = "Titulaire" | "Caution" | "Mandataire";
    class Participant {
        designation: string;
        idPersonne: number;
        role: TypeRole;
        libelle: string;
        estPro: boolean;
        titulaire: boolean;
        constructor(designation: string, idPersonne: number, titulaire?: boolean, estPro?: boolean, role?: TypeRole);
    }
}

declare namespace ContentieuxServices.Modeles.Solde {
    interface IDetailSolde {
        soldeReel: number;
        montantDecouvertAutorise: number;
        ecartes: number;
        reservesEncaissement: number;
        impayesSurPret: number;
        planReglement: number;
        soldeDisponible: number;
    }
    interface IDetailSoldeCDD extends IDetailSolde {
        fondsMisADisposition: number;
        fondsReserves: number;
    }
    interface IDetailSoldeCCE extends IDetailSolde {
        blocageProvisions: number;
    }
}

declare namespace ContentieuxServices.Services.Agenda {
    class ActionPlanifieeService implements IActionPlanifieeService {
        private serviceAgent;
        private alerteRestService;
        private entitetitulaireService;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, alerteRestService: Contentieux.RestServices.Services.IAlerteService, entitetitulaireService: ContentieuxServices.Services.EntiteTitulaire.IEntiteTitulaireService, $q: ng.IQService);
        /**
         * Liste des actions planifiées pour l'agent connecté
         */
        getActionsPlanifiees(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IActionPlanifiee[]>;
    }
}

declare namespace ContentieuxServices.Services.Agenda {
    interface IActionPlanifieeService {
        getActionsPlanifiees(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IActionPlanifiee[]>;
    }
}

declare namespace ContentieuxServices.Services.Agenda {
    interface INoteAlerteService {
        getAlertesAffectations(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteAffectation[]>;
        getAlertesProceduresCollectives(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteProcedureCollective[]>;
        getAlertesSurendettement(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteSurendettement[]>;
        getAlertesEcheanciers(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteEcheancier[]>;
    }
}

declare namespace ContentieuxServices.Services.Agenda {
    class NoteAlerteService implements INoteAlerteService {
        private serviceAgent;
        private alerteRestService;
        private entitetitulaireService;
        private garantieService;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, alerteRestService: Contentieux.RestServices.Services.IAlerteService, entitetitulaireService: ContentieuxServices.Services.EntiteTitulaire.IEntiteTitulaireService, garantieService: ContentieuxServices.Services.Garantie.IGarantieService, $q: ng.IQService);
        /**
         * Liste des alertes de nouvelles affectations de dossiers de l'agent connecté
         */
        getAlertesAffectations(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteAffectation[]>;
        /**
         * Liste des alertes de procédures collectives pour l'agent connecté
         */
        getAlertesProceduresCollectives(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteProcedureCollective[]>;
        /**
         * Liste des alertes de surrendettement pour l'agent connecté
         */
        getAlertesSurendettement(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteSurendettement[]>;
        /**
         * Liste des alertes sur échéanciers pour l'agent connecté
         */
        getAlertesEcheanciers(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteEcheancier[]>;
    }
}

declare module ContentieuxServices.Services.Commun {
    class CacheService {
        private $q;
        private logger;
        private cache;
        /**
         * 15 minutes
         */
        defaultTimeToLive: number;
        static $inject: string[];
        constructor($q: ng.IQService, logger: ContentieuxCommun.Logger.ILogger);
        /**
         * Set data To cache
         * @param key
         * @param object to store in cache
         * @param timeToLive in millisecond. -1 for infinite
         */
        private setToCache<T>(key, data, timeToLive);
        /**
         * Set promise result in cache
         * @param key
         * @param promise
         * @param timeToLive
         */
        private setToCacheFromPromise<T>(key, promise, timeToLive);
        /**
         *
         * @param key
         */
        private getFromCache<T>(key);
        /**
         * Try to resolve from cache. If not in cache, set the promise's result in cache and return the promise
         * @param key
         * @param promise
         * @param timeToLive
         */
        get<T>(key: string, promise: () => ng.IPromise<T>, timeToLive: number, fromCache?: boolean): ng.IPromise<T>;
        private isExpired(cacheData);
    }
}

declare module ContentieuxServices.Services.Commun {
    interface ICacheService {
        get<T>(key: string, promise: () => ng.IPromise<T>, timeToLive: number, fromCache?: boolean): ng.IPromise<T>;
        defaultTimeToLive: number;
    }
    interface ICacheData {
        data: any;
        timeToLive: number;
        instantiatedTime: number;
    }
}

declare namespace ContentieuxServices.Services.Dossier {
    class DossierSyntheseService implements IDossierSyntheseService {
        private dossierRestService;
        private serviceAgent;
        private $q;
        private entiteTitulaireService;
        private cacheService;
        private logger;
        static $inject: string[];
        constructor(dossierRestService: Contentieux.RestServices.Services.IDossierService, serviceAgent: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, entiteTitulaireService: Services.EntiteTitulaire.IEntiteTitulaireService, cacheService: Services.Commun.ICacheService, logger: ContentieuxCommun.Logger.ILogger);
        /**
         * Retrouve la liste de dossiers d'une personne
         * @param codeEtablissement
         * @param idPersonne
         * @return Modeles.Dossier.IDossierSynthese[]
         */
        getDossiersSynthese(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.Dossier.IDossierSynthese[]>;
        /**
         * Construit dossier pour la synthèse
         * @param listeDossierEntiteTitulaire
         * @param listinfosEntiteTitulaires
         * @param listeEntiteTitulaire
         */
        private createDossierSynthese(listeDossierEntiteTitulaire, listinfosEntiteTitulaires, listeEntiteTitulaire);
        /**
         * formatte identifiant de l'entité titulaire
         * @param entite
         */
        private extractIdEntiteTitulaire(entite);
        /**
         * Récupère les informations de base lors de la recherche d'un dossier
         * @param codeEtablissement
         * @param numeroDossier
         * @return Modeles.Dossier.IDossier
         */
        getDossierRecherche(codeEtablissement: string, numeroDossier: number): ng.IPromise<Modeles.Dossier.IDossier>;
        /**
         * Récupère les informations de base lors de la recherche d'un dossier et les participants
         * @param codeEtablissement
         * @param numeroDossier
         */
        getDossierRechercheEtParticipants(codeEtablissement: string, numeroDossier: number): ng.IPromise<[Modeles.Dossier.IDossier, ContentieuxServices.Modeles.Participant.Participant[]]>;
        /**
         * Récupère l'historique/calendrier du dossier
         * @param codeEtablissement
         * @param numeroDossier
         * @param identifiantCreance
         * @param fromCache
         */
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, identifiantCreance?: string, fromCache?: boolean): ng.IPromise<Modeles.Dossier.IInfoDossierHistorique>;
        /**
         * get les contrats Vario du dossier
         * @param codeEtablissement
         * @param numeroDossier
         * @param numeroInterneEds
         * @param fromCache
         */
        getContratsVario(codeEtablissement: string, numeroDossier: number, numeroInterneEds: string, fromCache?: boolean): ng.IPromise<Modeles.Contrat.IContratTuile[]>;
        /**
         * get les contrats MySys de l'entité titulaire
         * @param codeEtablissement
         * @param idEntiteTitulaire
         * @param fromCache
         */
        getContratsMySys(codeEtablissement: string, idEntiteTitulaire: string, fromCache?: boolean): ng.IPromise<[Modeles.Contrat.IContratMySys[], Modeles.Participant.Participant[]]>;
        /**
         * retourne les cuations d'un contrat MySys
         * @param contratRest
         */
        private mappingContratParticipants(contratRest);
        /**
         * mappe le contrat Rest en contrat MySys
         * @param contratRest
         */
        private mappingContrat(contratRest);
        /**
         * Retourne le code Etat de la Créance à renseigner pour l'appel de provision
         */
        private getCodeEtatCreance(codeActiviteCreance, codeDecheanceDuTerme, codePassageCreditStatutDouteux);
        /**
         * récupère la provision
         * @param codeEtablissement
         * @param idCreance
         * @param codeEtatCreance
         * @param codeGuichetInterbancaire
         */
        private getProvision(codeEtablissement, idCreance, codeEtatCreance, codeGuichetInterbancaire);
        /**
         * Mappe l'evenement REST en evenement Calendrier Réalisé
         * @param evtRest
         */
        private mappingEvenementRealise(evtRest);
        /**
         * Mappe l'evenement REST en evenement Calendrier
         * @param evtRest
         */
        private mappingEvenementCalendrier(evtRest);
    }
}

declare namespace ContentieuxServices.Services.Dossier {
    interface IDossierSyntheseService {
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, identifiantCreance?: string, fromCache?: boolean): ng.IPromise<Modeles.Dossier.IInfoDossierHistorique>;
        getContratsVario(codeEtablissement: string, numeroDossier: number, numeroInterneEds: string, fromCache?: boolean): ng.IPromise<Modeles.Contrat.IContratTuile[]>;
        getContratsMySys(codeEtablissement: string, idEntiteTitulaire: string, fromCache?: boolean): ng.IPromise<[Modeles.Contrat.IContratMySys[], Modeles.Participant.Participant[]]>;
        getDossiersSynthese(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.Dossier.IDossierSynthese[]>;
        getDossierRecherche(codeEtablissement: string, numeroDossier: number): ng.IPromise<ContentieuxServices.Modeles.Dossier.IDossier>;
        getDossierRechercheEtParticipants(codeEtablissement: string, numeroDossier: number): ng.IPromise<[Modeles.Dossier.IDossier, ContentieuxServices.Modeles.Participant.Participant[]]>;
    }
}

declare namespace ContentieuxServices.Services.EntiteTitulaire {
    class EntiteTitulaireService implements IEntiteTitulaireService {
        private personneRestService;
        private $q;
        private cacheService;
        static $inject: string[];
        constructor(personneRestService: Contentieux.RestServices.Services.IPersonneService, $q: ng.IQService, cacheService: Services.Commun.ICacheService);
        /**
         * Récupération d'une entiteTitulaire
         * @param idEntite Id Entite titulaire
         * @param fromCache false âr defaut
         */
        getEntiteTitulaire(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.EntiteTitulaire.IEntiteTitulaire>;
        /**
         * récupère les personnes liées à l'entité titulaire
         * @param codeEtablissement
         * @param idEntite
         * @param fromCache
         */
        getParticipants(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Participant.Participant[]>;
        /**
         * @description Récupère les personnes dont le natureLien est PE (à afficher dans Contacts) et s'il possède un natureLien LA, on indique que c'est un professionnel
         * @param liste
         */
        private getListePersonnesPE(liste);
        /**
         * ATTENTION: cette méthode fait un appel par idEntites au RestService
         * @param idEntites
         * @param fromCache
         */
        getEntitesTitulaires(codeEtablissement: string, idEntites: number[], fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        /**
         * récupère les informations sur l'entité titulaire à partir d'un identifiant Personne
         * @param codeEtablissement
         * @param idPersonne
         * @param fromCache
         */
        getEntitesTitulairesFromIdPersonne(codeEtablissement: string, idPersonne: number, fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
    }
}

declare namespace ContentieuxServices.Services.EntiteTitulaire {
    interface IEntiteTitulaireService {
        getEntiteTitulaire(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire>;
        getEntitesTitulaires(codeEtablissement: string, idEntites: number[], fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        getEntitesTitulairesFromIdPersonne(codeEtablissement: string, idPersonne: number, fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        getParticipants(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Participant.Participant[]>;
    }
}

declare namespace ContentieuxServices.Services.Garantie {
    class GarantieService implements IGarantieService {
        private serviceAgent;
        private tiersRestService;
        private dossierRestService;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, tiersRestService: Contentieux.RestServices.Services.ITiersService, dossierRestService: Contentieux.RestServices.Services.IDossierService, $q: ng.IQService);
        /**
         * Retourne les infos de la personne morale garantie
         * @param numeroPersoneGarantie
         * @param fromCache
         */
        getInformationGarantiePersonneMorale(numeroPersoneGarantie: number, fromCache?: boolean): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale>;
        /**
         * Retourne la listes des personnes morales en garantie
         * @param numeroPersoneGarantie : liste de numéro de personne
         * @param fromCache
         */
        getListeGarantiePersonneMorale(numeroPersoneGarantie: number[], fromCache?: boolean): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale[]>;
        /**
         * Récupère les listes des garanties pour un contrat
         * @param codeEtablissement
         * @param numeroDossier
         * @param identifiantCreance
         */
        getListeGarantiesContrat(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Modeles.Garantie.IGarantie[]>;
    }
}

declare namespace ContentieuxServices.Services.Garantie {
    interface IGarantieService {
        getInformationGarantiePersonneMorale(numeroPersoneGarantie: number): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale>;
        getListeGarantiePersonneMorale(idPersoneGarantie: number[], fromCache?: boolean): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale[]>;
        getListeGarantiesContrat(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Modeles.Garantie.IGarantie[]>;
    }
}

declare namespace ContentieuxServices.Services.Habilitations {
    class HabilitationsService implements IHabilitationsService {
        private serviceAgent;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent, $q: ng.IQService);
        private isRoleSuperviseur();
        private isRoleConsultation();
        private isRoleGestionnaire();
        isHabilite(role: Constantes.ContentieuxHabilitations.Roles): MyWay.Services.IPromesse<boolean>;
    }
}

declare namespace ContentieuxServices.Services.Habilitations {
    interface IHabilitationsService {
        isHabilite(role: Constantes.ContentieuxHabilitations.Roles): MyWay.Services.IPromesse<boolean>;
    }
}

declare namespace ContentieuxServices.Services.Personne {
    interface IPersonneService {
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
    }
}

declare namespace ContentieuxServices.Services.Personne {
    class PersonneService implements IPersonneService {
        private $q;
        private personneRestService;
        private cacheService;
        static $inject: string[];
        constructor($q: ng.IQService, personneRestService: Contentieux.RestServices.Services.IPersonneService, cacheService: Services.Commun.ICacheService);
        /**
         * récupère la note bale 2 de la personne
         * @param codeEtablissement
         * @param idPersonne
         */
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
    }
}

declare namespace ContentieuxServices.Services.Solde {
    interface ISoldeService {
        getDetailSoldeCCE(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCCE>;
        getDetailSoldeCDD(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCDD>;
    }
}

declare namespace ContentieuxServices.Services.Solde {
    class SoldeService implements ISoldeService {
        private $q;
        private soldeRestService;
        static $inject: string[];
        constructor($q: ng.IQService, soldeRestService: Contentieux.RestServices.Services.ISoldeService);
        getDetailSoldeCCE(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCCE>;
        getDetailSoldeCDD(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCDD>;
    }
}
