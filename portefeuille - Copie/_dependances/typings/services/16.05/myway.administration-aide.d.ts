
declare module administrationAide {
    var app: ng.IModule;
}

declare module administrationAide {
    class Constantes {
        static CODE_COMMUNAUTAIRE: string;
        static INFOBULLE_CONTENU_LONGUEUR_MAX: number;
        static LARGEUR_MAXIMALE_IMAGE: number;
        static HAUTEUR_MAXIMALE_IMAGE: number;
        static URL_TELECHARGEMENT_IMAGE: string;
        static CODE_SORTIE_LISA: number;
    }
    enum CodeRechercheInfobulle {
        EN_COURS = 0,
        A_VENIR = 1,
    }
    enum CodeRechercheFlash {
        EN_COURS = 0,
        A_VENIR = 1,
        TERMINANT_MOINS_SEPT_JOURS = 2,
    }
    enum CodeRechercheBagage {
        EN_COURS = 0,
        A_VENIR = 1,
        APPLICATION = 2,
        LIEN = 3,
        ESCALADE = 4,
        VIDEO = 5,
    }
    class CodeTypeBagage {
        static LIEN: string;
        static ESCALADE: string;
        static VIDEO: string;
    }
}

declare module administrationAide.Modele {
    interface IAction {
        titreAction: string;
        clicAction: any;
    }
    class Action implements IAction {
        titreAction: string;
        clicAction: any;
        constructor(titre?: string, clic?: any);
    }
}

declare module administrationAide {
    class DateUtils {
        static TODAY: Date;
        static estPassee(dateFin: Date): boolean;
        static estEnCours(dateDebut: string | Date, dateFin: string | Date): boolean;
        static estAVenir(dateDebut: string | Date): boolean;
        static estPermanent(dateFin: string | Date): boolean;
        /**
         * Renvoie true si une date est comprise entre 2 autres.
         * Si la date est null, le résultat est true car on part du principe que le test n'a pas de sens.
         */
        static isBetween(date: Date, dateDebut: Date, dateFin: Date): boolean;
    }
}

