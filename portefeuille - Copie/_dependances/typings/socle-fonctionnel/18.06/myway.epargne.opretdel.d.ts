
declare module operationRetraitDepot {
    var app: ng.IModule;
}

declare module operationRetraitDepot {
    class Constantes {
        /**
         * Constantes pour enchaînements LISA
         */
        static codeLisaNext: {
            QUITTER: number;
        };
        /**
         * Constantes pour routes
         */
        static route: {
            PATH_OPERATION_FINANCIERE: string;
            PATH_IDENTIFICATION_OPERATION_FINANCIERE: string;
            PATH_TABLEAU_COMPTES: string;
            PATH_OPERATION_DISTANCE: string;
            PATH_RECAPITULATIF_OPERATIONS: string;
            PATH_IDENTIFICATION_EXTOURNE_REGUL: string;
            PATH_REGUL_OPERATION_FINANCIERE: string;
            PATH_EXTOURNE_LISTE: string;
            PATH_REGUL_OAD: string;
            PATH_EXTOURNE: string;
            PATH_EXTOURNE_OAD: string;
        };
        static libelleCodeModeFinancier: {
            LIBELLE_CODE_MODE_FINANCIER_VIR: string;
            LIBELLE_CODE_MODE_FINANCIER_OD_VIO: string;
            LIBELLE_CODE_MODE_FINANCIERE_ESP: string;
            LIBELLE_CODE_MODE_FINANCIER_CHQ: string;
            LIBELLE_CODE_MODE_FINANCIER_CHB: string;
            LIBELLE_CODE_MODE_FINANCIER_DIVERS: string;
        };
        static filAriane: {
            FIL_ARIANE_SELECTION_COMPTE: string;
            FIL_ARIANE_HISTORIQUE_OPERATIONS: string;
            FIL_ARIANE_LISTE_EXTOURNES: string;
        };
        static codeFonctionnaliteRest: {
            CODE_DEPOT_HC: string;
            CODE_RETRAIT_HC: string;
            CODE_DEPOT: string;
            CODE_RETRAIT: string;
            CODE_DEPOT_OAD: string;
            CODE_RETRAIT_OAD: string;
            VIREMENT_INTERNE: string;
        };
        static urlRest: {
            URL_REST_OPERATION_FINANCIERE: string;
            URL_REST_OPERATION_DISTANCE: string;
            URL_REST_FACTURATION_PRESTATION: string;
            URL_REST_ETABLISSEMENT_MYSIS: string;
            URL_REST_CONTRAT_NUMERIQUE_PEA: string;
            URL_REST_INFO_COMPTE_PERSONNE_RICE: string;
            URL_REST_INFO_COMPTE_RICE: string;
            URL_REST_CAMPAGNE_LIVRET_GP: string;
            URL_REST_INTERVENANT_ET: string;
            URL_REST_ACTIVITE_BANCAIRE: string;
            URL_REST_TIERS: string;
            URL_REST_IDENTIFICATION_TIERS: string;
            URL_REST_PARTICULIER_TIERS: string;
            URL_REST_CORPORATE_TIERS: string;
            URL_REST_VIREMENT_EXTOURNE: string;
            URL_REST_INFORMATION_CCI: string;
        };
        static operationFinanciere: {
            CODE_INDICATEUR_ANNULATION_A: string;
            CODE_INTERNE_TARIFICATION: string;
            CODE_PRODUIT_08: string;
            CODE_PRODUIT_00: string;
            CODE_PRODUIT_01: string;
            CODE_IDEGPS_LGP: string;
            DATE_VALEUR_DEFAUT_0001_01_01: string;
            TYPE_OPERATION_DIVERSE_VEOD: string;
            CODE_DERNIERE_CONTREPARTIE_D: string;
            CODE_PRODUIT_88: string;
            LIBELLE_TABLEAU_RECAP_EXTOURNE: string;
            TEXTE_LETTRE_CODE_ETAT_RECHERCHE_A: string;
            TEXTE_EXTOURNE_ANN: string;
            TEXTE_EXTOURNE_REMPLACEMENT_RB_VIR: string;
            TEXTE_EXTOURNE_REMPLACEMENT_VIR: string;
            TEXTE_EXTOURNE_VIREMENT_INTERNE_DEBIT: string;
            TEXTE_EXTOURNE_VIREMENT_INTERNE_CREDIT: string;
        };
        /** Libelle des roles de signataires. */
        static libelleRoleSignataire: {
            LIBELLE_ROLE_TITULAIRE: string;
            LIBELLE_ROLE_COTITULAIRE: string;
            LIBELLE_ROLE_PROCURATION_GENERALE: string;
            LIBELLE_ROLE_PROCURATION_GENERALE_COMPTE: string;
            LIBELLE_ROLE_REPRESENTANT_LEGAL: string;
            LIBELLE_ROLE_REPRESENTANT_LEGAL_PERS_MORALE: string;
            LIBELLE_ROLE_PROCURATION_GENERALE_PRO: string;
            LIBELLE_ROLE_AUTRES: string;
            LIBELLE_ROLE_MANDATAIRE: string;
        };
        /** Code role des signataires. */
        static codeRoleSignataire: {
            CODE_ROLE_SIGNATAIRE_01: string;
            CODE_ROLE_SIGNATAIRE_02: string;
            CODE_ROLE_SIGNATAIRE_03: string;
            CODE_ROLE_SIGNATAIRE_04: string;
            CODE_ROLE_SIGNATAIRE_05: string;
            CODE_ROLE_SIGNATAIRE_06: string;
            CODE_ROLE_SIGNATAIRE_07: string;
            CODE_ROLE_SIGNATAIRE_AUTRES_99: string;
        };
        /** Modale de validation. */
        static modale: {
            LIBELLE_MONTANT_RETRAIT_MODALE: string;
            LIBELLE_MONTANT_DEPOT_MODALE: string;
            CONFIRMATION_DEPOT_MODALE: string;
            CONFIRMATION_RETRAIT_MODALE: string;
            MESSAGE_COMPTE_NON_VALABLE: string;
            MESSAGE_COMPTE_CLOTURE: string;
            MESSAGE_COMPTE_DEVISE_NON_HABILITE: string;
            ERREUR_IMPRESSION_BORDEREAU: string;
            OPERATION_EXTOURNE_QUESTION: string;
            TITRE_ERREUR_EXTOURNE_OAD: string;
            TITRE_ERREUR_EXTOURNE: string;
            TITRE_A_LA_CREATION: string;
            TITRE_IMPRESSION_CHEQUE_BANQUE: string;
            TITRE_CHARGEMENT_PAGE: string;
            TITRE_COMPTE_CLOS: string;
            TITRE_ERREUR_STANDARD: string;
            TITRE_ERREUR_PR609A: string;
            TITRE_ERREUR_PS11AAXA: string;
            TITRE_CONFIRMATION_GL072A: string;
            TITRE_CONFIRMATION_PR989B: string;
            TITRE_ERREUR_PR638A: string;
            TITRE_ERREUR_PR992A: string;
            TEXTE_BOUTON_VALIDER: string;
            TEXTE_BOUTON_ANNULER: string;
            TEXTE_BOUTON_OUI: string;
            TEXTE_BOUTON_NON: string;
            TEXTE_OPERATION_NON_PERMISE: string;
            TEXTE_VERSEMENT_BLOQUE_PEA: string;
            TEXTE_AUCUNE_OPEFI_AUTORISEE: string;
            TEXTE_CAMPAGNE_LGP: string;
            TEXT_TAUX_BONIFIE_LGP: string;
            TEXTE_ALERTE_RETRAIT: string;
            TEXTE_RETRAIT_PEL_INTERDIT: string;
            TEXTE_ERREUR_DEVISE: string;
            TEXTE_ERREUR_RECUP_OPERATION: string;
            TEXTE_ERREUR_STANDARD: string;
            TITRE_POPUP_CONFIRMATION: string;
            ICONE_QUESTION: string;
            ICONE_WARNING: string;
            TAILLE_MODALE_MD: string;
            TAILLE_MODALE_SM: string;
            TEXTE_BOUTON_OK: string;
            TEXTE_HEADER_ERREUR: string;
            TEXTE_OPE_OAD_IMPOSSIBLE: string;
            TEXTE_OPE_OAD_IMPOSSIBLE_LIV1012: string;
            TEXTE_OAD_CCE_NON_GERE: string;
            FERMER: string;
            MESSAGE_INFORMATION: string;
            TEXTE_NON_HABILITE_CREATION_COMPTE_88: string;
            TEXTE_NON_HABILITE_ACCES_PROCESSUS: string;
            TEXTE_CAISSE_AUTO_TOTEM_ESPECES_OPERATION_INTERNE: string;
            TEXTE_CAISSE_AUTO_TOTEM_ESPECES_OPERATION_OAD: string;
        };
        static impression: {
            NOM_FICHIER_BORDEREAU: string;
            COMPOSANT_APPLICATIF_IMPRESSION_PDC: string;
        };
        /**
         * Constantes pour les modes d'affichages Depot ou Retrait.
         */
        static modeOperationFinanciere: {
            MODE_DEPOT_OPEFI: string;
            MODE_RETRAIT_OPEFI: string;
        };
        static codeSensImputation: {
            CODE_SENS_IMPUTATION_CREDIT: string;
            CODE_SENS_IMPUTATION_DEBIT: string;
        };
        static sensOperation: {
            SENS_OPERATION_DEPOT: string;
            SENS_OPERATION_RETRAIT: string;
        };
        /**
         * Constantes format de date
         */
        static formatDate: {
            FORMAT_DATE_YYYY_MM_DD: string;
            FORMAT_DATE_DD_MM_YYYY: string;
            FORMAT_DATE_YYYY_MM_DDT: string;
            FORMAT_DATE_YYYY_MM_DD_HH_MM_SS_SSS: string;
            FORMAT_DATE_YYYY_MM_DDTHH_MM: string;
            FORMAT_HEURE_HH_MM: string;
        };
        static typeDate: {
            TYPE_DATE_YEAR: string;
            TYPE_DATE_MONTH: string;
            TYPE_DATE_DATE: string;
            TYPE_DATE_DAYS: string;
        };
        static signataires: {
            CODE_ACTE_GESTION: string;
            CODE_CANAL_FF: string;
        };
        static sansContrepartie: {
            CODE_SENS_VIREMENT_SANS_CONTREPARTIE_CREDIT: string;
            CODE_SENS_VIREMENT_SANS_CONTREPARTIE_DEBIT: string;
        };
        /**
         * Constantes pour titres
         */
        static titre: {
            TITRE_OPERATION_RETRAIT: string;
            TITRE_OPERATION_DEPOT: string;
            TITRE_OPERATION: string;
            TITRE_OPERATION_RETRAIT_HORS_PRESENCE: string;
            TITRE_OPERATION_RETRAIT_PRESENCE_CLIENT: string;
            TITRE_OPERATION_DEPOT_HORS_PRESENCE: string;
            TITRE_OPERATION_DEPOT_PRESENCE_CLIENT: string;
            TITRE_REGULARISER_OPERATION_DEPOT_HORS_PRESENCE: string;
            TITRE_REGULARISER_OPERATION_DEPOT_PRESENCE_CLIENT: string;
            TITRE_REGULARISER_OPERATION_RETRAIT_HORS_PRESENCE: string;
            TITRE_REGULARISER_OPERATION_RETRAIT_PRESENCE_CLIENT: string;
            TITRE_OPERATION_DEPOT_OAD: string;
            TITRE_OPERATION_RETRAIT_OAD: string;
            TITRE_OPERATION_EXTOURNE_REGUL: string;
            TITRE_REGULARISER_OPERATION_RETRAIT: string;
            TITRE_REGULARISER_OPERATION_DEPOT: string;
            TITRE_REGULARISER_OAD_RETRAIT: string;
            TITRE_REGULARISER_OAD_DEPOT: string;
            TITRE_EXTOURNER_OPERATION_RETRAIT: string;
            TITRE_EXTOURNER_OPERATION_DEPOT: string;
            TITRE_EXTOURNER_OAD_RETRAIT: string;
            TITRE_EXTOURNER_OAD_DEPOT: string;
        };
        /**
         * Habilitations.
         */
        static habilitations: {
            CODE_HABILITATION_VALIDATION_OPERATION: string;
            CODE_HABILITATION_RETRAIT_OAD: string;
            CODE_HABILITATION_DEPOT_OAD: string;
            CODE_HABILITATION_RETRAIT_ETAB_HP_GRISE: string;
            CODE_HABILITATION_DEPOT_ETAB_HP_GRISE: string;
            CODE_HABILITATION_RETRAIT_ETAB_HP: string;
            CODE_HABILITATION_DEPOT_ETAB_HP: string;
            CODE_HABILITATION_EXTOURNE: string;
            CODE_HABILITATION_REGUL: string;
            CODE_HABILITATION_IMPRESSION_CHEQUE_BANQUE: string;
            CODE_HABILITATION_DEVISE: string;
            CODE_HABILITATION_VALIDATION_COMPTE_88: string;
        };
        /**
         * Code forage.
         */
        static forcage: {
            CODE_FORCAGE_CREATION_OPERATION_DEMANDE_FORCAGE: number;
            ENTETE_CONFIRMATION_FORCAGE_CREATION_OPERATION_FINANCIERE_DEPOT_RETRAIT: string;
            ENTETE_CONFIRMATION_FORCAGE_TARIFICATION: string;
            DATE_VALEUR_DEPASSE_10_JOURS: string;
            CODE_FORCAGE_VALIDATION_N: string;
            CODE_FORCAGE_VALIDATION_O: string;
        };
        /**
         * Constantes Code Lisa
         */
        static codeLisa: {
            CODE_LISA_VALIDER_RETRT_PEA: number;
            CODE_LISA_VALIDER_REAL_OAD: number;
            CODE_LISA_VALIDER_REAL_OPRT: number;
            CODE_LISA_RECH_PERS_IDNT_CLNT_CONT_MYW: number;
            CODE_LISA_RECAP_OPRT_HORS_CLNT: number;
            CODE_LISA_VALIDER_SELC_CPTE: number;
            CODE_LISA_EXT_RETRAIT: number;
            CODE_LISA_EXT_DEPOT: number;
            CODE_LISA_EXT_OAD_RETRAIT: number;
            CODE_LISA_EXT_OAD_DEPOT: number;
            ANNULER: number;
            SELC_OPRT_EXTR: number;
            REGL_OPRT_FINN_RETRT: number;
            REGL_OPRT_FINN_DEPO: number;
            REGL_OAD_RETRT: number;
            REGL_OAD_DEPO: number;
        };
        static paramCodeGuichet: {
            PARAM_CODE_GUICHET_VALUE: string;
        };
        static constLength: {
            CONST_LENGTH_0: number;
            CONST_LENGTH_1: number;
            CONST_LENGTH_2: number;
            CONST_LENGTH_3: number;
            CONST_LENGTH_4: number;
        };
        static charParamSignataire: {
            CHAR_PARAM_SIGNATAIRE_0: string;
        };
        static nombreDecimal: {
            NOMBRE_DECIMAL_2: number;
        };
        static roleSignataire: {
            AUTRES: string;
        };
        static devise: {
            CODE_DEVISE_EUR: string;
        };
        static libelleDevise: {
            LIBELLE_DEVISE_EURO: string;
        };
        static symboleDevise: {
            SYMBOLE_DEVISE_EURO: string;
        };
        static applicationsLisaExtourneRegul: string[];
        static erreur: {
            TITRE_SYNTHESE_ERREUR_1: string;
            TEMPLATE_TITRE_SYNTHESE_ERREUR_SUFFIXE_SUP_1: string;
            PREFIXE_MESSAGE_LE: string;
            PREFIXE_MESSAGE_LA: string;
            PREFIXE_MESSAGE_LES: string;
            PREFIXE_MESSAGE_L: string;
            PREFIXE_MESSAGE_LE_CHAMP: string;
            SUFFIXE_MESSAGE_EST: string;
            SUFFIXE_MESSAGE_SONT: string;
            SUFFIXE_MESSAGE_DEPASSE: string;
            LINK_SEPARATOR: string;
            MESSAGE_ERREUR_VALIDATION_OPERATION_FINANCIERE: string;
            MESSAGE_ERREUR_VALIDATION_CARTE_TMF_UN_SIGNATAIRE: string;
            MESSAGE_ERREUR_VALIDATION_CARTE_TMF_RETRAIT_IMPOSSIBLE_TIERS: string;
            MESSAGE_ERREUR_POPUP_TITRE_FACTURATION_PRESTATION: string;
            MESSAGE_ERREUR_POPUP_TITRE_EXTOURNE_FACTURATION_PRESTATION: string;
            MESSAGE_ERREUR_POPUP_TITRE_IDENTIFIANT_BORDEREAU: string;
            MESSAGE_ERREUR_VALIDATION_SUIVI_COMMERCIAL: string;
            ID_MESSAGE_ERREUR_SIGNATAIRES: string;
            ID_MESSAGE_ERREUR_REFERENCE_IDENTITE: string;
            ID_MESSAGE_ERREUR_LIBELLE_OPERATION: string;
            MESSAGE_ERREUR_MONTANT_INVALIDE: string;
            ID_ANCRE_CHAMP_MONTANT: string;
        };
        static modesFinanciersPossibles: operationRetraitDepot.Modeles.IModeFinancier[];
        /**
         * Constantes pour types de produits bancaires
         */
        static typeProduit: {
            LISTE_TYPE_PRODUIT_BENEFICIAIRE: string[];
            LISTE_TYPE_PRODUIT_BENEFICIAIRE_SANS_PEA: string[];
            SLR: string;
            LISTE_TYPE_PRODUIT_A_EXCLURE_IDENTIFICATION: string[];
            LISTE_PRODUIT_OAD: string[];
            LISTE_PRODUIT_PEA: string[];
            LIVRET_B_DEVISE_A_EXCLURE: string[];
            LISTE_PRODUIT_PEL: string[];
        };
        static identificationOperationFinanciere: {
            LIBELLE_INTERNE: string;
            LIBELLE_AUTRE: string;
        };
        static contexte: {
            RICE: string;
            HORS_PRESENCE: string;
            IDENTIFIANT_PERSONNE: string;
            IDENTIFIANT_ET: string;
            DESIGNATION_PERSONNE: string;
            NOM: string;
            PRENOM: string;
            DERNIER_RICE_OAD: string;
            DERNIER_RICE: string;
            RETOUR_EXTOURNE: string;
            FILTRER_SUR_RICE: string;
        };
        static messageTableau: {
            TABLEAU_EXTOURNE_VIDE: string;
        };
        constructor();
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere retrait ou depot.
     */
    class ExtourneControleur {
        private $scope;
        private modalService;
        private navigationService;
        private serviceAgentExtended;
        private operationFinanciereDepotRetraitService;
        private postOperationFinanciereService;
        private communOpeFiRegulService;
        private extourneService;
        private impressionBordereauService;
        private popupService;
        private tarificationFacturePrestationService;
        private libelleService;
        private $q;
        private recapitulatifOperationsService;
        private saisieRiceService;
        private entretiencommercialResultatEntretienService;
        private miniProfilService;
        private operationFinanciereService;
        static $inject: string[];
        /** Contient les paramètres d'entrée du composant signataires. */
        paramSignataires: myway.comContract.modeles.ISignataireInput;
        signataires: myway.comContract.modeles.ISignataireComplet[];
        /** Message d'erreur signataire. */
        messageErreurSignataire: string;
        /** Contient l'objet Opération financière. */
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        /** Indique si on est en mode retrait. */
        estModeRetrait: boolean;
        /** Indique si on est hors présence du client. */
        estHorsPresenceClient: boolean;
        /** Chargement. */
        chargement: boolean;
        /** Liste des erreurs du formulaire */
        listeErreur: Array<MyWay.UI.IErreurFormulaire>;
        /** Titre de la page. */
        titrePage: string;
        /** Habilitation Extourne */
        estHabilite: boolean;
        /** Code fonctionnalite. */
        codeFonctionnalite: string;
        /** Liste des opérations concernant une répartition par chèque de banque. */
        listeOperationsChequeBanqueRepartition: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere[];
        /** Indique si c'est un bordereau MyWay (sans synthèse client) ou non. */
        bordereauMyWay: boolean;
        /** Indique si c'est une extourne de virement interne. */
        estExtourneVirementInterne: boolean;
        /** Compte de la contrepartie. */
        compteContrepartie: MyWay.Model.Compte;
        /** Ouverture par défaut du bloc signataires. */
        ouvertureDefautBlocSignataires: boolean;
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, navigationService: Services.NavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, postOperationFinanciereService: myway.comOpesFinancieres.PostOperationFinanciereService, communOpeFiRegulService: Services.CommunOpeFiRegulService, extourneService: Services.ExtourneService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService, popupService: Services.PopupService, tarificationFacturePrestationService: Services.TarificationFacturePrestationService, libelleService: Services.LibelleService, $q: ng.IQService, recapitulatifOperationsService: Services.RecapitulatifOperationsService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, entretiencommercialResultatEntretienService: myway.comOpesFinancieres.EntretiencommercialResultatEntretienService, miniProfilService: myway.comOpesFinancieres.MiniProfilService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService);
        /**
         * Conditions d'affichage du bloc signataires
         */
        estAfficherBlocSignataires(): boolean;
        /**
         * Conditions d'affichage du bloc d'opération financières
         */
        estAfficherBlocOperationFinanciere(): boolean;
        /**
         * Conditions de désactivation du bouton extourner.
         */
        estDesactivaterBoutonExtourner(): boolean;
        /**
         * Clic sur le bouton extourner
         */
        extourner(): void;
        /**
         * Permet d'alimenter l'objet d'extourne REST avec les données du JAB
         * @param operationFinanciere Operation Financiere
         * @param estDepot Indique si on est en dépôt
         * @param codeFonctionnalite Code fonctionnalité
         */
        private alimentationObjetPostOperationFinanciereDepotRetrait(operationFinanciere, estDepot, codeFonctionnalite);
        private validationExtourne();
        private annulationSpinnerChargement();
        /**
         * Traitement de l'extourne d'une facturation.
         * @param operationDepotRetraitRest OperationDepotRetrait Rest
         */
        private traitementExtourneFacturation(operationDepotRetraitRest, operationFinanciereExtourne?);
        /**
         * Traitement post operation financiere puis sortie de l'application. Sauf en cas de bordereau MyWay suite vers impression
         */
        traitementPostOperationFinanciereEtSortieApplication(): void;
        private suiviCommercialPuisSortieApplication();
        /**
         * Impression du bordereau MyWay puis sortie
         * @param bordereauMyWay Indique si c'est un bordereau MyWay
         */
        impressionBordereauEtSortie(bordereauMyWay: boolean): void;
        /**
         * Clic sur le bouton annuler.
         */
        annuler(): void;
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere retrait ou depot.
     */
    class ExtourneListeControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private navigationService;
        private recapitulatifOperationsService;
        private mwsfDeviseService;
        private operationFinanciereDepotRetraitService;
        private modalService;
        private riceService;
        private $q;
        static $inject: string[];
        options: MyWay.UI.ImwTableOptions;
        operationSelectionnee: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere;
        deviseCompte: MyWay.Model.Devise;
        rice: MyWay.Model.Rice;
        infoCompte: operationRetraitDepot.Modeles.CompteModel;
        listeOperations: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere[];
        listeOperationsComplete: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere[];
        filtrerSurRice: boolean;
        chargementTableauEnCours: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: operationRetraitDepot.Services.NavigationService, recapitulatifOperationsService: Services.RecapitulatifOperationsService, mwsfDeviseService: myway.comInterdomaine.DeviseService, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, modalService: MyWay.UI.IModalService, riceService: Services.RiceService, $q: ng.IQService);
        /**
         * Récupère les opérations du jour et filtre sur les opérations extournables
         * @param filtrerSurRice filtre sur le rice du contexte
         * @param listeOperations Liste des opérations du tableau
         */
        private recupereListeOperationAExtourner(filtrerSurRice);
        valider(): void;
        /**
         * Ajoute les données de la personne dans le contexte et passe à l'écran suivant
         */
        private ajouteAuContexteEtContinue();
        annulerLisaNext(): void;
        annuler(): void;
        disableBoutonValider(): boolean;
        onSelectionChange(selectedObject: Object): void;
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere retrait ou depot.
     */
    class ExtourneOadControleur {
        private $scope;
        private serviceAgentExtended;
        private navigationService;
        private communOADRegulService;
        private postOperationFinanciere;
        private modalService;
        private extourneService;
        private operationFinanciereDepotRetraitService;
        private impressionBordereauService;
        private popupService;
        private tarificationFacturePrestationService;
        private entretiencommercialResultatEntretienService;
        private libelleService;
        static $inject: string[];
        /** Contient les paramètres d'entrée du composant signataires. */
        paramSignataires: myway.comContract.modeles.ISignataireInput;
        signataires: myway.comContract.modeles.ISignataireComplet[];
        /** Message d'erreur signataire. */
        messageErreurSignataire: string;
        /** Contient l'objet Opération financière. */
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        /** Indique si on est en mode retrait. */
        estModeRetrait: boolean;
        /** Indique si on est hors présence du client. */
        estHorsPresenceClient: boolean;
        /** Chargement. */
        chargement: boolean;
        /** Titre de la page. */
        titrePage: string;
        /** Liste des erreurs du formulaire */
        listeErreur: Array<MyWay.UI.IErreurFormulaire>;
        /** Indique si c'est une OAD Interne ou Externe (en fonction du code etablissement s'il est dans l'Instance de Production) */
        estInterne: boolean;
        /** Habilitation Extourne */
        estHabilite: boolean;
        /** Code fonctionnalite. */
        codeFonctionnalite: string;
        /** Ouverture par défaut du bloc signataires. */
        ouvertureDefautBlocSignataires: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: operationRetraitDepot.Services.NavigationService, communOADRegulService: Services.CommunOADRegulService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, modalService: MyWay.UI.IModalService, extourneService: Services.ExtourneService, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService, popupService: Services.PopupService, tarificationFacturePrestationService: Services.TarificationFacturePrestationService, entretiencommercialResultatEntretienService: myway.comOpesFinancieres.EntretiencommercialResultatEntretienService, libelleService: Services.LibelleService);
        /**
         * Clic sur le bouton extourner
         */
        extourner(): void;
        /**
         * Permet d'alimenter l'objet d'Extourner OAD REST avec les données du JAB
         * @param operationFinanciere Operation Financiere
         * @param estDepot Indique si c'est un dépôt
         * @param codeFonctionnalite Code fonctionnalité
         */
        private alimentationObjetPostOperationADistanceDepotRetrait(operationFinanciere, estDepot, codeFonctionnalite);
        /**
         * Validation de l'extourne
         */
        validationExtourne(): void;
        /**
         * Traitement de l'extourne d'une facturation.
         * @param operationDepotRetraitRest OperationDepotRetrait Rest
         */
        private traitementExtourneFacturationOAD(operationDistanceDepotRetraitRest);
        private traitementPostOperationFinanciereEtSortieApplication();
        private annulationSpinnerChargement();
        private suiviCommercialPuisSortieApplication();
        gestionImpressionEtSortieApplication(): void;
        /**
         * Clic sur le bouton annuler
         */
        annuler(): void;
        /**
         * Conditions d'affichage du bloc signataires
         */
        estAfficherBlocSignataires(): boolean;
        /**
         * Conditions d'affichage du bloc d'opération financières
         */
        estAfficherBlocOperationFinanciere(): boolean;
        /**
         * Conditions de désactivation du bouton extourner.
         */
        estDesactivaterBoutonExtourner(): boolean;
    }
}

