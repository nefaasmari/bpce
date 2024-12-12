
declare module InstantPaymentCommun {
    var app: any;
}

declare module InstantPaymentCommun.Constantes {
    module DonneesDelocalisees {
        var LISTE_PAYS: string;
        var MOTIF_OPPOSITION: string;
    }
}

declare module InstantPaymentCommun.Constantes {
    module Popup {
        module Global {
            module Texte {
                var FERMER: string;
                var ERREUR_SANS_LIBELLE: string;
            }
        }
    }
}

declare module InstantPaymentCommun.Constantes {
    module Rest {
        var URL_REST: string;
        var SERVICE_VIREMENT_SERV: string;
        var SERVICE_VIREMENT: string;
    }
}

declare module InstantPaymentCommun.Constantes {
    module ServiceVirement {
        module NiveauRisque {
            var SANS_RISQUE: string;
            var RISQUE_FAIBLE: string;
            var RISQUE_MOYEN: string;
            var RISQUE_FORT: string;
            var RISQUE_ELEVE: string;
            var RISQUE_MAJEUR: string;
        }
    }
}

declare module InstantPaymentCommun.Controleur {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module InstantPaymentCommun.Enum {
    enum ChoixEnum {
        OUI,
        NON,
    }
    enum EtatDirectiveEnum {
        MODIF,
        CREATION,
    }
}

declare module InstantPaymentCommun.Filter {
    /**
     * Affichage du nom du mois, donnée de la forme YYYY/MM
     */
    function niveauRisqueFilter(): (niveauRisque: Enum.ServiceVirementServ.NiveauRisqueEnum) => string;
}

declare module InstantPaymentCommun.Controleur {
    class IpFormPlafondsControleur {
        static $inject: string[];
        /**
         * Id de la directive
         */
        id: string;
        plafond: Modeles.Rest.ServiceVirementServ.IPlafondStandardMaximum;
        valeurProduit: Modeles.Application.User.ISousProduit;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope);
        /**
         * Initialisation valeurs par défaut des champs
         */
        initialiserDirective(): void;
        changementRestrictionMobile(restriction: Enum.ChoixEnum): void;
    }
}

declare module InstantPaymentCommun.Directive {
    function ipFormPlafonds(): ng.IDirective;
}

declare module InstantPaymentCommun.Controleur {
    class IpVirementControleur {
        private serviceAgent;
        private $scope;
        private instantPaymentService;
        static $inject: string[];
        /**
         * Id de la directive
         */
        idBloc: string;
        private etat;
        private donneesUser;
        private codeSegmentation;
        private codeEtablissement;
        plafondStandardFrance: Modeles.Rest.ServiceVirementServ.IPlafondStandardMaximum;
        plafondStandardHorsFrance: Modeles.Rest.ServiceVirementServ.IPlafondStandardMaximum;
        private chargementDonnees;
        private erreurChargement;
        triState: boolean;
        triStateIndeterminate: boolean;
        triStateLabel: string;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, instantPaymentService: InstantPaymentCommun.Services.Application.IInstantPaymentService);
        /**
         * Initialisation valeurs par défaut des champs
         */
        initialiserDirective(): void;
        multiselectionChange(): void;
        forceMultiSelection(): void;
        keyDownTroisEtat($event: KeyboardEvent): void;
    }
}

declare module InstantPaymentCommun.Directive {
    function ipVirement(): ng.IDirective;
}

declare module InstantPaymentCommun.Modeles.Application.DonneesDeloc {
    interface IDonneesDelocalisees<T> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
    interface IMotifOpposition {
        /**
         * Code Motif
         */
        UCOPNM: string;
        /**
         * Libellé motif
         */
        ULIPNM: string;
    }
    interface IPaysDelocalises {
        /**
         * Code iso pays
         */
        COLIPB: string;
        DFHJIB: string;
        QLHDI1: string;
        /**
         * Nom pays
         */
        LIDGPY: string;
        MCHDEC: string;
        CDHMDE: string;
        CDDDPY: string;
        /**
         * Indic pays autorisé virement prioritaire
         */
        CTHJPA: string;
        QLHDIB: string;
        CDHJAP: string;
    }
}