declare module administrationAide.Modele {
    interface IEtablissement {
        cenfe: boolean;
        ceidf: boolean;
        celc: boolean;
        cera: boolean;
        cen: boolean;
        cepac: boolean;
        cemp: boolean;
        celr: boolean;
        cecaz: boolean;
        cepal: boolean;
        cff: boolean;
        cebfc: boolean;
        ceapc: boolean;
        celda: boolean;
        celca: boolean;
    }
    class EtablissementRecherche {
        cenfe: boolean;
        ceidf: boolean;
        celc: boolean;
        cera: boolean;
        cen: boolean;
        cepac: boolean;
        cemp: boolean;
        celr: boolean;
        cecaz: boolean;
        cepal: boolean;
        cff: boolean;
        cebfc: boolean;
        ceapc: boolean;
        celda: boolean;
        celca: boolean;
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
    class Etablissement {
        codeEtablissement: string;
        libelleEtablissement: string;
        designationEtablissement: string;
        actif: boolean;
        /**
         * Constructeur de la classe
         * @param code: string
         * @param libelle: string
         * @param designation: string
         */
        constructor(code?: string, libelle?: string, designation?: string);
    }
}

declare module administrationAide.Modele {
    interface IProcessus {
        codeProcessus: string;
        nomProcessus: string;
        dateExport?: Date;
        identifiantAgent?: string;
        etapes?: IEtape[];
    }
    interface IEtape {
        codeTechnique: string;
        codeMetier: string;
    }
    class Processus implements IProcessus {
        codeProcessus: string;
        nomProcessus: string;
        dateExport: Date;
        identifiantAgent: string;
        etapes: Etape[];
        constructor(donnees?: IProcessus);
    }
    class Etape implements IEtape {
        codeTechnique: string;
        codeMetier: string;
        constructor(donnees?: Etape);
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
    interface IFlashDTO {
        id: number;
        etablissement: string;
        processus: string;
        etape: string;
        dateDebut: Date;
        dateFin: Date;
        majUser: string;
        majDate: Date;
        exclusion: Array<string>;
        titre: string;
        contenu: string;
    }
    class Flash implements IFlashDTO {
        id: number;
        etablissement: string;
        processus: string;
        libelleProcessus: string;
        entree: string;
        etape: string;
        libelleEtape: string;
        titre: string;
        contenu: string;
        dateDebut: Date;
        sDateDebut: string;
        dateFin: Date;
        sDateFin: string;
        majUser: string;
        majDate: Date;
        exclusion: string[];
        /**
         * Indique si le flash est actif (vue établissement) : X si actif, vide sinon
         */
        actif: string;
        /**
         * Constructeur
         * @param publicationDateDebut: string - Date de début du message
         * @param publicationDateFin: string - Date de fin du message
         * @param majUtilisateur: string - Nom de l'utilisateur qui à fait la dernière MAJ
         * @param majDate: string - Date de la dernière MAJ utilisateur
         * @param etablissement: string - Recherche dans le etablissement
         * @param processus: string - Recherche par type processus
         * @param etat: string - affichage de l'état actif ou inactif
         * @param contenu: string - affichage du contenu
         */
        constructor(donnees?: Flash);
    }
}

declare module administrationAide.Service {
    import Flash = Modele.Flash;
    class FlashService {
        private $location;
        private serviceAgent;
        private etatService;
        private habilitationService;
        private notificationService;
        flash: Flash;
        selectionPrecedente: Flash;
        codeEtablissement: string;
        flashComplet: boolean;
        flashActivable: boolean;
        static $inject: string[];
        constructor($location: ng.ILocationService, serviceAgent: MyWay.Services.ServiceAgentExtended, etatService: Service.EtatService, habilitationService: Service.HabilitationService, notificationService: MyWay.UI.MwNotificationService);
        /**
         * Récupère la liste des flashs existants en base, avec des critères de recherche si nécessaire
         * @param params: any[] - Paramètres de recherche
         * @returns ng.IPromise<Flash[]> - La promesse de la requête, contenant les données trouvées
         */
        listerFlash(params?: any[]): ng.IPromise<Modele.Flash[]>;
        /**
         * @method creerFlash: Crée un flash en base
         * @param flash: Le flash à créer
         * @returns ng.IPromise<Flash> : promesse du traitement ajax
         */
        creerFlash(flash: Flash): ng.IPromise<Flash>;
        /**
         * @method: Mets à jour un Flash en base
         * @param flash: Flash : Flash à mettre à jour
         * @returns: ng.IPromise<Flash> - promesse de la requête
         */
        modifierFlash(flash: Flash): ng.IPromise<Flash>;
        /**
         * Supprime un flash en base de données
         * @param id: number - L'identifiant du flash à supprimer
         * @returns: ng.IPromise<string> - promesse de la requête
         */
        supprimerFlash(idFlash: number): ng.IPromise<string>;
        /**
         * Vérifie que la donnée n'existe pas déja dans la liste
         * @param flash: Flash - La donnée à tester
         * @param liste: Flash[] - La liste concernée
         * @returns :boolean - Le résultat du test
         */
        donneeExistante(flash: Flash, liste: Flash[]): boolean;
        /**
         * Active ou désactive le flash pour cet établissement
         * @param flash: Modele.Flash - Le flash à activer/désactiver pour cet établissement
         * @returns: ng.IPromise<Boolean> - promesse de la requête
         */
        activationFlash(flash: Modele.Flash): ng.IPromise<void>;
        /**
         * Active ou désactive le flash pour l'établissement de l'utilisateur connecté (mode établissement)
         * @param action: string - L'action à effectuer
         * @param flash: Flash - Le flash concerné
         * @returns flash - Le flash activé ou désactivé
         */
        private activationEtablissement(flash, disable);
        /**
         * Prépare le flash avant de l'envoyer aux services REST
         * @param flash: Flash - Le flash à préparer
         * @returns flash: Flash - Le flash prêt
         */
        private preparerFlash(flash);
        /**
         * Réinitialise les dates du flash, suite à la préparation précedente de la donnée lors de l'envoi vers le service web
         * @param flash: Flash - Le flash à traiter
         */
        reinitialiserDateFlash(flash: Flash): Flash;
        /**
         * Détermine si le flash courant est en cours
         * @param flash: Flash - Le flash à tester
         * @returns enCours: boolean - Le résultat
         */
        estEnCours(flash: Flash): boolean;
        /**
         * Détermine si le flash permanent courant est en cours
         * @param flash: flash - Le flash à tester
         * @returns enCoursPermanent: boolean - Le résultat
         */
        estPermanentEnCours(flash: Flash): boolean;
        /**
         * Détermine si le flash courant est archivé
         * @param flash: Flash - Le flash à tester
         * @returns archive: boolean - Le résultat
         */
        estArchive(flash: Flash): boolean;
        /**
         * Détermine si le flash courant est à venir
         * @param flash: Flash - Le flash à tester
         * @returns aVenir: boolean - Le résultat
         */
        estAVenir(flash: Flash): boolean;
        /**
         * Détermine si le flash courant est permanent
         * @param flash: Flash - Le flash à tester
         * @returns permanent: boolean - Le résultat
         */
        estPermanent(flash: Flash): boolean;
        /**
         * Détermine si le flash courant finit avant 7 jours
         * @param flash: Flash - Le flash à tester
         * @returns avantSeptJours: boolean - Le résultat
         */
        estFiniAvantSeptJours(flash: Flash): boolean;
        /**
         * Détermine si le flash est exclu par l'établissement de l'utilisateur connecté
         * @param flash: Flash - le flash à tester
         * @returns estExclu: boolean - Le résultat
         */
        estExclu(flash: Flash): boolean;
    }
    interface IFlashService {
        listerFlash: () => ng.IPromise<Flash[]>;
    }
}

declare module administrationAide.Modele {
    interface IApplication {
        codeApplication: string;
        codeEtablissement: string;
        libelleDeviceCompatible: string;
        codeVisibiliteApplication: number;
        libelleHabilitation: string;
        codeTypeApplication: number;
        libelleDescriptionApplication: string;
        libelleNomApplication: string;
        dateDebutDisponibilite: Date;
        dateFinDisponibilite: Date;
        codeBesoinOuvertureGuichet: number;
        codeClientIdentifie: number;
        codeSousFamilleCommunautaire: string;
        codeSousFamilleEtablissement: string;
        identifiantVersionDebutPublication: string;
        prepilote: number;
    }
    class Application implements IApplication {
        codeApplication: string;
        codeEtablissement: string;
        libelleDeviceCompatible: string;
        codeVisibiliteApplication: number;
        libelleHabilitation: string;
        codeTypeApplication: number;
        libelleDescriptionApplication: string;
        libelleNomApplication: string;
        dateDebutDisponibilite: Date;
        dateFinDisponibilite: Date;
        codeBesoinOuvertureGuichet: number;
        codeClientIdentifie: number;
        codeSousFamilleCommunautaire: string;
        codeSousFamilleEtablissement: string;
        identifiantVersionDebutPublication: string;
        prepilote: number;
        constructor(donnees?: Application);
    }
}

declare module administrationAide.Modele {
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
        majUser: string;
        idMywayAppliEtab: string;
        codeIndicVideo: string;
    }
    /**
     * Classe représentant un bagage
     */
    class Bagage {
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
        libelleTypeBagage: string;
        majDate: Date;
        sDateDebut: string;
        sDateFin: string;
        libelleProcessus: string;
        libelleEtape: string;
        codeApplication: string;
        majUser: string;
        idMywayAppliEtab: string;
        constructor(donnees?: IBagageDTO);
        toDto(): IBagageDTO;
    }
}

declare module administrationAide.Service {
    import Bagage = Modele.Bagage;
    import Categorie = Modele.Categorie;
    import Type = Modele.Type;
    class BagageService {
        private etatService;
        private serviceAgent;
        private notificationService;
        static $inject: string[];
        selectionPrecedente: Bagage;
        bagage: Bagage;
        duplication: boolean;
        bagageComplet: boolean;
        apercuDisponible: boolean;
        constructor(etatService: Service.EtatService, serviceAgent: MyWay.Services.ServiceAgentExtended, notificationService: MyWay.UI.MwNotificationService);
        /**
         * Récupère la liste des bagages en base de données, suivant le code établissement renseigné
         * @param criteres: RechercheBagage - les critères entrés pour la recherche
         * @returns :ng.IPromise - Promesse contenant la liste des bagages
         */
        listerBagage(params?: any[]): ng.IPromise<Bagage[]>;
        /**
         * Créé un bagage en base de données
         * @param bagage: Bagage - Le bagage à créer
         * @returns :ng.IPromise<Bagage> - Promesse de traitement, avec le bagage nouvellement créé
         */
        creerBagage(bagage: Bagage): ng.IPromise<Bagage>;
        /**
         * Modifie le bagage en base de données
         * @param bagage: Bagage - Le bagage à modifier
         * @returns :ng.IPromise<Bagage> - Promesse de traitement, avec le bagage modifié
         */
        modifierBagage(bagage: Bagage): ng.IPromise<Bagage>;
        /**
         * Prépare le bagage avant de l'envoyer aux web services
         * @parma bagage: Bagage - Bagage à préparer
         * @returns bagage: Bagage - Le bagage prêt à l'envoi
         */
        private preparerBagage(bagage);
        /**
         * Réinitialise les dates de l'infobulle (décalage de 2 heures pour le web service)
         * @param infobulle: Infobulle - L'infobulle
         * @returns infobulle: Infobulle - L'infobulle avec les dates réinitialisées
         */
        reinitialiserDateBagage(bagage: Bagage): Bagage;
        /**
         * Supprime le bagage en base de données
         * @param idBagage: number - Identifiant du bagage à supprimer
         */
        supprimerBagage(idBagage: number): ng.IPromise<any>;
        /**
         * Liste les catégories disponibles pour l'établissement
         * @returns :ng.IPromise<Categorie[]> - Promesse de récupération des catégories
         */
        listerCategories(): ng.IPromise<Categorie[]>;
        /**
         * Récupère les types différents de bagages
         * @returns promesse: IDeferred - Promesse de traitement
         */
        listerTypes(): ng.IPromise<Type[]>;
        /**
         * Récupère les applications disponibles pour la caisse
         * @returns promesse: ng.IPromise<any> - Promesse de retour du traitement
         */
        listerApplications(): ng.IPromise<any>;
        /**
         * Détermine si le flash courant est en cours
         * @param flash: Flash - Le flash à tester
         * @returns enCours: boolean - Le résultat
         */
        estEnCours(bagage: Bagage): boolean;
        /**
         * Détermine si le flash permanent courant est en cours
         * @param flash: flash - Le flash à tester
         * @returns enCoursPermanent: boolean - Le résultat
         */
        estPermanentEnCours(bagage: Bagage): boolean;
        /**
         * Détermine si le flash courant est archivé
         * @param flash: Flash - Le flash à tester
         * @returns archive: boolean - Le résultat
         */
        estArchive(bagage: Bagage): boolean;
        /**
         * Détermine si le flash courant est à venir
         * @param flash: Flash - Le flash à tester
         * @returns aVenir: boolean - Le résultat
         */
        estAVenir(bagage: Bagage): boolean;
        /**
         * Détermine si le flash courant est permanent
         * @param flash: Flash - Le flash à tester
         * @returns permanent: boolean - Le résultat
         */
        estPermanent(bagage: Bagage): boolean;
        /**
         * Vérifie que la donnée n'existe pas déja dans la liste
         * @param infobulle: Infobulle - La donnée à tester
         * @param liste: Infobulle[] - La liste concernée
         * @returns :boolean - Le résultat du test
         */
        donneeExistante(bagage: Bagage, liste: Bagage[]): boolean;
    }
}

declare module administrationAide.Modele {
    interface ICategorieDTO {
        id: number;
        etablissement: string;
        libelle: string;
        majDate: Date;
    }
    class Categorie implements ICategorieDTO {
        id: number;
        etablissement: string;
        libelle: string;
        majDate: Date;
        constructor(donnees?: Categorie);
    }
}

declare module administrationAide.Modele {
    interface IType {
        typeBagage: string;
        libelle: string;
    }
    class Type implements IType {
        typeBagage: string;
        libelle: string;
        constructor(donnees?: Type);
    }
}

declare module administrationAide.Modele {
    interface IChamp {
        id: number;
        nom: string;
        libelle: string;
    }
    class Champ implements IChamp {
        id: number;
        nom: string;
        libelle: string;
        /**
         * Constructeur de l'objet Champ
         * @param donnees? : Champ - Champ à partir duquel le nouvel objet Champ sera construit
         */
        constructor(donnees?: Champ);
    }
}

declare module administrationAide.Modele {
    interface IInfobulleDTO {
        id: number;
        idChamp: number;
        etablissement: string;
        processus: string;
        etape: string;
        dateDebut: Date;
        dateFin: Date;
        majUser: string;
        majDate: Date;
        dateFinNouveaute: Date;
        exclusion: string[];
        contenu: string;
        image: string;
        token: boolean;
        nomChamp: string;
        nouveaute: boolean;
        libelleChamp: string;
        personnalise: boolean;
        personnalisationEtablissement: boolean;
        libellePersonnalise: string;
    }
    class Infobulle implements IInfobulleDTO {
        id: number;
        idChamp: number;
        etablissement: string;
        processus: string;
        libelleProcessus: string;
        etape: string;
        libelleEtape: string;
        dateDebut: Date;
        dateFin: Date;
        majUser: string;
        majDate: Date;
        dateFinNouveaute: Date;
        exclusion: string[];
        contenu: string;
        contenuCommunautaire: string;
        contenuEtablissement: string;
        image: string;
        imageCommunautaire: string;
        hasImageEtablissement: boolean;
        token: boolean;
        nomChamp: string;
        nouveaute: boolean;
        libelleChamp: string;
        personnalise: boolean;
        personnalisationEtablissement: boolean;
        libellePersonnalise: string;
        constructor(donnees?: Infobulle);
    }
}

declare module administrationAide.Service {
    import Infobulle = Modele.Infobulle;
    import RechercheInfobulle = Modele.RechercheInfobulle;
    class InfobulleService {
        private $http;
        private serviceAgent;
        private etatService;
        private erreurService;
        private habilitationService;
        private notificationServce;
        infobulle: Infobulle;
        infobulleCommunautaire: Infobulle;
        contenuCommunautaire: string;
        dateDebutCommunautaire: Date;
        dateFinCommunautaire: Date;
        dateFinNouveauteCommunautaire: Date;
        listeZonesDeSaisie: Modele.Champ[];
        precedenteRecherche: RechercheInfobulle;
        tableauPrecedent: Infobulle[];
        selectionPrecedente: Infobulle;
        garderRechercheSimple: boolean;
        garderRechercheAvancee: boolean;
        rechercheInfobulleAvanceeSauvegardee: Modele.RechercheInfobulle;
        rechercheInfobulleSimpleSauvegardee: Modele.Champ;
        duplication: boolean;
        autorisationImage: boolean;
        infobulleComplete: boolean;
        infobullePersonnalisable: boolean;
        infobulleModifiable: boolean;
        static $inject: string[];
        constructor($http: ng.IHttpService, serviceAgent: MyWay.Services.ServiceAgentExtended, etatService: Service.EtatService, erreurService: Service.ErreurService, habilitationService: Service.HabilitationService, notificationServce: MyWay.UI.MwNotificationService);
        /**
         * Télécharge une image pour l'infobulle
         * @param fichier: File - Le fichier à télécharger, de type image
         * @param idInfobulle: number - L'identifiant de l'infobulle à mettre à jour.
         */
        telechargerImage(fichier: File, idInfobulle: number): void;
        /**
         * Supprime l'image de l'infobulle
         * @param idInfobulle: number - Identifiant de l'infobulle dont l'image sera supprimée
         */
        supprimerImage(idInfobulle: number): void;
        /**
         * Méthode de récupération des champs de saisie des formulaires MyWay
         */
        listerChampsMyWay(): ng.IPromise<administrationAide.Modele.Champ[]>;
        /**
         * Méthode de récupération des différents tokens disponibles
         * @returns promesse: ng.IPromise<administrationAide.Modele.Token[]> - Promesse de traitement
         */
        listerTokens(): ng.IPromise<administrationAide.Modele.Token[]>;
        /**
         * Fonction pour appeler le service rest pour effectuer une recherche d'infobulle
         * @param criteres: any[] - Critères de recherche
         * @returns :ng.IPromise<Infobulle> - Une promesse retournant la liste d'infobulles trouvées
         */
        listerInfobulle(criteres?: any[]): ng.IPromise<Infobulle[]>;
        /**
         * Fonction pour appeler le service rest de création d'une infobulle en base de données
         * @param infobulle: Infobulle - L'infobulle à créer
         * @returns :ng.IPromise<Infobulle> - Une promesse retournant l'infobulle créée en cas de réussite, ou rien en cas d'échec
         */
        creerInfobulle(infobulle: Infobulle): ng.IPromise<Infobulle>;
        /**
         * Fonction pour appeler le service rest de modification d'une infobulle en base de données
         * @param infobulle: Infobulle - L'infobulle à modifier
         * @returns :ng.IPromise<Infobulle> - Une promesse retournant l'infobulle modifiée en cas de réussite, ou rien en cas d'échec
         */
        modifierInfobulle(infobulle: Infobulle): ng.IPromise<Infobulle>;
        /**
         * Fonction pour appeler le service rest de suppression d'une infobulle en base de données
         * Une suppression de l'infobulle par le communautaire entraînera la suppression de toutes les personnalisations établissements
         * @param idInfobulle: number - L'identifiant de l'infobulle à supprimer
         * @returns : ng.IPromise<void> - Promesse ne retournant aucun type en cas de succès
         */
        supprimerInfobulle(idInfobulle: number): ng.IPromise<void>;
        /**
         * Prépare l'infobulle avant l'envoi de la requête de création/modification
         * @param infobulle: Infobulle - L'infobulle à préparer
         * @returns infobulle: Infobulle - L'infobulle prête
         */
        private preparerInfobulle(infobulle);
        /**
         * Réinitialise les dates de l'infobulle (décalage de 2 heures pour le web service)
         * @param infobulle: Infobulle - L'infobulle
         * @returns infobulle: Infobulle - L'infobulle avec les dates réinitialisées
         */
        reinitialiserDateInfobulle(infobulle: Infobulle): Infobulle;
        /**
         * Trie les infobulles en fonction des processus & étapes
         * @param a: Infobulle - L'infobulle à trier
         * @returns :number - Le résultat du tri
         */
        trierInfobulleProcessusEtapes(a: Infobulle): number;
        /**
         * Détermine si l'infobulle courante est en cours
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns enCours: boolean - Le résultat
         */
        estEnCours(infobulle: Infobulle): boolean;
        /**
         * Détermine si l'infobulle permanente courante est en cours
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns enCoursPermanent: boolean - Le résultat
         */
        estPermanentEnCours(infobulle: Infobulle): boolean;
        /**
         * Détermine si l'infobulle courante est archivée
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns archive: boolean - Le résultat
         */
        estArchive(infobulle: Infobulle): boolean;
        /**
         * Détermine si l'infobulle courante est à venir
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns aVenir: boolean - Le résultat
         */
        estAVenir(infobulle: Infobulle): boolean;
        /**
         * Détermine si l'infobulle courante est permanente
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns permanent: boolean - Le résultat
         */
        estPermanent(infobulle: Infobulle): boolean;
        getInfobullesPersonalisees(infobulle: Infobulle): ng.IPromise<Infobulle[]>;
        /**
         * Récupère les personnalisations d'une infobulle communautaire
         * @param infobulle: Infobulle - L'infobulle communautaire à tester
         * @param infobulles: Infobulle[] - L'ensemble d'infobulles
         * @returns donneesFinales: Infobulle[] - Les personnalisations infobulles
         */
        personnalisationsExistantes(infobulle: Infobulle, infobulles: Infobulle[]): Infobulle[];
        /**
         * Vérifie que la donnée n'existe pas déja dans la liste
         * @param infobulle: Infobulle - La donnée à tester
         * @param liste: Infobulle[] - La liste concernée
         * @returns :boolean - Le résultat du test
         */
        donneeExistante(infobulle: Infobulle, liste: Infobulle[]): boolean;
        /**
         * Récupère l'infobulle communautaire d'origine de la personnalisation établissement
         * @param personnalisation: Infobulle - La personnalisation
         * @param infobulles: Infobulle[] - Les infobulles existantes en base
         * @returns communautaire:Infobulle - L'infobulle communautaire d'origine
         */
        infobulleOriginePersonnalisation(personnalisation: Infobulle, infobulles: Infobulle[]): Infobulle;
        /**
         * Détermine si l'infobulle communautaire est personnalisée par l'établissement de l'utilisateur connecté
         * @param communautaire: Infobulle - La communautaire
         * @param infobulles: Infobulle[] - Les infobulles existantes en base
         * @returns estPersonnalisee: Infobulle - L'infobulle communautaire d'origine
         */
        infobulleCommunautairePersonnalisee(communautaire: Infobulle, infobulles: Infobulle[]): boolean;
    }
}

declare module administrationAide.Modele {
    interface IToken {
        id: number;
        nom: string;
        libelle: string;
    }
    class Token implements IToken {
        /**
         * Identifiant token
         */
        id: number;
        /**
         * Nom du token
         */
        nom: string;
        /**
         * Libelle token
         */
        libelle: string;
        /**
         * Constructeur de la classe
         */
        constructor(donnees: Token);
    }
}

declare module administrationAide {
    class MainControleur {
        private $rootScope;
        private $timeout;
        private serviceAgentExtended;
        private initialisationService;
        loading: boolean;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: InitialisationService);
    }
}

