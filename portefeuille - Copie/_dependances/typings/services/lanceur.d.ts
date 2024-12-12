
declare module myway.c0410.lanceur {
    var lanceur: any;
}

declare module myway.c0410.lanceur {
    class DonneesBanques {
        codeBanque: string;
        codeGuichet: string;
        clients: DonneesClient[];
    }
    class DonneesClient {
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        codeOffre: number;
        modeCompositionEntiteTitulaire: number;
        libellePersonne: string;
    }
}

declare module myway.c0410.lanceur {
    class GenerateurOffreService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private restServiceUrlIdentification;
        private restServiceUrlParticulierInfo;
        private restServiceUrlMedia;
        private restServiceParticulierTiersLies;
        private restEntiteTitulaire;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        genererOffre(codeBanque: string, codeGuichet: string, numeroEntiteTitulaire: number, codeOffre: number, numeroPersonne: number): ng.IPromise<any>;
        getIdentificationClient(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<GestionGeneriqueOffres.Types.Tiers.Identification>;
        getParticulierInformation(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<GestionGeneriqueOffres.Types.Tiers.ParticulierInformation>;
        getMediasClient(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<GestionGeneriqueOffres.Types.Tiers.Media[]>;
        getParticulierTiersLies(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<GestionGeneriqueOffres.Types.Tiers.ParticulierTiersLie[]>;
        getInformationEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<GestionGeneriqueOffres.Types.InformationEntiteTitulaire>;
    }
}

declare module myway.c0410.lanceur {
    class MiseEnGestionControleur {
        private $modalInstance;
        private data;
        private $location;
        private serviceAgentExtended;
        static $inject: string[];
        private elementSupprimer;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, $location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        fermer(): void;
    }
}

declare module myway.c0410.lanceur {
    class CodeMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }
    class DonneeIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: Date;
    }
    interface Identification {
        donneeIdentification: DonneeIdentification;
        lutteAntiBlanchiment: LutteAntiBlanchiment;
        listMarche: Array<CodeMarche>;
        suiviComercial: SuiviCommercial;
    }
    class LutteAntiBlanchiment {
        codeAlerteVAO: boolean;
        messageAlerteVAO: string;
    }
    class SuiviCommercial {
        identifiantEDSSuiviCommercial: number;
        typeEDSSuiviCommercial: string;
        referenceExterneEDSSuiviCommercial: number;
        identifiantAgent: number;
        designationCourteEDS: string;
        designationLongueEDS: string;
    }
    class ParticulierInformation {
        identifiantPersonne: number;
        situationProfessionnelle: SituationProfessionnellle;
        codeEtablissement: string;
        etatCivil: EtatCivil;
        situationFiscale: SituationFiscale;
        donneesAdministratives: DonneesAdministratives;
    }
    class EtatCivil {
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        prenom: string;
        dateNaissance: Date;
        codeDepartementNaissance: string;
        codeInseePaysNationalite: string;
        dateNaturalisation: Date;
        codeSituationFamiliale: string;
        codeSexe: string;
        nomMarital: string;
        designationCourte: string;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        dateDeces: Date;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleInseePaysDoubleNationalite: string;
        dateEffetSituationFamiliale: Date;
        codeRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        libelleCapaciteJuridique: string;
        libelleCivilite: string;
        libelleDepartementNaissance: string;
        libellePaysNationalite: string;
        libellePaysNaissance: string;
        libelleRegimeMatrimonial: string;
        libelleSexe: string;
        libelleCodeSituationFamiliale: string;
        autresPrenom: string;
    }
    class SituationProfessionnellle {
        catégorieSocioProfessionnelle: string;
        denominationEmployeur: string;
        sirenEmployeur: string;
        dateEffetCSP: Date;
        dateEmbaucheEmployeurActuel: Date;
        codeTypeContratTravail: string;
        dateFinContratTravail: Date;
        codeNAFInsee: string;
        libelleCategorieSocioProfessionnelle: string;
        libelleNAFInsee: string;
        libelleTypeContratTravail: string;
        libelleProfession: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
    }
    class SituationFiscale {
        codeResident: string;
    }
    class DonneesAdministratives {
        codeAppartenanceReseau: string;
        indicateurSocietaire: string;
        libelleAppartenanceReseau: string;
        identifiantRelationEconomique: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
    }
    class Media {
        identificationPersonne: IdentificationPersonne;
        listeMedia: Array<ListeMedia>;
    }
    class IdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    class ListeMedia {
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: boolean;
        referenceAccesMedia: string;
        indicateurOptin: boolean;
        commentaire: string;
    }
    class ParticulierTiersLies {
        identificationPersonne: IdentificationPersonne;
        listeTiers: Array<ListeTiers>;
    }
    class ListeTiers {
        codeEtablissementLie: string;
        identifiantPersonneLiee: number;
        codeTypeLienInterPersonne: string;
        libelleTypeLienInterPersonne: string;
        codeSensLienInterPersonne: string;
    }
    interface InformationEntiteTitulaire {
        CaracteristiqueEntiteTitulaire: CaracteristiqueEntiteTitulaire;
        listeCompositionEntiteTitulaire: Array<CompositionEntiteTitulaire>;
    }
    class CompositionEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        natureLienET: string;
    }
    class CaracteristiqueEntiteTitulaire {
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
    }
}

