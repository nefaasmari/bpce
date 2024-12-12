
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
        /**
         * Injection des dépendances du controleur
         */
        static $inject: string[];
        static AV: string;
        static OU: string;
        static CL: string;
        static MESSAGE_ERREUR_OUVERTURE: string;
        static MESSAGE_ERREUR_CLOTURE: string;
        compte: string;
        destinataires: string;
        verifierCoordonnees: string;
        envoiDeSolde: string;
        tousLes: string;
        alerteSurSolde: string;
        decouvert: string;
        montantDuSolde: string;
        alerteSurEncoursCB: string;
        montantMinimumEncours: string;
        alerteSurOperationCreditrice: string;
        montantMinimumOperation: string;
        devise: string;
        messageMontantNegatif: string;
        messageMontantInferieurADix: string;
        message: string;
        recapDestinataire: string;
        recapCompte: string;
        recapChoixDecouvert: string;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        private codeEtat;
        private identifiantPersonne;
        private donneesCompte;
        private contexte;
        donneesSauvegardeAlerteEcureuil: myway.c0410.commun.IDonneesSauvegardeTechniqueProduitService;
        private codeProduitService;
        private codeActeGestion;
        private idBloc;
        formulaireAlertEcureuil: FormulaireAlertEcureuil;
        formulaireAvenantOuRecap: FormulaireAlertEcureuil;
        donneesAlertEcureuil: DonneesAlertEcureuil;
        identifiantFormulaire: string;
        idFormulaireRecapAvenant: string;
        estMontantCrediteurNegatif: boolean;
        estMontantEncoursCBNegatif: boolean;
        infobulleMessageAlerteSurSolde: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        contexteAppel: string;
        MODE_PRECEDENT: string;
        infobulleMessageAlerteEncourCB: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, alertEcureuilService: IAlertEcureuilService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        /**
         * Permet de savoir si la directive est appelée en modification (Avenant) ou en ouverture
         * @param {string} le mode de lancement de la directive
         */
        private determinerMode(mode);
        /**
         * Récupération de la liste des comptes "alertables"
         * @returns {ng.IPromise<void>}
         */
        private initListeDesComptes();
        /**
         * Récupération de la liste des supports de communication.
         * @returns {ng.IPromise<void>}
         */
        private initListeDesSupportsCommunication();
        /**
         * Validation des données du formulaire alerte ecureuil.
         * @returns  {ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>}
         */
        validerDonneesAlertEcureuil: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Permet de faire la mise en gestion les données d'une alerte ecureuil: cela correspond soit à une ouverture, un avenant ou une cloture
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion}
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Appel du service alertEcureuil pour enregistrer l'alerte ecureuil créé.
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>}
         */
        private enregistrerAlertEcureuil();
        /**
         * Permet de sauvergarder le formulaire de saisie du produit AlertEcureuil dans le dossier de vente,
         * @Param: l'identifiant du dossier de vente
         * @Retrun: un object contenant deux blocs:
         *           1- la vue myway c'est à dire le formulaire saisie
         *           2- la vue MDEC qui correspond à une vue resumée du formulaire
         */
        sauvergarderDossierDeVente: GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde;
        /**
         * Permet de recuperer les données de sauvegarde de l'alerte ecureuil
         */
        private getDonneesSauvegardeProduitService();
        /**
         * Permet de restaurer le dossier de vente à l'etat avant la dernière sauvegarde
         * @Param:
         * @Return:
         */
        restaurerDossierDeVente(): void;
        getVueMDEC(): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        /**
         * Détermine l'opération à effectuer selon le code etat (O = ouverture (POST) et M = avenant (PUT))
         * @returns {MyWay.Services.MethodEnum}
         */
        private getOperationByCodeMode();
        /**
         * Met à jour l'objet donneesAlertEcureuil avec celui récupéré par le service alertEcureuil.
         * @returns {ng.IPromise<void>}
         */
        private initialiserDonneesEtFormulaireEnAvenant();
        /**
         * Permet remplir les champs du formulaire à partir des données de l'alerte ecureuil
         */
        private creerFormulaireAlertEcureuil(donneesAlertEcureuil, isVadMode);
        /**
         * Appel du service alerte ecureuil pour supprimer un abonnement alerte ecureuil.
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>}
         */
        private supprimerAlertEcureuil();
        /**
         * Cette fonction permet de detecter si un champs d'un formulaire à été modifié
         * @param {string} nomChamps
         * @returns {boolean}
         */
        hasModifieChamps(nomChamps: string): boolean;
        /**
         * Controle si la valeur du montant du solde est défini
         * @returns {boolean}
         */
        checkEstMontantDuSoldeVide(): boolean;
        checkEstMontantCrediteurInfADix(): boolean;
        checkEstMontantCrediteurVide(): boolean;
        checkEstMontantEncoursCBVide(): boolean;
        estCompteModifiable(): boolean;
    }
}