declare module administrationAide.Service {
    /**
     * Factory de traitement des erreurs REST retournés.
     * Traduit l'erreur récupérée en un message pour l'utilisateur
     */
    class ErreurService {
        private ERREURS;
        private modalService;
        static $inject: string[];
        /**
         * Constructeur de la classe
         * @param ERREURS: any - Erreurs rest
         */
        constructor(ERREURS: any, modalService: MyWay.UI.ModalService);
        /**
         * Retourne un message d'erreur en fonction du code de l'erreur récupéré
         * @param erreur: Erreur - L'erreur retourné par le service
         * @param typeErreur: string - le type d'erreur retourné
         */
        private traduireErreur(erreur, typeErreur?, messageAutre?);
        /**
         * Affiche une popup d'erreur, à partir de l'erreur retournée par le web service
         * @param erreur: MyWay.Services.Erreur - L'erreur web service
         * @param typeErreur: string - Le type d'erreur à afficher
         */
        afficherPopupErreur(erreur: MyWay.Services.Erreur, typeErreur?: string, message?: string): void;
    }
}

declare module administrationAide {
    class EtatControleur {
        private $animate;
        private $timeout;
        private $http;
        private $route;
        private $scope;
        private serviceAgent;
        private techAgent;
        bagageService: Service.BagageService;
        etatService: Service.EtatService;
        habilitationService: Service.HabilitationService;
        private infobulleService;
        private flashService;
        private notificationService;
        private initialisationService;
        habilitations: Habilitations;
        showSectionFlash: boolean;
        showSectionInfobulle: boolean;
        showSectionBagage: boolean;
        flashCommunautaireEnCours: number;
        flashEtablissementEnCours: number;
        flashCommunautaireFinissantAvant7Jours: number;
        flashEtablissementFinissantAvant7Jours: number;
        flashCommunautaireAVenir: number;
        flashEtablissementAVenir: number;
        infobulleCommunautaireEnCours: number;
        infobulleCommunautairePersonnalisations: number;
        infobulleCommunautaireAVenir: number;
        infobulleEtablissementPersonnalisations: number;
        infobulleEtablissementAVenirPersonnalisations: number;
        bagageEnCours: number;
        bagageAVenir: number;
        bagageApplication: number;
        bagageLien: number;
        bagageEscalade: number;
        bagageVideo: number;
        libelleLien: string;
        libelleEscalade: string;
        libelleVideo: string;
        static $inject: string[];
        constructor($animate: ng.IAnimateService, $timeout: ng.ITimeoutService, $http: ng.IHttpService, $route: ng.route.IRouteService, $scope: ng.IScope, serviceAgent: MyWay.Services.ServiceAgentExtended, techAgent: MyWay.Services.TechAgentExtended, bagageService: Service.BagageService, etatService: Service.EtatService, habilitationService: Service.HabilitationService, infobulleService: Service.InfobulleService, flashService: Service.FlashService, notificationService: MyWay.UI.IMwNotificationService, initialisationService: InitialisationService);
        /**
         * Ferme l'application
         */
        fermerApplication(): void;
        /**
         * Switch entre mode communautaire et mode établissement
         */
        toggleMode(): void;
        /**
         * Récupère les applications de l'établissement
         */
        private recupererApplicationsEtablissement();
        /**
         * Remise à zéro des compteurs
         */
        private razCompteurs();
        /**
         * Récupère les informations de toutes les infobulles en bases de données
         */
        private recupererInformationsInfobulles();
        /**
         * Retourne le nombre d'infobulles avec de la personnalisation établissement
         * @param infobulles: Infobulle[] - La liste d'infobulles
         * @returns nombrePersonnalisees :number - Le nombre d'infobulles personnalisées
         */
        private nombreInfobullesPersonnalisees(infobulles);
        /**
         * Récupère les informations de tous les flashs en bases de données
         */
        private recupererInformationsFlashs();
        /**
         * Récupère les informations de tous les bagages en bases de données
         */
        private recupererInformationsBagages();
    }
}

