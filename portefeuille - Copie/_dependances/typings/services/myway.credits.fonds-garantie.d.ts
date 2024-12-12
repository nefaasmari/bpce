
declare module FondsGarantie {
    var app: any;
}

declare module FondsGarantie.Constantes {
    module Habilitation {
        var CONSULTATION: string;
        var ADMIN: string;
    }
    module Rest {
        var URL_REST: string;
        var ENTITE_TITULAIRE: string;
        var FONDS_GARANTIE: string;
        var SINISTRE: string;
        var SINISTRE_PARAMETRE: string;
        var TIERS: string;
    }
    module Popup {
        /** Fermer */
        var BOUTON_FERMER: string;
        /** Annuler */
        var BOUTON_ANNULER: string;
        /** Valider */
        var BOUTON_VALIDER: string;
        var RECHERCHE_PERSONNES: string;
        var MODIFICATION_FONDS: string;
        var CONFIRMER_MODIFICATION: string;
        var URL_RECHERCHE_PERSO: string;
        var CTRL_RECHERCHE_PERSO: string;
    }
    module Evenement {
        var AFFICHER_CONSULTATION: string;
        var AFFICHER_VERSEMENT_PARRAIN: string;
        var RETOUR_SAISIE_SINISTRE: string;
        var RETOUR_CONSULTATION_SINISTRE: string;
    }
    module Controleur {
        var ANNULATION_SINISTRE: string;
        var APPLICATION: string;
        var CONSULTATION_FONDS: string;
        var CONSULTATION_SINISTRE: string;
        var CREATION_FONDS: string;
        var CREATION_SINISTRE: string;
        var PARRAIN: string;
        var REMBOURSEMENT: string;
        var RECHERCHE_CLIENT: string;
        var INFORMATION_FONDS: string;
        var RECHERCHE_FONDS_GARANTIE: string;
        var SINISTRE_DIRECTIVE: string;
        var SINISTRE_JOURNEE: string;
    }
    module Service {
        var FOOTER: string;
        var CONSULTATION_FONDS: string;
        var POPUP: string;
        var FONDS: string;
        var REMBOURSEMENT: string;
        var EXCEL: string;
        var PARRAIN: string;
        var MOCK_LOADER: string;
        var HABILITATION: string;
    }
    module Inject {
        var SERVICE_AGENT: string;
        var $SCOPE: string;
        var $ROUTE: string;
        var $MODAL_INSTANCE: string;
    }
    module Directive {
        var INFORMATION_FONDS: string;
        var RECHERCHE_FONDS: string;
    }
    module Url {
        var CREATION_FONDS: string;
        var CONSULTATION_FONDS: string;
        var PARRAIN: string;
        var REMBOURSEMENT: string;
        var CREATION_SINISTRE: string;
        var CONSULTATION_SINISTRE: string;
        var ANNULATION_SINISTRE: string;
    }
}

declare module FondsGarantie.Controleurs {
    /**
     * Interface contenant les données de l'écran actuelle
     * Ces données sont à définir dans le resolve des routes dans app.ts
     */
    interface IRouteActuelle extends ng.route.ICurrentRoute {
        locals: {
            $scope: ng.IScope;
            $template: string;
        };
    }
    /** Service route de l'application */
    interface IApplicationRoute extends ng.route.IRouteService {
        current: IRouteActuelle;
    }
    /** Controleur de l'application */
    class ApplicationControleur {
        private serviceAgentExtended;
        private scope;
        private $route;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Url du footer pour la page actuelle */
        footerTemplateUrl: string;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, scope: ng.IScope, $route: IApplicationRoute);
    }
}

declare module FondsGarantie {
}

declare module FondsGarantie.Controleurs {
    /**
     * Contrôleur de l'écran de la saisie des versements des parrains
     * @author S0077481
     */
    class ParrainControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgent;
        private $scope;
        private $route;
        private popupService;
        private parrainService;
        static $inject: string[];
        private tableauSelectionFonds;
        private showBoutonSelection;
        private isRechercheEffectuee;
        /**
         * Indique si le parrain a déj effectué des versements ou non
         * S'il a déjà effectué un versement, la liste de ses versements est affiché
         * La sélection d'un fonds est affiché sinon
         */
        private parrainDejaVersement;
        /**
         * Indique si la sélection du parrain est affichée
         * true : affichée
         * false: non (versement affiché)
         */
        private selectionParrain;
        private numParrain;
        private encours;
        private libelleParrain;
        private typeMontant;
        private montantOperation;
        private participationSelected;
        private caracFonds;
        private chargementParticipation;
        private isFooterAffiche;
        private rechercheParrainEnCours;
        private chargementFonds;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $route: ng.route.IRouteService, popupService: Services.Application.IPopupService, parrainService: Services.Application.IParrainService);
        rechercherPersonne(): void;
        onSelectionChange(selectedObject: Modeles.Fonds.IElementParticipation): void;
        rechercherVersementParrain(): void;
        ajouterFonds(): void;
        consulterVersementParrain(): void;
        annuler(): void;
        valider(): void;
    }
}

declare module FondsGarantie.Controleurs {
    class RechercheClientControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgent;
        private $modalInstance;
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        personnePhysique: any;
        personneMorale: any;
        private isAfficherTableau;
        private tableauPersonne;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        onSelectionChange(selectedLine: any): void;
        afficherTableau(): void;
        rechercherPersonneMorale(personneMorale: any): void;
        rechercherPersonnePhysique(personnePhysique: any): void;
        /** Fermeture de la modale */
        close(): void;
        /** Fermeture de la modale et renvoi du modèle choisi */
        valider(): void;
    }
}

