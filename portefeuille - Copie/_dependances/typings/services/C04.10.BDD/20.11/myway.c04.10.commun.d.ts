
declare module myway.c0410.commun {
    var communModule: ng.IModule;
}

declare module myway.c0410.commun {
    class ObjetGenerique {
        identifiant: string;
        constructor(idgps?: string);
    }
    /**
     * Permet de reccupérer les messages d'erreur sur les formulaires
     */
    class StatutChampsFormulaire {
        protected _nomChamps: string;
        constructor(nomChamps: string);
        getMessageErreur(): string;
    }
    /**
     * Classe abstraite définissant la signature de base d'un formulaire dans BDD.
     * La méthode getInformationsChampsInvalidesFormulaire() est à implémenter selon les besoin du formulaire courant.
     * voir aussi commun.form.FormulaireExtended
     */
    class Formulaire extends ObjetGenerique {
        estModifie: boolean;
        constructor(idegps?: string);
        estValideChamps(champs: Object): boolean;
        estValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaire(): StatutChampsFormulaire[];
    }
    class DonneesCompte extends myway.c0410.commun.ObjetGenerique {
        static IDENTIFIANT_DONNEES_COMPTE: string;
        numeroDeCompte: string;
        codeGuichet: string;
        codeEtablissement: string;
        identifiantBordereau: string;
        constructor(numeroDeCompte: string, codeEtablissement?: string, codeGuichet?: string);
    }
    /**
     * Modèle representant les données de sauvegardes techniques des produits services. Ce modèle est composé de deux blocs:
     *  - donneesPrincipales: representent les données du produits service au sens Rest, il correspond à l'objet envoyé dans le POST/PUT du produit service
     *  - donneesSecondaires: Cet bloc represente les données techniques necessaires à la sauvegarde du produit. Exemple: operation financière pour le CDD
     */
    interface IDonneesSauvegardeTechniqueProduitService extends GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService {
        donneesPrincipales: GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService;
        donneesSecondaires: GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService;
    }
}

declare module myway.c0410.commun.form {
    /**
     * Permet de reccupérer les messages d'erreur sur les formulaires
     */
    class StatutChampsFormulaireExtended extends StatutChampsFormulaire {
        protected isMessageErreurPersonnalise: boolean;
        constructor(nomChamps: string, isMessageErreurPersonnalise?: boolean);
        getMessageErreur(): string;
        protected getLibelleMessageErreur(nomChamps?: string): string;
    }
    /**
     * Classe abstraite définissant la signature de base d'un formulaire dans BDD.
     * La méthode getInformationsChampsInvalidesFormulaire() est à implémenter selon les besoin du formulaire courant.
     */
    class FormulaireExtended extends ObjetGenerique {
        protected listeChamps: Array<ChampsFormulaire<Object>>;
        private _estModifie;
        constructor(idegps?: string);
        addChamps<T extends Object>(id: number, libelle: string, valeur?: T, estModifie?: boolean): void;
        getChamps(id: number): ChampsFormulaire<Object>;
        getValeurChamps(id: number): Object;
        setValeurChamps(id: number, valeur: Object): void;
        initValeurChamps(id: number, valeur: Object): void;
        estValideChamps(champs: Object): boolean;
        estValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaire(...args: any[]): StatutChampsFormulaire[];
        estModifie: boolean;
    }
    class ChampsFormulaire<T extends Object> {
        private id;
        private libelle;
        private valeur;
        private estModifie;
        constructor(id: number, libelle: string, valeur: T, estModifie?: boolean);
        isValide(): boolean;
        initValeur(valeur: T): void;
        setValeur(valeur: T): void;
        getValeur(): T;
        getLibelle(): string;
        setModifie(estModifie: boolean): void;
    }
}

