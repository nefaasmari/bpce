
declare module GarantieCredit {
    var app: ng.IModule;
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit.Constantes {
    module FormatMoment {
        var FORMAT_REST: string;
    }
    module TypeSurete {
        var PERSONNELLE: string;
        var REELLE: string;
        var AUTRE: string;
    }
    var MODIFICATION_DES_VERSEMENTS_ATTENDUS: string;
    var LISTE_TYPE_VERSEMENT: Array<Modele.ITypeVersement>;
    var LISTE_PERIODICITE: Array<Modele.IPeriodicite>;
}

declare module GarantieCredit.Config {
    module Rest {
        var DOSSIER_CREDIT_GESTION: string;
        var STRUCTURE: string;
        var ENGAGEMENT_PARAMETRE: string;
        var GARANTIE_ENGAGEMENT: string;
        module URL {
            var GARANTIE_CREDIT: string;
            var JUSTIFICATIF_GARANTIE: string;
            var OBJET_PORTE_GARANTIE: string;
            var CARACTERISTIQUE_CREDIT: string;
            var ESTIMATION_OBJET: string;
            var CONSULTATION_CONVENTIONS: string;
            var PARAMETRE: string;
            var MONTANT_COMPTA: string;
            var HABILITATION_GLOBAL: string;
            var SITUATION_HYPOTHEQUE: string;
            var VERSEMENT_ATTENDU: string;
            var DEVISE_LISTE_DEVISE: string;
            var POSTES_FONCTIONNELS_AGENT: string;
            var NATURE_GARANTIE_EPS: string;
            var GARANTIE_EPS: string;
        }
    }
}

declare module GarantieCredit.Modele.Faisabilite {
    class Faisabilite {
        estAutorise: boolean;
        constructor(retoursQR: Array<DTO.IRetourQR>, habilitation: Modele.Habilitation.IHabilitation);
        static getFaisabiliteVide(): Faisabilite;
    }
}

declare module GarantieEps.Modele {
    interface IGarantieEPS {
        natureGarantieSelectionnee: DTO.INature;
        informationsGlobalGarantie: Modele.IDefinitionObjet;
        objetPorteGarantie: GarantieCredit.DTO.ObjetPorteGarantie.IObjetPorteGarantie;
        contexte: GarantieCredit.Modele.IContexte;
    }
    interface IDefinitionObjet {
        dateDebutValidite: Date;
        dateFinValidite: Date;
        montantCouverture: number;
        quotite: number;
        montantFraisGarantie: number;
        acteAuthentiqueSurGarantie: string;
        redacteurActe: string;
        recalculerEcheance: boolean;
        dateRecalculeEcheance: string;
        reversementClient: boolean;
    }
    interface ITypeCautionnement {
        libelle: string;
        code: string;
    }
}

declare module GarantieCredit.Modele {
    interface IContexte {
        codeEtablissement?: number;
        identifiantDossier?: string;
        identifiantCredit?: string;
        codeFamilleProduit?: string;
        numeroRelatif?: string;
        parametrage?: Modele.Parametrage.IParametrage;
    }
    interface IGarantiePourListe extends DTO.IGarantieCredit {
        identifiantDossier?: string;
        identifiantCredit?: string;
        labelMontantOuQuotite?: string;
        checked?: boolean;
    }
    interface IGarantieWrapper {
        identifiantDossier?: string;
        /**
         * La garantie affichée. Cet objet permet d'accéder plus facilement à la garantie souhaitée.
         */
        garantie: DTO.IGarantieCredit;
        /**
         * L'objet complet retourné par la requête Rest. Cet objet sera réutilisé dans son intégralité afin de mettre à jour une garantie.
         */
        garantieGlobal: DTO.IGarantieGlobal;
    }
    interface IObjetPorteGarantieWrapper {
        identifiantDossier?: string;
        typeObjetReglemente?: DTO.IParametreTypeObjetReglemente;
        creditCouvertParGarantie?: DTO.ObjetPorteGarantie.ICreditCouvertParGarantie;
        objetPorteGarantie: DTO.ObjetPorteGarantie.IObjetPorteGarantie;
        objetGarantieGlobal: DTO.ObjetPorteGarantie.IObjetGarantieGlobal;
    }
    interface ICaracteristiqueCredit {
        identifiantDossier: string;
        isGecco: boolean;
    }
    interface ITypeVersement {
        identifiant: string;
        libelle: string;
    }
    interface IPeriodicite {
        identifiant: string;
        libelle: string;
    }
}

declare module GarantieCredit.Modele.Habilitation {
    interface IHabilitation {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeUtilisateur: string;
        codeNatureTraitement: string;
        codeHabilitation: string;
        codeRetour: number;
        codeCategorieEmprunteur: string;
        codeNatureFinancement: string;
        codeTypeMarche: string;
        montantPlafond: number;
    }
    interface IHabilitationCredit {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeUtilisateur: string;
        identifiantElementStructure: string;
        codeCategorieEmprunteur: string;
        codeNatureFinancement: string;
        codeTypeMarche: string;
        codeReponseHabilitation: string;
        codeNatureTraitement: string;
        listeHabilitation: Array<IHabilitation>;
        codeRetour: number;
    }
}

declare module GarantieCredit.Service {
    class QrService {
        protected $q: ng.IQService;
        protected utilitaireService: Service.UtilitaireService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, utilitaireService: Service.UtilitaireService);
        traiter(traitement: Traitement.Traitement): ng.IPromise<any>;
        /**
         * Récupère la réponse du serveur et traite le contenu de retourQR (liste de retourQR)
         * @param {ng.IPromise<any>} promesseInitiale La promesse retourné par l'appel serveur (sendRequest)
         */
        private traiterQr(promesseInitiale, appel, deferredFinTraitement, afficheur, traitement);
        /**
         * Passe à la pop in suivante et l'affiche. Selon le retour, appele le traitement de la pop in suivante ou,
         * dans le cas d'un nouvelle appel serveur (forcage ou confirmation), débute un nouveau traitement de liste
         * de retourQR.
         */
        private traiterPopinSuivante(appel, deferredFinTraitement, afficheur, traitement);
        creerAfficheur(appel: Traitement.AppelQRUnitaire): Traitement.Afficheur;
    }
}
declare module GarantieCredit.Service.Traitement {
    /**
     * Class à étendre pour définir les aspects spécific du traitement (ex: quelle ressources appeler).
     *
     */
    class Traitement {
        result: any;
        constructor();
        messageImpossible: string;
        titreForcage: string;
        titreConfirmation: string;
        preparerDonnees(): void;
        appelerQrInitiale(): ng.IPromise<any>;
        appelerForcage(): ng.IPromise<any>;
        appelerConfirmation(): ng.IPromise<any>;
    }
    class TypeBoite {
        static aucun: TypeBoite;
        static information: TypeBoite;
        static erreur: TypeBoite;
        static forcage: TypeBoite;
        static confirmation: TypeBoite;
        constructor();
        combiner: (autreType: TypeBoite) => TypeBoite;
        decrirePopin: (popin: PopInRetourQR, traitement: Traitement) => DescriptionPopInMessage;
    }
    class PopInRetourQR {
        typePopIn: TypeBoite;
        message: string;
        constructor(texteMessage: string, codeType: number);
        qualifierTypeRetour(codeType: number): TypeBoite;
        decrirePopIn(traitement: Traitement): DescriptionPopInMessage;
    }
    class DescriptionPopInMessage {
        protected message: string;
        constructor(message: string);
        texteBoutonPrincipal: string;
        texteBoutonSecondaire: string;
        titre: string;
        messages: string;
        accepter(appel: AppelQRUnitaire): void;
        refuser(appel: AppelQRUnitaire): void;
    }
    class DescriptionPopInMessageInformation extends DescriptionPopInMessage {
        constructor(message: string);
        texteBoutonPrincipal: string;
        texteBoutonSecondaire: string;
        titre: string;
        accepter(appel: AppelQRUnitaire): void;
    }
    class DescriptionPopInMessageErreur extends DescriptionPopInMessage {
        private messageImpossible;
        constructor(message: string, traitement: Traitement);
        texteBoutonPrincipal: string;
        texteBoutonSecondaire: string;
        titre: string;
        messages: string;
        accepter(appel: AppelQRUnitaire): void;
    }
    class DescriptionPopInForcage extends DescriptionPopInMessage {
        private titreTraitement;
        constructor(message: string, traitement: Traitement);
        texteBoutonPrincipal: string;
        texteBoutonSecondaire: string;
        titre: string;
        accepter(appel: AppelQRUnitaire): void;
        refuser(appel: AppelQRUnitaire): void;
    }
    class DescriptionPopInConfirmation extends DescriptionPopInMessage {
        private titreTraitement;
        constructor(message: string, traitement: Traitement);
        texteBoutonPrincipal: string;
        texteBoutonSecondaire: string;
        titre: string;
        accepter(appel: AppelQRUnitaire): void;
        refuser(appel: AppelQRUnitaire): void;
    }
    class AnalyseurReponse {
        constructor();
        analyser(result: any): Array<PopInRetourQR>;
        private traiterNiveauMessages(niveauConserve, result, listePopIns);
    }
    class Afficheur {
        protected appel: AppelQRUnitaire;
        protected utilitaireService: Service.UtilitaireService;
        constructor(appel: AppelQRUnitaire, utilitaireService: Service.UtilitaireService);
        afficher(description: DescriptionPopInMessage): ng.IPromise<any>;
    }
    class AppelQRUnitaire {
        protected traitement: Traitement;
        protected analyseur: AnalyseurReponse;
        private popIns;
        private popinCourante;
        auMoinsUneErreur: boolean;
        estAbandonne: boolean;
        promesseSuivante: ng.IPromise<any>;
        constructor(traitement: Traitement);
        applerQrInitiale(): void;
        recevoirResultat(result: any): void;
        popinSuivante(): PopInRetourQR;
        private interompreEnchainementPopIn();
        poursuivre(): void;
        poursuivreAvecErreur(): void;
        forcer(message: string): void;
        refuserForcage(): void;
        confirmer(message: string): void;
        annulerConfirmation(): void;
    }
}

declare module GarantieCredit.Modele.Justificatif {
    interface IJustificatif {
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        libelleStatutJustificatif: string;
        dateDerniereMAJStatutElement: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        montantVersementAutoriseJustif?: any;
        montantJustificatif?: any;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
    }
    interface INatureJustif {
        codeClasseJustificatif?: string;
        libelleCodeClasse?: string;
        sousClasseJustificatif?: string;
        libelleSousClasse?: string;
        codeNatureJustificatif?: string;
        libelleNatureJustificatif?: string;
        codeCategorieJustificatif?: string;
        libelleCategorieJustificatif?: string;
        codeJustificatifPeriodique?: string;
        codeNiveauJustificatif?: string;
    }
    interface IDataPourModalJustificatif {
        closeButtonText: string;
        actionButtonText: string;
        headerText: string;
        iconName: string;
        bodyText: string;
        model: IJustificatif;
        traitement: TraitementJustificatif;
        listeNatureJustificatif: Array<INatureJustif>;
        actesSurJustificatif: Faisabilite.Faisabilite;
        typeJustif: string;
        codeDevise: string;
    }
    class TraitementJustificatif extends Service.Traitement.Traitement {
        codeAction: string;
        constructor();
    }
}

declare module GarantieCredit.Modele.MentionsLegales {
    interface IMentionLegalePied {
        codeEtablissement: string;
        codePied: number;
        typeEditique: string;
        typeSaisie: string;
        typeEntete: string;
        ligne1: string;
        ligne2: string;
        ligne6: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligneEntete: string;
    }
    interface IMentionLegaleCorps {
        codeEtablissement: string;
        idEdsInterne: number;
        codeInterneEtab: string;
        codeInterneEtab2: string;
        codeCtrRattachement: string;
        critereRoutageBin: string;
        numTelex: string;
        numTelecopieur: string;
        numSiret: string;
        lieuEnregistrement: string;
        mntDotation: number;
        libEdsChequier: string;
        libEdsDomiciliation: string;
        raisonSociale: string;
        codeCategorieJuridique: string;
        codeBic: string;
        numSiretEtab: string;
        numRcsSiren: string;
        mntCapitalEtab: number;
        numNationalEmetteur: string;
        commentaire1: string;
        commentaire2: string;
        commentaire3: string;
        commentaire4: string;
        numOrias: string;
    }
    interface IMentionLegale {
        corps: IMentionLegaleCorps;
        pied: IMentionLegalePied;
        dateModification: string;
        codeEtablissement: string;
    }
}

declare module GarantieCredit.Modele {
    class ObjetPorteGarantie implements DTO.ObjetPorteGarantie.IObjetPorteGarantie {
        identifiantObjet: string;
        identifiantGarantie: string;
        codeEtatGarantie: string;
        libelleEtatGarantie: string;
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        typeObjet: string;
        libelleTypeObjetCommercial: string;
        dateAcceptationDossierGarantie: string;
        dateFinValiditeGarantie: string;
        montantGarantie: number;
        codeDeviseGarantie: string;
        libelleCleMasque: string;
        hypothequeImmo: DTO.ObjetPorteGarantie.IHypothequeImmo;
        divers: DTO.ObjetPorteGarantie.IDivers;
        hypothequeAerienne: DTO.ObjetPorteGarantie.IHypothequeAerienne;
        antichrese: DTO.ObjetPorteGarantie.IAntichrese;
        bonCaisseCapitalisation: DTO.ObjetPorteGarantie.IBonCaisseCapitalisation;
        cessionDaillyAutres: DTO.ObjetPorteGarantie.ICessionDaillyAutres;
        cessionDaillyLoyer: DTO.ObjetPorteGarantie.ICessionDaillyLoyer;
        contratAssurance: DTO.ObjetPorteGarantie.IContratAssurance;
        delegLoyer: DTO.ObjetPorteGarantie.IDelegLoyer;
        gageCompte: DTO.ObjetPorteGarantie.IGageCompte;
        gageVehicule: DTO.ObjetPorteGarantie.IGageVehicule;
        libre: DTO.ObjetPorteGarantie.ILibre;
        nantissementFondCommerce: DTO.ObjetPorteGarantie.INantissementFondCommerce;
        nantissementPartSocial: DTO.ObjetPorteGarantie.INantissementPartSocial;
        nantissementValeurMateriel: DTO.ObjetPorteGarantie.INantissementValeurMateriel;
        nantissementValeurMobiliere: DTO.ObjetPorteGarantie.INantissementValeurMobiliere;
        listeVersementAttendu: Array<DTO.ObjetPorteGarantie.IVersementAttendu>;
        constructor(typologieObjet: string);
    }
    class DefinitionObjet {
        identifiantObjet: string;
        libellePaysLocalisation: string;
        zoneBanaliseeLongueur32: string;
        codeDestinationAutoriseeObjet: string;
        montantValeurObjetVenale: number;
        montantValeurObjetPrudentielle: number;
        montantValeurObjetAmiable: number;
        montantValeurObjetSaisie: number;
        dateEstimationValeurObjetVenale: string;
        dateEstimationValeurObjetSaisie: string;
        codeTypeObjet: string;
        codeDevise: string;
        indicateurBanalise: string;
        codeModaliteEstimationVenale: string;
        codeModaliteEstimationAmiable: string;
        codeModaliteEstimationSaisie: string;
        codeMotifReestimationVenale: string;
        codeMotifReestimationAmiable: string;
        codeMotifReestimationSaisie: string;
        typeObjetReglemente: string;
        montantNominalObjet: number;
        codeUtilisationObjetDansCredit: string;
        dateEstimationValeurObjetPruden: string;
        dateEstimationValeurObjetAmia: string;
        codeModaliteEstimationPruden: string;
        codeMotifReestimationPruden: string;
        adresseNom: string;
        adresseComplementNom: string;
        adresse: string;
        adresseComplement: string;
        adresseCodePostal: string;
        adresseVille: string;
        codePaysLocalisation: string;
        libelleCleMasque: string;
        codeModaliteOccupation: string;
        listeEstimation: Array<DTO.ObjetPorteGarantie.IEstimation>;
        constructor();
    }
    class Antichrese extends DefinitionObjet implements DTO.ObjetPorteGarantie.IAntichrese {
        description: string;
        referenceCadastre: string;
        numeroLot: string;
        adresseObjet: string;
        rangHypotheque: number;
        constructor();
    }
    class BonCaisseCapitalisation extends DefinitionObjet implements DTO.ObjetPorteGarantie.IBonCaisseCapitalisation {
        description: string;
        etablissement: string;
        numeroCompte: string;
        siren: string;
        valeurBonOrigine: string;
        numeroContrat: string;
        numeroTitre: string;
        natureBon: string;
        dateEcheance: string;
        titreNomPrenomTitulaire: string;
        depositaireTitre: string;
        constructor();
    }
    class CessionDaillyAutres extends DefinitionObjet implements DTO.ObjetPorteGarantie.ICessionDaillyAutres {
        titreNomPrenom: string;
        cede: string;
        constructor();
    }
    class CessionDaillyLoyer extends DefinitionObjet implements DTO.ObjetPorteGarantie.ICessionDaillyLoyer {
        titreNomPrenom: string;
        cede: string;
        adresseImmeuble: string;
        constructor();
    }
    class ContratAssurance extends DefinitionObjet implements DTO.ObjetPorteGarantie.IContratAssurance {
        nomPrenomAssure: string;
        dateNaissance: string;
        siren: string;
        nomCompagnieAssurance: string;
        gestionnaireSiegeSocial: string;
        centreGestion: string;
        typeTechnique: string;
        versementAttendus: string;
        typeVersement: string;
        montant: string;
        dateDebut: string;
        periodicite: string;
        pourcentageApportPersonnel: string;
        montantMinimumSignature: string;
        numeroContrat: string;
        nomContrat: string;
        montantMinVersement: string;
        constructor();
    }
    class DelegLoyer extends DefinitionObjet implements DTO.ObjetPorteGarantie.IDelegLoyer {
        description: string;
        nomAdresseLocataire: string;
        montantAnnuelLoyer: string;
        dateExtinctionBail: string;
        numeroCompte: string;
        nomAdresse: string;
        constructor();
    }
    class Divers extends DefinitionObjet implements DTO.ObjetPorteGarantie.IDivers {
        description: string;
        reference1: string;
        reference2: string;
        adresseObjet: string;
        constructor();
    }
    class GageCompte extends DefinitionObjet implements DTO.ObjetPorteGarantie.IGageCompte {
        description: string;
        etablissement: string;
        numeroCompte: string;
        versementsAttendus: string;
        typeVersement: string;
        montant: string;
        dateDebut: string;
        periodicite: string;
        constructor();
    }
    class GageVehicule extends DefinitionObjet implements DTO.ObjetPorteGarantie.IGageVehicule {
        marque: string;
        numeroImmatriculation: string;
        numeroSerie: string;
        adresseLocalisation: string;
        constructor();
    }
    class HypothequeAerienne extends DefinitionObjet implements DTO.ObjetPorteGarantie.IHypothequeAerienne {
        denominationObjet: string;
        numeroSerie: string;
        numeroImmatriculation: string;
        adresseLocalisation: string;
        rangHypotheque: number;
        constructor();
    }
    class HypothequeImmo extends DefinitionObjet implements DTO.ObjetPorteGarantie.IHypothequeImmo {
        description: string;
        referenceCadastre: string;
        referenceLot: string;
        adresseLocalisation: string;
        typeBien: string;
        typeLogement: string;
        destinationLogement: string;
        surfaceHabitable: number;
        surfaceTerrain: number;
        zoneImplantation: string;
        qualiteEmplacement: string;
        montantDerniereMutation: string;
        dateDerniereMutation: string;
        dateConstruction: string;
        montantAnnuelLoyer: string;
        dateDegrevement: string;
        numeroLotCopropriete: string;
        numeroSection: string;
        rangHypotheque: number;
        constructor();
    }
    class Libre extends DefinitionObjet implements DTO.ObjetPorteGarantie.ILibre {
        libre: string;
        libre2: string;
        libre3: string;
        constructor();
    }
    class NantissementFondCommerce extends DefinitionObjet implements DTO.ObjetPorteGarantie.INantissementFondCommerce {
        denominationFonds: string;
        numeroInscription: string;
        zoneLibre: string;
        adresseLocalisation: string;
        rangHypotheque: number;
        constructor();
    }
    class NantissementValeurMobiliere extends DefinitionObjet implements DTO.ObjetPorteGarantie.INantissementValeurMobiliere {
        description: string;
        etablissement: string;
        numeroCompte: string;
        constructor();
    }
    class NantissementValeurMateriel extends DefinitionObjet implements DTO.ObjetPorteGarantie.INantissementValeurMateriel {
        nomMarqueDenomination: string;
        type: string;
        numeroSerie: string;
        adresseLocalisation: string;
        constructor();
    }
    class NantissementPartSocial extends DefinitionObjet implements DTO.ObjetPorteGarantie.INantissementPartSocial {
        denomination: string;
        numeroEnregistrement: string;
        zoneLibre: string;
        adresseSocieteCivile: string;
        numeroCompte: string;
        constructor();
    }
}

