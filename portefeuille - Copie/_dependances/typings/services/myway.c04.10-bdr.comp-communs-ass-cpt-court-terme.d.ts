
declare module ComposantsCommunsAssuranceCompteCourtTerme {
    var app: ng.IModule;
}

/**
 * Filtre pour la transformation de l'affichage de la déclaration santé
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Filtres {
}

/**
 * Contrôleur de la modale d'assurance de personne
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class AssurerPersonneModaleControleur {
        private $scope;
        private $modalInstance;
        private mwNotificationService;
        private assCptCourtTermeGestionSauvegardeService;
        private data;
        static $inject: string[];
        /**
         * La personne cochée dans le tableau des personnes
         */
        personneCochee: Object;
        /**
         * La personne cochée dans le tableau des personnes sans modifications
         */
        personneOriginale: Object;
        /**
         * La durée maximum de l'assurance (calculé)
         */
        dureeVieMax: number;
        /**
         * Indicateur de validité de la quotité
         */
        isQuotiteCorrecte: boolean;
        /**
         * Indicateur de validité de la durée
         */
        isDureeVieCorrecte: boolean;
        /**
         * Indicateur de blocage / déblocage du bouton valider
         */
        blocageDeblocageValider: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, mwNotificationService: MyWay.UI.IMwNotificationService, assCptCourtTermeGestionSauvegardeService: Services.Application.IAssCptCourtTermeGestionSauvegardeService, data: Array<any>);
        /**
         *  Méthode de validation du champs Quotité
         */
        validerQuotite(): void;
        /**
         *  Méthode de validation du champs Durée
         */
        validerDuree(): void;
        /**
         * Fonction pour la validation de l'assurance d'une personne
         */
        validerAssurerPersonne(): void;
        /**
         * Méthode pour le calcul de la prime
         */
        calculerPrime(quotite: number, duree: number): number;
        /**
         * Fonction pour l'annulation de l'assurance d'une personne
         */
        annulerAssurerPersonne(): void;
        /**
         * Méthode pour bloquer ou débloquer le bouton valdier de la popup en cas d'erreur ou non
         * @return {boolean} l'état du blocage
         */
        bloquerDebloquerValider(): boolean;
        /**
         * Méthode qui génère le message d'erreur de la saisie de la durée
         * @returns le message d'erreur formatté
         */
        genererMessageErreur(): string;
    }
}

/**
 * Contrôleur de la modale de résiliation de personne
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class ResilierPersonneModaleControleur {
        private $scope;
        private $modalInstance;
        private mwNotificationService;
        private assCptCourtTermeGestionSauvegardeService;
        private data;
        static $inject: string[];
        /**
         * La personne cochée dans le tableau des personnes
         */
        personneCochee: Object;
        /**
         * La personne cochée dans le tableau des personnes sans modifications
         */
        personneOriginale: Object;
        /**
         * Indicateur de blocage / déblocage du bouton valider
         */
        blocageDeblocageValider: boolean;
        /**
         * La liste des motifs de résilitation
         */
        listeMotifs: Array<any>;
        /**
         * Le motif sélectionné
         */
        motif: any;
        /**
         * La description si le motif est le code '00'
         */
        description: string;
        /**
         * Indicateur de validité de la description
         */
        private indicateurDescriptionInvalide;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, mwNotificationService: MyWay.UI.IMwNotificationService, assCptCourtTermeGestionSauvegardeService: Services.Application.IAssCptCourtTermeGestionSauvegardeService, data: Array<any>);
        /**
         * Fonction pour la validation de la résiliation l'assurance d'une personne
         */
        resilierPersonne(): void;
        /**
         * Fonction pour l'annulation de la résiliation d'une personne
         */
        annulerResilierPersonne(): void;
        /**
         * Méthode pour la validation de la description
         */
        validerDescription(): void;
        /**
         * Méthode pour bloquer ou débloquer le bouton valdier de la popup en cas d'erreur ou non
         * @return {boolean} l'état du blocage
         */
        bloquerDebloquerValider(): boolean;
        /**
         * Méthode pour générer le nom complet de la personne
         * @returns le nom complet de la personne
         */
        genererNomCompletPersonne(): string;
        /**
         * Méthode qui gère la création du titre de la popup
         * @returns le titre adapté
         */
        genererTitrePopup(): string;
    }
}

declare module ComposantsCommunsAssuranceCompteCourtTerme {
}

