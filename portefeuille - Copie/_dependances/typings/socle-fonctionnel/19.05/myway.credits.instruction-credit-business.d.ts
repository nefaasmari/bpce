
declare module ICBusiness {
    var app: any;
}

declare namespace ICBusiness.Constantes.Ascii {
    namespace Caractere {
        const space: number;
    }
    /**
     * Code ascii des caractères numériques
     */
    namespace Nombre {
        const zero: number;
        const un: number;
        const deux: number;
        const trois: number;
        const quatre: number;
        const cinq: number;
        const six: number;
        const sept: number;
        const huit: number;
        const neuf: number;
    }
    /**
     * Code ascii des lettres
     */
    namespace Lettre {
        const A: number;
        const B: number;
        const C: number;
        const D: number;
        const E: number;
        const F: number;
        const G: number;
        const H: number;
        const I: number;
        const J: number;
        const K: number;
        const L: number;
        const M: number;
        const N: number;
        const O: number;
        const P: number;
        const Q: number;
        const R: number;
        const S: number;
        const T: number;
        const U: number;
        const V: number;
        const W: number;
        const X: number;
        const Y: number;
        const Z: number;
        const a: number;
        const b: number;
        const c: number;
        const d: number;
        const e: number;
        const f: number;
        const g: number;
        const h: number;
        const i: number;
        const j: number;
        const k: number;
        const l: number;
        const m: number;
        const n: number;
        const o: number;
        const p: number;
        const q: number;
        const r: number;
        const s: number;
        const t: number;
        const u: number;
        const v: number;
        const w: number;
        const x: number;
        const y: number;
        const z: number;
    }
}

