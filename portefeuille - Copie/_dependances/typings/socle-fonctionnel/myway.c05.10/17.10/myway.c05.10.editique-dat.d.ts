/** ne pas supprimer sert pour le done des tests asynchrones */
interface IDoneFn extends Function {
    (): void;
    /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
    fail: (message?: Error | string) => void;
}

declare module myway.gestionEpargne.editiqueDat {
    var editiqueDatModule: any;
}

declare module myway.gestionEpargne.editiqueDat {
    class MessageErreurEditique {
        id: number;
        libelleErreur: string;
        constructor(id: number, libelleErreur: string);
    }
    class EditiqueDatControleur {
        private $q;
        private $rootScope;
        private $timeout;
        private serviceAgentExtended;
        private contexteEditiqueMockService;
        private editPreContratDATService;
        private mappingModelGcePreContratRestService;
        private utileCommunService;
        private editConditionParticuliereService;
        private mappingModelGceConditionParticuliereRestService;
        private gceDocPartieTechniquePreContratService;
        private gceDocPartieTechniqueConditionParticuliereService;
        private creationBordereauService;
        private impressionBordereauService;
        static $inject: string[];
        static CONTEXTE_GGHO_EDITIQUE: string;
        private contexteEditiqueGGHO;
        private editPreContratDAT;
        private editCondPart;
        private donneesAuthentication;
        private documentPrecontratGGHO;
        private documentConditionParticuliereGGHO;
        private documentBope;
        private loaderVisible;
        private loaderEtat;
        private promessesMapping;
        private erreurDansEditique;
        private tableauErreurEditique;
        private currentId;
        private generationEnCoursMessageIndicateur;
        private generationTerminerOKMessageIndicateur;
        private pasDeDocumentMessageIndicateur;
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteEditiqueMockService: ContexteEditiqueMockService, editPreContratDATService: EditPreContratDATService, mappingModelGcePreContratRestService: MappingModelGcePreContratRestService, utileCommunService: UtileCommunService, editConditionParticuliereService: EditConditionParticuliereService, mappingModelGceConditionParticuliereRestService: MappingModelGceConditionParticuliereRestService, gceDocPartieTechniquePreContratService: GceDocPartieTechniquePreContratService, gceDocPartieTechniqueConditionParticuliereService: GceDocPartieTechniqueConditionParticuliereService, creationBordereauService: BordereauOperationService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService);
        /**
         * Le Point de départ SPA éditique
         * @returns {void}
         */
        private debutTraitementDocuments();
        /**
         * Permet de gérer tous les documents à générer pour les DATs
         * @returns {void}
         */
        EditionDocuments(): void;
        /**
         * Permet de gérer la partie technique GCE DOC après la construction du document mappé
         * @returns {void}
         */
        private gererPartieTechniqueTousDocuments();
        /**
         * Permet de gerer les paramètres d'impression ou d'archivage
         * @param {Array<any>} datas
         * @returns {void}
         */
        private gererParametresImpressionOuArchivage(datas);
        private gererImpressionOuArchivageBope(descriptionBordereauOperation);
        /**
         * Gérer l'impression par lot de tous les documents
         * @returns {void}
         */
        private gererImpression();
        /**
         * Gérer l'archivage de tous les documents
         * @param {Array<any>} datas
         * @returns {void}
         */
        private gererArchivage(datas);
        /**
         * Permet de gérer quand une erreur s'est produite dans l'archivages de documents => lancer une impression par lot
         * @param {Array<any>} datas
         * @returns {void}
         */
        private gererErreurArchivageDocument(datas);
        /**
         * Permet de gérer le document précontactuel
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentAImprimer
         * @returns {ng.IPromise<sibcgcePrecontractuelles.SibcgcePrecontractuelles>}
         */
        gestionDocumentPreContrat(documentAImprimer: GestionGeneriqueOffres.Types.IDocumentAImprimer): ng.IPromise<sibcgcePrecontractuelles.SibcgcePrecontractuelles>;
        /**
         * Permet de gérer le document des conditions particulière
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentAImprimer
         * @returns {ng.IPromise<sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01>}
         */
        gestionDocumentConditionParticuliere(documentAImprimer: GestionGeneriqueOffres.Types.IDocumentAImprimer): ng.IPromise<sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01>;
        private gestionDocumentBope(documentAImprimer);
        /**
         * Permet de gérer l'IHM quand il y a une erreur dans n'importe qu'elle étape de l'édition des documents
         * @param {MyWay.Services.Erreur} erreur
         * @returns {void}
         */
        private gestionErreurGenerationIHM(erreur);
        /**
         * Permet de gérer l'IHM quand l'édition des documents est fini
         * @returns {void}
         */
        private gestionFinGenerationDocumentsIHM();
        /**
         * Permet d'initialiser les message à afficher dans la SPA éditique pour chaque édition
         * @returns {void}
         */
        private initialiserMessagesEditique();
        /**
         * Permet de gérer le bouton continuer
         * @returns {void}
         */
        continuer(): void;
        /**
         * Permet de recommencer la génération des documents quand il y a une erreur
         * @returns {void}
         */
        recommencer(): void;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface IBlocBandeauClient extends sibcgcePrecontractuelles.BlocGenerique {
        map: IBandeauClient;
    }
    interface IBandeauClient {
        roleEtPersonnes: Array<IElementEditionRoleEtPersonne>;
        nombreDePersonnes: number;
        nombreDeRoles: number;
    }
    interface IElementEditionRoleEtPersonne {
        leRole: IElementEditionRole;
        lesPersonnes: Array<IElementEditionPersonne>;
    }
    interface IElementEditionRole {
        ELEMENT: string;
        LIB_CTDHLI: string;
    }
    interface IElementEditionPersonne {
        ELEMENT: string;
        numeroPersonne: number;
        infosPersonne: IPersonneFormatGenerique;
    }
    interface IPersonneFormatGenerique {
    }
    class TypePersonne {
        static PHYSIQUE: string;
        static MORALE: string;
    }
    /**
     * Modèle simplifié pour alimenter le bandeau personnes.
     */
    interface IClient {
        typePersonne: string;
        role: string;
        personnes: (IPersonnesPTitreRole | IInfosPers | IInfosPers2 | IInfosPers3 | IInfosPersVide | IPersonnesMTitreRole | IInfosPm)[];
    }
    interface IPersonnesPTitreRole {
        titreRole: IgenericInfoPpListePersonnesTitreRole;
    }
    interface IInfosPers {
        infosPers: IgenericInfoPpListePersonnesInfosPers;
    }
    interface IInfosPers2 {
        infosPers2: IgenericInfoPpListePersonnesInfosPers2;
    }
    interface IInfosPers3 {
        infosPers3: IgenericInfoPpListePersonnesInfosPers3;
    }
    interface IInfosPersVide {
        infosPersVide: number;
    }
    interface IgenericInfoPpListePersonnesTitreRole {
        libCtdhli: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers {
        lidacv: string;
        lidanm: string;
        nomPrenomClient: string;
        libCodirc: string;
        dadana: string;
        lidgilNaissance: string;
        lidgv26: string;
        lidgna: string;
        idnsbd: string;
        nodatpClient: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers2 {
        lidacv2: string;
        nomPrenomClient2: string;
        lidanm2: string;
        nomUsage2: string;
        libCodirc2: string;
        dadana2: string;
        lidgilNaissance2: string;
        lidgv262: string;
        lidgna2: string;
        idnsbd2: string;
        nodatpClient2: string;
        situationFamille2: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers3 {
        lidacv3: string;
        nomPrenomClient3: string;
        lidanm3: string;
        nomUsage3: string;
        libCodirc3: string;
        dadana3: string;
        lidgilNaissance3: string;
        lidgv263: string;
        lidgna3: string;
        idnsbd3: string;
        nodatpClient3: string;
        situationFamille3: string;
        regimeMatrimonial3: string;
    }
    interface IPersonnesMTitreRole {
        titreRole: IgenericInfoPmListePersonnesTitreRole;
    }
    interface IInfosPm {
        infosPm: IgenericInfoPmListePersonnesInfosPm;
    }
    interface IgenericInfoPmListePersonnesInfosPm {
        lidars: string;
        dadatj: string;
        lidgv26: string;
        idnsbd: string;
        nodatp: string;
    }
    interface IgenericInfoPmListePersonnesTitreRole {
        libCtdhli: string;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface IDocumentAImprimerOuAArchiver {
        identifiant: string;
        libelleDocument: string;
        document: Object;
        parametreDocumentsGeneration: ParametreDocumentsGenerationArchivage;
        parametreDocumentsArchivage: ParametreDocumentsGenerationArchivage;
        parametreDocumentsImpression: ParametreDocumentsImpression;
        parametresActiveXGlobaux?: MyWay.Services.Impression.ParametresActiveXGlobaux;
    }
    interface IParametres {
    }
    class CodeTypeDocument {
        static PRCT: string;
        static CPAR: string;
        static OUBL: string;
        static AVBL: string;
        static CLBL: string;
        static NB2S: string;
        static BOPE: string;
        static OUEC: string;
        static MDPS: string;
        static OU05: string;
        static OU01: string;
        static OU10: string;
        static OU11: string;
        static OU06: string;
        static OUGF: string;
        static OUGP: string;
        static OULE: string;
        static OULI: string;
        static OU12: string;
        static OU13: string;
        static OU14: string;
        static OU15: string;
        static OU16: string;
        static AV01: string;
        static AV05: string;
        static AV06: string;
        static AVLE: string;
        static AV10: string;
        static AV11: string;
        static AV12: string;
        static AV13: string;
        static AV14: string;
        static AV15: string;
        static AV16: string;
        static LA00: string;
        static LA01: string;
        static LAGP: string;
        static LAGF: string;
        static LALI: string;
        static LA05: string;
        static LA06: string;
        static LA10: string;
        static LA11: string;
        static LA16: string;
        static LAQA: string;
        static LAOP: string;
        static BORE: string;
        static PJVM: string;
        static ACDB: string;
    }
    /** Liste des TypeElements Precontractuelle */
    class TypeElementPreContractuelle {
        static BLOC_EDITION: string;
        static BLOC_BANDEAU_CLIENT: string;
        static QUAD0203: string;
        static QUADRETO: string;
        static PRESTANCE: string;
        static CROISSANCE: string;
        static CAPCIEL: string;
        static INFLATION: string;
        static CATSLR: string;
    }
    /** Liste des TypeElements condition particulière */
    class TypeElementConditionParticuliere {
        static BLOC_EDITION: string;
        static BLOC_BANDEAU_CLIENT: string;
        static BLOC_CARACTERISTIQUE_CONTRAT_DAT: string;
    }
    class Signataire {
        nom: string;
        numeroPersonne: number;
        designataire: string;
        constructor();
    }
    interface IContenuBloc extends sibcgcePrecontractuelles.BlocGenerique {
        map: Object;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class OpeFiService {
        private saisieRiceService;
        static $inject: string[];
        constructor(saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        ajouterCleAuRib(ribSansCle: string): string;
        obtenirCleDepuisRibSansCle(ribSansCle: string): string;
        obtenirRiceDepuisRibSansCle(ribSansCle: string): MyWay.Model.Rice;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class UtileCommunService {
        private serviceAgentExtended;
        private $q;
        private opeFiService;
        static $inject: string[];
        static OU9P: string;
        static AV9P: string;
        static OU9R: string;
        static AV9R: string;
        static AV09: string;
        static OU09: string;
        static OUQA: string;
        private promessesArchivage;
        private promessesImpression;
        private dictionnaireIdntPJ;
        private documentsParLot;
        private parametresActiveXGlobaux;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, opeFiService: OpeFiService);
        /**
         * Permet de vérifier si le document à gérer est le document de condition particulière DAT ou pas
         * @param {string} codeTypeDocument
         * @returns {boolean}
         */
        estConditionParticuliereDAT(codeTypeDocument: string): boolean;
        /**
         * Permet d'imprimer un document
         * @param {IDocumentAImprimerOuAArchiver} documentAImprimer
         * @returns {void}
         */
        ajoutDocumentLiasseImpression(documentAImprimer: IDocumentAImprimerOuAArchiver): void;
        /**
         * Permet d'imprimer tous les documents
         * @returns {ng.IPromise<any>}
         */
        imprimerDocuments(): ng.IPromise<any>;
        /**
         * Permet d'archiver un document en GED temporaire
         * @param {IDocumentAImprimerOuAArchiver} documentAGenerer
         * @returns {void}
         */
        ajoutDocumentLiasseArchivage(documentAGenerer: IDocumentAImprimerOuAArchiver): void;
        ajouterContexteIdntPj(codeTypeDocument: string, idntPJ: string): void;
        ajoutDocumentBopeLiasseArchivage(descriptionBordereauOperation: DescriptionBordereauOperation, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): void;
        genererBopeEtAjoutDansDictionnaire(descriptionBordereauOperation: DescriptionBordereauOperation, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        /**
         * Permet de gérer le bouton continuer
         * @params {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * @returns {void}
         */
        continuer(contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): void;
        /**
         * Permet d'ajouter le dictionnaire des Idnt PJ dans le contexte de sortie
         * @params {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * @returns {ng.IPromise<any>}
         */
        archivageDocumentsEtLisaNext(contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ng.IPromise<any>;
        /**
         * Permet de formater le refActe de l'entete du docuement
         * @param {string} refActe
         * @returns {void}
         */
        formatterRefActe(refActe: string): string;
        /**
         * Permet de retourner le libelle de libNomAutre
         * @param {GestionGeneriqueOffres.Types.ISignataire[]} signataires
         * @returns {string}
         */
        chercherLibNomAutre(signataires: GestionGeneriqueOffres.Types.ISignataire[]): string;
        obtenitRICEavecCle(ribAvecOuSansCle: string): string;
    }
}

declare module myway.gestionEpargne.editiqueDat.sipxgceDatRembNpy5o01 {
    interface IsipxgceDatRembNpy5o01 {
        section1: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1[];
        genericEnteteets: sipxgceDatRembNpy5o01.IgenericEnteteets[];
        genericPiedpageets: sipxgceDatRembNpy5o01.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsipxgceDatRembNpy5o01Section1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04 | Ich05 | Ich06 | Ich07 | Ich08 | Ich09 | Ich010 | Ich011 | Ich012 | Ich013 | Ich014 | Ich015 | Ich016 | Ich017 | Ich018 | Ich019 | Ich020 | Ich021 | Ich022 | Ich023)[];
    }
    interface Ich00 {
        bl1: IsipxgceDatRembNpy5o01Section1Bl1;
    }
    interface Ich01 {
        genericInfoPp: IgenericInfoPp;
    }
    interface Ich02 {
        genericInfoPm: IgenericInfoPm;
    }
    interface Ich03 {
        bl2: IsipxgceDatRembNpy5o01Section1Bl2;
    }
    interface Ich04 {
        bl3: IsipxgceDatRembNpy5o01Section1Bl3;
    }
    interface Ich05 {
        bl10: IsipxgceDatRembNpy5o01Section1Bl10;
    }
    interface Ich06 {
        blReprlegTitre: IsipxgceDatRembNpy5o01Section1BlReprlegTitre;
    }
    interface Ich07 {
        bl4: IsipxgceDatRembNpy5o01Section1Bl4;
    }
    interface Ich08 {
        bl5: IsipxgceDatRembNpy5o01Section1Bl5;
    }
    interface Ich09 {
        bl3cr: IsipxgceDatRembNpy5o01Section1Bl3cr;
    }
    interface Ich010 {
        bl6: IsipxgceDatRembNpy5o01Section1Bl6;
    }
    interface Ich011 {
        bl7: IsipxgceDatRembNpy5o01Section1Bl7;
    }
    interface Ich012 {
        bl8: IsipxgceDatRembNpy5o01Section1Bl8;
    }
    interface Ich013 {
        bl9: IsipxgceDatRembNpy5o01Section1Bl9;
    }
    interface Ich014 {
        blCatr1: IsipxgceDatRembNpy5o01Section1BlCatr1;
    }
    interface Ich015 {
        blCatr2: IsipxgceDatRembNpy5o01Section1BlCatr2;
    }
    interface Ich016 {
        blPdpJustifie: IsipxgceDatRembNpy5o01Section1BlPdpJustifie;
    }
    interface Ich017 {
        blDemarchage: IsipxgceDatRembNpy5o01Section1BlDemarchage;
    }
    interface Ich018 {
        genricCertifStdProduit: IgenericCertifStdProduit;
    }
    interface Ich019 {
        certifStdQuadreto: IsipxgceDatRembNpy5o01Section1CertifStdQuadreto;
    }
    interface Ich020 {
        certifStdCat: IsipxgceDatRembNpy5o01Section1CertifStdCat;
    }
    interface Ich021 {
        genericLignevide: number;
    }
    interface Ich022 {
        genricSignatureStd: IgenericSignatureStd;
    }
    interface Ich023 {
        signatSansCnil: IsipxgceDatRembNpy5o01Section1SignatSansCnil;
    }
    interface IgenericEnteteets {
        logoEtablissement: sipxgceDatRembNpy5o01.IgenericEnteteetsLogoEtablissement;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        dateEdition: string;
        heureEdition: string;
        numRefdoc: string;
        codeBarre: string;
        refActe: string;
    }
    interface IgenericEnteteetsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: sipxgceDatRembNpy5o01.IgenericPiedpageetsB10175[];
        b13135: sipxgceDatRembNpy5o01.IgenericPiedpageetsB13135[];
        b13705: sipxgceDatRembNpy5o01.IgenericPiedpageetsB13705[];
        b14445: sipxgceDatRembNpy5o01.IgenericPiedpageetsB14445[];
        b14505: sipxgceDatRembNpy5o01.IgenericPiedpageetsB14505[];
        b15135: sipxgceDatRembNpy5o01.IgenericPiedpageetsB15135[];
        b15905: sipxgceDatRembNpy5o01.IgenericPiedpageetsB15905[];
        b15965: sipxgceDatRembNpy5o01.IgenericPiedpageetsB15965[];
        b16275: sipxgceDatRembNpy5o01.IgenericPiedpageetsB16275[];
        b18025: sipxgceDatRembNpy5o01.IgenericPiedpageetsB18025[];
        b18279: sipxgceDatRembNpy5o01.IgenericPiedpageetsB18279[];
        b43199: sipxgceDatRembNpy5o01.IgenericPiedpageetsB43199[];
        b18715: sipxgceDatRembNpy5o01.IgenericPiedpageetsB18715[];
        b13335: sipxgceDatRembNpy5o01.IgenericPiedpageetsB13335[];
        b17515: sipxgceDatRembNpy5o01.IgenericPiedpageetsB17515[];
        b62108: sipxgceDatRembNpy5o01.IgenericPiedpageetsB62108[];
        b12579: sipxgceDatRembNpy5o01.IgenericPiedpageetsB12579[];
        b13825: sipxgceDatRembNpy5o01.IgenericPiedpageetsB13825[];
        b16705: sipxgceDatRembNpy5o01.IgenericPiedpageetsB16705[];
        b12135: sipxgceDatRembNpy5o01.IgenericPiedpageetsB12135[];
        b14265: sipxgceDatRembNpy5o01.IgenericPiedpageetsB14265[];
        b13485: sipxgceDatRembNpy5o01.IgenericPiedpageetsB13485[];
        b18315: sipxgceDatRembNpy5o01.IgenericPiedpageetsB18315[];
        b11315: sipxgceDatRembNpy5o01.IgenericPiedpageetsB11315[];
        b11425: sipxgceDatRembNpy5o01.IgenericPiedpageetsB11425[];
        b12548: sipxgceDatRembNpy5o01.IgenericPiedpageetsB12548[];
        b30051: sipxgceDatRembNpy5o01.IgenericPiedpageetsB30051[];
    }
    interface IgenericPiedpageetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IgenericPiedpageetsB13135 {
        d13135L1: string;
    }
    interface IgenericPiedpageetsB13705 {
        d13705L1: string;
    }
    interface IgenericPiedpageetsB14445 {
        d14445L1: string;
    }
    interface IgenericPiedpageetsB14505 {
        d14505L1: string;
    }
    interface IgenericPiedpageetsB15135 {
        d15135L1: string;
    }
    interface IgenericPiedpageetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IgenericPiedpageetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IgenericPiedpageetsB16275 {
        d16275L1: string;
    }
    interface IgenericPiedpageetsB18025 {
        d18025L1: string;
    }
    interface IgenericPiedpageetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IgenericPiedpageetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IgenericPiedpageetsB18715 {
        d18715L1: string;
    }
    interface IgenericPiedpageetsB13335 {
        d13335L1: string;
    }
    interface IgenericPiedpageetsB17515 {
        d17515L1: string;
    }
    interface IgenericPiedpageetsB62108 {
        d62108L1: string;
    }
    interface IgenericPiedpageetsB12579 {
        d12579L1: string;
    }
    interface IgenericPiedpageetsB13825 {
        d13825L1: string;
    }
    interface IgenericPiedpageetsB16705 {
        d16705L1: string;
    }
    interface IgenericPiedpageetsB12135 {
        d12135L1: string;
    }
    interface IgenericPiedpageetsB14265 {
        d14265L1: string;
    }
    interface IgenericPiedpageetsB13485 {
        d13485L1: string;
    }
    interface IgenericPiedpageetsB18315 {
        d18315L1: string;
    }
    interface IgenericPiedpageetsB11315 {
        d11315L1: string;
    }
    interface IgenericPiedpageetsB11425 {
        d11425L1: string;
    }
    interface IgenericPiedpageetsB12548 {
        d12548L1: string;
    }
    interface IgenericPiedpageetsB30051 {
        d30051L1: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl1 {
        titre: string;
        d1: string;
    }
    interface IgenericSignatureStd {
        libDeladuEts: string;
        prenomNomAgent: string;
        alaEtab1: string;
        laEtab1: string;
        parlaEtab1: string;
        desaEtab1: string;
        delaEtab1: string;
    }
    interface IgenericCertifStdProduit {
        libLaleEts: string;
    }
    interface IgenericInfoPm {
        listePersonnes: sipxgceDatRembNpy5o01.IgenericInfoPmListePersonnes[];
    }
    interface IgenericInfoPmListePersonnes {
        blocChoiceJson: (Ich30 | Ich31)[];
    }
    interface Ich30 {
        titreRole: IgenericInfoPmListePersonnesTitreRole;
    }
    interface Ich31 {
        infosPm: IgenericInfoPmListePersonnesInfosPm;
    }
    interface IgenericInfoPmListePersonnesInfosPm {
        lidars: string;
        dadatj: string;
        lidgv26: string;
        idnsbd: string;
        nodatp: string;
    }
    interface IgenericInfoPmListePersonnesTitreRole {
        libCtdhli: string;
    }
    interface IgenericInfoPp {
        listePersonnes: sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnes[];
    }
    interface IgenericInfoPpListePersonnes {
        blocChoiceJson: (Ich20 | Ich21 | Ich22 | Ich23 | Ich24)[];
    }
    interface Ich20 {
        titreRole: IgenericInfoPpListePersonnesTitreRole;
    }
    interface Ich21 {
        infosPers: IgenericInfoPpListePersonnesInfosPers;
    }
    interface Ich22 {
        infosPers2: IgenericInfoPpListePersonnesInfosPers2;
    }
    interface Ich23 {
        infosPers3: IgenericInfoPpListePersonnesInfosPers3;
    }
    interface Ich24 {
        infosPersVide: number;
    }
    interface IgenericInfoPpListePersonnesInfosPers {
        lidacv: string;
        lidanm: string;
        nomPrenomClient: string;
        libCodirc: string;
        dadana: string;
        lidgilNaissance: string;
        lidgv26: string;
        lidgna: string;
        idnsbd: string;
        nodatpClient: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers2 {
        lidacv2: string;
        nomPrenomClient2: string;
        lidanm2: string;
        nomUsage2: string;
        libCodirc2: string;
        dadana2: string;
        lidgilNaissance2: string;
        lidgv262: string;
        lidgna2: string;
        idnsbd2: string;
        nodatpClient2: string;
        situationFamille2: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers3 {
        lidacv3: string;
        nomPrenomClient3: string;
        lidanm3: string;
        nomUsage3: string;
        libCodirc3: string;
        dadana3: string;
        lidgilNaissance3: string;
        lidgv263: string;
        lidgna3: string;
        idnsbd3: string;
        nodatpClient3: string;
        situationFamille3: string;
        regimeMatrimonial3: string;
    }
    interface IgenericInfoPpListePersonnesTitreRole {
        libCtdhli: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl10 {
        d7: string;
        d8: string;
        d10: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2 {
        lst2: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1Bl2Lst2[];
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2 {
        blocChoiceJson: (Ich10 | Ich11 | Ich12 | Ich13 | Ich14 | Ich15 | Ich16 | Ich17 | Ich18 | Ich19)[];
    }
    interface Ich10 {
        ligne1: IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne1;
    }
    interface Ich11 {
        ligne2: IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne2;
    }
    interface Ich12 {
        ligne3: IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne3;
    }
    interface Ich13 {
        ligne4: IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne4;
    }
    interface Ich14 {
        ligne8: IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne8;
    }
    interface Ich15 {
        ligne7: number;
    }
    interface Ich16 {
        ligne6: IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne6;
    }
    interface Ich17 {
        ligne5: IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne5;
    }
    interface Ich18 {
        ligne10: number;
    }
    interface Ich19 {
        ligne9: IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne9;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne1 {
        dl1a: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne2 {
        dl1b: string;
        dl2b: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne3 {
        dl1c: string;
        dl2c: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne4 {
        dl1d: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne5 {
        dl1e: string;
        dl2e: string;
        dl3e: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne6 {
        dl1f: string;
        dl2f: string;
        dl3f: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne8 {
        dl1g: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl2Lst2Ligne9 {
        dl1h: string;
        dl2h: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl3 {
        d2: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl3cr {
        d2cr: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl4 {
        d4: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl5 {
        d5: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl6 {
        d6: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl7 {
        d7: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl8 {
        d8: string;
    }
    interface IsipxgceDatRembNpy5o01Section1Bl9 {
        d9: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatr1 {
        catr1: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatr2 {
        listeCatr: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1BlCatr2ListeCatr[];
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatr2ListeCatr {
        ligne1: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1BlCatr2ListeCatrLigne1[];
        ligne2: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1BlCatr2ListeCatrLigne2[];
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatr2ListeCatrLigne1 {
        d0: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatr2ListeCatrLigne2 {
        d1: string;
        d2: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlDemarchage {
        libAlaauEts: string;
        libDeladuEts1: string;
        libDeladuEts2: string;
        libLaleEts: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlPdpJustifie {
        libLaleEts1: string;
        libAlaauEts1: string;
        libLaleEts2: string;
        libLaleEts3: string;
        libDeladuEts1: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlReprlegTitre {
        nomReprlegal1: string;
        libLaleEts: string;
        libLaleEts1: string;
        libLaleEts2: string;
    }
    interface IsipxgceDatRembNpy5o01Section1CertifStdCat {
        signataire: string;
        saLeur: string;
        libOffre: string;
        pronomPersonnel: string;
        libLaleEts: string;
        libDeladuEts: string;
        libDeladuEts1: string;
        signataire1: string;
        engagement: string;
        libLaleEts1: string;
    }
    interface IsipxgceDatRembNpy5o01Section1CertifStdQuadreto {
        signataire: string;
        libOffre: string;
        libLaleEts: string;
        libLaleEts1: string;
        libDeladuEts: string;
        signataire1: string;
    }
    interface IsipxgceDatRembNpy5o01Section1SignatSansCnil {
        libDeladuEts: string;
        prenomNomAgent: string;
        libNomAutre: string;
    }
    class SipxgceDatRembNpy5o01 implements IsipxgceDatRembNpy5o01 {
        section1: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1[];
        genericEnteteets: sipxgceDatRembNpy5o01.IgenericEnteteets[];
        genericPiedpageets: sipxgceDatRembNpy5o01.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SipxgceDatRembNpy5o01ArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipxgceDatRembNpy5o01GenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipxgceDatRembNpy5o01ArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipxgceDatRembNpy5o01ImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SipxgceDatRembNpy5o01ArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SipxgceDatRembNpy5o01ImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat.sibcgcePrecontractuelles {
    interface IsibcgcePrecontractuelles {
        genericTitredocument: sibcgcePrecontractuelles.IgenericTitredocument[];
        genericLignevide: number;
        genericInfoPp: sibcgcePrecontractuelles.IgenericInfoPp[];
        genericInfoPm: sibcgcePrecontractuelles.IgenericInfoPm[];
        quad0203: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203[];
        quadreto: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadreto[];
        prestance: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestance[];
        croissance: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissance[];
        capciel: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapciel[];
        inflation: sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflation[];
        catslr: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslr[];
        genericSignatureStdSansCnil: sibcgcePrecontractuelles.IgenericSignatureStdSansCnil[];
        signatSansCnil: sibcgcePrecontractuelles.IsibcgcePrecontractuellesSignatSansCnil[];
        genericEnteteets: sibcgcePrecontractuelles.IgenericEnteteets[];
        genericPiedpageets: sibcgcePrecontractuelles.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IgenericTitredocument {
        titreDocument: string;
    }
    interface IgenericInfoPp {
        listePersonnes: sibcgcePrecontractuelles.IgenericInfoPpListePersonnes[];
    }
    interface IgenericInfoPpListePersonnes {
        blocChoiceJson: (Ich310 | Ich311 | Ich312 | Ich313 | Ich314)[];
    }
    interface Ich310 {
        titreRole: IgenericInfoPpListePersonnesTitreRole;
    }
    interface Ich311 {
        infosPers: IgenericInfoPpListePersonnesInfosPers;
    }
    interface Ich312 {
        infosPers2: IgenericInfoPpListePersonnesInfosPers2;
    }
    interface Ich313 {
        infosPers3: IgenericInfoPpListePersonnesInfosPers3;
    }
    interface Ich314 {
        infosPersVide: number;
    }
    interface IgenericInfoPm {
        listePersonnes: sibcgcePrecontractuelles.IgenericInfoPmListePersonnes[];
    }
    interface IgenericInfoPmListePersonnes {
        blocChoiceJson: (Ich320 | Ich321)[];
    }
    interface Ich320 {
        titreRole: IgenericInfoPmListePersonnesTitreRole;
    }
    interface Ich321 {
        infosPm: IgenericInfoPmListePersonnesInfosPm;
    }
    interface IsibcgcePrecontractuellesQuad0203 {
        blocChoiceJson: (Ich00)[];
    }
    interface Ich00 {
        blCorps: IsibcgcePrecontractuellesQuad0203BlCorps;
    }
    interface IsibcgcePrecontractuellesQuad0203BlCorps {
        natureNbCat: string;
        natureRevenus: string;
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        montantLibQuad: string;
        montantNbCat: string;
        montantPeriode: string;
        a504Var00004Lbidva: string;
        tauxDuree: string;
        tauxNbCat1: string;
        tauxNbCat2: string;
        calculEnPartie1: string;
        calculEnPartie2: string;
        retraitCalcul: string;
        traab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203BlCorpsTraab[];
        var00018: string;
        var00019: string;
        fonctionDuree: string;
        fonctionNbCat1: string;
        fonctionPeriode: string;
        fonctionVers1: string;
        fonctionVers4: string;
        fonctionVers2: string;
        fonctionVers3: string;
        fonctionNbCat2: string;
        blFonction031: string;
        blFonction032: string;
        blFonction033: string;
        blFonction034: string;
        prorog1: string;
        prorog2: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesQuad0203BlCorpsTraab {
        blocChoiceJson: (Ich10 | Ich11)[];
    }
    interface Ich10 {
        lgEntete: number;
    }
    interface Ich11 {
        lgData: IsibcgcePrecontractuellesQuad0203BlCorpsTraabLgData;
    }
    interface IsibcgcePrecontractuellesQuadreto {
        blocChoiceJson: (Ich20 | Ich21)[];
    }
    interface Ich20 {
        blDataArchive: IsibcgcePrecontractuellesQuadretoBlDataArchive;
    }
    interface Ich21 {
        blData: IsibcgcePrecontractuellesQuadretoBlData;
    }
    interface IsibcgcePrecontractuellesPrestance {
        blocChoiceJson: (Ich40 | Ich41)[];
    }
    interface Ich40 {
        blDataSansPreavisPrestance: IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestance;
    }
    interface Ich41 {
        blDataAvecPreavisPrestance: IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestance;
    }
    interface IsibcgcePrecontractuellesCroissance {
        blocChoiceJson: (Ich110 | Ich111)[];
    }
    interface Ich110 {
        blDataSansPreavisCroissance: IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissance;
    }
    interface Ich111 {
        blDataAvecPreavisCroissance: IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissance;
    }
    interface IsibcgcePrecontractuellesCapciel {
        blocChoiceJson: (Ich180 | Ich181)[];
    }
    interface Ich180 {
        blDataSansPreavisCapciel: IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapciel;
    }
    interface Ich181 {
        blDataAvecPreavisCapciel: IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapciel;
    }
    interface IsibcgcePrecontractuellesInflation {
        blocChoiceJson: (Ich250)[];
    }
    interface Ich250 {
        blDataSansPreavisInflation: IsibcgcePrecontractuellesInflationBlDataSansPreavisInflation;
    }
    interface IsibcgcePrecontractuellesInflationBlDataSansPreavisInflation {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        lbRet: sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbRet[];
        lbTraab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbTraab[];
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbRet {
        blocChoiceJson: (Ich260)[];
    }
    interface Ich260 {
        lgRet: IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbRetLgRet;
    }
    interface IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbRetLgRet {
        a505Var00009Lbidim: string;
    }
    interface IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbTraab {
        blocChoiceJson: (Ich270 | Ich271)[];
    }
    interface Ich270 {
        lgEntete: number;
    }
    interface Ich271 {
        lgData: IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbTraabLgData;
    }
    interface IsibcgcePrecontractuellesCatslr {
        blocChoiceJson: (Ich280)[];
    }
    interface Ich280 {
        blDataSlr: IsibcgcePrecontractuellesCatslrBlDataSlr;
    }
    interface IsibcgcePrecontractuellesCatslrBlDataSlr {
        a504Var00003Lbidva: string;
        a504Var00001Lbidva: string;
        a504Var00003Lbidva1: string;
        a504Var00002Lbidva: string;
        a504Var00001Lbidva2: string;
        a504Var00001Lbidva3: string;
        a504Var00001Lbidva1: string;
        a504Var00004Lbidva: string;
        a504Var00005Lbidva: string;
        a504Var00006Lbidva: string;
        a504Var00007Lbidva: string;
        a504Var00007Lbidva1: string;
        a504Var00008Lbidva: string;
        a504Var00014Lbidva: string;
        a504Var00001Lbidva4: string;
        a504Var00009Lbidva: string;
        lbRet: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslrBlDataSlrLbRet[];
        codeEtab: string;
        lbTraab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslrBlDataSlrLbTraab[];
        a504Var00012Lbidva: string;
        a504Var00012Lbidv1: string;
        a504Var00013Lbidva: string;
        codeEtab1: string;
        codeEtab2: string;
        codeEtab3: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesCatslrBlDataSlrLbRet {
        blocChoiceJson: (Ich290)[];
    }
    interface Ich290 {
        lgRet: IsibcgcePrecontractuellesCatslrBlDataSlrLbRetLgRet;
    }
    interface IsibcgcePrecontractuellesCatslrBlDataSlrLbRetLgRet {
        a505Var00010Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCatslrBlDataSlrLbTraab {
        blocChoiceJson: (Ich300 | Ich301)[];
    }
    interface Ich300 {
        lgEntete: number;
    }
    interface Ich301 {
        lgData: IsibcgcePrecontractuellesCatslrBlDataSlrLbTraabLgData;
    }
    interface IgenericSignatureStdSansCnil {
        libDeladuEts: string;
        prenomNomAgent: string;
    }
    interface IsibcgcePrecontractuellesSignatSansCnil {
        libDeladuEts: string;
        prenomNomAgent: string;
        libNomAutre: string;
    }
    interface IgenericEnteteets {
        logoEtablissement: sibcgcePrecontractuelles.IgenericEnteteetsLogoEtablissement;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        dateEdition: string;
        heureEdition: string;
        numRefdoc: string;
        codeBarre: string;
        refActe: string;
    }
    interface IgenericEnteteetsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: sibcgcePrecontractuelles.IgenericPiedpageetsB10175[];
        b13135: sibcgcePrecontractuelles.IgenericPiedpageetsB13135[];
        b13705: sibcgcePrecontractuelles.IgenericPiedpageetsB13705[];
        b14445: sibcgcePrecontractuelles.IgenericPiedpageetsB14445[];
        b14505: sibcgcePrecontractuelles.IgenericPiedpageetsB14505[];
        b15135: sibcgcePrecontractuelles.IgenericPiedpageetsB15135[];
        b15905: sibcgcePrecontractuelles.IgenericPiedpageetsB15905[];
        b15965: sibcgcePrecontractuelles.IgenericPiedpageetsB15965[];
        b16275: sibcgcePrecontractuelles.IgenericPiedpageetsB16275[];
        b18025: sibcgcePrecontractuelles.IgenericPiedpageetsB18025[];
        b18279: sibcgcePrecontractuelles.IgenericPiedpageetsB18279[];
        b43199: sibcgcePrecontractuelles.IgenericPiedpageetsB43199[];
        b18715: sibcgcePrecontractuelles.IgenericPiedpageetsB18715[];
        b13335: sibcgcePrecontractuelles.IgenericPiedpageetsB13335[];
        b17515: sibcgcePrecontractuelles.IgenericPiedpageetsB17515[];
        b62108: sibcgcePrecontractuelles.IgenericPiedpageetsB62108[];
        b12579: sibcgcePrecontractuelles.IgenericPiedpageetsB12579[];
        b13825: sibcgcePrecontractuelles.IgenericPiedpageetsB13825[];
        b16705: sibcgcePrecontractuelles.IgenericPiedpageetsB16705[];
        b12135: sibcgcePrecontractuelles.IgenericPiedpageetsB12135[];
        b14265: sibcgcePrecontractuelles.IgenericPiedpageetsB14265[];
        b13485: sibcgcePrecontractuelles.IgenericPiedpageetsB13485[];
        b18315: sibcgcePrecontractuelles.IgenericPiedpageetsB18315[];
        b11315: sibcgcePrecontractuelles.IgenericPiedpageetsB11315[];
        b11425: sibcgcePrecontractuelles.IgenericPiedpageetsB11425[];
        b12548: sibcgcePrecontractuelles.IgenericPiedpageetsB12548[];
        b30051: sibcgcePrecontractuelles.IgenericPiedpageetsB30051[];
    }
    interface IgenericPiedpageetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IgenericPiedpageetsB13135 {
        d13135L1: string;
    }
    interface IgenericPiedpageetsB13705 {
        d13705L1: string;
    }
    interface IgenericPiedpageetsB14445 {
        d14445L1: string;
    }
    interface IgenericPiedpageetsB14505 {
        d14505L1: string;
    }
    interface IgenericPiedpageetsB15135 {
        d15135L1: string;
    }
    interface IgenericPiedpageetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IgenericPiedpageetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IgenericPiedpageetsB16275 {
        d16275L1: string;
    }
    interface IgenericPiedpageetsB18025 {
        d18025L1: string;
    }
    interface IgenericPiedpageetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IgenericPiedpageetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IgenericPiedpageetsB18715 {
        d18715L1: string;
    }
    interface IgenericPiedpageetsB13335 {
        d13335L1: string;
    }
    interface IgenericPiedpageetsB17515 {
        d17515L1: string;
    }
    interface IgenericPiedpageetsB62108 {
        d62108L1: string;
    }
    interface IgenericPiedpageetsB12579 {
        d12579L1: string;
    }
    interface IgenericPiedpageetsB13825 {
        d13825L1: string;
    }
    interface IgenericPiedpageetsB16705 {
        d16705L1: string;
    }
    interface IgenericPiedpageetsB12135 {
        d12135L1: string;
    }
    interface IgenericPiedpageetsB14265 {
        d14265L1: string;
    }
    interface IgenericPiedpageetsB13485 {
        d13485L1: string;
    }
    interface IgenericPiedpageetsB18315 {
        d18315L1: string;
    }
    interface IgenericPiedpageetsB11315 {
        d11315L1: string;
    }
    interface IgenericPiedpageetsB11425 {
        d11425L1: string;
    }
    interface IgenericPiedpageetsB12548 {
        d12548L1: string;
    }
    interface IgenericPiedpageetsB30051 {
        d30051L1: string;
    }
    interface IgenericInfoPmListePersonnesInfosPm {
        lidars: string;
        dadatj: string;
        lidgv26: string;
        idnsbd: string;
        nodatp: string;
    }
    interface IgenericInfoPmListePersonnesTitreRole {
        libCtdhli: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers {
        lidacv: string;
        lidanm: string;
        nomPrenomClient: string;
        libCodirc: string;
        dadana: string;
        lidgilNaissance: string;
        lidgv26: string;
        lidgna: string;
        idnsbd: string;
        nodatpClient: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers2 {
        lidacv2: string;
        nomPrenomClient2: string;
        lidanm2: string;
        nomUsage2: string;
        libCodirc2: string;
        dadana2: string;
        lidgilNaissance2: string;
        lidgv262: string;
        lidgna2: string;
        idnsbd2: string;
        nodatpClient2: string;
        situationFamille2: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers3 {
        lidacv3: string;
        nomPrenomClient3: string;
        lidanm3: string;
        nomUsage3: string;
        libCodirc3: string;
        dadana3: string;
        lidgilNaissance3: string;
        lidgv263: string;
        lidgna3: string;
        idnsbd3: string;
        nodatpClient3: string;
        situationFamille3: string;
        regimeMatrimonial3: string;
    }
    interface IgenericInfoPpListePersonnesTitreRole {
        libCtdhli: string;
    }
    interface IsibcgcePrecontractuellesQuad0203BlCorpsTraabLgData {
        a504Var00016: string;
        a504Var00017: string;
    }
    interface IsibcgcePrecontractuellesQuadretoBlData {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesQuadretoBlDataArchive {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        traab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadretoBlDataArchiveTraab[];
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesQuadretoBlDataArchiveTraab {
        blocChoiceJson: (Ich30 | Ich31)[];
    }
    interface Ich30 {
        lgEntete: number;
    }
    interface Ich31 {
        lgData: IsibcgcePrecontractuellesQuadretoBlDataArchiveTraabLgData;
    }
    interface IsibcgcePrecontractuellesQuadretoBlDataArchiveTraabLgData {
        a504Var00010Lbidva: string;
        a504Var00010Lbidv1: string;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestance {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        a504Var00005Lbidva: string;
        a504Var00006Lbidva: string;
        lbInt: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbInt[];
        a504Var00008Lbidva: string;
        lbRet: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbRet[];
        lbTraab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbTraab[];
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbInt {
        blocChoiceJson: (Ich80)[];
    }
    interface Ich80 {
        lgDataInt: IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbIntLgDataInt;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbIntLgDataInt {
        a505Var00007Lbidim: string;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbRet {
        blocChoiceJson: (Ich90)[];
    }
    interface Ich90 {
        lgRet: IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbRetLgRet;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbRetLgRet {
        a505Var00009Lbidim: string;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbTraab {
        blocChoiceJson: (Ich100 | Ich101)[];
    }
    interface Ich100 {
        lgEntete: number;
    }
    interface Ich101 {
        lgData: IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbTraabLgData;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbTraabLgData {
        a504Var00010Lbidva: string;
        a504Var00010Lbidv1: string;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestance {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        a504Var00005Lbidva: string;
        a504Var00006Lbidva: string;
        lbInt: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbInt[];
        lbRet: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbRet[];
        lbTraab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbTraab[];
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbInt {
        blocChoiceJson: (Ich50)[];
    }
    interface Ich50 {
        lgDataInt: IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbIntLgDataInt;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbIntLgDataInt {
        a505Var00007Lbidim: string;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbRet {
        blocChoiceJson: (Ich60)[];
    }
    interface Ich60 {
        lgRet: IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbRetLgRet;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbRetLgRet {
        a505Var00009Lbidim: string;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbTraab {
        blocChoiceJson: (Ich70 | Ich71)[];
    }
    interface Ich70 {
        lgEntete: number;
    }
    interface Ich71 {
        lgData: IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbTraabLgData;
    }
    interface IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbTraabLgData {
        a504Var00010Lbidva: string;
        a504Var00010Lbidv1: string;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissance {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        lbInt: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbInt[];
        a504Var00008Lbidva: string;
        lbRet: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbRet[];
        lbTraab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbTraab[];
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbInt {
        blocChoiceJson: (Ich150)[];
    }
    interface Ich150 {
        lgDataInt: IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbIntLgDataInt;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbIntLgDataInt {
        a505Var00007Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbRet {
        blocChoiceJson: (Ich160)[];
    }
    interface Ich160 {
        lgRet: IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbRetLgRet;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbRetLgRet {
        a505Var00009Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbTraab {
        blocChoiceJson: (Ich170 | Ich171)[];
    }
    interface Ich170 {
        lgEntete: number;
    }
    interface Ich171 {
        lgData: IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbTraabLgData;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbTraabLgData {
        a504Var00010Ciidfe: string;
        a504Var00010Lbidva: string;
        a504Var00010Lbidv1: string;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissance {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        lbInt: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbInt[];
        lbRet: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbRet[];
        lbTraab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbTraab[];
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbInt {
        blocChoiceJson: (Ich120)[];
    }
    interface Ich120 {
        lgDataInt: IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbIntLgDataInt;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbIntLgDataInt {
        a505Var00007Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbRet {
        blocChoiceJson: (Ich130)[];
    }
    interface Ich130 {
        lgRet: IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbRetLgRet;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbRetLgRet {
        a505Var00009Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbTraab {
        blocChoiceJson: (Ich140 | Ich141)[];
    }
    interface Ich140 {
        lgEntete: number;
    }
    interface Ich141 {
        lgData: IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbTraabLgData;
    }
    interface IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbTraabLgData {
        a504Var00010Ciidfe: string;
        a504Var00010Lbidva: string;
        a504Var00010Lbidv1: string;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapciel {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        a504Var00005Lbidva: string;
        lbInt: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbInt[];
        a504Var00008Lbidva: string;
        lbRet: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbRet[];
        lbTraab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbTraab[];
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbInt {
        blocChoiceJson: (Ich220)[];
    }
    interface Ich220 {
        lgDataInt: IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbIntLgDataInt;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbIntLgDataInt {
        a505Var00007Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbRet {
        blocChoiceJson: (Ich230)[];
    }
    interface Ich230 {
        lgRet: IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbRetLgRet;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbRetLgRet {
        a505Var00009Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbTraab {
        blocChoiceJson: (Ich240 | Ich241)[];
    }
    interface Ich240 {
        lgEntete: number;
    }
    interface Ich241 {
        lgData: IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbTraabLgData;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbTraabLgData {
        a504Var00010Lbidva: string;
        a504Var00010Lbidv1: string;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapciel {
        a504Var00001Lbidva: string;
        a504Var00002Lbidva: string;
        a504Var00003Lbidva: string;
        a504Var00004Lbidva: string;
        a504Var00005Lbidva: string;
        lbInt: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbInt[];
        lbRet: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbRet[];
        lbTraab: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbTraab[];
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
        dtDateVigueur: string;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbInt {
        blocChoiceJson: (Ich190)[];
    }
    interface Ich190 {
        lgDataInt: IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbIntLgDataInt;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbIntLgDataInt {
        a505Var00007Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbRet {
        blocChoiceJson: (Ich200)[];
    }
    interface Ich200 {
        lgRet: IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbRetLgRet;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbRetLgRet {
        a505Var00009Lbidim: string;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbTraab {
        blocChoiceJson: (Ich210 | Ich211)[];
    }
    interface Ich210 {
        lgEntete: number;
    }
    interface Ich211 {
        lgData: IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbTraabLgData;
    }
    interface IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbTraabLgData {
        a504Var00010Lbidva: string;
        a504Var00010Lbidv1: string;
    }
    interface IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbTraabLgData {
        a504Var00010Lbidva: string;
        a504Var00010Lbidv1: string;
    }
    interface IsibcgcePrecontractuellesCatslrBlDataSlrLbTraabLgData {
        a504Var00011Lbidva: string;
        a504Var00011Lbidv1: string;
    }
    class SibcgcePrecontractuelles implements IsibcgcePrecontractuelles {
        genericTitredocument: sibcgcePrecontractuelles.IgenericTitredocument[];
        genericLignevide: number;
        genericInfoPp: sibcgcePrecontractuelles.IgenericInfoPp[];
        genericInfoPm: sibcgcePrecontractuelles.IgenericInfoPm[];
        quad0203: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203[];
        quadreto: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadreto[];
        prestance: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestance[];
        croissance: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissance[];
        capciel: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapciel[];
        inflation: sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflation[];
        catslr: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslr[];
        genericSignatureStdSansCnil: sibcgcePrecontractuelles.IgenericSignatureStdSansCnil[];
        signatSansCnil: sibcgcePrecontractuelles.IsibcgcePrecontractuellesSignatSansCnil[];
        genericEnteteets: sibcgcePrecontractuelles.IgenericEnteteets[];
        genericPiedpageets: sibcgcePrecontractuelles.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SibcgcePrecontractuellesArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SibcgcePrecontractuellesGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SibcgcePrecontractuellesArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SibcgcePrecontractuellesImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SibcgcePrecontractuellesArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SibcgcePrecontractuellesImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class ParametreDocumentsGenerationArchivage {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class ParametreDocumentsImpression {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat.sipxgceDatRembNpy5o01 {
    class EditCondPartParams {
        numeroEntiteTitulaire: string;
        numeroPersonne: string;
        codeAction: string;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat.sipxgceDatRembNpy5o01 {
    class InfosProduit {
        caracteristiqueProduit: CaracteristiqueProduit;
        comptesSupports: ComptesSupports;
    }
    class CaracteristiqueProduit {
        codeProduit: string;
        codeProduitNational: string;
        codeDevise: string;
        typeTaux: string;
        typeVersementInterets: string;
        tauxActuarielBrut: number;
        montantInteretsNets: number;
        tauxNominalAnnuelBrut: number;
        dateEffetContrat: Date;
        dateEcheanceContrat: Date;
        dateValideIndiceINSEE: string;
        valeurIndiceINSEEM2: number;
        nbUniteDureeTheorique: number;
        codeUniteTheorique: string;
        codeBaremeTauxProgressif: string;
        numeroRICEDAT: string;
        montantNominalSouscription: number;
        dureePreavisRA: number;
        codePeriodiciteInterets: string;
        numeroLigneContrat: string;
        montantRevenuRegulierNetAVerser: number;
        montantDernierRevenuNetAVerser: number;
        codeBaseCalculJoursMois: string;
        tauxRetraitAnticipe: number;
        dateDernierRnvltContrat: Date;
        montantCapitalCompte: number;
        montantCapRembourseAnticipation: number;
        nbRnvltRestantAEffectuer: number;
    }
    class ComptesSupports {
        numeroRICEPaiementCapital: string;
        numeroRICEPaiementInterets: string;
    }
    class ElementAEditer {
        contenu: BlocGenerique;
        typeElement: string;
    }
    class BlocGenerique {
        instance: string;
        map: BlocMap;
    }
    class BlocMap {
    }
    class EditCondPart {
        infosProduit: InfosProduit;
        elementAEditer: Array<ElementAEditer>;
    }
    class DonneesCATRevisable {
        libelleCodeIndiceReference: string;
        codeSigne: string;
        tauxMargeNegoAgent: number;
        tauxIndiceReference: number;
    }
    class DonneesCATRenouvelable {
        montantCapitalInitial: number;
        nbPeriodesARealiser: number;
        dateAppliMargeProgressive: Date;
        numPeriodeAttribuee: number;
        listeTauxApplicable: Array<string>;
        libelleCodeIndiceReference: string;
    }
    class DetailsRevenus {
        dateOperation: string;
        montantInteretsBruts: string;
        montantPrelevements: string;
    }
    class DonneesCATTauxProg {
        listeDetailsRevenus: Array<DetailsRevenus>;
    }
}

declare module myway.gestionEpargne.editiqueDat.sipxgceDatRembNpy5o01 {
    interface IInfosProduit {
        codeDevise: string;
        identifiantProduitService: number;
        codeProduit: string;
        codeProduitNational: string;
        dateEffetContrat: Date;
        dureePreavisRA: number;
        montantVersementInitial: number;
        nbUniteDureeTheorique: number;
        codeUniteTheorique: string;
        tauxRemuneration: number;
        codeBareme: string;
        dateEcheanceContrat: Date;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
    interface IElementAEditer {
        typeElement: string;
        contenu: IBlocGenerique;
    }
    interface IBlocGenerique {
        instance: string;
    }
    interface IEditPreContratSLR {
        infosProduit: IInfosProduit;
        elementAEditer: Array<IElementAEditer>;
    }
}

declare module myway.gestionEpargne.editiqueDat.sibcgcePrecontractuelles {
    class EditPreContratDATParams {
        numeroPersonne: string;
        numeroEntiteTitulaire: string;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat.sibcgcePrecontractuelles {
    class EditPreContratDAT {
        infosProduit: InfosProduit;
        elementAEditer: Array<ElementAEditer>;
        constructor();
    }
    class InfosProduit {
        numeroRICEDAT: string;
        constructor();
    }
    class ElementAEditer {
        typeElement: string;
        contenu: BlocGenerique;
        constructor();
    }
    class BlocGenerique {
        instance: string;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBandeauClientService {
        static $inject: string[];
        listeDesClients: IClient[];
        constructor();
        /**
         * Méthode pour construire la liste des personnes dans un client <titre, personnes>
         * @param {IBandeauClient} data
         * @returns {void}
         */
        construireListeDesClients(data: IBandeauClient): void;
        /**
         * Set la liste des personnes du client de même titre/Rôle
         * @param {IClient} client
         * @param {IElementEditionPersonne[]} lesPersonnes
         * @returns {void}
         */
        private setClients(client, lesPersonnes);
        /**
         * Mapping IPersonneFormatGenerique avec IgenericInfoPpListePersonnesInfosPers
         * @param {IPersonneFormatGenerique} infosPersonne
         * @returns {sibcgcePrecontractuelles.IgenericInfoPpListePersonnesInfosPers}
         */
        createInfo(infosPersonne: IPersonneFormatGenerique): sibcgcePrecontractuelles.IgenericInfoPpListePersonnesInfosPers;
        /**
         * Mapping IPersonneFormatGenerique avec IgenericInfoPpListePersonnesInfosPers2
         * @param {IPersonneFormatGenerique infosPersonne
         * @returns {sibcgcePrecontractuelles.IgenericInfoPpListePersonnesInfosPers2}
         */
        createInfo2(infosPersonne: IPersonneFormatGenerique): sibcgcePrecontractuelles.IgenericInfoPpListePersonnesInfosPers2;
        /**
         * Mapping IPersonneFormatGenerique avec IgenericInfoPpListePersonnesInfosPers3
         * @param {IPersonneFormatGenerique} infosPersonne
         * @returns {sibcgcePrecontractuelles.IgenericInfoPpListePersonnesInfosPers3}
         */
        createInfo3(infosPersonne: IPersonneFormatGenerique): sibcgcePrecontractuelles.IgenericInfoPpListePersonnesInfosPers3;
        createInfoPm(infosPersonne: IPersonneFormatGenerique): sibcgcePrecontractuelles.IgenericInfoPmListePersonnesInfosPm;
        /**
         * Construction du bloc des personnes et on alimente la section 1 du document
         * @returns {sibcgcePrecontractuelles.IgenericInfoPp[]}
         */
        construireBlocPersonnes(contenuDocumentPreContrat: sibcgcePrecontractuelles.SibcgcePrecontractuelles): void;
        /**
         *
         * Construction d'un bloc pour un client
         * @param {IClient} client
         * @returns {sibcgcePrecontractuelles.IgenericInfoPp}
         */
        private ajouterBlocClient(client);
        private ajouterBlocClientPm(client);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocCapcielService {
        static $inject: string[];
        static BL_DATA_SANS_PREAVIS_CAPCIEL: string;
        static BL_DATA_AVEC_PREAVIS_CAPCIEL: string;
        static LB_INT: string;
        static LB_RET: string;
        static LB_TRAAB: string;
        constructor();
        /**
         * Permet de construire le Bloc Capciel en entier
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapciel}
         */
        construireBlocCapciel(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapciel;
        /**
         * Permet de contruire le bloc sans préavis capciel
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapciel}
         */
        construireBlocDataSansPreavisCapciel(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapciel;
        /**
         * Permet de construire le bloc LbInt
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbInt}
         */
        construireBlocLbIntSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbInt;
        /**
         * Permet de construire le bloc LbRet
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbRet}
         */
        construireBlocLbRetSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbRet;
        /**
         * Permet de construire le bloc LbTraab
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbTraab}
         */
        construireBlocLbTraabSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataSansPreavisCapcielLbTraab;
        /**
         * Permet de construire le bloc avec preavis capciel
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapciel}
         */
        construireBlocDataAvecPreavisCapciel(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapciel;
        /**
         * Permet de construire le bloc LbInt
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbInt}
         */
        construireBlocLbIntAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbInt;
        /**
         * Permet de créer le bloc LbRet dans le sous bloc avec preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbRet}
         */
        construireBlocLbRetAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbRet;
        /**
         * Permet de créer le bloc LbTraab dans le sous bloc avec préavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbTraab}
         */
        construireBlocLbTraabAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapcielBlDataAvecPreavisCapcielLbTraab;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocCatslrService {
        static $inject: string[];
        static BL_DATA_SLR: string;
        static LB_RET: string;
        static LG_RET: string;
        static LG_DATA: string;
        static LB_TRAAB: string;
        constructor();
        /**
         * Permet de construire le Bloc Catslr en entier
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslr}
         */
        construireBlocCatslr(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslr;
        /**
         * Permet de construire le bloc data SLR
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslrBlDataSlr}
         */
        construireBlocDataSlr(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslrBlDataSlr;
        /**
         * Permet de construire le bloc lb RET
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslrBlDataSlrLbRet}
         */
        private construireBlocLbRet(contenu);
        /**
         * Permet de construire le bloc lb TRAAB
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslrBlDataSlrLbTraab}
         */
        private construireBlocLbTraab(contenu);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocCroissanceService {
        static $inject: string[];
        static BL_DATA_SANS_PREAVIS_CROISSANCE: string;
        static BL_DATA_AVEC_PREAVIS_CROISSANCE: string;
        static LB_INT: string;
        static LG_DATA_INT: string;
        static LB_RET: string;
        static LG_RET: string;
        static LB_TRAAB: string;
        static LG_ENTETE: string;
        static LG_DATA: string;
        constructor();
        /**
         * Permet de construire le Bloc Croissance en entier
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissance}
         */
        construireBlocCroissance(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissance;
        /**
         * Permet de contruire le bloc sans préavis prestance
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissance}
         */
        construireBlocDataSansPreavisCroissance(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissance;
        /**
         * Permet de construire le bloc LbInt dans le sous bloc sans preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbInt}
         */
        construireBlocLbIntSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbInt;
        /**
         * Permet de construire le bloc LbRet dans le sous bloc sans preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbRet}
         */
        construireBlocLbRetSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbRet;
        /**
         * Permet de construire le bloc LbTraab dans le sous bloc sans preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbTraab}
         */
        construireBlocLbTraabSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataSansPreavisCroissanceLbTraab;
        /**
         * Permet de construire le bloc avec preavis prestance
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissance}
         */
        construireBlocDataAvecPreavisCroissance(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissance;
        /**
         * Permet de construire le bloc LbInt dans le sous bloc avec preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbInt}
         */
        construireBlocLbIntAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbInt;
        /**
         * Permet de créer le bloc LbRet dans le sous bloc avec preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbRet}
         */
        construireBlocLbRetAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbRet;
        /**
         * Permet de créer le bloc LbTraab dans le sous bloc avec préavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbTraab}
         */
        construireBlocLbTraabAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissanceBlDataAvecPreavisCroissanceLbTraab;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocInflationeService {
        static $inject: string[];
        static BL_DATA_SANS_PREAVIS_INFLATION: string;
        static LB_RET: string;
        static LG_RET: string;
        static LB_TRAAB: string;
        static LG_ENTETE: string;
        static LG_DATA: string;
        constructor();
        /**
         * Permet de construire le Bloc Inflation en entier
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflation}
         */
        construireBlocInflation(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflation;
        /**
         * Permet de construire le bloc data sans preavis inflation
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflationBlDataSansPreavisInflation}
         */
        construireBlocDataSansPreavis(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflationBlDataSansPreavisInflation;
        /**
         * Permet de construire le bloc lb RET
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbRet}
         */
        private construireBlocLbRet(contenu);
        /**
         * Permet de construire le bloc lb TRAAB
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflationBlDataSansPreavisInflationLbTraab}
         */
        private construireBlocLbTraab(contenu);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocPrestanceService {
        static $inject: string[];
        static BL_DATA_SANS_PREAVIS_PRESTANCE: string;
        static BL_DATA_AVEC_PREAVIS_PRESTANCE: string;
        static LB_INT: string;
        static LG_DATA_INT: string;
        static LB_RET: string;
        static LG_RET: string;
        static LB_TRAAB: string;
        static LG_ENTETE: string;
        static LG_DATA: string;
        constructor();
        /**
         * Permet de construire le Bloc Prestance en entier
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestance}
         */
        construireBlocPrestance(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestance;
        /**
         * Permet de contruire le bloc sans préavis prestance
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestance}
         */
        private construireBlocDataSansPreavisPrestance(contenu);
        /**
         * Permet de construire le bloc LbInt dans le sous bloc sans preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbInt}
         */
        construireBlocLbIntSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbInt;
        /**
         * Permet de construire le bloc LbRet dans le sous bloc sans preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbRet}
         */
        construireBlocLbRetSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbRet;
        /**
         * Permet de construire le bloc LbTraab dans le sous bloc sans preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbTraab}
         */
        construireBlocLbTraabSans(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataSansPreavisPrestanceLbTraab;
        /**
         * Permet de construire le bloc avec preavis prestance
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestance}
         */
        private construireBlocDataAvecPreavisPrestance(contenu);
        /**
         * Permet de construire le bloc LbInt dans le sous bloc avec preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbInt}
         */
        construireBlocLbIntAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbInt;
        /**
         * Permet de créer le bloc LbRet dans le sous bloc avec preavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbRet}
         */
        construireBlocLbRetAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbRet;
        /**
         * Permet de créer le bloc LbTraab dans le sous bloc avec préavis
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbTraab}
         */
        construireBlocLbTraabAvec(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestanceBlDataAvecPreavisPrestanceLbTraab;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocQuad0203Service {
        static $inject: string[];
        static BL_CORPS: string;
        static TRAAB: string;
        static LG_ENTETE: string;
        static LG_DATA: string;
        constructor();
        /**
         * Permet de construire le Bloc Quad 0203
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203}
         */
        construireBlocQuad0203(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203;
        /**
         * Permet de construire le bloc data sans preavis inflation
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203BlCorps}
         */
        construireBlCorps(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203BlCorps;
        /**
         * Permet de construire le bloc lb RET
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203BlCorpsTraab}
         */
        private construireBloctraab(contenu);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocQuadretoService {
        static $inject: string[];
        static BL_DATA_ARCHIVE: string;
        static BL_DATA: string;
        static TRAAB: string;
        static LG_ENTETE: string;
        static LG_DATA: string;
        constructor();
        /**
         * Permet de construire le Bloc Quadreto
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadreto}
         */
        construireBlocQuadreto(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadreto;
        /**
         * Permet de construire le bloc data sans preavis inflation
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadretoBlDataArchive}
         */
        construireBlocDataArchive(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadretoBlDataArchive;
        /**
         * Permet de construire le bloc lb RET
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadretoBlDataArchiveTraab}
         */
        private construireBlocTraab(contenu);
        /**
         * Permet de construire le bloc data sans preavis inflation
         * @param {IContenuBloc} contenu
         * @returns {sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadretoBlData}
         */
        construireBlocData(contenu: IContenuBloc): sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadretoBlData;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class GenericEnteteEtsPreContratService {
        private $q;
        private serviceAgentExtended;
        private utileCommunService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, utileCommunService: UtileCommunService);
        /**
         * Construction de l'entête du document
         * @param {string} codeBarre
         * @param {string} numRefDoc
         * @param {string} refActe
         */
        construireEntete(codeBarre: string, numRefDoc: string, refActe: string): ng.IPromise<sibcgcePrecontractuelles.IgenericEnteteets[]>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class MappingModelGcePreContratRestService {
        private $q;
        private serviceAgentExtended;
        private genericEnteteEtsPreContratService;
        private blocBandeauClientService;
        private blocCapcielService;
        private blocPrestanceService;
        private blocCroissanceService;
        private blocCatslrService;
        private blocInflationeService;
        private blocQuad0203Service;
        private blocQuadretoService;
        private utileCommunService;
        static $inject: string[];
        static INFOS_PERS: string;
        static INFOS_PERS2: string;
        static INFOS_PERS3: string;
        static INFOS_PERS4: string;
        static GENERIC_SIGNATURE_STD_SANS_CNIL: string;
        static GENERIC_TITREDOCUMENT: string;
        static GENERIC_LIGNEVIDE: string;
        static SIGNAT_SANS_CNIL: string;
        contenuDocumentPreContrat: sibcgcePrecontractuelles.SibcgcePrecontractuelles;
        private listeDesPersonnes;
        private prenomNomAgent;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, genericEnteteEtsPreContratService: GenericEnteteEtsPreContratService, blocBandeauClientService: BlocBandeauClientService, blocCapcielService: BlocCapcielService, blocPrestanceService: BlocPrestanceService, blocCroissanceService: BlocCroissanceService, blocCatslrService: BlocCatslrService, blocInflationeService: BlocInflationeService, blocQuad0203Service: BlocQuad0203Service, blocQuadretoService: BlocQuadretoService, utileCommunService: UtileCommunService);
        /**
         * Permet de mapper le modèle GCE doc avec le retour du service REST
         * @param {EditPreContratDAT} editPreContratDAT
         * @returns {ng.IPromise<sibcgcePrecontractuelles.SibcgcePrecontractuelles>}
         */
        mappingModelGceRest(editPreContratSLR: sipxgceDatRembNpy5o01.IEditPreContratSLR, editPreContratDAT: sibcgcePrecontractuelles.EditPreContratDAT, signataires: GestionGeneriqueOffres.Types.ISignataire[]): ng.IPromise<sibcgcePrecontractuelles.SibcgcePrecontractuelles>;
        /**
         * Construire le bloc generic signature sans CNIL
         * @param {IContenuBloc} contenu
         * @returns {void}
         */
        construireBlocGenericSignatStdSansCnil(contenu: IContenuBloc): void;
        /**
         * Construire le bloc signat sans CNIL
         * @param {IContenuBloc} contenu
         * @returns {void}
         */
        construireBlocSignatSansCnil(contenu: IContenuBloc, signataires: GestionGeneriqueOffres.Types.ISignataire[]): void;
        /**
         * Setter sur le nom du correspondant (agent connecté) de la signature
         * @returns {ng.IPromise<void>}
         */
        private setNomPrenomAgent();
        /**
         * Construction du bloc titre du document
         * @param {IContenuBloc} contenu
         * @returns {void}
         */
        private construireBlocTitreDocument(contenu);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBandeauClientConditionParticuliereService {
        static $inject: string[];
        listeDesClients: IClient[];
        constructor();
        /**
         * Méthode pour construire la liste des personnes dans un client <titre, personnes>
         * @param {IBandeauClient} data
         * @returns {void}
         */
        construireListeDesClients(data: IBandeauClient): void;
        /**
         * Set la liste des personnes du client de même titre/Rôle
         * @param {IClient} client
         * @param {IElementEditionPersonne[]} lesPersonnes
         * @returns {void}
         */
        private setClients(client, lesPersonnes);
        /**
         * Mapping IPersonneFormatGenerique avec IgenericInfoPpListePersonnesInfosPers
         * @param {IPersonneFormatGenerique} infosPersonne
         * @returns {sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnesInfosPers}
         */
        createInfo(infosPersonne: IPersonneFormatGenerique): sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnesInfosPers;
        /**
         * Mapping IPersonneFormatGenerique avec IgenericInfoPpListePersonnesInfosPers2
         * @param {IPersonneFormatGenerique infosPersonne
         * @returns {sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnesInfosPers2}
         */
        createInfo2(infosPersonne: IPersonneFormatGenerique): sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnesInfosPers2;
        /**
         * Mapping IPersonneFormatGenerique avec IgenericInfoPpListePersonnesInfosPers3
         * @param {IPersonneFormatGenerique} infosPersonne
         * @returns {sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnesInfosPers3}
         */
        createInfo3(infosPersonne: IPersonneFormatGenerique): sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnesInfosPers3;
        /**
         * Mapping IPersonneFormatGenerique avec IgenericInfoPpListePersonnesInfosPers3
         * @param {IPersonneFormatGenerique} infosPersonne
         * @returns {sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnesInfosPers3}
         */
        createInfoPm(infosPersonne: IPersonneFormatGenerique): sipxgceDatRembNpy5o01.IgenericInfoPmListePersonnesInfosPm;
        /**
         * Construction du bloc des personnes et on alimente la section 1 du document
         * @returns {sipxgceDatRembNpy5o01.Ich01[]}
         */
        construireBlocPersonnes(): (sipxgceDatRembNpy5o01.Ich01 | sipxgceDatRembNpy5o01.Ich02)[];
        /**
         *
         * Construction d'un bloc pour un client
         * @param {IClient} client
         * @returns {sipxgceDatRembNpy5o01.IgenericInfoPp}
         */
        private ajouterBlocClient(client);
        private ajouterBlocClientMorale(client);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBlCatr1Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Catr1 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich012}
         */
        construireBlocBlCatr1(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich014;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBlCatr2Service {
        static $inject: string[];
        static LIGNE1: string;
        static LIGNE2: string;
        constructor();
        /**
         * Permet de construire le Bloc Catr2 en entier
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich013}
         */
        construireBlocBlCatr2(ligneMap: any[]): sipxgceDatRembNpy5o01.Ich015;
        /**
         * Permet de construire le bloc Ich25
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich25}
         */
        private construireBlocLigne1(ligne);
        /**
         * Permet de construire le bloc Ich26
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich26}
         */
        private construireBlocLigne2(ligne);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBlDemarchageService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc demarchage en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich022}
         */
        construireBlocBlDemarchage(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich017;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl1Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc bl1 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich00}
         */
        construireBlocBl1(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich00;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl10Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl10 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich05}
         */
        construireBlocBl10(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich05;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl2Service {
        static $inject: string[];
        static LIGNE1: string;
        static LIGNE2: string;
        static LIGNE3: string;
        static LIGNE4: string;
        static LIGNE5: string;
        static LIGNE6: string;
        static LIGNE7: string;
        static LIGNE8: string;
        static LIGNE9: string;
        static LIGNE10: string;
        constructor();
        /**
         * Permet de construire le Bloc bl2 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich03}
         */
        construireBlocBl2(ligneMap: any[]): sipxgceDatRembNpy5o01.Ich03;
        /**
         * Permet de construire le bloc Ich10
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich10}
         */
        private construireBlocLigne1(ligne);
        /**
         * Permet de construire le bloc Ich11
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich11}
         */
        private construireBlocLigne2(ligne);
        /**
         * Permet de construire le bloc Ich12
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich12}
         */
        private construireBlocLigne3(ligne);
        /**
         * Permet de construire le bloc Ich13
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich13}
         */
        private construireBlocLigne4(ligne);
        /**
         * Permet de construire le bloc Ich17
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich17}
         */
        private construireBlocLigne5(ligne);
        /**
         * Permet de construire le bloc Ich16
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich16}
         */
        private construireBlocLigne6(ligne);
        /**
         * Permet de construire le bloc Ich15
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich15}
         */
        private construireBlocLigne7(ligne);
        /**
         * Permet de construire le bloc Ich14
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich14}
         */
        private construireBlocLigne8(ligne);
        /**
         * Permet de construire le bloc Ich19
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich19}
         */
        private construireBlocLigne9(ligne);
        /**
         * Permet de construire le bloc Ich18
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich18}
         */
        private construireBlocLigne10(ligne);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl3Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl3 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich04}
         */
        construireBlocBl3(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich04;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl3crService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl3cr en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich09}
         */
        construireBlocBl3cr(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich09;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl4Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl4 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich07}
         */
        construireBlocBl4(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich07;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl5Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl5 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich08}
         */
        construireBlocBl5(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich08;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl6Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl6 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich010}
         */
        construireBlocBl6(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich010;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl7Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl7 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich011}
         */
        construireBlocBl7(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich011;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl8Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl8 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich012}
         */
        construireBlocBl8(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich012;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBl9Service {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Bl9 en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich013}
         */
        construireBlocBl9(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich013;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocCertifStdCatService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc certif std Cat en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich020}
         */
        construireBlocCertifStdCat(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich020;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocCertifStdQuadretoService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Certif Std Quadreto en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich019}
         */
        construireBlocCertifStdQuadreto(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich019;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocGenericCertifStdProduitService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Certif Std Produit en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich018}
         */
        construireGenericCertifStdProduit(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich018;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocGenericLigneVideService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Ligne vide en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich021}
         */
        construireBlocGenericLigneVide(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich021;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocGenericSignatureStdService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc Generic Signature Std en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich022}
         */
        construireGenericSignatureStd(contenu: sipxgceDatRembNpy5o01.BlocGenerique, prenomNomAgent: string): sipxgceDatRembNpy5o01.Ich022;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBlPdpJustifieService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc BL PDP Justifiee en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich016}
         */
        construireBlocBlPdpJustifie(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich016;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBlReprlegTitreService {
        static $inject: string[];
        constructor();
        /**
         * Permet de construire le Bloc reprleg titre en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich06}
         */
        construireBlocBlReprlegTitre(contenu: sipxgceDatRembNpy5o01.BlocGenerique): sipxgceDatRembNpy5o01.Ich06;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocSignatureSansCnilService {
        private utileCommunService;
        static $inject: string[];
        constructor(utileCommunService: UtileCommunService);
        /**
         * Permet de construire le Bloc signature sans CNIL en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich023}
         */
        construireBlocSignatureSansCnil(contenu: sipxgceDatRembNpy5o01.BlocGenerique, prenomNomAgent: string, signataires: GestionGeneriqueOffres.Types.ISignataire[]): sipxgceDatRembNpy5o01.Ich023;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class GenericEnteteEtsConditionParticuliereService {
        private $q;
        private serviceAgentExtended;
        private utileCommunService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, utileCommunService: UtileCommunService);
        /**
         * Construction de l'entête du document
         * @param {string} codeBarre
         * @param {string} numRefDoc
         * @param {string} refActe
         * @returns {ng.IPromise<sipxgceDatRembNpy5o01.IgenericEnteteets[]>}
         */
        construireEntete(codeBarre: string, numRefDoc: string, refActe: string): ng.IPromise<sipxgceDatRembNpy5o01.IgenericEnteteets[]>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class MappingModelGceConditionParticuliereRestService {
        private $q;
        private serviceAgentExtended;
        private genericEnteteEtsConditionParticuliereService;
        private blocBandeauClientConditionParticuliereService;
        private blocBl1Service;
        private blocBl2Service;
        private blocBl3Service;
        private blocBl4Service;
        private blocBl5Service;
        private blocBl3crService;
        private blocBl6Service;
        private blocBl7Service;
        private blocBl8Service;
        private blocBl9Service;
        private blocBlCatr1Service;
        private blocBlCatr2Service;
        private blocGenericCertifStdProduitService;
        private blocGenericLigneVideService;
        private blocGenericSignatureStdService;
        private blocBlReprlegTitreService;
        private blocBlPdpJustifieService;
        private blocCertifStdQuadretoService;
        private blocCertifStdCatService;
        private blocSignatureSansCnilService;
        private blocBlDemarchageService;
        private blocBl10Service;
        static $inject: string[];
        static INFOS_PERS: string;
        static INFOS_PERS2: string;
        static INFOS_PERS3: string;
        static INFOS_PERS4: string;
        static BL_1: string;
        static GENERIC_INFO_PP: string;
        static BL_2: string;
        static BL_3: string;
        static BL_4: string;
        static BL_5: string;
        static BL_3CR: string;
        static BL_6: string;
        static BL_7: string;
        static BL_8: string;
        static BL_9: string;
        static BL_10: string;
        static BL_CATR1: string;
        static BL_CATR2: string;
        static GENRIC_CERTIF_STD_PRODUIT: string;
        static GENERIC_LIGNEVIDE: string;
        static GENRIC_SIGNATURE_STD: string;
        static BL_REPRLEG_TITRE: string;
        static BL_PDP_JUSTIFIE: string;
        static CERTIF_STD_QUADRETO: string;
        static CERTIF_STD_CAT: string;
        static SIGNAT_SANS_CNIL: string;
        static BL_DEMARCHAGE: string;
        contenuDocumentCondPart: sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01;
        private listeDesPersonnes;
        private prenomNomAgent;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, genericEnteteEtsConditionParticuliereService: GenericEnteteEtsConditionParticuliereService, blocBandeauClientConditionParticuliereService: BlocBandeauClientConditionParticuliereService, blocBl1Service: BlocBl1Service, blocBl2Service: BlocBl2Service, blocBl3Service: BlocBl3Service, blocBl4Service: BlocBl4Service, blocBl5Service: BlocBl5Service, blocBl3crService: BlocBl3crService, blocBl6Service: BlocBl6Service, blocBl7Service: BlocBl7Service, blocBl8Service: BlocBl8Service, blocBl9Service: BlocBl9Service, blocBlCatr1Service: BlocBlCatr1Service, blocBlCatr2Service: BlocBlCatr2Service, blocGenericCertifStdProduitService: BlocGenericCertifStdProduitService, blocGenericLigneVideService: BlocGenericLigneVideService, blocGenericSignatureStdService: BlocGenericSignatureStdService, blocBlReprlegTitreService: BlocBlReprlegTitreService, blocBlPdpJustifieService: BlocBlPdpJustifieService, blocCertifStdQuadretoService: BlocCertifStdQuadretoService, blocCertifStdCatService: BlocCertifStdCatService, blocSignatureSansCnilService: BlocSignatureSansCnilService, blocBlDemarchageService: BlocBlDemarchageService, blocBl10Service: BlocBl10Service);
        /**
         * Permet de mapper le modèle GCE doc avec le retour du service REST
         * @param {EditPreContratDAT} editPreContratDAT
         * @returns {void}
         */
        mappingModelGceRest(editCondPart: sipxgceDatRembNpy5o01.EditCondPart, signataires: GestionGeneriqueOffres.Types.ISignataire[]): ng.IPromise<sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01>;
        /**
         * Setter sur le nom du correspondant (agent connecté) de la signature
         * @returns {ng.IPromise<void>}
         */
        private setNomPrenomAgent();
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface IBordereauParametres extends IParametres {
        client: MyWay.Model.Client;
        contexteOpeFinancieres: myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere;
        proprietesDocuments?: MyWay.Services.Impression.ProprietesDoc;
        parametresImpression?: MyWay.Services.Impression.ImpressionParams;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BordereauOperationService {
        private $q;
        private serviceAgentExtended;
        private identifiantBordereauService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService);
        getContexteOperationFinanciere(): ng.IPromise<myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class DescriptionDocument {
        documentAImprimer: IDocumentAImprimer;
        protected nomTypeDocument: string;
        documentAGenerer: IDocumentAGenerer;
        constructor(documentAImprimer: IDocumentAImprimer, nomTypeDocument: string);
        creerDocumentAGenerer(imprimerie: Imprimerie, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<IDocumentAGenerer>;
        protected getDocumentAGenerer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, pourArchivage: boolean): ng.IPromise<IDocumentAGenerer>;
        /**
         * ALimentation des paramètres d'archivage
         */
        protected setParamsOptionnelsArchivage(documentAImprimer: IDocumentAImprimer, paramsOptionnels: MyWay.Services.Impression.ParametresGenerationOptionnels, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, paramsGeneration: MyWay.Services.Impression.ParametresGenerationObligatoires): void;
        /** Alimentation des propriétés d'archivage du document */
        protected setProprietesDocument(documentAImprimer: IDocumentAImprimer, proprietesDocument: MyWay.Services.Impression.ProprietesDoc): void;
        protected setParametresActiveXIndividuels(documentAImprimer: IDocumentAImprimer, paramsActiveXIndividuels: MyWay.Services.Impression.ParametresActiveXIndividuels): void;
        getImpressionParams(): MyWay.Services.Impression.ImpressionParams;
        protected creerImpressionParams(): MyWay.Services.Impression.ImpressionParams;
        protected getNomFichier(): string;
    }
    class DescriptionBordereauOperation extends DescriptionDocument {
        documentAImprimer: IDocumentAImprimer;
        private creationBordereauService;
        private impressionBordereauService;
        constructor(documentAImprimer: IDocumentAImprimer, creationBordereauService: BordereauOperationService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService);
        protected getDocumentAGenerer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, pourArchivage: boolean): ng.IPromise<IDocumentAGenerer>;
        private paddy(n, p, c);
        private genererDocument(documentAGenerer);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class Imprimerie {
        documentsAProduire: IDocumentAImprimer[];
        contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique;
        protected tiersNoyauService: TiersNoyauService;
        private promesseDeTiersNoyau;
        constructor(documentsAProduire: IDocumentAImprimer[], contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, tiersNoyauService: TiersNoyauService);
        contientUneACDB(): boolean;
        besoinACDB(): ng.IPromise<boolean>;
        estEnVAD(): boolean;
        codeCanal: string;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    enum CodeTypeDocumentImport {
        CPAR,
        OUBL,
        AVBL,
        CLBL,
        NB2S,
        BOPE,
        OUEC,
        MDPS,
        OU05,
        OU01,
        OU10,
        OU11,
        OU06,
        OUGF,
        OUGP,
        OULE,
        OULI,
        OU12,
        OU13,
        OU14,
        OU15,
        OU16,
        AV01,
        AV05,
        AV06,
        AVLE,
        AV10,
        AV11,
        AV12,
        AV13,
        AV14,
        AV15,
        AV16,
        LA00,
        LA01,
        LAGP,
        LAGF,
        LALI,
        LA05,
        LA06,
        LA10,
        LA11,
        LA16,
        LAQA,
        LAOP,
        BORE,
        PJVM,
        ACDB,
    }
    enum CodeNatureGED {
        OG04,
        AG04,
        CG04,
        NB2S,
        BOPE,
        OUEC,
        MDPS,
        CONT,
        OU05,
        OU01,
        OU10,
        OU11,
        OU06,
        OUGF,
        OUGP,
        OULE,
        OULI,
        OU12,
        OU13,
        OU14,
        OU15,
        OU16,
        AV01,
        AV05,
        AV06,
        AVLE,
        AV10,
        AV11,
        AV12,
        AV13,
        AV14,
        AV15,
        AV16,
    }
    class CodeRetourEditique {
        static OK: string;
        static KO: string;
    }
    interface IDocumentAGenerer {
        identifiant: CodeTypeDocument;
        document: IDocument | any;
        libelleDocument: string;
        parametres: IParametres;
        parametresActiveX?: MyWay.Services.Impression.ParametresActiveXIndividuels;
        impressionParams?: MyWay.Services.Impression.ImpressionParams;
        nomTypeDocument?: string;
        generateurDocument?: (documentAGenerer: IDocumentAGenerer) => ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
        generationInterdite?: boolean;
        archivageInterdit?: boolean;
    }
    interface IParametresEntete {
        autentification: MyWay.Services.Context.AuthentificationInfo;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        numRefDoc: string;
        codeBarre: string;
        refActe: string;
    }
    interface IDocument {
    }
    interface IParametres {
    }
    interface IDocumentAImprimer {
        codeTypeDocument: string;
        codeNatureGED: string;
        isNonMaterialisation: boolean;
        codeTypeAttributaire: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        libelleDocument: string;
        minimumExemplaires: number;
        maximumExemplaires: number;
        nbParDefautExemplaires: number;
    }
    interface ILoader {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<any>;
    }
    class ContextePS {
        identifiantProduitService: number;
        libelleProduitService: string;
        libelleLongProduitService: string;
        etatDuProduit: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        dateIntroductionProduitServiceDansOffre: string;
        dateDernierAvenantProduitServiceDansOffre: string;
        identifiantProduitServiceSupport: number;
        codeModaliteDetentionProduitService: string;
        codeAffichageReferenceProduitService: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        numeroOffreSouscriteOrigine: number;
        numeroSequenceOuverture: number;
        idProducteur: string;
        typeProduitServiceAssurance: string;
        constructor();
    }
    class SignataireImport {
        nom: string;
        numeroPersonne: number;
        designataire: string;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface IIdentificationTiers {
        numeroChrono: number;
        numeroLieuActivite: number;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface ICaracteristiqueTiers {
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypePersonne: string;
        dateEntreeRelation: string;
        codeGuichetRisque: string;
        eligibiliteTiers: string;
        indicateurDroitCompte: string;
        identifiantClientBad: string;
        codePersonnaliteJuridique: string;
    }
    interface IInformationParticulier {
        codeRetour: number;
        codeCivilite: string;
        libelleCivilite: string;
        sexe: string;
        libelleSexe: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        dateNaissance: string;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        codeDepartementNaissance: string;
        libelleDepartementNaissance: string;
        codeInseePaysNationalite: string;
        libelleNationalite: string;
        dateDeces: string;
        codeAppartenanceReseau: string;
        libelleAppartenanceReseau: string;
        indicSocietaire: string;
        codeCapaciteJuridique: string;
        libelleCapaciteJuridique: string;
        codePaysNaissance: string;
        libellePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleDoubleNationalitePays: string;
        situationFamille: string;
        libelleCodeSituationFamiliale: string;
        dateEffetSituationFamille: string;
        codeRegimeMatrimonial: string;
        libelleRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        codeCategorieSocioProf: string;
        libelleCsp: string;
        dateEffetCsp: string;
        nomEmployeur: string;
        numeroSirenEmployeurPrincipal: string;
        dateEmbaucheParEmployeurActuel: string;
        codeTypeContratTravail: string;
        libelleCodeTypeContratTravail: string;
        dateFinContrat: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeResident: string;
        identiteRelationEcoMenage: number;
        referenceExterneEds: number;
        typeClauseMatrimoniale: string;
        codeDonationEntreEpoux: string;
        indicateurAutoEntrepreneur: string;
        autresPrenomsEtatCivil: string;
        indicDomiciliationRevenus: string;
        indicEnregHorsPresenceClient: string;
        libelleProfessionParticulier: string;
        codeTypeSecteurEmploi: string;
        indicateurEnvoiCourrier: string;
        codePieceJustificative: string;
        dateObtentionPieceJustificative: string;
        referencePieceJustificative: string;
        noIdentificationFiscaleNifNni: string;
        codeTypeNifNni: string;
        dateNaturalisation: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        eligibiliteTiers: string;
        indicDroitCompte: string;
        numeroSirenAutoEntrepreneur: string;
        dateEffetOptionResidence: string;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        libelleStatutFatca: string;
        dateAttributionStatutFatca: string;
        identifiantBad: string;
        indicateurActiviteProfessionnel: string;
        identifiantEDSDomiciliation: number;
        nomFamillePersonnePhysique: string;
        identifiantPersonne: number;
        codeEtablissement: string;
    }
    interface IInformationProfessionnel {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroSiren: string;
        codeTypeNifNni: string;
        libelleCodeTypeNifNni: string;
        noIdentificationFiscaleNifNni: string;
        nomCommercial: string;
        raisonSocial: string;
        codeSituationJuridique: string;
        libelleSituationJuridiqueProf: string;
        codeINSEE: string;
        libelleCategorieJuridiqueInsee: string;
        dateCreationJuridique: string;
        codeNafInsee: string;
        libelleEtablissement: string;
        codeRegimeFiscal: string;
        libelleCodeRegimeFiscal: string;
        montantChiffreAffaires: number;
        anneeChiffreAffaires: number;
        montantCapitalSocial: number;
        dateArreteComptable: number;
        idEdsInterne: number;
        activiteEconomiqueReelleProf: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeDevise: string;
        codeAppartenanceReseau: string;
        codeAgentEconomique: string;
        codeTypeCommerceOrganise: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        referencePieceJustificativeProf: string;
        codeCotation: string;
        edsDomiciliation: number;
        sigle: string;
        codeTypeTiers: string;
        effectif: number;
        codeBanqueEntitePilote: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEco: string;
        indicateurEirl: string;
        dateDebutOptionEirl: string;
        dateFinOptionEirl: string;
        indicOptionOpposabiliteEirl: string;
        indicPersMoraleOrganismePublic: string;
        indicPersMoraleMarcheReglemente: string;
        indicEditionBenefrEffectifs: string;
        identifiantLei: string;
        codeEmir: string;
        dateClotureJuridiqueProf: string;
        codeIndicateurEntrepEtrangere: string;
        indicDelegationClientDeclarat: string;
        identifiantEDSDomiciliation: number;
    }
    interface IInformationEtablissement {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        designationEntiteTitulaire: string;
        codeStatutLieuActivite: string;
        numTelex: string;
        numTelecopieur: string;
        effectifDuLieuActivite: number;
        enseigneCommercialeLieuActivit: string;
        dateDebut: string;
        dateFin: string;
        activiteEconomiqueReelleLieu: string;
        dateEnregistrementLieuActivite: string;
        dateDerniereMiseAJourLieu: string;
        dateDerniereVerifLieuActivite: string;
        designationLongueLieuActivite: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeResident: string;
        dateDernTracageApeProf: string;
        libelleTracageCodificationApe: string;
        typeTracageCodificationApe: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeRafraichLieuActivite: string;
    }
    interface IAdresse {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        identifiant: number;
        codeType: string;
        libelleType: string;
        ligne2AFNOR: string;
        ligne3AFNOR: string;
        ligne4AFNOR: string;
        ligne5AFNOR: string;
        ligne6AFNOR: string;
        codePostalPTT: string;
        codePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseelocalite: string;
        libelleInseeLocalite: string;
        codeTypeRetourPtt: string;
        libelleCodeTypeRetourPtt: string;
        indicateurEnvoiCourrier: string;
        inddifadresseFiscalePostale: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephone: string;
        codeValiditeAdresseUniserv: string;
        codeExistenceListeRouge: string;
        numeroFAX: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        libelleCommune: string;
        codeTypeLieu: string;
        dateDernierRetourPttAdresse: string;
        nombreRetourPtt: number;
        codePostalFranceEtranger: string;
        numeroVoiePTT: number;
    }
    interface IMedia {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        typeMoyenContact: string;
        adresseMoyenContact: string;
        codeIndicatifInternationalTel: string;
        numeroTelephone: string;
        codeOptIn: string;
        indicEnvoiMediaProOptOut: string;
        indicEnvoiSmsFax: string;
        telephoneEmailPrefere: string;
        telephoneEmailSecurise: string;
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
    }
    interface IInformationTiersLie {
        identifiantPersonne: number;
        designationRelationEconomique: string;
        codeFamilleLienInterPersonne: string;
        pourcentageCapitalistique: number;
        codeQualifLienInterPersonne: string;
        dateDebutEffetLienInterPersonne: string;
        dateFinEffetLienInterPersonne: string;
        codeEtablissement: string;
        identifiantPersonneLie: number;
        refPieceJustificatifLien: string;
        personneRattacheeRelation: string;
        codeTypeLienInterPersonne: string;
        codeSensLienInterPersonne: string;
    }
    interface ITiersNoyau {
        caracteristiqueTiers: ICaracteristiqueTiers;
        identificationTiers: IIdentificationTiers;
        informationParticulier: IInformationParticulier;
        informationProfessionnel: Array<IInformationProfessionnel>;
        informationEtablissement: Array<IInformationEtablissement>;
        adresse: Array<IAdresse>;
        media: Array<IMedia>;
        informationTiersLie: Array<IInformationTiersLie>;
        informationsEAI: IInformationsEAI;
    }
    interface IInformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
        libelleCodeStatutEAI: string;
        libelleCodeModeSignatureEAI: string;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface ITiersNoyauQuery {
        codeEtablissement: string;
        identifiantPersonne: string;
        eligibiliteEAI?: string;
        parametreAppel?: string;
    }
    class TiersNoyauService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private url;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getTiersNoyau(query: ITiersNoyauQuery): ng.IPromise<ITiersNoyau>;
        getTiersNoyauDepuisContexteEditique(contexte: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<ITiersNoyau>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class EditConditionParticuliereService {
        private serviceAgentExtended;
        private utileCommunService;
        static $inject: string[];
        private editCondPartURL;
        private editCondPart;
        private editCondPartParams;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, utileCommunService: UtileCommunService);
        /**
         * Permet d'initialiser la partie query et body de la ressource REST editCondPart
         * @param {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         */
        initQueryBodyEditCondPart(contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): void;
        /**
         * Permet d'initialiser la partie Query du service editCondPart
         * @param {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * @returns {void}
         */
        private initQueryEditCondPart(contexteEditiqueGGHO);
        private obtenirCodeAction(contexteEditiqueGGHO);
        /**
         * Permet d'initialiser la partie Body du service editCondPart
         * @param {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * @returns {void}
         */
        private initBodyEditCondPart(contexteEditiqueGGHO);
        /**
         * Permet d'appeler le service REST qui renvoi la liste des blocs et les variables pour le document des conditions particulières DAT
         * @returns {ng.IPromise<sipxgceDatRembNpy5o01.EditCondPart>}
         */
        postEditCondPart(): ng.IPromise<sipxgceDatRembNpy5o01.EditCondPart>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class EditPreContratDATService {
        private serviceAgentExtended;
        private utileCommunService;
        static $inject: string[];
        private editPreContratDatURL;
        private editPreContratDAT;
        private editPreContratDATParams;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, utileCommunService: UtileCommunService);
        /**
         * Permet d'initialiser la partie query et body de la ressource REST editPreContratDAT
         * @param {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         */
        initQueryBodyEditPreContratDAT(contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): void;
        /**
         * Permet d'initialiser la partie Query du service editPreContratDAT
         * @param {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * @returns {void}
         */
        private initQueryEditPreContratDAT(contexteEditiqueGGHO);
        /**
         * Permet d'initialiser la partie Body du service editPreContratDAT
         * @param {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * @returns {void}
         */
        private initBodyEditPreContratDAT(contexteEditiqueGGHO);
        /**
         * Permet d'appeler le service REST qui renvoi la liste des blocs et les variables pour le document précontractuelle DAT
         * @returns {ng.IPromise<sibcgcePrecontractuelles.EditPreContratDAT>}
         */
        postEditPreContratDAT(): ng.IPromise<sibcgcePrecontractuelles.EditPreContratDAT>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class ContexteEditiqueMockService {
        static $inject: string[];
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class GceDocPartieTechniqueCommunService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de créer l'attribut obligatoire de l'objet ParametreDocumentsGenerationArchivage pour faire une génération pour tous les documents
         * @param{string} sousRepModele
         * @returns {MyWay.Services.Impression.ParametresGenerationObligatoires}
         */
        creerGenerationObligatoire(sousRepModele: string): MyWay.Services.Impression.ParametresGenerationObligatoires;
        /**
         * Permet de créer l'attribut obligatoire de l'objet ParametreDocumentsGenerationArchivage pour faire un archivage pour tous les documents
         * @param{string} sousRepModele
         * @returns {MyWay.Services.Impression.ParametresGenerationObligatoires}
         */
        creerArchivageObligatoire(sousRepModele: string): MyWay.Services.Impression.ParametresGenerationObligatoires;
        /**
         * Permet de créer l'attribut archivage de l'objet ParametreDocumentsGenerationArchivage pour faire un archivage pour tous les documents
         * @param {MyWay.Services.Context.AuthentificationInfo donneesAuthentication
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentPrecontratGGHO
         * @returns {MyWay.Services.Impression.Archivage}
         */
        creerArchivageArchivage(donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, documentPrecontratGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer): MyWay.Services.Impression.Archivage;
        /**
         * Permet de créer l'attribut optionnel de l'objet ParametreDocumentsGenerationArchivage pour faire une génération pour tous les documents
         * @param {string} libelleDocument
         * @returns {MyWay.Services.Impression.ParametresGenerationOptionnels}
         */
        creerGenerationOptionel(libelleDocument: string): MyWay.Services.Impression.ParametresGenerationOptionnels;
        /**
         * Permet de créer les paramétres d'impression en entier pour tous les documents
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentPrecontratGGHO
         * @returns {ParametreDocumentsImpression}
         */
        creationParametresImpression(documentPrecontratGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer): ParametreDocumentsImpression;
        /**
         * Permet de créer les paramètres Avtive X Individuels pour tous les documents
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentPrecontratGGHO
         * @returns {MyWay.Services.Impression.ParametresActiveXIndividuels}
         */
        creationParametresActiveXIndividuels(documentPrecontratGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer): MyWay.Services.Impression.ParametresActiveXIndividuels;
        /**
         * Permet de créer mes paramètres Active X Globaux pour tous les documents
         * @returns {MyWay.Services.Impression.ParametresActiveXGlobaux}
         */
        creationParametresActiveXGlobaux(): MyWay.Services.Impression.ParametresActiveXGlobaux;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class GceDocPartieTechniqueConditionParticuliereService {
        private $q;
        private serviceAgentExtended;
        private utileCommunService;
        private gceDocPartieTechniqueCommunService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, utileCommunService: UtileCommunService, gceDocPartieTechniqueCommunService: GceDocPartieTechniqueCommunService);
        /**
         * Permet de créer les paramétres d'impression ou d'archivage selon le cas
         * @param {sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01} sipxgceDatRembNpy5o01
         * @param {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentConditionParticuliereGGHO
         * @param {MyWay.Services.Context.AuthentificationInfo} donneesAuthentication
         * @returns {void}
         */
        gererImpressionOuArchivageConditionParticuliere(sipxgceDatRembNpy5o01: sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, documentConditionParticuliereGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): void;
        /**
         * Permet de créer les paramétres de génération du document condition particulière
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentConditionParticuliereGGHO
         * @returns {ParametreDocumentsGenerationArchivage}
         */
        creationParametresGenerationConditionParticuliere(documentConditionParticuliereGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer): ParametreDocumentsGenerationArchivage;
        /**
         * Permet de créer les paramétres d'archivage du document condition particulière
         * @param {MyWay.Services.Context.AuthentificationInfo} donneesAuthentication
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentConditionParticuliereGGHO
         * @returns {ParametreDocumentsGenerationArchivage}
         */
        creationParametresConditionParticuliereArchivage(donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, documentConditionParticuliereGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer): ParametreDocumentsGenerationArchivage;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class GceDocPartieTechniquePreContratService {
        private $q;
        private serviceAgentExtended;
        private utileCommunService;
        private gceDocPartieTechniqueCommunService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, utileCommunService: UtileCommunService, gceDocPartieTechniqueCommunService: GceDocPartieTechniqueCommunService);
        /**
         * Permet de générer les paramètres d'impression ou d'archivage selon le cas et appeler les fonction d'impression ou d'archivage
         * @param {sibcgcePrecontractuelles.SibcgcePrecontractuelles} sibcgcePrecontractuelles
         * @param {GestionGeneriqueOffres.Types.IContexteEditiqueGgho} contexteEditiqueGGHO
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentPrecontratGGHO
         * @param {MyWay.Services.Context.AuthentificationInfo} donneesAuthentication
         * @returns {void}
         */
        gererImpressionOuArchivagePreContrat(sibcgcePrecontractuelles: sibcgcePrecontractuelles.SibcgcePrecontractuelles, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, documentPrecontratGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): void;
        /**
         * Créer les paramètres de génération du document précontrat
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentPrecontratGGHO
         * @returns {ParametreDocumentsGenerationArchivage}
         */
        creationParametresGenerationPreContrat(documentPrecontratGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer): ParametreDocumentsGenerationArchivage;
        /**
         * Crééer les paramètres d'archivage du document précontractuelles
         * @param {MyWay.Services.Context.AuthentificationInfo} donneesAuthentication
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentPrecontratGGHO
         * @returns {void}
         */
        creationParametresPreContratArchivage(donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, documentPrecontratGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer): ParametreDocumentsGenerationArchivage;
    }
}