declare module operationRetraitDepot.Controleurs {
}

declare module operationRetraitDepot.Controleurs {
    class IdentificationExtourneRegulControleur {
        private $q;
        private $scope;
        private serviceAgentExtended;
        private mwNotificationService;
        private identificationExtourneRegulService;
        private navigationService;
        private operationFinanciereDepotRetraitService;
        private modalService;
        private riceService;
        static $inject: string[];
        static EXT_OP_JOUR: string;
        static REGL_DEP_JOUR_ANT: string;
        static REGL_RET_JOUR_ANT: string;
        numeroCompte: MyWay.Model.Rice;
        listeOperation: string[];
        operation: string;
        horsPresenceClient: boolean;
        listeOperationJab: Modeles.ICaracteristiqueOperationFinanciere[];
        constructor($q: ng.IQService, $scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, identificationExtourneRegulService: Services.IdentificationExtourneRegulService, navigationService: Services.NavigationService, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, modalService: MyWay.UI.IModalService, riceService: Services.RiceService);
        annuler(): void;
        /**
         * Retourne Vrai si le rice est complet et valide, et permet de rendre cliquable le bouton "Valider"
         */
        estValide(): boolean;
        /**
         * Méthode du passage au prochaine étape Lisa selon les données renseignées
         */
        valider(): void;
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere retrait ou depot.
     */
    class IdentificationOperationFinanciereControleur {
        private $scope;
        private serviceAgentExtended;
        private navigationService;
        private $routeParams;
        private modalService;
        private operationFinanciereDepotRetraitService;
        private opecartetmfCompteEligibleTmfService;
        private riceService;
        private $q;
        private $timeout;
        static $inject: string[];
        modeEntree: string;
        rice: MyWay.Model.Rice;
        afficheHorsPresence: boolean;
        clientDeMonEtablissement: string;
        horsPresenceClient: boolean;
        infoCompte: operationRetraitDepot.Modeles.CompteModel;
        validationImpossible: boolean;
        afficherEtab: boolean;
        afficherOAD: boolean;
        autoriserHorsPresence: boolean;
        afficherDernierCompteSaisiOAD: boolean;
        afficherDernierCompteSaisi: boolean;
        wvHorsPresence: boolean;
        wtEtab: boolean;
        xcOad: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: Services.NavigationService, $routeParams: ng.route.IRouteParamsService, modalService: MyWay.UI.IModalService, operationFinanciereDepotRetraitService: operationRetraitDepot.Services.OperationFinanciereDepotRetraitService, opecartetmfCompteEligibleTmfService: myway.comOpesFinancieres.CarteTMF.OpecartetmfCompteEligibleTmfService, riceService: Services.RiceService, $q: ng.IQService, $timeout: ng.ITimeoutService);
        private placerFocusSurRice();
        /**
         * Gestion de la page pour le mode "Mon Etablissement"
         * mode d'appel du rice (Etablissement), hors présence possible, initialisation du rice avec l'établissement et le guichet de l'agent
         */
        afficheMonEtablissement(): void;
        /**
         * Gestion de la page pour le mode "Autre CE"
         * mode d'appel du rice (Externe), hors présence non visible, initialisation du rice à vide
         */
        afficheAutreCE(): void;
        /**
         * Retourne Vrai si le rice est complet et valide, et permet de rendre cliquable le bouton "Valider"
         */
        estValide(): boolean;
        /**
         * Action sur le clic du bouton "Valider"
         */
        valider(): void;
        private testEligibiliteRetraitTMFOAD(interne);
        private operationOADNonPermise(interne);
        private operationSurCompteClosNonPermise();
        private inscritDansLeContexteEtPasseALEcranSuivant();
        private inscritDansLeContexteEtPasseALEcranSuivantOAD(interne);
        /**
         * Action sur le clic du bouton "Récapitulatif hors présence client"
         */
        recapitulatifHPClient(): void;
        /**
         * Action sur le clic du bouton "Recherche Personne"
         */
        recherchePersonne(): void;
        /**
         * en fonction du mode d'entrée, récupère les habilitations qui permettront d'afficher ou non le radio bouton "mon etab/OAD" + la case Hors présence
         */
        recupereHabilitations(): ng.IPromise<void>;
        /**
         * Applique les combinaisons des habilitations
         */
        appliqueHabilitations(): void;
        /**
         * action sur le bouton valider si le formulaire est valide
         */
        submit(): void;
        /**
         * Clic sur le logo "retour arrière" pour remplacer le rice par le dernier saisi - Côté OAD
         */
        timeBackOAD(): void;
        /**
         * Clic sur le logo "retour arrière" pour remplacer le rice par le dernier saisi - Côté Interne
         */
        timeBack(): void;
    }
}

