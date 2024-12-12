
declare namespace ICBusiness.Models.Common {
    interface ICodeLabel<T extends string | number> {
        code: T;
        label: string;
        customObject?: Object;
        toAsciiValue?: () => string;
        toAsciiCode?: () => number;
    }
    class CodeLabel<T extends string | number> implements ICodeLabel<T> {
        code: T;
        label: string;
        customObject: Object;
        constructor(code: T, label: string, customObject?: Object);
        toAsciiCode(): number;
        toAsciiValue(): string;
    }
}

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

declare namespace ICBusiness.Constantes.Avis {
    /**
     * Namespace for the typology codes of notices
     */
    namespace CodeTypologie {
        /**
         * Lender decision (même si le code existe, il n'est jamais géré.)
         */
        const decisionPreteur: string;
        /**
         * Compliance
         */
        const conformite: string;
    }
}

declare namespace ICBusiness.Constantes {
    /**
     * Namespace de constantes contenant les identifiants des classes pour les appels ListerConstantes, MajElement et MajElements
     */
    namespace ClasseNeo {
        /** Identifiant de classe pour la mise à jour des données d'un accessorie complémentaire */
        const catAccessoireComplementaire: string;
        /** Identifiant de classe pour la mise à jour des données d'une assurance */
        const assuranceMaj: string;
        /** Identifiant de classe pour la mise à jour des données de la couverture d'une assurance */
        const couvertureCreditMaj: string;
        /** Indentifiant de classe pour la mise à jour des données d'une cotisation */
        const cotisationMaj: string;
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
         * Identifiant de classe pour la mise à jour des modalités de crédit
         */
        const creditModaliteMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'emprunteur
         */
        const emprunteurMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des familles épargnes
         */
        const familleEpargneMaj: string;
        /**
         * Identifiant de classe pour la mise à jour d'un garant
         */
        const garantMaj: string;
        /**
         * Identifiant de classe pour la mise à jour d'un garant
         */
        const interditBancaireMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des payeurs
         */
        const payeurMaj: string;
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
         * Identifiant de classe pour la liste des constantes de statut d'occupation logement
         */
        const categorieEmprunteur: string;
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
        /**
         * Identifiant de classe pour la mise à jour de l'element bien détaillé
         */
        const bienEquipementProMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element tresorerie financée
         */
        const tresorerieFinanceeMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de clause personnalisée
         */
        const clausePersonnaliseeMaj: string;
    }
}

