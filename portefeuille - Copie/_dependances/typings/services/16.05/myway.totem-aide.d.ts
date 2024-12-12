
declare module totemAide {
    var app: any;
}

declare module totemAide {
    class Constants {
        static EVENT_NAME_SET_CLE_SECONDAIRE: string;
        static EVENT_NAME_SET_CLE_TERTIAIRE: string;
        static EVENT_NAME_EDITION_OFF: string;
        static EVENT_NAME_EDITION_ON: string;
        static PICTO_FAVORI_PLUS: string;
        static PICTO_FAVORI_MOINS: string;
        static TEXTE_BTN_EDITION_OFF: string;
        static TEXTE_BTN_EDITION_ON: string;
        static TYPE_BAGAGE_APPLICATION: string;
        static TYPE_BAGAGE_LIEN: string;
        static TYPE_BAGAGE_AUTRE_CANAL: string;
    }
}

declare module totemAide {
    class MwsfTotemAideControleur implements MyWay.UI.ITuileHandler {
        private $scope;
        private $rootScope;
        private $window;
        private $document;
        private $q;
        private $attrs;
        private serviceAgentExtended;
        private modalService;
        private totemAideService;
        private totemAideFavorisService;
        /**
         * Paramètres de la directive
         */
        private modeBouchon;
        private bouchonProcessus;
        private bouchonEtape;
        private bouchonCleSecondaire;
        private bouchonCleTertiaire;
        private bouchonDate;
        open: boolean;
        empty: boolean;
        isModeEdition: boolean;
        texteBoutonEdition: string;
        tuilesAide: TotemAideTuile[];
        canauxAssistance: IBagageDTO[];
        flash: IFlashPartielDTO;
        referentielAide: any;
        private tuileSelectionnee;
        private keydownListener;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $window: ng.IWindowService, $document: ng.IDocumentService, $q: ng.IQService, $attrs: ng.IAttributes, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, totemAideService: MwsfTotemAideService, totemAideFavorisService: MwsfTotemAideFavorisService);
        /**
         * Affiche ou ferme le totem.
         */
        toggleTotem(): void;
        /**
         * Affichage du totem
         */
        afficherTotemAide(): void;
        /**
         * Masquage du totem
         */
        masquerTotemAide(): void;
        /**
         * Passer du mode Edition au mode Consultation
         */
        basculerEditionConsultation(): void;
        /**
         * Afficher le FLash dans une popup modale
         */
        afficherModaleFlash(): void;
        /**
         * Ouvrir la fenêtre modale d'Aide Générale
         */
        afficherModaleReferentielAide(): void;
        /**
         * Ouvrir la fenêtre des Canaux d'Assitance
         */
        afficherModaleAssistance(): void;
        /**
         * Implementation de MyWay.UI.ITuileHandler
         */
        onTuileClick(objetTuile: TotemAideTuile): void;
        /**
         * Ajoute ou retire le bagage des favoris
         */
        onAction2(objetTuile: TotemAideTuile): void;
        onAction1(objetTuile: any): void;
        onAction3(objetTuile: any): void;
        onAction4(objetTuile: any): void;
        onClickLeft(objetTuile: any): void;
        onClickRight(objetTuile: any): void;
        private init();
        /**
         * Evènement qui ferme le totem si la touche Echap est appuyée
         */
        private onKeydown(event);
        /**
         * Charger le contenu du totem
         */
        private chargerContenuTotem();
        /**
         * Chargement des bagages du totem
         */
        private loadTotemBagagesData();
        /**
         * Chargement du message flash
         */
        private loadTotemFlashData();
        /**
         * Chargement du référentiel de l'aide et mise en forme de l'objet pour l'affichage arborescent.
         */
        private loadReferentielAideData();
    }
}

declare module totemAide {
}

