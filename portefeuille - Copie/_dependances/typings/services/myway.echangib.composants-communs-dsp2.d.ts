
declare module ComposantsCommunsDsp2 {
    var app: any;
}

declare module ComposantsCommunsDsp2.Constantes {
    module ClassesNames {
        var CLASS_NAME_EXCEL_SERVICE: string;
    }
}

declare module ComposantsCommunsDsp2.Constantes {
    module URL {
        var URL_REST: string;
        var URL_PREST_SERVICE_PAIEMENT: string;
        var URL_ROLE_SERVICE: string;
        var URL_CONSENTEMENT_PSP_CARACTERISTIQUE: string;
        var URL_CONSENTEMENT_PSP_COMPTE: string;
        var URL_CONSENTEMENT_PSP_RECHERCHE: string;
        var URL_CONVERSION_RIB_BIC_IBAN: string;
        var URL_SYNTHESE_SERVICE_EQUIPEMENT_CLIENT: string;
    }
}

declare module ComposantsCommunsDsp2.Controleurs {
    class Defaut {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
    }
}

declare module ComposantsCommunsDsp2.Enumerations {
    /**
     * Enumeration des différents rôles du PSP
     */
    enum RolePsp {
        AISP,
        CBPII,
        PISP,
    }
}

declare module ComposantsCommunsDsp2.Controleurs {
    /**
     * Controleur du tableau responsive
     */
    class TableauResponsiveControleur {
        private tableService;
        static $inject: string[];
        tableOptions: MyWay.UI.ImwTableOptions;
        listeColonne: MyWay.UI.ImwTableColumnOptions[];
        id: string;
        tableauActionSelection: boolean;
        constructor(tableService: MyWay.UI.IMwTableServiceOpefi);
        /**
         * Methode pour initialiser les labels du bloc de contenu en fonction des colonnes
         */
        initialiserLabel(): void;
        /**
         * Methode pour savoir si la selection des bloc doit être activée
         * @returns boolean
         */
        activerSelectionBloc(): boolean;
        /**
         * Methode pour gérer la selection d'un bloc (cas multiselection)
         * @param {any} ligne
         * @param {number} index
         */
        selectBloc(ligne: any, index: number): void;
    }
}

declare module ComposantsCommunsDsp2.Directives {
    /**
     * Directive d'affichage responsive du tableau mw-table
     * @author S0077482 (Thomas PRAT)
     */
    function mwTableauResponsive(): ng.IDirective;
}

declare module ComposantsCommunsDsp2.Modeles.Application {
    interface IErreurHtml {
        libelleChamps: string;
        ancre: string;
        typeErreur?: string;
    }
}

declare module ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCaracteristique {
    interface IPrestataireServicePaiement {
        /**
         * Référence du prestataire de services de paiement
         */
        reference: string;
        /**
         * Nom du prestataire de services de paiement
         */
        nom: string;
        /**
         * Rôle du prestataire de services de paiement :
         * - Emetteur de carte privative
         * - Agrégateur
         * - Initiateur de paiement
         */
        role: string;
        /**
         * SIREN du prestataire de services de paiement
         */
        siren: string;
        /**
         * Adresse du prestataire de services de paiement
         */
        adresse: string;
    }
    interface IAction {
        /**
         * Date et heure de l'action
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateHeure: string;
        /**
         * Origine de l'action :
         *  - Face à face
         *  - A distance
         */
        origine: string;
    }
    interface ICartePrivative {
        /**
         * Identifiant de la carte privative
         */
        identifiant: string;
        /**
         * Numéro de la carte privative
         */
        numero: string;
    }
    interface IClient {
        /**
         * Numéro du client
         */
        numero: number;
        /**
         * Nom du client
         */
        nom: string;
    }
    interface ICaracteristique {
        /**
         * Identifiant du consentement
         */
        identifiant: string;
        /**
         * Etat du consentement :
         * - actif, "A"
         * - révoqué, "R"
         */
        etat: string;
        /**
         * Date de la création du consentement
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        creation: string;
        /**
         * Date de révocation du consentement
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        revocation: string;
        /**
         * IBAN du compte sur lequel le consentement est donné
         */
        iban: string;
        psp: IPrestataireServicePaiement;
        /**
         * Code établissement du consentement
         */
        codeEtablissement: string;
        /**
         * Numéro de l'abonné qui a donné le consentement
         */
        numeroAbonne: string;
        /**
         * Top lié aux types psuidentity et trustedbeneficiaries
         */
        indicateurOperation: boolean;
        /**
         * Type du consentement donné.
         *
         * Valeurs possibles :
         *  - transaction
         *  - balance
         *  - coverage
         *  - initiation
         *  - psuidentity
         *  - trustedbeneficiaries
         */
        typeOperation: string;
        /**
         * Canal lié au consentement.
         *
         * Valeurs possibles :
         *  - agence
         *  - internet mobile
         *  - internet agence
         *  - batch
         *  - interne
         */
        canal: string;
        /**
         * Cause de la modification du statut
         */
        raison: string;
        /**
         * Top indiquant une modification de type "annule et remplace"
         */
        topRemplacement: boolean;
    }
    interface IConsentement {
        caracteristique: ICaracteristique;
        /**
         * Liste des autres comptes pour lesquels un consentement doit être créé
         */
        listeAutresComptes: Array<string>;
    }
    interface IConsentementPspCaracteristiqueDeleteQuery {
        referenceConsentement: string;
        origineDemande: string;
        codeEtablissement: string;
    }
    interface IConsentementPspCaracteristiqueGetQuery {
        identifiantClient: number;
        codeEtablissement: string;
    }
}

