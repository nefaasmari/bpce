
declare module Avenants.Rest.Constantes.Inject {
    module Services {
        const restService: string;
        const emprunteurService: string;
        const assuranceService: string;
        const tiersService: string;
        const creditService: string;
        const creditCatalogueService: string;
        const tableauAmortissementQuotiteService: string;
        const tableauAmortissementService: string;
        const dossierService: string;
        const habilitationService: string;
        const avenantService: string;
        const garantieService: string;
        const justificatifService: string;
        const historiqueService: string;
        const syntheseImpactAvenantService: string;
        const ajustementEcheancesService: string;
        const contractualisationService: string;
        const signatureService: string;
        const palierCreditService: string;
        const contractualisationParametreService: string;
        const produitService: string;
        const impressionDossierService: string;
        const parametresService: string;
        const structureService: string;
        const eligibiliteChangePdtService: string;
        const reportEcheanceService: string;
        const informationObjetService: string;
        const controleZonePtzService: string;
        const personnesService: string;
        const agentService: string;
        const catalogueService: string;
        const accessoireAnnexeService: string;
        const servicesObjetService: string;
    }
}

declare module Avenants.Rest {
    var app: any;
}

declare module Avenants.Rest.Modeles {
    interface IElementGestion {
        retourQR: Array<Commun.Modeles.IRetourQR>;
    }
}

declare module Avenants.Rest.Services {
    interface IAccessoireAnnexeService {
        getAccessoiresAnnexes(codeEtablissement: string, dateTraitement: string, numeroCredit: string, identifiantProduit: string, codeTypeAccessoire?: string): ng.IPromise<Modeles.DossierCreditAvenant.AccessoireAnnexe.IAccessoireAnnexe>;
    }
    interface IGetAccessoiresAnnexesParams {
        codeEtablissement: string;
        dateTraitement: string;
        numeroCredit: string;
        identifiantProduit: string;
        codeTypeAccessoire: string;
    }
    class AccessoireAnnexeService implements IAccessoireAnnexeService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getAccessoiresAnnexes(codeEtablissement: string, dateTraitement: string, numeroCredit: string, identifiantProduit: string, codeTypeAccessoire?: string): ng.IPromise<Modeles.DossierCreditAvenant.AccessoireAnnexe.IAccessoireAnnexe>;
    }
}

declare module Avenants.Rest.Services {
    interface IAgentService {
        getRechercheAgent(codeEtablissement: string, idAgent: string): ng.IPromise<Modeles.Agent.Recherche.IRechercheAgent>;
    }
    interface IRechercheAgentParams {
        typeRecherche: string;
        codeEtablissement: string;
        identifiantAgent: string;
        codeAction: string;
    }
    class AgentService implements IAgentService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getRechercheAgent(codeEtablissement: string, idAgent: string): ng.IPromise<Modeles.Agent.Recherche.IRechercheAgent>;
    }
}

declare module Avenants.Rest.Services {
    import ModelAjustementEcheances = Modeles.AvenantCreditService.AjustementEcheances;
    /**
     * Gestion des différentes calculatrices
     */
    interface IAjustementEcheancesService {
        /**
         * Calculatrice qui sert DES LORS où il y a un changement de produit
         */
        putAjustementEcheancesForChangementProduit(criteresAppel: ModelAjustementEcheances.ICriteresAppel): ng.IPromise<ModelAjustementEcheances.IAjustementEcheances>;
        getCriteresAppel(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, dateEffet: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroRelatif: number, codeTypeAcces: Commun.Enum.CodeTypeAcces, creditIn: ModelAjustementEcheances.ICreditIn, nouveauTaux: number, typeCalcul: number, montantCrd: number, tauxAssuranceAvant: number, tauxAssuranceApres: number, numeroPhaseEnCoursCreditOrigine: number, numeroPremiereEcheanceLastPalierPhaseO: number, nouvelleDureeResiduelle: number, echeanceSaisie: number): ModelAjustementEcheances.ICriteresAppel;
        /**
         * Calculatrice qui sert pour les avenants de taux/ durée et combinatoire
         */
        getAjustementEcheancesForTauxDureeAndCombinatoire(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEffet: string, numeroRelatif: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, nouveauTaux: number, montantCrd: number, typeCalcul: number, tauxAssuranceAvant: number, tauxAssuranceApres: number, tauxPalierDirecteur: number, nouvelleDureeResiduelle: number, echeanceSaisie: number): ng.IPromise<ModelAjustementEcheances.IAjustementEcheances>;
        /**
         * Calculatrice qui sert UNIQUEMENT pour les avenants d'assurances
         */
        getAjustementEcheancesForAssurances(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEffet: string, tauxRenego: number, crdInAvant: boolean, tauxAssuranceAvant: number): ng.IPromise<ModelAjustementEcheances.IAjustementEcheances>;
    }
    interface IGetAjustementEcheancesForTauxDureeAndCombinatoire {
        codeEtablissement: string;
        identifiantCredit: string;
        dateTraitement: string;
        dateEffet: string;
        codeAvenantSimulation: string;
        codeRoleCreditAvenant: string;
        numeroRelatif: number;
        codeTypeAcces: string;
        codeEmprunteur: string;
        numeroRelatifSimulationAvenant: number;
        nouveauTaux: number;
        typeCalcul: number;
        montantCrd: number;
        tauxAssuranceAvant: number;
        tauxAssuranceApres?: number;
        tauxPalierDirecteur?: number;
        dureeResiduelle?: number;
        echeanceSaisie?: number;
    }
    interface IGetAjustementEcheancesForAssurances {
        codeEtablissement: string;
        dateTraitement: string;
        identifiantCredit: string;
        dateEffet: string;
        codeAvenantSimulation: string;
        codeRoleCreditAvenant: string;
        numeroRelatif: number;
        codeTypeAcces: string;
        codeEmprunteur: string;
        numeroRelatifSimulationAvenant: number;
        tauxRenego?: number;
        crdInAvant: boolean;
        tauxAssuranceAvant: number;
    }
    class AjustementEcheancesService implements IAjustementEcheancesService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        putAjustementEcheancesForChangementProduit(criteresAppel: ModelAjustementEcheances.ICriteresAppel): ng.IPromise<ModelAjustementEcheances.IAjustementEcheances>;
        getCriteresAppel(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, dateEffet: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroRelatif: number, codeTypeAcces: Commun.Enum.CodeTypeAcces, creditIn: ModelAjustementEcheances.ICreditIn, nouveauTaux: number, typeCalcul: number, montantCrd: number, tauxAssuranceAvant: number, tauxAssuranceApres: number, numeroPhaseEnCoursCreditOrigine: number, numeroPremiereEcheanceLastPalierPhaseO: number, nouvelleDureeResiduelle: number, echeanceSaisie: number): ModelAjustementEcheances.ICriteresAppel;
        getAjustementEcheancesForTauxDureeAndCombinatoire(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEffet: string, numeroRelatif: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, nouveauTaux: number, montantCrd: number, typeCalcul: number, tauxAssuranceAvant: number, tauxAssuranceApres: number, tauxPalierDirecteur: number, nouvelleDureeResiduelle: number, echeanceSaisie: number): ng.IPromise<ModelAjustementEcheances.IAjustementEcheances>;
        getAjustementEcheancesForAssurances(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEffet: string, tauxRenego: number, crdInAvant: boolean, tauxAssuranceAvant: number): ng.IPromise<ModelAjustementEcheances.IAjustementEcheances>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    import ModelAssurance = Modeles.AssuranceCredit;
    import ModelDossierCreditAvenant = Modeles.DossierCreditAvenant;
    import ModelListerTypeSinistreConvention = Modeles.CreditParametre.ListerTypeDeSinistreParConv;
    interface IAssuranceService {
        getAssurances(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.AssuranceCredit.IAssuranceGlobale>;
        getAssurancesByAvenant(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelAssurance.Recherche.IRecherche>;
        getListeAssurance(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelDossierCreditAvenant.CaracteristiqueAssu.ICaracteristiqueAssu>;
        getListeTypeSinistreByConvention(codeEtablissement: string, dateTraitement: string, idConvention: string): ng.IPromise<Array<ModelListerTypeSinistreConvention.IScTypeDeSinistreParConvention>>;
        getEncoursPersonneAssu(codeEtablissement: string, identifiantPersonneEstAssu: string, numeroCredit: string, dateTraitement: string): ng.IPromise<ModelAssurance.Recherche.IEncoursPersonneAssu[]>;
    }
    class AssuranceService implements IAssuranceService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getAssurances(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.AssuranceCredit.IAssuranceGlobale>;
        getListeAssurance(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelDossierCreditAvenant.CaracteristiqueAssu.ICaracteristiqueAssu>;
        getListeTypeSinistreByConvention(codeEtablissement: string, dateTraitement: string, idConvention: string): ng.IPromise<Array<ModelListerTypeSinistreConvention.IScTypeDeSinistreParConvention>>;
        getAssurancesByAvenant(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelAssurance.Recherche.IRecherche>;
        getEncoursPersonneAssu(codeEtablissement: string, identifiantPersonneEstAssu: string, numeroCredit: string, dateTraitement: string): ng.IPromise<ModelAssurance.Recherche.IEncoursPersonneAssu[]>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    import ModelAvenant = Modeles.DossierCreditAvenant;
    import EnumModificationCredit = Commun.Enum.ModificationCredit;
    const CACHE_KEY_AVENANTS_CARA_CREDIT: string;
    const CACHE_KEY_AVENANTS_LISTE_AVT: string;
    const CACHE_KEY_AVENANTS_INFO_CREDIT: string;
    interface IAvenantService {
        /**
         * Fournit la liste des avenants avec uniquement une seule information : statut
         * @param codeEtablissement
         * @param dateTraitement
         * @param idCredit
         */
        getListeAvenantsByCaracteristiqueCredit(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.CaracteristiqueCredit.IInformationAvenant>;
        /**
         * Fournit la liste des avenants pour un crédit avec leurs informations
         * @param codeEtablissement
         * @param dateTraitement
         * @param idCredit
         */
        getListeAvenants(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelAvenant.Recherche.IRecherche>;
        /**
         * Récupération des informations relatives à une simulation ou avenant, pour sa création ou son ouverture
         * @param numeroSimulationAvenant: Optionnel dans le cas d'une création, par défaut 0
         */
        getCaracteristiqueFinan(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, idProduit: string, dateEffet: string, montantActualiseCredit: number, dureeCredit: number, uniteDureeCredit: string, listePhases: Array<ModelAvenant.CaracteristiqueFinan.IPhase>, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, typeAvenant: Commun.Enum.TypeAvenant, codeTypeAcces: Commun.Enum.CodeTypeAcces, numeroSimulationAvenant: number, idNouvelEmprunteur: string, codeCategorieNouvelEmprunteur: string): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        /**
         * Génération des critères de création
         */
        getCriteresCreation(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, dateEffet: string, numeroAvenantSimulation: number, compteurMiseJour: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, listeModificationCredit: Array<EnumModificationCredit>, credit: ModelAvenant.CaracteristiqueFinan.ICredit, codeTypeAcces: Commun.Enum.CodeTypeAcces, creditObjet: ModelAvenant.CaracteristiqueFinan.ICreditObjet): ModelAvenant.CaracteristiqueFinan.ICriteresCreation;
        creationCaracteristiqueFinan(criteresCreation: ModelAvenant.CaracteristiqueFinan.ICriteresCreation): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        /**
         * Génération des critères de création pour le changement de produit.
         */
        getCriteresCreationChangePdt(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, dateEffet: string, numeroAvenantSimulation: number, compteurMiseJour: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, listeModificationCredit: Array<EnumModificationCredit>, credit: ModelAvenant.CaracteristiqueFinan.ICredit, codeTypeAcces: Commun.Enum.CodeTypeAcces, creditObjet: ModelAvenant.CaracteristiqueFinan.ICreditObjet): ModelAvenant.CaracteristiqueFinan.ICriteresCreationChangePdt;
        creationChangePdtCaracteristiqueFinan(criteresCreationChangePdt: ModelAvenant.CaracteristiqueFinan.ICriteresCreationChangePdt): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        creationCaracteristiqueGar(criteresCreation: ModelAvenant.CaracteristiqueGar.ICriteresCreation): ng.IPromise<ModelAvenant.CaracteristiqueGar.ICaracteristiqueGar>;
        getInfoCreditAvenant(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroSimulationAvenant: number, codeTypeAcces: Commun.Enum.CodeTypeAcces, codeEmprunteur: string, codeCategorieEmprunteur: string, typeObjetFinanceGaranti: string): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        /**
         * Récupère les informations manquantes nécessaire aux éditions
         */
        getEditionInfo(codeEtablissement: string, dateTraitement: string, numeroCredit: string): ng.IPromise<Avenants.Rest.Modeles.DossierCreditAvenant.Edition.IEdition>;
    }
    interface IListeAvenantsParams {
        codeEtablissement: string;
        dateTraitement: string;
        identifiantCredit: string;
    }
    interface IInfoCreditAvenant {
        codeEtablissement: number;
        identifiantCredit: string;
        dateTraitement: string;
        codeAvenantSimulation: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        codeTypeAcces: string;
        codeEmprunteur: string;
        codeCategorieEmprunteur: string;
        typeObjetFinanceGaranti: string;
    }
    interface IEditionInfo {
        codeEtablissement: string;
        dateTraitement: string;
        numeroCredit: string;
    }
    class AvenantService implements IAvenantService {
        private $q;
        private restService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, restService: Services.IRestService);
        getListeAvenantsByCaracteristiqueCredit(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.CaracteristiqueCredit.IInformationAvenant>;
        getListeAvenants(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelAvenant.Recherche.IRecherche>;
        getCaracteristiqueFinan(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, idProduit: string, dateEffet: string, montantActualiseCredit: number, dureeCredit: number, uniteDureeCredit: string, listePhases: Array<ModelAvenant.CaracteristiqueFinan.IPhase>, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, typeAvenant: Commun.Enum.TypeAvenant, codeTypeAcces: Commun.Enum.CodeTypeAcces, numeroSimulationAvenant: number, idNouvelEmprunteur: string, codeCategorieNouvelEmprunteur: string): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        getCriteresCreation(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, dateEffet: string, numeroAvenantSimulation: number, compteurMiseJour: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, listeModificationCredit: Array<EnumModificationCredit>, credit: ModelAvenant.CaracteristiqueFinan.ICredit, codeTypeAcces: Commun.Enum.CodeTypeAcces, creditObjet: ModelAvenant.CaracteristiqueFinan.ICreditObjet): ModelAvenant.CaracteristiqueFinan.ICriteresCreation;
        creationCaracteristiqueFinan(criteres: ModelAvenant.CaracteristiqueFinan.ICriteresCreation): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        creationCaracteristiqueGar(criteresCreation: ModelAvenant.CaracteristiqueGar.ICriteresCreation): ng.IPromise<ModelAvenant.CaracteristiqueGar.ICaracteristiqueGar>;
        getCriteresCreationChangePdt(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, dateEffet: string, numeroAvenantSimulation: number, compteurMiseJour: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, listeModificationCredit: Array<EnumModificationCredit>, credit: ModelAvenant.CaracteristiqueFinan.ICredit, codeTypeAcces: Commun.Enum.CodeTypeAcces, creditObjet: ModelAvenant.CaracteristiqueFinan.ICreditObjet): ModelAvenant.CaracteristiqueFinan.ICriteresCreationChangePdt;
        creationChangePdtCaracteristiqueFinan(criteres: ModelAvenant.CaracteristiqueFinan.ICriteresCreationChangePdt): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        getInfoCreditAvenant(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroSimulationAvenant: number, codeTypeAcces: Commun.Enum.CodeTypeAcces, codeEmprunteur: string, codeCategorieEmprunteur: string, typeObjetFinanceGaranti: string): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        getEditionInfo(codeEtablissement: string, dateTraitement: string, numeroCredit: string): ng.IPromise<Avenants.Rest.Modeles.DossierCreditAvenant.Edition.IEdition>;
    }
}

declare module Avenants.Rest.Services {
    const CACHE_KEY_AVENANTS_CONV_JUR: string;
    interface ICatalogueService {
        getConventionJuridique(codeEtablissement: string, dateTraitement: string, numeroExterneConvention: string): ng.IPromise<Avenants.Rest.Modeles.DossierCreditGestion.ConventionJuridique.IConventionJuridique>;
    }
    interface IConventionJuridique {
        codeEtablissement: string;
        dateTraitement: string;
        numeroExterneConvention: string;
    }
    class CatalogueService implements ICatalogueService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getConventionJuridique(codeEtablissement: string, dateTraitement: string, numeroExterneConvention: string): ng.IPromise<Avenants.Rest.Modeles.DossierCreditGestion.ConventionJuridique.IConventionJuridique>;
    }
}

declare module Avenants.Rest.Services {
    import AvenantModelCaracteristique = Modeles.DossierCreditAvenant.Caracteristique;
    interface IContractualisationService {
        putCaracteristique(codeEtablissement: string, dateTraitement: string, idCredit: string, compteurMiseJour: number, avenant: AvenantModelCaracteristique.IAvenant, simulation?: AvenantModelCaracteristique.ISimulation, listeEditions?: Array<AvenantModelCaracteristique.IEdition>, listePersonne?: Array<AvenantModelCaracteristique.IPersonneSignataireAvenant>): ng.IPromise<AvenantModelCaracteristique.ICaracteristique>;
        putCaracteristiqueWithBuiltData(criteresModification: AvenantModelCaracteristique.ICriteresModification): ng.IPromise<AvenantModelCaracteristique.ICaracteristique>;
    }
    class ContractualisationService implements IContractualisationService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        putCaracteristique(codeEtablissement: string, dateTraitement: string, idCredit: string, compteurMiseJour: number, avenant: AvenantModelCaracteristique.IAvenant, simulation?: AvenantModelCaracteristique.ISimulation, listeEditions?: Array<AvenantModelCaracteristique.IEdition>, listePersonne?: Array<AvenantModelCaracteristique.IPersonneSignataireAvenant>): ng.IPromise<AvenantModelCaracteristique.ICaracteristique>;
        putCaracteristiqueWithBuiltData(criteresModification: AvenantModelCaracteristique.ICriteresModification): ng.IPromise<AvenantModelCaracteristique.ICaracteristique>;
    }
}

declare module Avenants.Rest.Services {
    import ModelAvenantCreditParam = Modeles.AvenantCreditParam;
    interface IControleZonePtzService {
        getControleZonePtz(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, adresseLigne1: string, adresseLigne2: string, adresseLigne3: string, adresseLigneCodePostal4: string, adresseLigneCommune5: string, adresseLigneSuite6: string, codePaysLocalisation: string, codeDestinationAutoriseeObjet: string): ng.IPromise<ModelAvenantCreditParam.ControleZonePtz.IControleZonePtz>;
    }
    interface IGetControleZonePtz {
        codeEtablissement: string;
        identifiantCredit: string;
        dateTraitement: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigneCodePostal4: string;
        adresseLigneCommune5: string;
        adresseLigneSuite6: string;
        codePaysLocalisation: string;
        codeDestinationAutoriseeObjet: string;
    }
    class ControleZonePtzService implements IControleZonePtzService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getControleZonePtz(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, adresseLigne1: string, adresseLigne2: string, adresseLigne3: string, adresseLigneCodePostal4: string, adresseLigneCommune5: string, adresseLigneSuite6: string, codePaysLocalisation: string, codeDestinationAutoriseeObjet: string): ng.IPromise<ModelAvenantCreditParam.ControleZonePtz.IControleZonePtz>;
    }
}

declare module Avenants.Rest.Services {
    import ModelAvenantParam = Modeles.AvenantCreditParam;
    interface ICreditCatalogueService {
        getProduit(codeEtablissement: string, dateTraitement: string, idCredit: string, idProduit: string): ng.IPromise<ModelAvenantParam.Produit.IProduit>;
    }
    class CreditCatalogueService implements ICreditCatalogueService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getProduit(codeEtablissement: string, dateTraitement: string, idCredit: string, idProduit: string): ng.IPromise<ModelAvenantParam.Produit.IProduit>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    import ModelCreditParam = Modeles.AvenantCreditParam;
    const CACHE_KEY_INFO_CREDIT: string;
    const CACHE_KEY_INDICE_CREDIT: string;
    interface ICreditService {
        getCaracteristiqueCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, idDossier?: string, fromCache?: boolean): ng.IPromise<ModelGestion.CaracteristiqueCredit.IListeCredits>;
        getJustificatifCredit(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.CaracteristiqueCredit.IDonneeCredit>;
        getModeGestion(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.ModeGestion.IModeGestion>;
        putModeGestion(codeEtablissement: string, dateTraitement: string, idCredit: string, mode: ModelGestion.ModeGestion.IModeGestion): ng.IPromise<ModelGestion.ModeGestion.IModeGestion>;
        getImpayeEmprunteur(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string): ng.IPromise<ModelGestion.IncidentPaiement.IImpayeEmprunteur>;
        /**
         * Informations du crédit d'origine à date d'effet
         * Attention appel paramètrable
         * @param appelCreditOrigine: permet de définir l'appel SQEC ou SQED ou SQEC + SQED
         * @param codeAvenantSimulation : obligatoire si appelCreditOrigine !== de CreditOrigine
         * @param dateEffet : obligatoire si appelCreditOrigine !== de CreditOrigine
         */
        getInformationCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, appelCreditOrigine: Commun.Enum.AppelCreditOrigine, codeAvenantSimulation?: Commun.Enum.CodeAvenantSimulation, dateEffet?: Date): ng.IPromise<ModelGestion.InformationCredit.IInformationCredit>;
        getEvenementCredit(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.EvenementCredit.IEvenementGlobal>;
        getIndiceCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEffet: Date, codeIndice?: string): ng.IPromise<ModelCreditParam.Indice.IIndice>;
    }
    interface IGetInformationCredit {
        codeEtablissement: string;
        dateTraitement: string;
        identifiantCredit: string;
        codeAvenantSimulation?: string;
        dateEffet?: string;
        initialisation?: boolean;
    }
    interface IGetIndiceCredit {
        codeEtablissement: string;
        dateTraitement: string;
        identifiantCredit: string;
        codeIndice?: string;
        unitePeriodeValeurInitIndice: string;
        nbPeriodeValeurInitIndice: number;
        valeurIndice: number;
        dateEffet: string;
    }
    class CreditService implements ICreditService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getCaracteristiqueCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, idDossier?: string, fromCache?: boolean): ng.IPromise<ModelGestion.CaracteristiqueCredit.IListeCredits>;
        getJustificatifCredit(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.CaracteristiqueCredit.IDonneeCredit>;
        getModeGestion(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.ModeGestion.IModeGestion>;
        /**
         * Paramètres dans le query et dans le body
         */
        putModeGestion(codeEtablissement: string, dateTraitement: string, idCredit: string, modeGestion: ModelGestion.ModeGestion.IModeGestion): ng.IPromise<ModelGestion.ModeGestion.IModeGestion>;
        getImpayeEmprunteur(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string): ng.IPromise<ModelGestion.IncidentPaiement.IImpayeEmprunteur>;
        /**
         * Récupération des informations du crédit
         * @param withCompleteData : true: SQED et SQEC / false: SQED
         */
        /**
         * Informations du crédit d'origine à date d'effet
         * Attention appel paramètrable
         * @param appelCreditOrigine: permet de définir l'appel SQEC ou SQED ou SQEC + SQED
         * @param codeAvenantSimulation : obligatoire si appelCreditOrigine !== de CreditOrigine
         * @param dateEffet : obligatoire si appelCreditOrigine !== de CreditOrigine
         */
        getInformationCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, appelCreditOrigine: Commun.Enum.AppelCreditOrigine, codeAvenantSimulation?: Commun.Enum.CodeAvenantSimulation, dateEffet?: Date): ng.IPromise<ModelGestion.InformationCredit.IInformationCredit>;
        getCacheKeyForInfoCredit(dateTraitement: string, idCredit: string, appelCreditOrigine: Commun.Enum.AppelCreditOrigine, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, dateEffet: Date): string;
        getEvenementCredit(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.EvenementCredit.IEvenementGlobal>;
        getIndiceCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEffet: Date, codeIndice?: string): ng.IPromise<ModelCreditParam.Indice.IIndice>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    interface IDossierService {
        getCaracteristiqueDossier(codeEtablissement: string, dateTraitement: string, idDossier: string): ng.IPromise<ModelGestion.CaracteristiqueDossier.ICaracteristiqueGeneraleDossier>;
    }
}

declare module Avenants.Rest.Services {
    import ModelAvenantService = Modeles.AvenantCreditService;
    const CACHE_KEY_ELIGIBILITE_CHGT_PRODUIT: string;
    interface IEligibiliteChangePdtService {
        getEligibiliteChangePdt(codeEtablissement: string, dateTraitement: string, idCredit: string, identifiantProfilRenegociation: string, codeTypeAcces: string, codeCategorieEmprunteur: string, codeNatureFinancement: string, typeObjetFinanceGaranti: string, codeTypeMarche: string): ng.IPromise<ModelAvenantService.EligibiliteChangePdt.IEligibiliteChangePdt>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    import ModelEntiteTitulaire = Modeles.EntiteTitulaire;
    import ModelDossierCreditAvenant = Modeles.DossierCreditAvenant;
    const CACHE_KEY_RECHERCHE: string;
    interface IEmprunteurService {
        getRecherche(codeEtablissement: string, dateTraitement: string, idPersonne: string, idCredit: string, idDossier: string): ng.IPromise<ModelGestion.Recherche.IRecherche>;
        getEmprunteurGlobal(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string): ng.IPromise<ModelGestion.PersonneEmprunteur.IEmprunteurGlobal>;
        getInformationEntiteTitulaire(codeEtablissement: string, idEmprunteur: string): ng.IPromise<ModelEntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire>;
        getEntiteTitulaireByPersonne(codeEtablissement: string, idPersonne: string): ng.IPromise<ModelEntiteTitulaire.Recherche.IRechercheEntiteTitulaire>;
        getListeCompteByPersonne(codeEtablissement: string, dateTraitement: string, idCredit: string, idPersonne: string): ng.IPromise<ModelDossierCreditAvenant.ListerCompte.IListerCompte>;
    }
    interface IRechercheParams {
        codeEtablissement: string;
        dateTraitement: string;
        identifiantPersonne?: string;
        identifiantDossierAlis?: string;
        identifiantCredit?: string;
        identifiantDossierCommercial?: string;
        identifiantOperation?: string;
    }
    interface IGetRechercheEntiteTitulaireParams {
        codeEtablissement: string;
        identifiantTiers: number;
        typeRechercheEntiteTitulaire: string;
    }
    interface IGetEquipementClientParams {
        typeRecherche: string;
        codeEtatRecherche: string;
        indicRestitComptes88: string;
    }
    class EmprunteurService implements IEmprunteurService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getRecherche(codeEtablissement: string, dateTraitement: string, idPersonne: string, idCredit: string, idDossier: string): ng.IPromise<ModelGestion.Recherche.IRecherche>;
        getEmprunteurGlobal(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string): ng.IPromise<ModelGestion.PersonneEmprunteur.IEmprunteurGlobal>;
        getInformationEntiteTitulaire(codeEtablissement: string, idEmprunteur: string): ng.IPromise<ModelEntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire>;
        getEntiteTitulaireByPersonne(codeEtablissement: string, idPersonne: string): ng.IPromise<ModelEntiteTitulaire.Recherche.IRechercheEntiteTitulaire>;
        getListeCompteByPersonne(codeEtablissement: string, dateTraitement: string, idCredit: string, idPersonne: string): ng.IPromise<ModelDossierCreditAvenant.ListerCompte.IListerCompte>;
    }
}

declare module Avenants.Rest.Services {
    interface IGarantieService {
        getGarantie(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<Modeles.DossierCreditGestion.GarantieCredit.IGarantieGlobal>;
        getGaranties(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, idEmprunteur: string, idProduit: string, dateEffet: Date, dureeCredit: number, uniteDureeCredit: string, montantActualiseCredit: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, typeAvenant: Commun.Enum.TypeAvenant, numeroSimulationAvenant: number, listePhases: Array<Modeles.DossierCreditAvenant.Garanties.IPhase>): ng.IPromise<Modeles.DossierCreditAvenant.Garanties.IGaranties>;
        getGarantiesNatureForEligibilite(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, idEmprunteur: string, dateEffet: Date, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, typeAvenant: Commun.Enum.TypeAvenant, numeroSimulationAvenant: number, isChangementProduit: boolean): ng.IPromise<Modeles.DossierCreditAvenant.Garanties.IGaranties>;
    }
    class GarantieService implements IGarantieService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getGarantie(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<Modeles.DossierCreditGestion.GarantieCredit.IGarantieGlobal>;
        getGaranties(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, idEmprunteur: string, idProduit: string, dateEffet: Date, dureeCredit: number, uniteDureeCredit: string, montantActualiseCredit: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, typeAvenant: Commun.Enum.TypeAvenant, numeroSimulationAvenant: number, listePhases: Array<Modeles.DossierCreditAvenant.Garanties.IPhase>): ng.IPromise<Modeles.DossierCreditAvenant.Garanties.IGaranties>;
        getGarantiesNatureForEligibilite(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, idEmprunteur: string, dateEffet: Date, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, typeAvenant: Commun.Enum.TypeAvenant, numeroSimulationAvenant: number, isChangementProduit: boolean): ng.IPromise<Modeles.DossierCreditAvenant.Garanties.IGaranties>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    interface IHabilitationService {
        /**
         * Croisement entre les Habilitations pour le crédit (habilitationCredit) et l'entité connecté (Agent)
         * @param codeEtablissement
         * @param dateTraitement
         * @param idCredit
         * @param isEcureuilCredit: optionnel
         */
        getHabilitationGlobal(codeEtablissement: string, dateTraitement: string, idCredit: string, isEcureuilCredit: boolean, fromCache?: boolean): ng.IPromise<Array<ModelGestion.HabilitationCredit.IHabilitation>>;
        /**
         * Habilitations pour le crédit
         * @param codeEtablissement
         * @param dateTraitement
         * @param idCredit
         * @param isEcureuilCredit
         */
        getHabilitationCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, isEcureuilCredit?: boolean): ng.IPromise<Array<ModelGestion.HabilitationCredit.IHabilitation>>;
    }
}

declare module Avenants.Rest.Services {
    import AvenantModel = Modeles.DossierCreditAvenant;
    interface IHistoriqueService {
        getHistorique(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, numeroRelatif: number, dateEffet: Date, identifiantProduit: string): ng.IPromise<AvenantModel.Historique.IHistorique>;
    }
}

declare module Avenants.Rest.Services {
    import ModelAvenantService = Modeles.AvenantCreditService;
    interface IImpressionDossierService {
        getImpressionDossier(codeEtablissement: string, reference: string): ng.IPromise<ModelAvenantService.ImpressionDossier.IImpressionDossier>;
        /**
         * Génération des critères de création
         */
        getCriteresCreation(libelle: string, typeDossier: string, caracteristiques: Array<string>, validationAuto: string, dateCreation: string, agentCreateur: string, documentImprimes: Array<ModelAvenantService.ImpressionDossier.IDocumentImprime>): ModelAvenantService.ImpressionDossier.ICreationDossier;
        /**
         * Génération des critères de mise à jour
         */
        getAjoutDocumentEdite(libelle: string, type: string, exemplaire: string, agent: string, contenu: string): ModelAvenantService.ImpressionDossier.IAjoutDocumentEdite;
        postImpressionDossier(codeEtablissement: string, codeIndexes: Array<string>, codeStructure: string, creationDossier: ModelAvenantService.ImpressionDossier.ICreationDossier): ng.IPromise<ModelAvenantService.ImpressionDossier.IImpressionDossier>;
        putImpressionDossier(codeEtablissement: string, codeIndexes: Array<string>, codeStructure: string, ajoutDocumentEdite: ModelAvenantService.ImpressionDossier.IAjoutDocumentEdite): ng.IPromise<ModelAvenantService.ImpressionDossier.IImpressionDossier>;
    }
}

declare module Avenants.Rest.Services {
    import ModelDossierCreditAvenant = Modeles.DossierCreditAvenant;
    interface IInformationObjetService {
        getInformationObjet(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, dateEffet: string, numeroSimulationAvenant: number, codeTypeAppel: string): ng.IPromise<ModelDossierCreditAvenant.InformationObjet.IInformationObjet>;
    }
    interface IGetInformationObjet {
        codeEtablissement: string;
        identifiantCredit: string;
        dateTraitement: string;
        numeroRelatif: number;
        codeAvenantSimulation: string;
        codeTypeAcces: string;
        dateEffet: string;
        numeroRelatifSimulationAvenant: number;
        codeTypeAppel: string;
    }
    class InformationObjetService implements IInformationObjetService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getInformationObjet(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, dateEffet: string, numeroSimulationAvenant: number, codeTypeAppel: string): ng.IPromise<ModelDossierCreditAvenant.InformationObjet.IInformationObjet>;
    }
}

declare module Avenants.Rest.Services {
    interface IJustificatifService {
        getJustificatifGarantie(codeEtablissement: string, dateTraitement: string, idCredit: string, idGarantie: string): ng.IPromise<Modeles.DossierCreditGestion.JustificatifGarantie.IDonneeGarantie>;
        postJustificatifGarantie(dateTraitement: string, codeAction: string, donneeGarantie: Modeles.DossierCreditGestion.JustificatifGarantie.IDonneeGarantie, miseAJour: boolean, forcage?: boolean): ng.IPromise<Modeles.IElementGestion>;
        getJustificatifAssurance(codeEtablissement: string, dateTraitement: string, idCredit: string, idGarantie: string): ng.IPromise<Modeles.DossierCreditGestion.JustifAssurance.IDonneeAssurance>;
        postJustificatifAssurance(dateTraitement: string, codeAction: string, donneeAssurance: Modeles.DossierCreditGestion.JustifAssurance.IDonneeAssurance, miseAJour: boolean, forcage?: boolean): ng.IPromise<Modeles.IElementGestion>;
    }
    class JustificatifService implements IJustificatifService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getJustificatifGarantie(codeEtablissement: string, dateTraitement: string, idCredit: string, idGarantie: string): ng.IPromise<Modeles.DossierCreditGestion.JustificatifGarantie.IDonneeGarantie>;
        postJustificatifGarantie(dateTraitement: string, codeAction: string, donneeGarantie: Modeles.DossierCreditGestion.JustificatifGarantie.IDonneeGarantie, miseAJour: boolean, forcage?: boolean): ng.IPromise<Modeles.IElementGestion>;
        getJustificatifAssurance(codeEtablissement: string, dateTraitement: string, idCredit: string, identifiantAssurance: string): ng.IPromise<Modeles.DossierCreditGestion.JustifAssurance.IDonneeAssurance>;
        postJustificatifAssurance(dateTraitement: string, codeAction: string, donneeAssurance: Modeles.DossierCreditGestion.JustifAssurance.IDonneeAssurance, miseAJour: boolean, forcage?: boolean): ng.IPromise<Modeles.IElementGestion>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    interface IPalierCreditService {
        getPaliersCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroAvenant: number, dateEffet: Date, codeTypeAcces: Commun.Enum.CodeTypeAcces, codeRoleCreditAvenantByCreditCaraFinan: string): ng.IPromise<ModelGestion.PalierCredit.IPalierCredit>;
    }
    interface IGetPalierCredit {
        codeEtablissement: string;
        dateTraitement: string;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroRelatif: string;
        codeAvenantSimulation: string;
        codeTypeAcces: string;
        codeEmprunteur: string;
        numeroRelatifSimulationAvenant: string;
        dateEffet: string;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    import ModelCreditParametre = Modeles.CreditParametre;
    const CACHE_KEY_PARAM_APPLICATIF: string;
    interface IParametresService {
        getListerParamApplicatif(codeEtablissement: string, dateTraitement: string): ng.IPromise<Array<ModelCreditParametre.ListerParamApplicatif.IScParamApplicatif>>;
        getParamsStandard(codeEtablissement: string, dateTraitement: string, idCredit: string, idPourAccesBt89: string): ng.IPromise<ModelGestion.Parametre.IParametre>;
        getParametreCodeMotif(codeEtablissement: string, dateTraitement: string, numeroCredit: string, codeEntite: string, typeMotif: string): ng.IPromise<Avenants.Rest.Modeles.DossierCreditGestion.Parametre.IParametre>;
        getParametreTypeSinistre(codeEtablissement: string, dateTraitement: string, codeTypeSinistre?: string): ng.IPromise<ModelGestion.Parametre.IParametre>;
    }
    interface IGetParamsStandard {
        codeEtablissement: string;
        numeroCredit: string;
        dateTraitement: string;
        codeAction: string;
    }
    class ParametresService implements IParametresService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        /**
         * Récupère la liste des paramètres applicatifs
         */
        getListerParamApplicatif(codeEtablissement: string, dateTraitement: string): ng.IPromise<Array<ModelCreditParametre.ListerParamApplicatif.IScParamApplicatif>>;
        getParamsStandard(codeEtablissement: string, dateTraitement: string, idCredit: string, idPourAccesBt89: string): ng.IPromise<ModelGestion.Parametre.IParametre>;
        getParametreCodeMotif(codeEtablissement: string, dateTraitement: string, numeroCredit: string, codeEntite?: string, typeMotif?: string): ng.IPromise<Avenants.Rest.Modeles.DossierCreditGestion.Parametre.IParametre>;
        getParametreTypeSinistre(codeEtablissement: string, dateTraitement: string, codeTypeSinistre?: string): ng.IPromise<ModelGestion.Parametre.IParametre>;
    }
}

declare module Avenants.Rest.Services {
    import ModelDossierCreditAvenant = Modeles.DossierCreditAvenant;
    interface IPersonnesService {
        getAvenantPersonnes(codeEtablissement: string, idtCredit: string, dateTraitement: string, numeroRelatif: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, dateEffet: Date, codeTypeAppel: string): ng.IPromise<ModelDossierCreditAvenant.Personnes.IPersonnes>;
    }
    interface IGetAvenantPersonnes {
        codeEtablissement: string;
        identifiantCredit: string;
        dateTraitement: string;
        numeroRelatif: number;
        codeAvenantSimulation: string;
        codeTypeAcces: string;
        dateEffet: string;
        numeroRelatifSimulationAvenant: number;
        codeTypeAppel: string;
    }
    interface IGetListerCompte {
        codeEtablissement: string;
        identifiantCredit: string;
        dateTraitement: string;
        identifiantPersonne: string;
        cdNatureTraitement: string;
    }
    class PersonnesService implements IPersonnesService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getAvenantPersonnes(codeEtablissement: string, idtCredit: string, dateTraitement: string, numeroRelatif: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, dateEffet: Date, codeTypeAppel: string): ng.IPromise<ModelDossierCreditAvenant.Personnes.IPersonnes>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    interface IReportEcheanceService {
        deleteReportEcheanceStandard(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, codeAction: string, codeMotifSuspension: string, dateFinSuspension: string): ng.IPromise<ModelGestion.ReportEcheance.IReportEcheance>;
    }
    interface IReportEcheance {
        retourQR: Array<IRetourQR>;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IDeleteSuspensionAnnulation {
        codeEtablissement: string;
        identifiantCredit: string;
        dateTraitement: string;
        action: string;
        codeMotifSuspension: string;
        dateFinSuspension: string;
    }
    class ReportEcheanceService implements IReportEcheanceService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        deleteReportEcheanceStandard(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, codeAction: string, codeMotifSuspension: string, dateFinSuspension: string): ng.IPromise<ModelGestion.ReportEcheance.IReportEcheance>;
    }
}

declare module Avenants.Rest.Services {
    import Modeles = Avenants.Rest.Modeles.DossierCreditAvenant.ServicesObjet;
    interface IServicesObjetService {
        getServiceObjExistantAvenant(codeEtablissement: string, numeroCredit: string, dateTraitement: string, codeAvenantSimulation: string, codeRoleCreditAvenant: string, numeroRelatif: string, numeroRelatifSimulationAvenant: string, dateEffetContrat: string, codeTypeAcces?: string): ng.IPromise<Modeles.IServicesObjet>;
    }
    class ServicesObjetService implements IServicesObjetService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getServiceObjExistantAvenant(codeEtablissement: string, numeroCredit: string, dateTraitement: string, codeAvenantSimulation: string, codeRoleCreditAvenant: string, numeroRelatif: string, numeroRelatifSimulationAvenant: string, dateEffetContrat: string, codeTypeAcces?: string): ng.IPromise<Modeles.IServicesObjet>;
    }
}

declare module Avenants.Rest.Services {
    import ModelEligibilite = Rest.Modeles.AvenantCreditParam.Eligibilite;
    import ModelContractParam = Rest.Modeles.DocumentParametre.ContractualisationParametre;
    import ModelAvenant = Rest.Modeles.DossierCreditAvenant;
    import ModelGestion = Rest.Modeles.DossierCreditGestion;
    import ModelIDN = Rest.Modeles.DossierNumerique;
    interface ISignatureService {
        getEligibilite(codeEtablissement: string, dateTraitement: string, idCredit: string, caraFinan: ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan, caraCredit: ModelGestion.CaracteristiqueCredit.ICaracteristiqueCredit, avenant: ModelAvenant.Recherche.IAvenant, codeNatureFinancementCredit: string, isEligibilite: boolean, typeEditionPieco: Commun.Enum.TypeEditionPieco, isEcureuilCredit: boolean): ng.IPromise<ModelEligibilite.IEligibilite>;
        getContractualisationParametre(idEmprunteur: string, listeIdPersonne: Array<string>): ng.IPromise<ModelContractParam.IContractualisationParametre>;
        getSignatureElectronique(codeEtablissement: string, dateTraitement: string, idCredit: string, numeroRelatif: number): ng.IPromise<ModelAvenant.Caracteristique.ICaracteristique>;
        putHistoSignatureElectronique(codeEtablissement: string, dateTraitement: string, idCredit: string, histoMiseAJour: ModelAvenant.Caracteristique.IHistoMiseAJour, indicateurInitMAJ: ModelAvenant.Caracteristique.IIndicateurInitMAJ): ng.IPromise<ModelAvenant.Caracteristique.ICaracteristique>;
        deleteDossierIdn(codeEtablissement: string, idActeIDN: string): ng.IPromise<ModelIDN.DossierNumerique.IReponseAnnulationDossier>;
        deleteSignElectronique(codeEtablissement: string, idDossierCredit: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numero: number, numeroRenegociation: number): ng.IPromise<boolean>;
    }
    class SignatureService implements ISignatureService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getEligibilite(codeEtablissement: string, dateTraitement: string, idCredit: string, caraFinan: ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan, caraCredit: ModelGestion.CaracteristiqueCredit.ICaracteristiqueCredit, avenant: ModelAvenant.Recherche.IAvenant, codeNatureFinancementCredit: string, isEligibilite: boolean, typeEditionPieco: Commun.Enum.TypeEditionPieco, isEcureuilCredit: boolean): ng.IPromise<ModelEligibilite.IEligibilite>;
        getContractualisationParametre(idEmprunteur: string, listeIdPersonne: Array<string>): ng.IPromise<ModelContractParam.IContractualisationParametre>;
        getSignatureElectronique(codeEtablissement: string, dateTraitement: string, idCredit: string, numeroRelatif: number): ng.IPromise<ModelAvenant.Caracteristique.ICaracteristique>;
        /**
         * Ajout d'un évenement pour la SED
         */
        putHistoSignatureElectronique(codeEtablissement: string, dateTraitement: string, idCredit: string, histoMiseAJour: ModelAvenant.Caracteristique.IHistoMiseAJour, indicateurInitMAJ: ModelAvenant.Caracteristique.IIndicateurInitMAJ): ng.IPromise<ModelAvenant.Caracteristique.ICaracteristique>;
        deleteDossierIdn(codeEtablissement: string, idActeIDN: string): ng.IPromise<ModelIDN.DossierNumerique.IReponseAnnulationDossier>;
        deleteSignElectronique(codeEtablissement: string, idDossierCredit: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numero: number, numeroRenegociation: number): ng.IPromise<boolean>;
    }
}

declare module Avenants.Rest.Services {
    import StructureModel = Modeles.Structure;
    const CACHE_KEY_MENTIONS_LEGALES: string;
    const CACHE_KEY_POSTE_FONCTIONNEL_AGENT: string;
    const CACHE_KEY_CARA_EDS: string;
    const CACHE_KEY_HIERARCHIE_EDS: string;
    interface IStructureService {
        getMentionsLegales(codeEtablissement: string, dateTraitement: string): ng.IPromise<StructureModel.MentionsLegales.IMentionLegale>;
        getPosteFonctionnelAgent(codeEtablissement: string, codeAgent: number): ng.IPromise<StructureModel.PosteFonctionnelAgent.IPosteFonctionnelAgent>;
        getCaracteristiqueEDS(codeEtablissement: string, codeAgent: number): ng.IPromise<StructureModel.CaracteristiqueEDS.ICaracteristiqueEDS>;
        getCaracteristiqueEDS(codeEtablissement: string, codeAgent: number): ng.IPromise<StructureModel.CaracteristiqueEDS.ICaracteristiqueEDS>;
        getHierarchieEDS(codeEtablissement: string, idInterneEDS: number): ng.IPromise<StructureModel.HierarchieEDS.IHierarchieEDS>;
    }
    interface IGetMentionsLegalesParams {
        codeEtablissement: string;
        date: string;
    }
    interface IGetPosteFonctionnelAgentParams {
        codeEtablissement: string;
        codeAgent: number;
    }
    interface IGetHierarchieEDS {
        codeEtablissement: string;
        identifiantInterneEDS: number;
        typeHierarchie: string;
        typeOrganisation?: string;
    }
    interface IGetCaracteristiqueEDSParams {
        codeEtablissement: string;
        identifiantInterneEDS?: number;
        typeEDS: string;
        referenceExterneEDS: string;
        codeAgent: number;
        typeOrganisation: string;
    }
    class StructureService implements IStructureService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getMentionsLegales(codeEtablissement: string, dateTraitement: string): ng.IPromise<StructureModel.MentionsLegales.IMentionLegale>;
        getPosteFonctionnelAgent(codeEtablissement: string, codeAgent: number): ng.IPromise<StructureModel.PosteFonctionnelAgent.IPosteFonctionnelAgent>;
        getCaracteristiqueEDS(codeEtablissement: string, codeAgent: number): ng.IPromise<StructureModel.CaracteristiqueEDS.ICaracteristiqueEDS>;
        getHierarchieEDS(codeEtablissement: string, idInterneEDS: number): ng.IPromise<StructureModel.HierarchieEDS.IHierarchieEDS>;
    }
}

declare module Avenants.Rest.Services {
    import ModelSyntheseImpactAvenant = Modeles.DossierCreditAvenant.SynthesImpactAvenant;
    interface ISyntheseImpactAvenantService {
        /**
         * Récupération due la synthèse complète : avant et après
         */
        getSyntheseImpactAvenant(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, dateEffet: Date, numeroAvenantSimulation: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: string, isChangementProduit: boolean): ng.IPromise<ModelSyntheseImpactAvenant.ISynthesImpactAvenant>;
        /**
         * Récupération du résultat de la synthèse uniquement pour l'après
         */
        getResultatSyntheseImpactToAvenantApres(codeEtablissement: string, idCredit: string, dateTraitement: string, dateEffet: Date, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroAvenantSimulation: number, codeTypeAcces: Commun.Enum.CodeTypeAcces, isChangementProduit: boolean): ng.IPromise<ModelSyntheseImpactAvenant.IResultatCalcul>;
    }
    class SyntheseImpactAvenantService implements ISyntheseImpactAvenantService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getSyntheseImpactAvenant(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, dateEffet: Date, numeroAvenantSimulation: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: string, isChangementProduit: boolean): ng.IPromise<ModelSyntheseImpactAvenant.ISynthesImpactAvenant>;
        /**
         * Récupération du résultat de la synthèse uniquement pour l'après
         */
        getResultatSyntheseImpactToAvenantApres(codeEtablissement: string, idCredit: string, dateTraitement: string, dateEffet: Date, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroAvenantSimulation: number, codeTypeAcces: Commun.Enum.CodeTypeAcces, isChangementProduit: boolean): ng.IPromise<ModelSyntheseImpactAvenant.IResultatCalcul>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    interface ITableauAmortissementQuotiteService {
        getTableauAmortissementQuotite(transformationPretGlobal: ModelGestion.TableauAmortissementQuotite.ITransformationPretGlobal): ng.IPromise<ModelGestion.TableauAmortissementQuotite.ITransformationPretGlobal>;
    }
    class TableauAmortissementQuotiteService implements ITableauAmortissementQuotiteService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getTableauAmortissementQuotite(transformationPretGlobal: ModelGestion.TableauAmortissementQuotite.ITransformationPretGlobal): ng.IPromise<ModelGestion.TableauAmortissementQuotite.ITransformationPretGlobal>;
    }
}

declare module Avenants.Rest.Services {
    import ModelSyntheseImpactAvenant = Modeles.DossierCreditAvenant.SynthesImpactAvenant;
    import ModelGestion = Modeles.DossierCreditGestion;
    interface ITableauAmortissementService {
        getTableauAmortissement(codeEtablissement: string, dateTraitement: string, idCredit: string, codeProvenance?: string): ng.IPromise<ModelGestion.TableauAmortissement.IEnteteTableau>;
        getTableauAmortissementApres(codeEtablissement: string, idCredit: string, dateTraitement: string, dateEffet: Date, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroAvenantSimulation: number, codeTypeAcces: Commun.Enum.CodeTypeAcces, isChangementProduit: boolean): ng.IPromise<ModelGestion.TableauAmortissement.IEnteteTableau>;
        getDetailTA(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEcheance: Date, paramDetailTaApres?: ModelGestion.DetailTableauAmort.IParamDetailEcheanceApres): ng.IPromise<ModelGestion.DetailTableauAmort.IDetailTableauAmortissement>;
    }
    class TableauAmortissementService implements ITableauAmortissementService {
        private restService;
        private restSyntheseImpactAvenantService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService, restSyntheseImpactAvenantService: Services.ISyntheseImpactAvenantService);
        getTableauAmortissement(codeEtablissement: string, dateTraitement: string, idCredit: string, codeProvenance?: string): ng.IPromise<ModelGestion.TableauAmortissement.IEnteteTableau>;
        /**
         * Récupération du TA après la prise en compte de l'avenant
         * Attention, il y a une dépendance au service de la synthèse qui est nécessaire pour alimenter les données
         * -> La construction est ici car ce service est appelé dans plusieurs SPA
         */
        getTableauAmortissementApres(codeEtablissement: string, idCredit: string, dateTraitement: string, dateEffet: Date, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroAvenantSimulation: number, codeTypeAcces: Commun.Enum.CodeTypeAcces, isChangementProduit: boolean): ng.IPromise<ModelGestion.TableauAmortissement.IEnteteTableau>;
        /**
         * Récupération du TA après la prise en compte de l'avenant
         * Au sens REST, c'est un POST
         */
        getDataTableauAmortissementApres(dateTraitement: string, codeEtablissement: string, idCredit: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroAvenantSimulation: number, resultatCalcul: ModelSyntheseImpactAvenant.IResultatCalcul): ng.IPromise<ModelGestion.TableauAmortissement.IEnteteTableau>;
        getDetailTA(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEcheance: Date, paramDetailTaApres?: ModelGestion.DetailTableauAmort.IParamDetailEcheanceApres): ng.IPromise<ModelGestion.DetailTableauAmort.IDetailTableauAmortissement>;
    }
}

declare module Avenants.Rest.Services {
    import ModelTiers = Modeles.Tiers;
    import ModelTiersCorporate = Modeles.TiersCorporate;
    interface ITiersService {
        getParticulierInformation(codeEtablissement: string, idPersonne: string): ng.IPromise<ModelTiers.ParticulieInformation.IParticulierInformation>;
        getCorporateInformation(codeEtablissement: string, idTiers: string): ng.IPromise<ModelTiersCorporate.CorporateInformation.ICorporateInformation>;
        /**
         * Recherche tous les tiers liés à une personne (ex trouver les particuliers liés à une personne morale)
         */
        getListeTiersLies(codeEtablissement: string, idPersonne: string): ng.IPromise<Array<ModelTiers.TiersLies.ITiersLies>>;
        getIdentification(codeEtablissement: string, idPersonne: number): ng.IPromise<ModelTiers.Identification.IIdentification>;
    }
    class TiersService implements ITiersService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getParticulierInformation(codeEtablissement: string, idPersonne: string): ng.IPromise<ModelTiers.ParticulieInformation.IParticulierInformation>;
        getCorporateInformation(codeEtablissement: string, idTiers: string): ng.IPromise<ModelTiersCorporate.CorporateInformation.ICorporateInformation>;
        getListeTiersLies(codeEtablissement: string, idPersonne: string): ng.IPromise<Array<ModelTiers.TiersLies.ITiersLies>>;
        getIdentification(codeEtablissement: string, idPersonne: number): ng.IPromise<ModelTiers.Identification.IIdentification>;
    }
}

declare module Avenants.Rest.Constantes {
    /**
     * Messages d'erreurs du Central
     */
    module RetourQr {
        const FSINR532_G111: string;
        const FSINR716_G111: string;
        const FSINRA31_BK83: string;
    }
}

declare module Avenants.Rest.Constantes {
    namespace Services {
        namespace Emprunteur {
            const urlRecherche: string;
            const urlEmprunteurGlobal: string;
            const urlInfoEntiteTitulaire: string;
            const urlRechercheEntiteTitulaire: string;
            const urlListerComptePersonne: string;
        }
        namespace Tiers {
            const urlParticulierInformation: string;
            const urlTiersLies: string;
            const urlCorporateInformation: string;
            const urlIdentification: string;
        }
        namespace Dossier {
            const urlCaracteristique: string;
        }
        namespace Credit {
            const urlAssurances: string;
            const urlListeAssurance: string;
            const urlListeEncoursPersonneAssu: string;
            const urlGarantie: string;
            const urlCaracteristique: string;
            const urlJustificatifCredit: string;
            const urlModeGestionCredit: string;
            const urlIncidentPaiement: string;
            const urlTableauAmortissement: string;
            const urlTableauAmortissementQuotite: string;
            const urlDetailTableauAmort: string;
            const urlInformationCredit: string;
            const urlProduitCredit: string;
            const urlPalierCredit: string;
            const urlEvenementCredit: string;
            const urlIndiceCredit: string;
            const urlEligibiliteChangePdt: string;
            const urlJustificatifGarantie: string;
            const urlJustifAssurance: string;
        }
        namespace Habilitation {
            const urlHabilitationCredit: string;
            const urlHabilitationGlobal: string;
        }
        namespace Avenant {
            const urlListeAvenantLight: string;
            const urlListeAvenant: string;
            const urlListeAssurance: string;
            const urlHistorique: string;
            const urlAccessoiresAnnexes: string;
            const urlCaracteristiqueFinan: string;
            const urlSyntheseImpactAvenant: string;
            const urlCreationAvenant: string;
            const urlCreationAvenantGarantie: string;
            const urlCreationChangePdtAvenant: string;
            const urlAjustementEcheancesForChangementProduit: string;
            const urlAjustementEcheancesForTauxDureeAndCombinatoire: string;
            const urlAjustementEcheancesForAssurances: string;
            const urlCaracteristique: string;
            const urlPrestation: string;
            const urlImpressionDossier: string;
            const urlGaranties: string;
            const urlPersonnes: string;
            const urlInfoCreditAvenant: string;
            const urlAvenantEdition: string;
            const urlServicesObjet: string;
        }
        namespace Parametre {
            const urlParametres: string;
            const urlParamApplicatif: string;
            const urlListerTypeSinistreConvention: string;
        }
        namespace Signature {
            const urlEligibilite: string;
            const urlContractualisationParametre: string;
            const urlSignatureElectronique: string;
            const urlDossierIDN: string;
            const urlSignElectronique: string;
            const urlGarantiesWithNatureForEligibilite: string;
        }
        namespace Structure {
            const urlMentionsLegales: string;
            const urlPosteFonctionnelAgent: string;
            const urlCaracteristiqueEDS: string;
            const urlHierarchieEDS: string;
        }
        namespace Agent {
            const urlRechercheAgent: string;
        }
        namespace ReportEcheance {
            const urlSuspensionAnnulation: string;
        }
        namespace PersonneObjet {
            const urlInformationObjet: string;
            const urlControleZonePtz: string;
        }
        namespace Catalogue {
            const urlConventionJuridique: string;
        }
    }
}

declare module Avenants.Rest.ToolsFunctionals {
    import EnumModificationCredit = Commun.Enum.ModificationCredit;
    /**
     * Permet de générer le code pour typer les modifications du crédit par l'avenant (CDFAOR)
     */
    class IndicateurBanalise {
        /**
         * Donnée permettant d'identifier la modification sur le crédit (lié au CDFAOR)
         */
        static getIndicateurBanalise(listeModificationCredit: Array<EnumModificationCredit>): string;
    }
    /**
     * Méthodes appelées dans la class InidicateurBanalise, elles sont externalisées afin de pouvoir faire des TU
     */
    class IndicateurBanaliseHelper {
        static getIndicateurBanaliseUneModificationCdfaor(m: EnumModificationCredit): string;
        static getIndicateurBanaliseDeuxModificationsCdfaor(liste: Array<EnumModificationCredit>): string;
        static getIndicateurBanaliseTroisModificationsCdfaor(liste: Array<EnumModificationCredit>): string;
        static getIndicateurBanaliseQuatreModificationsCdfaor(liste: Array<EnumModificationCredit>): string;
        static getIndicateurBanaliseCinqModificationsCdfaor(liste: Array<EnumModificationCredit>): string;
    }
}

declare module Avenants.Rest.Services {
    interface IRestService {
        /**
         * Exécution de la requète GET, les données récupérées sont mises en cache
         * @param urlService
         * @param params : paramètres dans le query
         * @param fromCache: optionnel: true par défaut
         * @param timeout: optionnel
         */
        sendGetRequest<T, U>(urlService: string, params: U, cacheKey: string, fromCache?: boolean, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète POST
         * @param urlService
         * @param data : données dans le BODY
         * @param params: optionnel, paramètres dans le query
         * @param timeout: optionnel
         */
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète PUT
         * @param urlService
         * @param data : données dans le BODY
         * @param params: optionnel, paramètres dans le query
         * @param timeout: optionnel
         */
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète DELETE
         * @param urlService
         * @param data: optionnel
         * @param params: optionnel, paramètres dans le query
         */
        sendDeleteRequest<T, U, V>(urlService: string, data?: U, params?: V): ng.IPromise<T>;
    }
    class RestService implements IRestService {
        private $q;
        private cacheService;
        private serviceAgentExtended;
        private logger;
        private popinService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, cacheService: Commun.Services.ICacheService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, logger: Commun.Logger.ILogger, popinService: Commun.Services.IPopinService);
        sendGetRequest<T, U>(urlService: string, params: Object, cacheKey: string, fromCache?: boolean, timeout?: number): ng.IPromise<T>;
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        sendDeleteRequest<T, U, V>(urlService: string, data?: U, params?: V): ng.IPromise<T>;
        consume<T, U, V>(typeMethode: MyWay.Services.MethodEnum, urlService: string, params?: U, data?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Certains RetourQR nécessitent un ajustement des données pour avoir le comportement souhaité
         *  -> patch ou 'Verrue' (By Arnaud Kendziora)
         */
        ajustementRetourQr(urlService: string, dataRetourQR: Array<Commun.Modeles.IRetourQR>): Array<Commun.Modeles.IRetourQR>;
        getIsMessageRetourOk(messageRetour: Array<string>): boolean;
        handleRetourQr(retour: Commun.Modeles.IRetourQRCustom): ng.IPromise<void>;
    }
}

declare module Avenants.Rest.Modeles.AssuranceCredit.Recherche {
    interface IRecherche extends IElementGestion {
        request: IRequest;
        assurablesOuGarants: Array<IAssurableOuGarant>;
        compagniesAssurances: Array<ICompagnieAssurance>;
        dossier: IDossier;
        cvnApplicablesEmprunteurs: Array<IConventionApplicableEmprunteur>;
    }
    interface IPhase {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DUREE AJUSTEE PHASE CREDIT
         */
        dureeAjusteePhaseCredit: number;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IAssurableOuGarant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IConventionApplicableCredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE ASSURANCE
         */
        codeTypeAssurance: string;
        /**
         * LIBELLE COURT TYPE ASSURANCE
         */
        libelleCourtTypeAssurance: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * UNITE PERIODE CONDIT OBTENTION CONV.
         */
        unitePeriodeConditObtentionConv: string;
        /**
         * QUOTITE MINIMUM PAR BENEFICIAIRE
         */
        quotiteMinimumParBeneficiaire: number;
        /**
         * QUOTITE MAXIMUM PAR BENEFICIAIRE
         */
        quotiteMaximumParBeneficiaire: number;
        /**
         * PAS DE QUOTITE PAR BENEFICIAIRE
         */
        pasQuotiteParBeneficiaire: number;
        /**
         * MONTANT MINIMUM GARANTI PAR TETE
         */
        montantMinimumGarantiParTete: number;
        /**
         * MONTANT MAXIMUM GARANTI PAR TETE
         */
        montantMaximumGarantiParTete: number;
        /**
         * PAS DE MONTANT GARANTI PAR TETE
         */
        pasMontantGarantiParTete: number;
        /**
         * CODE TIERS GARANTI
         */
        codeTiersGaranti: string;
        /**
         * CODE TYPE OBJET AUTORISE
         */
        codeTypeObjetAutorise: string;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM COUVERTURE ASSURANCE
         */
        ageMaximumCouvertureAssurance: number;
        /**
         * MONTANT MAXIMUM ENCOURS GARANTI
         */
        montantMaximumEncoursGaranti: number;
        /**
         * DUREE MAXI PREFI POUR CONVENTION
         */
        dureeMaxiPrefiPourConvention: number;
        /**
         * DUREE MAXI DIF TOTAL POUR CONVENTION
         */
        dureeMaxiDifTotalPourConvention: number;
        /**
         * DUREE MAXI DIF AMORT POUR CONVENTION
         */
        dureeMaxiDifAmortPourConvention: number;
        /**
         * DUREE MAXI AMORTISS. POUR CONVENTION
         */
        dureeMaxiAmortisspourConvention: number;
        /**
         * MONTANT PLAFOND ENCOURS DELEGATION
         */
        montantPlafondEncoursDelegation: number;
        /**
         * REGLE DATE EFFET ASSUR. - GARANTIE
         */
        regleDateEffetAssurgarantie: string;
        /**
         * AGE MAXIMUM COUVERTURE EN EXTENSION
         */
        ageMaximumCouvertureEnExtension: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE DE RESTITUTION
         */
        codeRestitution: string;
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
        /**
         * MT MINIMUM CREDIT / CONVENTION
         */
        mtMinimumCreditConvention: number;
        /**
         * MT MAXIMUM CREDIT / CONVENTION
         */
        mtMaximumCreditConvention: number;
        /**
         * DUREE MINI CREDIT / OBTENTION CONV.
         */
        dureeMiniCreditObtentionConv: number;
        /**
         * DUREE MAXI CREDIT / OBTENTION CONV
         */
        dureeMaxiCreditObtentionConv: number;
        /**
         * CD MODE EXPRESSION GARANTIE ACCORDEE
         */
        cdMdeExpressionGarantieAccordee: string;
        /**
         * CD POSSIBILITE EXTENSION COUVERTURE
         */
        cdPossExtensionCouverture: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        accessoires: Array<IAccessoireConvention>;
    }
    interface IDossier {
        /**
         * Code Destination Opération Objet
         */
        codeDestinationOperationObjet: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * Existence Garantie Hypothécaire
         */
        existenceGarantieHypothecaire: string;
        credit: ICredit;
    }
    interface ICredit {
        /**
         * CODE PRET IN FINE
         */
        codePretInFine: string;
        /**
         * Code Indicateur Taux Révisable
         */
        codeIndicateurTauxRevisable: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE CREDIT RELAIS
         */
        codeCreditRelais: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * NOMBRE DE PHASES D'UN CREDIT
         */
        nombrePhasesUnCredit: number;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * Nb pér maxi allonge crédit sortie cc
         */
        nbPerMaxiAllongeCreditSortieCc: number;
        /**
         * Nb pér maxi allonge crédit révi taux
         */
        nbPerMaxiAllongeCreditReviTaux: number;
        /**
         * Nb pér maxi allonge crédit ex modula
         */
        nbPerMaxiAllongeCreditExModula: number;
        /**
         * indicateur periode compte
         */
        indicateurPeriodeCompte: string;
        /**
         * indicateur de compte
         */
        indicateurCompte: string;
        /**
         * Durée de préfinancement (en mois)
         */
        dureePrefinancementEnMois: number;
        conventionsApplicables: Array<IConventionApplicableCredit>;
    }
    interface IAccessoireConvention {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * TAUX ACCESSOIRE PERSONNES AGEES
         */
        tauxAccessoirePersonnesAgees: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * DUREE APPLICATION ACCESS.
         */
        dureeApplicationAccess: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccess: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numeroRegleApplicationAccess: string;
    }
    interface IConventionApplicableEmprunteur {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
    }
    interface ICompagnieAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE COURT CONVENTION.
         */
        libelleCourtConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * code indique convention commerciale
         */
        codeIndiqueConvCommerciale: string;
    }
    interface IRequest {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        phases: Array<IPhase>;
        conventionApplicable: IConventionApplicable;
    }
    interface IConventionApplicable {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE AVENANT FINANCIER
         */
        codeAvenantFinancier: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        identifiantEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IEncoursPersonneAssuRequest {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        numeroCredit: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssu: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
    }
    interface IEncoursPersonneAssu {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssu: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * MONTANT DE L'ENCOURS
         */
        montantEncours: number;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
    }
}

declare module Avenants.Rest.Modeles.Agent.Recherche {
    interface IRechercheAgent {
        listeAgents: Array<IAgent>;
    }
    interface IAgent {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceElementStructure: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.
         * Sauf si l'EDS est un poste fonctionnel (c'est le cas pour rechercheAgent),  on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationAgent: string;
        /**
         * Cette rubrique décrit la date de début de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeAgent: string;
        /**
         * Cette rubrique décrit la date de fin de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque Etablissement.
         *
         * Exemples :
         * 072 / CHARGE DE CLIENTELE DE NIVEAU 2
         * 081 / AGENT COMMERCIAL
         * 082 / RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Numéro d'identification de l'élément de structure hiérarchiquement supérieur à un élément donné.
         */
        identifiantEDSHierarchique: number;
        /**
         * Référence externe de l'EDS hiérarchiquement supérieur.
         */
        referenceEDSHierarchique: number;
        /**
         * Indique le type organisationnel de l'EDS hiérarchiquement supérieur.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente
         */
        typeEDSHierarchique: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleTypeEDSHierarchique: string;
        /**
         * Désignation décrivant l'élément de structure de rattachement (niveau "hiérarchique" supérieur).
         */
        libelleEDSHierarchique: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Référence unique dans MYSYS.
         */
        identifiantAgent: string;
        /**
         * Détermine si l'agent est générique ou nominatif.
         * Exemple d'agent générique : stagiaire, dépannage, ...
         *
         * Valeurs possibles :
         * - 'O' : Agent générique
         * - 'N' : Agent nominatif
         * - ' ' : Agent générique et Agent nominatif
         */
        indicateurAgentNonNominatif: string;
        /**
         * Indique si l'agent possède le profil de façon personnalisée.
         *
         * Valeurs possibles :
         * - 'F' : ?
         * - 'P' : ?
         */
        typePersonnalisation: string;
        /**
         * Indicateur existence affectation temporaire.
         */
        indicateurAffectationTemporaire: string;
        /**
         * Indicateur non éligibilité prise RDV.
         */
        indicateurNonElligibiliteRDV: string;
    }
    interface IZoneDeTravail {
        /**
         * Code indiquant si d'autres résultats sont disponibles (cas des Qr avec pagination).
         */
        codeSuiteListe: string;
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditParam.ControleZonePtz {
    interface IControleZonePtz extends IElementGestion {
        controleCodePostal: IControleCodePostal;
    }
    interface IControleCodePostal {
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * CODE ZONE GEOGRAPHIQUE
         */
        codeZoneGeographique: string;
        /**
         * CODE ZONE FRANCHE
         */
        codeZoneFranche: string;
        /**
         * CODE RETOUR REQUETE INTERDOMAINE
         */
        codeRetourRequeteInterdomaine: string;
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditParam.Eligibilite {
    import RestAvenant = Rest.Modeles.DossierCreditAvenant;
    import RestGestion = Rest.Modeles.DossierCreditGestion;
    /**
     * Construction des éléments attendus en entrée pour connaitre l'éligibilité
     * avenantcreditparam/eligibilite
     */
    class CriteresAppelBuilder {
        static getResult(codeEtablissement: number, dateTraitement: string, idCredit: string, caraFinan: RestAvenant.CaracteristiqueFinan.ICaracteristiqueFinan, caraCredit: RestGestion.CaracteristiqueCredit.ICaracteristiqueCredit, avenant: RestAvenant.Recherche.IAvenant, codeNatureFinancementCredit: string, isEligibilite: boolean, typeEditionPieco: Commun.Enum.TypeEditionPieco, isEcureuilCredit: boolean): ICriteresAppel;
        private static getDonneesGeneral(codeEtablissement, dateTraitement, isEligibilite, typeEditionPieco, isEcureuilCredit);
        /**
         * pour savoir si on est en indus et que la caisse est BPCE-SC
         */
        private static isIndusBPCESC(typeEditionPieco, isEcureuilCredit);
        /**
         * Création de la liste complète
         */
        private static getListeDonneesUnCarac(idCredit, codeExistenceCreditTxRevisable, credit, listeGarantieExistante, listePersonneEmprunteur, listeIdAssurance, typeEditionPieco, isEcureuilCredit);
        private static getCodePourCreationLoiDossierDonneesUnCarac(typeLoi);
        private static getParametragePiecoFlyer(typeEditionPieco, isEcureuilCredit, idCredit);
        /**
         * Pour chaque garantie de l'avenant, il faut créer 2 nouveaux DonneesUnCarac
         */
        private static getListeDonneesUnCaracForGaranties(idCredit, listeGarantieExistante, listePersonneEmprunteur);
        /**
         * Garantie porté sur un bien de l’emprunteur
         * @param garantie
         * @param listePersonneEmprunteur
         */
        private static getIsBienPorteEmprunteurForCaraSOBJEMP(garantie, listePersonneEmprunteur);
        private static getDonneesUnCarac(codeTypeEntite, idEntiteComparaison, idElement2, idElement4, idDonnee, codeIndicateurDonneeValorisee, codePourCreation);
        private static getListeDonneesDixCarac(idCredit, codeEtablissement, codeNatureFinancementCredit, codeFamilleControle, listeGarantieExistante, typeEditionPieco, isEcureuilCredit);
        private static getListDonneesDixCaracForFlyer(idCredit, codeEtablissement, typeEditionPieco, isEcureuilCredit);
        private static getListeDonneesDixCaracForGaranties(idCredit, listeGarantieExistante);
        private static getDonneesDixCarac(codeTypeEntite, idEntiteComparaison, idElement2, idElement4, idDonnee, zoneBanalisee);
        private static getDonneesCinquanteCarac(idCredit);
        private static getListeDonneesNumerique(credit, nbEmprunteur);
        private static getDonneesNumerique(codeTypeEntite, idEntiteComparaison, idElement, idDonnee, codeIndicateurDonneeValorisee, montantComparaison);
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditParam.Eligibilite {
    interface IEligibilite {
        criteresAppel: ICriteresAppel;
        donneesUtils: Array<IDonneesUtil>;
        ctrlManuels: Array<ICtrlManuel>;
        piecesTiers: Array<IPieceTiers>;
        pieceAgents: Array<IPieceAgent>;
        segmentPrincipals: Array<ISegmentPrincipal>;
        infoGeneriques: Array<IInfoGenerique>;
        libelleRelatifDocuments: Array<ILibelleRelatifDocument>;
        retourQR: Array<IRetourQR>;
        documentsPdf: Array<IDocumentPdf>;
    }
    interface IDonneesGeneral {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE STRUCTURE INSTRUCTION
         */
        codeStructureInstruction: string;
        /**
         * Numéro appel moteur de règle
         */
        numeroAppelMoteurRegle: number;
        /**
         * Code Type d'Elément
         */
        codeTypeElement: string;
        /**
         * Code Type Processus Métier
         */
        codeTypeProcessusMetier: string;
        /**
         * Code Type d'Acteur
         */
        codeTypeActeur: string;
        /**
         * DATE DE TRAITEMENT
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
    }
    interface IDonneesUnCarac {
        /**
         * Code Type Entité
         */
        codeTypeEntite: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur2: string;
        /**
         * Identifiant Entité de Comparaison
         */
        identifiantEntiteComparaison: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Code Indicateur Donnée Valorisée
         */
        codeIndicateurDonneeValorisee: string;
        /**
         * Zone banalisée alphanum.longueur1
         */
        codePourCreation: string;
    }
    interface IDonneesDixCarac {
        /**
         * Code Type Entité
         */
        codeTypeEntite: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur2: string;
        /**
         * Identifiant Entité de Comparaison
         */
        identifiantEntiteComparaison: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Code Indicateur Donnée Valorisée
         */
        codeIndicateurDonneeValorisee: string;
        /**
         * ZONE BANALISEE ALPHANUM.lONGUEUR10
         */
        zoneBanaliseeAlphanumLongueur10: string;
    }
    interface IDonneesCinquanteCarac {
        /**
         * Code Type Entité
         */
        codeTypeEntite: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur2: string;
        /**
         * Identifiant Entité de Comparaison
         */
        identifiantEntiteComparaison: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Code Indicateur Donnée Valorisée
         */
        codeIndicateurDonneeValorisee: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur50: string;
    }
    interface IDonneesNumerique {
        /**
         * Code Type Entité
         */
        codeTypeEntite: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur2: string;
        /**
         * Identifiant Entité de Comparaison
         */
        identifiantEntiteComparaison: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Code Indicateur Donnée Valorisée
         */
        codeIndicateurDonneeValorisee: string;
        /**
         * Montant de Comparaison
         */
        montantComparaison: number;
        /**
         * Taux de comparaison
         */
        tauxComparaison: number;
    }
    interface IDonneesUtil {
        /**
         * Code Type Entité
         */
        codeTypeEntite: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Catégorie de la donnée
         */
        categorieDonnee: string;
    }
    interface ICtrlManuel {
        /**
         * Code Indicateur Cas Echéant
         */
        codeIndicateurCasEcheant: string;
        /**
         * Code Indicateur Obligatoire
         */
        codeIndicateurObligatoire: string;
        /**
         * Identifiant Processus Au plus tard
         */
        identifiantProcessusPlusTard: string;
        /**
         * Identifiant Contrôle Manuel
         */
        identifiantControleManuel: string;
        /**
         * Libellé Pièce / Controle
         */
        libellePieceControle: string;
        /**
         * Libellé Aide
         */
        libelleAide: string;
        /**
         * Code Thème
         */
        codeTheme: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * Code Type Entité
         */
        codeTypeEntite: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
    }
    interface IPieceTiers {
        /**
         * Code Indicateur Cas Echéant
         */
        codeIndicateurCasEcheant: string;
        /**
         * Code Indicateur Obligatoire
         */
        codeIndicateurObligatoire: string;
        /**
         * Identifiant Processus Au plus tard
         */
        identifiantProcessusPlusTard: string;
        /**
         * Identifiant Pièce Tiers
         */
        identifiantPieceTiers: string;
        /**
         * Libellé Pièce / Controle
         */
        libellePieceControle: string;
        /**
         * Libellé Aide
         */
        libelleAide: string;
        /**
         * Code Tiers
         */
        codeTiers: string;
        /**
         * Code Thème
         */
        codeTheme: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * CODE CLASSE JUSTIFICATIF
         */
        codeClasseJustificatif: string;
        /**
         * CODE SOUS CLASSE PIECE JUSTIFICATIVE
         */
        cdSousClassePieceJustificative: string;
        /**
         * CODE NATURE JUSTIFICATIF
         */
        codeNatureJustificatif: string;
        /**
         * CODE JUSTIFICATIF PERIODIQUE
         */
        codeJustificatifPeriodique: string;
        /**
         * DELAI ALERTE RELANCE CLIENT
         */
        delaiAlerteRelanceClient: number;
        /**
         * Code Type Entité
         */
        codeTypeEntite: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
    }
    interface IPieceAgent {
        /**
         * Code Indicateur Cas Echéant
         */
        codeIndicateurCasEcheant: string;
        /**
         * Code Indicateur Obligatoire
         */
        codeIndicateurObligatoire: string;
        /**
         * Identifiant Processus Au plus tard
         */
        identifiantProcessusPlusTard: string;
        /**
         * Identifiant Pièce Agence
         */
        identifiantPieceAgence: string;
        /**
         * Libellé Pièce / Controle
         */
        libellePieceControle: string;
        /**
         * Libellé Aide
         */
        libelleAide: string;
        /**
         * Code Thème
         */
        codeTheme: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * Code Type Entité
         */
        codeTypeEntite: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
    }
    interface ISegmentPrincipal {
        /**
         * Identifiant Elément
         */
        identifiantElement: string;
        /**
         * Identifiant Entité Fonctionnelle
         */
        identifiantEntiteFonctionnelle: string;
        /**
         * Identifiant Donnée
         */
        identifiantDonnee: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * Code Indicateur Cas Echéant
         */
        codeIndicateurCasEcheant: string;
        /**
         * Code Indicateur Obligatoire
         */
        codeIndicateurObligatoire: string;
        /**
         * Identifiant Processus Au plus tard
         */
        identifiantProcessusPlusTard: string;
        /**
         * Code Thème
         */
        codeTheme: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE STRUCTURE INSTRUCTION
         */
        codeStructureInstruction: string;
        /**
         * Code Type d'Elément
         */
        codeTypeElement: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
    }
    interface IInfoGenerique {
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * Compteur Informations Génériques
         */
        compteurInformationsGeneriques: number;
        /**
         * Catégorie de la donnée
         */
        categorieDonnee: string;
        /**
         * Zone banalisée alphanum.longueur50
         */
        zoneBanaliseeAlphanumLongueur4: string;
        /**
         * CODE TABLE
         */
        codeTable: string;
    }
    interface ILibelleRelatifDocument {
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * Code Type Libellé
         */
        codeTypeLibelle: string;
        /**
         * Libellé Elément
         */
        libelleElement: string;
    }
    interface ICriteresAppel {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        donneesGeneral: IDonneesGeneral;
        donneesUnCaracs: Array<IDonneesUnCarac>;
        donneesDixCaracs: Array<IDonneesDixCarac>;
        donneesCinquanteCaracs: Array<IDonneesCinquanteCarac>;
        donneesNumeriques: Array<IDonneesNumerique>;
        /**
         * Permet de dire si l'on envoie ou pas le flux de documents pdf issu de l'url neo.
         * True : envoie la liste d'objet contenant le flux de documentsPdf
         * False : envoie rien
         */
        envoiDocumentPdf: boolean;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IDocumentPdf {
        /**
         * Libellé du document envoyé
         */
        libelle: string;
        /**
         * Flux
         */
        contenuDocument: string;
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditParam.Indice {
    interface IIndice extends IElementGestion {
        indices: Array<IObjetIndice>;
    }
    interface IObjetIndice {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * DATE DE TRAITEMENT
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * UNITE PERIODE VALEUR INIT INDICE
         */
        unitePeriodeValeurInitIndice: string;
        /**
         * NB PERIODE VALEUR INIT INDICE
         */
        nbPeriodeValeurInitIndice: number;
        /**
         * VALEUR INDICE
         */
        valeurIndice: number;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * Nbre de périodes de duration
         */
        nbrePeriodesDuration: number;
        /**
         * Unité de période de duration
         */
        unitePeriodeDuration: string;
        /**
         * LIBELLE LONG INDICE
         */
        libelleLongIndice: string;
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditParam.Produit {
    interface IConditionTauxProduit {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DUREE MINIMUM PLAGE CONDITION TAUX
         */
        dureeMinimumPlageConditionTaux: number;
        /**
         * DUREE MAXIMUM PLAGE CONDITION TAUX
         */
        dureeMaximumPlageConditionTaux: number;
        /**
         * CODE MODE EXPRESSION TAUX
         */
        codeModeExpressionTaux: string;
        /**
         * TAUX MOYEN MINIMUM CREDIT
         */
        tauxMoyenMinimumCredit: number;
        /**
         * TAUX MOYEN MAXIMUM CREDIT
         */
        tauxMoyenMaximumCredit: number;
        /**
         * TAUX MOYEN CONSEILLE CREDIT
         */
        tauxMoyenConseilleCredit: number;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * Marge fixe pour la révision
         */
        margeFixePourRevision: number;
        /**
         * Variation marge fixe pour révision
         */
        variationMargeFixePourRevision: number;
    }
    interface IPhase {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * LIBELLE LONG TYPE DE PHASE
         */
        libelleLongTypePhase: string;
        /**
         * IDENTIFIANT LOI DE REVISION
         */
        identifiantLoiRevision: string;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CD MODE EXPRESSION TAUX MOYEN PHASE
         */
        cdModeExpressionTauxMoyenPhase: string;
        /**
         * CD ECHEANCE RECALCULEE PAR REVISION
         */
        codeEcheanceRecalculeeRevision: string;
        /**
         * CODE TAUX DES PALIERS CALCULES
         */
        codeTauxDesPaliersCalcules: string;
        /**
         * CD TYPE CONFIRMATION TAUX INTERET
         */
        cdTypeConfirmationTauxInteret: string;
        /**
         * UNITE PERIODE VALEUR INIT INDICE
         */
        unitePeriodeValeurInitIndice: string;
        /**
         * NB PERIODE VALEUR INIT INDICE
         */
        nbPeriodeValeurInitIndice: number;
        /**
         * QUOTITE MINIMUM DE CAPITAL A AMORTIR
         */
        quotiteMinimumCapitalAAmortir: number;
        /**
         * QUOTITE MAXIMUM DE CAPITAL A AMORTIR
         */
        quotiteMaximumCapitalAAmortir: number;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * VALEUR MINI TAUX MOYEN PHASE
         */
        valeurMiniTauxMoyenPhase: number;
        /**
         * VALEUR MAXI TAUX MOYEN PHASE
         */
        valeurMaxiTauxMoyenPhase: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * MODE EXPRESSION DUREE PHASE
         */
        modeExpressionDureePhase: string;
        /**
         * MODE DE CALCUL AMORTISSEMENT
         */
        modeCalculAmortissement: string;
        /**
         * DUREE PHASE PRODUIT
         */
        dureePhaseProduit: number;
        /**
         * DUREE PHASE PRODUIT
         */
        dureePhaseProduit1: number;
        /**
         * DUREE PHASE PRODUIT
         */
        dureePhaseProduit2: number;
        /**
         * CODE PERIODICITE DIFFERENTE M.E.R.
         */
        codePeriodiciteDifferenteMER: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement1: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement2: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement3: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement4: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERinterets: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERinterets1: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERinterets2: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERinterets3: string;
        /**
         * Code type de traitement d'échéance
         */
        codeTypeTraitementEcheance: string;
        /**
         * QUOTITE MAXIMUM DE CAPITAL IN FINE
         */
        quotiteMaximumCapitalInFine: number;
        /**
         * QUOTITE MINIMUM DE CAPITAL A AMORTIR
         */
        quotiteMinimumCapitalAAmortir1: number;
        /**
         * QUOTITE MAXIMUM DE CAPITAL A AMORTIR
         */
        quotiteMaximumCapitalAAmortir1: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * QUOTITE CONSEILLEE CAPITAL A AMORTIR
         */
        quotConseilleeCapitalAAmortir: number;
        /**
         * DUREE D'UNE PHASE ( PAS )
         */
        dureeUnePhasePas: number;
        /**
         * Code calcul interets diff recouvrmnt
         */
        cdCalculInteretsDiffRecouvrmnt: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        perioMiseRecouvrementInterets: string;
        /**
         * NB MAXIMUM PERIODE VARIATION DUREE
         */
        nbrMaximumPeriodeVariationDuree: number;
        /**
         * QUOTITE CONSEILLEE CAPITAL A AMORTIR
         */
        quotConseilleeCapitalAAmortir1: number;
        paliers: Array<IPalier>;
        amenagementsEcheances: Array<IAmenagementEcheance>;
        paliersProgressionAmortissement: Array<IPalierProgressionAmortissement>;
        parametresRevision: Array<IParametreRevision>;
    }
    interface IPalier {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * DUREE MINI PALIER DE TAUX
         */
        dureeMiniPalierTaux: number;
        /**
         * DUREE PALIER DE TAUX
         */
        dureePalierTaux: number;
        /**
         * DUREE PALIER DE TAUX
         */
        dureePalierTaux1: number;
        /**
         * TYPE DE REMBOURSEMENT
         */
        typeRemboursement: string;
        /**
         * CODE TYPE DE TAUX INTERET
         */
        codeTypeTauxInteret: string;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * TAUX D INTERET
         */
        tauxInteret: number;
        /**
         * TAUX D INTERET
         */
        tauxInteret1: number;
        /**
         * TAUX D INTERET
         */
        tauxInteret2: number;
        /**
         * PERIODICITE APPLIC PROGRE ECHEANCE
         */
        periodiciteApplicProgreEcheance: string;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances: number;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances1: number;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances2: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * CODE TYPE TAUX PROGRESSION ECHEANCES
         */
        cdTypeTauxProgressionEcheances: string;
    }
    interface IPalierProgressionAmortissement {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * DUREE MINI PALIER PROGRE AMORT
         */
        dureeMiniPalierProgreAmort: number;
        /**
         * DUREE MAXI PALIER PROGRE AMORT
         */
        dureeMaxiPalierProgreAmort: number;
        /**
         * CODE TYPE TAUX PROGRE AMORTISSEMENT
         */
        codeTypeTauxProgreAmortissement: string;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement: number;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement1: number;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement2: number;
        /**
         * PERIODICITE APPLIC PROGRE AMORT
         */
        periodiciteApplicProgreAmort: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * DUREE PALIER PROGRE AMORTIS. ( PAS )
         */
        dureePalierProgreAmortisPas: number;
    }
    interface IAmenagementEcheance {
        /**
         * CODE FAMILLE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * CODE OBJET DE L' OPTION
         */
        codeObjetLoption: string;
        /**
         * Code Maintien de la durée résiduelle
         */
        codeMaintienDureeResiduelle: string;
        /**
         * Code Nouvelle durée résiduelle
         */
        codeNouvelleDureeResiduelle: string;
        /**
         * Code retour échéance contractuelle
         */
        codeRetourEcheanceContractuelle: string;
        /**
         * Nb de périodes maxi de l'aménagement
         */
        nbPeriodesMaxiLAmenagement: number;
        /**
         * Nb de périodes mini de l'aménagement
         */
        nbPeriodesMiniLAmenagement: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
    }
    interface IModalite {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * IDENTIFIANT CONDITION DE R.A.
         */
        identifiantConditionRA: string;
        /**
         * IDENT MODALITE CALCUL INDEMNITE RA
         */
        identModaliteCalculIndemniteRa: string;
        /**
         * POURC. ASSOCIE REGLE CALCUL MODAL RA
         */
        pourcassocieRegleCalculModalRa: number;
        /**
         * POURCENT. ASSOCIE REGLE AUTORIS. RA
         */
        pourcentassocieRegleAutorisra: number;
        /**
         * POURCENTAGE MT MINI R.A. AUTORISE
         */
        pourcentageMtMiniRAautorise: number;
        /**
         * CD TYPE ASSIETTE CALCUL MT MINI R.A.
         */
        cdTypeAssietteCalculMtMiniRA: string;
        /**
         * CD AUTORISATION RA TOTAL INF MT MINI
         */
        cdAutorisationRaTotalInfMtMini: string;
        /**
         * Code forçage des Indemnités de RA
         */
        codeForcageDesIndemnitesRa: string;
        /**
         * Libellé informatif pour forçage IRA
         */
        libelleInformatifPourForcageIra: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * CODE COMPATIBILITE TYPE DE LOI
         */
        codeCompatibiliteTypeLoi: string;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * CODE MODE DE CALCUL INDEMNITE RA
         */
        codeModeCalculIndemniteRa: string;
        /**
         * NUMERO MODALITE DE RA
         */
        numModaliteRemboursemntAnticipe: number;
        /**
         * SURCOUT DE TAUX / R.A.
         */
        surcoutTauxRA: number;
    }
    interface IVariationDureeProduit {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CD Type de butoir de durée
         */
        cdTypeButoirDuree: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DUREE MINIMUM PLAGE CONDITION TAUX
         */
        dureeMinimumPlageConditionTaux: number;
        /**
         * DUREE MAXIMUM PLAGE CONDITION TAUX
         */
        dureeMaximumPlageConditionTaux: number;
        /**
         * Règle de détermination de d'allong.
         */
        regleDeterminationDAllong: string;
        /**
         * Nb période allongement durée crédit
         */
        nbPeriodeAllongementDureeCredit: number;
        /**
         * Nb pér. mini d'allongement du crédit
         */
        nbPerminiAllongementCredit: number;
        /**
         * Nb pér. maxi d'allongement du crédit
         */
        nbPermaxiAllongementCredit: number;
        /**
         * Règle de détermination de la réduc.
         */
        regleDeterminationReduc: string;
        /**
         * Nb période réduction de durée crédit
         */
        nbPeriodeReductionDureeCredit: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * % allongement de durée crédit
         */
        prCentAllongDureeCredit: number;
        /**
         * % réduction de durée crédit
         */
        prCentReductionDureeCredit: number;
    }
    interface IAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire1: string;
        /**
         * NUMERO REGLE DE CALCUL ELEMENT
         */
        numeroRegleCalculElement: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * Indicateur Accessoire Obligatoire
         */
        indicateurAccessoireObligatoire: string;
        /**
         * Indicateur Accessoire Validé
         */
        indicateurAccessoireValide: string;
        /**
         * Indicateur Accessoire Annulé AV
         */
        indicateurAccessoireAnnuleAv: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire1: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire2: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire3: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire4: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * LIBELLE TYPE ASSIETE DE CALCUL
         */
        libelleTypeAssieteCalcul: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * REGLE DATE DEBUT APPLI ACC catalogue
         */
        regleDateDebutAppliAccCatalogue: string;
        /**
         * REGLE EVENEMENT DECH. 1ER APPEL cata
         */
        regleEvenementDech1erAppelCata: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * Code indicateur bornes dérogées
         */
        codeIndicateurBornesDerogees: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numeroRegleApplicationAccess: string;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireDansCalculTEG: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nbrEcheancesAccessoiresReport: number;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAccess: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvraccessoire: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IParametreRevision {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * CD TYPE DE ROLE INDICE
         */
        codeTypeRoleIndice: string;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision: number;
        /**
         * UNITE PERIODE VALEUR INIT INDICE
         */
        unitePeriodeValeurInitIndice: string;
        /**
         * NB PERIODE VALEUR INIT INDICE
         */
        nbPeriodeValeurInitIndice: number;
        /**
         * NOMBRE PERIODE REVISION SUIVANTE
         */
        nombrePeriodeRevisionSuivante: number;
        /**
         * CD VALEUR REF UTILISATION INDICE
         */
        cdValeurRefUtilisationIndice: string;
        /**
         * EVENEMENT VALEUR INITIALE INDICE
         */
        evenementValeurInitialeIndice: string;
        /**
         * Numéro de période de révision
         */
        numeroPeriodeRevision: number;
        /**
         * LIBELLE COURT LOI DE REVISION
         */
        libelleCourtLoiRevision: string;
        /**
         * LIBELLE LONG LOI DE REVISION
         */
        libelleLongLoiRevision: string;
        /**
         * Libelle jeu de revision
         */
        libelleJeuRevision: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * MODE EXPRESSION VALEUR UTILIS INDICE
         */
        mdExpressionValeurUtilisIndice: string;
        /**
         * EVENEM DECLENCHEUR PREMIERE REVISION
         */
        evenDeclenchPremiereRevision11: string;
        /**
         * EVENEMENT DECLENCHEUR REVISION
         */
        evenDeclenchPremiereRevision1: string;
        /**
         * CD UNITE PERIODE REVISION SUIVANTES
         */
        cdUnitePeriodeRevisionSuivantes: string;
        nombreJeuxParametresRevision: number;
        identifiantLoiRevision: string;
        codeEcheanceRecalculeeRevision: string;
        evenemntDeclencheurDebutPeriode: string;
        codeUnitePeriodeDebutRevision: string;
        nbrPeriodePourDeterDebutPeriode: number;
        dureePeriodeRevision: number;
        uniteDureePeriodeRevision: string;
        nbrEcheanceAvantRecalculMontant: number;
    }
    interface IProduit extends IElementGestion {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * JOUR DATE ECHEANCE
         */
        jourDateEcheance: string;
        /**
         * CODE TAUX DU CREDIT DIRECTEUR
         */
        codeTauxCreditDirecteur: string;
        /**
         * DATE DE CLOTURE
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * DATE DEBUT SUSPENSION PRODUIT
         * Type date au format yyyy-MM-dd
         */
        dateDebutSuspensionProduit: string;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * MODE EXPRESSION DUREE CREDIT
         */
        modeExpressionDureeCredit: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit1: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit2: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit3: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit4: number;
        /**
         * CODE POSSIBILITE DE PREFINANCEMENT
         */
        codePossibilitePrefinancement: string;
        /**
         * CODE POSSIBILITE DIFFERE TOTAL
         */
        codePossibiliteDiffereTotal: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * MONTANT MINIMUM CREDIT
         */
        montantMinimumCredit: number;
        /**
         * MONTANT MAXIMUM CREDIT
         */
        montantMaximumCredit: number;
        /**
         * PAS SUR MONTANT CREDIT
         */
        pasSurMontantCredit: number;
        /**
         * Code type de prêt combiné
         */
        codeTypePretCombine: string;
        /**
         * Code produit révisable
         */
        codeProduitRevisable: string;
        /**
         * Code acc comp. bonification autorise
         */
        codeAccCompbonificationAutorise: string;
        /**
         * CODE CREDIT RELAIS
         */
        codeCreditRelais: string;
        /**
         * CD POSSIBILITE DIFFERE AMORTISSEMENT
         */
        cdPossibiliteDiffereAmortiss: string;
        conditionsTauxProduit: Array<IConditionTauxProduit>;
        phases: Array<IPhase>;
        modalites: Array<IModalite>;
        accessoires: Array<IAccessoire>;
        variationsDureeProduit: Array<IVariationDureeProduit>;
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditService.AjustementEcheances {
    interface IAjustementEcheances extends IElementGestion {
        credit: ICredit;
        /**
         * Détermine si un palier est absorbé lors de la diminution de durée (appel de la calculatrice tauxDuree)
         */
        palierAbsorbe: boolean;
        /**
         * A renseigner à true quand l'allongement de durée générée par le calcul de durée dans le cas de la saisie d'une nouvelle échéance de palier est supérieure à une certaine valeur
         */
        allongementDureeLimite: boolean;
        /**
         * Dans le cas saisie nouvelle échéance et calcul durée (typeCalcul = 5), on indique la différence entre la durée initiale et la nouvelle durée calculée. Directement lié à allongementDureeLimite
         */
        deltaDuree: number;
        criteresAppel: ICriteresAppel;
    }
    interface IPhase {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE LONG TYPE DE PHASE
         */
        libelleLongTypePhase: string;
        /**
         * DUREE INITIALE PHASE CREDIT
         */
        dureeInitialePhaseCredit: number;
        /**
         * DUREE RESIDUELLE CREDIT
         */
        dureeResiduelleCredit: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * Taux nominal de la phase
         */
        tauxNominalPhase: number;
        /**
         * CODE TAUX DES PALIERS CALCULES
         */
        codeTauxDesPaliersCalcules: string;
        /**
         * TAUX MOYEN PHASE CREDIT
         */
        tauxMoyenPhaseCredit: number;
        /**
         * MODE DE CALCUL AMORTISSEMENT
         */
        modeCalculAmortissement: string;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAmortir: number;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement: string;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * DATE FIN DE PREFINANCEMENT INITIALE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementInitiale: string;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERInterets: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * MODE CAPIT. RECOUV. INTERETS
         */
        modeCapitRecouvInterets: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * NB DE JOURS DANS ANNEE DENOMINATEUR
         */
        nbJoursDansAnneeDenominateur: number;
        /**
         * NB DE JOURS DANS ANNEE NUMERATEUR
         */
        nbJoursDansAnneeNumerateur: number;
        /**
         * CALCUL INTERETS EN JOURS REELS
         */
        calculInteretsEnJoursReels: string;
        /**
         * Prélèvement en fin de phase
         */
        prelevementEnFinPhase: string;
        /**
         * CODE TYPE ECRETAGE
         */
        codeTypeEcretage: string;
        paliers: Array<IPalier>;
    }
    interface ICredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * MONTANT ECHEANCE
         */
        montantEcheance: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE ECHEANCE M.E.R.
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Taux nominal du crédit
         */
        tauxNominalCredit: number;
        /**
         * DATE M.E.R. ZERO
         * Type date au format yyyy-MM-dd
         */
        dateMiseRecouvrementZero: string;
        /**
         * CODE MODE EXPRESSION TAUX
         */
        codeModeExpressionTaux: string;
        /**
         * CODE TAUX DU CREDIT DIRECTEUR
         */
        codeTauxCreditDirecteur: string;
        /**
         * CODE CRISTALLISATION TAUX INTERET
         */
        codeCristallisationTauxInteret: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * MONTANT ECHEANCE M.E.R.
         */
        montantEcheanceMER: number;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * MONTANT ARRIERES INCORPORES AU CRD
         */
        montantArrieresIncorporesCrd: number;
        /**
         * CODE TRAITEMENT FIN DE VERSEMENT
         */
        codeTraitementFinVersement: string;
        /**
         * NUMERO QUANTIEME DATE ECHEANCE
         */
        numeroQuantiemeDateEcheance: number;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * Marge à appliquer sur taux nominal
         */
        margeAppliquerSurTauxNominal: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        montantCapitalRestantSurCredit: number;
        /**
         * CODE TYPE RECALCUL T.A.
         */
        codeTypeRecalculTA: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DATE FIN DE PREFINANCEMENT REELLE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementReelle: string;
        /**
         * CODE INTEGRATION FRAIS AU CRD
         */
        codeIntegrationFraisCrd: string;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO MODALITE DE RA
         */
        numeroModaliteRembAnticipe: number;
        /**
         * TAUX INDEMNITE R.A.
         */
        tauxIndemniteRA: number;
        /**
         * TAUX INTERET PREFINANCEMENT
         */
        tauxInteretPrefinancement: number;
        /**
         * Code crédit sécurisable
         */
        codeCreditSecurisable: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE presence de revision sur credit
         */
        codePresenceRevisionSurCredit: string;
        /**
         * MONTANT INT. COMP. SUR C.R.D.
         */
        montantIntcompsurCR: number;
        /**
         * CD TYPE ARRIERES INCORPORE AU CRD
         */
        cdTypeArrieresIncorporeCrd: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * Nb maxi période allong pour révision
         */
        nbMaxiPeriodeAllongPourRevision: number;
        /**
         * Nb maxi pér. all. sortie cpt courant
         */
        nbMaxiPerallsortieCptCourant: number;
        /**
         * Nb maxi pér. allong pour modulation
         */
        nbMaxiPerallongPourModulation: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        mtCapitalRestantSurCredit: number;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT GLOBAL GARANTI CREDIT
         */
        montantGlobalGarantiCredit: number;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * DATE D EFFET INITIALE DE l'AVENANT
         * Type date au format yyyy-MM-dd
         */
        dateEffetInitialeLAvenant: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEmission: string;
        /**
         * DUREE AJUSTEE CREDIT SUITE RECALCUL
         */
        dureeAjusteeCreditSuiteRecalcul: number;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * DATE EMISSION
         * Type date au format yyyy-MM-dd
         */
        dateEmission: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * DELAI MINIMUM D'ACCEPTATION
         */
        delaiMinimumAcceptation: number;
        /**
         * DELAI DE RETRACTATION
         */
        delaiRetractation: number;
        /**
         * COMMENTAIRE PRODUITS
         */
        commentaireProduits: string;
        /**
         * MONTANT M.A.D. DE FONDS DEMANDEES
         */
        montantMAfondsDemandees: number;
        /**
         * CODE ECHEANCIER VERSEM. CONTRACTUEL
         */
        codeEcheancierVersemcontractuel: string;
        /**
         * Code type de prêt combiné
         */
        codeTypePretCombine: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * Existence accessoire bon/maj taux
         */
        existenceAccessoireBonMajTaux: string;
        /**
         * Cumul des Bonifications/Majorations
         */
        cumulDesBonifsMajorations: number;
        /**
         * Code indicateur integration CRD
         */
        codeIndicateurIntegrationCrd: string;
        /**
         * TAUX INTERETS RETARD IMPAYE
         */
        tauxInteretsRetardImpaye: number;
        numeroPhase: number;
        codeTypePhase: string;
        dureeResteAFinancer: number;
        tauxInteretPalier: number;
        dureeResiduelleAjusteeCredit: number;
        numeroEcheance: number;
        montantImpayeRecouvrer: number;
        mtARecouvrerIndemnretardImpaye: number;
        mntMiseDispoFondsEffectuees: number;
        codeGelDette: string;
        montantGelCreance: number;
        numeroPeriodeRevision: number;
        mntInteretsOrdreMiseRecouvrmnt: number;
        amenagementEchsurPretCombine: string;
        amenagementEchexistantSurCredit: string;
        amenagechenCoursADateEffet: string;
        codeCalculInteretsReportes: string;
        montantProchaineEcheance: number;
        phases: Array<IPhase>;
    }
    interface IPalier {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO ECHEANCE
         */
        numeroEcheance: number;
        /**
         * CODE TYPE ELEMENT SAISI SUR CREDIT
         */
        codeTypeElementSaisiSurCredit: string;
        /**
         * MONTANT REMBOURSEMENT SAISI
         */
        montantRemboursementSaisi: number;
        /**
         * TAUX DE REMBOURSEMENT SAISI
         */
        tauxRemboursementSaisi: number;
        /**
         * MONTANT AMORTISSEMENT CREDIT SAISI
         */
        montantAmortissementCreditSaisi: number;
        /**
         * MONTANT ECHEANCE EN COURS
         */
        montantEcheanceEnCours: number;
        /**
         * Résultat de la calculette après ajustement
         */
        echeanceApresAjusteCalculette: number;
        /**
         * Donne la duree du palier
         */
        dureePalier: number;
        /**
         * Donne la premiere echeance du palier
         */
        numeroPremiereEcheancePalier: number;
        /**
         * Donne la derniere echeance du palier
         */
        numeroDerniereEcheancePalier: number;
    }
    interface ICriteresAppel {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        dateEffet: string;
        codeAvenantSimulation: string;
        codeRoleCreditAvenant: string;
        numeroRelatif: number;
        codeTypeAcces: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        creditIn: ICreditIn;
        /**
         * Donne le taux pour calculer les nouvelles échéances/durées. Le taux est le même pour toutes les phases.
         */
        nouveauTaux: number;
        /**
         * Détermine quel algorithme sera appliqué. 1 : modification échéances ; 2 : modification durée ; 3 : saisie libre ; 4 : modification échéance à durée résiduelle saisissable ; 5 : modification durée à échéance souhaitée
         */
        typeCalcul: number;
        /**
         * Taux renseigné dans le cas d'une assurance en crdIn avant modification.
         */
        tauxAssuranceAvant: number;
        /**
         * Pour le combinatoire taux/assurance. Taux renseigné dans le cas d'une assurance en crdIn après modification.
         */
        tauxAssuranceApres: number;
        /**
         * Crd actualisé contenant, si besoin, les frais. Paramétré côté IHM.
         */
        montantCrd: number;
        /**
         * Contient le numéro de la phase du crédit d'origine donné par dossierCreditGestion.informationCredit
         */
        numeroPhaseEnCoursCreditOrigine: number;
        /**
         * Contient le numéro de la première échéance du dernier palierTauxInteret de la dernière phase du crédit d'origine donné par dossierCreditGestion.informationCredit
         */
        numPremiereEchLastPalierPhaseO: number;
        /**
         * A renseigner dans le cas d'une baisse d'échéance avec nouvelle durée résiduelle (typeCalcul = 4)
         */
        dureeResiduelle: number;
        /**
         * A renseigner dans le cas d'une baisse de durée avec une nouvelle échéance saisie par le gestionnaire (typeCalcul = 5)
         */
        echeanceSaisie: number;
    }
    interface ICreditIn {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * MONTANT ECHEANCE
         */
        montantEcheance: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE ECHEANCE M.E.R.
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Taux nominal du crédit
         */
        tauxNominalCredit: number;
        /**
         * DATE M.E.R. ZERO
         * Type date au format yyyy-MM-dd
         */
        dateMiseRecouvrementZero: string;
        /**
         * CODE MODE EXPRESSION TAUX
         */
        codeModeExpressionTaux: string;
        /**
         * CODE TAUX DU CREDIT DIRECTEUR
         */
        codeTauxCreditDirecteur: string;
        /**
         * CODE CRISTALLISATION TAUX INTERET
         */
        codeCristallisationTauxInteret: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * MONTANT ECHEANCE M.E.R.
         */
        montantEcheanceMER: number;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * MONTANT ARRIERES INCORPORES AU CRD
         */
        montantArrieresIncorporesCrd: number;
        /**
         * CODE TRAITEMENT FIN DE VERSEMENT
         */
        codeTraitementFinVersement: string;
        /**
         * NUMERO QUANTIEME DATE ECHEANCE
         */
        numeroQuantiemeDateEcheance: number;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * Marge à appliquer sur taux nominal
         */
        margeAppliquerSurTauxNominal: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        montantCapitalRestantSurCredit: number;
        /**
         * CODE TYPE RECALCUL T.A.
         */
        codeTypeRecalculTA: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DATE FIN DE PREFINANCEMENT REELLE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementReelle: string;
        /**
         * CODE INTEGRATION FRAIS AU CRD
         */
        codeIntegrationFraisCrd: string;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO MODALITE DE RA
         */
        numeroModaliteRembAnticipe: number;
        /**
         * TAUX INDEMNITE R.A.
         */
        tauxIndemniteRA: number;
        /**
         * TAUX INTERET PREFINANCEMENT
         */
        tauxInteretPrefinancement: number;
        /**
         * Code crédit sécurisable
         */
        codeCreditSecurisable: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE presence de revision sur credit
         */
        codePresenceRevisionSurCredit: string;
        /**
         * MONTANT INT. COMP. SUR C.R.D.
         */
        montantIntcompsurCR: number;
        /**
         * CD TYPE ARRIERES INCORPORE AU CRD
         */
        cdTypeArrieresIncorporeCrd: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * Nb maxi période allong pour révision
         */
        nbMaxiPeriodeAllongPourRevision: number;
        /**
         * Nb maxi pér. all. sortie cpt courant
         */
        nbMaxiPerallsortieCptCourant: number;
        /**
         * Nb maxi pér. allong pour modulation
         */
        nbMaxiPerallongPourModulation: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        mtCapitalRestantSurCredit: number;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT GLOBAL GARANTI CREDIT
         */
        montantGlobalGarantiCredit: number;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * DATE D EFFET INITIALE DE l'AVENANT
         * Type date au format yyyy-MM-dd
         */
        dateEffetInitialeLAvenant: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEmission: string;
        /**
         * DUREE AJUSTEE CREDIT SUITE RECALCUL
         */
        dureeAjusteeCreditSuiteRecalcul: number;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * DATE EMISSION
         * Type date au format yyyy-MM-dd
         */
        dateEmission: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * DELAI MINIMUM D'ACCEPTATION
         */
        delaiMinimumAcceptation: number;
        /**
         * DELAI DE RETRACTATION
         */
        delaiRetractation: number;
        /**
         * COMMENTAIRE PRODUITS
         */
        commentaireProduits: string;
        /**
         * MONTANT M.A.D. DE FONDS DEMANDEES
         */
        montantMAfondsDemandees: number;
        /**
         * CODE ECHEANCIER VERSEM. CONTRACTUEL
         */
        codeEcheancierVersemcontractuel: string;
        /**
         * Code type de prêt combiné
         */
        codeTypePretCombine: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * Existence accessoire bon/maj taux
         */
        existenceAccessoireBonMajTaux: string;
        /**
         * Cumul des Bonifications/Majorations
         */
        cumulDesBonifsMajorations: number;
        /**
         * Code indicateur integration CRD
         */
        codeIndicateurIntegrationCrd: string;
        /**
         * TAUX INTERETS RETARD IMPAYE
         */
        tauxInteretsRetardImpaye: number;
        numeroPhase: number;
        codeTypePhase: string;
        dureeResteAFinancer: number;
        tauxInteretPalier: number;
        dureeResiduelleAjusteeCredit: number;
        numeroEcheance: number;
        montantImpayeRecouvrer: number;
        mtARecouvrerIndemnretardImpaye: number;
        mntMiseDispoFondsEffectuees: number;
        codeGelDette: string;
        montantGelCreance: number;
        numeroPeriodeRevision: number;
        mntInteretsOrdreMiseRecouvrmnt: number;
        amenagementEchsurPretCombine: string;
        amenagementEchexistantSurCredit: string;
        amenagechenCoursADateEffet: string;
        codeCalculInteretsReportes: string;
        montantProchaineEcheance: number;
        phaseIns: Array<IPhaseIn>;
    }
    interface IPhaseIn {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE LONG TYPE DE PHASE
         */
        libelleLongTypePhase: string;
        /**
         * DUREE INITIALE PHASE CREDIT
         */
        dureeInitialePhaseCredit: number;
        /**
         * DUREE RESIDUELLE CREDIT
         */
        dureeResiduelleCredit: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * Taux nominal de la phase
         */
        tauxNominalPhase: number;
        /**
         * CODE TAUX DES PALIERS CALCULES
         */
        codeTauxDesPaliersCalcules: string;
        /**
         * TAUX MOYEN PHASE CREDIT
         */
        tauxMoyenPhaseCredit: number;
        /**
         * MODE DE CALCUL AMORTISSEMENT
         */
        modeCalculAmortissement: string;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAmortir: number;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement: string;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * DATE FIN DE PREFINANCEMENT INITIALE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementInitiale: string;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERInterets: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * MODE CAPIT. RECOUV. INTERETS
         */
        modeCapitRecouvInterets: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * NB DE JOURS DANS ANNEE DENOMINATEUR
         */
        nbJoursDansAnneeDenominateur: number;
        /**
         * NB DE JOURS DANS ANNEE NUMERATEUR
         */
        nbJoursDansAnneeNumerateur: number;
        /**
         * CALCUL INTERETS EN JOURS REELS
         */
        calculInteretsEnJoursReels: string;
        /**
         * Prélèvement en fin de phase
         */
        prelevementEnFinPhase: string;
        /**
         * CODE TYPE ECRETAGE
         */
        codeTypeEcretage: string;
        palierTauxInterets: Array<IPalierTauxInteret>;
    }
    interface IPalierTauxInteret {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * TAUX INTERET PALIER
         */
        tauxInteretPalier: number;
        /**
         * TYPE DE REMBOURSEMENT
         */
        typeRemboursement: string;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF PALIER / PRODUIT
         */
        numeroRelatifPalierProduit: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances: number;
        /**
         * PERIODICITE APPLIC PROGRE ECHEANCE
         */
        periodiciteApplicProgreEcheance: string;
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditService.EligibiliteChangePdt {
    interface IEligibiliteChangePdt extends IElementGestion {
        renegociationProduit: IRenegociationProduit;
    }
    interface IRenegociationProduit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * LIBELLE 1ER PRODUIT DU PROFIL
         */
        libelle1erProduitProfil: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit1: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit1: string;
        /**
         * LIBELLE 2EM PRODUIT DU PROFIL
         */
        libelle2emProduitProfil: string;
        /**
         * LIBELLE LONG PROFIL RENEGOCIATION
         */
        libelleLongProfilRenegociation: string;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}
declare module myway.eligibilitechangepdt {
    interface IRenegociationProduit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * LIBELLE 1ER PRODUIT DU PROFIL
         */
        libelle1erProduitProfil: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit1: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit1: string;
        /**
         * LIBELLE 2EM PRODUIT DU PROFIL
         */
        libelle2emProduitProfil: string;
        /**
         * LIBELLE LONG PROFIL RENEGOCIATION
         */
        libelleLongProfilRenegociation: string;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditService.ImpressionDossier {
    interface IImpressionDossier {
        codeEtablissement: string;
        codeIndexes: Array<string>;
        codeStructure: string;
        existenceDossier: IExistenceDossier;
        ajoutDocumentEdite: IAjoutDocumentEdite;
        creationDossier: ICreationDossier;
    }
    interface IExistenceDossier {
        valeur: number;
        code: string;
        message: string;
        dossier: IDossier;
    }
    interface ICreationDossier {
        libelle: string;
        typeDossier: string;
        caracteristiques: Array<string>;
        validationAuto: string;
        dateCreation: string;
        agentCreateur: string;
        documentImprimes: Array<IDocumentImprime>;
    }
    interface IAjoutDocumentEdite {
        libelle: string;
        type: string;
        exemplaire: string;
        agent: string;
        contenu: string;
    }
    interface IDocumentImprime {
        type: string;
        libelle: string;
        exemplaire: string;
        creation: string;
        caracteristiques: Array<string>;
    }
    interface IDossier {
        etablissement: number;
        structure: string;
        indexes: Array<IIndexe>;
        libelle: string;
        typeDossier: number;
        caracteristiques: Array<ICaracteristique>;
        etat: number;
        dateCreation: string;
        agentCreateur: string;
        documents: Array<IDocument>;
    }
    interface IIndexe {
        value: number;
        cle: string;
    }
    interface ICaracteristique {
        value: string;
        cle: string;
    }
    interface IDocument {
        creation: string;
        etat: number;
        libelle: string;
        type: string;
        exemplaire: number;
        caracteristiquesDocument: Array<ICaracteristique>;
    }
}

declare module Avenants.Rest.Modeles.CreditParametre.ListerParamApplicatif {
    interface IAnyType {
    }
    interface IScCriteresAcces {
        /**
         * RubriquesFiltre
         */
        rubriquesFiltre: Array<string>;
        /**
         * ValeursFiltre
         */
        valeursFiltre: Array<IAnyType>;
        /**
         * RubriquesTri
         */
        rubriquesTri: Array<string>;
        /**
         * ValeurTri
         */
        valeurTri: string;
    }
    interface IScElement {
    }
    interface IScParamApplicatif extends IScElement {
        /**
         * Idfcej_IdntCaisEpar
         */
        idCaisseEpargne: number;
        /**
         * Idfast_IdntElmtStrcInstr
         */
        idElementStructureInstruction: string;
        /**
         * Cdfcpf_CodeParmApplf
         */
        codeParametreApplicatif: string;
        /**
         * Ddftva_DateDebuVald
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * Dfftva_DateFinVald
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * Lbftpa_LiblParm
         */
        libelleParametre: string;
        /**
         * Ctfcpa_CodeTypeParm
         */
        codeTypeParametre: string;
        /**
         * Mtftpa_MtParmMt
         */
        montantParametreMontant: number;
        /**
         * Npfcpp_DurDunParm
         */
        dureeDunParametre: number;
        /**
         * Dtftpa_DateParmDate
         * Type date au format yyyy-MM-dd
         */
        dateParametreDate: string;
        /**
         * Txftt1_TxParmTx
         */
        tauxParametreTaux: number;
        /**
         * Llficl_ValrParm
         */
        valeurParametre: string;
        /**
         * Cdfcnv_CodeVersNeo
         */
        codeVersementNEO: string;
        /**
         * Cdfcnl_CodeRelsNeo
         */
        codeReleaseNEO: string;
        /**
         * VersParm
         */
        versementParametre: number;
    }
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        criteresAccess: IScCriteresAcces;
        codeEtablissement: number;
    }
}

declare module Avenants.Rest.Modeles.CreditParametre.ListerTypeDeSinistreParConv {
    interface IScCriteresAcces {
        /**
         * RubriquesFiltre
         */
        rubriquesFiltre: Array<string>;
        /**
         * ValeursFiltre
         */
        valeursFiltre: Array<IAnyType>;
        /**
         * RubriquesTri
         */
        rubriquesTri: Array<string>;
        /**
         * ValeurTri
         */
        valeurTri: string;
    }
    interface IScElement {
    }
    interface IAnyType {
    }
    interface IScTypeDeSinistreParConvention extends IScElement {
        /**
         * Idfcej_IdntCaisEpar
         */
        idCaisseEpargne: number;
        /**
         * Idfcco_IdntConv
         */
        idConvention: string;
        /**
         * Ctfcst_CodeTypeSins
         */
        codeTypeSinistre: string;
    }
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        criteresAccess: IScCriteresAcces;
        codeEtablissement: number;
        identifiantConvention: string;
    }
}

declare module Avenants.Rest.Modeles.DocumentParametre.ContractualisationParametre {
    interface IPersonne {
        /**
         * Identifiant personne
         */
        numeroPersonne: string;
        /**
         * typologie des moyens de restitution dont dispose le client à des fins de restitution des documents signés
         */
        typeMoyenRestitution: string;
        /**
         * Identifiant coffre-fort numérique détenu par le client
         */
        identifiantCoffreFortNumerique: string;
        /**
         * Adresse E-MAIL personnelle du client
         */
        adresseEMail: string;
        /**
         * numéro de téléphone mobile du client permettant l'authentification forte par OTP/SMS
         */
        numeroTelephoneClient: string;
        /**
         * Indicateur authentification SOL-SMS possible ((Sécurisation des Opération en Ligne par SMS)
         */
        indicAuthentificationSolSms: boolean;
        /**
         * Indicateur authentification SOL-CAP possible (Sécurisation des Opération en Ligne par lecteur Carte A Puce)
         */
        indicAuthentificationSolCap: boolean;
        /**
         * Indicateur authentification Identité possible
         */
        indicAuthentificationIdentite: boolean;
    }
    interface IDocument {
        /**
         * Code technique impression
         */
        codeTechniqueImpression: string;
        /**
         * Code nature pièce justificative
         */
        codeNaturePieceJustificative: string;
        /**
         * Code type justificatif
         */
        codeTypeJustificatif: string;
        /**
         * Code Nature GED
         */
        codeNatureGed: string;
        /**
         * Code type ICG (Infrastructure de Confiance Groupe)
         */
        codeTypeIcg: string;
        /**
         * Indicateur Document obligatoire
         */
        indicateurDocumentObligatoire: boolean;
        /**
         * Indicateur document visualisable
         */
        indicateurDocumentVisualisable: boolean;
        /**
         * Indicateur document supprimable
         */
        indicateurDocumentSupprimable: boolean;
        /**
         * Code action document
         */
        codeActionDocument: string;
        /**
         * Indicateur document eligible ICG (Infrastructure de Confiance Groupe)
         */
        indicateurDocumentEligibleIcg: boolean;
        /**
         * Indicateur document sceller ICG (Infrastructure de Confiance Groupe)
         */
        indicateurDocumentScellerIcg: boolean;
        /**
         * Indicateur document archiver ICG (Infrastructure de Confiance Groupe)
         */
        indicateurDocumentArchiverIcg: boolean;
        /**
         * Indicateur document à injecter GED
         */
        indicateurDocumentAInjecterGed: boolean;
        /**
         * Indicateur document restituable
         */
        indicateurDocumentRestituable: boolean;
        /**
         * Ordre priorité utilisation
         */
        ordrePrioriteUtilisation: string;
        /**
         * Type document contractualisation
         */
        typeDocumentContractualisation: string;
        /**
         * Type attributaire classeur client
         */
        typeAttributaireClasseurClient: string;
        /**
         * Indicateur signature banque
         */
        indicateurSignatureBanque: boolean;
        listeZoneSignature: Array<IZoneSignature>;
        /**
         * code de la famille de l'acte de gestion
         */
        codeFamilleActe: string;
        /**
         * code objet de l'acte de gestion (P/S ou objet métier)
         */
        codeObjetActe: string;
        /**
         * Détermine le type de section de regroupement de documents
         * de même nature
         * Permet l'affichage des documents dans ICG (Infrastructure de Confiance Groupe)
         * Correspond à un onglet du dossier
         */
        codeTypeSectionRegroupement: string;
        /**
         * libellé de description de regroupement des documents lors de l'affichage dans ICG (Infrastructure de Confiance Groupe)
         */
        libelleSectionRegroupement: string;
        /**
         * indique si le document fait partie du référentiel des documents d'entreprise
         */
        indicateurDocumentEntreprise: boolean;
        /**
         * Nb maxi exemplaires doc / édition
         */
        nbMaxiExemplairesDocEdition: number;
        /**
         * Nb mini exemplaires doc / édition
         */
        nbMiniExemplairesDocEdition: number;
        /**
         * Nb exemplaires par défaut / édition
         */
        nbExemplairesParDefautEdition: number;
        /**
         * Libellé document contractualisation
         */
        libelleDocContractualisation: string;
        /**
         * indique si  la modification du nombre d'exemplaires des documents
         *  (Nb mini, Nb maxi et Nb par défaut) par l'utilisateur
         *  est possible.
         * Pour la signature électronique en agence              .
         */
        indicateurMAJNbExemplaires: boolean;
        /**
         * Code de l'acte de gestion
         */
        codeActeGestion: string;
        /**
         * intitulé du fichier du document d'entreprise. sert de référence dans l'ICG (Infrastructure de Confiance Groupe)
         */
        libelleFichierDocEntreprise: string;
        /**
         * libellé de description du document entreprise. Il sert à l'affichage lors de la contractualisation
         */
        libelleExterneDocEntreprise: string;
        /**
         * identifiant du document d'entreprise dans la GED Mysys
         */
        identifiantGEDDocEntreprise: string;
    }
    interface IZoneSignature {
        /**
         * Numéro bloc signature du document. Un document peut contenir plusieurs blocs
         */
        numeroBlocSignatureDocument: number;
        /**
         * Code type signataire. Typologie générique permettant d'associer une personne ou entité à un signataire
         */
        codeTypeSignataire: string;
        /**
         * Identifiant label signature. donnée permettant de reconnaitre la zone de signature dans un document
         */
        identifiantLabelSignature: string;
        /**
         * Numéro page document où se trouve la zone de signature
         */
        numeroPageDocument: number;
        /**
         * abscisse position de la zone de signature
         */
        abscissePositionSignature: number;
        /**
         * ordonnée position de la zone de signature
         */
        ordonneePositionSignature: number;
        /**
         * hauteur de la zone de signature
         */
        hauteurSignature: number;
        /**
         * largeur de la zone de signature
         */
        largeurSignature: number;
        /**
         * Libellé associé à la zone de signature
         */
        libelleTexteZoneSignature: string;
        /**
         * indique le sens de la hauteur (incrément ou décrément)
         */
        codeSensAbcisse: string;
        /**
         * indique le sens de l'ordonnée (incrément ou décrément)
         */
        codeSensOrdonnee: string;
    }
    interface IContractualisationParametre {
        /**
         * code acte de gestion
         */
        codeActeGestion: string;
        listeModeContractualisation: Array<IModeContractualisationActe>;
    }
    interface IModeContractualisationActe {
        /**
         * Code mode contractualisation décrit par le canal et la manière de contractualiser un acte de gestion
         * exemple : FAFE - Face A Face Electronique => acte réalisé en agence et signé électroniquement
         */
        codeModeContractualisation: string;
        /**
         * Libellé mode contractualisation
         */
        libelleModeContractualisation: string;
        /**
         * Code statut contractualisation
         */
        codeStatutContractualisation: string;
        /**
         * Code type signature. Décrit la façon dont la signature est faite (scripturale, double clic, ...)
         */
        codeTypeSignature: string;
        /**
         * niveau authentification requis
         * 0 - faible
         * 1 - fort
         */
        codeNiveauAuthentification: string;
        /**
         * Code du  matériel compatible avec le mode de contractualisation
         */
        codeMaterielCompatible: string;
        /**
         * Libellé du matériel compatible
         */
        libelleMaterielCompatible: string;
        listeDocuments: Array<IDocument>;
        /**
         * indique si le mode d'emploi de la contractualisation est affiché lors de la signature du client
         */
        indicateurModeEmploi: boolean;
        /**
         * Cet indicateur précise si l'authentification par  SOL-CAP est possible ou requise (Sécurisation des Opération en Ligne par lecture Carte A Puce)
         */
        indicateurAuthentficationCAP: boolean;
        /**
         * typologie référencée permettant de constituer le corps du message de confirmation envoyé au client après signature
         */
        codeTypeMailConfirmation: string;
        /**
         * code indiquant l'activation de la MSI
         */
        codeActivationMSI: string;
        /**
         * Détermine le type de demande de recherche en GED de la pièce justificative d'identité du client.
         */
        codeActionRecherchePJI: string;
        /**
         * Code indiquant si une restitution papier est possible pour un mode de contractualisation.
         */
        indicateurRestitutionPapier: boolean;
        /**
         * Détermine la demande d'émission d'un CRE fonctionnel  en fin d'acte de gestion.
         */
        indicateurEmissionCRE: string;
        /**
         * indique le mode de remise au client des Conditions Générales.
         */
        codeRemiseCG: string;
        listePersonne: Array<IPersonne>;
        /**
         * Indique si la consultation des documents est possible pendant la phase d'authentificaton
         */
        indicateurConsultationDocAuth: boolean;
        /**
         * Cet indicateur précise si l'authentification par justificatif d'identité est possible ou requise
         */
        indicateurAuthentificationPJI: boolean;
        /**
         * Indique si le tétéchargement des documents est possible pendant la phase de restitution
         */
        indicTelechargementRestitution: boolean;
        /**
         * code permettant l'inhibition de l'affichage de l'écran de choix de signature.
         */
        codeActionInhiberChoixSignature: string;
        /**
         * Cet indicateur précise si l'authentification par SOL-SMS est possible ou requise (Sécurisation des Opération en Ligne par SMS)
         */
        indicateurAuthentificationSMS: boolean;
        /**
         * Indicateur de sensibilité du montant
         */
        indicateurSensibiliteMontant: boolean;
        listeInfosContractualisation: Array<IInfosContractualisation>;
        /**
         * Indique si un récapitulatif des documents est présenté pendant la phase de signature
         */
        indicRecapitulatifPresentation: boolean;
        /**
         * Indique si la consultation des documents est possible après la signature
         */
        indicConsultationDocSignature: boolean;
        /**
         * Indique si la consultation des documents est possible pendant la phase de restitution
         */
        indicConsultationDocRestitution: boolean;
        /**
         * space : pas de règle existante
         *  O : existence règle bloquante
         *  N : existence règle non bloquante
         */
        codeRegleRecherchePJI: string;
        /**
         * code action collecte doc complément
         */
        codeRegleCollecteDocComplement: string;
    }
    interface IContractualisationParametreInput {
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: string;
        /**
         * Numéro  personne
         */
        numeroPersonne: string;
        /**
         * Indicateur présence tablette
         */
        indicateurPresenceTablette: boolean;
        /**
         * Indicateur présence lecteur carte
         */
        indicateurPresenceLecteurCarte: boolean;
        /**
         * Code canal dossier vente
         */
        codeCanal: string;
        /**
         * Code nature appel QR
         */
        codeNatureAppelQr: string;
        /**
         * Indicateur traitement impression
         */
        indicateurTraitementImpression: boolean;
        /**
         * Code matériel compatible
         */
        codeMaterielCompatible: Array<string>;
        /**
         * code de l'acte de gestion principal
         */
        codeActeGestionPrincipal: string;
        /**
         * Liste des codes acte de gestion secondaires
         */
        listeActeGestionSecondaire: Array<string>;
        listeSignataires: Array<ISignataire>;
        /**
         * Liste des montants des opérations (uniquement pour SAG-OPC)
         */
        listeMontantOperation: Array<IMontantOperation>;
    }
    interface ISignataire {
        /**
         * Identifiant personne
         */
        numeroPersonne: string;
        /**
         * Identifiant justificatif identité
         */
        identifiantJustificatifIdentite: string;
    }
    interface ISensibiliteOperation {
        /**
         * Code mode contractualisation
         */
        codeModeContractualisation: string;
        /**
         * Indicateur de sensibilité du montant
         */
        indicateurSensibiliteMontant: boolean;
    }
    interface IMontantOperation {
        /**
         * Code ISO devise
         */
        codeDevise: string;
        /**
         * Montant de l'opération ou du compte
         */
        montant: number;
    }
    interface IInfosContractualisation {
        /**
         * Identifiant personne
         */
        identifiantPersonne: string;
        /**
         * Libellé message erreur
         */
        libelleMessageErreur: string;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: string;
        /**
         * code statut contractualisation
         */
        codeStatutContractualisation: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.AccessoireAnnexe {
    interface IAccessoireAnnexe {
        accessoireAnnexe: Array<IAccessoire>;
    }
    interface IAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAcc: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcc: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcc1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcc2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcc3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcc4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numeroRegleApplicationAcc: string;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAcc: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAcc: string;
        /**
         * CODE RECOUV ACC. TERME ECHU A-ECHOIR
         */
        codeRecouvAcctermeEchuAEchoir: string;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireCalculTEG: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * MODE DE CALCUL DES TAUX
         */
        modeCalculDesTaux: string;
        /**
         * LIBELLE LONG ACCESSOIRE COMPL.
         */
        libelleLongAccessoireCompl: string;
        /**
         * LIBELLE COURT ACCESSOIRE COMPL.
         */
        libelleCourtAccessoireCompl: string;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * Code appel/reversement tiers
         */
        codeAppelReversementTiers: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueAssu {
    interface IParametreApplicatif {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENT ELEMENT STRUCTURE INSTRUCTEUR
         */
        idElementStructureInstructeur: string;
        /**
         * Code paramètre applicatif
         */
        codeParametreApplicatif: string;
        /**
         * DATE DEBUT VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE DU PARAMETRE
         */
        libelleParametre: string;
        /**
         * CODE TYPE DE PARAMETRE
         */
        codeTypeParametre: string;
        /**
         * MONTANT (PARAMETRE MONTANT)
         */
        montant: number;
        /**
         * Durée d'un paramètre
         */
        dureeUnParametre: number;
        /**
         * DATE (PARAMETRE DATE)
         * Type date au format yyyy-MM-dd
         */
        date: string;
        /**
         * TAUX (PARAMETRE TAUX)
         */
        taux: number;
        /**
         * VALEUR PARAMETRE
         */
        valeurParametre: string;
        /**
         * CODE VERSION NEO
         */
        codeVersionNeo: string;
        /**
         * CODE RELEASE NEO
         */
        codeReleaseNeo: string;
    }
    interface IConventionAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE ASSURANCE
         */
        codeTypeAssurance: string;
        /**
         * LIBELLE COURT TYPE ASSURANCE
         */
        libelleCourtTypeAssurance: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * MT MINIMUM CREDIT / CONVENTION
         */
        mtMinimumCreditParConvention: number;
        /**
         * MT MAXIMUM CREDIT / CONVENTION
         */
        mtMaximumCreditParConvention: number;
        /**
         * UNITE PERIODE CONDIT OBTENTION CONV.
         */
        unitePeriodeConditObtentionConv: string;
        /**
         * DUREE MINI CREDIT / OBTENTION CONV.
         */
        dureeMiniCreditParObtentionConv: number;
        /**
         * DUREE MAXI CREDIT / OBTENTION CONV
         */
        dureeMaxiCreditParObtentionConv: number;
        /**
         * CD MODE EXPRESSION GARANTIE ACCORDEE
         */
        cdModeExpressGarantieAccordee: string;
        /**
         * QUOTITE MINIMUM PAR BENEFICIAIRE
         */
        quotiteMinimumParBeneficiaire: number;
        /**
         * QUOTITE MAXIMUM PAR BENEFICIAIRE
         */
        quotiteMaximumParBeneficiaire: number;
        /**
         * PAS DE QUOTITE PAR BENEFICIAIRE
         */
        pasQuotiteParBeneficiaire: number;
        /**
         * MONTANT MINIMUM GARANTI PAR TETE
         */
        montantMinimumGarantiParTete: number;
        /**
         * MONTANT MAXIMUM GARANTI PAR TETE
         */
        montantMaximumGarantiParTete: number;
        /**
         * PAS DE MONTANT GARANTI PAR TETE
         */
        pasMontantGarantiParTete: number;
        /**
         * CODE TIERS GARANTI
         */
        codeTiersGaranti: string;
        /**
         * CODE TYPE OBJET AUTORISE
         */
        codeTypeObjetAutorise: string;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM COUVERTURE ASSURANCE
         */
        ageMaximumCouvertureAssurance: number;
        /**
         * CD POSSIBILITE EXTENSION COUVERTURE
         */
        cdPossibExtensionCouverture: string;
        /**
         * MONTANT MAXIMUM ENCOURS GARANTI
         */
        montantMaximumEncoursGaranti: number;
        /**
         * DUREE MAXI PREFI POUR CONVENTION
         */
        dureeMaxiPrefiPourConvention: number;
        /**
         * DUREE MAXI DIF TOTAL POUR CONVENTION
         */
        dureeMaxiDifTotalPourConvention: number;
        /**
         * DUREE MAXI DIF AMORT POUR CONVENTION
         */
        dureeMaxiDifAmortPourConvention: number;
        /**
         * DUREE MAXI AMORTISS. POUR CONVENTION
         */
        dureeMaxiAmortisspourConvention: number;
        /**
         * MONTANT PLAFOND ENCOURS DELEGATION
         */
        montantPlafondEncoursDelegation: number;
        /**
         * REGLE DATE EFFET ASSUR. - GARANTIE
         */
        regleDateEffetAssurgarantie: string;
        /**
         * AGE MAXIMUM COUVERTURE EN EXTENSION
         */
        ageMaximumCouvertureEnExtension: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE DE RESTITUTION
         */
        codeRestitution: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireParConvention: string;
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
        accessoires: Array<IAccessoireParConvention>;
        derogations: Array<IDerogation>;
    }
    interface IPersonneAssurableOuGarant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
    }
    interface IPersonneAssuree {
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * CATEGORIE SOCIO-PROFESSIONNELLE
         */
        categorieSocioProfessionnelle: string;
        /**
         * Code Critères résidence
         */
        codeCriteresResidence: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
    }
    interface IAccessoireParConvention {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePrdt: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * TAUX ACCESSOIRE PERSONNES AGEES
         */
        tauxAccessoirePersonnesAgees: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccess: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numRegleApplicationAccessoire: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * DUREE APPLICATION ACCESS.
         */
        dureeApplicationAccess: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IElementCalculAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePrdt: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MT ASSIETTE ACESSOIRE FIXEE CONTRACT
         */
        mtAssietteAccessFixeeContract: number;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireParConvention: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IMotifReserveOuExclusion {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveExclusionAssurance: string;
        /**
         * LIBELLE RESERVES OU EXCLUSIONS
         */
        libelleReservesExclusions: string;
    }
    interface IAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveExclusionAssurance: string;
        /**
         * CODE COUVERTURE TYPE EXTENSION
         */
        codeCouvertureTypeExtension: string;
        /**
         * CODE DELEGATION ASSURANCE
         */
        codeDelegationAssurance: string;
        /**
         * DATE PRISE EFFET ASSURANCE
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetAssurance: string;
        /**
         * DATE FIN EFFET ASSURANCE
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetAssurance: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MT ECHEANCE COUVERT PAR ASSURANCE
         */
        montantEcheanceCouvertAssurance: number;
        /**
         * BENEFICIAIRE ASSURANCE AVANT VERSEM.
         */
        beneficiaireAssuAvantVersement: string;
        /**
         * NUMERO DU DOSSIER CHEZ L ASSUREUR
         */
        numeroDossierChezLAssureur: string;
        /**
         * Code type de risque
         */
        codeTypeRisque: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * Code anciennete assurance / garantie
         */
        codeAncienneteAssuParGarantie: string;
        /**
         * NUMERO SIREN
         */
        numeroSiren: number;
        /**
         * LIBELLE ASSURANCE EXTERNE
         */
        libelleAssuranceExterne: string;
        /**
         * LIBELLE INTERVENANT
         */
        libelleIntervenant: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * CODE ASSURANCE OBLIGATOIRE
         */
        codeAssuranceObligatoire: string;
        /**
         * Code Type Agrément Assurance externe
         */
        codeTypeAgrementAssuExterne: string;
        /**
         * code motif résiliation
         */
        codeMotifResiliation: string;
        /**
         * QUOTITE ACCESSOIRE INCLUS TEG
         */
        quotiteAccessoireInclusTeg: number;
        /**
         * QUOTITE ACCESS NON INCLUS TEG
         */
        quotiteAccessNonInclusTeg: number;
        personneAssuree: IPersonneAssuree;
        convention: IConventionAssurance;
        elementsCalculAccessoire: Array<IElementCalculAccessoire>;
        /**
         * Indique la grille tarifaire appliquée par l'assureur
         */
        codeGrilleTarifaire: string;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IDerogation {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * NUMERO derogation
         */
        numeroDerogation: number;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * MONTANT MINIMUM CREDIT
         */
        montantMinimumCredit: number;
        /**
         * MONTANT MAXIMUM CREDIT
         */
        montantMaximumCredit: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * CODE PERSONNALISATION A INSTRUCTION
         */
        codePersonnalisationInstruction: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccess: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX DE BASE AGGRAVE CONVENTION
         */
        tauxBaseAggraveConvention: number;
        /**
         * TAUX DE BASE CONVENTION
         */
        tauxBaseConvention: number;
        /**
         * TAUX DE BASE EN DECES CONVENTION
         */
        tauxBaseEnDecesConvention: number;
        /**
         * TAUX BASE EN INCAPACITE CONVENTION
         */
        tauxBaseEnIncapaciteConvention: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
    }
    interface ICaracteristiqueAssu {
        assurances: Array<IAssurance>;
        parametresApplicatifs: Array<IParametreApplicatif>;
        retourQR: Array<IRetourQR>;
        compteurMiseJour: number;
        motifsReserveOuExclusion: Array<IMotifReserveOuExclusion>;
        criteresRecherche: ICriteresRecherche;
    }
    interface ICriteresRecherche {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        identifiantEmprunteur: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: boolean;
        /**
         * CODE type d'appel
         */
        codeTypeAppel: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        dateTraitement: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan {
    interface IPretCombine {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * MT part amortissable du capital
         */
        montantPartAmortissableCapital: number;
        /**
         * Montant de la part in fine
         */
        montantPartInfine: number;
        /**
         * Mode de répartition du capital
         */
        modeRepartitionCapital: string;
        /**
         * Code ajout intér. cap sur part amort
         */
        codeAjoutIntercapSurPartAmort: string;
        /**
         * montant de la quotité d'amortissemen
         */
        montantQuotiteAmortissement: number;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAAmortir: number;
        /**
         * Amort. supplémentaire fin phase
         */
        amortissementSuppFinPhase: number;
    }
    interface ICredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * MONTANT ECHEANCE
         */
        montantEcheance: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE ECHEANCE M.E.R.
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Taux nominal du crédit
         */
        tauxNominalCredit: number;
        /**
         * DATE M.E.R. ZERO
         * Type date au format yyyy-MM-dd
         */
        dateMiseRecouvrementZero: string;
        /**
         * CODE MODE EXPRESSION TAUX
         */
        codeModeExpressionTaux: string;
        /**
         * CODE TAUX DU CREDIT DIRECTEUR
         */
        codeTauxCreditDirecteur: string;
        /**
         * CODE CRISTALLISATION TAUX INTERET
         */
        codeCristallisationTauxInteret: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * MONTANT ECHEANCE M.E.R.
         */
        montantEcheanceMER: number;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * MONTANT ARRIERES INCORPORES AU CRD
         */
        montantArrieresIncorporesCrd: number;
        /**
         * CODE TRAITEMENT FIN DE VERSEMENT
         */
        codeTraitementFinVersement: string;
        /**
         * NUMERO QUANTIEME DATE ECHEANCE
         */
        numeroQuantiemeDateEcheance: number;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * Marge à appliquer sur taux nominal
         */
        margeAppliquerSurTauxNominal: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        montantCapitalRestantSurCredit: number;
        /**
         * CODE TYPE RECALCUL T.A.
         */
        codeTypeRecalculTA: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DATE FIN DE PREFINANCEMENT REELLE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementReelle: string;
        /**
         * CODE INTEGRATION FRAIS AU CRD
         */
        codeIntegrationFraisCrd: string;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO MODALITE DE RA
         */
        numeroModaliteRembAnticipe: number;
        /**
         * TAUX INDEMNITE R.A.
         */
        tauxIndemniteRA: number;
        /**
         * TAUX INTERET PREFINANCEMENT
         */
        tauxInteretPrefinancement: number;
        /**
         * Code crédit sécurisable
         */
        codeCreditSecurisable: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE presence de revision sur credit
         */
        codePresenceRevisionSurCredit: string;
        /**
         * MONTANT INT. COMP. SUR C.R.D.
         */
        montantIntcompsurCR: number;
        /**
         * CD TYPE ARRIERES INCORPORE AU CRD
         */
        cdTypeArrieresIncorporeCrd: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * Nb maxi période allong pour révision
         */
        nbMaxiPeriodeAllongPourRevision: number;
        /**
         * Nb maxi pér. all. sortie cpt courant
         */
        nbMaxiPerallsortieCptCourant: number;
        /**
         * Nb maxi pér. allong pour modulation
         */
        nbMaxiPerallongPourModulation: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        mtCapitalRestantSurCredit: number;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT GLOBAL GARANTI CREDIT
         */
        montantGlobalGarantiCredit: number;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * DATE D EFFET INITIALE DE l'AVENANT
         * Type date au format yyyy-MM-dd
         */
        dateEffetInitialeLAvenant: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEmission: string;
        /**
         * DUREE AJUSTEE CREDIT SUITE RECALCUL
         */
        dureeAjusteeCreditSuiteRecalcul: number;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * DATE EMISSION
         * Type date au format yyyy-MM-dd
         */
        dateEmission: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * DELAI MINIMUM D'ACCEPTATION
         */
        delaiMinimumAcceptation: number;
        /**
         * DELAI DE RETRACTATION
         */
        delaiRetractation: number;
        /**
         * COMMENTAIRE PRODUITS
         */
        commentaireProduits: string;
        /**
         * MONTANT M.A.D. DE FONDS DEMANDEES
         */
        montantMAfondsDemandees: number;
        /**
         * CODE ECHEANCIER VERSEM. CONTRACTUEL
         */
        codeEcheancierVersemcontractuel: string;
        /**
         * Code type de prêt combiné
         */
        codeTypePretCombine: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * Existence accessoire bon/maj taux
         */
        existenceAccessoireBonMajTaux: string;
        /**
         * Cumul des Bonifications/Majorations
         */
        cumulDesBonifsMajorations: number;
        /**
         * Code indicateur integration CRD
         */
        codeIndicateurIntegrationCrd: string;
        /**
         * TAUX INTERETS RETARD IMPAYE
         */
        tauxInteretsRetardImpaye: number;
        phases: Array<IPhase>;
        echeancesReportees: Array<IEcheanceReportee>;
        echeancesAmenagees: Array<IEcheanceAmenagee>;
        assurances: Array<IAssurance>;
        garantiesExistantes: Array<IGarantieExistante>;
        garantiesSuretesReelles: Array<IGarantieSureteReelle>;
        accessoires: Array<IAccessoire>;
        garantie: IGarantie;
        phasesBis: Array<IPhase>;
        garantiesSuretesPerso: Array<IGarantieSuretePerso>;
        informationsMenage: Array<IInformationMenage>;
        informationsEmprunteur: IInformationEmprunteur;
        personnePayeurs: Array<IPersonnePayeur>;
        accessoiresBis: Array<IAccessoire>;
        garantiesApplicables: Array<IGarantieApplicable>;
        motifsEstimations: Array<IMotifEstimation>;
        servicesObjet: Array<IServiceObjet>;
        accessoiresServicesObjet: Array<IAccessoireServiceObjet>;
    }
    interface IPhase {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE LONG TYPE DE PHASE
         */
        libelleLongTypePhase: string;
        /**
         * DUREE INITIALE PHASE CREDIT
         */
        dureeInitialePhaseCredit: number;
        /**
         * DUREE RESIDUELLE CREDIT
         */
        dureeResiduelleCredit: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * Taux nominal de la phase
         */
        tauxNominalPhase: number;
        /**
         * CODE TAUX DES PALIERS CALCULES
         */
        codeTauxDesPaliersCalcules: string;
        /**
         * TAUX MOYEN PHASE CREDIT
         */
        tauxMoyenPhaseCredit: number;
        /**
         * MODE DE CALCUL AMORTISSEMENT
         */
        modeCalculAmortissement: string;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAmortir: number;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement: string;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * DATE FIN DE PREFINANCEMENT INITIALE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementInitiale: string;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERInterets: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * MODE CAPIT. RECOUV. INTERETS
         */
        modeCapitRecouvInterets: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * NB DE JOURS DANS ANNEE DENOMINATEUR
         */
        nbJoursDansAnneeDenominateur: number;
        /**
         * NB DE JOURS DANS ANNEE NUMERATEUR
         */
        nbJoursDansAnneeNumerateur: number;
        /**
         * CALCUL INTERETS EN JOURS REELS
         */
        calculInteretsEnJoursReels: string;
        /**
         * Prélèvement en fin de phase
         */
        prelevementEnFinPhase: string;
        /**
         * CODE TYPE ECRETAGE
         */
        codeTypeEcretage: string;
        /**
         * DUREE AJUSTEE PHASE CREDIT
         */
        dureeAjusteePhaseCredit: number;
        paliers: Array<IPalier>;
        paliersTauxAmortissement: Array<IPalierTauxAmortissement>;
        pretsCombines: Array<IPretCombine>;
        parametresRevisionTaux: Array<IParametreRevisionTaux>;
        echeancesALaCarte: Array<IEcheanceALaCarte>;
    }
    interface IParametreRevisionTaux {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision: number;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision1: number;
        /**
         * MODE EXPRESSION BUTOIR TAUX BAISSE
         */
        modeExpressionButoirTauxBaisse: string;
        /**
         * MODE EXPRESSION BUTOIR TAUX HAUSSE
         */
        modeExpressionButoirTauxHausse: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * Numéro de période de révision
         */
        numeroPeriodeRevision: number;
        /**
         * IDENTIFIANT LOI DE REVISION
         */
        identifiantLoiRevision: string;
        /**
         * CD ECHEANCE RECALCULEE PAR REVISION
         */
        codeEcheanceRecalculeeRevision: string;
        /**
         * Nombre échéance avant recalcul mont.
         */
        nbEcheanceAvantRecalculMontant: number;
        /**
         * Evènement déclencheur début période
         */
        evntDeclencheurDebutPeriode: string;
        /**
         * CD unité période début de révision
         */
        codeUnitePeriodeDebutRevision: string;
        /**
         * Nb pér. pour dét. début de période
         */
        nbPeriodePourDeterDebutPeriode: number;
        /**
         * Durée de la période de révision
         */
        dureePeriodeRevision: number;
        /**
         * Unité de durée de la période de rév.
         */
        uniteDureePeriodeRevision: string;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * Elément modifiable par avenant
         */
        elementModifiableParAvenant: string;
        /**
         * MODE EXPRESSION VALEUR UTILIS INDICE
         */
        modeExpressValeurUtilisIndice: string;
        /**
         * CD TYPE DE ROLE INDICE
         */
        codeTypeRoleIndice: string;
    }
    interface IPalier {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * TAUX INTERET PALIER
         */
        tauxInteretPalier: number;
        /**
         * TYPE DE REMBOURSEMENT
         */
        typeRemboursement: string;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF PALIER / PRODUIT
         */
        numeroRelatifPalierProduit: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances: number;
        /**
         * PERIODICITE APPLIC PROGRE ECHEANCE
         */
        periodiciteApplicProgreEcheance: string;
    }
    interface IPalierTauxAmortissement {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement: number;
        /**
         * CD INDEXATION TAUX PROGRESSION AMORT
         */
        cdIndexationTauxProgressAmort: string;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
    }
    interface IEcheanceReportee {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE DE DEBUT DE CHOMAGE
         * Type date au format yyyy-MM-dd
         */
        dateDebutChomage: string;
        /**
         * NUMERO DU PLAN DE SECURISATION
         */
        numeroPlanSecurisation: number;
        /**
         * NUMERO DE LA PERIODE DE FRACTIONNEME
         */
        numeroPeriodeFractionneme: number;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nombreEcheancesAccessReport: number;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
    }
    interface IEcheanceAmenagee {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE TYPE ACTION
         */
        codeTypeAction: string;
        /**
         * NOMBRE ECHEANCES REPORTEES
         */
        nombreEcheancesReportees: number;
        /**
         * Code type échéance aménagée
         */
        codeTypeEcheanceAmenagee: string;
        /**
         * Code type calcul intérêts
         */
        codeTypeCalculInterets: string;
        /**
         * nouvelle duree residuelle
         */
        nouvelleDureeResiduelle: number;
        /**
         * MONTANT REMBOURSEMENT SAISI
         */
        montantRemboursementSaisi: number;
    }
    interface IAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numeroRegleApplicationAccess: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire1: string;
        /**
         * NUMERO REGLE DE CALCUL ELEMENT
         */
        numeroRegleCalculElement: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessCalculTxEffectifGlob: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * Indicateur Accessoire Obligatoire
         */
        indicateurAccessoireObligatoire: string;
        /**
         * Indicateur Accessoire Validé
         */
        indicateurAccessoireValide: string;
        /**
         * Indicateur Accessoire Annulé AV
         */
        indicateurAccessoireAnnuleAv: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nombreEcheancesAccessReport: number;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire1: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire2: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire3: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire4: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * LIBELLE TYPE ASSIETE DE CALCUL
         */
        libelleTypeAssieteCalcul: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAccess: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * REGLE DATE DEBUT APPLI ACC catalogue
         */
        regleDateDebutAppliAccCatalogue: string;
        /**
         * REGLE EVENEMENT DECH. 1ER APPEL cata
         */
        regleEvenementDech1erAppelCata: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvrAccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * Code indicateur bornes dérogées
         */
        codeIndicateurBornesDerogees: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IMotifReserveOuExclusion {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveExclusionAssurance: string;
        /**
         * LIBELLE RESERVES OU EXCLUSIONS
         */
        libelleReservesExclusions: string;
    }
    interface IPersonneAssurableOuGarant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
    }
    interface IPersonneAssuree {
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * CATEGORIE SOCIO-PROFESSIONNELLE
         */
        categorieSocioProfessionnelle: string;
        /**
         * Code Critères résidence
         */
        codeCriteresResidence: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
    }
    interface IAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveExclusionAssurance: string;
        /**
         * CODE COUVERTURE TYPE EXTENSION
         */
        codeCouvertureTypeExtension: string;
        /**
         * CODE DELEGATION ASSURANCE
         */
        codeDelegationAssurance: string;
        /**
         * DATE PRISE EFFET ASSURANCE
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetAssurance: string;
        /**
         * DATE FIN EFFET ASSURANCE
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetAssurance: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MT ECHEANCE COUVERT PAR ASSURANCE
         */
        montantEcheanceCouvertAssurance: number;
        /**
         * BENEFICIAIRE ASSURANCE AVANT VERSEM.
         */
        beneficiaireAssuAvantVersem: string;
        /**
         * NUMERO DU DOSSIER CHEZ L ASSUREUR
         */
        numeroDossierChezLAssureur: string;
        /**
         * Code type de risque
         */
        codeTypeRisque: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * Code anciennete assurance / garantie
         */
        codeAncienneteAssuranceGarantie: string;
        /**
         * NUMERO SIREN
         */
        numeroSiren: number;
        /**
         * LIBELLE ASSURANCE EXTERNE
         */
        libelleAssuranceExterne: string;
        /**
         * LIBELLE INTERVENANT
         */
        libelleIntervenant: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * CODE ASSURANCE OBLIGATOIRE
         */
        codeAssuranceObligatoire: string;
        /**
         * Code Type Agrément Assurance externe
         */
        codeTypeAgrementAssuExterne: string;
        /**
         * code motif résiliation
         */
        codeMotifResiliation: string;
        /**
         * QUOTITE ACCESSOIRE INCLUS TEG
         */
        quotiteAccessoireInclusTeg: number;
        /**
         * QUOTITE ACCESS NON INCLUS TEG
         */
        quotiteAccessNonInclusTeg: number;
        /**
         * Indique le type de tarification appliqué pour l'assurance
         */
        numRegleTarificationAssurance: string;
        /**
         * Indique la grille tarifaire appliquée par l'assureur
         */
        codeGrilleTarifaire: string;
        /**
         * Montant cumulé de l'assurance, valorisé dans le cas d'une assurance externe
         */
        montantTotalAssuranceExterne: number;
        /**
         * Montant cumulé de l'assurance sur les 8 premières années, valorisé dans le cas d'une assurance externe
         */
        montant8AnsAssuranceExterne: number;
        personneAssuree: IPersonneAssuree;
        elementsCalculAccessoires: Array<IElementCalculAccessoire>;
        conventionAssurance: IConventionAssurance;
        accessoires: Array<IAccessoire>;
        composantes: Array<IComposanteAssurance>;
    }
    interface IElementCalculAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MT ASSIETTE ACESSOIRE FIXEE CONTRACT
         */
        mtAssietteAcessFixeeContract: number;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IConventionAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE ASSURANCE
         */
        codeTypeAssurance: string;
        /**
         * LIBELLE COURT TYPE ASSURANCE
         */
        libelleCourtTypeAssurance: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * MT MINIMUM CREDIT / CONVENTION
         */
        mtMinimumCreditConvention: number;
        /**
         * MT MAXIMUM CREDIT / CONVENTION
         */
        mtMaximumCreditConvention: number;
        /**
         * UNITE PERIODE CONDIT OBTENTION CONV.
         */
        unitePeriodeConditObtentionConv: string;
        /**
         * DUREE MINI CREDIT / OBTENTION CONV.
         */
        dureeMiniCreditObtentionConv: number;
        /**
         * DUREE MAXI CREDIT / OBTENTION CONV
         */
        dureeMaxiCreditObtentionConv: number;
        /**
         * CD MODE EXPRESSION GARANTIE ACCORDEE
         */
        cdModeExpressionGaranAccordee: string;
        /**
         * QUOTITE MINIMUM PAR BENEFICIAIRE
         */
        quotiteMinimumParBeneficiaire: number;
        /**
         * QUOTITE MAXIMUM PAR BENEFICIAIRE
         */
        quotiteMaximumParBeneficiaire: number;
        /**
         * PAS DE QUOTITE PAR BENEFICIAIRE
         */
        pasQuotiteParBeneficiaire: number;
        /**
         * MONTANT MINIMUM GARANTI PAR TETE
         */
        montantMinimumGarantiParTete: number;
        /**
         * MONTANT MAXIMUM GARANTI PAR TETE
         */
        montantMaximumGarantiParTete: number;
        /**
         * PAS DE MONTANT GARANTI PAR TETE
         */
        pasMontantGarantiParTete: number;
        /**
         * CODE TIERS GARANTI
         */
        codeTiersGaranti: string;
        /**
         * CODE TYPE OBJET AUTORISE
         */
        codeTypeObjetAutorise: string;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM COUVERTURE ASSURANCE
         */
        ageMaximumCouvertureAssurance: number;
        /**
         * CD POSSIBILITE EXTENSION COUVERTURE
         */
        cdPossibiliteExtensionCouv: string;
        /**
         * MONTANT MAXIMUM ENCOURS GARANTI
         */
        montantMaximumEncoursGaranti: number;
        /**
         * DUREE MAXI PREFI POUR CONVENTION
         */
        dureeMaxiPrefiPourConvention: number;
        /**
         * DUREE MAXI DIF TOTAL POUR CONVENTION
         */
        dureeMaxiDifTotalPourConvention: number;
        /**
         * DUREE MAXI DIF AMORT POUR CONVENTION
         */
        dureeMaxiDifAmortPourConvention: number;
        /**
         * DUREE MAXI AMORTISS. POUR CONVENTION
         */
        dureeMaxiAmortisspourConvention: number;
        /**
         * MONTANT PLAFOND ENCOURS DELEGATION
         */
        montantPlafondEncoursDelegation: number;
        /**
         * REGLE DATE EFFET ASSUR. - GARANTIE
         */
        regleDateEffetAssurgarantie: string;
        /**
         * AGE MAXIMUM COUVERTURE EN EXTENSION
         */
        ageMaximumCouvertureEnExtension: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE DE RESTITUTION
         */
        codeRestitution: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
        accessoiresParConventions: Array<IAccessoireParConvention>;
        derogations: Array<IDerogation>;
        compagniesAssurance: Array<ICompagnieAssurance>;
    }
    interface IAccessoireParConvention {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * TAUX ACCESSOIRE PERSONNES AGEES
         */
        tauxAccessoirePersonnesAgees: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccess: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numeroRegleApplicationAccess: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * DUREE APPLICATION ACCESS.
         */
        dureeApplicationAccess: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IDerogation {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * NUMERO derogation
         */
        numeroDerogation: number;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * MONTANT MINIMUM CREDIT
         */
        montantMinimumCredit: number;
        /**
         * MONTANT MAXIMUM CREDIT
         */
        montantMaximumCredit: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * CODE PERSONNALISATION A INSTRUCTION
         */
        codePersoAInstruction: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccess: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX DE BASE AGGRAVE CONVENTION
         */
        tauxBaseAggraveConvention: number;
        /**
         * TAUX DE BASE CONVENTION
         */
        tauxBaseConvention: number;
        /**
         * TAUX DE BASE EN DECES CONVENTION
         */
        tauxBaseEnDecesConvention: number;
        /**
         * TAUX BASE EN INCAPACITE CONVENTION
         */
        tauxBaseEnIncapaciteConvention: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
    }
    interface ICompagnieAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE COURT CONVENTION.
         */
        libelleCourtConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * code indique convention commerciale
         */
        codeIndiqueConvCommerciale: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
    }
    interface ICreditBis {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit1: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * CODE MODIFICATION AUTORISEE
         */
        codeModificationAutorisee: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * DATE D'EFFET DU CONTRAT
         * Type date au format yyyy-MM-dd
         */
        dateEffetContrat: string;
    }
    interface IDossier {
        /**
         * Code Destination Opération Objet
         */
        codeDestinationOperationObjet: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * Existence Garantie Hypothécaire
         */
        existenceGarantieHypothecaire: string;
    }
    interface ICreditTer {
        /**
         * CODE PRET IN FINE
         */
        codePretInFine: string;
        /**
         * Code Indicateur Taux Révisable
         */
        codeIndicateurTauxRevisable: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE CREDIT RELAIS
         */
        codeCreditRelais: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * NOMBRE DE PHASES D'UN CREDIT
         */
        nombrePhasesUnCredit: number;
        /**
         * Durée de préfinancement (en mois)
         */
        dureePrefinancementEnMois: number;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * Nb pér maxi allonge crédit sortie cc
         */
        nbPerMaxiAllongeCreditSortieCc: number;
        /**
         * Nb pér maxi allonge crédit révi taux
         */
        nbPerMaxiAllongeCreditReviTaux: number;
        /**
         * Nb pér maxi allonge crédit ex modula
         */
        nbPerMaxiAllongeCreditExModula: number;
        /**
         * indicateur periode compte
         */
        indicateurPeriodeCompte: string;
        /**
         * indicateur de compte
         */
        indicateurCompte: string;
    }
    interface IConventionApplicable {
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE AVENANT FINANCIER
         */
        codeAvenantFinancier: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        identifiantEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
    }
    interface IConventionApplicableEmprunteur {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
    }
    interface IConventionApplicableObjet {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
    }
    interface IEncoursPersonneConvention {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * MONTANT MAXIMUM ENCOURS GARANTI
         */
        montantMaximumEncoursGaranti: number;
    }
    interface IGarantieExistante {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * ACTE AUTHENTIQUE SUR GARANTIE
         */
        acteAuthentiqueSurGarantie: string;
        /**
         * REDACTEUR DE L'ACTE
         */
        redacteurActe: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * IDENTIFIANT GARANT
         */
        identifiantGarant: string;
        /**
         * CAPITAL COUVERT / GARANTIE
         */
        capitalCouvertGarantie: number;
        /**
         * POURCENTAGE DU CREDIT COUVERT
         */
        pourcentageCreditCouvert: number;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * DATE ENVOI DOSSIER GARANTIE
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiDossierGarantie: string;
        /**
         * Code anciennete assurance / garantie
         */
        codeAncienneteAssuranceGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * CODE HYPOTHEQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        elementCalculGaranties: Array<IElementCalculGarantie>;
    }
    interface IGarantieSureteReelle {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * COMMENTAIRE GARANTIE
         */
        commentaireGarantie: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * RANG DE L'HYPOTHEQUE
         */
        rangHypotheque: number;
        /**
         * MT COUVERT HYPOTHEQUE RANG ANTERIEUR
         */
        mtCouvertHypothequeRangAnte: number;
        /**
         * MONTANT VALEUR OBJET
         */
        montantValeurObjet: number;
        /**
         * DATE ESTIMATION VALEUR OBJET
         * Type date au format yyyy-MM-dd
         */
        dateEstimationValeurObjet: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglemente: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * ADRESSE ligne1
         */
        adresseLigne1: string;
        /**
         * ADRESSE ligne 1 suite
         */
        adresseLigneSuite6: string;
        /**
         * ADRESSE ligne2
         */
        adresseLigne2: string;
        /**
         * ADRESSE ligne3
         */
        adresseLigne3: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * REFERENCE EXTERNE OBJET
         */
        referenceExterneObjet: string;
        /**
         * REFERENCE TYPE DE LOT
         */
        referenceTypeLot: string;
        /**
         * DETAIL DE L'OPERATION IMMOBILIERE
         */
        detailLOperationImmobiliere: string;
        /**
         * CODE TYPE LOGEMENT
         */
        codeTypeLogement: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * SURFACE HABITABLE EN M2
         */
        surfaceHabitableEnM2: number;
        /**
         * SURFACE DU TERRAIN EN M2
         */
        surfaceTerrainEnM2: number;
        /**
         * DATE FIN DE CONSTRUCTION OBJET
         * Type date au format yyyy-MM-dd
         */
        dateFinConstructionObjet: string;
        /**
         * CODE ZONE IMPLANTATION/SITUATION
         */
        codeZoneImplantationSituation: string;
        /**
         * CODE QUALITE DE L'EMPLACEMENT
         */
        codeQualiteLEmplacement: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet1: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet2: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet3: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet4: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet5: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet6: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet7: string;
        /**
         * CODE VERSEMENT ATTENDU
         */
        codeVersementAttendu: string;
        /**
         * DATE DE DEGREVEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDegrevement: string;
        /**
         * TYPOLOGIE DE L'OBJET
         */
        typologieLObjet: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * CODE MODALITE DE L'ESTIMATION (prud)
         */
        codeModaliteLEstimationPrud: string;
        /**
         * CODE MOTIF RE ESTIMATION
         */
        codeMotifReEstimation: string;
        /**
         * CODE MOTIF RE ESTIMATION(prudentiel)
         */
        codeMotifReEstimationPrudentiel: string;
        /**
         * DATE ESTIM VALEUR OBJET prudentielle
         * Type date au format yyyy-MM-dd
         */
        dateEstimValeurObjPrudentielle: string;
        /**
         * MONTANT VALEUR OBJET (pru)
         */
        montantValeurObjetPru: number;
        /**
         * CODE CESSION DE RANG HYPOTHEQUE
         */
        codeCessionRangHypotheque: string;
        /**
         * Identifiant GARANTIE
         */
        identifiantGarantie1: string;
        /**
         * DUREE VALIDITE GARANTIE
         */
        dureeValiditeGarantie: number;
        /**
         * CODE VALEUR PACTE COMMISSOIRE
         */
        codeValeurPacteCommissoire: string;
        /**
         * NUM SECOND. RANG DE L'HYPOTHEQUE
         */
        numSecondrangLHypotheque: number;
        /**
         * LIBELLE LONG VILLE CONSERVATION HYPO
         */
        libelleLongVilleConservHypo: string;
        /**
         * DATE DE PUBLICATION
         * Type date au format yyyy-MM-dd
         */
        datePublication: string;
        /**
         * LIBELLE LONG REFERENCE DU VOLUME
         */
        libelleLongReferenceVolume: string;
        /**
         * NUMERO DU VOLUME
         */
        numeroVolume: number;
        /**
         * MT HYPOTHEQUE DISPONIBLE
         */
        mtHypothequeDisponible: number;
        /**
         * DATE DU MONTANT HYPO DISPONIBLE
         * Type date au format yyyy-MM-dd
         */
        dateMontantHypoDisponible: string;
        /**
         * CODE GARANTIE RECHARGEABLE EXTERNE
         */
        codeGarantieRechargeableExterne: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * CODE DEVISE GARANTIE
         */
        codeDeviseGarantie: string;
    }
    interface IAvenant {
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: string;
        /**
         * CODE type d'appel
         */
        codeTypeAppel: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
    }
    interface ICriteresRecherche {
        codeEtablissement: number;
        identifiantCredit: string;
        dateTraitement: string;
        avenant: IAvenant;
        conventionApplicable: IConventionApplicable;
        phases: Array<IPhase>;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IGarantie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit1: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * CODE MODIFICATION AUTORISEE
         */
        codeModificationAutorisee: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * DATE D'EFFET DU CONTRAT
         * Type date au format yyyy-MM-dd
         */
        dateEffetContrat: string;
        /**
         * MONTANT DE LA GARANTIE
         */
        montantGarantie: number;
        /**
         * MONTANT DE LA GARANTIE
         */
        montantGarantie1: number;
    }
    interface IEcheanceALaCarte {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO ECHEANCE
         */
        numeroEcheance: number;
        /**
         * CODE TYPE ELEMENT SAISI SUR CREDIT
         */
        codeTypeElementSaisiSurCredit: string;
        /**
         * MONTANT REMBOURSEMENT SAISI
         */
        montantRemboursementSaisi: number;
        /**
         * TAUX DE REMBOURSEMENT SAISI
         */
        tauxRemboursementSaisi: number;
        /**
         * MONTANT AMORTISSEMENT CREDIT SAISI
         */
        montantAmortissementCreditSaisi: number;
        /**
         * MONTANT ECHEANCE EN COURS
         */
        montantEcheanceEnCours: number;
    }
    interface IGarantieSuretePerso {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * DUREE VALIDITE GARANTIE
         */
        dureeValiditeGarantie: number;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * NUMERO EXTERNE DE LA GARANTIE
         */
        numeroExterneGarantie: string;
    }
    interface IInformationMenage {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE JEUNE MENAGE
         */
        codeJeuneMenage: string;
        /**
         * NOMBRE DE PERSONNES A CHARGE
         */
        nombrePersonnesACharge: number;
        /**
         * CODE NOMBRE ACTIF MENAGE
         */
        codeNombreActifMenage: string;
        /**
         * MONTANT DU REVENU DU MENAGE
         */
        montantRevenuMenage: number;
        /**
         * TYPE DE REVENU DU MENAGE
         */
        typeRevenuMenage: string;
        /**
         * NOMBRE DE PERSONNES DANS LE MENAGE
         */
        nombrePersonnesDansMenage: number;
    }
    interface IInformationEmprunteur {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * LIBELLE CATEGORIE EMPRUNTEUR
         */
        libelleCategorieEmprunteur: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * CD SI "VRAI" AVENANT DE PERSONNE
         */
        cdSivraiavenantPersonne: string;
        /**
         * CODE MOTIF AVENANT PERSONNE
         */
        codeMotifAvenantPersonne: string;
        /**
         * NO DOMICILIATION SECOURS EMPRUNTEUR
         */
        numDomicilSecoursEmprunteur: string;
        /**
         * CODE MODE REGLEMENT EMPRUNTEUR
         */
        codeModeReglementEmprunteur: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * Référence Unique Mandat
         */
        referenceUniqueMandat: string;
        personnesComposantsEmprunteur: Array<IPersonneComposantEmprunteur>;
    }
    interface IPersonneComposantEmprunteur {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NO ORDRE PERSONNE DANS EMPRUNTEUR
         */
        noOrdrePersonneDansEmprunteur: number;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
    }
    interface IPersonnePayeur {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE MODE REGLEMENT
         */
        codeModeReglement: string;
        /**
         * NUMERO DOMICILIATION M.E.R.
         */
        numDomicilMiseRecouvrement: string;
        /**
         * MONTANT FIXE PAYEUR SUR ECHEANCE
         */
        montantFixePayeurSurEcheance: number;
        /**
         * POURCENTAGE PAYEUR SUR INTERET
         */
        pourcentagePayeurSurInteret: number;
        /**
         * POURCENTAGE PAYEUR SUR AMORTISSEMENT
         */
        prcentagePayeurSurAmortissement: number;
        /**
         * POURCENTAGE PAYEUR SUR ASSUR ACCESS
         */
        pourcentagePayeurSurAssurAccess: number;
        /**
         * Référence Unique Mandat
         */
        referenceUniqueMandat: string;
    }
    interface IElementCalculGarantie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvraccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IMAJAvenantFinancier {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: boolean;
        /**
         * CD ETAT GARANTIE PAR RAPPORT AVENANT
         */
        cdEtatGarantieParRapportAvenant: string;
        /**
         * CD ETAT ASSUR. PAR RAPPORT AVENANT
         */
        cdEtatAssurparRapportAvenant: string;
        /**
         * ETAT BRANCHE FINANCIERE
         */
        etatBrancheFinanciere: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit1: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit2: string;
    }
    interface INotationBaleII {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * Identifiant dossier avenant Bale2
         */
        identifiantDossierAvenantBale2: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOperDemandeurNotationBale: string;
        /**
         * NOTATION ENGAGEMENT BALE2
         */
        notationEngagementBale: string;
    }
    interface INumeroAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
    }
    interface ICriteresCreation {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
        credit: ICredit;
        majAvenantFinancier: IMAJAvenantFinancier;
        indicateurBanalise: string;
        creditObjet: ICreditObjet;
    }
    interface IGarantieApplicable {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * LIBELLE NATURE GARANTIE
         */
        libelleNatureGarantie: string;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE ACTE AUTHENTIQUE NATURE GARANTIE
         */
        codeActeAuthNatureGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * DATE DEBUT VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE LONG NATURE GARANTIE
         */
        libelleLongNatureGarantie: string;
        /**
         * CODE HYPOTHETIQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        /**
         * DUREE MAXIMALE DE GARANTIE EN MOIS
         */
        dureeMaximaleGarantie: number;
        /**
         * CODE UTILISATION PACTE COMMISSOIRE
         */
        codeUtilisationPacteCommissoire: string;
    }
    interface IMotifEstimation {
        /**
         * CODE MOTIF RE ESTIMATION
         */
        codeMotifReEstimation: string;
        /**
         * LIBELLE LONG MOTIF
         */
        libelleLongMotif: string;
    }
    interface ICriteresCreationChangePdt {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
        indicateurBanalise: string;
        credit: ICredit;
        majAvenantFinancier: IMAJAvenantFinancier;
        creditObjet: ICreditObjet;
    }
    interface ICreditObjet {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * NUMERO RELATIF OBJET DOSSIER
         */
        numeroRelatifObjetDossier: number;
        /**
         * CODE USAGE DE L'OBJET
         */
        codeUsageLObjet: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
        /**
         * LIBELLE TYPE OBJET REGLEMENTE - TOR
         */
        libelleTypeObjetReglementeTor: string;
        /**
         * CODE UTILISATION OBJET DANS CREDIT
         */
        codeUtilisationObjetDansCredit: string;
        /**
         * MONTANT DE L OPERATION
         */
        montantLOperation: number;
        /**
         * COUT HORS TAXE DE L'OBJET
         */
        coutHorsTaxeLObjet: number;
        /**
         * COUT TTC DE L'OBJET
         */
        coutTtcLObjet: number;
        /**
         * Montant FRAIS NOTAIRE
         */
        montantFraisNotaire: number;
        /**
         * INTEGRATION FRAIS NOTAIRE
         */
        integrationFraisNotaire: string;
        /**
         * MONTANT FRAIS DIVERS
         */
        montantFraisDivers: number;
        /**
         * INTEGRATION FRAIS DIVERS
         */
        integrationFraisDivers: string;
        /**
         * Mt inscriptions hypothéc existantes
         */
        mtInscriptionHypothecExistantes: number;
        /**
         * CODE PRIX DU MARCHE
         */
        codePrixMarche: string;
        /**
         * CODE MODALITE D'OCCUPATION
         */
        codeModaliteOccupation: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * CODE GARANTIE ACHEVEMENT TRAVAUX
         */
        codeGarantieAchevementTravaux: string;
        /**
         * TYPE ZONE FRANCHE
         */
        typeZoneFranche: string;
        /**
         * CODE ZONE GEOGRAPHIQUE
         */
        codeZoneGeographique: string;
        /**
         * NOMBRE LOGEMENTS DANS OBJET
         */
        nombreLogementsDansObjet: number;
        /**
         * ADRESSE ligne1
         */
        adresseLigne1: string;
        /**
         * ADRESSE ligne2
         */
        adresseLigne2: string;
        /**
         * ADRESSE ligne3
         */
        adresseLigne3: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * ADRESSE ligne 1 suite
         */
        adresseLigneSuite6: string;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * REFERENCE EXTERNE OBJET
         */
        referenceExterneObjet: string;
        /**
         * IDENTIFIANT VENDEUR
         */
        identifiantVendeur: string;
        /**
         * CODE QUALITE DE MARCHE
         */
        codeQualiteMarche: string;
        /**
         * MONTANT VALEUR OBJET
         */
        montantValeurObjet: number;
        /**
         * SURFACE HABITABLE EN M2
         */
        surfaceHabitableEnM2: number;
        /**
         * Code mise en oeuvre du projet
         */
        codeMiseEnOeuvreProjet: string;
        /**
         * CODE TYPE LOGEMENT
         */
        codeTypeLogement: string;
        /**
         * DATE ESTIMATION VALEUR OBJET
         * Type date au format yyyy-MM-dd
         */
        dateEstimationValeurObjet: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * SURFACE DU TERRAIN EN M2
         */
        surfaceTerrainEnM2: number;
        /**
         * Mode d'acquisition
         */
        modeAcquisition: string;
        /**
         * DATE D'ACQUISITION DU TERRAIN
         * Type date au format yyyy-MM-dd
         */
        dateAcquisitionTerrain: string;
        /**
         * COUT D'ACQUISITION
         */
        coutAcquisition: number;
        /**
         * DATE ESTIM VALEUR OBJET prudentielle
         * Type date au format yyyy-MM-dd
         */
        dateEstimValeurObjetPrudentiel: string;
        /**
         * Mode estimation valeur terrain
         */
        modeEstimationValeurTerrain: string;
        /**
         * CODE CLASSE BAFI
         */
        codeClasseBafi: string;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        categorieReglementAttribution: string;
        /**
         * CODE TYPE DE MARCHE PERSONNE
         */
        codeTypeMarchePersonne: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * code typologie cadre fiscal
         */
        codeTypologieCadreFiscal: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
    }
    interface IComposanteAssurance {
        /**
         * Code de l'établissement (= caisse d'épargne)
         */
        codeEtablissement: number;
        /**
         * Identifiant de l'assurance à laquelle se rattache la composante
         */
        identifiantAssurance: string;
        /**
         * Identifiant du crédit auquel se rattache la composante
         */
        identifiantCredit: string;
        /**
         * Numéro d'ordre de la composante pour le crédit assuré
         */
        numeroRelatif: number;
        /**
         * Date à laquelle s'applique la composante
         * Type date au format yyyy-MM-dd
         */
        dateDebutComposante: string;
        /**
         * Date à laquelle la composante ne s'applique plus
         * Type date au format yyyy-MM-dd
         */
        dateFinComposante: string;
        /**
         * Précise l'élément inclus dans l'assurance : garantie couverte (incapacité temporaire de travail, perte d'emploi...) ou option (franchise 30j, ...)
         */
        typeComposante: string;
        /**
         * Indique si la composante est obligatoire (incluse dans le socle assurance code 'N'), optionnelle préconisée (code 'P') ou optionnelle non préconisée (code 'O')
         */
        codeComposanteOptionnelle: string;
        /**
         * Indique si la composante a été retenue par le client (les composantes non retenues sont conservées pour garder trace du devoir de conseil)
         */
        indicateurComposanteRetenue: boolean;
        /**
         * Coût en taux de la composante (retenue ou pas)
         */
        tauxComposante: number;
        /**
         * Coût en montant de la composante (retenue ou pas), pour les composantes en montant
         */
        montantComposante: number;
    }
    interface IServiceObjet {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * CODE UTILISATION OBJET DANS CREDIT
         */
        codeUtilisationObjetDansCredit: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * REGLE DATE EFFET ASSUR PARAMETRABLE
         */
        regleDateEffetAssurParametrable: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjet: string;
    }
    interface IAccessoireServiceObjet {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT ASSIETTE ACESSOIRE FIXEE CONTRACT
         */
        mtAssietteAccFixeeContract: number;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvrAccessoire: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
    }
    interface ICaracteristiqueFinan {
        criteresRecherche: ICriteresRecherche;
        dossier: IDossier;
        credit: ICredit;
        personnesAssurableOuGarant: Array<IPersonneAssurableOuGarant>;
        personnesAssurees: Array<IPersonneAssuree>;
        motifsReserveOuExclusion: Array<IMotifReserveOuExclusion>;
        convsApplicablesEmprunteur: Array<IConventionApplicableEmprunteur>;
        conventionsApplicablesCredit: Array<IConventionAssurance>;
        conventionsApplicablesObjet: Array<IConventionApplicableObjet>;
        accessoiresParConvention: Array<IAccessoireParConvention>;
        encoursPersonneConvention: Array<IEncoursPersonneConvention>;
        derogations: Array<IDerogation>;
        compagniesAssurance: Array<ICompagnieAssurance>;
        retourQR: Array<IRetourQR>;
        creditBis: ICreditBis;
        creditTer: ICreditTer;
        conventionsAssurances: Array<IConventionAssurance>;
        personnesAssurableOuGarantBis: Array<IPersonneAssurableOuGarant>;
        notationBaleII: INotationBaleII;
        numeroAvenant: INumeroAvenant;
        composantesVierges: Array<IComposanteAssurance>;
        criteresCreation: ICriteresCreation;
        compteurMiseJour: number;
        criteresCreationChangePdt: ICriteresCreationChangePdt;
        servicesObjet: Array<IServiceObjet>;
        accessoiresServicesObjet: Array<IAccessoireServiceObjet>;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueGar {
    interface IPretCombine {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * MT part amortissable du capital
         */
        montantPartAmortissableCapital: number;
        /**
         * Montant de la part in fine
         */
        montantPartInfine: number;
        /**
         * Mode de répartition du capital
         */
        modeRepartitionCapital: string;
        /**
         * Code ajout intér. cap sur part amort
         */
        codeAjoutIntercapSurPartAmort: string;
        /**
         * montant de la quotité d'amortissemen
         */
        montantQuotiteAmortissement: number;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAAmortir: number;
        /**
         * Amort. supplémentaire fin phase
         */
        amortissementSuppFinPhase: number;
    }
    interface ICredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * MONTANT ECHEANCE
         */
        montantEcheance: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE ECHEANCE M.E.R.
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Taux nominal du crédit
         */
        tauxNominalCredit: number;
        /**
         * DATE M.E.R. ZERO
         * Type date au format yyyy-MM-dd
         */
        dateMiseRecouvrementZero: string;
        /**
         * CODE MODE EXPRESSION TAUX
         */
        codeModeExpressionTaux: string;
        /**
         * CODE TAUX DU CREDIT DIRECTEUR
         */
        codeTauxCreditDirecteur: string;
        /**
         * CODE CRISTALLISATION TAUX INTERET
         */
        codeCristallisationTauxInteret: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * MONTANT ECHEANCE M.E.R.
         */
        montantEcheanceMER: number;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * MONTANT ARRIERES INCORPORES AU CRD
         */
        montantArrieresIncorporesCrd: number;
        /**
         * CODE TRAITEMENT FIN DE VERSEMENT
         */
        codeTraitementFinVersement: string;
        /**
         * NUMERO QUANTIEME DATE ECHEANCE
         */
        numeroQuantiemeDateEcheance: number;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * Marge à appliquer sur taux nominal
         */
        margeAppliquerSurTauxNominal: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        montantCapitalRestantSurCredit: number;
        /**
         * CODE TYPE RECALCUL T.A.
         */
        codeTypeRecalculTA: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DATE FIN DE PREFINANCEMENT REELLE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementReelle: string;
        /**
         * CODE INTEGRATION FRAIS AU CRD
         */
        codeIntegrationFraisCrd: string;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO MODALITE DE RA
         */
        numeroModaliteRembAnticipe: number;
        /**
         * TAUX INDEMNITE R.A.
         */
        tauxIndemniteRA: number;
        /**
         * TAUX INTERET PREFINANCEMENT
         */
        tauxInteretPrefinancement: number;
        /**
         * Code crédit sécurisable
         */
        codeCreditSecurisable: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE presence de revision sur credit
         */
        codePresenceRevisionSurCredit: string;
        /**
         * MONTANT INT. COMP. SUR C.R.D.
         */
        montantIntcompsurCR: number;
        /**
         * CD TYPE ARRIERES INCORPORE AU CRD
         */
        cdTypeArrieresIncorporeCrd: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * Nb maxi période allong pour révision
         */
        nbMaxiPeriodeAllongPourRevision: number;
        /**
         * Nb maxi pér. all. sortie cpt courant
         */
        nbMaxiPerallsortieCptCourant: number;
        /**
         * Nb maxi pér. allong pour modulation
         */
        nbMaxiPerallongPourModulation: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        mtCapitalRestantSurCredit: number;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT GLOBAL GARANTI CREDIT
         */
        montantGlobalGarantiCredit: number;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * DATE D EFFET INITIALE DE l'AVENANT
         * Type date au format yyyy-MM-dd
         */
        dateEffetInitialeLAvenant: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEmission: string;
        /**
         * DUREE AJUSTEE CREDIT SUITE RECALCUL
         */
        dureeAjusteeCreditSuiteRecalcul: number;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * DATE EMISSION
         * Type date au format yyyy-MM-dd
         */
        dateEmission: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * DELAI MINIMUM D'ACCEPTATION
         */
        delaiMinimumAcceptation: number;
        /**
         * DELAI DE RETRACTATION
         */
        delaiRetractation: number;
        /**
         * COMMENTAIRE PRODUITS
         */
        commentaireProduits: string;
        /**
         * MONTANT M.A.D. DE FONDS DEMANDEES
         */
        montantMAfondsDemandees: number;
        /**
         * CODE ECHEANCIER VERSEM. CONTRACTUEL
         */
        codeEcheancierVersemcontractuel: string;
        /**
         * Code type de prêt combiné
         */
        codeTypePretCombine: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * Existence accessoire bon/maj taux
         */
        existenceAccessoireBonMajTaux: string;
        /**
         * Cumul des Bonifications/Majorations
         */
        cumulDesBonifsMajorations: number;
        /**
         * Code indicateur integration CRD
         */
        codeIndicateurIntegrationCrd: string;
        /**
         * TAUX INTERETS RETARD IMPAYE
         */
        tauxInteretsRetardImpaye: number;
        phases: Array<IPhase>;
        echeancesReportees: Array<IEcheanceReportee>;
        echeancesAmenagees: Array<IEcheanceAmenagee>;
        assurances: Array<IAssurance>;
        garantiesExistantes: Array<IGarantieExistante>;
        garantiesSuretesReelles: Array<IGarantieSureteReelle>;
        accessoires: Array<IAccessoire>;
        garantie: IGarantie;
        phasesBis: Array<IPhase>;
        garantiesSuretesPerso: Array<IGarantieSuretePerso>;
        informationsMenage: Array<IInformationMenage>;
        informationsEmprunteur: IInformationEmprunteur;
        personnePayeurs: Array<IPersonnePayeur>;
        accessoiresBis: Array<IAccessoire>;
        garantiesApplicables: Array<IGarantieApplicable>;
        motifsEstimations: Array<IMotifEstimation>;
        servicesObjet: Array<IServiceObjet>;
        accessoiresServicesObjet: Array<IAccessoireServiceObjet>;
    }
    interface IPhase {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE LONG TYPE DE PHASE
         */
        libelleLongTypePhase: string;
        /**
         * DUREE INITIALE PHASE CREDIT
         */
        dureeInitialePhaseCredit: number;
        /**
         * DUREE RESIDUELLE CREDIT
         */
        dureeResiduelleCredit: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * Taux nominal de la phase
         */
        tauxNominalPhase: number;
        /**
         * CODE TAUX DES PALIERS CALCULES
         */
        codeTauxDesPaliersCalcules: string;
        /**
         * TAUX MOYEN PHASE CREDIT
         */
        tauxMoyenPhaseCredit: number;
        /**
         * MODE DE CALCUL AMORTISSEMENT
         */
        modeCalculAmortissement: string;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAmortir: number;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement: string;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * DATE FIN DE PREFINANCEMENT INITIALE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementInitiale: string;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERInterets: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * MODE CAPIT. RECOUV. INTERETS
         */
        modeCapitRecouvInterets: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * NB DE JOURS DANS ANNEE DENOMINATEUR
         */
        nbJoursDansAnneeDenominateur: number;
        /**
         * NB DE JOURS DANS ANNEE NUMERATEUR
         */
        nbJoursDansAnneeNumerateur: number;
        /**
         * CALCUL INTERETS EN JOURS REELS
         */
        calculInteretsEnJoursReels: string;
        /**
         * Prélèvement en fin de phase
         */
        prelevementEnFinPhase: string;
        /**
         * CODE TYPE ECRETAGE
         */
        codeTypeEcretage: string;
        /**
         * DUREE AJUSTEE PHASE CREDIT
         */
        dureeAjusteePhaseCredit: number;
        paliers: Array<IPalier>;
        paliersTauxAmortissement: Array<IPalierTauxAmortissement>;
        pretsCombines: Array<IPretCombine>;
        parametresRevisionTaux: Array<IParametreRevisionTaux>;
        echeancesALaCarte: Array<IEcheanceALaCarte>;
    }
    interface IParametreRevisionTaux {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision: number;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision1: number;
        /**
         * MODE EXPRESSION BUTOIR TAUX BAISSE
         */
        modeExpressionButoirTauxBaisse: string;
        /**
         * MODE EXPRESSION BUTOIR TAUX HAUSSE
         */
        modeExpressionButoirTauxHausse: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * Numéro de période de révision
         */
        numeroPeriodeRevision: number;
        /**
         * IDENTIFIANT LOI DE REVISION
         */
        identifiantLoiRevision: string;
        /**
         * CD ECHEANCE RECALCULEE PAR REVISION
         */
        codeEcheanceRecalculeeRevision: string;
        /**
         * Nombre échéance avant recalcul mont.
         */
        nbEcheanceAvantRecalculMontant: number;
        /**
         * Evènement déclencheur début période
         */
        evntDeclencheurDebutPeriode: string;
        /**
         * CD unité période début de révision
         */
        codeUnitePeriodeDebutRevision: string;
        /**
         * Nb pér. pour dét. début de période
         */
        nbPeriodePourDeterDebutPeriode: number;
        /**
         * Durée de la période de révision
         */
        dureePeriodeRevision: number;
        /**
         * Unité de durée de la période de rév.
         */
        uniteDureePeriodeRevision: string;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * Elément modifiable par avenant
         */
        elementModifiableParAvenant: string;
        /**
         * MODE EXPRESSION VALEUR UTILIS INDICE
         */
        modeExpressValeurUtilisIndice: string;
        /**
         * CD TYPE DE ROLE INDICE
         */
        codeTypeRoleIndice: string;
    }
    interface IPalier {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * TAUX INTERET PALIER
         */
        tauxInteretPalier: number;
        /**
         * TYPE DE REMBOURSEMENT
         */
        typeRemboursement: string;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF PALIER / PRODUIT
         */
        numeroRelatifPalierProduit: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances: number;
        /**
         * PERIODICITE APPLIC PROGRE ECHEANCE
         */
        periodiciteApplicProgreEcheance: string;
    }
    interface IPalierTauxAmortissement {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement: number;
        /**
         * CD INDEXATION TAUX PROGRESSION AMORT
         */
        cdIndexationTauxProgressAmort: string;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
    }
    interface IEcheanceReportee {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE DE DEBUT DE CHOMAGE
         * Type date au format yyyy-MM-dd
         */
        dateDebutChomage: string;
        /**
         * NUMERO DU PLAN DE SECURISATION
         */
        numeroPlanSecurisation: number;
        /**
         * NUMERO DE LA PERIODE DE FRACTIONNEME
         */
        numeroPeriodeFractionneme: number;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nombreEcheancesAccessReport: number;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
    }
    interface IEcheanceAmenagee {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE TYPE ACTION
         */
        codeTypeAction: string;
        /**
         * NOMBRE ECHEANCES REPORTEES
         */
        nombreEcheancesReportees: number;
        /**
         * Code type échéance aménagée
         */
        codeTypeEcheanceAmenagee: string;
        /**
         * Code type calcul intérêts
         */
        codeTypeCalculInterets: string;
        /**
         * nouvelle duree residuelle
         */
        nouvelleDureeResiduelle: number;
        /**
         * MONTANT REMBOURSEMENT SAISI
         */
        montantRemboursementSaisi: number;
    }
    interface IAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numeroRegleApplicationAccess: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire1: string;
        /**
         * NUMERO REGLE DE CALCUL ELEMENT
         */
        numeroRegleCalculElement: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessCalculTxEffectifGlob: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * Indicateur Accessoire Obligatoire
         */
        indicateurAccessoireObligatoire: string;
        /**
         * Indicateur Accessoire Validé
         */
        indicateurAccessoireValide: string;
        /**
         * Indicateur Accessoire Annulé AV
         */
        indicateurAccessoireAnnuleAv: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nombreEcheancesAccessReport: number;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire1: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire2: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire3: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire4: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * LIBELLE TYPE ASSIETE DE CALCUL
         */
        libelleTypeAssieteCalcul: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAccess: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * REGLE DATE DEBUT APPLI ACC catalogue
         */
        regleDateDebutAppliAccCatalogue: string;
        /**
         * REGLE EVENEMENT DECH. 1ER APPEL cata
         */
        regleEvenementDech1erAppelCata: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvrAccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * Code indicateur bornes dérogées
         */
        codeIndicateurBornesDerogees: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IMotifReserveOuExclusion {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveExclusionAssurance: string;
        /**
         * LIBELLE RESERVES OU EXCLUSIONS
         */
        libelleReservesExclusions: string;
    }
    interface IPersonneAssurableOuGarant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
    }
    interface IPersonneAssuree {
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * CATEGORIE SOCIO-PROFESSIONNELLE
         */
        categorieSocioProfessionnelle: string;
        /**
         * Code Critères résidence
         */
        codeCriteresResidence: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
    }
    interface IAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveExclusionAssurance: string;
        /**
         * CODE COUVERTURE TYPE EXTENSION
         */
        codeCouvertureTypeExtension: string;
        /**
         * CODE DELEGATION ASSURANCE
         */
        codeDelegationAssurance: string;
        /**
         * DATE PRISE EFFET ASSURANCE
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetAssurance: string;
        /**
         * DATE FIN EFFET ASSURANCE
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetAssurance: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MT ECHEANCE COUVERT PAR ASSURANCE
         */
        montantEcheanceCouvertAssurance: number;
        /**
         * BENEFICIAIRE ASSURANCE AVANT VERSEM.
         */
        beneficiaireAssuAvantVersem: string;
        /**
         * NUMERO DU DOSSIER CHEZ L ASSUREUR
         */
        numeroDossierChezLAssureur: string;
        /**
         * Code type de risque
         */
        codeTypeRisque: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * Code anciennete assurance / garantie
         */
        codeAncienneteAssuranceGarantie: string;
        /**
         * NUMERO SIREN
         */
        numeroSiren: number;
        /**
         * LIBELLE ASSURANCE EXTERNE
         */
        libelleAssuranceExterne: string;
        /**
         * LIBELLE INTERVENANT
         */
        libelleIntervenant: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * CODE ASSURANCE OBLIGATOIRE
         */
        codeAssuranceObligatoire: string;
        /**
         * Code Type Agrément Assurance externe
         */
        codeTypeAgrementAssuExterne: string;
        /**
         * code motif résiliation
         */
        codeMotifResiliation: string;
        /**
         * QUOTITE ACCESSOIRE INCLUS TEG
         */
        quotiteAccessoireInclusTeg: number;
        /**
         * QUOTITE ACCESS NON INCLUS TEG
         */
        quotiteAccessNonInclusTeg: number;
        /**
         * Indique la grille tarifaire appliquée par l'assureur
         */
        codeGrilleTarifaire: string;
        personneAssuree: IPersonneAssuree;
        elementsCalculAccessoires: Array<IElementCalculAccessoire>;
        conventionAssurance: IConventionAssurance;
        accessoires: Array<IAccessoire>;
    }
    interface IElementCalculAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MT ASSIETTE ACESSOIRE FIXEE CONTRACT
         */
        mtAssietteAcessFixeeContract: number;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IConventionAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE ASSURANCE
         */
        codeTypeAssurance: string;
        /**
         * LIBELLE COURT TYPE ASSURANCE
         */
        libelleCourtTypeAssurance: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * MT MINIMUM CREDIT / CONVENTION
         */
        mtMinimumCreditConvention: number;
        /**
         * MT MAXIMUM CREDIT / CONVENTION
         */
        mtMaximumCreditConvention: number;
        /**
         * UNITE PERIODE CONDIT OBTENTION CONV.
         */
        unitePeriodeConditObtentionConv: string;
        /**
         * DUREE MINI CREDIT / OBTENTION CONV.
         */
        dureeMiniCreditObtentionConv: number;
        /**
         * DUREE MAXI CREDIT / OBTENTION CONV
         */
        dureeMaxiCreditObtentionConv: number;
        /**
         * CD MODE EXPRESSION GARANTIE ACCORDEE
         */
        cdModeExpressionGaranAccordee: string;
        /**
         * QUOTITE MINIMUM PAR BENEFICIAIRE
         */
        quotiteMinimumParBeneficiaire: number;
        /**
         * QUOTITE MAXIMUM PAR BENEFICIAIRE
         */
        quotiteMaximumParBeneficiaire: number;
        /**
         * PAS DE QUOTITE PAR BENEFICIAIRE
         */
        pasQuotiteParBeneficiaire: number;
        /**
         * MONTANT MINIMUM GARANTI PAR TETE
         */
        montantMinimumGarantiParTete: number;
        /**
         * MONTANT MAXIMUM GARANTI PAR TETE
         */
        montantMaximumGarantiParTete: number;
        /**
         * PAS DE MONTANT GARANTI PAR TETE
         */
        pasMontantGarantiParTete: number;
        /**
         * CODE TIERS GARANTI
         */
        codeTiersGaranti: string;
        /**
         * CODE TYPE OBJET AUTORISE
         */
        codeTypeObjetAutorise: string;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM COUVERTURE ASSURANCE
         */
        ageMaximumCouvertureAssurance: number;
        /**
         * CD POSSIBILITE EXTENSION COUVERTURE
         */
        cdPossibiliteExtensionCouv: string;
        /**
         * MONTANT MAXIMUM ENCOURS GARANTI
         */
        montantMaximumEncoursGaranti: number;
        /**
         * DUREE MAXI PREFI POUR CONVENTION
         */
        dureeMaxiPrefiPourConvention: number;
        /**
         * DUREE MAXI DIF TOTAL POUR CONVENTION
         */
        dureeMaxiDifTotalPourConvention: number;
        /**
         * DUREE MAXI DIF AMORT POUR CONVENTION
         */
        dureeMaxiDifAmortPourConvention: number;
        /**
         * DUREE MAXI AMORTISS. POUR CONVENTION
         */
        dureeMaxiAmortisspourConvention: number;
        /**
         * MONTANT PLAFOND ENCOURS DELEGATION
         */
        montantPlafondEncoursDelegation: number;
        /**
         * REGLE DATE EFFET ASSUR. - GARANTIE
         */
        regleDateEffetAssurgarantie: string;
        /**
         * AGE MAXIMUM COUVERTURE EN EXTENSION
         */
        ageMaximumCouvertureEnExtension: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE DE RESTITUTION
         */
        codeRestitution: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
        accessoiresParConventions: Array<IAccessoireParConvention>;
        derogations: Array<IDerogation>;
        compagniesAssurance: Array<ICompagnieAssurance>;
    }
    interface IAccessoireParConvention {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseTypePhaseProduit: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * TAUX ACCESSOIRE PERSONNES AGEES
         */
        tauxAccessoirePersonnesAgees: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccess: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numeroRegleApplicationAccess: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * DUREE APPLICATION ACCESS.
         */
        dureeApplicationAccess: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IDerogation {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * NUMERO derogation
         */
        numeroDerogation: number;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * MONTANT MINIMUM CREDIT
         */
        montantMinimumCredit: number;
        /**
         * MONTANT MAXIMUM CREDIT
         */
        montantMaximumCredit: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * CODE PERSONNALISATION A INSTRUCTION
         */
        codePersoAInstruction: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccess: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX DE BASE AGGRAVE CONVENTION
         */
        tauxBaseAggraveConvention: number;
        /**
         * TAUX DE BASE CONVENTION
         */
        tauxBaseConvention: number;
        /**
         * TAUX DE BASE EN DECES CONVENTION
         */
        tauxBaseEnDecesConvention: number;
        /**
         * TAUX BASE EN INCAPACITE CONVENTION
         */
        tauxBaseEnIncapaciteConvention: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
    }
    interface ICompagnieAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE COURT CONVENTION.
         */
        libelleCourtConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * code indique convention commerciale
         */
        codeIndiqueConvCommerciale: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
    }
    interface ICreditBis {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit1: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * CODE MODIFICATION AUTORISEE
         */
        codeModificationAutorisee: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * DATE D'EFFET DU CONTRAT
         * Type date au format yyyy-MM-dd
         */
        dateEffetContrat: string;
    }
    interface IDossier {
        /**
         * Code Destination Opération Objet
         */
        codeDestinationOperationObjet: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * Existence Garantie Hypothécaire
         */
        existenceGarantieHypothecaire: string;
    }
    interface ICreditTer {
        /**
         * CODE PRET IN FINE
         */
        codePretInFine: string;
        /**
         * Code Indicateur Taux Révisable
         */
        codeIndicateurTauxRevisable: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE CREDIT RELAIS
         */
        codeCreditRelais: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * NOMBRE DE PHASES D'UN CREDIT
         */
        nombrePhasesUnCredit: number;
        /**
         * Durée de préfinancement (en mois)
         */
        dureePrefinancementEnMois: number;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * Nb pér maxi allonge crédit sortie cc
         */
        nbPerMaxiAllongeCreditSortieCc: number;
        /**
         * Nb pér maxi allonge crédit révi taux
         */
        nbPerMaxiAllongeCreditReviTaux: number;
        /**
         * Nb pér maxi allonge crédit ex modula
         */
        nbPerMaxiAllongeCreditExModula: number;
        /**
         * indicateur periode compte
         */
        indicateurPeriodeCompte: string;
        /**
         * indicateur de compte
         */
        indicateurCompte: string;
    }
    interface IConventionApplicable {
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE AVENANT FINANCIER
         */
        codeAvenantFinancier: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        identifiantEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
    }
    interface IConventionApplicableEmprunteur {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
    }
    interface IConventionApplicableObjet {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
    }
    interface IEncoursPersonneConvention {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * MONTANT MAXIMUM ENCOURS GARANTI
         */
        montantMaximumEncoursGaranti: number;
    }
    interface IGarantieExistante {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * ACTE AUTHENTIQUE SUR GARANTIE
         */
        acteAuthentiqueSurGarantie: string;
        /**
         * REDACTEUR DE L'ACTE
         */
        redacteurActe: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * IDENTIFIANT GARANT
         */
        identifiantGarant: string;
        /**
         * CAPITAL COUVERT / GARANTIE
         */
        capitalCouvertGarantie: number;
        /**
         * POURCENTAGE DU CREDIT COUVERT
         */
        pourcentageCreditCouvert: number;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * DATE ENVOI DOSSIER GARANTIE
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiDossierGarantie: string;
        /**
         * Code anciennete assurance / garantie
         */
        codeAncienneteAssuranceGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * CODE HYPOTHEQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        elementCalculGaranties: Array<IElementCalculGarantie>;
    }
    interface IGarantieSureteReelle {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * COMMENTAIRE GARANTIE
         */
        commentaireGarantie: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * RANG DE L'HYPOTHEQUE
         */
        rangHypotheque: number;
        /**
         * MT COUVERT HYPOTHEQUE RANG ANTERIEUR
         */
        mtCouvertHypothequeRangAnte: number;
        /**
         * MONTANT VALEUR OBJET
         */
        montantValeurObjet: number;
        /**
         * DATE ESTIMATION VALEUR OBJET
         * Type date au format yyyy-MM-dd
         */
        dateEstimationValeurObjet: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglemente: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * ADRESSE ligne1
         */
        adresseLigne1: string;
        /**
         * ADRESSE ligne 1 suite
         */
        adresseLigneSuite6: string;
        /**
         * ADRESSE ligne2
         */
        adresseLigne2: string;
        /**
         * ADRESSE ligne3
         */
        adresseLigne3: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * REFERENCE EXTERNE OBJET
         */
        referenceExterneObjet: string;
        /**
         * REFERENCE TYPE DE LOT
         */
        referenceTypeLot: string;
        /**
         * DETAIL DE L'OPERATION IMMOBILIERE
         */
        detailLOperationImmobiliere: string;
        /**
         * CODE TYPE LOGEMENT
         */
        codeTypeLogement: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * SURFACE HABITABLE EN M2
         */
        surfaceHabitableEnM2: number;
        /**
         * SURFACE DU TERRAIN EN M2
         */
        surfaceTerrainEnM2: number;
        /**
         * DATE FIN DE CONSTRUCTION OBJET
         * Type date au format yyyy-MM-dd
         */
        dateFinConstructionObjet: string;
        /**
         * CODE ZONE IMPLANTATION/SITUATION
         */
        codeZoneImplantationSituation: string;
        /**
         * CODE QUALITE DE L'EMPLACEMENT
         */
        codeQualiteLEmplacement: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet1: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet2: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet3: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet4: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet5: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet6: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet7: string;
        /**
         * CODE VERSEMENT ATTENDU
         */
        codeVersementAttendu: string;
        /**
         * DATE DE DEGREVEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDegrevement: string;
        /**
         * TYPOLOGIE DE L'OBJET
         */
        typologieLObjet: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * CODE MODALITE DE L'ESTIMATION (prud)
         */
        codeModaliteLEstimationPrud: string;
        /**
         * CODE MOTIF RE ESTIMATION
         */
        codeMotifReEstimation: string;
        /**
         * CODE MOTIF RE ESTIMATION(prudentiel)
         */
        codeMotifReEstimationPrudentiel: string;
        /**
         * DATE ESTIM VALEUR OBJET prudentielle
         * Type date au format yyyy-MM-dd
         */
        dateEstimValeurObjPrudentielle: string;
        /**
         * MONTANT VALEUR OBJET (pru)
         */
        montantValeurObjetPru: number;
        /**
         * CODE CESSION DE RANG HYPOTHEQUE
         */
        codeCessionRangHypotheque: string;
        /**
         * Identifiant GARANTIE
         */
        identifiantGarantie1: string;
        /**
         * DUREE VALIDITE GARANTIE
         */
        dureeValiditeGarantie: number;
        /**
         * CODE VALEUR PACTE COMMISSOIRE
         */
        codeValeurPacteCommissoire: string;
        /**
         * NUM SECOND. RANG DE L'HYPOTHEQUE
         */
        numSecondrangLHypotheque: number;
        /**
         * LIBELLE LONG VILLE CONSERVATION HYPO
         */
        libelleLongVilleConservHypo: string;
        /**
         * DATE DE PUBLICATION
         * Type date au format yyyy-MM-dd
         */
        datePublication: string;
        /**
         * LIBELLE LONG REFERENCE DU VOLUME
         */
        libelleLongReferenceVolume: string;
        /**
         * NUMERO DU VOLUME
         */
        numeroVolume: number;
        /**
         * MT HYPOTHEQUE DISPONIBLE
         */
        mtHypothequeDisponible: number;
        /**
         * DATE DU MONTANT HYPO DISPONIBLE
         * Type date au format yyyy-MM-dd
         */
        dateMontantHypoDisponible: string;
        /**
         * CODE GARANTIE RECHARGEABLE EXTERNE
         */
        codeGarantieRechargeableExterne: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * CODE DEVISE GARANTIE
         */
        codeDeviseGarantie: string;
        versementAttenduSurObjets: Array<IVersementAttenduSurObjet>;
    }
    interface IAvenant {
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: string;
        /**
         * CODE type d'appel
         */
        codeTypeAppel: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
    }
    interface ICriteresRecherche {
        codeEtablissement: number;
        identifiantCredit: string;
        dateTraitement: string;
        avenant: IAvenant;
        conventionApplicable: IConventionApplicable;
        phases: Array<IPhase>;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IGarantie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit1: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * CODE MODIFICATION AUTORISEE
         */
        codeModificationAutorisee: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * DATE D'EFFET DU CONTRAT
         * Type date au format yyyy-MM-dd
         */
        dateEffetContrat: string;
        /**
         * MONTANT DE LA GARANTIE
         */
        montantGarantie: number;
        /**
         * MONTANT DE LA GARANTIE
         */
        montantGarantie1: number;
    }
    interface IEcheanceALaCarte {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO ECHEANCE
         */
        numeroEcheance: number;
        /**
         * CODE TYPE ELEMENT SAISI SUR CREDIT
         */
        codeTypeElementSaisiSurCredit: string;
        /**
         * MONTANT REMBOURSEMENT SAISI
         */
        montantRemboursementSaisi: number;
        /**
         * TAUX DE REMBOURSEMENT SAISI
         */
        tauxRemboursementSaisi: number;
        /**
         * MONTANT AMORTISSEMENT CREDIT SAISI
         */
        montantAmortissementCreditSaisi: number;
        /**
         * MONTANT ECHEANCE EN COURS
         */
        montantEcheanceEnCours: number;
    }
    interface IGarantieSuretePerso {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * DUREE VALIDITE GARANTIE
         */
        dureeValiditeGarantie: number;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * NUMERO EXTERNE DE LA GARANTIE
         */
        numeroExterneGarantie: string;
    }
    interface IInformationMenage {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE JEUNE MENAGE
         */
        codeJeuneMenage: string;
        /**
         * NOMBRE DE PERSONNES A CHARGE
         */
        nombrePersonnesACharge: number;
        /**
         * CODE NOMBRE ACTIF MENAGE
         */
        codeNombreActifMenage: string;
        /**
         * MONTANT DU REVENU DU MENAGE
         */
        montantRevenuMenage: number;
        /**
         * TYPE DE REVENU DU MENAGE
         */
        typeRevenuMenage: string;
        /**
         * NOMBRE DE PERSONNES DANS LE MENAGE
         */
        nombrePersonnesDansMenage: number;
    }
    interface IInformationEmprunteur {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * LIBELLE CATEGORIE EMPRUNTEUR
         */
        libelleCategorieEmprunteur: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * CD SI "VRAI" AVENANT DE PERSONNE
         */
        cdSivraiavenantPersonne: string;
        /**
         * CODE MOTIF AVENANT PERSONNE
         */
        codeMotifAvenantPersonne: string;
        /**
         * NO DOMICILIATION SECOURS EMPRUNTEUR
         */
        numDomicilSecoursEmprunteur: string;
        /**
         * CODE MODE REGLEMENT EMPRUNTEUR
         */
        codeModeReglementEmprunteur: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * Référence Unique Mandat
         */
        referenceUniqueMandat: string;
        personnesComposantsEmprunteur: Array<IPersonneComposantEmprunteur>;
    }
    interface IPersonneComposantEmprunteur {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NO ORDRE PERSONNE DANS EMPRUNTEUR
         */
        noOrdrePersonneDansEmprunteur: number;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
    }
    interface IPersonnePayeur {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE MODE REGLEMENT
         */
        codeModeReglement: string;
        /**
         * NUMERO DOMICILIATION M.E.R.
         */
        numDomicilMiseRecouvrement: string;
        /**
         * MONTANT FIXE PAYEUR SUR ECHEANCE
         */
        montantFixePayeurSurEcheance: number;
        /**
         * POURCENTAGE PAYEUR SUR INTERET
         */
        pourcentagePayeurSurInteret: number;
        /**
         * POURCENTAGE PAYEUR SUR AMORTISSEMENT
         */
        prcentagePayeurSurAmortissement: number;
        /**
         * POURCENTAGE PAYEUR SUR ASSUR ACCESS
         */
        pourcentagePayeurSurAssurAccess: number;
        /**
         * Référence Unique Mandat
         */
        referenceUniqueMandat: string;
    }
    interface IElementCalculGarantie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvraccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IMAJAvenantFinancier {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: boolean;
        /**
         * CD ETAT GARANTIE PAR RAPPORT AVENANT
         */
        cdEtatGarantieParRapportAvenant: string;
        /**
         * CD ETAT ASSUR. PAR RAPPORT AVENANT
         */
        cdEtatAssurparRapportAvenant: string;
        /**
         * ETAT BRANCHE FINANCIERE
         */
        etatBrancheFinanciere: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit1: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit2: string;
    }
    interface INotationBaleII {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * Identifiant dossier avenant Bale2
         */
        identifiantDossierAvenantBale2: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOperDemandeurNotationBale: string;
        /**
         * NOTATION ENGAGEMENT BALE2
         */
        notationEngagementBale: string;
    }
    interface INumeroAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
    }
    interface ICriteresCreation {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
        credit: ICredit;
        majAvenantFinancier: IMAJAvenantFinancier;
        indicateurBanalise: string;
        creditObjet: ICreditObjet;
    }
    interface IGarantieApplicable {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * LIBELLE NATURE GARANTIE
         */
        libelleNatureGarantie: string;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE ACTE AUTHENTIQUE NATURE GARANTIE
         */
        codeActeAuthNatureGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * DATE DEBUT VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE LONG NATURE GARANTIE
         */
        libelleLongNatureGarantie: string;
        /**
         * CODE HYPOTHETIQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        /**
         * DUREE MAXIMALE DE GARANTIE EN MOIS
         */
        dureeMaximaleGarantie: number;
        /**
         * CODE UTILISATION PACTE COMMISSOIRE
         */
        codeUtilisationPacteCommissoire: string;
    }
    interface IMotifEstimation {
        /**
         * CODE MOTIF RE ESTIMATION
         */
        codeMotifReEstimation: string;
        /**
         * LIBELLE LONG MOTIF
         */
        libelleLongMotif: string;
    }
    interface ICriteresCreationChangePdt {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
        indicateurBanalise: string;
        credit: ICredit;
        majAvenantFinancier: IMAJAvenantFinancier;
        creditObjet: ICreditObjet;
    }
    interface ICreditObjet {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * NUMERO RELATIF OBJET DOSSIER
         */
        numeroRelatifObjetDossier: number;
        /**
         * CODE USAGE DE L'OBJET
         */
        codeUsageLObjet: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
        /**
         * LIBELLE TYPE OBJET REGLEMENTE - TOR
         */
        libelleTypeObjetReglementeTor: string;
        /**
         * CODE UTILISATION OBJET DANS CREDIT
         */
        codeUtilisationObjetDansCredit: string;
        /**
         * MONTANT DE L OPERATION
         */
        montantLOperation: number;
        /**
         * COUT HORS TAXE DE L'OBJET
         */
        coutHorsTaxeLObjet: number;
        /**
         * COUT TTC DE L'OBJET
         */
        coutTtcLObjet: number;
        /**
         * Montant FRAIS NOTAIRE
         */
        montantFraisNotaire: number;
        /**
         * INTEGRATION FRAIS NOTAIRE
         */
        integrationFraisNotaire: string;
        /**
         * MONTANT FRAIS DIVERS
         */
        montantFraisDivers: number;
        /**
         * INTEGRATION FRAIS DIVERS
         */
        integrationFraisDivers: string;
        /**
         * Mt inscriptions hypothéc existantes
         */
        mtInscriptionHypothecExistantes: number;
        /**
         * CODE PRIX DU MARCHE
         */
        codePrixMarche: string;
        /**
         * CODE MODALITE D'OCCUPATION
         */
        codeModaliteOccupation: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * CODE GARANTIE ACHEVEMENT TRAVAUX
         */
        codeGarantieAchevementTravaux: string;
        /**
         * TYPE ZONE FRANCHE
         */
        typeZoneFranche: string;
        /**
         * CODE ZONE GEOGRAPHIQUE
         */
        codeZoneGeographique: string;
        /**
         * NOMBRE LOGEMENTS DANS OBJET
         */
        nombreLogementsDansObjet: number;
        /**
         * ADRESSE ligne1
         */
        adresseLigne1: string;
        /**
         * ADRESSE ligne2
         */
        adresseLigne2: string;
        /**
         * ADRESSE ligne3
         */
        adresseLigne3: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * ADRESSE ligne 1 suite
         */
        adresseLigneSuite6: string;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * REFERENCE EXTERNE OBJET
         */
        referenceExterneObjet: string;
        /**
         * IDENTIFIANT VENDEUR
         */
        identifiantVendeur: string;
        /**
         * CODE QUALITE DE MARCHE
         */
        codeQualiteMarche: string;
        /**
         * MONTANT VALEUR OBJET
         */
        montantValeurObjet: number;
        /**
         * SURFACE HABITABLE EN M2
         */
        surfaceHabitableEnM2: number;
        /**
         * Code mise en oeuvre du projet
         */
        codeMiseEnOeuvreProjet: string;
        /**
         * CODE TYPE LOGEMENT
         */
        codeTypeLogement: string;
        /**
         * DATE ESTIMATION VALEUR OBJET
         * Type date au format yyyy-MM-dd
         */
        dateEstimationValeurObjet: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * SURFACE DU TERRAIN EN M2
         */
        surfaceTerrainEnM2: number;
        /**
         * Mode d'acquisition
         */
        modeAcquisition: string;
        /**
         * DATE D'ACQUISITION DU TERRAIN
         * Type date au format yyyy-MM-dd
         */
        dateAcquisitionTerrain: string;
        /**
         * COUT D'ACQUISITION
         */
        coutAcquisition: number;
        /**
         * DATE ESTIM VALEUR OBJET prudentielle
         * Type date au format yyyy-MM-dd
         */
        dateEstimValeurObjetPrudentiel: string;
        /**
         * Mode estimation valeur terrain
         */
        modeEstimationValeurTerrain: string;
        /**
         * CODE CLASSE BAFI
         */
        codeClasseBafi: string;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        categorieReglementAttribution: string;
        /**
         * CODE TYPE DE MARCHE PERSONNE
         */
        codeTypeMarchePersonne: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * code typologie cadre fiscal
         */
        codeTypologieCadreFiscal: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
    }
    interface IVersementAttenduSurObjet {
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * IDENTIFIANT DOSSIER INSTRUCTION
         */
        identifiantDossierInstruction: string;
        /**
         * NUMERO RELATIF OBJET DOSSIER
         */
        numeroRelatifObjetDossier: number;
        /**
         * TYPE DE VERSEMENT
         */
        typeVersement: string;
        /**
         * MONTANT VERSEMENT ATTENDU
         */
        montantVersementAttendu: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DATE DEBUT VERSEMENT ATTENDU
         * Type date au format yyyy-MM-dd
         */
        dateDebutVersementAttendu: string;
        /**
         * DATE FIN VERSEMENT ATTENDU
         * Type date au format yyyy-MM-dd
         */
        dateFinVersementAttendu: string;
        /**
         * CODE PERIODICITE
         */
        codePeriodicite: string;
    }
    interface ICaracteristiqueGar {
        criteresRecherche: ICriteresRecherche;
        dossier: IDossier;
        credit: ICredit;
        personnesAssurableOuGarant: Array<IPersonneAssurableOuGarant>;
        personnesAssurees: Array<IPersonneAssuree>;
        motifsReserveOuExclusion: Array<IMotifReserveOuExclusion>;
        convsApplicablesEmprunteur: Array<IConventionApplicableEmprunteur>;
        conventionsApplicablesCredit: Array<IConventionAssurance>;
        conventionsApplicablesObjet: Array<IConventionApplicableObjet>;
        accessoiresParConvention: Array<IAccessoireParConvention>;
        encoursPersonneConvention: Array<IEncoursPersonneConvention>;
        derogations: Array<IDerogation>;
        compagniesAssurance: Array<ICompagnieAssurance>;
        retourQR: Array<IRetourQR>;
        creditBis: ICreditBis;
        creditTer: ICreditTer;
        conventionsAssurances: Array<IConventionAssurance>;
        personnesAssurableOuGarantBis: Array<IPersonneAssurableOuGarant>;
        notationBaleII: INotationBaleII;
        numeroAvenant: INumeroAvenant;
        criteresCreation: ICriteresCreation;
        compteurMiseJour: number;
        criteresCreationChangePdt: ICriteresCreationChangePdt;
    }
    interface IServiceObjet {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * CODE UTILISATION OBJET DANS CREDIT
         */
        codeUtilisationObjetDansCredit: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * REGLE DATE EFFET ASSUR PARAMETRABLE
         */
        regleDateEffetAssurParametrable: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjet: string;
    }
    interface IAccessoireServiceObjet {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT ASSIETTE ACESSOIRE FIXEE CONTRACT
         */
        mtAssietteAccFixeeContract: number;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvrAccessoire: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.Caracteristique {
    interface ISimulation {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * LIBELLE LONG PROFIL RENEGOCIATION
         */
        libelleLongProfilRenegociation: string;
        /**
         * LIBELLE TYPE MODIFICATION
         */
        libelleTypeModification: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * LIBELLE ETAT SIMUL / AVENANT
         */
        libelleEtatSimulAvenant: string;
        /**
         * CODE MOTIF ANNULATION MODIFICATION
         */
        codeModifAnnulationModification: string;
        /**
         * DATE ANNULATION MODIFICATION
         * Type date au format yyyy-MM-dd
         */
        dateAnnulationModification: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * ETAT CREDIT EDG / Avenant
         */
        etatCreditEdgAvenant: string;
        /**
         * ETAT BRANCHE FINANCIERE
         */
        etatBrancheFinanciere: string;
        /**
         * CD ETAT GARANTIE PAR RAPPORT AVENANT
         */
        cdEtatGarantieParRapportAvenant: string;
        /**
         * CD ETAT ASSUR. PAR RAPPORT AVENANT
         */
        cdEtatAssurparRapportAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgavenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE SECURISATIO
         */
        etatBranchAccessoireSecurisatio: string;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DATE DERNIERE EDITION
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEdition: string;
        /**
         * DATE MINIMUM D'ACCEPTATION
         * Type date au format yyyy-MM-dd
         */
        dateMinimumAcceptation: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEmission: string;
        /**
         * DATE DE RECEPTION OFFRE PAR CLIENT
         * Type date au format yyyy-MM-dd
         */
        dateReceptionOffreClient: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DATE CREATION DEMANDE RECEVABILITE
         * Type date au format yyyy-MM-dd
         */
        dateCreationDemandeRecevabilite: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: boolean;
        /**
         * CODE Modification Avenant/Simulation
         */
        codeModifAvenantSimulation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * CODE ORIGINE CREDIT OU DOSSIER
         */
        codeOrigineCreditDossier: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * NOTATION ENGAGEMENT BALE2
         */
        notationEngagementBale: string;
        /**
         * Identifiant dossier avenant Bale2
         */
        identifiantDossierAvenantBale2: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOpeDemandeurNotationBale: string;
        /**
         * ETAT BRANCHE PERSONNE
         */
        etatBranchePersonne: string;
        /**
         * ETAT BRANCHE PAYEUR
         */
        etatBranchePayeur: string;
        /**
         * ETAT BRANCHE DONNEES VERSEMENT D'EDG
         */
        etatBrancheDonneesVersementEdg: string;
        /**
         * ETAT BRANCHE ECHEANCIER DE VERSEMENT
         */
        etatBrancheEcheancierVersement: string;
        /**
         * ETAT BRANCHE DONNEES COMPLEMENTAIRES
         */
        etatBranchDonnesComplementaires: string;
        /**
         * ETAT BRANCHE OBJET
         */
        etatBrancheObjet: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * IDENTIFIANT DOSSIER COMMERCIAL
         */
        identifiantDossierCommercial: string;
        /**
         * Code existence crédit taux révisable
         */
        codeExistenceCreditTxRevisable: string;
        /**
         * CODE ETAT Branche Service
         */
        codeEtatBrancheService: string;
        /**
         * IDENTIFIANT agent délégateur
         */
        identifiantAgentDelegateur: string;
        /**
         * code indic signr elect
         */
        codeIndicSignrElect: string;
    }
    interface INotationBale2 {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * Identifiant dossier avenant Bale2
         */
        identifiantDossierAvenantBale2: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOpeDemandeurNotationBale: string;
        /**
         * NOTATION ENGAGEMENT BALE2
         */
        notationEngagementBale: string;
    }
    interface ICriteresModification {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
        simulation: ISimulation;
        avenant: IAvenant;
        editions: Array<IEdition>;
        personneSignataireAvenants: Array<IPersonneSignataireAvenant>;
    }
    interface IAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * LIBELLE LONG PROFIL RENEGOCIATION
         */
        libelleLongProfilRenegociation: string;
        /**
         * LIBELLE TYPE MODIFICATION
         */
        libelleTypeModification: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * LIBELLE ETAT SIMUL / AVENANT
         */
        libelleEtatSimulAvenant: string;
        /**
         * CODE MOTIF ANNULATION MODIFICATION
         */
        codeModifAnnulationModification: string;
        /**
         * DATE ANNULATION MODIFICATION
         * Type date au format yyyy-MM-dd
         */
        dateAnnulationModification: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * ETAT CREDIT EDG / Avenant
         */
        etatCreditEdgAvenant: string;
        /**
         * ETAT BRANCHE FINANCIERE
         */
        etatBrancheFinanciere: string;
        /**
         * CD ETAT GARANTIE PAR RAPPORT AVENANT
         */
        cdEtatGarantieParRapportAvenant: string;
        /**
         * CD ETAT ASSUR. PAR RAPPORT AVENANT
         */
        cdEtatAssurparRapportAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgavenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE SECURISATIO
         */
        etatBranchAccessoireSecurisatio: string;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DATE DERNIERE EDITION
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEdition: string;
        /**
         * DATE MINIMUM D'ACCEPTATION
         * Type date au format yyyy-MM-dd
         */
        dateMinimumAcceptation: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEmission: string;
        /**
         * DATE DE RECEPTION OFFRE PAR CLIENT
         * Type date au format yyyy-MM-dd
         */
        dateReceptionOffreClient: string;
        /**
         * CD TRAITEMENT MODIFICATION EFFECTUE
         */
        cdTraitementModifEffectue: string;
        /**
         * ETAT BRANCHE PERSONNE
         */
        etatBranchePersonne: string;
        /**
         * ETAT BRANCHE PAYEUR
         */
        etatBranchePayeur: string;
        /**
         * ETAT BRANCHE DONNEES VERSEMENT D'EDG
         */
        etatBrancheDonneesVersementEdg: string;
        /**
         * ETAT BRANCHE ECHEANCIER DE VERSEMENT
         */
        etatBrancheEcheancierVersement: string;
        /**
         * ETAT BRANCHE DONNEES COMPLEMENTAIRES
         */
        etatBranchDonneesComplementairs: string;
        /**
         * DATE LIMITE RETRACTATION OFFRE
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetractationOffre: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: boolean;
        /**
         * CODE Modification Avenant/Simulation
         */
        codeModifAvenantSimulation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * ETAT BRANCHE CHOIX Prescripteur
         */
        etatBrancheChoixPrescripteur: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * CODE ORIGINE CREDIT OU DOSSIER
         */
        codeOrigineCreditDossier: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * NOTATION ENGAGEMENT BALE2
         */
        notationEngagementBale: string;
        /**
         * Identifiant dossier avenant Bale2
         */
        identifiantDossierAvenantBale2: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOpeDemandeurNotationBale: string;
        /**
         * ETAT BRANCHE OBJET
         */
        etatBrancheObjet: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * IDENTIFIANT DOSSIER COMMERCIAL
         */
        identifiantDossierCommercial: string;
        /**
         * Code existence crédit taux révisable
         */
        codeExistenceCreditTxRevisable: string;
        /**
         * CODE ETAT Branche Service
         */
        codeEtatBrancheService: string;
        /**
         * IDENTIFIANT agent délégateur
         */
        identifiantAgentDelegateur: string;
        /**
         * code indic signr elect
         */
        codeIndicSignrElect: string;
    }
    interface IEdition {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE EDITION PROPOSITION
         */
        codeEditionProposition: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * CODE TYPE EDITION
         */
        codeTypeEdition: string;
        /**
         * CODE EDITION CLIENT
         */
        codeEditionClient: string;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: boolean;
        /**
         * Identifiant annexe
         */
        identifiantAnnexe: string;
        /**
         * Code type annexe
         */
        codeTypeAnnexe: string;
        /**
         * DATE DERNIERE EDITION
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEdition: string;
    }
    interface IReponseEdition {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE EDITION PROPOSITION
         */
        codeEditionProposition: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * CODE TYPE EDITION
         */
        codeTypeEdition: string;
        /**
         * CODE EDITION CLIENT
         */
        codeEditionClient: string;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: boolean;
        /**
         * Identifiant annexe
         */
        identifiantAnnexe: string;
        /**
         * Code type annexe
         */
        codeTypeAnnexe: string;
        /**
         * CODE DOCUMENT
         */
        codeDocument: string;
        /**
         * LIBELLE DOCUMENT
         */
        libelleDocument: string;
        /**
         * LIBELLE DOCUMENT WORD
         */
        libelleDocumentWord: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
    }
    interface ICriteresHistoLecture {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ETAPE DOSSIER credit
         */
        codeEtapeDossierCredit: string;
        /**
         * Identifiant générique Dossier crédit
         */
        idGeneriqueDossierCredit: string;
        /**
         * NUMERO GENERIQUE DOSSIER CREDIT
         */
        numeroGeneriqueDossierCredit: number;
        /**
         * CODE EVENEMENT DECLENCHEUR
         */
        codeEvenementDeclencheur: string;
        /**
         * CODE EVENEMENT DECLENCHEUR1
         */
        codeEvenementDeclencheur1: string;
        /**
         * CODE EVENEMENT DECLENCHEUR2
         */
        codeEvenementDeclencheur2: string;
        /**
         * CODE EVENEMENT DECLENCHEUR3
         */
        codeEvenementDeclencheur3: string;
        /**
         * CODE EVENEMENT DECLENCHEUR4
         */
        codeEvenementDeclencheur4: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
    }
    interface IHistoriqueEvenement {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ETAPE DOSSIER credit
         */
        codeEtapeDossierCredit: string;
        /**
         * Identifiant générique Dossier crédit
         */
        idGeneriqueDossierCredit: string;
        /**
         * NUMERO GENERIQUE DOSSIER CREDIT
         */
        numeroGeneriqueDossierCredit: number;
        /**
         * CODE EVENEMENT DECLENCHEUR
         */
        codeEvenementDeclencheur: string;
        /**
         * Numéro séquence évenement
         */
        numeroSequenceEvenement: number;
        /**
         * CODE TYPE EVENEMENT DOSSIER CREDIT
         */
        codeTypeEvenementDossierCredit: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * Idt générique second dossier credit
         */
        idtGeneriqueSecondDossierCredit: string;
        /**
         * LIBELLE EVENEMENT DECLENCHEUR
         */
        libelleEvenementDeclencheur: string;
        /**
         * LIBELLE COMMENTAIRE EVENEMENT
         */
        libelleCommentaireEvenement: string;
        /**
         * CODE ORIGINE HISTORIQUE EVENEMENT
         */
        codeOrigineHistoriqueEvenement: string;
        /**
         * IDT ENTITE SAISISSEUSE EVENEMENT
         */
        idtEntiteSaisisseuseEvenement: string;
        /**
         * LIBELLE LONG ENTITE SAISISSEUSE EVT
         */
        libelleLongEntiteSaisisseuseEvt: string;
        /**
         * LIBELLE TIMESTAMP
         */
        libelleTimestamp: string;
    }
    interface IPersonneSignataireAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * IDENTIFIANT PERSONNE / emprunteur
         */
        identifiantPersonneEmprunteur: string;
        /**
         * code indic pers autor sign Elect
         */
        codeIndicPersAutorSignElect: string;
    }
    interface ICriteresMiseAJour {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        histoMiseAJour: IHistoMiseAJour;
        indicateurInitMAJ: IIndicateurInitMAJ;
    }
    interface IHistoMiseAJour {
        /**
         * CODE ETAPE DOSSIER credit
         */
        codeEtapeDossierCredit: string;
        /**
         * Identifiant générique Dossier crédit
         */
        idGeneriqueDossierCredit: string;
        /**
         * NUMERO GENERIQUE DOSSIER CREDIT
         */
        numeroGeneriqueDossierCredit: number;
        /**
         * CODE EVENEMENT DECLENCHEUR
         */
        codeEvenementDeclencheur: string;
        /**
         * CODE TYPE EVENEMENT DOSSIER CREDIT
         */
        codeTypeEvenementDossierCredit: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * Idt générique second dossier credit
         */
        idtGeneriqueSecondDossierCredit: string;
        /**
         * LIBELLE EVENEMENT DECLENCHEUR
         */
        libelleEvenementDeclencheur: string;
        /**
         * LIBELLE COMMENTAIRE EVENEMENT
         */
        libelleCommentaireEvenement: string;
        /**
         * CODE ORIGINE HISTORIQUE EVENEMENT
         */
        codeOrigineHistoriqueEvenement: string;
        /**
         * IDT ENTITE SAISISSEUSE EVENEMENT
         */
        idtEntiteSaisisseuseEvenement: string;
        /**
         * LIBELLE LONG ENTITE SAISISSEUSE EVT
         */
        libelleLongEntiteSaisisseuseEvt: string;
    }
    interface IIndicateurInitMAJ {
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * code indic signr elect
         */
        codeIndicSignrElect: string;
    }
    interface ICaracteristique extends IElementGestion {
        criteresModification: ICriteresModification;
        notationBale2: INotationBale2;
        reponseEdition: Array<IReponseEdition>;
        criteresHistoLecture: ICriteresHistoLecture;
        historiquesEvenements: Array<IHistoriqueEvenement>;
        criteresMiseAJour: ICriteresMiseAJour;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.Edition {
    interface IEdition {
        listeElementCalculAccessoires: Array<IElementCalculAccessoires>;
    }
    interface IElementCalculAccessoires {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT ASSIETTE ACESSOIRE FIXEE CONTRACT
         */
        mtAssietteAccessoireContractuel: number;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessoireRecouvrement: number;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelEcheance: string;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireCalculTeg: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * MONTANT PRIME ASSURANCE
         */
        montantPrimeAssurance: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * MONTANT ACCESSOIRE
         */
        montantAccessoire: number;
        /**
         * MONTANT ACCESSOIRE INCLUS TEG
         */
        montantAccessoireInclusTeg: number;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.Garanties {
    interface ICriteresLecture {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        avenant: IAvenant;
        conventionApplicable: IConventionApplicable;
        phases: Array<IPhase>;
    }
    interface IAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: string;
        /**
         * CODE type d'appel
         */
        codeTypeAppel: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
    }
    interface IVersementAttendusGarantie {
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * IDENTIFIANT DOSSIER INSTRUCTION
         */
        identifiantDossierInstruction: string;
        /**
         * NUMERO RELATIF OBJET DOSSIER
         */
        numeroRelatifObjetDossier: number;
        /**
         * TYPE DE VERSEMENT
         */
        typeVersement: string;
        /**
         * MONTANT VERSEMENT ATTENDU
         */
        montantVersementAttendu: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DATE DEBUT VERSEMENT ATTENDU
         * Type date au format yyyy-MM-dd
         */
        dateDebutVersementAttendu: string;
        /**
         * DATE FIN VERSEMENT ATTENDU
         * Type date au format yyyy-MM-dd
         */
        dateFinVersementAttendu: string;
        /**
         * CODE PERIODICITE
         */
        codePeriodicite: string;
    }
    interface IGarantieExistante {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * ACTE AUTHENTIQUE SUR GARANTIE
         */
        acteAuthentiqueSurGarantie: string;
        /**
         * REDACTEUR DE L'ACTE
         */
        redacteurActe: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * IDENTIFIANT GARANT
         */
        identifiantGarant: string;
        /**
         * CAPITAL COUVERT / GARANTIE
         */
        capitalCouvertGarantie: number;
        /**
         * POURCENTAGE DU CREDIT COUVERT
         */
        pourcentageCreditCouvert: number;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * DATE ENVOI DOSSIER GARANTIE
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiDossierGarantie: string;
        /**
         * Code anciennete assurance / garantie
         */
        codeAncienneteAssuranceGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * CODE HYPOTHEQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        natureGarantieExistante: INatureGarantieExistante;
    }
    interface ICreditAvenantGarantie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit1: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * CODE MODIFICATION AUTORISEE
         */
        codeModificationAutorisee: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * DATE D'EFFET DU CONTRAT
         * Type date au format yyyy-MM-dd
         */
        dateEffetContrat: string;
        /**
         * MONTANT DE LA GARANTIE
         */
        montantGarantie: number;
        /**
         * MONTANT DE LA GARANTIE
         */
        montantGarantie1: number;
    }
    interface IPhaseCreditAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DUREE AJUSTEE PHASE CREDIT
         */
        dureeAjusteePhaseCredit: number;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
    }
    interface IGarantieSureteReelle {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * COMMENTAIRE GARANTIE
         */
        commentaireGarantie: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * RANG DE L'HYPOTHEQUE
         */
        rangHypotheque: number;
        /**
         * MT COUVERT HYPOTHEQUE RANG ANTERIEUR
         */
        mtHypothequeRangAnterieur: number;
        /**
         * MONTANT VALEUR OBJET
         */
        montantValeurObjet: number;
        /**
         * DATE ESTIMATION VALEUR OBJET
         * Type date au format yyyy-MM-dd
         */
        dateEstimationValeurObjet: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * ADRESSE ligne1
         */
        adresseLigne1: string;
        /**
         * ADRESSE ligne 1 suite
         */
        adresseLigneSuite6: string;
        /**
         * ADRESSE ligne2
         */
        adresseLigne2: string;
        /**
         * ADRESSE ligne3
         */
        adresseLigne3: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * REFERENCE EXTERNE OBJET
         */
        referenceExterneObjet: string;
        /**
         * REFERENCE TYPE DE LOT
         */
        referenceTypeLot: string;
        /**
         * DETAIL DE L'OPERATION IMMOBILIERE
         */
        detailLOperationImmobiliere: string;
        /**
         * CODE TYPE LOGEMENT
         */
        codeTypeLogement: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * SURFACE HABITABLE EN M2
         */
        surfaceHabitableEnM2: number;
        /**
         * SURFACE DU TERRAIN EN M2
         */
        surfaceTerrainEnM2: number;
        /**
         * DATE FIN DE CONSTRUCTION OBJET
         * Type date au format yyyy-MM-dd
         */
        dateFinConstructionObjet: string;
        /**
         * CODE ZONE IMPLANTATION/SITUATION
         */
        codeZoneImplantationsituation: string;
        /**
         * CODE QUALITE DE L'EMPLACEMENT
         */
        codeQualiteLEmplacement: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet1: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet2: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet3: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet4: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet5: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet6: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet7: string;
        /**
         * CODE VERSEMENT ATTENDU
         */
        codeVersementAttendu: string;
        /**
         * DATE DE DEGREVEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDegrevement: string;
        /**
         * TYPOLOGIE DE L'OBJET
         */
        typologieLObjet: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * CODE MODALITE DE L'ESTIMATION (prud)
         */
        codeModaliteLEstimationPrud: string;
        /**
         * CODE MOTIF RE ESTIMATION
         */
        codeMotifReEstimation: string;
        /**
         * CODE MOTIF RE ESTIMATION(prudentiel)
         */
        codeMotifReEstimationPrud: string;
        /**
         * DATE ESTIM VALEUR OBJET prudentielle
         * Type date au format yyyy-MM-dd
         */
        dateEstimValeurObjetPrud: string;
        /**
         * MONTANT VALEUR OBJET (pru)
         */
        montantValeurObjetPrud: number;
        /**
         * CODE CESSION DE RANG HYPOTHEQUE
         */
        codeCessionRangHypotheque: string;
        /**
         * Identifiant GARANTIE
         */
        identifiantGarantie1: string;
        /**
         * DUREE VALIDITE GARANTIE
         */
        dureeValiditeGarantie: number;
        /**
         * CODE VALEUR PACTE COMMISSOIRE
         */
        codeValeurPacteCommissoire: string;
        /**
         * NUM SECOND. RANG DE L'HYPOTHEQUE
         */
        numSecondrangLHypotheque: number;
        /**
         * LIBELLE LONG VILLE CONSERVATION HYPO
         */
        libelleLongVilleConservatHypo: string;
        /**
         * DATE DE PUBLICATION
         * Type date au format yyyy-MM-dd
         */
        datePublication: string;
        /**
         * LIBELLE LONG REFERENCE DU VOLUME
         */
        libelleLongReferenceVolume: string;
        /**
         * NUMERO DU VOLUME
         */
        numeroVolume: number;
        /**
         * MT HYPOTHEQUE DISPONIBLE
         */
        mtHypothequeDisponible: number;
        /**
         * DATE DU MONTANT HYPO DISPONIBLE
         * Type date au format yyyy-MM-dd
         */
        dateMontantHypoDisponible: string;
        /**
         * CODE GARANTIE RECHARGEABLE EXTERNE
         */
        codeGarantieRechargeableExterne: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * CODE DEVISE GARANTIE
         */
        codeDeviseGarantie: string;
    }
    interface IElementCalculGarantie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvraccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IDescriptionObjetFinance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * REFERENCE EXTERNE OBJET
         */
        referenceExterneObjet: string;
        /**
         * ADRESSE ligne1
         */
        adresseLigne1: string;
        /**
         * ADRESSE ligne 1 suite
         */
        adresseLigneSuite6: string;
        /**
         * ADRESSE ligne2
         */
        adresseLigne2: string;
        /**
         * ADRESSE ligne3
         */
        adresseLigne3: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * MONTANT VALEUR OBJET
         */
        montantValeurObjet: number;
        /**
         * DATE ESTIMATION VALEUR OBJET
         * Type date au format yyyy-MM-dd
         */
        dateEstimationValeurObjet: string;
        /**
         * REFERENCE TYPE DE LOT
         */
        referenceTypeLot: string;
        /**
         * DETAIL DE L'OPERATION IMMOBILIERE
         */
        detailLOperationImmobiliere: string;
        /**
         * CODE TYPE LOGEMENT
         */
        codeTypeLogement: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * SURFACE HABITABLE EN M2
         */
        surfaceHabitableEnM2: number;
        /**
         * SURFACE DU TERRAIN EN M2
         */
        surfaceTerrainEnM2: number;
        /**
         * DATE FIN DE CONSTRUCTION OBJET
         * Type date au format yyyy-MM-dd
         */
        dateFinConstructionObjet: string;
        /**
         * CODE ZONE IMPLANTATION/SITUATION
         */
        codeZoneImplantParSituation: string;
        /**
         * CODE QUALITE DE L'EMPLACEMENT
         */
        codeQualiteLEmplacement: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet1: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet2: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet3: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet4: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet5: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet6: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet7: string;
        /**
         * CODE VERSEMENT ATTENDU
         */
        codeVersementAttendu: string;
        /**
         * DATE DE DEGREVEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDegrevement: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * CODE MODALITE DE L'ESTIMATION (prud)
         */
        codeModaliteLEstimationPrud: string;
        /**
         * CODE MOTIF RE ESTIMATION
         */
        codeMotifReEstimation: string;
        /**
         * CODE MOTIF RE ESTIMATION(prudentiel)
         */
        codeMotifReEstimationPrud: string;
        /**
         * DATE ESTIM VALEUR OBJET prudentielle
         * Type date au format yyyy-MM-dd
         */
        dateEstimValeurObjetPrud: string;
        /**
         * MONTANT VALEUR OBJET (pru)
         */
        montantValeurObjetPrud: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
    }
    interface IDeviseDossier {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * IDENTIFIANT DOSSIER COMMERCIAL
         */
        codeDossier: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
    }
    interface IAccessoireProduit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        noRegleApplicationAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire1: string;
        /**
         * NUMERO REGLE DE CALCUL ELEMENT
         */
        numeroRegleCalculElement: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessoireRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireCalculTxEffGlobal: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * Indicateur Accessoire Obligatoire
         */
        indicateurAccessoireObligatoire: string;
        /**
         * Indicateur Accessoire Validé
         */
        indicateurAccessoireValide: string;
        /**
         * Indicateur Accessoire Annulé AV
         */
        indicateurAccessoireAnnuleAv: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nbEcheancesAccessoiresReport: number;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire1: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire2: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire3: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire4: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * LIBELLE TYPE ASSIETE DE CALCUL
         */
        libelleTypeAssieteCalcul: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAccessoi: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * REGLE DATE DEBUT APPLI ACC catalogue
         */
        regleDateDebutAppliAccCatalogue: string;
        /**
         * REGLE EVENEMENT DECH. 1ER APPEL cata
         */
        regleEvenementDech1erAppelCata: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccessoi: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaParRecouvraccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * Code indicateur bornes dérogées
         */
        codeIndicateurBornesDerogees: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IParamModaliteMotifEstimation {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * TYpe D'ESTIMATION
         */
        typeEstimation: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * CODE MOTIF RE ESTIMATION
         */
        codeMotifReEstimation: string;
    }
    interface IGarantieSuretePerso {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * DUREE VALIDITE GARANTIE
         */
        dureeValiditeGarantie: number;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * NUMERO EXTERNE DE LA GARANTIE
         */
        numeroExterneGarantie: string;
    }
    interface IPersonneAssurableOuGarant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
    }
    interface IConventionApplicableCredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE ASSURANCE
         */
        codeTypeAssurance: string;
        /**
         * LIBELLE COURT TYPE ASSURANCE
         */
        libelleCourtTypeAssurance: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * MT MINIMUM CREDIT / CONVENTION
         */
        mtMinimumCreditParConvention: number;
        /**
         * MT MAXIMUM CREDIT / CONVENTION
         */
        mtMaximumCreditParConvention: number;
        /**
         * UNITE PERIODE CONDIT OBTENTION CONV.
         */
        unitePeriodeConditObtentionConv: string;
        /**
         * DUREE MINI CREDIT / OBTENTION CONV.
         */
        dureeMiniCreditParObtentionConv: number;
        /**
         * DUREE MAXI CREDIT / OBTENTION CONV
         */
        dureeMaxiCreditParObtentionConv: number;
        /**
         * CD MODE EXPRESSION GARANTIE ACCORDEE
         */
        cdModeExpressionGaranAccordee: string;
        /**
         * QUOTITE MINIMUM PAR BENEFICIAIRE
         */
        quotiteMinimumParBeneficiaire: number;
        /**
         * QUOTITE MAXIMUM PAR BENEFICIAIRE
         */
        quotiteMaximumParBeneficiaire: number;
        /**
         * PAS DE QUOTITE PAR BENEFICIAIRE
         */
        pasQuotiteParBeneficiaire: number;
        /**
         * MONTANT MINIMUM GARANTI PAR TETE
         */
        montantMinimumGarantiParTete: number;
        /**
         * MONTANT MAXIMUM GARANTI PAR TETE
         */
        montantMaximumGarantiParTete: number;
        /**
         * PAS DE MONTANT GARANTI PAR TETE
         */
        pasMontantGarantiParTete: number;
        /**
         * CODE TIERS GARANTI
         */
        codeTiersGaranti: string;
        /**
         * CODE TYPE OBJET AUTORISE
         */
        codeTypeObjetAutorise: string;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM COUVERTURE ASSURANCE
         */
        ageMaximumCouvertureAssurance: number;
        /**
         * CD POSSIBILITE EXTENSION COUVERTURE
         */
        cdPossibiliteExtensionCouv: string;
        /**
         * MONTANT MAXIMUM ENCOURS GARANTI
         */
        montantMaximumEncoursGaranti: number;
        /**
         * DUREE MAXI PREFI POUR CONVENTION
         */
        dureeMaxiPrefiPourConvention: number;
        /**
         * DUREE MAXI DIF TOTAL POUR CONVENTION
         */
        dureeMaxiDifTotalPourConvention: number;
        /**
         * DUREE MAXI DIF AMORT POUR CONVENTION
         */
        dureeMaxiDifAmortPourConvention: number;
        /**
         * DUREE MAXI AMORTISS. POUR CONVENTION
         */
        dureeMaxiAmortisspourConvention: number;
        /**
         * MONTANT PLAFOND ENCOURS DELEGATION
         */
        montantPlafondEncoursDelegation: number;
        /**
         * REGLE DATE EFFET ASSUR. - GARANTIE
         */
        regleDateEffetAssurgarantie: string;
        /**
         * AGE MAXIMUM COUVERTURE EN EXTENSION
         */
        ageMaximumCouvertureEnExtension: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE DE RESTITUTION
         */
        codeRestitution: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
    }
    interface IAccessoireParConvention {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * TAUX ACCESSOIRE PERSONNES AGEES
         */
        tauxAccessoirePersonnesAgees: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccessoi: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccessoi: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        noRegleApplicationAccessoire: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * DUREE APPLICATION ACCESS.
         */
        dureeApplicationAccess: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IGarantieApplicable {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * LIBELLE NATURE GARANTIE
         */
        libelleNatureGarantie: string;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE ACTE AUTHENTIQ NATURE GARANTIE
         */
        codeActeAuthentiqNatureGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * DATE DEBUT VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE LONG NATURE GARANTIE
         */
        libelleLongNatureGarantie: string;
        /**
         * CODE HYPOTHEQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        /**
         * DUREE MAXIMALE DE GARANTIE EN MOIS
         */
        dureeMaximaleGarantieEnMois: number;
        /**
         * CODE UTILISATION PACTE COMMISSOIRE
         */
        codeUtilisationPacteCommissoire: string;
    }
    interface IObjetCommerciaux {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        categorieReglementaireAttrib: string;
    }
    interface IInformationPays {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * LIBELLE PAYS DE LOCALISATION
         */
        libellePaysLocalisation: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
    }
    interface IObjetReglemente {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
        /**
         * LIBELLE TYPE OBJET REGLEMENTE - TOR
         */
        libelleTypeObjetReglementeTor: string;
    }
    interface IMotifEstimation {
        /**
         * CODE MOTIF RE ESTIMATION
         */
        codeMotifReEstimation: string;
        /**
         * LIBELLE LONG MOTIF
         */
        libelleLongMotif: string;
    }
    interface IObjetNatureGarantie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * TYPOLOGIE DE L'OBJET
         */
        typologieLObjet: string;
    }
    interface IObjetReglementeParCategorie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        categorieReglementaireAttrib: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
    }
    interface ITypologieInstruction {
        /**
         * TYPE DE TYPOLOGIE
         */
        typeTypologie: string;
        /**
         * CODE DE TYPOLOGIE
         */
        codeTypologie: string;
        /**
         * INTITULE
         */
        intitule: string;
    }
    interface IConventionApplicable {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE AVENANT FINANCIER
         */
        codeAvenantFinancier: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        identifiantEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
    }
    interface IPersonneAssurableOuGarantCatalogue {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        numeroCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE NAISSANCE
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
    }
    interface IConventionApplicableCatalogue {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE ASSURANCE
         */
        codeTypeAssurance: string;
        /**
         * LIBELLE COURT TYPE ASSURANCE
         */
        libelleCourtTypeAssurance: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * MT MINIMUM CREDIT / CONVENTION
         */
        mtMinimumCreditConvention: number;
        /**
         * MT MAXIMUM CREDIT / CONVENTION
         */
        mtMaximumCreditConvention: number;
        /**
         * UNITE PERIODE CONDIT OBTENTION CONV.
         */
        unitePeriodeConditObtentionConv: string;
        /**
         * DUREE MINI CREDIT / OBTENTION CONV.
         */
        dureeMiniCreditObtentionConv: number;
        /**
         * DUREE MAXI CREDIT / OBTENTION CONV
         */
        dureeMaxiCreditObtentionConv: number;
        /**
         * CD MODE EXPRESSION GARANTIE ACCORDEE
         */
        cdModeExpressionGarantieAccorde: string;
        /**
         * QUOTITE MINIMUM PAR BENEFICIAIRE
         */
        quotiteMinimumParBeneficiaire: number;
        /**
         * QUOTITE MAXIMUM PAR BENEFICIAIRE
         */
        quotiteMaximumParBeneficiaire: number;
        /**
         * PAS DE QUOTITE PAR BENEFICIAIRE
         */
        pasQuotiteParBeneficiaire: number;
        /**
         * MONTANT MINIMUM GARANTI PAR TETE
         */
        montantMinimumGarantiParTete: number;
        /**
         * MONTANT MAXIMUM GARANTI PAR TETE
         */
        montantMaximumGarantiParTete: number;
        /**
         * PAS DE MONTANT GARANTI PAR TETE
         */
        pasMontantGarantiParTete: number;
        /**
         * CODE TIERS GARANTI
         */
        codeTiersGaranti: string;
        /**
         * CODE TYPE OBJET AUTORISE
         */
        codeTypeObjetAutorise: string;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM COUVERTURE ASSURANCE
         */
        ageMaximumCouvertureAssurance: number;
        /**
         * CD POSSIBILITE EXTENSION COUVERTURE
         */
        cdPosibiliteExtensionCouverture: string;
        /**
         * MONTANT MAXIMUM ENCOURS GARANTI
         */
        montantMaximumEncoursGaranti: number;
        /**
         * DUREE MAXI PREFI POUR CONVENTION
         */
        dureeMaxiPrefiPourConvention: number;
        /**
         * DUREE MAXI DIF TOTAL POUR CONVENTION
         */
        dureeMaxiDifTotalPourConvention: number;
        /**
         * DUREE MAXI DIF AMORT POUR CONVENTION
         */
        dureeMaxiDifAmortPourConvention: number;
        /**
         * DUREE MAXI AMORTISS. POUR CONVENTION
         */
        dureeMaxiAmortisspourConvention: number;
        /**
         * MONTANT PLAFOND ENCOURS DELEGATION
         */
        montantPlafondEncoursDelegation: number;
        /**
         * REGLE DATE EFFET ASSUR. - GARANTIE
         */
        regleDateEffetAssurgarantie: string;
        /**
         * AGE MAXIMUM COUVERTURE EN EXTENSION
         */
        ageMaximumCouvertureEnExtension: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE NATURE DU CAUTIONNEMENT
         */
        codeNatureCautionnement: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE DE RESTITUTION
         */
        codeRestitution: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
    }
    interface IAccessoireConventionCatalogue {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccessoi4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * TAUX ACCESSOIRE PERSONNES AGEES
         */
        tauxAccessoirePersonnesAgees: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccessoi: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccessoi: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numeroRegleApplicationAccessoi: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * AGE MINIMUM ENTREE ASSURANCE
         */
        ageMinimumEntreeAssurance: number;
        /**
         * AGE MAXIMUM ENTREE ASSURANCE
         */
        ageMaximumEntreeAssurance: number;
        /**
         * DUREE APPLICATION ACCESS.
         */
        dureeApplicationAccess: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IFraisGarantieParNature {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE ACCESSOIRE OBLIGATOIRE
         */
        codeAccessoireObligatoire: string;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        noRegleApplicationAccessoire: string;
    }
    interface IPhase {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DUREE AJUSTEE PHASE CREDIT
         */
        dureeAjusteePhaseCredit: number;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
    }
    interface ICriteresGarantiesNature {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        avenant: IAvenant;
    }
    interface ILectureBT02NatureGarantie {
        /**
         * Utilisé pour appeler la SQCA (lecture de la table BT02 écran FOR) pour obtenir la nature de la garantie.
         */
        codeNatureGarantie: string;
    }
    interface INatureGarantieExistante {
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * LIBELLE NATURE GARANTIE
         */
        libelleNatureGarantie: string;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE ACTE AUTHENTIQ NATURE GARANTIE
         */
        codeActeAuthentiqNatureGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * LIBELLE COURT NATURE GARANTIE
         */
        libelleNatureGarantie1: string;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireDansCalculTEG: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * NUMERO RANG GARANTIE
         */
        numeroRangGarantie: number;
        /**
         * DATE DEBUT VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE LONG NATURE GARANTIE
         */
        libelleLongNatureGarantie: string;
        /**
         * CODE HYPOTHEQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        /**
         * Code Hypothèque ou sureté comparable
         */
        codeHypothequeSureteComparable: string;
        /**
         * INDIC IMPACT ASSIETTE COMMISSION
         */
        indicImpactAssietteCommission: string;
        /**
         * INDICATEUR SPECIFIQUE EPS
         */
        indicateurSpecifiqueEps: string;
        /**
         * code indic signr elect garantie
         */
        codeIndicSignrElectGarantie: string;
    }
    interface IGaranties extends IElementGestion {
        accessoireProduit: Array<IAccessoireProduit>;
        creditAvenantGarantie: Array<ICreditAvenantGarantie>;
        criteresLecture: ICriteresLecture;
        descriptionObjetFinance: Array<IDescriptionObjetFinance>;
        deviseDossier: IDeviseDossier;
        elementCalculGarantie: Array<IElementCalculGarantie>;
        garantieExistante: Array<IGarantieExistante>;
        garantieSuretePerso: Array<IGarantieSuretePerso>;
        garantieSureteReelle: Array<IGarantieSureteReelle>;
        accessoireParConventions: Array<IAccessoireParConvention>;
        conventionApplicableCredits: Array<IConventionApplicableCredit>;
        fraisGarantieParNatures: Array<IFraisGarantieParNature>;
        garantieApplicables: Array<IGarantieApplicable>;
        motifEstimations: Array<IMotifEstimation>;
        objetsCommerciaux: Array<IObjetCommerciaux>;
        objetNatureGaranties: Array<IObjetNatureGarantie>;
        objetReglementeParCategories: Array<IObjetReglementeParCategorie>;
        objetsReglementes: Array<IObjetReglemente>;
        informationsPays: Array<IInformationPays>;
        personneAssurableOuGarants: Array<IPersonneAssurableOuGarant>;
        typologieInstructions: Array<ITypologieInstruction>;
        paramModaliteMotifEstimation: Array<IParamModaliteMotifEstimation>;
        phaseCreditAvenant: Array<IPhaseCreditAvenant>;
        versementAttendusGarantie: Array<IVersementAttendusGarantie>;
        personAssurableGarantCatalogues: Array<IPersonneAssurableOuGarantCatalogue>;
        conventionApplicableCatalogues: Array<IConventionApplicableCatalogue>;
        accessoireConventionCatalogues: Array<IAccessoireConventionCatalogue>;
        criteresGarantiesNature: ICriteresGarantiesNature;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.Historique {
    interface ICredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * MONTANT ECHEANCE
         */
        montantEcheance: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE ECHEANCE M.E.R.
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Taux nominal du crédit
         */
        tauxNominalCredit: number;
        /**
         * DATE M.E.R. ZERO
         * Type date au format yyyy-MM-dd
         */
        dateMiseRecouvrementZero: string;
        /**
         * CODE MODE EXPRESSION TAUX
         */
        codeModeExpressionTaux: string;
        /**
         * CODE TAUX DU CREDIT DIRECTEUR
         */
        codeTauxCreditDirecteur: string;
        /**
         * CODE CRISTALLISATION TAUX INTERET
         */
        codeCristallisationTauxInteret: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * MONTANT ECHEANCE M.E.R.
         */
        montantEcheanceMER: number;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * MONTANT ARRIERES INCORPORES AU CRD
         */
        montantArrieresIncorporesCrd: number;
        /**
         * CODE TRAITEMENT FIN DE VERSEMENT
         */
        codeTraitementFinVersement: string;
        /**
         * NUMERO QUANTIEME DATE ECHEANCE
         */
        numeroQuantiemeDateEcheance: number;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * Marge à appliquer sur taux nominal
         */
        margeAppliquerSurTauxNominal: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        montantCapitalRestantSurCredit: number;
        /**
         * CODE TYPE RECALCUL T.A.
         */
        codeTypeRecalculTA: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DATE FIN DE PREFINANCEMENT REELLE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementReelle: string;
        /**
         * CODE INTEGRATION FRAIS AU CRD
         */
        codeIntegrationFraisCrd: string;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * TAUX INDEMNITE R.A.
         */
        tauxIndemniteRA: number;
        /**
         * TAUX INTERET PREFINANCEMENT
         */
        tauxInteretPrefinancement: number;
        /**
         * Code crédit sécurisable
         */
        codeCreditSecurisable: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE presence de revision sur credit
         */
        codePresenceRevisionSurCredit: string;
        /**
         * MONTANT INT. COMP. SUR C.R.D.
         */
        montantIntcompsurCR: number;
        /**
         * CD TYPE ARRIERES INCORPORE AU CRD
         */
        cdTypeArrieresIncorporeCrd: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * Nb maxi période allong pour révision
         */
        nbMaxiPeriodeAllongPourRevision: number;
        /**
         * Nb maxi pér. all. sortie cpt courant
         */
        nbMaxiPerallsortieCptCourant: number;
        /**
         * Nb maxi pér. allong pour modulation
         */
        nbMaxiPerallongPourModulation: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        mtCapitalRestantSurCredit: number;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT GLOBAL GARANTI CREDIT
         */
        montantGlobalGarantiCredit: number;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * DATE D EFFET INITIALE DE l'AVENANT
         * Type date au format yyyy-MM-dd
         */
        dateEffetInitialeLAvenant: string;
        /**
         * DUREE AJUSTEE CREDIT SUITE RECALCUL
         */
        dureeAjusteeCreditSuiteRecalcul: number;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * DATE EMISSION
         * Type date au format yyyy-MM-dd
         */
        dateEmission: string;
        /**
         * DELAI MINIMUM D'ACCEPTATION
         */
        delaiMinimumAcceptation: number;
        /**
         * DELAI DE RETRACTATION
         */
        delaiRetractation: number;
        /**
         * COMMENTAIRE PRODUITS
         */
        commentaireProduits: string;
        /**
         * MONTANT M.A.D. DE FONDS DEMANDEES
         */
        montantMAfondsDemandees: number;
        /**
         * CODE ECHEANCIER VERSEM. CONTRACTUEL
         */
        codeEcheancierVersemcontractuel: string;
        /**
         * Code type de prêt combiné
         */
        codeTypePretCombine: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * Code indicateur integration CRD
         */
        codeIndicateurIntegrationCrd: string;
        /**
         * TAUX INTERETS RETARD IMPAYE
         */
        tauxInteretsRetardImpaye: number;
        /**
         * NUMERO MODALITE DE RA
         */
        numModaliteRembourAnticipe: number;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEmission: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessEdgParAvenant: string;
        /**
         * Existence accessoire bon/maj taux
         */
        existenceAccessBonParMajTaux: string;
        /**
         * Cumul des Bonifications/Majorations
         */
        cumulDesBonifsParMajorations: number;
        phases: Array<IPhase>;
        accessoires: Array<IAccessoire>;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        echeancesReportees: Array<IEcheanceReportee>;
        assurances: Array<IAssurance>;
        garanties: Array<IGarantie>;
    }
    interface IPhase {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * LIBELLE LONG TYPE DE PHASE
         */
        libelleLongTypePhase: string;
        /**
         * DUREE INITIALE PHASE CREDIT
         */
        dureeInitialePhaseCredit: number;
        /**
         * DUREE RESIDUELLE CREDIT
         */
        dureeResiduelleCredit: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * Taux nominal de la phase
         */
        tauxNominalPhase: number;
        /**
         * CODE TAUX DES PALIERS CALCULES
         */
        codeTauxDesPaliersCalcules: string;
        /**
         * TAUX MOYEN PHASE CREDIT
         */
        tauxMoyenPhaseCredit: number;
        /**
         * MODE DE CALCUL AMORTISSEMENT
         */
        modeCalculAmortissement: string;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAmortir: number;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement: string;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * DATE FIN DE PREFINANCEMENT INITIALE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementInitiale: string;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * MODE CAPIT. RECOUV. INTERETS
         */
        modeCapitRecouvInterets: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * NB DE JOURS DANS ANNEE DENOMINATEUR
         */
        nbJoursDansAnneeDenominateur: number;
        /**
         * NB DE JOURS DANS ANNEE NUMERATEUR
         */
        nbJoursDansAnneeNumerateur: number;
        /**
         * CALCUL INTERETS EN JOURS REELS
         */
        calculInteretsEnJoursReels: string;
        /**
         * Prélèvement en fin de phase
         */
        prelevementEnFinPhase: string;
        /**
         * CODE TYPE ECRETAGE
         */
        codeTypeEcretage: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePdt: number;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMiseRecouvreInterets: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        paliers: Array<IPalier>;
        pretsCombines: Array<IPretCombine>;
        paliersTauxAmortissement: Array<IPalierTauxAmortissement>;
        parametresRevisionTaux: Array<IParametreRevisionTaux>;
    }
    interface IPalier {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * TAUX INTERET PALIER
         */
        tauxInteretPalier: number;
        /**
         * TYPE DE REMBOURSEMENT
         */
        typeRemboursement: string;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances: number;
        /**
         * PERIODICITE APPLIC PROGRE ECHEANCE
         */
        periodiciteApplicProgreEcheance: string;
        /**
         * NUMERO RELATIF PALIER / PRODUIT
         */
        numRelatifPalierParProduit: number;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire1: string;
        /**
         * NUMERO REGLE DE CALCUL ELEMENT
         */
        numeroRegleCalculElement: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * Indicateur Accessoire Obligatoire
         */
        indicateurAccessoireObligatoire: string;
        /**
         * Indicateur Accessoire Validé
         */
        indicateurAccessoireValide: string;
        /**
         * Indicateur Accessoire Annulé AV
         */
        indicateurAccessoireAnnuleAv: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire1: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire2: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire3: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire4: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * LIBELLE TYPE ASSIETE DE CALCUL
         */
        libelleTypeAssieteCalcul: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * REGLE DATE DEBUT APPLI ACC catalogue
         */
        regleDateDebutAppliAccCatalogue: string;
        /**
         * REGLE EVENEMENT DECH. 1ER APPEL cata
         */
        regleEvenementDech1erAppelCata: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * Code indicateur bornes dérogées
         */
        codeIndicateurBornesDerogees: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePdt: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numRegleApplicationAccessoire: string;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        cdAccessCalculTxEffectifGlobal: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nombreEcheancesAccessReport: number;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAccess: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaParRecouvrementAccess: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IProduit {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * JOUR DATE ECHEANCE
         */
        jourDateEcheance: string;
        /**
         * CODE TAUX DU CREDIT DIRECTEUR
         */
        codeTauxCreditDirecteur: string;
        /**
         * DATE DE CLOTURE
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * DATE DEBUT SUSPENSION PRODUIT
         * Type date au format yyyy-MM-dd
         */
        dateDebutSuspensionProduit: string;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * MODE EXPRESSION DUREE CREDIT
         */
        modeExpressionDureeCredit: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit1: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit2: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit3: number;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit4: number;
        /**
         * CODE POSSIBILITE DE PREFINANCEMENT
         */
        codePossibilitePrefinancement: string;
        /**
         * CODE POSSIBILITE DIFFERE TOTAL
         */
        codePossibiliteDiffereTotal: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * MONTANT MINIMUM CREDIT
         */
        montantMinimumCredit: number;
        /**
         * MONTANT MAXIMUM CREDIT
         */
        montantMaximumCredit: number;
        /**
         * PAS SUR MONTANT CREDIT
         */
        pasSurMontantCredit: number;
        /**
         * Code type de prêt combiné
         */
        codeTypePretCombine: string;
        /**
         * Code produit révisable
         */
        codeProduitRevisable: string;
        /**
         * Code acc comp. bonification autorise
         */
        codeAccCompbonificationAutorise: string;
        /**
         * CODE CREDIT RELAIS
         */
        codeCreditRelais: string;
        /**
         * CD POSSIBILITE DIFFERE AMORTISSEMENT
         */
        cdPossibiliteDiffereAmortiss: string;
        phases: Array<IPhaseProduit>;
        accessoires: Array<IAccessoire>;
        variationsDureesProduit: Array<IVariationDureeProduit>;
    }
    interface IPhaseProduit {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * LIBELLE LONG TYPE DE PHASE
         */
        libelleLongTypePhase: string;
        /**
         * IDENTIFIANT LOI DE REVISION
         */
        identifiantLoiRevision: string;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CD MODE EXPRESSION TAUX MOYEN PHASE
         */
        cdModeExpressionTauxMoyenPhase: string;
        /**
         * CD ECHEANCE RECALCULEE PAR REVISION
         */
        codeEcheanceRecalculeeRevision: string;
        /**
         * CODE TAUX DES PALIERS CALCULES
         */
        codeTauxDesPaliersCalcules: string;
        /**
         * CD TYPE CONFIRMATION TAUX INTERET
         */
        cdTypeConfirmationTauxInteret: string;
        /**
         * UNITE PERIODE VALEUR INIT INDICE
         */
        unitePeriodeValeurInitIndice: string;
        /**
         * NB PERIODE VALEUR INIT INDICE
         */
        nbPeriodeValeurInitIndice: number;
        /**
         * QUOTITE MINIMUM DE CAPITAL A AMORTIR
         */
        quotiteMinimumCapitalAAmortir: number;
        /**
         * QUOTITE MAXIMUM DE CAPITAL A AMORTIR
         */
        quotiteMaximumCapitalAAmortir: number;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * VALEUR MINI TAUX MOYEN PHASE
         */
        valeurMiniTauxMoyenPhase: number;
        /**
         * VALEUR MAXI TAUX MOYEN PHASE
         */
        valeurMaxiTauxMoyenPhase: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * MODE EXPRESSION DUREE PHASE
         */
        modeExpressionDureePhase: string;
        /**
         * MODE DE CALCUL AMORTISSEMENT
         */
        modeCalculAmortissement: string;
        /**
         * DUREE PHASE PRODUIT
         */
        dureePhaseProduit: number;
        /**
         * DUREE PHASE PRODUIT
         */
        dureePhaseProduit1: number;
        /**
         * DUREE PHASE PRODUIT
         */
        dureePhaseProduit2: number;
        /**
         * CODE PERIODICITE DIFFERENTE M.E.R.
         */
        codePeriodiciteDifferenteMER: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement1: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement2: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement3: string;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement4: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERinterets: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERinterets1: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERinterets2: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMERinterets3: string;
        /**
         * Code type de traitement d'échéance
         */
        codeTypeTraitementEcheance: string;
        /**
         * QUOTITE MAXIMUM DE CAPITAL IN FINE
         */
        quotiteMaximumCapitalInFine: number;
        /**
         * QUOTITE MINIMUM DE CAPITAL A AMORTIR
         */
        quotiteMinimumCapitalAAmortir1: number;
        /**
         * QUOTITE MAXIMUM DE CAPITAL A AMORTIR
         */
        quotiteMaximumCapitalAAmortir1: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePdt: number;
        /**
         * DUREE D'UNE PHASE ( PAS )
         */
        dureeUnePhasePas: number;
        /**
         * Code calcul interets diff recouvrmnt
         */
        cdCalculInteretsDiffRecouvrmnt: string;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMiseRecouvreInterets: string;
        /**
         * NB MAXIMUM PERIODE VARIATION DUREE
         */
        nbMaximumPeriodeVariationDuree: number;
        /**
         * QUOTITE CONSEILLEE CAPITAL A AMORTIR
         */
        quotiteConseilCapitalAAmortir1: number;
        /**
         * QUOTITE CONSEILLEE CAPITAL A AMORTIR
         */
        quotiteConseilCapitalAAmortir: number;
        palierTxProgressAmortiCatalogue: Array<IPalierTauxProgressAmortiCatalogue>;
        parametresRevision: Array<IParametreRevisionProduit>;
        paliersProduit: Array<IPalierProduit>;
    }
    interface IPalierProduit {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * DUREE MINI PALIER DE TAUX
         */
        dureeMiniPalierTaux: number;
        /**
         * DUREE PALIER DE TAUX
         */
        dureePalierTaux: number;
        /**
         * DUREE PALIER DE TAUX
         */
        dureePalierTaux1: number;
        /**
         * TYPE DE REMBOURSEMENT
         */
        typeRemboursement: string;
        /**
         * CODE TYPE DE TAUX INTERET
         */
        codeTypeTauxInteret: string;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * TAUX D INTERET
         */
        tauxInteret: number;
        /**
         * TAUX D INTERET
         */
        tauxInteret1: number;
        /**
         * TAUX D INTERET
         */
        tauxInteret2: number;
        /**
         * PERIODICITE APPLIC PROGRE ECHEANCE
         */
        periodiciteApplicProgreEcheance: string;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances: number;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances1: number;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances2: number;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePdt: number;
        /**
         * CODE TYPE TAUX PROGRESSION ECHEANCES
         */
        cdTypeTauxProgressionEcheances: string;
    }
    interface IGarantieP4 {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * LIBELLE NATURE GARANTIE
         */
        libelleNatureGarantie: string;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE ACTE AUTHENTIQ NATURE GARANTIE
         */
        codeActeAuthentiqNatureGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * DATE DEBUT VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE LONG NATURE GARANTIE
         */
        libelleLongNatureGarantie: string;
        /**
         * CODE HYPOTHEQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        /**
         * DUREE MAXIMALE DE GARANTIE EN MOIS
         */
        dureeMaximaleGarantieEnMois: number;
        /**
         * CODE UTILISATION PACTE COMMISSOIRE
         */
        codeUtilisationPacteCommissoire: string;
    }
    interface IGarantieP3 {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcces: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcces1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcces2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcces3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcces4: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvrAccessoire: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IRegleGestion {
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * libellé standard
         */
        libelleStandard: string;
    }
    interface IGarantieP2 {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * COMMENTAIRE GARANTIE
         */
        commentaireGarantie: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * LIBELLE INTERVENANT
         */
        libelleIntervenant: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IObjetFinance {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * NUMERO RELATIF OBJET DOSSIER
         */
        numeroRelatifObjetDossier: number;
        /**
         * CODE USAGE DE L'OBJET
         */
        codeUsageLObjet: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * LIBELLE TYPE OBJET REGLEMENTE - TOR
         */
        libelleTypeObjetReglementeTor: string;
        /**
         * CODE UTILISATION OBJET DANS CREDIT
         */
        codeUtilisationObjetDansCredit: string;
        /**
         * MONTANT DE L OPERATION
         */
        montantLOperation: number;
        /**
         * COUT HORS TAXE DE L'OBJET
         */
        coutHorsTaxeLObjet: number;
        /**
         * COUT TTC DE L'OBJET
         */
        coutTtcLObjet: number;
        /**
         * Montant FRAIS NOTAIRE
         */
        montantFraisNotaire: number;
        /**
         * INTEGRATION FRAIS NOTAIRE
         */
        integrationFraisNotaire: string;
        /**
         * MONTANT FRAIS DIVERS
         */
        montantFraisDivers: number;
        /**
         * INTEGRATION FRAIS DIVERS
         */
        integrationFraisDivers: string;
        /**
         * CODE PRIX DU MARCHE
         */
        codePrixMarche: string;
        /**
         * CODE MODALITE D'OCCUPATION
         */
        codeModaliteOccupation: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * CODE GARANTIE ACHEVEMENT TRAVAUX
         */
        codeGarantieAchevementTravaux: string;
        /**
         * TYPE ZONE FRANCHE
         */
        typeZoneFranche: string;
        /**
         * CODE ZONE GEOGRAPHIQUE
         */
        codeZoneGeographique: string;
        /**
         * NOMBRE LOGEMENTS DANS OBJET
         */
        nombreLogementsDansObjet: number;
        /**
         * ADRESSE ligne1
         */
        adresseLigne1: string;
        /**
         * ADRESSE ligne2
         */
        adresseLigne2: string;
        /**
         * ADRESSE ligne3
         */
        adresseLigne3: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * ADRESSE ligne 1 suite
         */
        adresseLigneSuite6: string;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * REFERENCE EXTERNE OBJET
         */
        referenceExterneObjet: string;
        /**
         * IDENTIFIANT VENDEUR
         */
        identifiantVendeur: string;
        /**
         * CODE QUALITE DE MARCHE
         */
        codeQualiteMarche: string;
        /**
         * MONTANT VALEUR OBJET
         */
        montantValeurObjet: number;
        /**
         * SURFACE HABITABLE EN M2
         */
        surfaceHabitableEnM2: number;
        /**
         * Code mise en oeuvre du projet
         */
        codeMiseEnOeuvreProjet: string;
        /**
         * CODE TYPE LOGEMENT
         */
        codeTypeLogement: string;
        /**
         * DATE ESTIMATION VALEUR OBJET
         * Type date au format yyyy-MM-dd
         */
        dateEstimationValeurObjet: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * SURFACE DU TERRAIN EN M2
         */
        surfaceTerrainEnM2: number;
        /**
         * Mode d'acquisition
         */
        modeAcquisition: string;
        /**
         * DATE D'ACQUISITION DU TERRAIN
         * Type date au format yyyy-MM-dd
         */
        dateAcquisitionTerrain: string;
        /**
         * COUT D'ACQUISITION
         */
        coutAcquisition: number;
        /**
         * Mode estimation valeur terrain
         */
        modeEstimationValeurTerrain: string;
        /**
         * CODE CLASSE BAFI
         */
        codeClasseBafi: string;
        /**
         * CODE TYPE DE MARCHE PERSONNE
         */
        codeTypeMarchePersonne: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * code typologie cadre fiscal
         */
        codeTypologieCadreFiscal: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
        /**
         * Mt inscriptions hypothéc existantes
         */
        mtInscriptionsHypothecExist: number;
        /**
         * DATE ESTIM VALEUR OBJET prudentielle
         * Type date au format yyyy-MM-dd
         */
        dateEstimValeurObjPrudentielle: string;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        catReglementaireAttribution: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IPayeur {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE MODE REGLEMENT
         */
        codeModeReglement: string;
        /**
         * MONTANT FIXE PAYEUR SUR ECHEANCE
         */
        montantFixePayeurSurEcheance: number;
        /**
         * POURCENTAGE PAYEUR SUR INTERET
         */
        pourcentagePayeurSurInteret: number;
        /**
         * POURCENTAGE PAYEUR SUR ASSUR ACCESS
         */
        pourcentagePayeurSurAssurAccess: number;
        /**
         * Référence Unique Mandat
         */
        referenceUniqueMandat: string;
        /**
         * NUMERO DOMICILIATION M.E.R.
         */
        numDomiciliationMiseRecouvr: string;
        /**
         * POURCENTAGE PAYEUR SUR AMORTISSEMENT
         */
        pourcentPayeurSurAmortissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IEmprunteur {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * LIBELLE CATEGORIE EMPRUNTEUR
         */
        libelleCategorieEmprunteur: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * CD SI "VRAI" AVENANT DE PERSONNE
         */
        cdSivraiavenantPersonne: string;
        /**
         * CODE MOTIF AVENANT PERSONNE
         */
        codeMotifAvenantPersonne: string;
        /**
         * CODE MODE REGLEMENT EMPRUNTEUR
         */
        codeModeReglementEmprunteur: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * Référence Unique Mandat
         */
        referenceUniqueMandat: string;
        /**
         * NO DOMICILIATION SECOURS EMPRUNTEUR
         */
        numDomicilSecoursEmprunteur: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        personnes: Array<IPersonne>;
    }
    interface IPersonne {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NO ORDRE PERSONNE DANS EMPRUNTEUR
         */
        noOrdrePersonneDansEmprunteur: number;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
    }
    interface IGarantie {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT GARANTIE
         */
        identifiantGarantie: string;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * ACTE AUTHENTIQUE SUR GARANTIE
         */
        acteAuthentiqueSurGarantie: string;
        /**
         * REDACTEUR DE L'ACTE
         */
        redacteurActe: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * IDENTIFIANT GARANT
         */
        identifiantGarant: string;
        /**
         * CAPITAL COUVERT / GARANTIE
         */
        capitalCouvertGarantie: number;
        /**
         * POURCENTAGE DU CREDIT COUVERT
         */
        pourcentageCreditCouvert: number;
        /**
         * CODE TYPE SURETE
         */
        codeTypeSurete: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * DATE ENVOI DOSSIER GARANTIE
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiDossierGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * CODE HYPOTHEQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        /**
         * Code anciennete assurance / garantie
         */
        cdAncienneteAssuParGarantie: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        garantieP2: IGarantieP2;
        garantieP3: IGarantieP3;
        garantieP4: IGarantieP4;
    }
    interface IEcheanceReportee {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE DE DEBUT DE CHOMAGE
         * Type date au format yyyy-MM-dd
         */
        dateDebutChomage: string;
        /**
         * NUMERO DU PLAN DE SECURISATION
         */
        numeroPlanSecurisation: number;
        /**
         * NUMERO DE LA PERIODE DE FRACTIONNEME
         */
        numeroPeriodeFractionneme: number;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nombreEcheancesAccessReport: number;
    }
    interface IVariationDureeProduit {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CD Type de butoir de durée
         */
        cdTypeButoirDuree: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DUREE MINIMUM PLAGE CONDITION TAUX
         */
        dureeMinimumPlageConditionTaux: number;
        /**
         * DUREE MAXIMUM PLAGE CONDITION TAUX
         */
        dureeMaximumPlageConditionTaux: number;
        /**
         * Règle de détermination de d'allong.
         */
        regleDeterminationDAllong: string;
        /**
         * Nb période allongement durée crédit
         */
        nbPeriodeAllongementDureeCredit: number;
        /**
         * Nb pér. mini d'allongement du crédit
         */
        nbPerminiAllongementCredit: number;
        /**
         * Nb pér. maxi d'allongement du crédit
         */
        nbPermaxiAllongementCredit: number;
        /**
         * Règle de détermination de la réduc.
         */
        regleDeterminationReduc: string;
        /**
         * Nb période réduction de durée crédit
         */
        nbPeriodeReductionDureeCredit: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * % allongement de durée crédit
         */
        pourcentageAllongeDureeCredit: number;
        /**
         * % réduction de durée crédit
         */
        pourcentageReductionDureeCredit: number;
    }
    interface IPalierTauxProgressAmortiCatalogue {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * DUREE MINI PALIER PROGRE AMORT
         */
        dureeMiniPalierProgreAmort: number;
        /**
         * DUREE MAXI PALIER PROGRE AMORT
         */
        dureeMaxiPalierProgreAmort: number;
        /**
         * CODE TYPE TAUX PROGRE AMORTISSEMENT
         */
        codeTypeTauxProgreAmortissement: string;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement: number;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement1: number;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement2: number;
        /**
         * PERIODICITE APPLIC PROGRE AMORT
         */
        periodiciteApplicProgreAmort: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePdt: number;
        /**
         * DUREE PALIER PROGRE AMORTIS. ( PAS )
         */
        dureePalierProgreAmortis: number;
    }
    interface IParametreRevisionProduit {
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * CD TYPE DE ROLE INDICE
         */
        codeTypeRoleIndice: string;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision: number;
        /**
         * UNITE PERIODE VALEUR INIT INDICE
         */
        unitePeriodeValeurInitIndice: string;
        /**
         * NB PERIODE VALEUR INIT INDICE
         */
        nbPeriodeValeurInitIndice: number;
        /**
         * NOMBRE PERIODE REVISION SUIVANTE
         */
        nombrePeriodeRevisionSuivante: number;
        /**
         * CD VALEUR REF UTILISATION INDICE
         */
        cdValeurRefUtilisationIndice: string;
        /**
         * EVENEMENT VALEUR INITIALE INDICE
         */
        evenementValeurInitialeIndice: string;
        /**
         * Numéro de période de révision
         */
        numeroPeriodeRevision: number;
        /**
         * LIBELLE COURT LOI DE REVISION
         */
        libelleCourtLoiRevision: string;
        /**
         * LIBELLE LONG LOI DE REVISION
         */
        libelleLongLoiRevision: string;
        /**
         * Libelle jeu de revision
         */
        libelleJeuRevision: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePdt: number;
        /**
         * MODE EXPRESSION VALEUR UTILIS INDICE
         */
        modeExpressionValUtilisIndice: string;
        /**
         * EVENEMENT DECLENCHEUR REVISION
         */
        evnmtDeclenchPremiereRevision1: string;
        /**
         * EVENEM DECLENCHEUR PREMIERE REVISION
         */
        evnmtDeclenchPremiereRevision11: string;
        /**
         * CD UNITE PERIODE REVISION SUIVANTES
         */
        codeUnitePeriodeRevisionSuiv: string;
    }
    interface IPretCombine {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * MT part amortissable du capital
         */
        montantPartAmortissableCapital: number;
        /**
         * Montant de la part in fine
         */
        montantPartInfine: number;
        /**
         * Mode de répartition du capital
         */
        modeRepartitionCapital: string;
        /**
         * Code ajout intér. cap sur part amort
         */
        codeAjoutIntercapSurPartAmort: string;
        /**
         * montant de la quotité d'amortissemen
         */
        montantQuotiteAmortissement: number;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAAmortir: number;
        /**
         * Amort. supplémentaire fin phase
         */
        amortissementSuppFinPhase: number;
    }
    interface IPalierTauxAmortissement {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CD INDEXATION TAUX PROGRESSION AMORT
         */
        codeIndexTxProgressionAmort: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurAbsorbeePhasePalier: string;
    }
    interface ICriteresRecherche {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        identifiantProduit: string;
        dateTraitement: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        codeTypeAppel: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * CODE TYPE DE REPONSE ATTENDUE
         */
        codeTypeReponseAttendue: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
    }
    interface IHistorique extends IElementGestion {
        credit: ICredit;
        produit: IProduit;
        reglesGestion: Array<IRegleGestion>;
        emprunteur: IEmprunteur;
        payeurs: Array<IPayeur>;
        objetFinance: IObjetFinance;
        criteresRecherche: ICriteresRecherche;
        ancienNumeroDossier: string;
        motifsRecouvrement: Array<IMotifRecouvrement>;
    }
    interface IParametreRevisionTaux {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision: number;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision1: number;
        /**
         * MODE EXPRESSION BUTOIR TAUX BAISSE
         */
        modeExpressionButoirTauxBaisse: string;
        /**
         * MODE EXPRESSION BUTOIR TAUX HAUSSE
         */
        modeExpressionButoirTauxHausse: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * Numéro de période de révision
         */
        numeroPeriodeRevision: number;
        /**
         * IDENTIFIANT LOI DE REVISION
         */
        identifiantLoiRevision: string;
        /**
         * CD ECHEANCE RECALCULEE PAR REVISION
         */
        codeEcheanceRecalculeeRevision: string;
        /**
         * CD unité période début de révision
         */
        codeUnitePeriodeDebutRevision: string;
        /**
         * Durée de la période de révision
         */
        dureePeriodeRevision: number;
        /**
         * Unité de durée de la période de rév.
         */
        uniteDureePeriodeRevision: string;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * Elément modifiable par avenant
         */
        elementModifiableParAvenant: string;
        /**
         * CD TYPE DE ROLE INDICE
         */
        codeTypeRoleIndice: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhaseParTypePhasePdt: number;
        /**
         * Nombre échéance avant recalcul mont.
         */
        nbEcheanceAvantRecalculMontant: number;
        /**
         * Evènement déclencheur début période
         */
        evnmtDeclencheurDebutPeriode: string;
        /**
         * Nb pér. pour dét. début de période
         */
        nbPeriodePourDeterDebutPeriode: number;
        /**
         * MODE EXPRESSION VALEUR UTILIS INDICE
         */
        modeExpressionValUtilisIndice: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IMotifRecouvrement {
        /**
         * CODE MODE REGLEMENT
         */
        codeModeReglement: string;
        /**
         * LIBELLE LONG MODE DE REGLEMENT
         */
        libelleLongModeReglement: string;
        /**
         * LIBELLE COURT MODE DE REGLEMENT
         */
        libelleCourtModeReglement: string;
        /**
         * CODE TYPE DE DOMICILIATION
         */
        codeTypeDomiciliation: string;
        /**
         * CODE UTILISATION MODE DE REGLEMENT
         */
        codeUtilisationModeReglement: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * CODE NIVEAU HABILITATION
         */
        codeNiveauHabilitation: string;
        /**
         * CODE REGLEMENT INTERNE / EXTERNE
         */
        codeReglementInterneExterne: string;
    }
    interface IAssurance {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        numeroCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * IDENTIFIANT PERSONNE EST ASSURE
         */
        identifiantPersonneEstAssure: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE COUVERTURE TYPE EXTENSION
         */
        codeCouvertureTypeExtension: string;
        /**
         * CODE DELEGATION ASSURANCE
         */
        codeDelegationAssurance: string;
        /**
         * DATE PRISE EFFET ASSURANCE
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetAssurance: string;
        /**
         * DATE FIN EFFET ASSURANCE
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetAssurance: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MT ECHEANCE COUVERT PAR ASSURANCE
         */
        montantEcheanceCouvertAssurance: number;
        /**
         * NUMERO DU DOSSIER CHEZ L ASSUREUR
         */
        numeroDossierChezLAssureur: string;
        /**
         * Code type de risque
         */
        codeTypeRisque: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO SIREN
         */
        numeroSiren: number;
        /**
         * LIBELLE ASSURANCE EXTERNE
         */
        libelleAssuranceExterne: string;
        /**
         * LIBELLE INTERVENANT
         */
        libelleIntervenant: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * CODE ASSURANCE OBLIGATOIRE
         */
        codeAssuranceObligatoire: string;
        /**
         * code motif résiliation
         */
        codeMotifResiliation: string;
        /**
         * QUOTITE ACCESSOIRE INCLUS TEG
         */
        quotiteAccessoireInclusTeg: number;
        /**
         * QUOTITE ACCESS NON INCLUS TEG
         */
        quotiteAccessNonInclusTeg: number;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveOuExclusionAssurance: string;
        /**
         * BENEFICIAIRE ASSURANCE AVANT VERSEM.
         */
        beneficiaireAssuAvVersement: string;
        /**
         * Code anciennete assurance / garantie
         */
        codeAncienneteAssuOuGarantie: string;
        /**
         * Code Type Agrément Assurance externe
         */
        codeTypeAgrementAssuExterne: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.InformationObjet {
    interface IInformationObjet extends IElementGestion {
        typologieInstructions: Array<ITypologieInstruction>;
        informationPays: Array<IInformationPays>;
        creditObjet: ICreditObjet;
        accessoireProduits: Array<IAccessoireProduit>;
        typeObjetReglementes: Array<ITypeObjetReglemente>;
        typeObjetCommercials: Array<ITypeObjetCommercial>;
    }
    interface ITypologieInstruction {
        /**
         * TYPE DE TYPOLOGIE
         */
        typeTypologie: string;
        /**
         * CODE DE TYPOLOGIE
         */
        codeTypologie: string;
        /**
         * INTITULE
         */
        intitule: string;
    }
    interface IInformationPays {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * LIBELLE PAYS DE LOCALISATION
         */
        libellePaysLocalisation: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
    }
    interface ITypeObjetReglemente {
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
        /**
         * LIBELLE TYPE OBJET REGLEMENTE - TOR
         */
        libelleTypeObjetReglementeTor: string;
    }
    interface IAccessoireProduit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numRegleApplicationAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire1: string;
        /**
         * NUMERO REGLE DE CALCUL ELEMENT
         */
        numeroRegleCalculElement: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAcessoirePourRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAcesoireDsCalculTxEffGlobal: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * Indicateur Accessoire Obligatoire
         */
        indicateurAccessoireObligatoire: string;
        /**
         * Indicateur Accessoire Validé
         */
        indicateurAccessoireValide: string;
        /**
         * Indicateur Accessoire Annulé AV
         */
        indicateurAccessoireAnnuleAv: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nbEcheancesAccessoiresReport: number;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire1: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire2: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire3: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire4: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * LIBELLE TYPE ASSIETE DE CALCUL
         */
        libelleTypeAssieteCalcul: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAcessoire: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * REGLE DATE DEBUT APPLI ACC catalogue
         */
        regleDateDebutAppliAccCatalogue: string;
        /**
         * REGLE EVENEMENT DECH. 1ER APPEL cata
         */
        regleEvenementDech1erAppelCata: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAcessoire: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvraccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * Code indicateur bornes dérogées
         */
        codeIndicateurBornesDerogees: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface ITypeObjetCommercial {
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        categorieReglementairAtribution: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * CODE AFFECTATION OBJET
         */
        codeAffectationObjet: string;
    }
    interface ICreditObjet {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * NUMERO RELATIF OBJET DOSSIER
         */
        numeroRelatifObjetDossier: number;
        /**
         * CODE USAGE DE L'OBJET
         */
        codeUsageLObjet: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglementeTor: string;
        /**
         * LIBELLE TYPE OBJET REGLEMENTE - TOR
         */
        libelleTypeObjetReglementeTor: string;
        /**
         * CODE UTILISATION OBJET DANS CREDIT
         */
        codeUtilisationObjetDansCredit: string;
        /**
         * MONTANT OPERATION
         */
        montantOperation: number;
        /**
         * COUT HORS TAXE DE L'OBJET
         */
        coutHorsTaxeLObjet: number;
        /**
         * COUT TTC DE L'OBJET
         */
        coutTtcLObjet: number;
        /**
         * Montant FRAIS NOTAIRE
         */
        montantFraisNotaire: number;
        /**
         * INTEGRATION FRAIS NOTAIRE
         */
        integrationFraisNotaire: string;
        /**
         * MONTANT FRAIS DIVERS
         */
        montantFraisDivers: number;
        /**
         * INTEGRATION FRAIS DIVERS
         */
        integrationFraisDivers: string;
        /**
         * Mt inscriptions hypothéc existantes
         */
        mtInscriptionHypothecExistantes: number;
        /**
         * CODE PRIX DU MARCHE
         */
        codePrixMarche: string;
        /**
         * CODE MODALITE D'OCCUPATION
         */
        codeModaliteOccupation: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * CODE GARANTIE ACHEVEMENT TRAVAUX
         */
        codeGarantieAchevementTravaux: string;
        /**
         * TYPE ZONE FRANCHE
         */
        typeZoneFranche: string;
        /**
         * CODE ZONE GEOGRAPHIQUE
         */
        codeZoneGeographique: string;
        /**
         * NOMBRE LOGEMENTS DANS OBJET
         */
        nombreLogementsDansObjet: number;
        /**
         * ADRESSE ligne1
         */
        adresseLigne1: string;
        /**
         * ADRESSE ligne2
         */
        adresseLigne2: string;
        /**
         * ADRESSE ligne3
         */
        adresseLigne3: string;
        /**
         * ADRESSE LIGNE 4 CODE POSTAL
         */
        adresseLigneCodePostal4: string;
        /**
         * ADRESSE LIGNE 5 COMMUNE
         */
        adresseLigneCommune5: string;
        /**
         * ADRESSE ligne 1 suite
         */
        adresseLigneSuite6: string;
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * REFERENCE EXTERNE OBJET
         */
        referenceExterneObjet: string;
        /**
         * IDENTIFIANT VENDEUR
         */
        identifiantVendeur: string;
        /**
         * CODE QUALITE DE MARCHE
         */
        codeQualiteMarche: string;
        /**
         * MONTANT VALEUR OBJET
         */
        montantValeurObjet: number;
        /**
         * SURFACE HABITABLE EN M2
         */
        surfaceHabitableEnM2: number;
        /**
         * Code mise en oeuvre du projet
         */
        codeMiseEnOeuvreProjet: string;
        /**
         * CODE TYPE LOGEMENT
         */
        codeTypeLogement: string;
        /**
         * DATE ESTIMATION VALEUR OBJET
         * Type date au format yyyy-MM-dd
         */
        dateEstimationValeurObjet: string;
        /**
         * CODE MODALITE DE L'ESTIMATION
         */
        codeModaliteLEstimation: string;
        /**
         * SURFACE DU TERRAIN EN M2
         */
        surfaceTerrainEnM2: number;
        /**
         * Mode d'acquisition
         */
        modeAcquisition: string;
        /**
         * DATE D'ACQUISITION DU TERRAIN
         * Type date au format yyyy-MM-dd
         */
        dateAcquisitionTerrain: string;
        /**
         * COUT D'ACQUISITION
         */
        coutAcquisition: number;
        /**
         * DATE ESTIM VALEUR OBJET prudentielle
         * Type date au format yyyy-MM-dd
         */
        dateEstimValeurObjetPrudentiel: string;
        /**
         * Mode estimation valeur terrain
         */
        modeEstimationValeurTerrain: string;
        /**
         * CODE CLASSE BAFI
         */
        codeClasseBafi: string;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        categorieReglementairAtribution: string;
        /**
         * CODE TYPE DE MARCHE PERSONNE
         */
        codeTypeMarchePersonne: string;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * code typologie cadre fiscal
         */
        codeTypologieCadreFiscal: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * CODE DEVISE ISO
         */
        codeDeviseIso: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.ListerCompte {
    interface IListerCompte extends IElementGestion {
        personne: IPersonne;
    }
    interface IPersonne {
        /**
         * IDENTIFIANT Etablissement MySys
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * CODE TITRE CIVILITE
         */
        codeTitreCivilite: string;
        /**
         * NOM OU RAISON SOCIALE
         */
        nomRaisonSociale: string;
        /**
         * LIBELLE PRENOMS
         */
        libellePrenoms: string;
        comptes: Array<ICompte>;
    }
    interface ICompte {
        /**
         * IDENTIFIANT Etablissement MySys
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NUMERO DE COMPTE
         */
        numeroCompte: string;
        /**
         * CODE PRODUIT
         */
        codeProduit: string;
        /**
         * MODE DE COMPOSITION
         */
        modeComposition: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.Personnes {
    interface IPersonnes extends IElementGestion {
        emprunteur: IEmprunteur;
        personneEmprunteurs: Array<IPersonneEmprunteur>;
        payeurs: Array<IPayeur>;
        categorieEmprunteurs: Array<ICategorieEmprunteur>;
        motifs: Array<IMotif>;
        motifRecouvrements: Array<IMotifRecouvrement>;
        roles: Array<IRole>;
        accessoireProduits: Array<IAccessoireProduit>;
    }
    interface IAccessoireProduit {
        /**
         * IDENTIFIANT Etablissement MySys
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAcesoire4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numRegleApplicationAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire1: string;
        /**
         * NUMERO REGLE DE CALCUL ELEMENT
         */
        numeroRegleCalculElement: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAcessoirePourRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAcesoireDsCalculTxEffGlobal: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * Indicateur Accessoire Obligatoire
         */
        indicateurAccessoireObligatoire: string;
        /**
         * Indicateur Accessoire Validé
         */
        indicateurAccessoireValide: string;
        /**
         * Indicateur Accessoire Annulé AV
         */
        indicateurAccessoireAnnuleAv: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nbEcheancesAccessoiresReport: number;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire1: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire2: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire3: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire4: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * LIBELLE TYPE ASSIETE DE CALCUL
         */
        libelleTypeAssieteCalcul: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAcessoire: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * REGLE DATE DEBUT APPLI ACC catalogue
         */
        regleDateDebutAppliAccCatalogue: string;
        /**
         * REGLE EVENEMENT DECH. 1ER APPEL cata
         */
        regleEvenementDech1erAppelCata: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAcessoire: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvraccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * Code indicateur bornes dérogées
         */
        codeIndicateurBornesDerogees: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IEmprunteur {
        /**
         * IDENTIFIANT Etablissament MySys
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * LIBELLE CATEGORIE EMPRUNTEUR
         */
        libelleCategorieEmprunteur: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * CD SI "VRAI" AVENANT DE PERSONNE
         */
        cdSivraiavenantPersonne: string;
        /**
         * CODE MOTIF AVENANT PERSONNE
         */
        codeMotifAvenantPersonne: string;
        /**
         * NO DOMICILIATION SECOURS EMPRUNTEUR
         */
        numDomiciliationSecoursEmp: string;
        /**
         * CODE MODE REGLEMENT EMPRUNTEUR
         */
        codeModeReglementEmprunteur: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * Référence Unique Mandat
         */
        referenceUniqueMandat: string;
    }
    interface IPayeur {
        /**
         * IDENTIFIANT Etablissament MySys
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE MODE REGLEMENT
         */
        codeModeReglement: string;
        /**
         * NUMERO DOMICILIATION M.E.R.
         */
        numDomiciliationMisRecouvrement: string;
        /**
         * MONTANT FIXE PAYEUR SUR ECHEANCE
         */
        montantFixePayeurSurEcheance: number;
        /**
         * POURCENTAGE PAYEUR SUR INTERET
         */
        pourcentagePayeurSurInteret: number;
        /**
         * POURCENTAGE PAYEUR SUR AMORTISSEMENT
         */
        pourcentagPayeurSurAmortisement: number;
        /**
         * POURCENTAGE PAYEUR SUR ASSUR ACCESS
         */
        pourcentagePayeurSurAssurAccess: number;
        /**
         * Référence Unique Mandat
         */
        referenceUniqueMandat: string;
    }
    interface ICategorieEmprunteur {
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * LIBELLE CATEGORIE EMPRUNTEUR
         */
        libelleCategorieEmprunteur: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
    }
    interface IMotif {
        /**
         * IDENTIFIANT Etablissement MySys
         */
        codeEtablissement: number;
        /**
         * CODE MOTIF BLOCAGE APL
         */
        codeMotifBlocageApl: string;
        /**
         * Libellé motif blocage APL
         */
        libelleMotifBlocageApl: string;
        /**
         * Indicateur motif avenant personne
         */
        indicateurMotifAvenantPersonne: string;
        /**
         * CD SI "VRAI" AVENANT DE PERSONNE
         */
        cdSivraiavenantPersonne: string;
    }
    interface IMotifRecouvrement {
        /**
         * CODE MODE REGLEMENT
         */
        codeModeReglement: string;
        /**
         * LIBELLE LONG MODE DE REGLEMENT
         */
        libelleLongModeReglement: string;
        /**
         * LIBELLE COURT MODE DE REGLEMENT
         */
        libelleCourtModeReglement: string;
        /**
         * CODE TYPE DE DOMICILIATION
         */
        codeTypeDomiciliation: string;
        /**
         * CODE UTILISATION MODE REGLEMENT
         */
        codeUtilisationModeReglement: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * CODE NIVEAU HABILITATION
         */
        codeNiveauHabilitation: string;
        /**
         * CODE REGLEMENT INTERNE / EXTERNE
         */
        codeReglementInterneExterne: string;
    }
    interface IRole {
        /**
         * IDENTIFIANT Etablissament MySys
         */
        codeEtablissement: number;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
        /**
         * CODE VALEUR LOGICIEL
         */
        codeValeurLogiciel: string;
        /**
         * CODE TYPE DE PROCEDURE
         */
        codeTypeProcedure: string;
        /**
         * CODE TYPE DE TABLE CENTRALE
         */
        codeTypeTableCentrale: string;
        /**
         * CODE INTERFACE INST - GEST
         */
        codeInterfaceInstGest: string;
    }
    interface IPersonneEmprunteur {
        /**
         * IDENTIFIANT Etablissement MySys
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        codeEmprunteur: string;
        /**
         * IDENTIFIANT PERSONNE
         */
        identifiantPersonne: string;
        /**
         * NO ORDRE PERSONNE DANS EMPRUNTEUR
         */
        noOrdrePersonneDansEmprunteur: number;
        /**
         * CODE TYPE PERSONNE
         */
        codeTypePersonne: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * ROLE DE L'INTERVENANT
         */
        roleLIntervenant: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.Recherche {
    interface ISignatureAnnexe {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Identifiant annexe
         */
        identifiantAnnexe: string;
        /**
         * Code type annexe
         */
        codeTypeAnnexe: string;
        /**
         * libellé court annexe
         */
        libelleCourtAnnexe: string;
    }
    interface ISimulation {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * LIBELLE LONG PROFIL RENEGOCIATION
         */
        libelleLongProfilRenegociation: string;
        /**
         * LIBELLE TYPE MODIFICATION
         */
        libelleTypeModification: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * LIBELLE ETAT SIMUL / AVENANT
         */
        libelleEtatSimulAvenant: string;
        /**
         * CODE MOTIF ANNULATION MODIFICATION
         */
        codeModifAnnulationModification: string;
        /**
         * DATE ANNULATION MODIFICATION
         * Type date au format yyyy-MM-dd
         */
        dateAnnulationModification: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * ETAT CREDIT EDG / Avenant
         */
        etatCreditEdgAvenant: string;
        /**
         * ETAT BRANCHE FINANCIERE
         */
        etatBrancheFinanciere: string;
        /**
         * CD ETAT GARANTIE PAR RAPPORT AVENANT
         */
        cdEtatGarantieParRapportAvenant: string;
        /**
         * CD ETAT ASSUR. PAR RAPPORT AVENANT
         */
        cdEtatAssurparRapportAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE SECURISATIO
         */
        etatBrancheAccessSecurisation: string;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DATE DERNIERE EDITION
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEdition: string;
        /**
         * DATE MINIMUM D'ACCEPTATION
         * Type date au format yyyy-MM-dd
         */
        dateMinimumAcceptation: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * DATE DE RECEPTION OFFRE PAR CLIENT
         * Type date au format yyyy-MM-dd
         */
        dateReceptionOffreClient: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DATE CREATION DEMANDE RECEVABILITE
         * Type date au format yyyy-MM-dd
         */
        dateCreationDemandeRecevabilite: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: string;
        /**
         * CODE Modification Avenant/Simulation
         */
        codeModifAvenantSimulation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * CODE ORIGINE CREDIT OU DOSSIER
         */
        codeOrigineCreditDossier: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * NOTATION ENGAGEMENT BALE2
         */
        notationEngagementBale: string;
        /**
         * Identifiant dossier avenant Bale2
         */
        identifiantDossierAvenantBale2: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOpeDemandeurNotationBale: string;
        /**
         * ETAT BRANCHE PERSONNE
         */
        etatBranchePersonne: string;
        /**
         * ETAT BRANCHE PAYEUR
         */
        etatBranchePayeur: string;
        /**
         * ETAT BRANCHE DONNEES VERSEMENT D'EDG
         */
        etatBrancheDonneesVersementEdg: string;
        /**
         * ETAT BRANCHE ECHEANCIER DE VERSEMENT
         */
        etatBrancheEcheancierVersement: string;
        /**
         * ETAT BRANCHE DONNEES COMPLEMENTAIRES
         */
        etatBrancheDonneesComplem: string;
        /**
         * ETAT BRANCHE OBJET
         */
        etatBrancheObjet: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * IDENTIFIANT DOSSIER COMMERCIAL
         */
        identifiantDossierCommercial: string;
        /**
         * Code existence crédit taux révisable
         */
        cdExistenceCreditTauxRevisable: string;
        /**
         * CODE ETAT Branche Service
         */
        codeEtatBrancheService: string;
        /**
         * IDENTIFIANT agent délégateur
         */
        identifiantAgentDelegateur: string;
        /**
         * code indic signr elect
         */
        codeIndicSignrElect: string;
    }
    interface IAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * LIBELLE LONG PROFIL RENEGOCIATION
         */
        libelleLongProfilRenegociation: string;
        /**
         * LIBELLE TYPE MODIFICATION
         */
        libelleTypeModification: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * LIBELLE ETAT SIMUL / AVENANT
         */
        libelleEtatSimulAvenant: string;
        /**
         * CODE MOTIF ANNULATION MODIFICATION
         */
        codeModifAnnulationModification: string;
        /**
         * DATE ANNULATION MODIFICATION
         * Type date au format yyyy-MM-dd
         */
        dateAnnulationModification: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * ETAT CREDIT EDG / Avenant
         */
        etatCreditEdgAvenant: string;
        /**
         * ETAT BRANCHE FINANCIERE
         */
        etatBrancheFinanciere: string;
        /**
         * CD ETAT GARANTIE PAR RAPPORT AVENANT
         */
        cdEtatGarantieParRapportAvenant: string;
        /**
         * CD ETAT ASSUR. PAR RAPPORT AVENANT
         */
        cdEtatAssurparRapportAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE SECURISATIO
         */
        etatBrancheAccessSecurisation: string;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DATE DERNIERE EDITION
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEdition: string;
        /**
         * DATE MINIMUM D'ACCEPTATION
         * Type date au format yyyy-MM-dd
         */
        dateMinimumAcceptation: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * DATE DE RECEPTION OFFRE PAR CLIENT
         * Type date au format yyyy-MM-dd
         */
        dateReceptionOffreClient: string;
        /**
         * CD TRAITEMENT MODIFICATION EFFECTUE
         */
        codeTraitementModifEffectue: string;
        /**
         * ETAT BRANCHE PERSONNE
         */
        etatBranchePersonne: string;
        /**
         * ETAT BRANCHE PAYEUR
         */
        etatBranchePayeur: string;
        /**
         * ETAT BRANCHE DONNEES VERSEMENT D'EDG
         */
        etatBrancheDonneesVersementEdg: string;
        /**
         * ETAT BRANCHE ECHEANCIER DE VERSEMENT
         */
        etatBrancheEcheancierVersement: string;
        /**
         * ETAT BRANCHE DONNEES COMPLEMENTAIRES
         */
        etatBrancheDonneesComplem: string;
        /**
         * DATE LIMITE RETRACTATION OFFRE
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetractationOffre: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * CODE CONFIRMATION MAJ
         */
        codeConfirmationMaj: string;
        /**
         * CODE Modification Avenant/Simulation
         */
        codeModifAvenantSimulation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * ETAT BRANCHE CHOIX Prescripteur
         */
        etatBrancheChoixPrescripteur: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * INDICATEUR BANALISE
         */
        indicateurBanalise: string;
        /**
         * CODE ORIGINE CREDIT OU DOSSIER
         */
        codeOrigineCreditDossier: string;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * NOTATION ENGAGEMENT BALE2
         */
        notationEngagementBale: string;
        /**
         * Identifiant dossier avenant Bale2
         */
        identifiantDossierAvenantBale2: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOpeDemandeurNotationBale: string;
        /**
         * ETAT BRANCHE OBJET
         */
        etatBrancheObjet: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * IDENTIFIANT DOSSIER COMMERCIAL
         */
        identifiantDossierCommercial: string;
        /**
         * Code existence crédit taux révisable
         */
        codeExistenceCreditTxRevisable: string;
        /**
         * CODE ETAT Branche Service
         */
        codeEtatBrancheService: string;
        /**
         * IDENTIFIANT agent délégateur
         */
        identifiantAgentDelegateur: string;
        /**
         * code indic signr elect
         */
        codeIndicSignrElect: string;
        /**
         * NUMERO QUANTIEME DATE ECHEANCE
         */
        numeroQuantiemeDateEcheance: number;
    }
    interface IRefus {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ENTITE
         */
        codeEntite: string;
        /**
         * TYPE ET CODE MOTIF
         */
        typeCodeMotif: string;
        /**
         * LIBELLE LONG MOTIF
         */
        libelleLongMotif: string;
    }
    interface ICredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE SUITE A DONNER DEMANDE RECEVAB.
         */
        codeSuiteADonnerDemandeRecevab: string;
        /**
         * CODE Création Avenant/Simulation
         */
        codeCreationAvenantSimulation: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * CODE SITUATION IMPAYE SUR CREDIT
         */
        codeSituationImpayeSurCredit: string;
        avenants: Array<IAvenant>;
        simulations: Array<ISimulation>;
        compteurMiseJour: number;
        codeBlocageActeGestion: string;
        identifiantEmprunteur: string;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IDocumentEdition {
        identifiantdoc: string;
        identifiantAnnexe: string;
        codeType: string;
        libelle: string;
        annexe: boolean;
    }
    interface IPersonneSignataireAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * IDENTIFIANT PERSONNE / emprunteur
         */
        identifiantPersonneEmprunteur: string;
        /**
         * code indic pers autor sign Elect
         */
        codeIndicPersAutorSignElect: string;
    }
    interface IRecherche extends IElementGestion {
        credit: ICredit;
        signaturesAnnexes: Array<ISignatureAnnexe>;
        motifsRefus: Array<IRefus>;
        documentsEdition: Array<IDocumentEdition>;
        personneSignataireAvenants: Array<IPersonneSignataireAvenant>;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.ServicesObjet {
    interface IPhaseCredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        numeroCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * DUREE AJUSTEE PHASE CREDIT
         */
        dureeAjusteePhaseCredit: number;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        numRelatifPhase: number;
    }
    interface IServiceObjet {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * COMMENTAIRE CONVENTION
         */
        commentaireConvention: string;
        /**
         * IDENTIFIANT OBJET
         */
        identifiantObjet: string;
        /**
         * CODE UTILISATION OBJET DANS CREDIT
         */
        codeUtilisationObjetDansCredit: string;
        /**
         * DESCRIPTION DE L'OBJET
         */
        descriptionLObjet: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjet: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * REGLE DATE EFFET ASSUR PARAMETRABLE
         */
        regleDateEffetAssurParametrable: string;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireDansCalculTeg: string;
        /**
         * DATE DE CLOTURE
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * Code appartenance objet au crédit
         */
        codeAppartenanceObjetCredit: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
    }
    interface IElementCalcul {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * MT ASSIETTE ACESSOIRE FIXEE CONTRACT
         */
        mtAssietteAccFixeeContract: number;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
    }
    interface IConvention {
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * REGLE DATE EFFET ASSUR. - GARANTIE
         */
        regleDateEffetAssurgarantie: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * COMMENTAIRE CONVENTION
         */
        commentaireConvention: string;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
    }
    interface IModaliteCalcul {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAcc: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAcc: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numRegleApplicationAcc: string;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireDansCalculTeg: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireConvention: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
    }
    interface IServicesObjet {
        listeConventionsPossibles: Array<IConvention>;
        listeElementsCalcul: Array<IElementCalcul>;
        listeModalitesCalcul: Array<IModaliteCalcul>;
        listePhasesCredit: Array<IPhaseCredit>;
        listeServicesObjet: Array<IServiceObjet>;
        /**
         * compteur pour mise à jour
         */
        compteurMaj: number;
        retourQR: Array<IRetourQR>;
    }
    interface IRetourQR {
        /**
         * message Retour
         */
        messageRetour: Array<string>;
        /**
         * code Retour
         */
        codeRetour: number;
        /**
         * est une Erreur Bloquante
         */
        isErreurBloquante: boolean;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.SynthesImpactAvenant {
    interface ISynthesImpactAvenant extends IElementGestion {
        critereRecherche: ICritereRecherche;
        resultatCalculs: Array<IResultatCalcul>;
        coutReamenagements: Array<ICoutReamenagement>;
    }
    interface ICritereRecherche {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * Date jour en affichage JJ/MM/SSAA
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        paramCalculs: Array<IParamCalcul>;
    }
    interface IParamCalcul {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * CODE AVENANT OU SIMULATION
         */
        codeAvenantSimulation: string;
        /**
         * CODE TYPE ACCES.
         */
        codeTypeAcces: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
    }
    interface IResultatCalcul {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE COURT PRODUIT
         */
        libelleCourtProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        montantCapitalRestantSurCredit: number;
        /**
         * DUREE DU RESTE A FINANCER
         */
        dureeResteAFinancer: number;
        /**
         * TAUX INTERET PALIER
         */
        tauxInteretPalier: number;
        /**
         * MONTANT ECHEANCE
         */
        montantEcheance: number;
        /**
         * DATE M.E.R. ZERO
         * Type date au format yyyy-MM-dd
         */
        dateMiseRecouvrementZero: string;
        /**
         * MONTANT ACCESSOIRE
         */
        montantAccessoire: number;
        /**
         * COUT TOTAL DU CREDIT
         */
        coutTotalCredit: number;
        /**
         * CODE ELIGIBILITE A L APL
         */
        codeEligibiliteALApl: string;
        /**
         * TAUX EFFECTIF GLOBAL
         */
        tauxEffectifGlobal: number;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * TAUX DU PRET
         */
        tauxPret: number;
        /**
         * MONTANT ECHEANCE
         */
        montantEcheance1: number;
        /**
         * MONTANT ECHEANCE CUMUL ACCESSOIRE
         */
        montantEcheanceCumulAccessoire: number;
        /**
         * LIBELLE LONG PROFIL RENEGOCIATION
         */
        libelleLongProfilRenegociation: string;
        /**
         * REMISE EN TAUX
         */
        remiseEnTaux: number;
        /**
         * NUMERO ECHEANCE
         */
        numeroEcheance: number;
        /**
         * DATE ECHEANCE
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * DT EX PROCHAINE MER APRES AVENANT
         * Type date au format yyyy-MM-dd
         */
        dtExProchaineMerApresAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * TAUX EFFECTIF GLOBAL PROPORTIONNEL
         */
        tauxEffectifGlobalProportionnel: number;
        /**
         * COUT TOTAL DU CREDIT HORS ACCESSOIRE
         */
        coutTotalCreditHorsAccessoire: number;
        /**
         * MONTANT ECHEANCE M.E.R.
         */
        montantEcheanceMER: number;
        /**
         * DATE ECHEANCE M.E.R.
         * Type date au format yyyy-MM-dd
         */
        dateEcheance1: string;
        /**
         * Montant assurances inclus TAEA
         */
        montantAssurancesInclusTaea: number;
        /**
         * Montant moyen assurances inclus TAEA
         */
        montantMoyAssurancesInclusTaea: number;
        /**
         * TAUX EFFECTIF GLOBAL AVEC ASSURANCE
         */
        tauxEffectifGlobalAvecAssurance: number;
        /**
         * TAUX EFFECTIF GLOBAL SANS ASSURANCE
         */
        tauxEffectifGlobalSansAssurance: number;
        /**
         * TAUX assurance effectif annuel TAEA.
         */
        tauxAssuranceEffectifAnnuelTaea: number;
    }
    interface ICoutReamenagement {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * Mt T4M (coût réaménagement)
         */
        mtT4mCoutReamenagement: number;
        /**
         * CODE COMPETENCE CALCULATRICE T4M
         */
        codeCompetenceCalculatriceT4m: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.AssuranceCredit {
    interface IAssuranceCredit {
        conventionAssurance: IConventionAssurance;
        listeAccessoireCredit: Array<IAccessoireAssurance>;
        sinistreAssurance: ISinistreAssurance;
        informationGeneraleAssurance: IInformationGeneraleAssurance;
        informationJustificatifs: IInformationJustificatif;
        donneeAssurance: IDonneeAssurance;
    }
    interface IInformationGeneraleAssurance {
        /**
         * Désignation courte de l'assuré.
         */
        libelleAssure: string;
        /**
         * Rôle de l'assuré.
         *
         * Valeurs :
         *    03 : Caution
         *    05 : Emprunteur
         *    15 : Dirigeant
         */
        roleAssure: string;
        identifiantAssurance: string;
        libelleTiers: string;
        typeRolePersonne: string;
        designationCourte: string;
        libelleTypeAssurance: string;
        datePriseEffetAssurance: string;
        montantEcheanceCouvertAssurance: number;
        codeDevise: string;
        quotiteCouvertureCredit: number;
        libelleReservesExclusions: string;
        codeCouvertureTypeExtension: boolean;
        codeTypeRisque: string;
        identifiantPersonneEstAssure: string;
        dateFinPriseEffetAssurance: string;
        quotiteInclusTEG: number;
        quotiteNonInclusTEG: number;
    }
    interface ISinistreAssurance {
        codeIndicExistenceSinistre: boolean;
        libelleTypeSinistre: string;
        datePriseChargeSinistre: string;
        dateClotureSinistreCredit: string;
    }
    interface IConventionAssurance {
        identifiantConvention: string;
        libelleLongConvention: string;
        datePriseEffetConvention: string;
        dateFinEffetConvention: string;
        numeroExterneConvention: string;
    }
    interface IListeAssuranceCredit {
        listeAssurances: Array<IAssuranceCredit>;
        informationJustificatifs: IInformationJustificatif;
    }
    interface IAccessoireAssurance {
        identifiantAssurance: string;
        identifiantConvention: string;
        numeroRelatifPhaseCredit: number;
        codeTypePhase: string;
        periodiciteApplicationElement: string;
        dateDebutApplicationElement: string;
        dateFinApplicationElement: string;
        montantElement: number;
        tauxElement: number;
        dateAppelAccessoire: string;
        numeroTranche: number;
        dureeApplicationAccessoire: number;
        ageMinimumEntreeAssurance: number;
        ageMaximumEntreeAssurance: number;
        dateDebutApplication: string;
        dateFinApplication: string;
    }
    interface IJustificatifsAssurance {
        codeNatureJustificatif: string;
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        dateDerniereMAJStatutElement: string;
        libelleStatutJustificatif: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
        zoneBanalise: string;
    }
    interface IInformationJustificatif {
        codeAppelWS: number;
        messageAppelWS: string;
        erreurQr: boolean;
        listeJustificatifAssurance: Array<IJustificatifsAssurance>;
        listeJustificatifs: Array<IJustificatifsAssurance>;
    }
    interface INatureJustif {
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClasseJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        libelleCategorieJustificatif: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustificatif: string;
        zoneBanalise: string;
        codeCategorieJustificatif: string;
    }
    interface IDonneeAssurance extends IElementGestion {
        listeJustificatif: Array<IJustificatifsAssurance>;
        listeNatureJustificatif: Array<INatureJustif>;
        identifiantAssurance: string;
        libelleTypeAssurance: string;
        datePriseEffet: string;
        dateFinEffet: string;
        dateCloture: string;
        dateAnnulationModification: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        identifiantPersonneEstAssure: string;
        denominationGarant: string;
        destinataireLettreImpaye: string;
        identifiantCredit: string;
        identifiantConvention: string;
        numeroExterneConvention: string;
        identifiantIntervenant: string;
        numeroRelatif: number;
        indicateurBanalise: string;
        codeModificationAutorise: string;
        codeEtablissement: number;
        competurMiseAJour: number;
        codeDevise: string;
    }
    interface IAssuranceGlobale extends IElementGestion {
        listeAssurance: Array<IAssuranceCredit>;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.CaracteristiqueCredit {
    interface ICaracteristiqueCredit extends IElementGestion {
        tauxCredit: ITauxCredit;
        tempsCredit: IDureeEtDate;
        fraisCredit: IFraisCredit;
        infoGeneraleCredit: IInformationGeneraleCredit;
        montantCredit: IMontantCredit;
        listePhaseCredit: Array<IInformationPhaseCredit>;
        gestionBackOffice: IGestionBackOffice;
        informationRemboursement: IInformationRemboursement;
        informationAvenant: IInformationAvenant;
        listeSinistre: Array<ISinistre>;
        tauxMoyen: IJustifTauxMoyen;
        payeurSecours: IPayeurSecours;
        dureeVersements: IDureeVersement;
        echeance: IEcheance;
        donnneeCredit: IDonneeCredit;
        listeCreditRattache: Array<ICreditRattache>;
        listeDetailsBonificationCredit: Array<IDetailsBonificationCredit>;
        dateJour: string;
        tauxMoyenPresent: boolean;
        caracteristiqueFinanciere: ICaracteristiqueFinanciere;
        informationModalite: IInformationModalite;
        listeReport: Array<IReport>;
    }
    interface IMontantCredit {
        montantOrigineCredit: number;
        montantActualiseCredit: number;
        codeDevise: string;
        montantCapitalRestantSurCredit: number;
        montantImpayeRecouvrer: number;
        montantIndemniteImpaye: number;
        montantMiseDispoFondsEffectuees: number;
        montantAutoriseRA: number;
        seuilMontantRA: number;
    }
    interface IDureeEtDate {
        dureeCredit: number;
        uniteDureeCredit: string;
        dureeAjusteeCreditSuiteRecalcul: number;
        dateEffet: string;
        dateEcheance: string;
        dateFinCredit: string;
        dureeRestantCourir: number;
        dateProchaineRevisionCredit: string;
        datePrononciationDecheanceTerme: string;
        dateFinSituationImpaye: string;
        dateChangementEntiteCredit: string;
        indicateurPeriodeCompte: boolean;
        dateSignatureRumPayeurSecour: string;
        dateSignatureMandat: string;
        identifiantCredit: string;
        dateMiseRecouvrementZero: string;
        dateAutorRemboursementAnticipe: string;
        dateErePresentationOrdreRecouvr: string;
    }
    interface IInformationGeneraleCredit {
        identifiantCreditElementaire: string;
        libelleLongProduit: string;
        codeOrigineCreditDossier: string;
        codeEngagementReconstituable: string;
        indicateurCompte: string;
        soldeDisponible: number;
        libelleEtatCredit: string;
        libelleNatureFinancement: string;
        codeDestinationAutoriseeObjet: string;
        libelleCategorieEmprunteur: string;
        codeReamenagement: string;
        numeroSituationImpaye: number;
        libelleStandard: string;
        codePassageCreditStatutDouteux: string;
        indicateurBanalise1: string;
        codeBlocageActeGestion: string;
        codeIndicExitenceAvenantsCred: boolean;
        zoneBanaliseeAlphanumLongueur: string;
        zoneBanaliseeAlphanumLongueur2: string;
        zoneBanaliseeAlphanumLongueur4: string;
        zoneBanaliseeAlphanumLongueur3: string;
        numeroRegleCalculModaliteImpaye: string;
        libelleModaliteCalculImpaye: string;
        codeTypeTauxModaliteImpaye: string;
        delaiAvantRecouvrement: number;
        codeTypeDomiciliation: string;
        libelleLongModeReglement: string;
        codeTypeDomiciliation2: string;
        libelleModeReglement: string;
        referenceUniqueMandat: string;
        codeRevisabilite: string;
        identifiantDossier: string;
        montantGlobalGarantiCredit: number;
        codeModaliteOccupation: string;
        dateEnvoiConvocationAG: string;
        codeFamilleControle: string;
        identifiantProduit: string;
        codeAutorisationRA: string;
        nombreEcheanceAccessoiresReport: number;
        numeroModaliteRA: number;
        codeAutorisationRAPartiel: string;
        codeModeRecalculTASuiteRA: string;
        codeDateDebutAutorisationRA: string;
        numDomiciliationSecoursEmpr: string;
        refUniqueMandatPayeurSecour: string;
        numDomiciliationMiseRecouvr: string;
        codeEcheancierVersemContractuel: string;
        identifiantAncienCredit: string;
        codeRestitutionTEG: string;
        codeOrigineCession: string;
        codeFraction: string;
        montantHypotheseCapital: number;
        tauxEffectifGlobalProportionnel: number;
        typeCofinancement: string;
        dateCessionPret: string;
        identifiantNumeroOpefi: string;
        montantTotal: number;
    }
    interface IFraisCredit {
        cumulFraisDossier: number;
        montantFraisCommission: number;
        codeDevise: string;
        montantFraisGarantie: number;
    }
    interface ITauxCredit {
        tauxEffectifGlobal: number;
        tauxNominalCredit: number;
        libelleModeCalcul: string;
        tauxActuarielCredit: number;
        margeCreditActuariel: number;
        margeAppliquerSurTauxNominal: number;
        signe: string;
        tauxInteretsRetardImpaye: number;
        codeRestitutionTEG: string;
        tauxEffectifGlobalProportionnel: number;
    }
    interface IListeCredits extends IElementGestion {
        listeCredits: Array<ICaracteristiqueCredit>;
        /**
         * identifiant de l'emprunteur unique pour la liste des crédits
         */
        identifiantEmprunteur: string;
        identifiantCaisse: number;
        compteurMiseAJour: number;
        dateConvocationAG: string;
        geccoNonAJour: boolean;
    }
    interface ISinistre {
        dateClotureSinistre: string;
        dateReponseOrganisme: string;
        identifiantCredit: string;
    }
    interface IAvenantCredit {
        libelleSurCaracteres: string;
        codeAppelWS: number;
    }
    interface IRemboursementAnticipeCredit {
        dateAnnulationModification: string;
        codeTypeAleaSurPret: string;
        statutAleaSurPret: string;
        codeAnnulationRA: string;
    }
    interface IInformationPhaseCredit {
        codeRetour: number;
        numeroRelatifPhaseCredit: number;
        codeTypePhase: string;
        dureeInitialePhaseCredit: number;
        uniteDureePhase: string;
        tauxMoyenPhaseCredit: number;
        periodiciteCalculInterets: string;
        typeRemboursement: string;
        identifiantCreditElementaire: string;
        montantPartAmortissableCapital: number;
        montantPartInfine: number;
        montantQuotiteAmortissement: number;
        periodiciteApplicProgreEcheance: string;
        alphaNumeriqueBanalisee1: boolean;
        tauxInteretPalier: number;
        amortissementSuppFinPhase: number;
        periodiciteMiseRecouvrInterets: string;
    }
    interface IGestionBackOffice {
        indicateurGestionCentralise: string;
        identifiantCredit: string;
    }
    interface IInformationSinistre extends IElementGestion {
        listeSinistres: Array<ISinistre>;
    }
    interface IInformationRemboursement extends IElementGestion {
        listeRemboursementAnticipe: Array<IRemboursementAnticipeCredit>;
    }
    interface IInformationAvenant extends IElementGestion {
        listeAvenant: Array<IAvenantCredit>;
    }
    interface IJustifTauxMoyen {
        identifiantCredit: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        tauxMoyenPhaseCredit: number;
        pourcentageCreditCouvert: number;
        codeEnregistrement: string;
        nombreMois: number;
    }
    interface IPayeurSecours {
        codeTypeDomiciliation: string;
        libelleLongModeReglement: string;
        delaiAvantRecouvrement: number;
        dateSignatureRumPayeurSecour: string;
        numeroDomiciliationSecoursEmpr: string;
        refUniqueMandatPayeurSecour: string;
    }
    interface IDureeVersement extends IElementGestion {
        identifiantCredit: string;
        dureePeriodePremierVersement: number;
        unitePeriodePremierVersement: string;
        dureePeriodeVersement: number;
        uniteDureeVersements: string;
        dateMiseRecouvrementZero: string;
        codeTypeModification: string;
        identifiantCaisse: number;
        dateDerniereMAJStatutElement: string;
        indicateurBanalise: string;
        compteurMiseAJour: number;
        codeNatureJustificatif: string;
        dureeInitialePhaseCredit: number;
        uniteDureePhase: string;
        codeEditionClient: string;
        codeEnvoiAvisEcheance: string;
        nombrePersonnesACharge: number;
        montantPrimeEpargneLogement: number;
        codeDevise: string;
        montantForfaitaireEcheance: number;
        referenceExterneJustificatif: string;
        codeEligibiliteAPL: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        listeNatureJustificatif: Array<INatureJustificatif>;
        codeMiseRecouvrementZero: string;
        ancienneDateMER0: string;
        natureJustificatif: INatureJustificatif;
        codeTypeModificationCredit6: string;
        codeTypeModificationCredit7: string;
        codeTypeModificationCredit: string;
        dateLimitePremiereMiseDispoFond: string;
        dateLimiteMiseDispoFondsCredit: string;
        codeLimitePremiereMiseDispoFond: string;
        codeLimiteMiseDispoFondsCredit: string;
    }
    interface IEcheance {
        montantProchaineEcheance: number;
        codeDevise: string;
        dateEcheance: string;
        dateActiveEchance: string;
        dateDecisionOrdre: string;
        datePremierePresentation: string;
        dateActiveDerniereEcheance: string;
        dateDecisionCaisse: string;
        libTypeEcheancePremierRecouv: string;
        libTypeEcheanceDernierRecouv: string;
    }
    interface IDonneeCredit extends IElementGestion {
        identifiantCredit: string;
        dateDecision: string;
        dateEffet: string;
        dateCloture: string;
        dateAnnulationModification: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        identifiantDossierCommercial: string;
        identifiantAncieneCredit: string;
        identifiantObjet: string;
        typeObjetReglemente: string;
        codeCategorieEmprunteur: string;
        codeDevise: string;
        codeExistJustifDeclenchement: string;
        codeFamilleControle: string;
        codeOrigineCredit: string;
        indicateurBanalise: string;
        codeModificationAutorise: string;
        numeroRelatif: number;
        listeJustificatif: Array<IJustificatifCredit>;
        categorieReglementAttribution: string;
        codeEtablissement: number;
        compteurMiseAJour: number;
    }
    interface IJustificatifCredit {
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        libelleStatutJustificatif: string;
        dateDerniereMAJStatutElement: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        montantVersementAutoriseJustif: number;
        montantJustificatif: number;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
        zoneBanalise: string;
    }
    interface INatureJustificatif {
        codeClasseJustificatif: string;
        sousClasseJustificatif: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
    }
    interface IDetailsBonificationCredit {
        identifiantCaisse: number;
        identifiantCredit: string;
        montantBonifReelleTiers: number;
        montantBonifReelleEtab: number;
        montantBonifTheoriqueTiers: number;
        montantBonifTheoriqueEtab: number;
        dateDemandeDequalification: string;
    }
    interface ICreditRattache {
        identifiantCaisse: number;
        identifiantCredit: string;
        identifiantDossierCommercial: string;
        codeBanque: string;
        identifiantAncienCredit: string;
        identifiantDossierOrigine: string;
        codeFamilleProduit: string;
        numeroRelatifProduit: string;
        codeAppartenanceReseau: string;
        typeAppartenanceReseau: string;
        dateCloture: string;
        montantResteDuPretRachete: number;
        montantEcheancePretRachete: number;
        periodiciteConcours: string;
        dateFinCredit: string;
        libelleLongProduit: string;
        typeLoi: string;
        codeTypeCredit: number;
        etablissementPreteur: string;
        typeLienCreance: string;
        codeTypeDomiciliation: string;
        domiciliationNumeroCompte: string;
    }
    interface IJustificatifTauxMoyenGlobal extends IElementGestion {
        listeJustifTauxMoyen: Array<IJustifTauxMoyen>;
    }
    interface IInformationModalite {
        codeEtablissement: number;
        identifiantCredit: string;
        dateValeurProchainVersement: string;
        dateLimiteMiseADispoFonds: string;
        periodiciteVersement: string;
        montantPremierVersement: number;
        montantVersementsFractionnes: number;
        nombreVersementsSouhaites: number;
    }
    interface ICaracteristiqueFinanciere {
        codeEtablissement: number;
        identifiantCredit: string;
        montantRecouvreAmorti: number;
        montantRecouvreInteret: number;
        montantRecouvreAssuranceAmorti: number;
        montantRecouvreInfine: number;
        montantRecouvreInteretAmorti: number;
        montantRecouvreAssuranceInfine: number;
    }
    interface IVariationsDureeAutorisees extends IElementGestion {
        nombrePeriodeReductionDuree: number;
        uniteDureeCredit: string;
        codeTypeTraitementEcheance: string;
        libelleStandard: string;
        indicateurCompte: string;
        nombreMaxPerSortieCptCourant: number;
        nombreMaxPerAllongModulation: number;
        codeRevisabilite: string;
        nombreMaxPerAllongRevision: number;
    }
    interface IReport {
        /**
         * Code retour
         */
        codeRetour: number;
        /**
         * Identifiant crédit
         */
        identifiantCreditElementaire: string;
        /**
         * Numéro relatif
         */
        numeroRelatif: number;
        /**
         * Date début application
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * Date fin application
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * Date de début de chômage
         */
        dateDebutChomage: number;
        /**
         * Code type modification crédit
         */
        codeTypeModificationCredit: string;
        /**
         * Numéro de la periode de fractionnement
         */
        numeroPeriodeFractionnement: number;
        /**
         * Numéro du plan de sécurisation
         */
        numeroPlanSecurisation: number;
        /**
         * Nb mois suspension report
         */
        nombreMoisSuspensionReport: number;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.CaracteristiqueDossier {
    interface IObjetFinancement {
        libelleCourtTypeObjetCommercial: string;
        libelleTypeObjReglementeTor: string;
        adresseLigne1: string;
        adresseLigneSuite6: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigneCodePostal4: string;
        adresseLigneCommune5: string;
        montantEmpruntTotalPlan: number;
        montantApportPersonnel: number;
        codeAuthenticiteContrat: boolean;
        notationEngagementBale: string;
        dateSaisieEvenement: string;
        libelleElementStructure: string;
        fonctionAgentInstructeurDossier: string;
        codeDevise: string;
        identifiantElementStructure: string;
        designationElementStructure: string;
        codeEtatDossierEnGestion: string;
        idElementStructureInstruction: string;
        libelleElementInstruction: string;
        montantResteAVivreParMois: number;
        tauxPretValeurAchat: number;
        tauxApportPersonnel: number;
        tauxEndettementCredit: number;
    }
    interface ICaracteristiqueGeneraleDossier extends IElementGestion {
        identifiantCaisseEpargne: number;
        libelleTiers: string;
        objetFinancement: IObjetFinancement;
        typeLoi: string;
        dateEditionOffre: string;
        dateDecision: string;
        dateReceptionOffreClient: string;
        dateSignature: string;
        dateEffet: string;
        dateAnnulationModification: string;
        codeModifAnnulationModification: string;
        identifiantDossierCommercial: string;
        donneeDossier: IDonneeDossier;
        dateFinValidite: string;
        idEDSRattachementPF: number;
        agenceRattachement: number;
        codeEtablissementContext: string;
        codeGuichetDebutJournee: number;
        idEDSRattachementGuichet: number;
        typeElementStructureGuichet: string;
        typeElementStructurePF: string;
        posteFonctionnelAgent: number;
        typeObjet: string;
        codeIndicSignrElect: string;
    }
    interface IDonneeDossier extends IElementGestion {
        listeJustificatif: Array<IJustificatifDossier>;
        identifiantDossier: string;
        dateDecision: string;
        dateEffet: string;
        dateCloture: string;
        dateAnnulationModification: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        identifiantCredit: string;
        identifiantDossierInstruction: string;
        identifiantObjet: string;
        typeObjetReglemente: string;
        catReglementaireAttribution: string;
        codeDevise: string;
        indicateurBanalise: string;
        codeModificationAutorisee: string;
        numeroRelatif: number;
        codeEtablissement: number;
        compteurMiseAJour: number;
        codeCategorieEmprunteur: string;
        listeNatureJustificatif: Array<INatureJustificatif>;
    }
    interface IJustificatifDossier {
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        libelleStatutJustificatif: string;
        dateDerniereMAJStatutElement: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        montantVersementAutoriseJustif: number;
        montantJustificatif: number;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
        zoneBanalise: string;
    }
    interface INatureJustificatif {
        codeClasse: string;
        libelleCodeClasse: string;
        sousClasse: string;
        libelleSousClasse: string;
        codeNature: string;
        libelleNature: string;
        codeCategorie: string;
        libelleCategorie: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustification: string;
        zoneBanalise: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.ConventionJuridique {
    interface IConvention {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * LIBELLE COURT CONVENTION.
         */
        libelleCourtConvention: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * DT PRISE EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        datePriseEffetConvention: string;
        /**
         * DATE FIN EFFET CONVENTION
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetConvention: string;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * code indique convention commerciale
         */
        codeConventionCommerciale: string;
        /**
         * liste des Code identification convention jur qu'on recherche, séparés par des ";"
         */
        listeCodeIdentificationConventionJur: Array<string>;
    }
    interface IConventionJuridique {
        /**
         * Nombre de resultat de la recherche.
         * Seul 20 éléments sont renvoyés.
         */
        nombreResultatRecherche: number;
        listeConvention: Array<IConvention>;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.DetailTableauAmort {
    interface IParamDetailEcheanceApres {
        numeroEcheance?: number;
        dateErePresentation?: string;
        typeSimulationCalculTa?: string;
        numeroRelatif?: number;
        codeTypeModificationCredit?: string;
        dtExProchaineMerApresAvenant?: string;
        codeRoleCreditAvenant?: string;
        numeroRelatifSimulationAvenant?: number;
        dateEcheanceSynthese?: string;
    }
    interface IDetailEcheanceTableau {
        codeTypePhase: string;
        tauxInteretPalier: number;
        codeDevise: string;
        zoneMontantBanalisee12: number;
        zoneMontantBanalisee3: number;
        zoneMontantBanalisee1: number;
        zoneMontantBanalisee2: number;
        montantPremiereEcheancePhase1: number;
        capitalRestantComptable: number;
        zoneBanaliseeNumeriqueSV2: number;
        zoneMontantBanalisee: number;
        codeTypeEcretage: string;
        montantBaseEcretage: number;
        zoneMontantBanalisee4: number;
        identifiantCaisse: number;
        identifiantCredit: string;
        montantInteretsOrdreMER: number;
        montantAmortissementOrdreMER: number;
    }
    interface IVersementRemboursementAnticipePeriode {
        libelleTypeEvenement: string;
        dateSaisieEvenement: string;
        duree: number;
        tauxInteretPalier: number;
        montantEncours: number;
        identifiantCaisse: number;
        identifiantCredit: string;
        numeroRelatif: number;
        montantEcheanceMER1: number;
        montantEcheanceMiseDispoFonds: number;
        numeroEcheanceMiseDipoFonds: number;
    }
    interface IDetailAccessoire {
        libelleCourtTypeAccessoire: string;
        montantPrimeAssurance2: number;
        montantTva: number;
        tauxTva: number;
        identifiantCaisseEpargne: number;
        identifiantCreditElementaire: string;
        numeroRelatif1: number;
        dateDebutApplicationAccessoire: string;
        dateFinApplicationAccessoire: string;
        montantAssietteAccessoire: number;
        tauxElement: number;
        nombreJours1: number;
        listeDetailAccessoireD: Array<IDetailAccessoireAutre>;
        listeDetailAccessoireAutre: Array<IDetailAccessoireAutre>;
        nombreJoursAnneeDenominateur1: number;
        codeTypeVersementAvantMER: string;
    }
    interface IDetailTableauAmortissement extends IElementGestion {
        listeDetailAccessoire: Array<IDetailAccessoire>;
        listeDetailVersements: Array<IVersementRemboursementAnticipePeriode>;
        listeDetailEcheance: Array<IDetailEcheanceTableau>;
    }
    interface IDetailAccessoireAutre {
        libelleCourtTypeAccessoire: string;
        montantPrimeAssurance2: number;
        montantTva: number;
        tauxTva: number;
        identifiantCaisseEpargne: number;
        identifiantCreditElementaire: string;
        numeroRelatif1: number;
        dateDebutApplicationAccessoire: string;
        dateFinApplicationAccessoire: string;
        montantAssietteAccessoire: number;
        tauxElement: number;
        nombreJours1: number;
        nombreJoursAnneeDenominateur1: number;
        codeTypeVersementAvantMER: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.EvenementCredit {
    interface IEvenementGlobal extends IElementGestion {
        listeEvenements: Array<IEvenement>;
    }
    interface IEvenement {
        codeRetour: number;
        identifiantCaisse: number;
        identifiantCredit: string;
        numeroRelatif: number;
        numeroRelatif2: number;
        dateHistorisation: string;
        dateDeValeurAlea: string;
        dateAffectation: string;
        montantecheanceReduiteSuiteRA: number;
        dateAnnulation: string;
        libelleLongMotif: string;
        dateDecision: string;
        libelleLongMotif2: string;
        libelleTypeEvenement: string;
        libelleAlea: string;
        zoneBanalise32: string;
        codeDevise: string;
        zoneBanalise1: string;
        codeDecheanceTerme: string;
        datePrononciationDecheanceTerme: string;
        montantIndemnitesReclamees: number;
        tauxInteretApresRevision: number;
        tauxInteretPalier: number;
        numeroEcheance: number;
        codeTypeModificationCredit: string;
        codeIndicateurGestionCentralise: string;
        elementStructureGestion: string;
        montantIndemnitesCalculees: number;
        datePremiereEcheanceAmenagee: string;
        dateDerniereEcheanceAmenagee: string;
        montantPartInfine: number;
        montantPartAmortissableCapital: number;
        ancienIdentifiantEmprunteur: string;
        nouvelIdentifiantEmprunteur: string;
        identifiantElementStructure: string;
        dateEcheance: string;
        numeroEcheanceMiseDispoFonds: number;
        codeDeviseVersement: string;
        libelleEtatDossier: string;
        dateDemandeVersement: string;
        dateActivEcheance: string;
        datePrevisionnelleVersement: string;
        dateValeurEcheance: string;
        montantEcheance: number;
        isVersement: boolean;
        dateTri: string;
        montantVersApresPrelevement: number;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.GarantieCredit {
    interface IGarantieCredit {
        identifiantGarantie: string;
        capitalCouvertGarantie: number;
        codeDeviseGarantie: string;
        pourcentageCreditCouvert: number;
        dateValeurGestionnaire: string;
        datePriseEffetGarantie: string;
        dateFinValiditeGarantie: string;
        dureeValiditeGarantie: number;
        montantAccessoire: number;
        dureeApplicationElement: number;
        uniteDureeApplicElement: string;
        acteAuthentiqueSurGarantie: boolean;
        codeNatureCautionnement: string;
        montantGarantie: number;
        rangHypotheque: number;
        numeroSecondRangHypotheque: number;
        codeValeurPacteCommissoire: string;
        dateFinEffetConvention: string;
        codeHypothequeRechargeable: string;
        codeGarantieDouteuse: string;
        libelleLongConvention: string;
        numeroExterneGarantie: string;
        libelleNatureGarantie: string;
        libelleTiers: string;
        listeJustificatifs: IDonneeGarantie;
        montantCouvertHypothRgAnterieur: number;
        sommeDernMontantEncoursCompta: number;
        typeSurete: string;
        classeGarantie: string;
        dernierMontantEncours: string;
        redacteurActe: string;
        identifiantGarantie1: string;
        codeGarantieRechargeableEx: string;
        dateFinAffectationCredit: string;
        commentaireGarantie: string;
        codeTypeConvention: string;
        listeAccessoireGarantie: Array<IAccessoireGarantie>;
    }
    interface IObjetEnGarantie {
        listeEstimation: Array<IEstimationObjet>;
    }
    interface IEstimationObjet {
    }
    interface IJustificatifGarantie {
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        libelleStatutJustificatif: string;
        dateDerniereMAJStatutElement: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        montantVersementAutoriseJustif: number;
        montantJustificatif: number;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
    }
    interface IMontantCompta {
        identifiantGarantie: string;
        dernierMontantEncoursCompta: number;
    }
    interface INatureJustif {
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClasseJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        libelleCategorieJustificatif: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustificatif: string;
        codeCategorieJustificatif: string;
    }
    interface IDonneeGarantie extends IElementGestion {
        identifiantGarantie: string;
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        codeEtatGarantie: string;
        libelleEtatGarantie: string;
        datePriseEffetGarantie: string;
        dateFinValiditeGarantie: string;
        dateClotureGarantie: string;
        dateAnnulationGarantie: string;
        libelleTiers: string;
        denominationClient: string;
        identifiantCredit: string;
        identifiantConvention: string;
        montantGarantie: number;
        codeDeviseGarantie: string;
        numeroRelatif: number;
        zoneBanaliseA: string;
        zoneBanaliseB: string;
        indicateurBanalise1: string;
        indicateurBanalise2: string;
        codeModificationAutorisee: string;
        codeVoieParee: string;
        dureeValiditeGarantie: number;
        identifiantEmprunteur: string;
        listeJustificatif: Array<IJustificatifGarantie>;
        listeNatureJustif: Array<INatureJustif>;
        identifiantGarant: string;
        numeroExterneConvention: string;
        codeValeurPacteCommissoire: string;
        codeEtablissement: number;
        codeDevise: string;
        compteurMiseAJour: number;
    }
    interface IJustificatifGarantieGlobal {
        listeJustificatif: Array<IJustificatifGarantie>;
        listeDonneeGarantie: Array<IDonneeGarantie>;
        listeNatureJustif: Array<INatureJustif>;
    }
    interface IGarantieGlobal extends IElementGestion {
        listeGarantieCredit: Array<IGarantieCredit>;
        codeEtablissement: number;
        identifiantCredit: string;
        codeDevise: string;
        compteurMiseAJour: number;
        libelleLongProduit: string;
        libelleCourtProduit: string;
        redacteurActe: string;
        codeAuthenticiteContrat: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        identifiantEmprunteur: string;
        montantValorisation: IMontantRevalorisation;
    }
    interface IMontantRevalorisation {
        codeEtablissement: number;
        identifiantObjet: string;
        dateEstimationValeurObjetPruden: string;
        montantValeurObjetPrudentielle: number;
        codeModaliteEstimationPruden: string;
        codeMotifReestimationPruden: string;
    }
    interface IMontantComptaGlobal {
        listeMontantCompta: Array<IMontantCompta>;
        montantRevalorisation: IMontantRevalorisation;
    }
    interface IAccessoireGarantie {
        identifiantGarantie: string;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        codeModeDeCalculAccessoire: string;
        natureAccessoirePeriodique: string;
        dateAppelAccessoire: string;
        codeAppelEcheance: string;
        codeCommissionIntervenantExt: string;
        listeDetailAccessoire: Array<IDetailsAccessoireGarantie>;
    }
    interface IDetailsAccessoireGarantie {
        identifiantGarantie: string;
        codeTypeAccessoire: string;
        numeroRelatifPhaseCredit: number;
        codeTypePhase: string;
        periodiciteApplicationElement: string;
        montantElement: number;
        montantPlafondTranche: number;
        tauxElement: number;
        montantPlafondTranche1: number;
        tauxElement1: number;
        montantPlafondTranche2: number;
        tauxElement2: number;
        montantPlafondTranche3: number;
        tauxElement3: number;
        tauxElement4: number;
        libelleTypeAssietteCalcul: string;
        montantPlafondTranche4: number;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.HabilitationCredit {
    interface IHabilitation {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeUtilisateur: string;
        codeNatureTraitement: string;
        codeHabilitation: string;
        codeRetour: number;
        codeCategorieEmprunteur: string;
        codeNatureFinancement: string;
        codeTypeMarche: string;
        montantPlafond: number;
    }
    interface IHabilitationCredit {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeUtilisateur: string;
        identifiantElementStructure: string;
        codeCategorieEmprunteur: string;
        codeNatureFinancement: string;
        codeTypeMarche: string;
        codeReponseHabilitation: string;
        codeNatureTraitement: string;
        listeHabilitation: Array<IHabilitation>;
        codeRetour: number;
    }
    interface IHabilitationCache {
        listeHabilitation: Array<IHabilitation>;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.IncidentPaiement {
    interface IDonneeIncidentPaiement {
        identifiantCreditElementaire: string;
        codePriseComptePlanAmenagem: boolean;
        zoneBanaliseeAlphanumLongueur1: boolean;
        codeDecheanceTermeCredit: boolean;
        datePrononciationDecheanceTerme: string;
        montantAleaCapital: number;
        codeDeviseIso: string;
        zoneMontantBanalisee3: number;
        zoneMontantBanalisee4: number;
        montantReporte: number;
        montantInteretsCourusReporte: number;
        dateDebutSituationImpaye: string;
        dateFinSituationImpaye: string;
        dateBlocageEditionAutomatImpaye: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        libelleDecisionSuspension: string;
        commentNatureActionSuiteImpaye: string;
        dateFinBlocageMERSuiteSuspens: string;
        montantCumulAccCourusSuiteRA: number;
        montantRecouvrerAccHorsConv: number;
        editionCourrierImpayeAuto: boolean;
        dateDernierCalculIndemRetard: string;
    }
    interface ICreanceGelee {
        montantGelCreance: number;
        identifiantCreditElementaire: string;
        numeroCreanceGelee: number;
        libelleTypeCreance: string;
        dateDebutGelCreance: string;
        montantOrigineGelCreance: number;
        codeDeviseIso: string;
        codeMotifCloture1: string;
        montantAllegementPeriodique: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        codePriseChargeCapital: boolean;
        codePriseChargeInteret: boolean;
        codePriseChargeMontantConven: boolean;
        dateFinGelCreance: string;
        libelleLongMotif: string;
        montantAmortGeleEcheanceGelee2: number;
        montantAccConventionEchGel8: number;
        montantAccHorsConvEcheanceGele9: number;
        codePriseChargeMontantNonConv: boolean;
        montantInteretGelEcheanceGele2: number;
    }
    interface IImpayeEmprunteur extends IElementGestion {
        listeCreanceGelee: Array<ICreanceGelee>;
        listeDonneeIncidentPaiement: Array<IDonneeIncidentPaiement>;
    }
    interface IFaisabilite {
        actionFaisable: boolean;
        listeMessage: Array<string>;
        codeRetourQR: number;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit {
    interface IPretCombine {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * MT part amortissable du capital
         */
        montantPartAmortissableCapital: number;
        /**
         * Montant de la part in fine
         */
        montantPartInfine: number;
        /**
         * Mode de répartition du capital
         */
        modeRepartitionCapital: string;
        /**
         * Code ajout intér. cap sur part amort
         */
        codeAjoutIntercapSurPartAmort: string;
        /**
         * montant de la quotité d'amortissemen
         */
        montantQuotiteAmortissement: number;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAAmortir: number;
        /**
         * Amort. supplémentaire fin phase
         */
        amortissementSuppFinPhase: number;
    }
    interface IParametreRevisionTaux {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision: number;
        /**
         * VALEUR OU COEFF PARAMETRE REVISION
         */
        valeurCoeffParametreRevision1: number;
        /**
         * MODE EXPRESSION BUTOIR TAUX BAISSE
         */
        modeExpressionButoirTauxBaisse: string;
        /**
         * MODE EXPRESSION BUTOIR TAUX HAUSSE
         */
        modeExpressionButoirTauxHausse: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * Numéro de période de révision
         */
        numeroPeriodeRevision: number;
        /**
         * IDENTIFIANT LOI DE REVISION
         */
        identifiantLoiRevision: string;
        /**
         * CD ECHEANCE RECALCULEE PAR REVISION
         */
        codeEcheanceRecalculeeRevision: string;
        /**
         * Nombre échéance avant recalcul mont.
         */
        nmbrEcheanceAvtRecalculMontant: number;
        /**
         * Evènement déclencheur début période
         */
        evenemntDeclencheurDebutPeriode: string;
        /**
         * CD unité période début de révision
         */
        codeUnitePeriodeDebutRevision: string;
        /**
         * Nb pér. pour dét. début de période
         */
        nbrPeriodePrDeterminerDbtPeriod: number;
        /**
         * Durée de la période de révision
         */
        dureePeriodeRevision: number;
        /**
         * Unité de durée de la période de rév.
         */
        uniteDureePeriodeRevision: string;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * Elément modifiable par avenant
         */
        elementModifiableParAvenant: string;
        /**
         * MODE EXPRESSION VALEUR UTILIS INDICE
         */
        mdExpressionValeurUtilisIndice: string;
        /**
         * CD TYPE DE ROLE INDICE
         */
        codeTypeRoleIndice: string;
    }
    interface IPhase {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE LONG TYPE DE PHASE
         */
        libelleLongTypePhase: string;
        /**
         * DUREE INITIALE PHASE CREDIT
         */
        dureeInitialePhaseCredit: number;
        /**
         * DUREE RESIDUELLE CREDIT
         */
        dureeResiduelleCredit: number;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * Taux nominal de la phase
         */
        tauxNominalPhase: number;
        /**
         * CODE TAUX DES PALIERS CALCULES
         */
        codeTauxDesPaliersCalcules: string;
        /**
         * TAUX MOYEN PHASE CREDIT
         */
        tauxMoyenPhaseCredit: number;
        /**
         * MODE DE CALCUL AMORTISSEMENT
         */
        modeCalculAmortissement: string;
        /**
         * QUOTITE DE CAPITAL A AMORTIR
         */
        quotiteCapitalAmortir: number;
        /**
         * PERIODICITE M.E.R. AMORTISSEMENT
         */
        periodiciteMERamortissement: string;
        /**
         * PERIODICITE CALCUL INTERETS
         */
        periodiciteCalculInterets: string;
        /**
         * DATE FIN DE PREFINANCEMENT INITIALE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementInitiale: string;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * Type d'indexation du taux
         */
        typeIndexationTaux: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMiseRecouvrInterets: string;
        /**
         * NUMERO JEU INDICES DE REVISION
         */
        numeroJeuIndicesRevision: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * MODE CAPIT. RECOUV. INTERETS
         */
        modeCapitRecouvInterets: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurabsorbeePhasePalier: string;
        /**
         * Partie fixe d'un taux composite
         */
        partieFixeUnTauxComposite: number;
        /**
         * NB DE JOURS DANS ANNEE DENOMINATEUR
         */
        nbJoursDansAnneeDenominateur: number;
        /**
         * NB DE JOURS DANS ANNEE NUMERATEUR
         */
        nbJoursDansAnneeNumerateur: number;
        /**
         * CALCUL INTERETS EN JOURS REELS
         */
        calculInteretsEnJoursReels: string;
        /**
         * Prélèvement en fin de phase
         */
        prelevementEnFinPhase: string;
        /**
         * CODE TYPE ECRETAGE
         */
        codeTypeEcretage: string;
        paliersTauxInterets: Array<IPalierTauxInteret>;
        parametresRevisionTaux: Array<IParametreRevisionTaux>;
        paliersTauxAmortissement: Array<IPalierTauxAmortissement>;
        pretsCombines: Array<IPretCombine>;
    }
    interface IPalierTauxInteret {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * CODE INDICE
         */
        codeIndice: string;
        /**
         * MARGE A APPLIQUER SUR TAUX
         */
        margeAppliquerSurTaux: number;
        /**
         * TAUX INTERET PALIER
         */
        tauxInteretPalier: number;
        /**
         * TYPE DE REMBOURSEMENT
         */
        typeRemboursement: string;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF PALIER / PRODUIT
         */
        numeroRelatifPalierProduit: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * CD MODIF CARACTERIST. FINANCIERES
         */
        cdModifCaracteristfinancieres: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurabsorbeePhasePalier: string;
        /**
         * TAUX DE PROGRESSION DES ECHEANCES
         */
        tauxProgressionDesEcheances: number;
        /**
         * PERIODICITE APPLIC PROGRE ECHEANCE
         */
        periodiciteApplicProgreEcheance: string;
    }
    interface IPalierTauxAmortissement {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO PREMIERE ECHEANCE PALIER
         */
        numeroPremiereEcheancePalier: number;
        /**
         * NUMERO DERNIERE ECHEANCE PALIER
         */
        numeroDerniereEcheancePalier: number;
        /**
         * TAUX DE PROGRESSION AMORTISSEMENT
         */
        tauxProgressionAmortissement: number;
        /**
         * CD INDEXATION TAUX PROGRESSION AMORT
         */
        cdIndexTauxProgressionAmort: string;
        /**
         * UNITE DUREE D'UNE PHASE
         */
        uniteDureePhase: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * ELEMENT MODIFIABLE PAR AVENANT
         */
        elementModifiableParAvenant: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurabsorbeePhasePalier: string;
    }
    interface IEcheanceReportee {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * DATE DE DEBUT DE CHOMAGE
         * Type date au format yyyy-MM-dd
         */
        dateDebutChomage: string;
        /**
         * NUMERO DU PLAN DE SECURISATION
         */
        numeroPlanSecurisation: number;
        /**
         * NUMERO DE LA PERIODE DE FRACTIONNEME
         */
        numeroPeriodeFractionneme: number;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nombreEcheancesAccessReport: number;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
    }
    interface IAccessoire {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiantAssurance: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE TYPE DE PHASE
         */
        codeTypePhase: string;
        /**
         * NO RELATIF PHASE/Type Phase Produit
         */
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * DUREE APPLICATION ELEMENT
         */
        dureeApplicationElement: number;
        /**
         * PERIODICITE APPLICATION ELEMENT
         */
        periodiciteApplicationElement: string;
        /**
         * NUMERO REGLE APPLICATION ELEMENT
         */
        numeroRegleApplicationElement: string;
        /**
         * MT ELEMENT ( ACCESSOIRE )
         */
        montantElement: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ELEMENT
         */
        codeTypeAssietteCalculElement: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondTrancheCalculAccess4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement4: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif1: number;
        /**
         * CODE MODE CALCUL TAUX
         */
        codeModeCalculTaux: string;
        /**
         * CODE ACTION ECRAN LISTE
         */
        codeActionEcranListe: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * UNITE DUREE APPLIC ELEMENT
         */
        uniteDureeApplicElement: string;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numRegleApplicationAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire1: string;
        /**
         * NUMERO REGLE DE CALCUL ELEMENT
         */
        numeroRegleCalculElement: string;
        /**
         * QUOTITE COUVERTURE CREDIT
         */
        quotiteCouvertureCredit: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessDansCalculTEG: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * Indicateur Accessoire Obligatoire
         */
        indicateurAccessoireObligatoire: string;
        /**
         * Indicateur Accessoire Validé
         */
        indicateurAccessoireValide: string;
        /**
         * Indicateur Accessoire Annulé AV
         */
        indicateurAccessoireAnnuleAv: string;
        /**
         * INDIC ACCESSOIRE CREE PAR AVENANT
         */
        indicAccessoireCreeParAvenant: string;
        /**
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nbrEcheancesAccessoiresReport: number;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * IDENTIFIANT CONVENTION
         */
        identifiantConvention: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG CONVENTION
         */
        libelleLongConvention: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire1: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire2: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire3: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire4: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * MT PAS MONTANT ACCESSOIRE
         */
        mtPasMontantAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * LIBELLE TYPE ASSIETE DE CALCUL
         */
        libelleTypeAssieteCalcul: string;
        /**
         * DATE DEBUT APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationElement: string;
        /**
         * DATE FIN APPLICATION ELEMENT
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationElement: string;
        /**
         * DATE APPEL ACCESSOIRE
         * Type date au format yyyy-MM-dd
         */
        dateAppelAccessoire: string;
        /**
         * NO PHASE CREDIT PROCHAINE REVISION
         */
        noPhaseCreditProchaineRevision: number;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif2: number;
        /**
         * libellé standard
         */
        libelleStandard: string;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        regleDateDebutApplicatAccess: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * REGLE DATE DEBUT APPLI ACC catalogue
         */
        regleDateDebutAppliAccCatalogue: string;
        /**
         * REGLE EVENEMENT DECH. 1ER APPEL cata
         */
        regleEvenementDech1erAppelCata: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccess: string;
        /**
         * NUMERO TRANCHE
         */
        numeroTranche: number;
        /**
         * Mode de Compta./Recouvr. Accessoire
         */
        modeComptaRecouvrAccessoire: string;
        /**
         * Montant d'Accessoire A Etaler
         */
        montantAccessoireAEtaler: number;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * IDENTIFIANT SERVICE
         */
        identifiantService: string;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE SOUS TYPE ACCESSOIRE COMPL
         */
        codeSousTypeAccessoireCompl: string;
        /**
         * CODE TYPE APPLICATION ACCESSOIRE
         */
        codeTypeApplicationAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code indicateur dérogation bornes
         */
        codeIndicateurDerogationBornes: string;
        /**
         * Code indicateur bornes dérogées
         */
        codeIndicateurBornesDerogees: string;
        /**
         * NB JOURS ANNEE NUMERATEUR
         */
        nbJoursAnneeNumerateur: number;
        /**
         * NB JOURS ANNEE DENOMINATEUR
         */
        nbJoursAnneeDenominateur: number;
    }
    interface IRenegociationProduit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * CODE FAMILLE DE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * LIBELLE LONG PROFIL RENEGOCIATION
         */
        libelleLongProfilRenegociation: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
    }
    interface ICreditRatache {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * IDENTIFIANT DOSSIER COMMERCIAL
         */
        identifiantDossierCommercial: string;
        /**
         * CODE BANQUE
         */
        codeBanque: string;
        /**
         * IDT ANCIEN CREDIT ELEMENTAIRE
         */
        idtAncienCreditElementaire: string;
        /**
         * IDENTIFIANT DOSSIER ORIGINE
         */
        identifiantDossierOrigine: string;
        /**
         * CODE FAMILLE PRODUIT
         */
        codeFamilleProduit: string;
        /**
         * NUMERO RELATIF PRODUIT
         */
        numeroRelatifProduit: string;
        /**
         * CODE APPARTENANCE AU RESEAU
         */
        codeAppartenanceReseau: string;
        /**
         * TYPE APPARTENANCE AU RESEAU
         */
        typeAppartenanceReseau: string;
        /**
         * DATE DE CLOTURE
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * Montant du reste dû sur prêt racheté
         */
        montantResteDuSurPretRachete: number;
        /**
         * Montant echeance du prêt racheté
         */
        montantEcheancePretRachete: number;
        /**
         * PERIODICITE CONCOURS
         */
        periodiciteConcours: string;
        /**
         * DATE FIN CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * CODE TYPE DE CREDIT
         */
        codeTypeCredit: number;
        /**
         * ETABLISSEMENT PRETEUR
         */
        etablissementPreteur: string;
        /**
         * TYPE De lien de la creance
         */
        typeLienCreance: string;
        /**
         * CODE TYPE DE DOMICILIATION
         */
        codeTypeDomiciliation: string;
        /**
         * NUMERO COMPTE DOMICILIATION
         */
        numeroCompteDomiciliation: string;
    }
    interface ICredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * IDENTIFIANT PRODUIT
         */
        identifiantProduit: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * LIBELLE TIERS
         */
        libelleTiers: string;
        /**
         * DATE D EFFET
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * MONTANT ECHEANCE
         */
        montantEcheance: number;
        /**
         * MONTANT ORIGINE CREDIT
         */
        montantOrigineCredit: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
        /**
         * DUREE DU CREDIT
         */
        dureeCredit: number;
        /**
         * UNITE DUREE CREDIT
         */
        uniteDureeCredit: string;
        /**
         * DATE ECHEANCE M.E.R.
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Taux nominal du crédit
         */
        tauxNominalCredit: number;
        /**
         * DATE M.E.R. ZERO
         * Type date au format yyyy-MM-dd
         */
        dateMiseRecouvrementZero: string;
        /**
         * CODE MODE EXPRESSION TAUX
         */
        codeModeExpressionTaux: string;
        /**
         * CODE TAUX DU CREDIT DIRECTEUR
         */
        codeTauxCreditDirecteur: string;
        /**
         * CODE CRISTALLISATION TAUX INTERET
         */
        codeCristallisationTauxInteret: string;
        /**
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * MONTANT ECHEANCE M.E.R.
         */
        montantEcheanceMER: number;
        /**
         * MONTANT FRAIS GESTION
         */
        montantFraisGestion: number;
        /**
         * MONTANT ARRIERES INCORPORES AU CRD
         */
        montantArrieresIncorporesCrd: number;
        /**
         * CODE TRAITEMENT FIN DE VERSEMENT
         */
        codeTraitementFinVersement: string;
        /**
         * NUMERO QUANTIEME DATE ECHEANCE
         */
        numeroQuantiemeDateEcheance: number;
        /**
         * Code indice nominal
         */
        codeIndiceNominal: string;
        /**
         * Marge à appliquer sur taux nominal
         */
        margeAppliquerSurTauxNominal: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        montantCapitalRestantSurCredit: number;
        /**
         * CODE TYPE RECALCUL T.A.
         */
        codeTypeRecalculTA: string;
        /**
         * DATE DE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DATE FIN DE PREFINANCEMENT REELLE
         * Type date au format yyyy-MM-dd
         */
        dateFinPrefinancementReelle: string;
        /**
         * CODE INTEGRATION FRAIS AU CRD
         */
        codeIntegrationFraisCrd: string;
        /**
         * IDENTIFIANT PROFIL RENEGOCIATION
         */
        identifiantProfilRenegociation: string;
        /**
         * CODE TYPE AVENANT
         */
        codeTypeAvenant: string;
        /**
         * CODE TYPE MODIFICATION CREDIT
         */
        codeTypeModificationCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * NUMERO MODALITE DE RA
         */
        numModaliteRemboursemntAnticipe: number;
        /**
         * TAUX INDEMNITE R.A.
         */
        tauxIndemniteRA: number;
        /**
         * TAUX INTERET PREFINANCEMENT
         */
        tauxInteretPrefinancement: number;
        /**
         * Code crédit sécurisable
         */
        codeCreditSecurisable: string;
        /**
         * DATE DE FIN DU CREDIT
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * CODE presence de revision sur credit
         */
        codePresenceRevisionSurCredit: string;
        /**
         * MONTANT INT. COMP. SUR C.R.D.
         */
        montantIntcompsurCR: number;
        /**
         * CD TYPE ARRIERES INCORPORE AU CRD
         */
        cdTypeArrieresIncorporeCrd: string;
        /**
         * TYPE DE LOI
         */
        typeLoi: string;
        /**
         * Nb maxi période allong pour révision
         */
        nbMaxiPeriodeAllongPourRevision: number;
        /**
         * Nb maxi pér. all. sortie cpt courant
         */
        nbMaxiPerallsortieCptCourant: number;
        /**
         * Nb maxi pér. allong pour modulation
         */
        nbMaxiPerallongPourModulation: number;
        /**
         * MT CAPITAL RESTANT DU SUR CREDIT
         */
        mtCapitalRestantSurCredit: number;
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinanceGaranti: string;
        /**
         * MONTANT ACTUALISE CREDIT
         */
        montantActualiseCredit: number;
        /**
         * MONTANT GLOBAL GARANTI CREDIT
         */
        montantGlobalGarantiCredit: number;
        /**
         * CODE SOUS TYPE AVENANT RECOUVREMENT
         */
        codeSousTypeAvenantRecouvrement: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * DATE SIGNATURE
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * DATE D EFFET INITIALE DE l'AVENANT
         * Type date au format yyyy-MM-dd
         */
        dateEffetInitialeLAvenant: string;
        /**
         * DATE DE DECISION (EMISSION)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEmission: string;
        /**
         * DUREE AJUSTEE CREDIT SUITE RECALCUL
         */
        dureeAjusteeCreditSuiteRecalcul: number;
        /**
         * DATE DE SAISIE DE L'EVENEMENT
         * Type date au format yyyy-MM-dd
         */
        dateSaisieLEvenement: string;
        /**
         * DATE EMISSION
         * Type date au format yyyy-MM-dd
         */
        dateEmission: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * DELAI MINIMUM D'ACCEPTATION
         */
        delaiMinimumAcceptation: number;
        /**
         * DELAI DE RETRACTATION
         */
        delaiRetractation: number;
        /**
         * COMMENTAIRE PRODUITS
         */
        commentaireProduits: string;
        /**
         * MONTANT M.A.D. DE FONDS DEMANDEES
         */
        montantMAfondsDemandees: number;
        /**
         * CODE ECHEANCIER VERSEM. CONTRACTUEL
         */
        codeEcheancierVersemcontractuel: string;
        /**
         * Code type de prêt combiné
         */
        codeTypePretCombine: string;
        /**
         * Code presence service objet
         */
        codePresenceServiceObjet: string;
        /**
         * Existence accessoire bon/maj taux
         */
        existenceAccessoireBonMajTaux: string;
        /**
         * Cumul des Bonifications/Majorations
         */
        cumulBonificationsMajorations: number;
        /**
         * Code indicateur integration CRD
         */
        codeIndicateurIntegrationCrd: string;
        /**
         * TAUX INTERETS RETARD IMPAYE
         */
        tauxInteretsRetardImpaye: number;
        numeroPhase: number;
        codeTypePhase: string;
        dureeResteAFinancer: number;
        tauxInteretPalier: number;
        dureeResiduelleAjusteeCredit: number;
        numeroEcheance: number;
        montantImpayeRecouvrer: number;
        mtARecouvrerIndemnretardImpaye: number;
        mntMiseDispoFondsEffectuees: number;
        codeGelDette: string;
        montantGelCreance: number;
        numeroPeriodeRevision: number;
        mntInteretsOrdreMiseRecouvrmnt: number;
        amenagementEchsurPretCombine: string;
        amenagementEchexistantSurCredit: string;
        amenagechenCoursADateEffet: string;
        codeCalculInteretsReportes: string;
        montantProchaineEcheance: number;
        /**
         * MONTANT ECHEANCE M.E.R.
         */
        montantEcheanceMER1: number;
        phases: Array<IPhase>;
        echeancesReportees: Array<IEcheanceReportee>;
        accessoires: Array<IAccessoire>;
    }
    interface IInformationCredit extends IElementGestion {
        credit: ICredit;
        creditsRataches: Array<ICreditRatache>;
        renegociationsProduit: Array<IRenegociationProduit>;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.JustifAssurance {
    interface IJustificatifsAssurance {
        codeNatureJustificatif: string;
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        dateDerniereMAJStatutElement: string;
        libelleStatutJustificatif: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
        zoneBanalise: string;
    }
    interface IInformationJustificatif {
        codeAppelWS: number;
        messageAppelWS: string;
        erreurQr: boolean;
        listeJustificatifAssurance: Array<IJustificatifsAssurance>;
        listeJustificatifs: Array<IJustificatifsAssurance>;
    }
    interface INatureJustif {
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClasseJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        libelleCategorieJustificatif: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustificatif: string;
        zoneBanalise: string;
        codeCategorieJustificatif: string;
    }
    interface IDonneeAssurance {
        listeJustificatif: Array<IJustificatifsAssurance>;
        listeNatureJustificatif: Array<INatureJustif>;
        identifiantAssurance: string;
        libelleTypeAssurance: string;
        datePriseEffet: string;
        dateFinEffet: string;
        dateCloture: string;
        dateAnnulationModification: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        identifiantPersonneEstAssure: string;
        denominationGarant: string;
        destinataireLettreImpaye: string;
        identifiantCredit: string;
        identifiantConvention: string;
        numeroExterneConvention: string;
        identifiantIntervenant: string;
        numeroRelatif: number;
        indicateurBanalise: string;
        codeModificationAutorise: string;
        retourQR: Array<IRetourQR>;
        codeEtablissement: number;
        competurMiseAJour: number;
        codeDevise: string;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.JustificatifGarantie {
    interface IJustificatifGarantie {
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        libelleStatutJustificatif: string;
        dateDerniereMAJStatutElement: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        montantVersementAutoriseJustif: number;
        montantJustificatif: number;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
    }
    interface IDonneeGarantie extends IElementGestion {
        identifiantGarantie: string;
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        codeEtatGarantie: string;
        libelleEtatGarantie: string;
        datePriseEffetGarantie: string;
        dateFinValiditeGarantie: string;
        dateClotureGarantie: string;
        dateAnnulationGarantie: string;
        libelleTiers: string;
        denominationClient: string;
        identifiantCredit: string;
        identifiantConvention: string;
        montantGarantie: number;
        codeDeviseGarantie: string;
        numeroRelatif: number;
        zoneBanaliseA: string;
        zoneBanaliseB: string;
        indicateurBanalise1: string;
        indicateurBanalise2: string;
        codeModificationAutorisee: string;
        codeVoieParee: string;
        dureeValiditeGarantie: number;
        identifiantEmprunteur: string;
        listeJustificatif: Array<IJustificatifGarantie>;
        listeNatureJustif: Array<INatureJustif>;
        identifiantGarant: string;
        numeroExterneConvention: string;
        codeValeurPacteCommissoire: string;
        codeEtablissement: number;
        codeDevise: string;
        compteurMiseAJour: number;
    }
    interface INatureJustif {
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClasseJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        libelleCategorieJustificatif: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustificatif: string;
        codeCategorieJustificatif: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.ModeGestion {
    interface IModeGestion extends IElementGestion {
        codeRetour: number;
        identifiantCredit: string;
        codeIndicateurGestionCentralise: string;
        identifiantElementStructure: string;
        libelleElementStructure: string;
        elementGestionBackOffice: string;
        libelleElementStructure2: string;
        identifiantGerePar: string;
        codeConfirmationMAJ: string;
        compteurMiseAJour: number;
        codeBlocageModifAuto: string;
        identifiantCaisseBackOffice: number;
        codeTypeModificationCredit: string;
        actuelCodeGestion: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.PalierCredit {
    interface IPalierCredit extends IElementGestion {
        paliers: Array<IPalier>;
    }
    interface IPalier {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * NUMERO RELATIF SIMULATION AVENANT
         */
        numeroRelatifSimulationAvenant: number;
        /**
         * CODE ROLE CREDIT AVENANT
         */
        codeRoleCreditAvenant: string;
        /**
         * NUMERO RELATIF PHASE CREDIT
         */
        numeroPhase: number;
        /**
         * NUMERO ECHEANCE
         */
        numeroEcheance: number;
        /**
         * CODE TYPE ELEMENT SAISI SUR CREDIT
         */
        codeTypeElementSaisiSurCredit: string;
        /**
         * MONTANT REMBOURSEMENT SAISI
         */
        montantRemboursementSaisi: number;
        /**
         * TAUX DE REMBOURSEMENT SAISI
         */
        tauxRemboursementSaisi: number;
        /**
         * MONTANT AMORTISSEMENT CREDIT SAISI
         */
        montantAmortissementCreditSaisi: number;
        /**
         * MONTANT ECHEANCE EN COURS
         */
        montantEcheanceEnCours: number;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.Parametre {
    interface IParametre {
        critere: ICritere;
        donneeParametre: IDonneeParametre;
    }
    interface ICritereReversementTiers {
        /**
         * IDENTIFIANT CAISSE EPARGNE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BTE30 via la QR SQCA.
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT TIERS.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BTE30 via la QR SQCA.
         */
        identifiantTiers: string;
        /**
         * CODE TYPE ROLE PERSONNE.
         * - 1er mode de recherche.
         */
        typeRolePersonne: string;
        /**
         * DATE DE DEBUT DE VALIDITE.
         * - 2nd mode de recherche.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
    }
    interface IParametreReversementTiers {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT TIERS
         */
        identifiantTiers: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * DATE DE DEBUT DE VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE DE FIN DE VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * PERIODICITE REVERS. OU RECOUV. PRIME
         */
        periodiciteReversementOuPrime: string;
        /**
         * CD DETERMINATION DATE REVERSEMENT
         */
        cdDeterminationDateReversement: string;
        /**
         * DELAI AVANT REVERSEMENT
         */
        delaiAvantReversement: number;
        /**
         * DELAI DE REVERSEMENT
         */
        delaiReversement: number;
        /**
         * DATE PROCHAIN REVERSEMENT/APPEL
         * Type date au format yyyy-MM-dd
         */
        dateProchainReversementSurAppel: string;
        /**
         * CODE MODE REVERSEMENT
         */
        codeModeReversement: string;
        /**
         * NUMERO DOMICILIATION REVERSEMENT
         */
        numeroDomiciliationReversement: string;
        /**
         * CODE MODE APPEL
         */
        codeModeAppel: string;
        /**
         * NUMERO DOMICILIATION APPEL
         */
        numeroDomiciliationAppel: string;
        /**
         * CD DEVISE DU MOUVEMENT FINANCIER
         */
        cdDeviseMouvementFinancier: string;
        /**
         * Référence Unique du Mandat
         */
        referenceUniqueMandat: string;
        /**
         * DATE SIGNATURE MANDAT
         * Type date au format yyyy-MM-dd
         */
        dateSignatureMandat: string;
    }
    interface ICritereNatureGarantie {
        /**
         * CODE NATURE GARANTIE.
         * - 1er mode de recherche.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT02 via la QR SQCA.
         */
        codeNatureGarantie: string;
        /**
         * TYPE DE SURETE.
         * - 2nd mode de recherche.
         */
        typeSurete: string;
        /**
         * CLASSE DE GARANTIE.
         * - 2nd mode de recherche.
         */
        classeGarantie: string;
        /**
         * NUMERO ORDRE CLASSEMENT.
         * - 2nd mode de recherche.
         */
        numeroOrdreClassement: number;
        /**
         * RANG DE LA GARANTIE.
         * - 2nd mode de recherche.
         */
        rangGarantie: number;
        /**
         * LIBELLE LONG NATURE GARANTIE.
         * - 2nd mode de recherche.
         */
        libelleLongNatureGarantie: string;
        /**
         * DATE DE DEBUT DE VALIDITE.
         * - 3ème mode de recherche.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE DE FIN DE VALIDITE.
         * - 3ème mode de recherche.
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
    }
    interface IParametreNatureGarantie {
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * LIBELLE NATURE GARANTIE
         */
        libelleNatureGarantie: string;
        /**
         * TYPE DE SURETE
         */
        typeSurete: string;
        /**
         * ACTE AUTHENTIQUE SUR NATURE GARANTIE
         */
        acteAuthentiqueNatureGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * LIBELLE COURT NATURE GARANTIE
         */
        libelleNatureGarantie1: string;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireCalculTEG: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * RANG DE LA GARANTIE
         */
        rangGarantie: number;
        /**
         * DATE DE DEBUT DE VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE DE FIN DE VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE LONG NATURE GARANTIE
         */
        libelleLongNatureGarantie: string;
        /**
         * CODE HYPOTHEQUE RECHARGEABLE
         */
        codeHypothequeRechargeable: string;
        /**
         * Code Hypothèque ou sureté comparable
         */
        codeHypothequeSureteComparable: string;
    }
    interface ICritereTypeObjetFinancementGarantie {
        /**
         * TYPE OBJET ( FINANCE - GARANTI ).
         * - Recherche sur la table BT03 via la QR SQCA.
         */
        typeObjetFinancementGarantie: string;
        /**
         * CODE NATURE DU FINANCEMENT.
         * - Donnée optionnelle.
         */
        codeNatureFinancement: string;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION.
         * - Donnée optionnelle.
         */
        categReglementaireAttribution: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC.
         * - Donnée optionnelle.
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * CODE AFFECTATION OBJET.
         * - Donnée optionnelle.
         */
        codeAffectationObjet: string;
    }
    interface IParametreTypeObjetFinancementGarantie {
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinancementGarantie: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        categReglementaireAttribution: string;
        /**
         * LIBELLE TYPE OBJET COMMERCIAL - TOC
         */
        libelleTypeObjetCommercialToc: string;
        /**
         * CODE VENTILATION SOUS CLASSE BAFI
         */
        codeVentilationSousClasseBafi: string;
        /**
         * CODE AFFECTATION OBJET
         */
        codeAffectationObjet: string;
        /**
         * LB COURT TYPE OBJET COMMERCIAL - TOC
         */
        libelleCourtTypeObjetCommercial: string;
    }
    interface ICritereTypeAccessoire {
        /**
         * CODE TYPE ACCESSOIRE.
         * - Recherche sur la table BT07 via la QR SQCA.
         */
        codeTypeAccessoire: string;
        /**
         * CODE NATURE ACCESSOIRE;
         * - Donnée optionnelle.
         */
        codeNatureAccessoire: string;
        /**
         * CODE TYPOLOGIE ACCESSOIRE.
         * - Donnée optionnelle.
         */
        codeTypologieAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE.
         * - Donnée optionnelle.
         */
        libelleTypeAccessoire: string;
    }
    interface IParametreTypeAccessoire {
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * LIBELLE TYPE ACCESSOIRE
         */
        libelleTypeAccessoire: string;
        /**
         * CODE ACCESSOIRE DANS CALCUL I.C.N.E.
         */
        codeAccessoireDansCalculICNE: string;
        /**
         * CD ACCESS A CUMULER FRAIS TTC (CT4R)
         */
        codeAccessoireACumulerFraisTTC: string;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
        /**
         * LIBELLE COURT TYPE ACCESSOIRE
         */
        libelleCourtTypeAccessoire: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * CODE TYPOLOGIE ACCESSOIRE
         */
        codeTypologieAccessoire: string;
        /**
         * Code Personnalisation instruction
         */
        codePersonnalisationInstruction: string;
        /**
         * Code Bénéficiaire accessoire
         */
        codeBeneficiaireAccessoire: string;
    }
    interface ICritereTypeFraisGarantie {
        /**
         * CODE NATURE GARANTIE.
         * - Recherche sur la table BT09 via la QR SQCA.
         */
        codeNatureGarantie: string;
        /**
         * CODE TYPE ACCESSOIRE.
         * - Recherche sur la table BT09 via la QR SQCA.
         */
        codeTypeAccessoire: string;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE.
         * - Recherche sur la table BT09 via la QR SQCA.
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * DATE DEBUT APPLICATION.
         * - Donnée optionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
    }
    interface IParametreTypeFraisGarantie {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE ACCESSOIRE OBLIGATOIRE
         */
        codeAccessoireObligatoire: string;
        /**
         * CODE MODE DE CALCUL ACCESSOIRE
         */
        codeModeCalculAccessoire: string;
        /**
         * NUMERO REGLE DE CALCUL ACCESSOIRE
         */
        numeroRegleCalculAccessoire: string;
        /**
         * MONTANT CONSEILLE ACCESSOIRE
         */
        montantConseilleAccessoire: number;
        /**
         * MONTANT MINIMUM PLAGE ACCESSOIRE
         */
        montantMinimumPlageAccessoire: number;
        /**
         * MONTANT MAXIMUM PLAGE ACCESSOIRE
         */
        montantMaximumPlageAccessoire: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeAssietteCalculAccessoire: string;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondCalculAccessoire: number;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondCalculAccessoire1: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire1: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire1: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondCalculAccessoire2: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement1: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire2: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire2: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondCalculAccessoire3: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement2: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire3: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire3: number;
        /**
         * MT PLAFOND TRANCHE CALCUL ACCESSOIRE
         */
        mtPlafondCalculAccessoire4: number;
        /**
         * TAUX ELEMENT
         */
        tauxElement3: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire4: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire4: number;
        /**
         * MONTANT MINIMUM ACCESSOIRE CALCULE
         */
        montantMinimumAccessoireCalcule: number;
        /**
         * MONTANT MAXIMUM ACCESSOIRE CALCULE
         */
        montantMaximumAccessoireCalcule: number;
        /**
         * NUMERO REGLE APPLICATION ACCESSOIRE
         */
        numRegleApplicationAccessoire: string;
        /**
         * REGLE DATE DEBUT APPLICAT ACCESSOIRE
         */
        rglDateDebutApplicatAccessoire: string;
        /**
         * REGLE EVENEMENT DECLENCH. 1ER APPEL
         */
        regleEvenementDeclench1erAppel: string;
        /**
         * PERIODICITE APPLICATION ACCESSOIRE
         */
        periodiciteApplicationAccessoir: string;
        /**
         * CODE RECOUV ACC. TERME ECHU A-ECHOIR
         */
        codeRecouvAcctermeEchuAEchoir: string;
        /**
         * UNITE DUREE APPLIC ACCESS
         */
        uniteDureeApplicAccess: string;
        /**
         * DUREE APPLICATION ACCESSOIRE
         */
        dureeApplicationAccessoire: number;
        /**
         * REGLE APPEL ACCESSOIRE APERIODIQUE
         */
        regleAppelAccessoireAperiodique: string;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessoireCalculTEG: string;
        /**
         * CODE APPEL DE L' ECHEANCE
         */
        codeAppelLecheance: string;
        /**
         * CD COMMISSION INTERVENANT EXTERNE
         */
        cdCommissionIntervenantExterne: string;
        /**
         * MODE DE CALCUL DES TAUX
         */
        modeCalculDesTaux: string;
        /**
         * FRACTION FINANCABLE MAXIMUM
         */
        fractionFinancableMaximum: number;
        /**
         * CODE COMPATIB ACCESSOIRE INSTRUCTION
         */
        codeCompatibAccessoireInstruct: string;
        /**
         * CODE COMPATIB ACCESSOIRE AVENANT
         */
        codeCompatibAccessoireAvenant: string;
    }
    interface IParametreCategorieEmprunteur {
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * LIBELLE CATEGORIE EMPRUNTEUR
         */
        libelleCategorieEmprunteur: string;
    }
    interface ICritereGenerique {
        /**
         * Table dont on souhaite obtenir le paramétrage sous forme de liste de type Code + Libelle.
         * Il y a 3 valeurs possibles:
         * - 'CategorieEmprunteur' => recherche sur BT01 retourne (Code + Libelle),
         * - 'TypeObjetFinancementGarantie' => recherche sur BT03 retourne (Code + Libelle),
         * - 'TypeAccessoire' => recherche sur BT07 retourne (Code + Libelle + Code Nature).
         */
        nomTable: string;
    }
    interface ICritereTypeObjetPorteGarantie {
        /**
         * CODE NATURE GARANTIE.
         * - Recherche sur la table BT50 via la QR SQCF.
         */
        codeNatureGarantie: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI ).
         * - Recherche sur la table BT50 via la QR SQCF.
         */
        typeObjetFinancementGarantie: string;
        /**
         * TYPOLOGIE DE L'OBJET.
         * - Donnée optionnelle.
         */
        typologieObjet: string;
        /**
         * Type de garantie BÂLE II.
         * - Donnée optionnelle.
         */
        typeGarantieBale2: string;
    }
    interface IParametreTypeObjetPorteGarantie {
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * TYPE OBJET ( FINANCE - GARANTI )
         */
        typeObjetFinancementGarantie: string;
        /**
         * TYPOLOGIE DE L'OBJET
         */
        typologieObjet: string;
        /**
         * Type de garantie BÂLE II
         */
        typeGarantieBale2: string;
        /**
         * TYPE DOCUMENT A EDITER
         */
        typeDocumentAEditer: string;
    }
    interface ICritereTypeJustificatifCategorieEmprunteur {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Recherche sur la table BT51 via la QR SQCF.
         */
        codeEtablissement: number;
        /**
         * CODE CATEGORIE EMPRUNTEUR.
         * - Recherche sur la table BT51 via la QR SQCF.
         */
        codeCategorieEmprunteur: string;
        /**
         * CODE CLASSE JUSTIFICATIF.
         * - Recherche sur la table BT51 via la QR SQCF.
         */
        codeClasseJustificatif: string;
        /**
         * SOUS CLASSE PIECE JUSTIFICATIVE.
         * - Recherche sur la table BT51 via la QR SQCF.
         */
        sousClassePieceJustificative: string;
        /**
         * CODE NATURE JUSTIFICATIF.
         * - Recherche sur la table BT51 via la QR SQCF.
         */
        codeNatureJustificatif: string;
        /**
         * CODE JUSTIFICATIF OBLIGATOIRE.
         * - Donnée optionnelle.
         */
        codeJustificatifObligatoire: string;
    }
    interface IParametreTypeJustificatifCategorieEmprunteur {
        /**
         * CODE CATEGORIE EMPRUNTEUR
         */
        codeCategorieEmprunteur: string;
        /**
         * CODE CLASSE JUSTIFICATIF
         */
        codeClasseJustificatif: string;
        /**
         * SOUS CLASSE PIECE JUSTIFICATIVE
         */
        sousClassePieceJustificative: string;
        /**
         * CODE NATURE JUSTIFICATIF
         */
        codeNatureJustificatif: string;
        /**
         * CODE JUSTIFICATIF OBLIGATOIRE
         */
        codeJustificatifObligatoire: string;
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
    }
    interface ICritereGarantieParCaisse {
        /**
         * IDENTIFIANT CAISSE EPARGNE.
         * - - Recherche sur la table BT52 via la QR SQCF.
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE.
         * - Recherche sur la table BT52 via la QR SQCF.
         */
        codeNatureGarantie: string;
    }
    interface IParametreGarantieParCaisse {
        /**
         * CODE TYPE ACTION CREDIT OU EMPRUNT.
         */
        codeTypeActionCreditEmprunt: string;
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE GARANTIE
         */
        codeNatureGarantie: string;
        /**
         * CODE DUREE PAR DEFAUT DE LA GARANTIE
         */
        codeDureeParDefautGarantie: string;
        /**
         * DELAI MINIMUM DE GARANTIE EN MOIS
         */
        delaiMinimumGarantieEnMois: number;
        /**
         * DUREE MAXIMALE DE GARANTIE EN MOIS
         */
        dureeMaximaleGarantieEnMois: number;
        /**
         * DELAI CONSEILLE DE GARANTIE EN MOIS
         */
        delaiConseilleGarantieEnMois: number;
        /**
         * DELAI PROLONGATION GARANTIE EN MOIS
         */
        delaiProlongationGarantieEnMois: number;
        /**
         * CODE UTILISATION PACTE COMMISSOIRE
         */
        codeUtilisationPacteCommissoire: string;
        /**
         * CODE VOIE PAREE
         */
        codeVoieParee: string;
    }
    interface ICritereDelaiPassageCDL {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Recherche sur la table BT67 via la QR SQCF.
         */
        codeEtablissement: number;
        /**
         * CODE NATURE DU FINANCEMENT.
         * - Recherche sur la table BT67 via la QR SQCF.
         */
        codeNatureFinancement: string;
        /**
         * CODE TYPE DE MARCHE.
         * - Recherche sur la table BT67 via la QR SQCF.
         */
        codeTypeMarche: string;
        /**
         * CODE TYPE ADMINISTRATION PUBLIQUE.
         * - Recherche sur la table BT67 via la QR SQCF.
         */
        codeTypeAdministrationPublique: string;
        /**
         * DELAI DE PASSAGE EN CDL (EN MOIS);
         * - Donnée optionnelle.
         */
        delaiPassageEnCDL: number;
        /**
         * DELAI RETOUR CREANCE SAINE (EN MOIS).
         * - Donnée optionnelle.
         */
        delaiRetourCreanceSaine: number;
    }
    interface IParametreDelaiPassageCDL {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * DELAI DE PASSAGE EN CDL (EN MOIS)
         */
        delaiPassageEnCDL: number;
        /**
         * DELAI RETOUR CREANCE SAINE (EN MOIS)
         */
        delaiRetourCreanceSaine: number;
        /**
         * MONTANT PLANCHER ABSOLU
         */
        montantPlancherAbsolu: number;
        /**
         * TAUX CALCUL MONTANT MINIMUM RELATIF
         */
        tauxCalculMontantMinimumRelatif: number;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * CODE TYPE ADMINISTRATION PUBLIQUE
         */
        codeTypeAdministrationPublique: string;
    }
    interface ICritereReferenceConventionExterne {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT71 via la QR SQCF.
         */
        codeEtablissement: number;
        /**
         * NUMERO EXTERNE CONVENTION.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT71 via la QR SQCF.
         */
        numeroExterneConvention: string;
        /**
         * CODE DE RESTITUTION.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT71 via la QR SQCF.
         */
        codeRestitution: string;
        /**
         * IDENTIFIANT INTERVENANT.
         * - 1er mode de recherche.
         */
        identifiantIntervenant: string;
        /**
         * LIB.LONG DE RESTIT. DE LA CONVENTION.
         * - 2nd mode de recherche.
         */
        libelleLgRestitutionConvention: string;
    }
    interface IParametreReferenceConventionExterne {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT INTERVENANT
         */
        identifiantIntervenant: string;
        /**
         * NUMERO EXTERNE CONVENTION
         */
        numeroExterneConvention: string;
        /**
         * CODE DE RESTITUTION
         */
        codeRestitution: string;
        /**
         * LIB.LONG DE RESTIT. DE LA CONVENTION
         */
        libelleLgRestitutionConvention: string;
        /**
         * LIBELLE LONG RESTITUTION
         */
        libelleLongRestitution: string;
    }
    interface ICritereAssurancePeutCouvrirSinistre {
        /**
         * CODE TYPE ASSURANCE.
         * - Recherche sur la table BT53 via la QR SQCE.
         */
        codeTypeAssurance: string;
        /**
         * CODE TYPE SINISTRE.
         * - Recherche sur la table BT53 via la QR SQCE.
         */
        codeTypeSinistre: string;
    }
    interface IParametreAssurancePeutCouvrirSinistre {
        /**
         * CODE TYPE ASSURANCE
         */
        codeTypeAssurance: string;
        /**
         * CODE TYPE SINISTRE
         */
        codeTypeSinistre: string;
    }
    interface ICritereTypeSinistre {
        /**
         * CODE TYPE SINISTRE.
         * - Recherche sur la table BT44 via la QR SQCE.
         */
        codeTypeSinistre: string;
    }
    interface IParametreTypeSinistre {
        /**
         * CODE TYPE SINISTRE
         */
        codeTypeSinistre: string;
        /**
         * LIBELLE TYPE DE SINISTRE
         */
        libelleTypeSinistre: string;
        /**
         * CODE NATURE SINISTRE
         */
        codeNatureSinistre: string;
        /**
         * LIBELLE COURT TYPE DE SINISTRE
         */
        libelleCourtTypeSinistre: string;
    }
    interface ICritereParametrageStandard {
        /**
         * identifiant pour acces bt89.
         * - Recherche sur la table BT89 via la QR SQCE.
         */
        identifiantPourAccesBt89: string;
        /**
         * DATE DEBUT VALIDITE.
         * - Recherche sur la table BT89 via la QR SQCE.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
    }
    interface ICritereCodeMotif {
        /**
         * CODE ENTITE.
         * - Recherche sur la table BT11 via la QR SQCE.
         */
        codeEntite: string;
        /**
         * TYPE MOTIF.
         * - Recherche sur la table BT11 via la QR SQCE.
         */
        typeMotif: string;
        /**
         * CODE MOTIF.
         * - Recherche sur la table BT11 via la QR SQCE.
         */
        codeMotif: string;
    }
    interface IParametreCodeMotif {
        /**
         * CODE ENTITE
         */
        codeEntite: string;
        /**
         * TYPE MOTIF
         */
        typeMotif: string;
        /**
         * CODE MOTIF
         */
        codeMotif: string;
        /**
         * LIBELLE LONG MOTIF
         */
        libelleLongMotif: string;
        /**
         * LIBELLE COURT MOTIF
         */
        libelleCourtMotif: string;
    }
    interface ICritereFamilleCommissionnement {
        /**
         * IDENTIFIANT CAISSE EPARGNE.
         * - Recherche sur la table BT5A via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * Code Famille Commissionmt Prescript.
         * - Recherche sur la table BT5A via la QR SQCE.
         */
        codeFamilleCommissionPrescript: string;
    }
    interface IParametreFamilleCommissionnement {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * Code Famille Commissionmt Prescript
         */
        codeFamilleCommissionPrescript: string;
        /**
         * Libellé famille commissionnement
         */
        libelleFamilleCommissionnement: string;
        /**
         * Code indic.famille commissionnable
         */
        codeIndicFamilleCommissionnable: string;
        /**
         * DATE DE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE fin application
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
    }
    interface ICritereParametrageApplicatif {
        /**
         * IDENTIFIANT CAISSE EPARGNE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT95 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * Code paramètre applicatif.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT95 via la QR SQCE.
         */
        codeParametreApplicatif: string;
        /**
         * CODE TYPE DE PARAMETRE.
         * - 1er mode de recherche.
         */
        codeTypeParametre: string;
        /**
         * CODE VERSION NEO.
         * - 1er mode de recherche.
         */
        codeVersionNeo: string;
        /**
         * CODE RELEASE NEO.
         * - 1er mode de recherche.
         */
        codeReleaseNeo: string;
        /**
         * IDENT ELEMENT STRUCTURE INSTRU.
         * - 2nd mode de recherche.
         */
        identElementStructInstructeur: string;
        /**
         * DATE DE DEBUT DE VALIDITE.
         * - 2nd mode de recherche.
         */
        dateDebutValidite: string;
    }
    interface ICritereTypologieMotifNonAgrement {
        /**
         * IDENTIFIANT CAISSE EPARGNE.
         * - Recherche sur la table BT7C via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * Code motif de non agrément.
         * - Recherche sur la table BT7C via la QR SQCE.
         */
        codeMotifNonAgrement: string;
        /**
         * DATE DEBUT VALIDITE.
         * - Recherche sur la table BT7C via la QR SQCE.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
    }
    interface IParametreTypologieMotifNonAgrement {
        /**
         * Code motif de non agrément
         */
        codeMotifNonAgrement: string;
        /**
         * Libellé motif de non agrément
         */
        libelleMotifNonAgrement: string;
        /**
         * Numéro d'ordre restitution motif
         */
        numeroOrdreRestitutionMotif: number;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * Lib motif non agrément courrier 1/2
         */
        libMotifNonAgrementCourrier1: string;
        /**
         * Lib motif non agrément courrier 2/2
         */
        libMotifNonAgrementCourrier2: string;
    }
    interface ICritereTypeMarcheParCaisse {
        /**
         * IDENTIFIANT CAISSE EPARGNE.
         * - Recherche sur la table BT73 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * CODE TYPE DE MARCHE.
         * - Recherche sur la table BT73 via la QR SQCE.
         */
        codeTypeMarche: string;
    }
    interface IParametreTypeMarcheParCaisse {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * LIBELLE LONG CODE TYPE DE MARCHE
         */
        libelleLongCodeTypeMarche: string;
        /**
         * LIBELLE COURT CODE TYPE DE MARCHE
         */
        libelleCourtCodeTypeMarche: string;
        /**
         * DELAI ENVOI AVIS ECHEANCE
         */
        delaiEnvoiAvisEcheance: number;
    }
    interface ICritereIdentificationConvention {
        /**
         * Code identification convention jur.
         * - Recherche sur la table BT7A via la QR SQCE.
         */
        codeIdentificationConventionJur: string;
        /**
         * CODE TYPE DE CONVENTION.
         * - Recherche sur la table BT7A via la QR SQCE.
         */
        codeTypeConvention: string;
        /**
         * Libellé code critere identification.
         * - Recherche sur la table BT7A via la QR SQCE.
         */
        libelleCodeCritereIdentif: string;
    }
    interface IParametreIdentificationConvention {
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * Libellé code critere identification
         */
        libelleCodeCritereIdentif: string;
        /**
         * Libellé suite critere identification
         */
        libelleSuiteCritereIdentif: string;
        /**
         * DATE DE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE fin application
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
    }
    interface ICritereTauxMargePtzPlus {
        /**
         * CODE FAMILLE CONTROLE.
         * - Recherche sur la table BT9C via la QR SQCE.
         */
        codeFamilleControle: string;
        /**
         * CODE TYPE TRANCHE PRET 0%.
         * - Recherche sur la table BT9C via la QR SQCE.
         */
        codeTypeTranchePretZero: string;
        /**
         * DATE DEBUT VALIDITE.
         * - Recherche sur la table BT9C via la QR SQCE.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
    }
    interface IParametreTauxMargePtzPlus {
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * CODE TYPE TRANCHE PRET 0%
         */
        codeTypeTranchePretZero: string;
        /**
         * DATE DE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE fin application
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * VALEUR INDICATEUR ECONOMIQUE
         */
        valeurIndicateurEconomique: number;
    }
    interface ICritereCodeMotifRefusAxa {
        /**
         * CODE MOTIF DE REFUS AXA.
         * - Recherche sur la table BT4C via la QR SQCE.
         */
        codeMotifRefusAxa: string;
    }
    interface ICritereExclusionAxa {
        /**
         * CODE EXCLUSION AXA.
         * - Recherche sur la table BT4B via la QR SQCE.
         */
        codeExclusionAxa: string;
        /**
         * TYPE DE DECISION AXA.
         * - Recherche sur la table BT4B via la QR SQCE.
         */
        typeDecisionAxa: string;
    }
    interface ICritereTypeDecisionAxa {
        /**
         * TYPE DE DECISION AXA.
         * - Recherche sur la table BT4A via la QR SQCE.
         */
        typeDecisionAxa: string;
    }
    interface ICritereValeurTva {
        /**
         * DATE DEBUT VALIDITE TVA.
         * - Recherche sur la table BT17 via la QR SQCE.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeTva: string;
        /**
         * DATE FIN VALIDITE TVA.
         * - Recherche sur la table BT17 via la QR SQCE.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeTva: string;
    }
    interface IParametreCodeMotifRefusAxa {
        /**
         * CODE MOTIF DE REFUS AXA
         */
        codeMotifRefusAxa: string;
        /**
         * LIBELLE MOTIF DE REFUS AXA
         */
        libelleMotifRefusAxa: string;
    }
    interface IParametreExclusionAxa {
        /**
         * CODE EXCLUSION AXA
         */
        codeExclusionAxa: string;
        /**
         * TYPE DE DECISION AXA
         */
        typeDecisionAxa: string;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveExclusionAssurance: string;
        /**
         * LIBELLE RESERVES OU EXCLUSIONS
         */
        libelleReservesExclusions: string;
    }
    interface IParametreTypeDecisionAxa {
        /**
         * TYPE DE DECISION AXA
         */
        typeDecisionAxa: string;
        /**
         * LIBELLE DU TYPE DE DECISION AXA
         */
        libelleTypeDecisionAxa: string;
        /**
         * TYPE DE REPONSE ASSURANCE
         */
        typeReponseAssurance: string;
        /**
         * INDICATEUR ALERTE COMMERCIAL
         */
        indicateurAlerteCommercial: string;
        /**
         * INDICATEUR ALERTE MISE EN PLACE
         */
        indicateurAlerteMiseEnPlace: string;
        /**
         * INDIC.TRAITEMENT AUTO.DE LA DECISION
         */
        indicTraitementAutoDecision: string;
    }
    interface IParametreValeurTva {
        /**
         * CODE TYPE TVA ACCESSOIRE
         */
        codeTypeTvaAccessoire: string;
        /**
         * CODE EXTERNE TVA (ACCESSOIRE)
         */
        codeExterneTva: string;
        /**
         * TAUX DE TVA
         */
        tauxTva: number;
    }
    interface ICritereTypeGarantieEps {
        /**
         * Type d'EPS.
         * - Recherche sur la table BT2A via la QR SQCE.
         */
        typeEps: string;
    }
    interface IParametreTypeGarantieEps {
        /**
         * Type d'EPS
         */
        typeEps: string;
        /**
         * LIBELLE LONG NATURE GARANTIE
         */
        libelleLongNatureGarantie: string;
        /**
         * LIBELLE COURT NATURE GARANTIE
         */
        libelleNatureGarantie: string;
        /**
         * CLASSE DE GARANTIE
         */
        classeGarantie: string;
        /**
         * DATE DEBUT VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * Type de garantie EPS nationale
         */
        typeGarantieEpsNationale: string;
        /**
         * Code déclaration à BDF
         */
        codeDeclarationABdf: string;
    }
    interface ICritereNomenclatureProduit {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Recherche sur la table BT78 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * CODE TYPE DE RESTITUTION.
         * - Recherche sur la table BT78 via la QR SQCE.
         */
        codeTypeRestitution: string;
        /**
         * CODE DE RESTITUTION.
         * - Recherche sur la table BT78 via la QR SQCE.
         */
        codeRestitution: string;
        /**
         * CODE PRODUIT DE RESTITUTION.
         * - Recherche sur la table BT78 via la QR SQCE.
         */
        codeProduitRestitution: string;
        /**
         * LIBELLE LONG PRODUIT.
         * - Donnée optionnelle.
         */
        libelleLongProduit: string;
    }
    interface IParametreNomenclatureProduit {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE TYPE DE RESTITUTION
         */
        codeTypeRestitution: string;
        /**
         * CODE DE RESTITUTION
         */
        codeRestitution: string;
        /**
         * CODE PRODUIT DE RESTITUTION
         */
        codeProduitRestitution: string;
        /**
         * LIBELLE LONG PRODUIT
         */
        libelleLongProduit: string;
        /**
         * Code groupe créance IFRS
         */
        codeGroupeCreanceIfrs: string;
        /**
         * CODE INDICE COEFF DE REMBT ANTICIPE
         */
        codeIndiceCoeffRembtAnticipe: string;
        /**
         * Type de calcul Juste Valeur
         */
        typeCalculJusteValeur: string;
    }
    interface ICritereAccessoireAutoriseReglementation {
        /**
         * IDENTIFIANT CAISSE EPARGNE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT96 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * CODE FAMILLE CONTROLE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT96 via la QR SQCE.
         */
        codeFamilleControle: string;
        /**
         * CODE TYPE ACCESSOIRE.
         * - 1er mode de recherche.
         */
        codeTypeAccessoire: string;
        /**
         * DATE DEBUT APPLICATION.
         * - 2nd mode de recherche.
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
    }
    interface IParametreAccessoireAutoriseReglementation {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * CODE TYPE ACCESSOIRE
         */
        codeTypeAccessoire: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
    }
    interface ICritereConditionRa {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Recherche sur la table BU01 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONDITION DE R.A.
         * - Recherche sur la table BU01 via la QR SQCE.
         */
        identifiantConditionRA: string;
        /**
         * CODE AUTORISATION RA.
         * - Donnée optionnelle.
         */
        codeAutorisationRA: string;
        /**
         * CODE AUTORISATION RA PARTIEL.
         * - Donnée optionnelle.
         */
        codeAutorisationRaPartiel: string;
    }
    interface IParametreConditionRa {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT CONDITION DE R.A.
         */
        identifiantConditionRA: string;
        /**
         * CODE AUTORISATION RA
         */
        codeAutorisationRA: string;
        /**
         * CODE AUTORISATION RA PARTIEL
         */
        codeAutorisationRaPartiel: string;
        /**
         * CODE DATE DEBUT AUTORISATION RA
         */
        codeDateDebutAutorisationRA: string;
        /**
         * NUMERO REGLE AUTORISATION RA
         */
        numeroRegleAutorisationRa: string;
        /**
         * CODE AUTORISATION RA PREFINANCEMENT
         */
        codeAutorisationRaPrefi: string;
        /**
         * CD MODE DE RECALCUL TA SUITE A RA
         */
        codeModeRecalculTASuiteRA: string;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
    }
    interface ICritereModaliteCalculIndemniteRa {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Recherche sur la table BU02 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * IDENT MODALITE CALCUL INDEMNITE RA.
         * - Recherche sur la table BU02 via la QR SQCE.
         */
        identModaliteCalculIndemniteRa: string;
        /**
         * DATE DEBUT APPLICATION.
         * - Recherche sur la table BU02 via la QR SQCE.
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE MODE DE CALCUL INDEMNITE RA.
         * - Donnée optionnelle.
         */
        codeModeCalculIndemniteRa: string;
        /**
         * CODE COMPATIBILITE TYPE DE LOI.
         * - Donnée optionnelle.
         */
        codeCompatibiliteTypeLoi: string;
    }
    interface IParametreModaliteCalculIndemniteRa {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENT MODALITE CALCUL INDEMNITE RA
         */
        identModaliteCalculIndemniteRa: string;
        /**
         * CODE MODE DE CALCUL INDEMNITE RA
         */
        codeModeCalculIndemniteRa: string;
        /**
         * TAUX CONSEILLE ACCESSOIRE
         */
        tauxConseilleAccessoire: number;
        /**
         * TAUX MINIMUM ACCESSOIRE
         */
        tauxMinimumAccessoire: number;
        /**
         * TAUX MAXIMUM ACCESSOIRE
         */
        tauxMaximumAccessoire: number;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalcAccessoire: string;
        /**
         * NUMERO REGLE DE CALCUL ACCESSOIRE
         */
        numeroRegleCalculAccessoire: string;
        /**
         * CODE COMPATIBILITE TYPE DE LOI
         */
        codeCompatibiliteTypeLoi: string;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
        /**
         * Indicateur indemnités en préfi.
         */
        indicateurIndemnitesEnPrefi: string;
        /**
         * Indicat. indemn. sur phase révisable
         */
        indicatindemnsurPhaseRevisable: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
    }
    interface ICritereGestionImpaye {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BU03 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * CODE SECTEUR RATTACHEMENT EMPRUNTEUR.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BU03 via la QR SQCE.
         */
        codeSectRattachementEmprunteur: string;
        /**
         * CODE TYPE DE MARCHE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BU03 via la QR SQCE.
         */
        codeTypeMarche: string;
        /**
         * CODE RELANCE AUTOMATIQUE IMPAYE.
         * - 1er mode de recherche.
         */
        codeRelanceAutomatiqueImpaye: string;
        /**
         * CODE DEVISE.
         * - 2nd mode de recherche.
         */
        codeDevise: string;
    }
    interface IParametreGestionImpaye {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE SECTEUR RATTACHEMENT EMPRUNTEUR
         */
        codeSectRattachementEmprunteur: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * CODE RELANCE AUTOMATIQUE IMPAYE
         */
        codeRelanceAutomatiqueImpaye: string;
        /**
         * DELAI DE PAIEMENT AVANT IMPAYE
         */
        delaiPaiementAvantImpaye: number;
        /**
         * DELAI DE DEUXIEME RELANCE IMPAYE
         */
        delaiDeuxiemeRelanceImpaye: number;
        /**
         * DELAI INFORMATION CAUTION IMPAYE
         */
        delaiInformationCautionImpaye: number;
        /**
         * DELAI DE PASSAGE IMPAYE NIVEAU1
         */
        delaiPassageImpayeNiveau1: number;
        /**
         * DELAI DE PASSAGE IMPAYE NIVEAU2
         */
        delaiPassageImpayeNiveau2: number;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
        /**
         * DATE ANNULATION MODIFICATION
         * Type date au format yyyy-MM-dd
         */
        dateAnnulationModification: string;
        /**
         * DELAI PREMIERE RELANCE IMPAYE
         */
        delaiPremiereRelanceImpaye: number;
        /**
         * Seuil de passage en perte ou profit.
         */
        seuilPassageEnPerteProfit: number;
        /**
         * Délai de passage en perte  ou profit
         */
        delaiPassageEnPerteprofit: number;
        /**
         * Délai de relance
         */
        delaiRelance: number;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
    }
    interface ICritereModaliteCalculRetenueImpaye {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BU04 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT MODALITE CALCUL IMPAYE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BU04 via la QR SQCE.
         */
        identifiantModaliteCalculImpaye: string;
        /**
         * DATE DEBUT APPLICATION.
         * - commun tous modes de recherche.
         * - Recherche sur la table BU04 via la QR SQCE.
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * CODE SECTEUR RATTACHEMENT EMPRUNTEUR.
         * - 1er mode de recherche.
         */
        codeSectRattachementEmprunteur: string;
        /**
         * LIBELLE MODALITE CALCUL IMPAYE.
         * - 1er mode de recherche.
         */
        libelleModaliteCalculImpaye: string;
        /**
         * CODE COMPATIBILITE TYPE DE LOI.
         * - 1er mode de recherche.
         */
        codeCompatibiliteTypeLoi: string;
        /**
         * CODE DEVISE.
         * - 2nd mode de recherche.
         */
        codeDevise: string;
    }
    interface IParametreModaliteCalculRetenueImpaye {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT MODALITE CALCUL IMPAYE
         */
        identifiantModaliteCalculImpaye: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * CODE SECTEUR RATTACHEMENT EMPRUNTEUR
         */
        codeSectRattachementEmprunteur: string;
        /**
         * CODE TYPE DE MARCHE
         */
        codeTypeMarche: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * NO REGLE CALCUL MODALITE IMPAYE
         */
        numeroRegleCalculModaliteImpaye: string;
        /**
         * LIBELLE MODALITE CALCUL IMPAYE
         */
        libelleModaliteCalculImpaye: string;
        /**
         * CODE TYPE DE TAUX MODALITE IMPAYE
         */
        codeTypeTauxModaliteImpaye: string;
        /**
         * MONTANT MINIMUM INDEMNITE IMPAYE
         */
        montantMinimumIndemniteImpaye: number;
        /**
         * MONTANT MAXIMUM INDEMNITE IMPAYE
         */
        montantMaximumIndemniteImpaye: number;
        /**
         * MONTANT INDEMNITE IMPAYE
         */
        montantIndemniteImpaye: number;
        /**
         * TAUX MINIMUM INTERETS RETARD IMPAYE
         */
        tauxMinimumInteretsRetardImpaye: number;
        /**
         * TAUX MAXIMUM INTERETS RETARD IMPAYE
         */
        tauxMaximumInteretsRetardImpaye: number;
        /**
         * TAUX INTERETS RETARD IMPAYE
         */
        tauxInteretsRetardImpaye: number;
        /**
         * TAUX REDUIT INTERETS RETARD IMPAYE
         */
        tauxReduitInteretsRetardImpaye: number;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessoireRecouvrement: number;
        /**
         * CODE COMPATIBILITE TYPE DE LOI
         */
        codeCompatibiliteTypeLoi: string;
        /**
         * COMPTEUR MISE A JOUR
         */
        compteurMiseJour: number;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * CODE DEVISE
         */
        codeDevise: string;
    }
    interface ICritereSubventionPatz {
        /**
         * CODE FAMILLE CONTROLE.
         * - Recherche sur la table BT81 via la QR SQCE.
         */
        codeFamilleControle: string;
        /**
         * CODE TYPE TRANCHE PRET 0%.
         * - Recherche sur la table BT81 via la QR SQCE.
         */
        codeTypeTranchePretZero: string;
        /**
         * Durée maxi période1.
         * - Recherche sur la table BT81 via la QR SQCE.
         */
        dureeMaxiPeriode1: number;
        /**
         * DATE DEBUT VALIDITE.
         * - Recherche sur la table BT81 via la QR SQCE.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
    }
    interface IParametreSubventionPatz {
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * CODE TYPE TRANCHE PRET 0%
         */
        codeTypeTranchePretZero: string;
        /**
         * Durée maxi période1
         */
        dureeMaxiPeriode1: number;
        /**
         * DATE DEBUT VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE FIN VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * CODE OAT
         */
        codeOat: string;
        /**
         * CODE TAUX SUBVENTION
         */
        codeTauxSubvention: string;
    }
    interface ICriterePays {
        /**
         * CODE PAYS DE LOCALISATION.
         * - Recherche sur la table BT57 via la QR SQCE.
         */
        codePaysLocalisation: string;
    }
    interface IParametrePays {
        /**
         * CODE PAYS DE LOCALISATION
         */
        codePaysLocalisation: string;
        /**
         * LIBELLE PAYS DE LOCALISATION
         */
        libellePaysLocalisation: string;
        /**
         * LIBELLE COURT PAYS DE LOCALISATION
         */
        libelleCourtPaysLocalisation: string;
        /**
         * NUMERO ORDRE CLASSEMENT
         */
        numeroOrdreClassement: number;
    }
    interface ICritereTypeObjetReglemente {
        /**
         * TYPE OBJET REGLEMENTE ( TOR ).
         * - Recherche sur la table BT61 via la QR SQCE.
         */
        typeObjetReglemente: string;
    }
    interface IParametreTypeObjetReglemente {
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglemente: string;
        /**
         * LIBELLE TYPE OBJET REGLEMENTE - TOR
         */
        libelleTypeObjetReglemente: string;
        /**
         * LB COURT TYPE OBJET REGLEMENTE - TOR
         */
        libelleCourtTypeObjetReglemente: string;
    }
    interface ICritereTypologie {
        /**
         * TYPE DE TYPOLOGIE.
         * - Recherche sur la table BT85 via la QR SQCE.
         */
        typeTypologie: string;
        /**
         * CODE DE TYPOLOGIE.
         * - Recherche sur la table BT85 via la QR SQCE.
         */
        codeTypologie: string;
    }
    interface IParametreTypologie {
        /**
         * IDENTIFIANT CAISSE D EPARGNE
         */
        codeEtablissement: number;
        /**
         * TYPE DE TYPOLOGIE
         */
        typeTypologie: string;
        /**
         * CODE DE TYPOLOGIE
         */
        codeTypologie: string;
        /**
         * INTITULE
         */
        intitule: string;
    }
    interface ICritere {
        accesAutoriseTypeRattachement: ICritereAccesAutoriseTypeRattachement;
        accessoireAutoriseReglement: ICritereAccessoireAutoriseReglementation;
        assurancePeutCouvrirSinistre: ICritereAssurancePeutCouvrirSinistre;
        cadreFiscal: ICritereCadreFiscal;
        codeMotif: ICritereCodeMotif;
        codeMotifRefusAxa: ICritereCodeMotifRefusAxa;
        codeBeneficiaire: ICritereCodeBeneficiaire;
        conditionRa: ICritereConditionRa;
        categReglementAttributionTor: ICritereCategorieReglementaireAttributionTor;
        decisionAssureur: ICritereDecisionAssureur;
        delaiPassageCdl: ICritereDelaiPassageCDL;
        etatDecisionAssureur: ICritereEtatDecisionAssureur;
        exclusionAxa: ICritereExclusionAxa;
        familleCommissionnement: ICritereFamilleCommissionnement;
        garantieParCaisse: ICritereGarantieParCaisse;
        generique: ICritereGenerique;
        gestionImpaye: ICritereGestionImpaye;
        identificationConvention: ICritereIdentificationConvention;
        modaliteCalculIndemniteRa: ICritereModaliteCalculIndemniteRa;
        modaliteCalculRetenueImpaye: ICritereModaliteCalculRetenueImpaye;
        natureGarantie: ICritereNatureGarantie;
        nomenclatureProduit: ICritereNomenclatureProduit;
        parametrageApplicatif: ICritereParametrageApplicatif;
        parametrageStandard: ICritereParametrageStandard;
        pays: ICriterePays;
        referenceConventionExterne: ICritereReferenceConventionExterne;
        reglementation: ICritereReglementation;
        reversementTiers: ICritereReversementTiers;
        subventionPatz: ICritereSubventionPatz;
        tauxMargePtzPlus: ICritereTauxMargePtzPlus;
        typeAccessoire: ICritereTypeAccessoire;
        typeDecisionAxa: ICritereTypeDecisionAxa;
        typeFraisGarantie: ICritereTypeFraisGarantie;
        typeGarantieEps: ICritereTypeGarantieEps;
        typeJustificatifCategEmprunteur: ICritereTypeJustificatifCategorieEmprunteur;
        typeMarcheParCaisse: ICritereTypeMarcheParCaisse;
        typeObjetFinancementGarantie: ICritereTypeObjetFinancementGarantie;
        typeObjetPorteGarantie: ICritereTypeObjetPorteGarantie;
        typeObjetReglemente: ICritereTypeObjetReglemente;
        typeOperationDecisionAssureur: ICritereTypeOperationDecisionAssureur;
        typeSinistre: ICritereTypeSinistre;
        typologie: ICritereTypologie;
        typologieMotifNonAgrement: ICritereTypologieMotifNonAgrement;
        valeurTva: ICritereValeurTva;
        estimation: ICritereEstimation;
        relationPartenaire: ICritereRelationPartenaire;
    }
    interface IDonneeParametre {
        listeAccesAutoriseTypeRattachement: Array<IParametreAccesAutoriseTypeRattachement>;
        listeAccessoireAutoriseReglement: Array<IParametreAccessoireAutoriseReglementation>;
        listeAssurancePeutCouvrirSinistre: Array<IParametreAssurancePeutCouvrirSinistre>;
        listeCadreFiscal: Array<IParametreCadreFiscal>;
        listeCategorieEmprunteur: Array<IParametreCategorieEmprunteur>;
        listeCodeMotif: Array<IParametreCodeMotif>;
        listeCodeMotifRefusAxa: Array<IParametreCodeMotifRefusAxa>;
        listeCodeBeneficiaire: Array<IParametreCodeBeneficiaire>;
        listeConditionRa: Array<IParametreConditionRa>;
        listeCategReglementAttributionTor: Array<IParametreCategorieReglementaireAttributionTor>;
        listeDecisionAssureur: Array<IParametreDecisionAssureur>;
        listeDelaiPassageCdl: Array<IParametreDelaiPassageCDL>;
        listeEtatDecisionAssureur: Array<IParametreEtatDecisionAssureur>;
        listeExclusionAxa: Array<IParametreExclusionAxa>;
        listeFamilleCommissionnement: Array<IParametreFamilleCommissionnement>;
        listeGarantieParCaisse: Array<ICritereGarantieParCaisse>;
        listeGestionImpaye: Array<IParametreGestionImpaye>;
        listeIdentificationConvention: Array<IParametreIdentificationConvention>;
        listeModaliteCalculIndemniteRa: Array<IParametreModaliteCalculIndemniteRa>;
        listeModaliteCalcRetenueImpaye: Array<IParametreModaliteCalculRetenueImpaye>;
        listeNatureGarantie: Array<IParametreNatureGarantie>;
        listeNomenclatureProduit: Array<IParametreNomenclatureProduit>;
        listeParametrageApplicatif: Array<IParametreApplicatif>;
        listeParametrageStandard: Array<IParametreStandard>;
        listePays: Array<IParametrePays>;
        listeReferenceConventionExterne: Array<IParametreReferenceConventionExterne>;
        listeReglementation: Array<IParametreReglementation>;
        listeReversementTiers: Array<IParametreReversementTiers>;
        listeSubventionPatz: Array<IParametreSubventionPatz>;
        listeTauxMargePtzPlus: Array<IParametreTauxMargePtzPlus>;
        listeTypeAccessoire: Array<IParametreTypeAccessoire>;
        listeTypeDecisionAxa: Array<IParametreTypeDecisionAxa>;
        listeTypeFraisGarantie: Array<IParametreTypeFraisGarantie>;
        listeTypeJustificatifCategEmprunteur: Array<IParametreTypeJustificatifCategorieEmprunteur>;
        listeTypeMarcheParCaisse: Array<IParametreTypeMarcheParCaisse>;
        listeTypeObjetFinancementGarantie: Array<IParametreTypeObjetFinancementGarantie>;
        listeTypeObjetPorteGarantie: Array<IParametreTypeObjetPorteGarantie>;
        listeTypeObjetReglemente: Array<IParametreTypeObjetReglemente>;
        listeTypeOperationDecisionAssureur: Array<IParametreTypeOperationDecisionAssureur>;
        listeTypeSinistre: Array<IParametreTypeSinistre>;
        listeTypologie: Array<IParametreTypologie>;
        listeTypologieMotifNonAgrement: Array<IParametreTypologieMotifNonAgrement>;
        listeValeurTva: Array<IParametreValeurTva>;
        listeEstimation: Array<IParametreEstimation>;
        listeRelationPartenaire: Array<IParametreRelationPartenaire>;
    }
    interface ICritereTypeOperationDecisionAssureur {
        /**
         * Code identification convention jur.
         * - Recherche sur la table BT7F via la QR SQCA.
         */
        codeIdentificationConventionJur: string;
        /**
         * CODE TYPE SINISTRE.
         * - Recherche sur la table BT7F via la QR SQCA.
         */
        codeTypeSinistre: string;
        /**
         * ind opé créditrice ou débitrice.
         * - Recherche sur la table BT7F via la QR SQCA.
         */
        indicateurOperationCreditDebit: string;
        /**
         * indicateur de compte.
         * - Recherche sur la table BT7F via la QR SQCA.
         */
        indicateurCompte: string;
    }
    interface IParametreTypeOperationDecisionAssureur {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
        /**
         * CODE TYPE SINISTRE
         */
        codeTypeSinistre: string;
        /**
         * ind opé créditrice ou débitrice
         */
        indicateurOperationCreditDebit: string;
        /**
         * indicateur de compte
         */
        indicateurCompte: string;
        /**
         * type d'opération
         */
        typeOperation: string;
    }
    interface ICritereEtatDecisionAssureur {
        /**
         * Code motif état décisions assureurs.
         * - Recherche sur la table BT7E via la QR SQCA.
         */
        codeMotifEtatDecisionsAssureurs: string;
    }
    interface IParametreEtatDecisionAssureur {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * Code motif état décisions assureurs
         */
        codeMotifEtatDecisionsAssureurs: string;
        /**
         * LIB.MOTIF ETAT DECISIONS ASSUREURS
         */
        libMotifEtatDecisionsAssureurs: string;
    }
    interface ICritereCadreFiscal {
        /**
         * IDENTIFIANT CAISSE D EPARGNE.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT92 via la QR SQCE.
         */
        codeEtablissement: number;
        /**
         * code typologie cadre fiscal.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT92 via la QR SQCE.
         */
        codeTypologieCadreFiscal: string;
        /**
         * CODE NATURE DU FINANCEMENT.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT92 via la QR SQCE.
         */
        codeNatureFinancement: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET.
         * - Commun tous modes de recherche.
         * - Recherche sur la table BT92 via la QR SQCE.
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * LIBELLE CADRE FISCAL.
         * - 1er mode de recherche.
         */
        libelleCadreFiscal: string;
        /**
         * DATE DEBUT APPLICATION..
         * - 2nd mode de recherche.
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
    }
    interface IParametreCadreFiscal {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * code typologie cadre fiscal
         */
        codeTypologieCadreFiscal: string;
        /**
         * CODE NATURE DU FINANCEMENT
         */
        codeNatureFinancement: string;
        /**
         * CODE DESTINATION AUTORISEE OBJET
         */
        codeDestinationAutoriseeObjet: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * LIBELLE CADRE FISCAL
         */
        libelleCadreFiscal: string;
    }
    interface ICritereAccesAutoriseTypeRattachement {
        /**
         * CODE TYPE DE CONVENTION.
         * - Recherche sur la table BT65 via la QR SQCE.
         */
        codeTypeConvention: string;
    }
    interface IParametreAccesAutoriseTypeRattachement {
        /**
         * CODE TYPE DE CONVENTION
         */
        codeTypeConvention: string;
        /**
         * CODE NATURE ACCESSOIRE
         */
        codeNatureAccessoire: string;
    }
    interface ICritereCodeBeneficiaire {
        /**
         * Code Bénéficiaire accessoire.
         * - Recherche sur la table BT9D via la QR SQCA.
         */
        codeBeneficiaireAccessoire: string;
        /**
         * DATE DEBUT APPLICATION.
         * - Recherche sur la table BT9D via la QR SQCA.
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * Libelle bénéficaire NEO.
         * - Donnée optionnelle.
         */
        libelleBeneficaireNeo: string;
        /**
         * indicateur restitution édition.
         * - Donnée optionnelle.
         */
        indicateurRestitutionEdition: string;
    }
    interface IParametreCodeBeneficiaire {
        /**
         * Code Bénéficiaire accessoire
         */
        codeBeneficiaireAccessoire: string;
        /**
         * DATE DEBUT APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * DATE FIN APPLICATION
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * Libelle bénéficaire NEO
         */
        libelleBeneficaireNeo: string;
        /**
         * Libelle bénéficaire Fise
         */
        libelleBeneficaireFise: string;
        /**
         * indicateur restitution édition
         */
        indicateurRestitutionEdition: string;
    }
    interface ICritereDecisionAssureur {
        /**
         * CODE DECISION ENVOYE PAR ASSUREUR.
         * - Recherche sur la table BT7D via la QR SQCA.
         */
        codeDecisionEnvoyeParAssureur: string;
        /**
         * INDICATEUR DECISION COMPTABLE.
         * - Recherche sur la table BT7D via la QR SQCA.
         */
        indicateurDecisionComptable: string;
        /**
         * Code identification convention jur.
         * - Recherche sur la table BT7D via la QR SQCA.
         */
        codeIdentificationConventionJur: string;
    }
    interface IParametreDecisionAssureur {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE DECISION ENVOYE PAR ASSUREUR
         */
        codeDecisionEnvoyeParAssureur: string;
        /**
         * INDICATEUR DECISION COMPTABLE
         */
        indicateurDecisionComptable: string;
        /**
         * Code identification convention jur
         */
        codeIdentificationConventionJur: string;
        /**
         * TYPE DE RISQUE CONCERNE
         */
        typeRisqueConcerne: string;
        /**
         * LIBELLE DECISION ENVOYE PAR ASSUREUR
         */
        libelleDecisionEnvoyeAssureur: string;
        /**
         * INDICATEUR CLOTURE SINISTRE
         */
        indicateurClotureSinistre: string;
        /**
         * IND. ENVOI REPONSE ASS. CONDITIONNE
         */
        indicateurReponseConditionne: string;
    }
    interface ICritereReglementation {
        /**
         * CODE FAMILLE CONTROLE.
         * - Recherche sur la table BT56 via la QR SQCF.
         */
        codeFamilleControle: string;
        /**
         * LIBELLE LONG REGLEMENTATION.
         * - Donnée optionnelle.
         */
        libelleLongReglementation: string;
        /**
         * code éligibilité hors marché.
         * - Donnée optionnelle.
         */
        codeEligibiliteHorsMarche: string;
        /**
         * Code Autorisation financement frais.
         * - Donnée optionnelle.
         */
        codeAutorisationFinanceFrais: string;
    }
    interface IParametreReglementation {
        /**
         * CODE FAMILLE CONTROLE
         */
        codeFamilleControle: string;
        /**
         * LIBELLE LONG REGLEMENTATION
         */
        libelleLongReglementation: string;
        /**
         * DATE CREATION
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * CODE PRET BONIFIE PAR L ETAT
         */
        codePretBonifieParLEtat: string;
        /**
         * LIBELLE COURT REGLEMENTATION
         */
        libelleCourtReglementation: string;
        /**
         * DEVISE DE RESTITUTION REGLEMENTATION
         */
        deviseRestitutionReglementation: string;
        /**
         * DEVISE D'EXPRESSION REGLEMENTATION
         */
        deviseExpressionReglementation: string;
        /**
         * Marge actualisation subvention 0%
         */
        margeActualisationSubvention: number;
        /**
         * Marge interêt différé subvention 0%
         */
        margeInteretDiffereSubvention: number;
        /**
         * code éligibilité hors marché
         */
        codeEligibiliteHorsMarche: string;
        /**
         * Code Autorisation financement frais
         */
        codeAutorisationFinanceFrais: string;
    }
    interface IParametreApplicatif {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENT ELEMENT STRUCTURE INSTRUCTEUR
         */
        identElementStructInstructeur: string;
        /**
         * Code paramètre applicatif
         */
        codeParametreApplicatif: string;
        /**
         * DATE DE DEBUT DE VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE DE FIN DE VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE DU PARAMETRE
         */
        libelleParametre: string;
        /**
         * CODE TYPE DE PARAMETRE
         */
        codeTypeParametre: string;
        /**
         * MONTANT (PARAMETRE MONTANT)
         */
        parametreMontant: number;
        /**
         * Durée d'un paramètre
         */
        dureeUnParametre: number;
        /**
         * DATE (PARAMETRE DATE)
         * Type date au format yyyy-MM-dd
         */
        parametreDate: string;
        /**
         * TAUX (PARAMETRE TAUX)
         */
        parametreTaux: number;
        /**
         * VALEUR PARAMETRE
         */
        valeurParametre: string;
        /**
         * CODE VERSION NEO
         */
        codeVersionNeo: string;
        /**
         * CODE RELEASE NEO
         */
        codeReleaseNeo: string;
    }
    interface IParametreStandard {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * identifiant pour acces bt89
         */
        identifiantPourAccesBt89: string;
        /**
         * DATE DE DEBUT DE VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * DATE DE FIN DE VALIDITE
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * LIBELLE DU PARAMETRE
         */
        libelleParametre: string;
        /**
         * MONTANT (PARAMETRE MONTANT)
         */
        parametreMontant: number;
        /**
         * DATE (PARAMETRE DATE)
         * Type date au format yyyy-MM-dd
         */
        parametreDate: string;
        /**
         * VALEUR PARAMETRE
         */
        valeurParametre: string;
        /**
         * TAUX (PARAMETRE TAUX)
         */
        parametreTaux: number;
    }
    interface ICritereCategorieReglementaireAttributionTor {
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION.
         * - Recherche sur la table BT62 via la QR SQCE.
         */
        categReglementaireAttribution: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR ).
         * - Recherche sur la table BT62 via la QR SQCE.
         */
        typeObjetReglemente: string;
    }
    interface IParametreCategorieReglementaireAttributionTor {
        /**
         * CATEGORIE REGLEMENTAIRE ATTRIBUTION
         */
        categReglementaireAttribution: string;
        /**
         * TYPE OBJET REGLEMENTE ( TOR )
         */
        typeObjetReglemente: string;
    }
    interface ICritereEstimation {
        typeEstimation: string;
        codeModaliteEstimation: string;
        codeMotifReEstimation: string;
    }
    interface IParametreEstimation {
        typeEstimation: string;
        codeModaliteEstimation: string;
        codeMotifReEstimation: string;
        codeEtablissement: number;
    }
    interface ICritereRelationPartenaire {
        /**
         * IDENTIFIANT PARTENAIRE
         */
        identifiantPartenaire: string;
        /**
         * identifiant partenaire externe
         */
        identifiantPartenaireExterne: string;
        /**
         * CODE PARTENAIRE GENERIQUE
         */
        codePartenaireGenerique: string;
    }
    interface IParametreRelationPartenaire {
        /**
         * IDENTIFIANT PARTENAIRE
         */
        identifiantPartenaire: string;
        /**
         * CODE TYPE ROLE PERSONNE
         */
        typeRolePersonne: string;
        /**
         * CODE IDENTIFIANT PARTENAIRE
         */
        codeIdentifiantPartenaire: string;
        /**
         * Code établissement du garant
         */
        codeEtablissementGarant: string;
        /**
         * identifiant partenaire externe
         */
        identifiantPartenaireExterne: string;
        /**
         * code génération bilan partenaire
         */
        codeGeneBilanParnBpce: string;
        /**
         * CODE PARTENAIRE GENERIQUE
         */
        codePartenaireGenerique: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.PersonneEmprunteur {
    interface IPersonneEmprunteur {
        codeEtablissement: number;
        identifiantEmprunteur: string;
        identifiantPersonne: string;
        numeroOrdrePersonne: number;
        codeTypePersonne: string;
        typeRolePersonne: string;
        codeCivilite: string;
        nomOuRaisonSociale: string;
        prenoms: string;
        dateDeNaissance: string;
        codeSituationFamiliale: string;
    }
    interface INouvelEmprunteur {
        codeEtablissement: number;
        identifiantEmprunteur: string;
        libelleTiers: string;
        codeTypePersonne: string;
        adresseLigne1: string;
        adresseLigne1Bis: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4CodePostal: string;
        adresseLigne5Commune: string;
        libellePaysLocalisation: string;
    }
    interface IEmprunteurGlobal extends IElementGestion {
        listePersonneEmprunteur: Array<IPersonneEmprunteur>;
        listeNouvelEmprunteur: Array<INouvelEmprunteur>;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.Recherche {
    interface IDossierCredit {
        identifiantCaisse: number;
        identifiantDossierCommercial: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        identifiantElementStructure: string;
        libelleElementStructure: string;
        codeEtatDossierGestion: string;
        montantEmpruntTotal: number;
        codeDevise: string;
        dateCreation: string;
        identifiantCreditElementaire: string;
        identifiantOperationFinancement: string;
        identifiantDossierOrigine: string;
        typeEngagement: string;
        typeDeLoi: string;
        notationEngagementBale2: string;
        listeCredit: Array<ICredit>;
        codeModaliteOccupation: string;
        codeDestinationAutoriseObjet: string;
        etatConsolidation: string;
    }
    interface ICredit {
        identifiantCaisse: number;
        identifiantCredit: string;
        identifiantDossierCommercial: string;
        libelleNatureFinancement: string;
        montantActualiseCredit: number;
        dateEffet: string;
        libelleCourtProduit: string;
        dureeCredit: number;
        codeDevise: string;
        uniteDureeCredit: string;
        identifiantAncienCredit: string;
        dateMERZero: string;
        dateEcheance: string;
        libelleEtatCredit: string;
        indicateurGestionCentralisee: boolean;
        codeFamilleProduit: string;
        numeroRelatifProduit: string;
    }
    interface IEmprunteur {
        listeGecco: Array<ICaracteristiqueOperation>;
        identifiantEmprunteur: string;
        listeSynchro: Array<IDossierCredit>;
    }
    interface ICaracteristiqueOperation {
        codeEtablissement: number;
        identifiantOperationFinancement: string;
        identifiantDossierAlis: string;
        libelleOperation: string;
        montantOperation: number;
        dateDebutOperation: string;
        dateFinValidite: string;
        listeDossierCredit: Array<IDossierCredit>;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IRecherche {
        listeEmprunteur: Array<IEmprunteur>;
        retourQR: Array<IRetourQR>;
        /**
         * utiliser pour le versement chainage
         */
        libelleTiers: string;
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.ReportEcheance {
    interface IReportEcheance extends IElementGestion {
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.TableauAmortissementQuotite {
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface ITransformationPretGlobal {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeDevise: string;
        compteurMiseAJour: number;
        identifiantEmprunteur: string;
        libelleLongProduit: string;
        libelleCourtProduit: string;
        redacteurActe: string;
        codeAuthenticiteContrat: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        listeTransformationMulti: Array<ITransformationMulti>;
        retourQR: Array<IRetourQR>;
        transformationMono: ITransformationMono;
        transformationSimulable: ITransformationMulti;
        pretCombine: Array<IPhasePretCombine>;
        listeQuotiteTA: Array<IQuotiteTA>;
        calculTA: ICalculTA;
    }
    interface ITransformationMulti {
        identifiantCaisse: number;
        identifiantCredit: string;
        numeroRelatifPhase: number;
        uniteDureePhase: string;
        dureeInitialePhase: number;
        montantPartAmortissableCapital: number;
        montantPartInFine: number;
        modeRepartitionCapital: string;
        codeAjoutInteret: string;
        montantQuotiteAmortir: number;
        dateEcheanceMER: string;
        numeroEcheance: number;
        codeModificationAutorisee: string;
        capitalRestantComptable: number;
        numeroAleaSurPret: number;
        statutAlea: string;
        codeActionEcranListe: string;
        dateValeurAlea: string;
        quotiteCapitalAmortir: number;
        amortissementSupplFinPhase: number;
    }
    interface ITransformationMono {
        identifiantCaisse: number;
        identifiantCredit: string;
        montantActualiseCredit: number;
        tauxInteretPalier: number;
        montantInteretsCapitalises: number;
        dateEcheanceMER: string;
        dateMERZero: string;
        uniteDureeCredit: string;
        dureeCredit: number;
    }
    interface ICalculTA {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeFamilleProduit: string;
        numeroAleaSurPret: number;
        numeroEcheance: number;
        codeTypeDemandeTA: string;
        dateRecalculTA: string;
        codeSimulationTA: string;
        codeCalculTEG: string;
        numeroModuleCalculTA: string;
        dateValeurAlea: string;
        montantAleaEnCapital: number;
        typeSimulationCalculTA: string;
        codeTypeRecalculTA: string;
        montantEcheanceReduiteSuiteRA: number;
        tauxInteretPalier: number;
        tauxInteretApresRevision: number;
        variationEcheanceRevision: number;
        montantEcheanceMERPrecedente: number;
        codeNatureTraitement: string;
        codeTypeDemandeEditionTA: string;
        prefixeCodesTransactions: string;
        codeTypeAleaSurPret: string;
        dateEcheance: string;
        codeTypeModificationCredit: string;
        numeroRelatifPhaseCredit: number;
        codeSimulationVersement: string;
        codeContinuiteRevision: string;
        dateExProchaineMERApresAvenant: string;
        codeTypeCreditDansAvenant: string;
        numeroRelatifSimulationAvenant: number;
        montantQuotiteAmortissement: number;
        montantPartAmortissableCapital: number;
        montantPartInFine: number;
        codeReportModificationEcheance: string;
        modeReportModificationEcheance: string;
        montantEcheanceInitiale: number;
        montantEcheanceRevisionPrec: number;
        codeRoleCredit: string;
        codeLignesTAEnSortie: string;
        codeAjoutInteretCapitalPartAmor: string;
        amortissementSuppFinPhase: number;
        nombreEcheancesReduitesSuiteRA: number;
        coeffButoirEcheanceBaisse: number;
        coeffButoirEcheanceHausse: number;
        codeEtatPacbase: string;
        dateDuJour: string;
        numeroRelatifProduit: string;
        numeroRelatif: number;
    }
    interface IQuotiteTA {
        numeroRelatifPhaseCredit: number;
        codeEtablissement: number;
        numeroRelatif: number;
        dateEcheanceMER: string;
        montantEcheance: number;
        montantAmortiOrdreMER: number;
        montantInteretsOrdreMER: number;
        montantAccessoiresCredit: number;
        montantCapitalRestantDu: number;
        montantInteretsReporte: number;
        identifiantCredit: string;
        zoneBanalise: string;
        montantReporte: number;
        numeroEcheance: number;
        codeTypeEcheanceRecouv: string;
        taux: number;
        montantAssietteAccessoire: number;
        montantFraisGestion: number;
        montantPerte: number;
        montantServiceObjet: number;
        montantPrimeAssurance: number;
        montantRecouvreInteret: number;
        montantRecouvreAssuranceAmort: number;
        montantRecouvreAmort: number;
        montantRecouvreInFine: number;
        montantRecouvreAssuranceInfine: number;
        montantRecouvreInteretAmort: number;
        montantArecouvrerHorsAccessoire?: number;
        montantCapitalRestantDuCalculer?: number;
    }
    interface IPhasePretCombine {
        codeEtablissement: number;
        identifiantCredit: string;
        numeroRelatifPhase: number;
        montantPartAmortCapital: number;
        modeRepartitionCapital: string;
        codeAjoutInteret: string;
        montantQuotiteAmort: number;
        quotiteCapitalAAmortir: number;
        amortSuppFinPhase: number;
        montantPartInFine: number;
    }
    class TransformationPretGlobal {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeDevise: string;
        compteurMiseAJour: number;
        identifiantEmprunteur: string;
        calculTA: ICalculTA;
        listeQuotiteTA: Array<IQuotiteTA>;
        libelleLongProduit: string;
        libelleCourtProduit: string;
        redacteurActe: string;
        codeAuthenticiteContrat: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        listeTransformationMulti: Array<ITransformationMulti>;
        retourQR: Array<IRetourQR>;
        transformationMono: ITransformationMono;
        transformationSimulable: ITransformationMulti;
        pretCombine: Array<IPhasePretCombine>;
        constructor(identifiantCaisse: number, identifiantCredit: string, codeDevise: string, compteurMiseAJour: number, identifiantEmprunteur: string, calculTA: ICalculTA, listeQuotiteTA: Array<IQuotiteTA>);
    }
}

declare module Avenants.Rest.Modeles.DossierCreditGestion.TableauAmortissement {
    interface IListeEcheanceParse {
        listeGroupesEcheances: Array<IGroupeEcheances>;
        phase: IEnteteDetailPhaseTableau;
    }
    interface IGroupeEcheances {
        listeEcheance: Array<IEcheanceTableau>;
    }
    interface IEnteteTableau extends IElementGestion {
        codeTypePretCombine: string;
        identifiantCaisseEpargne: number;
        identifiantCredit: string;
        listeEnteteDetail: Array<IEnteteDetailPhaseTableau>;
        codeOrigineCreditDossier: string;
        dateProchaineRevisionCredit: string;
        dateRecalcul: string;
        codeDevise: string;
    }
    interface IEcheanceTableau {
        dateJourAffichage: string;
        numeroRelatifPhaseCredit: number;
        numeroRelatifSur4: number;
        montantPremiereEcheancePhase1: number;
        zoneBanaliseeNumeriqueSV: number;
        montantReporte: number;
        capitalRestantComptable: number;
        tauxInteretPalier: number;
        codeTypeEcheanceRecouvrement: string;
        zoneBanaliseeAlphanumLongueur1: string;
        zoneBanaliseeNumeriqueSV2: number;
        montantPerte: number;
        numeroEcheance: number;
        montantAmortissementOrdreMER: number;
        montantInteretsOrdreMER: number;
    }
    interface IEnteteDetailPhaseTableau {
        numeroRelatifPhaseCredit: number;
        dureeAjusteePhaseCredit: number;
        uniteDureePhase: string;
        codeTypePhase: string;
        listeEcheance: Array<IEcheanceTableau>;
        identifiantCaisseEpargne: number;
        identifiantCredit: string;
        modeCalculTaux: string;
        dateFinPhase: string;
    }
    interface ITableauAmortissement {
    }
    interface ICalculTA {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeFamilleProduit: string;
        numeroRelatifProduit: string;
        numeroAleaSurPret: number;
        numeroEcheance: number;
        codeTypeDemandeTA: string;
        dateRecalculTA: string;
        codeSimulationTA: string;
        codeCalculTEG: string;
        numeroModuleCalculTA: string;
        dateValeurAlea: string;
        montantAleaEnCapital: number;
        typeSimulationCalculTA: string;
        codeLignesTAEnSortie: string;
        dateDuJour: string;
        codeTypeRecalculTA: string;
        montantEcheanceReduiteSuiteRA: number;
        nombreEcheancesReduitesSuiteRA: number;
        tauxInteretPalier: number;
        tauxInteretApresRevision: number;
        coeffButoirEcheanceHausse: number;
        coeffButoirEcheanceBaisse: number;
        montantEcheanceInitiale: number;
        montantEcheanceMERPrecedente: number;
        numeroRelatif: number;
        codeTypeDemandeEditionTA: string;
        codeNatureTraitement: string;
        codeEtatPacbase: string;
        prefixeCodesTransactions: string;
        codeTypeAleaSurPret: string;
        dateEcheance: string;
        codeTypeModificationCredit: string;
        numeroRelatifPhaseCredit: number;
        codeSimulationVersement: string;
        codeContinuiteRevision: string;
        dateExProchaineMERApresAvenant: string;
        codeTypeCreditDansAvenant: string;
        numeroRelatifSimulationAvenant: number;
        montantQuotiteAmortissement: number;
        montantPartAmortissableCapital: number;
        montantPartInFine: number;
        codeReportModificationEcheance: string;
        modeReportModificationEcheance: string;
        variationEcheanceRevision: number;
        amortissementSuppFinPhase: number;
        codeAjoutInteretCapitalPartAmor: string;
        montantEcheanceRevisionPrec: number;
    }
}

declare module Avenants.Rest.Modeles.DossierNumerique.DossierNumerique {
    interface IActe {
        /**
         * libellé de l'acte de gestion
         */
        libelleActe: string;
        /**
         * code de l'acte de gestion. Correspond à un identifiant du référentiel des actes (REFACTE)
         */
        codeActe: string;
        /**
         * CodeEntite
         */
        codeEntite: string;
        /**
         * Code du canal de déroulement de  l'acte
         */
        codeCanal: string;
        /**
         * Date de fin de validité de l'acte de gestion. Cette date permet de gérer la durée de vie et l'épuration du  dossier
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeActe: string;
        /**
         * CodeMailSignataire
         */
        codeMailSignataire: string;
        /**
         * CdGuichet
         */
        codeGuichet: string;
        /**
         * TopFAFGXML
         */
        topFAFGXML: boolean;
        /**
         * identifiant externe de l'acte. Il permet d'identifier le dossier numérique
         */
        identifiantActeExterne: string;
        /**
         * identifiant de l'agence ou du point de vente où se déroule l'acte
         */
        identifiantAgence: string;
        /**
         * identifiant de l'agent associé à l'acte de gestion
         */
        identifiantAgent: string;
        /**
         * Référence du contrat associé à l'acte de gestion
         */
        referenceContrat: string;
        /**
         * référence du contrat dans le SI du producteur, dans le cas d'un acte de gestion instruit chez un producteur externe (exemple : numéro FFI chez Natixis Financement)
         */
        referenceActeProducteur: string;
        /**
         * code type action associé à la contractualisation
         */
        codeTypeActionContrat: string;
        /**
         * libellé fourni en cas d'inégibilité de l'acte à la signature électronique
         */
        libelleMotifNonEligibilite: string;
        /**
         * Numéro de l'entité titulaire concernée à l'acte
         */
        numreroEntiteTitulaire: string;
        /**
         * Code Message de Consentement pour l'acte.
         */
        codeMessageConsentement: string;
        /**
         * code indiquant si la contractualisation de l'acte force la création d'une BAL MSI pour le signataire
         */
        codeTypeActionMSI: string;
        /**
         * Code indiquant si la contractualisation de l'acte nécessite la recherche d'une Pièce justificative d'identité pour le signataire
         */
        codeTypeActionPJI: string;
        /**
         * code permettant l'émission d'un CRE suite à la contractualisation
         */
        codeTypeActionCRE: string;
        /**
         * identifiant de l'acte donné par IDN
         */
        identifiantActeIDN: string;
        /**
         * Signataires
         */
        listeSignataire: Array<ISignataire>;
        /**
         * liste des titulaires concernés par l'acte de gestion
         */
        listeTitulaire: Array<ITitulaire>;
        /**
         * ReferencesActe
         */
        listeReferenceActe: Array<IReferenceActe>;
        /**
         * OperationsFinancieres
         */
        listeOperationFinanciere: Array<IOperationFinanciere>;
        /**
         * code de l'état de l'acte associé au dossier. Permet de connaître notamment l'état de contractualisation
         */
        suiviActe: ISuiviActe;
        /**
         * Identifiant agent conseiller
         */
        identifiantAgentConseiller: string;
        /**
         * Signature Agent Email :
         *         Operant = 0,
         *         ChargeAffaire = 1,
         *         OperantPourChargeAffaire = 2
         *         Aucun = 3
         */
        signatureAgentEmail: number;
        /**
         * Destinataire Email Conseiller :
         *         Operant = 0,
         *         ChargeAffaire = 1,
         *         OperantChargeAffaire = 2,
         *         Aucun = 3
         */
        destinataireEmailConseiller: number;
        /**
         * Contrôle complétude DRC :  Valeur par défaut est true.
         */
        controleCompletudeDRC: boolean;
    }
    interface IReferenceActe {
        /**
         * TypeReferenceActe
         */
        typeReferenceActe: string;
        /**
         * ValReferenceActe
         */
        valReferenceActe: string;
    }
    interface ITitulaire {
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * AdrMailContr
         */
        adresseMailContr: string;
    }
    interface IFluxGCEDoc {
        /**
         * Nom du modèle permettant la génération du document (Gcedoc à ce jour)
         */
        nomModeleGcedoc: string;
        /**
         * Flux Xml Gcedoc. Ce flux, associé au modèle, permet à l'outil de générer un document.
         */
        fluxXmlGcedoc: string;
    }
    interface IFluxBinaire {
        /**
         * flux binaire d'un document (Pdf, ...).
         */
        documentElectronique: string;
    }
    interface IFluxFilenet {
        /**
         * Identifiant de l''application de référence en GED
         */
        identifiantComposantApplicatif: string;
        /**
         * identifiant du document dans la GED
         */
        identifiantGEDDocument: string;
    }
    interface IFluxGedTemporaire {
        /**
         * Identifiant de l'application de référence en GED
         */
        identifiantComposantApplicatif: string;
        /**
         * identifiant du document dans la GED temporaire
         */
        identifiantDocumentTemporaire: string;
    }
    interface IFluxDocPartageICG {
        /**
         * Reference de partage du document. Cette référence correspond à un document d'entreprise stocké dans l'ICG
         */
        referencePartage: string;
    }
    interface IFluxXHTML {
        /**
         * contenu de la représentation alternative du document. Permet lors du processus de signature client, d'afficher le document dans une page web
         */
        contenuDocumentAlternatif: string;
    }
    interface IFluxLignes {
        /**
         * Ligne1 du document alternatif
         */
        ligne1DocumentAlternatif: string;
        /**
         * Ligne2 du document alternatif
         */
        ligne2DocumentAlternatif: string;
        /**
         * Ligne3 du document alternatif
         */
        ligne3DocumentAlternatif: string;
        /**
         * Ligne4 du document alternatif
         */
        ligne4DocumentAlternatif: string;
        /**
         * Ligne 5 du document alternatif
         */
        ligne5DocumentAlternatif: string;
        /**
         * Ligne 6 du document alternatif
         */
        ligne6DocumentAlternatif: string;
        /**
         * Ligne7 du document alternatif
         */
        ligne7DocumentAlternatif: string;
        /**
         * Ligne8 du document alternatif
         */
        ligne8DocumentAlternatif: string;
        /**
         * Ligne9 du document alternatif
         */
        ligne9DocumentAlternatif: string;
        /**
         * Ligne10 du document alternatif
         */
        ligne10DocumentAlternatif: string;
    }
    interface IDocument {
        /**
         * Nom du document
         */
        nomDocument: string;
        /**
         * Identifiant du document dans le dossier IDN en cours
         */
        identifiantDocumentIDN: string;
        /**
         * référence du document chez le producteur responsable de sa production(cas d'un document fourni par un producteur externe - Natixis, IARD, ...)
         */
        referenceDocumentProducteur: string;
        /**
         * StockageDoc
         */
        donneesStockageDocument: IStockageDocument;
        /**
         * RecupDoc
         */
        donneesContenuDocument: IContenuDocument;
        /**
         * RecupDocAlternatif
         */
        donneesDocumentAlternatif: IContenuDocumentAlternatif;
        donneesComportementSignatureDocument: IComportementSignatureDocument;
    }
    interface ISignataire {
        /**
         * CdTypeSignr
         */
        codeTypeSignr: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * AdrMailContr
         */
        adresseMailContr: string;
        /**
         * IdntJustIdGed
         */
        idJustificatifIdGed: string;
        /**
         * RangSignr
         */
        rangSignr: number;
        /**
         * Le moyen authentification ICG
         */
        moyenAuthentificationICG: string;
        /**
         * Le numéro de téléphone portable du signataire
         */
        numeroTelephonePortable: string;
        /**
         * Info complémentaire
         */
        infoComplementaire: string;
    }
    interface IOptionSignataire {
        /**
         * IdOptSignr
         */
        idOptSignr: string;
        /**
         * MsgOptSignr
         */
        msgOptSignr: string;
    }
    interface IContenuDocument {
        /**
         * FluxBinaire
         */
        fluxBinaire: IFluxBinaire;
        /**
         * FluxGCEDoc
         */
        fluxGCEDoc: IFluxGCEDoc;
        /**
         * FluxFilenet
         */
        fluxFilenet: IFluxFilenet;
        /**
         * FluxGedTemporaire
         */
        fluxGedTemporaire: IFluxGedTemporaire;
        /**
         * FluxDocPartageICG
         */
        fluxDocPartageICG: IFluxDocPartageICG;
    }
    interface IContenuDocumentAlternatif {
        /**
         * FluxXHTML
         */
        fluxXHTML: IFluxXHTML;
        /**
         * FluxLignes
         */
        listeFluxLignes: Array<IFluxLignes>;
    }
    interface IStockageDocument {
        /**
         * CodeForcAccs
         */
        codeForcageAccessibilite: number;
        /**
         * code type de fichier correspondant au docuemnt
         */
        codeTypeFichier: string;
        /**
         * code type attributaire du document. Il correspond à un code défini dans le catalogue GED. exemple 1 - contrat, 2 - personne, ....)
         */
        codeTypeAttributaire: string;
        /**
         * identifiant de l'attributaire. Correspond à un identifiant métier du type d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond à la référence du contrat
         */
        identifiantAttributaire: string;
        /**
         * libellé d'intitulé de l'attributaire. Par exemple, pour un contrat, correspond à l'intitulé du contrat. Pour une personne, correspond à l'intitulé de la personne
         */
        intituleAttributaire: string;
        /**
         * identifiant de typologie du document. Ce typage correspond à une nature de document gérée par le catalogue GED. Permet de classifier le document (offre contrat, pièce justificative d'identité, avis d'imposition, ...)
         */
        identifiantNaturePieceJointe: string;
        /**
         * libellé décrivant le document.
         */
        libelleDescriptionDocument: string;
    }
    interface ISignatureEntite {
        /**
         * type de signataire du dossier)
         */
        codeTypeSignataire: string;
        /**
         * correspond à l'identifiant de la banque qui signe le contra
         */
        identifiantEntiteSignataire: string;
        /**
         * Numéro de la page où se situe la signature dans le document
         */
        numeroPageDocument: number;
        /**
         * coordonnée abscisse où la signature se trouve sur la page du document
         */
        numeroAbscisseSignature: number;
        /**
         * coordonnée ordonnée où la signature se trouve sur la page du document
         */
        numeroOrdonneeSignature: number;
        /**
         * hauteur de la zone de signature.
         */
        hauteurSignature: number;
        /**
         * largeur de la zone de signature
         */
        largeurSignature: number;
        /**
         * référence de l'image correspondant à la signature entité. Permet d'apposer une signature scripturale dans un document
         */
        imageSignatureEntite: string;
    }
    interface ISignatureClient {
        /**
         * CdTypeSignr
         */
        codeTypeSignr: string;
        /**
         * NumrOrdrSign
         */
        numeroOrdreSigne: number;
        /**
         * LablSign
         */
        lablSigne: string;
        /**
         * NumrPageDoc
         */
        numeroPageDoc: number;
        /**
         * NumrAbscSign
         */
        numeroAbscSigne: number;
        /**
         * NumrOrdnSign
         */
        numeroOrdnSigne: number;
        /**
         * HautSign
         */
        hautSigne: number;
        /**
         * LargSign
         */
        largSigne: number;
    }
    interface ISignataireDocument {
        /**
         * OptionsSignataire
         */
        optionsSignataire: IOptionSignataire;
        /**
         * type au sens numéro de signataire du dossier.
         * on affecte un type (1, 2,...) à un signataire (personne)
         */
        codeTypeSignataire: string;
        /**
         * Numéro permettant de gérer l'ordre d'affichage du document lors du processus de signature
         */
        numeroAffichageDocument: number;
        /**
         * indicateur permettant de gérer la signature du document par le signataire
         */
        codeIndicateurSignature: boolean;
    }
    interface IImpressionDoc {
        /**
         * nExmpImpr
         */
        exmpImpr: number;
        /**
         * nExmpImprMin
         */
        exmpImprMinimum: number;
        /**
         * nExmpImprMax
         */
        exmpImprMaximum: number;
    }
    interface IInfoDocument {
        /**
         * typologie de document utilisée pour la signature. Se réfère au paramétrage de la contractualisation dans l'application CONTELEC
         */
        codeTypeDocument: string;
        /**
         * type mim du document. Donnée caractérisant le type de fichier du document
         */
        typeMimDocument: string;
        /**
         * Label du document. Un label peut être utilisé dans le processus de signature
         */
        labelDocument: string;
        /**
         * caractérise l'usage du document lors de la contractualisation (papier ou électronique).
         * cas de figure possibles :
         * - document pour impression papier uniquement
         * - document pour signature électronique uniquement
         * - document tout mode (papier et électronique)
         */
        modeUsageDocument: string;
        /**
         * référence du contrat associé au document chez le producteur (fait le lien avec la référence fournie par le producteur responsable du document)
         */
        referenceContratProducteur: string;
        /**
         * référence du contrat associé au document chez le distributeur
         */
        referenceContratDistributeur: string;
        /**
         * libellé de description du document pour IDN (pour affichage)
         */
        libelleDescriptionDocumentIDN: string;
        /**
         * libellé de la section de regroupement dans laquelle le document sera présenté lors de l'affichage. Permet de présenter les documents par thème de regroupement
         */
        libelleSectionRegroupement: string;
        /**
         * la ressource documentparametre.documentEntreprise renvoi un objet ResponseDocumentEntreprise avec une donnée url à sauvegarder dans urlDocument et à envoyer à IDN
         */
        urlDocument: string;
    }
    interface IOperationFinanciere {
        /**
         * LiblClientOpe
         */
        libelleClientOpe: string;
        /**
         * LiblCompteOpe
         */
        libelleCompteOpe: string;
        /**
         * DtOpe
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dtOpe: string;
        /**
         * MontantOpe
         */
        montantOpe: number;
        /**
         * NatureOpe
         */
        natureOpe: string;
        /**
         * IdntPers
         */
        idPersonne: string;
    }
    interface IDossierNumerique {
        /**
         * Acte
         */
        acte: IActe;
        /**
         * code application à l'origine du dossier
         */
        codeApplication: string;
        /**
         * Documents
         */
        listeDocument: Array<IDocument>;
        /**
         * Indicateur par lequel l'appelant signifie que l'archivage est différé
         */
        archivageDiffere: boolean;
        /**
         * indicateur par lequel l'appelant signifie que ce dossier est annulable dans la journée
         */
        inActeAnnulableAJ: string;
    }
    interface IComportementSignatureDocument {
        descriptionDocument: IInfoDocument;
        /**
         * caractéristique d'impression document
         */
        impressionDocument: IImpressionDoc;
        listeSignataireDocument: Array<ISignataireDocument>;
        listeSignatureClient: Array<ISignatureClient>;
        listeSignatureEntite: Array<ISignatureEntite>;
        /**
         * urlDocument récupérer de docEntreprise
         */
        lienInternet: string;
    }
    interface ISuiviActe {
        /**
         * code de l'état de l'acte associé au dossier. Permet de connaître notamment l'état de contractualisation
         */
        codeEtatActe: string;
        /**
         * Identifiant de la transaction ICG de signature de l'acte en cas de signature électronique
         */
        identifiantTransactionICG: string;
        /**
         * code indiquant le mode de signature de l'acte (Papier, Electronique)
         */
        codeModeContractualisation: string;
        /**
         * Date à laquelle l'acte a été signé
         */
        dateContractualisation: string;
    }
    interface IAnnulationDossier {
        /**
         * IdntActeIdn
         */
        idActeIdn: string;
        /**
         * CodeAppli
         */
        codeApplication: string;
        /**
         * CdnEtabFinn
         */
        codeEtablissement: string;
    }
    interface IAnnulationSignElectronique {
        /**
         * Code de l'établissement
         */
        codeEtablissement: string;
        /**
         * numéro du crédit
         */
        idDossierCredit: string;
        /**
         * 'A' : Avenant 'S' : Simulation
         */
        typeContrat: string;
        /**
         * Numéro de l'avenant ou de la simulation.
         */
        numero: number;
        /**
         * Numéro de rénogiation de la simulation.
         */
        numeroRenegociation: number;
    }
    interface IReponseAnnulationDossier {
        /**
         * IdntActeIdn
         */
        idActeIdn: string;
        /**
         * CodeRetour
         */
        codeRetour: string;
        /**
         * LblRetour
         */
        libelleRetour: string;
    }
    interface ITerminerActeVadInput {
        /**
         * Code etablissement
         */
        codeEtablissement: string;
        /**
         * Identifiant de l'acte IDN
         */
        idActeIdn: string;
        /**
         * Code Application. Exemple : CONTELEC, MYWAY ...
         */
        codeApplication: string;
        /**
         * Documents
         */
        listeDocuments: Array<IDocumentActeVad>;
    }
    interface ITerminerActeVadOutput {
        /**
         * Identifiant IDN de l'acte
         */
        idActeIdn: string;
        /**
         * Code retour
         */
        codeRetour: number;
        /**
         * Libelle retour
         */
        libelleRetour: string;
    }
    interface IDocumentActeVad {
        /**
         * Identifiant IDN du document
         */
        idDocumentIdn: string;
        /**
         * Code type attributaire du document
         */
        codeTypeAttributaire: string;
        /**
         * Identifiant attributaire du document
         */
        idAttributaire: string;
        /**
         * Intitule attributaire du document
         */
        intituleAttributaire: string;
    }
    interface IQstnBasculerActeContractPapier {
        /**
         * Identifiant acte IDN
         */
        idActeIdn: string;
        /**
         * Code Application, exemple: CONTELEC, MYWAY
         */
        codeApplication: string;
        /**
         * Code Etablissement Financière
         */
        codeEtablissement: string;
    }
    interface IRspnBasculerActeContractPapier {
        /**
         * Code Retour
         */
        codeRetour: number;
        /**
         * LibelleRetour
         */
        libelleRetour: string;
        /**
         * Identifiant Acte IDN
         */
        idActeIdn: string;
        /**
         * Message Erreur Interne
         */
        messageErreurInterne: string;
    }
    interface IInitierSignatureInput {
        /**
         * Code établissement financier
         */
        codeEtablissement: string;
        /**
         * Identifiant acte IDN
         */
        identifiantIDN: string;
        /**
         * Code application : Exemple : CONTELEC,MYWAY
         */
        codeApplication: string;
        /**
         * Code Mode Contractualisation
         */
        codeModeContractualisation: string;
        /**
         * Emettre Email Initial
         */
        emettreEmailInitial: boolean;
    }
    interface IInitierSignatureOutput {
        /**
         * Identifiant acte Idn
         */
        identifiantIDN: string;
        /**
         * Code retour
         */
        codeRetour: number;
        /**
         * Identifiant de transaction Icg
         */
        idTransactionIcg: string;
        /**
         * Libellé de retour
         */
        libelleRetour: string;
        /**
         * Correlation id
         */
        correlationId: string;
    }
}

declare module Avenants.Rest.Modeles.EntiteTitulaire.InformationEntiteTitulaire {
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
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
         * Référence externe du Domicilié à = EDS de domiciliation de l'entité titulaire
         */
        refExterneEDSDomiciliationET: number;
        /**
         * Référence externe du Géré par = EDS de gestion de l'entité titulaire
         */
        refExterneEDSGestionET: number;
        /**
         * identifiant élement de structure du guichet de l'entité titulaire
         */
        identifiantEDSGuichet: number;
        /**
         * Nouvelle identifiant élement de structure gestion de l'entité titulaire
         */
        identEDSGestionETNouveau: number;
        /**
         * Nouvelle identifiant élement de structure domicilation de l'entité titulaire
         */
        identEDSDomiciliationETNouveau: number;
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
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         *  - Désignation courte du particulier si personne physique
         *  - Nom commercial si professionnel
         *  - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationTiers: string;
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

declare module Avenants.Rest.Modeles.EntiteTitulaire.Recherche {
    interface IEntiteTitulaire {
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Une ET se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement de BPCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *    - 1   Usage privé
         *    - 2   Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Permet de qualifier le client détenteur d'un contrat.
         * Valeurs :
         *    - 1   mode simple
         *    - 2   mode joint entre époux
         *    - 3   mode joint entre tiers
         *    - 4   mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative des personnes.
         * Valeurs :
         *    - 0   Actif
         *    - 1   Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Précise le type d'indivision.
         * Valeurs :
         *    - 1   Mode indivision successorale
         *    - 2   Mode indivision conventionnel avec solidarité
         *    - 3   Mode indivision conventionnel sans solidarité
         */
        modeCompositionIndivision: string;
        /**
         * Complément de la désignation courte de l'entité titulaire,
         * optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationEntiteTitulaire: string;
        /**
         * Identifiant de l'Elément De Structure
         */
        identifiantEDSDomiciliation: number;
        /**
         * Référence externe EDS
         */
        referenceEDSDomiciliation: number;
        /**
         * Libellé de l'Elément De Structure
         */
        libelleEDSDomiciliation: string;
        /**
         * Date de fermeture de l'entité titulaire dans la gestion administrative des personnes
         * Type date au format yyyy-MM-dd
         */
        dateFermetureEntiteTitulaire: string;
        /**
         * Code presence dans RPM ou FdS
         * - 'R' RPM actif
         * - 'F' Fiche de suivi
         * - 'A' Absent de RPM
         */
        codePresenceDansRpmOuFds: string;
    }
    interface IRechercheEntiteTitulaire {
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
        listeInformationActiviteProf: Array<IInformationActiviteProf>;
    }
    interface IListePersonneRecherche {
        /**
         * Identifiant d'un Etablissement de BPCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne1: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne2: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne3: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne4: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne5: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne6: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne7: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne8: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne9: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne10: number;
    }
    interface IInformationActiviteProf {
        /**
         * Identifiant d'un Etablissement de BPCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Une ET se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'une entreprise francaise
         * répertoriée dans le fichier SIRENE de l'INSEE
         */
        numeroSiren: string;
        /**
         * Numéro interne de classement attribué par l'INSEE
         * à un établissement appartenant à une entreprise
         * Identifie un établissement au sein d'une entreprise
         * répertoriée à l'INSEE.
         */
        numeroNicSiretEtablissement: string;
    }
}

declare module Avenants.Rest.Modeles.Tiers.Identification {
    interface ICodeMarche {
        /**
         * Code Marché de la personne.
         *
         * Exemple :
         * MN 101102 /  Particuliers : Particuliers non Professionnels
         * MN 102102 /  Professionnels : Professions Libérales
         * MN 206101 /  Professionnels Privé : Promoteurs
         */
        codeMarche: string;
        /**
         * Libellé de désignation d'un segment clientèle.
         */
        libelleLongCodeMarche: string;
        /**
         * Libellé court de la segmentation clientèle pour affichage sur le poste de travail.
         * Libellé à caractère confidentiel pour ne pas être interprété par la clientèle.
         */
        libelleCourtCodeMarche: string;
        /**
         * Ce libellé permet de restituer le libellé de la famille du code marché.
         *
         * Exemple :
         * 101 : Particuliers
         */
        libelleFamilleCodeMarche: string;
        /**
         * Détermine la typologie de segmentation clientèle. Correspond au 2 premiers caractères du code segmentation sur 8 caractères.
         *
         * Exemple :
         * 'MN' : Marché National
         */
        codeTypeSegmentation: string;
    }
    interface IDonneeIdentification {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou
         * un Etablissement du réseau CE est répertoriée par la
         * Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le
         *  SI d'un Etablissement.
         *  Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
        /**
         * Détermine le type de personnalité juridique de la personne.
         *
         * Valeurs :
         * 1=personne physique
         * 2=personne morale / assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Libelle du code qui indique le type de personnalité juridique de la personne.
         */
        libellePersonnaliteJuridique: string;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
         *
         *            Valeurs :
         * '0'        Actif
         * '1'        Cloturé
         */
        codeEtatPersonne: string;
        /**
         * Détermine la relation de la personne connue avec
         * l'Etablissement :
         * - client : personne détentrice de contrat(s) de produit / service
         * - tiers : personne non 'client' en lien avec une personne 'client' - lien particulier ou professionnel (ex : participant à un contrat, représentant légal)
         * - prospect : personne n'étant ni client ni tiers
         *
         * Valeurs possibles :
         * '0'        Personne connue comme client
         * '1'        Personne connue comme tiers
         * '2'        Personne connue comme prospect
         */
        codeTypeRelation: string;
        /**
         * Libelle du code qui indique le type de relation de la personne avec l’établissement
         */
        libelleTypeRelation: string;
        /**
         * Date de première entrée en relation d'une personne
         * donnée avec l'Etablissement (CE).
         * Type date au format yyyy-MM-dd
         */
        dateEntreeRelation: string;
        /**
         * Identifiant externe d'une personne, utilisé
         * pour accéder à un ensemble de services
         * dont la BAD.
         */
        identifiantClientBad: string;
        /**
         * Indique si le client peut être consulté par l'agent connecté.
         *    O : client confidentiel accessible
         *    N : client confidentiel inaccessible
         *    F : client confidentiel inaccessible mais forçable
         *    Z : client non confidentiel
         */
        indicAccesPersConfidentielle: string;
        /**
         * Détermine l'origine de la création du prospect
         * dans le SI référencé comme personne connue :
         * internet, bannières, IHM, fichiers achetés etc...
         * Correspond à un canal de distribution
         */
        codeOrigineProspect: string;
    }
    interface IIdentification {
        donneeIdentification: IDonneeIdentification;
        lutteAntiBlanchiment: ILutteAntiBlanchiment;
        listMarche: Array<ICodeMarche>;
        suiviComercial: ISuiviCommercial;
        informationsEAI: IInformationsEAI;
        motifsConfidentialite: Array<IMotifConfidentialite>;
    }
    interface ILutteAntiBlanchiment {
        /**
         * Code alerte VAO. Il indique si une alerte est détectée lors du filtrage.
         * Valeurs :
         * - 'O' : Alerte
         * - 'N' : Pas d'alerte
         */
        codeAlerteVAO: boolean;
        /**
         * Message VAO. Il permet de de préciser à l'agent s'il y a alerte ou non sur la personne filtrée.
         */
        messageAlerteVAO: string;
    }
    interface ISuiviCommercial {
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Correspond à un type : siège, agence, service, poste fonctionnel, ...
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantEDSSuiviCommercial: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente.
         *
         * Valeurs :
         * '001'      poste fonctionnel
         * '002'      service
         * '003'      agence
         * '004'      unité commerciale
         * '005'      secteur commercial
         * '006'      groupe commercial
         * '007'      direction
         * '008'      siège
         * '009'      entité administrative
         * '010'      GAB
         */
        typeEDSSuiviCommercial: string;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceExterneEDSSuiviCommercial: number;
        /**
         * Alimenté uniquement pour les EDS de type Poste fonctionnel (001)
         *
         * Numéro d'identification d'un agent au sein d'un établissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Numéro chrono attribué par le système, pour les établissements.
         * Référence unique dans MYSYS.
         */
        identifiantAgent: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation :
         *      - Si l'EDS n'est pas un Poste fonctionnel, du libellé court du type d'EDS et de la désignation de l'EDS.
         *      - Si c'est un Poste fonctionnel, du nom et du prénom de l'agent titulaire du Poste fonctionnel.
         */
        designationCourteEDS: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation :
         *      - Si l'EDS n'est pas un Poste fonctionnel, du libellé long du type d'EDS et de la désignation de l'EDS.
         *      - Si c'est un Poste fonctionnel, de la civilité, du nom et du prénom de l'agent titulaire du Poste fonctionnel.
         */
        designationLongueEDS: string;
    }
    interface IInformationsEAI {
        /**
         * Indique l'état du dossier EAI pour OVAD/VMC.
         *
         * Valeurs :
         * - 'O' : Eligible EAI – auto certification signée
         * - 'R' : Eligible EAI - auto certification non renseignée ou à confirmer
         * - 'S' : Eligible EAI - auto certification non signée
         * - 'N' : Offre non éligible EAI
         */
        codeStatutEAI: string;
        /**
         * Libellé correspondant au code statut EAI :
         *
         * - Eligible EAI – auto certification signée
         * - Eligible EAI - auto certification non renseignée ou à confirmer
         * - Eligible EAI - auto certification non signée
         * - Offre non éligible EAI
         */
        libelleCodeStatutEAI: string;
        /**
         * Indique le mode de signature de l'auto-certification EAI choisi par le client.
         *
         * Valeurs :
         * - 'P' : Signature papier
         * - 'S' : Signature SED
         * - 'G' : Signature SAG
         */
        codeModeSignatureEAI: string;
        /**
         * Libellé correspondant au code du mode de signature :
         *
         * - Papier
         * - Electronique
         * - Electronique en agence
         */
        libelleCodeModeSignatureEAI: string;
        /**
         * Détermine si l'ouverture d'un compte éligible FATCA est autorisée au poste de travail. Si les personnes d'un CB ne sont pas en conformité avec la législation FATCA, l'ouverture du compte sera impossible.
         *
         * Valeurs :
         * - 'O' : Ouverture autorisée
         * - 'N' : Ouverture impossible
         */
        indicateurOuvertureCompte: string;
    }
    interface IMotifConfidentialite {
        /**
         * Code du motif pour lequel un client a été jugé confidentiel
         */
        codeMotifConfidentialite: string;
        /**
         * Libellé du motif pour lequel un client a été jugé confidentiel
         */
        libelleMotifConfidentialite: string;
    }
}

declare module Avenants.Rest.Modeles.Tiers.ParticulieInformation {
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

declare module Avenants.Rest.Modeles.Tiers.TiersLies {
    interface ITiersLies {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeTypeLienInterPersonne: string;
        codeSensLienInterPersonne: string;
        identifiantPersonneLie: number;
        refPieceJustificatifLien: string;
        personneRattacheeRelation: string;
        designationRelationEconomique: string;
        codeFamilleLienInterPersonne: string;
        pourcentageCapitalistique: number;
        codeQualificationLienInterPersonne: string;
        dateDebutEffetLienInterPersonne: string;
        dateFinEffetLienInterPersonne: string;
        numeroLienInterlocuteur: number;
    }
}

declare module Avenants.Rest.Modeles.TiersCorporate.CorporateInformation {
    interface ISituationFinanciere {
        /**
         * **Montant capital social**
         */
        montantCapitalSocial: number;
        /**
         * **Montant chiffre affaires TTC Budget**
         */
        montantChiffreAffaires: number;
        effectif: number;
        /**
         * Jour d'arrêté du bilan d'un professionnel pour un exercice donné.
         *
         * Format : JJMM
         * Utilisée en complément de l'année du bilan (Annee Chiffre Affaire)
         */
        dateArreteComptable: number;
        /**
         * Année de référence du chiffre d'affaire ou du montant du budget.
         */
        anneeChiffreAffaires: number;
    }
    interface ICorporateInformation {
        /**
         * **Code situation juridique**
         */
        codeSituationJuridique: string;
        /**
         * **Numero SIREN professionnel**
         *
         * **Définition :** Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE : Système d'Identification du Répertoire des ENtreprises
         * Identifie de manière unique une entreprise au niveau
         * national. Attribué qu'une seule fois, n'est supprimé du répertoire qu'au moment de la disparition de la personne juridique
         * (décès ou cessation de toute activité pour une personne physique, dissolution pour une personne morale). Compose le numéro SIRET : num établissement
         *
         * **Format :** Les 8 premiers chiffres n'ont aucune signification, excepté pour les organismes publics (communes,...) dont le numéro SIREN commence obligatoirement par 1 ou 2.
         * Le 9ième chiffre est une clé de contrôle : clé "1-2" suivant l'algorithme de Luhn Un professionnel n'a pas forcément de SIREN,
         * cas des professionnels n'ayant pas d'activité commerciale et/ou n'ayant pas de salariés :
         *
         * Pour les entreprises étarngères résidant en France : SIREN fictif attribué par le Banque De France dans le cadre de l'identification FIBEN (commence par 200)
         *
         * En cas de non attribution par l'INSEE : (hors périmètre SIRENE ou inscription en instance) Numéro chronologique attribué par le système :
         * Référence unique dans MYSYS (identifiant interne) numéro attribué par le système
         */
        numeroSiren: string;
        /**
         * Code indiquant si l'entreprise est étrangère.
         */
        codeIndicateurEntrepriseEtrangere: string;
        /**
         * **Date creation juridique**
         * Type date au format yyyy-MM-dd
         */
        dateCreationJuridique: string;
        /**
         * **Raison sociale**
         */
        raisonSociale: string;
        /**
         * **Nom commercial**
         */
        nomCommercial: string;
        /**
         * **Code type commerce organise**
         *
         * Définition :
         * Nature de l'organisation commerciale;
         * caractérise l'activité professionnelle.
         *
         * Valeur :
         * - ' '        Inconnu
         * - '0'        Non concerné
         * - '1'        Franchisé ou Entreprise Affiliée
         * - '2'        Franchiseur ou Tête de Réseau
         */
        codeTypeCommerceOrganise: string;
        /**
         * Identifie une segmentation de clientèle selon BAFI.
         *
         * Permet de classifier la clientèle pour les restitutions règlementaires et BAFI.
         *
         * Format : FSS
         *  - F : Code famille segmentation BAFI / CODFBF
         *  - SS : Sous code segmentation BAFI / CODCBF
         *
         * Exemples :
         *  - '107' SOCIETES FINANCIERES
         *  - '302' ENTREPRENEURS INDIVIDUELS
         *  - '303' PARTICULIERS
         */
        codeAgentEconomique: string;
        /**
         * **Identifiant tiers**
         *
         * **Définition :** Numéro d'identification du tiers dans le SI d'un Etablissement Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         *
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers: number;
        situationFinanciere: ISituationFinanciere;
        /**
         * ####Code etablissement banque entite juridique
         *
         * **Définition :**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         * Code interbancaire
         *
         * Nomenclature des sièges des Etablissements du Réseau des Caisses d'Epargne
         *
         * Codif des Caisses: 1er car= 1 et le 5ème = 5
         *
         * **Exemples :**
         *
         * | Code | Libellé |
         * | - | - |
         * | 17515 | CE Ile de France |
         * | 16275 | CE Nord France Europe |
         * | 43199 | Crédit Foncier de France (CFF) |
         */
        codeEtablissement: string;
        /**
         * Code devise ISO 4217 alpha-3
         *
         * Exemple :
         * EUR
         */
        codeDeviseISO4217a3: string;
        /**
         * 1 minimum
         */
        dureeViePersonneMorale: number;
        /**
         * Détermine un type de pièce justifiant d'une activité/situation professionnelle
         * '00'       EXEMPLAIRE DES STATUTS CERTIFIE CONFORME
         * '01'       EXEMPLAIRE DU JOURNAL OFFICIEL
         * '02'       EXTRAIT DE DELIBERATION SIGNE
         * '03'       COPIE CERTIFIE CONFORME DU J.O
         * '04'       AGREMENT DE L'ASSOCIATION
         * '05'       COPIE DE L'ACTE AUTHENTIQUE OU TESTAMENT
         * '06'       STATUTS DE LA DELEGATION DEPARTEMENTALE
         * ...
         */
        codePieceJustificative: string;
        /**
         * 'P'        Personne physique
         * 'M'        Personne morale
         * 'A'        Association
         */
        codeTypeTiers: string;
        /**
         * Mode d'imposition auquel est assujéti un professionnel entreprise ou entrepreneur individuel.
         * Valeurs :
         *
         * - '1'        Forfait
         * - '2'        Réel
         * - '3'        Impôt sur les sociétés (IS)
         * - '4'        Sans régime particulier
         * - '5'        Réel simplifié
         * - '6'        Impôt sur le revenu des personnes physiques (IRPP)
         */
        codeRegimeFiscal: string;
        /**
         * Représente le code cotation
         */
        codeCotation: string;
        /**
         * Indique le type de relation de la personne vis à vis de l'Etablissement GCE ou du réseau CE.
         * Permet de déterminer le personnel de l'Etablissement et leur famille.
         *
         * Les valeurs '6' et '9' concernent des personnes morales
         */
        codeAppartenanceReseau: string;
        adresse: IAdresse;
        /**
         * Détermine le statut dans une famille de catégorie juridique donnée : correspond aux 2 derniers caractères du code catégorie juridique INSEE sur 4 caractères.
         */
        codeCategoJuridi2DerCaracteres: string;
        /**
         * **Code famille categorie juridique INSEE**
         */
        codeFamilleCategorieJuridique: string;
        codeGuichetRisque: number;
        referenceExterneEDS: number;
        eligibiliteTiers: string;
        /**
         * deux chiffre
         */
        codeTypeRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: string;
        numeroImmatriculation: string;
        sigle: string;
        etablissement: IEtablissement;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
        /**
         * Mot clé pour recherche OU4A
         */
        listeMotCle: Array<string>;
        /**
         * Numero de chrono d'un pro
         */
        numeroChrono: number;
        /**
         * Code tête de groupe
         *
         * Précise la situation d'appartenance de la personne vis à vis d'un groupe (grappage)
         * Entité économique formée par un ensemble de sociétés qui sont soit des sociétés contrôlées par une même société, soit cette société est contrôlante.
         *
         * Valeurs :
         * - '1'        Personne tête de groupe (grappage)
         * - '2'        Personne filiale du groupe (Via lien inter-personnes)
         * - '3'        Personne n'appartenant pas à un groupe
         * - '4'        Personne appartenant à un groupe
         */
        codeTeteGroupe: string;
        troisDerniersCaracteresNAF: string;
        /**
         * **Code famille NAF INSEE**
         *
         * **Définition :** Cette rubrique permet de définir les deux premiers caractères du code NAF qui correspond à la famille de code activité exercée par le professionnel
         */
        codeFamilleNAFINSEE: string;
        activiteEconomiqueReelleProfessionnelle: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEconomique: string;
        /**
         * permet d'aiguiller vers les QR concernées.
         * - 0 : Personne connue comme client
         * - 1 : Personne connue comme Tiers
         * - 2 : Personne connue comme prospect
         * - 3 : Personne connue comme Prospect enrichi
         */
        codeTypePersonne: string;
        prospect: IProspect;
        /**
         * indicateur de droits au compte
         */
        indicateurDroitAuCompte: string;
        professionnelImmobilier: IProfessionnelImmobilier;
        dateClotureJuridique: string;
        /**
         * à partir de la V17.01 seulement
         * - Si 'T' : mise à jour complète avec les Immatriculations
         * - Si 'I' : mise à jour des Immatriculations seulement
         * - Sinon mise à jour de corporateInformation sans les Immatriculations
         */
        codeMajImmatriculation: string;
        listeImmatriculation: Array<IImmatriculation>;
        /**
         * Référence d'identification des entités juridiques (LEI : LEGAL ENTITY IDENTIFIER) effectuant des transactions financières.
         */
        identifiantLei: string;
        /**
         * Classification de la personne selon le règlement EMIR / European Market and Infrastructure Regulation.
         * Attribut porté par une contrepartie effectuant une transaction sur le marché des dérivés
         */
        codeEmir: string;
        /**
         * Autorisation donnée par le Client pour que l'Etablissement puisse effectuer des déclarations à sa place (LEI, classification EMIR).
         * 'O'        Etab autorisé à effectuer les déclarations
         * 'N'        Etab non autorisé à effectuer les déclarations
         */
        indicateurDelegationDeclaration: string;
        /**
         * Détermine l'état de blocage d'une personne dans la table Vigilance VAO.
         * 'N'        non bloqué
         * 'B'        bloqué
         * 'D'        débloqué
         */
        codeBlocageVao: string;
        /**
         * indique si la personne "possède" un indice d'américanité
         */
        indiceAmericanite: string;
        /**
         * Cette rubrique indique si le code de classification des personnes morales est renseigné ou non
         */
        indicateurPresenceClassif: string;
        /**
         * Code associé à la branche d'activité.
         * Codification pour l'ensemble des caisses.
         * Donnée relative aux personnes morales et entrepreneurs individuels, basée sur une approche commerciale ou sectorielle, permettant de paramétrer des regroupements fonctionnels de codes NAF.
         * Format XX9999
         */
        brancheActivite: string;
        /**
         * Indicateur Prospect restreint
         */
        indicProspectRestreint: boolean;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes : '0' Actif '1' Cloturé
         */
        codeEtatPersonne: string;
        /**
         * Valeurs possibles : '0' Personne connue comme client '1' Personne connue comme tiers '2' Personne connue comme prospect '3' Personne connue comme prospect enrichi
         */
        typeRelation: string;
    }
    interface IAdresse {
        /**
         * Numéro d'identification de l'adresse en tant que localisation géographique.
         */
        identifiant: number;
        /**
         * Détermine la nature/finalité d'une adresse.
         * Valeurs :
         * - '1'        adresse légale (domicile) localisation pour un lieu d'activité
         * - '4'        adresse communication (correspondance)
         * - '6'        adresse spéciale communication
         */
        codeType: string;
        /**
         * Détermine si la personne (client) accepte de recevoir du courrier
         * Valeurs :
         * '0'        envoi de courrier
         * '1'        pas d'envoi de courrier
         */
        indicateurEnvoiCourrier: string;
        /**
         * Permet de savoir qui est le possesseur de l'adresse.
         *
         * Valeurs :
         * - 1          PERSONNE
         * - 2          LIEU D'ACTIVITE
         * - 3          ENTITE JURIDIQUE          (pas géré)
         * - 4          ELEMENT DE STRUCTURE      (pas géré)
         */
        codeTypeLieu: string;
        /**
         * Libellé de la ligne 2 d'une adresse normée AFNOR.
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identification du destinataire. La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment,
         * cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2AdresseAFNOR: string;
        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR. La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution).
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment (entrée, bâtiment, bloc, tour etc.)
         */
        ligne3AdresseAFNOR: string;
        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR. La ligne 4 permet d'identifier la voie de destination. Peut comprendre, le numéro dans la voie,
         * type et nom de voie, le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit, un service X, une boîte postale ou un numéro de CEDEX.
         */
        ligne4AdresseAFNOR: string;
        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR.
         * La ligne 5 permet d'identifier la destination. Peut comprendre, le nom d'un quartier, d'un lieu-dit, d'un hameau, le nom d'un ensemble immobilier
         * pouvant être assimilé à une commune ou à un lieu-dit et possédant plusieurs voies internes.
         */
        ligne5AdresseAFNOR: string;
        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR.
         * La ligne 6 permet d'identifier la destination. Peut comprendre, le numéro de code postal et nom de la localité,
         * le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX.
         */
        ligne6AdresseAFNOR: string;
        /**
         * Indique le numéro de la voie
         */
        numeroVoiePTT: number;
        /**
         * Numéro code postal PTT
         */
        codePostalPTT: string;
        /**
         * Détermine le quartier d'une adresse
         */
        codeQuartier: string;
        /**
         * Numéro de la tournée du facteur
         */
        numeroTourneeFacteur: number;
        /**
         * Numéro de téléphone associé à une adresse
         */
        numeroTelephoneAdresse: string;
        /**
         * Identifie une commune / lieu-dit selon la nomenclature INSEE.
         */
        codeInseeLocalite: string;
        /**
         * code validité de l'adresse
         * "00"       adresse correcte
         * "XY"       adresse forcée
         *            X : contrôle analyse syntaxique
         *            Y : contrôle analyse géographique
         */
        codeValiditeAdresse: string;
        /**
         * '0'        Pas en liste rouge
         * '1'        En liste rouge
         */
        codeExistenceListeRouge: string;
        /**
         * numero du fax
         */
        numeroFax: string;
        /**
         * '1'        Ne détient pas de téléphone
         */
        indicateurDetentionTelephone: string;
        /**
         * Cette donnée précise à quoi correspond le téléphone
         */
        commentaireTelephone: string;
        /**
         * Indique le numéro de la voie du fichier HEXAVIA pour les voies francaises répertoriées.
         */
        numeroVoieHexavia: number;
        /**
         * Code postal pour la France et l'étranger :
         * Sur 5 caractères pour la France
         * Sur 9 caractères pour l'étranger : peut être en alphanumérique
         */
        codePostalFranceEtEtranger: string;
        /**
         * Libellé localité
         */
        libelleInseeLocalite: string;
        /**
         * identifie un pays selon la nomenclature AFNOR
         */
        codePaysISO: string;
        /**
         * ' '        Client ne détient pas de Minitel.
         * '1'        Client accède par un Minitel.
         * '2'        Client accède par autre chose que le Minitel
         */
        codeAccesMinitel: string;
        /**
         * Identifie un pays ou territoire selon la norme INSEE.
         */
        codeInseePays: string;
    }
    interface IEtablissement {
        /**
         * Libellé libre du lieu d'activité.
         */
        designationCourteLieuActivite: string;
        /**
         * Désignation longue du lieu activité. Elle est utilisée pour l'impression du volet un de l'adresse. Elle correspond :
         *
         * aux nom et prénom pour la personne physique
         * à la raison sociale pour la personne morale.
         */
        designationLongueLieuActivite: string;
        /**
         * Date de début d'exploitation de l'établissement.
         * Type date au format yyyy-MM-dd
         */
        dateDebutExploitationLieuActivite: string;
        /**
         * Résidents :
         *
         * Personnes physiques ayant leur principal centre d'intérêt en FRANCE
         * Fonctionnaires et autres agents publics français en poste à l'étranger
         * Personnes morales françaises ou étrangères pour leur établissement en FRANCE La France est définie comme suit :
         * France métropolitaine (avec la principauté de MONACO )
         * DOM (avec Saint-Pierre et Miquelon))
         * TOM (avec Mayotte)..
         * Non résidents :
         *
         * Personnes physiques ayant leur principal centre d'intérêt à l'étranger
         * Fonctionnaires et autres agents publics étrangers en poste en FRANCE
         * L'étranger est défini comme suite :
         *
         * Pays autre que la France (y compris les Etats dont l'Institut d'Emission est lié au Trésor Français par un compte d'opérations).
         * La distinction entre les deux types de non-résidents
         * Non-résident zone euro :
         * Personnes appartenant à un un Etat membre de la zone de monnaie unique (EMUM),hors-France,
         *
         * Non-résident hors zones euro :
         * Personnes appartenant à un autre pays étranger (non-EMUM).
         *
         * - '1' Résident
         * - '2' Non Résident
         */
        codeResident: string;
        /**
         * **Numéro complément SIRET établissement**
         *
         * **Définition :** Numéro interne de classement attribué à un établissement appartenant à une entreprise par l'INSEE
         * Identifie un établissement au sein d'une entreprise répertoriée à l'INSEE. Complète le SIREN pour constituer le SIRET
         *
         * **Format :**
         * numéro d'ordre séquentiel X4
         * clé de controle du numéro SIRET : algo Luhn "1-2"
         */
        numeroComplementSIRET: string;
        dateFinExploitation: string;
    }
    interface IMessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur.
         * Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         *
         * la partie utile du code entité (sur 4 car.) . pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code
         * sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé) . pour un segment, elle correspond aux 4 carac. codifiant le segment.
         * le rang de la rubrique (sur 3 car.)
         * le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement,
         * de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
    interface IProspect {
        /**
         * Détermine un segment de clientèle dans une typologie donnée :
         * AC : Activation Clientèle Particuliers
         * AP : Activation Clientèle Professionnel
         * FC : Fréquence Client Personne
         * FP : Fréquence Client PRO
         * FR : Fréquence Client Relation
         * MN : Marché national
         * SA : Activation Clientèle V2
         * SU : Univers Client
         */
        codeSegmentation: string;
        /**
         * Numéro d'identification du portefeuille de clientèle
         * Regroupement de la clientèle pour la gestion commerciale :
         * Ensemble de relations économiques affecté ou non à un poste fonctionnel ou à une agence.
         * Une relation peut être hors portefeuille
         */
        numeroPortefeuille: number;
        /**
         * Détermine la typologie de segmentation clientèle.
         * Correspond au 2 premiers caractères du code   segmentation sur 8 caractères
         * Types :
         * - Activation Clientèle. Segmentation comportementale des Particuliers
         * - Fréquence : Profils client portant des objectifs commerciaux
         * - Code marché : Segmentation des secteurs d'activités
         * - Univers Client.  Profil équipement Client
         * "AC"       Activation Clientèle Particulier
         * "AP"       Activation Clientèle Professionnel
         * "FC"       Fréquence Client
         * "FP"       Fréquence PRO
         * "FR"       Fréquence Relation
         * "MN"       Marché national
         * 'SL'       Spécifique VAO pour progiciel Norkom (i-BP)
         * 'SA'       Activation Clientèntèle v2
         * 'SU'       Univers de détention
         */
        codeTypeSegmentation: string;
    }
    interface IProfessionnelImmobilier {
        /**
         * Réponse arbre de décision
         * Indicateur de réponse à la première question :
         * Socièté Civile Immobilière Patrimoniale
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurSteCivileImmoPatrimoniale: boolean;
        /**
         * Réponse arbre de décision PIM
         * Indicateur de réponse à la deuxième question :
         * Société d'exploitation
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurSocieteExploitation: boolean;
        /**
         * arbre de décision PIM
         * Indicateur de réponse à la question 3a :
         * Structure dédiée à une opération immobilière maximum
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurStrDedieeA1OpeImmoMax: boolean;
        /**
         * arbre de décision PIM
         * Indicateur de réponse à la question 3b :
         * Avec garantie prise sur l'actif immobilier financé
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurGarantieSurActifImmoFi: boolean;
        /**
         * Indicateur de réponse à la question 3c :
         * La Structure Assure-t-elle elle-même le remboursement
         * des concours ?
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurStrRemboursementDesConcours: boolean;
        /**
         * Arbre de décision PIM
         * Indicateur de réponse à la question 3d :
         * Exercice de plus d'une activité immobilière
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurExerciceSup1ActiviteImmo: boolean;
        /**
         * Classification des professionnels de l'immobilier
         * dans le cadre de la segmentation de la clientèle.
         * Code déterminé en fonction des réponses à l'arbre de
         * décision des Prof de l'Immobilier.
         * attribut du Prof mémorisé dans la table DU40 / appli
         * SEGMENTATION SADS
         *            Valeurs possibles :
         * 'ENFI'     Entrep. clientèles Non Financières de l'Immobilier
         * 'FSI'      Financements Spécialisés de l'Immobilier
         * 'EXP'      société d'EXPloitation
         * 'PAT'      société PATrimoniale
         * 'ENFI2'    autres professionnels de l'immobilier
         */
        codeCategorieProfImmo: string;
        /**
         * Timestamp de création du questionnaire PIM
         */
        timestampCreationQuestionnairePIM: string;
    }
    interface IImmatriculation {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire
         */
        identifiantPersonne: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe CE.
         */
        numeroChronoProfesionnel: number;
        /**
         * Détermine un registre officiel en France permettant l'immatriculation de personnes ou la publication d'informations
         * 01         RCS (Registre du commerce et des sociétés)
         * 02         RM (Répertoire des métiers)
         * 03         MSA (Mutualité sociale agricole)
         * 04         Publication journal officiel
         * 05         Préfecture
         * 06         Mairie
         * 07         Ordre des métiers
         * 08         Autres
         */
        codeTypeRegistre: string;
        /**
         * Numéro d'immatriculation à un registre officiel
         * d'un professionnel.
         *
         * Ce numéro peut être notamment :
         *  - un numéro RCS
         *  - un numéro Registre des métiers
         *  - un numéro d'inscription à la préfecture
         *  - un numéro d'inscription à la MSA
         *  - un ordre des métiers pour les professions libérales
         *  - un numéro de publication au JO
         */
        numeroImmatriculationRegistre: string;
        /**
         * Libellé du lieu d'inscription au registre.
         */
        lieuInscriptionRegistre: string;
        /**
         * Date à laquelle une personne est immatriculé en tant que professionnel auprès d'un organisme habilité.
         * Type date au format yyyy-MM-dd
         */
        dateImmatriculation: string;
    }
}

declare module Avenants.Rest.Modeles.Structure.CaracteristiqueEDS {
    interface IInfoEDS {
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Ligne 2 adresse de l'élément de structure
         */
        ligne2: string;
        /**
         * Ligne 3 adresse de l'élément de structure
         */
        ligne3: string;
        /**
         * Ligne 4 adresse de l'élément de structure
         */
        ligne4: string;
        /**
         * Ligne 5 adresse de l'élément de structure
         */
        ligne5: string;
        /**
         * Ligne 6 adresse de l'élément de structure
         */
        ligne6: string;
        /**
         * Numéro téléphone de contact de l'élément de structure
         */
        numeroTelephone: string;
        /**
         * Code pays INSEE de l'élément de structure
         */
        codePays: string;
        /**
         * Date de début de validité de l'élément de structure
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeEds: string;
        /**
         * Date de fin de validité de l'élément de structure
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEds: string;
        /**
         * Identifiant interne de l'élément de structure
         */
        identifiantInterneEDS: number;
        /**
         * Libellé de l'élément de structure
         */
        libelleEDS: string;
        /**
         * Référence externe de l'élément de structure
         */
        referenceExterneEDS: number;
        /**
         * Code établissement de l'élément de structure
         */
        codeEtablissement: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }
    interface IInfoPosteFonctionnel {
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Type de fonction de l'agent
         */
        typeFonction: string;
        /**
         * Libellé de fonction de l'agent
         */
        libelleFonction: string;
        /**
         * Code qualité de l'agent affecté au poste fonctionnel
         */
        codeQualiteAgent: string;
        /**
         * Adresse messagerie de l'agent
         */
        adresseEMail: string;
    }
    interface IInfoRattachementEDS {
        /**
         * Identifiant interne de l'EDS de rattachement de l'EDS identifié
         */
        identifiantEDSRattachement: number;
        /**
         * Référence externe de l'EDS de rattachement de l'EDS identifié
         */
        referenceEDSRattachement: number;
        /**
         * Type de l'EDS de rattachement de l'EDS identifié
         */
        typeEDSRattachement: string;
        /**
         * Libellé de l'EDS de rattachement de l'EDS identifié
         */
        libelleEDSRattachement: string;
        /**
         * Date de fin de validité de l'EDS de rattachement de l'EDS identifié
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEDSRattachement: string;
        /**
         * Identifiant du responsable de l'EDS de rattachement de l'EDS identifié
         */
        responsableEDSRattachement: number;
    }
}

declare module Avenants.Rest.Modeles.Structure.HierarchieEDS {
    interface IHierarchieEDS {
        infoEDS: Array<IInfoEDS>;
        infoPosteFonctionnel: Array<IInfoPosteFonctionnel>;
    }
    interface IInfoEDS {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ... Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Identifiant interne de l'élément de structure
         */
        identifiantInterneEDS: number;
        /**
         * Référence externe de l'élément de structure
         */
        referenceExterneEDS: number;
        /**
         * Libellé de l'élément de structure
         */
        libelleEDS: string;
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Libellé long type de l'EDS
         */
        libelleTypeEDS: string;
        /**
         * Identifiant interne de l'élément de structure de rattachement
         */
        identifiantIntEDSRattachement: number;
        /**
         * Référence externe de l'élément de structure de rattachement
         */
        referenceExtEDSRattachement: number;
        /**
         * Type de l'élément structure de rattachement
         */
        typeEDSRattachement: string;
    }
    interface IInfoPosteFonctionnel {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ... Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Identifiant interne du poste fonctionnel
         */
        identifiantPosteFonctionnel: number;
        /**
         * Référence externe du poste fonctionnel
         */
        referencePosteFonctionnel: number;
        /**
         * Libellé du poste fonctionnel
         */
        libellePosteFonctionnel: string;
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Libellé long type de l'EDS
         */
        libelleTypeEDS: string;
        /**
         * Identifiant interne de l'élément de structure de rattachement
         */
        identifiantIntEDSRattachement: number;
        /**
         * Référence externe de l'élément de structure de rattachement
         */
        referenceExtEDSRattachement: number;
        /**
         * Type de l'élément structure de rattachement
         */
        typeEDSRattachement: string;
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Désignation longue de l'agent Elle est utilisée pour la constitution de la ligne 1 de l'adresse.
         * Elle est constituée en concaténant la civilité, le nom d'usage et le prénom de l'agent.
         */
        designationAgent: string;
        /**
         * Type de fonction de l'agent
         */
        typeFonction: string;
        /**
         * Libellé de fonction de l'agent
         */
        libelleFonction: string;
        /**
         * Code civilité de l'agent
         */
        civiliteAgent: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         *
         * soit au nom du père soit au nom de la mère soit aux 2 noms accolés (ordre quelconque, dans la limite d'un nom de famille par parent)
         * C'est le seul nom mentionné sur les actes d'état civil (acte de naissance, de mariage, livret de famille....).
         * Figure sur toute pièce officielle d'identité. Appelé auparavant nom patronymique.
         */
        nomFamilleAgent: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        prenomAgent: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         *
         * soit au nom de famille de l'époux(se) (conjoint)
         * soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque Dénomination utilisable dans la vie quotidienne,
         * totalement facultative et sans caractère automatique.
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         * C'est une information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille. Appelé auparavant nom marital.
         */
        nomUsageAgent: string;
    }
}

declare module Avenants.Rest.Modeles.Structure.MentionsLegales {
    interface IMentionLegalePied {
        codeEtablissement: string;
        codePied: number;
        typeEditique: string;
        typeSaisie: string;
        typeEntete: string;
        ligne1: string;
        ligne2: string;
        ligne6: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligneEntete: string;
    }
    interface IMentionLegaleCorps {
        codeEtablissement: string;
        idEdsInterne: number;
        codeInterneEtab: string;
        codeInterneEtab2: string;
        codeCtrRattachement: string;
        critereRoutageBin: string;
        numTelex: string;
        numTelecopieur: string;
        numSiret: string;
        lieuEnregistrement: string;
        mntDotation: number;
        libEdsChequier: string;
        libEdsDomiciliation: string;
        raisonSociale: string;
        codeCategorieJuridique: string;
        codeBic: string;
        numSiretEtab: string;
        numRcsSiren: string;
        mntCapitalEtab: number;
        numNationalEmetteur: string;
        commentaire1: string;
        commentaire2: string;
        commentaire3: string;
        commentaire4: string;
        numOrias: string;
    }
    interface IMentionLegale {
        corps: IMentionLegaleCorps;
        pied: IMentionLegalePied;
        dateModification: string;
        codeEtablissement: string;
    }
}

declare module Avenants.Rest.Modeles.Structure.PosteFonctionnelAgent {
    interface IRattachementPosteFonctionnel {
        /**
         * Code indiquant si l'EDS de rattachement du poste fonctionnel est le dernier élément de la hiérarchie.
         *
         * Valeurs possibles :
         * '1' - Oui, c'est le dernier
         * '0' - Non
         */
        codeIndicateurFinStructure: string;
        /**
         * Identifiant interne du responsable de l'EDS de rattachement du poste fonctionnel
         */
        identifiantResponsableEDS: number;
        /**
         * Identifiant interne de l'EDS de rattachement du poste fonctionnel
         */
        identifiantEDSRattachement: number;
        /**
         * Libellé de l'EDS de rattachement du poste fonctionnel
         */
        libelleEDSRattachement: string;
        /**
         * Type de l'EDS de rattachement du poste fonctionnel.
         *
         * Valeurs possibles :
         * '001' - Poste fonctionnel
         * '002' - Service
         * '003' - Agence
         * '004' - Unité commerciale
         * '005' - Secteur commercial
         * '006' - Groupe commercial
         * '007' - Direction
         * '008' - Siège
         * '009' - Entité administrative
         * '010' - GAB
         */
        typeEDSRattachement: string;
        /**
         * Libellé du type de l'EDS de rattachement du poste fonctionnel
         */
        libelleTypeEDSRattachement: string;
        /**
         * Date de fin de validité de l'EDS de rattachement du poste fonctionnel
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEDSRattachement: string;
        /**
         * Référence externe de l'EDS de rattachement du poste fonctionnel
         */
        referenceEDSRattachement: number;
    }
    interface IInformationPosteFonctionnel {
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque établissement.
         *
         * Exemples de valeurs possibles :
         * '072' - CHARGE DE CLIENTELE DE NIVEAU 2
         * '081' - AGENT COMMERCIAL
         * '082' - RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         *
         * Valeurs possibles :
         * 'T' - Titulaire
         * 'R' - Remplaçant
         * 'S' - Suppléant
         * 'A' - Affectation temporaire
         */
        codeQualiteAgent: string;
        /**
         * Identifiant interne du poste fonctionnel
         */
        identifiantPosteFonctionnel: number;
        /**
         * Désignation longue de l'agent
         * Elle est utilisée pour la constitution de la ligne 1
         * de l'adresse.
         * Elle est constituée en concaténant la civilité, le nom d'usage et le prénom de l'agent.
         */
        designationAgent: string;
        /**
         * Référence externe du poste fonctionnel
         */
        referencePosteFonctionnel: number;
        /**
         * Code civilité de l'agent
         *
         * Valeurs possibles :
         * '1' - MME
         * '2' - MLLE
         * '3' - M
         */
        civiliteAgent: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         *    - soit au nom du père
         *    - soit au nom de la mère
         *    - soit aux 2 noms accolés (ordre quelconque, dans la limite d'un nom de famille par parent)
         * C'est le seul nom mentionné sur les actes d'état civil (acte de naissance, de mariage, livret de famille....).
         * Figure sur toute pièce officielle d'identité.
         * Appelé auparavant nom patronymique.
         */
        nomFamilleAgent: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         *    - soit au nom de famille de l'époux(se) (conjoint)
         *    - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         * C'est une information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille.
         * Appelé auparavant nom marital.
         */
        nomUsageAgent: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        prenomAgent: string;
        /**
         * Date de début de validité du poste fonctionnel
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditePF: string;
        /**
         * Date de fin de validité du poste fonctionnel
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditePF: string;
        /**
         * Identifie le site de localisation d'un poste fonctionnel.
         * Numéro chronologique attribué par le système.
         * Référence unique dans MYSYS (identifiant interne).
         */
        identSitePosteFonctionnel: number;
        /**
         * Ligne 2 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne2AdresseSite: string;
        /**
         * Ligne 3 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne3AdresseSite: string;
        /**
         * Ligne 4 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne4AdresseSite: string;
        /**
         * Ligne 5 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne5AdresseSite: string;
        /**
         * Ligne 6 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne6AdresseSite: string;
        /**
         * Numéro de téléphone de l'agent.
         */
        telephonePosteFonctionnel: string;
        /**
         * Adresse E-Mail de l'agent.
         */
        emailPosteFonctionnel: string;
        /**
         * Identifie le pays du site de localisation du poste fonctionnel, selon la norme INSEE.
         *
         * Exemples de valeurs possibles :
         * 99000 - France
         * 99132 - Grande Bretagne
         * 99109 - Allemagne
         * 99134 - Espagne
         * ...
         */
        codePaysSite: string;
        /**
         * Canal d'appartenance du poste fonctionnel connecté.
         *
         * Valeurs possibles :
         * 'X' - Si le groupe de fonction du poste fonctionnel connecté est "telemarketing" ou "CRC"
         * 'A' - Si le groupe de fonction du poste fonctionnel connecté n'est pas "telemarketing" et "CRC"
         */
        codeCanalAppartenance: string;
        informationRattachement: IRattachementPosteFonctionnel;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ...
         * Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un agent au sein d'un établissement bancaires ou financiers de la plateforme MYSYS.
         * Correspond à un individu ou à un acteur générique.
         * Numéro chrono attribué par le système.
         * Référence unique dans MYSYS.
         */
        codeAgent: number;
    }
    interface IPosteFonctionnelAgent {
        listePosteFonctionnel: Array<IInformationPosteFonctionnel>;
    }
}