declare module myway.c0410.alertEcureuil {
    function mwaeAlertecureuil(): ng.IDirective;
}

declare module myway.c0410.alertEcureuil {
    /**
     * Représentation d'un jour dans le formulaire.
     */
    class Jour extends MyWay.Services.StringEnum {
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
        N,
    }
    /**
     * Représentation d'un compte "alertable" dans le formulaire.
     */
    interface ICompteAlertable {
        numeroCompteAlerte: string;
        designationBancaireCourte?: string;
        ligneCompte?: string;
    }
    /**
     * Représentation d'un support de communication dans le formulaire.
     */
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
    /**
     * Représentation d'un formulaire d'alertEcureuil.
     */
    class FormulaireAlertEcureuil extends myway.c0410.commun.Formulaire implements MyWay.UI.ISelectionChangeHandler {
        static COMPTE_COURANT: ICompteAlertable;
        static TELEPHONE: string;
        static NOM: string;
        static STATUT: string;
        static MONTANT: string;
        static DECOUVERT: string;
        numeroAbonnement: string;
        listeDesComptes: ICompteAlertable[];
        supportsTableOptions: MyWay.UI.ImwTableOptions;
        listeDesSupportsCommunication: ISupportCommunication[];
        compteSelectionne: ICompteAlertable;
        supportsSelectionnes: ISupportCommunication[];
        listeFrequence: Jour[];
        private _alerteEnvoiSolde;
        private _alerteSurSolde;
        private _alerteEnCoursCB;
        private _alerteSurOperationCreditrice;
        isMultiSupport: boolean;
        private _choixAlerteSurSolde;
        etatAlerteSurSolde: string;
        mwsfScope: myway.comInterdomaine.IMwsfMontantScope;
        _alerteEcureuilModifier: boolean;
        alerteEcureuilModifier: boolean;
        /**
         * Alerte envoi de solde
         * @returns {IAlerte}
         */
        alerteEnvoiSolde: IAlerte;
        /**
         * Alerte envoi de solde Selectionne
         * @returns {boolean}
         */
        alerteEnvoiSoldeSelectionne: boolean;
        /**
         * Alerte envoi de solde Jour
         * @returns {Jour}
         */
        alerteEnvoiSoldejourSelectionne: Jour;
        /**
         * Alerte Sur Solde
         * @returns {IAlerte}
         */
        alerteSurSolde: IAlerte;
        /**
         * Alerte Sur Solde Selectionne
         * @returns {boolean}
         */
        alerteSurSoldeSelectionne: boolean;
        /**
         * Alerte Sur Solde Montant
         * @return {number}
         */
        alerteSurSoldeMontant: number;
        /**
         * Alerte Sur Solde Choix sur Solde
         * @returns {string}
         */
        choixAlerteSurSolde: string;
        alerteEnCoursCB: IAlerte;
        /**
         * Alerte sur encours CB Selectionne
         */
        alerteEnCoursCBSelectionne: boolean;
        /**
         * Alerte sur encours CB Montant
         * @returns {number}
         */
        alerteEnCoursCBMontant: number;
        /**
         * Alerte sur opération débitrice
         * @returns {IAlerte}
         */
        alerteSurOperationCreditrice: IAlerte;
        /**
         * Alerte sur opération débitriceSelectionne
         * @returns {boolean}
         */
        alerteSurOperationCreditriceSelectionne: boolean;
        /**
         * Alerte sur opération Montant
         * @returns {number}
         */
        alerteSurOperationCreditriceMontant: number;
        constructor(identifiantFormulaire: string);
        /**
         * Construit un formulaire à l'état des données d'une alerte ecureuil.
         * @param {DonneesAlertEcureuil} donneesAlertEcureuil
         * @returns {void}
         */
        setDonneesFormulaireEnAvenant(donneesAlertEcureuil: DonneesAlertEcureuil, isVadMode: boolean): void;
        /**
         * Mapping des données alertes vers celles correspondantes dans le formulaire.
         * @params {IAlerte} alerteDestinataire
         * @params {DonneesAlerte} alerteSource
         * @returns {void}
         */
        private setAlerte(alerteDestinataire, alerteSource);
        /**
         * On désélectionne toutes les alertes
         * @return {void}
         */
        private resetAlertesSelectionnes();
        /**
         * Fonction qui permet de déterminer si une alerte est vide ou non.
         * @params {DonneesAlerte} alerte
         * @returns {boolean}
         */
        isAlertVide(alerte: DonneesAlerte): boolean;
        isAucuneAlerte(compteAlertable: DonneesCompteAlertable): boolean;
        /**
         * Fonction qui permet de déterminer l'état de l'alerte sur solde d'un formulaire
         * @returns {void}
         */
        setEtatAlerteSurSolde(): void;
        /**
         * Retourne true si le choix montant est fait et false si découvert.
         * @returns {boolean}
         */
        estChoixMontant(): boolean;
        estCompteDeOffre(): boolean;
        /**
         * retourne true si aucun destinataire n'a été choisi ou tous bloqués
         * @returns {boolean}
         */
        estDestinatairesBloquesOuNonChoisi(): boolean;
        /**
         * recupère le libellé du compte à afficher en récapitulatif
         * @returns {string}
         */
        getLibelleCompte(): string;
        /**
         * Récupération de la liste des champs invalides
         * @param {string} codeEtat: optionnel
         * @returns {myway.c0410.commun.StatutChampsFormulaire[]}
         */
        getInformationsChampsInvalidesFormulaire(codeEtat?: string): myway.c0410.commun.StatutChampsFormulaire[];
        /**
         * Initilaisation des options de la table des supports
         * @returns {void}
         */
        initialiserTableauDesSupports(): void;
        /**
         * Initialisation des colonnes de la table des supports.
         * @returns { MyWay.UI.ImwTableColumnOptions[]}
         */
        private getTableSupportsColonnes();
        onSelectionChange(selection: ISupportCommunication): void;
        /**
         * Fonction permettant de retourner les données de sauvegarde de l'Alerte Ecureuil
         */
        getDonneesSauvegardeProduitService(): GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService;
    }
}

