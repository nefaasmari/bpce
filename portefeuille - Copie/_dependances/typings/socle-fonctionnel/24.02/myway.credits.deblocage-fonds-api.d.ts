
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
        const montantDeblocage: string;
        const numeroDemandeDeblocage: string;
        const dateSouhaiteDemande: string;
        const dateSignatureNotaire: string;
        const destinataireDeblocage: string;
        const libelleDestinataireDeblocage: string;
        const typePersonnePhysMoral: string;
        const typeMarche: string;
        const montantResteDebloquer: string;
        const topDernierDeblocage: string;
        const topReserveDeblocage: string;
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
        const origineTraitementAutomatique: string;
        const origineMyCreditGestionNAV: string;
        const tacheFrais: string;
        const tacheHorsFrais: string;
        const annulationDemande: string;
    }
    module Code {
        const tache302Frais: string;
        const tache303HorsFrais: string;
        const origineMyCreditGestion: string;
        const origineMyCreditGestionNAV: string;
        const originePortailInternetClient: string;
        const originePortailInterneNotaire: string;
        const origineTraitementAutomatique: string;
        const typeMotif106: string;
        const myCg: string;
        const ecugest: string;
        const neo: string;
        const codeApplicationSyn: string;
        const offreConclueU: string;
        const offreEnAttenteG: string;
        const abandonDemande: string;
        const raisonEtatAbandon: string;
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

declare module DeblocageFonds.Commun.Constantes.RestUrl {
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
    const creerOuMettreAjourDossierPartage: string;
    const documentFourniCanalAgence: string;
    const emettreCreDeblocageDeFond: string;
    const justifVersementDossier: string;
}

declare module DeblocageFonds.Commun.Enum.CodeAction {
    enum JustificatifVersementDossier {
        Creation,
        Modification,
        Suppression,
    }
}

declare module DeblocageFonds.Commun.Enum {
    enum CodeFournisseur {
        INCR,
        IBDR,
    }
    enum CodeApplication {
        INCR,
        IBDR,
    }
}

declare module DeblocageFonds.Commun.Enum.Pieco {
    enum CodeProcessusMetier {
        DVFON,
        DVFOP,
        DDFO,
        DDFOP,
    }
    enum CodeTypeEntitee {
        GLOBAL_DOSSIER,
        FINANCEMENT,
        CREDIT_INTERNE,
        PROJET_HABITAT,
        PROJET,
        Emprunteur,
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
        CODE_ETABLISSEMENT,
        MARCHE,
        NATURE_FINANCEMENT,
        ETAT_DOSSIER,
        CATEGORIE_EMPRUNTEUR,
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

declare module DeblocageFonds.Commun.Enum.MyFlow {
    enum StatutDemande {
        CREEE,
        EN_COURS,
        CLOTUREE,
        CLOTUREE_AVEC_ABANDON,
        ABANDONNEE,
    }
    enum TypePersonne {
        INDETERMINE,
        PHYSIQUE,
        MORALE,
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
        topPresenceReglemente: boolean;
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
        topEditionAgence: string;
        avis?: string;
        topPresenceCollaborateur: boolean;
        typeFinancement: string;
        topTypeFinancement: string;
        topGarantie: boolean;
        typePersonne: string;
        typeMarche: string;
        montantRestantAVerser: string;
        topDernierDeblocage: boolean;
        topReserveAuDeblocage: boolean;
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
         * Code de l'application, dans notre cas INCR,IBDR
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
     * Modèle envoyé à l'espace de partage en creation ou mise à jour de dossier
     */
    interface IParamPostCreerOuMettreAjourDossierPartage {
        creerOuMettreAjourDossierPartageQstn: ICreerOuMettreAjourDossierPartageQstn;
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
    interface ICreerOuMettreAjourDossierPartageQstn {
        /**
         * Code etablissement
         */
        codeEtablissement: string;
        /**
         * Utilisateur qui créé le dossier (Sans la lettre)
         */
        agent: string;
        /**
         * Code application initiateur du dossier de partage (8 caractère)
         * INCR : Instruction de crédit
         */
        codeAppliInitiatriceDossPartg: string;
        /**
         * Identifiant du composant applicatif du catalogue GED pour définir la liste des natures autorisés
         */
        identifiantComposantApplicatif: string;
        /**
         * Identifiant propre à l'application doit être unique avec le couple (CodeApplicationInitiatrice + identifiantExterne)
         */
        identifiantExterneDossPartg: string;
        /**
         * Libellé affiché du dossier de partage
         */
        libelleDossPartg: string;
        /**
         * date de purge du dossier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        datePurge: string;
        /**
         * code type de l'identifiant externe du dossier cible
         */
        codeTypeIdntExtnDossCible: number;
        /**
         * identifiant externe du dossier cible
         */
        idntExtnDossCible: string;
        listDemandeDocumentsMAJ: Array<IDemandesDocumentsMaj>;
        /**
         * Code agent affecté au dossier de partage (facultatif)
         */
        codeAgentAffectDossierPartage: string;
        /**
         * Code EDS affecté au dossier de partage (facultatif)
         */
        codeEDSAffectDossierPartage: string;
        /**
         * Date limite fonctionnel de traitement (facultatif)
         * Type date au format yyyy-MM-dd
         */
        dateLimiteTraitement: string;
        /**
         * Code mode de gestion des délégataires 1 : seulement le ou les délégataires 2 :seulement les destinataires des demandes 3 :les délégataires et les destinataires;
         */
        modeGestDelegataire: string;
        listProprietairesDossierPartage: Array<IProprietaireDossierPartage>;
        /**
         * Liste des numéros de personne délégataires
         */
        listDelegatairesDossierPartage: Array<string>;
        listDelegataires: Array<IDelegataire>;
    }
    interface ICreerOuMettreAjourDossierPartageRspn {
        /**
         * Retourne l'identifiant du dossier.
         */
        idntDossierPartage: number;
    }
    interface IDemandesDocumentsMaj {
        /**
         * Identifiant externe de la demande de document (exemple numéro de piece PIECO)
         */
        identifiantExterne: string;
        /**
         * Type de demande de document
         * 1 : Mono-document
         * 2: Multi-document
         */
        typeDemande: string;
        /**
         * Libellé de la demande de document affiché à l'écran
         */
        libelle: string;
        /**
         * Facultatif : Description de la demande de document à échanger. Permet d'indiquer précisément ce qui est attendu
         */
        description: string;
        /**
         * Ce code indique la GED (Gestion Electronique de Documents)  cible pour l'injection du document.
         * Valeurs :
         * -'T' : GED Transitoire ;
         * -'A' : GED Archivages.
         */
        codeCritereInjection: string;
        /**
         * Code permettant de déterminer le sens de transfert de la demande du document :
         * 2 valeurs possibles :
         * - E : Entrant ==> Le document est fournit par le client en direction de la banque
         * - S : Sortant ==> Le document est founit par la banque en direction du client
         */
        codeSensTransfert: string;
        /**
         * Libellé de la catégorie de demande de document.
         * Permet d'indiquer où s'affiche la demande de document
         * Exemple Etat Civil
         */
        categorie: string;
        /**
         * Ordre d'affichage de la catégorie au sein du Totem
         */
        ordreCategorie: number;
        /**
         * Code définisant le type de porteur auquel est associé la demande document :
         * 1 : contrat
         * 2 : personne
         * 7 : client bancaire
         * etc…
         */
        codeTypeAttributaire: string;
        /**
         * Identifiant du contrat  ou de la personne ou du client bancaire
         */
        identifiantAttributairePrimaire: string;
        /**
         * identifiantAttributaireSecondaire (correspond au numéro de chrono pour les PRO)
         */
        identifiantAttributaireSecondr: string;
        /**
         * Libellé de l'attributaire affiché à l'écran
         */
        libelleAttributaire: string;
        /**
         * Identifiant extene de la demande cible
         */
        idntExtnDemCible: string;
        perimetreNature: IPerimetreNature;
        listDestinataireDocumentMaj: Array<IDestinataireDocumentMaj>;
        listDonneesRefMaj: Array<IDonneesRefMaj>;
    }
    interface IPerimetreNature {
        /**
         * Liste des codes natures autorisées pour la demande de document
         * PACN
         * CSCR
         * etc...
         */
        listCodeNature: Array<string>;
        /**
         * Sujet catalogue GED (permet d'avoir la liste des natures)
         */
        sujetCategorieGed: string;
        /**
         * Type de classeur client
         */
        typeClasseurClient: string;
    }
    interface IDestinataireDocumentMaj {
        /**
         * Code indiquant le destinataire de la demande de document
         * 1 : Personne
         * 2 : Entité Titulaire
         */
        codeDestinataireDemandeDocument: string;
        /**
         * Identifiant du destinataire de la demande de documents
         * Identifiant de la personne ou du contrat
         */
        idntDestinataireDemandeDom: string;
    }
    interface IDonneesRefMaj {
        /**
         * Clé de la référence a passer pour analyse
         */
        cle: string;
        /**
         * Valeur de la référence a passer
         */
        valeur: string;
        /**
         * Format de la référence a passer
         */
        format: string;
    }
    interface IProprietaireDossierPartage {
        /**
         * Numero client NODAPE (Obligatoire)
         */
        numeroPersonneProprietaire: string;
        /**
         * Numero chrono pour les clients pro
         * (Facultatif)
         */
        numeroChrono: string;
    }
    interface IDelegataire {
        /**
         * Type du délégataire
         */
        typeDelegataire: string;
        /**
         * Identifiant associé au type délégataire
         */
        identifiantDelegataire: string;
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
        identifiantAttributaireSecondr: string;
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
        codeFourn: string;
        referenceRegroupement: string;
        libelleRegroupement: string;
        indicateurVerrouille: boolean;
        identifiantEtablissementGce: string;
        agent: string;
        dateCreation: string;
        userCreation: string;
        dateModification: string;
        userModification: string;
        /**
         * Date de la dernière importation automatique des documents
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateAutoImportDocm: string;
        datePurge: string;
        listeDocument: Array<IDocumentOutput>;
        listeReferenceAlias: Array<IReferenceAlias>;
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
        codeAttrbSecondr: string;
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
        metadonnee: string;
        indiceEnvoiDossierPartg: string;
        listeDoc: Array<IBlocDocm>;
    }
    interface IReponseImportAutomatique {
        nbDocumentImportes: number;
    }
    interface IQueryImportAutomatique {
        codeFour: string;
        referenceRegroupement: string;
    }
    interface IReferenceAlias {
        /**
         * code application initiatrice du regroupement
         */
        codeApplInittRegr: string;
        /**
         * code reference Alias
         */
        codeRefrAlias: string;
    }
    interface IQstnAjoutReferenceAlias {
        /**
         * code etablissement de la reference originale
         */
        idEtabGceOrigine: string;
        /**
         * Code application de la reference d'origine:
         * - soit code founisseur (cas reference principale)
         * - soit code appli initirice (cas reference Alias)
         */
        codeAppliRefOrigine: string;
        /**
         * Reference de regroupement d'origine
         * - soit reference principale
         * - soit référence Alias
         */
        refrRegrOrigine: string;
        /**
         * code appli initiatrice de l'alias à creer
         */
        codeAppliRefDestination: string;
        /**
         * referenceAlias de l'alias à creer
         */
        refrAliasDestination: string;
    }
    interface IRspnAjoutReferenceAlias {
        /**
         * IdntRegr
         */
        idRegr: string;
    }
    interface IDatePurge {
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
    interface IRspnDeleteReferenceAlias {
        /**
         * IdntRegr
         */
        idRegr: string;
    }
    interface IQstnMettreAJourDatePurge {
        /**
         * idntRegr
         */
        idntRegr: string;
        /**
         * Date de Purge
         * Type date au format yyyy-MM-dd
         */
        datePurge: string;
    }
    interface IBlocDossierNumeriqueEntete {
        idntDossier: string;
        refrRegr: string;
        libelleDossier: string;
        dateCreation: string;
        dateModification: string;
        codeTypeDossier: string;
        codeFournisseur: string;
        codeIndicVerrouille: boolean;
    }
    interface IQstnRechercherDossierNumeriquePourIHM {
        /**
         * Liste des références
         */
        listeReference: Array<string>;
    }
    interface IRspnRechercherDossierNumeriquePourIHM {
        listDossierNumerique: Array<IBlocDossierNumeriqueEntete>;
    }
    interface IParamGetDossierNumeriqueMetier {
        codeFournisseur: Enum.CodeFournisseur;
        indicateurDocumentInvalide: boolean;
        listeReferenceRegroupement: string;
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

declare module DeblocageFonds.Commun.Modeles.Informationcredit {
    interface IParamInformationCredit {
        codeEtablissement: number;
        dateTraitement: string;
        identifiantCredit: string;
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
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IInformationCredit {
        credit: ICredit;
        creditsRataches: Array<ICreditRatache>;
        renegociationsProduit: Array<IRenegociationProduit>;
        retourQR: Array<IRetourQR>;
    }
}

declare module DeblocageFonds.Commun.Modeles.Justificatifs {
    interface IParametrePostJustificatifVersementDossier {
        codeAction: Enum.CodeAction.JustificatifVersementDossier;
        estMiseAJour: boolean;
        dateTraitement: string;
    }
    interface IAffectationJustificatif {
        /**
         * Identifiant du justificatif auquel est liée l'affectation
         */
        identifiantJustificatif: string;
        /**
         * Code de la classe du justificatif.
         * Permet de regrouper les pièces justificatives en fonction de l'objet sur lequel elles portent :
         * - 'C' : Convention d'assurance
         * - 'G' : Garantie
         * - 'P' : Spécifique produit
         * - 'V' : Versement
         * - 'D' : Divers
         */
        codeClasseJustificatif: string;
        /**
         * Code de la sous-classe du justificatif permettant d'affiner la notion de classe ci-dessus.
         * Il est nécessaire de consulter la rubrique pacbase pour avoir la liste exhaustive des valeurs possibles (rubrique CTFAJS dans la base PROS).
         */
        codeSsClassePieceJustificative: string;
        /**
         * Code de la nature du justificatif relatif soit à un financement, soit à un événement opérationnel ou soit aux garanties
         */
        codeNatureJustificatif: string;
        /**
         * Montant de l'affectation du justificatif
         */
        montantAffectationJustificatif: number;
        /**
         * Code de l'établissement
         */
        codeEtablissement: number;
        /**
         * Code de l'entité SEGMENT codifié sous PACBASE
         */
        codeEntite: string;
        /**
         * Identifiant générique global
         */
        identifiantGeneriqueGlobal: string;
        /**
         * Indicateur banalisé
         */
        indicateurBanalise: string;
    }
    interface IElementJustificatif {
        /**
         * Identifiant du justificatif auquel est lié l'élément
         */
        identifiantJustificatif: string;
        /**
         * Numéro séquentiel de l'élément justificatif.
         * Un justificatif peut être constitué de plusieurs éléments. Ce numéro permet de les différencier.
         */
        numeroSeqElementJustificatif: number;
        /**
         * Numéro initial d'un élément d'un justificatif, avant modification ou annulation
         */
        numeroSeqInitialElementJustif: number;
        /**
         * Code de la classe du justificatif.
         * Permet de regrouper les pièces justificatives en fonction de l'objet sur lequel elles portent :
         * - 'C' : Convention d'assurance
         * - 'G' : Garantie
         * - 'P' : Spécifique produit
         * - 'V' : Versement
         * - 'D' : Divers
         */
        codeClasseJustificatif: string;
        /**
         * Code de la sous-classe du justificatif permettant d'affiner la notion de classe ci-dessus.
         * Il est nécessaire de consulter la rubrique pacbase pour avoir la liste exhaustive des valeurs possibles (rubrique CTFAJS dans la base PROS).
         */
        codeSsClassePieceJustificative: string;
        /**
         * Code de la nature du justificatif relatif soit à un financement, soit à un événement opérationnel ou soit aux garanties
         */
        codeNatureJustificatif: string;
        /**
         * Code du statut d'un élément constituant une pièce justificative.
         * Valeurs possibles :
         * - 'I' : Initial
         * - 'C' : Complémentaire
         * - 'A' : Annulé
         */
        codeStatutElementJustificatif: string;
        /**
         * Date d'émission d'une facture, servant de justificatif à une demande de déblocage de fonds
         * Type date au format yyyy-MM-dd
         */
        dateFactureJustificatif: string;
        /**
         * Montant du justificatif fourni par le client.
         * Par exemple, lors d'une demande de déblocage de fonds, le client doit fournir certains justificatifs (par exemple une facture). Ce montant représentera alors le montant de la facture.
         */
        montantJustificatif: number;
        /**
         * Montant justifié pour un PTZ Acquisition
         */
        montantJustifiePtzAcquisition: number;
        /**
         * Montant justifié pour un PTZ Travaux
         */
        montantJustifiePtzTravaux: number;
        /**
         * Montant à verser
         */
        montantAVerser: number;
        /**
         * Nom pour une personne physique
         * Raison sociale pour une personne morale
         */
        nomRaisonSociale: string;
        /**
         * Commentaire libre sur la pièce justificatif saisi par l'utilisateur
         */
        commentaireLibreJustificatif: string;
        /**
         * Code de l'établissement
         */
        codeEtablissement: number;
        /**
         * Référence externe de la pièce justificative si elle est issue d'un organisme externe
         */
        referenceExterneJustificatif: string;
        /**
         * Indicateur banalisé
         */
        indicateurBanalise: string;
        /**
         * Date à laquelle la dernière mise à jour a été faite sur le justificatif
         * Type date au format yyyy-MM-dd
         */
        dateMajJustificatif: string;
        /**
         * Identifiant de l'utilisateur ayant effectué la dernière mise à jour sur le justificatif
         */
        idUtilisateurMajJustificatif: string;
    }
    interface IJustificatifVersementDossier {
        /**
         * Identifiant du justificatif
         */
        identifiantJustificatif: string;
        /**
         * Code de la classe du justificatif.
         * Permet de regrouper les pièces justificatives en fonction de l'objet sur lequel elles portent :
         * - 'C' : Convention d'assurance
         * - 'G' : Garantie
         * - 'P' : Spécifique produit
         * - 'V' : Versement
         * - 'D' : Divers
         */
        codeClasseJustificatif: string;
        /**
         * Libellé de la classe du justificatif
         */
        libelleClasseJustificatif: string;
        /**
         * Code de la sous-classe du justificatif permettant d'affiner la notion de classe ci-dessus.
         * Il est nécessaire de consulter la rubrique pacbase pour avoir la liste exhaustive des valeurs possibles (rubrique CDSCPJ dans la base PROS).
         */
        codeSsClassePieceJustificative: string;
        /**
         * Libellé de la sous-classe du justificatif
         */
        libelleSsClassePieceJustif: string;
        /**
         * Code de la nature du justificatif, c'est-à-dire le type de pièce proprement dit.
         * C'est le type de document.
         */
        codeNatureJustificatif: string;
        /**
         * Libellé descriptif de la nature du justificatif
         */
        libelleNatureJustificatif: string;
        /**
         * Code de la catégorie du justificatif.
         * Valeurs possibles :
         * - 'P' : Justificatif de présence
         * - 'M' : Pièce justifiant un montant
         * - 'A' : Autres
         */
        codeCategorieJustificatif: string;
        /**
         * Libellé de la catégorie du justificatif
         */
        libelleCategorieJustificatif: string;
        /**
         * Code du statut du justificatif.
         * Valeurs possibles :
         * - 'A' : Attendu - A joindre - KO
         * - 'R' : Reçu - OK
         * - 'C' : Clos
         * - [Vide] : Non demandé
         * - 'N' : Non concerné
         */
        codeStatutJustificatif: string;
        /**
         * Libellé du statut du justificatif
         */
        libelleStatutJustificatif: string;
        /**
         * Date de la dernière mise à jour du statut du justificatif
         * Type date au format yyyy-MM-dd
         */
        dateDerniereMajStatutJustif: string;
        /**
         * Code du niveau du justification, c'est-à-dire sur l'objet justifié en cas de non réception de la pièce justificative et le moment où il doit intervenir.
         * Valeurs possibles :
         * - '1' : Préliminaire (gérée que par Instruction)
         * - '2' : Préalable (avant offre)
         * - '3' : Suspensif (conditionne la date d'effet du contrat)
         * - '4' : Résolutoire (annulation du contrat en cas d'absence après un certain délai après la signature du contrat)
         */
        codeNiveauJustification: string;
        /**
         * Libellé du stade d'avancement.
         * Pour un justificatif de versement (échelle), il peut être différent de celui du justificatif
         */
        libelleStadeAvancement: string;
        /**
         * Date de début de validité
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * Montant du justificatif fourni par le client.
         * Par exemple, lors d'une demande de déblocage de fonds, le client doit fournir certains justificatifs (par exemple une facture). Ce montant représentera alors le montant de la facture.
         */
        montantJustificatif: number;
        /**
         * Pourcentage de versement que ce justificatif autorise (s'il s'agit d'une pièce de classe 'V' et de sous-classe 'A')
         */
        pourcentAutoriseVersementJustif: number;
        /**
         * Montant de l'affectation justificatif
         */
        montantAffectationJustificatif: number;
        /**
         * Montant justifié pour un PTZ Acquisition
         */
        montantJustifiePtzAcquisition: number;
        /**
         * Montant justifié pour un PTZ Travaux
         */
        montantJustifiePtzTravaux: number;
        /**
         * Montant à verser
         */
        montantAVerser: number;
        /**
         * Identifiant de l'architecte saisi pour l'expertise
         */
        identifiantArchitecte: string;
        /**
         * Nom de l'architecte saisi pour l'expertise
         */
        nomArchitecte: string;
        /**
         * Indicateur banalisé
         */
        indicateurBanalise: string;
        /**
         * Zone banalisée alphanumérique (longueur 2)
         */
        zoneBanaliseeAlphanumLongueur2: string;
        /**
         * Commentaire saisi par le gestionnaire suite à la fourniture de la pièce justificative
         */
        commentairePieceJustificative: string;
        /**
         * Référence de cette pièce justificative dans l'espace de stockage DNC (Dossier Numérique Client) si celle-ci est associée à une demande de déblocage de fonds.
         * Ce champ est limité à 50 caractères
         */
        idReferenceJustificatifNumerise: string;
        /**
         * Date de réception du justificatif dans le DNC (Dossier Numérique Client)
         * Type date au format yyyy-MM-dd
         */
        dateReceptionJustificatifDnc: string;
        /**
         * Référence externe de la pièce justificative si elle est issue d'un organisme externe
         */
        referenceExterneJustificatif: string;
        /**
         * Indique l'ordre dans lequel doit se faire la réception des pièces justificatives dans le cas où il peut y en avoir plusieurs et dans un ordre bien précis.
         * Si sa valeur est égale à zéro, il n'y a pas de contrainte.
         * Ce numéro n'est utilisé que pour les justificatifs de type autorisation de versement (V, A).
         */
        numeroOrdreClassement: number;
        /**
         * Date de création ou d'enregistrement du justificatif.
         * Lors du passage par l'interface pour les crédits en provenance de l'instruction, la date qui figure sur le crédit est initialisée à partir de la date de création (DTFCCR) en instruction.
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Date à laquelle la dernière mise à jour a été faite sur le justificatif
         * Type date au format yyyy-MM-dd
         */
        dateMajJustificatif: string;
        /**
         * Identifiant de l'utilisateur ayant effectué la dernière mise à jour sur le justificatif
         */
        idUtilisateurMajJustificatif: string;
        listeAffectations: Array<IAffectationJustificatif>;
        listeElements: Array<IElementJustificatif>;
    }
    interface IDonneeVersementDossier {
        /**
         * Identifiant du dossier
         */
        identifiantDossier: string;
        /**
         * Identifiant du dossier, propre à l'instruction
         */
        identifiantDossierInstruction: string;
        /**
         * Identifiant du crédit
         */
        identifiantCredit: string;
        /**
         * Identifiant de l'emprunteur (= entité titulaire = client bancaire)
         */
        identifiantEmprunteur: string;
        /**
         * Code catégorie de l'emprunteur
         */
        codeCategorieEmprunteur: string;
        /**
         * Libellé (= dénomination) d'un tiers
         */
        libelleTiers: string;
        /**
         * Identifiant de l'objet du déblocage de fonds
         */
        identifiantObjet: string;
        /**
         * Type d'objet réglementé (TOR).
         * C'est le niveau le plus fin du type d'objet, au sens du contrôle réglementaire
         */
        typeObjetReglemente: string;
        /**
         * Type d'objet commercialisé (TOC)
         * Les types d'objets commercialisés (TOC) sont regroupés en catégories réglementaires d'attribution (CRA).
         */
        typeObjetCommercialise: string;
        /**
         * Date à laquelle les termes contractuels prennent effet
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * Date de décision (= émission)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionOffre: string;
        /**
         * Date de cloture du dossier commercial de l'emprunteur
         * Type date au format yyyy-MM-dd
         */
        dateClotureDossier: string;
        /**
         * Date d'annulation ou de modification
         * Type date au format yyyy-MM-dd
         */
        dateAnnulationModification: string;
        /**
         * Code du département français (métropolitains et DOM-TOM)
         */
        codeDepartement: string;
        /**
         * Numéro de l'echelle utilisée pour les justificatifs de versements.
         * Les échelles, réglementaires ou commerciales, correspondent à un échelonnement du versement de fond mis à disposition par le crédit.
         * Elles sont mises en place en général lors de l'achat d'un bien immobilier en construction.
         * Ne peut être à 0 si les justificatifs sont liés à une échelle
         */
        numeroEchelle: number;
        /**
         * Libellé de l'échelle
         */
        libelleEchelle: string;
        /**
         * Libellé du type d'échelle
         */
        libelleTypeEchelle: string;
        /**
         * Code type d'assiette pour l'echelle.
         * Valeurs possibles :
         * - 'C' : Prix convenu
         * - 'E' : Montant emprunté
         */
        codeTypeAssiette: string;
        /**
         * Libellé du type d'assiette
         */
        libelleTypeAssiette: string;
        /**
         * Ce code permet d'envoyer au local le mode d'accés à la fenêtre.
         * Valeurs possibles :
         * - 'M' : Accès en création/modification
         * - 'C' : Accès en consultation seulement
         */
        codeModificationAutorisee: string;
        /**
         * Prix convenu sur une échelle de versemnts prix que paie le client au constructeur (base de garantie de livraison).
         * Il n'y a qu'un seul prix convenu dans l'opération.
         */
        prixConvenu: number;
        /**
         * Montant emprunté total du plan.
         * Il est égal au coût total de l'opération diminué de l'apport personnel, des subventions, et des concours extérieurs.
         * Remarque : Si le contrat est conclu, le montant du plan retenu deviendra le montant figurant sur le dossier dans la phase Gestion.
         */
        montantEmpruntTotalPlan: number;
        /**
         * Montant restant à justifier sur un dossier crédit, après la prise en compte d'un nouveau justificatif, pour un PTZ Acquisition
         */
        mtRestantAJustifPtzAcquisition: number;
        /**
         * Montant restant à justifier sur un dossier crédit, après la prise en compte d'un nouveau justificatif, pour un PTZ Travaux
         */
        mtRestantAJustifierPtzTravaux: number;
        /**
         * Montant restant à verser sur un dossier crédit, après la prise en compte d'un nouveau justificatif
         */
        mtRestantAVerserApresJustif: number;
        /**
         * Taux à appliquer au montant convenu pour calculer le montant des versements quand le justificatif est produit (justificatif de type échelle)
         */
        pourcFinanceSurMontantConvenu: number;
        /**
         * Code déterminant une devise selon la norme ISO
         */
        codeDevise: string;
        /**
         * Numéro relatif
         */
        numeroRelatif: number;
        /**
         * Compteur de mise à jour
         */
        compteurMiseAJour: number;
        /**
         * Indicateur banalisé
         */
        indicateurBanalise: string;
        listeJustificatifs: Array<IJustificatifVersementDossier>;
    }
    interface IRetourQR {
        /**
         * Code retour de la QR
         */
        codeRetour: number;
        /**
         * Message retour de la QR
         */
        messageRetour: Array<string>;
        /**
         * Booléen qui indique, en cas d'erreur, si celle-ci est bloquante
         */
        isErreurBloquante: boolean;
    }
    interface IVersementDossierGlobal {
        donneeVersementDossier: IDonneeVersementDossier;
        retourQR: Array<IRetourQR>;
    }
    interface IParametreGetJustificatifVersementDossier {
        numeroDossier: string;
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
        estCreditReglemente(codeFamilleControle: string): boolean;
        estDossierParticulier(codeNatureFinancement: string, codeTypeMarche: string): boolean;
        estDossierProBDR(codeNatureFinancement: string, codeTypeMarche: string): boolean;
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
        rechercheDossierNumeriqueCreditParDossierInstruction(codeEtablissement: string, identifiantDossierInstruction: string, codeAppliInttDossPartg: string): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IDossierNumeriqueMetierOutput>;
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
        recupererDocumentAPartirIdentifiantExterne(codeEtablissement: string, identifiantDossierInstruction: string, codeAppliInttDossPartg: string): ng.IPromise<Modeles.DocumentEspacePartageConsultation.IResponseGetByIdExterne>;
        /**
         * Permet de créer ou mettre à jour le dossier de partage
         * @param creerOuMettreAjourDossierPartageQstn
         */
        creerOuMettreAjourDossierPartage(creerOuMettreAjourDossierPartageQstn: Modeles.DocumentEspacePartageConsultation.ICreerOuMettreAjourDossierPartageQstn): ng.IPromise<Modeles.DocumentEspacePartageConsultation.ICreerOuMettreAjourDossierPartageRspn>;
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
        private restServices;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dateServices: Services.DateServices, restServices: Services.RestServices);
        /**
         * Permet d'appeler le service rest de justificatifVersementDossier en GET
         * @param codeAction
         * @param justificatifs
         */
        getJustificatifVersementDossier(identifiantDossierGestion: string): ng.IPromise<Modeles.Justificatifs.IVersementDossierGlobal>;
        /**
         * Permet d'appeler le service rest de justificatifVersementDossier en POST
         * @param codeAction
         * @param justificatifs
         */
        postJustificatifVersementDossier(codeAction: Enum.CodeAction.JustificatifVersementDossier, justificatifs: Modeles.Justificatifs.IDonneeVersementDossier, codeEtablissement: string): ng.IPromise<Modeles.Justificatifs.IDonneeVersementDossier>;
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
        /**
         * Permet d'arrondir sans perte
         * @param montant
         * @param nombreDecimal
         */
        static arrondirMontant(montantAArrondir: number, nombreDecimal?: number): number;
    }
}

declare module DeblocageFonds.Commun.Services {
    class MyFlowServices {
        private restServices;
        private utilServices;
        private $q;
        static $inject: string[];
        constructor(restServices: Services.RestServices, utilServices: Commun.Services.UtilServices, $q: ng.IQService);
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
        clotureDemandeMyFlow(demande: Commun.Modeles.DemandeMultiCanal.Recherche.IDemande, libelleTache: string, codeMotif: string, commentaireMotifAbandon?: string): ng.IPromise<void>;
        private mappingDemandeRechercheEnDemande(demandeRecherche, libelleTache, codeMotif);
        private getErreurMyFlow(message);
        /**
         * Récupère les demandes MyFlow pour un dossier d'instruction
         * @param identifiantDossierInstruction
         * @param codeEtablissement
         * @param posteFonctionnelAgent
         */
        getDemandesMyFlowParDossierInstruction(identifiantDossierInstruction: string, codeEtablissement: string, posteFonctionnelAgent: string): ng.IPromise<Modeles.DemandeMultiCanal.Recherche.IDemande[]>;
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
        private postEmettreCreMyFlow(demande);
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
        /**
         *  Indique si la demande MyFlow correspond au code tâche indiqué
         * @param demandeMyFlow
         * @param codeTacheDemandeMyFlow
         */
        private concerneNumeroDemandeDeblocage(demandeMyFlow, numeroDemandeDeblocage);
        /**
         *  Indique si la demande MyFlow correspond au code tâche indiqué
         * @param demandeMyFlow
         * @param codeTacheDemandeMyFlow
         */
        private concerneCodeTache(demandeMyFlow, codeTacheDemandeMyFlow);
        /**
         *  Recherche dans un tableau de demandes MyFlow celles non clôturées qui correspondent au code tache fourni et (s'il est fourni) au numéro de déblocage; non trouvé => []
         * @param demandesMyFlow
         * @param codeTacheDemandeMyFlow
         */
        private rechercheDemandesMyFlowSurCodeTacheNumeroDeblocage(demandesMyFlow, codeTacheDemandeMyFlow, numeroDemandeDeblocage?);
        /**
         * Determine, à partir de la liste d'actions à effectuer paramétrée fournie dans actionsMyFlow, et d'une liste de demandes MyFlow, ce qui doit être fait sur chacune de ces demandes
         * Retour sous forme de tableau de tuples [detailTacheMyFlow, demandeMyFlow].
         * Dans le cas d'actions de création demandeMyFlow est undefined (puisqu'une création n'est pas liée à une demande existante)
         * @param evtTacheMyFlow   : objet décrivant les actions à réaliser par type de demande MyFlow
         * @param demandesMyFlow  : liste des demandes MyFlow du dossier à traiter
         * @param numeroDemandeDeblocage : identifiant de la demande de déblocage
         */
        determineActionsParDemandeMyFlow(evtTacheMyFlow: Commun.Modeles.EvtTacheMyFlow.IEvtTacheMyFlow, demandesMyFlow: Commun.Modeles.DemandeMultiCanal.Recherche.IDemande[], numeroDemandeDeblocage: number): Array<[Commun.Modeles.EvtTacheMyFlow.IDetailMyFlow, Commun.Modeles.DemandeMultiCanal.Recherche.IDemande]>;
    }
}

declare module DeblocageFonds.Commun.Services {
    class PiecoServices {
        private restServices;
        private dateServices;
        private $q;
        private piecoUtilsService;
        private creditUtilsServices;
        static $inject: string[];
        params: Modeles.Pieco.IElement;
        constructor(restServices: Services.RestServices, dateServices: Services.DateServices, $q: ng.IQService, piecoUtilsService: Services.PiecoUtilsServices, creditUtilsServices: Commun.Services.CreditUtilsServices);
        /**
         * Permet de recupérer les modes de versement des crédits dans pieco à partir des informations des crédits
         * @param listeCredit
         */
        getListeModeVersement(codeEtablissement: string, listeCredit: Array<Modeles.CaracteristiqueCredit.ICaracteristiqueCredit>, codeNatureFinancement: string, codeTypeMarche: string): ng.IPromise<Array<Modeles.Pieco.IModeVersement>>;
        /**
         * Permet de recupérer les justificatifs de déblocage dans pieco à partir des informations des crédits
         * @param listeCredit
         */
        getListeJustificatifs(codeEtablissement: string, listeCredit: Array<Modeles.CaracteristiqueCredit.ICaracteristiqueCredit>, codeTypeMarche: string, codeNatureFinancement: string, codeEtatDossier: string): ng.IPromise<Array<Modeles.Pieco.IJustificatif>>;
        /**
         * Initialise les objets DonneesUnCaracs pour recuperer les mode de versements et retourne le tableau
         */
        private initialisationDonneesUnCaracsModeVersement(listeCredit, codeTypeMarche);
        /**
         * Initialise les objets DonneesUnCaracs pour recuperer la liste des documents et retourne le tableau
         */
        private initialisationDonneesUnCaracsListeDocuments(listeCredit, codeTypeMarche, codeEtatDossier);
        /**
         * Initialise les objets DonneesDixCaracs pour recuperer les mode de versements et retourne le tableau
         */
        private initialisationDonneesDixCaracsModeVersement(codeEtablissement, listeCredit);
        /**
         * Initialise les objets DonneesDixCaracs pour recuperer les documents et retourne le tableau
         */
        private initialisationDonneesDixCaracsListeDocuments(listeCredit, codeNatureFinancement);
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
         * Retourne un Modeles.Pieco.IDonneeUnCarac avec les valeurs de groupement interne
         * @param identifiantDossier    Identifiant du dossier
         * @param typeObj               Type objet financé du dossier
         * @param listeCreditRattache   Liste des crédits rattaché au dossier pour le regroupement
         */
        getEtatDossier(etatDossier: string): Modeles.Pieco.IDonneeUnCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec les valeurs du projet habitat
         * @param donneesCredit
         */
        getProjetHabitatFinance(identifiantDossier: string, typeObjetReglemente: string, categorieReglementAttribution: string): Modeles.Pieco.IDonneeDixCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec la valeur du code établissement
         * @param identifiantDossier
         * @param identifiantEtablissement
         */
        getEtablissement(identifiantDossier: string, identifiantEtablissement: string): Modeles.Pieco.IDonneeDixCarac;
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
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec les valeurs du MARCHE
         * @param donneesCredit
         */
        getVersementTypeMarche(identifiantDossier: string, typeMarche: string): Modeles.Pieco.IDonneeUnCarac;
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
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec le code restitution du produit
         */
        getNatureFinancement(identifiantDossier: string, natureFinancement: string): Modeles.Pieco.IDonneeDixCarac;
        /**
         * Retourne un Modeles.Pieco.IDonneeDixCarac avec le code restitution du produit
         */
        getCategorieEmprunteur(identifiantDossier: string, codeCategorieEmprunteur: string): Modeles.Pieco.IDonneeDixCarac;
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
        postEmettreCreMyFlow(demande: Modeles.DemandeMultiCanal.Demande.IDemande): ng.IPromise<any>;
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
        postCreerOuMettreAjourDossierPartage(params: Modeles.DocumentEspacePartageConsultation.ICreerOuMettreAjourDossierPartageQstn): ng.IPromise<Modeles.DocumentEspacePartageConsultation.ICreerOuMettreAjourDossierPartageRspn>;
        postFournirDocumentEspacePartage(params: Modeles.DocumentEspacePartageModification.IParamGetDocumentFourniCanalAgence): ng.IPromise<Modeles.DocumentEspacePartageModification.IReponseGetDocumentFourniCanalAgence>;
        /**
         * Permet de récupérer la liste des justificatifs de versement sur le dossier
         * @param codeEtablissement
         * @param identifiantDossierGestion
         * @param identifiantCredit
         * @param dateTraitement
         */
        getJustificatifDossier(identifiantDossierGestion: string): ng.IPromise<Modeles.Justificatifs.IVersementDossierGlobal>;
        /**
         * Permet d'enregistrer les justificatifs de deblocage de fonds
         * @param codeEtablissement
         * @param identifiantCredit
         * @param codeAction
         * @param justificatifs
         */
        postJustificatifVersementDossier(param: Modeles.Justificatifs.IParametrePostJustificatifVersementDossier, justificatifs: Modeles.Justificatifs.IDonneeVersementDossier): ng.IPromise<Modeles.Justificatifs.IDonneeVersementDossier>;
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
        /**
         * Certains caractères unicode rencontrés (copiés depuis Word en général) ne peuvent être véhiculés dans les appels REST; ils sont convertis automatiquement en '?'.
         * Cette fonction convertit ces caractères pour éviter cela.
         * @param texte
         */
        supprimerCodesUnicode(texte: string): string;
    }
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
    class MessageInformationsControleur {
        static $inject: Array<string>;
        /** Contient le message d'information. */
        message: string;
        /** Contenu du champ. */
        contenuChamp: string;
        /** Contient le maximum de caractères. */
        maxCaracteres: string;
        constructor();
        messageCompteurCaracteres: string;
    }
}

declare module DeblocageFonds.Commun.Directives {
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