declare module operationRetraitDepot.Controleurs {
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere à distance.
     */
    class OperationDistanceControleur {
        private $scope;
        private modalService;
        private navigationService;
        private serviceAgentExtended;
        private operationFinanciereDepotRetraitService;
        private communOADRegulService;
        private postOperationFinanciere;
        private carteTempoMultiFonctionsService;
        private tarificationFacturePrestationService;
        private $q;
        private identifiantBordereauService;
        private impressionBordereauService;
        private $timeout;
        private popupService;
        private libelleService;
        private operationFinanciereService;
        static $inject: string[];
        /** Contient les paramètres d'entrée du composant signataires. */
        paramSignataires: myway.comContract.modeles.ISignataireInput;
        signataires: myway.comContract.modeles.ISignataireComplet[];
        /** Message d'erreur signataire. */
        messageErreurSignataire: string;
        /** Contient l'objet Opération financière. */
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        /** Définit le mot d'entrée Depot ou Retrait. */
        modeEntree: string;
        /** Indique si on est en mode retrait. */
        estModeRetrait: boolean;
        /** Indique si on est en mode depot. */
        estModeDepot: boolean;
        /** Chargement. */
        chargement: boolean;
        /** Chargement bouton valider. */
        chargementBoutonValider: boolean;
        /** Titre de la page. */
        titrePage: string;
        /** Indique si c'est une OAD Interne ou Externe (en fonction du code etablissement s'il est dans l'Instance de Production) */
        estInterne: boolean;
        /** Liste des erreurs du formulaire */
        listeErreur: Array<MyWay.UI.IErreurFormulaire>;
        champsErreursOpefi: myway.comOpesFinancieres.Model.ChampErreurOperationFinanciere[];
        /** Code fonctionnalité pour le service REST. */
        codeFonctionnalite: string;
        /** Ouverture par défaut du bloc signataires. */
        ouvertureDefautBlocSignataires: boolean;
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, navigationService: Services.NavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, communOADRegulService: Services.CommunOADRegulService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, carteTempoMultiFonctionsService: myway.comOpesFinancieres.CarteTMF.CarteTempoMultiFonctionsService, tarificationFacturePrestationService: Services.TarificationFacturePrestationService, $q: ng.IQService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService, $timeout: ng.ITimeoutService, popupService: Services.PopupService, libelleService: Services.LibelleService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService);
        /**
         * Annulation de l'opération, sortie de l'application
         */
        annuler(): void;
        /**
         * Conditions d'affichage du bloc signataires
         */
        estAfficherBlocSignataires(): boolean;
        /**
         * Conditions d'affichage du bloc d'opération financières
         */
        estAfficherBlocOperationFinanciere(): boolean;
        private annulationSpinnerChargement();
        /**
         * Confirmation de la validation de l'opération
         */
        private confirmer();
        private gestionImpressionChequeBanqueFacturationEtSuiteTraitement(operationDistanceDepotRetraitRest);
        private traitementPostOperationFinanciereEtSortieApplication();
        private gestionImpressionEtSortieApplication();
        /**
         * Validation de l'operation.
         */
        validationOperation(): void;
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere retrait ou depot.
     */
    class OperationFinanciereControleur {
        private $scope;
        private modalService;
        private navigationService;
        private serviceAgentExtended;
        private operationFinanciereDepotRetraitService;
        private postOperationFinanciere;
        private communOpeFiRegulService;
        private $q;
        private tarificationFacturePrestationService;
        private impressionBordereauService;
        private carteTempoMultiFonctionsService;
        private $timeout;
        private identifiantBordereauService;
        private popupService;
        private libelleService;
        private entretiencommercialResultatEntretienService;
        private operationFinanciereService;
        private contractualisationOperationService;
        static $inject: string[];
        /** Contient les paramètres d'entrée du composant signataires. */
        paramSignataires: myway.comContract.modeles.ISignataireInput;
        signataires: myway.comContract.modeles.ISignataireComplet[];
        /** Message d'erreur signataire. */
        messageErreurSignataire: string;
        /** Contient l'objet Opération financière. */
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        /** Définit le mot d'entrée Depot ou Retrait. */
        modeEntree: string;
        /** Indique si on est en mode retrait. */
        estModeRetrait: boolean;
        /** Indique si on est en mode depot. */
        estModeDepot: boolean;
        /** Indique si on est hors présence du client. */
        estHorsPresenceClient: boolean;
        /** Chargement. */
        chargement: boolean;
        /** Chargement bouton valider. */
        chargementBoutonValider: boolean;
        /** Titre de la page. */
        titrePage: string;
        /** Liste des erreurs du formulaire */
        listeErreur: Array<MyWay.UI.IErreurFormulaire>;
        champsErreursOpefi: myway.comOpesFinancieres.Model.ChampErreurOperationFinanciere[];
        /** Code fonctionnalité pour le service REST. */
        codeFonctionnalite: string;
        /** Indique si c'est un bordereau MyWay (sans synthèse client) ou non. */
        bordereauMyWay: boolean;
        /** Ouverture par défaut du bloc signataires. */
        ouvertureDefautBlocSignataires: boolean;
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, navigationService: Services.NavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, communOpeFiRegulService: Services.CommunOpeFiRegulService, $q: ng.IQService, tarificationFacturePrestationService: Services.TarificationFacturePrestationService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService, carteTempoMultiFonctionsService: myway.comOpesFinancieres.CarteTMF.CarteTempoMultiFonctionsService, $timeout: ng.ITimeoutService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, popupService: Services.PopupService, libelleService: Services.LibelleService, entretiencommercialResultatEntretienService: myway.comOpesFinancieres.EntretiencommercialResultatEntretienService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, contractualisationOperationService: myway.comOpesFinancieres.ImpressionBordereau.ContractualisationOperationService);
        /**
         * Conditions d'affichage du bloc signataires
         */
        estAfficherBlocSignataires(): boolean;
        /**
         * Conditions d'affichage du bloc d'opération financières
         */
        estAfficherBlocOperationFinanciere(): boolean;
        /**
         * Clic sur le bouton Annuler dans l'IHM
         */
        annuler(): void;
        /**
         * Validation de l'opération financière
         */
        validationOperation(): void;
        /**
         * Confirmation de l'opération avec un temps d'attente pour attendre les événements des directives
         */
        confirmer(): void;
        /**
         * Confirmation de l'opération.
         */
        confirmerAvecPause(): void;
        private traitementPostOperationFinanciereEtSortieApplication();
        private annulationSpinnerChargement();
        private gestionImpressionChequeBanqueFacturationEtSuiteTraitement(operationDepotRetraitRest);
        private suiviCommercialPuisSortieApplication();
        private gestionImpressionBordereauEtSortieApplication(bordereauMyWay);
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour le tableau récapitulatif des operations financieres.
     */
    class RecapitulatifOperationsControleur {
        private $scope;
        private $routeParams;
        private modalService;
        private navigationService;
        private serviceAgentExtended;
        private recapitulatifOperationsService;
        private mwNotificationService;
        private mwsfDeviseService;
        private $filter;
        static $inject: string[];
        /** Date du jour. */
        dateFormatRest: string;
        /** Agent connecté. */
        refAgentConnecte: string;
        etablissement: string;
        numeroAgent: string;
        /** Heures. */
        private listeHeures;
        heureDebut: string;
        heureFin: string;
        heureDebutValid: boolean;
        heureFinValid: boolean;
        /** Calcul après filtres d'heures. */
        nombreOperationsChoisies: number;
        nombreOperationsTotal: number;
        calculMontantDepot: number;
        calculMontantRetrait: number;
        /** Données pour le tableau et son extraction. */
        listeOperations: Modeles.ICaracteristiqueOperationFinanciere[];
        listeJab: Modeles.IOperationJab;
        tableauExport: MyWay.Services.Export.IDonneesAExporter;
        tableauExcel: Array<string | number>[];
        tableauFinal: Modeles.ICaracteristiqueOperationFinanciere[];
        tableauOperationAgent: Modeles.ICaracteristiqueOperationFinanciere[];
        dataTableauBackup: Modeles.ICaracteristiqueOperationFinanciere[];
        /** Création du tableau récapitulatif. */
        tableauRecapitulatif: MyWay.UI.ImwTableOptions;
        /** initialisation de la journée. */
        private annee;
        private mois;
        private jour;
        private dateDebutFormatDate;
        private dateFinFormatDate;
        premiereDevise: MyWay.Model.Devise;
        constructor($scope: ng.IScope, $routeParams: ng.route.IRouteParamsService, modalService: MyWay.UI.IModalService, navigationService: Services.NavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, recapitulatifOperationsService: operationRetraitDepot.Services.RecapitulatifOperationsService, mwNotificationService: MyWay.UI.IMwNotificationService, mwsfDeviseService: myway.comInterdomaine.DeviseService, $filter: ng.IFilterService);
        /** Méthode qui va mettre à jour le tableau et les éléments associés selon la recherche des horaires. */
        updateTable(): void;
        retour(): void;
        /**
         * Méthode qui créer la donnée Contenu pour le tableau Excel
         * @param pContenu
         */
        private construireTableauContenu(pContenu);
        /** Méthode qui exporte le tableau HTML en format Excel. */
        exporterExcel(): void;
        afficheTableau(): boolean;
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere à distance.
     */
    class RegulOadControleur {
        private $scope;
        private $routeParams;
        private modalService;
        private navigationService;
        private serviceAgentExtended;
        private operationFinanciereDepotRetraitService;
        private communOADRegulService;
        private postOperationFinanciere;
        private libelleService;
        private popupService;
        private carteTempoMultiFonctionsService;
        private identifiantBordereauService;
        private tarificationFacturePrestationService;
        private impressionBordereauService;
        private operationFinanciereService;
        static $inject: string[];
        paramSignataires: myway.comContract.modeles.ISignataireInput;
        signataires: myway.comContract.modeles.ISignataireComplet[];
        messageErreurSignataire: string;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        /** Définit le mot d'entrée Depot ou Retrait. */
        modeEntree: string;
        estModeRetrait: boolean;
        estModeDepot: boolean;
        chargement: boolean;
        chargementBoutonValider: boolean;
        titrePage: string;
        /** Indique si c'est une OAD Interne ou Externe (en fonction du code etablissement s'il est dans l'Instance de Production) */
        estInterne: boolean;
        /** Habilitation Régularisation de l'agent */
        habilitation: boolean;
        /** Code fonctionnalité pour le service REST. */
        codeFonctionnalite: string;
        champsErreursOpefi: myway.comOpesFinancieres.Model.ChampErreurOperationFinanciere[];
        listeErreur: Array<MyWay.UI.IErreurFormulaire>;
        /** Ouverture par défaut du bloc signataires. */
        ouvertureDefautBlocSignataires: boolean;
        constructor($scope: ng.IScope, $routeParams: ng.route.IRouteParamsService, modalService: MyWay.UI.IModalService, navigationService: Services.NavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, communOADRegulService: Services.CommunOADRegulService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, libelleService: Services.LibelleService, popupService: Services.PopupService, carteTempoMultiFonctionsService: myway.comOpesFinancieres.CarteTMF.CarteTempoMultiFonctionsService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, tarificationFacturePrestationService: Services.TarificationFacturePrestationService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService);
        /**
         * Validation de la regularisation OAD
         */
        validationRegularisationOAD(): void;
        private confirmer();
        private gestionImpressionChequeBanqueFacturationEtSuiteTraitement(operationDistanceDepotRetraitRest);
        private traitementPostOperationFinanciereEtSortieApplication();
        private gestionImpressionEtSortieApplication();
        private annulationSpinnerChargement();
        /**
         * Conditions d'affichage du bloc signataires
         */
        estAfficherBlocSignataires(): boolean;
        /**
         * Conditions d'affichage du bloc d'opération financières
         */
        estAfficherBlocOperationFinanciere(): boolean;
        /**
         * Annulation de l'opération et sortie de l'application
         */
        annuler(): void;
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere à distance.
     */
    class RegulOperationFinanciereControleur {
        private $scope;
        private modalService;
        private navigationService;
        private serviceAgentExtended;
        private operationFinanciereDepotRetraitService;
        private postOperationFinanciere;
        private communOpeFiRegulService;
        private $q;
        private tarificationFacturePrestationService;
        private impressionBordereauService;
        private carteTempoMultiFonctionsService;
        private $timeout;
        private identifiantBordereauService;
        private popupService;
        private libelleService;
        private entretiencommercialResultatEntretienService;
        private operationFinanciereService;
        static $inject: string[];
        /** Contient les paramètres d'entrée du composant signataires. */
        paramSignataires: myway.comContract.modeles.ISignataireInput;
        signataires: myway.comContract.modeles.ISignataireComplet[];
        /** Message d'erreur signataire. */
        messageErreurSignataire: string;
        /** Contient l'objet Opération financière. */
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        /** Définit le mot d'entrée Depot ou Retrait. */
        modeEntree: string;
        /** Indique si on est en mode retrait. */
        estModeRetrait: boolean;
        /** Indique si on est en mode depot. */
        estModeDepot: boolean;
        /** Indique si on est hors présence du client. */
        estHorsPresenceClient: boolean;
        /** Chargement. */
        chargement: boolean;
        /** Chargement bouton valider. */
        chargementBoutonValider: boolean;
        /** Titre de la page. */
        titrePage: string;
        /** Habilitation Régularisation de l'agent */
        habilitation: boolean;
        /** Liste des erreurs du formulaire */
        listeErreur: Array<MyWay.UI.IErreurFormulaire>;
        champsErreursOpefi: myway.comOpesFinancieres.Model.ChampErreurOperationFinanciere[];
        /** Code fonctionnalité pour le service REST. */
        codeFonctionnalite: string;
        /** Indique si c'est un bordereau MyWay (sans synthèse client) ou non. */
        bordereauMyWay: boolean;
        /** Ouverture par défaut du bloc signataires. */
        ouvertureDefautBlocSignataires: boolean;
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, navigationService: Services.NavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, communOpeFiRegulService: Services.CommunOpeFiRegulService, $q: ng.IQService, tarificationFacturePrestationService: Services.TarificationFacturePrestationService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService, carteTempoMultiFonctionsService: myway.comOpesFinancieres.CarteTMF.CarteTempoMultiFonctionsService, $timeout: ng.ITimeoutService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, popupService: Services.PopupService, libelleService: Services.LibelleService, entretiencommercialResultatEntretienService: myway.comOpesFinancieres.EntretiencommercialResultatEntretienService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService);
        validationRegularisation(): void;
        /**
         * Conditions d'affichage du bloc signataires
         */
        estAfficherBlocSignataires(): boolean;
        /**
         * Conditions d'affichage du bloc d'opération financières
         */
        estAfficherBlocOperationFinanciere(): boolean;
        /**
         * Clic sur le bouton Annuler dans l'IHM
         */
        annuler(): void;
        /**
         * Confirmation de l'opération.
         */
        confirmer(): void;
        private traitementPostOperationFinanciereEtSortieApplication();
        annulationSpinnerChargement(): void;
        private gestionImpressionChequeBanqueFacturationEtSuiteTraitement(operationDepotRetraitRest);
        private suiviCommercialPuisSortieApplication();
        private gestionImpressionBordereauEtSortieApplication(bordereauMyWay);
    }
}

declare module operationRetraitDepot.Controleurs {
    /**
     * Contrôleur pour les operations financiere retrait ou depot.
     */
    class TableauComptesControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private listeCompteService;
        private mwsfDeviseService;
        private navigationService;
        static $inject: string[];
        parametreListeComptes: MyWay.Model.ParametresListeComptes;
        options: MyWay.UI.ImwTableOptions;
        comptes: MyWay.Model.Contrat[];
        static produitsAExclure: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, listeCompteService: myway.comInterdomaine.ListeCompteService, mwsfDeviseService: myway.comInterdomaine.DeviseService, navigationService: operationRetraitDepot.Services.NavigationService);
        onSelectionChange(selectedObject: Object): void;
        valider(): void;
        annuler(): void;
        disableBoutonValider(): boolean;
    }
}

declare module operationRetraitDepot.Modeles {
    class CompteModel {
        idProduit: number;
        idEntiteTitulaire: number;
        designation: string;
        idPersonne: number;
        codeDevise: string;
        compteClos: boolean;
        nom: string;
        prenom: string;
        comptePourOpeFi: MyWay.Model.Compte;
    }
}

declare module operationRetraitDepot.Modeles {
    class ContexteModel {
        /** Designation de la personne. */
        designationPersonne: string;
        /** Identifiant de la personne. */
        identifiantPersonne: string;
        /** RICE du contrat. */
        riceContrat: string;
        /** Identifiant de l'entite titulaire. */
        identifiantEntiteTitulaire: string;
        /** Indique que le context est récupéré. */
        chargementTerminee: boolean;
        /** Date de naissance de la personne */
        dateNaissance: string;
        /** Hors Presence */
        horsPresence: boolean;
        /** Nom usage de la personne */
        nom: string;
        /** Prénom de la personne */
        prenom: string;
        constructor();
    }
}

