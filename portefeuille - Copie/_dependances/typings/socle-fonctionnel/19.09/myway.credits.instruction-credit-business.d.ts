
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
         * Identifiant de classe pour la mise à jour des personnes physiques
         */
        const activiteMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des charges
         */
        const chargeMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des comptes
         */
        const compteDepotMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des crédits existants
         */
        const creditExistantMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des crédits internes
         */
        const creditInterneMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'emprunteur
         */
        const emprunteurMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des familles épargnes
         */
        const familleEpargneMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des personnes physiques
         */
        const personnePhysiqueMaj: string;
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
        /**
         * Identifiant de classe pour la mise à jour de l'element dossier.
         */
        const dossierMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element bien conso finance
         */
        const bienConsoFinanceMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element projet non immobilier
         */
        const projetNonImmobilierMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element plan de financement
         */
        const planFinancementMaj: string;
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
         * Revenus / Charges : statuts (féminin)
         */
        const feminineResourcesStatusesList: Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[];
        /**
         * Revenus / Charges : statuts (masculin)
         */
        const masculineResourcesStatusesList: Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[];
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
    }
}

declare namespace ICBusiness.Constantes.Documents {
    /**
     * Codes des formats éditiques
     */
    namespace FormatEditique {
        const industrialise: number;
        const papier: number;
        const signatureElectronique: number;
    }
    /**
     * Codes des types de documents
     */
    namespace TypeDocument {
        const propositionCommerciale: string;
        const tableauAmortissementCredit: string;
        const assuranceExterne: string;
    }
    /**
     * Codes des types de signature électronique
     */
    namespace TypeSignatureElectronique {
        const nonInitialise: number;
        const defaut: number;
        const offreSag: number;
        const offre: number;
        const demandeCreditSag: number;
        const demandeCreditSed: number;
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
         * Codes de présence d'activités salariales => non
         * 79 => oui
         */
        const codeAucunePresenceActiviteSalariale: number;
        /**
         * Codes de présence d'activités salariales => oui
         */
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
        const typeMotorisation: string;
        const typeVehicule: string;
    }
}

declare namespace ICBusiness.Constantes.Inject {
    namespace Services {
        const cacheService: string;
        const creditService: string;
        const creditParametreService: string;
        const dossierService: string;
        const dossierSchemaService: string;
        const editerDocumentsService: string;
        const emprunteurService: string;
        const habilitationService: string;
        const parametresService: string;
        const personneService: string;
        const projetService: string;
        const produitService: string;
        const revenuChargeService: string;
        const surfaceFinanciereService: string;
        const planFinancementService: string;
    }
}

/**
 * Constantes pour le paramétrage applicatif
 */
