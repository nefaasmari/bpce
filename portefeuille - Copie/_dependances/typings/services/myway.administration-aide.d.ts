
declare module administrationAide {
    var app: any;
}

declare module administrationAide {
    class DefautControleur {
        footerService: administrationAide.Service.FooterService;
        static $inject: string[];
        localite: string;
        version: string;
        $animate: ng.IAnimateService;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, footerService: administrationAide.Service.FooterService, $animate: ng.IAnimateService, $timeout: ng.ITimeoutService);
        secouerMoi(event: any): void;
        testerServiceAgent(): void;
    }
}

declare module administrationAide {
    class DetailFlashControleur {
        private serviceAgent;
        private flashService;
        private modalService;
        footerService: administrationAide.Service.FooterService;
        static $inject: string[];
        private listeProcessus;
        private listePointEntree;
        private listeEtapes;
        private libelleSelection;
        private selection;
        private toutSelectionne;
        private flash;
        private etablissementRecherche;
        private previsualiserFlash;
        private $scope;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param flashService: administrationAide.Service.FlashService
         * @param modalService: MyWay.UI.IModalService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $scope: ng.IScope, flashService: administrationAide.Service.FlashService, modalService: MyWay.UI.IModalService, footerService: administrationAide.Service.FooterService);
        /**
         * Fonction pour sélectionner ou déselectionner tout
         */
        toutSelectionner(): void;
        /**
         * Fonction pour mettre à jour la case tout sélectionner en fonction de ce qui est coché à la main
         */
        selectionner(): void;
        /**
         * Fonction de construction de la popin de prévisualisation
         */
        previsualiser(): void;
        /**
         * Fonction appelé par le bouton de validation
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        validerFlash(): void;
    }
}

declare module administrationAide {
    class DetailInfobulleControleur {
        private creationInfoBulleService;
        private modalService;
        static $inject: string[];
        private listeProcessus;
        private listePointEntree;
        private listeEtapes;
        private libelleSelection;
        private selection;
        private infobulle;
        private infobullePrevisaulisation;
        private etablissementRecherche;
        private toutSelectionne;
        private previsualiserInfoBulle;
        private test;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param creationInfoBulleService: administrationAide.Service.InfoBulleService
         */
        constructor($scope: ng.IScope, creationInfoBulleService: administrationAide.Service.InfoBulleService, modalService: MyWay.UI.IModalService);
        toutSelectionner(): void;
        selectionner(): void;
        previsualiser(): void;
    }
}

declare module administrationAide {
    class FooterControleur {
        private serviceAgent;
        footerService: administrationAide.Service.FooterService;
        static $inject: string[];
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param footerService: administrationAide.Service.FooterService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $scope: ng.IScope, footerService: administrationAide.Service.FooterService);
    }
}

declare module administrationAide {
    class ListeBagagesControleur {
        footerService: administrationAide.Service.FooterService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, footerService: administrationAide.Service.FooterService);
    }
}

declare module administrationAide {
    class ListeFlashsControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgent;
        private flashService;
        footerService: administrationAide.Service.FooterService;
        static $inject: string[];
        private afficheCriteres;
        libelleBoutonCriteres: string;
        private afficheResultat;
        private rechercheFlash;
        private listeProcessus;
        private listeResultatFlash;
        private resultatSelectionne;
        private nombreResultat;
        private tableauSimple;
        private url;
        private $scope;
        /**
         * Contruction du formulaire projet
         * @param serviceAgent: MyWay.Services.ServiceAgent
         * @param $scope: ng.IScope
         * @param flashService: administrationAide.Service.FlashService
         * @param footerService: administrationAide.Service.FooterService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $scope: ng.IScope, flashService: administrationAide.Service.FlashService, footerService: administrationAide.Service.FooterService);
        /**
         * Fonction d'affichage des autres critères de recherche
         */
        afficherCriteres(): void;
        /**
         * Fonction d'appel du service rest de recherche
         */
        rechercherFlashs(): void;
        /**
         * Fonction d'affichage du nombre de résultats
         */
        nombreResultats(): void;
        /**
         * Fonction pour construire le tableau composant MyWay simple mono-sélection
         * Voir application guide de style pour plus d'information
         */
        construireTableau(tableau: Array<administrationAide.Modele.IRechercheFlash>): void;
        /**
         * Fonction déclenchée à la sélection d'une ligne du tableau
         */
        onSelectionChange(selectedObject: administrationAide.Modele.Flash): void;
        /**
         * Fonction pour créer un flash
         */
        creerFlash(): void;
        /**
         * Fonction pour supprimer le flash sélectionné
         */
        supprimerFlash(): void;
        /**
         * Fonction pour modifier le flash sélectionné
         */
        modifierFlash(): void;
    }
}

