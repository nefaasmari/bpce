
declare module EpsCommun {
    var app: any;
}

declare module EpsCommun.Constantes {
    /**
     * Gestion des urls pour les appels aux services REST
     */
    module Services {
        module UrlRessourcesRest {
            var URL_RESSOURCE_ATTRIBUTCLIENT: string;
            var URL_RESSOURCE_CHANGEMENTPARTENARIAT: string;
            var URL_RESSOURCE_TARIFICATIONSSTANDARD: string;
            var URL_RESSOURCE_TARIFICATIONDEROGATOIRE: string;
            var URL_RESSOURCE_ADRESSE: string;
            var URL_RESSOURCE_TIERS: string;
            var URL_RESSOURCE_RECHERCHECONTRATS: string;
            var URL_RESSOURCE_INFORMATIONCONTRAT: string;
            var URL_RESSOURCE_NOTATIONTIERS: string;
            var URL_RESSOURCE_DETERMINERBIC: string;
            var URL_RESSOURCE_RECHERCHEFAMILLEEPS: string;
            var URL_RESSOURCE_RECHERCHEPARTENARIATEPS: string;
            var URL_RESSOURCE_RECHERCHEBIBLMODELEEPS: string;
            var URL_RESSOURCE_RECHERCHEACTESMODELEEPS: string;
            var URL_RESSOURCE_RECHERCHEMODEREGLEMENT: string;
            var URL_RESSOURCE_RECHERCHESTRUCTURE: string;
            var URL_RESSOURCE_RECHERCHEENTITETITULAIRE: string;
            var URL_RESSOURCE_RECHERCHECADREFINANCEMENT: string;
            var URL_RESSOURCE_RECHERCHEOPPOSITION: string;
        }
    }
}

declare module EpsCommun.Controleurs {
    /**
     * Controleur de la création par défaut
     */
    class CreationAttributsGACControleur {
        private serviceAgentExtended;
        private data;
        private $modalInstance;
        private creationService;
        /** Injection de dépendances */
        static $inject: string[];
        /** Données de la modale */
        identifiantTiers: string;
        identifiantClient: string;
        codeEtablissement: string;
        creerClientEtape: number;
        libelleNomClient: string;
        listePartenariatEPS: Modeles.Partenariat.IPartenariatEPS[];
        choixPartenariat: Modeles.Partenariat.IPartenariatEPS;
        loading: boolean;
        /** Initialiation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, creationService: Services.CreationService);
        /** Fermeture de la modal */
        non(): void;
        /** Etape de création (choix partenariat) */
        oui(): void;
        /** Valider la création par défaut */
        valider(): void;
        /** Génère le libellé client */
        private construireLibelleClient();
        /** Construit la liste des partenariats possible à la création par défaut
         * @return reponse {Promise<void>} libère la promesse à la fin de recherche des partenariats
         */
        private definirListePartenariats();
    }
}

declare module EpsCommun.Services {
    /**
     * Implémentation du service de création par défaut des attributs gac
     */
    class CreationService {
        private serviceAgentExtended;
        private epsAttributsService;
        private modalService;
        private engagementParametreService;
        private contratService;
        private tiersService;
        private riceService;
        /** Injection de dépendances */
        static $inject: string[];
        private identifiantTiers;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, epsAttributsService: Services.EpsAttributsService, modalService: MyWay.UI.IModalService, engagementParametreService: Services.EngagementParametreService, contratService: Services.ContratService, tiersService: Services.TiersService, riceService: myway.comInterdomaine.SaisieRiceService);
        /** Création par défaut des attributs GAC du client bancaire
         * @param identifiantTiers {string} identifiant du tiers titulaire du client bancaire
         * @param identifiantClient {string} identifiant du client bancaire
         * @param codePartenariat {string} code du partenariat choisi pour la création par défaut
         * @param codeEtablissement {string} code établissement du client bancaire
         * @return reponse {IPromise<Modeles.Attributs.ICaracteristiqueGAC>} Retour du post de création, l'objet caracteristiquesGac rempli
         */
        creationAttributsParDefaut(identifiantTiers: string, identifiantClient: string, codePartenariat: string, codeEtablissement: string): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /** Récupération des partenariats valides pour la création par défaut
         * @param codeEtablissement {string} code établissement
         * @return reponse {IPromise<Modeles.Partenariat.IPartenariatEPS[]>} Liste des partenariats disponibles
         */
        recupererPartenariatsValide(codeEtablissement: string): ng.IPromise<Modeles.Partenariat.IPartenariatEPS[]>;
        /** Générer la modale de création par défaut
         * @param identifiantTiers {string} identifiant du tiers titulaire du client bancaire
         * @param identifiantClient {string} identifiant du client bancaire
         * @param libelleEDSGestionEntiteTitulaire {string} nom de la personne composant le client bancaire
         * @param codeEtablissement {string} code établissement du client bancaire
         * @return reponse {Promise<Modeles.Attributs.ICaracteristiqueGAC>} retourne la promesse de l'instance de la modale
         */
        genererModaleCreation(identifiantTiers: string, libelleEDSGestionEntiteTitulaire: string, identifiantClient: string, codeEtablissement: string): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /** Récupérer le premier compte de facturation à vue du client bancaire (à défaut entite titulaire)
         * @param codeEtablissement {string} code établissement
         * @return reponse {IPromise<string>} Numéro du compte de facturation
         */
        private recupererComptefacturation(codeEtablissement);
        /** Récupérer l'adresse légale du client bancaire
         * @param codeEtablissement {string} code établissement
         * @return reponse {IPromise<number>} identifiant de l'adresse légale
         */
        private recupererAdresseLegale(codeEtablissement);
        /** Indique si le code activité correspond bien au filtre souhaité (04/08)
         * @param rice {string} rice du compte de facturation
         * @return reponse {boolean} indique si le code activite est correcte par rapport au filtre demandé
         */
        private codeActiviteCorrect(rice);
    }
}

