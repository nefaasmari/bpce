
declare module ComposantsCommunsConsultationCCE {
    var app: any;
}

declare module ComposantsCommunsConsultationCCE {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module ComposantsCommunsConsultationCCE {
}

declare module ComposantsCommunsConsultationCCE {
}

declare module ComposantsCommunsConsultationCCE {
}

/***
 * Ensemble d'énumérations concernant le service REST "decouvertcce/v1/commissionNonUtilisation"
 * @module ComposantsCommunsConsultationCCE.Enumerations.CommissionNonUtilisation
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Enumerations.CommissionNonUtilisation {
    /**
     * Type de restitution
     * 'E' : période échue
     * 'C' : période en cours
     */
    enum TypeRestitutionEnum {
        ECHUE,
        EN_COURS,
    }
}

/***
 * Ensemble d'énumérations concernant le service REST "contratcce/v1/fusionAgioCapital"
 * @module ComposantsCommunsConsultationCCE.Enumerations.FusionAgioCapital
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Enumerations.FusionAgioCapital {
    /**
     * Code Action
     * ' ' : solde fusionné en capital et liste des comptes qui fusionnent en capital
     * '1' : pour n'obtenir QUE le solde fusionné en capital
     * '2' : pour n'obtenir QUE la liste des comptes qui fusionnent en capital
     * '3' : solde fusionné en capital et liste des comptes qui fusionnent en AGIOS + alimentation de l'information fusion en capital
     */
    enum CodeActionEnum {
        ZERO,
        UN,
        DEUX,
        TROIS,
    }
}

/***
 * Ensemble d'énumérations concernant le service REST "contratcce/v1/informationGlobale"
 * @module ComposantsCommunsConsultationCCE.Enumerations.InformationsGlobales
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Enumerations.InformationsGlobales {
    /**
     * Indicateur d'information découvert
     * "O" Appel de la QR PC68 Synthèse complète CCE (avec liste des découverts, liste des conditions d'arrêté...)
     * "N" Appel de la QR PC85 Synthèse CCE
     */
    enum IndicateurInfoDecouvertEnum {
        OUI,
        NON,
    }
    /**
     * Code Action
     * 'AA' : 1 segment réponse de type QPCSP5M (segment SP5M) infos CCE simples
     * 'CP' ou 'CC' : 1 segment réponse de type RPCSP5N (segment SP5N) infos CCE complètes
     * 'CP' ou 'CR' : 1 segment réponse de type RPCSP4G (segment SP4G) relevé de compte
     * 'CP' ou 'CA' : 1 segment réponse de type RPCSP5P (segment SP5P) conditions d'arrêté
     * 'CP' ou 'CD' : 1 segment réponse de type RPCSP5Q (segment SP5Q) dates de valeur
     * 'CP' ou 'CF' : 1 segment réponse de type RPCSP8B (segment SP8B) fusions en agios
     * 'CP' ou 'CG' : 1 segment réponse de type RPCSP8H (segment SP8H) fusion en capital
     * 'CP' ou 'CT' : 1 segment réponse de type RDCSD8L (segment SD8L) entité titulaire ET 1 segment réponse de type RDCSD3O (segment SD3O) entité titulaire
     * 'CP' ou 'CI' : 1 segment réponse de type RPCSD98 (segment SD98) liens inter personnes
     * 'CP' ou 'CL' : 1 segment réponse de type RPCSD3T (segment SD3T) personne physique d'une ET 1 segment réponse de type RPCSD3J (segment SD3J) domiciliation ET 1 segment réponse de type RPCSD3U (segment SD3U) d'une personne morale
     */
    enum CodeActionEnum {
        AA,
        CP,
        CC,
        CR,
        CA,
        CD,
        CF,
        CG,
        CT,
        CI,
        CL,
    }
}

/***
 * Ensemble d'énumérations concernant le service REST "contratcceservice/v1/remunerationCce"
 * @module ComposantsCommunsConsultationCCE.Enumerations.RemunerationCce
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Enumerations.RemunerationCce {
    /**
     * Indicateur du type de recherche du service REST "contratcceservice/v1/remunerationCce" GET
     * "S" Appel de la QR PCLA Synthèse condition rémunération
     * "L" Appel de la QR PCLC Liste des barèmes de rémunération
     */
    enum IndicateurInfoRemunerationEnum {
        SYNTHESECONDITION,
        LISTEBAREME,
    }
    /**
     * Indicateur conditions personnalisées
     * Cet indicateur précise si le client se voit appliqué des conditions de rémunération personnalisées.
     * 'O' Conditions personnalisée
     * 'N' Conditions standards
     */
    enum IndicateurConditionsPersoEnum {
        PERSONNALISEE,
        STANDARD,
    }
    /**
     * Indicateur conditions supprimables
     * 'N' Cette condition ne peut plus être supprimée
     * 'O' Cette condition peut être supprimée
     */
    enum IndicateurConditionsSuppEnum {
        SUPPRIMABLE,
        INSUPPRIMABLE,
    }
    /**
     * Cet indicateur précise si la conditions peuvent être modifiées ou non.
     * '0' Condition non modifiable
     * '1' Condition modifiable - uniquement la date de fin
     * '2' Condition modifiable - tout est modifiable suivant l'habilitation du chargé de clientèle.
     */
    enum IndicateurConditionsModifiableEnum {
        NONMODIFIABLE,
        DATEMODIFIABLE,
        TOUTMODIFIABLE,
    }
    /**
     * Cet indicateur permet de savoir si le barème a été choisi par l'établissement pour être affiché
     * par défaut au poste de travail lors de la création d'une condition de rémunération pour un compte
     * 'O' OUI
     * 'N' NON
     */
    enum IndicateurBaremeDefautEnum {
        OUI,
        NON,
    }
    /**
     * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
     * 'T' Titulaire
     * 'R' Remplaçant
     * 'S' Suppléant
     * 'A' Affectation temporaire
     */
    enum CodeQualiteAgentEnum {
        TITULAIRE,
        REMPLACANT,
        SUPPLEANT,
        AFFECTATIONTEMPORAIRE,
    }
    /**
     * Détermine les traitements à réaliser dans le cadre d'une opération fonctionnelle.
     * 'C' Contrôles
     * 'M' Contrôles + Mise à jour
     */
    enum CodeTypeTraitementEnum {
        CONTROLES,
        MISEAJOUR,
    }
}

/**
 * Filtres utiles
 * @module ComposantsCommunsConsultationCCE.Filtres
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ComposantsCommunsConsultationCCE.Filtres {
    /**
     * Filtre pour ajouter un pourcentage
     * @return {Function} La fonction du filtre
     */
    function concatPourcentageFiltre(): Function;
}

declare module ComposantsCommunsConsultationCCE {
}

/**
 * Filtres utiles
 * @module ComposantsCommunsConsultationCCE.Filtres
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ComposantsCommunsConsultationCCE.Filtres {
    /**
     * Filtre pour ajouter le signe à un nombre
     * @return {Function} La fonction du filtre
     */
    function formatSigneFiltre($filter: ng.IFilterService): Function;
    /**
     * Filtre pour ajouter le signe à un nombre suivant le parametre code sens operation
     * @return {Function} La fonction du filtre
     */
    function formatSigneCodeSensOperationFiltre($filter: ng.IFilterService): Function;
}

