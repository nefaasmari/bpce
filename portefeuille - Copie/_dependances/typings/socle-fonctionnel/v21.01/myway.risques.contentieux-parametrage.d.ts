/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/third-party/angularjs/angular.d.ts" />
/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/third-party/angularjs/angular-route.d.ts" />
/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/third-party/bootstrap/bootstrap.d.ts" />
/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/third-party/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/third-party/lodash/lodash.d.ts" />
/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/third-party/moment/moment.d.ts" />
/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/ui/myway-ui.d.ts" />
/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/services/framework-client-app.d.ts" />
/// <reference path="//myway-atelier/DeclarationsTS/v1/third-party/jasmine/jasmine.d.ts" />
/// <reference path="//MyWay-Atelier/DeclarationsTS/v1/tests-unitaires/myway.mock-tu.d.ts" />

/// <reference path="commun/constantes/metier.d.ts" />
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
    const codeNatureLienEntiteTitulairePE = "PE";
    const codeNatureLienEntiteTitulaireProLA = "LA";
    const etatDossierArchive = "A";
    const texteDossierArchive: string;
    const finTexteDossierArchive = "<br/>Date de suppression d\u00E9finitive du dossier : ";
    const titreDossierArchive = "Information sur le dossier";
    const codeEtatCreanceDouteux = "D";
    const codeEtatCreanceEchu = "E";
    const consultable = "O";
    const consultableDesarchive = "M";
    namespace Popup {
        namespace DossierNonAutorise {
            const titre = "Information sur le dossier";
            const bodyDebut = "Vous n'\u00EAtes pas autoris\u00E9 \u00E0 consulter / g\u00E9rer ce dossier.";
            const bodyPortefeuille = "<br/><br/>Portefeuille : ";
            const bodyGerepar = "<br/>G\u00E9r\u00E9 par : ";
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

declare namespace ContentieuxParametrage.Constantes {
    namespace Inject {
        const tuileService = "ContentieuxParametrage.TuileService";
    }
    namespace ContentieuxMetier {
        const typeDetteImpaye = "IMPAYE";
        const typeDetteDechu = "DECHU";
        const typeDetteDebiteur = "DEBITEUR";
        const typeDetteSsTraitance = "SOUS-TRAITANCE";
        const typeDetteManuel = "MANUEL";
        const typeDettePertes = "PERTES";
        const typeDetteExigible = "EXIGIBLE";
        const etiquetteRegularise = "REGULARISE";
        const etiquetteEcheancier = "ECHEANCIER";
        const etiquetteSousSurveillance = "SOUS SURVEILLANCE";
        const etiquetteCrediteur = "CREDITEUR";
        const etiquetteDebiteur = "DEBITEUR";
        const texteDetteImpaye = "impay\u00E9";
        const texteDetteDechu = "d\u00E9chu";
        const texteDetteDebiteur = "d\u00E9biteur";
        const texteDetteSsTraitance = "sous-trait\u00E9";
        const texteDetteRegularise = "r\u00E9gularis\u00E9";
        const echeancierActif = "\u00E9ch\u00E9ancier actif";
        const echeancierEnRetard = "\u00E9ch\u00E9ancier en retard";
        const echeancierEnNonRespect = "\u00E9ch\u00E9ancier en non-respect";
        const echeancierEnAttenteSignature = "\u00E9ch\u00E9ancier en attente de signature";
        const echeancierCaduc = "\u00E9ch\u00E9ancier caduc";
        const echeancierSupprime = "\u00E9ch\u00E9ancier supprim\u00E9";
        const echeancierTermine = "\u00E9ch\u00E9ancier termin\u00E9";
        const typeProduitServiceContratMySysPI00 = "PI00";
        const typeProduitServiceContratMySysE000 = "E000";
        const typeProduitServiceContratMySystoExclude: string[];
        const etiquetteVerte = "vert";
        const etiquetteOrange = "orange";
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

declare namespace ContentieuxParametrage.Constantes.Processus {
    namespace Lisa {
        const syntheseVersDossierNumeriqueRecouvrement = 20;
        const syntheseVersDossierNumeriqueCredit = 21;
        const syntheseVersDossierNumeriqueCreditHorsPortail = 20;
        const syntheseVersEffectuerPaiement = 8;
        const syntheseVersGererEcheancierCreation = 9;
        const syntheseVersGererEcheancierVisualisation = 10;
        const syntheseVersVARIO = 3;
    }
    namespace processusDebrancherVARIO {
        const code = "DEBR_VARIO";
        const libelleEcheancier = "G\u00E9rer les \u00E9ch\u00E9anciers";
        const valeurDepart = "1";
        const debranchementNSDKEcranPlanApurement = "PLAPUR";
        const debranchementNSDKEcranPlanReglement = "PLREGL";
    }
    namespace processusEffectuerPaiement {
        const code = "EFFC_PMNT_DOSS_RECV";
        const libelle = "Effectuer un paiement";
        const valeurDepart = "1";
    }
    namespace processusGererEcheancier {
        const code = "GERR_ECHN_DOSS_RECV";
        const libelleCreation = "Cr\u00E9er un \u00E9ch\u00E9ancier";
        const libelleVisualisation = "Visualiser les \u00E9ch\u00E9anciers";
        const libelleGestion = "G\u00E9rer les \u00E9ch\u00E9anciers";
        const valeurDepartCreation = "2";
        const valeurDepartAjout = "2";
        const valeurDepartModification = "2";
        const valeurDepartVisualisation = "1";
        const modeCreation = "C";
        const modeModification = "M";
        const modeVisualisation = "V";
        const modeSimulation = "S";
    }
    namespace processusGererCreditSynchro {
        const code = "GEST_CRDT_SYNC";
        const libelle = "G\u00E9rer le cr\u00E9dit synchro";
        const valeurDepart = "1";
    }
    namespace processusDossierNumeriqueCredit {
        const code = "GERR_DOSS_NUMR";
        const libelle = "Acc\u00E8der au DNC";
        const valeurDepart = "1";
    }
}