declare module InstantPaymentCommun.Modeles.Application.User {
    interface IDonnees {
        isProduitFrance: boolean;
        sousProduitFrance: ISousProduit;
        isProduitHorsFrance: boolean;
        sousProduitHorsFrance: ISousProduit;
        paysAutorises: IPaysAutorises;
        activation: boolean;
    }
    interface ISousProduit {
        plafondUnitaire: number;
        plafondCumule: number;
        restrictionMobile: Enum.ChoixEnum;
        plafondUnitaireMobile: number;
        plafondCumuleMobile: number;
        sousCodeProduitService: Enum.ServiceVirementServ.CodeSousProduitEnum;
    }
}

declare module InstantPaymentCommun.Modeles.Application {
    interface IPaysAutorises {
        listePays: Array<IDetailPays>;
    }
    interface IDetailPays {
        nomPays: string;
        codeISOPays: string;
        selected?: boolean;
    }
}

declare module InstantPaymentCommun.Enum.ServiceVirementServ {
    /**
     * Niveau de risque personne positionné sur un critère d'habilitation
     * Valeurs :
     *   '0'        Sans risque
     *   '1'        Risque faible
     *   '2'        Risque moyen
     *   '3'        Risque fort
     *   '4'        Risque élevé voire douteux
     *   '5'        Risque majeur
     */
    enum NiveauRisqueEnum {
        SANS_RISQUE,
        RISQUE_FAIBLE,
        RISQUE_MOYEN,
        RISQUE_FORT,
        RISQUE_ELEVE,
        RISQUE_MAJEUR,
    }
    /**
     * Détermine si une personne est habilitée  à détenir  un service (ici Instant Payment) dans le système SEPA.
     * situation en cours
     * Valeurs :
     *   'O'        Habilitation autorisée
     *   'N'        Habilitation interdite
     *   'D'        Habilitation autorisée avec délégation
     */
    enum HabilitationRisqueEnum {
        AUTORISE,
        INTERDIT,
        AUTORISE_DELEGATION,
    }
    /**
     * Produits/Services de paiement.
     * Valeurs :
     *   'IPFR' IP FRANCE
     *   'IPHF' IP HORS FRANCE
     *   'INTE' INTERNATIONAL
     */
    enum CodeSousProduitEnum {
        IP_FRANCE,
        IP_HORS_FRANCE,
        INTERNATIONAL,
    }
    /**
     * Type média
     * " " pour pas de restriction
     * "8" pour restriction mobile
     */
    enum CodeMediaEnum {
        TOUT_MEDIA,
        MOBILE,
    }
}

