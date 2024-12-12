
declare module myway.comRisquesClient {
    var app: ng.IModule;
}

declare module myway.comRisquesClient {
    class InterroBDFController {
        private $scope;
        private genereCleBDFService;
        private interroBDFService;
        private $modalInstance;
        private data;
        private modeImpression;
        private modeArchivage;
        private modeAveugle;
        private serviceAgentExtended;
        private modalService;
        private $q;
        private modeInterrogationForce;
        static $inject: string[];
        lastExpandedItem: any;
        donnees: any;
        personneInterrogee: myway.comRisquesClient.Model.PersonneBDF;
        personneListeFCC: myway.comRisquesClient.Model.PersonneFCC[];
        personneListeFICP: myway.comRisquesClient.Model.PersonneFICP[];
        erreurFCC: string;
        erreurFICP: string;
        boutonContinuerDisable: boolean;
        lanceBindingFCC: boolean;
        lanceBindingFICP: boolean;
        modeEdition: boolean;
        afficherInterface: boolean;
        erreurGenerationCleBDF: string;
        compteurListeCodeOrigine: number;
        appelFICP: boolean;
        appelFCC: boolean;
        static VALUE_IMPRESSION_AUTO: string;
        static VALUE_IMPRESSION_PDF: string;
        static LISTE_MOTIFS: {
            id: string;
            value: string;
        }[];
        constructor($scope: ng.IScope, genereCleBDFService: myway.comRisquesClient.GenereCleBDFService, interroBDFService: myway.comRisquesClient.InterroBDFService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, modeImpression: string, modeArchivage: myway.comRisquesClient.Model.ArchivageInterroBDF, modeAveugle: boolean, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, $q: ng.IQService, modeInterrogationForce: string);
        private closePopup();
        /**
         * @description : gère les erreurs
         * @alias processError
         * @return {void}
         * @param {any} error
         * @param {myway.comRisquesClient.Model.PersonneBDF} : item
         */
        private processErrorFICP(error, item?);
        private processErrorFCC(error, item?);
        /**
         * @description : Selon type données reçus en entrée : appel de l'interro BDF correspondante
         * @alias checkTypeDonneeEnEntree
         * @return {void}
         * @param {myway.comRisquesClient.Model.InterroBDFManuelle} : entree
         */
        private checkTypeDonneeEnEntree(entree);
        /**
         * @description : Ajoute la propriété 'retour' dans l'objet de sortie (retour comme existant NSDK)
         * @alias getRetourCommeNSDK
         * @return {void}
         * @param {myway.comRisquesClient.Model.InterroBDFManuelle} : entree
         */
        private getRetourCommeNSDK(entree?);
        /**
         * @description : callInterroBDF : appel des services
         * @alias callInterroBDF
         * @return {void} ou {any}
         * @param {myway.comRisquesClient.Model.InterroBDFManuelle} : entree
         * @param {spinner?}
         */
        private callInterroBDFManuelle(entree);
        private callInterroBDFManuelleFCC(entree, spinner?);
        private callInterroBDFManuelleFICP(entree, spinner?);
        private callInterroBDFDecouvertCredit(entree);
        private callInterroBDFDecouvertCreditFCC(entree, spinner?);
        private callInterroBDFDecouvertCreditFICP(entree, spinner?);
        private callInterroBDFCarte(entree);
        private callInterroBDFCarteFCC(entree, spinner?);
        private callInterroBDFCarteFICP(entree, spinner?);
        private callInterroBDFCheque(entree);
        private callInterroBDFChequeFCC(entree, spinner?);
        private callInterroBDFChequeFICP(entree, spinner?);
        /**
         * @description : traite les infos envoyées en retour des services
         * @alias traiteRetour
         * @return {void}
         * @param {any} : data
         */
        private traiteRetourFCC(data);
        private traiteRetourFICP(data);
        /**
         * @description : gère l'affichage (récapitulatif/synthèse) et les erreurs du mode aveugle
         * @alias bindData
         * @return {void}
         * @param {void}
         */
        bindData(): void;
        /**
         * @description : lors du clic sur le collapse d'un homonyme : appel le service REST pour avoir le détail de l'homonyme
         * @alias onClickLigne
         * @return {void}
         * @param {myway.comRisquesClient.Model.PersonneFCC/FICP}
         */
        onClickLigneFICP(item: myway.comRisquesClient.Model.PersonneFICP): void;
        onClickLigneFCC(item: myway.comRisquesClient.Model.PersonneFCC): ng.IPromise<void>;
        /**
         * @description :  remplit item avec data
         * @alias onClickLigne
         * @return {void}
         * @param {myway.comRisquesClient.Model.PersonneFCC/FICP} item
         * @param {any} data
         */
        private remplitInfosPersonneFCC(item, data);
        private remplitInfosPersonneFICP(item, data);
        /**
         * @description : Ouvre la ligne de l'homonyme
         * @alias expandedCollpase
         * @return {void}
         * @param {myway.comRisquesClient.Model.PersonneBDF} item
         */
        private expandedCollpase(item);
        /**
         * @description : mécanisme : un bouton oui coché = tous les autres à non
         * @alias expandedCollpase
         * @return {void}
         */
        onCheckedRadioButtonFICP(item: any, value: boolean): void;
        onCheckedRadioButtonFCC(item: any, value: boolean): void;
        checkAllRadioButton(): void;
        /**
         * @description : réunit les infos puis affiche la synthèse
         * @alias reunitInfosPourSynthese/afficheSynthese
         * @return {void}
         */
        afficheSynthese(): void;
        reunitInfosPourSynthese(): ng.IPromise<void>;
        /**
         * @description : gère l'impression/archivage
         * @alias appelEdition
         * @return {void}
         */
        appelEdition(): ng.IPromise<any>;
        /**
         * @description : Génère une popup d'erreur lors de l'echec d'une generation de doc
         * @alias processError
         * @return {void}
         * @param {MyWay.Services.Erreur}
         */
        private processError(error);
        /**
         * @description : Automatisation de l'entête - a retirer quand service Impression l'aura intégré (Y.GUERIN)
         * @alias genereEntete
         * @return {myway.comRisquesClient.impression.GENERIC_ENTETEETS[]}
         * @param {numrefdoc}
         * @param {codebarre}
         * @param {refacte}
         */
        private genereEntete(numrefdoc?, codebarre?, refacte?);
        /**
         *  Compose la DesignationCourteTiers : nom + '*' + prenom.
         *  Une limite de 32 car est fixée par défaut
         *  Règle métier: C'est le nom qui est tronqué si necessaire. Aprés ce sera le prénom.
         * @param {string} civilite - Si undefined ou null ou chaine vide, ignoré.
         * @param {string} nom
         * @param {string} prenom
         * @param {number} longueurMax - par defaut 32, sinon prendra la valeur passée. Mettre -1 si pas de troncature.
         * @return le nom composé complet.
         * @exemple  let nc:string = Commun.UString.composeNomCompletnom, prenom);
         *           let nc:string = Commun.UString.composeNomComplet(nom, prenom, 40);
         *           let nc:string = Commun.UString.composeNomComplet(nom, prenom, -1);
         *
         */
        private static composDesignationCourteTiers(nom, prenom, longueurMax?);
    }
}

