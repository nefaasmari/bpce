
declare module ComposantsCommunsCarte {
    var app: any;
}

declare module ComposantsCommunsCarte {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module ComposantsCommunsCarte {
}

declare module ComposantsCommunsCarte {
}

declare module ComposantsCommunsCarte {
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
    interface IInformation {
        parametres: IParametres;
        comportementBancaire: IComportementBancaire;
        chequier: IChequier;
        contratCarte: IContratCarte;
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
        dateDeChargementPegasus: Date;
        referenceOTA: string;
        codeDEcritureEnBaseDesInstances: string;
        numeroDuContratCarteEnInstance: number;
        codeDuTypeDeProduitOuService: string;
        indicInfoBLSDansOffre: string;
        codeVisuelCarte: string;
        libelleLongVisuelCarte: string;
        dateSignatureContratCarte: Date;
        identifiantPrestationContratCarte: string;
        typeRenouvellementCarte: string;
        dateReeditionCodeSecretMailer: Date;
        identifiantCarteDeRemplacement: string;
        nomDuPersonnalisateurDeCartes: string;
        indicateurActivationCarte: string;
        indicPresenceCarteActiveRemplacement: string;
        indicateur2emeAppelIzicefi: string;
        numeroSerieCarteCSCMEnCours: string;
        numeroSerieAncienneCarteCSCM: string;
        dateDebutPeriode: Date;
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
        dateRecuperationCarte: Date;
    }
    interface IOppositionDeLaCarte {
        codeMotifOppoCarteInterbancaire: string;
        libelleMotifOppoCarteInterbancaire: string;
        dateDebutOppoCarteInterbancaire: Date;
    }
    interface ISupportDeCarte {
        identifiant: string;
        refecenceDeLaPuce: string;
        faconnierDeLaPuce: string;
        dateDeDebutDeValidite: number;
        dateDeFinDeValidite: number;
        indicateurDuNomDeJeuneFille: string;
        dateActivationSupportCarte: Date;
        codeVisuelSupportDeLaCarte: string;
        identifiantBis: string;
        identifiantTiers: string;
    }
    interface ICommandeDeLaCarte {
        codeDuMotifDeCommandeAEcheance: string;
        dateDeRetourDeLaCommande: Date;
        dateDeLaCommandeDeLaCarte: Date;
        codeDuMotifDeLaCommande: number;
        libelleDuMotifDeLaCommande: string;
        codeMotifCommande: string;
        dateRemise: Date;
    }
    interface IParametres {
        codeTypeDeModification: number;
        indicateurSurLActionEffectuee: string;
        codeDeControleZAR: string;
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
    interface IChequier {
        numeroEntiteTitulaire: number;
        typeDeChequier: string;
        nombreDeChequiers: number;
        referenceProduitService: string;
    }
    interface IClotureContrat {
        dateCloture: Date;
        codeMotifBlocageContratCarte: string;
        dateDeFinDeValiditeDeLaCarte: Date;
        codeEtatDuDestockageDeLaCarte: string;
        identitePorteur: string;
        dateExpirationCarte: Date;
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
        dateDerniereSituationCarte: Date;
        libelleSituationContratCarte: string;
        libelleSituationCarte: string;
        codeDuStatutDeLaCarte: string;
        libelleDuCodeDuStatutDeLaCarte: string;
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
        dateDeSignatureDuContratCarte: Date;
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
        codeRegionMonde: string;
        numeroDuContratCarteEnInstance: number;
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
        deplacement: IDeplacement;
        dateExpirationCarte: Date;
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
    }
    interface IInformationComplementaire {
        dateDeGratuiteDuPremierVisuel: Date;
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
    }
    interface IOptionDeFiltrageDeLaFamille {
        nomDeLOption?: string;
        prioriteDeLOption?: string;
    }
    interface ICarteEtablissement {
        famillesDeCarte?: Array<IFamilleDeCarte>;
        parametre?: IParametreCarteEtablissement;
    }
    interface IParametreCarteEtablissement {
        codeEtablissement?: string;
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
        situationProfessionnelle: ISituationProfessionnellle;
        codeEtablissement: string;
        etatCivil: IEtatCivil;
        situationFiscale: ISituationFiscale;
        donneesAdministratives: IDonneesAdministratives;
    }
    interface IEtatCivil {
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        prenom: string;
        dateNaissance: Date;
        codeDepartementNaissance: string;
        codeInseePaysNationalite: string;
        dateNaturalisation: Date;
        codeSituationFamiliale: string;
        codeSexe: string;
        nomMarital: string;
        designationCourte: string;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        dateDeces: Date;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleInseePaysDoubleNationalite: string;
        dateEffetSituationFamiliale: Date;
        codeRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        libelleCapaciteJuridique: string;
        libelleCivilite: string;
        libelleDepartementNaissance: string;
        libellePaysNationalite: string;
        libellePaysNaissance: string;
        libelleRegimeMatrimonial: string;
        libelleSexe: string;
        libelleCodeSituationFamiliale: string;
        autresPrenom: string;
    }
    interface ISituationProfessionnellle {
        catégorieSocioProfessionnelle: string;
        denominationEmployeur: string;
        sirenEmployeur: string;
        dateEffetCSP: Date;
        dateEmbaucheEmployeurActuel: Date;
        codeTypeContratTravail: string;
        dateFinContratTravail: Date;
        codeNAFInsee: string;
        libelleCategorieSocioProfessionnelle: string;
        libelleNAFInsee: string;
        libelleTypeContratTravail: string;
        libelleProfession: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
    }
    interface ISituationFiscale {
        codeResident: string;
    }
    interface IDonneesAdministratives {
        codeAppartenanceReseau: string;
        indicateurSocietaire: string;
        libelleAppartenanceReseau: string;
        identifiantRelationEconomique: number;
        EDSDomiciliation: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
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
    }
    /**
     * Déclaration du service
     */
    class ContratCarteServiceEligibiliteProduit {
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
        sendGetRequest(data: IContratCarteServiceEligibiliteProduitQuery): ng.IPromise<Modeles.ContratCarteService.EligibiliteProduit.IEligibiliteProduit>;
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
 * Service de gestion de l'I18N.
 * @author S0076045 (Cédric Lisima)
 */
declare module ComposantsCommunsCarte.Services {
    /**
     * Interface pour le service d'I18N.
     */
    interface II18nService {
        getAllTranslations: () => ng.IPromise<Object>;
        getTranslation: (item: string) => string;
        getPromise: () => ng.IPromise<Object>;
    }
    /**
     * Classe de définition de l'I18N.
     */
    class I18nService implements II18nService {
        private httpSvc;
        private qSvc;
        private serviceAgent;
        static $inject: string[];
        private _data;
        private _messageErreur;
        private _fichierURL;
        private _promise;
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
    }
    /**
     * Déclaration du service
     */
    class ProduitCarteParametrePlafondService {
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
        sendGetRequest(data: IProduitCarteParametrePlafondQuery): ng.IPromise<Modeles.ProduitCarteParametre.Plafond.IPlafond>;
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
        idPersonne: string;
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
 * Contrôleur permettant d'encapsuler la gestion du composant "Choix du produit carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IChoixProduitCarteControleurScope extends ng.IScope {
        indicateurInitialisation: boolean;
        index: string;
        model: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        codeEtablissement: string;
        codeProduitCarteSelectionne: string;
        codeProduitCarteParDefaut: string;
        codeVisuelSelectionne: string;
        listeDeCodeProduitCarte: Array<string>;
        familleCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        listeProduitCarteVisuel: Array<Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>;
    }
    /**
     * Déclaration du contrôleur
     */
    class ChoixProduitCarteControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        constructor($scope: IChoixProduitCarteControleurScope, i18n: Services.II18nService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
        /**
         * Méthode permettant d'extraire une liste de produit carte à partir
         * de la sélection de l'utilisateur.
         */
        private extractListeProduitCarteWithSameOptions(produitCarte);
        /**
         * Méthode permettant d'extraire un produit carte à partir de la
         * sélection de l'utilisateur.
         */
        private extractProduitCarteFromSelection();
        /**
         * Setter sur le produit carte
         */
        setProduitCarteVisuel(produitCarteVisuel: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Setter sur la famille de carte
         */
        setFamilleCarte(familleCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Setter sur les options du produit carte
         */
        setOptionsProduitCarte(optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage): void;
        /**
         * Setter sur le type de produit carte
         */
        setTypeProduitCarte(typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Choix du produit carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwChoixProduitCarte(): ng.IDirective;
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
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IECarteBleueControleurScope extends ng.IScope {
        index: string;
        model: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class ECarteBleueControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        constructor($scope: IECarteBleueControleurScope, i18n: Services.II18nService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: boolean): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "E Carte Bleu".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwECarteBleue(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Erreur chargement".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IErreurChargementControleurScope extends ng.IScope {
        libelleErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class ErreurChargementControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: IErreurChargementControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Erreur chargement".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwErreurChargement(): ng.IDirective;
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
        index: string;
        codeEtablissement: string;
        listeCodeProduitCarte: string;
        familleDeCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        listeFamilleDeCarte: Array<Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte>;
        erreurProduitCarteParametreService: boolean;
        codeProduitCarteDefaut: string;
        codeVisuelProduitCarteDefaut: string;
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
        constructor($scope: IFamilleProduitCarteControleurScope, i18n: Services.II18nService, serviceAgent: MyWay.Services.ServiceAgent, produitCarteParametreService: Services.ProduitCarteParametreCarteEtablissementService);
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Méthode de requêtage du web service des produits cartes de l'offre.
         */
        private sendRequest(codeEtablissement, listeCodeProduitCarte);
        /**
         * Méthode permettant de déterminer la famille à partir
         * d'un code produit carte et d'un code visuel.
         */
        private getFamilleCarteFromProduitCarteDefaut(codeProduitCarte, codeVisuelCarte, familles);
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
     * Interface du scope du contrôleur
     */
    interface ILivraisonControleurScope extends ng.IScope {
        index: string;
        model: Modeles.Structure.Recherche.IDonneesCommunesEDS;
        codeEtablissement: string;
        titre: string;
        edsDomiciliation: number;
        isEdsDomicilePresent: boolean;
        onChangeEventDataName: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class LivraisonControleur {
        private $scope;
        private rechercheService;
        private serviceAgent;
        private i18n;
        static EDS_DOMICILE: Modeles.Structure.Recherche.IDonneesCommunesEDS;
        static DEFAULT_EVENT_DATA_NAME: string;
        listeEtablissement: Array<Modeles.Structure.Recherche.IDonneesCommunesEDS>;
        private listeEtablissementBrut;
        private listeEtablissementInitial;
        erreurLivraisonService: boolean;
        erreurWebService: MyWay.Services.Erreur;
        static $inject: string[];
        constructor($scope: ILivraisonControleurScope, rechercheService: Services.StructureRechercheService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service
         */
        private sendRequest();
        /**
         * Méthode permettant d'ajouter l'EDS de domiciliation à la liste des établissements
         * initialialement proposés à l'utilisateur.
         */
        private ajoutEdsDomiciliation();
        /**
         * Méthode de callback suite à la saisi de donnée dans la recherche.
         */
        recherche(keyword: string): void;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: Modeles.Structure.Recherche.IDonneesCommunesEDS): void;
        /**
         * Méthode permettant de mettre en forme la référence externe de l'EDS.
         * Exemple de formatage: 0000709
         */
        formatReferenceExternEds(data: Modeles.Structure.Recherche.IDonneesCommunesEDS): string;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Livraison".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwLivraison(): ng.IDirective;
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
    interface IMemeCodeQueScope extends ng.IScope {
        index: string;
        model: Modeles.ContratCarte.Recherche.IContratCarte;
        codeEtablissement: string;
        numeroDuCompte: string;
        premierePersonneEnRelation: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class MemeCodeQueControleur {
        private $scope;
        private rechercheService;
        private serviceAgent;
        private i18n;
        listeCarteDuContratCarte: Array<Modeles.ContratCarte.Recherche.ICarteDuContratCarte>;
        erreurRechercheService: boolean;
        static $inject: string[];
        constructor($scope: IMemeCodeQueScope, rechercheService: Services.ContratCarteRechercheService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
        /**
         * Méthode de callback sur la sélection de la carte
         */
        onChangeSelectionUtilisateur(data: Modeles.ContratCarte.Recherche.IContratCarte): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Même code que".
 * @author S0076105
 */
declare module ComposantsCommunsCarte.Directives {
    function mwMemeCodeQue(): ng.IDirective;
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
        index: string;
        model: Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        codeEtablissement: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class NomCarteControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static TABLE_NOM_CARTE: string;
        static KEY_NOM_MARITAL: string;
        static DATA_NOM_DE_NAISSANCE: Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        static DATA_NOM_SUR_LA_CARTE: Array<Modeles.DonneesDelocalisees.IDonneeDelocalisee>;
        listeDeNomSurLaCarte: Array<Modeles.DonneesDelocalisees.IDonneeDelocalisee>;
        erreurDonneesDelocalisees: boolean;
        static $inject: string[];
        constructor($scope: INomCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
        /**
         * Tmp - Utilisation d'une table en dur afin de ne pas modifier la table du PCM
         */
        private initMockNomSurLaCarte();
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation
         * de la sélection.
         */
        private sendRequest();
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
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
        index: string;
        model: string;
        typeCarte: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class NumeroVictoriaTapControleur {
        private $scope;
        private i18n;
        static TYPE_CARTE_AVEC_CODE_VICTORIA_TAP: string;
        static $inject: string[];
        constructor($scope: INumeroVictoriaTapControleurScope, i18n: Services.II18nService);
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
        onChangeSelectionUtilisateur(data: string): void;
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
    }
    /**
     * Interface du scope du contrôleur
     */
    interface IOptionProduitCarteControleurScope extends ng.IScope {
        index: string;
        familleCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        produitCarte: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        valeurOptionsDeFiltrage: IValeurOptionsDeFiltrage;
    }
    /**
     * Déclaration du contrôleur
     */
    class OptionProduitCarteControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        constructor($scope: IOptionProduitCarteControleurScope, i18n: Services.II18nService, serviceAgent: MyWay.Services.ServiceAgent);
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
 * Contrôleur permettant d'encapsuler la gestion du composant "Plafond".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IPlafondControleurScope extends ng.IScope {
        index: string;
        codeProduitCarte: string;
        codeEtablissement: string;
        model: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        isAideContextuelleVisible: boolean;
        optionPlafond: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class PlafondControleur {
        private $scope;
        private plafondsService;
        private serviceAgent;
        private i18n;
        static KEY_PLAFOND_STANDARD: string;
        listeNiveauDeService: Array<Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte>;
        parametreRequest: Modeles.ProduitCarteParametre.Plafond.IParametreDuPlafond;
        erreurPlafondsService: boolean;
        static $inject: string[];
        constructor($scope: IPlafondControleurScope, plafondsService: Services.ProduitCarteParametrePlafondService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
        /**
         * onCodeProduitCarteChange
         * Méthode de callback sur la modification du code produit carte
         */
        onCodeProduitCarteChange(codeProduitCarteAfter: string, codeProduitCarteBefore: string): void;
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service
         */
        sendRequest(codeProduitCarte: string): void;
        /**
         * Méthode de toggle de l'aide contextuelle
         */
        toggleAideContextuelle(): void;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte): void;
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête au web service "produitCarteParametre/plafond"
         */
        protected onSuccessRequetePlafond(response: Modeles.ProduitCarteParametre.Plafond.IPlafond): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Plafond".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwPlafond(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "PlafondDetail".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IPlafondDetailControleurScope extends ng.IScope {
        codeProduitCarte: string;
        codeEtablissement: string;
        model: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        indicateurChargement: boolean;
        erreurPlafondDetailService: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class PlafondDetailControleur {
        private $scope;
        private plafondsService;
        private serviceAgent;
        private i18n;
        listePlafondAutorise: Array<Modeles.ProduitCarteParametre.PlafondDetail.IPlafondAutorise>;
        optionTableau: MyWay.UI.ImwTableOptions;
        static $inject: string[];
        constructor($scope: IPlafondDetailControleurScope, plafondsService: Services.ProduitCarteParametrePlafondDetailService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
        /**
         * Méthode d'intialisation des données du controleur
         */
        initialiserData(): void;
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service
         */
        sendRequest(codeProduitCarte: string, niveauDeService: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte): void;
        /**
         * Méthode de fin de chargement des données (succès ou erreur).
         */
        private terminerChargement();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "PlafondDetail".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwPlafondDetail(): ng.IDirective;
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
        constructor($scope: IPlafondLectureControleurScope, plafondsService: Services.ProduitCarteParametrePlafondService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
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
 * Contrôleur permettant d'encapsuler la gestion du composant "Recapitulatif du produit carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Ensemble de données permettant la création d'un contrat carte.
     */
    interface IDataContratCarte {
        produitCarteVisuel: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        plafond: Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        numeroVictoriaTap: string;
        eCarteBleue: boolean;
        tarification: Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        nomCarte: Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        memeCodeQue: Modeles.ContratCarte.Recherche.ICarteDuContratCarte;
        tutelle: any;
        transportCitevia: boolean;
        livraison: Modeles.Structure.Recherche.IDonneesCommunesEDS;
        livraisonEcheance: Modeles.Structure.Recherche.IDonneesCommunesEDS;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface IRecapitulatifProduitCarteControleurScope extends ng.IScope {
        indicateurInitialisation: boolean;
        index: string;
        model: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        dataContratCarte: IDataContratCarte;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        familleCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        listeProduitCarteVisuel: Array<Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        numeroDuCompte: string;
        listeDeCodeProduitCarte: Array<string>;
        identifiantTitulaire: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class RecapitulatifProduitCarteControleur {
        protected $scope: IRecapitulatifProduitCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: Services.II18nService;
        indicateurDetails: boolean;
        static $inject: string[];
        constructor($scope: IRecapitulatifProduitCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
        /**
         * Méthode d'initialisation du model
         */
        private initialisationModel();
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         * Méthode en plusieurs partie puisque la complexité cyclomatique doit être inférieur à 10.
         */
        private onChangeContratCarteSuite(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de tutelle
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTutelle(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de nom sur la carte
         * sélectionnés par l'utilisateur
         */
        private fillModelWithNomCarte(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de même code que
         * sélectionnés par l'utilisateur
         */
        private fillModelWithMemeCodeQue(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments du plafond
         * sélectionnés par l'utilisateur
         */
        private fillModelWithPlafond(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de E-Carte bleue
         * sélectionnés par l'utilisateur
         */
        private fillModelWithECarteBleue(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de transport citevia
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTransportCitevia(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de numero victoria tap
         * sélectionnés par l'utilisateur
         */
        private fillModelWithNumeroVictoriaTap(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de livraison
         * sélectionnés par l'utilisateur
         */
        private fillModelWithLivraison(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de livraison à échéance
         * sélectionnés par l'utilisateur
         */
        private fillModelWithLivraisonEcheance(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de tarification
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTarification(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de carte visuel
         * sélectionnés par l'utilisateur
         */
        private fillModelWithCarteVisuel(data);
        /**
         * Méthode permettant d'extraire une liste de produit carte à partir
         * de la sélection de l'utilisateur.
         */
        private extractListeProduitCarteWithSameOptions(produitCarte);
        /**
         * Méthode permettant d'extraire un produit carte à partir de la
         * sélection de l'utilisateur.
         */
        private extractProduitCarteFromSelection();
        /**
         * Méthode permettant d'effectuer le traitement spécifique au composant Transport Citevia.
         */
        private doTransportCiteviaTraitement();
        /**
         * Setter sur le produit carte
         */
        setProduitCarteVisuel(produitCarteVisuel: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Setter sur la famille de carte
         */
        setFamilleCarte(familleCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Setter sur les options du produit carte
         */
        setOptionsProduitCarte(optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage): void;
        /**
         * Setter sur le type de produit carte
         */
        setTypeProduitCarte(typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Recapitulatif du produit carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwRecapitulatifProduitCarte(): ng.IDirective;
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
        constructor($scope: ITarificationControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
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
 * Contrôleur permettant d'encapsuler la gestion du composant "RecapitulatifServiceProduitCarte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IRecapitulatifServiceProduitCarteControleurScope extends ng.IScope {
        index: string;
        codeEtablissement: string;
        identifiantProduitCarte: string;
        codeVisuelProduitCarte: string;
        libelleVisuelProduitCarte: string;
        codeDuNiveauDeService: string;
        familleCarte: any;
        produitCarte: any;
        optionDeTransportCitevia: boolean;
        indicateurDeChargement: boolean;
        indicateurErreurWebService: boolean;
        messageErreurWebService: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class RecapitulatifServiceProduitCarteControleur {
        private $scope;
        private serviceAgent;
        private carteEtablissementService;
        private i18n;
        static $inject: string[];
        constructor($scope: IRecapitulatifServiceProduitCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, carteEtablissementService: Services.ProduitCarteParametreCarteEtablissementService, i18n: Services.II18nService);
        /**
         * Méthode d'initialisation des données du contrôleur
         */
        private initialiserData();
        /**
         * Récupération d'une image de carte bancaire
         * @param nomImage Le nom de l'image à afficher
         * @param extension L'extension de l'image à afficher
         * @return L'Url de l'image sur le serveur
         */
        getImageCarteBancaire(nomImage: string, extension?: string): string;
        /**
         * Méthode de récupération du produit carte à afficher
         * @return Une promesse avec un modèle de carte établissement
         */
        private recupererProduitCarte();
        /**
         * Méthode de récupération du produit carte à afficher en utilisant le code du visuel
         * @return Une promesse avec un modèle de carte établissement
         */
        private recupererProduitCarteAvecCodeVisuel();
        /**
         * Méthode de récupération du produit carte à afficher en utilisant le libellé du visuel
         * @return Une promesse avec un modèle de carte établissement
         */
        private recupererProduitCarteSansCodeVisuel();
        /**
         * Méthode de fin de chargement des données (succès ou erreur).
         */
        private terminerChargement();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Recapitulatif service produit carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwRecapitulatifServiceProduitCarte(): ng.IDirective;
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
        index: string;
        model: boolean;
        produitCarteSelectionne: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        familleDeCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        isCheckboxLock: boolean;
        isVisible: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class TransportCiteviaControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: ITransportCiteviaControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
        /**
         * Transmission d'un event sur les scopes
         */
        onChangeSelectionUtilisateur(data: boolean): void;
        /**
         * Méthode permettant de modifier l'état d'affichage de la checkbox (Affiché/Verrouillé/Invisible).
         */
        private modificationEtatCheckbox(data);
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
    interface ITutelleControleurScope extends ng.IScope {
        index: string;
        model: any;
        codeEtablissement: string;
        identifiantPersonne: string;
        isCapaciteAgeJuridique: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class TutelleControleur {
        private $scope;
        private serviceAgent;
        private tiersLiesService;
        private particulierInformationService;
        private i18n;
        listeDeTuteur: Array<any>;
        erreurTutelleService: boolean;
        static $inject: string[];
        constructor($scope: ITutelleControleurScope, serviceAgent: MyWay.Services.ServiceAgent, tiersLiesService: Services.TiersParticulierTiersLiesService, particulierInformationService: Services.TiersParticulierInformationService, i18n: Services.II18nService);
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service.
         * Recherche des tiers liés pour valoriser le champs "Représentant légal".
         */
        sendParticulierTiersLiesRequest(): void;
        /**
         * Méthode permettant de valorisé la vue à partir des données d'un web service.
         * Recherche d'un tier pour valoriser le champs "Représentant légal".
         */
        sendParticulierInformationRequest(idPersonne: string): void;
        /**
         * Méthode de rafraichissement de la sélection utilisateur.
         * Pb de rafraichissement du scope.
         */
        onChangeSelectionUtilisateur(data: any): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Tutelle".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwTutelle(): ng.IDirective;
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
        index: string;
        familleCarte: Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        produitCarte: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        valeurTypeDeFiltrage: IValeurTypeDeFiltrage;
    }
    /**
     * Déclaration du contrôleur
     */
    class TypeProduitCarteControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        constructor($scope: ITypeProduitCarteControleurScope, i18n: Services.II18nService, serviceAgent: MyWay.Services.ServiceAgent);
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
        constructor($scope: IModifierVisuelCarteScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, produitCarte: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille, listeProduitCarte: Array<Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>, i18n: Services.II18nService);
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
        constructor($scope: IVisuelCarteScope, modalService: MyWay.UI.ModalService, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nService);
        /**
         * Méthode permettant de modifier le visuel de la carte
         */
        modifierVisuelCarte(): void;
        /**
         * Méthode de construction de l'Url du visuel de la carte
         */
        buildUrlVisuel(data: Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): string;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Visuel carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsCarte.Directives {
    function mwVisuelCarte(): ng.IDirective;
}
