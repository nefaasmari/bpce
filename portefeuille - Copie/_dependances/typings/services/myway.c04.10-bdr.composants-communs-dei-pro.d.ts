
declare module ComposantsCommunsDeiPro {
    var app: ng.IModule;
}

/**
 * Filtre pour la génération de la chaîne de caractère de l'adresse normée AFNOR
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Filtres {
    enum AdresseEnum {
        LIGNE_1,
        LIGNE_2,
        LIGNE_3,
        LIGNE_4,
        LIGNE_5,
        LIGNE_6,
        LIGNE_7,
    }
}

/**
 * Filtre pour le tri sur la colonne titulaire de la synthese des comptes
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Filtres {
}

/**
 * Filtre pour la transformation de l'affichage des statut des comptes
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Filtres {
}

/**
 * Filtre pour la transformation de l'affichage des numéros de téléphone
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Filtres {
}

/**
 * Filtre pour la transformation de l'affichage des plafonds des virements
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Filtres {
}

/**
 * Filtre pour la transformation de l'affichage des plafonds des virements
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Filtres {
}

/**
 * Contrôleur de la modale d'ajout d'un compte
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class AjoutCompteModaleControleur {
        private $scope;
        private $modalInstance;
        private data;
        static $inject: string[];
        /**
         * Iban du compte à ajouter
         */
        iban: string;
        /**
         * Libellé du compte à ajouter
         */
        libelle: string;
        /**
         * Bic du compte à ajouter
         */
        bic: string;
        /**
         * Indicateur d'affichage du message lors de l'ajout d'un nouveau compte
         */
        afficherMessageInformation: boolean;
        /**
         * Indicateur de validité du libellé du compte à ajouter
         */
        islibelleCorrect: boolean;
        islibelleCorrectRole: string;
        /**
         * Indicateur de validité de l'iban du compte à ajouter
         */
        isIbanCorrect: boolean;
        /**
         * Indicateur de blocage / déblocage du bouton valider
         */
        blocageDeblocageValider: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: boolean);
        /**
         *  Méthode de validation du libellé du compte à ajouter
         */
        validerLibelle(): void;
        /**
         * Gestion du blocage du bouton valider de la popup
         */
        bloquerDebloquerValider(): boolean;
        /**
         * Fonction pour la validation du barème sélectionné
         */
        validerAjoutCompte(): void;
        /**
         * Fonction pour l'annulation de la sélection d'un barème
         */
        annulerAjoutCompte(): void;
    }
}

/**
 * Contrôleur de la modale de confirmation de création d'abonnement
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    interface IInformationsConfirmation {
        isErreur: boolean;
        erreur: MyWay.Services.Erreur;
        message: string;
        identifiantClient: string;
        codeConfidentiel: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class ConfirmationOuvertureAbonnementControleur {
        private $scope;
        private $modalInstance;
        private modalService;
        private data;
        static $inject: string[];
        private titre;
        private isErreur;
        private erreur;
        private message;
        private identifiantClient;
        private codeConfidentiel;
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, modalService: MyWay.UI.ModalService, data: ComposantsCommunsDeiPro.Controleurs.IInformationsConfirmation);
        /**
         * Fonction pour la fermeture de la modale de confirmation d'ouverture d'abonnement
         */
        fermerModale(): void;
    }
}

declare module ComposantsCommunsDeiPro.Controleurs {
}

declare module ComposantsCommunsDeiPro.Controleurs {
    class PageDevDeiProControleur {
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, modaleService: MyWay.UI.ModalService);
    }
}

/**
 * Contrôleur de la directive mw-dei-pro-abonnement
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProAbonnementControleur {
        private $scope;
        private avenantCaracteristiqueAbonnementService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant client issu du contexte GGO
         */
        identifiantClient: string;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantPersonne: number;
        /**
         * Libellé de la personne morale issu du contexte GGO
         */
        libellePersonneMorale: string;
        /**
         * Identifiant tiers issu du contexte GGO
         */
        identifiantTiers: number;
        /**
         * Identifiant Abonne issu du contexte GGO
         */
        identifiantAbonne: string;
        /**
         * Indicateur d'affichage du bloc de gestion des comptes de prélèvement et de support pour Dei Pro avenant
         */
        affichageBlocDeiProAvenant: boolean;
        /**
         * Nature juridique issu du contexte GGO/Contexte, seulement utile dans le cadre de DEI PP Avenant
         */
        codeNatureJuridique: Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Le code service Banque à Distance
         */
        codeServiceBad: string;
        /**
         * Indicateur de lecture seule
         */
        lectureSeule: boolean;
        /**
         * Indicateur de recherche d'une eventuelle offre CE Net ouverte pour éviter les incompatibilités en ouverture
         */
        checkCenet: boolean;
        /**
         * Indicateur d'une requête REST en cours
         */
        private indicateurRequeteEnCours;
        /**
         * Indicateur de la réussite de la requête de récupération des informations concernant les comptes de prélèvement et de support
         */
        private indicateurRequeteCompteReussie;
        /**
         * Indicateur de la réussite de la requête de récupération des informations concernant les caractéristiques de l'abonnement
         */
        private indicateurRequeteCaracteristiqueReussie;
        /**
         * Erreur récupérée dans le cas d'un échec de la récupération des informations concernant les comptes de prélèvement et de support
         */
        private erreurRequeteCompte;
        /**
         * Erreur récupérée dans le cas d'un échec de la récupération des informations concernant les caractéristiques de l'abonnement
         */
        private erreurRequeteCaracteristique;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * L'objet retour de la requête mis en cache
         */
        private caracteristiqueAbonnement;
        constructor($scope: ng.IScope, avenantCaracteristiqueAbonnementService: Services.Application.IAvenantCaracteristiqueAbonnementService);
        /**
         * Méthode pour charger l'objet CaracteristiqueAbonnement
         */
        chargerCaracteristiqueAbonnementInitial(): void;
        /**
         * Méthode pour la gestion du retour de la requête de récupération des informations concernant les comptes de prélèvement et de support
         * @param {boolean} success - Indicateur si la requête est un succès
         * @param {MyWay.Services.Erreur} reason - Erreur de la requête
         */
        gererRetourCompte(success: boolean, reason?: MyWay.Services.Erreur): void;
        /**
         * Méthode pour le rechargement des requêtes des directives filles
         */
        rechargerDirectiveFille(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage des détails de l'abonnement
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiProAbonnement(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pro-abonnement-modification-compte
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProAbonnementModificationCompteControleur {
        private $scope;
        private caracteristiqueAbonnementService;
        private compteAbonnementService;
        private conversionCompteService;
        private saisieRiceService;
        static $inject: string[];
        /**
         * Constantes de gestion des comptes prélevé et support
         */
        private static NOUVEAU;
        private static ANCIEN;
        private static PRELEVE;
        private static SUPPORT;
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant client issu du contexte GGO
         */
        identifiantClient: string;
        /**
         * Identifiant tiers issu du contexte GGO
         */
        identifiantTiers: number;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantPersonne: number;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Identifiant Abonne issu du contexte GGO
         */
        identifiantAbonne: string;
        /**
         * Le code service Banque à Distance
         */
        codeServiceBad: string;
        /**
         * Indicateur de lecture seule
         */
        lectureSeule: boolean;
        /**
         * Etat de la checkbox Option Bourse (true cochée, false décochée)
         */
        indicateurEtatOptionBourse: boolean;
        /**
         * Objet caracteristiqueAbonnement contenant les informations sur l'abonnement
         */
        caracteristiqueAbonnement: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement;
        /**
         * Date de dernière connexion au formattage français
         */
        dateDerniereConnexion: string;
        /**
         * La liste des comptes prélevés
         */
        listeComptesPreleves: Array<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte>;
        /**
         * Objet Compte représentant le compte prélevé sélectionné
         */
        comptePreleveSelectionne: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        /**
         * La liste des comptes supports
         */
        listeComptesSupports: Array<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte>;
        /**
         * Objet Compte représentant le compte support sélectionné
         */
        compteSupportSelectionne: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, caracteristiqueAbonnementService: Services.Application.IAvenantCaracteristiqueAbonnementService, compteAbonnementService: Services.Application.ICompteAbonnementService, conversionCompteService: Services.Application.IConversionCompteService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * Méthode pour le chargement de l'objet CaracteristiqueAbonnement depuis le service
         */
        private chargerCaracteristiqueAbonnement();
        /**
         * Méthode pour le chargement de l'objet CompteAbonnement depuis le service
         */
        private chargerCompteAbonnement();
        /**
         * Méthode de création de la liste des comptes prélevés pour le composant Abonnment de l'avenant
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.IEpargneLiquide>} listeCompteEpargneLiquide - la liste des compte épargne liquide
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteCourantEntreprise>} listeCce - la liste des compte courant entreprise
         */
        private creerListeComptesPreleves(listeCompteEpargneLiquide, listeCce);
        /**
         * Méthode de création de la liste des comptes supports pour le composant Abonnement de l'avenant
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.IEpargneLiquide>} listeCompteEpargneLiquide - la liste des compte épargne liquide
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteCourantEntreprise>} listeCce - la liste des compte courant entreprise
         */
        private creerListeComptesSupports(listeCompteEpargneLiquide, listeCce);
        /**
         * Méthode pour calculer la clé RICE d'un compte au format RICE
         * @param {Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte} compte - l'objet compte pour lequel calculer la clé RICE
         * @return {string} cleRice - la clé calculer du RICE
         */
        calculerCleRice(compte: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte): string;
        /**
         * Méthode pour formater l'affichage des compte dans les listes déroulantes
         * @param {Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte} compte - l'objet compte
         * @return {string} compteFormate - l'affichage formate du compte
         */
        formaterAffichageCompte(compte: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte): string;
        /**
         * Méthode pour mettre à jour la valeur de la checkbox Option Bourse
         * @param {boolean} etat - l'état de la checkbox après action utilisateur
         */
        changerValeurOptionBourse(etat: boolean): void;
        /**
         * Méthode pour permettre de sauvegarder les mise à jour à faire avant la sauvegarde concernant les comptes support et prélevé de l'abonnement
         * @param {Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte} - le compte choisis dans la liste
         * @param {string} typeCompte - compte Prélevé ou Support
         */
        gererChangementCompteSupportPreleve(nouveauCompte: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte, typeCompte: string): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la modification des comptes de prélèvement et de support de l'abonnement
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiProAbonnementModificationCompte(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pro-indicateur-tableau
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProIndicateurTableauControleur {
        private $scope;
        static $inject: string[];
        /**
         * Identifiant du composant
         */
        id: string;
        /**
         * Indicateur renseignant sur l'état de sélection du composant
         */
        indicateurSelection: Enumerations.Rest.Communs.indicateurEnum;
        /**
         * Indicateur renseignant sur la possibilité d'édition du composant
         */
        indicateurEdition: boolean;
        /**
         * Indicateur renseignant sur la qualité d'exception d'exclusion du compte support abonnement
         */
        indicateurExceptionSupport: boolean;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope);
        gererEtat(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage du tableau des comptes de la synthèse des comptes
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiProIndicateurTableau(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pro-plafond-virements
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProPlafondVirementsControleur {
        private $scope;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantPersonne: number;
        /**
         * Identifiant client issu du contexte GGO / Portail
         */
        identifiantClient: string;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * Indicateur d'une requête REST en cours
         */
        private indicateurRequeteEnCours;
        constructor($scope: ng.IScope);
    }
}

/**
 * Directive pour la gestion de l'affichage de la gestion des plafonds des virements
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiProPlafondVirements(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pro-synthese-comptes
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProSyntheseComptesControleur {
        private $scope;
        private compteAbonnementService;
        private avenantCaracteristiqueAbonnementService;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantPersonne: number;
        /**
         * Identifiant Abonne issu du contexte GGO
         */
        identifiantAbonne: string;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Indicateur d'une requête REST en cours
         */
        private indicateurRequeteEnCours;
        /**
         * Indicateur d'une requête REST en cours
         */
        private indicateurRequeteEnErreur;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         *  Constructeur
         */
        constructor($scope: ng.IScope, compteAbonnementService: Services.Application.ICompteAbonnementService, avenantCaracteristiqueAbonnementService: Services.Application.IAvenantCaracteristiqueAbonnementService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Méthode pour l'initalisation de l'ajout d'un compte
         */
        initierAjoutCompte(): void;
        /**
         * Methode qui gère l'affichage ou non de la page si il y a une erreur
         * @returns true ou false
         */
        afficherPage(): boolean;
    }
}

/**
 * Directive pour la gestion de l'affichage de la synthèse des comptes
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiProSyntheseComptes(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pro-tableau-plafond-virements
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProTableauPlafondVirementsControleur {
        private $scope;
        private plafondVirementsService;
        private limiteVirementsService;
        private $filter;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantPersonne: number;
        /**
         * Identifiant client issu du contexte GGO / Portail
         */
        identifiantClient: string;
        /**
         * La liste des plafonds de virements
         */
        private listePlafondsComplets;
        /**
         * Indicateur de requête réussie
         */
        private requeteListePlafondReussie;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * Erreur en cas d'échec de la requête
         */
        private erreurListePlafond;
        constructor($scope: ng.IScope, plafondVirementsService: Services.Application.IPlafondVirementsService, limiteVirementsService: Services.Application.ILimiteVirementsService, $filter: ng.IFilterService);
        /**
         * Méthode pour initialiser le tableau des plafonds de virements
         */
        initialiserTableauPlafondVirements(): void;
        /**
         * Méthode pour le chargement de la liste des plafonds de virements
         * @return {MyWay.Services.IPromesse<Array<Modeles.Application.IPlafondVirementComplet>} la promesse content la liste des plafonds des virements
         */
        private chargerListePlafond();
        /**
         * Méthode pour la création de la liste des plafonds complets
         * @param {Array<Modeles.Rest.ContratBqdPro.PlafondVirement.IDetailParametrePlafondVirement>} listePlafond - La liste des plafonds des virements
         * @param {Array<Modeles.Rest.ContratBqdPro.PlafondVirement.IDetailParametrePlafondVirement>} listePlanchers - La liste des planchers des virements
         * @param {Array<Modeles.Rest.ContratBqdPro.LimiteVirement.ILimiteVirement>} listeLimites - La liste des limites des virements personnalisés
         */
        private creerListePlafondsComplets(listePlafond, listePlanchers, listeLimites);
        /**
         * Méthode pour la validation des saisies dans le tableau des plafonds des virements
         * @param {Modeles.Application.IPlafondVirementComplet} plafondComplet - Le plafond en cours de modification
         * @return {boolean} montantCorrect - L'indicateur signifiant que le montant personnalisé est bien compris entre le plafond et le plancher
         */
        validerChangementPlafond(plafondComplet: Modeles.Application.IPlafondVirementComplet): void;
        /**
         * Méthode pour permettre de savoir quels montant plafond ont été modifiés
         * @param {Modeles.Application.IPlafondVirementComplet} plafondComplet - le plafond en question
         */
        setIndicateurDeModification(plafondComplet: Modeles.Application.IPlafondVirementComplet): void;
        /**
         * Méthode pour envoyer l'ordre de blocage / déblocage du bouton "Valider"
         */
        blocageDeblocageValider(): void;
        /**
         * Méthode pour gérer les fonction à envoyé en cas de changment sur un montant
         * @param {Modeles.Application.IPlafondVirementComplet} plafond - le plafond
         */
        gererChangementMontant(plafond: Modeles.Application.IPlafondVirementComplet): void;
        /**
         * Méthode qui génère le message d'erreur de la saisie du montant perso
         * @param {Modeles.Application.IPlafondVirementComplet} plafond - le plafond
         * @returns le message d'erreur formatté
         */
        genererMessageErreur(plafond: Modeles.Application.IPlafondVirementComplet): string;
    }
    /**
     * Interface pour la résolution simultanée du pool de promesse
     */
    interface IListesUtiles {
        listePlafondsPlanchers: Array<Modeles.Rest.ContratBqdPro.PlafondVirement.IDetailParametrePlafondVirement>;
        listeLimites: Array<Modeles.Rest.ContratBqdPro.LimiteVirement.ILimiteVirement>;
    }
}

/**
 * Directive pour la gestion de l'affichage du tableau des plafonds de virements
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiProTableauPlafondVirements(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pro-tableau-synthese-comptes
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProTableauSyntheseComptesControleur {
        private $scope;
        private avenantCaracteristiqueAbonnementService;
        private compteAbonnementService;
        private conversionCompteService;
        private saisieRiceService;
        private conversionRibBicIbanRestService;
        private $filter;
        private $timeout;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantPersonne: number;
        /**
         * Identifiant Abonne issu du contexte GGO
         */
        identifiantAbonne: string;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * La liste des comptes contenus dans l'objet CompteAbonnement
         */
        listeCompte: Array<Modeles.Application.ISyntheseCompte>;
        /**
         * La liste des comptes filtrés par titulaire
         */
        private listeCompteFiltree;
        /**
         * Indicateur de la réussite de la requête de récupération des informations concernant les comptes
         */
        private indicateurRequeteCompteReussie;
        /**
         * Erreur récupérée dans le cas d'un échec de la récupération des informations concernant les comptes
         */
        private erreurRequeteCompte;
        /**
         * Le code service Banque à Distance
         */
        codeServiceBad: string;
        /**
         * Nombre indiquant le numéro de la page du tableau affiché
         */
        currentPage: number;
        /**
         * Nombre indiquant le nombre maximum d'élément affiché par page du tableau
         */
        itemPerPage: number;
        /**
         * Boolean qui permet d'affiche la ligne filtre ou non
         */
        private mwTableFiltre;
        /**
         * Contient des valeur entrées dans les champs de filtrage
         */
        private search;
        /**
         * Indicateur qui permet de savoir si la liste des compte tiers filtrée est vide ou non
         */
        indicateurRetourFiltreVide: boolean;
        /**
         * Numéro de la colonne qui doit afficher le filtre
         */
        private indexColumnFilter;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, avenantCaracteristiqueAbonnementService: Services.Application.IAvenantCaracteristiqueAbonnementService, compteAbonnementService: Services.Application.ICompteAbonnementService, conversionCompteService: Services.Application.IConversionCompteService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, conversionRibBicIbanRestService: Services.Rest.OperationFinanciereService.ConversionRibBicIban.IConversionRibBicIbanRestService, $filter: ng.IFilterService, $timeout: ng.ITimeoutService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Méthode pour le chargement de l'objet CompteAbonnement depuis le service
         */
        private chargerCompteAbonnement();
        /**
         * Méthode pour la création de la liste des comptes à partir de l'objet CompteAbonnement
         * @param {Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteAbonnement} compteAbonnement - l'objet CompteAbonnement
         */
        private creerListeCompte(compteAbonnement);
        /**
         * Méthode pour transformer les comptes Titres du CompteAbonnement en Compte puis SyntheseCompte et les ajouter à la liste pour l'affichage dans le tableau
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.ITitre>} listeTitre - la liste des comptes Titres
         */
        private alimenterListeCompteTitre(listeTitre);
        /**
         * Méthode pour transformer les comptes Produits DAT du CompteAbonnement en Compte puis SyntheseCompte et les ajouter à la liste pour l'affichage dans le tableau
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.IProduitDAT>} listeProduitDAT - la liste des comptes Produits DAT
         */
        private alimenterListeCompteProduitDAT(listeProduitDAT);
        /**
         * Méthode pour transformer les comptes Courants Entreprise du CompteAbonnement en Compte puis SyntheseCompte et les ajouter à la liste pour l'affichage dans le tableau
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteCourantEntreprise>} listeCompteCourantEntreprise - la liste des comptes Courants Entreprise
         */
        private alimenterListeCompteCce(listeCompteCourantEntreprise);
        /**
         * Méthode pour transformer les comptes Epargne Liquide du CompteAbonnement en Compte puis SyntheseCompte et les ajouter à la liste pour l'affichage dans le tableau
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.IEpargneLiquide>} listeEpargneLiquide - la liste des comptes Epargne Liquide
         */
        private alimenterListeCompteEpargneLiquide(listeEpargneLiquide);
        /**
         * Méthode pour transformer les comptes Carte Crédit Conso du CompteAbonnement en Compte puis SyntheseCompte et les ajouter à la liste pour l'affichage dans le tableau
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.ICarteCreditConso>} listeCarteCreditConso - la liste des comptes Carte Crédit Conso
         */
        /**
         * Méthode pour transformer les comptes Externe du CompteAbonnement en Compte puis SyntheseCompte et les ajouter à la liste pour l'affichage dans le tableau
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteExterne>} listeCompteExterne - la liste des comptes Externe
         */
        private alimenterListeCompteExterne(listeCompteExterne);
        /**
         * Méthode pour transformer les comptes Assurance du CompteAbonnement en Compte puis SyntheseCompte et les ajouter à la liste pour l'affichage dans le tableau
         * @param {Array<Modeles.Rest.ContratBqdPro.CompteAbonnement.IAssurance>} listeAssurance - la liste des comptes Assurance
         */
        /**
         * Méthode pour déterminer si le compte (non Externe) est inclus ou exclus de l'abonnement
         * @param {any} compte - Un compte sauf CompteExterne
         * @return {boolean} isCompteInclus - L'indicateur d'inclusion du compte, TRUE le compte est inclus, FALSE il ne l'est pas
         */
        inclureCompte(compte: any): boolean;
        /**
         * Méthode pour déterminer si le compte Externe est inclus ou exclus de l'abonnement
         * @param {Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteExterne} compteExterne - Le CompteExterne concerné
         * @return {boolean} isCompteInclus - L'indicateur d'inclusion du compte, TRUE le compte est inclus, FALSE il ne l'est pas
         */
        inclureCompteExterne(compteExterne: Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteExterne): boolean;
        /**
         * Méthode pour déterminer si un compte est un compte support en exception
         * @param {any} compte - Le compte à tester
         * @return {boolean} isExceptionSupport - L'indicateur du statut de compte support en exception, TRUE si oui, FALSE si non
         */
        detecterExceptionSupport(compte: any): boolean;
        private calculerCleRice(compte);
        /**
         * Méthode pour obtenir la conversion du format RICE en IBAN pour affichage
         * @param {Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte} compte - le compte à convertir
         * @return {MyWay.Services.IPromesse<Modeles.Rest.OperationFinanciereService.ConversionRibBicIban.IConversionRibBicIban>} l'objet contenant la conversion
         */
        private conversionRiceIban(compte);
        /**
         * Méthode d'activation du filtrage d'une colonne
         * @param {number} index - l'index
         * @param {string} id - l'id
         * @param {any} event - l'événement
         */
        onClickPictoFilter(index: number, id: string, event: any): void;
        /**
         * Méthode pour la gestion du retour de la requête de récupération des informations concernant les comptes
         * @param {boolean} success - Indicateur si la requête est un succès
         * @param {MyWay.Services.Erreur} reason - Erreur de la requête
         */
        gererRetourCompte(success: boolean, reason?: MyWay.Services.Erreur): void;
        /**
         * Gère l'exception du compte support de facturation
         * @param {Modeles.Application.ISyntheseCompte} syntheseCompte
         * @returns l'indicateur avec la bonne valeur
         */
        choisirIndicateurEditionConsultation(syntheseCompte: Modeles.Application.ISyntheseCompte): boolean;
        /**
         * Gère l'exception du compte S et F
         * @param {Modeles.Application.ISyntheseCompte} syntheseCompte - l'objet à traiter
         * @param {string} type - le type de case
         * @returns l'indicateur avec la bonne valeur
         */
        choisirIndicateurEditionPrelevVir(syntheseCompte: Modeles.Application.ISyntheseCompte, type: string): boolean;
        /**
         * Methode qui gère l'affichage des checkbox
         * @param {Modeles.Application.ISyntheseCompte} syntheseCompte - l'objet à traiter
         * @param {string} type - le type de case
         * @returns true ou false
         */
        afficherCheckbox(syntheseCompte: Modeles.Application.ISyntheseCompte, type: string): boolean;
    }
}

