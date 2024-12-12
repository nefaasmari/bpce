
declare module MyWay.RestRessource {
    var app: ng.IModule;
}

declare module MyWay.RestRessource {
    /**
     * Class de 'Base' que les ressources Rest devraient étendre.
     * Les methodes setProperty(), setClassObject() et setArrayOfClassObject() permettent de faciliter
     * la construction des instances de classe à partie des structures de type Interfaces (ou objets javascript)
     *
     * @TODO Améliorer la gestion des erreurs.
     * @TODO Ajouter la gestion tableaux de valeurs (vs tableaux d'instance de classe)
     */
    class Base {
        constructor();
        /**
         * Les classes qui étendent Base utilisent cette méthode pour "nettoyer" une classe des
         * propiétés de ces extensions. ( class qui étendent la class)
         *
         * @param {U} obj - Un objet ou une instance de classe dérivée de Base.
         */
        sanitize<U extends Base>(obj: U, classType?: {
            new (...args: any[]): U;
        }): U;
        /**
         * Clone une classe étendant la class Base.
         * @TODO : non testé encore...
         */
        clone<U extends Base>(classType?: {
            new (...args: any[]): U;
        }): U;
        /**
         * Crée un tableau (liste) d'instances de class à partir de l'objet portant le même nom de propriété.
         *
         * @param {any} clsObj - La classe à laquelle la variable public est une instance de class à creer.
         * @param {any} structObj - L'objet contenant un tableau d'objets (structure objet javascript) de type classType
         * @param {sting} propertyNameAsString - La nom de la propriété
         * @param {new (...args: any[]): any;} classType - La class à créer pour chaque élement de tableau
         * @param {any} undefinedDefaultValue - valeur à donner si structObj ne contient pas de valeur pour ce champs.
         *                                      Exemple : undefined, null, []
         * @throws {Error} Renvoie une exception si clsObj, structObj ou propertyNameAsString ne sont pas définies ou si la création de
         *                 la class classType échoue.
         * Exemple d'utilisation:
         *   constructor(obj?: any) {
         *     super();
         *     try {
         *          this.setArrayOfClassObject(this, obj, "lieuInformation", LieuInformation, undefined); // ou  lieuInformation: Array<LieuInformation>;
         *     } catch (e) {
         *         throw new Error("Instantiation erreur");
         *     }
         *  }
         */
        setArrayOfClassObject(clsObj: any, structObj: any, propertyNameAsString: string, classType: {
            new (...args: any[]): any;
        }, undefinedDefaultValue: any): void;
        /**
         * Crée une instance de class à partir de l'objet portant le même nom de propriété.
         *
         * @param {any} clsObj - La classe à laquelle la variable public est une instance de class à creer.
         * @param {any} structObj - L'objet contenant la variable (structure objet javascript) de type classType
         * @param {sting} propertyNameAsString - La nom de la propriété
         * @param { { new (...args: any[]): any; } } classType - La classe à creer
         * @param {any} undefinedDefaultValue - valeur à donner si structObj ne contient pas de valeur pour ce champs.
         * @throws {Error} Renvoie une exception si clsObj, structObj ou propertyNameAsString ne sont pas définies ou si la création de
         *                 la class classType échoue.
         * Exemple d'utilisation:
         *   constructor(obj?: any) {
         *     super();
         *     try {
         *         this.setClassObject(this, obj, "lieuEtablissement", LieuEtablissement, undefined);
         *     } catch (e) {
         *         throw new Error("Instantiation erreur");
         *    }
         *  }
         */
        setClassObject(clsObj: any, structObj: any, propertyNameAsString: string, classType: {
            new (...args: any[]): any;
        }, undefinedDefaultValue: any): void;
        /**
         * Crée une propiété de class à partir de la propiétés de l'objet.
         *
         * @param {any} clsObj - La classe à laquelle la variable public doit être affecté
         * @param {any} structObj - L'objet contenant la variable (structure objet javascript) de type élémentaire ( string, boolean ou number)
         * @param {sting} propertyNameAsString - La nom de la propriété
         * @param {any} undefinedDefaultValue - valeur à donner si structObj ne contient pas de valeur pour ce champs.
         * @throws {Error} Renvoie une exception si clsObj, structObj ou propertyNameAsString ne sont pas définies
         * Exemple d'utilisation:
         *   constructor(obj?: any) {
         *     super();
         *     try {
         *         this.setProperty(this, obj, "codeLieuOccupation", null);
         *     } catch (e) {
         *         throw new Error("Instantiation erreur");
         *    }
         *  }
         */
        setProperty(clsObj: any, structObj: any, propertyNameAsString: string, undefinedDefaultValue: any): void;
    }
}

