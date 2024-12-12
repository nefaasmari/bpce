
declare module Avenants.Rest.Constantes.Inject {
    module Services {
        const restService: string;
        const emprunteurService: string;
        const assuranceService: string;
        const tiersService: string;
        const creditService: string;
        const creditCatalogueService: string;
        const tableauAmortissementService: string;
        const dossierService: string;
        const habilitationService: string;
        const avenantService: string;
        const garantieService: string;
        const historiqueService: string;
        const syntheseImpactAvenantService: string;
        const ajustementEcheancesService: string;
        const contractualiserService: string;
        const signatureService: string;
        const palierCreditService: string;
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
    import ModelAvenantService = Modeles.AvenantCreditService;
    interface IAjustementEcheancesService {
        getAjustementEcheances(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEffet: string, tauxRenego: number, crdInAvant: boolean): ng.IPromise<ModelAvenantService.AjustementEcheances.IAjustementEcheances>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    import ModelAssurance = Modeles.AssuranceCredit;
    interface IAssuranceService {
        getAssurances(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.AssuranceCredit.IAssuranceGlobale>;
        getAssurancesByAvenant(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelAssurance.Recherche.IRecherche>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    import ModelAvenant = Modeles.DossierCreditAvenant;
    const CACHE_KEY_AVENANTS_CARA_CREDIT: string;
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
         * Récupération des informatipns relatives à une simulation ou avenant, pour sa création ou son ouverture
         * @param numeroSimulationAvenant: Optionnel dans le cas d'une création, par défaut 0
         */
        getCaracteristiqueFinan(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, idProduit: string, dateEffet: string, dureeCredit: number, uniteDureeCredit: string, listePhases: Array<ModelAvenant.CaracteristiqueFinan.IPhase>, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, numeroSimulationAvenant?: number): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        /**
         * Génération des critères de création
         */
        getCriteresCreation(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, dateEffet: string, numeroAvenantSimulation: number, compteurMiseJour: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, credit: ModelAvenant.CaracteristiqueFinan.ICredit, codeTypeAcces: Commun.Enum.CodeTypeAcces): ModelAvenant.CaracteristiqueFinan.ICriteresCreation;
        creationCaracteristiqueFinan(criteresCreation: ModelAvenant.CaracteristiqueFinan.ICriteresCreation): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
    }
    interface IGetAvenantCaracteristiqueCreditParams {
        codeEtablissement: string;
        dateTraitement: string;
        identifiantCredit: string;
    }
    class AvenantService implements IAvenantService {
        private $q;
        private restService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, restService: Services.IRestService);
        getListeAvenantsByCaracteristiqueCredit(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.CaracteristiqueCredit.IInformationAvenant>;
        getListeAvenants(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelAvenant.Recherche.IRecherche>;
        getCaracteristiqueFinan(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, idProduit: string, dateEffet: string, dureeCredit: number, uniteDureeCredit: string, listePhases: Array<ModelAvenant.CaracteristiqueFinan.IPhase>, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: Commun.Enum.CodeTypeAcces, numeroSimulationAvenant?: number): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
        getCriteresCreation(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string, dateEffet: string, numeroAvenantSimulation: number, compteurMiseJour: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, credit: ModelAvenant.CaracteristiqueFinan.ICredit, codeTypeAcces: Commun.Enum.CodeTypeAcces): ModelAvenant.CaracteristiqueFinan.ICriteresCreation;
        creationCaracteristiqueFinan(criteres: ModelAvenant.CaracteristiqueFinan.ICriteresCreation): ng.IPromise<ModelAvenant.CaracteristiqueFinan.ICaracteristiqueFinan>;
    }
}

declare module Avenants.Rest.Services {
    import AvenantModelCaracteristique = Modeles.DossierCreditAvenant.Caracteristique;
    interface IContractualiserService {
        putCaracteristique(criteresModification: AvenantModelCaracteristique.ICriteresModification): ng.IPromise<AvenantModelCaracteristique.ICaracteristique>;
    }
    class ContractualiserService implements IContractualiserService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        putCaracteristique(criteresModification: AvenantModelCaracteristique.ICriteresModification): ng.IPromise<AvenantModelCaracteristique.ICaracteristique>;
    }
}

declare module Avenants.Rest.Services {
    import ModelAvenantParam = Modeles.AvenantCreditParam;
    interface ICreditCatalogueService {
        getProduit(codeEtablissement: string, dateTraitement: string, idCredit: string, idProduit: string): ng.IPromise<ModelAvenantParam.Produit.IProduit>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    interface ICreditService {
        getCaracteristiqueCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, idDossier?: string): ng.IPromise<ModelGestion.CaracteristiqueCredit.IListeCredits>;
        getModeGestion(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.ModeGestion.IModeGestion>;
        putModeGestion(codeEtablissement: string, dateTraitement: string, idCredit: string, mode: ModelGestion.ModeGestion.IModeGestion): ng.IPromise<ModelGestion.ModeGestion.IModeGestion>;
        getImpayeEmprunteur(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string): ng.IPromise<ModelGestion.IncidentPaiement.IImpayeEmprunteur>;
        getInformationCredit(codeEtablissement: string, dateTraitement: string, idCredit: string, codeAvenantSimulation: string, dateEffet: string, withCompleteData: boolean): ng.IPromise<ModelGestion.InformationCredit.IInformationCredit>;
        getEvenementCredit(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelGestion.EvenementCredit.IEvenementGlobal>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    interface IDossierService {
        getCaracteristiqueDossier(codeEtablissement: string, dateTraitement: string, idDossier: string): ng.IPromise<ModelGestion.CaracteristiqueDossier.ICaracteristiqueGeneraleDossier>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    const CACHE_KEY_RECHERCHE: string;
    interface IEmprunteurService {
        getRecherche(codeEtablissement: string, dateTraitement: string, idPersonne: string, idCredit: string, idDossier: string): ng.IPromise<ModelGestion.Recherche.IRecherche>;
        getEmprunteurGlobal(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string): ng.IPromise<ModelGestion.PersonneEmprunteur.IEmprunteurGlobal>;
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
    class EmprunteurService implements IEmprunteurService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getRecherche(codeEtablissement: string, dateTraitement: string, idPersonne: string, idCredit: string, idDossier: string): ng.IPromise<ModelGestion.Recherche.IRecherche>;
        getEmprunteurGlobal(codeEtablissement: string, dateTraitement: string, idCredit: string, idEmprunteur: string): ng.IPromise<ModelGestion.PersonneEmprunteur.IEmprunteurGlobal>;
    }
}

declare module Avenants.Rest.Services {
    interface IGarantieService {
        getGarantie(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<Modeles.DossierCreditGestion.GarantieCredit.IGarantieGlobal>;
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
        getHabilitationGlobal(codeEtablissement: string, dateTraitement: string, idCredit: string, fromCache?: boolean, isEcureuilCredit?: boolean): ng.IPromise<Array<ModelGestion.HabilitationCredit.IHabilitation>>;
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
    import ModelGestion = Modeles.DossierCreditGestion;
    interface IPalierCreditService {
        getPaliersCredit(recherchePalierCredit: IGetPalierCredit): ng.IPromise<ModelGestion.PalierCredit.IPalierCredit>;
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
    import ModelEligibilite = Modeles.AvenantCreditParam.Eligibilite;
    interface ISignatureService {
    }
    class SignatureService implements ISignatureService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Services.IRestService);
        getEligibilite(codeEtablissement: string, dateTraitement: string, idCredit: string): ng.IPromise<ModelEligibilite.IEligibilite>;
    }
}

declare module Avenants.Rest.Services {
    import AvenantModel = Modeles.DossierCreditAvenant;
    interface ISyntheseImpactAvenantService {
        getSyntheseImpactAvenant(codeEtablissement: string, identifiantCredit: string, dateTraitement: string, dateEffet: Date, numeroAvenantSimulation: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, codeTypeAcces: string): ng.IPromise<AvenantModel.SynthesImpactAvenant.ISynthesImpactAvenant>;
    }
}

declare module Avenants.Rest.Services {
    import ModelGestion = Modeles.DossierCreditGestion;
    import ModelAvenant = Modeles.DossierCreditAvenant;
    interface ITableauAmortissementService {
        getTableauAmortissement(codeEtablissement: string, dateTraitement: string, idCredit: string, codeProvenance?: string): ng.IPromise<ModelGestion.TableauAmortissement.IEnteteTableau>;
        /**
         * @param numeroAvenantSimulation: numéro de l'avenant ou de la simulation
         */
        getTableauAmortissementApres(dateTraitement: string, codeEtablissement: string, idCredit: string, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, numeroAvenantSimulation: number, resultatCalcul: ModelAvenant.SynthesImpactAvenant.IResultatCalcul): ng.IPromise<ModelGestion.TableauAmortissement.IEnteteTableau>;
        getDetailTA(codeEtablissement: string, dateTraitement: string, idCredit: string, dateEcheance: Date, paramDetailTaApres?: ModelGestion.DetailTableauAmort.IParamDetailEcheanceApres): ng.IPromise<ModelGestion.DetailTableauAmort.IDetailTableauAmortissement>;
    }
}

declare module Avenants.Rest.Services {
    import ModelTiers = Modeles.Tiers;
    import ModelTiersCorporate = Modeles.TiersCorporate;
    interface ITiersService {
        getParticulierInformation(codeEtablissement: string, idPersonne: string): ng.IPromise<ModelTiers.ParticulieInformation.IParticulierInformation>;
        getCorporateInformation(codeEtablissement: string, idTiers: string): ng.IPromise<ModelTiersCorporate.CorporateInformation.ICorporateInformation>;
    }
}

declare module Avenants.Rest.Constantes {
    module Services {
        module Emprunteur {
            const urlRecherche: string;
            const urlEmprunteurGlobal: string;
        }
        module Tiers {
            const urlParticulierInformation: string;
            const urlCorporateInformation: string;
        }
        module Dossier {
            const urlCaracteristique: string;
        }
        module Credit {
            const urlAssurances: string;
            const urlGarantie: string;
            const urlCaracteristique: string;
            const urlModeGestionCredit: string;
            const urlIncidentPaiement: string;
            const urlTableauAmortissement: string;
            const urlDetailTableauAmort: string;
            const urlInformationCredit: string;
            const urlPalierCredit: string;
            const urlEvenementCredit: string;
        }
        module Habilitation {
            const urlHabilitationCredit: string;
            const urlHabilitationGlobal: string;
        }
        module Avenant {
            const urlDetailAssurance: string;
            const urlListeAvenantLight: string;
            const urlListeAvenant: string;
            const urlListeAssurance: string;
            const urlHistorique: string;
            const urlCaracteristiqueFinan: string;
            const urlSyntheseImpactAvenant: string;
            const urlCreationAvenant: string;
            const urlProduitAvenant: string;
            const urlAjustementEcheances: string;
            const urlCaracteristique: string;
        }
        module Signature {
            const urlEligibilite: string;
        }
    }
}

declare module Avenants.Rest.Services {
    interface IRestService {
        /**
         * Exécution de la requète GET, les données récupérées sont mises en cache
         * @param urlService
         * @param params : paramètres dans le query
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
         */
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
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
}

declare module Avenants.Rest.Modeles.AvenantCreditParam.Eligibilite {
    import RestGestion = Rest.Modeles.DossierCreditGestion;
    import RestAvenant = Rest.Modeles.DossierCreditAvenant;
    /**
     * Construction des éléments attendus en entrée pour connaitre l'éligibilité
     * avenantcreditparam/eligibilite
     */
    class CriteresAppelBuilder {
        getResult(codeEtablissement: number, dateTraitement: string, idCredit: string, credit: RestGestion.InformationCredit.ICredit, avenant: RestAvenant.Recherche.IAvenant): ICriteresAppel;
        private getDonneesGeneral(codeEtablissement, dateTraitement, isEligibilite);
        /**
         * Création de la liste complète
         */
        private getListeDonneesUnCarac(idCredit, codeExistenceCreditTxRevisable, credit, listeIdGarantie, listeIdAssurance);
        private getCodePourCreationLoiDossierDonneesUnCarac(typeLoi);
        /**
         * Pour chaque garantie de l'avenant, il faut créer 2 nouveaux DonneesUnCarac
         */
        private getListeDonneesUnCaracForGaranties(idCredit, listeIdGarantie);
        private getDonneesUnCarac(codeTypeEntite, idEntiteComparaison, idElement2, idElement4, idDonnee, codeIndicateurDonneeValorisee, codePourCreation);
        private getDonneesDixCarac(idCredit);
        private getDonneesCinquanteCarac(idCredit);
        /**
         * TODO montantComparaison, cf commentaires
         * @param idCredit
         */
        private getListeDonneesNumerique(idCredit);
        private getDonneesNumerique(codeTypeEntite, idEntiteComparaison, idElement, idDonnee, codeIndicateurDonneeValorisee, montantComparaison);
    }
}

declare module Avenants.Rest.Modeles.AvenantCreditParam.Eligibilite {
    interface IEligibilite extends IElementGestion {
        criteresAppel: ICriteresAppel;
        donneesUtils: Array<IDonneesUtil>;
        ctrlManuels: Array<ICtrlManuel>;
        piecesTiers: Array<IPieceTiers>;
        pieceAgents: Array<IPieceAgent>;
        segmentPrincipals: Array<ISegmentPrincipal>;
        infoGeneriques: Array<IInfoGenerique>;
        libelleRelatifDocuments: Array<ILibelleRelatifDocument>;
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
}

declare module Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueAssu {
    interface IParametreApplicatif {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
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
         * Durée d'un paramètre
         */
        dureeUnParametre: number;
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
        /**
         * IDENT ELEMENT STRUCTURE INSTRUCTEUR
         */
        idElementStructureInstructeur: string;
        /**
         * MONTANT (PARAMETRE MONTANT)
         */
        montant: number;
        /**
         * DATE (PARAMETRE DATE)
         * Type date au format yyyy-MM-dd
         */
        date: string;
        /**
         * TAUX (PARAMETRE TAUX)
         */
        taux: number;
    }
    interface IConventionAssurance {
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
        mtMinimumCreditParConvention: number;
        /**
         * MT MAXIMUM CREDIT / CONVENTION
         */
        mtMaximumCreditParConvention: number;
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
         * CD POSSIBILITE EXTENSION COUVERTURE
         */
        cdPossibExtensionCouverture: string;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireParConvention: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        accessoires: Array<IAccessoireParConvention>;
        derogations: Array<IDerogation>;
    }
    interface IPersonneAssurableOuGarant {
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
        numRelatifPhaseParTypePhasePrdt: number;
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
        numRegleApplicationAccessoire: string;
    }
    interface IElementCalculAccessoire {
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
         * NUMERO TRANCHE
         */
        numeroTranche: number;
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
        numRelatifPhaseParTypePhasePrdt: number;
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
         * MT ASSIETTE ACESSOIRE FIXEE CONTRACT
         */
        mtAssietteAccessFixeeContract: number;
        /**
         * CODE TYPE ACCESSOIRE / CONVENTION
         */
        codeTypeAccessoireParConvention: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IMotifReserveOuExclusion {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * LIBELLE RESERVES OU EXCLUSIONS
         */
        libelleReservesExclusions: string;
        /**
         * CODE RESERVE/EXCLUSION ASSURANCE
         */
        codeReserveExclusionAssurance: string;
    }
    interface IAssurance {
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
        codeAssuranceObligatoire: boolean;
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
        codeReserveExclusionAssurance: string;
        /**
         * BENEFICIAIRE ASSURANCE AVANT VERSEM.
         */
        beneficiaireAssuAvantVersement: string;
        /**
         * Code Type Agrément Assurance externe
         */
        codeTypeAgrementAssuExterne: string;
        /**
         * Code anciennete assurance / garantie
         */
        codeAncienneteAssuParGarantie: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        personneAssuree: IPersonneAssuree;
        convention: IConventionAssurance;
        elementsCalculAccessoire: Array<IElementCalculAccessoire>;
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
        /**
         * CODE PERSONNALISATION A INSTRUCTION
         */
        codePersonnalisationInstruction: string;
        /**
         * CODE TYPE ASSIETTE CALCUL ACCESSOIRE
         */
        codeTypeAssietteCalculAccess: string;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
    }
    interface ICaracteristiqueAssu extends IElementGestion {
        assurances: Array<IAssurance>;
        parametresApplicatifs: Array<IParametreApplicatif>;
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
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        dateTraitement: string;
        /**
         * IDENTIFIANT EMPRUNTEUR
         */
        identifiantEmprunteur: string;
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
        informationsEmprunteur: Array<IInformationEmprunteur>;
        accessoiresBis: Array<IAccessoire>;
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
        personnesPayeur: Array<IPersonnePayeur>;
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
        elementsCalculGaranties: Array<IElementCalculGarantie>;
        majAvenantFinancier: IMAJAvenantFinancier;
        indicateurBanalise: string;
    }
    interface ICaracteristiqueFinan extends IElementGestion {
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
        creditBis: ICreditBis;
        creditTer: ICreditTer;
        conventionsAssurances: Array<IConventionAssurance>;
        personnesAssurableOuGarantBis: Array<IPersonneAssurableOuGarant>;
        notationBaleII: INotationBaleII;
        numeroAvenant: INumeroAvenant;
        criteresCreation: ICriteresCreation;
        compteurMiseJour: number;
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
    interface ICaracteristique extends IElementGestion {
        criteresModification: ICriteresModification;
        notationBale2: INotationBale2;
        reponseEdition: Array<IReponseEdition>;
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

declare module Avenants.Rest.Modeles.DossierCreditAvenant.Recherche {
    interface IRecherche extends IElementGestion {
        credit: ICredit;
        signaturesAnnexes: Array<ISignatureAnnexe>;
        motifsRefus: Array<IRefus>;
        historiquesEvenements: Array<IHistoriqueEvenement>;
        criteresRecherche: ICriteresRecherche;
        documentsEdition: Array<IDocumentEdition>;
    }
    interface ISignatureAnnexe {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
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
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface ISimulation {
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
         * LIBELLE ETAT SIMUL / AVENANT
         */
        libelleEtatSimulAvenant: string;
        /**
         * ETAT CREDIT EDG / Avenant
         */
        etatCreditEdgAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE SECURISATIO
         */
        etatBrancheAccessSecurisation: string;
        /**
         * CODE Modification Avenant/Simulation
         */
        codeModifAvenantSimulation: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOpeDemandeurNotationBale: string;
        /**
         * ETAT BRANCHE DONNEES COMPLEMENTAIRES
         */
        etatBrancheDonneesComplem: string;
        /**
         * Code existence crédit taux révisable
         */
        cdExistenceCreditTauxRevisable: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IAvenant {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
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
         * LIBELLE ETAT SIMUL / AVENANT
         */
        libelleEtatSimulAvenant: string;
        /**
         * ETAT CREDIT EDG / Avenant
         */
        etatCreditEdgAvenant: string;
        /**
         * ETAT BRANCHE ACCESSOIRE SECURISATIO
         */
        etatBrancheAccessSecurisation: string;
        /**
         * ETAT BRANCHE ACCESSOIRE EDG/AVENANT
         */
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * CD TRAITEMENT MODIFICATION EFFECTUE
         */
        codeTraitementModifEffectue: string;
        /**
         * ETAT BRANCHE DONNEES COMPLEMENTAIRES
         */
        etatBrancheDonneesComplem: string;
        /**
         * CODE Modification Avenant/Simulation
         */
        codeModifAvenantSimulation: string;
        /**
         * CD OPERATION DEMANDEUR NOTATION BALE
         */
        cdOpeDemandeurNotationBale: string;
        /**
         * Code existence crédit taux révisable
         */
        codeExistenceCreditTxRevisable: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IRefus {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
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
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface ICredit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
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
         * CODE ACTION POUR MISE A JOUR
         */
        codeActionPourMiseAJour: string;
        /**
         * CODE SITUATION IMPAYE SUR CREDIT
         */
        codeSituationImpayeSurCredit: string;
        /**
         * CODE Création Avenant/Simulation
         */
        codeCreationAvenantSimulation: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        avenants: Array<IAvenant>;
        simulations: Array<ISimulation>;
        compteurMiseJour: number;
        codeBlocageActeGestion: string;
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
        /**
         * Identifiant générique Dossier crédit
         */
        idGeneriqueDossierCredit: string;
    }
    interface ICriteresRecherche {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE ETAPE DOSSIER credit
         */
        codeEtapeDossierCredit: string;
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
         * Identifiant générique Dossier crédit
         */
        idGeneriqueDossierCredit: string;
        identifiantCredit: string;
        dateTraitement: string;
    }
    interface IDocumentEdition {
        identifiantdoc: string;
        identifiantAnnexe: string;
        codeType: string;
        libelle: string;
        annexe: boolean;
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
    interface IInformationCredit extends IElementGestion {
        credit: ICredit;
        creditsRataches: Array<ICreditRatache>;
        renegociationsProduit: Array<IRenegociationProduit>;
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
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * Nombre échéance avant recalcul mont.
         */
        nmbrEcheanceAvtRecalculMontant: number;
        /**
         * Evènement déclencheur début période
         */
        evenemntDeclencheurDebutPeriode: string;
        /**
         * Nb pér. pour dét. début de période
         */
        nbrPeriodePrDeterminerDbtPeriod: number;
        /**
         * MODE EXPRESSION VALEUR UTILIS INDICE
         */
        mdExpressionValeurUtilisIndice: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
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
        periodiciteApplicationElement: number;
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
        noRelatifPhaseTypePhaseProduit: number;
        /**
         * PERIODICITE M.E.R  INTERETS
         */
        periodiciteMiseRecouvrInterets: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurabsorbeePhasePalier: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
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
        numeroRelatifPalierProduit: number;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurabsorbeePhasePalier: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
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
         * CD INDEXATION TAUX PROGRESSION AMORT
         */
        cdIndexTauxProgressionAmort: string;
        /**
         * Code occur. absorbée (phase, palier)
         */
        codeOccurabsorbeePhasePalier: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
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
         * NOMBRE ECHEANCES ACCESSOIRES REPORT
         */
        nombreEcheancesAccessReport: number;
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
        numRegleApplicationAccessoire: string;
        /**
         * MT MINI ACCESSOIRE POUR RECOUVREMENT
         */
        mtMiniAccessPourRecouvrement: number;
        /**
         * CODE ACCESSOIRE DANS CALCUL TEG
         */
        codeAccessDansCalculTEG: string;
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
        modeComptaRecouvrAccessoire: string;
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
    }
    interface IRenegociationProduit {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
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
        /**
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
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
        numModaliteRemboursemntAnticipe: number;
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
        etatBrancheAccessoireEdgAvenant: string;
        /**
         * Existence accessoire bon/maj taux
         */
        existenceAccessoireBonMajTaux: string;
        /**
         * Cumul des Bonifications/Majorations
         */
        cumulBonificationsMajorations: number;
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
         * IDENTIFIANT CREDIT ELEMENTAIRE
         */
        identifiantCredit: string;
        phases: Array<IPhase>;
        echeancesReportees: Array<IEcheanceReportee>;
        accessoires: Array<IAccessoire>;
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
    interface IRecherche extends IElementGestion {
        listeEmprunteur: Array<IEmprunteur>;
        /**
         * utiliser pour le versement chainage
         */
        libelleTiers: string;
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
