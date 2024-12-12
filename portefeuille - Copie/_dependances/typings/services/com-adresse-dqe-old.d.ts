
declare module myway.comAdresseDqe {
    /**
     *
     */
    var app: ng.IModule;
}

declare module myway.comAdresseDqe {
    /**
     * Variables locales accessibles par la valeur de l'attribut mwChange de la directive
     */
    interface IMwChangeLocals {
        /**
         * Adresse
         */
        adresse: Adresse;
        /**
         * Indicateur de modification de l'adresse. Les indicateurs de validité ne constituent pas un changement de l'adresse même s'ils déclenche la fonction mwChange
         */
        changed: boolean;
    }
    /**
     * Contrôleur de la directive mwsfAdresse
     */
    class SaisieAdresseController {
        private $element;
        private $timeout;
        private $q;
        private $parse;
        private $scope;
        private adresseService;
        private dqeService;
        formulaire: ng.IFormController;
        /**
         * Adresse gérée par le composant (provient de l'attribut value de la directive)
         */
        adresse: Adresse;
        /**
         * Indicateur de chargement du modèle (provient de l'attribut loading de la directive).
         * Tous les champs de saisie sont désactivés lorsqu'il est à true.
         */
        loadingModel: boolean;
        /**
         * Adresse recherchée via le champ de recherche.
         */
        adresseRecherche: string;
        /**
         * ngModelOptions pour tous les champs de l'adresse. Ceci permet de changer rapidement les conditions de mise à jour du modèle.
         */
        ngModelOptions: {
            [key: string]: any;
        };
        /**
         * Configuration du composant (provient de l'attribut settings de la directive).
         * Cette configuration viendra en surcharge de la configuration par défaut.
         */
        settings: IAdresseSettings;
        /**
         * Indicateur de recherche d'une adresse via le service de recherche DQE.
         * Il sert à afficher un spinner dans le champ de recherche.
         */
        loadingAdresses: boolean;
        /**
         * Indicateur de gestion du pays par les services DQE.
         * La majorité des fonctionnalités du composant sont désactivée si le pays n'est pas géré.
         */
        isPaysGere: boolean;
        /**
         * Indicateur d'affichage des champs de l'adresse.
         * Il est principalement utilisé pour savoir s'il faut afficher les champs lors de l'initialisation d'une adresse donnée.
         */
        showAdresse: boolean;
        /**
         * Id du composant dans le DOM (provient de l'attribut id de la directive).
         */
        id: string;
        /**
         * Fonction à appeler dès que l'adresse est modifiée (provient de l'attribut mwChange de la directive).
         */
        private onChangeFunction;
        static $inject: string[];
        constructor($element: ng.IAugmentedJQuery, $timeout: ng.ITimeoutService, $q: ng.IQService, $parse: ng.IParseService, $scope: ng.IScope, adresseService: AdresseService, dqeService: DqeService);
        /**
         * Cette méthode est appelée à chaque fois qu'un champ de l'adresse est modifié.
         * Elle a pour rôle de mettre à jour certains champs dépendants et de valider l'adresse si nécessaire.
         */
        onFieldChange(champSource: string): void;
        /**
         * Renvoie une liste d'adresses correspondantes au champ de recherche.
         */
        getAdresses(adresse: string): ng.IPromise<SingleResponseAdresse[]>;
        /**
         * Sélectionne une adresse (champ de recherche).
         * L'adresse est ensuite soumise à validation pour mettre à jour les champs de validation.
         */
        selectAdresse(adresse: SingleResponseAdresse): void;
        /**
         * Valide l'adresse et met à jour les indicateurs de validation:
         * - validation RNVP ou un contrôle de localité selon les champs renseignés.
         * - validation classique du formulaire accès autour des champs requis.
         * @param init Ce paramètre est uniquement à true lors de la validation initiale de l'adresse.
         * @param allowChange Si ce paramètre est à true, la validation peut corriger certains champs de l'adresse avec le retour des services DQE.
         */
        valider(init: boolean, allowChange: boolean): void;
        /**
         * Appelle la fonction liée au changement de l'adresse si elle est définie.
         * @param adresseChanged Indicateur de changement de l'adresse.
         *                       Les indicateurs de validité ne constituent pas un changement de l'adresse même s'ils déclenche la fonction mwChange.
         */
        callChangeFunction(adresseChanged: boolean): void;
        /**
         * Contrôle que l'adresse est valide et met à jour l'indicateur RNVP ([[Adresse.$codeRNVP]]).
         * La méthode renvoie une promesse qui sera rejeté uniquement si le code DQE est ADRESSE_INCOMPLETE (afin de faire un contrôle de la localité).
         * Le résultat (booléen) de la promesse n'a aucune signification.
         * @param allowChange Si ce paramètre est à true, la validation peut corriger certains champs de l'adresse avec le retour des services DQE.
         */
        private controlerAdresseRNVP(allowChange);
        /**
         * Contrôle que la localité est valide et met à jour l'indicateur RNVP ([[Adresse.$codeRNVP]]).
         * La méthode renvoie une promesse qui sera toujours résolue et dont le résultat (booléen) n'a aucune signification.
         * @param allowChange Si ce paramètre est à true, la validation peut corriger certains champs de l'adresse avec le retour des services DQE.
         */
        private controlerLocalite(allowChange);
        /**
         * Watcher sur le changement de référence de l'objet adresse afin d'initialiser le composant et sa validation
         */
        private watchAdresseReferenceChange();
    }
}

