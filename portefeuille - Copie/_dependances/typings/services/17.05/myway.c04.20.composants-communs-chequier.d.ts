
declare module ComposantsCommunsChequier {
    var app: any;
}

/**
 * Modèle de représentation des informations du contrat CDD
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.ContratCdd.ContratCdd {
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

/**
 * Modèle de représentation de la recherche de structure
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.ContratCheque.Information {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IInformation {
        chequier: IChequier;
        acquitement?: IAcquitement;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IAutorisation {
        libelleAutorisation: string;
        codeDomaine: string;
        codeNiveau: string;
        NumeroRegle: string;
    }
    interface IMessageFonctionnel {
        libelleErreur: string;
        numeroMessageErreur: string;
        listeMessageAutorisation: IMessageAutorisation[];
    }
    interface IMessageAutorisation {
        libelleAutorisation: string;
        codeDomaineAutorisation: string;
        codeNiveauAutorisation: string;
        NumeroRegleGestionBlocage: string;
    }
    interface IEnteteRequestEchange {
        versionPosteTravail: string;
        referenceExterneAgent: string;
        codeOrigineOperation: string;
        codeEtablissement: string;
    }
    interface IChequier {
        identifiantProduitService: number;
        numeroOffre: number;
        typeUsageClientBancaire: string;
        typeModeCompoClientBancaire: string;
        codeActionFichier: string;
        codeGuichet: string;
        codeActiviteCompte: string;
        radicalCompte: number;
        cleCompte: string;
        codeFamilleChequier: string;
        typeFormatChequier: string;
        indicateurRenouvellementAuto: string;
        valeurSeuilRenouvellement: number;
        elementStructure: number;
        numeroAgenceDistribution: number;
        dotationReelle: number;
        codeRoutageTheorique: string;
        dateDebutSuspensionEnvoi: Date | string;
        dateFinSuspensionEnvoi: Date | string;
        codePostal: string;
        numeroPremiereFormule: string;
        nombreLettreCheque: number;
        nombreLotLettreCheque: number;
        listeAutorisation: Array<IAutorisation>;
        codeEtablissement?: string;
        enteteRequestEchange: IEnteteRequestEchange;
    }
    interface IAcquitement {
        nombrePoste: number;
        codeRoutageApplique: string;
        listeAutorisation: Array<IAutorisation>;
    }
}

declare module ComposantsCommunsChequier.Modeles.ContratCheque.FamilleChequier {
    interface IFamilleChequier {
        enteteRequestEchange: IEnteteRequestEchange;
        rice: IRice;
        listeFamille: IFamille[];
        codeAction: string;
        topPointEntree: string;
        numeroOffre: number;
        identifiantProduitService: number;
        nombrePosteEnvoye: number;
        enteteChequier: IEnteteChequier;
        listeChequier: IChequier[];
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IEnteteChequier {
        intituleCompte: string;
        indicateurSuiteListe: string;
        nombrePoste: string;
    }
    interface IChequier {
        codeFamille: string;
        type: number;
        indicateurRenouvellementAuto: string;
        valeurSeuilRenouvellement: number;
        dotationTheorique: number;
        numeroAgenceDistribution: number;
        referenceExterneEDS: number;
        codeRoutageTheorique: string;
        indicateurCommandeEnCours: string;
    }
    interface IEnteteRequestEchange {
        codeEtablissement: string;
        versionPosteTravail: string;
        codeOrigineOperation: string;
        dateOperation: string;
        referenceExterneEds: number;
        identifiantElementStructure: number;
        typeFonction: string;
        codeQualiteAgent: string;
        typeElementStructure3: string;
        referenceExterneEds3: number;
        identifiantElementStructure3: number;
        identifiantElementStructure6: number;
        typeEdsRattachement: string;
        typeElementStructure1: string;
        refExterneEdsRattachement: number;
        identifiantEdsSuperieur: number;
        modeFonctionnement: string;
        numeroStation: string;
        codeInstancePlanTravail: string;
        numeroQuittance: number;
    }
    interface IFamille {
        codeFamille: string;
    }
    interface IMessageFonctionnel {
        libelleMessage: string;
        codeMessage: string;
        codeRetourEchange: number;
    }
    interface IRice {
        codeGuichet: string;
        codeActivite: string;
        radical: number;
        cleCompte: string;
    }
}

/**
 * Modèle de représentation de la recherche de structure
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.ContratChequeService.ControleCheque {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    interface IControleCheque {
        entete: IEntete;
        listeDetailChequier: Array<IDetailChequier>;
    }
    interface IEntete {
        elementStructure: number;
        referenceExterne: number;
        codePostal: string;
        intituleCompte: string;
        nombrePoste: number;
        libelleAutorisation: string;
        typeUsageClientBancaire: string;
        typeModeCompoClientBancaire: string;
        codeTypeCapaciteJuridique: string;
    }
    interface IDetailChequier {
        codeFamille: string;
        typeChequier: number;
        indicRenouvellementAuto: string;
        valeurSeuilRenouvellement: number;
        numeroAgenceDistribution: number;
        referenceExterne: number;
        dotationTheorique: number;
        dotationReelle: number;
        codeRoutageTheorique: string;
        dateDebutSuspensionEnvoi: Date;
        dateFinSuspensionEnvoi: Date;
        numeroDerniereFormule: string;
    }
}

/**
 * Modèle de représentation des données permettant la création d'un produit/service chéquier.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.CreationChequier {
    /**
     * Nom du module.
     * Pour info, cette exportation de variable est uniquement présent pour donner de la
     * visibilité aux interfaces dans les projets qui importent le composant commun.
     */
    var _path: string;
    /**
     * Modèle de représentation des données délocalisées.
     */
    interface ICreationChequier {
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des
         * produits/services MYSYS.
         */
        identifiantProduitService: number;
        /**
         * Numéro d'offre souscrite
         */
        numeroOffre: number;
        /**
         * Précise à quelle utilisation économique est affecté le client bancaire
         * - "1" particulier,
         * - "2" professionnel
         */
        typeUsageClientBancaire: string;
        /**
         * Précise un mode de composition du client bancaire c.a.d. la façon dont
         * des personnes s'associent pour former un client bancaire.
         */
        typeModeCompoClientBancaire: string;
        /**
         * Identifie le traitement opéré sur un fichier d'enregistrements
         * - "A" Annulation,
         * - "M" Avenant (Modification),
         * - "E" commande exceptionnelle
         */
        codeActionFichier: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement
         * du Groupe CE)
         */
        codeGuichet: string;
        /**
         * Identifie l'activité du compte
         */
        codeActiviteCompte: string;
        /**
         * Radical du compte
         */
        radicalCompte: number;
        /**
         * Clé de contrôle du numéro de compte correspondant au modulo 97
         */
        cleCompte: string;
        /**
         * Détermine une famille de chéquiers (ou de carnets de remises)
         */
        codeFamilleChequier: string;
        /**
         * Format utilisé par une famille de chéquiers
         */
        typeFormatChequier: string;
        /**
         * Précise, pour le compte référencé, si le renouvellement automatique des
         * chéquiers est effectif
         * - "O" Oui,
         * - "N" Non
         */
        libelleFormatChequier: string;
        indicateurRenouvellementAuto: string;
        /**
         * Indique le nombre de formules consommées (payées ou rejetées) par un chéquier
         * qui doit déclencher le renouvellement automatique
         */
        valeurSeuilRenouvellement: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         */
        elementStructure: number;
        /**
         * Identifie l'agence de distribution qui DEVRAIT distribuer le chéquier ou le détenir.
         */
        numeroAgenceDistribution: number;
        /**
         * Indique le nombre de chéquiers de même format dont dispose le client.
         */
        dotationReelle: number;
        /**
         * Ce code détermine le mode de distribution théorique des chéquiers d'une famille
         * donnée pour un compte de la clientèle
         */
        codeRoutageTheorique: string;
        /**
         * Date de début de suspension de l'envoi simple dans le cadre d'un renouvellement de chéquier
         */
        dateDebutSuspensionEnvoi: string;
        /**
         * Date de fin de suspension de l'envoi simple dans le cadre d'un renouvellement de chéquier
         */
        dateFinSuspensionEnvoi: string;
        /**
         * Code postal
         */
        codePostal: string;
        /**
         * Indique le numéro du premier chèque d'un carnet ou série
         */
        numeroPremiereFormule: string;
        /**
         * Pour les lettres-chèques c'est la quantité de formules Liée à un type de LC.
         */
        nombreLettreCheque: number;
        /**
         * Nombre de lots lettre-chèque commandés. Multiplié par le nombre de lettre-chèque
         * donne la quantité totale.
         */
        nombreLotLettreCheque: number;
        /**
         * Ce numéro identifie une évolution du package applicatif de "l'application bancaire"
         * destinée aux terminaux.
         */
        versionPosteTravail: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau CE.
         */
        referenceExterneAgent: number;
        /**
         * Permet de qualifier le type d'agent d'accès à l'origine de l'opération.
         */
        codeOrigineOperation: string;
        /**
         * Identifiant d'un Etablissement du RCE.
         */
        codeEtablissement: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.X106FORM {
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
        donnees: Array<IModeleChequier>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface IModeleChequier {
        UCOPFC: string;
        UCTPFD: string;
        ULIPFD: string;
        UCOPST: string;
        ULCPFD: string;
        UQTPFM: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.X107RNLT {
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
        donnees: Array<IRenouvellement>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface IRenouvellement {
        UCOPFC: string;
        UCGPRO: string;
        ULIPRV: string;
        ULIPRW: string;
        UCGPST: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.X108SEUI {
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
        donnees: Array<ISeuilRenouvellement>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface ISeuilRenouvellement {
        UCOPFC: string;
        UQCPRT: number;
        UCGPST: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.X109DOTA {
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
        donnees: Array<IDotation>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface IDotation {
        UCOPFC: string;
        UCOBMC: string;
        UCOBUS: string;
        UQCPMI: string;
        UQCPMA: string;
        UQCPSU: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.X112FAMI {
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
        donnees: Array<ITypeFamille>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface ITypeFamille {
        UCOPFC: string;
        ULIPFC: string;
        UCGPST: string;
        UCGPFR: string;
        UCGPFT: string;
        COKHPE: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.X125CROU {
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
        donnees: Array<IOptionRoutage>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface IOptionRoutage {
        UCOPFC: string;
        UCOPRN: string;
        ULIPRN: string;
        UCGPRN: string;
        UCGPAF: string;
        UCGPAM: string;
        UCGPSS: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.X126ACAC {
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
        donnees: Array<IUsageChequier>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface IUsageChequier {
        UCOPFC: string;
        UCTPFD: string;
        UCNPCX: string;
        UCOBUS: string;
    }
}

/**
 * Modèle de représentation des données délocalisées
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.X127RSAC {
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
        donnees: Array<IActiviteRoutage>;
    }
    /**
     * Modèle de représentation des données d'un modèle de chéquier.
     */
    interface IActiviteRoutage {
        UCOPFC: string;
        UCOPRN: string;
        UCNPCX: string;
        UCOBUS: string;
    }
}

/**
 * Fichier de définition des modèles de la ressource "entitetitulaire/informationEntiteTitulaire"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.EntiteTitulaire.InformationEntiteTitulaire {
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
 * Modèle de représentation de la recherche de structure
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.Structure.Recherche {
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
 * Fichier de définition des modèles de la ressource "tiers/particulierInformation"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Modeles.Tiers.ParticulierInformation {
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
 * Service de gestion de la ressource "contratcheque/information"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Services {
    enum appelant {
        GgoBdd = 1,
        Ggho = 2,
        GgoBdr = 3,
    }
    /**
     * Déclaration du service
     */
    class ContratChequeInformationService {
        private serviceAgent;
        static CODE_ACTION_CREATION: string;
        static CODE_ACTION_ANULATION: string;
        static CODE_ACTION_MODIFICATION: string;
        static CODE_ACTION_EXCEPTIONNELLE: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendPutRequest(data: Modeles.ContratCheque.Information.IInformation): ng.IPromise<Modeles.ContratCheque.Information.IInformation>;
    }
}

/**
 * Service de gestion de la ressource "contratcheque/familleChequier/"
 */
declare module ComposantsCommunsChequier.Services {
    /**
     * Déclaration du service
     */
    class ContratChequeServiceClotureChequeService {
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
        sendPutRequest(data: Modeles.ContratCheque.FamilleChequier.IFamilleChequier): ng.IPromise<Modeles.ContratCheque.FamilleChequier.IFamilleChequier>;
    }
}

/**
 * Service de gestion de la ressource "contratchequeservice/controleCheque"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Services {
    /**
     * Interface avec les données d'appel
     */
    interface IContratChequeServiceControleChequeQuery {
        codeEtablissement: string;
        codeGuichet: string;
        codeActiviteCompte: string;
        radicalCompte: number;
        cleCompte: string;
        typeUsageClientBancaire?: string;
        codeAction: string;
    }
    /**
     * Déclaration du service
     */
    class ContratChequeServiceControleChequeService {
        private serviceAgent;
        static CODE_ACTION_CREATION: string;
        static CODE_ACTION_INFORMATION: string;
        static CODE_ACTION_MODIFICATION: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de construction de l'url du web service
         */
        url(): string;
        /**
         * Méthode d'appel du service
         */
        sendGetRequest(data: IContratChequeServiceControleChequeQuery): ng.IPromise<Modeles.ContratChequeService.ControleCheque.IControleCheque>;
    }
}

/**
 * Service de gestion de la ressource "entitetitulaire/informationEntiteTitulaire"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Services {
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
 * Service mettant à disposition des fonctions utilitaires pour la connection avec GGO.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Services {
    /**
     * Le helper
     */
    class HelperGgoChequierService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode permettant d'extaire le numéro du compte à partir du context de mise en gestion GGO.
         * @param data Les données contextuelles de GGO.
         * @return Le numéro du compte pour la mise en gestion
         */
        extactNumeroCompteFromMiseEnGestion(data: GestionGeneriqueOffres.Types.DonneesContextuelles, codeDuTypeDeProduitOuService: string, appelant: number): string;
        /**
         * Méthode permettant d'extraire le numéro du contrat chèque du contexte GGO
         * @param data Les données contextuelles de GGO.
         * @return Le numéro du contrat carte
         */
        extractNumeroContratChequeFromReferencesProduits(data: GestionGeneriqueOffres.Types.DonneesContextuelles): string;
        /**
         * Méthode permettant d'extraire le numéro de compte du contexte GGO
         * @return Le numéro du compte
         */
        extractNumeroCompteFromReferencesProduits(data: GestionGeneriqueOffres.Types.DonneesContextuelles, codeDuTypeDeProduitOuService: string): string;
        /**
         * Méthode permettant d'extraire la référence du compte du contexte GGO
         * TODO: Utiliser le typage de la référence produit dès que ce dernier sera disponible.
         * @return La référence du compte
         */
        extractReferenceCompteFromReferencesProduits(data: GestionGeneriqueOffres.Types.DonneesContextuelles, codeDuTypeDeProduitOuService: string): any;
        gererControleCheque(data: GestionGeneriqueOffres.Types.DonneesContextuelles, requis: boolean, details?: Object): void;
        buildInformationChequier(model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier, codePostale: string, numeroOffre: number): ComposantsCommunsChequier.Modeles.ContratCheque.Information.IInformation;
        restaurerDonneesChequierDepuisDossierDeVente(donneesChequier: ComposantsCommunsChequier.Modeles.ContratCheque.Information.IInformation): ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier;
    }
}

/**
 * Service de gestion de l'I18N.
 * @author S0076045
 */
declare module ComposantsCommunsChequier.Services {
    /**
     * Interface pour le service d'I18N.
     */
    interface II18nChequierService {
        getAllTranslations: () => ng.IPromise<Object>;
        getTranslation: (item: string) => string;
        getPromise: () => ng.IPromise<Object>;
    }
    /**
     * Classe de définition de l'I18N.
     */
    class I18nChequierService implements II18nChequierService {
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
 * Service permettant la gestion de la persistance entre les écrans du produit service chéquier.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Services {
    /**
     * Données pour la gestion de la persistance.
     */
    class PersistanceProduitChequierService {
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
 * Service de gestion de la ressource "structure/recherche"
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Services {
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
        static RECHERCHE_EDS_PAR_REFERENCE_INTERNE: number;
        static RECHERCHE_EDS_PAR_REFERENCE_EXTERNE: number;
        static RECHERCHE_EDS_PAR_LIBELLE: number;
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
declare module ComposantsCommunsChequier.Services {
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
 * Contrôleur permettant d'encapsuler la gestion du composant "Dotation du chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Controleurs {
    /**
     * Interface
     */
    interface IDataInfobulleDotation {
        type: string;
        picto: string;
        ouvertureBlock: boolean;
        message1: string;
        open: boolean;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface IChampDotationChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        typeDeDotation: ComposantsCommunsChequier.Modeles.X109DOTA.IDotation;
        codeEtablissement: string;
        model: number;
        dataInfobulle: IDataInfobulleDotation;
        dotationMinimum: number;
        dotationMaximum: number;
        indicateurDotationEnChargement: boolean;
        typeCompte: string;
        typeUsage: string;
        dotationClient: number;
        modeEdition: boolean;
        erreurComposant: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class ChampDotationChequierControleur {
        protected $scope: IChampDotationChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        i18n: Services.II18nChequierService;
        static TABLE_MODELE_CHEQUIER: string;
        static KEY_FAMILLE: string;
        static $inject: string[];
        constructor($scope: IChampDotationChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation du choix du modèle de chéquier
         */
        private sendGetRequest();
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête à la table délocalisée "X109DOTA"
         */
        protected onSuccessRequeteDotationChequier(response: Modeles.X109DOTA.IData): void;
        /**
         * Méthode de conversion du type de compte pour la table X109DOTA.
         * @param typeCompte Le type de compte en provenance des webs services
         * @return Le type de compte présent dans la table X109DOTA.
         */
        private convertTypeComptePourLaTableX109DOTA(typeCompte);
        /**
         * Méthode de conversion du type d'usage pour la table X109DOTA.
         * @param typeUsage Le type d'usage en provenance des webs services
         * @return Le type d'usage présent dans la table X109DOTA.
         */
        private convertTypeUsagePourLaTableX109DOTA(typeUsage);
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerDotationChequier();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Dotation du chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Directives {
    function mwChampDotationChequier(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Choix du modèle de chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IChoixModeleChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        listeDeModeleDeChequier: Array<Modeles.X106FORM.IModeleChequier>;
        codeEtablissement: string;
        model: Modeles.X106FORM.IModeleChequier;
        indicateurChoixModeleEnChargement: boolean;
        listeUsageDuChequier: Array<Modeles.X126ACAC.IUsageChequier>;
        typeUsage: string;
        codeActiviteCompte: string;
        typeChequierClient: number;
        modeEdition: boolean;
        erreurComposant: boolean;
        messageErreur: string;
        codeFamilleChequier: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class ChoixModeleChequierControleur {
        protected $scope: IChoixModeleChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        i18n: Services.II18nChequierService;
        static TABLE_MODELE_CHEQUIER: string;
        static TABLE_USAGE_CHEQUIER: string;
        static KEY_FAMILLE: string;
        static $inject: string[];
        constructor($scope: IChoixModeleChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant de faire appel aux tables délocalisées de valorisation du choix du modèle de chéquier
         */
        private sendGetRequests();
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation du choix du modèle de chéquier
         * @return une promesse de type modèle de chéquier
         */
        private sendGetRequestModeleChequier();
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation du choix du modèle de chéquier
         * @return une promesse de type modèle de chéquier
         */
        private sendGetRequestUsageChequier();
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête à la table délocalisée "X106FORM"
         */
        protected onSuccessRequeteModeleChequier(response: Modeles.X106FORM.IData): void;
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête à la table délocalisée "X126ACAC"
         */
        protected onSuccessRequeteUsageChequier(response: Modeles.X126ACAC.IData): void;
        /**
         * Méthode de construction de la liste des modèles de chéquier
         */
        protected buildListeDeModeleDeChequier(): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerChoixModeleChequier();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Choix du modèle de chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Directives {
    function mwChoixModeleChequier(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "En travaux chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IEnTravauxChequierControleurScope extends ng.IScope {
    }
    /**
     * Déclaration du contrôleur
     */
    class EnTravauxChequierControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: IEnTravauxChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nChequierService);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "En travaux chequier".
 * @author S0076105
 */
declare module ComposantsCommunsChequier.Directives {
    function mwEnTravauxChequier(): ng.IDirective;
}

declare module ComposantsCommunsChequier {
    function entete(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Erreur chargement".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IErreurChequierControleurScope extends ng.IScope {
        libelleErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class ErreurChequierControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: IErreurChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nChequierService);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Erreur chequier".
 * @author S0076105
 */
declare module ComposantsCommunsChequier.Directives {
    function mwErreurChequier(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Lieu de livraison chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Controleurs {
    /**
     * Enumération des type de livraison
     */
    enum TypeLivraison {
        ROUTAGE = 1,
        AGENCE = 2,
    }
    /**
     * Interface des lieux de livraison
     */
    interface ILieuLivraisonItem {
        optionRoutage: ComposantsCommunsChequier.Modeles.X125CROU.IOptionRoutage;
        elementStructure: IElementStructure;
        libelle: string;
        typeLivraison: TypeLivraison;
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
    interface ILieuLivraisonChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        listeModeDeRoutage: Array<ComposantsCommunsChequier.Modeles.X125CROU.IOptionRoutage>;
        codeEtablissement: string;
        model: ILieuLivraisonItem;
        indicateurLieuLivraisonEnChargement: boolean;
        structureLivraison: Modeles.Structure.Recherche.IDonneesCommunesEDS;
        listeLieuDeLivraison: Array<ILieuLivraisonItem>;
        agenceDomiciliation: number;
        activiteRoutage: Modeles.X127RSAC.IActiviteRoutage;
        elementDeStructure: IElementStructure;
        modeLivraisonClient: string;
        agenceLivraison: number;
        modeEdition: boolean;
        erreurComposant: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class LieuLivraisonChequierControleur {
        protected $scope: ILieuLivraisonChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected rechercheService: Services.StructureRechercheService;
        i18n: Services.II18nChequierService;
        static TABLE_MODE_ROUTAGE: string;
        static TABLE_ACTIVITE_ROUTAGE: string;
        static KEY_FAMILLE: string;
        static CODE_ROUTAGE_AGENCE: string;
        static $inject: string[];
        constructor($scope: ILieuLivraisonChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, rechercheService: Services.StructureRechercheService, i18n: Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de sélection de l'élément de structure.
         * @param model Element de structure sélectionnée
         */
        onSelectElementDeStructure(model: IElementStructure): void;
        /**
         * Méthode de construction du libellé de l'agence à partir d'un élément de structure
         * @param structure L'élément de structure correspondand à la pré sélection utilisateur
         * @return Le nom de l'élément de structure
         */
        buildLibelleAgenceFromStructure(structure: Modeles.Structure.Recherche.IDonneesCommunesEDS): string;
        /**
         * Méthode de gestion des différents services d'alimentations de la vue.
         */
        private sendGetRequests();
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation du mode de routage.
         * @return La promesse contenant les données de la table délocalisée
         */
        private sendGetRequestModeRoutage();
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation du mode de routage.
         * @return La promesse contenant les données de la table délocalisée
         */
        private sendGetRequestActiviteRoutage();
        /**
         * Méthode permettant de valorisé la vue à partir des données du web service de recherche des structures.
         * Attention, cette recherche est uniquement présente pour recherche la sélection de l'utilisateur.
         * @param identifiantEDS L'identifiant interne de la structure à rechercher
         * @return La promesse de requête du web service de recherche des structures.
         */
        private sendGetRequestStructureRecherche(identifiantEDS);
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête à la table délocalisée "Mode de routage".
         */
        protected onSuccessRequeteModeRoutage(response: Modeles.X125CROU.IData): void;
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête à la table délocalisée "Activité routage".
         */
        protected onSuccessRequeteActiviteRoutage(response: Modeles.X127RSAC.IData): void;
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête du web service "structure/recherche"
         */
        protected onSuccessRequeteStructureRecherche(response: Array<Modeles.Structure.Recherche.IDonneesCommunesEDS>): void;
        /**
         * Méthode de construction de la liste des lieux de livraison
         */
        protected buildListeLieuDeLivraison(): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerLieuLivraisonChequier();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Lieu de livraison chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Directives {
    function mwLieuLivraisonChequier(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Periode suspension chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Controleurs {
    /**
     * Interface de définition de la période de suspension
     */
    interface IDataPeriodeSuspension {
        dateDebut: string;
        dateFin: string;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface IPeriodeSuspensionChequierControleurScope extends ng.IScope {
        idBloc: string;
        dateDebutSuspensionClient: string;
        dateFinSuspensionClient: string;
        index: string;
        model: IDataPeriodeSuspension;
        codeEtablissement: string;
        dateDebutSuspension: Date;
        dateFinSuspension: Date;
        errDateDebut: boolean;
        errDateFin: boolean;
        errDateFinJour: boolean;
        modeEdition: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class PeriodeSuspensionChequierControleur {
        protected $scope: IPeriodeSuspensionChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        i18n: Services.II18nChequierService;
        static $inject: string[];
        constructor($scope: IPeriodeSuspensionChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de formatage de la date de début
         * @return La date de début mise en forme
         */
        getFormatedDateDebut(): string;
        /**
         * Méthode de formatage de la date de fin
         *  @return La date de fin mise en forme
         */
        getFormatedDateFin(): string;
        /**
         * Méthode permettant de mettre en forme une date pour l'affichage
         * @param maDate La date à mettre en forme (Format: YYYY-MM-DD)
         * @return La date formaté (Format: DD/MM/YYYY)
         */
        private getFormatedDate(maDate);
        /**
         * Méthode de callback suite à la modification de la date de début de la période de suspension.
         */
        private onChangeDateDebutDePeriode(dateDebut);
        /**
         * Méthode de callback suite à la modification de la date de fin de la période de suspension.
         */
        private onChangeDateFinDePeriode(dateFin);
        /**
         * Méthode d'émission d'un event
         */
        private sendChangeEvent();
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerPeriodeSuspensionChequier();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Periode suspension chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Directives {
    function mwPeriodeSuspensionChequier(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Renouvellement automatique du chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IRenouvellementAutomatiqueChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        familleDeChequier: Modeles.X112FAMI.ITypeFamille;
        codeEtablissement: string;
        model: Modeles.X107RNLT.IRenouvellement;
        indicateurRenouvellementAutomatiqueVisible: boolean;
        listeRenouvellementAutomatique: Array<Modeles.X107RNLT.IRenouvellement>;
        indicateurRenouvellementAutomatiqueEnChargement: boolean;
        renouvellementClient: string;
        modeEdition: boolean;
        erreurComposant: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class RenouvellementAutomatiqueChequierControleur {
        protected $scope: IRenouvellementAutomatiqueChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        i18n: Services.II18nChequierService;
        static TABLE_FAMILLE_CHEQUIER: string;
        static TABLE_RENOUVELLEMENT_AUTO: string;
        static KEY_FAMILLE: string;
        static $inject: string[];
        constructor($scope: IRenouvellementAutomatiqueChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant de faire appel aux tables délocalisées de valorisation du choix du modèle de chéquier.
         */
        private sendGetRequests();
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation du renouvellement automatique.
         * @return Un promesse de type famille de chéquier.
         */
        private sendGetRequestFamilleChequier();
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation du renouvellement automatique.
         * @return Un promesse de type renouvellement auto.
         */
        private sendGetRequestRenouvellementAuto();
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête à la table délocalisée "X112FAMI"
         */
        protected onSuccessRequeteFamilleChequier(response: Modeles.X112FAMI.IData): void;
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête à la table délocalisée "X107RNLT"
         */
        protected onSuccessRequeteRenouvellementAuto(response: Modeles.X107RNLT.IData): void;
        /**
         * Méthode de sélection de la valeur par défaut pour le renouvellement automatique.
         */
        protected selectionnerValeurParDefaut(): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerRenouvellementAutomatiqueChequier();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Renouvellement automatique du chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Directives {
    function mwRenouvellementAutomatiqueChequier(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Seuil de renouvellement du chequier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface ISeuilRenouvellementChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        listeDeSeuilDeRenouvellement: Array<ComposantsCommunsChequier.Modeles.X108SEUI.ISeuilRenouvellement>;
        codeEtablissement: string;
        erreurComposant: boolean;
        model: ComposantsCommunsChequier.Modeles.X108SEUI.ISeuilRenouvellement;
        indicateurSeuilRenouvellementEnChargement: boolean;
        seuilClient: number;
        modeEdition: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class SeuilRenouvellementChequierControleur {
        protected $scope: ISeuilRenouvellementChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        i18n: Services.II18nChequierService;
        static TABLE_SEUIL_RENOUVELLEMENT: string;
        static $inject: string[];
        constructor($scope: ISeuilRenouvellementChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant de faire appel à la table délocalisée de valorisation du choix du modèle de chéquier
         */
        private sendGetRequest();
        /**
         * Méthode de traitement des données suite au succès de la requête.
         * @param La réponse de la requête à la table délocalisée "X108SEUI"
         */
        protected onSuccessRequeteSeuilRenouvellement(response: Modeles.X108SEUI.IData): void;
        /**
         * Méthode de validation de la sélection utilisateur
         */
        private validerSeuilRenouvellementChequier();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Seuil de renouvellement du chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ComposantsCommunsChequier.Directives {
    function mwSeuilRenouvellementChequier(): ng.IDirective;
}
