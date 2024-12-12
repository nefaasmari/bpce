
declare module socleCommunPlacementsModule {
    var app: any;
}

declare module socleCommunPlacementsModule {
    class Constantes {
        static HAB_SHOPBX: string;
        static HAB_SHOPGA: string;
        static HABILITATION_GERR_CPTE_TITRE: string;
        static HABILITATION_GERR_CPTE_PEA: string;
        static HABILITATION_GERR_SUPP_PART_SOCL: string;
        static HABILITATION_SOUS_EPAR_SALR: string;
        static HABILITATION_TRTR_OPRT_PART_SOCL: string;
        static HABILITATION_TRTR_OPRT_CPTE_TITR: string;
        static HABILITATIONS_PROCESSUS: Array<IKeyValuePair<string, string>>;
        static HABILITATION_AV: string;
        static HABILITATION_CL: string;
        static HABILITATION_EC: string;
        static HABILITATION_RU: string;
        static HABILITATION_EO: string;
        static HABILITATION_OU: string;
        static HABILITATIONS_CODES_OPERATION: Array<IKeyValuePair<string, string>>;
        static CTX_IDENTIFIANT_PERSONNE: string;
        static CTX_DESIGNATION_PERSONNE: string;
        static CTX_ID_TITULAIRE: string;
        static CTX_RIB: string;
        static CTX_DESIGNATION_ENTITE: string;
        static CTX_NUM_TITULAIRE: string;
        static CTX_RICE: string;
        static KEY_CODE_EXTERNE_EDS: string;
        static KEY_NUMERO_COMPTE_NUMERAIRE: string;
        static KEY_MONTANT_SOLDE_COMPTE: string;
        static KEY_TYPE_COMPTE_DEFI: string;
        static KEY_CODE_SITUATION_BDF: string;
        static KEY_ADRESSE_MESSAGERIE: string;
        static KEY_NUMERO_COMPTE_RECEPTEUR: string;
        static KEY_IDENTIFIANT_OPERATEUR: string;
        static KEY_USER_GROUP: string;
        static KEY_INDICATEUR_TELEPHONE: string;
    }
    class ConstantesUrl {
        static URL_IDENTIFICATION_TIERS: string;
        static URL_COMPTE_TITRES_HORS_PEA: string;
    }
}

declare module socleCommunPlacementsModule {
    class ContexteConstantes {
        static cleContexteGGHO: string;
        static cleContexteGGHOEditique: string;
        static cleDisplayName: string;
    }
    class ConstantesLibelleCaisse {
        static CODES_LIBELLE_CAISSE: ICodesLibelleCaisse;
    }
    class ConstantesIntituleCaisse {
        static CODES_INTITULE_CAISSE: ICodesIntituleCaisse;
    }
}