declare module myway.c0410.alertEcureuil {
    interface IDonneesAbonnement {
        numeroAbonnementAlerte: string;
        identifiantPersonne: number;
        etatAbonnementEnCours: string;
        etatAbonnementDemande: string;
        multiSupport: boolean;
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
    /**
     * Representation d'un objet alerte ecureuil.
     */
    class DonneesAlertEcureuil {
        codeBanque: string;
        codeGuichet: string;
        numeroCompte: string;
        abonnementAlertEcureuil: IDonneesAbonnement;
        listeComptesAlertables: Array<DonneesCompteAlertable>;
        listeSupportsCommunication: Array<IDonneesSupportCommunication>;
        constructor(formulaire?: FormulaireAlertEcureuil);
    }
    class DonneesAlertEcureuilUtils {
        /**
         * Construction de l'objet alerte ecureuil.
         * @param {number} identifiantPersonne Identifiant personne
         * @param {string} codeGuichet Code Guichet
         * @param {FormulaireAlertEcureuil} formulaire Le formulaire qui servira à alimenter l'objet alerte ecureuil
         * @param {string} etatDemande L'état demande (Ouverture ou Modification)
         * @param {string} etatSolde L'état solde correspond à l'état de l'alerte solde dans le cas d'une substitution d'alerte,
         *                               c'est-à-dire un passage d'une alerte sur solde simple vers une alerte sur solde découvert, et vice-versa.
         */
        static construireDonneesAlertEcureuil(donneesAlertEcureuil: DonneesAlertEcureuil, identifiantPersonne: number, codeBanque: string, codeGuichet: string, numeroCompte: string, formulaire: FormulaireAlertEcureuil, etatDemande: string): void;
        /**
         *
         */
        static reconstruireSupportEnModeVad(listeSupportsCommunication: ISupportCommunication[], supportsSelectionnes: ISupportCommunication[]): IDonneesSupportCommunication[];
        /**
         * Construction d'une alerte avec l'alerte du formulaire.
         * @param {DonneesAlerte} alerteDestinataire
         * @param {IAlerte} alerteSource
         * @param {string} etatDemande
         * @param {string} etatSolde: optionnel
         * @retusns {void}
         */
        private static setAlerte(alerteDestinataire, alerteSource, etatDemande, etatSolde?);
        private static alerteSurSoldeSeuilDecouvert(alerteDestinataire, formulaire);
        /**
         * Construction de la liste des supports de communication
         * @param {IDonneesSupportCommunication[]} listeSupportsCommunication
         * @param {ISupportCommunication[]} listeAParcourir
         * @returns {void}
         */
        private static construireListeDesSupports(listeSupportsCommunication, listeAParcourir);
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
