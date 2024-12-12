
declare module myway.c0410.releveCompte {
    var releveCompteModule: ng.IModule;
}

declare module myway.c0410.releveCompte {
    class ReleveCompteControleur {
        private $scope;
        private $q;
        private releveCompteDonneesService;
        private releveCompteNumeriqueDonneesService;
        private serviceAgentExtended;
        private espaceGlobalService;
        private compteBddCommunService;
        static $inject: string[];
        private formulaireReleveCompte;
        formulaireRecapAvenantReleveCompte: FormulaireReleveCompte;
        donneesReleveCompte: DonneesReleveCompte;
        donneesReleveCompteNumerique: DonneesReleveCompteNumerique;
        private compteDeDepot;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        idBloc: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        modeAffichage: number;
        codeActeGestion: string;
        listePeriodicite: string[];
        private checkBoxBraille;
        private checkBoxCompteSepare;
        private checkBoxDeuxiemeReleve;
        private clientSousTutelle;
        private estHabilite;
        private listePromesssesPersonnes;
        listePersonnesTableau: Array<IPersonne>;
        private identifiantEntite;
        constructor($scope: ng.IScope, $q: ng.IQService, releveCompteDonneesService: ReleveCompteDonneesService, releveCompteNumeriqueDonneesService: ReleveCompteNumeriqueDonneesService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        private verifierHabilitation();
        private traiterListePersonnes(contexte);
        private recupererEmailPersonne(personne);
        nourrirTableau(personne: IPersonne): void;
        initialiserReleveNumerique(personne: IPersonne): ng.IPromise<ReleveNumeriquePersonne>;
        afficherCacherCheckBoxDeuxiemeReleve(capaciteJuridique: string): void;
        private creerFormulaireReleveCompte();
        validerDonneesReleveCompte: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerReleveCompte();
        private enregistrerReleveCompteNumerique();
        private enregistrerReleveNumeriqueParPersonne(personne);
        private determinerMode(mode);
        recupererCodePeriodicite(libellePeriodicite: string): void;
    }
}

declare module myway.c0410.releveCompte {
    function mwReleveCompte(): ng.IDirective;
}

declare module myway.c0410.releveCompte {
    class TableauPersonnes {
        listePersonnesTableau: Array<IPersonne>;
        tableOptions: any;
        constructor(listePersonnesTableau: Array<IPersonne>, personnesSelectionnees: Array<IPersonne>, selectionChangeHandler: FormulaireReleveCompte);
    }
    class Periodicite {
        static MENSUELLE: {
            code: string;
            libelle: string;
        };
        static BIMENSUELLE: {
            code: string;
            libelle: string;
        };
        static HEBDOMADAIRE: {
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
    interface IPersonne {
        identifiantPersonne: number;
        identifiantEntite: number;
        destinataire: string;
        email: string;
        codeCapaciteJuridique: string;
        enReleveNumerique: boolean;
        aPasserEnReleveNumerique: boolean;
    }
    class FormulaireReleveCompte extends myway.c0410.commun.ObjetGenerique implements MyWay.UI.ISelectionChangeHandler {
        libelleFormatReleve: string;
        releveBraille: boolean;
        releveSepare: boolean;
        deuxiemeReleve: boolean;
        periodicite: {
            codePeriodicite: string;
            libellePeriodicite: string;
        };
        jourReleve: number;
        listeJoursReleve: Array<number>;
        listePeriodicite: Array<string>;
        listePersonnesTableau: Array<IPersonne>;
        personnesSelectionnees: Array<IPersonne>;
        tableauPersonnes: MyWay.UI.ImwTableOptions;
        checkBoxBraille: Object;
        checkBoxDeuxiemeReleve: Object;
        checkBoxCompteSepare: Object;
        constructor(listePersonnesTableau: Array<IPersonne>);
        constructor(listePersonnesTableau: Array<IPersonne>, donneesReleveCompte: ReleveDeCompte);
        metAJourFormulaire(checkbox: any): void;
        estValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaire(): myway.c0410.commun.StatutChampsFormulaire[];
        private estValideChamps(champs);
        reconstruireListePeriodicite(libellePeriodicite: string): void;
        onSelectionChange(personne: IPersonne): void;
        /**
         * Cette fonction permet de mettre à jour le label du type de relevé de compte suivant le relevé qui est coché
         */
        mettreAJourLibelleReleve(): void;
        creerCheckbox(): void;
    }
}

declare module myway.c0410.releveCompte {
    class ReleveDeCompte {
        codeEtablissementDuCompte: string;
        codeGuichetDuCompte: string;
        referenceDuCompte: string;
        jourArreteDuReleve: number;
        periodiciteEnvoiDuReleve: string;
        numeroEntiteTitulaire: number;
        modeEnvoiCourrier: string;
        moisProchaineEcheanceReleve: string;
        indicateurReleveSepare: boolean;
        indicateurDoubleDestinataire: boolean;
        indicateurReleveBraille: boolean;
    }
    class DonneesReleveCompte {
        releveDeCompte: ReleveDeCompte;
        constructor();
        constructor(donnees: ReleveDeCompte);
        miseAjourDonneesReleveDepuisParametre(compteDeDepot: myway.c0410.compteDeDepot.CompteDepotGenerique, numeroEntite: number): void;
        miseAjourDuModele(formulaire: FormulaireReleveCompte): void;
    }
}

declare module myway.c0410.releveCompte {
    class ReleveNumeriquePersonne {
        codeEtablissementBanque: string;
        numeroPersonne: number;
        typeDeSouscription: string;
        codeCanalGestion: string;
        codeEtatDuService: string;
        sousCodeEtatService: string;
    }
    class DonneesReleveCompteNumerique {
        releveDeCompteNumerique: ReleveNumeriquePersonne;
        constructor();
        constructor(donnees: DonneesReleveCompteNumerique);
        miseAjourDonneesReleveNumeriqueDepuisParametre(compteDeDepot: myway.c0410.compteDeDepot.CompteDepotGenerique, personne: IPersonne): void;
        miseAjourDuModele(formulaire: FormulaireReleveCompte): void;
    }
}

declare module myway.c0410.releveCompte {
    class ReleveCompteNumeriqueDonneesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private releveNumeriquePersonne;
        private restServiceCompteNumeriqueUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /** Requête GET
         *  Permet de récupérer un un releve de compte existant
         *  @return promise<ReleveCompte>
         */
        getReleveDeCompteNumerique(codeEtablissementBancaire: string, numeroPersonne: number, typeDeSouscription: string): ng.IPromise<ReleveNumeriquePersonne>;
        /** Requête POST
         *  Permet de créer un releve de compte numérique
         *  @return promise<ReleveCompte>
         */
        creerReleveDeCompteNumerique(releveNumeriquePersonne: ReleveNumeriquePersonne, numeroOffreSouscrite: number): ng.IPromise<ReleveNumeriquePersonne>;
        /** Requête DELETE
         *  Permet de supprimer un releve de compte numérique
         *  @return promise<ReleveCompte>
         */
        supprimerReleveDeCompteNumerique(releveNumeriquePersonne: ReleveNumeriquePersonne): ng.IPromise<ReleveNumeriquePersonne>;
        private onLoadError(error);
    }
}

/**
 * Ce service permet d'effectuer les appels aux services REST permettant de
 * récupérer les données d'un releve de compte
 * mettre à jour un releve de compte en avenant
 */
declare module myway.c0410.releveCompte {
    class ReleveCompteDonneesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private releveCompte;
        private restServiceReleveCompteUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /** Requête GET
         *  Permet de récupérer un un releve de compte existant
         *  @return promise<ReleveCompte>
         */
        getReleveDeCompte(numeroEntiteTitulaire: number, codeEtablissementDuCompte: string, codeGuichetDuCompte: string, referenceDuCompte: string): ng.IPromise<ReleveDeCompte>;
        /** Requête PUT
         *  Permet de modifier un releve de compte
         *  @return promise<ReleveCompte>
         */
        modifierReleveCompte(numeroOffreSouscrite: number, releveDeCompte: ReleveDeCompte): ng.IPromise<ReleveDeCompte>;
        private onLoadError(error);
    }
}
