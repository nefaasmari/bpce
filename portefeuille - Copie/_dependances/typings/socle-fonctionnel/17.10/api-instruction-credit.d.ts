
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
         * Liste des mode de transport
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
         * Liste des statuts occupation logement d'un emprunteur
         */
        static listeSecteurActivite: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste des statuts occupation logement d'un emprunteur
         */
        static listeStatutOccupationLogementEmprunteur: Array<ApiInstuctionCredit.Modele.ISelectboxNumber>;
        /**
         * Liste des statuts occupation logement d'un emprunteur
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
    class Donnees {
        static date0: string;
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
         */
        static codeTypePhaseAmortissement: string;
        static codeTypePhasePrefinancement: string;
        static codeTypePhaseDiffereAmortissement: string;
        static codeTypePhaseMobilite: string;
        static codeTypePhaseDiffereTotal: string;
        static listeTypePhase: Array<ApiInstuctionCredit.Modele.ISelectbox>;
        /**
         * Périodicité de recouvrement d'une phase d'un crédit
         */
        static listePeriodicitePhase: Array<ApiInstuctionCredit.Modele.ISelectbox>;
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
        /**
         * Liste des périodicités
         */
        static listeNaturePret: Array<ApiInstuctionCredit.Modele.ISelectbox>;
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
    }
    interface IModeCalculCotisation {
        code: number;
        montant: boolean;
        plageMontant: boolean;
        taux: boolean;
        plageTaux: boolean;
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
        static listeTypeEligibilite: Array<Modele.ISelectboxNumber>;
        static statutConcerne: string;
        static statutNonConcerne: string;
        static listeTitreLiasseEdition: Array<Modele.ITitreExemplaire>;
    }
}

declare module ApiInstuctionCredit.Constantes {
    class Editique {
        /**
         * Paramètres suplémentaires pour documents particuliers lors de l'édition
         */
        static paramsEditiqueProposition: Array<Object>;
        static paramsEditiquePtz: Array<Object>;
        static paramsPieco: Array<Object>;
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
            static accessoireComplementaire: string;
            static accessoireLieProduit: string;
            static assurance: string;
            static garantiePersonnelle: string;
            static garantieReelle: string;
            static serviceSurObjet: string;
            static saisiesComplementaire: string;
        }
        /**
         * Idws de classe Alerte
         */
        class Alerte {
            static alerteEnEntree: string;
            static alerteEnSortie: string;
        }
        /**
         * Idws de classe Apl
         */
        class Apl {
            static apl: string;
        }
        /**
         * Idws de classe Avis
         */
        class Avis {
            static avis: string;
            static avisOrganismeExt: string;
        }
        /**
         * Idws de classe BienAVendre
         */
        class BienAVendre {
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
            static couvertureCredit: string;
        }
        /**
         * Idws de classe CreditExterne
         */
        class CreditExterne {
            static creditExterne: string;
        }
        /**
         * Idws de classe CreditInterne
         */
        class CreditInterne {
            static creditInterne: string;
            static droitUtilise: string;
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
            static charge: string;
            static creditExistant: string;
            static creditCZRT: string;
            static phaseCreditExistant: string;
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
        static ficheSuiveuse: string;
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
        static codeLoiConso: number;
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
        static codeApplication: string;
        static restParametre: string;
        static restConsultation: string;
        static restCalcul: string;
        static restEntiteTitulaire: string;
        static restRisqueClient: string;
        static restTiers: string;
        static restAgent: string;
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
        RedacteurActe,
        Emprunteur,
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
        Vert,
        Orange,
        Rouge,
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
    }
}