declare module operationRetraitDepot.Modeles {
    interface IListeEtablissement {
        Etablissement: Array<IEtablissement>;
    }
    interface IEtablissement {
        codeEtablissement: string;
        libelleEtablissement: string;
        sigleEtablissement: string;
    }
    interface ITauxCampagneLivretGP {
        codeEtablissement: string;
        codePrioriteCampagne: string;
        dateDebutApplicationRemu: string;
        dateFinCampagne: string;
        dateDebutCampagne: string;
        intituleCampagne: string;
        montantMiniOperation: number;
        montantPlafondRemu: number;
        dateFinApplicationRemu: string;
        codeTraitement: string;
        identifiantProduitService: number;
        codeGuichet: string;
        numeroCompte: string;
        codeTypeTaux1: string;
        tauxVersementOuverture: number;
        tauxVersementOuvertureMin: number;
        tauxVersementOuvertureMax: number;
        codeTypeTaux2: string;
        tauxVersementComplementaire: number;
        tauxVersementComplementaireMin: number;
        tauxVersementComplementaireMax: number;
    }
    interface IParticipantProduit {
        identifiantTiers: number;
        codeRolePersonne: string;
        nomUsage: string;
        prenom: string;
        raisonSociale: string;
        dateNaissance: string;
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
        detailSoldeDisponible: IDetailSoldeDisponible;
    }
    interface IDetailSoldeDisponible {
        montantDecouvertAutorise: number;
        montantEffetEncaissement: number;
        montantCumuleOperationEcartee: number;
        montantCumuleImpayePret: number;
        soldeMinuteCompte: number;
    }
    interface IInformationContrat {
        codeEtablissement: string;
        identifiantContrat: string;
        numeroRib: string;
        referenceCompteService: string;
        codeEtat: string;
        codeDeviseIsoContrat: string;
        codeProduit: string;
        identifiantEdsDomcContrat: number;
        codeTypeOuverture: string;
        identifiantEntiteTitulaire: number;
        codeTypeFermeture: string;
        dateOuvertureAdmContrat: string;
        dateClotureAdmContrat: string;
        identifiantEdsGestionContrat: number;
        referencePfGestionContrat: number;
        dateDebutEffetContrat: string;
        dateFinEffetContrat: string;
        numeroCompteIban: string;
    }
    interface ICompteNumeraire {
        codeEtablissement: string;
        codeGuichetContrat: string;
        codeProduit: string;
        radicalContrat: string;
        cleCompteContrat: string;
        cleRIBContrat: string;
        ribDuCompte: string;
    }
    interface ICompteRecepteur {
        codeEtablissement: string;
        codeGuichetContrat: string;
        codeProduit: string;
        radicalContrat: string;
        cleCompteContrat: string;
        cleRIBContrat: string;
        ribDuCompte: string;
    }
    interface INumeroContratPivotPEA {
        codeEtablissement: string;
        codeGuichetContrat: string;
        codeProduit: string;
        radicalContrat: string;
        cleCompteContrat: string;
        cleRIBContrat: string;
        ribDuCompte: string;
        referenceProduitService: string;
    }
    interface INumeroContratTitres {
        codeEtablissement: string;
        codeGuichetContrat: string;
        codeProduit: string;
        radicalContrat: string;
        cleCompteContrat: string;
        cleRIBContrat: string;
        ribDuCompte: string;
        referenceProduitService: string;
    }
    interface INumeroContratTitresNanti {
        codeEtablissement: string;
        codeGuichetContrat: string;
        codeProduit: string;
        radicalContrat: string;
        cleCompteContrat: string;
        cleRIBContrat: string;
        ribDuCompte: string;
        referenceProduitService: string;
    }
    interface IPersonne {
        codeCategorieOrdreInhabituel: string;
        montantSeuilOrdreInhabituel: number;
        libelleCategorieOrdreInhabituel: string;
        dateModificationOrdreInhabituel: string;
    }
    interface ICompteNumerairePEA {
        personne: IPersonne;
        contratPivotPEA: IContratPivotPEA;
        contratTitresPEA: IContratTitresPEA;
        codeRetour: number;
        libelleRetour: string;
        indicateurPresenceInfosCompl: string;
        retraitTitresSurPEA: Array<IRetraitTitresSurPEA>;
        retraitNumeraireSurPEA: Array<IRetraitNumeraireSurPEA>;
        informationFraisGestion: IInformationsFraisGestion;
        listeArretes: Array<IArretes>;
        listeRetraitsPS: Array<IDetailRetraitsPS>;
        listeCapitalRetraits: Array<IDetailCapitalRetraitsPS>;
        compteTitresNanti: INumeroContratTitresNanti;
        detailRetraitPEA: IDetailRetraitPEA;
        informationsCloture: IInformationsCloture;
    }
    interface IContratPivotPEA {
        numeroContratPivotPEA: INumeroContratPivotPEA;
        codeEtatBlocagePEA: string;
        dateOuverture: string;
        dateOuvertureFiscale: string;
        dateDerniereMiseAJour: string;
        datePremierRetrait: string;
        montantSoldePivotPEA: number;
        dateCloture: string;
        dateClotureFiscale: string;
        typeCloture: string;
        typeRetrait: string;
        codeMonnaie: string;
        montantTotalRetraits: number;
        cumulVersementsRembourses: number;
        montantPartCapitalRemb: number;
        libelleET: string;
        cumulVersementsPEATitres: number;
        cumulVersementsPEANumeraire: number;
        numeroRetraitAAnnuler: number;
    }
    interface IContratTitresPEA {
        numeroContratTitres: INumeroContratTitres;
        codeEtatCompteTitres: string;
        baremeDroitsDeGarde: number;
        tauxPonderationClient: number;
        typeOuvertureCompte: string;
        numeroCompteExterne: string;
        compteNumeraire: ICompteNumeraire;
        compteRecepteur: ICompteRecepteur;
        libelleEtatCompteGestitres: string;
    }
    interface IRetraitNumeraireSurPEA {
        numeroRICECompteRecepteur: string;
        montantAvoirFiscauxJourRetrait: number;
        montantBrutRetrait: number;
        soldeNumeraireAvantRetrait: number;
        codeEntiteAdministrative: string;
        numeroSequentielRetrait: number;
        codeMonnaie: string;
        codeNatureRetrait: string;
        codeEtatRetrait: string;
        dateDemandeRetrait: string;
        dateExecutionRetrait: string;
        montantPrelevementFiscal: number;
        montantRetraitNet: number;
        montantBaseDeRetraits: number;
        codeMonnaieTenueCompte: string;
    }
    interface IRetraitTitresSurPEA {
        codeValeurSICOVAM: string;
        libelleValeurSICOVAM: string;
        coursValeur: number;
        quantiteTitresRetiree: number;
        quantiteTitresOperation: number;
        ribComptePrelevement: string;
        numeroSequentielRetrait: number;
        montantBrutRetrait: number;
        codeNatureRetrait: string;
        codeEtatRetrait: string;
        dateDemandeRetrait: string;
        dateExecutionRetrait: string;
        codeMonnaie: string;
        numeroRICECompteTitresVirement: string;
        cleRIBCompteTitresVirement: string;
    }
    interface IInformationsFraisGestion {
        dateChargementDDG: string;
        datePrelevementDDG: string;
        fraisDeGestion: IFraisDeGestion;
        informationsBEE: IInformationsBEE;
        fraisDeGestion1: IFraisDeGestion1;
    }
    interface IFraisDeGestion {
        anneeTarifFraisGestion: number;
        montantFraisGestionRecu: number;
        montantFraisGestionApresDegres: number;
        montantFraisGestionModulation: number;
        montantFraisGestionRetrocession: number;
        montantFraisGestionDefinitif: number;
    }
    interface IInformationsBEE {
        topExistenceMontantBEE: string;
        dateChargementCROTarification: string;
        datePrelevementTarification: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteRecepteur: string;
        cleRIBNumeroCompte: string;
        montantTarificationBEE: number;
    }
    interface IArretes {
        dateArreteValorisationPEA: string;
        montantValeurLiquidativePEA: number;
        montantApports: number;
        cumulVersementRembourse: number;
        topMontantVersRembSignificatif: string;
        montantTotalRetraits: number;
        topMontantRetraitSignificatif: string;
    }
    interface IDetailRetraitsPS {
        montantBaseRetraits: number;
        codeValeur: string;
        occurenceValeur: string;
    }
    interface IDetailCapitalRetraitsPS {
        codeValeur: string;
        occurenceValeur: string;
        montantCapitalRetraits: number;
    }
    interface IFraisDeGestion1 {
        anneeTarifFraisGestion: number;
        montantFraisGestionRecu: number;
        montantFraisGestionApresDegres: number;
        montantFraisGestionModulation: number;
        montantFraisGestionRetrocession: number;
        montantFraisGestionDefinitif: number;
    }
    interface IInformationsCloture {
        valeurLiquidativePEA: number;
        libelleModeReglementCloture: string;
        codeModeFinancier: string;
        montantSoldePivotPEA: number;
        valorisationPEANumeraire: number;
        montantTotalPrelevements: number;
        libelleMotifCloturePEA: string;
        topRetraitPartielPEA: string;
        codeMotifCloture: string;
        dateDemandeCloture: string;
        modaliteCloture: string;
        numeroCompteVersement: string;
        numeroCompteTitresVirement: string;
        listeValeursLiquidatives: Array<IValeursLiquidativesCloture>;
        listePrelevementsSociaux: Array<IPrelevementsSociauxCloture>;
        listeApportsPEA: Array<IApportPEACloture>;
    }
    interface IPrelevementsSociauxCloture {
        tauxPrelevementObligatoire: number;
        montantBrutAssiette: number;
        montantPrelevementFiscal: number;
        libelleLongPrelevementSocial: string;
        libelleCourtPrelevementSocial: string;
        libelleExplicatif: string;
    }
    interface IDetailRetraitPEA {
        dateExecutionRetrait: string;
        montantTotalPrelevements: number;
        montantBrutRetrait: number;
        montantNetRetrait: number;
        cumulVersementsRembourses: number;
        montantRetraits2005: number;
        montantValeurLiquidativeRetrait: number;
        cumulVersementsPEANumeraire: number;
        cumulVersementsPEATitres: number;
        listeApportsPEA: Array<IApportPEARetraits>;
        listePrelevementsSociaux: Array<IPrelevementsSociauxRetrait>;
        listeValeursLiquidatives: Array<IValeursLiquidativesRetrait>;
        lignesDetailDuRetrait: Array<ILigneDetailRetraitPEA>;
    }
    interface ILigneDetailRetraitPEA {
        ligneDuDetailRetraitPEA: string;
    }
    interface IApportPEACloture {
        dateArreteValorisationPEA: string;
        cumulVersementsPEA: number;
    }
    interface IApportPEARetraits {
        dateArreteValorisationPEA: string;
        cumulVersementsPEA: number;
    }
    interface IPrelevementsSociauxRetrait {
        codeParametreFiscal: number;
        occurenceValeur: string;
        tauxPrelevementObligatoire: number;
        montantBrutAssiette: number;
        montantPrelevementFiscal: number;
        libelleExplicatifLigne1: string;
        libelleExplicatifLigne2: string;
        libelleExplicatifLigne3: string;
    }
    interface IValeursLiquidativesCloture {
        valeurLiquidativePEA: number;
        dateArreteValorisationPEA: string;
    }
    interface IValeursLiquidativesRetrait {
        valeurLiquidativePEA: number;
        dateArreteValorisationPEA: string;
    }
}

declare module operationRetraitDepot.Modeles {
    interface IOperationJab {
        listeOperationFinanciere: Array<ICaracteristiqueOperationFinanciere>;
        listeBilleterie: Array<ICaracteristiqueBilleterie>;
    }
    interface ICaracteristiqueOperationFinanciere {
        dateOperation: string;
        codeAnnulationOperation: string;
        codeEtablissement: string;
        numeroCompte: string;
        libelleModeFinancier: string;
        codeSensImputation: string;
        numeroPersonne: number;
        codeDevise: string;
        heureOperation: number;
        numeroCompteRecepteur: string;
        numeroCheque: string;
        numeroSacDepotInitial: string;
        identifiantBordereauJab: string;
        dateValeurOperation: string;
        montantGlobalOperation: number;
        posteFonctionnelCreation: string;
        modeFinancier: string;
        guichetCompte: string;
        identifiantAgentOperation: number;
        etablissementCompteRecepteur: string;
        guichetCompteRecepteur: string;
        etablissementCompte: string;
        nomUsageClient: string;
        libelleOperation: string;
        montantDeviseTenueCompte: number;
        montantDeviseOperation: number;
        typeSignatureBordereau: string;
        indicateurBilletterie: boolean;
        designationAgentOperation: string;
        prenomClient: string;
        horodatageCreationOperation: string;
        codeApparitionFamille: string;
        codeFamilleOD: string;
        codeOperationDiverse: string;
        libelleOperationDiverse: string;
        premierLibelleComplemOD: string;
        deuxiemeLibellComplemOD: string;
        codeProduitServiceOD: string;
        codeMoyenPaiement: string;
        typeMoyenPaiement: string;
        numeroMoyenPaiement: string;
        nomBeneficiaireCheque: string;
        typeCheque: string;
        nombreJourReserveEncaiss: number;
        indicateurDerniereContrepartie: string;
        indicateurGABOperationnel: string;
        dateConstatEcartInitial: string;
        codeNatureErreurEspece: string;
        libelleNatureErreurEspece: string;
        codeChoixBilletMonnaie: string;
        codeConvoyeurFond: string;
        libelleConvoyeurFond: string;
        numeroReferenceComptable: number;
        codeNatureTransfertFond: string;
        numeroBordereauTransfert: string;
        numeroBadgeForcage: string;
        codeEvenementFinancier: string;
        typeTarification: string;
        codeInternePrestation: number;
        nombreAnneeProrogation: number;
        codeTypeTraitement: string;
        indicateurValidationMessageInfo: boolean;
        montantTVAOperation: number;
        tauxApplicationNegocie: number;
        timestampOperationInitiale: string;
        nomDonneurOrdre: string;
        codeSegmentQR: string;
        codeFonctionnaliteOperation: string;
        identificationRequete: string;
        identifiantContrat: string;
        codeOperationExtournable: string;
        identifiantGuichetOperant: number;
        referenceGuichetOperant: number;
        typeGuichetOperant: string;
        identifiantAgence: number;
        referenceAgence: number;
        typeAgence: string;
        identifiantEDSEmetteurFond: number;
        typeEDSEmetteurFond: string;
        referenceEDSEmetteurFond: number;
        identifiantEDSRattEmetteurFond: number;
        referenceEDSRattEmetteurFond: number;
        typeEDSRattEmetteurFond: string;
        identifiantEDSRecepteurFond: number;
        referenceEDSRecepteurFond: number;
        typeEDSRecepteurFond: string;
        identifiantEDSRattRecepteurFond: number;
        referenceEDSRattRecepteurFond: number;
        typeEDSRattRecepteurFond: string;
        /** devise */
        devise: MyWay.Model.Devise;
        codeEtLibelleModeFinancier: string;
        sensOperation: string;
        rice: string;
        referenceOAD: string;
        identifiantRIOOperation: string;
    }
    interface ICaracteristiqueBilleterie {
        codeValeurFaciale: string;
        codeDeviseBilleterie: string;
        nombreBillet: number;
        montantMonnaie: number;
        montantBilletterie: number;
        typeOperationBilletterie: string;
    }
    interface ICaracteristiqueOperationFinancierTableau {
        libelleModeFinancier: string;
        montantDeviseTenueCompte: number;
        identifiantAgentOperation: number;
        etablissementCompte: string;
        horodatageCreationOperation: string;
    }
    interface IModeFinancier {
        mode: string;
        code: string;
        libelle: string;
    }
    class ParamServiceGetOperation {
        codeEtablissement: string;
        referenceExterneAgence: number;
        dateOperation: string;
        constructor();
        constructor(codeEtablissement: string, referenceExterneAgence: number, dateOperation: string);
    }
    class ParamEntreeConsultationJab {
        codeEtablissement: string;
        referenceExterneAgence: number;
        dateOperation: Date;
        constructor();
        constructor(codeEtablissement: string, referenceExterneAgence: number, dateOperation: Date);
    }
}

declare module operationRetraitDepot.Modeles {
    class PersonnePhysique {
        dateNaissance: string;
        designationCourte: string;
        identifiantPersonne: number;
        libelleCivilite: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
    }
    class PersonneMorale {
        nomCommercial: string;
        dateCreationJuridique: string;
        identifiantTiers: number;
    }
}

declare module operationRetraitDepot.Modeles.Virement {
    interface IVirementInterne {
        operationDebit?: IOperation;
        listeOperationCredit?: Array<IOperation>;
        deviseOperation: string;
        codeEtablissement: string;
        dateValeurOperation: string;
        indicateurForcageOperation: boolean;
        codeModeFinancier: string;
        montantTotalOperation: number;
        listeCodeForcage?: Array<ICodeForcage>;
        indicateurVirSansContrepartie?: boolean;
        codeSensVirSansContrePartie?: string;
        operationSansContrePartie?: IOperation;
        libelleModeFinancier?: string;
        identifiantPersonne?: number;
        nomUsagePersonne?: string;
        prenomPersonne?: string;
        identifiantBordereauJab?: string;
        codeFonctionnaliteOrigineOpe?: string;
        codeIndicateurAnnulation?: string;
        detailOperationExtourne: IDetailOperationExtourne;
        detailInformationSepa: IDetailInformationSepa;
        listeMessageInformationValidation?: Array<string>;
        topValidationMessageInformation?: string;
    }
    interface IOperation {
        referenceProduitService: string;
        codeTypeProduitService: string;
        montantOperation: number;
        libelleReleveCompte1: string;
        libelleReleveCompte2: string;
        /**
         * code guichet du compte concerné
         */
        codeGuichetCompte?: string;
    }
    interface ICodeForcage {
        codeRetour: number;
        libelleForcage: string;
        codeEtablissementCompteForcage: string;
        codeGuichetCompteForcage: string;
        referenceProduitCompteForcage: string;
    }
    interface IDetailOperationExtourne {
        codeEtablissementOpOrigine: string;
        identifiantAgentOpOrigine: number;
        timeStampOpOrigine: string;
    }
    interface IDetailInformationSepa {
        referenceDonneurDOrdre?: string;
        identifiantDonneurDOrdre?: string;
        adresseDonneurDOrdre?: IAdresse;
        identifiantBeneficiaire?: string;
        designationBeneficiaire?: string;
        adresseBeneficiaire?: IAdresse;
        libelle1VirementInterne?: string;
        libelle2VirementInterne?: string;
        libelle3VirementInterne?: string;
        libelle4VirementInterne?: string;
        ribCompteCredite?: string;
        ribCompteDebite?: string;
        designationDonneurDOrdre?: string;
        identifiantRIOOperation?: string;
        identifiantEDSCreation?: number;
    }
    interface IAdresse {
        premiereLigneAdresse: string;
        deuxiemeLigneAdresse: string;
        troisiemeLigneAdresse: string;
        quatriemeLigneAdresse: string;
        indicatifPays: string;
    }
}

declare module operationRetraitDepot.Services {
    interface IOadRegul {
        chargement: boolean;
        modeEntree: string;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        paramSignataires: myway.comContract.modeles.ISignataireInput;
        focus1erChamp: boolean;
        estInterne: boolean;
        estRetrait: boolean;
    }
    /**
     * Service d'appel aux WS recapitulatifOperationsService
     */
    class CommunOADRegulService {
        private $routeParams;
        private modalService;
        private navigationService;
        private serviceAgentExtended;
        private operationFinanciereDepotRetraitService;
        private entiteTitulaireServiceService;
        private structureEtablissementMysysService;
        private $q;
        private communOpeFiRegulService;
        private riceService;
        private mwsfDeviseService;
        static $inject: string[];
        constructor($routeParams: ng.route.IRouteParamsService, modalService: MyWay.UI.IModalService, navigationService: Services.NavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, entiteTitulaireServiceService: Services.EntiteTitulaireServiceService, structureEtablissementMysysService: Services.StructureEtablissementMysysService, $q: ng.IQService, communOpeFiRegulService: Services.CommunOpeFiRegulService, riceService: Services.RiceService, mwsfDeviseService: myway.comInterdomaine.DeviseService);
        /**
         * Factorisation pour les extournes d'OAD
         */
        factorisationExtourneOAD(operationFinanciereExtourne?: myway.comOpesFinancieres.Model.OperationFinanciere, codeFonctionnalite?: string): ng.IPromise<IOadRegul>;
        /**
         * Factorisation pour les OAD et regul OAD
         * @param estRegulationOperation Indique si c'est une régulation
         */
        factorisationOad(estRegulationOperation?: boolean): ng.IPromise<IOadRegul>;
        /**
         * Parametres signataires pour une OAD
         * @param rice RICE
         * @param estModeRetrait boolean
         * @param parametrageOpefi enum parametrage opefi
         */
        private paramSignatairesOAD(rice, estModeRetrait, parametrageOpefi, identifiantProduitService, numeroPersonne?);
        /**
         * Indique si c'est une OAD Interne par son code etablissement
         * @param codeEtablissement Code etablissement
         */
        private isOADInterne(codeEtablissement);
        /**
         * Modale d'erreur d'un compte non valable
         * @param monObjet
         */
        modaleErreurCompteNonValable(monObjet: IOadRegul): ng.IPromise<IOadRegul>;
    }
}

