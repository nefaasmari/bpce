
declare module ComposantsCommunsFacturationForfait {
    var app: ng.IModule;
}

/**
 * Contrôleur de la sous-directive mw-facturation-forfait-infos-tarification
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwFacturationForfaitInfosTarificationControleur {
        private $scope;
        private tarificationOffrePrelevementService;
        private tarificationFinVenteService;
        private miniProfilService;
        private tarificationOffreSyntheseService;
        private conditionPrestationService;
        private $filter;
        private serviceAgent;
        static $inject: string[];
        /**
         * La référence externe de l'agent issus du context PDT
         */
        referenceExterneAgent: number;
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Code guichet interbanquaire
         */
        codeGuichet: string;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffreSouscrite: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitServiceOffre: number;
        /**
         * Code produit issu du contexte GGO/Contexte
         */
        codeProduit: number;
        /**
         * L'identifiant de l'entitée titulaire de l'offre
         */
        numeroEntiteTitulaire: number;
        /**
         * La liste des identifiants produit service associés
         */
        listeProduitServiceAssocies: Array<Modeles.Rest.Tarification.TarificationOffreSynthese.IProduitServiceAssocie>;
        /**
         * L'identifiant de l'élément Structure issus du context PDT
         */
        elementStructure1: number;
        /**
         * L'identifiant de l'élément Structure 2 issus du context PDT
         */
        elementStructure2: number;
        /**
         * Le type d'appel (Ouverture ou Avenant)
         */
        typeAppel: string;
        /**
         * Indicateur d'utilisation et affichage en ouverture
         */
        isOuverture: boolean;
        /**
         * Indicateur d'utilisation et affichage en avenant
         */
        isAvenant: boolean;
        /**
         * Objet informationDossierPrelevement contenant la périodicité
         */
        informationDossierPrelevement: Modeles.Rest.Tarification.TarificationOffrePrelevement.IInformationDossierPrelevement;
        /**
         * La liste des date de prochaine échéance formatées
         */
        listeDateProchaineEcheance: Array<Modeles.Rest.Tarification.TarificationOffrePrelevement.IPlageGratuite>;
        /**
         * Objet tarificationFinVente contenant le montant
         */
        tarificationFinVente: Modeles.Rest.Tarification.TarificationFinVente.ITarificationFinVente;
        /**
         * La liste des comptes courants pour le prélèvement
         */
        private listeComptesCourants;
        /**
         * La liste des comptes courants pour le prélèvement
         */
        private listeConditionsNegociable;
        /**
         * Condition négociable sélectionnée
         */
        private conditionNegociableSelectionne;
        /**
         * Indicateur de succes / echec des requetes
         */
        private indicateurSuccesRequetes;
        /**
         * Montant de réduction maximal
         */
        private reductionMax;
        /**
         * Montant de réduction saisie
         */
        private reductionSaisie;
        /**
         * Indicateur de validité du nouveau taux entré
         */
        private indicateurTauxInvalide;
        /**
         * Date de fin de la tarification
         */
        private dateDeFin;
        /**
         * Date de fin minimum de la tarification
         */
        private dateMinFin;
        /**
         * Date de fin minimum de la tarification formattee en dd/mm/yyyy
         */
        private dateMinFinFormatee;
        /**
         * Date de fin maximum de la tarification
         */
        private dateMaxFin;
        /**
         * Date de fin maximum de la tarification formattee en dd/mm/yyyy
         */
        private dateMaxFinFormatee;
        /**
         * Indicateur de validité de la saisie de la date de fin
         */
        private dateSaisieNonValide;
        /**
         * Objet pour la sauvegarde d'une condition autre que standard
         */
        private conditionNegocOffre;
        /**
         * Objet pour la sauvegarde de la tarification
         */
        private tarificationOffrePrelevement;
        /**
         * Les données utilisées par le service de sauvegarde
         */
        donneesSelectionnees: Modeles.Application.Commun.IDonneesSauvegarde;
        /**
         * Modele pour la liste déroulante des date de valeur du prochain prélèvement
         */
        dateProchainPrelevModel: string;
        /**
         * Le compte sélectionné
         */
        private compteSelectionne;
        /**
         * Message informatif du taux de réduction
         */
        messageTauxDeReduction: string;
        /**
         * Message informatif de la date de fin
         */
        messageDateDeFin: string;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        listePeriodicites: Array<Modeles.Rest.Tarification.TarificationOffrePrelevement.IPeriodicite>;
        periodicitesFacturation: Modeles.Rest.Tarification.TarificationOffrePrelevement.IPeriodicite;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, tarificationOffrePrelevementService: Services.Application.ITarificationOffrePrelevementService, tarificationFinVenteService: Services.Application.ITarificationFinVenteService, miniProfilService: Services.Application.IMiniProfilService, tarificationOffreSyntheseService: Services.Application.ITarificationOffreSyntheseService, conditionPrestationService: Services.Application.IConditionPrestationService, $filter: ng.IFilterService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode pour le chargement de l'objet informationDossierPrelevement depuis le service
         */
        private chargerInfosTarification();
        /**
         * Methode pour formater la date de prochaine prochaine pour l'affichage
         * @param {Modeles.Rest.Tarification.TarificationOffrePrelevement.IPlageGratuite} plageGratuite - la plage de gratuité avec la date mal formatée
         * @return {Modeles.Rest.Tarification.TarificationOffrePrelevement.IPlageGratuite} la plage de gratuité avec la date bien formatée
         */
        private formaterDate(plageGratuite);
        /**
         * Méthode pour le chargement de l'objet tarificationFinVente depuis le service
         * @param {string} codePeriodicite - le code périodicité venant de chargerInfosTarification()
         */
        private chargerTarificationFinVente(codePeriodicite);
        /**
         * Méthode pour le chargement de l'objet caracteristiqueMiniProfil, pour la constitution de la liste des comptes courants
         */
        private chargerCaracteristiqueMiniProfil();
        /**
         * Méthode pour le chargement de l'objet tarificationOffreSynthese depuis le service
         */
        private chargerTarificationOffreSynthese();
        /**
         * Méthode pour le chargement de l'objet
         * @param {number} codePrestationTarifiable - le code de la prestation tarifiable
         */
        private chargerConditionsPrestation(codePrestationTarifiable);
        /**
         * Méthode pour sauvegarder le nouvel objet de sauvegarde
         */
        changerConditionPrestation(): void;
        /**
         * Méthode pour le calcul de la borne maximale du taux de réduction
         * @param {Modeles.Rest.TarificationParametre.ConditionPrestation.IConditionNegociable} conditionSelectionnee - la condition de prestation sélectionnée
         */
        calculerReductionMax(conditionSelectionnee: Modeles.Rest.TarificationParametre.ConditionPrestation.IConditionNegociable): void;
        /**
         * Méthode pour valider la saisie du nouveau taux de réduction
         * @param {number} nouveauTaux - le nouveau taux saisie
         */
        validerTauxDeReduction(nouveauTaux: number): void;
        /**
         * Méthode pour le calcul des dates minimum et maximum de fin de tarification
         * @param {Modeles.Rest.TarificationParametre.ConditionPrestation.IConditionNegociable} conditionSelectionnee - la condition de prestation sélectionnée
         */
        calculerDatesdeFin(conditionSelectionnee: ComposantsCommunsFacturationForfait.Modeles.Rest.TarificationParametre.ConditionPrestation.IConditionNegociable, dateFinApplication: string): void;
        /**
         * Méthode pour vérifier la validité de la date de fin saisie
         * @apram {Date} dateDeFin - la date de fin saisie
         */
        validerDateSaisie(dateDeFin: Date): void;
        /**
         * Méthode pour envoyer l'ordre de blocage / déblocage du bouton "Valider"
         */
        blocageDeblocageValider(): void;
        /**
         * Méthode qui génère le message d'erreur de la saisie de la date de fin
         * @returns le message d'erreur formatté
         */
        genererMessageErreur(): string;
        montrerDetail(): boolean;
        /**
         * Méthode permettant de savoir s'il faut afficher la classe hide-a11-y ou non
         * @return {boolean}
         */
        afficherClasseHideA11y(tarificationForm: any): boolean;
        /**
         * Méthode permettant de savoir s'il faut afficher le role ou non
         * @return string
         */
        afficherRole(): string;
        /**
         * Méthode permettant de savoir s'il faut afficher la classe hide-a11-y ou non
         * @return {boolean}
         */
        afficherClasseHideA11y2(tarificationForm: any): boolean;
        /**
         * Méthode permettant de savoir s'il faut afficher le role ou non
         * @return string
         */
        afficherRole2(): string;
        changerPeriodicite(newPeriodicite: Modeles.Rest.Tarification.TarificationOffrePrelevement.IPeriodicite): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la sous-directive d'affichage des informations de tarification pour Facturation Forfait
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwFacturationForfaitInfosTarification(): ng.IDirective;
}