declare module administrationAide.Service {
    import Application = Modele.Application;
    import Champ = Modele.Champ;
    import Etape = Modele.Etape;
    import Processus = Modele.Processus;
    import Type = Modele.Type;
    class EtatService {
        private $http;
        private $q;
        static $inject: string[];
        referenceExterneAgent: string;
        codeEtablissement: string;
        codeUtilisateur: string;
        listeProcessus: Processus[];
        emptyProcessus: Processus;
        listeEtapes: Etape[];
        listeEtablissements: Modele.Etablissement[];
        listeTypes: Modele.Type[];
        emptyType: Modele.Type;
        listeApplications: Modele.Application[];
        rechercheFlashSauvegardee: Modele.RechercheFlash;
        rechercheBagageSauvegardee: Modele.RechercheBagage;
        garderResultats: boolean;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $http: ng.IHttpService, $q: ng.IQService);
        /**
         * Tri par ordre alphabétique les champs
         */
        trierChamps(a: Champ, b: Champ): number;
        /**
         * Tri par ordre alphabétique les processus
         */
        trierProcessus(a: Processus, b: Processus): number;
        /**
         * Tri par ordre alphabétique les étapes
         */
        trierEtapes(a: Etape, b: Etape): number;
        /**
         * Tri par ordre alphabétique les types de bagage
         */
        trierTypesBagages(a: Type, b: Type): number;
        /**
         * Tri par ordre alphabétique les applications
         */
        trierApplications(a: Application, b: Application): number;
    }
}

declare module administrationAide.Service {
    class HabilitationService {
        protected $q: ng.IQService;
        protected $location: ng.ILocationService;
        protected serviceAgent: MyWay.Services.ServiceAgentExtended;
        /**
         * Contient une liste d'habilitations indexée par le code
         */
        habilitations: Habilitations;
        static $inject: string[];
        constructor($q: ng.IQService, $location: ng.ILocationService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupère l'ensemble des habilitations de l'utilisateur
         * @returns ng.IPromise<void> - Résolu quand l'opération est terminée
         */
        recupererHabilitations(): ng.IPromise<void>;
        /**
         * Renvoie toutes les habilitations stockées dans le service.
         */
        protected getHabilitations(): ng.IPromise<{
            [code: string]: boolean;
        }>;
    }
}

declare module administrationAide {
    /**
     * Conteneur pour les habilitations.
     */
    class Habilitations {
        private habilitations;
        sectionFlash: boolean;
        lecteurFlash: boolean;
        redacteurFlash: boolean;
        communautaireFlash: boolean;
        communautaireFlashPossible: boolean;
        sectionInfobulle: boolean;
        lecteurInfobulle: boolean;
        redacteurInfobulle: boolean;
        communautaireInfobulle: boolean;
        communautaireInfobullePossible: boolean;
        sectionBagage: boolean;
        lecteurBagage: boolean;
        redacteurBagage: boolean;
        communautaireBagage: boolean;
        modeCommunautaire: boolean;
        communautairePossible: boolean;
        constructor(habilitations: {
            [code: string]: boolean;
        });
        toggleMode(): void;
        private initHabilitationsDynamiques();
    }
    /**
     * Liste des codes habilitations utilisés par l'administration aide
     */
    class CodeHabilitation {
        /**
         * Lecteur Flash
         */
        static SHDMW2: string;
        /**
         * Rédacteur Flash
         */
        static SHDMW3: string;
        /**
         * Communautaire Flash
         */
        static SHDMW4: string;
        /**
         * Administrateur Communautaire Flash Possible
         */
        static SHDMWG: string;
        /**
         * Lecteur Infobulle
         */
        static SHDMW5: string;
        /**
         * Rédacteur Infobulle
         */
        static SHDMW6: string;
        /**
         * Communautaire Infobulle
         */
        static SHDMW7: string;
        /**
         * Administrateur Communautaire Infobulle Possible
         */
        static SHDMWH: string;
        /**
         * Lecteur Bagage
         */
        static SHDMW8: string;
        /**
         * Rédacteur Bagage
         */
        static SHDMW9: string;
        /**
         * Communautaire Bagage
         */
        static SHDMWA: string;
        /**
         * Super administrateur
         */
        static SHDMWB: string;
        static list(): string[];
    }
}

declare module administrationAide {
    class NavigationControleur {
        $routeParams: ng.route.IRouteParamsService;
        private $rootScope;
        private $timeout;
        private serviceAgentExtended;
        private habilitationService;
        private bagageService;
        private flashService;
        private infobulleService;
        private navigationService;
        private initialisationService;
        afficherTotemPrincipal: boolean;
        afficherTotemSecondaire: boolean;
        getLibelleMode: () => string;
        navigationPrincipale: MyWay.UI.TotemComponent[];
        navigationSecondaire: MyWay.UI.TotemComponent[];
        sectionsFlash: MyWay.UI.TotemSection[];
        sectionsInfobulles: MyWay.UI.TotemSection[];
        sectionsBagages: MyWay.UI.TotemSection[];
        private pages;
        private habilitations;
        static $inject: string[];
        constructor($routeParams: ng.route.IRouteParamsService, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, habilitationService: Service.HabilitationService, bagageService: Service.BagageService, flashService: Service.FlashService, infobulleService: Service.InfobulleService, navigationService: MyWay.UI.NavigationService, initialisationService: InitialisationService);
        /**
         * Initialise le totem principal
         */
        private initTotemNavigationPrincipal();
        /**
         * Initialise le totem détail du flash
         */
        private initTotemNavigationFlash();
        /**
         * Initialise le totem détail infobulle
         */
        private initTotemNavigationInfobulle();
        /**
         * Initialise le totem  détail bagage
         */
        private initTotemNavigationBagage();
    }
}

declare module administrationAide {
    class Routes {
        static PATH_ETAT_AIDE: string;
        static PATH_FLASH_LISTE: string;
        static PATH_FLASH_DETAIL: string;
        static PATH_INFOBULLE_LISTE: string;
        static PATH_INFOBULLE_DETAIL: string;
        static PATH_BAGAGE_LISTE: string;
        static PATH_BAGAGE_DETAIL: string;
        static PATH_NON_AUTORISE: string;
    }
    enum PagesEnum {
        Etat = 0,
        FlashListe = 1,
        FlashDetail = 2,
        InfobulleListe = 3,
        InfobulleDetail = 4,
        BagageListe = 5,
        BagageDetail = 6,
    }
    class Pages {
        private pages;
        constructor();
        get(code: PagesEnum): MyWay.UI.TotemPage;
        getPageByPath(path: string): MyWay.UI.TotemPage;
        getCodeByPath(path: string): PagesEnum;
    }
}

declare module administrationAide {
    class InitialisationService {
        private $q;
        private $timeout;
        private $location;
        private serviceAgent;
        private techAgent;
        private habilitationService;
        private erreurService;
        private etatService;
        private bagageService;
        private infobulleService;
        /**
         * L'application démarre lorsque cette promesse est résolue
         */
        initPromise: ng.IPromise<any>;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, $location: ng.ILocationService, serviceAgent: MyWay.Services.ServiceAgentExtended, techAgent: MyWay.Services.TechAgent, habilitationService: Service.HabilitationService, erreurService: administrationAide.Service.ErreurService, etatService: Service.EtatService, bagageService: Service.BagageService, infobulleService: Service.InfobulleService);
        init(): ng.IPromise<any>;
        /**
         * Récupération de la référence externe agent et du code établissement
         */
        private recupererAuthentificationInfo();
        /**
         * Récupération de la liste des établissements connus en base
         */
        recupererEtablissements(): ng.IPromise<void>;
        /**
         * Récupération des types de bagages
         */
        private recupererTypesBagage();
        /**
         * Récupération des types de bagages
         */
        private recupererChampsInfobulles();
        /**
         * Récupère les processus Lisa du référentiel
         */
        recupererProcessus(): ng.IPromise<void>;
        /**
         * Récupère les étapes des différents processus obtenus du référentiel Lisa
         */
        private recupererEtapes(processus);
    }
}

