
declare module myway.gestionEpargne.releveLivret {
    var releveLivretModule: any;
}

declare module myway.gestionEpargne.releveLivret {
    /**
     * Données permettant de sauvegarder et restaurer les données du PEL dans le dossier de vente à distance
     *
     */
    class ConstantesReleveLivret {
        static OFFRE_REPRISE_EN_VAD_CORPS: string;
    }
}

declare module myway.gestionEpargne.releveLivret {
    class ReleveCompteConstantes {
        static HABILITATIONS: string[];
        static IDENTIFIANT_PRODUIT_SERVICE_COMPTE: number;
        static IDENTIFIANT_PRODUIT_SERVICE_EPARGNE: number;
        static CAPACITE_01: string;
        static CAPACITE_02: string;
        static CAPACITE_07: string;
        static ERREUR_OUVERTURE: string;
        static ENVOI_LABEL: string;
        static JOUR_LABEL: string;
        static RELEVE_SUPPLEMENTAIRE_LABEL: string;
        static AU_LABEL: string;
        static ADRESSE: string;
        static ADRESSE2: string;
        static A_DEFINIR_LABEL: string;
        static RELEVE_SUPPLEMENTAIRE_BRAILLE_LABEL: string;
        static RELEVE_SUPPLEMENTAIRE_PERSONNE_PROTEGEE_LABEL: string;
        static RELEVE_SUPPLEMENTAIRE_SEPARE_LABEL: string;
        static PERIODICITE_LABEL: string;
        static JOUR_ARRETE_RELEVE_LABEL: string;
    }
    class ReleveCompteControleur {
        private $scope;
        private $rootScope;
        private $q;
        private releveCompteDonneesService;
        private serviceAgentExtended;
        private espaceGlobalService;
        private compteBddCommunService;
        private listeCompteService;
        private epargneCommunService;
        private ggoService;
        private blocMDECRMPService;
        private donneesSauvegardeProduitServiceRMPService;
        private creerDossierDeVenteService;
        private libelleProduitEpargneService;
        private formulaireRMPService;
        static $inject: string[];
        private formulaireReleveCompte;
        formulaireRecapAvenantReleveCompte: FormulaireReleveCompte;
        donneesReleveCompte: DonneesReleveCompte;
        private donneesCompte;
        enModification: boolean;
        enOuverture: boolean;
        enCloture: boolean;
        enPerso: boolean;
        enRecapitulatif: boolean;
        enRestitutionDV: boolean;
        enVAD: boolean;
        idBloc: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        modeAffichage: number;
        codeActeGestion: string;
        private detenteur;
        listePeriodicite: Periodicite[];
        private identifiantProduitService;
        private clientSousTutelle;
        private adressePrincipal;
        private adresseDetenteur;
        adresseLegal: string;
        identifiantRepresentantLegal: string;
        private estHabilite;
        private estSautDeFeuilleAutorise;
        private estSautDeFeuilleActiveParDefaut;
        listePersonnesTableau: Array<IPersonne>;
        private identifiantEntite;
        envoiLabel: string;
        jourLabel: string;
        releveSupplementaireLabel: string;
        auLabel: string;
        adresse: string;
        adresse2: string;
        releveSupplementaireBrailleLabel: string;
        releveSupplementairePersonneProtegeeLabel: string;
        releveSupplementaireSepareLabel: string;
        periodiciteLabel: string;
        jourArreteReleveLabel: string;
        aDefinirLabel: string;
        contexteAppel: string;
        MODE_PRECEDENT: string;
        estInitialise: boolean;
        donneesMDEC: GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        donneesSauvegardeProduitServiceRMP: GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService;
        donneesRestitutionProduitServiceRMP: DonneesSauvegardeProduitServiceRMP;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $q: ng.IQService, releveCompteDonneesService: ReleveCompteDonneesService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, listeCompteService: myway.comInterdomaine.ListeCompteService, epargneCommunService: myway.gestionEpargne.commun.EpargneCommunService, ggoService: myway.gestionEpargne.commun.GgoService, blocMDECRMPService: BlocMDECRMPService, donneesSauvegardeProduitServiceRMPService: DonneesSauvegardeProduitServiceRMPService, creerDossierDeVenteService: myway.gestionEpargne.commun.CreerDossierDeVenteService, libelleProduitEpargneService: myway.gestionEpargne.commun.LibelleProduitEpargneService, formulaireRMPService: FormulaireRMPService);
        /**
         * Renvoie TRUE si le produit est repris et qu'on est en VAD.
         * @returns {boolean}
         */
        private repriseOffreVAD();
        /**
         * Valorise la variable enVAD en fonction du canal de vente
         */
        private estEnVAD();
        private recupererParametrageCaisse();
        private verifierHabilitation();
        private traiterListePersonnes(contexte);
        nourrirTableau(personne: IPersonne): void;
        afficherCacherCheckBoxDeuxiemeReleve(capaciteJuridique: string): void;
        private initialiserFormulaire(releve);
        private creerFormulaireReleveCompte();
        validerDonneesReleveCompte: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerReleveCompte();
        private determinerMode(mode);
        hasModifieChamps(nomChamps: string): boolean;
        private recupererAdressePersonne(personne);
        cocheCaseBraille(): void;
        /**
         * Permet de sauvergarder le formulaire de saisie du RMP dans le dossier de vente,
         * @implements {GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde}
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>}
         */
        sauvegarderDossierDeVente: GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde;
        private construitAdressePourReleveSuplementaire(releve);
        /** Permet de recuperer l'adresse pour envoi du second relevé */
        private recupererAdresseSecondReleve();
        restituerDVRMP(): void;
        /**
         * Permet de determiner si on est en mode restitution du dossier de vente dans la VAD
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {void}
         */
        determinerRestitutionDV(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): void;
        /**
         * Retourne TRUE si un RMP est défini correctement pour le produit
         *  @returns {boolean}
         */
        getFormulaireReleveCompteEstDefini(): boolean;
    }
}

