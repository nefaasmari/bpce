
declare module ComposantsCommunsCarte {
    var app: any;
}

declare module ComposantsCommunsCarte.MyData {
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
        static uniteJour: string;
        valeur: Date;
        constructor(aDate: Date);
        static fromDate(aDate: Date): MyDateHeure;
        static fromChaineTiretAAAAMMJJ(aDate: string): MyDateHeure;
        static fromChaineTiretAAAAMMJJ_HHMMSS(aDate: string, aHeure: string): MyDateHeure;
        static nowDate(): MyDateHeure;
        static now(): MyDateHeure;
        toDate(): Date;
        toIsoString(): string;
        static estAujourdhui(aDate: Date): boolean;
        estAujourdhui(): boolean;
        static nbJoursDepuis(aDate: MyDateHeure): Number;
        toChaineMoment(aFormat: string): string;
        toChaineSlashJJMMAAAA(): string;
        toChaineSlashJJMMAAAAaHHhMM(): string;
        toChaineTiretAAAAMMJJ(): string;
    }
    class MyDate {
    }
    class MyHeure {
    }
}

/**
 * Filtre de gestion du range
 * @author S0076045 (Cédric Lisima)
 */
declare module ComposantsCommunsCarte.Filtres {
}

/**
 * Filtre de gestion du slice
 * @author S0076045 (Cédric Lisima)
 */
declare module ComposantsCommunsCarte.Filtres {
}

/**
 * Ensemble des modèles permettant la réalisation de l'avenant du contrat carte
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.AvenantContratCarte {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    /**
     * Enumération sur les actions possibles en avenant.
     */
    enum ActionEnum {
        NE_RIEN_FAIRE,
        CARTE_EN_COURS,
        CARTE_A_ECHEANCE,
    }
    /**
     * Modèle de représentation des données de l'avenant à effectuer.
     */
    interface IData {
        action: ActionEnum;
        carteRemplacement: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        carteRenouvellement: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        cloture: ComposantsCommunsCarte.Modeles.ClotureContratCarte.ICloture;
        numeroContratCarte: number;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        identifiantSupportCarte: string;
        dateSignatureContratCarte: string;
        codeDuNiveauDeServiceDuContratCarte: string;
        identifiantElementDeStructureBis: number;
        identifiantElementDeStructureProprietaire: number;
        idEdsAgenceDistributionContrat: number;
        codeDuProduitCarte?: string;
        codeVisuelCarte?: string;
        identifiantPersonneDuRepresentantLegal: number;
        identifiantDuSupportDeCartePourCodeReconduit: string;
        codeDeModaliteDeTarificationDuContratCarte: string;
        serviceDerogatoire: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IServiceDerogatoireDuContratCarte;
    }
}

declare module ComposantsCommunsCarte.Modeles.CarteAgir {
    interface ICarteAgir {
        codeBanque: string;
        identifiantPersonne: number;
        raisonSociale: string;
        montantDonSouscriptionCarte: number;
        montantDonRetraitGABHorsReseau: number;
        montantDonRetraitGABReseau: number;
        codeBic: string;
        numeroIBANCompte: string;
        codeProduitMonetique: string;
    }
    interface IDonneesDePartage {
        identifiantPersonneRepresOrgBeneficiaire: number;
        montantDonUnitaireClientCarte: number;
        montantSeuilAlerteDonsCarte: number;
        indicateurSuspensionDons: string;
        indicateurActivationServiceDons: string;
        organismeBeneficiaire: Modeles.CarteAgir.ICarteAgir;
    }
}

/**
 * Ensemble des modèles permettant la réalisation de la clôture du contrat carte
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ClotureContratCarte {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    /**
     * Enumération sur les type de clôture du contrat carte
     */
    enum TypeCloture {
        TYPE_CLOTURE_IMMEDIATE,
        TYPE_CLOTURE_DIFFEREE,
        TYPE_CLOTURE_A_DATE,
    }
    /**
     * Modèle de clôture du contrat carte.
     */
    interface ICloture {
        typeCloture: TypeCloture;
        dateCloture: string;
        motifCloture: string;
    }
    /**
     * Modèle de représentation des données de la clôture à effectuer.
     */
    interface IData {
        cloture: ICloture;
        numeroContratCarte: number;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        identifiantSupportCarte: string;
        codeEtablissement: string;
        codeGuichet: string;
        dateDeFinDeValidite: string;
        versionSegment: string;
        codeDuProduitCarte?: string;
        codeVisuelCarte?: string;
        situationDeLaCarte: Modeles.ContratCarte.Recherche.ISituationDeLaCarte;
    }
}

/**
 * Modèle de représentation des données du web service "contratcarte/information".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ContratCarte.Information {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    class SituationContratCarte {
        static CONTRAT_EN_COURS: string;
        static CONTRAT_BLOQUE: string;
        static CONTRAT_RESILIE: string;
        static CONTRAT_SANS_CARTE: string;
        static CONTRAT_EN_INSTANCE: string;
        static CODE_SITUATION_CARTE_COMMANDE_SAISIE: string;
        static CODE_SITUATION_CARTE_CARTE_EN_FABRICATION: string;
        static CODE_SITUATION_CARTE_CARTE_DELIVREE: string;
        static CODE_SITUATION_CARTE_CARTE_RECUPEREE: string;
        static CODE_SITUATION_CARTE_ECHUE: string;
        static CODE_SITUATION_CARTE_ACTIVE: string;
        static CODE_SITUATION_REMISE_AGENCE: string;
        static CODE_SITUATION_COMMANDE_FOURNISSEUR: string;
        static CODE_SITUATION_CARTE_EXPEDIEE_CLIENT: string;
        static CODE_SITUATION_CARTE_RECUE_ETB: string;
        static CODE_SITUATION_COMMANDE_A_ANNULER: string;
        static CODE_SITUATION_CARTE_ANNULEE: string;
        static CODE_SITUATION_CARTE_A_RECUPERER: string;
        static CODE_SITUATION_CARTE_SITUATION: string;
        static codeSituationCarte: any;
        static getLibelle(code: string): any;
    }
    interface IInformation {
        parametres: IParametres;
        comportementBancaire: IComportementBancaire;
        chequier: IChequier;
        contratCarte: IContratCarte;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IStructure {
        identifiantElementDeStructure: number;
        identifiantElementDeStructureBis: number;
        identifiantElementDeStructureProprietaire: number;
        identifiantElementDeStructureDeDistribution: number;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        codeDeLaVersionDuPosteDeTravail: string;
        libelleCalculeCourtElementDeStructure: string;
    }
    interface IPersonne {
        identifiantDeLaPersonne: number;
        identifiantPersonneDuRepresentantLegal: number;
        designationCourte: string;
        nomPatrinomyqueOuRaisonSociale: string;
        numeroDuTelephonePortableDuClient: string;
        referenceDeLOperateurTelephonique: string;
        identifiantDuClientChezLOperateur: string;
        codeCiviliteDeLaPersonnePhysique: string;
        nomDeFamilleDeLaPersonnePhysique: string;
        nomDUsageDeLaPersonnePhysique: string;
        premierPrenomDeLEtatCivilDeLaPersonne: string;
        tiersDeConfiance: string;
        premierePersonneEnRelation: number;
        identifiantDuClient: string;
        numeroEntiteTitulaire: number;
        indicateurNomJeuneFille: string;
        numeroUsagerContratBAD: string;
    }
    interface IContratCarte {
        numeroDeCompte: string;
        numeroDuContratCarte: number;
        codeDuProduitCarteDeRemplacement: number;
        codeDuModeDEnvoiDeLaCarteAEcheance: string;
        numeroDeLOffreSouscrite: number;
        motDePasse: string;
        codeVisuelAEcheance: string;
        identifiantDeRempacementPourUneCarteVisa1er: string;
        codeDuRoleDuPorteurSurLaReserve: string;
        codeDuProduitCarte: number;
        identifiantDuProduitOuService: number;
        codeVisuelDeLaCarte: string;
        numeroDuContratTAP: number;
        codeDuTypeDeLien: string;
        indicateurDeTarificationNSD: string;
        codeDActionDeLIdentiteDuPorteur: string;
        dateDeChargementPegasus: string;
        referenceOTA: string;
        codeDEcritureEnBaseDesInstances: string;
        numeroDuContratCarteEnInstance: number;
        codeDuTypeDeProduitOuService: string;
        indicInfoBLSDansOffre: string;
        codeVisuelCarte: string;
        libelleLongVisuelCarte: string;
        dateSignatureContratCarte: string;
        identifiantPrestationContratCarte: string;
        typeRenouvellementCarte: string;
        dateReeditionCodeSecretMailer: string;
        identifiantCarteDeRemplacement: string;
        nomDuPersonnalisateurDeCartes: string;
        indicateurActivationCarte: string;
        indicPresenceCarteActiveRemplacement: string;
        indicateur2emeAppelIzicefi: string;
        numeroSerieCarteCSCMEnCours: string;
        numeroSerieAncienneCarteCSCM: string;
        dateDebutPeriode: string;
        periodePaiement: number;
        plafondDActiviteFonctionDeBase: number;
        periodeRetrait: number;
        plafondDActiviteFonctionDeBaseBis: number;
        option: IOption;
        commandeDeLaCarte: ICommandeDeLaCarte;
        recuperationDeLaCarte: IRecuperationDeLaCarte;
        oppositionDeLaCarte: IOppositionDeLaCarte;
        personne: IPersonne;
        serviceDerogatoire: IServiceDerogatoire;
        structure: IStructure;
        supportDeCarte: ISupportDeCarte;
        clotureContrat: IClotureContrat;
        deplacement: IDeplacement;
        situationCarte: ISituationCarte;
        stock: IStock;
        autorisation: IAutorisation;
        codeDuProduitCarteBis: string;
        rib: string;
        idtPersRepresOrgBenef: number;
        montantDonUnitaireClientCarte: number;
        montantSeuilAlerteDonsCarte: number;
        indicateurSuspensionDons: string;
        indicateurActivationServiceDons: string;
        identifiantDossierVente: number;
        /**
         * valeurGeoBlocking (0 ou 1)
         */
        valeurGeoBlocking: string;
        /**
         * valeurVerrouillage (0 ou 1)
         */
        valeurVerrouillage: string;
        /**
         * valeurPaiementVAD: blocage/déblocage paiement VAD , 0 ou 3
         */
        valeurPaiementVAD: string;
        /**
         * Code lieu adressage premiere carte
         * AG : en agence
         * CL : chez le client
         */
        codeLieuAdressage: string;
    }
    interface IOption {
        codeDuNiveauDeServiceDuContratCarte: string;
        codeDeModaliteDeTarificationDuContratCarte: number;
        codeActivationECarteBleue: string;
        codeActivationDeLOptionMoneo: string;
    }
    interface IServiceDerogatoire {
        codeDuNiveauDeServiceDerogatoireDuContratCarte: string;
        dateDeDebutDEffetDuNiveauDeServiceDerogatoire: string;
        dateDeFinDEffetDuNiveauDeServiceDerogatoire: string;
    }
    interface IRecuperationDeLaCarte {
        codeDuModeDEnvoiDeLaCarte: string;
        codeDuModeDeDistributionDeLaCarte: string;
        codeMotifRecuperationCarte: string;
        libelleMotifRecuperationCarte: string;
        codeLieuDeRecuperationCarte: string;
        libelleLieuRecuperationCarte: string;
        dateRecuperationCarte: string;
    }
    interface IOppositionDeLaCarte {
        codeMotifOppoCarteInterbancaire: string;
        libelleMotifOppoCarteInterbancaire: string;
        dateDebutOppoCarteInterbancaire: string;
    }
    interface ISupportDeCarte {
        identifiant: string;
        faconnierDeLaPuce: string;
        dateDeDebutDeValidite: number;
        dateDeFinDeValidite: number;
        dateActivationSupportCarte: string;
        codeVisuelSupportDeLaCarte: string;
        identifiantBis: string;
        identifiantTiers: string;
        referenceDeLaPuce: string;
    }
    interface ICommandeDeLaCarte {
        codeDuMotifDeCommandeAEcheance: string;
        dateDeRetourDeLaCommande: string;
        dateDeLaCommandeDeLaCarte: string;
        codeDuMotifDeLaCommande: number;
        libelleDuMotifDeLaCommande: string;
        codeMotifCommande: string;
        dateRemise: string;
    }
    interface IParametres {
        codeTypeDeModification: number;
        indicateurSurLActionEffectuee: string;
        codeDeControleZAR: string;
        versionSegment: string;
    }
    interface IComportementBancaire {
        resultatAnalyseConnaissanceClient: number;
        codeDuProduitCarteObligatoire: number;
        libelleMotifBlocageContratCarte: string;
        indicateurSouscriptionIzicarteCRC: string;
        codeTypeCommandeIzicarte: string;
        indicPossibiliteTransfoReserve: string;
        codeBINDeLaCarte: number;
    }
    interface IChequier {
        typeDeChequier: string;
        nombreDeChequiers: number;
        referenceProduitService: string;
    }
    interface IClotureContrat {
        dateCloture: string;
        codeMotifBlocageContratCarte: string;
        dateDeFinDeValiditeDeLaCarte: string;
        codeEtatDuDestockageDeLaCarte: string;
        identitePorteur: string;
        dateExpirationCarte: string;
        codePotentialiteECarteBleue: string;
        montantSoldeCompteEuros: number;
        montantSoldeDisponibleCompte: number;
    }
    interface IDeplacement {
        codeActionMiseAJour: string;
        dateDebutDeplacement: string;
        dateFinDeplacement: string;
        ancienneDateDebutDeplacement: string;
        ancienneDateFinDeplacement: string;
    }
    interface IStock {
        codeEtatDUneCarteDuStock: string;
        libelleDuCodeEtatCarteEnStock: string;
    }
    interface IAutorisation {
        montantDemandesAutorisationAutresOperations: number;
        montantResiduelAutorisationAutresOperations: number;
        montantResiduelAutorisationRetrait: number;
        montantDemandeDAutorisationRetrait: number;
    }
    interface ISituationCarte {
        codeSituationContratCarte: string;
        codeSituationCarte: string;
        dateDerniereSituationCarte: string;
        libelleSituationContratCarte: string;
        libelleSituationCarte: string;
        codeDuStatutDeLaCarte: string;
        libelleDuCodeDuStatutDeLaCarte: string;
    }
    interface IMessageFonctionnel {
        libelleMessage: string;
        codeMessage: string;
        codeRetourEchange: number;
    }
}

