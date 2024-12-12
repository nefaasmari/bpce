
declare module myway.c0410.commun {
    var communModule: ng.IModule;
}

declare module myway.c0410.commun {
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

declare module myway.c0410.commun {
    interface IMessageErreur extends ng.IPromise<string> {
        messageErreur: string;
    }
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
        private _nomChamps;
        constructor(nomChamps: string);
        getMessageErreur(): string;
    }
    /**
     * Classe abstraite définissant la signature de base d'un formulaire dans BDD.
     * La méthode getInformationsChampsInvalidesFormulaire() est à implémenter selon les besoin du formulaire courant.
     */
    class Formulaire extends ObjetGenerique {
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
    class CompteBddCommunService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
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
    class LibreServiceEcureuilCommunService {
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
        supprimerObjetGenerique(identifiant: string): void;
    }
}

declare module myway.c0410.commun {
    class ReleveNumeriqueService {
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
