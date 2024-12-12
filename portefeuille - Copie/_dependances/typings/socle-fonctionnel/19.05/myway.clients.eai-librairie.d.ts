
declare module libEAI {
    var app: any;
}

declare module libEAI.T {
    function isDefined(value: any): boolean;
    function isUndefined(value: any): boolean;
    function isBoolean(value: boolean): boolean;
    function isBooleanOfValue(object: any, value: boolean): boolean;
    function isString(value: string): boolean;
    function isStringOfValue(object: any, value: string): boolean;
    function isArray(value: Array<any>): boolean;
    function isArrayNotEmpty(value: any): boolean;
    function isDate(value: Date): boolean;
    function isNumber(value: number): boolean;
    function replaceNUStringWith(value: string, replacedValue: string): string;
}

declare module libEAI.Constantes {
    module Format {
        const personnePhysique: string;
        const personneMorale: string;
        const codeCivilite: string[];
        const codeCanalTel: string;
        const codeCanalFace: string;
        const codeCanalNet: string;
        const codeCanalCourrier: string;
        const libelleCanalTel: string;
        const libelleCanalFace: string;
        const libelleInternet: string;
        const libelleCourrier: string;
        const formatDate: string;
        const formatDateToRest: string;
    }
    module Angular {
        const $q: string;
        const $modalInstance: string;
        const $location: string;
        const $window: string;
        const $scope: string;
        const $route: string;
        const $timeout: string;
        const $rootScope: string;
    }
    module Services {
        const restService: string;
        const lisaService: string;
        const errorService: string;
        const cacheService: string;
        const initService: string;
        const utilService: string;
        const profilClientService: string;
        const infoEntiteTitulaire: string;
        const controleInfoFiscale: string;
        const infoEaiService: string;
        const tiersService: string;
        const declarationFiscaleService: string;
        const editiqueContractService: string;
    }
    module UrlRest {
        const urlInfoEntitetitulaire: string;
        const urlControleFiscale: string;
        const urlInformationEAI: string;
        const urlTiersNoyau: string;
    }
    module MyWay {
        const serviceAgentExtended: string;
        const navigationService: string;
        const modalService: string;
        const notificationService: string;
        const contractualisationActeService: string;
    }
    module Logger {
        const consoleLogService: string;
        const logService: string;
        const myWayLogService: string;
        const applicationLogName: string;
    }
    module Message {
        const msgAlerte1: string;
        const msgAlerte2: string;
        const msgAlerte3: string;
        const msgAlerte4: string;
    }
    module CodeProcessusLisa {
        const CODE_LISA_FERMER: number;
        const CODE_LISA_ABANDON: number;
        const CODE_LISA_ENTREE_LISTE_EAI: number;
        const CODE_LISA_ENTREE_SAISIE: number;
        const CODE_LISA_RET_LIST_EAI: number;
        const CODE_LISA_ENTR_SPA_EDTQ: number;
        const CODE_LISA_ENTR_CONTRACT: number;
        const CODE_LISA_MAJ_STAT_EAI: number;
    }
    module CleProcessusLisa {
        const CLE_CONTRACTUALISATION_ACTE: string;
        const CLE_CONTEXTE_EAI: string;
        const CLE_CONTEXTE_SAIS_EAI: string;
        const CLE_CONTEXTE_GGO: string;
        const CLE_CONTEXTE_GGHO: string;
        const CLE_CONTEXTE_EDITIQUE: string;
        const CLE_CODE_ENTITE: string;
    }
    class ModeVente {
        MEGI: string;
        VPC: string;
    }
    class CodeModeSignature {
        PAPIER: string;
        ELECTRONIQUE: string;
    }
    class ModeEnvoiDocumentPapier {
        MANUEL: string;
        HUBMAIL: string;
        NON_CONCERNE: string;
    }
}

declare module libEAI.Enums {
    enum ModeAppelEligibiliteComplet {
        Standard = 0,
        DepuisDossierDeVente = 1,
    }
    enum TypePersonne {
        PHYSIQUE = 0,
        MORALE = 1,
    }
    enum CodeRolePersonne {
        TITULAIRE = 1,
        REPRESENTANT_LEGAL = 2,
        MANDATAIRE = 3,
        AUTRE = 4,
        DELEGATAIRE = 5,
        SIGNATAIRE_LEGAL = 6,
    }
}

declare module libEAI.Params.Modeles {
    interface IControleurParams {
        templateUrl: string;
        nom: string;
        alias: string;
    }
    interface IDonneesDelocalisees<T> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
    interface IListePays {
        codePays: string;
        libellePays: string;
        codeNif: string;
    }
    interface IObjetResidenceFiscale {
        modelePays: Params.Modeles.IListePays;
        codeNif: string;
        listePays: Params.Modeles.IListePays[];
        aSupprimer: boolean;
        ordre: number;
    }
    class ObjetResidenceFiscale implements IObjetResidenceFiscale {
        modelePays: Params.Modeles.IListePays;
        codeNif: string;
        listePays: Params.Modeles.IListePays[];
        codeAction: string;
        aSupprimer: boolean;
        ordre: number;
        constructor();
    }
}

declare module libEAI.Route.Modeles {
    interface IRootScope extends ng.IRootScopeService {
        title: string;
    }
    interface IDetailCurrentRoute {
        title: string;
        originalPath: string;
    }
    interface ICurrentRoute {
        $$route: IDetailCurrentRoute;
        loadedTemplateUrl: string;
    }
    interface IRoute extends ng.route.IRoute {
        title?: string;
    }
    interface IRouteProvider extends ng.route.IRouteProvider {
        otherwise(route: IRoute): IRouteProvider;
        when(path: string, route: IRoute): IRouteProvider;
    }
    interface IModeleRoute extends ng.route.ICurrentRoute {
        $$route: IDetailCurrentRoute;
        locals: {
            $scope: ng.IScope;
            $template: string;
        };
    }
    interface IListeErreur {
        champ: string;
        libelle: string;
        ancre: string;
    }
}

declare module libEAI.Services {
    import infoFiscale = libEAI.Rest.Modeles.EntiteTitulaire.InfoFiscale;
    interface IDeclarationFiscaleService {
        getListePays(): Params.Modeles.IListePays[];
        recupererTableDS1P(): ng.IPromise<Params.Modeles.IDonneesDelocalisees<any>>;
        getEstAmericaine(): boolean;
        setEstAmericaine(nationalite: boolean): void;
        getPays(): Params.Modeles.IListePays;
        setPays(nationalite: Params.Modeles.IListePays): void;
        getListeResidenceFiscale(): Params.Modeles.IObjetResidenceFiscale[];
        setListeResidenceFiscale(listeResidenceFiscale: Params.Modeles.IObjetResidenceFiscale[]): void;
        remplacerResidenceAvecNationaliteUSA(listeResidence: Params.Modeles.IObjetResidenceFiscale[], paysUSA: Params.Modeles.IListePays, estAmericain: boolean): void;
        remplacerResidenceSansNationaliteUSA(listeResidence: Params.Modeles.IObjetResidenceFiscale[], paysUSA: Params.Modeles.IListePays, estAmericain: boolean): void;
        changerChoixPays(estAmericain: boolean): void;
        changerNationaliteAmericaine(modelePays: Params.Modeles.IListePays, codeNif: string, id: string): void;
        supprimerUneResidence(id: string): void;
        afficherMessageAlerte(listeResidence: Params.Modeles.IObjetResidenceFiscale[]): string;
        getModificationDeclaration(): boolean;
        setModificationDeclaration(m: boolean): void;
        getControleKo(): boolean;
        setControleKo(c: boolean): void;
    }
    class DeclarationFiscaleService implements IDeclarationFiscaleService {
        private serviceAgent;
        private initService;
        private $q;
        private utilService;
        _listePays: Params.Modeles.IListePays[];
        _estAmericaine: boolean;
        _listeResidenceFiscale: Params.Modeles.IObjetResidenceFiscale[];
        _libellePays: Params.Modeles.IListePays;
        _estModifie: boolean;
        _controleKO: boolean;
        _listeResidenceEnvoye: infoFiscale.IResidenceAutoCertificationEAI[];
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, initService: Services.IInitialisationService, $q: ng.IQService, utilService: Services.IUtilitaireService);
        /**
         * recupération de la table DS1P pour afficher les pays
         */
        recupererTableDS1P(): ng.IPromise<Params.Modeles.IDonneesDelocalisees<any>>;
        /**
         * gestion de l'interaction entre les residences si le choix de la nationalité USA est à OUI
         * @param listeResidence
         * @param paysUSA
         */
        remplacerResidenceAvecNationaliteUSA(listeResidence: Params.Modeles.IObjetResidenceFiscale[], paysUSA: Params.Modeles.IListePays, estAmericain: boolean): void;
        /**
         * Choix de la nationalité à NON remplacement des residences du bas vers le haut de la liste
         * @param listeResidence
         * @param paysUSA
         */
        remplacerResidenceSansNationaliteUSA(listeResidence: Params.Modeles.IObjetResidenceFiscale[], paysUSA: Params.Modeles.IListePays, estAmericain: boolean): void;
        /**
         * Affichage des "etats-unis" si la valeur estAmericain est à true
         */
        changerChoixPays(estAmericain: boolean): void;
        /**
         * Changement du choix de la nationalité americaine
         * @param listeResidence
         * @param estAmericain
         */
        changerNationaliteAmericaine(modelePays: Params.Modeles.IListePays, codeNif: string, id: string): void;
        /**
         * Permet de supprimer la residence fiscale 2 ou 3
         * @param id
         */
        supprimerUneResidence(id: string): void;
        /**
         * Message d'alerte affiché lors de la validation de la saisie
         * @param listeResidence
         */
        afficherMessageAlerte(listeResidence: Params.Modeles.IObjetResidenceFiscale[]): string;
        /**
         * Permet de recuperer la liste des pays
         */
        getListePays(): Params.Modeles.IListePays[];
        getEstAmericaine(): boolean;
        setEstAmericaine(nationalite: boolean): void;
        getPays(): Params.Modeles.IListePays;
        setPays(pays: Params.Modeles.IListePays): void;
        getListeResidenceFiscale(): Params.Modeles.IObjetResidenceFiscale[];
        setListeResidenceFiscale(listeResidenceFiscale: Params.Modeles.IObjetResidenceFiscale[]): void;
        getModificationDeclaration(): boolean;
        setModificationDeclaration(modif: boolean): void;
        getControleKo(): boolean;
        setControleKo(c: boolean): void;
    }
}