declare module FondsGarantie.Controleurs {
    class RemboursementControleur {
        private serviceAgent;
        private $scope;
        private remboursementService;
        private popupService;
        static $inject: string[];
        private tableauParticipationParFonds;
        private modeRestitutionComboBox;
        private listeEtatRemboursement;
        private chargementParticipation;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, remboursementService: Services.Application.IRemboursementService, popupService: Services.Application.IPopupService);
        valider(): void;
        annuler(): void;
        extraire(): void;
    }
}

declare module FondsGarantie.Filtre {
}

declare module FondsGarantie.Filtre {
}

declare module FondsGarantie.Filtre {
}

declare module FondsGarantie.Filtre {
}

declare module FondsGarantie.Controleurs {
    /**
     * Controleur de l'écran consultation des fonds
     */
    class ConsultationFondsControleur {
        private serviceAgent;
        private $scope;
        private popupService;
        private habilitationService;
        private fondsService;
        private caracFondsService;
        /** Dépendances */
        static $inject: string[];
        private userAdmin;
        private isConsultationAffiche;
        private isFooterAffiche;
        /** Initialisation */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, popupService: Services.Application.IPopupService, habilitationService: Services.Application.IHabilitationService, fondsService: Services.Application.IFondsService, caracFondsService: Services.Rest.Fonds.ICaracteristiqueFondsService);
        /**
         * Validation des modifications
         * Ouverture d'une popup de confirmation
         */
        valider(): void;
        /** Retour à la recherche du fonds */
        annuler(): void;
    }
}

declare module FondsGarantie.Controleurs {
    /**
     * Contrôleur de l'écran de création des fonds
     */
    class CreationFondsControleur {
        private serviceAgent;
        private $location;
        private $scope;
        private popupService;
        private fondsService;
        private caracteristiqueFondsService;
        static $inject: string[];
        private creationEnCours;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, $scope: ng.IScope, popupService: Services.Application.IPopupService, fondsService: Services.Application.IFondsService, caracteristiqueFondsService: Services.Rest.Fonds.ICaracteristiqueFondsService);
        /** Valider la création */
        valider(): void;
        annuler(): void;
    }
}

declare module FondsGarantie.Controleurs {
    /**
     * Contrôleur de l'écran de consultation des sinistres
     */
    class ConsultationSinistreControleur {
        private serviceAgent;
        private $scope;
        private habilitation;
        /** Dépendances */
        static $inject: string[];
        /**
         * Contrôle l'affichage du détail des sinistre
         * True : consultation affichée
         * False : sinistres du jour affichés
         */
        isConsultation: boolean;
        private userAdmin;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, habilitation: Services.Application.IHabilitationService);
    }
}

declare module FondsGarantie.Controleurs {
    /** Contrôleur de l'écran de création des sinistres */
    class CreationSinistreControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgent;
        private $scope;
        private popupService;
        private creationSinistreService;
        static $inject: string[];
        private numeroCreance;
        /** Indique si une créance a été recherchée pour pouvoir afficher le tableau des résultats */
        private isCreanceSelectionnee;
        /** Indique si une ligne du tableau garantie est sélectionnée ou non */
        private isGarantieSelectionnee;
        /**
         * Affichage de la consultation du sinistre
         * True : affichage de la sélection de la garantie
         * False : création du sinistre
         */
        private isSelectionSinistre;
        private tableauGarantie;
        private rechercheCreanceEnCours;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, popupService: Services.Application.IPopupService, creationSinistreService: Services.Application.ICreationSinistreService);
        /**
         * Recherche de la créance choisie
         */
        rechercherCreance(): void;
        /** Fonction appelée lors de la sélection d'une ligne du tableau */
        onSelectionChange(selectedLine: any): void;
        /**
         * Recherche du sinistre
         */
        selectionGarantie(): void;
    }
}

declare module FondsGarantie.Directives {
    class InformationFondsControleur {
        private serviceAgentExtended;
        private $scope;
        private popupService;
        private fondsService;
        private regleSinistreService;
        private contexteService;
        private informationFondsService;
        static $inject: string[];
        private statutCreationComboBox;
        private situationFondsComboBox;
        private numPersonne;
        private libellePersonne;
        private mode;
        private listeRegleSinistre;
        private fonds;
        private chargementRegleSinistre;
        private chargementPersonne;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, popupService: Services.Application.IPopupService, fondsService: Services.Application.IFondsService, regleSinistreService: Services.Rest.RegleSinistre.IRegleSinistreService, contexteService: Services.Application.IContexteService, informationFondsService: IInformationFondsService);
        /** Ouverture de la popup de recherche de personnes morales ou physiques */
        rechercherPersonne(): void;
    }
}

declare module FondsGarantie.Directives {
    /**
     * Directive affichant des informations en haut de l'application
     * Ces informations sont à transmettre à l'attribut informations-eps
     */
    function infoFonds(): ng.IDirective;
}

declare module FondsGarantie.Directives {
    interface IInfosPersonne {
        identifiant?: number;
        libellePersonne: string;
    }
    interface IInformationFondsService {
        rechercheDesignationPersonne(identifiant?: number): ng.IPromise<IInfosPersonne>;
    }
}

declare module FondsGarantie.Directives {
    class MwPourcentageControleur {
        private serviceAgentExtended;
        static $inject: string[];
        private montant;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        checkNumber(): void;
    }
}

declare module FondsGarantie.Directives {
    /**
     *
     */
    function mwPourcentage(): ng.IDirective;
}