declare module socleCommunPlacementsModule.editique.generiqueV1701 {
    interface IgenericEnteteets {
        logoEtablissement: editique.generiqueV1701.IgenericEnteteetsLogoEtablissement;
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
    function getEntete(authenticateInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, numRefDoc: string, codeBarre: string, refActe: string): IgenericEnteteets;
    function getLogo(codeEtablissement: string): IgenericEnteteetsLogoEtablissement;
    interface IgenericLogoEtsDate {
        logoEtablissement: editique.generiqueV1701.IgenericLogoEtsDateLogoEtablissement;
        date: string;
    }
    interface IgenericLogoEtsDateLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    function getLogoEtsDate(authenticateInfo: MyWay.Services.Context.AuthentificationInfo): IgenericLogoEtsDate;
    function getLogoEtsDateLogoEtablissement(codeEtablissement: string): IgenericLogoEtsDateLogoEtablissement;
    interface IgenericPiedpageets {
    }
    var genericPiedPageAutomatique: IgenericPiedpageets;
    interface IgenericAdresseDest {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    function getAdresseDest(ligne1: string, ligne2: string, ligne3: string, ligne4: string, ligne5: string, ligne6: string): IgenericAdresseDest;
    interface IgenericAdresseExp {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    function getAdresseEnveloppe(ligne1: string, ligne2: string, ligne3: string, ligne4: string, ligne5: string, ligne6: string): IgenericAdresseExp;
    function getAdresseTexte(ligne1: string, ligne2: string, ligne3: string, ligne4: string, ligne5: string, ligne6: string): IgenericAdresseExp;
    class GceDocParametres {
        parametresGenerationSysteme: MyWay.Services.Impression.ParametresGenerationSysteme;
        parametresGenerationFichier: MyWay.Services.Impression.ParametresGenerationFichier;
        nomFichier: string;
        constructor(parametresGenerationSysteme: MyWay.Services.Impression.ParametresGenerationSysteme, parametresGenerationFichier: MyWay.Services.Impression.ParametresGenerationFichier, nomFichier: string);
        archiverParams: any;
        genererParams: any;
        archiverGenererParams: any;
        impressionParams: any;
        archiverImpressionParams: any;
        impressionLotParams: any;
    }
}

declare module socleCommunPlacementsModule {
    interface ICompteTitresHorsPEA {
        personne: IPersonne;
        entiteTitulaire: IEntiteTitulaire;
        contratTitres: IContratTitres;
        historiqueInfosAdministratives: Array<IHistoriqueInfosAdministratives>;
        infoAdministratives: Array<IInfosAdministratives>;
        historiqueDividendesPayes: Array<IHistoriqueDividendesPayes>;
        historiqueDroitDeGarde: Array<IHistoriqueDroitDeGarde>;
        informationsPlatine: IInformationsPlatine;
    }
    interface IPersonne {
        identifiantPersonne: string;
        codeCategorieOrdreInhabituel: string;
        montantSeuilOrdreInhabituel: number;
    }
    interface IEntiteTitulaire {
        numeroEntiteTitulaire: string;
        modeCompositionET: string;
        codeTypeUsageET: string;
    }
    interface IContratTitres {
        numeroContratTitres: INumeroContratTitres;
        codeSousCodeProduit: string;
        codeProduitService: string;
        dateOuverture: string;
        codeTypeOuverture: string;
        codeNatureCompteTitres: string;
        codeEtatCompteTitres: string;
        compteNumeraire: ICompteNumeraire;
        compteRecepteur: ICompteRecepteur;
        typeCompteNantissement: string;
        indicateurForcageOperation: string;
        codeTypeCompte: string;
        codeGestionnaireCompte: string;
        tauxPonderationDDG: number;
        codePriseEnCompteFMC: string;
        codeCompteModele: string;
        tauxPonderationClient: number;
        informationClient: string;
    }
    interface INumeroContratTitres {
        codeGuichetContrat: string;
        codeProduitTitres: string;
        radicalContrat: string;
        cleRIBContrat: string;
        cleCompteContrat: string;
        codeEtablissement: string;
        referenceProduitService: string;
    }
    interface ICompteNumeraire {
        codeGuichetContrat: string;
        radicalContrat: string;
        cleRIBContrat: string;
        codeProduit: string;
        codeEtablissement: string;
        cleCompteContrat: string;
        numeroCompteNumeraire: string;
    }
    interface ICompteRecepteur {
        codeGuichetContrat: string;
        radicalContrat: string;
        cleRIBContrat: string;
        codeProduit: string;
        codeEtablissement: string;
        cleCompteContrat: string;
        numeroCompteRecepteur: string;
    }
    interface IHistoriqueDroitDeGarde {
        codeMonnaie: string;
        codeGuichet: string;
        codeProduit: string;
        radical: string;
        montantTTCCalculeDDG: number;
        dateDerniereModification: string;
        montantTTCDefinitifDDG: number;
        anneeFiscaleReference: number;
        codeEtablissement: string;
    }
    interface IInfosAdministratives {
        ligneInfos: string;
    }
    interface IHistoriqueInfosAdministratives {
        dateSaisie: string;
        heureSaisie: string;
        codeAgent: string;
        libelleTypeModification: string;
        codeActionGestitres: string;
        ancienneDonnees: string;
    }
    interface IHistoriqueDividendesPayes {
        codeMonnaie: string;
        dateTraitementPaiement: string;
        dateDetachement: string;
        quantiteTitres: number;
        designation: string;
        montantBrutDividende: number;
        montantPrelevement: number;
        avoirFiscalAvance: number;
        montantNetDividende: number;
        codeValeurSicovam: number;
        dateDebutRechercheDividende: string;
        montantBrutDividendeRestant: number;
        dateLimiteReinvestissement: string;
        codeValeurISIN: string;
        codePlaceCotation: string;
        libellePlaceCotation: string;
        indicateurGenerationCR: string;
        datePaiement: string;
        montantAcompteImpot: number;
        montantTotalPrelevements: number;
        montantAvoirFiscal: number;
    }
    interface IReponse {
        reponseMiseajour: number;
    }
    interface IInformationsPlatine {
        montantSoldeCompte: number;
        typeDeCompteDEFI: string;
        codeSituationBDF: string;
        adresseMessagerie: string;
        codeExterneEDS: string;
    }
}

declare module socleCommunPlacementsModule {
    interface IContexteGGHO {
        codeEtablissementConnexion?: string;
        codeGuichetConnexion?: string;
        codeEntite: string;
        codeCanal: string;
        codeActeGestion: string;
        codeApplicationAppelante: string;
        identifiantEntiteTitulaire: number;
        codeProduitService: number;
        numeroPersonneIdentifiee: number;
        codeEtablissementContrat: string;
        codeSensCommunication?: string;
        codeProduitServiceOffre?: number;
        numeroOffreSouscrite?: number;
        identifiantDossierVente?: number;
        listeIdentifiantsEntitesTitulaires?: number[];
        codeModeDeVente?: string;
        codeProcessusDeVente?: string;
        agent?: MyWay.Services.Context.AgentConnecte;
        codeProduit?: string;
        codeSousFamilleActeGestion?: string;
        codeTypeProduitServiceOffre?: string;
        codeTypeProduitServiceContrat?: string;
        referenceProduitServiceContrat?: string;
        codeGuichetContrat?: string;
    }
    interface IContexteGGHOEditique {
        retourEditique: number;
    }
}

declare module socleCommunPlacementsModule {
    interface IElementListeCompte {
        libelleET: string;
        libelleProduit: string;
        numeroCompte: string;
        solde: number;
    }
}

declare module socleCommunPlacementsModule.Enums {
    enum decoupageRIB {
        codeEtablissement = 0,
        codeGuichetContrat = 5,
        codeProduitTitres = 10,
        radicalContrat = 12,
        radicalContratLongueur = 7,
        cleNumeroContrat = 19,
    }
    enum Lisa {
        Erreur = -1,
        Fermer = 0,
        Suivant = 1,
    }
}

declare module socleCommunPlacementsModule {
    interface ICodesLibelleCaisse {
        NOCECT: string;
        COCEEA: string;
        COCXBQ: string;
        CTCEGI: string;
        COCXGU: string;
        LLCECE: string;
        LLCEC3: string;
        LLCEC2: string;
        LLCEC1: string;
        LICELI: string;
    }
    interface ICodesIntituleCaisse {
        article: string;
        dudela: string;
        etablissementLibelleMinuscule: string;
        etablissementLibelleMajuscule: string;
        nomServiceInternet: string;
    }
}

declare module socleCommunPlacementsModule {
    interface IHabilitation {
        libelleHabilitation: string;
        estHabilite: boolean;
    }
}

declare module socleCommunPlacementsModule {
    interface IInfoAdministrative {
        codeOperation: string;
        codeEtablissement: string;
        codeProduitContrat: string;
        codeGuichetContrat: string;
        radicalContrat: string;
        cleCompteContrat: string;
    }
}

declare module socleCommunPlacementsModule {
    interface IProduit {
        GREGM1: string;
        LNEGCO: string;
        LNEGTE: string;
        CIEGVU: string;
        DDEJCO: string;
        CIEGFT: string;
        COEGPJ: string;
        IDEGPB: string;
        LCEGCO: string;
        DFEJCO: string;
        COEXSP: string;
        QSESAG: string;
        CODIPR: string;
        BITRAN: string;
        IDEGPS: string;
        COLIDV: string;
        QPESAG: string;
    }
}

declare module socleCommunPlacementsModule.Services {
    interface IInformationEntiteTitulaire {
        /**
         *   Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
        /**
         *   Composition de l'entité : personnes composant l'entité
         */
        listeCompositionEntiteTitulaire: ICompositionEntiteTitulaire[];
    }
    interface ICompositionEntiteTitulaire {
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
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
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
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif
         * peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         * - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         * - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
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
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         * - Désignation courte du particulier si personne physique
         * - Nom commercial si professionnel
         * - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationEntiteTitulaire: string;
        /**
         * Indique quelle est la nature du lien Personne / Entité titulaire.
         * - PE : Lien Entité Titulaire / Personne
         * - PR : Lien Entité Titulaire / Professionnel
         * - LA : Lien Entité Titulaire / Lieu d'activité
         */
        natureLienET: string;
    }
    interface ICaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire,
         * lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         * - 1 Usage privé
         * - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         * - 1 mode simple
         * - 2 mode joint entre époux
         * - 3 mode joint entre tiers
         * - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et
         * choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         * - 0 Actif
         * - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         */
        dateMAJEntiteTitulaire: Date;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         * - ' ' Non clôturé
         * - '1' Plus d'activité bancaire
         * - '2' Décédé
         * - '3' Transféré
         * - '4' Incident
         * - '5' Indésirable
         * - '6' Séparé
         * - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        /**
         * Date de fermeture de l'entité titulaire.
         */
        dateClotureEntiteTitulaire: Date;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         * - 1 Mode indivision successorale
         * - 2 Mode indivision conventionnel avec solidarité
         * - 3 Mode indivision conventionnel sans solidarité
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
         *  Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        /**
         *   Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        /**
         *   Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        /**
         *   Identifiant de l'agence de domiciliation de l'entité titulaire.
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
         *  Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards
         * (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire, du mode de composition et de l'usage.
         * Valeurs :
         * * POUR ET MODE SIMPLE
         * 11 Désignation de la personne
         * * POUR ET A USAGE PROFESSIONNEL
         * 21 Nom commercial
         * 22 Désignation courte de l'établissement
         * 23 Enseigne commerciale de l'établissement
         * * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         * PRIVE
         * 31 Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32 Mr ou Mme+nom patronymique Mr+nom
         * patronymique Mme+prénom Mme
         * * POUR ET MODE JOINT ET USAGE PRIVE
         * 41 Désignation personne 1 ou désignation
         * personne 2
         * 42 Désignation personne 2 ou désignation
         * personne 1
         *
         * 99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
    }
    /** Description d'une entité titulaire (client bancaire) */
    class InformationEntiteTitulaire {
        /**
         *   Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        private _caracteristiqueEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
        /**
         *   Composition de l'entité : personnes composant l'entité
         */
        private _listeCompositionEntiteTitulaire;
        listeCompositionEntiteTitulaire: ICompositionEntiteTitulaire[];
        constructor(caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire, listeCompositionEntiteTitulaire: ICompositionEntiteTitulaire[]);
    }
}

declare module socleCommunPlacementsModule.Services {
    /**
     * Interface de définition du service de Entite titulaire.
     */
    interface IEntiteTitulaireService {
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<IInformationEntiteTitulaire>;
        getEntitesTitulaires(): InformationEntiteTitulaire[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "entitetitulaire/informationEntiteTitulaire"
     * avec le verbe d'action GET.
     */
    interface IEntiteTitulaireGetInformationEntiteTitulaireQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec le service "Entite titulaire".
     */
    class EntiteTitulaireService implements IEntiteTitulaireService {
        private serviceAgentExtended;
        private qService;
        static id: string;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Requête d'appel avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<IInformationEntiteTitulaire>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargé via sendGetRequest
         * @return liste d'objets InformationEntiteTitulaire
         */
        getEntitesTitulaires(): InformationEntiteTitulaire[];
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
}

declare module socleCommunPlacementsModule {
    /**
     * Service de gestion du contexte GGHO
     */
    class ContexteGGHOService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Ajoute le contexte GGHO passé en paramètre dans le contexte partagé
         * @param contexteGGHO Le contexte GGHO à ajouter au contexte partagé
         */
        setContexteGGHO(contexteGGHO: IContexteGGHO): ng.IPromise<boolean>;
        setContexteGGHOEditique(contexteGGHOEditique: IContexteGGHOEditique): ng.IPromise<boolean>;
    }
}

declare module socleCommunPlacementsModule {
    class DonneesDelocaliseesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *
         * @param codeEtablissement
         * @param prefixe
         */
        getLibelleCaisse(codeEtablissement: string, prefixe: string): ng.IPromise<string>;
        /**
         *
         * @param codeEtablissement
         */
        getLibellesCaisse(codeEtablissement: string): ng.IPromise<Array<string>>;
        getIntitulesCaisse(codeEtablissement: string): ICodesIntituleCaisse;
        getCodeTypeProduitService(codeProduitService: number): ng.IPromise<string>;
    }
}

declare module socleCommunPlacementsModule {
    /**
     * Service de gestion des RIB
     */
    class EditiqueService {
        private serviceAgentExtended;
        private $q;
        private ribService;
        static $inject: string[];
        private decoupe(chaine, index, longueur);
        formatCompte(chaine: string): string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, ribService: RIBService);
        genererHistoriqueAdministratif(listeHisto: IHistoriqueTableData[], codeCaisse: string, parametreComptable: MyWay.Services.Context.ParametresComptables, numeroCompte: string): ng.IPromise<any>;
    }
}

declare module socleCommunPlacementsModule {
    interface IKeyValuePair<K, V> {
        key: K;
        value: V;
    }
    interface IHabilitationsActes {
        SHOPLA: string;
        SHOPNA: string;
        SHOPNC: string;
        SHOPKJ: string;
        SHOPKA: string;
    }
    class HabilitationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Vérifie une habilitation. Retourne true si habilité, false sinon.
         * @param codeHabilitation L'habilitation à tester
         */
        estHabilite(codeHabilitation: string): ng.IPromise<boolean>;
        /**
         * Lecture d'une habilitation
         * @param codeHabilitation
         */
        readHabilitation(codeHabilitation: string): ng.IPromise<boolean>;
        /**
         * Lecture des habilitations
         */
        readHabilitations(habilitations: Array<IHabilitation>): ng.IPromise<boolean>;
        estHabiliteProcessus(codeProcessus: string): ng.IPromise<boolean>;
        estHabiliteCodeOperation(codeOperation: string): ng.IPromise<boolean>;
        /**
         * Recherche de l'habilitation par-rapport à un code processus
         * @param codeProcessus
         */
        private rechercherHabilitationParProcessus(codeProcessus);
        /**
         * Recherche de l'habilitation par-rapport à un code opération
         * @param codeOperation
         */
        private rechercherHabilitationParCodeOperation(codeOperation);
    }
}

declare module socleCommunPlacementsModule {
    /**
     * Service de gestion des RIB
     */
    class HistoriqueAdministratifService {
        private serviceAgentExtended;
        private modalService;
        private $q;
        static $inject: string[];
        historiqueAdministratives: Array<IHistoriqueInfosAdministratives>;
        numeroRibCompte: string;
        codeCaisse: string;
        parametreComptable: MyWay.Services.Context.ParametresComptables;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, $q: ng.IQService);
        afficherHistoriqueAdministrative(numeroRibCompte: string, codeCaisse: string, parametreComptable: MyWay.Services.Context.ParametresComptables): void;
        readInfoAdminisratives(paramQuery: IInfoAdministrative): ng.IPromise<ICompteTitresHorsPEA>;
        private genererObjetInfoAdministrative();
        chargerHistoriqueAdministratives(): ng.IPromise<Array<IHistoriqueInfosAdministratives>>;
    }
}

declare module socleCommunPlacementsModule {
    class MainService {
        private modalService;
        private $q;
        private _popupOuverte;
        nomPersonne: string;
        static id: string;
        static $inject: string[];
        constructor(modalService: MyWay.UI.ModalService, $q: ng.IQService);
        /**
         * Méthode permettant d'obtenir le nom d'une personne physique ou la raison sociale d'une personne morale en fonction du code personne juriqu
         * @param codeTypePersonJuridique
         */
        private decoupe(chaine, index, longueur);
        formatCompte(chaine: string, separateur?: string): string;
        showErreur(typeErreur: MyWay.UI.TYPE_POPUP_ERREUR, titre: string, libelle: string): ng.IPromise<{}>;
        /**fonction pour le mode externe du composant
         * @Returns a any[].
         * @alias transformAlphaToNumeric.
         * @alias agentFonctionnel.transformAlphaToNumeric(data:string).
         * @param {data} : string.
         * @return {any[]) la suite alphanumerique est transforme en suite numerique.
         */
        transformAlphaToNumeric(data: string): string;
        cleRibRice21(rice21: string): string;
        rice21ToRib23(rice21: string): string;
        /**
         * fonction por alimenter l'entete
         */
        getSousTitre(denominationTitulaire: string, numRice21: string): string;
        /**
         * fonction de lecture d'une variable de contexte à partir du retour de la fonction getListFromcontexte
         */
        lireListeContexte(liste: MyWay.Services.Context.IContextKeyValuePair[], cle: string): string;
    }
}

declare module socleCommunPlacementsModule {
    /**
     * Service de gestion des particuliers
     */
    class ParticulierService {
        constructor();
        /**
         * TODO
         * @param input TODO
         */
        todo(input: string): string;
    }
}

declare module socleCommunPlacementsModule {
    /**
     * Service de gestion des RIB
     */
    class RIBService {
        static id: string;
        static $inject: any[];
        constructor();
        /**
         * Extrait le code établissement d'un RIB
         * @param rib Le RIB à partir duquel extraire le code établissement
         */
        extractCodeEtablissement(rib: string): string;
        /**
         * Extrait le code guichet d'un RIB
         * @param rib Le RIB à partir duquel extraire le code guichet
         */
        extractCodeGuichet(rib: string): string;
        /**
         * Extrait le code produit d'un RIB
         * @param rib Le RIB à partir duquel extraire le code produit
         */
        extractCodeProduit(rib: string): string;
        /**
         * Extrait le radical d'un RIB
         * @param rib Le RIB à partir duquel extraire le radical
         */
        extractRadical(rib: string): string;
        /**
         * Extrait la clé modulo d'un RIB
         * @param rib Le RIB à partir duquel extraire la clé modulo
         */
        extractCleModulo(rib: string): string;
        /**
         * Extrait la clé RIB d'un RIB
         * @param rib Le RIB à partir duquel extraire la clé RIB
         */
        extractCleRIB(rib: string): string;
        /**
         * Extrait le numéro de compte
         * @param rib Le RIB à partir duquel extraire le numéro de compte
         */
        extractNumeroCompte(rib: string): string;
        formaterRib(rib: string): string;
        calculateCleRIB(codeEtablissement: string, codeGuichet: string, numeroCompte: string): string;
    }
}

declare module socleCommunPlacementsModule {
    class UIService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Lit le nom du processus depuis le contexte
         * Si aucune valeur n'est retournée, une valeur par défaut peut avoir été spécifiée
         * @param defaut Valeur par défaut à retourner si la lecture du processName a retourné une chaîne vide / nulle
         */
        getDisplayName(defaut: string): ng.IPromise<string>;
    }
}