/**
 * Contrôleur de la page de tests pour l'utilisation des services REST du projet
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevServiceRestControleur {
        private $scope;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope);
    }
}

/**
 * Contrôleur de la directive mw-infos-assure-commun
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwInfosAssureCommunControleur {
        private $scope;
        private miniProfilService;
        private saisieRiceService;
        private assCptCourtTermeGestionSauvegardeService;
        static $inject: string[];
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur du type du tableau
         */
        courtTerme: boolean;
        /**
         * Indicateur du type d'acte de gestion
         */
        ouverture: boolean;
        /**
         * Objet AssuranceSurCompte contenant les informations de l'assurance
         */
        assuranceSurCompte: Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte;
        /**
         * Objet AssuranceCourtTerme contenant les informations de l'assurance
         */
        assuranceCourtTerme: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme;
        /**
         * La liste des comptes du client bancaire
         */
        listeComptesPrelevement: Array<Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit>;
        /**
         * Le compte de prélèvement sélectionné
         */
        comptePrelevement: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit;
        /**
         * Indicateur de succes / echec des requetes
         */
        private indicateurSuccesRequetes;
        /**
         * Le numéro de compte du CCE créé dans l'offre
         */
        private numeroCompteCCE;
        /**
         * Le code guichet du compte CCE associé a l'offre
         */
        private codeGuichet;
        /**
         * Le code établissement du compte CCE associé a l'offre
         */
        private codeEtablissement;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, miniProfilService: Services.Application.IMiniProfilService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, assCptCourtTermeGestionSauvegardeService: Services.Application.IAssCptCourtTermeGestionSauvegardeService);
        /**
         * Méthode pour le chargement de l'objet caracteristiqueMiniProfil, pour la constitution de la liste des comptes courants
         */
        private chargerCaracteristiqueMiniProfil();
        /**
         * Méthode pour calculer la clé RICE d'un compte au format RICE
         * @param {Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit} compte - l'objet compte pour lequel calculer la clé RICE
         * @return {string} cleRice - la clé calculer du RICE
         */
        calculerCleRice(compte: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit): string;
        /**
         * Méthode pour formater l'affichage des comptes dans les listes déroulantes
         * @param {Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit} compte - l'objet compte
         * @return {string} compteFormate - l'affichage formate du compte
         */
        formaterAffichageCompte(compte: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit): string;
        /**
         * Méthode pour la sauvegarde de la modification du compte de prélèvement dans la liste des comptes de prélèvement
         */
        gererChangementComptePrelevement(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage des informations concernant l'assuré des pages de l'Assurance Compte et Court Terme Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwInfosAssureCommun(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-infos-assure-court-terme
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwInfosAssureCompteControleur {
        private $scope;
        private miniProfilService;
        private saisieRiceService;
        private $filter;
        private assCptCourtTermeGestionSauvegardeService;
        private autorisationDecouvertService;
        static $inject: string[];
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Objet AssuranceCourtTerme contenant les informations de l'assurance
         */
        assuranceSurCompte: Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte;
        /**
         * Objet AutorisationDecouvert contenant les informations pour l'avenant
         */
        autorisationDecouvert: Modeles.Rest.DecouvertCce.AutorisationDecouvert.IAutorisation;
        /**
         * Indicateur du type du tableau
         */
        courtTerme: boolean;
        /**
         * Indicateur du type d'acte de gestion
         */
        ouverture: boolean;
        /**
         * La liste des montants de garanti du contrat
         */
        listeMontantsGarantiContrat: Array<Modeles.Rest.ContratAssCompte.AssuranceSurCompte.ITranche>;
        /**
         * Le montant garanti contrat sélectionné de l'assurance sur compte
         */
        montantGarantiContrat: Modeles.Rest.ContratAssCompte.AssuranceSurCompte.ITranche;
        /**
         * La liste des comptes du client bancaire
         */
        listeComptesAssure: Array<Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit>;
        /**
         * Le compte assuré sélectionné
         */
        compteAssure: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit;
        /**
         * Indicateur de succes / echec des requetes
         */
        private indicateurSuccesRequetes;
        /**
         * Indicateur de chargement de la sous directive commune
         */
        private indicateurChargementDonneesCommunes;
        /**
         * Les données utilisées par le service de sauvegarde
         */
        donneesSelectionnees: Modeles.Application.Commun.IDonneesSauvegardeCompte;
        /**
         * Le numéro de compte du CCE créé dans l'offre
         */
        private numeroCompteCCE;
        /**
         * Le code guichet du compte CCE associé a l'offre
         */
        private codeGuichet;
        /**
         * Le code établissement du compte CCE associé a l'offre
         */
        private codeEtablissement;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, miniProfilService: Services.Application.IMiniProfilService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, $filter: ng.IFilterService, assCptCourtTermeGestionSauvegardeService: Services.Application.IAssCptCourtTermeGestionSauvegardeService, autorisationDecouvertService: Services.Application.IAutorisationDecouvertService);
        /**
         * Méthode pour le chargement de l'objet caracteristiqueMiniProfil, pour la constitution de la liste des comptes courants
         */
        private chargerCaracteristiqueMiniProfil();
        /**
         * Méthode pour formater l'affichage des comptes dans les listes déroulantes
         * @param {Modeles.Rest.ContratAssCompte.AssuranceSurCompte.ITranche} tranche - l'objet tranche
         * @return {string} montantGarantiFormate - l'affichage formate du montant garanti contrat
         */
        formaterAffichageMontantGaranti(tranche: Modeles.Rest.ContratAssCompte.AssuranceSurCompte.ITranche): string;
        /**
         * Méthode pour formater l'affichage d'un montant en xxx,xx EUR
         * @param {number} montant - Le montant à formatter
         * @return {string} montantFormatte - l'affichage formate du montant de la prime
         */
        formatterMontant(montant: number): string;
        /**
         * Méthode pour calculer la clé RICE d'un compte au format RICE
         * @param {Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit} compte - l'objet compte pour lequel calculer la clé RICE
         * @return {string} cleRice - la clé calculer du RICE
         */
        calculerCleRice(compte: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit): string;
        /**
         * Méthode pour formater l'affichage des comptes dans les listes déroulantes
         * @param {Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit} compte - l'objet compte
         * @return {string} compteFormate - l'affichage formate du compte
         */
        formaterAffichageCompte(compte: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit): string;
        /**
         * Méthode pour la sauvegarde de la modification du compte assuré dans la liste des comptes Assuré
         */
        gererChangementCompteAssure(): void;
        /**
         * Méthode pour la sauvegarde de la modification du montant garanti contrat et du montant de la prime qui va avec
         */
        gererChangementMontantGarantiContrat(): void;
        /**
         * Méthode pour le chargement de l'objet autorisationDecouvert
         */
        private chargerAutorisationDecouvert();
    }
}

