declare module libc2 {
    var lib: ng.IModule;
}

declare module libc2 {
    class Constantes {
        static ENV_MYWAY_DUA: string;
        static KEY_QUALITE_PRIVE: string;
        static KEY_QUALITE_EI: string;
        static CODE_TYPE_INTERLOCUTEURS: string;
        static CODE_TYPE_INTERLOCUTEURS_BAD: string;
        static CIVILITE_MDE: string;
        static CIVILITE_MLLE: string;
        static CIVILITE_M: string;
        static TYPO_CIVILITE: string;
        static TYPO_SITUATION_FAMILIALE: string;
        static TYPO_RELATION_LIENS: string;
        static TYPO_RELATION_QUALITE: string;
        static TYPO_PIECES_JUSTIFICATIVES: string;
        static TYPO_FAMILLE_LIENS: string;
        static TYPO_PAYS: string;
        static TYPO_NATIONALITE: string;
        static TYPO_INDICATIF_TEL: string;
        static TYPO_CAPACITE_JURIDIQUE: string;
        static TYPO_SITUATION_FAMILLE: string;
        static TYPO_CLAUSE_REGIME: string;
        static TYPO_REGIME_MATRIMONIAL: string;
        static TYPO_SITUATION_PROFESSIONNELLE: string;
        static TYPO_SECTEUR_EMPLOI: string;
        static TYPO_FAMILLES_CHARGES_REVENUS: string;
        static TYPO_CHARGE: string;
        static TYPO_CHARGE_IMPOTS_FISCALITE: string;
        static TYPO_REVENU: string;
        static TYPO_USAGE: string;
        static TYPO_HABITATION: string;
        static TYPO_BIEN: string;
        static TYPO_NATURE_OCCUPATION: string;
        static TYPO_PATRIMOINE_FINANCIER: string;
        static TYPO_PERIODICITE_PATRIMOINE_FINANCIER: string;
        static TYPO_THEMES_SENSIBILITE: string;
        static TYPO_SOUSTHEMES_SENSIBILITE: string;
        static TYPO_PERIODICITE_REVENU: string;
        static TYPO_PERIODICITE_CHARGE: string;
        static TYPO_PROJETS: string;
        static TYPO_METIERS: string;
        static TYPO_LIEN_HERITIERS: string;
        static TYPO_FAMILLE_APE: string;
        static TYPO_SOUSFAMILLE_NAF: string;
        static TYPO_CATEG_JURIDIQUE: string;
        static TYPO_CATEG_JURIDIQUE_COMPLETE: string;
        static TYPO_LISTE_CODE_NAF: string;
        static TYPO_INFO_BANCAIRE: string;
        static TYPO_RESEAU_CE: string;
        static TYPO_MOTS_CNIL: string;
        static TYPO_LIBELLE_SEGMENTATION_RISQUE: string;
    }
}

declare module libc2 {
    interface IInfoEDS {
        identifiantEDS: number;
        libelleEDS: string;
        codeGuichetRisqueBDF: number;
        typeElementStructure: string;
        referenceElementStructure: number;
        flagOK: boolean;
    }
    class InfoEDS implements IInfoEDS {
        identifiantEDS: number;
        libelleEDS: string;
        codeGuichetRisqueBDF: number;
        typeElementStructure: string;
        flagOK: boolean;
        referenceElementStructure: number;
        constructor();
    }
    interface IContexte {
        init: (mock?: IDataContexte) => ng.IPromise<IDataContexte>;
        read: () => IDataContexte;
        setValeur: (clef: string, valeur: string) => any;
        setValeurToMainContext: (clef: string, valeur: Object) => any;
        getValeur: (clef: string) => any;
        write: (d: IDataContexte) => void;
        setListValeurToContext: (list: MyWay.Services.Context.IContextKeyValuePair[]) => any;
    }
    interface IDataContexte {
        authentification: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        identifiantPersonne: number;
        identifiantPersonneRelation: number;
        codeInputBDR: number;
        InfoEDS: IInfoEDS;
    }
    class DataContexte implements IDataContexte {
        authentification: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        identifiantPersonne: number;
        identifiantPersonneRelation: number;
        codeInputBDR: number;
        InfoEDS: IInfoEDS;
        constructor();
    }
    class Contexte implements IContexte {
        $q: ng.IQService;
        static $inject: string[];
        constructor($q: ng.IQService);
        _singletonData: IDataContexte;
        static InitParametresComptable(): MyWay.Services.Context.ParametresComptables;
        init(): ng.IPromise<IDataContexte>;
        private initContexte(agent, d);
        read(): any;
        write(d: IDataContexte): any;
        setValeur(clef: string, valeur: string): any;
        setValeurToMainContext(clef: string, valeur: Object): any;
        setListValeurToContext(list: MyWay.Services.Context.IContextKeyValuePair[]): any;
        getValeur(clef: any): any;
    }
}

declare module libc2 {
    interface IGlobal {
        initC2(): ng.IPromise<any>;
    }
    class Global implements IGlobal {
        static staticServiceAgent: MyWay.Services.ServiceAgentExtended;
        static staticPromiseBoot: any;
        ServiceAgentExtended: MyWay.Services.ServiceAgentExtended;
        $q: any;
        tools: ITools;
        contexte: IContexte;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: any, Tools: ITools, Contexte: IContexte);
        initC2(): ng.IPromise<any>;
    }
}

declare module libc2 {
    interface IResultRecherchePersonneCritere {
        siren: string;
        raisonSociale: string;
        nomMarital: string;
        nomFamille: string;
        prenom: string;
        codeQualite: string;
        codeNature: string;
        sexe: string;
    }
    class ResultRecherchePersonneCritere implements IResultRecherchePersonneCritere {
        siren: string;
        raisonSociale: string;
        nomMarital: string;
        nomFamille: string;
        prenom: string;
        codeQualite: string;
        codeNature: string;
        sexe: string;
        constructor();
    }
    interface IResultRecherchePersonne {
        codeStatut: number;
        identifiantPersonne: number;
        raisonSociale: string;
        nomMarital: string;
        nomFamille: string;
        prenom: string;
        siren: string;
        personneMorale: boolean;
        personnePhysique: boolean;
        codePersonnaliteJuridique: string;
        codeCivilite: string;
        criteres: IResultRecherchePersonneCritere;
    }
    class ResultRecherchePersonne implements IResultRecherchePersonne {
        static CODE_ACTION_PERSONNE_CREATE: number;
        static CODE_ACTION_PERSONNE_EXIST: number;
        static MODE_RECHERCHE_ALL: number;
        static MODE_RECHERCHE_MORALE: number;
        static MODE_RECHERCHE_PHYSIQUE: number;
        codeStatut: number;
        identifiantPersonne: number;
        raisonSociale: string;
        nomMarital: string;
        nomFamille: string;
        prenom: string;
        siren: string;
        personneMorale: boolean;
        personnePhysique: boolean;
        codePersonnaliteJuridique: string;
        codeCivilite: string;
        criteres: IResultRecherchePersonneCritere;
        constructor();
    }
    interface ITools {
        getStrHeureCourante: () => any;
        MsgBox: (header: any, msg: any, icon?: any, size?: any) => any;
        extractErreur: (data: any) => any;
        getStrDateCourante: () => any;
        getStrDateCouranteTiret: () => any;
        formatDateTiret: (d: any) => any;
        DisplayWarning: (mes: string) => void;
        DisplayInfo: (mes: string) => void;
        scrollTo: (id: String) => void;
        getStrDateHeureCourante: () => string;
        getImageFromGraphe: (imageNative: string, maxSize: number) => ng.IPromise<string>;
        getImageFromCanvas: (canvas: HTMLCanvasElement, maxSize: number) => ng.IPromise<string>;
        showDlg: (option: any) => ng.IPromise<any>;
        recherchePersonne: (flagCreate: boolean, modeRecherche: number) => ng.IPromise<ResultRecherchePersonne>;
    }
    class Tools implements ITools {
        private contexte;
        private urlParticulierInformation;
        private urlCorporateInformation;
        private mwgcRechercherPersonneService;
        modalService: any;
        notificationService: MyWay.UI.IMwNotificationService;
        $q: ng.IQService;
        static $inject: string[];
        constructor(contexte: IContexte, urlParticulierInformation: string, urlCorporateInformation: string, mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService, modalService: any, MwNotificationService: MyWay.UI.IMwNotificationService, $q: ng.IQService);
        getImageFromGraphe(imageNative: string, maxSize: number): ng.IPromise<string>;
        showDlg(options: any): ng.IPromise<any>;
        getImageFromCanvas(canvas: HTMLCanvasElement, maxSize: number): ng.IPromise<string>;
        private limitSizeImage(img, maxDim);
        scrollTo(id: String): void;
        getStrHeureCourante(): any;
        MsgBox(header: any, msg: any, icon?: any, size?: any): any;
        DisplayInfo(mes: string): void;
        DisplayWarning(mes: string): void;
        Confirmation(question: string): any;
        extractErreur(data: any): any;
        getStrDateHeureCourante(): string;
        getStrDateCourante(): any;
        getStrDateCouranteTiret(): any;
        formatDateTiret(d: any): any;
        recherchePersonne(flagCreate: boolean, modeRecherche: number): ng.IPromise<ResultRecherchePersonne>;
        private consolidePersonneMorale(result, def);
        private consolidePersonnePhysique(result, def);
    }
}

declare module libc2 {
    interface IDetailsInterlocuteurScope extends ng.IScope {
        interlocuteur: InterlocuteurAffichage;
        index: number;
    }
    function DetailsInterlocuteur(): ng.IDirective;
    class DetailsInterlocuteurControleur {
        private $timeout;
        private $q;
        private $rootScope;
        private $scope;
        private tools;
        private gestionInterlocuteursService;
        private personneMoraleService;
        private $filter;
        flagTransformationLien: boolean;
        codeEtablissement: string;
        interlocuteur: InterlocuteurAffichage;
        numeroLienInterlocuteur: string;
        private numeroLienInterlocuteurActif;
        identifiantPersonne: number;
        index: number;
        boutonSauvegardeVisible: any;
        boutonSupprimerVisible: any;
        typeInterlocuteurs: string;
        secteurActivite: string;
        paramIHM: any;
        roleVisible: boolean;
        roleActif: boolean;
        adressePersonneActive: IMediaLienInterlocuteur;
        formulaire: any;
        enregistrementEnCours: boolean;
        isInvalid: boolean;
        private _afficherMessageErreurDateDeFin;
        private _dateDebutValiditeElement;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, $q: ng.IQService, $rootScope: ng.IRootScopeService, $scope: ng.IScope, tools: ITools, gestionInterlocuteursService: IGestionInterlocuteursService, personneMoraleService: IPersonneMoraleService, $filter: ng.IFilterService);
        private chargerInformations(force);
        private obtenirAdresse();
        requiredNomMarital: boolean;
        dateDebutValiditeElementMessage: string;
        statusCalcule: string;
        supprimerDetailsInterlocuteurClick(): void;
        enregistrerDetailsInterlocuteurClick(): void;
        afficherMessageDateDeFin(): void;
        emailObligatoire: boolean;
        testerPresenceMedia(): boolean;
        auMoinsEmailOuTel: string;
        afficherMessageErreurDateDeFin: boolean;
    }
}

declare module libc2 {
    function InterlocuteurBDD(): ng.IDirective;
    class InterlocuteurBDDControleur {
        private $timeout;
        private contexte;
        private personnePhysiqueService;
        private gestionInterlocuteursService;
        private tools;
        private codeEtablissement;
        identifiantTiers: number;
        identifiantMorale: number;
        numeroLienInterlocuteur: number;
        roleLien: string;
        roleActif: boolean;
        secteurCharge: boolean;
        secteurActivite: string;
        interlocuteur: libc2.InterlocuteurAffichage;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, contexte: IContexte, personnePhysiqueService: IPersonnePhysiqueService, gestionInterlocuteursService: IGestionInterlocuteursService, tools: ITools);
        private determinerLibelleCivilite;
    }
}

declare module libc2 {
    interface ISaisieAdresseScope extends ng.IScope {
        _data: any;
        _param: any;
        required?: string;
        focusChamp: () => void;
        adresseVisible: boolean;
        settings: any;
        onAdresseChanged: any;
        parametres: any;
        isReady: boolean;
        adresse2: myway.comAdresseDqe.Adresse;
        codeISOPays: string;
        mwChange: () => void;
    }
}

declare module libc2 {
    interface IParamAutoComplete {
        typeData: number;
        nomTypo: string;
    }
    class ParamAutoComplete implements IParamAutoComplete {
        typeData: number;
        nomTypo: string;
        nodel: any;
        static TYPE_DATA_TYPO: number;
        constructor(typeData?: number, nomTypo?: string);
    }
    interface ISaisieAutoCompleteScope extends ng.IScope {
        tab: Array<any>;
        param: IParamAutoComplete;
        ngModel: any;
        model: any;
        placeholder: string;
        onSelect: (item: any) => void;
        required: boolean;
        requis: string;
        onChange: () => void;
    }
    class SaisieAutoComplete implements ng.IDirective {
        $timeout: ng.ITimeoutService;
        deloc: IDeloc;
        contexte: IContexte;
        restrict: string;
        templateUrl: string;
        replace: boolean;
        scope: {
            param: string;
            ngModel: string;
            placeholder: string;
            requis: string;
            onChange: string;
        };
        constructor($timeout: ng.ITimeoutService, Deloc: IDeloc, Contexte: IContexte);
        link: (scope: ISaisieAutoCompleteScope, element: any, attrs: any) => void;
        static Factory(): ($timeout: ng.ITimeoutService, Deloc: IDeloc, Contexte: IContexte) => SaisieAutoComplete;
    }
}

declare module libc2 {
}

declare module libc2 {
    function SelectionRole(): ng.IDirective;
    class SelectionRoleControleur {
        private tools;
        private referentielCorporateService;
        private $scope;
        ouvert: boolean;
        chargement: boolean;
        typologie: Array<libc2.IElementTypoLiens>;
        secteurActivite: string;
        sousMarche: string;
        libelleDefaut: string;
        libelle: string;
        idElement: string;
        element: libc2.InterlocuteurAffichage;
        private elementDuplique;
        static $inject: string[];
        constructor(tools: ITools, referentielCorporateService: IReferentielCorporateService, $scope: ng.IScope);
        setTypeLien: (typeLien: IElementTypoLiens) => void;
        basculerEtat: () => void;
        private validerLien;
        desactiverValider(): boolean;
    }
}

