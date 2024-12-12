
declare module myway.aide {
    var app: ng.IModule;
}

declare module myway.aide {
    class MwAideCommunService {
        private $q;
        private $window;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, $window: ng.IWindowService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Ouvre une fenêtre avec une url donnée
         */
        openWindow(url: string): void;
    }
}

declare module myway.aide {
}

declare module myway.aide {
    interface IInfobulleAttributes extends ng.IAttributes {
        flottante: string;
        processus: string;
        autoclose: string;
        autofocus: string;
    }
}

declare module myway.aide {
    class InfobulleConstantes {
        static EMPTY_CODE_PROCESSUS: string;
        static EMPTY_CODE_ETAPE: string;
    }
    class InfobulleSpecialParams {
        processus: boolean;
        codeProcessus: string;
        codeEtape: string;
        codeEtablissement: string;
        date: Date;
        constructor(processus: boolean, codeProcessus: string, codeEtape: string, codeEtablissement: string, date: Date | string);
        isDefined(): boolean;
    }
}

declare module myway.aide {
    class InfobulleAideService {
        private $q;
        private serviceAgentExtended;
        private communService;
        private presenceInfobullePromise;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, communService: MwAideCommunService);
        /**
         * Supprime le cache interne de la présence des infobulles
         */
        clearCacheInfobullesAffichables(): void;
        /**
         * Renvoie les indicateurs de présence des infobulles affichables du processus courant.
         * Le résultat est stocké localement dans le service s'il n'y a pas de paramètres spécifiques définis (c'est à dire le cas nominal).
         */
        getInfobullesAffichables(params: InfobulleSpecialParams): ng.IPromise<{
            [idChamp: string]: IPresenceInfoBulleDTO;
        }>;
        /**
         * Renvoie l'indicateur de présence de l'infobulle à partir de l'id champ fourni.
         */
        getInfobulleAffichable(idChamp: string, params: InfobulleSpecialParams): ng.IPromise<IPresenceInfoBulleDTO>;
        /**
         * Renvoie le contenu d'une infobulle.
         */
        getContenuInfobulle(idChamp: string, params: InfobulleSpecialParams): ng.IPromise<IInfoBullePartielDTO>;
        private getPresenceInfobulle(params);
    }
}

declare module myway.aide {
    var URL_SERVICE_RECHERCHE: string;
    interface IRechercheBagageTotemQueryParams {
        processus: string;
        etape?: string;
        cleSecondaire?: string;
        cleTertiaire?: string;
        date: string;
    }
    interface IRechercheFlashQueryParams {
        codeEtablissement: string;
        etape: string;
        date: string;
    }
    interface IRecherchePresenceInfobulleQueryParams {
        codeEtablissement: string;
        processus: string;
        etape: string;
        date: string;
    }
    interface IRechercheInfobulleQueryParams {
        codeEtablissement: string;
        processus?: string;
        etape?: string;
        date?: string;
        nomChamp: string;
    }
    interface IPresenceInfoBulleDTO {
        nomChamp: string;
        nouveaute: boolean;
    }
    interface IFlashPartielDTO {
        titre: string;
        contenu: string;
    }
    interface IInfoBullePartielDTO {
        contenu: string;
        /**
         * Image en base 64
         */
        image: string;
        token: boolean;
        nomChamp: string;
        nouveaute: boolean;
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
        idMywayAppliEtab: string;
        codeIndicVideo: string;
    }
}

