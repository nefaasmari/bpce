
declare module myway.c0410.banqueDistance {
    var banqueDistanceModule: ng.IModule;
}

declare module myway.c0410.banqueDistance {
    class BanqueADistanceControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        private modalService;
        private banqueDistanceService;
        private compteBddCommunService;
        static $inject: string[];
        static OUVERTURE: string;
        static MODIFICATION: string;
        static CLOTURE: string;
        static ENVOI_SMS: string;
        static ENVOI_COURRIER: string;
        static AFFICHAGE_ECRAN: string;
        static PREFIX_MESSAGE: string;
        OPTION_CONSULTATION_VALEUR: string;
        OPTION_OPCVM_VALEUR: string;
        OPTION_BOURSE_VALEUR: string;
        COMPTE_ETABLISSEMENT: string;
        COMPTE_IBAN: string;
        DATE_MODIFCATION_BLANC: string;
        ID_GPS_BAD_INTERNET: number;
        ID_GPS_BAD_AUTOMATE: number;
        ID_GPS_BAD_TELEPHONE: number;
        ID_GPS_BAD_TELECONSEILLER: number;
        ID_GPS_BAD_MOBILE: number;
        static CODE_SERVICE_BAD_TABLE_DELOCALISE: string;
        static CODE_OPTION_ET_TARIFICATION_SERVICE_BAD_TABLE_DELOCALISE: string;
        private codeServiceBad;
        private codeOptionServiceBAD;
        private codeTarificationServiceBAD;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        private isModeGenererNouveauMotDePasse;
        private isEnModeDeblocage;
        private isPresentDansPanier;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        idBloc: string;
        private identifiantFormulaire;
        codeActeGestion: string;
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        donneesGeneriqueBad: DonneesGeneriqueBad;
        private formulaireBanqueADistance;
        private formulaireRecapAvenantBad;
        private syntheseComptesColonnes;
        private comptesSelectionnes;
        private niveauServiceBourseColonnes;
        private plafondVirementRetractable;
        private ajouterCompteRetractable;
        private zoneRetractableStatut;
        private plafondVirementRetractableBoutonIcone;
        private ajouterCompteRetractableBoutonIcone;
        private informationBad;
        private donneeContratBad;
        private etatAbonnement;
        tableauSyntheseCompte: Object;
        sauvergardePlafondVirement: IPlafondVirement;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, modalService: MyWay.UI.ModalService, banqueDistanceService: BanqueDistanceService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        verifierSiServiceBadDansLePanier(): void;
        lancerBadEnOuverture(): void;
        lancerBadEnAvenant(): void;
        genererNouveauCode(): void;
        debloquerBad(): void;
        choixPrelevement(servicesSouscrits: IServicesSouscrits): void;
        choixInterrogation(servicesSouscrits: IServicesSouscrits): void;
        validerBlocageDeblocage(): void;
        private bloquerDeloquerBanqueDistance();
        private genererCodeConfidentiel();
        private attribuerNouvelIdentifiant();
        private afficherCodeCondentiel(code);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private verifierComptes(donneeContratBad);
        private affichageCompte();
        enregistrerBanqueDistance(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        private modifierBanqueDistance();
        private cloturerBanqueDistance();
        validerDonneesBanqueDistance: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        getDonneesContratBad(modeDeblocage?: boolean): ng.IPromise<IContratBAD>;
        private getInformationsInitialisationBadTablesDelocalisees();
        private getCodeServiceBad(donneesTableDelocalisee);
        private getCodeOptionServiceBADEtCodeTarificationServiceBAD(donneesTableDelocalisee, codeServiceBad);
        private determinerMode(mode);
        private setMessageRecapitulatif();
        getLibelleGenererNouveauCode(): string;
        private initialiserTableauSyntheseComptes();
        private initialiserTableauNiveauServiceBourse();
        private getTableSyntheseComptesColonnes();
        private getTableNiveauServiceBourseColonnes();
        /**
         * Validation des données banque à distance .
         */
        private validerDonneesBanqueADistance;
        ouvrirPlafondVirements(): void;
        activerAjoutCompte(): void;
        validerAjoutCompte(): void;
        validerPlafondVirement(): void;
        annulerSaisiPlafondVirement(): void;
        getTelephone(medias: GestionGeneriqueOffres.Types.Tiers.Media[]): string;
    }
}

declare module myway.c0410.banqueDistance {
    function mwepBanqueADistance(): ng.IDirective;
}

