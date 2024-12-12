
declare module myway.c0410.autorisationDecouvert {
    var autorisationDecouvertModule: ng.IModule;
}

declare module myway.c0410.autorisationDecouvert {
}

declare module myway.c0410.autorisationDecouvert {
    function mwAutorisationDecouvert(): ng.IDirective;
}

declare module myway.c0410.autorisationDecouvert {
    class StatutChampsFormulaire {
        private _nomChamps;
        constructor(nomChamps: string);
        getMessageErreur(): string;
    }
    class FormulaireAutorisationDecouvert extends myway.c0410.commun.ObjetGenerique {
        typeDeDecouvert: DecouvertPossible[];
        decouvertPossibleSelectionne: DecouvertPossible;
        dateFin: Date;
        dateDebut: Date;
        montant: number;
        marge: number;
        taeg: number;
        taux: number;
        montantFrais: number;
        montantPropose: number;
        constructor(identifiantFormulaire: string, decouvertPermanent?: DecouvertPermanent);
        setDecouvertSelectionne(identifiantDecouvert: number): void;
        estValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaire(): StatutChampsFormulaire[];
        private estValideChamps(champs);
        possedeMarge(): boolean;
        isOkMargeSaisi(): boolean;
        isOkMontantSaisi(): boolean;
        vider(): void;
    }
    class FormulaireDecouvertPossible {
    }
}

declare module myway.c0410.autorisationDecouvert {
    class ParametreProduitDecouvert {
        codeEtablissement: string;
        montantParDefaut: number;
        monnaieMontantParDefaut: string;
        decouvertPossible: DecouvertPossible;
        identifiantDecouvertParDefaut: number;
    }
    class DecouvertPermanent {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateFinDecouvert: Date;
        montantDuDecouvert: number;
        codeMonnaieDecouvert: string;
        fraisDuDecouvert: number;
        valeurDuTauxDecouvert: number;
        margeSurDecouvert: number;
        dateDebutDecouvert: Date;
        identifiantDecouvertClient: number;
        identifiantDecouvertCatalogue: number;
        dateFinProduitService: Date;
        constructor(codeEtablissement?: string, codeGuichet?: string, numeroCompte?: string, formulaireDecouvert?: FormulaireAutorisationDecouvert);
        mettreAJourDepuisFormulaire(formulaireDecouvert: FormulaireAutorisationDecouvert): void;
    }
    class DecouvertPossible {
        libelleSurMyway: string;
        codeMnemonique: string;
        identifiant: number;
        typeDecouvert: string;
        libelleDecouvert: string;
        libelleContractuelDecouvert: string;
        dateFinCommercialisation: Date;
        dateDebutCommercialisation: Date;
        codeTauxReference: number;
        valeurDuTaux: number;
        codePrestationTarif: number;
        montantMinimumDuDecouvert: number;
        montantMaximumDuDecouvert: number;
        codeDeviseDecouvert: string;
        margeMinimumSurTauxReference: number;
        margeMaximumSurTauxReference: number;
        libelleSaisieMarge: number;
    }
    class DonneesTaeg {
        tauxEffectifGlobal: number;
    }
    class DonneesTarification {
        codeEtablissement: string;
        codePrestationTarifiable: number;
        montantDeReferencePrestation: number;
        dateApplication: Date;
        numeroEntiteTitulaire: number;
        identifiantPersonne: string;
        montantATariferInitial: number;
        montantATarifer: number;
        libellePrestationTarifiable: string;
        monnaieMontantReference: string;
    }
    class DonneesAutorisationDecouvert {
        codeEtablissement: string;
        montantParDefaut: number;
        monnaieMontantParDefaut: string;
        decouvertPossible: DecouvertPossible[];
        identifiantDecouvertParDefaut: number;
        constructor();
        constructor(donnees: DonneesAutorisationDecouvert);
        miseAjourDuModele(formulaire: FormulaireAutorisationDecouvert, estEnAvenant?: boolean): void;
    }
}

declare module myway.c0410.autorisationDecouvert {
    class AutorisationDecouvertService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restParametresDecouvertServiceURL;
        private restTarificationPrestationServiceURL;
        private restCalculTaeg;
        private restOperationsDecouvert;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        recupererParametreDecouvert(codeEtablissement: string, acte: string, identifiantProduitService: number, engagementDeDomiciliation: number, periodiciteEngagementDeDomiciliation: number): ng.IPromise<DonneesAutorisationDecouvert>;
        recupererParametresTarficiation(codeEtablissement: string, acte: string, codePrestationTarifiable: number, montantDeReferencePrestation: number, monnaieMontantReference: string, numeroEntiteTitulaire: number): ng.IPromise<DonneesTarification>;
        calculerTaeg(codeEtablissement: string, tauxDuDecouvert: number, montantDuDecouvert: number, codeMonnaieDecouvert: string, fraisDuDecouvert: number, dateDebutDecouvert: Date, dateFinDecouvert: Date): ng.IPromise<DonneesTaeg>;
        recupererAutorisationDecouvert(codeEtablissement: string, codeGuichet: string, numeroDeCompte: string): ng.IPromise<DecouvertPermanent>;
        creerAutorisationDecouvert(numeroPersonne: number, numeroOffreSouscrite: number, identifiantProduitService: number, codeForcage: string, decouvertPermamnent: DecouvertPermanent): ng.IPromise<DecouvertPermanent>;
        modifierAutorisationDecouvert(numeroPersonne: number, numeroOffreSouscrite: number, identifiantProduitService: number, codeForcage: string, decouvertPermanent: DecouvertPermanent): ng.IPromise<DecouvertPermanent>;
        supprimerAutorisationDecouvert(numeroPersonne: number, numeroOffreSouscrite: number, identifiantProduitService: number, decouvertPermanent: DecouvertPermanent): ng.IPromise<void>;
    }
}