declare module administrationAide {
    class ListeInfobullesControleur {
        private serviceAgent;
        private infoBulleService;
        footerService: administrationAide.Service.FooterService;
        static $inject: string[];
        private afficheCriteres;
        libelleBoutonCriteres: string;
        private afficheResultat;
        private afficheSupprimer;
        private rechercheInfoBulle;
        private listeProcessus;
        private listeZonesDeSaisie;
        zoneSelectionnee: administrationAide.Modele.Champ;
        private listeResultatInfoBulle;
        resultatSelectionne: administrationAide.Modele.InfoBulle;
        private nombreResultat;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        private url;
        private $scope;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param administrationInfoBulleService: administrationAide.Service.AdministrationInfoBulleService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $scope: ng.IScope, infoBulleService: administrationAide.Service.InfoBulleService, footerService: administrationAide.Service.FooterService);
        /**
         * Fonction d'afficage des autres critères de recherche
         */
        afficherCriteres(): void;
        /**
         * Fonction d'affichage des autres critères de recherche
         */
        rechercherInfoBulle(): void;
        /**
         * Fonction d'afficage du nombre de résultats
         */
        nombreResultats(): void;
        MaFonction(item: any, model: any): void;
        /**
         * Fonction pour construire le tableau composant MyWay simple mono-sélection
         * Voir application guide de style pour plus d'information
         */
        construireTableau(tableau: Array<administrationAide.Modele.IRechercheInfoBulle>): void;
        /**
         * Fonction déclenchée à la sélection d'une ligne du tableau
         */
        onSelectionChange(selectedObject: administrationAide.Modele.InfoBulle): void;
        /**
         * Fonction pour créer une nouvelle infobulle
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        creerInfoBulle(): void;
        /**
         * Fonction pour suprimer l'infobulle sélectionnée
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        suprimerInfoBulle(): void;
        /**
         * Fonction pour modifier l'infobulle sélectionnée
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        modifierInfobulle(): void;
    }
}

declare module administrationAide {
}

declare module administrationAide {
}

declare module administrationAide.Modele {
    class Champ {
        id: string;
        nom: string;
        libelle: string;
        /**
         * Construction
         * @param publicationDateDebut: string - Date de début du message
         */
        constructor(donnees?: Champ);
    }
}

declare module administrationAide.Modele {
    interface IEtablissement {
        cenfe: boolean;
        ceidf: boolean;
        celc: boolean;
        cera: boolean;
        cen: boolean;
    }
    class EtablissementRecherche {
        cenfe: boolean;
        ceidf: boolean;
        celc: boolean;
        cera: boolean;
        cen: boolean;
        /**
         * Construction d'un objet Etablissement
         * @param cenfe: boolean
         * @param ceidf: boolean
         * @param celc: boolean
         * @param cenra: boolean
         * @param cen: boolean
         */
        constructor();
    }
}

declare module administrationAide.Modele {
    class Flash {
        id: string;
        etablissement: string;
        processus: string;
        entree: string;
        etape: string;
        titre: string;
        contenu: string;
        dateDebut: string;
        dateFin: string;
        majUser: string;
        majDate: string;
        exclusion: Array<string>;
        actif: string;
        /**
         * Construction
         * @param publicationDateDebut: string - Date de début du message
         * @param publicationDateFin: string - Date de fin du message
         * @param majUtilisateur: string - Nom de l'utilisateur qui à fait la dernière MAJ
         * @param majDate: string - Date de la dernière MAJ utilisateur
         * @param etablissement: string - Recherche dans le etablissement
         * @param processus: string - Recherche par type processus
         * @param pointEntree: string - Recherche par point d'entrée
         * @param etat: string - affichage de l'état actif ou inactif
         * @param contenu: string - affichage du contenu
         */
        constructor(donnees?: Flash);
    }
}

declare module administrationAide.Modele {
    class InfoBulle {
        etablissement: string;
        processus: string;
        pointEntree: string;
        etape: string;
        champs: string;
        contenuCommunautaire: string;
        contenuEtablissement: string;
        image: File;
        publicationDateDebut: string;
        publicationDateFin: string;
        nouveaute: string;
        nouveauteDateFin: string;
        majUtilisateur: string;
        majDate: string;
        /**
         * Construction
         * @param publicationDateDebut: string - Date de début du message
         * @param publicationDateFin: string - Date de fin du message
         * @param champs: string - Recherche dans le champs
         * @param processus: string - Recherche par type processus
         * @param etat: string - affichage de l'état actif ou inactif
         * @param contenu: string - affichage du message
         */
        constructor(donnees?: InfoBulle);
    }
}

declare module administrationAide.Modele {
    interface IEtat {
        archive: boolean;
        enCours: boolean;
        aVenir: boolean;
        permanent: boolean;
    }
    class Etat {
        archive: boolean;
        enCours: boolean;
        aVenir: boolean;
        permanent: boolean;
        /**
         * Construction d'un objet Etat
         * @param archive: boolean - Recherche par archive
         * @param enCours: boolean - Recherche par enCours
         * @param aVenir: boolean - Recherche par aVenir
         * @param permanent: boolean - Recherche par permanent
         */
        constructor();
    }
}