declare module InstantPaymentCommun.Modeles.Rest.ServiceVirementServ {
    interface IControleRisque {
        controleRisqueDetail: IControleRisqueDetail;
    }
    interface IControleRisqueDetail {
        /**
         * Code segmentation
         */
        codeSegmentation: string;
        /**
         * Niveau de risque personne positionné sur un critère d'habilitation
         * Valeurs :
         *   '0'        Sans risque
         *   '1'        Risque faible
         *   '2'        Risque moyen
         *   '3'        Risque fort
         *   '4'        Risque élevé voire douteux
         *   '5'        Risque majeur
         */
        niveauRisquePersonne: Enum.ServiceVirementServ.NiveauRisqueEnum;
        /**
         * Détermine si une personne est habilitée  à détenir  un service (ici Instant Payment) dans le système SEPA.
         * situation en cours
         * Valeurs :
         *   'O'        Habilitation autorisée
         *   'N'        Habilitation interdite
         *   'D'        Habilitation autorisée avec     délégation
         */
        habilitationRisquePersonne: Enum.ServiceVirementServ.HabilitationRisqueEnum;
        /**
         * Note BALE2 créancier initiale
         */
        noteBale2CreancierInitiale: string;
        /**
         * Niveau de risque opposition positionné sur un critère d'habilitation
         * Valeurs :
         *   '0'        Sans risque
         *   '1'        Risque faible
         *   '2'        Risque moyen
         *   '3'        Risque fort
         *   '4'        Risque élevé voire douteux
         *   '5'        Risque majeur
         */
        codeNiveauRisqueOpposition: Enum.ServiceVirementServ.NiveauRisqueEnum;
        /**
         * Détermine si une personne est habilitée  au niveau opposition à détenir  un service (ici Instant Payment) dans le système SEPA.
         * situation en cours
         *  Valeurs :
         *   'O'        Habilitation autorisée
         *   'N'        Habilitation interdite
         *   'D'        Habilitation autorisée avec     délégation
         */
        codeHabilitatrisqueOpposition: Enum.ServiceVirementServ.HabilitationRisqueEnum;
        /**
         * Motif opposition avec le risque le plus fort
         */
        codeMotifOpposition: string;
        /**
         * Niveau de risque BALE II positionné sur un critère d'habilitation
         * Valeurs :
         *   '0'        Sans risque
         *   '1'        Risque faible
         *   '2'        Risque moyen
         *   '3'        Risque fort
         *   '4'        Risque élevé voire douteux
         *   '5'        Risque majeur
         */
        codeNiveauRisqueBale2: Enum.ServiceVirementServ.NiveauRisqueEnum;
        /**
         * Détermine si une personne est habilitée  au niveau BALE II à détenir  un service (ici Instant Payment) dans le système SEPA.
         * situation en cours
         * Valeurs :
         *    'O'   Habilitation autorisée
         *    'N'   Habilitation interdite
         *    'D'   Habilitation autorisée avec délégation
         */
        codeHabilitatrisqueBale2: Enum.ServiceVirementServ.HabilitationRisqueEnum;
        /**
         * numéro de personne
         */
        numeroPersonne: number;
    }
}

