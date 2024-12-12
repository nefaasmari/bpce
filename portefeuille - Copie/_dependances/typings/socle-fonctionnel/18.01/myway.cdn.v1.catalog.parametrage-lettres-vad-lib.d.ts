
declare module MyWay.Clients.ParametrageLettresVad.Lib {
    class Referentiel {
        static moduleNom: string;
        static restDocTypeParametreSignataire: string;
        static restDocTypeParametreAdresseRetour: string;
        static restDocTypeParametreFamilleDocument: string;
        static restDocTypeParametreJeuDocument: string;
        static restDocTypeParametreJeuParametre: string;
        static restDocTypeParametreOptionDocument: string;
    }
    class Reference {
        static serviceAngularQ: string;
        static serviceAngularTimeout: string;
        static moduleAgent: string;
        static serviceAgent: string;
        static serviceAgentExtended: string;
    }
    var app: ng.IModule;
}

declare module MyData {
    class MyChaine {
        valeur: String;
    }
    class MyNombre {
        valeur: Number;
        constructor(aNombre: number);
        static fromNumber(aNombre: number): MyNombre;
        toLeftPadZero(aTaille: number): string;
    }
    class MyDateHeure {
        static formatDateTiretAAAAMMJJ: string;
        static formatDateTiretAAAAMMJJhhmmss: string;
        static formatDateSlashJJMMAAAA: string;
        static formatDateSlashJJMMAAAAaHHhMM: string;
        static formatDateDivers001: string;
        static uniteJour: string;
        valeur: Date;
        constructor(aDate: Date);
        static fromDate(aDate: Date): MyDateHeure;
        static fromChaineTiretAAAAMMJJ(aDate: string): MyDateHeure;
        static fromChaineTiretAAAAMMJJ_HHMMSS(aDate: string, aHeure: string): MyDateHeure;
        static fromChaineDivers001(aDate: string): MyDateHeure;
        static nowDate(): MyDateHeure;
        static now(): MyDateHeure;
        toDate(): Date;
        toOnlyDate(): Date;
        toIsoString(): string;
        static estAujourdhui(aDate: Date): boolean;
        estAujourdhui(): boolean;
        static nbJoursDepuis(aDate: MyDateHeure): Number;
        toChaineMoment(aFormat: string): string;
        toChaineSlashJJMMAAAA(): string;
        toChaineSlashJJMMAAAAaHHhMM(): string;
        toChaineTiretAAAAMMJJ(): string;
    }
    class MyPeriode {
        debut: Date;
        fin: Date;
        constructor(debut: Date, fin: Date);
        static toChaineMaj(dateDebut: Date, dateFin: Date): string;
    }
    class MyDate {
    }
    class MyHeure {
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreAdresseRetour {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IGetDocTypeParametreAdresseRetour {
        codeEtablissement: string;
        identifiantAdresseRetour?: number;
        dateTraitement?: string;
    }
    interface IAdresseRetour {
        listeAdresseRetour: Array<IAdresseRetourDetail>;
        uneAdresseRetour: IAdresseRetourDetail;
    }
    function initUneAdresse(): IAdresseRetour;
    function initListeAdresse(): IAdresseRetour;
    class AdresseRetourDetail {
        codeEtablissement: string;
        dateDebutValidite: Date | string;
        dateFinValidite: Date | string;
        identifiantAdresseRetour: number;
        designationAdresse: string;
        ligne1Adresse: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        dateMajEnrg: Date | string;
        referenceExterneAgentDerMod: number;
    }
    interface IAdresseRetourDetail extends AdresseRetourDetail {
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest {
    class RacineRestService {
        urlServer: string;
        url: string;
        id: string;
        protected $q: ng.IQService;
        protected $timeout: ng.ITimeoutService;
        protected svcAgent: MyWay.Services.ServiceAgentExtended;
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        protected debug(message: string, detail?: any): void;
        protected error(message: string, detail?: any): void;
        protected sendMyway(question: any): ng.IPromise<any>;
        getHttpParam(question: any, methode: MyWay.Services.MethodEnum): any;
        getHttpParam2(dataUrl: any, dataBody: any, methode: MyWay.Services.MethodEnum): any;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGet(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPost(data: any): ng.IPromise<any>;
        sendPost2(dataUrl: any, dataBody: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPut(data: any): ng.IPromise<any>;
        sendPut2(dataUrl: any, dataBody: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendDelete(data: any): ng.IPromise<any>;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest {
    class DocTypeParametreAdresseRetourService extends MyWay.Clients.ParametrageLettresVad.Lib.Rest.RacineRestService {
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        getListeAdresseRetour(codeEtablissement: string, dateTraitement?: Date): ng.IPromise<DocTypeParametreAdresseRetour.IAdresseRetour>;
        formatterAdresseRetour(adresseRetour: DocTypeParametreAdresseRetour.IAdresseRetourDetail): void;
        preparerAdresseRetour(adresseRetour: DocTypeParametreAdresseRetour.IAdresseRetourDetail): void;
        creerAdresseRetour(adresseRetour: DocTypeParametreAdresseRetour.IAdresseRetourDetail): ng.IPromise<DocTypeParametreAdresseRetour.IAdresseRetourDetail>;
        majAdresseRetour(adresseRetour: DocTypeParametreAdresseRetour.IAdresseRetourDetail): ng.IPromise<DocTypeParametreAdresseRetour.IAdresseRetourDetail>;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreFamilleDocument {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IGetDocTypeParametreFamilleDocument {
        codeEtablissement: string;
        codeFamilleDocument?: string;
    }
    class FamilleDocument {
        data: IFamilleDocument;
        constructor(data: IFamilleDocument);
        getParametrageFamille(codeFamille: string): IFamilleDocumentDetail;
        getParametrageParametre(codeFamille: string, codeParametre: string): ITypeParamDocument;
        getParametrageOption(codeFamille: string, codeParametre: string, valeurOption: string): IOptionParamDocument;
    }
    interface IFamilleDocument {
        listeFamilleDocumentDetail: Array<IFamilleDocumentDetail>;
    }
    interface ITypeParamDocument {
        libelleTypeParametre: string;
        libelleTypeParametreUtilisateur: string;
        dateDebutValidite: Date | string;
        dateFinValidite: Date | string;
        codeRubriqueParametre: string;
        numeroOrdre: number;
        listeOptionParamDocument: Array<IOptionParamDocument>;
    }
    interface IOptionParamDocument {
        valeurOptionTypeParametre: string;
        libelleLOptionTypeParam: string;
        libelleOptionUtilisateur: string;
        indicateurPresenceAdresse: boolean;
        indicateurPresenceTexteLibre: boolean;
        dateDebutValidite: Date | string;
        dateFinValidite: Date | string;
        numeroOrdre: number;
    }
    interface IFamilleDocumentDetail {
        codeFamilleDocument: string;
        libelleFamilleDocument: string;
        listeTypeParamDocument: Array<ITypeParamDocument>;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreFamilleDocument {
    class DocTypeParametreFamilleDocumentService extends MyWay.Clients.ParametrageLettresVad.Lib.Rest.RacineRestService {
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        getParametrageOptions(codeEtablissement: string, codeFamilleDocument?: string): ng.IPromise<IFamilleDocument>;
        formatterFamilleDocument(familleDocument: IFamilleDocument): void;
        preparerFamilleDocument(familleDocument: DocTypeParametreAdresseRetour.IAdresseRetourDetail): void;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreJeuDocument {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IGetDocTypeParametreJeuDocument {
        codeEtablissement: string;
        typeDocument?: string;
        dateTraitement?: Date | string;
    }
    class JeuDocumentDetail {
        codeEtablissement: string;
        dateDebutValidite: Date | string;
        dateFinValidite: Date | string;
        typeDocument: string;
        identJeuParametre: number;
        dateMajEnrg: Date | string;
        referenceExterneAgentDerMod: number;
        constructor();
    }
    interface IJeuDocumentDetail extends JeuDocumentDetail {
    }
    interface IJeuDocument {
        listeJeuDocument: Array<IJeuDocumentDetail>;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreJeuDocument {
    class DocTypeParametreJeuDocumentService extends MyWay.Clients.ParametrageLettresVad.Lib.Rest.RacineRestService {
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        getListeJeuDocument(codeEtablissement: string, dateTraitement?: Date): ng.IPromise<IJeuDocument>;
        formatterJeuDocument(document: IJeuDocumentDetail): void;
        preparerJeuDocument(jeuDocument: DocTypeParametreJeuDocument.IJeuDocumentDetail): void;
        creerJeuDocument(jeuDocument: DocTypeParametreJeuDocument.IJeuDocumentDetail): ng.IPromise<DocTypeParametreJeuDocument.IJeuDocumentDetail>;
        majJeuDocument(jeuDocument: DocTypeParametreJeuDocument.IJeuDocumentDetail): ng.IPromise<DocTypeParametreJeuDocument.IJeuDocumentDetail>;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreJeuParametre {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IGetDocTypeParametreJeuParametre {
        codeEtablissement: string;
        identifiantJeuParametre?: number;
        dateTraitement?: Date | string;
    }
    interface IJeuParametre {
        listeCaracteristiqueJeu: Array<ICaracteristiqueJeu>;
    }
    interface IJeuDetail {
        codeRubriqueParametre: string;
        libelleTypeParametre: string;
        valeurOptionParametre: string;
        libelleOptionParametre: string;
        identifiantAdresseRetour: number;
        texteComplementaire: string;
        dateDebutValidite: Date | string;
        dateFinValidite: Date | string;
        dateMajEnrg: Date | string;
        referenceExterneAgentDerMod: number;
    }
    interface IEntite {
        listeJeuDetail: Array<IJeuDetail>;
        codeEntiteVente: string;
    }
    interface ICaracteristiqueJeu {
        codeEtablissement: string;
        dateDebutValidite: Date | string;
        dateFinValidite: Date | string;
        dateMajEnrg: Date | string;
        referenceExterneAgentDerMod: number;
        libelleJeuParametre: string;
        listeEntite: Array<IEntite>;
        identifiantJeuParametre: number;
        codeFamilleDocument: string;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreJeuParametre {
    class DocTypeParametreJeuParametreService extends MyWay.Clients.ParametrageLettresVad.Lib.Rest.RacineRestService {
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        getListeJeuParametre(codeEtablissement: string, dateTraitement?: Date): ng.IPromise<IJeuParametre>;
        getJeuParametre(codeEtablissement: string, identifiantJeuParametre: number, dateTraitement?: Date): ng.IPromise<IJeuParametre>;
        majJeuParametre(jeuParametre: ICaracteristiqueJeu): ng.IPromise<ICaracteristiqueJeu>;
        formatterJeuParametre(parametre: ICaracteristiqueJeu): void;
        preparerJeuParametre(objet: DocTypeParametreJeuParametre.ICaracteristiqueJeu): void;
        copierJeuParametre(jeuParametre: DocTypeParametreJeuParametre.ICaracteristiqueJeu, libelle: string): ng.IPromise<DocTypeParametreJeuParametre.ICaracteristiqueJeu>;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreSignataire {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    class GetDocTypeParametreSignataire {
        codeEtablissement: string;
        codeMarche: string;
        dateTraitement: Date | string;
        constructor();
    }
    interface IGetDocTypeParametreSignataire extends GetDocTypeParametreSignataire {
    }
    interface ISignataire {
        listeSignataire: Array<ISignataireDetail>;
    }
    interface ISignataireDetail {
        codeEtablissement: string;
        codeMarche: string;
        dateDebutValidite: Date | string;
        dateFinValidite: Date | string;
        nomSignataire: string;
        prenomSignataire: string;
        libelleFonctionSignataire: string;
        dateMajEnrg: Date | string;
        referenceExterneAgentDerMod: number;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreSignataire {
    class DocTypeParametreSignataireService {
        protected $q: ng.IQService;
        protected $timeout: ng.ITimeoutService;
        protected svcAgent: MyWay.Services.ServiceAgentExtended;
        static nomClasse: string;
        url: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        protected debug(message: string, detail?: any): void;
        protected error(message: string, detail?: any): void;
        protected sendMyway(question: any): ng.IPromise<any>;
        getHttpParam(question: any, methode: MyWay.Services.MethodEnum): any;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGet(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPost(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPut(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendDelete(data: any): ng.IPromise<any>;
        getSignataire(codeEtablissement: string, codeMarche: string, dateTraitement: Date): ng.IPromise<ISignataire>;
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib.Rest.DocTypeParametreSignataire {
    class TestService {
        static nomClasse: string;
        static $inject: any[];
        constructor();
    }
}

declare module MyWay.Clients.ParametrageLettresVad.Lib {
    /**
     * Classe de gestion de la casse
     */
    class CasseService {
        constructor();
        /**
         * Met en majuscule
         * @param input Chaîne à mettre en majuscule
         */
        static majuscule(input: string): string;
        /**
         * Met en minuscule
         * @param input Chaîne à mettre en minuscule
         */
        static minuscule(input: string): string;
        minuscule2(input: string): string;
    }
}