/**
 * Directive pour la gestion de l'affichage des informations concernant l'assuré des pages de l'Assurance sur Compte Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwInfosAssureCompte(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-infos-assure-court-terme
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwInfosAssureCourtTermeControleur {
        private $scope;
        private assCptCourtTermeGestionSauvegardeService;
        private $filter;
        static $inject: string[];
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur du type du tableau
         */
        courtTerme: boolean;
        /**
         * Indicateur du type d'acte de gestion
         */
        ouverture: boolean;
        /**
         * Objet AssuranceCourtTerme contenant les informations de l'assurance
         */
        assuranceCourtTerme: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme;
        /**
         * Le montant garanti contrat saisie de l'assurance court terme
         */
        montantGarantiContratCourtTerme: number;
        /**
         * La liste des concours de trésorerie
         */
        listeConcoursTresorerie: Array<Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IConcoursTresorerie>;
        /**
         * Le concours de trésorerie sélectionné
         */
        concoursTresorerie: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IConcoursTresorerie;
        /**
         * La liste des clauses bénéficiaire
         */
        listeClauseBeneficiaire: Array<Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IClauseBeneficiaire>;
        /**
         * La clause bénéficiaire sélectionnée
         */
        clauseBeneficiaire: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IClauseBeneficiaire;
        /**
         * Libellé libre en cas de clause spécifique à la personne
         */
        description: string;
        /**
         * Indicateur de validité du nouveau montant entré
         */
        private indicateurMontantInvalide;
        /**
         * Indicateur de validité de la description
         */
        private indicateurDescriptionInvalide;
        /**
         * Indicateur de succes / echec des requetes
         */
        private indicateurSuccesRequetes;
        /**
         * Indicateur de bloquage du champ montant
         */
        private bloquerMontant;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, assCptCourtTermeGestionSauvegardeService: Services.Application.IAssCptCourtTermeGestionSauvegardeService, $filter: ng.IFilterService);
        /**
         * Méthode pour valider la saisie du nouveau montant
         */
        validerMontant(): void;
        /**
         * Méthode pour la sauvegarde de la modification du concours de trésorerie
         */
        gererChangementConcoursTresorerie(): void;
        /**
         * Méthode pour la sauvegarde de la modification de la clause bénéficiaire
         */
        gererChangementClauseBeneficiaire(): void;
        /**
         * Méthode pour la sauvegarde de la description de la clause bénéficiaire
         */
        enregistrerDescription(): void;
        /**
         * Méthode pour formater l'affichage d'un montant en xxx,xx EUR
         * @param {number} montant - Le montant à formatter
         * @return {string} montantFormatte - l'affichage formate du montant de la prime
         */
        formatterMontant(montant: number): string;
        /**
         * Méthode qui génère le message d'erreur de la saisie du montant garanti contrat
         * @returns le message d'erreur formatté
         */
        genererMessageErreur(): string;
    }
}