declare module InstantPaymentCommun.Modeles.Rest.ServiceVirementServ {
    interface IPlafondStandardMaximum {
        /**
         * Produits/Services de paiement.
         * Valeurs :
         *   'IPFR' IP FRANCE
         *   'IPHF' IP HORS FRANCE
         *   'INTE' INTERNATIONAL
         */
        sousCodeProduitService: Enum.ServiceVirementServ.CodeSousProduitEnum;
        /**
         * Cette rubrique contient le plafond standard qu'un établissement indique dans son paramétrage comme
         * étant le montant maximum pouvant être saisi lors de l'ouverture d'un service de paiement.
         * Le paramétrage concerné est mis en oeuvre à l'occasion de la mise en place de l'Instant Paiement.
         * Ce montant correspond à une valeur de virement unitaire. Quand la valeur de virement unitaire saisie lors
         * de l'octroi (ou de la modification) d'un service de paiement dépasse ce plafond, une alerte est émise
         * et une dérogation est demandée.  Ce montant apparaît dans la table de paramétrage HI21.
         */
        montantPlafondUnitaireStandard: number;
        /**
         * Cette rubrique contient le montant maximum  qu'un établissement indique dans son paramétrage
         * comme étant le plafond de ce qui peut  être saisi lors de l'ouverture d'un service de paiement.
         * Le paramétrage concerné est mis en oeuvre à l'occasion de la mise en place de l'Instant Paiement.
         * Ce montant correspond à une valeur cumulée sur une journée par compte.Quand la valeur de virement
         * unitaire saisie lors de l'octroi (ou de la modification) d'un service de paiement dépasse ce plafond,
         * la saisie est rejetée. Contrairement au montant plafond standard, la valeur paramétrée dans ce
         * montant maximum ne peut en aucun cas être dépassée (pas de dérogation possible).
         * Ce montant apparaît dans la table de paramétrage HI21.
         */
        montantPlafondUnitaireMaximum: number;
        /**
         * Cette rubrique contient le plafond standard qu'un établissement indique dans son paramétrage
         * comme étant le montant maximum pouvant être saisi lors de l'ouverture d'un service de paiement.
         * Le paramétrage concerné est mis en oeuvre à l'occasion de la mise en place de l'Instant Paiement.
         * Ce montant correspond à une valeur cumulée sur une journée par compte.Quand la moyenne journalière
         * de la valeur cumulée saisie lors de l'octroi (ou de la modification) d'un service de paiement
         * dépasse ce plafond, une alerte est émise et une dérogation est demandée. Ce montant apparaît dans la table de paramétrage HI21.
         */
        montantPlafondCumuleStandard: number;
        /**
         * Cette rubrique contient le montant maximum  qu'un établissement indique dans son paramétrage
         * comme étant le plafond de ce qui peut  être saisi lors de l'ouverture d'un service de paiement.
         * Le paramétrage concerné est mis en oeuvre à l'occasion de la mise en place de l'Instant Paiement.
         * Ce montant correspond à une valeur cumulée sur une journée par compte.
         * Quand la moyenne journalière de la valeur cumulée saisie lors de l'octroi (ou de la modification)
         * d'un service de paiement dépasse ce plafond, la saisie est rejetée.
         * Contrairement au montant plafond standard, la valeur paramétrée dans ce montant maximum ne peut
         * en aucun cas être dépassée (pas de dérogation possible). Ce montant apparaît dans la table de paramétrage HI21
         */
        montantPlafondCumuleMaximum: number;
    }
    interface IMessageInformation {
        /**
         * Produits/Services de paiement.
         * Valeurs :
         *     'IPFR' IP FRANCE
         *     'IPHF' IP HORS FRANCE
         *     'INTE' INTERNATIONAL
         */
        sousCodeProduitService: Enum.ServiceVirementServ.CodeSousProduitEnum;
        /**
         * Dans le cadre de la création ou la modification d'un service de paiement, cette rubrique indique q'une double validation doit être demandée.
         *  'O'        Une double validation doit être demandée
         *  'N'        Pas de double validation à demander
         */
        indicDoubleValidationDemandee: Enum.ChoixEnum;
        /**
         * Dans le cadre de la création ou la modification d'un service de paiement,
         * cette rubrique contient le message informatif retourné lors d'un contrôle non bloquant.
         */
        libelleMessageInformatif: string;
    }
    interface IPlafondDetail {
        /**
         * Produits/Services de paiement.
         * Valeurs :
         *     'IPFR' IP FRANCE
         *     'IPHF' IP HORS FRANCE
         *     'INTE' INTERNATIONAL
         */
        sousCodeProduitService: Enum.ServiceVirementServ.CodeSousProduitEnum;
        /**
         * montant plafond unitaire passé en paramètre
         */
        montantPlafondUnitaire: number;
        /**
         * Montant plafond cumulé passé en paramètre
         */
        montantPlafondCumule: number;
        /**
         * " " pour pas de restriction
         * "8" pour restriction mobile
         */
        codeTypeMediaPriseOrdre: Enum.ServiceVirementServ.CodeMediaEnum;
        /**
         * montant plafond unitaire par canal
         */
        mtPlafondUnitaireParCanal: number;
        /**
         * Mt plafond cumulé par canal
         */
        mtPlafondCumuleParCanal: number;
    }
    interface IPlafond {
        listePlafondDetail: Array<IPlafondDetail>;
        listePlafondStandardMaximum: Array<IPlafondStandardMaximum>;
        listeMessageInformation: Array<IMessageInformation>;
    }
}