declare module myway.c0410.banqueDistance {
    class FormulaireBanqueADistance extends myway.c0410.commun.Formulaire {
        BLOCAGE_CODE: string;
        DEBLOCAGE_CODE: string;
        BLOCAGE_LABEL: string;
        DEBLOCAGE_LABEL: string;
        CODE_ACTE_GESTION: string;
        typeService: string;
        numeroTelephone: string;
        messageRecapitulatif: string;
        nomClient: string;
        derniereConnexion: Date;
        identifiantClient: number;
        compteSupportSelectionne: ICompteSupport;
        comptePrelevementSelectionne: ICompteFacturation;
        compteSupports: ICompteSupport[];
        comptePrelevement: ICompteFacturation[];
        genererNouveauCode: boolean;
        attribuerNouvelIdentifiant: boolean;
        bloquerDebloquerChoix: boolean;
        abonnementBloque: boolean;
        blocageOptionLabel: string;
        comptesAbonnement: ICompteAbonnement[];
        comptesDeBourse: ICompteAbonnement[];
        optionSynthese: string;
        typeCompte: string;
        riceEtablissement: MyWay.Model.Rice;
        iban: string;
        libelle: string;
        motDePasseOublie: string;
        plafondVirement: IPlafondVirement;
        constructor(identifiantFormulaire: string);
        setDonnesBanqueDistance(donnees: IContratBAD, informationBad: IInformationBAD): void;
        getStatutAbonnement(): string;
        private mettreAJourLabeEtValeurOptionDeBlocage(donnees);
        updateLabelOptionBloquageDebloquage(donneesBlocage: IEtatAbonnementBAD): void;
        private getComptesBoursesAbonnement(donnees);
        private getComptesSupportsPrelevement(donnees);
        getInformationsChampsInvalidesFormulaire(codeActeGestion?: string): myway.c0410.commun.StatutChampsFormulaire[];
        updateDonneesContratBad(donneesContratBad: IContratBAD): void;
        rasePassageOrdre(): void;
    }
}

declare module myway.c0410.banqueDistance {
    interface IContratBAD {
        abonneBAD: IAbonneBAD;
        abonnementBAD: IAbonnementBAD;
        compteSupport: ICompteSupport;
        comptesAbonnement: Array<ICompteAbonnement>;
        compteFacturation: ICompteFacturation;
    }
    interface IAbonneBAD {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantClientBAD: string;
    }
    interface IAbonnementBAD {
        codeEtablissement: string;
        codeServiceBAD: string;
        codeOptionServiceBAD: string;
        dateDebutAbonnementBAD: Date;
        dateHeureDerniereModificationAbonnementBAD: string;
        optionBourse: string;
        codeTypologieServiceBAD: string;
        libelleTypologieServiceBAD: string;
        codeEtatServiceBAD: string;
        nombreEssaisCodeConfidentielRestant: number;
        codeTarificationServiceBAD: string;
        dateFinAbonnementBAD: Date;
        dateHeureDerniereConnexion: string;
        datePremiereFacturation: Date;
        dateHeureModificationCodeConfidentiel: string;
        motDePasseBAD: string;
    }
    interface ICompteAbonnement {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeTypeProduitService: string;
        statusAbonneSurCompte: string;
        libelleStatusAbonne: string;
        ibanCompte: string;
        bicCompte: string;
        libelleAssocieCompte: string;
        affichageCompte: string;
        typeCompte: string;
        typeUsageCompte: string;
        compteDeBourse: boolean;
        servicesSouscrits: IServicesSouscrits;
        servicesPossibles: IServicesPossibles;
    }
    interface ICompteSupport {
        codeGuichet: string;
        numeroCompte: string;
        codeTypeProduitService: string;
        codeEtablissement: string;
        affichageCompte: string;
    }
    interface IServicesPossibles {
        indicateurInterrogation: boolean;
        indicateurPrelevement: boolean;
        indicateurVirement: boolean;
        indicateurSupport: boolean;
        indicateurOrdreBourse: boolean;
        indicateurFacturation: boolean;
    }
    interface IServicesSouscrits {
        indicateurInterrogation: boolean;
        indicateurPrelevement: boolean;
        indicateurVirement: boolean;
        IndicateurOrdreBourse: boolean;
    }
    interface ICompteFacturation {
        codeGuichet: string;
        numeroCompte: string;
        codeTypeProduitService: string;
        codeEtablissement: string;
        affichageCompte: string;
    }
    interface IInformationBAD {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantClientBAD: string;
        etatAbonnementBADGlobal: string;
        libelleEtatAbonnement: string;
    }
    interface ICodeConfidentiel {
        codeAffecte: string;
        methodeTransmission: string;
    }
    interface IEtatAbonnementBAD {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantClientBAD: string;
        etatAbonnementBADGlobal: string;
        libelleEtatAbonnement: string;
    }
    interface IDetailPlafondVirement {
        codeTypeVirement: string;
        codeDevise: string;
        typeControle: string;
        montantStandard: number;
        montantPersonnalise: number;
        libelleTypeVirement: string;
        montantPersonnaliseMinimumAutorise: number;
        montantPersonnaliseMaximumAutorise: number;
        ordreAffichage: number;
    }
    interface IPlafondVirement {
        plafondsVirement: Array<IDetailPlafondVirement>;
    }
    interface IAffectationIdentificationClientBAD {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantClientBADAncien: string;
        identifiantClientBADNouveau: string;
    }
    class DonneesGeneriqueBad extends myway.c0410.commun.ObjetGenerique {
        static IDENTIANT_DONNEES_BAD: string;
        codeServiceBad: string;
        codeOptionServiceBAD: string;
        codeTarificationServiceBAD: string;
        donneesContratBad: IContratBAD;
        informationBad: IInformationBAD;
        constructor(codeServiceBad?: string, codeOptionServiceBAD?: string, codeTarificationServiceBAD?: string, donneesContratBad?: IContratBAD);
    }
}