declare module totemAide {
    class MwsfTotemAideFavorisService {
        private favorisService;
        private modalCategoriesService;
        private lireEcrireService;
        static $inject: string[];
        static EVENT_NAME_AJOUT_FAVORI: string;
        constructor(favorisService: AjoutFavorisCommun.FavorisService, modalCategoriesService: AjoutFavorisCommun.ModalCategoriesService, lireEcrireService: AjoutFavorisCommun.LireEcrireService);
        init(): void;
        /**
         * Méthode pour enregistrer les modifications faites sur les favoris (ajout/suppression)
         */
        enregistrerModifications(): void;
        /**
         * Supprime une tuile des favoris ou des nouveaux favoris (si l'enregistrement n'a pas encore été effectué)
         */
        supprimerFavori(tuile: AjoutFavorisCommun.IFavoris): void;
        /**
         * Ajoute une tuile au favori. Il faut enregistrer les modifications pour que l'ajout soit effectif.
         */
        ajouterFavori(tuile: AjoutFavorisCommun.IFavoris): void;
        /**
         * Vérifie si la tuile est en favori.
         */
        isFavori(tuile: AjoutFavorisCommun.IFavoris): boolean;
    }
}

declare module totemAide {
    interface IRechercheBagageTotemQueryParams {
        processus: string;
        etape?: string;
        cleSecondaire?: string;
        cleTertiaire?: string;
        date?: string;
    }
    interface IRechercheFlashQueryParams {
        codeEtablissement: string;
        etape: string;
        date: string;
    }
    /**
     * Classe modélisant une tuile du totem d'aide. Par défaut, cette tuile n'est pas marquée comme favori.
     */
    class TotemAideTuile implements AjoutFavorisCommun.IFavoris {
        bagage: IBagageDTO;
        favorisPerso: boolean;
        config: MyWay.UI.iMwConfigTuile;
        titre: string;
        categorieId: string;
        lien: string;
        id: string;
        constructor(bagage: IBagageDTO, handler: MyWay.UI.ITuileHandler);
    }
    interface IFlashPartielDTO {
        titre: string;
        contenu: string;
    }
    interface IBagageDTO {
        id: number;
        etablissement: string;
        processus: string;
        etape: string;
        idCategorie: number;
        codeAccesSecondaire: string;
        codeAccesTertiaire: string;
        libelleTitreTuile: string;
        libelleURL: string;
        dateDebut: Date;
        dateFin: Date;
        nouveaute: boolean;
        dateFinNouveaute: Date;
        numeroOrdre: number;
        codeTypeBagage: string;
        majDate: Date;
    }
}

declare module totemAide {
    class MwsfTotemAideService {
        private $q;
        private serviceAgentExtended;
        private mwsfTotemAideFavorisService;
        cleSecondaire: string;
        cleTertiaire: string;
        private montrerTotem;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwsfTotemAideFavorisService: MwsfTotemAideFavorisService);
        /**
         * Récupère les bagages pour le totem d'aide (tuiles d'aide et canaux d'assistance)
         */
        getTuilesEtCanaux(modeBouchon: boolean, processus: string, etape: string, cleSecondaire: string, cleTertiaire: string): MyWay.Services.IPromesse<Array<IBagageDTO>>;
        /**
         * Récupère le messge flash
         */
        getFlash(modeBouchon: boolean, etape: string, date: string): MyWay.Services.IPromesse<IFlashPartielDTO>;
        /**
         * Construit et envoie la requête pour la recherche des bagages du totem
         */
        private sendRequestRechercheBagageTotem(params);
        /**
         * Construit et envoi la requête pour la recherche du message flash.
         * Si la date n'est pas passée en paramètre, on prend la date du jour.
         */
        private sendRequestRechercheFlash(params);
        /**
         * Construit et envoi la requête pour la recherche des bagages d'un établissement.
         */
        sendRequestRechercheBagageEtablissement(): MyWay.Services.IPromesse<Array<IBagageDTO>>;
        /**
         * Deprecated : Cette fonctionnalité n'est plus utilisée
         */
        private getCategorie(idCategorie);
        /**
         * Récupère le code du processus actuel.
         * Attention, le code récupéré en 16.05 est au format codeProcessus-id (bug qui sera corrigé en 16.09)
         * Il faut donc couper la chaine pour ne récupérer que le code processus.
         */
        private getProcessusCode();
    }
}

declare module totemAide {
}

declare module totemAide {
}

declare module totemAide {
}
