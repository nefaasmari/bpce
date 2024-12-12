
declare module myway.c0410.alertEcureuil {
    var alertEcureuilModule: any;
}

declare module myway.c0410.alertEcureuil {
    class AlertEcureuilControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        private alertEcureuilService;
        private compteBddCommunService;
        static $inject: string[];
        messageMontantNegatif: string;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        private codeEtat;
        private identifiantPersonne;
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        private codeProduitService;
        codeActeGestion: string;
        idBloc: string;
        private formulaireAlertEcureuil;
        private formulaireAvenantOuRecap;
        private donneesAlertEcureuil;
        private identifiantFormulaire;
        private estMontantCrediteurNegatif;
        private estMontantEncoursCBNegatif;
        infobulleMessageAlerteSurSolde: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        message: string;
        infobulleMessageAlerteEncourCB: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, alertEcureuilService: IAlertEcureuilService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        private determinerMode(mode);
        private initListeDesComptes();
        private initListeDesSupportsCommunication();
        validerDonneesAlertEcureuil: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerAlertEcureuil();
        private estDemandeSubstitution();
        private getOperationByCodeMode();
        private initialiserDonneesEtFormulaireEnAvenant();
        private supprimerAlertEcureuil();
        hasModifieChamps(nomChamps: string): boolean;
        private ckeckEstMontantCrediteurNegatif();
        private ckeckEstMontantEncoursCBNegatif();
    }
}

declare module myway.c0410.alertEcureuil {
    function mwaeAlertecureuil(): ng.IDirective;
}

declare module myway.c0410.alertEcureuil {
    class Jour extends MyWay.Services.StringEnum {
        static DIMANCHE: Jour;
        static LUNDI: Jour;
        static MARDI: Jour;
        static MERCREDI: Jour;
        static JEUDI: Jour;
        static VENDREDI: Jour;
        static SAMEDI: Jour;
    }
    enum EtatDemande {
        O,
        M,
        DE,
        DD,
        DA,
    }
    interface ICompteAlertable {
        numeroCompteAlerte: string;
        designationBancaireCourte?: string;
        ligneCompte?: string;
    }
    interface ISupportCommunication {
        identifiantSupportCommunication: string;
        libelleSousCanalCommunication: string;
        libelleSupportCommunication: string;
        designationCourte: string;
        libelleLienInterPersonne?: string;
        multiSupport: boolean;
        numeroSupportAbonnementAlerte?: string;
        etatSupportDemande?: string;
        etatSupportEnCours?: string;
    }
    interface IAlerte {
        alerteSelectionne: boolean;
        numeroAlerte?: number;
        etatAlerteEnCours: string;
        montant?: number;
        jourSelectionne?: Jour;
        seuilDecouvert?: boolean;
    }
    class FormulaireAlertEcureuil extends myway.c0410.commun.Formulaire implements MyWay.UI.ISelectionChangeHandler {
        static COMPTE_COURANT: {
            numeroCompteAlerte: string;
            ligneCompte: string;
        };
        static MONTANT: string;
        static DECOUVERT: string;
        numeroAbonnement: string;
        listeDesComptes: ICompteAlertable[];
        supportsTableOptions: MyWay.UI.ImwTableOptions;
        listeDesSupportsCommunication: ISupportCommunication[];
        compteSelectionne: ICompteAlertable;
        supportsSelectionnes: ISupportCommunication[];
        listeFrequence: Jour[];
        alerteEnvoiSolde: IAlerte;
        alerteSurSolde: IAlerte;
        alerteEnCoursCB: IAlerte;
        alerteSurOperationCreditrice: IAlerte;
        isMultiSupport: boolean;
        choixDecouvert: boolean;
        etatAlerteSurSolde: string;
        constructor(identifiantFormulaire: string);
        setDonneesFormulaireEnAvenant(donneesAlertEcureuil: DonneesAlertEcureuil): void;
        private setAlerte(alerteDestinataire, alerteSource);
        isAlertVide(alerte: DonneesAlerte): boolean;
        setEtatAlerteSurSolde(): void;
        estChoixMontant(): boolean;
        getInformationsChampsInvalidesFormulaire(codeEtat?: string): myway.c0410.commun.StatutChampsFormulaire[];
        initialiserTableauDesSupports(): void;
        onSelectionChange(selection: ISupportCommunication): void;
        private getTableSupportsColonnes();
    }
}