declare module myway.gestionEpargne.releveLivret {
    function mwReleveLivret(): ng.IDirective;
}

declare module myway.gestionEpargne.releveLivret {
    class AdresseRMP {
        codeEtab: string;
        ligne2: string;
        dateCreationAdresse: Date;
        dateRestructurationAdresses: Date;
        dateDerniereMiseAJourAdresse: Date;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        numeroTelephone: string;
        commentaireTelephone: string;
        codePays: string;
        codeInseelocalite: string;
        codeTypeLieu: string;
        codeTypeRetourPtt: string;
        dateDernierRetourPttAdresse: Date;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        codeType: string;
        codeValiditeAdresseUniserv: string;
        codeValiditeAdresseUnimail: string;
        nombreRetourPtt: number;
        nombreModificationsAdresse: number;
        codeValiditeTelephone: string;
        codeExistenceListeRouge: string;
        numeroFAX: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        libelleCommune: string;
        codeIsoPays: string;
        identifiantAdresse: number;
        designationCourte: string;
        codePostalFranceEtranger: string;
        ligne2Adresse38c: string;
        ligne3Adresse38c: string;
        ligne4Adresse38c: string;
        ligne5Adresse38c: string;
        ligne6Adresse38c: string;
        adresseCompleteSecondReleve: string;
    }
}