declare module myway.c0410.banqueDistance {
    class BanqueDistanceService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restInformationBadServiceURL;
        private restCodeConfidentielBadServiceURL;
        private restEtatAbonnementBadServiceURL;
        private restContratBadURL;
        private restcontroleCompteURL;
        private restplafondVirementURL;
        private affectationIdentificationClientBADURL;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        recupererInformationBanqueDistance(codeEtablissement: string, numeroPersonne: number): ng.IPromise<IInformationBAD>;
        genererCodeConfidentiel(codeEtablissement: string, identifiantPersonne: number, identifiantClientBAD: string, indicateurChoixEnvoiCode: string, codeServiceBAD: string, codeOptionServiceBAD: string, dateHeureDerniereModificationAbonnementBAD: string): ng.IPromise<ICodeConfidentiel>;
        getContratBad(codeEtablissement: string, identifiantClientBAD: string, numeroPersonne: number, codeCapaciteJuridique: string, codeServiceBAD: string): ng.IPromise<IContratBAD>;
        verifierCompteSaisiRice(codeEtablissement: string, libelleAssocieBAD: string, codeGuichet?: string, numeroCompte?: string, cleRice?: string): ng.IPromise<ICompteAbonnement>;
        verifierCompteSaisiIban(codeEtablissement: string, libelleAssocieBAD: string, compteIBAN?: string): ng.IPromise<ICompteAbonnement>;
        creerBanqueDistance(contratBAD: IContratBAD, codeCapaciteJuridique: string, numeroOffreSouscrite: number, identifiantProduitService: number, choixEnvoiCodeConfidetiel: string, codeOptionServiceBAD: string, codeServiceBAD: string, codeTarificationServiceBAD: string): ng.IPromise<IContratBAD>;
        modifierBanqueDistance(contratBAD: IContratBAD, codeCapaciteJuridique: string, numeroOffreSouscrite: number, identifiantProduitService: number): ng.IPromise<IContratBAD>;
        bloquerDebloquerBanqueDistance(codeEtablissement: string, actionAFaire: string, identifiantPersonne: number, identifiantClientBAD: string): ng.IPromise<IEtatAbonnementBAD>;
        affectationIdentificationClientBAD(codeEtablissement: string, identifiantPersonne: number, identifiantClientBAD: string): ng.IPromise<IAffectationIdentificationClientBAD>;
        supprimerBanqueDistance(contratBAD: IContratBAD, numeroOffreSouscrite: number, identifiantProduitService: number): ng.IPromise<void>;
        getPlafondVirementParametrage(codeEtablissement: string, identifiantPersonne: number, identifiantClientBAD: string, codeTypologieServiceBAD: string): ng.IPromise<IPlafondVirement>;
        updatePlafondVirementParametrage(codeEtablissement: string, identifiantPersonne: number, identifiantClientBAD: string, codeTypologieServiceBAD: string, plafondVirement: IPlafondVirement): ng.IPromise<IPlafondVirement>;
    }
}