declare module libEAI.Services {
    import modelTiers = libEAI.Rest.Modeles.Tiers;
    interface IEditiqueContractService {
        verifierEligibiliteComplet(personne: modelTiers.ITiersNoyau, representant?: IRepresentantLegal): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
        preparerContractualisation(objetContractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeEntite: string, contexteEditique: any): IContratEntreeContractualisation;
    }
    interface IRepresentantLegal {
        identifiantPersonne: number;
        designation: string;
    }
    interface IContratEntreeContractualisation {
        libelleActe: string;
        codeGuichet: string;
        referenceContrat: number;
        identifiantAgence: string;
        codeEntite: string;
        identifiantAgent: string;
        identifiantActeExterne: number;
        referenceActeProducteur: number;
        rangSign: number;
        codeRoleSignataire: string;
        codeTypeAttributaireDocument: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        libelleExterneDocumentEntreprise: string;
        libelleDescriptionDocument: string;
        identifiantDocumentGED: number;
        identifiantComposantApplicatif: string;
        codeTypeSignataire: string;
        numeroAffichageDocument: string;
        idOptSignr: string;
        msgOptSignr: string;
        numeroPersonne: number;
        libelleClientOperation: string;
        dateOperation: string;
        montantOperation: number;
        modeVersementOperationFinanciere: string;
        natureOperation: string;
        codeTypeProduit: string;
        referenceOffre: string;
        referenceEDSExterneClient: string;
        referenceEDSInterneClient: string;
    }
    class ParametresAppelSagSed {
        acteGestion: myway.comContract.ContractualisationActe.Modeles.IActe;
        listeSignataires: myway.comContract.modeles.ISignataire[];
        listeTitulaires: myway.comContract.ContractualisationActe.Modeles.ITitulaire[];
        acteGestionCompteSupport: string;
        surchargeNonEligibilite: boolean;
        constructor();
    }
    class EditiqueContractService implements IEditiqueContractService {
        private contractualisationActeService;
        private $q;
        private initService;
        private utilService;
        private lisaService;
        private profilClient;
        static $inject: string[];
        constructor(contractualisationActeService: myway.comContract.Services.ContractualisationActeService, $q: ng.IQService, initService: Services.IInitialisationService, utilService: Services.IUtilitaireService, lisaService: Services.ILisaService, profilClient: Services.IProfilClientService);
        /**
         * Reuperation de la liste des signataires
         * @param personne
         * @param representantLegal
         */
        recupererListeSignataire(titulaire: modelTiers.ITiersNoyau, personneLieeSignataire?: IRepresentantLegal): myway.comContract.modeles.ISignataire[];
        /**
         * Recuperation du titulaire du dossier
         * @param personne
         */
        recupereListeTitulaire(personne: modelTiers.ITiersNoyau): myway.comContract.ContractualisationActe.Modeles.ITitulaire[];
        /**
         * Recupération des données éligible
         * @param titulaire
         * @param representantLegal
         */
        getDonneesEligibilite(titulaire: modelTiers.ITiersNoyau, representantLegal?: IRepresentantLegal): ParametresAppelSagSed;
        /**
         * Vérification de l'eligibilte SAG/SED Complet
         * @param mode
         */
        verifierEligibiliteComplet(personne: modelTiers.ITiersNoyau, representant?: IRepresentantLegal): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
        /** TODO : TU
         * préparation du contrat d'entree vers la SPA contractualisation
         */
        preparerContractualisation(objetContractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeEntite: string, contexteEditique?: any): IContratEntreeContractualisation;
    }
}

declare module libEAI.Services {
    interface IAgent {
        codeAgent: string;
        codeEtablissement: string;
    }
    interface IInitialisationService {
        formaterNumeroPersonne(nodape: string): number;
        preparerDonnesAgent(authentificationInfo: MyWay.Services.Context.AuthentificationInfo): IAgent;
        chargerVuesClient(route: string): void;
        chargerVueListeEAI(): string;
        chargerVueSaisieEAI(): string;
        getCodeEtablissement(): string;
        getNumeroPersonne(): number;
        setNumeroPersonne(numero: number): void;
        getNumeroPersonneAsaisir(): number;
        setNumeroPersonneAsaisir(numero: number): void;
        getIdEntiteTitulaire(): number;
        setIdEntiteTitulaire(numero: number): void;
        getCodeCanal(): string;
        setCodeCanal(codeCanal: string): void;
        getCodeSens(): string;
        setCodeSens(code: string): void;
        getUrlAppel(): string;
        setUrlAppel(url: string): void;
        getCodeAction(): string;
        setCodeAction(c: string): any;
        getModeCompositionET(): string;
        setModeCompositionET(c: string): any;
        getObjetOriginalEAI(): libEAI.Rest.Modeles.EntiteTitulaire.InfoFiscale.IInformationEAI;
        setObjetOriginalEAI(objet: libEAI.Rest.Modeles.EntiteTitulaire.InfoFiscale.IInformationEAI): void;
        getCodeAgent(): string;
        setCodeAgent(codeAgent: string): any;
        getCodeGuichet(): string;
        setCodeGuichet(code: string): any;
        getNumInterneEds(): string;
        setNumInterneEds(numEds: string): void;
    }
    class InitialisationService implements IInitialisationService {
        private $location;
        private $route;
        private _numeroPersonne;
        private _numeroPersonneAsaisir;
        private _idEntiteTitulaire;
        private _codeEtablissement;
        private _codeAgent;
        private _numInterneEds;
        private _codeCanal;
        private _codeSens;
        private _urlAppel;
        private _modeCompositionET;
        private _codeAction;
        private _objetOriginal;
        private _codeGuichet;
        static $inject: string[];
        constructor($location: ng.ILocationService, $route: ng.route.IRouteService);
        /**
         * formate le numéro de personne depuis une string vers un nombre,
         * renvoi null si valeur d'entrée undefined ou non convertible en nombre
         * @param numeroPersonne {string}
         * @return retour {number}
         */
        formaterNumeroPersonne(numeroPersonne: string): number;
        /**
         * retourne un objet simplifié, contenant le codeAgent et l'edsInterne, au format numérique,
         * à partir des informations d'authentification du contexte MyWay
         * @param authentificationInfo {MyWay.Services.Context.AuthentificationInfo}
         *
         */
        preparerDonnesAgent(authentificationInfo: MyWay.Services.Context.AuthentificationInfo): IAgent;
        chargerVuesClient(route: string): void;
        /**
         * Genere l'url de la vue EAI demandée
         */
        chargerVueListeEAI(): string;
        /**
         * Genere l'url de la vue détail des infos d'une personne
         */
        chargerVueSaisieEAI(): string;
        getCodeEtablissement(): string;
        setCodeEtablissement(codeEtab: string): void;
        getNumInterneEds(): string;
        setNumInterneEds(numEds: string): void;
        getCodeAgent(): string;
        setCodeAgent(codeAgent: string): void;
        getCodeGuichet(): string;
        setCodeGuichet(code: string): void;
        getNumeroPersonne(): number;
        setNumeroPersonne(numero: number): void;
        getNumeroPersonneAsaisir(): number;
        setNumeroPersonneAsaisir(numero: number): void;
        getIdEntiteTitulaire(): number;
        setIdEntiteTitulaire(numero: number): void;
        getCodeCanal(): string;
        setCodeCanal(codeCanal: string): void;
        getCodeSens(): string;
        setCodeSens(code: string): void;
        getCodeAction(): string;
        setCodeAction(code: string): void;
        getModeCompositionET(): string;
        setModeCompositionET(mode: string): void;
        getObjetOriginalEAI(): libEAI.Rest.Modeles.EntiteTitulaire.InfoFiscale.IInformationEAI;
        setObjetOriginalEAI(objet: libEAI.Rest.Modeles.EntiteTitulaire.InfoFiscale.IInformationEAI): void;
        setUrlAppel(url: string): void;
        getUrlAppel(): string;
    }
}