declare module administrationAide {
    class ApercuFlashControleur {
        private $scope;
        private $modalInstance;
        private $sce;
        private etatService;
        flash: Modele.Flash;
        static $inject: string[];
        private desactiver;
        private imgUrl;
        /**
         * Constructeur du controleur de la modal
         * @param $scope: ng.IScope - Scope de la modal
         * @param $modalInstance: ng.ui.bootstrap.IModalServiceInstance - Instance de la modal bootstrap
         * @param $compile: ng.ICompileService - Service de compilation du code html correspondant au contenu du flash
         * @param etatService: Service.EtatService - Service par défaut de l'application
         * @param flash: Flash - Flash dont le contenu sera affiché
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $sce: ng.ISCEService, etatService: Service.EtatService, flash: Modele.Flash);
        /**
         * Compile le contenu du flash en tant qu'élément html
         */
        private compilerContenu();
        /**
         * Ferme la modal
         */
        private fermerModal();
    }
}

declare module administrationAide {
    import Processus = Modele.Processus;
    class DetailFlashControleur {
        private $location;
        private $scope;
        private modalService;
        private serviceAgent;
        private etatService;
        private erreurService;
        private flashService;
        private notificationService;
        private initialisationService;
        listeProcessus: Modele.Processus[];
        listeEtablissements: Modele.Etablissement[];
        private libelleSelection;
        private toutSelectionne;
        private flash;
        private formValide;
        titre: string;
        private previsualiserFlash;
        listeEtapes: any[];
        private titreValide;
        private processusValide;
        private etapeValide;
        private contenuValide;
        private contenuPlein;
        private datesCoherentes;
        dateDebutValide: boolean;
        dateFinValide: boolean;
        dateMinimale: string;
        dateFinMinimale: string;
        tinymceOptions: any;
        static $inject: string[];
        constructor($location: ng.ILocationService, $scope: ng.IScope, modalService: MyWay.UI.IModalService, serviceAgent: MyWay.Services.ServiceAgentExtended, etatService: Service.EtatService, erreurService: Service.ErreurService, flashService: Service.FlashService, notificationService: MyWay.UI.IMwNotificationService, initialisationService: InitialisationService);
        /**
         * Détermine si le flash est complet pour validation
         * @returns complet: boolean - Résultat du test
         */
        private estFlashComplet();
        /**
         * Récupère le flash sélectionné via la recherche
         */
        private recupererFlash();
        /**
         * Décoche les établissements exclus du flash
         */
        private decocheEtablissements(exclus, codeEtablissements);
        /**
         * Sélectionne (ou désélectionne) tous les établissements
         */
        toutSelectionner(): void;
        /**
         * Met à jour la case tout sélectionner en fonction de ce qui est coché à la main
         */
        selectionner(): void;
        /**
         * Construit la popin de prévisualisation
         */
        previsualiser(): void;
        /**
         * Vérifie que le flash est valide
         */
        flashValide(): boolean;
        /**
         * Fonction appelé par le bouton de validation
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        validerFlash(): void;
        /**
         * Vérifie que les informations obligatoires du flash sont remplies
         * @returns : boolean - Le résultat de la vérification
         */
        private verifierFlash();
        /**
         * Met à jour les coches d'établissement en fonction de ceux exclus du flash
         */
        private recupererEtablissementsFlash();
        /**
         * Exclut les établissements qui ne sont pas cochés par l'utilisateur
         */
        private exclureEtablissements();
        /**
         * Annule la création/modification du flash en cours puis redirige sur la page de liste des flashs
         */
        annulerFlash(): void;
        /**
         * Vide la liste des étapes et appelle la méthode pour charger les étapes en fonction du processus sélectionné
         * @param processus: Processus - Le processus sélectionné
         */
        private chargerEtapes(processus);
        /**
         * Récupère les étapes en fonction du processus sélectionné
         * @param processus: any - Processus sélectionné
         */
        recupererEtapes(processus: Processus): void;
        /**
         * Contrôle la date saisie au clavier dans le composant mw-inputdate, et désactive la validation s'il y a erreur
         * @param qualificatif: string - Chaîne déterminant quelle date sera contrôlée
         */
        private controleDate(qualificatif);
        /**
         * Retourne une valeur indiquant si oui ou non les dates du flash sont valides
         * @returns :boolean - Le résultat
         */
        private datesFlashValides();
    }
}

declare module administrationAide {
    class ListeFlashControleur implements MyWay.UI.ISelectionChangeHandler {
        private $location;
        private $rootScope;
        private $route;
        private $sce;
        private $scope;
        private $timeout;
        private serviceAgent;
        private flashService;
        etatService: Service.EtatService;
        habilitationService: Service.HabilitationService;
        private modalService;
        private initialisationService;
        habilitations: Habilitations;
        listeProcessus: Modele.Processus[];
        private afficheResultat;
        private rechercheFlash;
        private listeResultatFlash;
        private resultatSelectionne;
        private nombreResultat;
        private tableau;
        private idFlashSelectionne;
        private longueurTableauMax;
        private url;
        libelleActivation: string;
        criteresDatesOK: boolean;
        rechercheEnCours: boolean;
        static $inject: string[];
        constructor($location: ng.ILocationService, $rootScope: ng.IRootScopeService, $route: ng.route.IRouteService, $sce: ng.ISCEService, $scope: ng.IScope, $timeout: ng.ITimeoutService, serviceAgent: MyWay.Services.ServiceAgentExtended, flashService: Service.FlashService, etatService: Service.EtatService, habilitationService: Service.HabilitationService, modalService: MyWay.UI.ModalService, initialisationService: InitialisationService);
        onChangeEtat(): void;
        onChangeDate(dateDebut: boolean): void;
        /**
         * Contrôle les paramètres de la route pour effectuer une recherche en fonction du code utilisé, s'il existe
         */
        private controleRoute();
        /**
         * Sauvegarde la recherche effectuée
         */
        private sauvegarderRecherche();
        /**
         * Fonction d'appel du service rest de recherche
         */
        rechercherFlashs(): void;
        /**
         * Vérifie la cohérence des dates de recherche entrées
         * @returns criteresOK: boolean - Le résultat du test de cohérence
         */
        private verifierCriteres();
        private completerInformationsFlash(flashs);
        /**
         * Filtre les résultats de la recherche, en fonction de ce qui est coché par l'utilisateur
         * @param rechercheFlash: RechercheFlash - Objet contenant les critères de recherche
         * @param listeResultats: Flash[] - Les resultats de la recherche
         * @returns listeFiltree: Flash[] - Les résultats filtrés
         */
        private filtrerFlashs(rechercheFlash, listeResultats);
        /**
         * Récupère les paramètres s'ils ne sont pas vides, sous forme d'un dictionnaire
         * @param rechercheFlash: RechercheFlash - L'objet contenant les critères de recherche
         * @returns :any[] - La liste des paramètres
         */
        private construireParametres(rechercheFlash);
        /**
         * Fonction d'affichage du nombre de résultats
         * @parma nombre: number - Le onmbre de résultats
         */
        nombreResultats(nombre: number): void;
        /**
         * Fonction pour construire le tableau composant MyWay simple mono-sélection ou complexe
         * Voir application guide de style pour plus d'information
         */
        construireTableau(tableau: Modele.Flash[]): void;
        /**
         * Fonction déclenchée à la sélection/déselection d'une ligne du tableau
         */
        onSelectionChange(flashSelectionne: Modele.Flash): void;
        /**
         * Traitement sur la sélection d'un flash dans le tableau
         * @param flashSelectionne: Flash - Le flash sélectionné
         */
        private traitementSelection(flashSelectionne);
        /**
         * Fonction pour supprimer le flash sélectionné
         */
        supprimerFlash(): void;
        /**
         * Redirige l'utilisateur sur la page de création d'un flash
         */
        creerFlash(): void;
        /**
         * Fonction pour modifier le flash sélectionné
         */
        modifierFlash(): void;
        /**
         * Fonction pour modifier l'activation du flash pour l'établissement
         */
        activationFlash(): void;
        /**
         * Construit la popin de prévisualisation
         */
        previsualiser(): void;
    }
}

