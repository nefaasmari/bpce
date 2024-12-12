
declare module et.osclien.decouver.decouvertGgho {
    var app: any;
}

declare module et.osclien.decouver.decouvertGgho {
    class DecouvertOuvertureControleur {
        protected $scope: ng.IScope;
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected contexteProcessusService: ContexteProcessusService;
        protected decouvertNegocieOuvertureService: DecouvertNegocieOuvertureService;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        contexteAppel: string;
        codeActeGestion: string;
        idBloc: string;
        modeAcces: string;
        modeAffichage: string;
        estInitialise: boolean;
        donneesOuverture: DonneesOuvertureDecouvert;
        isDecouvertDegressif: boolean;
        libellePeriodiciteDND: string;
        dateOuverture: string;
        dateFin: string;
        contratCompteSupport: MyWay.Model.Contrat;
        libelleCompte: string;
        static MESSAGE_ERREUR_OUVERTURE: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteProcessusService: ContexteProcessusService, decouvertNegocieOuvertureService: DecouvertNegocieOuvertureService);
        protected associerBoutonGGHOavecFonctionControleur(): void;
        validerDonneesPourOuverture: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        realiserLaMiseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        sauvegarderDossierDeVente: GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde;
        initDonneesCompteSupport(): void;
        formatLibelleCompte(rice: string): void;
        private enregistrerDecouvertNegocie();
    }
}

declare module et.osclien.decouver.decouvertGgho {
    /**
     * Composant de découvert pour intégration à GGHO
     */
    function mwDecouvertOuverture(): ng.IDirective;
}

declare module et.osclien.decouver.decouvertGgho {
    /**
     * Données nécessaire à l'ouverture d'un découvert
     */
    class IDonneesOuvertureDecouvert {
        /**
         * Identifiant du découvert commercialisé
         */
        idtDecouvertCommercialise: number;
        /**
         * Le montant du découvert
         */
        montantDecouvert: number;
        /**
         * Code monnaie tenue compte
         */
        codeMonnaieTenueCompte: string;
        /**
         * La durée du découvert
         */
        dureeDecouvertNegocie: number;
        /**
         * Valeur Taux client
         */
        valeurTauxClient: number;
        /**
         * Marge sur taux de référence
         */
        margeSurTauxDeReference: number;
        /**
         * Mt frais / découvert
         */
        montantFraisDecouvert: number;
        /**
         * Valeur TAEG Découvert
         */
        valeurTAEGDecouvert: number;
        /**
         * Note Bale2 réduite
         */
        noteBale2Reduite: string;
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService: number;
        /**
         * Nom Commercial P/S
         */
        nomCommercialPS: string;
        /**
         * Durée en mois paliers DND
         */
        dureeEnMoisPaliersDND: number;
        /**
         * Montant palier DND
         */
        montantPalierDND: number;
        /**
         * Numéro de l'offre souscrite
         */
        numeroOffreSouscrite: number;
        /**
         * Sous code catégorie découvert
         */
        sousCodeCategorieDecouvert: string;
        /**
         * Type d'éditique ("p" = plus de 30 jours ou "S" = simplifié moins de 30 jouurs)
         */
        typeEditique: string;
        /**
         * RICE
         */
        rice: string;
    }
    class DonneesOuvertureDecouvert implements IDonneesOuvertureDecouvert {
        idtDecouvertCommercialise: number;
        montantDecouvert: number;
        codeMonnaieTenueCompte: string;
        dureeDecouvertNegocie: number;
        valeurTauxClient: number;
        margeSurTauxDeReference: number;
        montantFraisDecouvert: number;
        valeurTAEGDecouvert: number;
        noteBale2Reduite: string;
        identifiantProduitService: number;
        nomCommercialPS: string;
        dureeEnMoisPaliersDND: number;
        montantPalierDND: number;
        numeroOffreSouscrite: number;
        sousCodeCategorieDecouvert: string;
        typeEditique: string;
        rice: string;
        constructor();
    }
}

declare module et.osclien.decouver.decouvertGgho {
    /**
     * Service de gestion des données d'ourverture
     */
    class ContexteProcessusService {
        private $q;
        private serviceAgentExtended;
        private dossierVenteService;
        static $inject: string[];
        /**
         * Objet de donnees contextuelles
         */
        private donneesDecouvert;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dossierVenteService: DossierVenteService);
        /**
         * Instancie l'objet de données Découvert
         * @returns {ng.IPromise<DonneesOuvertureQuadreto>}
         */
        getDonneesDecouvert(): ng.IPromise<DonneesOuvertureDecouvert>;
    }
}