declare module myway.gestionEpargne.releveLivret {
    class TableauPersonnes {
        listePersonnesTableau: Array<IPersonne>;
        tableOptions: any;
        constructor(listePersonnesTableau: Array<IPersonne>, personnesSelectionnees: Array<IPersonne>, selectionChangeHandler: FormulaireReleveCompte);
    }
    class Periodicite {
        code: string;
        libelle: string;
        constructor(code: string, libelle: string);
    }
    class PeriodiciteEnum {
        static MENSUELLE: Periodicite;
        static BIMENSUELLE: Periodicite;
        static HEBDOMADAIRE: Periodicite;
        static TRIMESTRIELLE: Periodicite;
        static SEMESTRIELLE: Periodicite;
        static ANNUELLE: Periodicite;
        static A_DEFINIR: Periodicite;
        static EPARGNE: Periodicite[];
        static COMPTE: Periodicite[];
        static ALL: Periodicite[];
    }
    class StatutChampsFormulaire {
        private _nomChamps;
        constructor(nomChamps: string);
        getMessageErreur(): string;
    }
    interface IPersonne {
        identifiantPersonne: number;
        identifiantEntite: number;
        destinataire: string;
        adresse: string;
        codeCapaciteJuridique: string;
    }
    class FormulaireReleveCompte extends myway.c0410.commun.ObjetGenerique implements MyWay.UI.ISelectionChangeHandler {
        private _jourReleve;
        private _checkBoxBraille;
        private _checkBoxCompteSepare;
        private _releveCompteModifier;
        periodicite: Periodicite;
        libelleFormatReleve: string;
        releveBraille: boolean;
        releveSepare: boolean;
        deuxiemeReleve: boolean;
        listeJoursReleve: Array<number>;
        listePeriodicite: Array<string>;
        listePersonnesTableau: Array<IPersonne>;
        personnesSelectionnees: Array<IPersonne>;
        tableauPersonnes: MyWay.UI.ImwTableOptions;
        checkBoxDeuxiemeReleve: Object;
        jourReleveEstDefini: boolean;
        Periodicite: Periodicite;
        jourReleve: number;
        checkBoxBraille: Object;
        checkBoxCompteSepare: Object;
        releveCompteModifier: boolean;
        constructor(listePersonnesTableau: Array<IPersonne>, identifiantProduitService: string);
        constructor(listePersonnesTableau: Array<IPersonne>, identifiantProduitService: string, donneesReleveCompte: ReleveDeCompte);
        reinitialiseFormulaire(donneesReleveCompte: ReleveDeCompte): void;
        metAJourFormulaire(checkbox: any): void;
        estValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaire(): myway.c0410.commun.StatutChampsFormulaire[];
        reconstruireListePeriodicite(libellePeriodicite: string): void;
        onSelectionChange(personne: IPersonne): void;
        /**
         * Cette fonction permet de mettre à jour le label du type de relevé de compte à partir de la vue
         */
        mettreAJourLibelle(): void;
        /**
         * Cette fonction permet de mettre à jour le label du type de relevé de compte suivant le relevé qui est coché
         */
        mettreAJourLibelleReleve(mode?: boolean): void;
        creerCheckbox(): void;
    }
}

declare module myway.gestionEpargne.releveLivret {
    class ReleveDeCompte {
        codeEtablissementDuCompte: string;
        codeGuichetDuCompte: string;
        referenceDuCompte: string;
        jourArreteDuReleve: number;
        periodiciteEnvoiDuReleve: string;
        numeroEntiteTitulaire: number;
        modeEnvoiCourrier: string;
        moisProchaineEcheanceReleve: string;
        indicateurReleveSepare: boolean;
        indicateurDoubleDestinataire: boolean;
        indicateurReleveBraille: boolean;
        constructor();
        constructor(donneesRestitutionProduitServiceRMP: DonneesSauvegardeProduitServiceRMP);
    }
    class DonneesReleveCompte {
        releveDeCompte: ReleveDeCompte;
        constructor(donnees: ReleveDeCompte);
        constructor();
        miseAjourDonneesReleveDepuisParametre(compteDeDepot: myway.c0410.commun.DonneesCompte, numeroEntite: number): void;
        miseAjourDuModele(formulaire: FormulaireReleveCompte): void;
    }
}

