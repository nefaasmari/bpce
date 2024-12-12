
declare module myway.c0410.eparfix {
    var eparfixModule: ng.IModule;
}

declare module myway.c0410.eparfix {
    class EparfixControleur {
        private $scope;
        private $q;
        private eparfixDataService;
        private espaceGlobalService;
        private serviceAgentExtended;
        private compteService;
        private compteBddCommunService;
        static $inject: string[];
        static AUTRE_COMPTE: string;
        formulaireEparfix: FormulaireEparfix;
        formulaireRecapAvenantEparfix: FormulaireEparfix;
        donneeEparfix: DonneesEparfix;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        private champDateDesactive;
        private estSuspendable;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        codeActeGestion: string;
        private codeMiseAjour;
        private labelBoutonSuspension;
        private autreCompte;
        private riceEparfix;
        private numeroAutreCompte;
        private valeurMois;
        private selectionMois;
        idBloc: string;
        identifiantFormulaire: string;
        private listeComptesDestinataires;
        listePeriodicite: string[];
        datePremierVersementMinimum: Date;
        dateProchaineEcheanceApresSuspension: Date;
        constructor($scope: ng.IScope, $q: ng.IQService, eparfixDataService: EparfixDonneesService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, compteService: comInterdomaine.CompteService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        validerDonneeEparfix: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerEparFix();
        private modifierEparfix();
        supprimerDonneesEparfix(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        recupererValeurChampCompte(compteDestinataire: CompteDestinataireFormulaire): void;
        /**
         *  permet de paramétrer la date de reprise suivant la valeur choisie par l'utilisateur (date de reprise = aujourd'hui + 1j + 1m )
         */
        recupererValeurMois(valeurMois: string): void;
        calculerDateProchaineEcheance(dateRepriseService: Date, dateProchaineEcheance: Date): void;
        suspendreEparfix(): void;
        private suspendreOuReprendreEparplusEparfix(codeMiseAjour, donneeEparplus);
        hasModifieChamps(nomChamps: string): boolean;
        private determinerMode(mode);
        recupereCodePeriodicite(libelle: string): void;
        mettreVueEnRecapitulatif(): void;
        verifierLabelDateSuspension(): void;
        private initialiserCompteDestinataire();
    }
}

declare module myway.c0410.eparfix {
    function mwepEparfix(): ng.IDirective;
}

declare module myway.c0410.eparfix {
    class CompteDestinataireFormulaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        numeroCompte: string;
        constructor();
        getLibelleCompte(): string;
    }
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
    class FormulaireEparfix extends myway.c0410.commun.ObjetGenerique {
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
        constructor(identifiantFormulaire: string);
        constructor(identifiantFormulaire: string, donneesEparfix: DonneesEparfix);
        /** Construit un objet compteDestinataireFormulaire à partir des données eparfix */
        private setCompteDestinataire(donneesEparfix);
        metAJourFormulaire(donneesEparfix: DonneesEparfix): void;
        estValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaire(): StatutChampsFormulaire[];
        estValidePourSuspensionEtReprise(): boolean;
        private estValideChamps(champs);
    }
}

declare module myway.c0410.eparfix {
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
    class DonneesEparfix {
        compteDestinataire: CompteDestinataireFormulaire;
        infosContratEparfixEparplus: InfosContratEparfixEparplus;
        constructor();
        constructor(donnees: DonneesEparfix);
        miseAjourDonneesOffreDepuisParametre(codeBanque: string, codeGuichet: string, numeroCompte: string): void;
        miseAjourDuModele(formulaire: FormulaireEparfix, estEnAvenant?: boolean): void;
    }
}

declare module myway.c0410.eparfix {
    class EparfixDonneesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private eparfix;
        private restServiceUrl;
        private _formulaire;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerEparfixEparplus(numeroEntiteTitulaire: number, numeroOffreSouscrite: number, identifiantProduitService: number, donneesEparfix: DonneesEparfix): ng.IPromise<DonneesEparfix>;
        recupererEparfixEparplus(codeEtablissementCompteSource?: string, codeGuichetCompteSource?: string, codeTypeProduitServiceCompteSource?: string, numeroCompteCompteSource?: string): ng.IPromise<DonneesEparfix>;
        modifierEparfixEparplus(codeMiseAJour: string, donneesEparfix: DonneesEparfix): ng.IPromise<DonneesEparfix>;
        supprimerEparfixEparplus(numeroOffreSouscrite: number, identifiantProduitService: number, donneesEparfix: DonneesEparfix): ng.IPromise<void>;
    }
}