declare namespace ICBusiness.Constantes.ConventionAssurance {
    namespace Type {
        const interne: string;
        const externe: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Credit {
        /**
         * Code de la charge de type APL => ZZ
         */
        const aplCodeCharge: string;
        /**
         * Code de la charge de type AtoutClic => ZC
         */
        const atoutClicCodeCharge: string;
        /**
         * Codes des familles de produits CEL et PEL
         * Contient les codes suivants :
         *  - CL
         *  - PL
         */
        const codesFamillesCelPel: string[];
        /**
         * Code de produit CE
         */
        const codeProduitCE: number;
        /**
         * Codes des charges de type "Crédit Existant" (interne et externe)
         * Contient les codes suivants :
         *  - ZP : Crédit existant interne
         *  - ZQ : Crédit existant interne cautionné
         *  - ZR : Crédit existant externe cautionné
         *  - ZX : Crédit existant externe
         */
        const existingCreditCodes: string[];
        /**
         * Codes des charges de type "Crédit Interne"
         * Contient les codes suivants :
         *  - ZP : Crédit existant interne
         *  - ZQ : Crédit existant interne cautionné
         */
        const internalCreditCodes: string[];
        /**
         * Code d'investissement pour usage locatif
         */
        const codeAucunePresenceInvestissementUsageLocatif: number;
        const codePresenceInvestissementUsageLocatif: number;
        /**
         * Code Type revenu ménage => Revenu annuel déclaré à N-2 (49)
         */
        const codeTypeRevenuMenage: number;
        const listePeriodicitePhaseComplete: () => Models.Common.ICodeLabel<string>[];
        /**
         * Phase : périodicités
         */
        const phasePeriodicitiesList: () => Models.Common.ICodeLabel<string>[];
        module Phase {
            /**
             * Type de phases d'un crédit
             * AM
             */
            const codeTypePhaseAmortissement: string;
            /**
             * PF
             */
            const codeTypePhasePrefinancement: string;
            /**
             * DA
             */
            const codeTypePhaseDiffereAmortissement: string;
            /**
             * MO
             */
            const codeTypePhaseMobilite: string;
            /**
             * DT
             */
            const codeTypePhaseDiffereTotal: string;
            /**
             * Phase : types de phase
             */
            const phaseTypesList: () => Models.Common.ICodeLabel<string>[];
            const listeModeSaisieCapital: () => Models.Common.ICodeLabel<number>[];
            module AmortissementTaux {
                /**
                 * { code: N (78), libelle: "en plage de valeur" }
                 */
                const _enPlageDeValeur: Models.Common.ICodeLabel<number>;
                /**
                 * { code: O (79), libelle: "taux d’intérêt du palier de taux" }
                 */
                const _palierDeTaux: Models.Common.ICodeLabel<number>;
                const listeModeExpressionTaux: Models.Common.ICodeLabel<number>[];
            }
            module PretCombine {
                /**
                 * { code: 3 (51), libelle: "2 en 1 faux relais" }
                 */
                const _2en1FauxRelais: Models.Common.ICodeLabel<number>;
                /**
                 * { code: 2 (50), libelle: "2 en 1 vrai relais" }
                 */
                const _2en1VraiRelais: Models.Common.ICodeLabel<number>;
                /**
                 * { code: 1 (49), libelle: "transformable" }
                 */
                const _transformable: Models.Common.ICodeLabel<number>;
                const listePretCombine: Models.Common.ICodeLabel<number>[];
            }
        }
    }
}

declare namespace ICBusiness.Constantes {
    namespace Data {
        /**
         * Liste des fonctionnement d'un compte
         */
        const accountStatesList: Models.Common.ICodeLabel<number>[];
        /**
         * Liste des fonctionnement d'un compte (CFF)
         */
        const accountStatesListForCFF: Models.Common.ICodeLabel<number>[];
        /**
         * Employeur commun
         */
        const commonEmployerLabelList: Models.Common.ICodeLabel<number>[];
        /**
         * Compte externe : modes de composition
         */
        const compositionModesList: Models.Common.ICodeLabel<number>[];
        /**
         * Gestion Administrative - Modalités : Forme de contrat
         */
        const contratFormeList: Models.Common.ICodeLabel<number>[];
        /**
         * Crédit existant : types de crédit
         */
        const creditTypesList: Models.Common.ICodeLabel<Models.Emprunteur.EnumTypeCredit>[];
        /**
         * Revenus / Charges : statuts (féminin)
         */
        const feminineResourcesStatusesList: Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[];
        /**
         * ID de la caisse CFF
         */
        const idCaisseCFF: string;
        /**
         * Revenus / Charges : statuts (masculin)
         */
        const masculineResourcesStatusesList: Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[];
        /**
         * Mensualités : types
         */
        const mensualitesTypesList: Models.Common.ICodeLabel<string>[];
        /**
         * Gestion Administrative - Modalités : Mode de recouvrement
         */
        const modeDeRecouvrementList: Models.Common.ICodeLabel<Models.Modalites.EnumModeDeRecouvrement>[];
        /**
         * Crédit existant : motifs de remboursement anticipé
         */
        const prepaymentMotivesList: Models.Common.ICodeLabel<string>[];
        /**
         * Modalités - Justificatif : types de rattachement
         */
        const rattachementTypesList: Models.Common.ICodeLabel<number>[];
        /**
         * Options d'un radio bouton simple (Oui / Non)
         */
        const simpleYesNoOptions: Models.Common.ICodeLabel<number>[];
        /**
         * Taux : types de taux
         */
        const tauxTypeList: Models.Common.ICodeLabel<string>[];
        /**
         * Options d'un radio bouton (Oui / Non / En attente)
         */
        const okKoEnAttenteOptions: Models.Common.ICodeLabel<string>[];
    }
}

declare namespace ICBusiness.Constantes {
    /** Constantes relatives au devises */
    namespace Devise {
        /** Code de la devise Euro (EUR) */
        const codeEuro: string;
        /** Code de la devise Dollar Canadien (CAD) */
        const codeDollarCanadien: string;
        /** Code de la devise Dollar (USD) */
        const codeDollar: string;
        /** Code de la devise Franc Suisse (CHF) */
        const codeFrancSuisse: string;
        /** Code de la devise Livre (GBP) */
        const codeLivre: string;
        /** Liste des libellés associés à un code devise */
        const codeDeviseLabel: {
            "EUR": string;
            "CAD": string;
            "USD": string;
            "CHF": string;
            "GBP": string;
            "": string;
        };
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
        const typeRolePersonneEmprunteurClientBancaire: Models.Common.ICodeLabel<string>;
        const typeRolePersonneComposantEmprunteur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneVendeur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneProprietaire: Models.Common.ICodeLabel<string>;
        const typeRolePersonneHuissier: Models.Common.ICodeLabel<string>;
        const typeRolePersonnePayeur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneOrganismeSignataire: Models.Common.ICodeLabel<string>;
        const typeRolePersonneCaf: Models.Common.ICodeLabel<string>;
        const typeRolePersonneRedacteur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneBeneficiaireVersement: Models.Common.ICodeLabel<string>;
        const typeRolePersonneAssocie: Models.Common.ICodeLabel<string>;
        const typeRolePersonneRepresentant: Models.Common.ICodeLabel<string>;
        const typeRoleConjointNonEmprunteur: Models.Common.ICodeLabel<string>;
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
        /**
         * Catégories d'emprunteur
         */
        const categorieAssociationsEtSyndicats: string;
        const categorieSciDeParticuliers: string;
        const categorieSciDeProfessionnels: string;
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
        const accessoiresService: string;
        const assurancesService: string;
        const batchRequestService: string;
        const cacheService: string;
        const controleDossierService: string;
        const creditParametreService: string;
        const creditPhaseService: string;
        const creditService: string;
        const decisionService: string;
        const dossierSchemaService: string;
        const dossierService: string;
        const editerDocumentsService: string;
        const editionContratService: string;
        const elementSchemaService: string;
        const emprunteurService: string;
        const etatDossierService: string;
        const modalitesService: string;
        const habilitationService: string;
        const historiqueService: string;
        const interroBdfService: string;
        const parametrageApplicatifService: string;
        const parametresService: string;
        const personneService: string;
        const planFinancementService: string;
        const prescripteurService: string;
        const produitService: string;
        const projetService: string;
        const revenuChargeService: string;
        const surfaceFinanciereService: string;
        const typeDossierService: string;
    }
    namespace MywayRisqueServices {
        const interroBdfServiceRisqueClient: string;
    }
}

declare namespace ICBusiness.Constantes.InterroBdf {
    namespace status {
        const ok: string;
        const ko: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Modalites {
        /**
         * Code du éco prêt à taux zéro
         */
        const codeEcoPatz: string;
        /**
         * Code du prêt à taux zéro 2005
         */
        const codePatz2005: string;
        /**
         * Code du prêt à taux zéro (Minitère du Logement)
         */
        const codePatzMinistereLogement: string;
        /**
         * Code prêt à taux zéro Outre-Mer
         * (existe également mais non utilisé YO => Prêt à taux zéro 2005 Outre-Mer)
         */
        const codePatzOutreMer: string;
        /**
         * Codes des types de prêt à taux zéro
         * Contient les codes suivants :
         *  - PY : Prêt à taux zéro 2005
         *  - PX : Éco prêt à taux zéro
         */
        const codesTypesPretATauxZero: string[];
        /**
         * Participation au recouvrement du payeur principal (fixé à 100%)
         */
        const participationRecouvrementPayeurPrincipal: number;
        /**
         * Longueur maximale de la saisie dans les modalités pour le recouvrement
         */
        const recouvrementInputLength: number;
        /**
         * Longueur du code trésorerie saisi dans les modalités pour les collectivités
         *  => Cette longueur est fixe et imposée
         */
        const tresorerieCodeLength: number;
        /**
         * Longueur maximale de la saisie dans les modalités pour le versement
         */
        const versementInputLength: number;
    }
}

declare namespace ICBusiness.Constantes {
    namespace NatureProjetPro {
        const tresorerieLocale: string;
        const equipementEcoLocale: string;
        const subordonnees: string;
    }
}

/** Contantes utilisées pour le totem et la navigation */
declare namespace ICBusiness.Constantes.Navigation {
    namespace PageId {
        const synthese: string;
        const client: string;
        const projet: string;
        const financement: string;
        const gestionAdministrative: string;
        const garanties: string;
        const assurance: string;
        const decisionPreteur: string;
        const editionDuContrat: string;
        const miseAJourAdministrative: string;
        const signatureDuContrat: string;
        const pieceEtControle: string;
        const historique: string;
        const erreur: string;
    }
    namespace SectionId {
        namespace client {
            const intervenantsDuDossier: string;
            const revenusCharges: string;
            const surfaceFinanciere: string;
            const droitEpargneLogement: string;
        }
        namespace projet {
            const descriptionDuProjet: string;
            const reamenagement: string;
            const objetFinance: string;
        }
        namespace financement {
            const financementDuProjet: string;
            const detailCredit: string;
        }
        namespace gestionAdministrative {
            const assurances: string;
            const modalites: string;
        }
        namespace decisionPreteur {
            const avis: string;
            const indicateurOctroi: string;
            const decision: string;
        }
        namespace edition {
            const caracteristiques: string;
            const clausesPersonnalisees: string;
            const listeMandats: string;
            const institutsEmission: string;
        }
        namespace pieceEtControles {
            const piecesClient: string;
            const piecesAgence: string;
            const controles: string;
        }
    }
}

/**
 * Constantes pour le paramétrage applicatif
 */
declare namespace ICBusiness.Constantes.ParametrageApplicatif {
    namespace Champ {
        const rubriqueFiltre: string;
    }
    namespace Cegc {
        /**
         * Mode de transmission CEGC / CNFAEE
         */
        const modeEnvoiCegc: string;
    }
    /**
     * Paramétrage pour la délégation
     */
    namespace Delegation {
        const codeProcessusActif: string;
        const codeModuleDelegation: string;
        const valeurModuleAdelys: string;
        const valeurModuleNeo: string;
    }
    /**
     * Paramétrage pour l'interrogation Banque de France notarisé
     */
    namespace InterroBdf {
        /**
         * Spécifie si la notarisation pour l'interrogation Banque de France est activée
         */
        const codeNotarisationFICP: string;
        const valeurNotarisationFICP: string;
        /**
         * mode de consultation pour l'interrogation Banque de France
         */
        const modeFICP: string;
        const modeFCC: string;
        /**
         * Spécifie si la présence sur liste noire est activée
         */
        const codeListeNoire: string;
    }
    /**
     * Global
     */
    namespace Global {
        /**
         * Valeur d'un paramètre applicatif quand celui-ci est activé
         */
        const valeurParametreApplicatifActive: string;
    }
    /**
     * Paramètre établissement
     */
    namespace ParametreEtablissement {
        /**
         * Libellé Param - date de traitement
         */
        const libelleDateTraitement: string;
        /**
         * Valeur d'un paramètre établissement quand celui-ci est activé
         */
        const valeurActive: string;
    }
    namespace ParametreRubrique {
        /**
         * Valeur d'un paramètre rubrique quand celui-ci est activé
         */
        const valeurActiveAdresse: number;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Tuiles {
        namespace Tailles {
            /** Grande fenêtre */
            const large: string;
            /** Petite fenêtre */
            const petite: string;
        }
        namespace TypeMarquage {
            const texte: string;
            const picto: string;
            const none: string;
        }
    }
}

declare namespace ICBusiness.Constantes {
    namespace TypeClauses {
        /**
         * Emprunteur (valeur 0)
         */
        const emprunteur: number;
        /**
         * Rédacteur d'acte (valeur 1)
         */
        const redacteurActe: number;
    }
}

declare namespace ICBusiness.Constantes {
    namespace TypeSignataire {
        /**
         * Signataire conjoint 'C'
         */
        const conjoint: number;
        /**
         * Signataire emprunteur 'E'
         */
        const emprunteur: number;
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
     *  Code des pages passées dans le contexte vers laquelle il faut rediriger
     */
    enum CodePageEnum {
        synthese = 1,
        client = 2,
        clientIntervenant = 201,
        clientRevenuEtCharges = 202,
        clientSurfaceFinanciere = 203,
        projet = 3,
        projetDescription = 301,
        projetReamenagement = 302,
        projetObjetFinance = 302,
        financement = 4,
        financementProjet = 401,
        financementDetailCredit = 402,
        assurances = 5,
        garanties = 6,
        gestionAdmin = 7,
        gestionAdminAssurances = 701,
        gestionAdminModalites = 703,
        decisionPreteur = 8,
        decisionPreteurAvis = 801,
        decisionPreteurIndicateursOctroi = 802,
        decisionPreteurDecision = 803,
        piecesEtControles = 9,
        piecesEtControlesClients = 901,
        piecesEtControlesAgence = 902,
        piecesEtControlesControles = 903,
        editionOffre = 10,
        editionOffreSectionCaracteristiques = 1001,
        editionOffreSectionClausesPersonnalisees = 1002,
        editionOffreSectionListeMandats = 1003,
        editionOffreSectionInstitutsEmission = 1004,
        historique = 11,
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
    /**
     * FICP = 0
     * FCC = 1,
     */
    enum typeFichageBDF {
        /** FICP */
        FICP = 0,
        /** FCC */
        FCC = 1,
    }
    /**
     * conso = 49
     * immo = 50
     * droitCommun = 32
     */
    enum typeLoi {
        conso,
        immo,
        droitCommun,
    }
    enum ficpRules {
        obligatoire = 0,
        interdit = 1,
        autorise = 2,
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
    enum TypeAnomalieEnum {
        AnomalieNonBloquante = 0,
        AnomalieBloquante = 1,
        AnomalieManuelle = 2,
        Alerte = 3,
        Technique = 4,
    }
}

declare namespace ICBusiness.Enum {
    enum TypeControleEnum {
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

declare namespace ICBusiness.Enum {
    /**
     * Type de destinataire des clauses à l'édition
     */
    enum TypeDestinataireClause {
        emprunteur = 0,
        redacteurActe = 1,
    }
}

declare namespace ICBusiness.Rules {
    class MaxDateRule implements IValidationRule {
        private max;
        private dateToValidate;
        private ruleLabel;
        static maxnumberRuleLabel: string;
        constructor(max: string, dateToValidate: () => string, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MaxLengthRule implements IValidationRule {
        private value;
        private maxLength;
        static maxLengthRuleLabel: string;
        constructor(value: () => string, maxLength: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MaxNumberRule implements IValidationRule {
        private max;
        private numberToValidate;
        private ruleLabel;
        static maxnumberRuleLabel: string;
        constructor(max: number, numberToValidate: () => number, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MinDateRule implements IValidationRule {
        private min;
        private dateToValidate;
        private ruleLabel;
        static maxnumberRuleLabel: string;
        constructor(min: string, dateToValidate: () => string, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MinMaxDateRule implements IValidationRule {
        private min;
        private max;
        private dateToValidate;
        private ruleLabel;
        static defaultRuleLabel: string;
        constructor(min: string, max: string, dateToValidate: () => string, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MinMaxNumberRule implements IValidationRule {
        private min;
        private max;
        private numberToValidate;
        private ruleLabel;
        static defaultRuleLabel: string;
        constructor(min: number, max: number, numberToValidate: () => number, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MinNumberRule implements IValidationRule {
        private min;
        private numberToValidate;
        static minNumberRuleLabel: string;
        constructor(min: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class ModuloNumberRule implements IValidationRule {
        private modulo;
        private numberToValidate;
        static moduloNumberRuleLabel: string;
        constructor(modulo: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class PreciseLengthRule implements IValidationRule {
        private value;
        private length;
        static preciseLengthRuleLabel: string;
        constructor(value: () => string, length: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class RequiredRule<T> implements IValidationRule {
        private value;
        static requiredRuleLabel: string;
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
        /**
         * Return the first element matching with the code. If not found, returns empty object.
         * @param list
         * @param code
         */
        static firstOrEmpty<T extends string | number>(list: Models.Common.ICodeLabel<T>[], code: T): Models.Common.ICodeLabel<T>;
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

declare namespace ICBusiness.Tools {
    class PageUtils {
        /**
         * Fonction permettant de savoir s'il s'agit d'une page de la décision
         * @param codePage
         */
        static estPageDecision(codePage: string): boolean;
        /**
         * Fonction permettant de savoir s'il s'agit d'une page de la décision
         * @param codePage
         */
        static estPageEdition(codePage: string): boolean;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /** Données complètes d'une assurance */
    interface IAssurance {
        id: string;
        libelleLongNom: string;
        idConvention: string;
        libelleLongConvention: string;
        libelleRisques: string;
        taux: number;
        montant: number;
        libelleMontant: string;
        libelleTaux: string;
        produits: ICouvertureCredits[];
        typeAssurance: ITypeAssurance;
        siren: string;
        libelleSiren: string;
        detailsPersonne: Models.Emprunteur.IPersonnePhysique;
    }
    /** Données permettant de déterminer si l'assurance est obligatoire ou facultative */
    interface ITypeAssurance {
        estObligatoire: boolean;
        /** C (caché) / V (visible) / I (inactif) */
        codeAffichageObligatoire: number;
        /** C (caché) / V (visible) / I (inactif) */
        codeAffichageFacultatif: number;
    }
    interface ICouvertureCredits {
        id: string;
        quotientCouverture: number;
        idProduit: string;
        libelleProduit: string;
        cotisation: ICotisation;
    }
    interface ICotisation {
        id: string;
        tauxCotisation: number;
        montantCotisation: number;
    }
}

declare namespace ICBusiness.Models.Assurances {
    interface IConventionAssurance {
        /** Identifiant de la convention */
        id: string;
        /** Indique si l'assurance est interne ou externe */
        typeAssuranceInterne: boolean;
        /** Libellé : Interne/Externe */
        typeAssuranceLabel: string;
        /** Libellé de la compagnie d'assurance */
        compagnieLabel: string;
        /** Libellé du type de contrat : Contrat / Ancien Contrat */
        contratTypeLabel: string;
        /** Numéro externe du contrat */
        contratNumeroExterne: string;
        /** Libellé du contrat */
        contratLabel: string;
        /** Libellé de la convention */
        conventionLibelle: string;
        /** Type d'assurance */
        conventionTypeAssurance: string;
        /** Date de fin d'effet de la convention */
        conventionDateFinEffet: string;
        /** Code de la dérogation au niveau de l'âge */
        conventionCodeDerogationAge: string;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /** Données détaillés d'une convention d'assurance */
    interface IDetailsConventionAssurance {
        id: string;
        conventionLabel: string;
        referenceLabel: string;
        referenceCommentaire: string;
        identifiantLabel: string;
        labelCompagnieAssurance: string;
        montantMaxGarantieParTete: number;
        montantMaxCreditConvention: number;
        ageMaxiEntree: number;
        ageMaxiCouverture: number;
        ageMaxiCouvertureExtension: number;
        dureeMiniCredit: number;
        dureeMaxCredit: number;
        quotiteMin: number;
        quotiteMax: number;
        visibiliteQuotite: Models.Common.IVisibilite;
        visibiliteTaux: Models.Common.IVisibilite;
        visibiliteMontant: Models.Common.IVisibilite;
        isTauxList: boolean;
        isMontantListe: boolean;
        listeMontant: ICBusiness.Models.Common.ICodeLabel<number>[];
        listeTaux: ICBusiness.Models.Common.ICodeLabel<number>[];
        montant: number;
        quotite: number;
        taux: number;
        estInterne: boolean;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /** Données au retour de l'ajout d'assurance */
    interface IRetourAjoutAssurance {
        listeAnomalies: string[];
        assurance: IAssurance;
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
    interface IAnomalieLecture {
        /**
         * TypeCtrl
         */
        typeControle: number;
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
         * Idfaco_IdntCtrlRegl
         */
        idControleRegle: string;
        /**
         * IdntObjt
         */
        idObjet: string;
        /**
         * ClasseAnomalie
         */
        classeAnomalie: number;
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
        /** active page id */
        currentPage: string;
        isCurrentPageReadOnly: () => boolean;
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

declare namespace ICBusiness.Models.Common {
    interface IParametreApplicatif {
        code: string;
        label: string;
        validityEndDate: string;
        validityStartDate: string;
        value: string;
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
         * Identifiant de la personne connectée
         */
        idAuteur: String;
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
     * Represente la décision prêteur
     */
    interface IDecisionPreteur {
        listeAvis: Array<IAvis>;
        decision: ICBusiness.Models.Decision.IDecision;
        indicateursOctroi: IIndicateursOctroi;
        /**
         * Informations sur le dossier
         */
        dossier: Models.Dossier.IDossierSchema;
    }
}

declare namespace ICBusiness.Models.Decision {
    /**
     * Represente la section décision
     */
    interface IDecision {
        /**
         * L'affichage du message d'autorisation à décider
         */
        autoriseA: boolean;
        /**
         * La date de la décision
         */
        date: string;
        /**
         * La date maximum de la décision
         */
        dateMax: string;
        /**
         * La date minimum de la décision
         */
        dateMin: string;
        /**
         * La date conseillée de la décision
         */
        dateConseille: string;
        /**
         * Message pour les bornes des dates
         */
        bornesDateMessage: string;
        /**
         * Niveau de délégation requis (Adélys)
         */
        niveauRequis: string;
        /**
         * Libellé du niveau de délégation requis (Adélys)
         */
        libelleNiveauRequis: string;
        /**
         * Code du niveau de délégation (hors Adélys)
         */
        codeNiveauDelegation: string;
        /**
         * Libellé du niveau de délégation (hors Adélys)
         */
        libelleNiveauDelegation: string;
        etatDossier: string;
        /**
         * Booléen pour la possibilité de saisie d'avis
         */
        saisieAvis: boolean;
        /**
         * Booléen pour la possibilité d'accorder
         */
        accordPossible: boolean;
        /**
         * Booléen pour la possibilité de refuser
         */
        refusPossible: boolean;
        /**
         * Booléen pour la possibilité de forcer
         */
        forcagePossible: boolean;
        /**
         * Le moteur de délégation est externe ?
         */
        moteurDelegationExterne: boolean;
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

declare namespace ICBusiness.Models.Decision {
    /**
     * Represente la section des indicateurs à l'octroi
     */
    interface IIndicateursOctroi {
        /**
         * Taux d'endettement
         */
        tauxEndettement: number;
        /**
         * reste à vivre
         */
        resteAVivre: number;
        /**
         * Loan to value
         */
        tauxLTV: number;
        /**
         * Taux apport personnel
         */
        tauxApportPersonnel: number;
    }
}

declare namespace ICBusiness.Models.Decision {
    interface IDecisionRequest {
        /**
         * Identifiant du dossier
         */
        identifiantDossier: string;
        /**
         * Sous état du dossier
         */
        sousEtatDossier: number;
        /**
         * Si consultation de la décision
         */
        consultation: boolean;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IControleDossier {
        listeAnomaliesBloquantes: IAnomalie[];
        listeAlertes: IAnomalie[];
        retourControleDecision?: IRetourControleDecision;
    }
    interface IAnomalie {
        idAno: string;
        libelle: string;
        typeAnomalie: Enum.TypeAnomalieEnum;
        date: string;
        idObjetAnomalie: string;
        typeControle: Enum.TypeControleEnum;
    }
    interface IRetourControleDecision {
        validationPossible: boolean;
        modificationPossible: boolean;
        existeImpactTarification: boolean;
        transfertPossible: boolean;
        visualisationDetailPossible: boolean;
        anomalies: Array<IAnomalie>;
        anomaliesControleAvtAccessoirePret: Array<IAnomalie>;
        anomalieImpactTarification: IAnomalie;
        noteBale2: string;
        libelleRisque: string;
        marge: string;
        margeCom: string;
        libelleErreurDelegationTaux: string;
        anomaliesControleBale2: Array<IAnomalie>;
        anomaliesControleReglementaire: Array<IAnomalie>;
        controleReglementaireForcee: boolean;
        controleCtfprmA3Forcee: boolean;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IDossierSchema {
        codeApplication: Enum.CodeApplicationEnum;
        codeDevise: string;
        etat: Enum.EtatDossier;
        hasEmprunteur: boolean;
        hasProjet: boolean;
        idDossier: string;
        idDossierGestion: string;
        idEmprunteur: string;
        libelleSousEtat: string;
        nomCompletEmprunteur: string;
        sousEtat: Enum.SousEtatDossier;
        idProjet: string;
        idPlanFinancement: string;
        idPersonneSdpi: string;
        coutTotal: number;
        libelleAgentSdpi: string;
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

declare namespace ICBusiness.Models.Edition {
    interface IClausePersonnalisee {
        /**
         * LiblClsePers
         */
        libelleClassePersonne: string;
        /**
         * NumeReltClsePers
         */
        numeroRelationClassePersonne: number;
        /**
         * DestClsePers
         */
        destinataireClassePersonne: number;
        /**
         * Identifiant de l'élément complet
         */
        idws: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IClausesPersonnalisees {
        /**
         * ClausesPersonnalisees
         */
        clausesPersonnalisees: Array<IClausePersonnalisee>;
        /**
         * PresenceRedacteurActe
         */
        presenceRedacteurActe: boolean;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IContrat {
        /**
         * Ctfals_TypeLoiScrv
         */
        typeLoiScrivener: number;
        /**
         * LibelleTypeLoiScrv
         */
        libelleTypeLoiScrivener: string;
        /**
         * NumeroOffre
         */
        numeroOffre: number;
        /**
         * LibelleAutorisationEdition
         */
        libelleAutorisationEdition: string;
        /**
         * Présence d'un rédacteur d'acte
         */
        presenceRedacteurActe: boolean;
        /**
         * ClausesPersonnalisees emprunteur
         */
        clausesPersonnaliseesEmprunteur: IClausePersonnalisee[];
        /**
         * ClausesPersonnalisees rédacteur d'acte
         */
        clausesPersonnaliseesRedacteurActe: IClausePersonnalisee[];
        /**
         * ListCreditsInternes
         */
        listeCreditsInternes: Array<ICreditInterne>;
        /**
         * Signataires
         */
        personnesSignataires: IPersonnePhysique[];
        /**
         * Liste des mandats
         */
        listeMandats: IMandats[];
        /**
         * Liste des instituts d'émission
         */
        listeInstitutsEmission: IInstitutEmission[];
        /**
         * Projet
         */
        projet: IProjet;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface ICreditInterne {
        /**
         * Ccfarc_CodeIndicCalcAFaire
         */
        codeIndiceCalculAFaire: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfbje_CodeIndicExstPiecJustPourDeclechlVerst
         */
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        /**
         * Cdfbju_CodeTypeRattJustDecl
         */
        codeTypeRattachementJustificatifDeclaration: number;
        /**
         * Dhfacj_QuantEche
         */
        jourDateEcheance: number;
        /**
         * Controles
         */
        controles: Array<ICBusiness.Models.Common.IVisibilite>;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Mcfafd_CoutTotlFrsDossAsscCred
         */
        coutTotalFrsDossierAssuranceCredit: number;
        /**
         * Mcfgfr_CoutTotlFrsGarnAsscCred
         */
        coutTotalFrsGarantieAssuranceCredit: number;
        /**
         * Mcfaia_MtTotlAssrPerd
         */
        montantTotalAssurancePeriode: number;
        /**
         * Mefacc_MtPrmeEcheAssr
         */
        montantPrmeEcheanceAssurance: number;
        /**
         * Mefape_MtPrmeEcheHorsAccsCred
         */
        montantPrmeEcheanceHorsAccessoireCredit: number;
        /**
         * Mtfcve_MtMiniVerst
         */
        montantMinimumVersement: number;
        /**
         * MontantEcheance
         */
        montantEcheance: number;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
        /**
         * TauxAffiche
         */
        tauxAffiche: number;
        /**
         * TauxAnnuelEffectifGlobal
         */
        tauxAnnuelEffectifGlobal: number;
        /**
         * TauxUsure
         */
        tauxUsure: number;
        /**
         * Txfasr_TxNegcSurcRembAntc
         */
        tauxNegocieSurcRemboursementAnticipe: number;
        /**
         * Txfcmg_MargeTauxFutur
         */
        margeTauxFutur: number;
        /**
         * Cdfcie_CodeIndicelgbAuprInstemss
         */
        codeIndicelgbAuprInstemss: number;
        /**
         * LibelleIndicelgbAuprInstemss
         */
        libelleIndicelgbAuprInstemss: string;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IEntrepreneurIndividuel {
        /**
         * CodeNace
         */
        codeNace: string;
        /**
         * CodeInsee
         */
        codeINSEE: string;
        /**
         * DateDebutEIRL
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDebutEIRL: string;
        /**
         * DateFinEIRL
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateFinEIRL: string;
        /**
         * IndicateurOpposabiliteEIRL
         */
        indicateurOpposabiliteEIRL: number;
        /**
         * NomConjoint
         */
        nomConjoint: string;
        /**
         * EstMandataire
         */
        estMandataire: boolean;
        /**
         * NomMandataire
         */
        nomMandataire: string;
        /**
         * VertuMandataire
         */
        vertuMandataire: string;
        /**
         * EstEIRL
         */
        estEIRL: string;
        /**
         * IndicateurEIRL
         */
        indicateurEIRL: string;
        /**
         * LibelleEIRL
         */
        libelleEIRL: string;
        /**
         * AccordConjoint
         */
        accordConjoint: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IInstitutEmission {
        /**
         * Libellé de l'institut d'émission
         */
        libelle: string;
        /**
         * Montant emprunté
         */
        montant: number;
        /**
         * Durée
         */
        duree: number;
        /**
         * Périodicité
         */
        periodicite: string;
        /**
         * Taux d'emprunt
         */
        taux: any;
        /**
         * Eligibilité
         */
        eligibilite: string;
        /**
         * Code devise du crédit
         */
        codeDevise: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IMandat {
        /**
         * Libellé pour le crédit
         */
        libelleCredit: string;
        /**
         * Taux de participation
         */
        tauxParticipation: string;
        /**
         * Libellé du mode de règlemet
         */
        modeReglement: string;
        /**
         * Code BIC
         */
        bic: string;
        /**
         * Code IBAN
         */
        iban: string;
        /**
         * Référence unique du mandat (RUM)
         */
        referenceUniqueMandat: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IMandats {
        /**
         * Libellé du payeur
         */
        libellePayeur: string;
        /**
         * Payeur de secours ?
         */
        estPayeurSecours: boolean;
        /**
         * Liste des mandats
         */
        mandats: IMandat[];
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IPersonnePhysique {
        /**
         * Cdfpci_CodeTitrCivl
         */
        codeTitreCivilite: string;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
        /**
         * Ctfpse_CodeSexePers
         */
        codeSexePersonne: number;
        /**
         * Dtfpna_DateNais
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateNais: string;
        /**
         * EstEntrepreneurIndividuel
         */
        estEntrepreneurIndividuel: boolean;
        /**
         * Lbfpci_LiblTitrCivl
         */
        libelleTitreCivilite: string;
        /**
         * Lbfpnj_NomJeunFill
         */
        nomJeunFill: string;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * Lbfppn_Prnm
         */
        prenom: string;
        titreLong: string;
        /**
         * ListRoles
         */
        listeRoles: Array<IRole>;
        /**
         * EntrepreneurIndividuel
         */
        entrepreneurIndividuel: IEntrepreneurIndividuel;
        /**
         * Signataire
         */
        signataire: ISignataire;
        /**
         * IdntActv
         */
        idActivite: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IProjet {
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * Cdfomp_CodeMiseOeuvrProjPro
         */
        codeMiseOeuvrProjetPro: number;
        /**
         * Cdfopa_CodePays
         */
        codePays: string;
        /**
         * Cifapp_CodePrscDossPres
         */
        codePrscDossierPres: number;
        /**
         * Cifocs_CoutObjtSaisCalcEnvl
         */
        coutObjetSaisieCalculEnvl: boolean;
        /**
         * Cifttv_TechVent
         */
        techniqueVent: number;
        /**
         * Ctfaen_TypeEngagement
         */
        typeEngagement: string;
        /**
         * Ctfaoc_OrigCommProj
         */
        origineCommissionProjet: number;
        /**
         * Ctfici_CanalDeDistribution
         */
        canalDeDistribution: string;
        /**
         * Controles
         */
        controles: Array<ICBusiness.Models.Common.IVisibilite>;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateEstmVenl: string;
        /**
         * GenreReamenagement
         */
        genreReamenagement: number;
        /**
         * Lbfcor_LibelleLong
         */
        precisionReglementaire: string;
        /**
         * Lbfiaa_LibelleModEstimation
         */
        libelleModEstimation: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Lbfomo_LibelleMeta
         */
        libelleMeta: string;
        /**
         * Lbfpen_EnsgnPres
         */
        ensgnPres: string;
        /**
         * Lbni_LibelleLong
         */
        projetAFinancer: string;
        /**
         * LibelleCanalDeDistribution
         */
        libelleCanalDeDistribution: string;
        /**
         * LibelleOrigineCommProjet
         */
        libelleOrigineCommissionProjet: string;
        /**
         * LibelleMiseEnOeuvre
         */
        libelleMiseEnOeuvre: string;
        /**
         * LibelleTechniqueVente
         */
        libelleTechniqueVente: string;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Mtfofd_MtFrsDivr
         */
        montantFrsDivr: number;
        /**
         * Mtfoho_CoutTotlObjtHt
         */
        coutTotalObjetHt: number;
        /**
         * Mtfott_CoutTotlObjtTtc
         */
        coutTotalObjetTTC: number;
        /**
         * Cdfcni_TypeObjtFinn
         */
        typeObjetFinancier: string;
        /**
         * Ctfcor_TypeObjtRegl
         */
        typeObjetRegle: string;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IRole {
        /**
         * Ctfprp_TypeRolePersonne
         */
        typeRolePersonne: string;
        /**
         * LibelleRole
         */
        libelleRole: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface ISignataire {
        /**
         * ListEmailsContactsChoisissables
         */
        listeEmailsContactsChoisissables: Array<string>;
        /**
         * ListNumerosContactsChoisissables
         */
        listeNumerosContactsChoisissables: Array<string>;
        /**
         * EstAutoriseASigner
         */
        estAutoriseASigner: string;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: string;
        /**
         * TypeSignataire
         */
        typeSignataire: number;
        /**
         * Controles
         */
        controles: Array<ICBusiness.Models.Common.IVisibilite>;
        /**
         * EmailContact
         */
        emailContact: string;
        /**
         * NumeroContact
         */
        numeroContact: string;
        /**
         * EstSignataireEffectif
         */
        estSignataireEffectif: string;
        /**
         * Fonction pour savoir si le signataire est entrepreneur individuel
         */
        estEntrepreneurIndividuel: boolean;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface ISignataires {
        /**
         * Signataires
         */
        signataires: Array<IPersonnePhysique>;
        /**
         * Anomalies
         */
        anomalies: Array<ICBusiness.Models.Common.IAnomalieLecture>;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IIdentifiantsAccessoire {
        idws: string;
        idwsExterne: string;
    }
    interface IAccessoire {
        idws: string;
        frais: IFraisAccessoire;
        codeTypeAssiette: number;
        libelleTypeAssiette: string;
        codeBeneficiaire: string;
        libelleBeneficiaire: string;
        fraisFinance: boolean;
        estAccessoireLieProduit: boolean;
        estObligatoire: boolean;
        libelleFrais: string;
        controles: IAccessoireControles;
        idCredit: string;
    }
    interface IFraisAccessoire {
        tauxConseille: number;
        tauxSouhaite: number;
        montantConseille: number;
        montantSouhaite: number;
        montantRetenu: number;
        tauxRetenu: number;
    }
    interface IAccessoireControles {
        tauxSouhaite: Models.Common.IVisibilite;
        tauxConseille: Models.Common.IVisibilite;
        montantSouhaite: Models.Common.IVisibilite;
        montantConseille: Models.Common.IVisibilite;
        typeAssiette: Models.Common.IVisibilite;
        beneficiaire: Models.Common.IVisibilite;
    }
    interface IAccessoireLieProduit extends IAccessoire {
        /** Identifiant du produit financier associé */
        identifiantProduitFinance: string;
    }
    interface IAccessoireComplementaire extends IAccessoire {
        /** Type d'objet financé */
        codeSousType: string;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICalculCredit {
        credit: ICreditLecture;
        listeAnomalies: string[];
    }
    interface ICreditLecture {
        montantMensualite: number;
        libelle: string;
    }
}

declare module ICBusiness.Models.Financement {
    interface ICreditPhaseModel {
        listePhases: ICreditPhase[];
        libelleCredit: string;
        montantCapitalCredit: number;
        tauxNbDecimals: number;
    }
    interface IEchelleVersement {
        libelleEchelle: string;
        codeTypeAssiette: number;
        montantConvenu: number;
    }
    interface ICreditPhase {
        id: string;
        idws: string;
        nombrePeriodePhase: number;
        codeTypePhase: string;
        numeroRelationPhase: number;
        montantPremiereEcheance: number;
        nombrePeriodePhaseInitial: number;
        dureePhaseMin: number;
        dureePhaseMax: number;
        dureePhasePas: number;
        priseEnCompte: boolean;
        obligatoire: boolean;
        libelle: string;
        mensualite: number;
        reduction: boolean;
        periodicite: Common.ICodeLabel<string>;
        taux: number;
        personnalisable: boolean;
        listeChoixPeriode: Common.ICodeLabel<number>[];
        listePeriodicite: Common.ICodeLabel<string>[];
        periodeEstListe: boolean;
        estTauxDirecteur: boolean;
        tauxMin: number;
        tauxMax: number;
        paiementInterets: TypePaiementInterets;
        interetsDifferes: boolean;
        choixCapitalisation: boolean;
        choixRecouvrement: boolean;
        capitActive: boolean;
        modeCapiInterets: Common.ICodeLabel<string>;
        listeModeCapitalisation: Common.ICodeLabel<string>[];
        recouvActive: boolean;
        modeRecouviInterets: Common.ICodeLabel<string>;
        modeCapitalRecouvrementInterets: number;
        listeModeRecouvrement: Common.ICodeLabel<string>[];
        quotientAmortissementSimple: number;
        quotientAmortissementMin: number;
        quotientAmortissementMax: number;
        typePretCombine: TypePretCombine;
        peutEtreActive: boolean;
        pretCombine: Common.ICodeLabel<number>;
        quotiteAmortissement: IQuotiteAmortissement;
        nombrePhaseAmortissement: number;
        quotientMaxMontantFin: number;
        parametreRevision: IParametreRevision;
        listePalierProgressifs: IPalierProgressif[];
        estVisibleTaux: boolean;
        estVisibleMarge: boolean;
        estActifDuree: boolean;
        estActifPeriodicite: boolean;
        estActifTaux: boolean;
        estActifMarge: boolean;
        estVisibleButoirHausse: boolean;
        estVisibleButoirBaisse: boolean;
        estActifButoirHausse: boolean;
        estActifButoirBaisse: boolean;
        estVisibleTauxHausse: boolean;
        estVisibleTauxBaisse: boolean;
        tauxFixe: number;
        tauxPhase: number;
        repart: number;
        marge: number;
        majorBonif: number;
        modeButoirHausse: string;
        dateButoirHausse: string;
        modeButoirBaisse: string;
        dateButoirBaisse: string;
        estVisibleQuotite: boolean;
        estActifQuotite: boolean;
        estActifJeuxDeParametres: boolean;
        estVisibleJeuxDeParametres: boolean;
    }
    interface IQuotiteAmortissement {
        idws: string;
        modePaiementMontantInteret: Common.ICodeLabel<number>;
        quotientAmortissement: number;
        montantAmortissement: number;
        montantInFine: number;
    }
    interface IParametreRevision {
        idws: string;
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        jeuDeParametre: Common.ICodeLabel<number>;
        listeJeuDeParametre: Common.ICodeLabel<number>[];
        codeIndicecheReclame: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
        libelleLoiRevision: string;
        idCreditIntr: string;
        listeIdParametreIndex: Array<string>;
        codeTypePhaseAssuranceParametreRevision: string;
        paramIndexationHausse: IParamIndexation;
        paramIndexationBaisse: IParamIndexation;
        paramIndexation: IParamIndexation;
    }
    interface IParamIndexation {
        typeRolIndice: string;
        modeExpressionUtilisationIndice: number;
        valeurReferenceIndice: number;
    }
    interface IPalierProgressif {
        idws: string;
        numeroPhase: number;
        debut: number;
        fin: number;
        dureeMois: number;
        periodicite: Common.ICodeLabel<string>;
        taux: number;
        modeExpressionTaux: Common.ICodeLabel<number>;
        listeModeExpressionTaux: Common.ICodeLabel<number>[];
        CTFCAM: number;
    }
    type TypePaiementInterets = "capitalisation" | "recouvrement" | "";
    type TypePretCombine = "NComb" | "Transf" | "2en1FR" | "2en1VR";
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
    interface IFrais {
        codeTypeAccessoire: string;
        codeSousTypeAccessoire: string;
        libelleLong: string;
        estLieProduit: boolean;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IPlanFinancementMajRequest {
        id: string;
        idProjet: string;
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
        /** Montant du projet  */
        montantProjet: number;
        /** Montant de l'apport */
        montantApport: number;
        /** Liste des crédits internes */
        listeCreditsInterne: ICreditInterne[];
        /** Reste à financer */
        resteFinancer: number;
        listeAssurances: Assurances.IAssurance[];
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
        hasErreurTeg: boolean;
        /** Montant des frais de dossier */
        montantFraisDossier: number;
        /** Montant des frais de garanties */
        montantFraisGaranties: number;
        /** Montant des frais d'assurances */
        montantFraisAssurances: number;
        /** Liste des accessoires liés au produit */
        listeAccessoiresLies: IAccessoireLieProduit[];
        /** Liste des accessoires complémentaires */
        listeAccessoireComplementaires: IAccessoireComplementaire[];
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

declare namespace ICBusiness.Models.Financement {
    interface ISyntheseFinancement {
        listeCredits: ICreditSynthese[];
        listeCreditsForChoice: Models.Common.ICodeLabel<string>[];
    }
    interface ICreditSynthese {
        id: string;
        label: string;
        montant: number;
        cout: number;
        taux: number;
        typeTaux: Models.Common.ICodeLabel<string>;
        codeDevise: string;
        phases: IPhaseCreditSynthese[];
        justificationsTeg: IJustificationTegCreditSynthese;
    }
    interface IPhaseCreditSynthese {
        label: string;
        duree: number;
        taux: number;
        mensualite: number;
        assurance: number;
        estPremierMois: boolean;
    }
    interface IJustificationTegCreditSynthese {
        messages: string[];
        listeFrais: IFraisCreditSynthese[];
    }
    interface IFraisCreditSynthese {
        label: string;
        messages: string[];
    }
}

declare namespace ICBusiness.Models.Emprunteur {
    interface IEmprunteur {
        id: string;
        denomination: string;
        estRattache: boolean;
        categorieEmprunteur: Common.ICodeLabel<string>;
        idEntiteTitulaire: string;
        estEmprunteurPhysique: boolean;
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
        id: string;
        identifiant: string;
        typeEntite: EnumTypeEntite;
        intitule: string;
        numeroSiren: string;
        estPhysique: boolean;
        estGarante: boolean;
        estPayeuse: boolean;
        estEmprunteur: boolean;
        estConjointNonEmprunteur: boolean;
        estAssocie: boolean;
        estRepresentantLegal: boolean;
        listeComptesPrelevement: Common.ICodeLabel<string>[];
    }
    interface IPersonnePhysique extends IPersonne {
        id: string;
        dateNaissance: string;
        genre: EnumGenre;
        nomJeuneFille: string;
        nom: string;
        prenom: string;
        estEntrepreneurIndividuel: boolean;
        identifiantActivite: string;
        identifiantInterditBancaire: string;
        listeIdentifiantsOppositions: string[];
        codeRole: string;
        libelleRole: string;
        bdfAJour: boolean;
    }
    interface IPersonneMorale extends IPersonne {
        listeRepresentants: IPersonne[];
    }
    interface IGarant {
        id: string;
        personne: IPersonnePhysique | IPersonneMorale;
    }
    interface IDetailPersonne {
        adresse: Common.IAddress;
        email: string;
        telephoneFixe: string;
        telephonePortable: string;
        dateCreation: string;
        numeroInscriptionRcs: string;
        dateInscriptionRcs: string;
        villeInscriptionRcs: string;
    }
    interface IDetailPersonnePhysique extends IPersonnePhysique, IDetailPersonne {
        dateEffetSituationFamiliale: string;
        dateEntreeLogement: string;
        libelleCapaciteJuridique: string;
        libelleClauseRegimeMatrimonial: string;
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
        estRevenu: boolean;
        estCreditExistant: boolean;
        estLieAEmprunteur: boolean;
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
        isStepTwo: boolean;
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
        revenusEmprunteurs: IBudgetItem[];
        chargesEmprunteurs: IBudgetItem[];
        revenusGarants: IBudgetItem[];
        chargesGarants: IBudgetItem[];
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
        etablissement: Models.Common.ICodeLabel<string>;
        montantAutorisationDecouvert: number;
        modeDeComposition: Models.Common.ICodeLabel<number>;
        soldeArreteM1: number;
        soldeArreteM2: number;
        soldeArreteM3: number;
        montantAgiosM1: number;
        montantAgiosM2: number;
        montantAgiosM3: number;
        nombreJoursDebiteursM1: number;
        nombreJoursDebiteursM2: number;
        nombreJoursDebiteursM3: number;
        presenceFraisForcageCommissionIntervention: number;
        presenceImpayes: number;
        presenceRejetCheques: number;
        presenceRejetPrelevement: number;
        presenceFraisBdf: number;
        fonctionnementCompte: Models.Common.ICodeLabel<number>;
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
        detailSyntheseEmprunteurs: IDetailSyntheseEpargne;
        detailSyntheseGarants: IDetailSyntheseEpargne;
        patrimoineEmprunteurs: IPatrimoineEmprunteur;
        patrimoineGarants: IPatrimoineEmprunteur;
    }
}

declare namespace ICBusiness.Models.Intervenants {
    import RestModel = ICRest.Modeles.SchemaComplet;
    interface IIntervenantsComplet {
        emprunteur: RestModel.IEmprunteurComplet;
        garants: RestModel.IGarantComplet[];
    }
}

declare namespace ICBusiness.Models.TypeRessource {
    interface ITypeRessource {
        type: string;
        label: string;
        tauxPondere: number;
    }
}

declare namespace ICBusiness.Models.GestionAdministrative {
    interface IModalites {
    }
}

declare namespace ICBusiness.Models.Habilitation {
    interface IInformationsAgent {
        identifiantAgent: string;
        libelleAgent: string;
        elementStructure1: string;
        elementStructure2: string;
        elementStructure3: string;
        elementStructure4: string;
        elementStructure5: string;
        elementStructure6: string;
    }
}

declare namespace ICBusiness.Models.Historique {
    interface IEvenement {
        /**
         * Nofaed_NumeReltEvenDoss
         */
        numeroRelationEvenDossier: number;
        /**
         * Cefadc_CodeEttDoss
         */
        codeEtatDossier: number;
        /**
         * Dtfaed_DateSaisEven
         * Type date au format yyyy-MM-dd
         */
        dateSaisieEven: string;
        /**
         * Lbfamd_MessEnrgSurEvenDoss
         */
        messEnregistrementSurEvenDossier: string;
        /**
         * Dtfaee_DateEfftEven
         * Type date au format yyyy-MM-dd
         */
        dateEffetEven: string;
        /**
         * Ctfaev_CodeTypeEven
         */
        codeTypeEven: string;
        /**
         * Idfase_IdntEnttSaisEven
         */
        idEntiteSaisieEven: string;
        /**
         * Lbfase_LiblEnttSaisEven
         */
        libelleEntiteSaisieEven: string;
        /**
         * Cefhgc_CodeIndicGestCentEven
         */
        codeIndiceGestionCentralEven: number;
        /**
         * Cdfabo_ElemStrcGestBackCent
         */
        elementStructureGestionBackCentral: string;
        /**
         * Idfce3_IdntCaisAsscBackCent
         */
        idCaisseAssuranceBackCentral: number;
        /**
         * LiblEven
         */
        libelleEven: string;
        /**
         * CodeNatrEven
         */
        codeNatureEven: string;
        /**
         * IdntAvisAsscEven
         */
        idAvisAssuranceEven: string;
    }
}

declare namespace ICBusiness.Models.InterroBDF {
    interface IInterroBDFModele {
        idws: string;
        estPresentSutrListeNoire: boolean;
        arretSurSalaire: number;
        inscriptionFCC: string;
        inscriptionFICP: string;
        messageFICP: string;
        messageFCC: string;
        dateAppelFCC: string;
        dateAppelFICP: string;
        oppositions: IOpposition[];
        cleBdf: string;
        resultBdf: IResultBDF;
        codeCotisationFibenDirg: string;
        libelleListnSurCntrTechniqueRegn: string;
        typeLoi: Enum.typeLoi;
        ficpRules: Enum.ficpRules;
    }
    interface IOpposition {
        code: string;
        libelle: string;
        dateDebut: string;
        dateFin: string;
    }
    interface IResultBDF {
        reponseFicp: string;
        reponseFcc: string;
        statutFicp: string;
        statutFcc: string;
        reponseFbe: number;
    }
}

declare namespace ICBusiness.Models.Modalites {
    interface IModalites {
        listePersonnes: Emprunteur.IPersonne[];
        listeCredits: ICredit[];
        activationOuvertureCompteSupport: boolean;
        ouvertureCompteSupport: number;
        activationMultiPayeur: boolean;
        modeDeRecouvrement: EnumModeDeRecouvrement;
        payeurPrincipal: IFluxFinancier;
        payeurImpaye: IFluxFinancier;
        versement: IFluxFinancier;
        contrat: IContrat;
    }
    interface ICredit {
        id: string;
        label: string;
        nombrePeriodes: number;
        montantCapital: number;
        codeDevise: string;
        montantEcheance: number;
        jourEcheance: number;
        idCreditModalite: string;
        idModaliteCalculImpaye: string;
        numeroModaliteRemboursementAnticipe: number;
        declenchementVersements: IDeclenchementVersements;
        listeModalitesCalculImpaye: IModaliteCalculImpaye[];
        listeModalitesRemboursementAnticipe: IModaliteRemboursementAnticipe[];
        listePayeurs: IFluxFinancier[];
    }
    interface IModaliteCalculImpaye {
        code: string;
        label: string;
        value: number;
        isTaux: boolean;
        isReadOnly: boolean;
    }
    interface IModaliteRemboursementAnticipe {
        code: string;
        label: string;
        taux: number;
        tauxConseille: number;
        tauxMaximal: number;
        tauxMinimal: number;
        isSurcout: boolean;
    }
    interface ITypeModaliteCalculImpaye {
        code: string;
        label: string;
        montantConseille: number;
        montantMaximal: number;
        montantMinimal: number;
        tauxConseille: number;
        tauxMaximal: number;
        tauxMinimal: number;
    }
    interface ITypeModaliteRemboursementAnticipe {
        code: number;
        label: string;
        detail: string;
    }
    interface IDeclenchementVersements {
        hasJustificatif: boolean;
        typeRattachement: Common.ICodeLabel<EnumTypeRattachement>;
        montantMinimumVersement: number;
    }
    interface IFluxFinancier {
        id: string;
        mode: Common.ICodeLabel<string>;
        codeModeReglement: string;
        compte: IComptePrelevement;
        estRecouvrement: boolean;
        participationRecouvrement: number;
    }
    interface IComptePrelevement {
        id: string;
        numero: string;
        label: string;
        idPersonne: string;
        intitulePersonne: string;
    }
    interface IContrat {
        type: Common.ICodeLabel<number>;
        forme: EnumFormeContrat;
        isEditable: boolean;
    }
    enum EnumModeDeFluxFinancier {
        iban,
        nom,
        rib,
        tresorerie,
    }
    enum EnumModeDeRecouvrement {
        monoPayeur = 0,
        multiPayeur = 1,
        payeurUniqueParCredit = 2,
    }
    enum EnumTypeRattachement {
        automatique = 65,
        interactif = 73,
    }
    enum EnumFormeContrat {
        sousSeingPrive = 0,
        enLaFormeAuthentique = 1,
    }
}

declare namespace ICBusiness.Models.Navigation.LisaContract.INST_CRDT_CONS_PRO {
    /**  Url Get parameters when accessing step OUVR_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IOuvertureDossierUrlParams extends IInstructionCreditDossierUrlParams {
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
    interface ICreationDossierUrlParams extends ICompleterEmprunteurUrlParams {
        codeDevise: string;
        idEntiteTitulaire: string;
        idPersonne: string;
    }
    /** Context parameters to set when navigating to COMP_INFR_EMPR on processus GERR_EMPR_CRDT */
    interface ICompleterEmprunteurContext {
        identifiantDossier: string;
        dateInstruction: string;
        mode: Enum.ModeOuvertureDossier;
        codeApplication: Enum.CodeApplicationEnum;
        idCompteDe: string;
        codePage: Enum.CodePageEnum;
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
declare namespace ICBusiness.Models.Navigation.LisaContract.CONT_CRDT_INST {
    /** Context parameters to set when navigating to CONT_CRDT_CONSO */
    interface IInstructionContractualisationContext {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        identifiantDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageCode: Enum.CodePageEnum;
    }
    /** Context parameters to set when navigating to CONT_CRDT_CONSO */
    interface IInstructionContractualisationUrlParams {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        idDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageCode: Enum.CodePageEnum;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.NEO {
    interface INeoContext {
        IDFCEJ: string;
        IDFAEC: string;
        IDFAEP: string;
        LISTE: string;
        RETOUR: string;
        IDFADI: string;
        GUICHET: string;
        IDSEC: string;
        ZB: string;
        ACTION: string;
        TRAC: string;
        AGENT: string;
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
        /** Identifiant du projet */
        id: string;
        /** Cout total du projet */
        coutTotal: number;
        /** Identifiant du bien conso */
        idBienConso: string;
        descriptionObjet: string;
        /** Type d'objet commercial (TOC) */
        toc: Models.Common.ICodeLabel<string>;
        /** Type d'objet reglementaire (TOR) */
        tor: Models.Common.ICodeLabel<string>;
        /** Vendeur */
        vendeur: string;
        /** Origine commerciale */
        origineCommerciale: Models.Common.ICodeLabel<string>;
        /** Canal de relation */
        canalRelation: Models.Common.ICodeLabel<string>;
        /** Type de vente/technique de vente */
        typeVente: Models.Common.ICodeLabel<string>;
        /** Flags de visibilité des controles */
        controlesVisibilite: IProjetControles;
        /** Prescripteur */
        prescripteur: IPrescripteur;
        ventilation: IVentilation;
        detailObjetFinance: IDetailObjetFinance;
        estimationObjetFinance: IEstimation;
        coutsPro: ICoutsPro;
    }
    interface ICoutsPro {
        coutTotalHt: number;
        coutTotalTtc: number;
        typeCoutObjet: EnumTypeCoutObjet;
    }
    enum EnumTypeCoutObjet {
        coutObjetHt = 78,
        coutObjetTtc = 79,
    }
    /**
     * Flags d'affichage des données d'un projet
     */
    interface IProjetControles {
        /** Indique si le champ "Canal de relation" doit être affiche. */
        canalRelation: Models.Common.IVisibilite;
        /** Indique si le champ 'Vendeur' doit être affiche. */
        vendeur: Models.Common.IVisibilite;
        /** Indique si le champ 'Prescripteur' doit être affiche. */
        prescripteur: Models.Common.IVisibilite;
        miseEnOeuvre: Models.Common.IVisibilite;
        htTtc: Models.Common.IVisibilite;
    }
    interface IPrescripteur {
        hasPrescripteur: boolean;
        libellePrescripteur: string;
    }
    interface IVentilation {
        id: string;
        idBienVendre: string;
        achatTerrain: number;
        achatImmeubleCommercial: number;
        achatImmeubleHabitation: number;
        constructionImmeuble: number;
        travauxAmenagement: number;
        pasDePorte: number;
        fondsCommerce: number;
        equipements: number;
        vehicules: number;
        partsSociete: number;
        fraisNegociations: number;
        fraisNotaire: number;
        stocks: number;
        stocksHorsInstruction: number;
        autresBfdr: number;
        autresBfdfHorsInstruction: number;
        autres: number;
        autresHorsInstruction: number;
        tva: number;
        rachatsCreances: number;
        coutsPartsFonds: number;
        total: number;
        totalEmprunter: number;
        totalHorsInstruction: number;
        isTresorerie: boolean;
        rachatBienRevendu: number;
    }
    interface IDetailObjetFinance {
        /** Mise en oeuvre du projet */
        miseEnOeuvre: Models.Common.ICodeLabel<string>;
        etageAdresse: string;
        batimentAdresse: string;
        rueAdresse: string;
        codePostalAdresse: string;
        localiteAdresse: string;
        paysAdresse: string;
    }
    interface IEstimation {
        montant: number;
        date: string;
        modeEstimation: ICBusiness.Models.Common.ICodeLabel<string>;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import BusinessModel = Models.Assurances;
    /**
     * ModelTransformers de l'objet metier 'Assurance'
     */
    class Assurance {
        static mapListeAssurance(assurances: RestModel.SchemaComplet.IAssuranceComplet[]): BusinessModel.IAssurance[];
        static mapRetourAjoutAssurance(retour: RestModel.AjouterAssuranceControle.IResultatAjouterAssuranceAvecControles): Models.Assurances.IRetourAjoutAssurance;
        static mapAssuranceLecture(assurance: RestModel.LireElement.IAssuranceLecture, couvertures: RestModel.LireElement.ICouvertureCreditLecture[], cotisations: RestModel.LireElement.ICotisationLecture[], personne: RestModel.LireElement.IPersonnePhysiqueLecture, convention: Models.Assurances.IDetailsConventionAssurance): Models.Assurances.IAssurance;
        private static getCotisationFromCouverture(couverture, cotisations);
        private static mapCotisation(cotisation);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class ConventionsAssurance {
        /** Index du choix "Minimum" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixMin;
        /** Index du choix "Maximum" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixMax;
        /** Index du choix "Conseillé" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixConseille;
        /** Liste des IDs d'anciens contrats */
        private static anciensContrats;
        static mapConventionsAssurance(conventions: ICRest.Modeles.ListerConventionsAssuranceCompatible.IScConventionResume[], typesAssurance: ICRest.CreditParametre.Models.TypeAssurance.IScTypeAssurance[]): Models.Assurances.IConventionAssurance[];
        static mapDetailsConventioNAssurance(convention: ICRest.CreditParametre.Models.ChargerConventionAssurance.IScConventionAssurance): Models.Assurances.IDetailsConventionAssurance;
        /**
         * Récupère les listes de taux/montants associés : borne min [0], borne max [1], valeur conseillée [2]
         * La liste est renvoyée dans l'ordre croissant : min, max, conseillé
         */
        private static getCodeLabelListes(data);
        /** Retourne les règles de visibilités selon le mode de calcul pour les champs Taux & Montant */
        private static getTauxMontantVisibilite(convention);
        /** Retourne le libellé du type de contrat (contrat / ancien contrat) */
        private static getContratTypeLabel(numeroExterneConvention);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.LireElement;
    class Address {
        static mapAddress(personne: RestModel.IPersonneLecture): Models.Common.IAddress;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class DateTransformer {
        /**
         * Retourne null si l'annee est 0001 ou 1901
         * @param dateNeo
         */
        static mapDate(dateNeo: string): string;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Montant {
        static getMontantByDevise(estDeviseDossier: boolean, montant: number, codeDevise: string, tauxMontage: number): number;
        private static getMontant(montant, codeDevise, tauxMontage);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.CreditParametre.Models.ParametreApplicatif;
    class ParametreApplicatif {
        static mapParametreApplicatif(parametreApplicatif: RestModel.IScParamApplicatif): Models.Common.IParametreApplicatif;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Avis {
        static mapListAvisDecision(listAvis: ICRest.Modeles.SchemaComplet.IElementComplet[]): ICBusiness.Models.Decision.IAvis[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Decision {
        /**
         * Fonction pour modifier une 'decision' du service rest en 'decision' du business
         * @param donnees
         */
        static mapDecision(donnees: ICRest.Modeles.SchemaComplet.IDecisionPreteurComplet): ICBusiness.Models.Decision.IDecision;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class IndicateursOctroi {
        /**
         * Fonction de conversion du résultat
         * @param endettement
         */
        static mapIndicateursOctroi(resultatEndettement: ICRest.Modeles.Endettement.IResultatCalculEndettement): Models.Decision.IIndicateursOctroi;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    type IClausePersonnaliseeMaj = RestModel.AjouterClausePersonnalisee.IClausePersonnaliseeMaj | RestModel.MajElement.IClausePersonnaliseeMaj;
    class Contrat {
        static mapContrat(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): ICBusiness.Models.Edition.IContrat;
        static mapContratCreditInterne(credits: ICRest.Modeles.SchemaComplet.ICreditInterneComplet[]): ICBusiness.Models.Edition.ICreditInterne[];
        /**
         * Fonction pour mapper les signataires personnes physiques
         * @param contrat
         */
        static mapContratSignataires(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): ICBusiness.Models.Edition.IPersonnePhysique[];
        /**
         * Fonction pour mapper les clauses emprunteur
         * @param contrat
         */
        static mapClausesEmprunteur(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IClausePersonnalisee[];
        /**
         * Fonction pour mapper les clauses rédacteur d'acte
         * @param contrat
         */
        static mapClausesRedacteurActe(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IClausePersonnalisee[];
        /**
         * Fonction pour mapper les clauses en fonction d'un type passé en paramètre
         * @param contrat
         * @param typeClause
         */
        protected static mapClauses(contrat: ICRest.Modeles.SchemaComplet.IContratComplet, typeClause: number): Models.Edition.IClausePersonnalisee[];
        /**
         * Méthode pour mapper une clause ICrest en clause ICBusiness
         * @param clause
         */
        static mapClause(clause: ICRest.Modeles.AjouterClausePersonnalisee.IClausePersonnaliseeLecture): Models.Edition.IClausePersonnalisee;
        /**
         * Fonction pour déterminer la présence d'au moins une clause emprunteur ou rédacteur d'acte
         * @param contrat
         */
        protected static existeClauses(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): boolean;
        /**
         *  Fonction pour mapper le projet
         * @param contrat
         */
        protected static mapProjet(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IProjet;
        /**
         * Fonction pour mapper les mandats
         * @param contrat
         */
        protected static mapMandats(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IMandats[];
        /**
         * Fonction pour mapper les instituts d'émission
         * @param contrat
         */
        protected static mapInstitutsEmission(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IInstitutEmission[];
        protected static creerLibelleLongSignataire(signataire: ICRest.Modeles.SchemaComplet.IPersonnePhysiqueComplet): string;
        /**
         * Méthode pour mapper une clause personnalisée business en clause personnalisée maj
         * @param clause
         */
        static mapClausePersonnaliseeMaj(clause: ICBusiness.Models.Edition.IClausePersonnalisee): IClausePersonnaliseeMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Emprunteur {
        static mapEmprunteur(intervenants: Models.Intervenants.IIntervenantsComplet): Models.Emprunteur.IEmprunteur;
        private static getICodeLabelOrDefault(code, label);
        static mapEmprunteurMaj(emprunteur: Models.Emprunteur.IEmprunteur, patrimoine: Models.Emprunteur.IPatrimoineEmprunteur): RestModel.MajElements.IEmprunteurMaj;
        static mapGarantMaj(garant: Models.Emprunteur.IGarant, patrimoine: Models.Emprunteur.IPatrimoineEmprunteur, nombreDeGarants: number): RestModel.MajElements.IGarantMaj;
        private static extractPersonneMoraleEmprunteur(emp);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Personne {
        private static hasRole(personne, role);
        static estGarante(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estPayeuse(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estMorale(personne: RestModel.SchemaComplet.IPersonneComplet | RestModel.LireElement.IPersonneLecture): boolean;
        static estPhysique(personne: RestModel.SchemaComplet.IPersonneComplet | RestModel.LireElement.IPersonneLecture): boolean;
        static estEmprunteur(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estConjointNonEmprunteur(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estAssocie(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estRepresentantLegal(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        /**
         * Construit l'intitulé d'une personne Physique OU Morale
         * @param personne
         */
        static getIntitule(personne: RestModel.SchemaComplet.IPersonneComplet | RestModel.LireElement.IPersonneLecture): string;
        static getPersonnePhysiqueByIdOrEmpty(idPersonne: string, personnes: RestModel.SchemaComplet.IPersonneComplet[]): RestModel.SchemaComplet.IPersonneComplet;
        static mapActivite(activite: RestModel.LireElement.IActiviteLecture, personne: RestModel.LireElement.IPersonnePhysiqueLecture): Models.Emprunteur.IActivite;
        static mapActiviteMaj(activite: Models.Emprunteur.IActivite): RestModel.MajElement.IActiviteMaj;
        static mapDetailPersonnePhysique(personne: RestModel.LireElement.IPersonnePhysiqueLecture, activite: RestModel.LireElement.IActiviteLecture, activiteProfessionnelle: ICRest.Tiers.Models.CorporateActiviteProfessionnelle.IActiviteProfessionnelle, regimeMatrimonial: Models.Common.ICodeLabel<string>, emprunteur: RestModel.LireElement.IEmprunteurLecture): Models.Emprunteur.IDetailPersonnePhysique;
        static mapDetailPersonneMorale(personne: RestModel.LireElement.IPersonneMoraleLecture): Models.Emprunteur.IDetailPersonneMorale;
        static mapGarant(garant: RestModel.SchemaComplet.IGarantComplet): Models.Emprunteur.IGarant;
        static mapPersonne(personne: RestModel.SchemaComplet.IPersonneComplet): Models.Emprunteur.IPersonne;
        static mapPersonneMorale(personne: RestModel.SchemaComplet.IPersonneMoraleComplet): Models.Emprunteur.IPersonneMorale;
        static mapPersonnePhysique(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet): Models.Emprunteur.IPersonnePhysique;
        static getListeIdwsOppositions(listeOppositions: RestModel.SchemaComplet.IOppositionComplet[]): string[];
        private static getLibelleRoleRepresentant(rolesPersonnePourDossier);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.SchemaComplet;
    type IChargeOrCreditExistantComplet = RestModel.IChargeComplet | RestModel.ICreditExistantComplet;
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
        static mapRevenusCharges(intervenants: Models.Intervenants.IIntervenantsComplet, endettement: ICRest.Modeles.Endettement.IEndettement): Models.Emprunteur.IRevenusCharges;
        static mapSyntheseFinanciere(endettement: ICRest.Modeles.Endettement.IEndettement): Models.Emprunteur.ISyntheseFinanciere;
        private static getAffectationBudgetItemByIdws(idPersonne, personnes, emp);
        private static getCreditTypeByCode(code);
        private static getPeriodiciteByCode(code);
        private static getPhaseTypeByCode(code);
        private static getStatusByCode(code, masculine);
        private static mapCharge(c, personnes, emp?);
        private static mapRevenu(ress, personnes, emp?);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class SurfaceFinanciere {
        static mapCompteDepotMaj(compte: Models.Emprunteur.ICompteHorsCe): RestModel.AjouterComptePersonne.ICompteDepotMaj;
        static mapDetailCompteCe(compte: Models.Emprunteur.ICompte, compteLecture: RestModel.LireElement.ICompteLecture): Models.Emprunteur.ICompte;
        static mapDetailCompteHorsCe(compte: Models.Emprunteur.ICompte, compteDepotLecture: RestModel.LireElement.ICompteDepotLecture): Models.Emprunteur.ICompteHorsCe;
        static mapDetailEpargne(epargne: Models.Emprunteur.IEpargne, epargneLecture: RestModel.LireElement.IFamilleEpargneLecture): Models.Emprunteur.IEpargne;
        static mapFamilleEpargneMaj(epargne: Models.Emprunteur.IEpargne): RestModel.AjouterFamilleEpargne.IFamilleEpargneMaj;
        static mapSurfaceFinanciere(intervenants: Models.Intervenants.IIntervenantsComplet): Models.Emprunteur.ISurfaceFinanciere;
        private static getAccountStateByCode(code, codeEtablissement);
        private static getCompositionModeByCode(code);
        private static isCe(element);
        private static mapCompte(compte, personnes);
        private static mapDetailSyntheseEpargne(int);
        private static mapEpargne(epargne, personnes);
        private static mapPatrimoineEmprunteur(int);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.CreditParametre.Models;
    class TypeRessource {
        static mapTypeRessource(typeRessource: RestModel.TypeRessource.IScTypeRessource): Models.TypeRessource.ITypeRessource;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import ApiModel = ICRest.Modeles.LireElement;
    class CreditPhaseMapper {
        getPhases(produitFinancier: ICRest.CreditParametre.Models.ChargerProduitFinancier.IScProduitFinancier, ci: ApiModel.ICreditInterneLecture, listePhases: ApiModel.ICreditPhaseLecture[], listeComplementPhase: ApiModel.IComplementPhasePretCombineLecture[], listeParametreRevision: ApiModel.ICreditParamRevisionParPhaseLecture[], listePalierProgressif: ApiModel.ICreditPalierProgressionLecture[], listePalierProgressifCatalogue: ICRest.CreditParametre.Models.paliersDeProgressionParPhase.IScPaliersDeProgressionParPhase[], listeCreditParamIndexation: ApiModel.ICreditParamIndexationLecture[], tauxNbDecimals: number): Models.Financement.ICreditPhaseModel;
        private getCreditPhase(produitFinancier, phaseDuCredit, pap, ci, listeComplementPhase, listeParametreRevision, listePalierProgressif, listePalierProgressifCatalogue, listeCreditParamIndexation);
        private getCreditPhaseFromProduit(pap, ci, produitFinancier);
        private getQuotiteAmortissement(phaseDuCredit, cp);
        private getParametreRevision(phaseDuCredit, cp, listeCreditParamIndexation);
        private getJeuDeParametre(listeJeuxparamatre);
        private getParamIndexation(pi);
        private getPalierProgressif(palierCatalogue, palierProgresion?);
        private getModeExpressionTaux(CTFCAM, codeIndexTauxProgressifAmortissement);
        private getQuotiteCredit(quotient, montant);
        private getPhaseObligatoire(codeTypePhase, produitFinancier);
        private getLibellePhase(codeTypePhase, codeTypePretCbin);
        private getTaux(phase?);
        /**
         * genere un Id aléatoire
         */
        private getNewGuid();
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
    import RestModel = ICRest.Modeles.SchemaComplet;
    import BusinessModel = Models.Financement;
    /**
     * ModelTransformers de l'objet metier 'Plan Financement'
     */
    class PlanFinancement {
        static mapPlanFinancement(planFinancement: RestModel.IPlanFinancementComplet): BusinessModel.IPlanFinancement;
        private static mapControles(listeControle, nomControle);
        static mapCreditInterne(credit: RestModel.ICreditInterneComplet, accessoiresLies: BusinessModel.IAccessoireLieProduit[], accessoiresComplementaires: BusinessModel.IAccessoireComplementaire[]): BusinessModel.ICreditInterne;
        private static mapCreditsInternes(listeCredit, listeAccessoiresLies, listeAccessoiresComplementaires);
        private static mapControlesAccessoire(projet);
        private static getAccessoiresLies(credit, listeAccessoiresLies);
        private static getAccessoiresComplementaires(credit, listeAccessoiresComp);
        static getLibelleCodePeriodeCredit(code: number): string;
        static mapPlanFinancementMaj(data: BusinessModel.IPlanFinancementMajRequest): ICRest.Modeles.MajElements.IElementMaj;
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

declare namespace ICBusiness.ModelsTransformers {
    import LireElementModel = ICRest.Modeles.LireElement;
    class Synthese {
        static mapSyntheseFinancement(listeCredits: LireElementModel.ICreditInterneLecture[], phases: LireElementModel.ICreditPhaseLecture[], codeDeviseDossier: string): Models.Financement.ISyntheseFinancement;
        private static getCoutTotalCredit(credit, montantCapital, estDeviseDossier);
        private static getTypeTaux(credit);
        private static mapCreditSynthese(credit, phases, codeDeviseDossier);
        private static mapPhaseCreditSynthese(phase, credit, estDeviseDossier);
        private static mapJustificationTegCreditSynthese(echeancesJustifiees);
        private static mapFraisCreditSynthese(groupeJustificationTeg);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import RestParamModel = ICRest.CreditParametre.Models;
    import ModalitesModel = Models.Modalites;
    type IPayeurMaj = RestModel.AjouterPayeur.IPayeurMaj | RestModel.MajElement.IPayeurMaj;
    class Modalites {
        private static controleGadCompteSupport;
        private static controleGadMultiPayeur;
        private static controleGadRaTauxIndemnite;
        private static controleGadRaSurcoutTaux;
        private static modalitesIndemnite;
        private static modalitesRetard;
        private static modalitesReduction;
        static mapCredit(credit: RestModel.SchemaComplet.ICreditInterneComplet, listeComptes?: RestModel.SchemaComplet.ICompteComplet[], listePersonnes?: Models.Emprunteur.IPersonne[]): ModalitesModel.ICredit;
        static mapModalites(gestionAdminComplet: RestModel.SchemaComplet.IGestionAdministrativeComplet): ModalitesModel.IModalites;
        static mapModaliteRemboursementAnticipe(remboursementAnticipeRestModel: RestParamModel.RemboursementAnticipe.IScRemboursementAnticipe): Models.Common.ICodeLabel<number>;
        static mapModalitesCalculImpaye(modaliteImpaye: RestParamModel.ModalitesImpayes.IScModalitesDImpayesParSecteurEtCatEmprunteur): ModalitesModel.ITypeModaliteCalculImpaye;
        static mapCreditModaliteMaj(credit: ModalitesModel.ICredit, fullObject: boolean): RestModel.MajElement.ICreditModaliteMaj;
        static mapJourEcheanceCreditMaj(identifiantCredit: string, jourEcheance: number): RestModel.MajElement.ICreditInterneMaj;
        static mapJustificatifCreditMaj(identifiantCredit: string, declenchementVersements: ModalitesModel.IDeclenchementVersements): RestModel.MajElement.ICreditInterneMaj;
        static mapModalitesDossierMaj(identifiantDossier: string, modalites: ModalitesModel.IModalites): RestModel.MajElement.IDossierMaj;
        static mapPayeurMaj(payeur: ModalitesModel.IFluxFinancier): IPayeurMaj;
        static mapPayeurImpayeMaj(dossier: Models.Dossier.IDossierSchema, payeurImpaye: ModalitesModel.IFluxFinancier): RestModel.MajElement.IDossierMaj;
        static mapVersementMaj(dossier: Models.Dossier.IDossierSchema, listeCredits: ModalitesModel.ICredit[], versement: ModalitesModel.IFluxFinancier): RestModel.MajElements.IElementMaj[];
        static transformModalitesCalculImpaye(modaliteImpayeRestModel: RestParamModel.ModalitesImpayes.IScModalitesDImpayesParSecteurEtCatEmprunteur): Models.Common.ICodeLabel<string>;
        private static getCompteFromNumero(listeComptes, listePersonnes, numeroCompte);
        private static mapCalculImpaye(retenueImpaye, code, isReadOnly?);
        private static mapCalculsImpayes(retenuesImpayes);
        private static mapCompte(compte, personne);
        private static mapContrat(gadm);
        private static mapDeclenchementVersements(credit);
        private static mapFluxFinancier(compte, modeDeReglement, codeModeReglement, estRecouvrement?);
        private static mapModeDeReglement(codeTypeDomiciliation, libelleDeReglement);
        private static mapPayeur(payeur, compte, personne);
        private static mapPayeurPrincipal(credit);
        private static mapPersonne(personneComplet);
        private static mapRemboursementAnticipe(taux, code, label, isSurcout?);
        private static mapRemboursementsAnticipes(creditModalite);
        private static mapVersementCreditMaj(credit, versement, typeReglement);
        private static mapVersementDossierMaj(dossier, versement, typeReglement);
        private static transformCompte(compte);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.CreditParametre.Models;
    class InformationsAgent {
        static mapInformationsAgent(data: RestModel.InfoAgent.IScInformationAgent): Models.Habilitation.IInformationsAgent;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Evenement {
        /**
         * Fonction pour 'mapper' une liste d'événements ICRest en une liste d'événements ICBusiness
         * @param eventRest
         */
        static mapEvenements(eventsRest: ICRest.Modeles.LireElement.IEvenementLecture[]): ICBusiness.Models.Historique.IEvenement[];
        /**
         * Fonction pour 'mapper' un événement ICRest en événement ICBusiness
         * @param eventRest
         */
        static mapEvenement(eventRest: ICRest.Modeles.LireElement.IEvenementLecture): ICBusiness.Models.Historique.IEvenement;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class InterroBdfTransformer {
        static mapIInterroBFDModele(interditBancaireLecture: ICRest.Modeles.LireElement.IInterditBancaireLecture, oppositionsLecture: ICRest.Modeles.LireElement.IOppositionLecture[], cleBdf: string, typeLoi: number, ficpRules: Enum.ficpRules): Models.InterroBDF.IInterroBDFModele;
        /**
         * Valeur "N (ascii 78 Non)" par défaut si pas de "O (ascii 79 Oui)" de défini
         * @param codeArretSurSalaireRecu
         */
        static defineArretSurSalaire(codeArretSurSalaireRecu: number): number;
        static mapIInterditBancaireMaj(interroBdfModel: Models.InterroBDF.IInterroBDFModele): ICRest.Modeles.MajElements.IInterditBancaireMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.MajElements;
    class Prescripteur {
        static mapPrescripteurContexteSdpi(contexte: Models.Common.IContext, dossierData: ICRest.Modeles.LireElement.IDossierLecture, infosAgent: Models.Habilitation.IInformationsAgent, emprunteur: Models.Emprunteur.IEmprunteur, personneSdpi: Models.Projet.IPersonneSdpi): Models.Projet.IPrescripteurContexteIn;
        /** Map les données de mise à jour d'un prescripteur vers le format REST */
        static mapPrescripteurMaj(identifiantDossier: string, contexte: Models.Projet.IPrescripteurContexteOut): RestModel.IDossierMaj;
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
        static mapProjet(projet: RestModel.SchemaComplet.IProjetNonImmobilierComplet, bienFinance: RestModel.SchemaComplet.IBienConsoFinanceComplet): Models.Projet.IProjet;
        /**
         * Map les données d'affichage des controles
         * @param projet
         */
        private static mapControlesProjet(projet);
        /**
         * Map les données au format REST pour la mise à jour d'un projet
         * @param idProjet Identifiant du projet
         */
        static getEmptyProjetMajRequest(): ICRest.Modeles.DefinirProjet.IProjetNonImmobilierMaj;
        static mapProjetNonImmoMaj(data: Models.Projet.IProjet, isPro: boolean): ICRest.Modeles.MajElements.IProjetNonImmobilierMaj;
        static mapBienVendreMaj(ventilation: Models.Projet.IVentilation): ICRest.Modeles.MajElements.IBienAVendreMaj;
        static mapVentilationMaj(ventilation: Models.Projet.IVentilation): ICRest.Modeles.MajElements.ITresorerieFinanceeMaj | ICRest.Modeles.MajElements.IBienDetailleMaj;
        static mapVentilation(projet: ICRest.Modeles.SchemaComplet.IProjetNonImmobilierComplet): Models.Projet.IVentilation;
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

declare namespace ICBusiness.Services.Assurances {
    /** Services relatifs aux assurances */
    interface IAssurancesService {
        getAssurances(idDossier: string, source: Enum.CodePageEnum): ng.IPromise<Models.Assurances.IAssurance[]>;
        /** Ajoute une assurance */
        ajouterAssuranceControle(idDossier: string, idPersonne: string, idConvention: string, creditsCouvert: string[]): ng.IPromise<Models.Assurances.IRetourAjoutAssurance>;
        /** Supprime une assurance */
        supprimerAssurance(idDossier: string, idAssurance: string): ng.IPromise<void>;
        /** Liste les conventions d'assurances compatibles avec un couple de personnes/crédits */
        listerConventionsAssuranceCompatible(idDossier: string, dateTraitement: string, codeEtablissement: number, listeIdCredit: string[], listeIdPersonnes: string[]): ng.IPromise<Models.Assurances.IConventionAssurance[]>;
        /** Lecture des détails d'une convention d'assurance */
        chargerConventionAssurance(dateTraitement: string, codeEtablissement: number, identifiantConvention: string): ng.IPromise<Models.Assurances.IDetailsConventionAssurance>;
        /** Mise à jour des données d'une assurance */
        majCouverturesAssurance(idDossier: string, assurance: Models.Assurances.IAssurance): ng.IPromise<void>;
        /** Lecture des détails d'une assurance */
        lireAssurance(idDossier: string, dateTraitement: string, codeEtablissement: number, idAssurance: string): ng.IPromise<Models.Assurances.IAssurance>;
    }
    /** Services relatifs aux assurances */
    class AssurancesService implements IAssurancesService {
        private $q;
        private conventionsAssuranceService;
        private creditParametreService;
        private assuranceService;
        private elementService;
        private schemaService;
        static $inject: string[];
        constructor($q: ng.IQService, conventionsAssuranceService: ICRest.Services.Dossier.IConventionsAssuranceService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, assuranceService: ICRest.Services.Dossier.IAssuranceService, elementService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService);
        getAssurances(idDossier: string, source: Enum.CodePageEnum): ng.IPromise<Models.Assurances.IAssurance[]>;
        ajouterAssuranceControle(idDossier: string, idPersonne: string, idConvention: string, creditsCouvert: string[]): ng.IPromise<Models.Assurances.IRetourAjoutAssurance>;
        supprimerAssurance(idDossier: string, idAssurance: string): ng.IPromise<void>;
        lireAssurance(idDossier: string, dateTraitement: string, codeEtablissement: number, idAssurance: string): ng.IPromise<Models.Assurances.IAssurance>;
        listerConventionsAssuranceCompatible(idDossier: string, dateTraitement: string, codeEtablissement: number, listeIdCredit: string[], listeIdPersonnes: string[]): ng.IPromise<Models.Assurances.IConventionAssurance[]>;
        chargerConventionAssurance(dateTraitement: string, codeEtablissement: number, identifiantConvention: string): ng.IPromise<Models.Assurances.IDetailsConventionAssurance>;
        majCouverturesAssurance(idDossier: string, assurance: Models.Assurances.IAssurance): ng.IPromise<void>;
        private listerTypeAssurance(dateTraitement, codeEtablissement);
    }
}

declare namespace ICBusiness.Services.Common {
    interface IBatchRequestService {
        batch(functions: (() => void)[]): IBatchRequest;
    }
    class BatchRequestService implements IBatchRequestService {
        private $q;
        private logger;
        private restElementSchemaService;
        private businessElementSchemaService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, logger: ICCommon.Logger.ILogger, restElementSchemaService: ICRest.Services.ElementSchema.IElementSchemaService, businessElementSchemaService: Services.Common.IElementSchemaService);
        batch(functions: (() => void)[]): BatchRequest;
    }
    interface IBatchRequest {
        execute(): void;
    }
    class BatchRequest implements IBatchRequest {
        private functions;
        private restElementSchemaService;
        private businessElementSchemaService;
        private $q;
        private resultat;
        private identifiantDossier;
        private entreesLireSchema;
        private executed;
        private order;
        private exception;
        private defers;
        constructor(functions: (() => void)[], restElementSchemaService: ICRest.Services.ElementSchema.IElementSchemaService, businessElementSchemaService: Services.Common.IElementSchemaService, $q: ng.IQService);
        /** execute functions batching lireSchemasComplet */
        execute(): void;
        /** wrap lireSchemaComplet to divert the function implementation */
        private wrap();
        /** wrapper of lireSchemasComplet */
        private wrapper;
        /** unwrap lireSchemasComplet to set the original implementation */
        private unwrap();
        /**
         * Wait for lireSchemaComplet resolution
         * @param functionOrder
         * @param numberOfElement
         */
        private waitForResolution(functionOrder, numberOfElement);
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

declare namespace ICBusiness.Services.Common {
    interface IElementSchemaService {
        /**
         * Lecture d'éléments de schema à la demande
         * @param identifiantDossier
         * @param descriptionSchema
         */
        lireSchemasComplet(identifiantDossier: string, descriptionSchema: ICRest.Modeles.SchemaComplet.IEntreeLireSchemaComplet[]): ng.IPromise<ICRest.Modeles.SchemaComplet.IResultatLireSchemaComplet[]>;
    }
    class ElementSchemaService implements IElementSchemaService {
        private elementSchemaService;
        static $inject: Array<string>;
        constructor(elementSchemaService: ICRest.Services.ElementSchema.IElementSchemaService);
        lireSchemasComplet(identifiantDossier: string, descriptionSchema: ICRest.Modeles.SchemaComplet.IEntreeLireSchemaComplet[]): ng.IPromise<ICRest.Modeles.SchemaComplet.IResultatLireSchemaComplet[]>;
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
        existsAdresseParametreRubrique(dateDeTraitement: string, codeEtablissement: number, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        /**
         * Renvoie vrai si l'adresse paramètre rubrique est active pour une application donnée
         * @param dateDeTraitement
         * @param codeApplication
         * @param codeParametre
         */
        isAdresseParametreRubriqueActif(dateDeTraitement: string, codeEtablissement: number, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        /**
         * Renvoie la liste des typologies d'instruction
         */
        getListeTypologiesInstruction(dateTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie un établissement correspondant au filtre passé en paramètre
         * @param dateDeTraitement
         * @param filtre
         */
        getEtablissement(dateDeTraitement: string, filtre: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        /**
         * Renvoie le paramètre applicatif correspondant au code passé en paramètre
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param codeParametreApplicatif
         */
        getParametreApplicatif(dateDeTraitement: string, codeEtablissement: number, codeParametreApplicatif: string): ng.IPromise<Models.Common.IParametreApplicatif>;
        /**
         * Renvoie la liste des types de role
         */
        getListeTypesRole(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
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
         * Renvoie la liste des fonctionnements de compte
         */
        getListeFonctionnementsCompte(codeEtablissement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Renvoie la liste des libellés pour Employeur commun
         */
        getListeLibelleEmployeurCommun(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Renvoie la liste des modes de composition
         */
        getListeModesDeComposition(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
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
        getListeStatutRessource(masculine: boolean, future: boolean): ng.IPromise<Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[]>;
        /**
         * Renvoie la liste des types de charges
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        getListeTypeCharge(dateDeTraitement: string, codeEtablissement: number, estPersonnePhysique: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des types de crédit existant
         */
        getListeTypeCreditExistant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeLocalites(dateTraitement: string, codeEtablissement: number, codePostaux: string[], localites: string[]): ng.IPromise<Models.Projet.ILocalites[]>;
        /**
         * Renvoie la liste des types de phase
         */
        getListeTypePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des types de règlements
         * @param context
         */
        getListeTypeReglement(dateDeTraitement: string, codeEtablissement: number, isRecouvrement: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des types de ressources
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        getListeTypeRessource(dateDeTraitement: string, codeEtablissement: number, estPersonnePhysique: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des constantes
         * @param dateDeTraitement
         * @param codeConstante L' [[identifiant-listes-constantes]] recherché
         */
        getListeConstantes(dateDeTraitement: string, codeConstante: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /** Renvoie la liste des bénéficiaires filtré par rapport à la date de traitement */
        getListeBeneficiaire(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie le régime matrimonial correspondant au code passé en paramètre
         * @param dateDeTraitement
         * @param codeRegimeMatrimonial
         */
        getRegimeMatrimonialByCode(dateDeTraitement: string, codeRegimeMatrimonial: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
    }
    class CreditParametreService implements ICreditParametreService {
        private $q;
        private creditParametreService;
        private cacheService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, cacheService: Services.Common.ICacheService);
        getListeTocTors(dateDeTraitement: string, familleObjetCommercialise: Enum.NatureProjetEnum): ng.IPromise<Models.Projet.INatureFinancement[]>;
        existsAdresseParametreRubrique(dateDeTraitement: string, codeEtablissement: number, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        isAdresseParametreRubriqueActif(dateDeTraitement: string, codeEtablissement: number, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        getEtablissement(dateDeTraitement: string, filtre: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        getListeLocalites(dateTraitement: string, codeEtablissement: number, codePostaux: string[], localites: string[]): ng.IPromise<Models.Projet.ILocalites[]>;
        getListeFonctionnementsCompte(codeEtablissement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getParametreApplicatif(dateDeTraitement: string, codeEtablissement: number, codeParametreApplicatif: string): ng.IPromise<Models.Common.IParametreApplicatif>;
        getListeCategoriesEmprunteurs(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypologiesInstruction(dateTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListerDevises(codeEtablissement: number, dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeLibelleEmployeurCommun(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeModesDeComposition(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeMotifRemboursementAnticipe(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListePeriodicitePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListePrimoAccedant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeRisqueEpargne(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeStatutOccupationLogement(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeStatutRessource(masculine: boolean, future: boolean): ng.IPromise<Models.Common.ICodeLabel<Models.Emprunteur.EnumBudgetStatus>[]>;
        getListeTypeCharge(dateDeTraitement: string, codeEtablissement: number, estPersonnePhysique: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeCreditExistant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeTypePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeReglement(dateDeTraitement: string, codeEtablissement: number, isRecouvrement: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeRessource(dateDeTraitement: string, codeEtablissement: number, estPersonnePhysique: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Récupère la liste des constantes demandée.
         * @param dateDeTraitement Date de traitement du dossier
         * @param codeConstante Code de la constance recherchée (cf. ICBusiness.Constantes.ListeConstantes)
         */
        getListeConstantes(dateDeTraitement: string, codeConstante: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeBeneficiaire(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypesRole(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getRegimeMatrimonialByCode(dateDeTraitement: string, codeRegimeMatrimonial: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        private mapListeBeneficiaire(listeBeneficiaire, date);
        private filterTypeCharge(typeCharge, estPersonnePhysique);
        private filterTypeReglement(typeReglement, dateDeTraitement, isRecouvrement);
        private filterTypeRessource(typeRessource, estPersonnePhysique);
        private getListeEtablissementsParFiltre(dateDeTraitement, filtre?);
        private getListeParametresApplicatifs(dateDeTraitement, codeEtablissement);
        private transformCategorieEmprunteur(categorie);
        private transformConstante(constante);
        private transformDevise(devise);
        private transformEtablissement(etablissement);
        private transformRegimeMatrimonial(regimeMatrimonial);
        private transformRisqueEpargne(epargne);
        private transformTypeCharge(typeCharge);
        private transformTypeReglement(typeReglement);
        private transformTypeRessource(typeRessourceRestModel);
    }
}

declare namespace ICBusiness.Services.Decision {
    interface IDecisionService {
        /**
         * Déclaration de la fonction de récupération des informations de décision
         * @param request : la demande de type ICBusiness.Models.Decision.IDecisionRequest
         */
        getDecision(request: ICBusiness.Models.Decision.IDecisionRequest): ng.IPromise<ICBusiness.Models.Decision.IDecisionPreteur>;
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
        ajouterAvis(identifiantDossier: string, avis: Models.Decision.IAvis): ng.IPromise<Models.Decision.IAvis>;
        /**
         * Déclaration de la lecture du plan et des avis pour décision
         * @param identifiantDossier
         */
        lirePlanAvisDecision(identifiantDossier: string): ng.IPromise<Models.Decision.IDecisionPreteur>;
    }
    class DecisionService implements IDecisionService {
        private $q;
        private schemaService;
        private dossierService;
        private decisionService;
        static $inject: string[];
        constructor($q: ng.IQService, schemaService: Services.Common.IElementSchemaService, dossierService: ICRest.Services.Dossier.DossierService, decisionService: ICRest.Services.Dossier.DecisionService);
        /**
         * Lecture des informations pour la décision prêteur
         * @param identifiantDossier
         */
        getDecision(request: ICBusiness.Models.Decision.IDecisionRequest): ng.IPromise<ICBusiness.Models.Decision.IDecisionPreteur>;
        validerAccordPreteur(identifiantDossier: string, dateAccordPreteur: string, avis: string): ng.IPromise<void>;
        refuserAccordPreteur(identifiantDossier: string, dateRefus: string): ng.IPromise<void>;
        annulerAccordPreteur(identifiantDossier: string): ng.IPromise<Models.Decision.IResultatOffrePretIndustrialisee>;
        ajouterAvis(identifiantDossier: string, avis: Models.Decision.IAvis): ng.IPromise<Models.Decision.IAvis>;
        /**
         * Implémentation de la fonction de lecture du plan, des avis pour la décision et des informations sur la décision
         * (i.e. décision et habilitations)
         * @param identifiantDossier
         */
        lirePlanAvisDecision(identifiantDossier: string): ng.IPromise<Models.Decision.IDecisionPreteur>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IParamsControleDecision {
        idDossier: string;
        /**
         * Type date au format yyyy-MM-dd
         */
        dateAccordPreteur: string;
        forcerControleAvtAccessoirePret: boolean;
        forcerControleBale2: boolean;
        forcerControleReglementaire: boolean;
    }
    interface IControleDossierService {
        /**
         * Controle manuelle du dossier
         * @param idDossier
         */
        controlerDossier(idDossier: string): ng.IPromise<Models.Dossier.IControleDossier>;
        /**
         * Controle de completude avant decision prêteur
         * @param idDossier
         */
        controlerCompletude(idDossier: string): ng.IPromise<Models.Dossier.IControleDossier>;
        /**
         * Controle après la décision prêteur
         * @param params
         */
        controlerDecision(params: IParamsControleDecision): ng.IPromise<Models.Dossier.IControleDossier>;
    }
    class ControleDossierService implements IControleDossierService {
        private controleRestService;
        static $inject: string[];
        constructor(controleRestService: ICRest.Services.Controle.IControleService);
        controlerDossier(idDossier: string): ng.IPromise<Models.Dossier.IControleDossier>;
        controlerCompletude(idDossier: string): ng.IPromise<Models.Dossier.IControleDossier>;
        controlerDecision(params: IParamsControleDecision): ng.IPromise<Models.Dossier.IControleDossier>;
        private maplisteAonmalieToControle(anomalies);
        private mapRetourDecisionToControle(retour);
        private mapRetourDecision(r);
        private mapRestAnomalieToBusinessAnomalie(anomalie);
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
        /**
         * Sauvegarde puis tranfere le dossier dans NEO
         * @param identifiantDossier
         */
        transfererDansNeo(identifiantDossier: string): ng.IPromise<void>;
    }
    class DossierService implements IDossierService {
        private dossierService;
        private syntheseService;
        private elementService;
        static $inject: string[];
        constructor(dossierService: ICRest.Services.Dossier.IDossierService, syntheseService: ICRest.Services.Synthese.ISyntheseService, elementService: ICRest.Services.Element.IElementService);
        creerDossier(dateDeTraitement: string, canalDeCreation: string, codeApplication: Enum.CodeApplicationEnum): ng.IPromise<Models.Dossier.IDossierSchema>;
        validerAccordClient(idDossier: string, idPlanFinancement: string): ng.IPromise<void>;
        sauverDossier(idDossier: string): ng.IPromise<void>;
        fermerDossier(identifiantDossier: string, sauvegarde: boolean, pourLeCompteDe?: string): ng.IPromise<void>;
        getSynthese(identifiantDossier: string): ng.IPromise<Models.Dossier.ISynthese>;
        ouvrirDossier(identifiantDossier: string, dateDeTraitement: string, codeApplication: Enum.CodeApplicationEnum, actionSurDossier: Enum.ActionOuvertureDossierEnum, pourLeCompteDe?: string, ignorerControlModeOuverture?: boolean): ng.IPromise<void>;
        transfererDansNeo(identifiantDossier: string): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IEtatDossierService {
        getSousEtatDossierJusquaProposition(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaMontage(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierPourDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierPourAnnulationDecision(): Enum.SousEtatDossier[];
    }
    class EtatDossierService implements IEtatDossierService {
        getSousEtatDossierJusquaProposition(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaMontage(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierPourDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierPourAnnulationDecision(): Enum.SousEtatDossier[];
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IHistoriqueDossier {
        lireHistoriqueEvenements(idDossier: string): ng.IPromise<ICBusiness.Models.Historique.IEvenement[]>;
    }
    class HistoriqueDossier implements IHistoriqueDossier {
        private $q;
        private dossierSchemaService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, dossierSchemaService: ICBusiness.Services.Dossier.DossierSchemaService, elementService: ICRest.Services.Element.ElementService);
        /**
         * Méthode pour récupérer la liste de l'historique des événements
         * @param idDossier
         */
        lireHistoriqueEvenements(idDossier: string): ng.IPromise<ICBusiness.Models.Historique.IEvenement[]>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IParametresService {
        /**
         * Renvoie la liste des statuts d'occupation logement
         * @param identifiantDossier
         */
        getListeStatutOccupationLogement(identifiantDossier: string, conditionDerogatoirePtz: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des categories emprunteur en fonction de la nature de projet
         * @param identifiantDossier
         * @param natureProjet
         */
        getCategoriesEmprunteur(identifiantDossier: string, natureProjet: Enum.NatureProjetEnum): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Get nature projet from code application
         * @param codeApplication
         */
        getNatureProjet(codeApplication: Enum.CodeApplicationEnum): Enum.NatureProjetEnum;
    }
    class ParametresService implements IParametresService {
        private parametresService;
        static $inject: Array<string>;
        constructor(parametresService: ICRest.Services.Dossier.IParametresService);
        getListeStatutOccupationLogement(identifiantDossier: string, conditionDerogatoirePtz: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getCategoriesEmprunteur(identifiantDossier: string, natureProjet: Enum.NatureProjetEnum): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getNatureProjet(codeApplication: Enum.CodeApplicationEnum): Enum.NatureProjetEnum;
        private transformScConstante(constante);
    }
}

declare namespace ICBusiness.Services.EditionContrat {
    interface IEditionContratService {
        getEditionContrat(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContrat>;
        supprimerClausePersonnalisee(idDossier: string, idws: string): ng.IPromise<void>;
        modifierClausePersonnalisee(idDossier: string, clause: Models.Edition.IClausePersonnalisee): ng.IPromise<void>;
    }
    class EditionContratService implements IEditionContratService {
        private $q;
        private schemaService;
        private dossierService;
        private clausePersonnaliseeService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, schemaService: Services.Common.IElementSchemaService, dossierService: ICRest.Services.Dossier.DossierService, clausePersonnaliseeService: ICRest.Services.Dossier.ClausePersonnaliseeService, elementService: ICRest.Services.Element.ElementService);
        /**
         * Fonction pour récupérer les informations de l'édition d'un contrat (ex.: l'édition de l'offre de prêt)
         * @param identifiantDossier
         */
        getEditionContrat(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContrat>;
        /**
         * Fonction pour ajouter une clause personnalisée
         * @param idDossier
         * @param clause
         */
        ajouterClause(idDossier: string, clause: Models.Edition.IClausePersonnalisee): ng.IPromise<Models.Edition.IClausePersonnalisee>;
        /**
         * Méthode de modification d'une clause personnalisée
         * @param idDossier
         * @param clause
         */
        modifierClausePersonnalisee(idDossier: string, clause: Models.Edition.IClausePersonnalisee): ng.IPromise<void>;
        /**
         * Méthode pour supprimer une clause personnalisée
         * @param idDossier
         * @param idws
         */
        supprimerClausePersonnalisee(idDossier: string, idws: string): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Emprunteur {
    interface IEmprunteurService {
        definirEmprunteur(identifiantDossier: string, identifiantClientBancaire: string): ng.IPromise<void>;
        getEmprunteur(idDossier: string, codeEtablissement: string, garants?: boolean): ng.IPromise<Models.Emprunteur.IEmprunteur>;
        getRevenusCharges(idDossier: string, garants?: boolean): ng.IPromise<Models.Emprunteur.IRevenusCharges>;
        getSurfaceFinanciere(idDossier: string, garants?: boolean): ng.IPromise<Models.Emprunteur.ISurfaceFinanciere>;
        mettreAJourIntervenants(identifiantDossier: string, emprunteur: Models.Emprunteur.IEmprunteur, surfaceFinanciere: Models.Emprunteur.ISurfaceFinanciere, pourLeCompteDe?: string): ng.IPromise<void>;
        rafraichirEmprunteur(identifiantDossier: string): ng.IPromise<void>;
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
        private clientService;
        private tiersService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService, dossierService: ICRest.Services.Dossier.IDossierService, clientService: ICRest.Services.Dossier.IClientService, tiersService: ICRest.Tiers.Services.ITiersService);
        private intervenantsCacheActivated;
        activateCache(): void;
        desactivateCache(): void;
        definirEmprunteur(identifiantDossier: string, identifiantClientBancaire: string): ng.IPromise<void>;
        getEmprunteur(idDossier: string, codeEtablissement: string, garants?: boolean): ng.IPromise<Models.Emprunteur.IEmprunteur>;
        getRevenusCharges(idDossier: string, garants?: boolean): ng.IPromise<Models.Emprunteur.IRevenusCharges>;
        getSurfaceFinanciere(idDossier: string, garants?: boolean): ng.IPromise<Models.Emprunteur.ISurfaceFinanciere>;
        mettreAJourIntervenants(identifiantDossier: string, emprunteur: Models.Emprunteur.IEmprunteur, surfaceFinanciere: Models.Emprunteur.ISurfaceFinanciere, pourLeCompteDe?: string): ng.IPromise<void>;
        rafraichirEmprunteur(identifiantDossier: string): ng.IPromise<void>;
        private cachedIntervenants;
        private getIntervenantsComplet(idDossier, garants);
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
        getDetailPersonnePhysique(context: Models.Common.IContext, identifiantEmprunteur: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonnePhysique>;
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
        private $q;
        private elementService;
        private tiersService;
        private creditParametreService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, tiersService: ICRest.Tiers.Services.ITiersService, creditParametreService: Services.CreditParametre.ICreditParametreService);
        getDetailPersonneMorale(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonneMorale>;
        getDetailPersonnePhysique(context: Models.Common.IContext, identifiantEmprunteur: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonnePhysique>;
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
         * Ajoute au dossier le crédit existant passé en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param charge
         */
        ajouterCreditExistant(identifiantDossier: string, identifiantEmprunteur: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<string>;
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
         * Renvoie la liste des identifiants des phases d'un crédit existant
         * @param identifiantDossier
         * @param creditExistant
         */
        getPhaseIdsPourCreditExistant(identifiantDossier: string, creditExistant: Models.Emprunteur.ICreditExistant): ng.IPromise<string[]>;
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
        mettreAJourCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, creditExistant: Models.Emprunteur.ICreditExistant, pourLeCompteDe?: string): ng.IPromise<void>;
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
        ajouterCreditExistant(identifiantDossier: string, identifiantEmprunteur: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<string>;
        ajouterPhaseCreditExistant(identifiantDossier: string, identifiantCreditExistant: string, phase: Models.Emprunteur.IPhase): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        ajouterRevenu(identifiantDossier: string, identifiantEmprunteur: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        ajouterRevenuFiscal(identifiantDossier: string, revenuFiscal: ICBusiness.Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
        getDetailCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        getDetailRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<Models.Emprunteur.IRevenuFiscal>;
        getPhaseIdsPourCreditExistant(identifiantDossier: string, creditExistant: Models.Emprunteur.ICreditExistant): ng.IPromise<string[]>;
        mettreAJourCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, creditExistant: Models.Emprunteur.ICreditExistant, pourLeCompteDe?: string): ng.IPromise<void>;
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
        ajouterCompteHorsCe(identifiantDossier: string, identifiantPersonne: string, compte: Models.Emprunteur.ICompteHorsCe): ng.IPromise<void>;
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
         * Renvoie le détail du compte CE passé en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        getDetailCompteHorsCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompteHorsCe>;
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
        mettreAJourCompteHorsCe(identifiantDossier: string, compte: Models.Emprunteur.ICompteHorsCe, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Met à jour l'épargne passée en paramètre
         * @param identifiantDossier
         * @param epargne
         * @param pourLeCompteDe
         */
        mettreAJourEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Supprime le compte passé en paramètre
         * @param identifiantDossier
         * @param compte
         */
        supprimerCompte(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<void>;
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
        ajouterCompteHorsCe(identifiantDossier: string, identifiantPersonne: string, compte: Models.Emprunteur.ICompteHorsCe): ng.IPromise<void>;
        ajouterEpargne(identifiantDossier: string, identifiantPersonne: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        getDetailCompteCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompte>;
        getDetailCompteHorsCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompteHorsCe>;
        getDetailEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<Models.Emprunteur.IEpargne>;
        mettreAJourCompteHorsCe(identifiantDossier: string, compte: Models.Emprunteur.ICompteHorsCe, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne, pourLeCompteDe?: string): ng.IPromise<void>;
        supprimerCompte(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<void>;
        supprimerEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IAccessoiresService {
        /** Ajoute un nouvel accessoire lié produit au dossier */
        ajouterAccessoireLieProduit(idDossier: string, idCredit: string, codeTypeAccessoire: string): ng.IPromise<Models.Financement.IIdentifiantsAccessoire>;
        /** Ajoute un nouvel accessoire complémentaire au dossier */
        ajouterAccessoireComplementaire(idDossier: string, idCredit: string, codeTypeAccessoire: string, codeSousTypeAccessoire: string): ng.IPromise<Models.Financement.IIdentifiantsAccessoire>;
        /** Supprimer un accessoire */
        supprimerAccessoire(idDossier: string, idAccessoire: string): ng.IPromise<void>;
        /** Retourne la liste des accessoires du catalogue disponible pour un crédit donné */
        listerAccessoiresDisponibles(idDossier: string, idCredit: string): ng.IPromise<Models.Financement.IFrais[]>;
        /** Met à jour un accessoire complémentaire */
        majAccessoireComplementaire(idDossier: string, accessoire: Models.Financement.IAccessoireComplementaire): ng.IPromise<number>;
        /** Met à jour un accessoire lié produit */
        majAccessoireLieProduit(idDossier: string, accessoire: Models.Financement.IAccessoireLieProduit): ng.IPromise<number>;
        /** Récupère les données détaillées d'un accessoire (montant/taux) */
        detailsAccessoire(idDossier: string, accessoire: Models.Financement.IAccessoire): ng.IPromise<Models.Financement.IAccessoire>;
    }
    class AccessoiresService implements IAccessoiresService {
        private $q;
        private accessoiresService;
        private catalogueService;
        private elementsService;
        static $inject: string[];
        constructor($q: ng.IQService, accessoiresService: ICRest.Services.Dossier.IAccessoiresService, catalogueService: ICRest.Services.Dossier.ICatalogueService, elementsService: ICRest.Services.Element.IElementService);
        ajouterAccessoireLieProduit(idDossier: string, idCredit: string, codeTypeAccessoire: string): ng.IPromise<Models.Financement.IIdentifiantsAccessoire>;
        ajouterAccessoireComplementaire(idDossier: string, idCredit: string, codeTypeAccessoire: string, codeSousTypeAccessoire: string): ng.IPromise<Models.Financement.IIdentifiantsAccessoire>;
        supprimerAccessoire(idDossier: string, idAccessoire: string): ng.IPromise<void>;
        listerAccessoiresDisponibles(idDossier: string, idCredit: string): ng.IPromise<Models.Financement.IFrais[]>;
        majAccessoireComplementaire(idDossier: string, accessoire: Models.Financement.IAccessoireComplementaire): ng.IPromise<number>;
        majAccessoireLieProduit(idDossier: string, accessoire: Models.Financement.IAccessoireLieProduit): ng.IPromise<number>;
        detailsAccessoire(idDossier: string, accessoire: Models.Financement.IAccessoire): ng.IPromise<Models.Financement.IAccessoire>;
        private setMontantTauxAccessoire(montant, taux, accessoire);
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ICreditPhaseService {
        getPhases(idDossier: string, idCredit: string, dateDeTraitement: string, codeEtablissement: number, listeIdPhase?: string[]): ng.IPromise<Models.Financement.ICreditPhaseModel>;
        createPhase(idDossier: string, idCredit: string, codeTypePhase: string): ng.IPromise<string>;
        deletePhase(idDossier: string, idPhase: string, listeIdPhase?: string[]): ng.IPromise<void>;
        calculButoir(phase: Models.Financement.ICreditPhase, paramIndex: Models.Financement.IParamIndexation, paramIndexRef: Models.Financement.IParamIndexation, valeurButoir: number): number;
        savePhases(idDossier: string, listePhaseOrigine: Models.Financement.ICreditPhase[], listePhaseModified: Models.Financement.ICreditPhase[]): ng.IPromise<void>;
    }
    class CreditPhaseService {
        private elementService;
        private creditParametreService;
        private creditService;
        private $q;
        private parametreApplicatifService;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.IElementService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, creditService: ICRest.Services.Dossier.ICreditService, $q: ng.IQService, parametreApplicatifService: ParametrageApplicatif.IParametrageAppicatifService);
        getPhases(idDossier: string, idCredit: string, dateDeTraitement: string, codeEtablissement: number, listeIdPhase?: string[]): ng.IPromise<Models.Financement.ICreditPhaseModel>;
        createPhase(idDossier: string, idCredit: string, codeTypePhase: string): ng.IPromise<string>;
        deletePhase(idDossier: string, idPhase: string): ng.IPromise<void>;
        private getPhasesDetail(idDossier, creditInterne, dateDeTraitement, codeEtablissement, phases?);
        private listerPaliersDeProgressionParPhase(phases, dateDeTraitement);
        getIndicePhase(codeTypePhase: string): number;
        calculButoir(phase: Models.Financement.ICreditPhase, paramIndex: Models.Financement.IParamIndexation, paramIndexRef: Models.Financement.IParamIndexation, valeurButoir: number): number;
        savePhases(idDossier: string, listePhaseOrigine: Models.Financement.ICreditPhase[], listePhaseModified: Models.Financement.ICreditPhase[]): ng.IPromise<void>;
        private savePhase(idDossier, phaseOrigine, phaseModified);
        private createCreditParamRevision(paramRevisionOrigine, paramRevisionModified);
        private savePalierProgressif(idDossier, listePalierProgressifOrigine, listePalierProgressifModified);
        private getPhaseType(codeTypePhase);
        private createPhaseMaj(phaseOrigine, phaseModified);
        private createComplementPhasePretCombine(qOrigine, qModified);
        private createCreditPalierProgression(palierProgressifOrigine, palierProgressifModified);
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
         * @returns l'ID du crédit créé
         */
        ajouterCreditInterne(idDossier: string, idPlanFinancement: string, idProduit: string, montantEmprunte: number, initMontant: boolean, enOptim: boolean, tauxMontage: number): ng.IPromise<string>;
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
        /**
         * Récupère un crédit sans ses accessoires
         * @param idDossier
         * @param idCredit
         */
        getCreditInterneSansAccessoires(idDossier: string, idCredit: string, planFinancementId: string): ng.IPromise<Models.Financement.ICreditInterne>;
    }
    class CreditService implements ICreditService {
        private creditService;
        private elementService;
        private schemaService;
        static $inject: string[];
        constructor(creditService: ICRest.Services.Dossier.CreditService, elementService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService);
        ajouterCreditInterne(idDossier: string, idPlanFinancement: string, idProduit: string, montantEmprunte: number, initMontant: boolean, enOptim: boolean, tauxMontage: number): ng.IPromise<string>;
        majCreditInterne(idDossier: string, credit: Models.Financement.ICreditInterne): ng.IPromise<void>;
        supprimerCreditInterne(idDossier: string, idCredit: string): ng.IPromise<void>;
        calculerCreditInterne(idDossier: string, idCredit: string, financeRaf: boolean): ng.IPromise<Models.Financement.ICalculCredit>;
        getCreditInterneSansAccessoires(idDossier: string, idCredit: string, planFinancementId: string): ng.IPromise<Models.Financement.ICreditInterne>;
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
        getSyntheseFinancement(identifiantDossier: string, listeIdsCredits: string[], codeDeviseDossier: string): ng.IPromise<Models.Financement.ISyntheseFinancement>;
    }
    class PlanFinancementService implements IPlanFinancementService {
        private $q;
        private planFinancementService;
        private schemaService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, planFinancementService: ICRest.Services.PlanFinancement.IPlanFinancementService, schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService);
        ajouterPlanFinancement(idDossier: string, idProjet: string): ng.IPromise<Models.Financement.IRetourPlanFinancementAjout>;
        majPlanFinancement(idDossier: string, data: Models.Financement.IPlanFinancementMajRequest): ng.IPromise<void>;
        lirePlanFinancement(idDossier: string): ng.IPromise<Models.Financement.IPlanFinancement>;
        getSyntheseFinancement(identifiantDossier: string, listeIdsCredits: string[], codeDeviseDossier: string): ng.IPromise<Models.Financement.ISyntheseFinancement>;
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
        /**
         * Retourne les données de l'agent
         * @param identifiantElementStructure
         * @param identifiantEntiteConnecte
         * @param codeCategorieEmprunteur
         * @param codeTypeElementStructure
         */
        listerInfoAgent(identifiantElementStructure: string, identifiantEntiteConnecte: string, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<Models.Habilitation.IInformationsAgent>;
    }
    class HabilitationService implements IHabilitationService {
        private creditParametreService;
        static $inject: string[];
        constructor(creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService);
        /**
         * L'agent doit être habilité et la caisse autoriser la selection d'une autre date
         * @param authentificationInfo
         * @param codeCategorieEmprunteur
         * @param codeTypeElementStructure
         */
        getAutorisationPourDateInstruction(authentificationInfo: MyWay.Services.Context.AuthentificationInfo, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<boolean>;
        /**
         * vérifie que l'établissment autorise la sélection de date de traitement du dossier.
         * @param codeEtablissement
         */
        private selectionDateTraitementActifEtablissement(codeEtablissement);
        listerInfoAgent(identifiantElementStructure: string, identifiantEntiteConnecte: string, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<Models.Habilitation.IInformationsAgent>;
        private getInfoAgent(identifiantElementStructure, identifiantEntiteConnecte, codeCategorieEmprunteur, codeTypeElementStructure);
    }
}

declare namespace ICBusiness.Services.InterroBdf {
    interface IInterroBdfService {
        listeEvenements: IEvenement[];
        /**
         * Vérifie si les personnes passées en paramètre sont fichées bdf
         * @param param
         */
        verifierFichageBdfMultiple(param: IVerifierFichageBdfMultipleParam): ng.IPromise<[Models.Emprunteur.IPersonnePhysique, Models.InterroBDF.IResultBDF][]>;
        /**
         * Vérifie si la personne physique passée en paramètre est fiché BDF
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param dossierSchema
         * @param personne
         */
        verifierFichageBdfSimple(param: IVerifierFichageBdfSimpleParam): ng.IPromise<Models.InterroBDF.IResultBDF>;
        /**
         * Récupère les informations bdf utiles
         * @param dossierSchema
         * @param personnePhysique
         * @param isPersonneMoraleEmprunteur
         * @param idEmprunteur
         */
        recupererInfoBdfPersonne(dossierSchema: Models.Dossier.IDossierSchema, personnePhysique: Models.Emprunteur.IPersonnePhysique, isPersonneMoraleEmprunteur: boolean): ng.IPromise<Models.InterroBDF.IInterroBDFModele>;
        /**
         * Met à jour l'interdit bancaire avec MajElement
         * @param interroBdfModel
         * @param identifiantDossier
         */
        majInterditBancaire(interroBdfModel: Models.InterroBDF.IInterroBDFModele, identifiantDossier: string): ng.IPromise<void>;
        /**
         * Vérifie si l'interrogation bdf est à jour
         * @param personnePhysique
         */
        isInterroBdfAJour(identifiantDossier: string, dateTraitement: string, personnePhysique: Models.Emprunteur.IPersonnePhysique): ng.IPromise<boolean>;
        /**
         * Deduire le code l'inscription Bdf
         * @param reponse
         * @param statut
         */
        deduireInscription(reponse: string, statut: string): string;
        /**
         * Définit si l'interro FICP est interdite
         * @param personne
         * @param dossierSchema
         * @param idEmprunteur
         * @param isPersonneMoraleEmprunteur
         */
        getFicpInterditRules(personne: Models.Emprunteur.IPersonne, dossierSchema: Models.Dossier.IDossierSchema, isPersonneMoraleEmprunteur: boolean): ng.IPromise<Enum.ficpRules>;
        /**
         * Regarde si une loi scrivener est définie sur le dossier
         * @param dossierSchema
         */
        checkIfLawIsDefined(idDossier: string): ng.IPromise<boolean>;
        /**
         * Envoyer les évènements à Néo
         */
        envoyerEvenements(): ng.IPromise<any>;
    }
    interface IVerifierFichageBdfMultipleParam {
        dateDeTraitement: string;
        codeEtablissement: number;
        dossierSchema: Models.Dossier.IDossierSchema;
        personnes: Models.Emprunteur.IPersonnePhysique[];
        uniquementFICP: boolean;
        isPersonneMoraleEmprunteur: boolean;
        historiser: boolean;
    }
    interface IVerifierFichageBdfRecursifParam {
        result: [Models.Emprunteur.IPersonnePhysique, Models.InterroBDF.IResultBDF][];
        personnes: Models.Emprunteur.IPersonnePhysique[];
        indexTabPersonnes: number;
        dossierLecture: ICRest.Modeles.LireElement.IDossierLecture;
        projetLecture: ICRest.Modeles.LireElement.IProjetLecture;
        uniquementFICP: boolean;
        notarisationActive: boolean;
        isPersonneMoraleEmprunteur: boolean;
        emprunteurLecture: ICRest.Modeles.LireElement.IEmprunteurLecture;
        historiser: boolean;
    }
    interface IVerifierFichageBdfSimpleParam {
        dateDeTraitement: string;
        codeEtablissement: number;
        dossierSchema: Models.Dossier.IDossierSchema;
        personne: Models.Emprunteur.IPersonnePhysique;
        isPersonneMoraleEmprunteur: boolean;
        idEmprunteur: string;
    }
    interface IDonneesLectureUtileFichageSimple {
        dossierLecture: ICRest.Modeles.LireElement.IDossierLecture;
        projetLecture: ICRest.Modeles.LireElement.IProjetLecture;
        emprunteurLecture: ICRest.Modeles.LireElement.IEmprunteurLecture;
    }
    interface IDonneesLectureUtileFichageMultiple extends IDonneesLectureUtileFichageSimple {
        listeInterditBancaireLecture: ICRest.Modeles.LireElement.IInterditBancaireLecture[];
    }
    interface IDonneesLectureUtileRecupInfoBDF {
        dossierLecture: ICRest.Modeles.LireElement.IDossierLecture;
        projetLecture: ICRest.Modeles.LireElement.IProjetLecture;
        interditBancaireLecture: ICRest.Modeles.LireElement.IInterditBancaireLecture;
        listeOppositionLecture: ICRest.Modeles.LireElement.IOppositionLecture[];
        personneLecture: ICRest.Modeles.LireElement.IPersonneLecture;
        emprunteurLecture: ICRest.Modeles.LireElement.IEmprunteurLecture;
    }
    interface IEvenement {
        idDossier: string;
        codeTypeEvenement: string;
        libelleFacultatif: string;
    }
    class InterroBdfService implements IInterroBdfService {
        private creditParametreService;
        private risqueClientInterroBDFService;
        private elementService;
        private mwNotificationService;
        private $q;
        private creditParametreRestService;
        private dossierService;
        static $inject: string[];
        listeEvenements: IEvenement[];
        constructor(creditParametreService: Services.CreditParametre.ICreditParametreService, risqueClientInterroBDFService: myway.comRisquesClient.InterroBDFService, elementService: ICRest.Services.Element.IElementService, mwNotificationService: MyWay.UI.IMwNotificationService, $q: ng.IQService, creditParametreRestService: ICRest.CreditParametre.Services.ICreditParametreService, dossierService: ICRest.Services.Dossier.DossierService);
        recupererInfoBdfPersonne(dossierSchema: Models.Dossier.IDossierSchema, personnePhysique: Models.Emprunteur.IPersonnePhysique, isPersonneMoraleEmprunteur: boolean): ng.IPromise<Models.InterroBDF.IInterroBDFModele>;
        /**
         * Crée la clé bdf de la personne : format 5 1ères lettre du nom de jeune fille plus date de naissance "DDMMAA"
         * @param personnePhysique
         */
        private creerCleBdf(personnePhysique);
        verifierFichageBdfMultiple(param: IVerifierFichageBdfMultipleParam): ng.IPromise<[ICBusiness.Models.Emprunteur.IPersonnePhysique, Models.InterroBDF.IResultBDF][]>;
        /**
         * Vérifie si les personnes physique passées en paramètre sont fichées BDF de manière récursive
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param dossierSchema
         * @param personne
         */
        private verifierFichageBdfRecursif(param);
        private createHistorique(idDossier, resultBdf, personnePhy, personneBdf);
        envoyerEvenements(): ng.IPromise<any>;
        private getLibelleEvtPersonne(personneBdf, personnePhy);
        private checkIfHomonymesPresent(personneBdf);
        private stringToLength(chaine, longueur, caractere?);
        verifierFichageBdfSimple(param: IVerifierFichageBdfSimpleParam): ng.IPromise<Models.InterroBDF.IResultBDF>;
        /**
         * Construit les critères d'interrogation bdf. Si appel bdf notarisé actif, on ajoute le motifConsultation, le typeCredit et l'idDossier aux critères d'appel
         * @param notarisationActive
         * @param personne
         * @param donnees
         */
        private constructCriteres(notarisationActive, personne, dossierLecture, projetLecture);
        /**
         * Construit un objet IResultBDF en fonction du retour de l'interrogation
         * @param personneBdf
         */
        private constructResultBDF(personneBdf);
        /**
         * Si tous les status sont OK, on affiche une notification indiquant que l'interro bdf est conforme
         * @param tuples
         */
        private notifyIfStatusOk(tuples);
        majInterditBancaire(interroBdfModel: Models.InterroBDF.IInterroBDFModele, identifiantDossier: string): ng.IPromise<void>;
        /**
         * Met à jour les interdits bancaires de plusieurs personnes physiques faisant parties du tuple en paramètre
         * @param data
         * @param idDossier
         * @param listeInterditBancaires
         * @param listeTuple
         */
        private majInterditBancaireMultiple(data, idDossier, listeTuple);
        /**
         * Retourne les données utiles pour récupérer les informations bdf
         * @param dossierSchema
         * @param personnePhysique
         * @param idEmprunteur
         */
        private getDonneesUtilesRecupInfoBDF(dossierSchema, personnePhysique);
        /**
         * Retourne les données utiles pour un fichage simple
         * @param identifiantDossier
         * @param idProjet
         */
        private getDonneesUtilesFichageSimple(identifiantDossier, idProjet, idEmprunteur);
        /**
         * Retourne les données utiles pour un fichage multiple
         * @param identifiantDossier
         * @param idProjet
         */
        private getDonneesUtilesFichageMultiple(dossierSchema, listeIdInterditBancaires);
        /**
         * Regarde si la notarisation ficp est activée en BT95
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        private checkIfNotarisationIsActif(dateDeTraitement, codeEtablissement);
        /**
         * Créé InterroBDFDecouvertCredit pour interroger la brique risque client en notarisé
         * @param personne
         * @param motifConsultation
         * @param typeCredit
         * @param idDossier
         */
        private createInterroBdfDecouvertCreditNotarise(personne, motifConsultation, typeCredit, idDossier);
        /**
         * Créé InterroBDFDecouvertCredit pour interroger la brique risque client
         * @param personne
         */
        private createInterroBdfDecouvertCredit(personne);
        isInterroBdfAJour(identifiantDossier: string, dateTraitement: string, personnePhysique: Models.Emprunteur.IPersonnePhysique): ng.IPromise<boolean>;
        private getDureeValiditeBdf(dateTraitement);
        deduireInscription(reponse: string, statut: string): string;
        getFicpInterditRules(personne: ICBusiness.Models.Emprunteur.IPersonnePhysique, dossierSchema: ICBusiness.Models.Dossier.IDossierSchema, isPersonneMoraleEmprunteur: boolean): ng.IPromise<Enum.ficpRules>;
        /**
         * Détermine si l'appel ficp est interdit
         * @param personne
         * @param loi
         * @param typeMarche
         * @param categorieEmprunteur
         * @param natureProjetPro
         */
        private ficpInterditRules(personne, loi, isPersonneMoraleEmprunteur, typeMarche, categorieEmprunteur, natureProjetPro);
        /**
         * Regarde si la nature du projet correspond à un projet pro
         * @param natureProjetPro
         */
        private isProjetPro(natureProjetPro);
        checkIfLawIsDefined(idDossier: string): ng.IPromise<boolean>;
    }
}

declare namespace ICBusiness.Services.Modalites {
    import ModalitesModel = Models.Modalites;
    interface IModalitesService {
        /**
         * Permet d'ajouter un payeur principal au dossier (en l'ajoutant à chacun des crédits) dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param listeCredits
         * @param identifiantPersonne
         * @param payeur
         */
        ajouterPayeurPrincipal(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], identifiantPersonne: string, payeur: ModalitesModel.IFluxFinancier): ng.IPromise<void>;
        /**
         * Permet de récupérer le crédit dans l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param identifiantPlanFinancement
         * @param identifiantCredit
         */
        getCredit(identifiantDossier: string, identifiantPlanFinancement: string, identifiantCredit: string): ng.IPromise<ModalitesModel.ICredit>;
        /**
         * Permet de récupérer la modalité de remboursement anticipé du produit financier lié au crédit passé en paramètre
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param identifiantCredit
         * @param typeLoi
         */
        getModaliteRemboursementAnticipe(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, identifiantCredit: string, typeLoi: number): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Permet de récupérer l'ensemble des modalités du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         */
        getModalites(identifiantDossier: string): ng.IPromise<ModalitesModel.IModalites>;
        /**
         * Permet de récupérer la liste des modalités de calcul d'impayé du dossier
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param identifiantModaliteImpaye
         * @param typeLoi
         */
        getModalitesCalculImpaye(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, identifiantEmprunteur: string, identifiantCredit: string, identifiantModaliteImpaye: string, typeLoi: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Permet de mettre à jour les modalités du crédit passé en paramètre
         * @param identifiantDossier
         * @param credit
         * @param pourLeCompteDe
         */
        mettreAJourCreditModalites(identifiantDossier: string, credit: ModalitesModel.ICredit, fullObject: boolean, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le jour d'échéance de la liste des crédits passés en paramètre
         * @param identifiantDossier
         * @param listeCredits
         * @param jourEcheance
         */
        mettreAJourJourEcheance(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], jourEcheance: number): ng.IPromise<void>;
        /**
         * Permet de mettre à jour un justificatif du crédit passé en paramètre
         * @param identifiantDossier
         * @param credit
         * @param pourLeCompteDe
         */
        mettreAJourJustificatif(identifiantDossier: string, credit: ModalitesModel.ICredit, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Permet de mettre à jour les modalités du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param ouvertureCompteSupport
         */
        mettreAJourModalites(identifiantDossier: string, modalites: ModalitesModel.IModalites, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le payeur principal du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param payeurPrincipal
         * @param listePayeursPrincipaux
         */
        mettreAJourPayeurPrincipal(identifiantDossier: string, payeurPrincipal: ModalitesModel.IFluxFinancier, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[]): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le payeur en cas d'impayé du dossier dont l'identifiant est passé en paramètre
         * @param dossier
         * @param payeurImpaye
         * @param pourLeCompteDe
         */
        mettreAJourPayeurImpaye(dossier: Models.Dossier.IDossierSchema, payeurImpaye: ModalitesModel.IFluxFinancier, pourLeCompteDe?: string): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le versement de fonds du dossier dont l'identifiant est passé en paramètre
         * @param dossier
         * @param listeCredits
         * @param versement
         */
        mettreAJourVersement(dossier: Models.Dossier.IDossierSchema, listeCredits: ModalitesModel.ICredit[], versement: ModalitesModel.IFluxFinancier): ng.IPromise<void>;
        /**
         * Permet de remplacer le payeur principal du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param listePayeursPrincipaux
         * @param listeCredits
         * @param identifiantPersonne
         * @param payeur
         */
        remplacerPayeurPrincipal(identifiantDossier: string, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[], listeCredits: ModalitesModel.ICredit[], identifiantPersonne: string, payeur: ModalitesModel.IFluxFinancier): ng.IPromise<void>;
        /**
         * Permet de supprimer le payeur principal du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param listePayeursPrincipaux
         */
        supprimerPayeurPrincipal(identifiantDossier: string, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[]): ng.IPromise<void>;
    }
    class ModalitesService implements IModalitesService {
        private $q;
        private creditParametreService;
        private creditService;
        private schemaService;
        private elementService;
        private gestionAdministrativeService;
        static $inject: string[];
        constructor($q: ng.IQService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, creditService: ICRest.Services.Dossier.ICreditService, schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService, gestionAdministrativeService: ICRest.Services.GestionAdministrative.IGestionAdministrativeService);
        ajouterPayeurPrincipal(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], identifiantPersonne: string, payeur: ModalitesModel.IFluxFinancier): ng.IPromise<void>;
        getCredit(identifiantDossier: string, identifiantPlanFinancement: string, identifiantCredit: string): ng.IPromise<ModalitesModel.ICredit>;
        getModaliteRemboursementAnticipe(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, identifiantCredit: string, typeLoi: number): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getModalites(identifiantDossier: string): ng.IPromise<ModalitesModel.IModalites>;
        getModalitesCalculImpaye(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, identifiantEmprunteur: string, identifiantCredit: string, identifiantModaliteImpaye: string, typeLoi: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        mettreAJourCreditModalites(identifiantDossier: string, credit: ModalitesModel.ICredit, fullObject: boolean, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourJourEcheance(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], jourEcheance: number): ng.IPromise<void>;
        mettreAJourJustificatif(identifiantDossier: string, credit: ModalitesModel.ICredit, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourModalites(identifiantDossier: string, modalites: ModalitesModel.IModalites, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourPayeurPrincipal(identifiantDossier: string, payeurPrincipal: ModalitesModel.IFluxFinancier, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[]): ng.IPromise<void>;
        mettreAJourPayeurImpaye(dossier: Models.Dossier.IDossierSchema, payeurImpaye: ModalitesModel.IFluxFinancier, pourLeCompteDe?: string): ng.IPromise<void>;
        mettreAJourVersement(dossier: Models.Dossier.IDossierSchema, listeCredits: ModalitesModel.ICredit[], versement: ModalitesModel.IFluxFinancier): ng.IPromise<void>;
        remplacerPayeurPrincipal(identifiantDossier: string, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[], listeCredits: ModalitesModel.ICredit[], identifiantPersonne: string, payeur: ModalitesModel.IFluxFinancier): ng.IPromise<void>;
        supprimerPayeurPrincipal(identifiantDossier: string, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[]): ng.IPromise<void>;
        private ajouterPayeur(identifiantDossier, identifiantCredit, identifiantPersonne, payeur);
        private filtrerModalitesCalculImpaye(credit, modaliteImpaye);
        private recalculerCredit(identifiantDossier, identifiantCredit);
        private recalculerListeCredits(identifiantDossier, listeCredits);
    }
}

/**  Interface pour les services du paramétrage applicatif */
declare namespace ICBusiness.Services.ParametrageApplicatif {
    interface IParametrageAppicatifService {
        /**
         * Vérifie que l'accès à l'application myway credit pro/BDR est activé
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayProActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifie qu el'accès à l'application myway credit Conso est actif
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayConsoActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Récupération du nombre de décimals à utiliser pour les taux des phases
         * @param codeEtablissement
         * @param date
         */
        getTauxNombreDecimalsGestionPeriode(codeEtablissement: string, date: string): ng.IPromise<number>;
    }
}

/** Services pour le paramétrage applicatif */
declare namespace ICBusiness.Services.ParametrageApplicatif {
    class ParametrageAppicatifService implements IParametrageAppicatifService {
        private $q;
        private parametrageService;
        private cacheService;
        static $inject: string[];
        constructor($q: ng.IQService, parametrageService: ICRest.ParametrageApplicatif.Services.IParametrageApplicatif, cacheService: Services.Common.ICacheService);
        /**
         * Vérifie que l'accès à l'application myway credit pro/BDR est activé
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayProActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifie qu el'accès à l'application myway credit Conso est actif
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayConsoActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * VA Pac  3.5 V08   REALISATION SEQUOIA                    *J075794.PREN.FRS.3274
         * DOCUMENTATION DE LA  RUBRIQUE  CTFIND Code Type Nombre de Décimales
         *
         * A NLG : T S VALEUR     DESCRIPTION COMPLEMENTAIRE
         * . 010 :                Définition
         * . 020 :                ----------
         * . 040 :
         * . 100 :                Cette rubrique permet de paramétrer par
         * . 110 :                établissement le nombre de décimales d'affichage et
         * . 120 :                de saisie du taux ou de la marge.
         * . 190 :
         * . 195 :                Cette donnée de trouve dans la table BT95.
         * . 240 :
         * . 250 :                Valeurs autorisées :
         * . 260 :                --------------------
         * . 270 :     '2T'       2 décimales quelles que soient les natures de
         * . 275 :                financement
         * . 280 :     '3T'       3 décimales quelles que soient les natures de
         * . 285 :                financement
         * . 290 :     '3E'       3 décimales pour les natures de financement suivantes
         * . 295 :                . 04 : Trésorerie économie locale
         * . 300 :                . 05 : Equipement économie locale
         * . 305 :                . 09 : divers clientèle non financière
         * . 320 :                2 décimales pour les autres natures de financement
         * . 330 :
         * . 340 :                La demande initiale concerne l'extension à 3 décimales
         * . 350 :                cependant des valeurs au delà de 3 sont possibles.
         * . 360 :                Une valeur différente de "E" dans la 2ème position
         * . 361 :                du paramètre est traitée comme la valeur "T".
         */
        getTauxNombreDecimalsGestionPeriode(codeEtablissement: string, date: string): ng.IPromise<number>;
        /**
         * Call listerParametrageApplicatif and compare valeurParametre with 'O'
         * @param codeEtablissement
         * @param date
         * @param codeParam
         */
        private getBooleanParamApplicatif(codeEtablissement, date, codeParam);
        /**
         * Call listerParametrageApplicatif and compare valeurParametre with comparedValue
         * @param codeEtablissement
         * @param date
         * @param codeParam
         * @param comparedValue
         */
        private getBooleanCompareToAnyParamApplicatif(codeEtablissement, date, codeParam, comparedValue);
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IPrescripteurService {
        /** Récupère le contexte nécessaire à la navigation vers SDPI */
        getContextSdpi(identifiantDossier: string, contexte: Models.Common.IContext): ng.IPromise<Models.Projet.IPrescripteurContexteIn>;
        /** Effectue la mise à jour des données prescripteur d'un dossier */
        majPrescripteur(identifiantDossier: string, prescripteurMaj: Models.Projet.IPrescripteurContexteOut): ng.IPromise<void>;
    }
    class PrescripteurService implements IPrescripteurService {
        private $q;
        private elementService;
        private habilitationService;
        private emprunteurService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, habilitationService: Services.Habilitation.IHabilitationService, emprunteurService: Services.Emprunteur.IEmprunteurService);
        /** Récupère le contexte nécessaire à la navigation vers SDPI */
        getContextSdpi(identifiantDossier: string, contexte: Models.Common.IContext): ng.IPromise<Models.Projet.IPrescripteurContexteIn>;
        /** Effectue la mise à jour des données prescripteur d'un dossier */
        majPrescripteur(identifiantDossier: string, contextePrescripteurOut: Models.Projet.IPrescripteurContexteOut): ng.IPromise<void>;
        /** Récupère les données d'une personne au format PersonnePhysique */
        private getPersonne(identifiantDossier, identifiantPersonne);
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
        updateProjet(idDossier: string, data: Models.Projet.IProjet, updateProjet: boolean, updateBienFinance: boolean, isPro: boolean): ng.IPromise<void>;
        updateVentilation(idDossier: string, data: Models.Projet.IVentilation): ng.IPromise<void>;
    }
    class ProjetService implements IProjetService {
        private schemaService;
        private elementService;
        private projetService;
        private $q;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService, projetService: ICRest.Services.Projet.IProjetService, $q: ng.IQService);
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
        updateProjet(idDossier: string, data: Models.Projet.IProjet, updateProjet: boolean, updateBienFinance: boolean, isPro: boolean): ng.IPromise<void>;
        updateVentilation(idDossier: string, data: Models.Projet.IVentilation): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Models.Projet {
    interface ILocalites {
        codePoste: string;
        ville: string;
        zonePlus: string;
        zoneDeRobien: string;
        zoneBourgadeRural: string;
        codeComRob: string;
    }
}

declare namespace ICBusiness.Models.Projet {
    interface IPersonneSdpi {
        /** Nom / Raison Sociale */
        nomRaisonSociale: string;
        /** Prénom */
        prenom: string;
        /** Date de naissance */
        dateNais: string;
        /** Numéro de téléphone pro */
        numeroTeleProf: string;
    }
}

declare namespace ICBusiness.Models.Projet {
    interface IPrescripteurContexteIn {
        /** Code établissement */
        IDFCEJ: string;
        /** Identifiant dossier */
        IDFADI: string;
        /** Numero interne EDS de l'agent connecté */
        IDFAES: string;
        /** Libellé agent connecté */
        LBFAES: string;
        /** Element structure 1 informations agent */
        IDFAS1: string;
        /** Element structure 2 informations agent */
        IDFAS2: string;
        /** Element structure 3 informations agent */
        IDFAS3: string;
        /** Element structure 4 informations agent */
        IDFAS4: string;
        /** Element structure 5 informations agent */
        IDFAS5: string;
        /** Element structure 6 informations agent */
        IDFAS6: string;
        /** Nom de famille de l'agent connecté */
        LBFPNP: string;
        /** Prenom de l'agent connecté */
        LBFPPP: string;
        /** Identifiant de l'entité titulaire client */
        IDFAEP: string;
        /** Date de création du dossier (format DD/MM/YYY%2000:00:00 */
        DTFCCR: string;
        /** Code devise */
        CDFADV: string;
        /** Cout total de l'objet (sans décimales, cout * 100) */
        MCFOOF: number;
        /** Date de traitement (format YYYYMMDD%2000:00:00) */
        DTFISY: string;
        /** Nom raison sociale de la personne SDPI */
        LBFPNM: string;
        /** Prenom de la personne SDPI */
        LBFPPN: string;
        /** Date de naissance de la personne SDPI (format DD/MM/YYYY%2000:00:00 */
        DTFPNA: string;
        /** Numéro de téléphone pro de la personne SDPI */
        NUFPTP: string;
    }
}

declare namespace ICBusiness.Models.Projet {
    interface IPrescripteurContexteOut {
        RETOUR: string;
        /** Identifiant prescripteur du dossier */
        IDFIPP: string;
        /** Enseigne prescripteur du dossier */
        LBFPEN: string;
        /** Code lever secret bancaire */
        CIFCSB: string;
        /** Numéro fiche prescripteur */
        IDFIFD: string;
    }
}