/**
 * Directive pour la gestion de l'affichage des informations concernant l'assuré des pages de l'Assurance Court Terme Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwInfosAssureCourtTerme(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-tab-personnes-assurables-assurees
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwTabPersonnesAssurablesAssureesControleur {
        private $scope;
        private assurerPersonneService;
        private resilierPersonneService;
        private mwNotificationService;
        private assCptCourtTermeGestionSauvegardeService;
        private serviceAgent;
        static $inject: string[];
        /**
         * Objet AssuranceCourtTerme ou AssuranceSurCompte contenant les informations de l'assurance
         */
        assurance: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme | Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte;
        /**
         * Indicateur du type du tableau
         */
        courtTerme: boolean;
        /**
         * Indicateur du type d'acte de gestion
         */
        ouverture: boolean;
        /**
         * Indicateur du type d'acte de gestion
         */
        cloture: boolean;
        /**
         * Le code de l'établissement issu de GGO
         */
        codeEtablissement: string;
        /**
         * Le tableau de données contenant les personnes Assurables / Assurées
         */
        tableauPersonnesAssurablesAssureesData: Array<Modeles.Application.Commun.IDataAssurerPersonne>;
        /**
         * Le tableau de données contenant les personnes Résiliées
         */
        tableauPersonnesResilieesData: Array<Modeles.Application.Commun.IDataAssurerPersonne>;
        /**
         * La liste des motifs de résilitation
         */
        listeMotifs: Array<Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IMotifCloture>;
        /**
         * Colonne Nom du tableau
         */
        tableauColonneOptionsNom: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Prénom du tableau
         */
        tableauColonneOptionsPrenom: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Lien
         */
        tableauColonneOptionsLien: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Date du tableau
         */
        tableauColonneOptionsDate: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne % du tableau
         */
        tableauColonneOptionsPourcent: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Prime du tableau
         */
        tableauColonneOptionsPrime: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Durée du tableau
         */
        tableauColonneOptionsDuree: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Déclaration Santé du tableau
         */
        tableauColonneOptionsDeclarationSante: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Date d'effet du tableau
         */
        tableauColonneOptionsDateEffet: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Date de Résiliation
         */
        tableauColonneOptionsDateResiliation: MyWay.UI.ImwTableColumnOptions;
        /**
         * Colonne Motif
         */
        tableauColonneOptionsMotif: MyWay.UI.ImwTableColumnOptions;
        /**
         *  Création de l'objet d'options du tableau des personnes assurables / assurées
         */
        tableauPersonnesAssurablesAssurees: MyWay.UI.ImwTableOptions;
        /**
         *  Création de l'objet d'options du tableau des personnes résiliées
         */
        tableauPersonnesResiliees: MyWay.UI.ImwTableOptions;
        /**
         * Indicateur pour savoir si la première tentative d'assurance est passée
         */
        private isPremierAssurer;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, assurerPersonneService: Services.Application.IAssurerPersonneService, resilierPersonneService: Services.Application.IResilierPersonneService, mwNotificationService: MyWay.UI.IMwNotificationService, assCptCourtTermeGestionSauvegardeService: Services.Application.IAssCptCourtTermeGestionSauvegardeService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode pour convertir les données de la liste des personnes en objet technique pour l'affichage
         * @param {Array<Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IPersonne | Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IPersonne>} listePersonne - La liste des personnes issue du service
         * @returns {Array<Modeles.Application.Commun.IDataAssurerPersonne>} tableauDonneesFormattees - la liste formattée
         */
        convertirDonnees(listePersonne: Array<Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IPersonne | Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IPersonne>): Array<Modeles.Application.Commun.IDataAssurerPersonne>;
        /**
         * Méthode pour la récupération du libellé associé au code type lien interpersonne via la table délocalisée DU1Y
         * @param {string} codeEtablissement - Code Établissement issu du contexte/GGO
         * @param {string} codeTypeLienInterPersonnes - Code du service BAD issu du contexte/GGO
         * @param {MyWay.Services.IPromesse<string>} Promesse contenant le code voulu
         */
        private recupererLibelleLien(codeEtablissement, codeTypeLienInterPersonnes);
        /**
         * Création du tableau des Personnes Assurables / Assurées dans le cas d'un usage dans la page des Assurances Court Terme Professionnels
         */
        creerTableauCourtTerme(): void;
        /**
         * Création du tableau des Personnes Assurables / Assurées dans le cas d'un usage dans la page des Assurances sur Compte Professionnels
         */
        creerTableauCompte(): void;
        /**
         * Création du tableau des Personnes Résiliées dans la page des Assurances sur Compte et Court Terme Professionnels
         */
        creerTableauPersonnesResiliees(): void;
        /**
         * Implémentation de la méthode de l'interface MyWay.UI.ISelectionChangeHandler
         */
        onSelectionChange(selectedObject: Object): void;
        /**
         * Méthode pour l'initalisation de la création de l'assurance d'une personne
         */
        initierAssurerPersonne(): void;
        /**
         * Méthode pour lancer la popup afin d'assurer une personne
         */
        assurerPersonne(): void;
        /**
         * Méthode pour la réinitialisation des personnes sélectionnées
         */
        reinitialiserPersonnes(): void;
        /**
         * Méthode pour la sauvegarde de la modification de la liste des personnes assurées / assurables
         */
        gererChangementListePersonnes(): void;
        /**
         * Méthode pour la sauvegarde de la modification de la liste des personnes résiliées
         */
        gererChangementListePersonnesResiliees(): void;
        /**
         * Méthode pour l'initalisation de la création de l'assurance d'une personne
         */
        initierResilierPersonnes(): void;
        /**
         * Méthode pour le calcul de la prime
         */
        calculerPrime(quotite: number, duree: number, montantGarantiContrat: number, tauxDeCalcul: number): number;
        /**
         * Méthode pour trouver le libellé associé au code motif clôture
         * @param {string} code - le code motif clôture
         * @retrun {string} motif - le libellé associé
         */
        trouverCodeMotifCloture(code: string): any;
        /**
         * Méthode qui gère l'affichage du bouton résilier
         * @returns true si oui false si non
         */
        montrerBoutonResilier(): boolean;
    }
}

/**
 * Directive pour la gestion de l'affichage des informations concernant les personnes assurables / assurées des pages de l'Assurance Compte et Court Terme Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwTabPersonnesAssurablesAssurees(): ng.IDirective;
}

/***
 * Ensemble d'énumérations concernant les éléments communs de l'application
 * @author S0076471 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Enumerations.Application {
    /**
     * Cette rubrique indique si l'option Déclaration Santé est cochée ou non
     * 'Oui' Oui
     * 'Non' Non
     */
    enum IndicateurDeclarationSanteEnum {
        OUI,
        NON,
    }
}