/**
 * Directive pour la gestion de l'affichage du tableau des comptes de la synthèse des comptes
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiProTableauSyntheseComptes(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pro-usager-principal
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProUsagerPrincipalControleur {
        private $scope;
        private usagerPrincipalService;
        private $filter;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantTiers: number;
        /**
         * Liste des usagers possibles
         */
        private listeUsager;
        /**
         * Usager principal sélectionné
         */
        private usagerSelectionne;
        /**
         * Téléphone fixe de l'usager sélectionné
         */
        private telephoneFixe;
        /**
         * Téléphone mobile de l'usager sélectionné
         */
        private telephoneMobile;
        /**
         * Courriel de l'usager sélectionné
         */
        private courriel;
        /**
         * Adresse à afficher de l'usager sélectionné
         */
        private adresse;
        /**
         * Indicateur de requête en cours
         */
        private requeteListeUsagerEnCours;
        /**
         * Indicateur de requête réussie
         */
        private requeteListeUsagerReussie;
        /**
         * Erreur en cas d'échec de la requête
         */
        private erreurListeUsager;
        lectureSeule: boolean;
        constructor($scope: ng.IScope, usagerPrincipalService: Services.Application.IUsagerPrincipalService, $filter: ng.IFilterService);
        /**
         * Méthode pour le chargement de la liste des usagers
         */
        chargerListeUsager(): void;
        /**
         * Méthode pour la gestion du changement d'usager principal sélectionné
         */
        gererChangementUsagerSelectionne(): void;
        /**
         * Méthode pour la gestion du changement des valeurs des média lors des changements d'usagers
         */
        gererChangementInformationMedia(): void;
        /**
         * Méthode pour la gestion du changement de la valeur de l'adresse lors des changements d'usagers
         */
        gererChangementInformationAdresse(): void;
        /**
         * Méthode pour la récupération de la valeur d'un média
         * @param {Array<Modeles.Rest.Tiers.Media.IListeMedia>} listeMedia - Liste des médias d'un même type
         * @return {string} La valeur du média
         */
        recupererValeurMedia(listeMedia: Array<Modeles.Rest.Tiers.Media.IListeMedia>): string;
    }
}

/**
 * Directive pour la gestion de l'affichage du choix et des détails de l'usager principal
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiProUsagerPrincipal(): ng.IDirective;
}

/***
 * Ensemble d'énumérations communes aux avenant
 * @author S0077481 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Enumerations.Application {
    /**
     * Enumération pour l'affichage du statut des compte dans la synthèse des comptes
     * '' Vide
     * 'Support' compte Support
     * 'Lien PM' Lien Personne Morale
     * 'Tiers Lien PM' Tiers Lien Personne Morale
     * 'Mandat'  Mandatiare
     * 'Tiers'  Tiers
     */
    enum LibelleStatutEnum {
        VIDE,
        SUPPORT,
        LIEN_PM,
        TIERS_LIEN_PM,
        MANDAT,
        TIERS,
    }
    /**
     * Enumération pour les messages à l'issue de l'ajout d'un compte dans la synthèse des comptes
     */
    enum LibelleMessageAjoutCompteEnum {
        SUCCES,
        ECHEC,
    }
    /**
     * Enumération pour les messages à l'issue de la sauvegarde
     */
    enum LibelleMessageErreurEnum {
        ERREUR,
        ERREUR_PLAFOND_VIREMENT,
        ERREUR_MESURE,
    }
}

/***
 * Ensemble d'énumérations communes aux ouvertures
 * @author S0077481 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Enumerations.Application {
    /**
     * Enumération pour les messages à l'issue de la validation de l'ouverture des abonnements
     */
    enum LibelleMessagePopUpAvenant {
        SUCCES,
        SUCCES_DEI_PRO,
        SUCCES_DEI_PP,
        SUCCES_DEI_SP,
        SUCCES_MOBILE_PRO,
        SUCCES_TELECONSEILLER_PRO,
        SUCCES_TELEPHONE_PRO,
        MOT_DE_PASSE,
    }
}

/**
 * Ensemble d'énumérations permettant de caractériser l'application en cours
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Enumerations.Application {
    /**
     * Énumération pour la caractérisation de l'application en cours
     */
    enum typeApplicationDeiEnum {
        DEI_PRO_OUVERTURE = 0,
        DEI_PRO_AVENANT = 1,
        DEI_PP_OUVERTURE = 2,
        DEI_PP_AVENANT = 3,
        DEI_SP_OUVERTURE = 4,
        DEI_SP_AVENANT = 5,
        MOBILE_PRO_OUVERTURE = 6,
        MOBILE_PRO_AVENANT = 7,
        TELECONSEILLER_PRO_OUVERTURE = 8,
        TELECONSEILLER_PRO_AVENANT = 9,
        TELEPHONE_PRO_OUVERTURE = 10,
        TELEPHONE_PRO_AVENANT = 11,
    }
}

/**
 * Ensemble d'énumérations concernant l'ensemble des services REST
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Enumerations.Rest.Communs {
    /**
     * Énumération pour les indicateurs des objets REST
     * OUI: "O"
     * NON: "N"
     */
    enum indicateurEnum {
        OUI,
        NON,
    }
    /**
     * Détermine si l'entité titulaire est privée ou professionnelle.
     * 1 Usage privé
     * 2 Usage professionnel
     */
    enum CodeTypeUsageEnum {
        PRIVE = 1,
        PROFESSIONNEL = 2,
    }
    /**
     * Cette rubrique indique si le produit peut être compte support ou de facturation pour les canaux
     * 'O' Support et Facturation
     * 'N' Ni Support, ni Facturation
     * 'F' Facturation uniquement
     * 'S' Support uniquement
     */
    enum IndicateurSupportFactBQDEnum {
        SUPPORT_FACTURATION,
        AUCUN,
        FACTURATION,
        SUPPORT,
    }
}

/***
 * Ensemble d'interfaces de modèles pour l'ajout des comptes
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Modeles.Application {
    /**
     * Interface des données récupérées dans la popup d'ajout de compte
     */
    interface IDataAjoutCompte {
        libelle: string;
        iban: string;
        bic: string;
    }
}

/**
 * Ensemble des modèles de données issu des données délocalisées de la table N818
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Modeles.Application.DonneesDelocalisees.N818 {
    /**
     * Modèle de représentation des données délocalisées.
     */
    interface IData {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<IInformationTarification>;
    }
    /**
     * Modèle de représentation des données d'informations de tarifications.
     */
    interface IInformationTarification {
        COCEAG: string;
        UCGQST: string;
        UCNQSB: string;
        UCNEFF: string;
        UDAQSR: string;
        YNOXEP: string;
        UCOQTF: string;
        UCTQOS: string;
    }
}

/***
 * Ensemble d'interfaces de modèles pour les plafonds des virements
 * @author S0076471 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Modeles.Application {
    /**
     * Interface pour la création des objet peuplant le tableau des plafonds des virements
     */
    interface IPlafondVirementComplet {
        codeTypeVirement?: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum;
        typeControle: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.TypeControleEnum;
        montantStandard: number;
        montantPlafond: number;
        montantPlancher: number;
        montantAutorise: number;
        indicateurChangement: boolean;
        indicateurValiditeMontant: boolean;
        indicateurValiditeMontantRole: string;
    }
}

/***
 * Ensemble d'interfaces de modèles pour la synthèse des comptes
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Modeles.Application {
    /**
     * Interface pour créer un objet adapté à l'affichage dans le tableau de synthèse des comptes
     */
    interface ISyntheseCompte {
        /**
         * Objet compte pour la sauvagarde
         */
        compte: ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        /**
         * Libellé associé au statut du compte
         */
        libelleCodeStatut: string;
        /**
         * Indicateur du statut "Tiers" du compte
         */
        isCompteTiers: boolean;
        /**
         * Indicateur d'inclusion / exclusion du compte de l'abonnement
         */
        isCompteInclus: boolean;
        /**
         * Indicateur de compte support en exception
         */
        isExceptionSupportAbonnement: boolean;
        /**
         * Le libellé personnalisé du compte Epargne Liquide
         */
        libelleComptePersonnalise?: string;
        /**
         * Le numéro de compte au format IBAN
         */
        compteFormatIban?: string;
    }
    /**
     * Interface pour la modification des compte prélevé et support de l'abonnement
     */
    interface IModificationCompte {
        /**
         * Compte prélevé au chargement de la page
         */
        ancienComptePreleve: string;
        /**
         * Compte support au chargement de la page
         */
        ancienCompteSupport: string;
        /**
         * Compte prélevé à l'issue des modifications
         */
        nouveauComptePreleve: string;
        /**
         * Compte support à l'issue des modifications
         */
        nouveauCompteSupport: string;
    }
}