declare module ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCompte {
    interface ICompte {
        codeEtablissement: string;
        codeGuichet: string;
        cleRib: string;
        reference: string;
        iban: string;
        nomCompte: string;
        nomEntiteTitulaire: string;
    }
    interface IConsentementPspCompteGetQuery {
        codeEtablissement: string;
        identifiantClient: number;
    }
}

declare module ComposantsCommunsDsp2.Modeles.Rest.PrestServicePaiement {
    interface IPrestataireServicePaiement {
        nom: string;
        role: string;
        reference: string;
        siren: string;
        adresse: string;
        codePostal: string;
        nomLocalite: string;
    }
}

declare module ComposantsCommunsDsp2.Modeles.Rest.RoleService {
    interface IRole {
        code: string;
        libelleCourt: string;
        libelleLong: string;
    }
}

declare module ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspRecherche {
    interface IConsentementPspRechercheGetQuery {
        codeEtablissement: string;
        identifiantClient: number;
        dateDebut?: string;
        dateFin?: string;
        referencePsp?: string;
        rolePsp?: string;
        iban?: string;
    }
    interface IInterrogation {
        /**
         * Identifiant de l'interrogation
         */
        identifiant: string;
        /**
         * Date et heure de la transaction
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateHeure: string;
        prestataireServicePaiement: IPrestataireServicePaiement;
        /**
         * Code banque établissement
         */
        codeEtablissement: string;
        /**
         * Code guichet interbancaire
         */
        codeGuichet: string;
        /**
         * Numéro du compte interrogé
         */
        numeroCompte: string;
        /**
         * Montant de l'interrogation
         */
        montant: number;
        /**
         * Résultat de l'interrogation
         */
        resultat: string;
        /**
         * Solde lors de l'interrogation
         */
        solde: number;
    }
    interface IPrestataireServicePaiement {
        /**
         * Référence du prestataire de services de paiement
         */
        reference: string;
        /**
         * Nom du prestataire de services de paiement
         */
        nom: string;
        /**
         * Rôle du prestataire de services de paiement :
         * - Emetteur de carte privative
         * - Agrégateur
         * - Initiateur de paiement
         */
        role: string;
        /**
         * SIREN du prestataire de services de paiement
         */
        siren: string;
        /**
         * Adresse du prestataire de services de paiement
         */
        adresse: string;
    }
    interface ICartePrivative {
        /**
         * Identifiant de la carte privative
         */
        identifiant: string;
        /**
         * Numéro de la carte privative
         */
        numero: string;
    }
    interface IRecherche {
        listeInterrogations: Array<IInterrogation>;
    }
}

declare module ComposantsCommunsDsp2.Modeles.Rest.OperationFinancieresConversionRibIban {
    interface IConversionRibBicIban {
        codeBic: string;
        numeroIbanCompteBeneficiaire: string;
        numeroCompte: string;
        codeEtablissement: string;
        codeGuichet: string;
        cleRib: number;
    }
    interface IConversionRibIbanGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        cleRib: number;
    }
}