declare module GarantieCredit.Modele.Parametrage {
    interface IParametrage {
        identifiantEmprunteurEps?: string;
        dateDebutCreation?: string;
        dateFinCreation?: string;
        codeDevise?: string;
        retrocession?: boolean;
    }
}

declare module GarantieCredit.Modele {
    interface IObjetRetour {
        retourQR: DTO.IRetourQR[];
    }
}

declare module GarantieCredit.Modele.caracteristiqueEDS {
    interface IInfoEDS {
        typeEDS: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        numeroTelephone: string;
        codePays: string;
        dateDebutValiditeEds: Date;
        dateFinValiditeEds: Date;
        identifiantInterneEDS: number;
        libelleEDS: string;
        referenceExterneEDS: number;
        codeEtablissement: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }
    interface IInfoPosteFonctionnel {
        codeAgent: number;
        typeFonction: string;
        libelleFonction: string;
        codeQualiteAgent: string;
        adresseEMail: string;
    }
    interface IInfoRattachementEDS {
        identifiantEDSRattachement: number;
        referenceEDSRattachement: number;
        typeEDSRattachement: string;
        libelleEDSRattachement: string;
        dateFinValiditeEDSRattachement: Date;
        responsableEDSRattachement: number;
    }
}

declare module GarantieCredit.Modele.PosteFonctionnelAgent {
    interface IRattachementPosteFonctionnel {
        codeIndicateurFinStructure: string;
        identifiantResponsableEDS: number;
        identifiantEDSRattachement: number;
        libelleEDSRattachement: string;
        typeEDSRattachement: string;
        libelleTypeEDSRattachement: string;
        dateFinValiditeEDSRattachement: string;
        referenceEDSRattachement: number;
    }
    interface IInformationPosteFonctionnel {
        typeFonction: string;
        libelleFonction: string;
        codeQualiteAgent: string;
        identifiantPosteFonctionnel: number;
        designationAgent: string;
        referencePosteFonctionnel: number;
        civiliteAgent: string;
        nomFamilleAgent: string;
        nomUsageAgent: string;
        prenomAgent: string;
        dateDebutValiditePF: string;
        dateFinValiditePF: string;
        identSitePosteFonctionnel: number;
        ligne2AdresseSite: string;
        ligne3AdresseSite: string;
        ligne4AdresseSite: string;
        ligne5AdresseSite: string;
        ligne6AdresseSite: string;
        telephonePosteFonctionnel: string;
        emailPosteFonctionnel: string;
        codePaysSite: string;
        codeCanalAppartenance: string;
        informationRattachement: IRattachementPosteFonctionnel;
        codeEtablissement: string;
        codeAgent: number;
    }
    interface IPosteFonctionnelAgent {
        listePosteFonctionnel: Array<IInformationPosteFonctionnel>;
    }
}

declare module GarantieCredit.Modele.SyntheseRelationEngt {
    interface ISyntheseRelationEngt {
        codeEtablissement: number;
        identifiantCredit: string;
        codeDevise: string;
        compteurMiseAJour: number;
        libelleLongProduit: string;
        identifiantEmprunteur: string;
        libelleCourtProduit: string;
        redacteurActe: string;
        codeAuthenticiteContrat: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        listeNature: Array<INature>;
    }
    interface IConvention {
        codeTypeConvention: string;
        codeTypeAssurance: string;
        codeEtablissement: number;
        identifiantIntervenant: string;
        commentaire: string;
        libelleCourt: string;
        libelleLong: string;
        numeroExterne: string;
        commentaireLong: string;
        datePriseEffet: Date;
        dateFinEffet: Date;
        ageMaximumEntreeAssurance: number;
        montantMinimumCredit: number;
        montantMaximumCredit: number;
        unitePeriodeObtention: string;
        dureeMiniCreditObtention: number;
        dureeMaxiCreditObtention: number;
        regleEffetAssurance: string;
        codeModeExpressionGarantie: string;
        quotiteMinimumBeneficiare: number;
        quotiteMaximumBeneficiaire: number;
        pasQuotiteBeneficiaire: number;
        montantMiniParTete: number;
        montantMaxiParTete: number;
        pasMontantParTete: number;
        codeNaturePriseEnCharge: string;
        codeNatureGarantie: string;
        periodiciteReverse: string;
        codeDeterminationDate: string;
        delaiReversement: number;
        codeDestinataireReglementSinistre: string;
        numeroDomiciliation: string;
        codeCommissionIntervenant: string;
        tauxCommissionCaisse: number;
        codeModaliteReglement: string;
        codeEditionInfo: string;
        delaiInformationCaution: number;
        codeTiersGaranti: string;
        codeTypeObjetAutorise: string;
        codeNatureBonification: string;
        dateProchainReversementAppel: Date;
        codeTypeAssiette: string;
        identifiantConvention: string;
    }
    interface INature {
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        typeSurete: string;
        libelleNatureGarantie1: string;
        codeAppelLecheance: string;
        rangGarantie: number;
        libelleLongNatureGarantie: string;
        codeHypothequeSureteComparable: string;
        acteAuthentiqueNatureGarantie: string;
        codeNature: string;
        libelleNature: string;
        codeTypeSurete: string;
        codeActeAuthentiqueNature: string;
        classeGarantie: string;
        libelleCourtNature: string;
        codeTypeAccessoire: string;
        codeAppelEcheance: string;
        codeAccessoireCalculTEG: string;
        numeroOrdreClassement: number;
        numeroRang: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        libelleLongNature: string;
        codeHypothequeRechargeable: string;
        codeHypothequeOuSurete: string;
        indiceImpactAssietteCommission: string;
        indicateurSpecifiqueEPS: string;
        listeAccessoires: Array<IAccessoire>;
        listeTypeObjets: Array<ITypeObjet>;
    }
    interface IAccessoire {
        codeEtablissement: number;
        codeNatureGarantie: string;
        identifiantConvention: string;
        codeTypePhase: string;
        codeTypeAccessoire: string;
        dateFinApplication: Date;
        dateDebutApplication: Date;
        codeModeCalcul: string;
        numeroRegleCalcul: string;
        montantConseille: number;
        montantMinimumPlage: number;
        montantMaximumPlage: number;
        tauxConseille: number;
        tauxMinimum: number;
        tauxMaximum: number;
        montantPlafondTrancheCalcul: number;
        tauxElement: number;
        montantPlafondTrancheCalcul1: number;
        codeTypeAssietteCalcul: string;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantMinimumAccessoireCalcule: number;
        montantMaximumAccessoireCalcule: number;
        montantMiniAccessoireRecouvrement: number;
        numeroRegleApplication: string;
        regleDateDebutApplication: string;
        regleEvenementDeclenche: string;
        periodiciteApplication: string;
        codeRecouvreAccTermeEchu: string;
        uniteDureeApplication: string;
        dureeApplication: number;
        regleAppelAccessoireAperiodique: string;
        codeAccessoireCalculTEG: string;
        codeAccessoireRemboursementFinCredit: string;
        codeAppelEcheance: string;
        modeCalculTaux: string;
        tauxAccessoirePersonnesAgees: number;
        pasMontantAccessoire: number;
        fractionFinancableMaximum: number;
        codeCompatibleInstruction: string;
        codeCompatibleAvenant: string;
        codeCommissionIntervenantExterne: string;
        listeConventions: Array<IConvention>;
    }
    interface ITypeObjet {
        codeNatureGarantie: string;
        typeObjet: string;
        typologieObjet: string;
        typeGarantie: string;
        typeDocumentEditer: string;
    }
}

declare module GarantieCredit.Service {
    class CreditService {
        private serviceLocatorRouteur;
        static $inject: string[];
        private caracteristiqueCreditRestService;
        constructor(serviceLocatorRouteur: Service.ServiceLocator.ServiceRouteur);
        getCreditsDossier(codeEtablissement: number, identifiantDossier: string): ng.IPromise<DTO.ICaracteristiqueCredit[]>;
        /**
         * Récupère les caractéristiques du crédit
         * @param {number} codeEtablissement
         * @param {string} identifiantCredit
         * @returns
         */
        getCaracteristiqueCredit(codeEtablissement: number, identifiantCredit: string): ng.IPromise<Modele.ICaracteristiqueCredit>;
    }
}

declare module GarantieCredit.Service {
    class EngagementParametreService {
        private $q;
        private serviceLocatorRouteur;
        private natureGarantie;
        static $inject: string[];
        private engagementParametreRestService;
        constructor($q: ng.IQService, serviceLocatorRouteur: Service.ServiceLocator.ServiceRouteur);
        /**
         * Retourne la nature de garantie
         * @param {number} codeEtablissement
         * @param {string} codeFamilleProduit
         * @param {string} numeroRelatifProduit
         * @param {boolean} cache (default = true)
         */
        getNatureGarantie(codeEtablissement: number, codeFamilleProduit: string, numeroRelatifProduit: string, cache?: boolean): ng.IPromise<GarantieEps.DTO.INature[]>;
    }
}

declare module GarantieCredit.Service {
    class GarantieEngagementService {
        private $q;
        private serviceLocatorRouteur;
        static $inject: string[];
        private garantieEngagementRestService;
        constructor($q: ng.IQService, serviceLocatorRouteur: Service.ServiceLocator.ServiceRouteur);
        genererCaracteristiqueEps(natureGarantieSelectionnee: GarantieEps.DTO.INature, objetPorteGarantie: DTO.ObjetPorteGarantie.IObjetPorteGarantie, informationsGlobalGarantie: GarantieEps.Modele.IDefinitionObjet, context: Modele.IContexte, accessoires: Array<GarantieEps.DTO.Creation.IAccessoire>, typeObjet: GarantieEps.DTO.ITypeObjet, identifiantGarant: string, organismeCautionnement: GarantieEps.DTO.IOrganismeConvention, convention: GarantieEps.DTO.IConvention, typeCautionnement: GarantieEps.Modele.ITypeCautionnement): GarantieEps.DTO.Creation.ICaracteristique;
        definitionObjet(objet: DTO.ObjetPorteGarantie.IObjetPorteGarantie): DTO.ObjetPorteGarantie.IDefinitionObjet;
        private creerObjetPorteEnGarantiePourCreation(objetLu, codeTypeObjet);
        private proprieteInterdite(nomPropriete);
        private sousProprieteInterdite(nomPropriete);
        /**
         * Création d'une garantie EPS
         * @param {GarantieEps.DTO.Creation.ICaracteristique} caracteristique
         * @return {GarantieEps.DTO.Creation.ICaracteristique}
         */
        postGarantieEps(caracteristique: GarantieEps.DTO.Creation.ICaracteristique): ng.IPromise<GarantieEps.DTO.Creation.ICaracteristique>;
    }
}

declare module GarantieCredit.Service {
    class GarantieService {
        private $q;
        private creditService;
        private serviceLocatorRouteur;
        static $inject: string[];
        retoursQRGetGaranties: Array<DTO.IRetourQR>;
        private garantieCreditRestService;
        private objetPorteGarantieRestService;
        private conventionRestService;
        constructor($q: ng.IQService, creditService: CreditService, serviceLocatorRouteur: Service.ServiceLocator.ServiceRouteur);
        /**
         * Récupère la garantie en parcourant la liste des garanties.
         * @param {Array<Modele.IGarantie>} identifiantCredit
         * @param {string} identifiantGarantie
         * @returns la garantie souhaitée
         */
        getGarantie(codeEtablissement: number, identifiantCredit: string, identifiantGarantie: string): ng.IPromise<Modele.IGarantieWrapper>;
        /**
         * Récupère les garanties d'un crédit
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @returns les garanties du crédit
         */
        getGarantiesCredit(codeEtablissement: number, identifiantCredit: string): ng.IPromise<Modele.IGarantiePourListe[]>;
        /**
         * Récupère les garanties d'un dossier
         * @param {string} codeEtablissement
         * @param {string} identifiantDossier
         * @returns les garanties du dossier
         */
        getGarantiesDossier(codeEtablissement: number, identifiantDossier: string): ng.IPromise<Modele.IGarantiePourListe[]>;
        getMontantCompta(codeEtablissement: number, identifiantCredit: string): ng.IPromise<DTO.IMontantComptaGlobal>;
        /**
         * Récupère une convention par son identifiant
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @param {string} identifiantConvention
         * @returns
         */
        getConvention(codeEtablissement: number, identifiantCredit: string, identifiantConvention: string): ng.IPromise<DTO.IConvention>;
        /**
         * Récupère l'objet porté en garantie pour la garantie
         * @param {string} codeEtablissement
         * @param {string} identifiantDosier
         * @param {string} identifiantCredit
         * @param {string} identifiantGarantie
         * @returns
         */
        getObjetPorteEnGarantie(codeEtablissement: number, identifiantDossier: string, identifiantCredit: string, identifiantGarantie: string): ng.IPromise<Modele.IObjetPorteGarantieWrapper>;
        private getCreditCouvertParGarantie(objetGarantieGlobal, identifiantCredit, identifiantGarantie, identifiantObjet);
        putGarantie(garantieWrapper: Modele.IGarantieWrapper): ng.IPromise<Modele.IObjetRetour>;
        putObjetPorteGarantie(objetWrapper: Modele.IObjetPorteGarantieWrapper): ng.IPromise<Modele.IObjetRetour>;
        /**
         * Teste si la garantie est de type sureté personnelle
         * @param {Modele.IGarantie} garantie
         * @returns boolean
         */
        isSueretePersonnelle(garantie: DTO.IGarantieCredit): boolean;
        /**
         * Teste si la garantie est de type sureté réelle ou autre
         * @param {Modele.IGarantie} garantie
         * @returns boolean
         */
        isSureteReelleOuAutre(garantie: DTO.IGarantieCredit): boolean;
        /**
         * Teste si la garantie est une hypothèque
         * @param {Modele.IGarantie} garantie
         * @returns boolean
         */
        isHypotheque(garantie: DTO.IGarantieCredit): boolean;
        /**
         * Teste si la garantie doit avoir une convention
         * @param {Modele.IGarantie} garantie
         * @returns boolean
         */
        isCautionAvecConvention(garantie: DTO.IGarantieCredit): boolean;
        /**
         * Post pour un justificatif de garantie
         * @param {DTO.IDonneeGarantie} donneGarantie
         * @pram {string} codeAction
         * @returns
         */
        postJustificatifGarantie(donneGarantie: DTO.IDonneeGarantie, codeAction: string): ng.IPromise<DTO.IDonneeGarantie>;
    }
}

declare module GarantieCredit.Service {
    class FournisseurObjetPorteGarantie {
        private garantieService;
        private utilitaireService;
        private parametreService;
        private $q;
        private garantieWrapper;
        objetPorteGarantieWrapper: Modele.IObjetPorteGarantieWrapper;
        montantComptaRevalorise: DTO.IMontantComptaGlobal;
        constructor(garantieService: GarantieService, utilitaireService: UtilitaireService, parametreService: ParametreService, $q: ng.IQService, garantieWrapper: Modele.IGarantieWrapper);
        objetPorteGarantie: DTO.ObjetPorteGarantie.IObjetPorteGarantie;
        typeObjet: string;
        typeObjetReglemente: string;
        description: string;
        premiereEstimation: DTO.ObjetPorteGarantie.IEstimation;
        derniereEstimation: DTO.ObjetPorteGarantie.IEstimation;
        getEstimation(codeEstimation: string): DTO.ObjetPorteGarantie.IEstimation;
        definitionObjet: DTO.ObjetPorteGarantie.IDefinitionObjet;
        obtenirObjetPorteGarantie(): ng.IPromise<Modele.IObjetPorteGarantieWrapper>;
        reevaluerEstimationPrudentielle(): ng.IPromise<void>;
        obtenirRevalorisationComptable(): ng.IPromise<DTO.IMontantComptaGlobal>;
    }
}