declare module myway.comRisquesClient {
}

declare module myway.comRisquesClient {
    class InterroBDFService {
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        /**
         * @ngdoc function
         * @name afficheInterroBDFModale
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercherPersonneModale()
         * @description
         * fonction qui permet d'appler le moteur de recherche en mode modale.
         * @param {string, MyWay.Model.Client} : un string contenant le mode d'appel souhaité + une instance de l'anyMyWay.Model.Client().
         * @returns {ng.IPromise<MyWay.Model.Client>} promesse contenant la personne selectionnée.
         */
        afficheInterroBDFModale(criteres: any, modeAveugle: boolean, modeImpression: string, modeArchivage?: myway.comRisquesClient.Model.ArchivageInterroBDF, modeInterrogationForce?: string): ng.IPromise<myway.comRisquesClient.Model.PersonneBDF>;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
        /**
         * @Returns a CodeGuichetInterbancaire des Paramètres Comptables {ng.IPromise<string>}.
         * @alias getCodeGuichetInterbancaire.
         * @param {void} : string.
         * @description return le CodeGuichetInterbancaire.
         */
        getCodeGuichetInterbancaire(): ng.IPromise<string>;
        /**
         * Méthode pour récupérer le libellé de nature crédit associé à la personne
         * @param codeNatureCredit
         */
        recupererLibelleNatureCredit(codeNatureCredit: string): ng.IPromise<string>;
        /**
         * @Returns an any {ng.IPromise<any>}.
         * @alias getInterroFCCManuelle, getInterroFCCDecouvertCredit, getInterroFCCCarte, getInterroFCCCheque
         * @param {void} : any.
         * @description return les infos pour l'interro BDF FCC (manuelle, découverte, crédit, carte et chèque).
         */
        getInterroFCCManuelle(cleBdf: string, codeOrigine: string, sousCle?: string): ng.IPromise<any>;
        getInterroFCCDecouvertCredit(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string): ng.IPromise<any>;
        getInterroFCCCarte(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, codeProduitCarte: string): ng.IPromise<any>;
        getInterroFCCCheque(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, codeTypeChequier: string, nombreChequier: number, codeFamilleChequier: string): ng.IPromise<any>;
        /**
         * @Returns an any {ng.IPromise<any>}.
         * @alias getInterroFICPManuelle, getInterroFICPDecouvertCredit, getInterroFICPCarte, getInterroFICPCheque
         * @param {void} : any.
         * @description return les infos pour l'interro BDF FICP (manuelle, découverte, crédit, carte et chèque).
         */
        getInterroFICPManuelle(cleBdf: string, codeOrigine: string, sousCle: string, motifConsultation: string, typeCredit: string, identifiantDossierInstruction: string): ng.IPromise<any>;
        getInterroFICPDecouvertCredit(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, motifConsultation: string, typeCredit: string, identifiantDossierInstruction: string): ng.IPromise<any>;
        getInterroFICPCarte(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, codeProduitCarte: string, motifConsultation: string, typeCredit: string, identifiantDossierInstruction: string): ng.IPromise<any>;
        getInterroFICPCheque(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, codeTypeChequier: string, nombreChequier: number, codeFamilleChequier: string, motifConsultation: string, typeCredit: string, identifiantDossierInstruction: string): ng.IPromise<any>;
    }
}