declare module ApiInstuctionCredit.Enum {
    enum ModePayeurRecouvrement {
        MonoPayeur = 0,
        MultiPayeur = 1,
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

declare module ApiInstuctionCredit.Enum {
    enum TypeDocument {
        Dossier,
        Offre,
        FicheSuiveuse,
    }
}

declare module ApiInstuctionCredit.Enum {
    /**
     *  Les Type de Domiciliation des type de règlements pour les modalités
     */
    enum TypeDomiciliation {
        Tresorerie,
        Nom,
        Rib,
        Iban,
    }
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

declare module ApiInstuctionCredit.Modele {
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
    interface IResultatListerDocuments {
        listeAno: IAnomalieLecture[];
        listeInformationDocument: IInfoDocument[];
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
    }
    interface IDocument {
        fluxImpression: string;
        nom: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEmolument {
        libelle: string;
        valeur: number;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IEndettement {
        montantRessources: number;
        montantRessourcesAvecAPL: number;
        montantCharges: number;
        montantChargesAvecAPL: number;
        tauxEndettement: number;
        tauxEndettementAvecAPL: number;
        mntResteAVivre: number;
        indiceResteAVivre: number;
        indiceResteAVivreAvecAPL: number;
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
        listeHabilitation: Array<string>;
        existeDossiersEnAlerte: boolean;
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
    interface IProposition {
        echeance: number;
        duree: number;
        montant: number;
        echeanceSouhaitee: number;
        dureeSouhaitee: number;
        endettementSouhaite: number;
        tauxSouhaite: number;
        coutTotalCredit: number;
        apport: number;
        compteCourant: boolean;
        prets: Array<ApiInstuctionCredit.Modele.Pret>;
        fraisDossier: number;
        fraisCourtage: number;
        garantie: Array<ApiInstuctionCredit.Modele.Garantie>;
        garantieCout: number;
        assurances: Array<ApiInstuctionCredit.Modele.IAssurance>;
    }
    class Proposition {
        echeance: number;
        duree: number;
        montant: number;
        echeanceSouhaitee: number;
        dureeSouhaitee: number;
        endettementSouhaite: number;
        tauxSouhaite: number;
        coutTotalCredit: number;
        apport: number;
        compteCourant: boolean;
        prets: Array<ApiInstuctionCredit.Modele.Pret>;
        fraisDossier: number;
        fraisCourtage: number;
        garantie: ApiInstuctionCredit.Modele.Garantie;
        garantieCout: number;
        assurances: Array<ApiInstuctionCredit.Modele.IAssurance>;
        constructor();
        constructor(donnees: Proposition);
    }
}

declare module ApiInstuctionCredit.Modele {
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
        complement?: InfoRegroupement;
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
        complement: InfoRegroupement;
        duree: number;
        constructor();
    }
    class PretReamenagementMaj {
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
    class InfoRegroupement {
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
        constructor(infoRegroupement?: Modele.InfoRegroupement);
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
        informationRegroupement: Modele.InfoRegroupement;
        origine: string;
        constructor();
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

declare module ApiInstuctionCredit.Service {
    class AnomalieService {
        private mwNotificationService;
        static $inject: string[];
        constructor(mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Formate les anomalies pour les rendre utilisbales côté métier
         * @param listeControlesLecture
         */
        formateAnomalies(listeControlesLecture: Array<Modele.IAnomalieLecture>): Array<Modele.AnomalieDossier>;
        /**
         * Filtre une liste d'anomalies en fonction des types de contrôles
         */
        getAnomaliesByTypes(listeControles: Array<Modele.AnomalieDossier>, listeTypeControles: Array<Enum.TypeControleDossier>): Array<Modele.AnomalieDossier>;
        /**
         * Affiche les anomalies en notification
         * @param anomalies
         */
        afficheNotificationAnomalie(anomalies: Modele.IAnomalieLecture[]): void;
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
    }
}

declare module ApiInstuctionCredit.Service {
    class AssuranceService {
        private $q;
        private wsCatalogueFinancementService;
        static $inject: string[];
        private _listeConventionAssurance;
        constructor($q: ng.IQService, wsCatalogueFinancementService: ApiInstuctionCredit.Service.Data.CatalogueFinancementService);
        /**
         * Permet de récupérer le détail de plusieurs conventions d'assurance
         * Les données chargées sont stockées dans la session
         * @return ng.IPromise<IParametreApplicatif[]>
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
    }
}

declare module ApiInstuctionCredit.Service {
    /**
     * Classe de gestion de la casse
     */
    class CasseService {
        constructor();
        getHelloWorld(): string;
        /**
         * Met en majuscule
         * @param input Chaîne à mettre en majuscule
         */
        toMajuscule(input: string): string;
        /**
         * Met en minuscule
         * @param input Chaîne à mettre en minuscule
         */
        toMminuscule(input: string): string;
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
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class AgentService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class AssuranceService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer les conventions d'assurances compatibles avec le produit
         * @param idDossier : string
         * @param listeIdentifiantProduit : string[]
         * @param ageMax : string
         * @return promise<IConventionAssurance>
         */
        listerScConvAss(idDossier: string, listeIdentifiantProduit: string[], ageMax: number, tsListeIdwsPersonne: string[]): ng.IPromise<Modele.IConventionAssurance[]>;
        /**
         * Permet d'ajouter une assurance
         * @param identifiantDossier : string
         * @param listeIdwsCreditCouvertureParAss : string[]
         * @param identifiantPersonne : string
         * @param identifiantConventionAssurance : string
         */
        ajouterAssAvcControl(identifiantDossier: string, listeIdwsCreditCouvertureParAss: string[], identifiantPersonne: string, identifiantConventionAssurance: string): ng.IPromise<Modele.IResultatAjouterAssuranceAvecControles>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class CalculService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de calculer le Reste à vivre, le taux d'endettement et l'échéance maxi
         */
        getCapaciteRemboursement(dateTraitement: string, listeRessourceCharge: Array<Modele.IEntreeRessourceCharge>, echeance: number, endettement: number): ng.IPromise<Modele.ICapaciteRemboursement>;
        /**
         * Permet de calculer les frais de notaire
         */
        getFraisNotaires(dateTraitement: string, montant: number, toc: string, tor: string, devise: string): ng.IPromise<number>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class ClientService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupéartion du détail de l'emprunteur
         * @param identifiantDossier : string
         * @return promise<Emprunteur>
         */
        getEmprunteur(identifiantDossier: string): ng.IPromise<Modele.IEmprunteur>;
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
         * Permet de rechercher une personne
         * @param codeEtablissement : string
         * @param identifiantPersonne : string
         */
        getPersonneTiers(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<Modele.IParticulierInformation>;
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
         * Permet de récupérer les informations de l'entite titulaire
         * @param idPersonne : string
         * @param typeCompositionRelation : string
         * @return promise<any>
         */
        getTiersClient(codeEtablissement: string, idPersonne: string, typeCompositionRelation: string): ng.IPromise<Modele.ITiersObjetPrincipal>;
        /**
         * Permet de récupérer les informations d'une personne via un identifiant
         * @param idDossier : string
         * @param identifiantPersonne : string
         * @param numeroCarteBancaire : string
         * @param numeroInsee : string
         * @param typeRolePersonne : string
         * @param codeTypePersonne : string
         * @param idEntiteTitulaireClient : string
         * @param codeTypeMarche : string
         * @return promise<any>
         */
        lirePersonne(codeEtablissement: string, idDossier: string, identifiantPersonne: string, numeroCarteBancaire: string, numeroInsee: string, typeRolePersonne: string, codeTypePersonne: string, idEntiteTitulaireClient: string, codeTypeMarche: string): ng.IPromise<Modele.IResultatGarant>;
        /**
         * Défintion de l'emprunteur
         * @param idDossier
         * @param idClientBancaire
         * @param rattachement
         */
        definirEmprunteurAvecControles(idDossier: string, idClientBancaire: string, rattachement: boolean): ng.IPromise<Modele.IEmprunteur>;
        /**
         * Ajoute une personne avec son rôle et les contrôles en retour
         */
        ajouterPersAvecCtrl(idDossier: string, identifiantClasse: string, listePersonnes: Array<Modele.PersonneMaj>): ng.IPromise<Array<Modele.IPersonne>>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class CnpService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        lireDecisionCNP(idDossier: string, idPersonne: string, idPlan: string, codeCnp: string): ng.IPromise<Modele.IResultatDecisionCNP>;
        recupererContexteCNP(identifiantDossierCNP: string, identifiantPersonne: string, identifiantPlanFinancement: string, codeCollectiviteCNP: string, forcerAction: boolean): ng.IPromise<Modele.IResultatCreationDossierCNP>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class ContratEpargneLogementService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
    class DossierService {
        private $http;
        private serviceAgentExtended;
        private anomalieService;
        static $inject: Array<string>;
        constructor($http: ng.IHttpService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        /**
         * Création d'un projet
         */
        creerProjet(dateTraitement: string, toc: string, tor: string, canalDeCreation: string, codeDevise: string, idClientBancaire?: string): ng.IPromise<Modele.IDossierSchema>;
        /**
         * Permet de récupérer le contenu du dossier sélectionné
         * @param identifiantDossier : string
         * @return promise<DossierOuvert>
         */
        getDossierComplet(identifiantDossier: string): ng.IPromise<Modele.IDossierComplet>;
        /**
         * Permet de récupérer le schema complet d'un dossier
         * @param identifiantDossier : string
         * @return promise<IDossierSchema>
         */
        getDossierSchema(identifiantDossier: string): ng.IPromise<Modele.IDossierSchema>;
        /**
         * Permet de mettre à jour un élément
         */
        majElement(identifiantClasse: string, identifiantDossier: string, element: Object): ng.IPromise<boolean>;
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
        calculerEndettement(idDossier: string, surProposition: boolean, proposition?: string): ng.IPromise<Modele.IEndettement>;
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
         * Permet de contrôler le dossier pour accéder à l'étape décision
         */
        controlerDecision(idDossier: string, dateAccordPreteur: string, forcerControleAvtAccessoirePret: boolean, forcerControleBale2: boolean, forcerControleReglementaire: boolean): ng.IPromise<Modele.IRetourControleDecision>;
        /**
         * Permet de passer un import à sans suite
         * @param identifiantDossier : string
         * @param codeEvenement : string
         * @param
         * @return promise<Object>
         */
        passerDossierSsSuite(identifiantDossier: string, codeEvenement: string, dateTraitement: string): ng.IPromise<Object>;
        listerDossier(versWsdl: string, dateDeTraitement: string, codeApplication: string, criteresDeRecherche: any, nombreMaximumResultat: number): ng.IPromise<Modele.IDossierResume[]>;
        /**
         * Permet de récupérer le contenu du dossier sélectionné
         * @param identifiantDossier : string
         * @return promise<DossierOuvert>
         */
        ouvrirDossier(versWsdl: string, identifiantDossier: string, date: number, codeApplication: string, actionSurDossier: string): ng.IPromise<Modele.IDossierResume>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class FinancementService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class FraisAccessoiresService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        miseAJourAccessoireLieProd(idDossier: string, idCredit: string, accessoire: Modele.AccessoireLieMaj, montant: number, taux: number, nbPaiment: number, listeIdsPhase: Array<string>): ng.IPromise<any>;
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
        miseAJourAccessComp(idDossier: string, idCredit: string, accessoire: Modele.AccessoireLieMaj, montant: number, taux: number, nbPaiment: number, listeIdsPhase: Array<string>): ng.IPromise<any>;
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
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
         */
        ajouterGarAvecCtrl(idDossier: string, listeIdentifiantCreditCouverture: string[], natureGarantie: string, idGarant: string): ng.IPromise<Modele.IResultatAjouterGarantieAvecControles>;
        /**
         * Permet d'ajouter une garantie conventionnée
         * @param idDossier : string
         * @param listeIdwsCreditCouvertureParGarantie : string[]
         * @param identifiantConventionGarantie : string
         */
        ajouterGarPersConvCt(idDossier: string, listeIdwsCreditCouvertureParGarantie: string[], identifiantConventionGarantie: string): ng.IPromise<Modele.IResultatAjouterGarantieAvecControles>;
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
        calculerFraisHypotheque(identifiantDossier: string, idwsGarantieReelle: string): ng.IPromise<number>;
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
    class ManipulationOffreService {
        private serviceAgentExtended;
        private anomalieService;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
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
         * Ajout d'un payeur
         * @param idDossier
         * @param idPayeur
         * @param bicIban
         */
        ajouterMandatPayeur(idDossier: string, idPayeur: string, bicIban: string): ng.IPromise<Modele.IMandat>;
        /**
         *
         * @param idDossier
         * @param bicIban
         */
        ajouterMandatSecours(idDossier: string, bicIban: string): ng.IPromise<Modele.IMandat>;
        /**
         * Suppression du mandat
         * @param idDossier
         * @param idPayeur
         */
        annulerMandatPayeur(idDossier: string, idPayeur: string): ng.IPromise<void>;
        /**
         * Suppression du mandat de secours
         * @param idDossier
         */
        annulerMandatSecours(idDossier: string): ng.IPromise<void>;
        /**
         * L’état du dossier passe à l’état « Offre éditée en attente de remise emprunteur»
         * @param idDossier
         */
        passerEnOffreEditee(idDossier: string): ng.IPromise<void>;
        /**
         *
         * @param idDossier
         */
        lireOffrePretIndustrialisee(idDossier: string): ng.IPromise<Modele.IOffrePretIndustrialisee>;
        creerDossierEdition(idDossier: string, listeIdwsDocOffreIndus: Array<string>): ng.IPromise<Modele.IResultatOffrePretIndustrialisee>;
        ajouterDocumentsDansDossierEdition(idDossier: string, listeIdwsDocOffreIndus: Array<Modele.IDocumentOffreIndustrialiseeMaj>): ng.IPromise<Modele.IResultatOffrePretIndustrialisee>;
        annulerDossierEdition(idDossier: string): ng.IPromise<Modele.IResultatOffrePretIndustrialisee>;
        /**
         * Remettre l’offre permet la validation de la remise de l’offre.
         * Si les différents contrôles aboutissent alors le dossier passe à l’état « Offre en attente de signature ».
         * @param idDossier
         * @param dateRemise
         */
        remettreOffre(idDossier: string, dateRemise: string): ng.IPromise<Array<Modele.AnomalieDossier>>;
        signerOffre(idDossier: string, offreAcceptee: boolean, dateSignature: string, numeroOffre: string, listeIdPersonne: Array<string>): ng.IPromise<Modele.IRetourSignerOffre>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class MontageService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        ajouterAvis(idDossier: string, avisMaj: Modele.AvisMaj): ng.IPromise<Modele.IAvis>;
        /**
         * Refus d'un accessoire
         * @param idDossier
         * @param idAccessoire
         * @param dateRefus
         */
        refuserAccessoire(idDossier: string, idAccessoire: string, dateRefus: string): ng.IPromise<void>;
        /**
         * Accord d'un accessoire
         * @param idDossier
         * @param idAccessoire
         * @param dateAccord
         */
        accorderAccessoire(idDossier: string, idAccessoire: string, dateAccord: string): ng.IPromise<void>;
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
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class PiecoService {
        private serviceAgentExtended;
        private anomalieService;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, anomalieService: ApiInstuctionCredit.Service.AnomalieService);
        /**
         * Liste tous les documents disponibles pour un dossier
         * typeListe:
         *      0 dossier
         *      1 Offre
         *      3 Fiche suiveuse
         */
        listerDocuments(idDossier: string, typeListe: ApiInstuctionCredit.Enum.TypeDocument, idProposition: string): ng.IPromise<Modele.IResultatListerDocuments>;
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
        editionDocuments(identifiantDossier: string, identifiantDocument: string, identifiantWs: string, paramsEditiques: Array<Object>, niveauTraitement: number): ng.IPromise<Modele.IDocument[]>;
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
         * Le dossier doit être contrôlé avant d’être édité  via l’éditique industrialisée (ou à l’impression si l’utilisateur est habilité).
         * @param idDossier
         */
        controlerEditionOffre(idDossier: string): ng.IPromise<Array<Modele.AnomalieDossier>>;
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
    }
}

declare module ApiInstuctionCredit.Service.Data {
    class ProjetService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        listerPretsReamenagebles(idDossier: string, idReamenagement: string): ng.IPromise<Array<Modele.IPretReamenagement>>;
        /**
         * Permet de récupérer le détail des crédits réaménagés
         */
        detailsPretsRea(idDossier: string, date: Date, idReamenagement: string, listePrets: Array<string>): ng.IPromise<Array<Modele.IDetailPret>>;
        /**
         * Permet d'ajouter un pret de réaménagement (Rachat / Regroupement de crédit)
         */
        ajouterPretReamenagement(idDossier: string, idReamenagement: string, codeBanque: string, idCreditGestion: string, pretAmenagement: Modele.PretReamenagementMaj, infosRegroupement: Modele.InfoRegroupementMaj): ng.IPromise<Modele.IPretReamenagement>;
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
    }
}

declare module ApiInstuctionCredit.Modele {
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
    interface IChargePersonne {
        typeDech?: string;
        montantCharge?: number;
        tauxPondereCharge?: number;
        nombrePeriodeParAn?: number;
        codeDevise?: string;
        numeroContratEpargne?: string;
        codeExisteRessourceApreOper?: number;
        idPersonne?: string;
        idGrpeIntervenant?: string;
        idws?: string;
        statut?: string;
    }
    class ChargePersonne implements IChargePersonne {
        typeDech: string;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
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
}

declare module ApiInstuctionCredit.Modele {
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
        constructor();
        constructor(compte: IComptePersonne);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ICreditExistant extends IChargePersonne {
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
        idws?: string;
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
        constructor(codeDevise: string, pTypeDeCharge: string);
    }
    class CreditExistantMaj implements ICreditExistant {
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
        constructor();
        constructor(creditExistant: ICreditExistant);
    }
}

declare module ApiInstuctionCredit.Modele {
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
    interface IInterditBancaire {
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
        idPersonnePhys: string;
        idws: string;
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
    interface IOpposition {
        codeOpposition: string;
        libelleOpposition?: string;
        dateDebutOpposition: string;
        dateFinOpposition: string;
        idPersonnePhys: string;
        idws: string;
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
    interface IActivitePersonne {
        codeClasseRisqueCSP: number;
        dateEffetCSP: string;
        dateEmbc: string;
        codeTypeContratEmbc: number;
        raisonSocialeEmplr: string;
        codePosteEmplr: string;
        codeApNEmplr: string;
        codeSalrDomiciliationCE: number;
        codePresActiviteSalr: number;
        codePresSuivantPersonne: number;
        nombreKilmEntreLogementTrvl: number;
        dateFinCdd: string;
        codeSecteurActivite: number;
        idPersonnePhys: string;
        idws: string;
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
    interface IPhaseCreditExistant {
        codeTypePhase: string;
        dateDebutPhase: string;
        dateFinPhase?: string;
        dureePhase?: number;
        montantEcheancePhase: number;
        periodeAmortissement: number;
        idCreditExistant?: string;
        idws?: string;
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
    interface ICoutObjet {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idTravauxFinancier: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDossierComplet {
        idDossier: string;
        versionDossier: number;
        codeImprParExpressionVersement: number;
        codeApplicationChargeDossier: number;
        nombrePassOffre: number;
        dateDernierReslAdresse: string;
        dateHorizonProjet: string;
        codeVisbInstruction: number;
        dossierExisteCentral: boolean;
        nombrePersonneAssuranceParDeft: number;
        modificationEffcPendantSess: boolean;
        modeOuvertureDossier: number;
        dossierModification: boolean;
        techniqueVent: number;
        codeLivrnImme: boolean;
        numeroAccrCmps: number;
        engagementRevc: number;
        dateSignePret: string;
        evenMomnVertPourContratConf: string;
        dateTraitement: string;
        dateTraitementRegle: string;
        modRegleVersement: string;
        indicePrrgOffre: number;
        idConventionPres: string;
        idPres: string;
        ensgnPres: string;
        montantSouhInitialEmprunt: number;
        origineCommissionProjet: number;
        codeEtatPlns: number;
        codeApplicationAnlsRisque: boolean;
        idDossierGestion: string;
        idElementStructureGestion: string;
        idElementStructureInstruction: string;
        codeAgentDecd: string;
        codeTypologieCadreFiscal: string;
        codeDevise: string;
        codeLevrSecrBancaire: number;
        dateCreationDossier: string;
        dateDernierMAJ: string;
        etatDossier: number;
        sousEtatDossier: number;
        dateDemandeFinancier: string;
        dateemssOffre: string;
        dateCiblProjet: string;
        codeOrigineDemande: string;
        dateAccrPrtr: string;
        codeEtatEngagementHors: number;
        montantEngagementHorsBiln: number;
        dateFinValiditeOffre: string;
        dateRecuperationOffreParClient: string;
        dateEffetOffre: string;
        modeRegle: string;
        numeroCompteSecoPrel: string;
        domiciliationTresCompteSeco: string;
        dateLimiteRetardEmpruntLoiConsommation: string;
        dateLimiteRetardOffreLoiConsommation: string;
        dateMinimumAccpOffreLoiImmobilier: string;
        dateSigneEmprunt: string;
        dateRefuOffreParEmprunt: string;
        dateMinnPourVersementFondLoiConsommation: string;
        dateEditionOffre: string;
        idExterneDossier: string;
        typeLoiScrivener: number;
        codeAuthentiqueContrat: boolean;
        delRetardScrivener1: number;
        codeVersementCreation: string;
        codeVersementDernierModification: string;
        montantVersementCnvn: number;
        pourcentageFinancier: number;
        numeroEchelleVersement: number;
        torechlVersement: string;
        codeEtatEnvoiDossierSaccef: number;
        dateLieEnvoiSaccef: string;
        idEnvoiSaccef: string;
        idOrigineDemande: string;
        libelleOrigineDemande: string;
        datePrevSigneNotaire: string;
        referenceExterneDossier: string;
        elementStructure5: string;
        elementStructure6: string;
        modeDecn: boolean;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        codeTypeEngagement: string;
        dateSigneDossierEnvoi: string;
        dateFinValiditeAccr: string;
        indiceOffrePre: boolean;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeEtatPresenceChargeDossier: number;
        codeEtatActiviteDossier: number;
        indicePresenceChargePieceJustificatifParPiece: number;
        idAgentBoActuarielChargeDossier: string;
        idAgentProprietaireDossier: string;
        idAgentInstructionDossier: string;
        idAgentConnaissanceDossier: string;
        idAgentPourDecisionConf: string;
        idEntiteDecision: string;
        idEntitePourTransfertBo: string;
        BblocNotes: string;
        codeEtapeSimulation: number;
        numeroFichPres: string;
        codePrscDossierPres: number;
        dateSigneMand: string;
        precisionTaux: number;
        codeDevCreditDev: string;
        numeroCompteDev: string;
        modeRegleDev: string;
        modRegleVersementDev: string;
        idComplementDossier: string;
        integrationDossierDeVente: number;
        canalDeCreation: string;
        canalDeDistribution: string;
        idBlocNoteNotsDivr: string;
        idReductionActe: string;
        idEmprunt: string;
        listeIdEven: Array<string>;
        listeIdAvis: Array<string>;
        listeIdAlerteEntr: Array<string>;
        listeIdAlerteSort: Array<string>;
        listeIdProjet: Array<string>;
        listeIdVersement: Array<string>;
        listeIdPersonne: Array<string>;
        listeIdGarants: string[];
        listeIdClassePersonne: Array<string>;
        idPoolEPS: string;
        listeIdPlanFinancier: Array<string>;
        autoriserCalculIndicateurEditionAgence: boolean;
        codeTypeEditionAutorisee: string;
        referenceMandat: string;
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
        constructor(dossier?: IDossierComplet);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IDossierResume {
        objetLibelle?: string;
        etatLibelle?: string;
        coutDevise?: string;
        versementDossier?: string;
        dateCreationDossier?: Date;
        libelleEntiteProprietaireDossier?: string;
        libelleAgenceAffectation?: string;
        codeTitreCivilite?: string;
        dateDernierMAJ?: Date;
        codeEtatOuvrDossier?: string;
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
    interface IEmprunteurSchema {
        idwsPersonnes: Array<string>;
        ressources: Array<IRessourceSchema>;
        charges: Array<IChargeSchema>;
        revenusFiscaux: Array<IRevenuFiscalSchema>;
        patrimoinesImmobilier: Array<IPatrimoineImmobilierSchema>;
        idws: string;
        description: string;
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
    }
    interface IGarantieSchema extends IAccessoireSchema {
        idPersonne: string;
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
    interface IPlanFinancementSchema {
        montantTotalEmpruntPlan: number;
        montantApportPersonne: number;
        montantPreEchPhase: number;
        aPL: IAplSchema;
        creditsExternes: Array<ICreditExterneSchema>;
        paliersContraints: Array<IPalierContraintSchema>;
        accessoiresComplementaires: Array<IAccessoireComplementaireSchema>;
        accessoiresLiesProduit: Array<IAccessoireLieProduitSchema>;
        assurances: Array<IAssuranceSchema>;
        garanties: Array<IGarantieSchema>;
        servicesSurObjet: Array<IServiceSurObjetSchema>;
        creditsInternes: Array<ICreditInterneSchema>;
        idws: string;
        description: string;
        libelle?: string;
        dureeMax?: number;
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
    interface IBeneficiaireEpsSchema {
        idPersonneSI: string;
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
    interface IDossierSchema {
        etatDossier: number;
        sousEtatDossier: number;
        codeDevise: string;
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
        beneficiaireEPS: IBeneficiaireEpsSchema;
        idws: string;
        description: string;
        agents: Array<IAgentSchema>;
    }
    interface IGarantSchema {
        idwsPersonnes: string[];
        ressources: IRessourceSchema[];
        charges: IChargeSchema[];
        idws: string;
        description: string;
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
    interface IContratEpargneLogement {
        codeTypeEL: number;
        codeDeviseCompte: string;
        typeDroit?: number;
        lienParentAvecCedn: number;
        idContratEpargneLogement?: string;
        libelleTitulaireContrat: string;
        codeIndiceBenePrimeEpargneLogement?: number;
        dateOuvertureContrat?: string;
        dateClotureContrat?: string;
        codeForc?: number;
        codeRaptContratEpargneLogement?: number;
        etabOrigineInterieur?: string;
        idPersonneApportDroitContrat: string;
        codeDroitJustificatif?: number;
        codeResrDroitAcqs?: number;
        listeIdTrancheEpargneLogement?: string[];
        idPersonneBeneficiaire?: string;
        idws?: string;
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
        libelleMontantDroitUtilises: string;
        constructor(iTrancheEL: ITrancheEL, libelleResrDroitAcqs: string);
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
        corbeilleWorkflowSuiveuse: Array<string>;
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
}

declare module ApiInstuctionCredit.Modele {
    interface IChampTextBox {
        text: string;
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
    interface IFC003DC {
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
        reservesRedacteur: IChampTextBox;
    }
    interface IFC007ARO {
        contenuConditionsSuspensives: IChampTextBox;
    }
    interface IFC010CP {
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
    interface IFC010LCD {
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
        ribPretDevise: IChampTextBox;
        identifiantProduitPretDevise: IChampTextBox;
        numeroCreditPlanPretDevise: IChampTextBox;
        typePretDevise: IChampTextBox;
        idggiPretDevise: IChampTextBox;
        cdngPretDevise: IChampTextBox;
        fraisEnDevises: IChampTextBox;
        devisePretDevise: IChampTextBox;
        fraisContrePartiePretDevise: IChampTextBox;
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
        identifiantProduitPretDevise: IChampTextBox;
        numeroCreditPlanPretDevise: IChampTextBox;
        typePretDevise: IChampTextBox;
        idggiPretDevise: IChampTextBox;
        cdngPretDevise: IChampTextBox;
        fraisEnDevises: IChampTextBox;
        devisePretDevise: IChampTextBox;
        fraisContrePartiePretDevise: IChampTextBox;
        raisonCaution: IChampTextBox;
        representantCaution: IChampTextBox;
        enQualiteCaution: IChampTextBox;
        datePouvoirCaution: IChampTextBoxDate;
    }
    interface IFC010LI {
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
        sousignePouvoirNotaire: IChampTextBox;
        datePouvoirNotaire: IChampTextBoxDate;
        nom1PouvoirNotaire: IChampTextBox;
        nom2PouvoirNotaire: IChampTextBox;
        nom3PouvoirNotaire: IChampTextBox;
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IFC050ACA {
        nomPersonneMoraleACA: IChampTextBox;
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
    interface IChampListBox {
        listeValue: Array<string>;
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
        corbeilleWorkflowSuiveuse: IChampListBox;
        commentaireSuiveuse: IChampTextBox;
    }
    interface IFC050FSI {
        numeroOrias: string;
    }
    interface IDonneesCautionPersonneMoraleLecture {
        represCautionPersoMorale: IChampTextBox;
        agissantVertuCaution: IChampTextBox;
        agissant3Caution: IChampTextBox;
        agissant4Caution: IChampTextBox;
        agissant5Caution: IChampTextBox;
        agissantQualiteCaution: IChampTextBox;
    }
    interface IFC104LEC {
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        listeDonneesCautionPersonneMorale: Array<IDonneesCautionPersonneMoraleLecture>;
    }
    interface IFCM03DC {
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
        reservesRedacteur: IChampTextBox;
    }
    interface IFCM10HS {
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
        nomCopropriete: IChampTextBox;
        adresse1Copropriete: IChampTextBox;
        adresse2Copropriete: IChampTextBox;
        adresse3Copropriete: IChampTextBox;
        typePersonneCopropriete: IChampTextBox;
        mandataireCopropriete: IChampTextBox;
        effetCopropriete: IChampTextBox;
    }
    interface IFCM17CGV {
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
        dateDebutLigneInvestissement: IChampTextBoxDate;
        dateFinLigneInvestissement: IChampTextBoxDate;
        aTauxFixeLigneInvestissement: IChampRadioButton;
        tauxFixeLigneInvestissement: IChampTextBox;
        tauxRevisableLigneInvestissement: IChampTextBox;
        referenceIndiceLigneInvestissement: IChampTextBox;
    }
    interface IFCM28PNO {
        sousignePouvoirNotaire: IChampTextBox;
        datePouvoirNotaire: IChampTextBoxDate;
        nom1PouvoirNotaire: IChampTextBox;
        nom2PouvoirNotaire: IChampTextBox;
        nom3PouvoirNotaire: IChampTextBox;
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IFCM99LEI {
        presenceEmprunteurIndividuel: IChampRadioButton;
        libelleEmprunteurIndividuel: IChampTextBox;
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        libelleConjointEmprunteurIndividuel: IChampTextBox;
    }
    interface IFCX28PNO {
        sousignePouvoirNotaire: IChampTextBox;
        datePouvoirNotaire: IChampTextBoxDate;
        nom1PouvoirNotaire: IChampTextBox;
        nom2PouvoirNotaire: IChampTextBox;
        nom3PouvoirNotaire: IChampTextBox;
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IFZ001SI {
        accordPrincipe: IChampCheckBox;
        rdv: IChampCheckBox;
        deroulement: IChampCheckBox;
    }
    interface INOTICES {
        ajoutNotices: IChampCheckBox;
    }
    interface ISaisiesComplementaireLecture {
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
        private getLibelleAssure(personne);
        /**
         * Génération de libellé des infos de l'assurance
         * @param personne
         * @param compagnie
         * @param nbAssurance
         */
        private getLibelleAssurance(personne, compagnie, nbAssurance);
        /**
         * Récupération du libellé du type de rôle de la personne
         * @param typeRole
         */
        private getTypeRolePersonne(typeRole);
        /**
         * Génération du libellé du statut de la décision
         * En CNP : A créer, En attente, Accordé
         * Non CNP : En attente, Accordé
         * @param compagnie
         */
        private getStatutDecision(compagnie, listeAssurances);
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IAvis {
        idws: string;
        dateSaisieAvis: string;
        libelleAvis: string;
        idEntiteSaisieAvis: string;
        libelleEntiteSaisieAvis: string;
        codeTypologieAvis: string;
        numeroAvis: number;
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
        constructor(avis: IAvis);
    }
}

declare module ApiInstuctionCredit.Modele {
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
    interface IResultatCreationDossierCNP {
        idDossierCNP: string;
        libelleErreur: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
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
    interface IResultatDecisionCNP {
        assuranceCNP: string;
        libelleErreur: string;
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
}

declare module ApiInstuctionCredit.Modele {
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
        dateDecision: string;
        dernierAvisSaisi: IAvis;
        forcerControle: IForcerControleDecision;
        retourAccesEnet: boolean;
        informationTransfert: ISdInformationTransfert;
    }
}

declare module ApiInstuctionCredit.Modele {
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
}

declare module ApiInstuctionCredit.Modele {
    interface IDocumentOffreIndustrialiseeDescription extends IElement, IElementChecked {
        libelleDocument: string;
        codeDocument: string;
        dateModification: string;
        urlPDF: string;
        estDocNEO: boolean;
        numeroOrdre: number;
        estAbsent: boolean;
        checkable: boolean;
        concerne: boolean;
        statutConcerne: string;
        estConcerneCasEcheant: boolean;
        genere: boolean;
        ajouteLiasse: boolean;
    }
    class DocumentOffreIndustrialiseeDescription implements IDocumentOffreIndustrialiseeDescription {
        private etatDossierEdition;
        private documentOffreIndustrialisee;
        private _checked;
        private _checkable;
        statutConcerne: string;
        genere: boolean;
        ajouteLiasse: boolean;
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
    }
}

declare module ApiInstuctionCredit.Modele {
    interface ISdInformationTransfert {
        typeTraitementTransfertDossier: number;
        typeTransfertDossier: number;
        sIdAgentTranf: string;
        premierElementStructure: string;
        deuxiemeElementStructure: string;
        troisiemeElementStructure: string;
        quatriemeElementStructure: string;
        cinquiemeElementStructure: string;
        sixiemeElementStructure: string;
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
        erreurDate(dateMinAcceptation: string): boolean;
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
        erreurDate(dateMinAcceptation: string): boolean;
        private getDateSignatureInitiale();
        private getReponseInitiale();
    }
}

declare module ApiInstuctionCredit.Modele {
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
    }
    interface IDocumentOffreIndustrialiseeMaj extends IElementMaj {
        fluxDocument: string;
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
    interface IResultatOffrePretIndustrialisee {
        code: string;
        libelle: string;
        valeur: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IRetourSignerOffre {
        anomaliesPassageEnGestionLecture: Array<IAnomalieLecture>;
        anomalies: Array<IAnomalieLecture>;
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

declare module ApiInstuctionCredit.Modele {
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
        dateAccpAccessoire: string;
        dateCloture: string;
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
        dateAccpAccessoire: string;
        dateCloture: string;
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
        numeroRelationVersementAttn?: number;
        typeVersement?: string;
        montantVersement?: number;
        dateDebut?: string;
        dateFin?: string;
        periodeVersement?: number;
        idContratAssuranceGarantie?: string;
    }
    interface IVersementAttenduMaj {
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
    class ChampAssociation {
        typeObjetToc: string;
        typeObjetTor: string;
        cas: ApiInstuctionCredit.Modele.ChampMontant;
        eligibilite: boolean;
        casInfosCompl: ApiInstuctionCredit.Modele.ChampInformationsComplementaires;
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
    class CotisationtMaj implements ICotisation {
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
    interface ICreditParamRevision {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        codeIndicecheReclame: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
        idCreditIntr: string;
        listeIdParametreIndex: Array<string>;
        idws: string;
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
    interface IResultatCalculCreditInterne {
        creditInterneLecture: ICreditInterne;
        listeAnomalieLecture: IAnomalieLecture[];
    }
    interface IDataModification {
        modeCreation: boolean;
        creditInterne?: ICreditInterne;
        totalMontantTravauxEcoPtz: number;
        produitFinancier?: IProduitFinancier;
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
        erreursPtz: string[];
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
    interface IGammeLissage {
        idGammeLissage: string;
        libelleGammeLissage: string;
        nombrePhaseAmortissementMinimum: number;
        nombrePhaseAmortissementMaximum: number;
        idPremierProduitGamme: string;
    }
}

declare module ApiInstuctionCredit.Modele {
    interface IGarantie extends IAccessoire {
        natureGarantie?: string;
        commentaire: string;
        dateLimiteRetardCaution?: string;
        codeFormeActeAuthentique: number;
        codeClasseGarantie?: number;
        typeSurtaxe?: number;
        accessoireSaccef: boolean;
        accessoireENET: boolean;
        idPersonne?: string;
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
    class GarantieReelleAccessoireMaj {
        idws: string;
        dateAccpAccessoire: string;
        codeEtatAccessoire: number;
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
}

declare module ApiInstuctionCredit.Modele {
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
    interface ICreditPhase {
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
        tauxPhase: Modele.TauxInteretAnnuel;
        tauxPhaseHorsBonificationMajre: Modele.TauxInteretAnnuel;
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
        idCreditIntr: string;
        idParametreRevisionParPhase: string;
        listeIdPalierTaux: string[];
        phaseProduit: Modele.IProduitPhase;
        montantPremiereEcheance: number;
        idws: string;
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
    interface ICreditPhaseAmortissement extends ICreditPhase {
        codeRecouvrementAmortissementTermeEchu: number;
        quotientAmortissement: number;
        modeCalculAmortissement: number;
        codePrelFinPhase: number;
        tauxConstructionPhaseCredit: number;
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
    interface IPlanFinancementDetail {
        libelleRetardAdresse: string;
        montantTotalEmpruntPlan: number;
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
        montantRestantFinancier: number;
        numeroDossierSmac: string;
        typeCritereOptim: number;
        valeurCritereOptim: number;
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
        idws: string;
        idSynthesePlanFinancement: string;
        description?: string;
        fraisCourtage?: number;
        accordDePrincipe: number;
        listeResultatControle: Array<Modele.IResultatControle>;
    }
    class PlanFinancement implements IPlanFinancementDetail {
        libelleRetardAdresse: string;
        montantTotalEmpruntPlan: number;
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
        montantRestantFinancier: number;
        numeroDossierSmac: string;
        typeCritereOptim: number;
        valeurCritereOptim: number;
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
        idws: string;
        idSynthesePlanFinancement: string;
        accordDePrincipe: number;
        listeResultatControle: Array<Modele.IResultatControle>;
        constructor();
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
    interface IResultatControle {
        libelle: string;
        messages: Array<string>;
    }
}

declare module ApiInstuctionCredit.Modele {
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
    }
    interface IContexteElectronique {
        estSignatureElectroniqueActivee: boolean;
        estSignatureElectroniqueEligible: Array<string>;
    }
    interface IContexteEditique {
        autorisationEditionOffre: boolean;
        autoriserEditionOffreAgence: boolean;
        estDossierPartenaire: boolean;
        contexteEditionIndustrialisee: IContexteIndustrialisation;
        contexteDossierNumerique: IContexteNumerisation;
        contexteSignatureElectronique: IContexteElectronique;
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
        crdBienSousJacent: number;
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
        crdBienSousJacent: number;
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
    interface IProjet {
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
        idws: string;
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

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueClientService {
        private $q;
        private serviceAgentExtended;
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
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        private serviceAgentExtended;
        static $inject: Array<string>;
        private _listeOfListeConstantes;
        private _listeParametresApplicatif;
        private _listeAdressesParametreRubrique;
        private _listeDevises;
        private _listeCodePays;
        private _listeTypeEds;
        private _listeTypeEdsDesicion;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupération de la liste des devises
         */
        getListeDevises(dateTraitement: string, rubriquesFiltre: string, valeursFiltre: string, rubriquesTri: string, valeurTri: string, deviseInstructible?: boolean): ng.IPromise<Array<Modele.IScDevise>>;
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
        chargerTypeEdsDecision(dateDeTraitement: string): ng.IPromise<Modele.IScTypeEds[]>;
        /**
         * Paramètrage établissement
         * @param date
         */
        listerParamEtablissement(date: string): ng.IPromise<Array<Modele.Parametrage.IParamEtablissement>>;
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueEpargneLogementService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        private _listeLiensParente;
        private _montantEncoursEL;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        private serviceAgentExtended;
        static $inject: Array<string>;
        private _listeProduitFinancier;
        private _listeTypeDeSinistre;
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
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueModalitesService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        private _listeTypeReglement;
        private _listesRemboursementAnticipe;
        private _listesModalitesImpayes;
        private _listeParamTypeDuree;
        private _listeDescriptionEchelle;
        private _listeEchelleVersement;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Modalités : récéupération de la liste des types de reglement
         * @param dateDeTraitement
         */
        getListeTypeReglement(dateDeTraitement: string): ng.IPromise<Array<Modele.ITypeReglement>>;
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
        getListeParamTypeDuree(dateDeTraitement: string): ng.IPromise<Array<Modele.IParamTypeDuree>>;
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
    }
}

declare module ApiInstuctionCredit.Service.Data {
    /**
     * Données catalogue, qui peuvent être chargées une seule fois puis garder dans la session
     */
    class CatalogueProjetService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        private _listeFormulaireProjetTypeLogement;
        private _listeTypeObjetReglemente;
        private _listeTypeObjetCommercial;
        private _listeCadreFiscal;
        private _listeTypeLogement;
        private _listeAdrNatureAvantageFiscal;
        private _listeTypologiesInstructionByType;
        private _localite;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
         * Récupréation du détail de la localité : utile pour la zone de robien
         * @param date : format YYYY-MM-DD
         * @param codeEtablissement
         * @param codePostal
         * @param ville
         */
        getLocalite(date: string, codeEtablissement: string, codePostal: string, ville: string): ng.IPromise<Modele.ILocalites>;
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
        constructor();
        libelleDate: string;
        private isDateAnUn(date);
    }
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
}

declare module ApiInstuctionCredit.Service {
    class EditerDocumentService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        private wsPiecoService;
        private wsManipulationOffreService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, wsPiecoService: Service.Data.PiecoService, wsManipulationOffreService: Service.Data.ManipulationOffreService);
        lancerEditerDocuments(listeInfoDocument: Array<Modele.IInfoDocument>, idDossier: string, idPlan: string, listeIdwsCredits: Array<string>, setLoader: (value: boolean) => void): ng.IPromise<void>;
        editerDocuments(listeInfoDocument: Array<Modele.IInfoDocument>, idDossier: string, idPlan: string, listeIdwsCredits: Array<string>): ng.IPromise<void>;
        /**
         * Edition d'un document
         * @param idDossier
         * @param infoDocument
         * @param identifiant
         * @param paramsEditiques
         */
        private editerDocument(idDossier, infoDocument, identifiant, paramsEditiques);
        /**
         * Enregistre les documents sur le PC
         */
        enregistrerDocumentsOnPc(listeInfoDocument: Array<Modele.IInfoDocument>, idDossier: string, idPlan: string, listeIdwsCredits: Array<string>, setLoader: (value: boolean) => void): ng.IPromise<void>;
        /**
         * Génére les flux d'édition
         * @param listeInfoDocument
         * @param idDossier
         * @param idPlan
         * @param listeIdwsCredits
         * @param setLoader
         */
        getFluxForDocumentsWithSaisiesComplementaires(listeInfoDocument: Array<Modele.IInfoDocument>, idDossier: string, idPlan: string, listeIdwsCredits: Array<string>, setLoader: (value: boolean) => void): ng.IPromise<Array<Modele.IDocument>>;
        /**
         * Indique si pour ce document une saisie complémentaire existe
         */
        private getSaisieComplementaireByDocument(idDossier, infoDocument);
        /**
         * Ouvre les popins et saisie des informations
         */
        private setSaisieComplementaires(idDossier, listeInfoDocumentAvecSaisies, listeSaisieComplementaire, indexTraite, listeInfoDocumentValides);
        /**
         *  affiche la modale avec les inputs dynamiques
         */
        private popinSaisieComplementaire(idDossier, documentOfSaisieComplementaire, saisieComplementaireForDocument);
        /**
         * Obtient les flux de documents pour une liste de type de documents
         * @param listeInfoDocument
         * @param idDossier
         * @param idPlan
         * @param listeIdwsCredits
         */
        private getFluxForDocuments(listeInfoDocument, idDossier, idPlan, listeIdwsCredits);
        /**
         * Obtient les flux des documents associés à un type de document
         * @param idDossier
         * @param infoDocument
         * @param identifiant
         * @param paramsEditiques
         */
        private getFluxByDocument(idDossier, infoDocument, identifiant, paramsEditiques);
    }
}

declare module ApiInstuctionCredit.Modele {
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
        idws: string;
        constructor();
        constructor(assurance: IAssurance);
    }
    interface IAssuranceAccessoireMaj {
        idws: string;
        codeEtatAccessoire: number;
        dateAccpAccessoire: string;
        dateCloture: string;
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

declare module ApiInstuctionCredit {
    class EditionAnomaliesControleur {
        static $inject: any[];
        listeAnomalies: Array<ApiInstuctionCredit.Modele.IAnomalieLecture>;
        listeErreursImpression: Array<string>;
        constructor();
        listeAnomaliesBloquantes: Array<ApiInstuctionCredit.Modele.IAnomalieLecture>;
        listeAnomaliesNonBloquantes: Array<ApiInstuctionCredit.Modele.IAnomalieLecture>;
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
        codeProprieteSaisieComplementaire: string;
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
    }
}

declare module ApiInstuctionCredit {
    class EditionTableauDocumentsControleur {
        static $inject: any[];
        nbElements: number;
        tableauDocuments: MyWay.UI.ImwTableOptions;
        listeDocs: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        listeDocsSelected: Array<ApiInstuctionCredit.Modele.IInfoDocument>;
        constructor();
        private initialisationTableau(nbElements);
    }
}

declare module ApiInstuctionCredit {
}