declare module administrationAide.Modele {
    interface IRechercheFlash {
        processus?: string;
        publicationDateDebut?: Date;
        publicationDateFin?: Date;
        etatArchive?: boolean;
        etatEnCours?: boolean;
        etatAVenir?: boolean;
        etatPermanent?: boolean;
    }
    class RechercheFlash implements IRechercheFlash {
        processus: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        etatSemaine: boolean;
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
        constructor(donnees?: RechercheFlash);
    }
}

declare module administrationAide {
    import Processus = Modele.Processus;
    class DetailBagageControleur {
        private $http;
        private $location;
        private $scope;
        private $timeout;
        private $window;
        private serviceAgent;
        private etatService;
        private erreurService;
        private bagageService;
        private notificationService;
        private initialisationService;
        listeProcessus: Modele.Processus[];
        listeEtapes: Modele.Etape[];
        private listeTypes;
        private listeApplications;
        private titre;
        private processusValide;
        private etapeValide;
        private typeValide;
        private titreValide;
        private dateDebutValide;
        private dateFinValide;
        private datesCoherentes;
        private dateFinNouveauteValide;
        private dateFinNouveauteCoherente;
        private urlPresente;
        private urlValide;
        private applicationValide;
        private afficherValiditeUrl;
        private dateMinimale;
        private bagage;
        private codeProcessus;
        private codeEtape;
        private nomChampCodeSecondaire;
        private nomChampCodeTertiaire;
        static $inject: string[];
        constructor($http: ng.IHttpService, $location: ng.ILocationService, $scope: ng.IScope, $timeout: ng.ITimeoutService, $window: ng.IWindowService, serviceAgent: MyWay.Services.ServiceAgentExtended, etatService: Service.EtatService, erreurService: Service.ErreurService, bagageService: Service.BagageService, notificationService: MyWay.UI.IMwNotificationService, initialisationService: InitialisationService);
        onSelectType(): void;
        /**
         * Prépare les infobulles correspondant aux champs "Clé secondaire" et "Clé tertiaire"
         */
        private preparerInfobulles();
        /**
         * Récupère le bagage pour la modification, ou duplication
         */
        private recupererBagage();
        /**
         * Détermine si le bagage est complet pour validation
         * @returns complet: boolean - Résultat du test
         */
        private estBagageComplet();
        /**
         * Vide la liste des étapes et appelle la méthode pour charger les étapes en fonction du processus sélectionné
         * @param processus: Processus - Le processus sélectionné
         */
        private chargerEtapes(processus);
        /**
         * Récupère les étapes en fonction du processus sélectionné
         * @param processus: any - Processus sélectionné
         */
        recupererEtapes(processus: Processus): void;
        /**
         * Annule la création/modification du bagage et redirige vers la page de recherche de bagages
         */
        private annulerBagage();
        /**
         * Déclenche le contrôle du bagage, puis l'envoi de celui-ci
         */
        private validerBagage();
        /**
         * Effectue les contrôles de validité du bagage, et affiche les messages d'erreur si nécessaire
         * @returns bagageOK: boolean - Le résultat du contrôle
         */
        private verifierBagage();
        /**
         * Contrôle du format de l'url saisie
         * @param url: string - L'URL saisie
         * @returns urlOK: boolean - La validité du test
         */
        private controleURL(url);
        /**
         * Teste l'url passée dans le champ correspondant en l'ouvrant dans un nouvel onglet
         */
        private testerURL();
        /**
         * Complère le titre en fonction de l'application choisie
         * @param application: Application - L'applicatione
         */
        private completerTitre(application);
        /**
         * Contrôle la date saisie au clavier dans le composant mw-inputdate, et désactive la validation s'il y a erreur
         * @param qualificatif: string - Chaîne déterminant quelle date sera contrôlée
         */
        private controleDate(qualificatif);
        /**
         * Retourne une valeur indiquant si oui ou non les dates de l'bagage sont valides
         * @returns :boolean - Le résultat
         */
        private datesBagageValides();
        private onChangeNouveaute();
    }
}

declare module administrationAide {
    import Bagage = Modele.Bagage;
    import Type = Modele.Type;
    class ListeBagagesControleur {
        private serviceAgent;
        private $location;
        private $route;
        private $scope;
        private $timeout;
        private $window;
        private etatService;
        private erreurServuce;
        private bagageService;
        habilitationService: Service.HabilitationService;
        private modalService;
        private notificationService;
        private initialisationService;
        habilitations: Habilitations;
        listeProcessus: Modele.Processus[];
        listeTypes: Type[];
        private rechercheBagage;
        private criteresDatesOK;
        resultatsBagages: Bagage[];
        private tableau;
        private longueurTableauMax;
        private idBagageSelectionne;
        private resultatSelectionne;
        private nombreResultat;
        private afficheResultat;
        private rechercheEnCours;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, $route: ng.route.IRouteService, $scope: ng.IScope, $timeout: ng.ITimeoutService, $window: ng.IWindowService, etatService: Service.EtatService, erreurServuce: Service.ErreurService, bagageService: Service.BagageService, habilitationService: Service.HabilitationService, modalService: MyWay.UI.IModalService, notificationService: MyWay.UI.IMwNotificationService, initialisationService: InitialisationService);
        onChangeEtat(): void;
        onChangeDate(dateDebut: boolean): void;
        /**
         * Contrôle les paramètres de la route pour effectuer une recherche en fonction du code utilisé, s'il existe
         */
        private controleRoute();
        /**
         * Recupère la recherche précédente
         */
        private recupererRecherche();
        /**
         * Sauvegarde la recherche effectuée
         */
        private sauvegarderRecherche();
        /**
         * Recherche les bagages en base
         */
        rechercherBagages(): void;
        private completerInformations(bagages);
        /**
         * Vérifie la cohérence des critères de recherche entrés
         */
        private verifierCriteres();
        /**
         * Récupère les paramètres s'ils ne sont pas vides, sous forme d'un dictionnaire
         * @param rechercheBagage: RechercheBagage - L'objet contenant les critères de recherche
         * @returns :any[] - La liste des paramètres
         */
        private construireParametres(rechercheBagage);
        /**
         * Filtre les résultats de la recherche, en fonction de ce qui est coché par l'utilisateur
         * @param rechercheBagage: RechercheBagage - Objet contenant les critères de recherche
         * @param listeResultats: Bagage[] - Les resultats de la recherche
         * @returns listeFiltree: Bagage[] - Les résultats filtrés
         */
        private filtrerBagages(rechercheBagage, listeResultats);
        /**
         * Filtre la liste des résultats par rapport aux types de bagage
         * @param rechercheBagage: RechercheBagage - L'objet de critères de recherche
         * @param listeBagages: Bagage[] - Liste de bagages à filtrer
         * @returns listeBagages: Bagage[] - Liste de bagages filtrée
         */
        private filtrerTypes(rechercheBagage, listeBagages);
        /**
         * Fonction pour construire le tableau composant MyWay simple mono-sélection ou complexe
         * Voir application guide de style pour plus d'information
         */
        construireTableau(tableau: Bagage[]): void;
        onSelectionChange(bagageSelectionne: Bagage): void;
        /**
         * Traite la sélection du tableau
         * @param bagageSelectionne: Bagage
         */
        private traitementSelection(bagageSelectionne);
        /**
         * Redirige vers la page de création d'un bagage
         */
        private creerBagage();
        /**
         * Redirige vers la page de création, pour modifier le bagage sélectionné
         */
        private modifierBagage();
        /**
         * Redirige vers la page de création, pour dupliquer le bagage sélectionné
         */
        private dupliquerBagage();
        /**
         * Demande une confirmation de suppression du bagage sélectionné, puis le supprime
         */
        private supprimerBagage();
        /**
         * Visualise le lien du bagage (de type différent du type application)
         */
        private visualiserBagage();
    }
}