/***
 * Ensemble d'interfaces de modèles concernant Assurance Compte et Court Terme Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Application.Commun {
    /**
     * Interface des indicateurs de succes des requetes
     */
    interface IIndicateurSuccesRequetes {
        indicateurMiniProfilSucces: boolean;
        indicateurAutorisationDecouvert?: boolean;
    }
    /**
     * Interface des données récupérées dans la popup d'assurance des personnes
     */
    interface IDataAssurerPersonne {
        /**
         *
         */
        nomFamille: string;
        /**
         *
         */
        premierPrenom: string;
        /**
         *
         */
        codeLien: string;
        /**
         *
         */
        lien: string;
        /**
         *
         */
        identifiantPersonne: number;
        /**
         *
         */
        montantDisponible?: number;
        /**
         *
         */
        date?: string;
        /**
         *
         */
        pourcent?: number;
        /**
         *
         */
        prime?: number;
        /**
         *
         */
        duree?: number;
        /**
         *
         */
        quotite?: number;
        /**
         *
         */
        dateEffet?: string;
        /**
         *
         */
        declarationSante: boolean;
        /**
         *
         */
        isCourtTerme: boolean;
        /**
         *
         */
        isAssure: boolean;
        /**
         *
         */
        isResilie?: boolean;
        /**
         *
         */
        dateCloture?: string;
        /**
         *
         */
        codeMotifCloture?: string;
        /**
         *
         */
        motifCloture?: any;
        /**
         *
         */
        libelleMotifCloture?: string;
    }
    /**
     * Modèle des erreurs de la liste des erreurs
     */
    interface IErreurService {
        /**
         *
         */
        champs: string;
        /**
         *
         */
        codeLibelle: string;
        /**
         *
         */
        libelle: string;
        /**
         *
         */
        anchre?: string;
        /**
         *
         */
        boutonRecharger?: boolean;
    }
    /**
     * Interface des données utilisées par la sauvegarde
     */
    interface IDonneesCommunes {
        /**
         *
         */
        comptePrelevement: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit;
        /**
         *
         */
        listePersonnesResiliees?: Array<Modeles.Application.Commun.IDataAssurerPersonne>;
    }
    /**
     * Interface des données utilisées par la sauvegarde de l'assurance sur compte
     */
    interface IDonneesSauvegardeCompte {
        /**
         *
         */
        donneesCommunes: IDonneesCommunes;
        /**
         *
         */
        tranche: Modeles.Rest.ContratAssCompte.AssuranceSurCompte.ITranche;
        /**
         *
         */
        compteAssure: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit;
        /**
         *
         */
        listePersonnesMAJ: Array<Modeles.Application.Commun.IDataAssurerPersonne>;
    }
    /**
     * Interface des données utilisées par la sauvegarde de l'assurance court terme
     */
    interface IDonneesSauvegardeCourtTerme {
        /**
         *
         */
        donneesCommunes: IDonneesCommunes;
        /**
         *
         */
        montantGarantiContrat: number;
        /**
         *
         */
        concoursTresorerie: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IConcoursTresorerie;
        /**
         *
         */
        clauseBeneficiaire: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IClauseBeneficiaire;
        /**
         *
         */
        description: string;
        /**
         *
         */
        listePersonnesMAJ: Array<Modeles.Application.Commun.IDataAssurerPersonne>;
    }
}

/**
 * Ensemble des modèles de données issu des données délocalisées de la table DU1Y
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Application.DonneesDelocalisees.DU1Y {
    /**
     * Modèle de représentation des données délocalisées.
     */
    interface IData {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<IInformationLien>;
    }
    /**
     * Modèle de représentation des données d'informations de lien.
     */
    interface IInformationLien {
        codeNiveauGeographique: string;
        codeFamilleLienInterPersonnes: string;
        dateDebutValidite: string;
        codeTypeLienInterPersonnes: string;
        codeCaracteristiqueLien: string;
        libelleLienInterPersonnes: string;
        dateFinValidite: string;
    }
}