declare namespace ICBusiness.Constantes.ParametrageApplicatif {
    /**
     * Paramétrage pour la délégation
     */
    namespace Delegation {
        const industrialise: number;
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

declare namespace ICBusiness.Enum {
    /**
     * Consultation = 0
     * Instruction = 1,
     * Decision = 2,
     * Maj = 3, (Mise à jour administrative ou conformité)
     * Conformite = 4, (Ouverture pour controle de conformite)
     * PriseEnChargeBO = 5 (Action où le l'agent BO se transfère un dossier (par le lien Prendre en charge))
     */
    enum ActionOuvertureDossierEnum {
        /** Consultation = 0 */
        consultation = 0,
        /** Instruction = 1 */
        instruction = 1,
        /** Decision = 2 */
        decision = 2,
        /** Maj = 3, (Mise à jour administrative ou conformité) */
        maj = 3,
        /** Conformite = 4, (Ouverture pour controle de conformite) */
        conformite = 4,
        /** PriseEnChargeBO = 5 (Action où le l'agent BO se transfère un dossier (par le lien Prendre en charge)) */
        priseEnChargeBo = 5,
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Code application
     */
    enum CodeApplicationEnum {
        neo,
        conso,
        immo,
        pro,
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
        /** A */
        PropositionCommerciale,
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
        OffreEditeeSansDecisionEnAttenteRemiseEmprunteur,
        /** J */
        OffreEditeeTransfereePourDecision,
        /** K */
        OffreSansDecisionEnAttenteDeSignature,
        /** L */
        OffreEnAttenteDeSignatureTransfereePourDecision,
        /** M */
        OffreSigneeSansDecisionDelaiDeRetractation,
        /** N */
        OffreSigneeDelaiDeRetractationTransfereePourDecision,
        /** U */
        OffreConclue,
        /** V */
        DemandeCreditSansSuite,
        /** W */
        PropositionCommercialeSansSuite,
        /** X */
        OffreSansSuite,
    }
}

declare namespace ICBusiness.Enum {
    /** Mode d'ouverture de l'application (reçu en get par le context lisa) */
    enum ModeOuvertureDossier {
        consultation = 0,
        edition = 1,
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Familles d'objet commercialisés (TOC)
     */
    enum NatureProjetEnum {
        pro = 0,
        conso = 1,
        eps = 2,
        immo = 3,
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Code application
     */
    enum TypeAnomalieDossierEnum {
        dossier = 0,
        alerteDossier = 1,
        piecesJustificatives = 2,
        piecesAgence = 3,
        manuel = 4,
        modalites = 5,
        emprunteur = 6,
        caution = 7,
        personne = 8,
        projet = 9,
        planFinancement = 10,
        assurances = 11,
        garanties = 12,
        creditExterne = 13,
        creditInterne = 14,
        elementsFournir = 15,
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

declare namespace ICBusiness.Tools {
    interface INavigationUtils {
        /**
         * Add a delegate function to be executed before navigation
         * @param delegate if delegate result is falsy, navigation we'll be cancelled
         */
        onNavigationStarts<T>(delegate: () => ng.IPromise<boolean>): void;
    }
    abstract class NavigationUtils {
        private $q;
        constructor($q: ng.IQService);
        /** For now, just one action can be added. We'll see if we need more later on */
        protected actionsBeforeNavigation: () => ng.IPromise<boolean>;
        /**
         * Add a delegate function to be executed before navigation
         * @param delegate if delegate result is falsy, navigation we'll be cancelled
         */
        onNavigationStarts<T>(delegate: () => ng.IPromise<boolean>): void;
        /**
         * Checks if navigation is allowed
         * @param navHandler function containing the navigation logic
         * @returns navHandler if navigation is allowed or rejects
         */
        protected controlNavigation(navHandler: () => void): ng.IPromise<() => void>;
        private canNavigate();
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

declare namespace ICBusiness.Models.Common {
    /**
     * Context apllicatif regroupant les données necessaire au composant transverse de l'application
     * Menu / boutons d'action / erreurs...
     */
    interface IContext {
        /**
         * Current authentification infos
         * Readoonly
         */
        authentificationInfos: MyWay.Services.Context.AuthentificationInfo;
        /**
         * Current dossier infos
         */
        dossierSchema: ICBusiness.Models.Dossier.IDossierSchema;
        /** current low level params needed to get all others
         * They are loaded first
         */
        lowLevelParams: ILowLevelParams;
    }
    interface ILowLevelParams {
        idDossier: string;
        dateInstruction: string;
        mode?: Enum.ModeOuvertureDossier;
        codeApplication?: number;
        idCompteDe?: string;
    }
}

declare namespace ICBusiness.Models.Common {
    /**
     * Represente les regles de visibilite d'un champ/controle
     */
    interface IVisibilite {
        /**
         * Le champ est affiche
         */
        visible: boolean;
        /**
         * Le champ est actif/editable
         */
        actif: boolean;
        /**
         * L'infobulle du champ
         */
        infobulle: string;
    }
}

declare namespace ICBusiness.Models.Decision {
    interface IAnnulerAccordPreteurRequest {
        identifiantDossier: string;
    }
    interface IResultatOffrePretIndustrialisee {
        /**
         * Code
         */
        code: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Valeur
         */
        valeur: string;
    }
}

declare namespace ICBusiness.Models.Decision {
    /**
     * Represente les avis sur un dossier
     */
    interface IAvis {
        /**
         * Date de l'avis
         */
        date: string;
        /**
         * Auteur de l'avis
         */
        auteur: String;
        libelle: string;
        codeTypologie: string;
        motif: string;
        valide: boolean;
    }
}

declare namespace ICBusiness.Models.Decision {
    /**
     * Represente la décision sur
     */
    interface IDecisionPreteur {
        listeAvis: Array<IAvis>;
        decision: IDecision;
    }
}

declare namespace ICBusiness.Models.Decision {
    /**
     * Represente la section décision
     */
    interface IDecision {
        /**
         * La date de la décision
         */
        date: string;
        /**
         * L'autorisation dà décider
         */
        autoriseA: String;
        etatDossier: string;
    }
}

declare namespace ICBusiness.Models.Decision {
    interface IExecuterCalculDelegationDecisionRequest {
        identifiantDossier: string;
        identifiantAgentTransfert: string;
        reponse: boolean;
        continu: boolean;
    }
    interface IErreurDelegation {
        /**
         * Titre
         */
        titre: string;
        /**
         * DescriptionsErreur
         */
        descriptionsErreur: Array<string>;
    }
    interface IAnomalieLecture {
        /**
         * IdntAno
         */
        idAno: string;
        /**
         * LiblAno
         */
        libelleAno: string;
        /**
         * TypeAno
         */
        typeAno: number;
        /**
         * DateHeurAno
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateHeureAno: string;
        /**
         * IdntObjt
         */
        idObjet: string;
        /**
         * TypeCtrl
         */
        typeControle: number;
        /**
         * Idfaco_IdntCtrlRegl
         */
        idControleRegle: string;
    }
    interface IResultatCalculDelegation {
        /**
         * MoteurDelegationExterne
         */
        moteurDelegationExterne: boolean;
        /**
         * Nofcdi_NiveauDelegationAgent
         */
        niveauDelegationAgent: string;
        /**
         * Tvfyal_Valeur
         */
        valeur: string;
        /**
         * ReponseAutorisation
         */
        reponseAutorisation: boolean;
        /**
         * LibelleNiveauRequis
         */
        libelleNiveauRequis: string;
        /**
         * Cvfide_NiveauRequis
         */
        niveauRequis: string;
        /**
         * ErreurDelegation
         */
        erreurDelegation: IErreurDelegation;
        /**
         * DateDecision
         * Type date au format yyyy-MM-dd
         */
        dateDecision: string;
        /**
         * EtatDossier
         */
        etatDossier: string;
        /**
         * NotationBale2
         */
        notationBale2: string;
        /**
         * AccesSaccef
         */
        accessoireSaccef: boolean;
        /**
         * AccesEnet
         */
        accessoireEnet: boolean;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IAnomaliesControle {
        categoriesAnomalie: ICategorieAnomalie[];
    }
    interface ICategorieAnomalie {
        libelle: string;
        type: Enum.TypeAnomalieDossierEnum;
        anomalies: string[];
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IDossierSchema {
        codeApplication: Enum.CodeApplicationEnum;
        codeDevise: string;
        etat: Enum.EtatDossier;
        hasCredits: boolean;
        hasEmprunteur: boolean;
        hasProjet: boolean;
        idDossier: string;
        idDossierGestion: string;
        idEmprunteur: string;
        libelleDossier: string;
        libelleSousEtat: string;
        nomCompletEmprunteur: string;
        sousEtat: Enum.SousEtatDossier;
        idProjet: string;
        idPlanFinancement: string;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface INoeudSynthese {
        /**
         * Ordre
         */
        ordre: number;
        /**
         * Actif
         */
        actif: boolean;
        /**
         * Gras
         */
        gras: boolean;
        /**
         * Id
         */
        id: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Ouvert
         */
        ouvert: boolean;
        /**
         * Parent
         */
        parent: string;
        /**
         * Selectable
         */
        selectable: boolean;
    }
    interface ISynthese {
        /**
         * ListNoeudSynthese
         */
        listeNoeudSynthese: Array<INoeudSynthese>;
        /**
         * ListNoeudAlerte
         */
        listeNoeudAlerte: Array<INoeudSynthese>;
    }
}

declare namespace ICBusiness.Models.Emprunteur {
    interface IEmprunteur {
        id: string;
        denomination: string;
        estRattache: boolean;
        categorieEmprunteur: Common.ICodeLabel<string>;
        personneMorale: IPersonneMorale;
        personnesPhysiques: Array<IPersonnePhysique>;
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
        estGarante: boolean;
    }
    interface IPersonnePhysique extends IPersonne {
        genre: EnumGenre;
        nomJeuneFille: string;
        dateNaissance: string;
        identifiantActivite: string;
    }
    interface IPersonneMorale extends IPersonne {
        numeroSiren: string;
    }
    interface IGarant {
        personne: IPersonnePhysique | IPersonneMorale;
    }
    interface IDetailPersonne {
        adresse: Common.IAddress;
        email: string;
        telephoneFixe: string;
        telephonePortable: string;
    }
    interface IDetailPersonnePhysique extends IPersonnePhysique, IDetailPersonne {
        dateEffetSituationFamiliale: string;
        dateEntreeLogement: string;
        libelleCapaciteJuridique: string;
        libelleClauseRegimeMatrimoniel: string;
        libelleLieuResidence: string;
        libelleModeLogement: string;
        libelleRegimeMatrimonial: string;
        libelleRoleRepresentant: string;
        libelleSituationFamiliale: string;
        libelleTypeNationalite: string;
        telephoneProfessionnel: string;
        employeurCommun: Models.Common.ICodeLabel<number>;
        activite: IActivite;
    }
    interface IDetailPersonneMorale extends IPersonneMorale, IDetailPersonne {
        dateCreation: string;
        numeroInscriptionRCS: string;
        dateInscriptionRCS: string;
        villeInscriptionRCS: string;
        formeJuridique: string;
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
     * 1 : Consommation - 2 : Trésorerie - 3 : Habitat - 9 : Revolving
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
        id: string;
        type: string;
        label: string;
        personne: Models.Common.ICodeLabel<string>;
        dateOuverture: string;
        estProduitCE: boolean;
        codeDevise: string;
        soldeMinimumLongTerme?: number;
        soldeMoyenCourtTerme?: number;
        soldeMoyenLongTerme?: number;
        moyenDePaiement?: boolean;
        estComptePro?: boolean;
        nombreDeJoursDeDepassement?: number;
        contentieuxOuImpaye?: boolean;
    }
    interface ICompteHorsCe extends ICompte {
        codeEtablissement: string;
        labelEtablissement: string;
        montantAutorisationDecouvert: number;
        modeDeComposition: number;
        soldeArreteM1: number;
        soldeArreteM2: number;
        soldeArreteM3: number;
        montantAgiosM1: number;
        montantAgiosM2: number;
        montantAgiosM3: number;
        nombreJoursDebiteursM1: number;
        nombreJoursDebiteursM2: number;
        nombreJoursDebiteursM3: number;
        presenceFraisForcageCommissionIntervention: boolean;
        presenceImpayes: boolean;
        presenceRejetCheques: boolean;
        presenceRejetPrelevement: boolean;
        presenceFraisBdf: boolean;
    }
    interface IEpargne {
        id: string;
        type: Models.Common.ICodeLabel<string>;
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
        comptesCeEmprunteurs: ICompte[];
        comptesHorsCeEmprunteurs: ICompte[];
        comptesCeGarants: ICompte[];
        comptesHorsCeGarants: ICompte[];
        epargnesCeEmprunteurs: IEpargne[];
        epargnesHorsCeEmprunteurs: IEpargne[];
        epargnesCeGarants: IEpargne[];
        epargnesHorsCeGarants: IEpargne[];
        detailSynthese: IDetailSyntheseEpargne;
        patrimoine: IPatrimoineEmprunteur;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICalculCredit {
        credit: ICreditLecture;
        listeAnomalies: string[];
    }
    interface ICreditLecture {
        montantMensualite: number;
    }
}

declare namespace ICBusiness.Models.Financement {
    /**
     * Donnees representant la nature de financement et sa liste de TOC associee
     */
    interface IFamilleProduit {
        label: string;
        listeProduit: IProduit[];
    }
    interface IProduit {
        label: string;
        codeFamilleProduit: string;
        numeroRelationProduit: string;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IPlanFinancementMajRequest {
        id: string;
        idProjet: string;
        coutSaisiTotal: boolean;
        montantProjet: number;
        montantApport: number;
    }
    /**
     * Données en retour de l'ajout d'un plan de financement
     */
    interface IRetourPlanFinancementAjout {
        id: string;
    }
    /**
     * Données de lecture d'un plan de financement
     */
    interface IPlanFinancement {
        id: string;
        /** Libellé du type d'objet commercialisé */
        labelToc: string;
        /** Libellé du type d'objet réglementaire  */
        labelTor: string;
        /** Libellé du méta */
        labelMeta: string;
        /** True: Coût saisi, False : capacité d'emprunt, null : non renseigné */
        coutObjetSaisie: boolean;
        /** Montant du projet  */
        montantProjet: number;
        /** Montant de l'apport */
        montantApport: number;
        /** Liste des crédits internes */
        listeCreditsInterne: ICreditInterne[];
        /** Reste à financer */
        resteFinancer: number;
    }
    interface ICreditInterne {
        libelleNomPret: string;
        montantEcheanceMax: number;
        codePeriodicite: number;
        periodicite: string;
        dureeTotaleCredit: number;
        saisieManuelleDureeTotaleCredit: boolean;
        listeDureeTotale: number[];
        tauxAffiche: number;
        margeRevision: number;
        montantEcheance: number;
        id: string;
        produitFinancier: IProduitFinancier;
        tegActControle: Models.Common.IVisibilite;
        tegProControle: Models.Common.IVisibilite;
        margeControle: Models.Common.IVisibilite;
        margeFutureControle: Models.Common.IVisibilite;
        tauxActuarielControle: Models.Common.IVisibilite;
        tauxProportionnelControle: Models.Common.IVisibilite;
        doitCalculer: boolean;
        montantCapital: number;
        teg: number;
        tauxUsure: number;
        /** Montant des frais de dossier */
        montantFraisDossier: number;
        /** Montant des frais de garanties */
        montantFraisGaranties: number;
        /** Montant des frais d'assurances */
        montantFraisAssurances: number;
    }
    interface IProduitFinancier {
        dureeMinimum: number;
        dureeMaximum: number;
        pas: number;
    }
}

declare namespace ICBusiness.Models.Financement {
    /**
     * Donnees representant la nature de financement et sa liste de TOC associee
     */
    interface ITableauAmortissement {
        flux: string;
    }
}

declare namespace ICBusiness.Models.Navigation.LisaContract.INST_CRDT_CONS_PRO {
    /**  Url Get parameters when accessing step OUVR_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IOuvertureDossierUrlParams {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        idDossier: string;
        mode: Enum.ModeOuvertureDossier;
        page: Enum.CodePageEnum;
    }
    /** Context parameters to set when navigating to OUVR_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IOuvertureDossierContext {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        identifiantDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageId: Enum.CodePageEnum;
    }
    /** Url Get parameters when accessing step INS_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IInstructionCreditDossierUrlParams {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        idDossier: string;
        mode: Enum.ModeOuvertureDossier;
        page: Enum.CodePageEnum;
    }
    /** Context parameters to set when navigating to INS_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IInstructionCreditDossierContext {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        identifiantDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageId: Enum.CodePageEnum;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT {
    /** Context parameters to set when navigating to CRR_DOSS_CRDT_ENTT on processus GERR_EMPR_CRDT */
    interface ICreationDossierContext {
        codeApplication: Enum.CodeApplicationEnum;
        codeDevise: string;
        dateInstruction: string;
        idCompteDe: string;
        identifiantClientBancaire: string;
        identifiantPersonne: string;
    }
    /** Url Get parameters when accessing step CRR_DOSS_CRDT_ENTT on processus GERR_EMPR_CRDT */
    interface ICreationDossierUrlParams {
        codeApplication: Enum.CodeApplicationEnum;
        codeDevise: string;
        idCompteDe: string;
        idEntiteTitulaire: string;
        idPersonne: string;
        /** TODO parametrer dans LISA */
        dateInstruction: string;
    }
    /** Context parameters to set when navigating to COMP_INFR_EMPR on processus GERR_EMPR_CRDT */
    interface ICompleterEmprunteurContext {
        identifiantDossier: string;
        dateInstruction: string;
        mode: Enum.ModeOuvertureDossier;
        codeApplication: Enum.CodeApplicationEnum;
        idCompteDe: string;
    }
    /** Url Get parameters when accessing step COMP_INFR_EMPR on processus GERR_EMPR_CRDT */
    interface ICompleterEmprunteurUrlParams {
        idDossier: string;
        dateInstruction: string;
        mode: Enum.ModeOuvertureDossier;
        codeApplication: Enum.CodeApplicationEnum;
        idCompteDe: string;
    }
}

declare namespace ICBusiness.Models.Projet {
    /**
     * Donnees representant la nature de financement et sa liste de TOC associee
     */
    interface INatureFinancement {
        /**
         * Libelle de la nature de financement
         */
        label: string;
        /**
         * Code de la nature de financement
         */
        code: string;
        /**
         * Liste des TOCs associés
         */
        listeTocs: IToc[];
    }
    /**
     * Données representant le TOC et sa liste de TOR associee
     */
    interface IToc {
        /**
         * Libelle du TOC
         */
        label: string;
        /**
         * Code du TOC
         */
        code: string;
        /**
         * Liste des TORs associés
         */
        listeTors: ITor[];
    }
    /**
     * Données representant le TOR
     */
    interface ITor {
        /**
         * Libelle du TOR
         */
        label: string;
        /**
         * Code du TOR
         */
        code: string;
        /**
         * Libellé méta du TOR
         */
        meta: string;
        /**
         * Libellé complet : tor - meta
         */
        labelTorMeta: string;
    }
    /**
     * Données d'un projet
     */
    interface IProjet {
        /**
         * Identifiant du projet
         */
        id: string;
        /**
         * Identifiant du bien conso
         */
        idBienConso: string;
        /**
         * Type d'objet commercial (TOC)
         */
        toc: Models.Common.ICodeLabel<string>;
        /**
         * Type d'objet reglementaire (TOR)
         */
        tor: Models.Common.ICodeLabel<string>;
        /**
         * Vendeur
         */
        vendeur: string;
        /**
         * Origine commerciale
         */
        origineCommerciale: Models.Common.ICodeLabel<string>;
        /**
         * Canal de relation
         */
        canalRelation: Models.Common.ICodeLabel<string>;
        /**
         * Type de vente/technique de vente
         */
        typeVente: Models.Common.ICodeLabel<string>;
        /**
         * Flags de visibilité des controles
         */
        controlesVisibilite: IProjetControles;
    }
    /**
     * Flags d'affichage des données d'un projet
     */
    interface IProjetControles {
        /**
         * Indique si le champ "Canal de relation" doit être affiche.
         */
        canalRelation: Models.Common.IVisibilite;
        /**
         * Indique si le champ 'Vendeur' doit être affiche.
         */
        vendeur: Models.Common.IVisibilite;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.LireElement;
    class Address {
        static mapAddress(personne: RestModel.IPersonneLecture): Models.Common.IAddress;
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
        private static getICodeLabelOrDefault(code, label);
        static mapEmprunteurMaj(emprunteur: Models.Emprunteur.IEmprunteur, surfaceFinanciere: Models.Emprunteur.ISurfaceFinanciere): RestModel.MajElement.IEmprunteurMaj;
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
        static getIntitule(personne: RestModel.SchemaComplet.IPersonneComplet | RestModel.LireElement.IPersonneLecture): string;
        static getPersonnePhysiqueByIdOrEmpty(listePersonnes: RestModel.SchemaComplet.IPersonneComplet[], id: string): RestModel.SchemaComplet.IPersonneComplet;
        static mapActivite(activite: RestModel.LireElement.IActiviteLecture): Models.Emprunteur.IActivite;
        static mapActiviteMaj(activite: Models.Emprunteur.IActivite): RestModel.MajElement.IActiviteMaj;
        static mapDetailPersonnePhysique(personne: RestModel.LireElement.IPersonnePhysiqueLecture, activite: RestModel.LireElement.IActiviteLecture, emprunteur: RestModel.LireElement.IEmprunteurLecture): Models.Emprunteur.IDetailPersonnePhysique;
        static mapDetailPersonneMorale(personne: RestModel.LireElement.IPersonneMoraleLecture): Models.Emprunteur.IDetailPersonneMorale;
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
        private static getStatusByCode(code, masculine);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class SurfaceFinanciere {
        static mapCompteMaj(compte: Models.Emprunteur.ICompte): RestModel.AjouterComptePersonne.ICompteMaj;
        static mapDetailCompteCe(compte: Models.Emprunteur.ICompte, compteLecture: RestModel.LireElement.ICompteLecture): Models.Emprunteur.ICompte;
        static mapDetailCompteHorsCe(compte: Models.Emprunteur.ICompte, compteLecture: RestModel.LireElement.ICompteDepotLecture): Models.Emprunteur.ICompteHorsCe;
        static mapDetailEpargne(epargne: Models.Emprunteur.IEpargne, epargneLecture: RestModel.LireElement.IFamilleEpargneLecture): Models.Emprunteur.IEpargne;
        static mapFamilleEpargneMaj(epargne: Models.Emprunteur.IEpargne): RestModel.AjouterFamilleEpargne.IFamilleEpargneMaj;
        static mapSurfaceFinanciere(emp: RestModel.SchemaComplet.IEmprunteurComplet): Models.Emprunteur.ISurfaceFinanciere;
        private static filtrerCompte(compte);
        private static isCe(element);
        private static mapCompte(compte, emp);
        private static mapDetailSyntheseEpargne(emp);
        private static mapEpargne(epargne, emp);
        private static mapPatrimoineEmprunteur(emp);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    /**
     * ModelTransformers de l'objet metier 'Controler dossier'
     */
    class ControleDossier {
        static mapAnomaliesControle(listeAnomalies: ICRest.Modeles.IAnomalieLecture[]): Models.Dossier.IAnomaliesControle;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    /**
     * ModelTransformers de l'objet metier 'Credit'
     */
    class Credit {
        static mapCalculCredit(credit: ICRest.Modeles.CalculerCreditInterne.ICreditInterneLecture): Models.Financement.ICreditLecture;
        static majCredit(credit: Models.Financement.ICreditInterne): ICRest.Modeles.MajElement.ICreditInterneMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    /**
     * ModelTransformers de l'objet metier 'Projet'
     */
    class PlanFinancement {
        static mapPlanFinancement(planFinancement: ICRest.Modeles.SchemaComplet.IPlanFinancementComplet): Models.Financement.IPlanFinancement;
        private static mapControles(listeControle, nomControle);
        private static mapCreditInterne(listeCredit);
        private static getLibelleCodePeriodeCredit(code);
        static mapPlanFinancementMaj(data: Models.Financement.IPlanFinancementMajRequest): ICRest.Modeles.MajElements.IElementMaj[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'Projet'
     */
    class Produit {
        /**
         * Map les données REST d'un projet vers le format du business
         * @param projet Projet au format REST
         * @param bienFinance Partie bien finance du projet
         */
        static mapListeFamilleProduit(listeFamille: RestModel.ListerProdEtFamAuto.IScFamillesDeProduits[]): Models.Financement.IFamilleProduit[];
        private static mapFamilleProduit(famille);
        private static mapProduit(produit);
    }
}

declare namespace ICBusiness.Services.Common {
    interface ICacheService {
        /**
         * Set promise reponse to cache and returns pending promise OR ended promise cached data
         * @param key
         * @param promise
         * @param fromCache: default true. if false reset cache and execute promise
         */
        get<T>(key: string, promise: () => ng.IPromise<T>, fromCache?: boolean): ng.IPromise<T>;
    }
}

declare namespace ICBusiness.Services.CreditParametre {
    interface ICreditParametreService {
        /**
         * Renvoie la liste des TOC/TOR
         * @param dateDeTraitement
         * @param familleObjetCommercialise
         */
        getListeTocTors(dateDeTraitement: string, familleObjetCommercialise: Enum.NatureProjetEnum): ng.IPromise<Models.Projet.INatureFinancement[]>;
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
        /**
         * Renvoie la liste des risques épargnes
         */
        getListeRisqueEpargne(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
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
        private cacheService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, cacheService: Services.Common.ICacheService);
        getListeTocTors(dateDeTraitement: string, familleObjetCommercialise: Enum.NatureProjetEnum): ng.IPromise<Models.Projet.INatureFinancement[]>;
        existsAdresseParametreRubrique(dateDeTraitement: string, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        getListeCategoriesEmprunteurs(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListerDevises(codeEtablissement: number, dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeLibelleEmployeurCommun(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeMotifRemboursementAnticipe(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListePeriodicitePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListePrimoAccedant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeRisqueEpargne(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
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
        private transformConstante(constante);
        private transformDevise(devise);
        private transformRisqueEpargne(epargne);
        private transformTypeCharge(typeCharge);
        private transformTypeRessource(typeRessource);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'Projet'
     */
    class Projet {
        /**
         * Map les données REST d'un projet vers le format du business
         * @param projet Projet au format REST
         * @param bienFinance Partie bien finance du projet
         */
        static mapProjet(projet: RestModel.SchemaComplet.IProjetComplet, bienFinance: RestModel.SchemaComplet.IBienConsoFinanceComplet): Models.Projet.IProjet;
        /**
         * Map les données d'affichage des controles
         * @param projet
         */
        private static mapControles(projet);
        /**
         * Map les données au format REST pour la mise à jour d'un projet
         * @param idProjet Identifiant du projet
         */
        static getEmptyProjetMajRequest(): ICRest.Modeles.DefinirProjet.IProjetNonImmobilierMaj;
        static mapDescriptionProjetMajRequest(idProjet: string, canalRelation: string, origineCommerciale: number, typeVente: number): ICRest.Modeles.MajElement.IDossierMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.CreditParametre.Models.ObjetCommercialiseToc;
    /**
     * ModelTransformers de l'objet metier 'Projet'
     */
    class TocTor {
        static codeConsoAffecte: string;
        static libelleConsoAffecte: string;
        static codeTresorerieNonAffecte: string;
        static libelleTresorerieNonAffecte: string;
        static codePop: string;
        static libellePop: string;
        static codeTresoEcoLocale: string;
        static libelleTresoEcoLocale: string;
        static codeEquipementEcoLocale: string;
        static libelleEquipementEcoLocale: string;
        static codeSubordonnes: string;
        static libelleSubordonnes: string;
        /**
         * Map la liste des TOC/TOR (format REST) vers le format business
         * @param restData
         */
        static mapListeTocTor(natureProjet: Enum.NatureProjetEnum, restData: RestModel.IScTypeObjetCommercialiseToc[]): Models.Projet.INatureFinancement[];
        private static mapToc(toc);
    }
}

declare namespace ICBusiness.Services.Decision {
    interface IDecisionService {
        /**
         * Déclaration de la fonction de récupération des informations de décision
         * @param identifiantDossier
         */
        getDecision(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Decision.IDecisionPreteur>;
        /**
         * Validation de l'accord prêteur
         * @param identifiantDossier
         * @param dateAccordPreteur
         * @param avis
         */
        validerAccordPreteur(identifiantDossier: string, dateAccordPreteur: string, avis: string): ng.IPromise<void>;
        /**
         * Refus d'accord prêteur.
         * @param identifiantDossier
         * @param dateRefus
         */
        refuserAccordPreteur(identifiantDossier: string, dateRefus: string): ng.IPromise<void>;
        /**
         * Refus d'accord prêteur.
         * @param identifiantDossier
         * @param dateRefus
         */
        refuserAccordPreteur(identifiantDossier: string, dateRefus: string): ng.IPromise<void>;
        /**
         * Annulation de l'accord prêteur.
         * @param identifiantDossier
         */
        annulerAccordPreteur(identifiantDossier: string): ng.IPromise<Models.Decision.IResultatOffrePretIndustrialisee>;
        /**
         * Exécution calcul délégation décision
         * @param identifiantDossier
         * @param identifiantAgentTransfert
         */
        execCalculDelegDec(identifiantDossier: string, identifiantAgentTransfert: string): ng.IPromise<Models.Decision.IResultatCalculDelegation>;
        /**
         * Déclaration de la fonction d'ajout d'un avis
         * @param identifiantDossier
         * @param avis
         */
        ajouterAvis(identifiantDossier: string, avis: Models.Decision.IAvis): ng.IPromise<Models.Decision.IAvis>;
    }
    class DecisionService implements IDecisionService {
        private $q;
        private dossierSchemaService;
        private dossierService;
        private decisionService;
        static $inject: (string | typeof ICRest.Services.Dossier.DossierService | typeof ICRest.Services.Dossier.DecisionService)[];
        constructor($q: ng.IQService, dossierSchemaService: ICBusiness.Services.Dossier.DossierSchemaService, dossierService: ICRest.Services.Dossier.DossierService, decisionService: ICRest.Services.Dossier.DecisionService);
        /**
         * Lecture des informations de décision
         * @param identifiantDossier
         */
        getDecision(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Decision.IDecisionPreteur>;
        validerAccordPreteur(identifiantDossier: string, dateAccordPreteur: string, avis: string): ng.IPromise<void>;
        refuserAccordPreteur(identifiantDossier: string, dateRefus: string): ng.IPromise<void>;
        annulerAccordPreteur(identifiantDossier: string): ng.IPromise<Models.Decision.IResultatOffrePretIndustrialisee>;
        execCalculDelegDec(identifiantDossier: string, identifiantAgentTransfert: string): ng.IPromise<Models.Decision.IResultatCalculDelegation>;
        ajouterAvis(identifiantDossier: string, avis: Models.Decision.IAvis): ng.IPromise<Models.Decision.IAvis>;
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
        private schemaService;
        static $inject: string[];
        constructor(schemaService: ICRest.Services.Schema.ISchemaService);
        getDossierSchema(idDossier: string): ng.IPromise<Models.Dossier.IDossierSchema>;
        private getIdPlanFinancement(listePlanFinancement);
        private getLibelleSousEtat(sousEtat);
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IDossierService {
        /**
         * Renvoie le dossier nouvellement créé
         * @param dateDeTraitement
         * @param canalDeCreation
         */
        creerDossier(dateDeTraitement: string, canalDeCreation: string, codeApplication: Enum.CodeApplicationEnum): ng.IPromise<Models.Dossier.IDossierSchema>;
        controlerDossier(idDossier: string): ng.IPromise<Models.Dossier.IAnomaliesControle>;
        sauverDossier(idDossier: string): ng.IPromise<void>;
        validerAccordClient(idDossier: string, idPlanFinancement: string): ng.IPromise<void>;
        /**
         * Ferme le dossier, ce dernier est sauvegardé si le paramètre sauvegarde vaut vrai
         * @param identifiantDossier
         * @param sauvegarde
         * @param pourLeCompteDe
         */
        fermerDossier(identifiantDossier: string, sauvegarde: boolean, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * renvois une synthèse du dossier sous forme de noeud d'arbre
         * @param identifiantDossier
         */
        getSynthese(identifiantDossier: string): ng.IPromise<Models.Dossier.ISynthese>;
        /**
         * Ouvre le dossier dans Neo. Necessaire au préalable de tous les autres appels.
         * @param identifiantDossier
         * @param dateDeTraitement
         * @param codeApplication
         * @param actionSurDossier
         * Consultation = 0
         * Instruction = 1,
         * Decision = 2,
         * Maj = 3, (Mise à jour administrative ou conformité)
         * Conformite = 4, (Ouverture pour controle de conformite)
         * PriseEnChargeBO = 5 (Action où le l'agent BO se transfère un dossier (par le lien Prendre en charge))
         *
         * @param pourLeCompteDe
         * @param ignorerControlModeOuverture
         */
        ouvrirDossier(identifiantDossier: string, dateDeTraitement: string, codeApplication: Enum.CodeApplicationEnum, actionSurDossier: Enum.ActionOuvertureDossierEnum, pourLeCompteDe?: string, ignorerControlModeOuverture?: boolean): ng.IPromise<void>;
    }
    class DossierService implements IDossierService {
        private dossierService;
        private syntheseService;
        static $inject: string[];
        constructor(dossierService: ICRest.Services.Dossier.IDossierService, syntheseService: ICRest.Services.Synthese.ISyntheseService);
        creerDossier(dateDeTraitement: string, canalDeCreation: string, codeApplication: Enum.CodeApplicationEnum): ng.IPromise<Models.Dossier.IDossierSchema>;
        validerAccordClient(idDossier: string, idPlanFinancement: string): ng.IPromise<void>;
        controlerDossier(idDossier: string): ng.IPromise<Models.Dossier.IAnomaliesControle>;
        sauverDossier(idDossier: string): ng.IPromise<void>;
        fermerDossier(identifiantDossier: string, sauvegarde: boolean, pourLeCompteDe?: string): ng.IPromise<void>;
        getSynthese(identifiantDossier: string): ng.IPromise<Models.Dossier.ISynthese>;
        ouvrirDossier(identifiantDossier: string, dateDeTraitement: string, codeApplication: Enum.CodeApplicationEnum, actionSurDossier: Enum.ActionOuvertureDossierEnum, pourLeCompteDe?: string, ignorerControlModeOuverture?: boolean): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IParametresService {
        /**
         * Renvoie la liste des statuts d'occupation logement
         * @param identifiantDossier
         */
        getListeStatutOccupationLogement(identifiantDossier: string, conditionDerogatoirePtz: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
    }
    class ParametresService implements IParametresService {
        private parametresService;
        static $inject: Array<string>;
        constructor(parametresService: ICRest.Services.Dossier.IParametresService);
        getListeStatutOccupationLogement(identifiantDossier: string, conditionDerogatoirePtz: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        private transformScConstante(constante);
    }
}

declare namespace ICBusiness.Services.Emprunteur {
    interface IEmprunteurService {
        definirEmprunteur(identifiantDossier: string, identifiantClientBancaire: string): ng.IPromise<void>;
        rafraichirEmprunteur(identifiantDossier: string): ng.IPromise<void>;
        getEmprunteur(idDossier: string): ng.IPromise<Models.Emprunteur.IEmprunteur>;
        getRevenusCharges(idDossier: string): ng.IPromise<Models.Emprunteur.IRevenusCharges>;
        getSurfaceFinanciere(idDossier: string): ng.IPromise<Models.Emprunteur.ISurfaceFinanciere>;
        mettreAJourEmprunteur(identifiantDossier: string, emprunteur: Models.Emprunteur.IEmprunteur, surfaceFinanciere: Models.Emprunteur.ISurfaceFinanciere, pourLeCompteDe?: string): ng.IPromise<void>;
        /** When activated, getEmprunteur, getRevenusCharges and getSurfaceFinancière will call the REST service once  */
        activateCache(): void;
        /** Desactivate cache to make call to the REST service */
        desactivateCache(): void;
    }
    class EmprunteurService implements IEmprunteurService {
        private $q;
        private elementService;
        private schemaService;
        private dossierService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, schemaService: ICRest.Services.ElementSchema.IElementSchemaService, dossierService: ICRest.Services.Dossier.IDossierService);
        private emprunteurCacheActivated;
        activateCache(): void;
        desactivateCache(): void;
        definirEmprunteur(identifiantDossier: string, identifiantClientBancaire: string): ng.IPromise<void>;
        rafraichirEmprunteur(identifiantDossier: string): ng.IPromise<void>;
        getEmprunteur(idDossier: string): ng.IPromise<Models.Emprunteur.IEmprunteur>;
        getRevenusCharges(idDossier: string): ng.IPromise<Models.Emprunteur.IRevenusCharges>;
        getSurfaceFinanciere(idDossier: string): ng.IPromise<Models.Emprunteur.ISurfaceFinanciere>;
        mettreAJourEmprunteur(identifiantDossier: string, emprunteur: Models.Emprunteur.IEmprunteur, surfaceFinanciere: Models.Emprunteur.ISurfaceFinanciere, pourLeCompteDe?: string): ng.IPromise<void>;
        private cachedEmprunteur;
        private getEmprunteurComplet(idDossier);
    }
}

declare namespace ICBusiness.Services.Emprunteur {
    interface IPersonneService {
        /**
         * Renvoie le détail de la personne morale passée en paramètre
         * @param idDossier
         * @param identifiantEmprunteur
         * @param personne
         */
        getDetailPersonneMorale(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonneMorale>;
        /**
         * Renvoie le détail de la personne physique passée en paramètre
         * @param idDossier
         * @param identifiantEmprunteur
         * @param personne
         */
        getDetailPersonnePhysique(idDossier: string, identifiantEmprunteur: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonnePhysique>;
        /**
         * Met à jour l'activité passée en paramètre
         * @param identifiantDossier
         * @param activite
         * @param pourLeCompteDe
         */
        mettreAJourActivite(identifiantDossier: string, activite: Models.Emprunteur.IActivite, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Met à jour la valeur "Employer commun" pour l'emprunteur passé en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param employeurCommun
         * @param pourLeCompteDe
         */
        mettreAJourEmployeurCommun(identifiantDossier: string, identifiantEmprunteur: string, employeurCommun: Models.Common.ICodeLabel<number>, pourLeCompteDe?: string): ng.IPromise<void>;
    }
    class PersonneService implements IPersonneService {
        private elementService;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.IElementService);
        getDetailPersonneMorale(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonneMorale>;
        getDetailPersonnePhysique(idDossier: string, identifiantEmprunteur: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonnePhysique>;
        mettreAJourActivite(identifiantDossier: string, activite: Models.Emprunteur.IActivite, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourEmployeurCommun(identifiantDossier: string, identifiantEmprunteur: string, employeurCommun: Models.Common.ICodeLabel<number>, pourLeCompteDe?: string): ng.IPromise<void>;
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
        private getObjectAjouterPhaseCreditExistant(identifiantDossier, identifiantCreditExistant, phase);
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
         * Ajoute au dossier le compte passé en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param epargne
         */
        ajouterCompte(identifiantDossier: string, identifiantPersonne: string, compte: Models.Emprunteur.ICompte): ng.IPromise<void>;
        /**
         * Ajoute au dossier l'épargne passée en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param epargne
         */
        ajouterEpargne(identifiantDossier: string, identifiantPersonne: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        /**
         * Renvoie le détail du compte CE passé en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        getDetailCompteCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompte>;
        /**
         * Renvoie le détail de l'épargne passée en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        getDetailEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<Models.Emprunteur.IEpargne>;
        /**
         * Met à jour le compte passé en paramètre
         * @param identifiantDossier
         * @param epargne
         * @param pourLeCompteDe
         */
        mettreAJourCompte(identifiantDossier: string, compte: Models.Emprunteur.ICompte, pourLeCompteDe?: string): ng.IPromise<void>;
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
        ajouterCompte(identifiantDossier: string, identifiantPersonne: string, compte: Models.Emprunteur.ICompte): ng.IPromise<void>;
        ajouterEpargne(identifiantDossier: string, identifiantPersonne: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        getDetailCompteCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompte>;
        getDetailEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<Models.Emprunteur.IEpargne>;
        mettreAJourCompte(identifiantDossier: string, compte: Models.Emprunteur.ICompte, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne, pourLeCompteDe?: string): ng.IPromise<void>;
        supprimerEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ICreditService {
        /**
         * Ajoute un nouveau crédit interne à un plan de financement
         * @param idDossier Identifiant du dossier
         * @param idPlanFinancement Identifiant du plan de financement
         * @param idProduit Identifiant du produit
         * @param montantEmprunte Montant emprunté pour ce crédit
         * @param initMontant Flag indiquant que le montant doit être initialisé
         * @param enOptim Flag optimisation
         * @param tauxMontage Taux de montage
         */
        ajouterCreditInterne(idDossier: string, idPlanFinancement: string, idProduit: string, montantEmprunte: number, initMontant: boolean, enOptim: boolean, tauxMontage: number): ng.IPromise<void>;
        /**
         * Mise à jour d'un crédit
         * @param idDossier Identifiant de dossier
         * @param credit Données de mise à jour du crédit
         */
        majCreditInterne(idDossier: string, credit: Models.Financement.ICreditInterne): ng.IPromise<void>;
        /**
         * Supprime un crédit interne
         * @param idDossier Identifiant du dossier
         * @param idCredit Identifiant du crédit
         */
        supprimerCreditInterne(idDossier: string, idCredit: string): ng.IPromise<void>;
        /**
         * Calcule les données d'un crédit interne
         * @param idDossier Identifiant du dossier
         * @param idCredit Identifiant du crédit
         * @param financeRaf
         */
        calculerCreditInterne(idDossier: string, idCredit: string, financeRaf: boolean): ng.IPromise<Models.Financement.ICalculCredit>;
    }
    class CreditService implements ICreditService {
        private creditService;
        private elementService;
        private $q;
        static $inject: string[];
        constructor(creditService: ICRest.Services.Dossier.CreditService, elementService: ICRest.Services.Element.IElementService, $q: ng.IQService);
        ajouterCreditInterne(idDossier: string, idPlanFinancement: string, idProduit: string, montantEmprunte: number, initMontant: boolean, enOptim: boolean, tauxMontage: number): ng.IPromise<void>;
        majCreditInterne(idDossier: string, credit: Models.Financement.ICreditInterne): ng.IPromise<void>;
        supprimerCreditInterne(idDossier: string, idCredit: string): ng.IPromise<void>;
        calculerCreditInterne(idDossier: string, idCredit: string, financeRaf: boolean): ng.IPromise<Models.Financement.ICalculCredit>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IEditerDocumentsService {
        editerTableauAmortissement(idDossier: string, idDocument: string): ng.IPromise<Models.Financement.ITableauAmortissement>;
    }
    class EditerDocumentsService implements IEditerDocumentsService {
        private editerDocumentsService;
        private $q;
        static $inject: string[];
        constructor(editerDocumentsService: ICRest.Services.Dossier.EditerDocumentsService, $q: ng.IQService);
        editerTableauAmortissement(idDossier: string, idDocument: string): ng.IPromise<Models.Financement.ITableauAmortissement>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IPlanFinancementService {
        ajouterPlanFinancement(idDossier: string, idProjet: string): ng.IPromise<Models.Financement.IRetourPlanFinancementAjout>;
        majPlanFinancement(idDossier: string, data: Models.Financement.IPlanFinancementMajRequest): ng.IPromise<void>;
        lirePlanFinancement(idDossier: string): ng.IPromise<Models.Financement.IPlanFinancement>;
    }
    class PlanFinancementService implements IPlanFinancementService {
        private $q;
        private planFinancementService;
        private schemaService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, planFinancementService: ICRest.Services.PlanFinancement.IPlanFinancementService, schemaService: ICRest.Services.ElementSchema.IElementSchemaService, elementService: ICRest.Services.Element.IElementService);
        ajouterPlanFinancement(idDossier: string, idProjet: string): ng.IPromise<Models.Financement.IRetourPlanFinancementAjout>;
        majPlanFinancement(idDossier: string, data: Models.Financement.IPlanFinancementMajRequest): ng.IPromise<void>;
        lirePlanFinancement(idDossier: string): ng.IPromise<Models.Financement.IPlanFinancement>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IProduitService {
        listerProduits(idDossier: string, idProjet: string, idPlanFinancement: string, codeDevise: string): ng.IPromise<Models.Financement.IFamilleProduit[]>;
    }
    class ProduitService implements IProduitService {
        private produitService;
        private $q;
        static $inject: string[];
        constructor(produitService: ICRest.Services.Produit.IProduitService, $q: ng.IQService);
        listerProduits(idDossier: string, idProjet: string, idPlanFinancement: string, codeDevise: string): ng.IPromise<Models.Financement.IFamilleProduit[]>;
    }
}

declare namespace ICBusiness.Services.Habilitation {
    interface IHabilitationService {
        /**
         * Retourne vrai si l'agent a les habilitations pour la saisie de la date d'instruction, sinon renvoie false
         * @param authentificationInfo
         * @param codeCategorieEmprunteur
         * @param codeTypeElementStructure
         */
        getAutorisationPourDateInstruction(authentificationInfo: MyWay.Services.Context.AuthentificationInfo, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<boolean>;
    }
    class HabilitationService implements IHabilitationService {
        private creditParametreService;
        static $inject: string[];
        constructor(creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService);
        getAutorisationPourDateInstruction(authentificationInfo: MyWay.Services.Context.AuthentificationInfo, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<boolean>;
        private getInfoAgent(identifiantElementStructure, identifiantEntiteConnecte, codeCategorieEmprunteur, codeTypeElementStructure);
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IProjetService {
        /**
         * Definit un nouveau projet
         * @param idDossier Identifiant du dossier
         * @param typeObjetCommercial Code TOC
         * @param typeObjetReglemente Code TOR
         * @param idProjet Identifiant du projet
         */
        definirProjet(idDossier: string, typeObjetCommercial: string, typeObjetReglemente: string): ng.IPromise<void>;
        /**
         * Recupere les donnees de description d'un projet.
         * @param idDossier L'identifiant du dossier concerne.
         */
        getDescriptionProjet(idDossier: string): ng.IPromise<Models.Projet.IProjet>;
        /**
         * Met à jour les données d'un projet
         * @param classeNeo Classe Neo associée
         * @param idDossier Identifiant du dossier
         * @param data Donnees du projet
         */
        updateProjetComplet(idDossier: string, data: Models.Projet.IProjet, updateProjet: boolean, updateBienFinance: boolean): ng.IPromise<void>;
    }
    class ProjetService implements IProjetService {
        private schemaService;
        private elementService;
        private projetService;
        private $q;
        static $inject: string[];
        constructor(schemaService: ICRest.Services.ElementSchema.IElementSchemaService, elementService: ICRest.Services.Element.IElementService, projetService: ICRest.Services.Projet.IProjetService, $q: ng.IQService);
        /**
         * Definit un nouveau projet
         * @param idDossier Identifiant du dossier
         * @param typeObjetCommercial Code TOC
         * @param typeObjetReglemente Code TOR
         * @param idProjet Identifiant du projet
         */
        definirProjet(idDossier: string, typeObjetCommercial: string, typeObjetReglemente: string): ng.IPromise<void>;
        /**
         * Recupere les donnees de description d'un projet.
         * @param idDossier L'identifiant du dossier concerne.
         */
        getDescriptionProjet(idDossier: string): ng.IPromise<Models.Projet.IProjet>;
        /**
         * Met à jour les données d'un projet
         * @param classeNeo Classe Neo associée
         * @param idDossier Identifiant du dossier
         * @param data Donnees du projet
         */
        updateProjetComplet(idDossier: string, data: Models.Projet.IProjet, updateProjet: boolean, updateBienFinance: boolean): ng.IPromise<void>;
    }
}