declare module ComposantsCommunsDsp2.Modeles.Rest.SyntheseServiceEquipementClient {
    interface ISyntheseServiceEquipementClientPostQuery {
        typeRecherche: string;
        codeEtatRecherche: string;
        indicRestitComptes88?: string;
    }
    interface IEquipementClient {
        listeClient: Array<IClient>;
    }
    interface IClient {
        /**
         * Correspond au code Banque sous lequel un Etablissement du Groupe BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         */
        identifiantTiers: string;
        listeContrat: Array<IContrat>;
        /**
         * Messages provenant du central suite aux différents appels
         */
        listeMessagesRetour: Array<string>;
    }
    interface IContrat {
        /**
         * Identifie un contrat souscrit dans un Etablissement.
         * Cet identifiant doit être unique pour un établissement donné.
         */
        identifiantContrat: string;
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte.
         * Uniquement pour les comptes de dépôt / épargne.
         */
        riceContrat: string;
        /**
         * Ce code indique l'état du contrat.
         *
         * Valeurs :
         *      O - Ouvert
         *      F - Fermé / clos
         *      I  - En instance d'ouverture
         *      K - En instance de clôture
         *      X - Indéterminé
         */
        codeEtatContrat: string;
        /**
         * Date à laquelle le contrat prend effet.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffet: string;
        /**
         * Date de fin d'effet du contrat.
         * Correspond à l'échéance du contrat.
         * Ce n'est pas la date de clôture administrative.
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Identifiant de l'entité titulaire affecté par le système.
         * Doit être unique au sein d'un établissement.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Désignation bancaire de l'entité titulaire.
         * Ce libellé constitue la première ligne de l'intitulé bancaire. Elle constitue notamment la ligne 1 de l'adresse.
         * Selon les Communautés et les entités titulaires, cette
         *  désignation pourra être soit calculée automatiquement
         *  par assemblage des civilités et noms patronymiques (exemple: "M et Mme Dupond"), soit être choisie spécifiquement par l'entité titulaire lorsque le résultat de l'assemblage précédent ne lui convient pas.
         */
        libelleEntiteTitulaire: string;
        /**
         * Indicateur permettant de designer la personne responsable d'une entité titulaire parmi les cotitulaires d'un compte collectif.
         *
         * Valeurs :
         *      N : Non responsable
         *      O : Responsable
         */
        indicateurResponsableET: boolean;
        /**
         * Indique le mode de composition de l'entité titulaire.
         * Le mode qualifie le client qui détient des produits ou  services.
         *
         * Valeurs :
         *      1 : Mode simple
         *      2 : Mode joint entre époux
         *      3 : Mode joint
         *      4 : Mode indivision
         */
        modeCompositionET: string;
        /**
         * Indique le type d'usage de l'entité titulaire.
         *
         * Valeurs :
         *      1 - Usage privé
         *      2 - Usage professionnel
         */
        codeUsageET: string;
        /**
         * Identifiant du code produit service régional.
         */
        identifiantProduit: number;
        /**
         * Libellé du PS régional.
         */
        libelleProduit: string;
        /**
         * Code de la devise dans laquelle le contrat est libellé.
         */
        codeDeviseContrat: string;
        /**
         * Valeur monétaire du contrat, exprimée en euros.
         *
         * Ce montant n'est pas valorisé pour les services.
         *
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         *
         * Pour les crédits amortissables, ce montant correspond au montant du capital restant du de l'engagement.
         *
         * Pour les crédits par autorisation, ce montant correspond au montant utilisé sur l'engagement d'autorisation.
         *
         * Pour les comptes Titre, ce montant correspond au montant estimé de la position Valeur. Il s'agit de la quantité multipliée par le cours.
         *
         * Pour les assurances hors épargne, ce montant correspond au montant du contrat calculé à la date de calcul valeur de rachat.
         *
         * Pour l'épargne salariale, ce montant correspond au montant des avoirs investis et valorisés sur les comptes des salariés (y compris l'abondement s'il a été versé et investi).
         */
        valeurProduit: number;
        /**
         * Valeur monétaire du contrat, exprimée en devise de tenue de compte.
         *
         * Ce montant n'est pas valorisé que pour les CDD/CCE et pour les crédits par autorisation.
         *
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         *
         * Pour les crédits par autorisation, ce montant correspond au montant utilisé sur l'engagement d'autorisation.
         */
        valeurProduitDevise: number;
        /**
         * Référence interne de la gestion du compte ou service.
         */
        referenceCompteService: string;
        /**
         * Identifiant de l'offre.
         */
        identifiantOffre: string;
        /**
         * Indique le caractère forfaitaire de l'offre :
         * 'F': Forfaitaire
         * 'U': Unitaire
         */
        indicateurForfaitaireOffre: string;
        /**
         * Libellé du forfait dans le cadre d'une offre forfaitaire.
         */
        libelleForfaitOffre: string;
        /**
         * Identifie l'établissement producteur du contrat
         */
        identifiantEtabProducteur: string;
        /**
         * NUMERO COMPTE IBAN
         */
        numeroCompteIBAN: string;
    }
}