declare module ComposantsCommunsConsultationCCE.Filtres {
    function AjoutSigleMontantFilter(): (input: string, symboleSigle: string) => string;
    function AjoutCodeDeviseMontantFilter(): (input: string, codeDevise: string) => string;
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratserveurbancaire/v1/abonnementEdi"
 * @module ComposantsCommunsConsultationCCE.Modeles.AbonnementEdi
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.AbonnementEdi {
    interface IAbonnementEdi {
        listeCompteRattache: Array<ICompteRattache>;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface ICompteRattache {
        numeroAbonne: string;
        codeProtocole: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeOperationServeur: string;
        codeRetourEchange: number;
        libelleNomCENET: string;
        libelleSousFoncAEU: string;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    /**
     * Interface de la requête au service REST "contratserveurbancaire/v1/abonnementEdi" de type GET
     */
    interface IAbonnementEdiRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcceparametre/v1/baremeConditionEtablissement"
 * @module ComposantsCommunsConsultationCCE.Modeles.BaremeConditionEtablissement
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.BaremeConditionEtablissement {
    interface IDateValeurDefaut {
        codeProvenance: string;
        typeCalendrier: string;
        typeOperationInterbancaire: string;
        typeProvenance: string;
        typeOperation: string;
        nombreJours: number;
    }
    interface IBaremesDebiteur {
        identifiantBaremeDebiteur: number;
        dateDebutValidite: Date;
        dateFinCommercialisation: Date;
        libelleCourtBareme: string;
        libelleBareme: string;
        codeNiveauResponsabilite: string;
        codeTaux: string;
        libelleTauxDebiteur: string;
        periodiciteMajTaux: string;
        valeurTauxReference: number;
        indicateurBaremeDefaut: string;
        nombrePaliersActifs: number;
        nombreMaxPaliers: number;
        margeMiniBareme: number;
        margeMaxBareme: number;
        codeDevise: string;
        codeTauxSubstitution1: string;
        libelleTauxSubstitution1: string;
        valeurTauxSubstitution1: number;
        periodiciteMajTauxSubst1: string;
        codeTauxSubstitution2: string;
        libelleTauxSubstitution2: string;
        periodiciteMajTauxSubst2: string;
        valeurTauxSubstitution2: number;
        codeTauxUsure: string;
        libelleTauxUsure: string;
        tauxUsure: number;
        codeGestionTechnique: string;
    }
    interface ICommissions {
        numeroBaremeCommission: number;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionImmobilisation: number;
        commissionMouvement: number;
        fraisOperation: number;
        codeNiveauResponsabilite: string;
        dateCreationBareme: Date;
        dateModificationBareme: Date;
        codeMonnaie: string;
        codeGestionTechnique: string;
        montantFraisTenueCompte: number;
        libelleBaremeCommissions: string;
        indicateurBaremeCommission: string;
        codeMarche: string;
    }
    interface IBaremeConditionEtablissement {
        baremeDebiteur: Array<IBaremesDebiteur>;
        commissions: Array<ICommissions>;
        dateValeurDefaut: Array<IDateValeurDefaut>;
    }
    /**
     * Interface de la requête au service REST "contratcceparametre/v1/baremeConditionEtablissement" de type GET
     */
    interface IBaremeConditionEtablissementRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        codeFonction: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcarte-v1/recherche"
 * @module ComposantsCommunsConsultationCCE.Modeles.CartesAssociees
 * @author S0051604 (Mathieu Alcime)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.CartesAssociees {
    interface ICartesAssociees {
        contratsCartes: Array<IDateCartesAssociees>;
    }
    interface IPorteur {
        identifiantDeLaPersonne: number;
        designationCourte: string;
        nomDeFamilleDeLaPersonnePhysique: string;
        premierPrenomDeLEtatCivilDeLaPersonne: string;
        codeCiviliteDeLaPersonnePhysique: number;
    }
    interface IHistoriqueDesCartes {
        codeDuProduitCarte: string;
        libelleLongDuVisuelDeLaCarte: string;
        nomDuPersonnalisateurDeCarte: string;
        identifiantDuSupportDeCarte: string;
        situation: ISituation;
        utilisateur: IPorteur;
        dateDeDebutDeValiditeDeLaCarte: string;
        dateDeDebutDeValiditeDeLaCarteAffichage: string;
        dateDeFinDeValiditeDeLaCarte: string;
        codeDeSituationDuContratCarte: string;
    }
    interface ISituation {
        libelleDeLEtatDUneCarteDuStock: string;
    }
    interface IDateCartesAssociees {
        codeDeSituationDuContratCarte: string;
        libelleLongDuVisuelDeLaCarte: string;
        numeroDuContratCarte: number;
        numeroDeLOffreSouscrite: number;
        dateDOuvertureDuContratCarte: string;
        dateDeFinDuContratCarte: string;
        nomDuPersonnalisateurDeCarte: string;
        historiqueDesCartes: Array<IHistoriqueDesCartes>;
    }
    /**
     * Interface de la requête au service REST "contratcarte-v1/recherche" de type GET
     */
    interface ICartesAssocieesRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        numeroDuCompte: string;
        typeProduitService: string;
        codeFonction: number;
        codeTypeRecherche: number;
        typeInterrogationPourLesCartes: string;
        identifiantDeLaPersonne: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "decouvertcce/v1/commissionNonUtilisation"
 * @module ComposantsCommunsConsultationCCE.Modeles.CommissionNonUtilisation
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.CommissionNonUtilisation {
    interface IJustificatif {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateArrete: Date;
        codeAppartenanceFusion: string;
        soldeDeviseTenueCompte: number;
        codeDevise: string;
        montantAutorisationDecouvert: number;
        montantNonUtilisationDecouvert: number;
        tauxCommissionNonUtilisation: number;
        nombreJoursNonUtilisation: number;
        montantResultIntermediaireCnu: number;
        codeGuichetCptePrincipal: string;
        numeroCptePrincipal: string;
        dateDebut: Date;
        dateFin: Date;
        montantComNonUtilisationDevise: number;
        montantCommNonUtilisationEuro: number;
    }
    interface ICommissionNonUtilisation {
        justificatif: Array<IJustificatif>;
    }
    /**
     * Interface de la requête au service REST "decouvertcce/v1/commissionNonUtilisation" de type GET
     */
    interface ICommissionNonUtilisationRestServiceGetQuery {
        typePeriodeCalcul: Enumerations.CommissionNonUtilisation.TypeRestitutionEnum;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateArrete: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant l'application
 * @module ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns {
    interface IParametresAppel {
        refExterneAgent: string;
        codeBanque: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        intituleClientBancaire: string;
        numeroOffre: number;
        libelleOffre: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcce/v1/dateValeur"
 * @module ComposantsCommunsConsultationCCE.Modeles.DateValeur
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.DateValeur {
    interface IDateValeur {
        typeOperation: string;
        codeProvenance: string;
        nombreJours: number;
        typeCalendrier: string;
        typeOperationInterbancaire: string;
        typeProvenance: string;
    }
    interface IIdentificationContrat {
        numeroCompte: string;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        codeGuichet: string;
    }
    interface IDateValeurCce {
        identificationContrat: IIdentificationContrat;
        listeDateValeur: Array<IDateValeur>;
    }
    /**
     * Interface de la requête au service REST "contratcce/v1/dateValeur" de type GET
     */
    interface IDateValeurRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

/**
 * Modele concernant le service REST "contratcce/v1/decompteAgio"
 * @module ComposantsCommunsConsultationCCE.Modeles.DecompteAgios
 * @author S0077482(Thomas Prat)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.DecompteAgios {
    interface IDecompteAgiosGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateArrete?: string;
        typeDecompteAgio?: string;
        dateDebutPeriode?: string;
        indicateurFusionAgio?: string;
        dateFinPeriode?: string;
        typeEchelle?: string;
        typeInterrogation?: string;
        codeAction?: string;
        typeConsultation?: number;
        timeStampOperation?: string;
    }
    interface IEchelleInteret {
        montantSoldeValeur: number;
        dateArrete: Date;
        designationBancaire: string;
        periodiciteArreteCompte: string;
        dateValeurOperation: Date;
        dateSuivante: string;
        nombreOperation: number;
        codeSuite: string;
        listeConditionArrete: Array<IConditionArrete>;
        codeDeviseISO: string;
        listePeriodeArreteSurAnnee: Array<IPeriodeArreteSurAnnee>;
        listePeriodeArreteSurTrimestre: Array<IPeriodeArreteSurTrimestre>;
        listeDateValeur: Array<IDateValeur>;
    }
    interface IConditionArrete {
        dateValeurOperation: Date;
        libelleTauxReference: string;
        valeurTauxReference: number;
        valeurVariationBaremeDebiteur: number;
        typeLigneDetail: string;
        montantPalier: number;
        borneSuperieurPalier: number;
        numeroPalier: number;
    }
    interface IOperation {
        dateValeurOperation: Date;
        dateOperation: Date;
        premierLibelleReleve: string;
        deuxiemeLibelleReleve: string;
        montantBrutDeviseCompte: number;
        codeAnnulation: string;
        codeSensInputation: string;
        montantBrutPriseOrdre: number;
        codeDevisePriseOrdre: string;
        codeOperationClient: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroCheque: string;
        dateCreationOperation: string;
        numeroPriseCompteCalculAgio: number;
        codeDeviseTenueCompte: string;
        codeDevisePriseOrdre2: string;
    }
    interface IDateValeur {
        dateValeurOperation: Date;
        montantSoldeValeur: number;
        nombreJour: number;
        codeDeviseISO: string;
        montantCumuleOperationCredit: number;
        montantCumuleOperationDebit: number;
        montantCumuleDepassementDecouv: number;
        listeOperation: Array<IOperation>;
    }
    interface ISoldeFusionAgio {
        montantSolde: number;
        codeType: string;
    }
    interface ICompteFusionAgio {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        radical: string;
        cleNumeroCompte: string;
        codeTypeFusion: string;
        indicateurFusionCapital: string;
    }
    interface IAgio {
        typeLigneDetail: string;
        libelleDetailDecompte: string;
        tauxCommission: number;
        montantCommissionAgio: number;
        montantBaseCalculCommission: number;
        montantRemiseCommissionAgio: number;
        tauxRemiseCommission: number;
        dateDebutPeriode: Date;
        dateFinPeriode: Date;
        codeDeviseISO: string;
        tauxCommission2: number;
        montantNetCommissionInteret: number;
        tauxTVA: number;
        montantTVA: number;
    }
    interface IAssietteCalcul {
        codeCalculEstimation: string;
        dateEstimationPosition: Date;
        indicateurFusionAgio: string;
        modeArreteCompte: string;
        tauxInteretGlobal: number;
        montantNetOperation: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateArreteInformation: Date;
        codeEtablissementPrelevement: string;
        codeGuichetPrelevement: string;
        numeroComptePrelevement: string;
        dateEmissionDernierPrelevement: Date;
        codeEcretage: string;
        codeDeviseISO: string;
        messageErreurFonctionnel: string;
        soldeMoyenDebiteur: number;
        libelleArreteCompte: string;
        tauxTVA: number;
        montantCumulNetInteret: number;
        montantCumulTVAInteret: number;
        montantNetCommissionFrais: number;
        montantNetFraisTenueCompte: number;
        montantCumulTVACommissionFrais: number;
        montantTVAFraisTenueCompte: number;
        montantNetInteretCrediteur: number;
        montantNetInteretDebiteur: number;
        codeCotationProfessionnel: string;
        designationBancaireCourte: string;
        listePeriodeArrete: Array<IPeriodeArrete>;
        listeInformationArrete: Array<IInformationArrete>;
    }
    interface IDecompteAgio {
        echelleInteret: IEchelleInteret;
        soldeFusionAgio: ISoldeFusionAgio;
        listeCompteFusionAgio: Array<ICompteFusionAgio>;
        listeAgio: Array<IAgio>;
        assietteCalcul: IAssietteCalcul;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IPeriodeArrete {
        dateDebut: Date;
        dateFin: Date;
        periodicite: string;
        libellePeriode?: string;
    }
    interface IInformationArrete {
        dateDebut: Date;
        dateFin: Date;
        indicateurExistence: string;
    }
    interface IPeriodeArreteSurAnnee {
        dateDebut: Date;
        dateFin: Date;
        indicateurFusionAgio: string;
        periodicite: string;
    }
    interface IPeriodeArreteSurTrimestre {
        dateDebut: Date;
        dateFin: Date;
        indicateurFusionAgio: string;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
}

/**
 * Modele concernant les donnees du contexte
 * @module ComposantsCommunsConsultationCCE.Modeles
 * @author S0077482(Thomas Prat)
 */
declare module ComposantsCommunsConsultationCCE.Modeles {
    interface IContexteDecompteAgios {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcce/v1/fusionAgioCapital"
 * @module ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital {
    interface ISolde {
        codeDeviseExpressionMontant: string;
        montantSoldeFusion: number;
        codeTypeFusion: string;
        cumulReserveEncaissement: number;
        codeDeviseTenueCompte: string;
        soldeCompteDevise: number;
        cumulReserveEncaissementDevise: number;
    }
    interface IProfilFusionne {
        codeDeviseExpressionMontant: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        radical: string;
        cleNumeroCompte: string;
        soldeCompteMinute: number;
        codeTypeFusion: string;
        indicateurFusionEnCapital: boolean;
        cumulReserveEncaissement: number;
        codeDeviseTenueCompte: string;
        soldeCompteDevise: number;
        cumulReserveEncaissementDevise: number;
        indicateurFusionEnAgio: boolean;
    }
    interface IFusionAgioCapital {
        solde: ISolde;
        listeProfilFusionne: Array<IProfilFusionne>;
    }
    /**
     * Interface de la requête au service REST "contratcce/v1/fusionAgioCapital" de type GET
     */
    interface IFusionAgioCapitalRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        codeNatureCompte: string;
        codeClientPro: number;
        cleNumeroCompte: string;
        codeAction: Enumerations.FusionAgioCapital.CodeActionEnum;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcce/v1/informationGlobale"
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales {
    interface IInformationGlobale {
        fonctionnement: IFonctionnement;
        conditionDebitriceNegociee: IConditionDebitriceNegociee[];
        etatCompte: IEtatCompte;
        donneesCompte: IDonneesCompte;
        parametresReleve: IParametresReleve;
        indicateurFusion: IIndicateurFusion;
        representantLegal: IRepresentantLegal;
        listeInfomationDateValeur: IInformationDateValeur;
        listeConditionDebitriceDefaut: IConditionDebitriceDefaut[];
        listeConditionDebitriceGenerale: IConditionDebitriceGenerale[];
        listeCommissionFraisMarche: ICommissionFraisMarche[];
        listeCommissionFraisNegociee: ICommissionFraisNegociee[];
        conditionArreteSynthese: IConditionArreteSynthese;
        commissionFraisDefaut: ICommissionFraisDefaut;
    }
    interface IFonctionnement {
        codeAdresse?: string;
        codeAutorisationRemuneration: string;
        codeEtabCompteSuppFactur: string;
        codeDateValeurCheque: string;
        codeDepassementAutorisation: string;
        codeEchelleFusionEnvoi: string;
        codeEchelleCompteEnvoi: string;
        codeElementSurveillance: string;
        codeEtabCompteAncien: string;
        codeEtabCompteFusion: string;
        codeFonctionnementAutorise: string;
        codeGuichetCompteFusion: string;
        codeGuichetCompteSuppFactur: string;
        codeGuichetCompteAncien: string;
        codeGuichetComptePrlvmtAgios: string;
        codeDevise: string;
        codeNatureCompte: string;
        codePeriodeArreteCompte: string;
        codePeriodiciteReleve?: string;
        dateChangementPeriod?: Date;
        dateClotureCompteCourant?: Date;
        datePassageEuro?: Date;
        dateOuvertureCompteCourant?: Date;
        futurePeriodiciteArrete: string;
        indicAutorisationCmdeChequier: string;
        indicAutorisationCreationDec: string;
        indicAutorisationCmdeCarte: string;
        indicFusionAgios: string;
        indicFusionCapital: string;
        libelleCompte: string;
        libelleLongNature?: string;
        modeArreteCompte: string;
        montantSeuil: number;
        motifClotureCompte?: string;
        codeEtabComptePrlvmtAgios: string;
        numeroCompteAncien: string;
        numeroCompteSuppFactur: string;
        numeroContrat: number;
        numeroComptePrlvmtAgios: string;
        numeroCompteFusion: string;
        soldeDeviseTenueCompte?: number;
        soldeFrancs?: number;
        typeContratEntreprise?: string;
        typeNatureCompte: string;
    }
    interface IConditionDebitriceNegociee {
        "dateDebutValidite": string;
        "dateHeureCreation": string;
        "identifiantBareme": number;
        "libelleCourtBareme": string;
        "libelleBareme": string;
        "margeMaximumBareme": number;
        "margeMinimumBareme": number;
        "montantDecouvert": number;
        "nombrePaliersActifs": number;
        "nombreMaximumPaliers": number;
        "numeroChrono": number;
        "listePalier": Modeles.InformationsGlobales.IPalier[];
        "indicateurBaremeDefaut"?: string;
        "codeDevise"?: string;
        "codeEtablissement"?: string;
        "codeGuichet"?: string;
        "numeroCompte"?: string;
    }
    interface IEtatCompte {
        codeDeviseExpressionMontant: string;
        codeEtatProduitService: string;
        dateOuverture: Date;
        dateCloture: Date;
        soldeCompte: number;
        codeDeviseTenueCompte: string;
        soldeDeviseTenueCompte: number;
    }
    interface IDonneesCompte {
        codeGuichet: string;
        numeroCompte: string;
        codeDevise: string;
        codeEtatProduitService: string;
        dateOuverture: Date;
        dateCloture: Date;
        motifClotureCompte: string;
        soldeDeviseTenueCompte: number;
        libelleCompte: string;
        numeroContrat: number;
        typeNatureCompte: string;
        libelleNatureCompte: string;
        libelleLongNatureCompte: string;
        codeFonctionnement: string;
        libelleFonctionnement: string;
        montantSeuilRemarquable: number;
        codeElementSurveillance: string;
        libelleSurveillance: string;
        indicAutoCreatDecouvert: string;
        codeDepassementAutorisation: string;
        indicAutoCommandeChequier: string;
        indicAutoRemunerationCpte: string;
        indicAutoCommandeCarte: string;
        codeEtablissementGab: string;
        codeGuichetCompteRecepteur: string;
        numeroComptePrelevement: string;
        codeBanqueTarification: string;
        codeGuichetTarification: string;
        numeroCompteTarification: string;
        codeNatureCompte: string;
        codeEtablissement: string;
    }
    interface IParametresReleve {
        codePeriocictié: string;
        codeTypeAdresse: string;
        designationCourte: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        libellePeriodicite: string;
    }
    interface IIndicateurFusion {
        montantSoldeFusionne: number;
        codeTypeFusion: string;
    }
    interface IRepresentantLegal {
        codeEtablissement: string;
        numeroEntiteTitulaire: number;
        identifiantPersonne: number;
        indicateurResponsableCompte: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: Date;
        nomLocalite: string;
        libelleNationalite: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        numeroTelephoneAdresse: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLienInterPersonnes: string;
        referencePieceJustificative: string;
        codeInseeLocalite: string;
        codeResident: string;
        numeroTelephoneTravail: string;
        codeAppartenanceReseau: string;
        codePaysInsee: string;
        codePaysIso: string;
        codePostal: string;
        codeSexe: string;
        codeAgentEconomique: string;
        nomEmployeur: string;
        dateEmbauche: Date;
        codePaysNaissance: string;
        codeCategorieSocioPro: string;
        numeroSiren: string;
        numeroSiret: string;
        codeFamilleCategorieJuridique: string;
        codeFamilleApeInsee: string;
        deuxDerniersCarInsee: string;
        rangPersonneET: string;
        codePaysOmcr: string;
        codePaysTitre: string;
    }
    interface IInformationDateValeur {
        codeDateValeurCheque: string;
        codeGestion: string;
    }
    interface IConditionDebitriceDefaut {
        codeDevise: string;
        identifiantBareme: number;
        indicateurBaremeDefaut: string;
        libelleCourtBareme: string;
        libelleBareme: string;
        margeMaximumBareme: number;
        margeMinimumBareme: number;
        listePalier: IPalier[];
        nombrePaliersActifs: number;
        dateDebutValidite: string;
    }
    interface ICommissionFraisMarche {
        "codeDevise": string;
        "codeGestionTechnique": string;
        "codeNiveauResponsabilite": string;
        "commissionDecouvert": number;
        "commissionDepassement1": number;
        "commissionDepassement2": number;
        "commissionDepassement3": number;
        "commissionImmobilisation": number;
        "dateCreationBareme": string;
        "dateModifBareme": string;
        "fraisOperations": number;
        "indicateurBareme": string;
        "libelleBareme": string;
        "montantFraisTenueCompte": number;
        "numeroBaremeCommission": number;
        "codeMarche": string;
        "commissionMouvement": number;
    }
    interface ICommissionFraisNegociee {
        codeMarche: string;
        codeTauxReferenceCredit: string;
        codeTauxReferenceDebit: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionMouvement: number;
        commissionImmobilisation: number;
        dateCreation: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        dateModification: Date;
        montantFraisOperations: number;
        baseFraisOperations: number;
        indicateurBaremeCommission: string;
        libelleBaremeCommission: string;
        montantFraisTenueCompte: number;
        baseFraisTenueCompte: string;
        numeroBaremeCommission: number;
        numeroBaremeCrediteur: number;
        tauxApplicationOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxCommissionDecouvert: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        tauxCommissionMouvement: number;
        tauxCommissionImmobilisation: number;
        tauxFraisTenueCompte: number;
        variationBaremeCrediteur: number;
        variationBaremeDebiteur: number;
        numeroBaremeDebiteur: number;
        codeDeviseCommissionFraisNegociee: string;
        tauxApplicationDecouvert: number;
        "codeDeviseCommission"?: string;
        "delaiRenouvellementDebiteur"?: number;
        "numeroBaremeCommissionDefaut"?: number;
        "numeroBaremeCrediteurDefaut"?: number;
        "numeroBaremeDebiteurDefaut"?: number;
        "tauxApplicationFraisOperation"?: number;
        "valeurVariationBaremeDebiteur"?: number;
    }
    interface IConditionArreteSynthese {
        modeArrete: string;
        periodiciteArrete: string;
        periodiciteFutureArrete: string;
        dateChangementPeriodicite: Date;
        codeEchelleCompteEnvoi: string;
        codeEchelleFusionEnvoi: string;
        editionEchelleDetailleCompte: string;
        editionEchelleDetailleFusion: string;
        codeBanquePrelevement: string;
        codeGuichetPrelevement: string;
        numeroComptePrelevement: string;
        numeroBaremeCommission: number;
        numeroBaremeInteretDebiteur: number;
        codeTauxDebiteurReference: string;
        libelleTauxDebiteur: string;
        variationTauxBaremeDebiteur: number;
        numeroBaremeInteretCrediteur: number;
        codeTauxCrediteurReference: string;
        libelleTauxCrediteur: string;
        variationBaremeTauxCrediteur: number;
        tauxCaisseCommissionDecouvert: number;
        tauxApplicationComDecouvert: number;
        tauxCommissionDecouvert: number;
        tauxCaisseCommMouvement: number;
        tauxApplicationCommMouvement: number;
        tauxCommissionMouvement: number;
        tauxCaisseCommissionImmo: number;
        tauxApplicationCommissionImmo: number;
        tauxCommissionImmo: number;
        tauxCaisseCommDepassement1: number;
        tauxCaisseCommDepassement2: number;
        tauxCaisseCommDepassement3: number;
        tauxAppCommDepassement1: number;
        tauxAppCommDepassement2: number;
        tauxAppCommDepassement3: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        montantFraisOperationEuro: number;
        tauxApplicationFraisOperation: number;
        montantUnitFraisOperationEuro: number;
        montantCaisseFraisTenueCptEuro: number;
        tauxFraisTenueCompteEuro: number;
        montantFraisTenueCptEuro: number;
        codeGestionTechnique: string;
        indicateurContratOuvertClos: string;
        typeFranchiseAgios: string;
        montantFranchiseAgiosEuro: number;
        libelleFamilleMarche: string;
        indicateurOuvertureAssurance: string;
        libelleCourtBareme: string;
        nombrePaliersBareme: number;
        indicateurConditionsPerso: string;
        margeEtablissementTranche1: number;
        margeEtablissementTranche2: number;
        margeEtablissementTranche3: number;
        margeEtablissementTranche4: number;
        margeEtablissementTranche5: number;
        codeDevise: string;
        nombrePaliersActifs: number;
        libelleCourtBaremeDebit: string;
        indicateurConditionDefaut: string;
        tauxReferencePalier1Devise: string;
        tauxReferencePalier2Devise: string;
        tauxReferencePalier3Devise: string;
        tauxReferencePalier4Devise: string;
        tauxReferencePalier5Devise: string;
        borneSuperieurePalier1Devise: number;
        borneSuperieurePalier2Devise: number;
        borneSuperieurePalier3Devise: number;
        borneSuperieurePalier4Devise: number;
        borneSuperieurePalier5Devise: number;
        margeTauxReferencePalier1Dev: number;
        margeTauxReferencePalier2Dev: number;
        margeTauxReferencePalier3Dev: number;
        margeTauxReferencePalier4Dev: number;
        margeTauxReferencePalier5Dev: number;
        valeurTauxReferenceTranche1Dev: number;
        valeurTauxReferenceTranche2Dev: number;
        valeurTauxReferenceTranche3Dev: number;
        valeurTauxReferenceTranche4Dev: number;
        valeurTauxReferenceTranche5Dev: number;
        listePalier: IPalier[];
    }
    interface ICommissionFraisDefaut {
        codeDeviseCommission: string;
        codeTauxReferenceCredit: string;
        codeTauxReferenceDebit: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionMouvement: number;
        commissionImmobilisation: number;
        delaiRenouvellementDebiteur: number;
        montantFraisTenueCompte: number;
        numeroBaremeCommissionDefaut: number;
        numeroBaremeCrediteurDefaut: number;
        tauxApplicationDecouvert: number;
        tauxApplicationFraisOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxCommissionDecouvert: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        tauxCommissionMouvement: number;
        tauxCommissionImmobilisation: number;
        valeurVariationBaremeDebiteur: number;
        montantFraisOperations: number;
        baseFraisOperations: number;
        numeroConditionDebitriceDefaut: number;
    }
    interface IConditionDebitriceGenerale {
        "identifiantConditionDebitriceGenerale": number;
        "dateDebutValidite": string;
        "dateFinEffet": string;
        "libelleCourtBareme": string;
        "libelleBareme": string;
        "codeNiveauResponsabilite": string;
        "codeTaux": string;
        "libelleTauxDebiteur": string;
        "periodiciteMajTaux": string;
        "valeurTauxReference": number;
        "indicateurBaremeDefaut": string;
        "nombrePaliersActifs": number;
        "nombreMaximumPaliers": number;
        "margeMinimumBareme": string;
        "margeMaximumBareme": string;
        "codeDevise": string;
        "codeTauxSubstitution1": string;
        "libelleTauxSubstitution1": string;
        "valeurTauxSubstitution1": number;
        "periodiciteMajTauxSubstitution1": string;
        "codeTauxSubstitution2": string;
        "libelleTauxSubstitution2": string;
        "periodiciteMajTauxSubstitution2": string;
        "valeurTauxSubstitution2": number;
        "codeTauxUsure": string;
        "libelleTauxUsure": string;
        "valeurTauxUsure": number;
        "codeGestionTechnique": string;
    }
    interface IPalier {
        numeroPalier: number;
        borneInferieure: number;
        borneSuperieure: number;
        margeTauxReference: number;
        tauxReference: string;
        valeurTaux: number;
        variationBorneSuperieure: number;
    }
    /**
     * Interface de la requête au service REST "contratcce/v1/informationGlobale" de type GET
     */
    interface IInformationsGlobalesRestServiceGetQuery {
        indicateurInfoDecouvert: Enumerations.InformationsGlobales.IndicateurInfoDecouvertEnum;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeAction: Enumerations.InformationsGlobales.CodeActionEnum;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "devise/v1/listeDevise"
 * @module ComposantsCommunsConsultationCCE.Modeles.ListeDevise
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.ListeDevise {
    interface IDevise {
        codeDevise: string;
        libelleDevise: string;
        symboleDevise: string;
        nombreDecimalesReelles: number;
        nombreDecimalesGerees: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "offre/v2/recherche"
 * @module ComposantsCommunsConsultationCCE.Modeles.OffreRecherche
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.OffreRecherche {
    interface IOffre {
        numeroEntiteTitulaire: number;
        numeroOffre: number;
        dateOuvertureOffreSouscrite: string;
        codeEtatOffre: string;
        dateClotureOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitService: number;
        nomCommercialPS: string;
        nomCommercialCourtPS: string;
        codeFamilleGestionPS: string;
        identifiantProduitServiceAss: number;
    }
    interface IRecherche {
        listeOffres: Array<IOffre>;
    }
    /**
     * Interface de la requête au service REST "offre/v2/recherche" de type GET
     */
    interface IOffreRechercheRestServiceGetQuery {
        codeEtablissement: string;
        codeAction: string;
        referenceExterneAgent: number;
        numeroEntiteTitulaire: number;
        codeOrigineAppel: string;
        codeGuichet: string;
        identifiantProduitService: string;
        numeroCompte: string;
        codeFamilleGestionPS: string;
    }
}

declare module ComposantsCommunsConsultationCCE.Modeles.OutilImpressionBandeauClientService {
    interface IOutilImpressionBandeauClientGetQuery {
        numeroEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompte: string;
        niveauAffichageRepLegal: number;
        typeDeTraitement?: number;
    }
    interface IElementEditionRole {
        ELEMENT: string;
        LIB_CTDHLI: string;
    }
    interface IElementEditionRoleEtPersonne {
        leRole: IElementEditionRole;
        lesPersonnes: Array<IElementEditionPersonneGenerique>;
    }
    interface IBandeauClient {
        roleEtPersonnes: Array<IElementEditionRoleEtPersonne>;
        nombreDePersonnes: number;
        nombreDeRoles: number;
    }
    interface IElementEditionPersonneGenerique {
        ELEMENT: string;
        numeroPersonne: string;
        infosPersonne: IInformationsPersonne;
    }
    interface IInformationsPersonne {
        LIDARS: string;
        DADATJ: string;
        NODATP: string;
        LIDACV: string;
        LIDANM: string;
        NOM_PRENOM_CLIENT: string;
        LIB_CODIRC: string;
        DADANA: string;
        LIDGIL_NAISSANCE: string;
        LIDGV2_6: string;
        LIDGNA: string;
        IDNSBD: string;
        NODATP_CLIENT: string;
        LIDGNA2: string;
        LIDACV2: string;
        LIDANM2?: string;
        NOM_USAGE2?: string;
        LIB_CODIRC2?: string;
        NODATP_CLIENT2: string;
        IDNSBD2: string;
        LIDGV2_62: string;
        DADANA2: string;
        SITUATION_FAMILLE2: string;
        NOM_PRENOM_CLIENT2: string;
        LIDGIL_NAISSANCE2: string;
        REGIME_MATRIMONIAL2: string;
        LIDACV3: string;
        NOM_PRENOM_CLIENT3: string;
        LIDANM3: string;
        NOM_USAGE3: string;
        LIB_CODIRC3: string;
        DADANA3: string;
        LIDGIL_NAISSANCE3: string;
        LIDGV2_63: string;
        LIDGNA3: string;
        IDNSBD3: string;
        NODATP_CLIENT3: string;
        SITUATION_FAMILLE3: string;
        REGIME_MATRIMONIAL3: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcceservice/v1/remunerationCce"
 * @module ComposantsCommunsConsultationCCE.Modeles.RemunerationCce
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.RemunerationCce {
    interface IRemuneration {
        /**
         * Objet contenant les informations de Marché et de devise de la rémunération
         */
        information: IInformation;
        /**
         * Objet contenant les informations concernant les conditions du barème
         */
        conditionsBareme: Array<IConditionsBareme>;
        /**
         * Objet contenant les informations concernant le barème à proposer
         */
        baremeaProposer: IBaremeaProposer;
        /**
         * Objet contenant les informations concernant les paliers à proposer
         */
        paliersaProposer: Array<IPalierSynthese>;
        /**
         * Objet contenant les informations concernant les barèmes
         */
        bareme: Array<IBareme>;
        /**
         * Objet contenant les informations concernant les paliers
         */
        paliers: Array<IPalierSynthese>;
    }
    interface IInformation {
        /**
         * Classification de regroupement de segments de marché
         */
        codeMarche: string;
        /**
         * Libellé abrégé du code marché
         */
        libelleFamilleMarche: string;
        /**
         * Code devise de fonctionnement du compte
         */
        codeDevise: string;
    }
    interface IConditionsBareme {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * CodeGuichet
         */
        codeGuichet: string;
        /**
         * Numéro de compte
         */
        numeroCompte: string;
        /**
         * Numéro chrono des conditions créditrices affectées à un compte à vue (CDD ou CCE).
         */
        numeroChronoConditionCredit: number;
        /**
         * Date de début d'application des conditions
         */
        dateDebutApplication: string;
        /**
         * Date de fin d'application des conditions
         */
        dateFinApplication: string;
        /**
         * Identifiant barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Libellé court du barème
         */
        libelleCourtBareme: string;
        /**
         * Libellé du barème
         */
        libelleBareme: string;
        /**
         * Nombre de paliers du barème
         */
        nombrePaliers: number;
        /**
         * Indicateur conditions personnalisées
         * Cet indicateur précise si le client se voit appliqué des conditions de rémunération personnalisées.
         * 'O' Conditions personnalisée
         * 'N' Conditions standards
         */
        indicateurConditionsPerso: Enumerations.RemunerationCce.IndicateurConditionsPersoEnum;
        /**
         * Indicateur conditions supprimables
         * 'N' Cette condition ne peut plus être supprimée
         * 'O' Cette condition peut être supprimée
         */
        indicateurConditionsSupp: Enumerations.RemunerationCce.IndicateurConditionsSuppEnum;
        /**
         * Libellé message d'erreur
         */
        libelleMessageErreur: string;
        /**
         * Date de fin de commercialisation d'un barème de rémunération
         */
        dateFinCommercialisationBareme: string;
        /**
         * Cet indicateur précise si la conditions peuvent être modifiées ou non.
         * '0' Condition non modifiable
         * '1' Condition modifiable - uniquement la date de fin
         * '2' Condition modifiable - tout est modifiable suivant l'habilitation du chargé de clientèle.
         */
        indicateurConditionsModifiable: Enumerations.RemunerationCce.IndicateurConditionsModifiableEnum;
        /**
         * Liste des paliers du barème
         */
        listePalierDetail: Array<IPalierDetail>;
    }
    interface IPalierDetail {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Numéro de compte
         */
        numeroCompte: string;
        /**
         * Numéro chrono des conditions créditrices affectées à un compte à vue (CDD ou CCE).
         */
        numeroChronoCondition: number;
        /**
         * Numéro du palier
         */
        numeroPalier: number;
        /**
         * Il s'agit de la borne montant supérieur du palier de rémunération
         */
        borneSuperieure: number;
        /**
         * Code taux de référence
         */
        codeTauxReference: string;
        /**
         * Il s'agit de la valeur du taux de référence pour la rémunération des CAV
         */
        valeurTauxReference: number;
        /**
         * Marge établissement sur taux de rémunération
         */
        margeEtablissement: number;
        /**
         * Marge sur taux de référence
         */
        margeTauxReference: number;
        /**
         * Marge minimum du palier sur taux de rémunération
         */
        margeMinimumPalier: number;
        /**
         * Marge maxumum du palier sur taux de rémunération
         */
        margeMaximumPalier: number;
        /**
         * Date de début de validité palier
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité palier
         */
        dateFinValidite: string;
    }
    interface IBareme {
        /**
         * Identifiant barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Libellé court barème de rémunération
         */
        libelleCourtBareme: string;
        /**
         * Libellé barème de rémunération
         */
        libelleBareme: string;
        /**
         * Date de fin de commercialisation
         */
        dateFinCommercialisation: string;
        /**
         * Nombre de paliers du barème
         */
        nombrePaliers: number;
        /**
         * Niveau d'habilitation des fonctionnalités de l'application Rémunération des comptes à vue.
         */
        niveauHabilitation: number;
        /**
         * Date de début de commercialisation
         */
        dateDebutCommercialisation: string;
        /**
         * Cet indicateur permet de savoir si le barème a été choisi par l'établissement pour être affiché
         * par défaut au poste de travail lors de la création d'une condition de rémunération pour un compte
         * 'O' OUI
         * 'N' NON
         */
        indicateurBaremeDefaut: Enumerations.RemunerationCce.IndicateurBaremeDefautEnum;
    }
    interface IPalier {
        /**
         * Marge sur taux de référence
         */
        margeTauxReference: number;
        /**
         * Borne montant supérieur du palier de rémunération
         */
        borneSuperieure: number;
        /**
         * Taux de référence Palier Chaque palier est associé à un code taux qui doit exister dans la table des
         * barèmes débiteurs ou pour le dernier palier correspondre au taux particulier "USU". Exemple : T4M, P01, P12, TBC, USU ...
         */
        tauxReference: string;
        /**
         * Numéro du palier
         */
        numeroPalier: number;
    }
    interface IBaremeaProposer {
        /**
         * Date de début d'application des conditions
         */
        dateDebutApplication: string;
        /**
         * Date de fin d'application des conditions
         */
        dateFinApplication: string;
        /**
         * Identifiant barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Libellé court barème de rémunération
         */
        libelleCourtBareme: string;
        /**
         * Libellé barème de rémunération
         */
        libelleBareme: string;
        /**
         * Date de fin de commercialisation d'un barème de rémunération
         */
        dateFinCommercialisation: string;
        /**
         * Nombre de paliers du barème
         */
        nombrePaliers: number;
    }
    interface IPalierSynthese {
        /**
         * Numéro chronologique attribué par le système à chaque création de barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Numéro de palier du barème de rémunération
         */
        numeroPalier: number;
        /**
         * Borne montant supérieur du palier de rémunération
         */
        borneSuperieurePalier: number;
        /**
         * Date de début de validité du palier
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité du palier
         */
        dateFinValidite: string;
        /**
         * Code taux de référence
         */
        codeTauxReference: string;
        /**
         * Valeur du taux de référence pour la rémunération des CAV
         */
        valeurTauxReference: number;
        /**
         * Marge établissement sur taux de rémunération
         */
        margeEtablissement: number;
        /**
         * Marge minimum du palier sur taux de rémunération
         */
        margeMinimumPalier: number;
        /**
         * Marge maximum du palier sur taux de rémunération
         */
        margeMaximumPalier: number;
        /**
         * Marge sur taux de référence
         */
        margeTauxReference: number;
    }
    interface IConditionRemuneration {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Numéro de compte
         */
        numeroCompte: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         * Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect
         */
        identifiantPersonne: number;
        /**
         * numéro chrono des conditions créditrices affectées à un compte à vue (CDD ou CCE).
         */
        numeroChrono: number;
        /**
         * Date de début d'application
         */
        dateDebutApplication: string;
        /**
         * Date de fin d'application
         */
        dateFinApplication: string;
        /**
         * Numéro chronologique attribué par le système à chaque création de barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Nombre de paliers du barème de rémunération
         */
        nombrePaliers: number;
        /**
         * Liste des paliers
         */
        listePalier: Array<IPalier>;
        /**
         * Code devise
         */
        codeDevise: string;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         */
        identifiantProduitService: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         */
        numeroOffre: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        identifiantElementStructure: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        identifiantElementStructure2: number;
        /**
         * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         * 'T' Titulaire
         * 'R' Remplaçant
         * 'S' Suppléant
         * 'A' Affectation temporaire
         */
        codeQualiteAgent: Enumerations.RemunerationCce.CodeQualiteAgentEnum;
        /**
         * Détermine un marché selon la segmentation marché national / MN
         * Permet de catégorier la clientèle.
         */
        codeMarche: string;
        /**
         * Détermine les traitements à réaliser dans le cadre d'une opération fonctionnelle.
         * 'C' Contrôles
         * 'M' Contrôles + Mise à jour
         */
        codeTypeTraitement: Enumerations.RemunerationCce.CodeTypeTraitementEnum;
    }
    /**
     * Interface de la requête au service REST "contratcceservice/v1/remunerationCce" de type GET
     */
    interface IRemunerationCceRestServiceGetQuery {
        indicateurInfoRemuneration: Enumerations.RemunerationCce.IndicateurInfoRemunerationEnum;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        identifiantPersonne: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcce/v1/soldePrevisionnel"
 * @module ComposantsCommunsConsultationCCE.Modeles.SoldePrevisionnel
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.SoldePrevisionnel {
    interface ISoldePrevisionnel {
        dateSoldePrevisionnel: Array<IDateSoldePrevisionnel>;
        compteFusion: Array<ICompteFusion>;
        detailOperationSoldePrevisionne: Array<IDetailOperationSoldePrevisionnel>;
    }
    interface IDateSoldePrevisionnel {
        dateOperation: string;
        codeDeviseOperation: string;
        montantSoldeFusionne: number;
        montantOperationEcarte: number;
        montantInstanceComptabilisation: number;
        montantSoldePrevisionnel: number;
        montantReserveEncaissement: number;
        montantAutorisationDecouvert: number;
        soldeDebiteur: number;
        montantImpayePret: number;
        montantSoldeDisponible: number;
        typeFusion: string;
    }
    interface ICompteFusion {
        typeFusion: string;
        indicateurFusionCapital: string;
        codeEtablissement: string;
        codeGuichet: string;
        referenceProduitService: string;
        codeEtatProduit: string;
    }
    interface IDetailOperationSoldePrevisionnel {
        codeDeviseOperation: string;
        dateOperation: string;
        dateReglementPrevue: string;
        libelleTypeOperation: string;
        premierLibelleOperation: string;
        deuxiemeLibelleOperation: string;
        montantNetOperation: number;
        codeSensImputation: string;
    }
    /**
     * Interface de la requête au service REST "contratcce/v1/soldePrevisionnel" de type GET
     */
    interface ISoldePrevisionnelRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroEntiteTitulaire: number;
        codeDevise: string;
        typeProduitService: string;
        codeFonction: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcce/v1/soldeValeur"
 * @module ComposantsCommunsConsultationCCE.Modeles.SoldeValeur
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.SoldeValeur {
    interface ISoldeValeur {
        soldeValeur: number;
        codeDevise: string;
        timeStamp: string;
        nombreCompteFusion: number;
    }
    /**
     * Interface de la requête au service REST "contratcce/v1/soldeValeur" de type GET
     */
    interface ISoldeValeurRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "structure/v2/caracteristiqueSiege"
 * @module ComposantsCommunsConsultationCCE.Modeles.Structure
 * @author S0077482 (Thomas Prat)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.Structure {
    interface ICaracteristiqueSiegeQuery {
        codeEtablissement: string;
        identifiantElementStructure?: number;
        referenceElementStructure?: number;
        dateInterrogation?: Date;
        typeOrganisation: string;
    }
    interface ICaracteristiqueSiege {
        DonneeCommune: IDonneeCommune;
        DonneeSpecifique: IDonneeSpecifique;
        Localisation: Array<ILocalisation>;
        MentionLegaleCorps: IMentionLegaleCorps;
        MentionLegaleDonneeCommune: IMentionLegaleDonneeCommune;
        MentionLegalePied: IMentionLegalePied;
    }
    interface IDonneeCommune {
        codeEtablissement: string;
        identifiantElementStructure: number;
        referenceElementStructure: number;
        libelleElementStructure: string;
        typeElementStructure: string;
        dateDebutValiditeEDS: string;
        dateFinValiditeEDS: string;
        libelleTypeElementStructure: string;
    }
    interface IDonneeSpecifique {
        codeInterneSequentiel: string;
        CodeInterne: string;
        codeCTRRattachement: string;
        critereRoutageBIN: string;
        numeroTelex: string;
        numeroTelecopie: string;
        numeroSIRET: string;
        lieuEnregistrementRC: string;
        montantDotationStatutaire: number;
        montantCapital: number;
        numeroNationalEmetteur: string;
    }
    interface ILocalisation {
        identifiantSite: number;
        typeAdresse: string;
        dateDebutValiditeSite: string;
        dateFinValiditeSite: string;
    }
    interface IMentionLegaleCorps {
        codeBIC: string;
        codeCategorieJuridique: string;
        codeCTRRattachement: string;
        codeInterneEtablissement: string;
        codeInterneEtablissementSecondaire: string;
        commentaire3: string;
        commentaire4: string;
        critereRoutageBIN: string;
        libelleEDSChequier: string;
        libelleEDSDomiciliation: string;
        lieuEnregistrement: string;
        montantCapitalEtablissement: number;
        montantDotation: number;
        numeroNationalEmetteur: string;
        numeroORIAS: string;
        numeroRCSSIREN: string;
        numeroSIRET: string;
        numeroTelecopieur: string;
        numeroTelex: string;
        raisonSociale: string;
        commentaire2: string;
        commentaire1: string;
    }
    interface IMentionLegalePied {
        codePied: number;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        ligneEntete: string;
        typeEditique: string;
        typeSaisie: string;
    }
    interface IMentionLegaleDonneeCommune {
        dateModificationMentionLegale: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcce/v1/syntheseFinanciere"
 * @module ComposantsCommunsConsultationCCE.Modeles.SyntheseFinanciere
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Modeles.SyntheseFinanciere {
    interface ISolde {
        codeEtatproduit: string;
        codeDevise: string;
        cumulReserveEncaissementEuro: number;
        montantSoldeFusionneEuro: number;
        cumulMontantImpayePretEuro: number;
        cumulMontantOpeEcarteEuro: number;
        montantAutoDecouvertEuro: number;
        montantSoldeDispoEuro: number;
        codeEtablissementFusion: string;
        codeGuichetFusion: string;
        numeroCompteFusion: string;
        codeTypeFusion: string;
        codeDeviseTenueCompte: string;
        cumulReserveEncaissDeviseCpte: number;
        cumulMontantOpeEcarDeviseCpte: number;
        cumulMontantImpayeDeviseCpte: number;
        montantDecouvertDeviseCpte: number;
        soldeDisponibleDeviseCpte: number;
        soldeCompteDeviseCpte: number;
        cumulRemiseCheque: number;
        cumulBlocageProvisions: number;
        soldeDebiteurAttenduDeviseOrigi: number;
    }
    interface ISyntheseFinanciere {
        solde: ISolde;
        listeMontant: Array<IMontant>;
        total: ITotal;
    }
    interface IMontant {
        codeDeviseExpressionMontant: string;
        soldeDeviseTenueCompte: number;
        cumulReserveEncaissement: number;
        cumulMontantOperationEcarte: number;
        cumulMontantImpayePret: number;
        codeTypeFusion: string;
        indicateurFusionEnCapital: string;
        codeDeviseISOTenueCompte: string;
        soldeCompteDevise: number;
        cumulReserveEncaissementDevise: number;
        cumulMontantOperationEcarteDevise: number;
        cumulMontantImpayePretDevise: number;
        cumulBlocageProvision: number;
        cumulRemiseCheque: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
    interface ITotal {
        codeDeviseExpressionMontant: string;
        totalCreditTiers: number;
        totalImpayeTiers: number;
        totalTresorerieTiers: number;
        codeDeviseISOTenueCompte: string;
        totalCreditTiersDevise: number;
        totalImpayeTiersDevise: number;
        totalTresorerieTiersDevise: number;
    }
    /**
     * Interface de la requête au service REST "contratcce/v1/syntheseFinanciere" de type GET
     */
    interface ISyntheseFinanciereRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        referenceProduitService: string;
        codeTypeProduitService: string;
        codeOrigineOperation: string;
        codeAction: string;
    }
}

declare module ComposantsCommunsConsultationCCE.Modeles.TiersNoyau {
    interface ITiersNoyauQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChrono?: number;
        numeroLieuActivite?: number;
        eligibiliteEAI?: string;
        parametreAppel?: string;
    }
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

declare module ComposantsCommunsConsultationCCE.Modeles.TiersRecherche {
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
        dateNaissance: string;
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
    interface ITiersRechercheQuery {
        codeEtablissement: string;
        codeTypeRecherche: number;
        identifiantRecherche?: string;
        nom?: string;
        prenom?: string;
        dateNaissance?: Date;
        sexe?: string;
        edsDomiciliation?: number;
        sigle?: string;
        motCle?: string;
        motCle2?: string;
        communeSiegeSocial?: string;
    }
}

declare module ComposantsCommunsConsultationCCE.Modeles.TiersV3Adresse {
    interface ITiersV3AdresseQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    interface IAdresse {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        codeValiditeAdresseUNIVERS: string;
        indicateurEnvoiCourrier: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        numeroVoiePTT: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: string;
        nombreRetourPTT: number;
    }
}

/***
 * Service concernant le service REST "contratserveurbancaire/v1/abonnementEdi"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class AbonnementEdiService implements IAbonnementEdiService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la restitution des abonnements EDI d'un compte rattaché (pour Affichage infos)
         * Elle fournit pour un Rice, la liste des abonnements EDI et les services associés.
         * @param {Modeles.AbonnementEdi.IAbonnementEdiRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.AbonnementEdi.IAbonnementEdi>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.AbonnementEdi.IAbonnementEdiRestServiceGetQuery): ng.IPromise<Modeles.AbonnementEdi.IAbonnementEdi>;
    }
    /**
     * Interface du service
     */
    interface IAbonnementEdiService {
        sendGetRequest(query: Modeles.AbonnementEdi.IAbonnementEdiRestServiceGetQuery): ng.IPromise<Modeles.AbonnementEdi.IAbonnementEdi>;
    }
}

/***
 * Service concernant le service REST "contratcceparametre/v1/baremeConditionEtablissement"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class BaremeConditionEtablissementService implements IBaremeConditionEtablissementService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer la liste d'opération des dates de valeur par défault
         * @param {Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissementRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissement>} La promesse contenant les résultats
         */
        getListeDateDeValeurParDefaut(query: Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissementRestServiceGetQuery): ng.IPromise<Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissement>;
    }
    /**
     * Interface du service
     */
    interface IBaremeConditionEtablissementService {
        getListeDateDeValeurParDefaut(query: Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissementRestServiceGetQuery): ng.IPromise<Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissement>;
    }
}

/***
 * Service concernant le service REST "contratcarte-v1/recherche"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0051604 (Mathieu Alcime)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class CartesAssocieesService implements ICartesAssocieesService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la restitution du montant du solde en valeur à l’instant où on l’interroge
         * @param {Modeles.CartesAssociees.ICartesAssocieesRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.CartesAssociees.IDateCartesAssociees>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.CartesAssociees.ICartesAssocieesRestServiceGetQuery): ng.IPromise<Modeles.CartesAssociees.ICartesAssociees>;
    }
    /**
     * Interface du service
     */
    interface ICartesAssocieesService {
        sendGetRequest(query: Modeles.CartesAssociees.ICartesAssocieesRestServiceGetQuery): ng.IPromise<Modeles.CartesAssociees.ICartesAssociees>;
    }
}

/***
 * Service concernant le service REST "decouvertcce/v1/commissionNonUtilisation"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class CommissionNonUtilisationService implements ICommissionNonUtilisationService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Méthode permettant de récupérer la liste de commission non utilisation
         * @param {Modeles.CommissionNonUtilisation.ICommissionNonUtilisationRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.CommissionNonUtilisation.ICommissionNonUtilisation>} La promesse contenant les résultats
         */
        getCommissionNonUtilisation(query: Modeles.CommissionNonUtilisation.ICommissionNonUtilisationRestServiceGetQuery): ng.IPromise<Modeles.CommissionNonUtilisation.ICommissionNonUtilisation>;
    }
    /**
     * Interface du service
     */
    interface ICommissionNonUtilisationService {
        getCommissionNonUtilisation(query: Modeles.CommissionNonUtilisation.ICommissionNonUtilisationRestServiceGetQuery): ng.IPromise<Modeles.CommissionNonUtilisation.ICommissionNonUtilisation>;
    }
}

/***
 * Service concernant le service REST "contratcce/v1/dateValeur"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class DateValeurService implements IDateValeurService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer la liste d'opération des dates de valeur
         * @param {Modeles.DateValeur.IDateValeurRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Model.IDateValeur[]>} La promesse contenant les résultats
         */
        getListeOperationDateDeValeur(query: Modeles.DateValeur.IDateValeurRestServiceGetQuery): ng.IPromise<Modeles.DateValeur.IDateValeurCce>;
    }
    /**
     * Interface du service
     */
    interface IDateValeurService {
        getListeOperationDateDeValeur(query: Modeles.DateValeur.IDateValeurRestServiceGetQuery): ng.IPromise<Modeles.DateValeur.IDateValeurCce>;
    }
}

/**
 * Service pour la récupération des decompte agios
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsConsultationCCE.Services.DecompteAgios {
    /**
     * Interface du service de decompte agios
     */
    interface IDecompteAgiosService {
        lireDecompteAgios(codeEtablissement: string, codeGuichet: string, numeroCompte: string, typeDecompteAgio: string, dateArrete: Date): ng.IPromise<Modeles.DecompteAgios.IDecompteAgio>;
        getRequest: (query: Modeles.DecompteAgios.IDecompteAgiosGetQuery) => ng.IPromise<Modeles.DecompteAgios.IDecompteAgio>;
    }
    class TypeDecompteAgios {
        static simple: string;
        static detaille: string;
    }
    /**
     * Déclaration du service de decompte agios
     */
    class DecompteAgiosService implements IDecompteAgiosService {
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
        getRequest(query: Modeles.DecompteAgios.IDecompteAgiosGetQuery): ng.IPromise<Modeles.DecompteAgios.IDecompteAgio>;
        lireDecompteAgios(codeEtablissement: string, codeGuichet: string, numeroCompte: string, typeDecompteAgio: string, dateArrete?: Date): ng.IPromise<Modeles.DecompteAgios.IDecompteAgio>;
    }
    /**
     * Déclaration du service Mock de decompte agios
     */
    class DecompteAgiosMockService implements IDecompteAgiosService {
        private serviceAgent;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mockLoaderService: Services.IMockLoaderService);
        /**
         * Methode Mock d'appel GET
         */
        getRequest(query: Modeles.DecompteAgios.IDecompteAgiosGetQuery): ng.IPromise<Modeles.DecompteAgios.IDecompteAgio>;
        /**
         * Methode Mock
         */
        lireDecompteAgios(codeEtablissement: string, codeGuichet: string, numeroCompte: string, typeDecompteAgio: string, dateArrete?: Date): ng.IPromise<Modeles.DecompteAgios.IDecompteAgio>;
    }
}

declare module ComposantsCommunsConsultationCCE {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

/**
 * Service concernant les donnees du contexte
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0077482(Thomas Prat)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Interface du service de donnees du contexte decompte agios
     */
    interface IDonneesContexteDecompteAgios {
        enregistrerDonneesContexte(contexte: Modeles.IContexteDecompteAgios): any;
        recupererDonneesContexte(): Modeles.IContexteDecompteAgios;
    }
    /**
     * Déclaration du service de donnees du contexte decompte agios
     */
    class DonneesContexteDecompteAgios implements IDonneesContexteDecompteAgios {
        private donneesContexte;
        enregistrerDonneesContexte(contexte: Modeles.IContexteDecompteAgios): void;
        recupererDonneesContexte(): Modeles.IContexteDecompteAgios;
    }
}

/***
 * Service concernant le service REST "contratcce/v1/fusionAgioCapital"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class FusionAgioCapitalService implements IFusionAgioCapitalService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer les informations d'agio du compte
         * @param {Modeles.FusionAgioCapital.IFusionAgioCapitalRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.FusionAgioCapital.IFusionAgioCapital>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.FusionAgioCapital.IFusionAgioCapitalRestServiceGetQuery): ng.IPromise<Modeles.FusionAgioCapital.IFusionAgioCapital>;
    }
    /**
     * Interface du service
     */
    interface IFusionAgioCapitalService {
        sendGetRequest(query: Modeles.FusionAgioCapital.IFusionAgioCapitalRestServiceGetQuery): ng.IPromise<Modeles.FusionAgioCapital.IFusionAgioCapital>;
    }
}

/***
 * Service concernant le service REST "contratcce/v1/informationGlobale"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class InformationsGlobalesService implements IInformationsGlobalesService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        private tmpQuery;
        private informationGlobale;
        private verrou;
        private deferred;
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        /**
         * Méthode permettant de récupérer les informations de fonctionnement du compte
         * @param {Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.InformationsGlobales.IInformationGlobale>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery): ng.IPromise<Modeles.InformationsGlobales.IInformationGlobale>;
        /**
         * Méthode permettant de récupérer les informations de fonctionnement du compte sans gestion des erreurs
         * @param {Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.InformationsGlobales.IInformationGlobale>} La promesse contenant les résultats
         */
        sendGetRequestWithoutCatch(query: Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery): ng.IPromise<Modeles.InformationsGlobales.IInformationGlobale>;
    }
    /**
     * Interface du service
     */
    interface IInformationsGlobalesService {
        sendGetRequest(query: Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery): ng.IPromise<Modeles.InformationsGlobales.IInformationGlobale>;
        sendGetRequestWithoutCatch(query: Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery): ng.IPromise<Modeles.InformationsGlobales.IInformationGlobale>;
    }
}

/**
 * Service d'initialisation des paramètres de l'application
 * @author S0077482
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

/***
 * Service concernant le service REST "devise/v1/listeDevise"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class ListeDeviseService implements IListeDeviseService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer la liste des devises
         * @return {MyWay.Services.IPromesse<Modeles.ListeDevise.IDevise[]>} La promesse contenant les résultats
         */
        getListeDevise(): ng.IPromise<Modeles.ListeDevise.IDevise[]>;
        /**
         * Méthode permettant de récupérer les informations d'une devise à partir de la liste des devises et d'un code devise recherché
         * @param {Modeles.ListeDevise.IDevise[]} listeDevise - la liste des devises
         * @param {string} codeDevise - le code devise recherché
         * @return {MyWay.Services.IPromesse<Modeles.ListeDevise.IDevise[]>} La promesse contenant les résultats
         */
        getDevise(listeDevise: Modeles.ListeDevise.IDevise[], codeDevise: string): Modeles.ListeDevise.IDevise;
    }
    /**
     * Interface du service
     */
    interface IListeDeviseService {
        getListeDevise(): ng.IPromise<Modeles.ListeDevise.IDevise[]>;
        getDevise(listeDevise: Modeles.ListeDevise.IDevise[], codeDevise: string): Modeles.ListeDevise.IDevise;
    }
}

/**
 * Service de chargement des mocks dans le dossier "assets/mocks/*.json"
 * @author S0077482
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

/***
 * Service concernant le service REST "offre/v2/recherche"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class OffreRechercheService implements IOffreRechercheService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de retourner les liste des offres
         * @param {Modeles.OffreRecherche.IOffreRechercheRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.OffreRecherche.IRecherche>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.OffreRecherche.IOffreRechercheRestServiceGetQuery): ng.IPromise<Modeles.OffreRecherche.IRecherche>;
    }
    /**
     * Interface du service
     */
    interface IOffreRechercheService {
        sendGetRequest(query: Modeles.OffreRecherche.IOffreRechercheRestServiceGetQuery): ng.IPromise<Modeles.OffreRecherche.IRecherche>;
    }
}

declare module ComposantsCommunsConsultationCCE.Services.Rest {
    /**
     * Interface du service Outil Impression Bandeau Client
     */
    interface IOutilImpressionBandeauClientService {
        getRequest: (query: Modeles.OutilImpressionBandeauClientService.IOutilImpressionBandeauClientGetQuery) => ng.IPromise<Modeles.OutilImpressionBandeauClientService.IBandeauClient>;
    }
    /**
     * Déclaration du service Outil Impression Bandeau Client
     */
    class OutilImpressionBandeauClientService implements IOutilImpressionBandeauClientService {
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
        getRequest(query: Modeles.OutilImpressionBandeauClientService.IOutilImpressionBandeauClientGetQuery): ng.IPromise<Modeles.OutilImpressionBandeauClientService.IBandeauClient>;
    }
}

/***
 * Service concernant le service REST "contratcceservice/v1/remunerationCce"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class RemunerationCceService implements IRemunerationCceService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer les informations de rémuneration CCE
         * @param {Modeles.RemunerationCce.IRemunerationCceRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.RemunerationCce.IRemuneration>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.RemunerationCce.IRemunerationCceRestServiceGetQuery): ng.IPromise<Modeles.RemunerationCce.IRemuneration>;
    }
    /**
     * Interface du service
     */
    interface IRemunerationCceService {
        sendGetRequest(query: Modeles.RemunerationCce.IRemunerationCceRestServiceGetQuery): ng.IPromise<Modeles.RemunerationCce.IRemuneration>;
    }
}

/***
 * Service concernant le service REST "contratcce/v1/soldePrevisionnel"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class SoldePrevisionnelService implements ISoldePrevisionnelService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer l'ensemble des opérations dont la date de valeur est comprise entre la date du jour et la date J+7
         * @param {Modeles.SoldeValeur.ISoldePrevisionnelRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.SoldePrevisionnel.ISoldeValeur>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.SoldePrevisionnel.ISoldePrevisionnelRestServiceGetQuery): ng.IPromise<Modeles.SoldePrevisionnel.ISoldePrevisionnel>;
    }
    /**
     * Interface du service
     */
    interface ISoldePrevisionnelService {
        sendGetRequest(query: Modeles.SoldePrevisionnel.ISoldePrevisionnelRestServiceGetQuery): ng.IPromise<Modeles.SoldePrevisionnel.ISoldePrevisionnel>;
    }
}

/***
 * Service concernant le service REST "contratcce/v1/soldeValeur"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class SoldeValeurService implements ISoldeValeurService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la restitution du montant du solde en valeur à l’instant où on l’interroge
         * @param {Modeles.SoldeValeur.ISoldeValeurRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.SoldeValeur.ISoldeValeur>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.SoldeValeur.ISoldeValeurRestServiceGetQuery): ng.IPromise<Modeles.SoldeValeur.ISoldeValeur>;
    }
    /**
     * Interface du service
     */
    interface ISoldeValeurService {
        sendGetRequest(query: Modeles.SoldeValeur.ISoldeValeurRestServiceGetQuery): ng.IPromise<Modeles.SoldeValeur.ISoldeValeur>;
    }
}

/***
 * Service concernant le service REST "structure/v2/caracteristiqueSiege"
 * @module ComposantsCommunsConsultationCCE.Services.Structure
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsConsultationCCE.Services.Structure {
    /**
     * Classe du service
     */
    class StructureCaracteristiqueSiegeService implements IStructureCaracteristiqueSiegeService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: ComposantsCommunsConsultationCCE.Modeles.Structure.ICaracteristiqueSiegeQuery): ng.IPromise<ComposantsCommunsConsultationCCE.Modeles.Structure.ICaracteristiqueSiege>;
    }
    /**
     * Interface du service
     */
    interface IStructureCaracteristiqueSiegeService {
        getRequest(query: ComposantsCommunsConsultationCCE.Modeles.Structure.ICaracteristiqueSiegeQuery): ng.IPromise<ComposantsCommunsConsultationCCE.Modeles.Structure.ICaracteristiqueSiege>;
    }
    /**
     * Déclaration du service Mock de structure caracteristique siege
     */
    class StructureCaracteristiqueSiegeMockService implements IStructureCaracteristiqueSiegeService {
        private serviceAgent;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mockLoaderService: Services.IMockLoaderService);
        /**
         * Methode Mock d'appel GET
         */
        getRequest(query: ComposantsCommunsConsultationCCE.Modeles.Structure.ICaracteristiqueSiegeQuery): ng.IPromise<ComposantsCommunsConsultationCCE.Modeles.Structure.ICaracteristiqueSiege>;
    }
}

/***
 * Service concernant le service REST "contratcce/v1/syntheseFinanciere"
 * @module ComposantsCommunsConsultationCCE.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsConsultationCCE.Services {
    /**
     * Classe du service
     */
    class SyntheseFinanciereService implements ISyntheseFinanciereService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la restitution du montant du solde en valeur à l’instant où on l’interroge
         * @param {Modeles.SyntheseFinanciere.ISyntheseFinanciereRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.SoldeValeur.ISoldeValeur>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.SyntheseFinanciere.ISyntheseFinanciereRestServiceGetQuery): ng.IPromise<Modeles.SyntheseFinanciere.ISyntheseFinanciere>;
    }
    /**
     * Interface du service
     */
    interface ISyntheseFinanciereService {
        sendGetRequest(query: Modeles.SyntheseFinanciere.ISyntheseFinanciereRestServiceGetQuery): ng.IPromise<Modeles.SyntheseFinanciere.ISyntheseFinanciere>;
    }
}

/***
 * Service concernant le service REST "tiers/v3/noyau"
 * @module ComposantsCommunsConsultationCCE.Services.TiersNoyau
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsConsultationCCE.Services.TiersNoyau {
    /**
     * Classe du service
     */
    class TiersNoyauService implements ITiersNoyauService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        getTiersNoyau(query: ComposantsCommunsConsultationCCE.Modeles.TiersNoyau.ITiersNoyauQuery): ng.IPromise<ComposantsCommunsConsultationCCE.Modeles.TiersNoyau.ITiersNoyau>;
    }
    /**
     * Interface du service
     */
    interface ITiersNoyauService {
        getTiersNoyau(query: ComposantsCommunsConsultationCCE.Modeles.TiersNoyau.ITiersNoyauQuery): ng.IPromise<ComposantsCommunsConsultationCCE.Modeles.TiersNoyau.ITiersNoyau>;
    }
}