declare module GarantieCredit.Service {
    class ParametreService {
        private $q;
        private serviceLocatorRouteur;
        private typeObjetReglementePromise;
        private typeObjetFinancementGarantiePromise;
        private categorieReglementaireAttributionTorPromise;
        private typologiesTypeBienPromise;
        private typologiesZoneImplantationPromise;
        private typologiesCentreGestionPromise;
        private typologiesTypeTechniqueJuridiquePromise;
        private paysPromise;
        private natureGarantie;
        private typeObjetPorteGarantiePromise;
        static $inject: string[];
        private parametreRestService;
        constructor($q: ng.IQService, serviceLocatorRouteur: Service.ServiceLocator.ServiceRouteur);
        /**
         * Retourne la liste des types d'objet reglementé
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeTypeObjetReglemente(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreTypeObjetReglemente[]>;
        /**
         * Retourne le type d'objet réglementé correspondant au code passé en paramètre
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} codeTypeObjetReglemente
         * @returns
         */
        getTypeObjetReglemente(codeEtablissement: number, numeroCredit: string, codeTypeObjetReglemente: string, cache?: boolean): ng.IPromise<DTO.IParametreTypeObjetReglemente>;
        /**
         * Retourne la liste des types objet financement garantie
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeTypeObjetFinancementGarantie(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreTypeObjetFinancementGarantie[]>;
        /**
         * Retourne le type objet financement garantie correspondant au type passé en paramètre
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} typeObjetFinancementGarantie
         * @returns
         */
        getTypeObjetFinancementGarantie(codeEtablissement: number, numeroCredit: string, typeObjetFinancementGarantie: string, cache?: boolean): ng.IPromise<DTO.IParametreTypeObjetFinancementGarantie>;
        /**
         * Retourne la liste des categories reglementaire attribution tor
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeCategorieReglementaireAttributionTor(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreCategorieReglementaireAttributionTor[]>;
        /**
         * Retourne les catégories reglementaire attribution tor correspondantes au code passé en paramètre
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} categReglementaireAttribution
         * @returns
         */
        getCategoriesReglementaireAttributionTor(codeEtablissement: number, numeroCredit: string, categReglementaireAttribution: string, cache?: boolean): ng.IPromise<DTO.IParametreCategorieReglementaireAttributionTor[]>;
        /**
         * Retourne la liste des typologies de centre de gestion
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeTypologieCentreGestion(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie[]>;
        /**
         * Retourne la typologie de centre de gestion correspondant au code passé en paramètre
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} codeTypologie
         * @returns
         */
        getTypologieCentreGestion(codeEtablissement: number, numeroCredit: string, codeTypologie: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie>;
        /**
         * Retourne la liste des typologies de type technique juridique
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeTypologieTypeTechniqueJuridique(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie[]>;
        /**
         * Retourne la typologie de type technique juridique correspondant au code passé en paramètre
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} codeTypologie
         * @returns
         */
        getTypologieTypeTechniqueJuridique(codeEtablissement: number, numeroCredit: string, codeTypologie: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie>;
        private filterTypologies(list, codeTypologie);
        /**
         * Retourne la liste des typologies de zone d'implantation
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeTypologieZoneImplantation(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie[]>;
        /**
         * Retourne la typologie de zone d'implantation correspondant au code passé en paramètre
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} codeTypologie
         * @returns
         */
        getTypologieZoneImplantation(codeEtablissement: number, numeroCredit: string, codeTypologie: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie>;
        /**
         * Retourne la liste des typologies de type de bien
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeTypologieTypeBien(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie[]>;
        /**
         * Retourne la typologie de type de bien correspondant au code passé en paramètre
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} codeTypologie
         * @returns
         */
        getTypologieTypeBien(codeEtablissement: number, numeroCredit: string, codeTypologie: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie>;
        /**
         * Retourne la liste des pays
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListePays(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametrePays[]>;
        /**
         * Retourne la nature de garantie
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {boolean} cache (default = true)
         * @returns
         */
        getNatureGarantie(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreNatureGarantie[]>;
        /**
         * Retourne la liste des types objet porte garantie
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeTypeObjetPorteGarantie(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreTypeObjetPorteGarantie[]>;
        /**
         * Retourne la liste des types objet porte garantie
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeModaliteEstimation(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreEstimation[]>;
        /**
         * Retourne la liste des types objet porte garantie
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeMotifEstimation(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreCodeMotif[]>;
        /**
         * Retourne la liste des typologies de modalite estimation
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @returns
         */
        getListeTypologieModaliteEstimation(codeEtablissement: number, numeroCredit: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie[]>;
        /**
         * Retourne la typologie de modalité estimation correspondant au code passé en paramètre
         * @param {number} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} codeTypologie
         * @returns
         */
        getTypologieModaliteEstimation(codeEtablissement: number, numeroCredit: string, codeTypologie: string, cache?: boolean): ng.IPromise<DTO.IParametreTypologie>;
        loadListesEstimation(codeEtablissement: number, numeroCredit: string, cache: boolean, getListeModalitesVenale: () => DTO.ITypeModalite[], pushListeModalitesVenale: (modaliteVenale: DTO.ITypeModalite) => void, getListeMotifsVenale: () => DTO.IParametreCodeMotif[], pushListeMotifsVenale: (motifVenale: DTO.IParametreCodeMotif) => void, getListeModalitesPrudentielle: () => DTO.ITypeModalite[], pushListeModalitesPrudentielle: (modalitePrudentielle: DTO.ITypeModalite) => void, getListeMotifsPrudentielle: () => DTO.IParametreCodeMotif[], pushListeMotifsPrudentielle: (motifVenale: DTO.IParametreCodeMotif) => void): ng.IPromise<void>;
    }
}

declare module GarantieCredit.Service {
    class RiceService {
        private saisieRiceService;
        static $inject: string[];
        constructor(saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        creerRice(numeroCompte: string): MyWay.Model.Rice;
    }
}

declare module GarantieCredit.Service {
    class StructureService {
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        static $inject: Array<string>;
        private postesFonctionnelsRessource;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Promesse de recupération des postes fonctionnels de l'agent
         * @param {number} codeEtablissement
         * @param {number} codeAgent
         * @returns ng.IPromise<Modele.PosteFonctionnelAgent.IPosteFonctionnelAgent>
         */
        private recupererPostesFonctionnelsLazy(codeEtablissement, codeAgent);
        /**
         * Récupération des postes fonctionnels de l'agent
         * @param {Array<Modele.Habilitation.IHabilitation>} habilitations
         * @param {number} codeEtablissement
         * @param {number} codeAgent
         * @returns ng.IPromise<Modele.PosteFonctionnelAgent.IPosteFonctionnelAgent>
         */
        recupererPostesFonctionnels(codeEtablissement: number, codeAgent: number): ng.IPromise<Modele.PosteFonctionnelAgent.IPosteFonctionnelAgent>;
        /**
         * Retourne si un agent est de type écureil crédit ou pas
         * @param {number} codeEtablissement
         * @param {number} codeAgent
         * @returns ng.IPromise<boolean>
         */
        estUnAgentEcureuilCredit(codeEtablissement: number, codeAgent: number): ng.IPromise<boolean>;
    }
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit.Modele {
    interface ISelectionGarantieHandler {
        onSelectionGarantie: (garantie: DTO.IGarantieCredit) => any;
    }
    interface IListeGarantieCreditOptions {
        codeEtablissement: number;
        identifiantCredit?: string;
        identifiantDossier?: string;
        selectionGarantieHandler?: ISelectionGarantieHandler;
    }
}

declare module GarantieCredit.Service.ServiceLocator {
    class ServiceRouteur {
        private $injector;
        static $inject: string[];
        private implementation;
        constructor($injector: ng.auto.IInjectorService);
        getServiceLocator(): IServiceLocator;
        setImplementation(impl: string): void;
    }
}

declare module GarantieCredit.Service.ServiceLocator {
    /**
     * Implémentation par défaut du service locator
     * à hériter et modifier les méthodes nécessaires
     */
    class ServiceLocatorDefaut implements IServiceLocator {
        protected convention: Interfaces.IConventionRest;
        protected objetPorteGarantie: Interfaces.IObjetPorteGarantieRest;
        protected garantieCredit: Interfaces.IGarantieCreditRest;
        protected caracteristiqueCredit: Interfaces.ICaracteristiqueCreditRest;
        protected justificatifGarantie: Interfaces.IJustificatifGarantieRest;
        protected parametre: Interfaces.IParametreRest;
        protected situationHypotheque: Interfaces.ISituationHypothequeRest;
        protected versementAttendu: Interfaces.IVersementAttenduRest;
        protected engagementParametre: Interfaces.IEngagementParametreRest;
        protected garantieEngagement: Interfaces.IGarantieEngagementRest;
        static $inject: string[];
        constructor(convention: Interfaces.IConventionRest, objetPorteGarantie: Interfaces.IObjetPorteGarantieRest, garantieCredit: Interfaces.IGarantieCreditRest, caracteristiqueCredit: Interfaces.ICaracteristiqueCreditRest, justificatifGarantie: Interfaces.IJustificatifGarantieRest, parametre: Interfaces.IParametreRest, situationHypotheque: Interfaces.ISituationHypothequeRest, versementAttendu: Interfaces.IVersementAttenduRest, engagementParametre: Interfaces.IEngagementParametreRest, garantieEngagement: Interfaces.IGarantieEngagementRest);
        getConvention(): Interfaces.IConventionRest;
        getObjetPorteGarantie(): Interfaces.IObjetPorteGarantieRest;
        getGarantieCredit(): Interfaces.IGarantieCreditRest;
        getCaracteristiqueCredit(): Interfaces.ICaracteristiqueCreditRest;
        getJustificatifGarantie(): Interfaces.IJustificatifGarantieRest;
        getParametre(): Interfaces.IParametreRest;
        getSituationHypotheque(): Interfaces.ISituationHypothequeRest;
        getVersementAttendu(): Interfaces.IVersementAttenduRest;
        getEngagementParametre(): Interfaces.IEngagementParametreRest;
        getGarantieEngagement(): Interfaces.IGarantieEngagementRest;
    }
    /**
     * Service locator
     */
    interface IServiceLocator {
        getConvention(): Interfaces.IConventionRest;
        getObjetPorteGarantie(): Interfaces.IObjetPorteGarantieRest;
        getGarantieCredit(): Interfaces.IGarantieCreditRest;
        getCaracteristiqueCredit(): Interfaces.ICaracteristiqueCreditRest;
        getJustificatifGarantie(): Interfaces.IJustificatifGarantieRest;
        getParametre(): Interfaces.IParametreRest;
        getSituationHypotheque(): Interfaces.ISituationHypothequeRest;
        getVersementAttendu(): Interfaces.IVersementAttenduRest;
        getEngagementParametre(): Interfaces.IEngagementParametreRest;
        getGarantieEngagement(): Interfaces.IGarantieEngagementRest;
    }
}

declare module GarantieCredit.Service {
    class ErreurService {
        private modalService;
        private serviceAgent;
        static $inject: string[];
        static DEFAULT_ERROR_TITLE: string;
        static DEFAULT_ERROR_MESSAGE: string;
        constructor(modalService: MyWay.UI.ModalService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        handleErreur(erreur: MyWay.Services.Erreur): void;
    }
}

declare module GarantieCredit.Service {
    class UtilitaireService {
        private modalService;
        private serviceAgentExtended;
        private structureService;
        static $inject: string[];
        private promesseListeHabilitation;
        constructor(modalService: MyWay.UI.ModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, structureService: Service.StructureService);
        /**
         * Ouvre une modale de type erreur
         * @param {string} titre
         * @param {string} contenu
         * @param {string} libelleBouton
         * @returns ng.IPromise<any>
         */
        modaleErreur(titre: string, contenu: string, libelleBouton: string): ng.IPromise<any>;
        /**
         * Ouvre une modale de type confirmation
         * @param {string} actionButtonText
         * @param {string} closeButtonText
         * @param {string} bodyText
         * @returns ng.IPromise<any>
         */
        modaleConfirmation(actionButtonText: string, closeButtonText: string, headerText: string, bodyText: string): ng.IPromise<any>;
        /**
         * Get une habilitation
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @param {string} codeHabilitation
         * @returns ng.IPromise<Modele.Habilitation.IHabilitation>
         */
        getHabilitation(codeEtablissement: number, identifiantCredit: string, codeHabilitation: string): ng.IPromise<Modele.Habilitation.IHabilitation>;
        /**
         * Parametrage de l'appel des habilitations (récupération du type d'utilisateur) + appel de la fonction appelRessourceHabilitations
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @returns ng.IPromise<Array<Modele.Habilitation.IHabilitation>>
         */
        private getListeHabilitation(codeEtablissement, identifiantCredit);
        /**
         * Fonction d'appel à la ressource des habilitation
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @param {string} codeHabilitation
         * @param {boolean} estEcureuilCredit
         * @returns ng.IPromise<Array<Modele.Habilitation.IHabilitation>>
         */
        private appelRessourceHabilitations(codeEtablissement, identifiantCredit, codesHabilitation, estEcureuilCredit);
        /**
         * Fonction de recherche d'une ou plusieurs habilitation(s) dans la liste des habilitations
         * @param {Array<Modele.Habilitation.IHabilitation>} habilitations
         * @param {string} codeHabilitation
         * @param {boolean} estEcureuilCredit
         * @returns Modele.Habilitation.IHabilitation
         */
        private getHabilitationDansHabilitationsGlobal(codeHabilitation, habilitations);
    }
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit.DTO {
    interface IDevise {
        codeDevise: string;
        libelleDevise: string;
        symboleDevise: string;
        nombreDecimalesReelles: number;
        nombreDecimalesGerees: number;
    }
}

declare module GarantieCredit.Service.Rest {
    class ListeDeviseRestService implements ServiceLocator.Interfaces.IListeDeviseRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getDevises(): ng.IPromise<DTO.IDevise[]>;
        private sendRequestGetListedevise();
    }
}

declare module GarantieCredit.DTO {
    interface ICaracteristiqueCredit {
        tauxCredit: ITauxCredit;
        tempsCredit: IDureeEtDate;
        fraisCredit: IFraisCredit;
        infoGeneraleCredit: IInformationGeneraleCredit;
        montantCredit: IMontantCredit;
        listePhaseCredit: Array<IInformationPhaseCredit>;
        gestionBackOffice: IGestionBackOffice;
        informationRemboursement: IInformationRemboursement;
        informationAvenant: IInformationAvenant;
        listeSinistre: Array<ISinistre>;
        tauxMoyen: IJustifTauxMoyen;
        payeurSecours: IPayeurSecours;
        dureeVersements: IDureeVersement;
        echeance: IEcheance;
        donnneeCredit: IDonneeCredit;
        listeCreditRattache: Array<ICreditRattache>;
        listeDetailsBonificationCredit: Array<IDetailsBonificationCredit>;
        dateJour: Date;
        retourQR: Array<IRetourQR>;
        tauxMoyenPresent: boolean;
    }
    interface IMontantCredit {
        montantOrigineCredit: number;
        montantActualiseCredit: number;
        codeDevise: string;
        montantCapitalRestantSurCredit: number;
        montantImpayeRecouvrer: number;
        montantIndemniteImpaye: number;
        montantMiseDispoFondsEffectuees: number;
        montantAutoriseRA: number;
        seuilMontantRA: number;
    }
    interface IDureeEtDate {
        dureeCredit: number;
        uniteDureeCredit: string;
        dureeAjusteeCreditSuiteRecalcul: number;
        dateEffet: Date;
        dateEcheance: Date;
        dateFinCredit: Date;
        dureeRestantCourir: number;
        dateProchaineRevisionCredit: Date;
        datePrononciationDecheanceTerme: Date;
        dateFinSituationImpaye: Date;
        dateChangementEntiteCredit: Date;
        indicateurPeriodeCompte: boolean;
        dateSignatureRumPayeurSecour: Date;
        dateSignatureMandat: Date;
        identifiantCredit: string;
        dateMiseRecouvrementZero: Date;
        dateAutorRemboursementAnticipe: Date;
        dateErePresentationOrdreRecouvr: Date;
    }
    interface IInformationGeneraleCredit {
        identifiantCreditElementaire: string;
        libelleLongProduit: string;
        codeOrigineCreditDossier: string;
        codeEngagementReconstituable: string;
        indicateurCompte: string;
        soldeDisponible: number;
        libelleEtatCredit: string;
        libelleNatureFinancement: string;
        codeDestinationAutoriseeObjet: string;
        libelleCategorieEmprunteur: string;
        codeReamenagement: string;
        numeroSituationImpaye: number;
        libelleStandard: string;
        codePassageCreditStatutDouteux: string;
        indicateurBanalise1: string;
        codeBlocageActeGestion: string;
        codeIndicExitenceAvenantsCred: boolean;
        zoneBanaliseeAlphanumLongueur: string;
        zoneBanaliseeAlphanumLongueur2: string;
        zoneBanaliseeAlphanumLongueur4: string;
        zoneBanaliseeAlphanumLongueur3: string;
        numeroRegleCalculModaliteImpaye: string;
        libelleModaliteCalculImpaye: string;
        codeTypeTauxModaliteImpaye: string;
        delaiAvantRecouvrement: number;
        codeTypeDomiciliation: string;
        libelleLongModeReglement: string;
        codeTypeDomiciliation2: string;
        libelleModeReglement: string;
        referenceUniqueMandat: string;
        codeRevisabilite: string;
        identifiantDossier: string;
        montantGlobalGarantiCredit: number;
        codeModaliteOccupation: string;
        dateEnvoiConvocationAG: Date;
        codeFamilleControle: string;
        identifiantProduit: string;
        codeAutorisationRA: string;
        nombreEcheanceAccessoiresReport: number;
        numeroModaliteRA: number;
        codeAutorisationRAPartiel: string;
        codeModeRecalculTASuiteRA: string;
        codeDateDebutAutorisationRA: string;
        numDomiciliationSecoursEmpr: string;
        refUniqueMandatPayeurSecour: string;
        numDomiciliationMiseRecouvr: string;
        codeEcheancierVersemContractuel: string;
    }
    interface IFraisCredit {
        cumulFraisDossier: number;
        montantFraisCommission: number;
        codeDevise: string;
        montantFraisGarantie: number;
    }
    interface ITauxCredit {
        tauxEffectifGlobal: number;
        tauxNominalCredit: number;
        libelleModeCalcul: string;
        tauxActuarielCredit: number;
        margeCreditActuariel: number;
        margeAppliquerSurTauxNominal: number;
        signe: string;
        tauxInteretsRetardImpaye: number;
    }
    interface IListeCredits {
        listeCredits: Array<ICaracteristiqueCredit>;
        identifiantEmprunteur: string;
        identifiantCaisse: number;
        compteurMiseAJour: number;
        retourQR: Array<IRetourQR>;
        dateConvocationAG: Date;
    }
    interface ISinistre {
        dateClotureSinistre: Date;
        dateReponseOrganisme: Date;
        identifiantCredit: string;
    }
    interface IAvenantCredit {
        libelleSurCaracteres: string;
        codeAppelWS: number;
    }
    interface IRemboursementAnticipeCredit {
        dateAnnulationModification: Date;
        codeTypeAleaSurPret: string;
        statutAleaSurPret: string;
        codeAnnulationRA: string;
    }
    interface IInformationPhaseCredit {
        codeRetour: number;
        numeroRelatifPhaseCredit: number;
        codeTypePhase: string;
        dureeInitialePhaseCredit: number;
        uniteDureePhase: string;
        tauxMoyenPhaseCredit: number;
        periodiciteCalculInterets: string;
        typeRemboursement: string;
        identifiantCreditElementaire: string;
        montantPartAmortissableCapital: number;
        montantPartInfine: number;
        montantQuotiteAmortissement: number;
        periodiciteApplicProgreEcheance: string;
        alphaNumeriqueBanalisee1: boolean;
        tauxInteretPalier: number;
        amortissementSuppFinPhase: number;
        periodiciteMiseRecouvrInterets: string;
    }
    interface IGestionBackOffice {
        indicateurGestionCentralise: string;
        identifiantCredit: string;
    }
    interface IInformationSinistre {
        listeSinistres: Array<ISinistre>;
        retourQR: Array<IRetourQR>;
    }
    interface IInformationRemboursement {
        listeRemboursementAnticipe: Array<IRemboursementAnticipeCredit>;
        retourQR: Array<IRetourQR>;
    }
    interface IInformationAvenant {
        listeAvenant: Array<IAvenantCredit>;
        retourQR: Array<IRetourQR>;
    }
    interface IJustifTauxMoyen {
        identifiantCredit: string;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        tauxMoyenPhaseCredit: number;
        pourcentageCreditCouvert: number;
        codeEnregistrement: string;
        nombreMois: number;
    }
    interface IPayeurSecours {
        codeTypeDomiciliation: string;
        libelleLongModeReglement: string;
        delaiAvantRecouvrement: number;
        dateSignatureRumPayeurSecour: Date;
        numeroDomiciliationSecoursEmpr: string;
        refUniqueMandatPayeurSecour: string;
    }
    interface IDureeVersement {
        identifiantCredit: string;
        dureePeriodePremierVersement: number;
        unitePeriodePremierVersement: string;
        dureePeriodeVersement: number;
        uniteDureeVersements: string;
        dateMiseRecouvrementZero: Date;
        codeTypeModification: string;
        retourQR: Array<IRetourQR>;
        identifiantCaisse: number;
        dateDerniereMAJStatutElement: Date;
        indicateurBanalise: string;
        compteurMiseAJour: number;
        codeNatureJustificatif: string;
        dureeInitialePhaseCredit: number;
        uniteDureePhase: string;
        codeEditionClient: string;
        codeEnvoiAvisEcheance: string;
        nombrePersonnesACharge: number;
        montantPrimeEpargneLogement: number;
        codeDevise: string;
        montantForfaitaireEcheance: number;
        referenceExterneJustificatif: string;
        codeEligibiliteAPL: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        listeNatureJustificatif: Array<INatureJustificatif>;
        codeMiseRecouvrementZero: string;
        ancienneDateMER0: Date;
        natureJustificatif: INatureJustificatif;
        codeTypeModificationCredit6: string;
        codeTypeModificationCredit7: string;
        codeTypeModificationCredit: string;
        dateLimitePremiereMiseDispoFond: Date;
        dateLimiteMiseDispoFondsCredit: Date;
        codeLimitePremiereMiseDispoFond: string;
        codeLimiteMiseDispoFondsCredit: string;
    }
    interface IEcheance {
        montantProchaineEcheance: number;
        codeDevise: string;
        dateEcheance: Date;
        dateActiveEchance: Date;
        dateDecisionOrdre: Date;
        datePremierePresentation: Date;
        dateActiveDerniereEcheance: Date;
        dateDecisionCaisse: Date;
        libTypeEcheancePremierRecouv: string;
        libTypeEcheanceDernierRecouv: string;
    }
    interface IDonneeCredit {
        identifiantCredit: string;
        dateDecision: Date;
        dateEffet: Date;
        dateCloture: Date;
        dateAnnulationModification: Date;
        identifiantEmprunteur: string;
        libelleTiers: string;
        identifiantDossierCommercial: string;
        identifiantAncieneCredit: string;
        identifiantObjet: string;
        typeObjetReglemente: string;
        codeCategorieEmprunteur: string;
        codeDevise: string;
        codeExistJustifDeclenchement: string;
        codeFamilleControle: string;
        codeOrigineCredit: string;
        indicateurBanalise: string;
        codeModificationAutorise: string;
        numeroRelatif: number;
        listeJustificatif: Array<IJustificatifCredit>;
        retourQR: Array<IRetourQR>;
        categorieReglementAttribution: string;
        codeEtablissement: number;
        compteurMiseAJour: number;
    }
    interface IJustificatifCredit {
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        libelleStatutJustificatif: string;
        dateDerniereMAJStatutElement: Date;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        dateLimiteReceptionJustificatif: Date;
        referenceExterneJustificatif: string;
        montantVersementAutoriseJustif: number;
        montantJustificatif: number;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: Date;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
        zoneBanalise: string;
    }
    interface INatureJustificatif {
        codeClasseJustificatif: string;
        sousClasseJustificatif: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
    }
    interface IDetailsBonificationCredit {
        identifiantCaisse: number;
        identifiantCredit: string;
        montantBonifReelleTiers: number;
        montantBonifReelleEtab: number;
        montantBonifTheoriqueTiers: number;
        montantBonifTheoriqueEtab: number;
        dateDemandeDequalification: Date;
    }
    interface ICreditRattache {
        identifiantCaisse: number;
        identifiantCredit: string;
        identifiantDossierCommercial: string;
        codeBanque: string;
        identifiantAncienCredit: string;
        identifiantDossierOrigine: string;
        codeFamilleProduit: string;
        numeroRelatifProduit: string;
        codeAppartenanceReseau: string;
        typeAppartenanceReseau: string;
        dateCloture: Date;
        montantResteDuPretRachete: number;
        montantEcheancePretRachete: number;
        periodiciteConcours: string;
        dateFinCredit: Date;
        libelleLongProduit: string;
        typeLoi: string;
        codeTypeCredit: number;
        etablissementPreteur: string;
        typeLienCreance: string;
        codeTypeDomiciliation: string;
        domiciliationNumeroCompte: string;
    }
    interface IJustificatifTauxMoyenGlobal {
        listeJustifTauxMoyen: Array<IJustifTauxMoyen>;
        retourQR: Array<IRetourQR>;
    }
}

declare module GarantieCredit.Service.Rest {
    class CaracteristiqueCreditRestService implements ServiceLocator.Interfaces.ICaracteristiqueCreditRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupère les caracteristique d'un crédit ou d'un dossier
         * @param {string} codeEtablissement
         * @param {string} numeroDossier
         * @param {string} numeroCredit
         * @returns un objet contenant les caractéristique
         */
        getCaracteristiqueCredit(codeEtablissement: number, numeroDossier: string, numeroCredit: string): ng.IPromise<DTO.IListeCredits>;
        /**
         * Méthode privée pour l'envoi de la requête : getCaracteristiqueCredit
         * @param {string} codeEtablissement
         * @param {string} numeroDossier
         * @param {string} numeroCredit
         * @returns
         */
        private sendRequestGetCaracteristiqueCredit(codeEtablissement, numeroDossier, numeroCredit);
    }
}

declare module GarantieCredit.DTO {
    interface IConventionGenerale {
        listeConvention: Array<IConvention>;
        retourQR: Array<IRetourQR>;
    }
    interface IConvention {
        identifiantConvention: string;
        codeTypeConvention: string;
        libelleLongConvention: string;
        identifiantIntervenant: string;
        datePriseEffetConvention: Date;
        dateFinEffetConvention: Date;
        tauxCommissionCaisse: number;
        listeAccessoires: Array<IAccessoire>;
        listeRegleEligibilite: Array<IRegleEligibilite>;
        infoBonif: IInformationBonification;
    }
    interface IAccessoire {
        identifiantConvention: string;
        codeTypePhase: string;
        numeroPhase: number;
        codeNatureAccessoire: string;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        periodiciteApplicationElement: string;
        dateDebutApplicationElement: Date;
        dateFinApplicationElement: Date;
        montantElement: number;
        dateAppelAccessoire: Date;
        codeDevise: string;
        tauxElement: number;
        libelleLongMotif: string;
        identifiantAssurance: string;
        tauxElement1: number;
        tauxElement2: number;
        tauxElement3: number;
        tauxElement4: number;
        montantPlafondCalculAccessoire: number;
        montantPlafondCalculAccessoire2: number;
        montantPlafondCalculAccessoire1: number;
        montantPlafondCalculAccessoire3: number;
        montantPlafondCalculAccessoire4: number;
    }
    interface IRegleEligibilite {
        codeEtablissement: number;
        identifiantConvention: string;
        codeRegleEligibilite: string;
        valeurRegle: string;
    }
    interface IInformationBonification {
        codeEtablissement: number;
        identifiantConvention: string;
        libelleProduitConvention: string;
        nombrePaiementsBonification: number;
        indicateurDateExigibilite: string;
        codeTypePartenaire: string;
        codeNatureBonification: string;
        codeNatureBonificationPourRap: string;
        codeNatureBonifPourAnnulCredit: string;
        libelleTiers: string;
    }
}

declare module GarantieCredit.Service.Rest {
    class ConventionRestService implements ServiceLocator.Interfaces.IConventionRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupère la liste des garanties liées à un crédit
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @returns la liste des conventions liées au crédit
         */
        getConventions(codeEtablissement: number, identifiantCredit: string): ng.IPromise<DTO.IConvention[]>;
        /**
         * Méthode privée pour l'envoi de la requête : getConsultationConventions
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @returns un objet contenant la liste des conventions
         */
        private sendRequestGetConsultationConventions(codeEtablissement, identifiantCredit);
    }
}

declare module GarantieCredit.DTO.EstimationObjet {
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IMajEstimationGlobal {
        codeEtablissement: number;
        identifiantCredit: string;
        identifiantDossier: string;
        dateTraitement: string;
        indicateurDemandeMiseAJour: string;
        compteurMiseAJour: number;
        majEstimation: IMajEstimation;
    }
    interface IMajEstimation {
        identifiantObjet: string;
        descriptionObjet: string;
        referenceExterneObjet: string;
        referenceTypeLot: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4CodePostal: string;
        adresseLigne5Commune: string;
        adresseLigne1Suite: string;
        libellePaysLocalisation: string;
        detailOperationImmobiliere: string;
        typeLogement: string;
        zoneBanaliseeLongueur32: string;
        codeDestinationAutoriseeObjet: string;
        surfaceHabitableM2: number;
        surfaceTerrainM2: number;
        codeZoneImplantation: string;
        codeQualiteEmplacement: string;
        descriptionObjet1: string;
        descriptionObjet2: string;
        dateFinConstructionObjet: string;
        descriptionObjet3: string;
        descriptionObjet4: string;
        descriptionObjet5: string;
        descriptionObjet6: string;
        descriptionObjet7: string;
        codeVersementAttendu: string;
        montantValeurObjetVenale: number;
        montantValeurObjetPrudentielle: number;
        montantValeurObjetAmiable: number;
        montantValeurObjetSaisie: number;
        dateEstimationValeurObjetVenale: string;
        dateEstimationValeurObjetPruden: string;
        dateEstimationValeurObjetAmia: string;
        dateEstimationValeurObjetSaisie: string;
        codeTypeObjet: string;
        codeDevise: string;
        dateDegrevement: string;
        indicateurBanalise: string;
        codeModaliteEstimationVenale: string;
        codeModaliteEstimationPruden: string;
        codeModaliteEstimationAmiable: string;
        codeModaliteEstimationSaisie: string;
        codeMotifReestimationVenale: string;
        codeMotifReestimationPruden: string;
        codeMotifReestimationAmiable: string;
        codeMotifReestimationSaisie: string;
        typeObjetReglemente: string;
        montantNominalObjet: number;
        codeUtilisationObjetDansCredit: string;
    }
}

declare module GarantieCredit.DTO {
    interface IGarantieCredit {
        identifiantGarantie: string;
        capitalCouvertGarantie: number;
        codeDeviseGarantie: string;
        pourcentageCreditCouvert: number;
        dateValeurGestionnaire: string;
        datePriseEffetGarantie: string;
        dateFinValiditeGarantie: string;
        dureeValiditeGarantie: number;
        montantAccessoire: number;
        dureeApplicationElement: number;
        uniteDureeApplicElement: string;
        acteAuthentiqueSurGarantie: boolean;
        codeNatureCautionnement: string;
        montantGarantie: number;
        rangHypotheque: number;
        numeroSecondRangHypotheque: number;
        codeValeurPacteCommissoire: string;
        dateFinEffetConvention: string;
        codeHypothequeRechargeable: string;
        codeGarantieDouteuse: string;
        libelleLongConvention: string;
        numeroExterneGarantie: string;
        libelleNatureGarantie: string;
        libelleTiers: string;
        listeJustificatifs: IDonneeGarantie;
        montantCouvertHypothRgAnterieur: number;
        sommeDernMontantEncoursCompta: number;
        typeSurete: string;
        classeGarantie: string;
        dernierMontantEncours: string;
        redacteurActe: string;
        identifiantGarantie1: string;
        codeGarantieRechargeableEx: string;
        dateFinAffectationCredit: string;
        commentaireGarantie: string;
        codeTypeConvention: string;
        listeAccessoireGarantie: Array<IAccessoireGarantie>;
    }
    interface IObjetEnGarantie {
        listeEstimation: Array<IEstimationObjet>;
    }
    interface IEstimationObjet {
    }
    interface IJustificatifGarantie {
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        libelleStatutJustificatif: string;
        dateDerniereMAJStatutElement: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        montantVersementAutoriseJustif: number;
        montantJustificatif: number;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
    }
    interface IMontantCompta {
        identifiantGarantie: string;
        dernierMontantEncoursCompta: number;
    }
    interface IDonneeGarantie {
        identifiantGarantie: string;
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        codeEtatGarantie: string;
        libelleEtatGarantie: string;
        datePriseEffetGarantie: string;
        dateFinValiditeGarantie: string;
        dateClotureGarantie: string;
        dateAnnulationGarantie: string;
        libelleTiers: string;
        denominationClient: string;
        identifiantCredit: string;
        identifiantConvention: string;
        montantGarantie: number;
        codeDeviseGarantie: string;
        numeroRelatif: number;
        zoneBanaliseA: string;
        zoneBanaliseB: string;
        indicateurBanalise1: string;
        indicateurBanalise2: string;
        codeModificationAutorisee: string;
        codeVoieParee: string;
        dureeValiditeGarantie: number;
        identifiantEmprunteur: string;
        listeJustificatif: Array<IJustificatifGarantie>;
        listeNatureJustif: Array<INatureJustif>;
        retourQR: Array<IRetourQR>;
        identifiantGarant: string;
        numeroExterneConvention: string;
        codeValeurPacteCommissoire: string;
        codeEtablissement: number;
        codeDevise: string;
        compteurMiseAJour: number;
    }
    interface IJustificatifGarantieGlobal {
        listeJustificatif: Array<IJustificatifGarantie>;
        listeDonneeGarantie: Array<IDonneeGarantie>;
        listeNatureJustif: Array<INatureJustif>;
    }
    interface INatureJustif {
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClasseJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        libelleCategorieJustificatif: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustificatif: string;
        codeCategorieJustificatif: string;
    }
    interface IGarantieGlobal {
        listeGarantieCredit: Array<IGarantieCredit>;
        retourQR: Array<IRetourQR>;
        codeEtablissement: number;
        identifiantCredit: string;
        codeDevise: string;
        compteurMiseAJour: number;
        libelleLongProduit: string;
        libelleCourtProduit: string;
        redacteurActe: string;
        codeAuthenticiteContrat: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        identifiantEmprunteur: string;
        montantValorisation: IMontantRevalorisation;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IMontantRevalorisation {
        codeEtablissement: number;
        identifiantObjet: string;
        dateEstimationValeurObjetPruden: string;
        montantValeurObjetPrudentielle: number;
        codeModaliteEstimationPruden: string;
        codeMotifReestimationPruden: string;
    }
    interface IMontantComptaGlobal {
        listeMontantCompta: Array<IMontantCompta>;
        montantRevalorisation: IMontantRevalorisation;
    }
    interface IAccessoireGarantie {
        identifiantGarantie: string;
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        codeModeDeCalculAccessoire: string;
        natureAccessoirePeriodique: string;
        dateAppelAccessoire: string;
        codeAppelEcheance: string;
        codeCommissionIntervenantExt: string;
        listeDetailAccessoire: Array<IDetailsAccessoireGarantie>;
    }
    interface IDetailsAccessoireGarantie {
        identifiantGarantie: string;
        codeTypeAccessoire: string;
        numeroRelatifPhaseCredit: number;
        codeTypePhase: string;
        periodiciteApplicationElement: string;
        montantElement: number;
        montantPlafondTranche: number;
        tauxElement: number;
        montantPlafondTranche1: number;
        tauxElement1: number;
        montantPlafondTranche2: number;
        tauxElement2: number;
        montantPlafondTranche3: number;
        tauxElement3: number;
        tauxElement4: number;
        libelleTypeAssietteCalcul: string;
        montantPlafondTranche4: number;
    }
}

declare module GarantieCredit.Service.Rest {
    class GarantieCreditRestService implements ServiceLocator.Interfaces.IGarantieCreditRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupère la liste des garanties liées à un crédit
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @returns la liste des garanties liées au crédit
         */
        getGaranties(codeEtablissement: number, identifiantCredit: string): ng.IPromise<DTO.IGarantieGlobal>;
        putGarantie(garantieWrapper: Modele.IGarantieWrapper): ng.IPromise<DTO.IRetourQR[]>;
        private sendRequestGetGarantieCreditGlobal(codeEtablissement, identifiantCredit);
        private sendRequestPutGarantieCredit(identifiantDossier, garantie);
        sendRequestGetMontantCompta(codeEtablissement: number, identifiantCredit: string): ng.IPromise<DTO.IMontantComptaGlobal>;
        /**
         * Méthode le post d'un justificatif de garantie
         * @param {DTO.IDonneeGarantie} donneGarantie
         * @param {string} codeAction
         * @returns void
         */
        postJustificatifGarantie(donneGarantie: DTO.IDonneeGarantie, codeAction: string): ng.IPromise<DTO.IDonneeGarantie>;
    }
}

declare module GarantieCredit.DTO.JustificatifGarantie {
    interface IJustificatifGarantie {
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        libelleStatutJustificatif: string;
        dateDerniereMAJStatutElement: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        montantVersementAutoriseJustif: number;
        montantJustificatif: number;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
    }
    interface IDonneeGarantie {
        identifiantGarantie: string;
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        codeEtatGarantie: string;
        libelleEtatGarantie: string;
        datePriseEffetGarantie: string;
        dateFinValiditeGarantie: string;
        dateClotureGarantie: string;
        dateAnnulationGarantie: string;
        libelleTiers: string;
        denominationClient: string;
        identifiantCredit: string;
        identifiantConvention: string;
        montantGarantie: number;
        codeDeviseGarantie: string;
        numeroRelatif: number;
        zoneBanaliseA: string;
        zoneBanaliseB: string;
        indicateurBanalise1: string;
        indicateurBanalise2: string;
        codeModificationAutorisee: string;
        codeVoieParee: string;
        dureeValiditeGarantie: number;
        identifiantEmprunteur: string;
        listeJustificatif: Array<IJustificatifGarantie>;
        listeNatureJustif: Array<INatureJustif>;
        retourQR: Array<IRetourQR>;
        identifiantGarant: string;
        numeroExterneConvention: string;
        codeValeurPacteCommissoire: string;
        codeEtablissement: number;
        codeDevise: string;
        compteurMiseAJour: number;
    }
    interface INatureJustif {
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClasseJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        libelleCategorieJustificatif: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustificatif: string;
        codeCategorieJustificatif: string;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
}

declare module GarantieCredit.Service.Rest {
    class JustificatifGarantieRestService implements ServiceLocator.Interfaces.IJustificatifGarantieRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        setJustificatifsDansGarantie(codeEtablissement: number, identifiantCredit: string, garantie: DTO.IGarantieCredit): ng.IPromise<void>;
        /**
         * Récupère la liste des justificatif liés à une garantie
         * @param {number} codeEtablissement
         * @param {string} identifiantCredit
         * @param {string} identifiantGarantie
         * @returns la liste des justificatif liés à une garantie
         */
        getJustificatifGarantie(codeEtablissement: number, identifiantCredit: string, identifiantGarantie: string): ng.IPromise<DTO.JustificatifGarantie.IDonneeGarantie>;
        private sendRequestGetJustificatifGarantie(codeEtablissement, identifiantCredit, identifiantGarantie);
    }
}

declare module GarantieCredit.DTO.ObjetPorteGarantie {
    interface IObjetGarantieGlobal {
        identifiantCaisse: number;
        identifiantCredit: string;
        codeDevise: string;
        compteurMiseAJour: number;
        identifiantEmprunteur: string;
        libelleLongProduit: string;
        libelleCourtProduit: string;
        redacteurActe: string;
        codeAuthenticiteContrat: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        listeObjetsPortesGarantie: Array<IObjetPorteGarantie>;
        listeCreditsCouvertsParGarantie: Array<ICreditCouvertParGarantie>;
        listeTypologiesInstruction: Array<ITypologieInstruction>;
        listeMotifsEstimation: Array<IMotifEstimation>;
        listeParamsModaliteEtMotif: Array<IParametrageModaliteMotifEstimation>;
        retourQR: Array<IRetourQR>;
    }
    interface IObjetPorteGarantie {
        identifiantObjet: string;
        identifiantGarantie: string;
        codeEtatGarantie: string;
        libelleEtatGarantie: string;
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        typeObjet: string;
        libelleTypeObjetCommercial: string;
        dateAcceptationDossierGarantie: string;
        dateFinValiditeGarantie: string;
        montantGarantie: number;
        codeDeviseGarantie: string;
        libelleCleMasque: string;
        hypothequeImmo: IHypothequeImmo;
        divers: IDivers;
        hypothequeAerienne: IHypothequeAerienne;
        antichrese: IAntichrese;
        bonCaisseCapitalisation: IBonCaisseCapitalisation;
        cessionDaillyAutres: ICessionDaillyAutres;
        cessionDaillyLoyer: ICessionDaillyLoyer;
        contratAssurance: IContratAssurance;
        delegLoyer: IDelegLoyer;
        gageCompte: IGageCompte;
        gageVehicule: IGageVehicule;
        libre: ILibre;
        nantissementFondCommerce: INantissementFondCommerce;
        nantissementPartSocial: INantissementPartSocial;
        nantissementValeurMateriel: INantissementValeurMateriel;
        nantissementValeurMobiliere: INantissementValeurMobiliere;
        listeVersementAttendu: Array<IVersementAttendu>;
    }
    interface IDefinitionObjet {
        identifiantObjet: string;
        libellePaysLocalisation: string;
        zoneBanaliseeLongueur32: string;
        codeDestinationAutoriseeObjet: string;
        montantValeurObjetVenale: number;
        montantValeurObjetPrudentielle: number;
        montantValeurObjetAmiable: number;
        montantValeurObjetSaisie: number;
        dateEstimationValeurObjetVenale: string;
        dateEstimationValeurObjetSaisie: string;
        codeTypeObjet: string;
        codeDevise: string;
        indicateurBanalise: string;
        codeModaliteEstimationVenale: string;
        codeModaliteEstimationAmiable: string;
        codeModaliteEstimationSaisie: string;
        codeMotifReestimationVenale: string;
        codeMotifReestimationAmiable: string;
        codeMotifReestimationSaisie: string;
        typeObjetReglemente: string;
        montantNominalObjet: number;
        codeUtilisationObjetDansCredit: string;
        dateEstimationValeurObjetPruden: string;
        dateEstimationValeurObjetAmia: string;
        codeModaliteEstimationPruden: string;
        codeMotifReestimationPruden: string;
        adresseNom: string;
        adresseComplementNom: string;
        adresse: string;
        adresseComplement: string;
        adresseCodePostal: string;
        adresseVille: string;
        codePaysLocalisation: string;
        libelleCleMasque: string;
        codeModaliteOccupation: string;
        listeEstimation: Array<IEstimation>;
        adresseDqe?: myway.comAdresseDqe.Adresse;
    }
    interface ICreditCouvertParGarantie {
        identifiantObjet: string;
        identifiantGarantie: string;
        identifiantCredit: string;
        pourcentageCreditCouvert: number;
        dateAffectationGarantieCredit: string;
        dateFinAffectGarantieCredit: string;
    }
    interface ITypologieInstruction {
        typeDeTypologie: string;
        codeDeTypologie: string;
        intitule: string;
    }
    interface IVersementAttendu {
        typeVersement: string;
        codePeriodicite: string;
        montantVersementattendu: number;
        dateDebutVersementAttendu: string;
        dateFinVersementAttendu: string;
        codeDevise?: string;
        identifiantObjet?: string;
        identifiantCaisse?: number;
        numeroRelatif?: number;
        identifiantDossierInstruction?: string;
        numeroRelatifObjetDossier?: number;
    }
    interface IMotifEstimation {
        codeMotifReestimation: string;
        libelleLongMotif: string;
    }
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IParametrageModaliteMotifEstimation {
        identifiantCaisse: number;
        typeEstimation: string;
        codeModaliteEstimation: string;
        codeMotifReestimation: string;
    }
    interface IMajObjetGarantieGlobal {
        codeEtablissement: number;
        identifiantCredit: string;
        dateTraitement: string;
        identifiantDossier: string;
        majObjetPorteGarantie: IMajObjetPorteGarantie;
        compteurMiseAJour: number;
        indicateurDemandeMiseAJour: string;
    }
    interface IMajObjetPorteGarantie {
        identifiantCaisse: number;
        identifiantObjet: string;
        identifiantGarantie: string;
        typeObjetReglemente: string;
        montantNominalObjet: number;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4CodePostal: string;
        adresseLigne5Commune: string;
        codePaysLocalisation: string;
        referenceExterneObjet: string;
        referenceTypeLot: string;
        descriptionObjet: string;
        codeDestinationAutoriseeObjet: string;
        codeZoneImplantation: string;
        codeQualiteEmplacement: string;
        detailOperationImmobiliere: string;
        typeLogement: string;
        dateDegrevement: string;
        descriptionObjet1: string;
        descriptionObjet2: string;
        descriptionObjet3: string;
        descriptionObjet4: string;
        descriptionObjet5: string;
        surfaceHabitableM2: number;
        surfaceTerrainM2: number;
        codeVersementAttendu: string;
        descriptionObjet6: string;
        descriptionObjet7: string;
    }
    interface IDivers extends IDefinitionObjet {
        description: string;
        reference1: string;
        reference2: string;
        adresseObjet: string;
    }
    interface IHypothequeImmo extends IDefinitionObjet {
        description: string;
        referenceCadastre: string;
        referenceLot: string;
        adresseLocalisation: string;
        typeBien: string;
        typeLogement: string;
        destinationLogement: string;
        surfaceHabitable: number;
        surfaceTerrain: number;
        zoneImplantation: string;
        qualiteEmplacement: string;
        montantDerniereMutation: string;
        dateDerniereMutation: string;
        dateConstruction: string;
        montantAnnuelLoyer: string;
        dateDegrevement: string;
        numeroLotCopropriete: string;
        numeroSection: string;
        rangHypotheque: number;
    }
    interface IHypothequeAerienne extends IDefinitionObjet {
        denominationObjet: string;
        numeroSerie: string;
        numeroImmatriculation: string;
        adresseLocalisation: string;
        rangHypotheque: number;
    }
    interface INantissementFondCommerce extends IDefinitionObjet {
        denominationFonds: string;
        numeroInscription: string;
        zoneLibre: string;
        adresseLocalisation: string;
        rangHypotheque: number;
    }
    interface INantissementValeurMobiliere extends IDefinitionObjet {
        description: string;
        etablissement: string;
        numeroCompte: string;
    }
    interface INantissementValeurMateriel extends IDefinitionObjet {
        nomMarqueDenomination: string;
        type: string;
        numeroSerie: string;
        adresseLocalisation: string;
    }
    interface IGageVehicule extends IDefinitionObjet {
        marque: string;
        numeroImmatriculation: string;
        numeroSerie: string;
        adresseLocalisation: string;
    }
    interface INantissementPartSocial extends IDefinitionObjet {
        denomination: string;
        numeroEnregistrement: string;
        zoneLibre: string;
        adresseSocieteCivile: string;
        numeroCompte: string;
    }
    interface ICessionDaillyLoyer extends IDefinitionObjet {
        titreNomPrenom: string;
        cede: string;
        adresseImmeuble: string;
    }
    interface IAntichrese extends IDefinitionObjet {
        description: string;
        referenceCadastre: string;
        numeroLot: string;
        adresseObjet: string;
        rangHypotheque: number;
    }
    interface IGageCompte extends IDefinitionObjet {
        description: string;
        etablissement: string;
        numeroCompte: string;
        versementsAttendus: string;
        typeVersement: string;
        montant: string;
        dateDebut: string;
        periodicite: string;
    }
    interface IContratAssurance extends IDefinitionObjet {
        nomPrenomAssure: string;
        dateNaissance: string;
        siren: string;
        nomCompagnieAssurance: string;
        gestionnaireSiegeSocial: string;
        centreGestion: string;
        typeTechnique: string;
        versementAttendus: string;
        typeVersement: string;
        montant: string;
        dateDebut: string;
        periodicite: string;
        pourcentageApportPersonnel: string;
        montantMinimumSignature: string;
        numeroContrat: string;
        nomContrat: string;
        montantMinVersement: string;
    }
    interface ICessionDaillyAutres extends IDefinitionObjet {
        titreNomPrenom: string;
        cede: string;
    }
    interface IDelegLoyer extends IDefinitionObjet {
        description: string;
        nomAdresseLocataire: string;
        montantAnnuelLoyer: string;
        dateExtinctionBail: string;
        numeroCompte: string;
        nomAdresse: string;
    }
    interface IBonCaisseCapitalisation extends IDefinitionObjet {
        description: string;
        etablissement: string;
        numeroCompte: string;
        siren: string;
        valeurBonOrigine: string;
        numeroContrat: string;
        numeroTitre: string;
        natureBon: string;
        dateEcheance: string;
        titreNomPrenomTitulaire: string;
        depositaireTitre: string;
    }
    interface ILibre extends IDefinitionObjet {
        libre: string;
        libre2: string;
        libre3: string;
    }
    interface IEstimation {
        indicateurRang: string;
        montantVenale: number;
        dateVenale: string;
        modaliteVenale: string;
        motifVenale: string;
        montantPrudentiale: number;
        datePrudentiale: string;
        modalitePrudentiale: string;
        motifPrudentiale: string;
        montantAmiable: number;
        dateAmiable: string;
        modaliteAmiable: string;
        motifAmiable: string;
        montantSurSaisie: number;
        dateSurSaisie: string;
        modaliteSurSaisie: string;
        motifSurSaisie: string;
    }
}

declare module GarantieCredit.Service.Rest {
    class ObjetPorteGarantieRestService implements ServiceLocator.Interfaces.IObjetPorteGarantieRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupère les objets portés en garantie
         * @param {string} codeEtablissement
         * @param {string} identifiantDossier
         * @param {string} identifiantCredit
         * @returns un objet contenant la liste des objets portés en garantie
         */
        getObjetPorteEnGarantie(codeEtablissement: number, identifiantDossier: string, identifiantCredit: string): ng.IPromise<DTO.ObjetPorteGarantie.IObjetGarantieGlobal>;
        putObjetPorteEnGarantie(objetWrapper: Modele.IObjetPorteGarantieWrapper): ng.IPromise<DTO.IRetourQR[]>;
        /**
         * Méthode privée pour l'envoi de la requête : getObjetPorteEnGarantie
         * @param {string} codeEtablissement
         * @param {string} identifiantDossier
         * @param {string} identifiantCredit
         * @returns les données des biens portés en garantie
         */
        private sendRequestGetObjetPorteEnGarantie(codeEtablissement, identifiantDossier, identifiantCredit);
        private sendRequestPutObjetPorteEnGarantie(objetGarantieGlobal, identifiantDossier);
        /**
         * Méthode public pour l'envoi de la requête de la reestimation d'objet portee en garantie
         * @param {string} codeEtablissement
         * @param {string} identifiantDossier
         * @param {string} identifiantCredit
         * @returns null
         */
        sendRequestPutReestimation(majEstimationGlobal: DTO.EstimationObjet.IMajEstimationGlobal): ng.IPromise<any>;
    }
}

declare module GarantieCredit.DTO {
    interface IParametre {
        critere: ICritere;
        donneeParametre?: IDonneeParametre;
    }
    interface ICritereReversementTiers {
        identifiantTiers: string;
        typeRolePersonne: string;
        dateDebutValidite: string;
        codeEtablissement: number;
    }
    interface IParametreReversementTiers {
        codeEtablissement: number;
        identifiantTiers: string;
        typeRolePersonne: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        cdDeterminationDateReversement: string;
        delaiAvantReversement: number;
        delaiReversement: number;
        codeModeReversement: string;
        numeroDomiciliationReversement: string;
        codeModeAppel: string;
        numeroDomiciliationAppel: string;
        cdDeviseMouvementFinancier: string;
        referenceUniqueMandat: string;
        dateSignatureMandat: string;
        dateProchainReversementSurAppel: string;
        periodiciteReversementOuPrime: string;
    }
    interface ICritereNatureGarantie {
        codeNatureGarantie: string;
        typeSurete?: string;
        classeGarantie?: string;
        numeroOrdreClassement?: number;
        rangGarantie?: number;
        libelleLongNatureGarantie?: string;
        dateDebutValidite?: string;
        dateFinValidite?: string;
    }
    interface IParametreNatureGarantie {
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        typeSurete: string;
        classeGarantie: string;
        libelleNatureGarantie1: string;
        codeTypeAccessoire: string;
        codeAppelLecheance: string;
        numeroOrdreClassement: number;
        rangGarantie: number;
        dateDebutValidite: string;
        dateFinValidite: string;
        libelleLongNatureGarantie: string;
        codeHypothequeRechargeable: string;
        codeHypothequeSureteComparable: string;
        acteAuthentiqueNatureGarantie: string;
        codeAccessoireCalculTEG: string;
    }
    interface ICritereTypeObjetFinancementGarantie {
        codeNatureFinancement: string;
        libelleTypeObjetCommercialToc: string;
        codeAffectationObjet: string;
        typeObjetFinancementGarantie: string;
        categReglementaireAttribution: string;
    }
    interface IParametreTypeObjetFinancementGarantie {
        codeNatureFinancement: string;
        libelleTypeObjetCommercialToc: string;
        codeVentilationSousClasseBafi: string;
        codeAffectationObjet: string;
        libelleCourtTypeObjetCommercial: string;
        typeObjetFinancementGarantie: string;
        categReglementaireAttribution: string;
    }
    interface ICritereTypeAccessoire {
        codeTypeAccessoire: string;
        codeNatureAccessoire: string;
        codeTypologieAccessoire: string;
        libelleTypeAccessoire: string;
    }
    interface IParametreTypeAccessoire {
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        codeAccessoireDansCalculICNE: string;
        codeNatureAccessoire: string;
        libelleCourtTypeAccessoire: string;
        numeroOrdreClassement: number;
        codeTypologieAccessoire: string;
        codePersonnalisationInstruction: string;
        codeBeneficiaireAccessoire: string;
        codeAccessoireACumulerFraisTTC: string;
    }
    interface ICritereTypeFraisGarantie {
        codeNatureGarantie: string;
        codeTypeAccessoire: string;
        regleAppelAccessoireAperiodique: string;
        dateDebutApplication: string;
    }
    interface IParametreTypeFraisGarantie {
        codeEtablissement: number;
        codeNatureGarantie: string;
        codeTypeAccessoire: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        codeAccessoireObligatoire: string;
        codeModeCalculAccessoire: string;
        numeroRegleCalculAccessoire: string;
        montantConseilleAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        tauxConseilleAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcule: number;
        montantMaximumAccessoireCalcule: number;
        regleEvenementDeclench1erAppel: string;
        codeRecouvAcctermeEchuAEchoir: string;
        uniteDureeApplicAccess: string;
        dureeApplicationAccessoire: number;
        regleAppelAccessoireAperiodique: string;
        codeAppelLecheance: string;
        cdCommissionIntervenantExterne: string;
        modeCalculDesTaux: string;
        fractionFinancableMaximum: number;
        codeCompatibAccessoireAvenant: string;
        codeAssietteCalculAccessoire: string;
        mtPlafondCalculAccessoire: number;
        mtPlafondCalculAccessoire1: number;
        mtPlafondCalculAccessoire2: number;
        mtPlafondCalculAccessoire3: number;
        mtPlafondCalculAccessoire4: number;
        numRegleApplicationAccessoire: string;
        rglDateDebutApplicatAccessoire: string;
        periodiciteApplicationAccessoir: string;
        codeAccessoireCalculTEG: string;
        codeCompatibAccessoireInstruct: string;
    }
    interface IParametreCategorieEmprunteur {
        codeCategorieEmprunteur: string;
        libelleCategorieEmprunteur: string;
    }
    interface ICritereGenerique {
        nomTable: string;
    }
    interface ICritereTypeObjetPorteGarantie {
        codeNatureGarantie: string;
        typeObjetFinancementGarantie: string;
        typeGarantieBale2: string;
        typologieObjet: string;
    }
    interface IParametreTypeObjetPorteGarantie {
        codeNatureGarantie: string;
        typeDocumentAEditer: string;
        typeObjetFinancementGarantie: string;
        typologieObjet: string;
        typeGarantieBale2: string;
    }
    interface ICritereTypeJustificatifCategorieEmprunteur {
        codeEtablissement: number;
        codeCategorieEmprunteur: string;
        codeClasseJustificatif: string;
        sousClassePieceJustificative: string;
        codeNatureJustificatif: string;
        codeJustificatifObligatoire: string;
    }
    interface IParametreTypeJustificatifCategorieEmprunteur {
        codeCategorieEmprunteur: string;
        codeClasseJustificatif: string;
        sousClassePieceJustificative: string;
        codeNatureJustificatif: string;
        codeJustificatifObligatoire: string;
        codeEtablissement: number;
    }
    interface ICritereGarantieParCaisse {
        codeEtablissement: number;
        codeNatureGarantie: string;
    }
    interface IParametreGarantieParCaisse {
        codeEtablissement: number;
        codeNatureGarantie: string;
        codeDureeParDefautGarantie: string;
        delaiMinimumGarantieEnMois: number;
        dureeMaximaleGarantieEnMois: number;
        delaiConseilleGarantieEnMois: number;
        delaiProlongationGarantieEnMois: number;
        codeUtilisationPacteCommissoire: string;
        codeVoieParee: string;
        codeTypeActionCreditEmprunt: string;
    }
    interface ICritereDelaiPassageCDL {
        codeEtablissement: number;
        codeNatureFinancement: string;
        codeTypeMarche: string;
        codeTypeAdministrationPublique: string;
        delaiPassageEnCDL: number;
        delaiRetourCreanceSaine: number;
    }
    interface IParametreDelaiPassageCDL {
        codeEtablissement: number;
        codeNatureFinancement: string;
        montantPlancherAbsolu: number;
        tauxCalculMontantMinimumRelatif: number;
        codeTypeMarche: string;
        codeTypeAdministrationPublique: string;
        delaiPassageEnCDL: number;
        delaiRetourCreanceSaine: number;
    }
    interface ICritereReferenceConventionExterne {
        codeEtablissement: number;
        numeroExterneConvention: string;
        codeRestitution: string;
        identifiantIntervenant: string;
        libelleLgRestitutionConvention: string;
    }
    interface IParametreReferenceConventionExterne {
        codeEtablissement: number;
        identifiantIntervenant: string;
        numeroExterneConvention: string;
        codeRestitution: string;
        libelleLongRestitution: string;
        libelleLgRestitutionConvention: string;
    }
    interface ICritereAssurancePeutCouvrirSinistre {
        codeTypeAssurance: string;
        codeTypeSinistre: string;
    }
    interface IParametreAssurancePeutCouvrirSinistre {
        codeTypeAssurance: string;
        codeTypeSinistre: string;
    }
    interface ICritereTypeSinistre {
        codeTypeSinistre: string;
    }
    interface IParametreTypeSinistre {
        codeTypeSinistre: string;
        libelleTypeSinistre: string;
        codeNatureSinistre: string;
        libelleCourtTypeSinistre: string;
    }
    interface ICritereParametrageStandard {
        identifiantPourAccesBt89: string;
        dateDebutValidite: string;
    }
    interface ICritereCodeMotif {
        codeEntite: string;
        typeMotif: string;
        codeMotif: string;
    }
    interface IParametreCodeMotif {
        codeEntite: string;
        typeMotif: string;
        codeMotif: string;
        libelleLongMotif: string;
        libelleCourtMotif: string;
    }
    interface ICritereFamilleCommissionnement {
        codeEtablissement: number;
        codeFamilleCommissionPrescript: string;
    }
    interface IParametreFamilleCommissionnement {
        codeEtablissement: number;
        libelleFamilleCommissionnement: string;
        codeIndicFamilleCommissionnable: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        codeFamilleCommissionPrescript: string;
    }
    interface ICritereParametrageApplicatif {
        codeEtablissement: number;
        codeParametreApplicatif: string;
        codeTypeParametre: string;
        codeVersionNeo: string;
        codeReleaseNeo: string;
        identElementStructInstructeur: string;
        dateDebutValidite: string;
    }
    interface ICritereTypologieMotifNonAgrement {
        codeEtablissement: number;
        codeMotifNonAgrement: string;
        dateDebutValidite: string;
    }
    interface IParametreTypologieMotifNonAgrement {
        codeMotifNonAgrement: string;
        libelleMotifNonAgrement: string;
        numeroOrdreRestitutionMotif: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        libMotifNonAgrementCourrier1: string;
        libMotifNonAgrementCourrier2: string;
    }
    interface ICritereTypeMarcheParCaisse {
        codeEtablissement: number;
        codeTypeMarche: string;
    }
    interface IParametreTypeMarcheParCaisse {
        codeEtablissement: number;
        codeTypeMarche: string;
        libelleLongCodeTypeMarche: string;
        libelleCourtCodeTypeMarche: string;
        delaiEnvoiAvisEcheance: number;
    }
    interface ICritereIdentificationConvention {
        codeIdentificationConventionJur: string;
        codeTypeConvention: string;
        libelleCodeCritereIdentif: string;
    }
    interface IParametreIdentificationConvention {
        codeIdentificationConventionJur: string;
        codeTypeConvention: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        libelleCodeCritereIdentif: string;
        libelleSuiteCritereIdentif: string;
    }
    interface ICritereTauxMargePtzPlus {
        codeFamilleControle: string;
        dateDebutValidite: string;
        codeTypeTranchePretZero: string;
    }
    interface IParametreTauxMargePtzPlus {
        codeFamilleControle: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        valeurIndicateurEconomique: number;
        codeTypeTranchePretZero: string;
    }
    interface ICritereCodeMotifRefusAxa {
        codeMotifRefusAxa: string;
    }
    interface ICritereExclusionAxa {
        codeExclusionAxa: string;
        typeDecisionAxa: string;
    }
    interface ICritereTypeDecisionAxa {
        typeDecisionAxa: string;
    }
    interface ICritereValeurTva {
        dateDebutValiditeTva: string;
        dateFinValiditeTva: string;
    }
    interface IParametreCodeMotifRefusAxa {
        codeMotifRefusAxa: string;
        libelleMotifRefusAxa: string;
    }
    interface IParametreExclusionAxa {
        codeExclusionAxa: string;
        typeDecisionAxa: string;
        libelleReservesExclusions: string;
        codeReserveExclusionAssurance: string;
    }
    interface IParametreTypeDecisionAxa {
        typeDecisionAxa: string;
        libelleTypeDecisionAxa: string;
        typeReponseAssurance: string;
        indicateurAlerteCommercial: string;
        indicateurAlerteMiseEnPlace: string;
        indicTraitementAutoDecision: string;
    }
    interface IParametreValeurTva {
        codeTypeTvaAccessoire: string;
        tauxTva: number;
        codeExterneTva: string;
    }
    interface ICritereTypeGarantieEps {
        typeEps: string;
    }
    interface IParametreTypeGarantieEps {
        typeEps: string;
        libelleLongNatureGarantie: string;
        libelleNatureGarantie: string;
        classeGarantie: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        typeGarantieEpsNationale: string;
        codeDeclarationABdf: string;
    }
    interface ICritereNomenclatureProduit {
        codeEtablissement: number;
        codeTypeRestitution: string;
        codeRestitution: string;
        codeProduitRestitution: string;
        libelleLongProduit: string;
    }
    interface IParametreNomenclatureProduit {
        codeEtablissement: number;
        codeTypeRestitution: string;
        codeRestitution: string;
        codeProduitRestitution: string;
        libelleLongProduit: string;
        codeGroupeCreanceIfrs: string;
        codeIndiceCoeffRembtAnticipe: string;
        typeCalculJusteValeur: string;
    }
    interface ICritereAccessoireAutoriseReglementation {
        codeEtablissement: number;
        codeFamilleControle: string;
        codeTypeAccessoire: string;
        dateDebutApplication: string;
    }
    interface IParametreAccessoireAutoriseReglementation {
        codeEtablissement: number;
        codeFamilleControle: string;
        codeTypeAccessoire: string;
        dateDebutApplication: string;
        dateFinApplication: string;
    }
    interface ICritereConditionRa {
        codeEtablissement: number;
        identifiantConditionRA: string;
        codeAutorisationRaPartiel: string;
        codeAutorisationRA: string;
    }
    interface IParametreConditionRa {
        codeEtablissement: number;
        identifiantConditionRA: string;
        codeAutorisationRaPartiel: string;
        numeroRegleAutorisationRa: string;
        compteurMiseJour: number;
        codeAutorisationRA: string;
        codeDateDebutAutorisationRA: string;
        codeAutorisationRaPrefi: string;
        codeModeRecalculTASuiteRA: string;
    }
    interface ICritereModaliteCalculIndemniteRa {
        codeEtablissement: number;
        identModaliteCalculIndemniteRa: string;
        codeModeCalculIndemniteRa: string;
        codeCompatibiliteTypeLoi: string;
        dateDebutApplication: string;
    }
    interface IParametreModaliteCalculIndemniteRa {
        codeEtablissement: number;
        identModaliteCalculIndemniteRa: string;
        codeModeCalculIndemniteRa: string;
        tauxConseilleAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        numeroRegleCalculAccessoire: string;
        codeCompatibiliteTypeLoi: string;
        compteurMiseJour: number;
        indicateurIndemnitesEnPrefi: string;
        indicatindemnsurPhaseRevisable: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        codeTypeAssietteCalcAccessoire: string;
    }
    interface ICritereGestionImpaye {
        codeEtablissement: number;
        codeTypeMarche: string;
        codeRelanceAutomatiqueImpaye: string;
        codeDevise: string;
        codeSectRattachementEmprunteur: string;
    }
    interface IParametreGestionImpaye {
        codeEtablissement: number;
        codeTypeMarche: string;
        codeRelanceAutomatiqueImpaye: string;
        delaiPaiementAvantImpaye: number;
        delaiDeuxiemeRelanceImpaye: number;
        delaiInformationCautionImpaye: number;
        delaiPassageImpayeNiveau1: number;
        delaiPassageImpayeNiveau2: number;
        compteurMiseJour: number;
        dateAnnulationModification: string;
        delaiPremiereRelanceImpaye: number;
        seuilPassageEnPerteProfit: number;
        delaiPassageEnPerteprofit: number;
        delaiRelance: number;
        codeDevise: string;
        codeSectRattachementEmprunteur: string;
    }
    interface ICritereModaliteCalculRetenueImpaye {
        codeEtablissement: number;
        identifiantModaliteCalculImpaye: string;
        libelleModaliteCalculImpaye: string;
        codeCompatibiliteTypeLoi: string;
        dateDebutApplication: string;
        codeDevise: string;
        codeSectRattachementEmprunteur: string;
    }
    interface IParametreModaliteCalculRetenueImpaye {
        codeEtablissement: number;
        identifiantModaliteCalculImpaye: string;
        dateFinApplication: string;
        codeTypeMarche: string;
        dateDebutApplication: string;
        numeroRegleCalculModaliteImpaye: string;
        libelleModaliteCalculImpaye: string;
        codeTypeTauxModaliteImpaye: string;
        montantMinimumIndemniteImpaye: number;
        montantMaximumIndemniteImpaye: number;
        montantIndemniteImpaye: number;
        tauxMinimumInteretsRetardImpaye: number;
        tauxMaximumInteretsRetardImpaye: number;
        tauxInteretsRetardImpaye: number;
        tauxReduitInteretsRetardImpaye: number;
        codeCompatibiliteTypeLoi: string;
        compteurMiseJour: number;
        numeroOrdreClassement: number;
        codeFamilleControle: string;
        codeDevise: string;
        codeSectRattachementEmprunteur: string;
        mtMiniAccessoireRecouvrement: number;
    }
    interface ICritereSubventionPatz {
        codeFamilleControle: string;
        dureeMaxiPeriode1: number;
        dateDebutValidite: string;
        codeTypeTranchePretZero: string;
    }
    interface IParametreSubventionPatz {
        codeFamilleControle: string;
        dureeMaxiPeriode1: number;
        dateDebutValidite: string;
        dateFinValidite: string;
        codeOat: string;
        codeTauxSubvention: string;
        codeTypeTranchePretZero: string;
    }
    interface ICriterePays {
        codePaysLocalisation: string;
    }
    interface IParametrePays {
        codePaysLocalisation: string;
        libellePaysLocalisation: string;
        libelleCourtPaysLocalisation: string;
        numeroOrdreClassement: number;
    }
    interface ICritereTypeObjetReglemente {
        typeObjetReglemente: string;
    }
    interface IParametreTypeObjetReglemente {
        typeObjetReglemente: string;
        libelleCourtTypeObjetReglemente: string;
        libelleTypeObjetReglemente: string;
    }
    interface ICritereTypologie {
        typeTypologie: string;
        codeTypologie: string;
    }
    interface IParametreTypologie {
        codeEtablissement: number;
        typeTypologie: string;
        codeTypologie: string;
        intitule: string;
    }
    interface ICritere {
        accessoireAutoriseReglement?: ICritereAccessoireAutoriseReglementation;
        assurancePeutCouvrirSinistre?: ICritereAssurancePeutCouvrirSinistre;
        codeMotif?: ICritereCodeMotif;
        codeMotifRefusAxa?: ICritereCodeMotifRefusAxa;
        codeBeneficiaire?: ICritereCodeBeneficiaire;
        conditionRa?: ICritereConditionRa;
        decisionAssureur?: ICritereDecisionAssureur;
        delaiPassageCdl?: ICritereDelaiPassageCDL;
        etatDecisionAssureur?: ICritereEtatDecisionAssureur;
        exclusionAxa?: ICritereExclusionAxa;
        familleCommissionnement?: ICritereFamilleCommissionnement;
        garantieParCaisse?: ICritereGarantieParCaisse;
        generique?: ICritereGenerique;
        gestionImpaye?: ICritereGestionImpaye;
        identificationConvention?: ICritereIdentificationConvention;
        modaliteCalculIndemniteRa?: ICritereModaliteCalculIndemniteRa;
        modaliteCalculRetenueImpaye?: ICritereModaliteCalculRetenueImpaye;
        natureGarantie?: ICritereNatureGarantie;
        nomenclatureProduit?: ICritereNomenclatureProduit;
        parametrageApplicatif?: ICritereParametrageApplicatif;
        parametrageStandard?: ICritereParametrageStandard;
        pays?: ICriterePays;
        referenceConventionExterne?: ICritereReferenceConventionExterne;
        reglementation?: ICritereReglementation;
        reversementTiers?: ICritereReversementTiers;
        subventionPatz?: ICritereSubventionPatz;
        tauxMargePtzPlus?: ICritereTauxMargePtzPlus;
        typeAccessoire?: ICritereTypeAccessoire;
        typeDecisionAxa?: ICritereTypeDecisionAxa;
        typeFraisGarantie?: ICritereTypeFraisGarantie;
        typeGarantieEps?: ICritereTypeGarantieEps;
        typeJustificatifCategEmprunteur?: ICritereTypeJustificatifCategorieEmprunteur;
        typeMarcheParCaisse?: ICritereTypeMarcheParCaisse;
        typeObjetFinancementGarantie?: ICritereTypeObjetFinancementGarantie;
        typeObjetPorteGarantie?: ICritereTypeObjetPorteGarantie;
        typeObjetReglemente?: ICritereTypeObjetReglemente;
        typeSinistre?: ICritereTypeSinistre;
        typologie?: ICritereTypologie;
        typologieMotifNonAgrement?: ICritereTypologieMotifNonAgrement;
        valeurTva?: ICritereValeurTva;
        typeOperationDecisionAssureur?: ICritereTypeOperationDecisionAssureur;
        accesAutoriseTypeRattachement?: ICritereAccesAutoriseTypeRattachement;
        cadreFiscal?: ICritereCadreFiscal;
        categReglementAttributionTor?: ICritereCategorieReglementaireAttributionTor;
        estimation?: ICritereEstimation;
    }
    interface IDonneeParametre {
        listeAccessoireAutoriseReglement: Array<IParametreAccessoireAutoriseReglementation>;
        listeAssurancePeutCouvrirSinistre: Array<IParametreAssurancePeutCouvrirSinistre>;
        listeCodeMotif: Array<IParametreCodeMotif>;
        listeCategorieEmprunteur: Array<IParametreCategorieEmprunteur>;
        listeCodeMotifRefusAxa: Array<IParametreCodeMotifRefusAxa>;
        listeCodeBeneficiaire: Array<IParametreCodeBeneficiaire>;
        listeConditionRa: Array<IParametreConditionRa>;
        listeDecisionAssureur: Array<IParametreDecisionAssureur>;
        listeDelaiPassageCdl: Array<IParametreDelaiPassageCDL>;
        listeEtatDecisionAssureur: Array<IParametreEtatDecisionAssureur>;
        listeExclusionAxa: Array<IParametreExclusionAxa>;
        listeFamilleCommissionnement: Array<IParametreFamilleCommissionnement>;
        listeGarantieParCaisse: Array<ICritereGarantieParCaisse>;
        listeGestionImpaye: Array<IParametreGestionImpaye>;
        listeIdentificationConvention: Array<IParametreIdentificationConvention>;
        listeModaliteCalculIndemniteRa: Array<IParametreModaliteCalculIndemniteRa>;
        listeNatureGarantie: Array<IParametreNatureGarantie>;
        listeModaliteCalcRetenueImpaye: Array<IParametreModaliteCalculRetenueImpaye>;
        listeNomenclatureProduit: Array<IParametreNomenclatureProduit>;
        listeParametrageApplicatif: Array<IParametreApplicatif>;
        listeParametrageStandard: Array<IParametreStandard>;
        listePays: Array<IParametrePays>;
        listeReferenceConventionExterne: Array<IParametreReferenceConventionExterne>;
        listeReglementation: Array<IParametreReglementation>;
        listeReversementTiers: Array<IParametreReversementTiers>;
        listeSubventionPatz: Array<IParametreSubventionPatz>;
        listeTauxMargePtzPlus: Array<IParametreTauxMargePtzPlus>;
        listeTypeAccessoire: Array<IParametreTypeAccessoire>;
        listeTypeDecisionAxa: Array<IParametreTypeDecisionAxa>;
        listeTypeFraisGarantie: Array<IParametreTypeFraisGarantie>;
        listeTypeJustificatifCategEmprunteur: Array<IParametreTypeJustificatifCategorieEmprunteur>;
        listeTypeMarcheParCaisse: Array<IParametreTypeMarcheParCaisse>;
        listeTypeObjetFinancementGarantie: Array<IParametreTypeObjetFinancementGarantie>;
        listeTypeObjetPorteGarantie: Array<IParametreTypeObjetPorteGarantie>;
        listeTypeSinistre: Array<IParametreTypeSinistre>;
        listeTypologie: Array<IParametreTypologie>;
        listeTypologieMotifNonAgrement: Array<IParametreTypologieMotifNonAgrement>;
        listeValeurTva: Array<IParametreValeurTva>;
        listeTypeOperationDecisionAssureur: Array<IParametreTypeOperationDecisionAssureur>;
        listeCadreFiscal: Array<IParametreCadreFiscal>;
        listeAccesAutoriseTypeRattachement: Array<IParametreAccesAutoriseTypeRattachement>;
        listeCategReglementAttributionTor: Array<IParametreCategorieReglementaireAttributionTor>;
        listeTypeObjetReglemente: Array<IParametreTypeObjetReglemente>;
        listeEstimation: Array<IParametreEstimation>;
    }
    interface ICritereTypeOperationDecisionAssureur {
        codeIdentificationConventionJur: string;
        codeTypeSinistre: string;
        indicateurCompte: string;
        indicateurOperationCreditDebit: string;
    }
    interface IParametreTypeOperationDecisionAssureur {
        codeEtablissement: number;
        codeIdentificationConventionJur: string;
        codeTypeSinistre: string;
        indicateurCompte: string;
        typeOperation: string;
        indicateurOperationCreditDebit: string;
    }
    interface ICritereEtatDecisionAssureur {
        codeMotifEtatDecisionsAssureurs: string;
    }
    interface IParametreEtatDecisionAssureur {
        codeEtablissement: number;
        codeMotifEtatDecisionsAssureurs: string;
        libMotifEtatDecisionsAssureurs: string;
    }
    interface ICritereCadreFiscal {
        codeEtablissement: number;
        codeTypologieCadreFiscal: string;
        codeNatureFinancement: string;
        codeDestinationAutoriseeObjet: string;
        libelleCadreFiscal: string;
        dateDebutApplication: string;
    }
    interface IParametreCadreFiscal {
        codeEtablissement: number;
        codeTypologieCadreFiscal: string;
        codeNatureFinancement: string;
        codeDestinationAutoriseeObjet: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        libelleCadreFiscal: string;
    }
    interface ICritereAccesAutoriseTypeRattachement {
        codeTypeConvention: string;
    }
    interface IParametreAccesAutoriseTypeRattachement {
        codeTypeConvention: string;
        codeNatureAccessoire: string;
    }
    interface ICritereCodeBeneficiaire {
        codeBeneficiaireAccessoire: string;
        libelleBeneficaireNeo: string;
        indicateurRestitutionEdition: string;
        dateDebutApplication: string;
    }
    interface IParametreCodeBeneficiaire {
        codeBeneficiaireAccessoire: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        libelleBeneficaireNeo: string;
        libelleBeneficaireFise: string;
        indicateurRestitutionEdition: string;
    }
    interface ICritereDecisionAssureur {
        codeDecisionEnvoyeParAssureur: string;
        indicateurDecisionComptable: string;
        codeIdentificationConventionJur: string;
    }
    interface IParametreDecisionAssureur {
        codeEtablissement: number;
        codeDecisionEnvoyeParAssureur: string;
        indicateurDecisionComptable: string;
        codeIdentificationConventionJur: string;
        typeRisqueConcerne: string;
        indicateurClotureSinistre: string;
        libelleDecisionEnvoyeAssureur: string;
        indicateurReponseConditionne: string;
    }
    interface ICritereReglementation {
        codeFamilleControle: string;
        libelleLongReglementation: string;
        codeEligibiliteHorsMarche: string;
        codeAutorisationFinanceFrais: string;
    }
    interface IParametreReglementation {
        codeFamilleControle: string;
        libelleLongReglementation: string;
        dateCreation: string;
        codePretBonifieParLEtat: string;
        libelleCourtReglementation: string;
        deviseRestitutionReglementation: string;
        deviseExpressionReglementation: string;
        codeEligibiliteHorsMarche: string;
        margeActualisationSubvention: number;
        margeInteretDiffereSubvention: number;
        codeAutorisationFinanceFrais: string;
    }
    interface IParametreApplicatif {
        codeEtablissement: number;
        codeParametreApplicatif: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        libelleParametre: string;
        codeTypeParametre: string;
        dureeUnParametre: number;
        valeurParametre: string;
        codeVersionNeo: string;
        codeReleaseNeo: string;
        identElementStructInstructeur: string;
        parametreMontant: number;
        parametreDate: string;
        parametreTaux: number;
    }
    interface IParametreStandard {
        codeEtablissement: number;
        identifiantPourAccesBt89: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        libelleParametre: string;
        valeurParametre: string;
        parametreMontant: number;
        parametreDate: string;
        parametreTaux: number;
    }
    interface ICritereCategorieReglementaireAttributionTor {
        categReglementaireAttribution: string;
        typeObjetReglemente: string;
    }
    interface IParametreCategorieReglementaireAttributionTor {
        typeObjetReglemente: string;
        categReglementaireAttribution: string;
    }
    interface ICritereEstimation {
        typeEstimation: string;
        codeModaliteEstimation: string;
        codeMotifReEstimation: string;
    }
    interface IParametreEstimation {
        typeEstimation: string;
        codeModaliteEstimation: string;
        codeMotifReEstimation: string;
        codeEtablissement: number;
    }
    interface ITypeModalite {
        estimation: DTO.IParametreEstimation;
        libelle: string;
        listeMotifs: string[];
    }
}

declare module GarantieCredit.Service.Rest {
    class ParametreRestService implements ServiceLocator.Interfaces.IParametreRest {
        private serviceAgent;
        private $q;
        private typologiesModaliteEstimation;
        private modalitesEstimation;
        private motifsEstimation;
        static ACTION_LECTURE: string;
        static ACTION_CREATION: string;
        static TYPE_TYPOLOGIE_TYPE_BIEN: string;
        static TYPE_TYPOLOGIE_ZONE_IMPLANTATION: string;
        static TYPE_TYPOLOGIE_CENTRE_GESTION: string;
        static TYPE_TYPOLOGIE_TYPE_TECHNIQUE_JURIDIQUE: string;
        static TYPE_TYPOLOGIE_MODALITE_ESTIMATION: string;
        static TYPE_TYPOLOGIE_MOTIF_ESTIMATION: string;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        getTypologiesCentreGestion(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesTypeTechniqueJuridique(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesZoneImplantation(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesTypeBien(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesModaliteEstimation(codeEtablissement: number, numeroCredit: string, cache: boolean): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesMotifEstimation(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        /**
         * Récupère toutes les typologies
         * @param {string} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} typeTypologie
         * @returns
         */
        getTypologies(codeEtablissement: number, numeroCredit: string, typeTypologie?: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypesObjetReglemente(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypeObjetReglemente[]>;
        getPays(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametrePays[]>;
        getTypeObjetFinancementGarantie(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypeObjetFinancementGarantie[]>;
        getCategorieReglementaireAttributionTor(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreCategorieReglementaireAttributionTor[]>;
        getNatureGarantie(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreNatureGarantie[]>;
        getTypeObjetPorteGarantie(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypeObjetPorteGarantie[]>;
        loadListesEstimation(codeEtablissement: number, numeroCredit: string, cache: boolean, getListeModalitesVenale: () => DTO.ITypeModalite[], pushListeModalitesVenale: (modaliteVenale: DTO.ITypeModalite) => void, getListeMotifsVenale: () => DTO.IParametreCodeMotif[], pushListeMotifsVenale: (motifVenale: DTO.IParametreCodeMotif) => void, getListeModalitesPrudentielle: () => DTO.ITypeModalite[], pushListeModalitesPrudentielle: (modalitePrudentielle: DTO.ITypeModalite) => void, getListeMotifsPrudentielle: () => DTO.IParametreCodeMotif[], pushListeMotifsPrudentielle: (motifPrudentielle: DTO.IParametreCodeMotif) => void, filterTypologies: (list: DTO.IParametreTypologie[], codeTypologie: string) => DTO.IParametreTypologie): ng.IPromise<void>;
        getModaliteEstimations(codeEtablissement: number, numeroCredit: string, cache: boolean): ng.IPromise<DTO.IParametreEstimation[]>;
        getMotifEstimations(codeEtablissement: number, numeroCredit: string, cache: boolean): ng.IPromise<DTO.IParametreCodeMotif[]>;
        private sendRequestPostParametre(codeEtablissement, numeroCredit, codeAction, parametre);
    }
}

declare module GarantieCredit.DTO {
    interface ISituationHypotheque {
        codeEtablissement: number;
        numeroCredit: string;
        codeDevise: string;
        compteurMiseJour: number;
        codeEmprunteur: string;
        libelleLongProduit: string;
        libelleCourtProduit: string;
        redacteurActe: string;
        codeAuthenticiteContrat: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        listeHypotheque: Array<IHypotheque>;
        listeGarantieHypotheque: Array<IGarantieHypotheque>;
        listeCreditHypotheque: Array<ICreditHypotheque>;
        retourQR: Array<IRetourQR>;
    }
    interface IGarantieHypotheque {
        identifiantGarantie: string;
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        codeHypothequeRechargeable: string;
        montantGarantie: number;
        dateFinValiditeGarantie: Date;
        mtHypothequeUtilise: number;
        mtHypothequeDisponible: number;
        codeGarantieRechargeableExterne: string;
        identifiantGarantie1: string;
        codeDeviseGarantie: string;
    }
    interface IHypotheque {
        identifiantGarantie: string;
        numeroCredit: string;
        capitalCouvertGarantie: number;
    }
    interface ICreditHypotheque {
        numeroCredit: string;
        dateEffet: Date;
        dateFinCredit: Date;
        codeRevisabiliteTauxInteret: string;
        tauxNominalCredit: number;
        codeIndiceNominal: string;
        margeAppliquerSurTauxNominal: number;
        montantProchaineEcheance: number;
        dateMiseRecouvrementZero: Date;
        montantCapitalRestantSurCredit: number;
        codeDevise: string;
    }
}

declare module GarantieCredit.Service.Rest {
    class SituationHypothequeRestService implements ServiceLocator.Interfaces.ISituationHypothequeRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getGarantieHypotheque(codeEtablissement: number, identifiantCredit: string, identifiantEmprunteur: string, identifiantGarantie: string): ng.IPromise<DTO.IGarantieHypotheque>;
        getSituationHypotheque(codeEtablissement: number, identifiantCredit: string, codeEmprunteur: string): ng.IPromise<DTO.ISituationHypotheque>;
    }
}

declare module GarantieCredit.DTO.VersementAttendu {
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IMajVersementAttendu {
        identifiantObjet: string;
        identifiantCaisse: number;
        numeroRelatif: number;
        identifiantDossierInstruction: string;
        numeroRelatifObjetDossier: number;
        typeVersement: string;
        montantVersementAttendu: number;
        codeDevise: string;
        dateDebutVersementAttendu: string;
        dateFinVersementAttendu: string;
        codePeriodicite: string;
    }
    interface IMajVersementAttenduGlobal {
        codeEtablissement: number;
        identifiantCredit: string;
        identifiantDossier: string;
        dateTraitement: string;
        indicateurDemandeMiseAJour: string;
        compteurMiseAJour: number;
        majVersementAttendu: IMajVersementAttendu;
        indicateurCreationSuppression: string;
        indicateurAccesZbind2: string;
    }
}

declare module GarantieCredit.Service.Rest {
    class VersementAttenduRestService implements ServiceLocator.Interfaces.IVersementAttenduRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        putVersementAttendu(data: DTO.VersementAttendu.IMajVersementAttenduGlobal): ng.IPromise<DTO.VersementAttendu.IMajVersementAttenduGlobal>;
    }
}

declare module GarantieEps.DTO {
    interface ISyntheseRelationEngt {
        codeEtablissement: number;
        identifiantCredit: string;
        codeDevise: string;
        compteurMiseAJour: number;
        libelleLongProduit: string;
        identifiantEmprunteur: string;
        libelleCourtProduit: string;
        redacteurActe: string;
        codeAuthenticiteContrat: string;
        libelleTiers: string;
        codeBlocageActeGestion: string;
        listeNature: Array<INature>;
    }
    interface IConvention {
        codeTypeConvention: string;
        codeTypeAssurance: string;
        codeEtablissement: number;
        identifiantIntervenant: string;
        commentaire: string;
        libelleCourt: string;
        libelleLong: string;
        numeroExterne: string;
        commentaireLong: string;
        datePriseEffet: string;
        dateFinEffet: string;
        ageMaximumEntreeAssurance: number;
        montantMinimumCredit: number;
        montantMaximumCredit: number;
        unitePeriodeObtention: string;
        dureeMiniCreditObtention: number;
        dureeMaxiCreditObtention: number;
        regleEffetAssurance: string;
        codeModeExpressionGarantie: string;
        quotiteMinimumBeneficiare: number;
        quotiteMaximumBeneficiaire: number;
        pasQuotiteBeneficiaire: number;
        montantMiniParTete: number;
        montantMaxiParTete: number;
        pasMontantParTete: number;
        codeNaturePriseEnCharge: string;
        codeNatureGarantie: string;
        periodiciteReverse: string;
        codeDeterminationDate: string;
        delaiReversement: number;
        codeDestinataireReglementSinistre: string;
        numeroDomiciliation: string;
        codeCommissionIntervenant: string;
        tauxCommissionCaisse: number;
        codeModaliteReglement: string;
        codeEditionInfo: string;
        delaiInformationCaution: number;
        codeTiersGaranti: string;
        codeTypeObjetAutorise: string;
        codeNatureBonification: string;
        dateProchainReversementAppel: string;
        codeTypeAssiette: string;
        identifiantConvention: string;
        codeNatureCautionnement: string;
    }
    interface INature {
        classeGarantie: string;
        codeTypeAccessoire: string;
        codeAccessoireCalculTEG: string;
        numeroOrdreClassement: number;
        dateDebutValidite: string;
        dateFinValidite: string;
        codeHypothequeRechargeable: string;
        indiceImpactAssietteCommission: string;
        indicateurSpecifiqueEPS: string;
        listeAccessoires: Array<IAccessoire>;
        listeTypeObjets: Array<ITypeObjet>;
        codeHypothequeSureteComparable: string;
        libelleLongNatureGarantie: string;
        rangGarantie: number;
        codeAppelLecheance: string;
        libelleNatureGarantie1: string;
        acteAuthentiqueNatureGarantie: string;
        typeSurete: string;
        libelleNatureGarantie: string;
        codeNatureGarantie: string;
        listeConventionNature: Array<IConvention>;
        listeOrganisme: Array<IOrganismeConvention>;
    }
    interface IAccessoire {
        codeEtablissement: number;
        codeNatureGarantie: string;
        identifiantConvention: string;
        codeTypePhase: string;
        codeTypeAccessoire: string;
        dateFinApplication: string;
        dateDebutApplication: string;
        codeModeCalcul: string;
        numeroRegleCalcul: string;
        montantConseille: number;
        montantMinimumPlage: number;
        montantMaximumPlage: number;
        tauxConseille: number;
        tauxMinimum: number;
        tauxMaximum: number;
        montantPlafondTrancheCalcul: number;
        tauxElement: number;
        montantPlafondTrancheCalcul1: number;
        codeTypeAssietteCalcul: string;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantMinimumAccessoireCalcule: number;
        montantMaximumAccessoireCalcule: number;
        montantMiniAccessoireRecouvrement: number;
        numeroRegleApplication: string;
        regleDateDebutApplication: string;
        regleEvenementDeclenche: string;
        periodiciteApplication: string;
        codeRecouvreAccTermeEchu: string;
        uniteDureeApplication: string;
        dureeApplication: number;
        regleAppelAccessoireAperiodique: string;
        codeAccessoireCalculTEG: string;
        codeAccessoireRemboursementFinCredit: string;
        codeAppelEcheance: string;
        modeCalculTaux: string;
        tauxAccessoirePersonnesAgees: number;
        pasMontantAccessoire: number;
        fractionFinancableMaximum: number;
        codeCompatibleInstruction: string;
        codeCompatibleAvenant: string;
        codeCommissionIntervenantExterne: string;
        listeConventions: Array<IConvention>;
        listeOrganisme: Array<IOrganismeConvention>;
    }
    interface IOrganismeConvention {
        identifiantOrganisme: string;
        libelleOrganisme: string;
        identifiantConvention: string;
    }
    interface ITypeObjet {
        codeNatureGarantie: string;
        typeObjet: string;
        typologieObjet: string;
        typeGarantie: string;
        typeDocumentEditer: string;
    }
}

declare module GarantieCredit.Service.Rest {
    class EngagementParametreRestService implements ServiceLocator.Interfaces.IEngagementParametreRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getNatureGarantie(codeEtablissement: number, codeFamilleProduit: string, numeroRelatifProduit: string): ng.IPromise<GarantieEps.DTO.INature[]>;
        private sendRequestGetParametre(codeEtablissement, codeFamilleProduit, numeroRelatifProduit);
    }
}

declare module GarantieEps.DTO.Creation {
    interface ICaracteristique {
        identifiantLigneAutorisation: string;
        codeCanalDistributionEPS: string;
        indicateurDateButoir: string;
        codeEtablissement: number;
        identifiantCredit: string;
        dateTraitement: string;
        compteurMiseAJour: number;
        codeDevise: string;
        identifiantEmprunteur: string;
        identifiantEPS: string;
        commentaire: string;
        datePriseEffet: string;
        identifiantGarant: string;
        identifiantConvention: string;
        pourcentageCreditCouvert: number;
        codeTypeSurete: string;
        codeNatureCautionnement: string;
        codeCritereResidence: string;
        classeGarantie: string;
        codeIndicateurRetrocession: string;
        codeTypeConvention: string;
        codeTypeAccessoireConvention: string;
        accessoire: Array<IAccessoire>;
        objetPorteGarantie: IObjetPorteGarantie;
        rangHypotheque: number;
        montantCouvertHypothRgAnterieur: number;
        codeHypothequeRechargeable: string;
        acteAuthentiqueSurGarantie: boolean;
        redacteurActe: string;
        libelleCession: string;
        libelleVilleConservation: string;
        datePublication: string;
        libelleReferenceVolume: string;
        numeroVolume: number;
        mtHypothequeDisponible: number;
        dateMontantHypoDispo: string;
        identifiantGarantie: string;
        dateCloture: string;
        indicateurRecalculEcheance: string;
        dateValeurRecalculEcheance: string;
    }
    interface IObjetPorteGarantie {
        identifiantObjet: string;
        identifiantGarantie: string;
        codeEtatGarantie: string;
        libelleEtatGarantie: string;
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        typeObjet: string;
        libelleTypeObjetCommercial: string;
        dateAcceptationDossierGarantie: string;
        dateFinValiditeGarantie: string;
        montantGarantie: number;
        codeDeviseGarantie: string;
        libelleCleMasque: string;
        hypothequeImmo: IHypothequeImmo;
        divers: IDivers;
        hypothequeAerienne: IHypothequeAerienne;
        antichrese: IAntichrese;
        bonCaisseCapitalisation: IBonCaisseCapitalisation;
        cessionDaillyAutres: ICessionDaillyAutres;
        cessionDaillyLoyer: ICessionDaillyLoyer;
        contratAssurance: IContratAssurance;
        delegLoyer: IDelegLoyer;
        gageCompte: IGageCompte;
        gageVehicule: IGageVehicule;
        libre: ILibre;
        nantissementFondCommerce: INantissementFondCommerce;
        nantissementPartSocial: INantissementPartSocial;
        nantissementValeurMateriel: INantissementValeurMateriel;
        nantissementValeurMobiliere: INantissementValeurMobiliere;
    }
    interface IDefinitionObjet {
        identifiantObjet: string;
        libellePaysLocalisation: string;
        zoneBanaliseeLongueur32: string;
        codeDestinationAutoriseeObjet: string;
        codeTypeObjet: string;
        codeDevise: string;
        indicateurBanalise: string;
        typeObjetReglemente: string;
        montantNominalObjet: number;
        codeUtilisationObjetDansCredit: string;
        adresseNom: string;
        adresseComplementNom: string;
        adresse: string;
        adresseComplement: string;
        adresseCodePostal: string;
        adresseVille: string;
        codePaysLocalisation: string;
        libelleCleMasque: string;
        codeModaliteOccupation: string;
        listeEstimation: Array<IEstimation>;
    }
    interface IDivers extends IDefinitionObjet {
        description: string;
        reference1: string;
        reference2: string;
        adresseObjet: string;
    }
    interface IHypothequeImmo extends IDefinitionObjet {
        description: string;
        referenceCadastre: string;
        referenceLot: string;
        adresseLocalisation: string;
        typeBien: string;
        typeLogement: string;
        destinationLogement: string;
        surfaceHabitable: number;
        surfaceTerrain: number;
        zoneImplantation: string;
        qualiteEmplacement: string;
        montantDerniereMutation: string;
        dateDerniereMutation: string;
        dateConstruction: string;
        montantAnnuelLoyer: string;
        dateDegrevement: string;
        numeroLotCopropriete: string;
        numeroSection: string;
    }
    interface IHypothequeAerienne extends IDefinitionObjet {
        denominationObjet: string;
        numeroSerie: string;
        numeroImmatriculation: string;
        adresseLocalisation: string;
    }
    interface INantissementFondCommerce extends IDefinitionObjet {
        denominationFonds: string;
        numeroInscription: string;
        zoneLibre: string;
        adresseLocalisation: string;
    }
    interface INantissementValeurMobiliere extends IDefinitionObjet {
        description: string;
        etablissement: string;
        numeroCompte: string;
    }
    interface INantissementValeurMateriel extends IDefinitionObjet {
        nomMarqueDenomination: string;
        type: string;
        numeroSerie: string;
        adresseLocalisation: string;
    }
    interface IGageVehicule extends IDefinitionObjet {
        marque: string;
        numeroImmatriculation: string;
        numeroSerie: string;
        adresseLocalisation: string;
    }
    interface INantissementPartSocial extends IDefinitionObjet {
        denomination: string;
        numeroEnregistrement: string;
        zoneLibre: string;
        adresseSocieteCivile: string;
        numeroCompte: string;
    }
    interface ICessionDaillyLoyer extends IDefinitionObjet {
        titreNomPrenom: string;
        cede: string;
        adresseImmeuble: string;
    }
    interface IAntichrese extends IDefinitionObjet {
        description: string;
        referenceCadastre: string;
        numeroLot: string;
        adresseObjet: string;
    }
    interface IGageCompte extends IDefinitionObjet {
        description: string;
        etablissement: string;
        numeroCompte: string;
        versementsAttendus: string;
        typeVersement: string;
        montant: string;
        dateDebut: string;
        periodicite: string;
    }
    interface IContratAssurance extends IDefinitionObjet {
        nomPrenomAssure: string;
        dateNaissance: string;
        siren: string;
        nomCompagnieAssurance: string;
        gestionnaireSiegeSocial: string;
        centreGestion: string;
        typeTechnique: string;
        versementAttendus: string;
        typeVersement: string;
        montant: string;
        dateDebut: string;
        periodicite: string;
        pourcentageApportPersonnel: string;
        montantMinimumSignature: string;
        numeroContrat: string;
        nomContrat: string;
        montantMinVersement: string;
    }
    interface ICessionDaillyAutres extends IDefinitionObjet {
        titreNomPrenom: string;
        cede: string;
    }
    interface IDelegLoyer extends IDefinitionObjet {
        description: string;
        nomAdresseLocataire: string;
        montantAnnuelLoyer: string;
        dateExtinctionBail: string;
        numeroCompte: string;
        nomAdresse: string;
    }
    interface IBonCaisseCapitalisation extends IDefinitionObjet {
        description: string;
        etablissement: string;
        numeroCompte: string;
        siren: string;
        valeurBonOrigine: string;
        numeroContrat: string;
        numeroTitre: string;
        natureBon: string;
        dateEcheance: string;
        titreNomPrenomTitulaire: string;
        depositaireTitre: string;
    }
    interface ILibre extends IDefinitionObjet {
        libre: string;
        libre2: string;
        libre3: string;
    }
    interface IEstimation {
        indicateurRang: string;
        montantVenale: number;
        dateVenale: string;
        modaliteVenale: string;
        motifVenale: string;
        montantPrudentiale: number;
        datePrudentiale: string;
        modalitePrudentiale: string;
        motifPrudentiale: string;
        montantAmiable: number;
        dateAmiable: string;
        modaliteAmiable: string;
        motifAmiable: string;
        montantSurSaisie: number;
        dateSurSaisie: string;
        modaliteSurSaisie: string;
        motifSurSaisie: string;
    }
    interface IAccessoire {
        codeTypeAccessoire: string;
        dureeApplicationElement: number;
        uniteDureeApplicationElement: string;
        numeroRegleApplicationElement: string;
        periodiciteApplicationElement: string;
        regleEvenementDeclenchementAppel: string;
        regleDateDebutApplication: string;
        regleAppelAperiodique: string;
        codeModeCalcul: string;
        numeroRegleCalculElement: string;
        montantElement: number;
        codeTypeAssietteCalculElement: string;
        montantPlafondCalculAccessoire: number;
        tauxElement: number;
        montantPlafondCalculAcc1: number;
        tauxElement1: number;
        montantPlafondCalculAcc2: number;
        tauxElement2: number;
        montantPlafondCalculAcc3: number;
        tauxElement3: number;
        montantPlafondCalculAcc4: number;
        tauxElement4: number;
        montantMinimumCalcule: number;
        montantMaximumCalcule: number;
        codeRecouvElementTermeEchu: string;
        montantMiniRecouvrement: number;
        codeAccCalculTEG: string;
        codeAppelEcheance: string;
        codeComissionIntervenantExterne: string;
        codeTypeApplication: string;
        codeTypePhase: string;
        tauxConseille: number;
        montantConseille: number;
        nbJourAnneeNumerateur: number;
        nbJourAnneeDenominateur: number;
    }
}

declare module GarantieCredit.Service.Rest {
    class GarantieEngagementRestService implements ServiceLocator.Interfaces.IGarantieEngagementRest {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        postGarantie(caracteristique: GarantieEps.DTO.Creation.ICaracteristique): ng.IPromise<GarantieEps.DTO.Creation.ICaracteristique>;
        putGarantie(caracteristique: GarantieEps.DTO.Creation.ICaracteristique): ng.IPromise<GarantieEps.DTO.Creation.ICaracteristique>;
        private sendRequestPostParametre(caracteristique);
        private sendRequestPutParametre(caracteristique);
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface ICaracteristiqueCreditRest {
        /**
         * Récupère les caracteristique d'un crédit ou d'un dossier
         * @param {string} codeEtablissement
         * @param {string} numeroDossier
         * @param {string} numeroCredit
         * @returns un objet contenant les caractéristique
         */
        getCaracteristiqueCredit(codeEtablissement: number, numeroDossier: string, numeroCredit: string): ng.IPromise<DTO.IListeCredits>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IConventionRest {
        /**
         * Récupère la liste des garanties liées à un crédit
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @returns la liste des conventions liées au crédit
         */
        getConventions(codeEtablissement: number, identifiantCredit: string): ng.IPromise<DTO.IConvention[]>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IEngagementParametreRest {
        getNatureGarantie(codeEtablissement: number, codeFamilleProduit: string, numeroRelatifProduit: string): ng.IPromise<GarantieEps.DTO.INature[]>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IGarantieCreditRest {
        /**
         * Récupère la liste des garanties liées à un crédit
         * @param {string} codeEtablissement
         * @param {string} identifiantCredit
         * @returns la liste des garanties liées au crédit
         */
        getGaranties(codeEtablissement: number, identifiantCredit: string): ng.IPromise<DTO.IGarantieGlobal>;
        putGarantie(garantieWrapper: Modele.IGarantieWrapper): ng.IPromise<DTO.IRetourQR[]>;
        sendRequestGetMontantCompta(codeEtablissement: number, identifiantCredit: string): ng.IPromise<DTO.IMontantComptaGlobal>;
        /**
         * Méthode le post d'un justificatif de garantie
         * @param {DTO.IDonneeGarantie} donneGarantie
         * @param {string} codeAction
         * @returns void
         */
        postJustificatifGarantie(donneGarantie: DTO.IDonneeGarantie, codeAction: string): ng.IPromise<DTO.IDonneeGarantie>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IGarantieEngagementRest {
        postGarantie(caracteristique: GarantieEps.DTO.Creation.ICaracteristique): ng.IPromise<GarantieEps.DTO.Creation.ICaracteristique>;
        putGarantie(caracteristique: GarantieEps.DTO.Creation.ICaracteristique): ng.IPromise<GarantieEps.DTO.Creation.ICaracteristique>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IJustificatifGarantieRest {
        setJustificatifsDansGarantie(codeEtablissement: number, identifiantCredit: string, garantie: DTO.IGarantieCredit): ng.IPromise<void>;
        /**
         * Récupère la liste des justificatif liés à une garantie
         * @param {number} codeEtablissement
         * @param {string} identifiantCredit
         * @param {string} identifiantGarantie
         * @returns la liste des justificatif liés à une garantie
         */
        getJustificatifGarantie(codeEtablissement: number, identifiantCredit: string, identifiantGarantie: string): ng.IPromise<DTO.JustificatifGarantie.IDonneeGarantie>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IListeDeviseRest {
        getDevises(): ng.IPromise<DTO.IDevise[]>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IObjetPorteGarantieRest {
        /**
         * Récupère les objets portés en garantie
         * @param {string} codeEtablissement
         * @param {string} identifiantDossier
         * @param {string} identifiantCredit
         * @returns un objet contenant la liste des objets portés en garantie
         */
        getObjetPorteEnGarantie(codeEtablissement: number, identifiantDossier: string, identifiantCredit: string): ng.IPromise<DTO.ObjetPorteGarantie.IObjetGarantieGlobal>;
        putObjetPorteEnGarantie(objetWrapper: Modele.IObjetPorteGarantieWrapper): ng.IPromise<DTO.IRetourQR[]>;
        /**
         * Méthode public pour l'envoi de la requête de la reestimation d'objet portee en garantie
         * @param {string} codeEtablissement
         * @param {string} identifiantDossier
         * @param {string} identifiantCredit
         * @returns null
         */
        sendRequestPutReestimation(majEstimationGlobal: DTO.EstimationObjet.IMajEstimationGlobal): ng.IPromise<any>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IParametreRest {
        getTypologiesCentreGestion(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesTypeTechniqueJuridique(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesZoneImplantation(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesTypeBien(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesModaliteEstimation(codeEtablissement: number, numeroCredit: string, cache: boolean): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypologiesMotifEstimation(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypologie[]>;
        /**
         * Récupère toutes les typologies
         * @param {string} codeEtablissement
         * @param {string} numeroCredit
         * @param {string} typeTypologie
         * @returns
         */
        getTypologies(codeEtablissement: number, numeroCredit: string, typeTypologie?: string): ng.IPromise<DTO.IParametreTypologie[]>;
        getTypesObjetReglemente(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypeObjetReglemente[]>;
        getPays(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametrePays[]>;
        getTypeObjetFinancementGarantie(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypeObjetFinancementGarantie[]>;
        getCategorieReglementaireAttributionTor(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreCategorieReglementaireAttributionTor[]>;
        getNatureGarantie(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreNatureGarantie[]>;
        getTypeObjetPorteGarantie(codeEtablissement: number, numeroCredit: string): ng.IPromise<DTO.IParametreTypeObjetPorteGarantie[]>;
        getModaliteEstimations(codeEtablissement: number, numeroCredit: string, cache: boolean): ng.IPromise<DTO.IParametreEstimation[]>;
        getMotifEstimations(codeEtablissement: number, numeroCredit: string, cache: boolean): ng.IPromise<DTO.IParametreCodeMotif[]>;
        loadListesEstimation(codeEtablissement: number, numeroCredit: string, cache: boolean, getListeModalitesVenale: () => DTO.ITypeModalite[], pushListeModalitesVenale: (modaliteVenale: DTO.ITypeModalite) => void, getListeMotifsVenale: () => DTO.IParametreCodeMotif[], pushListeMotifsVenale: (motifVenale: DTO.IParametreCodeMotif) => void, getListeModalitesPrudentielle: () => DTO.ITypeModalite[], pushListeModalitesPrudentielle: (modalitePrudentielle: DTO.ITypeModalite) => void, getListeMotifsPrudentielle: () => DTO.IParametreCodeMotif[], pushListeMotifsPrudentielle: (motifPrudentielle: DTO.IParametreCodeMotif) => void, filterTypologies: (list: DTO.IParametreTypologie[], codeTypologie: string) => DTO.IParametreTypologie): ng.IPromise<void>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface ISituationHypothequeRest {
        getGarantieHypotheque(codeEtablissement: number, identifiantCredit: string, identifiantEmprunteur: string, identifiantGarantie: string): ng.IPromise<DTO.IGarantieHypotheque>;
        getSituationHypotheque(codeEtablissement: number, identifiantCredit: string, codeEmprunteur: string): ng.IPromise<DTO.ISituationHypotheque>;
    }
}

declare module GarantieCredit.Service.ServiceLocator.Interfaces {
    interface IVersementAttenduRest {
        putVersementAttendu(data: DTO.VersementAttendu.IMajVersementAttenduGlobal): ng.IPromise<DTO.VersementAttendu.IMajVersementAttenduGlobal>;
    }
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}

declare module GarantieCredit {
}
