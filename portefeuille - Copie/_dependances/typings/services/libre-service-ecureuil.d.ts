
declare module myway.c0410.libreServiceEcureuil {
    var libreServiceEcureuilModule: ng.IModule;
}

declare module myway.c0410.libreServiceEcureuil {
    class LibreServiceEcureuilControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private libreServiceEcureuilService;
        private espaceGlobalService;
        private compteBddCommunService;
        static $inject: string[];
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        codeActeGestion: string;
        formulaireLibreServiceEcureuil: FormulaireLibreServiceEcureuil;
        private formulaireRecapAvenantLibreServiceEcureuil;
        libreServiceEcureuil: IContratLibreServiceEcureuil;
        boutonRadioCarte: string;
        private donneesComptesChargees;
        private dateNaissance;
        comptes: MyWay.UI.ImwTableOptions;
        compteSupportCarte: ICompteDansAbonnement;
        idBloc: string;
        identifiantFormulaire: string;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, libreServiceEcureuilService: LibreServiceEcureuilService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        validerLibreServiceEcureuil: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerLibreServiceEcureuil();
        private modifierLibreServiceEcureuil();
        supprimerLibreServiceEcureuil(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        isCorrecteNombreDeComptesSelectionnes(cartes: IContratCarte[]): boolean;
        private traiterListeComptes(carte);
        mettreVueEnRecapitulatif(): void;
        changerCarte(carte: IContratCarte): void;
        private determinerMode(mode);
        construireTableau(contenuTableau: ICompte[], elementSelectionnes: ICompte[]): MyWay.UI.ImwTableOptions;
        onSelectionChange(compteSelectionne: ICompte): void;
        private reconstruireTableau();
        hasModifieChamps(nomChamps: string): boolean;
    }
}

declare module myway.c0410.libreServiceEcureuil {
    function mwLibreServiceEcureuil(): ng.IDirective;
}

declare module myway.c0410.libreServiceEcureuil {
}

declare module myway.c0410.libreServiceEcureuil {
    class FormulaireLibreServiceEcureuil extends myway.c0410.commun.ObjetGenerique {
        listeComptes: ICompte[];
        libreServiceEcureuil: IContratLibreServiceEcureuil;
        carteSelectionnee: IContratCarte;
        boutonRadioCarte: string;
        constructor(identifiantFormulaire: string);
        constructor(identifiantFormulaire: string, libreServiceEcureuil: IContratLibreServiceEcureuil);
    }
}

declare module myway.c0410.libreServiceEcureuil {
    interface IContratLibreServiceEcureuil {
        codeEtablissementBanque: string;
        identifiantPersonne: number;
        contratCarte: IContratCarte[];
    }
    interface IContratCarte {
        numeroContratCarte: number;
        identifiantSupportCarte: string;
        libelleCodeProduitCarte: string;
        codeEtablissementBanque: string;
        codeGuichetInterbancaire: string;
        numeroCompteSupportCarte: string;
        compteDansAbonnement: ICompteDansAbonnement[];
        compteHorsAbonnement: ICompteHorsAbonnement[];
        codeQualiteAgentSupportCarte: string;
    }
    interface ICompte {
        codeEtablissementBanque: string;
        codeQualitePersonne: string;
        referenceProduitService: string;
        codeGuichetInterbancaire: string;
        checked?: boolean;
    }
    interface ICompteDansAbonnement extends ICompte {
        numeroRangDuCompte: string;
    }
    interface ICompteHorsAbonnement extends ICompte {
    }
}

declare module myway.c0410.libreServiceEcureuil {
    class LibreServiceEcureuilService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private contratLibreServiceEcureuil;
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        recupererLibreServiceEcureuil(codeEtablissementBanque: string, personneEnRelation: number, dateNaissancePersonne: Date): ng.IPromise<IContratLibreServiceEcureuil>;
        creerLibreServiceEcureuil(libreServiceEcureuil: IContratLibreServiceEcureuil, numeroOffreSoucrite: number): ng.IPromise<IContratLibreServiceEcureuil>;
        modifierLibreServiceEcureuil(libreServiceEcureuil: IContratLibreServiceEcureuil, dateNaissancePersonne: Date, verifierChecker: boolean): ng.IPromise<IContratLibreServiceEcureuil>;
        private nettoyerObjet(libreServiceEcureuil);
        /**
         * Cette fonction permet de répercuter les comptes dans abonnement ou hors abonnement dans toutes les cartes du client
         * @params contratsCarte IContratCarte[]
         */
        private checkerComptesCartesCommunes(contratsCarte);
        /**
         * Requête DELETE
         * Permet de supprimer un Libre service ecureuil
         * @return promise<Libre service ecureuil>
         */
        supprimerLibreServiceEcureuil(libreServiceEcureuil: IContratLibreServiceEcureuil): ng.IPromise<IContratLibreServiceEcureuil>;
        initialiser(codeEtablissementBanque: string, identifiantPersonne: number, contratCarte: Array<IContratCarte>): IContratLibreServiceEcureuil;
        copier(contratLibreServiceEcureuil: IContratLibreServiceEcureuil): IContratLibreServiceEcureuil;
        private toLocalString(date);
    }
}