declare namespace ICBusiness.Constantes {
    /**
     * Namespace de constantes contenant les identifiants des classes pour les appels ListerConstantes, MajElement et MajElements
     */
    namespace ClasseNeo {
        /**
         * Identifiant de classe pour la mise à jour des charges
         */
        const chargeMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des crédits existants
         */
        const creditExistantMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des familles épargnes
         */
        const familleEpargneMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des phases
         */
        const phaseCreditExistantMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des ressources
         */
        const ressourceMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des revenus fiscaux
         */
        const revenuFiscalMaj: string;
        /**
         * Identifiant de classe pour la liste des constantes de statut d'occupation logement
         */
        const statutOccupationLogement: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Credit {
        /**
         * Code de produit CE
         */
        const codeProduitCE: number;
        /**
         * Code d'investissement pour usage locatif
         */
        const codeAucunePresenceInvestissementUsageLocatif: number;
        const codePresenceInvestissementUsageLocatif: number;
        /**
         * Code Type revenu ménage => Revenu annuel déclaré à N-2 (49)
         */
        const codeTypeRevenuMenage: number;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Data {
        /**
         * Employeur commun
         */
        const commonEmployerLabelList: Models.Common.ICodeLabel<number>[];
        /**
         * Crédit existant : types de crédit
         */
        const creditTypesList: Models.Common.ICodeLabel<Models.Emprunteur.EnumTypeCredit>[];
        /**
         * Crédit existant : motifs de remboursement anticipé
         */
        const prepaymentMotivesList: Models.Common.ICodeLabel<string>[];
        /**
         * Phase : périodicités
         */
        const phasePeriodicitiesList: Models.Common.ICodeLabel<string>[];
        /**
         * Phase : types de phase
         */
        const phaseTypesList: Models.Common.ICodeLabel<string>[];
        /**
         * Renvoie la liste des statuts de ressource
         * @param masculine
         * @param future
         */
        function getListeStatutRessource(masculine: boolean, future?: boolean): Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[];
    }
}

declare namespace ICBusiness.Constantes {
    namespace Emprunteur {
        /**
         * Rôles Emprunteur/Personne
         */
        const typeRolePersonneCaution: Models.Common.ICodeLabel<string>;
        const typeRolePersonneEmprunteur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneCoEmprunteur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneVendeur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneProprietaire: Models.Common.ICodeLabel<string>;
        const typeRolePersonneHuissier: Models.Common.ICodeLabel<string>;
        const typeRolePersonnePayeur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneOrganismeSignataire: Models.Common.ICodeLabel<string>;
        const typeRolePersonneCaf: Models.Common.ICodeLabel<string>;
        const typeRolePersonneRedacteur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneBeneficiaireVersement: Models.Common.ICodeLabel<string>;
        const typeRolePersonneDirigeant: Models.Common.ICodeLabel<string>;
        const typeRolePersonneRepresentant: Models.Common.ICodeLabel<string>;
        /**
         * Liste de tous les rôles personne
         */
        const listeTypesRolePersonne: Array<Models.Common.ICodeLabel<string>>;
        /**
         * Liste des rôles personne répresentant
         */
        const listeTypesRolesPersonneRepresentant: Models.Common.ICodeLabel<string>[];
        /**
         * Codes de présence d'activités salariales
         * 78 => non
         * 79 => oui
         */
        const codeAucunePresenceActiviteSalariale: number;
        const codePresenceActiviteSalariale: number;
        /** Code d'affichage de l'employeur commun */
        const codeAffichageEmployeurCommun: string;
    }
}

declare namespace ICBusiness.Constantes {
    /***
     * Namespace de constantes contenant les identifiants des listes pour appel ListerConstantes
     */
    namespace ListeConstantes {
        /**
         * Type de transport (e.g. "Transport en commun")
         */
        const typeTransport: string;
        /**
         * Periodicité MyWay (e.g. "Mensuelle")
         */
        const periodicite: string;
        /**
         * Motifs (e.g. Assurances : attente de piece ou d'accord)
         */
        const motif: string;
        /**
         * Role (e.g. dirigeant)
         */
        const role: string;
        /**
         * Type de crédit (e.g. Habitat)
         */
        const typeCredit: string;
        /**
         * Secteur (e.g. Privé)
         */
        const secteur: string;
        /**
         * Type de propriétaire (e.g. Pleine propriété)
         */
        const typeProprietaire: string;
        /**
         * Reamenagement
         */
        const reamenagement: string;
        /**
         * Type assiette (e.g. Montant Emprunté)
         */
        const typeAssiette: string;
        /**
         * Destinataire du bien (e.g. Locatif principal)
         */
        const destinataireBien: string;
        /**
         * Type echelle (e.g. Spécifique établissement)
         */
        const typeEchelle: string;
        /**
         * Type echelle complementaire (e.g. Déblocage des fonds)
         */
        const typeEchelleComplementaire: string;
        /**
         * Pacte comissoire (Oui/Non)
         */
        const pacteComissoire: string;
        /**
         * Mise en oeuvre (e.g. Prix du marché de gros oeuvre non signé)
         */
        const miseEnOeuvre: string;
        /**
         * Lieu de résidence (e.g. Métropole)
         */
        const lieuResidence: string;
        /**
         * Technique de vente (e.g. Démarchage)
         */
        const techniqueVente: string;
        /**
         * Type de technique de vente (e.g. Vente à distance)
         */
        const typeTechniqueVente: string;
        /**
         * Type de vente (e.g. Mandat)
         */
        const typeVente: string;
        /**
         * Nature de garantie (e.g. Garantie hypothécaire)
         */
        const natureGarantie: string;
        /**
         * Nature travaux eco PTZ (e.g. Atteinte d'une performance globale)
         */
        const natureTravauxEcoPtz: string;
        /***
         * Type loi scrivener (e.g. Loi conso)
         */
        const typeLoiScrivener: string;
        /**
         * Origine de la demande  (e.g. Campagne commerciale)
         */
        const origineDemande: string;
        /**
         * Envoi mail/sms (e.g. Envoi par mail)
         */
        const envoiMailSms: string;
        /**
         * Type assiette calcul accessorie (e.g. Capital initial avec quotité)
         */
        const typeAssietteCalcAccessoire: string;
        /**
         * Type de phase (crédit) (e.g. Amortissement)
         */
        const typePhaseCredit: string;
        /**
         * Canal de distribution (e.g. Téléphone Sortant)
         */
        const canalDistribution: string;
        /**
         * Type de critère (e.g. Echéance maxi)
         */
        const typeCritere: string;
        /**
         * Type de contrat (e.g. Contrat de construction de maison individuelle ou d'architecte)
         */
        const typeContrat: string;
        /**
         * Type de contrat EMBC (e.g. Titulaire)
         */
        const typeContratEmbc: string;
        /**
         * Lien entre personnes (e.g. Concubin)
         */
        const lienEntrePersonnes: string;
        /**
         * Mode d'acquisition du bien (e.g. Don, Héritage, Donation)
         */
        const modeAcquisitionBien: string;
        /**
         * Type de marché (e.g. Porteur)
         */
        const typeMarche: string;
        /**
         * Mode d'évaluation (e.g. Etroit)
         */
        const modeEvaluation: string;
        /**
         * Mode financier (e.g. Groupe)
         */
        const modeFinancier: string;
        /**
         * Capacité juridique (e.g. Capable)
         */
        const capaciteJuridique: string;
        /**
         * Nationalite (e.g. Etranger U.E)
         */
        const nationalite: string;
        /**
         * Type de risque (e.g. Risque simple)
         */
        const typeRisque: string;
    }
}

declare namespace ICBusiness.Constantes.Inject {
    namespace Services {
        const constantesService: string;
        const creditParametreService: string;
        const dossierService: string;
        const dossierSchemaService: string;
        const emprunteurService: string;
        const personneService: string;
        const revenuChargeService: string;
        const surfaceFinanciereService: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Parametres {
        /**
         * Valeur d'activation des adresses paramètre rubrique
         */
        const valeurActivationAdressePramametreRubrique: number;
        /**
         * Identifiants des constantes
         */
        const identifiantStatutRessource: string;
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Code des page passé dans le contexte vers laquelle il faut rediriger
     */
    enum CodePageEnum {
        synthese = 1,
        client = 2,
        projet = 3,
        financement = 4,
        assurances = 5,
        garanties = 6,
        gestionAdmin = 7,
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Les états du dossier
     */
    enum EtatDossier {
        /** P */
        PropositionCommerciale,
        /** D */
        DemandeDeCredit,
        /** O */
        OffreCommerciale,
    }
    /**
     *  Les sous états du dossier
     */
    enum SousEtatDossier {
        /** P */
        PropositionCommerciale,
        /** A */
        PropositionCommercialeAutre,
        /** B */
        Montage,
        /** C */
        Decision,
        /** D */
        Edition,
        /** E */
        Remise,
        /** G */
        OffreEnAttenteSignature,
        /** H */
        OffreSigneeDelaiRetractation,
        /** I */
        OffreConclue,
        /** V */
        DemandeCreditSansSuite,
        /** W */
        PropositionCommercialeSansSuite,
        /** X */
        OffreSansSuite,
    }
}

declare namespace ICBusiness.Rules {
    interface INavigationService {
        goToSynthese(idDossier: string, dateInstruction?: string, pourleCompteDe?: string): void;
        goToClient(idDossier: string, dateInstruction?: string, pourleCompteDe?: string): void;
        goToProjet(idDossier: string, dateInstruction?: string, pourleCompteDe?: string): void;
        goToFinancement(idDossier: string, dateInstruction?: string, pourleCompteDe?: string): void;
        goToGestionAdmin(idDossier: string, dateInstruction?: string, pourleCompteDe?: string): void;
        goToGarantie(idDossier: string, dateInstruction?: string, pourleCompteDe?: string): void;
        goToAssurance(idDossier: string, dateInstruction?: string, pourleCompteDe?: string): void;
    }
}

declare namespace ICBusiness.Rules {
    class RequiredRule<T> implements IValidationRule {
        private value;
        constructor(value: () => T);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    interface IValidationRuleResult {
        isValid: boolean;
        messages: string[];
    }
    interface IValidationRule {
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class ValidationRulesEvaluator implements IValidationRule {
        private rules;
        constructor(rules: IValidationRule[]);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Tools {
    class CodeLabel {
        /**
         * transform any object to ICodeLabel
         * @param obj the obj to map code and label
         * @param codeMapper delegate mapper
         * @param labelMapper delegate mapper
         */
        static toCodeLabel<T extends string | number, U>(obj: U, codeMapper: (obj: U) => T, labelMapper: (obj: U) => string): Models.Common.ICodeLabel<T>;
    }
}

declare namespace ICBusiness.Models.Common {
    /**
     * Model describing the AFNOR standard
     */
    interface IAddress {
        /**
         * Recipient civility : title or quality, firstname and surname
         */
        row1: string;
        /**
         * Interior complement : Apartment number or letterbox, floor, corridor and/or stair
         */
        row2: string;
        /**
         * Exterior complemet : entrance, building and/or residence
         */
        row3: string;
        /**
         * Number and name of the street
         */
        row4: string;
        /**
         * Lieu dit
         */
        row5: string;
        /**
         * Postal code and city
         */
        row6: string;
    }
}

declare namespace ICBusiness.Models.Common {
    interface ICodeLabel<T extends string | number> {
        code: T;
        label: string;
        customObject?: Object;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IDossierSchema {
        idDossier: string;
        etat: EnumEtatDossier;
        sousEtat: EnumSousEtatDossier;
        idEmprunteur: string;
    }
}

declare namespace ICBusiness.Models.Dossier {
    enum EnumEtatDossier {
        /** 80 => ascii P */
        PropositionCommerciale = 80,
        /** 68 => ascii D */
        DemandeDeCredit = 68,
        /** 79 => ascii O */
        OffreCommerciale = 79,
    }
    enum EnumSousEtatDossier {
        /** 80 => ascii P */
        PropositionCommerciale = 80,
        /** 65 => ascii A */
        PropositionCommercialeAutre = 65,
        /** 66 => ascii B */
        Montage = 66,
        /** 67 => ascii C */
        Decision = 67,
        /** 68 => ascii D */
        Edition = 68,
        /** 69 => ascii E */
        Remise = 69,
        /** 71 => ascii G */
        OffreEnAttenteSignature = 71,
        /** 72 => ascii H */
        OffreSigneeDelaiRetractation = 72,
        /** 85 => ascii U */
        OffreConclue = 85,
        /** 86 => ascii V */
        DemandeCreditSansSuite = 86,
        /** 87 => ascii W */
        PropositionCommercialeSansSuite = 87,
        /** 88 => ascii X */
        OffreSansSuite = 88,
    }
}

declare namespace ICBusiness.Models.Emprunteur {
    interface IEmprunteur {
        id: string;
        denomination: string;
        estRattache: boolean;
        categorieEmprunteur: Common.ICodeLabel<string>;
        personneMorale: IPersonneMorale;
        personnesPhysique: Array<IPersonnePhysique>;
        garants: Array<IGarant>;
        nombrePersonnes: number;
        nombreEnfantsACharge: number;
        ageDesEnfants: number[];
        nombrePersonnesSupplementairesACharge: number;
        statutOccupationLogementActuel: Common.ICodeLabel<number>;
        conditionPrimoAccedantPtz: Common.ICodeLabel<number>;
    }
    enum EnumGenre {
        Aucun = 65,
        Feminin = 70,
        Masculin = 77,
    }
    enum EnumTypeEntite {
        Client = 67,
        Prospect = 80,
        Tiers = 84,
    }
    interface IPersonne {
        idws: string;
        typeEntite: EnumTypeEntite;
        intitule: string;
        identifiant: string;
        estPhysique: boolean;
    }
    interface IPersonnePhysique extends IPersonne {
        genre: EnumGenre;
        nomJeuneFille: string;
        dateNaissance: string;
        identifiantActivite: string;
    }
    interface IPersonneMorale extends IPersonne {
    }
    interface IGarant {
        personne: IPersonnePhysique | IPersonneMorale;
    }
    interface IDetailPersonnePhysique extends IPersonnePhysique {
        dateEffetSituationFamiliale: string;
        dateEntreeLogement: string;
        libelleCapaciteJuridique: string;
        libelleLieuResidence: string;
        libelleModeLogement: string;
        libelleRoleRepresentant: string;
        libelleSituationFamiliale: string;
        libelleTypeNationalite: string;
        email: string;
        telephoneFixe: string;
        telephonePortable: string;
        telephoneProfessionnel: string;
        employeurCommun: Models.Common.ICodeLabel<number>;
        activite: IActivite;
        adresse: Common.IAddress;
    }
    interface IActivite {
        codePostalEmployeur: string;
        dateEffetCategorieSocioProfessionnelle: string;
        dateEmbauche: string;
        dateFinCdd: string;
        estSalarie: boolean;
        idws: string;
        libelleCategorieSocioProfessionnelle: string;
        libelleSecteurActivite: string;
        libelleTypeContrat: string;
        nombreKilometreLogementTravail: number;
        raisonSocialeEmployeur: string;
    }
}

declare namespace ICBusiness.Models.Emprunteur {
    /**
     * P(80): Conservé - A(65): Non conservé - F(70): Futur
     */
    enum EnumBudgetStatus {
        conserve = 80,
        nonConserve = 65,
        futur = 70,
    }
    /**
     * E(69) : Emprunteur - C(67) : Garant
     */
    enum EnumRolePersonneCredit {
        emprunteur = 69,
        garant = 67,
    }
    /**
     * 1 : Consommation - 2 : Trésorerie - 3 : Habitat - Revolving : 9
     */
    enum EnumTypeCredit {
        consommation = 1,
        tresorerie = 2,
        habitat = 3,
        revolving = 9,
    }
    interface IBudgetItem {
        id: string;
        type: Models.Common.ICodeLabel<string>;
        personne: Models.Common.ICodeLabel<string>;
        montantMensuel: number;
        montantPeriodique: number;
        montantAnnuel: number;
        nombrePeriodeParAn: number;
        tauxPondere: number;
        status: Models.Common.ICodeLabel<EnumBudgetStatus>;
        codeDevise: string;
        estCreditExistant: boolean;
        estRevenu: boolean;
        phaseIds?: string[];
    }
    interface ICreditExistant {
        dateDebutAmortissement: string;
        dureeAmortissement: number;
        estInvestissementUsageLocatif: boolean;
        estProduitCE: boolean;
        id: string;
        investissementUsageLocatifVisible: boolean;
        labelPreteur: string;
        montantEmprunte: number;
        montantRestantDu: number;
        motifRemboursementAnticipe: Models.Common.ICodeLabel<string>;
        nombreImpayes: number;
        nombreRegularises: number;
        numeroCredit: string;
        rolePersonne: EnumRolePersonneCredit;
        type: Models.Common.ICodeLabel<EnumTypeCredit>;
        phases: IPhase[];
    }
    interface IPhase {
        dateDebut: string;
        dateFin: string;
        duree: number;
        id: string;
        montantEcheance: number;
        periodicite: Models.Common.ICodeLabel<string>;
        type: Models.Common.ICodeLabel<string>;
        isOpened: boolean;
    }
    interface IRevenuFiscal {
        id: string;
        label: string;
        montantAnnuel: number;
        type: number;
        codeDevise: string;
    }
    interface ISyntheseFinanciere {
        revenusAnnuels: number;
        revenusMensuels: number;
        chargesAnnuels: number;
        chargesMensuels: number;
        ratioResteAVivre: number;
        resteAVivreMensuel: number;
        ratioEndettement: number;
        indiceResteAVivre: number;
    }
    interface IRevenusCharges {
        revenus: IBudgetItem[];
        charges: IBudgetItem[];
        totalRevenusMensuelsHorsFutur: number;
        totalChargesMensuellesHorsFuture: number;
        revenusFiscaux: IRevenuFiscal[];
        syntheseFinanciere: ISyntheseFinanciere;
    }
}

declare namespace ICBusiness.Models.Emprunteur {
    interface ICompte {
        idws: string;
        label: string;
        labelPersonne: string;
        type: string;
        dateOuverture: string;
    }
    interface IEpargne {
        id: string;
        type: string;
        label: string;
        labelEtablissement: string;
        personne: Models.Common.ICodeLabel<string>;
        dateValorisation: string;
        montantAvantOperation: number;
        montantApresOperation: number;
        montantApport: number;
        estProduitCE: boolean;
        codeDevise: string;
    }
    interface IDetailSyntheseEpargne {
        totalEpargneContractuelle: number;
        partEpargneLogement: number;
        capaciteMensuelleEpargneAvantOperation: number;
        totalEpargneLiquide: number;
    }
    interface IPatrimoineEmprunteur {
        valeurPatrimoineImmobilier: number;
        montantPatrimoineMobilier: number;
    }
    interface ISurfaceFinanciere {
        comptesCeEmprunteurs: Array<ICompte>;
        comptesHorsCeEmprunteurs: Array<ICompte>;
        comptesCeGarants: Array<ICompte>;
        comptesHorsCeGarants: Array<ICompte>;
        epargnesCeEmprunteurs: Array<IEpargne>;
        epargnesHorsCeEmprunteurs: Array<IEpargne>;
        epargnesCeGarants: Array<IEpargne>;
        epargnesHorsCeGarants: Array<IEpargne>;
        detailSynthese: IDetailSyntheseEpargne;
        patrimoine: IPatrimoineEmprunteur;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.LireElement;
    class Address {
        static mapAddress(personne: RestModel.IPersonnePhysiqueLecture): Models.Common.IAddress;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Date {
        /**
         * Retourne null si l'annee est 0001 ou 1901
         * @param dateNeo
         */
        static mapDate(dateNeo: string): string;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Emprunteur {
        static mapEmprunteur(emp: RestModel.SchemaComplet.IEmprunteurComplet): Models.Emprunteur.IEmprunteur;
        private static extractPersonneMoraleEmprunteur(emp);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Personne {
        static estGarante(personne: RestModel.SchemaComplet.IPersonneComplet): boolean;
        static estMorale(personne: RestModel.SchemaComplet.IPersonneComplet): boolean;
        static estPhysique(personne: RestModel.SchemaComplet.IPersonneComplet): boolean;
        /**
         * Construit l'intitulé d'une personne Physique OU Morale
         * @param personne
         */
        static getIntitule(personne: RestModel.SchemaComplet.IPersonneComplet | RestModel.LireElement.IPersonnePhysiqueLecture): string;
        static mapActivite(activite: RestModel.LireElement.IActiviteLecture): Models.Emprunteur.IActivite;
        static mapDetailPersonnePhysique(personne: RestModel.LireElement.IPersonnePhysiqueLecture, activite: RestModel.LireElement.IActiviteLecture, emprunteur: RestModel.LireElement.IEmprunteurLecture): Models.Emprunteur.IDetailPersonnePhysique;
        static mapGarant(personne: RestModel.SchemaComplet.IPersonneComplet): Models.Emprunteur.IGarant;
        static mapPersonneMorale(personne: RestModel.SchemaComplet.IPersonneMoraleComplet): Models.Emprunteur.IPersonneMorale;
        static mapPersonnePhysique(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet): Models.Emprunteur.IPersonnePhysique;
        private static getLibelleRoleRepresentant(rolesPersonnePourDossier);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.SchemaComplet;
    type IChargeMaj = ICRest.Modeles.AjouterCharge.IChargeMaj | ICRest.Modeles.MajElement.IChargeMaj;
    type ICreditExistantLecture = ICRest.Modeles.AjouterPhaseCreditExistant.ICreditExistantLecture | ICRest.Modeles.LireElement.ICreditExistantLecture;
    type IPhaseCreditExistantLecture = ICRest.Modeles.AjouterPhaseCreditExistant.IPhaseCreditExistantLecture | ICRest.Modeles.LireElement.IPhaseCreditExistantLecture;
    type IRessourceMaj = ICRest.Modeles.AjouterRessource.IRessourceMaj | ICRest.Modeles.MajElement.IRessourceMaj;
    class RevenusCharges {
        static mapChargeMaj(charge: Models.Emprunteur.IBudgetItem): IChargeMaj;
        static mapCreditExistant(creditExistant: ICreditExistantLecture, phases: IPhaseCreditExistantLecture[]): Models.Emprunteur.ICreditExistant;
        static mapCreditExistantMaj(charge: Models.Emprunteur.IBudgetItem, creditExistant: Models.Emprunteur.ICreditExistant): ICRest.Modeles.MajElement.ICreditExistantMaj;
        static mapPhaseCreditExistantMaj(phase: Models.Emprunteur.IPhase): ICRest.Modeles.MajElement.IPhaseCreditExistantMaj;
        static mapRessourceMaj(revenu: Models.Emprunteur.IBudgetItem): IRessourceMaj;
        static mapRevenuFiscal(revenuFiscalLecture: ICRest.Modeles.LireElement.IRevenuFiscalLecture): Models.Emprunteur.IRevenuFiscal;
        static mapRevenuFiscalMaj(revenuFiscal: Models.Emprunteur.IRevenuFiscal): ICRest.Modeles.MajElement.IRevenuFiscalMaj;
        static mapRevenusCharges(emp: RestModel.IEmprunteurComplet, endettement: ICRest.Modeles.Endettement.IEndettement): Models.Emprunteur.IRevenusCharges;
        static mapSyntheseFinanciere(endettement: ICRest.Modeles.Endettement.IEndettement): Models.Emprunteur.ISyntheseFinanciere;
        private static getCreditTypeByCode(code);
        private static getPeriodiciteByCode(code);
        private static getPhaseTypeByCode(code);
        private static getPersonnePhysiqueById(listePersonnes, id);
        private static getStatusByCode(code, masculine);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class SurfaceFinanciere {
        static mapDetailEpargne(epargne: Models.Emprunteur.IEpargne, epargneLecture: RestModel.LireElement.IFamilleEpargneLecture): Models.Emprunteur.IEpargne;
        static mapFamilleEpargneMaj(epargne: Models.Emprunteur.IEpargne): RestModel.AjouterFamilleEpargne.IFamilleEpargneMaj;
        static mapSurfaceFinanciere(emp: RestModel.SchemaComplet.IEmprunteurComplet): Models.Emprunteur.ISurfaceFinanciere;
        private static filtrerCompte(compte);
        private static isCe(element);
        private static mapCompte(compte, emp);
        private static mapDetailSyntheseEpargne(emp);
        private static mapEpargne(epargne, emp);
        private static mapPatrimoineEmprunteur(emp);
        private static getPersonnePhysiqueById(listePersonnes, id);
    }
}

declare namespace ICBusiness.Services.CreditParametre {
    interface ICreditParametreService {
        /**
         * Renvoie vrai si l'adresse paramètre rubrique existe pour une application donnée
         * @param dateDeTraitement
         * @param codeApplication
         * @param codeParametre
         */
        existsAdresseParametreRubrique(dateDeTraitement: string, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        /**
         * Renvoie la liste des catégories d'emprunteur
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        getListeCategoriesEmprunteurs(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des devises
         * @param codeEtablissement
         * @param dateDeTraitement
         */
        getListerDevises(codeEtablissement: number, dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des libellés pour Employeur commun
         */
        getListeLibelleEmployeurCommun(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Renvoie la liste des motifs pour remboursement anticipé
         */
        getListeMotifRemboursementAnticipe(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des périodicités de phase
         */
        getListePeriodicitePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListePrimoAccedant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeStatutOccupationLogement(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Renvoie la liste des statuts de ressource
         * @param masculine
         * @param future
         */
        getListeStatutRessource(masculine: boolean, future?: boolean): ng.IPromise<Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[]>;
        /**
         * Renvoie la liste des types de charges
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        getListeTypeCharge(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des types de crédit existant
         */
        getListeTypeCreditExistant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Renvoie la liste des types de phase
         */
        getListeTypePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des types de ressources
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        getListeTypeRessource(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des constantes
         * @param dateDeTraitement
         * @param codeConstante L' [[identifiant-listes-constantes]] recherché
         */
        getListeConstantes(dateDeTraitement: string, codeConstante: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
    }
    class CreditParametreService implements ICreditParametreService {
        private $q;
        private creditParametreService;
        static $inject: Array<string>;
        private _listeTypeCharge;
        private _listeTypeRessource;
        constructor($q: ng.IQService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService);
        existsAdresseParametreRubrique(dateDeTraitement: string, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        getListeCategoriesEmprunteurs(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListerDevises(codeEtablissement: number, dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeLibelleEmployeurCommun(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeMotifRemboursementAnticipe(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListePeriodicitePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListePrimoAccedant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeStatutOccupationLogement(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeStatutRessource(masculine: boolean, future?: boolean): ng.IPromise<Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[]>;
        getListeTypeCharge(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeCreditExistant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeTypePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeRessource(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Récupère la liste des constantes demandée.
         * @param dateDeTraitement Date de traitement du dossier
         * @param codeConstante Code de la constance recherchée (cf. ICBusiness.Constantes.ListeConstantes)
         */
        getListeConstantes(dateDeTraitement: string, codeConstante: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        private transformCategorieEmprunteur(categorie);
        private transformDevise(devise);
        private transformTypeCharge(typeCharge);
        private transformTypeRessource(typeRessource);
        private transformConstante(constante);
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IConstantesService {
        /**
         * Renvoie la liste des statuts d'occupation logement
         * @param identifiantDossier
         */
        getListeStatutOccupationLogement(identifiantDossier: string, conditionDerogatoirePtz: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
    }
    class ConstantesService {
        private constantesService;
        static $inject: Array<string>;
        constructor(constantesService: ICRest.Services.Dossier.IConstantesService);
        getListeStatutOccupationLogement(identifiantDossier: string, conditionDerogatoirePtz: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        private transformScConstante(constante);
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IDossierShemaService {
        /**
         * Get a representation of the "dossier instruction"
         * @param idDossier
         */
        getDossierSchema(idDossier: string): ng.IPromise<Models.Dossier.IDossierSchema>;
    }
    class DossierSchemaService implements IDossierShemaService {
        private elementService;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.IElementService);
        getDossierSchema(idDossier: string): ng.IPromise<Models.Dossier.IDossierSchema>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IDossierService {
        /**
         * Renvoie le dossier nouvellement créé
         * @param dateDeTraitement
         * @param canalDeCreation
         */
        creerDossier(dateDeTraitement: string, canalDeCreation: string): ng.IPromise<Models.Dossier.IDossierSchema>;
        /**
         * Ferme le dossier, ce dernier est sauvegardé si le paramètre sauvegarde vaut vrai
         * @param identifiantDossier
         * @param sauvegarde
         * @param pourLeCompteDe
         */
        fermerDossier(identifiantDossier: string, sauvegarde: boolean, pourLeCompteDe?: string): ng.IPromise<void>;
    }
    class DossierService implements IDossierService {
        private dossierService;
        static $inject: string[];
        constructor(dossierService: ICRest.Services.Dossier.IDossierService);
        creerDossier(dateDeTraitement: string, canalDeCreation: string): ng.IPromise<Models.Dossier.IDossierSchema>;
        fermerDossier(identifiantDossier: string, sauvegarde: boolean, pourLeCompteDe?: string): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Emprunteur {
    interface IEmprunteurService {
        definirEmprunteur(identifiantDossier: string, identifiantClientBancaire: string): ng.IPromise<void>;
        rafraichirEmprunteur(identifiantDossier: string): ng.IPromise<void>;
        getEmprunteur(idDossier: string): ng.IPromise<Models.Emprunteur.IEmprunteur>;
        getRevenusCharges(idDossier: string): ng.IPromise<Models.Emprunteur.IRevenusCharges>;
        getSurfaceFinanciere(idDossier: string): ng.IPromise<Models.Emprunteur.ISurfaceFinanciere>;
        /** When activated, getEmprunteur, getRevenusCharges and getSurfaceFinancière will call the REST service once  */
        activateCache(): void;
        /** Desactivate cache to make call to the REST service */
        desactivateCache(): void;
    }
    class EmprunteurService implements IEmprunteurService {
        private $q;
        private schemaService;
        private dossierService;
        static $inject: string[];
        constructor($q: ng.IQService, schemaService: ICRest.Services.ElementSchema.IElementSchemaService, dossierService: ICRest.Services.Dossier.IDossierService);
        private emprunteurCacheActivated;
        activateCache(): void;
        desactivateCache(): void;
        definirEmprunteur(identifiantDossier: string, identifiantClientBancaire: string): ng.IPromise<void>;
        rafraichirEmprunteur(identifiantDossier: string): ng.IPromise<void>;
        getEmprunteur(idDossier: string): ng.IPromise<Models.Emprunteur.IEmprunteur>;
        getRevenusCharges(idDossier: string): ng.IPromise<Models.Emprunteur.IRevenusCharges>;
        getSurfaceFinanciere(idDossier: string): ng.IPromise<Models.Emprunteur.ISurfaceFinanciere>;
        private cachedEmprunteur;
        private getEmprunteurComplet(idDossier);
    }
}

declare namespace ICBusiness.Services.Emprunteur {
    interface IPersonneService {
        getDetailPersonne(idDossier: string, identifiantEmprunteur: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonnePhysique>;
    }
    class PersonneService implements IPersonneService {
        private $q;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService);
        getDetailPersonne(idDossier: string, identifiantEmprunteur: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonnePhysique>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IRevenuChargeService {
        /**
         * Ajoute au dossier la charge passée en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param charge
         */
        ajouterCharge(identifiantDossier: string, identifiantEmprunteur: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Ajoute une phase au crédit existant passé en paramètre
         * @param identifiantDossier
         * @param identifiantCreditExistant
         * @param phase
         */
        ajouterPhaseCreditExistant(identifiantDossier: string, identifiantCreditExistant: string, phase: Models.Emprunteur.IPhase): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        /**
         * Ajoute au dossier le revenu passé en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param revenu
         */
        ajouterRevenu(identifiantDossier: string, identifiantEmprunteur: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Ajoute au dossier le revenu fiscal passé en paramètre
         * @param identifiantDossier
         * @param revenuFiscal
         */
        ajouterRevenuFiscal(identifiantDossier: string, revenuFiscal: ICBusiness.Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
        /**
         * Renvoie le détail du crédit existant passé en paramètre
         * @param identifiantDossier
         * @param charge
         */
        getDetailCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        /**
         * Renvoie le détail du revenu fiscal passé en paramètre
         * @param identifiantDossier
         * @param revenuFiscal
         */
        getDetailRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<Models.Emprunteur.IRevenuFiscal>;
        /**
         * Met à jour la charge passée en paramètre
         * @param identifiantDossier
         * @param charge
         * @param pourLeCompteDe
         */
        mettreAJourCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Met à jour le crédit existant passée en paramètre
         * @param identifiantDossier
         * @param phase
         * @param pourLeCompteDe
         */
        mettreAJourCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, creditExistant: Models.Emprunteur.ICreditExistant, pourLeCompteDe?: string): ng.IPromise<Models.Emprunteur.IBudgetItem>;
        /**
         * Met à jour la phase passée en paramètre
         * @param identifiantDossier
         * @param phase
         * @param pourLeCompteDe
         */
        mettreAJourPhaseCreditExistant(identifiantDossier: string, phase: Models.Emprunteur.IPhase, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Met à jour le revenu passé en paramètre
         * @param identifiantDossier
         * @param revenu
         * @param pourLeCompteDe
         */
        mettreAJourRevenu(identifiantDossier: string, revenu: Models.Emprunteur.IBudgetItem, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Met à jour le revenu fiscal passé en paramètre
         * @param identifiantDossier
         * @param revenuFiscal
         * @param pourLeCompteDe
         */
        mettreAJourRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Supprime la charge passée en paramètre
         * @param identifiantDossier
         * @param charge
         */
        supprimerCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Supprime la phase passée en paramètre
         * @param identifiantDossier
         * @param phase
         */
        supprimerPhaseCreditExistant(identifiantDossier: string, phase: Models.Emprunteur.IPhase): ng.IPromise<void>;
        /**
         * Supprime le revenu passé en paramètre
         * @param identifiantDossier
         * @param revenu
         */
        supprimerRevenu(identifiantDossier: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Supprime le revenu fiscal passé en paramètre
         * @param identifiantDossier
         * @param revenuFiscal
         */
        supprimerRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
    }
    class RevenuChargeService implements IRevenuChargeService {
        private $q;
        private clientService;
        private creditService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, clientService: ICRest.Services.Dossier.IClientService, creditService: ICRest.Services.Dossier.ICreditService, elementService: ICRest.Services.Element.IElementService);
        private getAjouterPhaseCreditExistant(identifiantDossier, identifiantCreditExistant, phase);
        ajouterCharge(identifiantDossier: string, identifiantEmprunteur: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        ajouterPhaseCreditExistant(identifiantDossier: string, identifiantCreditExistant: string, phase: Models.Emprunteur.IPhase): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        ajouterRevenu(identifiantDossier: string, identifiantEmprunteur: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        ajouterRevenuFiscal(identifiantDossier: string, revenuFiscal: ICBusiness.Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
        getDetailCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        getDetailRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<Models.Emprunteur.IRevenuFiscal>;
        mettreAJourCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, creditExistant: Models.Emprunteur.ICreditExistant, pourLeCompteDe?: string): ng.IPromise<Models.Emprunteur.IBudgetItem>;
        mettreAJourPhaseCreditExistant(identifiantDossier: string, phase: Models.Emprunteur.IPhase, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourRevenu(identifiantDossier: string, revenu: Models.Emprunteur.IBudgetItem, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal, pourLeCompteDe?: string): ng.IPromise<void>;
        supprimerCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        supprimerListePhasesCreditExistant(identifiantDossier: string, phases: Models.Emprunteur.IPhase[]): ng.IPromise<void>;
        supprimerPhaseCreditExistant(identifiantDossier: string, phase: Models.Emprunteur.IPhase): ng.IPromise<void>;
        supprimerRevenu(identifiantDossier: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        supprimerRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface ISurfaceFinanciereService {
        /**
         * Ajoute au dossier l'épargne passée en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param epargne
         */
        ajouterEpargne(identifiantDossier: string, identifiantPersonne: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        /**
         * Renvoie le détail de l'épargne passée en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        getDetailEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<Models.Emprunteur.IEpargne>;
        /**
         * Met à jour l'épargne passée en paramètre
         * @param identifiantDossier
         * @param epargne
         * @param pourLeCompteDe
         */
        mettreAJourEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Supprime l'épargne passée en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        supprimerEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
    }
    class SurfaceFinanciereService implements ISurfaceFinanciereService {
        private $q;
        private clientService;
        private elementService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, clientService: ICRest.Services.Dossier.IClientService, elementService: ICRest.Services.Element.IElementService);
        ajouterEpargne(identifiantDossier: string, identifiantPersonne: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        getDetailEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<Models.Emprunteur.IEpargne>;
        mettreAJourEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne, pourLeCompteDe?: string): ng.IPromise<void>;
        supprimerEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
    }
}