declare module ComposantsCommunsFacturationForfait {
}

/**
 * Contrôleur de la page de tests pour l'utilisation des services REST du projet
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Controleurs {
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
 * Service pour la gestion de l'objet conditionDePrestation
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Application {
    /**
     * Interface du service
     */
    interface IConditionPrestationService {
        recupererConditionsPrestation: (codeEtablissement: string, codePrestation: number) => MyWay.Services.IPromesse<Modeles.Rest.TarificationParametre.ConditionPrestation.IConditionPrestation>;
        setConditionNegocOffre: (condNegocOffre: Modeles.Rest.Tarification.ConditionNegocOffre.IConditionNegocOffre) => void;
        getConditionNegocOffre: () => Modeles.Rest.Tarification.ConditionNegocOffre.IConditionNegocOffre;
    }
}

/**
 * Service pour la gestion de l'objet caracteristiqueMiniProfil pour l'ouverture
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Application {
    /**
     * Interface du service
     */
    interface IMiniProfilService {
        recupererCaracteristiqueMiniProfil: (codeEtablissement: string, codeGuichetInterbancaire: string, referenceProduitService: string, codeProduitService: string) => MyWay.Services.IPromesse<Modeles.Rest.SyntheseService.MiniProfil.ICaracteristiqueMiniProfil>;
    }
}