declare module myway.aide {
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

declare module myway.aide {
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
        /**
         * Id du composant dans le DOM (provient de l'attribut id de la directive).
         */
        id: string;
        /**
         * Indicateur d'ouverture du totem
         */
        open: boolean;
        /**
         * Gestion Edition
         */
        isModeEdition: boolean;
        texteBoutonEdition: string;
        /**
         * Donnees tuiles
         */
        tuilesAide: TotemAideTuile[];
        /**
         * Données des Canaux d'Assistance
         */
        canauxAssistance: IBagageDTO[];
        /**
         * Données du Flash
         */
        flash: IFlashPartielDTO;
        /**
         * Référentiel de l'aide
         */
        referentielAide: any;
        /**
         * Bouchon utilisé pour charger le contenu du totem (provient de l'attribut bouchon de la directive)
         */
        private bouchon;
        private tuileSelectionnee;
        private keydownListener;
        private debounceChargerContenuTotem;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $window: ng.IWindowService, $document: ng.IDocumentService, $q: ng.IQService, $attrs: ng.IAttributes, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, totemAideService: MwsfTotemAideService);
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
         *
         */
        private chargerContenuTotem();
        /**
         * Chargement des bagages du totem
         */
        private chargerBagages();
        /**
         * Chargement du message flash
         */
        private chargerFlash();
        /**
         * Chargement du référentiel de l'aide et mise en forme de l'objet pour l'affichage arborescent.
         */
        private loadReferentielAideData();
    }
}

declare module myway.aide {
}

declare module myway.aide {
    //class MwsfTotemAideFavorisService {
    //    private favorisService;
    //    private modalCategoriesService;
    //    private lireEcrireService;
    //    static $inject: string[];
    //    static EVENT_NAME_AJOUT_FAVORI: string;
    //    constructor(favorisService: ajoutFavorisCommun.FavorisService, modalCategoriesService: AjoutFavorisCommun.ModalCategoriesService, lireEcrireService: AjoutFavorisCommun.LireEcrireService);
    //    init(): void;
    //    /**
    //     * Méthode pour enregistrer les modifications faites sur les favoris (ajout/suppression)
    //     */
    //    enregistrerModifications(): void;
    //    /**
    //     * Supprime une tuile des favoris ou des nouveaux favoris (si l'enregistrement n'a pas encore été effectué)
    //     */
    //    supprimerFavori(tuile: AjoutFavorisCommun.IFavoris): void;
    //    /**
    //     * Ajoute une tuile au favori. Il faut enregistrer les modifications pour que l'ajout soit effectif.
    //     */
    //    ajouterFavori(tuile: AjoutFavorisCommun.IFavoris): void;
    //    /**
    //     * Vérifie si la tuile est en favori.
    //     */
    //    isFavori(tuile: AjoutFavorisCommun.IFavoris): boolean;

    //}
}

declare module myway.aide {
    interface ITotemBouchon {
        processus?: string;
        etape?: string;
        cleSecondaire?: string;
        cleTertiaire?: string;
        date?: Date;
    }
    /**
     * Classe modélisant une tuile du totem d'aide. Par défaut, cette tuile n'est pas marquée comme favori.
     */
    class TotemAideTuile {
        bagage: IBagageDTO;
        favorisPerso: boolean;
        config: MyWay.UI.iMwConfigTuile;
        titre: string;
        categorieId: string;
        lien: string;
        id: string;
        constructor(bagage: IBagageDTO, handler: MyWay.UI.ITuileHandler);
    }
}

declare module myway.aide {
    class MwsfTotemAideService {
        private $q;
        private serviceAgentExtended;
        private communService;
        cleSecondaire: string;
        cleTertiaire: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, communService: MwAideCommunService);
        /**
         * Récupère les bagages pour le totem d'aide (tuiles d'aide et canaux d'assistance)
         */
        getTuilesEtCanaux(bouchon: ITotemBouchon): MyWay.Services.IPromesse<Array<IBagageDTO>>;
        /**
         * Récupère le messge flash
         */
        getFlash(bouchon: ITotemBouchon): MyWay.Services.IPromesse<IFlashPartielDTO>;
        /**
         * Construit et envoi la requête pour la recherche des bagages d'un établissement.
         */
        sendRequestRechercheBagageEtablissement(): MyWay.Services.IPromesse<Array<IBagageDTO>>;
    }
}

declare module myway.aide {
}

declare module myway.aide {
}

declare module myway.aide {
}