declare module libEAI.Services {
    interface ILisaService {
        next(valueNext: number, params?: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
        getListFromContext(keys: string[]): ng.IPromise<void>;
        getFromContext(key: string): ng.IPromise<string>;
        getAuthentificationInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        getParametresComptables(): ng.IPromise<MyWay.Services.Context.ParametresComptables>;
    }
    class LisaService implements ILisaService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode de débranchement LISA vers un autre processus
         * @param valueNext
         * @param params
         */
        next(valueNext: number, params?: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
        /**
         * Méthode d'ajout de paramètres lié au débranchement LISA vers un autre processus
         * @param params
         */
        private addParams(params);
        /**
         * Débranchement LISA, appel au serviceAgent next
         * @param valueNext
         */
        private toNext(valueNext);
        /**
         * Lecture d'une liste de données dans le context
         * @param keys
         */
        getListFromContext(keys: string[]): ng.IPromise<void>;
        /**
         * Lecture d'une donnée dans le context
         * @param key
         */
        getFromContext(key: string): ng.IPromise<string>;
        /**
         * Méthode de recupération de l'objet authentificationInfo dans le context
         */
        getAuthentificationInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        /**
         * permet de recuperer les donnees comptables liées à l'ouverture de guichet
         */
        getParametresComptables(): ng.IPromise<MyWay.Services.Context.ParametresComptables>;
    }
}

declare module libEAI.Services {
    interface IProfilClientService {
        afficherDesignationCourte(codePersonnaliteJuridique: string, designationCourte: string, codeCivilite: string, nomFamille: string, prenom: string): string;
        afficherCodeCivilite(genre: string): string;
        afficherPictogramme(codeCivilite: string, dateNaissance: string, dateDuJour: Date): string;
    }
    class ProfilClientService implements IProfilClientService {
        static $inject: string[];
        constructor();
        /**
         * Permet de calculer l'age d'une personne à partir de sa date de naissance et de la date du jour
         * @param dateNaissance:string
         * @param dateDuJour:Date
         * @return age:number
         */
        calculerAgePersonne(dateNaissance: string, dateDuJour: Date): number;
        /**
         * Permet d'afficher le pictogramme en fonction de la civilité et de l'age de la personne
         * @param dateNaissance:string
         * @param codeCivilité: string
         * @param dateDuJour: {Date}
         */
        afficherPictogramme(codeCivilite: string, dateNaissance: string, dateDuJour: Date): string;
        /**
         * Permet d'afficher le code civilite et la designation courte de la personne physique
         * @param codePersonnaliteJuridique:string
         * @param libelleDesignationCourte:string
         * @param codeCivilite:string
         * @param nomFamille:string
         * @param prenom:string
         */
        afficherDesignationCourte(codePersonnaliteJuridique: string, designationCourte: string, codeCivilite: string, nomFamille: string, prenom: string): string;
        /**
         * permet d'afficher le libelle du code civilite
         * le resultat doit etre Mme ou Mlle ou M
         * @param {string} codeCivilite
         * @return {string} libellé associé à la civilité
         */
        afficherCodeCivilite(genre: string): string;
    }
}

declare module libEAI.Services {
    interface ICanal {
        icone: string;
        libelle: string;
    }
    interface IUtilitaireService {
        formaterDate(date: string, dateVide?: boolean): string;
        formaterDateToRest(date: string): string;
        getStatutPersonne(codePersonnaliteJuridique: string): string;
        formaterTelephone(numeroTelephone: string): string;
        extractErreur(data: any): string;
        msgBox(header: string, msg: string, icon?: string, size?: any): ng.IPromise<any>;
        tronquerChaine(chaineATronquer: string, longueurMaximal: number): string;
        transformerAccents(value: string): string;
        completerIdPersonne(idPersonne: number): string;
        displayInfo(mes: string): void;
        getIcone(codeCanal: string, sens?: string): ICanal;
        displayInformation(mes: string): void;
        getNotificationSaisieEAI(): boolean;
        setNotificationSaisieEAI(n: boolean): void;
    }
    class UtilitaireService implements IUtilitaireService {
        private modalService;
        private notificationService;
        private _saisieNotifiee;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, notificationService: MyWay.UI.IMwNotificationService);
        /**
         * permet d'afficher le format de la date
         * le resultat doit etre JJ/MM/AAAA
         * @param {string} formatDate
         * @return {string} la date au format JJ/MM/AAAA
         */
        formaterDate(date: string, dateVide?: boolean): string;
        /**
         * Permet de formater une date pour l'envoyer aux ressources
         * @param date {string} la date au format JJ/MM/AAA
         * @return {string} la date au format AAAA-MM-JJ
         */
        formaterDateToRest(date: string): string;
        /**
         * Permet de retourner le statut "pp" ou "pm" (personne physique ou personne morale)
         * @param codePersonnaliteJuridique:string ("1" pour particulier, "2" pour professionnel)
         * @return {string} le code pp ou pm
         */
        getStatutPersonne(codePersonnaliteJuridique: string): string;
        /**
         * Permet de formater l'affichage d'un numero de telephone
         * Le résultat doit être sous la forme xx xx xx xx xx
         * @param {string} le numéro de téléphone
         * @return {string} le numéro formaté sur 10 caractères avec des espaces
         */
        formaterTelephone(numeroTelephone: string): string;
        /**
         * permet d'extraire les erreurs
         * @param data
         */
        extractErreur(data: any): string;
        /**
         * permet d'afficher un popup d'information
         * @param header
         * @param msg
         * @param icon
         * @param size
         */
        msgBox(header: string, msg: string, icon?: string, size?: any): ng.IPromise<any>;
        /**
         * Retourne la chaine tronqué pour limiter la taille du libellé
         * @param {string} chaine d'origine
         * @param {number} le nombre de caractères maximum attendues
         * @return {string} la chaine tronquée
         */
        tronquerChaine(chaineATronquer: string, longueurMaximal: number): string;
        /**
         * @param value
         */
        transformerAccents(value: string): string;
        /**
         * Permet de formater le numero de personne sur 9 caracteres
         * @param idPersonne
         */
        completerIdPersonne(idPersonne: number): string;
        /**
         * Message de notification lors d'une validation
         * @param mes
         */
        displayInfo(mes: string): void;
        /**
         * Message d'information
         * @param mes
         */
        displayInformation(mes: string): void;
        /**
         * permet d'afficher l'icone correspondant à un code canal
         * @param codeCanal
         */
        getIcone(codeCanal: string, sens?: string): ICanal;
        getNotificationSaisieEAI(): boolean;
        setNotificationSaisieEAI(n: boolean): void;
    }
}

declare module libEAI.Directive {
    interface IScopeDeclarationPersonne extends ng.IScope {
        idPage: string;
        idPersonne: string;
        estAmericain: boolean;
        erreurNif: boolean;
        erreurPays: boolean;
    }
    class DeclarationPersonneControleur {
        private $scope;
        private declarationFiscaleService;
        static parametres: Params.Modeles.IControleurParams;
        estAmericain: boolean;
        listePays: Params.Modeles.IListePays[];
        erreurNationalite: boolean;
        listeResidenceFiscale: Params.Modeles.IObjetResidenceFiscale[];
        _declarationFiscModifiee: boolean;
        static $inject: string[];
        constructor($scope: IScopeResidenceFiscale, declarationFiscaleService: Services.IDeclarationFiscaleService);
        /**
         * Affichage des "etats-unis" si la valeur estAmericain est à true
         */
        changerPays(): void;
        /**
         * Permet d'ajouter une résidence fiscale
         */
        ajouterResidenceFiscale(): Params.Modeles.IObjetResidenceFiscale[];
        afficherBtnAjouter: boolean;
    }
}

declare module libEAI.Directive {
    function DeclarationPersonneDirective(): ng.IDirective;
}

declare module libEAI.Directive {
    interface IScopeActivitePro extends ng.IScope {
        idPage: string;
        informationPro: Rest.Modeles.Tiers.IInformationProfessionnel;
        adresse: Rest.Modeles.Tiers.IAdresse;
        typeRegistre: string;
        immatriculation: Rest.Modeles.Tiers.IImmatriculationProfessionnel;
    }
    class ActiviteProControleur {
        private $scope;
        static parametres: Params.Modeles.IControleurParams;
        afficherPremiereLigne: boolean;
        afficherLigne3: boolean;
        afficher2eLigne: boolean;
        afficher3eLigne: boolean;
        static $inject: string[];
        constructor($scope: IScopeActivitePro);
    }
}

declare module libEAI.Directive {
    function ActiviteProDirective(): ng.IDirective;
}

declare module libEAI.Directive {
    interface IScopeInfosPersonne extends ng.IScope {
        idPage: string;
        infosPersonne: Rest.Modeles.Tiers.IInformationParticulier;
        dateNaissance?: string;
        adresse: Rest.Modeles.Tiers.IAdresse;
    }
    class InformationsPersonneControleur {
        private $scope;
        static parametres: Params.Modeles.IControleurParams;
        afficherPremiereLigne: boolean;
        afficherLigne3: boolean;
        afficher2eLigne: boolean;
        afficher3eLigne: boolean;
        static $inject: string[];
        constructor($scope: IScopeInfosPersonne);
    }
}