/***
 * Service concernant le service REST "tiers/v3/recherche"
 * @module ComposantsCommunsConsultationCCE.Services.TiersRecherche
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsConsultationCCE.Services.TiersRecherche {
    /**
     * Classe du service
     */
    class TiersRechercheService implements ITiersRechercheService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        getTiersRecherche(query: ComposantsCommunsConsultationCCE.Modeles.TiersRecherche.ITiersRechercheQuery): ng.IPromise<ComposantsCommunsConsultationCCE.Modeles.TiersRecherche.ITiers[]>;
    }
    /**
     * Interface du service
     */
    interface ITiersRechercheService {
        getTiersRecherche(query: ComposantsCommunsConsultationCCE.Modeles.TiersRecherche.ITiersRechercheQuery): ng.IPromise<ComposantsCommunsConsultationCCE.Modeles.TiersRecherche.ITiers[]>;
    }
}

/***
 * Service concernant le service REST "tiers/v3/adresse"
 * @module ComposantsCommunsConsultationCCE.Services.TiersV3Adresse
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ComposantsCommunsConsultationCCE.Services.TiersV3Adresse {
    /**
     * Classe du service
     */
    class TiersV3AdresseService implements ITiersV3AdresseService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: ComposantsCommunsConsultationCCE.Modeles.TiersV3Adresse.ITiersV3AdresseQuery): ng.IPromise<Array<ComposantsCommunsConsultationCCE.Modeles.TiersV3Adresse.IAdresse>>;
    }
    /**
     * Interface du service
     */
    interface ITiersV3AdresseService {
        getRequest(query: ComposantsCommunsConsultationCCE.Modeles.TiersV3Adresse.ITiersV3AdresseQuery): ng.IPromise<Array<ComposantsCommunsConsultationCCE.Modeles.TiersV3Adresse.IAdresse>>;
    }
}

declare module ComposantsCommunsConsultationCCE {
    function entete(): ng.IDirective;
}

declare module ComposantsCommunsConsultationCCE.Modeles.Referentiels {
    class OperationDateDeValeur {
        static libelleOperation: any;
        static libelleTypeCalendrier: any;
        static libelleDateDevaleurAppliquee: any;
    }
}