declare module EpsCommun.Services {
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

declare module EpsCommun {
    /**
     * Conteneur pour les habilitations.
     */
    class Habilitations {
        private habilitations;
        consultation: boolean;
        creationParDefaut: boolean;
        validationGAC: boolean;
        suppressionGAC: boolean;
        changementPartenariat: boolean;
        miseAJourDonneesAdministratives: boolean;
        miseAJourLignesAutorisations: boolean;
        miseAJourDateClotureLigneAuto: boolean;
        miseAJourModelesActes: boolean;
        derogationTarification: boolean;
        rattachementPoolLigneAutorisation: boolean;
        consultationIHMPool: boolean;
        modificationIHMPool: boolean;
        modificationsCadre: boolean;
        constructor(habilitations: {
            [code: string]: boolean;
        });
    }
    /**
     * Liste des codes habilitations utilisés par l'administration aide
     */
    class CodeHabilitation {
        static SHFCII: string;
        static SHFCIJ: string;
        static SHFCIK: string;
        static SHFCIL: string;
        static SHFCIM: string;
        static SHFCIN: string;
        static SHFCIO: string;
        static SHFCIP: string;
        static SHFCIQ: string;
        static SHFCIR: string;
        static SHFCIS: string;
        static SHFCFN: string;
        static SHFCFO: string;
        static SHFCFQ: string;
        static list(): string[];
    }
}

declare module EpsCommun.Modeles.Actes {
    interface IEntreeRechercheModeleActe {
        autoriseAgence?: boolean;
        autoriseInternet?: boolean;
        identifiantFamille?: string;
        codeDateButoirDateFin?: string;
    }
    interface IRechercheModeleActeEPS {
        listeModelesActes: Array<ISyntheseModeleActe>;
    }
    interface ISyntheseModeleActe {
        libelleCourt: string;
        libelle: string;
        identifiant: string;
        ordreAffichage: number;
        codeEtablissement: string;
        bibliothequeActes: string;
        codeDateButoirDateFin: string;
        autoriseAgence: boolean;
        autoriseInternet: boolean;
        familleEps: string;
        familleInternet: string;
        codeTypePartenariatClientEPS: string;
    }
}

declare module EpsCommun.Modeles.Adresse {
    interface IAdresseEntree {
        codeEtablissement: string;
        idPersonne: string;
        numeroChronoProfessionnel?: string;
        numeroChronoLieuActivite?: string;
    }
    interface IAdresseRetour {
        identificationPersonne: IIdentificationPersonne;
        listeAdresse: Array<IListeAdresse>;
    }
    interface IListeAdresse {
        ligneAdresse: ILigneAdresse;
        caracteristiqueAdresse: ICaracteristiqueAdresse;
    }
    class ILigneAdresse {
        identifiantPersonne: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
    }
    interface ICaracteristiqueAdresse {
        codeRetourDistribution: string;
        libelleRetourDistribution: string;
        indicateurEnvoiCourrier: boolean;
        indicateurDifferencePostFisc: boolean;
    }
    interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
    }
}