/**
 * Service pour la gestion de l'objet tarificationFinVente
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Application {
    /**
     * Interface du service
     */
    interface ITarificationFinVenteService {
        recupererTarificationFinVente: (codeEtablissement: string, elementStructure1: number, elementStructure2: number, numeroOffre: number, codePeriodicite: string) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.TarificationFinVente.ITarificationFinVente>;
        rechargerDonnees: boolean;
    }
}

/**
 * Service pour la gestion de l'objet informationDossierPrelevement
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Application {
    /**
     * Interface du service
     */
    interface ITarificationOffrePrelevementService {
        recupererTarificationOffrePrelevement: (referenceExterneAgent: number, codeEtablissement: string, numeroOffreSouscrite: number, identifiantProduitServiceOffre: number, typeAppel: string) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.TarificationOffrePrelevement.IInformationDossierPrelevement>;
        setTarificationOffrePrelevement: (tarificationOffrePrelevement: Modeles.Rest.Tarification.TarificationOffrePrelevement.ITarificationOffrePrelevement) => void;
        getTarificationOffrePrelevement: () => Modeles.Rest.Tarification.TarificationOffrePrelevement.ITarificationOffrePrelevement;
        setIndicateurTauxInvalide: (valeur: boolean) => void;
        getIndicateurTauxInvalide: () => boolean;
        setDateSaisieNonValide: (valeur: boolean) => void;
        getDateSaisieNonValide: () => boolean;
        setDonneesSauvegarde: (donnees: Modeles.Application.Commun.IDonneesSauvegarde) => void;
        getDonneesSauvegarde: () => Modeles.Application.Commun.IDonneesSauvegarde;
    }
}

/**
 * Service pour la gestion de l'objet tarificationOffreSynthese
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Application {
    /**
     * Interface du service
     */
    interface ITarificationOffreSyntheseService {
        recupererTarificationOffreSynthese: (referenceExterneAgent: number, codeEtablissement: string, identifiantProduitServiceOffre: number, codePeriodicite: string, numeroEntiteTitulaire: number, numeroOffreSouscrite: number, listeProduitServiceAssocies: Array<Modeles.Rest.Tarification.TarificationOffreSynthese.IProduitServiceAssocie>) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.TarificationOffreSynthese.ITarificationOffreSynthese>;
    }
}

/**
 * Service d'initialisation des paramètres de l'application
 * @author S0076105
 */