declare module operationRetraitDepot.Services {
    interface IOperationFinanciereRegul {
        chargement: boolean;
        modeEntree: string;
        estHorsPresenceClient: boolean;
        estRetrait: boolean;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        paramSignataires: myway.comContract.modeles.ISignataireInput;
    }
    /**
     * Service d'appel aux WS recapitulatifOperationsService
     */
    class CommunOpeFiRegulService {
        private $routeParams;
        private modalService;
        private navigationService;
        private serviceAgentExtended;
        private operationFinanciereDepotRetraitService;
        private entiteTitulaireServiceService;
        private $q;
        private riceService;
        private mwsfDeviseService;
        static $inject: string[];
        /**
         * Constructeur
         * @param serviceAgentExtended {ServiceAgentExtended}
         */
        constructor($routeParams: ng.route.IRouteParamsService, modalService: MyWay.UI.IModalService, navigationService: Services.NavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereDepotRetraitService: Services.OperationFinanciereDepotRetraitService, entiteTitulaireServiceService: Services.EntiteTitulaireServiceService, $q: ng.IQService, riceService: Services.RiceService, mwsfDeviseService: myway.comInterdomaine.DeviseService);
        /**
         * Transcription Opération financière pour l'extourne
         * @param operationFinanciereExtourne Opération Financière en extourne
         * @param codeFonctionnalite Code fonctionnalite
         */
        transcriptionOpeFiExtourne(operationFinanciereExtourne?: myway.comOpesFinancieres.Model.OperationFinanciere, codeFonctionnalite?: string): ng.IPromise<IOperationFinanciereRegul>;
        /**
         * Factorisation pour les opérations et régulations
         * @param estRegulationOperation Indique si c'est une régulation
         */
        transcriptionOpeFi(habilitationDepot: boolean, habilitationRetrait: boolean, estRegulationOperation?: boolean): ng.IPromise<IOperationFinanciereRegul>;
        private getInfoCompte(monObjet, compte, codeDevise, rice);
        private getInfoCompteExtourne(monObjet, compte, codeDevise);
        /**
         * Parametres signataires avec entite titulaire dans le context
         * @param identifiantEntiteTitulaire
         * @param rice
         * @param identifiantPersonne
         */
        private paramSignatairesAvecEntiteTitulaireContext(identifiantEntiteTitulaire, rice, estRetrait, identifiantProduitService, identifiantPersonne?);
        /**
         * Parametres signataires sans entite titulaire dans le context
         * @param listePersonnes Liste des personnes
         */
        private paramSignatairesSansEntiteTitulaireContext(listePersonnes, estRetrait, identifiantProduitService?, codeProduit?, identifiantPersonne?);
        /**
         * Ajoute les informations personne dans le contexte
         */
        addInfosPersonneToContext(compteModel: operationRetraitDepot.Modeles.CompteModel): ng.IPromise<void>;
    }
}

/**
 * Ressource : /contratccie/v1/informationCci
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/contratccie/informationCci
 * Fichier généré le : 2018-02-13
 */
