
declare module DeblocageFonds.Commun.Constantes.Inject {
    module Angular {
        const $q: string;
        const $modalInstance: string;
        const $scope: string;
        const $filter: string;
    }
    module MyWay {
        const serviceAgentExtended: string;
        const modalService: string;
        const data: string;
    }
    module Logger {
    }
    module Vues {
        const messageInformations: string;
        const piecesTableau: string;
    }
    module Controleur {
        const messageInformations: string;
        const piecesTableau: string;
    }
    module Services {
        const myFlowServices: string;
        const dossierNumeriqueCreditServices: string;
        const montantUtilsServices: string;
        const restServices: string;
        const dateServices: string;
        const utilServices: string;
        const popinServices: string;
        const errorServices: string;
        const piecoUtilsServices: string;
        const piecoServices: string;
        const motsInterditsServices: string;
        const creditUtilsServices: string;
        const justificatifServices: string;
        const qServices: string;
    }
    module Directives {
        const motsInterdits: string;
        const mesageInformations: string;
        const piecesTableau: string;
    }
    module Filtres {
        const montantDevise: string;
    }
}

declare module DeblocageFonds.Commun {
    var app: any;
}

declare module DeblocageFonds.Commun.Constantes.Commun {
    module Devise {
        const codeEuro: string;
        const codeDollar: string;
        const codeDollarCanadien: string;
        const codeFrancSuisse: string;
        const codeLivre: string;
        const symboleEuro: string;
        const symboleFrancSuisse: string;
        const symboleDollar: string;
        const symboleLivre: string;
    }
    module Rest {
        const restDemandeMultiCanal: string;
        const restCreditParametreV6: string;
        const restClasseurMetier: string;
        const restDocumentParametre: string;
        const restDossierCreditGestionV2: string;
        const restCreditServiceV6: string;
        const restEspacePartageV1: string;
        const restPiece: string;
        const demande: string;
        const tache: string;
        const rechercheDemande: string;
        const listerParamApplicatif: string;
        const dossNUmeriqueMetier: string;
        const piecoPieceElement: string;
        const parametreSignaturePost: string;
        const actionMyFlow: string;
        const dossierPartageByIdExterne: string;
        const documentFourniCanalAgence: string;
    }
    module FormatDate {
        const formatDateRest: string;
        const formatDateIHM: string;
        const dateVideCentral: string;
        const formatDateRestEtHeure: string;
    }
    module MotsInterdits {
        const texteDefautPopin: string;
        const titrePopin: string;
    }
    module DNCExterne {
        const pieceIdentite: string;
    }
    module DNCCanalAgence {
        const pieceIdentite: string;
    }
    module CodeProcessusSaisieInstrcution {
        const instructionAgence: string;
        const instructionCompleteBackOfficeSansInstructionInitialeEnAgance: string;
        const instructionPriseEnChargeParBackOffice: string;
    }
}

declare module DeblocageFonds.Commun.Constantes.Controleurs {
    const popinInitialisationJustificatif: string;
}

declare module DeblocageFonds.Commun.Enum.Pieco {
    enum CodeProcessusMetier {
        DVFON,
        DDFO,
    }
    enum CodeTypeEntitee {
        GLOBAL_DOSSIER,
        FINANCEMENT,
        CREDIT_INTERNE,
        PROJET_HABITAT,
        PROJET,
    }
    enum CodeTypeEntiteeIdentifiant {
        GLOBAL_DOSSIER,
        FINANCEMENT,
        CREDIT_INTERNE,
        PROJET_HABITAT,
        PROJET,
    }
    enum CodeTypeElement {
        MENTION_IHM,
        CLAUSE,
    }
    enum Bloc {
        DEFAUT,
        TOTAL_CREDIT_EXTERNE,
        RESTITUTION,
        NATURE,
        REGLEMENTATION,
        NATURE_TRAVAUX,
        CCMI,
        TYPE_OBJET_FINANCE,
        NATURE_OBJET_HABITAT,
        EST_GROUPEMENT_INTERNE,
        TERRAIN_FINANCE,
        REAMENAGEMENT,
    }
    module Valeur {
        /**
         * Enum représentant les différente valeur que peut prendre le bloc PJ.REAMENAG
         */
        enum Reamenagement {
            PAS_REAMENAGEMENT,
            SURRENDETTEMENT,
            CONTENTIEUX,
            INTERNE,
            EXTERNE,
            REGROUPEMENT,
        }
        enum OuiNonConcerne {
            OUI,
            NON,
            NON_CONCERNE,
        }
        enum TypeObjet {
            REGROUPEMENT_CREDIT_CONSO,
            REGROUPEMENT_CREDIT_IMMO,
            LOGEMENT_NEUF,
            LOGEMENT_NEUF_VEFA,
            FONCIER_NON_BATI,
            PAIEMENT_DE_SOULTE,
            RACHAT_SOCIETE,
            BOUQUET_VIAGER,
            RACHAT_USUFRUIT,
            NU_PROPRIETE_LOGEMENT_EXISTANT,
            NU_PROPRIETE_LOGEMENT_NEUF,
        }
        enum RegroupementInterne {
            INTERNE,
            EXTERNE,
        }
        enum TypeObjetReglemente {
            TRAVAUX,
            LOGEMENT_EXISTANT,
            CONSTRUCTION,
            TERRAIN_A_BATIR,
            REGROUPEMENT_IMMO,
            SCPI,
        }
        enum Nature {
            PRET_CONVENTIONNES,
            PRET_IMMOBILIERS_CONVENTIONNES,
            PRET_ACCESSION_SOCIALE,
            PRET_TAUX_ZERO,
            PRET_TAUX_ZERO_OUTREMER,
            ECO_PRET_TAUX_ZERO,
            ECO_PRET_TAUX_ZERO_COPROPRIETE,
            PRET_LIVRET_EPARGNE_LOGEMENT,
            PRET_PLAN_EPARGNE_LOGEMENT,
            PRET_LOCATIF_SOCIALE,
            PRET_LOCATIF_INTERMEDIAIRE,
            CREDIT_DIFFERE_AMORTISSEMENT,
            CREDIT_DIFFERE_TOTAL,
        }
        enum TypeTravaux {
            BOUQUET,
            ASSAINISSEMENT,
            PERFORMANCE_ENERGETIQUE,
        }
    }
}

declare module DeblocageFonds.Commun.Constantes.MyFlow {
    module Cles {
        const codeTypeTache: string;
        const libelleTypeTache: string;
        const libelleCorbeille: string;
        const topDevise: string;
        const codeDevise: string;
        const codeStatutSED: string;
        const avis: string;
        const conformite: string;
        const codeCategorieEmprunteur: string;
        const codeTypeObjetRegle: string;
        const topVip: string;
        const topEtatSignature: string;
        const topOrigineDemande: string;
        const topTypeFinancement: string;
        const topApplication: string;
        const topPhaseCredit: string;
        const topGarantieATraiter: string;
        const topPresencePrescripteur: string;
        const topProduitReglemente: string;
        const topAssurance: string;
        const topEditionAgence: string;
        const typeFinancement: string;
        const structureDelegataire: string;
        const identifiantSDPI: string;
        const typeLoi: string;
        const typeEdition: string;
        const libelleOrigineDemande: string;
        const statutDossier: string;
        const numeroCreditGestion: string;
        const numeroDossierGestion: string;
        const codeTypeCanal: string;
        const topCreditCollaborateur: string;
        const prescripteur: string;
        const assuranceIQS: string;
        const canal: string;
        const phaseCredit: string;
        const montant: string;
        const numeroDemandeDeblocage: string;
        const dateSouhaiteDemande: string;
        const dateSignatureNotaire: string;
        const destinataireDeblocage: string;
        const libelleDestinataireDeblocage: string;
    }
    module Libelle {
        const corbeilleDevise: string;
        const corbeilleVIP: string;
        const corbeilleReglemente: string;
        const corbeilleComplexe: string;
        const corbeilleStandard: string;
        const myCreditGestion: string;
        const originePortailInternetClient: string;
        const originePortailInternetNotaire: string;
        const tacheFrais: string;
        const tacheHorsFrais: string;
        const annulationDemande: string;
    }
    module Code {
        const tache302Frais: string;
        const tache303HorsFrais: string;
        const origineMyCreditGestion: string;
        const originePortailInternetClient: string;
        const originePortailInterneNotaire: string;
        const typeMotif106: string;
        const myCg: string;
        const ecugest: string;
        const neo: string;
        const codeApplicationSyn: string;
        const offreConclueU: string;
        const offreEnAttenteG: string;
        const abandonDemande: string;
    }
    module CodeAction {
        const creationDemande: string;
        const abandonDemande: string;
        const clotureTache: string;
        const refusTache: string;
        const fermerTache: string;
        const miseEnAttente: string;
    }
    module CodeTypeActionTache {
        const clotureTache: string;
        const refusTache: string;
        const miseAttenteTache: string;
    }
    enum CodeEvenement {
        CREATION_DEMANDE_FRAIS_FINANCES,
        DEMANDE_TRAITEE_FRAIS_FINANCES,
        DEMANDE_REFUSEE_FRAIS_FINANCES,
        DEMANDE_ATTENTE_FRAIS_FINANCE,
        DEMANDE_VALIDEE_FRAIS_FINANCE,
        CREATION_DEMANDE_HORS_FRAIS_FINANCE,
        DEMANDE_TRAITEE_HORS_FRAIS_FINANCE,
        DEMANDE_REFUSEE_HORS_FRAIS_FINANCES,
        DEMANDE_ATTENTE_HORS_FRAIS_FINANCE,
        DEMANDE_VALIDEE_HORS_FRAIS_FINANCE,
    }
}