declare module myway.comAdresseDqe {
}

declare module myway.comAdresseDqe {
    /**
     * Constantes liées au composant Adresse
     */
    class AdresseConstantes {
        /**
         * Code pays ISO3 de la France
         */
        static PAYS_FRANCE: string;
        /**
         * Longueur maximum par défaut des lignes AFNOR
         */
        static AFNOR_DEFAULT_SIZE: number;
    }
    /**
     * Interface pour la configuration de la directive mwsfAdresse
     */
    interface IAdresseSettings {
        /**
         * Type d'adresse (particulier ou professionnel)
         */
        type?: AdresseTypeEnum;
        /**
         * Mode lecture seule
         */
        readOnly?: boolean;
        /**
         * Longueur maximum des lignes AFNOR (32 par défaut)
         */
        maxSize?: number;
        /**
         * Activation des services DQE.
         * L'indicateur d'activation est géré au sein du service, c'est donc un état global.
         */
        dqeServices?: boolean;
        /**
         * Toujours afficher les champs de l'adresse
         */
        alwaysExpand?: boolean;
        /**
         * Configuration du champ de recherche
         */
        recherche?: IAdresseRechercheSettings;
        /**
         * Configuration des champs de l'adresse
         */
        champs?: {
            [key: string]: IAdresseChampSettings;
        };
    }
    /**
     * Enumération des types d'adresse
     */
    enum AdresseTypeEnum {
        /**
         * Particulier
         */
        PARTICULIER,
        /**
         * Professionnel
         */
        PROFESSIONNEL,
    }
    /**
     * Interface pour la configuration d'un champ de l'adresse
     */
    interface IAdresseChampSettings {
        /**
         * Affichage ou non du champ
         */
        afficher?: boolean;
        /**
         * Libellé du champ
         */
        libelle?: string;
        /**
         * Champ requis ou non (pour la validation du modèle)
         */
        requis?: boolean;
        /**
         * Mapping avec la classe Adresse. Utilisé en interne pour la validation.
         */
        mapping?: string;
    }
    /**
     * Interface pour la configuration du champ de recherche
     */
    interface IAdresseRechercheSettings {
        /**
         * Affichage ou non du champ
         */
        afficher?: boolean;
        /**
         * Libellé du champ
         */
        libelle?: string;
        /**
         * Placeholder du champ (texte affiché dans le champ input lorsqu'il est vide)
         */
        placeholder?: string;
        /**
         * Debounce en milliseconds (intervalle minimum entre 2 mises à jour du ngModel et donc des appels au service de recherche)
         */
        debounce?: number;
        /**
         * Nombre de caractères minimum pour déclencher l'appel au service de recherche
         */
        minLength?: number;
    }
    /**
     * Configuration par défaut de la directive mwsfAdresse pour une adresse de type particulier.
     */
    var adresseParticulierDefaultSettings: IAdresseSettings;
    /**
     * Configuration par défaut de la directive mwsfAdresse pour une adresse de type professionnel.
     */
    var adresseProfessionnelDefaultSettings: IAdresseSettings;
}

