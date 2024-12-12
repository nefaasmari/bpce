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
        private parametrageBordereauRetractationService;
        private autorisationCommunicationDonneesBancairesService;
        private parametrageListePiecesJustificativesService;
        private entiteTitulaireAjaxImplService;
        private tiersNoyauService;
        private parametrageLettreAccompagnementService;
        private gestionDossierVenteService;
        private opeFiService;
        private postOpeFiService;
        static $inject: string[];
        static CONTEXTE_GGHO_EDITIQUE: string;
        private contexteEditiqueGGHO;
        private editPreContratDAT;
        private editCondPart;
        private donneesAuthentication;
        private documentPrecontratGGHO;
        private documentConditionParticuliereGGHO;
        private documentBope;
        private documentBore;
        private documentAcdb;
        private documentPjvm;
        private documentLA09;
        private loaderVisible;
        private loaderEtat;
        private promessesMapping;
        private erreurDansEditique;
        private faceAFace;
        private tableauErreurEditique;
        private currentId;
        private generationEnCoursMessageIndicateur;
        private generationTerminerOKMessageIndicateur;
        private pasDeDocumentMessageIndicateur;
        private static CODE_RETOUR_GENERATION_EDITIQUE;
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteEditiqueMockService: ContexteEditiqueMockService, editPreContratDATService: EditPreContratDATService, mappingModelGcePreContratRestService: MappingModelGcePreContratRestService, utileCommunService: UtileCommunService, editConditionParticuliereService: EditConditionParticuliereService, mappingModelGceConditionParticuliereRestService: MappingModelGceConditionParticuliereRestService, gceDocPartieTechniquePreContratService: GceDocPartieTechniquePreContratService, gceDocPartieTechniqueConditionParticuliereService: GceDocPartieTechniqueConditionParticuliereService, creationBordereauService: BordereauOperationService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService, parametrageBordereauRetractationService: myway.trans.offreCommun.editique.BordereauRetractation.ParametrageBordereauRetractationService, autorisationCommunicationDonneesBancairesService: myway.trans.offreCommun.editique.AutorisationCommunicationDonneesBancaires.AutorisationCommunicationDonneesBancairesService, parametrageListePiecesJustificativesService: myway.trans.offreCommun.editique.ListePiecesJustificatives.ParametrageListePiecesJustificativesService, entiteTitulaireAjaxImplService: EntiteTitulaireAjaxImplService, tiersNoyauService: TiersNoyauService, parametrageLettreAccompagnementService: myway.trans.offreCommun.editique.lettreAccompagnement.ParametrageLettreAccompagnementService, gestionDossierVenteService: DossierVenteService, opeFiService: myway.comOpesFinancieres.OperationFinanciereService, postOpeFiService: myway.comOpesFinancieres.PostOperationFinanciereService);
        /**
         * Mapping des contextes entre la e-signature et editique DAT avec construction de la liste de documents à imprimer.
         * @returns {void}
         */
        private mappingContexteGGHOESign(data);
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
        estEnVAD(): boolean;
        /**
         * Permet de gerer les paramètres d'impression ou d'archivage
         * @param {Array<any>} datas
         * @returns {void}
         */
        private gererParametresImpressionOuArchivage(datas);
        private gererImpressionOuArchivageBope(descriptionBordereauOperation);
        private gererImpressionOuArchivageBore(descriptionBordereauRetraction);
        private gererImpressionOuArchivageAcdb(autorisationCommunicationDonneesBancaires);
        private gererImpressionOuArchivagePjvm(listePiecesJustif);
        private gererImpressionOuArchivageLa09(lettreAccompagnement);
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
        gestionDocumentPreContrat(): ng.IPromise<sibcgcePrecontractuelles.SibcgcePrecontractuelles>;
        /**
         * Permet de gérer le document des conditions particulières
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentAImprimer
         * @returns {ng.IPromise<sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01>}
         */
        gestionDocumentConditionParticuliere(): ng.IPromise<sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01>;
        /**
         * Permet de gérer le document des conditions particulière
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentAImprimer
         * @returns {ng.IPromise<sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01>}
         */
        private gestionDocumentBope(documentAImprimer);
        private gestionDocumentBore(documentAImprimer);
        private gestionDocumentAcdb(documentAImprimer);
        private gestionDocumentPjvm(documentAImprimer);
        private gestionDocumentLettreAcc(documentAImprimer);
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
        /**
         * Permet de gérer le bouton quitter
         * @returns {void}
         */
        quitter(): void;
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
    interface IElementEditionPersonneDelegataire {
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
        infosPers: IgenericInfoPpListePersonnesInfosPers | IgenericInfoPpListePersonnesInfosPersDelegataire;
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
    interface IgenericInfoPpListePersonnesInfosPersDelegataire {
        NOM_PRENOM_CLIENT: string;
        LIB_CODIRC: string;
        DADANA: string;
        LIDGIL_NAISSANCE: string;
        LIDGV2_6: string;
        LIDGNA: string;
        IDNSBD: string;
        NODATP_CLIENT: string;
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
        static LA09: string;
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
        static BL_CAT_RENOUVELABLE: string;
    }
    class Signataire {
        nom: string;
        numeroPersonne: number;
        designataire: string;
        constructor();
    }
    interface IContenuBloc extends sibcgcePrecontractuelles.BlocGenerique {
        map: any;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface IDossierNumeriqueSignataireGetQuery {
        codeCanal: string;
        identifiantEntiteTitulaire: string;
        codeActeGestion: string;
        codeGuichetCompteSupport: string;
        identifiantPersonne: string;
        codePSCompteSupport: string;
        codeTypePSCompteSupport: string;
        listeCodeTypeProduitService: Array<string>;
        isPro: boolean;
    }
    interface IPersonne {
        /**
         * code Type Lien Inter Personnes
         */
        codeTypeLienInterPersonnes: string;
        /**
         * date Deces Personne
         * Type date au format yyyy-MM-dd
         */
        dateDecesPersonne: string;
        /**
         * date Naissance
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * codePersonnaliteJuridique
         *
         * |code | Description |
         * |--- | --- |
         * |00 | MINEUR SOUS MESURE AIDE GESTION BUDGET FAMILIAL MAGBF|
         * |01 | MINEUR EMANCIPE|
         * |02 | MINEUR SOUS ADMINISTRATION LEGALE PURE ET SIMPLE|
         * |03 | MINEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE|
         * |04 | MINEUR SS TUTELLE COMPLETE(TUTEUR+SUBROGE TUT.+ JUGE)|
         * |05 | MINEUR SOUS TUTELLE D'ETAT|
         * |06 | MINEUR SOUS ADMINISTRATION AD HOC|
         * |07 | MAJEUR CAPABLE|
         * |08 | MAJEUR SOUS SAUVEGARDE DE JUSTICE|
         * |09 | MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT DONNE|
         * |10 | MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT SPECIAL|
         * |11 | MAJEUR SOUS CURATELLE SIMPLE|
         * |12 | MAJEUR SOUS CURATELLE RENFORCEE|
         * |13 | MAJEUR SOUS TUTELLE COMPLETE|
         * |14 | MAJEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE|
         * |15 | MAJEUR SOUS TUTELLE|
         * |16 | MAJEUR SS MESURE ACCOMP. SOCIAL PERSONNALISE (MASP)|
         * |17 | MAJEUR SS MESURE ACCOMP. JUDICIAIRE (MAJ)|
         * |18 | MAJEUR SS MESURE AIDE GESTION BUDGET FAMILIAL (MAGBF)|
         * |19 | MAJEUR SS MANDAT DE PROTECTION FUTURE SIMPLE|
         * |20 | MAJEUR SS MANDAT DE PROTECTION FUTURE ETENDU|
         */
        codePersonnaliteJuridique: string;
        /**
         * IdentifiantPersonne
         */
        identifiantPersonne: number;
        /**
         * code Capacite Juridique
         */
        codeCapaciteJuridique: number;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        codeTypePersonne: string;
        /**
         * indice Responsable Comptes ET
         */
        indiceResponsableET: string;
        /**
         * nom de famille
         */
        nomFamille: string;
        /**
         * nom usage
         */
        nomUsage: string;
        /**
         * premier prénom de l'état civil
         */
        prenom: string;
        codeCivilite: number;
        codeTypeSituationFamille: string;
        codeFamilleLiensInterPersonnes: string;
        /**
         * Numéro du rang de la personne vis a vis de l'entité titulaire.
         */
        numeroRangPersonneET: string;
        codeTypeMandat: string;
        raisonSocial: string;
        /**
         * Défini le rôle de la personne.
         *
         * code | Description
         * --- | ---
         * T | Titulaire
         * R | Représentant légal
         * Z | Autre signataire
         * M | Mandataire
         * D | Délégataire
         */
        codeRoleSignataire: string;
        /**
         * Permet de savoir si la personne peut être sélectionné.
         */
        isSelectionnable: boolean;
        /**
         * Permet de savoir si la personne est sélectionnée
         */
        isSelectionne: boolean;
        /**
         * Désignation courte particulier
         */
        designationCourte: string;
        /**
         * S'applique uniquement aux délégataires pour spécifier une restriction de financement.
         * 0 : Financement non autorisé
         * >0 : Limite
         * -1 : illimité
         */
        montantAutorisationSignataire: number;
    }
    interface ISignataire {
        /**
         * ListLienPersonne
         */
        personnes: Array<IPersonne>;
        /**
         * Nombre maximum de sélection de signataire
         */
        maxSelectionne: number;
        /**
         * Nombre minimum de sélection du signataire
         */
        minSelectionne: number;
    }
    interface ISignataireReponse {
        titulaires: ISignataire;
        representantsLegaux: ISignataire;
        mandataires: ISignataire;
        /**
         * Nombre maximum de signataires sélectionnables
         */
        maxSignataire: number;
        autres: ISignataire;
        /**
         * Libellé de la règle de sélection
         */
        libelleRegle: string;
        /**
         * Libellé de l'erreur de sélection
         */
        libelleErreur: string;
        /**
         * Clé de la règle de sélection
         */
        cleRegle: string;
        /**
         * Permet de savoir si le bloc signataire doit être déplié par défaut
         */
        estDeplier: boolean;
        delegataires: ISignataire;
        /**
         * True si la ressource signataireDocument a utilisé la QR Pro D17C880
         * False sinon, QR D1737900
         */
        isPro: boolean;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface ICompositionPanier {
        /**
         *        Détermine une sous-famille d'actes de gestion : chaque famille d'actes de gestion est décomposée en sous-familles d'actes selon
         * le catalogue des actes de gestion. Exemples :
         *
         *  'OU' = Ouverture contrat normale
         *  'OT' = Ouverture contrat par transfert
         *  'AV' = Avenant
         *  Création ou maj : doit être renseigné si l'occurrence concerne un produit/service et codeActeGestionComposition non renseigné
         */
        codeSousFamilleActeComposition: string;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         * Création ou maj : doit être renseigné si l'occurrence concerne un produit/service et codeActeGestionComposition non renseigné
         */
        identifiantProduitServiceCompo: number;
        /**
         * cet indicateur est à true si ce produit est de la famille des izicarte
         */
        familleIzicarte: boolean;
        /**
         * Codipr du produit service en question
         */
        codeProduitServiceCompo: string;
    }
    interface IPieceJustif {
        /**
         * il s'agit du document nécessaire a la justification
         */
        documentJustificatif: string;
        /**
         * message à afficher pour la demande du document
         */
        messageJustificatif: string;
    }
    interface IRecherchePieceJustif {
        /**
         * code guichet du compte
         */
        codeGuichetCompte: string;
        /**
         * code Etablissement du compte
         */
        codeEtablissementCompte: string;
        /**
         * numero du compte
         */
        numeroCompte: string;
        /**
         * undefined
         */
        listePersonneComposantOffre: Array<IPersonneComposantOffre>;
        /**
         * undefined
         */
        entiteTitulaireComposantOffre: IEntiteTitulaireComposantOffre;
    }
    interface IPersonneComposantOffre {
        /**
         * Nodape de la personne
         */
        numeroPersonne: number;
        /**
         * date de naissance de la personne
         */
        dateNaissancePersonne: Date;
        /**
         * undefined
         */
        listeCompositionPanier: Array<ICompositionPanier>;
        /**
         * undefined
         */
        listePieceJustif: Array<IPieceJustif>;
        /**
         * il s'agit du rang de la personne dans l'ET ex '01' '02' '03'
         */
        rangPersonneET: string;
        /**
         * undefined
         */
        nomPersonne: string;
        /**
         * undefined
         */
        prenomPersonne: string;
        /**
         * undefined
         */
        codeCivilitePersonne: string;
    }
    interface IEntiteTitulaireComposantOffre {
        /**
         * Nodiet de l'offre
         */
        numeroEntiteTitulaire: number;
        /**
         * undefined
         */
        listeCompositionPanier: Array<ICompositionPanier>;
        /**
         * date de creation du Client bancaire
         */
        dateCreationCB: Date;
        /**
         * undefined
         */
        listeRepresentantLegal: Array<IRepresentantLegal>;
    }
    interface IRepresentantLegal {
        /**
         * numero de la personne représentant légal
         */
        numeroPersonneRepresentant: number;
        /**
         * undefined
         */
        listePieceJustif: Array<IPieceJustif>;
        /**
         * undefined
         */
        nomRepresentantLegal: string;
        /**
         * undefined
         */
        prenomRepresentantLegal: string;
        /**
         * undefined
         */
        codeCiviliteRepresentantLegal: string;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface ITiersCorporateTiersLiesGetQuery {
        codeEtablissement: string;
        identifiantTiers: number;
        codeSens: number;
        typeTiersLies: string;
        codeCategorieLien: string;
    }
    interface ILien {
        /**
         * Deuxième tiers en relation
         * Identifie la deuxième personne liée par un lien inter-personnes avec une 1ière personne selon un type de lien.
         */
        identifiantTiersEnRelation: number;
        /**
         * Date création du lien inter-personnes
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Code type du lien inter-personnes
         *
         * **Définition :**
         * Permet de connaître à quel titre une personne (particulier personne physique ou une personne morale) est en relation avec une autre personne.
         *
         * **Valeurs :**
         *
         * | Code | Libellé |
         * | - | - |
         * | '100' | Tuteur |
         * | '102' | Curateur |
         * | '103' | Administrateur légal |
         * | '104' | Administrateur des biens |
         * | '105' | Gérant de tutelle |
         * | '106' | Parent : représentant légal |
         * | '202' | Président Directeur Général |
         * | '203' | Membre du directoire |
         * | '204' | Président |
         * | '205' | Président conseil régional |
         * | '206' | Président conseil général |
         * | '207' | Président du directoire |
         * | '208' | Directeur général unique |
         * | '209' | Représentant |
         * | '210' | Maire |
         * | '211' | Directeur |
         * | '212' | Directeur général |
         * | '213' | Recteur |
         * | '214' | Associé |
         * | '215' | Membre |
         * | '216' | Fondateur |
         * | '217' | Directeur général adjoint |
         */
        codeType: string;
        /**
         * Date de mise à jour du lien inter-personnes
         *
         * **Définition :**
         * Date de mise à jour du lien inter-personnes
         * Type date au format yyyy-MM-dd
         */
        dateMiseAJour: string;
        /**
         * Référence de la pièce justificative du lien inter-personne
         *
         * **Définition :**
         * Référence informatique donnée par la caisse pour désigner le type de pièce qui référence le lien inter personnes.
         */
        referencePieceJustificative: string;
        /**
         * Date de début effet du lien inter-personnes
         *
         * **Définition :**
         * Cette date est utile pour les liens réglementaires de type représentant légal.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffet: string;
        /**
         * Date de fin effet du lien inter-personnes
         *
         * **Définition :**
         * Date d'expiration du lien inter-personnes cette date est utile pour les liens inter-personnes réglementaires.
         *
         * **Exemple :**
         * Représentant légal
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Designation courte
         *
         * **Définition :**
         * Dénomination banalisée :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourte: string;
        /**
         * Code famille du liens inter-personnes
         *
         * **Définition :**
         * Classification en familles des types de liens inter-personnes.
         *
         * La famille  Entité Juridique représente les liens permettant de regrouper les personnes identiques entre les C.E.
         *
         * **Valeurs :**
         *
         * | Code | Libellé |
         * | - | - |
         * | RPP | Représentant légal de personne physique |
         * | RPM | Représentant légal de personne morale |
         * | FA | Famille |
         * | ME | Ménage |
         * | GR | Groupe |
         * | FO | Fonction |
         * | DI | Divers |
         * | GE | Gérant (Protection juridique) |
         */
        codeFamille: string;
        /**
         * Code caractéristique du lien
         *
         * **Définition :**
         * Ce code caractérise les liens de la famille GROUPE.
         *
         * **Valeurs :**
         *
         * | Code | Libellé |
         * | - | - |
         * | ' '  | Non concerné |
         * | '1' | Lien Limite |
         * | '2' | Lien capitalistique |
         * | '3' | Lien juridique |
         * | '4' | Lien nature de représentation |
         */
        codeCaracteristique: string;
        /**
         * Code Qualification du lien
         *
         * **Définition :**
         * Ce code ne concerne que les liens limites (famille GROUPE).
         *
         * **Valeurs :**
         *
         * | Code | Libellé |
         * | - | - |
         * | '00' | Lien négatif |
         * | '01' | Lien nul |
         * | '02' | Lien faible |
         * | '03' | Lien moyen |
         * | '04' | Lien fort |
         * | '  ' | N.C. |
         * | 'FP' | Gérant familial principal |
         * | 'FS' | Gérant familial secondaire |
         * | 'PP' | Gérant professionnel principal |
         * | 'PS' | Gérant professionnel secondaire |
         */
        codeQualification: string;
        /**
         * Pourcentage capitalistique
         *
         * **Définition :**
         * Ce taux représente le pourcentage de détention de la mère vis à vis de la fille.
         */
        pourcentageCapitalistique: number;
        /**
         * Numéro du lien interlocuteur
         *
         * **Définition :**
         * Numéro d'identification d'un lien entre une personne morale ou PRO et son interlocuteur.
         *
         * | Caractéristiques du lien |   |
         * | - | - |
         * | Personne morale ou PRO | NODAPE |
         * | Interlocuteur | NODHIN |
         * | Type d'interlocuteur | CTDHIN |
         * | Type de rôle | CTDHRO |
         */
        numero: number;
        /**
         * Libellé du lien inter-personnes
         *
         * **Définition :**
         * Libellé de désignation du lien inter-personnes.
         */
        libelleType: string;
        /**
         * Code du sens lien
         *
         * **Description :**
         * Indique le sens de lecture du lien.
         *
         * **Exemples :**
         *  - 1 - Est
         *  - 2 - A pour
         */
        codeSens: number;
        /**
         * Code de la personnalité juridique
         *
         * **Description :**
         * Détermine le type de personnalité juridique de la personne.
         *
         * **Valeurs :**
         *
         * | Code | Libellé |
         * | - | - |
         * | "1" | Personne physique |
         * | "2" | Personne morale ou assimilée morale |
         */
        codePersonnaliteJuridique: string;
        /**
         * la référence du locataire. taille 32
         */
        referenceLocataire: string;
        /**
         * taux de droit de vote
         */
        tauxDroitVote: number;
        /**
         * Code catégorie de lien.
         * Valeurs :
         * 0 : Réglementaire, Représentant légal, En lien avec la personne morale
         * 1 : Réglementaire.
         * 5 : Locataires.
         * 7 : En lien avec la Personne Morale.
         * 9 : Représentant légal.
         * 10 : Technique.
         * 11 : Personnes protégées.
         * 12 : De sens "est".
         * 13 : A requalifier
         */
        codeCategorieLien: string;
        /**
         * Déterminer si le lien est éligible à l'ajout aux Sponsors Financiers.
         * Valeurs :
         * « O » si la personne est éligible
         * « N » si non.
         */
        eligibleSponsorFinancier: boolean;
        /**
         * Déterminer si le lien est Sponsor Financier ou non.
         * Valeurs :
         * « O » si la personne 2 est sponsor de la personne morale
         * « N » si la personne 2 n'est pas sponsor de la personne morale.
         * « » si la personne n’est pas concerné
         */
        estSponsorFinancier: boolean;
        /**
         * Pourcentage capitalistique indirect.
         */
        pourcentageCapitalIndirect: number;
        /**
         * Taux de droit de vote indirect.
         */
        tauxDroitVoteIndirect: number;
    }
    interface ICorporateTiersLies {
        /**
         * Identifiant Tiers
         *
         * **Définition :**
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect.
         *
         * Numéro chronologique attribué par le système :
         * Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers: number;
        listeLien: Array<ILien>;
        /**
         * Code etablissement banque entite juridique
         *
         * **Définition :**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         * Code interbancaire
         *
         * Nomenclature des sièges des Etablissements du Réseau des Caisses d'Epargne
         *
         * Codif des Caisses: 1er car= 1 et le 5ème = 5
         *
         * **Exemples :**
         *
         * | Code | Libellé |
         * | - | - |
         * | 17515 | CE Ile de France |
         * | 16275 | CE Nord France Europe |
         * | 43199 | Crédit Foncier de France (CFF) |
         */
        codeEtablissement: string;
        /**
         * bordereau à imprimer
         */
        indicateurBordereauImprimer: boolean;
        listeRepresentant: Array<IRepresentant>;
    }
    interface IRepresentant {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        identifiantPersonneMorale: number;
        /**
         * Identifie une personne physique représentant la personne morale
         */
        identifiantPersonnePhysique: number;
        /**
         * Numéro d'identification de l'activité professionnelle
         */
        numeroChrono: number;
        /**
         * 'QCF' Questionnaire de Compétence et d'expertise financière
         * 'QC3' Questionnaire de Compétence Financière pour les Personnes Physiques
         * 'QR1' Questionnaire de Risque Client pour les Personnes Physiques
         */
        codeQuestionnaire: string;
        /**
         * Dénomination banalisée de la personne
         */
        designationCourte: string;
        /**
         * Libellé de désignation du lien inter-personnes
         */
        libelleTypeLien: string;
        /**
         * Niveau de compétence financière détermine lors de la passation du QCF PM par le représentant légal de la personne morale.
         * 'C1'       Novice
         * 'C2'       Apprenti
         * 'C3'       Averti
         * 'C4'       Expert
         * 'P4'       Professionnel Expert
         * Dans le cas d'une restitution de la liste des représentants éligibles (code choix "V"), le niveau de compétence restitué est le niveau de compétence calculé (COD1CC)
         */
        niveauCompetence: string;
        /**
         * 'C1'       Novice
         * 'C2'       Apprenti
         * 'C3'       Averti
         * 'C4'       Expert
         * 'P4'       Professionnel Expert
         */
        libelleNiveauCompetence: string;
        /**
         * Date de passation du questionnaire
         * Type date au format yyyy-MM-dd
         */
        datePassationQuestionnaire: string;
        /**
         * Code sur 4 caractères identifiant le niveau de compétence calculé par l'IHM de passation du QCF PM développé par IBP
         */
        competenceMIF2: string;
        /**
         * Le QCF est valide s'il a été saisi il y a moins de 2 ans
         */
        indicateurValiditeQuestionnaire: string;
        /**
         * Indique si une personne morale appartient à la catégorie professionnelle au sens de la catégorie MIF2
         * Valeurs possibles :
         * '0' Statut non professionnel
         * '1' Statut professionnel
         * '2' Statut professionnel forcé
         * '3' Statut contrepartie éligible
         */
        typeCategorie: string;
        /**
         * '0' Non PRO
         * '1' PRO
         * '2' PRO Forcé (par choix)
         * '3' Contrepartie éligible
         */
        libelleTypeCategorie: string;
        /**
         * Code sur 4 caractères identifiant le niveau d'appetance aux risque de la personne morale.
         * Valeurs:
         * 0: Prudent
         * 1: Pondéré
         * 2: Actif
         */
        niveauQuestionnaireRisque: string;
        /**
         * Le niveau questionnaire risque accompagné de son libellé. Valeurs possible: R0 - refus R1 - Prudent R2 - Pondéré R3 - Offensif
         */
        libelleNiveauRisque: string;
        /**
         * La date de fin de validité du questionnaire risque(QR).
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeQR: string;
    }
    interface IRestitutionAdminUPBAD {
        listeAdminUPBAD: Array<IAdminUPBAD>;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
    }
    interface IMessageFonctionnel {
        /**
         * Avec le code domaine, ce code message compose l'identifiant réduit du central
         */
        code: string;
        /**
         * Libellé de description de l'anomalie
         */
        libelle: string;
    }
    interface IAdminUPBAD {
        /**
         * Domaine de Valeurs : 000 La requette a normalement aboutie 001 La requette n'a pas aboutie ??? Service indisponible
         */
        codeRetourEchanges: number;
        /**
         * Détermine le type d'abonnement BAD. Valeurs : '1' DEIPRO '2' CENET ...
         */
        typeAbonnementBad: string;
        /**
         * Numéro chrono attribué par le système à chaque ouverture de personne. L'identifiant est unique au sein du CTR. Cela permet d'éviter les conflits d'identifiant en cas de fusion de caisses.
         */
        identifiantPersonne: number;
        /**
         * Dénomination banalisée de la personne : - désignation courte du particulier - libellé libre du lieu d'activité
         */
        designationCourte: string;
        /**
         * Détermine le role-type (profil) d'un utilisateur dans la gestion des abonnements de l'Espace Unique. Typologie gérée dans la table P41Q / appli OCFBDR Valeurs : '0' Administrateur '1' Utilisateur '2' Utilisateur principal
         */
        codeRoleuUilisateurAEU: string;
        /**
         * Libellé de désignation de role-type (profil) d'un utilisateur dans la gestion des Abonnements de l'Espace Unique - 'Admnistrateur' - 'Utilisateur' - 'Admnistrateur-Utilisateur' Attribut géré dans table P41Q /appli OCFBDR
         */
        libelleCourtRoleUtilisateurAEU: string;
        /**
         * Référence d'identification d'une boite à lettre électronique. Chaine de caractères identifiant une boite sur un serveur de messagerie.
         */
        idtAdresseEmail: string;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface ITiersNoyauGetQuery {
        codeEtablissement?: string;
        identifiantPersonne?: number;
        numeroChrono?: number;
        numeroLieuActivite?: number;
    }
    interface IIdentificationTiersDel {
        numeroChrono: number;
        numeroLieuActivite: number;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface ICaracteristiqueTiersDel {
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypePersonne: string;
        dateEntreeRelation: Date;
        codeGuichetRisque: string;
        eligibiliteTiers: string;
        identifiantEDSDomiciliation: string;
        indicateurDroitCompte: string;
        identifiantClientBad: string;
    }
    interface IInformationParticulierDel {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        codeCivilite: string;
        libelleCivilite: string;
        sexe: string;
        libelleSexe: string;
        id: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        dateNaissance: Date;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        codeDepartementNaissance: string;
        libelleDepartementNaissance: string;
        codeInseePaysNationalite: string;
        libelleNationalite: string;
        dateDeces: Date;
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
        dateEffetSituationFamille: Date;
        codeRegimeMatrimonial: string;
        libelleRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        codeCategorieSocioProf: string;
        libelleCsp: string;
        dateEffetCsp: Date;
        nomEmployeur: string;
        numeroSirenEmployeurPrincipal: string;
        dateEmbaucheParEmployeurActuel: Date;
        codeTypeContratTravail: string;
        libelleCodeTypeContratTravail: string;
        dateFinContrat: Date;
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
        dateObtentionPieceJustificative: Date;
        referencePieceJustificative: string;
        noIdentificationFiscaleNifNni: string;
        codeTypeNifNni: string;
        dateNaturalisation: Date;
        dateNaissanceConjoint: Date;
        indicDecesPresume: string;
        dateDecesPresume: Date;
        eligibiliteTiers: string;
        indicDroitCompte: string;
        numeroSirenAutoEntrepreneur: string;
        dateEffetOptionResidence: Date;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        libelleStatutFatca: string;
        dateAttributionStatutFatca: Date;
        identifiantBad: string;
        indicateurActiviteProfessionnel: string;
        identifiantEDSDomiciliation: number;
    }
    interface IInformationProfessionnelDel {
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
        dateCreationJuridique: Date;
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
        dateDebutOptionEirl: Date;
        dateFinOptionEirl: Date;
        indicOptionOpposabiliteEirl: string;
        indicPersMoraleOrganismePublic: string;
        indicPersMoraleMarcheReglemente: string;
        indicEditionBenefrEffectifs: string;
        identifiantLei: string;
        codeEmir: string;
        dateClotureJuridiqueProf: Date;
        codeIndicateurEntrepEtrangere: string;
        indicDelegationClientDeclarat: string;
    }
    interface IInformationEtablissementDel {
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
        dateDebut: Date;
        dateFin: Date;
        activiteEconomiqueReelleLieu: string;
        dateEnregistrementLieuActivite: Date;
        dateDerniereMiseAJourLieu: Date;
        dateDerniereVerifLieuActivite: Date;
        designationLongueLieuActivite: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeResident: string;
        dateDernTracageApeProf: Date;
        libelleTracageCodificationApe: string;
        typeTracageCodificationApe: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeRafraichLieuActivite: string;
    }
    interface IAdresseDel {
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
        numeroVoiePttVillePlus50000Hab: number;
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
        dateDernierRetourPttAdresse: Date;
        nombreRetourPtt: number;
        codePostalFranceEtranger: string;
    }
    interface IMediaDel {
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
    }
    interface IInformationTiersLieDel {
        codeType: string;
        codeSensLienInterPersonnes: string;
        libelleSensLien: string;
        codeEtablissementTiersLie: string;
        identifiantTiersLie: number;
        indicateurRattRelationEco: string;
    }
    interface ITiersNoyauDel {
        caracteristiqueTiers: ICaracteristiqueTiersDel;
        identificationTiers: IIdentificationTiersDel;
        informationParticulier: IInformationParticulierDel;
        informationProfessionnel: Array<IInformationProfessionnelDel>;
        informationEtablissement: Array<IInformationEtablissementDel>;
        adresse: Array<IAdresseDel>;
        media: Array<IMediaDel>;
        informationTiersLie: Array<IInformationTiersLieDel>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    /**
     * Interface du service de Dossier Numerique Signataire
     */
    interface IDossierNumeriqueSignataireService {
        getRequestDossierNumerique: (query: IDossierNumeriqueSignataireGetQuery) => ng.IPromise<ISignataireReponse>;
    }
    /**
     * Déclaration du service Dossier Numerique Signataire
     */
    class DossierNumeriqueSignataireService implements IDossierNumeriqueSignataireService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne l'url de la ressource REST
         */
        url(): string;
        /**
         * Methode d'appel GET
         */
        getRequestDossierNumerique(query: IDossierNumeriqueSignataireGetQuery): ng.IPromise<ISignataireReponse>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    /**
     * Interface de définition du service de Entite titulaire.
     * @author S0076105
     */
    interface IEntiteTitulaireService {
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<GestionGeneriqueOffres.Types.IInformationEntiteTitulaireBdr>;
        getEntitesTitulaires(): GestionGeneriqueOffres.Types.InformationEntiteTitulaireBdr[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "entitetitulaire/informationEntiteTitulaire"
     * avec le verbe d'action GET.
     * @author S0076105
     */
    interface IEntiteTitulaireGetInformationEntiteTitulaireQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "Entite titulaire".
     * @author S0076105
     */
    class EntiteTitulaireAjaxImplService implements IEntiteTitulaireService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<GestionGeneriqueOffres.Types.IInformationEntiteTitulaireBdr>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getEntitesTitulaires(): GestionGeneriqueOffres.Types.InformationEntiteTitulaireBdr[];
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
}

declare module myway.gestionEpargne.editiqueDat {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
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
    interface IPiecesJustificativesService {
        sendPutRequest(data: IRecherchePieceJustif): ng.IPromise<IRecherchePieceJustif>;
    }
    class PiecesJustificativesService implements IPiecesJustificativesService {
        private serviceAgentExtended;
        private qService;
        static piecesJustificativesServiceId: string;
        static $inject: string[];
        private piecesJustificatives;
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendPutRequest(data: myway.gestionEpargne.editiqueDat.IRecherchePieceJustif): ng.IPromise<myway.gestionEpargne.editiqueDat.IRecherchePieceJustif>;
        getPiecesJustificatives: () => myway.gestionEpargne.editiqueDat.IRecherchePieceJustif;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    /**
     * Interface du service de Tiers Corporate Tiers Lies
     */
    interface ITiersCorporateTiersLiesService {
        getRequestTiersCorporateTiersLies: (query: ITiersCorporateTiersLiesGetQuery) => ng.IPromise<ICorporateTiersLies>;
    }
    /**
     * Déclaration du service Tiers Corporate Tiers Lies
     */
    class TiersCorporateTiersLiesService implements ITiersCorporateTiersLiesService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne l'url de la ressource REST
         */
        url(): string;
        /**
         * Methode d'appel GET
         */
        getRequestTiersCorporateTiersLies(query: ITiersCorporateTiersLiesGetQuery): ng.IPromise<ICorporateTiersLies>;
    }
    /**
     * Déclaration du service Mock Tiers Corporate Tiers Lies
     */
    class TiersCorporateTiersLiesMockService implements ITiersCorporateTiersLiesService {
        private serviceAgent;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mockLoaderService: IMockLoaderService);
        /**
         * Methode Mock d'appel GET
         */
        getRequestTiersCorporateTiersLies(query: ITiersCorporateTiersLiesGetQuery): ng.IPromise<ICorporateTiersLies>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    interface ITiersNoyauService {
        getRequestTiersNoyau: (query: ITiersNoyauGetQuery) => ng.IPromise<ITiersNoyauDel>;
    }
    /**
     * Déclaration du service Tiers Noyau
     */
    class TiersNoyauServiceDel implements ITiersNoyauService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne l'url de la ressource REST
         */
        url(): string;
        /**
         * Methode d'appel GET
         */
        getRequestTiersNoyau(query: ITiersNoyauGetQuery): ng.IPromise<ITiersNoyauDel>;
    }
    /**
     * Déclaration du service Mock Tiers Noyau
     */
    class TiersNoyauMockService implements ITiersNoyauService {
        private serviceAgent;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mockLoaderService: IMockLoaderService);
        /**
         * Methode Mock d'appel GET
         */
        getRequestTiersNoyau(query: ITiersNoyauGetQuery): ng.IPromise<ITiersNoyauDel>;
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class UtileCommunService {
        private serviceAgentExtended;
        private $q;
        private opeFiService;
        private piecesJustificativesService;
        static $inject: string[];
        static OU9P: string;
        static AV9P: string;
        static OU9R: string;
        static AV9R: string;
        static AV09: string;
        static OU09: string;
        static OUQA: string;
        static OU9A: string;
        static AV9A: string;
        static OU9Q: string;
        static OU9S: string;
        private promessesArchivage;
        private promessesImpression;
        private dictionnaireIdntPJ;
        private documentsParLot;
        private parametresActiveXGlobaux;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, opeFiService: OpeFiService, piecesJustificativesService: PiecesJustificativesService);
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
        ajoutDocumentBopeLiasseImpression(descriptionBordereauOperation: DescriptionBordereauOperation, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): void;
        genererBope(descriptionBordereauOperation: DescriptionBordereauOperation, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<any>;
        creationParametresImpressionBope(documentAImprimer: GestionGeneriqueOffres.Types.IDocumentAImprimer): ParametreDocumentsImpression;
        creationParametresActiveXIndividuelsBope(documentAImprimer: GestionGeneriqueOffres.Types.IDocumentAImprimer): MyWay.Services.Impression.ParametresActiveXIndividuels;
        ajoutDocumentBoreLiasseArchivage(descriptionBordereauRetractation: DescriptionBordereauRetractation, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): void;
        genererBoreEtAjoutDansDictionnaire(descriptionBordereauRetractation: DescriptionBordereauRetractation, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        ajoutDocumentAcdbLiasseArchivage(acdbDocument: AutorisationCommunicationDonneesBancaires, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): void;
        genererAcdbEtAjoutDansDictionnaire(acdbDocument: AutorisationCommunicationDonneesBancaires, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        ajoutDocumentLa09LiasseArchivage(la09Document: LettreAccompagnement, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): void;
        genererLa09EtAjoutDansDictionnaire(la09Document: LettreAccompagnement, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        ajoutDocumentPjvmLiasseArchivage(pjvmDocument: ListePiecesJustif, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): void;
        genererPjvmEtAjoutDansDictionnaire(pjvmDocument: ListePiecesJustif, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        genererPvjm(contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<IRecherchePieceJustif>;
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
         * Permet de formater le refActeVAD de l'entete du docuement
         * @param {string} refActe
         * @returns {void}
         */
        formatterRefActeVAD(refActe: string, numDossier: string): string;
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
        /**
         * Permet de retourner noms et prénoms des signataires
         * @param {GestionGeneriqueOffres.Types.ISignataire} signataires
         * @returns {string}
         */
        chercherNomPrenomSignataires(signataire: GestionGeneriqueOffres.Types.ISignataire): string;
        obtenitRICEavecCle(ribAvecOuSansCle: string): string;
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
    interface IsipxgceDatRembNpy5o01 {
        section1: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1[];
        genericEnteteets: sipxgceDatRembNpy5o01.IgenericEnteteets[];
        genericPiedpageets: sipxgceDatRembNpy5o01.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsipxgceDatRembNpy5o01Section1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04 | Ich05 | Ich06 | Ich07 | Ich08 | Ich09 | Ich010 | Ich011 | Ich012 | Ich013 | Ich014 | Ich015 | Ich016 | Ich017 | Ich018 | Ich019 | Ich020 | Ich021 | Ich022 | Ich023 | Ich024 | Ich025)[];
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
        genericRgpdSecretBancaire1: IsipxgceDatRembNpy5o01Section1BlPdpJustifie;
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
    interface Ich024 {
        signatSansCnilEpargneMegi: IsipxgceDatRembNpy5o01Section1SignatSansCnilEpargneMegi;
    }
    interface Ich025 {
        blCatRenouv: IsipxgceDatRembNpy5o01Section1BlCatRenouv;
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
    interface IgenericInfoPpDelegataire {
        listePersonnes: sipxgceDatRembNpy5o01.IgenericInfoPpListePersonnesDelegataire[];
    }
    interface IgenericInfoPpListePersonnes {
        blocChoiceJson: (Ich20 | Ich21 | Ich22 | Ich23 | Ich24)[];
    }
    interface IgenericInfoPpListePersonnesDelegataire {
        blocChoiceJson: (Ich20 | Ich21 | Ich22 | Ich23 | IchNonTit | Ich24 | Ich25)[];
    }
    interface IcreationSectionDelegataire {
        genericInfoPp: sipxgceDatRembNpy5o01.IgenericInfoPpDelegataire[];
    }
    interface Ich20 {
        titreRole: IgenericInfoPpListePersonnesTitreRole;
    }
    interface Ich21 {
        infosPers: IgenericInfoPpListePersonnesInfosPers | IgenericInfoPpListePersonnesInfosPersDelegataire;
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
    interface Ich25 {
        infosLigneBlanc: number;
    }
    interface IchNonTit {
        infosPersNonTit: IgenericInfoPpListePersonnesInfosPersNonTit;
    }
    interface IgenericInfoPpListePersonnesInfosPersNonTit {
        lidacv: string;
        nomPrenomClient: string;
        dadana: string;
        lidgilNaissance: string;
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
    interface IsipxgceDatRembNpy5o01Section1BlCatRenouv {
        listeCatRenouv: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouv[];
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouv {
        blocChoiceJson: (Ich41 | Ich42 | Ich43 | Ich44 | Ich45)[];
    }
    interface Ich41 {
        ligne1: IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne1;
    }
    interface Ich42 {
        ligne2: IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne2;
    }
    interface Ich43 {
        ligne3: IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne3;
    }
    interface Ich44 {
        ligne4: IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne4;
    }
    interface Ich45 {
        ligne5: IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne5;
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne1 {
        d0: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne2 {
        d1: string;
        d2: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne3 {
        d3: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne4 {
        d4: string;
        d5: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne5 {
        dl1d: string;
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
        urlEts: string;
        libLaleEts2: string;
    }
    interface IsipxgceDatRembNpy5o01Section1BlPdpJustifieRgpd {
        libLaleEts1: string;
        urlEts: string;
        libLaleEts2: string;
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
        signataireUn?: string;
        signataireDeux?: string;
    }
    interface IsipxgceDatRembNpy5o01Section1SignatSansCnilEpargneMegi {
        libDeladuEts: string;
        date: string;
        signatureAgent: sipxgceDatRembNpy5o01.IsipxgceDatRembNpy5o01Section1SignatSansCnilEpargneMegiSignatureAgent;
        prenomNomAgent: string;
        fonctionConseiller: string;
    }
    interface IsipxgceDatRembNpy5o01Section1SignatSansCnilEpargneMegiSignatureAgent {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
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

declare module myway.gestionEpargne.editiqueDat.lettreAccompagnement {
    interface IlettreAccompagnement {
        corpsDocument: IlettreAccompagnementCorpsDocument[];
        genericLogoEtsDate: IgenericLogoEtsDate[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IlettreAccompagnementCorpsDocument {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04 | Ich05 | Ich06 | Ich07 | Ich08 | Ich09 | Ich010 | Ich011 | Ich012 | Ich013 | Ich014 | Ich015 | Ich016 | Ich017 | Ich018 | Ich019 | Ich020 | Ich021 | Ich022 | Ich023 | Ich024 | Ich025 | Ich026 | Ich027 | Ich028 | Ich029 | Ich030 | Ich031 | Ich032 | Ich033 | Ich034 | Ich035 | Ich036 | Ich037 | Ich038 | Ich039 | Ich040 | Ich041 | Ich042 | Ich043 | Ich044 | Ich045 | Ich046 | Ich047 | Ich048 | Ich049 | Ich050 | Ich051 | Ich052 | Ich053 | Ich054 | Ich055 | Ich056 | Ich057 | Ich058 | Ich059)[];
    }
    interface Ich00 {
        blAdresseWebCe: IlettreAccompagnementCorpsDocumentBlAdresseWebCe;
    }
    interface Ich01 {
        genericAdresseDestArial: IgenericAdresseDestArial;
    }
    interface Ich02 {
        blReferences: IblReferences;
    }
    interface Ich03 {
        blCivilite: IblCivilite;
    }
    interface Ich04 {
        blRemerciementPersMaj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMaj;
    }
    interface Ich05 {
        blRemerciementPersMinSsLj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMinSsLj;
    }
    interface Ich06 {
        blRemerciementPersMinAvecLj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMinAvecLj;
    }
    interface Ich07 {
        blConfMegiavChangementBl: IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBl;
    }
    interface Ich08 {
        blConfMegiavChangementBanca: IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBanca;
    }
    interface Ich09 {
        blConfMegiouEpargne: IlettreAccompagnementCorpsDocumentBlConfMegiouEpargne;
    }
    interface Ich010 {
        blMegicartePersMajNonIzi: IlettreAccompagnementCorpsDocumentBlMegicartePersMajNonIzi;
    }
    interface Ich011 {
        blMegicartePersMin: IlettreAccompagnementCorpsDocumentBlMegicartePersMin;
    }
    interface Ich012 {
        blConfMegiassurance: number;
    }
    interface Ich013 {
        blMegicartePersMajIzi: number;
    }
    interface Ich014 {
        blMegiecarteBleue: number;
    }
    interface Ich015 {
        blMegidirectEcureuil: number;
    }
    interface Ich016 {
        blEngagMonoDetPersMaj: number;
    }
    interface Ich017 {
        blEngagMonoDetPersMin: IlettreAccompagnementCorpsDocumentBlEngagMonoDetPersMin;
    }
    interface Ich018 {
        blModalRecepLiasseDom: IlettreAccompagnementCorpsDocumentBlModalRecepLiasseDom;
    }
    interface Ich019 {
        blModRecLiasAgPerMaj: IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMaj;
    }
    interface Ich020 {
        blModRecLiasAgPerMin: IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMin;
    }
    interface Ich021 {
        blRenvoiDocDom: IlettreAccompagnementCorpsDocumentBlRenvoiDocDom;
    }
    interface Ich022 {
        blRenvoiDocLjpersMin: IlettreAccompagnementCorpsDocumentBlRenvoiDocLjpersMin;
    }
    interface Ich023 {
        blRenvoiDocLgp: IlettreAccompagnementCorpsDocumentBlRenvoiDocLgp;
    }
    interface Ich024 {
        blRenvoiPieceJust: number;
    }
    interface Ich025 {
        blNomPrenom: IlettreAccompagnementCorpsDocumentBlNomPrenom;
    }
    interface Ich026 {
        blPieceJustif: IlettreAccompagnementCorpsDocumentBlPieceJustif;
    }
    interface Ich027 {
        blDefautSignCarteDom: IlettreAccompagnementCorpsDocumentBlDefautSignCarteDom;
    }
    interface Ich028 {
        blDefautSignCarteAg: IlettreAccompagnementCorpsDocumentBlDefautSignCarteAg;
    }
    interface Ich029 {
        blDefautSignVpcssLgp: IlettreAccompagnementCorpsDocumentBlDefautSignVpcssLgp;
    }
    interface Ich030 {
        blDefautSignVpcavLgp: number;
    }
    interface Ich031 {
        blSignAvDecouvert: number;
    }
    interface Ich032 {
        blSignAvChequier: number;
    }
    interface Ich033 {
        blEnvCarteDomPersMaj: IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMaj;
    }
    interface Ich034 {
        blEnvCarteDomPersMin: IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMin;
    }
    interface Ich035 {
        blEnvCarteDomCaisse: IlettreAccompagnementCorpsDocumentBlEnvCarteDomCaisse;
    }
    interface Ich036 {
        blInfoCarte: IlettreAccompagnementCorpsDocumentBlInfoCarte;
    }
    interface Ich037 {
        blContacter: IblContacter;
    }
    interface Ich038 {
        blSalutation: IblSalutation;
    }
    interface Ich039 {
        blAvantSign: IblAvantSign;
    }
    interface Ich040 {
        blSignCaisse: IblSignCaisse;
    }
    interface Ich041 {
        blLegalAssurance: number;
    }
    interface Ich042 {
        blNotaBene: IlettreAccompagnementCorpsDocumentBlNotaBene;
    }
    interface Ich043 {
        blNotaBeneCarte: number;
    }
    interface Ich044 {
        blApresNotaBene: IblApresNotaBene;
    }
    interface Ich045 {
        blRecepDocCommun: number;
    }
    interface Ich046 {
        blRecepDocCarte: IlettreAccompagnementCorpsDocumentBlRecepDocCarte;
    }
    interface Ich047 {
        blRecepDocAssurance: number;
    }
    interface Ich048 {
        blRecepDocCfnjoint: number;
    }
    interface Ich049 {
        blRecepDocDomilis: number;
    }
    interface Ich050 {
        blRecepDocGenerique: IlettreAccompagnementCorpsDocumentBlRecepDocGenerique;
    }
    interface Ich051 {
        blRecepPjCommun: number;
    }
    interface Ich052 {
        blRecepPjIziCarte: number;
    }
    interface Ich053 {
        blRecepPjDomilis: number;
    }
    interface Ich054 {
        blRenvoiDoc: IlettreAccompagnementCorpsDocumentBlRenvoiDoc;
    }
    interface Ich055 {
        blSuiteCarte: IlettreAccompagnementCorpsDocumentBlSuiteCarte;
    }
    interface Ich056 {
        blDomilis: number;
    }
    interface Ich057 {
        blDefautSignatureVpc: IlettreAccompagnementCorpsDocumentBlDefautSignatureVpc;
    }
    interface Ich058 {
        blEngagMonoDetPersMajQuad: number;
    }
    interface Ich059 {
        blEngagMonoDetPersMinQuad: IlettreAccompagnementCorpsDocumentBlEngagMonoDetPersMinQuad;
    }
    interface IgenericLogoEtsDate {
        logoEtablissement: IgenericLogoEtsDateLogoEtablissement;
        date: string;
    }
    interface IgenericLogoEtsDateLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
    }
    interface IlettreAccompagnementCorpsDocumentBlAdresseWebCe {
        adresseWebCe: string;
    }
    interface IblApresNotaBene {
        libelle: string;
    }
    interface IblSignCaisse {
        denoSignataire: string;
        nomConseiller: string;
    }
    interface IblAvantSign {
        libelle: string;
    }
    interface IblSalutation {
        civilite: string;
    }
    interface IblContacter {
        libelle: string;
    }
    interface IblCivilite {
        civilite: string;
    }
    interface IblReferences {
        numDossierVente: string;
        idClient: string;
    }
    interface IgenericAdresseDestArial {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBanca {
        souscriptionModification: string;
        nomOffreProduit: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBl {
        souscriptionModification: string;
        nomOffreProduit: string;
        prixBouql: string;
        indicateurAssurrance: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlConfMegiouEpargne {
        nomOffreProduit: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlDefautSignCarteAg {
        souscriptionContrat: string;
        sousModAvenant: string;
        clotureSansFrai: string;
        resiliationSansFrai: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlDefautSignCarteDom {
        souscriptionContrat: string;
        souscriptionAvenant: string;
        modificationContrat: string;
        clotureSansFrai: string;
        resiliationSansFrai: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlDefautSignVpcssLgp {
        souscriptionContrat: string;
        sousModAvenant: string;
        modificationContrat: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlDefautSignatureVpc {
        nomProduit: string;
        mineur: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEngagMonoDetPersMin {
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEngagMonoDetPersMinQuad {
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEnvCarteDomCaisse {
        libelle: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMaj {
        cpSigne: string;
        avSigne: string;
        presenceAssurance: string;
        presenceIzicarte: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMin {
        cpSigne: string;
        avSigne: string;
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlInfoCarte {
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlMegicartePersMajNonIzi {
        typeCarte: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlMegicartePersMin {
        typeCarte: string;
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMaj {
        cpAvContrat: string;
        presenceAssurance: string;
        conditionTarifaire: string;
        presenceCarte: string;
        cpAvContratDeux: string;
        presenceAssuranceDeux: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMin {
        cpAvContrat: string;
        conditionTarifaire: string;
        presenceCarte: string;
        civilite: string;
        prenom: string;
        nom: string;
        cpAvContratDeux: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlModalRecepLiasseDom {
        exemplaireDocument: string;
        nomOffre: string;
        indicInfosPrecontractuelles: string;
        indicateurPresenceAssurance: string;
        indicateurEcheancier: string;
        indicateurBordereau: string;
        indicateurAcdb: string;
        indicateurSepa: string;
        conditionTarifaire: string;
        indicateurCarteIziouNonIzi: string;
        indicateurBordereauRetractation: string;
        point: string;
        messageIndicateurCarteIzi: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlNomPrenom {
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlNotaBene {
        cpSigne: string;
        signRenvCp: string;
        signAv: string;
        conditionParticuliere: string;
        avenant: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlPieceJustif {
        pieceJustif: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRecepDocCarte {
        typeCarte: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRecepDocGenerique {
        phrase: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRemerciementPersMaj {
        dateAppel: string;
        souscription: string;
        nomOffreProduit: string;
        rappelConditionsParticulieres: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRemerciementPersMinAvecLj {
        dateAppel: string;
        civilite: string;
        prenom: string;
        nom: string;
        souscription: string;
        nomOffreProduit: string;
        rappelConditionsParticulieres: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRemerciementPersMinSsLj {
        dateAppel: string;
        souscription: string;
        nomOffreProduit: string;
        civilite: string;
        prenom: string;
        nom: string;
        rappelConditionsParticulieres: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDoc {
        ceNb: string;
        phraseRenvoi: string;
        libelleCaisse: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDocDom {
        cpAv: string;
        indicInfosPrecontractuelles: string;
        indicateurAcdb: string;
        presenceCarteIzi: string;
        presenceAssurance: string;
        paiementCheque: string;
        ceNb: string;
        adresseSuivante: string;
        libelleCaisse: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDocLgp {
        processVente: string;
        indicInfosPrecontractuelles: string;
        presenceAcdb: string;
        presenceCheque: string;
        adresseSuivante: string;
        libelleCaisse: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDocLjpersMin {
        civilite: string;
        prenom: string;
        nom: string;
        processVente: string;
        presenceCheque: string;
        ceNb: string;
        adresseSuivante: string;
        libelleCaisse: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlSuiteCarte {
        detailRetraitCarte: string;
    }
    class LettreAccompagnement implements IlettreAccompagnement {
        corpsDocument: IlettreAccompagnementCorpsDocument[];
        genericLogoEtsDate: IgenericLogoEtsDate[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class LettreAccompagnementArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class LettreAccompagnementArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat.ListePiecesJustificatives {
    interface IlistePiecesJustificatives {
        piecesJustificativesCorpsDocument: IlistePiecesJustificativesPiecesJustificativesCorpsDocument[];
        genericLogoEts: IgenericLogoEts[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocument {
        blTitrePj: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj[];
        blIntroPj: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj[];
        blCopieDocuments: number;
        blPersonne: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne[];
        blAenvoye: number;
        blPasMsi: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi[];
        blMsichoisirObj: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj[];
        blMsirepMsgCons: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons[];
        blNumeroDossierVente: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlNumeroDossierVente[];
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj {
        libelleActe: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj {
        libelleActe: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne {
        civilite: string;
        nom: string;
        prenom: string;
        role: string;
        blPieceJustificative: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonneBlPieceJustificative[];
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonneBlPieceJustificative {
        libelle: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi {
        libelleCaisse: string;
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj {
        libelleCaisse: string;
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
        objetCaisse: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons {
        libelleCaisse: string;
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlNumeroDossierVente {
        numeroDossierVente: string;
    }
    interface IgenericLogoEts {
        logoEtablissement: IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: IgenericPiedpageetsB10175[];
        b13135: IgenericPiedpageetsB13135[];
        b13705: IgenericPiedpageetsB13705[];
        b14445: IgenericPiedpageetsB14445[];
        b14505: IgenericPiedpageetsB14505[];
        b15135: IgenericPiedpageetsB15135[];
        b15905: IgenericPiedpageetsB15905[];
        b15965: IgenericPiedpageetsB15965[];
        b16275: IgenericPiedpageetsB16275[];
        b18025: IgenericPiedpageetsB18025[];
        b18279: IgenericPiedpageetsB18279[];
        b43199: IgenericPiedpageetsB43199[];
        b18715: IgenericPiedpageetsB18715[];
        b13335: IgenericPiedpageetsB13335[];
        b17515: IgenericPiedpageetsB17515[];
        b62108: IgenericPiedpageetsB62108[];
        b12579: IgenericPiedpageetsB12579[];
        b13825: IgenericPiedpageetsB13825[];
        b16705: IgenericPiedpageetsB16705[];
        b12135: IgenericPiedpageetsB12135[];
        b14265: IgenericPiedpageetsB14265[];
        b13485: IgenericPiedpageetsB13485[];
        b18315: IgenericPiedpageetsB18315[];
        b11315: IgenericPiedpageetsB11315[];
        b11425: IgenericPiedpageetsB11425[];
        b12548: IgenericPiedpageetsB12548[];
        b30051: IgenericPiedpageetsB30051[];
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
    class ListePiecesJustificatives implements IlistePiecesJustificatives {
        piecesJustificativesCorpsDocument: IlistePiecesJustificativesPiecesJustificativesCorpsDocument[];
        genericLogoEts: IgenericLogoEts[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class ListePiecesJustificativesArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class ListePiecesJustificativesArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class ListePiecesJustificativesImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.gestionEpargne.editiqueDat.sibcgcePrecontractuelles {
    interface IsibcgcePrecontractuelles {
        genericTitredocument: sibcgcePrecontractuelles.IgenericTitredocument[];
        genericLignevide: number;
        genericInfoPm: sibcgcePrecontractuelles.IgenericInfoPm[];
        genericInfoPp: sibcgcePrecontractuelles.IgenericInfoPp[];
        quad0203: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203[];
        quadreto: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadreto[];
        prestance: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestance[];
        croissance: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissance[];
        capciel: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapciel[];
        inflation: sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflation[];
        catslr: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslr[];
        genericSignatureStdSansCnil: sibcgcePrecontractuelles.IgenericSignatureStdSansCnil[];
        signatSansCnil: sibcgcePrecontractuelles.IsibcgcePrecontractuellesSignatSansCnil[];
        signatSansCnilEpargneMegi: sibcgcePrecontractuelles.IsibcgcePrecontractuellesSignatSansCnilEpargneMegi[];
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
    interface Ich01 {
        genericInfoPp: IgenericInfoPp;
    }
    interface Ich02 {
        genericInfoPm: IgenericInfoPm;
    }
    interface Ich321 {
        infosPm: IgenericInfoPmListePersonnesInfosPm;
    }
    interface IsipxgceDatRembNpy5o01Section1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich310 | Ich311 | Ich312 | Ich313 | Ich314 | Ich320 | Ich321)[];
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
    interface IsibcgcePrecontractuellesSignatSansCnilEpargneMegi {
        libDeladuEts: string;
        date: string;
        signatureAgent: sibcgcePrecontractuelles.IsibcgcePrecontractuellesSignatSansCnilEpargneMegiSignatureAgent;
        prenomNomAgent: string;
        fonctionConseiller: string;
    }
    interface IsibcgcePrecontractuellesSignatSansCnilEpargneMegiSignatureAgent {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
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
        genericInfoPm: sibcgcePrecontractuelles.IgenericInfoPm[];
        genericInfoPp: sibcgcePrecontractuelles.IgenericInfoPp[];
        quad0203: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuad0203[];
        quadreto: sibcgcePrecontractuelles.IsibcgcePrecontractuellesQuadreto[];
        prestance: sibcgcePrecontractuelles.IsibcgcePrecontractuellesPrestance[];
        croissance: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCroissance[];
        capciel: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCapciel[];
        inflation: sibcgcePrecontractuelles.IsibcgcePrecontractuellesInflation[];
        catslr: sibcgcePrecontractuelles.IsibcgcePrecontractuellesCatslr[];
        genericSignatureStdSansCnil: sibcgcePrecontractuelles.IgenericSignatureStdSansCnil[];
        signatSansCnil: sibcgcePrecontractuelles.IsibcgcePrecontractuellesSignatSansCnil[];
        signatSansCnilEpargneMegi: sibcgcePrecontractuelles.IsibcgcePrecontractuellesSignatSansCnilEpargneMegi[];
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

declare module myway.gestionEpargne.editiqueDat.sipxgceDatRembNpy5o01 {
    class EditCondPartParams {
        numeroEntiteTitulaire: string;
        numeroPersonne: string;
        codeAction: string;
        codeCanal: string;
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
    class BlocGeneriqueMap {
        instance: string;
        map: BlocMap[];
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
        codeAction: string;
        codeCanal: string;
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
    class BlCatRenouvelable {
        static $inject: string[];
        static LIGNE1: string;
        static LIGNE2: string;
        static LIGNE4: string;
        constructor();
        /**
         * Permet de construire le Bloc blCatRenouv en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich016}
         */
        construireBlCatRenouvelable(map: any[]): sipxgceDatRembNpy5o01.Ich025;
        /**
         * Permet de construire le bloc Ich41
         * @param {string} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich41}
         */
        private construireBlocLigne1(ligne);
        /**
         * Permet de construire le bloc Ich42
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.sipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne2}
         */
        private construireBlocLigne2(ligne);
        /**
         * Permet de construire le bloc Ich43
         * @param {string} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich43}
         */
        private construireBlocLigne3(ligne);
        /**
         * Permet de construire le bloc Ich44
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.sipxgceDatRembNpy5o01Section1BlCatRenouvListeCatRenouvLigne2}
         */
        private construireBlocLigne4(ligne);
        /**
         * Permet de construire le bloc Ich45
         * @param {any} ligne
         * @returns {sipxgceDatRembNpy5o01.Ich45}
         */
        private construireBlocLigne5(ligne);
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBandeauClientConditionParticuliereService {
        private $q;
        private tiersCorporateTiersLiesService;
        static $inject: string[];
        listeDesClients: IClient[];
        constructor($q: ng.IQService, tiersCorporateTiersLiesService: ITiersCorporateTiersLiesService);
        /**
         * Méthode pour construire la liste des personnes dans un client <titre, personnes>
         * @param {IBandeauClient} data
         */
        construireListeDesClients(data: IBandeauClient, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ng.IPromise<IClient[]>;
        construireListeDesClientsDelegataire(data: IElementEditionPersonne[], roleTemp: string): void;
        /**
         * Set la liste des personnes du client de même titre/Rôle
         * @param {IClient} client
         * @param {IElementEditionPersonne[]} lesPersonnes
         * @returns {IClient}
         */
        private setClients(client, lesPersonnes, contexteEditiqueGGHO);
        private setClientsDelegataire(client, lesPersonnes);
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
        construireBlocPersonnes(): Array<sipxgceDatRembNpy5o01.Ich01 | sipxgceDatRembNpy5o01.Ich02>;
        private extrairePersonnesPhysiquesDuBlocClientMoral();
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
    class BlocSignatureSansCnilMegiService {
        private utileCommunService;
        static $inject: string[];
        constructor(utileCommunService: UtileCommunService);
        /**
         * Permet de construire le Bloc signature sans CNIL en entier
         * @param {sipxgceDatRembNpy5o01.BlocGenerique} contenu
         * @returns {sipxgceDatRembNpy5o01.Ich024}
         */
        construireBlocSignatureSansCnilMegi(contenu: sipxgceDatRembNpy5o01.BlocGenerique, prenomNomAgent: string, signataires: GestionGeneriqueOffres.Types.ISignataire[], codeEtablissement: string): sipxgceDatRembNpy5o01.Ich024;
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
        construireBlocSignatureSansCnil(contenu: sipxgceDatRembNpy5o01.BlocGenerique, prenomNomAgent: string, signataires: GestionGeneriqueOffres.Types.ISignataire[], estPro: boolean): sipxgceDatRembNpy5o01.Ich023;
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
        construireEntete(codeBarre: string, numRefDoc: string, refActe: string, codeCanal: string): ng.IPromise<sipxgceDatRembNpy5o01.IgenericEnteteets[]>;
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
        private blocSignatureSansCnilMEGIService;
        private blocBlDemarchageService;
        private blocBl10Service;
        private dossierNumeriqueSignataireService;
        private tiersNoyauService;
        private blCatRenouvelable;
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
        static SIGNAT_SANS_CNIL_MEGI: string;
        static BL_DEMARCHAGE: string;
        static BL_DEMARCHAGE_MEGI: string;
        static genericRgpdSecretBancaire1: string;
        private listeSignatairesDelegataires;
        contenuDocumentCondPart: sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01;
        private listeDesPersonnes;
        private prenomNomAgent;
        private codeEtablissement;
        private estPro;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, genericEnteteEtsConditionParticuliereService: GenericEnteteEtsConditionParticuliereService, blocBandeauClientConditionParticuliereService: BlocBandeauClientConditionParticuliereService, blocBl1Service: BlocBl1Service, blocBl2Service: BlocBl2Service, blocBl3Service: BlocBl3Service, blocBl4Service: BlocBl4Service, blocBl5Service: BlocBl5Service, blocBl3crService: BlocBl3crService, blocBl6Service: BlocBl6Service, blocBl7Service: BlocBl7Service, blocBl8Service: BlocBl8Service, blocBl9Service: BlocBl9Service, blocBlCatr1Service: BlocBlCatr1Service, blocBlCatr2Service: BlocBlCatr2Service, blocGenericCertifStdProduitService: BlocGenericCertifStdProduitService, blocGenericLigneVideService: BlocGenericLigneVideService, blocGenericSignatureStdService: BlocGenericSignatureStdService, blocBlReprlegTitreService: BlocBlReprlegTitreService, blocBlPdpJustifieService: BlocBlPdpJustifieService, blocCertifStdQuadretoService: BlocCertifStdQuadretoService, blocCertifStdCatService: BlocCertifStdCatService, blocSignatureSansCnilService: BlocSignatureSansCnilService, blocSignatureSansCnilMEGIService: BlocSignatureSansCnilMegiService, blocBlDemarchageService: BlocBlDemarchageService, blocBl10Service: BlocBl10Service, dossierNumeriqueSignataireService: IDossierNumeriqueSignataireService, tiersNoyauService: ITiersNoyauService, blCatRenouvelable: BlCatRenouvelable);
        /**
         * Permet de mapper le modèle GCE doc avec le retour du service REST
         * @param {EditPreContratDAT} editPreContratDAT
         * @returns {void}
         */
        mappingModelGceRest(editCondPart: sipxgceDatRembNpy5o01.EditCondPart, signataires: GestionGeneriqueOffres.Types.ISignataire[], contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ng.IPromise<sipxgceDatRembNpy5o01.SipxgceDatRembNpy5o01>;
        private creerDocument(editCondPart, resultSignataire, signataires, blocEntete, resultatLieuNaissance, contexteEditiqueGGHO);
        /**
         * Setter sur le nom du correspondant (agent connecté) de la signature
         * @returns {ng.IPromise<void>}
         */
        private setNomPrenomAgent();
    }
}

declare module myway.gestionEpargne.editiqueDat {
    class BlocBandeauClientService {
        private $q;
        private tiersCorporateTiersLiesService;
        static $inject: string[];
        listeDesClients: IClient[];
        constructor($q: ng.IQService, tiersCorporateTiersLiesService: ITiersCorporateTiersLiesService);
        /**
         * Méthode pour construire la liste des personnes dans un client <titre, personnes>
         * @param {IBandeauClient} data
         * @returns {void}
         */
        construireListeDesClients(data: IBandeauClient, contexteEditiqueGGHO?: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ng.IPromise<IClient[]>;
        construireListeDesClientsDelegataire(data: IElementEditionPersonne[], roleTemp: string): void;
        /**
         * Set la liste des personnes du client de même titre/Rôle
         * @param {IClient} client
         * @param {IElementEditionPersonne[]} lesPersonnes
         * @returns {IClient}
         */
        private setClients(client, lesPersonnes, contexteEditiqueGGHO?);
        private setClientsDelegataire(client, lesPersonnes);
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
        private extrairePersonnesPhysiquesDuBlocClientMoral();
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
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        private dossierNumeriqueSignataireService;
        private tiersNoyauService;
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
        static SIGNAT_SANS_CNIL_MEGI: string;
        contenuDocumentPreContrat: sibcgcePrecontractuelles.SibcgcePrecontractuelles;
        private listeDesPersonnes;
        private prenomNomAgent;
        private codeEtablissement;
        private listeSignatairesDelegataires;
        private estPro;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, genericEnteteEtsPreContratService: GenericEnteteEtsPreContratService, blocBandeauClientService: BlocBandeauClientService, blocCapcielService: BlocCapcielService, blocPrestanceService: BlocPrestanceService, blocCroissanceService: BlocCroissanceService, blocCatslrService: BlocCatslrService, blocInflationeService: BlocInflationeService, blocQuad0203Service: BlocQuad0203Service, blocQuadretoService: BlocQuadretoService, dossierNumeriqueSignataireService: IDossierNumeriqueSignataireService, tiersNoyauService: ITiersNoyauService, utileCommunService: UtileCommunService);
        /**
         * Permet de mapper le modèle GCE doc avec le retour du service REST
         * @param {EditPreContratDAT} editPreContratDAT
         * @returns {ng.IPromise<sibcgcePrecontractuelles.SibcgcePrecontractuelles>}
         */
        mappingModelGceRest(editPreContratSLR: sipxgceDatRembNpy5o01.IEditPreContratSLR, editPreContratDAT: sibcgcePrecontractuelles.EditPreContratDAT, signataires: GestionGeneriqueOffres.Types.ISignataire[], contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ng.IPromise<sibcgcePrecontractuelles.SibcgcePrecontractuelles>;
        private creerDocument(resultSignataire, signataires, blocEntete, resultatLieuNaissance, editPreContratSLR, editPreContratDAT, contexteEditiqueGGHO);
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
         * Construire le bloc signat sans CNIL MEGI
         * @param {IContenuBloc} contenu
         * @returns {void}
         */
        construireBlocSignatSansCnilMEGI(contenu: IContenuBloc, signataires: GestionGeneriqueOffres.Types.ISignataire[]): void;
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
        /**
         * Permet de créer un rice à partir d'un numéro de compte complet string
         * @param {string} numeroCompte
         * @param {string} codeEtablissement
         * @param {string} codeGuichet
         * @returns {MyWay.Model.Rice}
         */
        stringToObjetRice(numeroCompte: string, codeEtablissement: string, codeGuichet: string): MyWay.Model.Rice;
        /**
         * calcule la clef rice à l'aide d'un objet rice incomplet (récupéré de l'interdomaine)
         * @return {string) la cle du rice.
         */
        riceKeyCalculator(rice: MyWay.Model.Rice): string;
        /**
         * fonction pour le mode externe du composant
         * @param {data} : string.
         * @return {any[]) la suite alphanumerique est transforme en suite numerique.
         */
        private transformAlphaToNumeric(data);
        protected getDocumentAGenerer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, pourArchivage: boolean): ng.IPromise<IDocumentAGenerer>;
        /**
         * ALimentation des paramètres d'archivage
         */
        protected setParamsOptionnelsArchivage(documentAImprimer: IDocumentAImprimer, paramsOptionnels: MyWay.Services.Impression.ParametresGenerationOptionnels, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, paramsGeneration: MyWay.Services.Impression.ParametresGenerationObligatoires): void;
        /**
         * Alimentation des propriétés d'archivage du document
         * @param documentAImprimer<IDocumentAImprimer>
         * @param proprietesDocument<MyWay.Services.Impression.ProprietesDoc>
         * @param changerAttributaire<boolean> : à true si on doit changer l'identifiant/référence attributaire
         */
        protected setProprietesDocument(documentAImprimer: IDocumentAImprimer, proprietesDocument: MyWay.Services.Impression.ProprietesDoc, changerAttributaire?: boolean): void;
        protected setParametresActiveXIndividuels(documentAImprimer: IDocumentAImprimer, paramsActiveXIndividuels: MyWay.Services.Impression.ParametresActiveXIndividuels): void;
        getImpressionParams(): MyWay.Services.Impression.ImpressionParams;
        protected creerImpressionParams(): MyWay.Services.Impression.ImpressionParams;
        protected getNomFichier(): string;
    }
    class DescriptionBordereauRetractation extends DescriptionDocument {
        documentAImprimer: IDocumentAImprimer;
        private serviceAgentExtended;
        private parametrageBordereauRetractationService;
        private $q;
        constructor(documentAImprimer: IDocumentAImprimer, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, parametrageBordereauRetractationService: myway.trans.offreCommun.editique.BordereauRetractation.ParametrageBordereauRetractationService, $q: ng.IQService);
        protected getDocumentAGenerer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, pourArchivage: boolean): ng.IPromise<IDocumentAGenerer>;
        private genererDocument(documentAGenerer, donneesAuthentification, codeNatureGed);
        protected creerImpressionParams(): MyWay.Services.Impression.ImpressionParams;
        protected getNomFichier(): string;
    }
    class AutorisationCommunicationDonneesBancaires extends DescriptionDocument {
        documentAImprimer: IDocumentAImprimer;
        private serviceAgentExtended;
        private creationAutorisationCommunicationDonneesBancairesService;
        private $q;
        constructor(documentAImprimer: IDocumentAImprimer, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, creationAutorisationCommunicationDonneesBancairesService: myway.trans.offreCommun.editique.AutorisationCommunicationDonneesBancaires.AutorisationCommunicationDonneesBancairesService, $q: ng.IQService);
        protected getDocumentAGenerer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, pourArchivage: boolean): ng.IPromise<IDocumentAGenerer>;
        private genererDocument(documentAGenerer, donneesAuthentification, codeNatureGed);
        protected creerImpressionParams(): MyWay.Services.Impression.ImpressionParams;
        protected getNomFichier(): string;
    }
    class ListePiecesJustif extends DescriptionDocument {
        documentAImprimer: IDocumentAImprimer;
        private serviceAgentExtended;
        private parametrageListePiecesJustificativesService;
        private entiteTitulaireAjaxImplService;
        private $q;
        constructor(documentAImprimer: IDocumentAImprimer, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, parametrageListePiecesJustificativesService: myway.trans.offreCommun.editique.ListePiecesJustificatives.ParametrageListePiecesJustificativesService, entiteTitulaireAjaxImplService: EntiteTitulaireAjaxImplService, $q: ng.IQService);
        protected getDocumentAGenerer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, pourArchivage: boolean): ng.IPromise<IDocumentAGenerer>;
        private genererDocument(documentAGenerer, donneesAuthentification, codeNatureGed);
        protected creerImpressionParams(): MyWay.Services.Impression.ImpressionParams;
        protected getNomFichier(): string;
    }
    class LettreAccompagnement extends DescriptionDocument {
        documentAImprimer: IDocumentAImprimer;
        private serviceAgentExtended;
        private parametrageLettreAccompagnementService;
        private tiersNoyauService;
        $q: ng.IQService;
        constructor(documentAImprimer: IDocumentAImprimer, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, parametrageLettreAccompagnementService: myway.trans.offreCommun.editique.lettreAccompagnement.ParametrageLettreAccompagnementService, tiersNoyauService: TiersNoyauService, $q: ng.IQService);
        protected getDocumentAGenerer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, pourArchivage: boolean): ng.IPromise<IDocumentAGenerer>;
        private obtenirIndicateurAcdb(contexteEditique);
        private obtenirIndicateurPrct(contexteEditique);
        private genererDocument(documentAGenerer, donneesAuthentification, codeNatureGed);
        protected creerImpressionParams(): MyWay.Services.Impression.ImpressionParams;
        protected getNomFichier(): string;
    }
    class DescriptionBordereauOperation extends DescriptionDocument {
        documentAImprimer: IDocumentAImprimer;
        private creationBordereauService;
        private impressionBordereauService;
        private serviceAgentExtended;
        private gestionDossierVenteService;
        private opeFiService;
        private postOpeFiService;
        private $q;
        constructor(documentAImprimer: IDocumentAImprimer, creationBordereauService: BordereauOperationService, impressionBordereauService: myway.comOpesFinancieres.ImpressionBordereauService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionDossierVenteService: DossierVenteService, opeFiService: myway.comOpesFinancieres.OperationFinanciereService, postOpeFiService: myway.comOpesFinancieres.PostOperationFinanciereService, $q: ng.IQService);
        protected getDocumentAGenerer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, pourArchivage: boolean): ng.IPromise<IDocumentAGenerer>;
        private paddy(n, p, c);
        private genererDocument(documentAGenerer, codeNatureGed, indicateurPapier);
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
        contientUnePRCT(): boolean;
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
    interface IChoixUtilisateurOpeFi {
        operationFinanciereDV: IOperationFinanciereDV;
    }
    interface IOperationFinanciereDV {
        operationFinanciere: IOperationFinanciere;
    }
    interface IOperationFinanciere {
        /** Numero de personne */
        numeroPersonne: string;
        /** Code du mode financier. */
        codeModeFinancier: string;
        /** Montant de l'opération financière. */
        montant: number;
        /** référence identité. */
        referenceIdentite: string;
        /** Libelle long de l'opération financière (Par exemple "OUVERTURE ESPECES"). */
        libelleLongOpeFi: string;
        /** Libellé court de l'opération financière (Par exemple "OV ESP") */
        libelleCourtOpeFi: string;
        /** Date de valeur. */
        dateValeur: Date;
        /** Code de la devise de l'opéfi (par exemple : EUR). */
        codeDevise: string;
        /** Objet contenant ce qui est nécessaire pour les modes financiers Especes et Especes Divers (01 et 07). */
        modeFiEspecesEtEspecesDivers: myway.comOpesFinancieres.Model.ModeFinancierEspecesEtEspecesDivers;
        /** Objet contenant ce qui est nécessaire pour le mode financier Cheque (02). */
        modeFiCheque: myway.comOpesFinancieres.Model.ModeFinancierCheque;
        /** Objet contenant ce qui est nécessaire pour le mode virement interne (06). */
        modeFiVirInterne: myway.comOpesFinancieres.Model.ModeFinancierVirInterne;
        /** Objet contenant ce qui est nécessaire pour le mode financier OD (00). */
        modeFiOD: myway.comOpesFinancieres.Model.ModeFinancierOperationDiverse;
        /** Objet contenant ce qui est nécessaire pour le mode financier chèque de banque (09) */
        modeFiChequeBanque: myway.comOpesFinancieres.Model.ModeFinanciereChequeBanque;
        /** Le code de l'opération financière, par exemple "N" */
        codeOperation: string;
        /** Indique si l'opération financière est réalisé pour un majeur ou pour un mineur, Utilisé uniquement si le canal est défini */
        estMajeur: boolean;
        /** Version de l'objet. */
        version: string;
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
    interface IGestionDossierVenteGetDossierVenteQuery {
        /**
         *  Identifiant d'un Etablissement du Réseau BPCE
         */
        codeEtablissement: string;
        /**
         *  Numéro d'identification du dossier de vente
         *  Cette entrée est obligatoire si l'identifiantExterneDossierVente et le codeExterneApplication ne sont pas renseignés.
         */
        identifiantDossierVente?: number;
        /**
         * Référence du dossier fournie par le producteur qui gère l'offre.
         * Cette entrée est obligatoire si l'identifiantDossierVente n'est pas renseigné. Si l'identifiantExterneDossierVente est renseigné, le
         * codeExterneApplication doit être renseigné.
         */
        identifiantExterneDossierVente?: string;
        /**
         * Code de désignation externe de l'application dans la gestion des dossiers de vente.
         * Cette entrée est obligatoire si l'identifiantExterneDossierVente est renseigné.
         */
        codeExterneApplication?: string;
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte?: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cette rubrique spécifie l'entité type de l'organisation consultant, créant ou modifiant le dossier de vente.
         * Valeurs :
         *   '1' = Agence
         *   '2' = CRC
         *   '3' = E - Agence
         *   '4' = Internet
         *   '5' = Administratif
         *   Si cette entrée n'est pas renseignée, les entrées sur l'EDS doivent être renseignées.
         */
        codeEntiteVenteContexte?: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Cette entrée doit être renseignée si le codeEntiteVenteContexte et le codeEdsExternePFContexte ne sont pas renseignés.
         */
        codeEdsInternePFContexte?: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement
         * Identifiant défini en fonction du type d'élément de structure (type EDS).
         *
         * Cette entrée doit être renseignée, si le codeEntiteVenteContexte et le codeEdsInternePFContexte ne sont pas renseignés
         */
        codeEdsExternePFContexte?: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE.
         *   Typologie propre à chaque Etablissement du GCE.
         *   Cette entrée est obligatoire si le codeEdsExternePFContexte est renseigné.
         */
        typeEdsExterneContexte?: string;
        /**
         * Référence externe de l' agent ayant demandé à consulter, le dossier de vente.
         * Cette entrée est facultative.
         */
        referenceExterneAgentContexte?: number;
        /**
         * Cet indicateur permet de savoir si les données Composition (objet compositionCaracteristique) seules ou complétées des données Détail
         * Composition (objet compositionDonneeDetail), ou aucune donnée composition, sont à restituer en sortie de la ressource.
         *   Valeurs :
         *  'C' = seules les données Composition caractéristique sont à restituer
         *  'D' = les données Composition caractéristique et détail sont à restituer
         *  'N' = pas de restitution des données Composition
         */
        indicRestCompoDetail: string;
        /**
         * Cet indicateur permet de savoir si le chemin d'avancement (objet cheminAvancement) du Dossier de Vente est à restituer en sortie de la
         * ressource. Valeurs :
         *   'O' = le chemin d'avancement est à restituer
         *   'N' = le chemin d'avancement n'est pas à restituer
         */
        indicRestCheminAvancement: string;
    }
    class DossierVenteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private url;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getDossierVente(query: IGestionDossierVenteGetDossierVenteQuery): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.GestionDossierVente>;
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
        creationParametresGenerationConditionParticuliere(documentConditionParticuliereGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ParametreDocumentsGenerationArchivage;
        /**
         * Permet de créer les paramétres d'archivage du document condition particulière
         * @param {MyWay.Services.Context.AuthentificationInfo} donneesAuthentication
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentConditionParticuliereGGHO
         * @returns {ParametreDocumentsGenerationArchivage}
         */
        creationParametresConditionParticuliereArchivage(donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, documentConditionParticuliereGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ParametreDocumentsGenerationArchivage;
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
        creationParametresGenerationPreContrat(documentPrecontratGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ParametreDocumentsGenerationArchivage;
        /**
         * Crééer les paramètres d'archivage du document précontractuelles
         * @param {MyWay.Services.Context.AuthentificationInfo} donneesAuthentication
         * @param {GestionGeneriqueOffres.Types.IDocumentAImprimer} documentPrecontratGGHO
         * @returns {void}
         */
        creationParametresPreContratArchivage(donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, documentPrecontratGGHO: GestionGeneriqueOffres.Types.IDocumentAImprimer, contexteEditiqueGGHO: GestionGeneriqueOffres.Types.IContexteEditiqueGgho): ParametreDocumentsGenerationArchivage;
    }
}