declare module administrationAide.Modele {
    interface IRechercheBagage {
        processus?: string;
        publicationDateDebut?: Date;
        publicationDateFin?: Date;
        etatArchive?: boolean;
        etatEnCours?: boolean;
        etatAVenir?: boolean;
        etatPermanent?: boolean;
        type?: string;
    }
    class RechercheBagage implements IRechercheBagage {
        processus: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        type: string;
        constructor(donnees?: RechercheBagage);
    }
}

declare module administrationAide {
    import Infobulle = Modele.Infobulle;
    class ApercuInfobulleControleur {
        private $modalInstance;
        private infobulle;
        static $inject: string[];
        private titre;
        private processus;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, infobulle: Infobulle);
        private fermerModal();
    }
}

declare module administrationAide {
    class DetailInfobulleControleur {
        private $document;
        private $location;
        private $route;
        private $sce;
        private $scope;
        private $timeout;
        private $q;
        private etatService;
        habilitationService: Service.HabilitationService;
        private erreurService;
        private infobulleService;
        private modalService;
        private notificationService;
        private serviceAgent;
        private initialisationService;
        private infobulleAideService;
        habilitations: Habilitations;
        listeProcessus: Modele.Processus[];
        private titre;
        private libelleSelection;
        private selection;
        private infobulle;
        private infobullePrevisualisation;
        private etablissementRecherche;
        private toutSelectionne;
        private previsualiserInfobulle;
        private test;
        private listeEtapes;
        private listeTokens;
        private token;
        private montrerApercu;
        compteurContenu: string;
        formatOK: boolean;
        tailleOK: boolean;
        poidsOK: boolean;
        private informationsImage;
        private sDateDebut;
        private sDateFin;
        private sDateFinNouveaute;
        private processusBase;
        private etapeBase;
        private dateDebutBase;
        private dateFinBase;
        dateMinimale: Date;
        private contenuValide;
        private dateDebutValide;
        private dateDebutPersoValide;
        private dateFinValide;
        private dateFinPersoValide;
        private dateFinPersoPresente;
        private dateDebutCoherente;
        private dateFinCoherente;
        private dateFinNouveauteValide;
        private dateFinNouveauteCoherente;
        autorisationImage: boolean;
        private imageASupprimer;
        private detailImage;
        contenuLongueurMax: number;
        static $inject: string[];
        constructor($document: ng.IDocumentService, $location: ng.ILocationService, $route: ng.route.IRouteService, $sce: ng.ISCEService, $scope: ng.IScope, $timeout: ng.ITimeoutService, $q: ng.IQService, etatService: Service.EtatService, habilitationService: Service.HabilitationService, erreurService: Service.ErreurService, infobulleService: Service.InfobulleService, modalService: MyWay.UI.IModalService, notificationService: MyWay.UI.IMwNotificationService, serviceAgent: MyWay.Services.ServiceAgentExtended, initialisationService: InitialisationService, infobulleAideService: any);
        /**
         * Récupère les tokens en base de données
         */
        private recupererTokens();
        /**
         * Complète le contenu de l'infobulle par le token sélectionné
         */
        private ajouterToken();
        /**
         * Détermine si le infobulle est complet pour validation
         * @returns complet: boolean - Résultat du test
         */
        private estinfobulleComplete();
        /**
         * Annule l'action sur l'infobulle
         */
        private annulerInfobulle();
        /**
         * Créé ou modifie l'infobulle en base via le service et redirige sur la page de recherche d'infobulles
         * @param apercu: boolean - Valeur indiquant si oui ou non la création est faite pour l'aperçu de l'infobulle (pas de redirection arès création)
         */
        private validerInfobulle(apercu);
        /**
         * Crée l'infobulle en base de données
         * @param infobulle: Infobulle - L'infobulle à créer
         */
        private creerInfobulle(infobulle, apercu);
        /**
         * Modifie l'infobulle en base de données
         * @param infobulle: Infobulle - L'infobulle à modifier
         */
        private modifierInfobulle(infobulle);
        private notifierTraitementInfobulle(message);
        /**
         * Vérifie la validité de l'infobulle
         * @returns promesse résolue si valide
         */
        private verifierInfobulle();
        /**
         * Bloque la modification d'une infobulle communautaire si cette dernière est personnalisée, et qu'il y a un changment de processus ou d'étape
         * @returns bloquee: Boolean - Valeur indiquant si oui ou non la modification doit être bloquée
         */
        private modificationBloquee();
        /**
         * Télécharge l'image liée à l'infobulle
         * @param idInfobulle: number - L'identifiant de l'infobulle à laquelle lier l'image
         * @param image: any - L'image à télécharger
         */
        telechargerImage(idInfobulle: number, image: any): void;
        /**
         * Récupère l'infobulle sélectionnée en page de recherche
         */
        private recupererInfobulle();
        /**
         * Récupère les informations communautaire à laquelle la personnalisation infobulle établissement est liée
         */
        private recupererInformationsCommunautaire();
        /**
         * Charge les étapes après avoir choisi un processus
         * @param processus: any - Le processus sélectionné
         */
        private chargerEtapes(processus);
        /**
         * Récupère les étapes liés au processus
         * @param processus: any - Le processus
         */
        private recupererEtapes(processus);
        /**
         * Génère l'image à la volée pour le rendu, puis indique la validité de celle-ci en fonction de sa taille, de son poids et de son format
         */
        genererImage(): void;
        /**
         * Sélectionne l'input type 'file' pour ouvrir une fenetre de sélection de fichier
         */
        private selectionImage();
        /**
         * Supprime l'image sélectionnée
         */
        private supprimerImage();
        /**
         * Contrôle la date saisie au clavier dans le composant mw-inputdate, et désactive la validation s'il y a erreur
         * @param qualificatif: string - Chaîne déterminant quelle date sera contrôlée
         */
        private controleDate(qualificatif);
        /**
         * Retourne une valeur indiquant si oui ou non les dates de l'infobulle sont valides
         * @returns :boolean - Le résultat
         */
        private datesInfobulleValides();
        private onChangeNouveaute();
    }
}