/**
 * Service contenant les fonctionnalités pour l'ajout d'un compte
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface IAjoutCompteService {
        ajouterCompte: (afficherMessageInformation: boolean) => MyWay.Services.IPromesse<Modeles.Application.IDataAjoutCompte>;
        genererBic(iban: string): MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.OperationFinanciereService.DeterminationBic.IDeterminationBic>;
    }
}

/**
 * Service pour la gestion de l'objet caracteristiqueAbonnement pour l'avenant
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface IAvenantCaracteristiqueAbonnementService {
        recupererCaracteristiqueAbonnement: (codeEtablissement: string, identifiantClient: string, identifiantTiers: number, codeServiceBad: string) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
        cloturerAbonnement: (caracteristiqueAbonnement: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
        recupererUsagerPrincipal: (typeApplication: Enumerations.Application.typeApplicationDeiEnum, codeEtablissement: string) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IUsagerPrincipal>;
        setIndicateurEtatOptionBourse: (etat: boolean) => void;
        getIndicateurEtatOptionBourse: () => boolean;
        setListeCompte: (liste: Array<Modeles.Application.ISyntheseCompte>) => void;
        getListeCompte: () => Array<Modeles.Application.ISyntheseCompte>;
        getCaracteristiqueAbonnement: () => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement;
        setModificationComptes: (compte: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte, typeCompte: string, natureCompte: string) => void;
        getModificationComptes: () => Modeles.Application.IModificationCompte;
        recupererInformationAbonne: (codeEtablissement: string, identifiantTiers: number) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.InformationAbonne.IInformationAbonne>;
    }
}

/**
 * Service contenant les fonctionnalités pour gérer l'objet compteAbonnement pour l'avenant
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface ICompteAbonnementService {
        recupererCompteAbonnement: (codeEtablissement: string, identifiantPersonne: number, identifiantAbonne: string, codeNatureJuridique: Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum, codeServiceBad: string) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteAbonnement>;
        ajouterCompte(): MyWay.Services.IPromesse<Modeles.Application.ISyntheseCompte>;
    }
}

/**
 * Service contenant les fonctionnalités pour la confirmation de l'ouverture d'un abonnement
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface IConfirmationOuvertureService {
        confirmerOuverture: (informationsConfirmation: ComposantsCommunsDeiPro.Controleurs.IInformationsConfirmation) => void;
    }
}

/**
 * Service pour la conversion des objets issu du service REST "/contratbqdpro/v1/compteAbonnement" en objet compte du service REST "/contratbqdpro/v1/caracteristiqueAbonnement"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface IConversionCompteService {
        convertirEpargneLiquideVersCompte: (epargneLiquide: Modeles.Rest.ContratBqdPro.CompteAbonnement.IEpargneLiquide) => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        convertirTitreVersCompte: (titre: Modeles.Rest.ContratBqdPro.CompteAbonnement.ITitre) => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        convertirCceVersCompte: (cce: Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteCourantEntreprise) => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        convertirProduitDATVersCompte: (produitDAT: Modeles.Rest.ContratBqdPro.CompteAbonnement.IProduitDAT) => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        convertirAssuranceVersCompte: (assurance: Modeles.Rest.ContratBqdPro.CompteAbonnement.IAssurance) => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        convertirCarteCreditConso: (carteCreditConso: Modeles.Rest.ContratBqdPro.CompteAbonnement.ICarteCreditConso) => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        convertirCompteExterne: (compteExterne: Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteExterne) => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
        convertirCompteAssocie: (compteAssocie: Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteAssocie) => Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte;
    }
}

/**
 * Service contenant les fonctionnalités pour les entretiens commerciaux
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface IEntretienCommercialUtilsService {
        alimenterResultatEntretien: (identifiantPersonne: number, identifiantProduitService: number, codeTypeProduitService: string, codeTypeResultatCommercial: string) => ComposantsCommunsDeiPro.Modeles.Rest.EntretienCommercial.ResultatEntretien.IResultat;
        getCodeTypeProduitServiceGCP: (donneesTableDelocalisee: any, identifiantProduitService: string) => string;
    }
}

/**
 * Service pour la création des objets pour la sauvegarde de l'abonnement
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface IGestionSauvegardeCaracteristiqueAbonnementService {
        genererAbonnePourSauvegarde: (typeApplication: Enumerations.Application.typeApplicationDeiEnum, codeEtablissement: string, identifiantTiers: number, identifiantAbonnement: string, codeNatureJuridique: Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IAbonne>;
        genererAbonnementPourSauvegarde: (typeApplication: Enumerations.Application.typeApplicationDeiEnum, codeEtablissement: string, numeroOffre: number, identifiantProduitService: number, caracteristiqueAbonnement?: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement, indicateurOptionBourse?: boolean) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IAbonnement>;
        genererFacturationPourSauvegarde: (typeApplication: Enumerations.Application.typeApplicationDeiEnum, codeEtablissement: string, caracteristiqueAbonnement?: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement, compteSupportFacturationBDQEffectif?: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICompte) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IFacturation>;
        genererUsagerPrincipalPourSauvegarde: (typeApplication: Enumerations.Application.typeApplicationDeiEnum, codeEtablissement: string, usagerSelectionne: Services.Application.IUsager) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IUsagerPrincipal>;
    }
}

/**
 * Service contenant les fonctionnalités pour la récupération des limites des virements
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface ILimiteVirementsService {
        recupererListeLimiteVirements(codeEtablissement: string, identifiantPersonne: number, identifiantClient: string): MyWay.Services.IPromesse<Array<Modeles.Rest.ContratBqdPro.LimiteVirement.ILimiteVirement>>;
    }
}

/**
 * Service contenant les fonctionnalités pour la récupération des plafonds des virements
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface du service
     */
    interface IPlafondVirementsService {
        recupererListePlafondVirements(codeEtablissement: string, identifiantPersonne: number, identifiantClient: string): MyWay.Services.IPromesse<Array<Modeles.Rest.ContratBqdPro.PlafondVirement.IDetailParametrePlafondVirement>>;
        convertirDetailJournalierVersPlafondComplet(listePlafond: Array<Modeles.Rest.ContratBqdPro.PlafondVirement.IDetailParametrePlafondVirement>, listePlanchers: Array<Modeles.Rest.ContratBqdPro.PlafondVirement.IDetailParametrePlafondVirement>, listeLimites: Array<Modeles.Rest.ContratBqdPro.LimiteVirement.ILimiteVirement>, typeControle: Enumerations.Rest.ContratBqdPro.Communs.TypeControleEnum, codeTypeVirement: Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum): Modeles.Application.IPlafondVirementComplet;
        convertirDetailUnitaireVersPlafondComplet(listePlafond: Array<Modeles.Rest.ContratBqdPro.PlafondVirement.IDetailParametrePlafondVirement>, listePlanchers: Array<Modeles.Rest.ContratBqdPro.PlafondVirement.IDetailParametrePlafondVirement>, listeLimites: Array<Modeles.Rest.ContratBqdPro.LimiteVirement.ILimiteVirement>, typeControle: Enumerations.Rest.ContratBqdPro.Communs.TypeControleEnum, codeTypeVirement: Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum): Modeles.Application.IPlafondVirementComplet;
        getListePlafondVirement: () => Array<Modeles.Application.IPlafondVirementComplet>;
        setListePlafondVirement: (liste: Array<Modeles.Application.IPlafondVirementComplet>) => void;
    }
}