/**
 * Modèle de représentation des données du web service "contratcarte/opposition".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ContratCarte.Opposition {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IOpposition {
        oppositionParametres?: IOppositionParametres;
        oppositionCartesInexistantes?: Array<IOppositionCarteInexistante>;
        oppositionCartesExistantes?: Array<IOppositionCarteExistante>;
        oppositionLot?: IOppositionLot;
    }
    interface IOppositionCarte {
        numeroCarte: number;
        structure: IStructure;
        codeMotifOpposition: number;
        dateDeclarationOppositionCarte: string;
        heureDeclarationOppositionCarte: number;
        codeLieuDeclarationOppoCarte: string;
        numeroAutorisationOpposition: number;
        codeRegionMonde: string;
        dateMainLeveeOppositionCarte?: Date;
        heureMainLeveeOppositionCarte?: number;
        libelleMessageErreur?: string;
    }
    interface IOppositionCarteInexistante extends IOppositionCarte {
        dateDebutValiditeSupportCarte: string;
        dateFinValiditeSupportCarte: number;
    }
    interface IStructure {
        identifiantElementDeStructure: number;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        identifiantElementDeStructureBis: number;
        codeEtablissementBancaire?: number;
        codeAgenceGestionnaire?: string;
    }
    interface IOppositionCarteExistante extends IOppositionCarte {
        dateCreationOpposition?: string;
        dateDeclarationBDFOppoCpte?: Date;
        dateLeveeBDFOppoCompte?: Date;
        dateDemandeLeveeBDFOppoCpte?: Date;
        dateMAJDeclaratifBDF?: Date;
        dateCreationOppoPreAbusif?: Date;
        dateMiseEnLeveeDePreAbusif?: Date;
        dateDemandeDeclarationBDF?: Date;
        numeroComptePS: string;
        numeroCarteSAMCH02?: string;
        heurePerteVolSupportCarte?: number;
        datePerteVolSupportCarte?: string;
        dateConfirmationOppposition?: number;
        dateFinOppositionCarte?: string;
        codePrestationTarifiable?: number;
        timeStampCreationModifOppo?: string;
        dateExpirationCarte?: number;
        consequenceSuiteOppoCarte?: number;
        personne?: IPersonne;
    }
    interface IPersonne {
        identifiantPersonne?: number;
        codeCivilitePersonnePhysique?: string;
        nomFamillePersonnePhysique?: string;
        premierPrenomEtatCivilPersonne?: string;
        representantLegal?: number;
    }
    interface IOppositionParametres {
        typeCarteOpposition: number;
    }
    interface IOppositionLot {
        numeroLotDeCommandeDeCarte: number;
        numeroLotCommandesCartes: string;
        numeroSousLotCartes: number;
        libelleMessageErreur: string;
        dateDeFinDeValiditeDuLot: string;
        identifiantCodeProduitCarte: number;
        nombreDeCartesDuLot: number;
        statutMiseEnOpposition: number;
        nombreDeCartes: number;
        codeMotifOpposition: number;
        dateDeclarationOppositionCarte: Date;
        heureDeclarationOppositionCarte: number;
        datePertevolSupportCarte: Date;
        heurePertevolSupportCarte: number;
        nombreDeCarteMiseEnOpposition: number;
        structure: IStructure;
    }
}

/**
 * Modèle de représentation des données du web service "contratcarte/recherche".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ContratCarte.Recherche {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IRecherche {
        parametre: IParametreDeRecherche;
        contratsCartes: Array<IContratCarte>;
        informationComplementaire: IInformationComplementaire;
    }
    interface IParametreDeRecherche {
        codeEtablissement: string;
        typeInterrogationPourLesCartes: string;
        codeTypeRecherche: number;
        codeGuichetInterbancaire: string;
        premierePersonneEnRelation: number;
        identifiantElementDeStructure: number;
        identifiantElementDeStructureBis: number;
        identifiantDeLaPersonne: number;
        codeEtablissementBis: string;
        codeFonctionChoixRechercheEtatCompte: string;
        dateRechercheDeLEtatDuCompte: Date;
        codeGuichetInterbancaireBis: string;
        dateRechercheDeLEtatDuCompteBis: Date;
        identifiantElementDeStructureTiers: number;
        dateOuvertureProduitOuService: Date;
        designationLongueElementStructure: string;
    }
    interface IContratCarte {
        historiqueDesCartes: Array<ICarteDuContratCarte>;
        numeroDeCompte: string;
        numeroDuContratCarte: number;
        proprietaire: IProprietaireDuContratCarte;
        serviceDerogatoire: IServiceDerogatoireDuContratCarte;
        option: IOptionDuContratCarte;
        dateDOuvertureDuContratCarte: Date;
        dateDeModificationDuContratCarte: Date;
        dateDeFinDuContratCarte: Date;
        codeDuProduitCarte: string;
        codeDuProduitCarteDeRemplacement: string;
        numeroDeLOffreSouscrite: number;
        identifiantDuProduitOuService: number;
        motDePasse: string;
        dateDeSignatureDuContratCarte: Date | string;
        identifiantDuReseauCommercial: string;
        libelleDuReseauCommercial: string;
        numeroRIBDuCompte: string;
        codeDuMotifDeBlocageDuContratCarte: string;
        codeDuModeDEnvoiDeLaCarteAEcheance: string;
        identifiantElementDeStructureDeDistribution: number;
        libelleCalculeCourtEDS: string;
        codeDeSituationDuContratCarte: string;
        codeVisuelDeLaCarte: string;
        codeDeRepresentationGraphiqueDeLaCarte: string;
        libelleLongDuVisuelDeLaCarte: string;
        codeDuModeDEnvoiDeLaCarteAEcheanceBis: string;
        numeroDuContratTAP: number;
        identifiantDuContratCEFI: string;
        numeroDeDossierCredit: string;
        codeDuMotifDeCommandeAEcheance: string;
        codeVisuelAEcheance: string;
        libelleLongTypeEDS: string;
        libelleCalculeCourtEDSBis: string;
        historiqueDesCartesTEOZ: Array<ICarteTEOZ>;
        codeRegionMonde: string;
        numeroDuContratCarteEnInstance: number;
        date: Date;
        codeEtablissement: string;
        codeGuichet: string;
        identifiantElementStructure: number;
        identifiantElementStructureBis: number;
        designationElementStructure: string;
        designationAgentInterne: string;
        motifCommande: string;
        indicateurInhibitionVAD: boolean;
        codeInhibitionVAD: string;
        idPersReprOrgnBenf: number;
        mtDonUntrClntCarte: number;
        mtSeuilAlrtDonsCarte: number;
        indicSuspDons: string;
        indicActivServDons: string;
    }
    interface ICommandeDeLaCarte {
        dateDeRetourDeLaCommande: Date;
        dateDeLaCommandeDeLaCarte: Date;
        codeDuMotifDeLaCommande: string;
        libelleDuMotifDeLaCommande: string;
    }
    interface IOppositionSurLaCarte {
        codeDuMotifDOpposition: string;
        libelleDuMotifDOpposition: string;
        dateDeDebutDEffetDeLOpposition: Date;
        dateDOpposition: Date;
        dateDeclarationOppositionCarte: Date;
        heureDeclarationOppositionCarte: number;
        numeroAutorisationOpposition: number;
        dateDeConfirmationOppposition: Date;
        codeLieuDeclarationOppositionCarte: string;
        dateMainLeveeOppositionCarte: Date;
        dateCreationOppositionPreAbusif: Date;
        dateDeMiseEnLeveeDePreAbusif: Date;
        dateDemandeDeclarationBDF: Date;
        dateDeclarationBDFOppositionCompte: Date;
        dateDemandeLeveeBDFOppositionCpte: Date;
        dateLeveeBDFOppositionCompte: Date;
        codeMotifOpposition: number;
        nombreDeJoursDepuisCreationPreAbusif: number;
    }
    interface IRecuperationDeLaCarte {
        codeDuMotifDeRecuperationDeLaCarte: string;
        libelleDuMotifDeRecuperationDeLaCarte: string;
        codeDuLieuDeRecuperationDeLaCarte: string;
        libelleDuLieuDeRecuperationDeLaCarte: string;
        dateDeRecuperationDeLaCarte: Date;
        codeDuModeDEnvoiDeLaCarte: string;
        codeDuModeDeDistributionDeLaCarte: string;
    }
    interface IPlafondDeLaCarte {
        periodeDesPlafondsDePaiements: number;
        plafondDActiviteDeLaFonctionDeBase: number;
        montantDesAutorisationsHorsRetrait: number;
        montantResiduelDesAutorisationsHorsRetrait: number;
        periodeDesPlafondsDeRetraits: number;
        montantResiduelDesAutorisationsPourLesRetraits: number;
        montantDesAutorisationsPourLesRetraits: number;
    }
    interface ISituationDeLaCarte {
        codeDeSituationDeLaCarte: string;
        libelleDeLaSituationDeLaCarte: string;
        codeDuStatutDeLaCarte: string;
        libelleDuStatutDeLaCarte: string;
        dateDeDerniereSituationDeLaCarte: Date;
        codeDeLEtatDUneCarteDuStock: string;
        libelleDeLEtatDUneCarteDuStock: string;
    }
    interface IUtilisateurDeLaCarte {
        premierePersonneEnRelation: number;
        codeCiviliteDeLaPersonnePhysique: string;
        nomDeFamilleDeLaPersonnePhysique: string;
        nomDUsageDeLaPersonnePhysique: string;
        premierPrenomDeLEtatCivilDeLaPersonne: string;
        tiersDeConfiance: string;
        codeDuRoleDuPorteurSurLaReserve: string;
        designationCourte: string;
    }
    interface ICarteDuContratCarte {
        numeroDuContratCarte: number;
        utilisateur: IUtilisateurDeLaCarte;
        plafond: IPlafondDeLaCarte;
        situation: ISituationDeLaCarte;
        recuperation: IRecuperationDeLaCarte;
        opposition: IOppositionSurLaCarte;
        commande: ICommandeDeLaCarte;
        identifiantDuSupportDeCarte: string;
        codeVisuelDuSupportDeCarte: string;
        libelleLongDuVisuelDeLaCarte: string;
        faconnierDeLaPuce: string;
        dateDeDebutDeValiditeDeLaCarte: number;
        dateDeFinDeValiditeDeLaCarte: number;
        dateDeRemiseEnClientele: Date;
        nomDuPersonnalisateurDeCarte: string;
        codeDuProduitCarte: string;
        numeroDeSerieDeLaCarteEnCours: string;
        referenceDeLAncienneCarte: string;
        identifiantDuSupportDeCartePourCodeReconduit: string;
        indicateurDActivationDeLaCarte: string;
        dateDActivationDeLaCarte: Date;
        indicateurDEtatDeLaCarteDeRemplacement: string;
        identifiantElementDeStructureDeDistribution: number;
        libelleConstruitDuTypeEDS: string;
        dateDeReeditionDuCodeSecret: Date;
        codeActivationDeLOptionMoneo: string;
        dateDeChargementPegasus: Date;
        referenceOTA: string;
        indicateurDe2emeAppelIzicefi: string;
        dateDeDebutDeLaPeriode: Date;
        libelleDuTypeDeCarte: string;
        referenceDeLaPuce: string;
        identifiantDeRemplacementPourUneCarteVisa1er: string;
        dateExpirationCarte: Date;
        deplacements: Array<IDeplacement>;
    }
    interface IOptionDuContratCarte {
        codeDuNiveauDeServiceDuContratCarte: string;
        codeDeModaliteDeTarificationDuContratCarte: number;
        codeActivationECarteBleue: string;
        codeEtatDuServiceECarteBleue: string;
        codeDuNiveauDeGamme: string;
        typeDeDebitLorsDuPaiementParCarte: string;
        codeActivationDeLOptionMoneo: string;
        indicateurDeSouscriptionIzicarte: string;
    }
    interface IServiceDerogatoireDuContratCarte {
        codeDuNiveauDeServiceDerogatoireDuContratCarte: string;
        dateDeDebutDEffetDuNiveauDeServiceDerogatoire: string;
        dateDeFinDEffetDuNiveauDeServiceDerogatoire: string;
        indicateurDeTarificationNSD: string;
    }
    interface IProprietaireDuContratCarte {
        identifiantDeLaPersonne: number;
        premierePersonneEnRelation: number;
        identifiantPersonneDuRepresentantLegal: number;
        codeDuTypeDeLienInterPersonnes: string;
        indicateurDuNomDeJeuneFille: string;
        nomPatrinomyqueOuRaisonSociale: string;
        numeroDuTelephonePortableDuClient: string;
        referenceDeLOperateurTelephonique: string;
        identifiantDuClientChezLOperateur: string;
        designationCourte: string;
        codeDuTypeDeLien: string;
        codeDActionDeLIdentiteDuPorteur: string;
        nomDuBeneficiaire: string;
        dateNaissancePersonnePhysique: Date;
    }
    interface IInformationComplementaire {
        dateDeGratuiteDuPremierVisuel: Date;
        nombreOccurenceQuestionServeur: number;
        nombreOccurenceReponseFonction: number;
        montantOperation: number;
        designationLongueAgentInterne: string;
    }
    interface ICarteTEOZ {
        nuneroCarteRevolving: string;
        referenceInternePersonneContrat: string;
        dateDeReceptionTEOZ: Date;
        dateDeValiditeCarte: Date;
        nomEtPrenom: string;
        dateRecepAccuseFabricationTEOZ: Date;
        numeroDeLotCommandeDeCartes: number;
        alphanumeriqueBanalisee040: string;
        codeEtatDUneCarteTEOZ: string;
        libelleDeDestruction: string;
        lieuDeProvenanceDeLaCarte: string;
        lieuDeDestinationDeLaCarte: string;
    }
    interface IDeplacement {
        dateDebutEffetPorteurDeplacement: Date;
        dateFinEffetPorteurDeplacement: Date;
    }
}

/**
 * Modèle de représentation des données du web service "contratcarteservice/eligibiliteProduit".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ContratCarteService.EligibiliteProduit {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IStructure {
        identifiantElementDeStructureBis: number;
        identifiantElementDeStructureProprietaire: number;
        identifiantElementDeStructureDeDistribution: number;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        codeDeLaVersionDuPosteDeTravail: string;
        identifiantElementDeStructure: number;
    }
    interface IPersonne {
        identifiantDeLaPersonne: number;
        identifiantPersonneDuRepresentantLegal: number;
        numeroDuTelephonePortableDuClient: string;
        referenceDeLOperateurTelephonique: string;
        identifiantDuClientChezLOperateur: string;
        tiersDeConfiance: string;
        premierePersonneEnRelation: number;
    }
    interface IContratCarte {
        numeroDeCompte: string;
        numeroDeLOffreSouscrite: number;
        motDePasse: string;
        codeVisuelAEcheance: string;
        codeDuProduitCarte: number;
        identifiantDuProduitOuService: number;
        codeVisuelDeLaCarte: string;
        numeroDuContratTAP: number;
        indicateurDeTarificationNSD: string;
        codeDActionDeLIdentiteDuPorteur: string;
        dateDeChargementPegasus: Date;
        referenceOTA: string;
        codeDEcritureEnBaseDesInstances: string;
        numeroDuContratCarteEnInstance: number;
        codeDuTypeDeProduitOuService: string;
        indicInfoBLSDansOffre: string;
        codeVisuelCarte: string;
        codeDuProduitCarteDeRemplacement: number;
        codeDuModeDEnvoiDeLaCarteAEcheance: string;
        option: IOption;
        serviceDerogatoire: IServiceDerogatoire;
        supportDeCarte: ISupportDeCarte;
        commandeDeLaCarte: ICommandeDeLaCarte;
        structure: IStructure;
        personne: IPersonne;
        numeroContratCarte: number;
        identifiantPrestationContratCarte: string;
        typeRenouvellementCarte: string;
        situationCarte: ISituationCarte;
    }
    interface IOption {
        codeDuNiveauDeServiceDuContratCarte: string;
        codeDeModaliteDeTarificationDuContratCarte: number;
        codeActivationECarteBleue: string;
        codeActivationDeLOptionMoneo: string;
    }
    interface IServiceDerogatoire {
        codeDuNiveauDeServiceDerogatoireDuContratCarte: string;
        dateDeDebutDEffetDuNiveauDeServiceDerogatoire: Date;
        dateDeFinDEffetDuNiveauDeServiceDerogatoire: Date;
    }
    interface ISupportDeCarte {
        identifiant: string;
        refecenceDeLaPuce: string;
        faconnierDeLaPuce: string;
        indicateurDuNomDeJeuneFille: string;
    }
    interface ICommandeDeLaCarte {
        codeDuMotifDeCommandeAEcheance: string;
        codeDuMotifDeLaCommande: number;
    }
    interface IEligibiliteProduit {
        contratCarte: IContratCarte;
        comportementBancaire: IComportementBancaire;
        parametres: IParametres;
    }
    interface IComportementBancaire {
        resultatAnalyseConnaissanceClient: number;
        codeDuProduitCarteObligatoire: number;
        libelleMotifBlocageContratCarte: string;
        codeBINDeLaCarte: number;
        indicateurSouscriptionIzicarteCRC: string;
        codeTypeCommandeIzicarte: string;
        indicPossibiliteTransfoReserve: string;
    }
    interface ISituationCarte {
        codeSituationContratCarte: string;
        codeSituationCarte: string;
        dateDerniereSituationCarte: Date;
        libelleSituationContratCarte: string;
        libelleSituationCarte: string;
    }
    interface IParametres {
        typeAnalyseComportementBancaire: number;
    }
}

/**
 * Modèle de représentation des informations du contrat CDD
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ContratCdd.ContratCdd {
    interface IOperationFinanciere {
        montant: number;
        codeModeFinancier: string;
        libelleCourt: string;
        libelleLong: string;
        segmentPrvRio: ISegmentPrvRio;
        segmentPrjo: ISegmentPrjo;
    }
    interface IOperationRepartition {
        numeroCompte: string;
        montantVirement: number;
        libelleVirement: string;
    }
    interface IDetailBilleterie {
        monnaieBilleterie: number;
        nombreCoupure: ICoupure;
        monnaieSansBillet: number;
    }
    interface IInfosCheque {
        deviseCheque: string;
        numeroCheque: string;
        zoneInterne: string;
        montantCheque: number;
    }
    interface IChequeOperationFinanciere {
        S_INFOCHEQUE: Array<IInfosCheque>;
        modeFonctionnement: string;
        montant: number;
        deviseMontant: string;
    }
    interface IContratCDD {
        compteDeDepot: ICompteDeDepot;
        operationFinanciere: IOperationFinanciere;
    }
    interface ICompteDeDepot {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        reversementAgios: boolean;
        libellePersonnalise: string;
        deviseDuCompte: string;
        codeTypeProduitService: string;
    }
    interface ICoupure {
        b500: number;
        b200: number;
        b100: number;
        b50: number;
        b20: number;
        b10: number;
        b5: number;
    }
    interface ISegmentPrvRio {
        dateDeValeur: Date;
        titre: string;
        mfIndicateur: string;
        texteBoutonValidation: string;
        montantMinimum: number;
        montantMaximum: number;
        codeDeviseMontantParametre: string;
        numeroCompteRice: string;
        anneesProrogationPEL: string;
        modeFinancierNumerique: string;
        codeEvenementAtome: string;
        codePrestationTarifaire: string;
        modeFinancierChoisi: string;
        codeDeviseMontantOperation: string;
        montantGlobalOperation: number;
        libelleOperation1: string;
        indicateurLibelleBlocage: string;
        indicateurDateBlocage: string;
        codeRoleParticipant: string;
        nomPatronymiqueParticipant: string;
        prenomParticipant: string;
        identiteParticipant: string;
        numeroTelephoneParticipant: string;
        numeroCheque: string;
        ordreCheque: string;
        chequeGlobal: string;
        derniereContrepartie: string;
        typeCheque: string;
        nombreJourReserveEncaissement: string;
        supportLivret: string;
        presentationLivret: string;
        indicOblig: string;
        ancienSoldeLivret: number;
        indicateurBlocageAncienSolde: string;
        prochainNumeroLigneAImprimer: string;
        ligneBlocage: string;
        codeDeviseSoldeLivret: string;
        indicateurOD: string;
        S_BILLETERIE: IDetailBilleterie;
        S_PRVRIOUGR: Array<IOperationRepartition>;
        libelleOperation2: string;
        numeroPersonneSignataire: string;
        S_CHEQUE: IChequeOperationFinanciere;
    }
    interface ISegmentPrjo {
        numeroCompteclient: string;
        codeDeviseOperation: string;
        montantOperation: number;
        montantCommission: number;
        libelleFamilleOD: string;
        libelleTypeOD: string;
        detailAImprimer: string;
        codeTransaction: string;
        codeReferenceOD: string;
        codeFamilleOD: string;
        libelle1SaisiOD: string;
        libelle2SaisiOD: string;
    }
}

declare module ComposantsCommunsCarte.Modeles.CreditConsoService.ControleCompte {
    interface ICreditConsoControleCompteQuery {
        codeAgent: number;
        codeEtablissement: string;
        numeroPersonne: number;
        codeAction: string;
        idEdsInterne: number;
    }
    interface IReponseStandard {
        codeRetour: number;
        codeDomaineGestionPac: string;
        codeMessageErreur: string;
        libelleErreur: string;
    }
    interface IConsoControleCompteResponse {
        controleAcces: IControleAcces;
        reponseStandard: Array<IReponseStandard>;
    }
    interface IControleAcces {
        numeroPersonne: number;
        idAgenceDomiciliation: string;
        codeActionPresenceOpposition: string;
        codeEtablissement: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.CAKTIP {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    /**
     * Modèle de représentation des données délocalisées.
     */
    interface IData {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<INomCarte>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface INomCarte {
        Value: string;
        Key: string;
    }
}
declare module ComposantsCommunsCarte.Modeles.VISUEL {
    interface IData {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<IVISUEL>;
    }
    interface IVISUEL {
        LIKTVC: string;
        DFKTVJ: string;
        DDKTVI: string;
        COKTPV: string;
        LIKTVU: string;
        COCXBQ: string;
        CIKTVD: string;
        CDKRPC: string;
        COKTVU: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.KTCLOT {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    /**
     * Modèle de représentation des données délocalisées.
     */
    interface IData {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<IClotureCarte>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface IClotureCarte {
        CMKTBC: string;
        LIKTBL: string;
        COCXBQ: string;
        CTKTCL: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * TODO: Préférer l'utilisation d'un modèle spécialisé par table
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.DonneesDelocalisees {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    /**
     * Modèle de représentation des données délocalisées
     */
    interface IDonneesDelocalisees {
        donnees: Array<IDonneeDelocalisee>;
    }
    /**
     * Modèle de représentation d'une donnée délocalisée
     */
    interface IDonneeDelocalisee {
        Key: string;
        Value: string;
    }
}
declare module ComposantsCommunsCarte.Modeles.DonneesDelocalisees.CodeCivilite {
    interface IData {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ICodeCivilite>;
    }
    interface ICodeCivilite {
        Value: string;
        Key: string;
    }
}
declare module ComposantsCommunsCarte.Modeles.DonneesDelocalisees.CodeSituationFamiliale {
    interface IData {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ICodeSituationFamiliale>;
    }
    interface ICodeSituationFamiliale {
        Value: string;
        Key: string;
    }
}
declare module ComposantsCommunsCarte.Modeles.DonneesDelocalisees.DU1V {
    interface IData {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<IPaysNationalite>;
    }
    interface IPaysNationalite {
        indicatifPays: string;
        codePaysIso: string;
        codeZoneResidencePays: string;
        codeResident: string;
        libellePaysNationalite: string;
        codeInseePays: string;
        codePaysIsoAfnor: string;
        codeRisquePaysBdf: string;
        codeInseePaysNationalite: string;
        codeZoneGeoContrepartie: string;
        ageMajoritePays: string;
        codePaysOmc: string;
        libelleInseePays: string;
    }
}

declare module ComposantsCommunsCarte.Modeles.ContratCartePro {
    interface IPorteurCarte {
        id: any;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        adresse: string;
        nationalite: string;
        stituationFamille: string;
        teleFixe: string;
        teleMobile: string;
        libelleCommuneNaissance: string;
        dateNaissance: string;
        codeCivilite: string;
        cvilite: string;
        codeSituationFamiliale: string;
        situationFamiliale: string;
        identifiantPersonne: number;
    }
    interface IContratCarte {
        nomDuProduitCarte: string;
        porteur: IPorteurCarte;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        numeroCompte: string;
    }
}

/**
 * Service de gestion de la ressource "entitetitulaire/informationEntiteTitulaire"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.EntiteTitulaire.InformationEntiteTitulaire {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IInformationEntiteTitulaire {
        CaracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
        listeCompositionEntiteTitulaire: Array<ICompositionEntiteTitulaire>;
    }
    interface ICompositionEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        natureLienET: string;
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
    }
}

/**
 * Service de gestion de la ressource "/entitetitulaireservice/intervenantEntiteTit"
 *
 */
declare module ComposantsCommunsCarte.Modeles.EntiteTitulaireService.IntervenantEntiteTit {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IInformationPersonneMoral {
        raisonSocial: string;
    }
    interface IInformationPersonnePhysique {
        nomFamille: string;
        nomUsage: string;
        prenom: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeMandat: string;
    }
    interface IPersonne {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        codeTypePersonne: string;
        identifiantPersonne: number;
        indiceResponsableET: string;
        codePersonnaliteJuridique: string;
        dateDebut: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLiensInterPersonnes: string;
        numeroRangPersonneET: string;
        dateFin: string;
        rangAncienEtatCivil: string;
        informationPersonneMoral: IInformationPersonneMoral;
        informationPersonnePhysique: IInformationPersonnePhysique;
    }
    interface IIntervenantEntiteTit {
        listPersonne: Array<IPersonne>;
    }
}

declare module ComposantsCommunsCarte.Modeles.EntretienCommercial {
    interface IResultat {
        identifiantPersonne: number;
        codeTypeFamilleResultat: string;
        identifiantProduitService: number;
        codeNatureResultatCommercial: string;
        codeTypeResultatCommercial: string;
        codeTypeProduitService: string;
        indicRattachableCRE: string;
        codeTypeProduitServiceGCP: string;
        codeOrigineFonds: number;
        montantResultatCommercial: number;
        codeModeGestionLivret: string;
        sousCodeProduitService: string;
        codeProduitCarte: string;
        codeModeFinancier: string;
        codeCaractereForfaitaireOffre: string;
        indicProduitServiceObligatoire: string;
    }
}

/**
 * Modèle de représentation des données du web service "produitcarteparametre/carteEtablissement".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IFamilleDeCarte {
        nomDeLaFamille?: string;
        indicateurDeFiltrageParOption?: boolean;
        optionsDeFiltrageDeLaFamille?: Array<IOptionDeFiltrageDeLaFamille>;
        cartesVisuelsDeLaFamille?: Array<ICarteVisuelDeLaFamille>;
    }
    interface ICarteVisuelDeLaFamille {
        codeDuProduitCarte?: string;
        nomDuProduitCarte?: string;
        familleDuProduitCarte?: string;
        codeDuVisuel?: string;
        nomDuVisuel?: string;
        uriDuVisuel?: string;
        indicateurDeVisuelParDefaut?: boolean;
        optionDeDebit?: string;
        optionSansContact?: string;
        optionDePaiement?: string;
        optionDeRetrait?: string;
        optionDeCode?: string;
        optionDePlafond?: boolean;
        optionDeTransportCitevia?: string;
        codeInterroBDFPourCarte?: string;
        typeDeCarte?: string;
        indicateurCarteDeRemplacement?: string;
        codeFamilleCapaciteJuridiquePersonne?: string;
        indicateurPotentialiteLse?: string;
        codePotentialiteEcarteBleu?: string;
        indicActvServDons: string;
    }
    interface IOptionDeFiltrageDeLaFamille {
        nomDeLOption?: string;
        prioriteDeLOption?: string;
    }
    interface ICarteEtablissement {
        famillesDeCarte?: Array<IFamilleDeCarte>;
        parametre?: IParametreCarteEtablissement;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IParametreCarteEtablissement {
        codeEtablissement?: string;
        versionSegment?: string;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
}

/**
 * Modèle de représentation des données du web service "produitcarteparametre/plafondDetail".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ProduitCarteParametre.PlafondDetail {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IPlafondDetail {
        parametre: IParametreDePlafondDetail;
        plafondsAutorises: Array<IPlafondAutorise>;
    }
    interface IParametreDePlafondDetail {
        codeEtablissement: string;
        codeProduitCarte: string;
        codeDuNiveauDeService: string;
    }
    interface IPlafondAutorise {
        identifiantDesFonctionsDeBase: string;
        libelleDesFonctionsDeBase: string;
        codeDeLaDevise: string;
        periodeDApplicationDuPlafond: number;
        plafondDActivite: number;
        plafondMinimum: number;
        plafondMaximum: number;
    }
}

/**
 * Modèle de représentation des données du web service "produitcarteparametre/plafond".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.ProduitCarteParametre.Plafond {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface INiveauDeServiceDuProduitCarte {
        codeDuNiveauDeService: string;
        natureDuNiveauDeService: string;
        libelleDuNiveauDeService: string;
        indicateurDuNiveauAutorise: string;
        libelleDuNiveauDeServiceLong: string;
    }
    interface IParametreDuPlafond {
        codeEtablissement: string;
        codeProduitCarte: string;
    }
    interface IPlafond {
        parametre: IParametreDuPlafond;
        niveauxDeService: Array<INiveauDeServiceDuProduitCarte>;
    }
}

/**
 * Modèle de représentation des données du web service "structure/recherche".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.Structure.Recherche {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
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
    }
}

/**
 * Modèle de représentation des données du web service "tiers/particulierInformation".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.Tiers.ParticulierInformation {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
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
        dateNaissance: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: string;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: string;
        codeRegimeMatrimonial: string;
        typeClauseMatrimoniale: string;
        indicDonationEntreEpoux: string;
        nombreEnfantACharge: number;
        categorieSocioprofessionnelle: string;
        nomEmployeur: string;
        dateEffetCSP: string;
        dateEmbaucheEmployeurActuel: string;
        codeTypeContratTravail: string;
        dateFinContratTravail: string;
        libelleProfession: string;
        codeResident: string;
        codeAppartenanceReseau: string;
        edsDomiciliation: number;
        codePieceJustif: string;
        dateObtentionPieceJustificative: string;
        refPieceJustificative: string;
        codeTypeNIF: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        edsInterneDomiciliation: number;
        sirenEmployeur: string;
        sirenAutoEntrepreneur: string;
        indicateurAutoEntrepreneur: string;
        indicateurSocietaire: string;
        identifiantRelationtEconomique: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
        dateNaturalisation: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
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
        codePostalPTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        codeInseePays: string;
        codeTypeAdresse: string;
        codeRetourDistribution: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        libelleInseeLocalite: string;
        codeISOPays: string;
        indicateurEnvoiCourrier: string;
        indiceAmericaniteFATCA: string;
        libelleStatutFATCA: string;
        dateAttributionFATCA: string;
        codeBlocageVAO: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        statutPro: IStatutPro;
        gestionPrivee: IGestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        nif: string;
    }
    interface IStatutPro {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: string;
        identifiantInterneAgentModification: string;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
    interface IGestionPrivee {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: string;
        identifiantExterneEDS: string;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: string;
        identifiantExterneEDS2: string;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
    }
}

/**
 * Modèle de représentation des données du web service "tiers/particulierTiersLies".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Modeles.Tiers.ParticulierTiersLies {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IParticulierTiersLies {
        identificationPersonne: IIdentificationPersonne;
        listeTiers: Array<IListeTiers>;
    }
    interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IListeTiers {
        codeEtablissementLie: string;
        identifiantPersonneLiee: number;
        codeTypeLienInterPersonne: string;
        libelleTypeLienInterPersonne: string;
        codeSensLienInterPersonne: string;
    }
}

/**
 * Service de gestion de la ressource "contratcarte/information"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface de données pour la clôture du contrat carte.
     */
    interface IDataClotureContratCarte {
        numeroDuContratCarte: number;
        numeroDeLOffreSouscrite: number;
        identifiantDuProduitOuService: number;
        dateCloture: string;
        codeMotifBlocageContratCarte: string;
        dateDeFinDeValiditeDeLaCarte: string;
        identifiant: string;
        codeEtablissement: string;
        codeDeLaVersionDuPosteDeTravail: string;
        versionSegment: string;
    }
    /**
     * Déclaration du service
     */
    class ContratCarteInformationService {
        private serviceAgent;
        static TYPE_COMPORTEMENT_OK: number;
        static TYPE_COMPORTEMENT_REFUS: number;
        static TYPE_COMPORTEMENT_ALERTE: number;
        static TYPE_MODIFICATION_CLOTURE: string;
        static VERSION_SEGMENT_CLOTURE_IMMEDIATE_HORS_OFFRE: string;
        static VERSION_SEGMENT_CLOTURE_IMMEDIATE_DANS_OFFRE: string;
        static VERSION_SEGMENT_CLOTURE_DIFFEREE_HORS_OFFRE: string;
        static VERSION_SEGMENT_CLOTURE_DIFFEREE_DANS_OFFRE: string;
        static VERSION_SEGMENT_CLOTURE_A_DATE_HORS_OFFRE: string;
        static VERSION_SEGMENT_CLOTURE_A_DATE_DANS_OFFRE: string;
        static VERSION_SEGMENT_KT11_HORS_OFFRE_DOSSIER_VENTE: string;
        static VERSION_SEGMENT_KT11_DANS_OFFRE_DOSSIER_VENTE: string;
        static VERSION_SEGMENT_KT11_HORS_OFFRE_CARTE_AGIR: string;
        static VERSION_SEGMENT_KT11_DANS_OFFRE_CARTE_AGIR: string;
        static NIVEAU_SERVICE_OPPO_COMPTE_D00: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du web service avec le verbe POST
         * @param data Données d'entrée du web service
         * @return Une promesse contenant un objet de type information
         */
        sendPostRequest(data: Modeles.ContratCarte.Information.IInformation): ng.IPromise<Modeles.ContratCarte.Information.IInformation>;
        /**
         * Méthode d'appel du web service avec le verbe PUT
         * @param data Données d'entrée du web service
         * @return Une promesse contenant un objet de type information
         */
        sendPutRequest(data: Modeles.ContratCarte.Information.IInformation): ng.IPromise<Modeles.ContratCarte.Information.IInformation>;
        /**
         * Méthode permettant de clôture un contrat carte.
         * @param data Données permettant la clôture du contrat carte.
         * @return Une promesse contenant un objet de type information
         */
        cloturerContratCarteRequest(data: IDataClotureContratCarte): ng.IPromise<Modeles.ContratCarte.Information.IInformation>;
    }
}

/**
 * Service de gestion de la ressource "contratcarte/recherche"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IContratCarteRechercheQuery {
        codeTypeRecherche: number;
        codeEtablissement?: string;
        premierePersonneEnRelation?: string;
        numeroDuCompte?: string;
        identifiantElementDeStructure?: number;
        identifiantElementDeStructureBis?: number;
        codeGuichetInterbancaire?: string;
        identifiantDeLaPersonne?: number;
        typeInterrogationPourLesCartes?: string;
        identifiantDuSupportDeCarte?: string;
        nombreOccurenceQuestionServeur?: number;
        codeFonctionChoixRechercheEtatCompte?: string;
        dateRechercheDeLEtatDuCompte?: string;
        dateRechercheDeLEtatDuCompteBis?: string;
        nombreDeJoursDepuisCreationPreAbusif?: number;
        identifiantElementDeStructureDeDistribution?: number;
        identifiantElementDeStructureTiers?: number;
        dateOuvertureProduitOuService?: string;
        designationLongueElementStructure?: string;
    }
    /**
     * Déclaration du service
     */
    class ContratCarteRechercheService {
        private serviceAgent;
        static RECHERCHE_PAR_TYPE_DE_COMPTE: number;
        static RECHERCHE_PAR_TYPE_IDENTIFIANT_PERSONNE: number;
        static RECHERCHE_PAR_TYPE_CHAINAGE_CODE_SECRET: number;
        static RECHERCHE_PAR_IDENTIFIANT_SUPPORT_CARTE: number;
        static RECHERCHE_PAR_PREMIER_PERSONNE_EN_RELATION: number;
        static INTEROGATION_PAR_TYPE_TOUTES_LES_CARTES: string;
        static INTEROGATION_PAR_TYPE_CARTE_DE_REFERENCE: string;
        static INTEROGATION_PAR_TYPE_CARTE_A_REMETTRE: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service sans paramètres
         */
        url(): string;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGetRequest(data: IContratCarteRechercheQuery): ng.IPromise<Modeles.ContratCarte.Recherche.IRecherche>;
    }
}

/**
 * Service de gestion de la ressource "contratcarteservice/eligibiliteProduit"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IContratCarteServiceEligibiliteProduitQuery {
        numeroDeCompte?: string;
        numeroDeLOffreSouscrite?: number;
        motDePasse?: string;
        codeDuModeDEnvoiDeLaCarteAEcheance?: string;
        codeVisuelAEcheance?: string;
        codeDuProduitCarte?: number;
        codeDuProduitCarteDeRemplacement?: number;
        identifiantDuProduitOuService?: number;
        codeVisuelDeLaCarte?: string;
        codeVisuelCarte?: string;
        numeroDuContratTAP?: number;
        indicateurDeTarificationNSD?: string;
        codeDActionDeLIdentiteDuPorteur?: string;
        dateDeChargementPegasus?: string;
        referenceOTA?: string;
        codeDEcritureEnBaseDesInstances?: string;
        numeroDuContratCarteEnInstance?: number;
        codeDuTypeDeProduitOuService?: string;
        indicInfoBLSDansOffre?: string;
        identifiantDeLaPersonne?: number;
        identifiantPersonneDuRepresentantLegal?: number;
        premierePersonneEnRelation?: number;
        numeroDuTelephonePortableDuClient?: string;
        referenceDeLOperateurTelephonique?: string;
        identifiantDuClientChezLOperateur?: string;
        tiersDeConfiance?: string;
        codeEtablissement?: string;
        codeGuichetInterbancaire?: string;
        identifiantElementDeStructureBis?: number;
        identifiantElementDeStructureDeDistribution?: number;
        identifiantElementDeStructureProprietaire?: number;
        codeDeLaVersionDuPosteDeTravail?: string;
        codeDuNiveauDeServiceDuContratCarte?: string;
        codeDeModaliteDeTarificationDuContratCarte?: number;
        codeActivationECarteBleue?: string;
        codeActivationDeLOptionMoneo?: string;
        codeDuNiveauDeServiceDerogatoireDuContratCarte?: string;
        dateDeDebutDEffetDuNiveauDeServiceDerogatoire?: string;
        dateDeFinDEffetDuNiveauDeServiceDerogatoire?: string;
        identifiant?: string;
        refecenceDeLaPuce?: string;
        faconnierDeLaPuce?: string;
        indicateurDuNomDeJeuneFille?: string;
        codeDuMotifDeCommandeAEcheance?: string;
        codeDuMotifDeLaCommande?: number;
        numeroContratCarte?: number;
        identifiantPrestationContratCarte?: string;
        typeRenouvellementCarte?: string;
        identifiantElementDeStructure?: number;
        typeAnalyseComportementBancaire?: number;
        versionQuestion?: string;
        identifiantPersonneRepresOrgBeneficiaire?: number;
        montantDonUnitaireClientCarte?: number;
        montantSeuilAlerteDonsCarte?: number;
        indicateurSuspensionDons?: string;
        indicateurActivationServiceDons?: string;
    }
    /**
     * Déclaration du service
     */
    class ContratCarteServiceEligibiliteProduit {
        private serviceAgent;
        static RESULTAT_ANALYSE_COMPORTEMENT_OK: number;
        static RESULTAT_ANALYSE_COMPORTEMENT_REFUS: number;
        static RESULTAT_ANALYSE_COMPORTEMENT_ALERTE: number;
        static VERSION_QUESTION_STANDARD: string;
        static VERSION_QUESTION_IZICARTE: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: IContratCarteServiceEligibiliteProduitQuery): ng.IPromise<Modeles.ContratCarteService.EligibiliteProduit.IEligibiliteProduit>;
    }
}

declare module ComposantsCommunsCarte.Services.CreditConsoService {
    class CreditConsoControleCompteService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendPostRequest(params: ComposantsCommunsCarte.Modeles.CreditConsoService.ControleCompte.ICreditConsoControleCompteQuery): ng.IPromise<ComposantsCommunsCarte.Modeles.CreditConsoService.ControleCompte.IConsoControleCompteResponse>;
    }
}