declare module ComposantsCommunsFacturationForfait.Services.Rest {
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
declare module ComposantsCommunsFacturationForfait.Services.Rest {
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
declare module ComposantsCommunsFacturationForfait.Services.Rest {
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
 * Ensemble d'énumérations communes a FACTURATION FORFAIT
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Enumerations.Application.Commun {
    /**
     * Enumération pour les messages à l'issue de la sauvegarde
     */
    enum LibelleMessageErreurEnum {
        ERREUR_CONDITION_NEGOCIEE,
        ERREUR_TARIFICATION,
    }
}

/**
 * Ensemble d'énumérations concernant le service REST "/syntheseservice/v1/miniProfil"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Enumerations.Rest.SyntheseService.MiniProfil {
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
 * Ensemble d'énumérations concernant le service REST "/tarification/v1/tarificationOffrePrelevement"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Enumerations.Rest.Tarification.TarificationOffrePrelevement {
    /**
     * Code périodicité :
     * 'H' Hebdomadaire
     * 'Q' Quinzaine
     * 'M' Mensuelle
     * 'B' Bimestrielle
     * 'T' Trimestrielle
     * 'S' Semestrielle
     * 'A' Annuelle
     * 'U' Unique
     */
    enum CodePeriodiciteEnum {
        HEBDOMADAIRE,
        QUINZAINE,
        MENSUELLE,
        BIMESTRIELLE,
        TRIMESTRIELLE,
        SEMESTRIELLE,
        ANNUELLE,
        UNIQUE,
    }
    /**
     * Code nature prochaine échéance :
     * 'N' Normal
     * 'I' intercalaire => Prorata
     */
    enum CodeNatureProchaineEcheanceEnum {
        NORMAL,
        INTERCALAIRE,
    }
    /**
     * Code indiquant si la périodicité est ('O' Oui ou 'N' Non) celle qui est présentée par défaut dans l'IHM.
     */
    enum PeriodeParDefautEnum {
        OUI,
        NON,
    }
    /**
     * Détermine si le montant intègre la règle du proprata temporis :
     * 'O' Avec Prorata
     * 'N' Sans Prorata temporis
     */
    enum CalculProrataEnum {
        AVEC_PRORATA,
        SANS_PRORATA,
    }
    /**
     * Code type de périodicité de tarification. Indique la périodicité en vis à vis est 'C' civile ou 'G' glissante (par rapport à une date de référence).
     */
    enum CodeTypePeriodiciteEnum {
        CIVILE,
        GLISSANTE,
    }
    /**
     * Indique le mode d'application des augmentations tarifaires des forfaits.
     *
     * Les augmentations tarifaires sont appliquées :
     * - soit sur le stock (obtenu avant évolution en forçant la date d'effet du barème au 01/01 de l'année en cours)
     * - soit à J sur les nouveaux dossiers ouverts
     * - soit à anniversaire du dossier
     *
     * Valeur :
     * 'P'        Application sur l'ensemble du stock et sur les nouveaux dossiers
     * 'J'        Application à J (sur les nouveaux dossiers uniquement)
     * 'K'        Application à date anniversaire du forfait
     */
    enum CodeTypeAugmentationEnum {
        ENSEMBLE_STOCK_ET_NOUVEAUX_DOSSIERS,
        NOUVEAUX_DOSSIER_UNIQUEMENT,
        DATE_ANNIVERSAIRE_FORFAIT,
    }
    /**
     * Code acte de gestion
     * Valeur :
     * 'OU' Ouverture
     * 'AV' Avenant
     */
    enum CodeActeGestion {
        OUVERTURE,
        AVENANT,
    }
}

/***
 * Ensemble d'interfaces de modèles concernant Facturation Forfait
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Modeles.Application.Commun {
    /**
     * Modèle des erreurs de la liste des erreurs
     */
    interface IErreurService {
        champs: string;
        codeLibelle: string;
        libelle: string;
        anchre?: string;
        boutonRecharger?: boolean;
    }
    /**
     * Interface des indicateurs de succes des requetes
     */
    interface IIndicateurSuccesRequetes {
        indicateurInfosTarifSucces: boolean;
        indicateurTarifFinVenteSucces: boolean;
        indicateurMiniProfilSucces: boolean;
        indicateurTarifOffreSyntheseSucces: boolean;
        indicateurCondPrestaSucces: boolean;
    }
    /**
     * Interface des données utilisées par la sauvegarde
     */
    interface IDonneesSauvegarde {
        compteSelectionne: Modeles.Rest.SyntheseService.MiniProfil.IIdentificationProduit;
        dateProchaineEcheanceSelectionnee: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/syntheseservice/v1/miniProfil"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Modeles.Rest.SyntheseService.MiniProfil {
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
 * Ensemble d'interfaces de modèles concernant le service REST "/tarification/v1/conditionNegocOffre"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Modeles.Rest.Tarification.ConditionNegocOffre {
    interface IConditionNegocOffre {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF ...
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement sur la plateforme
         * Mysys
         */
        numeroOffre: number;
        /**
         * Date de fin d'application du barème
         * Cette borne est exclue
         * Le barème n'est plus valide dès cette date
         */
        dateFinApplication: string;
        /**
         * Taux application négocié
         */
        tauxApplication: number;
        /**
         * Indique le motif qui donne droit à une dérogation tarifaire par rapport au prix standard.
         */
        codeMotifDerogation: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tarification/v1/tarificationFinVente"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Modeles.Rest.Tarification.TarificationFinVente {
    interface ITarificationFinVente {
        /**
         * undefined
         */
        tarificationBase: ITarificationBase;
        /**
         * undefined
         */
        listeTarificationDetail: Array<ITarificationDetail>;
    }
    interface ITarificationDetail {
        /**
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha
         * exemples :
         * USD / dollar - USA
         * JPY / yen - JAPON
         * CNY / yuan - CHINE
         * DKK / couronne - DANEMARK
         */
        codeDevise: string;
        /**
         * Montant à tarifer
         * HT + TVA (sur HT) + Frais Refacturés
         */
        montantTarifer: number;
        /**
         * Numéro d'ordre d'une prestation
         */
        numeroPrestation: number;
        /**
         * Montant à prélever ou prélevé
         */
        montantPreleve: number;
        /**
         * Indique si le P/S entraine un complément de tarification calculé selon des modalités données
         * ' '        Classique (Cartes)
         * 'C'        P/S (produit complémentaire)
         * 'R'        P/S en Remise sans tarification
         */
        indicProduitComplementaire: string;
        /**
         * Cette rubrique permet de définir le caractère systématique de l'application d'une promotion tarifaire lors de la souscription d'un produit complémentaire dans l'offre BL.
         * 'O'        Le motif est systématique.
         * 'N'        Le motif n'est pas systématique.
         * ' '        Le motif n'est pas renseigné.
         */
        indicPromotionSystematique: string;
        /**
         * Indique le motif qui donne droit à une dérogation tarifaire par rapport au prix standard.
         * Exemples :
         * 'PERSORES' CODARE = '1'
         * 'ENFANRES' CODARE = '2'
         * 'MEMBRCOS' CODARE = '3'
         * 'CPERSRES' CODARE = '4' Conjoint du personnel réseau
         * 'PERSAUTR' CODARE = '5' ( CTR par exemple )
         * 'PERSMORA' CODARE = '6'
         * 'TRESPUBL' CODARE = '7' Client en provenance du Trésor Public
         * 'RETETABL' CODARE = '8' Retraité de l'établissement
         */
        codeMotifDerogation: string;
        /**
         * Libellé utilisé en tarification
         */
        libelleOperation: string;
    }
    interface ITarificationBase {
        /**
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha
         * exemples :
         * USD / dollar - USA
         * JPY / yen - JAPON
         * CNY / yuan - CHINE
         * DKK / couronne - DANEMARK
         */
        codeDevise: string;
        /**
         * Montant à tarifer
         */
        montantTarifer: number;
        /**
         * Montant à prélever ou prélevé
         */
        montantPrelever: number;
        /**
         * Montant à tarifer initial
         */
        montantTariferInitial: number;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tarification/v1/tarificationOffrePrelevement"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Modeles.Rest.Tarification.TarificationOffrePrelevement {
    interface IInformationDossierPrelevement {
        /**
         * Code devise selon la nomenclature ISO 4217 alpha.
         */
        codeDevise: string;
        /**
         * Montant à tarifer ( ie le prix )
         */
        prixMensuel: number;
        /**
         * Code périodicité :
         * - 'H' Hebdomadaire
         * - 'Q' Quinzaine
         * - 'M' Mensuelle
         * - 'B' Bimestrielle
         * - 'T' Trimestrielle
         * - 'S' Semestrielle
         * - 'A' Annuelle
         * - 'U' Unique
         */
        codePeriodicite: string;
        /**
         * Date d'exécution de la dernière échéance traitée pour un dossier.
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEcheanceEffectuee: string;
        /**
         * Date de la prochaine échéance.
         * Type date au format yyyy-MM-dd
         */
        dateProchaineEcheance: string;
        /**
         * Code banque compte prélèvement.
         */
        codeBanqueComptePrelevement: string;
        /**
         * Code guichet compte prélèvement.
         */
        codeGuichet: string;
        /**
         * Numéro compte prélèvement
         */
        numeroComptePrelevement: string;
        /**
         * Date d'ouverture administrative d'un produit ou d'un service.
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureService: string;
        /**
         * Code nature prochaine échéance :
         * - 'N' Normal
         * - 'I' intercalaire => Prorata
         */
        codeNatureProchaineEcheance: string;
        /**
         * Date échéance intercalaire
         * Type date au format yyyy-MM-dd
         */
        dateEcheanceIntercalaire: string;
        /**
         * Code type produit service, correspond à un produit/service élémentaire ou à un regroupement de P/S.
         */
        codeProduit: string;
        /**
         * Date de première échéance d'un dossier de prélèvement.
         * Type date au format yyyy-MM-dd
         */
        datePremiereEcheance: string;
        /**
         * Détermine si le montant intègre la règle du proprata temporis :
         *
         * 'O' Avec Prorata 'N' Sans Prorata temporis
         */
        indicateurCalculProrata: string;
        /**
         * Code périodicité :
         *
         * 'H' Hebdomadaire 'Q' Quinzaine 'M' Mensuelle 'B' Bimestrielle 'T' Trimestrielle 'S' Semestrielle 'A' Annuelle 'U' Unique
         */
        periodiciteProrata: string;
        /**
         * Code type de périodicité de tarification. Indique la périodicité en vis à vis est 'C' civile ou 'G' glissante (par rapport à une date de référence).
         */
        codeTypePeriodicite: string;
        /**
         * Indique le mode d'application des augmentations tarifaires des forfaits.
         *
         * Les augmentations tarifaires sont appliquées :
         *
         * soit sur le stock (obtenu avant évolution en forçant la date d'effet du barème au 01/01 de l'année en cours) soit à J sur les nouveaux dossiers ouverts soit à anniversaire du dossier Valeur :
         *
         * 'P' Application sur l'ensemble du stock et sur les nouveaux dossiers 'J' Application à J (sur les nouveaux dossiers uniquement) 'K' Application à date anniversaire du forfait
         */
        codeTypeAugmentation: string;
        /**
         * Indicateur première échéance
         */
        indicateurPremiereEcheance: string;
        ricePrelevement: IRicePrelevement;
        listePlageGratuite: Array<IPlageGratuite>;
        listeInformationConditionNegociee: Array<IInformationConditionNegociee>;
        /**
         * Libellé associé au code périodicité : Hebdomadaire, Quinzaine, Mensuel, Bimensuel, Trimestriel, Semestriel, Annuel, Unique.
         */
        libellePeriodicite: string;
        /**
         * Code indiquant si la périodicité est ('O' Oui ou 'N' Non) celle qui est présentée par défaut dans l'IHM.
         */
        periodeParDefaut: string;
        listePeriodicites: Array<IPeriodicite>;
    }
    interface ITarificationOffrePrelevement {
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau CE.
         */
        referenceExterneAgent: number;
        /**
         * Identifiant d'un Etablissement du Réseau CE, correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE .
         */
        numeroOffreSouscrite: number;
        informationDossierPrelevement: IInformationDossierPrelevement;
    }
    interface IRicePrelevement {
        /**
         * Identifie l'Etablissement bancaire teneur du compte
         */
        codeBanque: string;
        /**
         * Identifie le guichet de l'Etablissement bancaire
         */
        codeGuichet: string;
        /**
         * Référence du compte support du prélèvement
         */
        numeroCompte: string;
        /**
         * Catégorie de gestion du produit/service
         * 'ACFF'     ASSURANCE CFF
         * 'AEEP'     ASSURANCE SUR EPARGNE
         * 'AEMO'     SECUR'MEDIA FORMULE 1
         * 'AENO'     SECUR'MEDIA FORMULE 2
         * 'AEOO'     SECUR'MEDIA FORMULE 1 FAMILLE
         * 'C249'     ASSURETUDE
         * 'C320'     PERP
         * 'C326'     GARANTIE FAMILLE
         * 'C329'     BCP PATRIMONIO CRESCENTE
         * etc...
         */
        codeTypeProduitService: string;
    }
    interface IPlageGratuite {
        /**
         * Date de la prochaine échéance
         * Type date au format yyyy-MM-dd
         */
        dateProchaineEcheance: string;
        /**
         * Indique s'il s'agit d'une première échéance de facturation.
         * Utilisé pour choisir le bon libellé IHM.
         * 'O'        Premier prélèvement
         * 'N'        Premier prélèvement déjà effectué
         */
        indicateurPremiereEcheance: string;
    }
    interface IInformationConditionNegociee {
        /**
         * Date début application
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * Date de fin d'application (exclue)
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * Date dernière maj donnée
         * Type date au format yyyy-MM-dd
         */
        dateDerniereMajDonnee: string;
        /**
         * Taux d'application négociée
         */
        tauxApplicationNegociee: number;
        /**
         * Code motif dérogation (code promo)
         */
        codeMotifDerogation: string;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Code état :
         * - 0 : condition ouverte
         * - 1 : condition fermée
         */
        codeEtat: string;
        libelleConditionNegociee: string;
    }
    interface IPeriodicite {
        /**
         * Code périodicité
         */
        codePeriodicite: string;
        /**
         * Libellé de périodicité
         */
        libellePeriodicite: string;
        /**
         * Est la période par défaut
         */
        periodeParDefaut: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tarification/v1/tarificationOffreSynthese"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Modeles.Rest.Tarification.TarificationOffreSynthese {
    interface ITarificationGlobale {
        codeDevise: string;
        codePeriodicite: string;
        codePrestationTarifiable: number;
        prixMensuel: number;
        montantNonRemise: number;
        montantRemisesCumulees: number;
    }
    interface IProduitServiceBase {
        numeroOffreSouscrite: number;
    }
    interface IProduitServiceAssocie {
        identifiantProduitService: number;
    }
    interface ITarificationOffreSynthese {
        tarificationGlobale: ITarificationGlobale;
        tarificationAssurance: ITarificationAssurance;
    }
    interface IProduitServiceOffre {
        codePeriodicite: string;
        numeroEntiteTitulaire: number;
        dateApplication: string;
        identifiantProduitServiceOffre: number;
        referenceExterneAgent: number;
        codeEtablissement: string;
        produitServiceBase: IProduitServiceBase;
        listeProduitServiceAssocie: Array<IProduitServiceAssocie>;
        promotionProduitServiceBase: IPromotionProduitServiceBase;
        listePromotionPSAssocie: Array<IPromotionProduitServiceAssocie>;
    }
    interface ITarificationAssurance {
        nbProduitsComplAssurance: number;
        montantNonRemiseAssurance: number;
        montantRemiseAssurance: number;
    }
    interface IPromotionProduitServiceAssocie {
        codePromotion: string;
        tauxApplicationTarification: number;
        identifiantProduitService: number;
    }
    interface IPromotionProduitServiceBase {
        tauxApplicationTarification: number;
        codePromotion: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tarificationparametre/v1/conditionPrestation"
 * @author S0077563 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Modeles.Rest.TarificationParametre.ConditionPrestation {
    interface IConditionPrestation {
        /**
         * undefined
         */
        listeConditionNegociable: Array<IConditionNegociable>;
    }
    interface IConditionNegociable {
        /**
         * Libellé de désignation d'une condition tarifaire
         * Ex : 'REDUCTION SUR LES COFFRES'
         */
        libelleCondtion: string;
        /**
         * Indique le motif qui donne droit à une dérogation tarifaire par rapport au prix standard.
         * Exemples :
         * PERSORES
         * ENFANRES
         * MEMBRCOS
         * CPERSRES
         * PERSAUTR
         * PERSMORA
         * TRESPUBL
         * RETETABL
         */
        codeMotifDerogation: string;
        /**
         * Valeur par défaut du taux appliqué à la tarification de base pour une prestation donnée.
         */
        tauxApplicationDefaut: number;
        /**
         * Taux d'application négocié normal
         */
        tauxApplicationNegocieNormal: number;
        /**
         * Taux d'application négocié habilité
         */
        tauxApplicationNegocieHabilite: number;
        /**
         * Période de validaité négociée pas défaut
         */
        periodeValiditeNegocieDefaut: number;
        /**
         * Période validité négociée normale
         */
        periodeValiditeNegocieNormal: number;
        /**
         * Période validité négociée habilitée
         */
        periodeValiditeNegocieHabilite: number;
        /**
         * Détermine l'ordre de présentation dans une liste d'un groupe de prestations tarifables
         */
        numeroOrdre: number;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/syntheseservice/v1/miniProfil"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Rest.SyntheseService.MiniProfil {
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

/**
 * Service permettant d'effectuer les appels au service REST "/tarification/v1/conditionNegocOffre"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Rest.Tarification.ConditionNegocOffre {
    /**
     * Interface du service
     */
    interface IConditionNegocOffreRestService {
        sendPostRequest: (data: Modeles.Rest.Tarification.ConditionNegocOffre.IConditionNegocOffre) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.ConditionNegocOffre.IConditionNegocOffre>;
        sendPutRequest: (data: Modeles.Rest.Tarification.ConditionNegocOffre.IConditionNegocOffre) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.ConditionNegocOffre.IConditionNegocOffre>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/tarification/v1/tarificationFinVente"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Rest.Tarification.TarificationFinVente {
    /**
     * Interface de la requête au service REST "/tarification/v1/tarificationFinVente" de type GET
     */
    interface ITarificationFinVenteRestServiceGetQuery {
        codeEtablissement: string;
        elementStructure1: number;
        elementStructure2: number;
        numeroOffre: number;
        codePeriodicite: string;
        dateApplication: string;
    }
    /**
     * Interface du service
     */
    interface ITarificationFinVenteRestService {
        sendGetRequest: (query: ITarificationFinVenteRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.TarificationFinVente.ITarificationFinVente>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/tarification/v1/tarificationOffrePrelevement"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Rest.Tarification.TarificationOffrePrelevement {
    /**
     * Interface de la requête au service REST "/tarification/v1/tarificationOffrePrelevement" de type GET
     */
    interface ITarificationOffrePrelevementRestServiceGetQuery {
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitServiceOffre: number;
        dateApplication: string;
        codeActeGestion: string;
    }
    /**
     * Interface de la requête au service REST "/tarification/v1/tarificationOffrePrelevement" de type DELETE
     */
    interface ITarificationOffrePrelevementRestServiceDeleteQuery {
        codeEtablissement: string;
        numeroOffre: number;
    }
    /**
     * Interface du service
     */
    interface ITarificationOffrePrelevementRestService {
        sendGetRequest: (query: ITarificationOffrePrelevementRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.TarificationOffrePrelevement.IInformationDossierPrelevement>;
        sendPostRequest: (data: Modeles.Rest.Tarification.TarificationOffrePrelevement.ITarificationOffrePrelevement) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.TarificationOffrePrelevement.ITarificationOffrePrelevement>;
        sendPutRequest: (data: Modeles.Rest.Tarification.TarificationOffrePrelevement.ITarificationOffrePrelevement) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.TarificationOffrePrelevement.ITarificationOffrePrelevement>;
        sendDeleteRequest: (data: ITarificationOffrePrelevementRestServiceDeleteQuery) => MyWay.Services.IPromesse<void>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/tarification/v1/tarificationOffreSynthese"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Rest.Tarification.TarificationOffreSynthese {
    /**
     * Interface du service
     */
    interface ITarificationOffreSyntheseRestService {
        sendPostRequest: (data: Modeles.Rest.Tarification.TarificationOffreSynthese.IProduitServiceOffre) => MyWay.Services.IPromesse<Modeles.Rest.Tarification.TarificationOffreSynthese.ITarificationOffreSynthese>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/tarificationparametre/v1/conditionPrestation"
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsFacturationForfait.Services.Rest.TarificationParametre.ConditionPrestation {
    /**
     * Interface de la requête au service REST "/tarificationparametre/v1/conditionPrestation" de type GET
     */
    interface IConditionPrestationRestServiceGetQuery {
        codeEtablissement: string;
        codePrestation: number;
        dateApplication: string;
    }
    /**
     * Interface du service
     */
    interface IConditionPrestationRestService {
        sendGetRequest: (query: IConditionPrestationRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.TarificationParametre.ConditionPrestation.IConditionPrestation>;
    }
}
