
declare module myway.referentielSocleFonctionnel {
    var app: any;
}

declare module myway.referentielSocleFonctionnel {
}

declare module myway.referentielSocleFonctionnel {
    class Controleur2 {
        parametre: MyWay.Model.ParametreVersementPeriodique;
        tableauVersementPeriodiqueData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauColonneOptionsParametre: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsType: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsOptionnel: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCommentaire: MyWay.UI.ImwTableColumnOptions;
        tableauVersementPeriodique: MyWay.UI.ImwTableOptions;
        constructor();
    }
}

declare module myway.referentielSocleFonctionnel {
}

declare module myway.referentielSocleFonctionnel {
    class Controleur5 {
        agence: MyWay.Model.Agence;
        agent: MyWay.Model.Agent;
        paramListeGuichet: MyWay.Model.EDSGuichetParam;
        guichetTestSelectionne: myway.comEds.Guichet;
        edsGlobaleParam: MyWay.Model.EDSRechercheGlobaleParam;
        edsGuichetParam: MyWay.Model.EDSRechercheGuichetParam;
        guichetSelectionne: myway.comEds.Guichet;
        tableauListeAgencesData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauListeAgentsData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauListeGuichetData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRechercheGlobaleData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRechercheGuichetData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauColonneOptionsParametre: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsType: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsOptionnel: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCommentaire: MyWay.UI.ImwTableColumnOptions;
        tableauListeAgences: MyWay.UI.ImwTableOptions;
        tableauListeAgents: MyWay.UI.ImwTableOptions;
        tableauListeGuichet: MyWay.UI.ImwTableOptions;
        tableauRechercheGlobale: MyWay.UI.ImwTableOptions;
        tableauRechercheGuichet: MyWay.UI.ImwTableOptions;
        constructor();
        /**
         * @ngdoc function
         * @name test
         * @methodOf myway.comEds.test()
         * @description
         * Test qui écrit sur la console l'item selectionné
         * @param {any}, item sélectionné.
         * @returns void
         */
        test(selectedItem: any): void;
    }
}

declare module myway.referentielSocleFonctionnel {
}

declare module myway.referentielSocleFonctionnel {
}