declare module FondsGarantie.Directives {
    interface IScopeBoutonOuiNon extends ng.IScope {
        actif: boolean;
        id: string;
        valeur: string;
    }
    /**
     * Controleur de la directive mwChoixOuiNon
     */
    class BoutonOuiNonControleur {
        private $rootScope;
        private $scope;
        private serviceAgent;
        static $inject: string[];
        actif: boolean;
        id: string;
        valeur: string;
        constructor($rootScope: ng.IRootScopeService, $scope: IScopeBoutonOuiNon, serviceAgent: MyWay.Services.ServiceAgent);
    }
}

declare module FondsGarantie.Directives {
    /**
     * Directive permettant l'affichage d'un choix avec réponses possibles Oui ou Non.
     * Utilisation  <mw-choix-oui-non ng-modele="Controleur.variable" id="id-a-changer">Texte</mw-choix-oui-non>
     * Attributs :
     *  ng-modele : Variable dans laquelle sera stocké le choix de l'utilisateur (true pour Oui, false pour Non)
     *  ng-etat   : Activation ou non des boutons
     *  id        : Id (unique) de la directive
     */
    function boutonOuiNon(): ng.IDirective;
}

declare module FondsGarantie.Directives {
    interface IRechercheFondsModele {
        numeroFonds?: number;
        libelleFonds?: string;
        numPersonne: number;
    }
    interface ILigneSelectionne extends Modeles.Fonds.ICaracteristiqueFond {
        checked: boolean;
    }
    /** Contrôleur de la directive de recherche des fonds de garantie */
    class RechercheFondsGarantieControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgentExtended;
        private popupService;
        private $scope;
        private fondsService;
        private rechercherFondsGarantieService;
        /** Dépendances */
        static $inject: string[];
        private isAfficherTableau;
        private isAfficherBoutonDetail;
        private tableauResultat;
        private selectedLigne;
        private parrain;
        private donneesRecherche;
        private libellePersonne;
        private chargementEnCours;
        private chargementPersonne;
        private resultRecherchePersonne;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, popupService: Services.Application.IPopupService, $scope: ng.IScope, fondsService: Services.Application.IFondsService, rechercherFondsGarantieService: IRechercheFondsGarantieService);
        /**
         * Ouverture de la popup de recherche de personne
         */
        rechercherPersonne(): void;
        verifierParametre(): boolean;
        /**
         * Rechercher un fonds de garantie
         * Si résultat, le tableau est affiché
         */
        rechercherFonds(): void;
        /**
         * Sélection d'une ligne du tableau
         */
        onSelectionChange(selectedObject: ILigneSelectionne): void;
        /** Affichage du détail de la ligne sélectionnée (consultation fonds) */
        consulterFonds(): void;
        /** Affichage des versements du parrain pour le fonds sélectionné */
        selectionFondsParrain(): void;
    }
}

declare module FondsGarantie.Directives {
    function rechercheFonds(): ng.IDirective;
}

declare module FondsGarantie.Directives {
    interface IRechercheFondsGarantieService {
        rechercheDesignationPersonne(identifiant?: number): ng.IPromise<IInfosPersonne>;
        searchFondsGarantie(donneesRecherche: IRechercheFondsModele): ng.IPromise<Modeles.Fonds.IRecherche>;
        searchCaracFondsGarantie(numeroFonds: number): ng.IPromise<Modeles.Fonds.ICaracteristiqueFond>;
    }
}

declare module FondsGarantie.Directives {
    class SinistreDirectiveControleur {
        private serviceAgentExtended;
        private $scope;
        private mockLoader;
        private habilitation;
        static $inject: string[];
        private garantie;
        private montant;
        private totalCreance;
        private totalMontantRecouvrer;
        private donneesSinistre;
        private mode;
        private userAdmin;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, mockLoader: Services.Rest.IMockLoaderService, habilitation: Services.Application.IHabilitationService);
        annuler(): void;
        fermerConsultation(): void;
        calculerTotalCreance(sinistre: any): number;
        calculerMontantRecouvrer(sinistre: any): number;
    }
}

declare module FondsGarantie.Directives {
    /**
     * Directive affichant des informations en haut de l'application
     * Ces informations sont à transmettre à l'attribut informations-eps
     */
    function sinistreDirectve(): ng.IDirective;
}

declare module FondsGarantie.Directives {
    /**
     * Contrôleur de la directive mwSinistreJournee
     */
    class SinistreJourneeControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgentExtended;
        private $scope;
        /** Dépendances */
        static $inject: string[];
        private isLigneSelect;
        private tableauSinistre;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope);
        /** Sélection d'une ligne du tableau */
        onSelectionChange(selectedLine: any): void;
        /** Consultation du sinistre sélectionné */
        consulterSinistre(): void;
    }
}

declare module FondsGarantie.Directives {
    /**
     * Directive affichant les sinistres crées dans la journée
     */
    function sinistreJourneeDirectve(): ng.IDirective;
}

/***
 * Ensemble d'énumérations de l'objet fonds de garantie
 * @author S0077481 (Kevin Garrido)
 */
declare module FondsGarantie.Enumerations.Commun {
    enum OuiNonEnum {
        OUI,
        NON,
    }
    enum ModeFonctionnementFonds {
        CONSULTATION,
        CREATION,
    }
}

/**
 * Ensemble d'énumérations de l'écran remboursement
 * @author S0077481 (Kevin Garrido)
 */