declare module myway.comRisquesClient.Model {
    class PersonneBDF {
        cleBDF: string;
        sousCleFCC: string;
        sousCleFICP: string;
        nomUsage: string;
        nomFamille: string;
        prenom: string;
        dateNaissance: Date;
        lieuNaissance: string;
        departement: string;
        fichier: string;
        dateJour: Date;
        sexe: string;
        documentGenere: any;
        fichage: boolean;
        expanded: boolean;
        spinner: boolean;
        erreur: string;
        retour: string;
        motifs: string;
        messageFCC: string;
        messageFICP: string;
        personneFCC: myway.comRisquesClient.Model.PersonneFCC;
        personneFICP: myway.comRisquesClient.Model.PersonneFICP;
        personneListeFCC: myway.comRisquesClient.Model.PersonneFCC[];
        personneListeFICP: myway.comRisquesClient.Model.PersonneFICP[];
    }
    class PersonneFCC extends myway.comRisquesClient.Model.PersonneBDF {
        dateFinIB: Date;
        dateFinIJ: Date;
        dateDernierRetrait: Date;
        remarques: string;
        nombreComptesIndiv: number;
        nombreChequesIndiv: number;
        montantIndiv: number;
        nombreComptesColl: number;
        nombreChequesColl: number;
        montantColl: number;
        siren: string;
        pcs: string;
        adresse1: string;
        adresse2: string;
        date: Date;
    }
    class PersonneFICP extends myway.comRisquesClient.Model.PersonneBDF {
        dateRadiation: string;
        nombreIncidents: number;
        nombreDeclarants: number;
        natureCredit: number;
        libelleNatureCredit: string;
        mesures: string;
        date: Date;
    }
    class InterroBDFManuelle {
        dateNaissance: Date;
        nomFamille: string;
        prenom: string;
        codeOrigine: string;
        sousCleFCC: string;
        sousCleFICP: string;
        motifConsultation: string;
        typeCredit: string;
        identifiantDossierInstruction: string;
        supprimerDebutNom: boolean;
    }
    class InterroBDFDecouvertCredit extends InterroBDFManuelle {
        codeProduitService: string;
        identifiantTiers: string;
        referenceProduit: string;
        designationCourteTiers: string;
    }
    class InterroBDFCarte extends InterroBDFDecouvertCredit {
        codeProduitCarte: string;
    }
    class InterroBDFCheque extends InterroBDFDecouvertCredit {
        codeTypeChequier: string;
        nombreChequierCommande: number;
        codeFamilleChequier: string;
    }
    class ArchivageInterroBDF {
        idntCmpstApplf: string;
        codeTypeModeAcqs: string;
        codeTypeOrigAcqs: string;
        codeTypeNatrDoc: string;
        codeTypeAttrb: string;
        idntAttrb: string;
        dateDeliv: Date;
        dateNumr: Date;
        inttAttr: string;
        dateAttr: Date;
        codeTypeSign: string;
        numRefDoc: string;
        codeBarre: string;
    }
}