declare module libEAI.Directive {
    function InformationsPersonneDirective(): ng.IDirective;
}

declare module libEAI.Directive {
    interface IScopeRepresentantLegal extends ng.IScope {
        idPage: string;
        listeRepresentant: any[];
        modele: string;
        isErreur: string;
    }
    class RepresentantLegalControleur {
        private $scope;
        static parametres: Params.Modeles.IControleurParams;
        static $inject: string[];
        constructor($scope: IScopeRepresentantLegal);
    }
}

declare module libEAI.Directive {
    function RepresentantLegalDirective(): ng.IDirective;
}

declare module libEAI.Directive {
    interface IScopeResidenceFiscale extends ng.IScope {
        id: string;
        modelePays: Params.Modeles.IListePays;
        codeNif: string;
        listePays: Params.Modeles.IListePays[];
        aSupprimer: boolean;
        ordre: number;
        erreurPays: boolean;
        erreurNif: boolean;
    }
    class ResidenceFiscaleControleur {
        private $scope;
        private declarationFiscaleService;
        static parametres: Params.Modeles.IControleurParams;
        modelePays: Params.Modeles.IListePays;
        codeNif: string;
        id: string;
        _declarationFiscModifiee: boolean;
        static $inject: string[];
        constructor($scope: IScopeResidenceFiscale, declarationFiscaleService: Services.IDeclarationFiscaleService);
        afficherNif: boolean;
        estModifiable: boolean;
        /**
         * Permet de controler les changements des libelles de la liste des pays
         */
        changerNationalite(): void;
        /**
         * Suppression d'une résidence fiscale
         */
        supprimerResidence: (id: string) => void;
        /**
         * Changerment du code nif suite controle KO
         */
        changerCodeNif(): void;
    }
}

declare module libEAI.Directive {
    function ResidenceFiscaleDirective(): ng.IDirective;
}

declare module libEAI.Directive {
    interface IScopeResultatControleAC extends ng.IScope {
        idPage: string;
        motif: string;
        commentaire: string;
        erreurCommentaire: boolean;
    }
    class ResultatControleACControleur {
        private $scope;
        private declarationFiscaleService;
        commentaire: string;
        static parametres: Params.Modeles.IControleurParams;
        static $inject: string[];
        constructor($scope: IScopeActivitePro, declarationFiscaleService: Services.IDeclarationFiscaleService);
        declarationModifiee: boolean;
    }
}

declare module libEAI.Directive {
    function ResultatControleACDirective(): ng.IDirective;
}

declare module libEAI.Logger {
    class ConsoleLogService implements ILogger {
        private serviceAgentExtended;
        private loggerLevel;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.IServiceAgent);
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private canLog(level);
        private getTime();
    }
}

declare module libEAI.Logger {
    interface ILogger {
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
    }
    const enum LoggerLevel {
        NONE = -1,
        ERROR = 1,
        WARN = 2,
        INFO = 3,
        DEBUG = 4,
        ALL = 10,
    }
    class LogService implements ILogger {
        private consoleLogger;
        private kibanaLogger;
        private serviceAgentExtended;
        private loggers;
        static $inject: Array<string>;
        constructor(consoleLogger: ILogger, kibanaLogger: ILogger, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private loggerLevel;
        /**
         * log debuggage
         * @param message
         * @param args
         */
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private canLog(level);
    }
}

declare module libEAI.Logger {
    class MyWayLogService implements ILogger {
        private logger;
        constructor();
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
    }
}

declare module libEAI.Rest.Modeles.EntiteTitulaire.ControleInfoFiscale {
    interface IInformationFiscaleEntiteTitulaire {
        /**
         * ode établissement de l'entité titulaire
         */
        codeEtablissementET: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE. Synonyme : Client bancaire Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Détermine si l'entité titulairepossède plusieurs personnes (comptes joints ou indivision). Si c'est le cas, il faut ouvrir les auto-certif pour toutes les personnes en boucle.
         */
        indicateurClientsSansAC: boolean;
        /**
         * Nombre de personnes de l'entité tituilaire dont aucune auto-certification EAI VALIDE existe, lors d'une vente en face à face.
         * => Comptabilise les statuts AC 00-02-03-04
         */
        nombrePersonnesNonClassifieFAF: number;
        /**
         * Nombre de personnes de l'entité tituilaire dont aucune auto-certification EAI VALIDE existe, lors d'une vente à distance.
         * => Comptabilise les statuts AC 00-02-03-04
         */
        nombrePersonnesNonClassifieVAD: number;
        listeInformationFiscalePersonne: Array<IInformationFiscalePersonne>;
    }
    interface IInformationFiscalePersonne {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement. Référence interne MYSYS. Personne référencée comme client, tiers ou prospect.
         */
        identifiantTiers: number;
    }
}

declare module libEAI.Rest.Modeles.EntiteTitulaire.InfoFiscale {
    interface IInfosPersonnePhysique {
        /**
         * Code qui permet de respecter la dénomination de la personne suivant sa situation de famille.
         *      '1'        MME
         *      '2'        MLLE
         *      '3'        M
         */
        codeCivilite: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         *      - soit au nom du père
         *      - soit au nom de la mère
         *      - soit aux 2 noms accolés
         * Seul nom mentionné sur les actes d'état civil
         */
        nomPatronymique: string;
        /**
         * Dénomination de la personne autre que le nom de famille, il correspond :
         *      - soit au nom de famille de l'époux(se) (conjoint)
         *      - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque.
         *
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
         */
        nomUsage: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        prenom: string;
        /**
         * Date de naissance
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Identifie une personne réprésentant légal d'une personne donnée
         */
        identifiantRepresentantLegal: number;
    }
    interface ICommentaireAutoCertificationEAI {
        /**
         * Sous-Type de mouvement FATCA d'une personne
         *
         * Valeurs:
         *      '01'       Message incohérence Ident.
         *      '02'       Saisie utilisateur Ident.
         *      '11'       Message incohérence Bénéf.
         *      '12'       Saisie utilisateur Bénéf.
         *      '21'       Message courrier.
         *      '22'       Saisie message remédiation
         */
        typeMessageEAI: string;
        /**
         * Définit l'état de l'incohérence afin de ne pas éditer si l'incohérence a été corrigée.
         *
         * Valeurs :
         *      '01'       Incohérence en cours
         *      '02'       Incohérence corrigée
         */
        codeStatutMessageEAI: string;
        /**
         * Contenu et contexte du message d'auto-certification.
         * Contient notamment le libellé descriptif d'un message d'incohérence ou le libellé saisi par le commercial ou la cellule de remédiation.
         */
        libelleMessageEAI: string;
    }
    interface IDetailAutoCertificationEAI {
        /**
         * Identifie une auto-certification d'une personne donnée dans le cadre de la règlementation EAI.
         * Une personne peut faire l'objet de plusieurs auto-certifications successives (ex : changement de résidence). Seule la dernière étant valide
         */
        numeroOrdreAutoCertificationEAI: number;
        /**
         * Libellé du statut de l'autocertification EAI
         */
        libelleStatutEAI: string;
        /**
         * Indique le type de la prochaine action à effectuer sur une AC par rapport à son statut actuel.
         *
         * Valeurs :
         * 'S '       Saisir
         * 'N '       EAI à numériser
         * 'R '       EAI à remédier
         * 'NR'     EAI à numériser, à remédier
         */
        codeActionEAI: string;
        /**
         * Indique si la personne est de nationalité ou de citoyenneté américaine
         */
        indicateurCitoyenUS: boolean;
        listeResidencesACEAI: Array<IResidenceAutoCertificationEAI>;
        /**
         * Détermine si les tests de vraisemblance ont révélé des incohérences au niveau de l'identification fiscale.
         */
        indicateurIncoherenceACEAI: boolean;
        /**
         * Etablit jusqu'à quelle étape (écran) la saisie de l'auto-certification s'est opérée.
         * Valeurs :
         *   '00'       Aucune
         *   '01'       Aucune (compte joint)
         *   '02'       Aucune (agreg. FATCA)
         *   '03'       Aucune (chgt circonstance FATCA)
         *   '04'       Aucune (assurance vie)
         *   '05'       Aucune (vente à distance)
         *   '10'       Identification
         *   '20'       Statut PM
         *   '30'       Statut PM automatique
         *   '40'       Bénéficiaires effectifs
         *   '50'       Saisie terminée
         */
        codeInformationObtenueACEAI: string;
        /**
         * Détermine le statut du résultat du dernier test de vraisemblance effectué.
         * Valeurs :
         *    '00'         Aucun test
         *    '10'         Test Ident. OK seul
         *    '11'         Test Ident. OK + Bénéf. OK
         *    '12'         Test Ident. OK + Bénéf. KO
         *    '13'         Test Ident. OK + Bénéf. KO non éditable
         *    '20'         Test Ident. KO seul
         *    '21'         Test Ident. KO + Bénéf. OK
         *    '22'         Test Ident. KO + Bénéf. KO
         *    '23'         Test Ident. KO + Bénéf. KO non éditable
         */
        statutVraisemblanceACEAI: string;
        /**
         * Détermine si l'auto-certification est validée : signée par le client, stockée dans le dossier et validée par le commercial.
         * Valeurs :
         *  '00'       Non validée
         *  '01'       Validée
         *  '02'       Fermée
         */
        codeValidationACEAI: string;
        /**
         * Détermine si la situation de la personne fait l'objet d'une action de la part de la cellule de remédiation.
         * Valeurs :
         *   00         Pas de remédiation
         *   01         Remédiation à effectuer
         */
        codeRemediationClientEAI: string;
        /**
         * Indique le mode de signature de l'auto-certification EAI choisi par le client.
         * Valeurs :
         *  'P'        Signature papier
         *  'S'        Signature SED
         *  'G'        Signature SAG
         */
        modeSignatureACEAI: string;
        listeCommentairesACEAI: Array<ICommentaireAutoCertificationEAI>;
        intervenantAutoCertificationEAI: IIntervenantAutoCertificationEAI;
    }
    interface IInformationEAI {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF ...
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement bancaire ou financier sur la plateforme Mysys
         */
        identifiantEntiteTitulaire: number;
        /**
         * '1'        Personne physique
         * '2'        Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique: string;
        infosPersonnePhysique: IInfosPersonnePhysique;
        /**
         * 'O' présent dans les bases EAI.
         * 'N' absent des bases EAI.
         */
        indicateurBaseEAI: boolean;
        /**
         * Détermine le statut d'une personne au regard de la réglementation fiscale EAI (fiscalité des pays de l'OCDE
         *  et de l'Union Européenne).
         * Permet d'identifier les résidents fiscaux détenant des avoirs en dehors de leur juridiction de résidence.
         *
         * Valeurs :
         * '00'       Non classifié
         * '01'       Classifié EAI
         * '02'       Classifié EAI par défaut
         * '03'       Classifié EAI de façon automatique
         * '04'       Classifié EAI Non documenté
         */
        codeStatutEAI: string;
        detailAutoCertificationEAI: IDetailAutoCertificationEAI;
    }
    interface IResidenceAutoCertificationEAI {
        /**
         * Identifie un pays ou un territoire concerné par les règlementations fiscales EAI / FATCA.
         * Code au format ISO 3166-1
         */
        codePaysResidenceFiscale: string;
        /**
         * Identifie une personne auprès des services fiscaux ou d'un registre public.
         * N° d'immatriculation dans le registre public local ou numéro fiscal.
         */
        codeNIFResidenceFiscale: string;
    }
    interface IIntervenantAutoCertificationEAI {
        /**
         * Numéro d'identification d'un agent au sein d'un établissement bancaire ou financier sur la plateforme Mysys.
         */
        codeAgent: number;
        /**
         * Référence interne EDS guichet du début de journée
         */
        referenceInterneGuichet: number;
        /**
         * Réf interne EDS de rattachement du guichet (généralement il s'agit de l'agence)
         */
        referenceInterneEDSRattachement: number;
        /**
         * Numéro de terminal (identifiant du poste)
         */
        numeroTerminal: string;
    }
}

declare module libEAI.Rest.Modeles.EntiteTitulaire.InfoEntiteTitulaire {
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
        listePersonneMandataire: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne  V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *  - 1 Usage privé
         *  - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         *  - 1 mode simple
         *  - 2 mode joint entre époux
         *  - 3 mode joint entre tiers
         *  - 4 mode indivision
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
         *  - 0 Actif
         *  - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateMAJEntiteTitulaire: string;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         *  - ' ' Non clôturé
         *  - '1' Plus d'activité bancaire
         *  - '2' Décédé
         *  - '3' Transféré
         *  - '4' Incident
         *  - '5' Indésirable
         *  - '6' Séparé
         *  - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        /**
         * Date de fermeture de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateClotureEntiteTitulaire: string;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         *  - 1 Mode indivision successorale
         *  - 2 Mode indivision conventionnel avec solidarité
         *  - 3 Mode indivision conventionnel sans solidarité
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
         *  * POUR ET MODE SIMPLE
         *  11 Désignation de la personne
         *  * POUR ET A USAGE PROFESSIONNEL
         *  21 Nom commercial
         *  22 Désignation courte de l'établissement
         *  23 Enseigne commerciale de l'établissement
         *  * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         *  PRIVE
         *  31 Mr ou Mme+nom patronymique Mr+prénom Mr
         *  32 Mr ou Mme+nom patronymique Mr+nom
         *  patronymique Mme+prénom Mme
         *  * POUR ET MODE JOINT ET USAGE PRIVE
         *  41 Désignation personne 1 ou désignation
         *  personne 2
         *  42 Désignation personne 2 ou désignation
         *  personne 1
         *
         *  99 Forçage
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
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
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
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         *  - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         *  - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         *  - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
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
         *  - Désignation courte du particulier si personne physique
         *  - Nom commercial si professionnel
         *  - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationTiers: string;
        /**
         * Personne titulaire à qui on a affecté l'adresse de l'entité titulaire. (Notion non applicable aux usufruitiers).
         */
        indicateurAffectationAdresse: boolean;
        /**
         * Le type de mandat permet d'enregistrer une
         * procuration qu'accorde un client sur tout
         * ou partie de ses comptes à une autre personne.
         *
         *            Valeurs :
         * 'G'        Procuration générale (sauf CDD,cpte titre,coffre)
         *            On donne procuration sur tous les comptes
         *            de la personne.
         * 'P'        Procuration générale par compte
         *            On donne procuration sur un compte
         *            en disposition
         * 'PS'       Procuration spéciale d'administration
         *            On donne le droit de gérer le compte, mais
         *            pas d'en bénéficier.
         * 'K'        Procuration spéciale porteur de carte pro
         *            On donne procuration sur les comptes support
         *            pour détention de carte
         */
        typeMandat: string;
    }
}