declare module InstantPaymentCommun.Modeles.Rest.ServiceVirement {
    interface IServiceVirement {
        detailService: IDetailService;
        listeSousProduit: Array<ISousProduit>;
        listePaysAutorises: Array<IPaysAutorises>;
    }
    interface IDetailService {
        /**
         * Code interbancaire banque
         */
        codeEtablissement: string;
        /**
         * Code produit service
         * Valeur :
         *     VIRT pour INSTANT PAYMENT
         */
        codeProduit: string;
        /**
         * Idt Service de Paiement
         */
        idtServicePaiement: number;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI.
         */
        numeroEntiteTitulaire: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement.
         * Référencement des offres souscrites dans la table BU1A
         */
        numeroOffre: number;
        /**
         * Numéro d'identification d'un produit ou service.
         * Pour INSTANT PAYMENT = 6114
         */
        identifiantProduitService: number;
        /**
         * code guichet interbancaire
         */
        codeGuichet: string;
        /**
         * Reférence produit service
         */
        numeroCompte: string;
        /**
         * Activation du service IP
         */
        indicateurActivationVirementBad?: boolean;
    }
    interface ISousProduit {
        /**
         * Produits/Services de paiement.
         * Valeurs :
         *      'IPFR'     IP FRANCE
         *      'IPHF'     IP HORS FRANCE
         *      'INTE'     INTERNATIONAL
         */
        sousCodeProduitService: Enum.ServiceVirementServ.CodeSousProduitEnum;
        /**
         * Cette rubrique contient le montant maximal que peut saisir un donneur d'ordre pour un seul ordre de paiement.
         * Ce plafond est défini à la souscription du produit/service de paiement.
         */
        montantPlafondTransactUnitaire: number;
        /**
         * Cette rubrique contient le plafond maximal que peut saisir un donneur d'ordre pour une somme d'ordres de paiement sur une période donnée.
         * Ce plafond est défini à la souscription du produit/service de paiement.
         */
        montantPlafondCumule: number;
        /**
         * Cette rubrique contient le montant maximal que peut saisir un donneur d'ordre pour un seul ordre de paiement pour un canal donné (exemple : MOBILE).
         * Ce plafond est défini à la souscription du produit/ service de paiement, il peut être modifié et doit toujours être inférieur au plafond unitaire saisi.
         */
        mtPlafondUnitaireParCanal: number;
        /**
         * Cette rubrique contient le plafond maximal que peut saisir un donneur d'ordre pour une somme d'ordres de paiement sur une pédiode donnée et pour un canal donné (exemple : MOBILE).
         * Ce plafond est défini à la souscription du produit/service de paiement, il peut être modifié et doit toujours être inférieur au plafond cumulé saisi.
         */
        mtPlafondCumuleParCanal: number;
        /**
         * Détermine un média de prise d'ordre d'une opération de paiement.
         * ' '        Non renseigné
         * '1'        Guichet
         * '2'        Fax
         * '3'        Email
         * '4'        Courrier
         * '5'        Autre
         * '6'        Télétransmission EDI
         * '7'        Internet fixe
         * '8'        Mobile
         * '9'        GAB
         */
        codeTypeMediaPriseOrdre: string;
    }
    interface IPaysAutorises {
        /**
         * Produits/Services de paiement.
         * Valeurs :
         *      'IPFR'     IP FRANCE
         *      'IPHF'     IP HORS FRANCE
         *      'INTE'     INTERNATIONAL
         */
        sousCodeProduitService: Enum.ServiceVirementServ.CodeSousProduitEnum;
        /**
         * Identifie un pays ou un territoire selon la nomenclature ISO 3166-1 sur 2 caractères
         * 'FR'       France
         * 'DE'       Allemagne
         * 'ES'       Espagne
         * 'JP'       Japon
         * 'US'       Etats-Unis
         * etc...
         */
        codeISOPays: string;
    }
}

