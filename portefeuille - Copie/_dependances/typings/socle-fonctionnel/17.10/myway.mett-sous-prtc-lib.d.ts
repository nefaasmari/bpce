
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
        private utilService;
        static $inject: string[];
        listeCJ: Array<modeles.ICapaciteJuridique>;
        /**
         * Constructeur
         * @param $modalInstance {IModalServiceInstance}
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, historiqueCapaciteJuridiqueService: HistoriqueCapaciteJuridiqueService, utilService: UtilService);
        getLibelleCJ(codeCJ: string): string;
        /**
         * Annuler la navigation vers données de gestion
         */
        fermer(): void;
    }
}

declare module libMettSousPrtc {
    class MiseEnOppositionControleur {
        private serviceAgent;
        private miseEnOppositionService;
        private utilService;
        private $modalInstance;
        static $inject: string[];
        informationTutelle: modeles.Tutelle;
        chargementEnCours: boolean;
        familleOppositionChoisi: modeles.DonneeFamilleOpposition;
        motifOppositionChoisi: modeles.DonneeMotifOpposition;
        listeFamilleMotifOpposition: Array<modeles.DonneeFamilleOpposition>;
        listeCompte: Array<modeles.Contrat>;
        openDateDebutOpposition: boolean;
        openDateFinOpposition: boolean;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, miseEnOppositionService: MiseEnOppositionService, utilService: UtilService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        init(): void;
        chargerListeFamilleMotifOpposition(): void;
        onSelectFamilleOpposition($item: any, $model: any): void;
        valider(): void;
        annuler(): void;
        /**
         * Annuler la navigation vers données de gestion
         */
        fermer(): void;
        testerServiceAgent(): void;
    }
}

declare module libMettSousPrtc {
    class MiseSousProtectionControleur {
        private serviceAgent;
        private miseSousProtectionService;
        private utilService;
        private $modalInstance;
        static $inject: string[];
        listeCompte: Array<modeles.Contrat>;
        listeEquipementExclus: Array<modeles.ContratCommGerant>;
        informationTutelle: modeles.Tutelle;
        chargementEnCours: boolean;
        labelCJ: string;
        listeMois: Array<modeles.Mois>;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, miseSousProtectionService: MiseSousProtectionService, utilService: UtilService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        getLibelle(contrat: modeles.ContratCommGerant): string;
        init(): void;
        valider(): void;
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
        constructor(contratBase: Contrat, estInclus: boolean, numeroContrat: string);
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
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, modalService: MyWay.UI.IModalService, urlCapaciteJuridique: string);
        codeEtablissement: string;
        identifiantPersonne: string;
        recupererListeHistoriqueCJ(): ng.IPromise<any>;
        /**
         * Affiche la popin
         */
        afficherHistoriqueCJ(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<any>;
    }
}

declare module libMettSousPrtc {
    class MiseEnOppositionService {
        private serviceAgentExtended;
        private $q;
        private urlCompteOpposition;
        private utilService;
        private modalService;
        static $inject: string[];
        codeEtablissement: string;
        identifiantPersonne: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, urlCompteOpposition: string, utilService: UtilService, modalService: MyWay.UI.IModalService);
        recupererListeCompteOpposition(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<any>;
        /**
         * Affiche la popin
         */
        afficherMiseEnOpposition(codeEtablissement: string, identifiantPersonne: string): void;
    }
}

declare module libMettSousPrtc {
    class MiseSousProtectionService {
        private serviceAgentExtended;
        private $q;
        private urlTierTutelle;
        private urlEquipementClient;
        private urlCompteExclus;
        private utilService;
        private modalService;
        static $inject: string[];
        codeEtablissement: string;
        identifiantPersonne: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, urlTierTutelle: string, urlEquipementClient: string, urlCompteExclus: string, utilService: UtilService, modalService: MyWay.UI.IModalService);
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
        afficherMiseSousProtection(codeEtablissement: string, identifiantPersonne: string): void;
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

declare module libMettSousPrtc.Directive {
    /**
     * Contrôleur pour directive footer générique avec boutons annuler et valider
     */
    class FooterActionsPopinControleur {
        private $window;
        private $location;
        private $route;
        private modalService;
        private utilService;
        static $inject: string[];
        /**
         * Constructeur
         * @param $window {IWindowService}
         * @param $location {ILocationService}
         * @param $route {IRouteService}
         */
        constructor($window: ng.IWindowService, $location: ng.ILocationService, $route: ng.route.IRouteService, modalService: MyWay.UI.IModalService, utilService: UtilService);
        chargerPersonne(): void;
        /**
         * Retour à la page précédente
         */
        retour(): void;
        valider(): void;
        annuler(): void;
    }
}

declare module libMettSousPrtc.Directive {
    /**
     * Directive footer générique avec boutons annuler et valider
     */
    function FooterActionsPopinDirective(): ng.IDirective;
}