declare module libEAI.Rest.Modeles.Tiers {
    interface IIdentificationTiers {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        identifiantPersonne: number;
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro chrono lieu activité
         */
        numeroLieuActivite: number;
    }
    interface ICaracteristiqueTiers {
        /**
         * Code personnalité juridique
         */
        codePersonnaliteJuridique: string;
        /**
         * Libellé Code personnalité juridique
         */
        libellePersonnaliteJuridique: string;
        /**
         * Code état personne/entité titulaire
         */
        codeEtatPersonne: string;
        /**
         * Code type relation personne
         */
        codeTypePersonne: string;
        /**
         * Date première entrée en relation
         * Type date au format yyyy-MM-dd
         */
        dateEntreeRelation: string;
        /**
         * Code Guichet Risques BDF
         */
        codeGuichetRisque: string;
        /**
         * Code classe pers non éligible FGDR
         */
        eligibiliteTiers: string;
        /**
         * Indic droit au compte
         */
        indicateurDroitCompte: string;
        identifiantClientBad: string;
    }
    interface IInformationParticulier {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        identifiantPersonne: number;
        /**
         * Code Civilité Particulier
         */
        codeCivilite: string;
        /**
         * Libellé Code Civilité
         */
        libelleCivilite: string;
        /**
         * Code Sexe Particulier
         */
        sexe: string;
        /**
         * Libellé Code Sexe Particulier
         */
        libelleSexe: string;
        /**
         * Nom famille Personne Physique
         */
        nomFamillePersonnePhysique: string;
        /**
         * nom marital
         */
        nomMarital: string;
        /**
         * Désignation courte particulier
         */
        designationCourte: string;
        /**
         * Premier prénom état civil Personne
         */
        prenom: string;
        /**
         * Date Naissance Personne Physique
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Code INSEE localité naissance
         */
        codeCommuneNaissance: string;
        /**
         * Libellé commune naissance
         */
        libelleCommuneNaissance: string;
        /**
         * Code département naissance
         */
        codeDepartementNaissance: string;
        /**
         * libellé Département naissance
         */
        libelleDepartementNaissance: string;
        /**
         * Code pays nationalité INSEE
         */
        codeInseePaysNationalite: string;
        /**
         * Libellé nationalité pays
         */
        libelleNationalite: string;
        /**
         * Date décès Personne Physique
         * Type date au format yyyy-MM-dd
         */
        dateDeces: string;
        /**
         * Code appartenance réseau
         */
        codeAppartenanceReseau: string;
        /**
         * Libellé appartenance réseau
         */
        libelleAppartenanceReseau: string;
        /**
         * Indic sociétaire
         */
        indicSocietaire: string;
        /**
         * Code type capacité juridique
         */
        codeCapaciteJuridique: string;
        /**
         * Libellé type capacité juridique
         */
        libelleCapaciteJuridique: string;
        /**
         * Code pays naissance INSEE
         */
        codePaysNaissance: string;
        /**
         * Libellé INSEE Pays de Naissance
         */
        libellePaysNaissance: string;
        /**
         * Code INSEE PAYS double nationalité
         */
        codeInseePaysDoubleNationalite: string;
        /**
         * Libellé double nationalité du pays
         */
        libelleDoubleNationalitePays: string;
        /**
         * Code type situation de famille
         */
        situationFamille: string;
        /**
         * Libellé situation famille
         */
        libelleCodeSituationFamiliale: string;
        /**
         * Date effet situation famille
         * Type date au format yyyy-MM-dd
         */
        dateEffetSituationFamille: string;
        /**
         * Code type régime matrimonial
         */
        codeRegimeMatrimonial: string;
        /**
         * Libellé du régime matrimonial
         */
        libelleRegimeMatrimonial: string;
        /**
         * Nombre enfants à charge
         */
        nombreEnfantACharge: number;
        /**
         * Code catégorie socio-professionnelle
         */
        codeCategorieSocioProf: string;
        /**
         * libellé CSP
         */
        libelleCsp: string;
        /**
         * Date effet CSP
         * Type date au format yyyy-MM-dd
         */
        dateEffetCsp: string;
        /**
         * Nom employeur du particulier
         */
        nomEmployeur: string;
        /**
         * Numéro SIREN employeur principal
         */
        numeroSirenEmployeurPrincipal: string;
        /**
         * Date embauche par employeur actuel
         * Type date au format yyyy-MM-dd
         */
        dateEmbaucheParEmployeurActuel: string;
        /**
         * Code type contrat travail
         */
        codeTypeContratTravail: string;
        /**
         * Libellé Code type contrat travail
         */
        libelleCodeTypeContratTravail: string;
        /**
         * Date fin contrat
         * Type date au format yyyy-MM-dd
         */
        dateFinContrat: string;
        /**
         * Code famille NAF INSEE
         */
        codeFamilleNAFINSEE: string;
        /**
         * Code NAF 3 dernier caractere
         */
        troisDerniersCaracteresNAF: string;
        /**
         * Libelle Code NAF rev2 INSEE
         */
        libelleEtablissement: string;
        /**
         * Code résident
         */
        codeResident: string;
        /**
         * Idt relation économique (ménage)
         */
        identiteRelationEcoMenage: number;
        /**
         * Référence externe EDS
         */
        referenceExterneEds: number;
        /**
         * Type clause matrimoniale
         */
        typeClauseMatrimoniale: string;
        /**
         * Code donation entre époux
         */
        codeDonationEntreEpoux: string;
        /**
         * Indicateur auto entrepreneur
         */
        indicateurAutoEntrepreneur: string;
        /**
         * Autres prénoms état civil
         */
        autresPrenomsEtatCivil: string;
        /**
         * Indic domiciliation revenus
         */
        indicDomiciliationRevenus: string;
        /**
         * Indic enreg hors présence client
         */
        indicEnregHorsPresenceClient: string;
        /**
         * Libellé profession particulier
         */
        libelleProfessionParticulier: string;
        /**
         * Code type secteur emploi
         */
        codeTypeSecteurEmploi: string;
        /**
         * Indicateur Activité Professionnelle
         */
        indicateurActiviteProfessionnel: string;
        /**
         * Indic envoi courrier
         */
        indicateurEnvoiCourrier: string;
        /**
         * Code pièce justif professionnelle
         */
        codePieceJustificative: string;
        /**
         * date d'obtention piece justificative
         * Type date au format yyyy-MM-dd
         */
        dateObtentionPieceJustificative: string;
        /**
         * Référence pièce justificative
         */
        referencePieceJustificative: string;
        /**
         * No identification fiscale NIF NNI
         */
        noIdentificationFiscaleNifNni: string;
        /**
         * Code type NIF NNI
         */
        codeTypeNifNni: string;
        /**
         * Date naturalisation
         * Type date au format yyyy-MM-dd
         */
        dateNaturalisation: string;
        /**
         * Date naissance conjoint
         * Type date au format yyyy-MM-dd
         */
        dateNaissanceConjoint: string;
        /**
         * Indic décès présumé
         */
        indicDecesPresume: string;
        /**
         * Date décès présumé
         * Type date au format yyyy-MM-dd
         */
        dateDecesPresume: string;
        /**
         * Idt élément structure domiciliation
         */
        identifiantEDSDomiciliation: number;
        /**
         * Code classe pers non éligible FGDR
         */
        eligibiliteTiers: string;
        /**
         * Indic droit au compte
         */
        indicDroitCompte: string;
        /**
         * Numero SIREN auto entrepreneur
         */
        numeroSirenAutoEntrepreneur: string;
        /**
         * Date effet option résidence
         * Type date au format yyyy-MM-dd
         */
        dateEffetOptionResidence: string;
        /**
         * Code famille catégorie juridique
         */
        codeCategorieJuridique: string;
        /**
         * Code catégorie juridique 2 dern car
         */
        codeCategoJuridi2DerCaracteres: string;
        /**
         * libelle statut FATCA
         */
        libelleStatutFatca: string;
        /**
         * Date attribution statut FATCA
         * Type date au format yyyy-MM-dd
         */
        dateAttributionStatutFatca: string;
        /**
         * Identifiant Client
         */
        identifiantBad: string;
    }
    interface IInformationProfessionnel {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro SIREN entreprise
         */
        numeroSiren: string;
        /**
         * Code type NIF NNI
         */
        codeTypeNifNni: string;
        /**
         * Libellé code type NIF NNI
         */
        libelleCodeTypeNifNni: string;
        /**
         * No identification fiscale NIF NNI
         */
        noIdentificationFiscaleNifNni: string;
        /**
         * Nom commercial professionnel
         */
        nomCommercial: string;
        /**
         * Raison sociale
         */
        raisonSocial: string;
        /**
         * Code situation jurid professionnel
         */
        codeSituationJuridique: string;
        /**
         * libellé situation juridique prof
         */
        libelleSituationJuridiqueProf: string;
        /**
         * Code catégorie juridique INSEE
         */
        codeINSEE: string;
        /**
         * Libellé catégorie juridique INSEE
         */
        libelleCategorieJuridiqueInsee: string;
        /**
         * Date création juridique prof
         * Type date au format yyyy-MM-dd
         */
        dateCreationJuridique: string;
        /**
         * Code NAF INSEE
         */
        codeNafInsee: string;
        /**
         * Libelle Code NAF rev2 INSEE
         */
        libelleEtablissement: string;
        /**
         * Date clôture juridique professionnel
         * Type date au format yyyy-MM-dd
         */
        dateClotureJuridiqueProf: string;
        /**
         * Code régime fiscal du professionnel
         */
        codeRegimeFiscal: string;
        /**
         * libellé code régime fiscal
         */
        libelleCodeRegimeFiscal: string;
        /**
         * Mt Chiffre affaires social
         */
        montantChiffreAffaires: number;
        /**
         * Année CA ou budget
         */
        anneeChiffreAffaires: number;
        /**
         * Montant capital social en euro
         */
        montantCapitalSocial: number;
        /**
         * Date arrêté bilan du professionnel
         */
        dateArreteComptable: number;
        /**
         * Identifiant Elément structure
         */
        idEdsInterne: number;
        /**
         * Activité économique réelle prof
         */
        activiteEconomiqueReelleProf: string;
        /**
         * Code famille APE INSEE
         */
        codeFamilleApeInsee: string;
        /**
         * Deux derniers caractères APE
         */
        deuxDernierCaractereApe: string;
        /**
         * Code indicateur entreprise étrangère
         */
        codeIndicateurEntrepEtrangere: string;
        /**
         * Code devise ISO 4217 alpha-3
         */
        codeDevise: string;
        /**
         * Code appartenance réseau
         */
        codeAppartenanceReseau: string;
        /**
         * Code agent économique BAFI
         */
        codeAgentEconomique: string;
        /**
         * Code Type Commerce Organisé
         */
        codeTypeCommerceOrganise: string;
        /**
         * Durée de vie personne morale
         */
        dureeViePersonneMorale: number;
        /**
         * Code pièce justif professionnelle
         */
        codePieceJustificative: string;
        /**
         * Référence pièce justificative prof
         */
        referencePieceJustificativeProf: string;
        /**
         * Code cotation Professionnel
         */
        codeCotation: string;
        /**
         * Référence externe EDS
         */
        edsDomiciliation: number;
        /**
         * Sigle
         */
        sigle: string;
        /**
         * Type de personne
         */
        codeTypeTiers: string;
        /**
         * Effectif salarié professionnel
         */
        effectif: number;
        /**
         * Code banque entité pilote
         */
        codeBanqueEntitePilote: string;
        /**
         * Code agent économique théorique
         */
        codeAgentEconomiqueTheorique: string;
        /**
         * Code mode attribution agent éco
         */
        codeModeAttributionAgentEco: string;
        /**
         * Indicateur EIRL
         */
        indicateurEirl: string;
        /**
         * Date début option EIRL
         * Type date au format yyyy-MM-dd
         */
        dateDebutOptionEirl: string;
        /**
         * Date fin option EIRL
         * Type date au format yyyy-MM-dd
         */
        dateFinOptionEirl: string;
        /**
         * Indic option opposabilité EIRL
         */
        indicOptionOpposabiliteEirl: string;
        /**
         * Indic Pers morale organisme public
         */
        indicPersMoraleOrganismePublic: string;
        /**
         * Indic Pers morale marché règlementé
         */
        indicPersMoraleMarcheReglemente: string;
        /**
         * Indic édition benefr effectifs
         */
        indicEditionBenefrEffectifs: string;
        /**
         * Identifiant LEI
         */
        identifiantLei: string;
        /**
         * Code EMIR
         */
        codeEmir: string;
        /**
         * Indic délégation Client déclaration
         */
        indicDelegationClientDeclarat: string;
        identifiantEDSDomiciliation: number;
    }
    interface IInformationEtablissement {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro chrono lieu activité
         */
        numeroLieuActivite: number;
        /**
         * Désignation courte lieu activité
         */
        designationEntiteTitulaire: string;
        /**
         * Code statut lieu activité
         */
        codeStatutLieuActivite: string;
        /**
         * Numéro telex lieu activité
         */
        numTelex: string;
        /**
         * Numéro télécopieur lieu activité
         */
        numTelecopieur: string;
        /**
         * Effectif du lieu d'activité
         */
        effectifDuLieuActivite: number;
        /**
         * Enseigne commerciale lieu d'activité
         */
        enseigneCommercialeLieuActivit: string;
        /**
         * Date début exploit lieu activité
         * Type date au format yyyy-MM-dd
         */
        dateDebut: string;
        /**
         * Date fin exploitation lieu activité
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Activité économique réelle lieu
         */
        activiteEconomiqueReelleLieu: string;
        /**
         * Date d' enregistrement lieu activité
         * Type date au format yyyy-MM-dd
         */
        dateEnregistrementLieuActivite: string;
        /**
         * Date dernière mise à jour du lieu
         * Type date au format yyyy-MM-dd
         */
        dateDerniereMiseAJourLieu: string;
        /**
         * Code rafraîchissement lieu activité
         */
        codeRafraichLieuActivite: string;
        /**
         * Date dernière vérif lieu activité
         * Type date au format yyyy-MM-dd
         */
        dateDerniereVerifLieuActivite: string;
        /**
         * Désignation longue lieu activité
         */
        designationLongueLieuActivite: string;
        /**
         * Numéro SIREN professionnel
         */
        numeroSIREN: string;
        /**
         * No complément SIRET établissement
         */
        complementSIRET: string;
        /**
         * Code famille APE INSEE
         */
        codeFamilleApeInsee: string;
        /**
         * Deux derniers caractères APE
         */
        deuxDernierCaractereApe: string;
        /**
         * Code résident
         */
        codeResident: string;
        /**
         * Date dern traçage APE du prof
         * Type date au format yyyy-MM-dd
         */
        dateDernTracageApeProf: string;
        /**
         * Libellé traçage codification APE
         */
        libelleTracageCodificationApe: string;
        /**
         * Type traçage codification APE
         */
        typeTracageCodificationApe: string;
        /**
         * Code famille NAF INSEE
         */
        codeFamilleNAFINSEE: string;
        /**
         * Code NAF 3 dernier caractere
         */
        troisDerniersCaracteresNAF: string;
        /**
         * Libelle Code NAF rev2 INSEE
         */
        libelleEtablissement: string;
    }
    interface IAdresse {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro chrono lieu activité
         */
        numeroLieuActivite: number;
        /**
         * Identifiant adresse
         */
        identifiant: number;
        /**
         * Code type adresse
         */
        codeType: string;
        /**
         * Libellé type adresse
         */
        libelleType: string;
        /**
         * Ligne 2 adresse AFNOR
         */
        ligne2AFNOR: string;
        /**
         * Ligne 3 adresse AFNOR
         */
        ligne3AFNOR: string;
        /**
         * Ligne 4 adresse AFNOR
         */
        ligne4AFNOR: string;
        /**
         * Ligne 5 adresse AFNOR
         */
        ligne5AFNOR: string;
        /**
         * Ligne 6 adresse AFNOR
         */
        ligne6AFNOR: string;
        /**
         * Code postal PTT
         */
        codePostalPTT: string;
        /**
         * Code pays INSEE
         */
        codePays: string;
        /**
         * Code Pays norme ISO 3166-1 alpha-2
         */
        codeISOPays: string;
        /**
         * Libellé pays ISO3166-1
         */
        libelleISOPays: string;
        /**
         * Code INSEE localité
         */
        codeInseelocalite: string;
        /**
         * Libellé commune
         */
        libelleInseeLocalite: string;
        /**
         * Code type retour PTT
         */
        codeTypeRetourPtt: string;
        /**
         * libellé code type de retour PTT
         */
        libelleCodeTypeRetourPtt: string;
        /**
         * Indic envoi courrier
         */
        indicateurEnvoiCourrier: string;
        /**
         * Ind. dif. adresse fiscale postale
         */
        inddifadresseFiscalePostale: string;
        /**
         * Numéro voie PTT ville plus 50000 hab
         */
        numeroVoiePTT: number;
        /**
         * Code quartier
         */
        codeQuartier: string;
        /**
         * Numéro tournée facteur
         */
        numeroTourneeFacteur: number;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephone: string;
        /**
         * Code validité adresse UNISERV
         */
        codeValiditeAdresseUniserv: string;
        /**
         * Code existence liste rouge
         */
        codeExistenceListeRouge: string;
        /**
         * Numéro fax
         */
        numeroFAX: string;
        /**
         * Code accès au Minitel
         */
        codeAccesMinitel: string;
        /**
         * Indicateur détention téléphone
         */
        indicateurDetentionTelephone: string;
        /**
         * Commentaire téléphone
         */
        commentaireTelephone: string;
        /**
         * Code postal France & Etranger
         */
        codePostalFranceEtranger: string;
        /**
         * Libellé commune
         */
        libelleCommune: string;
        /**
         * Type personne ou lieu Adresse
         */
        codeTypeLieu: string;
        /**
         * Date dernier retour PTT adresse
         * Type date au format yyyy-MM-dd
         */
        dateDernierRetourPttAdresse: string;
        /**
         * Nombre retour PTT
         */
        nombreRetourPtt: number;
    }
    interface IMedia {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Type moyen de contact
         */
        typeMoyenContact: string;
        /**
         * Adresse moyen de contact
         */
        adresseMoyenContact: string;
        /**
         * Code indicatif international tel
         */
        codeIndicatifInternationalTel: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephone: string;
        /**
         * Code Opt'in
         */
        codeOptIn: string;
        /**
         * Téléphone/E-Mail préféré
         */
        telephoneEmailPrefere: string;
        /**
         * Telephone sécurisé
         */
        telephoneEmailSecurise: string;
        /**
         * Indic envoi média PRO OPT'OUT
         */
        indicEnvoiMediaProOptOut: string;
        /**
         * Indic envoi SMS ou fax
         */
        indicEnvoiSmsFax: string;
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
    }
    interface IInformationTiersLie {
        /**
         * Code type lien inter-personnes
         */
        codeTypeLienInterPersonne: string;
        /**
         * Code banque Etablissement GCE
         */
        codeEtablissement: string;
        /**
         * Deuxième personne en relation
         */
        identifiantPersonneLie: number;
        /**
         * Code sens lien inter-personnes
         */
        codeSensLienInterPersonne: string;
        /**
         * Personne Rattachée Relation Economiq
         */
        personneRattacheeRelation: string;
        identifiantPersonne: number;
        designationRelationEconomique: string;
        codeFamilleLienInterPersonne: string;
        pourcentageCapitalistique: number;
        codeQualifLienInterPersonne: string;
        dateDebutEffetLienInterPersonne: string;
        dateFinEffetLienInterPersonne: string;
        refPieceJustificatifLien: string;
    }
    interface ITiersNoyau {
        identificationTiers: IIdentificationTiers;
        caracteristiqueTiers: ICaracteristiqueTiers;
        informationParticulier: IInformationParticulier;
        informationProfessionnel: Array<IInformationProfessionnel>;
        informationEtablissement: Array<IInformationEtablissement>;
        adresse: Array<IAdresse>;
        media: Array<IMedia>;
        informationTiersLie: Array<IInformationTiersLie>;
        informationsEAI: IInformationsEAI;
        immatriculationProfessionnel: Array<IImmatriculationProfessionnel>;
    }
    interface IInformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
        libelleCodeStatutEAI: string;
        libelleCodeModeSignatureEAI: string;
    }
    interface IImmatriculationProfessionnel {
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Code type registre
         */
        codeTypeRegistre: string;
        /**
         * Numéro immatriculation registre
         */
        numeroImmatriculationRegistre: string;
        /**
         * Lieu inscription registre
         */
        lieuImmatriculationRegistre: string;
        /**
         * Date immatriculation professionnel
         * Type date au format yyyy-MM-dd
         */
        dateImmatriculationRegistre: string;
    }
}