declare module DeblocageFonds.Commun.Constantes.Vues {
    const popinInitialisationJustificatif: string;
}

declare module DeblocageFonds.Commun.Controleurs {
    class PopinInitialisationJustificatifControleur {
        private data;
        private $modalInstance;
        static $inject: Array<string>;
        constructor(data: Modeles.IPopinInitialisationJustificatif, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        /**
         * Fonction éxécuté quand on clique sur le bouton valider
         */
        valider(): void;
        /**
         * Fonction éxécuté quand on clique sur le bouton fermer
         */
        fermer(): void;
    }
}

declare module DeblocageFonds.Commun.Filtres {
    function montantDevise(): (montant: number, devise: string) => string;
}

declare module DeblocageFonds.Commun.Modeles.CaracteristiqueCredit {
    interface ICaracteristiqueCredit {
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
        /**
         * N'est pas rapporté par caracteristique credit pour le moment.
         * On la trouve dans une demande dans l'objet DetailDonneePIECO
         */
        codeProduitRestitution?: string;
        /**
         * N'est pas rapporté par caracteristique credit pour le moment.
         * On la trouve dans une demande dans l'objet DetailDonneePIECO
         */
        codeNatureTravaux?: string;
        /**
         * N'est pas rapporté par caracteristique credit pour le moment.
         * On la trouve dans une demande dans l'objet DetailDonneePIECO
         */
        codeCreditRelais?: string;
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
    interface IListeCredits {
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
    interface IInformationSinistre {
        listeSinistres: Array<ISinistre>;
    }
    interface IInformationRemboursement {
        listeRemboursementAnticipe: Array<IRemboursementAnticipeCredit>;
    }
    interface IInformationAvenant {
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
    interface IDureeVersement {
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
    interface IDonneeCredit {
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
    interface IJustificatifTauxMoyenGlobal {
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
    interface IVariationsDureeAutorisees {
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

declare module DeblocageFonds.Commun.Modeles.DemandeMultiCanal.Demande {
    interface IDonneesDemandeDeblocage {
        numeroDemandeDeblocage: string;
        dateSouhaiteeDemandeDeblocage: string;
        dateNotaireDemandeDeblocage: string;
        dateSignatureDossier: string;
        dateCreationDemandeMyFlow: string;
        montantDemandeDeblocage: string;
        montantDevise: string;
        codeTache: string;
        codeDevise: string;
        codeFamilleControle: string;
        codeCategorieEmprunteur: string;
        codeDestinataireMyFlow: string;
        codeEtablissement: string;
        codeTypeLoi: string;
        codeApplicationEmetrice: string;
        codeTypeCanal: string;
        /**
         * 2 pour DEI, 3 pour MyCreditGestion, 4 pour Notaire
         */
        codeTypeCanalNumerique: string;
        codeTypeMotif: string;
        codeOrigine: string;
        libelleTache: string;
        libelleDestinataireMyFlow: string;
        identifiantDossierSynchro: string;
        identifiantDossierNeo: string;
        identifiantPersonne: string;
        numeroInterneEdsAgent: string;
        applicationEmetrice: string;
        typeObjetReglementeCredit: string;
        canal: string;
        /** Liste crédits séparés par un - */
        listeCredits: string;
        codeEvenement: string;
        avis?: string;
    }
    interface IDemande {
        caracteristique: ICaracteristique;
        formulaire: IFormulaire;
        nonClient: INonClient;
        objetDemande: IObjetDemande;
        serviceResult?: IServiceResult;
    }
    interface IServiceResult {
        code: number;
        message: string;
    }
    interface ICaracteristique {
        /**
         * Identifiant de la demande connue du Système Mysys (GDMc)
         */
        identifiantDemande: string;
        /**
         * Identifiant interne de la demande dans MyFlow
         */
        identifiantDemandeMyFlow?: string;
        /**
         * Code type d'une demande
         */
        codeTypeMotif: string;
        /**
         * Décrit le Canal par lequel a été initier la demande.
         * Reprendre typo MySys
         */
        codeTypeCanal: string;
        /**
         * Décrit le device sur lequel a été initiée la demande
         * Reprendre typo MySys
         */
        codeTypeDevice?: string;
        /**
         * Code caisse
         */
        codeEtablissement: string;
        /**
         * Code qualifiant le porteur de la demande.
         * A pour valeurs :
         *   - 1 : Demande Client
         *   - 2 : Demande non client
         *   - 3  : Demande Interne établissement (Collaborateur)
         */
        codeTypePorteurDemande: string;
        /**
         * Numéro abonné BAD de la personne à l'origine de la demande.
         */
        numeroAbonneInitiateurDemande?: string;
        /**
         * Identifiant porteur de la demande
         * si codeTypePorteurDemade = 1 (demande client) alors IdentifiantPorteur demande = Identifiant Personne
         * codeTypePorteurDemade = 3 (demande agent) alors IdentifiantPorteur Demande = Identifiant Agent
         */
        identifiantPorteurDemande: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE. Correspond à un poste fonctionnel, ... Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: string;
        piecesJointe: Array<IPieceJointe>;
        /**
         * Code du Motif MyFlow aossocié à la demande
         */
        codeTypeMotifMyFlow?: string;
        /**
         * Date de création de la demande
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Application émettrice (ex: MyCredimmo)
         */
        applicationEmettrice: string;
        /**
         * Code applicatif ARIS de l'application émettrice (ex: NEO)
         */
        codeApplicationEmettrice: string;
        /**
         * Code interne structure d'affectation de la tâche "applicationExterne" (Code EDS interne structure)
         */
        codeInterneStructureAffectation?: string;
        /**
         * Poste fonctionnel d'affectation de la tâche "application externe" (PF agent)
         */
        posteFonctionnelAffectation?: string;
        /**
         * Etat de la demande
         * - 01 : Clôturée
         * - 02 : Abandonné
         */
        etatDemande?: string;
        /**
         * Raison justifiant de l'état de la demande
         */
        raisonEtat?: string;
        /**
         * Commentaire relatif à l'état de la demande
         */
        commentaireEtat?: string;
        /**
         * Code application ARIS
         */
        codeApplication?: string;
        /**
         * Caractéristique ajoutée à la demande
         */
        nouvelleCaracteristique?: string;
    }
    interface IFormulaire {
        listeCleValeur: Array<ICleValeur>;
        /**
         * Version du formulaire
         */
        version: number;
        /**
         * Identifiant interne du formulaire associé à la demande
         */
        identifiantFormulaire: string;
    }
    interface ICleValeur {
        /**
         * Code clé
         */
        cle: string;
        /**
         * Valeur correspondante au code clé
         */
        valeur: string;
        /** Valeur si on affiche le champ ou non. */
        display?: string;
    }
    interface INonClient {
        /**
         * Titre de civilité
         */
        civilite: string;
        /**
         * Nom de naissance
         */
        nomPatronymique: string;
        /**
         * Nom marital
         */
        nomMarital: string;
        /**
         * Prénom
         */
        prenom: string;
        /**
         * Date de naissance
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Lieu de naissance
         */
        lieuNaissance: string;
        adresse: IAdresse;
        /**
         * Numéro de téléphone fixe
         */
        telephoneFixe: string;
        /**
         * Numéro de téléphone portable
         */
        telephonePortable: string;
        /**
         * Adresse e-mail
         */
        adresseMail: string;
        /**
         * Numéro de carte bancaire
         */
        numeroCarte: string;
    }
    interface IAdresse {
        /**
         * Etage du logement
         */
        etage: string;
        /**
         * Numéro d'appartement
         */
        appartement: string;
        /**
         * Numéro de porte
         */
        porte: string;
        /**
         * Numéro ou nom du bâtiment
         */
        batiment: string;
        /**
         * Numéro et nom de la voie ou de la rue liée à l'adresse
         */
        rue: string;
        /**
         * Nom du lieu-dit
         */
        lieuDit: string;
        /**
         * Code postal de la commune liée à l'adresse
         */
        codePostal: string;
        /**
         * Dénomination de la commune liée à l'adresse
         */
        localite: string;
        /**
         * Code INSEE du pays
         */
        codeInseePays: string;
    }
    interface IPieceJointe {
        /**
         * Identifiant de la pièce jointe
         */
        identifiantPieceJointe: string;
    }
    interface IObjetDemande {
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte. Ce critère de recherche ne peut être utilisé uniquement pour les comptes de dépôt / épargne.
         */
        numeroRib?: string;
        /**
         * Référence interne de la gestion du compte ou service. Il correspond :
         * - au numéro de compte pour un livret A, un CDD,
         * - au numéro de prêt,
         * - au numéro de service,
         * - ...
         */
        referenceCompteService?: string;
        /**
         * Identifie un Produit/Service dans le catalogue BPCE. Correspond au niveau N-5 de la nomenclature des P/S.
         */
        codeProduit?: string;
        /**
         * Code qualifiant l'objet de la demande.
         * A pour valeurs :
         * - 1 : Contrat Dépôt Epargne
         * - 2 : Dossier Crédit
         * - 3 : Contrat Carte
         * - 4 : Contrat EDEN
         * - 5 : Contrat Titre
         * - 6 : Contrat Assurance
         */
        codeTypeObjetDemande: string;
        /**
         * Identifiant objet de la demande
         * - Si codeTypeObjetDemande = 1 (Contrat Dépôt Epargne), alors identifiantObjet = Identifiant contrat dépôt épargne souscrit dans un établissement
         * - Si codeTypeObjetDemande = 2 (Dossier Crédit), alors identifiantObjet = Identifiant dossier crédit
         * - Si codeTypeObjetDemande = 3 (Contrat Carte), alors identiantObjet = Identifiant contrat carte
         */
        identifiantObjet: string;
        /**
         * Libellé objet demande
         */
        libelleObjetDemande: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.DemandeMultiCanal.Recherche {
    interface IParamGet {
        codeEtablissement: string;
        /**
         * Type d'objet utilisé pour la recherche :
         *   01 : Recherche par identifiant interne demande
         *   02 : Recherche par n° de personne
         *   03 : Recherche par identifiant contrat
         *   04 : Recherche par identifiant externe demande
         */
        codeTypeObjetRecherche: string;
        identifiantObjetRecherche: string;
        posteFonctionnelAgent: string;
        returnFormulaire?: string;
    }
    interface IDemande {
        /**
         * Code caisse
         */
        codeEtablissement: string;
        /**
         * Identifiant de la demande connue de l'application à l'origine de l'appel du service
         */
        identifiantExterneDemande: string;
        /**
         * Identifiant de la demande connue du système de gestion des demandes (MyFlow)
         */
        identifiantInterneDemande: string;
        /**
         * Code qualifiant le porteur de la demande. A pour valeurs :
         *
         * 1 : Demande Client
         * 2 : Demande non client
         * 3 : Demande Interne établissement (Collaborateur)
         */
        codeTypePorteurDemande: string;
        /**
         * Identifiant porteur de la demande si codeTypePorteurDemade = 1 (demande client)
         * alors IdentifiantPorteur demande = Identifiant Personne codeTypePorteurDemade = 3 (demande agent) alors IdentifiantPorteur Demande = Identifiant Agent
         */
        identifiantPorteurDemande: string;
        /**
         * Libellé du type de demande dans le système de gestion des motifs communautaires
         */
        libelleTypeMotifCommunautaire: string;
        /**
         * Libellé du type de demande dans le système de gestion des demandes (MyFlow)
         */
        libelleTypeMotif: string;
        /**
         * Identiifant du poste fonctionnel initiateur de la demande
         */
        idPFInitiateurDemande: string;
        /**
         * Libellé de l'initiateur de la demande
         */
        libelleInitiateurDemande: string;
        /**
         * Identifiant de l'élément de structure initiatrice de la demande (code Interne EDS)
         */
        idElementStructureInitiatrice: string;
        /**
         * Libellé de l'élément de structure initiatrice de la demande (agence, service, etc...)
         */
        liblElementStructureInitiatrice: string;
        /**
         * Numéro de contrat associé à la demande
         */
        identifiantObjet: string;
        /**
         * Code de type de contrat associé à la demande
         */
        codeTypeObjetDemande: string;
        /**
         * Date de création de la demande
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCreation: string;
        /**
         * Correspond à la date à laquelle la demande a été clôturée. La valeur est "null" si la date est non renseignée.
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCloture: string;
        /**
         * Correspond au statut (Créée, En cours ou Clôturée) de la demande.
         */
        statutDemande: string;
        /**
         * Correspond au formulaire associé à la demande
         */
        formulaire: IFormulaire;
        /**
         * Dernier code métier externe enregistrée sur la demande, suite à un événement déclenchant l'action "Statut métier externe"
         */
        statutMetierExterne: string;
        /**
         * Dernière date d'événement enregistrée sur la demande, suite à un événement déclenchant l'action "Date dernier événement"
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDernierEvenement: string;
        /**
         * Dernier élément de structure (poste fonctionnel) enregistrée sur la demande, suite à un événement déclenchant l'action "Poste Fonctionnel affecté"
         */
        pfAffectationEvenement: string;
    }
    interface IRetourService {
        /**
         * Code du retour d'appel du service
         */
        code: string;
        /**
         * Message de retour d'appel du service
         */
        message: string;
    }
    interface IRecherche {
        demandes: Array<IDemande>;
        retour: IRetourService;
    }
    interface IFormulaire {
        listeCleValeur: Array<ICleValeur>;
    }
    interface ICleValeur {
        /**
         * Code clé
         */
        cle: string;
        /**
         * Valeur correspondante au code clé
         */
        valeur: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.DemandeMultiCanal.Tache {
    interface IAction {
        /**
         * Type d'action effectuée sur la tâche :
         *
         * - 01 = Traiter
         * - 02 = Refuser provisoirement
         * - 03 = Déléguer
         * - 04 = Transférer
         * - 05 = Affecter
         * - 06 = Refuser définitivement
         */
        codeTypeAction: string;
        /**
         * Code de la raison du refus provisoire
         */
        codeTypeRaison: string;
        /**
         * Libellé de la raison du refus provisoire.
         * Cette propriété doit être renseignée dans le cas d'un codeTypeAction ayant pour valeur 02
         */
        libelleRaison: string;
        /**
         * Commentaire lié au traitement de la tâche
         */
        commentaire: string;
        /**
         * Identifiant poste fonctionnel de l'agent qui doit traiter la tâche.
         * A valoriser si codeTypeAction = 03, 04 ou 05
         */
        idPFTacheATraiter: string;
        /**
         * Identifiant EDS qui doit traiter la tâche.
         * A valoriser si codeTypeAction = 03, 04 ou 05
         */
        idEdsTacheATraiter: string;
        /**
         * Type de l'affectation lors d'une génération de tâche (exemple: refus provisoire)
         * 0 : Aucun
         * 1 : EDS
         * 3 : Gestionnaire Clientèle du client de la demande
         * 4 : Futur directeur d'agence
         * 5 : Actuel directeur d'agence
         * 7 : Gere par
         * 8 : Initiateur demande
         * 11 : Structure d'usage
         */
        typeStructureAffectation: string;
    }
    interface ITache {
        /**
         * Action effectuée sur la tâche
         */
        action: IAction;
        caracteristique: ICaracteristique;
        serviceResult?: IServiceResult;
    }
    interface IServiceResult {
        code: number;
        message: string;
    }
    interface ICaracteristique {
        /**
         * Wobnum de la tâche
         */
        identifiantInterneTache: string;
        /**
         * Identifiant du contrat lié à la tâche à traiter
         */
        identifiantDemande: string;
        /**
         * Code du type de motif lié à la demande pour laquelle on souhaite traiter les tâches
         */
        codeTypeMotif: string;
        /**
         * Décrit le Canal par lequel a été initier la demande. Reprendre typo MySys
         */
        codeTypeCanal: string;
        /**
         * Code établissement émetteur de l'appel de traitement de la tâche
         */
        codeEtablissement: string;
        /**
         * Libellé de la tâche (pour la traçabilité)
         */
        libelleTache: string;
        /**
         * Libellé de la demande (pour la traçabilité)
         */
        libelleDemande: string;
        /**
         * Identifiant de l'agent connecté
         */
        identifiantAgentConnecte: string;
        /**
         * Poste fonctionnel de l'agent connecté
         */
        identifiantElementStructure: string;
        /**
         * Identifiant interne de demande MyFlow
         */
        identifiantDemandeMyFlow: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.DocumentEspacePartageConsultation {
    /**
     * Modèle envoyé à l'espace de partage en consultation
     */
    interface IParamGetByIdExterne {
        /**
         * Code de l'application, dans notre cas INCR
         */
        codeAppliInttDossPartg: string;
        /**
         * Identifiant du dossier dans l'espace de partage
         * Dans notre cas il est sous le format Numero caisse + 5 espace + identifiantDossierInstruction
         */
        idntExtnDossPartg: string;
        /**
         * Numero de la caisse
         */
        codeEtabBanc: string;
        /**
         * Je ne sais pas, demander pour voir a quoi il sert
         * Dans notre cas il vaut toujours 0
         */
        modeRestNatr: string;
    }
    /**
     * Modele de retour lorqu'on appel getByIdExterne de l'espace de partage
     */
    interface IResponseGetByIdExterne {
        csultDossPartg: IConsultationDossierPartage;
    }
    /**
     * Représentation des information recu lors de la consultation du dossier de partage
     */
    interface IConsultationDossierPartage {
        idntDossPartg: number;
        codeEtabBanc: string;
        codeAppliInttDossPartg: string;
        idntExtnDossPartg: string;
        idntCmpstApplf: string;
        liblDossPartg: string;
        codeStttDossPartg: string;
        indicVisbExtr: boolean;
        dateModfIndicVisbExtr: string;
        idntUtilModfIndicVisbExtr: string;
        /**
         * format xemple 2020-05-06T10:05:55.000+0200
         * DateTime
         */
        dateCrtn: string;
        /**
         * format xemple 2020-05-06T10:05:55.000+0200
         * DateTime
         */
        dateModf: string;
        idntUtilCrtn: string;
        idntUtilModf: string;
        /**
         * format xemple 2020-05-06T10:05:55.000+0200
         * DateTime
         */
        datePurge: string;
        codeTypeIdntExtnDossCible: number;
        idntExtnDossCible: string;
        listCsultDemnDocm: IConsultationDemandeDocument[];
    }
    interface IConsultationDemandeDocument {
        idntDemnDocm: number;
        idntExtrDemnDocm: string;
        liblNomDemnDocm: string;
        catgDemnDocm: string;
        ordrCatgDemnDocm: number;
        ordrCatgDemnDocmSpecified: boolean;
        liblDescDemnDocm: string;
        typeDemnDocm: string;
        codeStttDemnDocm: string;
        codeSensTrnsDemnDocm: string;
        codeTypAttrDocm: string;
        idntAttrbPrmr: string;
        idntAttrbSecn: string;
        liblAttrb: string;
        codeCritInjcAcqs: string;
        dateCrtn: string;
        dateModf: string;
        idntUtilCrtn: string;
        idntUtilModf: string;
        idntExtnDemnCible: string;
        listCsultDocmFour: IConsultationDocumentFourni[];
        listCsultDestDemnDocm: IConsultationDestDemandeDocument[];
        listNatr: INature[];
        listNatrBapi: INatureBapi[];
    }
    interface IConsultationDocumentFourni {
        idntDocmFour: number;
        codeNatrDocmGestElctDocm: string;
        liblNatrDocmGestElctDocm: string;
        idntDocmGed: string;
        codeNatrBapi: string;
        liblNatrBapi: string;
        descNatrBapi: string;
        canlAcqs: string;
        codeMotfRefuDocmFour: string;
        liblMotfRefuDocmFour: string;
        liblCommRefuDocmFour: string;
        codeStttDocmFour: string;
        dateCrtn: string;
        numrPersCrtn: number;
        dateDecs: string;
        dateDecsSpecified: boolean;
        idntUtilDecs: string;
        dateRecupFichier: string;
        dateRecupFichierSpecified: boolean;
        codeStatutRadLad: string;
        listHistDocmFourRefuse: IHistoriqueDocumentFourniRefuse[];
    }
    interface IHistoriqueDocumentFourniRefuse {
        idntDocmFour: number;
        codeNatrDocmGestElctDocm: string;
        liblNatrDocmGestElctDocm: string;
        codeNatrBapi: string;
        liblNatrBapi: string;
        descNatrBapi: string;
        canlAcqs: string;
        idntDocmGed: string;
        codeMotfRefuDocmFour: string;
        liblMotfRefuDocmFour: string;
        liblCommRefuDocmFour: string;
        codeStttDocmFour: string;
        dateCrtn: string;
        numrPersCrtn: number;
        numrPersCrtnSpecified: boolean;
        dateDecs: string;
        dateDecsSpecified: boolean;
        idntUtilDecs: string;
        dateRecupFichier: string;
        dateRecupFichierSpecified: boolean;
        codeStatutRadLad: string;
    }
    interface IConsultationDestDemandeDocument {
        codeDescDemnDocm: string;
        idntDestDemnDocm: string;
    }
    interface INature {
        codeNatr: string;
        liblNatr: string;
    }
    interface INatureBapi {
        codeNatrBapi: string;
        liblNatrBapi: string;
        descNatrBapi: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.DocumentEspacePartageModification {
    interface IParamGetDocumentFourniCanalAgence {
        idntDemnDocm: string;
        codeNatr: string;
        agnt: string;
        idntDocGed: string;
        codeStatutDocFourni: string;
    }
    interface IReponseGetDocumentFourniCanalAgence {
        idntDocFour: number;
    }
}

declare module DeblocageFonds.Commun.Modeles.ClasseurMetier.DossNumeriqueMetier {
    interface IParamGet {
        codeFournisseur: string;
        listeReferenceRegroupement?: string[];
        indicateurDocumentInvalide: boolean;
    }
    interface IDocumentVersionOutput {
        identifiantDocument: string;
        dateVersion: string;
        dateDocument: string;
        codeNature: string;
        identifiantDocumentGED: string;
        etatInjection: string;
        critereInjection: string;
        /**
         * Date metier
         * Type date au format yyyy-MM-dd
         */
        dateMetier: string;
        /**
         * Identifiant qui a modifié la date metier
         */
        agentModifDateMetier: string;
        /**
         * La date de la dernière modification de la date métier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifDateMetier: string;
        /**
         * Commentaire
         */
        commentaire: string;
        /**
         * Identifiant qui a modifié le commentaire
         */
        agentModifCommentaire: string;
        /**
         * La date de la dernière modification du commentaire
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifCommentaire: string;
        /**
         * Indicateur de de corbeille :
         * O pour document à la corbeille
         * N pour document non mis à la corbeille
         */
        indicateurCorbeille: boolean;
        /**
         * Identifiant qui a modifié l'indicateur de corbeille
         */
        agentModifIndicCorbeille: string;
        /**
         * La date de la dernière modification de l'indicateur de corbeille
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifIndicCorbeille: string;
    }
    interface IDocumentOutput {
        typeDocument: string;
        codeNatureAcquisition: string;
        typeAttributaire: string;
        identifiantAttributaire: string;
        libelleAttributaire: string;
        critereInjection: string;
        metaDonnee: string;
        classementNiveau1: string;
        ordreNiveau1: string;
        classementNiveau2: string;
        ordreNiveau2: string;
        etatInjection: string;
        indicDeplacementEspaceArchivage: string;
        invalide: boolean;
        listeDocumentVersion: Array<IDocumentVersionOutput>;
    }
    interface IRegroupementOutput {
        identifiantRegroupement: string;
        referenceRegroupement: string;
        libelleRegroupement: string;
        indicateurVerrouille: boolean;
        identifiantEtablissementGce: string;
        agent: string;
        dateCreation: string;
        userCreation: string;
        dateModification: string;
        userModification: string;
        listeDocument: Array<IDocumentOutput>;
        /**
         * Date de la dernière importation automatique des documents
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateAutoImportDocm: string;
    }
    interface IDossierNumeriqueMetierOutput {
        listeRegroupement: Array<IRegroupementOutput>;
    }
    interface ICommentaire {
        /**
         * IdntDocm
         */
        idDocm: string;
        /**
         * LiblCommentaire
         */
        libelleCommentaire: string;
    }
    interface IDateMetier {
        /**
         * IdntDocm
         */
        idDocm: string;
        /**
         * DateMetr
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateMetier: string;
    }
    interface IQstnMettreAJourDateMetier {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        listeDateMetier: Array<IDateMetier>;
    }
    interface IQstnMettreAJourCorbeilleSuppression {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        /**
         * ListIdntDoc
         */
        listeIdDoc: Array<string>;
    }
    interface IQstnMettreAJourCorbeilleRestauration {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        /**
         * ListIdntDoc
         */
        listeIdDoc: Array<string>;
    }
    interface IQstnMettreAJourCommentaire {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        listeCommentaire: Array<ICommentaire>;
    }
    interface IRspnCreerOuMajDossierNumerique {
        /**
         * IdntRegr
         */
        idRegr: string;
    }
    interface IBlocDocm {
        typeDoc: string;
        codeNatureAcq: string;
        typeAttrb: string;
        codeAttrb: string;
        libelleAttrb: string;
        metadonnee: string;
        critereInjc: string;
        classementNiveau1: string;
        ordreNiveau1: number;
        classementNiveau2: string;
        ordreNiveau2: number;
        indiceEnvoiDossierPartg: string;
        aideDoc: string;
    }
    interface IQstnCreerOuMajDossierNumerique {
        codeFour: string;
        idEtabGce: string;
        agent: string;
        referenceRegr: string;
        libelleRegr: string;
        metadonnee?: string;
        indiceEnvoiDossierPartg?: string;
        listeDoc: Array<IBlocDocm>;
    }
    interface IReponseImportAutomatique {
        nbDocumentImportes: number;
    }
    interface IQueryImportAutomatique {
        codeFour: string;
        referenceRegroupement: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.EvtTacheMyFlow {
    interface IParamGet {
        codeEtablissement: number;
        identifiantDossierInstruction: string;
        codeVersion: string;
        codeRelease: string;
        dateTraitement: string;
        codeApplication: string;
        codeTypeEvenement: string;
        codeEtatDossierEnCours: string;
        codeProcessusSaisieInstruction?: string;
        identEntiteConnecteSurDossier?: string;
    }
    interface IEvtTacheMyFlow {
        listeCodeRetour: Array<IListeCodeRetour>;
        erreurs: Array<IErreurMyFlow>;
        detail: Array<IDetailMyFlow>;
    }
    interface IDetailMyFlow {
        /**
         * NUMERO RELATIF
         */
        numeroRelatif: number;
        /**
         * Code action demande Myflow
         */
        codeActionDemandeMyflow: string;
        /**
         * Code tâche demande MyFlow
         */
        codeTacheDemandeMyflow: string;
        /**
         * Libelle tâche MyFlow
         */
        libelleTacheMyflow: string;
        /**
         * Code motif générique MyFlow
         */
        codeMotifGeneriqueMyflow: string;
        /**
         * Code Itération Evènement
         */
        codeIterationEvenement: string;
        /**
         * Code affectation
         */
        codeAffectation: string;
        /**
         * Liste des codes taches MyFlow
         */
        listeTaches: Array<IListeTaches>;
    }
    interface IListeCodeRetour {
        /**
         * Code Retour
         */
        codeRetour: number;
    }
    interface IErreurMyFlow {
        /**
         * DATE SYSTEME
         * Type date au format yyyy-MM-dd
         */
        dateSysteme: string;
        /**
         * Heure
         */
        heure: string;
        /**
         * Numéro du terminal
         */
        numeroTerminal: string;
        /**
         * Code transaction
         */
        codeTransaction: string;
        /**
         * Nom du programme appelant
         */
        nomProgrammeAppelant: string;
        /**
         * QR Nom Question/Reponse
         */
        qrNomQuestionReponse: string;
        /**
         * IDENTIFIANT DOSSIER INSTRUCTION
         */
        identifiantDossierInstruction: string;
        /**
         * Code segment de la table
         */
        codeSegmentTable: string;
        /**
         * code erreur SQLCODE
         */
        codeErreurSqlcode: number;
        /**
         * code erreur SQLSTATE
         */
        codeErreurSqlstate: string;
        /**
         * Code libelle erreur008
         */
        codeLibelleErreur008: string;
        /**
         * Libelle Message Erreur sur 80 car.
         */
        libelleReponse: string;
        /**
         * Code Abend
         */
        codeAbend: string;
    }
    interface IInfosGenerales {
        /**
         * CODE APPLICATION
         */
        codeApplication: string;
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * CODE TYPE EVENEMENT
         */
        codeTypeEvenement: string;
        /**
         * CODE ETAT DOSSIER EN COURS
         */
        codeEtatDossierEnCours: string;
        /**
         * Code Processus Saisie Instruction
         */
        codeProcessusSaisieInstruction: string;
        /**
         * DATE DE TRAITEMENT
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
    }
    interface IRechercheParametre {
        /**
         * IDENTIFIANT CAISSE EPARGNE
         */
        codeEtablissement: number;
        /**
         * IDENTIFIANT DOSSIER INSTRUCTION
         */
        identifiantDossierInstruction: string;
        /**
         * IDENT ENTITE CONNECTE SUR LE DOSSIER
         */
        identEntiteConnecteSurDossier: string;
        /**
         * CODE VERSION
         */
        codeVersion: string;
        /**
         * CODE RELEASE
         */
        codeRelease: string;
        /**
         * DATE DE TRAITEMENT
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
    }
    interface IListeTaches {
        /**
         * Code tache MyFlow
         */
        codeTacheDemandeMyflow: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.ListeParamApplicatif {
    interface IParamGet {
        versionWsdl: number;
        dateDeTraitement: string;
        codeEtablissement: string;
        rubriquesFiltre?: string;
        valeursFiltre?: string;
        rubriquesTri?: string;
        valeurTri?: string;
    }
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

declare module DeblocageFonds.Commun.Modeles.ParametreSignature {
    interface IQstnParametreSignatureE52IE52O {
        /**
         * Code type ICG
         */
        codeTypeICG: string;
        /**
         * Date à laquelle on souhaite se positionner pour obtenir le paramétrage
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateStandard?: string;
        /**
         * Liste des codes types de document contractualisation
         */
        listeTypeDocCont?: Array<string>;
    }
    interface IParametreSignatureE52IE52O {
        /**
         * Code Retour Echanges
         */
        codeRetrEchn: number;
        /**
         * Type document contractualisation
         */
        typeDocCont: string;
        /**
         * Libellé document contractualisation
         */
        liblDocCont: string;
        /**
         * Code nature pièce justificative
         */
        codeNatrPiecJust: string;
        /**
         * Code type justificatif
         */
        codeTypeJust: string;
        /**
         * Code Nature GED
         */
        codeNatrGed: string;
        /**
         * Code type ICG
         */
        codeTypeIcg: string;
        /**
         * Code technique impression
         */
        codeTechImpr: string;
        /**
         * Indicateur non matérialisation
         */
        indicNonMatr: boolean;
        /**
         * Date début validité
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        e52IDateDebuVald: string;
        /**
         * Date fin validité
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        e52IDateFinVald: string;
        /**
         * Type attributaire classeur client
         */
        typeAttrClssClnt: string;
        /**
         * Indicateur document d'entreprise
         */
        indicDocEntr: boolean;
        /**
         * Type maquette
         */
        typeMaqt: string;
        /**
         * Code famille d'un document
         */
        codeFamlUnDoc: string;
        /**
         * Code application technique d'édition
         */
        codeAppliTechEdit: string;
        /**
         * Libellé type maquette
         */
        liblTypeMaqt: string;
        /**
         * Code technique maquette
         */
        codeTechMaqt: string;
        /**
         * Date début validité
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        e52ODateDebuVald: string;
        /**
         * Date fin validité
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        e52ODateFinVald: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.Pieco {
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
        donneeGeneral: IDonneeGeneral;
        donneesUnCaracs: Array<IDonneeUnCarac>;
        donneesDixCaracs: Array<IDonneeDixCarac>;
        donneesCinquanteCaracs: Array<IDonneeCinquanteCarac>;
        donneesNumeriques: Array<IDonneeNumerique>;
    }
    interface IElement {
        criteresAppel?: ICriteresAppel;
        donneesUtiles?: Array<IDonneeUtile>;
        ctrlManuels?: Array<ICtrlManuel>;
        piecesTiers?: Array<IPieceTiers>;
        pieceAgents?: Array<IPieceAgent>;
        segmentPrincipals?: Array<ISegmentPrincipal>;
        infoGeneriques?: Array<IInfoGenerique>;
        libelleRelatifDocuments?: Array<ILibelleRelatifDocument>;
        retourQR?: Array<Commun.Modeles.IRetourQR>;
    }
    interface IDonneeCinquanteCarac {
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
    interface IDonneeDixCarac {
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
    interface IDonneeGeneral {
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
        dateTraitementDonneeGenerale: string;
    }
    interface IDonneeNumerique {
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
    interface IDonneeUnCarac {
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
    interface IDonneeUtile {
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
    /**
     * Interface représentant la liste des modes de versement recu de pieco
     */
    interface IModeVersement {
        numeroRelatif: number;
        libelle?: string;
        code?: string;
    }
    /**
     * Interface repsentant la liste des justificatifs recu de pieco
     */
    interface IJustificatif {
        identifiant: string;
        libelle: string;
        codeIndicateurCasEcheant: string;
        codeIndicateurObligatoire: string;
        delaiAlerteRelanceClient: number;
        indiceEnvoieDossierPartage: string;
        theme: ITheme;
    }
    interface ITheme {
        code: string;
        libelle: string;
        numero: number;
    }
}

declare module DeblocageFonds.Commun.Modeles {
    interface IPopinInitialisationJustificatif {
        dateDeDerniereSaisie: string;
        montantGlobalAJustifier: string;
        dontTravauxPtzEcoPtzAJustifier: string;
        montantJustifie: string;
        dontTravauxPtzEcoPtzeJustifie: string;
        commentaires: string;
        nomUserDerniereSaisie: string;
    }
}

declare module DeblocageFonds.Commun.Modeles {
    interface IRetourQR {
        messageRetour: Array<string>;
        /**
         * Nous indique le type du message. 0 = informatif, 1 : erreur bloquante, 2 : erreur fonctionnelle, 3 : forcage, 4 : confirmation.
         */
        codeRetour: number;
        /**
         * Nous indique si l'erreur est bloquante.
         */
        isErreurBloquante: boolean;
    }
    interface IRetourPopinControle {
        titrePopin: string;
        messages: string[];
        corpsPopin: string;
    }
    interface IErreurQrCustom {
        estBloquant: boolean;
        message: string;
        objetErreurMyWay: MyWay.Services.Erreur;
    }
}

declare module DeblocageFonds.Commun.Services {
    class CreditUtilsServices {
        static $inject: any[];
        constructor();
        getSymboleDevise(code: string): string;
        genererTitreCreditBloc(numero: string, nomProduit: string, taux: string, montantInitial: string): string;
        getLibellePeriode(uniteDuree: string, multiple: boolean): string;
        getLibelleTypeLoiCredit(typeLoi: string): string;
        getTauxEnCours(listePhase: Array<Commun.Modeles.CaracteristiqueCredit.IInformationPhaseCredit>, codeOrigineCreditDossier: string): number;
        getResteAVerser(credit: Commun.Modeles.CaracteristiqueCredit.ICaracteristiqueCredit): number;
        getDateTypeLoiCredit(dateEditionOffre: string): string;
        private getLibelleDateTypeLoiCredit(code);
        getStatutDossier(codeEtatDossierEnGestion: string): string;
        getLibelleEtatCredit(libelleEtatCredit: string): string;
        getLibelleDestinationObjet(codeDestinationAutoriseeObjet: string): string;
        getLibelleCreditDouteux(code: string): string;
        private getLibellePeriodeBase(uniteDuree);
    }
}

declare module DeblocageFonds.Commun.Services {
    class DateServices {
        static $inject: any[];
        constructor();
        /**
         * Convertit une date string en Date au format YYYY-MM-DD
         * @param date
         */
        parse(date: string, template?: string): Date;
        /**
         * Convertit une date en chaine de caractères
         * @param date
         * @param template: optionnale, par défaut: DD/MM/YYYY
         */
        format(date: Date, template?: string): string;
        /**
         * Convertit une date au format DD/MM/YYYY au format YYYY-MM-DD
         * @param date
         */
        formatDateIhmToRest(date: string): string;
        /**
         * Convertit une date string en un autre template
         * @param date
         * @param template
         */
        formatToTemplate(date: string, template?: string): string;
        minDateToNull(date: Date): Date;
        /**
         * Retourne la date du jour en string via le format en paramètre
         * @param format
         */
        dateJour(format: string): string;
    }
}

declare module DeblocageFonds.Commun.Services {
    class DossierNumeriqueCreditServices {
        private restServices;
        private $q;
        static codeTypeICG: string;
        static $inject: string[];
        constructor(restServices: Services.RestServices, $q: ng.IQService);
        /**
         * Permet de savoir si un établissement est ouvert au DNC
         * @param codeEtablissement
         */
        estEtablissementOuvertAuDNC(codeEtablissement: string, dateTraitement: string): ng.IPromise<boolean>;
        /**
         * Permet de rechercher un dossier numérique crédit par dossier instruction
         * @param codeEtablissement
         * @param identifiantDossierInstruction
         */
        rechercheDossierNumeriqueCreditParDossierInstruction(codeEtablissement: string, identifiantDossierInstruction: string): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IDossierNumeriqueMetierOutput>;
        /**
         * Permet la création ou la mise à jour d'un dossier numérique crédit
         * @param codeEtablissement
         * @param codeAgent
         * @param identifiantDossierInstruction
         * @param codeFournisseur Par exemple "INCR"
         */
        creationOuMajDossierNumeriqueCredit(codeEtablissement: string, codeAgent: string, identifiantDossierInstruction: string, codeFournisseur: string, documents: Modeles.ClasseurMetier.DossNumeriqueMetier.IBlocDocm[]): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IRspnCreerOuMajDossierNumerique>;
        /**
         * Permet de récupérer la liste des codes natures documents
         * @param listesCodeDocumentsPieco
         */
        recupererListeCodesTypeDocument(listesCodeDocumentsPieco: string[]): ng.IPromise<Modeles.ParametreSignature.IParametreSignatureE52IE52O[]>;
        /**
         * Permet de récuperer les documents du dossier de partage pour le dossier passé en parametre
         * @param codeEtablissement
         * @param identifiantDossierInstruction
         */
        recupererDocumentAPartirIdentifiantExterne(codeEtablissement: string, identifiantDossierInstruction: string): ng.IPromise<Modeles.DocumentEspacePartageConsultation.IResponseGetByIdExterne>;
        /**
         * Permet de fournir un document pour une demande de document dans l'espace de partage
         * @param codeEtablissement
         * @param identifiantDossierInstruction
         */
        fournirDocumentEspacePartage(numeroAgent: string, identifiantDemande: string): ng.IPromise<Modeles.DocumentEspacePartageModification.IReponseGetDocumentFourniCanalAgence>;
    }
}

declare module DeblocageFonds.Commun.Services {
    class ErrorServices {
        static $inject: any[];
        constructor();
        /**
         * Analyse le Retour QR pour rechercher les erreurs (bloquantes ou non)
         * Retourne un objet Custom contenant les messages et un objet de Type MyWay.Services.Erreur
         * @param error
         */
        analyseQrRetour(error: Modeles.IRetourQR[]): Modeles.IErreurQrCustom;
        /**
         * Analyse le Retour QR pour affichage des messages dans une popin de controle
         * @param retourQr
         */
        analyseRetourPourPopin(retourQr: Modeles.IRetourQR[]): Modeles.IRetourPopinControle;
    }
}

declare module DeblocageFonds.Commun.Services {
    class JustificatifServices {
        private modalService;
        private serviceAgentExtended;
        private dateServices;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dateServices: Services.DateServices);
        ouvrirPopinInitialisationJustificatif(valeursParDefauts: Modeles.IPopinInitialisationJustificatif): ng.IPromise<any>;
    }
}

declare module DeblocageFonds.Commun.Services {
    class MontantUtilsServices {
        static $inject: any[];
        constructor();
        /**
         * Permet de faire une soustraction de montant et d'arrondir sans perte
         * @param montantASoustraire
         * @param montantSoustre
         * @param nombreDecimal
         */
        static soustractionMontant(montantASoustraire: number, montantSoustre: number, nombreDecimal?: number): number;
    }
}

declare module DeblocageFonds.Commun.Services {
    class MyFlowServices {
        private restServices;
        private $q;
        static $inject: string[];
        constructor(restServices: Services.RestServices, $q: ng.IQService);
        /**
         * Permet de récupérer la liste des evenements de tache MyFlow d'un dossier et de son évènement
         * @param codeEtablissement
         * @param identifiantDossierInstruction
         * @param dateTraitement
         * @param codeEvenement
         * @param codeEtatDossier
         * @param dateSignatureDossier
         */
        recupereEvenementsTacheMyFlow(codeEtablissement: number, identifiantDossierInstruction: string, dateTraitement: string, codeEvenement: string, dateSignatureDossier: string, codeProcessusSaisieInstruction: string, identifiantAgent?: string): ng.IPromise<Modeles.EvtTacheMyFlow.IEvtTacheMyFlow>;
        /**
         * Permet la création d'une demande MyFlow à partir d'une demande de déblocage de fonds
         * @param parametres
         */
        creationDemandeDeblocageMyFlow(parametres: Modeles.DemandeMultiCanal.Demande.IDonneesDemandeDeblocage): ng.IPromise<Modeles.DemandeMultiCanal.Demande.IDemande>;
        /**
         * Permet le refus ou la clôture  d'une tâche MyFlow
         * Pour un refus (code 06) il faut renseigner le libelle raison et le commentaire
         * @param codeAction
         * @param libelleRaison
         * @param commentaire
         */
        refusClotureTacheMyFlow(demande: Commun.Modeles.DemandeMultiCanal.Recherche.IDemande, codeAction: string, libelleCommentaire: string, identifiantDossierInstruction: string, codeEtablissement: string, numeroDemandeDeblocage: number, identifiantAgent: string, libelleTache: string, codeMotif: string, montant?: string): ng.IPromise<void>;
        /**
         * Cloture d'une demande MyFlow
         * @param demande
         */
        clotureDemandeMyFlow(demande: Commun.Modeles.DemandeMultiCanal.Recherche.IDemande, libelleTache: string, codeMotif: string): ng.IPromise<void>;
        private mappingDemandeRechercheEnDemande(demandeRecherche, libelleTache, codeMotif);
        private getErreurMyFlow(message);
        /**
         * Récupère les demandes MyFlow pour un dossier d'instruction
         * @param identifiantDossierInstruction
         * @param codeEtablissement
         * @param posteFonctionnelAgent
         */
        getDemandesMyFlowParDossierInstruction(identifiantDossierInstruction: string, codeEtablissement: string, posteFonctionnelAgent: string): ng.IPromise<Modeles.DemandeMultiCanal.Recherche.IDemande[]>;
        /**
         * Récupère les demandes MyFlow d'une liste pour une demande de déblocage de fonds
         * @param numeroDemandeDeblocage
         */
        getDemandesMyFlowParDemandeDeblocage(demandes: Modeles.DemandeMultiCanal.Recherche.IDemande[], numeroDemandeDeblocage: string): Modeles.DemandeMultiCanal.Recherche.IDemande[];
        private mappingObjetTacheMyFlow(codeAction, libelleTache, codeMotif, demande, identifiantAgent, libelleCommentaire?, montant?);
        private mappingClesValeurs(parametres);
        /**
         * Permet d'ajouter via le POST une demande MyFlow
         * @param demande
         */
        postDemandeMyFlow(demande: Modeles.DemandeMultiCanal.Demande.IDemande): ng.IPromise<Modeles.DemandeMultiCanal.Demande.IDemande>;
        /**
         * Permet de modifier via le PUT une demande MyFlow
         * @param demande
         */
        putDemandeMyFlow(demande: Modeles.DemandeMultiCanal.Demande.IDemande): ng.IPromise<Modeles.DemandeMultiCanal.Demande.IDemande>;
        private mappingPostDemandeMyFlow(listeClesValeurs, parametres);
        /**
         * Creation d'un objet CleValeur pour le service REST MyFlow de demande
         * @param cle
         * @param valeur
         * @param isDisplay
         */
        private cleValeurMyFlow(cle, valeur, isDisplay);
        /**
         * Retourne le code type action (06, 01, 02, etc) par son code (R, C, T, M, etc)
         * @param codeAction
         */
        private getCodeTypeActionParCodeAction(codeAction);
    }
}

declare module DeblocageFonds.Commun.Services {
    class PiecoServices {
        private restServices;
        private dateServices;
        private $q;
        private piecoUtilsService;
        static $inject: string[];
        params: Modeles.Pieco.IElement;
        constructor(restServices: Services.RestServices, dateServices: Services.DateServices, $q: ng.IQService, piecoUtilsService: Services.PiecoUtilsServices);
        /**
         * Permet de recupérer les modes de versement des crédits dans pieco à partir des informations des crédits
         * @param listeCredit
         */
        getListeModeVersement(codeEtablissement: string, listeCredit: Array<Modeles.CaracteristiqueCredit.ICaracteristiqueCredit>): ng.IPromise<Array<Modeles.Pieco.IModeVersement>>;
        /**
         * Permet de recupérer les modes de versement des crédits dans pieco à partir des informations des crédits
         * A renommer quand j'aurai compris ce qu'on doit récupérer
         * @param listeCredit
         */
        getListeJustificatifs(codeEtablissement: string, listeCredit: Array<Modeles.CaracteristiqueCredit.ICaracteristiqueCredit>): ng.IPromise<Array<Modeles.Pieco.IJustificatif>>;
        /**
         * Initialise les objets DonneesUnCaracs pour recuperer les mode de versements et retourne le tableau
         */
        private initialisationDonneesUnCaracsModeVersement(listeCredit);
        /**
         * Initialise les objets DonneesUnCaracs pour recuperer la liste des documents et retourne le tableau
         */
        private initialisationDonneesUnCaracsListeDocuments(listeCredit);
        /**
         * Initialise les objets DonneesDixCaracs pour recuperer les mode de versements et retourne le tableau
         */
        private initialisationDonneesDixCaracsModeVersement(listeCredit);
        /**
         * Initialise les objets DonneesDixCaracs pour recuperer les mode de versements et retourne le tableau
         */
        private initialisationDonneesDixCaracsListeDocuments(listeCredit);
        /**
         * Initialise les objets IDonneeNumerique pour recuperer la liste des pieces justificatives
         */
        private initialisationDonneesNumeriqueCaracsListeDocuments(listeCredit);
        /**
         * Initialise les objets DonneesCinquanteCaracs et retourne le tableau
         */
        private initialisationDonneesCinquanteCaracs();
    }
}

declare module DeblocageFonds.Commun.Services {
    class PiecoUtilsServices {
        static $inject: any[];
        constructor();
        /**
         * Retourne un objet Modeles.Pieco.IDonneeUnCarac avec les valeurs d'un reamenagement
         * @param identifiantDossier    Numéro du dossier
         * @param typeObj               Type objet financé du dossier
         * @param codeReamenagement     Code de réamenagement du crédit
         */
        getProjetReamenagement(identifiantDossier: string, typeObj: string, codeReamenagement: string): Modeles.Pieco.IDonneeUnCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeUnCarac avec les valeurs de groupement interne
         * @param identifiantDossier    Identifiant du dossier
         * @param typeObj               Type objet financé du dossier
         * @param listeCreditRattache   Liste des crédits rattaché au dossier pour le regroupement
         */
        getProjetTerrainFinance(identifiantDossier: string, typeObjetReglemente: string): Modeles.Pieco.IDonneeUnCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeUnCarac avec les valeurs de groupement interne
         * @param identifiantDossier    Identifiant du dossier
         * @param typeObj               Type objet financé du dossier
         * @param listeCreditRattache   Liste des crédits rattaché au dossier pour le regroupement
         */
        getProjetRegroupementInterne(identifiantDossier: string, typeObj: string, listeCreditRattache: Array<Modeles.CaracteristiqueCredit.ICreditRattache>): Modeles.Pieco.IDonneeUnCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec les valeurs du projet habitat
         * @param donneesCredit
         */
        getProjetHabitatFinance(identifiantDossier: string, typeObjetReglemente: string, categorieReglementAttribution: string): Modeles.Pieco.IDonneeDixCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec les valeurs du type de l'objet financé par le crédit
         * @param donneesCredit
         */
        getProjetTypeObjetFinance(identifiantCredit: string, typeObjetFinance: string): Modeles.Pieco.IDonneeDixCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeUnCarac avec les valeurs du CCMI
         * @param donneesCredit
         */
        getProjetCCMI(identifiantDossier: string, typeObjetFinance: string): Modeles.Pieco.IDonneeUnCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec les valeurs du PRJHNTEP
         * @param donneesCredit
         */
        getProjetTypeTravaux(identifiantDossier: string, codeFamille: string, typeTravaux: string): Modeles.Pieco.IDonneeDixCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec les valeurs de réglementation d'un credit
         */
        getCreditReglementation(numeroCredit: string, codeFamille: string): Modeles.Pieco.IDonneeDixCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec les valeurs de nature d'un credit
         */
        getCreditNature(credit: Modeles.CaracteristiqueCredit.ICaracteristiqueCredit, estCreditRelais: string): Modeles.Pieco.IDonneeDixCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec le code restitution du produit
         */
        getCreditRestitution(numeroCredit: string, codeRestitution: string): Modeles.Pieco.IDonneeDixCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeNumerique avec le code restitution du produit
         */
        getFinancementTotalCreditExterne(numeroCredit: string): Modeles.Pieco.IDonneeNumerique;
        /**
         * Retourne un Modeles.Pieco.IDonneeCinquanteCarac avec les informations du dossier global
         */
        getDossierGlobal(): Modeles.Pieco.IDonneeCinquanteCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeCinquanteCarac avec les informations de financement
         */
        getFinancement(): Modeles.Pieco.IDonneeCinquanteCarac;
        /**
         * Retourne un booléen pour savoir si le typeObjet passé en paramètre est un regroupement ou non
         * @param typeProjet
         */
        getTypeObjetEstRegroupement(typeProjet: string): boolean;
        getValeurReamenagement(typeProjet: string, codeReamenagement: string): string;
        getValeurRegroupementInterne(typeProjet: string, listeCreditRattache: Array<Modeles.CaracteristiqueCredit.ICreditRattache>): string;
        getValeurProjetHabitat(typeObjetReglemente: string, categorieReglementAttribution: string): string;
        getValeurProjetTerrainFinance(typeObjetReglemente: string): string;
        getValeurNature(listePhase: Array<Modeles.CaracteristiqueCredit.IInformationPhaseCredit>, codeFamille: string, estCreditRelais: string): string;
        /**
         * Permet de récupérer la valeur du PRJHCCMI à passer à pieco
         * @param typeObjetReglemente
         */
        getValeurProjetConstruction(typeObjetReglemente: string): string;
        /**
         * Permet de récupérer la valeur du PRJHNTEP à passer à pieco
         * typeTravaux équivaut à la variable CNFCTR
         * @param typeObjetReglemente
         */
        getValeurProjetNatureTravaux(codeFamille: string, typeTravaux: string): string;
        /**
         * Permet de récupérer la valeur de CI.TOTCREX.
         * Dans notre cas elle vaudra toujours 0
         */
        getValeurFinancementTotalCreditExterne(): number;
    }
}

declare module DeblocageFonds.Commun.Services {
    class PopinServices {
        private modalService;
        private $q;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, $q: ng.IQService);
        /**
         * Popin d'erreur bloquant
         * @param message Corps de la popin
         * @param titre Titre de la popin - Optionnel
         */
        popinErreur(message: string, titre?: string): ng.IPromise<void>;
        /**
         * Popin d'information
         * @param titre Titre de la popin
         * @param message Corps de la popin
         */
        popinInformations(titre: string, message: string): ng.IPromise<void>;
        /**
         * Popin de confirmation
         * @param titre Titre de la popin
         * @param message Corps de la popin
         * @param texteBoutonConfirmer Texte du bouton confirmer
         * @param texteBoutonAnnuler Texte du bouton Annuler
         */
        popinConfirmation(titre: string, message: string, texteBoutonConfirmer: string, texteBoutonAnnuler: string): ng.IPromise<void>;
    }
}

declare module DeblocageFonds.Commun.Services {
    class RestServices {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * GET les évenements de tache MyFlow
         * @param param
         */
        getEvenementsTacheMyFlow(param: Modeles.EvtTacheMyFlow.IParamGet): ng.IPromise<Modeles.EvtTacheMyFlow.IEvtTacheMyFlow>;
        /**
         * GET les demandes MyFlow
         * @param param
         */
        getRechercheDemandeMyFlow(param: Modeles.DemandeMultiCanal.Recherche.IParamGet): ng.IPromise<Modeles.DemandeMultiCanal.Recherche.IRecherche>;
        /**
         * POST la demande dans MyFlow
         * @param prestationMyFlow
         */
        postDemandeMyFlow(prestationMyFlow: Modeles.DemandeMultiCanal.Demande.IDemande): ng.IPromise<Modeles.DemandeMultiCanal.Demande.IDemande>;
        /**
         * PUT la demande dans MyFlow
         * @param prestationMyFlow
         */
        putDemandeMyFlow(prestationMyFlow: Modeles.DemandeMultiCanal.Demande.IDemande): ng.IPromise<Modeles.DemandeMultiCanal.Demande.IDemande>;
        /**
         * PUT une tâche MyFlow
         * @param param
         */
        putTacheMyFlow(param: Modeles.DemandeMultiCanal.Tache.ITache): ng.IPromise<Modeles.DemandeMultiCanal.Tache.ITache>;
        /**
         * Récupère la liste des paramètres applicatifs
         * @param param
         */
        getListerParamApplicatif(param: Modeles.ListeParamApplicatif.IParamGet): ng.IPromise<Modeles.ListeParamApplicatif.IScParamApplicatif[]>;
        /**
         * Récupère le dossier numérique d'un dossier d'instruction
         * @param param
         */
        getConsulterDossierNumerique(param: Modeles.ClasseurMetier.DossNumeriqueMetier.IParamGet): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IDossierNumeriqueMetierOutput>;
        /**
         * Permet la création ou la maj d'un dossier numérique
         * @param param
         */
        postDossierNumerique(param: Modeles.ClasseurMetier.DossNumeriqueMetier.IQstnCreerOuMajDossierNumerique): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IRspnCreerOuMajDossierNumerique>;
        /**
         * Appel la méthode getElement de pieco
         * @param params
         */
        postPiecoPieceElement(params: Modeles.Pieco.IElement): ng.IPromise<Modeles.Pieco.IElement>;
        /**
         * Appel à Contelec pour récupérer la liste des codes natures
         * @param params
         */
        postParametreSignature(params: Modeles.ParametreSignature.IQstnParametreSignatureE52IE52O): ng.IPromise<Modeles.ParametreSignature.IParametreSignatureE52IE52O[]>;
        getRecupererDocumentAPartirIdentifiantExterne(params: Modeles.DocumentEspacePartageConsultation.IParamGetByIdExterne): ng.IPromise<Modeles.DocumentEspacePartageConsultation.IResponseGetByIdExterne>;
        postFournirDocumentEspacePartage(params: Modeles.DocumentEspacePartageModification.IParamGetDocumentFourniCanalAgence): ng.IPromise<Modeles.DocumentEspacePartageModification.IReponseGetDocumentFourniCanalAgence>;
    }
}

declare module DeblocageFonds.Commun.Services {
    class UtilServices {
        static $inject: any[];
        constructor();
        /**
         * Retourne une chaine de numeros séparés par des - à partir d'un tableau de string
         * @param numeros
         */
        getNumerosParTiret(numeros: string[]): string;
        /**
         * Retourne si la chaîne de caractères ne contient que des chiffres sans caractères Alpha
         * @param chaine
         */
        estUnNombre(chaine: string): boolean;
        /**
         * Remplace les lettres d'un string par leur numero dans l'alphabet + 9 (ex: A => 10)
         * @param valeurAConvertir
         */
        convertirAlphanumeriqueEnNumeriqueMyFlow(valeurAConvertir: string): string;
    }
}

declare module DeblocageFonds.Commun.Directives {
    class MessageInformationsControleur {
        static $inject: Array<string>;
        /** Contient le message d'information. */
        message: string;
        /** Contenu du champ. */
        contenuChamp: string;
        /** Contient le maximum de caractères. */
        maxCaracteres: string;
        suffixeMessage: string;
        constructor();
        messageCompteurCaracteres: string;
    }
}

declare module DeblocageFonds.Commun.Directives {
}

declare module DeblocageFonds.Commun.Directives {
}

declare module DeblocageFonds.Commun.Services {
    interface IMotsInterdits {
        motsSensibles: string[];
        motsInterdits: string[];
    }
    class MotsInterditsServices {
        private serviceAgentExtended;
        private popinServices;
        private $q;
        motsInterdits: IMotsInterdits;
        tableMots: any;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, popinServices: Commun.Services.PopinServices, $q: ng.IQService);
        /**
         * Traitement des mots interdits
         * Affichage d'une popin en cas de présence
         * @param chaine
         * @param champ
         */
        traitementMotsInterdits(chaine: string, champ?: string): ng.IPromise<void>;
        chaineSansAccent(contenu: string): string;
        /**
         * Recherche des mots sensibles ou interdits de la chaîne dans la table
         * @param contenu
         */
        private rechercheMots(contenu);
        /**
         * Récupère les mots interdits et sensibles dans la table
         */
        recuperationMots(): ng.IPromise<void>;
    }
}

declare module DeblocageFonds.Commun.Directives {
    interface IPieces {
        titre: string;
        conformite: string;
        acquisition: boolean;
        identifiant: string;
        commentaire: string;
    }
    class PiecesTableauControleur {
        static $inject: Array<string>;
        constructor();
        valider(): void;
        afficherBoutonValider: boolean;
        tableauComplexeMultipleData: IPieces[];
        tableauComplexeMultiple: MyWay.UI.ImwTableOptions;
        onSelectionChange(selectedObject: Object): void;
    }
}

declare module DeblocageFonds.Commun.Directives {
}