declare module InstantPaymentCommun.Services.Application {
    interface IInstantPaymentService {
        getControleRisque(identifiantPersonne: number, codeEtablissement: string): ng.IPromise<Modeles.Rest.ServiceVirementServ.IControleRisque>;
        controlerEgibilite(controleRisque: Modeles.Rest.ServiceVirementServ.IControleRisque): any;
        getPlafonds(segmentationRisque: string, codeEtablissement: string): ng.IPromise<Modeles.Rest.ServiceVirementServ.IPlafond>;
        controlerPlafond(segmentationRisque: string, codeEtablissement: string, montantProduit: Modeles.Application.User.ISousProduit[]): ng.IPromise<Modeles.Rest.ServiceVirementServ.IPlafond>;
        getListePays(codeEtablissement: string): ng.IPromise<Modeles.Application.IPaysAutorises>;
        getListeMotifOpposition(codeEtablissement: string, codeOpposition: string): ng.IPromise<string>;
        /**
         * Ouverture du service virement
         */
        ouvrirServiceVirement(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, donneesUser: Modeles.Application.User.IDonnees): ng.IPromise<void>;
        modifierServiceVirement(serviceVirement: Modeles.Rest.ServiceVirement.IServiceVirement, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, donneesUser: Modeles.Application.User.IDonnees): ng.IPromise<void>;
        /**
         * Récupération service virement
         */
        getServiceVirement(codeEtablissement: string, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): ng.IPromise<Modeles.Rest.ServiceVirement.IServiceVirement>;
        construireDonneesUser(serviceVirement: Modeles.Rest.ServiceVirement.IServiceVirement, codeEtablissement: string): ng.IPromise<Modeles.Application.User.IDonnees>;
        /**
         * Suppression service virement
         */
        cloturerServiceVirement(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): ng.IPromise<void>;
    }
}

declare module InstantPaymentCommun.Services.Application {
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
        showModal(templateUrl: string, controllerName: string, templateDatas: any, backdrop?: string): ng.IPromise<any>;
    }
}

declare module InstantPaymentCommun.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module InstantPaymentCommun.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module InstantPaymentCommun.Services.Rest {
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

declare module InstantPaymentCommun.Services.Rest.ServiceVirement {
    interface IServiceVirementQuery {
        codeEtablissement: string;
        /**
         * Numéro d'identification du service INSTANT PAYMENT
         */
        idtServicePaiement: number;
    }
    interface IServiceVirementService {
        getServiceVirement(query: IServiceVirementQuery): ng.IPromise<Modeles.Rest.ServiceVirement.IServiceVirement>;
        postServiceVirement(body: Modeles.Rest.ServiceVirement.IServiceVirement): ng.IPromise<Modeles.Rest.ServiceVirement.IServiceVirement>;
        putServiceVirement(body: Modeles.Rest.ServiceVirement.IServiceVirement): ng.IPromise<Modeles.Rest.ServiceVirement.IServiceVirement>;
        deleteServiceVirement(body: Modeles.Rest.ServiceVirement.IDetailService): ng.IPromise<Modeles.Rest.ServiceVirement.IServiceVirement>;
    }
}

declare module InstantPaymentCommun.Services.Rest.ServiceVirementServ {
    interface IControleRisqueQuery {
        codeEtablissement: string;
        numeroPersonne: number;
    }
    interface IControleRisqueService {
        getControleRisque(query: IControleRisqueQuery): ng.IPromise<Modeles.Rest.ServiceVirementServ.IControleRisque>;
    }
}

declare module InstantPaymentCommun.Services.Rest.ServiceVirementServ {
    interface IPlafondQuery {
        codeEtablissement: string;
        codeSegmentation: string;
    }
    interface IPlafondService {
        getPlafond(query: IPlafondQuery): ng.IPromise<Modeles.Rest.ServiceVirementServ.IPlafond>;
        postPlafond(query: IPlafondQuery, body: Modeles.Rest.ServiceVirementServ.IPlafond): ng.IPromise<Modeles.Rest.ServiceVirementServ.IPlafond>;
    }
}