declare module libEAI.Rest.Services {
    interface ICacheService {
        /**
         * Tente de trouver le résultat à partir du cache. Sinon retourne la promesse en stockant le résultat
         * @param key
         * @param promise
         * @param fromCache: optionnel (par défaut: true)
         */
        get<T>(key: string, promise: () => ng.IPromise<T>, fromCache?: boolean): ng.IPromise<T>;
    }
}

declare module libEAI.Rest.Services {
    import ModelEntiteTitulaire = Modeles.EntiteTitulaire.ControleInfoFiscale;
    interface IControleInfoFiscaleService {
        getControleInfoFiscale(codeEtablissement: string, identifiantEntiteTitulaire: number, identifiantPersonne: number): ng.IPromise<ModelEntiteTitulaire.IInformationFiscaleEntiteTitulaire>;
    }
    interface IControleInfoFiscaleParams {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantPersonne: number;
    }
    class ControleInfoFiscaleService implements IControleInfoFiscaleService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Rest.Services.IRestService);
        /**
         * Appel REST (GET) controle information fiscale
         * @param codeEtablissement
         * @param identifiantEntiteTitulaire
         * @param identifiantPersonne
         */
        getControleInfoFiscale(codeEtablissement: string, identifiantEntiteTitulaire: number, identifiantPersonne: number): ng.IPromise<ModelEntiteTitulaire.IInformationFiscaleEntiteTitulaire>;
    }
}