declare module ComposantsCommunsCarte.Services {
    interface ITableauDonneesDeloc {
        idTable: string;
        data: any;
    }
    class DonneesDelocaliseesService {
        private serviceAgent;
        private qService;
        static tableNationalite: string;
        static tableCivilite: string;
        static tableSituationFamilial: string;
        static tableRegimeMatrimonial: string;
        tableauDonneesDeloc: Array<ITableauDonneesDeloc>;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        getNationalite(codeNationalite: string, codeEtablissement: string): ng.IPromise<string>;
        getLiblleCivilite(codeCivilite: string, codeEtablissement: string): ng.IPromise<String>;
        getLibelleSituationFamiliale(key: string, codeEtablissement: string): ng.IPromise<string>;
    }
}

/**
 * Service de gestion de la ressource "entitetitulaire/informationEntiteTitulaire"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IEntiteTitulaireInformationEntiteTitulaireQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    /**
     * Déclaration du service
     */
    class EntiteTitulaireInformationEntiteTitulaireService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: IEntiteTitulaireInformationEntiteTitulaireQuery): ng.IPromise<Modeles.EntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

/**
 *  Service de gestion de la ressource "/entitetitulaireservice/intervenantEntiteTit"
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IIntervenantEntiteTitQuery {
        codeEtablissement: string;
        identifiantPersonne: string;
        identifiantEntiteTitulaire: number;
        codeGuichet: string;
        codeTypeProduitService: string;
        codeProduitService: string;
        incideRechercheIdentifiantBAD: string;
    }
    /**
     * Déclaration du service
     */
    class EntiteTitulaireServiceIntervenantEntiteTit {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: IIntervenantEntiteTitQuery): ng.IPromise<Modeles.EntiteTitulaireService.IntervenantEntiteTit.IIntervenantEntiteTit>;
    }
}