declare module myway.referentielSocleFonctionnel {
    class Controleur1 {
        private $scope;
        private serviceAgentExtended;
        private affectationRadicalService;
        private agentConnecteService;
        private mwsfDeviseService;
        private impressionService;
        private interDomainCoreService;
        private saisieSirenService;
        private saisieNumTelephoneService;
        private saisieRiceService;
        static $inject: string[];
        rib: MyWay.Model.Rice;
        settings: myway.comInterdomaine.IMwMontantSettings;
        devise: MyWay.Model.Devise;
        rice: MyWay.Model.Rice;
        numCarte: MyWay.Model.NumCarte;
        parametreListeComptes: MyWay.Model.ParametresListeComptes;
        parametreListeComptes1: MyWay.Model.ParametresListeComptes;
        montantDevise: MyWay.Model.MontantDevise;
        codeEtab: string;
        codeGuich: string;
        codeActi: string;
        radical: string;
        jour: string;
        mois: string;
        annee: string;
        date: Date;
        date2: Date;
        dateString: string;
        dateString2: string;
        date3: string;
        henin: any;
        tabDevise: MyWay.Model.Devise[];
        devise2: MyWay.Model.Devise;
        devise3: MyWay.Model.Devise;
        codeApplication: string;
        siren: string;
        validation: boolean;
        codeEtablissementFromContext: string;
        listIndicatifs: Array<Object>;
        numCompte: string;
        cleCompte: string;
        codeEtablissement: string;
        codeGuichet: string;
        rice1: MyWay.Model.Rice;
        cleRice: string;
        cleCompte1: string;
        codeActiviteCompte: string;
        tableauBicData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauTexteRicheData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauMontantDeviseData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauLoaderData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauCarteBleueData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauIdClientData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauDeviseData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauBicIbanData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauDateNaissanceData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauIbanData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauListeComptesData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauUtileData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauNumTelephoneData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRibData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauSirenData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRiceData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauParamAffectationRadicalData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourAffectationRadicalData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauRetourAgentData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauRetourGetDevisesData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamGetDeviseByCodeData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourGetDeviseByCodeData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauRetourGetDeviseEuroData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamGetDateData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourGetDateData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamFromAAAAMMJJData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourFromAAAAMMJJData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamConversionJJMMAAAAData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourConversionJJMMAAAAData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamBlobUtilsData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourBlobUtilsData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauRetourImpressionServiceData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamBasculeData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourBasculeData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamObjectUtilsData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourObjectUtilsData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamSirenData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourSirenData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauRetourGetCurrentTelData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamGetListIndicData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauParamPadLeftData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourPadLeftData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamValidateRuleData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauParamFormatteRiceData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourFormatteRiceData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamRiceKeyData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourRiceKeyData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamCompteKeyData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourCompteKeyData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauParamCompteTitresData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauRetourCompteTitresData: {
            "type": string;
            "commentaire": string;
        }[];
        tableauColonneOptionsParametre: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsType: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsOptionnel: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCommentaire: MyWay.UI.ImwTableColumnOptions;
        tableauBic: MyWay.UI.ImwTableOptions;
        tableauTexteRiche: MyWay.UI.ImwTableOptions;
        tableauMontantDevise: MyWay.UI.ImwTableOptions;
        tableauLoader: MyWay.UI.ImwTableOptions;
        tableauCarteBleue: MyWay.UI.ImwTableOptions;
        tableauIdClient: MyWay.UI.ImwTableOptions;
        tableauRice: MyWay.UI.ImwTableOptions;
        tableauBicIban: MyWay.UI.ImwTableOptions;
        tableauDateNaissance: MyWay.UI.ImwTableOptions;
        tableauEmail: MyWay.UI.ImwTableOptions;
        tableauIban: MyWay.UI.ImwTableOptions;
        tableauListeComptes: MyWay.UI.ImwTableOptions;
        tableauNom: MyWay.UI.ImwTableOptions;
        tableauNumCredit: MyWay.UI.ImwTableOptions;
        tableauNumPersonne: MyWay.UI.ImwTableOptions;
        tableauNumTelephone: MyWay.UI.ImwTableOptions;
        tableauPrenom: MyWay.UI.ImwTableOptions;
        tableauRib: MyWay.UI.ImwTableOptions;
        tableauSiren: MyWay.UI.ImwTableOptions;
        tableauDevise: MyWay.UI.ImwTableOptions;
        tableauParamAffectationRadical: MyWay.UI.ImwTableOptions;
        tableauRetourAffectationRadical: MyWay.UI.ImwTableOptions;
        tableauRetourAgent: MyWay.UI.ImwTableOptions;
        tableauRetourGetDevises: MyWay.UI.ImwTableOptions;
        tableauParamGetDeviseByCode: MyWay.UI.ImwTableOptions;
        tableauRetourGetDeviseByCode: MyWay.UI.ImwTableOptions;
        tableauRetourGetDeviseEuro: MyWay.UI.ImwTableOptions;
        tableauParamGetDate: MyWay.UI.ImwTableOptions;
        tableauRetourGetDate: MyWay.UI.ImwTableOptions;
        tableauParamFromAAAAMMJJ: MyWay.UI.ImwTableOptions;
        tableauRetourFromAAAAMMJJ: MyWay.UI.ImwTableOptions;
        tableauParamConversionJJMMAAAA: MyWay.UI.ImwTableOptions;
        tableauRetourConversionJJMMAAAA: MyWay.UI.ImwTableOptions;
        tableauParamBlobUtils: MyWay.UI.ImwTableOptions;
        tableauRetourBlobUtils: MyWay.UI.ImwTableOptions;
        tableauRetourImpressionService: MyWay.UI.ImwTableOptions;
        tableauParamBascule: MyWay.UI.ImwTableOptions;
        tableauRetourBascule: MyWay.UI.ImwTableOptions;
        tableauParamObjectUtils: MyWay.UI.ImwTableOptions;
        tableauRetourObjectUtils: MyWay.UI.ImwTableOptions;
        tableauParamSiren: MyWay.UI.ImwTableOptions;
        tableauRetourSiren: MyWay.UI.ImwTableOptions;
        tableauRetourGetCurrentTel: MyWay.UI.ImwTableOptions;
        tableauParamGetListIndic: MyWay.UI.ImwTableOptions;
        tableauParamPadLeft: MyWay.UI.ImwTableOptions;
        tableauRetourPadLeft: MyWay.UI.ImwTableOptions;
        tableauParamValidateRule: MyWay.UI.ImwTableOptions;
        tableauParamFormatteRice: MyWay.UI.ImwTableOptions;
        tableauRetourFormatteRice: MyWay.UI.ImwTableOptions;
        tableauParamRiceKey: MyWay.UI.ImwTableOptions;
        tableauRetourRiceKey: MyWay.UI.ImwTableOptions;
        tableauParamCompteKey: MyWay.UI.ImwTableOptions;
        tableauRetourCompteKey: MyWay.UI.ImwTableOptions;
        tableauParamCompteTitres: MyWay.UI.ImwTableOptions;
        tableauRetourCompteTitres: MyWay.UI.ImwTableOptions;
        tableauColonneOptionsCode: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLabel: MyWay.UI.ImwTableColumnOptions;
        tableauGetDevises: MyWay.UI.ImwTableOptions;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, affectationRadicalService: myway.comInterdomaine.AffectationRadicalService, agentConnecteService: myway.comInterdomaine.AgentConnecteService, mwsfDeviseService: myway.comInterdomaine.DeviseService, impressionService: myway.comInterdomaine.ImpressionService, interDomainCoreService: myway.comInterdomaine.InterDomainCoreService, saisieSirenService: myway.comInterdomaine.SaisieSirenService, saisieNumTelephoneService: myway.comInterdomaine.SaisieNumTelephoneService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * @ngdoc function
         * @name test
         * @methodOf myway.comInterdomaine.test()
         * @description
         * Test qui écrit sur la console l'item selectionné
         * @param {any}, item sélectionné.
         * @returns void
         */
        test(selectedItem: any): void;
        affectationRadical(): void;
        convertDate(): void;
        convertDateAAAAMMJJ(): void;
        convertDateJJMMAAAA(): void;
        agentHenin(): void;
        bascule(): void;
        sirenValide(): void;
        formatRice(): void;
        calculCleRice(): void;
        calculCleCompte(): void;
        compteTitres(): void;
    }
}

declare module myway.referentielSocleFonctionnel {
}

declare module myway.referentielSocleFonctionnel {
    class Controleur9 {
        tableauEchelleNotationData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauColonneOptionsParametre: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsType: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsOptionnel: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCommentaire: MyWay.UI.ImwTableColumnOptions;
        tableauEchelleNotation: MyWay.UI.ImwTableOptions;
        constructor();
    }
}

declare module myway.referentielSocleFonctionnel {
    class Controleur10 {
        tableauVersementPeriodiqueData: {
            "parametre": string;
            "type": string;
            "optionnel": string;
            "commentaire": string;
        }[];
        tableauColonneOptionsParametre: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsType: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsOptionnel: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCommentaire: MyWay.UI.ImwTableColumnOptions;
        tableauVersementPeriodique: MyWay.UI.ImwTableOptions;
        constructor();
    }
}

declare module myway.referentielSocleFonctionnel {
}

declare module myway.referentielSocleFonctionnel {
}

declare module myway.referentielSocleFonctionnel {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module myway.referentielSocleFonctionnel {
    function entete(): ng.IDirective;
}