declare module libEAI.Rest.Services {
    import ModelEntiteTitulaire = Modeles.EntiteTitulaire;
    import modelTiers = libEAI.Rest.Modeles.Tiers;
    interface IInformationEAIService {
        getInformationEAI(codeEtab: string, identifiantPersonne: number, modeVisualisation: string): ng.IPromise<ModelEntiteTitulaire.InfoFiscale.IInformationEAI>;
        miseAjourInformationEAI(codeActionAutoCertificationEAI: string, indicateurAccesEAIviaVAD: boolean, typeControleACEAI: string, typeTraitementFATCA: string, data: ModelEntiteTitulaire.InfoFiscale.IInformationEAI): ng.IPromise<ModelEntiteTitulaire.InfoFiscale.IInformationEAI>;
        suppressionInformationEAI(indicateurAccesEAIviaVAD: boolean, data: ModelEntiteTitulaire.InfoFiscale.IInformationEAI): ng.IPromise<ModelEntiteTitulaire.InfoFiscale.IInformationEAI>;
        envoyerData(infosEAI: ModelEntiteTitulaire.InfoFiscale.IInformationEAI, tiersNoyau: modelTiers.ITiersNoyau, _indicateurCitoyenUS: boolean, _listeResidence: libEAI.Params.Modeles.IObjetResidenceFiscale[], _commentaireSaisie?: string, _identifiantRepresentantLegal?: number): ng.IPromise<ModelEntiteTitulaire.InfoFiscale.IInformationEAI>;
        recupererListeResidence(listeResidence: libEAI.Params.Modeles.IObjetResidenceFiscale[]): ModelEntiteTitulaire.InfoFiscale.IResidenceAutoCertificationEAI[];
    }
    interface IInfoEAIParams {
        codeEtablissement: string;
        identifiantPersonne: number;
        modeVisualisation: string;
    }
    interface IPUTInfoEAIParams {
        codeActionAutoCertificationEAI: string;
        indicateurAccesEAIviaVAD: boolean;
        typeControleACEAI: string;
        typeTraitementFATCA: string;
    }
    interface ISuppInfoEAIParams {
        codeActionAutoCertificationEAI: string;
        indicateurAccesEAIviaVAD: boolean;
    }
    class InformationEAIService implements IInformationEAIService {
        private restService;
        private initService;
        private $q;
        private utilService;
        _listeResidenceEnvoye: ModelEntiteTitulaire.InfoFiscale.IResidenceAutoCertificationEAI[];
        static $inject: Array<string>;
        constructor(restService: Rest.Services.IRestService, initService: libEAI.Services.IInitialisationService, $q: ng.IQService, utilService: libEAI.Services.IUtilitaireService);
        /**
         * Méthode de recupéaration de l'information fiscale
         * @param codeEtablissement
         * @param modeVisualisation : "D" : une restitution détaillée de l'auto-certification EAI de la personne
         * "L": une restitution "légère" de l'auto-certification EAI, avec les principaux statuts de la personne
         * @param idPersonne
         */
        getInformationEAI(codeEtab: string, idPersonne: number, mode: string): ng.IPromise<ModelEntiteTitulaire.InfoFiscale.IInformationEAI>;
        /**
         * PUT envoyé lors de la validation de la saisie de l'AC
         * @param codeActionAutoCertificationEAI
         * @param indicateurAccesEAIviaVAD
         * @param typeControleACEAI
         * @param typeTraitementFATCA
         * @param data
         */
        miseAjourInformationEAI(codeActionAutoCertificationEAI: string, indicateurAccesEAIviaVAD: boolean, typeControleACEAI: string, typeTraitementFATCA: string, data: ModelEntiteTitulaire.InfoFiscale.IInformationEAI): ng.IPromise<ModelEntiteTitulaire.InfoFiscale.IInformationEAI>;
        /**
         * PUT envoyé lors de l'annulation de la saisie
         * @param codeActionAutoCertificationEAI
         * @param indicateurAccesEAIviaVAD
         * @param data
         */
        suppressionInformationEAI(indicateurAccesEAIviaVAD: boolean, data: ModelEntiteTitulaire.InfoFiscale.IInformationEAI): ng.IPromise<ModelEntiteTitulaire.InfoFiscale.IInformationEAI>;
        /**
         * Recuperation de l'objet original en cours de saisie
         */
        private recuperObjetOriginalEAI();
        listeResidenceEnvoye: ModelEntiteTitulaire.InfoFiscale.IResidenceAutoCertificationEAI[];
        /**
         * recupere la liste des résidences fiscales
         * @param listeResidence
         */
        recupererListeResidence(listeResidence: libEAI.Params.Modeles.IObjetResidenceFiscale[]): ModelEntiteTitulaire.InfoFiscale.IResidenceAutoCertificationEAI[];
        /**
         * Mappage des données à envoyer
         * @param infosEAI
         * @param tiersNoyau
         * @param _identifiantRepresentantLegal
         * @param _indicateurCitoyenUS
         * @param _listeResidence
         * @param _commentaireSaisie
         */
        envoyerData(infosEAI: ModelEntiteTitulaire.InfoFiscale.IInformationEAI, tiersNoyau: modelTiers.ITiersNoyau, _indicateurCitoyenUS: boolean, _listeResidence: libEAI.Params.Modeles.IObjetResidenceFiscale[], _commentaireSaisie?: string, _identifiantRepresentantLegal?: number): ng.IPromise<ModelEntiteTitulaire.InfoFiscale.IInformationEAI>;
    }
}