declare module myway.c0410.commun {
    interface IListeMessageFonctionnel {
        code: string;
        libelle: string;
    }
    interface IContratLibreServiceEcureuil {
        codeEtablissementBanque: string;
        identifiantPersonne: number;
        contratCarte: IContratCarte[];
        listeMessageFonctionnel?: IListeMessageFonctionnel[];
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

declare module myway.c0410.commun {
    interface IMessageErreur extends ng.IPromise<string> {
        messageErreur: string;
    }
}

declare module myway.c0410.commun {
    class GestionnaireBilleterie {
        static getCoupure500(billeterie: MyWay.Model.Coupure): string;
        static getCoupure200(billeterie: MyWay.Model.Coupure): string;
        static getCoupure100(billeterie: MyWay.Model.Coupure): string;
        static getCoupure50(billeterie: MyWay.Model.Coupure): string;
        static getCoupure20(billeterie: MyWay.Model.Coupure): string;
        static getCoupure10(billeterie: MyWay.Model.Coupure): string;
        static getCoupure5(billeterie: MyWay.Model.Coupure, monnaieSansBillet: number): string;
        static getBilleterie(billeterie: myway.comOpesFinancieres.Model.SegmentBilleterie): string;
    }
}

declare module myway.c0410.commun {
    interface IPeriodicite {
        libellePeriodicite: string;
        codePeriodicite: string;
        nbOperationsAnnuelles?: number;
        nbMoisPeriodicite?: number;
    }
    class Periodicite {
        static QUINZAINE: IPeriodicite;
        static MENSUELLE: IPeriodicite;
        static TRIMESTRIELLE: IPeriodicite;
        static SEMESTRIELLE: IPeriodicite;
        static BIMENSUELLE: IPeriodicite;
        static HEBDOMADAIRE: IPeriodicite;
        static UNMOIS: IPeriodicite;
        static DEUXMOIS: IPeriodicite;
        static TROIXMOIS: IPeriodicite;
        static QUATREMOIS: IPeriodicite;
        static CINQMOIS: IPeriodicite;
        static SIXMOIS: IPeriodicite;
    }
}

declare module myway.c0410.commun {
    class ProduitServiceConstantes {
        static OUVERTURE: string;
        static AVENANT: string;
        static CLOTURE: string;
        static MODE_PRECEDENT: string;
    }
    /**
     * classe dont héritent tous les controleurs des PS
     */
    abstract class ProduitServiceControleur<F extends Formulaire | form.FormulaireExtended, D extends GestionGeneriqueOffres.Types.IDetenteur> {
        protected $q: ng.IQService;
        protected $scope: ng.IScope;
        protected compteBddCommunService: myway.c0410.commun.CompteBddCommunService;
        protected espaceGlobalService: commun.EspaceGlobalService;
        private service;
        idBloc: string;
        modeAcces: string;
        modeAffichage: string;
        contexteAppel: string;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        protected formulaire: F;
        protected formulaireRecapAvenant: F;
        protected identifiantFormulaire: string;
        protected donneesSauvegarde: IDonneesSauvegardeTechniqueProduitService;
        protected constructorTimer: ITimerServicePS;
        protected detenteur: D;
        protected idegps: number;
        protected psName: string;
        protected enModification: boolean;
        protected enOuverture: boolean;
        protected enCloture: boolean;
        protected enLectureSeule: boolean;
        protected enRecapitulatif: boolean;
        abstract getVueMDEC(): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        protected abstract getDonneesSauvegardeProduitService(): GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService;
        protected abstract initialiserEnOuverture(): ng.IPromise<boolean>;
        protected abstract initialiserEnAvenant(): ng.IPromise<boolean>;
        protected abstract initialiserEnCloture(): ng.IPromise<boolean>;
        abstract restaurerDossierDeVente(): ng.IPromise<boolean>;
        validerDonnees: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        miseEnGestionPostProd: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestionPostProducteur;
        demanderDebranchementPreEditiqueVpc: GestionGeneriqueOffres.Types.IPointEntreeDemanderDebranchementPreEditiqueVpc;
        constructor($q: ng.IQService, $scope: ng.IScope, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, espaceGlobalService: commun.EspaceGlobalService, service: ProduitService);
        protected getIdegps(): number;
        protected determinerMode(mode: string): void;
        protected initialiserComposant(): ng.IPromise<void>;
        private initialiser();
        protected initPointEntree(): void;
        private chargementTermine();
        hasModifieChamps(nomChamps: string): boolean;
        afficherDirectiveEnPerso(): boolean;
        afficherDirectiveEnRecap(): boolean;
        pointEntreeFonctionSauvegarde: GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde;
        /**
         * Permet de sauvergarder le formulaire de saisie du P/S dans le dossier de vente,
         * @Param: l'identifiant du dossier de vente
         * @Retrun: un object contenant deux blocs:
         *           1- la vue myway c'est à dire le formulaire saisie
         *           2- la vue MDEC qui correspond à une vue resumée du formulaire
         */
        protected sauvegarderDossierDeVente(): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>;
        protected doitSauvegarderDonneesMDEC(): boolean;
        /**
         * Permet de recharger le P/S en recap directement en se basant sur les données du dossier de vente
         */
        rechargerRecapVPC(): ng.IPromise<boolean>;
        private getLogMessage(message);
    }
    abstract class EmptyProduitServiceControleur<F extends Formulaire | form.FormulaireExtended, D extends GestionGeneriqueOffres.Types.IDetenteur> extends ProduitServiceControleur<F, D> {
        protected determinerMode(mode: string): void;
        protected initialiserEnOuverture(): ng.IPromise<boolean>;
        protected initialiserEnAvenant(): ng.IPromise<boolean>;
        protected initialiserEnCloture(): ng.IPromise<boolean>;
        protected init(): ng.IPromise<boolean>;
    }
}

declare module myway.c0410.commun {
    function mwProduitService(): ng.IDirective;
}

declare module myway.c0410.commun {
    /**
     * classe dont héritent tous les services des PS
     * et qui implémente les timers
     */
    class ProduitService {
        private timers;
        constructor();
        initTimer(libelle: string, verbe?: string, url?: string): ITimerServicePS;
        updateTimer(timer: ITimerServicePS): ITimerServicePS;
        getTimers: () => ITimerServicePS[];
    }
}

declare module myway.c0410.commun {
    interface IReleveNumeriquePersonne {
        numeroPersonne: number;
        typeDeSouscription: string;
        codeCanalGestion: string;
        codeEtatDuService: string;
        /**
         *   COCXBQ code banque pour le relevé numérique
         */
        codeEtablissementBanque: string;
        /**
         *   1 => service souscrit
         *   2 => service non souscrit et disponible
         *   3 => service non souscrit et non disponible
         *   4 => service non souscrit et non disponible car pas abonnement BAD
         */
        sousCodeEtatService: string;
        /**
         * cette donnée sera alimenté si un sous code état 3 est présent, ce libellé est necessaire a l'iHM pour avertir pourquoi la personne ne peut avoir de relevenumérique
         */
        libelleEtatService: string;
    }
}

declare module myway.c0410.commun {
    interface IResultatsCommerciaux {
        /**
         * Numéro d'identification de la personne dans le système d'information d'un Etablissement
         */
        identifiantPersonne: number;
        /**
         * Valeurs possibles :
         * 1        Résultat comptable
         * 2        Résultat sur échéancier
         * 3        Résultat sur équipement
         * 4        Résultat sur crédit
         * 5        Résultat sur les valeurs mobilières et les bons
         * 6        Résultat sur immobilier
         * 7        Résultat sur CRA
         * 8        Résultat réaction GERC sur produit
         */
        codeTypeFamilleResultat: string;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         */
        identifiantProduitService: number;
        /**
         * Valeurs possibles :
         * 0        Normale
         * 3        Annulation
         */
        codeNatureResultatCommercial: string;
        /**
         * cf REST_IT pour description
         */
        codeTypeResultatCommercial: string;
        /**
         * Catégorie de gestion du produit/service.
         */
        codeTypeProduitService: string;
        /**
         * Valeurs possibles :
         * 1        résultat rattachable à un CRE
         * 0        résultat non rattachable à un CRE
         */
        indicRattachableCRE: string;
        /**
         * Type de produit ou service pour la nomenclature commerciale
         */
        codeTypeProduitServiceGCP: string;
        /**
         * Indique l'origine des fonds pour une opération comptable
         * 0          Fonds internes
         * 1          Fonds externes
         */
        codeOrigineFonds: number;
        /**
         * Montant en centimes d'euro
         */
        montantResultatCommercial: number;
        /**
         * Détermine si le livret est géré avec un support (matérialisé) ou avec une tenue de compte (dématérialisé)
         * 0        Support Livret
         * 1        Relevés de Comptes
         */
        codeModeGestionLivret: string;
        /**
         * Détermine une variante ou une version de produit service dans le Catalogue avec des caractéristiques spécifiques.
         * Concerne essentiellement des P/S de dépot-épargne
         */
        sousCodeProduitService: string;
        /**
         * Détermine le type de carte : produit au catalogue du progiciel TIM
         */
        codeProduitCarte: string;
        /**
         * Mode financier avec lequel est passée l'opération
         * ESP      Espèces
         * CHQ      Chèque
         * VIR      Virement interne
         * DIV      Divers
         * AUT      Automatique
         * VIO      Virement opération diverse
         * CHC      Chèque CNCE émis
         * CHB      Chèque de banque émis
         */
        codeModeFinancier: string;
        /**
         * Indique le caractère Forfaitaire ou Unitaire d'une offre
         * F        Forfaitaire
         * U        Unitaire
         */
        codeCaractereForfaitaireOffre: string;
        /**
         * Indique si la souscription d'un P/S est obligatoire dans une Offre.
         * O        P/S Obligatoire
         * F        P/S Facultatif
         */
        indicProduitServiceObligatoire: string;
    }
    class ResultatsCommerciaux {
        private _identifiantPersonne;
        identifiantPersonne: number;
        private _codeTypeFamilleResultat;
        codeTypeFamilleResultat: string;
        private _identifiantProduitService;
        identifiantProduitService: number;
        private _codeNatureResultatCommercial;
        codeNatureResultatCommercial: string;
        private _codeTypeResultatCommercial;
        codeTypeResultatCommercial: string;
        private _codeTypeProduitService;
        codeTypeProduitService: string;
        private _indicRattachableCRE;
        indicRattachableCRE: string;
        private _codeTypeProduitServiceGCP;
        codeTypeProduitServiceGCP: string;
        private _codeOrigineFonds;
        codeOrigineFonds: number;
        private _montantResultatCommercial;
        montantResultatCommercial: number;
        private _codeModeGestionLivret;
        codeModeGestionLivret: string;
        private _sousCodeProduitService;
        sousCodeProduitService: string;
        private _codeProduitCarte;
        codeProduitCarte: string;
        private _codeModeFinancier;
        codeModeFinancier: string;
        private _codeCaractereForfaitaireOffre;
        codeCaractereForfaitaireOffre: string;
        private _indicProduitServiceObligatoire;
        indicProduitServiceObligatoire: string;
        constructor(resultat: IResultatsCommerciaux);
    }
}

declare module myway.c0410.commun {
    class DonneesMDEC {
        blocs: BlocMDEC[];
    }
    class BlocMDEC {
        sections: SectionMDEC[];
    }
    class SectionMDEC {
        nomSection: string;
        champs: ChampsMDEC[];
    }
    class ChampsMDEC {
        libelle: string;
        valeur: string;
        constructor(libelle: string, valeur: string);
    }
    /**
     * Interface representant les données de sauvegarde de l'ensemble des produits services
     * Cette interface doit être implémentée par tous les formulaires, cela permet à chaque produit de
     * retourner ses données de sauvarde au dossier de vente à distance
     */
    interface IDonneeSauvegardeProduitService {
        identifiant: string;
    }
    interface ISauvegardeDonneesProduitService {
        /**
         * Methode implementée par le formulaire de chaque produit service permetttant de retouner les données de sauvegarde de ce dernier
         * @return {IDonneeSauvegardeProduitService} interface etendue par chaque produit service permettant de recuperer les données de sauvegarde de ce dernier
         */
        getDonneesSauvegardeProduitService(): IDonneeSauvegardeProduitService;
        /**
         * Methode implementée par le formualaire de chaque produit service permettant de restaurer ce dernier à partir des données de sauvergarde
         * @param: {IDonneeSauvegardeProduitService} données de restauration
         * @return : {GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]} une liste de message d'erreur permettant d'indiquer si le rechargement s'est bien passé
         */
        restaureDonneesSauvegardeProduitService(donneeSauvegardeProduitService: IDonneeSauvegardeProduitService): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
    }
}

/**
 * Ce service référence toutes les fonctionnalités du bloc commun de c04.10
 */
declare module myway.c0410.commun {
    interface ITimerServicePS {
        libelle: string;
        verbe?: string;
        noyau?: string;
        ressource?: string;
        timeStart: number;
        timeEnd: number;
        duration: number;
    }
    interface IPromiseCache {
        id: string;
        promise: ng.IPromise<any>;
    }
    class CompteBddCommunService {
        private serviceAgentExtended;
        private $q;
        private serviceTrace;
        static $inject: string[];
        private _listeRequeteEncours;
        private cacheConstantes;
        private _listePromise;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, serviceTrace: myway.c0410.commun.ServiceTrace);
        /**
         * Notifie à GGO que le chargement des données du controleur est terminé afin d'arrêter le spinner sur l'ihm
         */
        notifierChargementTermine(scope: ng.IScope, idBloc: string): void;
        /**
         * Permet de filtrer et de récupérer les caractéristiques du produit/ service à partir du tableau fourni par GGO
         */
        filtrerReferencesProduit(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.ReferenceProduit;
        /**
         * Permet de faire une mise en gestion OK sans mise à jour
         */
        CompteRenduMiseEnGestionSansModifier(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Permet de recupérer les données délocalisées
         */
        getDonneesDelocalisees(codeEtablissement: string, codeServiceBadTableDelocalise: string, produit: any): ng.IPromise<any>;
        finRequeteEncours(nomRequete: string): void;
        ajouterRequeteEncours(nomRequete: string, promise?: MyWay.Services.IPromesse<any>, produit?: string): void;
        existRequeteEncours(produit: string): boolean;
        /**
         * Permet de stocker une promise afin de ne pas effectuer des appels REST identiques
         */
        stockerPromise(url: string, promise: IPromiseCache): any;
        getPromise(url: string, params: any): any;
        genererIdPromise(url: string, params: any): string;
    }
}

declare module myway.c0410.commun {
    class DonneesBadService {
        private _typeService;
        private _servicePopup;
        constructor();
        typeService: string;
        servicePopup: boolean;
    }
}

declare module myway.c0410.commun {
    class DonneesEngagementClientService {
        private _codeEtablissement;
        private _identifiantProduitService;
        private _indicateurEngagementDom;
        private _montantEngagementDom;
        private _indicateurEngagementEpargne;
        private _montantEngagementEpargne;
        constructor();
        codeEtablissement: string;
        identifiantProduitService: number;
        indicateurEngagementDom: boolean;
        montantEngagementDom: number;
        indicateurEngagementEpargne: boolean;
        montantEngagementEpargne: number;
    }
}

declare module myway.c0410.commun {
    class DonneesEngagementDomService {
        private _montantEngagement;
        private _periodicite;
        constructor();
        montantEngagement: number;
        periodicite: number;
    }
}

/**
 * Ce service commun est partagé en le Compte de depot et le LSE, il permet de recupérer et de modifier un LSE
 */
declare module myway.c0410.commun {
    class LibreServiceEcureuilCommunService extends myway.c0410.commun.ProduitService {
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private _listeRequeteEncours;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête GET
         * Permet de récupérer un contrat Libre service ecureuil existant
         * @return promise<Libre service ecureuil>
         */
        recupererLibreServiceEcureuil(codeEtablissementBanque: string, personneEnRelation: number, dateNaissancePersonne: Date): ng.IPromise<IContratLibreServiceEcureuil>;
        /**
         * Requête POST
         * Permet de créer un contrat Libre service ecureuil
         * @return promise<Libre service ecureuil>
         */
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
        private finRequeteEncours(nomRequete);
        private ajouterRequeteEncours(nomRequete);
        existRequeteEncours(): boolean;
    }
}

declare module myway.c0410.commun {
    class EspaceGlobalService {
        private $parse;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($parse: ng.IParseService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private structureObjetGenerique;
        private donneesCompte;
        /**
         * Permet d'ajouter un object generique à la liste des objets
         */
        enregistrerObjetGenerique(objetGenerique: ObjetGenerique): void;
        /**
         * Permet de recuperer le formulaire à travers l'idgps de produit
         */
        getObjetGenerique(identifiant: string): ObjetGenerique;
        /**
         * Cette fonction permet de verifier si la valeur d'un champs a été modifiée
         */
        hasModifieChamps(nomChamps: string, formulaireAncien: ObjetGenerique, formulaireNouveau: ObjetGenerique): boolean;
        /**
         * return une liste contenant tous les objects géneriques enrégistrés
         */
        getListeObjetsGeneriques(): ObjetGenerique[];
        /**
         * Permet d'extraire les references du contrat dans le dossier de vente. Cette est utilisée pour le rechargement direct en RECAP
         * lors de la VPC
         * @param dossierVente
         */
        getDonneesContratDepuisDossierVente(dossierVente: GestionGeneriqueOffres.Types.DossierDeVente.GestionDossierVente): DonneesCompte;
        /**
         * Permet de recuperer les données du compte dans le contexte global de l'application. Si les données ne sont pas valorisée elle va chercher dans
         * le dossier de vente
         * @param contexte
         */
        getDonneesCompte(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): DonneesCompte;
        supprimerObjetGenerique(identifiant: string): void;
    }
}

declare module myway.c0410.commun {
    class ReleveNumeriqueService extends myway.c0410.commun.ProduitService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceReleveNumeriqueUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *  Requête GET
         *  Permet de récupérer un releve numerique existant-
         *  Cette méthode retournera l'état du bouton checkbox :
         *    1 => bouton apparent et coché
         *    2 => bouton apparent non coché
         *    3 => bouton non apparent
         *    4 => bouton apparent ou non selon si BAD souscrit durant l'ouverture
         *  @return promise<ReleveNumerique>
         */
        getReleveNumerique(codeEtablissementBancaire: string, numeroPersonne: number, typeDeSouscription: string): ng.IPromise<IReleveNumeriquePersonne>;
        /**
         *  Requête POST
         *  Permet de créer un releve numérique
         *  @return promise<IReleveNumeriquePersonne>
         */
        creerReleveNumerique(releveNumeriquePersonne: IReleveNumeriquePersonne, numeroOffreSouscrite: number): ng.IPromise<IReleveNumeriquePersonne>;
        /**
         *  Requête DELETE
         *  Permet de supprimer un releve numérique
         *  @return promise<IReleveNumeriquePersonne>
         */
        supprimerReleveDeCompteNumerique(releveNumeriquePersonne: IReleveNumeriquePersonne): ng.IPromise<IReleveNumeriquePersonne>;
    }
}

declare module myway.c0410.commun {
    class ReservationNumeroCompteService {
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        private affectationRadicalService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: EspaceGlobalService, affectationRadicalService: myway.comInterdomaine.AffectationRadicalService);
        isNumeroDeCompteReserve(): boolean;
        reserverNumeroDeCompte(codeTypeProduitService: string, codeEtablissement: string, codeGuichetInterbancaire: string): ng.IPromise<string>;
    }
}

declare module myway.c0410.commun {
    class ResultsCommerciauxService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceResultatsCommerciauxUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *  Requête POST
         *  Permet de mettre à jour les resultats commerciaux
         *  @return promise<IResultatsCommerciaux>
         */
        mettreAJourResultatsCommerciaux(resultatCommeciaux: IResultatsCommerciaux): ng.IPromise<IResultatsCommerciaux>;
    }
}

declare module myway.c0410.commun {
    const enum LogType {
        DEBUG = 1,
        ERROR = 2,
        INFO = 3,
        WARNING = 4,
    }
    interface IServiceTrace {
        debug(message: string, action?: any, object?: any): void;
        error(message: string, action?: any, object?: any): void;
        info(message: string, action?: any, object?: any): void;
        warn(message: string, action?: any, object?: any): void;
        warning(message: string, action?: any, object?: any): void;
        historiqueLog: string;
    }
    class ServiceTrace {
        private static CLASS_NAME;
        private static logger;
        private _logType;
        private colors;
        private objectenfragement;
        historiqueLog: string;
        private maxSizeObject;
        private nombrefragement;
        private tabError;
        constructor();
        /**
         * Méthode d'affichage des logs dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        log(message?: string, object?: any, logType?: string): void;
        /**
         * Méthode d'affichage des logs en mode DEBUG dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        debug(message: string, object?: any): void;
        /**
         * Méthode d'affichage des logs en mode ERROR dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        error(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode INFO dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        info(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warning(message: string, object?: any): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warn(message: string, object?: any): void;
        traceServiceLogger(logType: string, message: string, object?: any): void;
        private getTime();
        clearHistoriqueLog(): void;
        logType: string;
        /**
         * Méthode qui stringify un objet
         * @param {any} object
         * @return {string} //
         */
        private objectToString(object);
        /**
         * Méthode qui test si la taille de l'objet depasse la limite Max dans ce cas l'bjet est fragmentè et les fragement sont mis dans un tableau
         * @method
         * @param {string} object
         * @return {string[]}
         */
        private objetToFragment(object);
        sauvgardeErreurProduit(err: any, idBloc: String): void;
        getTabError(): any[];
    }
}