declare module administrationAide {
    import Infobulle = Modele.Infobulle;
    import Champ = Modele.Champ;
    import Action = Modele.Action;
    class ListeInfobulleControleur {
        private $rootScope;
        private $route;
        private $sce;
        private $scope;
        private $location;
        private serviceAgent;
        private etatService;
        habilitationService: Service.HabilitationService;
        private infobulleService;
        private modalService;
        private notificationService;
        private initialisationService;
        private infobulleAideService;
        habilitations: Habilitations;
        listeProcessus: Modele.Processus[];
        listeEtapes: Modele.Etape[];
        private listeEtablissements;
        listeZonesDeSaisie: Champ[];
        private idInfobulleSelectionne;
        private afficheCriteres;
        private libelleResultats;
        private afficheResultat;
        private afficheSupprimer;
        private rechercheInfobulle;
        zoneSelectionnee: Modele.Champ;
        private listeResultatInfobulle;
        resultatSelectionne: Modele.Infobulle;
        private nombreResultat;
        tableau: MyWay.UI.ImwTableOptions;
        private resultatsInfobulles;
        private listeInfobulles;
        private resultatsTemporaires;
        listePersonnalisations: any[];
        codeEtablissement: string;
        listeActions: Action[][];
        private longueurTableau;
        criteresDatesOK: boolean;
        private controleAutorisationImage;
        private parametres;
        rechercheEnCours: boolean;
        constantes: typeof Constantes;
        activeApercuInfobulle: boolean;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $route: ng.route.IRouteService, $sce: ng.ISCEService, $scope: ng.IScope, $location: ng.ILocationService, serviceAgent: MyWay.Services.ServiceAgentExtended, etatService: Service.EtatService, habilitationService: Service.HabilitationService, infobulleService: Service.InfobulleService, modalService: MyWay.UI.ModalService, notificationService: MyWay.UI.IMwNotificationService, initialisationService: InitialisationService, infobulleAideService: any);
        onChangeEtat(): void;
        onChangeDate(dateDebut: boolean): void;
        /**
         * Contrôle les paramètres de la route pour effectuer une recherche avec critères en fonction du code utilisé, s'il existe
         */
        private controleRoute();
        /**
         * Fonction d'afficage des autres critères de recherche, et de remise à zéro de l'affichage des résultats
         */
        afficherCriteres(): void;
        /**
         * Fonction d'afficage du nombre de résultats
         */
        nombreResultats(): void;
        /**
         * Effectue une recherche simple d'infobulles, en fonction du champ saisi
         */
        rechercheInfobullesSimple(): void;
        /**
         * Construit les actions spéciales disponibles pour chaque infobulle
         * @param infobulle: Infobulle - Infobulle à spécifier
         * @returns :Action [] - Actions spéciales disponibles pour l'infobulle
         */
        private construireActions(infobulle);
        /**
         * Effectue une recherche avec les différents critères de recherche avancée
         */
        rechercheInfobullesAvancee(): void;
        private filtrerInfobullesEtablissement(infobulles);
        private trierInfobullesEtablissement(infobulles);
        /**
         * Vérifie la cohérence des dates de recherche entrées
         * @returns criteresOK: boolean - Le résultat du test de cohérence
         */
        private verifierCriteres();
        /**
         * Complète les informations de l'infobulle
         * @param infobulle: Infobulle - L'infobulle à compléter
         */
        private completerInformationsInfobulle(infobulle, infobulles);
        /**
         * Complète les informations de publication de l'infobulle
         * @param infobulle: Infobulle - L'infobulle à compléter
         */
        private completerInformationsPublicationInfobulle(infobulle);
        /**
         * Récupère l'infobulle communautaire de l'infobulle, en fonction de l'id de la zone de saisie liée à l'infobulle
         * @param idChamp: number - L'identifiant de la zone de saisie
         * @returns infobulle communautaire
         */
        private getInfobulleCommunautaire(infobulle, infobulles);
        /**
         * Prépare les données à afficher dans la popup, puis affiche cette dernière
         */
        afficherDonneesPersonnalisees(infobulle: Infobulle): void;
        /**
         * Affiche la fenêtre de personnalisation établissements
         * @param personnalisation: any[] - Liste de personnalisations établissement
         */
        private afficherModalPersonnalisation(personnalisation);
        /**
         * Stocke l'infobulle communautaire à personnaliser
         * @param infobulle: Infobulle - L'infobulle à personnaliser
         */
        private ajouterPersonnalisation(infobulle);
        /**
         * Affiche les personnalisation de la ligne infobulle sélectionnée
         * @param infobulleSelectionne: Infobulle - L'infobulle sélectionnée
         */
        private afficherPersonnalisationLigneInfobulle(infobulleSelectionnee);
        /**
         * Filtre les résultats de la recherche par origine de l'infobulle
         * @param rechercheInfobulle: rechercheInfobulle - Objet contenant les critères de recherche
         * @param listeResultats: Infobulle[] - Les resultats de la recherche
         * @returns listeFiltree: Infobulle[] - Les résultats filtrés
         */
        private filtrerOrigineInfobulles(rechercheInfobulle, listeResultats);
        /**
         * Retourne les infobulles communautaires personnalisées par un établissement
         * @parma listeResultats: Infobulle[] - Liste d'infobulles à vérifier
         * @returns listeResultats: Infobulle[] - Liste filtrée
         */
        private filtrerInfobullesPersonnalisees(listeResultats);
        /**
         * Filtre les résultats de la recherche en fonction de l'état de l'infobulle (Archivé, En cours, A venir, Permanent)
         * @param rechercheInfobulle: rechercheInfobulle - Objet contenant les critères de recherche
         * @param listeResultats: Infobulle[] - Les resultats de la recherche
         * @returns listeFiltree: Infobulle[] - Les résultats filtrés
         */
        private filtrerEtatInfobulles(rechercheInfobulle, listeResultats);
        /**
         * Récupère les paramètres s'ils ne sont pas vides, sous forme d'un dictionnaire
         * @param rechercheFlash: RechercheFlash - L'objet contenant les critères de recherche
         * @returns :any[] - La liste des paramètres
         */
        private construireParametres(rechercheInfobulle);
        /**
         * Fonction pour construire le tableau composant MyWay simple mono-sélection
         * Voir application guide de style pour plus d'information
         * @param infobulles: Infobulle[] - Résultats de la recherche avancée
         */
        construireTableau(infobulles: Infobulle[]): void;
        /**
         * Fonction déclenchée à la sélection d'une ligne du tableau
         * @param infobulleSelectionnee: Infobulle - Infobulle sélectionnée dans le tableau
         */
        onSelectionChange(infobulleSelectionnee: Modele.Infobulle): void;
        /**
         * Effectue tous les traitements sur la sélection (Affichage de bouton d'action disponible, personnalisations....)
         * @param infobulleSelectionnee: Infobulle - L'infobulle sélectionnée dans le tableau
         */
        private traitementSelection(infobulleSelectionnee);
        /**
         * Sauvegarde la recherche si l'utilisateur va modifier ou créer une infobulle, et reviens sur la page de recherche
         */
        private sauvegardeRecherche();
        /**
         * Récupère l'infobulle communautaire attachée à la personnalisation établissement
         * @param infobulle: Infobulle - La personnalisation infobulle
         */
        private recupererInfobulleCommunautaire(infobulle);
        /**
         * Permet de créer une infobulle à partir d'une existante
         * @param infobulle: Infobulle - L'infobulle à dupliquer
         */
        dupliquerInfobulle(infobulle: Infobulle): void;
        /**
         * Fonction pour suprimer l'infobulle sélectionnée
         * @param infobulle: Infobulle - L'infobulle à supprimer (avec personnalisations si utilisateur communautaire)
         */
        supprimerInfobulle(infobulle: Infobulle): void;
        /**
         * Retourne le détail de l'établissement du complément infobulle (Code & Libellé)
         * @param infobulle: Infobulle - Le complément établissement de l'infobulle
         * @returns codeLibelle: string - Le détail
         */
        private afficherDetailsEtablissement(infobulle);
        /**
         * Détermine si oui ou non la date de fin de l'infobulle est dépassée
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns :boolean - Le résultat du test
         */
        dateDepassee(infobulle: Infobulle): boolean;
        /**
         * Détermine si oui ou non la date de début de l'infobulle n'est pas passée
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns :boolean - Le résultat du test
         */
        dateAVenir(infobulle: Infobulle): boolean;
        /**
         * Affiche un aperçu de l'infobulle
         */
        previsualiser(): void;
        /**
         * Fonction pour créer une nouvelle infobulle (Communautaire) ou ajouter une personnalisation établissement
         */
        creerInfobulle(infobulle?: Infobulle): void;
        modifier(): void;
        /**
         * Fonction pour modifier l'infobulle sélectionnée
         * @param infobulle: Infobulle - L'infobulle à modifier
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        modifierInfobulle(infobulle: Infobulle, duplication: boolean): void;
        /**
         * Prépare les informations communautaire, lors de l'ajout d'une modification établissement
         */
        private preparerInformationsCommunautaire();
        /**
         * Modifie la personnalisation établissement
         * @param infobulle: Infobulle - La personnalisation à modifier
         */
        private modifierPersonnalisation(infobulle);
        /**
         * Ajoute une nouvelle personnalisation à partir de la personnalisation sélectionnée
         * @param infobulle: Infobulle - La personnalisation à modifier
         */
        private ajouterNouvellePersonnalisation(infobulle);
    }
}

declare module administrationAide.Modele {
    interface IRechercheInfobulle {
        idChamp: number;
        nomChamp: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        origineCommunautaire: boolean;
        origineEtablissement: boolean;
    }
    class RechercheInfobulle implements IRechercheInfobulle {
        idChamp: number;
        nomChamp: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        origineCommunautaire: boolean;
        origineEtablissement: boolean;
        avecPersonnalisation: boolean;
        /**
         * Constructeur de la classe
         * @param nomChamp: string - Nom du champ sur lequel s'applique l'infobulle
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
        constructor(donnees?: RechercheInfobulle);
    }
}

declare module administrationAide {
    class PersonnalisationEtablissementsControleur {
        private modalInstance;
        personnalisations: any[];
        static $inject: string[];
        tableau: MyWay.UI.ImwTableOptions;
        constructor(modalInstance: ng.ui.bootstrap.IModalServiceInstance, personnalisations: any[]);
        fermer(): void;
        construireTableau(personnalisations: any[]): void;
    }
}

declare module administrationAide {
    import Infobulle = Modele.Infobulle;
    class SuppressionInfobulleControleur {
        private modalInstance;
        private etatService;
        habilitationService: Service.HabilitationService;
        infobulle: Infobulle;
        libelleChamp: string;
        complement: boolean;
        habilitations: Habilitations;
        static $inject: string[];
        constructor(modalInstance: ng.ui.bootstrap.IModalServiceInstance, etatService: Service.EtatService, habilitationService: Service.HabilitationService, infobulle: Infobulle, libelleChamp: string, complement: boolean);
        valider(): void;
        annuler(): void;
    }
}

declare module administrationAide {
    function lireFichier(): ng.IDirective;
}

declare module administrationAide {
}

declare module administrationAide {
    function uiTinymce(uiTinymceConfig: any): ng.IDirective;
}