declare module et.osclien.decouver.decouvertGgho {
    /**
     * Données nécessaire à l'ouverture d'un découvert
     */
    interface IDecouvertNegocie {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Le code guichet
         */
        codeGuichet: string;
        /**
         * Numéro d'identification d'un compte géré par un Etablissement
         */
        numeroCompte: string;
        /**
         * Numéro d'identification d'un service de découvert. au catalogue commercial
         */
        identifiantDecouvertCatalogue: number;
        /**
         * Date de création initiale du découvert client
         * Type date au format yyyy-MM-dd
         */
        dateDebutDecouvert: string;
        /**
         * Date de fin découvert client
         * Type date au format yyyy-MM-dd
         */
        dateFinDecouvert: string;
        /**
         * Montant du découvert
         */
        montantDuDecouvert: number;
        /**
         * Montant des frais relatif au contrat de découvert. Montant perçu dans le cadre de la mise en place du contrat : souscription, avenant, anniversaire
         */
        fraisDuDecouvert: number;
        /**
         * Devise utilsée pour la gestion du compte
         */
        codeMonnaieDecouvert: string;
        /**
         * Valeur du taux de base du decouvert (Taux catalogue)
         */
        valeurDuTauxDecouvert: number;
        /**
         * Marge sur taux de référence
         */
        margeSurDecouvert: number;
        /**
         * La date de création initiale (pour un DND)
         * Type date au format yyyy-MM-dd
         */
        dateCreationInitiale: string;
        /**
         * Identifiant découvert client (pour un DND)
         */
        identifiantDecouvertClient: number;
        /**
         * Montant du palier (pour un DND)
         */
        montantPalierDND: number;
        /**
         * La durée en Mois des paliers (pour un DND)
         */
        dureeEnMoisPaliersDND: number;
        /**
         * Numéro du palier (pour un DND)
         */
        numeroPalierDND: number;
        /**
         * Identifiant du plan dégressivité découvert client (pour un DND)
         */
        idtPlanDegressDecClient: number;
        /**
         * La liste des paliers (pour un DND)
         */
        listeDesPaliers: Array<IInfosPaliersDND>;
    }
    interface ICreationDNDRetour extends IAbstractDNRetour {
        /**
         * Code établissement
         */
        codeEtab: string;
        /**
         * Code guichet interbancaire
         */
        codeGuichetInterbancaire: string;
        /**
         * Code produit / service
         */
        referenceProduitService: string;
        /**
         * Identifiant de plan de dégressivité découvert client
         */
        idtPlanDegressiviteDecClient: number;
        /**
         * Date de début découvert client
         * Type date au format yyyy-MM-dd
         */
        dateDebutDecClient: string;
        /**
         * Date fin découvert client
         * Type date au format yyyy-MM-dd
         */
        dateFinDecouvertClient: string;
        /**
         * Montant du découvert
         */
        montantDecouvert: number;
        /**
         * Valeur TAEG du découvert
         */
        valeurTAEG: number;
        /**
         * Périodicité de dégressivité du plan
         */
        periodiciteDeDegressivite: string;
        /**
         * Date clôture P/S
         * Type date au format yyyy-MM-dd
         */
        dateCloturePs: string;
        /**
         * Début période intercalaire découvert
         * Type date au format yyyy-MM-dd
         */
        debutPeriodeIntercalaire: string;
        /**
         * Identifiant du découvert commercialisé
         */
        idtDecouvertCommercialise: number;
        listeDesPaliers: Array<IInfosPaliersDND>;
    }
    interface IInfosPaliersDND {
        /**
         * Le numéro du palier
         */
        numeroPalierDND: number;
        /**
         * La date de début du palier
         * Type date au format yyyy-MM-dd
         */
        dateDebutPalier: string;
        /**
         * La date de fin du palier
         * Type date au format yyyy-MM-dd
         */
        dateFinPalier: string;
        /**
         * Le montant du découvert du palier
         */
        montantDecouvertPalier: number;
    }
    interface ICreationDNSRetour extends IAbstractDNRetour {
        /**
         * Identifiant du découvert
         */
        idtDecouvertClient: number;
        /**
         * Valeur du taux client
         */
        valeurTauxClient: number;
        /**
         * Valeur TAEG Découvert
         */
        valeurTAEGDecouvert: number;
        /**
         * Valeur du Taux de periode (trim)
         */
        valeurTauxDePeriode: number;
        /**
         * Taux d'usure
         */
        tauxUsure: number;
        /**
         * Montant Coût du découvert client
         */
        montantCoutDecouvertClient: number;
        /**
         * Mt frais / découvert
         */
        montantFraisDecouvert: number;
    }
    interface IAbstractDNRetour {
    }
    class DecouvertNegocie implements IDecouvertNegocie {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        identifiantDecouvertCatalogue: number;
        dateDebutDecouvert: string;
        dateFinDecouvert: string;
        montantDuDecouvert: number;
        fraisDuDecouvert: number;
        codeMonnaieDecouvert: string;
        valeurDuTauxDecouvert: number;
        margeSurDecouvert: number;
        dateCreationInitiale: string;
        identifiantDecouvertClient: number;
        montantPalierDND: number;
        dureeEnMoisPaliersDND: number;
        numeroPalierDND: number;
        idtPlanDegressDecClient: number;
        listeDesPaliers: Array<IInfosPaliersDND>;
        constructor();
    }
}

