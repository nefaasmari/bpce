
declare module Avenants.Business.Modeles {
    /**
     * Librairie contenant le métier de la SPA gestion (qui est très volumineuse)
     */
    var app: any;
}

declare module Avenants.Business.Constantes {
    /**
     * Eléments nécéssaires pour la configuration lors de la création / ouverture d'un avenant
     */
    module Avenant {
        module TypeModificationCreditUnitaire {
            const quantieme: Modeles.ITypeModificationCredit;
            const financier: Modeles.ITypeModificationCredit;
            const assurance: Modeles.ITypeModificationCredit;
            const reportFinPret: Modeles.ITypeModificationCredit;
            const amenagementTemporaireEcheances: Modeles.ITypeModificationCredit;
            const garantie: Modeles.ITypeModificationCredit;
            const objet: Modeles.ITypeModificationCredit;
            const personnes: Modeles.ITypeModificationCredit;
        }
        const listeModificationCreation: Array<Modeles.ITypeModificationCredit>;
        const listeModificationOuverture: Array<Modeles.ITypeModificationCredit>;
        const listeSousTypeModificationCreditCreation: Array<Modeles.ISousTypeModificationCredit>;
    }
}

declare module Avenants.Business.Constantes.Contractualisation {
    module Refus {
        const choixRefusClient: string;
        const choixRefusEtablissement: string;
    }
    module MotifRefus {
        const codeAnnulationSimulationEtablissement: string;
        const codeActionRefusEtablissement: string;
        const codeActionRefusClient: string;
        const codeActionAccordEntrepriseClient: string;
        const codeActionAccordEtablissement: string;
        const libelleAnnulationSimulationEtablissement: string;
        const codeRefusAvenantClientSignature: string;
        const codeRefusAvenantClientSansSignature: string;
        const codeRefusAvenantEtablissementSignature: string;
        const codeRefusAvenantEtablissementSansSignature: string;
        const codeIhmAutre: string;
    }
    module Avenant {
        const codeEtablissement: string;
        const codeClient: string;
        const codeAccordTotal: string;
        const libelleAttenteDecisionEtablissement: string;
        const libelleAttenteAccordEtablissement: string;
        const libelleAttenteEditionOffre: string;
    }
    module ChoixDecision {
        const choixEdition: string;
        const choixTransformer: string;
    }
    module Documents {
        const mandat: string;
        const propositionResiliation: string;
        const propositionRenegociation: string;
        const lettrePointVente: string;
        const tableauAmortissement: string;
        const engagementCaution: string;
        const lettreEnvoi: string;
        const idDocPropositionRenegociation: string;
        const idDocPropositionResiliation: string;
        const idDocMandat: string;
        const idNoticeRevision: string;
        const idDocInfoSimulation: string;
    }
    module Statut {
        const enGestion: string;
        const enElaboration: string;
        const supprime: string;
    }
}

declare module Avenants.Business.Constantes.SignatureElectronique {
    module EvenementHisto {
        module CreationActeIDN {
            const avenant: string;
            const simulation: string;
        }
        module ValidationHierarchie {
            const avenant: string;
            const simulation: string;
        }
        module RemiseOffre {
            const avenant: string;
            const simulation: string;
        }
        module AccuseReceptionOffre {
            const avenant: string;
            const simulation: string;
        }
        /**
         * Etablissement refuse l'édition en SED (pour x Raison) : retour édition Indus ou papier
         */
        module RefusHierarchiqueRetourPapier {
            const avenant: string;
            const simulation: string;
        }
        module ActivationEspaceSignature {
            const avenant: string;
            const simulation: string;
        }
        module SignatureOffreEmprunteur {
            const avenant: string;
            const simulation: string;
        }
        /**
         * Avenant signé et en Gestion
         */
        module Conclue {
            const avenant: string;
            const simulation: string;
        }
        /**
         * Décision emprunteur: le client a refusé la SED
         */
        module AbandonSignatureClient {
            const avenant: string;
            const simulation: string;
        }
        module PersonnePeutSigner {
            const avenant: string;
            const simulation: string;
        }
        /**
         * Le lien de la signature a expiré - délai dépassé (Fermeture Dossier IDN)
         */
        module AnnulerCaduqueIDN {
            const avenant: string;
            const simulation: string;
        }
        /**
         * Avennat : anomalie validation automatique remise et signature offre
         * Simulation : erreur traitement automatique de remise et signature Mandat
         */
        module AnomalieTraitementAutomatique {
            const avenant: string;
            const simulation: string;
        }
        const tracerEligibilite: string;
    }
}

declare module Avenants.Business.Enum.Ate {
    const enum EcheanceAmenagee {
        ReportTotal = 0,
        ReportPartiel = 1,
        Nouvelle = 2,
    }
    const enum TraitementInterets {
        Capitalisation = 0,
        PremiereEcheance = 1,
    }
    const enum ImpactTa {
        MaintienDuree = 0,
        NouvelleDuree = 1,
        RetourEcheanceContractuelle = 2,
    }
}

declare module Avenants.Business.Enum {
    enum ActionManipulationElement {
        Annuler = 0,
        Modifier = 1,
        Enregistrer = 2,
        Supprimer = 3,
    }
    enum EtatManipulation {
        IsCreation = 0,
        IsModified = 1,
        ToDelete = 2,
        Unchanged = 3,
    }
    enum EtatDecision {
        Impossible = 0,
        Possible = 1,
        Effectue = 2,
    }
    /**
     * Dans le cadre de l'avenant de personnes, une des caractéristique du payeur
     */
    enum PayeurMoyenRepartition {
        QuotePart = 0,
        MontantFixe = 1,
    }
    /**
     * Pour gérer l'enchainement des pages de l'avenant (hors celui de quantième, toujours indépendant)
     */
    enum StepAvenant {
        OneIsPersonnes = 0,
        TwoIsObjet = 1,
        ThreeIsAutre = 2,
    }
}

declare module Avenants.Business.Enum {
    const enum ModeEdition {
        Electronique = 0,
        Industrielle = 1,
        Locale = 2,
    }
    const enum TypeDocumentsEdition {
        Offre = 1,
        Avenant = 2,
        Proposition = 3,
        Annexe = 4,
        LettreAvenant = 5,
    }
    const enum ContractualisationAction {
        SimulationTransformation = 0,
        SimulationEditionLocale = 1,
        AvenantDecision = 2,
        EditionLocale = 3,
        EditionIndustrielle = 4,
        EditionSed = 5,
        Refus = 6,
    }
    class JustificatifStatut extends MyWay.Services.StringEnum {
        static attendu: JustificatifStatut;
        static recu: JustificatifStatut;
        static clos: JustificatifStatut;
    }
}

declare module Avenants.Business.Enum {
    /**
     * Avenant de taux, il est possible de rechercher des données calculées selon des données saisie
     * Cet enum permet de dire quelle donnée est saisie en entréee et impactes les calculs
     */
    const enum EntreeCalculatricePret {
        DureeResiduelle = 0,
        Echeance = 1,
        Taux = 2,
        MontantCrd = 3,
    }
    const enum TypeCalculAjustementEcheancesTaux {
        NonRenseigne = 0,
        ModificationEcheances = 1,
        ModificationDuree = 2,
        SaisieLibre = 3,
        ModificationDureeEcheance = 4,
        ModificationMontantDuree = 5,
    }
    enum TypeFrais {
        FraisPreleves = 0,
        FraisIntegresCrd = 1,
    }
    const enum AjoutAutreMontantCrd {
        impayes = 0,
        montantLibre = 1,
        nonCoche = 2,
    }
}

declare module Avenants.Business.Enum {
    const enum FormeContratGarantie {
        SousSeingPrive = 0,
        FormeAuthentique = 1,
    }
    const enum ObjetPorteGarantie {
        ObjetFinancement = 0,
        AutreObjet = 1,
        SansObjet = 2,
    }
    const enum MasqueDefinitionObjetGarantie {
        FSDGAE = 0,
        FSDGA4 = 1,
        FSDGAD = 2,
        FSDGAC = 3,
    }
    const enum QualiteEmplacementObjetPorteGarantie {
        Banal = 0,
        Recherche = 1,
    }
    const enum NatureBonObjetPorteGarantie {
        AOrdre = 0,
        AuPorteur = 1,
    }
}

declare module Avenants.Business.Enum {
    enum StatutPhase {
        Passee = 0,
        EncoursOuFuture = 1,
    }
    enum TypeFinancement {
        Obligatoire,
        Facultatif,
        Interdit,
        Inconnu,
    }
    enum ModeCalculTaux {
        TauxFixe = 0,
        TauxIndexe = 1,
        TauxAppel = 2,
    }
    enum StatutAbsorption {
        TotalementAbsorbe,
        PartiellementAbsorbe,
        PasAbsorbe,
    }
}

declare module Avenants.Business.Enum {
    enum EvenementHistoSED {
        CreationActeIDN = 0,
        ValidationHierarchie = 1,
        RemiseOffre = 2,
        AccuseReceptionOffre = 3,
        RefusHierarchiqueRetourPapier = 4,
        ActivationEspaceSignature = 5,
        SignatureOffreEmprunteur = 6,
        Conclue = 7,
        AbandonSignatureClient = 8,
        PersonnePeutSigner = 9,
        AnnulerCaduqueIDN = 10,
        AnomalieTraitementAutomatique = 11,
        TracerEligibilite = 12,
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    interface IDataBuildFluxCaraFinan {
        idEmprunteur: string;
        idProduit: string;
        montantActualiseCredit: number;
        dureeCredit: number;
        uniteDureeCredit: string;
        listePhaseCaraFinan: Array<RestAvenant.CaracteristiqueFinan.IPhase>;
        listePhaseGaranties: Array<RestAvenant.Garanties.IPhase>;
    }
    /**
     * Pour construire les flux REST, il est nécéssaire d'avoir des informations du crédit, c'est ici qu'elles sont centralisées
     */
    class DataBuildFluxCaraFinanBuilder {
        static getResult(caracteristiqueCredit: RestGestion.CaracteristiqueCredit.ICaracteristiqueCredit, creditOrigine: RestGestion.InformationCredit.ICredit, creditAvenant: RestAvenant.CaracteristiqueFinan.ICredit, creditChangePdt: RestGestion.InformationCredit.ICredit): IDataBuildFluxCaraFinan;
        private static getIdProduit(creditAvenant, creditOrigine, creditCustomChangementProduit);
        private static getUniteDureeCredit(creditAvenant, creditOrigine);
        /**
         * Le changement de produit prime en création pour utiliser les phases d'init.
         * En modification ou en duplication, on utilise les informations du credit de l'avenant créé.
         * Sinon on utilise les informations du credit d'origine.
         */
        private static getListePhase(creditOrigine, creditAvenant, creditChangePdt);
        private static getListePhaseGaranties(creditOrigine, creditAvenant, creditChangePdt);
        private static getPhasesPourAppel(creditOrigine);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Utilisé pour configurer la céation d'un avenant (popin)
     */
    interface ITypeCreationAvenant {
        typeAvenant: Commun.Enum.TypeAvenant;
        label: string;
        listeTypeModificationDispo: Array<Commun.Enum.ModificationCredit>;
        listeSousTypeAvenantDispo: Array<Commun.Enum.CodeSousTypeAvenant>;
        disabled: boolean;
        saisieInterdite: boolean;
        messageHelp: string;
    }
    interface ITypeModificationCredit {
        type: Commun.Enum.ModificationCredit;
        label: string;
        checked: boolean;
        disabled: boolean;
        saisieInterdite: boolean;
        messageHelp: string;
    }
    interface ISousTypeModificationCredit {
        type: Commun.Enum.CodeSousTypeAvenant;
        label: string;
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Objet de retour suite à la VOLONTE de créer un avenant ou une simulation
     */
    interface ICreationAvenant {
        criteresCreation: Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan.ICriteresCreation;
        criteresCreationChangePdt: Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan.ICriteresCreationChangePdt;
        criteresCreationGar: Rest.Modeles.DossierCreditAvenant.CaracteristiqueGar.ICriteresCreation;
        creationPossible: boolean;
    }
    /**
     *  Objet de retour suite à la confirmation de la création, enregistrement
     */
    interface IValidationCreationAvenant {
        numeroAvenant: number;
        numeroSimulation: number;
        listeMessage: Array<string>;
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Utilisée pour le chargement dans la page avenant
     */
    interface IRetourHabilitationsCreationAvenant {
        habilitationsCreationAvenant: IHabilitationsCreationAvenant;
        listeInformations: Array<string>;
    }
    /**
     * Habilitations pour le bouton de création d'une simulation ou d'un avenant
     */
    interface IHabilitationsCreationAvenant {
        habilitationCreation: boolean;
        habilitationAvenantSimul: boolean;
        habilitationAvenantTech: boolean;
        habilitationAvenantRecv: boolean;
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Utilisée pour la séléction du type d'avenant créé
     */
    interface IHabilitationTypeAvenant {
        modificationCredit: Commun.Enum.ModificationCredit;
        habilitation: string;
        estHabilite: boolean;
    }
}

declare module Avenants.Business.Modeles {
    interface ISyntheseImpactAvenant {
        designationPersonne: string;
        differenceCout: number;
        differenceCotisation: number;
        devise: string;
        creditAvant: ISyntheseImpactAvenantAffichage;
        creditApres: ISyntheseImpactAvenantAffichage;
        isCreditInPrefinancement: boolean;
        montantOrigineCredit: number;
    }
    interface ISyntheseImpactAvenantAffichage {
        idCredit: string;
        libelleLongProduit: string;
        montantActualise: number;
        libelleUniteDuree: string;
        apelisable: string;
        dateEffet: string;
        taux: number;
        tauxMaxi?: number;
        tauxFixe?: number;
        dureeRestante: string;
        echeance: number;
        echeanceMaxi?: number;
        accessoire: number;
        coutTotal: number;
        coutTotalAccessoire: number;
        taea: number;
        taeg: number;
        coutMensuel: number;
        montantAvecAssurance: number;
        codeDevise: string;
        designationPersonne: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    /**
     * Formate un accessoire RestAvenant.AccessoireAnnexe.IAccessoire en RestAvenant.CaracteristiqueFinan.IAccessoireParConvention
     */
    class AccessoireAnnexeadapter implements RestAvenant.CaracteristiqueFinan.IAccessoireParConvention {
        codeEtablissement: number;
        identifiantConvention: string;
        codeTypePhase: string;
        numeroPhase: number;
        numRelatifPhaseTypePhaseProduit: number;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        codeModeCalculAccessoire: string;
        montantConseilleAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        mtPlafondTrancheCalculAccess: number;
        tauxConseilleAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        mtPlafondTrancheCalculAccess1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        mtPlafondTrancheCalculAccess2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        mtPlafondTrancheCalculAccess3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        mtPlafondTrancheCalculAccess4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcule: number;
        montantMaximumAccessoireCalcule: number;
        tauxAccessoirePersonnesAgees: number;
        mtPasMontantAccessoire: number;
        regleAppelAccessoireAperiodique: string;
        libelleStandard: string;
        codeTypeAssietteCalculAccess: string;
        dureeApplicationAccessoire: number;
        periodiciteApplicationAccess: string;
        numeroRegleApplicationAccess: string;
        indicateurBanalise: string;
        numeroTranche: number;
        ageMinimumEntreeAssurance: number;
        ageMaximumEntreeAssurance: number;
        dureeApplicationAccess: number;
        uniteDureeApplicAccess: string;
        codeTypeApplicationAccessoire: string;
        cdCommissionIntervenantExterne: string;
        nbJoursAnneeNumerateur: number;
        nbJoursAnneeDenominateur: number;
        constructor(a: RestAvenant.AccessoireAnnexe.IAccessoire, codeTypePhase: string, numeroPhase: number);
    }
}

declare module Avenants.Business.Modeles {
    import RestPersonne = Avenants.Rest.Modeles.DossierCreditAvenant.Personnes;
    import RestPersonneEmprunteur = Avenants.Rest.Modeles.DossierCreditGestion.PersonneEmprunteur;
    import RestTiersLies = Avenants.Rest.Modeles.Tiers.TiersLies;
    class PersonneEmprunteurAdapater {
        /**
         * Formate une personne de type DossierCreditGestion.PersonneEmprunteurs.IPersonneEmprunteur en DossierCreditAvenant.Personnes.IPersonneEmprunteur
         */
        static getPersonneEmprunteurByRestPersonneEmprunteur(p: RestPersonneEmprunteur.IPersonneEmprunteur): RestPersonne.IPersonneEmprunteur;
        /**
         * Formate une personne de type Tiers.TiersLies.ITiersLies en DossierCreditAvenant.Personnes.IPersonneEmprunteur
         */
        static getPersonneEmprunteurByRestTiersLies(t: RestTiersLies.ITiersLies): RestPersonne.IPersonneEmprunteur;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantService = Avenants.Rest.Modeles.AvenantCreditService;
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    class CreditCalculetteAdapter implements RestAvenantService.AjustementEcheances.ICreditIn {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        identifiantProduit: string;
        libelleLongProduit: string;
        libelleTiers: string;
        dateEffet: string;
        montantEcheance: number;
        montantOrigineCredit: number;
        codeDevise: string;
        dureeCredit: number;
        uniteDureeCredit: string;
        dateEcheance: string;
        tauxNominalCredit: number;
        dateMiseRecouvrementZero: string;
        codeModeExpressionTaux: string;
        codeTauxCreditDirecteur: string;
        codeCristallisationTauxInteret: string;
        codeActionPourMiseAJour: string;
        montantEcheanceMER: number;
        montantFraisGestion: number;
        montantArrieresIncorporesCrd: number;
        codeTraitementFinVersement: string;
        numeroQuantiemeDateEcheance: number;
        codeIndiceNominal: string;
        margeAppliquerSurTauxNominal: number;
        montantCapitalRestantSurCredit: number;
        codeTypeRecalculTA: string;
        dateCreation: string;
        dateFinPrefinancementReelle: string;
        codeIntegrationFraisCrd: string;
        identifiantProfilRenegociation: string;
        codeTypeAvenant: string;
        codeTypeModificationCredit: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        numeroModaliteRembAnticipe: number;
        tauxIndemniteRA: number;
        tauxInteretPrefinancement: number;
        codeCreditSecurisable: string;
        dateFinCredit: string;
        codePresenceRevisionSurCredit: string;
        montantIntcompsurCR: number;
        cdTypeArrieresIncorporeCrd: string;
        typeLoi: string;
        nbMaxiPeriodeAllongPourRevision: number;
        nbMaxiPerallsortieCptCourant: number;
        nbMaxiPerallongPourModulation: number;
        mtCapitalRestantSurCredit: number;
        codeCategorieEmprunteur: string;
        typeObjetFinanceGaranti: string;
        montantActualiseCredit: number;
        montantGlobalGarantiCredit: number;
        codeSousTypeAvenantRecouvrement: string;
        codeNatureFinancement: string;
        codeTypeMarche: string;
        dateSignature: string;
        dateEffetInitialeLAvenant: string;
        dateDecisionEmission: string;
        dureeAjusteeCreditSuiteRecalcul: number;
        dateSaisieLEvenement: string;
        dateEmission: string;
        etatBrancheAccessoireEdgAvenant: string;
        delaiMinimumAcceptation: number;
        delaiRetractation: number;
        commentaireProduits: string;
        montantMAfondsDemandees: number;
        codeEcheancierVersemcontractuel: string;
        codeTypePretCombine: string;
        codePresenceServiceObjet: string;
        existenceAccessoireBonMajTaux: string;
        cumulDesBonifsMajorations: number;
        codeIndicateurIntegrationCrd: string;
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
        phaseIns: Array<RestAvenantService.AjustementEcheances.IPhaseIn>;
        constructor(credit: RestInfoCredit.ICredit);
        private getPhaseIns(phases);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantService = Avenants.Rest.Modeles.AvenantCreditService;
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    class PalierTauxInteretCalculetteAdapter implements RestAvenantService.AjustementEcheances.IPalierTauxInteret {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroPhase: number;
        numeroRelatif: number;
        numeroPremiereEcheancePalier: number;
        numeroDerniereEcheancePalier: number;
        codeIndice: string;
        margeAppliquerSurTaux: number;
        tauxInteretPalier: number;
        typeRemboursement: string;
        uniteDureePhase: string;
        numeroRelatif1: number;
        numeroRelatifSimulationAvenant: number;
        numeroRelatifPalierProduit: number;
        noPhaseCreditProchaineRevision: number;
        numeroRelatif2: number;
        elementModifiableParAvenant: string;
        cdModifCaracteristfinancieres: string;
        codeOccurAbsorbeePhasePalier: string;
        tauxProgressionDesEcheances: number;
        periodiciteApplicProgreEcheance: string;
        constructor(palierTauxInteret: RestInfoCredit.IPalierTauxInteret);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantService = Avenants.Rest.Modeles.AvenantCreditService;
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    class PhaseCalculetteAdapter implements RestAvenantService.AjustementEcheances.IPhaseIn {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroPhase: number;
        codeTypePhase: string;
        numRelatifPhaseTypePhaseProduit: number;
        libelleLongTypePhase: string;
        dureeInitialePhaseCredit: number;
        dureeResiduelleCredit: number;
        uniteDureePhase: string;
        tauxNominalPhase: number;
        codeTauxDesPaliersCalcules: string;
        tauxMoyenPhaseCredit: number;
        modeCalculAmortissement: string;
        quotiteCapitalAmortir: number;
        periodiciteMERamortissement: string;
        periodiciteCalculInterets: string;
        dateFinPrefinancementInitiale: string;
        codeIndiceNominal: string;
        margeAppliquerSurTaux: number;
        typeIndexationTaux: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        periodiciteMERInterets: string;
        numeroJeuIndicesRevision: number;
        noPhaseCreditProchaineRevision: number;
        elementModifiableParAvenant: string;
        modeCapitRecouvInterets: string;
        cdModifCaracteristfinancieres: string;
        codeOccurAbsorbeePhasePalier: string;
        partieFixeUnTauxComposite: number;
        nbJoursDansAnneeDenominateur: number;
        nbJoursDansAnneeNumerateur: number;
        calculInteretsEnJoursReels: string;
        prelevementEnFinPhase: string;
        codeTypeEcretage: string;
        palierTauxInterets: Array<RestAvenantService.AjustementEcheances.IPalierTauxInteret>;
        constructor(phase: RestInfoCredit.IPhase);
        private getPalierTauxInterets(palierTauxInterets);
    }
}

declare module Avenants.Business.Modeles {
    import RestCaracteristique = Rest.Modeles.DossierCreditAvenant.Caracteristique;
    class RestCaracteristiqueHistoBuilder {
        static getHistoMiseAJourForTopEligibilite(avenantResume: Modeles.IAvenantResume): RestCaracteristique.IHistoMiseAJour;
        static getHistoMiseAJourForAnnulation(avenantResume: Modeles.IAvenantResume, evenementHistoSED: Enum.EvenementHistoSED, dossierIdnAcloture: string, motif: string): RestCaracteristique.IHistoMiseAJour;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    import RestGestionInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    class RestGarantiesPhaseBuilder {
        /**
         * Pour récupérer le flux des garanties il est nécessaire de générer les phases à partir d'infoCredit
         */
        static getPhaseForInit(p: RestGestionInfoCredit.IPhase, isChangementProduit: boolean): RestAvenantGaranties.IPhase;
        static getPhaseForInitCaraFinan(p: RestCaraFinan.IPhase): RestAvenantGaranties.IPhase;
    }
}

declare module Avenants.Business.Modeles {
    import RestJustificatifAssurance = Avenants.Rest.Modeles.DossierCreditGestion.JustifAssurance;
    /**
     * Construction des éléments de assurance (IAssuranceExistante) pour la création d'un avenant
     */
    class JustificatifAssuranceBuilder {
        static getDonneeAssurance(a: IAssuranceResume, j: IJustificatifsAssurance, dateTraitement: string): RestJustificatifAssurance.IDonneeAssurance;
        private static getJustificatifAssurance(j, dateTraitement);
        static getCodeAction(etatManipulation: Enum.EtatManipulation): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestJustificatifGarantie = Avenants.Rest.Modeles.DossierCreditGestion.JustificatifGarantie;
    /**
     * Construction des éléments de garantie (IGarantieExistante) pour la création d'un avenant
     */
    class JustificatifGarantieBuilder {
        static getDonneeGarantie(g: IGarantieResume, j: IJustificatifGarantie, dateTraitement: string): RestJustificatifGarantie.IDonneeGarantie;
        private static getJustificatifGarantie(j, dateTraitement);
        static getCodeAction(etatManipulation: Enum.EtatManipulation): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    abstract class AbstractAccessoire implements IAccessoire {
        private _devise;
        detailAccessoire: IDetailAccessoire;
        ligneDetail: string;
        etatManipulationAccessoire: Enum.EtatManipulation;
        isElementCalculPresentInFlux: boolean;
        couleurTuile: string;
        accessoireParConvention: RestAvenant.CaracteristiqueFinan.IAccessoireParConvention;
        idIhm: number;
        isPeriodique: boolean;
        titreNumPhase: string;
        libelleTypePhase: string;
        libelleTypeAssiette: string;
        libelleTypeAccessoire: string;
        libelleStandard: string;
        numeroPhase: number;
        numeroRelatif: number;
        codeRoleCreditAvenant: string;
        codeTypePhase: string;
        identifiantAssurance: string;
        numRelatifPhaseTypePhaseProduit: number;
        codeTypeAssietteCalculElement: string;
        numeroRegleApplicationElement: string;
        periodiciteApplicationElement: string;
        /**
         * Selon le type de l'accessoire, l'affichage est différent (tuile)
         */
        titreTuile: string;
        ligne1Tuile: string;
        ligne2Tuile: string;
        ligne3Tuile: string;
        ligne4Tuile: string;
        constructor(idIhm: number, accessoireCatalogue: RestAvenant.CaracteristiqueFinan.IAccessoireParConvention, eltCalcul: RestAvenant.CaracteristiqueFinan.IElementCalculAccessoire, periodiciteCalculInteretsByPhase: string, devise: string);
        setListeTauxChoix(withExtensionVieuxSelected: boolean): void;
        /**
         * Les propriétés de l'accessoire sont modifiées
         */
        setTauxMontant(taux: number, montant: number, montantContractuel?: number): void;
        /**
         * Indique que l'accessoire est à modifier (dans le flux)
         */
        setAccessoireToModified(): void;
        private getPeriodicite(accessoireCatalogue, eltCalcul, periodiciteCalculInteretsByPhase);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class AccessoireAnnexe extends AbstractAccessoire implements IAccessoireAnnexe {
        numeroRelatif: number;
        codeSousTypeAccessoireCompl: string;
        codeAppelReversementTiers: string;
        codeAccessoireCalculTEG: string;
        codeAppelLecheance: string;
        codeNatureAccessoire: string;
        codeModeCalculAccessoire1: string;
        regleDateDebutApplicatAccess: string;
        regleDateDebutAppliAccCatalogue: string;
        regleEvenementDeclench1erAppel: string;
        indicateurAccessoireObligatoire: string;
        indicateurAccessoireValide: string;
        indicateurAccessoireAnnuleAv: string;
        indicAccessoireCreeParAvenant: string;
        constructor(idIhm: number, accessoireAnnexeConstructorData: IAccessoireAnnexeConstructorData, accessoireParConvention: RestAvenant.CaracteristiqueFinan.IAccessoireParConvention, periodiciteCalculInteretsByPhase: string, isCreationAccessoire: boolean, devise: string);
        /**
         * Surcouche des méthodes abstract accessoire pour afficher les tuiles correctement
         */
        texteMarquage: string;
        titreTuile: string;
        ligne1Tuile: string;
        ligne2Tuile: string;
        ligne3Tuile: string;
        ligne4Tuile: string;
        private getCouleurTuile(isCreationAccessoire);
        private getDetailAccessoire(a, elt, devise);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class AccessoireAssurance extends AbstractAccessoire implements IAccessoireAssurance {
        idAssuranceIhm: number;
        codeTypeAccessoireConvention: string;
        codeTypeAccessoire: string;
        codeModeCalculAccessoire: string;
        libelleLongTranche: string;
        constructor(idIhm: number, idAssuranceIhm: number, accessoireParConvention: RestAvenant.CaracteristiqueFinan.IAccessoireParConvention, eltCalculAccessoire: RestAvenant.CaracteristiqueFinan.IElementCalculAccessoire, codeTypeAccessoireConvention: string, periodiciteCalculInteretsByPhase: string, devise: string);
        private getLibelleLongAccessoire(codeTypeAccessoireConvention, a);
        private getDetailAccessoire(a, elt, devise);
    }
}

declare module Avenants.Business.Modeles {
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    class AccessoireConventionBuilder {
        static getAccessoireConvention(accessoireParConvention: RestCaraFinan.IAccessoireParConvention, numeroPhase: number, elementCalculAccessoire: RestCaraFinan.IElementCalculAccessoire): RestCaraFinan.IAccessoireParConvention;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class AccessoireGarantie extends AbstractAccessoire implements IAccessoireGarantie {
        modeComptaRecouvraccessoire: string;
        indicAccessoireCreeParAvenant: string;
        regleAppelAccessoireAperiodique: string;
        codeTypologieAccessoire: string;
        constructor(idIhm: number, accessoireParConvention: RestAvenant.Garanties.IAccessoireConventionCatalogue, eltCalculGarantie: RestAvenant.Garanties.IElementCalculGarantie, periodiciteCalculInteretsByPhase: string, devise: string, isCreationAccessoire: boolean);
        private getDetailAccessoire(a, elt, devise);
    }
}

declare module Avenants.Business.Modeles {
    class AccessoireHelper {
        static getCouleurTuile(detailPrincipal: IDetailAccessoirePrincipal): string;
        static getMontantPlafond(mtPlafondTrancheCalculAccessElementCalculAccessoire: number, mtPlafondTrancheCalculAccessAccessoireParConvention: number): number;
        static getLigneDetail(detailPrincipal: IDetailAccessoirePrincipal, devise: string): string;
        static getLigneDetailComplement(detailPrincipal: IDetailAccessoirePrincipal, devise: string): string;
    }
}

declare module Avenants.Business.Modeles {
    interface IAccessoireAssurance extends IAccessoire {
        idAssuranceIhm: number;
        codeTypeAccessoireConvention: string;
        codeTypeAccessoire: string;
        codeModeCalculAccessoire: string;
        libelleLongTranche: string;
    }
    interface IAccessoireGarantie extends IAccessoire {
        modeComptaRecouvraccessoire: string;
        indicAccessoireCreeParAvenant: string;
        regleAppelAccessoireAperiodique: string;
        codeTypologieAccessoire: string;
    }
    interface IAccessoireAnnexe extends IAccessoire {
        codeSousTypeAccessoireCompl: string;
        codeAppelReversementTiers: string;
        codeAccessoireCalculTEG: string;
        codeAppelLecheance: string;
        codeNatureAccessoire: string;
        codeModeCalculAccessoire1: string;
        regleDateDebutApplicatAccess: string;
        regleDateDebutAppliAccCatalogue: string;
        regleEvenementDeclench1erAppel: string;
        indicateurAccessoireObligatoire: string;
        indicateurAccessoireValide: string;
        indicateurAccessoireAnnuleAv: string;
        indicAccessoireCreeParAvenant: string;
    }
    interface IAccessoireAnnexeConstructorData {
        montant: number;
        taux: number;
        numeroRelatif: number;
        codeSousTypeAccessoireCompl: string;
        codeAppelReversementTiers: string;
        codeAccessoireCalculTEG: string;
        codeAppelLecheance: string;
        codeNatureAccessoire: string;
        codeModeCalculAccessoire1: string;
        regleDateDebutApplicatAccess: string;
        regleDateDebutAppliAccCatalogue: string;
        regleEvenementDeclench1erAppel: string;
        indicateurAccessoireObligatoire: string;
        indicateurAccessoireValide: string;
        indicateurAccessoireAnnuleAv: string;
        indicAccessoireCreeParAvenant: string;
    }
    /**
     * Commun à tous les types d'accessoires (Assurance et Garantie)
     */
    interface IAccessoire {
        idIhm: number;
        isPeriodique: boolean;
        detailAccessoire: IDetailAccessoire;
        titreNumPhase: string;
        libelleTypePhase: string;
        libelleTypeAccessoire: string;
        libelleTypeAssiette: string;
        libelleStandard: string;
        accessoireParConvention: Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan.IAccessoireParConvention;
        numeroPhase: number;
        numeroRelatif: number;
        codeRoleCreditAvenant: string;
        codeTypePhase: string;
        identifiantAssurance: string;
        numRelatifPhaseTypePhaseProduit: number;
        codeTypeAssietteCalculElement: string;
        numeroRegleApplicationElement: string;
        periodiciteApplicationElement: string;
        titreTuile: string;
        ligne1Tuile: string;
        ligne2Tuile: string;
        ligne3Tuile: string;
        ligne4Tuile: string;
        ligneDetail: string;
        couleurTuile: string;
        etatManipulationAccessoire: Enum.EtatManipulation;
        isElementCalculPresentInFlux: boolean;
        setListeTauxChoix(withExtensionVieuxSelected: boolean): void;
        setTauxMontant(taux: number, montant: number, montantContractuel: number): void;
        setAccessoireToModified(): void;
    }
}

declare module Avenants.Business.Modeles {
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    class AssuranceHelper {
        static getTypeAssurance(codeAssuranceObligatoire: string): Commun.Enum.TypeAssurance;
        static isPhaseAvailable(p: RestCaraFinan.IPhase, c: RestCaraFinan.IConventionAssurance): boolean;
        static getMotifDeliaison(estAssuranceExterne: boolean, dateTraitement: Date, dateMER0Credit: Date): Commun.Enum.MotifDeliaisonAssurance;
        static getCompagnie(compAss: RestCaraFinan.ICompagnieAssurance): Modeles.ICompagnieApplicable;
        static getMotifReserve(motif: RestCaraFinan.IMotifReserveOuExclusion): IReserveExclusion;
    }
}

declare module Avenants.Business.Modeles {
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    class Assurance implements IAssurance {
        private _personneSelected;
        private _compagnieSelected;
        private _conventionSelected;
        private _dataListeRisque;
        private _modeCalculByQuotite;
        private _libelleHelpQuotite;
        private _modeCalculByMontant;
        private _libelleHelpMontant;
        private _showExtensionPersonnesAgees;
        private _extensionPersonnesAgees;
        private _showLibelleAssuranceExterne;
        private _datePriseEnCharge;
        private _dateFinPriseEnCharge;
        private _listeComposantes;
        private _listeComposantesSocleRetenues;
        private _listeComposantesOptionRetenues;
        private _devise;
        private _dateFinCredit;
        private _dateEffet;
        private _dateTraitement;
        private _dateEmission;
        private _dataForAssurance;
        private _creditInfos;
        private _phasesByCreditCaraFinan;
        private _isChangementProduit;
        private _phaseModifiables;
        idIhm: number;
        etatManipulation: Enum.EtatManipulation;
        isCreationFirstEdition: boolean;
        titre: string;
        identifiant: string;
        statut: string;
        dataListePersonne: Array<IPersonneAssurableGarant>;
        dataListeCompagnie: Array<ICompagnieApplicable>;
        risque: Commun.Enum.RisqueAssurance;
        libelleAssuranceExterne: string;
        typeAssurance: Commun.Enum.TypeAssurance;
        isDatePriseEnChargeEditable: boolean;
        quotite: number;
        quotiteIncluseTeg: number;
        quotiteNonInclusTeg: number;
        montant: number;
        dataListeReserveExclusion: Array<IReserveExclusion>;
        reserveSelected: IReserveExclusion;
        beneficiaireAvantVersement: string;
        refExterne: string;
        showMotifDeliaison: boolean;
        motifDeliaison: Commun.Enum.MotifDeliaisonAssurance;
        listeAccessoire: Array<IAccessoireAssurance>;
        modeEdition: boolean;
        codeActionPourMiseAJour: string;
        codeAncienneteAssuranceGarantie: string;
        isPhaseEnCoursPeriodiciteScinde: boolean;
        isAvenantPeriodicite: boolean;
        codeAssuranceObligatoireInit: String;
        personneSelected: IPersonneAssurableGarant;
        compagnieSelected: ICompagnieApplicable;
        conventionSelected: IConventionApplicable;
        showExtensionPersonnesAgees: boolean;
        showLibelleAssuranceExterne: boolean;
        extensionPersonnesAgees: boolean;
        modeCalculByQuotite: boolean;
        libelleHelpQuotite: string;
        modeCalculByMontant: boolean;
        libelleHelpMontant: string;
        datePriseEnCharge: Date;
        dateFinPriseEnCharge: Date;
        dataListeRisque: Array<Commun.Enum.RisqueAssurance>;
        listeComposantes: Array<IComposante>;
        listeComposantesSocleRetenues: Array<IComposante>;
        listeComposantesOptionRetenues: Array<IComposante>;
        /**
         * L'annulation du mode édition est possible uniquement si l'assurance est en mode édition et si ce n'est pas la 1ère édition d'une création
         */
        isEditionCanBeCanceled: boolean;
        /**
         * Selon les informations correctes, des champs supplémentaires sont rendus accessibles
         */
        infosLevel1Valid: boolean;
        infosLevel2Valid: boolean;
        infosLevel3Valid: boolean;
        /**
         * Les champs avec validation des bornes sont en erreur
         */
        isInvalid: boolean;
        /**
         * Indique si l'assurance possèdent des composantes assurances
         */
        hasComposantes: boolean;
        constructor(idIhm: number, idNouvelleAssurance: number, listePersonne: Array<IPersonneAssurableGarant>, listeCompagnie: Array<ICompagnieApplicable>, listeReserveExclusion: Array<IReserveExclusion>, devise: string, dateEffet: Date, dateTraitement: Date, dateFinCredit: Date, dataForAssurance: IDataForAssurance, creditInfos: RestInfoCredit.ICredit, creditCaraFinan: RestCaraFinan.ICredit, isChangementProduit: boolean, isPhaseEnCoursPeriodiciteScinde: boolean, isAvenantPeriodicite: boolean, phaseModifiables: Array<Modeles.IPhase>, assr?: RestCaraFinan.IAssurance);
        isQuotiteValid(): boolean;
        isMontantValid(): boolean;
        /**
         * Prise en compte de la modification du taux ou du montant d'un accessoire
         * Report vers les autres si besoin
         */
        setAccessoires(acsrEdit: IAccessoireAssurance, applyForOther: boolean): void;
        /**
         * Mise à jour des composantes Socle et suppression des composantes Option si applicable
         * @param composantesSocle
         * @param suppressionComposantesOption
         */
        setComposantes(composantesSocle: Array<IComposante>, suppressionComposantesOption: boolean): void;
        private getCompagnieSelected(numeroExterneConvention, listeCompagnie);
        private getPersonneSelected(assr, listePersonne);
        /**
         * Calcul de la date de fin de prise en charge
         */
        private getDateFinPriseCharge(estPersonnePhysique, conventionAgeMaximumCouvertureAssurance, conventionAgeMaximumCouvertureEnExtension, extensionPersonnesAgees, dateNaissanceAssure);
        private getDateFinPriseChargeCalculee(dateNaissanceAssure, ageMaximum);
        /**
         * Filtre la liste des compagnies d'assurances en retirant les compagnies nouvelle offre ADE si la convention de l'assurance actuelle n'est pas flaggé nouvelle offre ADE
         * @param dataForAssurance
         * @param listeCompagnies
         * @param conventionAssurance
         */
        private filterListeCompagnieApplicable(dataForAssurance, listeCompagnies, conventionAssurance);
        /**
         * La liste des conventions disponibles est soumise à plusieurs conditions
         */
        private getListeConventionApplicable(compagnie, dateEffet, dateEmission, codeActionPourMiseAJour, codeAncienneteAssuranceGarantie, pers, dataForAssurance, creditInfos, phasesByCreditCaraFinan, idConventionExistante?);
        private isConventionAvailable(dateEffet, dateEmission, pers, codeActionPourMiseAJour, codeAncienneteAssuranceGarantie, c, dataForAssurance, creditInfos, phasesByCreditCaraFinan);
        private getListeAccessoire(numeroPhaseActiveCredit, elementsCalculAccessoires, listeAccessoireConvention, codeTypeAccessoireConvention, datePriseEffetAssurance, dateEffet, dateTraitement, dateNaissancePersonne, devise, phaseModifiables);
        private getListeAccessoiresActif(numeroPhaseActiveCredit, listeAccessoireConvention, codeTypeAccessoireConvention, datePriseEffetAssurance, dateEffet, dateTraitement, dateNaissancePersonne, phaseModifiables);
        private getListeComposantes(composantes, dateFinParDefaut, listeTypesSinistres, identifiantAssuranceParDefaut?);
        private getLibelleTypeSinistre(listeTypesSinistres, codeTypeSinistre);
        /**
         * Champs dépendants de la personne
         */
        private resetDataPersonne();
        /**
         * Champs dépendants de la compagnie
         */
        private resetDataCompagnie();
        /**
         * Champs dépendants de la convention
         */
        private resetDataConvention();
        /**
         * La sélection d'une NOUVELLE convention impacte des données
         */
        private setDataWithNewConvention(newConvention);
        /**
         * Données dépendantes de la convention
         */
        private setDataWithConvention(newConvention);
        private setModeCalculByQuotite(conventionSelected);
        private setLibelleHelpQuotite(c);
        private setModeCalculByMontant(c);
        private setLibelleHelpMontant(c);
        private setShowLibelleAssuranceExterne(conventionSelected);
        private setShowExtensionPersonnesAgees(persSelected, convSelected);
        private setExtensionPersonnesAgees(value);
        private setDataListeRisque(extensionPersonnesAgees);
    }
}

declare module Avenants.Business.Modeles {
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    class Composante implements IComposante {
        identifiantAssurance: string;
        numeroRelatif: number;
        dateDebut: string;
        dateFin: string;
        type: ITypeComposante;
        estRetenue: boolean;
        taux: number;
        montant: number;
        private _codeComposanteOptionnelle;
        estDeces: boolean;
        estPerteEmploi: boolean;
        estSocle: boolean;
        constructor(identifiantAssurance: string, numeroRelatif: number, dateDebut: string, dateFin: string, type: ITypeComposante, estRetenue: boolean, taux: number, montant: number, codeComposanteOptionnelle: string);
        transformToComposanteAssurance(dataCommonCaraFinan: IDataCommonBuilderCaraFinan): RestCaraFinan.IComposanteAssurance;
        static buildDefault(composante: RestCaraFinan.IComposanteAssurance, dateFinParDefaut: string, libelleTypeSinistre: string): Composante;
        static buildVirgin(composante: RestCaraFinan.IComposanteAssurance, dateFinParDefaut: string, libelleTypeSinistre: string, identifiantAssuranceParDefaut: string, numeroRelatif: number): Composante;
    }
    class TypeComposante implements ITypeComposante {
        code: string;
        libelle: string;
        constructor(code: string, libelle: string);
        estDeces: boolean;
        estPerteEmploi: boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    class ConventionApplicable implements IConventionApplicable {
        idConvention: string;
        libelleLongConvention: string;
        codeTypeAccessoireConvention: string;
        codeModeExpressionGaranAccordee: string;
        ageMaximumCouvertureAssurance: number;
        ageMaximumCouvertureEnExtension: number;
        quotiteMinimumParBeneficiaire: number;
        quotiteMaximumParBeneficiaire: number;
        pasQuotiteParBeneficiaire: number;
        montantMinimumGarantiParTete: number;
        montantMaximumGarantiParTete: number;
        pasMontantGarantiParTete: number;
        autoriseExtensionPersonneAgee: boolean;
        autoriseLibelleIntervenantExterne: boolean;
        listeAccessoireParConvention: Array<RestCaraFinan.IAccessoireParConvention>;
        constructor(c: RestCaraFinan.IConventionAssurance, listeAccessoires: Array<RestCaraFinan.IAccessoireParConvention>);
        /**
         * Propore à la convention, tout en faisant attention aux doublons avec les accessoires exisytants et positionnables
         */
        private getListeAccessoireParConvention(listeAccessoires, idConvention);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    interface IAssurance {
        idIhm: number;
        etatManipulation: Enum.EtatManipulation;
        isEditionCanBeCanceled: boolean;
        isCreationFirstEdition: boolean;
        titre: string;
        identifiant: string;
        statut: string;
        dataListePersonne: Array<IPersonneAssurableGarant>;
        personneSelected: IPersonneAssurableGarant;
        dataListeCompagnie: Array<ICompagnieApplicable>;
        compagnieSelected: ICompagnieApplicable;
        conventionSelected: IConventionApplicable;
        dataListeRisque: Array<Commun.Enum.RisqueAssurance>;
        risque: Commun.Enum.RisqueAssurance;
        showLibelleAssuranceExterne: boolean;
        libelleAssuranceExterne: string;
        typeAssurance: Commun.Enum.TypeAssurance;
        codeAssuranceObligatoireInit: String;
        datePriseEnCharge: Date;
        isDatePriseEnChargeEditable: boolean;
        dateFinPriseEnCharge: Date;
        modeCalculByQuotite: boolean;
        quotite: number;
        isQuotiteValid(): boolean;
        libelleHelpQuotite: string;
        quotiteIncluseTeg: number;
        quotiteNonInclusTeg: number;
        modeCalculByMontant: boolean;
        montant: number;
        isMontantValid(): boolean;
        libelleHelpMontant: string;
        dataListeReserveExclusion: Array<IReserveExclusion>;
        reserveSelected: IReserveExclusion;
        showExtensionPersonnesAgees: boolean;
        extensionPersonnesAgees: boolean;
        beneficiaireAvantVersement: string;
        refExterne: string;
        showMotifDeliaison: boolean;
        motifDeliaison: Commun.Enum.MotifDeliaisonAssurance;
        listeAccessoire: Array<IAccessoireAssurance>;
        listeComposantes: Array<IComposante>;
        listeComposantesSocleRetenues: Array<IComposante>;
        listeComposantesOptionRetenues: Array<IComposante>;
        modeEdition: boolean;
        codeActionPourMiseAJour: string;
        codeAncienneteAssuranceGarantie: string;
        infosLevel1Valid: boolean;
        infosLevel2Valid: boolean;
        infosLevel3Valid: boolean;
        isInvalid: boolean;
        hasComposantes: boolean;
        isPhaseEnCoursPeriodiciteScinde: boolean;
        isAvenantPeriodicite: boolean;
        setAccessoires(acsrEdit: IAccessoireAssurance, applyForOther: boolean): any;
        setComposantes(composantesSocle: Array<IComposante>, suppressionComposantesOption: boolean): void;
    }
    interface ICompagnieApplicable {
        numeroExterneConvention: string;
        codeEtablissement: number;
        isCompagnieExterne: boolean;
        libelleLong: string;
        libelleTiers: string;
        listeConvention: Array<IConventionApplicable>;
    }
    interface IConventionApplicable {
        idConvention: string;
        libelleLongConvention: string;
        codeTypeAccessoireConvention: string;
        codeModeExpressionGaranAccordee: string;
        ageMaximumCouvertureAssurance: number;
        ageMaximumCouvertureEnExtension: number;
        quotiteMinimumParBeneficiaire: number;
        quotiteMaximumParBeneficiaire: number;
        pasQuotiteParBeneficiaire: number;
        montantMinimumGarantiParTete: number;
        montantMaximumGarantiParTete: number;
        pasMontantGarantiParTete: number;
        autoriseExtensionPersonneAgee: boolean;
        autoriseLibelleIntervenantExterne: boolean;
        listeAccessoireParConvention: Array<RestAvenant.CaracteristiqueFinan.IAccessoireParConvention>;
    }
    interface IReserveExclusion {
        code: string;
        libelle: string;
    }
    interface IComposante {
        identifiantAssurance: string;
        numeroRelatif: number;
        dateDebut: string;
        dateFin: string;
        type: ITypeComposante;
        estRetenue: boolean;
        taux: number;
        montant: number;
        estDeces: boolean;
        estPerteEmploi: boolean;
        estSocle: boolean;
        transformToComposanteAssurance(dataCommonCaraFinan: IDataCommonBuilderCaraFinan): RestAvenant.CaracteristiqueFinan.IComposanteAssurance;
    }
    interface ITypeComposante {
        code: string;
        libelle: string;
        estDeces: boolean;
        estPerteEmploi: boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenantCreditParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestDossierCreditAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class Ate implements IAte {
        echeancesReportees: number;
        echeanceAmenagees: Enum.Ate.EcheanceAmenagee;
        nouvelleEcheance: number;
        paimentInteretReportes: Enum.Ate.TraitementInterets;
        impactTa: Enum.Ate.ImpactTa;
        dureeResiduelle: number;
        nouvelleDureeResiduelle: number;
        montantRemboursementSaisi: number;
        codeTypeEcheanceAmenagee: string;
        codeTypeCalculInterets: string;
        nbPeriodesMiniLAmenagement: number;
        nbPeriodesMaxiLAmenagement: number;
        libelleHelpNbPeriodes: string;
        getValidCreationAte: boolean;
        messagesErreurNbrEcheances: Array<string>;
        messageErreurNouvelleEcheance: string;
        montantInteretsOrdreMiseRecouvrement: number;
        messageErreurNouvelleDureeResiduelle: string;
        dureeCredit: number;
        dateFinCredit: Date;
        dureeResteAFinancer: number;
        codeTypeAcces: Commun.Enum.CodeTypeAcces;
        isAteCree: boolean;
        isModeConsultationModification: boolean;
        isAteInit: boolean;
        private uniteDureePhase;
        private periodiciteCalculInterets;
        private uniteDureeCredit;
        constructor(codeTypeAcces: Commun.Enum.CodeTypeAcces, credit: RestGestion.InformationCredit.ICredit, produit: RestAvenantCreditParam.Produit.IProduit, creditCaraFinan: RestDossierCreditAvenant.CaracteristiqueFinan.ICredit, isChangementProduit: boolean, phaseStocks: Array<Modeles.IPhase>);
        getCodeTypeEchAmenagee(): string;
        protected getCodeTypeEchAmenageeModif(codeTypeEcheanceAmenagee: string): Enum.Ate.EcheanceAmenagee;
        getMontantRemboursementSaisi(): number;
        getCodeTypeCalculInterets(): string;
        protected getCodeTypeCalculInteretsModif(codeTypeCalculInterets: String): Enum.Ate.TraitementInterets;
        getNouvelleDureeResiduelle(): number;
        getCodeTypeRecalculTA(): string;
        protected getImpactTaModif(nouvelleDureeResiduelle: number): Enum.Ate.ImpactTa;
        protected getPeriodiciteCalculInterets(credit: RestGestion.InformationCredit.ICredit): string;
        controleCreationAte(creditOrigine: RestGestion.InformationCredit.ICredit, produit: RestAvenantCreditParam.Produit.IProduit, creditCaraFinan: RestDossierCreditAvenant.CaracteristiqueFinan.ICredit, isChangementProduit: boolean, phaseStocks: Array<Modeles.IPhase>): boolean;
        protected getPeriodesMinMaxLAmenagement(produit: RestAvenantCreditParam.Produit.IProduit, creditOrigine: RestGestion.InformationCredit.ICredit): Array<number>;
        protected getUniteDureePhase(creditOrigine: RestGestion.InformationCredit.ICredit): string;
        controleNombreEcheances(): void;
        isErreurNbrEcheances(): boolean;
        controleNouvelleEcheance(): void;
        isErreurNouvelleEcheance(): boolean;
        controleNouvelleDureeResiduelle(): void;
        isErreurNouvelleDureeResiduelle(): boolean;
        isErreurChampsPopin(): boolean;
        getDureeCredit(credit: RestGestion.InformationCredit.ICredit): number;
        getDateFinCredit(credit: RestGestion.InformationCredit.ICredit): Date;
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion;
    interface IAte {
        echeancesReportees: number;
        echeanceAmenagees: Enum.Ate.EcheanceAmenagee;
        nouvelleEcheance: number;
        paimentInteretReportes: Enum.Ate.TraitementInterets;
        impactTa: Enum.Ate.ImpactTa;
        dureeResiduelle: number;
        nouvelleDureeResiduelle: number;
        montantRemboursementSaisi: number;
        codeTypeEcheanceAmenagee: string;
        codeTypeCalculInterets: string;
        nbPeriodesMiniLAmenagement: number;
        nbPeriodesMaxiLAmenagement: number;
        libelleHelpNbPeriodes: string;
        getValidCreationAte: boolean;
        messagesErreurNbrEcheances: Array<string>;
        messageErreurNouvelleEcheance: string;
        montantInteretsOrdreMiseRecouvrement: number;
        messageErreurNouvelleDureeResiduelle: string;
        dureeCredit: number;
        dateFinCredit: Date;
        dureeResteAFinancer: number;
        isAteCree: boolean;
        isModeConsultationModification: boolean;
        isAteInit: boolean;
        getCodeTypeEchAmenagee(): string;
        getMontantRemboursementSaisi(): number;
        getCodeTypeCalculInterets(): string;
        getNouvelleDureeResiduelle(): number;
        controleNombreEcheances(): void;
        isErreurNbrEcheances(): boolean;
        controleNouvelleEcheance(): void;
        isErreurNouvelleEcheance(): boolean;
        controleNouvelleDureeResiduelle(): void;
        isErreurNouvelleDureeResiduelle(): boolean;
        isErreurChampsPopin(): boolean;
        getCodeTypeRecalculTA(): string;
        getDureeCredit(credit: RestInfoCredit.InformationCredit.ICredit): number;
        getDateFinCredit(credit: RestInfoCredit.InformationCredit.ICredit): Date;
    }
}

declare module Avenants.Business.Modeles {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class CalculDureeChInit {
        static sommeDureePhaseOrigine(phases: Array<RestGestion.InformationCredit.IPhase>, phaseOrigineEnCours: RestGestion.InformationCredit.IPhase): number;
        static ajustementDureePhase(phasesChangePdt: Array<RestGestion.InformationCredit.IPhase>, phasesOrigine: Array<RestGestion.InformationCredit.IPhase>, creditOrigineDureeResteAFinancer: number, sommeDureePhaseO: number, numeroPhaseEnCoursCreditOrigine: number): Array<RestGestion.InformationCredit.IPhase>;
        static normalisationPhase(phaseOrigines: Array<RestGestion.InformationCredit.IPhase>, ecartALaPhaseEnCours: number): Array<RestGestion.InformationCredit.IPhase>;
        /**
         * Permet de déterminer le nombre de phases AM dans le crédit d'origine supérieures à la phase en cours.
         * @param phasesOrigine : liste des phases AM du crédit d'origine (données par dossierCreditGestion.InformationCredit.phases)
         * @param numeroPhaseEnCoursCreditOrigine : numéro de la phase en cours dans le crédit d'origine (déterminer d'abord la phaseEnCours puis prendre le numeroPhase)
         */
        static getNombrePhaseAMOrigine(phasesOrigine: Array<RestGestion.InformationCredit.IPhase>, numeroPhaseEnCoursCreditOrigine: number): number;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class ConditionsVariationDureeProduit {
        static getReductionMaxDuree(variationDureeProduits: Array<RestAvenantParam.Produit.IVariationDureeProduit>, uniteDureeCredit: string): string;
        static getTraitementEcheanceDureeProduit(phaseProduits: Array<RestAvenantParam.Produit.IPhase>): string;
        static getLibelleEcheanceProduit(codeTypeTraitementEcheance: string): string;
        static getMotifCondition(variationDureeProduits: Array<RestAvenantParam.Produit.IVariationDureeProduit>): Array<string>;
        static getDureeBornePourcentage(variationDureeProduits: Array<RestAvenantParam.Produit.IVariationDureeProduit>, creditChangePdt: RestGestion.InformationCredit.ICredit): Array<number>;
        static getBornes(dureeCredit: number, regleDeterminationDAllong: string, nbPerminiAllongementCredit: number, nbPermaxiAllongementCredit: number, nbPeriodeAllongementDureeCredit: number, prCentAllongDureeCredit: number): Array<number>;
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestAvenantService = Avenants.Rest.Modeles.AvenantCreditService;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class CreditChInit {
        getCreditInitChangePdt(dateTraitement: Date, creditOrigine: RestInfoCredit.ICredit, eligibiliteRenegociationProduit: RestAvenantService.EligibiliteChangePdt.IRenegociationProduit, produit: RestAvenantParam.Produit.IProduit, phaseOrigineEnCours: RestInfoCredit.IPhase, palierOrigineEnCours: RestInfoCredit.IPalierTauxInteret, phaseProduitOrigineEnCours: RestAvenantParam.Produit.IPhase, premierePhaseAMProduit: RestAvenantParam.Produit.IPhase, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>): RestInfoCredit.ICredit;
        private getNbMaxiPeriodeRevisionModulationInit(produit);
        private getNbMaxiPeriodeRevisionModulation(produit, dureeCredit, nbMaxiPerallsortieCptCourant);
        private calculBorne(variationDureeProduit, dureeCredit);
    }
}

declare module Avenants.Business.Modeles {
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestGestionInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestAvenantService = Avenants.Rest.Modeles.AvenantCreditService;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class CreditInitBuilderChangePdt {
        getCreditChangementProduit(dateTraitement: Date, isChangementProduit: boolean, isCreationAvenant: boolean, creditCaraFinan: RestCaraFinan.ICredit, creditOrigine: RestGestionInfoCredit.ICredit, eligibiliteRenegociationProduit: RestAvenantService.EligibiliteChangePdt.IRenegociationProduit, produitCible: RestAvenantParam.Produit.IProduit, produitCreditOrigine: RestAvenantParam.Produit.IProduit, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>): RestGestionInfoCredit.ICredit;
        getCreditChangePdt(dateTraitement: Date, creditOrigine: RestGestionInfoCredit.ICredit, eligibiliteRenegociationProduit: RestAvenantService.EligibiliteChangePdt.IRenegociationProduit, produitCredit: RestAvenantParam.Produit.IProduit, produitCreditOrigne: RestAvenantParam.Produit.IProduit, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>): RestGestionInfoCredit.ICredit;
        private miseAJourPhasesChangePdt(phaseChangePdts, palierTxInts, paramRevTaux, palierTauxAmortissements);
        private miseAJourCreditChangePdt(creditChangePdt, phaseChangePdts);
        private getPhasesByProduit(dateTraitement, creditOrigine, creditChangePdt, produit, phaseOrigineEnCours, premierePhaseAMProduit, palierOrigineEnCours, phaseProduitOrigineEnCours, listeIndice);
        private getPalierTauxInteretByProduit(creditChangePdt, produit, phaseChangePdts, phaseCreditOrigineEnCours, palierOrigineEnCours, phaseProduitOrigineEnCours, listeIndice, dateTraitement);
        private getParametresRevisionTauxByProduit(phaseChangePdts, produit, dateTraitement, creditChangePdt);
        private getPremierParamRevTxPhaseEnCours(paramRevProduits, dateTraitement, codeTypePhase, noRelatifPhaseTypePhaseProduit, identifiantProduit);
        private getParamRevPhaseEnCoursIndiceRevision(paramRevProduits, dateTraitement, codeTypePhase, noRelatifPhaseTypePhaseProduit, identifiantProduit);
        private getPalierTauxAmortissementByProduit(produit, phaseChangePdts, palierTauxInterets);
        private getDureeChgtProduit(periodiciteTotale, dureeTotale, dureesPhasesChgtPdtInit);
    }
}

declare module Avenants.Business.Modeles {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class FonctionsChPourInit {
        static getPhaseProduitOrigineEnCours(phaseProduitOrigines: Array<RestAvenantParam.Produit.IPhase>, phaseOrigineEnCours: RestGestion.InformationCredit.IPhase): RestAvenantParam.Produit.IPhase;
        static getPremierePhaseAMProduit(phaseNouveauProduits: Array<RestAvenantParam.Produit.IPhase>): RestAvenantParam.Produit.IPhase;
        static getPalierOrigineEnCours(creditOrigine: RestGestion.InformationCredit.ICredit, phaseOrigineEnCours: RestGestion.InformationCredit.IPhase): RestGestion.InformationCredit.IPalierTauxInteret;
        static getPhaseEnCoursCreditOrigine(creditOrigine: RestGestion.InformationCredit.ICredit): RestGestion.InformationCredit.IPhase;
        /**
         * Permet de retrouver la condition de taux produit pour la durée du crédit
         * @param conditionsTauxPdt
         * @param dateTraitement
         * @param identifiantProduit : du crédit
         * @param dureeAjusteeSuiteRecalcul : du crédit
         */
        static getConditionTauxProduitPourCredit(conditionsTauxPdt: Array<RestAvenantParam.Produit.IConditionTauxProduit>, dateTraitement: Date, identifiantProduit: string, dureeAjusteeSuiteRecalcul: number): RestAvenantParam.Produit.IConditionTauxProduit;
        static fctRecalculTaux(identifiantProduit: string, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>, conditionTauxProduitPourCredit: RestAvenantParam.Produit.IConditionTauxProduit, parametreRevisions: Array<RestAvenantParam.Produit.IParametreRevision>, partieFixeUnTauxComposite: number, margeAppliquerSurTauxNominal: number, codeIndiceNominal: string, dateTraitement: Date, codeTypePhase: string, numeroRelatifPhaseTypePhaseProduit: number, numeroJeuIndiceRevision: number, codeTypeRoleIndice: string, codeIndexe: string): Array<number>;
        static getParametreRevisionCalculTaux(parametreRevisions: Array<RestAvenantParam.Produit.IParametreRevision>, identifiantProduit: string, numeroRelatifPhaseTypePhaseProduit: number, codeTypePhase: string, numeroJeuIndiceRevision: number, codeTypeRoleIndice: string, dateTraitement: Date): RestAvenantParam.Produit.IParametreRevision;
        static getAncienCodeIndiceNominal(phaseOrigineEnCours: RestGestion.InformationCredit.IPhase, palierOrigineEnCours: RestGestion.InformationCredit.IPalierTauxInteret): string;
        /**
         * Utilisé dans l'initialisation de l'indice + marge du crédit et de la phase en changement de produit
         * @param identifiantProduit
         * @param dateTraitement
         * @param codeIndiceNominal : ancien codeIndiceNominal
         * @param codeProduitRevisable
         * @param phasesProduit
         * @param codeTypePhase : si dans crédit alors valeur en dur. Sinon celle de la phase qui est en train d'être initialisée.
         * @param numeroRelatifPhaseTypePhaseProduit : si dans crédit alors valeur en dur. Sinon celle de la phase qui est en train d'être initialisée.
         */
        static getParametreRevision(identifiantProduit: string, dateTraitement: Date, codeIndiceNominal: string, codeProduitRevisable: string, phasesProduit: Array<RestAvenantParam.Produit.IPhase>, codeTypePhase: string, numeroRelatifPhaseTypePhaseProduit: number): RestAvenantParam.Produit.IParametreRevision;
        /**
         * Pour mettre à jour la marge sur le crédit et la phase en changement de produit
         * @param codeIndiceNominalAncien : le codeIndiceNominal sur le crédit d'origine
         * @param creditInitCodeModeExpressionTaux : codeModeExpressionTaux du crédit
         * @param conditionTauxProduitPourCredit
         * @param palierOrigineEnCours : le palierEnCours sur le crédit d'origine
         * @param phaseProduitOrigineEnCours : la phase en cours sur le produit d'origine
         * @param premierePhaseAMProduit : dans le cas du crédit, il est déterminé dans la classe. Pour la phase, il faut prendre la phaseProduit correspondant à la phase en cours d'initialisation
         */
        static miseAJourMarge(codeIndiceNominalAncien: string, creditInitCodeModeExpressionTaux: string, conditionTauxProduitPourCredit: RestAvenantParam.Produit.IConditionTauxProduit, palierOrigineEnCours: RestGestion.InformationCredit.IPalierTauxInteret, phaseProduitOrigineEnCours: RestAvenantParam.Produit.IPhase, premierePhaseAMProduit: RestAvenantParam.Produit.IPhase): number;
        /**
         *
         * @param codeModeExpressionTaux : celui de credit ou de la phase
         * @param listeIndice : déterminée à partir du service rest-it avenantCreditParam.Indice
         * @param tauxInteretPalier : celui de palierOrigineEnCours
         * @param conditionTauxProduitPourCredit
         * @param parametreRevision
         * @param partieFixeTaux
         * @param margeAppliquerSurTauxNominal : celui du crédit ou de la marge
         * @param codeIndiceNominal : celui du crédit ou de la marge
         * @param codeModeCalculTaux1 : celui de premierePhaseAMProduit pour le crédit mais de la phase du produit correspondant à la phase en cours d'initialisation
         * @param codeModeCalculTaux2 : celui de phaseProduitOrigineEnCours
         * @param codeTypePhase : pour le crédit mettre AM. Pour la phase, la valeur de la phase en cours d'initialisation.
         * @param numeroRelatifPhaseProduit : pour le crédit mettre 1. Pour la phase, la valeur de la phase en cours d'initialisation.
         */
        static miseAJourTaux(identifiantProduit: string, codeModeExpressionTaux: string, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>, tauxInteretPalier: number, conditionTauxProduitPourCredit: RestAvenantParam.Produit.IConditionTauxProduit, parametreRevisions: Array<RestAvenantParam.Produit.IParametreRevision>, partieFixeTaux: number, margeAppliquerSurTauxNominal: number, codeIndiceNominal: string, codeModeCalculTaux1: string, codeModeCalculTaux2: string, dateTraitement: Date, codeTypePhase: string, numeroRelatifPhaseProduit: number): number;
        static getDureeCredit(uniteDureeCreditInit: string, creditOrigine: RestGestion.InformationCredit.ICredit, produit: RestAvenantParam.Produit.IProduit): Array<number>;
        static getDureeCreditInit(uniteDureeCreditInit: string, uniteDureeCreditOrigine: string, dureeAjusteCreditSuiteRecalcul: number): number;
        static getValeurUniteDureeCredit(uniteDuree: string): number;
    }
}

declare module Avenants.Business.Modeles {
    interface IDureeChangePdt {
        numero: number;
        modeDuree: string;
        periodicite: string;
        duree1: number;
        duree2: number;
        duree3: number;
        duree4: number;
        dureeCalculee: number;
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class PalierTauxAmortissementChInit implements RestInfoCredit.IPalierTauxAmortissement {
        codeEtablissement: any;
        identifiantCredit: any;
        codeRoleCreditAvenant: any;
        numeroPhase: any;
        numeroRelatif: any;
        numeroPremiereEcheancePalier: any;
        numeroDerniereEcheancePalier: any;
        tauxProgressionAmortissement: any;
        cdIndexTauxProgressionAmort: any;
        uniteDureePhase: any;
        numeroRelatif1: any;
        numeroRelatifSimulationAvenant: any;
        noPhaseCreditProchaineRevision: any;
        numeroRelatif2: any;
        elementModifiableParAvenant: any;
        codeOccurabsorbeePhasePalier: any;
        constructor(phaseChangePdt: RestInfoCredit.IPhase, isPhasePasse: boolean, numeroDerniereEcheancePalierAvant: number, numeroRelatif: number, palierPrgPhaseChangePdt: RestAvenantParam.Produit.IPalierProgressionAmortissement, dureePalierPrgInit: IDureeChangePdt, palierTauxInterets: Array<RestInfoCredit.IPalierTauxInteret>);
        private getNumeroDerniereEcheancePalier(numeroPremiereEcheancePalier, phaseChangePdt, dureePalier);
        private getTauxProgressionAmortissement(cdIndexTauxProgressionAmort, tauxProgressionAmortissement1, tauxProgressionAmortissement2, palierTauxInterets, codeRoleCreditAvenant, numeroPremiereEcheancePalier);
        private rechercheTxIndexeProgAmor(palierTauxInterets, codeRoleCreditAvenant, numeroPremiereEcheancePalier);
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class PalierTauxInteretChInit implements RestInfoCredit.IPalierTauxInteret {
        codeEtablissement: any;
        cdModifCaracteristfinancieres: any;
        codeIndice: any;
        codeOccurabsorbeePhasePalier: any;
        codeRoleCreditAvenant: any;
        elementModifiableParAvenant: any;
        identifiantCredit: any;
        margeAppliquerSurTaux: any;
        noPhaseCreditProchaineRevision: any;
        numeroDerniereEcheancePalier: any;
        numeroPremiereEcheancePalier: any;
        numeroPhase: any;
        numeroPremiereEcheancePalie: any;
        numeroRelatif: any;
        numeroRelatif1: any;
        numeroRelatif2: any;
        numeroRelatifPalierProduit: any;
        numeroRelatifSimulationAvenant: any;
        periodiciteApplicProgreEcheance: any;
        tauxInteretPalier: any;
        tauxProgressionDesEcheances: any;
        typeRemboursement: any;
        uniteDureePhase: any;
        constructor(creditCHangePdt: RestInfoCredit.ICredit, phaseChangePdt: RestInfoCredit.IPhase, palierCreditOrigineEnCours: RestInfoCredit.IPalierTauxInteret, numeroRelatif: number, palierProduit: RestAvenantParam.Produit.IPalier, dureePalier: IDureeChangePdt, isPhasePasse: boolean, numeroDerniereEcheancePalierAvant: number, conditionTauxProduit: RestAvenantParam.Produit.IConditionTauxProduit, phaseProduitOrigineEnCours: RestAvenantParam.Produit.IPhase, produit: RestAvenantParam.Produit.IProduit, dateTraitement: Date, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>, phaseCreditOrigineEnCours: RestInfoCredit.IPhase);
        private getTypeRemboursement(palierProduit);
        private getTauxProgressionEcheances(palierProduit);
        private getPhaseProduitEncours(phaseProduits, phaseChangePdt);
        private getNumeroDerniereEcheancePalier(dureePalier, phaseChangePdt, numeroPremiereEcheancePalier);
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class ParametreRevisionTauxChInit implements RestInfoCredit.IParametreRevisionTaux {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroPhase: number;
        codeTypePhase: string;
        noRelatifPhaseTypePhaseProduit: number;
        partieFixeUnTauxComposite: number;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        noPhaseCreditProchaineRevision: number;
        modeExpressionButoirTauxBaisse: string;
        modeExpressionButoirTauxHausse: string;
        valeurCoeffParametreRevision: number;
        valeurCoeffParametreRevision1: number;
        numeroJeuIndicesRevision: number;
        numeroPeriodeRevision: number;
        identifiantLoiRevision: string;
        codeEcheanceRecalculeeRevision: string;
        nmbrEcheanceAvtRecalculMontant: number;
        evenemntDeclencheurDebutPeriode: string;
        codeUnitePeriodeDebutRevision: string;
        nbrPeriodePrDeterminerDbtPeriod: number;
        dureePeriodeRevision: number;
        uniteDureePeriodeRevision: string;
        elementModifiableParAvenant: string;
        codeTypeRoleIndice: string;
        typeIndexationTaux: string;
        mdExpressionValeurUtilisIndice: string;
        constructor(phaseChangePdt: RestInfoCredit.IPhase, parametreRevisionProduit: RestAvenantParam.Produit.IParametreRevision, paramRevIndiceRevision: RestAvenantParam.Produit.IParametreRevision);
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class PhaseChInit implements RestInfoCredit.IPhase {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroPhase: number;
        codeTypePhase: string;
        noRelatifPhaseTypePhaseProduit: number;
        libelleLongTypePhase: string;
        dureeInitialePhaseCredit: number;
        dureeResiduelleCredit: number;
        uniteDureePhase: string;
        tauxNominalPhase: number;
        codeTauxDesPaliersCalcules: string;
        tauxMoyenPhaseCredit: number;
        modeCalculAmortissement: string;
        quotiteCapitalAmortir: number;
        periodiciteMERamortissement: string;
        periodiciteCalculInterets: string;
        dateFinPrefinancementInitiale: string;
        codeIndiceNominal: string;
        margeAppliquerSurTaux: number;
        typeIndexationTaux: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        periodiciteMiseRecouvrInterets: string;
        numeroJeuIndicesRevision: number;
        noPhaseCreditProchaineRevision: number;
        elementModifiableParAvenant: string;
        modeCapitRecouvInterets: string;
        cdModifCaracteristfinancieres: string;
        codeOccurabsorbeePhasePalier: string;
        partieFixeUnTauxComposite: number;
        nbJoursDansAnneeDenominateur: number;
        nbJoursDansAnneeNumerateur: number;
        calculInteretsEnJoursReels: string;
        prelevementEnFinPhase: string;
        codeTypeEcretage: string;
        paliersTauxInterets: Array<RestInfoCredit.IPalierTauxInteret>;
        parametresRevisionTaux: Array<RestInfoCredit.IParametreRevisionTaux>;
        paliersTauxAmortissement: Array<RestInfoCredit.IPalierTauxAmortissement>;
        pretsCombines: Array<RestInfoCredit.IPretCombine>;
        constructor(ph: RestAvenantParam.Produit.IPhase, creditChangePdt: RestInfoCredit.ICredit, numeroPhase: number, phaseCreditOrigineEnCours: RestInfoCredit.IPhase, premierePhaseAMProduit: RestAvenantParam.Produit.IPhase, dureePhase: number, codeTypePretCombine: string, palierOrigineEnCours: RestInfoCredit.IPalierTauxInteret, conditionTauxProduit: RestAvenantParam.Produit.IConditionTauxProduit, phaseProduitOrigineEnCours: RestAvenantParam.Produit.IPhase, produit: RestAvenantParam.Produit.IProduit, dateTraitement: Date, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>);
        private getIsParametreRevisionTaux(codeProduitRevisable);
        private getQuotiteCapitalAmortir(modeCalculAmortissement, quotConseilleeCapitalAAmortir1);
        private getPrelevementEnFinPhase(phaseByProduit, codeTypePretCombine);
        private getPeriodiciteMiseRecouvrInterets(phaseCreditOrigineEnCours, phaseProduit, uniteDureePhase, dureeInitialePhaseCredit);
        private getPriodiciteMerAmortissement(phaseProduit, phaseCreditOrigineEnCours, uniteDureePhase, dureeInitialePhaseCredit, periodiciteMiseRecouvrInterets);
        private getPretCombine(credit, numeroPhase, phaseByProduit, codeTypePretCombine);
        private getDureeInitialePhasePassee(dateMiseRecouvrementZeroCredit, dateEcheanceCredit);
    }
}

declare module Avenants.Business.Modeles {
    import RestCaraCredit = Avenants.Rest.Modeles.DossierCreditGestion.CaracteristiqueCredit;
    class CreditInfosBuilder {
        static getResult(caraCredit: RestCaraCredit.ICaracteristiqueCredit): ICreditInfosByCaraCredit;
    }
}

declare module Avenants.Business.Modeles {
    import RestCaraCredit = Avenants.Rest.Modeles.DossierCreditGestion.CaracteristiqueCredit;
    class CreditInfosHelper {
        static getIsCreditInPrefinancement(listePhase: Array<RestCaraCredit.IInformationPhaseCredit>): boolean;
    }
}

declare module Avenants.Business.Modeles {
    interface ICreditInfosByCaraCredit {
        libelleClient: string;
        libelleDossier: string;
        libelleCredit: string;
        isCreditInPrefinancement: boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestEligibilite = Avenants.Rest.Modeles.AvenantCreditParam.Eligibilite;
    class DataContractualisationForm implements IDataContractualisationForm {
        private _isSimulation;
        private _listeDocSegmentPrincipal;
        private _listeDocEditionLocalePmm;
        private _listeDocEditionLocaleLettreAvenant;
        private _listeDocsForAvenantIndusEditable;
        private _listeDocsForAvenantSedEditable;
        private _listeDocsForSimulationSedEditable;
        private _modeEdition;
        private _dateEditionInit;
        private _isDateEditionOnlyReading;
        private _isSedOnSimulation;
        avenantResume: IAvenantResume;
        dateDecision: Date;
        dateReception: Date;
        dateSignature: Date;
        dateEdition: Date;
        dateLimiteValidite: Date;
        dateMinimumAcceptation: Date;
        isEditeEnAttenteEnvoi: boolean;
        showChoixActionSimulation: boolean;
        showBlocTypeDocuments: boolean;
        showBtnSelectModeEdition: boolean;
        showDatesEdition: boolean;
        isDateLimiteValiditeOnlyReading: boolean;
        libelleDateEditionOnlyReading: string;
        showCbAccordClient: boolean;
        showRbTypeDocOffre: boolean;
        showRbTypeDocProposition: boolean;
        showRbTypeDocAnnexe: boolean;
        showDateReception: boolean;
        showDateSignataure: boolean;
        showNotationBale: boolean;
        isAccordClient: boolean;
        isAccordEtablissement: boolean;
        choixDecision: string;
        codeAgentComposant: string;
        agentDecideur: MyWay.Model.Agent;
        showBlocEditDecideurAccordEtablissement: boolean;
        notationBale2: string;
        typeDocument: Enum.TypeDocumentsEdition;
        envoyerClient: boolean;
        dataSed: ISignatureElectronique;
        dataIndus: IEditionIndustrielle;
        dataJustificatif: IDataJustificatif;
        isTypeLoiImmo: boolean;
        isCreditRevisableAndLoiImmo: boolean;
        isEligibleEditionLettreAssurance: boolean;
        modeEdition: Enum.ModeEdition;
        showBlocDocuments: boolean;
        listeDocSegment: Array<RestEligibilite.ISegmentPrincipal>;
        listeDocSelectable: Array<IDocEditable>;
        dateEditionOnlyReading: boolean;
        constructor(ar: IAvenantResume, typeLoi: string, codeAgentDefaut: string, agentDecideur: MyWay.Model.Agent, dataSed: ISignatureElectronique, dataIndus: IEditionIndustrielle, dataJustificatif: IDataJustificatif, showChoixActionSimulation: boolean, isEligibleEditionLettreAssurance: boolean, modeEditionLoaded: Enum.ModeEdition);
        private getShowBlocEditDecideurAccordEtablissement(agentDecideur, ar);
        private getLibelleDateEditionOnlyReading(isEligibiliteSed, dataSed);
        /**
         * Modification des données suite au rechargement des données indus
         */
        setDataIndus(dataIndus: IEditionIndustrielle): void;
        /**
         * Des règles s'appliquent pour l'édition locale
         */
        setDocumentsChecked(doc: IDocLocal): void;
        private setDocumentsCheckedToSimulation(doc);
        getDocumentLocalChecked(id: string): boolean;
        setDocumentLocalChecked(id: string, valeur: boolean): void;
        private getDateDecision(ar);
        /**
         * Construit la la liste de documents basé sur les documents par défaut
         * @param isSed: cas particulier pour la SED: coché par défaut et document "PropositionRenegociation" non affiché
         */
        private getListeDocEditionPmm(isSimulation, avenant, isSed);
        private getDocumentEditionLocale(isSimulation, doc, selected);
        private getCodeTypeDocEdition(isSimulation, isAnnexe);
        /**
         * Documents d'annexes pour la contractualisation avenant
         */
        private getListeDocumentAnnexeAvenant(isSimulation, signaturesAnnexes);
        private getDocumentAnnexeAvenant(docAnnexe);
        /**
         * Gère le choix par défaut du mode d'édition possible
         */
        private getModeEdition(modeEditionLoaded, dataSedEligible, dataIndusEligible, isSimulation);
        private getListeDocsForAvenantEditable(liste, typeEditionPieco, disabledDefault?);
        private getIdDocEditable(doc, typeEditionPieco);
        private getTypeDocument(isSimulation, isEligibleEditionLettreAssurance);
        private getListeDocEditionLocaleLettreAvenant(isEligibleEditionLettreAssurance);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaracteristique = Rest.Modeles.DossierCreditAvenant.Caracteristique;
    interface IDataContractualisationForm {
        avenantResume: IAvenantResume;
        dateDecision: Date;
        dateReception: Date;
        dateSignature: Date;
        dateEdition: Date;
        dateEditionOnlyReading: boolean;
        dateLimiteValidite: Date;
        dateMinimumAcceptation: Date;
        isEditeEnAttenteEnvoi: boolean;
        showChoixActionSimulation: boolean;
        showBlocTypeDocuments: boolean;
        showBlocDocuments: boolean;
        showBtnSelectModeEdition: boolean;
        showDatesEdition: boolean;
        showCbAccordClient: boolean;
        showRbTypeDocOffre: boolean;
        showRbTypeDocProposition: boolean;
        showRbTypeDocAnnexe: boolean;
        showDateReception: boolean;
        showDateSignataure: boolean;
        showNotationBale: boolean;
        isAccordClient: boolean;
        isAccordEtablissement: boolean;
        modeEdition: Enum.ModeEdition;
        choixDecision: string;
        codeAgentComposant: string;
        agentDecideur: MyWay.Model.Agent;
        showBlocEditDecideurAccordEtablissement: boolean;
        notationBale2: string;
        typeDocument: Enum.TypeDocumentsEdition;
        envoyerClient: boolean;
        isTypeLoiImmo: boolean;
        isCreditRevisableAndLoiImmo: boolean;
        isEligibleEditionLettreAssurance: boolean;
        dataSed: ISignatureElectronique;
        dataIndus: IEditionIndustrielle;
        listeDocSelectable: Array<IDocEditable>;
        dataJustificatif: IDataJustificatif;
        setDocumentsChecked(doc: IDocLocal): void;
        getDocumentLocalChecked(id: string): boolean;
        setDocumentLocalChecked(id: string, valeur: boolean): void;
        setDataIndus(dataIndus: IEditionIndustrielle): void;
    }
    interface IDocumentPieco {
        libelle: string;
        referenceDoc: string;
        intituleDocument: string;
        codeType: string;
        checked: boolean;
    }
    interface IDocEditable {
        checked: boolean;
        disabled: boolean;
        id: string;
        label: string;
        isEditionLocaleMyWay: boolean;
    }
    interface IDocLocal extends IDocEditable {
        type: Enum.TypeDocumentsEdition;
        identifiantAnnexe: string;
        codeType: string;
    }
    interface IDocLocalMyWay extends IDocEditable {
        type: Enum.TypeDocumentsEdition;
        nomFichierGceDoc: string;
    }
    interface IEditionIndustrielle {
        isEligible: boolean;
        typeEditionPieco: Commun.Enum.TypeEditionPieco;
        listeDocuments: Array<IDocumentPieco>;
        listeDocumentsToEnvoi: Array<IDocumentIndus>;
        listeFlyers: Array<IDocument>;
        isGDEPresent: boolean;
    }
    interface IDocument {
        contenuDocument: string;
        libelle: string;
    }
    interface IDocumentFile {
        checked: boolean;
        file: File;
    }
    interface IDocumentIndus {
        libelle: string;
        libellePieco: string;
        listeInfosFlux: Array<IDocumentIndusInfosFlux>;
        filesInput: Array<File>;
        file: File;
        isChargeOnGde: boolean;
        supprimerDoc(): void;
    }
    interface IDocumentIndusInfosFlux {
        libelle: string;
        type: string;
        exemplaire: string;
        dataDocumentIndus: IDataDocumentIndus;
    }
    /**
     * Regroupe les informations utilisées pour l'indus (l'association entre les segments principaux et les informations génériques)
     */
    interface IDataDocumentIndus {
        numeroRelatifBySegmentPrincipal: number;
        numeroOrdreClassementBySegmentPrincipal: number;
        codeThemeBySegmentPrincipal: string;
        zoneBanaliseeAlphanumLongueur4ByInfoGeneriqueCara: string;
        zoneBanaliseeAlphanumLongueur4ByInfoGeneriqueLibelle: string;
    }
    /**
     * Données utiles pour construire l'avenant / simulation lors de l'appel a dossiercreditavenant/caracteristique
     */
    interface IBuildSimulationRefus {
        dateAnnulation: string;
    }
    interface IBuildAvenantRefus extends IBuildSimulationRefus {
        typeRefus: string;
    }
    interface IBuildSimulationContractualisation {
        dateDecision: Date;
        dateReception: Date;
        dateSignature: Date;
        idAgent: string;
    }
    interface IBuildAvenantContractualisation extends IBuildSimulationContractualisation {
        dateTraitement: string;
        estAccordEtablissement: boolean;
        estAccordClient: boolean;
        showBlocEditDecideurAccordEtablissement: boolean;
    }
    /**
     * Objet de retour suite à la VOLONTE de transformer ou d'éditer une simulation ou de contractualiser un avenant
     * Les informations au comportement de validation sont regroupées ici
     */
    interface IRetourContractualisation {
        criteresModification: RestAvenantCaracteristique.ICriteresModification;
        isActionSuivantePossible: boolean;
        listeConfirmations: Array<string>;
        listeInfos: Array<string>;
        docsToBePrinted: IDataDocsToBePrinted;
        dossierDGECreated: boolean;
        isCreditRevisableAndLoiImmo: boolean;
    }
    interface IDataDocsToBePrinted {
        isImpressionMyWay: boolean;
        listeIdDocToBePrinted: Array<string>;
    }
}

declare module Avenants.Business.Modeles {
    import RestEntiteTitulaire = Avenants.Rest.Modeles.EntiteTitulaire;
    class EntiteTitulaireDescription implements IEntiteTitulaireDescription {
        idEntiteTitulaire: string;
        libelleLong: string;
        libelleModeComposition: string;
        libelleEtat: string;
        libelleUsage: string;
        listePersonne: Array<IPersonneDesignation>;
        constructor(infoET: RestEntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire);
        private getPersonneDesignation(p);
    }
}

declare module Avenants.Business.Modeles {
    class EntiteTitulaireHelper {
        static getLibelleModeComposition(modeComposition: string): string;
        static getLibelleEtat(codeEtat: string): string;
        static getLibelleUsage(codeUsage: string): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestEntiteTitulaire = Avenants.Rest.Modeles.EntiteTitulaire;
    class EntiteTitulaireResume implements IEntiteTitulaireResume {
        idEntiteTitulaire: string;
        libelleLong: string;
        libelleModeComposition: string;
        libelleEtat: string;
        libelleUsage: string;
        constructor(et: RestEntiteTitulaire.Recherche.IEntiteTitulaire);
    }
}

declare module Avenants.Business.Modeles {
    interface IEntiteTitulaireResume {
        idEntiteTitulaire: string;
        libelleLong: string;
        libelleModeComposition: string;
        libelleEtat: string;
        libelleUsage: string;
    }
    interface IEntiteTitulaireDescription extends IEntiteTitulaireResume {
        listePersonne: Array<IPersonneDesignation>;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantHisto = Avenants.Rest.Modeles.DossierCreditAvenant.Historique;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class HistoriqueBuilder {
        static getHistoriqueFormate(histo: RestAvenantHisto.IHistorique, liste: RestGestion.PersonneEmprunteur.IEmprunteurGlobal): IHistorique;
        private static getInfosFinancieres(histo, infosCredit, infosPhasesProduit, infosProduit);
        private static getEcheanceReportees(accessoire);
        private static getInfosGenerales(histo);
        private static getCaracteristiquesPhase(histo, phase, infosCredit, infosPhasesProduit);
        private static getGarantie(histo, garantie);
        private static getAssurance(histo, assurance);
        private static getAccessoire(accessoire, regleGestion);
        private static getVariationsDureesProduit(produit, credit);
        private static getVariationDureeProduit(variation, credit);
        private static getExpressionTaux(libelle, infosCredit);
        private static getCasSortie(variation, credit);
        private static getCasModulation(variation, credit);
        private static getCasRevision(variation, credit);
        private static getAccessoirePhase(accessoire, regleGestion);
        private static getRevision(phase, paramRevisionProduit, phaseProduit, listeParamRevisionTaux, listeParamRevisionProduit);
        private static getLibelleButoir(listeParamRevisionProduit);
        private static getButoirRevision(listeParamRevisionProduit, paramRevisionTaux, phase);
        private static getHausseBaisse(paramRevisionProduit, paramRevisionTaux);
        private static getPlafondPlancher(listeParamRevisionProduit, phase);
        private static getModeExpressionRevision(mode);
        private static getRegle(numero, regleGestion);
        private static getPalier(phase, palier, infosProduitPhase, infosCredit);
        private static getPretCombine(pret);
        private static getTauxPhase(phase, infosCredit, infosProduitPhase);
        private static getTauxPalier(palier, infosCredit, phase, infosProduitPhase);
        private static getPersonnalisable(palierTauxProgressAmorti);
        private static getPaliersTauxAmortissement(paliersTauxAmortissement, phasesProduits);
        private static getPalierTauxAmortissement(palierAmort, phaseProduit);
        private static getAccessoireGarantie(accessoire, regleGestion);
        private static getConventionGarantie(garantie);
        private static getCodeObligatoire(code);
        private static getCodeReserve(code);
        private static getAccessoiresAssurance(accessoire, regleGestion);
        private static getCaracteristiquesEmprunteur(emprunteur);
        private static getCaracteristiquesPayeur(payeur, motifs);
        private static getCaracteristiquesObjet(objetFinance);
    }
}

declare module Avenants.Business.Modeles {
    interface IHistorique {
        infosFinancieres: IInfosFinancieres;
        infosGenerales: IInfosGenerales;
        caracteristiquesPhase: Array<ICaraPhases>;
        listeGaranties: Array<IGarantieHistorique>;
        listeAssurances: Array<IAssuranceHistorique>;
        caracteristiquesObjet: ICaracteristiquesObjet;
        listeCaracteristiquesPayeur: Array<ICaracteristiquesPayeur>;
        listeCaracteristiquesEmprunteur: Array<IEmprunteur>;
        listeInformations: Array<string>;
    }
    interface IInfosFinancieres {
        produit: string;
        duree: number;
        uniteDuree: string;
        jourEcheance: number;
        dateMER0: string;
        montant: number;
        codeDevise: string;
        tauxNominal: number;
        indice: string;
        marge: number;
        modaliteRA: string;
        tauxIndemRA: string;
        codeModeCalculTaux: string;
        codeModeExpressionTaux: string;
        tauxFormat: string;
        variationsDureesProduit: Array<IVariationDureeProduit>;
        accessoires: Array<IAccessoireHistorique>;
        nombreEcheanceReportees: number;
        echeanceReportees: Array<IEcheanceReportees>;
    }
    interface IEcheanceReportees {
        nombreEcheanceReportees: number;
        dateDebut: string;
        dateFin: string;
        tauxReport: number;
    }
    interface IInfosGenerales {
        ancienNumeroDossier: string;
        identifiantCredit: string;
        codeEtablissement: number;
        numeroRelatif: number;
        titrePrincipal: string;
    }
    interface ICaraPhases {
        libelleLong: string;
        numeroPhase: number;
        libellePhase: string;
        dureeInitialePhaseCredit: number;
        uniteDureeInitialePhaseCredit: string;
        dateFinPrefinancementReelle: string;
        periodiciteMERInteret: string;
        periodiciteMERAmortissement: string;
        tauxPhase: number;
        modeExpressionPhase: string;
        marge: string;
        quotiteCapital: string;
        paliers: Array<IPalierHistorique>;
        pretsCombines: Array<IPretCombine>;
        paliersTauxAmortissement: Array<IPalierTauxAmortissement>;
        accessoires: Array<IAccessoireHistorique>;
        revisions: Array<IRevision>;
    }
    interface IRevision {
        jeuIndice: number;
        codeIndice: string;
        libelleIndexation: string;
        partieFixe: number;
        modeExpression: string;
        libelleButoir: string;
        butoir: number;
        modeExpressionButoir: string;
        libellePlancherPlafond: string;
    }
    interface IGarantieHistorique {
        identifiantGarantie: string;
        classe: string;
        nature: string;
        convention: string;
        garant: string;
        objetMisEnGarantie: string;
        commentaire: string;
        appartenance: string;
        pourcentageCouvert: number;
        capitalCouvert: number;
        accessoire: IAccessoireGarantieHistorique;
    }
    interface IAssuranceHistorique {
        identifiantAssurance: string;
        personneAssuree: string;
        convention: string;
        dateDebutPriseEffet: string;
        dateFinPriseEffet: string;
        montantEcheanceCouvert: number;
        quotiteCouverte: number;
        libelleNiveauRisque: string;
        libelleIntervenant: string;
        codeReserveOuExclusion: string;
        codeAssuranceObligatoire: string;
        accessoires: Array<IAccessoireAssuranceHistorique>;
    }
    interface IPretCombine {
        montantPartInfine: number;
        montantPartAmortissableCapital: number;
        partInfine: string;
        partAmortissable: string;
    }
    interface IPalierTauxAmortissement {
        numeroRelatif: number;
        premiereEcheancePalier: number;
        derniereEcheancePalier: number;
        tauxProgressionPalier: string;
        indexeTauxInteret: string;
        personalisable: string;
    }
    interface IPalierHistorique {
        tauxInteret: number;
        numTauxInteret: number;
        premiereEcheance: number;
        derniereEcheance: number;
        codeModeCalculTaux: string;
        indice: string;
        marge: number;
        tauxInteretPalier: string;
    }
    interface IVariationDureeProduit {
        casSortieCompteCourant: string;
        casModulation: string;
        casRevision: string;
    }
    interface IAccessoireHistorique {
        libelleLong: string;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        regleApplication: string;
        regleAppel: string;
        periodiciteApplication: string;
        dateAppelAccessoire: string;
        identifiantConvention: string;
        libelleConvention: string;
        libelleTypeAssiette: string;
        tauxElement: number;
        montantElement: number;
        tauxElementTranche1: number;
        tauxElementTranche2: number;
        tauxElementTranche3: number;
        tauxElementTranche4: number;
        tauxElementTranche5: number;
        montantPlafondTranche1: number;
        montantPlafondTranche2: number;
        montantPlafondTranche3: number;
        montantPlafondTranche4: number;
        montantPlafondTranche5: number;
    }
    interface IAccessoireGarantieHistorique {
        libelleLong: string;
        numeroPhase: string;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        regleApplication: string;
        regleAppel: string;
        dateAppelAccessoire: string;
        periodiciteApplication: string;
        libelleTypeAssiette: string;
        tauxElement: number;
        montantElement: number;
        tauxElementTranche1: number;
        tauxElementTranche2: number;
        tauxElementTranche3: number;
        tauxElementTranche4: number;
        tauxElementTranche5: number;
        montantPlafondTranche1: number;
        montantPlafondTranche2: number;
        montantPlafondTranche3: number;
        montantPlafondTranche4: number;
        montantPlafondTranche5: number;
    }
    interface IAccessoireAssuranceHistorique extends IAccessoireGarantieHistorique {
        tranche: number;
        libelleTranche: string;
        libellePeriodicite: string;
    }
    interface ICaracteristiquesPayeur {
        identifiantPayeur: string;
        modeReglement: string;
        libelleCompte: string;
        montantFixe: number;
        quotePartInteret: number;
        quotePartCapital: number;
        quotePartAccessoire: number;
    }
    interface IEmprunteur {
        codeTypePersonne: string;
        prenoms: string;
        civilite: string;
        nomOuRaisonSociale: string;
        dateDeNaissance: string;
        situationFamiliale: string;
        libelleTypeRole: string;
    }
    interface ICaracteristiquesObjet {
        projet: string;
        libelleProjet: string;
        precisionReglementaire: string;
        montantOperation: number;
        destination: string;
        adresse1: string;
        adresse2: string;
        adresse3: string;
        adresse4: string;
        adresse5: string;
        adresse6: string;
        occupation: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    interface IInfoObjet {
        creditObjetRest: Avenants.Rest.Modeles.DossierCreditAvenant.InformationObjet.ICreditObjet;
        identifiantObjetInitial: string;
        identifiantObjet: string;
        listeTypeObjetCommercials: Array<ITypeObjetCommercialObjet>;
        projetFinance: ITypeObjetCommercialObjet;
        projetFinanceInitial: ITypeObjetCommercialObjet;
        precisionReglementaire: ITypeObjetReglemente;
        changeProjetFinance(typeObjetCommercial: ITypeObjetCommercialObjet): void;
        montantOperation: number;
        affichageCoutObjet: boolean;
        coutHtObjet: number;
        coutTtcObjet: number;
        affichageFraisNotaire: boolean;
        fraisNotaire: number;
        affichageBoutonFraisNotaire: boolean;
        boutonFraisNotaire: boolean;
        fraisDivers: number;
        affichageBoutonFraisDivers: boolean;
        boutonFraisDivers: boolean;
        valeurHypotheque: number;
        listePrixMarches: Array<IPrixMarcheObjet>;
        prixMarche: IPrixMarcheObjet;
        affichageOccupationObjet: boolean;
        listeOccupePars: Array<IModaliteOccupationObjet>;
        objetOccupePar: IModaliteOccupationObjet;
        objetDestination: Commun.Enum.DestinationBienGarantie;
        boutonAchevementTravaux: boolean;
        nbLogement: number;
        zoneFranche: IZoneFrancheObjet;
        listeZoneGeographiques: Array<IZoneGeographiqueObjet>;
        zoneGeographique: IZoneGeographiqueObjet;
        desactiverZoneGeographiqueRobien: boolean;
        listeZoneRobiens: Array<IZoneRobienObjet>;
        zoneDeRobien: IZoneRobienObjet;
        loadingZones: boolean;
        isModeEdition: boolean;
        adresseObjet: IAdresseObjet;
        adresseObjetComposant: myway.comAdresseDqe.Adresse;
        descObjet: string;
        referenceExterne: string;
        affichageVendeur: boolean;
        vendeur: string;
        listeTypeMarcheBiens: Array<ITypeMarcheBien>;
        listeModeEstimationBienTerrains: Array<RestAvenant.InformationObjet.ITypologieInstruction>;
        listeMiseEnOeuvreBiens: Array<IMiseEnOeuvreBien>;
        typeMarcheBien: ITypeMarcheBien;
        valeurDuBien: number;
        dateEstimationBien: Date;
        modeEstimationBien: RestAvenant.InformationObjet.ITypologieInstruction;
        affichageSurfaceTypeBien: boolean;
        surfaceHabitableBien: number;
        typeLogementBien: Commun.Enum.TypeLogementGarantie;
        affichageMiseOeuvreBien: boolean;
        miseOeuvreBien: IMiseEnOeuvreBien;
        surfaceTerrain: number;
        affichageTerrain: boolean;
        affichageModeAcquisitionTerrain: boolean;
        affichageAutreChampTerrain: boolean;
        listeModeAcquisitionTerrains: Array<IModeAcquisitionTerrain>;
        modeAcquisitionTerrain: IModeAcquisitionTerrain;
        dateAcquisitionTerrain: Date;
        montantAcquisitionTerrain: number;
        dateEstimationTerrain: Date;
        modeEstimationTerrain: RestAvenant.InformationObjet.ITypologieInstruction;
        isValid(): boolean;
        reportDataAdresseComposantToDataAdresse(): void;
        isAdressesDifferentes(): boolean;
        setZones(controleZonePtz: RestAvenantParam.ControleZonePtz.IControleZonePtz): void;
    }
    interface IAdresseObjet {
        adresseLigne1: string;
        adresseLigneSuite6: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigneCodePostal4: string;
        adresseLigneCommune5: string;
        codePaysLocalisation: string;
    }
    interface IPrixMarcheObjet {
        valeur: string;
        code: number;
    }
    interface IModaliteOccupationObjet {
        valeur: string;
        code: string;
    }
    interface IZoneFrancheObjet {
        valeur: string;
        code: string;
    }
    interface IZoneRobienObjet {
        valeur: string;
        code: number;
    }
    interface IZoneGeographiqueObjet {
        valeur: string;
        code: string;
    }
    interface ITypeMarcheBien {
        valeur: string;
        code: number;
    }
    interface IModeEstimationBienTerrain {
        valeur: string;
        code: string;
    }
    interface IMiseEnOeuvreBien {
        valeur: string;
        code: number;
    }
    interface IModeAcquisitionTerrain {
        valeur: string;
        code: number;
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoObjet = Avenants.Rest.Modeles.DossierCreditAvenant.InformationObjet;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class InfoObjet implements IInfoObjet {
        private _isCodeClasseBafiB5A;
        identifiantObjetInitial: string;
        creditObjetRest: RestInfoObjet.ICreditObjet;
        identifiantObjet: string;
        listeTypeObjetCommercials: Array<ITypeObjetCommercialObjet>;
        projetFinance: ITypeObjetCommercialObjet;
        projetFinanceInitial: ITypeObjetCommercialObjet;
        precisionReglementaire: ITypeObjetReglemente;
        montantOperation: number;
        affichageCoutObjet: boolean;
        coutHtObjet: number;
        coutTtcObjet: number;
        affichageFraisNotaire: boolean;
        fraisNotaire: number;
        affichageBoutonFraisNotaire: boolean;
        boutonFraisNotaire: boolean;
        fraisDivers: number;
        affichageBoutonFraisDivers: boolean;
        boutonFraisDivers: boolean;
        valeurHypotheque: number;
        listePrixMarches: Array<IPrixMarcheObjet>;
        prixMarche: IPrixMarcheObjet;
        affichageOccupationObjet: boolean;
        listeOccupePars: Array<IModaliteOccupationObjet>;
        objetOccupePar: IModaliteOccupationObjet;
        objetDestination: Commun.Enum.DestinationBienGarantie;
        nbLogement: number;
        listeZoneFranches: Array<IZoneFrancheObjet>;
        boutonAchevementTravaux: boolean;
        zoneFranche: IZoneFrancheObjet;
        listeZoneGeographiques: Array<IZoneGeographiqueObjet>;
        zoneGeographique: IZoneGeographiqueObjet;
        desactiverZoneGeographiqueRobien: boolean;
        listeZoneRobiens: Array<IZoneRobienObjet>;
        zoneDeRobien: IZoneRobienObjet;
        loadingZones: boolean;
        isModeEdition: boolean;
        adresseObjet: IAdresseObjet;
        adresseObjetComposant: myway.comAdresseDqe.Adresse;
        descObjet: string;
        referenceExterne: string;
        affichageVendeur: boolean;
        vendeur: string;
        listeTypeMarcheBiens: Array<ITypeMarcheBien>;
        listeModeEstimationBienTerrains: Array<RestInfoObjet.ITypologieInstruction>;
        listeMiseEnOeuvreBiens: Array<IMiseEnOeuvreBien>;
        typeMarcheBien: ITypeMarcheBien;
        valeurDuBien: number;
        dateEstimationBien: Date;
        modeEstimationBien: RestInfoObjet.ITypologieInstruction;
        affichageSurfaceTypeBien: boolean;
        surfaceHabitableBien: number;
        typeLogementBien: Commun.Enum.TypeLogementGarantie;
        affichageMiseOeuvreBien: boolean;
        miseOeuvreBien: IMiseEnOeuvreBien;
        surfaceTerrain: number;
        affichageTerrain: boolean;
        affichageModeAcquisitionTerrain: boolean;
        affichageAutreChampTerrain: boolean;
        listeModeAcquisitionTerrains: Array<IModeAcquisitionTerrain>;
        modeAcquisitionTerrain: IModeAcquisitionTerrain;
        dateAcquisitionTerrain: Date;
        montantAcquisitionTerrain: number;
        dateEstimationTerrain: Date;
        modeEstimationTerrain: RestInfoObjet.ITypologieInstruction;
        constructor(typologieInstructions: Array<RestInfoObjet.ITypologieInstruction>, creditObjet: RestInfoObjet.ICreditObjet, codeTypeAcces: Commun.Enum.CodeTypeAcces, controleZonePtz: RestAvenantParam.ControleZonePtz.IControleZonePtz, listeToc: Array<ITypeObjetCommercialObjet>);
        changeProjetFinance(typeObjetCommercial: ITypeObjetCommercialObjet): void;
        changeFraisNotaire(): void;
        changeFraisDivers(): void;
        changePrecisionReglementaire(typeObjetReglementeTor: ITypeObjetReglemente): void;
        isValid(): boolean;
        /**
         * Dans le cas de la présence d'une adresse, l'enregistrement est possible uniquement si elle est valide
         */
        private isValidAdresse();
        /**
         * Le composant adresse manipule un objet en particulier (initialisé par le service du composant)
         * Une fois la garantie validée, il faut reporter les données dans les données à enregistrer
         * ! les données ligne1 et 2 sont optionnelles, il faut des valeurs par défaut
         */
        reportDataAdresseComposantToDataAdresse(): void;
        protected getTypeObjetCommercial(creditObjet: RestInfoObjet.ICreditObjet, listeToc: Array<ITypeObjetCommercialObjet>): ITypeObjetCommercialObjet;
        protected getPrecisionReglementaire(creditObjet: RestInfoObjet.ICreditObjet, toc: ITypeObjetCommercialObjet): ITypeObjetReglemente;
        protected prixMarcheInit(creditObjet: RestInfoObjet.ICreditObjet, listePrixMarches: Array<IPrixMarcheObjet>): IPrixMarcheObjet;
        protected prixMarcheSel(creditObjetCodePrixMarche: string, listePrixMarches: Array<IPrixMarcheObjet>): IPrixMarcheObjet;
        private getListePrixMarche();
        protected objetOccupeParInit(creditObjet: RestInfoObjet.ICreditObjet, listeOccupePars: Array<IModaliteOccupationObjet>, affichageOccupationObjet: boolean): IModaliteOccupationObjet;
        protected objetOccupeParSel(creditObjetCodeModaliteOccupation: string, listeOccupePars: Array<IModaliteOccupationObjet>): IModaliteOccupationObjet;
        private getListeModaliteOccupation();
        protected zoneFrancheInit(creditObjet: RestInfoObjet.ICreditObjet, listeZoneFranches: Array<IZoneFrancheObjet>): IZoneFrancheObjet;
        protected zoneFrancheSel(creditObjetCodeDestinationAutoriseeObjet: string, listeZoneFranches: Array<IZoneFrancheObjet>): IZoneFrancheObjet;
        private getListeZoneFranche();
        private getListeZoneRobien();
        protected selectionZoneRobien(codeZoneGeographique: string, listeZoneRobiens: Array<IZoneRobienObjet>): IZoneRobienObjet;
        protected selectionZoneGeo(codeZoneGeographique: string, listeZoneGeographiques: Array<IZoneGeographiqueObjet>): IZoneGeographiqueObjet;
        private getListeZoneGeographique();
        private getAdresseObjetInit(creditObjet);
        protected typeMarcheBienInit(creditObjet: RestInfoObjet.ICreditObjet, listeTypeMarcheBiens: Array<ITypeMarcheBien>): ITypeMarcheBien;
        protected typeMarcheBienSel(creditObjetCodeQualiteMarche: string, listeTypeMarcheBiens: Array<ITypeMarcheBien>): ITypeMarcheBien;
        private getListeTypeMarcheBiens();
        protected getListeModeEstimationBienTerrains(typologieInstructions: Array<RestInfoObjet.ITypologieInstruction>): Array<RestInfoObjet.ITypologieInstruction>;
        protected miseOeuvreBienInit(creditObjet: RestInfoObjet.ICreditObjet, listeMiseEnOeuvreBiens: Array<IMiseEnOeuvreBien>): IMiseEnOeuvreBien;
        protected miseOeuvreBienSel(creditObjetCodeMiseEnOeuvreProjet: string, listeMiseEnOeuvreBiens: Array<IMiseEnOeuvreBien>): IMiseEnOeuvreBien;
        private getListeMiseEnOeuvreBiens();
        private getListeModeAcquisitionTerrain(creditObjet);
        protected modeAcquisitionTerrainInit(creditObjet: RestInfoObjet.ICreditObjet, listeModeAcquisitionTerrains: Array<IModeAcquisitionTerrain>): IModeAcquisitionTerrain;
        protected modeAcquisitionTerrainSel(creditObjetModeAcquisition: string, creditObjetCodeTypologieCadreFiscal: string, creditObjetTypeObjetReglementeTor: string, listeModeAcquisitionTerrains: Array<IModeAcquisitionTerrain>): IModeAcquisitionTerrain;
        protected modeEstimationTerrainInit(creditObjet: RestInfoObjet.ICreditObjet, typologieInstructions: Array<RestInfoObjet.ITypologieInstruction>): RestInfoObjet.ITypologieInstruction;
        protected affichageChampTerrainInit(creditObjet: RestInfoObjet.ICreditObjet, typeObjetReglementeTor: string): Array<boolean>;
        getZoneGeo(controleZonePtz: RestAvenantParam.ControleZonePtz.IControleZonePtz, listeZoneGeographiques: Array<IZoneGeographiqueObjet>): IZoneGeographiqueObjet;
        getZoneRobien(controleZonePtz: RestAvenantParam.ControleZonePtz.IControleZonePtz, listeZoneRobiens: Array<IZoneRobienObjet>): IZoneRobienObjet;
        protected getDesactiverZoneGeographiqueRobien(controleZonePtz: RestAvenantParam.ControleZonePtz.IControleZonePtz, creditObjet: RestInfoObjet.ICreditObjet): boolean;
        getZoneFranche(controleZonePtz: RestAvenantParam.ControleZonePtz.IControleZonePtz, creditObjet: RestInfoObjet.ICreditObjet, listeZoneGeographiques: Array<IZoneGeographiqueObjet>): IZoneGeographiqueObjet;
        controleZoneGeo(codeZoneGeographique: string): boolean;
        isAdressesDifferentes(): boolean;
        /**
         * Modifification de la zone géographique et la zone de Robien suite au changement d'adresse
         */
        setZones(controleZonePtz: RestAvenantParam.ControleZonePtz.IControleZonePtz): void;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCompte = Avenants.Rest.Modeles.DossierCreditAvenant.ListerCompte;
    class CompteBuilder {
        static getCompte(compte: RestAvenantCompte.ICompte): ICompte;
        private static getLibelleDetailCompte(libelleComposition, libelleProduit);
    }
    class CompteHelper {
        static getLibelleProduit(codeProduit: string): string;
        static getLibelleComposition(modeComposition: string): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestPartInfo = Avenants.Rest.Modeles.Tiers.ParticulieInformation;
    import RestCorporateInfo = Avenants.Rest.Modeles.TiersCorporate.CorporateInformation;
    class EmprunteurNouveau implements IEmprunteurNouveau {
        private _codeTypeAcces;
        private _idEntiteTitulaireInitiale;
        private _listeModeRecouvrement;
        private _listePayeurBeforeEdit;
        private _payeurSecoursBeforeEdit;
        listeCategorieEmprunteur: Array<ICategorieEmprunteur>;
        categorie: ICategorieEmprunteur;
        listeMotifChangement: Array<IMotifChangement>;
        motifChangement: IMotifChangement;
        idEntiteTitulaire: string;
        afficherBoutonPayeur: boolean;
        libelleLong: string;
        listePersonneEmprunteur: Array<IPersonneEmprunteur>;
        listePayeurStock: Array<IPayeur>;
        payeurSecours: IFluxFinancierPayeur;
        /**
         * Il faut différencier les payeurs visibles (ne pas afficher les supprimées)
         */
        listePayeurAvailables: Array<IPayeur>;
        constructor(emprunteur: RestAvenant.Personnes.IEmprunteur, dataPayeur: Array<RestAvenant.Personnes.IPayeur>, listePersonneEmprunteur: Array<RestAvenant.Personnes.IPersonneEmprunteur>, listePersonneCompte: Array<RestAvenant.ListerCompte.IPersonne>, listeParticulier: Array<RestPartInfo.IParticulierInformation>, listeCorporateInformation: Array<RestCorporateInfo.ICorporateInformation>, listeCategorieEmprunteur: Array<ICategorieEmprunteur>, listeMotifChangement: Array<IMotifChangement>, listeModeRecouvrement: Array<IModeRecouvrement>, codeTypeAcces: Commun.Enum.CodeTypeAcces);
        getAfficherBoutonPayeur(codeTypeAcces: Commun.Enum.CodeTypeAcces, idEntiteTitulaire: string, idEntiteTitulaireInitiale: string): boolean;
        addPayeur(): void;
        /**
         * Gère le mode édition du payeur (passage en édition, annulation)
         * Sauvegarde la version du payeur à l'instant de la demande d'édition
         * @param action
         * @param idPayeurIhm
         */
        setPayeurEdition(action: Enum.ActionManipulationElement, idPayeurIhm: number): void;
        /**
         * Gère le mode édition du payeur de secours (passage en édition, annulation)
         * Sauvegarde la version du payeur à l'instant de la demande d'édition
         * @param action
         */
        setPayeurSecoursEdition(action: Enum.ActionManipulationElement): void;
        /**
         * Applique les données du nouvel emprunteur chargé (suite à une recherche du gestionnaire)
         */
        setDataEmprunteurNouveau(data: IDataNouvelEmprunteurAvenantPersonnes): void;
        /**
         * Positionne le motif de changement en place ou place celui par défaut ("Mutation suite à divorce <=> "MD")
         */
        private getMotifChangement(listeMotifChangement, codeMotif);
        /**
         * Génération des personnes composant l'emprunteur en combinant les différentes informations
         */
        private getListePersonneEmprunteur(listePersonneEmprunteur, listeParticulier, listeCorporateInformation, listePersonneCompte);
        private getParticulierInformationByPersonne(persByEmprunteur, listeParticulier);
        private getCorporateInformationByPersonne(persByEmprunteur, listeCorporateInformation);
        /**
         * Chargement des payeurs en place pour l'emprunteur du crédit
         */
        private getListePayeurEmprunteurActuel(dataPayeur, listePersonneEmprunteur, listeModeRecouvrement);
        /**
         * Chargement des payeurs pour un nouvel emprunteur
         */
        private getListePayeurNouvelEmprunteur(listePersonneEmprunteur, listeModeRecouvrement);
        private getPayeurSecours(emprunteur, listePersonneEmprunteur, listeModeRecouvrement);
        /**
         * Cas particulier de la personne morale emprunteur, les autres personnes physiques ne peuvent pas payer (elles font partie la personne morale)
         * @param listePersonneEmprunteur: toutes les personnes
         */
        private getListePersonnePayeurSecours(listePersonneEmprunteur);
    }
}

declare module Avenants.Business.Modeles {
    class FluxFinancierPayeur implements IFluxFinancierPayeur {
        listeModeRecouvrement: Array<IModeRecouvrement>;
        modeRecouvrement: IModeRecouvrement;
        listePersonne: Array<IPersonneEmprunteur>;
        compte: ICompte;
        iban: string;
        bic: string;
        referenceUniqueMandat: string;
        libelleReglement: string;
        modeEdition: boolean;
        /**
         * Des champs sont en erreurs
         */
        isInvalid: boolean;
        isRumRequired: boolean;
        constructor(listeModeRecouvrement: Array<IModeRecouvrement>, listePersonne: Array<IPersonneEmprunteur>, codeModeReglement: string, numDomiciliationMisRecouvrement: string, rum: string, modeEdition?: boolean);
        /**
         * Champ de lecture non géré par le formulaire, c'est un choix utilisateur
         */
        private isCompteValid();
        /**
         * Initialisation des différent champ selon le mode de recouvrement
         */
        private initDomiciliation(codeTypeDomiciliation, numDomiciliationMisRecouvrement, rum, listePersonne);
    }
}

declare module Avenants.Business.Modeles {
    interface ICategorieEmprunteur {
        codeCategorie: string;
        codeTypeMarche: string;
        libelle: string;
        numeroOrdreClassement: number;
    }
    interface IMotifChangement {
        codeMotifBlocage: string;
        libelle: string;
    }
    interface IModeRecouvrement {
        codeModeReglement: string;
        libelleCourt: string;
        libelleLong: string;
        codeTypeDomiciliation: string;
        numeroOrdreClassement: number;
    }
    interface IFluxFinancierPayeur {
        listeModeRecouvrement: Array<IModeRecouvrement>;
        modeRecouvrement: IModeRecouvrement;
        listePersonne: Array<IPersonneEmprunteur>;
        compte: ICompte;
        iban: string;
        bic: string;
        referenceUniqueMandat: string;
        libelleReglement: string;
        modeEdition: boolean;
        isInvalid: boolean;
    }
    interface IPayeur extends IFluxFinancierPayeur {
        idIhm: number;
        libelle: string;
        typePersonne: Commun.Enum.TypePersonne;
        moyenRepartition: Enum.PayeurMoyenRepartition;
        montantFixe: number;
        partInterets: number;
        partCapital: number;
        partAccessoires: number;
        isNouveauPayeur: boolean;
        isCreationFirstEdition: boolean;
        isEditionCanBeCanceled: boolean;
        etatManipulation: Enum.EtatManipulation;
        loadingData: boolean;
        isRumRequired: boolean;
    }
    interface ICompte {
        numeroCompte: string;
        idPersonne: string;
        libelleDetailCompte: string;
        codeProduit: string;
        libelleProduit: string;
        libelleComposition: string;
    }
    interface IEmprunteurActuel {
        libelleLong: string;
        categorie: ICategorieEmprunteur;
    }
    interface IEmprunteurNouveau {
        listeCategorieEmprunteur: Array<ICategorieEmprunteur>;
        categorie: ICategorieEmprunteur;
        listeMotifChangement: Array<IMotifChangement>;
        motifChangement: IMotifChangement;
        idEntiteTitulaire: string;
        afficherBoutonPayeur: boolean;
        libelleLong: string;
        listePersonneEmprunteur: Array<IPersonneEmprunteur>;
        listePayeurStock: Array<IPayeur>;
        listePayeurAvailables: Array<IPayeur>;
        payeurSecours: IFluxFinancierPayeur;
        addPayeur(): void;
        setDataEmprunteurNouveau(data: IDataNouvelEmprunteurAvenantPersonnes): void;
        setPayeurEdition(action: Enum.ActionManipulationElement, idPersonneIhm: number): void;
        setPayeurSecoursEdition(action: Enum.ActionManipulationElement): void;
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Utilisé pour avoir les informations des personnes
     */
    interface IPersonneDesignation {
        idPersonne: string;
        libelleLong: string;
    }
    /**
     * Utilisé pour les assurances / garanties
     */
    interface IPersonneAssurableGarant {
        identifiantPersonne: string;
        role: Commun.Enum.RolePersonne;
        libelleLong: string;
        libelleTiers: string;
        estPersonnePhysique: boolean;
        dateNaissance: Date;
    }
    /**
     * Elément utilisé dans le cadre de l'avenant de personnes
     */
    interface IPersonneEmprunteur extends IPersonneDesignation, IPersonneEmprunteurDataPersonnePhysique, IPersonneEmprunteurDataPersonneMorale {
        typePersonne: Commun.Enum.TypePersonne;
        genrePersonne: Commun.Enum.GenrePersonne;
        listeCompte: Array<ICompte>;
        libelleLongWithIdAndRole: string;
        libelleDescription: string;
        libelleTiers: string;
        role: Commun.Enum.RolePersonne;
        listeEntiteTitulaireResume: Array<IEntiteTitulaireResume>;
        numeroOrdrePersonne: number;
    }
    interface IPersonneEmprunteurDataPersonnePhysique {
        dateNaissance: Date;
    }
    interface IPersonneEmprunteurDataPersonneMorale {
        raisonSociale: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class Payeur extends FluxFinancierPayeur implements IPayeur {
        idIhm: number;
        libelle: string;
        typePersonne: Commun.Enum.TypePersonne;
        moyenRepartition: Enum.PayeurMoyenRepartition;
        montantFixe: number;
        partInterets: number;
        partCapital: number;
        partAccessoires: number;
        isNouveauPayeur: boolean;
        isCreationFirstEdition: boolean;
        etatManipulation: Enum.EtatManipulation;
        loadingData: boolean;
        /**
         * L'annulation du mode édition est possible uniquement si le payeur est en mode édition et si ce n'est pas la 1ère édition d'une création
         */
        isEditionCanBeCanceled: boolean;
        constructor(idIhm: number, payeur: RestAvenant.Personnes.IPayeur, personneEmprunteur: IPersonneEmprunteur, listeModeRecouvrement: Array<IModeRecouvrement>);
    }
    class PayeurHelper {
        static getLibellePayeur(personneEmprunteur: IPersonneEmprunteur): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class PersonneAssurableGarantBuilder {
        static getResult(p: RestAvenant.CaracteristiqueFinan.IPersonneAssurableOuGarant | RestAvenant.Garanties.IPersonneAssurableOuGarantCatalogue): IPersonneAssurableGarant;
        private static getDescriptionAge(dateNaissance);
        static getResultByRecherchePersonne(recherchePersonneRetour: myway.comGestionClient.RecherchePersonneRetour): IPersonneAssurableGarant;
        private static getLibelleTiersPersonne(p);
        private static getLibelleTiersWithComplement(p);
        static getResultByPersonneEmprunteur(p: IPersonneEmprunteur): IPersonneAssurableGarant;
    }
}

declare module Avenants.Business.Modeles {
    import RestPartInfo = Avenants.Rest.Modeles.Tiers.ParticulieInformation;
    import RestCorporateInfo = Avenants.Rest.Modeles.TiersCorporate.CorporateInformation;
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class PersonneEmprunteurBuilder {
        static getPersonneEmprunteur(part: RestPartInfo.IParticulierInformation, corporate: RestCorporateInfo.ICorporateInformation, personneCompte: RestAvenant.ListerCompte.IPersonne, personneEmprunteur: RestAvenant.Personnes.IPersonneEmprunteur, listeET?: Array<Modeles.IEntiteTitulaireResume>): IPersonneEmprunteur;
        /**
         * Génération de la base propre à une personne physique
         */
        private static getPersonneEmprunteurBasePersonnePhysique(part, personneEmprunteur);
        /**
         * Génération de la base propre à une personne physique
         */
        private static getPersonneEmprunteurBasePersonneMorale(corporate, role);
        private static getLibelleLongWithIdAndRole(libelleLong, idPersonne, role);
        /**
         * filtre uniquement sur les comptes courants (CDD/CCE)
         */
        private static getListeCompte(personneCompte);
    }
}

declare module Avenants.Business.Modeles {
    import RestPartInfo = Avenants.Rest.Modeles.Tiers.ParticulieInformation;
    class PersonneEmprunteurHelper {
        /**
         * Génération de l'intitulé de la personne selon les informations souhaitées
         */
        static getLibelleLongPersonneCustom(p: RestPartInfo.IParticulierInformation, withDateNaissance: boolean, withSituationFamiliale: boolean, typeRolePersonne?: string): string;
        /**
         * Insertion de la date avec le mot de liaison en amont selon la civilité de la personne
         */
        private static getPartLibelleCustomDateNaissance(p);
        static getLibelleTiersPersonne(p: RestPartInfo.IParticulierInformation): string;
        static getLibelleLongPersonne(p: RestPartInfo.IParticulierInformation): string;
        static normeBic(bic: string): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantAjustEcheance = Avenants.Rest.Modeles.AvenantCreditService.AjustementEcheances;
    import RestPalierCredit = Avenants.Rest.Modeles.DossierCreditGestion.PalierCredit;
    class EcheanceALaCarte implements IEcheanceALaCarte {
        numeroPhase: number;
        numeroRelatif: number;
        numeroEcheance: number;
        codeTypeElementSaisiSurCredit: string;
        montantRemboursementSaisi: number;
        tauxRemboursementSaisi: number;
        montantAmortissementCreditSaisi: number;
        montantEcheanceEnCours: number;
        montantEcheanceMaj: number;
        isMontantModifiable: boolean;
        tauxProgression: number;
        isLastPalierOfLastPhase: boolean;
        constructor(palierByAjustEcheance: RestAvenantAjustEcheance.IPalier, palierByPalierCredit: RestPalierCredit.IPalier, elementModifiableParAvenant: string, isLastPalierOfLastPhase: boolean, numeroEcheanceScission: number, typeCalcul: Enum.TypeCalculAjustementEcheancesTaux, isChangementProduit: boolean);
        protected getMontantEcheanceMaj(palier: RestAvenantAjustEcheance.IPalier, numeroEcheanceScission: number, codeTypeElementSaisiSurCredit: string): number;
        private getIsMontantModifiablePalier(typeCalcul, numeroPremiereEcheancePalier, numeroEcheanceScission, isLastPalierOfLastPhase);
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    interface IPhase {
        statutPhase: Enum.StatutPhase;
        numeroPhase: number;
        numeroPhaseInitial: number;
        libelleTypePhase: string;
        libelleLongAjustement: string;
        isPhasePrefi: boolean;
        isPhaseActive: boolean;
        isPhaseImpacteAte: boolean;
        isScission: boolean;
        modeTaux: string;
        duree: number;
        dureeTemp: number;
        dureeInitiale: number;
        dureeMinPhase: number;
        dureeMaxPhase: number;
        libelleHelpDureePhase: string;
        libelleErreurDureePhase: string;
        activerDureePhase: boolean;
        libelleUniteDuree: string;
        uniteDureePhase: string;
        taux: number;
        tauxInitial: number;
        showTaux: boolean;
        activerTaux: boolean;
        tauxMinimum: number;
        tauxMaximum: number;
        libelleHelpTaux: string;
        libelleErreurTaux: string;
        isTauxValid(): boolean;
        showQuotiteAmortissement: boolean;
        quotiteAmortissement: number;
        indice: string;
        valeurIndice: number;
        showIndice: boolean;
        activerIndice: boolean;
        marge: number;
        margeInitiale: number;
        showMarge: boolean;
        activerMarge: boolean;
        margeMinimum: number;
        margeMaximum: number;
        libelleHelpMarge: string;
        libelleErreurMarge: string;
        isMargeValid(): boolean;
        periodiciteAmortissementTemporaire: IPeriodicitePhase;
        periodiciteInteretTemporaire: IPeriodicitePhase;
        isAnciennePhaseEnCours: boolean;
        isNouvellePhaseScission: boolean;
        dureePhaseAvantScission: number;
        periodiciteInteret: IPeriodicitePhase;
        periodiciteCalculInterets: IPeriodicitePhase;
        periodiciteCalculInteretsInitial: IPeriodicitePhase;
        periodiciteAmortissement: IPeriodicitePhase;
        periodiciteAmortissementInitiale: IPeriodicitePhase;
        periodiciteInteretInitiale: IPeriodicitePhase;
        listePeriodiciteInteret: Array<IPeriodicitePhase>;
        listePeriodiciteAmortissement: Array<IPeriodicitePhase>;
        activerPeriodiciteAmor: boolean;
        activerPeriodiciteInteret: boolean;
        libelleErreurPeriodiciteInt: string;
        libelleErreurPeriodiciteAmor: string;
        libelleErreurModifPhasePaliers: Array<string>;
        typeFinancement: Enum.TypeFinancement;
        libelleTypeFinancement: string;
        codeTypePhase: string;
        ate: IAte;
        isCreditDirecteur: boolean;
        tauxDirecteur: number;
        tauxDirecteurInit: number;
        tauxMinDirecteur: number;
        tauxMaxDirecteur: number;
        libelleHelpTauxDirecteur: string;
        libelleErreurTauxDirecteur: string;
        activerTauxDirecteur: boolean;
        showIndiceDirecteur: boolean;
        activerIndiceDirecteur: boolean;
        showMargeDirecteur: boolean;
        activerMargeDirecteur: boolean;
        indiceTauxDirecteurs: Array<string>;
        indiceTauxDirecteurSel: string;
        _indiceTauxDirecteurSel: string;
        margeDirecteur: number;
        margeMinDirecteur: number;
        margeMaxDirecteur: number;
        libelleHelpMargeDirecteur: string;
        libelleErreurMargeDirecteur: string;
        isDureePhaseAbsorbee: boolean;
        statutAbsorptionPhase: Enum.StatutAbsorption;
        listePalier: Array<IPalier>;
        isPhaseWithDureePalierEdit: boolean;
        isPhaseWithEcheancePalierEdit: boolean;
        reportMajTauxToPaliers(numeroEcheanceScission: number, toSplitPalier: boolean): void;
        reportNouvelleDureeToDernierePhase(newDuree: number, isAmortissementALaCarte: boolean): void;
        cdModifCaracFinanciere: string;
        prelevementEnFinPhase: string;
        elementModifiableParAvenant: string;
        phaseModifieeAte: boolean;
        numRelatifPhaseTypePhaseProduit: number;
        isInvalid: boolean;
        isPeriodiciteInvalide: boolean;
        parametresRevisionTaux: Array<IParametreRevisionTaux>;
        codeProduitRevisableProduit: string;
        phaseByRest: RestInfoCredit.IPhase;
        phaseByProduit: Avenants.Rest.Modeles.AvenantCreditParam.Produit.IPhase;
        isPhaseDirectrice: boolean;
        isPalierTauxInteretDirecteur: boolean;
        isModifTauxFromModifMarge: boolean;
        isModifPhaseInvalide: boolean;
        isChangementProduit: boolean;
        activerDureePhaseDT: boolean;
        palierProgAmors: Array<Modeles.IPalierProgAmor>;
    }
    interface IParametreRevisionTaux {
        numeroPhase: number;
        paramRevTauxRest: RestInfoCredit.IParametreRevisionTaux;
    }
    interface IPalier {
        numeroPalier: number;
        numeroPhase: number;
        periodiciteMERamortissement: string;
        periodiciteMERinteretPhase: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        numeroRelatif1: number;
        taux: number;
        marge: number;
        margeInit: number;
        indice: string;
        numeroPremiereEcheance: number;
        numeroDerniereEcheance: number;
        duree: number;
        libellePeriodeDuree: string;
        isDureeModifiable: boolean;
        elementModifiableParAvenant: string;
        isPalierModifiableParAvenant: boolean;
        cdModifCaracteristfinancieres: string;
        codeRoleCreditAvenant: string;
        typeRemboursement: string;
        isAfterDateEffet: boolean;
        echeanceALaCarteForCalculatrice: IEcheanceALaCarte;
        listeEcheanceALaCarte: Array<IEcheanceALaCarte>;
        palierByRest: RestInfoCredit.IPalierTauxInteret;
        titrePalier: string;
        isPalierADateEffet: boolean;
        isPalierApresDateEffet: boolean;
        valeurTaux: string;
        isPalierDirecteur: boolean;
        isAffichagePalierDateEffet: boolean;
        tauxMinimum: number;
        tauxMaximum: number;
        tauxInit: number;
        showIndicePalier: boolean;
        activerIndicePalier: boolean;
        showMargePalier: boolean;
        activerMargePalier: boolean;
        activerTauxPalier: boolean;
        isDureePalierAbsorbee: boolean;
        statutAbsorptionPalier: Enum.StatutAbsorption;
        tauxProgEch: number;
        tauxProgEchInitial: number;
        libelleHelpTauxProgEch: string;
        tauxProgEchMin: number;
        tauxProgEchMax: number;
        activerTauxProgEch: boolean;
        libelleErreurTauxProgEch: string;
        libelleErreurModifPaliers: Array<string>;
        isPalierAvecTauxProgEchAZero: boolean;
        getDureeConverted(duree: number, unitePeriodeInit: string, unitePeriodeSouhaitee: string): number;
        setDureePalier(numFirstEcheance: number, numLastEcheance: number): void;
        reportTauxFromPhase(tauxPhase: number, margePhase: number, withSiccsion: boolean): void;
        reportNouvelleDureeToDernierPalier(newDuree: number): void;
        isTauxProgEchInvalid: boolean;
    }
    interface IEcheanceALaCarte {
        numeroRelatif: number;
        numeroPhase: number;
        numeroEcheance: number;
        codeTypeElementSaisiSurCredit: string;
        montantRemboursementSaisi: number;
        tauxRemboursementSaisi: number;
        montantAmortissementCreditSaisi: number;
        montantEcheanceEnCours: number;
        montantEcheanceMaj: number;
        isMontantModifiable: boolean;
        tauxProgression: number;
        isLastPalierOfLastPhase: boolean;
    }
    interface IPeriodicitePhase {
        codePeriode: string;
        libellePeriode: string;
    }
    interface IPhaseDatee {
        nofafp: number;
        nofcfp: number;
        ctfcfp: string;
        dateDbtPhase: Date;
        dateFinPhase: Date;
        nPremEch: number;
        nDernEch: number;
    }
    interface IPalierProgAmor {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroPhase: number;
        numeroRelatif: number;
        numeroPremiereEcheance: number;
        numeroDerniereEcheance: number;
        tauxProgAmor: number;
        tauxProgAmorInitial: number;
        cdIndexTauxProgAmor: string;
        uniteDureePhase: string;
        numeroRelatif1: number;
        numeroRelatifSimulationAvenant: number;
        numPhaseCreditProchaineRev: number;
        numeroRelatif2: number;
        elementModifiableParAvenant: string;
        codeOccurAbsorbeePhasePalier: string;
        activerTauxProgAmor: boolean;
        indexeTauxInteret: string;
        isIndexeTauxInteret: boolean;
        desactiverIndexationTauxInteret: boolean;
        titrePalier: string;
        numeroPalier: number;
        nbEcheance: number;
        nbEcheanceInit: number;
        statutAbsorptionPalier: Enum.StatutAbsorption;
        palierProgAmorProduit: Avenants.Rest.Modeles.AvenantCreditParam.Produit.IPalierProgressionAmortissement;
        libelleErreurModifPaliers: Array<string>;
        isPalierADateEffet: boolean;
        isPalierApresDateEffet: boolean;
        isAffichagePalierDateEffet: boolean;
        isTauxProgAmorInvalid: boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class PalierProgAmor implements IPalierProgAmor {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroPhase: number;
        numeroRelatif: number;
        numeroPremiereEcheance: number;
        numeroDerniereEcheance: number;
        tauxProgAmor: number;
        tauxProgAmorInitial: number;
        cdIndexTauxProgAmor: string;
        uniteDureePhase: string;
        numeroRelatif1: number;
        numeroRelatifSimulationAvenant: number;
        numPhaseCreditProchaineRev: number;
        numeroRelatif2: number;
        elementModifiableParAvenant: string;
        codeOccurAbsorbeePhasePalier: string;
        activerTauxProgAmor: boolean;
        indexeTauxInteret: string;
        isIndexeTauxInteret: boolean;
        desactiverIndexationTauxInteret: boolean;
        titrePalier: string;
        numeroPalier: number;
        statutAbsorptionPalier: Enum.StatutAbsorption;
        tauxProgAmorMin: number;
        tauxProgAmorMax: number;
        libelleHelpTauxProgAmor: string;
        libelleErreurTauxProgAmor: string;
        nbEcheance: number;
        nbEcheanceInit: number;
        palierProgAmorProduit: RestAvenantParam.Produit.IPalierProgressionAmortissement;
        libelleErreurModifPaliers: Array<string>;
        isPalierADateEffet: boolean;
        isPalierApresDateEffet: boolean;
        isAffichagePalierDateEffet: boolean;
        isTauxProgAmorInvalid: boolean;
        constructor(p: RestGestion.InformationCredit.IPalierTauxAmortissement, credit: RestGestion.InformationCredit.ICredit, phaseByProduit: RestAvenantParam.Produit.IPhase, avecChangementProduit: boolean, codeTypeAcces: Commun.Enum.CodeTypeAcces, palierTauxInterets: Array<Modeles.IPalier>);
        protected getElementModifiableParAvenant(codeTypeAcces: Commun.Enum.CodeTypeAcces, numeroDerniereEcheance: number, creditSqedNumeroEcheance: number): string;
        protected activerIndexationTauxInteret(avecChangementProduit: boolean, codeTypeAcces: Commun.Enum.CodeTypeAcces, palierProgAmorProduit: RestAvenantParam.Produit.IPalierProgressionAmortissement): boolean;
        protected activerSaisieTauxProgAmor(codeTypeAcces: Commun.Enum.CodeTypeAcces, isIndexeTauxInteret: boolean): boolean;
        isTauxProgAmorValid(): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class Palier implements IPalier {
        numeroPalier: number;
        numeroPhase: number;
        periodiciteMERamortissement: string;
        periodiciteMERinteretPhase: string;
        numeroRelatif: number;
        taux: number;
        marge: number;
        margeInit: number;
        indice: string;
        numeroPremiereEcheance: number;
        numeroDerniereEcheance: number;
        duree: number;
        libellePeriodeDuree: string;
        isDureeModifiable: boolean;
        elementModifiableParAvenant: string;
        isPalierModifiableParAvenant: boolean;
        cdModifCaracteristfinancieres: string;
        numeroRelatifSimulationAvenant: number;
        numeroRelatif1: number;
        codeRoleCreditAvenant: string;
        typeRemboursement: string;
        isAfterDateEffet: boolean;
        listeEcheanceALaCarte: Array<IEcheanceALaCarte>;
        palierByRest: RestGestion.InformationCredit.IPalierTauxInteret;
        titrePalier: string;
        isAffichagePalierDateEffet: boolean;
        isPalierApresDateEffet: boolean;
        isPalierADateEffet: boolean;
        valeurTaux: string;
        isPalierDirecteur: boolean;
        tauxMinimum: number;
        tauxMaximum: number;
        tauxInit: number;
        showIndicePalier: boolean;
        activerIndicePalier: boolean;
        showMargePalier: boolean;
        activerMargePalier: boolean;
        activerTauxPalier: boolean;
        isDureePalierAbsorbee: boolean;
        statutAbsorptionPalier: Enum.StatutAbsorption;
        tauxProgEch: number;
        tauxProgEchInitial: number;
        libelleHelpTauxProgEch: string;
        tauxProgEchMin: number;
        tauxProgEchMax: number;
        activerTauxProgEch: boolean;
        libelleErreurTauxProgEch: string;
        libelleErreurModifPaliers: Array<string>;
        isPalierAvecTauxProgEchAZero: boolean;
        echeanceALaCarteForCalculatrice: IEcheanceALaCarte;
        isTauxProgEchInvalid: boolean;
        constructor(p: RestGestion.InformationCredit.IPalierTauxInteret, numeroPalier: number, listePalierByPalierCredit: Array<RestGestion.PalierCredit.IPalier>, credit: RestGestion.InformationCredit.ICredit, phase: RestGestion.InformationCredit.IPhase, produit: RestAvenantParam.Produit.IProduit, phaseByProduit: RestAvenantParam.Produit.IPhase, dateTraitement: Date, avecChangementProduit: boolean, codeTypeAcces: Commun.Enum.CodeTypeAcces);
        protected getElementModifiableParAvenant(palierRest: RestGestion.InformationCredit.IPalierTauxInteret, codeTypePhase: string, numeroEcheanceCredit: number, isChangementProduit: boolean): string;
        private getListeEcheanceALaCarte(listePalierByPalierCredit, elementModifiableParAvenant, avecChangementProduit);
        /**
         * Calcul de la durée selon les bornes (attention il faut rajouter 1)
         * @param numFirstEcheance : numeroPremiereEcheancePalier
         * @param numLastEcheance : numeroDerniereEcheancePalier
         */
        setDureePalier(numFirstEcheance: number, numLastEcheance: number): void;
        /**
         * Suite à la scission sur une phase, il faut prendre en compte les nouvelles données et indiquer un changement
         */
        reportTauxFromPhase(tauxPhase: number, margePhase: number, withSiccsion: boolean): void;
        /**
         * Il faut reporter le delta de la durée vers la durée de ce palier
         * Suite à la modification de la durée, il faut prendre en compte cette info
         * @param newDuree: nouvelle durée indiqué en mois
         */
        reportNouvelleDureeToDernierPalier(newDuree: number): void;
        getDureeConverted(duree: number, unitePeriodeInit: string, unitePeriodeSouhaitee: string): number;
        private getConditionTauxProduit(dateTraitement, credit, produit, withRegleNonPrefi);
        protected getModeCalculTaux(credit: RestGestion.InformationCredit.ICredit, produit: RestAvenantParam.Produit.IProduit, phaseByProduit: RestAvenantParam.Produit.IPhase, palierByProduit: RestAvenantParam.Produit.IPalier, conditionTauxProduit: RestAvenantParam.Produit.IConditionTauxProduit, withChangementProduit: boolean): Enum.ModeCalculTaux;
        protected getActiverTaux(modeCalculTaux: Enum.ModeCalculTaux, credit: RestGestion.InformationCredit.ICredit, phaseByProduit: RestAvenantParam.Produit.IPhase, palierByProduit: RestAvenantParam.Produit.IPalier, codeTauxCreditDirecteurByProduit: string, withChangementProduit: boolean): boolean;
        protected getTauxMinMax(credit: RestGestion.InformationCredit.ICredit, modalite: RestAvenantParam.Produit.IModalite, palierByProduit: RestAvenantParam.Produit.IPalier, produit: RestAvenantParam.Produit.IProduit): Array<number>;
        protected fctShowIndicePalier(modeCalculTaux: Enum.ModeCalculTaux): boolean;
        protected fctShowMargePalier(modeCalculTaux: Enum.ModeCalculTaux): boolean;
        protected fctActiverMargePalier(modeCalculTaux: Enum.ModeCalculTaux, credit: RestGestion.InformationCredit.ICredit, phaseByProduit: RestAvenantParam.Produit.IPhase, codeTauxCreditDirecteurByProduit: string, withChangementProduit: boolean, parametreRevision: RestAvenantParam.Produit.IParametreRevision): boolean;
        private getParametreRevision(dateTraitement, parametreRevisionTaux, phaseProduit);
        isTauxProgEchValid(): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class ParametreRevisionTaux implements IParametreRevisionTaux {
        numeroPhase: number;
        paramRevTauxRest: RestGestion.InformationCredit.IParametreRevisionTaux;
        constructor(paramRevTaux: RestGestion.InformationCredit.IParametreRevisionTaux);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    /**
     * S842 RestGestion.InformationCredit.ICredit
     * S844 RestGestion.InformationCredit.IPhase
     * S885 RestAvenantParam.Produit.IProduit
     * S886 RestAvenantParam.Produit.IConditionTauxProduit
     * S887 RestAvenantParam.Produit.IPhase
     * S890 : RestAvenantParam.Produit.IParametreRevision
     * S891 RestAvenantParam.Produit.IModalite
     * sans changement 1 (2: avec changement)
     */
    class Phase implements IPhase {
        statutPhase: Enum.StatutPhase;
        numeroPhase: number;
        numeroPhaseInitial: number;
        libelleTypePhase: string;
        isPhaseActive: boolean;
        isPhasePrefi: boolean;
        isPhaseImpacteAte: boolean;
        isScission: boolean;
        modeTaux: string;
        duree: number;
        dureeTemp: number;
        dureeInitiale: number;
        dureeMinPhase: number;
        dureeMaxPhase: number;
        libelleHelpDureePhase: string;
        libelleErreurDureePhase: string;
        activerDureePhase: boolean;
        activerDureePhaseDT: boolean;
        libelleUniteDuree: string;
        uniteDureePhase: string;
        taux: number;
        tauxInitial: number;
        showTaux: boolean;
        activerTaux: boolean;
        tauxMinimum: number;
        tauxMaximum: number;
        libelleHelpTaux: string;
        libelleErreurTaux: string;
        showQuotiteAmortissement: boolean;
        quotiteAmortissement: number;
        indice: string;
        valeurIndice: number;
        showIndice: boolean;
        activerIndice: boolean;
        marge: number;
        margeInitiale: number;
        showMarge: boolean;
        activerMarge: boolean;
        margeMinimum: number;
        margeMaximum: number;
        libelleHelpMarge: string;
        libelleErreurMarge: string;
        periodiciteInteret: IPeriodicitePhase;
        periodiciteInteretInitiale: IPeriodicitePhase;
        periodiciteCalculInteretsInitial: IPeriodicitePhase;
        periodiciteCalculInterets: IPeriodicitePhase;
        periodiciteAmortissement: IPeriodicitePhase;
        periodiciteAmortissementInitiale: IPeriodicitePhase;
        periodiciteAmortissementTemporaire: IPeriodicitePhase;
        periodiciteInteretTemporaire: IPeriodicitePhase;
        isAnciennePhaseEnCours: boolean;
        isNouvellePhaseScission: boolean;
        dureePhaseAvantScission: number;
        listePeriodiciteAmortissement: Array<IPeriodicitePhase>;
        listePeriodiciteInteret: Array<IPeriodicitePhase>;
        libelleErreurPeriodiciteInt: string;
        libelleErreurPeriodiciteAmor: string;
        libelleErreurPeriodiciteIntDuree: string;
        libelleErreurPeriodiciteAmorDuree: string;
        libelleErreurModifPhasePaliers: Array<string>;
        activerPeriodiciteAmor: boolean;
        activerPeriodiciteInteret: boolean;
        typeFinancement: Enum.TypeFinancement;
        codeTypePhase: string;
        elementModifiableParAvenant: string;
        cdModifCaracFinanciere: string;
        prelevementEnFinPhase: string;
        phaseModifieeAte: boolean;
        numRelatifPhaseTypePhaseProduit: number;
        ate: IAte;
        parametresRevisionTaux: Array<IParametreRevisionTaux>;
        codeProduitRevisableProduit: string;
        isCreditDirecteur: boolean;
        showIndiceDirecteur: boolean;
        activerIndiceDirecteur: boolean;
        showMargeDirecteur: boolean;
        activerMargeDirecteur: boolean;
        isDureePhaseAbsorbee: boolean;
        statutAbsorptionPhase: Enum.StatutAbsorption;
        listePalier: Array<IPalier>;
        isPhaseWithDureePalierEdit: boolean;
        isPhaseWithEcheancePalierEdit: boolean;
        phaseByRest: RestGestion.InformationCredit.IPhase;
        phaseByProduit: RestAvenantParam.Produit.IPhase;
        libelleTypeFinancement: string;
        isPhaseDirectrice: boolean;
        isPalierTauxInteretDirecteur: boolean;
        tauxDirecteur: any;
        tauxDirecteurInit: any;
        tauxMinDirecteur: number;
        tauxMaxDirecteur: number;
        libelleHelpTauxDirecteur: string;
        libelleErreurTauxDirecteur: string;
        activerTauxDirecteur: boolean;
        indiceTauxDirecteurs: Array<string>;
        indiceTauxDirecteurSel: string;
        _indiceTauxDirecteurSel: string;
        margeDirecteur: number;
        margeMinDirecteur: number;
        margeMaxDirecteur: number;
        libelleHelpMargeDirecteur: string;
        libelleErreurMargeDirecteur: string;
        isModifTauxFromModifMarge: boolean;
        isChangementProduit: boolean;
        palierProgAmors: Array<Modeles.IPalierProgAmor>;
        libelleLongAjustement: string;
        /**
         * Les champs avec validation des bornes sont en erreur
         */
        isInvalid: boolean;
        isPeriodiciteInvalide: boolean;
        isModifPhaseInvalide: boolean;
        constructor(p: RestGestion.InformationCredit.IPhase, credit: RestGestion.InformationCredit.ICredit, produit: RestAvenantParam.Produit.IProduit, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>, listePalierCredit: Array<RestGestion.PalierCredit.IPalier>, dateTraitement: Date, dateFinPrefinancementReelle: Date, avecChangementProduit: boolean, creditAvenantFinancier: Modeles.ICreditAvenantFinancier, nouvellePhaseAMSupOrigine: boolean, codeTypeAcces: Commun.Enum.CodeTypeAcces);
        private fctIsPhaseDirectrice(phaseCodeTauxDesPaliersCalcules, avecChangementProduit, isCreditDirecteur, activerTauxPhase, activerIndicePhase, activerMargePhase);
        private getListePalier(p, listePalierCredit, credit, avecChangementProduit, produit, phaseByProduit, dateTraitement, codeTypeAcces);
        isTauxValid(): boolean;
        isMargeValid(): boolean;
        isMargeDirecteurValid(): boolean;
        isTauxDirecteurValid(): boolean;
        isDureePhaseValid(): boolean;
        private getLibelleTypeFinancement(codeTypePhase, produit);
        private getLibelleTypeFinancementByCode(code);
        private getModeCalculTaux(credit, codeTauxCreditDirecteur, phaseByProduit, conditionTauxProduit, withChangementProduit);
        private getModeCalculTauxByConditionTaux(codeModeExpressionTaux, codePresenceRevisionSurCredit, withChangementProduit);
        private getConditionTauxProduit(dateTraitement, credit, listeConditionsTauxProduit, withRegleNonPrefi);
        private fctShowIndiceDirecteur(showIndiceCredit, showIndicePhase, paliers);
        private fctActiverIndiceDirecteur(activerIndiceCredit, activerIndicePhase, paliers);
        private fctShowMargeDirecteur(showMargeCredit, showMargePhase, paliers);
        private fctActiverMargeDirecteur(activerMargeCredit, activerMargePhase, paliers);
        private getActiverTauxDirecteur(activerTauxCredit, activerTauxPhase, paliers, isDureePhaseAbsorbee);
        private getActiverTaux(modeCalculTaux, credit, phaseByProduit, codeTauxCreditDirecteurByProduit, withChangementProduit);
        private getActiverMarge(modeCalculTaux, credit, phaseByProduit, codeTauxCreditDirecteurByProduit, withChangementProduit);
        private getTauxMinPhase(modeCalculTaux, phaseByProduit, credit, modalite, conditionTauxProduit);
        private getTauxMaxPhase(modeCalculTaux, phaseByProduit, credit, codeFamilleControle, modalite, conditionTauxProduit);
        private getMargeMinMaxPhase(phaseByProduit, credit, codeFamilleControle, modalite, conditionTauxProduit, withChangementProduit);
        private getValeurIndice(codeIndiceNominal, listeIndice);
        /**
         * Modification d'une donnée sur la phase
         * Il faut faire une scission de palier à partir de la prochaine échéance et reporter les modifications sur les paliers postérieurs
         */
        reportMajTauxToPaliers(numeroEcheanceScission: number, toSplitPalier: boolean): void;
        /**
         * Génération de la liste des paliers
         */
        private getListePalierUpadated(listePalierInitial, numeroEcheanceScission, tauxPhase, margePhase, toSplitPalier);
        /**
         * Prise en compte des nouvelles données si le palier est postérieur à l'échéance de scission
         * Dans le cas contraire il n'y pas de modification
         */
        private getPalierTauxInteretUpdated(p, numEcheanceScission, tauxPhase, margePhase, withSiccsion);
        /**
         * Il faut reporter le delta de la durée vers la durée de cette phase (qui correspond à la dernière)
         * @param newDuree : nouvelle durée
         */
        reportNouvelleDureeToDernierePhase(newDuree: number, isAmortissementALaCarte: boolean): void;
        setListePaliersForAmortissementALaCarte(dureeRestantCouvrir: number): void;
        /**
         * Générer une nouvelle échéance pour l'amortissement à la carte dans le cas d'un allongement de durée
         * @param delta : durée à rajouter
         */
        getPalierUpdateEcheance(p: IPalier, palierReference: IPalier, delta: number): IPalier;
        getTauxDirecteur(credit: Modeles.ICreditAvenantFinancier, isPhaseDirectrice: boolean, tauxPhase: number, paliers: Array<Modeles.IPalier>, codeTypeAcces: Commun.Enum.CodeTypeAcces): number;
        private getTauxMinimumDirecteur(credit, isPhaseDirectrice, tauxMinPhase, paliers);
        private getTauxMaximumDirecteur(credit, isPhaseDirectrice, tauxMaxPhase, paliers);
        protected getLibelleErreurTauxDirecteur(credit: Modeles.ICreditAvenantFinancier, isPhaseDirectrice: boolean, libelleErreurTauxPhase: string, paliers: Array<Modeles.IPalier>): string;
        private getIndiceDirecteurs(isCreditDirecteur, isPhaseDirectrice, indiceTauxCredits, indiceTauxPhase, paliers);
        getMargeDirecteur(credit: Modeles.ICreditAvenantFinancier, isPhaseDirectrice: boolean, margePhase: number, paliers: Array<Modeles.IPalier>): number;
        private getMargeMinimumDirecteur(credit, isPhaseDirectrice, margeMinPhase, paliers);
        private getMargeMaximumDirecteur(credit, isPhaseDirectrice, margeMaxPhase, paliers);
        protected getLibelleErreurMargeDirecteur(credit: Modeles.ICreditAvenantFinancier, isPhaseDirectrice: boolean, paliers: Array<Modeles.IPalier>): string;
        private getDureeMinMaxPhase(codeRoleCreditAvenant, phaseProduitSel);
        private fctModifTauxFromModifMarge(conditionsTauxProduit, phaseByProduit, margePhase, margeDirectrice, dateTraitement, creditAvenantFinancierDureeTotale, avecChangementProduit, credit);
        isPeriodiciteInteretInvalid(): boolean;
        isPeriodiciteAmortissementInvalid(): boolean;
        isPeriodiciteIntDureeInvalid(): boolean;
        isPeriodiciteAmorDureeInvalid(): boolean;
        getPalierProgAmor(credit: RestGestion.InformationCredit.ICredit, paliersTauxAmortissement: Array<RestGestion.InformationCredit.IPalierTauxAmortissement>, phaseByProduit: RestAvenantParam.Produit.IPhase, isChangementProduit: boolean, codeTypeAcces: Commun.Enum.CodeTypeAcces, palierTauxInterets: Array<Modeles.IPalier>): Array<Modeles.IPalierProgAmor>;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    class ScissionPalierProgressionAmortissement {
        static scissionPalierProgAmorPhaseEnCours(phaseSel: Modeles.IPhase, creditNumeroEcheanceS882: number, palierProgAmorPhaseEnCours: Array<Modeles.IPalierProgAmor>): Array<Modeles.IPalierProgAmor>;
        static verificationScissionPalierProgAmor(phaseSel: Modeles.IPhase, palierProgAmorSel: Modeles.IPalierProgAmor, creditNumeroEcheance: number): Array<string>;
        static verficationSissionApplicablePalierProgAmor(nbEcheance: number, phaseSelPeriodiciteCalculInt: Modeles.IPeriodicitePhase, phaseSelPeriodiciteAmor: Modeles.IPeriodicitePhase, phaseSelPeriodiciteInt: Modeles.IPeriodicitePhase, periodiciteApplicCatalogue: string): Array<string>;
        static getDureePalierProgAmorEnCours(palierProgAmorSel: Modeles.IPalierProgAmor, creditNumeroEcheance: number): number;
        static getDureePalierProgAmorNouveau(palierProgAmorSel: Modeles.IPalierProgAmor, creditNumeroEcheance: number): number;
        static verficationSissionPossiblePalierProgAmorEnCours(nbEcheancePhase: number, phasePeriodiciteCalculInt: Modeles.IPeriodicitePhase, phasePeriodiciteAmor: Modeles.IPeriodicitePhase, phasePeriodiciteInt: Modeles.IPeriodicitePhase, periodiciteApplicCatalogue: string): Array<string>;
        static verficationSissionPossiblePalierProgAmorNouveau(nbEcheancePhase: number, phasePeriodiciteCalculInt: Modeles.IPeriodicitePhase, phasePeriodiciteAmor: Modeles.IPeriodicitePhase, phasePeriodiciteInt: Modeles.IPeriodicitePhase, periodiciteApplicCatalogue: string): Array<string>;
        static miseAjourErreurPalierProgAmor(palierProgAmorPhases: Array<Modeles.IPalierProgAmor>, numeroRelatifPalierEnCours: number, messageErreurScissions: Array<string>): Array<Modeles.IPalierProgAmor>;
        static modificationPalierProgressionAmortissementEnCours(palierEnCours: Modeles.IPalierProgAmor, numeroEcheanceCreditS882: number): Modeles.IPalierProgAmor;
        static modificationPalierProgressionAmortissementNouveau(nouveauPalier: Modeles.IPalierProgAmor, numeroEcheanceCreditS882: number, periodiciteIntPhase: Modeles.IPeriodicitePhase, periodiciteAmorPhase: Modeles.IPeriodicitePhase): Modeles.IPalierProgAmor;
        static miseAJourPalierProgAmorSimple(palierPhaseEnCours: Array<Modeles.IPalierProgAmor>, palierEnCours: Modeles.IPalierProgAmor, nouveauPalier: Modeles.IPalierProgAmor): Array<Modeles.IPalierProgAmor>;
        static getMessageErreurPalierProgressionAmortissement(palierPhaseEnCours: Array<Modeles.IPalierProgAmor>): Array<string>;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    class ScissionPalierTauxInteret {
        static scissionPalierPhaseEnCours(phaseSel: Modeles.IPhase, creditNumeroEcheanceS882: number, palierPhaseEnCours: Array<Modeles.IPalier>): Array<Modeles.IPalier>;
        static isPremiereEcheancePalierSurNumeroEcheanceS882(numeroPremiereEcheancePalierEnCours: number, numeroEcheanceCredit: number): boolean;
        static scissionPalierAte(phaseSelectionnee: Modeles.IPhase, listePalierPhaseEnCours: Array<Modeles.IPalier>, nuepCalcule: number, palierSelNumeroPremiereEcheance: number): Array<Modeles.IPalier>;
        static calculNuepPourScissionTauxProgEch(creditNumeroEcheance: number, nouveauPalierPeriodiciteApplicProgreEcheance: string, phaseSelPeriodiciteCalculInterets: string, palierSelNumeroPremiereEcheance: number): number;
        static getDureePalierEnCours(palierSel: Modeles.IPalier, creditNumeroEcheance: number): number;
        static getDureePalierNouveau(palierSel: Modeles.IPalier, creditNumeroEcheance: number): number;
        static verficationSissionApplicablePalier(nbEcheance: number, phaseSelPeriodiciteCalculInt: Modeles.IPeriodicitePhase, phaseSelPeriodiciteAmor: Modeles.IPeriodicitePhase, phaseSelPeriodiciteInt: Modeles.IPeriodicitePhase): Array<string>;
        static verficationSissionPossiblePalierEnCours(nbEcheancePhase: number, phasePeriodiciteCalculInt: Modeles.IPeriodicitePhase, phasePeriodiciteAmor: Modeles.IPeriodicitePhase, phasePeriodiciteInt: Modeles.IPeriodicitePhase): Array<string>;
        static verficationSissionPossiblePalierNouveau(nbEcheancePhase: number, phasePeriodiciteCalculInt: Modeles.IPeriodicitePhase, phasePeriodiciteAmor: Modeles.IPeriodicitePhase, phasePeriodiciteInt: Modeles.IPeriodicitePhase): Array<string>;
        static verificationScissionPalier(phaseSel: Modeles.IPhase, palierSel: Modeles.IPalier, creditNumeroEcheance: number): Array<string>;
        static modificationPalierTauxInteretEnCours(palierEnCours: Modeles.IPalier, numeroEcheanceCreditS882: number): Modeles.IPalier;
        static modificationPalierTauxInteretNouveau(nouveauPalier: Modeles.IPalier, numeroEcheanceCreditS882: number, periodiciteIntPhase: Modeles.IPeriodicitePhase, periodiciteAmorPhase: Modeles.IPeriodicitePhase): Modeles.IPalier;
        static modificationPalierTauxInteretEnCoursAte(palierEnCours: Modeles.IPalier, nuepCalcule: number): Modeles.IPalier;
        static modificationPalierTauxInteretNouveauAte(nouveauPalier: Modeles.IPalier, nuepCalcule: number, periodiciteIntPhase: Modeles.IPeriodicitePhase, periodiciteAmorPhase: Modeles.IPeriodicitePhase): Modeles.IPalier;
        static miseAJourPalierTauxSimple(palierPhaseEnCours: Array<Modeles.IPalier>, palierEnCours: Modeles.IPalier, nouveauPalier: Modeles.IPalier): Array<Modeles.IPalier>;
        static miseAjourErreurPalier(palierPhases: Array<Modeles.IPalier>, numeroRelatifPalierEnCours: number, messageErreurScissions: Array<string>): Array<Modeles.IPalier>;
        static getMessageErreurPalierTauxInteret(palierPhaseEnCours: Array<Modeles.IPalier>): Array<string>;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class ScissionPhase {
        static scissionPhaseEnCours(phaseSelectionne: Modeles.IPhase, phaseAvailables: Array<Modeles.IPhase>, credit: RestGestion.InformationCredit.ICredit, nuepDebutPhase: number, nuepFinPhase: number, listeAccessoires: Array<RestAvenantParam.Produit.IAccessoire>, produitCodeProduitRevisable: string, listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>): Array<Modeles.IPhase>;
        static isPremiereEcheancePhaseSurNumeroEcheanceS882(nuepDebutPhase: number, numeroEcheanceCredit: number): boolean;
        static miseAjourErreurPhase(phases: Array<Modeles.IPhase>, numeroPhaseEnCours: number, messageErreurScissions: Array<string>): Array<Modeles.IPhase>;
        static verficationSissionApplicable(nbEcheance: number, phaseSelPeriodiciteCalculInt: Modeles.IPeriodicitePhase, phaseSelUniteDureePhase: string, phaseSelPeriodiciteAmor: Modeles.IPeriodicitePhase, phaseSelPeriodiciteInt: Modeles.IPeriodicitePhase, phaseSelPeriodiciteCalculIntInitiale: Modeles.IPeriodicitePhase): Array<string>;
        static verficationSissionPossibleNouvellePhase(nbEcheancePhase: number, phasePeriodiciteCalculIntInitiale: Modeles.IPeriodicitePhase, phasePeriodiciteCalculInt: Modeles.IPeriodicitePhase, phaseUniteDureePhase: string, phasePeriodiciteAmor: Modeles.IPeriodicitePhase, phasePeriodiciteInt: Modeles.IPeriodicitePhase): Array<string>;
        static verficationSissionPossiblePhaseEnCours(nbEcheancePhase: number, phasePeriodiciteCalculInt: Modeles.IPeriodicitePhase, phaseUniteDureePhase: string, phasePeriodiciteAmor: Modeles.IPeriodicitePhase, phasePeriodiciteInt: Modeles.IPeriodicitePhase): Array<string>;
        static modificationPhaseEnCours(phaseEnCours: Modeles.IPhase, nbEcheancePhaseSel: number): Modeles.IPhase;
        static modificationNouvellePhase(phaseEnCours: Modeles.IPhase, nbEcheancePhaseNew: number): Modeles.IPhase;
        static miseAJourPalierTaux(palierPhaseEnCours: Array<Modeles.IPalier>, numeroNouvellePhase: number, numeroEcheanceCreditS882: number): Array<Modeles.IPalier>;
        static miseAJourPalierProgressionAmortissement(palierProgAmorPhaseEnCours: Array<Modeles.IPalierProgAmor>, numeroNouvellePhase: number, numeroEcheanceCreditS882: number): Array<Modeles.IPalierProgAmor>;
        static miseAJourPhases(phaseInits: Array<Modeles.IPhase>, phaseSel: Modeles.IPhase, nouvellePhase: Modeles.IPhase, produitCodeProduitRevisable: string): Array<Modeles.IPhase>;
        static scissionAccessoiresPhaseEnCours(numeroPhaseEnCours: number, numeroPhaseScinde: number, dateDebutNouvellePhase: Date, dateFinNouvellePhase: Date, dateFinAnciennePhase: Date, accessoireInis: Array<RestAvenantParam.Produit.IAccessoire>): Array<RestAvenantParam.Produit.IAccessoire>;
        static scissionServicesObjet(listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>, anciennePhase: Modeles.IPhase): void;
        static isElementModifiableParAvenant(unePhase: Modeles.IPhase): boolean;
        static majElementCalculNouvellePhase(newElementCalcul: RestAvenant.ServicesObjet.IElementCalcul): void;
        static alimenterDatesServicesObjet(listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>, dateMiseRecouvrementZero: string, phasesM: Array<Modeles.IPhase>): void;
        static isServicesObjetAScinder(listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>, numPhaseEnCours: number): boolean;
        static majCodeTypeAccesAccessoireModifie(newElementCalcul: RestAvenant.ServicesObjet.IElementCalcul): void;
        static getDateDebutFinPhase(numeroPhase: number, credit: RestGestion.InformationCredit.ICredit): Array<Date>;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class DureePhase {
        static activerDureeToutePhase(credit: RestGestion.InformationCredit.ICredit, phaseProduit: RestAvenantParam.Produit.IPhase, isPhasePrefi: boolean, codeTypeAcces: Commun.Enum.CodeTypeAcces, isDureePhaseAbsorbee: boolean, isChangementProduit: boolean, creditCodeTypeRecalculTA: string, phaseNumeroPhase: number): boolean;
        static getCodeTypeRecalculTa(codeTypeRecalculTa: string): number;
        static controleReductionDureePhase(phaseCredits: Array<RestGestion.InformationCredit.IPhase>, phase: Modeles.IPhase, isChangementProduit: boolean, creditDateMer0: Date, creditNumQuantDateEch: number, creditDateEffetSQED: Date, creditSqedNumEcheance: number): Array<string>;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class FonctionsPhasePalier {
        /**
         * Permet de retourner la modalité nécessaire au calcul des taux (minimum, maximum) de la phase et du palier
         * @param numModaliteRemboursemntAnticipe : provient de credit: RestGestion.InformationCredit.ICredit
         * @param codeFamilleProduitFromPhase : provient de phaseByProduit : RestAvenantParam.Produit.IPhase
         * @param numeroRelatifProduitFromPhase : provient de phaseByProduit : RestAvenantParam.Produit.IPhase
         * @param listeModalites : provient du produit : RestAvenantParam.Produit.IProduit
         */
        static getModalite(numModaliteRemboursemntAnticipe: number, codeFamilleProduitFromPhase: string, numeroRelatifProduitFromPhase: string, listeModalites: Array<RestAvenantParam.Produit.IModalite>): RestAvenantParam.Produit.IModalite;
        /**
         * Permet de calculer le surcoutRA pour obtenir les bornes du taux de la phase et du palier
         * @param numModaliteRemboursemntAnticipe : provient de credit: RestGestion.InformationCredit.ICredit
         * @param modalite : la modalité sélectionnée à partir du produit
         */
        static getSurcoutRa(numModaliteRemboursemntAnticipe: number, modalite: RestAvenantParam.Produit.IModalite): number;
        /**
         * TODO get paraRevision selon les cas avec selection possible
         * Utilisé dans palier et phase
         * @param parametreRevision
         */
        static getIsVariationIndice(parametreRevision: RestAvenantParam.Produit.IParametreRevision): boolean;
        static getElementModifiableParAvenant(phase: RestGestion.InformationCredit.IPhase, infoCredit: RestGestion.InformationCredit.ICredit, dateFinPrefinancementReelle: Date): string;
        static getNumeroDerniereEcheancePalier(phase: RestGestion.InformationCredit.IPhase): number;
        /**
         * Fonction qui permet de déterminer si la phase en cours d'initialisation est absorbée à cause de sa durée.
         * @param uniteDureeCredit : unité durée du crédit
         * @param dureeAjusteeCreditSuiteRecalcul : durée du crédit
         * @param phases : toutes les phases du crédit à trier au préalable.
         * @param phaseLecture : phase crédit en cours d'initialisation. Provient de avenantCreditDecorateur. Ces phases sont triées par numeroPhase.
         */
        static fctIsDureePhaseAbsorbee(uniteDureeCredit: string, dureeAjusteeCreditSuiteRecalcul: number, phases: Array<RestGestion.InformationCredit.IPhase>, phaseLecture: RestGestion.InformationCredit.IPhase, codeRoleCrediAvenant: string): Enum.StatutAbsorption;
        /**
         * Permet de mettre à jour le statut d'absorption de la phase par rapport au palier.
         * @param paliers : liste des paliers de taux interet (S845) de la phase
         * @param statutAbsorptionPhase : statut d'absorption de la phase determinee par fctIsDureePhaseAbsorbee
         */
        static majStatutPhaseByPalier(paliers: Array<Modeles.IPalier>, statutAbsorptionPhase: Enum.StatutAbsorption): Enum.StatutAbsorption;
        /**
         * Permet de determiner le statut d'absorption du palier taux interet (S845)
         * @param uniteDureeCredit : unité durée du crédit
         * @param dureeAjusteeCreditSuiteRecalcul : dureeAjustee du crédit
         * @param paliers : liste des paliers (S845) contenu dans la phase
         * @param palierLecture : phase contenant les paliers à analyser
         * @param phaseCodeTypePhase : codeTypePhase de la phase contenant les paliers
         * @param phaseUniteDureePhase : uniteDuree de la phase contenant les paliers
         * @param phaseDureeInitialePhaseCredit : dureeInitiale de la phase contenant les paliers
         * @param phaseNumeroPhase : numero de la phase contenant les paliers
         * @param codeRoleCrediAvenant : codeRoleCreditAvenant donnee par le credit
         * @param phasePeriodiciteMerInteret : periodiciteMiseReouvrementInteret de la phase contenant les paliers
         */
        static fctIsDureePalierAbsorbee(uniteDureeCredit: string, dureeAjusteeCreditSuiteRecalcul: number, paliers: Array<RestGestion.InformationCredit.IPalierTauxInteret>, palierLecture: RestGestion.InformationCredit.IPalierTauxInteret, phaseCodeTypePhase: string, phaseUniteDureePhase: string, phaseDureeInitialePhaseCredit: number, phaseNumeroPhase: number, codeRoleCrediAvenant: string, phasePeriodiciteMerInteret: string): Enum.StatutAbsorption;
        static isPhaseAvailable(phaseStock: Modeles.IPhase): boolean;
        static miseAJourCodeCaracFinancierePhasePalier(phaseStocks: Array<Modeles.IPhase>): Array<Modeles.IPhase>;
        static miseAJourCdfinPalier(palierPhaseEnCours: Array<Modeles.IPalier>): Array<Modeles.IPalier>;
        static fctIsTypeRemboursementCinq(phaseAvailables: Array<Business.Modeles.IPhase>): boolean;
        static getAvecAjustementEcheances(phases: Array<RestGestion.InformationCredit.IPhase>, numeroPhaseEnCours: number, numeroEcheance: number): boolean;
        static isTypeRemboursementValideCalculette(paliers: Array<RestGestion.InformationCredit.IPalierTauxInteret>): boolean;
        static isTypeRemboursementValideCalculetteDernierePhase(paliers: Array<RestGestion.InformationCredit.IPalierTauxInteret>, numeroRelatifDernierPalier: number): boolean;
        static sauvegardePalierTauxInteretAvantCalculette(phaseStocks: Array<Business.Modeles.IPhase>): Array<Business.Modeles.IPalier>;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class PeriodicitePhase {
        /**
         * Permet d'initialiser la liste de periodicité intérêt de la phase sélectionnée
         * @param phaseByProduit : phase produit (S887) correspondant à la phase crédit sélectionnée (S844)
         */
        static getListePeriodiciteInteret(phaseByProduit: RestAvenantParam.Produit.IPhase): Array<Modeles.IPeriodicitePhase>;
        /**
         * Permet d'initialiser la liste de periodicité amortissement de la phase sélectionnée
         * @param phaseByProduit : phase produit (S887) correspondant à la phase crédit sélectionnée (S844)
         */
        static getListePeriodiciteAmortissement(phaseByProduit: RestAvenantParam.Produit.IPhase): Array<Modeles.IPeriodicitePhase>;
        static phaseRevisionAleatoire(parametresRevisionTaux: Array<Modeles.IParametreRevisionTaux>, avecChangementProduit: boolean, numeroPhaseSel: number, numeroPhaseSQED: number, parametreRevisionProduits: Array<RestAvenantParam.Produit.IParametreRevision>, numRelatifPhaseTypePhaseProduitSel: number, codeTypePhase: string): boolean;
        static activerPeriodiciteAmortissement(listePeriodicite: Array<Modeles.IPeriodicitePhase>, codeTypePhase: string, codeTypeAcces: Commun.Enum.CodeTypeAcces, avecChangementProduit: boolean, codePeriodiciteDifferenteMER: string, modeCalculAmortissement: string, phaseRevAleatoire: boolean, isDureePhaseAbsorbee: boolean): boolean;
        static getActiverPeriodiciteInter(listePeriodicite: Array<Modeles.IPeriodicitePhase>, codeTypePhase: string, codeTypeAcces: Commun.Enum.CodeTypeAcces, avecChangementProduit: boolean, modeCalculAmortissement: string, phaseRevAleatoire: boolean, isDureePhaseAbsorbee: boolean): boolean;
        static changePeriodiciteAutomatiqueUnePhase(periodicteInteret: Modeles.IPeriodicitePhase, phase: Modeles.IPhase): void;
        static impactPeriodicitePhase(phaseSel: Modeles.IPhase, phases: Array<Modeles.IPhase>, credit: RestGestion.InformationCredit.ICredit, isChangementProduit: boolean, nuepDebutPhase: number, nuepFinPhase: number, listeAccessoires: Array<RestAvenantParam.Produit.IAccessoire>, produitCodeProduitRevisable: string, isReportPeriodeUnePhase: boolean, listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>): Array<Modeles.IPhase>;
        static reportPeriodicite(phaseSel: Modeles.IPhase, phases: Array<Modeles.IPhase>, isChangementProduit: boolean, isReportPeriodeUnePhase: boolean): Array<Modeles.IPhase>;
        static verificationDureePeriodiciteSansScission(phaseSelUniteDureePhase: string, phaseSelDuree: number, phaseSelPeriodiciteCalculInterets: Modeles.IPeriodicitePhase, phaseSelPeriodiciteInteret: Modeles.IPeriodicitePhase, phaseSelPeriodiciteAmortissement: Modeles.IPeriodicitePhase): Array<string>;
        protected static reportPeriodiciteSurPalier(phases: Array<Modeles.IPhase>, isChangementProduit: boolean): Array<Modeles.IPhase>;
        static modifAssurancesByPeriodicite(phaseSel: Modeles.IPhase, isChangementProduit: boolean, assurances: Array<Modeles.IAssurance>, phases: Array<Modeles.IPhase>): Array<Modeles.IAssurance>;
        static modificationAccessoiresAssuranceByPeriodicite(etatManipulationAssurance: Enum.EtatManipulation, accessoires: Array<Modeles.IAccessoireAssurance>, phases: Array<Modeles.IPhase>): Array<Modeles.IAccessoireAssurance>;
        static scissionAccessoireAssurance(assurances: Array<Modeles.IAssurance>, numeroPhaseEnCours: number): Array<Modeles.IAssurance>;
        /**
         * Fonction appelé uniquement hors création d'avenant. Permet de déterminer la valeur de isAnciennePhaseEnCours
         * @param phases: phases provenant du service rest caraFinan donnant les informations des phases après création
         * @param numeroPhase: le numéro de la phase du modèle dont on cherche à déterminer la valeur du booléen
         * @param codeTypePhase: le codeType de la phase du modèle dont on cherche à déterminer la valeur du booléen
         */
        static setIsAnciennePhaseEnCoursOuverture(phases: Array<RestGestion.InformationCredit.IPhase>, numeroPhase: number, codeTypePhase: string): boolean;
        static modifGarantieByPeriodicite(phaseSel: Modeles.IPhase, isChangementProduit: boolean, garanties: Array<Modeles.IGarantie>, phases: Array<Modeles.IPhase>): Array<Modeles.IGarantie>;
        static modificationAccessoiresGarantieByPeriodicite(accessoires: Array<Modeles.IAccessoireGarantie>, phases: Array<Modeles.IPhase>): Array<Modeles.IAccessoireGarantie>;
        static scissionAccessoireGarantie(garanties: Array<Modeles.IGarantie>, numeroPhaseEnCours: number): Array<Modeles.IGarantie>;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    class ModificationTauxInteret {
        static impactModifTauxInteret(phaseSelectionne: Modeles.IPhase, phases: Array<Modeles.IPhase>, credit: RestGestion.InformationCredit.ICredit, isChangementProduit: boolean): Array<Modeles.IPhase>;
        static reportTauxCreditDirecteurSurPhase(phaseStocks: Array<Modeles.IPhase>, phaseTauxDirecteur: number): Array<Modeles.IPhase>;
        static reportTauxPhaseDirectrice(phaseStocks: Array<Modeles.IPhase>, phase: Modeles.IPhase, isModificationTauxFirst: boolean, isChangementProduit: boolean, creditOrigine: RestGestion.InformationCredit.ICredit, codeTypeAcces: Commun.Enum.CodeTypeAcces, isReportUnePhase: boolean): Array<Modeles.IPhase>;
        static reportTauxPhaseDirectriceSurUnePhase(phaseTauxDirecteur: number, phaseAvailable: Business.Modeles.IPhase, codeTypeAcces: Commun.Enum.CodeTypeAcces): void;
        static reportTauxPalierDirecteur(phaseStocks: Array<Modeles.IPhase>, phase: Modeles.IPhase, isReportUnePhase: boolean, isChangementProduit: boolean, produitCreditPhases: Array<RestAvenantParam.Produit.IPhase>, produitCreditCodeTauxCreditDirecteur: string, creditOrigine: RestGestion.InformationCredit.ICredit, isModificationTauxFirst: boolean): Array<Modeles.IPhase>;
        static reportTauxPalierDirecteurPhaseSelectionne(isChangementProduit: boolean, phaseTauxDirecteur: number, phaseCodeTypePhase: string, phaseNumRelatifPhaseTypePhaseProduit: number, phaseAvailable: Business.Modeles.IPhase, produitCreditPhases: Array<RestAvenantParam.Produit.IPhase>, produitCreditCodeTauxCreditDirecteur: string): void;
        static isReportTauxDirecteurPhaseCredit(phaseCodeTypePhase: string, phaseNumRelatifPhaseTypePhaseProduit: number, produitCreditPhases: Array<RestAvenantParam.Produit.IPhase>, produitCreditCodeTauxCreditDirecteur: string): boolean;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class ModificationTauxProgAmor {
        static afficherOngletPalierTauxProgAmor(phases: Array<Modeles.IPhase>): boolean;
        static getTauxProgressionAmortissement(isIndexeTauxInteret: boolean, tauxProgressionAmortissementRest: number, palierTauxInterets: Array<Modeles.IPalier>, palierProgAmorNumPremiereEcheance: number): number;
        /**
         * Permet de determiner le statut d'absorption du palier taux interet (S845)
         * @param uniteDureeCredit : unité durée du crédit
         * @param dureeAjusteeCreditSuiteRecalcul : dureeAjustee du crédit
         * @param paliers : liste des paliers (S845) contenu dans la phase
         * @param palierLecture : phase contenant les paliers à analyser
         * @param phaseCodeTypePhase : codeTypePhase de la phase contenant les paliers
         * @param phaseUniteDureePhase : uniteDuree de la phase contenant les paliers
         * @param phaseDureeInitialePhaseCredit : dureeInitiale de la phase contenant les paliers
         * @param phaseNumeroPhase : numero de la phase contenant les paliers
         * @param codeRoleCrediAvenant : codeRoleCreditAvenant donnee par le credit
         * @param phasePeriodiciteMerInteret : periodiciteMiseReouvrementInteret de la phase contenant les paliers
         */
        static fctIsDureePalierProgAmorAbsorbee(uniteDureeCredit: string, dureeAjusteeCreditSuiteRecalcul: number, paliers: Array<RestGestion.InformationCredit.IPalierTauxAmortissement>, palierLecture: RestGestion.InformationCredit.IPalierTauxAmortissement, phaseCodeTypePhase: string, phaseUniteDureePhase: string, phaseDureeInitialePhaseCredit: number, phaseNumeroPhase: number, codeRoleCrediAvenant: string, periodiciteMERamortissement: string): Enum.StatutAbsorption;
        static impactModifTauxProgAmor(palierProgAmorSel: Modeles.IPalierProgAmor, phases: Array<Modeles.IPhase>, credit: RestGestion.InformationCredit.ICredit, isChangementProduit: boolean, applyForOther: boolean, isModificationTauxFirst: boolean): Array<Modeles.IPhase>;
        static impactModifTauxInteretSurPalierProgAmor(phase: Modeles.IPhase, phases: Array<Modeles.IPhase>, credit: RestGestion.InformationCredit.ICredit, isChangementProduit: boolean): Array<Modeles.IPhase>;
        static impactModifDureePeriodicitePhaseSurPalierProgAmor(phase: Modeles.IPhase, phases: Array<Modeles.IPhase>, credit: RestGestion.InformationCredit.ICredit, isChangementProduit: boolean): Array<Modeles.IPhase>;
        static controleDureePalierProgAmor(palierSel: Modeles.IPalierProgAmor, isChangementProduit: boolean, uniteDureePhaseSel: string, periodiciteCalculInteretPhaseSel: string, amenagementEcheanceExistantSurCreditS882: string, nbEcheancePalierAmor: number): Array<string>;
        static ajustementDureeDernierPalierProgAmor(creditCodeRoleCreditAvenant: string): void;
        static miseAJourPalierProgAmorToutePhase(palierProgAmorSel: Modeles.IPalierProgAmor, phases: Array<Modeles.IPhase>, creditCodeRoleCreditAvenant: string, applyForOther?: boolean): Array<Modeles.IPhase>;
        static rechercheTxIndexeProgAmor(palierProgAmor: Modeles.IPalierProgAmor, palierTauxInts: Array<Modeles.IPalier>): number;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class ModificationTauxProgEch {
        static impactModifTauxProgEch(palierSel: Modeles.IPalier, phases: Array<Modeles.IPhase>, credit: RestGestion.InformationCredit.ICredit, isChangementProduit: boolean, applyForOther: boolean, isModificationTauxFirst: boolean): Array<Modeles.IPhase>;
        /**
         * Règle permetant d'activer la saisie du tauxProgressionEcheance sur les palierTauxInteret (S845).
         * @param cdTypeTauxProgressionEcheances : vient de palierProduit.cdTypeTauxProgressionEcheances
         * @param tauxProgressionEchMin : le tauxProgressionEcheance minimum venant du catalogue
         * @param tauxProgressionEchMax :le tauxProgressionEcheance maximum venant du catalogue
         */
        static getActiverTauxProgEch(cdTypeTauxProgressionEcheances: string, tauxProgressionEchMin: number, tauxProgressionEchMax: number): boolean;
        static afficherOngletPalierTauxProgEch(phases: Array<Modeles.IPhase>): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestCreditParams = Avenants.Rest.Modeles.AvenantCreditParam;
    import ModelGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestDossierCreditAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class AvenantReportFinPretBuilder {
        static getResult(credit: ModelGestion.InformationCredit.ICredit, phase: ModelGestion.InformationCredit.IPhase, accessoires: Array<RestCreditParams.Produit.IAccessoire>, codeTypeAcces: Commun.Enum.CodeTypeAcces, creditByCaraFinan: RestDossierCreditAvenant.CaracteristiqueFinan.ICredit, isChangementProduit: boolean): Modeles.IReportFinPret;
        protected static getSecurisationActiv(creditOrigineCodeCreditSecurisable: string): boolean;
        protected static getEtatAvantAvenant(accessoire: RestCreditParams.Produit.IAccessoire | RestDossierCreditAvenant.CaracteristiqueFinan.IAccessoire): string;
        protected static getEtatActuel(accessoire: RestCreditParams.Produit.IAccessoire | RestDossierCreditAvenant.CaracteristiqueFinan.IAccessoire): string;
        protected static getNbrMaxEchReportes(credit: ModelGestion.InformationCredit.ICredit): number;
    }
}

declare module Avenants.Business.Modeles {
    interface IReportFinPret {
        titre: string;
        isReportFinPretCree: boolean;
        creation: boolean;
        reportFinPretAccesValidation: boolean;
        isSecurisationActiv: boolean;
        isSecurisationOpen: boolean;
        modeEdition: boolean;
        isEditionCanBeCanceled: boolean;
        isComboTaux: boolean;
        isComboQuotite: boolean;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        quotite: number;
        quotiteMin: number;
        quotiteMax: number;
        quotiteConseille: number;
        quotiteCombo: Array<ICombo>;
        libelleHelpQuotite: string;
        echeancesReportees: number;
        phasePeriodiciteMiseRecouvrInterets: string;
        periodiciteEcheanceReportees: string;
        libelleDureeEcheancesReportees: string;
        tauxFrais: number;
        tauxFraisMin: number;
        tauxFraisMax: number;
        tauxConseille: number;
        tauxCredit: number;
        tauxCombo: Array<ICombo>;
        libelleHelpTauxFrais: string;
        etatAvant: string;
        etatActuel: string;
        action: string;
        isReportFinPretPossible: boolean;
        accessoires: Array<Avenants.Rest.Modeles.AvenantCreditParam.Produit.IAccessoire>;
        numeroPlanSecurisation: number;
        nbPeriodeFractionnement: number;
        dateDebutChomage: string;
        libelleHelpNbrEchReportees: string;
        nbrEchReporteesMax: number;
    }
    interface ICombo {
        label: string;
        value: number;
    }
    interface IDateReportFinPret {
        regleDateDebutApplication: string;
        regleEvenementPremierRecouvrement: string;
        dateAppelAccessoire: string;
        dateDebutApplicationElement: string;
        dateFinApplicationElement: string;
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Le TOC est spécifique selon l'avenant d'objet ou de garanties
     */
    interface ITypeObjetCommercialCommun {
        typeObjetFinanGaranti: string;
        libelleLong: string;
        listeTor: Array<ITypeObjetReglemente>;
    }
    interface ITypeObjetCommercialGarantie extends ITypeObjetCommercialCommun {
        typologieLObjet: string;
        categorieReglementaireAttrib: string;
    }
    interface ITypeObjetCommercialObjet extends ITypeObjetCommercialCommun {
        codeNatureFinancement: string;
        codeAffectationObjet: string;
    }
    interface ITypeObjetReglemente {
        type: string;
        libelle: string;
        codeTypeObjetFinanceGaranti: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    import RestInfoObjet = Avenants.Rest.Modeles.DossierCreditAvenant.InformationObjet;
    class TypeObjetCommercialBuilder {
        /**
         * Crétaion du TOC pour l'avenant de garanties
         */
        static getTocByGarantie(objetNatureGarantie: RestGaranties.IObjetNatureGarantie, toc: RestGaranties.IObjetCommerciaux, listeObjetReglementeParCategorie: Array<RestGaranties.IObjetReglementeParCategorie>, listeObjetReglemente: Array<RestGaranties.IObjetReglemente>): ITypeObjetCommercialGarantie;
        private static getListeTorByToc(toc, listeObjetReglementeParCategorie, listeObjetReglemente);
        /**
         * Création du TOC pour l'avenant d'objet
         */
        static getTocByObjet(toc: RestInfoObjet.ITypeObjetCommercial, listeTypeObjetReglementes: Array<RestInfoObjet.ITypeObjetReglemente>): ITypeObjetCommercialObjet;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class TypeObjetReglementBuilder {
        static getTorByGaranties(tor: RestAvenant.Garanties.IObjetReglemente, codeTypeObjetFinanceGaranti: string): ITypeObjetReglemente;
        static getTorByObjet(tor: RestAvenant.InformationObjet.ITypeObjetReglemente): ITypeObjetReglemente;
    }
}

declare module Avenants.Business.Modeles {
    interface IPeriodicite {
        code: string;
        libelle: string;
    }
    class PeriodiciteBuilder {
        static getPeriodicite(code: string): IPeriodicite;
    }
}

declare module Avenants.Business.Modeles {
    interface IVersementAttendu {
        idIhm: number;
        montant: number;
        typeVersement: Commun.Enum.TypeVersement;
        dateDebut: Date;
        dateFin: Date;
        periodicite: IPeriodicite;
        isPeriodique: boolean;
        isModeEdition: boolean;
        isCreationFirstEdition: boolean;
        etatManipulation: Enum.EtatManipulation;
        showErreurDateFin(): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class VersementAttendu implements IVersementAttendu {
        idIhm: number;
        montant: number;
        typeVersement: Commun.Enum.TypeVersement;
        dateDebut: Date;
        dateFin: Date;
        periodicite: IPeriodicite;
        isModeEdition: boolean;
        isCreationFirstEdition: boolean;
        etatManipulation: Enum.EtatManipulation;
        isPeriodique: boolean;
        /**
         * L'annulation du mode édition est possible uniquement si le versement est en mode édition et si ce n'est pas la 1ère édition dans le cadre d'une création
         */
        isEditionCanBeCanceled: boolean;
        constructor(idIhm: number, va: RestGaranties.IVersementAttendusGarantie);
        showErreurDateFin(): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    class BuilderCreditCaraFinanAdapater {
        /**
         * Set les crédit de type RestGestion.InformationCredit.ICredit avec les données de RestAvenant.CaracteristiqueFinan.ICredit
         */
        getResult(creditOriginie: RestInfoCredit.ICredit, c: RestCaraFinan.ICredit): RestInfoCredit.ICredit;
    }
    class CreditCaraFinanAdapter implements RestInfoCredit.ICredit {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        identifiantProduit: string;
        libelleLongProduit: string;
        libelleTiers: string;
        dateEffet: string;
        montantEcheance: number;
        montantOrigineCredit: number;
        codeDevise: string;
        dureeCredit: number;
        uniteDureeCredit: string;
        dateEcheance: string;
        tauxNominalCredit: number;
        dateMiseRecouvrementZero: string;
        codeModeExpressionTaux: string;
        codeTauxCreditDirecteur: string;
        codeCristallisationTauxInteret: string;
        codeActionPourMiseAJour: string;
        montantEcheanceMER: number;
        montantFraisGestion: number;
        montantArrieresIncorporesCrd: number;
        codeTraitementFinVersement: string;
        numeroQuantiemeDateEcheance: number;
        codeIndiceNominal: string;
        margeAppliquerSurTauxNominal: number;
        montantCapitalRestantSurCredit: number;
        codeTypeRecalculTA: string;
        dateCreation: string;
        dateFinPrefinancementReelle: string;
        codeIntegrationFraisCrd: string;
        identifiantProfilRenegociation: string;
        codeTypeAvenant: string;
        codeTypeModificationCredit: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        numModaliteRemboursemntAnticipe: number;
        tauxIndemniteRA: number;
        tauxInteretPrefinancement: number;
        codeCreditSecurisable: string;
        dateFinCredit: string;
        codePresenceRevisionSurCredit: string;
        montantIntcompsurCR: number;
        cdTypeArrieresIncorporeCrd: string;
        typeLoi: string;
        nbMaxiPeriodeAllongPourRevision: number;
        nbMaxiPerallsortieCptCourant: number;
        nbMaxiPerallongPourModulation: number;
        mtCapitalRestantSurCredit: number;
        codeCategorieEmprunteur: string;
        typeObjetFinanceGaranti: string;
        montantActualiseCredit: number;
        montantGlobalGarantiCredit: number;
        codeSousTypeAvenantRecouvrement: string;
        codeNatureFinancement: string;
        codeTypeMarche: string;
        dateSignature: string;
        dateEffetInitialeLAvenant: string;
        dateDecisionEmission: string;
        dureeAjusteeCreditSuiteRecalcul: number;
        dateSaisieLEvenement: string;
        dateEmission: string;
        etatBrancheAccessoireEdgAvenant: string;
        delaiMinimumAcceptation: number;
        delaiRetractation: number;
        commentaireProduits: string;
        montantMAfondsDemandees: number;
        codeEcheancierVersemcontractuel: string;
        codeTypePretCombine: string;
        codePresenceServiceObjet: string;
        existenceAccessoireBonMajTaux: string;
        cumulBonificationsMajorations: number;
        codeIndicateurIntegrationCrd: string;
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
        montantEcheanceMER1: number;
        phases: Array<RestInfoCredit.IPhase>;
        echeancesReportees: Array<RestInfoCredit.IEcheanceReportee>;
        accessoires: Array<RestInfoCredit.IAccessoire>;
        constructor(cr: RestCaraFinan.ICredit, crSqed: RestInfoCredit.ICredit, isChangementProduit: boolean);
        private getNumeroPhase(phases);
        private getEcheanceReportee(echReport);
        private getAccessoire(acc);
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    /**
     * Formate un palier de type RestAvenant.CaracteristiqueFinan.IPalier en RestGestion.InformationCredit.IPalierTauxInteret
     */
    class PalierCaraFinanAdapater implements RestInfoCredit.IPalierTauxInteret {
        codeEtablissement: any;
        cdModifCaracteristfinancieres: any;
        codeIndice: any;
        codeOccurabsorbeePhasePalier: any;
        codeRoleCreditAvenant: any;
        elementModifiableParAvenant: any;
        identifiantCredit: any;
        margeAppliquerSurTaux: any;
        noPhaseCreditProchaineRevision: any;
        numeroDerniereEcheancePalier: any;
        numeroPremiereEcheancePalier: any;
        numeroPhase: any;
        numeroPremiereEcheancePalie: any;
        numeroRelatif: any;
        numeroRelatif1: any;
        numeroRelatif2: any;
        numeroRelatifPalierProduit: any;
        numeroRelatifSimulationAvenant: any;
        periodiciteApplicProgreEcheance: any;
        tauxInteretPalier: any;
        tauxProgressionDesEcheances: any;
        typeRemboursement: any;
        uniteDureePhase: any;
        constructor(p: RestCaraFinan.IPalier);
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    /**
     * Formate une phase de type RestAvenant.CaracteristiqueFinan.IPhase en RestGestion.InformationCredit.IPhase
     */
    class PhaseCaraFinanAdapater implements RestInfoCredit.IPhase {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroPhase: number;
        codeTypePhase: string;
        noRelatifPhaseTypePhaseProduit: number;
        libelleLongTypePhase: string;
        dureeInitialePhaseCredit: number;
        dureeResiduelleCredit: number;
        uniteDureePhase: string;
        tauxNominalPhase: number;
        codeTauxDesPaliersCalcules: string;
        tauxMoyenPhaseCredit: number;
        modeCalculAmortissement: string;
        quotiteCapitalAmortir: number;
        periodiciteMERamortissement: string;
        periodiciteCalculInterets: string;
        dateFinPrefinancementInitiale: string;
        codeIndiceNominal: string;
        margeAppliquerSurTaux: number;
        typeIndexationTaux: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        periodiciteMiseRecouvrInterets: string;
        numeroJeuIndicesRevision: number;
        noPhaseCreditProchaineRevision: number;
        elementModifiableParAvenant: string;
        modeCapitRecouvInterets: string;
        cdModifCaracteristfinancieres: string;
        codeOccurabsorbeePhasePalier: string;
        partieFixeUnTauxComposite: number;
        nbJoursDansAnneeDenominateur: number;
        nbJoursDansAnneeNumerateur: number;
        calculInteretsEnJoursReels: string;
        prelevementEnFinPhase: string;
        codeTypeEcretage: string;
        paliersTauxInterets: Array<RestInfoCredit.IPalierTauxInteret>;
        parametresRevisionTaux: Array<RestInfoCredit.IParametreRevisionTaux>;
        paliersTauxAmortissement: Array<RestInfoCredit.IPalierTauxAmortissement>;
        pretsCombines: Array<RestInfoCredit.IPretCombine>;
        constructor(p: RestCaraFinan.IPhase);
        private getParametreRevisionTaux(p);
        private getPalierTauxAmortissement(p);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class CaracteristiqueFinanAccessoireBuilder {
        static getListeAccessoiresAvenant(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, avenantDescription: Modeles.IAvenantDescription, credit: RestGestion.InformationCredit.ICredit): Array<RestAvenantCaraFinan.IAccessoire>;
        private static getListeAccessoireProduitWithoutFraisAvenant(listeAccessoire, fraisAvenant);
        private static calculDatesReglesAccessoire(credit, phase, numeroPhase, regleAppelAccessoireAperiodique, regleDateDebutApplicatAccess, regleDateDebutAppliAccCatalogue);
        private static getRegleDateDebutApplicationAccessoirePeriodique(credit, phase, regleDateDebutApplicationElement);
        private static getRegleEvenementPremierRecouvrementAccessoirePeriodique(credit, phase);
        private static getDateDebutApplicationElementAccessoirePeriodique(credit, phase, regleDateDebutApplicationElement);
        private static getDatePremireEchApresDateEffet(credit, phaseEnCours);
        private static getEcheanceSuivante(date, periodicite, quantieme, nombreEcheances?);
        private static quantiemeDuMois(date, quantieme);
        private static getDateAppelAccessoireAperiodique(credit, regleAppelAccessoireAperiodique);
        static regleD01DateEffet: string;
        static regleD02DateEmissionOffre: string;
        static regleD03DateSignatureContratAssurance: string;
        static regleD04DateMer0: string;
        static regleD06Date1erVersement: string;
        static regleD07DateDernierVersement: string;
        static regleD11DateDebutPhase: string;
        static regleD12DateFixe: string;
        static regleD13DateFinPret: string;
        static regleD14DateDebutElementFixee: string;
        static regleD16DatePeriodeCivile: string;
        static regleB10AppelDateEffet: string;
        static regleB11AppelDateSignature: string;
        static regleB12Appel1ereEcheance: string;
        static regleB13IntegreCrdDateEffetAvenant: string;
        static regleB14AppelFinCredit: string;
        private static getAccessoireAnnexeAvenant(dataCommonCaraFinan, codeTypeAcces, credit, a, dateEffet);
        private static getCodeTypePhase(a, phase);
        private static getNumeroPhase(a, phase);
        private static getDateDebutApplicationElement(a, dateEffet);
        private static getDateFinApplicationElement(a, dateEffet);
        private static getScissionAccessoireAvenant(acc, credit);
        private static getAccessoireAvenant(dataCommonCaraFinan, a, dateEffet, codeTypeAcces, credit, isAvenantReportFinPret, frais?, reportFinPret?);
        private static getTauxAccessoire(accessoire, frais?, reportFinPret?);
        private static getCodeActionEcranListeAccessoireAnnexe(etatManipulation);
        private static getCodeActionEcranListeAccessoire(indicAccCreeParAvenant, indicAccAnnuleAv, indicAccValide, isDuplication, a, frais);
        private static getIndicAccessoireCreeParAvenant(indicAccCreeParAvenant, indicAccAnnuleAv, isDuplication);
        private static getIndicateurAccessoireValide(indicAccCreeParAvenant, indicAccAnnuleAv, indicAccValide, isDuplication);
        private static getIndicateurAccessoireAnnuleAv(indicAccCreeParAvenant, indicAccAnnuleAv, isDuplication);
        private static getRealDateDebutApplication22(creditDateFinCredit, accessoire, periodicite, quantieme);
        private static getDateFin(dateDebut, rfpEcheancesReportees, periodicite, quantieme);
        private static findLastAccessoire22CreditOrigine(credit);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestGestionInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    /**
     * Construction de l'assurance pour la création d'un avenant
     */
    class CaracteristiqueFinanAssuranceBuilder {
        /**
         * Construction de l'objet d'assurance lorsque l'avenant ne les modifie pas (pas en avenant d'assurance)
         * Il faut faire avec les données par défaut
         * @param a: élément reçu de caraFinan et non modifié
         */
        static getAssuranceDefault(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, a: RestAvenantCaraFinan.IAssurance): RestAvenantCaraFinan.IAssurance;
        /**
         * Construction de l'objet d'assurance lorsque l'avenant les modifie (c'est un avenant d'assurance)
         * Il faut faire avec les données par défaut
         */
        static getAssurance(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, a: IAssurance, c: RestGestionInfoCredit.ICredit, isAvenantAte: boolean, isAvenantQuantieme: boolean): RestAvenantCaraFinan.IAssurance;
        private static getCodeAssuranceObligatoire(typeAssurance, codeAssuranceObligatoireInit);
        private static getPersonneAssuree(p, idProduit);
        private static getEltCalculAccessoireAssurance(dataCommonCaraFinan, acc, idAssurance, isAvenantAte, isAvenantQuantieme);
        private static getComposanteAssurance(dataCommonCaraFinan, assurance);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestGestionInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    /**
     * Génère l'objet d'entrée permettant de créer un avenant
     */
    class CaracteristiqueFinanCreditBuilder {
        static getCredit(creditOrigine: RestGestionInfoCredit.ICredit, avenantDescription: IAvenantDescription, dateTraitement: string): RestAvenantCaraFinan.ICredit;
        private static getTauxNominal(isCreation, credit, creditByCaraFinanLoaded, reportFinPret, phases);
        private static getDateFinCredit(avenantDescription, avenantAte, infoCreditOrigine);
        private static getDureeCredit(avenantDescription, infoCreditOrigine);
        private static getDureeAjusteeCreditSuiteRecalcul(avenantDescription, infoCreditOrigine);
        private static getDateEcheance(isCreation, avenantDescription, credit, creditByCaraFinanLoaded);
        private static getListeAssurances(dataCommonCaraFinan, avenantDescription, c, listeAssurancesByCaraFinanLoaded);
        private static getListePhases(avenantDescription, infoCredit, numeroRelatifSimulationAvenant, isChangementProduit);
        private static getListeEcheancesReportees(avenantDescription, c, numeroRelatifSimulationAvenant);
        private static getEcheanceReportee(e, numeroRelatifSimulationAvenant, reportFinPret);
        private static getListeEcheancesAmenagees(dataCommonCaraFinan, creditByCaraFinanLoaded, avenantDescription);
        private static getNumeroJeuIndiceRevision(avenantDescription, isChangementProduit);
        /**
         * Calcul de l'indice de révision en changement de produit quand l'indice du taux est sélectionnable
         */
        private static getNumeroJeuIndiceRevisionCustom(phaseProduits, conditionTauxProduitSel, phaseAvailableSel);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestGestionInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    class CaracteristiqueFinanCreditObjetBuilder {
        static getCreditObjet(creditOrigine: RestGestionInfoCredit.ICredit, avenantDescription: Modeles.IAvenantDescription): RestAvenantCaraFinan.ICreditObjet;
        protected static setPrixMarche(prixMarche: IPrixMarcheObjet): string;
        protected static setModaliteOccupationObjet(objetOccupePar: IModaliteOccupationObjet): string;
        protected static setZoneFranche(zoneFranche: IZoneFrancheObjet): string;
        protected static setZoneGeographique(zoneGeo: IZoneGeographiqueObjet, zoneRobien: IZoneRobienObjet): string;
        protected static setCodeQualiteMarche(typeMarcheBien: ITypeMarcheBien): string;
        protected static setCodeMiseEnOeuvreProjet(miseOeuvreBien: IMiseEnOeuvreBien, affichageMiseOeuvreBien: boolean): string;
        protected static setModeAcquisitionTerrain(modeAcquisitionTerrain: IModeAcquisitionTerrain): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    class CaracteristiqueFinanEmprunteurBuilder {
        static getInformationEmprunteur(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, avenantDescription: Modeles.IAvenantDescription): RestAvenantCaraFinan.IInformationEmprunteur;
        private static getDataInformationEmprunteur(dataCommonCaraFinan, emprunteurNouveau, dateEffet);
        private static getListePersonneComposantEmprunteur(dataCommonCaraFinan, idEntiteTitulaire, listePersonneEmprunteur);
        private static getPersonneComposantEmprunteur(dataCommonCaraFinan, idEntiteTitulaire, personne);
        static getListePersonnePayeur(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, avenantDescription: Modeles.IAvenantDescription): Array<RestAvenantCaraFinan.IPersonnePayeur>;
        private static getPersonnePayeur(dataCommonCaraFinan, p);
        private static getDomiciliation(fluxFinancier);
        private static getRum(fluxFinancier);
    }
}

declare module Avenants.Business.Modeles {
    import RestGestionInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    interface IDataCommonBuilderCaraFinan {
        codeEtablissement: number;
        idCredit: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        codeRoleCreditAvenant: string;
    }
    /**
     * génère les données communes à tous les objets présents au sein de CaraFinan
     */
    class DataCommonCaraFinanBuilder {
        static getResult(creditOrigine: RestGestionInfoCredit.ICredit, avenantDescription: Modeles.IAvenantDescription): IDataCommonBuilderCaraFinan;
        private static getNumeroRelatif(creditOrigine, avenantDescription);
        private static getNumeroRelatifSimulationAvenant(creditOrigine, avenantDescription);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestGestionInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    class CaracteristiqueFinanPhaseBuilder {
        /**
         * Pour récupérer le flux caraFinan il est nécessaire de générer les phases à partir d'infoCredit
         */
        static getPhaseForInit(p: RestGestionInfoCredit.IPhase, numeroRelatifSimulationAvenant: number, isChangementProduit: boolean): RestAvenantCaraFinan.IPhase;
        static getPhase(p: IPhase, infoCredit: RestGestionInfoCredit.ICredit, numeroRelatifSimulationAvenant: number, dateFinPrefiReelleByCredit: Date, isChangementProduit: boolean, isCreditDirecteurIndiceActif: boolean, numeroJeuIndiceRevision: number, dernierePhasePrimolis: [number, boolean]): RestAvenantCaraFinan.IPhase;
        private static getListeEcheancesALaCarteV2(listePalier, codeEtablissement, identifiantCredit, isChangementProduit, dernierePhasePrimolis);
        private static getEcheanceALaCarte(palier, echeanceALaCarte, codeEtablissement, identifiantCredit, isChangementProduit);
        private static getMontantRemboursementCreditSaisi(echeanceALaCarte);
        private static getMontantAmortissementCreditSaisi(echeanceALaCarte);
        private static getElementModifiableParAvenant(phase, infoCredit, dateFinPrefiReelleByCredit);
        private static getElementModifiableParAvenantByInfoCredit(phase, infoCredit, dateFinPrefiReelleByCredit);
        private static getNumeroDerniereEcheancePalier(phase);
        private static getPalierInit(p, numeroRelatifSimulationAvenant);
        /**
         * Utilisé dans le cas de l'enregistrement pour l'avenant de taux
         */
        private static getPalierV2(p, numeroRelatifSimulationAvenant);
        private static getPalierTauxAmortissementInit(p, numeroRelatifSimulationAvenant);
        /**
         * Permet de déterminer les palierTauxAmortissement (S846) de chaque phase du crédit.
         * @param numeroPhaseModele : Dans le cadre ATE, le numeroPhase du modele est différent du numeroPhase donné par phaseByRest.
         * @param phaseByRest : Informations sur la phase et les paliers données par le service correspondant.
         * @param numeroRelatifSimulationAvenant
         * @param listePalier : palier du modèle
         * @param isChangementProduit : Renseigne si l'avenant est en changement de produit
         */
        private static getListePalierTauxAmortissement(phase, numeroRelatifSimulationAvenant, isChangementProduit);
        private static getPalierTauxAmortissement(p, numeroRelatifSimulationAvenant, isChangementProduit);
        /**
         * IParametreRevisionTaux
         */
        private static getListeParametresRevisionTaux(p, numeroRelatifSimulationAvenant, isChangementProduit, isCreditDirecteur, numeroJeuIndiceRevision);
        private static getParametreRevisionTaux(p, numeroRelatifSimulationAvenant, isChangementProduit, isCreditDirecteurIndiceActif, numeroJeuIndiceRevision);
        private static getParametreRevisionTauxInit(p, numeroRelatifSimulationAvenant);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestAvenantServicesObjet = Avenants.Rest.Modeles.DossierCreditAvenant.ServicesObjet;
    class CaracteristiqueFinanServicesObjetBuilder {
        static getAccessoiresServicesObjet(avenantDescription: Modeles.IAvenantDescription): Array<RestAvenantCaraFinan.IAccessoireServiceObjet>;
        static getServicesObjet(avenantDescription: Modeles.IAvenantDescription): Array<RestAvenantCaraFinan.IServiceObjet>;
        static getCodeRoleCreditAvenantDefaut(avenantDescription: Modeles.IAvenantDescription): string;
        static getCodeRoleCreditAvenant(codeRoleCreditAvenant: string, codeRoleCreditAvenantDefaut: string): string;
        static getCodeActionEcranListe(unElementCalcul: RestAvenantServicesObjet.IElementCalcul | RestAvenantServicesObjet.IServiceObjet, avenantDescription: Modeles.IAvenantDescription): string;
        static getModeComptaRecouvrAccessoire(unElementCalcul: RestAvenantServicesObjet.IElementCalcul): string;
        static getRegleDateEffet(regleDateEffet: string): string;
        static getNumeroRelatif2(serviceObjet: RestAvenantServicesObjet.IServiceObjet): number;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    class CaraFinan {
        static getCodeActionPourMiseAJour(etatManipulation: Enum.EtatManipulation, codeActionPourMiseAJourInitial?: string): string;
        /**
         * /!\    ATTENTION     "Touche pas à ça p'tit con !"     /!\
         *
         * Cette donnée permet de piloter le moteur de calcul selon le type de l'avenant
         * Ne pas modifier ou alors il faut être certain de ses répercussions
         */
        static getCodeTypeModificationCredit(listeModificationCredit: Array<Commun.Enum.ModificationCredit>, isCreditWithAjustementEcheances: boolean, isAvecChangementProduit: boolean, isCreditInPrefinancement: boolean, isSecurisationOpenByReportFinPret: boolean, isEntierementVerse: boolean): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    /**
     * Formate un accessoire RestAvenant.Garanties.IAccessoireConventionCatalogue en RestAvenant.CaracteristiqueFinan.IAccessoireParConvention
     */
    class AccessoireConventionAdapaterCaraFinan implements RestAvenant.CaracteristiqueFinan.IAccessoireParConvention {
        codeEtablissement: number;
        identifiantConvention: string;
        codeTypePhase: string;
        numeroPhase: number;
        numRelatifPhaseTypePhaseProduit: number;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        codeModeCalculAccessoire: string;
        montantConseilleAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        mtPlafondTrancheCalculAccess: number;
        tauxConseilleAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        mtPlafondTrancheCalculAccess1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        mtPlafondTrancheCalculAccess2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        mtPlafondTrancheCalculAccess3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        mtPlafondTrancheCalculAccess4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcule: number;
        montantMaximumAccessoireCalcule: number;
        tauxAccessoirePersonnesAgees: number;
        mtPasMontantAccessoire: number;
        regleAppelAccessoireAperiodique: string;
        libelleStandard: string;
        codeTypeAssietteCalculAccess: string;
        dureeApplicationAccessoire: number;
        periodiciteApplicationAccess: string;
        numeroRegleApplicationAccess: string;
        indicateurBanalise: string;
        numeroTranche: number;
        ageMinimumEntreeAssurance: number;
        ageMaximumEntreeAssurance: number;
        dureeApplicationAccess: number;
        uniteDureeApplicAccess: string;
        codeTypeApplicationAccessoire: string;
        cdCommissionIntervenantExterne: string;
        nbJoursAnneeNumerateur: number;
        nbJoursAnneeDenominateur: number;
        constructor(a: RestAvenant.Garanties.IAccessoireConventionCatalogue);
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    /**
     * Formate une convention DossierCreditAvenant.Garanties.IConventionApplicableCredit en IConventionApplicableCatalogue
     */
    class ConventionApplicableCatalogueAdapater implements RestGaranties.IConventionApplicableCatalogue {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        identifiantConvention: string;
        codeTypeAssurance: string;
        libelleCourtTypeAssurance: string;
        numeroExterneConvention: string;
        libelleLongConvention: string;
        datePriseEffetConvention: string;
        dateFinEffetConvention: string;
        ageMaximumEntreeAssurance: number;
        mtMinimumCreditConvention: number;
        mtMaximumCreditConvention: number;
        unitePeriodeConditObtentionConv: string;
        dureeMiniCreditObtentionConv: number;
        dureeMaxiCreditObtentionConv: number;
        cdModeExpressionGarantieAccorde: string;
        quotiteMinimumParBeneficiaire: number;
        quotiteMaximumParBeneficiaire: number;
        pasQuotiteParBeneficiaire: number;
        montantMinimumGarantiParTete: number;
        montantMaximumGarantiParTete: number;
        pasMontantGarantiParTete: number;
        codeTiersGaranti: string;
        codeTypeObjetAutorise: string;
        ageMinimumEntreeAssurance: number;
        ageMaximumCouvertureAssurance: number;
        cdPosibiliteExtensionCouverture: string;
        montantMaximumEncoursGaranti: number;
        dureeMaxiPrefiPourConvention: number;
        dureeMaxiDifTotalPourConvention: number;
        dureeMaxiDifAmortPourConvention: number;
        dureeMaxiAmortisspourConvention: number;
        montantPlafondEncoursDelegation: number;
        regleDateEffetAssurgarantie: string;
        ageMaximumCouvertureEnExtension: number;
        codeTypeConvention: string;
        codeNatureGarantie: string;
        codeNatureCautionnement: string;
        identifiantIntervenant: string;
        cdCommissionIntervenantExterne: string;
        codeFamilleProduit: string;
        numeroRelatifProduit: string;
        codeRestitution: string;
        codeTypeAccessoireConvention: string;
        codeIdentificationConventionJur: string;
        constructor(c: RestGaranties.IConventionApplicableCredit);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    /**
     * Formate un accessoire RestAvenant.Garanties.IElementCalculGarantie en RestAvenant.CaracteristiqueFinan.IElementCalculAccessoire
     */
    class EltCalculAdapaterCaraFinan implements RestAvenant.CaracteristiqueFinan.IElementCalculAccessoire {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        identifiantAssurance: string;
        numeroPhase: number;
        numeroRelatif: number;
        codeTypeAccessoire: string;
        codeTypePhase: string;
        numRelatifPhaseTypePhaseProduit: number;
        libelleTypeAccessoire: string;
        dureeApplicationElement: number;
        periodiciteApplicationElement: string;
        numeroRegleApplicationElement: string;
        montantElement: number;
        codeTypeAssietteCalculElement: string;
        mtPlafondTrancheCalculAccess: number;
        tauxElement: number;
        mtPlafondTrancheCalculAccess1: number;
        tauxElement1: number;
        mtPlafondTrancheCalculAccess2: number;
        tauxElement2: number;
        mtPlafondTrancheCalculAccess3: number;
        tauxElement3: number;
        mtPlafondTrancheCalculAccess4: number;
        tauxElement4: number;
        numeroRelatifSimulationAvenant: number;
        numeroRelatif1: number;
        codeModeCalculTaux: string;
        codeActionEcranListe: string;
        codeModeCalculAccessoire: string;
        mtAssietteAcessFixeeContract: number;
        numeroTranche: number;
        codeTypeAccessoireConvention: string;
        nbJoursAnneeNumerateur: number;
        nbJoursAnneeDenominateur: number;
        constructor(e: RestAvenant.Garanties.IElementCalculGarantie);
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    /**
     * Formate une personne de type DossierCreditAvenant.Garanties.IPersonneAssurableOuGarantCatalogue en IPersonneAssurableOuGarantCatalogue
     */
    class PersonneAssurableOuGarantCatalogueAdapater implements RestGaranties.IPersonneAssurableOuGarantCatalogue {
        codeEtablissement: number;
        numeroCredit: string;
        numeroRelatif: number;
        codeRoleCreditAvenant: string;
        identifiantPersonneEstAssure: string;
        libelleTiers: string;
        dateNaissance: string;
        typeRolePersonne: string;
        roleLIntervenant: string;
        codeTypePersonne: string;
        numeroRelatifSimulationAvenant: number;
        constructor(g: RestGaranties.IPersonneAssurableOuGarant);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    /**
     * Formate un accessoire RestAvenant.AccessoireAnnexe.IAccessoire en RestAvenant.CaracteristiqueFinan.IAccessoireParConvention
     */
    class AccessoireConventionAdapterCaraFinan implements RestAvenant.CaracteristiqueFinan.IAccessoireParConvention {
        codeEtablissement: number;
        identifiantConvention: string;
        codeTypePhase: string;
        numeroPhase: number;
        numRelatifPhaseTypePhaseProduit: number;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        codeModeCalculAccessoire: string;
        montantConseilleAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        mtPlafondTrancheCalculAccess: number;
        tauxConseilleAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        mtPlafondTrancheCalculAccess1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        mtPlafondTrancheCalculAccess2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        mtPlafondTrancheCalculAccess3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        mtPlafondTrancheCalculAccess4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcule: number;
        montantMaximumAccessoireCalcule: number;
        tauxAccessoirePersonnesAgees: number;
        mtPasMontantAccessoire: number;
        regleAppelAccessoireAperiodique: string;
        libelleStandard: string;
        codeTypeAssietteCalculAccess: string;
        dureeApplicationAccessoire: number;
        periodiciteApplicationAccess: string;
        numeroRegleApplicationAccess: string;
        indicateurBanalise: string;
        numeroTranche: number;
        ageMinimumEntreeAssurance: number;
        ageMaximumEntreeAssurance: number;
        dureeApplicationAccess: number;
        uniteDureeApplicAccess: string;
        codeTypeApplicationAccessoire: string;
        cdCommissionIntervenantExterne: string;
        nbJoursAnneeNumerateur: number;
        nbJoursAnneeDenominateur: number;
        constructor(a: RestAvenant.CaracteristiqueFinan.IAccessoire);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    /**
     * Formate un accessoire de type Modeles.IAccessoireAnnexe en RestInfoCredit.IAccessoire
     */
    class AccessoireAnnexeAdapaterProduitBuilder {
        static getResult(acc: Modeles.IAccessoireAnnexe): RestAvenantCaraFinan.IAccessoire;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    /**
     * Formate un accessoire RestAvenant.AccessoireAnnexe.IAccessoire en RestAvenant.CaracteristiqueFinan.IAccessoireParConvention
     */
    class AccessoireAdapterCaraFinan implements RestAvenant.CaracteristiqueFinan.IAccessoireParConvention {
        codeEtablissement: number;
        identifiantConvention: string;
        codeTypePhase: string;
        numeroPhase: number;
        numRelatifPhaseTypePhaseProduit: number;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        codeModeCalculAccessoire: string;
        codeModeCalculAccessoire1: string;
        montantConseilleAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        mtPlafondTrancheCalculAccess: number;
        tauxConseilleAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        mtPlafondTrancheCalculAccess1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        mtPlafondTrancheCalculAccess2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        mtPlafondTrancheCalculAccess3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        mtPlafondTrancheCalculAccess4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcule: number;
        montantMaximumAccessoireCalcule: number;
        tauxAccessoirePersonnesAgees: number;
        mtPasMontantAccessoire: number;
        regleAppelAccessoireAperiodique: string;
        libelleStandard: string;
        codeTypeAssietteCalculAccess: string;
        dureeApplicationAccessoire: number;
        periodiciteApplicationAccess: string;
        numeroRegleApplicationAccess: string;
        indicateurBanalise: string;
        numeroTranche: number;
        ageMinimumEntreeAssurance: number;
        ageMaximumEntreeAssurance: number;
        dureeApplicationAccess: number;
        uniteDureeApplicAccess: string;
        codeTypeApplicationAccessoire: string;
        cdCommissionIntervenantExterne: string;
        nbJoursAnneeNumerateur: number;
        nbJoursAnneeDenominateur: number;
        constructor(a: RestInfoCredit.IAccessoire);
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    /**
     * Formate le crédit RestGestion.InformationCredit.ICredit en RestAvenant.CaracteristiqueFinan.ICredit
     */
    class CreditInfoCreditAdapaterCaraFinan implements RestCaraFinan.ICredit {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        identifiantProduit: string;
        libelleLongProduit: string;
        libelleTiers: string;
        dateEffet: string;
        montantEcheance: number;
        montantOrigineCredit: number;
        codeDevise: string;
        dureeCredit: number;
        uniteDureeCredit: string;
        dateEcheance: string;
        tauxNominalCredit: number;
        dateMiseRecouvrementZero: string;
        codeModeExpressionTaux: string;
        codeTauxCreditDirecteur: string;
        codeCristallisationTauxInteret: string;
        codeActionPourMiseAJour: string;
        montantEcheanceMER: number;
        montantFraisGestion: number;
        montantArrieresIncorporesCrd: number;
        codeTraitementFinVersement: string;
        numeroQuantiemeDateEcheance: number;
        codeIndiceNominal: string;
        margeAppliquerSurTauxNominal: number;
        montantCapitalRestantSurCredit: number;
        codeTypeRecalculTA: string;
        dateCreation: string;
        dateFinPrefinancementReelle: string;
        codeIntegrationFraisCrd: string;
        identifiantProfilRenegociation: string;
        codeTypeAvenant: string;
        codeTypeModificationCredit: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        numeroModaliteRembAnticipe: number;
        tauxIndemniteRA: number;
        tauxInteretPrefinancement: number;
        codeCreditSecurisable: string;
        dateFinCredit: string;
        codePresenceRevisionSurCredit: string;
        montantIntcompsurCR: number;
        cdTypeArrieresIncorporeCrd: string;
        typeLoi: string;
        nbMaxiPeriodeAllongPourRevision: number;
        nbMaxiPerallsortieCptCourant: number;
        nbMaxiPerallongPourModulation: number;
        mtCapitalRestantSurCredit: number;
        codeCategorieEmprunteur: string;
        typeObjetFinanceGaranti: string;
        montantActualiseCredit: number;
        montantGlobalGarantiCredit: number;
        codeSousTypeAvenantRecouvrement: string;
        codeNatureFinancement: string;
        codeTypeMarche: string;
        dateSignature: string;
        dateEffetInitialeLAvenant: string;
        dateDecisionEmission: string;
        dureeAjusteeCreditSuiteRecalcul: number;
        dateSaisieLEvenement: string;
        dateEmission: string;
        etatBrancheAccessoireEdgAvenant: string;
        delaiMinimumAcceptation: number;
        delaiRetractation: number;
        commentaireProduits: string;
        montantMAfondsDemandees: number;
        codeEcheancierVersemcontractuel: string;
        codeTypePretCombine: string;
        codePresenceServiceObjet: string;
        existenceAccessoireBonMajTaux: string;
        cumulDesBonifsMajorations: number;
        codeIndicateurIntegrationCrd: string;
        tauxInteretsRetardImpaye: number;
        phases: Array<RestCaraFinan.IPhase>;
        echeancesReportees: Array<RestCaraFinan.IEcheanceReportee>;
        echeancesAmenagees: Array<RestCaraFinan.IEcheanceAmenagee>;
        assurances: Array<RestCaraFinan.IAssurance>;
        garantiesExistantes: Array<RestCaraFinan.IGarantieExistante>;
        garantiesSuretesReelles: Array<RestCaraFinan.IGarantieSureteReelle>;
        accessoires: Array<RestCaraFinan.IAccessoire>;
        garantie: RestCaraFinan.IGarantie;
        phasesBis: Array<RestCaraFinan.IPhase>;
        garantiesSuretesPerso: Array<RestCaraFinan.IGarantieSuretePerso>;
        informationsMenage: Array<RestCaraFinan.IInformationMenage>;
        informationsEmprunteur: RestCaraFinan.IInformationEmprunteur;
        personnePayeurs: Array<RestCaraFinan.IPersonnePayeur>;
        accessoiresBis: Array<RestCaraFinan.IAccessoire>;
        garantiesApplicables: Array<RestCaraFinan.IGarantieApplicable>;
        motifsEstimations: Array<RestCaraFinan.IMotifEstimation>;
        servicesObjet: Array<RestCaraFinan.IServiceObjet>;
        accessoiresServicesObjet: Array<RestCaraFinan.IAccessoireServiceObjet>;
        constructor(c: RestInfoCredit.ICredit);
        private getAccessoire(a);
    }
}

declare module Avenants.Business.Modeles {
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    /**
     * Formate une phase RestGestion.InformationCredit.IPhase en RestAvenant.CaracteristiqueFinan.IPhase
     */
    class PhaseInfoCreditAdapaterCaraFinan implements RestCaraFinan.IPhase {
        codeEtablissement: number;
        identifiantCredit: string;
        codeRoleCreditAvenant: string;
        numeroPhase: number;
        codeTypePhase: string;
        numRelatifPhaseTypePhaseProduit: number;
        libelleLongTypePhase: string;
        dureeInitialePhaseCredit: number;
        dureeResiduelleCredit: number;
        uniteDureePhase: string;
        tauxNominalPhase: number;
        codeTauxDesPaliersCalcules: string;
        tauxMoyenPhaseCredit: number;
        modeCalculAmortissement: string;
        quotiteCapitalAmortir: number;
        periodiciteMERamortissement: string;
        periodiciteCalculInterets: string;
        dateFinPrefinancementInitiale: string;
        codeIndiceNominal: string;
        margeAppliquerSurTaux: number;
        typeIndexationTaux: string;
        numeroRelatif: number;
        numeroRelatifSimulationAvenant: number;
        periodiciteMERInterets: string;
        numeroJeuIndicesRevision: number;
        noPhaseCreditProchaineRevision: number;
        elementModifiableParAvenant: string;
        modeCapitRecouvInterets: string;
        cdModifCaracteristfinancieres: string;
        codeOccurAbsorbeePhasePalier: string;
        partieFixeUnTauxComposite: number;
        nbJoursDansAnneeDenominateur: number;
        nbJoursDansAnneeNumerateur: number;
        calculInteretsEnJoursReels: string;
        prelevementEnFinPhase: string;
        codeTypeEcretage: string;
        dureeAjusteePhaseCredit: number;
        paliers: Array<RestCaraFinan.IPalier>;
        paliersTauxAmortissement: Array<RestCaraFinan.IPalierTauxAmortissement>;
        pretsCombines: Array<RestCaraFinan.IPretCombine>;
        parametresRevisionTaux: Array<RestCaraFinan.IParametreRevisionTaux>;
        echeancesALaCarte: Array<RestCaraFinan.IEcheanceALaCarte>;
        constructor(p: RestInfoCredit.IPhase);
        /**
         * Formate un RestGestion.InformationCredit.IPalierTauxInteret en RestAvenant.CaracteristiqueFinan.IPalier
         */
        private getPalierTauxInteret(p);
        /**
         * Formate un RestGestion.InformationCredit.IParametreRevisionTaux en RestAvenant.CaracteristiqueFinan.IParametreRevisionTaux
         */
        private getParametreRevisionTaux(p);
        /**
         * Formate un RestGestion.InformationCredit.IPalierTauxAmortissement en RestAvenant.CaracteristiqueFinan.IPalierTauxAmortissement
         */
        private getPalierTauxAmortissement(p);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantProduit = Avenants.Rest.Modeles.AvenantCreditParam.Produit;
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    import RestDossierCreditAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    /**
     * Formate un accessoire de type RestInfoCredit.IAccessoire en RestAvenantProduit.IAccessoire
     */
    class AccessoireInfoCreditAdapaterProduitBuilder {
        static getResult(a: RestInfoCredit.IAccessoire): RestAvenantProduit.IAccessoire;
    }
    class AccessoireProduitAdapaterCaraFinanBuilder {
        static getResult(a: RestAvenantProduit.IAccessoire): RestDossierCreditAvenant.CaracteristiqueFinan.IAccessoire;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    abstract class AbstractDetailAccessoirePrincipal implements IDetailAccessoirePrincipal {
        private _tauxDefaut;
        libelleLong: string;
        modeCalcul: Commun.Enum.ModeCalcul;
        modeCalculExhaustif: Commun.Enum.ModeCalculExhaustif;
        taux: number;
        listeTauxChoix: Array<number>;
        showTauxMinimun: boolean;
        tauxMinimum: number;
        showTauxMaximum: boolean;
        tauxMaximum: number;
        showTauxConseille: boolean;
        tauxConseille: number;
        showTauxPersonneAgee: boolean;
        tauxPersonneAgee: number;
        showMontantPlafond: boolean;
        montantPlafond: number;
        showMontantContractuel: boolean;
        montantContractuel: number;
        montant: number;
        montantMinimum: number;
        montantMaximum: number;
        montantConseille: number;
        showMontantPas: boolean;
        montantPas: number;
        listeMontantChoix: Array<number>;
        isTauxEditable: boolean;
        isTauxSelectionnable: boolean;
        isMontantEditable: boolean;
        isMontantSelectionnable: boolean;
        constructor(a: RestAvenant.CaracteristiqueFinan.IAccessoireParConvention, tauxElementCalcule: number, montantElementCalcule: number);
        /**
         * Une action vient de se produire et impacte les choix possibles
         */
        setListeTauxChoix(withExtensionVieuxSelected: boolean): void;
        isTauxValid(): boolean;
        isMontantValid(): boolean;
        private getListeMontantChoix(a);
    }
}

declare module Avenants.Business.Modeles {
    class DetailAccessoireAutre implements IDetailAccessoireAutre {
        libelleLong: string;
        taux: number;
        showTauxMinimun: boolean;
        tauxMinimum: number;
        showTauxMaximum: boolean;
        tauxMaximum: number;
        showTauxConseille: boolean;
        tauxConseille: number;
        showMontantPlafond: boolean;
        montantPlafond: number;
        constructor(numElement: number, tauxElementCalcule: number, tauxMinimumAccessoire: number, tauxMaximumAccessoire: number, tauxElementAccessoire: number, mtPlafondTrancheCalculAccess: number);
        isTauxValid(): boolean;
        private getLibelleLong(numElement, tauxElementCalcule);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class DetailAccessoirePrincipalAnnexe extends AbstractDetailAccessoirePrincipal {
        constructor(a: RestAvenant.CaracteristiqueFinan.IAccessoireParConvention, elt: RestAvenant.CaracteristiqueFinan.IElementCalculAccessoire, devise: string);
        private getLibelleLong(elt, codeModeCalculAccessoire, devise);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class DetailAccessoirePrincipalAssurance extends AbstractDetailAccessoirePrincipal {
        constructor(a: RestAvenant.CaracteristiqueFinan.IAccessoireParConvention, elt: RestAvenant.CaracteristiqueFinan.IElementCalculAccessoire, devise: string);
        private getLibelleLong(elt, codeModeCalculAccessoire, devise);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class DetailAccessoirePrincipalGarantie extends AbstractDetailAccessoirePrincipal {
        constructor(accessoireParConvention: RestAvenant.Garanties.IAccessoireConventionCatalogue, eltCalculAccessoire: RestAvenant.Garanties.IElementCalculGarantie, devise: string);
        private getLibelleLong(elt, codeModeCalculAccessoire, devise);
    }
}

declare module Avenants.Business.Modeles {
    interface IDetailAccessoire {
        elementUn: IDetailAccessoirePrincipal;
        elementDeux: IDetailAccessoireAutre;
        elementTrois: IDetailAccessoireAutre;
        elementQuatre: IDetailAccessoireAutre;
        elementCinq: IDetailAccessoireAutre;
    }
    interface IDetailAccessoirePrincipal extends IDetailAccessoireAutre, IInfosAnnexesAccessoireTaux, IInfosAccessoireMontant {
        showTauxPersonneAgee: boolean;
        tauxPersonneAgee: number;
        showMontantContractuel: boolean;
        montantContractuel: number;
        modeCalcul: Commun.Enum.ModeCalcul;
        modeCalculExhaustif: Commun.Enum.ModeCalculExhaustif;
        setListeTauxChoix(withExtensionVieuxSelected: boolean): void;
    }
    /**
     * Base commune pour gérer les informations du taux d'un accessoire
     */
    interface IInfosBaseAccessoireTaux {
        taux: number;
        showTauxMinimun: boolean;
        tauxMinimum: number;
        showTauxMaximum: boolean;
        tauxMaximum: number;
        showTauxConseille: boolean;
        tauxConseille: number;
        isTauxValid(): boolean;
    }
    /**
     * Base commune pour le comportement du taux d'un accessoire
     */
    interface IInfosAnnexesAccessoireTaux {
        isTauxEditable: boolean;
        isTauxSelectionnable: boolean;
        listeTauxChoix: Array<number>;
    }
    /**
     * Base commune pour gérer le montant d'un accessoire
     */
    interface IInfosAccessoireMontant {
        isMontantEditable: boolean;
        isMontantSelectionnable: boolean;
        montant: number;
        montantMinimum: number;
        montantMaximum: number;
        montantConseille: number;
        showMontantPas: boolean;
        montantPas: number;
        listeMontantChoix: Array<number>;
        isMontantValid(): boolean;
    }
    /**
     * Base pour éditer une accessoire (tous types de calcul)
     */
    interface IAccessoireEdit extends IInfosBaseAccessoireTaux, IInfosAnnexesAccessoireTaux, IInfosAccessoireMontant {
    }
    /**
     * Détail pour une tranche d'un accessoire
     */
    interface IDetailAccessoireAutre extends IInfosBaseAccessoireTaux {
        libelleLong: string;
        showMontantPlafond: boolean;
        montantPlafond: number;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Rest.Modeles.DossierCreditAvenant;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class AssuranceResumeBuilder {
        /**
         * Initialisation de la garantie pour la contractualisation
         */
        static getAssuranceResume(assurance: RestAvenant.CaracteristiqueFinan.IAssurance): IAssuranceResume;
        private static getLibelleDescription(assurance);
        static getAssuranceResumeCompleted(assuranceResume: IAssuranceResume, data: RestGestion.JustifAssurance.IDonneeAssurance, dateTraitement: string): IAssuranceResume;
        private static getListeNature(listeNatureJustif);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Objet pour visualiser les informations essentielles d'une garantie (utilisé dans la contractualisation)
     */
    interface IAssuranceResume {
        /**
         * IDENTIFIANT ASSURANCE
         */
        identifiant: string;
        listeJustificatif: Array<IJustificatifsAssurance>;
        listeNatureJustificatif: Array<INatureJustificatifAssurance>;
        libelleType: string;
        dateDebutEffet: Date;
        dateFinEffet: Date;
        dateCloture: Date;
        dateAnnulation: Date;
        libelleTiers: string;
        idPersonneEstAssure: string;
        denominationGarant: string;
        destinataireLettreImpaye: string;
        idCredit: string;
        idConvention: string;
        numExterne: string;
        idIntervenant: string;
        indicateurBanalise: string;
        codeModificationAutorise: string;
        codeEtablissement: number;
        compteurMiseAJour: number;
        devise: string;
        statut: string;
        libelleDescription: string;
        isDataCompleteLoaded: boolean;
    }
}

declare module Avenants.Business.Modeles {
    interface IJustificatifsAssurance {
        idJustificatif: string;
        couleurTuile: string;
        nature: INatureJustificatifAssurance;
        statut: Enum.JustificatifStatut;
        dateDebutEffet: Date;
        dateFinEffet: Date;
        dateReception: Date;
        dateLimiteReceptionJustificatif: Date;
        montantJustificatifInitial: number;
        montantJustificatif: number;
        referenceExterne: string;
        showBtnValider: boolean;
        showBtnSupprimer: boolean;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        indicateurBanalise: string;
        showDateDebutEffet: boolean;
        showMontantJustificatif: boolean;
        showReferenceExterne: boolean;
        etatManipulation: Enum.EtatManipulation;
        compteurMiseAJour: number;
        codeEtat: string;
    }
    interface INatureJustificatifAssurance {
        code: string;
        libelle: string;
        codeClasse: string;
        libelleClasse: string;
        codeSousClasse: string;
        libelleSousClasse: string;
        codeCategorie: string;
        libelleCategorie: string;
        codeNiveauJustificatif: string;
        libelleNiveauJustificatif: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestJustifAssurance = Avenants.Rest.Modeles.DossierCreditGestion.JustifAssurance;
    class JustificatifAssurance implements IJustificatifsAssurance {
        idJustificatif: string;
        couleurTuile: string;
        nature: INatureJustificatifAssurance;
        statut: Enum.JustificatifStatut;
        dateDebutEffet: Date;
        dateFinEffet: Date;
        dateReception: Date;
        dateLimiteReceptionJustificatif: Date;
        montantJustificatifInitial: number;
        montantJustificatif: number;
        referenceExterne: string;
        showBtnValider: boolean;
        showBtnSupprimer: boolean;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        indicateurBanalise: string;
        showDateDebutEffet: boolean;
        showMontantJustificatif: boolean;
        showReferenceExterne: boolean;
        etatManipulation: Enum.EtatManipulation;
        compteurMiseAJour: number;
        codeEtat: string;
        /**
         * @param dateTraitement: optionelle si une création, obligatoire sinon
         */
        constructor(j: RestJustifAssurance.IJustificatifsAssurance, listeNature: Array<INatureJustificatifAssurance>, dateTraitement?: string);
        /**
         * Gestion des champs manipulables et visibles
         */
        private setChampVisibles(nature);
        /**
         * L'action de suppression est posssible (pour le rendre clos) => attention pas en création
         * L'action de validation est posssible (pour création, reception ou modification)
         */
        private getIsActionAvailable(j, dateTraitement);
    }
}

declare module Avenants.Business.Modeles {
    import RestJustifAssurance = Avenants.Rest.Modeles.DossierCreditGestion.JustifAssurance;
    class NatureJustificatifAssuranceBuilder {
        static getResult(n: RestJustifAssurance.INatureJustif): INatureJustificatifAssurance;
    }
    class NatureJustificatifAssuranceHelper {
        /**
         *  Détermine le niveau de justification pour un justificatif de garantie
         */
        static getLibelleNiveauJustification(codeNiveauJustification: string): string;
    }
}

declare module Avenants.Business.Modeles {
    interface IAlerteAvenant {
        isMessageAlerte: boolean;
        isMessageAlerteBloquant: boolean;
        messageAlertes: Array<string>;
        alerteAvenantInits: Array<IAlerteMessage>;
    }
    interface IAlerteMessage {
        isMessage: boolean;
        isBloquant: boolean;
        message: string;
    }
    class AlerteAvenant implements IAlerteAvenant {
        isMessageAlerte: boolean;
        isMessageAlerteBloquant: boolean;
        messageAlertes: Array<string>;
        alerteAvenantInits: Array<IAlerteMessage>;
        constructor(listeModificationCreditToIncluded: Array<Commun.Enum.ModificationCredit>, amenagechenCoursADateEffet: string, codeTypeAcces: Commun.Enum.CodeTypeAcces);
        protected isPersonneCreation(listeModificationCreditToIncluded: Array<Commun.Enum.ModificationCredit>, codeTypeAcces: Commun.Enum.CodeTypeAcces): boolean;
        /**
         * Permet de déterminer si un Aménagement d'2chéance est en cours sur l'avenant
         * @param amenagementEchexistantSurCreditSqed : donné par SQED (dossierCreditGestion.informationCredit)
         */
        protected isAteEnCours(amenagechenCoursADateEffet: string): boolean;
        /**
         * Indique si la création de la simulation est possible du fait qu'un ATE est en cours.
         * @param listeModificationCreditToIncluded
         * @param isAteEnCoursAvenant
         */
        protected isAteEnCoursBloquant(listeModificationCreditToIncluded: Array<Commun.Enum.ModificationCredit>, isAteEnCoursAvenant: boolean): boolean;
        protected fctIsMessageAlerte(alerteAvenantInits: Array<IAlerteMessage>): boolean;
        protected fctIsMessageAlerteBloquant(alerteAvenantInits: Array<IAlerteMessage>): boolean;
        protected ajoutMessageAlerte(alerteAvenantInits: Array<IAlerteMessage>): Array<string>;
    }
}

declare module Avenants.Business.Modeles {
    import EnumModificationCredit = Commun.Enum.ModificationCredit;
    /**
     * Pour gérer l'enchainement des pages de l'avenant (hors celui de quantième, toujours indépendant)
     */
    class AvenantDescriptionBehavior implements IAvenantDescriptionBehavior {
        stepAvenant: Enum.StepAvenant;
        isPresenceStepOne: boolean;
        isPresenceStepTwo: boolean;
        isPresenceStepThree: boolean;
        isPresencePreviousStep: boolean;
        isPresenceNextStep: boolean;
        constructor(listeModificationCreditAvenant: Array<EnumModificationCredit>, isReloadWithChangementProduit: boolean);
        /**
         * Passe à l'étape suivante
         */
        setToNextStep(): void;
        /**
         * Retour à l'étape précédent
         */
        setToPreviousStep(): void;
        /**
         * Initialisation des données pour le comportement
         */
        private getInitIsPresenceStepOne(listeModificationCredit);
        private getInitIsPresenceStepTwo(listeModificationCredit);
        private getInitIsPresenceStepThree(listeModificationCredit);
        /**
         * Initialisation de l'étape par défaut
         */
        private getInitStepAvenant(isReloadWithChangementProduit);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestAvenantService = Avenants.Rest.Modeles.AvenantCreditService;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class AvenantDescriptionFactory {
        getResult(codeEtablt: string, dateTraitement: string, numRelatif: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, typeAvenant: Commun.Enum.TypeAvenant, codeSousTypeAvenant: Commun.Enum.CodeSousTypeAvenant, dateEffet: Date, codeTypeAcces: Commun.Enum.CodeTypeAcces, droitModifierEnabled: boolean, listeModificationCreditToIncluded: Array<Commun.Enum.ModificationCredit>, caracteristiqueCredit: RestGestion.CaracteristiqueCredit.ICaracteristiqueCredit, caraFinan: RestAvenant.CaracteristiqueFinan.ICaracteristiqueFinan, informationCredit: RestGestion.InformationCredit.IInformationCredit, produitCreditCurrent: RestAvenantParam.Produit.IProduit, listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>, palierCredit: RestGestion.PalierCredit.IPalierCredit, dataPersonnes: IDataAvenantPersonnes, dataObjet: Modeles.IDataAvenantObjet, dataGaranties: RestAvenant.Garanties.IGaranties, isAvecChangementProduit: boolean, eligibiliteChangementProduit: RestAvenantService.EligibiliteChangePdt.IRenegociationProduit, creditChangePdt: RestGestion.InformationCredit.ICredit, isReloadWithChangementProduit: boolean, avenantDescriptionOld: IAvenantDescription, listeTypesSinistres: Array<RestGestion.Parametre.IParametreTypeSinistre>, isProduitClotureChangePdt: boolean, servicesObjet: RestAvenant.ServicesObjet.IServicesObjet): IAvenantDescription;
        /**
         * Cas particulier pour les avenants qui doivent être décorés des données des assurances
         */
        private getAvenantDescriptionDecoreDataAssurance(avenantDescription, listeModificationCreditToIncluded);
        /**
         * Cas particulier pour les avenants qui doivent être décorés des données des garanties
         * - Garantie
         * - Financier (dans le cas d'un avenant de périodicité...)
         */
        private getAvenantDescriptionDecoreDataGarantie(avenantDescription, listeModificationCreditToIncluded);
        /**
         * Pour les données personnes
         * Elles peuvent provenir du flux ou alors de l'avenant déjà en place avant le rechargement des données pour cause de changement de produit
         */
        private getAvenantDescriptionDecoreDataPersonnes(avenantDescription, listeModificationCreditToIncluded, isReloadWithChangementProduit, avenantDescriptionOld);
        /**
         * Pour les données objet
         * Elles peuvent provenir du flux ou alors de l'avenant déjà en place avant le rechargement des données pour cause de changement de produit
         */
        private getAvenantDescriptionDecoreDataObjet(avenantDescription, listeModificationCreditToIncluded, isReloadWithChangementProduit, avenantDescriptionOld);
        /**
         * Pour les services sur objet
         */
        private getAvenantDescriptionDecoreDataServicesObjet(avenantDescription, listeModificationCredit);
        /**
         * Décore l'aveenant des fonctionnalités souhaitées
         * @param avenantDescription
         * @param modificationCredit
         */
        private getAvenantDescriptionDecore(avenantDescription, modificationCredit);
        /**
         * Construction des données REST qui seront utilisées par l'avenant durant son cycle de vie
         */
        private getDataRestAvenant(codeEtablissement, caraFinan, creditCurrentInfoCredit, produitCredit, listeIndice, palierCredit, dataPersonnes, dataObjet, dataGaranties, vraiCreditOrigine, listeTypesSinistres, dataServiceObjet, dataEltCalulServicesObjet);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestAvenantService = Avenants.Rest.Modeles.AvenantCreditService;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    /**
     * - initialisation des données communes à tous les avenants
     * - les élements spécifiques sont initialisés par défaut et doivent être manipulés dans les décorateurs qui en ont la responsabilité
     */
    class AvenantDescription extends AvenantDescriptionBehavior implements IAvenantDescription {
        private _dateFinCreditInitiale;
        codeTypeAcces: Commun.Enum.CodeTypeAcces;
        numero: number;
        codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation;
        typeAvenant: Commun.Enum.TypeAvenant;
        codeSousTypeAvenant: Commun.Enum.CodeSousTypeAvenant;
        compteurMiseJour: number;
        idCredit: string;
        idEmprunteur: string;
        libelleInfosCredit: string;
        devise: string;
        dateEffet: Date;
        dateEffetModifieQuantieme: Date;
        dateFinPrefinancementReelle: Date;
        dateFinCredit: Date;
        dateTraitement: Date;
        dateEcheance: Date;
        listeAcccessoires: Array<RestAvenantParam.Produit.IAccessoire>;
        listeAccessoiresAte: Array<RestAvenantParam.Produit.IAccessoire>;
        listeAccessoiresAnnexes: Array<Business.Modeles.IAccessoireAnnexe>;
        dataFraisAvenant: IDataFraisAvenant;
        listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>;
        isAvenantTauxDuree: boolean;
        isAvenantAssurance: boolean;
        isAvenantGarantie: boolean;
        isAvenantQuantieme: boolean;
        isAvenantReportFinPret: boolean;
        isAvenantAte: boolean;
        isAvenantObjet: boolean;
        isAvenantPersonnes: boolean;
        isAvenantRecouvrement: boolean;
        isAvenantPeriodicite: boolean;
        dataRestAvenant: Modeles.IDataRestAvenant;
        isCreditWithAjustementEcheances: boolean;
        droitModifierEnabled: boolean;
        isEditionAuthorized: boolean;
        isVersementAttenduAjoutable: boolean;
        dataAssurances: IDataAssurances;
        listeAssurancesStock: Array<IAssurance>;
        listeAssurancesAvailables: Array<IAssurance>;
        listeAssurancesAte: Array<RestAvenant.CaracteristiqueFinan.IAssurance>;
        listePhaseStock: Array<IPhase>;
        listePhaseAvailables: Array<IPhase>;
        creditAvenantFinancier: ICreditAvenantFinancier;
        jourFinMoisDateEffet: number;
        reportFinPret: IReportFinPret;
        ate: IAte;
        numeroEcheance: number;
        numeroEcheanceDebutPhase: number;
        numeroEcheanceFinPhase: number;
        infoObjet: IInfoObjet;
        listeGarantiesStock: Array<IGarantie>;
        listeGarantiesAvailables: Array<IGarantie>;
        dataGaranties: IDataGaranties;
        emprunteurActuel: IEmprunteurActuel;
        emprunteurNouveau: IEmprunteurNouveau;
        renegociationProduits: Array<RestGestion.InformationCredit.IRenegociationProduit>;
        isEligibleChangementProduit: boolean;
        isAvecChangementProduit: boolean;
        isChangementProduitExistant: boolean;
        isProduitCloture: boolean;
        eligibiliteRenegociationProduit: RestAvenantService.EligibiliteChangePdt.IRenegociationProduit;
        libelleNouveauProduit: string;
        creditChangePdt: RestGestion.InformationCredit.ICredit;
        numeroModaliteRas: Array<Rest.Modeles.AvenantCreditParam.Produit.IModalite>;
        tauxRa: number;
        numeroModaliteRaDefault: Rest.Modeles.AvenantCreditParam.Produit.IModalite;
        bornesTauxRa: string;
        borneTauxRaMin: number;
        borneTauxRaMax: number;
        palierAbsorbe: boolean;
        numeroPhaseEnCoursCreditOrigine: number;
        numeroPremiereEcheanceLastPalierPhaseO: number;
        reductionMaxCredit: string;
        traitementEcheanceDureeProduit: string;
        motifAllongementDureeProduit: string;
        conditionsDureeProduit: string;
        showVariationDureeProduitForChgtProduit: boolean;
        showVariationDureeProduitForProduitInitial: boolean;
        bornesVariationDureeProduit: string;
        borneMinVariationDureeProduit: number;
        borneMaxVariationDureeProduit: number;
        dureeVariationDureeProduit: number;
        pourcentageAllongementDureeProduit: number;
        cdTypeButoir: string;
        isEditionVariationDureeProduit: boolean;
        isOpenVariationDureeProduit: boolean;
        showPopinChgtProduit: boolean;
        nouvellePhaseAMSupOrigine: boolean;
        isModificationTauxFirst: boolean;
        isModificationPeriodicitePhaseFirst: boolean;
        accessoireIntegreCrd: RestAvenant.CaracteristiqueFinan.IAccessoire;
        alerteAvenant: IAlerteAvenant;
        isAmortissementALaCarte: boolean;
        typeCalculAjustementEcheances: Enum.TypeCalculAjustementEcheancesTaux;
        palierTauxInteretAvantCalculettes: Array<Business.Modeles.IPalier>;
        constructor(codeTypeAcces: Commun.Enum.CodeTypeAcces, numeroRelatif: number, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, typeAvenant: Commun.Enum.TypeAvenant, codeSousTypeAvenant: Commun.Enum.CodeSousTypeAvenant, dateEffet: Date, dateTraitement: Date, droitModifierEnabled: boolean, listeModificationCreditToIncluded: Array<Commun.Enum.ModificationCredit>, isAvecChangementProduit: boolean, isReloadWithChangementProduit: boolean, caracteristiqueCredit: RestGestion.CaracteristiqueCredit.ICaracteristiqueCredit, eligibiliteChangementProduit: RestAvenantService.EligibiliteChangePdt.IRenegociationProduit, creditChangePdt: RestGestion.InformationCredit.ICredit, renegociationProduits: Array<RestGestion.InformationCredit.IRenegociationProduit>, dataRestAvenant: IDataRestAvenant, compteurMiseJour: number, isProduitClotureChangePdt: boolean, listeAccessoiresAnnexes: Array<RestGestion.InformationCredit.IAccessoire>);
        /**
         * Fournit le crédit initial de l'avenant
         */
        getCreditLoadedByCaraFinan(): RestAvenant.CaracteristiqueFinan.ICredit;
        /**
         * Fournit le crédit avec les données de référence
         */
        getCreditLoadedByInfoCredit(): RestGestion.InformationCredit.ICredit;
        addAssurance(): void;
        setAssuranceEdition(action: Enum.ActionManipulationElement, idAssurance: number): void;
        setListePersonnesAssurable(listePersonneAssurableGarant: Array<IPersonneAssurableGarant>): void;
        addGarantInListPersonnesAssurable(personneAssurableGarant: IPersonneAssurableGarant): void;
        removeGarantInListPersonnesAssurable(personneAssurableGarant: IPersonneAssurableGarant): void;
        changeDateEffetQuantieme(): void;
        getDateEffetRetenue(): Date;
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        beforeSave(): void;
        scissionPhaseAte(phaseEnCours: Modeles.IPhase, newNuep: number, numEchDebPhase: number, numEchFinPhase: number): Modeles.IPhase;
        gestionAte(phaseEnCours: Modeles.IPhase, phasesM: Array<Modeles.IPhase>, resultAte: Modeles.IAte, numeroEcheanceCreditS882: number, numeroEcheanceDebutPhase: number, numeroEcheanceFinPhase: number, numeroPhaseEnCoursS882: number): void;
        addGarantie(): void;
        private getCodeTypeAcces(codeTypeAcces, droitModifierEnabled);
        private getListeAcessoires(liste);
        private getListeAccessoireAnnexe(listeAccessoiresAnnexes);
        addAccessoireAnnexe(accessoireAnnexe: Business.Modeles.IAccessoireAnnexe): void;
        setAccessoireAnnexeEdition(accessoireAnnexe: Business.Modeles.IAccessoireAnnexe, action: Enum.ActionManipulationElement): void;
        private getDataFraisAvenant(codeTypeAcces, listeAccessoiresProduit, listeAccessoiresCredit, isFraisUnique);
        /**
         * Dans le cas de la possibilité de choisir les frais, position d'un élément par défaut si pas de choix en création, ou de celui déjà en place en ouverture
         */
        private getFraisAvenantPositionneDefaut(codeTypeAcces, fraisAvenantPreleve, fraisAvenantIntegreCrd);
        private getNumEcheanceDebutFinPhase(creditOrigine);
        /**
         * Reporte les modifications suite à la modifications de la durée d'un palier
         */
        majDureePalier(palierEdit: IPalier, isModifDureePhase: boolean): void;
        majDureePalierFromPhase(phaseEdit: IPhase): void;
        /**
         * Report des impacts de la modification de la durée totale (sur le dernier palier de la dernière phase)
         */
        reportModificationsDuree(): void;
        /**
         * Permet de reporter la modification de la durée de la phase de DT sur le crédit et les paliers de toutes les phases.
         * @param phaseEdit: sera toujours la phase de différée totale (DT)
         */
        impactModificationDureePhaseDT(phaseEdit: IPhase): void;
        private messageErreurDureePhaseDt(messages, phaseStocks, phaseEdit);
        private getRenegociationProduitFiltre(renegociationProduits, typeAvenant?);
        private getIsEligibleChangementProduit(credit, codeTypeAcces, creditByCaraFinan, renegociationProduits);
        private getNumeroModaliteRA(modalites, creditOrigine);
        private getNumeroModaliteRaOuverture(modalites, creditByCaraFinan);
        changeTauxRA(modalite: RestAvenantParam.Produit.IModalite): void;
        private getTauxRA(modalite, creditOrigine, codeTypeAcces, creditByCaraFinan);
        private getLibelleNouveauProduit(eligibiliteChangePdt, codeTypeAcces, creditByCaraFinan);
        private getAccessoireIntegreCrd(accessoireProduits, accessoires, codeTypeAcces);
        setDataObjetFinanceByObjet(infoObjet: IInfoObjet): void;
        setDataAssurancesByAvenantPersonne(): void;
    }
}

declare module Avenants.Business.Modeles {
    import RestProduit = Rest.Modeles.AvenantCreditParam.Produit;
    import RestCara = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import ModeCalculExhaustif = Commun.Enum.ModeCalculExhaustif;
    /**
     * Frais de dossier d'un avenant
     * Il peut y avoir des conversion selon le taux enregistré
     *  taux actuariel annuel
     *  taux proportionnel annuel
     *  taux équivalent périodique
     */
    class FraisAvenant implements IFraisAvenant {
        libelleTypeAccessoire: string;
        modeCalculExhaustif: ModeCalculExhaustif;
        etatManipulationAccessoire: Enum.EtatManipulation;
        accessoireInitial: RestProduit.IAccessoire;
        indicateurAccessoireValide: string;
        indicAccessoireCreeParAvenant: string;
        indicateurAccessoireAnnuleAv: string;
        isToIntegreCrd: boolean;
        taux: number;
        showTauxConseille: boolean;
        tauxConseille: number;
        showTauxMinimun: boolean;
        tauxMinimum: number;
        showTauxMaximum: boolean;
        tauxMaximum: number;
        listeTauxChoix: Array<number>;
        montant: number;
        montantConseille: number;
        montantMinimum: number;
        montantMaximum: number;
        showMontantPas: boolean;
        montantPas: number;
        listeMontantChoix: Array<number>;
        isTauxEditable: boolean;
        isTauxSelectionnable: boolean;
        isMontantEditable: boolean;
        isMontantSelectionnable: boolean;
        libelleHelpMontant: string;
        /**
         * Cas spécifique pour les frais d'avenant
         * Pour les autres types de frais (assurance, garantie) il faudra factoriser une partie: la conversion et l'unité de période
         * --> pour l'assimiler avec les phases
         * S844: RestAvenant.CaracteristiqueFinan.IPhase, unité
         *      -> unitePeriode  = accessoire.periodiciteApplicationAccess !== "" ? accessoire.periodiciteApplicationAccess : S844.periodiciteCalculInteretsPhase;
         * S887: RestAvenantParam.Produit.IPhase, gestion du calcul pour la conversion
         *      -> accessoire.codeModeCalculTaux !== S887.CDFCTX
         */
        constructor(accessoireProduit: RestProduit.IAccessoire, accessoireExistant: RestCara.IAccessoire);
        isTauxValid(): boolean;
        isMontantValid(): boolean;
        private getListeTauxChoix(a, unitePeriode);
        private getMontant(accessoireProduit, accessoireExistant);
        private getListeMontantChoix(a);
        /**
         * Calcule, convertit, un taux selon son type
         * @param tauxReference : taux à manipuler
         */
        private getTauxCalcule(tauxReference, accessoire, unitePeriode);
        private getTypeTaux(codeModeCalculTaux);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    /**
     * Utilisée pour le chargement de la page avenant
     */
    interface IRetourAvenantDescription {
        avenantDescription: IAvenantDescription;
        listeInformations: Array<string>;
    }
    /**
     * Pour gérer l'enchainement des pages de l'avenant (hors celui de quantième, toujours indépendant)
     */
    interface IAvenantDescriptionBehavior {
        stepAvenant: Enum.StepAvenant;
        isPresenceStepOne: boolean;
        isPresenceStepTwo: boolean;
        isPresenceStepThree: boolean;
        isPresenceNextStep: boolean;
        isPresencePreviousStep: boolean;
        setToNextStep(): void;
        setToPreviousStep(): void;
    }
    /**
     * Attributs communs à tous les avenants, tout en étendant les avenants spécifiques
     */
    interface IAvenantDescription extends IAvenantDescriptionBehavior, IAvenantDetailAssurance, IAvenantDetailPhase, IAvenantFinancier, IAvenantDetailReportFinPret, IAvenantDetailATE, IAvenantDetailGarantie, IAvenantDetailObjet, IAvenantDetailPersonne, IDetailAvenantPeriodicitePhase, IDetailModificationDureePhaseDT, IAvenantDetailServicesObjet {
        codeTypeAcces: Commun.Enum.CodeTypeAcces;
        numero: number;
        codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation;
        typeAvenant: Commun.Enum.TypeAvenant;
        codeSousTypeAvenant: Commun.Enum.CodeSousTypeAvenant;
        compteurMiseJour: number;
        idCredit: string;
        idEmprunteur: string;
        libelleInfosCredit: string;
        devise: string;
        dateEffet: Date;
        dateEffetModifieQuantieme: Date;
        getDateEffetRetenue(): Date;
        dateFinCredit: Date;
        dateFinPrefinancementReelle: Date;
        dateTraitement: Date;
        dateEcheance: Date;
        listeAcccessoires: Array<Rest.Modeles.AvenantCreditParam.Produit.IAccessoire>;
        listeAccessoiresAnnexes: Array<Business.Modeles.IAccessoireAnnexe>;
        listeAccessoiresAte: Array<Rest.Modeles.AvenantCreditParam.Produit.IAccessoire>;
        dataFraisAvenant: IDataFraisAvenant;
        jourFinMoisDateEffet: number;
        isAvenantTauxDuree: boolean;
        isAvenantAssurance: boolean;
        isAvenantGarantie: boolean;
        isAvenantQuantieme: boolean;
        isAvenantReportFinPret: boolean;
        isAvenantAte: boolean;
        isAvenantObjet: boolean;
        isAvenantPersonnes: boolean;
        isAvenantRecouvrement: boolean;
        dataRestAvenant: IDataRestAvenant;
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getCreditLoadedByCaraFinan(): Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan.ICredit;
        getCreditLoadedByInfoCredit(): Rest.Modeles.DossierCreditGestion.InformationCredit.ICredit;
        isCreditWithAjustementEcheances: boolean;
        droitModifierEnabled: boolean;
        isEditionAuthorized: boolean;
        beforeSave(): void;
        getDisabledValider(): boolean;
        changeDateEffetQuantieme(): void;
        addAccessoireAnnexe(accessoireAnnexe: Modeles.IAccessoireAnnexe): void;
        setAccessoireAnnexeEdition(accessoireAnnexe: Business.Modeles.IAccessoireAnnexe, action: Enum.ActionManipulationElement): void;
        numeroEcheance: number;
        alerteAvenant: IAlerteAvenant;
    }
    interface IAvenantDetailAssurance {
        listeAssurancesStock: Array<IAssurance>;
        listeAssurancesAvailables: Array<IAssurance>;
        dataAssurances: IDataAssurances;
        addAssurance(): void;
        setListePersonnesAssurable(listePersonneAssurableGarant: Array<IPersonneAssurableGarant>): void;
        addGarantInListPersonnesAssurable(personneAssurableGarant: IPersonneAssurableGarant): void;
        setAssuranceEdition(action: Enum.ActionManipulationElement, idAssurance: number): void;
    }
    /**
     * Données de manipulation des assurances
     */
    interface IDataAssurances {
        idNouvelleAssurance: number;
        listeCompagnie: Array<ICompagnieApplicable>;
        listeReserveExclusion: Array<IReserveExclusion>;
        listePersonne: Array<IPersonneAssurableGarant>;
    }
    interface IAvenantDetailGarantie {
        isVersementAttenduAjoutable: boolean;
        listeGarantiesStock: Array<IGarantie>;
        listeGarantiesAvailables: Array<IGarantie>;
        dataGaranties: IDataGaranties;
        addGarantie(): void;
    }
    /**
     * Données de manipulation des garanties
     */
    interface IDataGaranties {
        descriptionObjetFinance: Rest.Modeles.DossierCreditAvenant.Garanties.IDescriptionObjetFinance;
        tocObjetFinanceOrigine: ITypeObjetCommercialGarantie;
    }
    interface IAvenantDetailPhase {
        listePhaseStock: Array<IPhase>;
        listePhaseAvailables: Array<IPhase>;
    }
    interface IAvenantFinancier extends IAvenantChangementProduit {
        creditAvenantFinancier: ICreditAvenantFinancier;
        accessoireIntegreCrd: Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan.IAccessoire;
        isAmortissementALaCarte: boolean;
        typeCalculAjustementEcheances: Enum.TypeCalculAjustementEcheancesTaux;
        palierTauxInteretAvantCalculettes: Array<Business.Modeles.IPalier>;
        majDureePalier(palierEdit: IPalier, isModifDureePhase: boolean): void;
        majDureePalierFromPhase(phaseEdit: IPhase): void;
        reportModificationsDuree(): void;
    }
    interface IAvenantChangementProduit {
        renegociationProduits: Array<Rest.Modeles.DossierCreditGestion.InformationCredit.IRenegociationProduit>;
        isEligibleChangementProduit: boolean;
        isAvecChangementProduit: boolean;
        isChangementProduitExistant: boolean;
        libelleNouveauProduit: string;
        eligibiliteRenegociationProduit: Rest.Modeles.AvenantCreditService.EligibiliteChangePdt.IRenegociationProduit;
        creditChangePdt: Rest.Modeles.DossierCreditGestion.InformationCredit.ICredit;
        numeroModaliteRas: Array<Rest.Modeles.AvenantCreditParam.Produit.IModalite>;
        tauxRa: number;
        numeroModaliteRaDefault: Rest.Modeles.AvenantCreditParam.Produit.IModalite;
        changeTauxRA(modalite: Rest.Modeles.AvenantCreditParam.Produit.IModalite): void;
        bornesTauxRa: string;
        palierAbsorbe: boolean;
        numeroPhaseEnCoursCreditOrigine: number;
        numeroPremiereEcheanceLastPalierPhaseO: number;
        reductionMaxCredit: string;
        traitementEcheanceDureeProduit: string;
        motifAllongementDureeProduit: string;
        conditionsDureeProduit: string;
        showVariationDureeProduitForChgtProduit: boolean;
        showVariationDureeProduitForProduitInitial: boolean;
        bornesVariationDureeProduit: string;
        borneMinVariationDureeProduit: number;
        borneMaxVariationDureeProduit: number;
        dureeVariationDureeProduit: number;
        pourcentageAllongementDureeProduit: number;
        cdTypeButoir: string;
        isEditionVariationDureeProduit: boolean;
        isOpenVariationDureeProduit: boolean;
        borneTauxRaMin: number;
        borneTauxRaMax: number;
        showPopinChgtProduit: boolean;
        nouvellePhaseAMSupOrigine: boolean;
        isProduitCloture: boolean;
    }
    interface IAvenantDetailATE {
        gestionAte(phaseEnCours: Modeles.IPhase, phasesM: Array<Modeles.IPhase>, resultAte: Modeles.IAte, numeroEcheanceCreditS882: number, numeroEcheanceDebutPhase: number, numeroEcheanceFinPhase: number, numeroPhaseEnCoursS882: number): void;
        scissionPhaseAte(phaseEnCours: Modeles.IPhase, newNuep: number, numEchDebPhase: number, numEchFinPhase: number): Modeles.IPhase;
        ate: IAte;
        numeroEcheanceDebutPhase: number;
        numeroEcheanceFinPhase: number;
        listeAssurancesAte: Array<Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan.IAssurance>;
    }
    interface IAvenantDetailReportFinPret {
        reportFinPret: IReportFinPret;
    }
    interface IAvenantDetailPersonne {
        emprunteurActuel: IEmprunteurActuel;
        emprunteurNouveau: IEmprunteurNouveau;
        setDataAssurancesByAvenantPersonne(): void;
    }
    interface IAvenantDetailObjet {
        infoObjet: IInfoObjet;
        setDataObjetFinanceByObjet(infoObjet: IInfoObjet): any;
    }
    interface IDataFraisAvenant {
        withChoix: boolean;
        fraisAvenant: IFraisAvenant;
        fraisAvenantPreleve: IFraisAvenant;
        fraisAvenantIntegreCrd: IFraisAvenant;
    }
    interface IFraisAvenant extends IAccessoireEdit {
        libelleTypeAccessoire: string;
        etatManipulationAccessoire: Enum.EtatManipulation;
        modeCalculExhaustif: Commun.Enum.ModeCalculExhaustif;
        libelleHelpMontant: string;
        indicateurAccessoireValide: string;
        indicAccessoireCreeParAvenant: string;
        indicateurAccessoireAnnuleAv: string;
        isToIntegreCrd: boolean;
        accessoireInitial: Rest.Modeles.AvenantCreditParam.Produit.IAccessoire;
    }
    interface IDataRestAvenant {
        creditCaraFinan: RestAvenant.CaracteristiqueFinan.ICredit;
        creditCurrentInfoCredit: RestGestion.InformationCredit.ICredit;
        creditOrigineInfoCredit: RestGestion.InformationCredit.ICredit;
        produitCredit: RestAvenantParam.Produit.IProduit;
        listeIndice: Array<RestAvenantParam.Indice.IObjetIndice>;
        palierCredit: RestGestion.PalierCredit.IPalierCredit;
        dataAssurances: IDataAvenantAssurances;
        dataPersonnes: IDataAvenantPersonnes;
        dataObjet: IDataAvenantObjet;
        dataGaranties: RestAvenant.Garanties.IGaranties;
        dataServicesObjet: IDataForServicesObjet;
    }
    /**
     * Données manipulées par chaque assurance
     */
    interface IDataForAssurance {
        listeConventionAssurance: Array<RestAvenant.CaracteristiqueFinan.IConventionAssurance>;
        listeConventionApplicableObjet: Array<RestAvenant.CaracteristiqueFinan.IConventionApplicableObjet>;
        listeConventionApplicableEmprunteur: Array<RestAvenant.CaracteristiqueFinan.IConventionApplicableEmprunteur>;
        listeEnCoursPersonneConvention: Array<RestAvenant.CaracteristiqueFinan.IEncoursPersonneConvention>;
        listeAccessoireParConvention: Array<RestAvenant.CaracteristiqueFinan.IAccessoireParConvention>;
        listeComposantesVierges: Array<RestAvenant.CaracteristiqueFinan.IComposanteAssurance>;
        listeTypesSinistres: Array<RestGestion.Parametre.IParametreTypeSinistre>;
    }
    /**
     * Données pour construire les données des assurances
     */
    interface IDataAvenantAssurances {
        listePersonnesAssurableOuGarant: Array<RestAvenant.CaracteristiqueFinan.IPersonneAssurableOuGarant>;
        listeMotifsReserveOuExclusion: Array<RestAvenant.CaracteristiqueFinan.IMotifReserveOuExclusion>;
        listeCompagniesAssurance: Array<RestAvenant.CaracteristiqueFinan.ICompagnieAssurance>;
        dataForAssurance: IDataForAssurance;
    }
    /**
     * Données nécéssaires en entrée pour générer toutes les informations personnes
     */
    interface IDataAvenantPersonnes extends IDataEmprunteurAvenantPersonnes {
        emprunteur: RestAvenant.Personnes.IEmprunteur;
        payeurs: Array<RestAvenant.Personnes.IPayeur>;
        categorieEmprunteurs: Array<RestAvenant.Personnes.ICategorieEmprunteur>;
        motifs: Array<RestAvenant.Personnes.IMotif>;
        motifRecouvrements: Array<RestAvenant.Personnes.IMotifRecouvrement>;
    }
    /**
     * Données communes pour l'emprunteur (existant et nouveau)
     */
    interface IDataEmprunteurAvenantPersonnes {
        listePersonneEmprunteurs: Array<RestAvenant.Personnes.IPersonneEmprunteur>;
        listeParticulierInformation: Array<Rest.Modeles.Tiers.ParticulieInformation.IParticulierInformation>;
        listeCorporateInformation: Array<Rest.Modeles.TiersCorporate.CorporateInformation.ICorporateInformation>;
        listePersonneWithComptes: Array<RestAvenant.ListerCompte.IPersonne>;
    }
    /**
     * Données nécéssaires pour recharger les informations d'un emprunteur
     */
    interface IDataNouvelEmprunteurAvenantPersonnes extends IDataEmprunteurAvenantPersonnes {
        nouvelEmprunteur: RestGestion.PersonneEmprunteur.INouvelEmprunteur;
    }
    /**
     * Données nécéssaires en entrée pour générer toutes les informations objet
     */
    interface IDataAvenantObjet {
        typologieInstructions: Array<RestAvenant.InformationObjet.ITypologieInstruction>;
        creditObjet: RestAvenant.InformationObjet.ICreditObjet;
        typeObjetReglementes: Array<RestAvenant.InformationObjet.ITypeObjetReglemente>;
        typeObjetCommercials: Array<RestAvenant.InformationObjet.ITypeObjetCommercial>;
        controleZonePtz: RestAvenantParam.ControleZonePtz.IControleZonePtz;
    }
    interface IDetailAvenantPeriodicitePhase {
        isModificationTauxFirst: boolean;
        isModificationPeriodicitePhaseFirst: boolean;
        isAvenantPeriodicite: boolean;
    }
    interface IDetailModificationDureePhaseDT {
        impactModificationDureePhaseDT(phaseEdit: IPhase): any;
    }
    /**
     * Données manipulées pour les services sur objet
     */
    interface IDataForServicesObjet {
        listeServiceObjet: Array<RestAvenant.ServicesObjet.IServiceObjet>;
        listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>;
    }
    interface IAvenantDetailServicesObjet {
        listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>;
    }
}

declare module Avenants.Business.Modeles {
    import RestCara = Avenants.Rest.Modeles.DossierCreditAvenant.Caracteristique;
    class DossierElectroniqueBuilder {
        static getDossierElectronique(listeHisto: Array<RestCara.IHistoriqueEvenement>, isAvenant: boolean, listePersonnesEmprunteur: Array<IPersonneDesignation>): IDossierElectronique;
        private static getListeAvancementSignatureElectroniquePersonne(listeHistoAllPersonne, isAvenant, listePersonnesEmprunteur);
        private static getAvancementSignatureElectroniquePersonne(listeHistoByPersonne, isAvenant, listePersonnesEmprunteur);
        private static getDateEvent(listeHisto, evenementHistoSED, isAvenant);
        private static getPersonneDesignation(event, listePersonnesEmprunteur);
    }
}

declare module Avenants.Business.Modeles {
    interface IDossierElectronique {
        idIDN: string;
        avancementSignatures: IAvancementSignatureElectroniquePersonne[];
        dateCreationActeIDN: Date;
        dateValidationHierarchie: Date;
        dateRefusHierarchique: Date;
        dateActivationEspaceSignature: Date;
        dateAnnulationCaduqueIDN: Date;
        dateAnomalieTraitementAutomatique: Date;
        numeroCreation: number;
    }
    interface IAvancementSignatureElectroniquePersonne {
        personne: IPersonneDesignation;
        dateRemiseOffre: Date;
        dateAccuseReception: Date;
        dateSignature: Date;
        dateAbandonSignature: Date;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class AvenantResumeBuilder {
        /**
         * Initialisation des informations spécifiques à l'avenant
         * ! certaines informations ne seront pas initialisées ici (celles relatives à la SED qui nécessitent des chargements supplémentaires)
         */
        static getResult(elt: RestAvenant.Recherche.IAvenant | RestAvenant.Recherche.ISimulation, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation, dateTraitement: string, devise: string, listeHabs: Array<RestGestion.HabilitationCredit.IHabilitation>, dataBuild: Modeles.IDataBuildAvenantResume): Modeles.IAvenantResume;
        private static getLibelleSousTypeAvenant(codeSousTypeAvenantRecouvrement);
        /**
         * Etat de l'avenant, cas particulier lorsque l'on est dans le processus SED (entre l’édition et la signature finale)
         */
        private static getLibelleEtatSimulAvenant(isAvenant, elt, processSedIsLaunched, listeHisto);
        private static getBtnRefusEnabled(isTypeAvenant, elt, listeHabs);
        private static getMotifAnnulation(isTypeAvenant, codeModifAnnulationModification, listeRefus);
        /**
         * Etre habilité en consultation
         * L'avenant ne doit pas ni annulé ni pris en compte
         * ! Attention, retrait de la condition avec l'obligation de la saisi en poste de travail (elt.codeOrigineCreditDossier), car elle peut prendre plusieurs valeurs
         */
        private static getDroitConsulter(dateTraitement, elt, isTypeAvenant, listeHabs);
        /**
         * être habilité à la simulation d'un avenant
         * et que l'état de la simulation de l'avenant soit différent de 'pris en compte' ou 'annulé'
         */
        private static getDroitContractualiser(etatDecision, listeHabs, codeTypeAvenant, isTypeAvenant);
        /**
         * être habilité en consultation
         * et que l'avenant soit signé, non annulé et qu'il est pris effet
         */
        private static getDroitHistorique(dateTraitement, elt, isTypeAvenant, listeHabs);
        /**
         * une habilitation en MAJ ou plus
         *      ->  que l'avenant ne soit ni signé ni annulé ni édité (mais peut être émis)
         *          (et ne doit pas être un avenant de transformation d'hypothèque)
         *      ->  que la simulation ne doit pas être ni signée ni annulée ni éditée (mais peut être émise)
         */
        private static getDroitModifier(dateTraitement, elt, isTypeAvenant, listeHabs);
        /**
         * Pour dupliquer une simulation, il faut en plus des droits de modification que la simulation soit valide (mais elle peut avoir été éditée)
         */
        private static getDroitDupliquerSimulation(dateTraitement, simulation, listeHabs);
        /**
         * Droits et données communs nécessiares pour modifier un avenant ou modifier/dupliquer une simulation
         */
        private static getDroitActionAvenantSimulation(dateTraitement, elt, listeHabs, isTypeAvenant);
        /**
         * Indique si les habilitations sont réspéctées selon le niveau requis
         * Cas particulier pour l'historique, le reste des actions ayant besoin des 3
         */
        private static getIsHabilite(elt, isTypeAvenant, listeHabs, minLevelRequired, actionHistorique);
        /**
         * Fournit l'habilitation en lien avec le type de l'avenant / simulation
         */
        private static getHabilitationByTypeAvenant(codeTypeAvenant, isTypeAvenant, listeHabilitation);
        private static getHabilitationByDate(dateEffet, dateCreation, listeHabilitation);
        private static getHabilitation(listeHabilitation, code);
        private static getIsChronologic(dateTraitement, dateCreation, dateEffet, dateSaisieLEvenement);
        private static getDateSaisieRetro(elt);
        /**
         * La date de création doit être inférieure à la date du dernier évenement
         */
        private static getIsSaisieRetroactive(dateSaisieLEvenement, dateCreation);
        private static getHabilitationSignatureElectronique(listeHabs);
        private static getListePersonneSignataire(listePersonneSignataireAvenant, numRelatif);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import EnumModificationCredit = Avenants.Commun.Enum.ModificationCredit;
    class AvenantResumeHelper {
        static getTypeAvenant(isTypeAvenant: boolean, codeTypeAvenant: string): Commun.Enum.TypeAvenant;
        static getLibelleTypeAvenant(typeAvenant: Commun.Enum.TypeAvenant): string;
        /**
         * Indique si l'élément est manipulé dans l'applicatif myway
         */
        static getIsOrigineMyway(codeOrigineCreditDossier: string): boolean;
        static getEtatDecision(libelleEtatSimulAvenant: string): Enum.EtatDecision;
        static getProcessSedIsLaunched(isTypeAvenant: boolean, codeIndicSignrElect: string): boolean;
        /**
         * Libellé principal pour la modification du crédit
         * @param elt
         * @param liste : initialisé en amont pour savoir ce qui est impacté par l'élément
         */
        static getLibelleTypeModification(elt: RestAvenant.Recherche.IAvenant | RestAvenant.Recherche.ISimulation, liste: Array<EnumModificationCredit>): string;
        /**
         * Informations des modifications de crédit pour l'avenant
         * @param alwaysDisplay: si true, alors il faut toujours afficher l'info
         */
        static getLibelleDescriptionModificationCredit(listeModification: Array<EnumModificationCredit>, alwaysDisplay: boolean): string;
        /**
         * Indique si le crédit est révisable, attention l'attribut CIFATR ne possède pas un nom uniformisé
         */
        static getIsCreditRevisable(isTypeAvenant: boolean, elt: RestAvenant.Recherche.IAvenant | RestAvenant.Recherche.ISimulation): boolean;
    }
}

declare module Avenants.Business.Modeles {
    class AvenantResumeWithSedBuilder {
        /**
         * Ajout des informations relatifs à la SED qui sont chargées après l'initialisation de l'avenant
         */
        static getResult(ar: Modeles.IAvenantResume, dataForSED: Modeles.IDataSedBuildAvenantResume): Modeles.IAvenantResume;
        private static getStatutCompatibiliteProcessSed(ar, isTypeAvenant, dataForSED);
        private static getSimulationNonAssurance(isTypeAvenant, listeModificationCredit);
        /**
         *
         * @param listeHisto : liste des évènements de la table histo(FH01) du crédit propres à l'élément
         * @param elt : objet Avenant ou Simulation pour lequel on veut l'avancement de la sign@
         * @param isAvenant : indique si l'objet elt est un avenant
         * @param listePersonnesEmprunteur : liste des personnes qui ont le rôle d'emprunteur sur le crédit (utilisé pour récupérer les libellés des personnes)
         */
        private static getListeDossierElectronique(listeHisto, elt, isAvenant, listePersonnesEmprunteur);
        /**
         * Affiche l'état de la sign@
         */
        private static getLibelleAvancementSed(isAvenant, listeDossierElectronique, simulation);
        private static getLibelleAvancementSedForAvenant(listeDossierElectronique);
        private static getLibelleAvancementSedForSimulation(codeIndicSignrElect);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Rest.Modeles.DossierCreditAvenant;
    import RestAvenantRecherche = Rest.Modeles.DossierCreditAvenant.Recherche;
    /**
     * Utilisée pour le chargement de la page avenant
     */
    interface IRetourListeAvenantResume {
        listeAvenants: Array<IAvenantResume>;
        listeInformations: Array<string>;
    }
    /**
     * Eléments nécessaires à la construction de l'avenant
     */
    interface IDataBuildAvenantResume {
        credit: RestAvenantRecherche.ICredit;
        listeRefus: Array<RestAvenantRecherche.IRefus>;
        listeDocs: Array<RestAvenantRecherche.IDocumentEdition>;
        listeAnnexes: Array<RestAvenantRecherche.ISignatureAnnexe>;
        listePersonneSignataireAvenant: Array<RestAvenantRecherche.IPersonneSignataireAvenant>;
        listeHisto: Array<RestAvenant.Caracteristique.IHistoriqueEvenement>;
        isEtablissementEligibleSed: boolean;
    }
    /**
     * Eléments nécessaires à la construction de l'avenant pour les parties SED
     */
    interface IDataSedBuildAvenantResume {
        dossierNonEditeNonAnnuleNonSigne: boolean;
        eligibiliteSed: IEligibiliteSignatureElectronique;
        listePersonnesEmprunteur: Array<Modeles.IPersonneDesignation>;
        listeMotifsNonEligibiliteSed: Array<string>;
    }
    interface IAvenantResume {
        type: Commun.Enum.TypeAvenant;
        libelleType: string;
        codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation;
        listeModificationCredit: Array<Commun.Enum.ModificationCredit>;
        isOrigineMyway: boolean;
        numero: number;
        numeroRenegociationSimulation: number;
        idCredit: string;
        devise: string;
        typeModif: string;
        typeModifDetail: string;
        dateDerniereEdition: Date;
        dateSignature: Date;
        dateEffet: Date;
        dateCreation: Date;
        dateEditionOffre: Date;
        dateReceptionOffreClient: Date;
        isSaisieRetroactive: boolean;
        dateSaisieRetroactive: Date;
        libelleEtatSimulAvenant: string;
        montantFraisGestion: number;
        identifiantAgentDelegateur: string;
        dateAnnulation: Date;
        motifAnnulation: string;
        droitConsulterEnabled: boolean;
        droitModifierEnabled: boolean;
        btnOuvrirEnabled: boolean;
        btnHistoriqueEnabled: boolean;
        btnDupliquerSimulationEnabled: boolean;
        btnRefusEnabled: boolean;
        btnContractualiserEnabled: boolean;
        etatDecision: Enum.EtatDecision;
        compteurMiseJour: number;
        dateLimiteValidite: Date;
        dateMinimumAcceptation: Date;
        listePersonneSignataire: Array<IPersonneSignataire>;
        idEmprunteur: string;
        agentHasHabilitationSed: boolean;
        isEtablissementEligibleSed: boolean;
        eligibiliteSed: IEligibiliteSignatureElectronique;
        processSedIsLaunched: boolean;
        statutCompatibiliteProcessSed: string;
        libelleAvancementSed: string;
        listeMotifsNonEligibiliteSed: Array<string>;
        nombreMotifsNonEligibiliteSed: number;
        listeDossierIdn: Array<IDossierElectronique>;
        listeHisto: Array<RestAvenant.Caracteristique.IHistoriqueEvenement>;
        listeRefus: Array<RestAvenantRecherche.IRefus>;
        isAvenantQuantieme: boolean;
        avenant: RestAvenantRecherche.IAvenant;
        simulation: RestAvenantRecherche.ISimulation;
        documentsEdition: RestAvenantRecherche.IDocumentEdition[];
        signaturesAnnexes: RestAvenantRecherche.ISignatureAnnexe[];
        libelleSousType: string;
        isCreditRevisable: boolean;
    }
    interface IPersonneSignataire {
        idPersonne: string;
        intitulePersonne: string;
        acceptsElecSignature: boolean;
        etatAcceptsElecSignature: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import EnumModificationCredit = Commun.Enum.ModificationCredit;
    class ModificationCreditHelper {
        /**
         * Construction de la liste pour gérer les avenants nsdk, myway et myway avant l'évolution du cdfaor (20.05)
         */
        static getListeModificationCredit(elt: RestAvenant.Recherche.IAvenant | RestAvenant.Recherche.ISimulation): Array<EnumModificationCredit>;
        /**
         * Construction de la liste pour gérer les avenants myway (post évolution cdfaor: 20.05)
         */
        static getListeModificationCreditNouvelleVersion(codeModif: string, codeOrigine: string): Array<EnumModificationCredit>;
        static getListeModificationCreditChangementProduit(codeOrigine: string): Array<EnumModificationCredit>;
        static getListeModificationCreditAte(codeOrigine: string): Array<EnumModificationCredit>;
        static getListeModificationCreditReportFinPret(codeOrigine: string): Array<EnumModificationCredit>;
        static getListeModificationCreditCaraFinancieres(codeOrigine: string): Array<EnumModificationCredit>;
        /**
         * Génération de la liste pour les avenants dans le cadre de l'ancien format
         * Ou alors des avenants sans modification supplémentaire ou inconnue
         */
        static getListeModificationCreditAncienneVersionOrSimple(codeModif: string, codeOrigine: string, etatBranchePersonne: string, etatBrancheObjet: string): Array<EnumModificationCredit>;
        static getListeModificationCreditAncienneVersionOrSimpleByModificationCredit(codeModif: string, codeOrigine: string): Array<EnumModificationCredit>;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Rest.Modeles.DossierCreditAvenant;
    class CaracteristiqueBuilder {
        /**
         * Cas particulier pour l'avenant associé à l'édition (suite à l'action "Valider" dans la contractualisation de l'avenant)
         *  Si c'est uniquement pour l'édition, cela n'est pas nécéssaire de founir l'avenant
         */
        static getAvenantForContractualiserAvenant(a: RestAvenant.Recherche.IAvenant, forcerAppel: boolean, contractualisationAction: Enum.ContractualisationAction, buildAvenantRefusParams?: IBuildAvenantRefus, buildAvenantContractualisationParams?: IBuildAvenantContractualisation): RestAvenant.Caracteristique.IAvenant;
        /**
         * Généraion de l'objet avenant dans le cadre de la contractualisation
         */
        static getAvenant(a: RestAvenant.Recherche.IAvenant, forcerAppel: boolean, contractualisationAction: Enum.ContractualisationAction, buildAvenantRefusParams?: IBuildAvenantRefus, buildAvenantContractualisationParams?: IBuildAvenantContractualisation): RestAvenant.Caracteristique.IAvenant;
        private static getAvenantCodeActionPourMiseAJour(a, contractualisationAction, estAccordEtablissement, estAccordClient, typeRefus);
        private static getAvenantCodeModifAnnulationModification(a, contractualisationAction, typeRefus);
        /**
         * Cas particulier pour la simulation associée à l'édition (suite à l'action "Valider" dans la contractualisation de la simulation)
         *  Si l'accord établissement n'est pas renseigné, il faut envoyer la simulation
         *  Si c'est uniquement pour l'édition, cela n'est pas nécéssaire
         */
        static getSimulationForContractualiserSimulation(s: RestAvenant.Recherche.ISimulation, forcerAppel: boolean, contractualisationAction: Enum.ContractualisationAction, buildSimulationRefusParams?: IBuildSimulationRefus, buildSimulationContractualisationParams?: IBuildSimulationContractualisation): RestAvenant.Caracteristique.ISimulation;
        /**
         * Généraion de l'objet simulation dans le cadre de la contractualisation
         */
        static getSimulation(s: RestAvenant.Recherche.ISimulation, forcerAppel: boolean, contractualisationAction: Enum.ContractualisationAction, buildSimulationRefusParams?: IBuildSimulationRefus, buildSimulationContractualisationParams?: IBuildSimulationContractualisation): RestAvenant.Caracteristique.ISimulation;
        private static getSimulationCodeModifAnnulationModification(s, contractualisationAction);
        private static getSimulationCodeActionPourMiseAJour(s, contractualisationAction);
        static getPersonneSignataireAvenant(codeEtablissement: string, idCredit: string, numero: number, ps: Modeles.IPersonneSignataire): RestAvenant.Caracteristique.IPersonneSignataireAvenant;
    }
}

declare module Avenants.Business.Modeles {
    import RestEligibilite = Avenants.Rest.Modeles.AvenantCreditParam.Eligibilite;
    import RestImpressionDossier = Avenants.Rest.Modeles.AvenantCreditService.ImpressionDossier;
    /**
     * Attention, un document peut avoir plusieurs correspondance
     * -> visuellement on demande un document
     * -> dans la cinématique ce document peut générer 2 flux
     * ex: offre avenant -> offre preteur + offre emprunteur
     */
    class DocumentIndus implements IDocumentIndus {
        libelle: string;
        libellePieco: string;
        listeInfosFlux: Array<IDocumentIndusInfosFlux>;
        filesInput: Array<File>;
        isChargeOnGde: boolean;
        file: File;
        constructor(listeLibelleRelatifDocument: Array<RestEligibilite.ILibelleRelatifDocument>, listeDataDocumentIndus: Array<IDataDocumentIndus>, listeDocGde: Array<RestImpressionDossier.IDocument>);
        supprimerDoc(): void;
        private geLibellePieco(dataDocumentIndus);
        /**
         * Indique le libellé pieco avec son extension
         */
        private geLibellePiecoOrigin(dataDocumentIndus);
        private getDocumentIndusInfosFlux(dataDocumentIndus);
        private getType(dataDocumentIndus);
        /**
         * Pour un document généré, il fuat splité une donnée et fournir le champ après #
         * On vérifie ici que la donnée est correctement paramètrée
         * @param zoneBanaliseeAlphanumLongueur4: RestEligibilite.IInfoGenerique pour compteurInformationsGeneriques === 1
         */
        private getLibelleDocGenere(zoneBanaliseeAlphanumLongueur4);
        private getLibelleDocForFlux(dataDocumentIndus);
        private getLibelleDoc(dataDocumentIndus);
        private getExemplaire(codeTheme);
    }
    class DocumentIndusHelper {
        /**
         * Retrait de l'extension du fichier
         */
        static getLibelleDocWithoutExtension(libelleLong: string): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestEligibilite = Avenants.Rest.Modeles.AvenantCreditParam.Eligibilite;
    import RestImpressionDossier = Avenants.Rest.Modeles.AvenantCreditService.ImpressionDossier;
    class DocumentPiecoBulder {
        static getResult(listeInfoGeneriques: Array<RestEligibilite.IInfoGenerique>, objetLibelle: RestEligibilite.ILibelleRelatifDocument, listeDocGde: Array<RestImpressionDossier.IDocument>, isSed?: boolean): IDocumentPieco;
        /**
         * Pour l'édition Indus, cet élémént doit-il être checked par défaut au chargement ?
         */
        private static getIsChecked(referenceDoc, listeDocGde);
    }
    class DocumentPiecoBulderHelper {
        static getCodeTypeDocument(listeDocs: Array<RestEligibilite.IInfoGenerique>): string;
        static getValueByCode(codeTypeZoneAlpha: string, codeComplet: string, isReference: boolean): string;
        /**
         * Indique si le dossier existe dans GDE
         * @param listeInfosFlux: type du document traité
         * @param listeDocGde: liste de tous les documents attendus dans GDE avec leur état (si le dossier existe)
         */
        static getIsChargeOnGde(typeDoc: string, listeDocGde: Array<RestImpressionDossier.IDocument>): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestEligibilite = Avenants.Rest.Modeles.AvenantCreditParam.Eligibilite;
    import RestImpressionDossier = Avenants.Rest.Modeles.AvenantCreditService.ImpressionDossier;
    class EditionIndustrielle implements IEditionIndustrielle {
        isEligible: boolean;
        typeEditionPieco: Commun.Enum.TypeEditionPieco;
        listeDocuments: Array<IDocumentPieco>;
        listeDocumentsToEnvoi: Array<IDocumentIndus>;
        listeFlyers: Array<IDocument>;
        isGDEPresent: boolean;
        constructor(typeEditionPieco: Commun.Enum.TypeEditionPieco, dossierGDE: RestImpressionDossier.IDossier, eligibilite: RestEligibilite.IEligibilite, isAvenantAte: boolean);
        private getFlyer(doc);
        getListeDocumentPIECO(eligibilite: RestEligibilite.IEligibilite, listeDocGde: Array<RestImpressionDossier.IDocument>, isAvenantAte: boolean): Array<IDocumentPieco>;
        /**
         * Liste de documents disponibles pour envoi unitaire dans GDE
         */
        private getListeDocumentIndus(eligibilite, listeDocGde, isAvenantAte);
        private getDataDocumentIndus(segmentPrincipal, listeInfoGenerique);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantImprDossier = Rest.Modeles.AvenantCreditService.ImpressionDossier;
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    class ImpressionDossierBuilder {
        static getCodeAgentStatic(idAgent: string): string;
        /**
         * Génération des entrées pour l'appel POST CreationDossier
         */
        static getCreationDossier(listeDataDocumentIndus: Array<IDataDocumentIndus>, avenantResume: Modeles.IAvenantResume, credit: RestCaraFinan.ICredit, codeEtablissement: string, agentCreateur: string, isExisteParamsStandard: boolean): RestAvenantImprDossier.ICreationDossier;
        /**
         * Attention de bien trier les documents car l'ordre est important
         */
        private static getListeDocumentImprime(listeDataDocumentIndus, codeEtablissement, avenantResume, codeTypeLoi);
        /**
         * Liste de documents à envoyer pour la création de l'enveloppe dans GDE
         */
        private static getListeSegments(listeDataDocumentIndus);
        /**
         * Filte la liste des segments puis la tri dans l'ordre croissant
         */
        private static getListeSegmentsByThemeSorted(listeDataDocumentIndus, codeTheme);
        private static getDocumentImprime(dataDocumentIndus, codeEtablissement, identifiantCredit, numeroAvenant, nbrEmprunteur, codeTypeLoi);
        private static getLibelleDocumentCree(dataDocumentIndus, zoneAlpha);
        /**
         * Retrait de l'extension du fichier
         */
        private static getLibelleDocWithoutExtension(libelleLong);
        private static getCaracteristiquesDocuments(codeEtablissement, idCredit, numAvenant, nbrEmprunteur, libelleAVT, origine, codeTheme, codeTypeLoi);
        private static getDataMatrixNeo(codeEtablissement, idCredit, numAvenant, nbrEmprunteur, codeTheme, codeTypeLoi);
        private static getTypeLoi(codeTypeLoi);
    }
}

declare module Avenants.Business.Modeles {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenant = Rest.Modeles.DossierCreditAvenant;
    class DataJustificatifBuilder {
        static habilitationJustificatif: string;
        static getResult(listeHabs: Array<RestGestion.HabilitationCredit.IHabilitation>, listeGarantiesApplicables: Array<RestAvenant.CaracteristiqueFinan.IGarantieApplicable>, listeGarantieExistante: Array<RestAvenant.CaracteristiqueFinan.IGarantieExistante>, listeGarantieSuretePerso: Array<RestAvenant.CaracteristiqueFinan.IGarantieSuretePerso>, listeAssurance: Array<RestAvenant.CaracteristiqueFinan.IAssurance>): IDataJustificatif;
        /**
         * Le bloc doit s'afficher pour un avenant (si on est dans ce builder c'est un avenant)
         * Et habiitation particulière
         */
        private static getShowBlocJustificatifGarantie(listeGarantieResume, listeHabs);
        private static getListeGarantieResume(listeGarantiesApplicables, listeGarantieExistante, listeGarantieSuretePerso);
        /**
         * Pour l'instant, ce bloc ne s'affiche jamais. (on garde le code pour debogage)
         *
         * Le bloc doit s'afficher pour un avenant (si on est dans ce builder c'est un avenant)
         * Et habilitation particulière
         */
        private static getShowBlocJustificatifAssurance(listeAssuranceResume, listeHabs);
        private static getListeAssuranceResume(listeAssurance);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Données de la contractualisation concernant les justificatifs
     */
    interface IDataJustificatif {
        showBlocJustificatif: boolean;
        showBlocJustificatifGarantie: boolean;
        listeGarantieResume: Array<IGarantieResume>;
        showBlocJustificatifAssurance: boolean;
        listeAssuranceResume: Array<IAssuranceResume>;
    }
    /**
     * Objet de retour suite à la validation de la popin
     */
    interface ISuppressionJustificatif {
        suppressionPossible: boolean;
        forcageAttendu: boolean;
        messageForcage: string;
    }
}

declare module Avenants.Business.Modeles {
    class EligibiliteSignatureElectronique implements IEligibiliteSignatureElectronique {
        private _isAvenant;
        private _processSedIsLaunched;
        isAgentHabilite: boolean;
        isEtablissementEligible: boolean;
        isEmprunteurHabilite: boolean;
        isDossierPiecoEligible: boolean;
        isAvenantAbandonedElecSignature: boolean;
        isAvenantWithGarantiesEligibles: boolean;
        isRefusEmprunteur: boolean;
        isAvenantWithTraceEligibilite: boolean;
        constructor(processSedIsLaunched: boolean, avenantResume: Modeles.IAvenantResume, pIsEmprunteurHabiliteSed: boolean, pIsDossierPiecoEligible: boolean, pIsAvenantWithGarantiesEligibles: boolean);
        getIsEligible(): boolean;
        getMessageEligibilite(): string;
    }
}

declare module Avenants.Business.Modeles {
    interface ISignatureElectronique {
        dataEligibilite: IEligibiliteSignatureElectronique;
        listeDocuments: Array<IDocumentPieco>;
        showLineActions: boolean;
        showBtnGenerer: boolean;
        showBtnAnnuler: boolean;
        showBtnVoirDocument: boolean;
        showBtnGererEmprunteur: boolean;
        labelBtnGererEmprunteur: string;
        classBtnGererEmprunteur: string;
        libelleBtnVoirDocument: string;
        listePersonneSignataire: Array<IPersonneSignataire>;
        listeRefus: Array<IMotifRefus>;
        isMajSynchroKo: boolean;
        dateReceptionElectronique: Date;
        dateSignatureElectronique: Date;
    }
    interface IEligibiliteSignatureElectronique {
        isAgentHabilite: boolean;
        isEtablissementEligible: boolean;
        isEmprunteurHabilite: boolean;
        isDossierPiecoEligible: boolean;
        isAvenantAbandonedElecSignature: boolean;
        isAvenantWithTraceEligibilite: boolean;
        isAvenantWithGarantiesEligibles: boolean;
        isRefusEmprunteur: boolean;
        getIsEligible(): boolean;
        getMessageEligibilite(): string;
    }
    interface IMotifRefus {
        codeEntite: string;
        typeCodeMotif: string;
        libelleLongMotif: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class SignatureElectroniqueHelper {
        /**
         * Regroupe la liste des événements propres à l'élément
         */
        static getListeHistoByElement(listeHisto: Array<RestAvenant.Caracteristique.IHistoriqueEvenement>, isTypeAvenant: boolean, elt: RestAvenant.Recherche.IAvenant | RestAvenant.Recherche.ISimulation): Array<RestAvenant.Caracteristique.IHistoriqueEvenement>;
        /**
         * Regroupement des événements historique propres à l'élément courant
         * @param listeHisto: liste propre à l'élément
         * @param onlyOrWithoutEventTopEligibilie : true: uniquement les events éligibilité / false: tous sauf ceux la
         */
        static getListeHistoFiltree(listeHisto: Array<RestAvenant.Caracteristique.IHistoriqueEvenement>, onlyOrWithoutEventTopEligibilie: boolean): Array<RestAvenant.Caracteristique.IHistoriqueEvenement>;
        /**
         *
         * @param listeHisto liste contenant les évènements histo (FH01) de ce dossier (avenant ou simulation)
         * @param isAvenant true si avenant, false si simulation
         * @param typeEvenement le type de l'évènement recherché (cf. Enum.EvenementHistoSED)
         * @returns le commentaire de l'évènement si trouvé. Une chaine vide sinon.
         */
        static getCommentaireEvenement(listeHisto: Array<RestAvenant.Caracteristique.IHistoriqueEvenement>, isAvenant: boolean, typeEvenement: Enum.EvenementHistoSED): string;
        /**
         *
         * @param typeEvenement le type de l'évènement recherché (cf. Enum.EvenementHistoSED)
         * @param isAvenant true si avenant, false si simulation
         * @returns le code dans la table histo de cet évènement
         */
        static getEvenementHisto(typeEvenement: Enum.EvenementHistoSED, isAvenant: boolean): string;
        static getCodeOrigineHistoriqueEvenementSignatureElectronique(isAvenant: boolean): string;
        static getIdentifiantHistoSimulation(s: RestAvenant.Recherche.ISimulation): number;
        static hasEvenement(listeHisto: Array<RestAvenant.Caracteristique.IHistoriqueEvenement>, isAvenant: boolean, typeEvenement: Enum.EvenementHistoSED): boolean;
        /**
         *
         * @param listeHisto liste contenant les évènements histo (FH01) de ce dossier (avenant ou simulation)
         * @param isAvenant true si avenant, false si simulation
         * @param typeEvenement le type de l'évènement recherché (cf. Enum.EvenementHistoSED)
         * @returns la date de l'évènement si trouvé. Une chaine vide sinon.
         */
        static getLibelleDateEvenement(listeHisto: Array<RestAvenant.Caracteristique.IHistoriqueEvenement>, isAvenant: boolean, typeEvenement: Enum.EvenementHistoSED): string;
        /**
         * L'avenant a-t-il abandonné la signature électroniquement
         */
        static getAvenantAbandonedElecSignature(avenantResume: Modeles.IAvenantResume): boolean;
        /**
         * Edition SED existante, éligible et active
         */
        static isEditionSedActive(avenantResume: IAvenantResume): boolean;
    }
}

declare module Avenants.Business.Modeles {
    class SignatureElectronique implements ISignatureElectronique {
        dataEligibilite: IEligibiliteSignatureElectronique;
        listeDocuments: Array<IDocumentPieco>;
        showBtnGenerer: boolean;
        showBtnAnnuler: boolean;
        showBtnVoirDocument: boolean;
        showBtnGererEmprunteur: boolean;
        labelBtnGererEmprunteur: string;
        classBtnGererEmprunteur: string;
        libelleBtnVoirDocument: string;
        listePersonneSignataire: Array<IPersonneSignataire>;
        listeRefus: Array<IMotifRefus>;
        isMajSynchroKo: boolean;
        dateReceptionElectronique: Date;
        dateSignatureElectronique: Date;
        showLineActions: boolean;
        constructor(avenantResume: IAvenantResume, listePersonneEmprunteur: Array<IPersonneDesignation>, listeDocs: Array<IDocumentPieco>);
        private getLibelleBtnVoirDocument(isEligibleSed, ar, listeHistoriqueEvnts);
        /**
         * Génération possible si éligible et SED non lancé sur l'avenant
         * Bouton visible pour retenter la génération  (sans passer apr la validation) car il y a eu un soucis sur la fois d'avant
         */
        private getShowBtnGenerer(isEligibleSed, ar, listePersonneSignataire);
        private getShowBtnAnnuler(isEligibleSed, ar);
        private getListePersonne(listePersonneEmprunteur, listeSignataireAvenant);
        private getMotifsAnnulation(liste);
        private getLabelBtnGererEmprunteur(eligibleSed, isAvenant);
        private getClassBtnGererEmprunteur(eligibleSed, isAvenant);
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    class Garantie implements IGarantie {
        private _dateTraitement;
        private _dateEffet;
        private _creditCurrent;
        private _devise;
        private _codeTypeAcces;
        private _garantieAppliquee;
        private _descriptionObjetFinance;
        private _listeGarant;
        private _listeParamModaliteMotifEstimation;
        private _listeMotifsEstimation;
        private _listeTypologiesInstruction;
        private _tocObjetFinanceOrigine;
        private _libelleHelpMontantFrais;
        private _listeVersementAttendusGarantie;
        private _isVersementAttenduAjoutable;
        etatManipulation: Enum.EtatManipulation;
        idGarantie: string;
        idIhmNouvelleGarantie: number;
        isCreationFirstEdition: boolean;
        titre: string;
        typeDeSurete: string;
        statut: string;
        isGarantieSureteReelleAutre: boolean;
        garantieSureteReelleAutre: IGarantieSureteReelle;
        isGarantieSuretePersonnelle: boolean;
        garantieSuretePersonnelle: IGarantieSuretePersonnelle;
        formeContratGarantie: Enum.FormeContratGarantie;
        redacteurActe: IRedacteurActe;
        showMontantFrais: boolean;
        montantFrais: number;
        isFraisRequired: boolean;
        libelleHelpMontantFrais: string;
        isAvenantPeriodicite: boolean;
        isPhaseEnCoursPeriodiciteScinde: boolean;
        /**
         * Montant à afficher en synthèse
         */
        montantAffecteAuCredit: number;
        isFormeContratGarantieEditable: boolean;
        codeAncienneteAssuranceGarantie: string;
        codeTypeAcces: string;
        garantieAppliquee: IGarantieApplicable;
        constructor(dateTraitement: Date, dateEffet: Date, codeTypeAcces: Commun.Enum.CodeTypeAcces, tocObjetFinanceOrigine: ITypeObjetCommercialGarantie, creditCurrentInfoCredit: RestInfoCredit.ICredit, descriptionObjetFinance: RestGaranties.IDescriptionObjetFinance, listeParamModaliteMotifEstimation: Array<RestGaranties.IParamModaliteMotifEstimation>, listeMotifsEstimation: Array<RestGaranties.IMotifEstimation>, listeTypologiesInstruction: Array<RestGaranties.ITypologieInstruction>, idNouvelleGarantie: number, g: RestGaranties.IGarantieExistante, garantieApplicable: IGarantieApplicable, listeGarant: Array<IPersonneAssurableGarant>, isVersementsAttendusToAjoutable: boolean, isAvenantPeriodicite: boolean, isPhaseEnCoursPeriodiciteScinde: boolean, listeGarantieSureteReelle?: Array<RestGaranties.IGarantieSureteReelle>, listeGarantieSuretePerso?: Array<RestGaranties.IGarantieSuretePerso>, listeVersementAttendusGarantie?: Array<RestGaranties.IVersementAttendusGarantie>, listeElementCalculGarantie?: Array<RestGaranties.IElementCalculGarantie>);
        /**
         * Suite à la validation de la garantie, il y a des ajustements à effectuer
         */
        validerData(): void;
        isValid(): boolean;
        private getLibelleSurete(codeTypeSurete);
        private getFormeContratGarantie(codeActeAuthentiqueNatureGarantie);
        private getRedacteurActe(g);
        private getGarantieSureteReelleAutre(garantieApplicable, g, garantieSureteReelle, descriptionObjetFinance, listeParamModaliteMotifEstimation, listeMotifsEstimation, listeTypologiesInstruction, tocObjetFinance, listeGarant, dateTraitement, codeTypeAcces, montantActualiseCreditOrigine, listeVersementAttendusGarantie, isVersementsAttendusToAjoutable);
        private getGarantieSuretePersonnelle(g, garantieSuretePerso, garantieApplicable, listeGarant, listeElementCalculGarantie, creditOrigine, devise, dateEffet, isAvenantPeriodicite, isPhaseEnCoursPeriodiciteScinde);
        private resetDataGarantie();
        /**
         * Report des impacts suite à la modification de la garantie
         */
        private setGarantieAppliquee(g);
        private setDataFrais(garantieApplicable, listeElementCalculGarantie?);
        private setLibelleHelpMontantFrais(f);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Objet pour gérer une garantie dans son ensemble (utilisé dans le cadre d'un avenant de garanties)
     */
    interface IGarantie {
        etatManipulation: Enum.EtatManipulation;
        idGarantie: string;
        idIhmNouvelleGarantie: number;
        isCreationFirstEdition: boolean;
        titre: string;
        typeDeSurete: string;
        garantieAppliquee: IGarantieApplicable;
        statut: string;
        isGarantieSureteReelleAutre: boolean;
        garantieSureteReelleAutre: IGarantieSureteReelle;
        isGarantieSuretePersonnelle: boolean;
        garantieSuretePersonnelle: IGarantieSuretePersonnelle;
        formeContratGarantie: Enum.FormeContratGarantie;
        redacteurActe: IRedacteurActe;
        montantAffecteAuCredit: number;
        showMontantFrais: boolean;
        montantFrais: number;
        isFraisRequired: boolean;
        libelleHelpMontantFrais: string;
        isFormeContratGarantieEditable: boolean;
        codeAncienneteAssuranceGarantie: string;
        codeTypeAcces: string;
        validerData(): void;
        isValid(): boolean;
        isAvenantPeriodicite: boolean;
        isPhaseEnCoursPeriodiciteScinde: boolean;
    }
    interface IRedacteurActe {
        idPersonne: string;
        libelleTiers: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Rest.Modeles.DossierCreditAvenant;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class GarantieResumeBuilder {
        /**
         * Initialisation de la garantie pour la contractualisation
         */
        static getGarantieResume(garantieExistante: RestAvenant.CaracteristiqueFinan.IGarantieExistante, garantieSuretePerso: RestAvenant.CaracteristiqueFinan.IGarantieSuretePerso, listeGarantiesApplicables: Array<RestAvenant.CaracteristiqueFinan.IGarantieApplicable>): IGarantieResume;
        private static getLibelleDescription(garantieExistante, listeGarantiesApplicables);
        /**
         * Enrichissement ou mise à jour de des données de la garantie, suite au chargement des données concernant les justificatifs
         */
        static getGarantieResumeCompleted(garantieResume: IGarantieResume, data: RestGestion.JustificatifGarantie.IDonneeGarantie, dateTraitement: string): IGarantieResume;
        private static getListeNature(listeNatureJustif);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Objet pour visualiser les informations essentielles d'une garantie (utilisé dans la contractualisation)
     */
    interface IGarantieResume {
        idGarantie: string;
        idCredit: string;
        codeEtablissement: number;
        libelleDescription: string;
        statut: string;
        isDataCompleteLoaded: boolean;
        listeJustificatif: Array<IJustificatifGarantie>;
        listeNatureJustificatifGarantie: Array<INatureJustificatifGarantie>;
        codeEtat: string;
        libelleEtat: string;
        montant: number;
        devise: string;
        dateCloture: Date;
        dateAnnulation: Date;
        idConvention: string;
        numExterne: string;
        referenceExterne: string;
        idGarant: string;
        libelleGarant: string;
        dateDebutEffet: Date;
        dateFinEffet: Date;
        compteurMiseAJour: number;
    }
}

declare module Avenants.Business.Modeles {
    interface IJustificatifGarantie {
        idJustificatif: string;
        couleurTuile: string;
        nature: INatureJustificatifGarantie;
        statut: Enum.JustificatifStatut;
        dateDebutEffet: Date;
        showDateDebutEffet: boolean;
        dateFinEffet: Date;
        dateReception: Date;
        dateLimiteReceptionJustificatif: Date;
        montantJustificatifInitial: number;
        montantJustificatif: number;
        showMontantJustificatif: boolean;
        referenceExterne: string;
        showReferenceExterne: boolean;
        showBtnValider: boolean;
        showBtnSupprimer: boolean;
        etatManipulation: Enum.EtatManipulation;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        indicateurBanalise: string;
        majByNature(nature: INatureJustificatifGarantie): void;
    }
    interface INatureJustificatifGarantie {
        code: string;
        libelle: string;
        codeClasse: string;
        libelleClasse: string;
        codeSousClasse: string;
        libelleSousClasse: string;
        codeCategorie: string;
        libelleCategorie: string;
        codeNiveauJustificatif: string;
        libelleNiveauJustificatif: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestJustificatifGarantie = Avenants.Rest.Modeles.DossierCreditGestion.JustificatifGarantie;
    class JustificatifGarantie implements IJustificatifGarantie {
        idJustificatif: string;
        couleurTuile: string;
        nature: INatureJustificatifGarantie;
        statut: Enum.JustificatifStatut;
        dateDebutEffet: Date;
        showDateDebutEffet: boolean;
        dateFinEffet: Date;
        dateReception: Date;
        dateLimiteReceptionJustificatif: Date;
        montantJustificatifInitial: number;
        montantJustificatif: number;
        showMontantJustificatif: boolean;
        referenceExterne: string;
        showReferenceExterne: boolean;
        etatManipulation: Enum.EtatManipulation;
        showBtnValider: boolean;
        showBtnSupprimer: boolean;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        indicateurBanalise: string;
        /**
         * @param dateTraitement: optionelle si une création, obligatoire sinon
         */
        constructor(j: RestJustificatifGarantie.IJustificatifGarantie, listeNature: Array<INatureJustificatifGarantie>, dateTraitement?: string);
        /**
         * Impacts suite à une modification de la nature
         */
        majByNature(nature: INatureJustificatifGarantie): void;
        /**
         * Gestion des champs manipulables et visibles
         */
        private setChampVisibles(nature);
        /**
         * L'action de suppression est posssible (pour le rendre clos) => attention pas en création
         * L'action de validation est posssible (pour création, reception ou modification)
         */
        private getIsActionAvailable(j, dateTraitement);
    }
}

declare module Avenants.Business.Modeles {
    import RestJustificatifGarantie = Avenants.Rest.Modeles.DossierCreditGestion.JustificatifGarantie;
    class NatureJustificatifGarantieBuilder {
        static getResult(n: RestJustificatifGarantie.INatureJustif): INatureJustificatifGarantie;
    }
    class NatureJustificatifGarantieHelper {
        /**
         *  Détermine le niveau de justification pour un justificatif de garantie
         */
        static getLibelleNiveauJustification(codeNiveauJustification: string): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    /**
     * Construction des éléments de garantie (IGarantieExistante) pour la création d'un avenant
     */
    class CaracteristiqueFinanGarantieExistanteBuilder {
        static getListeGarantieExistante(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, avenantDescription: Modeles.IAvenantDescription, listeGarantieExistanteByCaraFinanLoaded: Array<RestAvenantCaraFinan.IGarantieExistante>, listeGarantieSureteReelle: Array<RestAvenantCaraFinan.IGarantieSureteReelle>): Array<RestAvenantCaraFinan.IGarantieExistante>;
        /**
         * Génération de la liste des garanties existantes
         */
        private static getListeGarantieExistanteForAvenantGaranties(dataCommonCaraFinan, avenantDescription, listeGarantieExistanteByCaraFinanLoaded);
        /**
         * Construction de l'objet de garantie lorsque l'avenant ne les modifie pas (ce n'est pas un avenant de garantie)
         * Il faut faire avec les données par défaut
         * @param dataCommonCaraFinan: à prendre en compte pour les informations avenant/simulation et changement de produit
         * @param g: élément reçu de caraFinan et non modifié
         */
        private static getGarantieExistanteDefault(dataCommonCaraFinan, g);
        private static getGarantieExistante(dataCommonCaraFinan, g);
        /**
         * Il faut saisir le rédacteur d'acte uniquement dans la FormeAuthentique et si un rédacteur est renseigné
         */
        private static withRedacteurActe(g);
        private static getCapitalCouvertGarantie(g);
        private static getPourcentageCreditCouvert(g);
        private static getIdGarant(g);
        private static getCodeTypeAcces(etatManipulation, codeTypeAccesInitial);
        private static getListeCompleteElementCalculGarantie(dataCommonCaraFinan, g);
        /**
         * Gère la liste des  accessoires d'une sûreté personnelle
         */
        private static getListeElementCalculGarantie(dataCommonCaraFinan, g);
        /**
         * IElementCalculGarantie doit-il être présent dans le flux d'enregistrement  ?
         */
        private static getToInjectAccessorieInFlux(a, etatManipulationGarantie);
        private static getElementCalculGarantieByFrais(dataCommonCaraFinan, g);
        private static getElementCalculGarantie(dataCommonCaraFinan, a, idGarantie, etatManipulationGarantie);
        /**
         * Gestion de la valeur car il y a des cas particuliers
         */
        private static getCodeActionEcranListeForAccessoire(etatManipulationGarantie, a);
        private static getCodeActionEcranListe(etatManipulation);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    /**
     * Construction des éléments de garantie (IGarantieSuretePerso) pour la création d'un avenant
     */
    class CaracteristiqueFinanGarantieSuretePersoBuilder {
        /**
         * Génération de la liste des garanties personnelles
         */
        static getListeGarantieSuretePerso(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, avenantDescription: Modeles.IAvenantDescription, listeGarantieSuretePersoByCaraFinanLoaded: Array<RestAvenantCaraFinan.IGarantieSuretePerso>): Array<RestAvenantCaraFinan.IGarantieSuretePerso>;
        /**
         * Construction de l'objet de garantie lorsque l'avenant ne les modifie pas (ce n'est pas un avenant de garantie)
         * Il faut faire avec les données par défaut
         * @param dataCommonCaraFinan: à prendre en compte pour les informations avenant/simulation et changement de produit
         * @param g: élément reçu de caraFinan et non modifié
         */
        private static getGarantieSuretePersoDefault(dataCommonCaraFinan, g);
        private static getGarantieSuretePerso(dataCommonCaraFinan, g);
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    /**
     * Construction des éléments de garantie (IGarantieSureteReelle) pour la création d'un avenant
     */
    class CaracteristiqueFinanGarantieSureteReelleBuilder {
        static getListeGarantieSureteReelle(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, avenantDescription: Modeles.IAvenantDescription, listeGarantieSuretePersoByCaraFinanLoaded: Array<RestAvenantCaraFinan.IGarantieSureteReelle>): Array<RestAvenantCaraFinan.IGarantieSureteReelle>;
        /**
         * Génération de la liste des garanties sûreté réelle en ne tenant compte que de l'avenant de garanties
         */
        static getListeGarantieSureteReelleForAvenantGaranties(dataCommonCaraFinan: IDataCommonBuilderCaraFinan, avenantDescription: Modeles.IAvenantDescription, listeGarantieSuretePersoByCaraFinanLoaded: Array<RestAvenantCaraFinan.IGarantieSureteReelle>): Array<RestAvenantCaraFinan.IGarantieSureteReelle>;
        /**
         * Construction de l'objet de garantie lorsque l'avenant ne les modifie pas (ce n'est pas un avenant de garantie)
         * Il faut faire avec les données par défaut
         * @param dataCommonCaraFinan: à prendre en compte pour les informations avenant/simulation et changement de produit
         * @param g: élément reçu de caraFinan et non modifié
         */
        private static getGarantieSureteReelleDefault(dataCommonCaraFinan, g);
        private static getGarantieSureteReelle(dataCommonCaraFinan, g);
        private static getTypeObjetFinanceGaranti(garSureteReelle);
        private static getCodeQualiteLEmplacement(qualiteEmplacement);
        private static getReferenceExterneObjet(definitionObjet);
        private static getReferenceReferenceTypeLot(definitionObjet);
        private static getDescriptionLObjet1(definitionObjet);
        private static getDescriptionLObjet2(definitionObjet);
        private static getDescriptionLObjet3(definitionObjet);
        private static getDescriptionLObjet4(definitionObjet);
        private static getDescriptionLObjet5(definitionObjet);
        private static getDescriptionLObjet6(definitionObjet);
        private static getCodeVersementAttendu(definitionObjet);
    }
}

declare module Avenants.Business.Modeles {
    class CalculatricePretNonLissage implements ICalculatricePretNonLissage {
        entreeCalculatricePret: Enum.EntreeCalculatricePret;
        isRechercheParDuree: boolean;
        isRechercheParEcheance: boolean;
        constructor();
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class CreditAvenantFinancier implements ICreditAvenantFinancier {
        private _dureeAjusteeCreditSuiteRecalcul;
        private _montantOrigineCreditInitial;
        private _deltaDuree;
        private _dureeResiduelleInitiale;
        private _dureeTotaleInitiale;
        _montantCrdInitial: number;
        identifiantProduit: string;
        isPhaseAmortissementEnCours: boolean;
        unitePeriodicite: string;
        dureeResiduelle: number;
        dureeResiduelleMinimum: number;
        dureeResiduelleMaximum: number;
        dureeResiduellePas: number;
        libelleHelpDureeResiduelle: string;
        libelleErreurDureeResiduelle: string;
        dureeTotale: number;
        dureeTotaleMinimum: number;
        dureeTotaleMaximum: number;
        libelleHelpDureeTotale: string;
        echeance: number;
        echeanceOrigine: number;
        echeanceSouhaitee: number;
        depassementCapacite: boolean;
        montantOrigineCredit: number;
        montantCrd: number;
        montantCreditAvantAvenant: number;
        montantGarantiAvantAvenant: number;
        libelleHelpMontantCrd: string;
        uniteDureeCredit: string;
        libelleUniteDureeCredit: string;
        libellePeriodiciteAmortissement: string;
        modeCalculTaux: Commun.Enum.ModeCalculTaux;
        taux: number;
        tauxMinimum: number;
        tauxMaximum: number;
        libelleHelpTaux: string;
        calculatricePretNonLissage: ICalculatricePretNonLissage;
        marge: number;
        numeroProchaineEcheance: number;
        numeroQuantiemeDateEcheance: number;
        numeroQuantiemeSaisi: number;
        isCreditDirecteur: boolean;
        tauxCredit: number;
        tauxMinimumDirecteur: number;
        tauxMaximumDirecteur: number;
        activerIndiceCredit: boolean;
        showIndiceCredit: boolean;
        indiceTauxCredits: Array<string>;
        activerMargeCredit: boolean;
        showMargeCredit: boolean;
        activerTauxCredit: boolean;
        margeTauxCredit: number;
        margeMinimumDirecteur: number;
        margeMaximumDirecteur: number;
        phaseSel: RestGestion.InformationCredit.IPhase;
        paramRevTauxSel: RestGestion.InformationCredit.IParametreRevisionTaux;
        phaseProduitSel: RestAvenantParam.Produit.IPhase;
        parametreRevisionProduits: Array<RestAvenantParam.Produit.IParametreRevision>;
        conditionTauxProduitSel: RestAvenantParam.Produit.IConditionTauxProduit;
        indiceTauxCredit: string;
        isAllongementDureeLimite: boolean;
        deltaDureeAllongement: number;
        codeTypeRecalculTA: string;
        constructor(credit: RestGestion.InformationCredit.ICredit, produitCredit: RestAvenantParam.Produit.IProduit, dateTraitement: Date, isChangementProduit: boolean, listeIndices: Array<RestAvenantParam.Indice.IObjetIndice>, codeTypeAcces: Commun.Enum.CodeTypeAcces, creditOrigine: RestGestion.InformationCredit.ICredit);
        /**
         * Il faut ajouter les frais au capital chargé au début (car les frais peuvent être manipulés)
         */
        majCapitalCrdWithFrais(ancienFrais: IFraisAvenant, nouveauFrais: IFraisAvenant): void;
        /**
         * Modification de la durée
         * -> calcul des nouvelles valeurs dépendantes (échéance et durée totale)
         */
        majDataFromDureeResiduelle(entreeCalculatricePret: Enum.EntreeCalculatricePret, newDureeResiduelle: number, newEcheance: number, newTaux?: number): void;
        /**
         * Phase du crédit qui correspond à la phase de réference
         */
        protected getPhaseReference(credit: RestGestion.InformationCredit.ICredit): RestGestion.InformationCredit.IPhase;
        private getModeCalculTaux(creditOrigine, listePhasesProduit);
        /**
         * Phase produit qui correspond à la phase en cours
         */
        private getPhaseProduitReference(creditOrigine, listePhasesProduit);
        /**
         * Calcul de la durée résiduelle
         * Attention au cas où le crédit est en phase de préfinancement
         */
        protected getDureeResiduelle(credit: RestGestion.InformationCredit.ICredit): number;
        private getTauxEquivalent(modeCalculTaux, unitePeriode, taux);
        private getNewEcheance(tauxEquivalent, newDureeResiduelle, capitalCrd, uniteDureeCredit);
        private getNewDureeResiduelle(tauxEquivalent, newEcheance, capitalCrd);
        isTauxValid(): boolean;
        private getIsTauxValid(taux);
        isDureeResiduelleValid(): boolean;
        private getIsDureeResiduelleValid(dureeResiduelle);
        /**
         * Indique si la périodicité est respectée (multiple)
         */
        private getDureePeriodiciteIsValid(duree);
        isDureeTotaleValid(): boolean;
        isEcheanceValid(): boolean;
        getIsEcheanceValid(echeance: number): boolean;
        protected getConditionTaux(produitCredit: RestAvenantParam.Produit.IProduit, dateTraitement: Date): RestAvenantParam.Produit.IConditionTauxProduit;
        private getDureeMin(deltaDuree, produitCredit);
        private getDureeMinCalcule(deltaDuree, produitCredit);
        /**
         * Comportement à valider pour tester chaque durée
         */
        private getIsDureeMinValide(deltaDuree, dureeToTest, dureeMinRef);
        private getDureeMax(deltaDuree, produitCredit);
        /**
         * Indique la différence entre la durée totale de départ et la nouvelle totale souhaitée
         */
        getDeltaDureeTotale(): number;
        /**
         * Prise en compte des modifications sur la durée
         */
        getDureeAjusteeCreditSuiteRecalcul(): number;
        majDureeTotaleByDureeResiduelle(newDureeResiduelle: number): void;
        private fctActiverTauxCredit(conditionTauxProduit, produitCodeTauxCreditDirecteur, creditCodeModeExpressionTaux, isChangementProduit, codeTypeAcces);
        private fctIsCreditDirecteur(isChangementProduit, creditCodeTauxCreditDirecteur);
        private getModaliteDirecteur(credit, produit);
        private getTauxMinMaxDirecteur(credit, modalite, conditionTauxDirecteur);
        private fctActiverIndiceCredit(conditionTauxProduit, codeTypeAcces, isChangementProduit);
        private fctShowIndiceCredit(conditionTauxProduit, credit, creditOrigine);
        private getIndiceCredit(conditionTauxProduit, indices, phaseProduits, creditCodeRoleCreditAvenant, creditCodeIndiceNominal, creditOrigineCodePresenceRevisionSurCredit);
        private fctShowMargeCredit(produitCodeTauxCreditDirecteur, conditionTauxProduit);
        private fctActiverMarge(conditionTauxProduit, codeTypeAcces, isChangementProduit, showMargeCredit);
        private getMargeMinMaxDirecteur(modalite, conditionTauxDirecteur);
        majDureeResiduelleFromPhaseDT(phaseDureeEdit: number, phaseDureeInitiale: number): number;
        majDureeTotaleFromPhaseDT(phaseDureeEdit: number, phaseDureeInitiale: number): number;
    }
}

declare module Avenants.Business.Modeles {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    interface ICreditAvenantFinancier {
        identifiantProduit: string;
        isPhaseAmortissementEnCours: boolean;
        unitePeriodicite: string;
        dureeResiduelle: number;
        dureeResiduelleMinimum: number;
        dureeResiduelleMaximum: number;
        dureeResiduellePas: number;
        isDureeResiduelleValid(): boolean;
        libelleHelpDureeResiduelle: string;
        libelleErreurDureeResiduelle: string;
        dureeTotale: number;
        dureeTotaleMinimum: number;
        dureeTotaleMaximum: number;
        isDureeTotaleValid(): boolean;
        libelleHelpDureeTotale: string;
        getDeltaDureeTotale(): number;
        echeance: number;
        echeanceOrigine: number;
        echeanceSouhaitee: number;
        depassementCapacite: boolean;
        isEcheanceValid(): boolean;
        montantOrigineCredit: number;
        _montantCrdInitial: number;
        montantCrd: number;
        montantCreditAvantAvenant: number;
        montantGarantiAvantAvenant: number;
        uniteDureeCredit: string;
        libellePeriodiciteAmortissement: string;
        libelleHelpMontantCrd: string;
        modeCalculTaux: Commun.Enum.ModeCalculTaux;
        taux: number;
        tauxMinimum: number;
        tauxMaximum: number;
        isTauxValid(): boolean;
        libelleHelpTaux: string;
        calculatricePretNonLissage: ICalculatricePretNonLissage;
        marge: number;
        numeroProchaineEcheance: number;
        numeroQuantiemeDateEcheance: number;
        numeroQuantiemeSaisi: number;
        majCapitalCrdWithFrais(ancienFrais: IFraisAvenant, nouveauFrais: IFraisAvenant): void;
        majDataFromDureeResiduelle(entreeCalculatricePret: Enum.EntreeCalculatricePret, newDureeResiduelle: number, newEcheance: number, newTaux?: number): void;
        majDureeTotaleByDureeResiduelle(newDureeResiduelle: number): void;
        getDureeAjusteeCreditSuiteRecalcul(): number;
        isCreditDirecteur: boolean;
        tauxCredit: number;
        tauxMinimumDirecteur: number;
        tauxMaximumDirecteur: number;
        activerIndiceCredit: boolean;
        showIndiceCredit: boolean;
        indiceTauxCredits: Array<string>;
        activerMargeCredit: boolean;
        showMargeCredit: boolean;
        activerTauxCredit: boolean;
        margeTauxCredit: number;
        margeMinimumDirecteur: number;
        margeMaximumDirecteur: number;
        phaseSel: RestGestion.InformationCredit.IPhase;
        paramRevTauxSel: RestGestion.InformationCredit.IParametreRevisionTaux;
        phaseProduitSel: RestAvenantParam.Produit.IPhase;
        parametreRevisionProduits: Array<RestAvenantParam.Produit.IParametreRevision>;
        conditionTauxProduitSel: RestAvenantParam.Produit.IConditionTauxProduit;
        indiceTauxCredit: string;
        isAllongementDureeLimite: boolean;
        deltaDureeAllongement: number;
        codeTypeRecalculTA: string;
        majDureeResiduelleFromPhaseDT(phaseDureeEdit: number, phaseDureeInitiale: number): number;
        majDureeTotaleFromPhaseDT(phaseDureeEdit: number, phaseDureeInitiale: number): number;
    }
    interface ICalculatricePretNonLissage {
        entreeCalculatricePret: Enum.EntreeCalculatricePret;
        isRechercheParDuree: boolean;
        isRechercheParEcheance: boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    import RestAvenantParam = Avenants.Rest.Modeles.AvenantCreditParam;
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestAvenantService = Avenants.Rest.Modeles.AvenantCreditService;
    /**
     * Comportement d'accès aux données par défaut à tous les types d'avenants
     */
    abstract class AvenantDecorateur implements IAvenantDescription {
        protected avenantDescriptionBase: IAvenantDescription;
        stepAvenant: Enum.StepAvenant;
        isPresenceStepOne: boolean;
        isPresenceStepTwo: boolean;
        isPresenceStepThree: boolean;
        isPresenceNextStep: boolean;
        isPresencePreviousStep: boolean;
        setToNextStep(): void;
        setToPreviousStep(): void;
        codeTypeAcces: Commun.Enum.CodeTypeAcces;
        numero: number;
        codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation;
        typeAvenant: Commun.Enum.TypeAvenant;
        codeSousTypeAvenant: Commun.Enum.CodeSousTypeAvenant;
        compteurMiseJour: number;
        idCredit: string;
        idEmprunteur: string;
        libelleInfosCredit: string;
        devise: string;
        dateEffet: Date;
        dateEffetModifieQuantieme: Date;
        dateFinCredit: Date;
        dateFinPrefinancementReelle: Date;
        dateTraitement: Date;
        dateEcheance: Date;
        listeAcccessoires: Array<RestAvenantParam.Produit.IAccessoire>;
        listeAccessoiresAnnexes: Array<Business.Modeles.IAccessoireAnnexe>;
        dataFraisAvenant: IDataFraisAvenant;
        droitModifierEnabled: boolean;
        isEditionAuthorized: boolean;
        isCreditWithAjustementEcheances: boolean;
        isVersementAttenduAjoutable: boolean;
        dataRestAvenant: Modeles.IDataRestAvenant;
        dataAssurances: IDataAssurances;
        dataGaranties: IDataGaranties;
        listeAssurancesAvailables: Array<IAssurance>;
        listeAssurancesStock: Array<IAssurance>;
        listeGarantiesStock: Array<IGarantie>;
        listeGarantiesAvailables: Array<IGarantie>;
        listePhaseStock: Array<IPhase>;
        listePhaseAvailables: Array<IPhase>;
        emprunteurActuel: IEmprunteurActuel;
        emprunteurNouveau: IEmprunteurNouveau;
        creditAvenantFinancier: ICreditAvenantFinancier;
        jourFinMoisDateEffet: number;
        reportFinPret: Modeles.IReportFinPret;
        ate: IAte;
        infoObjet: IInfoObjet;
        numeroEcheance: number;
        numeroEcheanceDebutPhase: number;
        numeroEcheanceFinPhase: number;
        listeAccessoiresAte: Array<RestAvenantParam.Produit.IAccessoire>;
        listeAssurancesAte: Array<RestAvenant.CaracteristiqueFinan.IAssurance>;
        listeElementCalculServicesObjet: Array<RestAvenant.ServicesObjet.IElementCalcul>;
        renegociationProduits: Array<RestGestion.InformationCredit.IRenegociationProduit>;
        isEligibleChangementProduit: boolean;
        isChangementProduitExistant: boolean;
        isAvecChangementProduit: boolean;
        avecChangementProduit: boolean;
        eligibiliteRenegociationProduit: RestAvenantService.EligibiliteChangePdt.IRenegociationProduit;
        creditChangePdt: RestGestion.InformationCredit.ICredit;
        numeroModaliteRas: Array<RestAvenantParam.Produit.IModalite>;
        tauxRa: number;
        numeroModaliteRaDefault: RestAvenantParam.Produit.IModalite;
        bornesTauxRa: string;
        palierAbsorbe: boolean;
        numeroPhaseEnCoursCreditOrigine: number;
        numeroPremiereEcheanceLastPalierPhaseO: number;
        reductionMaxCredit: string;
        traitementEcheanceDureeProduit: string;
        motifAllongementDureeProduit: string;
        conditionsDureeProduit: string;
        bornesVariationDureeProduit: string;
        dureeVariationDureeProduit: number;
        pourcentageAllongementDureeProduit: number;
        showVariationDureeProduitForChgtProduit: boolean;
        showVariationDureeProduitForProduitInitial: boolean;
        borneMinVariationDureeProduit: number;
        borneMaxVariationDureeProduit: number;
        cdTypeButoir: string;
        isEditionVariationDureeProduit: boolean;
        isOpenVariationDureeProduit: boolean;
        borneTauxRaMin: number;
        borneTauxRaMax: number;
        libelleNouveauProduit: string;
        showPopinChgtProduit: boolean;
        nouvellePhaseAMSupOrigine: boolean;
        isProduitCloture: boolean;
        accessoireIntegreCrd: RestAvenant.CaracteristiqueFinan.IAccessoire;
        alerteAvenant: IAlerteAvenant;
        isModificationTauxFirst: boolean;
        isModificationPeriodicitePhaseFirst: boolean;
        isAmortissementALaCarte: boolean;
        typeCalculAjustementEcheances: Enum.TypeCalculAjustementEcheancesTaux;
        palierTauxInteretAvantCalculettes: Array<Business.Modeles.IPalier>;
        constructor(avenantDescription: IAvenantDescription);
        /**
         * Fournit le crédit initial de l'avenant
         */
        getCreditLoadedByCaraFinan(): RestAvenant.CaracteristiqueFinan.ICredit;
        /**
         * Fournit le crédit à l'état d'origine
         */
        getCreditLoadedByInfoCredit(): RestGestion.InformationCredit.ICredit;
        addAccessoireAnnexe(accessoireAnnexe: Modeles.IAccessoireAnnexe): void;
        setAccessoireAnnexeEdition(accessoireAnnexe: Business.Modeles.IAccessoireAnnexe, action: Enum.ActionManipulationElement): void;
        addAssurance(): void;
        setAssuranceEdition(action: Enum.ActionManipulationElement, idAssurance: number): void;
        setListePersonnesAssurable(listePersonneAssurableGarant: Array<IPersonneAssurableGarant>): void;
        majDureePalier(palierEdit: IPalier, isModifDureePhase: boolean): void;
        majDureePalierFromPhase(phaseEdit: IPhase): void;
        reportModificationsDuree(): void;
        addGarantie(): void;
        addGarantInListPersonnesAssurable(personneAssurableGarant: IPersonneAssurableGarant): void;
        impactModificationDureePhaseDT(phaseEdit: Modeles.IPhase): void;
        isAvenantTauxDuree: boolean;
        isAvenantAssurance: boolean;
        isAvenantGarantie: boolean;
        isAvenantQuantieme: boolean;
        isAvenantReportFinPret: boolean;
        isAvenantAte: boolean;
        isAvenantObjet: boolean;
        isAvenantPersonnes: boolean;
        isAvenantRecouvrement: boolean;
        isAvenantPeriodicite: boolean;
        abstract getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        abstract getDisabledValider(): boolean;
        beforeSave(): void;
        changeDateEffetQuantieme(): void;
        getDateEffetRetenue(): Date;
        gestionAte(phaseEnCours: Modeles.IPhase, phasesM: Array<Modeles.IPhase>, resultAte: Modeles.IAte, numeroEcheanceCreditS882: number, numeroEcheanceDebutPhase: number, numeroEcheanceFinPhase: number, numeroPhaseEnCoursS882: number): void;
        scissionPhaseAte(phaseEnCours: Modeles.IPhase, newNuep: number, numEchDebPhase: number, numEchFinPhase: number): Modeles.IPhase;
        changeTauxRA(modalite: RestAvenantParam.Produit.IModalite): void;
        setDataObjetFinanceByObjet(infoObjet: IInfoObjet): void;
        setDataAssurancesByAvenantPersonne(): void;
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser les assurances (pas le comportement qui est inclus dans AvenantAssuranceDecorateur)
     */
    class AvenantAssuranceDataDecorateur extends AvenantDecorateur {
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Avenants.Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        private getListeCompagnie(compagniesAssurance);
        private getListeMotifReserve(listeReserve);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser le comportement des assurances (pas les données)
     * !! Il est dépendant d'un autre décorateur, il faut d'abord initialiser AvenantAssuranceDataDecorateur
     */
    class AvenantAssuranceDecorateur extends AvenantDecorateur {
        private _listeAssurancesBeforeEdit;
        isAvenantAssurance: boolean;
        /**
         * Il faut différencier les assurances visibles (ne pas afficher les supprimées)
         */
        listeAssurancesAvailables: Array<IAssurance>;
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        /**
         * Sauvegarde la version à l'instant de la demande de l'accessoire
         * Gère le mode édition de ce dernier (passage en édition, annulation)
         * @param action: ActionManipulationElement
         * @param idAssurance : id au niveau de l'ihm, pour gérer les existantes des nouvelles (qui ne possèdent pas encore de réel identifiant)
         */
        setAssuranceEdition(action: Enum.ActionManipulationElement, idAssurance: number): void;
        /**
         * Indique que les accessoires sont modifiés
         */
        private setAccessoireOfAssuranceWithSaisieObligatoire(assrEdit, assrBefore);
        /**
         * Modification des personnes pouvant avor une assurance
         * -> Dans le cadre d'un avenant de personnes -> le changement entraine la modifications des personnes
         */
        setListePersonnesAssurable(listePersonneAssurableGarant: Array<IPersonneAssurableGarant>): void;
        addGarantInListPersonnesAssurable(personneAssurableGarant: IPersonneAssurableGarant): void;
        /**
         * Ajout d'une assurance
         */
        addAssurance(): void;
        getDisabledValider(): boolean;
    }
}

declare module Avenants.Business.Modeles {
    class AvenantAteDecorateur extends AvenantDecorateur {
        isAvenantAte: boolean;
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        private getAte(codeTypeAcces, creditByInfoCredit, produitCredit, creditByCaraFinan, isChangementProduit, phaseStock);
        scissionPhaseAte(phaseEnCours: Modeles.IPhase, newNuep: number, numEchDebPhase: number, numEchFinPhase: number): Modeles.IPhase;
        private getNumEcheanceDebutFinPhaseAte(phasesM, newNuep);
        gestionAte(phaseEnCours: Modeles.IPhase, phasesM: Array<Modeles.IPhase>, resultAte: Modeles.IAte, numeroEcheanceCreditS882: number, numeroEcheanceDebutPhase: number, numeroEcheanceFinPhase: number, numeroPhaseEnCoursS882: number): void;
        private scissionAccessoiresEnCours(numeroPhaseEnCours, numeroPhaseScinde, listeAccessoiresAte);
        private ajoutEchALaCarteDansPhase(phases, ate, numeroEcheanceCreditS882);
        private getDerniereEcheanceALaCarte(derniereEcheanceALaCarteInit, listePhases, listePalier, newNuep);
        private getDernierNumPhaseAte(listePhases);
        private getListeAccessoiresAte(liste, creditOrigine);
        private modifAccessoireProduitFonctionOrigine(accessoiresOrigine, accessoireProduit);
        private completerAccessoires(accessoiresP, phasesOrigine);
    }
}

declare module Avenants.Business.Modeles {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class AvenantCreditDecorateur extends AvenantDecorateur {
        listePhaseAvailables: Array<IPhase>;
        phaseOrigineEnCours: RestGestion.InformationCredit.IPhase;
        initialisationPhases: Array<RestGestion.InformationCredit.IPhase>;
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        /**
         * Indique si la calculatrice est proposée pour ajuster les échances de cet avenant
         */
        getIsCreditWithAjustementEcheances(credit: RestGestion.InformationCredit.ICredit, numeroPhaseEnCours: number): boolean;
        private getCredit(isAvecChangementProduit, creditChangePdt, produitCredit, creditOrigine, dateTraitement, listeIndices, codeTypeAcces);
        private initPhases(isCreationAvenant, isAvecChangementProduit, listePhasesByCaraFinan, creditByInfoCredit, creditChangePdt);
        private getPhases(creditByInfoCredit, produitCredit, listeIndice, palierCredit, dateTraitement, dateFinPrefinancementReelle, creditChangePdt, listePhases, creditAvenantFinancier, nouvellePhaseAMSupOrigine, codeTypeAcces);
        private getListePhasesInfoCredit(isCreationAvenant, isAvecChangementProduit, listePhasesByCaraFinan, creditByInfoCredit, creditChangePdt);
        getNumeroPremiereEcheanceLastPalierPhaseO(phaseInits: Array<RestGestion.InformationCredit.IPhase>): number;
        getNouvellePhaseAMSupOrigine(creditChangePdt: RestGestion.InformationCredit.ICredit, phaseCreditOrigines: Array<RestGestion.InformationCredit.IPhase>, phaseEnCoursCreditOrigineNumeroPhase: number, initialisationPhases: Array<RestGestion.InformationCredit.IPhase>): boolean;
        fct_isAmortissementALaCarte(phaseAvailables: Array<Modeles.IPhase>, numeroPhaseEnCours: number): boolean;
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser les données des garanties (pas le comportement qui est inclus dans AvenantGarantieDecorateur)
     */
    class AvenantGarantieDataDecorateur extends AvenantDecorateur {
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Avenants.Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        private getListeGaranties(tocObjetFinance, listeGarantieExistante, descriptionObjetFinance, listeGarantieSureteReelle, listeGarantieSuretePerso, listeElementCalculGarantie, listeParamModaliteMotifEstimation, listeMotifsEstimation, listeTypologiesInstruction, listePersonneAssurableOuGarant, listePersonneAssurableOuGarantCatalogue, dateTraitement, dateEffet, codeTypeAcces, creditOrigine, isVersementAttenduAjoutable, versementAttendusGarantie, isAvenantPeriodicite, isPhaseEnCoursPeriodiciteScinde);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser le comportement des garanties (pas les données)
     * !! Il est dépendant d'un autre décorateur, il faut d'abord initialisé AvenantGarantieDataDecorateur
     */
    class AvenantGarantieDecorateur extends AvenantDecorateur {
        private _idNouvelleGarantie;
        isAvenantGarantie: boolean;
        /**
         * Il faut différencier les garanties visibles (ne pas afficher celles supprimées)
         */
        listeGarantiesAvailables: Array<IGarantie>;
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        addGarantie(): void;
        /**
         * Dans le cas d'un avenant d'objet, les données garanties peuvent être modifiées
         */
        setDataObjetFinanceByObjet(infoObjet: IInfoObjet): void;
        private getDescriptionObjetFinanceUpdated(descriptionObjetFinanceInitial, infoObjet);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser les données objet (pas le comportement qui est inclus dans AvenantObjetDecorateur)
     */
    class AvenantObjetDataDecorateur extends AvenantDecorateur {
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        private getListeToc(typeObjetCommercials, typeObjetReglementes);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser le comportement pour l'objet (pas les données)
     * !! Il est dépendant des données: elles sont issues soit du décorateur AvenantObjetDataDecorateur
     * Ou soit de l'affectation des données manuellement dans le cas d'un rechargement suite à un changement de produit
     */
    class AvenantObjetDecorateur extends AvenantDecorateur {
        isAvenantObjet: boolean;
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        /**
         * A la validation vérification des données
         */
        beforeSave(): void;
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser les données personnes (pas le comportement qui est inclus dans AvenantPersonneDecorateur)
     */
    class AvenantPersonneDataDecorateur extends AvenantDecorateur {
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        /**
         * Informations de l'emprunteur actuel
         */
        private getEmprunteurActuel(emprunteur, listeCategorieEmprunteur);
        /**
         * Génére la liste des catégories de l'emprunteur, en la triant par ordre d'affichage
         */
        private getListeCategorie(listeCategorie);
        private getCategorie(c);
        private getListeMotifChangement(listeMotif);
        private getMotifChangement(m);
        /**
         * Génére la liste des modes de recouvrement, en la triant par ordre d'affichage
         */
        private getListeModeRecouvrement(listeRecouvrement);
        private getModeRecouvrement(m);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser le comportement pour les personnes (pas les données)
     * !! Il est dépendant des données: elles sont issues soit du décorateur AvenantPersonneDataDecorateur
     * Ou soit de l'affectation des données manuellement dans le cas d'un rechargement suite à un changement de produit
     */
    class AvenantPersonneDecorateur extends AvenantDecorateur {
        isAvenantPersonnes: boolean;
        idEmprunteur: string;
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        /**
         * Ce qui empêche de valider l'avenant (hors saisie des données gérées dans la vue avec le form)
         */
        getDisabledValider(): boolean;
        /**
         * A la validation vérification des données
         */
        beforeSave(): void;
        /**
         * L'avenant de personnes modifie les assurances
         */
        setDataAssurancesByAvenantPersonne(): void;
    }
}

declare module Avenants.Business.Modeles {
    class AvenantQuantiemeDecorateur extends AvenantDecorateur {
        isAvenantQuantieme: boolean;
        constructor(avenantDescription: IAvenantDescription);
        getDateEffetRetenue(): Date;
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        changeDateEffetQuantieme(): void;
        /**
         * Suite à la saisie du nouveau quantième, répercussion sur la date d'effet si nécessaire
         * @param dateEffetInitialeWithoutQuantieme : date d'effet saisie sans la prise en compte du quantième souhaité
         */
        private getDateEffetWithSaisieQuantieme(quantiemeSouhaite, dateEffetInitialeWithoutQuantieme);
    }
}

declare module Avenants.Business.Modeles {
    class AvenantReportFinPretDecorateur extends AvenantDecorateur {
        isAvenantReportFinPret: boolean;
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Avenants.Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        private getReportFinPret(creditInfos, produitCredit, creditByCaraFinan, codeTypeAcces, isChangementProduit);
    }
}

declare module Avenants.Business.Modeles {
    /**
     * Sert à initialiser le comportement des assurances (pas les données)
     * !! Il est dépendant d'un autre décorateur, il faut d'abord initialiser AvenantAssuranceDataDecorateur
     */
    class AvenantServicesObjetDecorateur {
        static decorate(avenantDescription: IAvenantDescription): void;
    }
}

declare module Avenants.Business.Modeles {
    class AvenantTauxDecorateur extends AvenantDecorateur {
        isAvenantTauxDuree: boolean;
        constructor(avenantDescription: IAvenantDescription);
        getListeModificationCredit(): Array<Commun.Enum.ModificationCredit>;
        getDisabledValider(): boolean;
        beforeSave(): void;
        private getDisabledValiderFinancier();
        private miseAJourPalierTauxInteret(phaseStocks, palierTauxInteretAvantCalculettes, numeroPhaseEnCours);
        private modificationPaliers(paliers, echeanceALaCartes);
    }
}

declare module Avenants.Business.ToolsFunctionals {
    class AjustementPalier {
        static getPhaseWithPaliersAjustes(phase: Modeles.IPhase, palierEdit: Modeles.IPalier, deltaDuree: number, numeroPhaseMax: number, isModifDureePhase: boolean): Modeles.IPhase;
        private static getPalierAjuste(palierRef, isPalierAjuste, isLastPalierOfLastPhase, deltaDuree, isModifDureePhase);
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    class FonctionsAte {
        static getListePaliersWithScission(phaseEnCours: Modeles.IPhase, numeroEcheanceCreditS882: number): Array<Modeles.IPalier>;
        static scissionPalierTauxInteretsAte(phaseEnCours: Modeles.IPhase, ate: Modeles.IAte, numeroEcheanceCreditS882: number): Array<Modeles.IPalier>;
        static getPalierProgAmorWithScission(phaseEnCours: Modeles.IPhase, numeroEcheanceCreditS882: number): Array<Modeles.IPalierProgAmor>;
        static scissionPalierProgAmorAte(phaseEnCours: Modeles.IPhase, ate: Modeles.IAte, numeroEcheanceCreditS882: number): Array<Modeles.IPalierProgAmor>;
        static renumerotationPalierTauxInteretNumeroPhase(paliersTauxInterets: Array<Modeles.IPalier>, numeroEcheance: number): void;
        static renumerotationPalierProgAmorNumeroPhase(palierProgAmors: Array<Modeles.IPalierProgAmor>, numeroEcheance: number): void;
        static renumerotationPalierTauxInteretNumeroRelatif(paliersTauxInteret: Array<Modeles.IPalier>, phaseScinde: Modeles.IPhase): void;
        static renumerotationPalierProgAmorNumeroRelatif(palierProgAmors: Array<Modeles.IPalierProgAmor>, phaseScinde: Modeles.IPhase): void;
        static scissionParametreRevisionTaux(parametresRevisionTaux: Array<Modeles.IParametreRevisionTaux>, nouvellePhase: Modeles.IPhase): Array<Modeles.IParametreRevisionTaux>;
        static renumerotationParamRevTaux(phasesM: Array<Modeles.IPhase>, phaseUnScission: Modeles.IPhase): void;
        static scissionPhaseEnCours(phaseEnCours: Modeles.IPhase, numeroEcheanceCreditS882: number, numeroEcheanceDebutPhase: number, numeroEcheanceFinPhase: number): Modeles.IPhase;
        static scissionEltCalculAccessoires(assurances: Array<Modeles.IAssurance>, numeroPhaseEnCours: number, isSecondeScissionAte: boolean, isPremiereScissionAte: boolean): Array<Modeles.IAssurance>;
        private static scissionAccessoireAssurance(accessoireAssu, numeroPhaseEnCours);
        static getNuepFinPhasePourAssiette(phaseEnCours: Modeles.IPhase, numeroEcheanceCreditS882: number): number;
        static modificationAssietteAccAssu(assuranceStock: Array<Modeles.IAssurance>, nuepPourAssiette: number, credit: RestGestion.InformationCredit.ICredit, phasesM: Array<Modeles.IPhase>): Array<Modeles.IAssurance>;
        static getElementCalculAccSpecifiqueAssiette(assuranceAte: Array<Modeles.IAssurance>, ctfcac: string, idfaaa: string, phase: Modeles.IPhase): Modeles.IAccessoireAssurance;
        /**
         * Permet l'affichage des phases pour l'avenant ATE. Diffère légèrement de la simulation de taux
         * car on ne veut pas afficher les nouvelles phases scindées par l'ATE
         * @param phase : donnée par l'affichage
         */
        static getPhaseAffichable(phase: Business.Modeles.IPhase, ate: Modeles.IAte, listePhaseAvailable: Array<Modeles.IPhase>, numeroPhaseEnCours: number): boolean;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestCaraFinan = Avenants.Rest.Modeles.DossierCreditAvenant.CaracteristiqueFinan;
    import RestProduit = Avenants.Rest.Modeles.AvenantCreditParam.Produit;
    class FraisAvenant {
        static getFraisAvenant(codeTypeAcces: Commun.Enum.CodeTypeAcces, listeAccessoiresProduit: Array<RestProduit.IAccessoire>, listeAccessoiresCredit: Array<RestCaraFinan.IAccessoire>, isFraisUnique: boolean, isCasFraisPreleve?: boolean): Modeles.IFraisAvenant;
        private static getAcessoireDefaut(listeAccessoiresInit, isFraisUnique, isCasFraisPreleve?);
        /**
         * Filtre les accessoires avec la donnée regleAppelAccessoireAperiodique au plus bas
         */
        private static getListeAcessoireByRegleAppelAccessoireAperiodique(listeAccessoires);
        /**
         * Filtre les accessoires avec la donnée codeNatureAccessoire au plus haut
         */
        private static getListeAcessoireByCodeTypologieAccessoire(listeAccessoires);
        /**
         * Filtre les accessoires avec la donnée codeNatureAccessoire au plus haut
         */
        private static getListeAcessoireByCodeNatureAccessoire(listeAccessoires);
        /**
         * Filtre les accessoires avec la donnée codeTypeAccessoire au plus bas
         */
        private static getListeAcessoireByCodeTypeAccessoire(listeAccessoires);
        /**
         * Nouvelle version pour récupérer les accessoires
         * Il faut gérer le cas des frais intégré au CRD et les frais prélevés
         * @param listeAccessoires
         * @param isFraisUnique: il faut différencier les frais prélevés des frais à intégrer
         * @param isCasFraisPreleve: optionnel, obligatoire si isFraisUnique false.
         *          isCasFraisPreleve true: recherche des frais prelevés / false : recherche frais à intégrer au CRD
         */
        private static getListeAccessoire(listeAccessoires, isFraisUnique, isCasFraisPreleve?);
        private static getListeAccessoireEvolution(listeAccessoires, isFraisUnique, isCasFraisPreleve?);
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class Garantie {
        static getListeGarant(listePersonneAssurableOuGarant: Array<RestGaranties.IPersonneAssurableOuGarant>, listePersonneAssurableOuGarantCatalogue: Array<RestGaranties.IPersonneAssurableOuGarantCatalogue>): Array<Modeles.IPersonneAssurableGarant>;
        /**
         * Génère le toc devenant le toc de référence pour l'objet du financement
         */
        static getTypeObjetCommercialFinanceCreditOrigine(typeObjetFinanceGarantiByCreditOrigine: string, listeObjetNatureGarantie: Array<RestGaranties.IObjetNatureGarantie>, listeObjetsCommerciaux: Array<RestGaranties.IObjetCommerciaux>, listeObjetReglementeParCategorie: Array<RestGaranties.IObjetReglementeParCategorie>, listeObjetReglemente: Array<RestGaranties.IObjetReglemente>): Modeles.ITypeObjetCommercialGarantie;
    }
}

declare module Avenants.Business.ToolsFunctionals {
    import RestDossierCreditGestion = Avenants.Rest.Modeles.DossierCreditGestion;
    import RestDossierCreditAvenant = Avenants.Rest.Modeles.DossierCreditAvenant;
    class ModificationCrd {
        constructor();
        static getTypeAcces(codeTypeAcces: Commun.Enum.CodeTypeAcces): boolean;
        static getMontantCredit(credit: RestDossierCreditGestion.InformationCredit.ICredit, creditOrigine: RestDossierCreditGestion.InformationCredit.ICredit, codeTypeAcces: Commun.Enum.CodeTypeAcces, dataFraisAvenantFraisAvenant: Modeles.IFraisAvenant): number;
        static fctActiverMontantCredit(credit: RestDossierCreditGestion.InformationCredit.ICredit, typeAcces: boolean): boolean;
        static getAffichageInteretCompensateur(creditOrigine: RestDossierCreditGestion.InformationCredit.ICredit, credit: RestDossierCreditGestion.InformationCredit.ICredit): boolean;
        static isCaseInteretCompensateurCoche(afficheInteretCompensateur: boolean, creditMontantIntcompsurCR: number): boolean;
        static getInteretCompOuReport(creditOrigine: RestDossierCreditGestion.InformationCredit.ICredit): number;
        static getAfficheFraisAvenant(credit: RestDossierCreditGestion.InformationCredit.ICredit, creditOrigine: RestDossierCreditGestion.InformationCredit.ICredit, accessoireIntegreCrd: RestDossierCreditAvenant.CaracteristiqueFinan.IAccessoire): boolean;
        static isCaseFraisAvenant(dataFraisAvenantFraisAvenant: Modeles.IFraisAvenant, afficheFraisAvenant: boolean, creditCodeIntegrationFraisCrd: string): boolean;
        static getFraisAvenant(afficheFraisAvenant: boolean, caseFraisAvenant: boolean, dataFraisAvenantFraisAvenant: Modeles.IFraisAvenant): number;
        static getAfficherAutres(credit: RestDossierCreditGestion.InformationCredit.ICredit): boolean;
        static getCaseAutres(afficheAutres: boolean, creditMontantArrieresIncorporesCrd: number): boolean;
        static getTitreBoutonImpayes(creditOrigine: RestDossierCreditGestion.InformationCredit.ICredit): string;
        static getCodeIndicateurIntegrationCrd(creditOrigine: RestDossierCreditGestion.InformationCredit.ICredit, caseInteretCompensateur: boolean): string;
        static getMontantArriereIncorporeCrd(arrieres: boolean, ajoutAutreMontantCrd: Enum.AjoutAutreMontantCrd, ajoutImpayes: number, montantLibre: number): number;
        static getCodeTypeArrieresIncorporeCrd(arrieres: boolean, ajoutAutreMontantCrd: Enum.AjoutAutreMontantCrd): string;
        static fctAjoutAutreMontantCrd(cdTypeArrieresIncorporeCrd: string): Enum.AjoutAutreMontantCrd;
        static fctActiverImpayes(creditOrigine: RestDossierCreditGestion.InformationCredit.ICredit, codeAvenantSimulation: Commun.Enum.CodeAvenantSimulation): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class DefinitionObjetGarantieHelper {
        static getTypologieInstruction(t: RestGaranties.ITypologieInstruction): ITypologieInstruction;
        /**
         * La popin de description peut prendre 4 formes selon l'objet
         */
        static getMasqueDefinitionObjetGarantie(codeTypologieLObjet: string): Enum.MasqueDefinitionObjetGarantie;
        /**
         * Indique si la donnée référence deux est une donnée spécifique RICE
         */
        static getShowNumeroComptePopin(masque: Enum.MasqueDefinitionObjetGarantie, configFsdgae: IConfigFsdgae): boolean;
        /**
         * Gestion de l'affichage des labels
         */
        static getLabelDescription(codeTypologieLObjet: string): string;
        static getShowReferenceUn(codeTypologieLObjet: string): boolean;
        static getShowLabelReferenceUn(codeTypologieLObjet: string): boolean;
        static getLabelReferenceUn(codeTypologieLObjet: string): string;
        static getShowReferenceDeux(codeTypologieLObjet: string): boolean;
        static getShowReferenceDeuxCompte(codeTypologieLObjet: string): boolean;
        static getShowLabelReferenceDeux(codeTypologieLObjet: string): boolean;
        static getLabelReferenceDeux(codeTypologieLObjet: string): string;
        static getLabelBlocAdresse(codeTypologieLObjet: string): string;
        static getAdresseLigne1IsRequired(codeTypologieLObjet: string): boolean;
        static getShowBtnPopinDescription(codeTypologieLObjet: string): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class DefinitionObjetGarantie implements IDefinitionObjetGarantie {
        isDefinitionObjetFinance: boolean;
        showTypeObjetReglemente: boolean;
        typeObjetReglemente: ITypeObjetReglemente;
        dataTypeObjetReglemente: Array<ITypeObjetReglemente>;
        labelDescription: string;
        description: string;
        labelBlocAdresse: string;
        adresseLigne1IsRequired: boolean;
        dataAdresse: IAdresse;
        dataAdresseComposant: myway.comAdresseDqe.Adresse;
        identifiantObjetInitial: string;
        identifiantObjet: string;
        showBtnPopinDescription: boolean;
        masqueDefinitionObjet: Enum.MasqueDefinitionObjetGarantie;
        configFsdgad: IConfigFsdgad;
        configFsdga4: IConfigFsdga4;
        configFsdgae: IConfigFsdgae;
        configFsdgac: IConfigFsdgac;
        showReferenceUn: boolean;
        showLabelReferenceUn: boolean;
        labelReferenceUn: string;
        referenceUn: string;
        showReferenceDeux: boolean;
        showLabelReferenceDeux: boolean;
        labelReferenceDeux: string;
        referenceDeux: string;
        showReferenceDeuxCompte: boolean;
        numeroCompte: MyWay.Model.Rice;
        referenceDeuxIsCompte: boolean;
        showNumeroComptePopin: boolean;
        typeBien: ITypologieInstruction;
        dataListTypeBien: Array<ITypologieInstruction>;
        surfaceHabitable: number;
        surfaceTerrain: number;
        typeLogement: Commun.Enum.TypeLogementGarantie;
        destinationBien: Commun.Enum.DestinationBienGarantie;
        zoneImplantation: ITypologieInstruction;
        dataListeZoneImplantation: Array<ITypologieInstruction>;
        qualiteEmplacement: Enum.QualiteEmplacementObjetPorteGarantie;
        dateDegrevement: Date;
        dateDerniereMutation: Date;
        anneeConstructionRenovationLourde: number;
        /**
         * @param isDefinitionObjetFinance: optionnel, par défaut false. A forcer à true pour l'objet du financement
         */
        constructor(g: RestGaranties.IGarantieSureteReelle, d: RestGaranties.IDescriptionObjetFinance, dataTypologiesInstruction: Array<RestGaranties.ITypologieInstruction>, objetCommercial: ITypeObjetCommercialGarantie, isVersementsAttendusToAjoutable: boolean, listeVersementAttendusGarantie: Array<RestGaranties.IVersementAttendusGarantie>, isDefinitionObjetFinance?: boolean);
        /**
         * Attention, il faudra regénérer l'affichage (les règles pour les champs)
         */
        setDataByObjet(infoObjet: IInfoObjet): void;
        /**
         * Le composant adresse manipule un objet en particulier (initialisé par le service du composant)
         * Une fois la garantie validée, il faut reporter les données dans les données à enregistrer
         * ! les données ligne1 et 2 sont optionnelles, il faut des valeurs par défaut
         */
        reportDataAdresseComposantToDataAdresse(): void;
        private getTypeObjetReglemente(toc, g, isDefinitionObjetFinance, d);
        /**
         * @param type: 01 pour le typoe de bien / 02 pour la zone d'implantation
         */
        private getListeTypologieInstruction(liste, type);
        private getRiceByNumeroCompte(numContrat);
        private getDataAdresse(g, isDefinitionObjetFinance, d);
        private getCodePays(codePaysLocalisation, adresseLigneCodePostal4);
        /**
         * Méthodes permettant de manipuler les versements attendus
         */
        addVersementAttendu(): void;
        setVersementAttenduEdition(action: Enum.ActionManipulationElement, idIhmVersementAttendu: number): void;
    }
}

declare module Avenants.Business.Modeles {
    interface IDefinitionObjetGarantie {
        isDefinitionObjetFinance: boolean;
        showTypeObjetReglemente: boolean;
        typeObjetReglemente: ITypeObjetReglemente;
        dataTypeObjetReglemente: Array<ITypeObjetReglemente>;
        labelDescription: string;
        description: string;
        labelBlocAdresse: string;
        adresseLigne1IsRequired: boolean;
        dataAdresse: IAdresse;
        dataAdresseComposant: myway.comAdresseDqe.Adresse;
        reportDataAdresseComposantToDataAdresse(): void;
        identifiantObjetInitial: string;
        identifiantObjet: string;
        showBtnPopinDescription: boolean;
        masqueDefinitionObjet: Enum.MasqueDefinitionObjetGarantie;
        configFsdga4: IConfigFsdga4;
        configFsdgae: IConfigFsdgae;
        configFsdgad: IConfigFsdgad;
        configFsdgac: IConfigFsdgac;
        showReferenceUn: boolean;
        showLabelReferenceUn: boolean;
        labelReferenceUn: string;
        referenceUn: string;
        showReferenceDeux: boolean;
        showLabelReferenceDeux: boolean;
        labelReferenceDeux: string;
        referenceDeux: string;
        showReferenceDeuxCompte: boolean;
        showNumeroComptePopin: boolean;
        numeroCompte: MyWay.Model.Rice;
        referenceDeuxIsCompte: boolean;
        typeBien: ITypologieInstruction;
        dataListTypeBien: Array<ITypologieInstruction>;
        surfaceHabitable: number;
        surfaceTerrain: number;
        typeLogement: Commun.Enum.TypeLogementGarantie;
        destinationBien: Commun.Enum.DestinationBienGarantie;
        zoneImplantation: ITypologieInstruction;
        dataListeZoneImplantation: Array<ITypologieInstruction>;
        qualiteEmplacement: Enum.QualiteEmplacementObjetPorteGarantie;
        dateDegrevement: Date;
        dateDerniereMutation: Date;
        anneeConstructionRenovationLourde: number;
        setDataByObjet(infoObjet: IInfoObjet): void;
        addVersementAttendu(): void;
        setVersementAttenduEdition(action: Enum.ActionManipulationElement, idIhmVersementAttendu: number): void;
    }
    interface IConfigFsdgad {
        montantAnnuelLoyerOrigine: number;
        montantDerniereMutation: number;
    }
    interface IConfigFsdga4 {
        showReferenceUnNumEnregistrement: boolean;
        showReferenceUnMontant: boolean;
        showDescriptionUnDate: boolean;
        dateExtinctionBail: Date;
        showDescriptionUnGestionTitre: boolean;
        titreGereEtablissement: boolean;
        showDescriptionDeuxNomGerant: boolean;
        nomGerant: string;
    }
    interface IConfigFsdgae {
        showReferenceUnEtablissement: boolean;
        etablissement: string;
        showReferenceUnDateNaissance: boolean;
        dateNaissance: Date;
        showReferenceDeuxNumCompte: boolean;
        showReferenceDeuxNumeroContrat: boolean;
        numeroContrat: string;
        showDescriptionCinqNomContrat: boolean;
        nomContrat: string;
        showDescriptionUnDeuxCompagnieAssurance: boolean;
        nomCompagnieAssurance: string;
        sirenCompagnieAssurance: string;
        isWithVersementsAttendusAutorises: boolean;
        isVersementsAttendusToAjoutable: boolean;
        listeVersementsAttendusStock: Array<IVersementAttendu>;
        listeVersementsAttendusAvailables: Array<IVersementAttendu>;
        listeVersementsAttendusBeforeEdit: Array<IVersementAttendu>;
    }
    interface IConfigFsdgac {
        sirenEtablissement: string;
        valeurBonOrigine: number;
        numContratTitre: string;
        natureBon: Enum.NatureBonObjetPorteGarantie;
        dateEcheance: Date;
        intituleDepositaire: string;
    }
    interface IAdresse {
        adresseLigne1: string;
        adresseLigneSuite6: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigneCodePostal4: string;
        adresseLigneCommune5: string;
        codePaysLocalisation: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class ConventionGarantieApplicableBuilder {
        /**
         * @param codeNatureGarantie: pour mettre à jour le code de la convention s'il y a un delta sur le paramètrage, le code de la nature prend le dessus sur la convention
         * @param c: la convention
         * @param listeAccessoireConvention: les accessoires liés à la convention
         */
        static getResult(codeNatureGarantie: string, c: RestGaranties.IConventionApplicableCatalogue, listeAccessoireConvention: Array<RestGaranties.IAccessoireConventionCatalogue>): IConventionGarantieApplicable;
    }
}

declare module Avenants.Business.Modeles {
    interface IConventionGarantieApplicable {
        codeNatureGarantie: string;
        codeNatureCautionnement: string;
        idConvention: string;
        idIntervenant: string;
        libelleLong: string;
        libelleDescription: string;
        cdModeExpressionGarantieAccorde: string;
        montantMinimumGarantiParTete: number;
        montantMaximumGarantiParTete: number;
        pasMontantGarantiParTete: number;
        quotiteMinimumParBeneficiaire: number;
        quotiteMaximumParBeneficiaire: number;
        pasQuotiteParBeneficiaire: number;
        listeAccessoires: Array<Rest.Modeles.DossierCreditAvenant.Garanties.IAccessoireConventionCatalogue>;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class GarantieApplicableBuilder {
        static getGarantieApplicableForGarantie(garantieExistante: RestGaranties.IGarantieExistante, ad: IAvenantDescription): IGarantieApplicable;
        /**
         * Par soucis de performance il nous faut reconstruire cette liste à chaque fois au chargement de la page garantie
         * (si on la stocke dans un objet ou la session -> la page ralentie fortement)
         */
        static getListeGarantieApplicable(ad: IAvenantDescription, garantieLoaded: IGarantie): Array<IGarantieApplicable>;
        /**
         * Filtre sur les garanties applicables actives à la date d'effet
         * @param codeNatureGarantieByGarantieLoaded: Cas particulier, s'il s'agit d'une garantie déjà en place, il faut la proposer même si elle est passée
         */
        private static getListeGarantieApplicableActives(ad, codeNatureGarantieByGarantieLoaded);
        /**
         * Génération de l'identifiant de la convention à récupérer pour l'initialisation de la garantie
         * Pour une garantie déjà en place sur l'avenant (que l'on souhaite charger)
         */
        private static getIdConventionByGarantieExistante(idGarantie, listeGarantieSuretePerso);
        /**
         * Génération de l'identifiant de la convention à récupérer pour la lecture de la garantie
         * Pour une garantie déjà en place sur l'avenant (qui est chargé)
         */
        private static getIdConventionByGarantieLoaded(garantieLoaded, garantieApplicable);
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class GarantieApplicable implements IGarantieApplicable {
        libelleDescription: string;
        libelleLongNature: string;
        codeTypeSurete: string;
        codeNatureGarantie: string;
        acteAuthentiqueSurGarantie: string;
        codeValeurPacteCommissoire: string;
        classeGarantie: string;
        codeUtilisationPacteCommissoire: string;
        codeHypothequeRechargeable: string;
        listeConventionApplicable: Array<IConventionGarantieApplicable>;
        frais: IFraisGarantieApplicable;
        listeObjetNatureGarantie: Array<IObjetNatureGarantie>;
        listeTypeObjetCommercial: Array<ITypeObjetCommercialGarantie>;
        constructor(g: RestGaranties.IGarantieApplicable, listeFraisGarantieParNature: Array<RestGaranties.IFraisGarantieParNature>, listeConventionByCredit: Array<RestGaranties.IConventionApplicableCredit>, listeConventionByCatalogue: Array<RestGaranties.IConventionApplicableCatalogue>, listeAccessoireConventionByCatalogue: Array<RestGaranties.IAccessoireConventionCatalogue>, listeObjetNatureGarantie: Array<RestGaranties.IObjetNatureGarantie>, listeObjetsCommerciaux: Array<RestGaranties.IObjetCommerciaux>, listeObjetReglementeParCategorie: Array<RestGaranties.IObjetReglementeParCategorie>, listeObjetReglemente: Array<RestGaranties.IObjetReglemente>, idConventionByGarantiePersoExistante: string);
        /**
         * Génère la liste des conventions applicables pour la garantie traitée
         */
        private getListeConventionGarantieApplicable(codeNatureGarantie, listeByCatalogue, listeByCredit, listeAccessoireConventionByCatalogue, idConventionByGarantiePersoExistante);
        /**
         * Génération de la liste contenant un élément : celui se rapportant à la convention déjà en place
         */
        private getListeConventionGarantieApplicableForGarantiePersoExistante(codeNatureGarantie, listeByCredit, listeAccessoireConventionByCatalogue, idConventionByGarantiePersoExistante);
        private getFraisGarantieApplicable(codeNatureGarantie, liste);
        private getListeObjetNatureGarantie(codeNatureGarantie, listeObjetNatureGarantie, listeObjetsCommerciaux, listeObjetReglementeParCategorie, listeObjetReglemente);
        private getListeObjetCommercial(objetNatureGarantie, listeObjetCommerciaux, listeObjetReglementeParCategorie, listeObjetReglemente);
        private getListeTypeObjetCommercial(listeObjetNatureGarantie);
    }
}

declare module Avenants.Business.Modeles {
    interface IGarantieApplicable {
        libelleDescription: string;
        libelleLongNature: string;
        codeTypeSurete: string;
        codeNatureGarantie: string;
        acteAuthentiqueSurGarantie: string;
        codeValeurPacteCommissoire: string;
        classeGarantie: string;
        codeHypothequeRechargeable: string;
        codeUtilisationPacteCommissoire: string;
        listeConventionApplicable: Array<IConventionGarantieApplicable>;
        frais: IFraisGarantieApplicable;
        listeObjetNatureGarantie: Array<IObjetNatureGarantie>;
        listeTypeObjetCommercial: Array<ITypeObjetCommercialGarantie>;
    }
    interface IFraisGarantieApplicable {
        codeAccessoireObligatoire: string;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypologieAccessoire: string;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        dureeApplicationAccessoire: number;
        uniteDureeApplicAccess: string;
        noRegleApplicationAccessoire: string;
    }
    interface IObjetNatureGarantie {
        typeObjetFinanceGaranti: string;
        typologieLObjet: string;
        listeTypeObjetCommercial: Array<ITypeObjetCommercialGarantie>;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    import RestInfoCredit = Avenants.Rest.Modeles.DossierCreditGestion.InformationCredit;
    class GarantieSuretePersonnelle implements IGarantieSuretePersonnelle {
        private _devise;
        private _dateEffet;
        private _creditCurrent;
        private _conventionCautionnement;
        private _cautionnement;
        private _showMontantGarantie;
        private _montantGarantie;
        private _libelleHelpMontantGarantie;
        private _showLibelleHelpMontantGarantie;
        private _libelleHelpQuotite;
        private _showLibelleHelpQuotite;
        private _quotite;
        private _isQuotiteModifiable;
        dataListeConvention: Array<IConventionGarantieApplicable>;
        dureeEngagement: number;
        finValidite: number;
        isCautionnementModifiable: boolean;
        dataListeGarant: Array<IPersonneAssurableGarant>;
        garant: IPersonneAssurableGarant;
        disabledQuotite: boolean;
        referenceExterne: string;
        listeAccessoire: Array<IAccessoireGarantie>;
        isAvenantPeriodicite: boolean;
        isPhaseEnCoursPeriodiciteScinde: boolean;
        showQuotite: boolean;
        isMontantModifiable: boolean;
        showConvention: boolean;
        isGarantModifiable: boolean;
        conventionCautionnement: IConventionGarantieApplicable;
        cautionnement: Commun.Enum.CautionnementGarantie;
        quotite: number;
        isQuotiteModifiable: boolean;
        montantGarantie: number;
        showMontantGarantie: boolean;
        libelleHelpMontantGarantie: string;
        showLibelleHelpMontantGarantie: boolean;
        libelleHelpQuotite: string;
        showLibelleHelpQuotite: boolean;
        /**
         * Indique si les informations primaires sont valides pour afficher les informations suivantes
         */
        infosLevel1Valid: boolean;
        constructor(garantieExistante: RestGaranties.IGarantieExistante, garantieSuretePerso: RestGaranties.IGarantieSuretePerso, garantieApplicable: IGarantieApplicable, listePersonneGarant: Array<IPersonneAssurableGarant>, listeElementCalculGarantie: Array<RestGaranties.IElementCalculGarantie>, creditCurrent: RestInfoCredit.ICredit, devise: string, dateEffet: Date, isAvenantPeriodicite: boolean, isPhaseEnCoursPeriodiciteScinde: boolean);
        isQuotiteValid(): boolean;
        isValid(): boolean;
        setCautionnementByBugCmposant(): void;
        private getQuotite(cdModeExpressionGarantieAccorde, cautionnement, pourcentageCreditCouvertByGarantieExistante?);
        /**
         * Réinitialisation des données
         */
        private resetDataConvention();
        /**
         * Données impactées par la convention: la quotité et le montant
         */
        private setDataWithConventionCautionnement(c);
        /**
         * La sélection d'une NOUVELLE convention impacte des données
         */
        private setDataWithNewConventionCautionnement(c);
        /**
         * Alimente les accessoires de la garantie
         */
        private setListeAccessoire(c, listeEltCalculGarantie, dateEffet, numPhaseActiveCredit, isCreation);
        private getListeAccessoire(listeAccessoireConventionCatalogue, listeElementCalculGarantie, dateEffet, numeroPhaseActiveCredit, isCreation);
        /**
         * Donne la liste des accessoires éligibles
         */
        private getListeAccessoiresConventionActif(listeAccessoireConvention, numeroPhaseActiveCredit, dateEffet);
        private setQuotiteModifiable(c, cautionnementGarantie);
        private setShowMontantGarantie(c, cautionnementGarantie);
        private setHelpMontantGarantie(c);
        private setHelpQuotite(c);
        private isValueNumeriqueNotZero(value);
    }
}

declare module Avenants.Business.Modeles {
    interface IGarantieSuretePersonnelle {
        showConvention: boolean;
        dataListeConvention: Array<IConventionGarantieApplicable>;
        conventionCautionnement: IConventionGarantieApplicable;
        dureeEngagement: number;
        finValidite: number;
        isCautionnementModifiable: boolean;
        cautionnement: Commun.Enum.CautionnementGarantie;
        dataListeGarant: Array<IPersonneAssurableGarant>;
        isGarantModifiable: boolean;
        garant: IPersonneAssurableGarant;
        showMontantGarantie: boolean;
        isMontantModifiable: boolean;
        montantGarantie: number;
        showLibelleHelpMontantGarantie: boolean;
        libelleHelpMontantGarantie: string;
        showQuotite: boolean;
        isQuotiteModifiable: boolean;
        disabledQuotite: boolean;
        quotite: number;
        isQuotiteValid(): void;
        showLibelleHelpQuotite: boolean;
        libelleHelpQuotite: string;
        referenceExterne: string;
        infosLevel1Valid: boolean;
        isValid(): boolean;
        setCautionnementByBugCmposant(): void;
        listeAccessoire: Array<IAccessoireGarantie>;
        isAvenantPeriodicite: boolean;
        isPhaseEnCoursPeriodiciteScinde: boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class GarantieSureteReelle implements IGarantieSureteReelle {
        private _garantieSureteReelle;
        private _descriptionObjetFinance;
        private _listeTypologiesInstruction;
        private _listeVersementAttendusGarantie;
        private _isVersementsAttendusToAjoutable;
        private _dateTraitement;
        private _isCreationInit;
        private _definitionObjetGarantieForFinancement;
        private _objetPorteGarantie;
        private _objetCommercialAutre;
        private _rangInscriptionHypotheque;
        private _dataListeCessionRang;
        private _modalitesEstimationVenale;
        private _modalitesEstimationPrudentielle;
        commentaire: string;
        isCommentaireRequired: boolean;
        dataListeObjetCommercial: Array<ITypeObjetCommercialGarantie>;
        objetCommercialFinancement: ITypeObjetCommercialGarantie;
        disabledRbObjetCommercialFinancement: boolean;
        showRbObjetCommercialSans: boolean;
        garant: IPersonneAssurableGarant;
        showPacteCommissoire: boolean;
        isPacteCommissoireModifiable: boolean;
        pacteCommissoire: boolean;
        showRangInscriptionHypotheque: boolean;
        isRangInscriptionHypothequeModifiable: boolean;
        showCessionRang: boolean;
        cessionRang: Commun.Enum.CessionRangGarantie;
        montantGarantie: number;
        showMontantHypothequeRangAnterieur: boolean;
        montantHypothequeRangAnterieur: number;
        showDureeInscriptionHypothecaire: boolean;
        dureeInscriptionHypothecaire: number;
        dataPassePlat: IGarantieSureteReellePassePlat;
        objetPorteGarantie: Enum.ObjetPorteGarantie;
        objetCommercialAutre: ITypeObjetCommercialGarantie;
        rangInscriptionHypotheque: number;
        showGarant: boolean;
        /**
         * La possibilité de sélectionner un nouvel objet est conditionné au choix du radio bouton "Autre objet"
         */
        showListeObjetCommercialAutre: boolean;
        dataListeCessionRang: Array<Commun.Enum.CessionRangGarantie>;
        /**
         * La popin estimation de l'objet est potentiellement accesible s'il y a un objet porté en garantie
         */
        showEstimationObjet: boolean;
        disabledEstimationObjet: boolean;
        montantEstimationVenale: number;
        dateEstimationVenale: Date;
        dataListemodalitesEstimationVenale: Array<IModalitesEstimationGarantie>;
        modalitesEstimationVenale: IModalitesEstimationGarantie;
        motifEstimationVenale: IMotifEstimationGarantie;
        montantEstimationPrudentielle: number;
        dateEstimationPrudentielle: Date;
        dataListemodalitesEstimationPrudentielle: Array<IModalitesEstimationGarantie>;
        modalitesEstimationPrudentielle: IModalitesEstimationGarantie;
        motifEstimationPrudentielle: IMotifEstimationGarantie;
        definitionObjetGarantie: IDefinitionObjetGarantie;
        constructor(garantieApplicable: IGarantieApplicable, garantieExistante: RestGaranties.IGarantieExistante, garantieSureteReelle: RestGaranties.IGarantieSureteReelle, descriptionObjetFinance: RestGaranties.IDescriptionObjetFinance, listeParamModaliteMotifEstimation: Array<RestGaranties.IParamModaliteMotifEstimation>, listeMotifsEstimation: Array<RestGaranties.IMotifEstimation>, listeTypologiesInstruction: Array<RestGaranties.ITypologieInstruction>, tocObjetFinanceOrigine: ITypeObjetCommercialGarantie, listePersonneGarant: Array<IPersonneAssurableGarant>, dateTraitement: Date, codeTypeAcces: Commun.Enum.CodeTypeAcces, montantActualiseCreditOrigine: number, listeVersementAttendusGarantie: Array<RestGaranties.IVersementAttendusGarantie>, isVersementsAttendusToAjoutable: boolean);
        isValid(): boolean;
        /**
         * Dans le cas de la présence d'une numéro de compte, l'enregistrement est possible uniquement s'il est valide
         */
        private isValidNumeroCompte();
        /**
         * Dans le cas de la présence d'une adresse, l'enregistrement est possible uniquement si elle est valide
         */
        private isValidAdresse();
        /**
         * Un avenant d'objet entraine la modification des garanties
         * @param infoObjet : données de la page de l'avenant d'objet
         * @param tocObjetFinanceOrigine : nouveau toc lié au nouvel objet
         * @param descriptionObjetFinance : nouvel description de l'objet lié au nouvel objet
         */
        setDataByObjet(infoObjet: IInfoObjet, tocObjetFinanceOrigine: ITypeObjetCommercialGarantie, descriptionObjetFinance: RestGaranties.IDescriptionObjetFinance): void;
        private setDataCessionRangWithNewRangInscription(rangInscriptionHypotheque);
        private setDataListeCessionRang(rangInscriptionHypotheque);
        private getListeCessionRang(rangInscriptionHypotheque);
        private getIsPacteCommissoireModifiable(garantieApplicable);
        private getPacteComissoireSelected(codeValeurPacteCommissoire);
        private getDisabledRbObjetCommercialFinancement(listeObjetCommercial, tocObjetFinanceOrigine);
        /**
         * Initialisation de l'objet porté en garantie
         * ! il faut avoir initialisé les données passées en paramètres
         */
        private getObjetPorteGarantie(codeTypeAcces, garantieSureteReelle, isObjetFinanceIsCreditOrigine, disabledRbObjetCommercialFinancement, showSansObjet);
        /**
         * Suite à la modification de l'objet du financement, il faut valier l'objet de la garantie
         */
        private getObjetPorteGarantieByMajObjet(isObjetFinanceIsSelected, disabledRbObjetCommercialFinancement, showSansObjet);
        private getMontantGarantie(capitalCouvertGarantie, pourcentageCreditCouvert, montantActualiseCredit);
        /**
         *  Génération de la liste des modaliés propre à chaque estimation (association des mofti à chacune des modalités)
         * @param typeEstimation: V pour vénale et P pour prudentielle
         */
        private getListeModaliteEstimation(typeEstimation, listeParamModaliteMotifEstimation, listeTypologieInstruction, listeMotifEstimation);
        private getModalitesEstimation(liste, codeModalites);
        /**
         * Obtention du motif d'estimation à positionner
         */
        private getMotifEstimation(liste, codeMotif);
        private getObjetCommercialAutre(objetPorteGarantie, listeObjetCommercial, garantieSureteReelle);
        private getDefinitionObjetGarantie(objetPorteGarantie, garantieSureteReelle, descriptionObjetFinance, listeTypologiesInstruction, objetCommercialAutre);
        /**
         * Génération d'un objet reprenant des informations non utilisées mais nécéssaire pour l'enregistrement des données
         */
        private getDataPassePlat(g);
        /**
         * Initialisation des données estimation par défaut ou suite à un changement de l'objet porté en garantie
         * @param initialisation: signifie que c'est le chargement de la garantie en place
         * @param isCreationInit: toujours initialiser les listes modalites et motif à "Reprise"
         */
        private setDataEstimation(objetPorteGarantie, initialisation, isCreationInit, garantieSureteReelle, descriptionObjetFinance);
    }
}

declare module Avenants.Business.Modeles {
    interface IGarantieSureteReelle {
        commentaire: string;
        isCommentaireRequired: boolean;
        dataListeObjetCommercial: Array<ITypeObjetCommercialGarantie>;
        objetCommercialFinancement: ITypeObjetCommercialGarantie;
        disabledRbObjetCommercialFinancement: boolean;
        showListeObjetCommercialAutre: boolean;
        objetCommercialAutre: ITypeObjetCommercialGarantie;
        showRbObjetCommercialSans: boolean;
        objetPorteGarantie: Enum.ObjetPorteGarantie;
        showGarant: boolean;
        garant: IPersonneAssurableGarant;
        showPacteCommissoire: boolean;
        isPacteCommissoireModifiable: boolean;
        pacteCommissoire: boolean;
        showRangInscriptionHypotheque: boolean;
        isRangInscriptionHypothequeModifiable: boolean;
        rangInscriptionHypotheque: number;
        dataListeCessionRang: Array<Commun.Enum.CessionRangGarantie>;
        cessionRang: Commun.Enum.CessionRangGarantie;
        montantGarantie: number;
        showMontantHypothequeRangAnterieur: boolean;
        montantHypothequeRangAnterieur: number;
        showDureeInscriptionHypothecaire: boolean;
        dureeInscriptionHypothecaire: number;
        dataPassePlat: IGarantieSureteReellePassePlat;
        showEstimationObjet: boolean;
        disabledEstimationObjet: boolean;
        montantEstimationVenale: number;
        dateEstimationVenale: Date;
        dataListemodalitesEstimationVenale: Array<IModalitesEstimationGarantie>;
        modalitesEstimationVenale: IModalitesEstimationGarantie;
        motifEstimationVenale: IMotifEstimationGarantie;
        montantEstimationPrudentielle: number;
        dateEstimationPrudentielle: Date;
        dataListemodalitesEstimationPrudentielle: Array<IModalitesEstimationGarantie>;
        modalitesEstimationPrudentielle: IModalitesEstimationGarantie;
        motifEstimationPrudentielle: IMotifEstimationGarantie;
        definitionObjetGarantie: IDefinitionObjetGarantie;
        setDataByObjet(infoObjet: IInfoObjet, tocObjetFinanceOrigine: ITypeObjetCommercialGarantie, descriptionObjetFinance: Rest.Modeles.DossierCreditAvenant.Garanties.IDescriptionObjetFinance): void;
        isValid(): boolean;
    }
    /**
     * Données non modifiées
     */
    interface IGarantieSureteReellePassePlat {
        descriptionLObjet7: string;
        identifiantGarantie1: string;
        libelleLongVilleConservHypo: string;
        datePublication: string;
        libelleLongReferenceVolume: string;
        numeroVolume: number;
        mtHypothequeDisponible: number;
        dateMontantHypoDisponible: string;
        codeGarantieRechargeableExterne: string;
        codePresenceServiceObjet: string;
        codeDevise: string;
        codeDeviseGarantie: string;
        typologieLObjet: string;
    }
    interface ITypologieInstruction {
        type: string;
        code: string;
        libelleLong: string;
    }
}

declare module Avenants.Business.Modeles {
    interface IModalitesEstimationGarantie {
        type: string;
        code: string;
        libelleLong: string;
        listeMotifEstimation: Array<IMotifEstimationGarantie>;
    }
    interface IMotifEstimationGarantie {
        code: string;
        libelleLong: string;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class ModalitesEstimationGarantieBuilder {
        static getResult(listeParamByCode: Array<RestGaranties.IParamModaliteMotifEstimation>, listeTypologieInstruction: Array<RestGaranties.ITypologieInstruction>, listeMotif: Array<RestGaranties.IMotifEstimation>): IModalitesEstimationGarantie;
        private static getListeMotifEstimation(listeParam, listeMotif);
        private static getMotifEstimation(m);
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class ConfigFsdga4Builder {
        static getResult(masqueDefinitionObjet: Enum.MasqueDefinitionObjetGarantie, codeTypologieLObjet: string, g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): IConfigFsdga4;
    }
    class ConfigFsdga4Helper {
        static getDateExtinctionBail(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): Date;
        static getTitreGereEtablissement(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): boolean;
        static getNomGerant(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): string;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class ConfigFsdgacBuilder {
        static getResult(masqueDefinitionObjet: Enum.MasqueDefinitionObjetGarantie, g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): IConfigFsdgac;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class ConfigFsdgadBuilder {
        static getResult(masqueDefinitionObjet: Enum.MasqueDefinitionObjetGarantie, g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): IConfigFsdgad;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class ConfigFsdgaeBuilder {
        static getResult(masqueDefinitionObjet: Enum.MasqueDefinitionObjetGarantie, codeTypologieLObjet: string, g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance, listeVersementAttendusObjet: Array<RestGaranties.IVersementAttendusGarantie>, isVersementsAttendusToAjoutable: boolean): IConfigFsdgae;
    }
    class ConfigFsdgaeHelper {
        static getEtablissement(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): string;
        static getDateNaissance(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): Date;
        static getNomCompagnieAssurance(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): string;
        static getSirenCompagnieAssurance(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): string;
        static getNumeroContrat(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): string;
        static getNomContrat(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): string;
        static getIsWithVersementsAttendusAutorises(g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance): boolean;
    }
}

declare module Avenants.Business.Modeles {
    import RestGaranties = Avenants.Rest.Modeles.DossierCreditAvenant.Garanties;
    class ConfigFsdgae implements IConfigFsdgae {
        showReferenceUnEtablissement: boolean;
        etablissement: string;
        showReferenceUnDateNaissance: boolean;
        dateNaissance: Date;
        showReferenceDeuxNumCompte: boolean;
        showReferenceDeuxNumeroContrat: boolean;
        numeroContrat: string;
        showDescriptionCinqNomContrat: boolean;
        nomContrat: string;
        showDescriptionUnDeuxCompagnieAssurance: boolean;
        nomCompagnieAssurance: string;
        sirenCompagnieAssurance: string;
        isWithVersementsAttendusAutorises: boolean;
        isVersementsAttendusToAjoutable: boolean;
        listeVersementsAttendusStock: Array<IVersementAttendu>;
        listeVersementsAttendusBeforeEdit: Array<IVersementAttendu>;
        listeVersementsAttendusAvailables: Array<IVersementAttendu>;
        constructor(codeTypologieLObjet: string, g: RestGaranties.IGarantieSureteReelle, isDefinitionObjetFinance: boolean, d: RestGaranties.IDescriptionObjetFinance, listeVersementAttendusObjet: Array<RestGaranties.IVersementAttendusGarantie>, isVersementsAttendusToAjoutable: boolean);
    }
}