declare module myway.comRisquesClient {
    class GenereCleBDFService {
        private serviceAgentExtended;
        static $inject: string[];
        private static MAX_COUNT_MONTH;
        private static MAX_COUNT_DAY;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @description : genere la clé BDF à partir du nom et de la date de naissance
         * @alias genereCleBDF
         * @return {string} : clé BDF
         * @param {Date} : date de naissance
         * @param {string} : nom
         */
        genereCleBDF(dateNaiss: Date, nom: string, supprimerDebutNom: boolean): string;
        /**
         * @description : normalise la chaine en entrée (enlève les accents, etc..)
         * @alias normalize
         * @return {string} : chaine normalisée
         * @param {string} : chaine
         */
        private normalize(chaine);
    }
}

declare module myway.comRisquesClient.impression {
    class GenerationInterroBDF {
        private personne;
        /**
         * @return {SIDCGCE_Interro_BDF}.
         * @alias createDocument
         * @param {Model.PersonneBDF} : personne.
         * @param {Array<GENERIC_ENTETEETS>} : entête
         * @description Créer le document à imprimer et le remplit avec les données de personne et entête en assemblant les différents blocs
         */
        createDocument(personne: Model.PersonneBDF, entete: Array<GENERIC_ENTETEETS>): SIDCGCE_Interro_BDF;
        /**
         * @return {SIDCGCE_Interro_BDF}.
         * @alias initialisationInterroBDF
         * @param {void}
         * @description initialisation du document
         */
        private initialisationInterroBDF();
        /**
         * @return {choice_SIDCGCE_Interro_BDFSection1_GENERIC_TITREDOCUMENT}.
         * @alias constructionTitre
         * @param {void}
         * @description construit le titre du document
         */
        private constructionTitre();
        /**
         * @return {choice_SIDCGCE_Interro_BDFSection1_Bloc_1}.
         * @alias constructionBlocInterroBDF
         * @param {void}
         * @description construit le bloc Interro BDF
         */
        private constructionBlocInterroBDF();
        /**
         * @return {choice_SIDCGCE_Interro_BDFSection1_BL_FCC}.
         * @alias constructionBlocFCC
         * @param {void}
         * @description construit le bloc FCC
         */
        private constructionBlocFCC();
        /**
         * @return {choice_SIDCGCE_Interro_BDFSection1_BL_FICP}.
         * @alias constructionFICP
         * @param {void}
         * @description construit le bloc FICP
         */
        private constructionFICP();
    }
}

