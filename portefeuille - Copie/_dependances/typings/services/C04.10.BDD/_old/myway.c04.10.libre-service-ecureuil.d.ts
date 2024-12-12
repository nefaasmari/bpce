
declare module myway.c0410.libreServiceEcureuil {
    var libreServiceEcureuilModule: ng.IModule;
}

declare module myway.c0410.libreServiceEcureuil {
    class LibreServiceEcureuilControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private libreServiceEcureuilService;
        private espaceGlobalService;
        private compteBddCommunService;
        static $inject: string[];
        private CHOIX_COMMUN;
        private CARTE;
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
        private test;
        parametresPagination: Object;
        isClientSansCarte: boolean;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, libreServiceEcureuilService: LibreServiceEcureuilService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        validerLibreServiceEcureuil: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerLibreServiceEcureuil();
        private modifierLibreServiceEcureuil();
        reconstruitObjetLSEEnModeCommun(): void;
        supprimerLibreServiceEcureuil(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        isCorrecteNombreDeComptesSelectionnes(cartes: IContratCarte[]): boolean;
        private traiterListeComptes(carte);
        mettreVueEnRecapitulatif(): void;
        changerCarte(carte: IContratCarte): void;
        selectionParCarte(): void;
        private determinerMode(mode);
        effectuerChoixCommun(): void;
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
        selectionneTous: boolean;
        selectionneTousIndeterminate: boolean;
        listeComptes: ICompte[];
        libreServiceEcureuil: IContratLibreServiceEcureuil;
        carteSelectionnee: IContratCarte;
        boutonRadioCarte: string;
        constructor(identifiantFormulaire: string);
        constructor(identifiantFormulaire: string, libreServiceEcureuil: IContratLibreServiceEcureuil);
        selectionDeCompte(compte: ICompte): void;
        razToutesLesSelections(): void;
        forceMultiSelection(): void;
        multiselectionChange(): void;
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
        isCompteSupport?: boolean;
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
        creerLibreServiceEcureuil(libreServiceEcureuil: IContratLibreServiceEcureuil, numeroOffreSoucrite: number, dateNaissancePersonne: Date): ng.IPromise<IContratLibreServiceEcureuil>;
        modifierLibreServiceEcureuil(libreServiceEcureuil: IContratLibreServiceEcureuil, dateNaissancePersonne: Date): ng.IPromise<IContratLibreServiceEcureuil>;
        private nettoyerObjet(libreServiceEcureuil);
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