/**
 * Service pour la gestion de la sauvegarde des objets modifiés à l'écran
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IAssCptCourtTermeGestionSauvegardeService {
        setDonneesSauvegardeCompte: (donnees: Modeles.Application.Commun.IDonneesSauvegardeCompte) => void;
        getDonneesSauvegardeCompte: () => Modeles.Application.Commun.IDonneesSauvegardeCompte;
        setDonneesSauvegardeCourtTerme: (donnees: Modeles.Application.Commun.IDonneesSauvegardeCourtTerme) => void;
        getDonneesSauvegardeCourtTerme: () => Modeles.Application.Commun.IDonneesSauvegardeCourtTerme;
        setComptePrelevement: (comptePrelevement: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit, isCourtTerme: boolean) => void;
        setCompteAssure: (compteAssure: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit) => void;
        setTranche: (tranche: Modeles.Rest.ContratAssCompte.AssuranceSurCompte.ITranche) => void;
        setMontantGarantiContrat: (montant: number) => void;
        setListePersonnesMAJ: (listePersonnesMAJ: Array<Modeles.Application.Commun.IDataAssurerPersonne>, isCourtTerme: boolean) => void;
        setListePersonnesResiliees: (listePersonnesResiliees: Array<Modeles.Application.Commun.IDataAssurerPersonne>, isCourtTerme: boolean) => void;
        setTauxCalcul: (taux: number) => void;
        getTauxCalcul: () => number;
        setConcoursTersorerie: (concours: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IConcoursTresorerie) => void;
        setClauseBeneficiaire: (concours: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IClauseBeneficiaire) => void;
        setDescription: (valeur: string) => void;
    }
}

/**
 * Service pour la gestion de l'objet assuranceSurCompte
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IAssuranceCompteService {
        recupererAssuranceCompte: (codeEtablissement: string, identifiantEntiteTitulaire: number, numeroContratAssurance?: number) => MyWay.Services.IPromesse<Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte>;
    }
}

/**
 * Service pour la gestion de l'objet assuranceCourtTerme
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IAssuranceCourtTermeService {
        recupererAssuranceCourtTerme: (codeEtablissement: string, identifiantEntiteTitulaire: number, numeroContratAssurance?: number) => MyWay.Services.IPromesse<Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme>;
    }
}

/**
 * Service contenant les fonctionnalités pour l'assurance d'une personne
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IAssurerPersonneService {
        assurerPersonne: (personne: Object, dureeVie: number) => MyWay.Services.IPromesse<Modeles.Application.Commun.IDataAssurerPersonne>;
        assurerMultiplePersonnes: (personnes: Array<Object>, dureeVie: number, indice: number) => void;
    }
}

/**
 * Service pour la gestion de l'objet autorisationDecouvert
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IAutorisationDecouvertService {
        recupererAutorisationDecouvert: (codeEtablissement: string, codeGuichet: string, numeroCompte: string, numeroEntiteTitulaire: number, codeDevise: string) => MyWay.Services.IPromesse<Modeles.Rest.DecouvertCce.AutorisationDecouvert.IAutorisationDecouvert>;
    }
}

/**
 * Service pour la gestion de l'objet caracteristiqueMiniProfil
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IMiniProfilService {
        recupererCaracteristiqueMiniProfil: (codeEtablissement: string, codeGuichetInterbancaire: string, referenceProduitService: string, codeProduitService: string) => MyWay.Services.IPromesse<Modeles.Rest.SyntheseService.MiniProfil.ICaracteristiqueMiniProfil>;
    }
}

/**
 * Service contenant les fonctionnalités pour la résiliation d'une personne
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IResilierPersonneService {
        resilierPersonne: (personne: Array<Object>, listeMotifs: Array<any>) => MyWay.Services.IPromesse<Modeles.Application.Commun.IDataAssurerPersonne>;
    }
}

/**
 * Service d'initialisation des paramètres de l'application
 * @author S0076105
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

/**
 * Service de chargement des mocks dans le dossier "assets/mocks/*.json"
 * @author S0076105
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

/**
 * Classe de fonction utilitaire pour les services de l'application
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest {
    /**
     * Déclaration de la classe
     */
    class UtilsService {
        /**
         * Méthode pour la suppression des éléments ajouté par Angular dans l'objet
         * @param {T} objet - L'objet à nettoyer
         * @return {T} L'objet nettoyé
         */
        static nettoyerObjetCleAngular<T>(objet: T): T;
    }
}