declare module myway.c0410.lanceur {
    class ElementPanier {
        produit: GestionGeneriqueOffres.Types.IProduitCaracteristique;
        nomBloc: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        idBloc: string;
        modePersonne: boolean;
        mode: string;
        enregistre: boolean;
        supression: boolean;
        modifiable: boolean;
        cloture: boolean;
        statut: number;
        message: string;
        erreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
    }
    class Panier {
        private elementsPaniers;
        private elementsCloturables;
        constructor();
        ajouterElement(element: ElementPanier): ElementPanier;
        supprimerElement(element: ElementPanier): void;
        cloturerProduitService(produitservice: GestionGeneriqueOffres.Types.IProduitCaracteristique): void;
        getElementpaniers(): ElementPanier[];
        setElementpaniers(elements: ElementPanier[]): void;
        getElementsCloturables(): ElementPanier[];
        videPanier(): void;
        viderElementsCloturables(): void;
    }
}

declare module myway.c0410.lanceur {
    class RecapModalControleur {
        private $modalInstance;
        private data;
        private $location;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        modalRecapModel: RecapModel[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, $location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        fermer(): void;
        miseEnGestion(): void;
        private lancerServiceEnregistrement();
        lancerModale(): void;
    }
}

declare module myway.c0410.lanceur {
    class RecapModel {
        elementPanier: ElementPanier;
        statut: number;
        message: string;
    }
}

declare module myway.c0410.lanceur {
    class TestService {
        private serviceAgentExtended;
        static $inject: string[];
        tuiles: ElementPanier[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module myway.c0410.lanceur {
    class ValidationModalControleur {
        private $modalInstance;
        private data;
        private $location;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        modalRecapModel: RecapModel[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, $location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        fermer(): void;
        isOkDonneesFormulaire(): boolean;
        lancerModaleRecap(): void;
    }
}

declare module myway.c0410.lanceur {
    class BouquetLiberteTestControleur {
        $q: ng.IQService;
        $scope: ng.IScope;
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        modalService: MyWay.UI.ModalService;
        generateurOffreService: GenerateurOffreService;
        testService: TestService;
        espaceGlobalService: myway.c0410.commun.EspaceGlobalService;
        static $inject: string[];
        data: any;
        urlrest: string;
        error: MyWay.Services.Erreur;
        confirmation: boolean;
        panier: Panier;
        enOuverture: boolean;
        enAvenant: boolean;
        estParametre: boolean;
        modalRecapModel: RecapModel[];
        tuiles: ElementPanier[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        donneesCaisse: DonneesBanques[];
        personnes: GestionGeneriqueOffres.Types.Tiers.Personne[];
        informationsEntiteTitulaire: GestionGeneriqueOffres.Types.InformationEntiteTitulaire[];
        codeGuichetCourants: string;
        banqueSelectionne: DonneesBanques;
        clientSelectionne: DonneesClient;
        numeroOffreAcffecte: number;
        numeroCompte: number;
        catalogue: GestionGeneriqueOffres.Types.CatalogueNode;
        prdouitCatalogue: GestionGeneriqueOffres.Types.ProduitCatalogue;
        composition: GestionGeneriqueOffres.Types.CompositionOffre;
        compteDepot: GestionGeneriqueOffres.Types.ProduitCaracteristique;
        constructor($q: ng.IQService, $scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, generateurOffreService: GenerateurOffreService, testService: TestService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService);
        lancerModeAvenant(element: ElementPanier): void;
        supprimerProduitPanier(element: ElementPanier): void;
        ajouterProduitPanier(element: ElementPanier): void;
        initialiseParametre(element: ElementPanier): GestionGeneriqueOffres.Types.DonneesContextuelles;
        private genererComtpeDeDepot();
        genereroffre(): void;
        validerProposition(): void;
        formulaireValidationModale(): void;
    }
}

declare module myway.c0410.lanceur {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module myway.c0410.lanceur {
}

declare module myway.c0410.lanceur {
}

declare module myway.c0410.lanceur {
}

declare module myway.c0410.lanceur {
}

declare module Lanceur {
}

declare module myway.c0410.lanceur {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}