/**
 * Service contenant les fonctionnalités pour la gestion des usagers et de l'usager principal
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Services.Application {
    /**
     * Interface d'un objet usager utilisé dans l'application
     */
    interface IUsager {
        designationTiers: string;
        identifiantTiers: number;
        identifiantClient: string;
        indicateurUsagerDefault: boolean;
        indicateurUsagerSelectionne: boolean;
        informationAbonne?: Modeles.Rest.ContratBqdPro.InformationAbonne.IInformationAbonne;
        relationAbonne?: Modeles.Rest.ContratBqdPro.RelationAbonne.IRelationAbonne;
        media: Modeles.Rest.Tiers.Media.IMedia;
        adresse: Array<Modeles.Rest.Tiers.Adresse.IAdresse>;
    }
    /**
     * Interface du service
     */
    interface IUsagerPrincipalService {
        recupererListeUsager: (codeEtablissement?: string, identifiantTiers?: number) => MyWay.Services.IPromesse<Array<IUsager>>;
        recupererUsagerPrincipal: (typeApplication: ComposantsCommunsDeiPro.Enumerations.Application.typeApplicationDeiEnum, codeEtablissement: string, identifiantTiers: number) => MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IUsagerPrincipal>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest {
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
declare module ComposantsCommunsDeiPro.Services.Rest {
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

/***
 * Ensemble d'énumérations concernant le service REST "/contratbqdpro/v1/caracteristiqueAbonnement"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement {
    /**
     * Indique le niveau de service d'un abonnement de Banque à Distance.
     * Chaque service doit être disponible avec une option 'Standard', les autres options concernent des niveaux de service différents.
     * 'STD  ' Option standard - présente pour chaque service BAD
     * 'BAS  ' Basique (service PHONE)
     * 'VIR  ' Virement (services PHONE & PHONP)
     */
    enum OptionServiceBADEnum {
        STANDARD,
        BASIQUE,
        VIREMENT,
    }
    /**
     * Indique si les données doivent etre remontées ou non à Gestitres. Evite la remontée systématique des données Banque à distance vers Gestitres.
     * '0' Consultation
     * '1' OPCVM (personne physique)
     * '2' Standard (personne physique)
     * '5' OPCVM (personne morale)
     * '6' Standard (personne morale)
     */
    enum IndicateurRemonteeGestitresEnum {
        CONSULTATION,
        OPCVM_PHYSIQUE,
        STANDARD_PHYSIQUE,
        OPCVM_MORALE,
        STANDARD_MORALE,
    }
    /**
     * Code indiquant l'état de cloture BAD
     * '0' actif
     * '1' bloqué suite 5 tentatives d'accès erronées
     * '2' bloqué suite 3 réponses Q/R secrètes erronées
     * '3' bloqué suite 3 saisies sceau électronique erronées
     * '9' clôturé
     */
    enum CodeClotureBADEnum {
        ACTIF = 0,
        BLOQUE_TENTATIVES = 1,
        BLOQUE_REPONSES_SECRETES = 2,
        BLOQUE_SAISIES_SCEAU = 3,
        CLOTURE = 9,
    }
    /**
     * Code définissant l'état d'un service de numérisation des relevés
     * 'A' Actif
     * 'R' Résilié
     * 'S' Suspendu.
     */
    enum CodeEtatServiceNumerisationEnum {
        ACTIF,
        RESILIE,
        SUSPENDU,
    }
    /**
     * Donne l'état globale de l'abonnement :
     * '0' = OK
     * '1' = Bloqué
     */
    enum EtatAbonnementBADGlobalEnum {
        OK,
        BLOQUE,
    }
    /**
     * Indicateur du service abonné
     * 0 pas d'abonnement/service
     * 1 abonne ouvert sans service associé
     * 2 présence d'au moins 1 service ouvert sur abonne ouvert
     * 3 présence d'au moins 1 service clos sur abonne ouvert
     */
    enum IndicateurAbonneServiceEnum {
        SANS_ABONNEMENT = 0,
        ABONNE_SANS_SERVICE = 1,
        ABONNE_SERVICE_OUVERT = 2,
        ABONNE_SERVICE_CLOS = 3,
    }
    /**
     * Indique si le mot de passe est affiché en clair à la création d'un abonnement.
     * 'O' Affichage en clair.
     * 'N' Pas d'affichage.
     */
    enum IndicateurAffichageMotPasseEnum {
        AFFICHAGE_CLAIR,
        PAS_AFFICHAGE,
    }
    /**
     * Cette rubrique indique si l'option "Authentification renforcée" est détenue par l'abonné.
     * 'O' Oui
     * 'N' Non
     */
    enum IndicateurAuthentificationEnum {
        OUI,
        NON,
    }
    /**
     * Cette rubrique indique si l'option "Authentification renforcée" est détenue par l'abonné.
     * 'O' Oui
     * 'N' Non
     */
    enum CodeDetentionAuthentificationEnum {
        OUI,
        NON,
    }
    /**
     * Indique le choix d'envoi du code confidentiel
     * '0' Aucun envoi
     * '1' Envoi par SMS
     * '2' Envoi par courrier
     * '3' Affichage à l'écran
     */
    enum IndicateurChoixEnvoiCodeConfEnum {
        ESPACE,
        AUCUN_ENVOI,
        ENVOI_SMS,
        ENVOI_COURRIER,
        AFFICHAGE_ECRAN,
    }
    /**
     * '**' Envoi de toutes les occurences trouvées
     * ----- Valeurs pour traitement des primes ----
     * 'CR' Envoi des primes EL à créér
     * 'EX' Envoi des primes EL à extourner
     * 'AN' Envoi des primes EL à annuler
     * 'AM' Envoi des primes EL à annuler-modifier
     * 'RE' Envoi des primes EL à rejeter
     * ----- Valeurs pour traitement des lots ----
     * 'TR' Envoi des lots transmis
     * 'RG' Envoi des lots régularisés
     * ----- Valeurs pour trait. des mouvements SCT ----
     * 'NP' Envoi des mouvements non purgés
     * ------ Valeurs pour liste comptes d'une personne
     * 'PR' Comptes pour prélèvement EL (00,01,04,06,11)
     * ------ Valeurs pour lecture BD.
     * 'BD' Renvoi des informations d'un BD.
     * 'CP' Renvoi des info du BD d'un compte
     * ------ Valeurs simulation cloture PEL
     * 'AF' Simulation cloture avec anniv. fichier
     * Utilisé au moment de la cloture (Simulation)
     * 'AC' Simulation cloture avec anniv. calcules
     * Utilise pour prorogation avec recalcul a
     * l'anniversaire précedant .
     * 'PA' Simulation cloture au prochain anniversaire
     * Non utilisé.
     * 'LT' Simulation cloture 'a long terme'
     * Non utilisé.
     * 'HI' Lecture historique interets (Hors Livrets 28)
     * 'CS' Création manuelle une demande prime gérée par SEQUOIA
     * 'LS' Lecture d'une demande de prime gérée par SEQUOIA
     * 'AS' Modification d'une demande prime gérée par SEQUOIA
     * 'CI' Création manuelle dossier d'instruction géré par IPN
     * 'LI' Lecture d'un dossier d'instruction géré par IPN
     * 'AI' Modification dun dossier d'instruction géré par IPN
     * 'TS' Traitement demandes primes EL environnement IPN/SEQUOI
     * ------ Valeurs
     * 'MO' Sauvegarde modofication avenant DEI PRO
     */
    enum CodeActionEnum {
        PRIMES_A_CREER,
        PRIMES_A_EXTOURNER,
        PRIMES_A_ANNULER,
        PRIMES_A_ANNULER_MODIFIER,
        PRIMES_A_REJETER,
        LOTS_TRANSMIS,
        LOTS_REGULARISES,
        MOUVEMENTS_NON_PURGES,
        COMPTES_PRELEVEMENTS,
        INFORMATIONS_BD,
        INFORMATIONS_BD_COMPTE,
        SIMULATION_CLOTURE_ANNIVERSAIRE_FICHIER,
        SIMULATION_CLOTURE_ANNIVERSAIRE_CALCULES,
        SIMULATION_CLOTURE_PROCHAIN_ANNIVERSAIRE,
        SIMULATION_CLOTURE_LONG_TERME,
        HISTORIQUE_INTERETS,
        CREATION_MANUELLE_PRIME_SEQUOIA,
        LECTURE_PRIME_SEQUOIA,
        MODIFICATION_MANUELLE_PRIME_SEQUOIA,
        CREATION_MANUELLE_DOSSIER_INSTRUCTION_PIN,
        MODIFICATION_DOSSIER_INSTRUCTION_PIN,
        LECTURE_DOSSIER_INSTRUCTION_PIN,
        TRAITEMENT_PRIME_SEQUOIA_PIN,
        MODIFICATION,
    }
}

/***
 * Ensemble d'énumérations communes
 * @author S0077481 (Kevin Garrido)
 */
declare module ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs {
    /**
     * Détermine le type de virement effectué depuis le socle plurimédia.
     *  'E'        Virement SEPA France
     *  'I'        Virement Interne
     *  'S'        Virement SEPA hors France
     *  'X'        Tout type
     *
     * Valeurs pour Espace Unique Internet :
     *  'I'        Virement Intra-titulaire
     *  'E'        Virement externe sur compte tiers
     */
    enum CodeTypeVirementSoclePlurimediaEnum {
        VIREMENT_SEPA_FR,
        VIREMENT_INTERNE,
        VIREMENT_SEPA_HORS_FR,
        TOUT_TYPE,
    }
    enum CodeTypeVirementEspaceUniqueInternetEnum {
        VIREMENT_INTRA_TITULAIRE,
        VIREMENT_EXTERNE_COMPTE_TIERS,
    }
    /**
     * Détermine un type de plafond à prendre en
     * compte lors d'un virement sur DEI :
     *   - Unitaire / pour une opération donnée
     *   - Journalier / pour l'ensemble des ope de la journée
     *
     *   'U'        Unitaire
     *   'J'        Journalier
     */
    enum TypeControleEnum {
        UNITAIRE,
        JOURNALIER,
    }
    /**
     * Détermine un service de la banque à distance
     *
     *  '01'       Particuliers
     *  'PR'       Professionnels
     *  '03'       Personnes Protégées
     *  '04'       Secteur Public
     *  '05'       E-remises
     *  '06'       Espace Unique
     */
    enum CodeServiceEnum {
        PARTICULIERS,
        PROFESSIONNELS,
        PROTEGEES,
        SECTEUR_PUBLIC,
        E_REMISES,
        ESPACE_UNIQUE,
    }
    /**
     * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
     * 'TIT' Titulaire
     * 'REP' Représentant légal
     * 'PRO' Mandataire
     * 'GER' Gérant de tutelle
     * 'IPM' Liens inter personnes morales
     * 'TPM' Tiers liens personnes morales
     * 'AUT' Autres
     */
    enum CodeStatutEnum {
        TITULAIRE,
        REPRESENTANT_LEGAL,
        MANDATAIRE,
        GERANT_TUTELLE,
        LIENS_INTER_PERSONNES_MORALES,
        TIERS_PERSONNES_MORALES,
        AUTRES,
    }
    /**
     * Code qui indique la nature juridique d'une personne, en distinguant les personnes morales des personnes assimilées morales.
     * '1' Personne physique
     * '2' Personne morale
     * '3' Personne assimilée morale
     */
    enum CodeNatureJuridiqueEnum {
        PHYSIQUE = 1,
        MORALE = 2,
        ASSIMILE_MORALE = 3,
    }
    /**
     * Détermine le média d'accès client dans le cadre d'un service de la Banque à Distance
     * 'TC' Télécureuil
     * 'TP' Télécureuil Pro
     * 'PH' Phonécureuil
     * 'WE' Internet
     * 'WS' INTERNET SP
     * 'WM' WEBPROTEXION
     * 'MP' MOBILE PRO
     * 'MO' MOBILE
     * 'BL' BORNE LIBRE SERVICE
     * 'PP' TELEPHONE PRO
     * 'WP' INTERNET PRO
     * 'TV' TELEVISION INTERACTI
     * 'DE' TELECONSEILLER (direct écureuil)
     * 'PH' TELEPHONE
     */
    enum CodeTypeServiceMediaEnum {
        TELECUREUIL,
        TELECUREUIL_PRO,
        PHONECUREUIL,
        INTERNET,
        INTERNET_SP,
        WEBPROTEXION,
        MOBILE_PRO,
        MOBILE,
        BORNE_LIBRE_SERVICE,
        TELEPHONE_PRO,
        INTERNET_PRO,
        TELEVISION_INTERACTI,
        TELECONSEILLER,
        TELEPHONE,
    }
    /**
     * Permet de choisir le critère de tri de la liste des comptes associés d'un abonné
     * 'R' Tri sur le numéro de RIB des comptes
     * 'L' Tri sur le libellé des comptes
     */
    enum CritereTriCompteEnum {
        NUMERO_RIB_COMPTES,
        LIBELLE_COMPTES,
    }
    /**
     * Détermine un service de Banque à Distance. Direct Ecureuil, Phone Ecureuil ...
     * 'BLS'
     * 'DEIPP' DEI PP
     * 'DEISP' DEI SP
     * 'DEM'
     * 'DEMP' MOBILE PRO
     * 'PHONE'
     * 'PHONP' TELEPHONE PRO
     * 'WEB0'
     * 'WEB0P' DEI PRO
     * '3668P' TELECONSEILLER PRO
     */
    enum CodeServiceBADEnum {
        BLS,
        DEI_PP,
        DEI_SP,
        DEM,
        DEMP,
        PHONE,
        PHONP,
        WEB0,
        DEI_PRO,
        TELECONSEILLER_PRO,
    }
}

/***
 * Ensemble d'énumérations concernant le service REST "/contratbqdpro/v1/compteAbonnement"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.CompteAbonnement {
    /**
     * Cette rubrique indique quel type de facturation est appliquée.
     * 'A' Automatique
     * 'M' Manuelle
     */
    enum TypeTarificationEnum {
        AUTOMATIQUE,
        MANUELLE,
    }
    /**
     * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
     * '0' Service ouvert
     * '1' Clôture demandée
     * '2' Clôture en cours
     * '3' Produit/Service fermé
     * '8' Produit/Service en cours d'ouverture
     * '9' Versements non autorisés Produit
     */
    enum CodeEtatProduitServiceEnum {
        OUVERT = 0,
        CLOTURE_DEMANDEE = 1,
        CLOTURE_EN_COURS = 2,
        FERME = 3,
        OUVERTURE_EN_COURS = 8,
        VERSEMENTS_NON_AUTORISES = 9,
    }
    /**
     * Détermine si la valeur d'option est positive ou négative ou indifférente
     * '+'
     * '-'
     * ' ' Indifférent ( notamment pour Zéro )
     */
    enum CodeSigneEnum {
        PLUS,
        MOINS,
        INDIFFERENT,
    }
    /**
     * Indicateur option Versement Direct
     * 'O' Oui
     * 'N' Non
     * ' ' Non
     */
    enum IndicateurVersementDirectEnum {
        OUI,
        NON,
        NON_EMPTY,
    }
    /**
     * Détermine la nature-type d'un compte CCE
     * 'A' COMPTE COURANT
     * 'B' COMPTES D'AVANCE
     * 'C' LIGNE D'EQUIPEMENT
     * 'E' COMPTES DE DEPOT PROFESSIONNEL
     * 'F' COMPTE DE DEPOT EN GARANTIE
     */
    enum TypeNatureCompteEnum {
        COMPTE_COURANT,
        COMPTES_AVANCE,
        LIGNE_EQUIPEMENT,
        COMPTES_DEPOT_PROFESSIONNEL,
        COMPTE_DEPOT_GARANTIE,
    }
    /**
     * Détermine la nature du compte courant
     * Classification spécifique MYSYS
     * 'B  ' COMPTE COURANT
     * 'C  ' COMPTES D'AVANCE
     * 'D  ' LIGNE D'EQUIPEMENT
     * 'E  ' COMPTES DE DEPOT PROFESSIONNEL
     * 'F  ' COMPTE DE DEPOT EN GARANTIE
     */
    enum CodeNatureCompteEnum {
        COMPTE_COURANT,
        COMPTES_AVANCE,
        LIGNE_EQUIPEMENT,
        COMPTES_DEPOT_PROFESSIONNEL,
        COMPTE_DEPOT_GARANTIE,
    }
    /**
     * Précise pour EPARVIE et ECUREUIL GENERATIONS si le contrat prévoit le doublement du capital garanti en cas d'accident,
     * et son triplement en cas d'accident de la circulation.
     * 1 pas d'option
     * 2 option doublement/triplement
     * 0 produit non concerné
     */
    enum CodeDoubleTripleEnum {
        PAS_OPTION = 1,
        OPTION_DOUBLE_TRIPLE = 2,
        NON_CONCERNE = 0,
    }
    /**
     * Cette rubrique indique si le produit est créditable dans le cadre d'un prélèvement externe sur les canaux BQD.
     * 'O' Oui
     * 'N' Non
     */
    enum IndicateurCreditPrelevExtBQDEnum {
        OUI,
        NON,
    }
    /**
     * Cette rubrique indique si le compte externe est inclus dans l'abonnement ou dépend d'une personne morale liée à la personne titulaire de l'abonnement.
     * 'O' Oui : inclus dans l'abonnement
     * 'N' Non : exclu de l'abonnement
     */
    enum IndicateurCpteExterneInclusEnum {
        INCLUS,
        EXCLUS,
    }
    /**
     * Détermine le média support de l'acte de gestion
     * 'A' automatique - traitement de masse
     * 'P' Poste de travail (agence)
     * 'V' Vente multi-canal
     * 'W' Internet (client non authentifié fortement ou via OTP
     *     SMS) - avant projet SOL 19680
     *     Internet fixe - depuis projet SOL 19680
     * 'S' Internet en mode sécurisé (Client authentifié par    certificat ou lecteur CAP)
     * 'X' Internet mobile (application mobile téléchargée)
     */
    enum CodeCanalEnum {
        AUTOMATIQUE,
        AGENCE,
        MULTI_CANAL,
        INTERNET_FIXE,
        INTERNET_SECURISE,
        INTERNET_MOBILE,
    }
    /**
     * Détermine le système/support de sécurisation des opérations en ligne.
     * '01' SMS Particulier
     * '02' CAP Particulier
     * '03' SMS Professionnel
     * '04' CAP Professionnel
     * '05' Certificat Electronique
     */
    enum CodeTypeEnrolementEnum {
        SMS_PARTICULIERS,
        CAP_PARTICULIER,
        SMS_PROFESSIONNEL,
        CAP_PROFESSIONNEL,
        CERTIFICAT_ELECTRONIQUE,
    }
    /**
     * Identifie un usager d'un contrat d'abonnement BAD. Un abonnement peut être utilisé par un ou plusieurs usagers. Un seul des usagers est défini comme
     * étant le gestionnaire de l'abonnement, les autres étant des usagers "ordinaires".
     */
    enum NumeroUsagerContratBADEnum {
        SIX_ZERO,
    }
}

/***
 * Ensemble d'énumérations concernant le service REST "/contratbqdpro/v1/plafondVirement"
 * @author S0077481 (Kevin Garrido)
 */
declare module ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.PlafondVirement {
    /**
     * Détermine un segment de clientèle dans une typologie donnée :
     *   AC : Activation Clientèle Particuliers
     *   AP : Activation Clientèle Professionnel
     *   FC : Fréquence Client Personne
     *   FP : Fréquence Client PRO
     *   FR : Fréquence Client Relation
     *   MN : Marché national
     *   SA : Activation Clientèle V2
     *   SU : Univers Client
     */
    enum CodeSegmentationEnum {
        ACTIVATION_CLIENTELE_PARTICULIERS,
        ACTIVATION_CLIENTELE_PROFESSIONNEL,
        FREQUENCE_CLIENT_PERSONNE,
        FREQUENCE_CLIENT_PRO,
        FREQUENCE_CLIENT_RELATION,
        MARCHE_NATIONAL,
        ACTIVATION_CLIENTELE_V2,
        UNIVERS_CLIENT,
    }
    /**
     * Code Type permettant de définir si on parle d'un montant
     * plancher ou plafond.
     *   'PC'       Plancher
     *   'PF'       Plafond
     */
    enum CodeTypeMontantEnum {
        PLANCHER,
        PLAFOND,
    }
    /**
     * Détermine le type de montant d'un plafond
     *   'S'        Standards
     *   'P'        Personnalisés
     */
    enum TypeMontantEnum {
        STANDARD,
        PERSO,
    }
}

/***
 * Ensemble d'énumérations concernant le service REST "/tiers/v2/media"
 * @author S0077481
 */
declare module ComposantsCommunsDeiPro.Enumerations.Rest.Tiers.Media {
    /**
     * '01'       Téléphone fixe
     * '02'       Téléphone mobile
     * '03'       E-mail
     * '04'       Fax
     * '05'       SiteWeb
     */
    enum CodeTypeMediaEnum {
        TELEPHONE_FIXE,
        MOBILE,
        EMAIL,
        FAX,
        SITE_WEB,
    }
    /**
     * 'P' Personnel
     * 'T' Professionnel
     * 'A' Sécurisation Opérations en Ligne (SOL)
     */
    enum CodeTypeUsageMediaEnum {
        PERSONNEL,
        PROFESSIONNEL,
        SECURISATION,
    }
    enum OuiNonEnum {
        OUI,
        NON,
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/caracteristiqueAbonnement"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement {
    interface IUsagerPrincipal {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou  un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         * Référence interne MYSYS
         */
        identifiantTiers: number;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         * Référence externe connue du client abonné
         */
        identifiantClient: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire,
         * lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         */
        designationTiers: string;
    }
    interface IAbonnement {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou  un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Indique le niveau de service d'un abonnement de Banque à Distance.
         * Chaque service doit être disponible avec une option 'Standard', les autres options concernent des niveaux de service différents.
         * 'STD  '    Option standard - présente pour chaque service BAD
         * 'BAS  '    Basique (service PHONE)
         * 'VIR  '    Virement (services PHONE & PHONP)
         */
        optionServiceBAD: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.OptionServiceBADEnum;
        /**
         * Date d'ouverture
         */
        dateOuvertureBAD: string;
        /**
         * Date d'échéance de l'abonnement aux services de la banque à distance.
         */
        dateEcheance: string;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         */
        numeroOffreSouscrite: number;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         */
        identifiantProduitService: number;
        /**
         * Indique si les données doivent etre remontées ou non à Gestitres. Evite la remontée systématique des données Banque à distance vers Gestitres.
         * '0' Consultation
         * '1' OPCVM (personne physique)
         * '2' Standard (personne physique)
         * '5' OPCVM (personne morale)
         * '6' Standard (personne morale)
         */
        indicateurRemonteeGestitres: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.IndicateurRemonteeGestitresEnum;
        /**
         * Code indiquant l'état de cloture BAD
         * '0' actif
         * '1' bloqué suite 5 tentatives d'accès erronées
         * '2' bloqué suite 3 réponses Q/R secrètes erronées
         * '3' bloqué suite 3 saisies sceau électronique erronées
         * '9' clôturé
         */
        codeClotureBAD: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.CodeClotureBADEnum;
        /**
         * Détermine la catégorie de service BAD : clientèle des Particuliers ou clientèle des Professionnels
         * 'PA' Service PArticulier
         * 'PR' Service PRofessionnel
         */
        codeTypologieServiceBAD: string;
        /**
         * Détermine la date TS de dernière connexion réussie sur les canaux banque à distance.
         */
        dateLectureEcriture: string;
        /**
         * Défini le libellé associé à une typologie de service BQD
         * Exemples :
         * 'Service Particulier'
         * 'Service Professionnel'
         */
        libelleTypologieServiceBAD: string;
        /**
         * Nombre de tentative de connexion avec le mot de passe encodé restant avant blocage de l'abonnement.
         */
        nombreEssaiCode: number;
        /**
         * N° de user (a déterminer pas le socle plurimedia) qui a engendré le blocage de l'abonnement après x tentatives (a paramétrer sur le socle).
         */
        numeroUserBlocage: number;
        /**
         * Indique l'instant de création ou de MAJ d'un enregistrement DB2
         * format : SSAA-MM-JJ-HH.MM.SS.MMMMMM
         * Ex: 1992-12-31-14.10.12.999999
         */
        dateHeureMaj: string;
        /**
         * Code définissant l'état d'un service de numérisation des relevés
         * 'A' Actif
         * 'R' Résilié
         * 'S' Suspendu.
         */
        codeEtatServiceNumerisation: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.CodeEtatServiceNumerisationEnum;
        /**
         * Donne l'état globale de l'abonnement :
         * '0' = OK
         * '1' = Bloqué
         */
        etatAbonnementBADGlobal: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.EtatAbonnementBADGlobalEnum;
        /**
         * Identifiant d'un abonnement à un service de Banque A Distance
         */
        identifiantClientBAD: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
         */
        identifiantPersonne: number;
        /**
         * Indicateur du service abonné
         * 0 pas d'abonnement/service
         * 1 abonne ouvert sans service associé
         * 2 présence d'au moins 1 service ouvert sur abonne ouvert
         * 3 présence d'au moins 1 service clos sur abonne ouvert
         */
        indicateurAbonneService: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.IndicateurAbonneServiceEnum;
        /**
         * Indique si le mot de passe est affiché en clair à la création d'un abonnement.
         * 'O' Affichage en clair.
         * 'N' Pas d'affichage.
         */
        indicateurAffichageMotPasse: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.IndicateurAffichageMotPasseEnum;
        /**
         * Clé assurant la confidentialité d'un accès à un abonnement BAD
         */
        motPasse2: string;
        /**
         * Mot de passe associé à un abonné ou à un abonnement
         */
        motPasse1: string;
        /**
         * Cette rubrique indique si l'option "Authentification renforcée" est détenue par l'abonné.
         * 'O' Oui
         * 'N' Non
         */
        indicateurAuthentification: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.IndicateurAuthentificationEnum;
        /**
         * Numéro de téléphone de correspondance de la personne morale , association
         */
        numeroTelephoneCorrespondance: string;
        /**
         * Correspond au Relevé d'Identité Bancaire du compte sans le chiffre clé (modulo 97)
         */
        numeroRibAbrege: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... détenu par un client d'un Etablissement du GCE.
         * Codification spécifique au GCE.
         */
        referenceProduitService: string;
        /**
         * Permet d'identifier un tarif
         */
        codeTarifServiceBAD: string;
        /**
         * Indique la date à partir de laquelle il convient d'appliquer un élément (règle, indicateur, taux, montant, ...)
         */
        datePremierefacturation: string;
        /**
         * Détermine la date TS de dernière connexion réussie sur les canaux banque à distance.
         */
        derniereConnexion: string;
        nombreService: number;
    }
    interface IAbonne {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou  un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         * Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect
         */
        identifiantTiers: number;
        /**
         * Identifiant d'un abonnement à un service de Banque A Distance.
         */
        identifiantAbonnement: string;
        /**
         * Adresse e-mail
         */
        adresseEmail: string;
        /**
         * Code qui indique la nature juridique d'une personne, en distinguant les personnes morales des personnes assimilées morales.
         * '1' Personne physique
         * '2' Personne morale
         * '3' Personne assimilée morale
         */
        codeNatureJuridique: Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Cette rubrique indique si l'option "Authentification renforcée" est détenue par l'abonné.
         * 'O' Oui
         * 'N' Non
         */
        codeDetentionAuthentification: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.CodeDetentionAuthentificationEnum;
        /**
         * Indique le choix d'envoi du code confidentiel
         * '0' Aucun envoi
         * '1' Envoi par SMS
         * '2' Envoi par courrier
         * '3' Affichage à l'écran
         */
        indicateurChoixEnvoiCodeConf: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.IndicateurChoixEnvoiCodeConfEnum;
        /**
         * '**' Envoi de toutes les occurences trouvées
         * ----- Valeurs pour traitement des primes ----
         * 'CR' Envoi des primes EL à créér
         * 'EX' Envoi des primes EL à extourner
         * 'AN' Envoi des primes EL à annuler
         * 'AM' Envoi des primes EL à annuler-modifier
         * 'RE' Envoi des primes EL à rejeter
         * ----- Valeurs pour traitement des lots ----
         * 'TR' Envoi des lots transmis
         * 'RG' Envoi des lots régularisés
         * ----- Valeurs pour trait. des mouvements SCT ----
         * 'NP' Envoi des mouvements non purgés
         * ------ Valeurs pour liste comptes d'une personne
         * 'PR' Comptes pour prélèvement EL (00,01,04,06,11)
         * ------ Valeurs pour lecture BD.
         * 'BD' Renvoi des informations d'un BD.
         * 'CP' Renvoi des info du BD d'un compte
         * ------ Valeurs simulation cloture PEL
         * 'AF' Simulation cloture avec anniv. fichier
         *      Utilisé au moment de la cloture (Simulation)
         * 'AC' Simulation cloture avec anniv. calcules
         *      Utilise pour prorogation avec recalcul a
         *      l'anniversaire précedant .
         * 'PA' Simulation cloture au prochain anniversaire
         *      Non utilisé.
         * 'LT' Simulation cloture 'a long terme'
         *      Non utilisé.
         * 'HI' Lecture historique interets (Hors Livrets 28)
         * 'CS' Création manuelle une demande prime gérée par SEQUOIA
         * 'LS' Lecture d'une demande de prime gérée par SEQUOIA
         * 'AS' Modification d'une demande prime gérée par SEQUOIA
         * 'CI' Création manuelle dossier d'instruction géré par IPN
         * 'LI' Lecture d'un dossier d'instruction géré par IPN
         * 'AI' Modification dun dossier d'instruction géré par IPN
         * 'TS' Traitement demandes primes EL environnement IPN/SEQUOI
         */
        codeAction: string;
    }
    interface ICompte {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou  un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... détenu par un client d'un Etablissement du GCE.
         * Codification spécifique au GCE.
         */
        referenceProduitService: string;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'TPM' Tiers liens personnes morales
         * 'AUT' Autres
         */
        codeStatut: Enumerations.Rest.ContratBqdPro.Communs.CodeStatutEnum;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * 1 Usage privé
         * 2 Usage professionnel
         */
        codeTypeUsageEntiteTitulaire: Enumerations.Rest.Communs.CodeTypeUsageEnum;
        /**
         * Date de début de validité du mandat
         */
        dateDebutEffetMandat: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Indicateur compte effectivement compte support ou compte facturation ou les deux.
         */
        indicateurSupportFacturation: Enumerations.Rest.Communs.IndicateurSupportFactBQDEnum;
        /**
         * Indicateur produit interrogeable sur BQD
         */
        indicateurInterrogation: string;
        /**
         * Indicateur produit prélevable sur BQD
         */
        indicateurPrelevement: string;
        /**
         * Indicateur produit virable sur BQD
         */
        indicateurVirement: string;
        /**
         * Indicateur produit interrogeable sur BQD
         */
        indicateurInterrogationNE: string;
        /**
         * Indicateur produit prélevable sur BQD
         */
        indicateurPrelevementNE: string;
        /**
         * Indicateur produit virable sur BQD
         */
        indicateurVirementNE: string;
        /**
         * Indicateur de compte support de facturation non effectif
         */
        indicateurSuppFactNE: Enumerations.Rest.Communs.IndicateurSupportFactBQDEnum;
        /**
         * Le code IBAN est un préfixe au n° de RIB qui permet d'avoir un numéro de compte international
         * 'FR76' Caisse d'Epargne
         */
        codeIbanBanque: string;
        /**
         * IBAN du compte bénéficiaire d'un mouvement / opération financier
         */
        numeroIbanBeneficiare: string;
        /**
         * Banque détentrice du compte du destinataire du mouvement / opération
         */
        codeBicDestinataire: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire,
         * lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         */
        designationBancaire: string;
    }
    interface IFacturation {
        /**
         * Permet d'identifier un tarif
         */
        codeTarifServiceBAD: string;
        /**
         * Indique la date à partir de laquelle il convient d'appliquer un élément (règle, indicateur, taux, montant, ...).
         */
        datePremiereFacturation: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou  un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Indique la date prévue du dernier prélèvement
         */
        dateDernierPrelevementPrevu: string;
        /**
         * Identifie l'activité du compte
         * L'activité correspond à :
         * - soit un produit bancaire (ex : livret-A, Codévi, prêt personnel ...)
         * - soit une famille de produits bancaires (ex : PEP, Assurances ...)
         */
        codeActiviteCompte: string;
        /**
         * Radical du compte
         */
        radicalCompte: number;
        /**
         * Clé du compte
         */
        cleCompte: string;
    }
    interface ICaracteristiqueAbonnement {
        /**
         * Abonnement
         */
        abonnement: IAbonnement;
        /**
         * Message fonctionnel
         */
        messageFonctionnel: IMessageFonctionnel;
        /**
         * Interface BAD
         */
        interfaceBAD: IInterfaceBAD;
        /**
         * Usager Principal
         */
        usagerPrincipal: IUsagerPrincipal;
        /**
         * Abonné
         */
        abonne: IAbonne;
        /**
         * Facturation
         */
        facturation: IFacturation;
        /**
         * Liste des comptes
         */
        listeCompte: Array<ICompte>;
    }
    interface IMessageFonctionnel {
        /**
         * Code retour échange
         */
        codeRetour: number;
        /**
         * Libelle du message
         */
        libelleMessage: string;
        /**
         * Référence RIB d'un compte dans le périmètre d'un abonné
         */
        referenceRib: string;
    }
    interface IInterfaceBAD {
        /**
         * Détermine un service de Banque à Distance Direct Ecureuil, Phone Ecureuil ...
         */
        codeServiceBAD: string;
        /**
         * Identifie un abonné à un service de Banque A Distance.
         */
        identifiantAbonneBAD: string;
        /**
         * Date Heure maj
         */
        dateHeureEcriture: string;
        /**
         * Indique le niveau de service d'un abonnement
         * de Banque à Distance.
         * 'STD  '    Option standard - présente pour chaque service BAD
         * 'BAS  '    Basique (service PHONE)
         * 'VIR  '    Virement (services PHONE & PHONP)
         */
        optionServiceBAD: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.OptionServiceBADEnum;
        /**
         * Date d'échéance de l'abonnement aux services de la banque à distance.
         */
        dateEcheance: string;
        /**
         * Permet d'identifier un tarif
         */
        codeTarif: string;
        /**
         * Référence sous laquelle est répertorié par la Banque de France un Etablissement bancaire : Etablissement de crédit, Institution financière.
         */
        codeInterbancaire: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Indique la date à partir de laquelle il convient d'appliquer un élément (règle, indicateur, taux, montant, ...)
         */
        datePremiereFacturation: string;
        /**
         * Identifie l'activité du compte
         * L'activité correspond à :
         * - soit un produit bancaire (ex : livret-A, Codévi, prêt personnel ...)
         * - soit une famille de produits bancaires (ex : PEP, Assurances ...)
         */
        codeActiviteCompte: string;
        /**
         * Radical du compte
         */
        radicalCompte: number;
        /**
         * Clé du compte
         */
        cleCompte: string;
        /**
         * Cette rubrique indique si l'option "Authentification renforcée" est détenue par l'abonné.
         * 'O' Oui
         * 'N' Non
         */
        codeDetentionAuthentification: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.CodeDetentionAuthentificationEnum;
        /**
         * Adresse e-mail
         */
        adresseEmail: string;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         */
        identifiantProduitService: number;
        /**
         * Indique si les données doivent être remontées ou non à Gestitres. Evite la remontée systématique des données Banque à distance vers Gestitres.
         * '0' Consultation
         * '1' OPCVM (personne physique)
         * '2' Standard (personne physique)
         * '5' OPCVM (personne morale)
         * '6' Standard (personne morale)
         */
        topRemonteGestitre: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.IndicateurRemonteeGestitresEnum;
        /**
         * indique si une entité donnée est active ou clôturée ; concerne un abonné, un abonnement
         * '0' actif
         * '1' bloqué suite 5 tentatives d'accès erronées
         * '2' bloqué suite 3 réponses Q/R secrètes erronées
         * '3' bloqué suite 3 saisies sceau électronique erronées
         * '9' clôturé
         */
        codeClotureBAD: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.CodeClotureBADEnum;
        /**
         * Indique le choix d'envoi du code confidentiel
         * '0' Aucun envoi
         * '1' Envoi par SMS
         * '2' Envoi par courrier
         * '3' Affichage à l'écran (PTU)
         */
        indicateurEnvoiCodeConf: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.IndicateurChoixEnvoiCodeConfEnum;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         */
        numeroOffreSouscrite: number;
    }
    interface IErreurService {
        champs: string;
        codeLibelle: string;
        libelle: string;
        anchre?: string;
        boutonRecharger?: boolean;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/compteAbonnement"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CompteAbonnement {
    interface ICompteAbonnement {
        /**
         * Liste des titres
         */
        listeTitre: Array<ITitre>;
        /**
         * Liste des produits DAT
         */
        listeProduitDAT: Array<IProduitDAT>;
        /**
         * Liste des comptes courants entreprises
         */
        listeCompteCourantEntreprise: Array<ICompteCourantEntreprise>;
        /**
         * Liste des épargnes liquide
         */
        listeEpargneLiquide: Array<IEpargneLiquide>;
        /**
         * Liste des cartes de crédits conso
         */
        listeCarteCreditConso: Array<ICarteCreditConso>;
        /**
         * Liste des comptes externes
         */
        listeCompteExterne: Array<ICompteExterne>;
        /**
         * Cette rubrique indique quel type de facturation est appliquée.
         * 'A' Automatique
         * 'M' Manuelle
         */
        typeTarification: Enumerations.Rest.ContratBqdPro.CompteAbonnement.TypeTarificationEnum;
        /**
         * Liste des comptes associés
         */
        listeCompteAssocie: Array<ICompteAssocie>;
        /**
         * Listes des assurances
         */
        listeAssurance: Array<IAssurance>;
    }
    interface IEpargneLiquide {
        /**
         * Rice de l'épargne liquides
         */
        rice: IRice;
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
         * '0' Service ouvert
         * '1' Clôture demandée
         * '2' Clôture en cours
         * '3' Produit/Service fermé
         * '8' Produit/Service en cours d'ouverture
         * '9' Versements non autorisés Produit
         */
        codeEtatProduitService: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeEtatProduitServiceEnum;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         * 'ACFF'     ASSURANCE CFF
         * 'AEEP'     ASSURANCE SUR EPARGNE
         * 'AEMO'     SECUR'MEDIA FORMULE 1
         * 'AENO'     SECUR'MEDIA FORMULE 2
         * 'AEOO'     SECUR'MEDIA FORMULE 1 FAMILLE
         * 'C249'     ASSURETUDE
         * 'C320'     PERP
         * 'C326'     GARANTIE FAMILLE
         * 'C329'     BCP PATRIMONIO CRESCENTE
         * 'C335'     TENDANCES
         * 'C402'     CAP-ECUREUIL
         * 'C403'     ASSUR-ECUREUIL
         * 'C405'     INITIATIVES TRANSMISSION
         * 'C406'     NUANCE CAPITALISATION
         * 'C408'     INITIATIVES PLUS
         * 'C418'     AIKIDO
         * 'C419'     LIVRET ASSURANCE VIE
         * 'C518'     INITIATIVE TRANSMISSION
         * ...
         */
        codeTypeProduitService: string;
        /**
         * Détermine une variante ou une version de produit service dans le Catalogue avec des caractéristiques spécifiques.
         */
        sousCodeProduitService: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * 1 Usage privé
         * 2 Usage professionnel
         */
        codeTypeUsage: Enumerations.Rest.Communs.CodeTypeUsageEnum;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'AUT' Autres
         */
        codeStatutAbonne: Enumerations.Rest.ContratBqdPro.Communs.CodeStatutEnum;
        /**
         * Date de début de validité du mandat
         */
        dateDebutEffetMandat: string;
        /**
         * code devise ISO 4217
         */
        codeDevise: string;
        /**
         * Détermine si la valeur d'option est positive ou négative ou indifférente
         * '+'
         * '-'
         * ' ' Indifférent ( notamment pour Zéro )
         */
        codeSigne: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeSigneEnum;
        /**
         * Solde du compte hors Intérêts Capitalisés, exprimé dans la devise de tenue de compte.
         * Ce solde évolue à chaque opération.
         */
        soldeCompte: number;
        /**
         * Indicateur option Versement Direct
         * 'O' Oui
         * 'N' Non
         * ' ' Non
         */
        indicateurVersementDirect: Enumerations.Rest.ContratBqdPro.CompteAbonnement.IndicateurVersementDirectEnum;
        /**
         * Détermine la date d'exécution de la dernière opération financière constatée sur un contrat à la date de situation/arrêté
         * Concerne un compte de dépôts / épargne , un produit financier ...
         */
        dateDerniereOperation: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaireCourte: string;
        /**
         * Indicateur
         */
        indicateur: IIndicateur;
        /**
         * Libellé de personnalisation du CDD
         * Permet de distinguer plusieurs CDD appartenant à un même client
         */
        LibellePersonnaliseCDD: string;
    }
    interface ICompteCourantEntreprise {
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
         * '0' Service ouvert
         * '1' Clôture demandée
         * '2' Clôture en cours
         * '3' Produit/Service fermé
         * '8' Produit/Service en cours d'ouverture
         * '9' Versements non autorisés Produit
         */
        codeEtatProduitService: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeEtatProduitServiceEnum;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         * 'ACFF' ASSURANCE CFF
         * 'AEEP' ASSURANCE SUR EPARGNE
         * 'AEMO' SECUR'MEDIA FORMULE 1
         * 'AENO' SECUR'MEDIA FORMULE 2
         * 'AEOO' SECUR'MEDIA FORMULE 1 FAMILLE
         * 'C249' ASSURETUDE
         * 'C320' PERP
         * 'C326' GARANTIE FAMILLE
         * 'C329' BCP PATRIMONIO CRESCENTE
         * 'C335' TENDANCES
         * 'C402' CAP-ECUREUIL
         * 'C403' ASSUR-ECUREUIL
         * 'C405' INITIATIVES TRANSMISSION
         * 'C406' NUANCE CAPITALISATION
         * 'C408' INITIATIVES PLUS
         * 'C418' AIKIDO
         * 'C419' LIVRET ASSURANCE VIE
         * 'C518' INITIATIVE TRANSMISSION
         * ...
         */
        codeTypeProduitService: string;
        /**
         * Détermine la nature-type d'un compte CCE
         * 'A' COMPTE COURANT
         * 'B' COMPTES D'AVANCE
         * 'C' LIGNE D'EQUIPEMENT
         * 'E' COMPTES DE DEPOT PROFESSIONNEL
         * 'F' COMPTE DE DEPOT EN GARANTIE
         */
        typeNatureCompte: Enumerations.Rest.ContratBqdPro.CompteAbonnement.TypeNatureCompteEnum;
        /**
         * Rice de l'objet
         */
        rice: IRice;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * 1 Usage privé
         * 2 Usage professionnel
         */
        codeTypeUsage: Enumerations.Rest.Communs.CodeTypeUsageEnum;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'AUT' Autres
         */
        codeStatutAbonne: Enumerations.Rest.ContratBqdPro.Communs.CodeStatutEnum;
        /**
         * Date de début de validité du mandat
         */
        dateDebutEffetMandat: string;
        /**
         * code devise ISO 4217
         */
        codeDevise: string;
        /**
         * Détermine si la valeur d'option est positive ou négative ou indifférente
         * '+'
         * '-'
         * ' ' Indifférent ( notamment pour Zéro )
         */
        codeSigne: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeSigneEnum;
        /**
         * Solde du compte hors Intérêts Capitalisés, exprimé dans la devise de tenue de compte.
         * Ce solde évolue à chaque opération.
         */
        soldeCompte: number;
        /**
         * Montant du découvert à restituer au client (DEI..)
         * En effet, certains découverts peuvent être
         * créés alors que le client n'en a pas connaissance.
         * Montant exprimé en devise du compte
         */
        montantDecouvert: number;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaireCourte: string;
        /**
         * Libellé au niveau du compte CCE permettant d'identifier l'utilisation d'un compte
         */
        libelleCompteCCE: string;
        /**
         * Détermine la nature du compte courant
         * Classification spécifique MYSYS
         * 'B  ' COMPTE COURANT
         * 'C  ' COMPTES D'AVANCE
         * 'D  ' LIGNE D'EQUIPEMENT
         * 'E  ' COMPTES DE DEPOT PROFESSIONNEL
         * 'F  ' COMPTE DE DEPOT EN GARANTIE
         */
        codeNatureCompte: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeNatureCompteEnum;
        /**
         * Indicateur
         */
        indicateur: IIndicateur;
    }
    interface ITitre {
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
         * '0' Produit/Service ouvert
         * '1' Clôture demandée
         * '2' Clôture en cours
         * '3' Produit/Service fermé
         * '8' Produit/Service en cours d'ouverture
         * '9' Versements non autorisés
         */
        codeEtatProduitService: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeEtatProduitServiceEnum;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         * 'ACFF' ASSURANCE CFF
         * 'AEEP' ASSURANCE SUR EPARGNE
         * 'AEMO' SECUR'MEDIA FORMULE 1
         * 'AENO' SECUR'MEDIA FORMULE 2
         * 'AEOO' SECUR'MEDIA FORMULE 1 FAMILLE
         * 'C249' ASSURETUDE
         * 'C320' PERP
         * 'C326' GARANTIE FAMILLE
         * 'C329' BCP PATRIMONIO CRESCENTE
         * 'C335' TENDANCES
         * 'C402' CAP-ECUREUIL
         * 'C403' ASSUR-ECUREUIL
         * 'C405' INITIATIVES TRANSMISSION
         * 'C406' NUANCE CAPITALISATION
         * 'C408' INITIATIVES PLUS
         * 'C418' AIKIDO
         * 'C419' LIVRET ASSURANCE VIE
         * 'C518' INITIATIVE TRANSMISSION
         * ...
         */
        codeTypeProduitService: string;
        /**
         * Rice de l'objet
         */
        rice: IRice;
        /**
         * Code d'identification d'une entité administrative : élément de structure correspondant à un guichet
         */
        codeEntiteAdministrative: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * 1 Usage privé
         * 2 Usage professionnel
         */
        codeTypeUsage: Enumerations.Rest.Communs.CodeTypeUsageEnum;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'AUT' Autres
         */
        codeStatutAbonne: Enumerations.Rest.ContratBqdPro.Communs.CodeStatutEnum;
        /**
         * Date de début de validité du mandat
         */
        dateDebutEffetMandat: string;
        /**
         * code devise ISO 4217
         */
        codeDevise: string;
        /**
         * Détermine si la valeur d'option est positive ou négative ou indifférente
         * '+'
         * '-'
         * ' ' Indifférent ( notamment pour Zéro )
         */
        codeSigne: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeSigneEnum;
        /**
         * Solde du compte hors Intérêts Capitalisés, exprimé dans la devise de tenue de compte.
         * Ce solde évolue à chaque opération.
         */
        soldeCompte: number;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1
         * de l'adresse.
         */
        designationBancaireCourte: string;
        /**
         * Détermine une variante ou une version de produit service dans le Catalogue avec des caractéristiques spécifiques.
         */
        sousCodeProduitService: string;
        /**
         * Indicateur de l'objet
         */
        indicateur: IIndicateur;
    }
    interface IProduitDAT {
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
         * '0' Produit/Service ouvert
         * '1' Clôture demandée
         * '2' Clôture en cours
         * '3' Produit/Service fermé
         * '8' Produit/Service en cours d'ouverture
         * '9' Versements non autorisés
         */
        codeEtatProduitService: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeEtatProduitServiceEnum;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         * 'ACFF' ASSURANCE CFF
         * 'AEEP' ASSURANCE SUR EPARGNE
         * 'AEMO' SECUR'MEDIA FORMULE 1
         * 'AENO' SECUR'MEDIA FORMULE 2
         * 'AEOO' SECUR'MEDIA FORMULE 1 FAMILLE
         * 'C249' ASSURETUDE
         * 'C320' PERP
         * 'C326' GARANTIE FAMILLE
         * 'C329' BCP PATRIMONIO CRESCENTE
         * 'C335' TENDANCES
         * 'C402' CAP-ECUREUIL
         * 'C403' ASSUR-ECUREUIL
         * 'C405' INITIATIVES TRANSMISSION
         * 'C406' NUANCE CAPITALISATION
         * 'C408' INITIATIVES PLUS
         * 'C418' AIKIDO
         * 'C419' LIVRET ASSURANCE VIE
         * 'C518' INITIATIVE TRANSMISSION
         * ...
         */
        codeTypeProduitService: string;
        /**
         * Rice de l'objet
         */
        rice: IRice;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * 1 Usage privé
         * 2 Usage professionnel
         */
        codeTypeUsage: Enumerations.Rest.Communs.CodeTypeUsageEnum;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'AUT' Autres
         */
        codeStatutAbonne: Enumerations.Rest.ContratBqdPro.Communs.CodeStatutEnum;
        /**
         * Date de début de validité du mandat
         */
        dateDebutEffetMandat: string;
        /**
         * Code devise ISO 4217
         */
        codedevise: string;
        /**
         * Détermine si la valeur d'option est positive ou négative ou indifférente
         * '+'
         * '-'
         * ' ' Indifférent ( notamment pour Zéro )
         */
        codeSigne: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeSigneEnum;
        /**
         * Solde du compte hors Intérêts Capitalisés, exprimé dans la devise de tenue de compte.
         * Ce solde évolue à chaque opération.
         */
        soldeCompte: number;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1
         * de l'adresse.
         */
        designationBancaireCourte: string;
        /**
         * Détermine une variante ou une version de produit service dans le Catalogue avec des caractéristiques spécifiques.
         */
        sousCodeProduitService: string;
        /**
         * Indicateur
         */
        indicateur: IIndicateur;
    }
    interface IAssurance {
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
         * '0' Service ouvert
         * '1' Clôture demandée
         * '2' Clôture en cours
         * '3' Produit/Service fermé
         * '8' Produit/Service en cours d'ouverture
         * '9' Versements non autorisés Produit
         */
        codeEtatProduitService: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeEtatProduitServiceEnum;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         * 'ACFF' ASSURANCE CFF
         * 'AEEP' ASSURANCE SUR EPARGNE
         * 'AEMO' SECUR'MEDIA FORMULE 1
         * 'AENO' SECUR'MEDIA FORMULE 2
         * 'AEOO' SECUR'MEDIA FORMULE 1 FAMILLE
         * 'C249' ASSURETUDE
         * 'C320' PERP
         * 'C326' GARANTIE FAMILLE
         * 'C329' BCP PATRIMONIO CRESCENTE
         * 'C335' TENDANCES
         * 'C402' CAP-ECUREUIL
         * 'C403' ASSUR-ECUREUIL
         * 'C405' INITIATIVES TRANSMISSION
         * 'C406' NUANCE CAPITALISATION
         * 'C408' INITIATIVES PLUS
         * 'C418' AIKIDO
         * 'C419' LIVRET ASSURANCE VIE
         * 'C518' INITIATIVE TRANSMISSION
         * ...
         */
        codeTypeProduitService: string;
        /**
         * Numéro de contrat.
         * Il identifie un contrat CNP de façon unique à la différence du numéro d'adhésion qui est un numéro de contrat provisoire (mais qui est en général le seul numéro connu du client).
         */
        numeroContratCNP: string;
        /**
         * Solde du compte hors Intérêts Capitalisés, exprimé dans la devise de tenue de compte.
         * Ce solde évolue à chaque opération.
         */
        soldeCompte: number;
        /**
         * Code devise ISO 4217
         */
        codeDevise: string;
        /**
         * Le Numéro d'Adhésion indique le numéro d'identification du contrat Assurance
         */
        numeroAdhesionProduit: string;
        /**
         * Libellé de désignation d'un type de produit ou service au format long
         */
        libelleTypeProduitService: string;
        /**
         * Date d'ouverture administrative d'un produit ou d'un service.
         */
        dateOuvertureProduitService: string;
        /**
         * Rice de l'objet
         */
        rice: IRice;
        /**
         * Représente le code périodicité des versements du client sur un produit d'épargne.
         */
        periodiciteVersement: string;
        /**
         * Montant du versement périodique alimentant un contrat donné
         */
        montantVersementPeriodique: number;
        /**
         * Cette rubrique permet de déterminer à quelle date sont arrêtées les informations livrées quelle que soit la date de leur livraison.
         */
        dateArreteInformation: Date;
        /**
         * Montant de la valeur de rachat livret + plan
         * Etabli à la date d'arrêté
         */
        montantValeurRachat: number;
        /**
         * Cumul des versements libres effectués depuis l'ouverture du contrat
         */
        montantCumulVersLibreOrigine: number;
        /**
         * Cumul des versements libres depuis le 1er janvier de l'année en cours.
         */
        montantCumulVersLibreAnnee: number;
        /**
         * Précise pour EPARVIE et ECUREUIL GENERATIONS si le contrat prévoit le doublement du capital garanti en cas d'accident,
         * et son triplement en cas d'accident de la circulation.
         * 1 pas d'option
         * 2 option doublement/triplement
         * 0 produit non concerné
         */
        codeDoubleTriple: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeDoubleTripleEnum;
        /**
         * Montant de la garantie souscrite par le client lors de l'adhésion d'une assurance EPARVIE ou ECUREUIL GENERATIONS.
         */
        montantGarantiFiacre: number;
        /**
         * Montant de la prime (versement) annuelle d'une assurance. Il s'agit de la cotisation assurance annuelle du client.
         */
        montantPrimeAnnuelle: number;
        /**
         * Montant de la valeur de rachat livret + plan
         * Etabli à la date d'arrêté
         */
        montantValeurRachatTotal: number;
        /**
         * Date effective de remise des fonds au client
         */
        dateValeurVersement: Date;
        /**
         * Durée pendant laquelle le client s'engage à effectuer des versements sur le produit.
         * Durée en années.
         */
        dureePlanVersement: number;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'AUT' Autres
         */
        codeStatutAbonne: Enumerations.Rest.ContratBqdPro.Communs.CodeStatutEnum;
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Indicateur
         */
        indicateur: IIndicateur;
    }
    interface ICarteCreditConso {
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
         * '0' Service ouvert
         * '1' Clôture demandée
         * '2' Clôture en cours
         * '3' Produit/Service fermé
         * '8' Produit/Service en cours d'ouverture
         * '9' Versements non autorisés Produit
         */
        codeEtatProduitService: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeEtatProduitServiceEnum;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         * 'ACFF' ASSURANCE CFF
         * 'AEEP' ASSURANCE SUR EPARGNE
         * 'AEMO' SECUR'MEDIA FORMULE 1
         * 'AENO' SECUR'MEDIA FORMULE 2
         * 'AEOO' SECUR'MEDIA FORMULE 1 FAMILLE
         * 'C249' ASSURETUDE
         * 'C320' PERP
         * 'C326' GARANTIE FAMILLE
         * 'C329' BCP PATRIMONIO CRESCENTE
         * 'C335' TENDANCES
         * 'C402' CAP-ECUREUIL
         * 'C403' ASSUR-ECUREUIL
         * 'C405' INITIATIVES TRANSMISSION
         * 'C406' NUANCE CAPITALISATION
         * 'C408' INITIATIVES PLUS
         * 'C418' AIKIDO
         * 'C419' LIVRET ASSURANCE VIE
         * 'C518' INITIATIVE TRANSMISSION
         * ...
         */
        codeTypeProduitService: string;
        /**
         * Rice de l'objet
         */
        rice: IRice;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaireCourte: string;
        /**
         * Numéro de la carte de crédit Révolving
         */
        numeroCarteRevolving: string;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'AUT' Autres
         */
        codeStatutAbonne: Enumerations.Rest.ContratBqdPro.Communs.CodeStatutEnum;
        /**
         * Indicateur
         */
        indicateur: IIndicateur;
    }
    interface IRice {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... détenu par un client d'un Etablissement du GCE.
         * Codification spécifique au GCE.
         */
        referenceProduitService: string;
    }
    interface IIndicateur {
        /**
         * Indicateur Interrogation BQD
         */
        indicateurInterrogationBQD: string;
        /**
         * Indicateur Prélèvement BQD
         */
        indicateurPrelevementBQD: string;
        /**
         * Indicateur Virement BQD
         */
        indicateurVirementBQD: string;
        /**
         * Cette rubrique indique si le produit peut être compte support ou de facturation pour les canaux
         * 'O' Support et Facturation
         * 'N' Ni Support, ni Facturation
         * 'F' Facturation uniquement
         * 'S' Support uniquement
         */
        indicateurSupportFactBQD: Enumerations.Rest.Communs.IndicateurSupportFactBQDEnum;
        /**
         * Indicateur produit interrogeable sur BQD
         */
        indicateurIterroBQDEffectif: string;
        /**
         * Indicateur produit prélevable sur BQD
         */
        indicateurPrelevBQDEffectif: string;
        /**
         * Indicateur produit virable sur BQD
         */
        indicateurVirementBQDEffectif: string;
        /**
         * Cette rubrique indique si le produit est compte support ou de facturation pour les canaux
         * 'O' Support et Facturation
         * 'N' Ni Support, ni Facturation
         * 'F' Facturation uniquement
         * 'S' Support uniquement
         */
        indicateurSuppFactBQDEffectif: Enumerations.Rest.Communs.IndicateurSupportFactBQDEnum;
        /**
         * Cette rubrique indique si le produit est créditable dans le cadre d'un prélèvement externe sur les canaux BQD.
         * 'O' Oui
         * 'N' Non
         */
        indicateurCreditPrelevExtBQD: Enumerations.Rest.ContratBqdPro.CompteAbonnement.IndicateurCreditPrelevExtBQDEnum;
        /**
         * Cette rubrique indique si le produit est créditable dans le cadre d'un prélèvement externe sur les canaux BQD.
         * 'O' Oui
         * 'N' Non
         */
        indicateurCrdtPrelevExtBQDEff: Enumerations.Rest.ContratBqdPro.CompteAbonnement.IndicateurCreditPrelevExtBQDEnum;
    }
    interface ICompteExterne {
        /**
         * Ref RIB d'un compte dans le périmètre d'un abonné
         * Il se compose:
         *     - du code établissement bancaire
         *     - du code guichet
         *     - du numéro de compte
         */
        referenceRib: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaireCourte: string;
        /**
         * Libellé associé au code RIB de l'établissement bancaire. Il est fourni par le répertoire des guichets permanents.
         */
        libelleEtablissement: string;
        /**
         * Dénomination propre d'un guichet lorsque l'établissement a plusieurs guichets dans la même localité
         */
        libelleGuichet: string;
        /**
         * Le code IBAN est un préfixe au n° de RIB qui permet d'avoir un numéro de compte international
         * 'FR76' Caisse d'Epargne
         */
        codeIbanBanque: string;
        /**
         * Indicateur pour savoir si un compte est géré par le SI SIRIS
         */
        indicateurCompteSiris: string;
        /**
         * Détermine une variante ou une version de produit service dans le Catalogue avec des caractéristiques spécifiques.
         */
        sousCodeProduitService: string;
        /**
         * Détermine la nature-type d'un compte CCE
         * 'A' COMPTE COURANT
         * 'B' COMPTES D'AVANCE
         * 'C' LIGNE D'EQUIPEMENT
         * 'E' COMPTES DE DEPOT PROFESSIONNEL
         * 'F' COMPTE DE DEPOT EN GARANTIE
         */
        typeNatureCompte: Enumerations.Rest.ContratBqdPro.CompteAbonnement.TypeNatureCompteEnum;
        /**
         * Code devise ISO 4217
         */
        codeDevise: string;
        /**
         * IBAN du compte bénéficiaire d'un mouvement / opération financiere
         */
        ibanBeneficiaire: string;
        /**
         * Banque détentrice du compte du destinataire du mouvement / opération
         */
        codeBicDestinataire: string;
        /**
         * Cette rubrique indique si le compte externe est inclus dans l'abonnement ou dépend d'une personne morale liée à la personne titulaire de l'abonnement.
         * 'O' Oui : inclus dans l'abonnement
         * 'N' Non : exclu de l'abonnement
         */
        indicateurCpteExterneInclus: Enumerations.Rest.ContratBqdPro.CompteAbonnement.IndicateurCpteExterneInclusEnum;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'IPM' Liens inter personnes morales
         * 'AUT' Autres
         */
        codeStatutAbonne: Enumerations.Rest.ContratBqdPro.Communs.CodeStatutEnum;
        /**
         * Détermine le média support de l'acte de gestion
         * 'A' automatique - traitement de masse
         * 'P' Poste de travail (agence)
         * 'V' Vente multi-canal
         * 'W' Internet (client non authentifié fortement ou via OTP
         *     SMS) - avant projet SOL 19680
         *     Internet fixe - depuis projet SOL 19680
         * 'S' Internet en mode sécurisé (Client authentifié par    certificat ou lecteur CAP)
         * 'X' Internet mobile (application mobile téléchargée)
         */
        codeCanal: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeCanalEnum;
        /**
         * Détermine la nature du compte courant
         * Classification spécifique MYSYS
         * 'B  ' COMPTE COURANT
         * 'C  ' COMPTES D'AVANCE
         * 'D  ' LIGNE D'EQUIPEMENT
         * 'E  ' COMPTES DE DEPOT PROFESSIONNEL
         * 'F  ' COMPTE DE DEPOT EN GARANTIE
         */
        codeNatureCompte: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeNatureCompteEnum;
        /**
         * Détermine le système/support de sécurisation des opérations en ligne.
         * '01' SMS Particulier
         * '02' CAP Particulier
         * '03' SMS Professionnel
         * '04' CAP Professionnel
         * '05' Certificat Electronique
         */
        codeTypeEnrolement: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeTypeEnrolementEnum;
    }
    interface ICompteAssocie {
        /**
         * Ref RIB d'un compte dans le périmètre d'un abonné
         * Il se compose:
         *     - du code établissement bancaire   5 cars
         *     - du code guichet                  5 cars
         *     - du numéro de compte             11 cars
         */
        ribCompte: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire: string;
        /**
         * Libellé associé au code RIB de l'établissement bancaire. Il est fourni par le répertoire des guichets permanents
         */
        libelleEtablissementBancaire: string;
        /**
         * Dénomination propre d'un guichet lorsque l'établissement a plusieurs guichets dans la même localité
         */
        libelleGuichet: string;
        /**
         * Le code IBAN est un préfixe au n° de RIB qui permet d'avoir un numéro de compte international
         * 'FR76' Caisse d'Epargne
         */
        codeIban: string;
        /**
         * Indicateur pour savoir si un compte est géré par le SI SIRIS
         */
        indicateurCompteGereSiris: string;
        /**
         * Détermine une variante ou une version de produit service dans le Catalogue avec des caractéristiques spécifiques.
         */
        sousCodeProduit: string;
        /**
         * Détermine la nature-type d'un compte CCE
         * 'A' COMPTE COURANT
         * 'B' COMPTES D'AVANCE
         * 'C' LIGNE D'EQUIPEMENT
         * 'E' COMPTES DE DEPOT PROFESSIONNEL
         * 'F' COMPTE DE DEPOT EN GARANTIE
         */
        typeNatureCompte: Enumerations.Rest.ContratBqdPro.CompteAbonnement.TypeNatureCompteEnum;
        /**
         * Code devise ISO 4217
         */
        codeDevise: string;
        /**
         * IBAN du compte bénéficiaire d'un mouvement / opération financier
         */
        numeroIbanBeneficiaire: string;
        /**
         * Banque détentrice du compte du destinataire du mouvement / opération
         */
        codeBicDestinataire: string;
        /**
         * Détermine le média support de l'acte de gestion
         * 'A' automatique - traitement de masse
         * 'P' Poste de travail (agence)
         * 'V' Vente multi-canal
         * 'W' Internet (client non authentifié fortement ou via OTP SMS) - avant projet SOL 19680
         *     Internet fixe - depuis projet SOL 19680
         * 'S' Internet en mode sécurisé (Client authentifié par  certificat ou lecteur CAP)
         * 'X' Internet mobile (application mobile téléchargée)
         */
        codeCanalGestion: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeCanalEnum;
        /**
         * Détermine la nature du compte courant
         * 'B  ' COMPTE COURANT
         * 'C  ' COMPTES D'AVANCE
         * 'D  ' LIGNE D'EQUIPEMENT
         * 'E  ' COMPTES DE DEPOT PROFESSIONNEL
         * 'F  ' COMPTE DE DEPOT EN GARANTIE
         */
        codeNatureCompte: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeNatureCompteEnum;
        /**
         * Détermine le système/support de sécurisation des opérations en ligne.
         * '01' SMS Particulier
         * '02' CAP Particulier
         * '03' SMS Professionnel
         * '04' CAP Professionnel
         * '05' Certificat Electronique
         */
        codeTypeEnrolement: Enumerations.Rest.ContratBqdPro.CompteAbonnement.CodeTypeEnrolementEnum;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/informationAbonne"
 * @author S0077481 (Kevin Garrido)
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.InformationAbonne {
    interface IInformationAbonne {
        /**
         * ####Identifiant Tiers
         *  ---
         *
         *   **Définition :**
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect.
         *
         * Numéro chronologique attribué par le système :
         * Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers: number;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         * Référence externe connue du client abonné
         */
        identifiantClient: string;
        /**
         * Nom de l'usagé
         */
        libelleUsageAbonnementBAD: string;
        /**
         * ####Code etablissement banque entite juridique
         *
         * **Définition :**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         * Code interbancaire
         *
         * Nomenclature des sièges des Etablissements du Réseau des Caisses d'Epargne
         *
         * Codif des Caisses: 1er car= 1 et le 5ème = 5
         *
         * **Exemples :**
         *
         * | Code | Libellé |
         * | - | - |
         * | 17515 | CE Ile de France |
         * | 16275 | CE Nord France Europe |
         * | 43199 | Crédit Foncier de France (CFF) |
         */
        codeEtablissement: string;
        /**
         * Indique si l'option "Authentification renforcée" est détenue par l'abonné.
         * 'O'        Oui
         * 'N'        Non
         */
        codeDetention: Enumerations.Rest.ContratBqdPro.CaracteristiqueAbonnement.CodeDetentionAuthentificationEnum;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/limiteVirement"
 * @author S0077481
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.LimiteVirement {
    interface ILimiteVirement {
        /**
         * Détermine un type de plafond à prendre en compte lors d'un virement sur DEI :
         * - Unitaire / pour une opération donnée
         * - Journalier / pour l'ensemble des ope de la journée
         *
         * 'U'        Unitaire
         * 'J'        Journalier
         */
        typeControle: Enumerations.Rest.ContratBqdPro.Communs.TypeControleEnum;
        /**
         * Détermine le type de virement effectué depuis le socle plurimédia.
         *  'E'        Virement SEPA France
         *  'I'        Virement Interne
         *  'S'        Virement SEPA hors France
         *  'X'        Tout type
         *
         * Valeurs pour Espace Unique Internet :
         *  'I'        Virement Intra-titulaire
         *  'E'        Virement externe sur compte tiers
         */
        codeTypeVirement: Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum | Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum;
        /**
         * Montant autorisé concernant un plancher ou un plafond
         */
        montant: number;
        /**
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha
         */
        codeDevise: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/plafondVirement"
 * @author S0077481
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.PlafondVirement {
    interface IParametrePlafondVirement {
        /**
         * Détermine un segment de clientèle dans une typologie donnée :
         *   AC : Activation Clientèle Particuliers
         *   AP : Activation Clientèle Professionnel
         *   FC : Fréquence Client Personne
         *   FP : Fréquence Client PRO
         *   FR : Fréquence Client Relation
         *   MN : Marché national
         *   SA : Activation Clientèle V2
         *   SU : Univers Client
         */
        codeSegmentation: Enumerations.Rest.ContratBqdPro.PlafondVirement.CodeSegmentationEnum;
        /**
         * Détermine un regroupement de marchés PRO-BDR
         * Correspond au code marché (MN)xxxx
         * xxxx étant le code segmentation
         */
        coderegroupementMarche: string;
        detailParametrePlafondVirement: Array<IDetailParametrePlafondVirement>;
    }
    interface IDetailParametrePlafondVirement {
        /**
         * Détermine le type de virement effectué depuis le socle plurimédia.
         *  'E'        Virement SEPA France
         *  'I'        Virement Interne
         *  'S'        Virement SEPA hors France
         *  'X'        Tout type
         *
         * Valeurs pour Espace Unique Internet :
         *  'I'        Virement Intra-titulaire
         *  'E'        Virement externe sur compte tiers
         */
        codeTypeVirement: Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum | Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum;
        /**
         * Code Type permettant de définir si on parle d'un montant
         * plancher ou plafond.
         *   'PC'       Plancher
         *   'PF'       Plafond
         */
        codeTypeMontant: Enumerations.Rest.ContratBqdPro.PlafondVirement.CodeTypeMontantEnum;
        /**
         * Code devise
         */
        codeDevise: string;
        /**
         * Détermine un type de plafond à prendre en
         * compte lors d'un virement sur DEI :
         *   - Unitaire / pour une opération donnée
         *   - Journalier / pour l'ensemble des ope de la journée
         *
         *   'U'        Unitaire
         *   'J'        Journalier
         */
        typeControle: Enumerations.Rest.ContratBqdPro.Communs.TypeControleEnum;
        /**
         * Détermine le type de montant d'un plafond
         *  'S'        Standards
         *  'P'        Personnalisés
         */
        typeMontant: Enumerations.Rest.ContratBqdPro.PlafondVirement.TypeMontantEnum;
        /**
         * Montant autorisé
         * Concerne un plancher ou un plafond
         */
        montantAutorise: number;
    }
    interface IPlafondVirement {
        parametrePlafondVirement: IParametrePlafondVirement;
    }
    interface IPlafondPersonalise {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         */
        identifiantClient: string;
        /**
         * Détermine un service de la banque à distance
         *
         *  '01'       Particuliers
         *  '02'       Professionnels
         *  '03'       Personnes Protégées
         *  '04'       Secteur Public
         *  '05'       E-remises
         *  '06'       Espace Unique
         */
        codeService: Enumerations.Rest.ContratBqdPro.Communs.CodeServiceEnum;
        /**
         * Détermine le type de virement effectué depuis le socle plurimédia.
         *  'E'        Virement SEPA France
         *  'I'        Virement Interne
         *  'S'        Virement SEPA hors France
         *  'X'        Tout type
         *
         * Valeurs pour Espace Unique Internet :
         * 'I'        Virement Intra-titulaire
         * 'E'        Virement externe sur compte tiers
         */
        codeTypeVirement: Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum | Enumerations.Rest.ContratBqdPro.Communs.CodeTypeVirementSoclePlurimediaEnum;
        /**
         * Détermine un type de plafond à prendre en
         * compte lors d'un virement sur DEI :
         * - Unitaire / pour une opération donnée
         * - Journalier / pour l'ensemble des ope de la journée
         *
         *  'U'        Unitaire
         *  'J'        Journalier
         */
        typeControle: Enumerations.Rest.ContratBqdPro.Communs.TypeControleEnum;
        /**
         * Montant limite d'une opération de virement
         * Montant au delà duquel un rejet ou une autorisation est nécessaire
         */
        montantPlafond: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         * Référence interne MYSYS
         */
        identifiantPersonne: number;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratbqdpro/v1/relationAbonne"
 * @author S0077481
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.RelationAbonne {
    interface IRelationAbonne {
        /**
         * Identifiant tiers en relation
         * Définition:
         *   Identifie le deuxième tiers liée par un lien inter-personnes avec une 1ière personne selon un type de lien
         */
        identifiantTiersEnRelation: number;
        /**
         * Désignation courte tiers
         * Définition:
         *  Dénomination banalisée de la personne :
         *   - désignation courte du particulier
         *   - libellé libre du lieu d'activité
         */
        designationTiersEnRelation: string;
        /**
         * Identifiant Client
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         * Référence externe connue du client abonné
         *
         * Permet d'accéder à un CRC (Centre de Relation Clientèle).
         *
         * Format :
         *   - PP : préfixe indiquant l'Etablissement
         *   - NNNNNNNN : chrono attribué par le système
         */
        identifiantClient: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "/operationfinanciereservice/v1/conversionRibBicIban"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.OperationFinanciereService.ConversionRibBicIban {
    /**
     * Interface pour le service de conversion RIB BIC IBAN
     */
    interface IConversionRibBicIban {
        codeBic: string;
        numeroIbanCompteBeneficiaire: string;
        numeroCompte: string;
        codeEtablissement: string;
        codeGuichet: string;
        cleRib: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "/operationfinanciereservice/v1/determinationBic"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.OperationFinanciereService.DeterminationBic {
    /**
     * Interface pour le service de génération du BIC
     */
    interface IDeterminationBic {
        numeroIbanCompte: string;
        codeBic: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "/tiers/v3/adresse"
 * @author S0077536
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.Tiers.Adresse {
    interface IAdresse {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        codeValiditeAdresseUNIVERS: string;
        indicateurEnvoiCourrier: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        numeroVoiePTT: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: string;
        nombreRetourPTT: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "/tiers/v3/identification"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.Tiers.Identification {
    interface ICodeMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }
    interface IDonneeIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: Date;
        identifiantClientBad: string;
    }
    interface IIdentification {
        donneeIdentification: IDonneeIdentification;
        lutteAntiBlanchiment: ILutteAntiBlanchiment;
        listMarche: Array<ICodeMarche>;
        suiviComercial: ISuiviCommercial;
        informationsEAI: IInformationsEAI;
    }
    interface ILutteAntiBlanchiment {
        codeAlerteVAO: boolean;
        messageAlerteVAO: string;
    }
    interface ISuiviCommercial {
        identifiantEDSSuiviCommercial: number;
        typeEDSSuiviCommercial: string;
        referenceExterneEDSSuiviCommercial: number;
        identifiantAgent: number;
        designationCourteEDS: string;
        designationLongueEDS: string;
    }
    interface IInformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
        libelleCodeStatutEAI: string;
        libelleCodeModeSignatureEAI: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "/tiers/v3/media"
 * @author S0077536
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.Tiers.Media {
    interface IMedia {
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IListeMedia {
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: boolean;
        referenceAccesMedia: string;
        indicateurOptin: boolean;
        commentaire: string;
        indicatifTelephone: string;
        indicateurSecu: boolean;
        indicateurProOptout: boolean;
        indicateurSmsFax: boolean;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "/tiers/v3/tiersNoyau"
 * @author S0077536
 */
declare module ComposantsCommunsDeiPro.Modeles.Rest.Tiers.TiersNoyau {
    interface IIdentificationTiers {
        numeroChrono: number;
        numeroLieuActivite: number;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface ICaracteristiqueTiers {
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypePersonne: string;
        dateEntreeRelation: string;
        codeGuichetRisque: string;
        eligibiliteTiers: string;
        identifiantEDSDomiciliation: string;
        indicateurDroitCompte: string;
        identifiantClientBad: string;
    }
    interface IInformationParticulier {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        codeCivilite: string;
        libelleCivilite: string;
        sexe: string;
        libelleSexe: string;
        id: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        dateNaissance: string;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        codeDepartementNaissance: string;
        libelleDepartementNaissance: string;
        codeInseePaysNationalite: string;
        libelleNationalite: string;
        dateDeces: string;
        codeAppartenanceReseau: string;
        libelleAppartenanceReseau: string;
        indicSocietaire: string;
        codeCapaciteJuridique: string;
        libelleCapaciteJuridique: string;
        codePaysNaissance: string;
        libellePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleDoubleNationalitePays: string;
        situationFamille: string;
        libelleCodeSituationFamiliale: string;
        dateEffetSituationFamille: string;
        codeRegimeMatrimonial: string;
        libelleRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        codeCategorieSocioProf: string;
        libelleCsp: string;
        dateEffetCsp: string;
        nomEmployeur: string;
        numeroSirenEmployeurPrincipal: string;
        dateEmbaucheParEmployeurActuel: string;
        codeTypeContratTravail: string;
        libelleCodeTypeContratTravail: string;
        dateFinContrat: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeResident: string;
        identiteRelationEcoMenage: number;
        referenceExterneEds: number;
        typeClauseMatrimoniale: string;
        codeDonationEntreEpoux: string;
        indicateurAutoEntrepreneur: string;
        autresPrenomsEtatCivil: string;
        indicDomiciliationRevenus: string;
        indicEnregHorsPresenceClient: string;
        libelleProfessionParticulier: string;
        codeTypeSecteurEmploi: string;
        indicateurEnvoiCourrier: string;
        codePieceJustificative: string;
        dateObtentionPieceJustificative: string;
        referencePieceJustificative: string;
        noIdentificationFiscaleNifNni: string;
        codeTypeNifNni: string;
        dateNaturalisation: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        eligibiliteTiers: string;
        indicDroitCompte: string;
        numeroSirenAutoEntrepreneur: string;
        dateEffetOptionResidence: string;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        libelleStatutFatca: string;
        dateAttributionStatutFatca: string;
        identifiantBad: string;
        indicateurActiviteProfessionnel: string;
        identifiantEDSDomiciliation: number;
    }
    interface IInformationProfessionnel {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroSiren: string;
        codeTypeNifNni: string;
        libelleCodeTypeNifNni: string;
        noIdentificationFiscaleNifNni: string;
        nomCommercial: string;
        raisonSocial: string;
        codeSituationJuridique: string;
        libelleSituationJuridiqueProf: string;
        codeINSEE: string;
        libelleCategorieJuridiqueInsee: string;
        dateCreationJuridique: string;
        codeNafInsee: string;
        libelleEtablissement: string;
        codeRegimeFiscal: string;
        libelleCodeRegimeFiscal: string;
        montantChiffreAffaires: number;
        anneeChiffreAffaires: number;
        montantCapitalSocial: number;
        dateArreteComptable: number;
        idEdsInterne: number;
        activiteEconomiqueReelleProf: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeDevise: string;
        codeAppartenanceReseau: string;
        codeAgentEconomique: string;
        codeTypeCommerceOrganise: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        referencePieceJustificativeProf: string;
        codeCotation: string;
        edsDomiciliation: number;
        sigle: string;
        codeTypeTiers: string;
        effectif: number;
        codeBanqueEntitePilote: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEco: string;
        indicateurEirl: string;
        dateDebutOptionEirl: string;
        dateFinOptionEirl: string;
        indicOptionOpposabiliteEirl: string;
        indicPersMoraleOrganismePublic: string;
        indicPersMoraleMarcheReglemente: string;
        indicEditionBenefrEffectifs: string;
        identifiantLei: string;
        codeEmir: string;
        dateClotureJuridiqueProf: string;
        codeIndicateurEntrepEtrangere: string;
        indicDelegationClientDeclarat: string;
    }
    interface IInformationEtablissement {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        designationEntiteTitulaire: string;
        codeStatutLieuActivite: string;
        numTelex: string;
        numTelecopieur: string;
        effectifDuLieuActivite: number;
        enseigneCommercialeLieuActivit: string;
        dateDebut: string;
        dateFin: string;
        activiteEconomiqueReelleLieu: string;
        dateEnregistrementLieuActivite: string;
        dateDerniereMiseAJourLieu: string;
        dateDerniereVerifLieuActivite: string;
        designationLongueLieuActivite: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeResident: string;
        dateDernTracageApeProf: string;
        libelleTracageCodificationApe: string;
        typeTracageCodificationApe: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeRafraichLieuActivite: string;
    }
    interface IAdresse {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        identifiant: number;
        codeType: string;
        libelleType: string;
        ligne2AFNOR: string;
        ligne3AFNOR: string;
        ligne4AFNOR: string;
        ligne5AFNOR: string;
        ligne6AFNOR: string;
        codePostalPTT: string;
        codePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseelocalite: string;
        libelleInseeLocalite: string;
        codeTypeRetourPtt: string;
        libelleCodeTypeRetourPtt: string;
        indicateurEnvoiCourrier: string;
        inddifadresseFiscalePostale: string;
        numeroVoiePttVillePlus50000Hab: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephone: string;
        codeValiditeAdresseUniserv: string;
        codeExistenceListeRouge: string;
        numeroFAX: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        libelleCommune: string;
        codeTypeLieu: string;
        dateDernierRetourPttAdresse: string;
        nombreRetourPtt: number;
        codePostalFranceEtranger: string;
    }
    interface IMedia {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        typeMoyenContact: string;
        adresseMoyenContact: string;
        codeIndicatifInternationalTel: string;
        numeroTelephone: string;
        codeOptIn: string;
        indicEnvoiMediaProOptOut: string;
        indicEnvoiSmsFax: string;
        telephoneEmailPrefere: string;
        telephoneEmailSecurise: string;
    }
    interface IInformationTiersLie {
        codeType: string;
        codeSensLienInterPersonnes: string;
        libelleSensLien: string;
        codeEtablissementTiersLie: string;
        identifiantTiersLie: number;
        indicateurRattRelationEco: string;
    }
    interface ITiersNoyau {
        caracteristiqueTiers: ICaracteristiqueTiers;
        identificationTiers: IIdentificationTiers;
        informationParticulier: IInformationParticulier;
        informationProfessionnel: Array<IInformationProfessionnel>;
        informationEtablissement: Array<IInformationEtablissement>;
        adresse: Array<IAdresse>;
        media: Array<IMedia>;
        informationTiersLie: Array<IInformationTiersLie>;
    }
}

declare module ComposantsCommunsDeiPro.Modeles.Rest.EntretienCommercial.ResultatEntretien {
    interface IResultat {
        identifiantPersonne: number;
        codeTypeFamilleResultat: string;
        identifiantProduitService: number;
        codeNatureResultatCommercial: string;
        codeTypeResultatCommercial: string;
        codeTypeProduitService: string;
        indicRattachableCRE: string;
        codeTypeProduitServiceGCP: string;
        codeOrigineFonds: number;
        montantResultatCommercial: number;
        codeModeGestionLivret: string;
        sousCodeProduitService: string;
        codeProduitCarte: string;
        codeModeFinancier: string;
        codeCaractereForfaitaireOffre: string;
        indicProduitServiceObligatoire: string;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.ContratBqdPro.CaracteristiqueAbonnement {
    /**
     * Interface de la requête au service REST "/contratbqdpro/v1/caracteristiqueAbonnement" de type GET
     */
    interface ICaracteristiqueAbonnementRestServiceGetQuery {
        codeEtablissement: string;
        identifiantClient?: string;
        codeServiceBAD: string;
        identifiantTiers: number;
    }
    /**
     * Interface du service
     */
    interface ICaracteristiqueAbonnementRestService {
        sendGetRequest: (query: ICaracteristiqueAbonnementRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
        sendPostRequest: (data: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
        sendDeleteRequest: (data: Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.ContratBqdPro.CompteAbonnement {
    /**
     * Interface de la requête au service REST "/contratbqdpro/v1/compteAbonnement" de type GET
     */
    interface ICompteAbonnementRestServiceGetQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantAbonne: string;
        codeNatureJuridique: Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        codeTypeServiceMedia: Enumerations.Rest.ContratBqdPro.Communs.CodeTypeServiceMediaEnum;
        codeServiceBAD: string;
        numeroUsagerContratBAD?: string;
        critereTriCompte?: Enumerations.Rest.ContratBqdPro.Communs.CritereTriCompteEnum;
        numeroUsagercontratBAD?: string;
    }
    /**
     * Interface du service
     */
    interface ICompteAbonnementRestService {
        sendGetRequest: (query: ICompteAbonnementRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteAbonnement>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.ContratBqdPro.InformationAbonne {
    /**
     * Interface de la requête au service REST "/contratbqdpro/v1/informationAbonne" de type GET
     */
    interface IInformationAbonneRestServiceGetQuery {
        codeEtablissement: string;
        identifiantTiers: number;
    }
    /**
     * Interface du service
     */
    interface IInformationAbonneRestService {
        sendGetRequest: (query: IInformationAbonneRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.InformationAbonne.IInformationAbonne>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.ContratBqdPro.LimiteVirement {
    /**
     * Interface de la requête au service REST "/contratbqdpro/v1/limiteVirement" de type GET
     */
    interface ILimiteVirementRestServiceGetQuery {
        codeEtablissement: string;
        identifiantPersonne?: number;
        identifiantClient?: string;
        codeService: Enumerations.Rest.ContratBqdPro.Communs.CodeServiceEnum;
    }
    /**
     * Interface du service
     */
    interface ILimiteVirementRestService {
        sendGetRequest: (query: ILimiteVirementRestServiceGetQuery) => MyWay.Services.IPromesse<Array<Modeles.Rest.ContratBqdPro.LimiteVirement.ILimiteVirement>>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.ContratBqdPro.PlafondVirement {
    /**
     * Interface de la requête au service REST "/contratbqdpro/v1/plafondVirement" de type GET
     */
    interface IPlafondVirementRestServiceGetQuery {
        codeEtablissement: string;
        identifiantPersonne?: number;
        identifiantClient?: string;
        codeService?: Enumerations.Rest.ContratBqdPro.Communs.CodeServiceEnum;
    }
    /**
     * Interface du service
     */
    interface IPlafondVirementRestService {
        sendGetRequest: (query: IPlafondVirementRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.ContratBqdPro.PlafondVirement.IPlafondVirement>;
        sendPostRequest: (data: Modeles.Rest.ContratBqdPro.PlafondVirement.IPlafondPersonalise) => MyWay.Services.IPromesse<void>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.ContratBqdPro.RelationAbonne {
    /**
     * Interface de la requête au service REST "/contratbqdpro/v1/relationAbonne" de type GET
     */
    interface IRelationAbonneRestServiceGetQuery {
        codeEtablissement: string;
        identifiantTiers: number;
    }
    /**
     * Interface du service
     */
    interface IRelationAbonneRestService {
        sendGetRequest: (query: IRelationAbonneRestServiceGetQuery) => MyWay.Services.IPromesse<Array<Modeles.Rest.ContratBqdPro.RelationAbonne.IRelationAbonne>>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.EntretienCommercial.ResultatEntretien {
    class ResultatEntretienRestServiceAjaxImplService implements IResultatEntretienRestService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        enregistrerResultatEntretien(resultatEntretien: Modeles.Rest.EntretienCommercial.ResultatEntretien.IResultat): ng.IPromise<Modeles.Rest.EntretienCommercial.ResultatEntretien.IResultat>;
    }
    /**
     * Interface du service
     */
    interface IResultatEntretienRestService {
        enregistrerResultatEntretien: (resultatEntretien: Modeles.Rest.EntretienCommercial.ResultatEntretien.IResultat) => ng.IPromise<Modeles.Rest.EntretienCommercial.ResultatEntretien.IResultat>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.OperationFinanciereService.ConversionRibBicIban {
    /**
     * Interface de la requête au service REST "/operationfinanciereservice/v1/conversionRibBicIban" de type GET
     */
    interface IConversionRibBicIbanRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        cleRib: number;
    }
    /**
     * Interface du service
     */
    interface IConversionRibBicIbanRestService {
        sendGetRequest: (query: IConversionRibBicIbanRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.OperationFinanciereService.ConversionRibBicIban.IConversionRibBicIban>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.OperationFinanciereService.DeterminationBic {
    /**
     * Interface de la requête au service REST "/operationfinanciereservice/v1/determinationBic" de type GET
     */
    interface IDeterminationBicRestServiceGetQuery {
        numeroIbanCompte: string;
    }
    /**
     * Interface du service
     */
    interface IDeterminationBicRestService {
        sendGetRequest: (query: IDeterminationBicRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.OperationFinanciereService.DeterminationBic.IDeterminationBic>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.Tiers.Adresse {
    /**
     * Interface de la requête au service REST "/tiers/v3/adresse" de type GET
     */
    interface IAdresseRestServiceGetQuery {
        codeEtablissement: string;
        idPersonne: string;
    }
    /**
     * Interface du service
     */
    interface IAdresseRestService {
        sendGetRequest: (query: IAdresseRestServiceGetQuery) => MyWay.Services.IPromesse<Array<Modeles.Rest.Tiers.Adresse.IAdresse>>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.Tiers.Identification {
    /**
     * Interface de la requête au service REST "/tiers/v3/identification" de type GET
     */
    interface IIdentificationRestServiceGetQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
        eligibiliteEAI?: string;
        parametreAppel?: string;
    }
    /**
     * Interface du service
     */
    interface IIdentificationRestService {
        sendGetRequest: (query: IIdentificationRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.Tiers.Identification.IIdentification>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.Tiers.Media {
    /**
     * Interface de la requête au service REST "/tiers/v3/media" de type GET
     */
    interface IMediaRestServiceGetQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    /**
     * Interface du service
     */
    interface IMediaRestService {
        sendGetRequest: (query: IMediaRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.Tiers.Media.IMedia>;
        sendPostRequest: (data: Modeles.Rest.Tiers.Media.IMedia) => MyWay.Services.IPromesse<Modeles.Rest.Tiers.Media.IMedia>;
        sendPutRequest: (data: Modeles.Rest.Tiers.Media.IMedia) => MyWay.Services.IPromesse<Modeles.Rest.Tiers.Media.IMedia>;
        sendDeleteRequest: (data: Modeles.Rest.Tiers.Media.IMedia) => MyWay.Services.IPromesse<void>;
    }
}

declare module ComposantsCommunsDeiPro.Services.Rest.Tiers.TiersNoyau {
    /**
     * Interface de la requête au service REST "/tiers/v3/tiersNoyau" de type GET
     */
    interface ITiersNoyauRestServiceGetQuery {
        codeEtablissement?: string;
        identifiantPersonne?: string;
        numeroChrono?: string;
        numeroLieuActivite?: string;
    }
    /**
     * Interface du service
     */
    interface ITiersNoyauRestService {
        sendGetRequest: (query: ITiersNoyauRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.Tiers.TiersNoyau.ITiersNoyau>;
    }
}