declare module FondsGarantie.Enumerations.Operation {
    module TypeOperationEnum {
        var ANNULATION: string;
        var VERSEMENT: string;
    }
}

/**
 * Ensemble d'énumérations de l'écran remboursement
 * @author S0077481 (Kevin Garrido)
 */
declare module FondsGarantie.Enumerations.Remboursement {
    module ModeRestitutionEnum {
        var CHEQUE: string;
        var VIREMENT_INTERNE: string;
        var VIREMENT_EXTERNE_SEPA: string;
    }
}

/***
 * Ensemble d'énumérations de l'objet fonds de garantie
 * @author S0077481 (Kevin Garrido)
 */
declare module FondsGarantie.Enumerations.Fonds {
    module SituationFondsEnum {
        var ACTIF: string;
        var TERMINE: string;
        var EXTINCTION: string;
        var LIQUIDATION: string;
    }
    module StatutCreationEnum {
        var NOUVEAU: string;
        var REPRIS: string;
    }
    module TypeFondsEnum {
        var INTERNE: string;
        var EXTERNE: string;
    }
}

/***
 * Ensemble d'énumérations de l'objet fonds de garantie
 * @author S0077481 (Kevin Garrido)
 */
declare module FondsGarantie.Enumerations.Fonds {
    module EtatParticipationEnum {
        var EN_ATTENTE: string;
        var A_REMBOURSER: string;
        var REMBOURSABLE: string;
    }
}

declare module FondsGarantie.Modeles {
    /**
     * Modèle de l'objet à passer en paramètre au service d'ouverture d'une fenêtre modale complexe
     */
    interface IElement {
        code: string;
        libelle: string;
    }
}

declare module FondsGarantie.Modeles {
    /**
     * Modèle de l'objet à passer en paramètre au service d'ouverture d'une fenêtre modale complexe
     */
    interface ILigneTableau {
        checked: boolean;
    }
}

declare module FondsGarantie.Modeles {
    /**
     * Modèle de l'objet à passer en paramètre au service d'ouverture d'une fenêtre modale complexe
     */
    interface IPopupData<T> {
        closeButtonText: string;
        actionButtonText: string;
        headerText: string;
        iconName: string;
        bodyText: string;
        model?: T;
    }
}

declare module FondsGarantie.Modeles.EntiteTitulaire {
    interface IInformationEntiteTitulaire {
        /**
         * undefined
         */
        listeCompositionEntiteTitulaire: Array<ICompositionEntiteTitulaire>;
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        CaracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        /**
         * undefined
         */
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        /**
         * undefined
         */
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         * - 1 Usage privé
         * - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         * - 1 mode simple
         * - 2 mode joint entre époux
         * - 3 mode joint entre tiers
         * - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         * - 0 Actif
         * - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         */
        dateMAJEntiteTitulaire: Date;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         * - ' ' Non clôturé
         * - '1' Plus d'activité bancaire
         * - '2' Décédé
         * - '3' Transféré
         * - '4' Incident
         * - '5' Indésirable
         * - '6' Séparé
         * - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        /**
         * Date de fermeture de l'entité titulaire.
         */
        dateClotureEntiteTitulaire: Date;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         * - 1 Mode indivision successorale
         * - 2 Mode indivision conventionnel avec solidarité
         * - 3 Mode indivision conventionnel sans solidarité
         */
        sousCodeModeCompositionET: string;
        /**
         * Numéro d'identification de l' agent de gestion de l'entité titulaire.
         */
        codeAgentGestionEntiteTitulaire: number;
        /**
         * Libellé de l'EDS de Gestion de l'entité titulaire.
         */
        libelleEDSGestionEntiteTitulaire: string;
        /**
         * Libellé associé au Code Etat de l'entité titulaire.
         */
        libelleEtatEntiteTitulaire: string;
        /**
         * Libellé associé au Type de désignation de l'entité titulaire.
         */
        libelleTypeDesignationEntiteTitulaire: string;
        /**
         * Libellé associé au Code usage de l"entité titulaire.
         */
        libelleUsageEntiteTitulaire: string;
        /**
         * Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        /**
         * Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        /**
         * Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique.
         */
        identifiantAdresseEntiteTitulaire: number;
        /**
         * Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire, du mode de composition et de l'usage.
         * Valeurs :
         * POUR ET MODE SIMPLE
         * 11 Désignation de la personne
         * POUR ET A USAGE PROFESSIONNEL
         * 21 Nom commercial
         * 22 Désignation courte de l'établissement
         * 23 Enseigne commerciale de l'établissement
         * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         * PRIVE
         * 31 Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32 Mr ou Mme+nom patronymique Mr+nom
         * patronymique Mme+prénom Mme
         * POUR ET MODE JOINT ET USAGE PRIVE
         * 41 Désignation personne 1 ou désignation
         * personne 2
         * 42 Désignation personne 2 ou désignation
         * personne 1
         *
         * 99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
        /**
         * Type élément structure
         */
        typeElementStructure: string;
        /**
         * Référence externe du Domicilié à = EDS de domiciliation de l'entité titulaire
         */
        refExterneEDSDomiciliationET: number;
        /**
         * Référence externe du Géré par = EDS de gestion de l'entité titulaire
         */
        refExterneEDSGestionET: number;
        /**
         * identifiant élement de structure du guichet de l'entité titulaire
         */
        identifiantEDSGuichet: number;
        /**
         * Nouvelle identifiant élement de structure gestion de l'entité titulaire
         */
        identEDSGestionETNouveau: number;
        /**
         * Nouvelle identifiant élement de structure domicilation de l'entité titulaire
         */
        identEDSDomiciliationETNouveau: number;
        /**
         * undefined
         */
        identifiantElementStructure: number;
    }
    interface IPersonneEntiteTitulaire {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe BPCE.
         * Numéro chrono attribué par le système.
         * Une personne morale est enregistrée sous une seule activité : valeur 1.
         * Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono.
         * Un professionnel est référencé dans le SI d'un Etablissement du Groupe BPCE par :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * Constitue une référence unique dans MYSYS.
         */
        identifiantProfessionnel: number;
        /**
         * Numéro d'identification du lieu d'activité d'un
         * professionnel dans le SI d'un Etablissement du Groupe BPCE.
         * Implantation d'une activité d'un professionnel.
         * Peut correspondre à un établissement au sens INSEE.
         * Numéro chrono attribué par le système.
         * Identification du lieu :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         * - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         * - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
         * Valeurs :
         * '0' non responsable
         * '1' responsable
         */
        indicateurResponsableCompteET: string;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire.
         * Numéro chrono attribué par le système à chaque création de personne dans l'ET.
         */
        codeRangEntiteTitulaire: string;
        /**
         * Indique quelle est la nature du lien Personne / Entité titulaire.
         * Valeurs :
         * PE : Lien Entité Titulaire / Personne
         * PR : Lien Entité Titulaire / Professionnel
         * LA : Lien Entité Titulaire / Lieu d'activité
         */
        natureLienET: string;
        /**
         * Pourcentage de Nue Propriété (valeur max 100,00 %)
         */
        pourcentageNuePropriete: number;
        /**
         * Pourcentage de pleine propriété (valeur max 100,00 %)
         */
        pourcentagePleinePropriete: number;
        /**
         * Pourcentage d'usufruit (valeur max 100,00 %)
         */
        pourcentageUsufruit: number;
        /**
         * Dénomination commerciale se rapportant à un fonds
         * de commerce exploité par une société ou assimilée
         * Nom commercial du professionnel. C'est la dénomination vis à vis de la clientèle. Elle peut correspondre à l'enseigne. Une société peut avoir un nom commercial différent pour chacun des fonds de commerce qu'elle exploite.
         * Exemples :  La Samaritaine, But ...
         */
        nomCommercialProfessionnel: string;
        /**
         * Enseigne du lieu d'activité d'un professionnel.
         * Signe/marque/appellation apposé sur un établissement commercial le distinguant des autres établissements. L'enseigne peut être commune.
         * Elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         * Exemple : Café du Commerce
         */
        enseigneCommercialeLieuActivite: string;
        /**
         * Libellé court du lieu d'activité du Professionnel.
         */
        designationCourteLieuActivite: string;
        /**
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         * - Désignation courte du particulier si personne physique
         * - Nom commercial si professionnel
         * - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationTiers: string;
        /**
         * Personne titulaire à qui on a affecté l'adresse de l'entité titulaire. (Notion non applicable aux usufruitiers).
         */
        indicateurAffectationAdresse: boolean;
    }
}