declare module operationRetraitDepot.Services {
    interface IInformationCci {
        caracteristiqueCci?: ICaracteristiqueCci;
        soldeCci?: ISoldeCci;
        personneMorale?: IPersonneMorale;
        listePersonnePhysique?: Array<IPersonnePhysique>;
        creReduit?: ICreReduit;
        caracteristiqueET?: ICaracteristiqueET;
    }
    interface IRice {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement?: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet?: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... détenu par un client d'un Etablissement du GCE.
         */
        referenceProduitService?: string;
    }
    interface ICaracteristiqueCci {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement?: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet?: string;
        /**
         * Détermine la nature du compte CCI. Permet de distinguer les activités des départements / directions des Etablissements du GCE
         * Exemple :
         * 'A01'      RH-paie
         */
        codeNatureCompte?: string;
        /**
         * Premier intitulé du compte courant interne
         */
        libelle1Compte?: string;
        /**
         * Deuxième intitulé du compte courant interne
         */
        libelle2Compte?: string;
        /**
         * Code permettant de savoir dans quelle monnaie sont indiqués les montants des opérations du compte CCE.
         */
        codeMonnaieFonctionnement?: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire
         * Une ET se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire?: number;
        /**
         * Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
         * Système d'Identification du Répertoire des Entreprises
         * Identifie de manière unique une entreprise au niveau national
         */
        numeroSirenProfessionel?: string;
        /**
         * Numéro d'identification de la personne
         */
        identifiantPersonne?: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         */
        numeroOffreSouscrite?: number;
        /**
         * Numéro d'identification d'un produit ou service
         */
        identifiantProduitService?: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         */
        identifiantElementStructure?: number;
        rice?: IRice;
        /**
         * Ce code état permet de savoir si le compte courant interne est ouvert ou clos
         * '0'        Ouvert
         * '3'        Clos
         */
        codeEtatCci?: string;
        /**
         * Libellé court de la nature de compte correspondant à un code nature.
         */
        libelleCourtNature?: string;
        /**
         * Libellé long de la nature de compte correspondant à un code nature.
         */
        libelleLongNature?: string;
        /**
         * Date d'ouverture d'un contrat de compte
         */
        dateOuverture?: string;
        /**
         * Date de clôture d'un contrat de compte
         */
        dateCloture?: string;
        /**
         * Détermine la devise utilisée pour la gestion du compte
         */
        codeDeviseTenueCompte?: string;
        /**
         * Position en capital du compte établie à un instant donné
         * Situation comptabilisant les opérations imputées en date d'opération
         */
        soldeComptable?: number;
        /**
         * Montant du solde disponible d'un compte à un instant donné
         * Montant en devise de tenue de compte
         * Solde dispo = Solde comptable
         *             + Découvert autorisé
         *             - Opérations écartées (MAD)
         *             - Impayés crédits
         *             - Réserves d'encaissement
         */
        soldeDisponible?: number;
        /**
         * Détermine la date d'exécution de la dernière opération financière constatée sur un contrat à la date de situation/arrêté
         */
        dateDerniereOperation?: string;
        /**
         * Montant de la dernière opération enregistrée sur un compte donné dans la journée
         */
        montantDerniereOperation?: number;
        /**
         * Détermine le type de la dernière opération passée sur un compte
         */
        codeTypeDerniereOperation?: string;
        /**
         * Devise d'expression d'un montant de mouvement / opération
         */
        codeDeviseMontant?: string;
    }
    interface ISoldeCci {
        rice?: IRice;
        /**
         * Code devise expression montants
         */
        codeDeviseMontant?: string;
        /**
         * Solde courant du compte en Euro
         * Ce solde évolue à chaque opération enregistrée
         */
        soldeCompteEuro?: number;
        /**
         * Montant du solde disponible d'un compte à un instant donné. Exprimé en Euro
         */
        soldeDisponibleEuro?: number;
        /**
         * Cumul des réserves d'encaissement en Euro
         */
        cumulReserveEncaissementEuro?: number;
        /**
         * Cumul des opérations écartées en Euro
         */
        cumulOperationEcarteEuro?: number;
        /**
         * Solde courant du compte en Euro
         * Ce solde évolue à chaque opération enregistrée
         */
        soldeCompte1Euro?: number;
        /**
         * Code devise du compte
         */
        codeDeviseCompte?: string;
        /**
         * Solde courant du compte dans la devise du compte
         * Ce solde évolue à chaque opération enregistrée
         */
        soldeCompteDevise?: number;
        /**
         * Montant du solde disponible d'un compte à un instant donné. Exprimé dans la devise du compte
         */
        soldeDisponibleDevise?: number;
        /**
         * Cumul des réserves d'encaissement dans la devise du compte
         */
        cumulReserveEncaissementDevise?: number;
        /**
         * Cumul des opérations écartées dans la devise du compte
         */
        cumulOperationEcarteDevise?: number;
        /**
         * Solde courant du compte dans la devise du compte
         * Ce solde évolue à chaque opération enregistrée
         */
        soldeCompte1Devise?: number;
    }
    interface IAdresse {
        /**
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identifiaction du destinataire : N° APP ou BAL-ETAGE-COULOIR-ESCALIER
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc ...
         */
        ligne2Adresse?: string;
        /**
         * La ligne 3 permet d'indiquer le point de remise  (informations complémentaires de distribution) :
         * ENTREE-BATIMENT-IMMEUBLE-RESIDENCE
         * La ligne 3 correspond à tout ce qui est à l'extérieur du batiment : entrée, batiment, bloc, tour etc ...
         */
        ligne3Adresse?: string;
        /**
         * La ligne 4 permet d'identifier la voie de destination NUMERO-LIBELLE DE LA VOIE
         * Peut comprendre :
         * - Le numéro dans la voie, type et nom de voie
         * - Le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un  lieu-dit
         * - Un service X
         * - Une boîte postale
         * - Un numéro de CEDEX
         */
        ligne4Adresse?: string;
        /**
         * La ligne 5 permet d'identifier la destination :
         * LIEU DIT ou SERVICE PARTICULIER DE DISTRIBUTION
         * Peut comprendre :
         * - Nom d'un quartier, d'un lieu dit, d'un hameau
         * - Nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu dit et possédant plusieurs voies internes.
         */
        ligne5Adresse?: string;
        /**
         * La ligne 6 permet d'identifier la destination :
         * CODE POSTAL et LOCALITE DE DESTINATION ou CODE CEDEX et LIBELLE CEDEX
         * Peut comprendre :
         * - Le numéro de code postal et nom de la localité
         * - Le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6Adresse?: string;
        /**
         * Numéro de téléphone associé à une adresse
         */
        numeroTelephoneAdresse?: string;
    }
    interface IPersonneMorale {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement?: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire
         * Une ET se compose d'une ou plusieurs perso
         */
        numeroEntiteTitulaire?: number;
        /**
         * Numéro d'identification de la personne
         */
        identifiantPersonne?: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * '0'        non responsable
         * '1'        responsable
         */
        indicateurResponsableEntite?: string;
        /**
         * Il s'agit du rang état civil tel qu'il a été défini au niveau de R1ET (fichier état civil)
         * 'A'        titulaire
         * 'B'        cotitulaire
         * '1'        mandataire de rang 1
         * '2'        mandataire de rang 2
         * '3'        mandataire de rang 3
         * '4'        mandataire de rang 4
         * '5'        mandataire de rang 5
         */
        rangAncienEtatCivil?: string;
        /**
         * Il existe principalement deux types de personnalité :
         * - PJ physique : concerne les individus
         * - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations ...)
         * '1'        Personne physique
         * '2'        Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique?: string;
        /**
         * Désignation de la personne morale.
         * Identique à celle de l'INSEE ou du Registre du Commerce et des Sociétés (RCS).
         */
        raisonSociale?: string;
        /**
         * Date d'effet de la création juridique de la personne morale
         */
        dateCreationJuridique?: string;
        adresse?: IAdresse;
        /**
         * Code postal
         */
        codePostal?: string;
        /**
         * Identifie un pays ou territoire selon la norme INSEE
         * 99000      France
         * 99132      Grande Bretagne
         * 99109      Allemagne
         * 99134      Espagne
         */
        codePaysInsee?: string;
        /**
         * Identifie un pays selon la nomenclature AFNOR conforme à l'ISO 3166-1988 alpha-2
         */
        codePaysIso?: string;
        /**
         * Identifie une segmentation de clientèle selon BAFI
         * Format : FSS
         * - F  : Code famille segmentation BAFI
         * - SS : Sous code segmentation BAFI
         * Exemples :
         * '107'      SOCIETES FINANCIERES
         * '302'      ENTREPRENEURS INDIVIDUELS
         * '303'      PARTICULIERS
         */
        codeAgentEconomique?: string;
        /**
         * Classification des catégories juridiques des personnes
         * 11         artisan - commerçant
         * 12         commerçant
         * 13         artisan
         * 14         officier public ou ministériel
         * 15         profession libéral
         * 16         Exploitant agricole
         * 19         autre personne physique
         */
        codeFamilleCategorieJuridique?: string;
        /**
         * Désignation de forme réduite de la personne morale
         */
        sigle?: string;
        /**
         * Libellé libre du lieu d'activité du Professionnel
         */
        designationLieuActivite?: string;
        /**
         * Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
         * Système d'Identification du Répertoire des Entreprises
         * Identifie de manière unique une entreprise au niveau national
         */
        numeroSiren?: string;
        /**
         * Numéro interne de classement attribué à un  établissement appartenant à une entreprise par l'INSEE
         * Identifie un établissement au sein d'une entreprise répertoriée à l'INSEE.
         */
        numeroComplementSiret?: string;
        /**
         * Détermine le statut de résidence principale de la personne
         * '1'        Résident en métropole
         * '4'        Résident dans les Départements d'Outre Mer
         * '5'        Résident dans les Territoires d'Outre Mer
         * '2'        Résident C.E.E. hors métropole et DOM/TOM
         * '3'        Résident O.C.D.E. hors C.E.E.
         * '6'        Résident F.M.I. Hors O.C.D.E.
         * '7'        Résident hors F.M.I.
         */
        codeResident?: string;
        /**
         * famille de code activité exercée par le professionnel
         * '01'       agriculture
         * '03'       pêche
         * '16'       industrie du verre
         */
        codeFamilleAPE?: string;
        /**
         * Définit les deux derniers caractères du code APE
         */
        dernierCaractereAPE?: string;
        /**
         * '0'        Hors réseau
         * '1'        Agent de l'établissement
         * '2'        Enfant du personnel de l'établissement
         * '3'        Membre du COS de l'établissement
         * '4'        Conjoint du personnel de l'établissement
         * '5'        Divers (personnel réseau autre établissement)
         * '6'        Personne morale de l'établissement
         * '7'        Trésor Public
         * '8'        Retraité de l'établissement
         * '9'        Société locale d'Epargne (SLE)
         * Valeurs pour Assurances :
         * '0' : non
         * '1' : oui
         * '2' : conjoint du personnel réseau
         * '3' : enfant du personnel réseau
         * '4' : membre du COS
         * '5' : Divers (personnel réseau autre établissement)
         * '6' Personne morale de l'établissement
         * '7' Trésor Public
         */
        codeAppartenanceReseau?: string;
        /**
         * Dénomination commerciale se rapportant à un fonds de commerce exploité par une société ou assimilée
         * Dénomination vis à vis de la clientèle.
         */
        nomCommercial?: string;
        /**
         * Détermine les modalités de dénomination des personnes
         * '11'       code civilité + nom patronymique + prénom
         * '12'       code civilité + nom marital + prénom
         * '13'       code civilité + nom patronymique-nom marital+prénom
         * '14'       code civilité + nom marital-nom patronymique+prénom
         * '21'       cd civ except + nom patronymique + prénom
         * 22'       cd civ except + nom marital + prénom
         * '23'       cd civ except + nom patronymique-nom marital+prénom
         * '24'       cd civ except + nom marital-nom patronymique+prénom
         * '51'       raison sociale
         * '52'       raison sociale + forme juridique
         * '53'       sigle
         * '54'       nom commercial
         * '99'       forçage
         */
        typeDesignationPersonne?: string;
        /**
         * Détermine le statut dans une catégorie juridique donnée
         * Correspond à la typologie de niveau 3 de l'INSEE
         * Correspond aux 2 derniers caractères du code catégorie juridique
         */
        codeCategorieJuridique?: string;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire
         */
        rangPersonne?: string;
        /**
         * Détermine le pays selon la norme OMCR
         * Permet de déterminer le pays de l'adresse courrier titulaire du compte.
         * Exemples :
         * '004' ALLEMAGNE
         * '019' BELGIQUE
         * '000' FRANCE
         */
        codePaysOMCR?: string;
        /**
         * Permet de connaître à quel titre une personne (particulier personne physique ou une personne morale) est en relation avec une autre personne
         * '100'      Tuteur
         * '102'      Curateur
         * '103'      Administrateur légal
         * '104'      Administrateur des biens
         * '105'      Gérant de tutelle
         * '106'      Parent : représentant légal
         */
        codeTypeLienInterPersonne?: string;
        /**
         * Classification en familles des types de liens inter-personnes.
         * 'RPP'      Représentant légal de personne physique
         * 'RPM'      Représentant légal de personne morale
         * 'FA '      Famille
         * 'ME '      Ménage
         * 'GR '      Groupe
         * 'FO '      Fonction
         */
        codeFamilleLien?: string;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         */
        identifiantClientBAD?: string;
    }
    interface IPersonnePhysique {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement?: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire
         * Une ET se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire?: number;
        /**
         * Numéro d'identification de la personne
         */
        identifiantPersonne?: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * '0'        non responsable
         * '1'        responsable
         */
        indicateurPersonneResponsable?: string;
        /**
         * Il s'agit du rang état civil tel qu'il a été défini au niveau de R1ET (fichier état civil)
         * 'A'        titulaire
         * 'B'        cotitulaire
         * '1'        mandataire de rang 1
         * '2'        mandataire de rang 2
         * '3'        mandataire de rang 3
         * '4'        mandataire de rang 4
         * '5'        mandataire de rang 5
         */
        rangAncienEtatCivil?: string;
        /**
         * Il existe principalement deux types de personnalité :
         * - PJ physique : concerne les individus
         * - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations ...)
         * '1'        Personne physique
         * '2'        Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique?: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         * - soit au nom du père
         * - soit au nom de la mère
         * - soit aux 2 noms accolés
         */
        nomFamille?: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         * - soit au nom de famille de l'époux(se) (conjoint)
         * - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque
         */
        nomUsage?: string;
        /**
         * Premier prénom de l'état civil de la personne physique
         * Nom joint au patronyme qui distingue les personnes d'un même groupe familial entre elles
         */
        premierPrenom?: string;
        /**
         * Date de naissance
         */
        dateNaissance?: string;
        /**
         * Désignation officielle d'une localité selonle code officiel de l'INSEE
         */
        nomLocalite?: string;
        /**
         * Libellé de désignation de la nationalité du pays
         */
        libelleNationalite?: string;
        /**
         * Code qui permet de respecter la dénomination de la personne suivant sa situation de famille
         * '1'        MME
         * '2'        MLLE
         * '3'        M
         */
        codeCivilite?: string;
        /**
         * ' '        Non renseigné
         * '1'        Célibataire
         * '2'        Marié
         * '3'        Concubin
         * '4'        Séparé (suite à jugement)
         * '5'        Veuf
         * '6'        Divorcé
         * '7'        Instance de divorce
         * '8'        PACS
         */
        codeTypeSituationFamille?: string;
        /**
         * Référence libre de la pièce justificative qui a servi lors de la gestion administrative de la personne.
         * ex: carte d'identité 678 888 10/01/85
         */
        referencePieceJustificative?: string;
        /**
         * Identifie une commune / lieu-dit selon la nomenclature INSEE
         */
        codeInseeLocalite?: string;
        /**
         * Détermine le statut de résidence principale de la personne
         * '1'        Résident en métropole
         * '4'        Résident dans les Départements d'Outre Mer
         * '5'        Résident dans les Territoires d'Outre Mer
         * '2'        Résident C.E.E. hors métropole et DOM/TOM
         * '3'        Résident O.C.D.E. hors C.E.E.
         * '6'        Résident F.M.I. Hors O.C.D.E.
         * '7'        Résident hors F.M.I.
         */
        codeResident?: string;
        /**
         * Numéro de téléphone où l'on peut joindre le particulier pendant ses heures de travail.
         */
        numeroTelephoneTravail?: string;
        /**
         * Classification en familles des types de liens inter-personnes.
         * 'RPP'      Représentant légal de personne physique
         * 'RPM'      Représentant légal de personne morale
         * 'FA '      Famille
         * 'ME '      Ménage
         * 'GR '      Groupe
         * 'FO '      Fonction
         */
        codeFamilleLien?: string;
        /**
         * Permet de connaître à quel titre une personne (particulier personne physique ou une personne morale) est en relation avec une autre personne
         * '100'      Tuteur
         * '102'      Curateur
         * '103'      Administrateur légal
         * '104'      Administrateur des biens
         * '105'      Gérant de tutelle
         * '106'      Parent : représentant légal
         */
        codeTypeLienInterPersonne?: string;
        /**
         * '0'        Hors réseau
         * '1'        Agent de l'établissement
         * '2'        Enfant du personnel de l'établissement
         * '3'        Membre du COS de l'établissement
         * '4'        Conjoint du personnel de l'établissement
         * '5'        Divers (personnel réseau autre établissement)
         * '6'        Personne morale de l'établissement
         * '7'        Trésor Public
         * '8'        Retraité de l'établissement
         * '9'        Société locale d'Epargne (SLE)
         * Valeurs pour Assurances :
         * '0' : non
         * '1' : oui
         * '2' : conjoint du personnel réseau
         * '3' : enfant du personnel réseau
         * '4' : membre du COS
         * '5' : Divers (personnel réseau autre établissement)
         * '6' Personne morale de l'établissement
         * '7' Trésor Public
         */
        codeAppartenanceReseau?: string;
        /**
         * Identifie un pays ou territoire selon la norme INSEE
         * 99000      France
         * 99132      Grande Bretagne
         * 99109      Allemagne
         * 99134      Espagne
         */
        codePaysInsee?: string;
        /**
         * Identifie un pays selon la nomenclature AFNOR conforme à l'ISO 3166-1988 alpha-2
         */
        codePaysIso?: string;
        /**
         * Code postal
         */
        codePostal?: string;
        /**
         * Détermine le sexe de la personne physique
         * 'M'        Masculin
         * 'F'        Féminin
         * '9'        Personne Anonyme
         */
        codeSexe?: string;
        /**
         * Identifie une segmentation de clientèle selon BAFI
         * Format : FSS
         * - F  : Code famille segmentation BAFI
         * - SS : Sous code segmentation BAFI
         * Exemples :
         * '107'      SOCIETES FINANCIERES
         * '302'      ENTREPRENEURS INDIVIDUELS
         * '303'      PARTICULIERS
         */
        codeAgentEconomique?: string;
        /**
         * Nom de l'employeur principal qui peut être :
         * - une personne morale (raison sociale)
         * - une personne physique / entrepreneur individuel (nom patronymique)
         * - une personne physique / particulier (nom patronymique)
         */
        nomEmployeur?: string;
        /**
         * Date d'embauche d'une personne physique par l'employeur actuel
         */
        dateEmbauche?: string;
        /**
         * Identifie un pays ou territoire selon la norme INSEE.
         */
        codePaysNaissance?: string;
        /**
         * Détermine la catégorie socio-professionnelle d'un individu selon l'INSEE.
         */
        codeCategorieSocioPro?: string;
        /**
         * Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
         * Système d'Identification du Répertoire des ENtreprises
         */
        numeroSiren?: string;
        /**
         * Numéro interne de classement attribué à un  établissement appartenant à une entreprise par l'INSEE
         * Identifie un établissement au sein d'une entreprise répertoriée à l'INSEE.
         */
        numeroComplementSiret?: string;
        /**
         * Classification des catégories juridiques des personnes
         * 11         artisan - commerçant
         * 12         commerçant
         * 13         artisan
         * 14         officier public ou ministériel
         * 15         profession libéral
         * 16         Exploitant agricole
         * 19         autre personne physique
         */
        codeFamilleCategorieJuridique?: string;
        /**
         * famille de code activité exercée par le professionnel
         * '01'       agriculture
         * '03'       pêche
         * '16'       industrie du verre
         */
        codeFamilleAPE?: string;
        /**
         * Définit les deux derniers caractères du code APE
         */
        dernierCaractereAPE?: string;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire
         */
        rangPersonne?: string;
        /**
         * Détermine le pays selon la norme OMCR
         * Permet de déterminer le pays de l'adresse courrier titulaire du compte.
         * Exemples :
         * '004' ALLEMAGNE
         * '019' BELGIQUE
         * '000' FRANCE
         */
        codePaysOMCR?: string;
        /**
         * Indique les valeurs de codification des pays selon une codification propre aux Titres
         * '004' ALLEMAGNE
         * '019' BELGIQUE
         * '001' FRANCE
         */
        codePaysTitre?: string;
        /**
         * Identifie un pays ou un territoire selon la nomenclature ISO 3166-1 sur 2 caractères
         * 'FR'       France
         * 'DE'       Allemagne
         * 'ES'       Espagne
         * 'JP'       Japon
         * 'US'       Etats-Unis
         */
        codepaysIso1?: string;
        /**
         * Indique les valeurs de codification des pays selon une codification propre aux Titres
         * '004' ALLEMAGNE
         * '019' BELGIQUE
         * '001' FRANCE
         */
        codePaysIso2?: string;
        /**
         * Identifie une personne auprès des services fiscaux ou d'un registre public.
         * n° d'immatriculation dans le registre public local ou
         * numéro fiscal.
         */
        numeroIdentificationFiscale?: string;
        /**
         * Code postal pour la France et l'étranger :
         * Sur 5 caractères pour la France
         * Sur 9 caractères pour l'étranger
         */
        codePostalFranceEtranger?: string;
        /**
         * Dénomination de la commune
         */
        libelleCommune?: string;
        /**
         * Détermine la localité de naissance pour une personne née en France.
         */
        codeInseeLocaliteNaissance?: string;
        /**
         * Dénomination banalisée de la personne :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourteParticulier?: string;
        /**
         * Date de décès de la personne physique
         */
        dateDeces?: string;
        /**
         * Détermine le niveau de relation de la personne avec l'Etablissement GCE, personne connue comme Client ou Tiers
         */
        codeClientTiers?: string;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         */
        identifiantClientBAD?: string;
        adresse?: IAdresse;
    }
    interface ICreReduit {
        /**
         * Référence d'identification d'un chèque
         */
        numeroCheque?: string;
        /**
         * Nombre de quinzaine restant à courir depuis la date d'opération jusqu'au 31/12 de l'année en cours.
         */
        nombreQuinzaine?: number;
        /**
         * Montant du solde avant opération. Il est exprimé dans la monnaie qui est celle de la tenue de compte au moment de la constitution du CRE ATOME.
         */
        montantSoldeAvantOperation?: number;
        /**
         * Numéro d'identification d'un organisme autorisé à émettre des prélèvements / créancier
         * Référence établie par la BDF
         */
        numeroNationalEmeteur?: string;
        /**
         * Code opération d'origine (circuit financier).
         * Dans le cas d'opérations en provenance de circuit financier (origines SIT, Réseau, Serveur bancaire...), code opération du circuit financier utilisé.
         */
        codeOperationOrigine?: string;
        /**
         * Détermine l'application qui émet des lots à traiter par le système des lots MQSeries.
         */
        codeProvenanceLot?: string;
        /**
         * Détermine l'application initiale à l'origine de l'émission de lots.
         */
        ancienneProvenanceLot?: string;
        /**
         * Montant brut de l'opération dans la monnaie de sa prise d'ordre (monnaie initiale) avant chargement de frais, pénalité, taxe ...
         */
        montantBrutOperation?: number;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement bancaires ou financiers de la plateforme Mysys.
         * Correspond à un individu ou à un acteur générique.
         */
        referenceExterneAgent?: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys
         */
        typeElementStructure?: string;
        /**
         * Détermine une catégorie de moyens de paiement
         * Valeurs possibles : XY
         * Valeurs de X :
         *         C     Carte bancaire
         *         J     Jeune (Satellis)
         *         T     reTrait
         *         X     eXpress
         *         E     Etrangère
         * Valeurs de Y :
         *         N     Normale (même CE)
         *         I     Interne (même CTR)
         *         E     Externe    (CE hors CTR   si X <> E)
         *               Eufiserv   (CE européenne si X = E)
         */
        typeMoyenPaiement?: string;
        /**
         * Code monnaie de la prise d'ordre
         */
        codeMonnaiePriseOrdre?: string;
        /**
         * Détermine le moyen de paiement utilisé pour effectuer une opération donnée.
         * 'CARTE'    Cartes
         * 'CHEQU'    Chèques
         * 'EFFET'    Effets
         * 'TITRE'    Titres de paiement
         * 'AVALS'    Avals
         */
        codeMoyenPaiement?: string;
    }
    interface ICaracteristiqueET {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement?: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire
         * Une ET se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire?: number;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * 1          Usage privé
         * 2          Usage professionnel
         */
        codeTypeUsage?: string;
        /**
         * Mode de relation des personnes composant une entité titulaire
         * Permet de qualifier le client détenteur d'un contrat
         * 1          mode simple
         * 2          mode joint entre époux
         * 3          mode joint entre tiers
         * 4          mode indivision
         */
        modeComposition?: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire1?: string;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         *            POUR ET MODE SIMPLE
         * 11         désignation de la personne
         *            POUR ET A USAGE PROFESSIONNEL
         * 21         nom commercial
         * 22         designation courte de l'etablissement
         * 23         enseigne commerciale de l'etablissement
         *            POUR ET MODE JOINT ENTRE EPOUX ET USAGE PRIVE
         * 31         Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32         Mr ou Mme+nom patronymique Mr+nom patronymique Mme+prénom Mr
         *            POUR ET MODE JOINT ET USAGE PRIVE
         * 41         désignation personne 1 ou désignation personne 2
         * 42         désignation personne 2 ou désignation personne 1
         * 99         forçage
         */
        codeTypeDesignation1?: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire2?: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire3?: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire4?: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire5?: string;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         *            POUR ET MODE SIMPLE
         * 11         désignation de la personne
         *            POUR ET A USAGE PROFESSIONNEL
         * 21         nom commercial
         * 22         designation courte de l'etablissement
         * 23         enseigne commerciale de l'etablissement
         *            POUR ET MODE JOINT ENTRE EPOUX ET USAGE PRIVE
         * 31         Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32         Mr ou Mme+nom patronymique Mr+nom patronymique Mme+prénom Mr
         *            POUR ET MODE JOINT ET USAGE PRIVE
         * 41         désignation personne 1 ou désignation personne 2
         * 42         désignation personne 2 ou désignation personne 1
         * 99         forçage
         */
        codeTypeDesignation2?: string;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         *            POUR ET MODE SIMPLE
         * 11         désignation de la personne
         *            POUR ET A USAGE PROFESSIONNEL
         * 21         nom commercial
         * 22         designation courte de l'etablissement
         * 23         enseigne commerciale de l'etablissement
         *            POUR ET MODE JOINT ENTRE EPOUX ET USAGE PRIVE
         * 31         Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32         Mr ou Mme+nom patronymique Mr+nom patronymique Mme+prénom Mr
         *            POUR ET MODE JOINT ET USAGE PRIVE
         * 41         désignation personne 1 ou désignation personne 2
         * 42         désignation personne 2 ou désignation personne 1
         * 99         forçage
         */
        codeTypeDesignation3?: string;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         *            POUR ET MODE SIMPLE
         * 11         désignation de la personne
         *            POUR ET A USAGE PROFESSIONNEL
         * 21         nom commercial
         * 22         designation courte de l'etablissement
         * 23         enseigne commerciale de l'etablissement
         *            POUR ET MODE JOINT ENTRE EPOUX ET USAGE PRIVE
         * 31         Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32         Mr ou Mme+nom patronymique Mr+nom patronymique Mme+prénom Mr
         *            POUR ET MODE JOINT ET USAGE PRIVE
         * 41         désignation personne 1 ou désignation personne 2
         * 42         désignation personne 2 ou désignation personne 1
         * 99         forçage
         */
        codeTypeDesignation4?: string;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         *            POUR ET MODE SIMPLE
         * 11         désignation de la personne
         *            POUR ET A USAGE PROFESSIONNEL
         * 21         nom commercial
         * 22         designation courte de l'etablissement
         * 23         enseigne commerciale de l'etablissement
         *            POUR ET MODE JOINT ENTRE EPOUX ET USAGE PRIVE
         * 31         Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32         Mr ou Mme+nom patronymique Mr+nom patronymique Mme+prénom Mr
         *            POUR ET MODE JOINT ET USAGE PRIVE
         * 41         désignation personne 1 ou désignation personne 2
         * 42         désignation personne 2 ou désignation personne 1
         * 99         forçage
         */
        codeTypeDesignation5?: string;
        /**
         * Numéro d'identification interne d'un élément de structure
         */
        identifiantElementStructure?: number;
        /**
         * Libellé de désignation d'un élément de structure
         */
        libelleElementStructure?: string;
        /**
         * Désignation bancaire longue optionnelle et choisie par le client lorsque la désignation calculée ne le satisfait pas (ex: nom tronqué) ou lorsque qu'il désire y ajouter un complément d'information.
         */
        designationBancaireLongue?: string;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes
         * '0'        Actif
         * '1'        Cloturé
         */
        codeEtatPersonneEntite?: string;
        /**
         * Date de fermeture de l'entité titulaire
         */
        dateFermetureEntite?: string;
        /**
         * code indiquant le motif de la clôture administrative soit d'une personne soit d'une entité titulaire
         * ' '        Non clôturé
         * '1'        Plus d'activité bancaire
         * '2'        Décédé
         * '3'        Transféré
         * '4'        Incident
         * '5'        Indésirable
         * '6'        Séparé
         * '7'        Fusionné
         */
        codeMotifCloture?: string;
        /**
         * date enregistrement de l'entité titulaire
         */
        dateEnregistrementEntite?: string;
        /**
         * Codification des éléments de structure
         * 10 Secteur
         * 20 agence lourde
         * 30 agence
         * 40 antenne mobile
         * 50 cellule titre (service)
         * 60 cellule entreprise
         * 71 chargé de clientèle niveau 1
         * 72 chargé de clientèle niveau 2
         */
        codeTypeElementStructure?: string;
        /**
         * Code d'identification d'une entité administrative : élément de structure correspondant à un guichet bancaire d'une Caisse (type 009 /CTCEEL) défini dans l'organisation informatique (CTCEOR ='001').
         * Les EDS rattachés à une E.A sont uniquement des   agences (CTCEEL ='003').
         */
        codeEntiteAdministrative?: string;
        /**
         * Libellé de désignation d'un élément de structure appartenant à un Etablissement de la plateforme Mysys.
         */
        libelleElementStructure1?: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Correspond à un type : siège, agence, service, poste fonctionnel ...
         */
        identifiantElementStructure1?: number;
        /**
         * numéro d'élément de structure de contact client.
         * Il s'agit obligatoirement d'une agence.
         */
        identifiantEDSContact?: number;
        /**
         * Codification des éléments de structure
         * 10 Secteur
         * 20 agence lourde
         * 30 agence
         * 40 antenne mobile
         * 50 cellule titre (service)
         * 60 cellule entreprise
         * 71 chargé de clientèle niveau 1
         */
        codeTypeElementStructureCont?: string;
        /**
         * Code d'identification d'une entité administrative : élément de structure correspondant à un guichet bancaire d'une Caisse (type 009 /CTCEEL) défini dans l'organisation informatique (CTCEOR ='001').
         * Les EDS rattachés à une E.A sont uniquement des   agences (CTCEEL ='003').
         */
        codeEntiteAdministrative1?: string;
        /**
         * Référence externe d'un élément de structure d'un Etablissement bancaire ou financier de la plateforme Mysys.
         */
        referenceExterneElementStruc1?: number;
        /**
         * Référence externe d'un élément de structure d'un Etablissement bancaire ou financier de la plateforme Mysys.
         */
        referenceExterneElementStruc?: number;
        /**
         * référence interne de l'élément de structure elle permet en fonction du type de l'élément de structure de donner
         * pour un agent son numéro d'agent
         * pour un service le numéro du service
         * pour une agence le numéro d'agence
         * pour divers son numéro
         */
        referenceInterneElementStruc?: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         */
        typeElementStructure1?: string;
        /**
         * Libellé de désignation d'un élément de structure appartenant à un Etablissement de la plateforme Mysys.
         */
        libelleElementStructure2?: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Correspond à un type : siège, agence, service, poste fonctionnel ...
         */
        identifiantElementStructure2?: number;
        /**
         * Référence externe d'un élément de structure d'un Etablissement bancaire ou financier de la plateforme Mysys.
         */
        referenceExterneElementStruc2?: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         */
        typeElementStructure2?: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé court du type d'EDS et de la désignation de l'EDS
         */
        libelleCalculeCourtEDS2?: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé court du type d'EDS et de la désignation de l'EDS
         */
        libelleCalculeCourtEDS1?: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS
         * Sauf si l'EDS est un PF, on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationLongueEDS1?: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS
         * Sauf si l'EDS est un PF, on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationLongueEDS2?: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement bancaires ou financiers de la plateforme Mysys.
         * Correspond à un individu ou à un acteur générique.
         */
        referenceExterneAgent1?: number;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement bancaires ou financiers de la plateforme Mysys.
         * Correspond à un individu ou à un acteur générique.
         */
        referenceExterneAgent2?: number;
        /**
         * libellé de désignation d'une fonction (métier) associée à un poste fonctionnel
         */
        libellePosteFonctionnel1?: string;
        /**
         * libellé de désignation d'une fonction (métier) associée à un poste fonctionnel
         */
        libellePosteFonctionnel2?: string;
        /**
         * Précise la "qualité" du client bancaire particulier
         * La "qualité" du client va décroissante de 'A' à 'E'.
         */
        codeCotationBancaire?: string;
        /**
         * 1  Mode indivision successorale
         * 2  Mode indivision conventionnel avec solidarité
         * 3  Mode indivision conventionnel sans solidarité
         */
        typeIndivision?: string;
    }
}