declare module administrationAide.Modele {
    interface IOrigine {
        mysys: boolean;
        etablissement: boolean;
    }
    class Origine {
        mysys: boolean;
        etablissement: boolean;
        /**
         * Construction d'une Tuile d'arborecence
         * @param mysys: boolean - Recherche par message MySys
         * @param etablissement: boolean - Recherche par message Etablissement
         */
        constructor();
    }
}

declare module administrationAide.Modele {
    interface IRechercheFlash {
        processus?: string;
        publicationDateDebut?: string;
        publicationDateFin?: string;
        etatArchive?: boolean;
        etatEnCours?: boolean;
        etatAVenir?: boolean;
        etatPermanent?: boolean;
    }
    class RechercheFlash {
        processus: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        /**
         * Construction
         * @param publicationDateDebut: string - Date de début du message
         * @param publicationDateFin: string - Date de fin du message
         * @param processus: string - Recherche par type processus
         * @param etatArchive: string - Recherche par Etat archivé
         * @param etatEnCours: string - Recherche par Etat en cours
         * @param etatAVenir: string - Recherche par Etat à venir
         * @param etatPermanent: string - Recherche par Etat permanent
         */
        constructor();
    }
}

declare module administrationAide.Modele {
    interface IRechercheInfoBulle {
        processus?: string;
        publicationDateDebut?: string;
        publicationDateFin?: string;
        etatArchive?: boolean;
        etatEnCours?: boolean;
        etatAVenir?: boolean;
        etatPermanent?: boolean;
        origineCommunautaire?: boolean;
        origineEtablissement?: boolean;
    }
    class RechercheInfoBulle {
        processus: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        origineCommunautaire: boolean;
        origineEtablissement: boolean;
        /**
         * Construction
         * @param publicationDateDebut: string - Date de début du message
         * @param publicationDateFin: string - Date de fin du message
         * @param processus: string - Recherche par type processus
         * @param etatArchive: string - Recherche par Etat archivé
         * @param etatEnCours: string - Recherche par Etat en cours
         * @param etatAVenir: string - Recherche par Etat à venir
         * @param etatPermanent: string - Recherche par Etat permanent
         * @param origineCommunautaire: string - Recherche par Origine Communautaire
         * @param origineEtablissement: string - Recherche Origine Etablissement
         */
        constructor();
    }
}

declare module administrationAide {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module administrationAide.Service {
    class FlashService {
        private $q;
        private serviceAgent;
        static $inject: string[];
        /**
         * Bouchonnage des processus
         */
        private processus;
        /**
         * Bouchonnage des points d'entrée
         */
        private point;
        /**
         * Bouchonnage des étapes
         */
        private etapes;
        listerFlash(): ng.IPromise<Array<administrationAide.Modele.Flash>>;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent);
        creerFlash(): ng.IPromise<administrationAide.Modele.Flash>;
        /**
         * Accesseurs
         */
        getProcessusFlash(): ng.IPromise<Array<string>>;
        getPointEntreeFlash(): ng.IPromise<Array<string>>;
        getEtapesFlash(): ng.IPromise<Array<string>>;
    }
    interface IFlashService {
        listerFlash: () => ng.IPromise<Array<administrationAide.Modele.Flash>>;
    }
}

declare module administrationAide.Service {
    class FooterService {
        private $q;
        private serviceAgent;
        static $inject: string[];
        afficheCreerFlash: boolean;
        afficheModifierFlash: boolean;
        afficheSupprimerFlash: boolean;
        afficheValiderFlash: boolean;
        afficheAnnulerFlash: boolean;
        afficheCreerInfobulle: boolean;
        afficheModifierInfobulle: boolean;
        afficheSupprimerInfobulle: boolean;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent);
        masqueTout(): void;
    }
    interface IFooterService {
        afficheCreerFlash: () => boolean;
        afficheModifierFlash: () => boolean;
        afficheSupprimerFlash: () => boolean;
        afficheValiderFlash: () => boolean;
        afficheAnnulerFlash: () => boolean;
        afficheCreerInfobulle: () => boolean;
        afficheModifierInfobulle: () => boolean;
        afficheSupprimerFlashInfobulle: () => boolean;
    }
}

declare module administrationAide.Service {
    class InfoBulleService {
        private $q;
        private serviceAgent;
        static $inject: string[];
        /**
         * Bouchonnage des processus
         */
        private processus;
        /**
         * Bouchonnage des points d'entrée
         */
        private point;
        /**
         * Bouchonnage des étapes
         */
        private etapes;
        /**
         * Bouchonnage des résultats
         */
        private resultat;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Accesseurs
         */
        getResultatRechercheInfoBulle(): ng.IPromise<Array<administrationAide.Modele.InfoBulle>>;
        getListeZonesDeSaisie(): ng.IPromise<Array<administrationAide.Modele.Champ>>;
        /**
         * Accesseurs
         */
        getProcessusInfoBulle(): ng.IPromise<Array<string>>;
        getPointEntreeInfoBulle(): ng.IPromise<Array<string>>;
        getEtapesInfoBulle(): ng.IPromise<Array<string>>;
    }
}

declare module administrationAide {
    function entete(): ng.IDirective;
}