declare module myway.comAdresseDqe {
    /**
     * Description des lignes AFNOR d'une adresse (Association française de normalisation)
     */
    interface IAFNOR {
        /**
         * <b>Particulier</b>: identification du destinataire (civilité, titre ou qualité + prénom + nom)<br>
         * <b>Professionnel</b>: identification du destinataire (raison sociale ou dénomination commerciale)
         */
        ligne1: string;
        /**
         * <b>Particulier</b>: complément d’identification du destinataire ou point de remise à l’intérieur du bâtiment (N° appartement, boite aux lettres, étage, couloir)<br>
         * <b>Professionnel</b>: identité du destinataire et/ou service
         */
        ligne2: string;
        /**
         * Complément d’identification du point géographique – extérieur du bâtiment (entrée, tour, bâtiment, immeuble, résidence)
         */
        ligne3: string;
        /**
         * Numéro, type de voie, voie
         */
        ligne4: string;
        /**
         * Lieu-dit ou boite postale
         */
        ligne5: string;
        /**
         * Code postal, ville
         */
        ligne6: string;
    }
    /**
     * Cette classe est utilisée comme modèle de données par la directive mwsfAdresse
     */
    class Adresse {
        /**
         * Indicateur de validité de l'adresse basé sur la présence des champs requis
         */
        $valid: boolean;
        /**
         * Code RNVP correspondant à l'adresse. Cet indicateur permet de savoir si l'adresse a été contrôlé ou non
         */
        $codeRNVP: CodeDqeEnum;
        /**
         * Objet contenant les champs afnor d'une adresse
         */
        afnor: IAFNOR;
        /**
         * Numéro dans la voie
         */
        numeroVoiePTT: string;
        /**
         * Code postal
         */
        codePostal: string;
        /**
         * ID Ville
         */
        codeInseeLocalite: string;
        /**
         * Ville
         */
        libelleInseeLocalite: string;
        /**
         * Pays
         */
        pays: IPays;
        /**
         * Constructeur par défaut<br>
         * L'objet afnor est initialisé, le flag $valid est à false, et $codeRNVP est positionné sur [[CodeDqeEnum.SERVICE_PAS_APPELLE]]
         */
        constructor();
        /**
         * Renvoie true si l'adresse est vide.<br>
         * L'adresse est considérée comme vide si tous les champs suivants sont vides: lignes afnor 1 à 5, codePostal, libelleInseeLocalite
         */
        isEmpty(): boolean;
        /**
         * Setter du champ codePostal et met à jour la ligne 6 afnor (code postal et ville)
         */
        setCodePostal(codePostal: string): void;
        /**
         * Setter du champ libelleInseeLocalite et met à jour la ligne 6 afnor (code postal et ville)
         */
        setLibelleInseeLocalite(libelleInseeLocalite: string): void;
        /**
         * Met à jour le code postal et la ville à partir de la ligne 6 afnor
         */
        updateCPVilleFromLigne6(): void;
        /**
         * Met à jour la ligne 6 afnor (code postal et ville) à partir des champs codePostal et libelleInseeLocalite
         */
        updateLigne6FromCPVille(): void;
        /**
         * Renvoie une représentation lisible mais pas forcément exhaustive de l'objet Adresse sous forme de chaine de caractères
         */
        toString(): string;
    }
}

declare module myway.comAdresseDqe {
    /**
     * Constantes relatives aux pays
     */
    class PaysConstantes {
        /**
         * Constante du pays France, extraite de la table délocalisée DU1V
         */
        static FRANCE: IPays;
    }
    /**
     * Interface d'un pays (réduction du segment de la table délocalisée DU1V)
     */
    interface IPays {
        /**
         * Code insee du pays
         */
        codeInseePays: string;
        /**
         * Code pays ISO AFNOR (2 caractères)
         */
        codePaysIsoAfnor: string;
        /**
         * Code pays ISO (3 caractères)
         */
        codePaysIso: string;
        /**
         * Libellé du pays
         */
        libelleInseePays: string;
    }
}