/**
 * Service de gestion de la ressource "entretiencommercial/resultatEntretien"
 *
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Déclaration du service
     */
    class EntretienCommercialService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendPostRequest(data: ComposantsCommunsCarte.Modeles.EntretienCommercial.IResultat): ng.IPromise<ComposantsCommunsCarte.Modeles.EntretienCommercial.IResultat>;
    }
}

/**
 * Service mettant à disposition des fonctions utilitaires pour la ressource primaire "contratcarte"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Le helper
     */
    class HelperContratCarteService {
        private serviceAgent;
        private qService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Méthode permettant de générer un objet Information à partir d'un objet EligibiliteProduit.
         * Note: Cette méthode est utilisée principalement pour la création d'un contrat carte puisque
         * c'est la réponse du web service d'éligibilité qui permet de réaliser la mise en instance
         * du contrat carte
         * @param data Le modèle représentant l'éligibilité du contrat carte
         * @response Un modèle de donnée permettant d'alimenter le web service information
         */
        buildInformationFromEligibiliteProduit(data: Modeles.ContratCarteService.EligibiliteProduit.IEligibiliteProduit): Modeles.ContratCarte.Information.IInformation;
        /**
         * Méthode de construction de l'objet information à partir de l'avenant du contrat carte.
         * @response Un modèle de donnée permettant d'alimenter le web service information
         */
        buildInformationFromAvenantContratCarte(data: Modeles.AvenantContratCarte.IData): Modeles.ContratCarte.Information.IInformation;
        /**
         * Méthode de construction de l'objet information à partir de la clôture du contrat carte.
         * @response Un modèle de donnée permettant d'alimenter le web service information
         */
        buildInformationFromClotureContratCarte(data: Modeles.ClotureContratCarte.IData, appelant: number): Modeles.ContratCarte.Information.IInformation;
        /**
         * Méthode de construction d'une instance de l'objet Personne
         */
        private buildPersonneModele(data);
        /**
         * Méthode de construction d'une instance de l'objet Structure
         */
        private buildStructureModele(data);
        /**
         * Méthode de construction d'une instance de l'objet Option
         */
        private buildOptionModele(data);
        /**
         * Méthode de construction d'une instance de l'objet SupportDeCarte
         */
        private buildSupportDeCarteModele(data);
        /**
         * Méthode de construction d'une instance de l'objet ClotureContrat
         */
        private buildClotureContratModele(data);
        /**
         * Méthode de construction d'une instance de l'objet ContratCarte
         */
        private buildContratCarteModele(data);
        /**
         * Méthode de construction de l'objet Parametres pour la clôture du contrat carte
         */
        private buildParametresModeleForAvenantContratCarte();
        /**
         * Méthode de construction de l'objet Parametres pour la clôture du contrat carte
         */
        private buildParametresModeleForClotureContratCarte(data);
        /**
         * Méthode de construction d'une instance de l'objet ServiceDerogatoire
         */
        private buildServiceDerogatoireModele(data);
        /**
         * Méthode de construction d'une instance de l'objet CommandeDeLaCarte
         */
        private buildCommandeDeLaCarteModele(data);
        getCodeVisuelAEcheance(codeEtablissement: string, codeProduitCarte: string, codeVisuel: string): ng.IPromise<string>;
    }
}