declare module MyWay.RestRessource {
    /**
     * Service de base des informations portées par une interface REST
     * Une interface REST devrait étendre cette classe afin de fournir les informations de
     * version et URI.
     *
     */
    class InformationBaseService {
        private _resourceVersion;
        private _resourceURI;
        constructor(_resourceVersion: string, _resourceURI: string);
        getModuleVersion(): string;
        getRessourceURI(): string;
        getRessourceVersion(): string;
        overrideRessourceURI(newURI: string): void;
    }
    /**
     *   Permet de serialiser une Interface ou un objet en JSON
     *   Comme JSON n'a pas de type ou de fonction, seuls les 'string', 'number', 'boolean' , 'null', 'objet's et 'array's sont sérialisés.
     *
     *   Ex:   var v = { name: "Alan Parker", birth_date: new Date(), married: true, children: [{ fname: "Harry", age: 10 }, { fname: "Clara", age: 12 }] };
     *   donne : "{\"name\":\"Alan Parker\",\"birth_date\":\"2016-08-18T13:52:15.320Z\",\"married\":true,\"children\":[{\"fname\":\"Harry\",\"age\":10},{\"fname\":\"Clara\",\"age\":12}]}"
     *
     */
    class SerializerBaseService<T> {
        constructor();
        serialize(resource: any): string;
        deserialize(resourceStr: string): T;
    }
    class GetBaseService<U, V> {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        urlRest: string;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, urlRest: string);
        /**
         * Envoi la requete http de type GET.
         *
         * @param {U} paramsObject - Parametre de la requete. Peut-être un objet javascript { ... } ou une instance de classe contenant UNIQUEMENT les
         *                           propriétés demandées.
         * @param {new (...args: any[]): V;} reponseClassType - Si présent, transforme le résultat json retourné en instance de class de
         *                                   la classe reponseClassType. Toute la structure portés dans le json sera transformé en instance de class d'objets.
         * @return {ng.IPromise<V>} Renvoie une promesse dont le résultat sera soit une structure objet javascript (interface)
         *                          si reponseClassType n'est pas passé en paramètre, soit une instance de classe de type U.
         * @throws {MyWay.Services.Erreur}  Genere une exception si la création de la classe U échoue.
         *
         * Note: L'appel catch() doit être effectué par l'appelant avec .catch((error: MyWay.Services.Erreur) => {} pour
         * les exceptions, dont celles générées par sendRequest().
         * Note: Il peut être necessaire d'utiliser $apply pour le binding au retour de la promesse (.then() ) car
         *       le sendRequest() n'encapsule pas un apply pour générer un digest.
         */
        send(paramsObject: U, reponseClassType?: {
            new (...args: any[]): V;
        }): ng.IPromise<V>;
    }
    class PostBaseService<U, V> {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        urlRest: string;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, urlRest: string);
        /**
         * Envoi la requete http de type POST ( création de resource non idem-potent).
         *
         * @param {U} paramsObject - Parametre de la requete. Peut-être un objet javascript { ... } ou une instance de classe contenant UNIQUEMENT les
         *                           propriétés demandées.
         * @param {new (...args: any[]): V;} reponseClassType - Si présent, transforme le résultat json retourné en instance de class de
         *                                   la classe reponseClassType. Toute la structure portés dans le json sera transformé en instance de class d'objets.
         * @return {ng.IPromise<V>} Renvoie une promesse dont le résultat sera soit une structure objet javascript (interface)
         *                          si reponseClassType n'est pas passé en paramètre, soit une instance de classe de type U.
         * @throws {MyWay.Services.Erreur}  Genere une exception si la création de la classe U échoue.
         *
         * Note: L'appel catch() doit être effectué par l'appelant avec .catch((error: MyWay.Services.Erreur) => {} pour
         * les exceptions, dont celles générées par sendRequest().
         * Note: Il peut être necessaire d'utiliser $apply pour le binding au retour de la promesse (.then() ) car
         *       le sendRequest() n'encapsule pas un apply pour générer un digest.
         */
        send(paramsObject: U, reponseClassType?: {
            new (...args: any[]): V;
        }): ng.IPromise<V>;
    }
    class PutBaseService<U, V> {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        urlRest: string;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, urlRest: string);
        /**
         * Envoi la requete http de type PUT ( mise à jour de resource, normalement idem-potent).
         *
         * @param {U} paramsObject - Parametre de la requete. Peut-être un objet javascript { ... } ou une instance de classe contenant UNIQUEMENT les
         *                           propriétés demandées.
         * @param {new (...args: any[]): V;} reponseClassType - Si présent, transforme le résultat json retourné en instance de class de
         *                                   la classe reponseClassType. Toute la structure portés dans le json sera transformé en instance de class d'objets.
         * @return {ng.IPromise<V>} Renvoie une promesse dont le résultat sera soit une structure objet javascript (interface)
         *                          si reponseClassType n'est pas passé en paramètre, soit une instance de classe de type U.
         * @throws {MyWay.Services.Erreur}  Genere une exception si la création de la classe U échoue.
         *
         * Note: L'appel catch() doit être effectué par l'appelant avec .catch((error: MyWay.Services.Erreur) => {} pour
         * les exceptions, dont celles générées par sendRequest().
         * Note: Il peut être necessaire d'utiliser $apply pour le binding au retour de la promesse (.then() ) car
         *       le sendRequest() n'encapsule pas un apply pour générer un digest.
         */
        send(paramsObject: U, reponseClassType?: {
            new (...args: any[]): V;
        }): ng.IPromise<V>;
    }
    class DeleteBaseService<U> {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        urlRest: string;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, urlRest: string);
        /**
         * Envoi la requete http de type DELETE ( destruction de resource).
         *
         * @param {U} paramsObject - Parametre de la requete. Peut-être un objet javascript { ... } ou une instance de classe contenant UNIQUEMENT les
         *                           propriétés demandées.
         * @return {ng.IPromise<V>} Renvoie une promesse dont le résultat sera soit une structure objet javascript (interface)
         *                          si reponseClassType n'est pas passé en paramètre, soit une instance de classe de type U.
         * @throws {MyWay.Services.Erreur}  Génere une exception si la création de la classe U échoue.
         *
         * Note: L'appel catch() doit être effectué par l'appelant avec .catch((error: MyWay.Services.Erreur) => {} pour
         * les exceptions, dont celles générées par sendRequest().
         * Note: Il peut être necessaire d'utiliser $apply pour le binding au retour de la promesse (.then() ) car
         *       le sendRequest() n'encapsule pas un apply pour générer un digest.
         */
        send(paramsObject: U): ng.IPromise<any>;
    }
}