declare module libEAI.Rest.Services {
    import ModelEntiteTitulaire = Modeles.EntiteTitulaire.InfoEntiteTitulaire;
    interface IInfoEntiteTitulaireService {
        getInformationEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<ModelEntiteTitulaire.IInformationEntiteTitulaire>;
    }
    interface IInfoEntiteTitulaireParams {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    class InfoEntiteTitulaireService implements IInfoEntiteTitulaireService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Rest.Services.IRestService);
        /**
         * Méthode GET d'appel de la ressource
         * @param codeEtablissement
         * @param identifiantEntiteTitulaire
         */
        getInformationEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<ModelEntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

declare module libEAI.Rest.Services {
    interface IRestService {
        /**
         * Exécution de la requète GET, les données récupérées sont mises en cache
         * @param urlService
         * @param params : paramètres dans le query
         * @param fromCache: optionnel, par défaut true, mais il est possible de forcer la récupération
         * @param timeout: optionnel
         */
        sendGetRequest<T, U>(urlService: string, params: U, cacheKey: string, fromCache?: boolean, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète POST
         * @param urlService
         * @param data : données dans le BODY
         * @param params: optionnel, paramètres dans le query
         * @param timeout: optionnel
         */
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète PUT
         * @param urlService
         * @param data : données dans le BODY
         * @param params: optionnel, paramètres dans le query
         * @param timeout: optionnel
         */
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète DELETE
         * @param urlService
         * @param data: optionnel
         */
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
    }
    class RestService implements IRestService {
        private serviceAgentExtended;
        private cacheService;
        private logger;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, cacheService: Services.ICacheService, logger: Logger.ILogger);
        /**
         * Méthode de recuperation des donnees
         * @param urlService
         * @param params
         * @param cacheKey
         * @param fromCache
         * @param timeout
         */
        sendGetRequest<T, U>(urlService: string, params: U, cacheKey: string, fromCache?: boolean, timeout?: number): ng.IPromise<T>;
        /**
         * Méthode de création de donnees
         * @param urlService
         * @param data
         * @param params
         * @param timeout
         */
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Méthode de mise à jour des donnees
         * @param urlService
         * @param data
         * @param params
         * @param timeout
         */
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Méthode de suppression des donnees
         * @param urlService
         * @param data
         */
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
        /**
         *
         * @param typeMethode
         * @param urlService
         * @param params
         * @param data
         * @param timeout
         */
        private consume<T, U, V>(typeMethode, urlService, params?, data?, timeout?);
    }
}

declare module libEAI.Rest.Services {
    import modelTiers = Modeles.Tiers;
    interface ITiersNoyauService {
        recupererTiersNoyau(codeEtab: string, identifiantPersonne: number): ng.IPromise<modelTiers.ITiersNoyau>;
    }
    interface ITiersNoyauParams {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    class TiersNoyauService implements ITiersNoyauService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: Rest.Services.IRestService);
        /**
         * Méthode de recupération des informations personne
         * @param codeEtablissement
         * @param idPersonne
         */
        recupererTiersNoyau(codeEtab: string, idPersonne: number): ng.IPromise<modelTiers.ITiersNoyau>;
    }
}