declare module myway.gestionEpargne.releveLivret {
    interface IRecherche {
        releveMultiProduit: IReleveMultiProduit;
    }
    interface IReleveMultiProduit {
        identifiantReleveMultiProduits: number;
        dateAncienArreteReleveCpte: Date;
        periodiciteArreteRmp: string;
        jourArreteReleveCompte: string;
        indicateurReleveCompteEnBraille: string;
        numeroEntiteTitulaire: number;
        designationBancaire: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        codeDestinationReleveCompte: string;
        codeTarification: string;
        dateAncienArreteRmp: Date;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateProchainArreteReleveCompte: Date;
        periodiciteArreteRmpLivret: string;
        jourReleveHebdomadaire: string;
    }
}

declare module myway.gestionEpargne.releveLivret {
    class FormulaireRMPService {
        private $q;
        static $inject: string[];
        formulaireReleveCompte: FormulaireReleveCompte;
        constructor($q: ng.IQService);
        getDonneesRMPLivretA(): myway.gestionEpargne.commun.IReleveSurLivret;
    }
}

/**
 * Ce service permet d'effectuer les appels aux services REST permettant de
 * récupérer les données d'un releve de compte
 * mettre à jour un releve de compte en avenant
 */
declare module myway.gestionEpargne.releveLivret {
    class ReleveCompteDonneesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private releveCompte;
        private requeteParams;
        private restServiceReleveCompteUrl;
        private static URL_RMP_RECHERCHE;
        private static URL_RMP_ADRESSE;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getReleveDeCompteCache(): ReleveDeCompte;
        /** Requête GET
         *  Permet de récupérer un un releve de compte existant
         *  @return promise<ReleveCompte>
         */
        getReleveDeCompte(numeroEntiteTitulaire: number, codeEtablissementDuCompte: string, referenceDuCompte?: string, codeGuichetDuCompte?: string): ng.IPromise<ReleveDeCompte>;
        /** Requête GET
         *  Permet de recuperer l'adresse legal
         *  @return promise<AdresseRMP>
         */
        getAdresseRMP(codeEtablissement: string, numeroPersonne: number): ng.IPromise<AdresseRMP[]>;
        /** Requête PUT
         *  Permet de modifier un releve de compte
         *  @return promise<ReleveCompte>
         */
        modifierReleveCompte(numeroOffreSouscrite: number, identifiantProduitService: number, releveDeCompte: ReleveDeCompte): ng.IPromise<ReleveDeCompte>;
        /**
         * Service de recherche d'un relevé multi produit existant par entité titulaire.
         * @param {number} numeroEntiteTitulaire Le numéro de l'entité titulaire.
         * @returns {ng.IPromise<IReleveMultiProduit>} Une promesse avec un objet releveMultiProduit.
         */
        rechercherReleveMultiProduit(numeroEntiteTitulaire: number): ng.IPromise<IReleveMultiProduit>;
    }
}

declare module myway.gestionEpargne.releveLivret {
    /**
     * Données permettant de sauvegarder et restaurer les données du RMP dans le dossier de vente à distance
     *
     */
    class DonneesSauvegardeProduitServiceRMP implements GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService {
        version: string;
        jourArreteDuReleve: number;
        periodiciteEnvoiDuReleve: string;
        modeEnvoiCourrier: string;
        moisProchaineEcheanceReleve: string;
        indicateurReleveSepare: boolean;
        indicateurDoubleDestinataire: boolean;
        indicateurReleveBraille: boolean;
        constructor();
    }
}

declare module myway.gestionEpargne.releveLivret {
    /**
     * Ce service gère le bloc MDEC du RMP dans le cadre de la VAD
     */
    class BlocMDECRMPService {
        static $inject: string[];
        constructor();
        creerDonneesMDEC(formulaireReleveCompte: FormulaireReleveCompte): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        determinerReleveSuplementaire(formulaireReleveCompte: FormulaireReleveCompte): string;
    }
}

declare module myway.gestionEpargne.releveLivret {
    /**
     * Ce service gère le bloc MDEC du RMP dans le cadre de la VAD
     */
    class DonneesSauvegardeProduitServiceRMPService {
        static $inject: string[];
        constructor();
        creerDonneesSauvegardeProduitServiceRMP(formulaireReleveCompte: FormulaireReleveCompte): GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService;
    }
}