/**
 * Service mettant à disposition des fonctions utilitaires pour la connection avec GGO.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    enum appelant {
        GgoBdd = 1,
        Ggho = 2,
        GgoBdr = 3,
        Cgo = 4,
    }
    /**
     * Le helper
     */
    class HelperGgoCarteService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode permettant d'extaire le numéro du compte à partir du context de mise en gestion GGO.
         * @param data Les données contextuelles de GGO.
         * @param codeDuTypeDeProduitOuService
         * @return Le numéro du compte pour la mise en gestion
         */
        extactNumeroCompteFromMiseEnGestion(data: GestionGeneriqueOffres.Types.DonneesContextuelles, codeDuTypeDeProduitOuService: string, appelant: number): string;
        /**
         * Méthode permettant d'extraire la référence du compte du contexte GGO
         * TODO: Utiliser le typage de la référence produit dès que ce dernier sera disponible.
         * @param data Les données contextuelles de GGO.
         * @param codeDuTypeDeProduitOuService
         * @return La référence du compte
         */
        extractReferenceCompteFromReferencesProduits(data: GestionGeneriqueOffres.Types.DonneesContextuelles, codeDuTypeDeProduitOuService: string): any;
        /**
         * Méthode permettant d'extraire le numéro du contrat carte du contexte GGO
         * @param data Les données contextuelles de GGO.
         * @return Le numéro du contrat carte
         */
        extractNumeroContratCarteFromReferencesProduits(data: GestionGeneriqueOffres.Types.DonneesContextuelles): string;
        /**
         * Méthode permettant d'extraire le numéro du contrat carte du contexte GGO
         * @param data Les données contextuelles de GGO.
         * @return Le numéro du contrat carte
         */
        extraireReferenceProduitPrincipal(data: GestionGeneriqueOffres.Types.DonneesContextuelles): string;
        extraireCodeGuichet_Chaine21(refCompte21: string): string;
        /**
         * Méthode permettant d'extraire le numéro du contrat carte du contexte GGO
         * @param data Les données contextuelles de GGO.
         * @return Le numéro du contrat carte
         */
        extraireCodeGuichetGestion(data: GestionGeneriqueOffres.Types.DonneesContextuelles): string;
        /**
         * Méthode permettant d'extraire l'IDEGPS carte du contexte GGO
         * @param data Les données contextuelles de GGO.
         * @param code Le code du produit service carte externe
         * @return Le numéro du contrat carte
         */
        extractIdentifiantProduitServiceCarteFromReferencesProduits(data: GestionGeneriqueOffres.Types.DonneesContextuelles, code: number): number;
        gererControleCarte(data: GestionGeneriqueOffres.Types.DonneesContextuelles, requis: boolean): void;
        controleBdfKoTechnique(data: GestionGeneriqueOffres.Types.DonneesContextuelles): boolean;
        getAllCartesIZI(codeEtablissement: string): ng.IPromise<Array<string>>;
        getListeCodeProduit(codeEtablissement: string, codeTypeProduitServicePrincipalOffre: string, codeCapaciteJuridique: string): ng.IPromise<Array<String>>;
    }
}

