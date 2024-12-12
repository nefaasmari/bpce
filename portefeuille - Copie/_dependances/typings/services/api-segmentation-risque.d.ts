
declare module myway.apiSegmentationRisque {
    var app: any;
}

declare module myway.apiSegmentationRisque {
}

declare module myway.apiSegmentationRisque {
}

declare module myway.apiSegmentationRisque {
    interface IInformationTiers {
        montantCAConsolide: number;
        dateArreteBilan: Date;
        montantEngagementTiers: number;
        dateArreteEngagement: Date;
        codeEtablissement: string;
        identifiantTiers: number;
    }
    interface ISegmentationClientele {
        InformationTiers: IInformationTiers;
        ListeSegmentationClientele: Array<IInformationSegmentation>;
    }
    interface IInformationSegmentation {
        dateMAJSegmentation: Date;
        typeAffectationSegmentation: string;
        origineAffectationSegmentation: string;
        agentMAJSegmentation: string;
        commentaireForcageSegmentation: string;
        indicateurSegmentationGrappage: boolean;
        typeAncSegmentRisquePart: string;
        codeAncSegmentRisquePart: string;
        typeAncSegmentRisquePro: string;
        typeAncCategorieClientPart: string;
        typeAncCategorieClientPro: string;
        codeAncCategorieClientPro: string;
        codeAncCategorieClientPart: string;
        codeAncSegmentRisquePro: string;
        typeSegmentRisqueActuelPart: string;
        codeSegmentRisqueActuelPart: string;
        typeSegmentRisqueActuelPro: string;
        codeSegmentRisqueActuelPro: string;
        typeCategorieClientActuelPart: string;
        codeCategorieClientActuelPart: string;
        typeCategorieClientActuelPro: string;
        codeCategorieClientActuelPro: string;
    }
}

declare module myway.apiSegmentationRisque {
}

declare module myway.apiSegmentationRisque {
    interface ISegmentationRisqueScope extends ng.IScope {
        codeEtablissement: string;
        identifiantTiers: number;
    }
}

declare module myway.apiSegmentationRisque {
    /**
     * Service permettant de récupérer les labels des segmentation risque via la table délocalisées MY7A.
     */
    class SRLabelService {
        private serviceAgent;
        private $q;
        static $inject: string[];
        static TABLE_DELOC: string;
        private donnees;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        /**
         * Initialise les données avec le contenu de la table délocalisée
         */
        init(): ng.IPromise<void>;
        /**
         * Récupère les labels correspondant au codes passés en paramètre
         */
        getLabels(codes: string[]): string[];
        /**
         * Récupère le label correspondant au code passé en paramètre
         */
        getLabel(code: string): string;
    }
}

declare module myway.apiSegmentationRisque {
    class SRRestService {
        private serviceAgent;
        static $inject: string[];
        static MODE_CONSULTATION: string;
        static MODE_HISTORIQUE: string;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupération de l'historique
         */
        getHistorique(codeEtablissement: string, identifiantTiers: number): ng.IPromise<ISegmentationClientele>;
        /**
         * Récupération du détail
         */
        getDetail(codeEtablissement: string, identifiantTiers: number): ng.IPromise<ISegmentationClientele>;
        /**
         * Méthode interne pour l'envoi de la requête : getSegmentationClientele
         */
        private sendRequestGetSegmentationClientele(codeEtablissement, identifiantTiers, typeConsultation);
    }
}

declare module myway.apiSegmentationRisque {
}

declare module myway.apiSegmentationRisque {
}

declare module myway.apiSegmentationRisque {
}

declare module myway.apiSegmentationRisque {
}