declare module myway.c0410.alertEcureuil {
    interface IDonneesAbonnement {
        numeroAbonnementAlerte: string;
        identifiantPersonne: number;
        etatAbonnementEnCours: string;
        etatAbonnementDemande: string;
    }
    class DonneesCompteAlertable {
        numeroRice: string;
        alerteSoldeSurCompte: DonneesAlerte;
        alerteSeuilsSurSolde: DonneesAlerte;
        alerteSeuilSurOperation: DonneesAlerte;
        alerteSeuilEncoursCB: DonneesAlerte;
        constructor();
    }
    interface IDonneesSupportCommunication {
        identifiantSupportCommunication: string;
        numeroSupportAbonnementAlerte: string;
        etatSupportEnCours: string;
        etatSupportDemande: string;
        supportSelectionne: boolean;
    }
    class DonneesAlerte {
        typeAlerte: string;
        jourAlerte: string;
        montantSeuil: number;
        numeroAlerte: number;
        etatEnCours: string;
        etatDemande: string;
        seuilDecouvert: boolean;
        constructor(typeAlerte: string);
    }
    class DonneesAlertEcureuil {
        codeBanque: string;
        codeGuichet: string;
        numeroCompte: string;
        abonnementAlertEcureuil: IDonneesAbonnement;
        listeComptesAlertables: Array<DonneesCompteAlertable>;
        listeSupportsCommunication: Array<IDonneesSupportCommunication>;
        constructor(formulaire?: FormulaireAlertEcureuil);
        /**
         * Construction de l'objet alerte ecureuil.
         * @param {number} identifiantPersonne Identifiant personne
         * @param {string} codeGuichet Code Guichet
         * @param {FormulaireAlertEcureuil} formulaire Le formulaire qui servira à alimenter l'objet alerte ecureuil
         * @param {string} etatDemande L'état demande (Ouverture ou Modification)
         * @param {string} etatSolde L'état solde correspond à l'état de l'alerte solde dans le cas d'une substitution d'alerte,
         *                               c'est-à-dire un passage d'une alerte sur solde simple vers une alerte sur solde découvert, et vice-versa.
         */
        construireDonneesAlertEcureuil(identifiantPersonne: number, codeBanque: string, codeGuichet: string, numeroCompte: string, formulaire: FormulaireAlertEcureuil, etatDemande: string): void;
        private setAlerte(alerteDestinataire, alerteSource, etatDemande, etatSolde?);
        private alerteSurSoldeSeuilDecouvert(alerteDestinataire, formulaire);
        private construireListeDesSupports(listeAParcourir);
    }
}

declare module myway.c0410.alertEcureuil {
    interface IAlertEcureuilService {
        /**
         * Service permettant de récupérer la liste des comptes "alertables" détenus par une personne.
         * @param {string} codeBanque Le code banque de l'établissement bancaire
         * @param {number} identifiantPersonne L'identifiant de la personne titulaire du compte.
         *
         * @return {ng.IPromise<Modele.Alertecureuil.ICompteAlertable[]>} Une promesse contenant la liste des comptes "alertables" de la personne.
         */
        getListeComptesAlertables(codeBanque: string, identifiantPersonne: number): ng.IPromise<ICompteAlertable[]>;
        /**
         * Service permettant de récupérer la liste des supports de communications.
         * @param {string} codeBanque Le code banque de l'établissement bancaire
         * @param {number} identifiantPersonne L'identifiant de la personne titulaire du compte.
         * @param {string} codeFamille Le code famille de l'offre (Paramètre non obligatoire).
         * @param {number} codeProduitService Le code produit/service de l'offre (Paramètre non obligatoire).
         *
         * @return {ng.IPromise<Modele.Alertecureuil.ISupportCommunication[]>} Une promesse de la liste des supports de communcations de la personne.
         */
        getListeSupportsCommunication(codeBanque: string, identifiantPersonne: number, codeFamille?: string, codeProduitService?: number): ng.IPromise<ISupportCommunication[]>;
        /**
         * Service permettant de créer une alerte ecureuil.
         * @param {number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param {number} identifiantProduitService L'identifiant du produit service.
         * @param {Modele.Alertecureuil.DonneesAlertEcureuil} donneesAlertEcureuil L'objet alertEcureuil à enregistrer.
         *
         * @return {ng.IPromise<DonneesAlertEcureuil>} L'objet alertEcureuil créé.
         */
        creerOuModifierAlertEcureuil(numeroOffreSouscrite: number, identifiantProduitService: number, donneesAlertEcureuil: DonneesAlertEcureuil, operation: MyWay.Services.MethodEnum): ng.IPromise<DonneesAlertEcureuil>;
        /**
         * Service permettant de récupérer une alerte ecureuil.
         * @param {string} codeBanque Le code banque de l'établissement bancaire.
         * @param {number} identifiantPersonne L'identifiant personne.
         *
         * @return {ng.IPromise<DonneesAlertEcureuil>} L'objet alertEcureuil recherché.
         */
        getAlertEcureuil(codeBanque: string, identifiantPersonne: number): ng.IPromise<DonneesAlertEcureuil>;
        /**
         * Service permettant de clôturer une alerte ecureuil.
         * @param {number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param {number} identifiantProduitService L'identifiant du produit service.
         * @param {DonneesAlertEcureuil} donneesAlertEcureuil L'objet alertEcureuil à clôturer.
         *
         * @return {ng.IPromise<IDonneesAbonnement>} L'objet abonnementAlertEcureuil qui a été clôturé.
         */
        supprimerAlertEcureuil(numeroOffreSouscrite: number, identifiantProduitService: number, donneesAlertEcureuil: DonneesAlertEcureuil): ng.IPromise<IDonneesAbonnement>;
    }
}

declare module myway.c0410.alertEcureuil {
}