declare module libc2 {
    interface ICategorieLien {
        libelle: string;
        codeCategorieLien: string;
        nrOrdre: number;
    }
    class CategorieLien implements ICategorieLien {
        libelle: string;
        codeCategorieLien: string;
        nrOrdre: number;
        constructor();
    }
}

declare module libc2 {
    interface IDirigeant {
        identifiantPersonne: number;
        codeTypeLienInterPersonnes: string;
        designationCourte: string;
        initFromSI: (data: any) => void;
    }
    class Dirigeant implements IDirigeant {
        identifiantPersonne: number;
        codeTypeLienInterPersonnes: string;
        designationCourte: string;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface IRequiredScope extends ng.IScope {
        C?: any;
        required?: string;
        d?: IStandardSmallObj;
        _data?: any;
        _param?: any;
        _display: any;
        _libelle?: string;
        uimask?: string;
        placeholder?: string;
        opened?: boolean;
        open?: ($event: ng.IAngularEvent) => void;
        rechercheApe?: (ape: string) => void;
        dateOptions?: IDateOptions;
        addDateSeparator?: (e: any, control: any, format: string) => void;
    }
    interface IStandardSmallObj {
        val?: any;
        Key?: string;
        Value?: string;
        libelle?: string;
    }
    interface IDateOptions {
        autoclose?: boolean;
        formatYear?: string;
        startingDay?: number;
        showWeeks?: string;
    }
}

declare module libc2 {
    interface IIhmCompletudeDonnees {
        percent: number;
        tabData: Array<any>;
    }
    class IhmCompletudeDonnees implements IIhmCompletudeDonnees {
        percent: number;
        tabData: Array<any>;
        constructor();
    }
}

declare module libc2 {
    interface ILienInterlocuteur {
        numeroLienInterlocuteur: number;
        numeroInterlocuteur: number;
        typeInterlocuteur: string;
        designationCourte: string;
        typeRoleInterlocuteur: string;
        libelleTypeRoleInterlocuteur: string;
        codeSpecificiteInterlocuteur: string;
        dateDebutValiditeElement: Date;
        dateFinValiditeElement: Date;
        designationInterlocuteurType: string;
        civilitePersonnePhysique: string;
        nomFamillePersonnePhysique: string;
        nomUsagePersonnePhysique: string;
        premierPrenomEtatCivil: string;
        designationInterlocuteur: string;
        codeTypeLienInterPersonne: string;
        libelleCommentaireInterlocuteur: string;
        codeApplicationCartographie: string;
        codeSpecifiteAppliAppelante: string;
        codeEtablissement: string;
        identifiantPersonne: number;
        version: string;
    }
    class LienInterlocuteur implements ILienInterlocuteur {
        numeroLienInterlocuteur: number;
        numeroInterlocuteur: number;
        typeInterlocuteur: string;
        designationCourte: string;
        typeRoleInterlocuteur: string;
        libelleTypeRoleInterlocuteur: string;
        codeSpecificiteInterlocuteur: string;
        dateDebutValiditeElement: Date;
        dateFinValiditeElement: Date;
        designationInterlocuteurType: string;
        civilitePersonnePhysique: string;
        nomFamillePersonnePhysique: string;
        nomUsagePersonnePhysique: string;
        premierPrenomEtatCivil: string;
        designationInterlocuteur: string;
        codeTypeLienInterPersonne: string;
        libelleCommentaireInterlocuteur: string;
        codeApplicationCartographie: string;
        codeSpecifiteAppliAppelante: string;
        codeEtablissement: string;
        identifiantPersonne: number;
        version: string;
        constructor(codeEtablissement: string, identifiantPersonne?: number);
        private determinerNomComplet(prenom, nomFamille, nomMarital, civilitePersonnePhysique);
        private determinerLibelleCivilite;
        principal: boolean;
    }
    interface IInterlocuteur {
        listeLienInterlocuteur: Array<ILienInterlocuteurListe>;
    }
    class Interlocuteur implements IInterlocuteur {
        listeLienInterlocuteur: Array<ILienInterlocuteurListe>;
    }
    interface ILienInterlocuteurListe {
        numeroLienInterlocuteur: number;
        IdentifiantPersonne: number;
        typeInterlocuteur: string;
        typeRoleInterlocuteur: string;
        numeroInterlocuteur: number;
        designationCourte: string;
        libelleTypeRoleInterlocuteur: string;
        codeSpecificiteInterlocuteur: string;
        libelleSpecificiteInterlocuteur: string;
        dateDebutValiditeElement: Date;
        dateFinValiditeElement: Date;
        numeroTelephone2: string;
        numeroTelephone1: string;
        adresseEmail: string;
    }
    class LienInterlocuteurListe implements ILienInterlocuteurListe {
        numeroLienInterlocuteur: number;
        IdentifiantPersonne: number;
        typeInterlocuteur: string;
        typeRoleInterlocuteur: string;
        numeroInterlocuteur: number;
        designationCourte: string;
        libelleTypeRoleInterlocuteur: string;
        codeSpecificiteInterlocuteur: string;
        libelleSpecificiteInterlocuteur: string;
        dateDebutValiditeElement: Date;
        dateFinValiditeElement: Date;
        numeroTelephone2: string;
        numeroTelephone1: string;
        adresseEmail: string;
        constructor(IdentifiantPersonne: number, numeroInterlocuteur?: number);
        initialiserApresRecherche(personneRecherche: libc2.ResultRecherchePersonne, typeInterlocuteur: string): void;
        private determinerNomComplet(prenom, nomFamille, nomMarital, codeCivilite);
        private determinerLibelleCivilite;
        principal: boolean;
    }
    interface IMediaLienInterlocuteur {
        codeSupportMedia: string;
        numeroOrdreNatureMedia: number;
        identifiantMediaContact: string;
        codeIndicatifInternationnal: string;
        numeroTelephone: string;
        libelleComplementInterlocuteur: string;
        indicateurPreference: string;
        indicateurEnvoiMedia: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        codePaysINSEE: string;
        codeLocaliteINSEE: string;
        identifiantAdresse: number;
    }
    class MediaLienInterlocuteur implements IMediaLienInterlocuteur {
        codeSupportMedia: string;
        numeroOrdreNatureMedia: number;
        identifiantMediaContact: string;
        codeIndicatifInternationnal: string;
        numeroTelephone: string;
        libelleComplementInterlocuteur: string;
        indicateurPreference: string;
        indicateurEnvoiMedia: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        codePaysINSEE: string;
        codeLocaliteINSEE: string;
        identifiantAdresse: number;
        constructor(codeSupportMedia?: string);
        indicateurEnvoiMediaBoo: boolean;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeISOPays: string;
    }
    interface IInterlocuteurDetail {
        lienInterlocuteur: ILienInterlocuteur;
        listeMedia: Array<IMediaLienInterlocuteur>;
    }
    class InterlocuteurDetail implements IInterlocuteurDetail {
        lienInterlocuteur: ILienInterlocuteur;
        listeMedia: Array<IMediaLienInterlocuteur>;
        constructor(codeEtablissement: string);
    }
    class InterlocuteurAffichage {
        static TYPE_INTERLOCUTEUR_PHYSIQUE: string;
        static LIBELLE_TYPE_INTERLOCUTEUR_PHYSIQUE: string;
        static TYPE_INTERLOCUTEUR_AUTRE: string;
        static LIBELLE_TYPE_INTERLOCUTEUR_AUTRE: string;
        interlocuteurListe: ILienInterlocuteurListe;
        interlocuteurDetail: IInterlocuteurDetail;
        interlocuteurInitial: IInterlocuteurDetail;
        interlocuteurInitialChaine: string;
        flagDetailsOuvert: boolean;
        flagInformationChargees: boolean;
        flagModificationInterlocuteurHorsLien: boolean;
        aCreer: boolean;
        supprimee: boolean;
        private typologie;
        media: MediaInterlocuteurDetails;
        constructor(codeEtablissement: number, interlocuteurDetail?: IInterlocuteurDetail);
        propagerDesignation(): void;
        validerMedia: () => void;
        setTypologie(typologie: IElementTypoLiens): void;
        identifiant: number;
        libelleType: string;
        codeType: string;
        modifie: boolean;
        roleModifie: boolean;
        enErreur: boolean;
        testerChangementVersPrincipal(): boolean;
        principal: boolean;
        initialiserDetail: (interlocuteurDetail: IInterlocuteurDetail, codeEtablissement?: number, listeInterlocuteur?: ILienInterlocuteurListe) => void;
        private determinerLibelleCivilite;
        private determinerNomComplet(prenom, nomFamille, nomMarital, codeCivilite);
        initialiserApresRecherche: (identifiantTiers: number, codeEtablissement: string, personneRecherche: ResultRecherchePersonne, typeInterlocuteur: string) => void;
        physique: boolean;
    }
    class MediaInterlocuteurDetails {
        static CODE_SUPPORT_MEDIA_FIXE: string;
        static CODE_SUPPORT_MEDIA_EMAIL: string;
        static CODE_SUPPORT_MEDIA_FAX: string;
        static CODE_SUPPORT_MEDIA_MOBILE: string;
        static CODE_SUPPORT_MEDIA_ADRESSE: string;
        fixe: IMediaLienInterlocuteur;
        mobile: IMediaLienInterlocuteur;
        fax: IMediaLienInterlocuteur;
        email: IMediaLienInterlocuteur;
        adresse: IMediaLienInterlocuteur;
        emailInitial: string;
        adresseInitiale: string;
        private listeMedia;
        fixeSaisie: Media;
        mobileSaisie: Media;
        faxSaisie: Media;
        fixeSaisieInitial: string;
        mobileSaisieInitial: string;
        faxSaisieInitial: string;
        indicateurEnvoiMediaFixe: boolean;
        indicateurEnvoiMediaMobile: boolean;
        constructor(listeMedia?: Array<IMediaLienInterlocuteur>);
        private initialiserTelephonie(mediaInterlocuteur, libelle, codeTypeMedia);
        testerPresenceMedia(): boolean;
        auMoinsEmailOuTel: boolean;
        nombreMedia: number;
        validerMedia: () => void;
        traiterIndicateurMedia(indicateurEnvoiCourrier: string): string;
        modifie: boolean;
    }
    interface ICategorieInterlocuteurs {
        codeCategorieJuridique: string;
        liste: Array<InterlocuteurAffichage>;
    }
    class CategorieInterlocuteurs implements ICategorieInterlocuteurs {
        codeCategorieJuridique: string;
        liste: Array<InterlocuteurAffichage>;
        constructor(codeCategorieJuridique?: string);
    }
}

declare module libc2 {
    interface ILienGrappage {
        key: string;
        ordre: number;
        value: string;
    }
    class LienGrappage implements ILienGrappage {
        key: string;
        ordre: number;
        value: string;
        constructor();
    }
}

declare module libc2 {
    interface IMedia {
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: boolean;
        indicateurSecu: string;
        referenceAccesMedia: string;
        indicatifTel: string;
        indicateurOPTIN: boolean;
        indicateurProOptout: string;
        indicateurOppositionTelephone: string;
        indicateurEnvoiCourrier: string;
        typePersonne: string;
        commentaire: string;
        init: (codeEtablissement: string, codeTypeMedia: string, codeTypeUsageMedia: string, indicatifTel: string) => void;
    }
    class Media implements IMedia {
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: boolean;
        indicateurSecu: string;
        referenceAccesMedia: string;
        indicatifTel: string;
        indicateurOPTIN: boolean;
        indicateurProOptout: string;
        indicateurOppositionTelephone: string;
        indicateurEnvoiCourrier: string;
        typePersonne: string;
        commentaire: string;
        constructor();
        init(codeEtablissement: string, codeTypeMedia: string, codeTypeUsageMedia: string, indicatifTel: string): void;
    }
}

declare module libc2 {
    interface IParamPopupRelationEconomique {
        identifiantPersonne: number;
        libelleAction: string;
    }
    class ParamPopupRelationEconomique implements IParamPopupRelationEconomique {
        identifiantPersonne: number;
        libelleAction: string;
        constructor();
    }
}

declare module libc2 {
    interface IPersonneBDD {
        personnePhysique: IPersonneOrganigramme;
        activiteProfessionnelle: IPersonneOrganigramme;
    }
    class PersonneBDD implements IPersonneBDD {
        personnePhysique: IPersonneOrganigramme;
        activiteProfessionnelle: IPersonneOrganigramme;
        constructor();
    }
}

declare module libc2 {
    interface IPersonneGrappage {
        flagInRelation: boolean;
        idPersonne: number;
        designation: string;
        listeLien: Array<IPersonneGrappage>;
        listeNature: Array<ILienGrappage>;
        nature: ILienGrappage;
        lien: number;
        flagSelectGrappage: boolean;
        libelleLien: string;
        SIREN: string;
        codeLeader: string;
    }
    class PersonneGrappage implements IPersonneGrappage {
        flagInRelation: boolean;
        idPersonne: number;
        designation: string;
        listeLien: Array<IPersonneGrappage>;
        listeNature: Array<ILienGrappage>;
        nature: ILienGrappage;
        lien: number;
        flagSelectGrappage: boolean;
        libelleLien: string;
        SIREN: string;
        codeLeader: string;
        constructor();
    }
}

declare module libc2 {
    interface IPersonneOrganigramme {
        identifiantPersonne: number;
        identifiantOrganigramme: string;
        identifiantPersonneEI: number;
        codePersonnaliteJuridique: string;
        codeLeaderEspaceEntreprise: string;
        codeEspaceRelation: string;
        noteCalculee: string;
        libelleEtablissementNotation: string;
        codeCategorieJuridiqueINSEE: string;
        nombreLiensInterPersonnes: number;
        codeEtatFinReprise: string;
        listeDirigeants: Array<IDirigeant>;
        codeLeaderEspacePrive: string;
        indicateurGrappage: string;
        indicateurNPAI: string;
        indicateurProspect: string;
        codeSegmentMarche: string;
        numeroSiren: string;
        raisonSociale: string;
        codeTypeSegmentMarche: string;
        nombreJours: number;
        codeEtablissementEntitePilote: string;
        codeEntrepreneurIndividuel: boolean;
        listeAdresses: Array<any>;
        listeComptes: Array<any>;
        typeSegmentationRelPart: string;
        codeSegmentationRelPart: string;
        typeSegmentationRelProf: string;
        codeSegmentationRelProf: string;
        isFormation: () => boolean;
        codeRegroupementMarche: string;
        codeQualitePersonne: string;
        ihmCompletudeDonnees: IIhmCompletudeDonnees;
        ihmVisible: boolean;
        ihmVisiblefiltre: boolean;
        initFromSI: (data: any) => void;
        indicateurBordereauImprimer: boolean;
    }
    class PersonneOrganigramme implements IPersonneOrganigramme {
        identifiantOrganigramme: string;
        identifiantPersonne: number;
        identifiantPersonneEI: number;
        codePersonnaliteJuridique: string;
        codeLeaderEspaceEntreprise: string;
        codeEspaceRelation: string;
        noteCalculee: string;
        libelleEtablissementNotation: string;
        codeCategorieJuridiqueINSEE: string;
        nombreLiensInterPersonnes: number;
        codeEtatFinReprise: string;
        listeDirigeants: Array<IDirigeant>;
        codeLeaderEspacePrive: string;
        indicateurGrappage: string;
        indicateurNPAI: string;
        indicateurProspect: string;
        codeSegmentMarche: string;
        numeroSiren: string;
        raisonSociale: string;
        codeTypeSegmentMarche: string;
        nombreJours: number;
        codeEtablissementEntitePilote: string;
        codeEntrepreneurIndividuel: boolean;
        listeAdresses: Array<any>;
        listeComptes: Array<any>;
        typeSegmentationRelPart: string;
        codeSegmentationRelPart: string;
        typeSegmentationRelProf: string;
        codeSegmentationRelProf: string;
        codeRegroupementMarche: string;
        codeQualitePersonne: string;
        ihmCompletudeDonnees: IIhmCompletudeDonnees;
        ihmVisible: boolean;
        ihmVisiblefiltre: boolean;
        indicateurBordereauImprimer: boolean;
        constructor();
        initFromSI(data: any): void;
        isFormation(): boolean;
    }
}

declare module libc2 {
    interface IPersonneRelationEconomique {
        identifiantPersonne: number;
        libellePersonne: string;
    }
    class PersonneRelationEconomique implements IPersonneRelationEconomique {
        identifiantPersonne: number;
        libellePersonne: string;
        constructor();
    }
}

declare module libc2 {
    interface IControleCoherenceOrganigramme {
        indicateurAlerte: boolean;
        libelleAlerte: string;
    }
    class ControleCoherenceOrganigramme implements IControleCoherenceOrganigramme {
        indicateurAlerte: boolean;
        libelleAlerte: string;
        constructor();
    }
    interface IRelationCorporate {
        coherence: IControleCoherenceOrganigramme;
        libelleIntituleRelation: string;
        identiteRelationEcoMenage: number;
        nombrePersonneRelationEco: number;
        ihmCodeSecteurActivite: string;
        libelleTitreEspaceEntreprise: string;
        libelleTitreEspacePrive: string;
        listePersonne: Array<IPersonneOrganigramme>;
    }
    class RelationCorporate implements IRelationCorporate {
        coherence: IControleCoherenceOrganigramme;
        libelleIntituleRelation: string;
        identiteRelationEcoMenage: number;
        nombrePersonneRelationEco: number;
        libelleTitreEspaceEntreprise: string;
        libelleTitreEspacePrive: string;
        listePersonne: Array<IPersonneOrganigramme>;
        ihmCodeSecteurActivite: string;
        constructor();
    }
}

declare module libc2 {
    interface IDeloc {
        getListe: (typo: string, errorCallback?: (msg: string) => void) => any;
        getLibelle: (typo: string, valeur: string, errorCallback?: (msg: string) => void) => any;
    }
}

declare module libc2 {
}

declare module libc2 {
}

declare module libc2.Organisation {
    function createDocument(): Organisation;
}

declare module libc2.Organisation {
    interface IOrganisation {
        GRAPHE: libc2.Organisation.OrganisationGRAPHE;
        NOM_GROUPE: string;
        DATE_EDITION: number;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface IOrganisationGRAPHE {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    class OrganisationGRAPHE implements IOrganisationGRAPHE {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
        constructor(flux: string);
    }
    class Organisation implements IOrganisation {
        GRAPHE: libc2.Organisation.OrganisationGRAPHE;
        NOM_GROUPE: string;
        DATE_EDITION: number;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class OrganisationGenerationParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class OrganisationImpressionParams {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class OrganisationGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

declare module libc2 {
    interface IParticulierInformation {
        identifiantPersonne: number;
        codeEtablissement: string;
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libelleCapaciteJuridique: string;
        libellePaysNaissance: string;
        libelleInseePaysDoubleNationalite: string;
        libelleSituationFamiliale: string;
        libelleRegimeMatirimonial: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleTypeContratTravail: string;
        libelleNAFInsee: string;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        autresPrenom: string;
        codeSexe: string;
        dateNaissance: Date;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: string;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        codeSituationFamiliale: any;
        dateEffetSituationFamiliale: Date;
        codeRegimeMatrimonial: any;
        typeClauseMatrimoniale: any;
        indicDonationEntreEpoux: any;
        nombreEnfantACharge: number;
        categorieSocioprofessionnelle: string;
        nomEmployeur: string;
        dateEffetCSP: Date;
        dateEmbaucheEmployeurActuel: Date;
        codeTypeContratTravail: any;
        dateFinContratTravail: Date;
        libelleProfession: string;
        codeResident: string;
        codeAppartenanceReseau: string;
        edsDomiciliation: number;
        codePieceJustif: string;
        dateObtentionPieceJustificative: Date;
        refPieceJustificative: any;
        codeTypeNIF: any;
        dateNaissanceConjoint: Date;
        indicDecesPresume: any;
        dateDecesPresume: Date;
        edsInterneDomiciliation: number;
        sirenEmployeur: any;
        sirenAutoEntrepreneur: any;
        indicateurAutoEntrepreneur: any;
        indicateurSocietaire: string;
        identifiantRelationtEconomique: number;
        domiciliationRevenu: any;
        horsPresenceClient: any;
        dateNaturalisation: Date;
        codeFamilleNAFINSEE: any;
        troisDerniersCaracteresNAF: any;
        codeSecteurEmploi: string;
        indicateurActiviteProfessionnel: string;
        codeGuichetRisque: number;
        identifiantAdresse: number;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        numeroVoiePTT: number;
        codePostalPTT: any;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: any;
        numeroTelephoneCorrespondancePerso: any;
        numeroTelephoneCorrespondancePro: any;
        codeInseePays: string;
        codeTypeAdresse: string;
        codeRetourDistribution: any;
        codeExistenceListeRouge: any;
        numeroFax: any;
        codeAccesMinitel: any;
        indicateurDetentionTelephone: any;
        commentaireTelephone: any;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: any;
        libelleInseeLocalite: string;
        codeISOPays: string;
        indicateurEnvoiCourrier: string;
        indiceAmericaniteFATCA: any;
        libelleStatutFATCA: string;
        dateAttributionFATCA: Date;
        codeBlocageVAO: any;
        oppositionTelephonePerso: any;
        oppositionTelephonePro: any;
        statutPro: {
            identifiantPersonne: any;
            codeEtablissement: any;
            codeEtatStatutPro: any;
            dateModificationStatutPro: Date;
            dateFinValiditeStatutPro: Date;
            identifiantExterneAgentModification: any;
            identifiantInterneAgentModification: any;
            libelleCalculeEDS: any;
            libelleFonctionPF: string;
            libelleEDS: string;
        };
        gestionPrivee: {
            identifiantPersonne: any;
            codeEtablissement: any;
            codeActnMajSuivSpclGp: any;
            codeEtatSuiviGP: any;
            identifiantEDS: any;
            identifiantExterneEDS: any;
            libelleCalculeEDS: string;
            typeEDS: any;
            libelleFonctionPF: any;
            libelleEDS: any;
            dateDebutValiditeGP: Date;
            dateFinValiditeGP: Date;
            identifiantEDS2: any;
            identifiantExterneEDS2: any;
            libelleCalculeEDS2: string;
            codeMotivationMarquageGP: any;
            commentaireMarquageProspect: any;
        };
        eligibiliteFGDR: any;
        droitAuCompte: any;
        dateEffetOptionResidence: Date;
        codeFamilleCategorieJuridique: any;
        codeCategorieJuridiqueDeuxDern: any;
        indicateurPPE: any;
        nif: any;
    }
}

declare module libc2 {
    interface IGestionInterlocuteursService {
        getSecteurActivite: (identifiantTiers: string) => ng.IPromise<string>;
        obtenirTypologieInterlocuteurs: (identifiantTiers: string) => ng.IPromise<Array<IElementTypoLiens>>;
        obtenirListeInterlocuteursPhysique: (identifiantPersonne: number, codeEtablissement: number) => ng.IPromise<Array<InterlocuteurAffichage>>;
        obtenirListeInterlocuteursAutre: (identifiantPersonne: number, codeEtablissement: number) => ng.IPromise<Array<InterlocuteurAffichage>>;
        obtenirDetailsInterlocuteur: (identifiantTiers: number, numeroLienInterlocuteur: number) => ng.IPromise<IInterlocuteurDetail>;
        enregistrer: (interlocuteur: InterlocuteurAffichage, flagTransformationLien: boolean) => ng.IPromise<IInterlocuteurDetail>;
        supprimerDetailsInterlocuteur: (interlocuteur: InterlocuteurAffichage, confirmation: boolean) => ng.IPromise<IInterlocuteurDetail>;
        declencherSauvegarde: () => void;
        obtenirAdressePersonneActive: (identifiantPersonne: number) => ng.IPromise<MediaLienInterlocuteur>;
    }
    class GestionInterlocuteursService implements IGestionInterlocuteursService {
        private $q;
        private $rootScope;
        private tools;
        private interlocuteurListeService;
        private interlocuteurDetailService;
        private personneMoraleService;
        private referentielCorporateService;
        private modalService;
        static PHYSIQUE: string;
        static ERREUR_MODIFICATION_PRINCIPAL: string;
        static ERREUR_PAS_DE_PRINCIPAL: string;
        static ERREUR_SUPPRESSION_UTILISATEUR_ESPACE_UNIQUE: string;
        private adressePersonneActive;
        confirmOptions: {
            actionButtonText: string;
            closeButtonText: string;
            headerText: string;
            bodyText: string;
            iconName: string;
            size: string;
        };
        static $inject: string[];
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, tools: libc2.ITools, interlocuteurListeService: IInterlocuteurListeService, interlocuteurDetailService: IInterlocuteurDetailService, personneMoraleService: IPersonneMoraleService, referentielCorporateService: IReferentielCorporateService, modalService: any);
        getSecteurActivite(identifiantTiers: string): ng.IPromise<string>;
        obtenirTypologieInterlocuteurs(identifiantTiers: string): ng.IPromise<Array<IElementTypoLiens>>;
        obtenirListeInterlocuteursPhysique(identifiantTiers: number, codeEtablissement: number): ng.IPromise<Array<InterlocuteurAffichage>>;
        obtenirListeInterlocuteursAutre(identifiantTiers: number, codeEtablissement: number): ng.IPromise<Array<InterlocuteurAffichage>>;
        private obtenirListeInterlocuteurs(identifiantTiers, codeEtablissement, physique);
        private convertir(liste, codeEtablissement);
        comparerLigne(a: InterlocuteurAffichage, b: InterlocuteurAffichage): number;
        obtenirDetailsInterlocuteur(identifiantTiers: number, numeroLienInterlocuteur: number): ng.IPromise<IInterlocuteurDetail>;
        enregistrer(interlocuteur: InterlocuteurAffichage, flagTransformationLien: boolean): ng.IPromise<any>;
        private creerDetailsInterlocuteur;
        private modifierInterlocuteur;
        supprimerDetailsInterlocuteur: (interlocuteur: InterlocuteurAffichage, pourModification: boolean) => ng.IPromise<any>;
        declencherSauvegarde(): void;
        init(identifiantPersonne: number): ng.IPromise<MediaLienInterlocuteur>;
        obtenirAdressePersonneActive(identifiantPersonne: number): ng.IPromise<MediaLienInterlocuteur>;
    }
}

declare module libc2 {
    interface IGraphiqueBase {
        personnePhysiqueService: IPersonnePhysiqueService;
        personneMoraleService: IPersonneMoraleService;
        $q: ng.IQService;
        getLibelleQualite: (code: string, categorieJuridique: string) => string;
        prepareLoadingPanel: (flagVisible: boolean) => void;
        beginWait: () => void;
        endWait: () => void;
    }
    class GraphiqueBase implements IGraphiqueBase {
        static TYPE_LIEN_INCONNU: string;
        listeQualite: Array<any>;
        listeQualitePrive: Array<any>;
        listeQualiteEI: Array<any>;
        refLien: Array<any>;
        interlocuteurListeService: IInterlocuteurListeService;
        referentielCorporateService: IReferentielCorporateService;
        personnePhysiqueService: IPersonnePhysiqueService;
        personneMoraleService: IPersonneMoraleService;
        deloc: IDeloc;
        contexte: IContexte;
        onSelectNode: (data: any) => void;
        onDone: (data: any) => void;
        idBalise: string;
        flagDetail: boolean;
        callbackSelect: (data: any) => void;
        callbackDone: (data: any) => void;
        global: IGlobal;
        $timeout: ng.ITimeoutService;
        defInitGlobal: ng.IDeferred<string>;
        $q: ng.IQService;
        tools: ITools;
        loadingPanel: any;
        impressionService: IImpressionService;
        static $inject: string[];
        constructor(PersonnePhysiqueService: IPersonnePhysiqueService, PersonneMoraleService: IPersonneMoraleService, $q: ng.IQService, Tools: ITools, Deloc: IDeloc, Contexte: IContexte, Global: IGlobal, ReferentielCorporateService: IReferentielCorporateService, $timeout: ng.ITimeoutService, InterlocuteurListeService: IInterlocuteurListeService, ImpressionService: IImpressionService);
        prepareLoadingPanel(flagVisible: boolean): void;
        beginWait(): void;
        endWait(): void;
        private initGlobal();
        getLibelleQualite(code: string, categorieJuridique: string): string;
        getLibelleSegementationRealtionnelle(personne: libc2.IPersonneOrganigramme): string;
        getLibelleLien(key: string): string;
    }
}

declare module libc2 {
    interface IGraphiqueAdherentService extends IGraphiqueBase {
        drawFiliereAdherent: (flagDetail: boolean, identifiantPersonneCourante: number, tabFiliereGraphique: Array<any>, idBalise: string, callBackSelect: (data: any) => void, callbackDone: (data: any) => void) => ng.IPromise<string>;
        printCurrent: (param: IPrintParam) => string;
        toggleView: (flagDetail: boolean) => void;
        clearDiagram: () => void;
    }
    class GraphiqueAdherentService extends GraphiqueBase implements IGraphiqueAdherentService {
        diagramFiliere: IGraphiqueBoardFiliere;
        private DEMANDE_AFFICHAGE_ADHERENTS_TETE;
        private DEMANDE_AFFICHAGE_ADHERENTS_RAMIFICATION;
        private DEMANDE_SUPPRESSION_RAMIFICATION;
        private DEMANDE_SUPPRESSION_ADHERENT;
        private DEMANDE_SELECTION_TETE;
        static NOM_DOCUMENT_PDF: string;
        constructor(PersonnePhysiqueService: IPersonnePhysiqueService, PersonneMoraleService: IPersonneMoraleService, $q: ng.IQService, Tools: ITools, Deloc: IDeloc, Contexte: IContexte, Global: IGlobal, ReferentielCorporateService: IReferentielCorporateService, $timeout: ng.ITimeoutService, InterlocuteurListeService: IInterlocuteurListeService, ImpressionService: IImpressionService);
        toggleView(flagDetail: boolean): void;
        printCurrent(param: IPrintParam): string;
        clearDiagram(): void;
        drawFiliereAdherent(flagDetail: boolean, identifiantPersonneCourante: number, tabFiliereGraphique: Array<any>, idBalise: string, callbackSelectTete: (data: any) => void, callbackSelectRamification: (data: any) => void): ng.IPromise<string>;
        FormatDataFiliereAdherent(identifiantPersonneCourante: number, tabFiliereGraphique: Array<any>): ng.IPromise<IDataGraphiqueFiliere>;
        startDrawFiliereAdherent(data: IDataGraphiqueFiliere, defDraw: ng.IDeferred<string>): void;
    }
}

declare module libc2 {
    interface IDataGraphiqueFiliere {
        tabNode: Array<any>;
        tabLink: Array<any>;
    }
    class DataGraphiqueFiliere implements IDataGraphiqueFiliere {
        tabNode: Array<any>;
        tabLink: Array<any>;
        constructor();
    }
    interface IGraphiqueFiliereService extends IGraphiqueBase {
        drawFiliere: (flagDetail: boolean, currentPersonne: IPersonneOrganigramme, tabFiliere: Array<any>, idBalise: string, SelectTete: (data: any) => void, callbackSelectRamification: (data: any) => void, param?: any) => ng.IPromise<string>;
        printCurrent: (param: IPrintParam) => string;
        toggleView: (flagDetail: boolean) => void;
        clearDiagram: () => void;
    }
    class GraphiqueFiliereService extends GraphiqueBase implements IGraphiqueFiliereService {
        diagramFiliere: IGraphiqueBoardFiliere;
        private DEMANDE_AFFICHAGE_ADHERENTS_TETE;
        private DEMANDE_AFFICHAGE_ADHERENTS_RAMIFICATION;
        private DEMANDE_SUPPRESSION_RAMIFICATION;
        private DEMANDE_SUPPRESSION_ADHERENT;
        private DEMANDE_SELECTION_TETE;
        private DEMANDE_REPLI_ADHERENTS;
        private NOMBRE_MAX_ADHERENTS_AFFICHES;
        static NOM_DOCUMENT_PDF: string;
        constructor(PersonnePhysiqueService: IPersonnePhysiqueService, PersonneMoraleService: IPersonneMoraleService, $q: ng.IQService, Tools: ITools, Deloc: IDeloc, Contexte: IContexte, Global: IGlobal, ReferentielCorporateService: IReferentielCorporateService, $timeout: ng.ITimeoutService, InterlocuteurListeService: IInterlocuteurListeService, ImpressionService: IImpressionService);
        toggleView(flagDetail: boolean): void;
        printCurrent(param: IPrintParam): string;
        clearDiagram(): void;
        drawFiliere(flagDetail: boolean, currentPersonne: IPersonneOrganigramme, tabFiliere: Array<any>, idBalise: string, callbackSelectTete: (data: any) => void, callbackSelectRamification: (data: any) => void, param?: any): ng.IPromise<string>;
        replierListeAdherents(obj: any): void;
        deplierListeAdherents(obj: any): void;
        FormatDataFiliere(currentPersonne: IPersonneOrganigramme, tabFiliere: Array<any>, param?: any): ng.IPromise<IDataGraphiqueFiliere>;
        startDrawFiliere(data: IDataGraphiqueFiliere, defDraw: ng.IDeferred<string>): void;
    }
}

declare module libc2 {
    interface IDataGraphiqueGrappage {
        tabNode: Array<any>;
        tabLink: Array<any>;
    }
    class DataGraphiqueGrappage implements IDataGraphiqueGrappage {
        tabNode: Array<any>;
        tabLink: Array<any>;
        constructor();
    }
    interface IGraphiqueGrappageService extends IGraphiqueBase {
        drawGrappage: (flagDetail: boolean, currentPersonne: IPersonneOrganigramme, tabGrappage: Array<IPersonneGrappage>, idBalise: string, callBackSelect: (data: any) => void) => ng.IPromise<string>;
        printCurrent: (param: IPrintParam) => string;
        toggleView: (flagDetail: boolean) => void;
    }
    class GraphiqueGrappageService extends GraphiqueBase implements IGraphiqueGrappageService {
        diagramGrappage: IGraphiqueBoardGrappage;
        static NOM_DOCUMENT_PDF: string;
        constructor(PersonnePhysiqueService: IPersonnePhysiqueService, PersonneMoraleService: IPersonneMoraleService, $q: ng.IQService, Tools: ITools, Deloc: IDeloc, Contexte: IContexte, Global: IGlobal, ReferentielCorporateService: IReferentielCorporateService, $timeout: ng.ITimeoutService, InterlocuteurListeService: IInterlocuteurListeService, ImpressionService: IImpressionService);
        toggleView(flagDetail: boolean): void;
        printCurrent(param: IPrintParam): string;
        drawGrappage(flagDetail: boolean, currentPersonne: IPersonneOrganigramme, tabGrappage: Array<IPersonneGrappage>, idBalise: string, callBackSelect: (data: any) => void): ng.IPromise<string>;
        startDrawGrappage(data: IDataGraphiqueGrappage, defDraw: ng.IDeferred<string>): void;
        FormatDataGrappage(currentPersonne: IPersonneOrganigramme, tabGrappage: Array<IPersonneGrappage>): ng.IPromise<IDataGraphiqueGrappage>;
    }
}

declare module libc2 {
    interface IParamDrawOrganisation {
        codeCategorieLien: string;
        flagDetail: boolean;
        currentPersonne: IPersonneOrganigramme;
        relation: any;
        idBalise: string;
        flagCellActive: boolean;
        callBackSelect: (data: any) => void;
        nomRelation1: string;
        nomRelation2: string;
        nomHorsRelation1: string;
        nomHorsRelation2: string;
    }
    class ParamDrawOrganisation implements IParamDrawOrganisation {
        codeCategorieLien: string;
        flagDetail: boolean;
        currentPersonne: IPersonneOrganigramme;
        relation: any;
        idBalise: string;
        flagCellActive: boolean;
        callBackSelect: (data: any) => void;
        nomRelation1: string;
        nomRelation2: string;
        nomHorsRelation1: string;
        nomHorsRelation2: string;
        constructor();
    }
    interface IReferentielLien {
        listeTypoLien: Array<IElementTypoLiens>;
        codeCategorieLien: string;
        codeCategorieJuridique: number;
    }
    class ReferentielLien implements IReferentielLien {
        listeTypoLien: Array<IElementTypoLiens>;
        codeCategorieLien: string;
        codeCategorieJuridique: number;
        constructor(codeCategorieLien: string, codeCategorieJuridique: number);
    }
    interface IDataGraphiqueOrganisation {
        selectedNode: IElementNodePersonne;
        tabNodeEspaceEntreprise: Array<IElementNodePersonneOrganisation>;
        tabNodeEspacePrive: Array<IElementNodePersonnePhysique>;
        tabNodeHorsRelation: Array<IElementNodePersonneHorsRelation>;
        tabGroupe: Array<IElementGroup>;
        tabLink: Array<IElementLink>;
        consolideNode: (NodeMetric: INodeMetric) => Array<any>;
    }
    class DataGraphiqueOrganisation implements IDataGraphiqueOrganisation {
        selectedNode: IElementNodePersonne;
        tabNodeEspaceEntreprise: Array<IElementNodePersonneOrganisation>;
        tabNodeEspacePrive: Array<IElementNodePersonnePhysique>;
        tabNodeHorsRelation: Array<IElementNodePersonneHorsRelation>;
        tabLink: Array<IElementLink>;
        tabGroupe: Array<IElementGroup>;
        constructor();
        consolideNode(NodeMetric: INodeMetric): Array<any>;
    }
    interface IGraphiqueOrganisationService extends IGraphiqueBase {
        printCurrent: (param: IPrintParam) => string;
        drawOrganisation: (param: IParamDrawOrganisation) => ng.IPromise<string>;
        toggleView: (flagDetail: boolean) => void;
    }
    class GraphiqueOrganisationService extends GraphiqueBase implements IGraphiqueOrganisationService {
        static NOM_DOCUMENT_PDF: string;
        diagramOrganisation: IGraphiqueBoardOrganisation;
        relation: IRelationCorporate;
        currentSecteurActivite: string;
        codeCategorieLien: string;
        tabPromiseConsolidation: Array<any>;
        listeReferentielLien: Array<IReferentielLien>;
        flagCellActive: boolean;
        nomRelation1: string;
        nomRelation2: string;
        nomHorsRelation1: string;
        nomHorsRelation2: string;
        constructor(PersonnePhysiqueService: IPersonnePhysiqueService, PersonneMoraleService: IPersonneMoraleService, $q: ng.IQService, Tools: ITools, Deloc: IDeloc, Contexte: IContexte, Global: IGlobal, ReferentielCorporateService: IReferentielCorporateService, $timeout: ng.ITimeoutService, InterlocuteurListeService: IInterlocuteurListeService, ImpressionService: IImpressionService);
        printCurrent(param: IPrintParam): string;
        private initSecteurActivite(codeSecteurActivite);
        private getListeLien(codeCategorieLien, codeCategorieJuridique);
        toggleView(flagDetail: boolean): void;
        drawOrganisation(param: IParamDrawOrganisation): ng.IPromise<string>;
        private refreshOrganisation(currentIdOrganigramme, flagForceReloadAll?);
        FormatDataOrganisation(currentIdOrganigramme: string): ng.IPromise<IDataGraphiqueOrganisation>;
        private majLink(data);
        private majGroupe(data);
        private consolideLienEI(data);
        private consolideLienFromSelectNode(data);
        private isLienRetenu(lien, codePersonnaliteJuridique);
        private isInLien(liste, lien);
        private verifPersonneFiltre(idPersonne);
        private consolideLienBDR(data, def);
        private consolideLienInterlocuteur(data, def);
        private consolideLienBDD(data, def);
        private getLibelleLienCorporate(key);
        private getLibelleLienFromCategorieJuridique(cat, key);
    }
}

declare module libc2 {
    interface IDataGraphiqueRelation {
        selectedNode: IElementNodePersonne;
        tabNodeEspaceEntreprise: Array<IElementNodePersonneOrganisation>;
        tabNodeActivitePro: Array<IElementNodePersonneOrganisation>;
        tabNodeEspacePrive: Array<IElementNodePersonnePhysique>;
        tabNodeHorsRelation: Array<IElementNodePersonneHorsRelation>;
        tabGroupe: Array<IElementGroup>;
        tabLink: Array<IElementLink>;
        consolideNode: (NodeMetric: INodeMetric) => Array<any>;
    }
    class DataGraphiqueRelation implements IDataGraphiqueRelation {
        selectedNode: IElementNodePersonne;
        tabNodeEspaceEntreprise: Array<IElementNodePersonneOrganisation>;
        tabNodeActivitePro: Array<IElementNodePersonneOrganisation>;
        tabNodeEspacePrive: Array<IElementNodePersonnePhysique>;
        tabNodeHorsRelation: Array<IElementNodePersonneHorsRelation>;
        tabGroupe: Array<IElementGroup>;
        tabLink: Array<IElementLink>;
        constructor();
        consolideNode(NodeMetric: INodeMetric): Array<any>;
    }
    interface IGraphiqueRelationService extends IGraphiqueBase {
        drawRelation: (idPersonne: number, flagDetail: boolean, idBalise?: string, callBackSelect?: (data: any) => void) => ng.IPromise<string>;
        printCurrent: (param: IPrintParam) => string;
        toggleView: (flagDetail: boolean) => void;
    }
    class GraphiqueRelationService extends GraphiqueBase implements IGraphiqueRelationService {
        static NOM_DOCUMENT_PDF: string;
        diagramRelation: IGraphiqueBoardRelation;
        idPersonne: number;
        tabPromiseConsolidation: Array<any>;
        constructor(PersonnePhysiqueService: IPersonnePhysiqueService, PersonneMoraleService: IPersonneMoraleService, $q: ng.IQService, Tools: ITools, Deloc: IDeloc, Contexte: IContexte, Global: IGlobal, ReferentielCorporateService: IReferentielCorporateService, $timeout: ng.ITimeoutService, InterlocuteurListeService: IInterlocuteurListeService, ImpressionService: IImpressionService);
        toggleView(flagDetail: boolean): void;
        printCurrent(param: IPrintParam): string;
        drawRelation(idPersonne: number, flagDetail: boolean, idBalise?: string, callBackSelect?: (data: any) => void): ng.IPromise<string>;
        private refreshRelation();
        FormatDataRelation(): ng.IPromise<IDataGraphiqueRelation>;
        private addSort(tab, n);
        private majLink(data);
        private majGroupe(data);
        private consolideLienEI(data);
        private consolideLienFromSelectNode(data);
        private consolideLienBDD(data, def);
        private LinkNode(tabNode, current, tabLien, tabLink, typeLink);
    }
}

declare module libc2 {
    interface IDataImpressionGraphe {
        titre: string;
        flux: string;
        dateEdition: string;
    }
    class DataImpressionGraphe implements IDataImpressionGraphe {
        titre: string;
        flux: string;
        dateEdition: string;
        constructor(titre?: string, flux?: string, dateEdition?: string);
    }
    interface IImpressionService {
        impressionGraphe: (data: DataImpressionGraphe) => ng.IPromise<any>;
    }
    class ImpressionService implements IImpressionService {
        constructor();
        impressionGraphe(data: DataImpressionGraphe): ng.IPromise<any>;
        private createDocument(data);
    }
}

declare module libc2 {
    interface IInterlocuteurDetailService {
        obtenirDetailsInterlocuteur: (identifiantTiers: number, numeroLienInterlocuteur: number) => ng.IPromise<IInterlocuteurDetail>;
        creerDetailsInterlocuteur: (details: IInterlocuteurDetail) => ng.IPromise<IInterlocuteurDetail>;
        modifierDetailsInterlocuteur: (details: IInterlocuteurDetail) => ng.IPromise<IInterlocuteurDetail>;
        supprimerDetailsInterlocuteur: (details: IInterlocuteurDetail) => ng.IPromise<IInterlocuteurDetail>;
        modificationAvancee(interlocuteurDetail: IInterlocuteurDetail, interlocuteurInitial: IInterlocuteurDetail): ng.IPromise<any>;
    }
    class InterlocuteurDetailService implements IInterlocuteurDetailService {
        private urlInterlocuteurDetail;
        private tools;
        static $inject: string[];
        constructor(urlInterlocuteurDetail: string, tools: ITools);
        obtenirDetailsInterlocuteur(identifiantTiers: number, numeroLienInterlocuteur: number): ng.IPromise<IInterlocuteurDetail>;
        creerDetailsInterlocuteur: (details: IInterlocuteurDetail) => ng.IPromise<IInterlocuteurDetail>;
        modifierDetailsInterlocuteur(details: IInterlocuteurDetail): ng.IPromise<IInterlocuteurDetail>;
        supprimerDetailsInterlocuteur(details: IInterlocuteurDetail): ng.IPromise<IInterlocuteurDetail>;
        modificationAvancee(interlocuteurDetail: IInterlocuteurDetail, interlocuteurInitial: IInterlocuteurDetail): ng.IPromise<IInterlocuteurDetail>;
        private majDesignation(details);
    }
}

declare module libc2 {
    interface IInterlocuteurListeService {
        getListeInterlocuteurs: (identifiantPersonne: number, typeInterlocuteur?: string) => ng.IPromise<IInterlocuteur>;
    }
    class InterlocuteurListeService implements IInterlocuteurListeService {
        private urlInterlocuteurListe;
        private $q;
        private tools;
        private contexte;
        static $inject: string[];
        constructor(urlInterlocuteurListe: string, $q: ng.IQService, tools: ITools, contexte: IContexte);
        getListeInterlocuteurs(identifiantPersonne: number, typeInterlocuteur?: string): ng.IPromise<IInterlocuteur>;
        static TYPE_INTERLOCUTEUR_PHYSIQUE: string;
        static TYPE_INTERLOCUTEUR_AUTRE: string;
    }
}

declare module libc2 {
    interface IPersistService {
        getPersistData: (key: string) => any;
        setPersistData: (key: string, val: any) => void;
        removePersistData: (key: string) => void;
    }
    class PersistService implements IPersistService {
        static $inject: string[];
        constructor();
        private isLS();
        getPersistData(key: string): any;
        setPersistData: (key: string, val: any) => void;
        removePersistData(key: string): void;
        private addToCookies(key, value);
        private getFromCookies(key);
        private removeFromCookies(key);
    }
}

declare module libc2 {
    interface IPersonneMoraleService {
        getTiersLies: (idPersonne: number) => any;
        getTiers: (idPersonne: number) => any;
        getLeader: (idPersonne: number) => ng.IPromise<any>;
        getAdresseCorporate(idPersonne: number): any;
    }
    class PersonneMoraleService implements IPersonneMoraleService {
        private $q;
        private tools;
        private urlTiersLiesCorporate;
        private urlOrganigramme;
        private urlAdresseCorporate;
        private contexte;
        static $inject: string[];
        constructor($q: ng.IQService, tools: any, urlTiersLiesCorporate: any, urlOrganigramme: any, urlAdresseCorporate: any, contexte: IContexte);
        getTiersLies(idPersonne: number): any;
        getTiers(idPersonne: number): any;
        private requeteOrganigramme(critere, d);
        getLeader(idPersonne: number): any;
        private obtenirLeaderOrganigramme(critere, d);
        getAdresseCorporate(idPersonne: number): any;
    }
}

declare module libc2 {
    interface IPersonnePhysiqueService {
        getTiersLies: (idPersonne: number) => any;
        getTiersLiesAdministratifs: (idPersonne: number) => any;
        getparticulierInformation: (idPersonne) => ng.IPromise<any>;
        getRelationEco: (idPersonne: number) => any;
    }
    class PersonnePhysiqueService implements IPersonnePhysiqueService {
        private $q;
        private tools;
        private urlTierLiesPhysique;
        private urlParticulierInformation;
        private urlRelationPrive;
        private contexte;
        private urlTiersLiesAdministratif;
        static $inject: string[];
        constructor($q: ng.IQService, tools: any, urlTierLiesPhysique: any, urlParticulierInformation: any, urlRelationPrive: any, contexte: IContexte, urlTiersLiesAdministratif: any);
        getparticulierInformation(idPersonne: any): ng.IPromise<any>;
        getTiersLies(idPersonne: number): any;
        getTiersLiesAdministratifs(idPersonne: number): any;
        getRelationEco(idPersonne: number): any;
    }
}

declare module libc2 {
    interface IReferentielCorporateService {
        getLien: (codeCategorieJuridique: string, codeCategorieLien: string, codeSecteuractivite: string) => ng.IPromise<Array<IElementTypoLiens>>;
        getListeQualite: (key?: string) => ng.IPromise<Array<IQualite>>;
        getListeCategorieLien: () => ng.IPromise<Array<ICategorieLien>>;
        getTypologieInterlocuteur: (secteur: string, sousMarche: string) => ng.IPromise<Array<IElementTypoLiens>>;
        getTypologieInterlocuteurAutre: () => ng.IPromise<Array<IElementTypoLiens>>;
        getSecteurActiviteFromCodeMarche: (codeMarche: string) => ng.IPromise<string>;
        getSousRegroupementMarche: (codeMarche: string) => ng.IPromise<any>;
    }
    interface IElementTypoLiens {
        codeSecteurActivite: string;
        codeCategorieLien: string;
        idLien: string;
        libelle: string;
        codeCategorieJuridique: string;
        flagPercent: boolean;
        libelle2: string;
    }
    class ElementTypoLiens implements IElementTypoLiens {
        codeSecteurActivite: string;
        codeCategorieLien: string;
        idLien: string;
        libelle: string;
        codeCategorieJuridique: string;
        flagPercent: boolean;
        libelle2: string;
        constructor();
    }
    interface IQualite {
        codeQualite: string;
        libelle: string;
        paramCustom: string;
    }
    interface IReferentielCorporateLien {
        codeCategorieJuridique: string;
        codeCategorieLien: string;
        codeSecteuractivite: string;
        data: Array<IElementTypoLiens>;
    }
    class ReferentielCorporateLien implements IReferentielCorporateLien {
        codeCategorieJuridique: string;
        codeCategorieLien: string;
        codeSecteuractivite: string;
        data: Array<IElementTypoLiens>;
        constructor();
    }
    class ReferentielCorporateService implements IReferentielCorporateService {
        private urlRegroupementMarche;
        private urlSousRegroupementMarche;
        $http: ng.IHttpService;
        $q: ng.IQService;
        tools: ITools;
        urlQualite: string;
        urlLien: string;
        urlListeCategorieLien: string;
        contexte: IContexte;
        constantes: Constantes;
        private tabLien;
        static $inject: string[];
        constructor($http: any, $q: ng.IQService, Tools: ITools, urlQualite: string, urlLien: string, urlListeCategorieLien: string, urlRegroupementMarche: string, urlSousRegroupementMarche: string, Contexte: IContexte);
        getLien(codeCategorieJuridique: string, codeCategorieLien: string, codeSecteuractivite: string): ng.IPromise<Array<IElementTypoLiens>>;
        getListeCategorieLien(): ng.IPromise<Array<ICategorieLien>>;
        getListeQualite(key?: string): ng.IPromise<Array<IQualite>>;
        getTypologieInterlocuteur(secteurActivite: string, sousMarche: string): ng.IPromise<Array<IElementTypoLiens>>;
        getTypologieInterlocuteurAutre(): ng.IPromise<Array<IElementTypoLiens>>;
        getSecteurActiviteFromCodeMarche(codeMarche: string): ng.IPromise<string>;
        getSousRegroupementMarche(codeMarche: string): ng.IPromise<any>;
    }
}

declare module libc2 {
    interface IRelationEconomiqueService {
        selectPersonneRelation: (param: IParamPopupRelationEconomique) => ng.IPromise<IPersonneRelationEconomique>;
    }
    class RelationEconomiqueService implements IRelationEconomiqueService {
        $http: ng.IHttpService;
        $q: ng.IQService;
        tools: ITools;
        static $inject: string[];
        constructor($q: ng.IQService, Tools: ITools);
        selectPersonneRelation(param: IParamPopupRelationEconomique): ng.IPromise<IPersonneRelationEconomique>;
    }
}

declare module libc2 {
}

declare module libc2 {
    interface IDocumentPdf {
        doc: any;
        name: string;
        currentPage: IPagePdf;
        addPage: () => void;
        build: () => void;
        print: () => void;
    }
    class DocumentPdf implements IDocumentPdf {
        doc: any;
        name: string;
        currentPage: IPagePdf;
        constructor(name: string);
        build(): void;
        print(): void;
        addPage(): void;
    }
}

declare module libc2 {
    interface IPagePdf {
        addImage: (strImage: string, widthImage: number, heightImage: number) => void;
        addTitrePrincipal: (t: string) => void;
        addTitreSecondaire: (t: string) => void;
        addPied: (p: string) => void;
    }
    class PagePdf implements IPagePdf {
        static PAGE_HEIGHT: number;
        static PAGE_WIDTH: number;
        static MARGE: number;
        hFontTitrePrincipal: number;
        hFontTitreSecondaire: number;
        hFontPied: number;
        posY: number;
        doc: any;
        constructor(doc: any);
        addImage(strImage: string, widthImage: number, heightImage: number): void;
        addTitrePrincipal(t: string): void;
        addTitreSecondaire(t: string): void;
        addPied(p: string): void;
    }
}

declare module libc2 {
    interface IActiviteProfessionnelle {
        numeroSiren: string;
        codeEtablissement: string;
        identifiantTiers: number;
        numeroChrono: number;
        situationFinanciere: ISituationFinancierePro;
        secteurActivite: ISecteurActivite;
        donneAdministrative: IDonneeAdministrative;
        informationJuridique: IInformationJuridique;
        cotation: ICotation;
        immatriculation: IImmatriculation;
        listeAdresse: Array<IAdressePro>;
        listeEtablissement: Array<IEtablissement>;
        numeroComplementaireSIRET: string;
        initFromSI: (data: any) => void;
        consolideAdresse: () => void;
    }
    class ActiviteProfessionnelle implements IActiviteProfessionnelle {
        numeroSiren: string;
        codeEtablissement: string;
        identifiantTiers: number;
        numeroChrono: number;
        situationFinanciere: ISituationFinancierePro;
        secteurActivite: ISecteurActivite;
        donneAdministrative: IDonneeAdministrative;
        numeroComplementaireSIRET: string;
        informationJuridique: IInformationJuridique;
        cotation: ICotation;
        immatriculation: IImmatriculation;
        listeAdresse: Array<IAdressePro>;
        listeEtablissement: Array<IEtablissement>;
        constructor();
        consolideAdresse(): void;
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface IAdressePro {
        identifiantAdresse: number;
        numeroDeLaVoiePTT: number;
        numeroDuCodePostalPTT: string;
        codeDuQuartier: string;
        numeroDeLaTourneeDuFacteur: number;
        numeroDeTelephoneAdresse: string;
        codeDuPaysINSEE: string;
        codeDeLaLocaliteINSEE: string;
        indicateurDePossessionAdresse: string;
        numeroChronoDuLieuActivite: number;
        codeDuTypeAdresse: string;
        codeDeValiditeAdresse: string;
        indicateurDeTelephoneSurListeRouge: string;
        numeroFax: string;
        indicateurDeDetentionDeTelephone: string;
        commentaireTelephone: string;
        numeroDeVoieHEXAVIA: number;
        codePostalPourFranceEtEtranger: string;
        libelleCommune: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeISOPays: string;
        libelleISOPays: string;
        initFromSI: (data: any) => void;
    }
    class AdressePro implements IAdressePro {
        identifiantAdresse: number;
        numeroDeLaVoiePTT: number;
        numeroDuCodePostalPTT: string;
        codeDuQuartier: string;
        numeroDeLaTourneeDuFacteur: number;
        numeroDeTelephoneAdresse: string;
        codeDuPaysINSEE: string;
        codeDeLaLocaliteINSEE: string;
        indicateurDePossessionAdresse: string;
        numeroChronoDuLieuActivite: number;
        codeDuTypeAdresse: string;
        codeDeValiditeAdresse: string;
        indicateurDeTelephoneSurListeRouge: string;
        numeroFax: string;
        indicateurDeDetentionDeTelephone: string;
        commentaireTelephone: string;
        numeroDeVoieHEXAVIA: number;
        codePostalPourFranceEtEtranger: string;
        libelleCommune: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeISOPays: string;
        libelleISOPays: string;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface ICorporateActiviteProfessionnelle {
        activitesProfessionnelles: Array<IActiviteProfessionnelle>;
        parametre: IParametreCorporate;
        initFromSI: (data: any) => void;
    }
    class CorporateActiviteProfessionnelle implements ICorporateActiviteProfessionnelle {
        activitesProfessionnelles: Array<IActiviteProfessionnelle>;
        parametre: IParametreCorporate;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface ICotation {
        cotation: string;
        dateDeLaCotation: Date;
        cotationPrecedente: string;
        dateDeLaCotationPrecedente: Date;
        cotationDuDirigeant: string;
        dateDeLaCotationDuDirigeant: Date;
        cotationSimplifieDuDirigeant: string;
        dateDeDerniereMiseAJourDeLaCotation: Date;
        dateDeDerniereRevisionDeLaCotation: Date;
        codeCotation: string;
        initFromSI: (data: any) => void;
    }
    class Cotation implements ICotation {
        cotation: string;
        dateDeLaCotation: Date;
        cotationPrecedente: string;
        dateDeLaCotationPrecedente: Date;
        cotationDuDirigeant: string;
        dateDeLaCotationDuDirigeant: Date;
        cotationSimplifieDuDirigeant: string;
        dateDeDerniereMiseAJourDeLaCotation: Date;
        dateDeDerniereRevisionDeLaCotation: Date;
        codeCotation: string;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface IDonneeAdministrative {
        codeDeRafraichissement: string;
        dateDeDerniereVerification: Date;
        referenceDeLaPieceJustificative: string;
        codeIndicateurEntrepriseEtrangere: string;
        codeDevise: string;
        codeDeviseBis: string;
        indicateurClientOuTier: string;
        identifiantDuTiersGCE: string;
        codeEtablissementDeLEntitePilote: string;
        codeRegimeFiscal: string;
        moisDArreteDesRisquesBDF: string;
        nomCommercial: string;
        nombreDeSalaries: number;
        dateArreteComptable: number;
        dateDeMiseAJour: Date;
        dateEnregistrement: Date;
        experienceDuDirigeantEnImmobilier: string;
        anneeDeSaisieDeExperienceDuDirigeant: string;
        natureDeLOrganisationCommerciale: string;
        codeDuProfilClient: string;
        codeResident: string;
        codePiloteDuTiers: string;
        codeDeLaPieceJustificativeProfessionnelle: string;
        indicateurDePresenceDuNombreDeSalarie: string;
        designationLongueDuLieuActivite: string;
        enseigneCommercialeDuLieuActivite: string;
        numeroDeTelexDuLieuActivite: string;
        numeroTelecopieurDuLieuActivite: string;
        initFromSI: (data: any) => void;
    }
    class DonneeAdministrative implements DonneeAdministrative {
        codeDeRafraichissement: string;
        dateDeDerniereVerification: Date;
        referenceDeLaPieceJustificative: string;
        codeIndicateurEntrepriseEtrangere: string;
        codeDevise: string;
        codeDeviseBis: string;
        indicateurClientOuTier: string;
        identifiantDuTiersGCE: string;
        codeEtablissementDeLEntitePilote: string;
        codeRegimeFiscal: string;
        moisDArreteDesRisquesBDF: string;
        nomCommercial: string;
        nombreDeSalaries: number;
        dateArreteComptable: number;
        dateDeMiseAJour: Date;
        dateEnregistrement: Date;
        experienceDuDirigeantEnImmobilier: string;
        anneeDeSaisieDeExperienceDuDirigeant: string;
        natureDeLOrganisationCommerciale: string;
        codeDuProfilClient: string;
        codeResident: string;
        codePiloteDuTiers: string;
        codeDeLaPieceJustificativeProfessionnelle: string;
        indicateurDePresenceDuNombreDeSalarie: string;
        designationLongueDuLieuActivite: string;
        enseigneCommercialeDuLieuActivite: string;
        numeroDeTelexDuLieuActivite: string;
        numeroTelecopieurDuLieuActivite: string;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface IEtablissement {
        numeroDeTelexDuLieuActivite: string;
        numeroTelecopieurDuLieuActivite: string;
        designationLongueDuLieuActivite: string;
        enseigneCommercialeDuLieuActivite: string;
        numeroCompementaireSIRET: string;
        dateDeDebutExploitationDuLieu: Date;
        dateDeFinExploitationDuLieu: Date;
        numeroChronoDuLieuActivite: number;
        listeAdresse: Array<IAdressePro>;
        activiteEconomiqueReelleDuLieu: string;
        codeDeLaFamilleNAF: string;
        codeNAF3DerniersCaracteres: string;
        codeStatut: string;
        initFromSI: (data: any) => void;
    }
    class Etablissement implements IEtablissement {
        numeroDeTelexDuLieuActivite: string;
        numeroTelecopieurDuLieuActivite: string;
        designationLongueDuLieuActivite: string;
        enseigneCommercialeDuLieuActivite: string;
        numeroCompementaireSIRET: string;
        dateDeDebutExploitationDuLieu: Date;
        dateDeFinExploitationDuLieu: Date;
        numeroChronoDuLieuActivite: number;
        listeAdresse: Array<IAdressePro>;
        activiteEconomiqueReelleDuLieu: string;
        codeDeLaFamilleNAF: string;
        codeNAF3DerniersCaracteres: string;
        codeStatut: string;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface IImmatriculation {
        coduDuTypeDeRegistre: string;
        numeroImmatriculationAuRegistre: string;
        lieuInscriptionAuRegistre: string;
        DateImmatriculation: Date;
        initFromSI: (data: any) => void;
    }
    class Immatriculation implements IImmatriculation {
        coduDuTypeDeRegistre: string;
        numeroImmatriculationAuRegistre: string;
        lieuInscriptionAuRegistre: string;
        DateImmatriculation: Date;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface IInformationJuridique {
        dateDeCreation: Date;
        dateDeCloture: Date;
        codeSituation: string;
        indicateurPersonnePhysiqueOuMorale: string;
        indicateurEIRL: string;
        dateDeDebutDeOptionEIRL: Date;
        dateDeFinDeOptionEIRL: Date;
        indicateurDeOptionOpposabiliteEIRL: string;
        dateDeDebutExploitationDuLieu: Date;
        dateDeFinExploitationDuLieu: Date;
        initFromSI: (data: any) => void;
    }
    class InformationJuridique implements IInformationJuridique {
        dateDeCreation: Date;
        dateDeCloture: Date;
        codeSituation: string;
        indicateurPersonnePhysiqueOuMorale: string;
        indicateurEIRL: string;
        dateDeDebutDeOptionEIRL: Date;
        dateDeFinDeOptionEIRL: Date;
        indicateurDeOptionOpposabiliteEIRL: string;
        dateDeDebutExploitationDuLieu: Date;
        dateDeFinExploitationDuLieu: Date;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface IParametreCorporate {
        compteurEnregistrement: number;
        referenceExterneDeAgent: number;
        codeQualiteDeAgentAffecte: string;
        identifiantDeElementDeStructure: number;
        identifiantDeElementDeStructureBis: number;
        codeDeBlocageVAO: string;
        indicateurExistanceDeEntiteTitulaire: string;
        initFromSI: (data: any) => void;
    }
    class ParametreCorporate implements IParametreCorporate {
        compteurEnregistrement: number;
        referenceExterneDeAgent: number;
        codeQualiteDeAgentAffecte: string;
        identifiantDeElementDeStructure: number;
        identifiantDeElementDeStructureBis: number;
        codeDeBlocageVAO: string;
        indicateurExistanceDeEntiteTitulaire: string;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface ISecteurActivite {
        codeDeLaFamilleAPE: string;
        codeFamilleCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        deuxDernierCaracteresAPE: string;
        activiteEconomiquePrincipale: string;
        activiteEconomiqueReelleDuLieu: string;
        codeDeLaFamilleNAF: string;
        codeNAF3DerniersCaracteres: string;
        initFromSI: (data: any) => void;
    }
    class SecteurActivite implements ISecteurActivite {
        codeDeLaFamilleAPE: string;
        codeFamilleCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        deuxDernierCaracteresAPE: string;
        activiteEconomiquePrincipale: string;
        activiteEconomiqueReelleDuLieu: string;
        codeDeLaFamilleNAF: string;
        codeNAF3DerniersCaracteres: string;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface ISituationFinancierePro {
        montantChiffreAffaires: number;
        anneeChiffreAffaires: number;
        montantCapitalSocial: number;
        montantCapitalSocialEnCentimes: number;
        montantDuCADeLaPromotionImmobiliere: number;
        anneeDuCADeLaPromotionImmobiliere: number;
        indicateurDePresenceDuCA: string;
        initFromSI: (data: any) => void;
    }
    class SituationFinancierePro implements ISituationFinancierePro {
        montantChiffreAffaires: number;
        anneeChiffreAffaires: number;
        montantCapitalSocial: number;
        montantCapitalSocialEnCentimes: number;
        montantDuCADeLaPromotionImmobiliere: number;
        anneeDuCADeLaPromotionImmobiliere: number;
        indicateurDePresenceDuCA: string;
        constructor();
        initFromSI(data: any): void;
    }
}

declare module libc2 {
    interface IElementGroup {
        category: string;
        key: string;
        isGroup: boolean;
        widthUnite: number;
        margeUnite: number;
        paddingUnite: number;
        paddingPH: go.Margin;
        width: number;
        unite: number;
        text: string;
        textSup: string;
        color: string;
        align: go.Spot;
    }
    class ElementGroup implements IElementGroup {
        category: string;
        key: string;
        isGroup: boolean;
        widthUnite: number;
        margeUnite: number;
        paddingUnite: number;
        unite: number;
        text: string;
        textSup: string;
        color: string;
        align: go.Spot;
        width: number;
        paddingPH: go.Margin;
        constructor(key: string, category: string);
    }
}

declare module libc2 {
    interface IElementGroupFiliere extends IElementGroup {
        nomFiliere: string;
        group: string;
    }
    class ElementGroupFiliere extends ElementGroup implements IElementGroupFiliere {
        nomFiliere: string;
        group: string;
        constructor(key: string, categorie: string, text: string, color: string, group: string);
    }
}

declare module libc2 {
    interface IElementGroupGrappage extends IElementGroup {
    }
    class ElementGroupGrappage extends ElementGroup implements IElementGroupGrappage {
        constructor(key: string, categorie: string, text: string, color: string);
    }
}

declare module libc2 {
    interface IElementGroupMultiFiliere extends IElementGroup {
    }
    class ElementGroupMultiFiliere extends ElementGroup implements IElementGroupMultiFiliere {
        nomFiliere: string;
        isGroup: boolean;
        constructor(key: string, categorie: string, text: string, color: string);
    }
}

declare module libc2 {
    interface IElementGroupOrganisation extends IElementGroup {
        group: string;
    }
    class ElementGroupOrganisation extends ElementGroup implements IElementGroupOrganisation {
        group: string;
        constructor(key: string, categorie: string, group: string, text: string, color: string);
    }
}

declare module libc2 {
    interface IElementGroupRelation extends IElementGroup {
        group: string;
    }
    class ElementGroupRelation extends ElementGroup implements IElementGroupRelation {
        group: string;
        constructor(key: string, categorie: string, text: string, color: string);
    }
}

declare module libc2 {
    interface IElementLink {
        group: string;
        category: string;
        from: string;
        to: string;
        text: string;
        listeLigne: Array<string>;
        wEnd: number;
        wLabel: number;
        colorLink: string;
        bkLink: go.Brush;
        flagVisible: boolean;
    }
    class ElementLink implements IElementLink {
        group: string;
        from: string;
        to: string;
        category: string;
        listeLigne: Array<string>;
        wEnd: number;
        wLabel: number;
        wFromEnd: number;
        colorLink: string;
        bkLink: go.Brush;
        flagVisible: boolean;
        text: string;
        constructor(from: string, to: string, category?: string, text?: string);
    }
}

declare module libc2 {
    interface IElementLinkActivitePro extends IElementLink {
    }
    class ElementLinkActivitePro extends ElementLink implements IElementLinkActivitePro {
        constructor(from: string, to: string);
    }
}

declare module libc2 {
    interface IElementLinkFiliere extends IElementLink {
        id: number;
    }
    class ElementLinkFiliere extends ElementLink implements IElementLinkFiliere {
        id: number;
        constructor(from: string, to: string, category?: string, text?: string, id?: number);
    }
}

declare module libc2 {
    interface IElementNodeNombreAdherents {
        key: string;
        text: string;
        category: string;
        categorySave: string;
        categoryReduit: string;
        header: string;
        titre: string;
        titre2: string;
        sousTitre: string;
        icon: string;
        group: string;
        typeCursor: string;
        codePersonnaliteJuridique: number;
        flagSelect: boolean;
        flagLeader: boolean;
        flagActif: boolean;
        flagHorsRelation: boolean;
        identifiantOrganigramme: string;
        identifiantPersonne: number;
        fontColor: go.Brush;
        bkBrush: go.Brush;
        borderBrush: go.Brush;
        colorLeftMark: go.Brush;
        colorIcon: go.Brush;
        fgTitre: go.Brush;
        bkTitre: go.Brush;
        widthMark: number;
        flagHover: boolean;
        formatSIREN: (siren: string) => string;
    }
    class ElementNodeNombreAdherents implements IElementNodeNombreAdherents {
        static COLOR_PERSONNE_HORS_RELATION: go.Brush;
        static CODE_PERSONNE_PHYSIQUE: number;
        static CODE_PERSONNE_MORALE: number;
        static WIDTH_MARK: number;
        static WIDTH_MARK_LEADER: number;
        static BRUSH_BK: go.Brush;
        static BRUSH_BK_SELECT: go.Brush;
        static BRUSH_BK_SELECT_LEADER: go.Brush;
        static BRUSH_BORDER: go.Brush;
        static BRUSH_BORDER_HOVER: go.Brush;
        static BRUSH_BORDER_HOVER_LEADER: go.Brush;
        static BRUSH_FONT: go.Brush;
        static BRUSH_FONT_SELECT: go.Brush;
        static BRUSH_MARK: go.Brush;
        static BRUSH_MARK_LEADER: go.Brush;
        static BRUSH_ICON: go.Brush;
        static BRUSH_ICON_LEADER: go.Brush;
        static BRUSH_FG_TITRE: go.Brush;
        static BRUSH_BK_TITRE: go.Brush;
        key: string;
        category: string;
        categorySave: string;
        categoryReduit: string;
        header: string;
        titre: string;
        titre2: string;
        sousTitre: string;
        icon: string;
        text: string;
        group: string;
        flagSelect: boolean;
        flagActif: boolean;
        flagHorsRelation: boolean;
        flagHover: boolean;
        flagLeader: boolean;
        codePersonnaliteJuridique: number;
        identifiantOrganigramme: string;
        identifiantPersonne: number;
        constructor();
        bkBrush: go.Brush;
        typeCursor: string;
        borderBrush: go.Brush;
        fontColor: go.Brush;
        colorLeftMark: go.Brush;
        colorIcon: go.Brush;
        fgTitre: go.Brush;
        bkTitre: go.Brush;
        widthMark: number;
        formatSIREN(siren: string): string;
    }
}

declare module libc2 {
    interface IElementNodeNombreAdherentsFiliere extends IElementNodeNombreAdherents {
        personneGrappageLiee: IPersonneGrappage;
        tete: boolean;
        parentKey: string;
        nombreAdherentFiliere: number;
    }
    class ElementNodeNombreAdherentsFiliere extends ElementNodeNombreAdherents implements IElementNodeNombreAdherentsFiliere {
        personneGrappageLiee: any;
        tete: boolean;
        parentKey: string;
        nombreAdherentFiliere: number;
        constructor(personneFiliere: any);
    }
}

declare module libc2 {
    interface IElementNodePersonne {
        key: string;
        text: string;
        category: string;
        categorySave: string;
        categoryReduit: string;
        header: string;
        titre: string;
        titre2: string;
        sousTitre: string;
        segmentation: string;
        icon: string;
        group: string;
        typeCursor: string;
        codePersonnaliteJuridique: number;
        flagSelect: boolean;
        flagLeader: boolean;
        flagActif: boolean;
        flagHorsRelation: boolean;
        identifiantOrganigramme: string;
        identifiantPersonne: number;
        fontColor: go.Brush;
        bkBrush: go.Brush;
        borderBrush: go.Brush;
        colorLeftMark: go.Brush;
        colorIcon: go.Brush;
        fgTitre: go.Brush;
        bkTitre: go.Brush;
        widthMark: number;
        flagHover: boolean;
        formatSIREN: (siren: string) => string;
    }
    class ElementNodePersonne implements IElementNodePersonne {
        static COLOR_PERSONNE_HORS_RELATION: go.Brush;
        static CODE_PERSONNE_PHYSIQUE: number;
        static CODE_PERSONNE_MORALE: number;
        static WIDTH_MARK: number;
        static WIDTH_MARK_LEADER: number;
        static BRUSH_BK: go.Brush;
        static BRUSH_BK_SELECT: go.Brush;
        static BRUSH_BK_SELECT_LEADER: go.Brush;
        static BRUSH_BORDER: go.Brush;
        static BRUSH_BORDER_HOVER: go.Brush;
        static BRUSH_BORDER_HOVER_LEADER: go.Brush;
        static BRUSH_FONT: go.Brush;
        static BRUSH_FONT_SELECT: go.Brush;
        static BRUSH_MARK: go.Brush;
        static BRUSH_MARK_LEADER: go.Brush;
        static BRUSH_ICON: go.Brush;
        static BRUSH_ICON_LEADER: go.Brush;
        static BRUSH_FG_TITRE: go.Brush;
        static BRUSH_BK_TITRE: go.Brush;
        key: string;
        category: string;
        categorySave: string;
        categoryReduit: string;
        header: string;
        titre: string;
        titre2: string;
        segmentation: string;
        sousTitre: string;
        icon: string;
        text: string;
        group: string;
        flagSelect: boolean;
        flagActif: boolean;
        flagHorsRelation: boolean;
        flagHover: boolean;
        flagLeader: boolean;
        codePersonnaliteJuridique: number;
        identifiantOrganigramme: string;
        identifiantPersonne: number;
        constructor();
        bkBrush: go.Brush;
        typeCursor: string;
        borderBrush: go.Brush;
        fontColor: go.Brush;
        colorLeftMark: go.Brush;
        colorIcon: go.Brush;
        fgTitre: go.Brush;
        bkTitre: go.Brush;
        widthMark: number;
        formatSIREN(siren: string): string;
    }
}

declare module libc2 {
    interface IElementNodePersonneFiliere extends IElementNodePersonne {
        personneGrappageLiee: IPersonneGrappage;
        tete: boolean;
        isRamificationCourante: boolean;
        idParent: number;
        codeLeader: string;
        nomFiliere: string;
        numeroChronoLieuActivite: number;
        comptageAdherent: string;
        isVisibleFoldUnfold: boolean;
        isVisibleDelete: boolean;
        colorText: go.Brush;
        callbackFoldUnfold: any;
        caller: any;
    }
    class ElementNodePersonneFiliere extends ElementNodePersonne implements IElementNodePersonneFiliere {
        personneGrappageLiee: any;
        tete: boolean;
        isRamificationCourante: boolean;
        idParent: number;
        codeLeader: string;
        nomFiliere: string;
        numeroChronoLieuActivite: number;
        comptageAdherent: string;
        isVisibleFoldUnfold: boolean;
        isVisibleDelete: boolean;
        callbackFoldUnfold: any;
        caller: any;
        constructor(personneFiliere: any);
        colorIcon: go.Brush;
        colorText: go.Brush;
        bkBrush: go.Brush;
    }
}

declare module libc2 {
    interface IElementNodePersonneGrappage extends IElementNodePersonne {
        personneGrappageLiee: IPersonneGrappage;
        tete: boolean;
    }
    class ElementNodePersonneGrappage extends ElementNodePersonne implements IElementNodePersonneGrappage {
        personneGrappageLiee: IPersonneGrappage;
        tete: boolean;
        constructor(personneGrappage: IPersonneGrappage);
    }
}

declare module libc2 {
    interface IElementNodePersonneHorsRelation extends IElementNodePersonne {
        service: IGraphiqueBase;
        consolidePersonne: () => ng.IPromise<string>;
    }
    class ElementNodePersonneHorsRelation extends ElementNodePersonne implements IElementNodePersonneHorsRelation {
        static iconEspacePrive: string;
        static iconEspacePriveH: string;
        static iconEspacePriveF: string;
        static iconEspacePriveE: string;
        static LEVEL_NOT_DEFINED: number;
        service: IGraphiqueBase;
        constructor(idPersonne: number, titre: string, codePersonnaliteJuridique: string, service: IGraphiqueBase);
        consolidePersonne(): ng.IPromise<string>;
    }
}

declare module libc2 {
    interface IElementNodePersonneOrganisation extends IElementNodePersonne {
        flagEI: boolean;
    }
    class ElementNodePersonneOrganisation extends ElementNodePersonne implements IElementNodePersonneOrganisation {
        static iconEspaceEntreprise: string;
        static iconEspaceEntrepriseFormation: string;
        flagEI: boolean;
        constructor(personne: any, group?: string);
    }
}

declare module libc2 {
    interface IElementNodePersonnePhysique extends IElementNodePersonne {
    }
    class ElementNodePersonnePhysique extends ElementNodePersonne implements IElementNodePersonnePhysique {
        static iconEspacePrive: string;
        static iconEspacePriveH: string;
        static iconEspacePriveF: string;
        static iconEspacePriveE: string;
        constructor(personne: any);
    }
}

declare module libc2 {
    interface ITemplateGroup {
        template: go.Group;
        $: any;
    }
    class TemplateGroup implements ITemplateGroup {
        template: go.Group;
        $: any;
        constructor(sens: string);
        customCompareNodePersonne(first: go.Part, second: go.Part): number;
    }
}

declare module libc2 {
    interface ITemplateGroupEspaceEntreprise extends ITemplateGroup {
    }
    class TemplateGroupEspaceEntreprise extends TemplateGroup implements ITemplateGroupEspaceEntreprise {
        constructor(nodeMetric: INodeMetric);
        getGridLayout(nodeMetric: INodeMetric): go.GridLayout;
    }
}

declare module libc2 {
    interface ITemplateGroupEspacePrive extends ITemplateGroup {
    }
    class TemplateGroupEspacePrive extends TemplateGroup implements ITemplateGroupEspacePrive {
        constructor(nodeMetric: INodeMetric);
        getGridLayout(nodeMetric: INodeMetric): go.GridLayout;
    }
}

declare module libc2 {
    interface ITemplateGroupFiliere extends ITemplateGroup {
        nomFiliere: string;
    }
    class TemplateGroupFiliere extends TemplateGroup implements ITemplateGroupFiliere {
        nomFiliere: string;
        constructor(nodeMetric: INodeMetric);
        private getTreeLayoutFiliere(nodeMetric);
    }
}

declare module libc2 {
    interface ITemplateGroupGrappage extends ITemplateGroup {
    }
    class TemplateGroupGrappage extends TemplateGroup implements ITemplateGroupGrappage {
        constructor(nodeMetric: INodeMetric);
        private getTreeLayoutGrappage(nodeMetric);
        customCompareNodeGrappage(first: go.Part, second: go.Part): number;
    }
}

declare module libc2 {
    interface ITemplateGroupHorsRelation extends ITemplateGroup {
    }
    class TemplateGroupHorsRelation extends TemplateGroup implements ITemplateGroupHorsRelation {
        constructor(nodeMetric: INodeMetric);
        getGridLayout(nodeMetric: INodeMetric): go.GridLayout;
    }
}

declare module libc2 {
    interface ITemplateGroupMain extends ITemplateGroup {
    }
    class TemplateGroupMain extends TemplateGroup implements ITemplateGroupMain {
        constructor(nodeMetric: INodeMetric);
        getGridLayoutMain(nodeMetric: INodeMetric): go.GridLayout;
    }
}

declare module libc2 {
    class TemplateGroupMultiFiliere extends TemplateGroup {
        constructor(nodeMetric: INodeMetric);
        private getGridLayout();
    }
}

declare module libc2 {
    interface ITemplateGroupRelation extends ITemplateGroup {
    }
    class TemplateGroupRelation extends TemplateGroup implements ITemplateGroupRelation {
        constructor(nodeMetric: INodeMetric);
        getGridLayout(): go.GridLayout;
    }
}

declare module libc2 {
    interface ITemplateLink {
        template: go.Link;
        labelPanel: go.Panel;
        tbLabel: go.TextBlock;
        $: any;
    }
    class TemplateLink implements ITemplateLink {
        template: go.Link;
        labelPanel: go.Panel;
        tbLabel: go.TextBlock;
        $: any;
        constructor(typeCourbe: go.EnumValue, nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkFiliere extends ITemplateLink {
    }
    class TemplateLinkFiliereAdherent extends TemplateLink implements ITemplateLinkFiliere {
        constructor(nodeMetric: INodeMetric);
    }
    class TemplateLinkFiliereAdherentEffacable extends TemplateLinkFiliereAdherent implements ITemplateLinkFiliere {
        $rootScope: any;
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkEMPTY {
        template: go.Link;
        $: any;
    }
    class TemplateLinkEMPTY implements ITemplateLinkEMPTY {
        template: go.Link;
        $: any;
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkFiliere extends ITemplateLink {
    }
    class TemplateLinkFiliere extends TemplateLink implements ITemplateLinkFiliere {
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkGrappage extends ITemplateLink {
    }
    class TemplateLinkGrappage extends TemplateLink implements ITemplateLinkGrappage {
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkLL extends ITemplateLink {
    }
    class TemplateLinkLL extends TemplateLink implements ITemplateLinkLL {
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkLR extends ITemplateLink {
    }
    class TemplateLinkLR extends TemplateLink implements ITemplateLinkLR {
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkFiliere extends ITemplateLink {
    }
    class TemplateLinkFiliereNombreAdherentsAucun extends TemplateLink implements ITemplateLinkFiliere {
        $rootScope: any;
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkFiliere extends ITemplateLink {
    }
    class TemplateLinkFiliereNombreAdherents extends TemplateLink implements ITemplateLinkFiliere {
        $rootScope: any;
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkOrganisationActivitePro extends ITemplateLink {
    }
    class TemplateLinkOrganisationActivitePro extends TemplateLink implements ITemplateLinkOrganisationActivitePro {
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkFiliere extends ITemplateLink {
    }
    class TemplateLinkFiliereRamificationCourante extends TemplateLink implements ITemplateLinkFiliere {
        $rootScope: any;
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkFiliere extends ITemplateLink {
    }
    class TemplateLinkFiliereRamification extends TemplateLink implements ITemplateLinkFiliere {
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkRL extends ITemplateLink {
    }
    class TemplateLinkRL extends TemplateLink implements ITemplateLinkRL {
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateLinkRR extends ITemplateLink {
    }
    class TemplateLinkRR extends TemplateLink implements ITemplateLinkRR {
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libc2 {
    interface ITemplateNodePersonne {
        template: go.Node;
        $: any;
        nodeMetric: INodeMetric;
        tablePanel: go.Panel;
        mainPanel: go.Panel;
    }
    class TemplateNodePersonne implements ITemplateNodePersonne {
        template: go.Node;
        $: any;
        nodeMetric: INodeMetric;
        tablePanel: go.Panel;
        mainPanel: go.Panel;
        constructor(nodeMetric: INodeMetric);
        protected onMouseEnter(e: any, obj: go.GraphObject, prev: any): void;
        protected onMouseLeave(e: any, obj: any, prev: any): void;
        private getRowPanelHeader();
        private getRowPanelBody(textStyle, bindText);
    }
}

declare module libc2 {
    interface ITemplateNodePersonneFiliereReduit extends ITemplateNodePersonne {
    }
    class TemplateNodeAdherentFiliereReduit extends TemplateNodePersonne implements ITemplateNodePersonneFiliereReduit {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderFiliere();
    }
}

declare module libc2 {
    class TemplateNodeAdherentFiliere extends TemplateNodePersonne implements ITemplateNodePersonne {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderFiliere();
        private getRowPanelBodyFiliere(textStyle, bindText, bindColor);
    }
}

declare module libc2 {
    interface ITemplateNodeNombreAdherentsAucunFiliere extends ITemplateNodePersonne {
    }
    class TemplateNodeNombreAdherentsAucunFiliere extends TemplateNodePersonne implements ITemplateNodeNombreAdherentsAucunFiliere {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderGrappage();
    }
}

declare module libc2 {
    class TemplateNodeNombreAdherentsFiliereReduit extends TemplateNodePersonne implements ITemplateNodeNombreAdherentsFiliere {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderGrappage();
    }
}

declare module libc2 {
    interface ITemplateNodeNombreAdherentsFiliere extends ITemplateNodePersonne {
    }
    class TemplateNodeNombreAdherentsFiliere extends TemplateNodePersonne implements ITemplateNodeNombreAdherentsFiliere {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderGrappage();
    }
}

declare module libc2 {
    interface ITemplateNodePersonneFiliereReduit extends ITemplateNodePersonne {
    }
    class TemplateNodePersonneFiliereLeaderReduit extends TemplateNodePersonne implements ITemplateNodePersonneFiliereReduit {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderFiliere();
    }
}

declare module libc2 {
    class TemplateNodePersonneFiliereLeader extends TemplateNodePersonne implements ITemplateNodePersonne {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderFiliere();
        private getRowPanelBodyFiliere(textStyle, bindText, bindColor);
    }
}

declare module libc2 {
    interface ITemplateNodePersonneFiliereReduit extends ITemplateNodePersonne {
    }
    class TemplateNodePersonneFiliereReduit extends TemplateNodePersonne implements ITemplateNodePersonneFiliereReduit {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderFiliere();
    }
}

declare module libc2 {
    class TemplateNodePersonneFiliere extends TemplateNodePersonne implements ITemplateNodePersonne {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderFiliere();
        private getRowPanelBodyFiliere(textStyle, bindText, bindColor);
    }
}

declare module libc2 {
    interface ITemplateNodePersonneGrappageReduit extends ITemplateNodePersonne {
    }
    class TemplateNodePersonneGrappageReduit extends TemplateNodePersonne implements ITemplateNodePersonneGrappageReduit {
        constructor(nodeMetric: INodeMetric);
        private getRowPanel();
    }
}

declare module libc2 {
    interface ITemplateNodePersonneGrappage extends ITemplateNodePersonne {
    }
    class TemplateNodePersonneGrappage extends TemplateNodePersonne implements ITemplateNodePersonneGrappage {
        constructor(nodeMetric: INodeMetric);
        private getRowPanelHeaderGrappage();
    }
}

declare module libc2 {
    interface ITemplateNodePersonneReduit extends ITemplateNodePersonne {
    }
    class TemplateNodePersonneReduit extends TemplateNodePersonne implements ITemplateNodePersonneReduit {
        constructor(nodeMetric: INodeMetric);
        private getRowPanel();
    }
}

declare module libc2 {
    interface IPrintParam {
        titrePrincipal: string;
        titreSecondaire: string;
        pied: string;
        mode: number;
        nbCol: number;
        nbRow: number;
    }
    class PrintParam implements IPrintParam {
        static MODE_PRINT_FULL_PAGE: number;
        static MODE_PRINT_MOSA: number;
        static MODE_PRINT_CUSTOM: number;
        titrePrincipal: string;
        titreSecondaire: string;
        pied: string;
        mode: number;
        nbCol: number;
        nbRow: number;
        constructor(titrePrincipal?: string, titreSecondaire?: string, pied?: string, mode?: number, nbCol?: number, nbRow?: number);
    }
    interface INodeMetric {
        heightDiagram: number;
        widthDiagram: number;
        sizeNode: go.Size;
        sizeNodeReduit: go.Size;
        heightHeader: number;
        marginNode: number;
        hBigFont: number;
        hSmallFont: number;
        hBigIconFont: number;
        hSmallIconFont: number;
        sizeButtonExpand: go.Size;
        widthLastSegment: number;
        fontTitre: string;
        hFontTitreGroup: number;
        fontTitreGroup: string;
        fontSousTitre: string;
        fontNomFiliere: string;
        hFontLink: number;
        fontLink: any;
        string: any;
        fontLinkBold: string;
        marginDiagram: number;
        unite: number;
        init: (idBalise: string) => void;
    }
    class NodeMetric implements INodeMetric {
        heightDiagram: number;
        widthDiagram: number;
        sizeNode: go.Size;
        sizeNodeReduit: go.Size;
        heightHeader: number;
        marginNode: number;
        hBigFont: number;
        hSmallFont: number;
        hBigIconFont: number;
        hSmallIconFont: number;
        sizeButtonExpand: go.Size;
        widthLastSegment: number;
        hFontTitreGroup: number;
        hFontLink: number;
        fontLink: any;
        string: any;
        fontLinkBold: string;
        fontTitreGroup: string;
        fontTitre: string;
        fontSousTitre: string;
        fontNomFiliere: string;
        marginDiagram: number;
        unite: number;
        constructor(idBalise: string);
        init(idBalise: string): void;
    }
    interface IGraphiqueBoard {
        diagram: go.Diagram;
        currentPart: go.Part;
        nodeMetric: INodeMetric;
        model: go.GraphLinksModel;
        callBackSelect: (data: any) => void;
        $: any;
        addTemplateNode: (key: string, templateNode: ITemplateNodePersonne) => void;
        addLinkTemplate: (templateNode: ITemplateLink, key: string) => void;
        addGroupTemplate: (templateNode: ITemplateGroup, key: string) => void;
        toggleView: (flagDetail: boolean) => void;
        showLink: (flagVisible: boolean) => void;
        changeCurrentNode: (data: IElementNodePersonne, flagDetail: boolean) => void;
        printCurrent: (tools: ITools, nomDoc: string, param: IPrintParam) => string;
    }
    class GraphiqueBoard implements IGraphiqueBoard {
        static DEF_WIDTH_NODE: number;
        static DEF_HEIGHT_NODE: number;
        static DEF_HEIGHT_NODE_REDUIT: number;
        static DEF_MARGIN_NODE: number;
        static DEF_WIDTH_BUTTON_EXPAND: number;
        static DEF_HEIGHT_BUTTON_EXPAND: number;
        static DEF_HEIGHT_HEADER: number;
        static MARGE_GROUPE: number;
        static CATEGORIE_LINK_ACTIVITE_PRO: string;
        static CATEGORIE_LINK_RR: string;
        static CATEGORIE_LINK_RL: string;
        static CATEGORIE_LINK_LR: string;
        static CATEGORIE_LINK_LL: string;
        static COLOR_LEADER: string;
        static COLOR_LINK: string;
        static COLOR_TITRE_ORGANISATION: string;
        static COLOR_TITRE_HORS_ORGANISATION: string;
        static CATEGORIE_GROUPE_RELATION: string;
        static CATEGORIE_GROUPE_HORS_RELATION: string;
        static CATEGORIE_GROUPE_MAIN: string;
        static CATEGORIE_GROUPE_ESPACE_ENTREPRISE: string;
        static CATEGORIE_GROUPE_ESPACE_PRIVE: string;
        static NOM_ESPACE: string;
        static NOM_ENTREPRISE: string;
        static NOM_PRIVE: string;
        static NOM_RELATION: string;
        static NOM_HORS_RELATION: string;
        static CATEGORIE_NODE_PERSONNE: string;
        static CATEGORIE_NODE_PERSONNE_REDUIT: string;
        diagram: go.Diagram;
        currentPart: go.Part;
        nodeMetric: INodeMetric;
        model: go.GraphLinksModel;
        callBackSelect: (data: any) => void;
        callBackDone: (data: any) => void;
        $: any;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        toggleView(flagDetail: boolean): void;
        showLink(flagVisible: boolean): void;
        changeCurrentNode(data: IElementNodePersonne, flagDetail: boolean): void;
        ajustDiagram(): void;
        addTemplateNode(key: string, templateNode: ITemplateNodePersonne): void;
        addLinkTemplate(templateLink: ITemplateLink, key: string): void;
        addGroupTemplate(templateGroup: ITemplateGroup, key: string): void;
        printCurrent(tools: ITools, nomDoc: string, param: IPrintParam): string;
        createPDF(nomDoc: string, param: IPrintParam): void;
        private PopupOptionPrint(tools, nomDoc, param);
    }
}

declare module libc2 {
    interface IGraphiqueBoardFiliere extends IGraphiqueBoard {
        draw: (tabNode: Array<any>, tabLink: Array<any>) => void;
        clear: () => void;
        activateNode: (identifiantOrganigramme: string) => any;
    }
    class GraphiqueBoardFiliere extends GraphiqueBoard implements IGraphiqueBoardFiliere {
        static CATEGORIE_GROUPE_FILIERE: string;
        static CATEGORIE_GROUPE_MULTI_FILIERE: string;
        static CATEGORIE_NODE_FILIERE_LEADER_RAMIFICATION: string;
        static CATEGORIE_NODE_FILIERE_LEADER_RAMIFICATION_REDUIT: string;
        static CATEGORIE_NODE_FILIERE: string;
        static CATEGORIE_NODE_FILIERE_REDUIT: string;
        static CATEGORIE_NODE_ADHERENT_FILIERE: string;
        static CATEGORIE_NODE_ADHERENT_FILIERE_REDUIT: string;
        static CATEGORIE_NODE_FILIERE_ADHERENT: string;
        static CATEGORIE_NODE_FILIERE_ADHERENT_EFFACABLE: string;
        static CATEGORIE_NODE_FILIERE_NOMBRE_ADHERENTS: string;
        static CATEGORIE_NODE_FILIERE_NOMBRE_ADHERENTS_REDUIT: string;
        static CATEGORIE_LINK_FILIERE: string;
        static CATEGORIE_LINK_FILIERE_RAMIFICATION: string;
        static CATEGORIE_LINK_FILIERE_RAMIFICATION_COURANTE: string;
        static CATEGORIE_LINK_FILIERE_NOMBRE_ADHERENTS: string;
        static CATEGORIE_LINK_FILIERE_TETE_NOMBRE_ADHERENTS: string;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        onViewportChanged(e: any): void;
        toggleView(flagDetail: boolean): void;
        changeCurrentNode(data: IElementNodePersonne, flagDetail: boolean): void;
        draw(tabNode: Array<any>, tabLink: Array<any>): void;
        clear(): void;
        activateNode(identifiantOrganigramme: string): void;
    }
}

declare module libc2 {
    interface IGraphiqueBoardGrappage extends IGraphiqueBoard {
        draw: (tabNode: Array<any>, tabLink: Array<any>) => void;
    }
    class GraphiqueBoardGrappage extends GraphiqueBoard implements IGraphiqueBoardGrappage {
        static CATEGORIE_GROUPE_GRAPPAGE: string;
        static CATEGORIE_NODE_GRAPPAGE: string;
        static CATEGORIE_NODE_GRAPPAGE_REDUIT: string;
        static CATEGORIE_LINK_GRAPPAGE: string;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        draw(tabNode: Array<any>, tabLink: Array<any>): void;
    }
}

declare module libc2 {
    interface IGraphiqueBoardOrganisation extends IGraphiqueBoard {
        draw: (data: IDataGraphiqueOrganisation) => void;
        refresh: (data: IDataGraphiqueOrganisation) => void;
        drawConsolide: (data: IDataGraphiqueOrganisation, tab: Array<any>, $q: ng.IQService) => void;
        refreshConsolide: (data: IDataGraphiqueOrganisation, tab: Array<any>, $q: ng.IQService) => void;
        refreshNode: (identifiantOrganigramme: string) => void;
        data: IDataGraphiqueOrganisation;
    }
    class GraphiqueBoardOrganisation extends GraphiqueBoard implements IGraphiqueBoardOrganisation {
        data: IDataGraphiqueOrganisation;
        static NOM_RELATION1_DEFAUT: string;
        static NOM_RELATION2_DEFAUT: string;
        static NOM_HORS_RELATION1_DEFAUT: string;
        static NOM_HORS_RELATION2_DEFAUT: string;
        static CATEGORIE_GROUP_RELATION: string;
        static CATEGORIE_GROUP_HORS_RELATION: string;
        static CATEGORIE_GROUP_MAIN: string;
        static CATEGORIE_GROUP_MAIN_1COL: string;
        static CATEGORIE_GROUP_MAIN_2COL: string;
        static CATEGORIE_GROUP_MAIN_3COL: string;
        static COLOR_LEADER: string;
        static COLOR_LINK: string;
        static COLOR_TITRE_ORGANISATION: string;
        static COLOR_TITRE_HORS_ORGANISATION: string;
        static SENS_LIEN_CORPORATE_EST: string;
        static SENS_LIEN_CORPORATE_A_POUR: string;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        drawConsolide(data: IDataGraphiqueOrganisation, tab: Array<any>, $q: ng.IQService): void;
        refreshConsolide(data: IDataGraphiqueOrganisation, tab: Array<any>, $q: ng.IQService): void;
        draw(data: IDataGraphiqueOrganisation): void;
        refresh(data: IDataGraphiqueOrganisation): void;
        refreshNode(identifiantOrganigramme: string): void;
        refreshTitreGroupe(data: IDataGraphiqueOrganisation): void;
        private refreshLinkOrganisation(data);
        private refreshNodeOrganisation(data);
        private majTabNodeToDelete(data, groupName);
        private majTabNodeToAdd(data);
        private isInTab(n, tab);
    }
}

declare module libc2 {
    interface IGraphiqueBoardRelation extends IGraphiqueBoard {
        draw: (data: IDataGraphiqueRelation) => void;
        refresh: (data: IDataGraphiqueRelation) => void;
        drawConsolide: (data: IDataGraphiqueRelation, tab: Array<any>, $q: ng.IQService) => void;
        refreshConsolide: (data: IDataGraphiqueRelation, tab: Array<any>, $q: ng.IQService) => void;
        refreshNode: (identifiantOrganigramme: string) => void;
        data: IDataGraphiqueOrganisation;
    }
    class GraphiqueBoardRelation extends GraphiqueBoard implements IGraphiqueBoardRelation {
        data: IDataGraphiqueOrganisation;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        drawConsolide(data: IDataGraphiqueRelation, tab: Array<any>, $q: ng.IQService): void;
        refreshConsolide(data: IDataGraphiqueRelation, tab: Array<any>, $q: ng.IQService): void;
        draw(data: IDataGraphiqueRelation): void;
        refresh(data: IDataGraphiqueRelation): void;
        refreshNode(identifiantOrganigramme: string): void;
        refreshTitreGroupe(data: IDataGraphiqueRelation): void;
        private refreshLinkOrganisation(data);
        private refreshNodeOrganisation(data);
        private majTabNodeToDelete(data, groupName);
        private majTabNodeToAdd(data);
        private isInTab(n, tab);
    }
}
