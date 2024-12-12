
declare module LibrairieSegmentation {
    var app: any;
}

declare module LibrairieSegmentation.Constantes {
    module Classname {
        let SEGMENTATION_RELATIONNELLE_CONTROLEUR: string;
        let SEGMENTATION_RELATIONNELLE_SERVICE: string;
        let TOOL_SERVICE: string;
    }
}

declare module LibrairieSegmentation.Constantes {
    module urlsRest {
        var URL_REST_SEGMENT_RELATIONNELLE: string;
    }
}

declare module LibrairieSegmentation {
    /**
     * Contrôleur permettant d'encapsuler la gestion du composant "Livraison".
     * @author S0076105
     */
    class SegmentationRelationnelle {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private segmentRelationnelleService;
        private modalService;
        private tools;
        static CLASS_NAME: string;
        index: string;
        numeroPersonne: string;
        private libelleSegRelGroupe;
        private libelleSegRelGroupeCalculee;
        private segRelGroupeForcee;
        habiliteForcageSegRel: boolean;
        habiliteSegmentation: boolean;
        listeSegRels: Array<any>;
        indicateurForcage: boolean;
        segmentationGroupe: Modeles.Rest.TiersV3.segmentrelationnelle.ISegmentRelationnelle;
        showSegmentation: boolean;
        codeEtablissement: any;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, segmentRelationnelleService: Services.Rest.TiersV3.ISegmentRelationnelleService, modalService: MyWay.UI.IModalService, tools: Services.Application.IToolService);
        init(): ng.IPromise<void>;
        segmentationRelationnelleForceeShow(): boolean;
        segmentationRelationnelleCalculeeShow(): boolean;
        calculeLe(): string;
        codeRaisonCalcul(): string;
        forceLe(): string;
        getSegmentationGroupe(): void;
        getLibelleSegRelGroupe(resultat: Modeles.Rest.TiersV3.segmentrelationnelle.ISegmentRelationnelle): void;
        forceSegRelGroupe(): void;
        retourSegRelGroupe(): ng.IPromise<void>;
        private doRetourSegRelGroupe();
    }
}

declare module LibrairieSegmentation.Directives {
    /**
     * Directive permettant d'encapsuler la gestion du composant "Livraison".
     * @author S0076105
     */
    function mwSegmentationRelationnelle(): ng.IDirective;
}

declare module LibrairieSegmentation.Services.Application {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IToolService {
        MsgBox(header: string, msg: string, icon?: string, size?: any): ng.IPromise<any>;
        DisplayInfo(mes: string): void;
    }
}

declare module LibrairieSegmentation.Modeles.Rest.TiersV3.segmentrelationnelle {
    interface IGetQuery {
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
    }
    interface ISegmentRelationnelle {
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Code segment clientèle
         */
        codeSegmentClientele: string;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Référence externe agent
         */
        codeAgent: number;
        /**
         * Identifiant élément structure
         */
        identifiantElementStructure: number;
        /**
         * Idt Elément structure
         */
        identifiantElementStructure2: number;
        /**
         * code retour
         */
        codeRetour: number;
        /**
         * Code motif MAJ SEGT relation
         */
        codeMotif: string;
        /**
         * code segmentation
         */
        codeSegmentMarche: string;
        /**
         * Indicateur forcage opération
         */
        indicateurForcageOperation: string;
        /**
         * Date calcul segmentation
         * Type date au format yyyy-MM-dd
         */
        dateCalculSegmentation: string;
        /**
         * date modification segmentation
         * Type date au format yyyy-MM-dd
         */
        dateModificationSegmentation: string;
    }
}

declare module LibrairieSegmentation.Services.Rest.TiersV3 {
    /**
     * Interface de la classe RetourPttService
     */
    interface ISegmentRelationnelleService {
        getSegmentRelationnelle(query: Modeles.Rest.TiersV3.segmentrelationnelle.IGetQuery): MyWay.Services.IPromesse<Modeles.Rest.TiersV3.segmentrelationnelle.ISegmentRelationnelle>;
        putSegmentRelationnelle(query: Modeles.Rest.TiersV3.segmentrelationnelle.ISegmentRelationnelle): MyWay.Services.IPromesse<Modeles.Rest.TiersV3.segmentrelationnelle.ISegmentRelationnelle>;
    }
}
