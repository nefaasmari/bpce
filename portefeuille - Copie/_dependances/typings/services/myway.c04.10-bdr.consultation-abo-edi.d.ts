
declare module ConsultationAboEdi {
    var app: any;
}

/**
 * Contrôleur de la page de tests de la directive mw-consultation-abo-edi
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ConsultationAboEdi.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevConsultationAboEdiControleur {
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, modaleService: MyWay.UI.ModalService);
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratserveurbancaire/v1/abonnementEdi"
 * @module ConsultationAboEdi.Modeles.AbonnementEdi
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConsultationAboEdi.Modeles.AbonnementEdi {
    interface IAbonnementEdi {
        listeCompteRattache: Array<ICompteRattache>;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface ICompteRattache {
        numeroAbonne: string;
        codeProtocole: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeOperationServeur: string;
        codeRetourEchange: number;
        libelleNomCENET: string;
        libelleSousFoncAEU: string;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    /**
     * Interface de la requête au service REST "contratserveurbancaire/v1/abonnementEdi" de type GET
     */
    interface IAbonnementEdiRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

/***
 * Ensemble d'interfaces de modèles de consultation abonnement EDI
 * @module ConsultationAboEdi.Modeles.ConsultationAboEdi
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConsultationAboEdi.Modeles.ConsultationAboEdi {
    interface ILigneCompteRattache {
        typeAbonnementEdi: string;
        numeroAbonne: string;
        compteSupport: string;
        listeServices: Array<IDetailServices>;
    }
    interface IDetailServices {
        codeService: string;
        libelleService: string;
    }
}

/**
 * Controleur pour la directive MW Consultation Abo EDI
 * @module ConsultationAboEdi.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ConsultationAboEdi.Controleurs {
    /**
     * Classe du controleur
     */
    class ConsultationAboEdiControleur {
        private $scope;
        private mwNotificationService;
        private serviceAgentExtended;
        static $inject: string[];
        aboEdi: Modeles.AbonnementEdi.IAbonnementEdi;
        tableauConsultationAboEdi: MyWay.UI.ImwTableOptions;
        indicateurMsgInfo: boolean;
        msgInfo: string;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, mwNotificationService: MyWay.UI.IMwNotificationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la construction du tableau de consultation Abo EDI
         * @return void
         */
        construireTableauConsultationAboEdi(): void;
        /**
         * Méthode permettant de retourner le libelle service du code service passé en paramètre
         * @return string : le libellé service associé
         */
        private chercherLibelleService(codeService);
    }
}

/**
 * Directive mw-consultation-abo-dei-directive
 * @module ConsultationAboEdi.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConsultationAboEdi.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwConsultationAboEdi(): ng.IDirective;
}