declare module FondsGarantie.Modeles.Fonds {
    interface ICaracteristiqueFond {
        /**
         * *
         */
        codeEtablissement: string;
        /**
         * Identifiant du FdG.
         * Propriété inutilisée en POST.
         */
        numeroFondsGarantie: number;
        /**
         * Libelle long du FdG.
         */
        libelleFondsGarantie: string;
        /**
         * Libelle court du FdG.
         */
        designationFonds: string;
        /**
         *
         */
        numeroPersonneGestionnaire: number;
        libellePersonne: string;
        /**
         *
         */
        dateDebut: Date;
        /**
         *
         */
        dateFin: Date;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        dateDerniereMiseAJour: Date;
        /**
         * Propriété inutilisée en POST.
         */
        codeSituation: string;
        /**
         * *
         */
        codeStatutCreation: string;
        /**
         * Propriété inutilisée en POST.
         */
        typeFondsGarantie: string;
        /**
         * *
         */
        codeCalculInteret: string;
        /**
         * *
         */
        indiceTauxCalculInteret: string;
        /**
         * *
         */
        tauxMarge: number;
        /**
         * *
         */
        indicateurRepartitionInteret: string;
        /**
         *
         */
        codeRegleSinistre: string;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        libelleRegleSinistre: string;
        /**
         *
         */
        indicateurOptionRemboursement: string;
        /**
         *
         */
        delaiRemboursement: number;
        /**
         *
         */
        indicateurOptionReleveAnnuel: string;
        /**
         *
         */
        codeDeviseFondsGarantie: string;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        codeBanqueContributive: string;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        dateDerniereOperation: Date;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        dateDernierArrete: Date;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        dateDerniereContribution: Date;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        dateDernierRemboursement: Date;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        encours: number;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        encoursDernierArrete: number;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        encoursFinMois: number;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        encoursParticipationsClient: number;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        encoursParticipationsParrain: number;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        encoursInterets: number;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        cumulSinistre: number;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        cumulRemboursement: number;
        /**
         * Propriété inutilisée en POST ou PUT.
         */
        tauxCalculInteretDernierArrete: number;
    }
}

declare module FondsGarantie.Modeles.Fonds {
    interface IOperation {
        codeEtablissement: string;
        codeTypeSouscripteur: string;
        numeroPersonneParrain: number;
        numeroFondsGarantie: number;
        montantVersement: number;
        codeDeviseVersement: string;
    }
}

