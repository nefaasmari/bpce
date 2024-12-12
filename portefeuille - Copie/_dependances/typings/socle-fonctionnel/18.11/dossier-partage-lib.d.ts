
declare module MyWay.OsCaiss.DossierPartage.Lib {
    var app: any;
    class Manifeste {
        static moduleNom: string;
        static version: string;
        static serviceApplication: string;
        static restEspacePartageV1DossierPartage: string;
        static restEspacePartageV1DocumentFourni: string;
        static restEspacePartageV1MotifRefus: string;
        static restEspacePartageV1ParametrageDossier: string;
    }
    class DependanceMetier {
    }
}

declare module MyWay.OsCaiss.DossierPartage.Enum {
    class StatutDocumentFourni {
        static demande: string;
        static enTransfert: string;
        static aValider: string;
        static refuse: string;
        static valide: string;
    }
}

declare module MyWay.OsCaiss.TablesDelocalisees {
    class TdStatutDocumentFourni extends TableDelocalisee {
        static demande: string;
        static enTransfert: string;
        static aValider: string;
        static refuse: string;
        static valide: string;
        static getLibelle(aCode: string): string;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Interface {
    class Contexte {
        static TITRE: string;
        static SOUS_TITRE: string;
        static ID_DOSSIER_PARTAGE: string;
        static LISTE_DOCUMENTS_A_CONTROLER: string;
        static LISTE_DOCUMENTS_VALIDES: string;
        static CONTROLER_DOSSPARTG_E1: string;
        static CONTROLER_DOSSPARTG_S1: string;
    }
    class DocumentAControler {
        /**
         * Idenfifiant du document dans le dossier de partage
         */
        idDoc: number;
        /**
         * Indique si la date d'émission doit être saisie
         */
        dateEmssOblig: boolean;
    }
    /**
     *
     */
    class ControlerEntree1 {
        /**
         * Optionnel. Si valorisé, est utilise comme titre de la SPA.
         */
        personnalisationTitre: string;
        /**
         * Optionnel. Si valorisé, est utilise comme sous-titre de la SPA.
         */
        personnalisationSousTitre: string;
        /**
         * Obligatoire. Code application interne.
         */
        codeAppliInttDossPartg: string;
        /**
         * Obligatoire. Identifiant externe du dossier de partage.
         */
        idntExtnDossPartg: string;
        /**
         * Optionnel. Si présent, seuls les documents ayant un id dans cette liste sont controlés.
         * Sinon, tous les documents en attente de validation sont contrôlés (?? hors périmètre).
         */
        listeDocumentAControler: DocumentAControler[];
        /**
         * Indique si la SPA enregistre les validations. Dans le cas contraire, il appartient à une étape ultérieure de le faire, avec le repport de contrôle déposé dans le contexte.
         */
        enregistrerValidation: boolean;
        /**
         * Indique si la SPA enregistre les validations. Dans le cas contraire, il appartient à une étape ultérieure de le faire, avec le repport de contrôle déposé dans le contexte.
         */
        enregistrerRefus: boolean;
        constructor();
    }
    enum EtatValidation {
        aFaire = 0,
        valide = 1,
        refuse = 2,
    }
    class Controle {
        idDocFourni: number;
        etat: EtatValidation;
        cdNature: string;
        dateEmission: Date;
        cdRefus: string;
        txtRefus: string;
        codeCritInjcAcqs: string;
        idntExtrDemnDocm: string;
        idntDocmGed: string;
    }
    class ControlerSortie1 {
        controles: Array<Controle>;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Rest.EspacePartageV1.DocumentFourni {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IValiderDocumentFourniQstn {
        /**
         * Identifiant du document fourni généré par un composteur dans le service de création d'un document fourni
         */
        idntDocFour: number;
        /**
         * Nature du document cohérent avec le référentiel Catalogue GED Mysys.
         */
        codeNatrDocGestElctDoc: string;
        /**
         * Date d'emission du document
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateEmss: Date;
        /**
         * Identifiant de l'utilisateur
         */
        agnt: string;
        /**
         * Identifiant de l'agence de l'utilisateur
         */
        agncUtls: string;
    }
    interface IValiderDocumentFourniRspn {
        /**
         * Boolean indiquant la validité ou non du document fourni
         */
        docmFourValid: boolean;
    }
    interface IRefuserDocumentFourniQstn {
        /**
         * Code du motif de refus de validation du document fourni
         */
        codeMotfRefuDocmFour: string;
        /**
         * Libellé commentaire refus du document fourni
         */
        liblCommRefuDocmFour: string;
        /**
         * Identifiant de l'utilisateur.
         */
        agnt: string;
        /**
         * Identifiant du document fourni généré par un composteur dans le service de création d'un document fourni
         */
        idntDcomFour: number;
    }
    interface IRefuserDocumentFourniRspn {
        /**
         * Identifiant du document fourni.
         */
        idntDocFour: number;
    }
    interface ICreerDocumentFourniCanalAgenceQstn {
        /**
         * Identifiant unique de la demande de documents.
         */
        idntDemnDocm: number;
        /**
         * Nature du document se trouvant dans le catalogue GED
         */
        codeNatr: string;
        /**
         * Code de l'agent
         */
        agnt: string;
        /**
         * Identifiant du document dans la GED filenet
         */
        idntDocGed: string;
    }
    interface ICreerDocumentFourniCanalAgenceRspn {
        /**
         * Identifiant du document fourni généré par un composteur dans le service de création d'un document fourni
         */
        idntDocFour: number;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Rest.EspacePartageV1.DocumentFourni {
    class Service extends OsCaiss.Lib.Rest.RacineRestService {
        static id: string;
        static url: string;
        static urlValider: string;
        static urlRefuser: string;
        static urlCreerDocumentAgence: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        valider(agncUtls: string, referenceExterneAgent: string, idntDocFour: number, codeNatrDocGestElctDoc: string, dateEmss: Date): ng.IPromise<boolean>;
        refuser(agnt: string, idntDcomFour: number, codeMotfRefuDocmFour: string, liblCommRefuDocmFour: string): ng.IPromise<number>;
        creerDocumentAgence(idntDemnDocm: number, codeNatr: string, agnt: string, idntDocGed: string): ng.IPromise<number>;
        creerDocumentAgenceWithStatus(document: ICreerDocumentFourniCanalAgenceQstn): ng.IPromise<number>;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Rest.EspacePartageV1.DossierPartage {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    class ModeRestitutionNatures {
        static catalogue: string;
        static bapi: string;
        static bapiEtCatalogue: string;
    }
    class SensTranfertDocument {
        /**
         * Entrant ==> Le document est fournit par le client en direction de la banque
         */
        static entrant: string;
        /**
         * S : Sortant ==> Le document est founit par la banque en direction du client
         */
        static sortant: string;
    }
    class StatutDocumentFourni {
        /**
         * DEM : Demandé, le document est à transmettre
         */
        static demande: string;
        /**
         * EAV : Le document est en attente de validation pour vérifier sa conformité
         */
        static attenteValidattion: string;
        /**
         * VCA : Le document est validé et il est en attente d'archivage
         */
        static attenteArchivage: string;
        /**
         * REF : Le document a été refusé
         */
        static refuse: string;
        /**
         * TRT : Le document a été traité
         */
        static traite: string;
    }
    class CanalAcquisition {
        static agence: string;
        static web: string;
    }
    interface IGetById {
        idntDossPartg: number;
        modeRestNatr: string;
    }
    interface IGetByIdExterne {
        codeAppliInttDossPartg: string;
        idntExtnDossPartg: string;
        codeEtabBanc: string;
        modeRestNatr: string;
    }
    interface ICsultDossPartgRspn {
        csultDossPartg: ICsultDossPartg;
    }
    interface ICsultDossPartg {
        /**
         * Identifiant du dossier de partage généré par un composteur dans le service de création d'un dossier de partage.
         */
        idntDossPartg: number;
        /**
         * Code déterminant un établissement bancaire.
         */
        codeEtabBanc: string;
        /**
         * Code application correspondant à l'application qui a demandé la création du dossier de partage.
         * Exemple : DNC, CLACLI, etc…
         */
        codeAppliInttDossPartg: string;
        /**
         * Identifiant du Dossier de partage fournis par l'application qui a initié le dossier de partage
         */
        idntExtnDossPartg: string;
        /**
         * Identifiant de l'application à l'origine de la création de ce doucment.
         */
        idntCmpstApplf: string;
        /**
         * Libelle fonctionnel du Dossier de partage permettant de comprendre le contexte donnant lieu à l'échange de document ( ex : Dossier de crédit 123456)
         */
        liblDossPartg: string;
        /**
         * Date de création
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCrtn: Date | string;
        /**
         * Date de mise à jour
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModf: Date | string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la création
         */
        idntUtilCrtn: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la modification
         */
        idntUtilModf: string;
        listCsultDemnDocm: Array<ICsultDemnDocm>;
        /**
         * Statut d'un dossier de partage
         * - OUV : Le dossier de partage est ouvert
         * - CLO : Le dossier de partage est clos
         */
        codeStttDossPartg: string;
        /**
         * Permet d'indiquer si le dossier de partage est visible en externe. True = visible à l'extérieur, false = non visible de l'exterieur
         */
        indicVisbExtr: boolean;
        /**
         * Date de modification de l'indicateur de visibilite
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModfIndicVisbExtr: Date | string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la modification de l'indicateur de visiblité
         */
        idntUtilModfIndicVisbExtr: string;
    }
    interface ICsultDossPartgByIdQstn {
        /**
         * Identifiant technique du dossier de partage pouvant être converti en nombre
         */
        idntDossPartg: string;
    }
    interface ICsultDemnDocm {
        /**
         * Identifiant unique de la demande de document.
         */
        idntDemnDocm: number;
        /**
         * Identifiant externe du document au sein de l'application initiatrice du Dossier de partage.
         */
        idntExtrDemnDocm: string;
        /**
         * Libelle fonctionnel du document attendu,
         */
        liblNomDemnDocm: string;
        /**
         * Description du document à échanger. Permet d'indiquer précisément ce qui est attendu
         * Ex : (Facture EDF de moins de 3 mois ou quittance de loyer)
         */
        liblDescDemnDocm: string;
        /**
         * Code permettant de déterminer le sens de transfert du document :
         * 2 valeurs possibles :
         * - E : Entrant ==> Le document est fournit par le client en direction de la banque
         * - S : Sortant ==> Le document est founit par la banque en direction du client
         */
        codeSensTrnsDemnDocm: string;
        /**
         * Code définisant le type de porteur auquel est associé le document :
         * 1 : contrat
         * 2 : personne
         * 7 : client bancaire
         */
        codeTypAttrDocm: string;
        /**
         * Identifiant attributaire primaire du porteur du document
         */
        idntAttrbPrmr: string;
        /**
         * Identifiant attributaire secondaire du porteur du document
         */
        idntAttrbSecn: string;
        /**
         * Libelle fonctionnel de l'attributaire (Nom de la personne, numéro du contrat
         */
        liblAttrb: string;
        /**
         * Ce code indique la GED (Gestion Electronique de Documents)  cible pour l'injection du document.
         * Valeurs :
         * -'T' : GED Transitoire ;
         * -'A' : GED Archivages.
         */
        codeCritInjcAcqs: string;
        listCsultDocmFour: Array<ICsultDocmFour>;
        listNatr: Array<INatr>;
        /**
         * Statut d'une demande de document
         * - OUV : La demande de document est ouverte
         * - VAL : La demande de document est satisfaite
         */
        codeStttDemnDocm: string;
        /**
         * Date de création
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCrtn: Date | string;
        /**
         * Date de mise à jour
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModf: Date | string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la création
         */
        idntUtilCrtn: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la modification
         */
        idntUtilModf: string;
        listCsultDestDemnDocm: Array<ICsultDestDemnDocm>;
        /**
         * Type de demande de document
         * 1 : Mono-document
         * 2: Multi-document
         */
        typeDemnDocm: string;
        listNatrBAPI: Array<INatrBAPI>;
        /**
         * Libellé de la catégorie de demande de document. Exemple Etat Civil
         */
        catgDemnDocm: string;
        /**
         * Numéro d'ordre de la catégorie de demande document
         */
        ordrCatgDemnDocm: number;
    }
    interface INatr {
        /**
         * Code nature
         */
        codeNatr: string;
        /**
         * Libellé nature
         */
        liblNatr: string;
    }
    interface ICsultDocmFour {
        /**
         * Identifiant unique du document fourni
         */
        idntDocmFour: number;
        /**
         * Nature du document cohérent avec le référentiel Catalogue GED Mysys.
         */
        codeNatrDocmGestElctDocm: string;
        /**
         * Libellé du code nature du document
         */
        liblNatrDocmGestElctDocm: string;
        /**
         * Identifiant FileNet du document. Numero unique du document.
         */
        idntDocmGed: string;
        /**
         * Code du motif de refus de validation du document fourni
         */
        codeMotfRefuDocmFour: string;
        /**
         * Libellé du motif de refus de validation du document fourni
         */
        liblMotfRefuDocmFour: string;
        /**
         * Libellé commentaire refus du document fourni
         */
        liblCommRefuDocmFour: string;
        /**
         * Statut du document fourni au sein de l'espace de partage :
         * - DEM : Demandé, le document est à transmettre
         * - EAV : Le document est en attente de validation pour vérifier sa conformité
         * - VCA : Le document est validé et il est en attente d'archivage
         * - REF : Le document a été refusé
         * - TRT : Le document a été traité
         */
        codeStttDocmFour: string;
        listHistDocmFourRefuse: Array<IHistDocmFourRefuse>;
        /**
         * Date de création
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCrtn: Date | string;
        /**
         * Numéro de personne ayant effectué la création
         */
        numrPersCrtn: number;
        /**
         * Date de décision
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDecs: Date | string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la décision
         */
        idntUtilDecs: string;
        /**
         * Date de récupération du fichier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateRecupFichier: Date | string;
        /**
         * Code nature BAPI
         * Présent uniquement si le code nature BAPI est différent du code nature
         */
        codeNatrBAPI: string;
        /**
         * Libelle du code nature BAPI
         * Présent uniquement si le code nature BAPI est différent du code nature
         */
        liblNatrBAPI: string;
        /**
         * Canal d'acquisition (W : Web, A : Agence)
         */
        canlAcqs: string;
    }
    interface IHistDocmFourRefuse {
        /**
         * Identifiant unique du document fourni
         */
        idntDocmFour: number;
        /**
         * Nature du document cohérent avec le référentiel Catalogue GED Mysys.
         */
        codeNatrDocmGestElctDocm: string;
        /**
         * Libellé du code nature du document
         */
        liblNatrDocmGestElctDocm: string;
        /**
         * Identifiant FileNet du document. Numero unique du document.
         */
        idntDocmGed: string;
        /**
         * Code du motif de refus de validation du document fourni
         */
        codeMotfRefuDocmFour: string;
        /**
         * Libellé du motif de refus de validation du document fourni
         */
        liblMotfRefuDocmFour: string;
        /**
         * Libellé commentaire refus du document fourni
         */
        liblCommRefuDocmFour: string;
        /**
         * - DEM : Demandé, le document est à transmettre
         * - EAV : Le document est en attente de validation pour vérifier sa conformité
         * - VCA : Le document est validé et il est en attente d'archivage
         * - REF : Le document a été refusé
         * - TRT : Le document a été traité
         */
        codeStttDocmFour: string;
        /**
         * Date de création
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCrtn: Date | string;
        /**
         * Numéro de personne ayant effectué la création
         */
        numrPersCrtn: number;
        /**
         * Date de décision
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDecs: Date | string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la décision
         */
        idntUtilDecs: string;
        /**
         * Date de récupération du fichier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateRecupFichier: Date | string;
        /**
         * Code nature BAPI
         * Présent uniquement si le code nature BAPI est différent du code nature
         */
        codeNatrBAPI: string;
        /**
         * Libelle du code nature BAPI
         * Présent uniquement si le code nature BAPI est différent du code nature
         */
        liblNatrBAPI: string;
        /**
         * Canal d'acquisition (W : Web, A : Agence)
         */
        canlAcqs: string;
    }
    interface ICsultDestDemnDocm {
        /**
         * Code indiquant le destinataire de la demande de documents
         */
        codeDescDemnDocm: string;
        /**
         * Identifiant du destinataire de la demande de documents
         */
        idntDestDemnDocm: string;
    }
    interface ICsultDemnDocQstn {
        /**
         * Identifiant unique de la demande de document.
         */
        idntDemnDocm: number;
        /**
         * Mode de restitution des natures dans une demande de document
         * - 0 : Restitution des Natures catalogues
         * - 1 : Restitution des natures BAPI
         * - 2 : Restitution des natures BAPI et Catalogue
         */
        modeRestNatr: string;
    }
    interface INatrBAPI {
        /**
         * Code nature BAPI
         */
        codeNatrBAPI: string;
        /**
         * Libellé nature BAPI
         */
        liblNatrBAPI: string;
        /**
         * Description de la nature BAPI
         */
        descNatrBAPI: string;
    }
    interface IModifierIndicateurVisibiliteExterneQstn {
        /**
         * Code déterminant un établissement bancaire.
         */
        codeEtabBanc: string;
        /**
         * Code application correspondant à l'application qui a demandé la création du dossier de partage.
         * Exemple : DNC, CLACLI, etc…
         */
        codeAppliInttDossPartg: string;
        /**
         * Identifiant du Dossier de partage fournis par l'application qui a initié le dossier de partage
         */
        idntExtnDossPartg: string;
        /**
         * Permet d'indiquer si le dossier de partage est visible en externe. True = visible à l'extérieur, false = non visible de l'exterieur
         */
        indicVisbExtr: boolean;
        /**
         * Identifiant de l'utilisateur
         */
        agnt: string;
    }
    interface IModifierIndicateurVisibiliteExterneRspn {
        /**
         * Permet d'indiquer si le dossier de partage est visible en externe. True = visible à l'extérieur, false = non visible de l'exterieur
         */
        indicVisbExtr: boolean;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Rest.EspacePartageV1.DossierPartage {
    class Service extends OsCaiss.Lib.Rest.RacineRestService {
        static id: string;
        static url: string;
        static urlByIdExterne: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        lireDossierPartage(codeEtabBanc: string, codeAppliInttDossPartg: string, idntExtnDossPartg: string, modeRestNatr?: string): ng.IPromise<DossierPartage.ICsultDossPartgRspn>;
        lireDossierPartageById(idDossierPartage: number, modeRestNatr?: string): ng.IPromise<DossierPartage.ICsultDossPartgRspn>;
        modifierVisibilite(
            /**
             * Code déterminant un établissement bancaire.
             */
            codeEtabBanc: string, 
            /**
             * Code application correspondant à l'application qui a demandé la création du dossier de partage.
             * Exemple : DNC, CLACLI, etc…
             */
            codeAppliInttDossPartg: string, 
            /**
             * Identifiant du Dossier de partage fournis par l'application qui a initié le dossier de partage
             */
            idntExtnDossPartg: string, 
            /**
             * Permet d'indiquer si le dossier de partage est visible en externe. True = visible à l'extérieur, false = non visible de l'exterieur
             */
            indicVisbExtr: boolean, 
            /**
             * Identifiant de l'utilisateur
             */
            agnt: string): ng.IPromise<boolean>;
        formatterICsultDossPartg(objet: DossierPartage.ICsultDossPartg): void;
        formatterICsultDemnDocm(objet: DossierPartage.ICsultDemnDocm): void;
        formatterICsultDocmFour(objet: DossierPartage.ICsultDocmFour): void;
        formatterIHistDocmFourRefuse(objet: DossierPartage.IHistDocmFourRefuse): void;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Rest.EspacePartageV1.MotifRefus {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IRetournerMotifRefusDossPartgQstn {
    }
    interface IRetournerMotifRefusDossPartgRspn {
        listMotifRefus: Array<IMotifRefusDossPartg>;
    }
    class CodeMotifRefus {
        static motifTechnique: string;
        static motifUtilisateur: string;
    }
    interface IMotifRefusDossPartg {
        codeMotfRefuDocmFour: string;
        liblMotfRefuDocmFour: string;
        codeIndicCommtRefuOblg: boolean;
        liblDeftCommtRefu: string;
        codeIndicUtilSais: string;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Rest.EspacePartageV1.MotifRefus {
    class Service extends OsCaiss.Lib.Rest.RacineRestService {
        static id: string;
        static url: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        lire(): ng.IPromise<IRetournerMotifRefusDossPartgRspn>;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Rest.EspacePartageV1.ParametrageDossier {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IRecupererParametrageDossierPartageQstn {
        /**
         * Code déterminant un établissement bancaire.
         */
        codeEtabBanc: string;
        /**
         * Code application correspondant à l'application qui a demandé la création du dossier de partage.
         * Exemple : DNC, CLACLI, etc…
         */
        codeAppliInttDossPartg: string;
    }
    interface IRecupererParametrageDossierPartageRspn {
        /**
         * Permet d'indiquer si le dossier de partage est  créer par défaut visible ou non. True =créé  visible à l'extérieur, false =créé  non visible de l'exterieur
         */
        codeIndcVisbExtrAutmCrtn: boolean;
        /**
         * Permet d'indiquer si le conseiller à la main pour modifier la visibilité du dossier de partage. True =il peut modifier l'indicateur de visibilité, false =il ne peut pas le modifer
         */
        codeActvManlIndcVisbExtr: boolean;
    }
}

declare module MyWay.OsCaiss.DossierPartage.Lib.Rest.EspacePartageV1.ParametrageDossier {
    class Service extends OsCaiss.Lib.Rest.RacineRestService {
        static id: string;
        static url: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        lireParametrage(codeEtabBanc: string, codeAppliInttDossPartg: string): ng.IPromise<IRecupererParametrageDossierPartageRspn>;
    }
}
