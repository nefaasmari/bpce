
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
        const etiquetteRegularise: string;
        const etiquetteEcheancier: string;
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