declare module FondsGarantie.Modeles.Fonds {
    interface IParticipationParFonds {
        libelleFondsGarantie: string;
        participations: Array<Modeles.Fonds.IElementParticipation>;
    }
    interface IParticipation {
        listeParticipations: Array<IElementParticipation>;
    }
    interface IElementParticipation extends ILigneTableau {
        codeEtablissement: string;
        numeroParticipation: number;
        codeTypeSouscripteur: string;
        identifiantSouscripteur: number;
        numeroPersonneParrain: number;
        libelleParrain: string;
        numeroFondsGarantie: number;
        libelleFondsGarantie: string;
        codeBanqueContributive: string;
        identifiantGarantie: number;
        identifiantCreance: number;
        numeroCreance: string;
        dateDebut: Date;
        dateFin: Date;
        dateDerniereOperationFonds: Date;
        indicateurSinistre: string;
        codeSituationRemboursement: string;
        codeStatutCreation: string;
        encours: number;
        encoursFinMois: number;
        cumulVersements: number;
        cumulContributionsSolidaires: number;
        cumulContributionsDirectes: number;
        dateDernierReleve: Date;
        numeroDernierReleve: number;
        encoursDernierReleve: number;
        typeReglementClient: string;
        typeGarantie: string;
        codeModeReglement: string;
    }
}

declare module FondsGarantie.Modeles.Fonds {
    interface IRecherche {
        listeRecherches: Array<ICaracteristiqueFond>;
    }
}

declare module FondsGarantie.Modeles.RegleSinistre {
    interface IRegleSinistre {
        listeReglesSinistre: Array<IElementRegleSinistre>;
    }
    interface IElementRegleSinistre {
        codeEtablissement: string;
        codeRegleSinistre: string;
        libelleRegleSinistre: string;
        ordreRepartitionSinistre: number;
        ordreRepartitionInterets: number;
        ordreRepartitionParrain: number;
        ordreRepartitionClient: number;
        ordreRepartitionParrainClient: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        tauxRepartitionParrain: number;
    }
}

declare module FondsGarantie.Modeles.Sinistre {
    interface ISimulationSinistre {
        montantContributionsSinistre: number;
        montantContributionInterets: number;
        montantContributionSolidairePar: number;
        montantContributionSolidaireCli: number;
    }
}

declare module FondsGarantie.Modeles.Sinistre {
    interface ISinistre {
        listeSinistres: Array<IElementSinistre>;
    }
    interface IElementSinistre {
        numeroCreance: string;
        numeroPersonneParrain: number;
        codeEtablissement: string;
        identifiantSinistre: number;
        identifiantCreanceSinistree: number;
        identifiantSouscripteur: number;
        numeroFondsGarantie: number;
        libelleFondsGarantie: string;
        libelleSinistre: string;
        dateSinistre: Date;
        dateMisEnJeuFonds: Date;
        codeStatutSinistre: string;
        libelleSituationSinistre: string;
        dateModificationStatutSinistre: Date;
        codeRegleSinistre: string;
        libelleRegleSinistre: string;
        montantInitialSinistre: number;
        montantMisEnJeuSinistre: number;
        montantContributionsSinistre: number;
        montantContributionInterets: number;
        montantContributionSolidaireCli: number;
        montantContributionSolidairePar: number;
    }
}