/**
 * Service permettant la gestion de l'I18N.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface pour le service d'I18N.
     */
    interface II18nCarteService {
        getAllTranslations: () => ng.IPromise<Object>;
        getTranslation: (item: string) => string;
        getPromise: () => ng.IPromise<Object>;
    }
    /**
     * Données pour la gestion de l'I18N.
     */
    class I18nCarteService implements II18nCarteService {
        private httpSvc;
        private qSvc;
        private serviceAgent;
        static $inject: string[];
        private _data;
        private _promise;
        /**
         * Les tracductions de l'application
         */
        private json;
        constructor(httpSvc: ng.IHttpService, qSvc: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Récupérer les données contenues dans le fichier de traduction
         * @returns {ng.IPromise<Object>} Object de type promesse.
         */
        getAllTranslations(): ng.IPromise<Object>;
        /**
         * Récupérer la traduction de la valeur passée en paramètre
         * @param {string} chaine de caractère
         * @returns la chaine de caractère traduit lisible
         */
        getTranslation(valeur?: string): string;
        /**
         * Getter sur la promesse.
         * @return La promesse faisant suite à la requête de restitution des données.
         */
        getPromise(): ng.IPromise<Object>;
    }
}

/**
 * Service permettant la gestion de la persistance entre les écrans du produit service carte.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Données pour la gestion de la persistance.
     */
    class PersistanceProduitCarteService {
        private serviceAgent;
        private map;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode permettant d'enregistrer les données
         */
        setData(key: string, value: any): void;
        /**
         * Méthode permettant d'extraire les données
         */
        getData(key: string): any;
    }
}

/**
 * Service de gestion de la ressource produitCarteParametre/carteEtablissement
 * @author S0076045 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IProduitCarteParametreCarteEtablissementQuery {
        codeEtablissement: string;
        identifiantsProduitsCarte: string;
        versionSegment?: string;
        codeDuVisuel?: string;
        niveauCarteAutorise?: string;
    }
    /**
     * Déclaration du service
     */
    class ProduitCarteParametreCarteEtablissementService {
        private serviceAgent;
        static VERSION_SEGMENT_A: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service "produitcarteparametre/carteEtablissement"
         */
        url(): string;
        /**
         * Méthode d'appel du service
         * @param Les paramètres d'entrée du web service "produitcarteparametre/carteEtablissement"
         * @return Une promesse contenant un modèle de type carte établissement
         */
        sendGetRequest(data: IProduitCarteParametreCarteEtablissementQuery): ng.IPromise<Modeles.ProduitCarteParametre.CarteEtablissement.ICarteEtablissement>;
    }
}

/**
 * Service de gestion de la ressource "produitCarteParametre/plafondDetail"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IProduitCarteParametrePlafondDetailQuery {
        codeEtablissement: string;
        codeProduitCarte: string;
        codeDuNiveauDeService: string;
    }
    /**
     * Déclaration du service
     */
    class ProduitCarteParametrePlafondDetailService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: IProduitCarteParametrePlafondDetailQuery): ng.IPromise<Modeles.ProduitCarteParametre.PlafondDetail.IPlafondDetail>;
    }
}

/**
 * Service de gestion de la ressource "produitCarteParametre/plafond"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IProduitCarteParametrePlafondQuery {
        codeEtablissement: string;
        codeProduitCarte: string;
        capaciteJuridique: string;
        canal?: string;
        identifiantNiveauDeServiceClient: string;
        codeNiveauServiceDerogatoireClient: string;
        dateDebutEffetNiveauService: string;
        dateFinEffetNiveauService: string;
    }
    /**
     * Déclaration du service
     */
    class ProduitCarteParametrePlafondService {
        private serviceAgent;
        static CANAL_PTU: string;
        static NATURE_DEROGATOIRE: string;
        static NATURE_STANDARD: string;
        static NATURE_ALL: string;
        static NIVEAU_AUTORISE: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: IProduitCarteParametrePlafondQuery): ng.IPromise<Modeles.ProduitCarteParametre.Plafond.IPlafond>;
    }
}

declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IProduitEngageParametreCarteAgirQuery {
        codeBanque: string;
        codeProduit: string;
        codeProduitMonetique: string;
        dateDeTraitement: string;
    }
    /**
     * Déclaration du service
     */
    class ProduitEngageParametreCarteAgirService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service sans paramètres
         */
        private url();
        /**
         * Méthode d'appel du service
         * @param
         * @return
         */
        sendGet(data: IProduitEngageParametreCarteAgirQuery): ng.IPromise<Array<Modeles.CarteAgir.ICarteAgir>>;
    }
}

/**
 * Service de gestion de la ressource "structure/recherche"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IStructureRechercheQuery {
        codeEtablissement: string;
        typeRechercheEDS: number;
        typeEDS: string;
        referenceExterneEDS?: number;
        libelleEDS?: string;
        identifiantEDS?: number;
    }
    /**
     * Déclaration du service
     */
    class StructureRechercheService {
        private serviceAgent;
        static RECHERCHE_EDS_PAR_LIBELLE: number;
        static RECHERCHE_EDS_PAR_REFERENCE_EXTERNE: number;
        static RECHERCHE_EDS_PAR_TYPE: number;
        static RECHERCHE_EDS_PAR_IDENTIFIANT_INTERNE: number;
        static EDS_DE_TYPE_AGENCE: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: IStructureRechercheQuery): ng.IPromise<Array<Modeles.Structure.Recherche.IDonneesCommunesEDS>>;
    }
}

/**
 * Service de gestion de la ressource "tiers/particulierInformation"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface ITiersParticulierInformationQuery {
        codeEtablissement: string;
        idPersonne: string;
    }
    /**
     * Déclaration du service
     */
    class TiersParticulierInformationService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service sans paramètres
         */
        url(): string;
        /**
         * Méthode d'appel du service
         * @param
         * @return Une promesse de type information sur le particulier
         */
        sendGetRequest(data: ITiersParticulierInformationQuery): ng.IPromise<Modeles.Tiers.ParticulierInformation.IParticulierInformation>;
    }
}

/**
 * Service de gestion de la ressource "tiers/particulierTiersLies"
 * @author S0076105 (Nicolas Le roux)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface avec les données d'appel
     */
    interface ITiersParticulierTiersLiesQuery {
        codeEtablissement: string;
        identifiantTiers: string;
    }
    /**
     * Déclaration du service
     */
    class TiersParticulierTiersLiesService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: ITiersParticulierTiersLiesQuery): ng.IPromise<any>;
    }
}

/**
 *
 * @author S0077412
 */