/**
 * Ressource : /contratccie/v1/informationCci
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/contratccie/informationCci
 * Fichier généré le : 2018-02-13
 */
declare module operationRetraitDepot.Services {
    class ContratccieInformationCciService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getInformationCci(codeEtablissement: string, codeGuichet: string, numeroCompteProduitService: string, codeAction: string, typeRestitution?: string, codeTypeProduitService?: string, codeOrigineOperation?: string): ng.IPromise<IInformationCci>;
    }
}

/**
 * Ressource : /entitetitulaireservice/v2/intervenantEntiteTit
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v2/entitetitulaireservice/intervenantEntiteTit
 * Fichier généré le : 2017-07-06
 */
declare module operationRetraitDepot.Modeles {
    interface IPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        indiceResponsableET: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLiensInterPersonnes: string;
        numeroRangPersonneET: string;
        identifiantEntiteTitulaire: number;
        /**
         * Défini le type de personne.
         * |code|description|
         * |---|---|
         * |P|Personne physique|
         * |M|Personne moral|
         */
        codeTypePersonne: string;
        /**
         * Rang Ancien Etat Civil
         *
         *  Valeur du rang Rôle :
         *
         * à blanc, ‘A’, ‘B’ : ‘Titulaire’
         * 'V' : ‘Rattaché simple’
         * ‘W’ : à blanc
         * 'X' : ’Conjoint’
         * 'Y' : ’Représentant légal’
         * 'Z'’ : ‘Déclarant’
         * Autres : ‘Mandataire’
         */
        rangAncienEtatCivil: string;
        /**
         * codePersonnaliteJuridique
         *
         * |code | Description |
         * |--- | --- |
         * |00 | MINEUR SOUS MESURE AIDE GESTION BUDGET FAMILIAL MAGBF|
         * |01 | MINEUR EMANCIPE|
         * |02 | MINEUR SOUS ADMINISTRATION LEGALE PURE ET SIMPLE|
         * |03 | MINEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE|
         * |04 | MINEUR SS TUTELLE COMPLETE(TUTEUR+SUBROGE TUT.+ JUGE)|
         * |05 | MINEUR SOUS TUTELLE D'ETAT|
         * |06 | MINEUR SOUS ADMINISTRATION AD HOC|
         * |07 | MAJEUR CAPABLE|
         * |08 | MAJEUR SOUS SAUVEGARDE DE JUSTICE|
         * |09 | MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT DONNE|
         * |10 | MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT SPECIAL|
         * |11 | MAJEUR SOUS CURATELLE SIMPLE|
         * |12 | MAJEUR SOUS CURATELLE RENFORCEE|
         * |13 | MAJEUR SOUS TUTELLE COMPLETE|
         * |14 | MAJEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE|
         * |15 | MAJEUR SOUS TUTELLE|
         * |16 | MAJEUR SS MESURE ACCOMP. SOCIAL PERSONNALISE (MASP)|
         * |17 | MAJEUR SS MESURE ACCOMP. JUDICIAIRE (MAJ)|
         * |18 | MAJEUR SS MESURE AIDE GESTION BUDGET FAMILIAL (MAGBF)|
         * |19 | MAJEUR SS MANDAT DE PROTECTION FUTURE SIMPLE|
         * |20 | MAJEUR SS MANDAT DE PROTECTION FUTURE ETENDU|
         */
        codePersonnaliteJuridique: string;
        dateFin: string;
        dateDebut: string;
        informationPersonneMoral: IInformationPersonneMoral;
        informationPersonnePhysique: IInformationPersonnePhysique;
        ligne2adresse: string;
        ligne3adresse: string;
        ligne4adresse: string;
        ligne5adresse: string;
        ligne6adresse: string;
        numeroTelephoneAdresse: string;
        identifiantClient: string;
    }
    interface IIntervenantEntiteTit {
        listPersonne: Array<IPersonne>;
    }
    interface IInformationPersonneMoral {
        raisonSocial: string;
    }
    interface IInformationPersonnePhysique {
        nomFamille: string;
        nomUsage: string;
        prenom: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeMandat: string;
        nomLocaliteINSEE: string;
        libelleNationalitePays: string;
        numeroTelephoneCorrespondance: string;
        codeTypeRegimeMatrimonial: string;
    }
}

declare module operationRetraitDepot.Services {
    /**
     * Service d'appel aux WS entiteTitulaireService
     */
    class EntiteTitulaireServiceService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        /**
         * Constructeur
         * @param serviceAgentExtended {ServiceAgentExtended}
         * @param messageService {IMessageService}
         * @param $q {IQService}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        /**
         * Récupérer la liste des personnes associées à un identifiant personne
         * @return {IPromise<IIntervenantEntiteTit>} promesse sur la réponse WS
         */
        getIntervenantEntiteTitulaire(codeEtablissement?: string, identifiantPersonne?: number, rice?: string): ng.IPromise<Modeles.IIntervenantEntiteTit>;
    }
}

declare module operationRetraitDepot.Services {
    class ExtourneService {
        private recapitulatifOperationsService;
        private operationFinanciereService;
        private identifiantBordereauService;
        static $inject: string[];
        titrePage: string;
        codeFonctionnalite: string;
        identifiantBordereauJab: string;
        constructor(recapitulatifOperationsService: Services.RecapitulatifOperationsService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService);
        /**
         * Set le titre de la page des extournes
         * @param titrePage Titre page
         */
        setTitrePage(titrePage: string): void;
        /**
         * Récupère le titre de la page des extournes
         */
        getTitrePage(): string;
        /**
         * Set le code fonctionnalite des extournes
         * @param codeFonctionnalite Code fonctionnalite
         */
        setCodeFonctionnalite(codeFonctionnalite: string): void;
        /**
         * Récupère le code fonctionnalite des extournes
         */
        getCodeFonctionnalite(): string;
        /**
         * Set l'identifiant bordereau JAB
         * @param identifiantBordereauJab Identifiant bordereau JAB
         */
        setIdentifiantBordereauJab(numeroPersonneParam?: string, bordereauMyWayParam?: boolean): void;
        /**
         * Récupère l'identifiant bordereau JAB
         */
        getIdentifiantBordereauJab(): string;
        /**
         * Récupère un objet d'opération extourne
         */
        getObjetOperationFinanciereExtourne(): operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere;
        /**
         * Récupère un objet d'opération extourne
         */
        getOperationFinanciereExtourneVirementInterneCredit(): operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere;
        /**
         * Création d'un objet Opération Financière à partir d'une extourne récupéré dans le JAB.
         */
        creationObjetOperationFinancierePourExtourne(operationExtourneParam?: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere): ng.IPromise<myway.comOpesFinancieres.Model.OperationFinanciere>;
    }
}

declare module operationRetraitDepot.Services {
    /**
     * Service d'appel aux WS recapitulatifOperationsService
     */
    class IdentificationExtourneRegulService {
        private serviceAgentExtended;
        static $inject: string[];
        private codeEtab;
        private identifiantInterneAgence;
        private referenceExterneAgence;
        /**
         * Constructeur
         * @param serviceAgentExtended {ServiceAgentExtended}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupérer la liste des activités bancaires d'un âge au jour J
         * @return {IPromise<operationRetraitDepot.Modeles.IOperationJab>} promesse sur la réponse WS
         */
        getActiviteBancaire(): ng.IPromise<operationRetraitDepot.Modeles.IOperationJab>;
    }
}

declare module operationRetraitDepot.Services {
    class LibelleService {
        constructor();
        /**
         * Extrait un libelle d'érreur pour le parser avec des ** autour pour la synthèse d'erreur
         * @param message Message d'erreur
         */
        extraireLibelleErreur(message: string): string;
    }
}

declare module operationRetraitDepot.Services {
    /**
     * Service de navigation
     */
    class NavigationService {
        private $q;
        private serviceAgentExtended;
        private $routeParams;
        private $window;
        private riceService;
        static $inject: string[];
        private static PERSONNE_PHYSIQUE;
        private static PERSONNE_MORALE;
        /** Donnees de contexte. */
        donneesContexte: Modeles.ContexteModel;
        texteSousHeader: string;
        texteHeader: string;
        modeExtourne: boolean;
        modeRegul: boolean;
        modeEntree: string;
        /** Chargement application. */
        chargementApplication: boolean;
        filAriane: string;
        /**
         * Constructeur
         * @param $q {IQService}
         * @param serviceAgentExtended {ServiceAgentExtended}
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $routeParams: ng.route.IRouteParamsService, $window: ng.IWindowService, riceService: Services.RiceService);
        /**
         * Quitter l'application virements
         * @return {IPromise<void>} promesse vide
         */
        quitter(): ng.IPromise<void>;
        /**
         * Retourne le sous header
         */
        getSousHeader(): string;
        /**
         * Initialise le sous header des operations depot retrait
         */
        initSousHeaderOperationDepotRetrait(): void;
        initHeader(): void;
        initHeaderExtourneRegul(): void;
        initSousHeaderAVide(): void;
        getHeader(): string;
        /**
         * Initialise le sous header des operations depot retrait
         */
        initSousHeaderTableauComptes(): void;
        /**
         * Initialise le sous header des extournes
         */
        initSousHeaderExtourne(): void;
        /**
         * Initialise le sous header des régularisations
         */
        initSousHeaderRegul(): void;
        reinitialiseContexte(): ng.IPromise<void>;
        reinitialiseContextPourIdent(): ng.IPromise<void>;
        /**
         * Initialisation du contexte.
         */
        initialisationContexte(): ng.IPromise<NavigationService>;
        /**
         * Sortie de l'application  après validation.
         */
        sortieApplicationApresValidation(): void;
        /**
         * Changer de route dans l'application virements
         * @return {IPromise<void>} promesse vide
         */
        sortieVersEtape(codeLisaNext: number): ng.IPromise<void>;
        scrollToTop(): void;
        filArianeSelectionCompte(): void;
        filArianeHistoriqueOpe(): void;
        filArianeListeExtourne(): void;
    }
}

/**
 * Ressource : /operationadistance/v1/operationADistance
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/operationadistance/operationADistance
 * Fichier généré le : 2017-09-04
 */
declare module operationRetraitDepot.Services.OperationADistance {
    interface IOperationADistance {
        detailOperationCheque?: IDetailOperationCheque;
        /**
         * devise de l'opération
         */
        deviseOperation?: string;
        /**
         * montant de l'opération
         */
        montantOperation?: number;
        /**
         * D pour débit; C pour crédit envoyé à la QR
         */
        codeSensOperation?: string;
        /**
         * code établissement
         */
        codeEtablissementFinancier?: string;
        /**
         * code guichet
         */
        codeGuichet?: string;
        /**
         * référence du produit/service
         */
        referenceProduitService?: string;
        /**
         * code du type de produit :
         * 0000 : Livret A; 0001 Livret B; 0004 CDD; 0005 LEP; 0006LDD; 0008 CEE; 0010 LJ
         */
        codeTypeProduit?: string;
        /**
         * nom et prénom de la personne à l'origine de la demande
         */
        nomPrenomDemandeur?: string;
        /**
         * référence non connue du conseiller
         */
        referenceTechniqueOperation?: string;
        /**
         * référence de l'opération saisie par le conseiller
         */
        referenceOperationSaisie?: string;
        /**
         * libellé de l'opération
         */
        libelleOperation?: string;
        /**
         * code de la prestation tarifaire
         */
        codePrestationTarifaire?: string;
        /**
         * délai d'encaissement de l'opération
         */
        delaiEncaissementOperation?: string;
        /**
         * référence de la pièce d'identité
         */
        referenceIdentite?: string;
        /**
         * indicateur accréditif
         */
        indicateurAccreditif?: boolean;
        /**
         * date de valeur de l'opération
         */
        dateValeurOperation?: string;
        /**
         * différents mode financier : 01 Espèce, 02 Chèque reçu, 09 Chèque de banque, 10 divers
         */
        codeModeFinancier?: string;
        codeIndicateurAnnulation: string;
        libelleModeFinancier?: string;
        identifiantPersonne?: number;
        nomUsagePersonne?: string;
        prenomPersonne?: string;
        identifiantBordereauJab?: string;
        codeFonctionnaliteOrigineOpe: string;
        numeroSacDepotInitial?: string;
        detailOperationExtourne?: IDetailOperationExtourne;
    }
    interface IDetailOperationCheque {
        /**
         * nom du bénéficiaire du cheque
         */
        beneficiaireCheque?: string;
        /**
         * numéro du chèque
         */
        numeroCheque?: string;
    }
    interface IDetailOperationExtourne {
        /** COCXBQ */
        codeEtablissementOpOrigine: string;
        /** NOCEAGE */
        identifiantAgentOpOrigine: number;
        /** HDGXTS */
        timeStampOpOrigine: string;
    }
}

/**
 * Ressource : /operationfinanciere/v1/operationFinanciere
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/operationfinanciere/operationFinanciere
 * Fichier généré le : 2017-05-22
 */
declare module operationRetraitDepot.Services.OperationFinanciereDepotRetrait {
    interface ICodeForcage {
        /**
         * libellé retourné par la Qr pour expliquer pourquoi il y a une demande de forcage
         */
        libelleForcage?: string;
        /**
         * code établissement du compte concerné par la demande de forcage
         */
        codeEtablissementCompteForcage?: string;
        /**
         * code guichet du compte concerné par la demande de forcage
         */
        codeGuichetCompteForcage?: string;
        /**
         * référence produit service du compte concerné par la demande de forcage
         */
        referenceProduitCompteForcage?: string;
        /**
         * ce code retour indique à l'appelant si un forcage est possible ou non. 000 la mise à jour a été faite 999 la mise à jour n'a pas été faite mais peut être forcée
         */
        codeRetour?: number;
    }
    interface IDetailOperationCheque {
        /**
         * Numéro du chèque déposé ou retiré
         */
        numeroCheque?: string;
        /**
         * Type du chèque déposé ou retiré
         */
        typeCheque?: string;
        /**
         * '0'        sans réserve
         * '1'        chèque sur place
         * '2'        chèque hors place
         */
        indicateurContrepartie?: string;
        /**
         * Nom du bénéficiaire du chèque
         */
        nomBeneficiaire?: string;
        /**
         * Indique s'il s'agit de la dernière contrepartie d'un chèque de banque.
         *             Valeurs possibles :
         *  'M'        Le chèque reste ou passe à l'état "en cours".
         *  'L'        Dernière contrepartie, le chèque passe à l'état "émis".
         *  'D'        Identique à 'L' (Besoin PETRA).
         */
        codeDerniereContrePartie?: string;
    }
    interface IDetailOperationDiverse {
        /**
         * Type de l'opération diverse, il dépend de la famille du niveau supérieur.
         */
        typeOperationDiverse?: string;
        /**
         * grandes familles des opérations diverses
         * le 2 premiers caractères sont variable "  " ou "01" "02" etc
         * et les 3 caractères suivant sont le code famille "007" par exemple
         */
        familleOperationDiverse?: string;
        prefixeCodeFamille: string;
        libelle1OperationDiverse: string;
        libelle2OperationDiverse: string;
        libelleOperationDiverse: string;
    }
    interface IDetailOperation {
        detailOperationCheque?: IDetailOperationCheque;
        detailOperationDiverse?: IDetailOperationDiverse;
        /**
         * code établissement financier
         */
        codeEtablissement?: string;
        /**
         * code Guichet
         */
        codeGuichet?: string;
        /**
         * Référence du produit service ex :04000084683
         */
        referenceProduitService?: string;
        /**
         * code du type de référence du produit service, ex : 0004
         */
        codeTypeProduitService?: string;
        /**
         * montant de l'opération dont le détail est présenté ici
         */
        montantOperationUnitaire?: number;
        /**
         * montant total de l’opération toutes opérations confondues
         */
        montantTotalOperation?: number;
        /**
         * premier libellé apparaissant sur le relevé de compte
         */
        libelleReleveCompte1?: string;
        /**
         * second libellé apparaissant sur le relevé de compte
         */
        libelleReleveCompte2?: string;
        /**
         * nombre de jours d'encaissement du moyen de paiement
         */
        nombreJourEncaissement?: string;
        /**
         * code interne sur 4 caractères pour définir la tarification de l'opération
         */
        codeInterneTarification?: string;
        numeroSacDepot?: string;
    }
    interface IOperationFinanciere {
        listeDetailsOperation?: Array<IDetailOperation>;
        listeCodeForcage?: Array<ICodeForcage>;
        /**
         * devise de l'ensemble de l'ensemble des mouvements de l'opération
         */
        deviseOperation?: string;
        /**
         * date de valeur souhaitée pour les opérations
         */
        dateValeurOperation?: string;
        /**
         * Permet d'indiquer qu'en cas de retour 999 de la QR, le conseiller souhaite poursuivre l'opération. Est utilisé en cas de forçage des contrôles réalisés par les applicatifs.
         */
        indicateurForcageOperation?: boolean;
        /**
         * D pour débit; C pour crédit
         * envoyé à la QR : débit : R01 ; crédit V01
         */
        codeSensOperation?: string;
        /**
         * 00: VIO; opérations diverses
         * 01:ESP; espèces
         * 02:CHQ; versement chèque
         * 07:VIO ; espèce divers
         * 09:CHB ; retrait chèque de banque
         * 10:DIV ; divers
         */
        codeModeFinancier?: string;
        listeMessageInformationValidation?: Array<string>;
        topValidationMessageInformation?: string;
        codeIndicateurAnnulation?: string;
        referenceTechniqueOperation?: string;
        libelleModeFinancier?: string;
        identifiantPersonne?: number;
        nomUsagePersonne?: string;
        prenomPersonne?: string;
        identifiantBordereauJab?: string;
        codeFonctionnaliteOrigineOpe: string;
        listeDetailsOperationExtourne?: Array<IDetailOperationExtourne>;
    }
    interface IDetailOperationExtourne {
        /** COCXBQ */
        codeEtablissementOpOrigine: string;
        /** NOCEAG */
        identifiantAgentOpOrigine: number;
        /** HDGXTS */
        timeStampOpOrigine: string;
    }
}