declare module myway.comRisquesClient.impression {
    interface ISIDCGCE_Interro_BDF {
        Section1: myway.comRisquesClient.impression.SIDCGCE_Interro_BDFSection1[];
        GENERIC_ENTETEETS: myway.comRisquesClient.impression.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIDCGCE_Interro_BDFSection1 {
        _blocChoice_: (choice_SIDCGCE_Interro_BDFSection1_BL_FCC | choice_SIDCGCE_Interro_BDFSection1_BL_FICP | choice_SIDCGCE_Interro_BDFSection1_Bloc_1 | choice_SIDCGCE_Interro_BDFSection1_GENERIC_LIGNEVIDE | choice_SIDCGCE_Interro_BDFSection1_GENERIC_TITREDOCUMENT)[];
    }
    interface choice_SIDCGCE_Interro_BDFSection1_BL_FCC {
        BL_FCC: SIDCGCE_Interro_BDFSection1BL_FCC;
    }
    interface choice_SIDCGCE_Interro_BDFSection1_BL_FICP {
        BL_FICP: SIDCGCE_Interro_BDFSection1BL_FICP;
    }
    interface choice_SIDCGCE_Interro_BDFSection1_Bloc_1 {
        Bloc_1: SIDCGCE_Interro_BDFSection1Bloc_1;
    }
    interface choice_SIDCGCE_Interro_BDFSection1_GENERIC_LIGNEVIDE {
        GENERIC_LIGNEVIDE: number;
    }
    interface choice_SIDCGCE_Interro_BDFSection1_GENERIC_TITREDOCUMENT {
        GENERIC_TITREDOCUMENT: GENERIC_TITREDOCUMENT;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: myway.comRisquesClient.impression.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB10175[];
        b13135: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB13135[];
        b13705: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB13705[];
        b14445: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB14445[];
        b14505: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB14505[];
        b15135: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB15135[];
        b15905: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB15905[];
        b15965: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB15965[];
        b16275: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB16275[];
        b18025: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB18025[];
        b18279: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB18279[];
        b43199: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB43199[];
        b18715: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB18715[];
        b13335: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB13335[];
        b17515: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB17515[];
        b62108: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB62108[];
        b12579: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB12579[];
        b13825: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB13825[];
        b16705: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB16705[];
        b12135: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB12135[];
        b14265: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB14265[];
        b13485: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB13485[];
        b18315: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB18315[];
        b11315: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB11315[];
        b11425: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB11425[];
        b12548: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB12548[];
        b30051: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETSB30051[];
    }
    interface GENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13135 {
        d13135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14445 {
        d14445_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15135 {
        d15135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18025 {
        d18025_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13335 {
        d13335_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB62108 {
        d62108_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13825 {
        d13825_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12135 {
        d12135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13485 {
        d13485_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11315 {
        d11315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12548 {
        d12548_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
    }
    interface SIDCGCE_Interro_BDFSection1BL_FCC {
        GENERIC_LIGNEVIDE: number;
        Clé_FCC: string;
        Sous_Clé_FCC: string;
        Date_FCC: string;
        Nom_Famille_FCC: string;
        Prénom_FCC: string;
        Nom_Usage_FCC: string;
        SIREN_FCC: string;
        PCS_FCC: string;
        Sexe_FCC: string;
        Dat_Naiss_FCC: string;
        Lieu_Naiss_FCC: string;
        Adresse1_FCC: string;
        Adresse2_FCC: string;
        Date_Fin_IB_FCC: string;
        Date_Fin_IJ_FCC: string;
        Date_Dern_Retrait_FCC: string;
        Remarque1_FCC: string;
        Remarque2_FCC: string;
        Nb_Cpte_Ind_FCC: string;
        Nb_Chèque_Ind_FCC: string;
        Montant_Ind_FCC: string;
        Nb_Cpte_Coll_FCC: string;
        Nb_Chèque_Coll_FCC: string;
        Montant_Coll_FCC: string;
    }
    interface GENERIC_TITREDOCUMENT {
        TITRE_DOCUMENT: string;
    }
    interface SIDCGCE_Interro_BDFSection1BL_FICP {
        GENERIC_LIGNEVIDE: number;
        Clé_BDF_FICP: string;
        Sous_Clé_FICP: string;
        Fichier_FICP: string;
        Date_FICP: string;
        Nom_Famille_FICP: string;
        Prénom_FICP: string;
        Nom_Usage_FICP: string;
        Sexe_FICP: string;
        Date_Naiss_FICP: string;
        Lieu_Naiss_FICP: string;
        Date_Radiation_FICP: string;
        Nb_Incident_FICP: string;
        Nb_Déclarant_FICP: string;
        Nb_Nature_Credit_FICP: string;
        Mesure_FICP: string;
    }
    interface SIDCGCE_Interro_BDFSection1Bloc_1 {
        PROVENANCE: string;
        TEXTE_1: string;
        TEXTE_2: string;
        TEXTE_3: string;
        TEXTE_4: string;
    }
    class SIDCGCE_Interro_BDF implements ISIDCGCE_Interro_BDF {
        Section1: myway.comRisquesClient.impression.SIDCGCE_Interro_BDFSection1[];
        GENERIC_ENTETEETS: myway.comRisquesClient.impression.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: myway.comRisquesClient.impression.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIDCGCE_Interro_BDFGenerationParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor(personne: Model.PersonneBDF, modeArchivage: myway.comRisquesClient.Model.ArchivageInterroBDF);
    }
    class SIDCGCE_Interro_BDFImpressionParams {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class SIDCGCE_Interro_BDFGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor(personne: Model.PersonneBDF, modeArchivage: myway.comRisquesClient.Model.ArchivageInterroBDF);
    }
}