declare module ComposantsCommunsCarte.Controleurs {
    interface ICarteAgirDonnees {
        organismeBeneficiaire: Modeles.CarteAgir.ICarteAgir;
        susponsionDesDons: string;
        donParOperation: number;
        seuilAlerte: number;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface ICarteAgirScope extends ng.IScope {
        produitCarte: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        index: string;
        isVisible: boolean;
        codeEtablissement: string;
        listeCartesAgir: Array<Modeles.CarteAgir.ICarteAgir>;
        organismeBeneficiaire: Modeles.CarteAgir.ICarteAgir;
        susponsionDesDons: string;
        donParOperation: number;
        seuilAlerte: number;
        carteAgirDonnees: ICarteAgirDonnees;
        indicateurChargement: boolean;
        erreurChargement: string;
        modeEdition: boolean;
        carteAgirClient: ComposantsCommunsCarte.Modeles.CarteAgir.IDonneesDePartage;
        idBloc: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class CarteAgirControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        private produitengageparametreaCarteAgirService;
        static INDIC_ACTV_SER_DONS_OUI: string;
        static INDIC_ACTV_SER_DONS_NON: string;
        static INDIC_ACTV_SER_DONS_NON_CONCERNE: string;
        valeurPossibleSusponsion: string[];
        static $inject: string[];
        constructor($scope: ICarteAgirScope, i18n: Services.II18nCarteService, serviceAgent: MyWay.Services.ServiceAgent, produitengageparametreaCarteAgirService: Services.ProduitEngageParametreCarteAgirService);
        init(): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerParametreDePartage();
        modifierDonnesCarteAgir(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "carte agir".
 * @author S0077412
 */
declare module ComposantsCommunsCarte.Directives {
    function myWayc0420CarteAgir(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Compte".
 * @author S0077412
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface ICompte extends ng.IScope {
        index: string;
        libelleCompte: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class CompteControleur {
        private $scope;
        private i18n;
        static $inject: string[];
        constructor($scope: ICompte, i18n: Services.II18nCarteService);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Compte".
 * @author S0077412
 */
declare module ComposantsCommunsCarte.Directives {
    function mwCompte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Date de signature".
 *
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IDateSignatureControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: string;
        estModifie: boolean;
        iziCarte: boolean;
        required: boolean;
        disable: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class DateSignatureControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: IDateSignatureControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        validerDateSignature(): void;
        openDateSignature: boolean;
        onClickDateSignature(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Date de signature".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwDateSignature(): ng.IDirective;
}

/**
 * Définition de la directive mw-defaut-carte
 * Qui permet de charger une image par défaut quand celle définit dans l'attribut ng-src d'une balise img n'existe pas
 * @author S0076045 (Cédric Lisima)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwDefautImage(serviceAgent: MyWay.Services.ServiceAgent): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "E Carte Bleue".
 * Note: A priori cette directive n'est plus d'actualité, à surprimer.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IECarteBleueControleurScope extends ng.IScope {
        index: string;
        model: boolean;
        codeProduitCarte: string;
        codeEtablissement: string;
        modeEdition: boolean;
        codeActivationECarteBleue: string;
        isVisible: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class ECarteBleueControleurOld {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        valeursECarteBleue: string[];
        eCarteBleue: string;
        constructor($scope: IECarteBleueControleurScope, i18n: Services.II18nCarteService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: string): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "E Carte Bleu".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwECarteBleueOld(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "En travaux carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IEnTravauxCarteControleurScope extends ng.IScope {
    }
    /**
     * Déclaration du contrôleur
     */
    class EnTravauxCarteControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: IEnTravauxCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "En travaux carte".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwEnTravauxCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Entité titulaire".
 * @author S0077412
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IEntiteTitulaire extends ng.IScope {
        index: string;
        designationEntiteTitulaire: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class EntiteTitulaireControleur {
        private $scope;
        private i18n;
        static $inject: string[];
        constructor($scope: ITarificationControleurScope, i18n: Services.II18nCarteService);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Entité titulaire".
 * @author S0077412
 */
declare module ComposantsCommunsCarte.Directives {
    function mwEntiteTitulaire(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Erreur carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IErreurCarteControleurScope extends ng.IScope {
        libelleErreur: string;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class ErreurCarteControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: IErreurCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Erreur carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwErreurCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Famille de carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IFamilleProduitCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        codeEtablissement: string;
        listeCodeProduitCarte: string;
        familleDeCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        listeFamilleDeCarte: Array<Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte>;
        erreurComposant: boolean;
        codeProduitCarteDefaut: string;
        codeVisuelProduitCarteDefaut: string;
        modeEdition: boolean;
        disabled: boolean;
        messageErreur: string;
        modePopup: boolean;
        numeroOffreFamille?: string;
        typeTitulaire?: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class FamilleProduitCarteControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        private produitCarteParametreService;
        static $inject: string[];
        constructor($scope: IFamilleProduitCarteControleurScope, i18n: Services.II18nCarteService, serviceAgent: MyWay.Services.ServiceAgent, produitCarteParametreService: Services.ProduitCarteParametreCarteEtablissementService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Méthode de requêtage du web service des produits cartes de l'offre.
         */
        private sendProduitCarteRequest();
        /**
         * Méthode permettant de déterminer la famille à partir
         * d'un code produit carte et d'un code visuel.
         */
        private getFamilleCarteFromProduitCarteDefaut(codeProduitCarte, codeVisuelCarte, familles);
        /**
         * Méthode de validation de la sélection utilisateur.
         */
        private validerFamilleProduitCarte();
    }
}

/**
 * Directive permettant d'enrichir le comportement du composant commun "Famille de carte".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwFamilleProduitCarteSelectionWrapper(): ng.IDirective;
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Famille de carte".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwFamilleProduitCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Livraison".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Type de livraison
     */
    enum TypeDeLivraison {
        DOMICILE = 0,
        AGENCE_DOMICILIATION = 1,
        AUTRE_AGENCE = 2,
    }
    /**
     * Interface de représentation des données sélectionnées par l'utilisateur
     */
    interface IModelLivraison {
        libelle: string;
        typeLivraison: TypeDeLivraison;
        dataAgenceDomiciliation?: Modeles.Structure.Recherche.IDonneesCommunesEDS;
        dataAutreAgence?: IElementStructure;
        codeLieuAdressage: string;
    }
    /**
     * Interface d'un élément de structure de la directive "mwsf-saisie-agence-destinataire"
     */
    interface IElementStructure {
        id: string;
        value: string;
        identifiantElementStructure: number;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface ILivraisonCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: IModelLivraison;
        listeLieuDeLivraison: Array<IModelLivraison>;
        codeEtablissement: string;
        edsDomiciliation: number;
        erreurWebService: MyWay.Services.Erreur;
        erreurComposant: boolean;
        autreAgence: IElementStructure;
        indicateurChargement: boolean;
        modeEdition: boolean;
        edsLivraison: number;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class LivraisonCarteControleur {
        private $scope;
        private rechercheService;
        private serviceAgent;
        private modalService;
        private i18n;
        static $inject: string[];
        constructor($scope: ILivraisonCarteControleurScope, rechercheService: Services.StructureRechercheService, serviceAgent: MyWay.Services.ServiceAgent, modalService: MyWay.UI.ModalService, i18n: Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service
         */
        private sendRechercheDomiciliationRequest();
        /**
         * Méthode permettant de mettre en forme la référence externe de l'EDS.
         * Exemple de formatage: 0000709
         * @param reference la référence externe de l'eds
         */
        formatReferenceExternEds(reference: number): string;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerLivraisonCarte();
        onChangeSelectionUtilisateur(data: IModelLivraison): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Livraison carte".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwLivraisonCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Même code que".
 * TODO: Traiter le cas première carte !
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IMemeCodeQueCarteScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: Modeles.ContratCarte.Recherche.ICarteDuContratCarte;
        codeEtablissement: string;
        numeroDuCompte: string;
        premierePersonneEnRelation: string;
        modeEdition: boolean;
        isVisible: boolean;
        identifiantSupportCarte: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class MemeCodeQueCarteControleur {
        private $scope;
        private rechercheService;
        private serviceAgent;
        private i18n;
        listeCarteDuContratCarte: Array<Modeles.ContratCarte.Recherche.ICarteDuContratCarte>;
        erreurRechercheService: boolean;
        static $inject: string[];
        constructor($scope: IMemeCodeQueCarteScope, rechercheService: Services.ContratCarteRechercheService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
        /**
         * Méthode de callback sur la sélection de la carte
         */
        onChangeSelectionUtilisateur(data: Modeles.ContratCarte.Recherche.ICarteDuContratCarte): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Même code que".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwMemeCodeQueCarte(): ng.IDirective;
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Motif de clôture du contrat carte".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Scope du controleur
     */
    interface IMotifClotureCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        codeEtablissement: string;
        listeMotifDeCloture: Array<Modeles.KTCLOT.IClotureCarte>;
        model: Modeles.KTCLOT.IClotureCarte;
        onChange: () => void;
        erreurComposant: boolean;
        indicateurChargement: boolean;
        motifDeClotureCarte: string;
        modeEdition: boolean;
        required: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class MotifClotureCarteControleur {
        protected $scope: IMotifClotureCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        static TABLE_MOTIF_CLOTURE: string;
        static nomHtmlDirective: string;
        static $inject: string[];
        constructor($scope: IMotifClotureCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de restitution des motifs de clôture du contrat carte
         */
        sendMotifClotureRequest(): void;
        /**
         * Méthode de callback suite au succès de la requête permettant de restituer les motifs de clôture.
         * @params data La réponse de la table délocalisée
         */
        onSuccessMotifClotureRequest(data: Modeles.KTCLOT.IData): void;
        /**
         * Méthode de callback suite au clic sur un élément de la liste des motifs de clôture.
         * @param data Le motif de clôture du contrat carte
         */
        onClickMotifDeCloture(data: Modeles.KTCLOT.IClotureCarte): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        validerSaisie(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Motif de clôture du contrat carte".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwMotifClotureCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Nom sur la carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface INomCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        codeEtablissement: string;
        listeDeNomSurLaCarte: Array<Modeles.CAKTIP.INomCarte>;
        erreurComposant: boolean;
        codeNomUsage: string;
        modeEdition: boolean;
        identifiantTitulaire: string;
        nomMarital: string;
        revenir: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class NomCarteControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        private particulierInformationService;
        static TABLE_NOM_CARTE: string;
        static KEY_NOM_MARITAL: string;
        static DATA_NOM_SUR_LA_CARTE: Array<Modeles.CAKTIP.INomCarte>;
        static $inject: string[];
        constructor($scope: INomCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService, particulierInformationService: Services.TiersParticulierInformationService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Tmp - Utilisation d'une table en dur afin de ne pas modifier la table du PCM
         */
        private initMockNomSurLaCarte();
        /**
         * Méthode de validation de la sélection utilisateur
         */
        validerNomCarte(): void;
        onChangeSelectionUtilisateur(data: Modeles.DonneesDelocalisees.IDonneeDelocalisee): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Nom sur la carte".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwNomCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Numéro victoria Tap".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface INumeroVictoriaTapControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: string;
        numeroVictoriaTap: string;
        typeCarte: string;
        modeEdition: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class NumeroVictoriaTapControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static TYPE_CARTE_AVEC_CODE_VICTORIA_TAP: string;
        static $inject: string[];
        constructor($scope: INumeroVictoriaTapControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant de définir si le champs de saisi est à afficher ou non.
         * Règle de gestion: Le champs de saisie n'est visible que si le type de carte
         * est égal à "D".
         */
        isNumeroVictoriaTapVisible(): boolean;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerNumeroVictoriaTap();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Numéro victoria Tap".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwNumeroVictoriaTap(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "options de carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Objet de représentation des options de filtrage possible pour chaque produit carte.
     */
    interface IValeurOptionsDeFiltrage {
        optionDeDebit: IOptionDeFiltrage;
        optionSansContact: IOptionDeFiltrage;
        optionDePaiement: IOptionDeFiltrage;
        optionDeRetrait: IOptionDeFiltrage;
        optionDeCode: IOptionDeFiltrage;
    }
    /**
     * Objet de représentation d'une option de filtrage
     */
    interface IOptionDeFiltrage {
        listeDeChoix: Array<string>;
        selection: string;
        disabled: boolean;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface IOptionProduitCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        familleCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        produitCarte: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        valeurOptionsDeFiltrage: IValeurOptionsDeFiltrage;
        modeEdition: boolean;
        saisieRestreinte: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class OptionProduitCarteControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        constructor($scope: IOptionProduitCarteControleurScope, i18n: Services.II18nCarteService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(nomDeLOption: string, valeurDeLOption: string): void;
        /**
         * Méthode de construction de la sélection des options de filtrage
         */
        private buildDataSelection(data);
        /**
         * Méthode permettant de mettre à jour la valeur des options
         */
        setValeurOptions(data: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerOptionProduitCarte();
        /**
         * Méthode pour déscativer l'option carte
         */
        disableOption(option: any): boolean;
    }
}

/**
 * Directive permettant d'enrichir le comportement du composant commun "options de carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwOptionProduitCarteSelectionWrapper(): ng.IDirective;
}

/**
 * Directive permettant d'encapsuler la gestion du composant "options de carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwOptionProduitCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Plafond carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IPlafondCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        codeProduitCarte: string;
        codeEtablissement: string;
        model: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        isAideContextuelleVisible: boolean;
        optionPlafond: boolean;
        indicateurChargement: boolean;
        codeCapaciteJuridique: string;
        codePlafondCarte: string;
        modeEdition: boolean;
        indicateurDerogatoire: boolean;
        revenir: boolean;
        messageErreur: string;
        serviceDerogatoire: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IServiceDerogatoireDuContratCarte;
    }
    /**
     * Déclaration du contrôleur
     */
    class PlafondCarteControleur {
        private $scope;
        private plafondsService;
        private serviceAgent;
        private i18n;
        static KEY_PLAFOND_STANDARD: string;
        static KEY_PLAFOND_STC: string;
        static CODE_PRODUIT_CARTE_SESAME: string;
        private codeDuNiveauDeServiceDerogatoireDuContratCarte;
        listeNiveauDeService: Array<Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte>;
        parametreRequest: Modeles.ProduitCarteParametre.Plafond.IParametreDuPlafond;
        erreurPlafondsService: boolean;
        static $inject: string[];
        constructor($scope: IPlafondCarteControleurScope, plafondsService: Services.ProduitCarteParametrePlafondService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * onCodeProduitCarteChange
         * Méthode de callback sur la modification du code produit carte
         */
        onCodeProduitCarteChange(codeProduitCarteAfter: string, codeProduitCarteBefore: string): void;
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service
         * @param codeProduitCarte Le code du produit service carte sélectionné
         */
        sendPlafondRequest(codeProduitCarte: string): void;
        /**
         * Méthode de toggle de l'aide contextuelle
         */
        toggleAideContextuelle(): void;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         * @param data Le niveau de service sélectionné par l'utilisateur
         */
        onChangeSelectionUtilisateur(data: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte): void;
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param response La réponse de la requête au web service "produitCarteParametre/plafond"
         */
        protected onSuccessRequetePlafond(response: Modeles.ProduitCarteParametre.Plafond.IPlafond): void;
        /**
         * Méthode permettant d'extraire les niveau de service à afficher. En lecture seul, pas de filtrage à réaliser
         * puisque le plafond choisi par l'utilisateur n'est peut être plus actif à l'heure actuel.
         * TODO: Attention, une nature de niveau de service supplémentaire existe, "*" qui représente à la fois
         * un niveau de service standard et dérogatoire.
         * @param listeNiveauDeService Liste des niveau de service brut
         * @return Liste des niveaux de service à afficher
         */
        private extractNiveauDeService(listeNiveauDeService);
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerPlafondCarte();
        /**
         * Méthode qui permet de récupérer le code de niveau de service courant du contrat carte
         * @returns {string} Code du niveau de service du contrat carte
         */
        getNiveauDeServiceDerogatoireDuContratCarte(): string;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Plafond carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwPlafondCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "PlafondCarteDetail".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IPlafondCarteDetailControleurScope extends ng.IScope {
        codeProduitCarte: string;
        codeEtablissement: string;
        model: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        indicateurChargement: boolean;
        erreurComposant: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class PlafondCarteDetailControleur {
        private $scope;
        private plafondsService;
        private serviceAgent;
        private i18n;
        listePlafondAutorise: Array<Modeles.ProduitCarteParametre.PlafondDetail.IPlafondAutorise>;
        optionTableau: MyWay.UI.ImwTableOptions;
        static $inject: string[];
        constructor($scope: IPlafondCarteDetailControleurScope, plafondsService: Services.ProduitCarteParametrePlafondDetailService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
        /**
         * Méthode d'intialisation des données du controleur
         */
        initialiserData(): void;
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service
         */
        sendRequest(codeProduitCarte: string, niveauDeService: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte): void;
        /**
         * Méthode de clic sur le bouton de fermeture
         */
        onClickBoutonDeFermeture(): void;
        /**
         * Méthode de fin de chargement des données (succès ou erreur).
         */
        private terminerChargement();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "PlafondCarteDetail".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwPlafondCarteDetail(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Plafond lecture".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IPlafondLectureControleurScope extends ng.IScope {
        index: string;
        codeProduitCarte: string;
        codeEtablissement: string;
        model: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        isAideContextuelleVisible: boolean;
        codeDuNiveauDeService: string;
        codeCapaciteJuridique: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class PlafondLectureControleur {
        private $scope;
        private plafondsService;
        private serviceAgent;
        private i18n;
        listeNiveauDeService: Array<Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte>;
        parametreRequest: Modeles.ProduitCarteParametre.Plafond.IParametreDuPlafond;
        erreurPlafondsService: boolean;
        static $inject: string[];
        constructor($scope: IPlafondLectureControleurScope, plafondsService: Services.ProduitCarteParametrePlafondService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service
         * @param codeProduitCarte Le code du produit carte
         */
        restituerPlafondProduitCarte(codeProduitCarte: string): void;
        /**
         * Méthode de toggle de l'aide contextuelle
         */
        toggleAideContextuelle(): void;
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param response La réponse de la requête au web service "produitCarteParametre/plafond"
         */
        protected onSuccessRequetePlafond(response: Modeles.ProduitCarteParametre.Plafond.IPlafond): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Plafond lecture".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwPlafondLecture(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Porteur".
 * @author S0077412
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface INomPorteur extends ng.IScope {
        index: string;
        nomPorteur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class PorteurControleur {
        private $scope;
        private i18n;
        static $inject: string[];
        constructor($scope: ITarificationControleurScope, i18n: Services.II18nCarteService);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Porteur".
 * @author S0077412
 */
declare module ComposantsCommunsCarte.Directives {
    function mwPorteur(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Tarification".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface ITarificationControleurScope extends ng.IScope {
        index: string;
        model: Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        codeEtablissement: string;
        modeEdition: boolean;
        codeDeTarification: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class TarificationControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static TABLE_TARIFICATION: string;
        static KEY_TARIF_EN_VIGUEUR: string;
        listeDeTarification: Array<Modeles.DonneesDelocalisees.IDonneeDelocalisee>;
        erreurDonneesDelocalisees: boolean;
        static $inject: string[];
        constructor($scope: ITarificationControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: Modeles.DonneesDelocalisees.IDonneeDelocalisee): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Tarification".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwTarification(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Transport citévia".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface ITransportCiteviaControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: boolean;
        produitCarteSelectionne: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        familleDeCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        isCheckboxLock: boolean;
        isVisible: boolean;
        modeEdition: boolean;
        codeEtablissement: string;
        identifiantProduitCarte: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class TransportCiteviaControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        private produitCarteParametreService;
        static $inject: string[];
        choixOptionDeTransportCitevia: Array<string>;
        valeurOptionDeTransportCitevia: string;
        constructor($scope: ITransportCiteviaControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService, produitCarteParametreService: Services.ProduitCarteParametreCarteEtablissementService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant de modifier l'état d'affichage de la checkbox (Affiché/Verrouillé/Invisible).
         */
        private modificationEtatCheckbox(data);
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerTransportCitevia();
        onChangeOptionDeTransportCitevia(data: string): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Transport Citévia".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwTransportCitevia(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Tutelle".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface ITutelleCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: any;
        codeEtablissement: string;
        identifiantPersonne: string;
        codeCapaciteJuridique: string;
        isCapaciteAgeJuridique: boolean;
        erreurComposant: boolean;
        indicateurChargement: boolean;
        listeDeTuteur: Array<any>;
        identifiantTiers: string;
        modeEdition: boolean;
        messageErreur: string;
        codeProduitCarte: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class TutelleCarteControleur {
        private $scope;
        private serviceAgent;
        private tiersLiesService;
        private particulierInformationService;
        private i18n;
        private qService;
        static CODE_PRODUIT_CARTE_NOMADE: string;
        static CODE_PRODUIT_CARTE_EQUILIBRA: string;
        static CODE_PRODUIT_CARTE_NOMEA: string;
        donneesCarte: any;
        static $inject: string[];
        constructor($scope: ITutelleCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, tiersLiesService: Services.TiersParticulierTiersLiesService, particulierInformationService: Services.TiersParticulierInformationService, i18n: Services.II18nCarteService, qService: ng.IQService);
        initialiserData(codeProduitCarte: string): MyWay.Services.IPromesse<any>;
        afficherDonnes(listeLien: any): void;
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service.
         * Recherche des tiers liés pour valoriser le champs "Représentant légal".
         */
        sendParticulierTiersLiesRequest(): void;
        /**
         * Méthode de traitement des données suite au succès de la requête
         * @param data La réponse du web service
         */
        onSuccessParticulierTiersLiesRequest(data: any): void;
        /**
         * Méthode permettant de valoriser la vue à partir des données d'un web service.
         * Recherche d'un tier pour valoriser le champs "Représentant légal".
         */
        sendParticulierInformationRequest(idPersonne: string): ng.IPromise<Modeles.Tiers.ParticulierInformation.IParticulierInformation>;
        /**
         * Méthode de finalisation du traitement du composant
         */
        onSuccessFinDeTraitement(): void;
        /**
         * Méthode d'affichage du représentant légal en lecture seul
         */
        onShowOnlyRepresentantLegal(): void;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: any): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerTutelleCarte();
        /**
         *  Fonctoion permettre de retourner les codes de types de lien selon code de capacité juridique
         *  @param {codeCapaciteJuridique} type string
         */
        private listeCodeTypeLien(codeCapaciteJuridique);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Tutelle carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwTutelleCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Type de clôture de la carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Modèle de données pour le type de clôture d'un contrat carte
     */
    interface IDataTypeClotureCarte {
        typeDeCloture: ComposantsCommunsCarte.Modeles.ClotureContratCarte.TypeCloture;
        dateDeCloture: string;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface ITypeClotureCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        particulierInformation: ComposantsCommunsCarte.Modeles.Tiers.ParticulierInformation.IParticulierInformation;
        contratCarte: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IContratCarte;
        carteDuContratCarte: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.ICarteDuContratCarte;
        indicateurDateDeClotureVisible: boolean;
        model: IDataTypeClotureCarte;
        onChange: (data: any) => void;
        indicateurAffichage: boolean;
        dateDeCloture: Date;
        dateDeFinDeValidite: string;
        dateMinCloture: string;
        dateMaxCloture: string;
        typeDeClotureCarte: ComposantsCommunsCarte.Modeles.ClotureContratCarte.TypeCloture;
        dateDeClotureCarte: string;
        modeEdition: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class TypeClotureCarteControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: ITypeClotureCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de callback suite à la modification du type de clôture.
         * @param data La valeur du type de clôture du contrat carte.
         */
        onChangeTypeClotureContratCarte(data: ComposantsCommunsCarte.Modeles.ClotureContratCarte.TypeCloture): void;
        /**
         * Méthode de mise à jour de la date de clôture.
         * @param date La date de clôture du contrat carte
         */
        onChangeDateDeCloture(date: Date): void;
        /**
         * Méthode permettant la construction du libellé du composant en lecture seul
         * @return Le libellé construit
         */
        getLibelleLectureSeul(): string;
        /**
         * Méthode permettant de déterminer la visibilité de la date de clôture
         * @param data La valeur du type de clôture du contrat carte.
         */
        private updateIndicateurDateDeClotureVisible(data);
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerTypeClotureCarte();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Type de clôture de la carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwTypeClotureCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Type de carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Objet de représentation du type de filtrage
     */
    interface IValeurTypeDeFiltrage {
        listeDeChoix: Array<string>;
        selection: string;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface ITypeProduitCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        familleCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        produitCarte: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        valeurTypeDeFiltrage: IValeurTypeDeFiltrage;
        modeEdition: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class TypeProduitCarteControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        constructor($scope: ITypeProduitCarteControleurScope, i18n: Services.II18nCarteService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(nomDuTypeDeCarte: string): void;
        /**
         * Méthode de construction de la sélection de type de carte.
         */
        private buildDataSelection(data);
        /**
         * Méthode permettant de retourner le choix par défaut
         */
        private setValeurType(data);
        /**
         * Méthode de validation
         */
        private validerTypeProduitCarte();
    }
}

/**
 * Directive permettant d'enrichir le comportement du composant commun "Type de carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwTypeProduitCarteSelectionWrapper(): ng.IDirective;
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Type de carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwTypeProduitCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Modifier visuel carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IModifierVisuelCarteScope extends ng.IScope {
        nombreVisuelsAAfficher: number;
        limiteSlides: number;
        nombreColonne: number;
        numeroColonne: number;
        resteColonne: number;
    }
    /**
     * Déclaration du contrôleur
     */
    class ModifierVisuelCarteControleur {
        private $scope;
        private $modalInstance;
        private produitCarte;
        private listeProduitCarte;
        private i18n;
        urlVisuelCarte: string;
        static $inject: string[];
        constructor($scope: IModifierVisuelCarteScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, produitCarte: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille, listeProduitCarte: Array<Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>, i18n: Services.II18nCarteService);
        /**
         * Méthode de construction de l'Url du visuel de la carte
         */
        buildUrlVisuel(data: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): string;
        /**
         * Méthode de modification du visuel sélectionnée par l'utilisateur
         */
        switchVisuel(data: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Méthode permettant de valider l'action réaliser sur la popup
         */
        validerAction(): void;
        /**
         * Méthode permettant de déclancher la fermeture de la popup
         */
        closeView(): void;
    }
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Visuel carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IVisuelCarteScope extends ng.IScope {
        index: string;
        produitCarte: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        listeProduitCarte: Array<Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>;
        modeEdition: boolean;
        carteEcheance: boolean;
        codeEtablissement: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class VisuelCarteControleur {
        private $scope;
        private modalService;
        private serviceAgent;
        private i18n;
        static BASE_URL_VISUEL_CARTE: string;
        static EXTENSION_VISUEL_CARTE: string;
        urlVisuelCarte: string;
        static $inject: string[];
        constructor($scope: IVisuelCarteScope, modalService: MyWay.UI.ModalService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant de modifier le visuel de la carte
         */
        modifierVisuelCarte(): void;
        /**
         * Méthode de construction de l'Url du visuel de la carte
         */
        buildUrlVisuel(data: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): string;
        private verifierValiditeDeVisuel(listeVisuel, codeVisuel);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Visuel carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwVisuelCarte(): ng.IDirective;
}