declare module FondsGarantie.Modeles.Tableaux {
    class TableauGarantieCreance implements MyWay.UI.ImwTableOptions {
        tableauColonneOptionsCreance: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsGarantie: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLibelleFonds: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modeles.Fonds.IElementParticipation>;
        selectedItems: Array<Modeles.Fonds.IElementParticipation>;
        templateUrl: string;
        selectionChangeHandler: any;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module FondsGarantie.Modeles.Tableaux {
    class TableauParticipationParrain implements MyWay.UI.ImwTableOptions {
        tableauColonneOptionsParticipation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLibelleFonds: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMontantEncoursParticipation: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modeles.Fonds.IElementParticipation>;
        selectedItems: Array<Modeles.Fonds.IElementParticipation>;
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module FondsGarantie.Modeles.Tableaux {
    class TableauPersonne implements MyWay.UI.ImwTableOptions {
        tableauSampleData: {
            numPersonne: string;
            numClientBancaire: string;
            nom: string;
            prenom: string;
        }[];
        tableauColonneOptionsNumPersonne: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNumClientBancaire: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNom: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsPrenom: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNumeroSiren: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: {
            numPersonne: string;
            numClientBancaire: string;
            nom: string;
            prenom: string;
        }[];
        selectedItems: any[];
        templateUrl: string;
        selectionChangeHandler: any;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module FondsGarantie.Modeles.Tableaux {
    class TableauResultatsFonds implements MyWay.UI.ImwTableOptions {
        tableauColonneOptionsNumFonds: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLibelleFonds: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNumPersonne: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNomGestionnaire: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modeles.Fonds.ICaracteristiqueFond>;
        selectedItems: Array<Modeles.Fonds.ICaracteristiqueFond>;
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module FondsGarantie.Modeles.Tableaux {
    class TableauSinistre implements MyWay.UI.ImwTableOptions {
        tableauSampleData: {
            creance: string;
            clientBancaire: string;
            libelleSinistre: string;
            montant: number;
            fonds: string;
        }[];
        tableauColonneOptionsCreance: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsClientBancaire: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLibelleSinistre: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMontant: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsFonds: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: {
            creance: string;
            clientBancaire: string;
            libelleSinistre: string;
            montant: number;
            fonds: string;
        }[];
        selectedItems: any[];
        templateUrl: string;
        selectionChangeHandler: any;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module FondsGarantie.Modeles.Tiers {
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
        dateEntreeRelation: Date;
        codeGuichetRisque: string;
        eligibiliteTiers: string;
        identifiantEDSDomiciliation: string;
        indicateurDroitCompte: string;
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
        dateNaissance: Date;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        codeDepartementNaissance: string;
        libelleDepartementNaissance: string;
        codeInseePaysNationalite: string;
        libelleNationalite: string;
        dateDeces: Date;
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
        dateEffetSituationFamille: Date;
        codeRegimeMatrimonial: string;
        libelleRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        codeCategorieSocioProf: string;
        libelleCsp: string;
        dateEffetCsp: Date;
        nomEmployeur: string;
        numeroSirenEmployeurPrincipal: string;
        dateEmbaucheParEmployeurActuel: Date;
        codeTypeContratTravail: string;
        libelleCodeTypeContratTravail: string;
        dateFinContrat: Date;
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
        dateObtentionPieceJustificative: Date;
        referencePieceJustificative: string;
        noIdentificationFiscaleNifNni: string;
        codeTypeNifNni: string;
        dateNaturalisation: Date;
        dateNaissanceConjoint: Date;
        indicDecesPresume: string;
        dateDecesPresume: Date;
        eligibiliteTiers: string;
        indicDroitCompte: string;
        numeroSirenAutoEntrepreneur: string;
        dateEffetOptionResidence: Date;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        libelleStatutFatca: string;
        dateAttributionStatutFatca: Date;
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
        dateCreationJuridique: Date;
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
        dateDebutOptionEirl: Date;
        dateFinOptionEirl: Date;
        indicOptionOpposabiliteEirl: string;
        indicPersMoraleOrganismePublic: string;
        indicPersMoraleMarcheReglemente: string;
        indicEditionBenefrEffectifs: string;
        identifiantLei: string;
        codeEmir: string;
        dateClotureJuridiqueProf: Date;
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
        dateDebut: Date;
        dateFin: Date;
        activiteEconomiqueReelleLieu: string;
        dateEnregistrementLieuActivite: Date;
        dateDerniereMiseAJourLieu: Date;
        dateDerniereVerifLieuActivite: Date;
        designationLongueLieuActivite: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeResident: string;
        dateDernTracageApeProf: Date;
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
        dateDernierRetourPttAdresse: Date;
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

declare module FondsGarantie.Services.Application {
    interface IDonneesContexteModele {
        codeEtablissement: string;
    }
    interface IContexteService {
        getServiceAgent(): ng.IPromise<MyWay.Services.ServiceAgentExtended>;
        getDonneesContexte(): ng.IPromise<IDonneesContexteModele>;
    }
}

declare module FondsGarantie.Services.Application {
    interface IDonneesFondsGarantie {
        getDonnees(): any;
        setDonnees(donnees: any): void;
        reset(): void;
    }
}

declare module FondsGarantie.Services.Application {
    interface IExcelService {
        exportExcel(nomFichier: string, tableau: any[]): boolean;
    }
}

declare module FondsGarantie.Services.Application {
    interface IFondsService {
        initFonds(mode: Enumerations.Commun.ModeFonctionnementFonds): void;
        getFonds(): Modeles.Fonds.ICaracteristiqueFond;
        setFonds(fonds: Modeles.Fonds.ICaracteristiqueFond): void;
    }
}

declare module FondsGarantie.Services.Application {
    interface IFooterService {
        afficherFooter(afficher: boolean): void;
        isFooterAffiche(): boolean;
    }
}

declare module FondsGarantie.Services.Application {
    interface IHabilitationService {
        isProfilConsultation(): ng.IPromise<boolean>;
        isProfilAdmin(): ng.IPromise<boolean>;
    }
}

declare module FondsGarantie.Services.Application {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupService {
        /**
         * Permet d'ouvrir une popup simple d'informations
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
        /**
         * Ouverture d'une popup demandant la confirmation d'une action
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * @param {validerTexte} Texte du bouton de validation
         * @param {closeTexte} Texte du bouton de fermeture
         */
        showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: Modeles.IPopupData<any>): ng.IPromise<any>;
    }
}

declare module FondsGarantie.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module FondsGarantie.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module FondsGarantie.Services.Rest {
    /**
     * Classe de fonction utilitaire pour les services de l'application
     * @author S0077481
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

declare module FondsGarantie.Services.Application {
    interface ICaracFondsModele {
        caracFonds: Modeles.Fonds.ICaracteristiqueFond;
        libelleParrain?: string;
    }
    interface IParrainService {
        rechercheParrain(identifiantClientBancaire: number): ng.IPromise<string>;
        rechercherVersementParrain(identifiantParrain: number): ng.IPromise<Modeles.Fonds.IParticipation>;
        recupererCaracFonds(identifiantFonds: number, identifiantParrain?: number): ng.IPromise<ICaracFondsModele>;
        majOperation(typeOpe: string, montantOperation: number, numeroParrain: number, fonds: Modeles.Fonds.ICaracteristiqueFond): ng.IPromise<void>;
    }
}

declare module FondsGarantie.Services.Application {
    /**
     * Fonction utiles au controleur de l'écran des participations remboursables
     */
    interface IRemboursementService {
        getListeRemboursements(): ng.IPromise<Array<Modeles.Fonds.IParticipationParFonds>>;
        trierParticipationsParFonds(participations: Array<Modeles.Fonds.IElementParticipation>): Array<Modeles.Fonds.IParticipationParFonds>;
        extraireExcel(): void;
        getLignesModifiees(listeParticipations: Array<Modeles.Fonds.IParticipationParFonds>): Array<Modeles.Fonds.IElementParticipation>;
        majParticipations(participationsModifiees: Array<Modeles.Fonds.IElementParticipation>): ng.IPromise<void>;
    }
}

declare module FondsGarantie.Services.Application {
    /**
     * Implémentation
     */
    class CreationSinistreService implements ICreationSinistreService {
        private serviceAgent;
        private contexteService;
        private participationService;
        static $inject: string[];
        private participations;
        private tableauDepart;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, contexteService: Services.Application.IContexteService, participationService: Services.Rest.Fonds.IParticipationService);
        rechercherCreance(numeroCreance: string): ng.IPromise<Modeles.Fonds.IParticipation>;
    }
    /**
     * Fonction utiles au controleur de l'écran des participations remboursables
     */
    interface ICreationSinistreService {
        rechercherCreance(numeroCreance: string): ng.IPromise<Modeles.Fonds.IParticipation>;
    }
}

declare module FondsGarantie.Services.Rest.EntiteTitulaire {
    interface IInformationEntiteTitulaireQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    interface IInformationEntiteTitulaireService {
        getInformationEntiteTitulaire(query: IInformationEntiteTitulaireQuery): ng.IPromise<Modeles.EntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

declare module FondsGarantie.Services.Rest.Fonds {
    interface ICaracteristiqueFondsQuery {
        codeEtablissement: string;
        numeroFondsGarantie: number;
    }
    interface ICaracteristiqueFondsService {
        getCaracteristiqueFonds(query: ICaracteristiqueFondsQuery): ng.IPromise<Modeles.Fonds.ICaracteristiqueFond>;
        postCaracteristiqueFonds(fonds: Modeles.Fonds.ICaracteristiqueFond): ng.IPromise<Modeles.Fonds.ICaracteristiqueFond>;
        putCaracteristiqueFonds(fonds: Modeles.Fonds.ICaracteristiqueFond): ng.IPromise<any>;
    }
}

declare module FondsGarantie.Services.Rest.Fonds {
    interface IOperationQuery {
        typeMiseAJour: string;
    }
    interface IOperationService {
        putOperation(operation: Modeles.Fonds.IOperation, query: IOperationQuery): ng.IPromise<Modeles.Fonds.IOperation>;
    }
}

declare module FondsGarantie.Services.Rest.Fonds {
    interface IParticipationQuery {
        codeEtablissement: string;
        numeroPersonneParrain?: number;
        numeroParticipation?: number;
        numeroCreance?: string;
        identifiantSouscripteur?: number;
        filtreCodeTypeSouscripteur?: string;
        filtreDateSouscription?: string;
    }
    interface IParticipationPutQuery {
        codeAction: string;
    }
    interface IParticipationService {
        getParticipation(query: IParticipationQuery): ng.IPromise<Modeles.Fonds.IParticipation>;
        putParticipation(participation: Modeles.Fonds.IParticipation, query: IParticipationPutQuery): ng.IPromise<void>;
    }
}

declare module FondsGarantie.Services.Rest.Fonds {
    interface IRechercheQuery {
        codeEtablissement: string;
        libelleFondsGarantie?: string;
        numeroPersonneGestionnaire?: number;
        critereTri: string;
    }
    interface IRechercheService {
        getRecherche(query: IRechercheQuery): ng.IPromise<Modeles.Fonds.IRecherche>;
    }
}

declare module FondsGarantie.Services.Rest.Sinistre {
    interface ISimulationSinistreQuery {
        codeEtablissement: string;
        identifiantCreanceSinistree: number;
        identifiantSouscripteur: number;
        identifiantFondsGarantie: number;
        libelleSinistre: string;
        dateSinistre: string;
        codeRegleSinistre: string;
        montantInitialSinistre: number;
        montantMisEnjeuSinistre: number;
        identifiantParticipation: number;
        tauxRepartitionParrain: number;
    }
    interface ISimulationSinistreService {
        getSimulationSinistre(query: ISimulationSinistreQuery): ng.IPromise<Modeles.Sinistre.ISimulationSinistre>;
    }
}

declare module FondsGarantie.Services.Rest.Sinistre {
    interface ISinistreQuery {
        codeEtablissement: string;
        dateValidite?: Date;
        critereTri?: string;
    }
    interface ISinistreService {
        getSinistre(query: ISinistreQuery): ng.IPromise<Modeles.Sinistre.ISinistre>;
        postSinistre(sinistre: Modeles.Sinistre.IElementSinistre): ng.IPromise<Modeles.Sinistre.ISinistre>;
        deleteSinistre(sinistre: Modeles.Sinistre.IElementSinistre): ng.IPromise<any>;
    }
}

declare module FondsGarantie.Services.Rest.RegleSinistre {
    interface IRegleSinistreQuery {
        codeEtablissement: string;
        dateValidite?: string;
        critereTri?: string;
    }
    interface IRegleSinistreService {
        getRegleSinistre(query: IRegleSinistreQuery): ng.IPromise<Modeles.RegleSinistre.IRegleSinistre>;
    }
}

declare module FondsGarantie.Services.Rest.Tiers {
    interface ITiersNoyauQuery {
        codeEtablissement?: string;
        identifiantPersonne?: number;
        numeroChrono?: number;
        numeroLieuActivite?: number;
    }
    interface ITiersNoyauService {
        getTiersNoyau(query: ITiersNoyauQuery): ng.IPromise<Modeles.Tiers.ITiersNoyau>;
    }
}