declare module EpsCommun.Modeles.Attributs {
    interface ICaracteristiqueGACEntree {
        codeEtablissement: string;
        identifiantClientBancaire: string;
    }
    interface ITarificationDerogatoireEntree {
        codeEtablissement: string;
        identifiantClientBancaire: string;
    }
    interface IChangementPartenariatEntree {
        codeEtablissement: string;
        identifiantClientBancaire: string;
        nouveauPartenariat: string;
    }
    interface IModificationPartenariat {
        caracteristiqueGAC: ICaracteristiqueGAC;
    }
    interface ILigneAutorisation {
        identifiantLigneAutorisation: string;
        identifiantFamilleEPS: string;
        delaiDateButoir: number;
        listeCadreFinancement: Array<IModeleCadreFinancement>;
        typeLigneAutorisation: string;
        topAutoriseInternet: boolean;
        regleDateButoir: string;
        periodiciteDateButoir: string;
        montantPlafondGlobal: number;
        montantMaximumEPSInternet: number;
        montantUtilise: number;
        indicateurComptabilise: boolean;
        indicateurPoolAutomatique: boolean;
        indicateurPoolObligatoire: boolean;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteDroitTirage: string;
        codeDevise: string;
        identifiantCadreFinancement: string;
        topRetrocessionEPS: boolean;
        codeTypePartenariatClientEPS: string;
        dateMAJLigneAutorisation: string;
        listePayeurGAC: Array<IPayeurGAC>;
        identifiantUserDerniereMAJ: string;
        dateCloture: string;
    }
    interface IModeleCadreFinancement {
        identifiantCadreFinancement: string;
        numeroVersionCadre: number;
        identifiantLigneAutorisation: string;
        numeroOrdrePool: number;
        codeNaturePool: string;
        typeRoleEntiteGestion: string;
    }
    interface IPayeurGAC {
        identifiantPayeurGAC: string;
        payeurPrincipal: boolean;
        numeroRelatif: number;
        identifiantLigneAutorisation: string;
        codeModeReglement: string;
        pourcentagePayeurGAC: number;
        domiciliationPayeurGAC: string;
        referenceUniqueMandat: string;
        dateSignatureMandat: string;
        typePropagationCompteFacturation: string;
    }
    interface IBibliothequeActeAutorise {
        identifiantBibliothequeActes: string;
    }
    interface IModeleActeAutorise {
        identifiantModeleActeAutorise: string;
    }
    interface ICaracteristiqueGAC {
        codeEtablissement: number;
        identifiantClientBancaire: string;
        identifiantAdresse: number;
        codeEtatAttributEPS: string;
        codeTypePartenariatClientEPS: string;
        dateCreation: string;
        dateDerniereMAJ: string;
        utilisateurDerniereMAJ: string;
        codeActionValidationGAC: string;
        identifiantPersonne: string;
        listeLigneAutorisation: Array<ILigneAutorisation>;
        listeBibliothequeActeAutorise: Array<IBibliothequeActeAutorise>;
        listeModeleActeAutorise: Array<IModeleActeAutorise>;
        retourQR: Array<IRetourQR>;
    }
    interface ITarification {
        identifiantRemise: string;
        identifiantLigneAutorisation: string;
        codeTypeAccessoire: string;
        tauxRemise: number;
        codeReceptionPVTravaux: string;
        canalDistribution: string;
        montantFacturation: number;
        dateDebutValiditeRemise: string;
        dateFinValiditeRemise: string;
        codeDateButoir: string;
        identifiantUserDerniereMAJ: string;
        codeEtablissement: number;
        dateDerniereMAJRemise: string;
    }
    interface ITarificationDerogatoire {
        listeTarificationDerogatoire: Array<ITarification>;
        retourQR: Array<IRetourQR>;
        codeEtablissement: number;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}

declare module EpsCommun.Modeles.Bibliotheque {
    interface IRechercheBiblModeleEPSEntree {
        codeEtablissement: number;
        dateTraitement: string;
    }
    interface IBiblModeleEPS {
        codeEtablissement: number;
        identifiantBibliothequeActe: string;
        codeTypeBibliothequeActe: string;
        libelleTypeBibliothequeActe: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
    }
    interface IRechercheBiblModeleEPS {
        listeBiblModeleEPS: Array<IBiblModeleEPS>;
    }
}

declare module EpsCommun.Modeles.Pools {
    interface IEntreeRechercheCadreFinancement {
        codeEtablissement: string;
    }
    interface ICadreFinancement {
        checked?: boolean;
        identifiantCadreFinancement: string;
        libelleLong: string;
        dateFin: Date;
        tauxMiniParticipationRisque: number;
        tauxAppliqueParticipation: number;
        codeCadreModele: string;
        identifiantCadreModele: string;
        codeEtablissement: number;
        dateDebut: Date;
        numeroVersionCadre: number;
        numeroOrdrePool: number;
        typeSousRolePool: string;
        codeNaturePool: string;
        typeRoleEntiteGestion: string;
    }
    interface IRechercheCadreFinancement {
        listeCadreFinancement: Array<ICadreFinancement>;
    }
}

declare module EpsCommun.Modeles.Contentieux {
    interface IContentieuxEntree {
        codeEtablissement: string;
        identifiantTiers: number;
    }
    interface INotationTiers {
        codeSegmentRisque: string;
        libelleSegmentRisque: string;
        dateSegmentationRisque: Date;
        codeModeleNotationRisque: string;
        libelleModeleNotationRisque: string;
        valeurNoteRisque: string;
        dateNoteRisque: Date;
        heureNoteRisque: number;
        codeInscriptionFICP: string;
        libelleInscriptionFICP: string;
        dateDebutInscriptionFICP: Date;
        dateFinInscriptionFICP: Date;
        codeTypeFichageFCC: string;
        libelleTypeFichageFCC: string;
        dateDebutFichageFCC: Date;
        dateFinFichageFCC: Date;
        dateInterrogationFichage: Date;
        codeContexteMetier: string;
        libelleContexteMetier: string;
        codeSituationBDF: string;
        libelleSituationBDF: string;
        libelleStatutPersonne: string;
        codeMotifModificationSain: string;
        libelleMotifModificationSain: string;
        dateModificationStatutDouteux: Date;
        dateDecisionPassageDouteux: Date;
        codeEtablissement: string;
        identifiantTiers: number;
        codeStatutDouteuxPersonne: string;
        typeCotationFIBEN: string;
        valeurCotationFIBEN: string;
        dateCotationFIBEN: Date;
        dateSituationBDF: Date;
        libelleCotationFIBEN: string;
        codeCotationCoface: string;
        dateCotationCoface: Date;
        codeBanqueEntitePilote: string;
        codeCategorieClient: string;
        codeMoteurSegmentationCatCli: string;
        libelleMoteurSegmentationCatCli: string;
        dateMiseAJourSegmentationCatCli: Date;
        commentaireForcageSegmentationCatCli: string;
        codeMoteurSegmentationSegRis: string;
        libelleMoteurSegmentationSegRis: string;
        dateMiseAJourSegmentationSegRis: Date;
        commentaireForcageSegmentationSegRis: string;
    }
}

declare module EpsCommun.Modeles.Contrat {
    interface IContratsEntree {
        codeEtablissement: string;
        identifiantTiers: string;
        codeTypeSynthese: string;
        indicateurRestitutionComptes: string;
        indicateurRestitutionServices: string;
    }
    interface IInformationContratEntree {
        codeEtablissement: string;
        identifiantContrat: string;
    }
    interface IContrat {
        identifiantContrat: string;
        libelleContrat: string;
        codeProduit: string;
        codeEtat: string;
        roleTiers: string;
        identifiantEntiteTitulaire: string;
        identifiantRice: string;
        cleRice: string;
    }
    interface ITiers {
        codeEtablissement: string;
        identifiantTiers: string;
        listeContrat: Array<IContrat>;
    }
    interface IInformationContrat {
        codeEtablissement: string;
        identifiantContrat: string;
        numeroRib: string;
        referenceCompteService: string;
        codeEtat: string;
        codeDeviseIsoContrat: string;
        codeProduit: string;
        identifiantEdsDomcContrat: number;
        codeTypeOuverture: string;
        identifiantEntiteTitulaire: number;
        codeTypeFermeture: string;
        dateOuvertureAdmContrat: Date;
        dateClotureAdmContrat: Date;
        identifiantEdsGestionContrat: number;
        referencePfGestionContrat: number;
        dateDebutEffetContrat: Date;
        dateFinEffetContrat: Date;
        numeroCompteIban: string;
    }
}

declare module EpsCommun.Modeles.EntiteTitulaire {
    interface IInformationEntiteTitulaireEntree {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        complementDesignationBancaire: string;
        codeEtatEntiteTitulaire: string;
        dateMAJEntiteTitulaire: Date;
        codeMotifClotureEntiteTitulaire: string;
        dateClotureEntiteTitulaire: Date;
        sousCodeModeCompositionET: string;
        codeAgentGestionEntiteTitulaire: number;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        codeTypeDesignationEntiteTitulaire: string;
        typeElementStructure: string;
        refExterneEDSDomiciliationET: number;
        refExterneEDSGestionET: number;
        identifiantEDSGuichet: number;
        identEDSGestionETNouveau: number;
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonneEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        natureLienET: string;
        pourcentageNuePropriete: number;
        pourcentagePleinePropriete: number;
        pourcentageUsufruit: number;
        nomCommercialProfessionnel: string;
        enseigneCommercialeLieuActivite: string;
        designationCourteLieuActivite: string;
        designationTiers: string;
        indicateurAffectationAdresse: boolean;
    }
}

declare module EpsCommun.Modeles.Famille {
    interface IRechercheFamilleEPSEntree {
        codeEtablissement: number;
        dateTraitement: string;
    }
    interface IFamilleEPS {
        codeEtablissement: number;
        identifiantFamilleEPS: string;
        libelleCourtFamilleEPS: string;
        libelleLongFamilleEPS: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
    }
    interface IRechercheFamilleEPS {
        listeFamilleEPS: Array<IFamilleEPS>;
    }
}

declare module EpsCommun.Modeles.ModeReglement {
    interface IModeReglementEntree {
        codeEtablissement: string;
        dateTraitement: string;
        codeModeReglement: string;
    }
    interface IAllModeReglementEntree {
        codeEtablissement: number;
        dateTraitement: string;
    }
    interface IModeReglement {
        libelleCourt: string;
        libelle: string;
        codeModeReglement: string;
        codeTypeDomiciliation: string;
        codeUtilisationModeReglement: string;
        codeModeTraitement: string;
        delaiExecutionModeReglement: number;
        delaiRetourPaiement: number;
        codeModeExecutionReglement: string;
        codeReglementInterneExterne: string;
        codeDomaineExecutionReglement: string;
        numeroOrdreClassement: number;
        codeModeRepresentation: string;
        delaiRetourPaiementRA: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        codeModeReglementComptable: string;
    }
    interface IRechercheModeReglement {
        listeModeReglement: Array<IModeReglement>;
    }
}

declare module EpsCommun.Modeles.Opposition {
    interface IRecherche {
        listeOpposition: Array<IOpposition>;
    }
    interface IOpposition {
        codeRetourEchange: number;
        codeActionPresenceOpposition: string;
        indicateurCaptureCarte: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        referenceProduitService: string;
        codeTypeProduitService: string;
        codeNiveauOpposition: string;
        codeDiffusionOpposition: string;
        codeMotifOpposition: string;
        numeroOpposition: number;
        indicateurOppositionActive: string;
        dateDebut: string;
        dateFin: string;
        libelleOpposition: string;
        indicateurOppositionNational: string;
        indicateurCreationAuto: string;
        dateCreationSysteme: string;
        heureCreationSysteme: number;
        identifiantPersonne: number;
        numeroEntiteTitulaire: number;
        indicateurInitiativeCaisse: string;
        indicateurGenerationAuto: string;
        dateHeureEcritureDB2: string;
        partieSpecifiqueOpposition: string;
        libelleMotifOpposition: string;
        dateSuppressionSysteme: string;
        heureSuppressionSysteme: number;
        numeroBureauOperantSuppression: number;
        numeroBureauOperantCreation: number;
        referenceExterneAgentCreation: number;
        numeroStationCreation: string;
        numeroStationSuppression: string;
        referenceExtAgentSuppression: number;
    }
    interface IOuvertureEPS {
        codeFonctionModuleControle: string;
        codeGuichetInterbancaire: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        numeroEntiteTitulaire: number;
        referenceExterneAgent: number;
        codeOrigineOperation: string;
        codeFinancierAtome: string;
        codeLotMQSeries: string;
        codeModeFinancier: string;
        dateOperation: string;
        soldeProduit: number;
        codeDeviseTenueCompte: string;
        montantOperationMonnaie: number;
        codeMonnaiePriseOrdre: string;
        numeroNationalEmetteur: string;
        numeroCheque: string;
        categorieCarteBancaire: string;
        codeEtablissement: string;
        soldeCompte: number;
        codeDeviseOperation: string;
    }
}

declare module EpsCommun.Modeles.Partenariat {
    interface IRecherchePartenariatEPSEntree {
        codeEtablissement: number;
        dateTraitement: string;
    }
    interface IPartenariatEPS {
        codeEtablissement: number;
        codePartenariatEPS: string;
        codeNaturePartenariat: string;
        libelleCourtPartenariatEPS: string;
        libelleLongPartenariatEPS: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
    }
    interface IRecherchePartenariatEPS {
        listePartenariatEPS: IPartenariatEPS[];
    }
}

declare module EpsCommun.Modeles.Structure {
    interface IStructureEntree {
        typeRechercheEDS: number;
        codeEtablissement: string;
        typeEDS: string;
        referenceExterneEDS: number;
        libelleEDS: string;
        identifiantEDS: number;
    }
    interface IDonneesCommunesEDS {
        codeEtablissement: string;
        identifiantElementStructure: number;
        typeElementStructure: string;
        libelleCourtTypeEDS: string;
        libelleLongTypeEDS: string;
        referenceExterneEDS: number;
        libelleElementStructure: string;
        libelleCourtEDS: string;
        libelleLongEDS: string;
        dateDebutValiditeEDS: Date;
        dateFinValiditeEDS: Date;
        identifiantEDSDirigeant: number;
    }
}

declare module EpsCommun.Modeles.TarificationStandard {
    interface ITarificationStandardEntree {
        codeEtablissement: number;
        identifiantClientBancaire: string;
    }
    interface ITarification {
        codeEtablissement: number;
        identifiantLigneAutorisation: string;
        codeTypeAccessoire: string;
        montantConseilleAccessoire: number;
        tauxConseilleAccessoire: number;
        codeCanalDistribution: string;
        indicateurDateButoir: string;
    }
    interface ITarificationStandard {
        listeTarificationStandard: Array<ITarification>;
        retourQR: Array<IRetourQR>;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}

declare module EpsCommun.Modeles.Tiers {
    interface ITiersEntree {
        codeEtablissement: string;
        codeTypeRecherche: string;
        identifiantRecherche?: string;
    }
    interface IDonneeCommune {
        codeEtablissement: string;
        identifiantPersonne: number;
        codeTypePersonne: string;
        codePersonnaliteJuridique: string;
        edsDomiciliation: number;
        codeStatut: string;
    }
    interface IDonneePersonnePhysique {
        nomMarital: string;
        prenom: string;
        dateNaissance: Date;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        indicateurCodeActiviteProfessionnel: string;
    }
    interface IDonneePersonneMorale {
        numeroSiren: string;
        raisonSociale: string;
        sigle: string;
    }
    interface IAdresse {
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
    }
    interface IMedia {
        codeTypeMedia: string;
        referenceAccesMedia: string;
    }
    interface ITiers {
        donneeCommune: IDonneeCommune;
        donneePersonnePhysique: IDonneePersonnePhysique;
        donneePersonneMorale: IDonneePersonneMorale;
        adresse: IAdresse;
        listMedia: Array<IMedia>;
    }
    interface IMessageErreur {
        codeErreur: string;
        libelleErreur: string;
    }
    interface IMediaTraitement {
        telephoneMobile: string;
        telephonePersonnel: string;
        adresseEmailPrincipal: string;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant la recherche REST de contentieux d'une personne
     */
    class ContentieuxService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère potentiellement le contentieux du client
         * @param entreeContentieux {Modeles.Contentieux.IContentieuxEntree} L'ensemble des paramètres nécessaires à la récupération du contentieux
         * @return reponse {IPromise<Modeles.Contentieux.INotationTiers>} Récupérer les informations relatives au contentieux éventuel du client
         */
        recupererContentieux(entreeContentieux: Modeles.Contentieux.IContentieuxEntree): ng.IPromise<Modeles.Contentieux.INotationTiers>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant la ressource REST des contrats d'une personnes
     */
    class ContratService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère la liste des contrats du client
         * @param entreeContrats {Modeles.Contrat.IContratsEntree} L'ensemble des paramètres nécessaires à la récupération des comptes de facturation
         * @return reponse {IPromise<Modeles.Contrat.ITiersContrat>} retourne les contrats en rapport avec l'identifiant du tiers
         */
        recupererContratsTiers(entreeContrats: Modeles.Contrat.IContratsEntree): ng.IPromise<Modeles.Contrat.ITiers>;
        /**
         * Recupère les informations du contrat de facturation
         * @param entreeContrats {Modeles.Contrat.IInformationContratEntree} L'ensemble des paramètres nécessaires à la récupération des informations sur un contrat
         * @return reponse {IPromise<Modeles.Contrat.IInformationContrat>} Retourne le descriptif d'un contrat en fonction de son idnetifiant d'entrée
         */
        recupererInformationsContrat(entreeContrats: Modeles.Contrat.IInformationContratEntree): ng.IPromise<Modeles.Contrat.IInformationContrat>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant la ressource REST des cadres de financement
     */
    class CadreFinancementService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère la liste des cadres de financement
         * @param entreeRechercheCadre {Modeles.Pools.IEntreeRechercheCadreFinancement} L'ensemble des paramètres nécessaires à la récupération des cadres de financement
         * @return reponse {IPromise<Modeles.Pools.IRechercheCadreFinancement>} retourne les cadres de financements en fonction d'un code établissement
         */
        rechercheCadreFinancement(entreeRechercheCadre: Modeles.Pools.IEntreeRechercheCadreFinancement): ng.IPromise<Modeles.Pools.IRechercheCadreFinancement>;
        /**
         * Récupère les types différents de types date butoir
         * @returns promesse: IDeferred - Promesse de traitement
         */
        listerMockCadreFinancement(): ng.IPromise<Modeles.Pools.IRechercheCadreFinancement>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant la ressource REST des informations utiles à EPS
     */
    class EngagementParametreService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        private partenariatEPS;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère un partenariat EPS éventuel
         * @param entreeRecherchePartenariat {Modeles.Partenariat.IRecherchePartenariatEPSEntree} L'ensemble des paramètres nécessaires à la récupération du partenariat
         * @return reponse {IPromise<Modeles.Partenariat.IRecherchePartenariatEPS>} Renvoie la liste de partenariat paramétré pour l'établissement
         */
        recupererPartenariat(entreeRecherchePartenariat: Modeles.Partenariat.IRecherchePartenariatEPSEntree): ng.IPromise<Modeles.Partenariat.IRecherchePartenariatEPS>;
        /**
         * Recupère la liste des modèles de bibliothèque
         * @param entreeRechercheBiblModele {Modeles.Bibliotheque.IRechercheBiblModeleEPSEntree} L'ensemble des paramètres nécessaires à la récupération des bibliothèques modèle
         * @return reponse {IPromise<Modeles.Bibliotheque.IRechercheBiblModeleEPS>} Renvoie la liste des bibliothèques standard paramétré pour l'établissement
         */
        rechercheBibliothequesModeleEPS(entreeRechercheBiblModele: Modeles.Bibliotheque.IRechercheBiblModeleEPSEntree): ng.IPromise<Modeles.Bibliotheque.IRechercheBiblModeleEPS>;
        /**
         * Recupère la liste des modèles d'actes
         * @param entreeRechercheBiblModele {Modeles.Bibliotheque.IRechercheBiblModeleEPSEntree} L'ensemble des paramètres nécessaires à la récupération des bibliothèques modèle
         * @return reponse {IPromise<Modeles.Bibliotheque.IRechercheBiblModeleEPS>} Renvoie la liste des bibliothèques standard paramétré pour l'établissement
         */
        rechercheModeleActesEPS(entreeRechercheModeleActe: Modeles.Actes.IEntreeRechercheModeleActe): ng.IPromise<Modeles.Actes.IRechercheModeleActeEPS>;
        /**
         * Recupère la liste des familles EPS
         * @param entreeRechercheFamilleEPS {Modeles.Famille.IRechercheFamilleEPSEntree} L'ensemble des paramètres nécessaires à la récupération des familles de l'EPS
         * @return reponse {IPromise<Modeles.Famille.IRechercheFamilleEPS>} Renvoie la liste des familles EPS paramétré
         */
        rechercheFamilleEPS(entreeRechercheFamilleEPS: Modeles.Famille.IRechercheFamilleEPSEntree): ng.IPromise<Modeles.Famille.IRechercheFamilleEPS>;
        /**
         * Ressource permettant de retourner les informations d'un mode de réglement spécifique.
         * @param entreeModeReglement {Modeles.ModeReglement.IModeReglementEntree} L'ensemble des paramètres nécessaires à la récupération des mode de réglement
         * @return reponse {IPromise<Modeles.ModeReglement.IRechercheModeReglement>} Renvoie le descriptif du mode de réglement
         */
        rechercherModeReglement(entreeModeReglement: Modeles.ModeReglement.IModeReglementEntree): ng.IPromise<Modeles.ModeReglement.IRechercheModeReglement>;
        /**
         * Ressource permettant de retourner la liste des modes de réglement paramétré pour un établissement
         * @return reponse {IPromise<Modeles.ModeReglement.IRechercheModeReglement>} Renvoie la liste des modes de réglements
         */
        recupererAllModeReglement(entreeRecupererAllModes: Modeles.ModeReglement.IAllModeReglementEntree): ng.IPromise<Modeles.ModeReglement.IRechercheModeReglement>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe service de récupération d'infos pour l'entite titulaire
     */
    class EntiteTitulaireService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Récupère une entite titulaire en fonction d'un identifiant bancaire si celui-ci existe dans la BDD client
         * @param entreeRechercheEntiteTitulaire {Modeles.EntiteTitulaire.IInformationEntiteTitulaireEntree} L'ensemble des paramètres nécessaires à la récupération des informations sur l'entite titulaire
         * @return reponse {IPromise<Modeles.EntiteTitulaire.IInformationEntiteTitulaire>} Renvoie les informations d'une entite titulaire
         */
        rechercherEntiteTitulaire(entreeRechercheEntiteTitulaire: Modeles.EntiteTitulaire.IInformationEntiteTitulaireEntree): ng.IPromise<Modeles.EntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe service de gestion des attributs EPS
     */
    class EpsAttributsService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        private caracteristiquesGAC;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère les attributs client EPS
         * @param entreeAttributsClient {Modeles.IAttributsEPSEntree} L'ensemble des paramètres nécessaires à la récupération des attributs EPS du client$
         * @param nouvelleRecherche {boolean} Indique si c'est une recherche sur un nouvel identifiant
         * @return reponse {Modeles.IAttributsEPSEntreeIPromise<Modeles.ReponseRest.IRetourRest>} retourne les attributs du clients ou erreur de recherche (client non existant)
         */
        recupererAttributsClient(entreeAttributsClient: Modeles.Attributs.ICaracteristiqueGACEntree, nouvelleRecherche: boolean): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /**
         * Modifier les attributs du client EPS
         * @param caracteristiquesGAC {Modeles.Attributs.ICaracteristiqueGAC} L'ensemble des paramètres nécessaires à la modification des attributs EPS du client
         * @return reponse IPromise<Modeles.Attributs.ICaracteristiqueGAC> Renvoie les données modifiées des attributs client
         */
        modifierAttributsClient(caracteristiqueGAC: Modeles.Attributs.ICaracteristiqueGAC): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /**
         * Création des attributs EPS par défaut
         * @param creationCaracteristiqueGAC {Modeles.Attributs.IDefautGAC} L'ensemble des paramètres nécessaires à la création des attributs EPS du client
         * @return reponse {IPromise<Modeles.Attributs.IDefautGAC>} Renvoie les paramètres envoyés en cas de succés
         */
        creerAttributsClient(creationCaracteristiqueGAC: Modeles.Attributs.ICaracteristiqueGAC): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /**
         * Cette opération permet de supprimer les attributs d'un client.
         * @param attributsGac {Modeles.Attributs.ICaracteristiqueGAC} Objet représentant les attributs GAC du client
         * @return reponse {IPromise<Modeles.Attributs.ICaracteristiqueGAC>} Renvoie les paramètres envoyés en cas de succés
         */
        supprimerAttributsClient(attributsGac: Modeles.Attributs.ICaracteristiqueGAC): ng.IPromise<Modeles.Attributs.ICaracteristiqueGAC>;
        /**
         * Récupère la tarification standard
         * @param entreeTarificationStandard {Modeles.TarificationStandard.ITarificationStandardEntree} L'ensemble des paramètres nécessaires à la récupération de la tarification standard
         * @return reponse {IPromise<Modeles.TarificationStandard.ITarificationStandard>} Renvoie la liste des tarifications standard
         */
        recupererTarificationStandard(entreeTarificationStandard: Modeles.TarificationStandard.ITarificationStandardEntree): ng.IPromise<Modeles.TarificationStandard.ITarificationStandard>;
        /**
         * Récupère les attributs EPS avec le changement de partenariat si succès
         * @param entreeChangementPartenariat {Modeles.Attributs.IChangementPartenariatEntree} L'ensemble des paramètres nécessaires au changement de partenariat
         * @return reponse {IPromise<Modeles.Attributs.IModificationPartenariat>} Renvoie les attributs EPS avec le changement de partenariat
         */
        changementPartenariat(entreeChangementPartenariat: Modeles.Attributs.IChangementPartenariatEntree): ng.IPromise<Modeles.Attributs.IModificationPartenariat>;
        recupererTarificationDerogatoire(entreeTarificationDerogatoire: Modeles.Attributs.ITarificationDerogatoireEntree): ng.IPromise<Modeles.Attributs.ITarificationDerogatoire>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant la ressource REST des contrats d'une personnes
     */
    class OppositionService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère la liste des opposition du client pour l'EPS
         * @param ouvertureEPS {Modeles.Opposition.IOuvertureEPS} Objet d'ouverture EPS
         * @return reponse {IPromise<Modeles.Opposition.IRecherche>} retourne les oppositions éventuels de l'EPS
         */
        rechercheOpposition(ouvertureEPS: Modeles.Opposition.IOuvertureEPS): ng.IPromise<Modeles.Opposition.IRecherche>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe service des éléments de structure
     */
    class StructureService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère la structure
         * @param entreeStructureRecherche {Modeles.Structure.IStructureEntree} L'ensemble des paramètres nécessaires à la récupération de la structure
         * @return reponse {Modeles.Structure.IDonneesCommunesEDS} retourne le résultat de la recherche structure
         */
        rechercherStructure(entreeStructureRecherche: Modeles.Structure.IStructureEntree, nouvelleRecherche: boolean): ng.IPromise<Modeles.Structure.IDonneesCommunesEDS>;
    }
}

declare module EpsCommun.Services {
    /**
     * Classe représentant l'ensemble des ressources REST de l'application
     */
    class TiersService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Recupère l'adresse du client
         * @param entreeAdresseClient {Modeles.IAdresseEntree} L'ensemble des paramètres nécessaires à la récupération de l'adresse du client
         * @return reponse {IPromise<Modeles.Adresse.IAdresseRetour>} Renvoie une liste d'adresse en fonction de l'identifiant client
         */
        recupererAdresseClient(entreeAdresseClient: Modeles.Adresse.IAdresseEntree): ng.IPromise<Modeles.Adresse.ILigneAdresse[]>;
        /**
         * Recupère la liste de tiers liées à un identifiant bancaire
         * @param entreeTiersRecherche {Modeles.Tiers.ITiersEntree} L'ensemble des paramètres nécessaires à la récupération des tiers
         * @return reponse {ng.IPromise<Modeles.Tiers.ITiers[]>} Renvoie une liste des tiers
         */
        recupererTiers(entreeTiersRecherche: Modeles.Tiers.ITiersEntree): ng.IPromise<Modeles.Tiers.ITiers[]>;
    }
}