declare module myway.comAdresseDqe {
    /**
     * Contrôleur de la directive mwsfPays
     */
    class SaisiePaysController {
        private paysService;
        paysList: IPays[];
        static $inject: string[];
        constructor(paysService: PaysService);
    }
}

declare module myway.comAdresseDqe {
}

declare module myway.comAdresseDqe {
    /**
     * Service relatif aux opérations sur les adresses.
     */
    class AdresseService {
        private $q;
        private $parse;
        private paysService;
        private dqeService;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, paysService: PaysService, dqeService: DqeService);
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfAdresseService#getNewAdresse
         * @methodOf ##NOM-MODULE##.service:mwsfAdresseService
         * @param {string} codePaysIsoAfnor Code pays ISO3
         * @description
         * Renvoie une nouvelle adresse initialisée à partir d'un code pays.
         * @returns {Promise<myway.comAdresseDqe.Adresse>} Promesse avec l'adresse.
         */
        getNewAdresse(codePaysIsoAfnor: string): ng.IPromise<Adresse>;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfAdresseService#getNewAdresseFrance
         * @methodOf ##NOM-MODULE##.service:mwsfAdresseService
         * @description
         * Renvoie une nouvelle adresse initialisée avec la France
         * Le résultat est immédiat (sans passer par une promesse).
         * @returns {myway.comAdresseDqe.Adresse} Adresse.
         */
        getNewAdresseFrance(): Adresse;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfAdresseService#controlerAdresseRNVP
         * @methodOf ##NOM-MODULE##.service:mwsfAdresseService
         * @param {myway.comAdresseDqe.Adresse} adresse Adresse à valider
         * @param {myway.comAdresseDqe.IAdresseSettings} settings Configuration de l'adresse
         * @description
         * Contrôler l'adresse avec un service RNVP (Restructuration Normalisation Validation Postale).
         * Cas de rejet de la promesse:
         * - La méthode {@link ##NOM-MODULE##.service:mwsfDqeService#preparerAppelService preparerAppelService} renvoie un code autre que VALIDE.
         *   Ce code est alors renvoyé directement.
         * - ADRESSE_INCOMPLETE : si la ligne 4 est vide ou si le code postal et la ville sont vides
         * - NON_TROUVE : si aucune adresse n'a été trouvé
         * @returns {Promise<myway.comAdresseDqe.RNVPResponse>} Promesse avec l'adresse.
         */
        controlerAdresseRNVP(adresse: Adresse, settings: IAdresseSettings): ng.IPromise<RNVPResponse>;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfAdresseService#controlerLocalite
         * @methodOf ##NOM-MODULE##.service:mwsfAdresseService
         * @param {myway.comAdresseDqe.Adresse} adresse Adresse à valider
         * @param {myway.comAdresseDqe.IAdresseSettings} settings Configuration de l'adresse
         * @description
         * Contrôler la localité de l'adresse avec un service externe.
         * Cas de rejet de la promesse:
         * - La méthode {@link ##NOM-MODULE##.service:mwsfDqeService#preparerAppelService preparerAppelService} renvoie un code autre que VALIDE.
         *   Ce code est alors renvoyé directement.
         * - ADRESSE_INCOMPLETE : si le code postal et la ville sont vides
         * - NON_TROUVE : si aucune localité n'a été trouvé
         * @returns {Promise<myway.comAdresseDqe.CPResponse>} Promesse avec un objet contenant les localités correspondantes à l'adresse.
         */
        controlerLocalite(adresse: Adresse, settings: IAdresseSettings): ng.IPromise<CPResponse>;
    }
}

declare module myway.comAdresseDqe {
    /**
     * Service d'appel aux services DQE.
     * Les services DQE permettent de contrôler ou trouver une adresse à partir d'une adresse partielle.
     */
    class DqeService {
        private $http;
        private $q;
        /**
         * Nombre d'appels au service DQE en échec pour des raisons techniques
         */
        private failedCalls;
        /**
         * Indicateur d'activation des services DQE
         */
        private serviceActive;
        static $inject: string[];
        constructor($http: ng.IHttpService, $q: ng.IQService);
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfDqeService#setServiceActive
         * @methodOf ##NOM-MODULE##.service:mwsfDqeService
         * @param {boolean} value Indicateur d'activation (true/false)
         * @description
         * Setter de la propriété serviceActive (indicateur d'activation des services DQE)
         */
        setServiceActive(value: boolean): void;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfDqeService#isServiceActive
         * @methodOf ##NOM-MODULE##.service:mwsfDqeService
         * @param {boolean} value Indicateur d'activation (true/false)
         * @description
         * Getter de la propriété serviceActive (indicateur d'activation des services DQE)
         */
        isServiceActive(): boolean;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfDqeService#isPaysGere
         * @methodOf ##NOM-MODULE##.service:mwsfDqeService
         * @param {myway.comAdresseDqe.IPays} pays Pays
         * @description
         * Renvoie true si le pays est géré par les services DQE
         * @returns {boolean} Indicateur de gestion du pays.
         */
        isPaysGere(pays: IPays): boolean;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfDqeService#preparerAppelService
         * @methodOf ##NOM-MODULE##.service:mwsfDqeService
         * @param {myway.comAdresseDqe.Adresse} adresse Adresse
         * @param {myway.comAdresseDqe.IAdresseSettings} settings Configuration de l'adresse
         * @description
         * Effectue les contrôles préalables à un appel de service DQE et renvoie un code DQE:
         * - SERVICE_DESACTIVE : si la configuration a désactivé les services DQE ou si on a dépassé le seuil d'appels en erreur.
         * - ADRESSE_INCOMPLETE : si le pays n'est pas renseigné
         * - PAYS_NON_GERE : si le pays n'est pas géré
         * - VALIDE : dans les autres cas
         * @returns {myway.comAdresseDqe.CodeDqeEnum} Code DQE (doit être VALIDE pour procéder à l'appel).
         */
        preparerAppelService(adresse: Adresse, settings: IAdresseSettings): CodeDqeEnum;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfDqeService#getRNVP
         * @methodOf ##NOM-MODULE##.service:mwsfDqeService
         * @param {string} codePaysIso Code pays ISO (3 caractères)
         * @param {string} adresse Chaine composée des champs suivants et séparés par des | : ligne3, ligne4, ligne5, codePostal, libelleInseeLocalite
         * @param {IAdresseSettings} settings Configuration de l'adresse
         * @description
         * Appel la méthode RNVP2 du service DQE et renvoie la réponse dans un objet.
         * @returns {Promise<myway.comAdresseDqe.RNVPResponse>} Promesse avec un objet contenant la réponse.
         */
        getRNVP(codePaysIso: string, adresse: string, settings: IAdresseSettings): ng.IPromise<RNVPResponse>;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfDqeService#getSingle
         * @methodOf ##NOM-MODULE##.service:mwsfDqeService
         * @param {string} codePaysIso Code pays ISO (3 caractères)
         * @param {string} adresse Adresse sous forme d'une chaine unique
         * @param {IAdresseSettings} settings Configuration de l'adresse
         * @description
         * Appel la méthode SINGLE du service DQE et renvoie la réponse dans un objet.
         * @returns {Promise<myway.comAdresseDqe.SingleResponseAdresse[]>} Promesse avec un tableau d'adresses.
         */
        getSingle(codePaysIso: string, adresse: string, settings: IAdresseSettings): ng.IPromise<SingleResponseAdresse[]>;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfDqeService#getCP
         * @methodOf ##NOM-MODULE##.service:mwsfDqeService
         * @param {string} codePaysIso Code pays ISO (3 caractères)
         * @param {string} value Code postal ou ville
         * @param {boolean} alpha valeur alphanumérique (true pour la ville, false pour le code postal)
         * @description
         * Appel la méthode CP du service DQE et renvoie la réponse dans un objet.
         * @returns {Promise<myway.comAdresseDqe.CPResponse>} Promesse avec un objet contenant la réponse.
         */
        getCP(codePaysIso: string, value: string, alpha: boolean): ng.IPromise<CPResponse>;
        /**
         * Méthode générique d'appel à un service DQE.
         *
         * Tous les appels se font en GET, le timeout est défini globalement dans [[ServiceDQEConstantes.TIMEOUT]].
         *
         * Les paramètres d'url suivants sont automatiquement ajoutés:
         * - Pays: [[ServiceDQEConstantes.PAYS_FRANCE]]
         * - Licence: [[ServiceDQEConstantes.LICENCE]]
         * - Instance: 1 (ce paramètre parfois obligatoire est devenu obsolète avec l'utilisation du debounce)
         *
         * En cas d'erreur sur l'appel, la promesse est rejetée avec [[CodeDqeEnum.SERVICE_INDISPONIBLE]].
         * De plus, le compteur d'échec est incrémenté, ce qui peut conduire à la désactivation des services
         * si on dépasse le seuil défini dans [[ServiceDQEConstantes.FAILED_CALL_LIMIT]]
         *
         * Si le service est désactivé, la méthode renvoie un rejet avec le code [[CodeDqeEnum.SERVICE_DESACTIVE]].
         *
         * @param url Url complète du service
         * @param params Paramètres supplémentaires
         */
        private callService<T>(url, params);
    }
}

declare module myway.comAdresseDqe {
    /**
     * Service relatif aux opérations sur les pays
     */
    class PaysService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfPaysService#getAllPays
         * @methodOf ##NOM-MODULE##.service:mwsfPaysService
         * @description
         * Renvoie la liste des pays.
         * @returns {Promise<myway.comAdresseDqe.IPays[]>} Promesse avec la liste des pays.
         */
        getAllPays(): ng.IPromise<IPays[]>;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfPaysService#getPaysByCodeIso
         * @methodOf ##NOM-MODULE##.service:mwsfPaysService
         * @param {string} codePaysIsoAfnor Code pays ISO Afnor (2 caractères)
         * @description
         * Renvoie un pays à partir de son code iso afnor.
         * @returns {Promise<myway.comAdresseDqe.IPays>} Promesse avec le pays.
         */
        getPaysByCodeIso(codePaysIsoAfnor: string): ng.IPromise<IPays>;
        /**
         * @ngdoc method
         * @name ##NOM-MODULE##.service:mwsfPaysService#getFrance
         * @methodOf ##NOM-MODULE##.service:mwsfPaysService
         * @description
         * Renvoie le pays France
         * Le résultat est immédiat (sans passer par une promesse).
         * @returns {myway.comAdresseDqe.IPays} Pays France.
         */
        getFrance(): IPays;
    }
}

declare module myway.comAdresseDqe {
    /**
     * Constantes liées aux services DQE
     */
    class ServiceDQEConstantes {
        /**
         * Url de la méthode RNVP2 du service DQE
         */
        static RNVP2_URL: string;
        /**
         * Url de la méthode CP du service DQE
         */
        static CP_URL: string;
        /**
         * Url de la méthode SINGLE du service DQE
         */
        static SINGLE_URL: string;
        /**
         * Licence nécessaire pour l'utilisation des services DQE
         */
        static LICENCE: string;
        /**
         * Timeout avant l'annulation des appels aux services DQE
         */
        static TIMEOUT: number;
        /**
         * Nombre d'appels en échec avant la désactivation des services DQE
         */
        static FAILED_CALL_LIMIT: number;
    }
    /**
     * Enumération des codes liés aux services DQE
     */
    enum CodeDqeEnum {
        /**
         * Valide
         */
        VALIDE = 0,
        /**
         * Non trouvé (adresse, ville, ...)
         */
        NON_TROUVE = 1,
        /**
         * Numéro inexistant dans la voie
         */
        NUMERO_INEXISTANT = 2,
        /**
         * Batiment inexistant
         */
        BATIMENT_INEXISTANT = 3,
        /**
         * Adresse incomplète (recherche RNVP impossible)
         */
        ADRESSE_INCOMPLETE = 4,
        /**
         * Localité valide (code postal / ville)
         */
        LOCALITE_VALIDE = 5,
        /**
         * Localité non valide (incohérence entre le code postal et la ville)
         */
        LOCALITE_NON_VALIDE = 6,
        /**
         * Localités multiples (plusieurs localités trouvées)
         */
        LOCALITES_MULTIPLES = 7,
        /**
         * Pays non géré par le service RNVP
         */
        PAYS_NON_GERE = 9,
        /**
         * Le service n'a pas été appelé
         */
        SERVICE_PAS_APPELLE = 10,
        /**
         * Service indisponible
         */
        SERVICE_INDISPONIBLE = 11,
        /**
         * Service désactivé
         */
        SERVICE_DESACTIVE = 12,
    }
    /**
     * Interface de base d'une localité (utilisée dans les réponses des services DQE)
     */
    interface IDqeBaseLocalite {
        /**
         * ID de la localité
         */
        IDLocalite: string;
        /**
         * Code postal
         */
        CodePostal: string;
        /**
         * Localité
         */
        Localite: string;
        /**
         * Lieu-dit
         */
        LieuDit: string;
    }
    /**
     * Interface de base d'une voie (utilisée dans les réponses des services DQE)
     */
    interface IDqeBaseVoie {
        /**
         * ID de la voie
         */
        IDVoie: string;
        /**
         * Libellé de la voie
         */
        Voie: string;
        /**
         * Nombre de numéros dans la voie
         */
        NbNumero: string;
        /**
         * Numéro dans la voie
         */
        Numero: string;
        /**
         * Liste des numéros dans la voie
         */
        ListeNumero: string[];
    }
}

declare module myway.comAdresseDqe {
    /**
     * Interface de réponse de la méthode CP du service DQE
     */
    interface ICPResponse {
        /**
         * Collection d'objets adresse. Les index sont numérotés de 1 à n et ordonnés par pertinence.
         */
        [index: string]: ICPAdresse;
    }
    /**
     * Interface d'une adresse liée à la méthode CP du service DQE
     */
    interface ICPAdresse extends IDqeBaseLocalite, IDqeBaseVoie {
    }
    /**
     * Cette classe est un container pour la réponse de la méthode CP du service DQE.
     * Elle permet de simplifier et codifier l'exploitation du retour
     */
    class CPResponse {
        /**
         * Liste des adresses renvoyées
         */
        adresses: ICPAdresse[];
        /**
         * Nombre d'adresses renvoyées
         */
        nbAdresse: number;
        /**
         * Meilleure correspondance parmi les adresses renvoyées
         */
        bestMatch: ICPAdresse;
        /**
         * Code erreur lié à l'appel
         */
        codeErreur: CodeDqeEnum;
        /**
         * Réponse originale du service
         */
        private reponse;
        /**
         * Création d'un objet CPResponse à partir de la réponse du service.
         */
        constructor(reponse: ICPResponse);
    }
}

declare module myway.comAdresseDqe {
    /**
     * Enumération des codes d'erreur de la méthode RNVP2 du service DQE
     */
    enum DQECodeErreurRNVPEnum {
        /**
         * Votre adresse est validée (aucune erreur)
         */
        VALIDE = 0,
        /**
         * Votre adresse n'a pas été validée par notre système (Non trouvée)
         */
        NON_TROUVE = 1,
        /**
         * Votre adresse demande une vérification manuelle.
         */
        VERIFICATION_MANUELLE = 3,
        /**
         * Le numéro est inexistant dans la voie.
         */
        NUMERO_INEXISTANT = 4,
        /**
         * Votre saisie est incomplète. Le système n'a pas pu déterminer précisément votre adresse
         */
        SAISIE_INCOMPLETE = 5,
    }
    /**
     * Interface de réponse de la méthode RNVP2 du service DQE
     */
    interface IRNVPResponse {
        /**
         * Collection d'objets adresse. Les index sont numérotés de 1 à n et ordonnés par pertinence.
         */
        [index: string]: IRNVPResponseAdresse;
    }
    /**
     * Interface d'une adresse liée à la méthode RNVP2 du service DQE
     */
    interface IRNVPResponseAdresse extends IRNVPAdresse {
        /**
         * Compte DQE
         */
        DQECompte: string;
        /**
         * Code détail (déprécié en faveur du code d'erreur)
         */
        DQECodeDetail: string;
        /**
         * Libellé de l'erreur (lié au code erreur)
         */
        DQELibErreur: string;
        /**
         * Code erreur
         */
        DQECodeErreur: string;
        /**
         * Pourcentage de correspondance de l'adresse (en pratique, ce champ est vide la plupart du temps!)
         */
        DQEPourcentErreur: string;
        /**
         * Province
         */
        Province: string;
        /**
         * Complément du numéro (pas utilisé)
         */
        CompNum: string;
        /**
         * Pays
         */
        Pays: string;
        /**
         * Numéro seul (pas utilisé)
         */
        NumSeul: string;
        /**
         * Ligne 2 AFNOR (pas utilisé)
         */
        Ligne2: string;
    }
    /**
     * Cette interface est une simplification de [[IRNVPResponseAdresse]] où toutes les informations non nécessaires ont été retirées.
     * Elle sera donc utilisée dans la classe [[RNVPResponse]].
     */
    interface IRNVPAdresse extends IDqeBaseLocalite, IDqeBaseVoie {
        /**
         * Type de voie (rue, avenue, ...)
         */
        TypeVoie: string;
        /**
         * Equivalent de la ligne 4 AFNOR qui correspond à la concaténation du numéro, de type de voie, et de la voie
         */
        Adresse: string;
        /**
         * Complément d'adresse
         */
        Complement: string;
        /**
         * Cedex
         */
        Cedex: string;
    }
    /**
     * Cette classe est un container pour la réponse de la méthode RNVP2 du service DQE.
     * Elle permet de simplifier et codifier l'exploitation du retour
     */
    class RNVPResponse {
        /**
         * Liste des adresses renvoyées
         */
        adresses: IRNVPAdresse[];
        /**
         * Nombre d'adresses renvoyées
         */
        nbAdresse: number;
        /**
         * Meilleure correspondance parmi les adresses renvoyées
         */
        bestMatch: IRNVPAdresse;
        /**
         * Code erreur lié à l'appel
         */
        codeErreur: CodeDqeEnum;
        /**
         * Réponse originale du service
         */
        private reponse;
        /**
         * Création d'un objet RNVPResponse à partir de la réponse du service.
         */
        constructor(reponse: IRNVPResponse, errorCode?: CodeDqeEnum);
        /**
         * Définit le code d'erreur à partir du code renvoyé par le service.
         */
        private setCodeErreur(code);
    }
}

declare module myway.comAdresseDqe {
    /**
     * Interface de réponse de la méthode SINGLE du service DQE
     */
    interface ISingleResponse {
        /**
         * Collection d'objets adresse. Les index sont numérotés de 1 à n et ordonnés par pertinence.
         */
        [index: string]: ISingleResponseAdresse;
    }
    /**
     * Interface d'une adresse liée à la méthode SINGLE du service DQE
     */
    interface ISingleResponseAdresse extends IDqeBaseLocalite, IDqeBaseVoie {
        /**
         * Type de voie (rue, avenue, ...)
         */
        TypeVoie: string;
        /**
         * Complément d'adresse
         */
        Complement: string;
    }
    /**
     * Cette classe est un container pour une adresse en réponse de la méthode SINGLE du service DQE.
     * Elle permet de simplifier son utilisation, notamment dans le cadre d'une liste de suggestions.
     */
    class SingleResponseAdresse {
        /**
         * ID de la localité
         */
        idLocalite: string;
        /**
         * Code postal
         */
        codePostal: string;
        /**
         * Localité
         */
        localite: string;
        /**
         * Lieu-dit
         */
        lieuDit: string;
        /**
         * ID de la voie
         */
        idVoie: string;
        /**
         * Libellé de la voie
         */
        voie: string;
        /**
         * Nombre de numéros dans la voie
         */
        nbNumero: string;
        /**
         * Numéro dans la voie
         */
        numero: string;
        /**
         * Liste des numéros dans la voie
         */
        listeNumero: string[];
        /**
         * Type de voie (rue, avenue, ...)
         */
        typeVoie: string;
        /**
         * Complément d'adresse
         */
        complement: string;
        /**
         * Création d'un objet SingleResponseAdresse à partir de l'interface d'une adresse en réponse du service
         */
        constructor(adresse: ISingleResponseAdresse);
        /**
         * Renvoie la ligne 4 AFNOR qui correspond à la concaténation du numéro, de type de voie, et de la voie
         */
        getLigne4Afnor(): string;
        /**
         * Renvoie une représentation lisible mais pas forcément exhaustive de l'objet SingleResponseAdresse sous forme de chaine de caractères.
         * Elle sera notamment utilisée dans la liste de suggestions.
         */
        toString(): string;
    }
}
