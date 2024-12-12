
declare module ApiInstuctionCredit {
    var app: any;
}

declare module ApiInstuctionCredit.Constantes {
    class Client {
        static idChampLieuResidence: string;
        /**
         * Liste des capacités juridiques
         */
        static listeCapaciteJuridique: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste employeur commun
         */
        static listeEmployeurCommunPrimoAccedant: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste des modes de logement
         */
        static listeModeLogement: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste des modes de transport
         */
        static listeModeTransport: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * code nature du lien Entité titulaire / personne
         */
        static codeNatureLienEntiteTitulairePR: string;
        static listeNatureLienEntiteTitulaire: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste prim accédant
         */
        static listePrimoAccedant: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste rôle représantant
         */
        static listeRoleRepresantant: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste des secteurs d'activité
         */
        static listeSecteurActivite: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste des statuts occupation logement d'un emprunteur
         */
        static listeStatutOccupationLogementEmprunteur: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste des types de contrat
         */
        static listeTypeContrat: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste des types de compte
         */
        static listeTypeCompte: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste des types de fonctionnement de compte
         */
        static listeTypeFonctionnementCompte: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste des types de fonctionnement de compte pour CFF
         */
        static listeTypeFonctionnementCompteCFF: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static getListeTypeFonctionnementCompte(codeEtablissement: string): Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste des modes de composition
         */
        static listeModesDeComposition: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static getListeModeDeComposition(): Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste des types de nationalité
         */
        static listeTypeNationalite: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Fonctionnement du compte de dépot
         */
        static listeFonctionnementComptes: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
    }
}

declare module ApiInstuctionCredit.Constantes {
    module CodeAscii {
        class Caractere {
            static vide: number;
            static space: number;
        }
        /**
         * Code ascii des caractères numériques
         */
        class Nombre {
            static zero: number;
            static un: number;
            static deux: number;
            static trois: number;
            static quatre: number;
            static cinq: number;
            static six: number;
            static sept: number;
            static huit: number;
            static neuf: number;
        }
        /**
         * Code ascii des lettres
         */
        module Lettre {
            /**
             * Code ascii des lettres majuscule
             */
            class Maj {
                static A: number;
                static B: number;
                static C: number;
                static D: number;
                static E: number;
                static F: number;
                static G: number;
                static H: number;
                static I: number;
                static J: number;
                static K: number;
                static L: number;
                static M: number;
                static N: number;
                static O: number;
                static P: number;
                static Q: number;
                static R: number;
                static S: number;
                static T: number;
                static U: number;
                static V: number;
                static W: number;
                static X: number;
                static Y: number;
                static Z: number;
            }
            /**
             * Code ascii des lettres minuscule
             */
            class Min {
                static a: number;
                static b: number;
                static c: number;
                static d: number;
                static e: number;
                static f: number;
                static g: number;
                static h: number;
                static i: number;
                static j: number;
                static k: number;
                static l: number;
                static m: number;
                static n: number;
                static o: number;
                static p: number;
                static q: number;
                static r: number;
                static s: number;
                static t: number;
                static u: number;
                static v: number;
                static w: number;
                static x: number;
                static y: number;
                static z: number;
            }
        }
    }
}

declare module ApiInstuctionCredit.Constantes {
    module PretCombine {
        /**
         * { code: 3 (51), libelle: "2 en 1 faux relais" }
         */
        const _2en1FauxRelais: Modele.ISelectboxNumber;
        /**
         * { code: 2 (50), libelle: "2 en 1 vrai relais" }
         */
        const _2en1VraiRelais: Modele.ISelectboxNumber;
        /**
         * { code: 1 (49), libelle: "transformable" }
         */
        const _transformable: Modele.ISelectboxNumber;
        const listePretCombine: Modele.ISelectboxNumber[];
    }
    module AmortissementTaux {
        /**
         * { code: N (78), libelle: "en plage de valeur" }
         */
        const _enPlageDeValeur: Modele.ISelectboxNumber;
        /**
         * { code: O (79), libelle: "taux d’intérêt du palier de taux" }
         */
        const _palierDeTaux: Modele.ISelectboxNumber;
        const listeModeExpressionTaux: Modele.ISelectboxNumber[];
    }
    class Donnees {
        static date0: string;
        static dateTime0: string;
        static codeTypologieCadreFiscalLmp: string;
        static colonnesTableauEditionDocuments: Array<MyWay.UI.ImwTableColumnOptions>;
        static codeUidUtilisateur: string;
        static listeModalites: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listeModeRestitution: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static typeTauxPropCreditExistant: number;
        static periodiciteCreditExistant: number;
        /**
         * Crédit existant :  type du crédit
         */
        static listeTypeCredit: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Crédit existant : motif associé à un remboursement avec anticipation
         */
        static listeMotifRemboursementAnticipe: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Indice du mdoe de calcul pour un crédit
         */
        static indiceCreditInterneModeOptim: string;
        static indiceCreditInterneModeManuel: string;
        /**
         * Type de phases d'un crédit
         * AM
         */
        static codeTypePhaseAmortissement: string;
        /**
         * PF
         */
        static codeTypePhasePrefinancement: string;
        /**
         * DA
         */
        static codeTypePhaseDiffereAmortissement: string;
        /**
         * MO
         */
        static codeTypePhaseMobilite: string;
        /**
         * DT
         */
        static codeTypePhaseDiffereTotal: string;
        static listeTypePhase: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Périodicité de recouvrement d'une phase d'un crédit
         */
        static listePeriodicitePhase: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listePeriodicitePhaseComplete: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listeUnitePeriodeDureePhase: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listeTypesMensualiteCredit: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste des statuts établissement d'une charge, ressource
         */
        static listeStatutsEtablissement: Array<ApiInstuctionCredit.Modele.IStatutRessource>;
        /**
         * Liste des statuts statuts hors établissement d'une charge, ressource
         */
        static listeStatutsHorsEtablissement: Array<ApiInstuctionCredit.Modele.IStatutRessource>;
        /**
         * Liste des périodicités
         */
        static listeTypePeriodicite: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listeNaturePret: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listeTypeDeRemboursement: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listenatureGarantie: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static codeNatureGarantiePAH: string;
        static codeCategorieEmprunteurParticulier: string;
        static listeNatureGarantie: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * segment notation bale II
         */
        static listeSegmentBaleII: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listeAncienContratAssurance: Array<string>;
        static listeModeCalculCotisation: IModeCalculCotisation[];
        static listeTypeRisque: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        static listeDemandeCessionAnteriorite: ApiInstuctionCredit.Modele.ISelectboxNumber[];
        static listeFormeActe: ApiInstuctionCredit.Modele.ISelectboxNumber[];
        static listeTypeRattachement: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        static codeActivationBestCFF: number;
        static colonnesTableauAssurance: MyWay.UI.ImwTableColumnOptions[];
    }
    interface IModeCalculCotisation {
        code: number;
        montant: boolean;
        plageMontant: boolean;
        taux: boolean;
        plageTaux: boolean;
    }
    class CodeEvenementPassageDossierASansSuite {
        static PASSAGE_SANS_SUITE_PAR_INSTRUCTEUR: string;
    }
    class TypeBlocNotes {
        static BLOCNOTE: string;
        static DIVERS: string;
    }
}

declare module ApiInstuctionCredit.Constantes.Dossier {
    class Action {
        static ACTION_DOSSIER_CONSULTATION: number;
        static ACTION_DOSSIER_INSTRUCTION: number;
        static ACTION_DOSSIER_DECISION: number;
        static ACTION_DOSSIER_CONFORMITE: number;
        static ACTION_DOSSIER_PRISE_EN_CHARGE_BACK_OFFICE: number;
    }
    class TypeSignature {
        static TOUS: Modele.ISelectboxNumber;
        static PAPIER: Modele.ISelectboxNumber;
        static ELECTRONIQUE: Modele.ISelectboxNumber;
    }
    class TypeEvenementHisto {
        static CREATION_ENVELOPPE_CLASSEUR_CLIENT: string;
        static CREATION_DOSSIER_IDN: string;
        static ACTIVATION_TRANSACTION_SIGNATURE_BANQUE: string;
        static MISE_A_DISPO_OFFRE: string;
        static REMISE_OFFRE: string;
        static ACCUSE_RECEPTION_OFFRE: string;
        static ACCUSE_DEFINITIF: string;
        static RELANCE1_RECEPTION_OFFRE: string;
        static RELANCE2_RECEPTION_OFFRE: string;
        static ACTIVATION_ESPACE_SIGNATURE: string;
        static SIGNATURE_OFFRE_EMPRUNTEUR: string;
        static SIGNATURE_DEFINITIVE: string;
        static RELANCE3_SIGNATURE: string;
        static RELANCE4_SIGNATURE: string;
        static ABANDON: string;
        static ENVOI_MAIL_SMS_OFFRE_TOTALEMENT_SIGNEE: string;
        static ANNULATION: string;
        static ERREUR_TRAITEMENT_AUTO: string;
        static CODE_NATURE_EVENEMENT_LECTURE_DOSSIER_CENTRAL: string;
    }
    enum CodeSignatureElectronique {
        demandeCredit_SED = 4,
        demandeCredit_SAG = 3,
        offre = 2,
        offre_SAG = 1,
        default = 0,
        nonInitialise = -30,
    }
}

declare module ApiInstuctionCredit.Constantes {
    import ApiModele = ApiInstuctionCredit.Modele;
    class Ecrans {
        /**
         * Cas d'affichage des champs Montant
         */
        static casChampsMontant: Array<ApiInstuctionCredit.Modele.ChampMontant>;
        /**
         * Cas d'affichage des champs Informations complémentaires
         */
        static casChampsInfosCompl: Array<ApiInstuctionCredit.Modele.ChampInformationsComplementaires>;
        static getCasProjet(toc: string, tor: string): ApiModele.Parametrage.IChampsProjet;
        /**
         * Cas d'affichage des champs Montant et Informations Complémentaires
         */
        static affichageChamps: Array<ApiInstuctionCredit.Modele.ChampAssociation>;
    }
}

declare module ApiInstuctionCredit.Constantes {
    class Edition {
        static regroupementCredit: {
            numDoc: string;
            informationPopup: string;
        };
        static listeTypeEligibilite: Array<Modele.ISelectboxNumber>;
        static statutConcerne: string;
        static statutNonConcerne: string;
        static listeTitreLiasseEdition: Array<Modele.ITitreExemplaire>;
        static listeMotifsAnnulerConstitution: Array<Modele.ISelectboxNumber>;
        static habilitationLancerProcessSignature: string;
    }
    module Edition {
        class RoleDestinataireOffre {
            static emprunteur: Modele.ISelectbox;
            static notaire: Modele.ISelectbox;
            static caution: Modele.ISelectbox;
            static liste: Array<Modele.ISelectbox>;
        }
        class NomDocument {
            static propositionCommerciale: string;
            static tableauAmortissementCredit: string;
            static assrExterne: string;
        }
        class NomSaisieCompl {
            static notices: string;
            static codeNotices: string;
            static titreNotices: string;
            static fC050ACA: string;
            static listeDonneesCreditAModifierACA: string;
        }
    }
}

declare module ApiInstuctionCredit.Constantes {
    class Editique {
        /**
         * Paramètres suplémentaires pour documents particuliers lors de l'édition
         */
        static paramsEditiqueProposition: Array<Modele.IParamEditique>;
        static paramsEditiquePtz: Array<Object>;
        static paramsPieco: Array<Object>;
        static formatPapier: number;
        static formatIndustrialise: number;
        static formatSignatureElectronique: number;
    }
}

declare module ApiInstuctionCredit.Constantes {
    /**
     * Données contantes propres à l'emprunteur
     */
    class Emprunteur {
        static typeRolePersonneCaution: Modele.ISelectbox;
        static typeRolePersonneEmprunteur: Modele.ISelectbox;
        static typeRolePersonneCoEmprunteur: Modele.ISelectbox;
        static typeRolePersonneVendeur: Modele.ISelectbox;
        static typeRolePersonneProprietaire: Modele.ISelectbox;
        static typeRolePersonneHuissier: Modele.ISelectbox;
        static typeRolePersonnePayeur: Modele.ISelectbox;
        static typeRolePersonneOrganismeSignataire: Modele.ISelectbox;
        static typeRolePersonneCaf: Modele.ISelectbox;
        static typeRolePersonneRedacteur: Modele.ISelectbox;
        static typeRolePersonneBeneficiaireVersement: Modele.ISelectbox;
        static typeRolePersonneDirigeant: Modele.ISelectbox;
        static typeRolePersonneRepresentant: Modele.ISelectbox;
        static listeTypeRolePersonne: Array<Modele.ISelectbox>;
    }
}

declare module ApiInstuctionCredit.Constantes {
    class EpargneLogement {
        /**
         *  Code famille des produits CEL et PEL
         */
        static codeFamilleCEL: string;
        static codeFamillePEL: string;
        /**
         * Types d'Epargne Logement
         */
        static listeTypesEpargneLogement: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Epargne Logement : Types réservation de droit acquis
         */
        static listeReservationsDroitsAcquis: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Epargne Logement : Types résidence  encours
         */
        static listeResidencesEncours: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
    }
}

declare module ApiInstuctionCredit.Constantes {
    class CodeFamilleControle {
        static pyPatz2005: string;
        static pzPatzMinistereDuLogement: string;
        static pzEcoPatz: string;
    }
}

declare module ApiInstuctionCredit.Constantes {
    module Idws {
        /**
         * Idws de classe Accessoire
         */
        class Accessoire {
            /**
             * ACCP
             */
            static accessoireComplementaire: string;
            /**
             * ACLP
             */
            static accessoireLieProduit: string;
            /**
             * ASSR
             */
            static assurance: string;
            /**
             * GARP
             */
            static garantiePersonnelle: string;
            /**
             * GARR
             */
            static garantieReelle: string;
            /**
             * SVCO
             */
            static serviceSurObjet: string;
            /**
             * SACP
             */
            static saisiesComplementaire: string;
        }
        /**
         * Idws de classe Alerte
         */
        class Alerte {
            /**
             * ALEN
             */
            static alerteEnEntree: string;
            /**
             * ALSO
             */
            static alerteEnSortie: string;
        }
        /**
         * Idws de classe Apl
         */
        class Apl {
            /**
             * APLO
             */
            static apl: string;
        }
        /**
         * Idws de classe Avis
         */
        class Avis {
            /**
             * AVIS
             */
            static avis: string;
            /**
             * AVOE
             */
            static avisOrganismeExt: string;
        }
        /**
         * Idws de classe BienAVendre
         */
        class BienAVendre {
            /**
             * BIAV
             */
            static bienAVendre: string;
        }
        /**
         * Idws de classe BienFinance
         */
        class BienFinance {
            static batimentHabitableFinance: string;
            static constructionFinance: string;
            static soulteFinance: string;
            static terrainFinance: string;
            static travauxFinance: string;
            static bienConsoFinance: string;
            static autoMoto: string;
            static batimentSousJacent: string;
            static bienSousJacentSoulte: string;
            static terrainSousJacent: string;
            static bienEquipementPro: string;
            static tresorerieFinancee: string;
            static detailCoutObjet: string;
        }
        /**
         * Idws de classe BienGaranti
         */
        class BienGaranti {
            static antichrese: string;
            static bienDivers: string;
            static bonDeCaisseCapitalisation: string;
            static cessionDaillyAutre: string;
            static cessionDaillyLoyerImmeuble: string;
            static contratAssurance: string;
            static delegationLoyer: string;
            static gageCompteInstrumentFinancier: string;
            static gageVehicule: string;
            static hypothequeAerienne: string;
            static hypothequeImmobiliere: string;
            static nantissementFondDeCommerce: string;
            static nantissementPartSociale: string;
            static nantissementValeurMateriel: string;
            static nantissementValeurMobiliere: string;
            static versementAttendu: string;
            static proprietaire: string;
            static referenceCadastrale: string;
            static referenceLot: string;
        }
        /**
         * Idws de classe BlocNote
         */
        class BlocNote {
            static blocNotes: string;
        }
        /**
         * Idws de classe ButLocatif
         */
        class ButLocatif {
            static butLocatif: string;
        }
        /**
         * Idws de classe ClausePersonnalisee
         */
        class ClausePersonnalisee {
            static clausePersonnalisee: string;
        }
        /**
         * Idws de classe Compte
         */
        class Compte {
            static compteDepotParticulier: string;
            static compteProfessionnel: string;
            static compteModalites: string;
        }
        /**
         * Idws de classe Cotisation
         */
        class Cotisation {
            static cotisation: string;
            static cotisationDerogation: string;
            static cotisationPeriode: string;
            static cotisationPhase: string;
        }
        /**
         * Idws de classe CotisationTranche
         */
        class CotisationTranche {
            static cotisationTrancheAge: string;
            static trancheMontant: string;
        }
        /**
         * Idws de classe CouvertureCredit
         */
        class CouvertureCredit {
            /**
             * CVCR
             */
            static couvertureCredit: string;
        }
        /**
         * Idws de classe CreditExterne
         */
        class CreditExterne {
            /**
             * CREX
             */
            static creditExterne: string;
        }
        /**
         * Idws de classe CreditInterne
         */
        class CreditInterne {
            /**
             * CRIN
             */
            static creditInterne: string;
            /**
             * DRUT
             */
            static droitUtilise: string;
            static ajustementTaux: string;
        }
        /**
         * Idws de classe CreditModalite
         */
        class CreditModalite {
            static creditModaliteLecture: string;
            static compteCourant: string;
        }
        /**
         * Idws de classe CreditBonification
         */
        class CreditBonification {
            static creditBonification: string;
        }
        /**
         * Idws de classe CreditBonificationInfo
         */
        class CreditBonificationInfo {
            static creditBonificationInfo: string;
        }
        /**
         * Idws de classe CreditPalier
         */
        class CreditPalier {
            static creditPalierProgression: string;
            static creditPalierTaux: string;
        }
        /**
         * Idws de classe CreditParam
         */
        class CreditParam {
            static creditParamRevisionParPeriode: string;
            static creditParamRevisionParPhase: string;
            static creditParamIndexationParPeriode: string;
            static creditParamIndexationParPhase: string;
        }
        /**
         * Idws de classe CreditPhase
         */
        class CreditPhase {
            static creditPhaseAmortissement: string;
            static creditPhaseDiffereAmortissement: string;
            static creditPhaseDiffereTotal: string;
            static creditPhaseMobilisation: string;
            static creditPhasePrefinancement: string;
            static complementPhasePretCombine: string;
        }
        /**
         * Idws de classe Dossier
         */
        class Dossier {
            static dossier: string;
        }
        /**
         * Idws de classe Optimisation
         */
        class Optimisation {
            static echeanceOptimisation: string;
        }
        /**
         * Idws de classe Evenement
         */
        class Evenement {
            static evenement: string;
        }
        /**
         * Idws de classe FamilleEpargne
         */
        class FamilleEpargne {
            static familleEpargne: string;
        }
        /**
         * Idws de classe GarantieHD
         */
        class GarantieHD {
            static garantieHD: string;
            static creditHD: string;
        }
        /**
         * Idws de classe Emprunteur
         */
        class Emprunteur {
            static emprunteur: string;
        }
        /**
         * Idws de classe Groupe de garant
         */
        class Garant {
            /**
             * GRNT
             */
            static garant: string;
        }
        /**
         * Idws de classe InterditBancaire
         */
        class InterditBancaire {
            static interditBancaire: string;
        }
        /**
         * Idws de classe Opposition
         */
        class Opposition {
            static opposition: string;
        }
        /**
         * Idws de classe PalierContraint
         */
        class PalierContraint {
            static palierContraint: string;
        }
        /**
         * Idws de classe PatrimoineImmobilier
         */
        class PatrimoineImmobilier {
            static patrimoineImmobilier: string;
        }
        /**
         * Idws de classe Payeur
         */
        class Payeur {
            static payeur: string;
        }
        /**
         * Idws de classe Personne
         */
        class Personne {
            static personneMorale: string;
            static personnePhysique: string;
            static activite: string;
            static complementFicheContact: string;
            static relationEntrePersonne: string;
        }
        /**
         * Idws de classe PlanFinancement
         */
        class PlanFinancement {
            static planFinancement: string;
        }
        /**
         * Idws de classe Projet
         */
        class Projet {
            static projetImmobilier: string;
            static projetNonImmobilier: string;
            static projetEPS: string;
        }
        /**
         * Idws de classe Epargne
         */
        class Epargne {
            static compteEpargneLogement: string;
            static planEpargneLogement: string;
            static trancheEL: string;
        }
        /**
         * Idws de classe PromotionImmobiliere
         */
        class PromotionImmobiliere {
            static promotionImmobiliere: string;
        }
        /**
         * Idws de classe Reamenagement
         */
        class Reamenagement {
            static reamenagement: string;
            static pretReamenage: string;
            static pretReamenageInfoRegroup: string;
        }
        /**
         * Idws de classe RedacteurActe
         */
        class RedacteurActe {
            static redacteurActe: string;
        }
        /**
         * Idws de classe RemiseClient
         */
        class RemiseClient {
            static remiseClient: string;
        }
        /**
         * Idws de classe RessourceCharge
         */
        class RessourceCharge {
            /**
             * CHAR
             */
            static charge: string;
            /**
             * CRXT
             */
            static creditExistant: string;
            /**
             * CZRT
             */
            static creditCZRT: string;
            /**
             * PHCE
             */
            static phaseCreditExistant: string;
            /**
             * RESS
             */
            static ressource: string;
        }
        /**
         * Idws de classe RevenuFiscal
         */
        class RevenuFiscal {
            static revenuFiscal: string;
        }
        /**
         * Idws de classe SuiviPlanifie
         */
        class SuiviPlanifie {
            static suiviPlanifie: string;
        }
        /**
         * Idws de classe VariationDuree
         */
        class VariationDuree {
            static variationDuree: string;
        }
        /**
         * Idws de classe Versement
         */
        class Versement {
            static versement: string;
            static versementFractionne: string;
        }
        /**
         * Idws de classe Piece
         */
        class Piece {
            static pieceClient: string;
            static pieceAgence: string;
            static controleManuel: string;
        }
        /**
         * Idws de classe ComplementDossier
         */
        class ComplementDossier {
            static complementDossier: string;
        }
    }
}

declare module ApiInstuctionCredit.Constantes {
    class ContexteLisa {
        static ENTITE_TITULAIRE_RECHERCHE: string;
        static ENTITE_TITULAIRE_INSTRUCTION: string;
        static CONSULTATION_DOSSIER: string;
    }
}

declare module ApiInstuctionCredit.Constantes {
    class NatureGarantie {
        /**
         * Liste des codes garantie de type privilege
         */
        static listeCodePrivilege: string[];
        static codeHypothequePVH: string;
        static codeHypothequeHCR: string;
        static codeHypothequeHCCPF: string;
        static codeHypothequeHCNR: string;
        static codeHypothequeMEM: string;
        static codeHypothequeTirageHCCPF: string;
        static codeCessionDailly: string;
        static codeGageVehicule: string;
        static codeAutresGages: string;
        static codeHypothequeAerienne: string;
        static codeHypothequeFluviale: string;
        static codeHypothequeImmobiliere: string;
        static codeHypothequeMaritime: string;
        static codeAntichrese: string;
        static codeNantissementDroitPropr: string;
        static codeNantissementFdsComm: string;
        static codeGageMarchandise: string;
        static codeNantissementMarchePublic: string;
        static codeNantissementMarchePrive: string;
        static codeGageMaterielOutillage: string;
        static codeNantissementPartsSociales: string;
        static codeNantissementCompte: string;
        static codeNantissementCIF: string;
        static codePrivilegePr: string;
        static codeSubrogationImmobilier: string;
        static codeAutresSubrogation: string;
        static codeSubrogationVendeurImmeuble: string;
        static codeSubogationVendeurFdsComm: string;
        static codeSubogationVendeurMeubles: string;
        static codeCautionPersonneMorale: string;
        static codeCautionPersonnePhysique: string;
        static codePromesseHypotheque: string;
        static codeLettreIntentionConfort: string;
        static codePrivilegeCoPartage: string;
        static codeCautionPersonneMoraleConv: string;
        static codeCautionSteCautionConv: string;
        static codeDelegationAssururance: string;
        static codeDelegationloyer: string;
        static codeDelegationCessionCreance: string;
        static codeCessionSalaires: string;
        static codeDomiciliationSalaire: string;
        static codePremiereDemande: string;
        static codePrivilegeVendeurPPD: string;
        static codeNantissementCIFEnreg: string;
        static codeNantissementCompteEnreg: string;
        static codeCautionPersonnePhysiqueActe: string;
        static codeNantissementAssurance: string;
        static codeCautionHypothecaireTiers: string;
        static codePromesseEnreg: string;
        static codeNantissementAssuranceExterne: string;
        static codeCessionLoyers: string;
        static codePromesseLoyers: string;
        static codePromesseFdsComm: string;
        static codePromesseParts: string;
        static codePromesseComptes: string;
        static codePromesseob: string;
        static codeGarantieBons: string;
        static codePromesseAssurance: string;
        static codePromesseloyer: string;
        static codeMandatHypothecaire: string;
        static codeCautionDefautPaiement: string;
        static codeSuiGeneris: string;
        static codeCautionPerteFinale: string;
        static codeCautionHypothequeSol: string;
        static codeCautionGagiste: string;
        static codeCessionDroitCommun: string;
        static codeHypothequeJudiciaireProvisoire: string;
        static codeMURACEFUn: string;
        static codeMURACEFDeux: string;
        static codeCautionHypothecaireMorale: string;
        static codeHommeCle: string;
        static codeActifPassif: string;
        static codeInterditHypothecaire: string;
        static codeHypothequeJudiciaireDefinitive: string;
        static codeNantissementPartsSignifie: string;
        static codeHypothequeBailConstruction: string;
        static codeOrdreIrrevocableUn: string;
        static codeConventionBlocage: string;
        static codeNantissementCreance: string;
        static codeOrdreIrrevocableDeux: string;
        static codeNantissementFdsArtisanal: string;
        static codeAssurancePersonnelleExterne: string;
        static codeGarantDiversReprise: string;
        /**
         * Liste des codes garantie de type hypotheque
         */
        static listeCodeHypotheque: string[];
    }
}

declare module ApiInstuctionCredit.Constantes {
    class Parametrage {
        static codeTransfertNeo: string;
        static codeFicheSuiveuse: string;
        static codeCreationDossierNeo: string;
        static codeDeviseEuro: string;
        static couleursGraphiques: Array<string>;
        static pourCompteAgent: string;
        static codeAffichageActionPieco: string;
        static regroupementCredit: {
            numDoc: string;
            informationPopup: string;
        };
    }
    class CodeTypologieAvis {
        static AVIS_CONFORMITE: string;
    }
    class CodeTypeEven {
        static TRANSFERT_CONFORMITE: string;
        static TRANSFERT_DECISION: string;
        static TRANSFERT_BACK_OFFICE: string;
    }
}

declare module ApiInstuctionCredit.Constantes {
    class Pieco {
        /**
         * Valeurs possibles pour la finalité des pièces
         */
        static listeFinalites: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Valeurs possibles pour la conformité des pièces
         */
        static listeStatutsPieceNumerique: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Valeurs possibles pour la conformité des pièces
         */
        static listeStatutsPiece: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Valeurs possibles pour le filtre controle traiter avant
         */
        static listeControleTraiterAvant: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Valeurs possibles pour le filtre controle etat
         */
        static listeStatutsControle: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
    }
}

declare module ApiInstuctionCredit.Constantes {
    /**
     * Gestion de la personnalisation pour l’utilisateur
     */
    class PreferencesUtilisateur {
        static modeCalculLibelle: string;
        static modeRestitutionLibelle: string;
    }
}

declare module ApiInstuctionCredit.Constantes {
    class Projet {
        /**
         * 49
         */
        static codeLoiConso: number;
        /**
         * 50
         */
        static codeLoiImmo: number;
        static idChampNatureTravauxEcoPtz: string;
        static clePremierChampTravauxEcoPtz: string;
        static cleDernierChampTravauxEcoPtz: string;
        static identifiantChamp: string[];
        /**
         * Modes d'occupation du logement
         */
        static listeModeOccupationLogement: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste prim accédant
         */
        static listePrimoAccedant: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Destinations du bien
         */
        static listeDestinationBien: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste des émoluments
         */
        static listeEmoluments: Array<ApiInstuctionCredit.Modele.IEmolument>;
        /**
         * Liste des délais de réalisation
         */
        static listeDelaisRealisation: Array<string>;
        /**
         * Performances énergétiques logement ancien
         */
        static listePerformancesEnergetiquesLogementAncien: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Performances énergétiques neuf
         */
        static listePerformancesEnergetiquesLogementNeuf: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Unités du programme immobilier pour le même permis de construire
         */
        static listeUnitesPermisConstruire: Array<ApiInstuctionCredit.Modele.IUnitesPermisConstruire>;
        static listeOrigineDemande: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        static listeTechniqueVente: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Bien à vendre : liste des types de vente
         * Attention les code sont en ASCII: 0-> 48; 1-> 49...
         */
        static listeObjetBienRevendu: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Bien à vendre : liste des modes d'acquisition
         * Attention les code sont en ASCII: 1-> 49; 2-> 50...
         */
        static listeModesAcquisition: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Bien à vendre : liste des types de vente
         * Attention les code sont en ASCII: 0-> 48; 1-> 49...
         */
        static listeTypesDeVente: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        static lisetNatureTravauxEcoPtz: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Liste des réglementation RACHAT / REGROUPEMENT DE CREDIT
         */
        static listeReglementations: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        static listeGarantieAchevementTravaux: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
    }
}

declare module ApiInstuctionCredit.Constantes {
    /**
     * Données pour les services
     */
    class Service {
        static versionWsdl: string;
        static versionWsdlN: number;
        static codeApplication: string;
        static codeApplicationN: number;
        static restParametre: string;
        static restConsultation: string;
        static restCalcul: string;
        static restEntiteTitulaire: string;
        static restRisqueClient: string;
        static restTiersV1: string;
        static restTiersV3: string;
        static restAgent: string;
        static restStructure: string;
    }
}

declare module ApiInstuctionCredit.Constantes.Toc {
    /**
     * 003
     */
    const _003_CONSTRUCTION: string;
    /**
     * 004
     */
    const _004_LOGEMENT_NEUF: string;
    /**
     * 005
     */
    const _005_TRAVAUX: string;
    /**
     * 006
     */
    const _006_LOGEMENT_EXISTANT: string;
    /**
     * 007
     */
    const _007_PARTS_DE_SCPI_HABITAT: string;
    /**
     * 008
     */
    const _008_OPERATION_IMMOBILIERES_DIVERSES: string;
    /**
     * 052
     */
    const _052_INVEST_PATRIMONIAL_NON_HABITAT: string;
    /**
     * 145
     */
    const _145_REGROUPEMENT_CREDITS_IMMOBILIERS: string;
    /**
     * 147
     */
    const _147_REAM_RACHAT_CREDIT_CONSOMMATION: string;
    /**
     * 148
     */
    const _148_RACHAT_CREDIT_IMMOBILIER: string;
}

declare module ApiInstuctionCredit.Constantes.Tor {
    const _02_TERRAIN_PLUS_CONSTRUCTION_AVEC_CONTRAT: string;
    const _03_CONSTRUCTION_AVEC_CONTRAT: string;
    const _04_LOGEMENT_NEUF_ACQUIS_ETAT_FUTUR_ACHEVEMENT_VEFA: string;
    const _05_LOGEMENT_NEUF_ACQUIS_CLE_MAIN: string;
    const _06_LOGEMENT_AMELIORE_PAR_PROMOTEUR: string;
    const _07_TRANSFORMATION_LOCAUX_NON_HABITABLE_HABITATION: string;
    const _08_PARTS_SOCIETE_DROIT_ATTRIBUTION: string;
    const _09_LOGEMENT_EXISTANT_SANS_TRAVAUX: string;
    const _10_AGRANDISSEMENT_PAR_EXTENSION_OU_SURELEVATION: string;
    const _12_TRAVAUX_PIG: string;
    const _13_TRAVAUX_ECONOMIE_ENERGIE: string;
    const _18_PAIEMENT_DE_SOULTE_LOGEMENT_ANCIEN: string;
    const _22_SCPI_HABITAT: string;
    const _24_LOGEMENT_EXISTANT_AVEC_TRAVAUX: string;
    const _25_NUE_PROPRIETE: string;
    const _26_LOGEMENT_NEUF_RESIDENCE_TOURISME: string;
    const _30_LOGEMENT_NEUF_EN_INDIVISION: string;
    const _57_INVESTISSEMENT_PATRIMONIAL_NON_HABITAT: string;
    const _98_CONSTRUCTION_SANS_CONTRAT: string;
    const _A6_REGROUPEMENT_CREDITS_IMMOBILIERS: string;
    const _B7_REAM_RACHAT_CREDIT_IMMOBILIER: string;
    const _R1_BRS_ANCIEN_SANS_TRAVAUX: string;
    const _R2_BRS_ANCIEN_AVEC_TRAVAUX: string;
    const _R3_BRS_LOGEMENT_NEUF: string;
    const _R4_BRS_CONSTRUCTION_AVEC_CONTRAT: string;
    const _R5_BRS_CONSTRUCTION_SANS_CONTRAT: string;
}

declare module ApiInstuctionCredit.Constantes {
    abstract class TypeCharge {
        static loyerDuTerrain: string;
        static pensionAlimentaireVersee: string;
        static loyerResidencePrincipale: string;
        static loyerAutreResidence: string;
        static rentesViageresPayees: string;
        static autresCharges: string;
        static autresCreditsEnCe: string;
        static autresCreditCautionneEnCe: string;
        static autresCreditCautionneHorsCe: string;
        static autresCreditsHorsCe: string;
        static apl: string;
        /**
         * Type de charge Atout Clic, spécifique et non-officiel
         */
        static atoutClic: string;
        static creditConnaissanceClient: string;
    }
}

declare module ApiInstuctionCredit.Constantes {
    interface ILienIdwsTypologieObjet {
        idws: string;
        typologie: string;
    }
    /**
     * Données contantes propres à l'emprunteur
     */
    class TypologieObjetPorteGarantie {
        static listeTypologieObjet: ILienIdwsTypologieObjet[];
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     * Dans le cas d'un reste à financer, selction du mode d'affectation
     */
    enum AffectationResteAFinancer {
        Totalement,
        ParRepartition,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  Les états d'envoi du dossier à l'organisme SACCEF
     */
    enum ConsultationDossier {
        fromRecherche,
        fromInstruction,
        fromInstructionEtTransfert,
    }
}

declare module ApiInstuctionCredit.Enum {
    enum CreditDuree {
        Maxi,
        Fixe,
    }
}

declare module ApiInstuctionCredit.Enum {
    enum CreditEpargneLogementConcours {
        Interne,
        Externe,
    }
}

declare module ApiInstuctionCredit.Enum {
    enum CreditEpargneLogementObligatoire {
        Oui,
        Non,
    }
}

declare module ApiInstuctionCredit.Enum {
    enum CreditModeOptimisation {
        Total,
        Partiel,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  Cette rubrique permet d'indiquer le type de critère d'optimisation défini pour le calcul
     */
    enum CritereOptim {
        Echeance,
        Endettement,
        Duree,
        Palier,
        NonRenseigne,
    }
}

declare module ApiInstuctionCredit.Enum {
    enum DestinataireClausePersonne {
        RedacteurActe = 1,
        Emprunteur = 0,
    }
}

declare module ApiInstuctionCredit.Enum {
    module Edition {
        /**
         *  Type d'édition pour le dossier
         */
        enum TypeOffre {
            EditionAgence,
            EditionBackOffice,
            NonConcerne,
        }
        /**
         *  Type de document possible à l'édition
         */
        enum TypeDocument {
            Dossier = 0,
            Offre = 1,
            FicheSuiveuse = 3,
            RefusAssuranceExterne = 4,
        }
        /**
         *  Lors de la constition d'un dossier, statut du document
         */
        enum DocumentOffreIndustrialiseeStatutAction {
            EnAttente,
            EnCours,
            Ok,
            Erreur,
        }
        /**
         *  Statut du dossier de l'IDN pour la signature électronique
         */
        enum IdentifiantEtatDossier {
            DossierACreer,
            ConsitutionEnCours,
            Valide,
            AttenteSignatureRecepisse,
            AttenteSignatureDefinitive,
            Signe,
            Annuler,
        }
        enum Mode {
            SansObjet,
            EditionIndustrialisee,
            SignatureElectronique,
            DossierNumerique,
        }
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  Les états du dossier
     */
    enum EtatDossier {
        PropositionCommerciale,
        DemandeDeCredit,
        OffreCommerciale,
    }
    /**
     *  Les sous états du dossier
     */
    enum SousEtatDossier {
        PropositionCommerciale,
        PropositionCommercialeAutre,
        Montage,
        Decision,
        Edition,
        Remise,
        OffreEnAttenteSignature,
        OffreSigneeDelaiRetractation,
        OffreConclue,
        DemandeCreditSansSuite,
        PropositionCommercialeSansSuite,
        OffreSansSuite,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  Les états d'envoi du dossier à l'organisme SACCEF
     */
    enum EtatEnvoiSaccef {
        PasDEnvoi,
        Envoye,
        AEnvoyer,
        AReEnvoyer,
        AAnnuler,
        Annule,
        ReponseTraitee,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  Etat d'avancement de la vérification des mise à jour
     */
    enum EtatVerificationMaj {
        EnAttente = 0,
        EnCours = 1,
        Traite = 2,
    }
}

declare module ApiInstuctionCredit.Enum {
    enum FeuTricolore {
        Vert = 1,
        Orange = 2,
        Rouge = 3,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     * Enumérations utilisées pour les modalités
     */
    module Modalites {
        enum ModePayeurRecouvrement {
            MonoPayeur = 0,
            MultiPayeur = 1,
            PayeurUniqueParCredit = 2,
            NonDefini = 3,
        }
        enum TypeJustificatif {
            Facture = 0,
            Echelle = 1,
        }
        enum TypeRemboursementAnticipe {
            TauxIndemnites = 0,
            SurcoutTauxInterets = 1,
            Absent = 2,
        }
        enum TypeCaculImpaye {
            MajorationTaux = 0,
            TauxInteretRetard = 1,
            Absent = 2,
        }
        /**
         *  Les Type de Domiciliation des type de règlements pour les modalités
         */
        enum TypeDomiciliation {
            /**
             * TRE
             */
            Tresorerie,
            /**
             * NOM
             */
            Nom,
            /**
             * RIB
             */
            Rib,
            /**
             * IBA
             */
            Iban,
        }
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  Cette rubrique permet d'indiquer la vue en cours dans une popin à étape
     */
    enum PopinEtape {
        Une = 0,
        Deux = 1,
        Trois = 2,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  Contient les possibilités pour la personnalisation
     */
    class ModeCalcul extends MyWay.Services.StringEnum {
        static OPTIMISE: ModeCalcul;
        static MANUEL: ModeCalcul;
    }
    class ModeRestitution extends MyWay.Services.StringEnum {
        static GRAPHIQUE: ModeRestitution;
        static TABLEAU: ModeRestitution;
    }
}

declare module ApiInstuctionCredit.Enum {
    enum ProcessusInstruction {
        InstructionAgence,
        InstructionBO,
        PriseEnChargeBO,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     * Dans le cas du RAF lors de l'affectation totale, il est nécessaire de connaitre le type de l'élément selectionné
     */
    enum RafTypeElement {
        Apport = 0,
        CreditInterne = 1,
        CreditComplementaire = 2,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  La synthèse des erreurs en haut de page permet d'afficher par regroupement les anomalies
     */
    enum RegroupementSyntheseErreur {
        CoherenceDossier,
        Client,
        Projet,
        Financement,
        Assurances,
        Garanties,
        Modalites,
        Pieces,
        Manuel,
    }
}

declare module ApiInstuctionCredit.Enum {
    enum TypeTraitementTransfertDossier {
        TransfertAvis,
        TransfertDecision,
        TransfertConformite,
        AutoTransfert,
        transfertBackOffice,
        transfertAutreBackOffice,
        transfertPropriete,
    }
    enum typeTransfertDossier {
        typeEnvoi,
        typeRetour,
        typeSansObjet,
    }
}

declare module ApiInstuctionCredit.Enum {
    enum TypeAno {
        NonBloquant = 0,
        Bloquant = 1,
        Manuelle = 2,
        Alerte = 3,
    }
}

declare module ApiInstuctionCredit.Enum {
    class TypeControleDossier {
        code: number;
        libelle: string;
        constructor(code: number, libelle: string);
        toString(): string;
        static CONTROLE_DOSSIER: TypeControleDossier;
        static ALERTE_DOSSIER: TypeControleDossier;
        static CONTROLE_PIECES_JUSTIFICATIVES: TypeControleDossier;
        static CONTROLE_PIECES_AGENCE: TypeControleDossier;
        static CONTROLE_MANUEL: TypeControleDossier;
        static CONTROLE_MODALITES: TypeControleDossier;
        static CONTROLE_EMPRUNTEUR: TypeControleDossier;
        static CONTROLE_CAUTION: TypeControleDossier;
        static CONTROLE_PERSONNE: TypeControleDossier;
        static CONTROLE_PROJET: TypeControleDossier;
        static CONTROLE_PLAN_FINANCEMENT: TypeControleDossier;
        static CONTROLE_ASSURANCES: TypeControleDossier;
        static CONTROLE_GARANTIES: TypeControleDossier;
        static CONTROLE_CREDITS_EXTERNES: TypeControleDossier;
        static CONTROLE_CREDITS_INTERNES: TypeControleDossier;
        static CONTROLE_ELEMENTS_A_FOURNIR: TypeControleDossier;
        static getTypeControleDossierByCode(code: number): Enum.TypeControleDossier;
    }
}

declare module ApiInstuctionCredit.Filtres {
}

declare module ApiInstuctionCredit.Filtres {
    var dateNotZero: () => (date: any, chaineDefaut: string) => string;
}

declare module ApiInstuctionCredit.Filtres {
    /**
     * Récupère un symbole devise en fonction d'un code devise
     */
    function getSymboleDevise(code: string): string;
}

declare module ApiInstuctionCredit.Modale {
    class ModeEdition {
        static indefini: number;
        static creation: number;
        static consultation: number;
        static modification: number;
        static suppression: number;
    }
    const DATA_INPUT: string;
}

declare module ApiInstuctionCredit.Modele {
    class Adresse {
        codePostalVille: string;
        batiment: string;
        etage: string;
        rue: string;
        /**
         * Construction d'un objet de type Adresse
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAnomalieLecture {
        idAno: string;
        libelleAno: string;
        typeAno: number;
        dateHeureAno: string;
        idObjet: string;
        typeControle: number;
        idControleRegle: string;
    }
    /**
     * typeAno: 0 => Anomalie non bloquante ; 1 => Anomalie bloquante ; 2 => Anomalie manuelle ; 3 => Alerte
     */
    class AnomalieDossier implements IAnomalieLecture {
        typeControle: number;
        idAno: string;
        libelleAno: string;
        typeAno: number;
        dateHeureAno: string;
        idControleRegle: string;
        idObjet: string;
        typeControleDetail: ApiInstuctionCredit.Enum.TypeControleDossier;
        constructor(anomalieLecture?: IAnomalieLecture);
    }
    interface IParametrageBoutonContinuer {
        affichage: boolean;
        libelle: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    class Ape {
        libelle: string;
        /**
         * Construction d'un objet de type APE
         * @param libelle: string - Nom de l'APE
         */
        constructor(libelle: string);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IArborescence {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
        niveau2?: Array<IArborescence2>;
    }
    class Arborescence {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        niveau2: Array<IArborescence2>;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         * @param niveau2: Array<IArborescence2> - 2ème niveau de tuile
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IArborescence2 {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
        niveau3?: Array<IArborescence3>;
    }
    class Arborescence2 {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        niveau3: Array<IArborescence3>;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         * @param niveau3: Array<IArborescence3> - 3ème niveau facultatif
         */
        constructor(libelle: string, ligne1: string, ligne2?: string, ligne3?: string, ligne4?: string, niveau3?: Array<IArborescence3>);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IArborescence3 {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
    }
    class Arborescence3 {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         */
        constructor(libelle: string, ligne1: string, ligne2?: string, ligne3?: string, ligne4?: string);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICadreFiscal {
        idCaisseEpargne: number;
        codeTypologieCadreFiscal: string;
        codeNatureFinancier: string;
        codeDestinataireAutreObjet: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        libelleCadreFiscal: string;
    }
}

declare module ApiInstuctionCredit.Modele.CatalogueEpargneLogement {
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        criteresAccess: Parametrage.IScCriteresAcces;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerEtablissementsRequest {
        dateTraitement: string;
        filtreLibelle: string;
        versionWsdl: number;
    }
    interface IListerConventionsAssuranceCompatibleRequest {
        identifiantDossier: string;
        listeIdwsCredit: Array<string>;
        assuranceDeft: boolean;
        listeIdwsPersonne: Array<string>;
    }
    interface IListerConventionsGarantieRequest {
        identifiantDossier: string;
        listeIdwsCredit: Array<string>;
        informationGarantie: IInformationGarantie;
    }
    interface IScCodePays {
        codePaysLocalisation: string;
        libellePaysLocalisation: string;
        libelleCreationPaysLocalisation: string;
        numeroOrdreClasse: number;
    }
    interface IScConventionResume {
        idConvention: string;
        numeroExterneConvention: string;
        idIntervenant: string;
        libelleLongConvention: string;
        libelleCreationConvention: string;
        commentaireConvention: string;
        commentaireConvention1: string;
        codeNatureCaution: string;
        datePresenceDeffConvention: string;
        dateFinDeffConvention: string;
        regleDateDeff: string;
        modeDexp: number;
        montantMinimumCreditPourConvention: number;
        montantMaximumCreditPourConvention: number;
        nombrePeriodeMinimumCredit: number;
        periodiciteDexpConvention: number;
        nombrePeriodeMaximumCredit: number;
        quotientMinimumParBeneficiaire: number;
        quotientMaximumParBeneficiaire: number;
        pasQuotient: number;
        montantMinimumGarantieParTete: number;
        montantMaximumGarantieParTete: number;
        pasMontantGarantie: number;
        naturePresenceCharge: number;
        periodiciteRecouvrement: number;
        codeDetrDateRecouvrement: number;
        delaiRver: number;
        codeCommissionIntervenantExterieur: number;
        tauxCommissionCaisse: number;
        codeTypeAssietteCommission: number;
        codeModeleRegleCommission: number;
        codeTiersGarantie: number;
        codeTypeDobjAutre: number;
        codeNatureBonification: number;
        codeModeRegle: string;
        montantMaximumEncours: number;
        nombrePeriodeMaximumPf: number;
        nombrePeriodeMaximumDt: number;
        nombrePeriodeMaximumDa: number;
        nombrePeriodeMaximumAm: number;
        codeRestant: string;
        montantPlafondPourDelegation: number;
        typeConvention: string;
        ageMaximumRequisParConvention: number;
        ageMinimumRequisParConvention: number;
        typeDacc: string;
        codeDevise: string;
        libelleLongConventionJuridique: string;
        typeDass: string;
        codeDerogationAge: number;
        estExterne: boolean;
        estConventionSaccef: boolean;
        estConventionOSEOEtudiant: boolean;
        estConventionSIAGI: boolean;
        estConventionCFG: boolean;
        estAERAS: boolean;
        estCautionMutuelle: boolean;
        estCautionMutuelle_ClausesEditiquePieco: boolean;
        estCreditLogementInitio: boolean;
        estCreditLogement: boolean;
        estInterne: boolean;
        estTAEA: boolean;
        estSFGAS: boolean;
        libelleCompAssurance: string;
    }
    interface IScConvention extends IScConventionResume {
        listeCotisation: Array<IScCotisation>;
        listeCritereId: Array<string>;
    }
    interface IScConventionGarantie extends IScConvention {
        formeGarantie: string;
        casImpAutomatique: number;
        delaiInformation: number;
        idPersonneCouverture: string;
        codeNatureCautionSimpleLimite: string;
        conventionCautionMutuel: number;
    }
    interface IScCotisation {
        sousTypeAccessoire: string;
        typeDaccCtfc: string;
        repriseCarObligatoireFacultatifCotisation: number;
        modeCalculLacc: number;
        dateDebutDapp: string;
        dateFinDapp: string;
        regleDappLacc: string;
        regleDateDebutDappLacc: string;
        regleEvenementDeclaration: string;
        codePeriodiciteApplication: number;
        codeRecouvrementAccessoire: number;
        codeTypeApplicationAccessoire: number;
        nombrePeriodeDappLacc: number;
        periodiciteDappLacc: number;
        regleDappAprd: string;
        codeCalculteg: number;
        codeAccessoireRemboursementFinCredit: boolean;
        codeApplicationEcheance: boolean;
        codeModeCalculTaux: number;
        regleCalculLacc: string;
        informationTauxCotisation: Array<number>;
        informationMontantCotisation: Array<number>;
        fractionFinancierMaximumLacc: number;
        compatibiliteInstruction: boolean;
        compatibiliteAvenant: boolean;
        financierAccessoireCredit: boolean;
        retardCodeIndiceDerogation: number;
        codeIntegrationPlanFinancier: number;
        listeCoutCotisation: Array<IScCotisationCout>;
        listeTrancheMontant: Array<IScTrancheMontant>;
    }
    interface IScCotisationCout {
        montantMinimumRecouvrement: number;
        montantMinimumAccessoire: number;
        montantMaximumAccessoire: number;
        valeurConsolide: number;
    }
    interface IScTrancheMontant {
        numeroTranche: number;
        debutTrancheMontant: number;
        finTrancheMontant: number;
        cotCout: IScCotisationCout;
    }
    interface IScDevise {
        codeDevise: string;
        libelleDevise?: string;
        dateDebutUtilisationDevise?: string;
        dateSuspensionUtilisationDevise?: string;
        nombreChiffreMaximumDevise?: number;
        niveauArrondiDevise?: number;
        libelleCreationDevise?: string;
        codeIndiceDeviseInstruction?: number;
        nombreDecimalDevise?: number;
        codeSeparateurDecimal?: number;
        codeSeparateurChiffresMontant?: number;
        numeroDordreDevise?: number;
    }
    interface IScAdrParamRubrique {
        nomDonneurMCD: string;
        origineDonneur: number;
        caracteristiqueAffcRubriqueHabitation: number;
        caracteristiqueAffcRubriqueConsommation: number;
        caracteristiqueAffcRubriqueTresorerie: number;
        utilisationValeurParDeft: number;
        valeurParDeft: string;
        montantParDeft: number;
    }
    interface IScParamApplicatif {
        idCaisseEpargne: number;
        idElementStructureInstruction: string;
        codeParametreApplicatif: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        libelleParametre: string;
        codeTypeParametre: string;
        montantParametreMontant: number;
        dureeDunParametre: number;
        dateParametreDate: string;
        tauxParametreTaux: number;
        valeurParametre: string;
        codeVersementNEO: string;
        codeReleaseNEO: string;
        versementParametre: number;
    }
    interface IScNatureGarantieRelatifATypeObjet {
        codeNatureGarantie: string;
        typeObjetFinancierGarantie: string;
        typologieLobj: string;
        typeGarantieBale2: string;
        typeDocEdit: string;
    }
    interface IScParamGarantie {
        idCaisseEpargne: number;
        codeNatureGarantie: string;
        codeDureDeftGarantie: number;
        codeUtilPactCommission: number;
        codeVoiePare: number;
        delaiConsolideGarantie: number;
        delaiMinimumGarantie: number;
        delaiMaximumGarantie: number;
        delaiPrlgGarantie: number;
    }
    interface IScTypeEds {
        idCaisseEpargne: number;
        codeTypeDelementDeStructure: string;
        libelleTypeDelementDeStructure: string;
        entiteProprietaire: number;
        codeIndiceStructureInstruction: number;
        rangNiveauStructure: number;
        structureDinstruction: number;
    }
    interface IScLienObjetFinanceObjetSousJacent {
        typeObjetFinancierGarantie: string;
        typeObjetRegleTor: string;
        classeObjet: string;
        typeObjetSousJacent: string;
        typeObjetRegleTor1: string;
    }
    interface IScParamEtablissement {
        codeEtablissement: string;
        libelleEtablissement: string;
    }
    interface IScTypeRole {
        idCaisseEpargne: number;
        typeRolePersonne: string;
        roleLint: string;
        codeValeurLogiciel: number;
        codeTypeProcedure: number;
        codeTypeTableCentral: number;
        codeIntfInstructionGestion: number;
    }
}

declare module ApiInstuctionCredit.Modele.CatalogueProjet {
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        typeDeTypologie?: string;
        criteresAccess?: Parametrage.IScCriteresAcces;
    }
}

declare module ApiInstuctionCredit.Modele {
    class ChampsRequis {
        etape: number;
        libelle: string;
        section: string;
        page: string;
        renseigne: boolean;
        necessaire: boolean;
        /**
         * Création d'un champs requis
         * @param etape: number - 1 => simulation, 2 => accord prêteur, 3 => édition
         * @param libelle: string - Nom afficher dans le cartouche de complétude
         * @param section: string - Titre de la section où se trouve le champs
         * @param page: string - Titre de la page où se trouve la section
         * @param renseigne: boolean - Le champs est-il renseigné ou vide dans le formulaire. Défaut : false (vide)
         * @param necessaire: boolean - Le champs est-il toujours nécessaire ou dépend-t-il d'un autre élément. Défaut : true
         */
        constructor(etape: number, libelle: string, section: string, page: string, renseigne?: boolean, necessaire?: boolean);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICookieRepriseDossier {
        codeEtablissement: string;
        idDossier: string;
        referenceExterneAgent: string;
        codeAction: string;
        dateTraitement: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreationDossier {
        codeDevise: string;
        codeCanalCreation: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    class EntreeEligibilite {
        revnFiscal: number;
        nombreEnfant: number;
        nombrePersonne: number;
        surfHabitation: number;
        typeLogement: number;
        indiceCalculEnvl: boolean;
        montantAcht: number;
        montantTravaux: number;
        montantApport: number;
        indiceLogementPerf: boolean;
        indicePerfEnergetique: number;
        indiceLogementHlm: boolean;
        dateAcqsTerr: string;
        montantFrsNegocie: number;
        indicePrimoAccedant: boolean;
        codePoste: string;
        ville: string;
        constructor(projet: Modele.IProjet, emprunteur: Modele.IEmprunteur, bat: Modele.IBatimentHabitableFinance, revenusFiscaux: number, travaux: Modele.ITravauxFinances, plan: Modele.IPlanFinancementDetail);
    }
    interface IProfilPhasePTZ {
        codeTypePhase: string;
        dureeMinimumPhase: number;
        dureeMaximumPhase: number;
        periodicitePhase: number;
        quotientAmortissement: number;
        montantEcheance: number;
    }
    interface IProfilProduitPTZ {
        idPtz: string;
        montantMaximumPtz: number;
        montantMinimumPtz: number;
        montantMaximumMajrePtz: number;
        montantMaximumOprt: number;
        listePhssProduitPtz: Array<IProfilPhasePTZ>;
        idProduitFinancier: string;
        dureeConseillee: number;
        montantRessourcesRetenu: number;
        rFR: number;
        coefficientFamilial: number;
        coefficientPonderation: number;
        coutOperation: number;
        messages: string[];
    }
    interface IProfilEcoPTZ {
        idProduitFinancier: string;
        dureeMaximum: number;
        dureeConseillee: number;
        montantMaximum: number;
        messages: string[];
    }
    interface IProfilProduitsPELCEL {
        idProduitFinancierPEL: string;
        idProduitFinancierCEL: string;
        libelleProduitFinancierPEL: string;
        libelleProduitFinancierCEL: string;
        montantMaximumPEL: number;
        montantMinimumPEL: number;
        montantMaximumCel: number;
        montantMinimumCel: number;
        dureeConseilleeProduitPEL: number;
        dureeConseilleeProduitCEL: number;
        messages: Array<string>;
    }
    interface IResultatEligibilite {
        indiceEligibilitePtz: boolean;
        indiceEligibilitePC: boolean;
        indiceEligibilitePas: boolean;
        indiceEligibiliteMajrePtz: boolean;
        indiceEligibilitePEL: boolean;
        indiceEligibiliteCel: boolean;
        indiceEligibiliteEcoPTZ: boolean;
        listeAnmlEligibilitePtz: Array<string>;
        listeAnmlEligibilitePC: Array<string>;
        listeAnmlEligibilitePas: Array<string>;
        listeAnmlEligibilitePEL: Array<string>;
        listeAnmlEligibiliteCel: Array<string>;
        listeAnmlEligibiliteEcoPTZ: Array<string>;
        profilPtzEligibilite: IProfilProduitPTZ;
        profilEcoPtzEligibilite: IProfilEcoPTZ;
        profilPELCelElg: IProfilProduitsPELCEL;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEmolument {
        libelle: string;
        valeur: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICalculerEndettementRequest {
        identifiantDossier: string;
        surProposition: boolean;
        numeroRelatifPlan: number;
    }
    interface IResultatCalculEndettement {
        /**
         * Endettement
         */
        endettement: IEndettement;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
    interface IEndettement {
        /**
         * MtRessources
         */
        montantRessources: number;
        /**
         * MtRessourcesAvecApl
         */
        montantRessourcesAvecAPL: number;
        /**
         * MtCharges
         */
        montantCharges: number;
        /**
         * MtChargesAvecApl
         */
        montantChargesAvecAPL: number;
        /**
         * TxEndettement
         */
        tauxEndettement: number;
        /**
         * TxEndettementAvecApl
         */
        tauxEndettementAvecAPL: number;
        /**
         * MntResteAVivre
         */
        mntResteAVivre: number;
        /**
         * IndicResteAVivre
         */
        indiceResteAVivre: number;
        /**
         * IndicResteAVivreAvecApl
         */
        indiceResteAVivreAvecAPL: number;
        /**
         * MntResteAVivreAvecApl
         */
        mntResteAVivreAvecAPL: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    class Garantie {
        libelle: string;
        /**
         * Construction d'une Garantie
         * @param valeurs: Garantie
         */
        constructor(valeurs: Garantie);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICaracteristiqueAgent {
        codeEtablissement: string;
        identifiantAgent: number;
        numeroTelephoneAgent: string;
        adresseEMailAgent: string;
        dateFinValiditeAgent: Date;
        nomUsageAgent: string;
        prenomAgent: string;
        civiliteAgent: string;
        nomAgent: string;
        indicateurNonNominatifAgent: string;
        indicateurAffectableAgent: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDonneesCommunesEDS {
        codeEtablissement: string;
        identifiantElementStructure: number;
        typeElementStructure: string;
        libelleCourtTypeEDS: string;
        libelleLongTypeEDS: string;
        referenceExterneEDS: number;
        libelleElementStructure: string;
        libelleCourtEDS: string;
        libelleLongEDS: string;
        dateDebutValiditeEDS: Date;
        dateFinValiditeEDS: Date;
        identifiantEDSDirigeant: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IElementMaj {
        idws: string;
    }
    interface IElementLecture {
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
    interface IElement extends IElementLecture {
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterEvenementRequest {
        identifiantDossier: string;
        codeTypeEvenement: string;
        libelleFacultatif: string;
    }
    interface IEvenementLecture {
        numeroRelationEvenDossier: number;
        codeEtatDossier: number;
        dateSaisieEven: string;
        messEnregistrementSurEvenDossier: string;
        dateEffetEven: string;
        codeTypeEven: string;
        idEntiteSaisieEven: string;
        libelleEntiteSaisieEven: string;
        codeIndiceGestionCentralEven: number;
        elementStructureGestionBackCentral: string;
        idCaisseAssuranceBackCentral: number;
        libelleEven: string;
        codeNatureEven: string;
        idAvisAssuranceEven: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAutorisationStructure {
        conformite: boolean;
        consultation: boolean;
        decision: boolean;
        instruction: boolean;
        miseAJour: boolean;
        priseEnChargeBO: boolean;
        transfert: boolean;
        prorogation: boolean;
    }
    interface IInformationAgent {
        agent: IAgent;
        autorisationStructure: IAutorisationStructure;
        habitatAutorisee: boolean;
        tresoConsommationAutorisee: boolean;
        prosAutorisee: boolean;
    }
    interface IAgent {
        idAgent: string;
        lblAgent: string;
        idEDSGestion: string;
        lblAgenceRat: string;
        cdeAgentRat: string;
        typeUtilisateurCo: number;
        idAgentInterne: string;
        etabBaofCentral: number;
        idEDSBaofCentral: string;
        techniqueDeVente: number;
        estAgentBO: boolean;
        estBackup: boolean;
        estAgentExterne: boolean;
        derogationBornes: boolean;
        autoriserForcage: boolean;
        autoriserForcagePIECO: boolean;
        autoriserInstructionPourX: boolean;
        autoriserMAJPourX: boolean;
        autoriserDateTraitement: boolean;
        autoriserAXANet: boolean;
        autoriserDevisEcoPTZ: boolean;
        autoriserCNPNet: boolean;
        autoriserCAPI: boolean;
        autoriserSDPI: boolean;
        autoriserAgrementAssurance: boolean;
        autoriserAccesDNC: boolean;
        listeHabilitation: Array<string>;
        existeDossiersEnAlerte: boolean;
        estAgentRefusAssuranceExterne: boolean;
        elementStructure1: string;
        elementStructure2: string;
        elementStructure3: string;
        elementStructure4: string;
        elementStructure5: string;
        elementStructure6: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeSignatureElectroniqueGen {
        /**
         * sIdntDoss
         */
        idDossier: string;
        /**
         * CodeSignature
         */
        codeSignature: number;
    }
    interface IEntreeSignatureElectronique {
        /**
         * CodeSignature
         */
        codeSignature: number;
        /**
         * sIdntDoss
         */
        idDossier: string;
    }
    interface IInformationSignataireOffre {
        /**
         * DateSignatureRecepisse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureRecepisse: string;
        /**
         * DateMiseAdispoOffre
         * Type date au format yyyy-MM-dd
         */
        dateMiseAdispoOffre: string;
        /**
         * DateSignatureOffre
         * Type date au format yyyy-MM-dd
         */
        dateSignatureOffre: string;
    }
    interface IInformationSignataireDemandeDeCreditAgence {
        /**
         * DateSignatureDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateSignatureDemandeDeCredit: string;
    }
    interface IInformationSignataireGenerique {
        /**
         * LibelleTitreCivilite
         */
        libelleTitreCivilite: string;
        /**
         * NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Prenoms
         */
        prenoms: string;
        /**
         * InformationsSignataireOffre
         */
        informationsSignataireOffre: IInformationSignataireOffre;
        /**
         * InformationSignataireDemandeDeCreditAgence
         */
        infoSignatDemandeDeCrdtAgence: IInformationSignataireDemandeDeCreditAgence;
    }
    interface IInformationDossierSignatureOffre {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierDemandeDeCreditAgence {
    }
    interface IInformationDossierSignatureGenerique {
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         */
        estDossierSigne: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataireGenerique>;
        /**
         * InformationsSignatureOffre
         */
        informationsSignatureOffre: IInformationDossierSignatureOffre;
        /**
         * InformationsDemandeDeCreditAgence
         */
        infosDemandeDeCreditAgence: IInformationDossierDemandeDeCreditAgence;
    }
    interface IDocumentSignatureElectroniqueLecture extends IElementLecture {
        /**
         * IdentifiantDocument
         */
        identifiantDocument: string;
        /**
         * CodeTypeEntite
         */
        codeTypeEntite: string;
        /**
         * IdentifiantIDN
         */
        identifiantIDN: string;
        /**
         * IdentifiantComplet
         */
        identifiantComplet: string;
        /**
         * NomDocument
         */
        nomDocument: string;
        /**
         * RefDocProd
         */
        referenceDocProd: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Origine
         */
        origine: string;
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * FluxBinaire
         */
        fluxBinaire: string;
        /**
         * EstPresent
         */
        estPresent: boolean;
        /**
         * IndicePlan
         */
        indicePlan: number;
        /**
         * IndiceCredit
         */
        indiceCredit: number;
        /**
         * IdPersonne
         */
        idPersonne: string;
        /**
         * Exemplaire
         */
        exemplaire: string;
        /**
         * LibelleEntiteRattachement
         */
        libelleEntiteRattachement: string;
        /**
         * NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * estDocNeo
         */
        estDocNEO: boolean;
        /**
         * EstDocOffre
         */
        estDocOffre: boolean;
    }
    interface ISignatureElectroniqueLecture extends IElementLecture {
        /**
         * InformationDossierSignature
         */
        informationDossierSignature: IInformationDossierSignatureGenerique;
        /**
         * ListeDocumentIDN
         */
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueLecture>;
    }
    interface IAnnActeSignElecGenRequest {
        entreeSignatureElectronique: IEntreeSignatureElectroniqueGen;
        /**
         * motif annulation
         */
        motifAnnulation: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    class MapChampsRequis {
        /**
         * Liste de l'ensemble des champs obligatoires
         * La liste des champs est renseignée dans l'ordre des pages et sections
         */
        static MAP_CHAMPS_REQUIS: {
            "TYPE-DE-PROJET": ChampsRequis;
            "VALEUR-BIEN-A-VENDRE": ChampsRequis;
            "CRD": ChampsRequis;
            "MONTANT-OPERATION": ChampsRequis;
            "LOCALISATION-BIEN": ChampsRequis;
            "CRITERE-REMBOURSEMENT": ChampsRequis;
        };
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IMetaObjet {
        idCaisseEpargne: number;
        idMetierObjet: string;
        numeroRelation: number;
        libelleMetierObjet: string;
        libelleComplementMetierObjet: string;
        codeNatureFinancier: string;
        codeCategorieEmprunt: string;
        typeObjetFinancierGarantie: string;
        typeDobjetReglemente: string;
        codeReamenagement: number;
        numeroOrdreClasse: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     *  Recense les éléments communs aux différentes modalités de calcul
     */
    interface IModaliteCalcul {
        codeModeCalculAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        tauxConsolideAccessoire: number;
        montantConsolideAccessoire: number;
        regleApplicationAccessoireAprd: string;
        numeroRegleApplicationAccessoire: string;
        codeTypeAssietteCalculAccessoire: string;
        fractionFinancierMaximum: number;
        codeTypeAccessoire: string;
    }
    /**
     *  Modalité de calcul lié au produit
     */
    interface IModalitesCalculHorsConventionParProduit extends IModaliteCalcul {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypeAccessoire: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        dateTraitement: string;
        codeAccessoireObligatoire: number;
        codeModeCalculAccessoire: number;
        numeroRegleCalculAccessoire: string;
        montantConsolideAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypeAssietteCalculAccessoire: string;
        montantPlafondTrancheCalculAccessoire: number;
        tauxConsolideAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        montantPlafondTrancheCalculAccessoire1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantPlafondTrancheCalculAccessoire2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        montantPlafondTrancheCalculAccessoire3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        montantPlafondTrancheCalculAccessoire4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcul: number;
        montantMaximumAccessoireCalcul: number;
        montantMinimumAccessoirePourRecouvrement: number;
        numeroRegleApplicationAccessoire: string;
        regleDateDebutApplicationAccessoire: string;
        regleEvenementDeclaration1ErApplication: string;
        periodiciteApplicationAccessoire: number;
        codeRecouvrementAccessoire: number;
        uniteDureeApplicationAccessoire: number;
        dureeApplicationAccessoire: number;
        regleApplicationAccessoireAprd: string;
        codeAccessoireCalculteg: number;
        codeApplicationEcheance: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        codeIndiceDerogationBorne: number;
        fractionFinancierMaximum: number;
        codeCompAccessoireInstruction: number;
        codeCompAccessoireAvenant: number;
        codeFinancierFrsParDeft: number;
    }
    /**
     *  Modalité de calcul complémentaire pour les caisses pour tous les produits
     */
    interface IModalitesCalculAccessoireComplementaire extends IModaliteCalcul {
        idCaisseEpargne: number;
        codeTypeAccessoire: string;
        codeSousTAccessoireComplement: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        codeModeCalculAccessoire: number;
        montantConsolideAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypeAssietteCalculAccessoire: string;
        montantPlafondTrancheCalculAccessoire: number;
        tauxConsolideAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        montantPlafondTrancheCalculAccessoire1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantPlafondTrancheCalculAccessoire2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        montantPlafondTrancheCalculAccessoire3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        montantPlafondTrancheCalculAccessoire4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        numeroRegleApplicationAccessoire: string;
        regleDateDebutApplicationAccessoire: string;
        regleEvenementDeclaration1ErApplication: string;
        periodiciteApplicationAccessoire: number;
        codeRecouvrementAccessoire: number;
        uniteDureeApplicationAccessoire: number;
        dureeApplicationAccessoire: number;
        regleApplicationAccessoireAprd: string;
        codeAccessoireCalculteg: number;
        codeApplicationEcheance: number;
        codeCommissionIntervenantExterne: number;
        modeCalculTaux: number;
        libelleLongAccessoireComplement: string;
        libelleCreationAccessoireComplement: string;
        codeApplication: number;
        codeTypeApplicationAccessoire: number;
        codeIndiceDerogationBorne: number;
        fractionFinancierMaximum: number;
        codeCompAccessoireInstruction: number;
        codeCompAccessoireAvenant: number;
        codeCompatibiliteAccessoirePool: number;
        codeCompatibiliteAccessoireEPS: number;
        codeTypeTVA: string;
    }
    /**
     *  Objet générique utilisé dans l'IHM pour manipulé les modalités
     */
    class ModaliteCalcul implements IModaliteCalcul {
        codeModeCalculAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        tauxConsolideAccessoire: number;
        montantConsolideAccessoire: number;
        regleApplicationAccessoireAprd: string;
        numeroRegleApplicationAccessoire: string;
        codeTypeAssietteCalculAccessoire: string;
        fractionFinancierMaximum: number;
        codeTypeAccessoire: string;
        codeTypePhase: string;
        obligatoire: boolean;
        montantMinimumAccessoireCalcul: number;
        montantMaximumAccessoireCalcul: number;
        constructor(modaliteLieProduit: IModalitesCalculHorsConventionParProduit, modaliteComplementaire: IModalitesCalculAccessoireComplementaire);
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     *  Typologies de bénéficiaires de la BT33 liées à la typologie de frais traité.
     */
    interface IModalitesTypeDeRoleTiersParAccessoire {
        idCaisseEpargne: number;
        codeSousTAccessoireComplement: string;
        typeRolePersonne: string;
        roleLint: string;
    }
    /**
     *  Détail des tiers pour un rôle spécifique
     */
    interface IModalitesTiersParTypeDeRole {
        idCaisseEpargne: number;
        identifiantTiers: string;
        typeRolePersonne: string;
        intitule: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePostal: string;
        localite: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IPret extends Produit {
        typePret: string;
    }
    class Pret implements IPret {
        typePret: string;
        libelle: string;
        sousFamille: ApiInstuctionCredit.Modele.Produit;
        famille: ApiInstuctionCredit.Modele.Produit;
        /**
         * Construction d'un Pret
         * @param valeurs: Pret
         */
        constructor(valeurs: ApiInstuctionCredit.Modele.Produit, typePret: string);
    }
}

declare module ApiInstuctionCredit.Modele {
    class PretPrincipal extends Pret {
        isLissable: boolean;
        /**
         * Construction d'un pret principal
         * @param valeurs: Pret
         * @param categorie: string
         * @param isLissable: boolean
         * @param favorie: boolean - Défaut : false
         */
        constructor(valeurs: ApiInstuctionCredit.Modele.Produit, isLissable: boolean);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IProduitFinancier {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dateTraitement: string;
        libelleLongProduit: string;
        libelleCreationProduit: string;
        commentaireProduit: string;
        commentaireProduit1: string;
        codeEtatProduit: number;
        dateDebutSuspensionProduit: string;
        dateMiseServiceProduit: string;
        dateFinMiseServiceProduit: string;
        dateCommercialisationProduit: string;
        dateCreation: string;
        codeAutreDuplicationProduit: number;
        dateAnnulationModification: string;
        dateCloture: string;
        codeFamilleControle: string;
        quotientFinancierAutre: number;
        codeEngagementRctb: number;
        codeDevise: string;
        montantMinimumCredit: number;
        montantMaximumCredit: number;
        pasSurMontantCredit: number;
        uniteDureeCredit: number;
        modeExpressionDureeCredit: number;
        dureeCredit: number;
        dureeCredit1: number;
        dureeCredit2: number;
        dureeCredit3: number;
        dureeCredit4: number;
        codePossibiliteMERMADDevise: number;
        codePossibilitePrefinancement: number;
        codePossibiliteDiffereAmortissement: number;
        codePossibiliteDiffereTotal: number;
        nombrePhaseAmortissement: number;
        codeGarantieObligatoire: number;
        nombrePeriodeValiditeOffreContrat: number;
        periodeBaseValiditeOffreContrat: number;
        codeEcheancierVersementContrat: number;
        numeroCalculDateEffetCredit: string;
        modeDetrVersement: string;
        numeroRegleCalculMontantVersement: string;
        numeroRegleCalculDatsVersement: string;
        evenementCalculDateLimiteVersement: string;
        dureePeriodeVersement: number;
        uniteDureeVersement: number;
        dureePeriodePremierVersement: number;
        unitePeriodePremierVersement: number;
        nombreMaximumVersement: number;
        montantMinimumVersement: number;
        codeConfirmationVersement: number;
        codePrimeDernierVersement: number;
        delaiPourJustificatifManquantMAD: number;
        delaiConfirmationVersement: number;
        delaiAnticipeVersement: number;
        codeTraitementIntrIntr: number;
        codeTraitementIntrIntr1: number;
        codeTraitementIntrIntr2: number;
        codeTraitementIntrIntr3: number;
        codeTraitementIntrIntr4: number;
        codeActuarielIntrIntr: number;
        numeroModulableCalculta: string;
        numeroRegleDateMERZero: string;
        jourDateEcheance: string;
        moisDateEcheance: string;
        moisDateEcheance1: string;
        moisDateEcheance2: string;
        moisDateEcheance3: string;
        moisDateEcheance4: string;
        moisDateEcheance5: string;
        codeIntrCompRa: number;
        compteurMAJ: number;
        codeCreditRelease: number;
        codeSousclasseBafi: string;
        codeDestinataireAutreObjet: number;
        codeTauxCreditDirecteur: number;
        referenceRessource: string;
        numeroOrdreClasse: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        indiceCompteCrrt: number;
        codeEligibiliteAPL: number;
        codeTypePretCbin: number;
        codeProduitRevision: number;
        codeAccessoireCompBonificationAutre: number;
        codeIndiceMargeNegocie: number;
        codeIndiceDerogationBorne: number;
        indicateurPossibilitePhaseMobln: number;
        codetaCRDReel: number;
        codeFamilleCommissionPres: string;
        phssAssuranceProduit: Array<IProduitPhase>;
        listeConditionTauxAssuranceProduit: Array<IConditionsDeTaux>;
        listeModeleRa: Array<IModalitesRemboursementParProduit>;
        listeModeleCalculHorsConvention: Array<IModalitesCalculHorsConventionParProduit>;
        transfertProduit: Array<ITranscodifProduit>;
        conditionSpecifiqueAssuranceProduit: Array<IConditionsSpecifiques>;
        vartDuree: Array<IVariationDuree>;
        listeInformationParametreChatel: Array<IProduitParamSimulationRevision>;
        phaseProduit: Array<IPhaseProduitS33A>;
        recuperationLesNatureGarantiePourCEProduit: Array<INaturesDeGarantieParProduit>;
        listeParametreAssuranceProduit: Array<IParamRevisionParProduit>;
        estModulable: boolean;
        estBonifiableFlat: boolean;
        estLissage: boolean;
        estPATZ: boolean;
        estECOPATZ: boolean;
        estECOPATZCOPRO: boolean;
        estPC: boolean;
        estPAS: boolean;
        estPEL: boolean;
        estCEL: boolean;
        estATauxRevisable: boolean;
    }
    interface IProduitPhase {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        dateTraitement: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        uniteDureeDunPhase: number;
        modeExpressionDureePhase: number;
        dureePhaseProduit: number;
        dureePhaseProduit1: number;
        dureePhaseProduit2: number;
        dureeDunPhasePas: number;
        periodiciteCalculIntr: number;
        periodiciteCalculIntr1: number;
        periodiciteCalculIntr2: number;
        periodiciteCalculIntr3: number;
        periodiciteCalculIntr4: number;
        periodiciteMERAmortissement: number;
        periodiciteMERAmortissement1: number;
        periodiciteMERAmortissement2: number;
        periodiciteMERAmortissement3: number;
        periodiciteMERAmortissement4: number;
        codePeriodiciteDiffereMER: number;
        codeRecouvrementIntrTermeEchu: number;
        codeRecouvrementAmortissementTermeEchu: number;
        codeTypeConfirmationTauxIntr: number;
        modeCalculTaux: number;
        nombreJourAnnulationNumerateur: number;
        modeCalculAmortissement: number;
        capitalReferenceTableConstante: number;
        typeAssietteRemboursement: number;
        codeVersementAutrePendantPhase: number;
        codeReductionDureePrefinancement: number;
        codePrelevementDureePrefinancement: number;
        codeTypePrefinancement: number;
        codeRecouvrementPartielIntr: number;
        codeCalculIntrRepr: number;
        codeCapitalIntrDiffere: number;
        calculIntrJourReel: number;
        periodiciteMERIntr: number;
        periodiciteMERIntr1: number;
        periodiciteMERIntr2: number;
        periodiciteMERIntr3: number;
        modeCapitalIntr: number;
        modeRecouvrementIntr: number;
        periodiciteCompositionIntr: number;
        codeModeExpressionTauxMoyenPhase: number;
        valeurMinimumTauxMoyenPhase: number;
        valeurMaximumTauxMoyenPhase: number;
        valeurConsolideTauxMoyenPhase: number;
        codeTauxPalierCalcul: number;
        codeIndice: string;
        nombreMaximumPeriodeVartDuree: number;
        codeOptionSurPhaseProduit: number;
        codeObjetOption: number;
        typeOption: number;
        codeCourtPourPresenceDopt: number;
        delaiCourtPresenceDopt: number;
        periodiciteOption: number;
        nombreJourAnnulationDenomination: number;
        quotientConsolideCapitalAmortissement: number;
        quotientMinimumCapitalAmortissement: number;
        quotientMaximumCapitalAmortissement: number;
        unitePeriodeValeurIntituleIndice: number;
        nombrePeriodeValeurIntituleIndice: number;
        codeTypeTraitementDech: number;
        quotientMaximumCapitalIfin: number;
        quotientConsolideCapitalAmortissement1: number;
        quotientMinimumCapitalAmortissement1: number;
        quotientMaximumCapitalAmortissement1: number;
        idRegleButoireDuree: string;
    }
    interface IConditionsDeTaux {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dureeMinimumPlageConditionTaux: number;
        dateTraitement: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        dureeMaximumPlageConditionTaux: number;
        codeModeExpressionTaux: number;
        codeIndice: string;
        tauxMoyenMinimumCredit: number;
        tauxMoyenMaximumCredit: number;
        tauxMoyenConsolideCredit: number;
        tauxRessource: number;
        codeIndexTauxConsolide: string;
        vartLindTauxConsolide: number;
        codeTypeParametrePondere: number;
        margeFixePourRevision: number;
        vartMargeFixePourRevision: number;
        codeTypeTranchePret0: string;
    }
    interface IModalitesRemboursementParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        numeroModeleRa: number;
        dateTraitement: string;
        idConditionRa: string;
        idModeleCalculIndemniteRa: string;
        pourAssociationCalculModeleRa: number;
        pourAssociationRegleAutreRa: number;
        pourcentageMontantMinimumRaAutre: number;
        codeTypeAssietteMontantMinimumRa: number;
        codeAutreRaTotalInferieurMontantMinimum: number;
        sucouTaux: number;
        dateDebutApplication: string;
        dateFinApplication: string;
    }
    interface ITranscodifProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeProduitRestant: string;
        codeTypeRestant: string;
        codeRestant: string;
        dateDebutApplication: string;
        libelleLongProduit: string;
    }
    interface IConditionsSpecifiques {
        idCaisseEpargne: number;
        idProduit: string;
        libelleLongProduit: string;
        idClasse: string;
        libelleClasse: string;
        nOrdreRatClasseProduit: number;
        nOrdreRatParagrapheClasse: number;
        titreParagraphe: string;
        corpsParagraphe: string;
        numeroRelation: number;
        codeMiseFormeParagraphe: string;
        codeTypeClasse: string;
    }
    interface IVariationDuree {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypeButoireDuree: number;
        numeroJeuxIndiceRevision: number;
        dateDebutApplication: string;
        dureeMinimumPlageConditionTaux: number;
        dateFinApplication: string;
        dureeMaximumPlageConditionTaux: number;
        regleDetrDall: string;
        nombrePeriodeAllongementDureeCredit: number;
        allongementDureeCredit: number;
        nombrePeriodeMinimumDallCredit: number;
        nombrePeriodeMaximumDallCredit: number;
        regleDetrReduction: string;
        nombrePeriodeReductionDureeCredit: number;
        reductionDureeCredit: number;
    }
    interface IProduitParamSimulationRevision {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        variableSimulationHausse: number;
        variableSimulationBaisse: number;
        idAgent: string;
        commentaireSimulationRevision: string;
    }
    interface IPhaseProduitS33A {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        constanteAppliqueTauxOmga: number;
        regleDetrTauxOmga: string;
    }
    interface INaturesDeGarantieParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeNatureGarantie: string;
        dateTraitement: string;
        dateDebutApplication: string;
        dateFinApplication: string;
    }
    interface IParamRevisionParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        numeroJeuxIndiceRevision: number;
        numeroPeriodeRevision: number;
        nombreJeuxParametreRevision: number;
        idLoiRevision: string;
        codeEcheanceReclameParRevision: number;
        evenementDeclarationDebutPeriode: string;
        codeUnitePeriodeDebutRevision: number;
        nombrePeriodePourDeterminationDebutPeriode: number;
        dureePeriodeRevision: number;
        uniteDureePeriodeRevision: number;
        nombreEcheanceAvenantReclameMontant: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        libelleJeuxRevision: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IProduit {
        libelle: string;
        famille?: ApiInstuctionCredit.Modele.Produit;
        sousFamille?: ApiInstuctionCredit.Modele.Produit;
    }
    class Produit implements IProduit {
        libelle: string;
        famille: ApiInstuctionCredit.Modele.Produit;
        sousFamille: ApiInstuctionCredit.Modele.Produit;
        /**
         * Construction d'un Produit
         * @param libelle: string
         * @param sousFamille: string - Facultatif. Est null pour une famille et une sous-famille
         * @param famille: string - Facultatif. Est null pour une famille
         */
        constructor(libelle: string, sousFamille?: ApiInstuctionCredit.Modele.Produit, famille?: ApiInstuctionCredit.Modele.Produit);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IFormulaireProjetTypeLogement {
        typeLogement: string;
        dateDebutValidite: number;
        dateFinValidite: number;
        dateCreation: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerPretsReaRequest {
        identifiantDossier: string;
        idwsReamenagement: string;
    }
    interface IListerDetailsPretsReaRequest {
        identifiantDossier: string;
        idwsReamenagement: string;
        tsListeIdwsCreditRea: Array<string>;
        dateRA: Date;
    }
    interface IAjoutePretReamenageableRequest {
        identifiantDossier: string;
        idwsReamenagement: string;
        dateRA: Date;
        listePretReamenageable: Array<IPretReamenagementMaj>;
    }
    interface IAjouterPretReamenageRequest {
        identifiantDossier: string;
        idReamenagement: string;
        codeBanque: string;
        idCreditGestion: string;
        pretReamenagementMAJ: IPretReamenagementMaj;
        infosRegroupementMAJ: IInfoRegroupementMaj;
    }
    interface IDefinirReamenagementRequest {
        identifiantDossier: string;
        identifiantProjet: string;
        reamenagementMAJ: ReamenagementMaj;
    }
    interface IPretReamenagement {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: string;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: string;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idReamenagement: string;
        idInformationCompRegr: string;
        idws: string;
        origine?: string;
        libellePeriodicite?: string;
        complement?: IInfoRegroupement;
        duree?: number;
    }
    class PretReamenagement implements IPretReamenagement {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: string;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: string;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idReamenagement: string;
        idInformationCompRegr: string;
        idws: string;
        origine: string;
        libellePeriodicite: string;
        complement: IInfoRegroupement;
        duree: number;
        constructor();
    }
    interface IPretReamenagementMaj {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: string;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: string;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
    }
    class PretReamenagementMaj implements IPretReamenagementMaj {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: string;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: string;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idws: string;
        constructor(pretReamenagement?: IPretReamenagement);
    }
    interface IInfoRegroupement {
        codeBanque: string;
        idDossierCommercialisation: string;
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: string;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: string;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        idPretReamenagement: string;
        idws: string;
    }
    class InfoRegroupement implements IInfoRegroupement {
        codeBanque: string;
        idDossierCommercialisation: string;
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: string;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: string;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        idPretReamenagement: string;
        idws: string;
        constructor();
    }
    interface IInfoRegroupementMaj {
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: string;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: string;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
    }
    class InfoRegroupementMaj {
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: string;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: string;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        idws: string;
        constructor(infoRegroupement?: Modele.IInfoRegroupement);
    }
    interface IReamenagement {
        typeReamenagement: number;
        usagePretTres: number;
        ancnEcheance: number;
        capitalRestantDu: number;
        valeurAchtObjetFinancier: number;
        dureResdPretRefn: number;
        dateAcqsObjetRefn: string;
        coutAcqsObjetRefn: number;
        idProjet: string;
        listeIdPretReamenagement: Array<string>;
        idws: string;
        sommeRemboursementAnticipe?: number;
        montantTotalDu?: number;
    }
    class ReamenagementMaj {
        typeReamenagement: number;
        usagePretTres: number;
        ancnEcheance: number;
        capitalRestantDu: number;
        valeurAchtObjetFinancier: number;
        dureResdPretRefn: number;
        dateAcqsObjetRefn: string;
        coutAcqsObjetRefn: number;
        idws: string;
        constructor(reamenagement?: IReamenagement);
    }
    class IDetailPret {
        idws: string;
        informationPret: Modele.IPretReamenagement;
        informationRegroupement: Modele.IInfoRegroupement;
        origine: string;
        constructor();
    }
    interface IResultatListerPretReamenage {
        listeAnomalieLecture: Array<IAnomalieLecture>;
        listePretReamenageLecture: Array<IPretReamenagement>;
    }
    interface IResultatDetailPret {
        listeAnomalieLecture: Array<IAnomalieLecture>;
        listePretReamenageableLecture: Array<IDetailPret>;
    }
    interface IRapportAjoutPretReamenageable {
        listePretReamenageableLecture: Modele.IPretReamenageable[];
        reamenagementLecture: Modele.IReamenagement;
    }
    interface IPretReamenageable {
        informationPret: Modele.IPretReamenagement;
        informationRegroupement: Modele.IInfoRegroupement;
    }
}

declare module ApiInstuctionCredit.Modele {
    class RechercherDossier {
        types: ApiInstuctionCredit.Modele.RechercherDossierStructure;
        dateDeTraitement: number;
        champsAgent: string;
        champsStructure: string;
        idAgentProprietaireDossier: string;
        premierElementStructure: string;
        deuxiemeElementStructure: string;
        troisiemeElementStructure: string;
        quatriemeElementStructure: string;
        cinquiemeElementStructure: string;
        sixiemeElementStructure: string;
        codeEtatDossier: string;
        codeTypeDestinataire: string;
        idDossier: string;
        nomRaisonSocialeEmprunt: string;
        referenceExterneDossier: string;
        idEntiteTitulaireClient: string;
        dateDebutPeriode: string;
        dateFinPeriode: string;
        dateDebutPeriode1: string;
        dateFinPeriode1: string;
        nomPres: string;
        dateDebutPeriodeSigneNotaire: string;
        dateFinPeriodeSigneNotaire: string;
        codeVisbInstruction: string;
        codeDevise: string;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeOrigineDemande: string;
        codeApplicationChargeDossier: string;
        codeImprParExpressionVersement: string;
        codeEtapeSimulation: string;
        idParentPrincipal: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        suiteDossier: string;
        /**
         * Construction de l'objet rechercher dossier
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    class RechercherDossierStructure {
        idCaisseEpargne: number;
        codeTypeDelmStructure: string;
        libelleTypeDelmStructure: string;
        codeIndiceDentProprietaire: number;
        codeIndiceStructureInstruction: number;
        rangNiveauStructure: number;
        codeMetierCreditEDS: number;
        /**
         * Construction de l'objet structure d'origine du dossier
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeTransaction {
        forceeControle: boolean;
        idws: string;
    }
    interface IEntreeValidationPiecesJustificatives extends IEntreeTransaction {
        /**
         * IdPlanFinancement
         */
        idPlanFinancement: string;
    }
    interface IRapportTransaction {
        operationReussie: boolean;
        listeAnomalie: Array<IAnomalieLecture>;
    }
    interface ISupprimerElementAvecControleRequest {
        identifiantDossier: string;
        entreeTransaction: IEntreeTransaction;
    }
}

declare module ApiInstuctionCredit.Modele {
    class TypeCharge {
        idCaisseEpargne: number;
        typeCharge: string;
        libelleCharge: string;
        codeSigneCharge: number;
        tauxPondereRessourceCharge: number;
        numeroOrdreClasse: number;
        codeUsageTypologieCharge: number;
        typeRessource: string;
        /**
         * Construction d'un type de revenu
         * @param libelle: string - Nom du type de revenu
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    class TypeRevenu {
        idCaisseEpargne: number;
        typeRessource: string;
        commissionRessource: string;
        codeSigneRessource: number;
        tauxPondereRessourceCharge: number;
        numeroOrdreClasse: number;
        codeUsageTypologieRessource: number;
        typeDeRessource: string;
        /**
         * Construction d'un type de revenu
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Outils {
    class OutilDate {
        static EMPTY_DATE: string;
        static EMPTY_DATETIME: string;
        static FORMAT_DATENEO: string;
        static FORMAT_AFFICHAGE: string;
        static parse(date: string): Date;
        static format(date: Date, template: string): string;
        /**
         * Convertit une date au format string Néo: aaaa-mm-jj.
         * Si la date est null, on renvoie 0001-01-01
         * @param date Date (type Date ou string au format Néo)
         */
        static dateToNeoString(date: Date | string): string;
        /**
         * Renvoie true si les 2 dates sont identiques.
         * A noter qu'une date null ou non définie est équivalente au format vide (0001-01-01).
         * @param date1 Date au format Néo (aaaa-mm-jj)
         * @param date2 Date au format Néo (aaaa-mm-jj)
         */
        static equalsDateNeo(date1: string, date2: string): boolean;
        private static minDateToNull(date);
        /**
         * Contrôle si la date est valorisée
         */
        static dateValorisee(date: string): boolean;
    }
}

declare module ApiInstuctionCredit.Outils {
    class Liste {
        /**
         * Looks through each value in the list, returning the first one that passes a truth test (predicate),
         * or an empty object if no value passes the test.
         * The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
         * @param list
         * @param predicate
         */
        static findOrEmpty<T>(list: T[], predicate: _.ListIterator<T, boolean>): T;
        static firstOrEmpty<T>(list: T[]): T;
        static isNullOrEmpty<T>(list: T[]): boolean;
    }
}

declare module ApiInstuctionCredit.Outils {
    class Objet {
        /**
         * Extract a list of value within an object or collection by property name
         * @param objet to look in
         * @param propertyName to extract
         */
        static pickDeep<T, R>(objet: T, propertyName: string): R[];
        private static pickRecursive(objet, attribut, retour);
        static nullToEmpty<T>(object: T): T;
        static getMontant(montant: number, codeDevise: string, tauxMontage: number): number;
        /**
         * Accède à l'objet passé en paramètre et retourne ce dernier
         * si tous ses parents sont différents de null
         * sinon retourne null
         * @param accessor
         */
        static safeGet<T>(accessor: () => T): T;
    }
}

declare module ApiInstuctionCredit.Outils {
    class Selectbox {
        /**
         * Find first ISelectbox matching code or empty Iselectbox if not found
         * @param listeItems
         * @param code
         */
        static selectboxfirstOrEmpty(listeItems: Modele.ISelectbox[], code: string): Modele.ISelectbox;
        /**
         * Find first ISelectboxNumber matching code or empty IselectboxNumber if not found
         * @param listeItems
         * @param code
         */
        static selectboxNumberfirstOrEmpty(listeItems: Modele.ISelectboxNumber[], code: number): Modele.ISelectboxNumber;
    }
}

declare module ApiInstuctionCredit.Service {
    class AnomalieService {
        private mwNotificationService;
        static $inject: string[];
        constructor(mwNotificationService: MyWay.UI.IMwNotificationService);
        presenceAnoBloquante(listeAnomalies: Array<Modele.IAnomalieLecture>): boolean;
        /**
         * Formate les anomalies pour les rendre utilisbales côté métier1154
         */
        formateAnomalies(listeControlesLecture: Array<Modele.IAnomalieLecture>): Array<Modele.AnomalieDossier>;
        /**
         * Filtre une liste d'anomalies en fonction des types de contrôles
         */
        getAnomaliesByTypes(listeControles: Array<Modele.AnomalieDossier>, listeTypeControles: Array<Enum.TypeControleDossier>): Array<Modele.AnomalieDossier>;
        /**
         * Affiche les anomalies en notification
         */
        afficheNotificationAnomalie(anomalies: Modele.IAnomalieLecture[]): void;
        /**
         * Affiche les anomalies en notification lors du calcul de crédit avec le crédit concerné
         */
        afficheNotificationAnomalieCalculCRIN(anomalies: Modele.IAnomalieLecture[], creditInterneLecture: Modele.ICreditInterne): void;
        /**
         * Concatene deux listes d'anomalies
         */
        concateneDeuxListes(anomalies: Modele.IAnomalieLecture[], anomaliesAjout: Modele.IAnomalieLecture[]): Modele.IAnomalieLecture[];
        /**
         * Récupération du paramètrage du bouton "Continuer"
         */
        getParametrageBoutonContinuer(anomalies: Modele.IAnomalieLecture[], piecoActif: boolean, autoriserForcagePIECO: boolean): Modele.IParametrageBoutonContinuer;
        /**
         * Vérification si présence d'un element bloquant
         */
        private verifBlocageElement(anomalies, autoriserForcagePIECO);
        /**
         * Indique si présence d'une anomalie bloquante
         */
        private presenceAnomalieBloquante(anomalies);
        /**
         * Indique si présence d'une anomalie bloquante et non forçable
         */
        private presenceAnomalieBloquanteNonForcable(anomalies, autoriserForcagePIECO);
        /**
         * Indique si présence d'une anomalie bloquante et forçable
         */
        private presenceAnomalieBloquanteForcable(anomalies, autoriserForcagePIECO);
        /**
         * Vérification si une anomalie est forçable Pieco
         */
        private anomalieForcablePieco(anomalie);
        /**
         * Permet de récupérer le libellé de complétude d'une garantie
         */
        getLibelleCompletudeGarantie(garantie: Modele.IGarantie, anomalies: Modele.AnomalieDossier[]): string;
        /**
         * Permet de récupérer les anomalies d'une garantie
         */
        getAnomaliesGarantie(idwsGarantie: string, anomalies: Modele.AnomalieDossier[]): Modele.AnomalieDossier[];
    }
}

declare module ApiInstuctionCredit.Service {
    class AssuranceService {
        private $q;
        private wsCatalogueFinancementService;
        private wsAssuranceService;
        static $inject: string[];
        private _listeConventionAssurance;
        constructor($q: ng.IQService, wsCatalogueFinancementService: Service.Data.CatalogueFinancementService, wsAssuranceService: ApiInstuctionCredit.Service.Data.AssuranceService);
        /**
         * Permet de récupérer le détail de plusieurs conventions d'assurance
         * Les données chargées sont stockées dans la session
         */
        listerConventionsAssuranceAvecDetail(dateTraitement: string, codeEtablissement: string, listeIdsConventionsSouhaitees: string[]): ng.IPromise<Modele.IConventionAssurance[]>;
        /**
         * Récupère les conventions d'assurance demandées en se basant sur les données chargées en session au préalable
         * @return IConventionAssurance[]
         */
        private filtrerConventionsAssurance(listeIdsConventions);
        /**
         * Récupère la liste des idws d'une assurance (assurance + couvertures + cotisations)
         */
        getAllIdwsAssurance(assurance: Modele.IAssuranceSchema): string[];
        /**
         * Méthode permettant d'impprimer la lettre de refus
         */
        editerLettreRefus(idDossier: string, idws: string, codeDocument: string): ng.IPromise<ApiInstuctionCredit.Modele.IResultatEditionREFALecture>;
        /**
         * Permet de récupérer le détail d'une convention d'assurance
         * La donnée chargée est stockée dans la session
         */
        chargerConventionAssurance(dateTraitement: string, codeEtablissement: string, idConventionSouhaitee: string): ng.IPromise<Modele.IConventionAssurance>;
    }
}

declare module ApiInstuctionCredit.Service {
    class BonificationService {
        private $q;
        private modaleService;
        private wsDossierService;
        private wsBonificationService;
        private wsCatalogueFinancementService;
        static $inject: string[];
        constructor($q: ng.IQService, modaleService: MyWay.UI.IModalService, wsDossierService: Service.Data.DossierService, wsBonificationService: Service.Data.BonificationService, wsCatalogueFinancementService: Service.Data.CatalogueFinancementService);
        openModaleBonificationCalcul(creditBonificationDescription: ApiInstuctionCredit.Modele.ICreditBonificationDescription): void;
        getPresenceCreditWithBonificationPossible(listeCreditInterne: Array<ApiInstuctionCredit.Modele.ICreditInterne>): boolean;
        /**
         * Génération de la bonification associé à sa convention
         */
        getCreditsInternesWithBonificationDescription(listeCreditsInternes: Array<Modele.ICreditInterne>, dossierSchema: Modele.IDossierSchema, listeCreditBonification: Array<Modele.ICreditBonification>, dateTraitement: string): ng.IPromise<Array<Modele.ICreditInterne>>;
        getReglesEligibilites(idProduitFinancier: string, idConventionBonification: string, dateTraitement: string): ng.IPromise<Array<Modele.IScBonifEligibilite>>;
        calculerBonifications(idDossier: string, creditsInternes: Array<ApiInstuctionCredit.Modele.ICreditInterneSchema>, idProjet: string): ng.IPromise<Modele.IProjet>;
        private getCreditWithBonificationExiste(dossierSchema, idPlanActif);
        private getCreditInterneWithBonificationDescription(creditInterne, dateTraitement, planSchema, listeCreditBonification);
    }
}

declare module ApiInstuctionCredit.Service {
    class CacheService {
        private $q;
        private cache;
        /**
         * 15 minutes
         */
        defaultTimeToLive: number;
        unlimitedTimeTolive: number;
        static $inject: string[];
        constructor($q: ng.IQService);
        /**
         * Set data To cache
         * @param key
         * @param object to store in cache
         * @param timeToLive in millisecond. -1 for infinite
         */
        private setToCache<T>(key, data, timeToLive);
        /**
         * Set promise result in cache
         * @param key
         * @param promise
         * @param timeToLive
         */
        private setToCacheFromPromise<T>(key, promise, timeToLive);
        /**
         *
         * @param key
         */
        private getFromCache<T>(key);
        /**
         * Try to resolve from cache. If not in cache, set the promise's result in cache and return the promise
         * @param key
         * @param promise
         * @param timeToLive
         */
        get<T>(key: string, promise: () => ng.IPromise<T>, timeToLive: number, fromCache?: boolean): ng.IPromise<T>;
        private isExpired(cacheData);
    }
}

declare module ApiInstuctionCredit.Service {
    class EditerDocumentService {
        private $q;
        private modalService;
        private wsPiecoService;
        private wsOffreService;
        private anomalieService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService, wsPiecoService: Service.Data.PiecoService, wsOffreService: Service.Data.OffreService, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        /**
         * Génére les flux d'édition pour une liste de document
         */
        getResultatEditionDocuments(listeInfoDocument: Array<Modele.IInfoDocument>, idDossier: string, idPlan: string, listeIdwsCredits: Array<string>, setLoader: (value: boolean) => void, codeSignature: ApiInstuctionCredit.Constantes.Dossier.CodeSignatureElectronique): ng.IPromise<Modele.IResultatEditionDocuments>;
        /**
         * Génére les flux d'édition pour un seul document
         */
        getListeDocumentDescriptionByDocument(idDossier: string, infoDocument: Modele.IInfoDocument, listeIdwsCredits: Array<string>, withSaisiesComplementaires: boolean, formatEditique: number, codeSignature: ApiInstuctionCredit.Constantes.Dossier.CodeSignatureElectronique): ng.IPromise<Array<Modele.IDocumentDescription>>;
        /**
         * Génére les flux d'édition pour un seul document de type offre
         */
        getResultatEditionOffreDescription(idDossier: string, infoDocument: Modele.IInfoDocument, withSaisiesComplementaires: boolean, modeEdition: Enum.Edition.Mode, formatEditique: number): ng.IPromise<Modele.IResultatEditionOffreDescription>;
        private editerOffrePret(idDossier, infoDocument, modeEdition, formatEditique);
        private popinAnomalieGestion(anomalies);
        /**
         * Génération de façon synchrone des flux de documents
         */
        private getFluxForDocumentsSynchrone(listeInfoDocument, idDossier, idPlan, listeIdwsCredits, indexDoc, resultatEditionDocuments, formatEditique, codeSignature);
        /**
         * Pour un document, génération des flux associés
         */
        private getListeFluxForDocument(infoDocument, idDossier, idElement, listeIdwsCredits, formatEditique, codeSignature);
        /**
         * Obtient les flux des documents associés à un type de document
         */
        private getFluxForDocument(idDossier, infoDocument, identifiant, paramsEditiques, formatEditique, codeSignature);
        /**
         * Gère l'appel si une saisie complémentaire est souhaitée
         */
        private setDocumentWithSaisiesComplementaires(idDossier, infoDocument, withSaisiesComplementaires);
        /**
         * Indique si pour ce document une saisie complémentaire existe
         */
        private getSaisieComplementaireByDocument(idDossier, infoDocument);
        /**
         * Vérifie si un des éléments doit être visible
         */
        private isBlocVisible(detailSaisie, controleSaisieComplementaireNecessaire);
        /**
         * Attribut saisieComplementaireNecessaire n'est pas toujours présent pour vérifier
         * S'il existe, il doti être pris en compte
         */
        private getAttributSaisieComplementaireNecessaireIsOk(saisieComplementaireNecessaire);
        /**
         * Ouvre les popins et saisie des informations
         */
        private setSaisieComplementaires(idDossier, listeInfoDocumentAvecSaisies, listeSaisieComplementaire, indexTraite, listeInfoDocumentValides);
        /**
         *  affiche la modale avec les inputs dynamiques
         */
        private popinSaisieComplementaire(idDossier, saisieComplementaireForDocument);
    }
}

declare module ApiInstuctionCredit.Service {
    class EmprunteurService {
        constructor();
        static personneEstEmprunteur(listeRoles: Array<string>): boolean;
        static personneEstGarant(listeRoles: Array<string>): boolean;
        static personneEstPayeur(listeRoles: Array<string>): boolean;
    }
}

declare module ApiInstuctionCredit.Service {
    class EpargneLogementService {
        static $inject: Array<string>;
        constructor();
        /**
         * Récupération du montant utilisé d'une tranche d'épargne logement
         */
        getMontantUtiliseTrancheEl(oITranche: Modele.ITrancheEL, dossierSchema: Modele.IDossierSchema): number;
    }
}

declare module ApiInstuctionCredit.Service {
    class ErreurService {
        private modalService;
        static $inject: Array<string>;
        constructor(modalService: MyWay.UI.IModalService);
        /**
         * Popin d'affichage des erreurs
         */
        popinErreur(erreur: Modele.IException): void;
        /**
         * Popin d'affichage des erreurs
         */
        popinErreurMyWay(erreur: MyWay.Services.Erreur): void;
    }
}

declare module ApiInstuctionCredit.Service {
    class FichierService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * généré le flux pour un fichier
         * @param fichier
         */
        lireLeFichier(fichier: File): ng.IPromise<any>;
        /**
         * Convertie un flux de données en document pour l'enregistrer sur le poste du conseiller
         * @param {string} fluxDonnees
         * @param {string} nomDocument
         */
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string, identifiantDossier: string): ng.IPromise<boolean>;
    }
}

declare module ApiInstuctionCredit.Service {
    class ImpressionService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Edition des documents
         */
        lancerImpression(listeDocs: Array<Modele.IDocumentDescription>): ng.IPromise<void>;
        /**
         * Génération des documents pour l'impression par lot
         */
        private getListeDocsImpression(listeDocs);
        /**
         * Génération d'un document pour l'impression par lot
         */
        private getDocumentImpressionLot(nomFichier, flux, ordreAffichage, nbExemplaires);
        /**
         *  Paramètres globaux de l'ActiveX d'impression pour une impression par lot
         */
        private getParametresActiveXGlobaux();
    }
}

declare module ApiInstuctionCredit.Service {
    import ApiModel = ApiInstuctionCredit.Modele;
    class ModalitesService {
        static getListeModeReglementFiltree(listeInitiale: Array<ApiModel.ITypeReglement>, estDeviseDossier: boolean, estMultiPayeur: boolean, codeDeviseDossier: string): Array<ApiModel.ITypeReglement>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IObjetPorteGarantie {
        objetPorteGarantieWrapper: GarantieCredit.Modele.IObjetPorteGarantieWrapper;
        contexte: GarantieCredit.Modele.IContexte;
    }
}
declare module ApiInstuctionCredit.Service {
    class ObjetPorteGarantieWrapperService {
        private $q;
        private wsCatalogueProjetService;
        private mwsfAdresseService;
        static $inject: Array<string>;
        objetPorteGarantieWrapper: GarantieCredit.Modele.IObjetPorteGarantieWrapper;
        contexte: GarantieCredit.Modele.IContexte;
        constructor($q: ng.IQService, wsCatalogueProjetService: ApiInstuctionCredit.Service.Data.CatalogueProjetService, mwsfAdresseService: myway.comAdresseDqe.AdresseService);
        getParamsDirectiveObjetPorteGarantie(garantieReelle: ApiInstuctionCredit.Modele.IGarantieReelle, elements: any[], bienPorteEnGarantie: ApiInstuctionCredit.Modele.IBienPorteEnGarantie, idDossier: string, codeEtablissement: string, codeAuthentiqueContrat: boolean, projetCodePays: string, dateTraitementYYYYMMDD: string): ng.IPromise<Modele.IObjetPorteGarantie>;
        /**
         * Initialisation de l'attribut typeObjetReglemente
         */
        private initTypeObjetReglemente(objetPorteGarantieWrapper, dateTraitementYYYYMMDD, codeEtablissement, elements);
        /**
         * Initialisation de l'attribut creditCouvertParGarantie
         */
        private initCreditCouvertParGarantie(garantieReelle, elements, bienPorteEnGarantie, objetPorteGarantieWrapper);
        /**
         * Initialisation de l'attribut objetGarantieGlobal
         */
        private initObjetGarantieGlobal(garantieReelle, elements, objetPorteGarantieWrapper, codeAuthentiqueContrat, codeEtablissement);
        /**
         * Initialisation de l'attribut DefinitionObjet
         */
        private initObjetPorteGarantie(garantieReelle, elements, bienPorteEnGarantie, objetPorteGarantieWrapper, dateTraitementYYYYMMDD, codeEtablissement);
        /**
         * Initialisation du type objet porté en garantie
         */
        private initTypeObjetPorteGarantie(garantieReelle, elements, bienPorteEnGarantie, objetPorteGarantieWrapper, adressesDqe);
        /**
         * Récupération de l'attribut DefinitionObjet
         */
        private getDefinitionObjet(garantieReelle, elements, bienPorteEnGarantie, adressesDqe);
        /**
         * Récupération de la première couverture de garantie
         */
        private getCouverture(garantieReelle, elements);
        /**
         * Récupération du crédit interne de la première couverture de garantie
         */
        private getCreditInterne(couverture, elements);
        /**
         * Récupération de l'emprunteur
         */
        /**
         * Récupération de l'emprunteur
         */
        /**
         * Récupération du libellé adresse du bien porté en garantie
         */
        private getLibelleAdresseBienPorteEnGarantie(bienPorteEnGarantie);
        /**
         * Récupération de la date au format YYYY-MM-DD
         */
        private getDateFormatYYYYMMDD(date);
        /**
         * Récupération du projet
         */
        getProjet(elements: any[]): ApiInstuctionCredit.Modele.IProjet;
    }
}

declare module ApiInstuctionCredit.Service {
    class OrigineApportService {
        private $q;
        private wsCatalogueOrigineApportService;
        private wsFinancementService;
        private wsDossierService;
        private cacheService;
        static $inject: string[];
        constructor($q: ng.IQService, wsCatalogueOrigineApportService: ApiInstuctionCredit.Service.Data.CatalogueOrigineApportService, wsFinancementService: ApiInstuctionCredit.Service.Data.FinancementService, wsDossierService: ApiInstuctionCredit.Service.Data.DossierService, cacheService: CacheService);
        getOrigineApport(codeEtablissement: string, idDossier: string, idPlan: string, idOrigineApports: string[], dateDeTraitement: string, fromCache?: boolean): ng.IPromise<Modele.IOrigineApport>;
        origineApportActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        saveOrigineApport(origineApport: Modele.IOrigineApport): ng.IPromise<any>;
        private getOrigineApportDetail(listeParamOrigin, listeOrigineApport);
        private listerParamOrigineApport(dateDeTraitement, codeEtablissement);
    }
}

declare module ApiInstuctionCredit.Service {
    class ParametrageService {
        private $q;
        private wsCatalogueCommunService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, wsCatalogueCommunService: Service.Data.CatalogueCommunService);
        /**
         * La fiche suiveuse est active si le dossier n'est plus en proposition et si la caisse est paramétré: CIFCAL
         */
        getAfficherFicheSuiveuse(sousEtatDossier: ApiInstuctionCredit.Enum.SousEtatDossier, dateTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
    }
}

declare module ApiInstuctionCredit.Service {
    import ApiModel = ApiInstuctionCredit.Modele;
    class PlanFinancementService {
        constructor();
        static getDureePhaseMax(plan: ApiModel.IPlanFinancementSchema): number;
        static getDureeCreditMax(plan: ApiModel.IPlanFinancementSchema): number;
        static getCoutCreditInterne(credit: ApiModel.ICreditInterne): number;
        /**
         * Récupération des idws nécessaires à la génération des propositions (utilisées dans le panier ou dans l'émission de documents)
         */
        static getIdwsForPropositions(listePlanSchema: Array<ApiModel.IPlanFinancementSchema>): Array<string>;
    }
}

declare module ApiInstuctionCredit.Service {
    import ApiModel = ApiInstuctionCredit.Modele;
    class PromotionImmobiliereService {
        /**
         * Vérifie le statut de la promostion immobiliere
         * Si le programme sélectionné est refusé, suspendu ou accordé avec un allotement défavorable alors : restriction
         * Si le programme sélectionné ne nécessite pas d’accord, ou, est accordé sans notion d’allotement, ou avec allotement favorable alors : Accord
         *       // valeurs indiceAlltDeps:
         *       // N => sans allotement
         *       // O => avec allotement
         *
         *      // valeurs sttCapitalisation:
         *       // 1 => Accord
         *       // 2 => Rejet
         *       // 3 => Ajournement
         *       // 4 => Suspension
         *       // 5 => NonStatue
         *       // 6 => SansObjet
         * @param promotionImmobiliere
         */
        estPromotionimmobiliereAccordee(promotionImmobiliere: ApiModel.IPromotionImmobiliereLecture): boolean;
    }
}

declare module ApiInstuctionCredit.Service {
    /**
     * Données de la synthèse utilisé à travers les différentes vues
     */
    class SyntheseService {
        static $inject: Array<string>;
        listeErreurs: Array<ApiInstuctionCredit.Modele.ErreurFormulaire>;
        afficherBlocErreur: boolean;
        etatAccordPrincipe: ApiInstuctionCredit.Enum.FeuTricolore;
        constructor();
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class AgentService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Permet de rechercher des agents
         * @param codeEtablissement : string
         * @param identifiantAgent : string
         * @param nomAgentDebutPlage : string
         * @return promise<[IAgent]>
         */
        recherche(codeEtablissement: string, identifiantAgent: string, nomAgentDebutPlage: string): ng.IPromise<Modele.IAgent[]>;
        /**
         * Permet de récupérer un agent par code agent
         * @param identifiant: string
         * @return promise<ICaracteristiqueAgent>
         */
        caracteristiqueAgent(codeEtablissement: string, identifiant: string): ng.IPromise<Modele.ICaracteristiqueAgent>;
        /**
         * Permet de rechercher des agents
         * @param nom : string
         * @return promise<[IAgent]>
         */
        rechercheAgent(nom: string, codeEtablissement: string): ng.IPromise<Modele.IAgent[]>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class AjoutSuiviPlanifieService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Pemret d'ajouter un suivi planifie.
         * @param identifiantDossier Identifiant dossier
         * @param identifiantCredit Identifiant credit
         * @param typeSuivantPlafond Type suivant plafond
         */
        postAjoutSuiviPlanifie(identifiantDossier: string, identifiantCredit: string, typeSuivantPlafond: string): ng.IPromise<Modele.SuivisPlanifies.ISuiviPlanifieLecture>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class AssuranceService {
        private wsService;
        static $inject: string[];
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Permet de récupérer les conventions d'assurances compatibles avec le produit
         * @param idDossier : string
         * @param listeIdentifiantProduit : string[]
         * @param ageMax : string
         * @return promise<IConventionAssurance>
         */
        listerScConvAss(idDossier: string, listeIdentifiantProduit: string[], ageMax: number, tsListeIdwsPersonne: string[]): ng.IPromise<Modele.IConventionAssurance[]>;
        /**
         * Permet de récupérer les conventions d'assurances compatibles avec le produit
         * @param identifiantDossier : string
         * @param listeIdwsCredit : string[]
         * @param listeIdwsPersonne : string[]
         * @return promise<IScConventionResume>
         */
        listerConventionsAssuranceCompatible(identifiantDossier: string, listeIdwsCredit: string[], listeIdwsPersonne: string[]): ng.IPromise<Modele.IScConventionResume[]>;
        /**
         * Permet d'ajouter une assurance
         * @param identifiantDossier : string
         * @param listeIdwsCreditCouvertureParAss : string[]
         * @param identifiantPersonne : string
         * @param identifiantConventionAssurance : string
         */
        ajouterAssAvcControl(identifiantDossier: string, listeIdwsCreditCouvertureParAss: string[], identifiantPersonne: string, identifiantConventionAssurance: string): ng.IPromise<Modele.IResultatAjouterAssuranceAvecControles>;
        /**
         * Permet de charger les refus d'assurance
         * @param identifiantDossier : string
         */
        chargerRefusAssExt(identifiantDossier: string): ng.IPromise<ApiInstuctionCredit.Modele.IRefusAssuranceExterneLecture[]>;
        /**
         * Permet d'ajouter les refus d'assurance
         * @param identifiantDossier : string
         */
        ajouterRefusAssExt(identifiantDossier: string, identifiantPersonne: string, identifiantPlanFinancement: string, refusAssurance: ApiInstuctionCredit.Modele.IRefusAssuranceExterneMaj): ng.IPromise<ApiInstuctionCredit.Modele.IRefusAssuranceExterneLecture>;
        /**
         * Permet de editer lettre refus
         * @param identifiantDossier : string
         * @param idws : string
         * @param codeDocument : string
         */
        editerDocumentFC050REF(idDossier: string, idws: string, codeDocument: string): ng.IPromise<ApiInstuctionCredit.Modele.IResultatEditionREFALecture>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class BonificationService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        ajouterCreditBonification(idDossier: string, idCredit: string, idConvention: string): ng.IPromise<Modele.ICreditBonification>;
        calculerBonification(idDossier: string, identifiantBonification: string): ng.IPromise<void>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class CalculService {
        private $q;
        private wsService;
        static $inject: string[];
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Permet de calculer le Reste à vivre, le taux d'endettement et l'échéance maxi
         */
        getCapaciteRemboursement(dateTraitement: string, listeRessourceCharge: Array<Modele.IEntreeRessourceCharge>, echeance: number, endettement: number): ng.IPromise<Modele.ICapaciteRemboursement>;
        /**
         * Permet de calculer les frais de notaire
         */
        getFraisNotaires(dateTraitement: string, montant: number, toc: string, tor: string, devise: string): ng.IPromise<number>;
        /**
         * Permet de faire une simulation de modulation
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {Modele.IEntreeCalculModulation} entreeCalculModulation
         * @returns Promise<Modele.IEntreeCalculModulation>
         */
        calculerModulationCredit(idDossier: string, idCredit: string, entreeCalculModulation: Modele.IEntreeCalculModulation): ng.IPromise<Modele.ISortieCalculModulation>;
        /**
         * Permet de faire une simulation de révision
         * @param {Modele.ICalculerRevisionRequest} calculerRevisionRequest
         * @returns Promise<Modele.IResultatCalculRevision>
         */
        calculerRevision(calculerRevisionRequest: Modele.ICalculerRevisionRequest): ng.IPromise<Modele.IResultatCalculRevision>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class ClientService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Rafraîchir emprunteur
         * @param identifiantDossier : string
         * @param supprRCEmprunteur : boolean
         */
        rafraichirEmprDoss(identifiantDossier: string, supprRCEmprunteur: boolean): ng.IPromise<Modele.IEmprunteur>;
        /**
         * Création d'une charge
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param charge : ChargePersonneMaj
         */
        addChargePersonne(idDossier: string, idEmprunteur: string, charge: Modele.ChargePersonneMaj): ng.IPromise<Modele.IChargePersonne>;
        /**
         * Permet de récupérer les entités titulaires en fonction d'une personne
         * @param codeEtablissement : string
         * @param identifiantTiers : string
         * @return promise<IEntiteTitulaire[]>
         */
        getEntitesTitulaires(codeEtablissement: string, identifiantTiers: string): ng.IPromise<Modele.IEntiteTitulaire[]>;
        /**
         * Permet de récupérer les informations de l'entite titulaire
         * @param codeEtablissement : string
         * @param identifiantEntiteTitulaire : string
         * @return promise<IInformationEntiteTitulaire>
         */
        getInformationsEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Modele.IInformationEntiteTitulaire>;
        /**
         * Permet d'ajouter ou de modifier un revenu fiscal
         * @param idDossier : string
         * @param revenuFiscal : RevenuFiscalPersonne
         */
        addRevenuFiscalPersonne(idDossier: string, montantRevnMeng: number): ng.IPromise<Modele.IRevenuFiscalPersonne>;
        /**
         * Permet d'ajouter ou de modifier un revenu
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param revenu : RevenuPersonneMaj
         */
        addRevenuPersonne(idDossier: string, idEmprunteur: string, revenu: Modele.RevenuPersonneMaj): ng.IPromise<Modele.IRevenuPersonne>;
        /**
         * Permet d'ajouter ou de modifier un compte
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param compte : ComptePersonneMaj
         */
        addComptePersonne(idDossier: string, idEmprunteur: string, compte: Modele.ComptePersonneMaj): ng.IPromise<Modele.IComptePersonne>;
        /**
         * Permet d'ajouter ou de modifier une epargne
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param epargne : EpargnePersonneMaj
         */
        addEpargnePersonne(idDossier: string, idEmprunteur: string, epargne: Modele.EpargnePersonneMaj): ng.IPromise<Modele.IEpargnePersonne>;
        /**
         * Permet de créer une liste de ressources
         */
        definirRessources(idDossier: string, idPersonneEmprunt: string, listeRessourceMAJ: Array<Modele.RevenuPersonneMaj>): ng.IPromise<Array<Modele.IRevenuPersonne>>;
        /**
         * Permet de créer une liste de charges
         */
        definirCharges(idDossier: string, idPersonneEmprunt: string, listeChargeMAJ: Array<Modele.ChargePersonneMaj>): ng.IPromise<Array<Modele.IChargePersonne>>;
        /**
         * Permet de récupérer les informations d'une personne via un identifiant
         */
        lirePersonne(codeEtablissement: string, idDossier: string, identifiantPersonne: string, numeroCarteBancaire: string, numeroInsee: string, typeRolePersonne: string, codeTypePersonne: string, idEntiteTitulaireClient: string, codeTypeMarche: string): ng.IPromise<Modele.IResultatGarant>;
        /**
         * Défintion de l'emprunteur
         * @param idDossier
         * @param idClientBancaire
         * @param rattachement
         */
        definirEmprunteurAvecControles(idDossier: string, idClientBancaire: string, rattachement: boolean, forcerControleSuppression: boolean, forcerControleAjout: boolean, forcerControleRattachement: boolean): ng.IPromise<Modele.IEmprunteur>;
        /**
         * Ajoute une personne avec son rôle et les contrôles en retour
         */
        ajouterPersAvecCtrl(idDossier: string, identifiantClasse: string, listePersonnes: Array<Modele.PersonneMaj>): ng.IPromise<Array<Modele.IPersonne>>;
        /**
         * Permet de récupérer les charges de type de crédit
         * @param codeEtablissement : string
         * @param identiteRelationEcoMenage : number
         * @return promise<IChargeRelation>
         */
        listeChargeRelation(codeEtablissement: string, identiteRelationEcoMenage: number): ng.IPromise<Modele.IChargeRelation[]>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class CnpService {
        private $q;
        private wsService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Récupération des collectivités CNP de la personne
         * @param idDossier
         * @param idPersonne
         * @param idPlan
         */
        listerCollectiviteCNP(idDossier: string, idPersonne: string, idPlan: string): ng.IPromise<Modele.IResultatCollectiviteCNP>;
        /**
         * Création d'un dossier pour la CNP
         * @param idDossier
         * @param idPersonne
         * @param idPlan
         * @param codeCnp
         */
        creerDossierCNP(idDossier: string, idPersonne: string, idPlan: string, codeCnp: string, forcerCreation: boolean): ng.IPromise<Modele.IResultatCreationDossierCNP>;
        /**
         * Récupération des informations de la CNP sur le dossier
         * @param idDossier
         * @param idPersonne
         * @param idPlan
         * @param codeCnp
         */
        lireDecisionCNP(idDossier: string, idPersonne: string, idPlan: string, codeCnp: string, forcerDecision: boolean): ng.IPromise<Modele.IResultatDecisionCNP>;
        recupererContexteCNP(identifiantDossierCNP: string, identifiantPersonne: string, identifiantPlanFinancement: string, codeCollectiviteCNP: string, forcerAction: boolean): ng.IPromise<Modele.IResultatContexteCnp>;
        recupererDocsCNP(identifiantDossierCNP: string, identifiantPersonne: string, identifiantPlanFinancement: string): ng.IPromise<Modele.IResultatDocumentsDossierCNP>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class ContratEpargneLogementService {
        private $q;
        private wsService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Permet d'ajouter un contrat Epargne Logement
         */
        ajouterContratEpargneLogement(idDossier: string, contratEpargneLogementMAJ: Modele.ContratEpargneLogementMaj): ng.IPromise<Modele.IContratEpargneLogement>;
        /**
         * Permet de calculer la somme des encours EL
         */
        calculerEnCoursEL(idDossier: string, idwsProjet: string, idProduit: string): ng.IPromise<Modele.IResultatCalculEnCoursEL>;
        /**
         * Permet de calculer la somme des encours EL
         * @param identifiantDossier: string
         * @returns Modele.IContratEpargneLogement[]
         */
        rapatrierContratEL(idDossier: string): ng.IPromise<Array<Modele.IContratEpargneLogement>>;
        /**
         * Permet de lister les droits acquis pour un PEL/CEL
         */
        listerDroitsAcquisEL(idDossier: string, idCredit: string, periodicite: string): ng.IPromise<Modele.IResultatCalculEL>;
        /**
         * Permet de lister les droits à prêt pour un PEL/CEL
         */
        listerDroitsAPretEL(idDossier: string, idCredit: string, periodicite: string): ng.IPromise<Array<Modele.IDroitAPretEL>>;
        /**
         * Permet de calculer le crédit EL
         */
        calculerCreditEL(identifiantDossier: string, idCredit: string, periodicite: string, duree: number, montant: number, estEcheance: boolean, estManuel: boolean): ng.IPromise<Modele.IResultatCalculEL>;
        /**
         * Permet de retenir le crédit EL dans la propostion
         */
        retenirPropositionEL(identifiantDossier: string, idCredit: string, periodicite: string, duree: number, montantPret: number, montantEcheance: number, tauxPret: number, estEcheance: boolean, estManuel: boolean): ng.IPromise<void>;
        /**
         * Permet de retenir le crédit EL dans la propostion
         */
        editerDocumentEL(identifiantDossier: string, idCredit: string, params: Modele.IParamsImpressionEL): ng.IPromise<any>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class DossierNumeriqueService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        miseAJourDossierNumerique(identifiantDossier: string): ng.IPromise<void>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class DossierService {
        private $http;
        private wsService;
        private anomalieService;
        static $inject: Array<string>;
        constructor($http: ng.IHttpService, wsService: ApiInstuctionCredit.Service.Data.WsService, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        /**
         * Création d'un projet
         */
        creerProjet(dateTraitement: string, toc: string, tor: string, canalDeCreation: string, codeDevise: string, idClientBancaire?: string, identifiantPourLeCompteDe?: string): ng.IPromise<Modele.IDossierSchema>;
        /**
         * Permet de récupérer le contenu du dossier sélectionné
         * @param identifiantDossier : string
         * @return promise<DossierOuvert>
         */
        getDossierComplet(identifiantDossier: string): ng.IPromise<Modele.IDossierComplet>;
        /**
         * Permet d'accepter l'import web
         * @param identifiantDossier : string
         * @param dossierOuvert : boolean
         * @return promise<IRetourTranfererDossier>
         */
        getAccepterImportWeb(identifiantDossier: string, dossierOuvert: boolean): ng.IPromise<Modele.IRetourTranfererDossier>;
        /**
         * Permet de refuser l'import web
         * @param identifiantDossier : string
         * @param dossierOuvert : boolean
         * @return promise<IRetourAnnulationTranfertDossier>
         */
        getRefuserImportWeb(identifiantDossier: string, dossierOuvert: boolean): ng.IPromise<Modele.IRetourAnnulationTranfertDossier>;
        /**
         * Permet de récupérer le schema complet d'un dossier
         * @param identifiantDossier : string
         * @return promise<IDossierSchema>
         */
        getDossierSchema(identifiantDossier: string, dossierFerme?: boolean): ng.IPromise<Modele.IDossierSchema>;
        /**
         * Permet de mettre à jour un élément
         */
        majElement(identifiantClasse: string, identifiantDossier: string, element: Object): ng.IPromise<void>;
        /**
         * Permet de mettre à jour un ensemble d'éléments
         * @param identifiantClasses
         * @param idDossier
         * @param listElements
         */
        majElements(identifiantClasses: string, idDossier: string, listElements: Array<Object>): ng.IPromise<void>;
        /**
         * Récupération d'un ensemble d'objets
         * @param: identifiantDossier
         * @param: listeIdws
         */
        lireElements(identifiantDossier: string, listeIdws: Array<string>): ng.IPromise<any[]>;
        /**
         * Ferme le dossier en le sauvegardant
         */
        fermerDossier(identifiantDossier: string, sauvegarde: boolean): ng.IPromise<void>;
        /**
         * Supprimer d'un élément
         * @param identifiantDossier : string
         * @param identifiantElement : string
         */
        supprimerElement(identifiantDossier: string, identifiantElement: string): ng.IPromise<void>;
        /**
         * Supprimer d'un élément avec controle
         * @param identifiantDossier : string
         * @param identifiantElement : string
         * @param forceeControle : boolean
         */
        supprimerElementAvecControle(identifiantDossier: string, identifiantElement: string, forceeControle: boolean): ng.IPromise<Modele.IRapportTransaction>;
        /**
         * Suppression d'une liste d'éléments
         */
        supprimerListeElements(identifiantDossier: string, listeIdws: Array<string>): ng.IPromise<void>;
        /**
         * Enregistrement du dossier en central
         * @param idDossier : string
         */
        enregistrerDossier(idDossier: string): ng.IPromise<void>;
        /**
         * Calcul de l'égilibilité
         */
        calculerEligibilite(idDossier: string): ng.IPromise<Modele.IResultatEligibilite>;
        /**
         * Permet de retourner l'endettement d'un client
         */
        calculerEndettement(idDossier: string, surProposition: boolean, proposition?: string): ng.IPromise<Modele.IResultatCalculEndettement>;
        /**
         * Transfert le dossier dans neo
         */
        transfererDossierDansNeo(idDossier: string, visibleNEO: boolean): ng.IPromise<any>;
        /**
         * Récupération des points de contrôle sur le dossier traité actuellement
         * @param identifiantDossier
         */
        controlerDossier(identifiantDossier: string): ng.IPromise<Array<Modele.AnomalieDossier>>;
        /**
         * Récupération des points de contrôle de complétude sur le dossier traité actuellement
         * @param identifiantDossier
         */
        controlerCompletude(identifiantDossier: string): ng.IPromise<Array<Modele.AnomalieDossier>>;
        /**
         * Récupération des points de contrôle de complétude sur les garanties et assurances du dossier
         * @param identifiantDossier
         */
        controlerCompletudeGarantieAssurance(identifiantDossier: string): ng.IPromise<Array<Modele.AnomalieDossier>>;
        /**
         * Permet de contrôler le dossier pour accéder à l'étape décision
         */
        controlerDecision(idDossier: string, dateAccordPreteur: string, forcerControleAvtAccessoirePret: boolean, forcerControleBale2: boolean, forcerControleReglementaire: boolean): ng.IPromise<Modele.IRetourControleDecision>;
        /**
         * Permet de passer un import à sans suite
         * @param identifiantDossier : string
         * @param codeEvenement : string
         * @param dateEvenement : string
         * @return promise<Object>
         */
        passerDossierSsSuite(identifiantDossier: string, codeEvenement: string, dateEvenement: string): ng.IPromise<Object>;
        listerDossier(dateDeTraitement: string, codeApplication: number, criteresDeRecherche: any, nombreMaximumResultat: number): ng.IPromise<Modele.IDossierResume[]>;
        /**
         *
         * @param versWsdl
         * @param dateDeTraitement
         * @param applicationCharge
         * @param criteresDeRecherche
         * @param nombreMaximumResultat
         */
        rechercherDossier(dateDeTraitement: string, applicationCharge: number, criteresDeRecherche: Modele.ICriteresRechercheDossier, nombreMaximumResultat: number): ng.IPromise<Modele.IDossierResume[]>;
        /**
         * Permet de récupérer le contenu du dossier sélectionné
         */
        ouvrirDossier(identifiantDossier: string, date: string, actionSurDossier: number): ng.IPromise<Modele.IDossierSchema>;
        /**
         * Permet de récupérer la SAG du dossier
         */
        estEligibleSignatureElectronique(idDossier: string): ng.IPromise<Modele.IResultatEligibiliteSignatureElectronique>;
        /**
         * Permet de récupérer la SAG du dossier avec la nouvelle ressource
         */
        estEligibleSignatureElectroniqueGen(idDossier: string, codeSignature: number): ng.IPromise<Modele.IResultatEligibiliteSignatureElectronique>;
        /**
         * Permet de lire l'acte siganture numerique
         */
        lireActeSignatureGenerique(idDossier: string, codeSignature: number): ng.IPromise<Modele.IResultatOffreSignatureElectronique>;
        /**
         * Permet de valider l'acte siganture numerique
         */
        validerActeSignatureGenerique(idDossier: string, codeSignature: number): ng.IPromise<Modele.IResultatOffreSignatureElectronique>;
        /**
         * Permet d'annuler l'acte siganture numerique
         */
        annulerActeSignatureGenerique(idDossier: string, codeSignature: number, motifAnnulation: string): ng.IPromise<Modele.IResultatOffreSignatureElectronique>;
        /**
         * Permet de transférer un import dans mycredimmo
         * @param identifiantDossier : string
         * @return promise<Object>
         */
        transfererMyCredimmo(identifiantDossier: string): ng.IPromise<Object>;
        /**
         * Permet de copier un dossier qui est passé en sans suite
         * @param {string} dateDeTraitement
         * @param {string} identifiantDossierCopr
         * @returns promise<IDossierSchema>
         */
        copierDossier(dateDeTraitement: string, identifiantDossierCopr: string): ng.IPromise<ApiInstuctionCredit.Modele.IDossierSchema>;
        /**
         * Permet de récupérer objet DossierMRHLecture
         * @param {string} identifiantDossier
         * @return promise<IDossierMRHLecture>
         */
        definirDossierMRH(identifiantDossier: string): ng.IPromise<Modele.IDossierMRHLecture>;
        /**
         * Permet de laisser une note sur un dossier
         * @param definirBlocNotesRequest
         * @returns promise<IBlocNotesLecture>
         */
        definirBlocNotes(definirBlocNotesRequest: Modele.IDefinirBlocNotesRequest): ng.IPromise<Modele.IBlocNotesLecture>;
        /**
         *
         * @param identifiantDossier
         * @returns promise<Modele.IBlocNotesLecture>
         */
        ouvrirBlocNotes(identifiantDossier: string): ng.IPromise<Modele.IBlocNotesLecture>;
        /**
         *
         * @param identifiantDossier
         * @param identifiantAgentTransfert
         * @returns promise<void>
         */
        transfererProprieteDossier(identifiantDossier: string, identifiantAgentTransfert: string): ng.IPromise<void>;
        prorogationDossier(dossierResume: Modele.IDossierResume, delaiSaisi: string, forcerProrogation: boolean): ng.IPromise<Modele.IRetourProrogationDossier>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class FinancementService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Permet de récupérer la liste des ids des produits autorisés pour le projet
         */
        listerIdsProduitsAutorises(idDossier: string, identifiantProjet: string, indiceProduitLissage: boolean, optim: boolean, codeDevise: string): ng.IPromise<string[]>;
        /**
         * Permet de récupérer la liste des ids des produits autorisés pour le projet
         */
        listerGammesLissageAutorisees(identifiantDossier: string, identifiantProjet: string, codeDevise: string): ng.IPromise<Array<Modele.IGammeLissage>>;
        /**
         * Permet de récupérer la liste des produits autorisés pour le projet
         */
        listerProdEtFamAuto(idDossier: string, idProjet: string, idPlan: string, codeDevise: string, optim: boolean): ng.IPromise<Modele.IFamillesProduits[]>;
        /**
         * Permet d'ajouter un crédit externe
         * @param idDossier : string
         * @param idPlan : string
         * @param idProduit : string
         * @param montant : number
         */
        addCreditExterne(idDossier: string, idPlan: string, creditExterne: Modele.CreditExterneMaj): ng.IPromise<Modele.ICreditExterne>;
        /**
         * Permet de calculer une proposition en mode auto (Pas en cas de calcul d'enveloppe) et en conservant les assurances
         */
        calculOptimisationAvancee(idDossier: string, idPlan: string, montantEcheanceMaximum: number, tauxEndtMaximum: number, entreeOptimisationAvancee: Modele.EntreeOptimisationAvancee): ng.IPromise<Modele.IResultatOptimisation>;
        /**
         * Permet de retenir un plan de financement Optimisé
         * @param idDossier : string
         * @param idPlanOptimise : string
         */
        retenirPlanOptimise(idDossier: string, idPlanOptimise: string): ng.IPromise<void>;
        /**
         * Permet de passer à l'étape du montage
         * @param idDossier
         * @param idPlan
         */
        validerAccordClient(idDossier: string, idPlan: string): ng.IPromise<void>;
        /**
         * Permet de consulter le dossier smac
         * @return promise<IDossierSmac>
         */
        consulterDossierSmac(idDossier: string, numeroPlanFinanacement: string): ng.IPromise<Modele.IDossierSmac>;
        /**
         * Permet de synchroniser avec smac
         */
        synchroniserAvecSmac(identifiantDossier: string, identifiantPlanFinancement: string, miseAJourDossierSMAC: boolean, miseAJourDossierNEO: boolean, uIDSmac: string): ng.IPromise<Array<Modele.IAnomalieLecture>>;
        /**
         * Permet de lire la notation Bale II
         * @return promise<IResultatBaleII>
         */
        lireBaleII(idDossier: string, idPersonneSI: string): ng.IPromise<Modele.IResultatBaleII>;
        /**
         * Permet d'ajouter un plan de financement
         * @param idDossier : string
         * @param idProjet : string
         * @param planFinancement : Modele.planFinancementMaj
         */
        ajouterPlanFinancement(idDossier: string, idProjet: string, planFinancement: Modele.PlanFinancementMaj): ng.IPromise<Modele.IPlanFinancementDetail>;
        /**
         * Permet de calculer le crédit (mensualités, frais, ...)
         */
        calculerCreditInterne(identifiantDossier: string, idwsCredit: string, financeRAF: boolean): ng.IPromise<Modele.IResultatCalculCreditInterne>;
        /**
         * Permet de calculer la caractèritiques manquante du crédit
         */
        calculerCaracteristiqueCredit(capital?: number, echeance?: number, taux?: number, typeTaux?: number, nombrePeriode?: number, periodicite?: number): ng.IPromise<Modele.IResultatCalculSimple>;
        /**
         * Permet d'ajouter, mettre à jour ou supprimer des paliers en lui fournissant la liste des paliers du dossier
         * @param {string} identifiantDossier
         * @param {string} idPlanFinancier
         * @param {Array<Modele.PalierContraintMaj>} listePaliers
         */
        definirPaliersContraints(identifiantDossier: string, idPlanFinancier: string, listePaliers: Array<Modele.PalierContraintMaj>): ng.IPromise<Array<Modele.IPalierContraint>>;
        /**
         * Permet d'ajouter une phase de crédit interne
         * @param identifiantDossier : string
         * @param idwsCredit : string
         * @param codeIndiceTypePhase : number
         */
        definirPhase(identifiantDossier: string, idwsCredit: string, codeIndiceTypePhase: number): ng.IPromise<Modele.ICreditPhase>;
        /**
         * Permet de calculer h'ypothèque de capitalisation
         * @param identifiantDossier : string
         * @param idwsCredit : string
         * @return promise<number>
         */
        calculerHypotheseCap(identifiantDossier: string, idwsCredit: string): ng.IPromise<number>;
        /**
         * Ajoute une phase au crédit
         * @param {Modele.AjouterPhaseCreditExistant} ajoutPhase
         */
        ajouterPhaseCreditExistant(ajoutPhase: Modele.AjouterPhaseCreditExistant): ng.IPromise<Modele.IResultatAjoutPhaseCreditExistant>;
        /**
         * Ajoute un crédit
         */
        ajouterCreditInterne(idDossier: string, idPlan: string, idProduit: string, montant: number, initMontant: boolean, enOptim: boolean, tauxMontage?: number): ng.IPromise<Modele.ICreditInterne>;
        definirOrigineApport(idDossier: string, identifiantPlanRet: string, listeOrigineApport: Modele.IOrigineApportMaj[]): ng.IPromise<Modele.IOrigineApportLecture[]>;
        definirRemiseTaux(idDossier: string, idPlan: string, idCredit: string, typeRemise: number, appMarge: boolean): ng.IPromise<boolean>;
        dupliquerPlanFinancement(idDossier: string, idPlan: string): ng.IPromise<ApiInstuctionCredit.Modele.IPlanFinancementDetail>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class FraisAccessoiresService {
        private wsService;
        static $inject: string[];
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Mets à jour un accessoire lié pour les frais
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {Modele.AccessoireLieMaj} accessoire
         * @param {number} montant
         * @param {number} taux
         * @param {number} nbPaiment
         * @param {Array<string>} listeIdsPhase
         */
        miseAJourAccessoireLieProd(idDossier: string, idCredit: string, accessoire: Modele.AccessoireLieMaj, montant: number, taux: number, nbPaiment: number, listeIdsPhase: Array<string>): ng.IPromise<number>;
        /**
         * Mets à jour un accessoire complémentaire pour les frais
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {Modele.AccessoireLieMaj} accessoire
         * @param {number} montant
         * @param {number} taux
         * @param {number} nbPaiment
         * @param {Array<string>} listeIdsPhase
         */
        miseAJourAccessComp(idDossier: string, idCredit: string, accessoire: Modele.AccessoireLieMaj, montant: number, taux: number, nbPaiment: number, listeIdsPhase: Array<string>): ng.IPromise<number>;
        /**
         * Ajoute au crédit un accesooire lié facultatif
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {string} codeTypeAccessoire
         */
        ajouterAccessoireLieProduit(idDossier: string, idCredit: string, codeTypeAccessoire: string): ng.IPromise<Modele.IAccessoireLieProduit>;
        /**
         * Ajoute au crédit un accesooire complémentaire
         * @param {string} idDossier
         * @param {string} idCredit
         * @param {string} codeTypeAccessoire
         * @param {string} codeSousTypeAccessoire
         */
        ajouterAccessoireComp(idDossier: string, idCredit: string, codeTypeAccessoire: string, codeSousTypeAccessoire: string): ng.IPromise<Modele.IAccessoireComplementaire>;
        /**
         * Ajoute un tiers à l'accessoire complémentaire
         * @param {string} idDossier
         * @param {string} idAccessoire
         * @param {string} identifiantTiers
         * @param {string} typeRolePersonne
         */
        ajouterAccCompTier(idDossier: string, idAccessoire: string, identifiantTiers: string, typeRolePersonne: string): ng.IPromise<Modele.IAccessoireComplementaire>;
        /**
         * Supprime le tiers affecté
         * @param {string} idDossier
         * @param {string} idAccessoire
         */
        supprimerTiersAccCmp(idDossier: string, idAccessoire: string): ng.IPromise<Modele.IAccessoireComplementaire>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class GarantieService {
        private $q;
        private wsService;
        static $inject: string[];
        private _listeConventionGarantie;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Permet d'ajouter une garantie
         * @param idDossier : string
         * @param listeIdentifiantCredCouv : string[]
         * @param natureGarantie : string
         * @param idGarant : string
         */
        ajouterGarantie(idDossier: string, listeIdentifiantCredCouv: string[], natureGarantie: string, idGarant: string): ng.IPromise<Modele.IGarantieSchema>;
        /**
         * Permet d'ajouter une garantie conventionnée
         * @param idDossier : string
         * @param listeIdentifiantCredCouv : string[]
         * @param idConventionGarantie : string
         */
        ajouterGarantiePersoConv(idDossier: string, listeIdentifiantCredCouv: string[], idConventionGarantie: string): ng.IPromise<Modele.IGarantieSchema>;
        /**
         * Permet d'ajouter une garantie
         * @param idDossier : string
         * @param listeIdentifiantCreditCouverture : string[]
         * @param natureGarantie : string
         * @param idGarant : string
         * @param forcerAjout: boolean
         */
        ajouterGarAvecCtrl(idDossier: string, listeIdentifiantCreditCouverture: string[], natureGarantie: string, idGarant: string, forcerAjout: boolean): ng.IPromise<Modele.IResultatAjouterGarantieAvecControles>;
        /**
         * Permet d'ajouter une garantie conventionnée
         * @param idDossier : string
         * @param listeIdwsCreditCouvertureParGarantie : string[]
         * @param identifiantConventionGarantie : string
         * @param forcerAjout: boolean
         */
        ajouterGarPersConvCt(idDossier: string, listeIdwsCreditCouvertureParGarantie: string[], identifiantConventionGarantie: string, forcerAjout: boolean): ng.IPromise<Modele.IResultatAjouterGarantieAvecControles>;
        /**
         * Permet de récupérer les conventions de garantie compatibles
         * @param identifiantDossier : string
         * @param listeIdwsCredit : string
         * @param cdfcod : string
         * @param cdfcng : string
         * @param libelleLong : string
         * @param topGarantie : string
         * @return promise<IConventionGarantie[]>
         */
        listerConventionsGarantieParCredit(identifiantDossier: string, listeIdwsCredit: Array<string>, cdfcod: string, cdfcng: string, libelleLong: string, topGarantie: boolean): ng.IPromise<Array<Modele.IScConventionGarantie>>;
        /**
         * Permet de récupérer les natures garantie les plus utilisées
         */
        listerInformationGarantie(idDossier: string, listeIdwsCredit: string[], conseille: boolean): ng.IPromise<Array<Modele.IInformationGarantie>>;
        /**
         * Permet de récupérer montant des frais de garantie hypotheque ou privilege
         * @return promise<number>
         */
        calculerFraisHypotheque(identifiantDossier: string, idwsGarantieReelle: string): ng.IPromise<Modele.IResultatCalculFraisHypotheque>;
        /**
         * Permet de définir un bien porté en garantie
         */
        definirBienPorteGar(identifiantDossier: string, idWsGarantie: string, typeObjetCommercialisation: string): ng.IPromise<Modele.IBienPorteEnGarantie>;
        /**
         * Permet de d'envoyer SACCEF
         * @param identifiantDossier : string
         * @param idwsPlan : string
         * @return promise<string[]>
         */
        envoyerSACCEF(identifiantDossier: string, idwsPlan: string): ng.IPromise<string[]>;
        /**
         * Permet de contrôler le dossier avant l'appel à la CEGC
         * @param identifiantDossier : string
         */
        ctrlAvantAppelCegc(identifiantDossier: string): ng.IPromise<Modele.IAnomalieLecture[]>;
        /**
         * Permet de charger la convention de garantie
         * @param dateDeTraitement : string
         * @param identifiantConvention : string
         * @param codeEtablissement : string
         * @return promise<IScConventionGarantie>
         */
        chargerConventionGarantie(dateDeTraitement: string, identifiantConvention: string, codeEtablissement: string): ng.IPromise<Modele.IScConventionGarantie>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class GarantieVersementAttenduService {
        private wsService;
        private dossierService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService, dossierService: ApiInstuctionCredit.Service.Data.DossierService);
        ajouterVersementAttendu(idDossier: string, idContratAssurance: string, versement: GarantieCredit.DTO.ObjetPorteGarantie.IVersementAttendu): ng.IPromise<void>;
        modifierVersementAttendu(idDossier: string, versement: GarantieCredit.DTO.ObjetPorteGarantie.IVersementAttendu): ng.IPromise<void>;
        supprimerVersementAttendu(idDossier: string, identifiantElement: string): ng.IPromise<void>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class ListerClausesSuiviService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getListerClausesSuivi(codeEtablissement: string, creditOptimise: boolean, dateTraitement: string, identifiantClause?: string, criteresAcces?: Modele.ListerClausesSuivi.IScCriteresAcces): ng.IPromise<Modele.ListerClausesSuivi.IScClausesSuivi[]>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class ListerSuivisPlanifiesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        postListerSuivisPlanifies(codeFamilleProduit: string, dateDeTraitement: string, numeroRelationProduit: string, criteresAccess: Modele.SuivisPlanifies.IScCriteresAcces): ng.IPromise<Modele.SuivisPlanifies.IScSuivisPlanifies[]>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class MandatService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        getListeMandats(idDossier: string, idPlan: string): ng.IPromise<Array<Modele.IMandat>>;
        ajouterMandat(idDossier: string, idPayeur: string, bicIban: string, modeReglement: string): ng.IPromise<Modele.IMandat>;
        /**
         * Suppression d'un mandat
         */
        annulerMandatPayeur(idDossier: string, idPayeur: string): ng.IPromise<void>;
        /**
         * Suppression du mandat de secours
         */
        annulerMandatSecours(idDossier: string): ng.IPromise<void>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class MontageService {
        private wsService;
        private anomalieService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        /**
         * Ajoute un payeur pour un crédit
         * @param idDossier
         * @param idCredit
         * @param idPersonne
         * @param payeurMaj
         */
        ajouterPayeur(idDossier: string, idCredit: string, idPersonne: string, payeurMaj: Modele.IPayeurMaj): ng.IPromise<Modele.IPayeur>;
        /**
         * Définit le rédacteur d'acte pour le dossier
         * @param idDossier
         * @param redacteurActeMaj
         */
        definirRedacteurActe(idDossier: string, redacteurActeMaj: Modele.IRedacteurActeMaj): ng.IPromise<Modele.IRedacteurActe>;
        /**
         * Enregistre un nouvel avis
         * @param idDossier
         * @param avisMaj
         */
        ajouterAvis(idDossier: string, avisMaj: Modele.AvisMaj, dossierFerme?: boolean): ng.IPromise<Modele.IAvis>;
        /**
         * Enregistre un nouvel avis
         * @param idDossier
         * @param avisMaj
         * @returns ng.IPromise<Modele.IAvisLecture>
         */
        postAjouterAvis(idDossier: string, avisMaj: Modele.IAvisMaj, dossierFerme?: boolean): ng.IPromise<Modele.IAvisLecture>;
        /**
         * Refus d'un accessoire
         */
        refuserAccessoire(idDossier: string, idAccessoire: string, dateRefus: string): ng.IPromise<void>;
        /**
         * Accord d'un accessoire
         */
        accorderAccessoire(idDossier: string, idAccessoire: string, dateAccord: string, reference: string): ng.IPromise<Modele.AnomalieDossier[]>;
        /**
         * Liste des personnes recherchés
         * @param idDossier
         * @param nom
         * @param prenom
         * @param dateNaissance
         * @param numeroCompte
         * @param numeroCarteBancaire
         * @param idPersonne
         * @param rolePersonne
         * @param typePersonne
         */
        listerPersonnes(idDossier: string, nom: string, dateNaissance: string, prenom: string, numeroCompte: string, numeroCarteBancaire: string, idPersonne: string, rolePersonne: string, typePersonne: number, numeroSiren: string): ng.IPromise<Modele.IPersonne>;
        /**
         * Récupération des informations suite  appel système délégation
         * @param identifiantDossier
         * @param identifiantAgentTransfert
         * @param continu
         * @param reponse
         */
        executerCalcDelegDec(identifiantDossier: string, identifiantAgentTransfert: string, continu: boolean, reponse: boolean): ng.IPromise<Modele.IResultatCalculDelegation>;
        /**
         * Récupération des informations suite  appel système délégation
         * @param identifiantDossier
         * @param idPlnFint
         */
        executerBale2(identifiantDossier: string, idPlnFint: string): ng.IPromise<Modele.IResultatBale2>;
        /**
         * Récupération du résultat de l'analyse de risque (ressource CFF)
         * @param  identifiantDossier
         * @param idPlnFint
         * @param analyseSimplifiee
         * @param modePrescore
         * @param  sauvegarderResultatADR
         * @returns ng.IPromise<Modele.IResultatADR>
         */
        executerAnalyseDeRisque(identifiantDossier: string, idPlnFint: string, analyseSimplifiee: boolean, modePrescore: boolean, sauvegarderResultatADR: boolean): ng.IPromise<Modele.IResultatADR>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class OffreIndustrialiseeService {
        private wsService;
        private anomalieService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        lireOffrePretIndustrialisee(idDossier: string): ng.IPromise<Modele.IOffrePretIndustrialisee>;
        creerDossierEdition(idDossier: string, listeIdwsDocOffreIndus: Array<string>): ng.IPromise<Modele.IResultatOffrePretIndustrialisee>;
        ajouterDocumentsDansDossierEdition(idDossier: string, listeDocOffreIndus: Array<Modele.IDocumentOffreIndustrialiseeMaj>): ng.IPromise<Array<Modele.IResultatOffrePretIndustrialisee>>;
        annulerDossierEdition(idDossier: string): ng.IPromise<Modele.IResultatOffrePretIndustrialisee>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class OffreService {
        private wsService;
        private anomalieService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        /**
         * L’accord prêteur par l’instructeur permet de passer le dossier de l'état de Demande de crédit à celui d’Offre en attente d’édition
         * La décision du prêteur peut être annulée tant que la date de remise à l'emprunteur n'a pas été saisie.
         * Une fois cette date saisie, l'annulation de la décision n'est plus possible.
         */
        validerAccordPreteur(idDossier: string, dateAccord: string, libelleAvis: string): ng.IPromise<void>;
        /**
         * L’accord prêteur par l’instructeur permet de passer le dossier de l'état de Demande de crédit à celui d’Offre en attente d’édition
         * La décision du prêteur peut être annulée tant que la date de remise à l'emprunteur n'a pas été saisie.
         * Une fois cette date saisie, l'annulation de la décision n'est plus possible.
         */
        validationAccordPreteur(idDossier: string, dateAccord: string, libelleAvis: string, forcerControleAvtAccessoirePret: boolean, forcerControleBale2: boolean, forcerControleReglementaire: boolean): ng.IPromise<Modele.IRetourPasserAccordPreteur>;
        /**
         * L’accord prêteur par l’instructeur permet de passer le dossier de l'état de Demande de crédit à celui d’Offre en attente d’édition
         * La décision du prêteur peut être annulée tant que la date de remise à l'emprunteur n'a pas été saisie.
         * Une fois cette date saisie, l'annulation de la décision n'est plus possible.
         */
        passerAccordPreteur(idDossier: string, dateAccord: string, libelleAvis: string): ng.IPromise<Modele.AnomalieDossier[]>;
        /**
         * Vérification si l'EDS selectionnée pour décision existe
         * @param idDossier
         * @param codeTypeEds
         * @param identifiantEds
         */
        verifierEdsDecision(identifiantDossier: string, codeTypeEds: string, identifiantEds: string): ng.IPromise<boolean>;
        /**
         * Le  dossier peut être transféré pour avis
         * @param idDossier
         * @param infoTransfert
         */
        tranfererDossierViaIdentifiant(idDossier: string, infoTransfert: Modele.ISdInformationTransfert): ng.IPromise<void>;
        /**
         * Méthode pour transférer un dossier
         * @param informationTransfert
         * @param dossierResume
         * @returns Promise<IRetourTranfererDossier>
         */
        transfererDossViaRes(informationTransfert: Modele.ISdInformationTransfert, dossierResume: Array<Modele.IDossierResume>): ng.IPromise<Modele.IRetourTranfererDossier>;
        /**
         * Methode pour rendre le dossier
         * @param entreeTransaction
         * @returns Promise<Modele.IRapportTransaction>
         */
        rendreDossierViaId(entreeTransaction: Modele.IEntreeTransaction): ng.IPromise<Modele.IRapportTransaction>;
        /**
         * Méthode pour pour annuler le transfert d'un dossier fermé
         * @param identifiantDossier
         * @param typeControlTransfert
         * @returns Promise<void>
         */
        annulerTransfertViaIdentifiantDossier(identifiantDossier: string, typeControleTransfert: ApiInstuctionCredit.Constantes.CodeAscii.Lettre.Maj): ng.IPromise<void>;
        /**
         * Méthode pour pour annuler le transfert d'un dossier ouvert
         * @param listeDossierResume
         * @returns Promise<Modele.IRetourAnnulationTranfertDossier>
         */
        annulerTransfertViaDossierRes(listeDossierResume: Array<Modele.IDossierResume>): ng.IPromise<Modele.IRetourAnnulationTranfertDossier>;
        /**
         * Après annulation de l’accord prêteur, tous les avis ne sont pas effacés
         * Néanmoins l’écran reprend sa fonctionnalité initiale c’est-à-dire une nouvelle décision peut être donnée.
         * @param idDossier
         */
        annulerAccordPreteur(idDossier: string): ng.IPromise<void>;
        /**
         * refuserAccordPreteur
         * @param idDossier
         * @param dateRefusPreteur
         */
        refuserAccordPreteur(idDossier: string, dateRefusPreteur: string): ng.IPromise<void>;
        /**
         * Ajoute une clause personnalisée
         * @param idDossier
         * @param clausePersonnaliseeMaj
         */
        ajouterClausePersonnalisee(idDossier: string, clausePersonnaliseeMaj: Modele.ClausePersonnaliseeMaj): ng.IPromise<Modele.IClausePersonnalisee>;
        /**
         * Contrôle avant l'édition
         *  Néo effectue les contrôles dans l'ordre (accessoire, modalités, mandat, édition)
         *  Les forçages permettent de passer outre les anomalies car des contrôles entrainent des traitements du dossier par Néo
         */
        controlerAvantEditionOffre(entreeControleEdition: Modele.IEntreeControleEdition): ng.IPromise<Modele.IRetourControleEdition>;
        /**
         * Génération du document propre à l'édition
         * @param forcerEdition : les contrôles d'édition sont toujours forcées en amont dans les cinématiques avec le controleAvantEdition
         */
        editerOffrePret(idDossier: string, document: Modele.IInfoDocument, modeEdition: Enum.Edition.Mode, formatEditique: number, forcerGestion: boolean, forcerEdition?: boolean): ng.IPromise<Modele.IResultatEditionOffreDescription>;
        /**
         * L’état du dossier passe à l’état « Offre éditée en attente de remise emprunteur»
         * @param idDossier
         */
        passerEnOffreEditee(idDossier: string): ng.IPromise<void>;
        /**
         * Remettre l’offre permet la validation de la remise de l’offre.
         * Si les différents contrôles aboutissent alors le dossier passe à l’état « Offre en attente de signature ».
         * @param idDossier
         * @param dateRemise
         */
        remettreOffre(idDossier: string, dateRemise: string): ng.IPromise<Array<Modele.AnomalieDossier>>;
        signerOffrePret(idDossier: string, dateSignature: string, numeroOffre: string, listeIdPersonne: Array<string>, offreAcceptee: boolean, forcerCtrlusureLorsSignature: boolean): ng.IPromise<Modele.IRetourSignatureOffre>;
        /**
         * Modification accord prêteur
         */
        modificationAccPretr(idDossier: string, dateAccord: string, libelleAvis: string, forcerControleAvtAccessoirePret: boolean, forcerControleBale2: boolean, forcerControleReglementaire: boolean): ng.IPromise<Modele.IRetourModificationAccordPreteur>;
        /**
         * Validation de toutes les pièces justificatives
         */
        validerPiecesJustif(idws: string, idPlanFinancement: string): ng.IPromise<Modele.IRapportTransaction>;
        /**
         * Signature des mandats
         */
        signerMandat(idDossier: string, referenceMandat: string, dateSignature: Date): ng.IPromise<void>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class OffreSignatureElectroniqueService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        lireActeSignatureElectronique(idDossier: string): ng.IPromise<Modele.IOffreSignatureElectronique>;
        /**
         * Must be removed
         * @deprecated
         * @param idDossier
         * @param listeDocumentMaj
         */
        alimenterDossierSignatureElectronique(idDossier: string, listeDocumentMaj: Array<Modele.IDocumentSignatureElectroniqueMaj>): ng.IPromise<Modele.IResultatOffreSignatureElectronique>;
        alimenterDossierSignatureElectroniqueGene(idDossier: string, listeDocumentMaj: Array<Modele.IDocumentSignatureElectroniqueMaj>, codeSignature: Constantes.Dossier.CodeSignatureElectronique): ng.IPromise<Modele.IResultatOffreSignatureElectronique>;
        /**
         * Mise à jours des infos IDN Néo
         * @param idDossier
         * @param codeSignature Constantes.Dossier.CodeSignatureElectronique
         */
        traiterRetourSignSAG(idDossier: string, codeSignature: number): ng.IPromise<Modele.IResultatTraitementSignature>;
        lireDocActSigElecGen(identifiantIDN: string): ng.IPromise<Modele.IResultatLectureDocumentActeSignature>;
        lireDocumentActeSignatureElectronique(idDossier: string, listeDocumentMaj: Array<Modele.IDocumentSignatureElectroniqueMaj>, codeSignature: Constantes.Dossier.CodeSignatureElectronique): ng.IPromise<Modele.IResultatOffreSignatureElectronique>;
        validerActeSignaElectronique(idDossier: string): ng.IPromise<Modele.IOffreSignatureElectronique>;
        lancerProcessusSignatureElectronique(idDossier: string): ng.IPromise<Modele.IOffreSignatureElectronique>;
        annulerActeSignatureElectronique(idDossier: string, motif: string): ng.IPromise<Modele.IOffreSignatureElectronique>;
        lireActeSignElecGene(entreeSignatureElectronique: Modele.IEntreeSignatureElectronique): ng.IPromise<Modele.IResultatOffreSignatureElectronique>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    type IdentifianClassePhase = "creditPhaseAmortissementMaj" | "creditPhaseDiffereAmortissementMaj" | "creditPhaseDiffereTotalMaj" | "creditPhaseMobilisationMaj" | "creditPhasePrefinancementMaj";
    class PhaseService {
        private wsService;
        private anomalieService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        /**
         * Permet de définir un bien a vendre
         */
        miseAJourPhase(identifiantClasse: IdentifianClassePhase, idDossier: string, creditPhaseMaj: Modele.ICreditPhaseMaj, complementPhasePretCbinMAJ?: Modele.IComplementPhasePretCombineMaj, creditParamRevisionPhaseMAJ?: Modele.ICreditParamRevisionMaj): ng.IPromise<Modele.ICreditPhase>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class PiecoService {
        private wsService;
        private anomalieService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        /**
         * Liste tous les documents disponibles pour un dossier
         * typeListe:
         *      0 dossier
         *      1 Offre
         *      3 Fiche suiveuse
         */
        listerDocuments(idDossier: string, typeListe: ApiInstuctionCredit.Enum.Edition.TypeDocument, idProposition: string): ng.IPromise<Modele.IResultatListerDocuments>;
        /**
         * Edition d'un document PIECO
         * @param idDossier
         * @param idDocument
         * @param identifiantWs
         * @param paramsEditiques
         */
        editerDocument(idDossier: string, idDocument: string, identifiantWs: string, paramsEditiques: Array<Object>): ng.IPromise<any>;
        /**
         * Edition de plusieurs documents PDF
         */
        editionDocuments(identifiantDossier: string, identifiantDocument: string, identifiantWs: string, paramsEditiques: Modele.IParamEditique[], niveauTraitement: number, formatEditique: number, codeSignature?: ApiInstuctionCredit.Constantes.Dossier.CodeSignatureElectronique): ng.IPromise<Modele.IDocument[]>;
        /**
         * Une série de documents doivent être remis par le client
         * @param idDossier
         * @param idPlan
         */
        calculerPiecesEtControles(idDossier: string, idPlan: number): ng.IPromise<Modele.IResultatPiecesEtControles>;
        /**
         * PIECO : enregistrement des commentaires
         * @param idDossier
         * @param idPlan
         */
        enregistrerCommentairesPieces(idDossier: string, commentaireClient: string, commentaireAgence: string): ng.IPromise<void>;
        /**
         * Récéupération du contexte pour dossier numérique ou non
         * @param idDossier
         */
        recupererContexteEdition(idDossier: string): ng.IPromise<Modele.IContexteEditique>;
        /**
         * Permet de récupérer les inputs de la modale fiche suiveuse
         * @param idDossier : string
         * @param identifiantDocument : string
         * @return promise<ISaisiesComplementaireLecture>
         */
        getInitialiserSaisiesComplementaire(idDossier: string, identifiantDocument: string): ng.IPromise<Modele.ISaisiesComplementaireLecture>;
        /**
         * Edition de plusieurs documents PDF
         */
        editerDocFZHCOPT(identifiantDossier: string, idws: string, sdImpressionFZHCOPT: Modele.ISdImpressionFZHCOPT): ng.IPromise<Modele.IResultatFZHCOPT>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class ProjetService {
        private $q;
        private wsService;
        static $inject: string[];
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Permet de définir un bien a vendre
         */
        definirBienAVendre(idDossier: string, idProjet: string, bien: Modele.BienAVendreMaj): ng.IPromise<Modele.IBienAVendre>;
        /**
         * Permet de définir un projet Immobilier (Changement du TOC TOR)
         */
        definirProjet(idDossier: string, toc: string, tor: string, projetMaj: Modele.ProjetImmobilierMaj): ng.IPromise<Modele.IProjet>;
        /**
         * Permet de récupérer les crédits réaménagés internes
         */
        listerPretsReamenagebles(idDossier: string, idReamenagement: string): ng.IPromise<Modele.IResultatListerPretReamenage>;
        /**
         * Permet de récupérer le détail des crédits réaménagés
         */
        detailsPretsRea(idDossier: string, date: Date, idReamenagement: string, listePrets: Array<string>): ng.IPromise<Modele.IResultatDetailPret>;
        /**
         * Permet d'ajouter un pret de réaménagement (Rachat / Regroupement de crédit interne)
         */
        ajouterPretReamengbl(identifiantDossier: string, idwsReamenagement: string, dateRA: Date, listePretReamenageable: Modele.IPretReamenagementMaj[]): ng.IPromise<Modele.IRapportAjoutPretReamenageable>;
        /**
         * Permet d'ajouter un pret de réaménagement (Rachat / Regroupement de crédit externe)
         */
        ajouterPretReamenagementExterne(idDossier: string, idReamenagement: string, codeBanque: string, idCreditGestion: string, pretAmenagement: Modele.PretReamenagementMaj, infosRegroupement: Modele.InfoRegroupementMaj): ng.IPromise<Modele.IPretReamenagement>;
        /**
         * Permet de définir un reamenagement
         */
        definirReamenagement(idDossier: string, idProjet: string, reamenagement: Modele.ReamenagementMaj): ng.IPromise<Modele.IReamenagement>;
        /**
         * Permet de définir un complément de dossier
         */
        definirComplementDossier(idDossier: string, complement: Modele.ComplementDossierMaj): ng.IPromise<Modele.IComplementDossier>;
        /**
         * Ajout d'un évènement sur un dossier
         */
        ajouterEvenementDossier(idDossier: string, codeTypeEvenement: string, libelleFacultatif: string): ng.IPromise<any>;
        /**
         * Définie le détail des couts
         */
        definirDetailCoutObj(idDossier: string, typeTravaux: string, listeDetailCoutObjetMAJ: Modele.DetailCoutObjetMaj[]): ng.IPromise<any>;
        /**
         * Permet de récupérer les anomalies
         * @param identifiantDossier : string
         * @param idwsPlanFinancement : string
         * @return promise<IAnomalieLecture>
         */
        impactsEligibilite(identifiantDossier: string, idwsPlanFinancement: string): ng.IPromise<Array<Modele.IAnomalieLecture>>;
        /**
         * Contrôle le contexte éco PTZ / SGFGAS
         * @param identifiantDossier
         * @param idwsPlanFinancement
         */
        controlerAppelSGFGAS(identifiantDossier: string, idwsPlanFinancement: string): ng.IPromise<Modele.IResultatSGFGAS>;
        /**
         *
         * @param identifiantDossier
         * @param idwsPlanFinancement
         * @param urlRetour
         * @param estDevis:TRUE pour un devis EcoPTZ / FALSE pour la création de dossier SFGAS
         */
        lancerAppelSGFGAS(identifiantDossier: string, idwsPlanFinancement: string, urlRetour: string, estDevis: boolean): ng.IPromise<Modele.IRetour>;
        private getAppelSGFGASParamGetRequest(identifiantDossier, idwsPlanFinancement, urlRetour?, estDevis?);
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class StructureService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Permet de récupérer les données d'un EDS
         * @param typeEds: string
         * @param referenceEds: string
         * @return promise<IDonneesCommunesEDS>
         */
        recherche(codeEtablissement: string, typeEds: string, referenceEds: string): ng.IPromise<Modele.IDonneesCommunesEDS[]>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class TiersService {
        private wsService;
        static $inject: Array<string>;
        constructor(wsService: ApiInstuctionCredit.Service.Data.WsService);
        getPersonneTiers(codeEtablissement: string, codeTypeRecherche: string, identifiantRecherche: string): ng.IPromise<any>;
        getTiersClient(codeEtablissement: string, idPersonne: string, typeCompositionRelation: string): ng.IPromise<Modele.ITiersObjetPrincipal>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class WsService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Exécute la requête GET
         * @deprecated
         * @param uri
         */
        sendGetRequest(uri: string, timeout?: number): ng.IPromise<any>;
        /**
         * Exécute la requête GET proprement avec des paramètres.
         * Ne pas utiliser sendGetRequest
         * @param uri
         * @param params
         * @param timeout
         */
        sendGetRequestWithParams<T>(uri: string, params?: Modele.IParamGetRequest, timeout?: number): ng.IPromise<T>;
        /**
         * Exécute la requête POST
         * @param uri
         * @param dataObjet
         */
        sendPostRequest(uri: string, data: Object, timeout?: number): ng.IPromise<any>;
        /**
         * Exécute la requête PUT
         * @param uri
         * @param dataObjet
         */
        sendPutRequest(uri: string, data?: Object): ng.IPromise<any>;
        /**
         * Exécute la requête DELETE
         * @param uri
         * @param dataObjet
         */
        sendDeleteRequest(uri: string, data?: Object): ng.IPromise<any>;
        /**
         * Exécute la requête
         * @param method
         * @param uri
         * @param data
         * @param timeout
         */
        private sendRequest(method, uri, data?, timeout?);
    }
}

declare module ApiInstuctionCredit {
    class NotesAssocieesControleur {
        notes: string;
        modeConsultation: boolean;
        libelleLabel: string;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class EmissionDocumentsControleur implements MyWay.UI.ISelectionChangeHandler {
        private $q;
        private erreurService;
        private parametrageService;
        private emissionDocumentsService;
        private editerDocumentService;
        private impressionService;
        private modalService;
        private navigationService;
        private wsDossierService;
        private fichierService;
        private assuranceService;
        listeErreursImpression: Array<string>;
        listeAnomalies: Array<ApiInstuctionCredit.Modele.IAnomalieLecture>;
        chargementLongVisible: boolean;
        dossierSchema: ApiInstuctionCredit.Modele.IDossierSchema;
        dateTraitementYYYYMMDD: string;
        codeEtablissement: string;
        consultation: boolean;
        listePropositions: Array<ApiInstuctionCredit.Modele.IPlanFinancementSchema>;
        listePropositionsSelected: Array<ApiInstuctionCredit.Modele.IPlanFinancementSchema>;
        tableauPropositions: MyWay.UI.ImwTableOptions;
        private _propositionSelected;
        listeDocuments: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocumentsSelected: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocumentsDisabled: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        afficherFicheSuiveuse: Boolean;
        listeDocumentsFicheSuiveuse: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocumentsFicheSuiveuseSelected: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocumentsRefusAssuranceExterneSelected: Array<Array<ApiInstuctionCredit.Modele.IInfoDocument>>;
        listeFluxImprimerRefusAssuranceExterneSelected: string[];
        listeDocRefusAssuranceExterneParPersonne: Array<ApiInstuctionCredit.Modele.IDocumentRefusAssuranceExterneParPersonne>;
        documentRefusAssuranceExterneSelected: boolean;
        codeSignature: ApiInstuctionCredit.Constantes.Dossier.CodeSignatureElectronique;
        static $inject: Array<string>;
        constructor($q: ng.IQService, erreurService: Service.ErreurService, parametrageService: Service.ParametrageService, emissionDocumentsService: Service.EmissionDocumentsService, editerDocumentService: Service.EditerDocumentService, impressionService: Service.ImpressionService, modalService: MyWay.UI.IModalService, navigationService: MyWay.UI.INavigationService, wsDossierService: Service.Data.DossierService, fichierService: Service.FichierService, assuranceService: ApiInstuctionCredit.Service.AssuranceService);
        libellePhraseTableauPropositions: string;
        impressionAutorisee: boolean;
        /**
         * @alias EmissionDocumentsControleur.afficheInformationPourDocumentRegroupementCredit
         * @Description Si le dernier document sélectionné dans la liste des documents à éditer est le document sur le regroupement de crédits, une popup d'information s'affiche.
         * @Param {ApiInstuctionCredit.Modele.IInfoDocument} item coché
         */
        afficheInformationPourDocumentRegroupementCredit(selectedItem: ApiInstuctionCredit.Modele.IInfoDocument): void;
        onSelectionChange(selectedPlan: ApiInstuctionCredit.Modele.IPlanFinancementSchema): void;
        /**
         *  Initialise la structure de la page et charge les données au besoin
         */
        private initialisation();
        /**
         * Initialise la structure
         * -> Vérification éligibilité
         * -> Vérification fiche suiveuse
         */
        private initStructurePage();
        private chargerDocumentsByProposition(idPlan);
        /**
         * Gestion des documents pour la partie clients
         */
        private setDocumentsClient(result);
        /**
         * Gestion des docuemnts pour la partie fiche suiveuse
         */
        private setDocumentsFicheSuiveuse(result);
        private setDocumentsRefusAssuranceExterne(result);
        imprimerDocuments(): void;
        private lancerImpression(listeDocs);
        private impressionAssuranceExterne();
        private getFluxImpressionRefusAssurance(listeDocRefusAssuranceExterneSelected);
        /**
         * Gestion des docuemnts pour le refus d'assurance externe
         */
        private setFluxImprimerRefusAssuranceExterne(listeAno);
        private creationTableauPropositions();
        /**
         * Monte le scroll en haut de page
         */
        private scrollTop();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit.Service {
    class EmissionDocumentsService {
        private wsPiecoService;
        static $inject: Array<string>;
        constructor(wsPiecoService: Service.Data.PiecoService);
        getListePropositions(listePlanFinancementSchema: Array<ApiInstuctionCredit.Modele.IPlanFinancementSchema>): Array<ApiInstuctionCredit.Modele.IPlanFinancementSchema>;
        getIsAnomalieBloquantePresente(liste: Array<ApiInstuctionCredit.Modele.IAnomalieLecture>): boolean;
        getListerDocuments(idDossier: string, idPlan: string, typeRecherche: ApiInstuctionCredit.Enum.Edition.TypeDocument): ng.IPromise<ApiInstuctionCredit.Modele.IResultatListerDocuments>;
    }
}

declare module ApiInstuctionCredit {
    import ApiModel = ApiInstuctionCredit.Modele;
    class SyntheseControleur {
        private $q;
        private syntheseService;
        donneesProjet: ApiModel.IProjetSession;
        planFinancementSchema: ApiModel.IPlanFinancementSchema;
        listeCreditsInterne: ApiModel.ICreditInterne[];
        listeCreditsExterne: ApiModel.ICreditExterne[];
        listePhases: Array<ApiModel.ICreditPhase>;
        endettement: ApiModel.IEndettement;
        codeDevise: string;
        symboleDevise: string;
        accordDePrincipe: number;
        listeResultatControle: ApiModel.IResultatControle[];
        modeRestitution: Enum.ModeRestitution;
        chargementEnCours: boolean;
        accordACompleter: ApiInstuctionCredit.Enum.FeuTricolore;
        accordAApprondir: ApiInstuctionCredit.Enum.FeuTricolore;
        tabGraphiqueDefaut: boolean;
        tabTableauDefaut: boolean;
        donneesSyntheseFrais: ApiModel.SyntheseFrais;
        coutTotalCreditsExternes: number;
        coutTotalProjet: number;
        coutTotalFinancement: number;
        coutGlobalCreditEtablissements: number;
        creditsSyntheseFinancement: Array<ApiModel.CreditSyntheseFinancement>;
        montantTotalPremiereEchance: number;
        montantTotalPremiereEchanceAssurance: number;
        synthesePlanFinancement: ApiModel.ISynthesePlanFinancement;
        creditInterneSelect: ApiModel.ICreditInterne;
        static $inject: string[];
        constructor($q: ng.IQService, syntheseService: Service.SyntheseService);
        /**
         * Au clic sur le lien, si les anomalies ne sont pas visibles, elles le deviennent
         */
        consulterDetailAccordPrincipe(): void;
        /**
         * Initialise les données calculées pour les parties "Plan de financement" et "Coût de financement"
         */
        private initFinancement();
        private initSyntheseFrais();
        /**
         * Permet de créer le tableau de synthèse avec les crédits INTERNES
         */
        private initSyntheseCreditsInternes();
        /**
         * calcul montant assurance
         */
        private calculMontantAssurance();
        /**
         * Initialise le composant accord de princpe
         */
        private initAccordPrincipe();
        /**
         *  Calcul du montant du crédit € en fonction de la devise et du taux de montage
         */
        private getMontantCapitalCreditEuro(creditInterne);
        /**
         *  Récupération de la mensualité d'une phase synthese
         */
        private getMensualitePhaseSynthese(phase, codeDevise, tauxMontage);
        /**
         *  Récupération du montant en fonction de la devise du dossier
         */
        private getMontantDevise(montant, codeDevise, tauxMontage);
        getLibelleFirstMonth(credit: ApiModel.ICreditInterne): string;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class HistoriqueEvenementsControleur {
        dossierSchema: ApiInstuctionCredit.Modele.IDossierSchema;
        listeEvents: Array<ApiInstuctionCredit.Modele.IEvenementLecture>;
        tableau: MyWay.UI.ImwTableOptions;
        constructor();
        private getTableau();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class MrhControleur {
        dateDevis: string;
        isDevisExistant: boolean;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit.Service {
    class MrhService {
        constructor();
        getIdwsEvents(dossierSchema: Modele.IDossierSchema): Array<string>;
    }
}

declare module ApiInstuctionCredit.Service {
    class PiecoService {
        constructor();
        getListeIdPersonne(data: Modele.IResultatPiecesEtControles): Array<string>;
    }
}

declare module ApiInstuctionCredit {
    class RemiseOffreControleur {
        dossierComplet: Modele.IDossierComplet;
        showInfosRemise: boolean;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class SignatureOffreControleur {
        dossierComplet: Modele.IDossierComplet;
        numeroOffreEditable: boolean;
        numeroOffre: number;
        donnesInit: boolean;
        isOffreConclue: boolean;
        listeIntervenants: Array<ApiInstuctionCredit.Modele.IIntervenantSignature>;
        listeMandats: Array<ApiInstuctionCredit.Modele.IMandatSignature>;
        consultation: boolean;
        showDateMinimumAccpOffre: boolean;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit.Modele {
    interface ICalculerFraisHypothequeRequest {
        identifiantDossier: string;
        idwsGarantieReelle: string;
    }
    interface IResultatCalculFraisHypotheque {
        /**
         * MontantFraisHypotheque
         */
        montantFraisHypotheque: number;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICalculerFraisNotaireRequest {
        dateDeTraitement: string;
        versionWsdl: number;
        typeApplication: number;
        typeObjetCommercialise: string;
        typeObjetReglemente: string;
        montantAcquisition: number;
        devise: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IResultatCalculRevision {
        montantCapitalCredit: number;
        dureeCredit: number;
        tauxPro: number;
        echeance: number;
        dureeApresRevis: string;
        dureePrlg: string;
        echeanceApresRevis: number;
        echeanceAugm: number;
        anomaliesLecture: Array<IAnomalieLecture>;
    }
    interface ICalculerRevisionRequest {
        identifiantDossier: string;
        idwsCredit: string;
        revisionTaux: number;
        revisionTauxDate: number;
        ajustDuree: boolean;
        valAjustDuree: number;
    }
    class CalculerRevisionRequest {
        identifiantDossier: string;
        idwsCredit: string;
        revisionTaux: number;
        revisionTauxDate: number;
        ajustDuree: boolean;
        valAjustDuree: number;
        constructor(identifiantDossier: string, idwsCredit: string, revisionTaux: number, revisionTauxDate: number, ajustDuree: boolean, valAjustDuree: number);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeCalculModulation {
        annee: number;
        duree: number;
        modulationEcheance: boolean;
        valeurModulation: number;
    }
    interface IEcheanceModulationTA {
        annee: number;
        montantEcheance: number;
        montantAssurance: number;
        periode: number;
        cRD: number;
        valeurModulation: string;
    }
    interface ISortieCalculModulation {
        listeEcheance: Array<IEcheanceModulationTA>;
        resultatDuree: number;
        resultatCout: number;
        variationDuree: number;
        montantDerniereEcheance: number;
        tegProportionnel: boolean;
        tegApresModulation: number;
    }
    interface ICalculerModulationsCreditRequest {
        identifiantDossier: string;
        identifiantCredit: string;
        entrCalculModn: IEntreeCalculModulation;
    }
    class EntreeCalculModulation {
        annee: number;
        duree: number;
        modulationEcheance: boolean;
        valeurModulation: number;
        constructor(annee: number, duree: number, modulationEcheance: boolean, valeurModulation: number);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICalculerCapaciteRemboursementRequest {
        dateDeTraitement: string;
        versionWsdl: number;
        typeApplication: number;
        montantEcheance: number;
        tauxEndettement: number;
        listeRessourceCharge: Array<IEntreeRessourceCharge>;
    }
    interface ICapaciteRemboursement {
        tauxEndt: number;
        tauxEndtAvecAPL: number;
        restantVivr: number;
        echeanceMaximum: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeRessourceCharge {
        codeIndiceRessourceCharge: number;
        typeRessourceCharge: string;
        montantRessourceCharge: number;
        nombrePeriode: number;
        codeExisteRessourceCharge: number;
        codeDevise: string;
    }
    class EntreeRessourceCharge implements IEntreeRessourceCharge {
        codeIndiceRessourceCharge: number;
        typeRessourceCharge: string;
        montantRessourceCharge: number;
        nombrePeriode: number;
        codeExisteRessourceCharge: number;
        codeDevise: string;
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAdrOpposition {
        codeOpposition: string;
        libelleOpposition: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAdrRisqueEpargne {
        codeFamilleProduitAdresse: string;
        libelleFamilleProduitAdresse: string;
        codeProduitCEHorsCE: number;
        codeTypeEpargneLiquide: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICatSocioProfessionnelle {
        codeClasseRisqueCSP: number;
        libelleClasseRisqueCSP: string;
    }
}

declare module ApiInstuctionCredit.Modele.Catalogue {
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
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        codeEtablissement?: string;
        criteresAccess: IScCriteresAcces;
    }
}

declare module ApiInstuctionCredit.Modele {
    class CategorieEmprunteur {
        codeCategorieEmprunt: string;
        libelleCategorieEmprunteur: string;
        codeTypeMarche: number;
        libelleCreationCategorieEmprunt: string;
        numeroOrdreClasse: number;
        /**
         * Construction d'une catégorie
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirChargesRequest {
        identifiantDossier: string;
        idPersonneEmprunt: string;
        listeChargeMAJ: Array<ChargePersonneMaj>;
    }
    interface IAjouterChargeRequest {
        identifiantDossier: string;
        idPersonneEmprunteur: string;
        chargeMiseAJour: ChargePersonneMaj;
    }
    interface IChargePersonne extends IElement {
        typeDech?: string;
        montantCharge?: number;
        tauxPondereCharge?: number;
        nombrePeriodeParAn?: number;
        codeDevise?: string;
        numeroContratEpargne?: string;
        codeExisteRessourceApreOper?: number;
        idPersonne?: string;
        idGrpeIntervenant?: string;
        statut?: string;
    }
    class ChargePersonne implements IChargePersonne {
        typeDech: string;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        constructor(codeDevise: string);
    }
    class ChargePersonneMaj {
        typeDech: string;
        montantCharge: number;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idws: string;
        constructor();
        constructor(charge: IChargePersonne);
    }
    interface IChargeRelation {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Idt relation économique (ménage)
         */
        identiteRelationEcoMenage: number;
        /**
         * Numéro ordre revenu/charge/habitat
         */
        numeroOrdreBienImmobilier: number;
        /**
         * Montant périodique versé
         */
        montantPeriodiqueVerse: number;
        /**
         * Nb périodes élément dans année
         */
        nbPeriodesElementDansAnnee: number;
        /**
         * Date fin versement charges
         * Type date au format yyyy-MM-dd
         */
        dateFinVersementCharges: string;
        /**
         * Code apport crédit
         */
        codeApportCredit: string;
        /**
         * Date modification enregistrement
         * Type date au format yyyy-MM-dd
         */
        dateModification: string;
        /**
         * Référence externe agent
         */
        codeAgent: number;
        /**
         * Date de début versement charges
         * Type date au format yyyy-MM-dd
         */
        dateDebutVersementCharges: string;
        /**
         * Type charges / revenus
         */
        typeChargesRevenus: string;
        /**
         * Code famille types revenus/charges
         */
        codeFamilleTypesRevenuscharges: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterCompteRequest {
        identifiantDossier: string;
        identifiantPersonne: string;
        numeroCompte: string;
        compteMiseAJour: ComptePersonneMaj;
    }
    interface IComptePersonne {
        numeroCompte?: string;
        dateOuverture?: string;
        modeComposition?: number;
        codeDeviseCompte: string;
        typeCompte?: string;
        libelle?: string;
        codeProduitCE?: number;
        numeroEntiteTitulaire?: number;
        libelleEntiteTitulaire?: string;
        codeEtatProduit?: number;
        soldMoyenLongTermeCompteDepoCE?: number;
        soldMinimumCompteDepoCE?: number;
        soldRelCompteDepoCE?: number;
        codeTypeCartographie?: number;
        dateDelvCartographie?: string;
        codeTypeDecvCompteDepo?: number;
        montantDecvAutreSurCompteDepo?: number;
        montantTotalVersementCreditReleaseSurCompteDepo?: number;
        nombreJourDepsAutreDecv?: number;
        montantPrelExteReleaseSurCompteDepo?: number;
        codeDepsJustificatif?: number;
        codePresDecvIrreSurCompteDepo?: number;
        codeExisteCartographieBancaireHorsCE?: number;
        codeComnRelvCompteHorsCE?: number;
        codeExisteCheq?: number;
        soldMoyenMensCreationCompteDepoCE?: number;
        mvtCreditMensSurCompteDepo?: number;
        codeTypeFctCompteDepoCEHorsCE?: number;
        dateOuerCompteDepoHorsCE?: string;
        codeEtablissement?: string;
        codeGuic?: string;
        codeCompositionEntiteTitulaire?: number;
        libelleEtablissementHorsCE?: string;
        montantTotalAgiosM1HorsCE?: number;
        montantTotalAgiosM2HorsCE?: number;
        montantTotalAgiosM3HorsCE?: number;
        indicateurCommIntervCDDHorsCE?: number;
        indicateurImpayeCDDHorsCE?: number;
        indicateurRejetChequeCDDHorsCE?: number;
        indicateurRejetPrelevCDDHorsCE?: number;
        indicateurFraisDossBDFCDDHorsCE?: number;
        indicateurPrelevPartCDDHorsCE?: number;
        nombreJoursDebiteurM1CDDHorsCE?: number;
        nombreJoursDebiteurM2CDDHorsCE?: number;
        nombreJoursDebiteurM3CDDHorsCE?: number;
        montantSoldeArreteM1CDDHorsCE?: number;
        montantSoldeArreteM2CDDHorsCE?: number;
        montantSoldeArreteM3CDDHorsCE?: number;
        referenceProduitCE?: string;
        nombreJourDepsAutrePourCompteProf?: number;
        codeContentieuxOuPretDimpaye?: number;
        titre?: string;
        idPersonne?: string;
        idws?: string;
        isCe?: boolean;
    }
    class ComptePersonne implements IComptePersonne {
        codeComnRelvCompteHorsCE: number;
        codeDepsJustificatif: number;
        codeDeviseCompte: string;
        codeEtatProduit: number;
        codeExisteCartographieBancaireHorsCE: number;
        codeExisteCheq: number;
        codePresDecvIrreSurCompteDepo: number;
        codeProduitCE: number;
        codeTypeCartographie: number;
        codeTypeDecvCompteDepo: number;
        codeTypeFctCompteDepoCEHorsCE: number;
        dateDelvCartographie: string;
        dateOuerCompteDepoHorsCE: string;
        dateOuverture: any;
        libelleEntiteTitulaire: string;
        montantDecvAutreSurCompteDepo: number;
        montantPrelExteReleaseSurCompteDepo: number;
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        mvtCreditMensSurCompteDepo: number;
        nombreJourDepsAutreDecv: number;
        numeroEntiteTitulaire: number;
        soldMinimumCompteDepoCE: number;
        soldMoyenLongTermeCompteDepoCE: number;
        soldMoyenMensCreationCompteDepoCE: number;
        soldRelCompteDepoCE: number;
        codeCompositionEntiteTitulaire: number;
        libelleEtablissementHorsCE: string;
        montantTotalAgiosM1HorsCE: number;
        montantTotalAgiosM2HorsCE: number;
        montantTotalAgiosM3HorsCE: number;
        indicateurCommIntervCDDHorsCE: number;
        indicateurImpayeCDDHorsCE: number;
        indicateurRejetChequeCDDHorsCE: number;
        indicateurRejetPrelevCDDHorsCE: number;
        indicateurFraisDossBDFCDDHorsCE: number;
        indicateurPrelevPartCDDHorsCE: number;
        nombreJoursDebiteurM1CDDHorsCE: number;
        nombreJoursDebiteurM2CDDHorsCE: number;
        nombreJoursDebiteurM3CDDHorsCE: number;
        montantSoldeArreteM1CDDHorsCE: number;
        montantSoldeArreteM2CDDHorsCE: number;
        montantSoldeArreteM3CDDHorsCE: number;
        constructor(codeDevise: string);
    }
    class ComptePersonneMaj implements IComptePersonne {
        dateOuverture: string;
        codeDeviseCompte: string;
        idws: string;
        codeProduitCE: number;
        numeroEntiteTitulaire: number;
        libelleEntiteTitulaire: string;
        codeEtatProduit: number;
        soldMoyenLongTermeCompteDepoCE: number;
        soldMinimumCompteDepoCE: number;
        soldRelCompteDepoCE: number;
        codeTypeCartographie: number;
        dateDelvCartographie: string;
        codeTypeDecvCompteDepo: number;
        montantDecvAutreSurCompteDepo: number;
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        nombreJourDepsAutreDecv: number;
        montantPrelExteReleaseSurCompteDepo: number;
        codeDepsJustificatif: number;
        codePresDecvIrreSurCompteDepo: number;
        codeExisteCartographieBancaireHorsCE: number;
        codeComnRelvCompteHorsCE: number;
        codeExisteCheq: number;
        soldMoyenMensCreationCompteDepoCE: number;
        mvtCreditMensSurCompteDepo: number;
        codeTypeFctCompteDepoCEHorsCE: number;
        dateOuerCompteDepoHorsCE: string;
        codeCompositionEntiteTitulaire: number;
        libelleEtablissementHorsCE: string;
        montantTotalAgiosM1HorsCE: number;
        montantTotalAgiosM2HorsCE: number;
        montantTotalAgiosM3HorsCE: number;
        indicateurCommIntervCDDHorsCE: number;
        indicateurImpayeCDDHorsCE: number;
        indicateurRejetChequeCDDHorsCE: number;
        indicateurRejetPrelevCDDHorsCE: number;
        indicateurFraisDossBDFCDDHorsCE: number;
        indicateurPrelevPartCDDHorsCE: number;
        nombreJoursDebiteurM1CDDHorsCE: number;
        nombreJoursDebiteurM2CDDHorsCE: number;
        nombreJoursDebiteurM3CDDHorsCE: number;
        montantSoldeArreteM1CDDHorsCE: number;
        montantSoldeArreteM2CDDHorsCE: number;
        montantSoldeArreteM3CDDHorsCE: number;
        constructor();
        constructor(compte: IComptePersonne);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreditExistant extends IChargePersonne {
        typeDech: string;
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        dateMER0?: string;
        dateFinCredit?: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        montantPrcheche?: number;
        montantPrmeecheAmortissement?: number;
        mtechePresenceComp?: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        periodeAmortissement?: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        investissementLocatifVisible?: boolean;
        investissementLocatifAccessible?: boolean;
        listeIdPhssCreditExiste?: string[];
        idws: string;
        libelleLongTableau?: string;
        tauxCalcule?: number;
        invsUsageLocfInitial?: number;
    }
    class CreditExistant implements ICreditExistant {
        typeDech: string;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idPersonne: string;
        idGrpeIntervenant: string;
        idws: string;
        statut: string;
        montantCharge: number;
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        dateMER0: string;
        dateFinCredit: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        montantPrcheche: number;
        montantPrmeecheAmortissement: number;
        mtechePresenceComp: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        periodeAmortissement: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        investissementLocatifVisible: boolean;
        investissementLocatifAccessible: boolean;
        listeIdPhssCreditExiste: string[];
        tauxCalcule: number;
        invsUsageLocfInitial: number;
        montantAAjouter: number;
        montantApresAjout: number;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        constructor(codeDevise: string, pTypeDeCharge: string);
    }
    class CreditExistantMaj implements ICreditExistant {
        typeDech: string;
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        constructor();
        constructor(creditExistant: ICreditExistant);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IRafraichirEmprunteurDossierRequest {
        identifiantDossier: string;
        supprRCEmprunteur: boolean;
    }
    interface IEmprunteur {
        nombreEnfantCharge?: number;
        nombrePersonneGrpe?: number;
        nombrePersonneSuppCharge?: number;
        typeLienEntreLesPersonne?: number;
        nomGrpe?: string;
        ageEnfant?: Array<number>;
        dateDernierRapp?: string;
        anneNaisEnfant?: Array<number>;
        codeEmplrComun?: number;
        capceprgAvenantOper?: number;
        ancnChargeLiesAOperImmobilier?: number;
        valeurPatrimoineImmobilier?: number;
        codeDevise?: string;
        montantPatrimoineMobl?: number;
        nombreVoiture?: number;
        montantRessourcePondere?: number;
        montantChargeEmpruntHorsProjetPondere?: number;
        montantAutreChargePondere?: number;
        denmEmprunt?: string;
        libelleLongEmprunt?: string;
        intlcEmprunt?: string;
        idEntiteTitulaireClient?: string;
        idElementStructureGestion?: string;
        codeCateEmprunt?: string;
        codeTypeMarche?: number;
        codeTypeMarchePersonne?: number;
        codeTypeRevnMeng?: number;
        cateAgntecnmBafi?: number;
        cateClientBafi?: number;
        typeAdmnBafi?: number;
        classeAgentBafi?: string;
        codeSituationFamille?: number;
        codeSituationFamilleRegle?: number;
        nombrePersonneCmpstMeng?: number;
        nombrePersonneACharge?: number;
        nombreActfMeng?: number;
        dateEncoursEpargneLogement?: string;
        montantEncoursIsssPretPEL?: number;
        montantEncoursIsssPretLEL?: number;
        montantEncoursLivrAutretbl?: number;
        montantEncoursPlnsAutretbl?: number;
        totalRevnAnnulationNets?: number;
        montantRevnMeng?: number;
        stttOccpLogementActuariel?: number;
        codeTitreCivilite?: string;
        nomRaisonSocialeEmprunt?: string;
        intituleLigne1?: string;
        adresseLigne3?: string;
        adresseLigne4?: string;
        codePoste?: string;
        ville?: string;
        compIntituleLigne2?: string;
        adresseLigne5?: string;
        codeDestinataireAutreParObjet?: number;
        codeSecteurRattachement?: string;
        codeJeunMeng?: number;
        presUnePersonneAttnRepnFicp?: boolean;
        presUnePersonneFichFicp?: boolean;
        esperVie?: number;
        esperVieDecision?: number;
        esperVieStress?: number;
        montantRessourceAvantProjet?: number;
        montantChargeEmpruntAvantProjet?: number;
        montantAutreChargeAvantProjet?: number;
        restantVivrAvantProjet?: number;
        indiceRestantVivrAvantProjet?: number;
        tauxEndtAvantProjet?: number;
        envoiMailSms?: string;
        codeDeviseEmprunteur?: string;
        listeIdPersonne?: Array<string>;
        listeIdCompteDeptGrpePersonne?: Array<string>;
        listeIdComptePrfsPersonne?: Array<string>;
        listeIdRessourceGrpe?: Array<string>;
        listeIdChargeGrpe?: Array<string>;
        listeIdCreditExisteGrpe?: Array<string>;
        listeIdFamilleEpargnePersonne?: Array<string>;
        listeIdRevnFiscalAssuranceEmprunt?: Array<string>;
        listeIdDonneurPatrimoineImmobilier?: Array<string>;
        idws?: string;
        description?: string;
        listeAnomalieLecture?: Array<IAnomalieLecture>;
    }
    class EmprunteurMaj implements IEmprunteur {
        nombreEnfantCharge: number;
        nombrePersonneGrpe: number;
        nombrePersonneSuppCharge: number;
        typeLienEntreLesPersonne: number;
        nomGrpe: string;
        ageEnfant: Array<number>;
        dateDernierRapp: string;
        anneNaisEnfant: Array<number>;
        codeEmplrComun: number;
        capceprgAvenantOper: number;
        ancnChargeLiesAOperImmobilier: number;
        valeurPatrimoineImmobilier: number;
        codeDevise: string;
        montantPatrimoineMobl: number;
        nombreVoiture: number;
        denmEmprunt: string;
        libelleLongEmprunt: string;
        intlcEmprunt: string;
        idEntiteTitulaireClient: string;
        idElementStructureGestion: string;
        codeCateEmprunt: string;
        codeTypeMarchePersonne: number;
        cateAgentEcnmBafi: number;
        cateClientBafi: number;
        typeAdmnBafi: number;
        classeAgentBafi: string;
        codeSituationFamille: number;
        codeSituationFamilleRegle: number;
        nombrePersonneCmpstMeng: number;
        nombreActfMeng: number;
        dateEncoursEpargneLogement: string;
        encoursEncoursIsssPretPEL: number;
        montantEncoursIsssPretLEL: number;
        montantEncoursLivrAutreEtbl: number;
        montantEncoursPlnsAutreEtbl: number;
        totalRevnAnnulationNets: number;
        montantRevnMeng: number;
        stttOccpLogementActuariel: number;
        codeTitreCivilite: string;
        nomRaisonSocialeEmprunt: string;
        intituleLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        compIntituleLigne2: string;
        adresseLigne5: string;
        codeDestinataireAutreParObjet: number;
        codeSecteurRattachement: string;
        codeJeunMeng: number;
        esperVie: number;
        esperVieDecision: number;
        esperVieStress: number;
        codeDeviseEmprunteur: string;
        listeIdPersonne: Array<string>;
        idws: string;
        constructor(emprunteur?: IEmprunteur);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntiteTitulaire {
        codeEtablissement: string;
        codeEtatEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        complementDesignationEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantEntiteTitulaire: number;
        modeCompositionEntiteTitulaire: string;
        modeCompositionIndivision: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IFamilleEpargnePersonneRequest {
        identifiantDossier: string;
        idPersonne: string;
        familleMiseAJour: EpargnePersonneMaj;
    }
    interface IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        nombreProduitDetnPourUneFamilleProduitAdresse?: number;
        montantValeurEpargneAvenantOper?: number;
        libelleCaisseEpargne: string;
        dateValeurEpargne: string;
        montantEpargneApreOper?: number;
        codeDevise?: string;
        idPersonne?: string;
        idws?: string;
        isCe?: boolean;
        dateValorisation?: string;
    }
    class EpargnePersonne implements IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        libelleCaisseEpargne: string;
        dateValeurEpargne: string;
        codeDevise: string;
        constructor(codeDevise: string);
    }
    class EpargnePersonneMaj implements IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        nombreProduitDetnPourUneFamilleProduitAdresse: number;
        montantValeurEpargneAvenantOper: number;
        libelleCaisseEpargne: string;
        dateValeurEpargne: string;
        montantEpargneApreOper: number;
        idws: string;
        constructor();
        constructor(epargne: IEpargnePersonne);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IGarant {
        nombreEnfantCharge?: number;
        nombrePersonneGrpe?: number;
        nombrePersonneSuppCharge?: number;
        typeLienEntreLesPersonne?: number;
        nomGrpe?: string;
        ageEnfant?: number[];
        dateDernierRapp?: string;
        anneNaisEnfant?: number[];
        codeEmplrComun?: number;
        capceprgAvenantOper?: number;
        ancnChargeLiesAOperImmobilier?: number;
        valeurPatrimoineImmobilier?: number;
        codeDevise?: string;
        montantPatrimoineMobl?: number;
        nombreVoiture?: number;
        montantRessourcePondere?: number;
        montantChargeEmpruntHorsProjetPondere?: number;
        montantAutreChargePondere?: number;
        totalEpargneContractuelle?: number;
        totalEpargneLiquide?: number;
        montantRessourceAvenantProjet?: number;
        montantChargeEmpruntAvenantProjet?: number;
        montantAutreChargeAvenantProjet?: number;
        restantVivrAvenantProjet?: number;
        tauxEndtAvenantProjet?: number;
        listeIdPersonne?: string[];
        listeIdCompteDeptGrpePersonne?: string[];
        listeIdComptePrfsPersonne?: string[];
        listeIdRessourceGrpe?: string[];
        listeIdChargeGrpe?: string[];
        listeIdCreditExisteGrpe?: string[];
        listeIdFamilleEpargnePersonne?: string[];
        idws?: string;
        description?: string;
    }
    interface IGarantMaj {
        nombreEnfantCharge?: number;
        nombrePersonneGrpe?: number;
        nombrePersonneSuppCharge?: number;
        typeLienEntreLesPersonne?: number;
        nomGrpe?: string;
        ageEnfant?: number[];
        dateDernierRapp?: string;
        anneNaisEnfant?: number[];
        codeEmplrComun?: number;
        capceprgAvenantOper?: number;
        ancnChargeLiesAOperImmobilier?: number;
        valeurPatrimoineImmobilier?: number;
        codeDevise?: string;
        montantPatrimoineMobl?: number;
        nombreVoiture?: number;
        listeIdPersonne?: string[];
        idws?: string;
        description?: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IInformationEntiteTitulaire {
        CaracteristiqueEntiteTitulaire: Modele.ICaracteristiqueEntiteTitulaire;
        listeCompositionEntiteTitulaire: Array<Modele.ICompositionEntiteTitulaire>;
        libelleType?: string;
        designationEntiteTitulaire?: string;
    }
    interface ICaracteristiqueEntiteTitulaire {
        codeAgentGestionEntiteTitulaire: number;
        codeEtablissement: string;
        codeEtatEntiteTitulaire: string;
        codeMotifClotureEntiteTitulaire: string;
        codeTypeDesignationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        complementDesignationBancaire: string;
        dateClotureEntiteTitulaire: string;
        dateMAJEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        identifiantEntiteTitulaire: number;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        sousCodeModeCompositionET: string;
    }
    interface ICompositionEntiteTitulaire {
        codeRangEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantLieuActivite: number;
        identifiantProfessionnel: number;
        identifiantTiers: number;
        indicateurResponsableCompteET: string;
        natureLienET: string;
        libelleType?: string;
        affichage?: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IInterditBancaire extends IElement {
        /**
         * Cdfpbd_CodeRepnBdf
         */
        codeRepnBDF: number;
        /**
         * Cdfpfi_CodeRepnFicp
         */
        codeRepnFicp: number;
        /**
         * Ctfpbd_CodeTypeRepnBdf
         */
        codeTypeRepnBDF: string;
        /**
         * Ctfpfi_CodeTypeRepnFicp
         */
        codeTypeRepnFicp: string;
        /**
         * Dtfpbd_DateApplBdf
         * Type date au format yyyy-MM-dd
         */
        dateApplicationBDF: string;
        /**
         * Dtfpfi_DateApplFicp
         * Type date au format yyyy-MM-dd
         */
        dateApplicationFicp: string;
        /**
         * Lbfpbd_LiblRepnBdf
         */
        libelleRepnBDF: string;
        /**
         * Lbfpfi_LiblRepnFicp
         */
        libelleRepnFicp: string;
        /**
         * Cdfmas_CodeArreSurSalr
         */
        codeArreSurSalr: number;
        /**
         * Dtfpfb_DateApplFbe
         * Type date au format yyyy-MM-dd
         */
        dateApplicationFbe: string;
        /**
         * Cdfpfb_CodeRepnFbe
         */
        codeRepnFbe: number;
        /**
         * Cdfmln_CodePresListnSurCntrTechRegn
         */
        codePresListnSurCntrTechniqueRegn: number;
        /**
         * Lbfmln_LiblListnSurCntrTechRegn
         */
        libelleListnSurCntrTechniqueRegn: string;
        /**
         * Cbfpfb_CodeCottFibenDirg
         */
        codeCotisationFibenDirg: string;
        /**
         * IdntPersPhys
         */
        idPersonnePhys: string;
    }
    class InterditBancaireMaj {
        codeRepnBDF: number;
        codeRepnFicp: number;
        codeTypeRepnBDF: string;
        codeTypeRepnFicp: string;
        dateApplicationBDF: string;
        dateApplicationFicp: string;
        libelleRepnBDF: string;
        libelleRepnFicp: string;
        codeArreSurSalr: number;
        dateApplicationFbe: string;
        codeRepnFbe: number;
        codePresListnSurCntrTechniqueRegn: number;
        libelleListnSurCntrTechniqueRegn: string;
        codeCotisationFibenDirg: string;
        idws: string;
        constructor(interdit?: IInterditBancaire);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface INotationTiers {
        codeSegmentRisque?: string;
        libelleSegmentRisque?: string;
        dateSegmentationRisque?: string;
        codeModeleNotationRisque?: string;
        libelleModeleNotationRisque?: string;
        valeurNoteRisque?: string;
        dateNoteRisque?: string;
        heureNoteRisque?: number;
        codeInscriptionFICP?: string;
        libelleInscriptionFICP?: string;
        dateDebutInscriptionFICP?: string;
        dateFinInscriptionFICP?: string;
        codeTypeFichageFCC?: string;
        libelleTypeFichageFCC?: string;
        dateDebutFichageFCC?: string;
        dateFinFichageFCC?: string;
        dateInterrogationFichage?: string;
        codeContexteMetier?: string;
        libelleContexteMetier?: string;
        codeSituationBDF?: string;
        libelleSituationBDF?: string;
        libelleStatutPersonne?: string;
        codeMotifModificationSain?: string;
        libelleMotifModificationSain?: string;
        dateModificationStatutDouteux?: string;
        dateDecisionPassageDouteux?: string;
        codeEtablissement?: string;
        identifiantTiers?: number;
        codeStatutDouteuxPersonne?: string;
        typeCotationFIBEN?: string;
        valeurCotationFIBEN?: string;
        dateCotationFIBEN?: string;
        dateSituationBDF?: string;
        libelleCotationFIBEN?: string;
        codeCotationCoface?: string;
        dateCotationCoface?: string;
        codeBanqueEntitePilote?: string;
    }
    class NotationTiers implements INotationTiers {
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IOppositionLecture extends IElement {
        /**
         * Cdfmop_CodeOppo
         */
        codeOpposition: string;
        /**
         * Ddfmop_DateDebtOppo
         * Type date au format yyyy-MM-dd
         */
        dateDebutOpposition: string;
        /**
         * Dffmop_DateFinOppo
         * Type date au format yyyy-MM-dd
         */
        dateFinOpposition: string;
        /**
         * IdntPersPhys
         */
        idPersonnePhys: string;
    }
    interface IOpposition extends IOppositionLecture {
        libelleOpposition?: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IParamsResteAVivre {
        dateDebutValidite: string;
        dateFinValidite: string;
        nombreDemp: number;
        nombreMinimumPersonneCharge: number;
        nombreMaximumPersonneCharge: number;
        seuilMinimum: number;
        seuilOptimisation: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IActiviteLecture extends IElement {
        /**
         * Cdfmcs_CodeClssRisqCsp
         */
        codeClasseRisqueCSP: number;
        /**
         * Dtfmcs_DateEfftCsp
         * Type date au format yyyy-MM-dd
         */
        dateEffetCSP: string;
        /**
         * Dtfmea_DateEmbc
         * Type date au format yyyy-MM-dd
         */
        dateEmbc: string;
        /**
         * Ctfmce_CodeTypeContEmbc
         */
        codeTypeContratEmbc: number;
        /**
         * Lbfmpl_RaisSoclEmplr
         */
        raisonSocialeEmplr: string;
        /**
         * Cpfmpl_CodePostEmplr
         */
        codePosteEmplr: string;
        /**
         * Lofmpl_CodeApNEmplr
         */
        codeApNEmplr: string;
        /**
         * Cdfmdo_CodeSalrDomcCe
         */
        codeSalrDomiciliationCE: number;
        /**
         * Cdfmsa_CodePresActvSalr
         */
        codePresActiviteSalr: number;
        /**
         * Cdfmsu_CodePresSuivPers
         */
        codePresSuivantPersonne: number;
        /**
         * Nbfmkm_NbKilmEtrLogmTrvl
         */
        nombreKilmEntreLogementTrvl: number;
        /**
         * Dffmea_DateFinCdd
         * Type date au format yyyy-MM-dd
         */
        dateFinCdd: string;
        /**
         * Ctfmsa_CodeSectActv
         */
        codeSecteurActivite: number;
        /**
         * IdntPersPhys
         */
        idPersonnePhys: string;
    }
    interface IActivitePersonne extends IActiviteLecture {
        libelleTypeContratEmbc: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     * Données synthètiques qui permet d'obtenir des données IHM Emprunteur / Personne
     */
    class PersonneAffectation {
        idws: string;
        description: string;
        rolsPersonnePourDossier: Array<string>;
        estEmprunteur: boolean;
        estPersonneMorale: boolean;
        estGarant: boolean;
        idPersonneSI: string;
        constructor(oPersonne: Modele.IPersonne, oEmprunteur: Modele.IEmprunteur);
        /**
         * Vérifie si la personne est caution sur le dossier
         */
        estCaution(): boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListePersonnesRequest {
        identifiantDossier: string;
        dateNaissance: string;
        prenom: string;
        numeroCompte: string;
        numeroCarteBancaire: string;
        identifiantPersonne: string;
        rolePersonne: string;
        typePersonne: number;
        nom: string;
        numeroSiren: string;
    }
    interface IPersonne {
        crteResd?: number;
        cateAgntecnmBafi?: number;
        cateClientBafi?: number;
        cateTypeAdmnBafi?: number;
        classeAgentBafi?: string;
        cleBDF?: string;
        idPersonneSI?: string;
        dateEntrRelationAvecConsolide?: string;
        codeTypePersonne?: number;
        nomRaisonSociale?: string;
        codeAssmPartc?: number;
        intituleAdresse?: string;
        adresseLigne3?: string;
        adresseLigne4?: string;
        codePoste?: string;
        ville?: string;
        complementIntitule?: string;
        adresseLigne5?: string;
        emailPerso?: string;
        numeroTeleProf?: string;
        numeroTelePersonne?: string;
        numeroTcpyProf?: string;
        numeroPortPersonne?: string;
        ensgCommission?: string;
        lieuInscRC?: string;
        numeroInscRC?: string;
        rolsPersonnePourDossier?: Array<string>;
        personneEstAssurance?: boolean;
        numeroOrdrePersonneEmprunt?: number;
        codeTypeBasePersonne?: number;
        reltnEntrPersonne?: Array<string>;
        listeIdRessource?: Array<string>;
        listeIdCharge?: Array<string>;
        listeIdCompte?: Array<string>;
        listeIdFamilleEpargne?: Array<string>;
        idFicheContact?: string;
        idws?: string;
        listeAnomalieLecture?: Array<IAnomalieLecture>;
        codeTitreCivilite?: string;
        libelleTitreCivilite?: string;
        prenom?: string;
        codeSexePersonne?: number;
        nomJeunFill?: string;
        dateNais?: string;
        lieuNais?: string;
        codePersonneCE?: number;
        codeRegimeMatrimonial?: string;
        codeSituationFamille?: number;
        nombrePersonneACharge?: number;
        cateInteret?: string;
        dateEffetSituationFamille?: string;
        codeSalrDomiciliationCE?: number;
        codeModeLogement?: number;
        dateEntrLogement?: string;
        codeCapcJuridique?: number;
        codeTypeCapJuridique?: string;
        codeNational?: number;
        codeSaisieAvisTiersDtnr?: number;
        codeContentieuxHorsComptCE?: number;
        montantEncoursSaccefHorsOprt?: number;
        typeTrspUtilisation?: number;
        codeGeotAdresseDomiciliation?: string;
        codePaysResdEmprunt?: string;
        codePaysLocalisationEmprunt?: string;
        codeProfilEmprunt?: number;
        codePstlLieuNais?: string;
        idActivite?: string;
        idIntdBancaire?: string;
        listeIdOpps?: Array<string>;
        autoriseSignatureElectronique?: boolean;
        dossierAssurance?: IDossierAssuranceLecture;
        numeroINSEE?: string;
        dateInscRcs?: string;
        dateCreationSoce?: string;
        chiffreAffrHtExrcPrec?: number;
        nombreSalr?: number;
        formeJuridique?: string;
        libelleFormeJuridique?: string;
        typeDroitPersonneMorl?: number;
        montantCapital?: number;
        listeIdPersonnePhys?: Array<string>;
        listeRolePersonnePhys?: Array<string>;
        activite?: ApiInstuctionCredit.Modele.IActivitePersonne;
        catSocioProfessionnelle?: ApiInstuctionCredit.Modele.ICatSocioProfessionnelle;
        checked?: boolean;
        affichageAdresse?: any;
        listeComptesPrelVersementModalite?: Array<IComptePersonne>;
        description?: string;
        libelleTypePersonne?: string;
    }
    class PersonneMaj {
        idPersonneSI: string;
        crteResd: number;
        cateAgntecnmBafi: number;
        cateClientBafi: number;
        cateTypeAdmnBafi: number;
        classeAgentBafi: string;
        cleBDF: string;
        dateEntrRelationAvecConsolide: string;
        nomRaisonSociale: string;
        codeAssmPartc: number;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
        ensgCommission: string;
        lieuInscRC: string;
        numeroInscRC: string;
        idws: string;
        rolePersonne: string;
        rattachement: boolean;
        forcerRattachement: boolean;
        forcerAjout: boolean;
        constructor(idPersonneSI: string, role: string);
    }
    class PersonnePhysiqueMaj implements PersonneMaj {
        idPersonneSI: string;
        crteResd: number;
        cateAgntecnmBafi: number;
        cateClientBafi: number;
        cateTypeAdmnBafi: number;
        classeAgentBafi: string;
        cleBDF: string;
        dateEntrRelationAvecConsolide: string;
        nomRaisonSociale: string;
        codeAssmPartc: number;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
        ensgCommission: string;
        lieuInscRC: string;
        numeroInscRC: string;
        idws: string;
        rolePersonne: string;
        rattachement: boolean;
        forcerRattachement: boolean;
        forcerAjout: boolean;
        codeTitreCivilite: string;
        prenom: string;
        codeSexePersonne: number;
        nomJeunFill: string;
        dateNais: string;
        lieuNais: string;
        codePersonneCE: number;
        codeRegimeMatrimonial: string;
        codeSituationFamille: number;
        nombrePersonneACharge: number;
        cateInteret: string;
        dateEffetSituationFamille: string;
        codeSalrDomiciliationCE: number;
        codeModeLogement: number;
        dateEntrLogement: string;
        codeCapcJuridique: number;
        codeTypeCapJuridique: string;
        codeNational: number;
        codeSaisieAvisTiersDtnr: number;
        codeContentieuxHorsComptCE: number;
        montantEncoursSaccefHorsOprt: number;
        typeTrspUtilisation: number;
        codeGeotAdresseDomiciliation: string;
        codePaysResdEmprunt: string;
        codePaysLocalisationEmprunt: string;
        codeProfilEmprunt: number;
        codePstlLieuNais: string;
        autoriseSignatureElectronique: boolean;
        constructor(personne?: IPersonne);
    }
    interface IContexteCreationConnaissanceClient {
        identifiantPersonne?: string;
        CLIENT: IParamCreationConnaissanceClient;
        displayName: string;
        rattachementProspect: boolean;
    }
    interface IParamCreationConnaissanceClient {
        nomFamille?: string;
        prenom?: string;
        dateNaissance?: string;
        raisonSociale?: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITiersObjetPrincipal {
        adresseEmployeur?: any;
        chargeImposition: any;
        etablissement?: any;
        identification: ITiersIdentification;
        informationProfessionnelle?: any;
        listeAdresse: any[];
        listeBlocNotes: any[];
        listeCharge: ITiersCharge[];
        listeFraicheurRubrique?: any[];
        listeMedia: any[];
        listeParticulierProjet: any[];
        listeParticulierSensibilite: any[];
        listePatrimoineFinancier: any[];
        listePatrimoineImmobilier: any[];
        listeRevenu: ITiersRevenu[];
        listeTiersLies: any[];
        listeTiersLiesAdministratifs: any[];
        listeTypeRelationEconomique: any[][];
        particulierInformation: IParticulierInformation;
        particulierNotation: any;
        succession: any;
        status?: any;
    }
    interface ITiersIdentification {
        codeEtablissement?: string;
        identifiantPersonne?: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeStatut: any;
        libelleStatut?: any;
        codeTypeRelation: string;
        libelleTypeRelation?: any;
        dateEntreeRelation: number;
        codeGuichetRisque?: string;
        codeMarche?: any;
    }
    interface ITiersCharge {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreCharge: number;
        codeTypeCharge: string;
        nombrePeriode: number;
        montantPeriodiqueCharge: number;
        montantChargeAnnuel: number;
        dateFinValiditeCharge?: any;
        dateDebutValiditeCharge?: any;
    }
    interface ITiersRevenu {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreRevenu: number;
        codeTypeRevenu: string;
        libelleTypeRevenu?: any;
        nombrePeriode: number;
        montantRevenuAnnuel: number;
        dateFinValiditeRevenu?: any;
        dateDebutValiditeRevenu?: any;
        montantPeriodiqueRevenu: number;
    }
    interface IParticulierInformation {
        identifiantPersonne: number;
        codeEtablissement: string;
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libelleCapaciteJuridique: string;
        libellePaysNaissance: string;
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
        nomEmployeur: string;
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
        statutPro: Modele.IStatutPro;
        gestionPrivee: Modele.IGestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        nif: string;
    }
    interface IGestionPrivee {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: string;
        identifiantExterneEDS: string;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: string;
        identifiantExterneEDS2: string;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
    }
    interface IStatutPro {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: string;
        identifiantInterneAgentModification: string;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     * Image de l'objet exposé par le service
     */
    interface IPhaseCreditExistant extends IElement {
        codeTypePhase: string;
        dateDebutPhase: string;
        dateFinPhase?: string;
        dureePhase?: number;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        idCreditExistant?: string;
    }
    /**
     * Objet permettant sa manipulation dans la vue au sein d'un fonctionnement à l'aide de tuile
     */
    class PhaseCreditExistant implements IPhaseCreditExistant {
        codeTypePhase: string;
        dateDebutPhase: string;
        dateFinPhase: string;
        dureePhase: number;
        idCreditExistant: string;
        idws: string;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        statut: string;
        marquage: boolean;
        constructor(oPhase?: IPhaseCreditExistant);
    }
    /**
     * Pour la mise à jour de la phase
     */
    class PhaseCreditExistantMaj implements IPhaseCreditExistant {
        codeTypePhase: string;
        dateDebutPhase: string;
        dateFinPhase: string;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        constructor(oPhase: PhaseCreditExistant);
    }
    /**
     * Pour la création d'une phase
     */
    class AjouterPhaseCreditExistant implements IPhaseCreditExistant {
        codeTypePhase: string;
        dateDebutPhase: string;
        dureePhase: number;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        identifiantDossier: string;
        idCreditExistant: string;
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        constructor(oPhase: IPhaseCreditExistant, oIdCreditExistant: string, oIdentifiantDossier: string);
    }
    /**
     * Objet de retour suite à la création d'une phase
     */
    interface IResultatAjoutPhaseCreditExistant {
        creditExistantLecture: Modele.CreditExistant;
        listePhaseCreditExistantLecture: Array<Modele.IPhaseCreditExistant>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IRevenuFiscalEmprunteurRequest {
        identifiantDossier: string;
        montantRevenuMenage: number;
        typeRevenuMenage: number;
    }
    interface IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idEmprunt?: string;
        idws?: string;
        titre?: string;
    }
    class RevenuFiscalPersonne implements IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idEmprunt: string;
        constructor(codeDevise: string);
    }
    class RevenuFiscalMaj implements IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idws: string;
        constructor();
        constructor(revenuFiscal: IRevenuFiscalPersonne);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirRessourcesRequest {
        identifiantDossier: string;
        idPersonneEmprunt: string;
        listeRessourceMAJ: Array<RevenuPersonneMaj>;
    }
    interface IAjouterRessourceRequest {
        identifiantDossier: string;
        idPersonneEmprunteur: string;
        ressourceMiseAJour: RevenuPersonneMaj;
    }
    interface IRevenuPersonne {
        typeRessource: string;
        montantRessource?: number;
        tauxPondereRessource?: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        idPersonne?: string;
        idGrpeIntervenant?: string;
        idws?: string;
        LibellePers?: string;
        statut?: string;
    }
    class RevenuPersonne implements IRevenuPersonne {
        typeRessource: string;
        tauxPondereRessource: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        constructor(codeDevise: string);
    }
    class RevenuPersonneMaj implements IRevenuPersonne {
        typeRessource: string;
        montantRessource: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        idws: string;
        constructor();
        constructor(revenu: IRevenuPersonne);
    }
}

declare module ApiInstuctionCredit.Modele {
    class SituationFamilialeEmprunteur {
        codeSituationFamille: number;
        libelleSituationFamille: string;
        typeSituationFamille: number;
        /**
         * Construction d'une situation familiale
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IStatutRessource {
        libelle: string;
        code: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirComplementDossierRequest {
        identifiantDossier: string;
        complementDossierMAJ: ComplementDossierMaj;
    }
    interface IComplementDossier {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: string;
        heureSaisieSurInternet: number;
        idws: string;
    }
    class ComplementDossier implements IComplementDossier {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: string;
        heureSaisieSurInternet: number;
        idws: string;
        constructor(libelle: string);
    }
    class ComplementDossierMaj {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: string;
        heureSaisieSurInternet: number;
        idws: string;
        constructor(complement?: IComplementDossier);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirBlocNotesRequest {
        identifiantDossier: string;
        typeBlocNote: string;
        valeurBlocNote: string;
    }
    interface IBlocNotesLecture {
        typeBlocNote: string;
        contratBlocNote: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDossierMRHLecture {
        urlIHM: string;
        codeReseau: string;
        idInstanceProcessus: string;
        codeProcessus: string;
        idEtape: string;
        codeEtape: string;
        agenceDomiciliation: string;
        urlRetour: string;
        sigle: string;
        codeProfilAssurance: string;
        idActrEtab: string;
        codeOrgnFinancierActrEtab: string;
        nomUsageActrEtab: string;
        idEDSActrEtabl: string;
        modeIntegrationIhm: number;
        codeAffSynth: number;
        codeModeAccessoireSynth: number;
        codeEtabFinancierTiers: string;
        idTiers: string;
        codeTypeCanlDistn: string;
        codeTypePerimEnt: string;
        codeApplicationAPL: string;
    }
    class ParametreUrlApplicationImpulse {
        private SIGLE;
        private CDORGNFINNACTRETAB;
        private CDPRFLASSR;
        private IDTIER;
        private IDEDSACTRETAB;
        private NOMUSGACTRETAB;
        private IDACTRETAB;
        private CDAPPLIAPL;
        private CDTYPECANLDISTN;
        private CDTYPEPERIMENT;
        private CDETABFINNTIER;
        private IDIDN;
        private REFEXTERNE;
        private CODEPRODUIT;
        private CDINFOTARIF;
        private CDPILOTAGEEDITION;
        private CDTYPESIGN;
        private THEME;
        private CODECANAL;
        private CCODESENSCOMMUNICATION;
        constructor(SIGLE: string, CDORGNFINNACTRETAB: string, CDPRFLASSR: string, IDTIER: string, IDEDSACTRETAB: string, NOMUSGACTRETAB: string, IDACTRETAB: string, CDAPPLIAPL: string, CDTYPECANLDISTN: string, CDTYPEPERIMENT: string, CDETABFINNTIER: string);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICoutObjet {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idTravauxFinancier: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDossierLecture extends IElement {
        /**
         * Idfadi_IdntDoss
         */
        idDossier: string;
        /**
         * VersDoss
         */
        versionDossier: number;
        /**
         * EstDossierPartenaire
         */
        estDossierPartenaire: boolean;
        /**
         * Cdfiei_CodeImprParExprVers
         */
        codeImprParExpressionVersement: number;
        /**
         * Cdfiag_CodeAppliChrgDoss
         */
        codeApplicationChargeDossier: number;
        /**
         * Nbfapo_NbPassOffr
         */
        nombrePassOffre: number;
        /**
         * Dtfmva_DateDernReslAdr
         * Type date au format yyyy-MM-dd
         */
        dateDernierReslAdresse: string;
        /**
         * Dgfano_DateHorzProj
         * Type date au format yyyy-MM-dd
         */
        dateHorizonProjet: string;
        /**
         * Cdfado_CodeVisbInstr
         */
        codeVisbInstruction: number;
        /**
         * DossExstCent
         */
        dossierExisteCentral: boolean;
        /**
         * NbPersAssrParDeft
         */
        nombrePersonneAssuranceParDeft: number;
        /**
         * ModfEffcPendSess
         */
        modificationEffcPendantSess: boolean;
        /**
         * ModeOuvrDoss
         */
        modeOuvertureDossier: number;
        /**
         * DossModf
         */
        dossierModification: boolean;
        /**
         * ExisteMandatSEPA
         */
        existeMandatSEPA: boolean;
        /**
         * PjPrealableToutesRecues
         */
        pjPrealableToutesRecues: boolean;
        /**
         * PjSuspensifToutesRecues
         */
        pjSuspensifToutesRecues: boolean;
        /**
         * TypeMoteurADR
         */
        typeMoteurADR: number;
        /**
         * Cifttv_TechVent
         */
        techniqueVent: number;
        /**
         * Cifoli_CodeLivrnImme
         */
        codeLivrnImme: boolean;
        /**
         * Nofaac_NumeAccrCmps
         */
        numeroAccrCmps: number;
        /**
         * Cnfaeg_EnggRevc
         */
        engagementRevc: number;
        /**
         * Dtfasp_DateSignPret
         * Type date au format yyyy-MM-dd
         */
        dateSignePret: string;
        /**
         * EvenMomnVertPourContConf
         */
        evenMomnVertPourContratConf: string;
        /**
         * Dtfisy_DateTrt
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * DateTrtRegl
         * Type date au format yyyy-MM-dd
         */
        dateTraitementRegle: string;
        /**
         * Cdfbve_ModReglVerst
         */
        modRegleVersement: string;
        /**
         * Cdfiro_IndicPrrgOffr
         */
        indicePrrgOffre: number;
        /**
         * Idfccp_IdntConvPres
         */
        idConventionPres: string;
        /**
         * Idfipp_IdntPres
         */
        idPres: string;
        /**
         * Lbfpen_EnsgnPres
         */
        ensgnPres: string;
        /**
         * Mtfasi_MtSouhIntlEmpr
         */
        montantSouhInitialEmprunt: number;
        /**
         * Ctfaoc_OrigCommProj
         */
        origineCommissionProjet: number;
        /**
         * Cefapd_CodeEttPlns
         */
        codeEtatPlns: number;
        /**
         * Cdfaar_CodeApplAnlsRisq
         */
        codeApplicationAnlsRisque: boolean;
        /**
         * Idfaac_IdntDossGest
         */
        idDossierGestion: string;
        /**
         * Idfaeg_IdntelemStrcGest
         */
        idElementStructureGestion: string;
        /**
         * Idfast_IdntelemStrcInstr
         */
        idElementStructureInstruction: string;
        /**
         * Idfagd_CodeAgntDecd
         */
        codeAgentDecd: string;
        /**
         * Ctfacf_CodeTyplCadrFisc
         */
        codeTypologieCadreFiscal: string;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cifcsb_CodeLevrSecrBanc
         */
        codeLevrSecrBancaire: number;
        /**
         * Dtfccr_DateCretDoss
         * Type date au format yyyy-MM-dd
         */
        dateCreationDossier: string;
        /**
         * Dmfidm_DateDernMaj
         * Type date au format yyyy-MM-dd
         */
        dateDernierMAJ: string;
        /**
         * Ctfado_EtatDoss
         */
        etatDossier: number;
        /**
         * Cefado_SousEtatDoss
         */
        sousEtatDossier: number;
        /**
         * Dtfadf_DateDemnFinn
         * Type date au format yyyy-MM-dd
         */
        dateDemandeFinancier: string;
        /**
         * Dtfaem_DateemssOffr
         * Type date au format yyyy-MM-dd
         */
        dateemssOffre: string;
        /**
         * Dtfirl_DateCiblProj
         * Type date au format yyyy-MM-dd
         */
        dateCiblProjet: string;
        /**
         * Cdfaod_CodeOrigDemn
         */
        codeOrigineDemande: string;
        /**
         * Dtfard_DateAccrPrtr
         * Type date au format yyyy-MM-dd
         */
        dateAccrPrtr: string;
        /**
         * Cefahb_CodeEttEnggHors
         */
        codeEtatEngagementHors: number;
        /**
         * Mtfahb_MtEnggHorsBiln
         */
        montantEngagementHorsBiln: number;
        /**
         * Dffavl_DateFinValdOffr
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeOffre: string;
        /**
         * Dtfaro_DateRecpOffrParClnt
         * Type date au format yyyy-MM-dd
         */
        dateRecuperationOffreParClient: string;
        /**
         * Dtfaef_DateEfftOffr
         * Type date au format yyyy-MM-dd
         */
        dateEffetOffre: string;
        /**
         * Cdfdrg_ModeRegl
         */
        modeRegle: string;
        /**
         * Nufpr1_NumeCpteSecoPrel
         */
        numeroCompteSecoPrel: string;
        /**
         * Nufddt_DomcTresCpteSeco
         */
        domiciliationTresCompteSeco: string;
        /**
         * Dtfart_DateLimtRetrEmprLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetardEmpruntLoiConsommation: string;
        /**
         * Dffaof_DateLimtRetrOffrLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetardOffreLoiConsommation: string;
        /**
         * Dffaao_DateMiniAccpOffrLoiImmo
         * Type date au format yyyy-MM-dd
         */
        dateMinimumAccpOffreLoiImmobilier: string;
        /**
         * Dtfasg_DateSignEmpr
         * Type date au format yyyy-MM-dd
         */
        dateSigneEmprunt: string;
        /**
         * Dtfare_DateRefuOffrParEmpr
         * Type date au format yyyy-MM-dd
         */
        dateRefuOffreParEmprunt: string;
        /**
         * Dffavi_DateMinnPourVerstFondLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateMinnPourVersementFondLoiConsommation: string;
        /**
         * Dtfieo_DateEdtnOffr
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * Idfaex_IdntExtnDoss
         */
        idExterneDossier: string;
        /**
         * Ctfals_TypeLoiScrv
         */
        typeLoiScrivener: number;
        /**
         * Cdfafc_CodeAuthCont
         */
        codeAuthentiqueContrat: boolean;
        /**
         * Npfars_DelRetrScrv1
         */
        delRetardScrivener1: number;
        /**
         * Cdfive_CodeVersCret
         */
        codeVersementCreation: string;
        /**
         * Cdfwve_CodeVersDernModf
         */
        codeVersementDernierModification: string;
        /**
         * Mtfcon_MtVerstCnvn
         */
        montantVersementCnvn: number;
        /**
         * Txaufi_PctFinn
         */
        pourcentageFinancier: number;
        /**
         * Nofech_NumeEchlVerst
         */
        numeroEchelleVersement: number;
        /**
         * Ctfco2_TorechlVerst
         */
        torechlVersement: string;
        /**
         * Cdfali_CodeEtatEnvDossSaccef
         */
        codeEtatEnvoiDossierSaccef: number;
        /**
         * Dtfali_DateLieEnvSaccef
         * Type date au format yyyy-MM-dd
         */
        dateLieEnvoiSaccef: string;
        /**
         * Idfcpo_IdntEnvSaccef
         */
        idEnvoiSaccef: string;
        /**
         * Idfaoc_IdntOrigDemn
         */
        idOrigineDemande: string;
        /**
         * Lbfaoc_LiblOrigDemn
         */
        libelleOrigineDemande: string;
        /**
         * Dgfapn_DatePrevSignNotr
         * Type date au format yyyy-MM-dd
         */
        datePrevSigneNotaire: string;
        /**
         * Nufadn_RefeExtnDoss
         */
        referenceExterneDossier: string;
        /**
         * Idfas5_ElemStrc5
         */
        elementStructure5: string;
        /**
         * Idfas6_ElemStrc6
         */
        elementStructure6: string;
        /**
         * ModeDecn
         */
        modeDecn: boolean;
        /**
         * Llfic1_CritRechAppli1
         */
        critereRechercheApplication1: string;
        /**
         * Llfic2_CritRechAppli2
         */
        critereRechercheApplication2: string;
        /**
         * Llfic3_CritRechAppli3
         */
        critereRechercheApplication3: string;
        /**
         * Llfic4_CritRechAppli4
         */
        critereRechercheApplication4: string;
        /**
         * Llfic5_CritRechAppli5
         */
        critereRechercheApplication5: string;
        /**
         * Ctfaen_CodeTypeEngg
         */
        codeTypeEngagement: string;
        /**
         * Dtfano_DateSignDossEnv
         * Type date au format yyyy-MM-dd
         */
        dateSigneDossierEnvoi: string;
        /**
         * Dffan1_DateFinValdAccr
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAccr: string;
        /**
         * IndicOffrPre
         */
        indiceOffrePre: boolean;
        /**
         * Ctfipi_CodePrcsInstr
         */
        codeProcessusInstruction: string;
        /**
         * Ctfitr_CodeTrtComp
         */
        codeTraitementComp: string;
        /**
         * Cefipc_CodeEttPrsChrgDoss
         */
        codeEtatPresenceChargeDossier: number;
        /**
         * Cefiac_CodeEttActvDoss
         */
        codeEtatActiviteDossier: number;
        /**
         * IndicPrsChrgPiecJustParPiec
         */
        indicePresenceChargePieceJustificatifParPiece: number;
        /**
         * Idfabp_IdntAgntBoActlChrgDoss
         */
        idAgentBoActuarielChargeDossier: string;
        /**
         * Idfaes_IdntAgntPrprDoss
         */
        idAgentProprietaireDossier: string;
        /**
         * Idfaei_IdntAgntInstrDoss
         */
        idAgentInstructionDossier: string;
        /**
         * Idfaec_IdntAgntConnDoss
         */
        idAgentConnaissanceDossier: string;
        /**
         * Idfada_IdntAgntPourDecsConf
         */
        idAgentPourDecisionConf: string;
        /**
         * Idfael_IdntEnttDecs
         */
        idEntiteDecision: string;
        /**
         * Idfabi_IdntEnttPourTrnfBo
         */
        idEntitePourTransfertBo: string;
        /**
         * BlocNotes
         */
        blocNotes: string;
        /**
         * Ctfcse_CodeEtpeSiml
         */
        codeEtapeSimulation: number;
        /**
         * Idfifd_NumeFichPres
         */
        numeroFichPres: string;
        /**
         * Cifapp_CodePrscDossPres
         */
        codePrscDossierPres: number;
        /**
         * Idfdma_ReferenceMandat
         */
        referenceMandat: string;
        /**
         * Dgfdms_DateSignMand
         * Type date au format yyyy-MM-dd
         */
        dateSigneMand: string;
        /**
         * Ctfind_PrecisionTaux
         */
        precisionTaux: number;
        /**
         * Cdficd_CodeDevCredDev
         */
        codeDevCreditDev: string;
        /**
         * Idfics_NumCompteDev
         */
        numeroCompteDev: string;
        /**
         * Ctfimr_ModeReglDev
         */
        modeRegleDev: string;
        /**
         * Ctfimv_ModReglVerstDev
         */
        modRegleVersementDev: string;
        /**
         * IdntComplDoss
         */
        idComplementDossier: string;
        /**
         * Cifiid_IntegrationDossierDeVente
         */
        integrationDossierDeVente: number;
        /**
         * Ctficc_CanalDeCreation
         */
        canalDeCreation: string;
        /**
         * Ctfici_CanalDeDistribution
         */
        canalDeDistribution: string;
        /**
         * Defiag_DateEnvConvAG
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiConventionAG: string;
        /**
         * Ctfarp_EnvoiMailSms
         */
        envoiMailSms: string;
        /**
         * Cifpcd_OuvCpteSupEchCred
         */
        ouvertureCompteSupEchCredit: boolean;
        /**
         * CodeTypeEditionAutorisee
         */
        codeTypeEditionAutorisee: string;
        /**
         * EstEcoPtzCopro
         */
        estEcoPtzCopro: boolean;
        /**
         * EstCopro100
         */
        estCopro100: boolean;
        /**
         * AutoriserCalculIndicateurEditionAgence
         */
        autoriserCalculIndicateurEditionAgence: boolean;
        /**
         * Cdfcsg_TypeSignature
         */
        typeSignature: number;
        /**
         * IdntBlcNotsDivr
         */
        idBlocNoteNotsDivr: string;
        /**
         * IdntRedcActe
         */
        idReductionActe: string;
        /**
         * IdntEmpr
         */
        idEmprunt: string;
        /**
         * ListIdntEven
         */
        listeIdEven: Array<string>;
        /**
         * ListIdntAvis
         */
        listeIdAvis: Array<string>;
        /**
         * ListIdntAlrtEntr
         */
        listeIdAlerteEntr: Array<string>;
        /**
         * ListIdntAlrtSort
         */
        listeIdAlerteSort: Array<string>;
        /**
         * ListIdntPrjt
         */
        listeIdProjet: Array<string>;
        /**
         * ListIdntVerst
         */
        listeIdVersement: Array<string>;
        /**
         * ListIdntPers
         */
        listeIdPersonne: Array<string>;
        /**
         * ListIdntGarants
         */
        listeIdGarants: Array<string>;
        /**
         * ListIdntClssPers
         */
        listeIdClassePersonne: Array<string>;
        /**
         * ListIdntAgents
         */
        listeIdAgents: Array<string>;
        /**
         * IdntPoolEPS
         */
        idPoolEPS: string;
        /**
         * Cdfcsh_CodeTypeSgnDmdeCred
         */
        codeTypeSignDmdCred: number;
        /**
         * Cdfasd_CodeEtatSgnDmdeCred
         */
        codeEtatSignDmdCred: number;
        /**
         * Hefced_DateEdtDmdeCred
         * Type date au format yyyy-MM-dd
         */
        dateEditionDmdCred: string;
        /**
         * Hefcds_DateSignDmdeCred
         * Type date au format yyyy-MM-dd
         */
        dateSignDmdCred: string;
        /**
         * Nofaea_NumEdtDmdeCred
         */
        numEditionDmdCred: number;
    }
    interface IDossierComplet extends IDossierLecture {
    }
    class DossierMaj {
        dateHorizonProjet: string;
        codeImprParExpressionVersement: number;
        codeApplicationChargeDossier: number;
        codeVisbInstruction: number;
        techniqueVent: number;
        codeLivrnImme: boolean;
        numeroAccrCmps: number;
        engagementRevc: number;
        dateSignePret: string;
        dateTraitement: string;
        idConventionPres: string;
        idPres: string;
        ensgnPres: string;
        origineCommissionProjet: number;
        codeEtatPlns: number;
        codeApplicationAnlsRisque: boolean;
        codeTypologieCadreFiscal: string;
        cdeDevise: string;
        codeLevrSecrBancaire: number;
        dateRecuperationOffreParClient: string;
        modeRegle: string;
        modeRegleVersement: string;
        numeroCompteSecoPrel: string;
        domiciliationTresCompteSeco: string;
        dateLimiteRetardEmpruntLoiConsommation: string;
        idExterneDossier: string;
        typeLoiScrivener: number;
        codeAuthentiqueContrat: boolean;
        montantVersementCnvn: number;
        pourcentageFinancier: number;
        idReductionActe: string;
        idOrigineDemande: string;
        libelleOrigineDemande: string;
        datePrevSigneNotaire: string;
        referenceExterneDossier: string;
        elementStructure5: string;
        elementStructure6: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        codeTypeEngagement: string;
        idAgentInstructionDossier: string;
        idAgentPourDecisionConf: string;
        idEntitePourTransfertBo: string;
        blocNotes: string;
        codeEtapeSimulation: number;
        numeroFichPres: string;
        codePrscDossierPres: number;
        codeDevCreditDev: string;
        numeroCompteDev: string;
        modeRegleDev: string;
        modRegleVersementDev: string;
        canalDeDistribution: string;
        idws: string;
        ouvertureCompteSupEchCredit: boolean;
        constructor(dossier?: IDossierComplet, identifiantRedacteurActe?: string);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerDossierRequest {
        versionWsdl: number;
        dateTraitement: string;
        codeApplication: number;
        critereDeRechercheDossier: ICriteresRechercheDossier;
        nombreDossierMaxi: number;
    }
    interface IDossierResume {
        objetLibelle?: string;
        etatLibelle?: string;
        coutDevise?: string;
        actionsAutorisees?: IAutorisationDossier;
        versementDossier?: string;
        dateCreationDossier?: Date;
        libelleEntiteProprietaireDossier?: string;
        libelleAgenceAffectation?: string;
        codeTitreCivilite?: string;
        dateDernierMAJ?: Date;
        codeEtatOuvertureDossier?: number;
        idAgentConnaissanceDossier?: string;
        typeDossier?: string;
        codeTypeObjetCommercialisation?: string;
        codeNatureFinancier?: string;
        codeCategorieEmprunt?: string;
        ville?: string;
        coutTotalObjet?: number;
        idAgentInstructionDossier?: string;
        libelleConventionPres?: string;
        idElementStructureInstruction?: string;
        nomPatrPartc?: string;
        premierPrenomEtatCivilitePartc?: string;
        dateFinValiditeOffre?: Date;
        nombrePeriodeValiditeOffreContrat?: string;
        dateEditionOffre?: Date;
        dateHorizonProjet?: Date;
        codeEtatPresenceChargeDossier?: string;
        codeEtatActvDossier?: string;
        codeTypeEngagement?: string;
        idAgentPourDecisionConf?: string;
        codeTypeElementStructure?: string;
        idAgentBoActuarielChargeDossier?: string;
        idEntitePourTransfertBo?: string;
        codeTypeElementStructureBo?: string;
        premierElementStructure1?: string;
        deuxiemeElementStructure1?: string;
        troisiemeElementStructure1?: string;
        quatriemeElementStructure1?: string;
        cinquiemeElementStructure1?: string;
        sixiemeElementStructure1?: string;
        codeAlerte?: string;
        codeTypeEven?: string;
        codeAlerteEmis?: string;
        numeroAlerte?: number;
        numeroRelationEvenDossier?: number;
        referenceExterneAgentConnaissance?: string;
        idAgentProprietaireDossier?: string;
        premierElementStructure?: string;
        deuxiemeElementStructure?: string;
        troisiemeElementStructure?: string;
        quatriemeElementStructure?: string;
        cinquiemeElementStructure?: string;
        sixiemeElementStructure?: string;
        codeEtatDossier?: string;
        idDossier?: string;
        nomRaisonSocialeEmprunt?: string;
        idEntiteTitulaireClient?: string;
        nomPres?: Date;
        codeVisbInstruction?: string;
        codeDevise?: string;
        codeProcessusInstruction?: string;
        codeTraitementComp?: string;
        codeOrigineDemande?: string;
        codeApplicationChargeDossier?: string;
        codeImprParExpressionVersement?: string;
        codeEtapeSimulation?: string;
        idParentPrincipal?: string;
        critereRechercheApplication1?: string;
        critereRechercheApplication2?: string;
        critereRechercheApplication3?: string;
        critereRechercheApplication4?: string;
        critereRechercheApplication5?: string;
        anoCtlOuvrtDossier?: Modele.IAnomalieLecture[];
    }
    interface ICriteresRechercheDossier {
        idAgentProprietaireDossier?: string;
        premierElementStructure?: string;
        deuxiemeElementStructure?: string;
        troisiemeElementStructure?: string;
        quatriemeElementStructure?: string;
        cinquiemeElementStructure?: string;
        sixiemeElementStructure?: string;
        codeEtatDossier?: number;
        codeTypeDestinataire?: number;
        idDossier: string;
        nomRaisonSocialeEmprunt?: string;
        codeTypeObjetCommercialisation?: string;
        referenceExterneDossier?: string;
        idEntiteTitulaireClient?: string;
        dateDebutPeriode?: string;
        dateFinPeriode?: string;
        dateDebutPeriode1?: string;
        dateFinPeriode1?: string;
        nomPres?: string;
        dateDebutPeriodeSigneNotaire?: string;
        dateFinPeriodeSigneNotaire?: string;
        codeVisbInstruction?: number;
        codeDevise?: string;
        codeProcessusInstruction?: string;
        codeTraitementComp?: string;
        codeOrigineDemande?: number;
        codeApplicationChargeDossier?: number;
        codeImprParExpressionVersement?: number;
        codeEtapeSimulation?: number;
        idParentPrincipal?: string;
        critereRechercheApplication1?: string;
        critereRechercheApplication2?: string;
        critereRechercheApplication3?: string;
        critereRechercheApplication4?: string;
        critereRechercheApplication5?: string;
        suiteDossier?: string;
        typeSgn?: number;
        etatSgnElec?: string;
        nouveauSuivi?: boolean;
        sansSuite?: boolean;
        onglet?: number;
        pourPriseEnChargeBO?: boolean;
        pourMoi?: boolean;
        pourEDS?: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ILireElementsRequest {
        identifiantDossier: string;
        listeIdentifiantElement: Array<string>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IRelationPersonne {
        codeNatureRelation: string;
        idPersonne2: string;
        idws: string;
        description?: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeProrogationDossier {
        dossierResume: IDossierResume;
        delaiSaisi: string;
        forcerProrogation: boolean;
    }
    interface IRetourProrogationDossier {
        listeAnomalies: Array<IAnomalieLecture>;
        estProroge: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IRechercherDossierRequest {
        versionWsdl: number;
        dateTraitement: string;
        applicationCharge: number;
        crtrRecherche: ICriteresRechercheDossier;
        nombreDossierMaximum: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreerProjetRequest {
        versionWsdl: number;
        dateTraitement: string;
        applicationCharge: number;
        idClientBancaire: string;
        typeObjetCommercialisation: string;
        typeObjetReglemente: string;
        coutTotalObjet: number;
        montantApportPersonne: number;
        idProduit: string;
        canalDeCreation: string;
        codeDevise: string;
        identifiantPourLeCompteDe?: string;
    }
    interface IElementSchema {
        idws: string;
        description: string;
    }
    interface IBlocNotesSchema {
        typeBlocNote: string;
        idws: string;
        description: string;
    }
    interface IClausePersonnaliseeSchema {
        destinataireClausePersonne: number;
        idws: string;
        description: string;
    }
    interface IAlerteEnSortieSchema {
        codeAlerte: string;
        numberEmissionAlerte: number;
        idws: string;
        description: string;
    }
    interface IAlerteEnEntreeSchema {
        codeAlerte: number;
        numberEmissionAlerte: number;
        idws: string;
        description: string;
    }
    interface IAvisSchema {
        codeTypologieAvis: string;
        numberSaisieAvis: number;
        idws: string;
        description: string;
    }
    interface IEvenementSchema {
        codeTypeEven: string;
        numberEffetEven: number;
        idws: string;
        description: string;
        dateEffetEven?: string;
    }
    interface IVersementSchema {
        pourcentageVersement: number;
        idws: string;
        description: string;
    }
    interface IRedacteurActeSchema {
        idPersonneSI: string;
        idws: string;
        description: string;
    }
    interface IRessourceSchema {
        typeRessource: string;
        montantRessource: number;
        nombrePeriodeParAn: number;
        idws: string;
        description: string;
    }
    interface IChargeSchema {
        typeDech: string;
        montantCharge: number;
        nombrePeriodeParAn: number;
        idws: string;
        description: string;
    }
    interface IPhaseCreditExistantSchema {
        codeTypePhase: string;
        idws: string;
        description: string;
    }
    interface ICreditExistantSchema {
        montantRestantDu: number;
        phasesCreditExistant: Array<IPhaseCreditExistantSchema>;
        idws: string;
        description: string;
    }
    interface IRevenuFiscalSchema {
        montantRevnMeng: number;
        idws: string;
        description: string;
    }
    interface IPatrimoineImmobilierSchema {
        naturePatrimoineImmobilier: number;
        valeurActuarielPatrimoine: number;
        idws: string;
        description: string;
    }
    interface IEmprunteurSchema extends IElementSchema {
        /**
         * IdwsPersonnes
         */
        idwsPersonnes: Array<string>;
        /**
         * Ressources
         */
        ressources: Array<IRessourceSchema>;
        /**
         * Charges
         */
        charges: Array<IChargeSchema>;
        /**
         * Comptes
         */
        comptes: Array<ICompteSchema>;
        /**
         * RevenusFiscaux
         */
        revenusFiscaux: Array<IRevenuFiscalSchema>;
        /**
         * PatrimoinesImmo
         */
        patrimoinesImmobilier: Array<IPatrimoineImmobilierSchema>;
    }
    interface IFamilleEpargneSchema {
        codeFamilleProduitAdresse: string;
        montantValeurEpargneAvenantOper: number;
        idws: string;
        description: string;
    }
    interface ICompteSchema {
        numeroCompte: string;
        typeCompte: string;
        composition: string;
        idws: string;
        description: string;
    }
    interface ICompteProfessionnelSchema {
        idws: string;
        description: string;
    }
    interface ICompteDepotSchema {
        idws: string;
        description: string;
    }
    interface IRelationEntrePersonnesSchema {
        codeNatureRelation: string;
        idPersonne2: string;
        idws: string;
        description: string;
    }
    interface IComplementFicheContactSchema {
        idws: string;
        description: string;
    }
    interface IPersonneSchema {
        codeTypePersonne: number;
        nomRaisonSociale: string;
        idPersonneSI: string;
        roles: Array<string>;
        ressources: Array<IRessourceSchema>;
        charges: Array<IChargeSchema>;
        famillesEpargne: Array<IFamilleEpargneSchema>;
        comptes: Array<ICompteSchema>;
        relationsEntrePersonnes: Array<IRelationEntrePersonnesSchema>;
        complementFicheContact: IComplementFicheContactSchema;
        comptesPrelVersementModalite: Array<ICompteSchema>;
        idws: string;
        description: string;
    }
    interface IPersonneMoraleSchema extends IPersonneSchema {
        listeIdPersonnePhys: Array<string>;
        idws: string;
        description: string;
    }
    interface IOppositionSchema {
        codeOpposition: string;
        numberDebutOpposition: number;
        numberFinOpposition: number;
        idws: string;
        description: string;
    }
    interface IInterditBancaireSchema {
        idws: string;
        description: string;
    }
    interface IActiviteSchema {
        codeClasseRisqueCSP: number;
        idws: string;
        description: string;
    }
    interface IPersonnePhysiqueSchema extends IPersonneSchema {
        oppositions: Array<IOppositionSchema>;
        interditBancaire: IInterditBancaireSchema;
        activite: IActiviteSchema;
        idws: string;
        description: string;
    }
    interface IBienAVendreSchema {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        prixNetVendeur: number;
        idws: string;
        description: string;
    }
    interface IInfoRegroupementSchema {
        idws: string;
        description: string;
    }
    interface IPretReamenageSchema {
        codeBanque: string;
        idCreditGestion: string;
        montantRestantDuSurPretRefn: number;
        informationRegroupement: IInfoRegroupementSchema;
        idws: string;
        description: string;
    }
    interface IReamenagementSchema {
        typeReamenagement: number;
        capitalRestantDu: number;
        pretsReamenages: Array<IPretReamenageSchema>;
        idws: string;
        description: string;
    }
    interface IAplSchema extends IElementSchema {
        montantAPL: number;
        typeAPL: number;
    }
    interface ICreditExterneSchema {
        libletblPret: string;
        montantCapital: number;
        tegActu: number;
        idws: string;
        description: string;
    }
    interface IPalierContraintSchema {
        numberDebutPeriode: number;
        durePalier: number;
        montantEcheance: number;
        idws: string;
        description: string;
    }
    interface IRemiseClientSchema extends IElementSchema {
        montantApplication: number;
        tauxApplication: number;
    }
    interface ITrancheMontantSchema extends IElementSchema {
        tauxTrancheMontant: number;
        debutTrancheMontant: number;
        finTrancheMontant: number;
        remiseClient: IRemiseClientSchema;
    }
    interface ICotisationSchema extends IElementSchema {
        tauxCotisation: number;
        montantCotisation: number;
        nombrePeriodeApplicationCotisation: number;
        partFinancier: number;
        montantFrsGarantie: number;
        typeAccessoire: string;
        remiseClient: IRemiseClientSchema;
        tranchesMontant: ITrancheMontantSchema[];
    }
    interface ICotisationTrancheAgeSchema {
        idws: string;
        description: string;
    }
    interface ICotisationPhaseSchema {
        idws: string;
        description: string;
    }
    interface ICotisationDerogationSchema {
        idws: string;
        description: string;
    }
    interface ICotisationPeriodeSchema {
        idws: string;
        description: string;
    }
    interface ICouvertureCreditSchema extends IElementSchema {
        montantCouverture: number;
        quotientCouverture: number;
        idCredit: string;
        cotisations: ICotisationSchema[];
    }
    interface IAccessoireSchema extends IElementSchema {
        couverturesCredits: ICouvertureCreditSchema[];
        codeTypeAccessoire: string;
    }
    interface IAccessoireComplementaireSchema {
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
        idws: string;
        description: string;
    }
    interface IAccessoireLieProduitSchema {
        codeTypeAccessoire: string;
        idProduitFinancier: string;
        idws: string;
        description: string;
    }
    interface IAvisOrganismeExterneSchema extends IElementSchema {
        codeDecision: string;
        dateAvis: string;
    }
    interface IAssuranceSchema extends IAccessoireSchema {
        idPersonne: string;
        idConvention: string;
        avisOrganismeExterne: IAvisOrganismeExterneSchema[];
        derniersAvisOrganismeExterne: IAvisOrganismeExterneSchema[];
    }
    interface IAjouterGarantieRequest {
        identifiantDossier: string;
        listeIdentifiantCredCouv: Array<string>;
        natureGarantie: string;
        identifiantGarant: string;
    }
    interface IAjouterGarantiePersoConvRequest {
        identifiantDossier: string;
        listeIdCreditCouvParGarantie: Array<string>;
        idConventionGarantie: string;
    }
    interface IGarantieSchema extends IAccessoireSchema {
        idPersonne: string;
        financableEstVisible: boolean;
        financableEstActif: boolean;
        financableEstCoche: boolean;
    }
    interface IBienPorteEnGarantieSchema extends IElementSchema {
    }
    interface IHypothequeAerienneSchema {
        idws: string;
        description: string;
    }
    interface IBonDeCaisseCapitalisationSchema {
        idws: string;
        description: string;
    }
    interface IDelegationLoyerSchema {
        idws: string;
        description: string;
    }
    interface ICessionDaillyAutreSchema {
        idws: string;
        description: string;
    }
    interface ICessionDaillyLoyerImmeubleSchema {
        idws: string;
        description: string;
    }
    interface IGageVehiculeSchema {
        idws: string;
        description: string;
    }
    interface IGageCompteInstrumentFinancierSchema {
        idws: string;
        description: string;
    }
    interface INantissementPartSocialeSchema {
        idws: string;
        description: string;
    }
    interface INantissementValeurMaterielleSchema {
        idws: string;
        description: string;
    }
    interface INantissementValeurMobiliereSchema {
        idws: string;
        description: string;
    }
    interface INantissementFondDeCommerceSchema {
        idws: string;
        description: string;
    }
    interface IProprietaireSchema {
        idws: string;
        description: string;
    }
    interface IHypothequeImmobiliereSchema {
        proprietaires: Array<IProprietaireSchema>;
        idws: string;
        description: string;
    }
    interface IBienDiversSchema {
        idws: string;
        description: string;
    }
    interface IVersementAttenduSchema {
        montantVersement: number;
        idws: string;
        description: string;
    }
    interface IContratAssuranceSchema {
        versementsAttendus: Array<IVersementAttenduSchema>;
        idws: string;
        description: string;
    }
    interface IAntichreseSchema {
        idws: string;
        description: string;
    }
    interface ICreditHDSchema extends IElementSchema {
        referencePret: string;
        montantPret: number;
        idCreditExnt: string;
    }
    interface IGarantieHDSchema extends IElementSchema {
        natureGarantieHorsDossier: string;
        idOrigineGarantieHorsDossier: string;
        creditsHD: ICreditHDSchema[];
    }
    interface IGarantieReelleSchema extends IGarantieSchema {
        bienPorteEnGarantie: IBienPorteEnGarantieSchema;
        garantieHD: IGarantieHDSchema;
    }
    interface IGarantiePersonnelleSchema extends IGarantieSchema {
        avisOrganismeExterne: IAvisOrganismeExterneSchema[];
        derniersAvisOrganismeExterne: IAvisOrganismeExterneSchema[];
    }
    interface IServiceSurObjetSchema {
        idConvention: string;
        idws: string;
        description: string;
    }
    interface ITauxFixeLecture extends TauxInteretAnnuel {
        idws: string;
        description: string;
    }
    interface ITauxMixteLecture extends TauxInteretAnnuel {
        repartition: number;
        tauxIndiceCmpstTauxMixte: ITauxIndiceLecture;
        tauxFixeCmpstTauxMixte: ITauxFixeLecture;
        idws: string;
        description: string;
    }
    interface IEcheanceOptimisationSchema {
        montantRemboursementSaisie: number;
        codeTypeElementSaisie: number;
        idws: string;
        description: string;
    }
    interface ICreditPalierTauxSchema {
        tauxInterieurPalier: TauxInteretAnnuel;
        dureeEnMois: number;
        echeancesOptimisation: Array<IEcheanceOptimisationSchema>;
        idws: string;
        description: string;
    }
    interface ICreditParamIndexationSchema {
        numeroIndiceRevisionCredit: number;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionSchema {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        creditParamsIndexation: Array<ICreditParamIndexationSchema>;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionParPhaseSchema extends ICreditParamRevisionSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseSchema {
        dureeEnMois: number;
        creditPaliersTaux: Array<ICreditPalierTauxSchema>;
        creditParamsRevisionParPhase: ICreditParamRevisionParPhaseSchema;
        idws: string;
        description: string;
    }
    interface ICreditPalierProgressionSchema {
        idws: string;
        description: string;
    }
    interface IComplementPhasePretCombineSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseAmortissementSchema extends ICreditPhaseSchema {
        creditPaliersProgression: Array<ICreditPalierProgressionSchema>;
        complementPhasePretCombine: IComplementPhasePretCombineSchema;
        idws: string;
        description: string;
    }
    interface ICreditPhaseDiffereAmortissementSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseDiffereTotalSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseMobilisationSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhasePrefinancementSchema {
        idws: string;
        description: string;
    }
    interface ISuiviPlanifieSchema {
        idws: string;
        description: string;
    }
    interface IPayeurSchema {
        pourcentagePaiementCredit: number;
        idPersonne: string;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionParPeriodeSchema {
        idws: string;
        description: string;
    }
    interface ICreditModaliteSchema {
        idModeleCalculImpe: string;
        numeroModeleRemboursementAnticipe: number;
        idws: string;
        description: string;
    }
    interface ICreditBonificationInfoSchema {
        codeInformation: string;
        codeDetail: string;
        idws: string;
        description: string;
    }
    interface ICreditBonificationSchema {
        idConvention: string;
        information: Array<ICreditBonificationInfoSchema>;
        idws: string;
        description: string;
    }
    interface IDroitUtiliseSchema {
        montantDroitAcqsUtilisation: number;
        idTrancheEL: string;
        idws: string;
        description: string;
    }
    interface ICompteCourantSchema {
        montantHypothequeCapital: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
        idws: string;
        description: string;
    }
    interface IVariationDureeSchema {
        nombrePeriodeVartPossibilite: number;
        typeButoireVartDure: number;
        idws: string;
        description: string;
    }
    interface IVersementFractionneSchema {
        nombreVersementSouh: number;
        montantVersementFraction: number;
        idws: string;
        description: string;
    }
    interface IComplementEPSSchema {
        idDossierInstruction: string;
        idEPS: string;
        libelleLongEngagementParSigne: string;
        idExterneAlis: string;
        referenceExterneDossierParent: string;
        idws: string;
        description: string;
    }
    interface ITACreditEPSSchema {
        numberEcheanceMER: number;
        montantCapitalAmortissement: number;
        montantCapitalRestantDu: number;
        idws: string;
        description: string;
    }
    interface ICreditEPSSchema {
        codeDevise: string;
        quotientCreditCouvertureParEPS: number;
        referenceExterneCreditCouvertureEPS: string;
        taCreditCouvertureParEPS: Array<ITACreditEPSSchema>;
        idws: string;
        description: string;
    }
    interface ICreditInterneSchema {
        idProduitFinancier: string;
        montantCapitalCredit: number;
        tegProp: number;
        phases: Array<ICreditPhaseSchema>;
        remiseClient: IRemiseClientSchema;
        suivisPlanifies: Array<ISuiviPlanifieSchema>;
        payeurs: Array<IPayeurSchema>;
        creditParamsRevision: Array<ICreditParamRevisionSchema>;
        creditModalite: ICreditModaliteSchema;
        creditBonification: ICreditBonificationSchema;
        droitsUtilises: Array<IDroitUtiliseSchema>;
        compteCourant: ICompteCourantSchema;
        variationsDuree: Array<IVariationDureeSchema>;
        versementFractionne: IVersementFractionneSchema;
        complementEPS: IComplementEPSSchema;
        creditsEPS: Array<ICreditEPSSchema>;
        idws: string;
        description: string;
    }
    interface IPlanFinancementSchema extends IElementSchema {
        montantTotalEmpruntPlan: number;
        montantApportPersonne: number;
        montantPreEchPhase: number;
        aPL: IAplSchema;
        synthesePlanFinancement: ISynthesePlanFinancementSchema;
        creditsExternes: Array<ICreditExterneSchema>;
        paliersContraints: Array<IPalierContraintSchema>;
        accessoiresComplementaires: Array<IAccessoireComplementaireSchema>;
        accessoiresLiesProduit: Array<IAccessoireLieProduitSchema>;
        assurances: Array<IAssuranceSchema>;
        garanties: Array<IGarantieSchema>;
        servicesSurObjet: Array<IServiceSurObjetSchema>;
        creditsInternes: Array<ICreditInterneSchema>;
        refusAssuranceExternes: Array<IRefusAssuranceExterneSchema>;
        originesApport: Array<IOrigineApportSchema>;
        tauxApportPersonnel: number;
        loanToValue: number;
        libelle?: string;
        dureeMax?: number;
    }
    interface ISynthesePlanFinancementSchema extends IElementSchema {
        coutTotalTTC: number;
        coutTotalFraisGarantie: number;
        coutTotalFraisDossier: number;
        montantApportPersonnel: number;
        mtfaso_MontantConcoursInternes: number;
        mkface_MontantConcoursExternes: number;
        coutTotalFraisCourtage: number;
        montantMensualiteAvecAssurance: number;
        montantMensualiteNet: number;
    }
    interface IRefusAssuranceExterneSchema extends IElementSchema {
        idDossierInstruction: string;
        numeroRelatifPlanDossier: number;
        identifiantpersonne: string;
        numeroRangRefusProposition: number;
        compagnieAssurance: string;
        referenceContrat: string;
        dateReceptionDemande: string;
        dateImpressionDemande: string;
        codeDecision: number;
        rolePersonne: string;
    }
    interface IProjetSchema {
        typeObjetFinancier: string;
        typeObjetRegle: string;
        codeNatureFinancier: string;
        coutTotalObjet: number;
        bienAVendre: IBienAVendreSchema;
        reamenagement: IReamenagementSchema;
        plansFinancement: Array<IPlanFinancementSchema>;
        idPlanRetn: string;
        idws: string;
        description: string;
        butLocatif: IButLocatifSchema;
    }
    interface IBienConsoFinanceSchema {
        idws: string;
        description: string;
    }
    interface IAutoMotoSchema {
        idws: string;
        description: string;
    }
    interface IBienDetailleSchema {
        idws: string;
        description: string;
    }
    interface IBienEquipementProSchema {
        idws: string;
        description: string;
    }
    interface ITresorerieFinanceeSchema {
        idws: string;
        description: string;
    }
    interface IProjetNonImmobilierSchema extends IProjetSchema {
        bienConsommationFinance: IBienConsoFinanceSchema;
        bienEquipementPro: IBienEquipementProSchema;
        tresorerieFinancee: ITresorerieFinanceeSchema;
        idws: string;
        description: string;
    }
    interface IPromotionImmobiliereSchema {
        intituleProgramme: string;
        situationProgramme: number;
        idws: string;
        description: string;
    }
    interface ITerrainFinanceSchema {
        coutTerr: number;
        idws: string;
        description: string;
    }
    interface IBienSousJacentSchema {
        idws: string;
        description: string;
    }
    interface ITerrainSousJacentSchema {
        idws: string;
        description: string;
    }
    interface ISoulteFinanceeSchema {
        montantSoul: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IDetailCoutObjetSchema {
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idws: string;
        description: string;
    }
    interface ITravauxFinancesSchema {
        coutTravaux: number;
        bienSousJacent: IBienSousJacentSchema;
        detailsCoutObjet: Array<IDetailCoutObjetSchema>;
        idws: string;
        description: string;
    }
    interface IConstructionFinanceeSchema {
        coutConstructionFinancier: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IBatimentHabitableFinanceSchema {
        coutAcqsBatimentHabitation: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IButLocatifSchema {
        montantAnnuLoyePerc: number;
        idws: string;
        description: string;
    }
    interface ITrancheELSchema {
        montantDroitAcqs: number;
        idws: string;
        description: string;
    }
    interface IContratEpargneLogementSchema {
        codeTypeEL: number;
        idContratEpargneLogement: string;
        tranchesEL: Array<ITrancheELSchema>;
        idPersonneBeneficiaire: string;
        idws: string;
        description: string;
    }
    interface IProjetImmobilierSchema extends IProjetSchema {
        promotionImmobiliere: IPromotionImmobiliereSchema;
        terrainFinance: ITerrainFinanceSchema;
        soulteFinance: ISoulteFinanceeSchema;
        travauxFinance: ITravauxFinancesSchema;
        constructionFinance: IConstructionFinanceeSchema;
        batimentHabitableFinance: IBatimentHabitableFinanceSchema;
        butLocatif: IButLocatifSchema;
        contratsEL: Array<IContratEpargneLogementSchema>;
        idws: string;
        description: string;
    }
    interface IProjetEPSSchema {
        idws: string;
        description: string;
    }
    interface IComplementDossierSchema {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        numberSaisieSurInternet: number;
        heureSaisieSurInternet: number;
        idws: string;
        description: string;
    }
    interface IPoolEPSSchema {
        idDossierInstruction: string;
        idOprtCess: string;
        idCadreFinancier: string;
        codeNaturePool: number;
        codeOrigineCess: number;
        typeSousRolePool: number;
        idws: string;
        description: string;
    }
    interface IAgentSchema {
        idAgent: string;
        lblAgent: string;
        estAgentBO: boolean;
        estBackup: boolean;
        estAgentExterne: boolean;
        idEDSGestion: string;
        lblAgenceRat: string;
        cdeAgentRat: string;
        typeUtilisateurCo: number;
        etabBaofCentral: number;
        idEDSBaofCentral: string;
        techniqueDeVente: number;
        derogationBornes: boolean;
        role: number;
    }
    interface ICopierDossierRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        applicationCharge: number;
        identifiantDossierCopr: string;
    }
    interface IOuvrirDossierRequest {
        versionWsdl: number;
        dateTraitement: string;
        identifiantDossier: string;
        codeApplication: number;
        /**
         * Consultation = 0
         * Instruction = 1,
         * Decision = 2,
         * Maj = 3, (Mise à jour administrative ou conformité)
         * Conformite = 4, (Ouverture pour controle de conformite)
         * PriseEnChargeBO = 5 (Action où le l'agent BO se transfère un dossier (par le lien Prendre en charge))
         */
        actionSurDossier: number;
        ignorerControlModeOuverture: boolean;
    }
    interface IDossierSchema extends IElementSchema {
        etatDossier: number;
        typeMoteurADR: number;
        sousEtatDossier: number;
        codeDevise: string;
        estEcoPtzCopro: boolean;
        estDossierPartenaire: boolean;
        blocNotesDivers: Array<IBlocNotesSchema>;
        clausesPersonnalisees: Array<IClausePersonnaliseeSchema>;
        alertesEnSortie: Array<IAlerteEnSortieSchema>;
        alertesEnEntree: Array<IAlerteEnEntreeSchema>;
        avis: Array<IAvisSchema>;
        evenements: Array<IEvenementSchema>;
        versements: Array<IVersementSchema>;
        redacteurActe: IRedacteurActeSchema;
        emprunteur: IEmprunteurSchema;
        garants: IGarantSchema[];
        personnes: Array<IPersonneSchema>;
        projet: IProjetSchema;
        complementDossier: IComplementDossierSchema;
        poolEPS: IPoolEPSSchema;
        agents: IAgentSchema[];
        anoCtlOuvrtDossier: IAnomalieLecture[];
        offrePretIndustrialisee: IOffrePretIndustrialiseeSchema;
    }
    interface IGarantSchema {
        idwsPersonnes: string[];
        ressources: IRessourceSchema[];
        charges: IChargeSchema[];
        idws: string;
        description: string;
    }
    interface IOrigineApportSchema extends IElement {
        idDossierInstruction: string;
        numeroPlanDossier: number;
        codeOrigine: number;
        montantApportOrigine: number;
    }
    interface IOffrePretIndustrialiseeSchema extends IElementSchema {
        editionEligible: boolean;
        editionEligibleEnAgence: boolean;
        libelleDossier: string;
        dossierGdeACree: boolean;
        etatDossierEdition: string;
        listeDocumentsSchema: IDocumentOffreIndustrialiseeSchema;
    }
    interface IDocumentOffreIndustrialiseeSchema extends IElementSchema {
        documentCommun: string;
        codeEntiteFonctionnelle: string;
        idEntiteFonctionnelle: string;
        exemplaire: string;
        codeDocument: string;
        libelleDocument: string;
        indicateurCasEcheant: string;
        etatDocument: string;
        numeroOrdre: number;
        origine: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITravauxFinances {
        coutTravaux: number;
        dateFinTravaux: string;
        surfHabitationCree: number;
        typeTravauxCadreEcpt: number;
        surfHabitationTotalApreTravaux: number;
        dateConstructionBatimentSousJacent: string;
        surfHabitationBatimentSousJacent: number;
        dateAcqsBatimentSousJacent: string;
        typeLogementBatimentSous: number;
        nbreLogementBatimentSous: number;
        idProjet: string;
        idBienSousJacent: string;
        listeIdDetlCoutTravauxEcpt: Array<string>;
        idws: string;
    }
    class TravauxFinancesMaj {
        coutTravaux: number;
        dateFinTravaux: string;
        surfHabitationCree: number;
        typeTravauxCadreEcpt: number;
        dateConstructionBatimentSousJacent: string;
        surfHabitationBatimentSousJacent: number;
        dateAcqsBatimentSousJacent: string;
        typeLogementBatimentSous: number;
        nbreLogementBatimentSous: number;
        idws: string;
        constructor(travaux?: Modele.ITravauxFinances);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IParamsImpressionEL {
        listeDroitsAcquis: Array<ApiInstuctionCredit.Modele.IDroitAcquisEL>;
        listeDroitsAPrets: Array<ApiInstuctionCredit.Modele.IDroitAPretEL>;
        periodiciteDroits: number;
        dureeAnneeCredit: number;
        taux: number;
        montant: number;
        echeance: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDataTableauIEmissionDocuments {
        listeDocuments: Array<IInfoDocument>;
        listeDocumentsSelected: Array<IInfoDocument>;
        listeDocumentsDisabled: Array<IInfoDocument>;
    }
    interface IDataFicheSuiveuse extends IDataTableauIEmissionDocuments {
        afficherFicheSuiveuse: boolean;
    }
    interface IDataPersonneAssuranceExterne extends IDataTableauIEmissionDocuments {
        personne: string;
    }
    interface IEmissionDocuments {
        listePropositions: Array<IProposition>;
        listeErreursImpression: Array<string>;
        listeAnomalies: Array<IAnomalieLecture>;
        dataClients: IDataTableauIEmissionDocuments;
        dataFicheSuiveuse: IDataFicheSuiveuse;
        listeAssuranceExterneByPersonne: Array<IDataPersonneAssuranceExterne>;
    }
    class EmissionDocuments implements IEmissionDocuments {
        listePropositions: Array<IProposition>;
        listeErreursImpression: Array<string>;
        listeAnomalies: Array<IAnomalieLecture>;
        dataClients: IDataTableauIEmissionDocuments;
        dataFicheSuiveuse: IDataFicheSuiveuse;
        listeAssuranceExterneByPersonne: Array<IDataPersonneAssuranceExterne>;
        constructor(propositions: Array<IProposition>, afficherFS: boolean);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterContratEpargneLogementRequest {
        identifiantDossier: string;
        contratEpargneLogementMAJ: ContratEpargneLogementMaj;
    }
    interface ICalculerCreditELRequest {
        identifiantDossier: string;
        idwsCredit: string;
        periodicite: string;
        duree: number;
        montant: number;
        estEcheance: boolean;
        estManuel: boolean;
    }
    interface IEditerDocumentELRequest {
        identifiantDossier: string;
        identifiantWs: string;
        sdImpressionEL: IParamsImpressionEL;
    }
    interface IListerDroitsAPretELRequest {
        identifiantDossier: string;
        idwsCredit: string;
        periodicite: string;
    }
    interface IContratEpargneLogementLecture extends IElement {
        /**
         * Cdfppr_CodeTypeEL
         */
        codeTypeEL: number;
        /**
         * Cdfadv_CodeDevsCpte
         */
        codeDeviseCompte: string;
        /**
         * TypeDrt
         */
        typeDroit: number;
        /**
         * Ctfpli_LienParnAvecCedn
         */
        lienParentAvecCedn: number;
        /**
         * Nufpct_IdntContEl
         */
        idContratEpargneLogement: string;
        /**
         * Lbfptc_LiblTitlCont
         */
        libelleTitulaireContrat: string;
        /**
         * Cdfpbc_CodeIndicBenePrimEl
         */
        codeIndiceBenePrimeEpargneLogement: number;
        /**
         * Ddfpct_DateOuvrCont
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureContrat: string;
        /**
         * Dtfprf_DateCltrCont
         * Type date au format yyyy-MM-dd
         */
        dateClotureContrat: string;
        /**
         * Cdfifr_CodeForc
         */
        codeForc: number;
        /**
         * Cdfiel_CodeRaptContEparLogm
         */
        codeRaptContratEpargneLogement: number;
        /**
         * Lbfpet_EtabOrigInte
         */
        etabOrigineInterieur: string;
        /**
         * Idfppc_IdntPersApprDrtCont
         */
        idPersonneApportDroitContrat: string;
        /**
         * Cdfpdj_CodeDrtJust
         */
        codeDroitJustificatif: number;
        /**
         * Cdfird_CodeResrDrtAcqs
         */
        codeResrDroitAcqs: number;
        /**
         * ContratPostReforme
         */
        contratPosteReforme: boolean;
        /**
         * ListIdntTrncEl
         */
        listeIdTrancheEpargneLogement: Array<string>;
        /**
         * IdwsPersBenef
         */
        idPersonneBeneficiaire: string;
    }
    interface IContratEpargneLogement extends IContratEpargneLogementLecture {
        titre?: string;
    }
    class ContratEpargneLogementMaj implements IContratEpargneLogement {
        codeTypeEL: any;
        codeDeviseCompte: string;
        lienParentAvecCedn: number;
        libelleTitulaireContrat: string;
        codeIndiceBenePrimeEpargneLogement: number;
        dateOuvertureContrat: string;
        dateClotureContrat: string;
        codeForc: number;
        codeRaptContratEpargneLogement: number;
        idPersonneApportDroitContrat: string;
        codeDroitJustificatif: number;
        codeResrDroitAcqs: number;
        rapatrierTranche: boolean;
        droitEstCede: boolean;
        idContratEpargneLogement: string;
        typeDroit: number;
        etabOrigineInterieur: string;
        contratPosteReforme: boolean;
        listeIdTrancheEpargneLogement: Array<string>;
        idPersonneBeneficiaire: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        idws: string;
        attributionPrime: boolean;
        constructor();
        constructor(contratEL: IContratEpargneLogement);
    }
    interface ITrancheEL {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: string;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
        idDroitUtilisation?: string;
        idContratEpargneLogement?: string;
        idws: string;
    }
    /**
     * Objet qui permet d'etre manipulé dans les tableaux
     */
    class TrancheEL implements ITrancheEL {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: string;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
        idDroitUtilisation: string;
        idContratEpargneLogement: string;
        idws: string;
        libelleResrDroitAcqs: string;
        montantDroitAcqsInitial: number;
        montantDroitUtilises: number;
        constructor(iTrancheEL: ITrancheEL, libelleResrDroitAcqs: string, montantDroitUtilises: number);
    }
    class TrancheMaj implements ITrancheEL {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: string;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
        idws: string;
        constructor();
        constructor(trancheEL: ITrancheEL);
    }
    interface ILienParente {
        lienParentAvecCedn: number;
        libelleLienParent: string;
    }
    interface IResultatCalculEnCoursEL {
        mntMaximumAutorisePEL: number;
        mntMaximumAutoriseCEL: number;
        mntMaximumAutorisePELCEL: number;
    }
    interface IMontantEncoursEpargneLogement {
        dateDebutValidite: string;
        dateFinValidite: string;
        montantDencPrtsPEL: number;
        montantDencPrtsLEL: number;
        montantDencPrtsEpargneLogement: number;
        dateCreation: string;
    }
    interface IDroitAPretEL {
        duree: number;
        tauxMoyen: number;
        pretMaximum: number;
        echHorsAccessoire: number;
        echAvecAccessoire: number;
        coutHorsAccessoire: number;
        coutAvecAccessoire: number;
    }
    /**
     * Objet qui permet d'etre manipulé dans les tableaux
     */
    class DroitAPretEL implements IDroitAPretEL {
        duree: number;
        tauxMoyen: number;
        pretMaximum: number;
        echHorsAccessoire: number;
        echAvecAccessoire: number;
        coutHorsAccessoire: number;
        coutAvecAccessoire: number;
        indexTmp: number;
        constructor(iDroitAPretEL: IDroitAPretEL, index: number);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerDroitsAcquisELRequest {
        identifiantDossier: string;
        idwCredit: string;
        periodicite: string;
    }
    interface IResultatCalculEL {
        critereAjustementCreditLecture: ICritereAjustementCredit;
        listeDroitAcquisELLecture: Array<IDroitAcquisEL>;
    }
    interface ICritereAjustementCredit {
        montantPret: number;
        montantEcheance: number;
        dureeCredit: number;
        alertePrime: boolean;
        texteAlertePrime: string;
        tauxActuariel: number;
        montantRAF: number;
    }
    interface IDroitAcquisEL {
        idwsTrancheEL: string;
        idDossier: string;
        idContrat: string;
        numeroRelatifDossier: number;
        dateOuvertureContrat: string;
        tauxEpargne: number;
        montantDroitsAcquis: number;
        dateArrete: string;
        lienParenteAvecCedant: string;
        cdfadv: string;
        montantDroitsAcquisUtilises: number;
        tauxPretCatalogue: number;
        capMaximumOct: number;
        montantPretOctroye: number;
        echMaximumOct: number;
        montantEchUtilise: number;
        montantLimite: number;
        droitUtilisable: boolean;
        priseEnCompte: string;
        contratPosteReforme: boolean;
    }
    /**
     * Objet qui permet d'etre manipulé dans les tableaux
     */
    class DroitAcquisEL implements IDroitAcquisEL {
        idwsTrancheEL: string;
        idDossier: string;
        idContrat: string;
        numeroRelatifDossier: number;
        dateOuvertureContrat: string;
        tauxEpargne: number;
        montantDroitsAcquis: number;
        dateArrete: string;
        lienParenteAvecCedant: string;
        cdfadv: string;
        montantDroitsAcquisUtilises: number;
        tauxPretCatalogue: number;
        capMaximumOct: number;
        montantPretOctroye: number;
        echMaximumOct: number;
        montantEchUtilise: number;
        montantLimite: number;
        droitUtilisable: boolean;
        priseEnCompte: string;
        contratPosteReforme: boolean;
        priseEnCompteInitial: string;
        montantLimiteInitial: number;
        libelleLienParent: string;
        libellePriseEnCompte: string;
        libelleTaux: string;
        libelleMontantsDroits: string;
        libelleMontantsLimite: string;
        droitUtilise: Modele.IDroitUtiliseSchema;
        constructor(symboleDevise: string, iDroitAcquisEL: IDroitAcquisEL, libelleLienParent: string, droitUtilise: Modele.IDroitUtiliseSchema);
    }
    class DroitUtiliseMaj {
        idws: string;
        montantDroitAcqsUtilisation: number;
        montantDroitLimite: number;
        constructor(droitUtilise: Modele.IDroitUtiliseSchema, montant: number);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ISaisiesComplementaireMaj {
        idws: string;
        nomPersonneMorale: string;
        nombreCreditsAModifierACA: number;
        listeDonneesCreditAModifierACA: Array<IDonneesCreditMaj>;
        an1AttestationPTZ: boolean;
        an2AttestationPTZ: boolean;
        an3AttestationPTZ: boolean;
        an4AttestationPTZ: boolean;
        an5AttestationPTZ: boolean;
        an6AttestationPTZ: boolean;
        an7AttestationPTZ: boolean;
        an8AttestationPTZ: boolean;
        an9AttestationPTZ: boolean;
        anXAttestationPTZ: boolean;
        anXIAttestationPTZ: boolean;
        anIIIAttestationPTZ: boolean;
        anIVAttestationPTZ: boolean;
        anXIVAttestationPTZ: boolean;
        valeurConditionGenLIA: boolean;
        visibiliteCheckBoxConditionGenLIA: boolean;
        valeurConditionSpeLIA: boolean;
        visibiliteCheckBoxConditionSpeLIA: boolean;
        nomCopropriete: string;
        adresse1Copropriete: string;
        adresse2Copropriete: string;
        adresse3Copropriete: string;
        typePersonneCopropriete: string;
        mandataireCopropriete: string;
        effetCopropriete: string;
        listeCreditTauxFixe: Array<ICreditTauxFixeMaj>;
        contenuConditionsSuspensives: string;
        presenceEmprunteurIndividuel: boolean;
        libelleEmprunteurIndividuel: string;
        accordConjointEmprunteurIndividuel: boolean;
        libelleConjointEmprunteurIndividuel: string;
        presenceEINonEmprunteur: boolean;
        libelleEINonEmprunteur: string;
        accordConjointEINonEmprunteur: boolean;
        libelleConjointEINonEmprunteur: string;
        dateTransfertBoSuiveuse: string;
        dateDispositionFondsSuiveuse: string;
        dateEnvoiNumerisationSuiveuse: string;
        dateSignatureNotaireSuiveuse: string;
        editionSuiveuse: string;
        statut1Suiveuse: Array<string>;
        statut2Suiveuse: Array<string>;
        statut3Suiveuse: Array<string>;
        numeroDossierAssocieSuiveuse: string;
        corbeilleWorkflowSuiveuse: string;
        commentaireSuiveuse: string;
        indexGarantie: number;
        existeAgrementGarantie: boolean;
        dateAgrementGarantie: string;
        publierGreffeGarantie: boolean;
        conjointsEmprunteursGarantie: string;
        conjointsCautionsGarantie: string;
        dateDebutLigneInvestissement: string;
        dateFinLigneInvestissement: string;
        aTauxFixeLigneInvestissement: boolean;
        tauxFixeLigneInvestissement: string;
        tauxRevisableLigneInvestissement: string;
        referenceIndiceLigneInvestissement: string;
        raisonConstituantMandataire: string;
        nomMandataire: string;
        vertuMandataire: string;
        nombreOutils: number;
        ajoutNotices: boolean;
        numeroOrias: string;
        listeOutil: Array<IOutilMaj>;
        sousignePouvoirNotaire: string;
        datePouvoirNotaire: string;
        nom1PouvoirNotaire: string;
        nom2PouvoirNotaire: string;
        nom3PouvoirNotaire: string;
        nom4PouvoirNotaire: string;
        ribPretDevise: string;
        pretDevise: Array<IPretDeviseMaj>;
        montantMinimumDeblocagePretDevise: string;
        accordPrincipe: boolean;
        rdv: boolean;
        deroulement: boolean;
        raisonCaution: string;
        representantCaution: string;
        enQualiteCaution: string;
        datePouvoirCaution: string;
        nomSocieteEmprunteurBailleur: string;
        capitalEmprunteurBailleur: string;
        siegeEmprunteurBailleur: string;
        lieuRCSEmprunteurBailleur: string;
        numeroRCSEmprunteurBailleur: string;
        dateRCSEmprunteurBailleur: string;
        representantEmprunteurBailleur: string;
        libelleRepresEmprunteurPersonneMorale: string;
        enQualiteEmprunteurPersonneMorale: string;
        datePouvoirEmprunteurPersonneMorale: string;
        listeDonneesCautionPersonneMorale: Array<IDonneesCautionPersonneMoraleMaj>;
        represPersonneMorale: string;
        agissantPersonneMorale: string;
        vertu1PersonneMorale: string;
        vertu2PersonneMorale: string;
        vertu3PersonneMorale: string;
        vertu4PersonneMorale: string;
        vertu5PersonneMorale: string;
        vertu6PersonneMorale: string;
        vertu7PersonneMorale: string;
        vertu8PersonneMorale: string;
        vertu9PersonneMorale: string;
        vertu10PersonneMorale: string;
        vertu11PersonneMorale: string;
        vertu12PersonneMorale: string;
        represPersoMoraleAssurance: string;
        agissantQualitePersoMoraleAssurance: string;
        vertu1PersoMoraleAssurance: string;
        vertu2PersoMoraleAssurance: string;
        datePourvoirPersoMoraleAssurance: string;
        vertu4PersoMoraleAssurance: string;
        compositionOffrePersoMoraleAssurance: string;
        represPreteurCE: string;
        reservesRedacteur: string;
        raisonSocialePersonneMoraleNantissement: string;
        represPersonneMoraleNantissement: string;
        enQualitePersonneMoraleNantissement: string;
        vertu1PersonneMoraleNantissement: string;
        vertu2PersonneMoraleNantissement: string;
        villeTribunal: string;
    }
    interface ICreditTauxFixeMaj {
        referenceIndiceCredit: string;
        tauxFixeCredit: string;
    }
    interface IOutilMaj {
        marqueOutil: string;
        typeOutil: string;
        dateLivraisonOutil: string;
        serieOutil: string;
        prixOutil: string;
        vendIntituleOutil: string;
        vendCpltIntituleOutil: string;
        vendAdresseOutil: string;
        vendCpltAdresseOutil: string;
        vendCPOutil: string;
        vendVilleOutil: string;
        adresseOutil: string;
        cpltAdresseOutil: string;
        cPOutil: string;
        villeOutil: string;
        deplacementOutil: boolean;
    }
    interface IDonneesCautionPersonneMoraleMaj {
        represCautionPersoMorale: string;
        agissantQualitéCaution: string;
        agissantVertuCaution: string;
        agissant3Caution: string;
        agissant4Caution: string;
        agissant5Caution: string;
    }
    interface IPretDeviseMaj {
        identifiantProduitPretDevise: string;
        numeroCreditPlanPretDevise: string;
        typePretDevise: string;
        idggiPretDevise: string;
        cdngPretDevise: string;
        fraisEnDevises: string;
        devisePretDevise: string;
        fraisContrePartiePretDevise: string;
    }
    interface IDonneesCreditMaj {
        idCreditModifie: string;
        montantCreditModifie: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ILabel {
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
    interface IChampTextBox {
        text: string;
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
    interface IFC003DC {
        titre: ILabel;
        represPersonneMorale: IChampTextBox;
        agissantPersonneMorale: IChampTextBox;
        vertu1PersonneMorale: IChampTextBox;
        vertu2PersonneMorale: IChampTextBox;
        vertu3PersonneMorale: IChampTextBox;
        vertu4PersonneMorale: IChampTextBox;
        vertu5PersonneMorale: IChampTextBox;
        vertu6PersonneMorale: IChampTextBox;
        vertu7PersonneMorale: IChampTextBox;
        vertu8PersonneMorale: IChampTextBox;
        vertu9PersonneMorale: IChampTextBox;
        vertu10PersonneMorale: IChampTextBox;
        vertu11PersonneMorale: IChampTextBox;
        vertu12PersonneMorale: IChampTextBox;
    }
    interface IChampRadioButton {
        checked1: boolean;
        checked2: boolean;
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle1: string;
        libelle2: string;
    }
    interface IChampCheckBox {
        checked: boolean;
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
    interface IChampTextBoxDate {
        text: string;
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
    interface IFC003PC {
        titre: ILabel;
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        valeurConditionGenLIA: IChampRadioButton;
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        valeurConditionSpeLIA: IChampCheckBox;
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        nomSocieteEmprunteurBailleur: IChampTextBox;
        capitalEmprunteurBailleur: IChampTextBox;
        siegeEmprunteurBailleur: IChampTextBox;
        lieuRCSEmprunteurBailleur: IChampTextBox;
        numeroRCSEmprunteurBailleur: IChampTextBox;
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        representantEmprunteurBailleur: IChampTextBox;
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IFC003RE {
        titre: ILabel;
        represPersonneMorale: IChampTextBox;
        agissantPersonneMorale: IChampTextBox;
        vertu1PersonneMorale: IChampTextBox;
        vertu2PersonneMorale: IChampTextBox;
        vertu3PersonneMorale: IChampTextBox;
        vertu4PersonneMorale: IChampTextBox;
        vertu5PersonneMorale: IChampTextBox;
        vertu6PersonneMorale: IChampTextBox;
        vertu7PersonneMorale: IChampTextBox;
        vertu8PersonneMorale: IChampTextBox;
        vertu9PersonneMorale: IChampTextBox;
        vertu10PersonneMorale: IChampTextBox;
        vertu11PersonneMorale: IChampTextBox;
        vertu12PersonneMorale: IChampTextBox;
    }
    interface IFC004LA {
        titre: ILabel;
        reservesRedacteur: IChampTextBox;
    }
    interface IFC007ARO {
        contenuConditionsSuspensives: IChampTextBox;
    }
    interface IFC010CP {
        titre: ILabel;
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        valeurConditionGenLIA: IChampRadioButton;
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        valeurConditionSpeLIA: IChampCheckBox;
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        nomSocieteEmprunteurBailleur: IChampTextBox;
        capitalEmprunteurBailleur: IChampTextBox;
        siegeEmprunteurBailleur: IChampTextBox;
        lieuRCSEmprunteurBailleur: IChampTextBox;
        numeroRCSEmprunteurBailleur: IChampTextBox;
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        representantEmprunteurBailleur: IChampTextBox;
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface ICreditTauxFixeLecture {
        referenceIndiceCredit: IChampTextBox;
        tauxFixeCredit: IChampTextBox;
    }
    interface IFC010HS {
        titre: ILabel;
        listeCreditTauxFixe: Array<ICreditTauxFixeLecture>;
        raisonCaution: IChampTextBox;
        representantCaution: IChampTextBox;
        enQualiteCaution: IChampTextBox;
        datePouvoirCaution: IChampTextBoxDate;
        represPersoMoraleAssurance: IChampTextBox;
        agissantQualitePersoMoraleAssurance: IChampTextBox;
        vertu1PersoMoraleAssurance: IChampTextBox;
        vertu2PersoMoraleAssurance: IChampTextBox;
        datePourvoirPersoMoraleAssurance: IChampTextBoxDate;
        vertu4PersoMoraleAssurance: IChampTextBox;
        compositionOffrePersoMoraleAssurance: IChampTextBox;
    }
    interface IFC010HSC {
        titre: ILabel;
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        valeurConditionGenLIA: IChampRadioButton;
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        valeurConditionSpeLIA: IChampCheckBox;
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        nomSocieteEmprunteurBailleur: IChampTextBox;
        capitalEmprunteurBailleur: IChampTextBox;
        siegeEmprunteurBailleur: IChampTextBox;
        lieuRCSEmprunteurBailleur: IChampTextBox;
        numeroRCSEmprunteurBailleur: IChampTextBox;
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        representantEmprunteurBailleur: IChampTextBox;
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IPretDevise {
        identifiantProduitPretDevise: IChampTextBox;
        numeroCreditPlanPretDevise: IChampTextBox;
        typePretDevise: IChampTextBox;
        idggiPretDevise: IChampTextBox;
        cdngPretDevise: IChampTextBox;
        fraisEnDevises: IChampTextBox;
        devisePretDevise: IChampTextBox;
        fraisContrePartiePretDevise: IChampTextBox;
    }
    interface IFC010LCD {
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        ribPretDevise: IChampTextBox;
        pretDevise: Array<IPretDevise>;
        montantMinimumDeblocagePretDevise: IChampTextBox;
        raisonCaution: IChampTextBox;
        representantCaution: IChampTextBox;
        enQualiteCaution: IChampTextBox;
        datePouvoirCaution: IChampTextBoxDate;
    }
    interface IFC010LCM {
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        ribPretDevise: IChampTextBox;
        pretDevise: Array<IPretDevise>;
        raisonCaution: IChampTextBox;
        representantCaution: IChampTextBox;
        enQualiteCaution: IChampTextBox;
        datePouvoirCaution: IChampTextBoxDate;
        montantMinimumDeblocagePretDevise: IChampTextBox;
    }
    interface IFC010LI {
        titre: ILabel;
        listeCreditTauxFixe: Array<ICreditTauxFixeLecture>;
        raisonCaution: IChampTextBox;
        representantCaution: IChampTextBox;
        enQualiteCaution: IChampTextBox;
        datePouvoirCaution: IChampTextBoxDate;
        represPersoMoraleAssurance: IChampTextBox;
        agissantQualitePersoMoraleAssurance: IChampTextBox;
        vertu1PersoMoraleAssurance: IChampTextBox;
        vertu2PersoMoraleAssurance: IChampTextBox;
        datePourvoirPersoMoraleAssurance: IChampTextBoxDate;
        vertu4PersoMoraleAssurance: IChampTextBox;
        compositionOffrePersoMoraleAssurance: IChampTextBox;
    }
    interface IFC010LIA {
        titre: ILabel;
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        valeurConditionGenLIA: IChampRadioButton;
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        valeurConditionSpeLIA: IChampCheckBox;
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        nomSocieteEmprunteurBailleur: IChampTextBox;
        capitalEmprunteurBailleur: IChampTextBox;
        siegeEmprunteurBailleur: IChampTextBox;
        lieuRCSEmprunteurBailleur: IChampTextBox;
        numeroRCSEmprunteurBailleur: IChampTextBox;
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        representantEmprunteurBailleur: IChampTextBox;
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IFC010LIC {
        titre: ILabel;
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        valeurConditionGenLIA: IChampRadioButton;
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        valeurConditionSpeLIA: IChampCheckBox;
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        nomSocieteEmprunteurBailleur: IChampTextBox;
        capitalEmprunteurBailleur: IChampTextBox;
        siegeEmprunteurBailleur: IChampTextBox;
        lieuRCSEmprunteurBailleur: IChampTextBox;
        numeroRCSEmprunteurBailleur: IChampTextBox;
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        representantEmprunteurBailleur: IChampTextBox;
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IFC017ANL {
        represPreteurCE: IChampTextBox;
    }
    interface IFC017BON {
        represPreteurCE: IChampTextBox;
    }
    interface IFC017CAT {
        represPreteurCE: IChampTextBox;
    }
    interface IFC017CGV {
        titre: ILabel;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        represPersonneMorale: IChampTextBox;
        agissantPersonneMorale: IChampTextBox;
        vertu1PersonneMorale: IChampTextBox;
        vertu2PersonneMorale: IChampTextBox;
        vertu3PersonneMorale: IChampTextBox;
        vertu4PersonneMorale: IChampTextBox;
        vertu5PersonneMorale: IChampTextBox;
        vertu6PersonneMorale: IChampTextBox;
        vertu7PersonneMorale: IChampTextBox;
        vertu8PersonneMorale: IChampTextBox;
        vertu9PersonneMorale: IChampTextBox;
        vertu10PersonneMorale: IChampTextBox;
        vertu11PersonneMorale: IChampTextBox;
        vertu12PersonneMorale: IChampTextBox;
        represPreteurCE: IChampTextBox;
    }
    interface IFC017CIF {
        represPreteurCE: IChampTextBox;
    }
    interface IFC017SCP {
        indexGarantie: number;
        existeAgrementGarantie: IChampCheckBox;
        dateAgrementGarantie: IChampTextBoxDate;
        publierGreffeGarantie: IChampCheckBox;
        conjointsEmprunteursGarantie: IChampTextBox;
        conjointsCautionsGarantie: IChampTextBox;
    }
    interface IFC019AN {
        titre: ILabel;
        an1AttestationPTZ: IChampCheckBox;
        an2AttestationPTZ: IChampCheckBox;
        an3AttestationPTZ: IChampCheckBox;
        an4AttestationPTZ: IChampCheckBox;
        an5AttestationPTZ: IChampCheckBox;
        an6AttestationPTZ: IChampCheckBox;
        an7AttestationPTZ: IChampCheckBox;
        an8AttestationPTZ: IChampCheckBox;
        an9AttestationPTZ: IChampCheckBox;
        anXAttestationPTZ: IChampCheckBox;
        anXIAttestationPTZ: IChampCheckBox;
        anIIIAttestationPTZ: IChampCheckBox;
        anIVAttestationPTZ: IChampCheckBox;
        anXIVAttestationPTZ: IChampCheckBox;
    }
    interface IFC028PNO {
        titre: ILabel;
        sousignePouvoirNotaire: IChampTextBox;
        datePouvoirNotaire: IChampTextBoxDate;
        nom1PouvoirNotaire: IChampTextBox;
        nom2PouvoirNotaire: IChampTextBox;
        nom3PouvoirNotaire: IChampTextBox;
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IDonneesCreditLecture {
        idCreditModifie: string;
        montantCreditModifie: IChampTextBox;
    }
    interface IFC050ACA {
        titre: ILabel;
        saisieComplementaireNecessaire: boolean;
        nomPersonneMorale: IChampTextBox;
        nombreCreditsAModifierACA: number;
        listeDonneesCreditAModifierACA: Array<IDonneesCreditLecture>;
    }
    interface IChampComboBox {
        listeValue: Array<string>;
        selectedValue: string;
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
    interface IChampCheckBoxList {
        listeValue: Array<string>;
        listeSelectedValue: Array<string>;
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
    interface IFC050FSC {
        dateTransfertBoSuiveuse: IChampTextBoxDate;
        dateDispositionFondsSuiveuse: IChampTextBoxDate;
        dateEnvoiNumerisationSuiveuse: IChampTextBoxDate;
        dateSignatureNotaireSuiveuse: IChampTextBoxDate;
        editionSuiveuse: IChampComboBox;
        statut1Suiveuse: IChampCheckBoxList;
        statut2Suiveuse: IChampCheckBoxList;
        statut3Suiveuse: IChampCheckBoxList;
        numeroDossierAssocieSuiveuse: IChampTextBox;
        corbeilleWorkflowSuiveuse: IChampComboBox;
        commentaireSuiveuse: IChampTextBox;
    }
    interface IFC050FSI {
        saisieComplementaireNecessaire: boolean;
        messages: Array<string>;
        numeroOrias: string;
        nombreCreditsAModifier: number;
        listeDonneesCreditAModifier: Array<IDonneesCreditLecture>;
    }
    interface IDonneesCautionPersonneMoraleLecture {
        represCautionPersoMorale: IChampTextBox;
        agissantQualitéCaution: IChampTextBox;
        agissantVertuCaution: IChampTextBox;
        agissant3Caution: IChampTextBox;
        agissant4Caution: IChampTextBox;
        agissant5Caution: IChampTextBox;
    }
    interface IFC104LEC {
        titre: ILabel;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        listeDonneesCautionPersonneMorale: Array<IDonneesCautionPersonneMoraleLecture>;
    }
    interface IFCM03DC {
        titre: ILabel;
        represPersonneMorale: IChampTextBox;
        agissantPersonneMorale: IChampTextBox;
        vertu1PersonneMorale: IChampTextBox;
        vertu2PersonneMorale: IChampTextBox;
        vertu3PersonneMorale: IChampTextBox;
        vertu4PersonneMorale: IChampTextBox;
        vertu5PersonneMorale: IChampTextBox;
        vertu6PersonneMorale: IChampTextBox;
        vertu7PersonneMorale: IChampTextBox;
        vertu8PersonneMorale: IChampTextBox;
        vertu9PersonneMorale: IChampTextBox;
        vertu10PersonneMorale: IChampTextBox;
        vertu11PersonneMorale: IChampTextBox;
        vertu12PersonneMorale: IChampTextBox;
    }
    interface IFCM03RE {
        titre: ILabel;
        represPersonneMorale: IChampTextBox;
        agissantPersonneMorale: IChampTextBox;
        vertu1PersonneMorale: IChampTextBox;
        vertu2PersonneMorale: IChampTextBox;
        vertu3PersonneMorale: IChampTextBox;
        vertu4PersonneMorale: IChampTextBox;
        vertu5PersonneMorale: IChampTextBox;
        vertu6PersonneMorale: IChampTextBox;
        vertu7PersonneMorale: IChampTextBox;
        vertu8PersonneMorale: IChampTextBox;
        vertu9PersonneMorale: IChampTextBox;
        vertu10PersonneMorale: IChampTextBox;
        vertu11PersonneMorale: IChampTextBox;
        vertu12PersonneMorale: IChampTextBox;
    }
    interface IFCM04LA {
        titre: ILabel;
        reservesRedacteur: IChampTextBox;
    }
    interface IFCM10HS {
        titre: ILabel;
        listeCreditTauxFixe: Array<ICreditTauxFixeLecture>;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonCaution: IChampTextBox;
        representantCaution: IChampTextBox;
        enQualiteCaution: IChampTextBox;
        datePouvoirCaution: IChampTextBoxDate;
        represPersoMoraleAssurance: IChampTextBox;
        agissantQualitePersoMoraleAssurance: IChampTextBox;
        vertu1PersoMoraleAssurance: IChampTextBox;
        vertu2PersoMoraleAssurance: IChampTextBox;
        datePourvoirPersoMoraleAssurance: IChampTextBoxDate;
        vertu4PersoMoraleAssurance: IChampTextBox;
        compositionOffrePersoMoraleAssurance: IChampTextBox;
        represPreteurCE: IChampTextBox;
    }
    interface IFCM10HSC {
        titre: ILabel;
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        valeurConditionGenLIA: IChampRadioButton;
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        valeurConditionSpeLIA: IChampCheckBox;
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        nomSocieteEmprunteurBailleur: IChampTextBox;
        capitalEmprunteurBailleur: IChampTextBox;
        siegeEmprunteurBailleur: IChampTextBox;
        lieuRCSEmprunteurBailleur: IChampTextBox;
        numeroRCSEmprunteurBailleur: IChampTextBox;
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        representantEmprunteurBailleur: IChampTextBox;
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IFCM17ANL {
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17BON {
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17CAT {
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17CFG {
        titre: ILabel;
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
    }
    interface IFCM17CGV {
        titre: ILabel;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        represPersonneMorale: IChampTextBox;
        agissantPersonneMorale: IChampTextBox;
        vertu1PersonneMorale: IChampTextBox;
        vertu2PersonneMorale: IChampTextBox;
        vertu3PersonneMorale: IChampTextBox;
        vertu4PersonneMorale: IChampTextBox;
        vertu5PersonneMorale: IChampTextBox;
        vertu6PersonneMorale: IChampTextBox;
        vertu7PersonneMorale: IChampTextBox;
        vertu8PersonneMorale: IChampTextBox;
        vertu9PersonneMorale: IChampTextBox;
        vertu10PersonneMorale: IChampTextBox;
        vertu11PersonneMorale: IChampTextBox;
        vertu12PersonneMorale: IChampTextBox;
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17CIF {
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17FDC {
        titre: ILabel;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        presenceEINonEmprunteur: IChampRadioButton;
        libelleEINonEmprunteur: IChampTextBox;
        accordConjointEINonEmprunteur: IChampRadioButton;
        libelleConjointEINonEmprunteur: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        represPersonneMorale: IChampTextBox;
        agissantPersonneMorale: IChampTextBox;
        vertu1PersonneMorale: IChampTextBox;
        vertu2PersonneMorale: IChampTextBox;
        vertu3PersonneMorale: IChampTextBox;
        vertu4PersonneMorale: IChampTextBox;
        vertu5PersonneMorale: IChampTextBox;
        vertu6PersonneMorale: IChampTextBox;
        vertu7PersonneMorale: IChampTextBox;
        vertu8PersonneMorale: IChampTextBox;
        vertu9PersonneMorale: IChampTextBox;
        vertu10PersonneMorale: IChampTextBox;
        vertu11PersonneMorale: IChampTextBox;
        vertu12PersonneMorale: IChampTextBox;
        represPreteurCE: IChampTextBox;
        raisonSocialePersonneMoraleNantissement: IChampTextBox;
        represPersonneMoraleNantissement: IChampTextBox;
        enQualitePersonneMoraleNantissement: IChampTextBox;
        vertu1PersonneMoraleNantissement: IChampTextBox;
        vertu2PersonneMoraleNantissement: IChampTextBox;
    }
    interface IOutilLecture {
        marqueOutil: IChampTextBox;
        typeOutil: IChampTextBox;
        dateLivraisonOutil: IChampTextBoxDate;
        serieOutil: IChampTextBox;
        prixOutil: IChampTextBox;
        vendIntituleOutil: IChampTextBox;
        vendCpltIntituleOutil: IChampTextBox;
        vendAdresseOutil: IChampTextBox;
        vendCpltAdresseOutil: IChampTextBox;
        vendCPOutil: IChampTextBox;
        vendVilleOutil: IChampTextBox;
        adresseOutil: IChampTextBox;
        cpltAdresseOutil: IChampTextBox;
        cPOutil: IChampTextBox;
        villeOutil: IChampTextBox;
        deplacementOutil: IChampCheckBox;
    }
    interface IFCM17OME {
        titre: ILabel;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        raisonConstituantMandataire: IChampTextBox;
        nomMandataire: IChampTextBox;
        vertuMandataire: IChampTextBox;
        nombreOutils: number;
        listeOutil: Array<IOutilLecture>;
        represPersonneMorale: IChampTextBox;
        agissantPersonneMorale: IChampTextBox;
        vertu1PersonneMorale: IChampTextBox;
        vertu2PersonneMorale: IChampTextBox;
        vertu3PersonneMorale: IChampTextBox;
        vertu4PersonneMorale: IChampTextBox;
        vertu5PersonneMorale: IChampTextBox;
        vertu6PersonneMorale: IChampTextBox;
        vertu7PersonneMorale: IChampTextBox;
        vertu8PersonneMorale: IChampTextBox;
        vertu9PersonneMorale: IChampTextBox;
        vertu10PersonneMorale: IChampTextBox;
        vertu11PersonneMorale: IChampTextBox;
        vertu12PersonneMorale: IChampTextBox;
        represPreteurCE: IChampTextBox;
        villeTribunal: IChampTextBox;
    }
    interface IFCM20CLI {
        titre: ILabel;
        dateDebutLigneInvestissement: IChampTextBoxDate;
        dateFinLigneInvestissement: IChampTextBoxDate;
        aTauxFixeLigneInvestissement: IChampRadioButton;
        tauxFixeLigneInvestissement: IChampTextBox;
        tauxRevisableLigneInvestissement: IChampTextBox;
        referenceIndiceLigneInvestissement: IChampTextBox;
    }
    interface IFCM28PNO {
        titre: ILabel;
        sousignePouvoirNotaire: IChampTextBox;
        datePouvoirNotaire: IChampTextBoxDate;
        nom1PouvoirNotaire: IChampTextBox;
        nom2PouvoirNotaire: IChampTextBox;
        nom3PouvoirNotaire: IChampTextBox;
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IFCM99LEI {
        titre: ILabel;
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
    }
    interface IFCX28PNO {
        titre: ILabel;
        sousignePouvoirNotaire: IChampTextBox;
        datePouvoirNotaire: IChampTextBoxDate;
        nom1PouvoirNotaire: IChampTextBox;
        nom2PouvoirNotaire: IChampTextBox;
        nom3PouvoirNotaire: IChampTextBox;
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IFZ001SI {
        titre: ILabel;
        accordPrincipe: IChampCheckBox;
        rdv: IChampCheckBox;
        deroulement: IChampCheckBox;
    }
    interface INOTICES {
        titre: ILabel;
        ajoutNotices: IChampCheckBox;
    }
    interface ISaisiesComplementaireLecture extends IElement {
        fC003DC: IFC003DC;
        fC003PC: IFC003PC;
        fC003RE: IFC003RE;
        fC004LA: IFC004LA;
        fC007ARO: IFC007ARO;
        fC010CP: IFC010CP;
        fC010HS: IFC010HS;
        fC010HSC: IFC010HSC;
        fC010LCD: IFC010LCD;
        fC010LCM: IFC010LCM;
        fC010LI: IFC010LI;
        fC010LIA: IFC010LIA;
        fC010LIC: IFC010LIC;
        fC017ANL: IFC017ANL;
        fC017BON: IFC017BON;
        fC017CAT: IFC017CAT;
        fC017CGV: IFC017CGV;
        fC017CIF: IFC017CIF;
        fC017SCP: IFC017SCP;
        fC019AN: IFC019AN;
        fC028PNO: IFC028PNO;
        fC050ACA: IFC050ACA;
        fC050FSC: IFC050FSC;
        fC050FSI: IFC050FSI;
        fC104LEC: IFC104LEC;
        fCM03DC: IFCM03DC;
        fCM03RE: IFCM03RE;
        fCM04LA: IFCM04LA;
        fCM10HS: IFCM10HS;
        fCM10HSC: IFCM10HSC;
        fCM17ANL: IFCM17ANL;
        fCM17BON: IFCM17BON;
        fCM17CAT: IFCM17CAT;
        fCM17CFG: IFCM17CFG;
        fCM17CGV: IFCM17CGV;
        fCM17CIF: IFCM17CIF;
        fCM17FDC: IFCM17FDC;
        fCM17OME: IFCM17OME;
        fCM20CLI: IFCM20CLI;
        fCM28PNO: IFCM28PNO;
        fCM99LEI: IFCM99LEI;
        fCX28PNO: IFCX28PNO;
        fZ001SI: IFZ001SI;
        nOTICES: INOTICES;
        nomPersonneMoraleACA: string;
        an1AttestationPTZ: boolean;
        an2AttestationPTZ: boolean;
        an3AttestationPTZ: boolean;
        an4AttestationPTZ: boolean;
        an5AttestationPTZ: boolean;
        an6AttestationPTZ: boolean;
        an7AttestationPTZ: boolean;
        an8AttestationPTZ: boolean;
        an9AttestationPTZ: boolean;
        anXAttestationPTZ: boolean;
        anXIAttestationPTZ: boolean;
        anIIIAttestationPTZ: boolean;
        anIVAttestationPTZ: boolean;
        anXIVAttestationPTZ: boolean;
        valeurConditionGenLIA: boolean;
        visibiliteCheckBoxConditionGenLIA: boolean;
        valeurConditionSpeLIA: boolean;
        visibiliteCheckBoxConditionSpeLIA: boolean;
        nomCopropriete: string;
        adresse1Copropriete: string;
        adresse2Copropriete: string;
        adresse3Copropriete: string;
        typePersonneCopropriete: string;
        mandataireCopropriete: string;
        effetCopropriete: string;
        listeCreditTauxFixe: Array<ICreditTauxFixeMaj>;
        contenuConditionsSuspensives: string;
        presenceEmprunteurIndividuel: boolean;
        libelleEmprunteurIndividuel: string;
        accordConjointEmprunteurIndividuel: boolean;
        libelleConjointEmprunteurIndividuel: string;
        presenceEINonEmprunteur: boolean;
        libelleEINonEmprunteur: string;
        accordConjointEINonEmprunteur: boolean;
        libelleConjointEINonEmprunteur: string;
        dateTransfertBoSuiveuse: string;
        dateDispositionFondsSuiveuse: string;
        dateEnvoiNumerisationSuiveuse: string;
        dateSignatureNotaireSuiveuse: string;
        editionSuiveuse: string;
        statut1Suiveuse: Array<string>;
        statut2Suiveuse: Array<string>;
        statut3Suiveuse: Array<string>;
        numeroDossierAssocieSuiveuse: string;
        corbeilleWorkflowSuiveuse: string;
        commentaireSuiveuse: string;
        indexGarantie: number;
        existeAgrementGarantie: boolean;
        dateAgrementGarantie: string;
        publierGreffeGarantie: boolean;
        conjointsEmprunteursGarantie: string;
        conjointsCautionsGarantie: string;
        dateDebutLigneInvestissement: string;
        dateFinLigneInvestissement: string;
        aTauxFixeLigneInvestissement: boolean;
        tauxFixeLigneInvestissement: string;
        tauxRevisableLigneInvestissement: string;
        referenceIndiceLigneInvestissement: string;
        raisonConstituantMandataire: string;
        nomMandataire: string;
        vertuMandataire: string;
        nombreOutils: number;
        ajoutNotices: boolean;
        numeroOrias: string;
        nombreCredits: number;
        listeDonneesCredit: Array<IDonneesCreditLecture>;
        listeOutil: Array<IOutilMaj>;
        sousignePouvoirNotaire: string;
        datePouvoirNotaire: string;
        nom1PouvoirNotaire: string;
        nom2PouvoirNotaire: string;
        nom3PouvoirNotaire: string;
        nom4PouvoirNotaire: string;
        ribPretDevise: string;
        identifiantProduitPretDevise: string;
        numeroCreditPlanPretDevise: string;
        typePretDevise: string;
        idggiPretDevise: string;
        cdngPretDevise: string;
        fraisEnDevises: string;
        devisePretDevise: string;
        fraisContrePartiePretDevise: string;
        montantMinimumDeblocagePretDevise: string;
        accordPrincipe: boolean;
        rdv: boolean;
        deroulement: boolean;
        raisonCaution: string;
        representantCaution: string;
        enQualiteCaution: string;
        datePouvoirCaution: string;
        nomSocieteEmprunteurBailleur: string;
        capitalEmprunteurBailleur: string;
        siegeEmprunteurBailleur: string;
        lieuRCSEmprunteurBailleur: string;
        numeroRCSEmprunteurBailleur: string;
        dateRCSEmprunteurBailleur: string;
        representantEmprunteurBailleur: string;
        libelleRepresEmprunteurPersonneMorale: string;
        enQualiteEmprunteurPersonneMorale: string;
        datePouvoirEmprunteurPersonneMorale: string;
        listeDonneesCautionPersonneMorale: Array<IDonneesCautionPersonneMoraleMaj>;
        represPersonneMorale: string;
        agissantPersonneMorale: string;
        vertu1PersonneMorale: string;
        vertu2PersonneMorale: string;
        vertu3PersonneMorale: string;
        vertu4PersonneMorale: string;
        vertu5PersonneMorale: string;
        vertu6PersonneMorale: string;
        vertu7PersonneMorale: string;
        vertu8PersonneMorale: string;
        vertu9PersonneMorale: string;
        vertu10PersonneMorale: string;
        vertu11PersonneMorale: string;
        vertu12PersonneMorale: string;
        represPersoMoraleAssurance: string;
        agissantQualitePersoMoraleAssurance: string;
        vertu1PersoMoraleAssurance: string;
        vertu2PersoMoraleAssurance: string;
        datePourvoirPersoMoraleAssurance: string;
        vertu4PersoMoraleAssurance: string;
        compositionOffrePersoMoraleAssurance: string;
        represPreteurCE: string;
        reservesRedacteur: string;
        raisonSocialePersonneMoraleNantissement: string;
        represPersonneMoraleNantissement: string;
        enQualitePersonneMoraleNantissement: string;
        vertu1PersonneMoraleNantissement: string;
        vertu2PersonneMoraleNantissement: string;
        villeTribunal: string;
        mtoDocInformation: Array<any>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAccessoireLieProduitRequest {
        identifiantDossier: string;
        identifiantCredit: string;
        codeTypeAccessoire: string;
    }
    interface IAccessoireComplementaireRequest {
        identifiantDossier: string;
        identifiantCredit: string;
        codeTypeAccessoire: string;
        codeSousTypeAccessoire: string;
    }
    interface IAjouterAccCompTiersRequest {
        identifiantDossier: string;
        idwsAccessoireComplementaire: string;
        codeRole: string;
        identifiantTiers: string;
    }
    interface IAccessoire {
        idAccessoireGestion?: string;
        idExterneAccessoire?: string;
        codeSousTypeAccessoire?: string;
        codeTypeAccessoire?: string;
        codeTypologieAccessoire?: string;
        partFinancierAccessoire?: number;
        codeIndiceAccessoireAper?: boolean;
        codeIndiceAccessoireFinancier?: boolean;
        dateCreation?: string;
        dateAccpAccessoire?: string;
        dateCloture?: string;
        codeEtatAccessoire?: number;
        dateEnvoi?: string;
        dateEffet?: string;
        dateFinEffet?: string;
        listeIdCouverture?: Array<string>;
        listeIdCotisation?: Array<string>;
        idConvention?: string;
        listeIdAvisOrgnExtr?: Array<string>;
        idPlan?: string;
        idws: string;
        codeBeneficiaire?: string;
        personnalisationBeneficiare?: number;
        listeModalitesCalcul?: Array<Modele.IModaliteCalcul>;
        listeCotisations?: Array<Modele.ICotisation>;
        libelleTypeAccessoire?: string;
        obligatoire?: boolean;
        idwsCredit?: string;
        montantFraisAccessoire?: number;
        tauxRetenuAccessoire?: number;
    }
    interface IAccessoireLieProduit extends IAccessoire {
        idProduitFinancier: string;
        listeModalitesCalcul?: Array<Modele.IModalitesCalculHorsConventionParProduit>;
    }
    interface IAccessoireComplementaire extends IAccessoire {
        codeNatureOrigineAccessoire: number;
        idCatlFrsComp: string;
        idCatlParametreRverTiers: string;
        roleTiers: string;
        intitule: string;
        listeModalitesCalcul?: Array<Modele.IModalitesCalculAccessoireComplementaire>;
    }
    interface IAccessoireMaj {
        idExterneAccessoire?: string;
        partFinancierAccessoire?: number;
        dateAccpAccessoire?: string;
        dateCloture?: string;
        codeEtatAccessoire?: number;
        dateEnvoi?: string;
        dateEffet?: string;
        dateFinEffet?: string;
        codeBeneficiaire?: string;
        idws?: string;
    }
    class AccessoireLieMaj implements IAccessoireMaj {
        idExterneAccessoire: string;
        partFinancierAccessoire: number;
        codeEtatAccessoire: number;
        dateEnvoi: string;
        dateEffet: string;
        dateFinEffet: string;
        idws: string;
        constructor(accessoire: IAccessoireLieProduit);
    }
    class AccessoireComplementaireMaj implements IAccessoireMaj {
        idExterneAccessoire: string;
        partFinancierAccessoire: number;
        codeEtatAccessoire: number;
        dateEnvoi: string;
        dateEffet: string;
        dateFinEffet: string;
        idws: string;
        codeNatureOrigineAccessoire: number;
        constructor(accessoire: IAccessoireComplementaire);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAccessoireType {
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        codeAccessoireCalculICNE: number;
        codeAccessoireCumuleFrsTTCCt4R: number;
        codeNatureAccessoire: string;
        libelleCreationTypeAccessoire: string;
        numeroOrdreClasse: number;
        codeTypologieAccessoire: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAvisOrganismeExterneLecture extends IElementLecture {
        idOrgnExterne: string;
        idInterieurEnvoi: string;
        idExterneEnvoi: string;
        dateEnvoi: string;
        dateAvis: string;
        codeIndiceTraitementEnvoi: number;
        codeDecision: string;
        codeMotf: string;
        libelleAvisDecision1: string;
        libelleAvisDecision2: string;
        nomAgentInstruction: string;
        numeroTeleInstruction: string;
        libelleAdresseMail: string;
        numeroFaxInstruction: string;
        typeLiaiSaccefTp: number;
        typeRepnOrgnExterne: number;
        idAccessoire: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IBeneficiaire {
        codeBeneficiaire: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        estRestantEdit: number;
        libelleFise: string;
        libelleIhm: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirBienPorteEnGarantieRequest {
        identifiantDossier: string;
        idWsGarantie: string;
        typeObjetCommercialisation: string;
    }
    interface IBienPorteEnGarantie {
        idws?: string;
        libelleObjet?: string;
        typeObjetCommercialisation?: string;
        adresseLigne1?: string;
        adresseLigne3?: string;
        adresseLigne4?: string;
        codePoste?: string;
        ville?: string;
        adresseLigne1Suite?: string;
        codePays?: string;
        adresseLigne5?: string;
        montantEstmVenl?: number;
        dateEstmVenl?: string;
        codeModeleEstmVenl?: string;
        montantEstmPrdn?: number;
        dateEstmPrdn?: string;
        codeModeleEstmPrdn?: string;
        codeMotfReSPrdn?: string;
        dateExpressionBienCff?: string;
        noteExpressionBienCff?: number;
        idObjetGestion?: string;
        porteSurProjet?: boolean;
        idGarantieReel?: string;
        /**
         * Cifaan_SouscriptionContratAssurance
         */
        souscriptionContratAssurance?: boolean;
    }
    interface IAntichrese extends IBienPorteEnGarantie {
        referenceCads: string;
        numeroLot: string;
    }
    interface IBienDivers extends IBienPorteEnGarantie {
        reference1: string;
        reference2: string;
    }
    interface IBonDeCaisseCapitalisation extends IBienPorteEnGarantie {
        referenceCadastrale: string;
        numeroCompte: string;
        numeroSiren: string;
        valeurBonOrigine: number;
        numeroContratTitre: string;
        natureBon: string;
        dateeche: string;
        titreNomPrenDeps: string;
    }
    interface ICessionDaillyAutre extends IBienPorteEnGarantie {
    }
    interface ICessionDaillyLoyerImmeuble extends IBienPorteEnGarantie {
    }
    interface IContratAssurance extends IBienPorteEnGarantie {
        dateNaisAssurance: string;
        numeroContratAssurance: string;
        nomCieAssurance: string;
        numeroSiren: string;
        cntrGestion: string;
        typeTechniqueJuridique: string;
        nomContratAssurance: string;
        apportPersonne: number;
        montantMinimumVersementSigne: number;
        codeIndiceAttnVersement: number;
        listeIdVersementAttn: Array<string>;
        /**
         * Liste des versements attendus
         */
        listeVersementAttn: GarantieCredit.DTO.ObjetPorteGarantie.IVersementAttendu[];
    }
    interface IDelegationLoyer extends IBienPorteEnGarantie {
        montantAnnuLoye: number;
        numeroCompte: string;
        dateExterneBail: string;
        nomGern: string;
    }
    interface IGageCompteInstrumentFinancier extends IBienPorteEnGarantie {
        referenceCadastrale: string;
        numeroCompte: string;
    }
    interface IGageVehicule extends IBienPorteEnGarantie {
        numeroSer: string;
        numeroImmt: string;
    }
    interface IHypothequeAerienne extends IBienPorteEnGarantie {
        numeroSer: string;
        numeroImmt: string;
    }
    interface IHypothequeImmobiliere extends IBienPorteEnGarantie {
        referenceCads: string;
        referenceLot: string;
        typeBien: number;
        typeLogement: string;
        destinataireBien: number;
        surfHabitation: number;
        surfTerr: number;
        zoneImplBien: string;
        qualEmpla: number;
        montantDernierMutt: string;
        dateDernierMutt: string;
        anneConstruction: number;
        montantAnnuLoye: string;
        numeroLotCopr: string;
        numeroSctn: string;
        occpActuarielBien: number;
        codePresHypotheque: number;
        idExpression: string;
        dateDemandeExpression: string;
        listeIdProprios: Array<string>;
        listeIdReferenceCadastrls: Array<string>;
        listeIdReferenceLot: Array<string>;
        codePays?: string;
    }
    interface INantissementFondDeCommerce extends IBienPorteEnGarantie {
        numeroInscRcs: string;
        libelleLibr: string;
        titreOccpLocLeqlFondEstExpl: number;
    }
    interface INantissementPartSociale extends IBienPorteEnGarantie {
        numeroEnregistrement: string;
        numeroCompte: string;
        descriptionOtion: string;
    }
    interface INantissementValeurMaterielle extends IBienPorteEnGarantie {
        typeValeurMatrimonial: string;
        numeroRefTypeLot: string;
    }
    interface INantissementValeurMobiliere extends IBienPorteEnGarantie {
        referenceCadastrale: string;
        numeroCompte: string;
    }
    interface IBienPorteEnGarantieMaj {
        idws: string;
        libelleObjet?: string;
        adresseLigne1?: string;
        adresseLigne3?: string;
        adresseLigne4?: string;
        codePoste?: string;
        ville?: string;
        adresseLigne1Suite?: string;
        codePays?: string;
        adresseLigne5?: string;
        montantEstmVenl?: number;
        dateEstmVenl?: string;
        codeModeleEstmVenl?: string;
        montantEstmPrdn?: number;
        dateEstmPrdn?: string;
        codeModeleEstmPrdn?: string;
        codeMotfReSPrdn?: string;
        dateExpressionBienCff?: string;
        noteExpressionBienCff?: number;
        /**
         * Cifaan_SouscriptionContratAssurance
         */
        souscriptionContratAssurance?: boolean;
    }
    interface IAntichreseMaj extends IBienPorteEnGarantieMaj {
        referenceCads?: string;
        numeroLot?: string;
    }
    interface IBienDiversMaj extends IBienPorteEnGarantieMaj {
        reference1?: string;
        reference2?: string;
    }
    interface IBonDeCaisseCapitalisationMaj extends IBienPorteEnGarantieMaj {
        referenceCadastrale?: string;
        numeroCompte?: string;
        numeroSiren?: string;
        valeurBonOrigine?: number;
        numeroContratTitre?: string;
        natureBon?: string;
        dateeche?: string;
        titreNomPrenDeps?: string;
    }
    interface ICessionDaillyAutreMaj extends IBienPorteEnGarantieMaj {
    }
    interface ICessionDaillyLoyerImmeubleMaj extends IBienPorteEnGarantieMaj {
    }
    interface IContratAssuranceMaj extends IBienPorteEnGarantieMaj {
        dateNaisAssurance?: string;
        numeroContratAssurance?: string;
        nomCieAssurance?: string;
        numeroSiren?: string;
        cntrGestion?: string;
        typeTechniqueJuridique?: string;
        nomContratAssurance?: string;
        apportPersonne?: number;
        montantMinimumVersementSigne?: number;
        codeIndiceAttnVersement?: number;
    }
    interface IDelegationLoyerMaj extends IBienPorteEnGarantieMaj {
        montantAnnuLoye?: number;
        numeroCompte?: string;
        dateExterneBail?: string;
        nomGern?: string;
    }
    interface IGageCompteInstrumentFinancierMaj extends IBienPorteEnGarantieMaj {
        referenceCadastrale?: string;
        numeroCompte?: string;
    }
    interface IGageVehiculeMaj extends IBienPorteEnGarantieMaj {
        numeroSer?: string;
        numeroImmt?: string;
    }
    interface IHypothequeAerienneMaj extends IBienPorteEnGarantieMaj {
        numeroSer?: string;
        numeroImmt?: string;
    }
    interface IHypothequeImmobiliereMaj extends IBienPorteEnGarantieMaj {
        referenceCads?: string;
        referenceLot?: string;
        typeBien?: number;
        typeLogement?: string;
        destinataireBien?: number;
        surfHabitation?: number;
        surfTerr?: number;
        zoneImplBien?: string;
        qualEmpla?: number;
        montantDernierMutt?: string;
        dateDernierMutt?: string;
        anneConstruction?: number;
        montantAnnuLoye?: string;
        numeroLotCopr?: string;
        numeroSctn?: string;
        occpActuarielBien?: number;
        codePresHypotheque?: number;
        idExpression?: string;
        dateDemandeExpression?: string;
        codePays?: string;
    }
    interface INantissementFondDeCommerceMaj extends IBienPorteEnGarantieMaj {
        numeroInscRcs?: string;
        libelleLibr?: string;
        titreOccpLocLeqlFondEstExpl?: number;
    }
    interface INantissementPartSocialeMaj extends IBienPorteEnGarantieMaj {
        numeroEnregistrement?: string;
        numeroCompte?: string;
        descriptionOtion?: string;
    }
    interface INantissementValeurMaterielleMaj extends IBienPorteEnGarantieMaj {
        typeValeurMatrimonial?: string;
        numeroRefTypeLot?: string;
    }
    interface INantissementValeurMobiliereMaj extends IBienPorteEnGarantieMaj {
        referenceCadastrale?: string;
        numeroCompte?: string;
    }
    interface IVersementAttendu {
        idws?: string;
        numeroRelationVersementAttn?: number;
        typeVersement?: string;
        montantVersement?: number;
        dateDebut?: string;
        dateFin?: string;
        periodeVersement?: number;
        idContratAssuranceGarantie?: string;
    }
    interface IVersementAttenduMaj {
        idws?: string;
        typeVersement?: string;
        montantVersement?: number;
        dateDebut?: string;
        dateFin?: string;
        periodeVersement?: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeOptimisationAvancee {
        idwsPlanFinancier: string;
        montantEcheanceMaximum: number;
        tauxEndtMaximum: number;
        inclAssurance: boolean;
        inclAPL: boolean;
        alerteBlqn: boolean;
        idProduitLissage: string;
        dureeCreditLissage: number;
        dureeCreditLissageFixe: boolean;
        lissageTotal: boolean;
        tauxCreditLissage: number;
        idProduitInterieur: string;
        dureeCreditInterieur: number;
        dureeCreditInterieurFixe: boolean;
        tauxCreditInterieur: number;
        montantCreditInterieur: number;
        creditInterieurPrio: boolean;
        inclPEL: boolean;
        inclCEL: boolean;
        epargneLogementObligatoire: boolean;
        epargneLogementExterne: boolean;
        dureeEpargneLogement: number;
        dureeEpargneLogementFixe: boolean;
        inclPATZ: boolean;
        inclEcoPTZ: boolean;
        dureeEcoPTZ: number;
    }
    class EntreeOptimisationAvancee implements IEntreeOptimisationAvancee {
        idwsPlanFinancier: string;
        montantEcheanceMaximum: number;
        tauxEndtMaximum: number;
        inclAssurance: boolean;
        inclAPL: boolean;
        alerteBlqn: boolean;
        idProduitLissage: string;
        dureeCreditLissage: number;
        dureeCreditLissageFixe: boolean;
        lissageTotal: boolean;
        tauxCreditLissage: number;
        idProduitInterieur: string;
        dureeCreditInterieur: number;
        dureeCreditInterieurFixe: boolean;
        tauxCreditInterieur: number;
        montantCreditInterieur: number;
        creditInterieurPrio: boolean;
        inclPEL: boolean;
        inclCEL: boolean;
        epargneLogementObligatoire: boolean;
        epargneLogementExterne: boolean;
        dureeEpargneLogement: number;
        dureeEpargneLogementFixe: boolean;
        inclPATZ: boolean;
        inclEcoPTZ: boolean;
        dureeEcoPTZ: number;
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICaracteristiqueCredit {
        capitalCredit: number;
        echeanceCredit: number;
        tauxCredit: number;
        typeTaux: number;
        nombrePeriode: number;
        periodicite: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    class ChampInformationsComplementaires {
        champsDateFinConstruction: boolean;
        champsSurfaceHabitable: boolean;
        champsDateAchevementTravaux: boolean;
        champsPerformanceEnergetique: boolean;
        /**
         * Construction d'un objet d'affichage des champs informations complémentaires
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    class ChampMontant {
        champsAcquisition: boolean;
        champsMobilier: boolean;
        champsTravaux: boolean;
        champsEcoPTZ: boolean;
        champsTerrain: boolean;
        champsPrixConvenu: boolean;
        champsTravauxReserves: boolean;
        champsCoutConstruction: boolean;
        champsRachatCreance: boolean;
        champsBesoin: boolean;
        afficheFraisNotaire: boolean;
        afficheBoutonNegociation: boolean;
        fraisDivers: boolean;
        champsNegociation: boolean;
        rachatRegroupement: boolean;
        /**
         * Construction d'un objet d'affichage des champs montant
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    class ChampAssoc {
        typeObjetToc: string;
        typeObjetTor: string;
        cas: ApiInstuctionCredit.Modele.ChampMontant;
        eligibilite: boolean;
        casInfosCompl: ApiInstuctionCredit.Modele.ChampInformationsComplementaires;
    }
    class ChampAssociation extends ChampAssoc {
        casProjet: ApiInstuctionCredit.Modele.Parametrage.IChampsProjet;
        /**
         * Construction d'un objet associant les toc/tor à un cas d'affichage
         */
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICompteCourant {
        montantHypothequeCapital?: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital?: number;
        idCreditIntr?: string;
        idws?: string;
        montantHypothequeCapitalInitial?: number;
    }
    class CompteCourantMaj implements ICompteCourant {
        montantHypothequeCapital: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
        idws: string;
        constructor();
        constructor(compteCourant: ICompteCourant);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerScConventionsAssuranceRequest {
        identifiantDossier: string;
        tsListeIdwsCredit: Array<string>;
        ageMaximum: number;
        assuranceDeft: boolean;
        tsListeIdwsPersonne: Array<string>;
    }
    interface IConventionResume {
        idConvention: string;
        numeroExterneConvention: string;
        idIntervenant: string;
        libelleLongConvention: string;
        libelleCreationConvention: string;
        commentaireConvention: string;
        commentaireConvention1: string;
        codeNatureCaution: string;
        datePresenceDeffConvention: string;
        dateFinDeffConvention: string;
        regleDateDeff: string;
        modeDexp: number;
        montantMinimumCreditPourConvention: number;
        montantMaximumCreditPourConvention: number;
        nombrePeriodeMinimumCredit: number;
        periodiciteDexpConvention: number;
        nombrePeriodeMaximumCredit: number;
        quotientMinimumParBeneficiaire: number;
        quotientMaximumParBeneficiaire: number;
        pasQuotient: number;
        montantMinimumGarantieParTete: number;
        montantMaximumGarantieParTete: number;
        pasMontantGarantie: number;
        naturePresenceCharge: number;
        periodiciteRecouvrement: number;
        codeDetrDateRecouvrement: number;
        delaiRver: number;
        codeCommissionIntervenantExterieur: number;
        tauxCommissionCaisse: number;
        codeTypeAssietteCommission: number;
        codeModeleRegleCommission: number;
        codeTiersGarantie: number;
        codeTypeDobjAutre: number;
        codeNatureBonification: number;
        codeModeRegle: string;
        montantMaximumEncours: number;
        nombrePeriodeMaximumPf: number;
        nombrePeriodeMaximumDt: number;
        nombrePeriodeMaximumDa: number;
        nombrePeriodeMaximumAm: number;
        codeRestant: string;
        montantPlafondPourDelegation: number;
        typeConvention: string;
        ageMaximumRequisParConvention: number;
        ageMinimumRequisParConvention: number;
        typeDacc: string;
        codeDevise: string;
        libelleLongConventionJuridique: string;
        typeDass: string;
        codeDerogationAge: number;
        estExterne: boolean;
        estConventionSaccef: boolean;
        estConventionOSEOEtudiant: boolean;
        estConventionSIAGI: boolean;
        estConventionCFG: boolean;
        estAERAS: boolean;
        estCautionMutuelle: boolean;
        estCautionMutuelle_ClausesEditiquePieco: boolean;
        estCreditLogementInitio: boolean;
        estCreditLogement: boolean;
        estInterne: boolean;
        estTAEA: boolean;
        estSFGAS: boolean;
    }
    interface IConvention extends IConventionResume {
        listeCotisation?: ICotisationConvention[];
        listeCritereId?: string[];
    }
    interface IConventionAssurance extends IConvention {
        ageMinimumEntrAssurance?: number;
        ageMaximumEntrAssurance?: number;
        codeDestinataireRegleSinistre?: number;
        nDomiciliationBancaire?: string;
        ageMaximumCouvertureAssurance?: number;
        ageMaximumAssuranceDerogation?: number;
        libelleCompAssurance?: string;
    }
    interface IConventionGarantie extends IConvention {
        formeGarantie?: string;
        casImpAutomatique?: number;
        delaiInformation?: number;
        idPersonneCouverture?: string;
        codeNatureCautionSimpleLimite?: string;
        conventionCautionMutuel?: number;
    }
    interface ICotisationConvention {
        sousTypeAccessoire: string;
        typeDaccCtfc: string;
        repriseCarObligatoireFacultatifCotisation: number;
        modeCalculLacc: number;
        dateDebutDapp: string;
        dateFinDapp: string;
        regleDappLacc: string;
        regleDateDebutDappLacc: string;
        regleEvenementDeclaration: string;
        codePeriodiciteApplication: number;
        codeRecouvrementAccessoire: number;
        codeTypeApplicationAccessoire: number;
        nombrePeriodeDappLacc: number;
        periodiciteDappLacc: number;
        regleDappAprd: string;
        codeCalculteg: number;
        codeAccessoireRemboursementFinCredit: boolean;
        codeApplicationEcheance: boolean;
        codeModeCalculTaux: number;
        regleCalculLacc: string;
        informationTauxCotisation: Array<number>;
        informationMontantCotisation: Array<number>;
        fractionFinancierMaximumLacc: number;
        compatibiliteInstruction: boolean;
        compatibiliteAvenant: boolean;
        financierAccessoireCredit: boolean;
        retardCodeIndiceDerogation: number;
        codeIntegrationPlanFinancier: number;
        listeCoutCotisation: Array<Object>;
        listeTrancheMontant: Array<Object>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICotisation {
        tauxCotisation: number;
        montantCotisation: number;
        codeIndiceBlcgSaisieMontant: number;
        codeModeCalcul?: number;
        codeIndiceApplicationEcheance?: boolean;
        codePeriodeCalcul: number;
        dateApplicationCotisation: string;
        dateDebutApplicationCotisation: string;
        dateFinApplicationCotisation?: string;
        codeRecouvrement?: number;
        montantAssiette: number;
        typeAccessoire?: string;
        codeSousTypeAccessoire?: string;
        nombrePeriodeApplicationCotisation: number;
        periodeApplicationCotisation: number;
        numeroRegleCalculCotisation?: string;
        numeroRegleApplicationCotisation?: string;
        codeTypeApplicationCotisation?: number;
        montantFrsGarantie: number;
        tauxConsolideFrsDossier?: number;
        montantConsolideFrsDossier?: number;
        partFinancier: number;
        codeIndiceDepsBorne?: number;
        codeIndiceInterieurPlanFinancier?: number;
        idAccessoire?: string;
        idCouverture?: string;
        listeIdTrancheMontant?: Array<string>;
        idRemsClient?: string;
        idws?: string;
        idPhase?: string;
        modaliteCalculLieProduit?: Modele.IModalitesCalculHorsConventionParProduit;
        modaliteCalculComplementaire?: Modele.IModalitesCalculAccessoireComplementaire;
    }
    class CotisationMaj implements ICotisation {
        tauxCotisation: number;
        montantCotisation: number;
        codeIndiceBlcgSaisieMontant: number;
        codePeriodeCalcul: number;
        dateApplicationCotisation: string;
        dateDebutApplicationCotisation: string;
        montantAssiette: number;
        nombrePeriodeApplicationCotisation: number;
        periodeApplicationCotisation: number;
        montantFrsGarantie: number;
        partFinancier: number;
        idws: string;
        constructor();
        constructor(cotisation: ICotisation);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICouvertureCredit {
        montantCouverture: number;
        quotientCouverture: number;
        montantEcheanceCouverture: number;
        dateFinAffectationCouverture: string;
        idAccessoire?: string;
        idCreditCouverture?: string;
        listeIdCotisation?: Array<string>;
        idws?: string;
    }
    class CouvertureCreditMaj implements ICouvertureCredit {
        montantCouverture: number;
        quotientCouverture: number;
        montantEcheanceCouverture: number;
        dateFinAffectationCouverture: string;
        idws: string;
        constructor();
        constructor(couverture: ICouvertureCredit);
    }
    interface IDataTableauCouvertureLigne {
        libelleCredit: string;
        quotite: number;
        montantCouvert: number;
        montant: number;
        taux: number;
        codeDevise: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterCreditExterneRequest {
        identifiantDossier: string;
        identifiantPlanFinancier: string;
        creditExterneMAJ: CreditExterneMaj;
    }
    interface ICreditExterne {
        libletblPret?: string;
        dureAmortissementMois?: number;
        tauxAmortissement?: number;
        montantCapital?: number;
        montantEcheanceAmortissement?: number;
        codePeriodeAmortissement?: number;
        codeIndiceInterieurTantPPersonne?: number;
        libelleLibrSurConcr?: string;
        codeDevise?: string;
        codeIndiceNaturePret?: number;
        libelleNaturePret?: string;
        codeIndiceTauxRevision?: number;
        dureDiffereMois?: number;
        typeSurtaxe?: number;
        codeIndicePresAssurancePertEmpl?: number;
        codeIndiceTypeRemboursement?: number;
        tegActu?: number;
        mtecheDiffere?: number;
        codePeriodeDiffere?: number;
        idPlanFinancier?: string;
        idws?: string;
    }
    class CreditExterne implements ICreditExterne {
        codeDevise: string;
        constructor(codeDevise: string);
    }
    class CreditExterneMaj implements ICreditExterne {
        libletblPret: string;
        dureAmortissementMois: number;
        tauxAmortissement: number;
        montantCapital: number;
        mtecheAmortissement: number;
        codePeriodeAmortissement: number;
        codeIndiceInterieurTantPPersonne: number;
        libelleLibrSurConcr: string;
        codeDevise: string;
        codeIndiceNaturePret: number;
        codeIndiceTauxRevision: number;
        dureDiffereMois: number;
        typeSurtaxe: number;
        codeIndicePresAssurancePertEmpl: number;
        codeIndiceTypeRemboursement: number;
        tegActu: number;
        mtecheDiffere: number;
        codePeriodeDiffere: number;
        idws: string;
        constructor();
        constructor(credit: ICreditExterne);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreditInterne {
        indiceEvolutionTauxConsolidePondere?: number;
        idConventionPres?: string;
        codeIndiceEnvoiAvisEcheance?: number;
        codeIndiceOptimisationImps?: number;
        codeIndiceTauxInterieurRevision?: number;
        numeroCreditPlanFinancier?: number;
        referenceExterneCredit?: string;
        idProduitFinancier?: string;
        libelleLongProduit?: string;
        codeFamilleContratRegle?: string;
        codeSousclasseBafi?: string;
        codeIndiceCreditRelease?: number;
        idCreditGestion?: string;
        codeIndiceTraitementInterieurIntr?: number;
        codeTypeActuarielInterieurIntr?: number;
        codeDeviseVersement?: string;
        codeIndiceExistePieceJustificatifPourDeclechlVersement?: number;
        codeTypeRattachementJustificatifDeclaration?: number;
        modeRegleVersement?: string;
        numeroEchelleVersement?: number;
        dateMER0?: string;
        dateMER1?: string;
        dateCreationCredit?: string;
        dateLimiteVersementFond?: string;
        jourDateEcheance?: number;
        dateLimitePremierVersementFond?: string;
        codeIndiceEligibiliteAPL?: number;
        codeIndicelgbAuprInstemss?: number;
        codeIndiceGestionCreditAvecCompteCrrt?: number;
        dateDernierCalculCredit?: string;
        codeIndiceCalculAFaire?: number;
        montantPrimeEpargneLogement?: number;
        tauxNegocieSurcRemboursementAnticipe?: number;
        tauxPondereCntExtr?: number;
        tauxPondereConsolide?: number;
        margePondereConsolide?: number;
        codeCalculEcheanceVersement?: number;
        codeettEcheanceVersement?: number;
        codeIndiceNatureEcheanceVersement?: number;
        intituleLigneUn?: string;
        domiciliationTres?: string;
        numeroDomiciliationPourMiseADispFond?: string;
        montantMinimumVersement?: number;
        codeIndiceNaturePretComb?: number;
        codeIndicePresUneBonificationUneMajreTaux?: number;
        codeConfirmationReductionDurePTZ?: number;
        codeConfirmationReductionMontantPTZ?: number;
        montantReglePTZ?: number;
        montantMinimumPTZ?: number;
        montantCreditEuro?: number;
        montantMaximumPretPVH?: number;
        codeDevise?: string;
        codeDeviseSaccef?: string;
        nombrePeriodeCredit?: number;
        codePeriodeCredit?: number;
        montantCapitalCredit?: number;
        montantPrmeEcheanceHorsAccessoireCredit?: number;
        montantPrmeEcheanceAssurance?: number;
        montantTotalCreditHorsAccessoireHorsPeriodePref?: number;
        coutTotalAccessoirePosteSurCredit?: number;
        coutTotalFrsCrtgeAssuranceCredit?: number;
        coutTotalFrsDossierAssuranceCredit?: number;
        coutTotalFrsGarantieAssuranceCredit?: number;
        coutTotalServiceSurObjetPeriodeAssuranceCredit?: number;
        coutTotalAccessoireCompPeriodeAssuranceCredit?: number;
        coutTotalServiceSurObjetAperAssuranceCredit?: number;
        coutTotalAccessoireCompAperAssuranceCredit?: number;
        montantPrmeEcheanceServiceSurObjet?: number;
        montantPrmeEcheanceAccessoireComp?: number;
        montantTotalAssurancePeriode?: number;
        codeIndiceModeCalculTaux?: number;
        tauxMoyenActuHorsBonification?: number;
        tauxMoyenPropHorsBonification?: number;
        tauxFutr?: ApiInstuctionCredit.Modele.ITauxIndiceLecture;
        tauxInitial?: Modele.TauxInteretAnnuel;
        tauxMoyenActu?: number;
        tauxMoyenProp?: number;
        tauxUsure?: number;
        tegActu?: number;
        tegProp?: number;
        tAEA?: number;
        tauxMontage?: number;
        existeAssuranceSurCRD?: boolean;
        idPlanFinancier?: string;
        idCompteCrrt?: string;
        idModele?: string;
        idModeleVersementFraction?: string;
        idRemsClient?: string;
        listeIdDroitUtilisation?: Array<string>;
        listeIdPayr?: Array<string>;
        listeIdPhase?: Array<string>;
        listeIdSuivantPlafond?: Array<string>;
        listeIdParametreRevision?: Array<string>;
        listeIdVartDure?: Array<string>;
        listeIdAccessoire?: Array<string>;
        listeIdAssurance?: Array<string>;
        listeIdGarantie?: Array<string>;
        listeIdAccessoireComp?: Array<string>;
        listeIdAccessoireLiesProduit?: Array<string>;
        listeIdCreditsEPS?: Array<string>;
        idComplementEPS?: string;
        tegModeRestitution?: number;
        margeTauxFutr?: number;
        valeurTauxInitial?: number;
        montantPTZVerrouille?: boolean;
        dureePTZVerrouillee?: boolean;
        idws?: string;
        echeancesJustifieesAssociees?: Array<Modele.IEcheancesJustifieesAssociees>;
        etatForcageFraisDossier?: string;
        bornesFraisDossier?: Array<number>;
        ajustementTaux?: Modele.IAjustementTaux;
        checked?: boolean;
        etatDuree?: ApiInstuctionCredit.Enum.CreditDuree;
        etatModeOptimisation?: ApiInstuctionCredit.Enum.CreditModeOptimisation;
        etatEpargneLogementConcours?: ApiInstuctionCredit.Enum.CreditEpargneLogementConcours;
        etatEpargneLogementObligatoire?: ApiInstuctionCredit.Enum.CreditEpargneLogementObligatoire;
        montantAAjouter?: number;
        montantApresAjout?: number;
        editableModeManuel?: boolean;
        listeAccessoiresLies?: Array<Modele.IAccessoireLieProduit>;
        listeAccessoiresComplementaires?: Array<Modele.IAccessoireComplementaire>;
        listeModalitesCalculParProduit?: Array<Modele.IModalitesCalculHorsConventionParProduit>;
        creditModalite?: ICreditModalite;
        remboursementAnticipe?: IRemboursementAnticipe;
        produitFinancier?: IProduitFinancier;
        creditBonificationDescription?: Modele.ICreditBonificationDescription;
    }
    class CreditInterne implements ICreditInterne {
        codeDevise: string;
        etatDuree: ApiInstuctionCredit.Enum.CreditDuree;
        etatModeOptimisation: ApiInstuctionCredit.Enum.CreditModeOptimisation;
        etatEpargneLogementConcours: ApiInstuctionCredit.Enum.CreditEpargneLogementConcours;
        etatEpargneLogementObligatoire: ApiInstuctionCredit.Enum.CreditEpargneLogementObligatoire;
        constructor(codeDevise: string);
    }
    class CreditInterneMaj implements ICreditInterne {
        idConventionPres: string;
        codeIndiceEnvoiAvisEcheance: number;
        codeIndiceOptimisationImps: number;
        referenceExterneCredit: string;
        codeIndiceTraitementInterieurIntr: number;
        codeTypeActuarielInterieurIntr: number;
        codeDeviseVersement: string;
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        codeTypeRattachementJustificatifDeclaration: number;
        modeRegleVersement: string;
        numeroEchelleVersement: number;
        jourDateEcheance: number;
        codeIndicelgbAuprInstemss: number;
        codeIndiceCalculAFaire: number;
        montantPrimeEpargneLogement: number;
        tauxNegocieSurcRemboursementAnticipe: number;
        tauxPondereCntExtr: number;
        intituleLigneUn: string;
        domiciliationTres: string;
        numeroDomiciliationDispFond: string;
        montantMinimumVersement: number;
        codeIndicePresUneBonificationUneMajreTaux: number;
        codeConfirmationReductionDurePTZ: number;
        codeConfirmationReductionMontantPTZ: number;
        montantCreditEuro: number;
        montantMaximumPretPVH: number;
        codeDeviseSaccef: string;
        nombrePeriodeCredit: number;
        codePeriodeCredit: number;
        montantCapitalCredit: number;
        coutTotalFrsDossierAssuranceCredit: number;
        margeTauxFutr: number;
        valeurTauxInitial: number;
        tauxMontage: number;
        montantPTZVerrouille: boolean;
        dureePTZVerrouillee: boolean;
        etatForcageFraisDossier: string;
        idws: string;
        constructor();
        constructor(credit: ICreditInterne);
    }
    interface ICreditParamRevisionParPeriodeLecture extends ICreditParamRevision {
        numeroPeriodeProduit: number;
        nombrePeriodeDurePeriode: number;
        codePeriodeDurePeriode: number;
        evenDeclarationDebutPeriode: string;
        nombrePeriodeCmpstDelPremierPeriodeRevision: number;
        codePeriodeCorrNombrePeriodeCmpstDel: number;
    }
    interface ICreditParamRevisionParPhaseLecture extends ICreditParamRevision {
        codeTypePhaseAssuranceParametreRevision: string;
    }
    interface ICreditParamRevision extends IElement {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        codeIndicecheReclame: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
        libelleLoiRevision: string;
        idCreditIntr: string;
        listeIdParametreIndex: Array<string>;
    }
    interface ICreditPalierTaux {
        tauxInterieurPalier: Object;
        codeTypeRemboursement: number;
        tauxProgressifEcheanceSurPalier: number;
        codePeriodeApplicationTauxProgressifEcheancePalier: number;
        numeroRelationPrmeEcheancePalier: number;
        numeroRelationDernierEcheancePalier: number;
        nombrePeriodeDureePalier: number;
        idCreditPhase: string;
        listeIdEcheanceOptimisation: Array<string>;
        idPalierTauxAssuranceProduit: string;
        idws: string;
    }
    interface IAjouterCreditInterneRequest {
        identifiantDossier: string;
        identifiantPlanFinancier: string;
        identifiantProduit: string;
        montantEmprunte: number;
        initMontant: boolean;
        enOptim: boolean;
        txMontage: number;
    }
    interface ICalculerCreditInterneRequest {
        identifiantDossier: string;
        idwsCredit: string;
        financeRAF: boolean;
    }
    interface IResultatCalculCreditInterne {
        creditInterneLecture: ICreditInterne;
        listeAnomalieLecture: IAnomalieLecture[];
    }
    interface IDataModification {
        modeCreation: boolean;
        creditInterne?: ICreditInterne;
        totalMontantTravauxEcoPtz: number;
        changementTauxMontage?: boolean;
        creditPrisEnCompte?: boolean;
        listeNombrePeriodesCredit?: number[];
        montantCreditInterieur?: number;
        tauxProp?: number;
        inclurePriorite?: boolean;
        libelleLabelTauxDefini?: string;
        dataPtz?: IDataPtz;
        dataCreation?: IDataCreation;
    }
    interface IDataCreation {
        codeCategorieEmprunteur: string;
        typeObjetFinancierGarantie: string;
        codeStructureInstruction: string;
        identifiantProjet: string;
    }
    interface IDataPtz {
        typeMensualite: string;
        phaseDiffereTotal: ICreditPhase;
        phaseDiffereTotalProduitFinancier: IProduitPhase;
        dureePhaseDiffereTotalTmp: number;
        uniteDureePhaseDiffereTotal: string;
        phaseAmortissement: ICreditPhase;
        phaseAmortissementProduitFinancier: IProduitPhase;
        dureePhaseAmortissementTmp: number;
        uniteDureePhaseAmortissement: string;
        erreursPtz: IErreurPtz;
    }
    interface IErreurPtz {
        erreur: boolean;
        anomalieCalculCredit: string;
        dureePhaseDiffereTotal: string;
        montantReglement: string;
    }
    interface ICreditPalierProgressionLecture extends IElement {
        numeroRelationPrmeEcheancePalierPhase: number;
        numeroRelationDernierEcheancePalierPhase: number;
        tauxProgressifAmortissement: ITauxInteretAnnuelLecture;
        codeIndexTauxProgressifAmortissement: number;
        codePeriodeProgressifAmortissement: number;
        nombrePeriodeDureePalierProgressif: number;
        idCreditPhaseAM: string;
        idPalierProgressifAmortissementNiveauProduit: string;
        /**
         * Ctfcam_TypeTauxProgreAmort
         */
        typeTauxProgreAmort: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    class CreditGraphique {
        idws: string;
        phases: Array<Modele.PhaseGraphique>;
        libelle: string;
        montant: number;
        dureeTotale: number;
        montantPremierePhase: number;
        intersections: Array<Modele.Point>;
        lissage: boolean;
        constructor();
    }
    class PhaseGraphique {
        idws: string;
        montant: number;
        duree: number;
        constructor();
    }
    class Point {
        duree: number;
        echeance: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDetailAccessoire {
        idAccessoireGestion: string;
        idExterneAccessoire: string;
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
        codeTypologieAccessoire: string;
        partFinancierAccessoire: number;
        codeIndiceAccessoireAper: boolean;
        codeIndiceAccessoireFinancier: boolean;
        dateCreation: string;
        dateAccpAccessoire: string;
        dateCloture: string;
        codeEtatAccessoire: number;
        dateEnvoi: string;
        dateEffet: string;
        dateFinEffet: string;
        listeIdCouverture: Array<string>;
        listeIdCotisation: Array<string>;
        idConvention: string;
        listeIdAvisOrgnExtr: Array<string>;
        idPlan: string;
        idws: string;
        idProduitFinancier: string;
        idCreditInterne?: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEcheancesJustifieesAssociees {
        titreCredit: string;
        messagesInterets: Array<string>;
        typesFrais: Array<Modele.IGroupeJustificationTEG>;
    }
    interface IGroupeJustificationTEG {
        libelleFrais: string;
        messagesFrais: Array<string>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerProdEtFamAutoRequest {
        identifiantDossier: string;
        idwsProjet: string;
        idwsPlanFinancement: string;
        codeProduit: string;
        codeDevise: string;
        estProduitLissage: boolean;
        estOptimAtrCredit: boolean;
    }
    interface IFamillesProduits {
        codeCategorieEmprunt: string;
        typeObjetFinancierGarantie: string;
        codeStructureInstruction: string;
        codeFamilleProduit: string;
        libelleLongFamilleProduit: string;
        listeProduits: Modele.IProduitsAutorises[];
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IFrais {
        IdntFrais: string;
        libelle: string;
        caractere: string;
        montant: number;
        taux: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerGammesLissAutoRequest {
        identifiantDossier: string;
        identifiantProjet: string;
        codeDevise: string;
    }
    interface IGammeLissage {
        idGammeLissage: string;
        libelleGammeLissage: string;
        nombrePhaseAmortissementMinimum: number;
        nombrePhaseAmortissementMaximum: number;
        idPremierProduitGamme: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterGarantieAvecControlesRequest {
        identifiantDossier: string;
        listeIdentifiantCreditCouverture: Array<string>;
        natureGarantie: string;
        identifiantGarantie: string;
        forcerAjout: boolean;
    }
    interface IAjouterGarantiePersoConventionneeControlesRequest {
        identifiantDossier: string;
        listeIdwsCreditCouvertureParGarantie: Array<string>;
        identifiantConventionGarantie: string;
        forcerAjout: boolean;
    }
    interface IGarantie extends IAccessoire {
        natureGarantie?: string;
        commentaire: string;
        dateLimiteRetardCaution?: string;
        codeFormeActeAuthentique: number;
        codeClasseGarantie?: number;
        typeSurtaxe?: number;
        accessoireSaccef: boolean;
        saccefPossible: boolean;
        etatBoutonSaccef: number;
        accessoireENET: boolean;
        idPersonne?: string;
        financableEstVisible?: boolean;
        financableEstActif?: boolean;
        financableEstCoche?: boolean;
        frais?: number;
    }
    interface IGarantiePersonnelle extends IGarantie {
        codeNatureCaution?: number;
        listeErrrTechniqueNonBlqn?: Array<string>;
    }
    interface IGarantieReelle extends IGarantie {
        codeGarantieRchab?: number;
        numeroRangSecnHypotheque?: number;
        dureHypothequeMois?: number;
        pactCommr?: number;
        rangHypotheque?: number;
        codeCessRangHypotheque?: number;
        montantCouvertureParHypothequeRangInfe?: number;
        portesurProjet?: boolean;
        idGarantieHorsDossier?: string;
        idObjetPortGarantie?: string;
    }
    interface IGarantieMaj extends IAccessoireMaj {
        commentaire?: string;
        codeFormeActeAuthentique?: number;
        idPersonne?: string;
    }
    interface IGarantiePersonnelleMaj extends IGarantieMaj {
        codeNatureCaution?: number;
    }
    interface IGarantieReelleMaj extends IGarantieMaj {
        codeGarantieRchab?: number;
        numeroRangSecnHypotheque?: number;
        dureHypothequeMois?: number;
        pactCommr?: number;
        rangHypotheque?: number;
        codeCessRangHypotheque?: number;
        montantCouvertureParHypothequeRangInfe?: number;
    }
    interface ILigneCouvertureGarantie {
        idwsCreditInterne: string;
        idwsCouverture: string;
        idwsCotisation?: string;
        idProduitFinancier: string;
        libelleLongProduit: string;
        montantEmprunte: number;
        montantCouvert?: number;
        quotite?: number;
        typeFrais?: string;
        tauxCotisation?: number;
        montantCotisation?: number;
        codeDevise: string;
        typeAccessoire?: string;
    }
    interface ITypesDeFraisGarantie {
        idCaisseEpargne: number;
        codeNatureGarantie: string;
        dateTraitement: string;
        codeTypeAccessoire: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        codeAccessoireObligatoire: number;
        codeModeCalculAccessoire: number;
        numeroRegleCalculAccessoire: string;
        montantConsolideAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypeAssietteCalculAccessoire: string;
        montantPlafondTrancheCalculAccessoire: number;
        tauxConsolideAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        montantPlafondTrancheCalculAccessoire1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantPlafondTrancheCalculAccessoire2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        montantPlafondTrancheCalculAccessoire3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        montantPlafondTrancheCalculAccessoire4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcul: number;
        montantMaximumAccessoireCalcul: number;
        numeroRegleApplicationAccessoire: string;
        regleDateDebutApplicationAccessoire: string;
        regleEvenementDeclaration1ErApplication: string;
        periodiciteApplicationAccessoire: number;
        codeRecouvrementAccessoire: number;
        uniteDureeApplicationAccessoire: number;
        dureeApplicationAccessoire: number;
        regleApplicationAccessoireAprd: string;
        codeAccessoireCalculteg: number;
        codeApplicationEcheance: number;
        codeCommissionIntervenantExterne: number;
        modeCalculTaux: number;
        fractionFinancierMaximum: number;
        codeCompAccessoireInstruction: number;
        codeCompAccessoireAvenant: number;
    }
    interface IGarantSureteRA {
        idws: string;
        prenom: string;
        nom: string;
        idPersonneSI: string;
        codeTitreCivilite: string;
        dateNais: string;
    }
    interface IResultatGarant {
        personnePM: IResultatGarantPersonnePM;
        personnePP: IResultatGarantPersonnePP;
        erreurTp: IResultatGarantErreurTp;
    }
    interface IResultatGarantPersonnePM {
        identifiantPersonne: string;
        codeTypePersonne: string;
        nomRaisonSociale: string;
        numeroInsee: string;
        formeJuridique: string;
        typeDroitPersonneMorale: string;
        typeAdministrationPublique: string;
        numeroInscriptionRCS: string;
        dateInscriptionRCS: string;
        lieuInscriptionRCS: string;
        dateCreationSociete: string;
        montantCapital: number;
        codeAPE: string;
        enseigneCommerciale: string;
        cAhtExercicePrecedent: number;
        nombreSalaries: number;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        numeroTelephone: string;
        numeroTelecopie: string;
        adresseEMail: string;
        cleBanqueFrance: string;
        dateEntreeEnRelation: string;
        categorieAgentEconomique: string;
        categorieClienteleTypeEc: string;
        classeAgentEconomique: string;
        codePresenceEnSuiviPersonnalise: string;
        criteresResidence: string;
        codeNaceInsee: string;
        codeStatutPpe: string;
        codeIndicRetourAutoDeclarPpe: string;
        codeNiveauWatchListLocale: string;
        codeNiveauWatchListNationale: string;
        codeNiveauWatchListBanqueRef: string;
        codeEtatCompletudeDossier: string;
        codePaysResidenceEmprunteur: string;
        codeTypePersonne1: string;
        intituleLigne1: string;
        complementIntituleLigne2: string;
        codePostalLigne6: string;
        localiteLigne6: string;
        idElementStructureGestionnaire: string;
    }
    interface IResultatGarantPersonnePP {
        identifiantPersonne: string;
        codeTypePersonne: string;
        codeSexePersonne: string;
        codeTitreCivilite: string;
        nomRaisonSociale: string;
        prenoms: string;
        nomJeuneFille: string;
        dateNaissance: string;
        lieuNaissance: string;
        codeInseePaysNaissance: string;
        codeInseePaysNationalite: string;
        codeNationalite: string;
        codeCapaciteJuridique: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        numeroTelephone: string;
        telephonePortable: string;
        numeroTelecopie: string;
        adresseEMail: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: string;
        codeRegimeMatrimonial: string;
        criteresResidence: string;
        codeModeLogement: string;
        dateEntreeDansLesMurs: string;
        categorieSocioProfessionnelle: string;
        dateEffetCSP: string;
        dateEmbauche: string;
        dateFinCdd: string;
        codePresenceActiviteSalariee: string;
        codeTypeContratEmbauche: number;
        codeTypeActiviteSalariee: string;
        codeTypeSecteurActivite: string;
        raisonSocialeLEmployeur: string;
        codePostalLEmployeur: string;
        codeApeEmployeur: string;
        cleBanqueFrance: string;
        codePersonnelCaisseEpargne: string;
        dateEntreeEnRelation: string;
        codeSalaireDomicilieEnCe: string;
        categorieAgentEconomique: string;
        categorieClienteleTypeEc: string;
        classeAgentEconomique: string;
        codePresenceEnSuiviPersonnalise: string;
        libelleListeNoire: string;
        codeSaisieAvisTiersDetenteur: string;
        codeArretSurSalaire: string;
        codeDevise: string;
        enseigneCommerciale: string;
        codeAPE: string;
        numeroInscriptionRCS: string;
        lieuInscriptionRCS: string;
        codePaysResidenceEmprunteur: string;
        codePaysLocalisation: string;
        codeProfil: string;
        codeTypeCapaciteJuridique: string;
        codeNaceInsee: string;
        codeStatutPpe: string;
        codeIndicRetourAutoDeclarPpe: string;
        codeNiveauWatchListLocale: string;
        codeNiveauWatchListNationale: string;
        codeNiveauWatchListBanqueRef: string;
        codeEtatCompletudeDossier: string;
        codeTypePersonne1: string;
        intituleLigne1: string;
        complementIntituleLigne2: string;
        codePostalLigne6: string;
        localiteLigne6: string;
        numTelephoneBureauParticulier: string;
        numTelephonePortableProfession: string;
        idElementStructureGestionnaire: string;
        codeContentieuxHorsComptePro: string;
        montantEncoursSaccefHorsOpe: number;
    }
    interface IResultatGarantErreurTp {
        codeRetour: number;
        codeDomaineGestionPacbase: string;
        codeLibelleErreur008: string;
        libelleReponse: string;
    }
    interface IDataTableauGarantie {
        idws: string;
        libelleNature: string;
        libelleGarantOuObjet?: string;
        libelleConvention: string;
        montantCouverture?: number;
        frais: number;
        libelleCompletude?: string;
        lignesCouverture: IDataTableauCouvertureLigne[];
        codeDevise: string;
    }
    interface IResultatAjouterGarantieAvecControles {
        garantieSchema: IGarantieSchema;
        listeAnomalieLecture: IAnomalieLecture[];
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerInformationGarantieRequest {
        identifiantDossier: string;
        listeIdwsCredit: Array<string>;
        conseille: boolean;
    }
    interface INatureGarantie {
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        typeSurete: number;
        acteAuthentiqueSurNatureGarantie: number;
        classeGarantie: number;
        libelleCreationNatureGarantie: string;
        numeroOrdreClasse: number;
        dateDebutValidite: string;
        dateFinValidite: string;
        libelleLongNatureGarantie: string;
        codeHypothequeRchab: string;
        conseille?: boolean;
        cdfcod?: string;
    }
    interface IInformationGarantie {
        cdfcod: string;
        cdfcng: string;
        libelleLong: string;
        topGarantie: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICalculerCaracteristiqueCreditRequest {
        capitalCredit: number;
        echeanceCredit: number;
        tauxCredit: number;
        typeTaux: number;
        nombrePeriode: number;
        periodicite: number;
    }
    interface IResultatCalculSimple {
        capital: number;
        echeance: number;
        taux: number;
        typeTaux: number;
        nombrePeriode: number;
        periodicite: number;
        coutTotal: number;
    }
    interface IResultatPeriodeOptimisation {
        dureeMois: number;
        codeTypePhase: string;
        montantPremierEcheanceHorsAccessoire: number;
        montantPremierEcheanceAvecAccessoire: number;
        codePeriodicite: number;
        montantPremierEcheanceHorsAccessoirePeriodicite: number;
        montantPremierEcheanceAvecAccessoirePeriodicite: number;
        montantEcheanceOptimisation: number;
        codePeriodiciteChs: number;
    }
    interface IResultatCreditOptimisation {
        idCredit: string;
        idProduit: string;
        libelleProduit: string;
        typeCredit: number;
        montantPremierEcheanceHorsAccessoire: number;
        teg: number;
        montantFrsDossier: number;
        montantFrsGarantie: number;
        tauxUsur: number;
        codeIndiceEligibiliteAPL: number;
        dureeTotalReglePtz: number;
        montantReglePtz: number;
        indiceReductionDureePtz: boolean;
        indiceReductionMontantPtz: boolean;
        listeIdAssurance: Array<string>;
        listePeriodeOptimisation: Array<IResultatPeriodeOptimisation>;
    }
    interface IResultatPlanOptimisation {
        idWsPlanOptimisation: string;
        montantMaximumFinancier: number;
        montantMinimumRemboursement: number;
        montantFinancierInterieur: number;
        montantFinancierExterne: number;
        montantRestantFinancier: number;
        montantApport: number;
        coutTotal: number;
        montantPremierEcheanceHorsAccessoire: number;
        montantPremierEcheanceAvecAccessoire: number;
        listeCreditOptimisation: Array<IResultatCreditOptimisation>;
    }
    interface IResultatOptimisation {
        listeAno: Array<IAnomalieLecture>;
        listePlanOptimisation: Array<IResultatPlanOptimisation>;
    }
    interface ICalculerOptimisationRequest {
        identifiantDossier: string;
        identifiantPlanFinancier: string;
        identifiantLissage: string;
        montantMaximumRemboursement: number;
        lissageTotal: boolean;
        dureeFixeLissage: boolean;
        dureeSouhLissage: number;
    }
    interface ICalculerOptimisationAvanceeRequest {
        identifiantDossier: string;
        entreeOptimisationAvancee: IEntreeOptimisationAvancee;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefPaliersContraintsRequest {
        identifiantDossier: string;
        idwsPlanFinancier: string;
        listePalierContrat: Array<PalierContraintMaj>;
    }
    /**
     * Image de l'objet exposé par le service
     */
    interface IPalierContraint {
        dateDebutPeriode: string;
        dateFinPeriode: string;
        montantEcheance: number;
        durePalier: number;
        idPlanFinancier: string;
        idws: string;
    }
    /**
     * Objet permettant sa manipulation dans la vue au sein d'un fonctionnement à l'aide de tuile
     */
    class PalierContraint implements IPalierContraint {
        dateDebutPeriode: string;
        dateFinPeriode: string;
        montantEcheance: number;
        durePalier: number;
        idPlanFinancier: string;
        statut: string;
        marquage: boolean;
        idws: string;
        constructor(oPalier?: IPalierContraint);
    }
    class PalierContraintMaj {
        dateFinPeriode: string;
        montantEcheance: number;
        durePalier: number;
        idws: string;
        constructor(oPalier: IPalierContraint);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IScPaliersDeTauxParPhase {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        numeroRelation: number;
        dateTraitement: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        dureeMinimumPalierTaux: number;
        dureePalierTaux: number;
        dureePalierTaux1: number;
        typeRemboursement: number;
        codeTypeTauxIntr: number;
        codeIndice: string;
        tauxIntr: number;
        tauxIntr1: number;
        tauxIntr2: number;
        codeTypeTauxProgressifEcheance: number;
        periodiciteApplicationProgressifEcheance: number;
        tauxProgressifEcheance: number;
        tauxProgressifEcheance1: number;
        tauxProgressifEcheance2: number;
    }
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelatifPhase: number;
        criteresAccess: Parametrage.IScCriteresAcces;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IScPaliersDeProgressionParPhase {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        numeroRelation: number;
        dateTraitement: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        dureeMinimumPalierProgressifAmort: number;
        dureePalierProgressifAmort: number;
        dureePalierProgressifAmort1: number;
        codeTypeTauxProgressifAmort: number;
        tauxProgressifAmort: number;
        tauxProgressifAmort1: number;
        tauxProgressifAmort2: number;
        periodiciteApplicationProgressifAmort: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IMiseAJourPhaseRequest {
        identifiantDossier: string;
        creditPhaseMAJ: ICreditPhaseMaj;
        complementPhasePretCbinMAJ: IComplementPhasePretCombineMaj;
        creditParamRevisionPhaseMAJ: ICreditParamRevisionParPhaseMaj;
    }
    interface ICreditPhaseMaj extends IElementMaj {
        capitalisation: boolean;
        modeCapitalRecouvrementInterieur: number;
        codeCapitalRecouvrementInterieur: number;
        codePeriodeAssuranceCalculInterieur: number;
        codePeriodeCalculMER: number;
        nombrePeriodePhase: number;
        codePeriodeDurePhase: number;
        valeurTauxPhase: number;
    }
    interface ICreditPhaseAmortissementMaj extends ICreditPhaseMaj {
        quotientAmortissement: number;
        tauxConstructionPhaseCredit: number;
        montantEchmOptimisation: number;
    }
    interface ICreditPhaseDiffereAmortissementMaj extends ICreditPhaseMaj {
    }
    interface ICreditPhaseDiffereTotalMaj extends ICreditPhaseMaj {
    }
    interface ICreditPhaseMobilisationMaj extends ICreditPhaseMaj {
    }
    interface ICreditPhasePrefinancementMaj extends ICreditPhaseMaj {
        codeReductionDureePref: number;
        reductionDureePref: boolean;
    }
    interface IComplementPhasePretCombineMaj extends IElementMaj {
        montantAmortissement: number;
        montantInfine: number;
        modeSaisieReprCapital: number;
        quotientAmortissement: number;
    }
    interface ICreditParamRevisionMaj extends IElementMaj {
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
    }
    interface ICreditParamRevisionParPhaseMaj extends ICreditParamRevisionMaj {
    }
    interface ITauxInteretAnnuelLecture {
        modeCalculTaux: number;
        nombrePeriodeParAn: number;
        tauxActu: number;
        tauxProp: number;
    }
    interface ICreditPalierProgressionMaj extends IElementMaj {
        valeurTauxProgressifAmortissement: number;
        codeIndexTauxProgressifAmortissement: number;
        nombrePeriodeDureePalierProgressif: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirPhaseRequest {
        identifiantDossier: string;
        idwsCredit: string;
        codeIndiceTypePhase: number;
    }
    interface IComplementPhasePretCombineLecture extends IElement {
        montantAmortissement: number;
        montantInfine: number;
        codeAjtInterieurCapital: number;
        modeSaisieReprCapital: number;
        quotientAmortissement: number;
        idCreditPhaseAM: string;
    }
    interface ICreditPhase extends IElement {
        codeCalculInterieurRepr: number;
        modeCapitalRecouvrementInterieur: number;
        codeCapitalRecouvrementInterieur: number;
        codePeriodeAssuranceCalculInterieur: number;
        codePeriodeCalculMER: number;
        codeCalculInterieurJourRelease: number;
        codePeriodeCompositionInterieur: number;
        montantPrmeecheService: number;
        montantPrmeecheAccessoireComp: number;
        codeTypePhase: string;
        codeIndiceVersementFondAutrePendantPhase: number;
        dateCreationPhase: string;
        codeConfirmationTauxInterieurCredit: number;
        nombrePeriodePhase: number;
        codePeriodeDurePhase: number;
        marge: number;
        taux: number;
        repart: number;
        tauxPhaseFixe: number;
        tauxPhaseInit: number;
        dateTraitIndice: string;
        majorBonif: number;
        calculButoirHausse: boolean;
        calculButoirBaisse: boolean;
        persoButoirHausse: boolean;
        persoButoirBaisse: boolean;
        modeButoirHausse: string;
        modeButoirBaisse: string;
        dateButoirHausse: string;
        dateButoirBaisse: string;
        tauxPhase: ITauxInteretAnnuelLecture;
        tauxPhaseHorsBonificationMajre: ITauxInteretAnnuelLecture;
        montantPrmeecheHorsAccessoire: number;
        montantPrmeecheAccessoirePeriode: number;
        interetsDifferes: boolean;
        codeRecouvCapitInterets: number;
        modeRecouvInterets: number;
        modeCapitInterets: number;
        capitActive: boolean;
        recouvActive: boolean;
        choixCapitalisation: boolean;
        choixRecouvrement: boolean;
        capitalisation: boolean;
        recouvrement: boolean;
        montantPremiereEcheance: number;
        choixPeriode: boolean;
        choixPeriodicite: boolean;
        estVisibleTaux: boolean;
        estVisibleMarge: boolean;
        listeChoixPeriode: Array<number>;
        estActifDuree: boolean;
        estActifPeriodicite: boolean;
        estActifTaux: boolean;
        estActifMarge: boolean;
        listeModeCapitalisation: Array<IScConstante>;
        listeModeRecouvrement: Array<IScConstante>;
        estVisibleButoirHausse: boolean;
        estVisibleButoirBaisse: boolean;
        estActifButoirHausse: boolean;
        estActifButoirBaisse: boolean;
        estVisibleTauxHausse: boolean;
        estVisibleTauxBaisse: boolean;
        idCreditIntr: string;
        idParametreRevisionParPhase: string;
        listeIdPalierTaux: Array<string>;
        phaseProduit: IProduitPhase;
        estVisibleJeuxDeParametres: boolean;
        estActifJeuxDeParametres: boolean;
        estVisibleQuotite: boolean;
        estActifQuotite: boolean;
        listeJeuxParametresRevision: Array<string>;
        /**
         * TauxButoirHausse
         */
        tauxButoirHausse: number;
        /**
         * TauxButoirBaisse
         */
        tauxButoirBaisse: number;
    }
    interface ILignePhaseCredit {
        idws?: string;
        nombrePeriodePhase?: number;
        codeTypePhase?: string;
        numeroRelationPhase?: number;
        montantPremiereEcheance?: number;
        nombrePeriodePhaseInitial?: number;
        dureePhaseMin?: number;
        dureePhaseMax?: number;
        dureePhasePas?: number;
        priseEnCompte?: boolean;
    }
    interface IScConstante {
        libelle: string;
        valeur: string;
    }
    interface ICreditPhaseAmortissement extends ICreditPhase {
        codeRecouvrementAmortissementTermeEchu: number;
        quotientAmortissement: number;
        modeCalculAmortissement: number;
        codePrelFinPhase: number;
        tauxConstructionPhaseCredit: number;
        amortissementPossible: boolean;
        progTaux: boolean;
        typePretCombine: string;
        idCompPhasePourPretComb: string;
        listeIdPalierProgressifAmortissement: Array<string>;
    }
    interface ICreditPhaseDiffereAmortissement extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeRecouvrementPartielInterieur: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseDiffereTotal extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseMobilisation extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeRecouvrementPartielInterieur: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhasePrefinancement extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeReductionDureePref: number;
        personnalisable: boolean;
        reduction: boolean;
    }
    interface ICreditParamIndexationLecture extends IElement {
        numeroPeriodeRevisionAssuranceParametreIndex: number;
        numeroPhaseProduitAssuranceParametreIndex: number;
        numeroIndiceRevisionCredit: number;
        typeRolIndice: string;
        codeIndiceRevision: string;
        modeExpressionUtilisationIndice: number;
        valeurReferenceIndice: number;
        valeurCoefficientParametreRevision: number;
        codeReptModfeche: number;
        modeReptModfeche: number;
        evenDeclarationRevision: string;
        evenDeclarationPrmeRevision: string;
        nombrePeriodeDetrPrmePeriodeRevision: number;
        codePeriodeDelUtilisationDetrDatePrmeRevision: number;
        codeJourRevision: string;
        codeMoisRevision: string;
        nombreJourAjtPourDetrDatePrmeRevision: number;
        natureLimiteVart: number;
        codeValeurReferenceVartMaximum: number;
        modeExpressionVartTauxIndice: number;
        valeurVartTauxIndice: number;
        codeEvenPermDetrValeurInitialIndice: string;
        dateFixeDetrValeurInitialIndice: string;
        nombrePeriodeDelEvenDetrDateValeurInitialIndice: number;
        codePeriodeDelUtilisationDetrValeurInitialIndice: number;
        codeIndiceValeurReferenceVartEcheance: number;
        valeurVartMaximumEcheance: number;
        idParametreRevision: string;
    }
    class CreditPhaseMaj {
        modeCapitalRecouvrementInterieur: number;
        codeCapitalRecouvrementInterieur: number;
        codePeriodeAssuranceCalculInterieur: number;
        codePeriodeCalculMER: number;
        nombrePeriodePhase: number;
        codePeriodeDurePhase: number;
        valeurTauxPhase: number;
        idws: string;
        constructor(creditPhase?: ICreditPhase);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterPlanFinancementRequest {
        identifiantDossier: string;
        identifiantProjet: string;
        planFinancementMiseAJour: PlanFinancementMaj;
    }
    interface IPlanFinancement extends IElement {
        libelleRetardAdresse: string;
        montantTotalEmpruntPlan: number;
        montantRestantFinancier: number;
        codeEtatPlanFinancier: number;
        codeContratPlan: number;
        dateCreationPlan: string;
        dateDernierAnlsAdresse: string;
        dateEditPropCredit: string;
        notfEngagementBale2: string;
        codeAnlsMeneTerme: number;
        codeDecisionSpec: number;
        corcTarfCalculParAdresse: number;
        cotisationAnlsRisque: number;
        coefficientTarfCalculParAdresse: number;
        codeOriginePretPrincipal: number;
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        numeroDossierSmac: string;
        typeCritereOptim: number;
        valeurCritereOptim: number;
        accordDePrincipe: number;
        listeResultatControle: Array<IResultatControle>;
        estEligibleAPL: boolean;
        montantAPLModifiable: boolean;
        idProjet: string;
        listeIdCreditIntr: Array<string>;
        listeIdCreditExtr: Array<string>;
        listeIdAssurance: Array<string>;
        listeIdGarantie: Array<string>;
        listeIdAccessoireComp: Array<string>;
        listeIdAccessoireLiesProduit: Array<string>;
        listeIdServiceSurObjet: Array<string>;
        listeIdPalierContrat: Array<string>;
        idAPL: string;
        idSynthesePlanFinancement: string;
    }
    interface IPlanFinancementDetail extends IPlanFinancement {
        description?: string;
        fraisCourtage?: number;
    }
    class PlanFinancementMaj {
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        dateEditPropCredit: string;
        dureeSouh: number;
        idws: string;
        constructor(plan?: IPlanFinancementDetail);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerProduitsAutorisesRequest {
        identifiantDossier: string;
        identifiantProjet: string;
        codeFamilleProduit: string;
        codeDevise: string;
        produitLissage: boolean;
        optimAtrCredit: boolean;
    }
    interface IProduitsAutorises {
        codeFamilleProduit?: string;
        numeroRelationProduit?: string;
        libelleLongProduit?: string;
        numeroOrdreClasse?: number;
        codeFamilleControle?: string;
        montantMinimumCredit?: number;
        montantMaximumCredit?: number;
        dureeCredit?: number;
        dureeCredit1?: number;
        quotientFinancierAutre?: number;
        nombrePhaseAmortissement?: number;
        codePossibiliteDiffereTotal?: number;
        codePossibiliteDiffereAmortissement?: number;
        codeCreditRelease?: number;
        codeTauxCreditDirecteur?: number;
        indiceTypeTaux?: number;
        indiceCreditModele?: number;
        indiceProduitLissage?: number;
        indiceProduitComplement?: number;
        cleRecherche?: string;
        codeTypeTranchePret0?: string;
        indiceCompte?: number;
        codeEngagementConsolide?: number;
        codeProduitRestant?: string;
        dateFinValiditeProduit?: string;
        idGammeLissage?: string;
        libelleGammeLissage?: string;
        nombrePhaseAmortissementMinimum?: number;
        nombrePhaseAmortissementMaximum?: number;
        idPremierProduitGamme?: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IProduitsLissage {
        idProduit: string;
        nombrePhaseAmortissement: number;
        codeUtilisationReglePrdn: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICopierPlanFinancementRequest {
        identifiantDossier: string;
        idwsPlanFinACopier: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IResultatControle {
        libelle: string;
        messages: Array<string>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IConsultationDossierRequest {
        numeroDossierNEO: string;
        numeroPlanFinancement: number;
    }
    interface IDossierSmac {
        numeroEntiteTitulaire: string;
        listeDesEmprunteurs: Array<IEmprunteurSmac>;
        projet: IProjetSmac;
        listeDesCredits: Array<ICreditSmac>;
        reference: IReferenceNeoSmac;
        tauxPlancher1: number;
        tauxPlancher2: number;
        numeroOrdrePretTauxPlancher: number;
        tauxClientPretPrincipal: number;
        tauxDepartPretPrincipal: number;
        tauxClientPretComplementaire1: number;
        tauxDepartPretComplementaire1: number;
        tauxClientPretComplementaire2: number;
        tauxDepartPretComplementaire2: number;
        resultat: IResultatSmac;
    }
    interface IResultatSmac {
        code: string;
        description: string;
        details: string;
        typeResultat: number;
        identifiantDossierSmac: number;
    }
    interface IReferenceNeoSmac {
        numeroDossierNEO: string;
        numeroPlanFinancement: number;
        identifiantDossierSMAC: number;
        numeroOrdrePretTauxClientPP: number;
        numeroOrdrePretTauxClientPC1: number;
        numeroOrdrePretTauxClientPC2: number;
        modificationsSauvegardees: boolean;
        dateCreationDossier: string;
    }
    interface IProjetSmac {
        numeroDossier: string;
        numeroPlanFinancement: string;
        numeroEntiteTitulaire: string;
        ilYAUnApporteurDAffaire: string;
        montant: string;
        marche: string;
        fraisDeDossier: string;
    }
    interface IEmprunteurSmac {
        nom: string;
        prenom: string;
        dateNaissance: string;
        numeroDePersonne: string;
        leSalaireEstDomicilie: string;
        montantDomiciliation: string;
        codeSegment: string;
        notationRisque: string;
    }
    interface ICreditSmac {
        identifiantProduitRegional: string;
        numeroDOrdre: string;
        nombreDePeriodes: string;
        montant: string;
        modeDAmortissement: string;
        periodeDAmortissement: string;
        estFloore: string;
        floor: string;
        estCape: string;
        cap: string;
        indiceDeRevision: string;
        quotiteRepartition: string;
        tauxProgressionEcheances: string;
    }
    interface ILireBaleIIRequest {
        identifiantPersonne: string;
        typeAttributaireNote: string;
        codeVersion: string;
        codeRelease: string;
        identifiantDossierInstruction: string;
    }
    interface IResultatBaleII {
        codeSegmentMarche: string;
        valeurNoteRisque: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    class SynteseFinancement {
        chargesBrutes: number;
        chargesNettes: number;
        totalPretsInternes: number;
        coutOperation: number;
        constructor();
    }
    class CreditSyntheseFinancement {
        description: string;
        montant: number;
        cout: number;
        phases: Array<PhaseSyntheseFinancement>;
        idws: string;
        teg: number;
        modeRestitution: Modele.ISelectbox;
        constructor();
    }
    class PhaseSyntheseFinancement {
        taux: number;
        description: string;
        mensualite: number;
        duree: number;
        idws: string;
        assurance: number;
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    class SyntheseFrais {
        dossier: number;
        assurances: number;
        garanties: number;
        interets: number;
        liesAuprojet: number;
        courtage: number;
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ISynthesePlanFinancement {
        coutTotalTTC: number;
        coutTotalFraisGarantie: number;
        coutTotalFraisDossier: number;
        montantApportPersonnel: number;
        coutTotalFraisCourtage: number;
        montantMensualiteAvecAssurance: number;
        montantMensualiteNet: number;
        montantConcoursInternes: number;
        montantConcoursExternes: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITauxIndiceLecture {
        marge: number;
        valeurIndice: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    class TauxInteretAnnuel {
        modeCalculTaux: number;
        nombrePeriodeParAn: number;
        tauxActu: number;
        tauxProp: number;
        marge: number;
        valeurIndice: number;
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITypeGarantie {
        natureGarantieEPS: string;
        libelleLongNatureGarantie: string;
        libelleCreationNatureGarantie: string;
        classeGarantie: number;
        dateDebutValidite: string;
        dateFinValidite: string;
        typeGarantieEPSNational: string;
        codeDeclarationABDF: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     * Objet permattant l'affichage dans le composant Synthèse des erreurs
     */
    class ErreurFormulaire {
        ancre: string;
        libelle: string;
        description: string;
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IException {
        libelle: string;
        valeurs: Array<string>;
        codeLibelle: string;
        causes?: Array<string>;
        codeHttp?: number;
    }
    class Exception implements IException {
        libelle: string;
        valeurs: Array<string>;
        codeLibelle: string;
        constructor(libelle?: string);
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     * Objet manipulé dans la liste de selection multiple des phases des frais
     */
    class FraisPhaseChoix {
        codeTypePhase: string;
        libelleTypePhase: string;
        value: boolean;
        listeIdPhase: Array<string>;
        constructor(typePhase: Modele.ISelectbox);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IElementChecked {
        checked: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     * Contient les objets du projet utilisables en session
     */
    interface IProjetSession {
        projet: Modele.IProjet;
        batimentHabitableFinance: Modele.IBatimentHabitableFinance;
        bienAVendre: Modele.IBienAVendre;
        terrainFinance: Modele.ITerrainFinancee;
        constructionFinancee: Modele.IConstructionFinancee;
        travauxFinances: Modele.ITravauxFinances;
        soulteFinancee: Modele.ISoulteFinancee;
        bienDetaille: Modele.IBienDetaille;
        reamenagement: Modele.IReamenagement;
        complementDossier: Modele.IComplementDossier;
        bienSousJacent: ApiInstuctionCredit.Modele.IBienSousJacent;
        terrainSousJacent: ApiInstuctionCredit.Modele.ITerrainSousJacent;
        promotionImmobiliere: IPromotionImmobiliereLecture;
    }
    /**
     * Contient les objets du projet de mise à jour
     */
    interface IObjetsProjetMaj {
        projetMaj: ApiInstuctionCredit.Modele.ProjetImmobilierMaj;
        batimentHabitableFinanceMaj: Modele.BatimentHabitableFinanceMaj;
        terrainFinanceMaj: Modele.TerrainFinanceMaj;
        constructionFinanceeMaj: Modele.ConstructionFinanceeMaj;
        travauxFinancesMaj: Modele.TravauxFinancesMaj;
        soulteFinanceeMaj: Modele.SoulteFinanceeMaj;
        bienSousJacentMaj: Modele.IBienSousJacentMaj;
        terrainSousJacentMaj: ApiInstuctionCredit.Modele.ITerrainSousJacentMaj;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ISelectbox {
        libelle: string;
        code: string;
    }
    interface ISelectboxNumber {
        libelle: string;
        code: number;
        tri?: Array<number>;
    }
    interface ISelectboxBoolean {
        code: boolean;
        libelle: string;
    }
    /**
     * Dans le cadre de l'ajout d'un accessoire complé
     */
    interface ISelectboxAccessoire {
        libelle: string;
        codeTypeAccessoire: string;
        codeSousTAccessoireComplement: string;
    }
    /**
     * Dans le cas du RAF lors de l'affectation totale
     */
    interface ISelectboxRafTotal extends ISelectbox {
        libelle: string;
        code: string;
        typeElement: ApiInstuctionCredit.Enum.RafTypeElement;
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     * En haut de chaque page est affiché la synthèse des erreurs, permet de gérer chaque partie affichée
     */
    interface ISyntheseErreurDossier {
        titre: string;
        listeTypeControle: Array<Enum.TypeControleDossier>;
        listeAnomalies: Array<Modele.AnomalieDossier>;
    }
    class SyntheseErreurDossier implements ISyntheseErreurDossier {
        titre: string;
        listeTypeControle: Array<Enum.TypeControleDossier>;
        listeAnomalies: Array<Modele.AnomalieDossier>;
        constructor(titre: string, listeTypeControle: Array<Enum.TypeControleDossier>);
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     * Dans la partie montage, les assurances sont affichées synthètiquement par assuré selon le type de convention dans un tableau
     */
    interface IDetailAssure {
        personne: Modele.IPersonne;
        libelleAssure: string;
        libelleAssurance: string;
        libelleStatut: string;
        listeAssurances: Array<Modele.IAssurance>;
    }
    class DetailAssure implements IDetailAssure {
        personne: Modele.IPersonne;
        libelleAssure: string;
        libelleAssurance: string;
        libelleStatut: string;
        listeAssurances: Array<Modele.IAssurance>;
        constructor(pPersonne: Modele.IPersonne, libelleCompagnie: string, pListeAssurance: Array<Modele.IAssurance>);
        /**
         * Génération de libellé de la personne assurée
         * @param personne
         */
        static getLibelleAssure(personne: Modele.IPersonne): string;
        /**
         * Génération de libellé des infos de l'assurance
         * @param personne
         * @param compagnie
         * @param nbAssurance
         */
        static getLibelleAssurance(personne: Modele.IPersonne, compagnie: string, nbAssurance: number): string;
        /**
         * Récupération du libellé du type de rôle de la personne
         * @param typeRole
         */
        static getTypeRolePersonne(typeRole: string): string;
        static getStatutDecision(listeCodeEtatAccessoire: Array<number>, estAssuranceCnp: boolean): string;
        /**
         * Génération du libellé du statut de la décision
         * En CNP : A créer, En attente, Accordé
         * Non CNP : En attente, Accordé
         * @param compagnie
         */
        private getStatutDecision(listeAssurances);
        private getStatutDecisionCreerDossCNP(personne);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAvis {
        idws: string;
        dateSaisieAvis: string;
        libelleAvis: string;
        idEntiteSaisieAvis?: string;
        libelleEntiteSaisieAvis?: string;
        codeTypologieAvis: string;
        numeroAvis?: number;
    }
    class Avis implements IAvis {
        idws: string;
        dateSaisieAvis: string;
        libelleAvis: string;
        idEntiteSaisieAvis: string;
        libelleEntiteSaisieAvis: string;
        codeTypologieAvis: string;
        numeroAvis: number;
        constructor(libelleAgent: string);
    }
    class AvisMaj {
        idws: string;
        dateSaisieAvis: string;
        libelleAvis: string;
        codeTypologieAvis: string;
        valide: boolean;
        motif: string;
        constructor(avis: IAvis);
    }
    interface IAvisMaj {
        dateSaisieAvis?: string;
        libelleAvis: string;
        codeTypologieAvis: string;
        valide: boolean;
        motif: string;
    }
    class AvisConformite implements IAvis {
        dateSaisieAvis: string;
        idws: string;
        libelleAvis: string;
        codeTypologieAvis: string;
        valide: boolean;
        motif: string;
        constructor(dateSaisieAvis: string);
    }
    interface IAvisRequest {
        identifiantDossier: string;
        avisMiseAJour: IAvisMaj;
        dossierFerme: boolean;
    }
    interface IAvisLecture {
        dateSaisieAvis: string;
        libelleAvis: string;
        idEntiteSaisieAvis: string;
        libelleEntiteSaisieAvis: string;
        codeTypologieAvis: string;
        numeroAvis: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerCollectivitesRequest {
        identifiantDossier: string;
        identifiantPersonne: string;
        identifiantPlanFinancement: string;
    }
    interface ICollectiviteCNP {
        cle: string;
        valeur: string;
    }
    interface IResultatCollectiviteCNP {
        libelleErreur: string;
        listeCollectiviteCNP: Array<ICollectiviteCNP>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IConsulterDocumentsDossierCNPRequest {
        identifiantDossier: string;
        identifiantPersonne: string;
        identifiantPlanFinancement: string;
    }
    interface ICreerDossierCNPRequest {
        identifiantDossier: string;
        identifiantPersonne: string;
        identifiantPlanFinancement: string;
        codeCollectiviteCNP: string;
        forcerCreation: boolean;
    }
    interface IResultatCreationDossierCNP {
        idDossierCNP: string;
        libelleErreur: string;
        dossierAssurance: IDossierAssuranceLecture;
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
    interface IDocumentAssuranceLecture extends IElementLecture {
        /**
         * IdDocument
         */
        idDocument: string;
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * IdContrat
         */
        idContrat: string;
        /**
         * TabDonneesDocument
         */
        tabDonneesDocument: string;
    }
    interface IResultatDocumentsDossierCNP {
        /**
         * LibErreur
         */
        libelleErreur: string;
        /**
         * Documents
         */
        documents: Array<IDocumentAssuranceLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreditModalite {
        idws: string;
        idModeleCalculImpe: string;
        tauxIndemniteRemboursementAnticipe: number;
        numeroModeleRemboursementAnticipe: number;
        surcTauxParRappRemboursementAnticipe: number;
        tauxInterieurRetardImpe: number;
        montantIndemniteImpe: number;
        codeTraitementInterieurIntrSurImpe: number;
        idCreditIntr: string;
        modalitesImpayes?: IModalitesImpayes;
    }
    interface ICreditModaliteMaj {
        idws: string;
        idModeleCalculImpe: string;
        tauxIndemniteRemboursementAnticipe: number;
        numeroModeleRemboursementAnticipe: number;
        surcTauxParRappRemboursementAnticipe: number;
        tauxInterieurRetardImpe: number;
        montantIndemniteImpe: number;
        codeTraitementInterieurIntrSurImpe: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ILireDecisionCNPRequest {
        identifiantDossier: string;
        identifiantPersonne: string;
        identifiantPlanFinancement: string;
        codeCollectiviteCNP: string;
        forcerDecision: boolean;
    }
    interface IResultatDecisionCNP {
        assuranceCNP: string;
        libelleErreur: string;
        dossierAssurance: IDossierAssuranceLecture;
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
    interface IDataResultatCNP {
        resultatDecisionCnp: IResultatDecisionCNP;
        idwsPersonne: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeControleDecision {
        /**
         * IdntDoss
         */
        idDossier: string;
        /**
         * DateAccordPreteur
         * Type date au format yyyy-MM-dd
         */
        dateAccordPreteur: string;
        /**
         * bForcerCtrlAvtAccPret
         */
        forcerControleAvtAccessoirePret: boolean;
        /**
         * bForcerCtrlBale2
         */
        forcerControleBale2: boolean;
        /**
         * bForcerCtrlReglementaire
         */
        forcerControleReglementaire: boolean;
    }
    interface IEntreePasserAccordPreteur {
        /**
         * EntreeControleDecision
         */
        entreeControleDecision: IEntreeControleDecision;
        /**
         * Avis
         */
        avis: string;
        /**
         * bCtrlDecisionEffectue
         */
        controleDecisionEffectue: boolean;
        /**
         * bCtrlReglementaireForcee
         */
        controleReglementaireForcee: boolean;
        /**
         * bCtrlCtfprmA3Forcee
         */
        controleCtfprmA3Forcee: boolean;
    }
    interface IEntreeModificationAccordPreteur {
        /**
         * EntreeControleDecision
         */
        entreeControleDecision: IEntreeControleDecision;
        /**
         * Avis
         */
        avis: string;
        /**
         * bCtrlDecisionEffectue
         */
        controleDecisionEffectue: boolean;
    }
    interface IExecuterCalculDelegationDecisionRequest {
        identifiantDossier: string;
        identifiantAgentTransfert: string;
        reponse: boolean;
        continu: boolean;
    }
    interface IExecuterBale2Request {
        identifiantDossier: string;
        idPlnFint: string;
    }
    interface IResultatCalculDelegation {
        moteurDelegationExterne: boolean;
        niveauDelegationAgent: string;
        valeur: string;
        reponseAutorisation: boolean;
        libelleNiveauRequis: string;
        niveauRequis: string;
        erreurDelegation: IErreurDelegation;
        dateDecision: string;
        etatDossier: string;
        notationBale2: string;
        accessoireSaccef: boolean;
        accessoireEnet: boolean;
        listeAnomalieLecture: IAnomalieLecture[];
    }
    interface IErreurDelegation {
        titre: string;
        descriptionsErreur: Array<string>;
    }
    interface IRetourPasserAccordPreteur {
        validationReussie: boolean;
        retourControleDecision: IRetourControleDecision;
        anomalies: Array<IAnomalieLecture>;
        anomaliesPreRequis: Array<IAnomalieLecture>;
        anomaliesControleBale2ApresValidation: Array<IAnomalieLecture>;
        anomaliesControleAvantEnvoiSaccef: Array<IAnomalieLecture>;
    }
    interface IRetourControleDecision {
        validationPossible: boolean;
        modificationPossible: boolean;
        existeImpactTarification: boolean;
        transfertPossible: boolean;
        visualisationDetailPossible: boolean;
        anomalies: Array<IAnomalieLecture>;
        anomaliesControleAvtAccessoirePret: Array<IAnomalieLecture>;
        anomaliesControleBale2: Array<IAnomalieLecture>;
        anomaliesControleReglementaire: Array<IAnomalieLecture>;
        controleReglementaireForcee: boolean;
        controleCtfprmA3Forcee: boolean;
        noteBale2: string;
        libelleRisque: string;
        marge: string;
        margeCom: string;
        libelleErreurDelegationTaux: string;
    }
    interface IForcerControleDecision {
        anomaliesAvantAccordPreteurForcees: boolean;
        anomaliesBale2Forcees: boolean;
        anomaliesReglementaireForcees: boolean;
    }
    interface IResultatBale2 {
        listeAno: Array<IAnomalieLecture>;
        libelleResultat: string;
    }
    interface IDebranchementEnet {
        donneesGarantie?: IDonneesGarantie;
        donneesDecision?: IDonneesDecision;
    }
    interface IDonneesGarantie {
        garantie: IGarantie;
        libelleGarant: string;
    }
    interface IDonneesDecision {
        transfert: boolean;
        informationTransfert: ISdInformationTransfert;
    }
    interface IRetourModificationAccordPreteur {
        modificationReussie: boolean;
        retourControleDecision: IRetourControleDecision;
        anomalies: Array<IAnomalieLecture>;
        anomaliesPreRequis: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDecisionDossierAssuranceLecture {
        /**
         * AccesLectureDecision
         */
        accessoireLectureDecision: boolean;
        /**
         * AvisValide
         */
        avisValide: boolean;
        /**
         * CodeDecision
         */
        codeDecision: number;
        /**
         * LibelleCredit
         */
        libelleCredit: string;
        /**
         * LibelleAvis
         */
        libelleAvis: string;
        /**
         * LibelleErreur
         */
        libelleErreur: string;
    }
    interface IEtatDossierAssuranceLecture {
        /**
         * LibelleEtat
         */
        libelleEtat: string;
        /**
         * LibelleDossier
         */
        libelleDossier: string;
        /**
         * LibelleDemande
         */
        libelleDemande: string;
        /**
         * LibelleDateEnvoi
         */
        libelleDateEnvoi: string;
    }
    interface IDossierAssuranceLecture {
        etatDossierAssurance: IEtatDossierAssuranceLecture;
        decisionDossierAssurance: IDecisionDossierAssuranceLecture;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirVersementRequest {
        identifiantDossier: string;
        numeroEchelle: number;
        montantMinimum: number;
        idwsCredit: string;
    }
    interface IDescriptionEchelle {
        idCaisseEpargne: number;
        typeObjetRegleTor: string;
        numeroDech: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        sousclassePieceJustificatif: string;
        libelleEchelle: string;
        codeTypeAssiette: number;
        codeTypeEchelle: number;
        codeCompmEchelle: number;
    }
    interface IEchelonVersement {
        numeroOrdreClassement: number;
        tauxVersement: number;
        codeEchelonnement: string;
        libelleNature: string;
        libelleCreationNature: string;
    }
    interface IEchelleVersement {
        idCaisseEpargne: number;
        typeObjetRegleTor: string;
        numeroDech: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        sousclassePieceJustificatif: string;
        libelleEchelle: string;
        codeTypeAssiette: number;
        codeTypeEchelle: number;
        codeCompmEchelle: number;
        informationEchelle: Array<IEchelonVersement>;
    }
    interface IVersement {
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        montantMinimumVersement: number;
        pourcentageVersement: number;
        numeroEchelleVersement: number;
        numeroOrdreClasse: number;
        libelleAvnc: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IExecuterAnalyseDeRisqueRequest {
        identifiantDossier: string;
        identifiantPlanFinancement: string;
        analyseSimplifiee: boolean;
        modePrescore: boolean;
        sauvegarderResultatADR: boolean;
    }
    interface IDetailRaisonnementADR {
        idDossierInstruction: string;
        numeroVersementAnls: number;
        numeroRelationPlanDossier: number;
        numeroRelationVersementReslt: number;
        codeRespRegleI: number;
        montantValeurGageCorg: number;
        tauxEndtAvecAf: number;
        tauxEndtNonLocf: number;
        tauxEndtLocf: number;
        tauxEpargneFinancier: number;
        tauxPatr: number;
        tauxRendt: number;
        quotientLoyePerc: number;
        quotientLoyePerc1: number;
        pourcentageLoye: number;
        pourcentageTravaux: number;
        coutOprt: number;
        montantTotalPretExterne: number;
        montantTotalPretCff: number;
        quotientFinancier: number;
        quotientGarantie: number;
        montantChargeLoctNetHors: number;
        montantRevnLocfNetHors: number;
        montantChargeLoctNet: number;
        montantRevnLocfNetProjet: number;
        montantRessourceHorsImmobilier: number;
        montantChargeDisp: number;
        montantRessourceDisp: number;
        motnChargePret: number;
        montantCalculTarf: number;
        montantEstmGage: number;
        montantPatrimoine: number;
        coutAcqsPlusTerr: number;
        coutTravauxPlusConstruction: number;
        codeTypeEmprunt: number;
        montantChargeBrutOprt: number;
        montantAPL: number;
        montantDettNonLoct: number;
        montantDettLoct: number;
        montantRetnAf: number;
        montantChargeMain: number;
        montantChargeDisp1: number;
        montantCumuleLoyePerc: number;
        montantCumuleLoyePerc1: number;
        tauxEndtHorsLoye: number;
        tauxEndtAvecLoye: number;
        codeModeCalculNoteExpression: string;
        codeModeCalculNoteComb: string;
        codeNote: number;
        codeNoteComb: number;
        niveauDele: string;
        montantRevnTousEmprunt: number;
        montantPretIntituleHorsAdss: number;
        montantCoutOprt: number;
        codePaysGage: string;
        chargeOprtAvenantApres: number;
        montantPretPrincipal: number;
        codeIndiceAchtNeuf: number;
        pourcentagePassRevn: number;
        tauxEffrInvs: number;
        codeClientRisqueExpt: string;
        quotientFinancierClient: number;
        codeProduit: string;
        montantRevnAnnuEmprunt: number;
        tauxEffrGlblClient: number;
        tauxEffrBail: number;
        pourcentagePatrimoineNetPret: number;
        quotientPretRelease: number;
        quotientLongTerme: number;
        tauxEffrRevnAttn: number;
        pourcentageLoyeCharge: number;
        pourcentageValeurPrix: number;
        nombreCreditConsolideRach: number;
        pourCreditConsolideRach: number;
        codeResdPrincipal: number;
        pourPatrimoineNetRevision: number;
        codeMatrimonialClient: number;
        montantPretLong: number;
        dureeAjstPret: number;
        codeTypePret: number;
        nombrePretLissage: number;
        ageFinPret65: number;
        codeTypeSituationMart: number;
        codeCohrRevn: number;
        montantRevnCharge: number;
        codeDureeAjstPret: number;
        codeNatureHypotheque: number;
        codeDernierExpression: string;
        codeSegtMarcheBien: string;
        codeNatureOprt: string;
        codeTypeBien: number;
        codeDestinataireAutreBien: string;
        codeDestinataireBien: string;
        codeOprtAchtRvnt: number;
        codeNatureBien: string;
        dureePretPrincipal: number;
        codePrmAccd: number;
        codeResdBien: number;
        codeTypeReglementPret: number;
        codeExpt: number;
        codeDeptGarantie: string;
        dureeProfEmprunt: number;
        indiceEpargneJustificatif: number;
        codePrmInvs: number;
        codeJeunInvs: number;
        codeProfilBail: number;
        situationFamille: string;
        stttResd: string;
        catInteretPrEmpPrincipal: string;
        ageClient: number;
        montantEncoursPret: number;
        nombreEmpruntActf: number;
        tauxEffrAccessoire: number;
        montantMoyenLoye: number;
        codeProfilTarf: string;
        pourcentageSeuilTauxEffr: number;
        pourcentageSeuilTauxEpargne: number;
        codeRisque: string;
        codeEncours: number;
        codeTypeEncours: number;
        codeGammeProduit: string;
        montantRestantVivrNEO: number;
        codeDeptLogement: string;
        nombreEnfant: number;
        montantChargeIncm: number;
        montantRevnDisp: number;
        tauxEffrStress: number;
        noteEncoursAccessoire: string;
        noteEncoursLocf: string;
        noteEncours: string;
        codePertProduit: string;
        tauxLgd: number;
        codeSegtRisqueClient: string;
        codeImpcSegtRisque: number;
        codeImpcCapm: number;
        codeVariable1NoteNif: number;
        codeVariable2NoteNif: number;
        codeVariable3NoteNif: number;
        codeVariable4NoteNif: number;
        codeVariableNoteNif: number;
        codeVariable6NoteNif: number;
        codeVariable7NoteNif: number;
        codeVariable8NoteNif: number;
        codeVariable9NoteNif: number;
        codeVariable10NoteNif: number;
        codeNoteNif: string;
        montantEpargneLiquideJustificatif: number;
        montantLtv: number;
        restantVivr: number;
        numeroInstcTheme1: number;
        codeCateClient: string;
        codeEtapeOprt: number;
        catInteretPrEmpPrincipal1: string;
        loclEmplr: string;
        tauxEffrBailStress: number;
        critereFinancierDelegation: number;
        codeRevnEligibilite: number;
        montantFrsNegocie: number;
        montantTVAFinancierARemboursement: number;
        codeCanlApport: number;
        codeNatureTaux: number;
        codeFamilleProduit: string;
        codeTypeOprt: string;
        codePresenceCompGarantie: number;
        montantQuotientAssurancePret: number;
        codeTypeAssurance: string;
        codeTypeBienGage: number;
        codeZoneImpl: number;
        codeZoneGeographique: number;
        catInteretPrEmpPrincipal2: number;
        codeTypeContratEmbcEmp: number;
        categorieInteretPrCoEmp: number;
        codeTypeContratEmbcCoem: number;
        dureeProfCoEmprunt: number;
        montantEpargneAvenantOprt: number;
        codeTypeFct: number;
        nombreEnfant2: number;
        codeModeLogement: number;
        age: number;
        frsNotaire: number;
        nombreEmprunt: number;
        codeProfilClient: number;
        montantTotalPatrimoine: number;
        quotientRisque: number;
        tauxRendtLocf: number;
        codeIndiceAssuranceLoct: number;
        pourcentageLoyeRevn2: number;
        montantQuotientAssurancePretRelease: number;
        typeCtrAssurancePretRelease: number;
        codePaysResd: number;
        codeNational: number;
        codeNoteOprt: number;
        codeNoteClient: number;
        codeNoteRisqueFinancier: string;
        codeNoteRisqueGarantie: string;
        codeNoteRisqueProf: string;
        codeNoteRisqueFinancier1: string;
        codeNoteRisquePersonne: string;
        variableRisqueFinancier: string;
        variableRisqueGarantie: string;
        variableRisqueProf: string;
        variableRisqueFinancier1: string;
        variableRisquePersonne: string;
        montantApptOrgDon: number;
        montantApptOrgEpargne: number;
        montantApptOrgVente: number;
        montantApptOrgHeritage: number;
        montantApptOrgAtoutClic: number;
        montantApptOrgAutre: number;
        montantApportPersonnel: number;
        ratioPretsConsommationRevenus: number;
        nombrePretsConsommation: number;
        nombrePretsRevolving: number;
        montantFraisNotaire: number;
        montantFraisGarantie: number;
        montantFraisDivers: number;
        montantAugmBfr: number;
        montantAtoutClic: number;
        quotientFinHorsAtoutClic: number;
        ancienneteLogementEmprunt: number;
        noteScoreBest: string;
        valeurNettePatrimImmobilier: number;
        codeNaturePrescipteur: string;
        codeScpEmprunt: string;
        codeScpCodeEmprunt: string;
        codeNatureGarantie: string;
        numeroObjetDossier: number;
        codeCroisementCSP: string;
        codeRatioPassifDeptGage: string;
        codeSituationFamiliale: string;
        codeAncienneteProfEmprunt: string;
        codeNombreActifMenage: number;
        codeApplication: string;
        codeNotePrescore: string;
        codeGranTenueCompte: number;
        nombrePointsRemonteBest: number;
        codeNoteScoreOctroi: string;
        codeTypeDossierNote: number;
        nombrePointsVariablesScore1: number;
        nombrePointsVariablesScore2: number;
        nombrePointsVariablesScore3: number;
        nombrePointsVariablesScore4: number;
        nombrePointsVariablesScore5: number;
        nombrePointsVariablesScore6: number;
        nombrePointsVariablesScore7: number;
        nombrePointsVariablesScore8: number;
        nombrePointsVariablesScore9: number;
        nombrePointsVariablesScore10: number;
        nombrePointsVariablesScore11: number;
    }
    interface IResultatADR {
        listeAno: Array<IAnomalieLecture>;
        raisonnement: string;
        detailRaisonnementADR: IDetailRaisonnementADR;
        analyseMeneeATerme: boolean;
        synthese: string;
    }
}

declare module ApiInstuctionCredit.Modele.ListerClausesSuivi {
    interface IScCriteresAcces {
        /**
         * RubriquesFiltre
         */
        rubriquesFiltre: Array<string>;
        /**
         * ValeursFiltre
         */
        valeursFiltre: Array<any>;
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
    interface IScClausesSuivi {
        /**
         * Idfcej_IdntCaisEpar
         */
        idCaisseEpargne: number;
        /**
         * Idfccl_IdntClse
         */
        idClasse: string;
        /**
         * Nofcpa_NOrdrRatPargClse
         */
        nOrdreRatParagrapheClasse: number;
        /**
         * Nufcrl_NumrRelt
         */
        numeroRelation: number;
        /**
         * Llfcpa_TitrParg
         */
        titreParagraphe: string;
        /**
         * Lvfcpa_CorpParg
         */
        corpsParagraphe: string;
        /**
         * Cdfccl_CodeMiseFormParg
         */
        codeMiseFormeParagraphe: string;
    }
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        criteresAccess: IScCriteresAcces;
        identifiantClause: string;
        optim: boolean;
        initMontant: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerModalitImpayesRequest {
        dateTraitement: string;
        controle: boolean;
        sousclasseCriteresAccessoire?: Parametrage.IScCriteresAcces;
        identifiantCaisse: number;
        typeMarche: number;
        codeSecteurRattachement: string;
        typeLoi: number;
        dateFinApplication: string;
        identifiantModaliteImpaye: string;
        versionWsdl: number;
    }
    interface IModalitesImpayes {
        idCaisseEpargne: number;
        idModeleCalculImpaye: string;
        dateFinApplication: string;
        codeSecteurRattachementEmprunt: string;
        codeTypeMarche: number;
        dateDebutApplication: string;
        numeroRegleCalculModeleImpaye: string;
        libelleModeleCalculImpaye: string;
        codeTypeTauxModeleImpaye: number;
        montantMinimumIndemniteImpaye: number;
        montantMaximumIndemniteImpaye: number;
        montantIndemniteImpaye: number;
        tauxMinimumIntrRetardImpaye: number;
        tauxMaximumIntrRetardImpaye: number;
        tauxIntrRetardImpaye: number;
        tauxRedtIntrRetardImpaye: number;
        montantMinimumAccessoirePourRecouvrement: number;
        codeCompatibiliteLoiScrivener: number;
        compteurMAJ: number;
        numeroOrdreClasse: number;
        codeDevise: string;
        codeFamilleControle: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IParamTypeDuree {
        typeLoiScrivener: number;
        dateDebutValidite: string;
        dateFinValidite: string;
        libelleParametre: string;
        dureeJourLoiScrivener: number;
        delaiMinimumVersementImed: number;
        delaiMinimumDacc: number;
        delaiRtrac: number;
        dateCreation: string;
        codeTechniqueVent: number;
        delaiMinimumVersementImed1: number;
        codeTypeCalcul: number;
        codeReductionDelaiRtrac: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterPayeurRequest {
        identifiantDossier: string;
        identifiantCredit: string;
        identifiantPersonne: string;
        payeurMiseAJour: IPayeurMaj;
    }
    interface IPayeur {
        idws: string;
        montantPaiementCredit: number;
        pourcentagePaiementCredit: number;
        modeRegleUtilisationParPayr: string;
        numeroComptePayr: string;
        referenceUniqueMand: string;
        dateSigneMand: string;
        modeRegleUtilisationParPayrSecours: string;
        numeroComptePayeurSecours: string;
        referenceUniqueMandSecours: string;
        dateSigneMandSecours: string;
        idCreditIntr: string;
        idPersonneIdCommissionPayr: string;
        compte?: IComptePersonne;
        personne?: IPersonne;
    }
    interface IPayeurMaj {
        idws?: string;
        montantPaiementCredit: number;
        pourcentagePaiementCredit: number;
        modeRegleUtilisationParPayr: string;
        numeroComptePayr: string;
        personneMaj: Modele.PersonneMaj;
        referenceUniqueMand: string;
        dateSigneMand: string;
        modeRegleUtilisationParPayrSecours: string;
        numeroComptePayeurSecours: string;
        referenceUniqueMandSecours: string;
        dateSigneMandSecours: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerRemboursementAnticipeRequest {
        dateTraitement: string;
        codeProduit: string;
        controle: boolean;
        sousclasseCriteresAccessoire?: Parametrage.IScCriteresAcces;
        numeroProduit: string;
        codeInteretCompensateurRA: number;
        typeLoi: number;
        versionWsdl: number;
    }
    interface IRemboursementAnticipe {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        numeroModeleRa: number;
        dateTraitement: string;
        idConditionRa: string;
        idModeleCalculIndemniteRa: string;
        pourAssociationCalculModeleRa: number;
        pourAssociationRegleAutreRa: number;
        sucouTaux: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        codeAutreRa: number;
        codeAutreRaPart: number;
        codeAutreRaPref: number;
        codeDateDebutAutreRa: string;
        codeModCalcultaSuiteARa: number;
        codeNumeroRegleAutreRa: string;
        codeCompLoi: number;
        codeModeCalculIndemRa: number;
        codeNumeroRegleCalculAccessoire: string;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        tauxConsolideAccessoire: number;
        codeIntrCompRa: number;
        detailModalite: string;
        libelleStandard: string;
        codeAutrRaTotalInferieurMntMini: number;
        codeTypeAssietteCalcAccessoire: string;
        codeTypeAssietteMntantMinimumRa: number;
        pourcentageMntantMinimumRaAutre: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IResultatContexteCnp {
        idDossierCNP: string;
        libelleErreur: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        actionCtxCNP: string;
        jetonCtxCNP: string;
        referenceCtxCNP: string;
        codeCollSelectCtxCNP: string;
        nomCtxCNP: string;
        prenomCtxCNP: string;
        dateNaissanceCtxCNP: string;
    }
}

declare module ApiInstuctionCredit.Modele.SuivisPlanifies {
    interface ISuiviPlanifieLecture extends IElementLecture {
        idws: string;
        /**
         * Idfarv_IdntSuivPlnf
         */
        idSuivantPlafond: string;
        /**
         * Ctfcrw_CateSuivPlnf
         */
        cateSuivantPlafond: string;
        /**
         * Ctfcrv_CodeTypeSuivPlnf
         */
        codeTypeSuivantPlafond: string;
        /**
         * Ddfarv_DatePremSuiv
         * Type date au format yyyy-MM-dd
         */
        datePremierSuivant: string;
        /**
         * Dtfarv_DateSuivPlnf
         * Type date au format yyyy-MM-dd
         */
        dateSuivantPlafond: string;
        /**
         * Lbfarw_LiblLibrAsscSuiv
         */
        libelleLibrAssuranceSuivant: string;
        /**
         * Idfccl_IdntClse
         */
        idClasse: string;
        /**
         * Npfcrw_NbPerdSuivPlnf
         */
        nombrePeriodeSuivantPlafond: number;
        /**
         * Ptfcrv_CodePerdSuivPlnf
         */
        codePeriodeSuivantPlafond: number;
        /**
         * Ctfcrd_ReglDeclt
         */
        regleDeclaration: string;
        /**
         * Ctfcfp_TypePhasSuivPlnf
         */
        typePhaseSuivantPlafond: string;
        /**
         * Npfcrx_NbPerdDelDeclSuivPlnf
         */
        nombrePeriodeDelDeclarationSuivantPlafond: number;
        /**
         * Ptfcrx_CodePerdDelDeclSuivPlnf
         */
        codePeriodeDelDeclarationSuivantPlafond: number;
        /**
         * Ctfcrx_CodeAffecSuivPlnfPrdt
         */
        codeAffectationSuivantPlafondProduit: number;
        /**
         * Llfcrv_LiblSuivPlnf
         */
        libelleSuivantPlafond: string;
        /**
         * Llfcrd_LiblRegleDeclmt
         */
        libelleRegleDeclmt: string;
        /**
         * Cifcpe_CodeSuivPlnf
         */
        codeSuivantPlafond: number;
        /**
         * Llfccl_TitreClause
         */
        titreClause: string;
        /**
         * Lbfccl_LiblClause
         */
        libelleClause: string;
        /**
         * Cifcai_CodeSuivPlnfAutoIntr
         */
        codeSuivantPlafondAutomatiqueIntr: number;
        /**
         * Cifcpd_CodePostnmtDefaut
         */
        codePostnmtDefaut: number;
        /**
         * bObligatoire
         */
        obligatoire: boolean;
        /**
         * bAEditer
         */
        aEditer: boolean;
        /**
         * bCompletude
         */
        completude: boolean;
        /**
         * EstActifDateSuiviPlanifie
         */
        estActifDateSuiviPlanifie: boolean;
        /**
         * EstActifAEditer
         */
        estActifAEditer: boolean;
        /**
         * EstVisibleTypePhase
         */
        estVisibleTypePhase: boolean;
        /**
         * EstActifTypePhase
         */
        estActifTypePhase: boolean;
        /**
         * EstVisibleDuree
         */
        estVisibleDuree: boolean;
        /**
         * EstActifDuree
         */
        estActifDuree: boolean;
        /**
         * EstVisiblePeriode
         */
        estVisiblePeriode: boolean;
        /**
         * EstActifPeriodique
         */
        estActifPeriodique: boolean;
        /**
         * EstActifAPeriodique
         */
        estActifAPeriodique: boolean;
        /**
         * EstLienModificationActif
         */
        estLienModificationActif: boolean;
        /**
         * LibelleClause
         */
        libelleClause1: string;
        /**
         * LibellePeriode
         */
        libellePeriode: string;
        /**
         * LibelleDuree
         */
        libelleDuree: string;
        /**
         * LibelleTypePhase
         */
        libelleTypePhase: string;
        /**
         * LibelleDelaiDeclenchement
         */
        libelleDelaiDeclenchement: string;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
    }
    interface IScCriteresAcces {
        /**
         * RubriquesFiltre
         */
        rubriquesFiltre: Array<string>;
        /**
         * ValeursFiltre
         */
        valeursFiltre: Array<any>;
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
    interface IScSuivisPlanifies {
        /**
         * Ctfcrv_CodeTypeSuivPlnf
         */
        codeTypeSuivantPlafond: string;
        /**
         * Cifcai_CodeSuivPlnfAuto
         */
        codeSuivantPlafondAutomatique: number;
        /**
         * Cifcpd_CodePosmtParDeft
         */
        codePositionnementParDeft: number;
        /**
         * Cifcpe_CodeSuivPlnfPerdq
         */
        codeSuivantPlafondPeriodique: number;
        /**
         * Npfcrw_NbSuivPlnf
         */
        nombreSuivantPlafond: number;
        /**
         * Ptfcrv_PerdicSuivPlnf
         */
        periodiciteSuivantPlafond: number;
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
        /**
         * Npfcrx_DelaiDeclt
         */
        delaiDeclaration: number;
        /**
         * Ptfcrx_PerdicDelaiDeclt
         */
        periodiciteDelaiDeclaration: number;
        /**
         * Ctfcrw_CodeCatgSuivPlnf
         */
        codeCategorieSuivantPlafond: string;
        /**
         * Llfcrv_LiblLongSuivPlnf
         */
        libelleLongSuivantPlafond: string;
        /**
         * Lcfcrv_LiblCrtSuivPlnf
         */
        libelleCreationSuivantPlafond: string;
        /**
         * Ctfcrx_CodeAffecSuivPlan
         */
        codeAffectationSuivantPlan: number;
        /**
         * Idfccl_IdntClse
         */
        idClasse: string;
        /**
         * Llfccl_TitrClse
         */
        titreClasse: string;
        /**
         * Lbfccl_LiblClse
         */
        libelleClasse: string;
        /**
         * Ctfcrd_CodeReglDeclt
         */
        codeRegleDeclaration: string;
        /**
         * Llfcrd_LiblLongReglDeclt
         */
        libelleLongRegleDeclaration: string;
    }
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        criteresAccess: IScCriteresAcces;
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
         * Type date au format yyyy-MM-dd
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
    interface IElementLecture {
        /**
         * Idws
         */
        idws: string;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
    interface IAjouterSuiviPlanifieRequest {
        identifiantDossier: string;
        identifiantCredit: string;
        typeSuivantPlafond: string;
    }
    interface ISuiviPlanifieMaj extends IElementMaj {
        /**
         * Ddfarv_DatePremSuiv
         * Type date au format yyyy-MM-dd
         */
        datePremierSuivant?: string;
        /**
         * Dtfarv_DateSuivPlnf
         * Type date au format yyyy-MM-dd
         */
        dateSuivantPlafond?: string;
        /**
         * Lbfarw_LiblLibrAsscSuiv
         */
        libelleLibrAssuranceSuivant?: string;
        /**
         * Idfccl_IdntClse
         */
        idClasse?: string;
        /**
         * Npfcrw_NbPerdSuivPlnf
         */
        nombrePeriodeSuivantPlafond?: number;
        /**
         * Ptfcrv_CodePerdSuivPlnf
         */
        codePeriodeSuivantPlafond?: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITypeReglement {
        codeModeRegle: string;
        libelleLongModeRegle: string;
        libelleCreationModeRegle: string;
        codeTypeDomiciliation: string;
        codeUtilisationModeRegle: number;
        codeModeTraitement: string;
        delaiExactModeRegle: number;
        delaiRetardPaiement: number;
        codeModeExactRegle: number;
        codeRegleInterieur: number;
        codeDomaineExactRegle: string;
        codeModeRegleComptable: string;
        numeroOrdreClasse: number;
        codeRegrEcheance: number;
        delaiRetardPaiementRa: number;
        dateDebutValidite: string;
        dateFinValidite: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterClausePersonnaliseeRequest {
        identifiantDossier: string;
        clausePersonneMiseAJour: ClausePersonnaliseeMaj;
    }
    interface IClausePersonnalisee {
        idws: string;
        destinataireClausePersonne: number;
        libelleClausePersonne: string;
        numeroRelationClausePersonne: number;
    }
    class ClausePersonnalisee implements IClausePersonnalisee {
        idws: string;
        destinataireClausePersonne: number;
        libelleClausePersonne: string;
        numeroRelationClausePersonne: number;
        constructor(destinataire: ApiInstuctionCredit.Enum.DestinataireClausePersonne);
    }
    class ClausePersonnaliseeMaj {
        idws: string;
        destinataireClausePersonne: number;
        libelleClausePersonne: string;
        constructor(clause: IClausePersonnalisee);
    }
    /**
     * Clause personnalisée. Ancienne classe qui devrait disparaitre dès que le dictionnaire sera harmonisé côté REST.
     */
    class OldClausePersonnaliseeMaj {
        idws: string;
        destinataireClassePersonne: number;
        libelleClassePersonne: string;
        constructor(clause: IClausePersonnalisee);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeControleEdition {
        idDossier: string;
        forcerControleAccessoireOffre: boolean;
        forcerControleCmpltModRecouvrement: boolean;
        forcerControleMandat: boolean;
        forcerControleEdition: boolean;
    }
    class EntreeControleEdition implements IEntreeControleEdition {
        idDossier: string;
        forcerControleAccessoireOffre: boolean;
        forcerControleCmpltModRecouvrement: boolean;
        forcerControleMandat: boolean;
        forcerControleEdition: boolean;
        constructor(idwsDossier: string);
    }
    interface IRetourControleEdition {
        anomalies: Array<IAnomalieLecture>;
        anomaliesControleAccessoireOffre: Array<IAnomalieLecture>;
        anomaliesControleModaliteRecouvrement: Array<IAnomalieLecture>;
        anomaliesControleMandats: Array<IAnomalieLecture>;
        anomaliesControleEditionOffre: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IListerDocumentsRequest {
        identifiantDossier: string;
        typeListe: number;
        identifiantPlanFinancement: string;
    }
    interface IEditDocumentRequest {
        identifiantDossier: string;
        identifiantWs: string;
        identifiantDocument: string;
        parametres?: Array<Object>;
        formatEditique: number;
        typeEdition: number;
    }
    interface IResultatListerDocuments {
        listeAno: IAnomalieLecture[];
        listeInformationDocument: IInfoDocument[];
    }
    interface IEditerDocumentsRequest {
        identifiantDossier: string;
        parametreEdition: IParametreEditionPieco;
    }
    interface IParametreEditionPieco {
        /**
         * IdentifiantWsDocument
         */
        identifiantWsDocument: string;
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * CodeSignature
         */
        codeSignature: number;
        /**
         * NiveauTraitement
         */
        niveauTraitement: number;
        /**
         * IdEntiteFonctionnelle
         */
        idEntiteFonctionnelle: string;
        /**
         * CodeTypeEntite
         */
        codeTypeEntite: string;
        /**
         * ModeEdition
         */
        modeEdition: number;
        /**
         * TypeEditique
         */
        typeEditique: number;
        /**
         * FormatEditique
         */
        formatEditique: number;
        /**
         * Params
         */
        params: Array<IParamEditique>;
        /**
         * ForceCtrlEdition
         */
        forceControleEdition: boolean;
        /**
         * ForceCtrlGestion
         */
        forceControleGestion: boolean;
    }
    interface IParamEditique {
        /**
         * Id
         */
        id: string;
        /**
         * Data
         */
        data: string;
    }
    interface IInfoDocument {
        codeDoc: string;
        libelleDoc: string;
        codeVariance: number;
        nombreEmp: number;
        nombreNotaire: number;
        nombreCaution: number;
        nombreDossier: number;
        nombreAutre: number;
        nombreTotal: number;
        typeTraitement: number;
        niveauTraitement: number;
        modeleTheorique: string;
        codeProcessus: string;
        estDocOffre: boolean;
        estEditable: boolean;
        idwsElement: string;
        informationPersonne: string;
        nOTICES?: INOTICES;
    }
    interface IDocument {
        fluxImpression: string;
        nom: string;
        libelle?: string;
    }
    interface IDocumentDescription extends IDocument {
        libelleDoc: string;
        nombreTotal: number;
    }
    class DocumentDescription implements IDocumentDescription {
        private document;
        private infoDocument;
        constructor(document: IDocument, infoDocument: IInfoDocument);
        nom: string;
        fluxImpression: string;
        libelleDoc: string;
        nombreTotal: number;
    }
    interface ISdImpressionFZHCOPT {
        numeroProp: number;
        coutTotal: number;
        montantPremierEchHorsAccessoire: number;
        montantPremierEchAvecAccessoire: number;
        apport: number;
        montantFinancementExterieur: number;
        montantFinancementIntitule: number;
        typeEdition: string;
        numeroPlanDossier: number;
    }
    interface IEditerDocumentFZHCOPTRequest {
        identifiantDossier: string;
        idws: string;
        sdImpressionFZHCOPT: ISdImpressionFZHCOPT;
    }
    interface IResultatFZHCOPT {
        fluxImpression: string;
    }
    interface IResultatEditionDocumentsData {
        /**
         * ListeDocument
         */
        listeDocument: Array<IDocument>;
        /**
         * AnomaliesLecture
         */
        anomaliesLecture: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDocumentOffreDescription extends IElement, IElementChecked {
        libelleDocument: string;
        checkable: boolean;
        generation: Enum.Edition.DocumentOffreIndustrialiseeStatutAction;
        ajoutLiasse: Enum.Edition.DocumentOffreIndustrialiseeStatutAction;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ISdInformationTransfert {
        typeTraitementTransfertDossier: number;
        typeTransfertDossier: number;
        sIdAgentTranf?: string;
        premierElementStructure?: string;
        deuxiemeElementStructure?: string;
        troisiemeElementStructure?: string;
        quatriemeElementStructure?: string;
        cinquiemeElementStructure?: string;
        sixiemeElementStructure?: string;
    }
    class InformationTransfert implements ISdInformationTransfert {
        typeTraitementTransfertDossier: number;
        typeTransfertDossier: number;
        sIdAgentTranf: string;
        premierElementStructure: string;
        deuxiemeElementStructure: string;
        troisiemeElementStructure: string;
        quatriemeElementStructure: string;
        cinquiemeElementStructure: string;
        sixiemeElementStructure: string;
        constructor(pTypeTraitementTransfertDossier: ApiInstuctionCredit.Enum.TypeTraitementTransfertDossier, pTypeTransfertDossier: number, idAgent: string, pElementStructure1: string);
    }
    interface ITransfererDossierViaResumeRequest {
        informationTransfert: ISdInformationTransfert;
        dossierResume: Array<Modele.IDossierResume>;
    }
    interface IAutorisationDossier {
        consultation: boolean;
        consultationAvis: boolean;
        instruction: boolean;
        emissionAvis: boolean;
        passageSansSuite: boolean;
        priseEnCharge: boolean;
        retourPriseEnCharge: boolean;
        annulationTransfert: boolean;
        miseEnConformite: boolean;
        retourConformite: boolean;
        adminMDV: boolean;
        copie: boolean;
        decision: boolean;
        retourDecision: boolean;
        mAJAdmin: boolean;
        prorogation: boolean;
        duplication: boolean;
        impor: boolean;
        transfertConformite?: boolean;
        transfertAutreBO?: boolean;
        transfertPropriete?: boolean;
        natureGarantieHorsDossier: string;
        idOrigineGarantieHorsDossier: string;
        codeGarantieRchab: number;
        rangPrincipalHypotheque: number;
        rangSecnHypotheque: number;
        codeCessRangHypotheque: number;
        idEtabPreteur: string;
        villeConsvHypotheque: string;
        datePublHypotheque: string;
        refVolume: string;
        numeroVolume: number;
        dateEffetHypotheque: string;
        dateFinHypotheque: string;
        libelleEmprunt: string;
        libelleNotaire: string;
        villeNotaire: string;
        montantInscHypothequeOrigine: number;
        montantHypothequeDisp: number;
        dateDispMontant: string;
        pactCommr: string;
        codeEtatGarantie: number;
        codeIndiceGarantieExterne: number;
        codeIndiceTrfoGarantie: number;
        dureeInitialMois: number;
        idObjetPortGarantie: string;
        codeTypeGarantieMyss: string;
        idGarantieReel: string;
        listeIdCreditExisteHorsDossier: Array<string>;
    }
    interface IRetourTranfererDossier {
        anomalies: IAnomalieLecture;
        estTransferer: boolean;
    }
    interface IRetourAnnulationTranfertDossier {
        anomalies: IAnomalieLecture;
        transfertAnnule: boolean;
    }
    interface ITransfererProprieteDuDossierRequest {
        identifiantDossier: string;
        identifiantAgentTransfert: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IInstitutsEmission {
        libelleTypeObjetCommercial: string;
        libelleTypeObjetReglemente: string;
        idDossier: string;
        listeCreditInterne: Array<ICreditInterne>;
        eligibiliteModifiable: boolean;
    }
    class InstitutsEmission implements IInstitutsEmission {
        libelleTypeObjetCommercial: string;
        libelleTypeObjetReglemente: string;
        idDossier: string;
        listeCreditInterne: Array<ICreditInterne>;
        eligibiliteModifiable: boolean;
        constructor(listeTypeObjetCommercial: Array<ITypeObjetCommercial>, listeTypeObjetReglemente: Array<ITypeObjetReglemente>, projet: IProjet, dossierComplet: IDossierComplet, listeCredit: Array<ICreditInterne>, modeConsultation: boolean);
        private getLibelleTypeObjetCommercial(liste, typeObjetFinancier);
        private getLibelleTypeObjetReglemente(liste, typeObjetRegle);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IIntervenantSignature {
        listeIdws: Array<string>;
        description: string;
        estEmprunteur: boolean;
        lectureSeule: boolean;
        reponse: boolean;
        dateSignature: string;
        role: string;
        libelleReponse: string;
        champsObligatoireSaisis: boolean;
        erreurDateSuperieurDateMinAcceptation(dateMinAcceptation: string): boolean;
    }
    class IntervenantSignature implements IIntervenantSignature {
        private emprunteur;
        private dossier;
        private garant;
        private garantiePersonnelle;
        private _reponse;
        private _dateSignature;
        estEmprunteur: boolean;
        lectureSeule: boolean;
        constructor(emprunteur: ApiInstuctionCredit.Modele.IEmprunteur, dossier: ApiInstuctionCredit.Modele.IDossierComplet, garant: Modele.IPersonne, garantiePersonnelle: ApiInstuctionCredit.Modele.IGarantiePersonnelle);
        listeIdws: Array<string>;
        description: string;
        dateSignature: string;
        reponse: boolean;
        role: string;
        libelleReponse: string;
        champsObligatoireSaisis: boolean;
        erreurDateSuperieurDateMinAcceptation(dateMinAcceptation: string): boolean;
        private getDateSignatureInitiale();
        private getReponseInitiale();
        private dateNonVide(date);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IRemettreOffreRequest {
        identifiantDossier: string;
        dateRemiseEmprunteur: string;
        alerteBloquante: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IResultatEditionDocuments {
        listeDocumentDescription: Array<Modele.IDocumentDescription>;
        listeErreurs: Array<string>;
    }
    class ResultatEditionDocuments implements IResultatEditionDocuments {
        listeDocumentDescription: Array<Modele.IDocumentDescription>;
        listeErreurs: Array<string>;
        constructor();
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEditerOffrePretRequest {
        identifiantDossier: string;
        parametreEdition: IParametreEdition;
    }
    interface IResultatEditionOffreLecture {
        /**
         * ListeDocumentsOffre
         */
        listeDocumentsOffre: Array<IDocument>;
        /**
         * ListeAnomalieControleEditionOffreLecture
         */
        listeAnomalieControleEditionOffreLecture: Array<IAnomalieLecture>;
        /**
         * ListeAnomaliePassageEnGestionLecture
         */
        listeAnomaliePassageEnGestionLecture: Array<IAnomalieLecture>;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
    interface IResultatEditionOffreDescription {
        documentsOffreDescription: IDocumentDescription[];
        listeAnomalieControleEditionOffre: Array<IAnomalieLecture>;
        listeAnomaliePassageEnGestion: Array<IAnomalieLecture>;
        listeAnomalie: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEntreeSignatureOffre {
        /**
         * IdntDoss
         */
        idDossier: string;
        /**
         * DateSignature
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * NumeroOffre
         */
        numeroOffre: string;
        /**
         * ListeIdntPers
         */
        listeIdPersonne: Array<string>;
        /**
         * bSigne
         */
        signe: boolean;
        /**
         * bForcerCtrlusureLorsSignature
         */
        forcerCtrlusureLorsSignature: boolean;
    }
    interface IRetourSignatureOffre {
        anomalies: Array<IAnomalieLecture>;
        anomaliesPreRequis: Array<IAnomalieLecture>;
        anomaliesCtrlusureLorsSignature: Array<IAnomalieLecture>;
        anomaliesControleCalculNiveauDelegationDecision: Array<IAnomalieLecture>;
        anomaliesControleAvantEnvoiSaccef: Array<IAnomalieLecture>;
        anomaliesPassageEnGestionLecture: Array<IAnomalieLecture>;
        anomaliesControleVerifDates: Array<IAnomalieLecture>;
        anomaliesControleVerifGlobale: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITitreExemplaire {
        code: string;
        libelle: string;
        ordre: number;
        utilite: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IOrigineApportDetail {
        codeOrigine: number;
        libelle: string;
        montant: number;
    }
    interface IOrigineApport {
        idDossier: string;
        numeroPlan: number;
        identifiantPlan: string;
        listeOrgineApportDetail: IOrigineApportDetail[];
    }
}

declare module ApiInstuctionCredit.Modele.Parametrage {
    interface IChampsProjet {
        cadreFiscal: boolean;
    }
}

declare module ApiInstuctionCredit.Modele.Parametrage {
    interface IParamEtablissement {
        libelleParam: string;
        valeurParam: string;
    }
}

declare module ApiInstuctionCredit.Modele.Parametrage {
    interface IScCriteresAcces {
        rubriquesFiltre: Array<string>;
        valeursFiltre: Array<any>;
        rubriquesTri: Array<string>;
        valeurTri: string;
    }
    interface IScElement {
    }
    interface IScParamOrigineApport {
        idCaisseEpargne: number;
        idOrigineApport: number;
        dateDebutValidite: string;
        dateFinValidite: string;
        libelleOrigine: string;
    }
    interface IListerParamOrigineApportRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        criteresAccess: IScCriteresAcces;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IContexteIndustrialisation {
        prerequisEditionIndustrialisee: boolean;
        estMultiDestinatairesAutorise: boolean;
    }
    interface IContexteNumerisation {
        estDossierNumeriqueActive: boolean;
        urlAcquDossierNumerique: string;
        urlConsolideDossierNumerique: string;
        erreurDossierNumerique: boolean;
        listeAnomalieDossierNumerique: Array<IAnomalieLecture>;
        estDossierNumeriqueMyWay: boolean;
    }
    interface IResultatEligibiliteSignature {
        /**
         * EstEligible
         */
        estEligible: boolean;
        /**
         * MessagesErreur
         */
        messagesErreur: Array<string>;
        /**
         * MessagesErreurPieco
         */
        messagesErreurPieco: Array<string>;
        /**
         * MessageErreurContelec
         */
        messageErreurContelec: Array<string>;
    }
    interface IContexteElectronique {
        /**
         * EstSignatureElectroniqueActivee
         */
        estSignatureElectroniqueActivee: boolean;
        /**
         * ResultatSignatureElectroniqueEligible
         */
        resultatSignaElecEligible: IResultatEligibiliteSignature;
        /**
         * EstSignatureElectroniqueAgregationEligible
         */
        estSignaElecAgregationEligible: boolean;
        /**
         * EstSignatureDemandeCreditSAGActivee
         */
        estSignatureDemandeCreditSAGActivee: boolean;
        /**
         * ResultatSignatureDemandeCreditSAGEligible
         */
        resultatSignatureDemandeCreditSAGEligible: IResultatEligibiliteSignature;
    }
    interface IContexteEditique {
        /**
         * AutorisationEditionOffre
         */
        autorisationEditionOffre: boolean;
        /**
         * AutoriserEditionOffreAgence
         */
        autoriserEditionOffreAgence: boolean;
        /**
         * DocumentOffrePresent
         */
        documentOffrePresent: boolean;
        /**
         * EstDossierPartenaire
         */
        estDossierPartenaire: boolean;
        /**
         * ListeAnomalieEdition
         */
        listeAnomalieEdition: Array<IAnomalieLecture>;
        /**
         * ContexteEditionIndustrialisee
         */
        contexteEditionIndustrialisee: IContexteIndustrialisation;
        /**
         * ContexteDossierNumerique
         */
        contexteDossierNumerique: IContexteNumerisation;
        /**
         * ContexteSignatureElectronique
         */
        contexteSignatureElectronique: IContexteElectronique;
    }
}

declare module ApiInstuctionCredit.Modele {
    class PiecoBuilder {
        getResultInterdit(): IPieco;
        getResult(dossierComplet: IDossierComplet, sousEtatDossier: Enum.SousEtatDossier, resultat: IResultatPiecesEtControles, listePersonne: Array<IPersonne>, paramBtnSelectionMultiple: IScParamApplicatif, contexteDossierNumerique: IContexteNumerisation): IPieco;
        private getTypeTraitement(codeTraitementComp, codeProcessusInstruction);
        private getListePieceClient(listePieceControleManlParTheme, listeProcessusMetier, estNumerique, listePersonne);
        private getListePieceAgence(listePieceControleManlParTheme, listeProcessusMetier, estNumerique);
        private getListeControleManuel(listePieceControleManlParTheme, listeProcessusMetier);
        private getSousTitre(libelle, personne);
        private getListePieceDescriptionByTheme(liste, estPieceClient, listeProcessusMetier, estNumerique);
        private getLibellePiece(p, estPieceClient);
        private getLibelleStatutPiece(stttPieceControle, estNumerique);
        private getListeControleDescriptionByTheme(liste, listeProcessusMetier);
        private getLibelleStatutControle(stttPieceControle);
        /**
         * La section s'affiche dès que la propositionn n'est plus en proposition
         */
        private getAfficherSections(sousEtatDossier);
        private getLectureSeule(sousEtatDossier);
        private afficherBoutonToutCocher(param, codeProcessusInstruction);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IPieceControleDescription {
        idws: string;
        libelle: string;
        stttPieceControle: number;
        estLigneSousTitre: boolean;
        libelleFinalite: string;
        identifiantProcessusAuPlusTard: string;
        libelleStatut: string;
    }
    interface IPieceDescription extends IPieceControleDescription {
        libelleAide: string;
        codeEtatAcquistion: string;
    }
    interface IControleManuelDescription extends IPieceControleDescription {
        commentaire: string;
    }
    interface IPiecoComportement {
        isAutoriserPieco: boolean;
        typeInstruction: string;
        isActionGlobaleAutorisee: boolean;
        isAccesLectureSeule: boolean;
        afficherSections: boolean;
        contexteDossierNumerique: IContexteNumerisation;
    }
    interface IPieco {
        listePieceClient: Array<IPieceDescription>;
        listePieceAgence: Array<IPieceDescription>;
        listeControle: Array<IControleManuelDescription>;
        commentairePieceClient: string;
        commentairePieceAgence: string;
        listeStatutsPiece: Array<ISelectboxNumber>;
        comportement: IPiecoComportement;
        dataReference?: IPieco;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IPieceMaj {
        idws: string;
        stttPieceControle: number;
    }
    interface IControleManuelMaj extends IPieceMaj {
        commentaireControle: string;
    }
    interface IPieceAgenceMaj extends IPieceMaj {
    }
    interface IPieceClientMaj extends IPieceMaj {
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICalculerPiecesEtControlesRequest {
        identifiantDossier: string;
        identifiantPlan: number;
    }
    interface IResultatPiecesEtControles {
        listePieceControleManlParTheme: Array<IPiecesParTheme>;
        listeProcessusMetierReference: Array<IProcessusMetier>;
        commentairePieceClient: string;
        commentairePieceAgence: string;
    }
    interface IPiece {
        idws: string;
        libellePieceControle: string;
        codeTheme: string;
        identifiantProcessusAuPlusTard: string;
        indiceCasEcheance: number;
        indiceObligatoire: number;
        stttPieceControle: number;
        dateDernierMAJSttt: string;
        numeroOrdreClasse: number;
        libelleAide: string;
        codeEtatAcquistion: string;
    }
    interface IPieceClient extends IPiece {
    }
    interface IPieceAgence extends IPiece {
    }
    interface IControleManuel extends IPiece {
        typeActrOrigineControle: number;
        commentaireControle: string;
        histControle: Array<IControleManuel>;
    }
    interface IPiecesParTheme {
        codeTheme: string;
        libelleLongTheme: string;
        libelleCreationTheme: string;
        idPersonne: string;
        listePieceClient: Array<IPieceClient>;
        listePieceAgence: Array<IPieceAgence>;
        listeControleManl: Array<IControleManuel>;
    }
    interface IProcessusMetier {
        codeProcessus: string;
        libelleProcessus: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAdrNatureAvantageFiscal {
        codeNatureAvantageFiscal: string;
        libelleNatureAvantageFiscal: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IBatimentHabitableFinance {
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        coutAcqsBatimentHabitation: number;
        codePrixMarcheBale2: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        dateAcqsBatimentHabitation: string;
        dateConstructionBatimentHabitation: string;
        montantTVAFinancierARemboursement: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idProjet: string;
        idTerrSousJacent: string;
        idws: string;
    }
    class BatimentHabitableFinanceMaj {
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        coutAcqsBatimentHabitation: number;
        codePrixMarcheBale2: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        dateAcqsBatimentHabitation: string;
        dateConstructionBatimentHabitation: string;
        montantTVAFinancierARemboursement: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idws: string;
        constructor(batiment?: Modele.IBatimentHabitableFinance);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirBienAVendreRequest {
        identifiantDossier: string;
        identifiantProjet: string;
        bienAVendre: BienAVendreMaj;
    }
    interface IBienAVendre {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: string;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idProjet: string;
        idws: string;
    }
    class BienAVendre implements IBienAVendre {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: string;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idProjet: string;
        idws: string;
        constructor(pIdProjet: string);
    }
    class BienAVendreMaj {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: string;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idws: string;
        constructor(bien?: IBienAVendre);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IBienDetaille {
        coutTerr: number;
        coutAcqsCommercialisationInds: number;
        coutAcqsHabitation: number;
        coutConstruction: number;
        coutTravauxAmen: number;
        coutPasPort: number;
        coutFondComc: number;
        coutEqpmMte: number;
        coutVehcPrfs: number;
        coutPartSociale: number;
        montantFrsNegocie: number;
        montantFrsNotaire: number;
        coutStck: number;
        coutStckHorsInstruction: number;
        coutBfr: number;
        coutBfrHorsInstruction: number;
        coutAutreFrsPrfs: number;
        coutAutreFrsPrfsHorsInstruction: number;
        montantTVAFinancier: number;
        montantRachCren: number;
        coutPartSoce: number;
        idProjet: string;
        idws: string;
    }
    class BienDetailleMaj {
        coutTerr: number;
        coutAcqsCommercialisationInds: number;
        coutAcqsHabitation: number;
        coutConstruction: number;
        coutTravauxAmen: number;
        coutPasPort: number;
        coutFondComc: number;
        coutEqpmMte: number;
        coutVehcPrfs: number;
        coutPartSociale: number;
        montantFrsNegocie: number;
        montantFrsNotaire: number;
        coutStck: number;
        coutStckHorsInstruction: number;
        coutBfr: number;
        coutBfrHorsInstruction: number;
        coutAutreFrsPrfs: number;
        coutAutreFrsPrfsHorsInstruction: number;
        montantTVAFinancier: number;
        montantRachCren: number;
        coutPartSoce: number;
        idws: string;
        constructor(bien?: Modele.IBienDetaille);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IBienSousJacent {
        idws: string;
        modeAcqsBien: number;
        crdbienSousJacent: number;
        dateEntrCapitalDateAcqs: string;
        modeFinancier: number;
        typeObjetCommercialisation: string;
        typeObjetRegle: string;
        natureGarnt: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        idBien: string;
    }
    interface IBienSousJacentMaj {
        idws: string;
        modeAcqsBien: number;
        crdbienSousJacent: number;
        dateEntrCapitalDateAcqs: string;
        modeFinancier: number;
        typeObjetCommercialisation: string;
        typeObjetRegle: string;
        natureGarnt: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
    }
    interface ITerrainSousJacent extends IBienSousJacent {
        surfTerr: number;
        terrEstFinancierParCredit: number;
        dateEntrPatrimoineDateAcqs: string;
        montantLoyeParMois: number;
        modeAcqsTerr: number;
    }
    interface ITerrainSousJacentMaj extends IBienSousJacentMaj {
        surfTerr: number;
        terrEstFinancierParCredit: number;
        dateEntrPatrimoineDateAcqs: string;
        montantLoyeParMois: number;
        modeAcqsTerr: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IButLocatif {
        idws: string;
        indicePretTransfertLocf: boolean;
        numeroDecisionFavrGlbl: number;
        dateDecisionFavrLoct: string;
        indiceDecisionGlblFavr: boolean;
        dateConventionLoct: string;
        natureAvantageFiscal: string;
        montantAvantageFiscal: number;
        montantFrsAnnulationGestionLogement: number;
        montantFrsAnnulationEntnLogement: number;
        montantTaxeFonc: number;
        presServiceVacnLogement: boolean;
        presUneAssuranceLoyeImpe: boolean;
        montantAnnuLoyePerc: number;
        idProjet: string;
    }
    interface IButLocatifMaj {
        idws: string;
        indicePretTransfertLocf: boolean;
        numeroDecisionFavrGlbl: number;
        dateDecisionFavrLoct: string;
        indiceDecisionGlblFavr: boolean;
        dateConventionLoct: string;
        natureAvantageFiscal: string;
        montantAvantageFiscal: number;
        montantFrsAnnulationGestionLogement: number;
        montantFrsAnnulationEntnLogement: number;
        montantTaxeFonc: number;
        presServiceVacnLogement: boolean;
        presUneAssuranceLoyeImpe: boolean;
        montantAnnuLoyePerc: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IConstructionFinancee {
        coutConstructionFinancier: number;
        dateDebutConstruction: string;
        dateFinConstruction: string;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        typeContratConstruction: number;
        typeImeu: number;
        presUneGarantieAcheTravaux: number;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idProjet: string;
        idTerrSousJacent: string;
        idws: string;
    }
    class ConstructionFinanceeMaj {
        coutConstructionFinancier: number;
        dateDebutConstruction: string;
        dateFinConstruction: string;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        typeContratConstruction: number;
        typeImeu: number;
        presUneGarantieAcheTravaux: number;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idws: string;
        constructor(construction?: Modele.IConstructionFinancee);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinitDetailCoutObjetRequest {
        identifiantDossier: string;
        typeTravaux: string;
        listeDetailCoutObjetMAJ: Array<DetailCoutObjetMaj>;
    }
    interface IDetailCoutObjet {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idTravauxFinancier?: string;
        idws?: string;
    }
    class DetailCoutObjetMaj implements IDetailCoutObjet {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        constructor();
        constructor(detailCoutObjet: IDetailCoutObjet);
    }
}

declare module ApiInstuctionCredit.Modele {
    /**
     * Utilisé dans la mise en session pour le Dictionary
     */
    class DictionnaryConstantes {
        identifiant: string;
        listeConstantes: Array<IElementConstante>;
        constructor(identifiant: string, listeConstantes: Array<IElementConstante>);
    }
    interface IElementConstante {
        libelle: string;
        valeur: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IFormulaireProjetUsage {
        libelle: string;
    }
    class FormulaireProjetUsage implements IFormulaireProjetUsage {
        libelle: string;
        /**
         * Construction de Usage
         * @param libelle: string - libellé de l'usage du bien
         */
        constructor(donnees: FormulaireProjetUsage);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IFormulaireProjetNature {
        libelle: string;
        niveaux: Array<IFormulaireProjetNiveau>;
    }
    class FormulaireProjetNature implements IFormulaireProjetNature {
        libelle: string;
        niveaux: Array<IFormulaireProjetNiveau>;
        /**
         * Construction de Nature
         * @param libelle: string - libellé de la nature du projet
         * @param niveaux: IFormulaireProjetNiveau - liste des niveaux
         */
        constructor(donnees: FormulaireProjetNature);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IFormulaireProjetNiveau {
        libelle: string;
    }
    class FormulaireProjetNiveau implements IFormulaireProjetNiveau {
        libelle: string;
        /**
         * Construction d'un Pret externe
         * @param libelle: string - Libellé du 3ème niveau de la liste déroulante
         */
        constructor(donnees: FormulaireProjetNiveau);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IFormulaireProjetType {
        libelle: string;
        natures: Array<IFormulaireProjetNature>;
    }
    class FormulaireProjetType implements IFormulaireProjetType {
        libelle: string;
        natures: Array<IFormulaireProjetNature>;
        /**
         * Construction du Type de bien
         * @param libelle: string - libellé du type de projet
         * @param natures: Array<IFormulaireProjetNature> - Tableau des natures possible du projet
         */
        constructor(donnees: FormulaireProjetType);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IOrigineApportMaj {
        codeOrigine: number;
        montantApportOrigine: number;
    }
    interface IOrigineApportLecture {
        idDossierInstruction: string;
        numeroPlanDossier: number;
        codeOrigine: number;
        montantApportOrigine: number;
    }
    interface IDefinirOrigineApportRequest {
        identifiantDossier: string;
        identifiantPlanRet: string;
        listeOrigineApport: Array<IOrigineApportMaj>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IRetour {
        libelle: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ILocalites {
        codePoste: string;
        ville: string;
        zonePlus: string;
        zoneDeRobien: string;
        zoneBourgadeRural: string;
        codeComRob: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ILocalitesSchemaParent {
        ArrayOfScLocalite: Array<ApiInstuctionCredit.Modele.ILocalitesSchema>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ILocalitesSchema {
        ScLocalite: Array<ApiInstuctionCredit.Modele.ILocalites>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirProjetRequest {
        identifiantDossier: string;
        typeObjetCommercial: string;
        typeObjetReglemente: string;
        projetMAJ: ProjetImmobilierMaj;
    }
    interface IProjet extends IElement {
        defnSiEmpruntEstPrm: boolean;
        codeConditionDerogationPourPtz: number;
        valdelgbaPrmAccessoirePourCateRegleAttribut: boolean;
        eligibilitePtz: boolean;
        eligibilitePC: boolean;
        eligibilitePas: boolean;
        elgbaEpargneLogement: boolean;
        elgbaEcpt: boolean;
        codeBatimentBassConsommation: number;
        codeModeleOccpLogement: number;
        codePrixMarche: number;
        codeTypeMarche: number;
        typeProprietaire: number;
        pourcentageProprietaireApreOper: number;
        montantInscHypotheque: number;
        qualEmplaProjet: number;
        zoneRegleRobnBien: string;
        zonePlusLogement: string;
        codeZoneGegrRegle: number;
        typeImeu: number;
        codeLogementHlm: number;
        idProgrammeImmobilier: string;
        idAccrPourInstruction: string;
        indicemssNouvPartScpi: number;
        codeTypeMarchePourVent: number;
        nomSoceGestion: string;
        centreBourgadeRural: boolean;
        idBatimentHabitationFinancier: string;
        typeObjetFinancier: string;
        typeObjetRegle: string;
        codeNatureFinancier: string;
        descriptionObjet: string;
        coutTotalObjet: number;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        montantFrsDivr: number;
        interieurFrsDivrFinancier: string;
        cateRegleAttribut: string;
        montantRachCren: number;
        codeMiseOeuvrProjetPro: number;
        coutObjetSaisieCalculEnvl: number;
        presBienAVend: boolean;
        negocieEffcParNotaire: boolean;
        typeAcqs: number;
        codeDestinataireAutreParObjet: number;
        nombreUnteContratProgrammeImmobilier: string;
        coutFrsNotaire: number;
        coutRelOper: number;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        fraisDeNotairesSaisissables: boolean;
        listeIdPlanFinancier: Array<string>;
        idBienAVend?: string;
        idTravauxFinancier?: string;
        idReamenagement?: string;
        idConstructionFinancier?: string;
        idObjetPrmtImmobilier?: string;
        idTerrFinancier?: string;
        idSoulFinancier?: string;
        bonificationEstValide: boolean;
        prendreBienSousJacentPourGarantie: boolean;
        typeProjet?: string;
        nature?: string;
        usage?: string;
        revente?: boolean;
        valeur?: string;
        crd?: string;
        delais?: string;
        prescripteur?: string;
        calcul?: string;
        montantOperation?: number;
        adresse?: string;
        zone?: string;
        propositions?: Array<ApiInstuctionCredit.Modele.Proposition>;
        blocNote?: string;
    }
    class ProjetImmobilierMaj {
        defnSiEmpruntEstPrm: boolean;
        codeConditionDerogationPourPtz: number;
        codeBatimentBassConsommation: number;
        codeDestinataireAutreParObjet: number;
        codeModeleOccpLogement: number;
        codePrixMarche: number;
        codeTypeMarche: number;
        typeProprietaire: number;
        pourcentageProprietaireApreOper: number;
        codePaysLocalisation: string;
        codePaysLocs: string;
        montantInscHypotheque: number;
        qualEmplaProjet: number;
        zoneRegleRobnBien: string;
        zonePlusLogement: string;
        codeZoneFrncSinistre: number;
        typeImeu: number;
        idProgrammeImmobilier: string;
        idAccrPourInstruction: string;
        indicemssNouvPartScpi: number;
        codeTypeMarchePourVent: number;
        nomSoceGestion: string;
        centreBourgadeRural: boolean;
        descriptionObjet: string;
        coutTotalObjet: number;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        montantFrsDivr: number;
        montantRachCren: number;
        codeMiseOeuvrProjetPro: number;
        coutObjetSaisieCalculEnvl: number;
        negocieEffcParNotaire: boolean;
        typeAcqs: number;
        nombreUnteContratProgrammeImmobilier: string;
        coutFrsNotaire: number;
        coutRelOper: number;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        adresseLigne5: string;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        indiceAchtRvnt: boolean;
        idws: string;
        constructor(projet: Modele.IProjet, majToc: boolean, majAllAttributs?: boolean);
        private majSelonTocTor(toc, tor);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IPromotionImmobiliereLecture extends IElementLecture {
        situationProgramme: number;
        libelleSyntDossier: string;
        intituleProgramme: string;
        nomScpi: string;
        dateDiss: string;
        adresseProgrammeImmobilier: string;
        loclProgrammeImmobilier: string;
        codePosteProgrammeImmobilier: string;
        codePays: string;
        stttCapitalisation: number;
        dateFinCommercialisation: string;
        indiceAlltDeps: number;
        idProjet: string;
    }
    interface IPromotionImmobiliereExtended extends IPromotionImmobiliereLecture {
        /**
         *      // valeurs indiceAlltDeps:
         *       // N => sans allotement
         *       // O => avec allotement
         */
        conditionAllotementLibelle: string;
        /**
         *      // valeurs sttCapitalisation:
         *       // 1 => Accord
         *       // 2 => Rejet
         *       // 3 => Ajournement
         *       // 4 => Suspension
         *       // 5 => NonStatue
         *       // 6 => SansObjet
         */
        decisionLibelle: string;
    }
    class PromotionImmobilier {
        static getInstance(promotionImmobiliereLecture: Modele.IPromotionImmobiliereLecture): Modele.IPromotionImmobiliereExtended;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDefinirRedacteurActeRequest {
        identifiantDossier: string;
        redacteurActeMaj: IRedacteurActeMaj;
    }
    interface IRedacteurActe {
        idws: string;
        idPersonneSI: string;
        nomReductionActe: string;
        prenReductionActe: string;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
    }
    interface IRedacteurActeMaj {
        idws: string;
        idPersonneSI: string;
        nomReductionActe: string;
        prenReductionActe: string;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
    }
    class RedacteurActeMaj implements IRedacteurActeMaj {
        idws: string;
        idPersonneSI: string;
        nomReductionActe: string;
        prenReductionActe: string;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
        constructor(redacteurActe: Modele.IRedacteurActe);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IResultatSGFGAS {
        listeAno: Array<IAnomalieLecture>;
        devisEcoPTZ: boolean;
        creationDossierSGFGAS: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ISoulteFinancee {
        montantSoul: number;
        permDetrSiSoulFaitSuiteDivo: boolean;
        pourcentageProprietaireOrigine: number;
        valeurActiviteCorrValeurBienOrigine: number;
        surfHabitationBienSous: number;
        dateAcqsBienSous: string;
        idProjet: string;
        idBienSousJacent: string;
        idws: string;
    }
    class SoulteFinanceeMaj {
        montantSoul: number;
        permDetrSiSoulFaitSuiteDivo: boolean;
        pourcentageProprietaireOrigine: number;
        valeurActiviteCorrValeurBienOrigine: number;
        surfHabitationBienSous: number;
        dateAcqsBienSous: string;
        idws: string;
        constructor(soulte?: Modele.ISoulteFinancee);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITerrainFinancee {
        coutTerr: number;
        dateAcqsTerr: string;
        surfTerr: number;
        codeDonTerr: number;
        codeFinancierTerr: number;
        montantFrsNegocie: number;
        idProjet: string;
        idws: string;
    }
    class TerrainFinanceMaj {
        coutTerr: number;
        dateAcqsTerr: string;
        surfTerr: number;
        codeFinancierTerr: number;
        montantFrsNegocie: number;
        idws: string;
        constructor(terrain?: Modele.ITerrainFinancee);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IParamCoutTravauxEcoPtz {
        idCaisseEpargne: number;
        dateDebutApplication: string;
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        dateFinApplication: string;
        paramTypologieTravaux: IParamTypologieTravaux;
    }
    interface IParamTypologieTravaux {
        idCaisseEpargne: number;
        codeTypologieCoutTravaux: string;
        libelleCreationTypologieCout: string;
        libelleLongTypologieCout: string;
        montant: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITypeLogement {
        typeLogement: string;
        libelleTypeLogement: string;
        nombrePiecePrincipal: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITypeObjetCommercial {
        typeObjetFinancierGarantie: string;
        codeNatureFinancier: string;
        categorieRegleAttribut: string;
        libTypeObjetCommToc: string;
        codeVentilationSousclasseBafi: string;
        codeAffectationObjet: number;
        libCreationTypeObjetCommToc: string;
        listeTypeObjetReglemente: Array<string>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITypeObjetReglemente {
        typeObjetRegleTor: string;
        libelleTypeObjetRegleTor: string;
        libCreationTypeObjetRegleTor: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITypologiesInstruction {
        idCaisseEpargne: number;
        typeTypologie: string;
        codeTypologie: string;
        initial: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IUnitesPermisConstruire {
        code: string;
        libelle: string;
        emolument: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAgentParametreGetRequest extends IParamGetRequest {
        codeEtablissement: string;
        identifiantAgent?: string;
    }
    interface IAgentParametreCommunGetRequest extends IAgentParametreGetRequest {
        typeRecherche: string;
        indicateurAgentNominatif: string;
        nombreMaximumReponse: string;
        codeAction: string;
        nomAgentDebutPlage?: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IClientParamGetRequest extends IParamGetRequest {
        codeEtablissement: string;
    }
    interface IClientParamRechercheGetRequest extends IClientParamGetRequest {
        identifiantTiers: string;
        typeRechercheEntiteTitulaire: string;
    }
    interface IClientParamInfoEntiteTitulaireGetRequest extends IClientParamGetRequest {
        identifiantTiers: string;
        identifiantEntiteTitulaire: number;
    }
    interface IClientParamLirePersonneGetRequest extends IClientParamGetRequest {
        identifiantDossierInstruction: string;
        codeVersion: string;
        codeRelease: string;
        identifiantPersonne: string;
        numeroCarteBancaire: string;
        numeroInsee: string;
        typeRolePersonne: string;
        codeTypePersonne: string;
        idEntiteTitulaireClient: string;
        codeTypeMarche: string;
    }
    interface IClientParamListeChargeRelationGetRequest extends IClientParamGetRequest {
        codeEtablissement: string;
        identiteRelationEcoMenage: number;
        indicateurChargesHorsCredit: string;
        indicateurChargesCreditInterne: string;
        indicateurChargesCreditExterne: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreditParametreGetRequest extends IParamGetRequest {
        versionWsdl: string;
        dateDeTraitement: string;
        codeEtablissement: string;
    }
    interface ICreditParametreFiltreGetRequest extends ICreditParametreGetRequest {
        rubriquesFiltre: string;
        valeursFiltre: string;
    }
    interface ICreditParametreListerLocaliteGetRequest extends ICreditParametreGetRequest {
        codesPostaux: string;
        localites: string;
    }
    interface ICreditParametreListerInfoAgenGetRequest {
        identifiantEntiteConnecte: string;
        codeTypeElementStructure: string;
        identifiantElementStructure: string;
        codeCategorieEmprunteur: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IParamGetRequest {
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IProjetParamGetRequest extends IParamGetRequest {
        identifiantDossier: string;
    }
    interface IImpactsEligibiliteParamGetRequest extends IProjetParamGetRequest {
        idwsPlanFinancement: string;
    }
    interface IAppelSGFGASParamGetRequest extends IProjetParamGetRequest {
        identifiantPlanFinancement: string;
        urlRetour?: string;
        estDevis?: boolean;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueClientService {
        private $q;
        private wsService;
        static $inject: Array<string>;
        private _listeTypeRevenu;
        private _listeTypeCharge;
        private _listeCategorieEmprunteur;
        private _listeSituationFamilialeEmprunteur;
        private _listeCatSocioProfessionnelle;
        private _listeAdrRisqueEpargne;
        private _listeAdrOpposition;
        listeTypeCharge: Array<Modele.TypeCharge>;
        listeTypeRevenu: Array<Modele.TypeRevenu>;
        listeTypeEpargne: Array<Modele.IAdrRisqueEpargne>;
        listeLieuResidence: ApiInstuctionCredit.Modele.IElementConstante[];
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Récupération de la liste de l'ensemble des types de revenus
         */
        getListeTypeRevenu(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.TypeRevenu>>;
        /**
         * Récupération de la liste les différentes catégories d'emprunteur
         */
        getListeCategoriesEmprunteur(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.CategorieEmprunteur>>;
        /**
         * Récupération des différentes situations familiales d'emprunteur
         */
        getListeSituationsFamilialesEmprunteur(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.SituationFamilialeEmprunteur>>;
        /**
         * Récupération de l'ensemble des types de charge
         */
        getListeTypeCharge(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.TypeCharge>>;
        /**
         * Récupération des ADR Risque Epargne
         */
        getAdrRisqueEpargne(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.IAdrRisqueEpargne>>;
        /**
         * Permet de récupérer les différentes oppositions
         */
        getListeOpposition(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.IAdrOpposition>>;
        /**
         * Récupération des différentes catégories socio-professionnelles
         */
        getListeCategoriesSocioPro(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.ICatSocioProfessionnelle>>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueCommunService {
        private $q;
        private wsService;
        static $inject: Array<string>;
        private _listeOfListeConstantes;
        private _listeParametresApplicatif;
        private _listeAdressesParametreRubrique;
        private _listeDevises;
        private _listeCodePays;
        private _listeTypeEds;
        private _listeTypeEdsDesicion;
        private _listeTypeEdsBackOffice;
        private _listeEtablissements;
        private _listeTypeRole;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Récupération de la liste des devises et met en cache la liste de devise emprunteur ou normale
         */
        getListeDevises(dateTraitement: string, rubriquesFiltre: string, valeursFiltre: string, rubriquesTri: string, valeurTri: string, deviseInstructible?: boolean): ng.IPromise<Array<Modele.IScDevise>>;
        /**
         * @Alias CatalogueCommunService.appelleListerDevise
         * @Description Récupération de la liste des devises via l'appel à la ressource REST creditParametre/v6/listerDevise
         * @Params {string} dateTraitement, rubriquesFiltre, valeursFiltre, rubriquesTri, valeurTri - Paramètre pour l'appel à la ressource REST
         * @Return {Modele.IScDevise[]} la liste des devises reçues
         */
        private appelleListerDevise(dateTraitement, rubriquesFiltre, valeursFiltre, rubriquesTri, valeurTri);
        /**
         * Filtre les devises si elle sont instructibles
         * @param deviseInstructible
         */
        private getListeDevisesFiltrees(deviseInstructible);
        /**
         * récupération des constantes en fonction d'un champ
         * @param identifiantChamp : string
         */
        getListeConstantes(dateTraitement: string, codeEtablissement: string, identifiantChamp: string): ng.IPromise<Array<Modele.IElementConstante>>;
        /**
         * Récupération de la totalité des paramètres applicatifs
         */
        getListeParametresApplicatifs(dateTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.IScParamApplicatif>>;
        /**
         * Récupération des paramètres applicatifs
         * Les données chargées sont stockées dans la session
         */
        getListeParametresApplicatifsFiltrees(dateTraitement: string, codeEtablissement: string, rubriquesFiltre: Array<string>, valeursFiltre: Array<string>): ng.IPromise<Array<Modele.IScParamApplicatif>>;
        /**
         * Récupération d'un paramètre applicatif
         */
        getParametreApplicatif(dateTraitement: string, codeEtablissement: string, codeParametreApplicatif: string): ng.IPromise<Modele.IScParamApplicatif>;
        /**
         * Permet de récupérer un paramètre applicatif uniquement s'il est actif
         */
        getParametreApplicatifActif(dateTraitementYYYYMMDD: string, codeEtablissement: string, codeParametre: string, valeurActivation: string): ng.IPromise<Modele.IScParamApplicatif>;
        private getActivationParametresApplicatifs(parametreApplicatif, valeurActivation);
        /**
         * Récupération de la totalité des adresses paramètre rubrique
         */
        private getAdressesParametreRubrique(dateTraitement);
        /**
         * Permet de récupérer une adresse paramètre rubrique si elle est active
         */
        getAdresseParametreRubriqueActive(dateTraitement: string, codeParametre: string, valeurActivation: number): ng.IPromise<Modele.IScAdrParamRubrique>;
        /**
         * Récupération des adresses paramètre
         * Les données chargées sont stockées dans la session
         */
        getAdressesParametreRubriqueFiltrees(dateTraitement: string, rubriquesFiltre: string[], valeursFiltre: string[]): ng.IPromise<Modele.IScAdrParamRubrique[]>;
        /**
         * Récupération de la liste des pays
         */
        listerCodePays(dateTraitement: string): ng.IPromise<Modele.IScCodePays[]>;
        /**
         * Chargement des types EDS
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        chargerTypeEds(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Modele.IScTypeEds[]>;
        /**
         * Chargement des types EDS décision
         * @param dateDeTraitement
         */
        chargerTypeEdsDecision(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Modele.IScTypeEds[]>;
        /**
         * Chargement des types EDS back office
         * @param dateDeTraitement
         * @returns Promise<Modele.IScTypeEds[]>
         */
        chargerTypeEdsBackOffice(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Modele.IScTypeEds[]>;
        /**
         * Paramètrage établissement
         * @param date
         */
        listerParamEtablissement(date: string, codeEtablissement: string): ng.IPromise<Array<Modele.Parametrage.IParamEtablissement>>;
        /**
         * Récupération d'une liste d'établissements filtrée
         */
        getEtablissementParFiltre(dateTraitement: string, filtreLibelle: string): ng.IPromise<Modele.IScParamEtablissement[]>;
        /**
         * Récupération de la liste des établissements
         */
        listerEtablissements(dateTraitement: string, filtreLibelle: string): ng.IPromise<Modele.IScParamEtablissement[]>;
        /**
         * Permet de récupérer les types de rôle
         */
        listerTypeRole(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Modele.IScTypeRole[]>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueEpargneLogementService {
        private $q;
        private wsService;
        static $inject: Array<string>;
        private _listeLiensParente;
        private _montantEncoursEL;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Récupération de la liste des liens de parenté
         * @param dateTraitement
         */
        getListeLienParente(dateTraitement: string): ng.IPromise<Array<Modele.ILienParente>>;
        /**
         * Récupération des montants d'encours d'Epargne Logement
         */
        getMontantEncoursEl(dateTraitement: string): ng.IPromise<Modele.IMontantEncoursEpargneLogement>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueFinancementService {
        private $q;
        private wsService;
        private cacheService;
        static $inject: Array<string>;
        private _listeProduitFinancier;
        private _listeTypeDeSinistre;
        private _listeScConventionBonification;
        private _listeModalitesCalculAccessoireComplementaire;
        private _listeBeneficiaire;
        private _listeTypeAssurance;
        private _listeClauseDeReserveAssurance;
        private _listeNatureGarantie;
        private _listeTypesDeFraisGarantie;
        private _listeConventionGarantie;
        private _listeNatureGarantieRelatifTypeObjet;
        private _listeParamGarantie;
        listeAccessoireType: Array<Modele.IAccessoireType>;
        listeProduitsAutorises: Array<Modele.IProduitsAutorises>;
        listeFamillesProduits: Array<Modele.IFamillesProduits>;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService, cacheService: CacheService);
        /**
         * Récupération de la liste des familles de produits
         */
        getListeFamillesDeProduits(dateTraitement: string, codeEtablissement: string, codeCategorieEmprunteur: string, typeObjetFinancierGarantie: string, codeStructureInstruction: string, codeDevise: string): ng.IPromise<Array<Modele.IFamillesProduits>>;
        /**
         * Récupération de la liste des produits autorisés pour le projet
         */
        getListeProduitsAutorises(dateTraitement: string, codeEtablissement: string, codeDevise: string, codeCategorieEmprunteur: string, typeObjetFinancierGarantie: string, codeStructureInstruction: string, codeDestinataireAutreParObjet: string): ng.IPromise<Array<Modele.IProduitsAutorises>>;
        /**
         * Récupération des paramètres d'un produit
         */
        getProduitFinancier(dateTraitement: string, codeEtablissement: string, idProduitRecherche: string): ng.IPromise<Modele.IProduitFinancier>;
        /**
         * Frais et accessoires : récupération de la liste des types de frais disponibles
         */
        getListeTypeAccessoire(dateTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.IAccessoireType>>;
        /**
         * Frais et accessoires : récupération de la liste des accessoires pour un produit
         */
        getListeModCalculHorsConvParProd(dateTraitement: string, codeEtablissement: string, idProduit: string): ng.IPromise<Array<Modele.IModalitesCalculHorsConventionParProduit>>;
        /**
         * Frais et accessoires : récupération des accessoires complémentaires, qui sont indépendants de la caisse
         */
        getListeModCalculAccesComp(dateTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.IModalitesCalculAccessoireComplementaire>>;
        /**
         * Frais et accessoires : récupération de la liste des bénéfichiaires disponibles au sein de la caisse
         */
        getListeBeneficiaire(dateTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.IBeneficiaire>>;
        /**
         * Frais et accessoires : Rôles du tiers pour l'accessoire complémentaire
         * @param {string} codeSousTypeAccessoire
         */
        getListeModTypeDeRoleTiersParAcces(dateTraitement: string, codeSousTypeAccessoire: string): ng.IPromise<Array<Modele.IModalitesTypeDeRoleTiersParAccessoire>>;
        /**
         * Détails des tiers pour un rôle donné
         * @param {string} typeRolePersonne
         * @param {string} intitule
         * @param {string} cp
         */
        getListeModTiersTypRol(dateTraitement: string, codeEtablissement: string, typeRolePersonne: string, intitule: string, cp: string): ng.IPromise<Array<Modele.IModalitesTiersParTypeDeRole>>;
        /**
         * Assurance : Récupération de la liste des types d'assurances
         */
        getListeTypeAssurance(dateTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.ITypeAssurance>>;
        /**
         * Assurance : Récupération de la liste des types des clauses de réserves
         */
        getListeClauseDeReserveAssurance(dateTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.IClauseDeReserveAssurance>>;
        /**
         * Assurance: récupération des types de sinistre par convetion
         * @param dateTraitement
         * @param codeEtablissement
         * @param idConvention
         */
        getListeTypeDeSinistreParConvention(dateTraitement: string, codeEtablissement: string, idConvention: string): ng.IPromise<Array<Modele.ITypeDeSinistreParConvention>>;
        /**
         * Récupération du détail d'une convention d'assurance
         * @param codeEtablissement
         * @param identifiantConvention
         */
        getDetailConventionAssurance(dateTraitement: string, codeEtablissement: string, identifiantConvention: string): ng.IPromise<Modele.IConventionAssurance>;
        /**
         * Garantie: Récupération de la liste des natures de garantie
         * @param codeEtablissement
         */
        getListeNatureGarantie(dateTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.INatureGarantie>>;
        /**
         * Récupération de lister les types de frais garantie
         * @return promise<ITypesDeFraisGarantie[]>
         */
        getListeTypesDeFraisGarantie(dateTraitement: string, codeEtablissement: string, codeNatureGarantie: string): ng.IPromise<Array<Modele.ITypesDeFraisGarantie>>;
        /**
         * Récupération de la liste des conventions de garantie
         */
        getListeConventionsGarantie(dateTraitement: string, codeEtablissement: string, typeObjetFinancierGarantie: string, codeCategorieEmprunt: string, codeNatureGarantie: string, codeFamilleProduit: string, numeroRelationProduit: string): ng.IPromise<Array<Modele.IConventionGarantie>>;
        /**
         * Garantie: Récupération de la liste des natures de garantie
         * @param codeEtablissement
         */
        getListeNatureGarantieRelatifTypeObjet(dateTraitement: string, codeEtablissement: string): ng.IPromise<Modele.IScNatureGarantieRelatifATypeObjet[]>;
        /**
         * Récupération de la liste paramètres garantie
         * @param dateDeTraitement : format YYYY-MM-DD
         */
        getListeParamGarantie(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Modele.IScParamGarantie[]>;
        getListeConventionsBonification(dateDeTraitement: string, identifiantProduit: string): ng.IPromise<Array<Modele.IScConventionBonification>>;
        getListeEligibilitesBonification(dateTraitement: string, idProduitFinancier: string, idConvention: string): ng.IPromise<Array<Modele.IScBonifEligibilite>>;
        listerPaliersDeProgressionParPhase(dateDeTraitement: string, codeFamilleProduit: string, numeroRelationProduit: string, codeTypePhase: string, numeroRelatifPhase: number): ng.IPromise<Modele.IScPaliersDeProgressionParPhase[]>;
        listerPaliersDeTauxParPhase(dateDeTraitement: string, codeFamilleProduit: string, numeroRelationProduit: string, codeTypePhase: string, numeroRelatifPhase: number): ng.IPromise<Modele.IScPaliersDeTauxParPhase[]>;
        private listerPalierParPhase<T>(dateDeTraitement, codeFamilleProduit, numeroRelationProduit, codeTypePhase, numeroRelatifPhase, uri);
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueModalitesService {
        private $q;
        private wsService;
        static $inject: Array<string>;
        private _listeTypeReglement;
        private _listesRemboursementAnticipe;
        private _listesModalitesImpayes;
        private _listeParamTypeDuree;
        private _listeDescriptionEchelle;
        private _listeEchelleVersement;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Modalités : récéupération de la liste des types de reglement
         * @param dateDeTraitement
         */
        getListeTypeReglement(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.ITypeReglement>>;
        /**
         * Récupération des modalités de remboursement anticipes pour un produit financier
         * @param dateDeTraitement
         * @param idProduitFinancier
         * @param codeInteretCompensateur
         * @param typeLoi
         */
        getListeRemboursementAnticipe(dateDeTraitement: string, idProduitFinancier: string, codeInteretCompensateur: number, typeLoi: number): ng.IPromise<Array<Modele.IRemboursementAnticipe>>;
        /**
         * Récupération des modalités d'impayés du catalogue
         * @param dateDeTraitement
         * @param caisse
         * @param typeLoi
         */
        getListeModalitesImpayes(dateDeTraitement: string, caisse: string, typeLoi: number, typeMarche: number): ng.IPromise<Array<Modele.IModalitesImpayes>>;
        /**
         * Liste les types de contrat possibles d'un dossier
         * @param dateTraitement
         */
        getListeParamTypeDuree(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Array<Modele.IParamTypeDuree>>;
        /**
         * Descritpion des échelles de versements
         * @param dateDeTraitement
         */
        getListeDescriptionEchelle(dateDeTraitement: string): ng.IPromise<Array<Modele.IDescriptionEchelle>>;
        /**
         * Liste des échelles de versements
         * @param dateDeTraitement
         */
        getListeEchelleVersement(dateDeTraitement: string): ng.IPromise<Array<Modele.IEchelleVersement>>;
        /**
         * Définir versement
         * @param identifiantDossier
         * @param numeroEchelle
         * @param montantMinimum
         * @param idwsCredit
         */
        definirVersement(identifiantDossier: string, numeroEchelle: number, montantMinimum: number, idwsCredit: string): ng.IPromise<Array<Modele.IVersement>>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueOrigineApportService {
        private $q;
        private wsService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService);
        /**
         * Récupère le paramètrage d'origine de l'apport
         * @param dateDeTraitement
         */
        listerParametreOrigineApport(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<Modele.Parametrage.IScParamOrigineApport[]>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueProjetService {
        private $q;
        private wsService;
        private cacheService;
        static $inject: Array<string>;
        private _listeFormulaireProjetTypeLogement;
        private _listeTypeObjetReglemente;
        private _listeTypeObjetCommercial;
        private _listeCadreFiscal;
        private _listeTypeLogement;
        private _listeAdrNatureAvantageFiscal;
        private _listeTypologiesInstructionByType;
        private _listeLienObjetFinanceObjetSousJacent;
        private _localites;
        constructor($q: ng.IQService, wsService: ApiInstuctionCredit.Service.Data.WsService, cacheService: CacheService);
        /**
         * Récupération de la liste de cadre fiscal
         * @param date : format YYYY-MM-DD
         * @param codeEtablissement
         */
        getListeProjetCadreFiscal(date: string, codeEtablissement: string): ng.IPromise<Array<Modele.ICadreFiscal>>;
        /**
         * Récupération de la liste des Types d'objet Commercialisés (TOC)
         * @param date : format YYYY-MM-DD
         * @param codeEtablissement
         */
        getListeTypeObjetCommercial(date: string, codeEtablissement: string): ng.IPromise<Array<Modele.ITypeObjetCommercial>>;
        /**
         * Récupération de la liste des Types d'Objets Réglementés (TOR)
         * @param date : format YYYY-MM-DD
         * @param codeEtablissement
         */
        getListeTypeObjetReglemente(date: string, codeEtablissement: string): ng.IPromise<Array<Modele.ITypeObjetReglemente>>;
        /**
         * Récupération de la liste de type de logement
         * @param date : format YYYY-MM-DD
         * @param codeEtablissement
         */
        getListeFormulaireProjetTypeLogement(date: string, codeEtablissement: string): ng.IPromise<Array<Modele.IFormulaireProjetTypeLogement>>;
        /**
         * Récupération du détail de la localité : utile pour la zone de robien
         * La ville n'est plus contrôlée car:
         * - c'est déjà fait en amont côté BAT adresse
         * - la BAT adresse peut tronquer la ville ce qui fait planter le contrôle NEO
         * En conséquences, on utilise uniquement le code postal pour récupérer les infos de la localité.
         * Si le code postal correspond à plusieurs localités, on suppose que la zone de robien sera la même.
         * @param date : format YYYY-MM-DD
         * @param codeEtablissement
         * @param codePostal
         */
        getLocalite(date: string, codeEtablissement: string, codePostal: string, ville?: string): ng.IPromise<Array<Modele.ILocalites>>;
        /**
         * Récupération des paramètres couts travaux pour l'éco-PTZ
         * @param date : format YYYY-MM-DD
         * @param codeEtablissement
         * @param rubriquesFiltre
         * @param valeursFiltre
         */
        getListeParamCoutTravauxEcoPtz(date: string, codeEtablissement: string, rubriquesFiltre: string, valeursFiltre: string): ng.IPromise<Array<Modele.IParamCoutTravauxEcoPtz>>;
        /**
         * Récupération des informations en détail de l'agent connecté
         */
        listerInfoAgent(identifiantEntiteConnecte: string, codeTypeElementStructure: string, identifiantElementStructure: string, codeCategorieEmprunteur: string): ng.IPromise<Modele.IInformationAgent>;
        /**
         * Liste des typologies
         * @param dateTraitement
         * @param typeDeTypologie
         */
        getListeTypologiesInstruction(dateTraitement: string, typeDeTypologie: string): ng.IPromise<Array<Modele.ITypologiesInstruction>>;
        /**
         * Liste des type de logement
         * @param dateTraitement
         */
        getListeTypeLogement(dateDeTraitement: string): ng.IPromise<Array<Modele.ITypeLogement>>;
        /**
         * Récupération de la liste nature fiscal
         * @param dateDeTraitement
         */
        getListeNatureFiscal(dateDeTraitement: string): ng.IPromise<Array<Modele.IAdrNatureAvantageFiscal>>;
        /**
         * Récupération de la liste des liens objets financés - objets sous jacent
         * @param dateDeTraitement
         */
        getListeLienObjFinanceObjSousJacent(dateDeTraitement: string): ng.IPromise<Array<Modele.IScLienObjetFinanceObjetSousJacent>>;
        private getCreditParametreGetRequest(date, codeEtablissement);
        private getCreditParametreFiltreGetRequest(date, codeEtablissement, rubriquesFiltre, valeursFiltre);
    }
}

declare module ApiInstuctionCredit {
    class BonificationDetailConventionControleur {
        creditInterne: Modele.ICreditInterne;
        tauxCreditInterne: number;
        conventionBonification: Modele.IScConventionBonification;
        nomTiers: string;
        /**
         * Eligibilité
         */
        tableauEligibilite: MyWay.UI.ImwTableOptions;
        listeScBonifEligibilite: Array<Modele.IScBonifEligibilite>;
        constructor();
        private initTableau();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class ModaleFinancementBonificationCalculControleur {
        private $modalInstance;
        private modalDatas;
        static $inject: string[];
        creditBonification: ApiInstuctionCredit.Modele.ICreditBonificationDescription;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, modalDatas: DonneesModale.IModaleFinancementBonificationCalculEntree);
        close(): void;
    }
}

declare module ApiInstuctionCredit.DonneesModale {
    interface IModaleFinancementBonificationCalculEntree {
        creditBonification: ApiInstuctionCredit.Modele.ICreditBonificationDescription;
    }
}

declare module ApiInstuctionCredit {
    class InputDateControleur {
        baseId: string;
        private _dateManipulee;
        date: string;
        dateClass: string;
        modeConsultation: boolean;
        required: boolean;
        libelleDate: string;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class RowDateControleur {
        baseId: string;
        label: string;
        labelClass: string;
        date: string;
        dateClass: string;
        required: boolean;
        modeConsultation: boolean;
        constructor();
        cacherDate: boolean;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class TexteLongControleur {
        private _hauteurCss;
        elementHtml: HTMLElement;
        texte: string;
        afficherTexteComplet: boolean;
        hauteur: number;
        texteTropLong: boolean;
        texteAction: string;
        texteFormate: string;
        constructor();
        /**
         * Action qui affiche/cache le texte
         */
        gererAffichageTexteComplet(): void;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class ConformiteListeAvisControleur {
        listeAvis: Array<Modele.IAvis>;
        presenceAvis: boolean;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class ModaleTransfererDossierControleur {
        private data;
        private $modalInstance;
        agentSelectionne: MyWay.Model.Agent;
        titre: string;
        /**
         * Après saisie, l'agent n'est pas valide
         */
        erreurAgent: boolean;
        /**
         * Pour valider il faut obligatoirement un agent valide
         */
        isAgentValide: boolean;
        static $inject: Array<string>;
        constructor(data: DonneesModale.IDataTransfererDossierEntree, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        transferer(): void;
        close(): void;
    }
}

declare module ApiInstuctionCredit.DonneesModale {
    interface IDataTransfererDossierEntree {
        titre: string;
    }
    interface IDataTransfererDossierSortie {
        agent: MyWay.Model.Agent;
    }
}

declare module ApiInstuctionCredit.Service {
    class ModaleTransfererDossierService {
        private modalService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService);
        popinTransfert(titre: string): ng.IPromise<MyWay.Model.Agent>;
    }
}

declare module ApiInstuctionCredit {
    class EmissionDocumentsAssuranceExterne {
        listeAssuranceExterneByPersonne: Array<Modele.IDataPersonneAssuranceExterne>;
        isPresenceDocument: boolean;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class EmissionDocumentsImprimerControleur {
        private $q;
        private erreurService;
        private impressionService;
        private editerDocumentService;
        private wsDossierService;
        private wsAssuranceService;
        idDossier: string;
        listeErreursImpression: Array<string>;
        propositionSelected: Modele.IProposition;
        dataClients: Modele.IDataTableauIEmissionDocuments;
        dataFicheSuiveuse: Modele.IDataFicheSuiveuse;
        listeAssuranceExterneByPersonne: Array<Modele.IDataPersonneAssuranceExterne>;
        activerLoader: (activation: IActiverLoaderLocal) => void;
        codeSignature: ApiInstuctionCredit.Constantes.Dossier.CodeSignatureElectronique;
        impressionAutorisee: boolean;
        static $inject: Array<string>;
        constructor($q: ng.IQService, erreurService: Service.ErreurService, impressionService: Service.ImpressionService, editerDocumentService: Service.EditerDocumentService, wsDossierService: Service.Data.DossierService, wsAssuranceService: Service.Data.AssuranceService);
        imprimerDocuments(): void;
        private lancerImpression(listeDocs);
        private imprimerAssuranceExterne();
        private getDocumentDescriptionAssurance(listeAssuranceExterneByPersonne);
        private getListeDocsAssuranceAssuranceExterneSelected(listeAssuranceExterneByPersonne);
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    interface IActiverLoaderLocal {
        activation: boolean;
    }
    class EmissionDocumentsClientsControleur {
        private $q;
        private erreurService;
        private anomalieService;
        private wsPiecoService;
        idDossier: string;
        listeAnomalies: Array<Modele.IAnomalieLecture>;
        tableauPropositions: MyWay.UI.ImwTableOptions;
        listePropositions: Array<Modele.IProposition>;
        listePropositionsSelected: Array<Modele.IProposition>;
        propositionSelected: Modele.IProposition;
        dataClients: Modele.IDataTableauIEmissionDocuments;
        dataFicheSuiveuse: Modele.IDataFicheSuiveuse;
        listeAssuranceExterneByPersonne: Array<Modele.IDataPersonneAssuranceExterne>;
        activerLoader: (activation: IActiverLoaderLocal) => void;
        libellePhraseTableauPropositions: string;
        afficherTableauDocuments: boolean;
        static $inject: Array<string>;
        constructor($q: ng.IQService, erreurService: ApiInstuctionCredit.Service.ErreurService, anomalieService: ApiInstuctionCredit.Service.AnomalieService, wsPiecoService: ApiInstuctionCredit.Service.Data.PiecoService);
        private getTableauPropositions();
        private loadDocumentByProposition(proposition);
        private chargerDocumentsByProposition(idPlan);
        private listerDocuments(type, idPlan);
        /**
         * Contrainte du composant mw-table
         */
        private setDocumentsClient(result);
        private setDocumentsFicheSuiveuse(result);
        private setDocumentsRefusAssuranceExterne(result);
        private affichageDocsAutorise(listeAnomalies);
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class IcFicheSuiveuseControleur {
        dataFicheSuiveuse: Modele.IDataFicheSuiveuse;
        tableauDocuments: MyWay.UI.ImwTableOptions;
        constructor();
        getTableau(): MyWay.UI.ImwTableOptions;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class FicheRefusAssuranceExtreneControleur {
        static $inject: Array<string>;
        tableauDocuments: MyWay.UI.ImwTableOptions;
        listeDocsRefusAssuranceExterne: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocsRefusAssuranceExterneSelected: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        index: string;
        constructor();
        creerTableau(): MyWay.UI.ImwTableOptions;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class FicheSuiveuseControleur {
        static $inject: Array<string>;
        tableauDocuments: MyWay.UI.ImwTableOptions;
        listeDocsFicheSuiveuse: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocsFicheSuiveuseSelected: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        constructor();
        creerTableau(): MyWay.UI.ImwTableOptions;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    import ApiModel = ApiInstuctionCredit.Modele;
    class GraphiqueCreditsControleur {
        private $timeout;
        nameId: string;
        creditsInternes: Array<ApiModel.ICreditInterne>;
        creditsExternes: Array<ApiModel.ICreditExterne>;
        listePhases: Array<ApiModel.ICreditPhase>;
        symboleDevise: string;
        creditLissage: ApiModel.CreditGraphique;
        intersectionsMax: Array<number>;
        private padding;
        private xScale;
        private yScale;
        private xAxisGen;
        private yAxisGen;
        private listeCredits;
        private dureesPhases;
        private echeanceMax;
        private grapheReference;
        private creditGraphique;
        private colors;
        private graphs;
        private graphiqueDessine;
        private margin;
        private legendRectSize;
        width: number;
        height: number;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService);
        private loadGraphique();
        /**
         * Permet de générer les points d'intersection pour chaque crédit
         */
        private creationPhases();
        /**
         * Permet de générer les points d'intersection pour chaque crédit
         */
        private creationPoints();
        /**
         * Permet de créer les points pour chaque intersection en prenant en compte le lissage
         */
        private creationPointsLissage();
        /**
         * Permet de dessiner le graphique
         */
        private dessinerGraphique(svg);
        /**
         * Permet de paramétrer les axes X et Y
         */
        private parametresAxes();
        /**
         * Permet de dessinner les axes X et Y
         */
        private dessinerAxes(svg);
        /**
         * Permet d'ajouter la légende au graphique
         */
        legende(svg: any, color: any, nbCreditParLigne: number): void;
        /**
         * Permet de traiter les crédits internes pour les transformer dans le bon format
         */
        private traitementCreditsInternes();
        /**
         * Permet de traiter les crédits externes pour les transformer dans le bon format
         */
        private traitementCreditsExternes();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    import ApiModel = ApiInstuctionCredit.Modele;
    class PiecoControlesControleur {
        listeControle: Array<ApiModel.IControleManuelDescription>;
        comportementPieco: Modele.IPiecoComportement;
        readonly: boolean;
        tousControlesConformes: boolean;
        codeA: number;
        codeE: number;
        codeN: number;
        codeP: number;
        codeR: number;
        private _listeControlesInitiale;
        filtreTraiterAvantActif: boolean;
        listeControleTraiterAvant: Array<ApiModel.ISelectbox>;
        controleTraiterAvantSelect: ApiModel.ISelectbox;
        filtreStatutControleActif: boolean;
        listeStatutsControle: Array<ApiModel.ISelectboxNumber>;
        statutControleSelect: ApiModel.ISelectboxNumber;
        isAutoriserMajTout: boolean;
        disabledIsAutoriserMajTout: boolean;
        constructor();
        /**
         * Mise à jour de touts les éléments visible du tableau
         */
        majTousControles(): void;
        /**
         * Active le filtre traitement
         */
        activerFiltreTraiterAvant(): void;
        /**
         * Active le filtre etat
         */
        activerFiltreEtat(): void;
        /**
         * Si affichage sas filtre: toutes les données sont visibles
         */
        private resetContenuTableau();
        /**
         * Afin de filtrer sur la totalité des éléments, sauvegarde de la liste initiale ou maj des données modifiées
         */
        private initListeInitiale();
        filter(): void;
        private filtrerByEtat(listeControlesBase);
        private filtrerByTraitement(listeControlesBase);
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class PiecesControleur {
        listePieces: Array<Modele.IPieceDescription>;
        listeStatutsPiece: Array<Modele.ISelectboxNumber>;
        commentaire: string;
        comportementPieco: Modele.IPiecoComportement;
        libelleTypePiece: string;
        readonly: boolean;
        toutesPiecesConformes: boolean;
        isAutoriserMajTout: boolean;
        disabledIsAutoriserMajTout: boolean;
        estNumerique: boolean;
        libellePhrase: string;
        libelleAcceptation: string;
        libelleRefus: string;
        disbaledCommentaire: boolean;
        constructor();
        majToutesPieces(): void;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    /**
     * Cas particulier : lorsque le sous état du dossier « Traitement en cours » prend la valeur « Instruction Agence »
     * alors la colonne « Finalités » n’est pas affichée dans le tableau.
     */
    class TableauPiecesControleur {
        private _listePiecesInitiale;
        listePieces: Array<Modele.IPieceDescription>;
        estNumerique: boolean;
        accesLectureSeule: boolean;
        libelleTypePiece: string;
        readonly: boolean;
        codeA: number;
        codeE: number;
        codeN: number;
        codeP: number;
        codeR: number;
        filtreFinaliteActif: boolean;
        listeFinalites: Array<Modele.ISelectbox>;
        finaliteSelect: Modele.ISelectbox;
        filtreStatutPieceActif: boolean;
        listeStatutsPiece: Array<Modele.ISelectboxNumber>;
        statutPieceSelect: Modele.ISelectboxNumber;
        nbColonnesTotal: number;
        libelleStatutConformite: string;
        libelleAcceptation: string;
        libelleRefus: string;
        libelleAutre: string;
        constructor();
        getAcquisitionClass(codeEtatAcquistion: string): string;
        getAcquisitionLabel(codeEtatAcquistion: string): string;
        /**
         * Active le filtre finalité
         */
        activerFiltreFinalite(): void;
        /**
         * Active le filtre conformité
         */
        activerFiltreConformite(): void;
        /**
         * Afin de filtrer sur la totalité des éléments, sauvegarde de la liste initiale ou maj des données modifiées
         */
        private initListeInitiale();
        /**
         * Si affichage sas filtre: toutes les données sont visibles
         */
        private resetContenuTableau();
        /**
         * Filtre les données
         */
        filter(): void;
        /**
         * Filtre les pièces selon la finalité
         * @param listePiecesFiltrables
         */
        private filtrerByFinalite(listePiecesFiltrables);
        /**
         * Filtre les pièces selon le statut de la pièce (appelé conformité ou présence)
         * @param listePiecesFiltrables
         */
        private filtrerByStatut(listePiecesFiltrables);
        controlePieceSansObjet(codeAscii: number): boolean;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class SignatureTableauIntervenantsControleur {
        static $inject: any[];
        dossierComplet: ApiInstuctionCredit.Modele.IDossierComplet;
        listeIntervenants: Array<ApiInstuctionCredit.Modele.IIntervenantSignature>;
        consultation: boolean;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class SignatureValidationMandatsControleur {
        listeMandats: Array<ApiInstuctionCredit.Modele.IMandatSignature>;
        consultation: boolean;
        dossierComplet: Modele.IDossierComplet;
        afficherValidationMandats: boolean;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit.Modele {
    interface IAjustementTauxDescription extends IElement {
        libelleTauxBonificationMajoration: string;
        valeurTauxBonificationMajoration: number;
        changementTauxConseille: boolean;
        tauxActuel: number;
        libelleRemiseMajoration: string;
        valeurRemiseMajoration: number;
        tauxConseillePondere: number;
        libelleNouvelleRemiseMajoration: string;
        valeurNouvelleRemiseMajoration: number;
        tauxLibelleChoixUn: string;
        afficherTauxChoixDeux: boolean;
        tauxLibelleChoixDeux: string;
        afficherTauxChoixTrois: boolean;
        tauxLibelleChoixTrois: string;
        margeRevision: number;
        margeLibelleChoix: string;
    }
    class AjustementTauxDescription implements IAjustementTauxDescription {
        private ajustementTaux;
        private _remiseMajorationIsMajore;
        private _tauxBonificationMajorationIsBonifie;
        private _nouvelleRemiseMajorationIsMajore;
        constructor(ajustementTaux: IAjustementTaux);
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        /**
         *  Taux et marge : infos communes
         */
        libelleTauxBonificationMajoration: string;
        valeurTauxBonificationMajoration: number;
        /**
         * Taux: infos
         */
        changementTauxConseille: boolean;
        tauxActuel: number;
        libelleRemiseMajoration: string;
        valeurRemiseMajoration: number;
        tauxConseillePondere: number;
        libelleNouvelleRemiseMajoration: string;
        valeurNouvelleRemiseMajoration: number;
        /**
         * Taux: choix
         */
        tauxLibelleChoixUn: string;
        afficherTauxChoixDeux: boolean;
        tauxLibelleChoixDeux: string;
        afficherTauxChoixTrois: boolean;
        tauxLibelleChoixTrois: string;
        /**
         *  Marge
         */
        margeRevision: number;
        margeLibelleChoix: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjustementTaux extends IElement {
        remiseMajoration: number;
        nouvelleRemiseMajoration: number;
        tauxActuel: number;
        tauxBonificationMajoration: number;
        tauxConseillePondere: number;
        margeRevision: number;
        remiseTaux: boolean;
        changementTauxConseille: boolean;
    }
    interface IDefinirRemiseTauxRequest {
        identifiantDossier: string;
        identifiantPlanFinancement: string;
        identifiantCredit: string;
        typeRemise: number;
        applicationMarge: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAssuranceParamGetRequest extends IParamGetRequest {
        identifiantDossier: string;
    }
    interface IAssuranceExterneRefus extends IRefusAssuranceExterneLecture {
        descriptionPersonne?: string;
    }
    interface IMiseAJourElementRequest {
        identifiantDossier: string;
        elementMiseAJour: IElementMaj;
    }
    interface IRefusAssuranceExterneMaj extends IElementMaj {
        compagnieAssurance: string;
        referenceContrat: string;
        dateReceptionDemande: string;
        rolePersonne: string;
        motifRefus: string;
    }
    interface IRefusAssuranceExterneLecture extends IElementLecture {
        motifRefus: string;
        idDossierInstruction: string;
        numeroRelatifPlanDossier: number;
        identifiantpersonne: string;
        numeroRangRefusProposition: number;
        compagnieAssurance: string;
        referenceContrat: string;
        dateReceptionDemande: string;
        dateImpressionDemande: string;
        codeDecision: number;
        rolePersonne: string;
    }
    interface IAjouterRefusAssuranceExterneRequest {
        identifiantDossier: string;
        identifiantPersonne: string;
        identifiantPlanFinancement: string;
        refusAssurance: IRefusAssuranceExterneMaj;
    }
    interface IParametreEdition {
        /**
         * IdentifiantWsDocument
         */
        identifiantWsDocument: string;
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * CodeSignature
         */
        codeSignature: number;
        /**
         * NiveauTraitement
         */
        niveauTraitement: number;
        /**
         * IdEntiteFonctionnelle
         */
        idEntiteFonctionnelle: string;
        /**
         * CodeTypeEntite
         */
        codeTypeEntite: string;
        /**
         * ModeEdition
         */
        modeEdition: number;
        /**
         * TypeEditique
         */
        typeEditique: number;
        /**
         * FormatEditique
         */
        formatEditique: number;
        /**
         * Params
         */
        params: Array<IParamEditique>;
        /**
         * ForceCtrlEdition
         */
        forceControleEdition: boolean;
        /**
         * ForceCtrlGestion
         */
        forceControleGestion: boolean;
    }
    interface IResultatEditionREFALecture {
        fluxImpression: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        refusSaveCentralApresImpression: boolean;
    }
    interface IEditerDocumentFC050REFRequest {
        identifiantDossier: string;
        idws: string;
        parametreEdition: IParametreEdition;
    }
    interface IDocumentRefusAssuranceExterneParPersonne {
        personne: string;
        listeDocument: Array<IInfoDocument>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterAssuranceAvecControlesRequest {
        identifiantDossier: string;
        listeIdwsCreditCouvertureParAss: Array<string>;
        identifiantPersonne: string;
        identifiantConventionAssurance: string;
    }
    interface IAssurance {
        typeAssurance?: string;
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeAssuranceObligatoire: number;
        codeAssurancePart: number;
        codeResr: number;
        libelleAssuranceExterne: string;
        numeroSirenCieAssurance: string;
        numeroRegleCalculDateEffet: string;
        codeAgreAssuranceExtr: number;
        idPersonneAssurance?: string;
        codeBeneficiaire?: string;
        estAssuranceAXA?: boolean;
        estAssuranceCNP?: boolean;
        estAssuranceGroupePourTAEA?: boolean;
        montant_Encours?: number;
        facultative: number;
        obligatoire: number;
        obligatoirePartielle: number;
        idConvention?: string;
        quotite?: string;
        nomAssure?: string;
        risqueTypeAssurance?: string;
        libelleConvention?: string;
        montant?: number;
        taux?: number;
        idAccessoireGestion?: string;
        idExterneAccessoire?: string;
        codeSousTypeAccessoire?: string;
        codeTypeAccessoire?: string;
        codeTypologieAccessoire?: string;
        partFinancierAccessoire?: number;
        codeIndiceAccessoireAper?: boolean;
        codeIndiceAccessoireFinancier?: boolean;
        dateCreation?: string;
        dateAccpAccessoire?: string;
        dateCloture?: string;
        codeEtatAccessoire?: number;
        dateEnvoi?: string;
        dateEffet?: string;
        dateFinEffet?: string;
        listeIdCouverture?: Array<string>;
        listeIdCotisation?: Array<string>;
        listeIdAvisOrgnExtr?: Array<string>;
        idPlan?: string;
        idws?: string;
        conventionAssurance?: Modele.IConventionAssurance;
    }
    class AssuranceMaj implements IAssurance {
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeAssuranceObligatoire: number;
        codeAssurancePart: number;
        codeResr: number;
        libelleAssuranceExterne: string;
        numeroSirenCieAssurance: string;
        numeroRegleCalculDateEffet: string;
        codeAgreAssuranceExtr: number;
        facultative: number;
        obligatoire: number;
        obligatoirePartielle: number;
        idws: string;
        constructor();
        constructor(assurance: IAssurance);
    }
    interface IAssuranceAccessoireMaj {
        idws: string;
        codeEtatAccessoire: number;
        dateEnvoi: string;
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeResr: number;
        idExterneAccessoire: string;
    }
    interface IResultatAjouterAssuranceAvecControles {
        assuranceSchema: IAssuranceSchema;
        listeAnomalieLecture: IAnomalieLecture[];
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IClauseDeReserveAssurance {
        codeResr: number;
        libelleResrExclusif: string;
        libelleCreationResrExclusif: string;
        numeroOrdreClasse: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDataTableauAssurance {
        idws: string;
        nomAssure: string;
        libelleConvention: string;
        risqueTypeAssurance: string;
        montant: number;
        taux: number;
        lignesCouverture: IDataTableauCouvertureLigne[];
        codeDevise: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITypeAssurance {
        codeTypeAssurance: string;
        libelleTypeAssurance: string;
        codeNatureEntiteAssurance: number;
        libelleCreationTypeAssurance: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ITypeDeSinistreParConvention {
        idCaisseEpargne: number;
        idConvention: string;
        codeTypeSinistre: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IScBonifEligibilite extends IElement {
        tauxCredit: number;
        dureeCredit: number;
        montantMinimumCredit: number;
        montantMaximumCredit: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IScConventionBonification extends IElement {
        idConvention: string;
        libelleCourtConvention: string;
        libelleLongConvention: string;
        idIntervenant: string;
        libelleProduit: string;
        codeTypeInformation: string;
        codeTypeConvention: string;
        codeTypePartenaire: number;
        pourcentageRemisePartenaire: number;
        libelleTypePartenaire: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreditBonificationDescription extends IElement {
        idConvention: string;
        nomPartenaire: string;
        conventionBonification: IScConventionBonification;
        libelleConventionDetaille: string;
        bonificationCalculee: boolean;
        erreurCalculBonification: boolean;
        montantEtablissement: number;
        montantPartenaire: number;
        montantTotal: number;
    }
    class CreditBonificationDescription implements ICreditBonificationDescription {
        private creditBonification;
        private scConvention;
        constructor(creditBonification: ICreditBonification, scConvention: IScConventionBonification);
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        nomPartenaire: string;
        idConvention: string;
        conventionBonification: IScConventionBonification;
        libelleConventionDetaille: string;
        bonificationCalculee: boolean;
        erreurCalculBonification: boolean;
        montantEtablissement: number;
        montantPartenaire: number;
        montantTotal: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterCreditBonificationRequest {
        identifiantDossier: string;
        idendifiantCredit: string;
        idConventionBonification: string;
    }
    interface ICalculerBonificationRequest {
        identifiantDossier: string;
        identifiantBonification: string;
    }
    interface ICreditBonification extends IElement {
        idCreditExterne: string;
        codeEtat: number;
        montantEtablissement: number;
        montantPartenaire: number;
        estEligible: boolean;
        nomPartenaire: string;
        modeCalculTaux: number;
        tauxHorsBonif: number;
        idCreditIntr: string;
        idConvention: string;
        information: Array<ICreditBonificationInfo>;
    }
    interface ICreditBonificationInfo {
        codeInformation: string;
        codeDetail: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreditSyntheseProposition {
        idws: string;
        description: string;
        codeDevise: string;
        montant: number;
        cout: number;
        libelleModeRestitutionTeg: string;
        valeurTeg: number;
    }
    class CreditSyntheseProposition implements ICreditSyntheseProposition {
        private creditInterne;
        private listePhases;
        idws: string;
        description: string;
        codeDevise: string;
        montant: number;
        cout: number;
        listePhaseSynthese: Array<IPhaseSyntheseProposition>;
        constructor(creditInterne: ICreditInterne, listePhases: Array<ICreditPhase>);
        libelleModeRestitutionTeg: string;
        valeurTeg: number;
        private _modeRestitutionTeg;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IPhaseSyntheseProposition {
        idws: string;
        description: string;
        duree: number;
        mensualite: number;
        coutAssurance: number;
    }
    class PhaseSyntheseProposition implements IPhaseSyntheseProposition {
        idws: string;
        description: string;
        taux: number;
        duree: number;
        mensualite: number;
        coutAssurance: number;
        constructor(phase: ICreditPhase, creditInterne: ICreditInterne);
        private getMensualite(phase, creditInterne);
        private getLibellePhase(codeTypePhase);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IPropositionDescription {
        idws: string;
        titre: string;
        fraisDossier: number;
        fraisAutres: number;
        fraisGaranties: number;
        montantTotalOperation: number;
        apport: number;
        sommeCreditInterne: number;
        sommeCreditExterne: number;
        dureeFinancement: number;
        firstMensualite: number;
        tauxEndettement: number;
        coutCreditInterne: number;
        resteAVivre: number;
        listeCreditSynthese: Array<ICreditSyntheseProposition>;
        listeCreditInterne: Array<ICreditInterne>;
        listeCreditExterne: Array<ICreditExterne>;
        listePhase: Array<ICreditPhase>;
    }
    class PropositionDescription implements IPropositionDescription {
        idws: string;
        titre: string;
        fraisDossier: number;
        fraisAutres: number;
        fraisGaranties: number;
        montantTotalOperation: number;
        apport: number;
        sommeCreditInterne: number;
        sommeCreditExterne: number;
        dureeFinancement: number;
        firstMensualite: number;
        tauxEndettement: number;
        coutCreditInterne: number;
        resteAVivre: number;
        listeCreditSynthese: Array<ICreditSyntheseProposition>;
        listeCreditInterne: Array<ICreditInterne>;
        listeCreditExterne: Array<ICreditExterne>;
        listePhase: Array<ICreditPhase>;
        constructor(numeroProposition: number, planSchema: IPlanFinancementSchema, coutTotalObjet: number, endettement: IEndettement, pListeCreditInterne: Array<ICreditInterne>, pListePhases: Array<ICreditPhase>, pListeCreditExterne: Array<ICreditExterne>);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IProposition extends IElementChecked {
        idws: string;
        titre: string;
        montant: number;
        echeance: number;
        duree: number;
        resteAFinancer: number;
        isPropositionValide: boolean;
        checked: boolean;
        listeIdCreditInterne: Array<string>;
    }
    class Proposition implements IProposition {
        idws: string;
        titre: string;
        montant: number;
        echeance: number;
        duree: number;
        resteAFinancer: number;
        isPropositionValide: boolean;
        checked: boolean;
        listeIdCreditInterne: Array<string>;
        constructor(planSchema: IPlanFinancementSchema, raf: number, listeCreditInterne: Array<ICreditInterne>, indexProposition: number);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAnnulerActeSignatureElectroniqueRequest {
        identifiantDossier: string;
        motifAnnulation: string;
    }
    interface IResultatEligibiliteSignatureElectronique {
        estEligible: boolean;
        messagesErreur: Array<string>;
        messagesErreurPieco: Array<string>;
        messageErreurContelec: Array<string>;
    }
    interface IEstEligibleSignatureElectroniqueRequestSed {
        identifiantDossier: string;
    }
    interface IEstEligibleSignatureElectroniqueRequest {
        identifiantDossier: string;
        codeSignature: number;
    }
    interface IOffreSignatureElectronique extends IElement {
        informationDossierSignature: IInformationDossierSignature;
        listeDocumentIDN: Array<IDocumentSignatureElectronique>;
    }
    interface IInformationSignataire {
        libelleTitreCivilite: string;
        nomRaisonSociale: string;
        prenoms?: string;
        dateSignatureRecepisse: string;
        dateMiseAdispoOffre: string;
        dateSignatureOffre: string;
    }
    interface IInformationDossierSignature {
        identifiantActeIDN: string;
        dateCreationDosElec: string;
        dateOuvertureTransaction: string;
        dateCreationActe: string;
        identifiantEtatDossier: string;
        libelleEtatDossier: string;
        motifAnnulation: string;
        acteExiste: boolean;
        estDossierComplete: boolean;
        estDossierValide: boolean;
        estDossierSigne: boolean;
        estProcessusLance: boolean;
        informationsSignataire: Array<IInformationSignataire>;
    }
    interface IDocumentSignatureElectronique extends IElement {
        identifiantDocument: string;
        codeTypeEntite: string;
        identifiantIDN: string;
        identifiantComplet: string;
        nomDocument: string;
        referenceDocProd: string;
        libelle: string;
        origine: string;
        typeSignature: string;
        fluxBinaire: string;
        estPresent: boolean;
        indicePlan: number;
        indiceCredit: number;
        idPersonne: string;
        exemplaire: string;
        libelleEntiteRattachement: string;
        numeroOrdre: number;
        obligatoire: boolean;
        estDocNEO: boolean;
        estDocOffre: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ILireDocumentActeSignatureElectroniqueRequest {
        identifiantDossier: string;
        identifiantComplet: string;
    }
    interface IDocumentSignatureElectroniqueDescription extends IDocumentOffreDescription {
        identifiantComplet: string;
        identifiantIDN: string;
        nomDocument: string;
        telechargementAutorise: boolean;
        statutPresence: string;
        estPresent: boolean;
        estDocOffre: boolean;
        numeroOrdre: number;
        checkboxVisible: boolean;
        flux: string;
        listeFichier: Array<File>;
        isFichierCharge: boolean;
        nomFichier: string;
        supprimerFichier(): void;
    }
    class DocumentSignatureElectroniqueDescription implements IDocumentSignatureElectroniqueDescription {
        private documentSignatureElectronique;
        private listeCreditInterneSchema;
        private _checked;
        private _fluxBinaire;
        generation: Enum.Edition.DocumentOffreIndustrialiseeStatutAction;
        ajoutLiasse: Enum.Edition.DocumentOffreIndustrialiseeStatutAction;
        listeFichier: Array<File>;
        constructor(documentSignatureElectronique: IDocumentSignatureElectronique, listeCreditInterneSchema: Array<ApiInstuctionCredit.Modele.ICreditInterneSchema>);
        idws: string;
        identifiantComplet: string;
        identifiantIDN: string;
        nomDocument: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        libelleDocument: string;
        statutPresence: string;
        estPresent: boolean;
        estDocOffre: boolean;
        numeroOrdre: number;
        /**
         * Fichier
         */
        telechargementAutorise: boolean;
        flux: string;
        isFichierCharge: boolean;
        nomFichier: string;
        supprimerFichier(): void;
        /**
         * Manipulation
         */
        checkboxVisible: boolean;
        checkable: boolean;
        checked: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDocumentSignatureElectroniqueMaj extends IElementMaj {
        identifiantComplet: string;
        fluxBinaire: string;
    }
    class DocumentSignatureElectroniqueMaj implements IDocumentSignatureElectroniqueMaj {
        private documentSignatureElectroniqueDescription;
        private document;
        constructor(documentSignatureElectroniqueDescription: IDocumentSignatureElectroniqueDescription, document: IDocument);
        idws: string;
        identifiantComplet: string;
        fluxBinaire: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IResultatLectureDocumentActeSignature {
        /**
         * FluxDocumentIDN
         */
        fluxDocumentIDN: string;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAlimenterDossierSignatureElectroniqueRequest {
        identifiantDossier: string;
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueMaj>;
    }
    interface IAlimDossSignElecGeneRequest {
        entreeSignatureElectronique: IEntreeSignatureElectroniqueGen;
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueMaj>;
    }
    interface IResultatOffreSignatureElectronique {
        /**
         * Action
         */
        action: string;
        /**
         * Code
         */
        code: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * IdentiteActe
         */
        identiteActe: string;
        /**
         * SignatureElectroniqueLecture
         */
        signatureElectroniqueLecture: ISignatureElectroniqueLecture;
        /**
         * OffreSignatureElectroniqueLecture
         */
        offreSignatureElectroniqueLecture: IOffreSignatureElectronique;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IResultatTraitementSignature {
        /**
         * SignatureElectroniqueLecture
         */
        signatureElectroniqueLecture: ISignatureElectroniqueLecture;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDestinataireOffreIndustrialiseeDescription {
        listeDocumentOffreIndustrialiseeDescription: Array<IDocumentOffreIndustrialiseeDescription>;
        libellePersonne: string;
        libelleRole: string;
        etatDossier: string;
    }
    class DestinataireOffreIndustrialiseeDescription implements IDestinataireOffreIndustrialiseeDescription {
        private listeDocs;
        private libelelEtatDossier;
        private roleDestinataire;
        private libelleEmprunteur;
        private libelleRedacteur;
        constructor(listeDocs: Array<IDocumentOffreIndustrialiseeDescription>, libelelEtatDossier: string, roleDestinataire: string, libelleEmprunteur: string, libelleRedacteur: string);
        listeDocumentOffreIndustrialiseeDescription: Array<IDocumentOffreIndustrialiseeDescription>;
        etatDossier: string;
        libelleRole: string;
        libellePersonne: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDocumentOffreIndustrialiseeDescription extends IDocumentOffreDescription {
        codeDocument: string;
        dateModification: string;
        urlPDF: string;
        estDocNEO: boolean;
        numeroOrdre: number;
        estAbsent: boolean;
        concerne: boolean;
        statutConcerne: string;
        estConcerneCasEcheant: boolean;
        estDocOffre: boolean;
    }
    class DocumentOffreIndustrialiseeDescription implements IDocumentOffreIndustrialiseeDescription {
        private etatDossierEdition;
        private documentOffreIndustrialisee;
        private _checked;
        private _checkable;
        statutConcerne: string;
        generation: Enum.Edition.DocumentOffreIndustrialiseeStatutAction;
        ajoutLiasse: Enum.Edition.DocumentOffreIndustrialiseeStatutAction;
        constructor(etatDossierEdition: string, documentOffreIndustrialisee: IDocumentOffreIndustrialisee);
        idws: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
        libelleDocument: string;
        codeDocument: string;
        estAbsent: boolean;
        dateModification: string;
        urlPDF: string;
        estDocNEO: boolean;
        numeroOrdre: number;
        checkable: boolean;
        checked: boolean;
        estConcerneCasEcheant: boolean;
        concerne: boolean;
        estDocOffre: boolean;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDocumentOffreIndustrialiseeMaj extends IElementMaj {
        fluxDocument: string;
    }
    class DocumentOffreIndustrialiseeMaj implements IDocumentOffreIndustrialiseeMaj {
        private documentOffreIndustrialiseeDescription;
        private document;
        constructor(documentOffreIndustrialiseeDescription: IDocumentOffreIndustrialiseeDescription, document: IDocument);
        idws: string;
        fluxDocument: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDocumentOffreIndustrialisee extends IElement {
        codeEntiteFonctionnelle: string;
        idEntiteFonctionnelle: string;
        exemplaire: string;
        codeDocument: string;
        libelleDocument: string;
        libelleAide: string;
        codeExterneDocument: string;
        indicateurCasEcheant: string;
        numeroOrdre: number;
        origine: string;
        dateCreation: string;
        dateModification: string;
        etatDocument: string;
        documentCommun: string;
        obligatoire: boolean;
        destinataire: string;
        urlPDF: string;
        estDocNEO: boolean;
        estDocOffre: boolean;
    }
    interface IOffrePretIndustrialisee extends IElement {
        editionEligible: boolean;
        editionEligibleEnAgence: boolean;
        libelleDossier: string;
        dossierGdeACree: boolean;
        etatDossierEdition: string;
        nombreEnveloppesLigne1: number;
        nombreEnveloppesLigne2: number;
        nombreEnveloppesLigne3: number;
        libelleEnveloppeLigne1: string;
        libelleEnveloppeLigne2: string;
        libelleEnveloppeLigne3: string;
        nombreEnveloppesLigne1NO: number;
        nombreEnveloppesLigne2NO: number;
        nombreEnveloppesLigne3NO: number;
        libelleEnveloppeLigne1NO: string;
        libelleEnveloppeLigne2NO: string;
        libelleEnveloppeLigne3NO: string;
        nombreEnveloppesLigne1CA: number;
        nombreEnveloppesLigne2CA: number;
        nombreEnveloppesLigne3CA: number;
        libelleEnveloppeLigne1CA: string;
        libelleEnveloppeLigne2CA: string;
        libelleEnveloppeLigne3CA: string;
        libelleAbregeCaisse: string;
        libelleEtatDossier: string;
        eDSEdition: string;
        validationImplicite: boolean;
        documentGlobalPDF: string;
        listeDocIndusLecture: Array<IDocumentOffreIndustrialisee>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreerDossierEditionGdeRequest {
        identifiantDossier: string;
        listeIdwsDocOffreIndus: Array<string>;
    }
    interface IAjouterDocumentsDansDossierEditionRequest {
        identifiantDossier: string;
        listeDocOffreIndusMaj: Array<IDocumentOffreIndustrialiseeMaj>;
    }
    interface IResultatOffrePretIndustrialisee {
        code: string;
        libelle: string;
        valeur: string;
        anomaliesPassageEnGestionLecture: Array<IAnomalieLecture>;
        anomaliesLecture: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAjouterMandatRequest {
        identifiantDossier: string;
        identifiantPayeur: string;
        bicIban: string;
        modeReglement: string;
    }
    interface IListerMandatsRequest {
        identifiantDossier: string;
        idwsPlanFinancier: string;
    }
    interface IMandat {
        idws: string;
        codeCaisse: string;
        dateDeSignature: string;
        typeFrequenceMandat: string;
        typeMandatSepaSdd: number;
        codeNatureMandat: number;
        referenceMandat: string;
        nomDuCreancier: string;
        adresseDuCreancier: string;
        codePostalDuCreancier: string;
        villeDuCreancier: string;
        codePaysDuCreancier: string;
        libelleDuPaysDonneurOrdre: string;
        idCreancierSepaDomaine: string;
        nomDuDebiteur: string;
        codeBicDebiteur: string;
        numeroIbanCompteDebiteur: string;
        idDuDebiteur: string;
        adresseDuDebiteur: string;
        codePostalDuDebiteur: string;
        villeDuDebiteur: string;
        codePaysDuDebiteur: string;
        libellePaysDuDebiteur: string;
        libelleCreancierInitial: string;
        idCreancierInitial: string;
        libelleDebiteurFinal: string;
        idDebiteurFinal: string;
    }
}

import Tools = ApiInstuctionCredit.Outils;
declare module ApiInstuctionCredit.Modele {
    interface IMandatSignature {
        descriptionPayeur: string;
        numeroCredit: string;
        libelleProduit: string;
        referenceUniqueMand: string;
        dateSignature: string;
    }
    class MandatSignature implements IMandatSignature {
        private mandatPayeurSignature;
        private _dateSignature;
        constructor(mandatPayeurSignature: ApiInstuctionCredit.Modele.IMandatPayeurSignature);
        descriptionPayeur: string;
        numeroCredit: string;
        libelleProduit: string;
        referenceUniqueMand: string;
        dateSignature: string;
        private getDateSignatureInitiale();
    }
}

declare module ApiInstuctionCredit.Modele {
    class MandatsDescriptionBuilder {
        getResult(dossierComplet: IDossierComplet, listePersonnes: Array<IPersonne>, listeModeReglement: Array<ITypeReglement>, listePayeurs: Array<IPayeur>, listeCreditInterne: Array<ICreditInterne>): IMandatsDescription;
        /**
         * Payeurs
         */
        private getMandatPersonne(dossierComplet, personne, listeAllPayeur, listeAllCreditInterne, listeModeReglement);
        private getMandatCredit(credit, payeur, dossierComplet, listeModeReglement);
        private getLibelleDesignation(personne);
        /**
         * Payeur de secours
         */
        private getMandatPayeurSecours(dossierComplet, listeModeReglement);
        private getMandatCreditPayeurSecours(dossierComplet, modeReglement);
        private getPayeurSecours(dossierComplet, modeReglement);
        private getIsMandatEditable(modeReglement, dossierComplet);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IMandatsDescription {
        existeMandats: boolean;
        listeMandat: Array<IMandatPersonne>;
        mandatPayeurSecours: IMandatPayeurSecours;
    }
    interface IMandatPersonne {
        libellePayeur: string;
        listeMandatCredit: Array<IMandatCredit>;
    }
    interface IMandatPayeurSecours {
        libellePayeur: string;
        mandatCredit: IMandatCredit;
    }
    interface IMandatCredit {
        payeur: IPayeur;
        libelleCredit: string;
        modeReglement: ITypeReglement;
        bic: string;
        iban: string;
        isMandatEditable: boolean;
        isMandatIban: boolean;
        numeroCredit?: string;
    }
    interface IMandatPayeurSignature {
        libellePayeur: string;
        mandatCredit: IMandatCredit;
    }
}

declare module ApiInstuctionCredit {
    import ApiModel = ApiInstuctionCredit.Modele;
    class EditionAnomaliesControleur {
        listeAnomalies: Array<ApiModel.IAnomalieLecture>;
        listeErreursImpression: Array<string>;
        filtrer: boolean;
        private _listeAnomalies;
        listeAnomaliesBloquantes: Array<ApiModel.IAnomalieLecture>;
        listeAnomaliesNonBloquantes: Array<ApiModel.IAnomalieLecture>;
        constructor();
        private getAnomaliesFiltrees(anomalieBloquante);
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    interface ICheckBoxItem {
        id: string;
        checked: boolean;
        label: string;
    }
    interface ICheckBoxList {
        id: string;
        label: string;
        listCheckbox: ICheckBoxItem[];
    }
    class ModaleEditionSaisieComplementaireControleur {
        private data;
        private $modalInstance;
        private modaleEditionSaisieComplementaireService;
        private erreurService;
        static $inject: Array<string>;
        loader: boolean;
        listeInputSaisiesComplementaire: Object[];
        private listePropriete;
        constructor(data: DonneesModale.IDataFicheSuiveuseEntree, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, modaleEditionSaisieComplementaireService: Service.ModaleEditionSaisieComplementaireService, erreurService: Service.ErreurService);
        isListeDonneesCreditAModifierACA(proprieteName: string): boolean;
        /**
         * Récupérations des champs à afficher
         */
        private recupereChamps(propriete, proprieteName);
        /**
         * Récupérations des clés + valeurs
         */
        private addToListes(propriete, proprieteName);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet d'enregistrer les données de la popin
         */
        valider(): void;
        /**
         * genere un Id pour l'element du DOM checkBoxList
         */
        private getNewGuid();
    }
}

declare module ApiInstuctionCredit.DonneesModale {
    interface IDataFicheSuiveuseEntree {
        idDossier: string;
        proprieteSaisieComplementaire: Object;
    }
}

declare module ApiInstuctionCredit.Service {
    class ModaleEditionSaisieComplementaireService {
        private $q;
        private wsDossierService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, wsDossierService: Service.Data.DossierService);
        /**
         * Permet d'enregistrer l'objet saisi compo
         */
        enregistrerModification(idDossier: string, listePropriete: Array<string>, inputsSaisieComplementaire: Object[]): ng.IPromise<void>;
        private getSaisiesComplementaireMaj(listePropriete, listeInputsSaisieComplementaire);
        isListeDonneesCreditAModifierACA(proprieteName: string): boolean;
    }
}

declare module ApiInstuctionCredit {
    class EditionTableauDocumentsControleur {
        private modalService;
        nbElements: number;
        tableauDocuments: MyWay.UI.ImwTableOptions;
        listeDocs: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocsSelected: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocsDisabled: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        static $inject: Array<string>;
        constructor(modalService: MyWay.UI.IModalService);
        private initialisationTableau(nbElements);
        private onSelectionChange(selectedObject);
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class EditionOffreCaracteristiquesControleur {
        private caracteristiquesService;
        static $inject: string[];
        dossierComplet: Modele.IDossierComplet;
        offreComplete: boolean;
        visualiserOffre: () => void;
        constructor(caracteristiquesService: Service.EditionOffreCaracteristiquesService);
        typeOffre: string;
        numeroOffre: number;
        afficherTexteInfos: boolean;
        texteInfos: string;
        dateEdition: string;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit.Service {
    class EditionOffreCaracteristiquesService {
        constructor();
        getTypeOffre(dossierComplet: Modele.IDossierComplet): string;
        getTexteInfos(dossierComplet: Modele.IDossierComplet): string;
    }
}

declare module ApiInstuctionCredit {
    class EditionOffreClausesPersonnaliseesControleur {
        private erreurService;
        private modalClauseService;
        private clausesPersonnaliseesService;
        static $inject: string[];
        modeConsultation: boolean;
        dossierComplet: Modele.IDossierComplet;
        offreSignatureElectronique: Modele.IOffreSignatureElectronique;
        loaderPageParent: boolean;
        redecateurActePresent: boolean;
        idDossier: string;
        listeClauses: Array<Modele.IClausePersonnalisee>;
        etatDossElecACreer: string;
        constructor(erreurService: Service.ErreurService, modalClauseService: Service.ModaleClauseService, clausesPersonnaliseesService: Service.EditionOffreClausesPersonnaliseesService);
        /**
         * Ajoute une clause
         */
        ajouterClause(typeClause: Enum.DestinataireClausePersonne): void;
        desactivationAjoutClause: boolean;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit.Service {
    class EditionOffreClausesPersonnaliseesService {
        private $q;
        private wsDossierService;
        private wsOffreService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, wsDossierService: ApiInstuctionCredit.Service.Data.DossierService, wsOffreService: ApiInstuctionCredit.Service.Data.OffreService);
        /**
         * Formate la clause pour l'ajouter au dossier
         */
        ajouterClausePersonnalisee(idDossier: string, clause: Modele.IClausePersonnalisee): ng.IPromise<Modele.IClausePersonnalisee>;
        /**
         * Mise à jour une clause existante
         */
        majClausePersonnalisee(idDossier: string, clause: Modele.IClausePersonnalisee): ng.IPromise<void>;
        /**
         * Suprression d'une clause
         * /!\ Après une suppresion il faut recharger
         */
        supprimerClausePersonnalisee(idDossier: string, clause: Modele.IClausePersonnalisee): ng.IPromise<Array<Modele.IClausePersonnalisee>>;
        /**
         * Récupère le dossier et charge les clauses
         */
        private getClauses(idDossier);
    }
}

declare module ApiInstuctionCredit {
    class EditionOffreInstitutsEmissionControleur {
        institutsEmission: Modele.IInstitutsEmission;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class EditionOffreMandatsControleur {
        modeConsultation: boolean;
        loader: boolean;
        idDossier: string;
        recharchementContexteEditique: () => ng.IPromise<void>;
        mandatsDescription: ApiInstuctionCredit.Modele.IMandatsDescription;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit.Service {
    class EditionOffreMandatsService {
        private wsMandatService;
        static $inject: Array<string>;
        constructor(wsMandatService: Service.Data.MandatService);
        ajouterMandat(idDossier: string, payeur: Modele.IPayeur, isPayeurSecours: boolean): ng.IPromise<Modele.IPayeur>;
        supprimerMandat(idDossier: string, payeur: Modele.IPayeur, isPayeurSecours: boolean): ng.IPromise<Modele.IPayeur>;
    }
}

declare module ApiInstuctionCredit {
    interface IDataModaleControleDossierDecision {
        retourControleDecision: ApiInstuctionCredit.Modele.IRetourControleDecision;
        parametrageBoutonContinuer: ApiInstuctionCredit.Modele.IParametrageBoutonContinuer;
    }
    class ModaleAnomalieGestionControleur {
        private $modalInstance;
        private data;
        listeControles: Array<Modele.IAnomalieLecture>;
        listeAnomaliesBloquantes: Array<Modele.IAnomalieLecture>;
        listeAlertes: Array<Modele.IAnomalieLecture>;
        texteAnomaliesBloquantes: string;
        texteAlertes: string;
        parametrageBoutonContinuer: Modele.IParametrageBoutonContinuer;
        titre: string;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: DonneesModale.IDataAnomalieGestion);
        private getListeControlesFiltres(liste, estBloquante);
        /**
         * Permet de fermer la popin en mode "Forcer"
         */
        poursuivre(): void;
        /**
         * Permet de fermer la popin en mode "Annuler"
         */
        close(): void;
    }
}

declare module ApiInstuctionCredit.DonneesModale {
    /**
     * Popin contrôles pour éditer le dossier
     */
    interface IDataAnomalieGestion {
        anomalies: Modele.IAnomalieLecture[];
        parametrageBoutonContinuer: Modele.IParametrageBoutonContinuer;
    }
}

declare module ApiInstuctionCredit {
    class EmissionDocsAssrExtTableauControleur {
        dataAssuranceExterne: Modele.IDataPersonneAssuranceExterne;
        index: string;
        tableauDocuments: MyWay.UI.ImwTableOptions;
        constructor();
        getTableau(): MyWay.UI.ImwTableOptions;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class ChampSaisieComplementaireControleur {
        elt: Object;
        indexElement: number;
        constructor();
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class DetailEditionClausesListeClausesControleur {
        private modalService;
        private erreurService;
        private modalClauseService;
        private clausesPersonnaliseesService;
        loaderPageParent: boolean;
        modeConsultation: boolean;
        clausesEmprunteur: boolean;
        idDossier: string;
        listeClauses: Array<Modele.IClausePersonnalisee>;
        afficherBloc: boolean;
        titrePanel: string;
        listeClausesFiltrees: Array<Modele.IClausePersonnalisee>;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, erreurService: Service.ErreurService, modalClauseService: Service.ModaleClauseService, clausesPersonnaliseesService: Service.EditionOffreClausesPersonnaliseesService);
        getIdLi(index: number): string;
        /**
         * Ouverture de la popin permettant l'édition d'une clause puis enregistrement des modifications
         * @param dataClause
         */
        majClause(dataClause: Modele.IClausePersonnalisee): void;
        /**
         * Demande confirmation puis suppression de la clause
         * @param clause
         */
        supprimerClause(clause: Modele.IClausePersonnalisee): void;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class ModaleClauseControleur {
        private dataClause;
        private $modalInstance;
        static $inject: Array<string>;
        clause: Modele.IClausePersonnalisee;
        titre: string;
        constructor(dataClause: DonneesModale.IDataClauseEntree, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        /**
         * Ferme la popin
         */
        close(): void;
        /**
         * Enregistrement de l'avis
         */
        valider(): void;
    }
}

declare module ApiInstuctionCredit.DonneesModale {
    /**
     * Données pour l'ouverture de la popin de clause lors de l'édition
     */
    interface IDataClauseEntree {
        enCreation: boolean;
        clause: Modele.IClausePersonnalisee;
    }
    interface IDataClauseSortie {
        enCreation: boolean;
        clause: Modele.IClausePersonnalisee;
    }
}

declare module ApiInstuctionCredit.Service {
    class ModaleClauseService {
        private modalService;
        static $inject: Array<string>;
        constructor(modalService: MyWay.UI.IModalService);
        /**
         * Ouverture de la popin permettant d'éditer une clause
         */
        popinClause(data: DonneesModale.IDataClauseEntree): ng.IPromise<Modele.IClausePersonnalisee>;
    }
}

declare module ApiInstuctionCredit {
    class DetailEditionInstitutsEmissionCreditControleur {
        private modalService;
        idDossier: string;
        eligibiliteModifiable: boolean;
        creditInterne: Modele.ICreditInterne;
        libelleDetailCredit: string;
        statutEligibilite: string;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService);
        /**
         *  popin permettant de mettre à jour l'éligibilité
         */
        modifierEligibilite(): void;
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class DetailEditionMandatsCreditControleur {
        private modalService;
        private erreurService;
        private mandatsService;
        modeConsultation: boolean;
        loader: boolean;
        private _payeurEdite;
        idDossier: string;
        libellePayeur: string;
        mandatCredit: Modele.IMandatCredit;
        casPayeurSecours: boolean;
        recharchementContexteEditique: () => ng.IPromise<void>;
        isMandatEditable: boolean;
        afficherBtnSupprimer: boolean;
        afficherBtnAttribuer: boolean;
        payeur: Modele.IPayeur;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, erreurService: Service.ErreurService, mandatsService: Service.EditionOffreMandatsService);
        supprimer(): void;
        attribuer(): void;
        consulter(): void;
        private editRum(promesse);
    }
}

declare module ApiInstuctionCredit {
}

declare module ApiInstuctionCredit {
    class ModaleEditionMandatControleur {
        private data;
        private $modalInstance;
        libellePayeur: string;
        mandatCredit: Modele.IMandatCredit;
        payeur: Modele.IPayeur;
        static $inject: Array<string>;
        constructor(data: DonneesModale.IDataEditionMandatEntree, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        close(): void;
    }
}

declare module ApiInstuctionCredit.DonneesModale {
    /**
     * Popin consultation d'un mandat de l'édition
     */
    interface IDataEditionMandatEntree {
        libellePayeur: string;
        mandatCredit: Modele.IMandatCredit;
        payeur: Modele.IPayeur;
    }
}

declare module ApiInstuctionCredit {
    class ModaleEditionEligibiliteControleur {
        private data;
        private $modalInstance;
        private erreurService;
        private wsDossierService;
        loader: boolean;
        creditInterne: Modele.ICreditInterne;
        listeTypeEligibilite: Array<Modele.ISelectboxNumber>;
        typeEligibiliteSelect: Modele.ISelectboxNumber;
        static $inject: Array<string>;
        constructor(data: DonneesModale.IDataEditionEligibiliteEntree, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, erreurService: Service.ErreurService, wsDossierService: Service.Data.DossierService);
        close(): void;
        /**
         * Enregistrement de l'avis
         */
        valider(): void;
    }
}

declare module ApiInstuctionCredit.DonneesModale {
    /**
     * Données pour la popin de modification de l'éligibilité des instituts d'émission
     */
    interface IDataEditionEligibiliteEntree {
        idDossier: string;
        creditInterne: Modele.ICreditInterne;
    }
    interface IDataEditionEligibiliteSortie {
        creditInterne: Modele.ICreditInterne;
    }
}