/**
 * Ressource : /operationfinanciere/v1/operationFinanciere
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/operationfinanciere/operationFinanciere
 * Fichier généré le : 2017-05-22
 */
declare module operationRetraitDepot.Services {
    interface IMapItemCompteModel {
        key: string;
        value: operationRetraitDepot.Modeles.CompteModel;
    }
    class OperationFinanciereDepotRetraitService {
        private serviceAgentExtended;
        private modalService;
        private riceService;
        private compteService;
        private libelleService;
        private operationFinanciereService;
        private $q;
        private contratccieInformationCciService;
        private mapCompteModel;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, riceService: Services.RiceService, compteService: myway.comInterdomaine.CompteService, libelleService: Services.LibelleService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, $q: ng.IQService, contratccieInformationCciService: Services.ContratccieInformationCciService);
        /**
         * Post via le service REST des operation financieres depot/retrait
         * @param operationInterne Objet de post OperationFinanciere
         */
        postOperationFinanciere(operationInterne: OperationFinanciereDepotRetrait.IOperationFinanciere): ng.IPromise<OperationFinanciereDepotRetrait.IOperationFinanciere>;
        /**
         * Post via le service REST des operation financieres depot/retrait
         * @param operationInterne Objet de post OperationFinanciere
         */
        postVirement(operationInterne: OperationFinanciereDepotRetrait.IOperationFinanciere, virementCredit: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere, operationFinanciereExtourne?: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere, estForcageMessageValidation?: boolean, estForcage?: boolean): ng.IPromise<Modeles.Virement.IVirementInterne>;
        /**
         * Création d'un objet Post Virement Interne.
         * @param virementInterneOpeFi
         * @param beneficiaireVirements
         */
        private creationObjetPostVirementInterne(operationFi, virementCredit, operationFinanciereExtourne?, estForcageMessageValidation?, estForcage?);
        /**
         * Post via le service REST des operations à distance depot/retrait
         * @param operationADistance
         */
        postOperationADistance(operationADistance: OperationADistance.IOperationADistance): ng.IPromise<OperationADistance.IOperationADistance>;
        /**
         * Permet la creation d'un objet PostOperationDistanceDepotRetrait permettant le POST via le service REST
         * @param operationFinanciere Objet Operation Financiere
         * @param estDepot Indique si c'est un depot, sinon c'est un retrait
         */
        creationObjetPostOperationDistanceDepotRetrait(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estDepot: boolean, codeFonctionnalite: string, donneesContexte?: Modeles.ContexteModel): OperationADistance.IOperationADistance;
        /**
         * Permet la creation d'un objet PostOperationFinanciereDepotRetrait permettant le POST via le service REST
         * @param operationFinanciere Objet Operation Financiere
         * @param estDepot Indique si c'est un depot, sinon c'est un retrait
         */
        creationObjetPostOperationFinanciereDepotRetrait(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estDepot: boolean, codeFonctionnalite?: string, donneesContexte?: Modeles.ContexteModel): OperationFinanciereDepotRetrait.IOperationFinanciere;
        /**
         * Test si un compte 88 est habilite à valider une opération financière.
         */
        testValidationCompte88(): ng.IPromise<boolean>;
        forcageExtourneVirementInterne(virementRetour: Modeles.Virement.IVirementInterne, virementCredit: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere, operationInterne: OperationFinanciereDepotRetrait.IOperationFinanciere): ng.IPromise<Modeles.Virement.IVirementInterne>;
        /**
         * Forçage d'une opération financière avec affichage d'une popup
         * @param operationRetour Operation Financiere de retour du service REST
         * @param estExtourne Indique si on est ou non en extourne
         */
        forcageOperationFinanciere(operationRetour: Services.OperationFinanciereDepotRetrait.IOperationFinanciere, estExtourne?: boolean): ng.IPromise<Services.OperationFinanciereDepotRetrait.IOperationFinanciere>;
        /**
         * Récupère la liste des retrait pour le compte PEA passé en entrée
         * @param rice Objet Rice
         */
        recupereRetraitPourPEA(rice: MyWay.Model.Rice): ng.IPromise<operationRetraitDepot.Modeles.ICompteNumerairePEA>;
        imprimerBordereauOperation(codeEtablissement: string, documentGenere: MyWay.Services.Impression.DocumentGenere): ng.IPromise<any>;
        recupererInfoPersonneCompteViaRice(rice: MyWay.Model.Rice): ng.IPromise<operationRetraitDepot.Modeles.CompteModel>;
        /**
         * Méthode qui va récupérer les informations sur le compte fourni en paramètre (état, devise, ...)
         * Ressource /contrat/v1/informationContrat
         * @param rice
         */
        recupereInfoCompte(rice: MyWay.Model.Rice): ng.IPromise<operationRetraitDepot.Modeles.IInformationContrat>;
        recupereCampagneLivretGP(rice: MyWay.Model.Rice): ng.IPromise<operationRetraitDepot.Modeles.ITauxCampagneLivretGP>;
        recupererCodeDeviseCompte88(rice: MyWay.Model.Rice): ng.IPromise<string>;
        recupereListeEtablissementMySysInterne(etab: string): ng.IPromise<boolean>;
        /**
         * Mise à jour des soldes de l'objet opération financière pour préparation du bordereau d'opération
         * @param estModeRetrait Indique si on est en retrait
         * @param operationFinanciere myway.comOpesFinancieres.Model.OperationFinanciere
         */
        miseAJourMontantSoldePourBordereau(estModeRetrait: boolean, operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estExtourne?: boolean): myway.comOpesFinancieres.Model.OperationFinanciere;
        /**
         * Création d'un objet ParticipantInformation à partir d'un objet Signataires
         * @param signataires Signataires
         */
        creationObjetParticipantInformation(signataires: myway.comContract.modeles.ISignataireComplet[], estHorsPresenceClient: boolean): MyWay.Model.ParticipantInformationClient;
        gestionPopupSeuilPlafond(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere): ng.IPromise<myway.comOpesFinancieres.Model.OperationFinanciere>;
        /**
         * Retourne objet Devise Euro
         */
        mockDeviseEuroParDefaut(): MyWay.Model.Devise;
    }
}

declare module operationRetraitDepot.Services {
    class PopupService {
        private serviceAgentExtended;
        private modalService;
        private chequeBanqueService;
        private navigationService;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, chequeBanqueService: myway.comOpesFinancieres.ChequeBanqueService, navigationService: Services.NavigationService, $q: ng.IQService);
        /**
         * Popup d'erreur après une erreur lors de l'impression
         * @param erreur Erreur MyWay
         */
        popupErreurApresImpressionBordereauMyWay(erreur: MyWay.Services.Erreur): void;
        /**
         * Options de la popup de forcage si la date de valeur est depasse pour les operations
         */
        getOptionsPopupForcageDateValeurDepasse(): MyWay.UI.IModalConfirm;
        /**
         * Affichage de la popup d'erreur après post de l'opération financière
         */
        popupErreurApresPostOperationFinanciere(erreur: MyWay.Services.Erreur, titre?: string): void;
        /**
         * Permet d'afficher la poup de cheque de banque
         * @param derogationImpressionHabilitation Habilitation pour derogationImpression
         */
        chequeBanquePopupAffichage(derogationImpressionHabilitation: boolean, operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere): ng.IPromise<boolean>;
    }
}

declare module operationRetraitDepot.Services {
    /**
     * Service d'appel aux WS recapitulatifOperationsService
     */
    class RecapitulatifOperationsService {
        private serviceAgentExtended;
        static $inject: string[];
        private codeEtab;
        private identifiantInterneAgence;
        private referenceExterneAgence;
        /** Contient l'operation financiere d'extourne récupéré via le JAB. */
        operationFinanciereExtourne: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere;
        /** Contient les operations financieres d'extourne pour un chèque de banque réparti */
        operationsFinancieresExtourneCHB: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere[];
        /**
         * Constructeur
         * @param serviceAgentExtended {ServiceAgentExtended}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Sauvegarde dans le service les opérations d'extourne (CHB répartition)
         * @param opefi Opération d'extourne
         */
        sauvegardeOperationsFinancieresExtourneCHB(opefis: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere[]): void;
        /**
         * Récupère les opérations d'extourne (CHB répartition)
         */
        getOperationsFinancieresExtourneCHB(): operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere[];
        /**
         * Sauvegarde dans le service l'opération d'extourne
         * @param opefi Opération d'extourne
         */
        sauvegardeOperationFinanciereExtourne(opefi: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere): void;
        /**
         * Récupère l'opération d'extourne.
         */
        getOperationFinanciereExtourne(): operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere;
        /**
         * Récupérer la liste des activités bancaires d'un âge au jour J
         * @return {IPromise<operationRetraitDepot.Modeles.IOperationJab>} promesse sur la réponse WS
         */
        getActiviteBancaire(): ng.IPromise<operationRetraitDepot.Modeles.IOperationJab>;
    }
}

declare module operationRetraitDepot.Services {
    class RiceService {
        constructor();
        /**
         * Construction d'un RICE à partir d'un RICE en string
         * @param riceString RICE en string
         */
        construitRiceFromString(riceString: string): MyWay.Model.Rice;
    }
}

/**
 * Ressource : /structure/v2/etablissementMysys
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v2/structure/etablissementMysys
 * Fichier généré le : 2017-07-13
 */
declare module operationRetraitDepot.Services {
    interface IListeEtablissement {
        Etablissement?: Array<IEtablissement>;
    }
    interface IEtablissement {
        /**
         * Identifiant d'un Etablissement du Groupe CE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement?: string;
        /**
         * Désignation d'un Etablissement (Caisse) du GCE comme
         * personne morale.
         * Cette information figure dans les statuts.
         */
        libelleEtablissement?: string;
        /**
         * Cette propriété correspond à l'acronyme / abréviation de la Caisse utilisé comme suffixe d'adresse email.
         *
         * Exemples :
         * 11315 / cepac
         * 11425 / cen
         * 13135 / cemp
         * 13485 / celr
         * 14445 / cebpl
         * 14505 / celc
         * 16275 / cenfe
         * 18025 / picardie
         * 18315 / cecaz
         * 18715 / cepal
         */
        sigleEtablissement?: string;
    }
}

/**
 * Ressource : /structure/v2/etablissementMysys
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v2/structure/etablissementMysys
 * Fichier généré le : 2017-07-13
 */
declare module operationRetraitDepot.Services {
    class StructureEtablissementMysysService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getListeEtablissement(typeListe: string): ng.IPromise<IListeEtablissement>;
    }
}

/**
 * Ressource : /tarification/v1/facturePrestation
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/tarification/facturePrestation
 * Fichier généré le : 2017-09-05
 */
declare module operationRetraitDepot.Services {
    interface IFacturePrestation {
        /**
         * Code Etab Banque Entité Juridique.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement?: string;
        /**
         * Code Guichet Interbancaire
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet?: string;
        /**
         * Numéro d'identification d'un compte
         */
        numeroCompte?: string;
        /**
         * Code externe d'identification d'une prestation tarifiable (automatique ou non) : code connu du domaine tarifant.
         */
        codePrestationTarifiable?: number;
        /**
         * Montant de référence de la prestation.
         * Le montant de la prestation permet de calculer son prix lorsque celui ci doit être proportionnel au montant.
         */
        montantDeReferencePrestation?: number;
        /**
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha
         */
        monnaieMontantReference?: string;
        /**
         * montant des frais de la prestation à imputer au client
         */
        montantOperationAImputer?: number;
        /**
         * Catégorie de gestion du produit/service
         */
        codeProduit?: string;
        codeAnnulationOperation?: string;
        libelleModeFinancier?: string;
        identifiantPersonne?: number;
        nomUsagePersonne?: string;
        prenomPersonne?: string;
        identifiantBordereauJab?: string;
        codeFonctionnaliteOrigineOpe?: string;
        nomPrenomDemandeur?: string;
        dateValeurOperation?: string;
        codeModeFinancier?: string;
        libelleReleveCompte1?: string;
        libelleReleveCompte2?: string;
        codeRetour?: number;
        libelleRetour?: string;
        topForcageOperation?: boolean;
        detailOperationExtourne?: IDetailOperationExtourne;
    }
    interface IDetailOperationExtourne {
        /** COCXBQ */
        codeEtablissementOpOrigine: string;
        /** NOCEAG */
        identifiantAgentOpOrigine: number;
        /** HDGXTS */
        timeStampOpOrigine: string;
    }
}

/**
 * Ressource : /tarification/v1/facturePrestation
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/tarification/facturePrestation
 * Fichier généré le : 2017-09-05
 */
declare module operationRetraitDepot.Services {
    class TarificationFacturePrestationService {
        private serviceAgent;
        private $q;
        private modalService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, modalService: MyWay.UI.IModalService);
        postFacturePrestation(facturePrestation: IFacturePrestation): ng.IPromise<IFacturePrestation>;
        forcageFacturationPrestation(facturationRetour: Services.IFacturePrestation, estExtourne?: boolean): ng.IPromise<Services.IFacturePrestation>;
        facturationPrestation(rice: MyWay.Model.Rice, montantOperation: number, codeDevise: string, prestation: myway.comOpesFinancieres.Model.FacturationPrestation, operationDepotRetraitRest?: Services.OperationFinanciereDepotRetrait.IOperationFinanciere, estExtourne?: boolean, operationFinanciereExtourne?: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere): ng.IPromise<IFacturePrestation>;
        facturationPrestationOAD(rice: MyWay.Model.Rice, montantOperation: number, codeDevise: string, prestation: myway.comOpesFinancieres.Model.FacturationPrestation, operationDistanceDepotRetraitRest?: Services.OperationADistance.IOperationADistance, estExtourne?: boolean): ng.IPromise<IFacturePrestation>;
        /**
         * Permet d'extourner une tarification de prestation
         * @param operationFinanciere Operation Financiere
         * @param estModeDepot indique si on est en depot
         * @param estModeRetrait indique si on est en depot
         * @param operationDepotRetraitRest Operation Depot Retrait Rest objet
         */
        gestionExtourneTarificationPrestationOperation(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, operationDepotRetraitRest?: Services.OperationFinanciereDepotRetrait.IOperationFinanciere, operationFinanciereExtourne?: operationRetraitDepot.Modeles.ICaracteristiqueOperationFinanciere): ng.IPromise<Services.IFacturePrestation>;
        /**
         * Permet d'extourner une tarification de prestation
         * @param operationFinanciere Operation Financiere
         * @param estModeDepot indique si on est en depot
         * @param estModeRetrait indique si on est en depot
         * @param operationDepotRetraitRest Operation Depot Retrait Rest objet
         */
        gestionExtourneTarificationPrestationOperationOAD(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, operationDistanceDepotRetraitRest?: Services.OperationADistance.IOperationADistance): ng.IPromise<Services.IFacturePrestation>;
        /**
         * Gestion de la tarification de l'opération
         * @param operationFinanciere Objet OperationFinanciere
         * @param estModeDepot EstModeDepot
         * @param estModeRetrait EstModeRetrait
         * @param operationDepotRetraitRest OperationDepotRest
         */
        gestionTarificationOperation(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDepot: boolean, estModeRetrait: boolean, operationDepotRetraitRest?: Services.OperationFinanciereDepotRetrait.IOperationFinanciere): ng.IPromise<Services.IFacturePrestation>;
        /**
         * Gestion de la tarification de l'opération OAD
         * @param operationFinanciere Objet OperationFinanciere
         * @param estModeDepot EstModeDepot
         * @param estModeRetrait EstModeRetrait
         * @param operationDistanceDepotRetraitRest OperationDistanceRest
         */
        gestionTarificationOperationOAD(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, estModeDepot: boolean, estModeRetrait: boolean, operationDistanceDepotRetraitRest?: Services.OperationADistance.IOperationADistance): ng.IPromise<Services.IFacturePrestation>;
    }
}

declare module operationRetraitDepot {
}

declare module operationRetraitDepot {
}