declare module socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif {
    function createArchiverParams(): SijmgceHistoriqueAdministratifArchiverParams;
    function createGenererParams(): SijmgceHistoriqueAdministratifGenererParams;
    function createImpressionParams(): SijmgceHistoriqueAdministratifImpressionParams;
    function createArchiverImpressionParams(): SijmgceHistoriqueAdministratifArchiverImpressionParams;
    function createImpressionLotParams(): SijmgceHistoriqueAdministratifImpressionLotParams;
    function createDocument(listeHisto: IHistoriqueTableData[], codeCaisse: string, parametreComptable: MyWay.Services.Context.ParametresComptables, numeroCompte: string): SijmgceHistoriqueAdministratif;
}

declare module socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif {
    interface IsijmgceHistoriqueAdministratif {
        section1: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IsijmgceHistoriqueAdministratifSection1;
        genericEnteteets: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IgenericEnteteets[];
        genericPiedpageets: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsijmgceHistoriqueAdministratifSection1 {
        blHisto: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IsijmgceHistoriqueAdministratifSection1BlHisto;
    }
    interface IsijmgceHistoriqueAdministratifSection1BlHisto {
        blTitre: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IsijmgceHistoriqueAdministratifSection1BlHistoBlTitre;
        listeHisto: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IsijmgceHistoriqueAdministratifSection1BlHistoListeHisto;
        numCompte: string;
    }
    interface IsijmgceHistoriqueAdministratifSection1BlHistoBlTitre {
        titreLb: string;
    }
    interface IsijmgceHistoriqueAdministratifSection1BlHistoListeHisto {
        ligneEntete: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IsijmgceHistoriqueAdministratifSection1BlHistoListeHistoLigneEntete;
        ligneDonnees: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IsijmgceHistoriqueAdministratifSection1BlHistoListeHistoLigneDonnees[];
    }
    interface IsijmgceHistoriqueAdministratifSection1BlHistoListeHistoLigneEntete {
        lDate: string;
        lHeure: string;
        lIdentifiant: string;
        lAction: string;
    }
    interface IsijmgceHistoriqueAdministratifSection1BlHistoListeHistoLigneDonnees {
        dDate: string;
        dHeure: string;
        dIdentifiant: string;
        dAction: string;
    }
    interface IgenericEnteteets {
        logoEtablissement: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IgenericEnteteetsLogoEtablissement;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        dateEdition: string;
        heureEdition: string;
    }
    interface IgenericEnteteetsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
    }
    class SijmgceHistoriqueAdministratif implements IsijmgceHistoriqueAdministratif {
        section1: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IsijmgceHistoriqueAdministratifSection1;
        genericEnteteets: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IgenericEnteteets[];
        genericPiedpageets: socleCommunPlacementsModule.editique.sijmgceHistoriqueAdministratif.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SijmgceHistoriqueAdministratifArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SijmgceHistoriqueAdministratifGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SijmgceHistoriqueAdministratifArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SijmgceHistoriqueAdministratifImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SijmgceHistoriqueAdministratifArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SijmgceHistoriqueAdministratifImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module socleCommunPlacementsModule {
    interface ImodalService {
        dismiss: (param: string) => void;
        close: (param: any) => void;
    }
    interface IHistoriqueTableData {
        dateDeSaisie: string;
        heure: string;
        identifiant: string;
        actionEffectuee: string;
        ancienneValeur: string;
        impactGestitre: string;
    }
    class ModalHistoriqueAdministratifCtrl implements MyWay.UI.ISelectionChangeHandler, MyWay.UI.IMwTableHandler {
        private $q;
        private serviceAgentExtended;
        private historiqueAdministratifService;
        private modalService;
        private $modalInstance;
        private svcMain;
        private editiqueService;
        static $inject: string[];
        afficherBtnImprimer: boolean;
        tableOptions: MyWay.UI.ImwTableOptions;
        tableData: IHistoriqueTableData[];
        chargement: boolean;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, historiqueAdministratifService: HistoriqueAdministratifService, modalService: MyWay.UI.ModalService, $modalInstance: ImodalService, svcMain: MainService, editiqueService: EditiqueService);
        valider(valeurAction: number): void;
        annuler(valeurSortie: string): void;
        onSelectionChange(selectedObject: Object): void;
        onPageChange(currentPage: number): void;
        valeurImpactGestitre(impactGestitre: string): string;
        imprimerDocumentHistorique(): ng.IPromise<any>;
    }
}
