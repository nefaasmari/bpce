
declare module GestionGeneriqueOffres.Commentaire {
    var app: any;
}

declare module GestionGeneriqueOffres.Commentaire {
    interface ICommentaireScope {
        commentaire: string;
        getter: () => string;
        setter: (commentaire: any) => void;
        callback: () => void;
    }
    class Commentaire implements ICommentaireScope {
        private modalService;
        private cnilService;
        private serviceAgentExtended;
        static $inject: string[];
        commentaire: string;
        getter: () => string;
        setter: (commentaire: any) => void;
        callback: () => void;
        commentaireVide: boolean;
        private _commentaireModifie;
        constructor(modalService: MyWay.UI.IModalService, cnilService: CnilService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        doCommentaire: () => void;
        private _setCommentaire;
        private _getCommentaire();
    }
}

declare module GestionGeneriqueOffres.Commentaire {
    interface IModaleScope extends ng.IScope {
        modalDatas: any;
    }
    class ModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
    }
}

declare module GestionGeneriqueOffres.Commentaire {
}

/**
 * Ce service permet de gerer la mise en place de la cnil sur les zones de saisie
 * @author Charlotte LEDOUX
 */
declare module GestionGeneriqueOffres.Commentaire {
    class Cnil {
        static TITRE_SENSIBLE: string;
        static TITRE_INTERDIT: string;
        static INTRO_SENSIBLE: string;
        static INTRO_INTERDIT: string;
    }
    class CnilService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        listeMotsInterditsOuNonInterdits: Array<string>;
        donnees: any;
        titrePopin: string;
        introductionPopin: string;
        iconPopin: string;
        listeInterdits: Array<string>;
        listeSensibles: Array<string>;
        contenuOk: boolean;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        chaineSansAccent(contenu: string): string;
        preparerContenu(contenu: string): string;
        private _rechercherMotsInterditsOuSensible(contenu);
        verifierContenu(contenu: string): boolean;
        construirePopinCnil(): ng.ui.bootstrap.IModalSettings;
        ouvrirPopinCnil(contenu: string): ng.IPromise<boolean>;
        encodeHtmlEntities(texte: string): string;
        decodeHtmlEntity(texte: string): string;
    }
}