declare module ComposantsCommunsDsp2.Services.Application {
    /**
     * Service de gestion de l'export Excel
     */
    class ExcelService implements IExcelService {
        private modalService;
        private serviceAgent;
        private serviceAgentExtended;
        private listeContenu;
        private bExport;
        static $inject: string[];
        private static CLASS_NAME;
        private static logger;
        constructor(modalService: MyWay.UI.IModalService, serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Génération du fichier Excel
         */
        ExportExcel(nomFichier: string, tableau: any[]): boolean;
        /**
         * Alimentation des colonnes de contenu
         */
        private construireTableauContenu(tableau);
    }
    /**
     * Interface de la classe HabilitationsService
     */
    interface IExcelService {
        ExportExcel(nomFichier: string, tableau: any[]): boolean;
    }
}

declare module ComposantsCommunsDsp2.Services.Application {
    class HtmlService implements IHtmlService {
        private $rootScope;
        private mwEvents;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents);
        goToAnchor(ancre: string): void;
    }
    interface IHtmlService {
        goToAnchor(ancre: string): void;
    }
}

declare module ComposantsCommunsDsp2.Services.Application {
    /**
     * Service Lisa
     */
    interface ILisaService {
        /**
         * Appelle la prochaine étape (code sortie : valeurSortie
         * urlLocal est appelé si travail en local ou en DUA sans utiliser le code processus
         */
        next(valeurSortie: number, urlLocal: string): MyWay.Services.IPromesse<void>;
        /**
         * Recupere les données du contexte
         * @param listeParamEntree : La liste du nom des variables d'entrée attendue de LISA
         * @return {ng.IPromise<{ [key: string]: string }>} Une promesse contenant le tableau de données
         */
        getDonnees(listeParamEntree: string[]): ng.IPromise<{
            [key: string]: string;
        }>;
    }
}

declare module ComposantsCommunsDsp2.Services.Rest {
    /**
     * Interface d'appel de la ressource REST /consentementpsp/v1/caracteristique
     */
    interface IConsentementPspCaracteristique {
        getCaracteristique(query: ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCaracteristique.IConsentementPspCaracteristiqueGetQuery): MyWay.Services.IPromesse<ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCaracteristique.ICaracteristique[]>;
        postCaracteristique(query: ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCaracteristique.IConsentement): MyWay.Services.IPromesse<ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCaracteristique.ICaracteristique>;
        deleteCaracteristique(query: ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCaracteristique.IConsentementPspCaracteristiqueDeleteQuery): MyWay.Services.IPromesse<ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCaracteristique.ICaracteristique>;
        putCaracteristique(query: ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCaracteristique.ICaracteristique): MyWay.Services.IPromesse<void>;
    }
}

declare module ComposantsCommunsDsp2.Services.Rest {
    /**
     * Interface d'appel de la ressource REST /consentementpsp/v1/compte
     */
    interface IConsentementPspCompte {
        getListeCompte(query: ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCompte.IConsentementPspCompteGetQuery): MyWay.Services.IPromesse<ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspCompte.ICompte[]>;
    }
}

declare module ComposantsCommunsDsp2.Services.Rest {
    /**
     * Interface d'appel de la ressource REST /consentementpspparam/v1/prestServicePaiement
     */
    interface IPrestServicePaiementService {
        getPrestServicePaiement(): MyWay.Services.IPromesse<ComposantsCommunsDsp2.Modeles.Rest.PrestServicePaiement.IPrestataireServicePaiement[]>;
    }
}

declare module ComposantsCommunsDsp2.Services.Rest {
    /**
     * Interface d'appel de la ressource REST /consentementpspparam/v1/roleService
     */
    interface IRoleService {
        getListeRole(): MyWay.Services.IPromesse<ComposantsCommunsDsp2.Modeles.Rest.RoleService.IRole[]>;
    }
}

declare module ComposantsCommunsDsp2.Services.Rest {
    /**
     * Interface d'appel de la ressource REST /consentementpsp/v1/recherche
     */
    interface IConsentementPspRecherche {
        getRecherche(query: ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspRecherche.IConsentementPspRechercheGetQuery): MyWay.Services.IPromesse<ComposantsCommunsDsp2.Modeles.Rest.ConsentementPspRecherche.IRecherche>;
    }
}

declare module ComposantsCommunsDsp2.Services.Rest {
    /**
     * Interface d'appel de la ressource REST /operationfinanciereservice/v1/conversionRibBicIban
     */
    interface IOpeFinancieresConversionRibIbanService {
        getConversionRibBicIban(query: Modeles.Rest.OperationFinancieresConversionRibIban.IConversionRibIbanGetQuery): MyWay.Services.IPromesse<Modeles.Rest.OperationFinancieresConversionRibIban.IConversionRibBicIban>;
    }
}

declare module ComposantsCommunsDsp2.Services.Rest {
    /**
     * Interface d'appel de la ressource REST /consentementpsp/v1/recherche
     */
    interface ISyntheseServiceEquipementClient {
        postEquipementClient(body: ComposantsCommunsDsp2.Modeles.Rest.SyntheseServiceEquipementClient.IClient[]): MyWay.Services.IPromesse<ComposantsCommunsDsp2.Modeles.Rest.SyntheseServiceEquipementClient.IEquipementClient>;
    }
}