declare module et.osclien.decouver.decouvertGgho {
    /**
     * Données permettant de sauvegarder et restaurer les données
     * du Découvert dans le dossier de vente à distance
     */
    interface IDonneesSauvegardeProduitServiceDecouvert extends GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService {
        donneeProduitDecouvertDV: IDonneesOuvertureDecouvert;
    }
}

declare module et.osclien.decouver.decouvertGgho {
    class DecouvertNegocieOuvertureService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private static URL_SERVICE_REST;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        ouvrirDecouvertNegocie(decouvertNegocie: IDecouvertNegocie, numeroPersonne: number, numeroOffreSouscrite: number, identifiantProduitService: number, isDND: boolean, codeAction: string): ng.IPromise<IAbstractDNRetour>;
    }
}

declare module et.osclien.decouver.decouvertGgho {
    interface IGestionDossierVenteGetDossierVenteQuery {
        /**
         *  Identifiant d'un Etablissement du Réseau BPCE
         */
        codeEtablissement: string;
        /**
         *  Numéro d'identification du dossier de vente
         *  Cette entrée est obligatoire si l'identifiantExterneDossierVente et le codeExterneApplication ne sont pas renseignés.
         */
        identifiantDossierVente?: number;
        /**
         * Référence du dossier fournie par le producteur qui gère l'offre.
         * Cette entrée est obligatoire si l'identifiantDossierVente n'est pas renseigné. Si l'identifiantExterneDossierVente est renseigné, le
         * codeExterneApplication doit être renseigné.
         */
        identifiantExterneDossierVente?: string;
        /**
         * Code de désignation externe de l'application dans la gestion des dossiers de vente.
         * Cette entrée est obligatoire si l'identifiantExterneDossierVente est renseigné.
         */
        codeExterneApplication?: string;
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte?: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cette rubrique spécifie l'entité type de l'organisation consultant, créant ou modifiant le dossier de vente.
         * Valeurs :
         *   '1' = Agence
         *   '2' = CRC
         *   '3' = E - Agence
         *   '4' = Internet
         *   '5' = Administratif
         *   Si cette entrée n'est pas renseignée, les entrées sur l'EDS doivent être renseignées.
         */
        codeEntiteVenteContexte?: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Cette entrée doit être renseignée si le codeEntiteVenteContexte et le codeEdsExternePFContexte ne sont pas renseignés.
         */
        codeEdsInternePFContexte?: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement
         * Identifiant défini en fonction du type d'élément de structure (type EDS).
         *
         * Cette entrée doit être renseignée, si le codeEntiteVenteContexte et le codeEdsInternePFContexte ne sont pas renseignés
         */
        codeEdsExternePFContexte?: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE.
         *   Typologie propre à chaque Etablissement du GCE.
         *   Cette entrée est obligatoire si le codeEdsExternePFContexte est renseigné.
         */
        typeEdsExterneContexte?: string;
        /**
         * Référence externe de l' agent ayant demandé à consulter, le dossier de vente.
         * Cette entrée est facultative.
         */
        referenceExterneAgentContexte?: number;
        /**
         * Cet indicateur permet de savoir si les données Composition (objet compositionCaracteristique) seules ou complétées des données Détail
         * Composition (objet compositionDonneeDetail), ou aucune donnée composition, sont à restituer en sortie de la ressource.
         *   Valeurs :
         *  'C' = seules les données Composition caractéristique sont à restituer
         *  'D' = les données Composition caractéristique et détail sont à restituer
         *  'N' = pas de restitution des données Composition
         */
        indicRestCompoDetail: string;
        /**
         * Cet indicateur permet de savoir si le chemin d'avancement (objet cheminAvancement) du Dossier de Vente est à restituer en sortie de la
         * ressource. Valeurs :
         *   'O' = le chemin d'avancement est à restituer
         *   'N' = le chemin d'avancement n'est pas à restituer
         */
        indicRestCheminAvancement: string;
    }
    class DossierVenteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private url;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getDossierVente(query: IGestionDossierVenteGetDossierVenteQuery): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.GestionDossierVente>;
        recupererData0DV(listeCompositionDossier: GestionGeneriqueOffres.Types.DossierDeVente.CompositionDossier[]): ng.IPromise<any>;
    }
}
