
declare namespace ContentieuxParametrage.Constantes {
    namespace Inject {
        const tuileService: string;
    }
    namespace ContentieuxMetier {
        const typeDetteImpaye: string;
        const typeDetteDechu: string;
        const typeDetteDebiteur: string;
        const typeDetteSsTraitance: string;
        const typeDetteManuel: string;
        const typeDettePertes: string;
        const typeDetteExigible: string;
        const etiquetteRegularise: string;
        const etiquetteEcheancier: string;
        const etiquetteEcheancierCB: string;
        const etiquetteSousSurveillance: string;
        const etiquetteCrediteur: string;
        const etiquetteDebiteur: string;
        const texteDetteImpaye: string;
        const texteDetteDechu: string;
        const texteDetteDebiteur: string;
        const texteDetteSsTraitance: string;
        const texteDetteRegularise: string;
        const echeancierActif: string;
        const echeancierEnRetard: string;
        const echeancierEnNonRespect: string;
        const echeancierEnAttenteSignature: string;
        const echeancierCaduc: string;
        const echeancierSupprime: string;
        const echeancierTermine: string;
        const typeProduitServiceContratMySysPI00: string;
        const typeProduitServiceContratMySysE000: string;
        const typeProduitServiceContratMySystoExclude: string[];
        const etiquetteVerte: string;
        const etiquetteOrange: string;
        const conversionTypeDetteEnTexte: {
            "DEBITEUR": string;
            "DECHU": string;
            "MANUEL": string;
            "SOUS-TRAITANCE": string;
            "REGULARISE": string;
            "IMPAYE": string;
        };
        namespace ContentieuxSousTraitance {
            const CODE_ENVOYE_SOUS_TRAITANT: string;
        }
    }
}

declare namespace ContentieuxParametrage {
    var app: any;
}

declare namespace ContentieuxParametrage.Services {
    interface ITuileService {
    }
    class TuileService implements ITuileService {
        constructor();
        definitCouleurContrat(etiquette: string, etatEcheancier: string): string;
        estContratMySysAInclure(codeTypeProduitService: string): boolean;
        getTexteduTypeDette(typeDette: string): string;
    }
}

declare namespace ContentieuxParametrage.Constantes.Dossier {
    const codeNatureLienEntiteTitulairePE: string;
    const codeNatureLienEntiteTitulaireProLA: string;
    const etatDossierArchive: string;
    const texteDossierArchive: string;
    const finTexteDossierArchive: string;
    const titreDossierArchive: string;
    const codeEtatCreanceDouteux: string;
    const codeEtatCreanceEchu: string;
    const consultable: string;
    const consultableDesarchive: string;
    namespace Popup {
        namespace DossierNonAutorise {
            const titre: string;
            const bodyDebut: string;
            const bodyPortefeuille: string;
            const bodyGerepar: string;
        }
    }
}

declare namespace ContentieuxParametrage.Constantes.Echeancier {
    namespace Tableau {
        const ENTETE_TABLEAU_PAIEMENT_SIMULATION: string[];
        const ENTETE_TABLEAU_DEGRESSIVITE_SIMULATION: string[];
        const ENTETE_TABLEAU_PAIEMENT_VISUALISATION: string[];
        const ENTETE_TABLEAU_DEGRESSIVITE_VISUALISATION: string[];
        const ENTETE_TABLEAU_PAIEMENT_VISUALISATION_CREDIT_NON_DECHU: string[];
        const ENTETE_TABLEAU_PAIEMENT_VISUALISATION_CREDIT_NON_DECHU_GEL: string[];
        const ENTETE_TABLEAU_PAIEMENT_SIMULATION_CREDIT_NON_DECHU: string[];
        const ENTETE_TABLEAU_PAIEMENT_SIMULATION_CREDIT_NON_DECHU_GEL: string[];
    }
    namespace Courrier {
        const TYPE_COURRIER_PROCEDURES_COLLECTIVES: string[];
        const TYPE_COURRIER_SURENDETTEMENT: string[];
    }
}

declare namespace ContentieuxParametrage.Constantes.Processus {
    namespace Lisa {
        const syntheseVersDossierNumeriqueRecouvrement: number;
        const syntheseVersDossierNumeriqueCredit: number;
        const syntheseVersDossierNumeriqueCreditHorsPortail: number;
        const syntheseVersEffectuerPaiement: number;
        const syntheseVersGererEcheancierCreation: number;
        const syntheseVersGererEcheancierVisualisation: number;
        const syntheseVersGererEcheancierCB: number;
        const syntheseVersMettreEnJeuGarantiePGE: number;
        const syntheseVersMettreEnJeuGarantiePGEVisualisation: number;
        const syntheseVersGererDecomptes: number;
        const syntheseVersPGEConsulterDonnees: number;
        const syntheseVersPGESaisieProvisionnel: number;
        const syntheseVersCreditSynchro: number;
        const syntheseVersCreanceGererDetail: number;
        const syntheseVersCreanceDechoir: number;
        const syntheseVersCreancePreparerProvision: number;
        const syntheseVersVARIO: number;
    }
    namespace processusDebrancherVARIO {
        const code: string;
        const libelleEcheancier: string;
        const valeurDepart: string;
        const debranchementNSDKEcranPlanApurement: string;
        const debranchementNSDKEcranPlanReglement: string;
    }
    namespace processusEffectuerPaiement {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
    namespace processusGererDecomptes {
        const code: string;
        const libelle: string;
        const libelleAction: string;
        const valeurDepart: string;
    }
    namespace processusGererEcheancier {
        const code: string;
        const libelleCreation: string;
        const libelleVisualisation: string;
        const libelleGestion: string;
        const libelleVisualisationCB: string;
        const valeurDepartCreation: string;
        const valeurDepartAjout: string;
        const valeurDepartModification: string;
        const valeurDepartVisualisation: string;
        const valeurDepartVisualisationCB: string;
        const modeCreation: string;
        const modeModification: string;
        const modeVisualisation: string;
        const modeSimulation: string;
        const modeVisualisationCB: string;
    }
    namespace processusGererCreditSynchro {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
    namespace processusDossierNumeriqueCredit {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
    namespace processusPGE {
        const codeConsulterDonnees: string;
        const libelleConsulterDonnees: string;
        const valeurDepartConsulterDonnees: string;
        const codeSaisieProvisionnel: string;
        const libelleSaisieProvisionnel: string;
        const valeurDepartSaisieProvisionnel: string;
        const codeMejGarantie: string;
        const libelleMejGarantie: string;
        const libelleMejGarantieVisualisation: string;
        const valeurDepartMejGarantie: string;
        const valeurDepartMejGarantieVisualisation: string;
    }
    namespace processusCreance {
        const codeGererDetail: string;
        const libelleGererDetail: string;
        const valeurDepartGererDetail: string;
        const codeDechoir: string;
        const libelleDechoirDecheanceTerme: string;
        const libelleDechoirDecheanceRetour: string;
        const libelleDechoirDecheanceContrat: string;
        const libelleEDG: string;
        const valeurDepartDechoir: string;
        const codePreparerProvision: string;
        const libellePreparerProvision: string;
        const valeurDepartPreparerProvision: string;
    }
    namespace processusSuivreGarantiesCreance {
        const codeListerGaranties: string;
        const libelleListerGaranties: string;
        const valeurDepartListerGaranties: string;
        const codeGererGarantieCreance: string;
        const libelleGererGarantieCreance: string;
        const valeurDepartGererGarantieCreance: string;
    }
    namespace processusSuivreCorrespondance {
        const code: string;
        const libelle: string;
        const libelleAction: string;
        const valeurDepart: string;
    }
}