/**
 * Ensemble d'énumérations concernant le service REST "/syntheseservice/v1/miniProfil"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Enumerations.Rest.SyntheseService.MiniProfil {
    /**
     * La recherche peut être effectuée :
     * par RICE (typeRecherche = "R"),
     * par N° de carte (typeRecherche = "C"),
     * par identifiant Entité titulaire (typeRecherche = "E").
     */
    enum CodeTypeRecherche {
        RICE,
        NUMERO_CARTE,
        ID_ENTITE_TITULAIRE,
    }
    /**
     * La restitution peut être effectuée :
     * Profil complet (typeRestitution à "C"),
     * Mini-Profil (typeRestitution à "M"),
     * Unitaire, pour le produit identifié (typeRestitution à "U").
     */
    enum CodeTypeRestitution {
        PROFIL_COMPLET,
        MINI_PROFIL,
        UNITAIRE,
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratasscompte/v1/assuranceCourtTerme"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.ContratAssCompte.AssuranceCourtTerme {
    interface IAssuranceCourtTerme {
        personne: IPersonne;
        parametre: IParametre;
        listePersonne: Array<IPersonne>;
        referenceAssurance: IReferenceAssurance;
        messageFonctionnel: IMessageFonctionnel;
        assurance: IAssurance;
        parametrage: IParametrage;
    }
    interface IPersonne {
        identifiantPersonne: number;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: string;
        typeLienInterPersonne: string;
        codeEtatSante: string;
        codeParticipationContrat: string;
        libelleParticipationProduit: string;
        quotiteParticipation: number;
        dureeAssurance: number;
        libelleProfession: string;
        codeCivilite: string;
        categorieSocioPro: string;
        numeroTelephone: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        localiteInsee: string;
        libelleNationalite: string;
        codeEtatPersonne: string;
        assurance: IAssurance;
    }
    interface IParametre {
        periodicite: string;
        dureeVie: number;
        ageLimite: number;
        plafondMontant: number;
        dureeRenouvellement: number;
        tauxCalculPrime: number;
        codeOption: string;
    }
    interface IAssurance {
        typeLigne: string;
        numeroContrat: number;
        nombrePersonneContrat: number;
        dateCloture: string;
        codeEtatProduitService: string;
        codeMotifCloture: string;
        libelleMotifCloture: string;
        dateFinEffet: string;
        montantDisponible: number;
        identifiantPersonne: number;
        codeProlongation: string;
        codebeneficiaire: string;
        libelleBeneficiaire: string;
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        montantGaranti: number;
        ricePrelevement: string;
        dateEffetAssurance: string;
        numeroOffre: number;
        identifiantProduitService: number;
        origineOffre: string;
        codeMotifClotureCCE: string;
    }
    interface IReferenceAssurance {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        montantGaranti: number;
        ricePrelevement: string;
        dateEffetAssurance: string;
        numeroOffre: number;
        identifiantProduitService: number;
        identifiantEntiteTitulaire: number;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    interface IParametrage {
        /**
         * undefined
         */
        listeConcoursTresorerie: Array<IConcoursTresorerie>;
        /**
         * undefined
         */
        listeClauseBeneficiaire: Array<IClauseBeneficiaire>;
        listeMotifCloture: Array<IMotifCloture>;
    }
    interface IConcoursTresorerie {
        /**
         * Code variant de 0 à 6
         */
        typeLigne: string;
        /**
         * Libellé associé
         */
        libelleLigne: string;
    }
    interface IClauseBeneficiaire {
        code: string;
        libelle: string;
    }
    interface IMotifCloture {
        code: string;
        libelle: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratasscompte/v1/assuranceSurCompte"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.ContratAssCompte.AssuranceSurCompte {
    interface IAssuranceSurCompte {
        parametre: IParametre;
        listeTranche: Array<ITranche>;
        listePersonne: Array<IPersonne>;
        personne: IPersonne;
        listeAssure: Array<IAssurance>;
        assurance: IAssurance;
        messageFonctionnel: IMessageFonctionnel;
        assure: IAssurance;
        parametrage: IParametrage;
    }
    interface IParametre {
        dureeVie: number;
        ageLimite: number;
        plafondMontant: number;
        tauxCalculPrime: number;
        periodicite: string;
        codeOption: string;
    }
    interface ITranche {
        trancheDebut: number;
        trancheFin: number;
        montantPrime: number;
    }
    interface IPersonne {
        identifiantPersonne: number;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: string;
        typeLienInterPersonne: string;
        dateEffetAssurance: string;
        codeEtatSante: string;
        montantDisponible: number;
        codeMotifCloture: string;
        libelleMotifCloture: string;
        codeCivilite: string;
        categorieSocioPro: string;
        numeroTelephone: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        localiteInsee: string;
        libelleNationalite: string;
        codeEtatPersonne: string;
        dateFinEffet: string;
        dateCloture: string;
        libelleProfession: string;
    }
    interface IAssurance {
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        montantGaranti: number;
        nombrePersonneContrat: number;
        dateEffet: string;
        ricePrelevement: string;
        riceRecepteur: string;
        numeroOffre: number;
        identifiantProduitService: number;
        identifiantPersonne: number;
        codeEtatSante: string;
        montantDisponible: number;
        codeTypeProduitService: string;
        dateCloture: string;
        codeEtatProduitService: string;
        numeroContratAssurance: number;
        codeMotifCloture: string;
        libelleMotifCloture: string;
        origineOffre: string;
        codeMotifClotureCCE: string;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    interface IParametrage {
        listeMotifCloture: Array<IMotifCloture>;
    }
    interface IMotifCloture {
        code: string;
        libelle: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/decouvertcce/v1/autorisationDecouvert"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.DecouvertCce.AutorisationDecouvert {
    interface IAutorisationDecouvert {
        listeDecouvertDuree: Array<IDecouvertDuree>;
        listeAutorisation: Array<IAutorisation>;
    }
    interface IDecouvertDuree {
        typeDecouvert: string;
        listeTypeDuree: Array<ITypeDuree>;
    }
    interface ITypeDuree {
        typeDureeDecouvert: string;
    }
    interface IAutorisation {
        periodiciteComEngagement: string;
        codeGuichet: string;
        codeEtablissement: string;
        numeroCompte: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        dateDebut: string;
        dateFin: string;
        montantDecouvertAutorise: number;
        typeDecouvert: string;
        valeurTauxComEngagement: number;
        montantFraisDossierDecouvert: number;
        codeDevise: string;
        montantAutorisationDecouvert: number;
        fraisDossierDecouvertDevise: number;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        codeRessourceFinancement: string;
        indicateurPrelevementCNU: boolean;
        tauxCommissionNonUtilisation: number;
        tauxEffectifGlobal: number;
        libelleTauxDebiteur: string;
        tauxInteretGlobalDebiteur: number;
        codeProduitEngagement: string;
        identifiantContrat: number;
        tauxCalculePrimeAssurance: number;
        indicateurReconductionDecouvert: boolean;
        codeDeviseCommission: string;
        identifiantContratEntreprise: number;
        dateCreationProfil: string;
        heureCreationProfil: string;
        dateModificationProfil: string;
        codeAnnulation: string;
        codeEtat: string;
        codeTauxBase: string;
        dateFinDecouvertModifie: string;
        typeDureeDecouvert: string;
        indicEditionLettreConfirmation: string;
        indicPossibiliteComEngagement: boolean;
        pourcentCAConfieTauxDecouvert: number;
        variationBaremeTauxDebiteurDef: number;
        tauxPeriodeJournalier: number;
    }
}

declare module ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.EntiteTitulaire.InformationEntiteTitulaire {
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        complementDesignationBancaire: string;
        codeEtatEntiteTitulaire: string;
        dateMAJEntiteTitulaire: string;
        codeMotifClotureEntiteTitulaire: string;
        dateClotureEntiteTitulaire: string;
        sousCodeModeCompositionET: string;
        codeAgentGestionEntiteTitulaire: number;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        codeTypeDesignationEntiteTitulaire: string;
        typeElementStructure: string;
        refExterneEDSDomiciliationET: number;
        refExterneEDSGestionET: number;
        identifiantEDSGuichet: number;
        identEDSGestionETNouveau: number;
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonneEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        natureLienET: string;
        pourcentageNuePropriete: number;
        pourcentagePleinePropriete: number;
        pourcentageUsufruit: number;
        nomCommercialProfessionnel: string;
        enseigneCommercialeLieuActivite: string;
        designationCourteLieuActivite: string;
        designationTiers: string;
        indicateurAffectationAdresse: boolean;
    }
    interface IInformationEntiteTitulaireQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/syntheseservice/v1/miniProfil"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.SyntheseService.MiniProfil {
    interface IParticipantProduit {
        identifiantTiers: number;
        codeRolePersonne: string;
        nomUsage: string;
        prenom: string;
        raisonSociale: string;
        dateNaissance: Date;
        codePersonnaliteJuridique: string;
        codeCivilite: string;
    }
    interface IIdentificationProduit {
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        codeProduitService: string;
        referenceProduitService: string;
        identifiantEntiteTitulaire: number;
        identifiantProduitService: number;
        numeroOffre: number;
        designationBancaireCourte: string;
    }
    interface IDonneeCommuneProduit {
        deviseTenueCompte: string;
        codeEtatProduitService: string;
        indicateurExistenceOpposition: string;
        sousCodeProduitService: string;
        indicateurModeGestionLivret: string;
        soldeMinuteCompte: number;
        montantCumuleImpayePret: number;
        chargeMensuelleEndettement: number;
        participantProduit: Array<IParticipantProduit>;
    }
    interface IDonneeSpecifiqueProfilComplet {
        codeEtatContractuelAnniversaire: string;
        montantDecouvertAutorise: number;
        montantCumuleOperationEcartee: number;
        montantARegulariser: number;
        montantVersementRegulier: number;
        montantEffetEncaissement: number;
    }
    interface IDonneeSpecifiqueMiniProfil {
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
    }
    interface ICaracteristiqueMiniProfil {
        identificationProduit: Array<IIdentificationProduit>;
        donneeCommuneProduit: Array<IDonneeCommuneProduit>;
        donneeSpecfiqueMiniProfil: Array<IDonneeSpecifiqueMiniProfil>;
        donneeSpecifiqueProfilComplet: Array<IDonneeSpecifiqueProfilComplet>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/decouvertcce/v1/autorisationDecouvert"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest.DecouvertCce.AutorisationDecouvert {
    /**
     * Interface de la requête au service REST "/decouvertcce/v1/autorisationDecouvert" de type GET
     */
    interface IAutorisationDecouvertRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroEntiteTitulaire: number;
        codeDevise: string;
    }
    /**
     * Interface du service
     */
    interface IAutorisationDecouvertRestService {
        sendGetRequest: (query: IAutorisationDecouvertRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.DecouvertCce.AutorisationDecouvert.IAutorisationDecouvert>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/contratasscompte/v1/assuranceCourtTerme"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest.ContratAssCompte.AssuranceCourtTerme {
    /**
     * Interface de la requête au service REST "/contratasscompte/v1/assuranceCourtTerme" de type GET
     */
    interface IAssuranceCourtTermeRestServiceGetQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        numeroContratAssurance?: number;
    }
    /**
     * Interface du service
     */
    interface IAssuranceCourtTermeRestService {
        sendGetRequest: (query: IAssuranceCourtTermeRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme>;
        sendPostRequest: (data: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme) => MyWay.Services.IPromesse<Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme>;
        sendDeleteRequest: (data: Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme) => MyWay.Services.IPromesse<Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/contratasscompte/v1/assuranceSurCompte"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest.ContratAssCompte.AssuranceSurCompte {
    /**
     * Interface de la requête au service REST "/contratasscompte/v1/assuranceSurCompte" de type GET
     */
    interface IAssuranceCompteRestServiceGetQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        numeroContratAssurance?: number;
    }
    /**
     * Interface du service
     */
    interface IAssuranceCompteRestService {
        sendGetRequest: (query: IAssuranceCompteRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte>;
        sendPostRequest: (data: Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte) => MyWay.Services.IPromesse<Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte>;
        sendDeleteRequest: (data: Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte) => MyWay.Services.IPromesse<Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/entitetitulaire/v2/informationEntiteTitulaire"
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest.EntiteTitulaire.InformationEntiteTitulaire {
    /**
     * Interface du service
     */
    interface IInformationEntiteTitulaireService {
        sendGetRequest: (query: Modeles.Rest.EntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaireQuery) => MyWay.Services.IPromesse<Modeles.Rest.EntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/syntheseservice/v1/miniProfil"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest.SyntheseService.MiniProfil {
    /**
     * Interface de la requête au service REST "/syntheseservice/v1/miniProfil" de type GET
     */
    interface IMiniProfilRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichetInterbancaire?: string;
        codeProduitService?: string;
        referenceProduitService?: string;
        numeroCarteBancaire?: string;
        identifiantEntiteTitulaire?: number;
        identifiantTiers?: number;
        typeRecherche: string;
        typeRestitution: string;
    }
    /**
     * Interface du service
     */
    interface IMiniProfilRestService {
        sendGetRequest: (query: IMiniProfilRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.SyntheseService.MiniProfil.ICaracteristiqueMiniProfil>;
    }
}
