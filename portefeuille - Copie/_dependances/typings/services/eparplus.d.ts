
declare module myway.c0410.eparplus {
    var eparplusModule: ng.IModule;
}

declare module myway.c0410.eparplus {
    class EparplusControleur {
        private $scope;
        private $q;
        private eparplusDataService;
        private espaceGlobalService;
        private serviceAgentExtended;
        private compteService;
        private compteBddCommunService;
        static $inject: string[];
        static AUTRE_COMPTE: string;
        formulaireEparplus: FormulaireEparplus;
        formulaireRecapAvenantEparplus: FormulaireEparplus;
        donneeEparplus: DonneesEparplus;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        private champDateDesactive;
        private estSuspendable;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        codeActeGestion: string;
        private labelBoutonSuspension;
        private autreCompte;
        private riceEparplus;
        private numeroAutreCompte;
        private valeurMois;
        private selectionMois;
        idBloc: string;
        identifiantFormulaire: string;
        private listeComptesDestinataires;
        listePeriodicite: string[];
        datePremierVersementMinimum: Date;
        dateProchaineEcheanceApresSuspension: Date;
        constructor($scope: ng.IScope, $q: ng.IQService, eparplusDataService: EparplusDonneesService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, compteService: comInterdomaine.CompteService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        validerderDonneeEparPlus: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerEparplus();
        private modifierEparplus();
        supprimerDonneesEparPlus(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        recupererValeurMois(valeurMois: string): void;
        calculerDateProchaineEcheance(dateRepriseService: Date, dateProchaineEcheance: Date): void;
        suspendreEparplus(): void;
        private recupererValeurChampCompte(compteDestinataire);
        private suspendreOuReprendreEparplusEparfix(codeMiseAjour, donneeEparplus);
        hasModifieChamps(nomChamps: string): boolean;
        private determinerMode(mode);
        recupereCodePeriodicite(libelle: string): void;
        private initialiserCompteDestinataire();
    }
}

declare module myway.c0410.eparplus {
    function mwepEparplus(): ng.IDirective;
}

declare module myway.c0410.eparplus {
    class Periodicite {
        static QUINZAINE: {
            code: string;
            libelle: string;
        };
        static MENSUELLE: {
            code: string;
            libelle: string;
        };
        static TRIMESTRIELLE: {
            code: string;
            libelle: string;
        };
        static recupererListePeriodicite(): Array<string>;
        static recupererCodePeriodicite(libelle: string): string;
        static recupererLibellePeriodicite(code: string): string;
    }
    class StatutChampsFormulaire {
        private _nomChamps;
        constructor(nomChamps: string);
        getMessageErreur(): string;
    }
    class CompteDestinataireFormulaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        numeroCompte: string;
        constructor();
        getLibelleCompte(): string;
    }
    class FormulaireEparplus extends myway.c0410.commun.ObjetGenerique {
        datePremierVersement: Date;
        soldeMiniApresTransfert: number;
        montant: number;
        compteDestinataire: CompteDestinataireFormulaire;
        periodicite: {
            codePeriodicite: string;
            libellePeriodicite: string;
        };
        dateDebutDerniereSuspension: Date;
        dateRepriseDuService: Date;
        dateProchaineEcheance: Date;
        constructor(identifiantFormulaire: string, donneesEparplus?: DonneesEparplus);
        /** Construit un objet compteDestinataireFormulaire à partir des données eparplus */
        private setCompteDestinataire(donneesEparplus);
        metAJourFormulaire(donneesEparplus: DonneesEparplus): void;
        estValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaire(): StatutChampsFormulaire[];
        estValidePourSuspensionEtReprise(): boolean;
        private estValideChamps(champs);
    }
}

declare module myway.c0410.eparplus {
    class InfosContratEparfixEparplus {
        codeDevise: string;
        codeEtablissementCompteSource: string;
        codeEtatEparfixEparplus: string;
        codeGuichetCompteSource: string;
        codePeriodicite: string;
        codeTypeProduitServiceCompteSource: string;
        dateDebutDerniereSuspension: Date;
        dateModificationService: Date;
        dateOuvertureService: Date;
        dateProchaineEcheance: Date;
        dateRepriseDuService: Date;
        montantService: number;
        numeroCompteCompteSource: string;
        numeroContratEpargne: number;
        soldeServiceCompteSource: number;
        typeServiceEpargne: string;
    }
    class DonneesEparplus {
        compteDestinataire: CompteDestinataireFormulaire;
        infosContratEparfixEparplus: InfosContratEparfixEparplus;
        constructor();
        constructor(donnees: DonneesEparplus);
        miseAjourDonneesOffreDepuisParametre(codeBanque: string, codeGuichet: string, numeroCompte: string): void;
        miseAjourDuModele(formulaire: FormulaireEparplus, estEnAvenant?: boolean): void;
    }
}

declare module myway.c0410.eparplus {
    class EparplusDonneesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private eparplus;
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerEparfixEparplus(numeroEntiteTitulaire: number, numeroOffreSouscrite: number, identifiantProduitService: number, donneesEparplus: DonneesEparplus): ng.IPromise<DonneesEparplus>;
        recupererEparfixEparplus(codeEtablissementCompteSource?: string, codeGuichetCompteSource?: string, codeTypeProduitServiceCompteSource?: string, numeroCompteCompteSource?: string): ng.IPromise<DonneesEparplus>;
        modifierEparfixEparplus(codeMiseAJour: string, donneesEparplus: DonneesEparplus): ng.IPromise<DonneesEparplus>;
        supprimerEparfixEparplus(numeroOffreSouscrite: number, identifiantProduitService: number, donneesEparplus: DonneesEparplus): ng.IPromise<any>;
    }
}