declare module MyWay.RestRessource.AgendaParametreV1Lieu {
    class Constants {
        static RESSOURCE_VERSION: string;
        static RESSOURCE_URI: string;
    }
    class InformationService extends MyWay.RestRessource.InformationBaseService {
        constructor();
    }
    interface ILieu {
        lieuEtablissement: ILieuEtablissement;
        lieuInformation: Array<ILieuInformation>;
    }
    class Lieu extends Base implements ILieu {
        lieuEtablissement: LieuEtablissement;
        lieuInformation: Array<LieuInformation>;
        constructor();
        constructor(obj: ILieu);
    }
    interface ILieuEtablissement {
        codeEtablissement: string;
    }
    class LieuEtablissement extends Base implements ILieuEtablissement {
        codeEtablissement: string;
        constructor();
        constructor(obj: ILieuEtablissement);
    }
    interface ILieuInformation {
        codeLieuOccupation: string;
        codePrioriteAffichageLieu: string;
        libelleLongLieu: string;
        libelleCourtLieu: string;
        typeLieuContact: string;
        indicateurAutorisationLieu: string;
        indicateurLieuAgence: boolean;
        codeOrigineAdministration: string;
        dateDebutValiditeLieu: StringDateISO;
        dateFinValiditeLieu: StringDateISO;
        premierLibLettreCommerciale: string;
        indExplParPrst: boolean;
    }
    class LieuInformation extends Base implements ILieuInformation {
        codeLieuOccupation: string;
        codePrioriteAffichageLieu: string;
        libelleLongLieu: string;
        libelleCourtLieu: string;
        typeLieuContact: string;
        indicateurAutorisationLieu: string;
        indicateurLieuAgence: boolean;
        codeOrigineAdministration: string;
        dateDebutValiditeLieu: StringDateISO;
        dateFinValiditeLieu: StringDateISO;
        premierLibLettreCommerciale: string;
        indExplParPrst: boolean;
        dateDebutValiditeLieu_Date: Date;
        dateFinValiditeLieu_Date: Date;
        constructor();
        constructor(obj: ILieuInformation);
    }
    interface IGetParam {
        codeEtablissement: string;
        codeValiditeParametre: string;
    }
    class GetParam extends Base implements IGetParam {
        codeEtablissement: string;
        codeValiditeParametre: string;
        constructor();
        constructor(obj: IGetParam);
    }
    class GetService extends MyWay.RestRessource.GetBaseService<GetParam | IGetParam, Lieu | ILieu> {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
    type IPutParam = ILieu;
    type PutParam = Lieu;
    class PutService extends MyWay.RestRessource.PutBaseService<PutParam | IPutParam, Lieu | ILieu> {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
    type IPostParam = ILieu;
    type PostParam = Lieu;
    class PostService extends MyWay.RestRessource.PostBaseService<PostParam | IPostParam, Lieu | ILieu> {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
    interface IDeleteParam {
        codeEtablissement: string;
        codeLieuOccupation: string;
    }
    class DeleteParam extends Base implements IDeleteParam {
        codeEtablissement: string;
        codeLieuOccupation: string;
        constructor();
        constructor(obj: IGetParam);
    }
    class DeleteService extends MyWay.RestRessource.DeleteBaseService<DeleteParam> {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module MyWay.RestRessource.Garrage {
    /**
     * Les classes suivantes sont un exemple qui ne sert (vraiement) à rien autre que de montrer un cas d'utilisations.
     *
     */
    interface IGarrageCaracteristique {
        codePostale: string;
        capacite: number;
    }
    class GarrageCaracteristique extends Base implements IGarrageCaracteristique {
        codePostale: string;
        capacite: number;
        constructor();
        constructor(obj: IGarrageCaracteristique);
    }
    interface IVoiture {
        modele: string;
        marque: string;
        dateFabrication: StringDateISO;
        dateMiseEnCirculation: StringDateCOMPACT;
        datePremiereVente: StringDateDISPLAY;
        moteurEssence: boolean;
        puissance: number;
    }
    class Voiture extends Base implements IVoiture {
        modele: string;
        marque: string;
        dateFabrication: StringDateISO;
        dateMiseEnCirculation: StringDateCOMPACT;
        datePremiereVente: StringDateDISPLAY;
        moteurEssence: boolean;
        puissance: number;
        constructor();
        constructor(obj: IVoiture);
        dateFabrication_Date: Date;
        dateMiseEnCirculation_Date: Date;
        datePremiereVente_Date: Date;
    }
    interface IGarrage {
        nom: string;
        caracteristique: IGarrageCaracteristique;
        voitures: Array<IVoiture>;
    }
    class Garrage extends Base implements IGarrage {
        nom: string;
        caracteristique: IGarrageCaracteristique;
        voitures: Array<IVoiture>;
        constructor();
        constructor(obj: IVoiture);
    }
}

declare module MyWay.RestRessource {
    type StringDateISO = string;
    type StringDateCOMPACT = string;
    type StringDateDISPLAY = string;
    enum EStringDateFormat {
        ISO = 0,
        COMPACT = 1,
        DISPLAY = 2,
    }
    /**
     * TypeHelper apporte des outils d'aide pour le typage des données.
     *
     * @TODO : Améliorer le traitement des throw par une classe nomalisée.
     */
    class TypeHelper {
        /**
         * Stringify les enums
         *
         * @param {EStringDateFormat} e - L'enum
         * @return {string} Le format en string. ex : EStringDateFormat.ISO -> "AAAA-MM-JJ" ou undefined si non pris en compte.
         */
        static enumToString(e: EStringDateFormat): string;
        /**
         * Determine si le type de l'objet est 'number'
         *
         * @param {any} x - Un object quelconque
         * @return {boolean} true si le type est number sinon false dans tous les autres cas
         */
        static isNumber(x: any): boolean;
        /**
         * Determine si le type de l'objet est 'string'
         *
         * @param {any} x - Un object quelconque
         * @return {boolean} true si le type est string sinon false dans tous les autres cas
         */
        static isString(x: any): boolean;
        /**
         * Determine si le type de l'objet est 'boolean'
         *
         * @param {any} x - Un object quelconque
         * @return {boolean} true si le type est boolean sinon false dans tous les autres cas
         */
        static isBoolean(x: any): boolean;
        /**
         * Determine si le type de l'objet est un 'objet' javascript ex : var  x = {firstName:"John", lastName:"Doe"};
         *
         * @param {any} x - Un object quelconque
         * @return {boolean} true si le type est Object sinon false dans tous les autres cas
         */
        static isObject(x: any): boolean;
        /**
         * Determine si le type de l'objet est un 'Date' javascript ex : var  x = new Date();
         *
         * @param {any} x - Un object quelconque
         * @return {boolean} true si le type est Date sinon false dans tous les autres cas
         */
        static isDate(x: any): boolean;
        static isArray(x: any): boolean;
        static isDefined(x: any): boolean;
        static isUndefined(x: any): boolean;
        /**
         * Crée une date au format string avec la date du moment
         *
         * @param {EStringDateFormat} format - Un object quelconque
         * @return {string} la date au format demandé par EStringDateFormat.
         * @throws {Error} Exception si la création échoue.
         */
        static nowDate(format: EStringDateFormat): string;
        /**
         * Convertion de string en Date selon the format indiqué par EStringDateFormat.
         * La string en entrée doit être dans le format indiqué par EStringDateFormat.
         *
         * @param {string} value - La valeur string à convertir
         * @param {EStringDateFormat} formatEntree - Le format dans lequel est la vleur string.
         * @return {Date} la date au format Date.Les heures minutes et secondes sont à 0.
         * @throws {Error} Exception si la conversion échoue.
         *
         * @TOOD Ajouter un contrôle sur le format passé.
         */
        static stringToDate(value: string, formatEntree: EStringDateFormat): Date;
        /**
         * Convertion de Date en string selon the format indiqué par EStringDateFormat.
         * La string en sortie sera dans le format indiqué par EStringDateFormat.
         *
         * @param {Date} value - La valeur de type Date
         * @param {EStringDateFormat} format - Le format dans lequel est la valeur sera convertie.
         * @return {Date} la date au format Date.Les heures minutes et secondes sont à 0.
         * @throws {Error} Exception si la conversion échoue.
         */
        static dateToString(date: Date, formatSortie: EStringDateFormat): string;
        /**
         * Ajoute ou retirer un nombre de jour 'nombreDeJour' à une date de type Date.
         *
         * @param {Date} date - La valeur à laquelle il faut ajouterou retirer des jours.
         * @param {number} nombreDeJour - Le nombre de jour. Si la valeur est positive ajoute les jours, si négatif, les retire.
         * @return {Date} la date avec les jours ajoutés ou retiré. Renvoie null si date ou nombreDeJour null ou non undefined.
         */
        static addDays(date: Date, nombreDeJour: number): Date;
        /**
         * Convertie des valeurs de string ou valeur boolean selon un tableau de valeurs possible pour true et pour false.
         * @param {sting} value - La valeurà convertir en boolean
         * @param {string[]} trueValues - Un tableau de valeurs possbile pour true: Ex : ['O','o', 'oui', 'yes', 'ok']
         * @param {string[]} falseValues - Un tableau de valeurs possbile pour false: Ex : ['N','n', 'non', 'no', 'ko']
         * @return {boolean} la valeur convertie ou undefined si la valeur n'est pas dans letableau des trueValues et falseValues
         *
         *  @TODO : traiter uppercase , lowercase ...
         */
        static stringToBoolean(value: string, trueValues: string[], falseValues: string[]): boolean;
    }
}
