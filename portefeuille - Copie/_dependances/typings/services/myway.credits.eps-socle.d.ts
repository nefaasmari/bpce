
declare module creditsEps {
    var app: any;
}

declare module creditsEps.Constantes {
    module FormatMoment {
        var DATE_IHM: string;
        var DATE_REST: string;
    }
    module DetailsEps {
        var BOUTON_SURVEILLLANCE_TEXTE_DETAIL: string;
        var BOUTON_SURVEILLLANCE_TEXTE_FERMER: string;
    }
    module FooterActions {
        var ACTION_ATTRIBUT_CLIENT: string;
        var ACTION_RHO: string;
        var ACTION_ENCOURS: string;
        var ACTION_RETOUR_RECHERCHE: string;
        var ACTION_FERMER: string;
        var RETOUR_MENU: string;
        var QUITTER: string;
        var ACTION_SANS_SUITE: string;
    }
    module Route {
        var INDEX: string;
        var ECHEANCE: string;
        var CONSULTATION: string;
        var CREATION_EPS: string;
        var SELECTION_AUTORISATION: string;
        var ENCOURS: string;
        var RECHERCHE_CLIENT: string;
        var RECHERCHE_EPS: string;
        var ENTITE_TITULAIRE: string;
        var RECHERCHE_EPS_EN_ATTENTE: string;
        var SELECTION_EPS_EN_ATTENTE: string;
    }
    module ConsultationEps {
        var VOIR_TOUT: string;
        var VOIR_UNIQUEMENT_AGENCE: string;
    }
    module Popup {
        var BOUTON_FERMER: string;
    }
    module CheminVues {
        var MODALE: string;
        var CONSULTATION: string;
        var CREATION: string;
    }
    module Habilitation {
        var CONSULTATION: string;
        var CREATION_EPS: string;
        var CREATION_EPS_INTERNET: string;
        var CREATION_EPS_SANS_MODELE: string;
        var DECISION_EPS_INTERNET: string;
        var VALIDATION: string;
        var MODIFICATION: string;
    }
    class Cnil {
        static TITRE_SENSIBLE: string;
        static TITRE_INTERDIT: string;
        static INTRO_SENSIBLE: string;
        static INTRO_INTERDIT: string;
    }
    module CodeTypeMarche {
        var MARCHE: string;
        var MARCHE_PRINCIPAL: string;
    }
    module Contexte {
        var INDICATEUR_ORIGINE: string;
        var CARAC_EPS: string;
        var IDENTIFIANT_DOSSIER: string;
        var IDENTIFIANT_ENTITE_TITULAIRE: string;
    }
    class Evenement {
        static INIT_CREATION_EPS_EVENT: string;
    }
}

declare module creditsEps.Constantes {
    module Navigation {
        var DETAIL: string;
        var DONNEES_ACTE: string;
        var MONTANTS: string;
        var PERIODE: string;
        var ACCESSOIRES: string;
        var GARANTIES: string;
        var PAYEURS: string;
        var COMMENTAIRE: string;
        var HISTORIQUE: string;
        var AMORTISSEMENT: string;
    }
}

declare module creditsEps.Constantes {
    module Rest {
        var URL_REST: string;
        var ACCESSOIRE_ENGAGEMENT: string;
        var ENGAGEMENT_PARAMETRE: string;
        var ENTITE_TITULAIRE: string;
        var EPS_ATTRIBUT: string;
        var EPS_ATTRIBUT_SERVICE: string;
        var EPS_ENGAGEMENT: string;
        var GARANTIE_ENGAGEMENT: string;
        var OPERATION_FINANCIERE_SERVICE: string;
        var PAYEUR_ENGAGEMENT: string;
        var RISQUE_CLIENT: string;
        var STRUCTURE: string;
        var TIERS: string;
    }
    module ErreurRest {
        var AUCUN_COMMENTAIRE: string;
        var AUCUNE_FAMILLE_PRODUIT: string;
        var CODE_TIMEOUT: string;
        var LIBELLE_TIMEOUT: string;
        var LIBELLE_INCONNUE: string;
    }
    class Neo {
        static URL_REST_NEO: string;
        static REST_DOSSIER_CREDIT_INSTRUCTION: string;
    }
}

declare module creditsEps.EntiteTitulaire {
    /**
     * Controleur
     */
    class EntiteTitulaireControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private lisaService;
        private rechercheEntite;
        private $location;
        private contexteService;
        /** Injection de Dépendances */
        static $inject: string[];
        private tableauEntiteTitulaire;
        private chargementEnCours;
        /** Initialisation */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, lisaService: Services.Application.ILisaService, rechercheEntite: Rest.IRechercheService, $location: ng.ILocationService, contexteService: Services.Application.IDonneesContexteService);
        onSelectionChange(ligne: IEntiteTitulaire): void;
        annuler(): void;
    }
}

declare module creditsEps.EntiteTitulaire {
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        codeEtatEntiteTitulaire: string;
        modeCompositionIndivision: string;
        complementDesignationEntiteTitulaire: string;
    }
}

declare module creditsEps.EntiteTitulaire.Rest {
    interface IRechercheQuery {
        codeEtablissement: string;
        identifiantTiers: number;
        typeRechercheEntiteTitulaire: string;
    }
    interface IRechercheService {
        getRecherche(query: IRechercheQuery): ng.IPromise<Array<IEntiteTitulaire>>;
    }
}

declare module creditsEps.EntiteTitulaire {
    class TableauEntiteTitulaire implements MyWay.UI.ImwTableOptions {
        private colonneNumero;
        private colonneLibelle;
        private colonneUsage;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<IEntiteTitulaire>;
        selectedItems: Array<IEntiteTitulaire>;
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsEps.EntiteTitulaire {
}

declare module creditsEps.Filter {
}

declare module creditsEps.Modeles.Accessoire {
    interface IRecherche {
        listeAccessoires: Array<ISyntheseAccessoire>;
    }
    interface ISyntheseAccessoire extends Modeles.Commun.IElementTableau {
        /**
         * refInterne de l’EPS ou numeroEps suivant codeSupportDonneesEps.
         */
        identifiantEngagement: string;
        /**
         * Numéro relatif qui avec l'identifiant d'engagement et le numéro de phase permet d'identifier un accessoire unique.
         */
        numeroRelatif: string;
        /**
         * Numéro relatif de phase qui avec l'identifiant d'engagement et le numéro relatif  permet d'identifier un accessoire unique.
         */
        numeroRelatifPhase: string;
        /**
         * Libellé de l'accessoire qui correspond à sa nature.
         */
        libelleAccessoire: string;
        /**
         * Date de premier recouvrement de l'accessoire ou date de début de période
         */
        datePremierRecouvrement: Date;
        /**
         * Date de fin de l'accessoire.
         */
        dateFin: Date;
        /**
         * Type de calcul pour l'accessoire.
         * P pour périodique
         * A pour apériodique
         */
        typeCalcul: string;
        /**
         * Montant de l'accessoire. Uniquement pour typeCalcul =’A’.
         */
        montant: number;
        /**
         * Taux de l'accessoire. Uniquement pour typeCalcul =’P’.
         */
        taux: number;
        /**
         * Montant ou taux de l'accessoire. Suivi du type de calcul (ex: 250A ou 1P)
         */
        montantOuTaux: string;
    }
}

declare module creditsEps.Modeles.Accessoire {
    interface IAccessoire {
        /**
         * refInterne de l’EPS ou numeroEps suivant codeSupportDonneesEps.
         */
        identifiantEngagement: string;
        /**
         * Numéro relatif qui avec l'identifiant d'engagement et le numéro de phase permet d'identifier un accessoire unique.
         */
        numeroRelatif: number;
        /**
         * Numéro relatif de phase qui avec l'identifiant d'engagement et le numéro relatif permet d'identifier un accessoire unique.
         */
        numeroRelatifPhase: number;
        /**
         * Libellé de l'accessoire qui correspond à sa nature.
         */
        libelleAccessoire: string;
        /**
         * Type de calcul pour l'accessoire. ‘P’ pour périodique ‘A’ pour apériodique.
         */
        typeCalcul: Enumerations.Accessoires.TypeCalculEnum;
        /**
         * Indique sur quoi est calculé l'accessoire.
         * Exemple : assiette de commission.
         */
        typeAssiette: string;
    }
    interface IAccessoireAperiodique extends IAccessoire {
        /**
         * Date de fin de l'accessoire.
         */
        dateFin: string;
        /**
         * Montant de l'accessoire. Uniquement pour typeCalcul =’A’.
         */
        montant: number;
        /**
         * Taux de la TVA.
         */
        tauxTva: number;
        /**
         * Montant de la TVA.
         */
        montantTva: number;
        /**
         * Date de premier recouvrement de l'accessoire ou date de début de période
         */
        datePremierRecouvrement: string;
    }
    interface IAccessoirePeriodique extends IAccessoire {
        /**
         * Taux de l'accessoire. Uniquement pour typeCalcul =’P’.
         */
        taux: number;
        /**
         * Mode de calcul de l'accessoire.
         * Numérateur du mode calcul / Dénominateur du mode de calcul.
         * Exemple : nb jours / 360.
         */
        modeCalcul: string;
        /**
         * 'A'   année
         * 'S'   semestre
         * 'T'    trimestre
         * 'B'    bimestre
         * 'M'   mois
         */
        periodicite: Enumerations.Accessoires.PeriodiciteEnum;
        /**
         * Libellé du type de périodicité.
         * ‘Début de période’, ‘Fin de période’, ‘Anniversaire’  ‘Fin périodicité civile’
         */
        typePeriodicite: Enumerations.Accessoires.TypePeriodiciteEnum;
        /**
         * Terme de l'accessoire.
         * O à terme échu.
         * N à terme à échoir.
         */
        terme: string;
        /**
         * Date de début de période.
         */
        dateDebutPeriode: string;
        /**
         * Date de fin de période.
         */
        dateFinPeriode: string;
    }
    interface ICaracteristique {
        /**
         * Indicateur qui permet de choisir si on veut accéder aux données dans les bases d'instruction ou de gestion. Valeurs: 'G' pour gestion 'I' pour instruction.
         */
        codeSupportDonneesEps: string;
        /**
         * Accessoire
         */
        accessoire: IAccessoire;
    }
}

declare module creditsEps.Modeles.Beneficiaire {
    interface IAdresse {
        /**
         * Titre civilité nom prénom.
         */
        ligne1: string;
        /**
         * Complément ligne 2 (n° appart,étage, couloir).
         */
        ligne2: string;
        /**
         * N°entrée , résidence.
         */
        ligne3: string;
        /**
         * N° voie, libellé voie.
         */
        ligne4: string;
        /**
         * Lieu-dit.
         */
        ligne5: string;
        /**
         * Code postal.
         */
        codePostal: string;
        /**
         * Commune.
         */
        commune: string;
        /**
         * Pays.
         */
        pays: string;
    }
    interface ICaracteristiqueBeneficiaire {
        /**
         * refInterne de l’EPS  dans le cas d'une consultation en gestion sinon numeroEps.
         */
        identifiantEngagement: string;
        /**
         * Identifiant du bénéficiaire
         */
        identifiantBeneficiaire: string;
        /**
         * Indique le type de bénéficiaire.
         * ‘m’ pour personne morale
         * ‘p’ pour personne physique
         */
        typeBeneficiaire: Enumerations.Beneficiaire.TypeBeneficiaireEnum;
        /**
         * Siren de l'entreprise. Renseigné uniquement si typeBeneficiaire = ‘m’.
         */
        siren: string;
        /**
         * Date de naissance du bénéficiaire. Renseigné uniquement si typeBeneficiaire = ‘p’.
         */
        dateNaissance: Date;
        /**
         * Adresse du bénéficiare
         */
        adresse: IAdresse;
        /**
         * Nom du bénéficiaire
         */
        nom: string;
        /**
         * Prénom du bénéficiaire
         */
        prenom: string;
    }
}

declare module creditsEps.Modeles.Commentaire {
    interface ICaracteristiqueCommentaireEps {
        /**
         * Correspond à l'identifiant interne de l'Eps
         */
        identifiantEngagement: string;
        /**
         * Contient la totalité du commentaire saisie
         */
        texteCommentaire: string;
    }
    interface IResultat {
        /**
         * codeRetour de la QR
         */
        codeRetour: number;
        /**
         * undefined
         */
        message: string;
    }
}

declare module creditsEps.Modeles.Encours {
    interface ICaracteristiqueEncours {
        /**
         * Identifiant du client bancaire (identifiant de l'emprunteur).
         */
        identifiantClient: string;
        /**
         * undefined
         */
        listeEncours: Array<IEncours>;
    }
    interface IEncours {
        /**
         * Identifiant de l'engagement (famille d'autorisation).
         */
        identifiantEngGlobal: string;
        /**
         * undefined
         */
        famille: Commun.IElement;
        /**
         * Montant de l'encours net.
         */
        encoursNet: number;
        /**
         * Montant de l'encours brut.
         */
        encoursBrut: number;
        /**
         * Montant de la  ligne d'autorisation si active.
         */
        autorisationsActives: number;
        /**
         * Montant de la  ligne d'autorisation si échue.
         */
        autorisationsEchues: string;
        /**
         * Date début validité.
         */
        dateDebutValide: string;
        /**
         * Date fin validité.
         */
        dateFinValide: string;
    }
}

declare module creditsEps.Modeles.Eps {
    class ICaracteristiqueEps {
        /**
         * Référence eps dans NEO
         */
        numeroEps: string;
        /**
         * Référence eps dans synchro
         */
        refInterneEps: string;
        /**
         * Référence eps saisie par l'utilisateur
         */
        refExterneEps: string;
        /**
         * Statut de l'EPS
         */
        statut: string;
        /**
         * Origine de l'EPS (backoffice, internet)
         */
        origine: string;
        /**
         * undefined
         */
        famille: Commun.IElement;
        /**
         * undefined
         */
        produit: IProduit;
        /**
         * undefined
         */
        objet: Commun.IElement;
        /**
         * undefined
         */
        modeleActe: Commun.IElement;
        /**
         * undefined
         */
        beneficiaire: MyWay.Model.Client;
        /**
         * Montant de l'EPS dans la devise si différente de euro
         */
        montantDevise: number;
        /**
         * Devise de l'EPS si différente de euro
         */
        devise: string;
        /**
         * Montant initial de l'EPS
         */
        montant: number;
        /**
         * Valeur de l'assiette de commission
         */
        assietteCommission: number;
        /**
         * Montant actualisé de l'EPS
         */
        montantEncours: number;
        /**
         * Date de création de l'EPS
         */
        dateCreation: Date;
        /**
         * Date de fin de l'EPS
         */
        dateFin: Date;
        /**
         * Date de décision de l'EPS
         */
        dateDecision: Date;
        /**
         * Date de radiation de l'EPS
         */
        dateRadiation: Date;
        /**
         * Indique s'il y a rétrocession pour cet EPS.
         */
        retrocession: boolean;
        /**
         * Indique si l'EPS est amortissable.
         */
        amortissable: boolean;
        /**
         * Indique si l'EPS est en engagement global.
         */
        engagementGlobal: boolean;
        /**
         * undefined
         */
        payeur: Commun.IElement;
        /**
         * undefined
         */
        payeurSecours: Commun.IElement;
        /**
         * undefined
         */
        marche: Commun.IElement;
        /**
         * undefined
         */
        marchePrincipal: Commun.IElement;
        /**
         * Identifiant du client bancaire de l'EPS.
         */
        identifiantClient: string;
        /**
         * Référence suite migration de l'EPS.
         */
        refMigration: string;
    }
    interface IProduit {
    }
    interface IMarche {
        typeMarche: string;
    }
    interface IMarchePrincipal {
        typeMarche: string;
    }
}

declare module creditsEps.Modeles.Garantie {
    interface ICaracteristique {
        /**
         * refInterne de l’EPS ou numeroEps suivant codeSupportDonneesEps.
         */
        identifiantEngagement: string;
        /**
         * Identifiant de garantie qui avec l'identifiant d'engagement et le numéro relatif permet d'identifier une garantie unique.
         */
        identifiantGarantie: string;
        /**
         * Numéro relatif qui avec l'identifiant d'engagement et l l'identifiant de garantie permet d'identifier une garantie unique.
         */
        numeroRelatif: string;
        /**
         * Nature
         */
        nature: Commun.IElement;
        /**
         * Date de début de la garantie.
         */
        dateDebut: string;
        /**
         * Date de fin de la garantie.
         */
        dateFin: string;
        /**
         * Montant de la couverture de l'EPS par la garantie.
         */
        montantCouverture: number;
        /**
         * % de la couverture de la garantie.
         */
        quotite: number;
        /**
         * Indique s'il s'agit dune garantie de sous traitance
         */
        indicateurGarantieSsTraitance: boolean;
    }
}

declare module creditsEps.Modeles.Marche {
    interface IMarche {
        /**
         * Identifiant du marché.
         */
        IdentifiantMarche: string;
        /**
         * Type du marché.
         * ' ' pour marché.
         * ‘PR’ pour marché principal.
         */
        typeMarche: string;
        /**
         * Montant du marché.
         */
        montantMarche: number;
        /**
         * Date de signature du marché.
         */
        dateSignature: string;
        /**
         * Objet du marché.
         */
        objetMarche: string;
        /**
         * Numéro associer au marché.
         */
        numeroCommande: string;
    }
    interface IMarcheEps extends IMarche {
        /**
         * Date de fin du marché.
         */
        dateFin: string;
        /**
         * Tranche du marché.
         */
        trancheMarche: string;
        /**
         * Lot du marché.
         */
        lotMarche: string;
        /**
         * Lieu d'exécution
         */
        lieuExecution: string;
    }
    interface IMarchePrincipalEps extends IMarche {
        /**
         * Nom du groupement du marché.
         */
        nomGroupement: string;
        /**
         * Maître d'ouvrage du marché principal.
         */
        maitreOuvrage: string;
        /**
         * Tiers
         */
        tiers: ITiers;
    }
    interface ITiers {
        /**
         * Identifiant du tiers
         */
        identifiantTiers: string;
        /**
         * Type du tiers.
         * ‘Banque principale' ou 'Entreprise principale'.
         */
        typeTiers: string;
        /**
         * undefined
         */
        adresseTiers: IAdresse;
        /**
         * Nom du tiers
         */
        nom: string;
        /**
         * Prenom du tiers
         */
        prenom: string;
        /**
         * SIREN de l'entreprise
         */
        siren: string;
        /**
         * Type de la personne
         * ‘P’ physique
         * ‘M’ morale
         */
        typePersonne: string;
    }
    interface IAdresse {
        /**
         * Titre civilité nom prénom.
         */
        ligne1: string;
        /**
         * Complément ligne 2 (n° appart,étage, couloir).
         */
        ligne2: string;
        /**
         * N°entrée , résidence.
         */
        ligne3: string;
        /**
         * N° voie, libellé voie.
         */
        ligne4: string;
        /**
         * Lieu-dit.
         */
        ligne5: string;
        /**
         * Code postal.
         */
        codePostal: string;
        /**
         * Commune.
         */
        commune: string;
        /**
         * Pays.
         */
        pays: string;
    }
    interface ICaracteristiqueMarcheEps {
        /**
         * refInterne de l’EPS ou numeroEps suivant codeSupportDonneesEps.
         */
        identifiantEngagement: string;
        /**
         * undefined
         */
        marche: IMarcheEps;
        /**
         * undefined
         */
        marchePrincipal: IMarchePrincipalEps;
    }
}

declare module creditsEps.Modeles.Payeur {
    interface IPayeur {
        /**
         * Identifiant de la personne au sens large (client, tiers...)
         */
        identifiantPersonne: string;
        /**
         * Prend les valeurs suivantes :
         * ‘PS’ pour payeur de secours
         * ‘PP’ pour payeur principal
         */
        typePayeur: string;
        /**
         * undefined
         */
        modeReglement: IModeReglement;
        /**
         * Intitulé du titulaire du compte
         */
        libelleTiers: string;
        /**
         * Numéro de domiciliation bancaire
         */
        numeroDomiciliation: string;
        /**
         * Référence unique mandat
         */
        rum: string;
        /**
         * Date à laquelle le mandat autorisant le prélèvement sur le compte du débiteur a été signé.
         */
        dateSignatureMandat: Date;
    }
    interface IModeReglement {
        /**
         * indique le type de mode de règlement (PIN, CHQ...)
         */
        codeModeReglement: string;
        /**
         * Libellé du mode de règlement sur 32 car.
         */
        libelleLongModeReglement: string;
        /**
         * 'IBA' : IBAN
         * 'RIB' : RIB
         * 'TRE' : Trésorerie
         * etc...
         */
        typeDomiciliation: string;
    }
    interface ICaracteristique {
        /**
         * Pour EPS : reférence Interne de l’EPS ou numéro d'Eps suivant codeSupportDonneesEps
         */
        identifiantEngagement: string;
        /**
         * undefined
         */
        payeur: Array<IPayeur>;
        /**
         * undefined
         */
        payeurSecours: IPayeur;
    }
}

declare module creditsEps.Modeles.EntiteTitulaire {
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

declare module creditsEps.Modeles.RechercheEps {
    interface ISyntheseEps {
        refInterneEps: string;
        identifiantClient: string;
        dateCreation: string;
        montant: number;
        montantEncours: number;
        statut: Commun.IElement;
        sousStatut: string;
        origine: string;
        famille: Commun.IElement;
        produit: EngagementParametre.IProduit;
        modeleActe: string;
        partenariat: string;
        indicateurGarantie: boolean;
        codeEtablissement: string;
        refExterneEps: string;
        structure: Commun.IElement;
        refMigration: string;
        numeroEps: string;
    }
    interface IRecherche {
        listeEps: Array<ISyntheseEps>;
    }
}

declare module creditsEps.Modeles.AttributEps {
    interface IFamilleEpsET {
        /**
         * Liste des familles
         */
        listeFamilles: Array<IFamille>;
    }
    interface IFamille {
        /**
         * Identifiant de la famille d'encours EPS.
         * Cet identifiant discrimine les différents types d'EPS
         * lors de la création d'un EPS pour une personne et un
         * crédit.
         * C'est un identifiant défini manuellement
         * lors de toute demande de création d'une nouvelle
         * famille d'encours EPS.
         */
        identifiantFamille: string;
        /**
         * Libellé de la famille d'EPS (64 car)
         */
        libelleLongFamille: string;
        /**
         * Libellé court de la famille d'EPS (32 car)
         */
        libelleCourtFamille: string;
        /**
         * Liste des produits de la famille
         */
        listeProduits: Array<IProduit>;
    }
    interface IProduit {
        /**
         * Concatenation de codeFamilleProduit et numeroRelatif.
         */
        identifiantProduit: string;
        /**
         * Libellé du produit sur 32 car.
         */
        libelleProduit: string;
        /** Code famille produit. */
        codeFamilleProduit: string;
        /**
         * Numéro relatif du produit.
         */
        numeroRelatif: string;
    }
}

declare module creditsEps.Modeles.Garantie {
    interface IRecherche {
        /**
         * undefined
         */
        listeGaranties: Array<ISyntheseGarantie>;
    }
    interface ISyntheseGarantie extends Commun.IElementTableau {
        /**
         * refInterne de l’EPS ou numeroEps suivant codeSupportDonneesEps.
         */
        identifiantEngagement: string;
        /**
         * Identifiant de garantie qui avec l'identifiant d'engagement et le numéro relatif permet d'identifier une garantie unique.
         */
        identifiantGarantie: string;
        /**
         * Numéro relatif qui avec l'identifiant d'engagement et l l'identifiant de garantie permet d'identifier une garantie unique.
         */
        numeroRelatif: number;
        /**
         * undefined
         */
        nature: Commun.IElement;
        /**
         * Date de début de la garantie.
         */
        dateDebut: Date;
        /**
         * Date de fin de la garantie.
         */
        dateFin: Date;
        /**
         * Montant de la couverture de l'EPS par la garantie.
         */
        montantCouverture: number;
    }
}

declare module creditsEps.Modeles {
    interface IHeader {
        clientBancaire: number;
        nom: string;
        partenariat: string;
        agence: string;
    }
    interface IHeaderConsultation extends IHeader {
        numEps: string;
        idEps: string;
        etat: string;
        dateRadiation: string;
        origine: string;
        famille: string;
        produit: string;
        objet: string;
        refDocument: string;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Interface contenant les données de l'écran actuelle
     * Ces données sont à définir dans le resolve des routes dans app.ts
     */
    interface IRouteActuelle extends ng.route.ICurrentRoute {
        locals: {
            $scope: ng.IScope;
            $template: string;
            headerTemplateUrl: string;
            titrePage: string;
            afficherMenu: boolean;
        };
    }
    /** Service route de l'application */
    interface IApplicationRoute extends ng.route.IRouteService {
        current: IRouteActuelle;
    }
    /** Controleur de l'application */
    class ApplicationControleur {
        private serviceAgentExtended;
        private scope;
        private $route;
        /** Injection de Dépendances */
        static $inject: string[];
        private titrePage;
        /** Url du footer pour la page actuelle */
        footerTemplateUrl: string;
        /** URL du header pour la page actuelle */
        headerTemplateUrl: string;
        /** Afficher ou non le menu */
        afficherMenu: boolean;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, scope: ng.IScope, $route: IApplicationRoute);
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class ModalPDFControleur {
        private serviceAgentExtended;
        private data;
        private $modalInstance;
        private $sce;
        /** Injection de Dépendances */
        static $inject: string[];
        private pdfURL;
        /** Données de la modale */
        modalDatas: any;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $sce: ng.ISCEService);
        /** Fermeture de la modale */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur du menu
     */
    class NavigationControleur {
        private $location;
        private serviceAgentExtended;
        navigation: Array<MyWay.UI.TotemComponent>;
        static $inject: string[];
        /** Initialisation */
        constructor($location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur des footers des écrans de consultation d'un EPS
     */
    class PointEntreeControleur {
        private serviceAgentExtended;
        private $scope;
        private lisaService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, lisaService: Services.Application.ILisaService);
        rechercheClient(): void;
        creerEps(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class ConsultationControleur {
        private $scope;
        private serviceAgentExtended;
        private lisaService;
        private popupService;
        /** Injection de Dépendances */
        static $inject: string[];
        eps: Modeles.Eps.ICaracteristiqueEps;
        /** Liste des actions du bouton */
        listeBoutonActions: MyWay.UI.IBoutonActionRiche[];
        /** Initialisation */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, lisaService: Services.Application.ILisaService, popupService: Services.IPopupService);
        retourRecherche(): void;
        visualiserActe(): void;
        attributClient(): void;
        rho(): void;
        encours(): void;
        /** Quitter l'application */
        quitter(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class DetailControleur {
        private serviceAgentExtended;
        private data;
        private $modalInstance;
        private donneesService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private devise;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, donneesService: Services.Application.IDonneesService);
        /** Fermeture de la modale */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class EcheanceControleur {
        private serviceAgentExtended;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class EncoursControleur {
        private serviceAgentExtended;
        private $scope;
        private encoursService;
        private popupService;
        private lisaService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        tableauEncours: Modeles.Tableaux.TableauEncours;
        private chargementEncours;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, encoursService: Services.Rest.Encours.ICaracteristiqueEncoursService, popupService: Services.IPopupService, lisaService: Services.Application.ILisaService);
        retour(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class CreationEpsControleur {
        private serviceAgent;
        private $scope;
        private $rootScope;
        private mwEvents;
        private $location;
        private lisaService;
        private popupService;
        private creationEpsService;
        private lireDossierService;
        private donneesCreationService;
        private loadingService;
        private fermerDossierService;
        /** Injection de Dépendances */
        static $inject: string[];
        private epsEnAttente;
        private epsEnGestion;
        /** Liste des actions du bouton */
        private listeBoutonActions;
        private editionDocumentEnCours;
        private chargementPlusAction;
        private syntheseErreurs;
        private erreurInit;
        private titreSyntheseErreur;
        /** Initialisation */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, $location: ng.ILocationService, lisaService: Services.Application.ILisaService, popupService: Services.IPopupService, creationEpsService: Services.Application.ICreationEpsService, lireDossierService: Services.Application.ILireDossierService, donneesCreationService: Services.Application.IDonneesCreationService, loadingService: Services.ILoadingService, fermerDossierService: Services.Rest.Neo.DossierCreditInstruction.IFermerDossierService);
        /**
         * Fin création
         */
        passerGestion(): void;
        traiterAnomalies(listeAnos: Array<Modeles.Neo.DossierCreditInstruction.IAnomalieLecture>): void;
        /**
         * Sauvegarde
         */
        mettreEnAttente(): void;
        /**
         * Passer l'eps à sans suite
         */
        passerSansSuite(): void;
        encours(): void;
        retourRecherche(): void;
        retourErreur(): void;
        attributClient(): void;
        abandonner(): void;
        fermerDossier(): ng.IPromise<void>;
        previsualiserActe(): void;
        /** */
        goToAnchor(ancre: string): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class GererEpsAttenteControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgent;
        private $scope;
        private epsAttenteService;
        private popupService;
        private lisaService;
        /** Injection de Dépendances */
        static $inject: string[];
        private chargement;
        private listeEpsEnAttente;
        /** Initialisation */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, epsAttenteService: Services.Application.Creation.EpsEnAttente.IEpsEnAttenteService, popupService: Services.IPopupService, lisaService: Services.Application.ILisaService);
        onSelectionChange(selection: Modeles.RechercheEps.ISyntheseEps): void;
        fermer(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class SelectionAutorisationControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgent;
        private $scope;
        private $location;
        private gacService;
        private popupService;
        private creationEpsService;
        private rechercheFamilleEps;
        private creationServiceCommun;
        private notationService;
        private selectionAutorisationService;
        private lisaService;
        /** Injection de Dépendances */
        static $inject: string[];
        private identifiantClientBancaire;
        private identifiantPersonne;
        private codeEtablissement;
        private tableauAutorisation;
        private chargementTableauAutorisation;
        /** Initialisation */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, gacService: Services.Rest.Gac.ICaracteristiqueGacService, popupService: Services.IPopupService, creationEpsService: Services.Application.ICreationEpsService, rechercheFamilleEps: Services.Rest.EngagementParametre.IRechercheFamilleEPSService, creationServiceCommun: EpsCommun.Services.CreationService, notationService: Services.Rest.RisqueClient.INotationTiersService, selectionAutorisationService: Services.Application.Creation.SelectionAutorisation.ISelectionAutorisationService, lisaService: Services.Application.ILisaService);
        construireTableauAutorisation(caracGac: Modeles.Gac.ICaracteristiqueGAC): void;
        /**
         * Fonction vérifiant si le client est dans un état qui permet la création d’un EPS
         * false-> impossible créer EPS
         * true -> possible
         */
        creationEpsPermise(identifiantTiers: number, codeEtablissement: string): ng.IPromise<boolean>;
        periodiciteDateButoirToMoment(periodicite: string, delai: number): string;
        /** Retour à l'index */
        abandonner(): void;
        /**
         * Selection d'une ligne du tableau
         */
        onSelectionChange(selection: Modeles.Gac.ILigneAutorisation): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class SelectionEpsAttenteControleur {
        private serviceAgent;
        private $scope;
        private epsAttenteService;
        private popupService;
        private lisaService;
        /** Injection de Dépendances */
        static $inject: string[];
        private numeroInstruction;
        /** Initialisation */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, epsAttenteService: Services.Application.Creation.EpsEnAttente.IEpsEnAttenteService, popupService: Services.IPopupService, lisaService: Services.Application.ILisaService);
        /**
         * Ouverture du dossier
         */
        rechercher(): void;
        fermer(): void;
    }
}

declare module creditsEps.Controleurs {
    class RechercheClientData {
        choixMultiples: any;
        isUnChoixMultipleTrue: boolean;
        familleRisque: Modeles.AttributEps.IFamille;
        produit: Modeles.AttributEps.IProduit;
        isGarantie: boolean;
        isModele: boolean;
        isSansModele: boolean;
        isFamille: boolean;
        trieEps: string;
        /**
         * Label de la checkbox séléction/désélection
         */
        private deselectionLabel;
        selectionnerTout: boolean;
        deselectionnerIndeterminate: boolean;
        constructor();
        selectAll(): void;
        multiselectionChange(): void;
        resetData(): void;
    }
    /**
     * Controleur de l'écran de recherche des eps par client
     * @author S0077481
     */
    class RechercheClientControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgentExtended;
        private $scope;
        private lisaService;
        private familleProduitService;
        private epsService;
        private donnees;
        private rechercheService;
        private popup;
        /** Injection de dépendances */
        static $inject: string[];
        private clientBancaire;
        afficherResultat: boolean;
        data: RechercheClientData;
        isOpen: boolean;
        isMoreInput: boolean;
        famillesRisque: Array<Modeles.AttributEps.IFamille>;
        private tableauResultats;
        private chargementFamilleRisque;
        private chargementTableauRecherche;
        private chargementCaracEps;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, lisaService: Services.Application.ILisaService, familleProduitService: Services.Rest.FamilleProduit.IFamilleEpsService, epsService: Services.Rest.Eps.ICaracteristiqueEpsService, donnees: Services.Application.IDonneesService, rechercheService: Services.Rest.RechercheEps.IRechercheService, popup: Services.IPopupService);
        /** Quitter l'application */
        abandonner(): void;
        /** Retour à la recherche personne */
        retour(): void;
        toggleMultiCrit(): void;
        rechercherEps(): void;
        /** Fonction appelée lors de la sélection d'une ligne du tableau résultat */
        onSelectionChange(selectedObject: Modeles.RechercheEps.ISyntheseEps): void;
        clickFamille($item: Modeles.AttributEps.IFamille, $model: string, $label: string): void;
        clickProduit($item: Modeles.AttributEps.IProduit, $model: string): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran de recherche des eps par référence
     * @author S0077481
     */
    class RechercheReferenceControleur {
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        $scope: ng.IScope;
        $location: ng.ILocationService;
        popupService: Services.IPopupService;
        private lisaService;
        private caracteristiqueEpsService;
        private donneesService;
        /** Injection de Dépendances */
        static $inject: string[];
        numEps: string;
        referenceMigration: string;
        referenceExterne: string;
        backupNumEps: string;
        backupreferenceMigration: string;
        backupReferenceExterne: string;
        private rechercheEnCours;
        /** initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, popupService: Services.IPopupService, lisaService: Services.Application.ILisaService, caracteristiqueEpsService: Services.Rest.Eps.ICaracteristiqueEpsService, donneesService: Services.Application.IDonneesService);
        /** Retour au point d'entrée */
        abandonner(): void;
        /** Recherche */
        rechercher(): void;
        /**
         * Renvoie true si la recherche est correcte
         * false sinon
         */
        validerRecherche(): boolean;
        /** Remise à zéro des données de la recherche */
        resetData(): void;
        verifierRefereceInterne(referenceMigration: string): void;
    }
}

declare module creditsEps.Directives.Accessoire {
    /**
     * Controleur de la directive mw-infos-eps
     */
    class MwAccessoireControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private popupService;
        private donneesService;
        private creationEps;
        private accessoireService;
        private caracteristiqueAccessoireService;
        private creationAccessoireService;
        private donneesCreation;
        static $inject: string[];
        private eps;
        private tableauAccessoires;
        private chargementEnCours;
        private erreurAccessoire;
        private pageCreation;
        private chargementCaracAccessoire;
        private isAjouterAccessoireAutorise;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, popupService: Services.IPopupService, donneesService: Services.Application.IDonneesService, creationEps: Services.Application.ICreationEpsService, accessoireService: Services.Rest.Accessoire.IRechercheAccessoireService, caracteristiqueAccessoireService: Services.Rest.Accessoire.ICaracteristiqueAccessoireService, creationAccessoireService: Services.Application.Creation.Accessoire.ICreationAccessoireService, donneesCreation: Services.Application.IDonneesCreationService);
        /**
         * Selection d'une ligne du tableau
         */
        onSelectionChange(selection: any): void;
        /** Ouverture de la fenêtre modale permettant d'ajouter un nouvel accessoire  */
        ajouterAccessoire(): void;
        montantOuFraisAccessoire(accessoire: Modeles.Accessoire.ISyntheseAccessoire): void;
    }
}

declare module creditsEps.Directives.Accessoire {
    /**
     * Directive affichant le panel informations eps
     */
    function mwAccessoire(): ng.IDirective;
}

declare module creditsEps.Directives.Controleurs {
    /**
     * Controleur de la directive header-eps
     */
    class HeaderControleur {
        private serviceAgentExtended;
        private $scope;
        private donneesService;
        private donneesContexte;
        private creationEps;
        private entiteTitulaireService;
        private notationService;
        private partenariatService;
        private caracGacService;
        private structureService;
        static $inject: string[];
        /**
         * Informations à afficher dans le header
         */
        eps: Modeles.Eps.ICaracteristiqueEps;
        encartClient: any;
        chargementEncartClient: boolean;
        private ligneAutorisation;
        page: string;
        afficherDateRadiation: boolean;
        private erreurEncartClient;
        private libelleProduit;
        private libelleObjet;
        private referenceDocument;
        private statut;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, donneesService: Services.Application.IDonneesService, donneesContexte: Services.Application.IDonneesContexteService, creationEps: Services.Application.ICreationEpsService, entiteTitulaireService: Services.Rest.EntiteTitulaire.IInformationEntiteTitulaireService, notationService: Services.Rest.RisqueClient.INotationTiersService, partenariatService: Services.Rest.EngagementParametre.IRecherchePartenariatEpsService, caracGacService: Services.Rest.Gac.ICaracteristiqueGacService, structureService: Services.Rest.Structure.IRechercheService);
        chargerEnteteClient(contexte: Services.Application.IDonneesContexteModele): void;
    }
}

declare module creditsEps.Directives {
    /**
     * Directive affichant des informations en haut de l'application
     * Ces informations sont à transmettre à l'attribut informations-eps
     */
    function Header(): ng.IDirective;
}

declare module creditsEps.Directives.DonneesActe {
    /**
     * Controleur de la directive header-eps
     */
    class MwDonneesActeControleur {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private popupService;
        private donneesService;
        private creationEps;
        private caracteristiqueBeneficiaireService;
        private caracteristiqueMarcheService;
        private recherchePersonneService;
        private entiteTitulaireService;
        private donneesCreation;
        private creationServiceBeneficiaire;
        static $inject: string[];
        private pageCreation;
        private eps;
        private recherchePersonne;
        private libelleBeneficiaire;
        private marche;
        private marchePrincipal;
        private beneficiaireDedie;
        private chargementDonnees;
        private isBeneficiaireRenseigne;
        private isMarcheRenseigne;
        private isMarchePrincipalRenseigne;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, popupService: Services.IPopupService, donneesService: Services.Application.IDonneesService, creationEps: Services.Application.ICreationEpsService, caracteristiqueBeneficiaireService: Services.Rest.Beneficiaire.ICaracteristiqueBeneficiaireEpsService, caracteristiqueMarcheService: Services.Rest.Marche.ICaracteristiqueMarcheEpsService, recherchePersonneService: myway.comGestionClient.RechercherPersonneService, entiteTitulaireService: Services.Rest.EntiteTitulaire.IInformationEntiteTitulaireService, donneesCreation: Services.Application.IDonneesCreationService, creationServiceBeneficiaire: Services.Application.Creation.Beneficiaire.ICreationBeneficiaireService);
        ouvrirBeneficiaire(): void;
        /** Ouverture de la modale de détail du bénéficiaire en consultation */
        afficherBeneficiaire(): void;
        saisirMarche(): void;
        saisirMarchePrincipal(): void;
        /** Récupération des données du marché */
        afficherMarche(marche: Modeles.Eps.IMarche): void;
        /** Ouverture de la modale de détail du marché */
        openPopupMarche(marche: Modeles.Marche.ICaracteristiqueMarcheEps): void;
        /** Ouverture de la modale de détail du marché principal */
        openPopupMarchePrincipal(marche: Modeles.Marche.ICaracteristiqueMarcheEps): void;
        /** Récupération des données du marché principal */
        afficherMarchePrincipal(marche: Modeles.Eps.IMarchePrincipal): void;
    }
}

declare module creditsEps.Directives.DonneesActe {
    /**
     * Directive affichant des informations en haut de l'application
     * Ces informations sont à transmettre à l'attribut informations-eps
     */
    function mwDonneesActe(): ng.IDirective;
}

declare module creditsEps.Directives.Periode {
    /**
     * Controleur de la directive mw-commentaire
     */
    class MwCommentaireControleur {
        private $scope;
        private serviceAgentExtended;
        private $location;
        private donneesService;
        private creationEps;
        private popupService;
        private commentaireService;
        private cnilService;
        private donneesCreation;
        static $inject: string[];
        private eps;
        private commentaire;
        private erreur;
        private chargementEnCours;
        private pageCreation;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, donneesService: Services.Application.IDonneesService, creationEps: Services.Application.ICreationEpsService, popupService: Services.IPopupService, commentaireService: Services.Rest.Commentaire.ICaracteristiqueCommentaireEpsService, cnilService: Services.Application.CnilService, donneesCreation: Services.Application.IDonneesCreationService);
        testMotsInterdit(texte: string): void;
    }
}

declare module creditsEps.Directives.Periode {
    /**
     * Directive affichant le panel commentaire
     */
    function mwCommentaire(): ng.IDirective;
}

declare module creditsEps.Directives.ErreurChargement {
    /**
     * Controleur de la directive mw-periode
     */
    class MwErreurChargementControleur {
        private serviceAgentExtended;
        static $inject: string[];
        private erreur;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module creditsEps.Directives.ErreurChargement {
    /**
     * Directive affichant erreur
     */
    function mwErreurChargement(): ng.IDirective;
}

declare module creditsEps.Directives.Garantie {
    /**
     * Controleur de la directive mw-infos-eps
     */
    class MwGarantieControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private popupService;
        private donneesService;
        private creationEps;
        private rechercheGarantieService;
        private caracteristiqueGarantieService;
        private donneesCreation;
        static $inject: string[];
        private eps;
        private tableauGaranties;
        private chargementEnCours;
        private erreur;
        private pageCreation;
        private chargementGarantie;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, popupService: Services.IPopupService, donneesService: Services.Application.IDonneesService, creationEps: Services.Application.ICreationEpsService, rechercheGarantieService: Services.Rest.Garantie.IRechercheGarantieService, caracteristiqueGarantieService: Services.Rest.Garantie.ICaracteristiqueGarantieService, donneesCreation: Services.Application.IDonneesCreationService);
        /**
         * Selection d'une ligne du tableau
         */
        onSelectionChange(selection: Modeles.Garantie.ISyntheseGarantie): void;
        /** Ouverture de la fenêtre modale permettant d'ajouter une nouvelle garantie  */
        ajouterGarantie(): void;
    }
}

declare module creditsEps.Directives.Garantie {
    /**
     * Directive affichant le panel garatnie
     */
    function mwGarantie(): ng.IDirective;
}

declare module creditsEps.Directives.Montant {
    /**
     * Controleur de la directive header-eps
     */
    class MwMontantControleur {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private donneesService;
        private creationEps;
        private donneesCreation;
        static $inject: string[];
        private eps;
        /** true si en création d'eps */
        private pageCreation;
        private fichierAmortissement;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, donneesService: Services.Application.IDonneesService, creationEps: Services.Application.ICreationEpsService, donneesCreation: Services.Application.IDonneesCreationService);
        supprimerFichierAmortissement(): void;
    }
}

declare module creditsEps.Directives.Montant {
    /**
     * Directive affichant le panel montant
     */
    function mwMontant(): ng.IDirective;
}

declare module creditsEps.Directives.Payeur {
    /**
     * Controleur de la directive header-eps
     */
    class MwPayeurControleur {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private popupService;
        private donneesService;
        private creationEps;
        private caracteristiquePayeurService;
        private tiersNoyauService;
        private donneesCreation;
        private creationPayeurService;
        static $inject: string[];
        private eps;
        private caracteristiquePayeur;
        private pageCreation;
        private chargementPayeur;
        private suppressionEnCours;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, popupService: Services.IPopupService, donneesService: Services.Application.IDonneesService, creationEps: Services.Application.ICreationEpsService, caracteristiquePayeurService: Services.Rest.Payeur.ICaracteristiquePayeurService, tiersNoyauService: Services.Rest.Tiers.ITiersNoyauService, donneesCreation: Services.Application.IDonneesCreationService, creationPayeurService: Services.Application.Creation.Payeur.ICreationPayeurService);
        saisirPayeur(typePayeur: string): void;
        afficherPayeur(typePayeur: string): void;
        supprimerPayeurSecours(): void;
        /** Ouverture de la modale de détail des payeurs */
        openPopupPayeur(payeur: Modeles.Payeur.IPayeur): void;
    }
}

declare module creditsEps.Directives.Payeur {
    /**
     * Directive affichant le panel payeur
     */
    function mwPayeur(): ng.IDirective;
}

declare module creditsEps.Directives.Periode {
    /**
     * Controleur de la directive mw-periode
     */
    class MwPeriodeControleur {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private donneesService;
        private creationEps;
        private donneesCreation;
        static $inject: string[];
        private eps;
        private pageCreation;
        private ajouterDateFin;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, donneesService: Services.Application.IDonneesService, creationEps: Services.Application.ICreationEpsService, donneesCreation: Services.Application.IDonneesCreationService);
    }
}

declare module creditsEps.Directives.Periode {
    /**
     * Directive affichant le panel montant
     */
    function mwPeriode(): ng.IDirective;
}

declare module creditsEps.Directives.Controleurs {
    /**
     * Controleur de la directive header-eps
     */
    class ResponsiveTableControleur {
        private serviceAgentExtended;
        private $scope;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope);
    }
}

declare module creditsEps.Directives {
    /**
     * Directive affichant des informations en haut de l'application
     * Ces informations sont à transmettre à l'attribut informations-eps
     */
    function responsiveTable(): ng.IDirective;
}

declare module creditsEps.Filter.Accessoires {
    function assietteFilter(): (typeCalcul: Enumerations.Accessoires.TypeCalculEnum) => string;
}

declare module creditsEps.Filter.Accessoires {
}

declare module creditsEps.Filter.Accessoires {
}

declare module creditsEps.Filter.Accessoires {
}

declare module creditsEps.Filter.Accessoires {
}

declare module creditsEps.Filter.Accessoires {
    function typeCalculAccessoire(): (typeCalcul: Enumerations.Accessoires.TypeCalculEnum) => string;
}

declare module creditsEps.Filter.Accessoires {
}

declare module creditsEps.Filter {
}

declare module creditsEps.Modeles.Commun {
    interface IElement {
        /**
         * code de l'élément
         */
        code: string;
        /**
         * libellé court de l'élémént
         */
        libelleCourt?: string;
        /**
         * libellé de l'élément
         */
        libelle: string;
    }
}

declare module creditsEps.Modeles.Commun {
    interface IElementTableau {
        identifiantTableau: number;
    }
}

declare module creditsEps.Modeles.Commun {
    interface IMessageErreur {
        /**
         * Code de l'erreur
         */
        codeErreur: string;
        /**
         * Description de l'erreur
         */
        libelleErreur: string;
    }
    interface IErreurForm {
        erreur: string;
        ancre: string;
    }
    interface IErreur extends MyWay.Services.Erreur {
        libelleErreur404: string;
    }
}

declare module creditsEps.Modeles.Commun {
    interface ILoading {
        /**
         * un nombre compris entre 0 et 1 pour afficher la barre de progression et -1 si l'état d'avancement du traitement est inconnu.
         */
        etat: number;
        /**
         * true pour afficher la barre, false pour l'enlever
         */
        visible: boolean;
        /**
         * Promesse traitée pendant le chargement long
         */
        promise?: ng.IPromise<any>;
    }
}

declare module creditsEps.Modeles.RisqueClient {
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

declare module creditsEps.Modeles.Creation {
    interface IAccessoireSyntheseCreation extends Accessoire.ISyntheseAccessoire {
        cotisation: Neo.DossierCreditInstruction.ICotisationLecture;
        accessoireCarac: Modeles.EngagementParametre.IModaliteCalculAccessoireProduit;
        accessoireLieProduit: Modeles.Neo.DossierCreditInstruction.IAccessoireLieProduitLecture;
    }
}

declare module creditsEps.Modeles.Gac {
    interface ILigneAutorisation {
        /**
         * Numéro d'Identification d'une ligne d'autorisation
         */
        identifiantLigneAutorisation: string;
        /**
         * Numéro d’identification d'une famille d'EPS
         */
        identifiantFamilleEPS: string;
        /**
         * Date prévisionnelle de réception de fin de travaux + le délai en mois.
         */
        delaiDateButoir: number;
        /**
         * Date de radiation calculée avec delaiDateButoir et regleDateButoir
         */
        dateRadiationAutomatique: string;
        /**
         * undefined
         */
        listeTarificationDerogatoire: Array<ITarificationDerogatoire>;
        /**
         * undefined
         */
        listeCadreFinancement: Array<IModeleCadreFinancement>;
        /**
         * Cette rubrique constitue le type de ligne d’autorisation.
         * Lorsqu’il y a un partenariat client EPS, on a plusieurs lignes d’autorisation pour une même famille de risque : une standard et une spécifique.
         * - SPACE	 Standard
         * - SMA Spécifique SMA
         * - ADF Spécifique ADEF
         */
        typeLigneAutorisation: string;
        /**
         * Cette rubrique constitue le top permettant de savoir si la ligne d'autorisation et/ou le modèle d'acte sont accessibles par le client via l'application Banque en Ligne pour la saisie d'un EPS.
         * - O Accessible
         * - N Non accessible
         */
        topAutoriseInternet: boolean;
        /**
         * Cette rubrique constitue la règle permettant de déterminer la date de radiation automatique d'un EPS.
         * Il faut prendre en compte le délai et la périodicité date butoir dans le calcul de cette date.
         * - NON Pas de date de radiation automatique
         * - FTR Date de radiation automatique = date de fin de travaux + délai
         * - DEB Date de radiation automatique = date de début d'EPS + délai
         */
        regleDateButoir: string;
        /**
         * valeurs possibles : J (jour), M (mois), T (trimestre), S (semestre), A (année)
         */
        periodiciteDateButoir: string;
        /**
         * Cette rubrique constitue le montant plafond de la somme totale des EPS en cours sur la ligne d'autorisation.
         */
        montantPlafondGlobal: number;
        /**
         * Cette rubrique constitue le montant maximum d'un EPS saisi sur l'application Banque en Ligne pour cette ligne d'autorisation.
         */
        montantMaximumEPSInternet: number;
        /**
         * Cette rubrique constitue le montant obtenu par la somme totale des EPS en cours sur la ligne d'autorisation.
         */
        montantUtilise: number;
        /**
         * Cette rubrique constitue le top indiquant si le montant plafond sur la ligne d'autorisation est comptabilisé dans le bilan de l'établissement.
         * - 'O' : Oui
         * - 'N' : Non
         */
        indicateurComptabilise: boolean;
        /**
         * Cette rubrique constitue le top indiquant si un pool par défaut est proposé pour la saisie d'EPS sur cette ligne d'autorisation.
         * - 'O' : Oui
         * - 'N' : Non
         */
        indicateurPoolAutomatique: boolean;
        /**
         * Cette rubrique constitue le top indiquant si un pool par défaut est obligatoirement utilisélors de la saisie d'EPS sur cette ligne d'autorisation.
         * - 'O' : Oui
         * - 'N' : Non
         */
        indicateurPoolObligatoire: boolean;
        /**
         * Cette rubrique constitue le date de début de validité de la ligne d'autorisation du client EPS.
         */
        dateDebutValidite: string;
        /**
         * Cette rubrique constitue le date de fin de validité de la ligne d'autorisation du client EPS.
         * Elle est calculée à partir du délai et de la périodicité durée validité paramétrés par établissement.
         * On ne peut pas saisir d’EPS sur la ligne d’autorisation correspondante à partir de cette date (sauf si une date limite de droits à tirage est paramétrée).
         */
        dateFinValidite: string;
        /**
         * Cette rubrique constitue le date limite de droits à tirage sur la ligne d'autorisation du client EPS.
         * Elle est calculée à partir du délai et de la périodicité dépassement autorisé paramétrés par établissement.
         * Dans certains établissements, on autorise en effet un client à saisir des EPS après la date de fin de validité de la ligne.
         */
        dateLimiteDroitTirage: string;
        /**
         * ‘EUR’
         */
        codeDevise: string;
        /**
         * Identifiant du pool par défaut.
         */
        identifiantCadreFinancement: string;
        /**
         * Indique une rétrocession au client d'une commission periodique pour la fraction de période déjà facture d'avance.
         */
        topRetrocessionEPS: boolean;
        /**
         * Cette rubrique constitue le cadre de partenariat d’un client EPS.
         * - SPACE Sans partenaire - Standard
         * - SMA Partenaire SMA
         * - ADF Partenaire ADEF
         */
        codeTypePartenariatClientEPS: string;
        /**
         * Date de mise a jour de la ligne d'autorisation
         */
        dateMAJLigneAutorisation: string;
        /**
         * undefined
         */
        listePayeurGAC: Array<IPayeurGAC>;
        /**
         * Cette rubrique constitue le user de la dernière personne ayant mis à jour les attributs du client EPS
         */
        identifiantUserDerniereMAJ: string;
    }
    interface ITarificationDerogatoire {
        /**
         * Cette rubrique constitue le canal de distribution d'un EPS
         * - BO	Back Office
         * - IN	Internet
         */
        canalDistribution: string;
        /**
         * Cette rubrique constitue l’identifiant technique d’une facturation dérogatoire.
         * Des remises de facturation peuvent être accordées à un client EPS.
         * Elles s'appliqueront systématiquement aux EPS saisis dans leur période de validité, en substitution de la tarification standard.
         */
        identifiantRemise: string;
        /**
         * Code permettant d'indiquer le type d'élément financier, en dehors des éléments constituant le T.A.
         */
        codeTypeAccessoire: string;
        /**
         * Cette rubrique constitue le code indiquant si la tarification dérogatoire concerne le produit avec ou sans date butoir.
         * - O	Avec date butoir
         * - N	Sans date butoir
         */
        codeDateButoir: boolean;
        /**
         * Cette rubrique constitue le code indiquant si la tarification dérogatoire concerne le produit avant ou après réception du PV de fin de travaux.
         * - AV	Avant réception PV
         * - AP	Après réception PV
         * - AA	Avant et après réception PV
         */
        codeReceptionPVTravaux: string;
        /**
         * Date début de validité de la remise.
         */
        dateDebutValiditeRemise: string;
        /**
         * Date de fin de validité de la remise.
         */
        dateFinValiditeRemise: string;
        /**
         * Cette rubrique constitue le taux de remise à appliquer sur la tarification standard à prendre en compte
         * pour la facturation de frais d'un EPS sur une ligne d’autorisation pour laquelle il y a une facturation dérogatoire en cours de validité.
         */
        tauxRemise: number;
        /**
         * Date de dernière mise à jour.
         */
        dateDerniereMAJRemise: string;
        /**
         * Montant de la facturation
         */
        montantFacturation: number;
        /**
         * Numéro d’identification du dernier utilisateur ayant effectué une mise à jour.
         */
        identifiantUserDerniereMAJ: string;
        /**
         * Numéro d'Identification d'une ligne d'autorisation
         */
        identifiantLigneAutorisation: string;
    }
    interface IModeleCadreFinancement {
        /**
         * Numéro d’identification d'un cadre de financement
         */
        identifiantCadreFinancement: string;
        /**
         * Ce numéro représente la version du cadre de financement. Il sera incrémenté automatiquement lors de la création ou de la modification d'un cadre.
         */
        numeroVersionCadre: number;
        /**
         * Numéro d'Identification d'une ligne d'autorisation
         */
        identifiantLigneAutorisation: string;
        /**
         * Plusieurs pools type peuvent être associés à une ligne d'autorisation du client EPS.
         * numéro permet de les ordonner et de déterminer le pool par défaut (numéro d’ordre le plus petit des pools en cours de validité).
         */
        numeroOrdrePool: number;
        /**
         * Ce code précise la nature du cadre de financement.
         * - 'C' Cession
         * - 'P' Pool
         * - 'M' Masse
         * - 'R' Risque seul
         * - ' ' Sans objet (pas de cadre)
         */
        codeNaturePool: string;
        /**
         * Définit si l’entité est chef de file ou simple participant
         */
        typeRoleEntiteGestion: string;
    }
    interface ICaracteristiqueGAC {
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Un client bancaire se compose d'une ou plusieurs personnes.
         */
        identifiantClientBancaire: string;
        /**
         * Identifiant d'un Etablissement du Groupe BPCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: number;
        /**
         * Cette rubrique constitue l'identifiant de l'adresse de référence du client dans la GAC. C’est un identifiant technique qui permet de faire le lien avec l’application Client..
         */
        identifiantAdresse: number;
        /**
         * Date de création du client bancaire dans la gestion attribut client
         */
        dateCreation: string;
        /**
         * Utilisateur ayant effectué la dernière mise à jour
         */
        utilisateurDerniereMAJ: string;
        /**
         * Date de dernière mise à jour
         */
        dateDerniereMAJ: string;
        /**
         * undefined
         */
        listeLigneAutorisation: Array<ILigneAutorisation>;
        /**
         * Etat du client bancaire
         * - 0 "En cours"
         * - 1 "Valide"
         * - 2 "Clos"
         */
        codeEtatAttributEPS: string;
        /**
         * Valeurs possibles
         * - M (modification)
         * - V (validation)
         */
        codeActionValidationGAC: string;
        /**
         * Ce compteur sert à gérer les accès concurrentiels lors de mises à jour sur une table ou un ensemble de tables.
         */
        compteurMiseAJour: number;
        /**
         * Rattachement à une convention
         * - 0 Sans
         * - 1 SMA,
         * - 2 ADEF
         */
        codeTypePartenariatClientEPS: string;
        /**
         * undefined
         */
        listeBibliothequeActeAutorise: Array<IBibliothequeActeAutorise>;
        /**
         * undefined
         */
        listeModeleActeAutorise: Array<IModeleActeAutorise>;
    }
    interface IPayeurGAC {
        /**
         * Cette rubrique constitue l'identifiant technique d'un payeur GAC.
         * Pour le(s) payeur(s) principal(ux),c'est l'identifiant personne (rattaché au compte de facturation).
         * Pour le(s) payeur(s) de secours, c'est l'identifiant client bancaire.
         */
        identifiantPayeurGAC: string;
        /**
         * Cette rubrique constitue le top indiquant si le payeur GAC est un payeur principal ou un payeur de secours.
         * - O	Payeur principal
         * - N	Payeur de secours
         */
        payeurPrincipal: boolean;
        /**
         * Numéro relatif du payeur GAC
         */
        numeroRelatif: number;
        /**
         * Numéro d'Identification d'une ligne d'autorisation
         */
        identifiantLigneAutorisation: string;
        /**
         * C'est un code indiquant le type de mode de règlement utilisé pour effectuer les mises à disposition de fonds ou les mises en recouvrement d'échéances.
         */
        codeModeReglement: string;
        /**
         * Cette rubrique constitue le pourcentage de participation du payeur (100% sauf dans le cas de plusieurs payeurs principaux).
         */
        pourcentagePayeurGAC: number;
        /**
         * Cette rubrique constitue la domiciliation du payeur GAC.
         */
        domiciliationPayeurGAC: string;
    }
    interface IBibliothequeActeAutorise {
        /**
         * Identifiant de la bibliothèque d'acte
         */
        identifiantBibliothequeActes: string;
    }
    interface IModeleActeAutorise {
        /**
         * Identifiant du modèle d'acte autorise
         */
        identifiantModeleActeAutorise: string;
    }
    interface IGACParDefaut {
        codeEtablissement: number;
        identifiantClientBancaire: string;
        codeTypePartenariatClientEPS: string;
        identifiantAdresse: number;
        codeEtatAttributEPS: string;
        dateCreation: string;
        domiciliationPayeurGAC: string;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface ICaracteristiqueModeleActe {
        /**
         * Identifiant du modèle d'acte.
         */
        identifiant: string;
        /**
         * Libellé court du modèle d'acte.
         */
        libelleCourt: string;
        /**
         * Libellé du modèle d'acte.
         */
        libelle: string;
        /**
         * Ordre d'affichage du modèle d'acte.
         */
        ordreAffichage: number;
        /**
         * Code établissement du modèle d'acte.
         */
        codeEtablissement: string;
        /**
         * ' ' Pas de date
         * 'V' Date de fin de validité (conditionne la fin juridique)
         * 'B' Date butoir (conditionne la radiation)
         */
        codeDateButoirDateFin: string;
        /**
         * Indique si le modèle est autorisé en agence.
         */
        autoriseAgence: string;
        /**
         * Indique si le modèle est autorisé pour internet.
         */
        autoriseInternet: string;
        /**
         * Date de début de validité du modèle d'acte
         */
        dateDebutValidite: Date;
        /**
         * Date de fin de validité du modèle d'acte
         */
        dateFinValidite: string;
        /**
         * produit lié au modèle d'acte
         */
        produit: IProduit;
        /**
         * Type lettre accompagnement.
         */
        typeLettreAccompagnement: string;
        /**
         * Règle de controle du marché. Indique les règles de montant de l'EPS par rapport au montant du marché et du marché principal.
         *
         * Si  0.05, le montant de l’EPS doit être inférieur ou égal à 5% du montant du marché principal.
         *
         * Si 0.99, le montant de l’EPS doit être inférieur au montant du marché.
         *
         * Si 1.00, , le montant de l’EPS doit être égal au montant du marché.
         */
        regleControleMarche: number;
        /**
         * undefined
         */
        listeSignatures: Array<ISignature>;
        /**
         * Identifiant du bénéficiaire dédié.
         */
        identifiantBeneficiaireDedie: string;
        /**
         * Identifiant du modèle éditique.
         */
        identifiantModeleEditique: string;
        /**
         * undefined
         */
        familleEps: Commun.IElement;
        familleInternet: Commun.IElement;
        bibliothequeActes: Commun.IElement;
        listeInformationsCplt: Array<IInformationComplementaire>;
        /**
         *
         * Cette rubrique constitue le cadre de partenariat d’un client EPS.
         *
         * SPACE Sans partenaire - Standard
         * SMA Partenaire SMA
         * ADF Partenaire ADEF
         */
        codeTypePartenariatClientEPS: string;
        objetEps: Commun.IElement;
    }
    interface ISignature {
        /**
         * Code signature modèle acte
         */
        codeSignatureModeleActe: string;
        /**
         * "2A" : Signature double Agence.
         * "2B" : Signature double BO.
         * "MC" : Signature mécanisé avec plafond.
         */
        typeSignature: string;
        /**
         * Libellé de la signature.
         */
        libelle: string;
        /**
         * Montant seuil mécanisé ou double.
         */
        montantSeuil: number;
        /**
         * Code signature.
         */
        codeSignature: string;
        /**
         * Date de début de validité de la signature.
         */
        dateDebutValidite: Date;
        /**
         * Date de fin de validité de la signature.
         */
        dateFinValidite: Date;
        /**
         * Code établissement de la signature.
         */
        codeEtablissement: string;
    }
    interface IInformationComplementaire {
        /**
         * Code information complémentaire.
         */
        codeInformationCplt: string;
        /**
         * Code établissement de l'information complémentaire
         */
        codeEtablissement: string;
        /**
         * Libellé information complémentaire.
         */
        libelle: string;
        /**
         * "FOU" : Marché fournisseur.
         * "TRA" : Marché travaux.
         * "SGE" : Entreprise princiaple sans groupement tiers ENTP.
         * "AGB" : Entreprise princiaplle avec groupement tier BQ/CG.
         * "SGB" : Entreprise princiaple sans groupement tiers BQ/CG.
         */
        codeInterface: string;
        /**
         * Valeurs actuelles possibles :
         * 1 pour marché
         * 2 pour marché principal.
         */
        ordreInterface: number;
        /**
         * Règle de contrôle de l'information.
         */
        regleControle: string;
        /**
         * Date de début de validité de l'objet.
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité de l'objet.
         */
        dateFinValidite: string;
    }
}

declare module creditsEps.Modeles.Creation {
    interface IWrapperInitialisationCreation {
        isCreationEnCours?: boolean;
        epsAvecModele?: boolean;
        initialisationTermine?: boolean;
        modeleActe?: Modeles.EngagementParametre.ISyntheseModeleActe;
        caracteristiqueModeleActe?: Modeles.EngagementParametre.ICaracteristiqueModeleActe;
        produit?: Modeles.EngagementParametre.IProduit;
        objet?: Modeles.EngagementParametre.IObjetEPS;
        ligneAutorisation?: Modeles.Gac.ILigneAutorisation;
        marche?: Modeles.Marche.IMarcheEps;
        marchePrincipal?: Modeles.Marche.IMarchePrincipalEps;
        listeProduit?: Array<Modeles.EngagementParametre.IProduit>;
        listeObjet?: Array<Modeles.EngagementParametre.IObjetEPS>;
        caracteristiqueGAC?: Modeles.Gac.ICaracteristiqueGAC;
        dossierInit?: Modeles.Neo.DossierCreditInstruction.IDossierSchema;
        listeAccessoiresProduitCat?: Modeles.EngagementParametre.IListeAccessoiresProduit;
        listeGarantieCat?: Modeles.EngagementParametre.IRechercheNatureGarantieEPS;
        beneficiaireDedie?: Modeles.Tiers.ITiersNoyau;
        isModeCreation?: boolean;
        payeurPrincipalInit?: Modeles.Tiers.ITiersNoyau;
        dossierEPS?: IDossierEPS;
    }
}

declare module creditsEps.Modeles.Creation {
    interface IWrapperDonneesCreation {
        blocDonneesActe: IDonneesDonneesActe;
        blocMontant: IDonneesMontant;
        blocCommentaire: IDonneesCommentaire;
        blocPeriode: IDonneesPeriode;
        blocAccessoire: IDonneesAccessoire;
        blocGarantie: IDonneesGarantie;
        blocPayeur: IDonneesPayeur;
    }
    interface IDonneesDonneesActe {
        beneficiaire: Modeles.Neo.DossierCreditInstruction.IPersonneAutreLecture;
        marche: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture;
        marchePrincipal: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture;
        tiersMarchePrincipal: Modeles.Neo.DossierCreditInstruction.IPersonneAutreLecture;
        isAfficherMarcheCreation: boolean;
        isAfficherMarchePrincipalCreation: boolean;
    }
    interface IDonneesPayeur {
        payeur: string;
        payeurSecours: string;
        payeurModale: Services.Application.Creation.Payeur.IModalePayeurModele;
        payeurSecoursModale: Services.Application.Creation.Payeur.IModalePayeurModele;
    }
    interface IDonneesGarantie {
        listeGarantie: Array<Modeles.Garantie.ISyntheseGarantie>;
    }
    interface IDonneesAccessoire {
        listeAccessoire: Array<Modeles.Accessoire.ISyntheseAccessoire>;
        retrocession: string;
    }
    interface IDonneesPeriode {
        dateDebut: Date;
        dateFin: Date;
    }
    interface IDonneesMontant {
        montantEngagement: number;
        montantDevise: number;
        devise: string;
        assietteCommission: number;
        epsAmortissable: boolean;
    }
    interface IDonneesCommentaire {
        referenceExterne: string;
        commentaire: string;
    }
}

declare module creditsEps.Modeles.Creation {
    interface IGarantieSyntheseCreation extends Garantie.ISyntheseGarantie {
        couverture: Modeles.Neo.DossierCreditInstruction.ICouvertureCreditLecture;
        garantieCarac: Modeles.EngagementParametre.INatureGarantie;
        idws: string;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IAccessoireGarantie {
        codeEtablissement: string;
        natureGarantie: string;
        typeAccessoire: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        accessoireObligatoire: boolean;
        modeCalcul: string;
        numeroRegleCalcul: string;
        montantConseille: number;
        montantMinPlage: number;
        montantMaxPlage: number;
        typeAssietteCalcul: string;
        montantPlafondTrancheCalcul: number;
        tauxConseille: number;
        tauxMinPlage: number;
        tauxMaxPlage: number;
        tranche1: ITranche1;
        tranche2: ITranche2;
        tranche3: ITranche3;
        tranche4: ITranche4;
        montantMin: number;
        montantMax: number;
        numeroRegleApplication: string;
        regleDateDebut: string;
        regleAppelAccessoireAperiodique: string;
        codeCalculTEG: string;
        appelEcheance: boolean;
        codeCommissionIntervenant: string;
        modeCalculTaux: string;
        fractionFinanciableMax: number;
        compatibleInstruction: boolean;
        compatibleAvenant: boolean;
        periodiciteApplication: string;
        dureeApplication: number;
        codeRecouvrementAccessoireEchu: string;
        regleRecouvrementAccessoireAperiodique: string;
        uniteDuree: string;
        libelleAccessoire: string;
    }
    interface IListeAccessoiresGarantie {
        listeAccessoiresGarantie: Array<IAccessoireGarantie>;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IListeAccessoiresProduit {
        numeroRelatif: string;
        identifiantProduit: string;
        codeFamilleProduit: string;
        listeAccessoireProduit: Array<IModaliteCalculAccessoireProduit>;
    }
    interface IModaliteCalculAccessoireProduit {
        numeroRelatifPhase: number;
        modeCalcul: string;
        accessoireObligatoire: boolean;
        typePhase: string;
        typeAccessoire: string;
        numeroRegleCalcul: string;
        montantConseille: number;
        typeAssietteCalcul: string;
        montantMinPlage: number;
        montantMaxPlage: number;
        tranche1: ITranche1;
        tranche2: ITranche2;
        tranche3: ITranche3;
        tranche4: ITranche4;
        tranche5: ITranche5;
        montantMin: number;
        montantMax: number;
        montantMinRecouv: number;
        numeroRegleApplication: string;
        regleAppelAccessoireAperiodique: string;
        regleDeclencheur1erAppel: string;
        periodiciteAccessoire: string;
        uniteDureeApplication: string;
        dureeApplicationAccessoire: number;
        regleAppelAccAperiodique: string;
        codeAccessoireDansTEG: string;
        appelEcheance: boolean;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        indicateurDerogation: boolean;
        fractionFinanciableMax: number;
        compatibleInstruction: boolean;
        compatibleAvenant: boolean;
        codeFinancementFrais: boolean;
        codeCanalDistribution: string;
        libelleAccessoire: string;
        regleAppelAccPeriodique: string;
        nombreJourDansAnneeNumerateur: number;
        nombreJourDansAnneeDenominateur: number;
        codeRecouvAccTermeEchu: string;
    }
    interface ITranche {
        montantPlafond: number;
        tauxElement: number;
        tauxMin: number;
        tauxMax: number;
    }
    interface ITranche1 extends ITranche {
    }
    interface ITranche2 extends ITranche {
    }
    interface ITranche4 extends ITranche {
    }
    interface ITranche3 extends ITranche {
    }
    interface ITranche5 extends ITranche {
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IFamilleEPS {
        /**
         * Identifiant d'un Etablissement du Groupe BPCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: number;
        /**
         * Identifiant famille EPS
         */
        identifiantFamilleEPS: string;
        /**
         * Libelle court famille EPS
         */
        libelleCourtFamilleEPS: string;
        /**
         * Libelle long Famille EPS
         */
        libelleLongFamilleEPS: string;
        /**
         * Date de début de validité
         */
        dateDebutValidite: Date;
        /**
         * Date de fin de validite
         */
        dateFinValidite: Date;
    }
    interface IRechercheFamilleEPS {
        /**
         * undefined
         */
        listeFamilleEPS: Array<IFamilleEPS>;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IModeReglement {
        /**
         *  Libellé court d'un mode de règlement des versements ou des recouvrements.
         */
        libelleCourt: string;
        /**
         *  Libellé long d'un mode de règlement des versements ou des recouvrements.
         */
        libelle: string;
        /**
         *  C'est un code indiquant le type de mode de règlement utilisé pour effectuer les mises à disposition de fonds ou les mises en recouvrement d'échéances.
         */
        codeModeReglement: string;
        /**
         *  Cette propriété représente le type de domiciliation.
         * - 'RIB' Virement ou prélèvement au format RIB ( RICE )
         * - 'NOM' Chèque
         * - 'TRE' Domiciliation Trésor
         * - 'IBA' Virement ou prélèvement au format BIC + IBAN
         */
        codeTypeDomiciliation: string;
        /**
         *  Cette propriété représente la façon dont on peut
         * utiliser un mode de règlement.
         * - 'V' Utilisé pour effectuer des versements de fonds.
         * - 'R' Utilisé pour effectuer des mises en recouvrement.
         */
        codeUtilisationModeReglement: string;
        /**
         *  Cette rubrique indique de quelle façon est traitée un
         * mode de règlement ou une opération.
         * Pour un recouvrement, il est directement lié au mode d'éxécution; un recouvrement automatique est obligatoirement enregistré en batch, un recouvrement manuel en T.P.
         * - 'TP' Traitement en temps réel
         * - 'BA' Traitement en temps différé
         */
        codeModeTraitement: string;
        /**
         *  C'est le nombre de périodes d’exécution concernant le mode de règlement. C'est un délai technique. Il est toujours exprimé en jours.
         */
        delaiExecutionModeReglement: number;
        /**
         *  Cette propriété représente le délai au delà duquel, en l'absence de retour, le paiement enregistré est
         * certain. Il est toujours exprimé en jours.
         */
        delaiRetourPaiement: number;
        /**
         *  Cette rubrique indique le mode ou la variante d'exécution d'un versement ou d'un recouvrement.
         * - 'M' Manuelle
         * - 'A' Automatique
         * - 'G' Prélèvement globalisé (pour société)
         * - 'Z' Pas d'envoi en prélèvement (pour société)
         */
        codeModeExecutionReglement: string;
        /**
         *  Cette rubrique indique, au niveau d'un mode de
         * règlement s'il est effectué de façon interne ou
         * externe par rapport à la caisse.
         * - ' ' sans objet (paiement par chèque ou espèces)
         * - 'I' Interne
         * - 'E' Externe
         * - 'F' Externe avec attente de retour
         * - 'J' Interne sans attente de retour
         */
        codeReglementInterneExterne: string;
        /**
         * Cette rubrique identifie le domaine qui doit traiter
         * un mouvement financier en fonction du mode de
         * règlement.
         * - '01' Interne caisse
         * - '02' Interne CTR
         * - '03' Interne réseau
         * - '04' E.I.B.
         * - '05' E.I. (international)
         * - '06' Service Caisse dont Trésor
         * - '07' Société payeur
         * - '08' TIP
         * - '09' E.I.B. SEPA
         * - '99' Autre (non utilisé)
         */
        codeDomaineExecutionReglement: string;
        /**
         * Numéro d’ordre de classement.
         */
        numeroOrdreClassement: number;
        /**
         * Cette rubrique indique le mode de représentation
         * de l'impayé Pour les recouvrements, elle permet de dire si la représentation d'un ordre impayé est immédiate ou le mois suivant.
         * - '1' représentation immédiate
         * - '2' représentation au quantième suivant
         */
        codeModeRepresentation: string;
        /**
         * Cette propriété représente le délai au delà duquel les paiements ne sont plus attendus pour le RA.
         * Ce délai court à partir de la date de valeur du RA. Il est toujours exprimé en jours.
         */
        delaiRetourPaiementRA: number;
        /**
         * Date de début de validité d'une occurrence de paramètre règlementaire.
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité d'une occurrence de paramètre règlementaire
         */
        dateFinValidite: string;
        /**
         * Cette rubrique contient le mode de règlement exploitable par la comptabilité et servant à déterminer le compte pivot.
         * - '0A' Versement interne Caisse (tout mode).
         * - '09' Reversements des primes hors convention.
         */
        codeModeReglementComptable: string;
    }
    interface IRechercheModeReglement {
        /**
         * undefined
         */
        listeModeReglement: Array<IModeReglement>;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IRechercheModeleActeEPS {
        listeModelesActes: Array<ISyntheseModeleActe>;
    }
    interface ISyntheseModeleActe {
        /**
         * Libellé court du modèle d'acte
         */
        libelleCourt: string;
        /**
         * Libellé du modèle d'acte.
         */
        libelle: string;
        /**
         * Identifiant du modèle d'acte.
         */
        identifiant: string;
        /**
         * Ordre d'affichage du modèle d'acte
         */
        ordreAffichage: number;
        /**
         * Code établissement du modèle d'acte.
         */
        codeEtablissement: string;
        /**
         * Identifiant de la bibliothèque du modèle d'acte.
         * A voir si remplacé par un objet avec id, libellé.
         */
        bibliothequeActes: string;
        /**
         * ' '        Pas de date
         * 'V'        Date de fin de validité (conditionne la fin juridique)
         * 'B'        Date butoir (conditionne la radiation)
         */
        codeDateButoirDateFin: string;
        /**
         * Indique si le modèle est autorisé en agence.
         */
        autoriseAgence: boolean;
        /**
         * Indique si le modèle est autorisé pour internet.
         */
        autoriseInternet: boolean;
        /**
         * Identifiant de la famille eps du modèle d'acte.
         * A voir si remplacé par un objet avec id, libellé.
         */
        familleEps: string;
        /**
         * Identifiant de la famille internet du modèle d'acte.
         * A voir si remplacé par un objet avec id, libellé.
         */
        familleInternet: string;
        /**
         * Cette rubrique constitue le cadre de partenariat d’un client EPS.
         *
         * SPACE Sans partenaire - Standard
         * SMA Partenaire SMA
         * ADF Partenaire ADEF
         */
        codeTypePartenariatClientEPS: string;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IRechercheObjetEPS {
        /**
         * Liste d'objets
         */
        listeObjetEps: Array<IObjetEPS>;
    }
    interface IObjetEPS {
        /**
         * Code type objet
         */
        identifiant: string;
        /**
         * Libellé court de l'objet
         */
        libelleCourt: string;
        /**
         * Libellé long de l'objet
         */
        libelle: string;
        /**
         * Date de début de validité de l'objet.
         */
        dateDebutValidite: Date;
        /**
         * Date de fin de validité de l'objet.
         */
        dateFinValidite: Date;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IRechercheProduitEPS {
        /**
         * Liste de produits
         */
        listeProduits: Array<IProduit>;
    }
    interface IProduit {
        /**
         * Concatenation de codeFamilleProduit et numeroRelatif.
         */
        identifiantProduit: string;
        /**
         * Code famille produit. Sert d'identifiant avec le numéro relatif.
         */
        codeFamilleProduit: string;
        /**
         * Numéro relatif. Sert d'identifiant avec le code famille produit.
         */
        numeroRelatif: string;
        /**
         * Libellé de l'élément.
         */
        libelle: string;
        /**
         * Libellé court du produit.
         */
        libelleCourt: string;
        /**
         * Date de début de validité de l'objet.
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité de l'objet.
         */
        dateFinValidite: string;
    }
}

declare module creditsEps.Modeles.Structure {
    interface IDonneesCommunesEDS {
        codeEtablissement: string;
        identifiantElementStructure: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE. Typologie gérée dans la table CU1B.
         * Typologie propre à chaque Etablissement du GCE. Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * 008 - Siège
         * 003 - Agence (Point de vente)
         * 010 - GAB
         * 020 - Guichet (au sens arrêté de caisse)
         * 001 - Poste fonctionnel
         * 002 - Service
         * 009 - Entité Administrative (Guichet interbancaire)
         *
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement (exemple : type '003', agence ou point de vente)
         */
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

declare module creditsEps.Modeles.OperationFinanciereService {
    interface IDeterminationBic {
        /**
         * Numéro IBAN du compte pour lequel on recherche le BIC
         *
         * Référence d'identification du compte bancaire au niveau international
         * IBAN = International Bank Account Number
         * Format : norme ISO 13616
         *  - Code pays : 2 caractères - norme ISO 3166
         *  - Clé de contrôle : 2 caractères - norme ISO 7604
         *  - Numéro de base (BBAN) : référence du compte dans le pays d'origine jusqu'à 30 caractères, format fixe par pays
         *       France : RIB du compte sur 23 caractères, clé inclue
         *
         * Exemple pour France (format fixe 27 caractères) :
         *  FRKK BBBB BGGG GGCC CCCC CCCC Ckk
         *     FR - Pays
         *     KK - Clé
         *     IBAN :
         *        B - Banque
         *        G - Guichet
         *        C - Compte
         *        K - Clé
         * Pas d'espace sous forme électronique
         */
        numeroIbanCompte: string;
        /**
         * Référence d'identification d'un établissement financier ou assimilé au niveau international.
         * BIC = Bank Identifier Code ; norme ISO 9362
         *
         * Format : de 8 à 11 car
         *  - Code banque sur 4 caractère
         *  - Code pays sur 2 caractères ISO 3166
         *  - Code emplacement sur 2 caractères (ville, état, province)
         *  - Code branche sur 3 caractères optionnel (agence)
         *        si BIC sur 8 car : siège central national de la banque
         *
         * Codification Caisse Epargne : CEPAFRPPXXX
         *  XXX : 2/3/4ème chiffres du code établissement
         */
        codeBic: string;
    }
}

declare module creditsEps.Modeles.Tableaux {
    class TableauAccessoires implements MyWay.UI.ImwTableOptions {
        private colonneTypeAccessoire;
        private colonneMontant;
        private colonneDatePremierRecouvrement;
        private colonneDateFin;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modeles.Accessoire.ISyntheseAccessoire>;
        selectedItems: any[];
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        caption: string;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsEps.Modeles.Tableaux {
    interface IDonneesTableauAutorisation extends Modeles.Gac.ILigneAutorisation {
        libelleFamilleEps?: string;
    }
    class TableauAutorisation implements MyWay.UI.ImwTableOptions {
        private colonneFamilleEncours;
        private colonnePartenariat;
        private colonnePlafond;
        private colonneUtilisation;
        private colonneDateSaisie;
        private colonneDateFin;
        private colonneDateButoir;
        private colonneRetrocession;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<IDonneesTableauAutorisation>;
        selectedItems: Array<IDonneesTableauAutorisation>;
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        caption: string;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsEps.Modeles.Tableaux {
    class TableauEncours implements MyWay.UI.ImwTableOptions {
        private colonneFamille;
        private colonneEncoursBrut;
        private colonneEncoursNet;
        private colonneAutorisationsActives;
        private colonneAutorisationsEchues;
        private colonneDateFin;
        private colonneDateDebut;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modeles.Encours.IEncours>;
        selectedItems: Array<Modeles.Encours.IEncours>;
        templateUrl: string;
        caption: string;
        constructor();
    }
}

declare module creditsEps.Modeles.Tableaux {
    class TableauEps implements MyWay.UI.ImwTableOptions {
        private tableauColonneNumEps;
        private tableauColonneDateCreation;
        private tableauColonneMontantEps;
        private tableauColonneMontantInitial;
        private tableauColonneOrigine;
        private tableauColonneGaranties;
        private tableauColonneFamille;
        private tableauColonnePartenariat;
        private tableauColonneProduit;
        private tableauColonneRefDoc;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<RechercheEps.ISyntheseEps>;
        templateUrl: string;
        selectedItems: Array<RechercheEps.ISyntheseEps>;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        caption: string;
        constructor(donnees: Array<RechercheEps.ISyntheseEps>, handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsEps.Modeles.Tableaux {
    class TableauGarantie implements MyWay.UI.ImwTableOptions {
        private handler;
        private colonneNature;
        private colonneCouverture;
        private tableauColonneDateDebut;
        private tableauColonneDateFin;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modeles.Garantie.ISyntheseGarantie>;
        selectedItems: Array<Modeles.Garantie.ISyntheseGarantie>;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        caption: string;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsEps.Modeles.Tableaux {
    class TableauHistorique implements MyWay.UI.ImwTableOptions {
        tableauColonneLibelle: MyWay.UI.ImwTableColumnOptions;
        private tableauColonneDateHeure;
        private tableauColonneNom;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: any;
        selectedItems: any[];
        templateUrl: string;
        caption: string;
        constructor(donnees: any);
    }
}

declare module creditsEps.Modeles.Tableaux {
    class TableauResultatEps implements MyWay.UI.ImwTableOptions {
        private tableauColonneNumEps;
        private tableauColonneCreation;
        private tableauColonneMontant;
        private tableauColonneMontantInitial;
        private tableauColonneStatut;
        private tableauColonneOrigine;
        private tableauColonneCGR;
        private colonneFamille;
        private colonnePartenariat;
        private tableauColonneProduit;
        private tableauColonneRefDoc;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modeles.RechercheEps.ISyntheseEps>;
        selectedItems: Array<Modeles.RechercheEps.ISyntheseEps>;
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        caption: string;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsEps.Modeles.Tiers {
    interface IIdentificationTiers {
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro chrono lieu activité
         */
        numeroLieuActivite: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        identifiantPersonne: string;
    }
    interface ICaracteristiqueTiers {
        /**
         * Libellé Code personnalité juridique
         */
        libellePersonnaliteJuridique: string;
        /**
         * Code état personne/entité titulaire
         */
        codeEtatPersonne: string;
        /**
         * Code type relation personne
         */
        codeTypePersonne: string;
        /**
         * Date première entrée en relation
         */
        dateEntreeRelation: string;
        /**
         * Code Guichet Risques BDF
         */
        codeGuichetRisque: string;
        /**
         * Code classe pers non éligible FGDR
         */
        eligibiliteTiers: string;
        /**
         * Code personnalité juridique
         */
        identifiantEDSDomiciliation: string;
        /**
         * Indic droit au compte
         */
        indicateurDroitCompte: string;
    }
    interface IInformationParticulier {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Code Civilité Particulier
         */
        codeCivilite: string;
        /**
         * Libellé Code Civilité
         */
        libelleCivilite: string;
        /**
         * Code Sexe Particulier
         */
        sexe: string;
        /**
         * Libellé Code Sexe Particulier
         */
        libelleSexe: string;
        /**
         * Nom famille Personne Physique
         */
        id: string;
        /**
         * nom marital
         */
        nomMarital: string;
        /**
         * Désignation courte particulier
         */
        designationCourte: string;
        /**
         * Premier prénom état civil Personne
         */
        prenom: string;
        /**
         * Date Naissance Personne Physique
         */
        dateNaissance: string;
        /**
         * Code INSEE localité naissance
         */
        codeCommuneNaissance: string;
        /**
         * Libellé commune naissance
         */
        libelleCommuneNaissance: string;
        /**
         * Code département naissance
         */
        codeDepartementNaissance: string;
        /**
         * libellé Département naissance
         */
        libelleDepartementNaissance: string;
        /**
         * Code pays nationalité INSEE
         */
        codeInseePaysNationalite: string;
        /**
         * Libellé nationalité pays
         */
        libelleNationalite: string;
        /**
         * Date décès Personne Physique
         */
        dateDeces: string;
        /**
         * Code appartenance réseau
         */
        codeAppartenanceReseau: string;
        /**
         * Libellé appartenance réseau
         */
        libelleAppartenanceReseau: string;
        /**
         * Indic sociétaire
         */
        indicSocietaire: string;
        /**
         * Code type capacité juridique
         */
        codeCapaciteJuridique: string;
        /**
         * Libellé type capacité juridique
         */
        libelleCapaciteJuridique: string;
        /**
         * Code pays naissance INSEE
         */
        codePaysNaissance: string;
        /**
         * Libellé INSEE Pays de Naissance
         */
        libellePaysNaissance: string;
        /**
         * Code INSEE PAYS double nationalité
         */
        codeInseePaysDoubleNationalite: string;
        /**
         * Libellé double nationalité du pays
         */
        libelleDoubleNationalitePays: string;
        /**
         * Code type situation de famille
         */
        situationFamille: string;
        /**
         * Libellé situation famille
         */
        libelleCodeSituationFamiliale: string;
        /**
         * Date effet situation famille
         */
        dateEffetSituationFamille: string;
        /**
         * Code type régime matrimonial
         */
        codeRegimeMatrimonial: string;
        /**
         * Libellé du régime matrimonial
         */
        libelleRegimeMatrimonial: string;
        /**
         * Nombre enfants à charge
         */
        nombreEnfantACharge: number;
        /**
         * Code catégorie socio-professionnelle
         */
        codeCategorieSocioProf: string;
        /**
         * libellé CSP
         */
        libelleCsp: string;
        /**
         * Date effet CSP
         */
        dateEffetCsp: string;
        /**
         * Nom employeur du particulier
         */
        nomEmployeur: string;
        /**
         * Numéro SIREN employeur principal
         */
        numeroSirenEmployeurPrincipal: string;
        /**
         * Date embauche par employeur actuel
         */
        dateEmbaucheParEmployeurActuel: string;
        /**
         * Code type contrat travail
         */
        codeTypeContratTravail: string;
        /**
         * Libellé Code type contrat travail
         */
        libelleCodeTypeContratTravail: string;
        /**
         * Date fin contrat
         */
        dateFinContrat: string;
        /**
         * Code famille NAF INSEE
         */
        codeFamilleNAFINSEE: string;
        /**
         * Code NAF 3 dernier caractere
         */
        troisDerniersCaracteresNAF: string;
        /**
         * Libelle Code NAF rev2 INSEE
         */
        libelleEtablissement: string;
        /**
         * Code résident
         */
        codeResident: string;
        /**
         * Idt relation économique (ménage)
         */
        identiteRelationEcoMenage: number;
        /**
         * Référence externe EDS
         */
        referenceExterneEds: number;
        /**
         * Type clause matrimoniale
         */
        typeClauseMatrimoniale: string;
        /**
         * Code donation entre époux
         */
        codeDonationEntreEpoux: string;
        /**
         * Indicateur auto entrepreneur
         */
        indicateurAutoEntrepreneur: string;
        /**
         * Autres prénoms état civil
         */
        autresPrenomsEtatCivil: string;
        /**
         * Indic domiciliation revenus
         */
        indicDomiciliationRevenus: string;
        /**
         * Indic enreg hors présence client
         */
        indicEnregHorsPresenceClient: string;
        /**
         * Libellé profession particulier
         */
        libelleProfessionParticulier: string;
        /**
         * Code type secteur emploi
         */
        codeTypeSecteurEmploi: string;
        /**
         * Indic envoi courrier
         */
        indicateurEnvoiCourrier: string;
        /**
         * Code pièce justif professionnelle
         */
        codePieceJustificative: string;
        /**
         * date d'obtention piece justificative
         */
        dateObtentionPieceJustificative: string;
        /**
         * Référence pièce justificative
         */
        referencePieceJustificative: string;
        /**
         * No identification fiscale NIF NNI
         */
        noIdentificationFiscaleNifNni: string;
        /**
         * Code type NIF NNI
         */
        codeTypeNifNni: string;
        /**
         * Date naturalisation
         */
        dateNaturalisation: string;
        /**
         * Date naissance conjoint
         */
        dateNaissanceConjoint: string;
        /**
         * Indic décès présumé
         */
        indicDecesPresume: string;
        /**
         * Date décès présumé
         */
        dateDecesPresume: string;
        /**
         * Code classe pers non éligible FGDR
         */
        eligibiliteTiers: string;
        /**
         * Indic droit au compte
         */
        indicDroitCompte: string;
        /**
         * Numero SIREN auto entrepreneur
         */
        numeroSirenAutoEntrepreneur: string;
        /**
         * Date effet option résidence
         */
        dateEffetOptionResidence: string;
        /**
         * Code famille catégorie juridique
         */
        codeCategorieJuridique: string;
        /**
         * Code catégorie juridique 2 dern car
         */
        codeCategoJuridi2DerCaracteres: string;
        /**
         * libelle statut FATCA
         */
        libelleStatutFatca: string;
        /**
         * Date attribution statut FATCA
         */
        dateAttributionStatutFatca: string;
        /**
         * Identifiant Client
         */
        identifiantBad: string;
        indicateurActiviteProfessionnel: string;
        identifiantEDSDomiciliation: number;
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
        dateDernierRetourPttAdresse: string;
        nombreRetourPtt: number;
        codePostalFranceEtranger: string;
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
    }
    interface IInformationTiersLie {
        codeType: string;
        codeSensLienInterPersonnes: string;
        libelleSensLien: string;
        codeEtablissementTiersLie: string;
        identifiantTiersLie: number;
        indicateurRattRelationEco: string;
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
    }
}

declare module creditsEps.Modeles.Tiers {
    interface IDonneeCommune {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Identifiant de la personne au sein de l'établissement du Groupe CE.
         */
        identifiantPersonne: number;
        /**
         * Code servant à distinguer une personne connue comme tiers et une personne connue comme client ou prospect.
         * Valeurs :
         * ---------
         * 0. Personne connue comme client
         * 1. Personne connue comme Tiers
         * 2 .Personne connue comme prospect
         */
        codeTypePersonne: string;
        /**
         * Détermine le type de personnalité juridique de la personne.
         * Valeurs :
         * ----------
         * 1=personne physique
         * 2=personne morale / assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Référence externe de l’agence à laquelle le client est rattaché.
         */
        edsDomiciliation: number;
        /**
         * Codé état de la personne (0:Actif, 1:clôturé)
         */
        codeStatut: string;
    }
    interface IDonneePersonnePhysique {
        /**
         * Nom patronymique du mari.
         * Il s'agit d'une donnée règlementaire.
         */
        nomMarital: string;
        /**
         * Premier prénom de l'état civil de la personne physique. Nom joint au patronyme qui distingue les personnes d'un même groupe familial entre elles.
         * Il s'agit d'une donnée règlementaire.
         */
        prenom: string;
        /**
         * Date de naissance de la personne physique.
         */
        dateNaissance: string;
        /**
         * Code qui permet de respecter la dénomination
         * de la personne suivant sa situation de famille.
         * Valeurs :
         * ----------
         * '1' = MME
         * '2' = MLLE
         * '3' = M
         */
        codeCivilite: string;
        /**
         * Nom de famille de la personne physique.
         * Pour une femme, il s'agit de son nom de jeune fille (par opposition au nom marital).
         * Il s'agit d'une donnée règlementaire.
         */
        nomFamillePersonnePhysique: string;
        /**
         * Indicateur précisant si la personne physique a une activité professionnelle (statut d'entrepreneur individuel)
         */
        indicateurCodeActiviteProfessionnel: string;
    }
    interface IDonneePersonneMorale {
        /**
         * identifie de manière unique un professionnel au niveau national.
         * Identifiant attribué à toute personne juridique, physique ou morale, introduite dans le répertoire SIREN.
         */
        numeroSiren: string;
        /**
         * La raison sociale est un nom ou une dénomination attribuée à une société. Elle est pour la personne morale ce que le nom patronymique est pour la Personne Physique.
         * Par contre, elle doit être unique.
         */
        raisonSociale: string;
        /**
         * Désignation de forme réduite de la personne morale.
         * Ensemble de lettres initiales (de certains termes de la dénomination) formant un mot servant d'abréviation
         */
        sigle: string;
    }
    interface IAdresse {
        /**
         * Libellé de la ligne 2 d'une adresse normée AFNOR.
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2AdresseAFNOR: string;
        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR.
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment : entrée, bâtiment, bloc, tour etc.
         */
        ligne3AdresseAFNOR: string;
        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR.
         * Peut comprendre le numéro dans la voie, type et nom de voie, le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit, un service X, une boîte postale ou un numéro de CEDEX
         */
        ligne4AdresseAFNOR: string;
        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR.
         * Peut comprendre le nom d'un quartier, d'un lieu-dit, d'un hameau ou d’un ensemble immobilier pouvant être assimilé à une commune ou à un lieu-dit et possédant plusieurs voies internes.
         */
        ligne5AdresseAFNOR: string;
        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR.
         * Peut comprendre le numéro de code postal et nom de la localité, le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6AdresseAFNOR: string;
    }
    interface IMedia {
        /**
         * Valeurs :
         * ----------
         * '01' Téléphone fixe personnel
         * '02' Téléphone fixe professionnel
         * '03' Téléphone mobile personnel
         * '04' Téléphone mobile professionnel
         * '05' Téléphone mobile supplémentaire personnel
         * '06' Téléphone mobile supplémentaire professionnel
         * '07' Téléphone mobile préféré
         * '08' Téléphone mobile pour opérations sécurisées en ligne
         * '09' E-mail personnel
         * '10' E-Mail professionnel
         * '11' E-mail préféré
         */
        codeTypeMedia: string;
        /**
         * Adresse mail ou n° de téléphone
         */
        referenceAccesMedia: string;
    }
    interface ITiers {
        donneeCommune: IDonneeCommune;
        donneePersonnePhysique: IDonneePersonnePhysique;
        donneePersonneMorale: IDonneePersonneMorale;
        adresse: IAdresse;
        listMedia: Array<IMedia>;
    }
    interface IMediaTraitement {
        /**
         * Téléphone mobile
         */
        telephoneMobile: string;
        /**
         * Téléphone personnel
         */
        telephonePersonnel: string;
        /**
         * Adresse E-mail préférée
         */
        adresseEmailPrincipal: string;
    }
}

declare module creditsEps.Services.Application {
    /**
     * Service permettant de gerer la mise en place de la cnil sur les zones de saisie
     */
    class CnilService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        private contexteService;
        static $inject: string[];
        listeMotsInterditsOuNonInterdits: Array<string>;
        titrePopin: string;
        introductionPopin: string;
        popinCnil: Object;
        iconPopin: string;
        listeInterdits: Array<string>;
        listeSensibles: Array<string>;
        contenuOk: boolean;
        private donneesCnil;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, contexteService: Services.Application.IDonneesContexteService);
        chaineSansAccent(contenu: string): string;
        preparerContenu(contenu: string): string;
        private _rechercherMotsInterditsOuSensible(contenu);
        verifierContenu(contenu: string): boolean;
        construirePopinCnil(): ng.ui.bootstrap.IModalSettings;
        ouvrirPopinCnil(contenu: string): ng.IPromise<boolean>;
    }
}

declare module creditsEps.Services.Application {
    interface ICreationEpsService {
        getDonneesCreation(): Modeles.Creation.IWrapperInitialisationCreation;
        setDonneesCreation(isSansModele: Modeles.Creation.IWrapperInitialisationCreation): void;
        initialiserCreationEPS(): ng.IPromise<any>;
        editerDocumentEps(): ng.IPromise<string>;
        controlerDonnees(): Array<Modeles.Commun.IErreurForm>;
        majElements(): ng.IPromise<void>;
        controlerDossier(): ng.IPromise<Array<Modeles.Neo.DossierCreditInstruction.IAnomalieLecture>>;
        passerSansSuite(): ng.IPromise<void>;
        reset(): void;
    }
}

declare module creditsEps.Services.Application {
    interface IDonneesService {
        getCaracteristiqueEps(): ng.IPromise<Modeles.Eps.ICaracteristiqueEps>;
    }
}

declare module creditsEps.Services.Application {
    interface IDonneesContexteModele {
        clientBancaire: number;
        identifiantPersonne: number;
        codeEtablissement: string;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        identifiantDossier: string;
    }
    interface IDonneesContexteService {
        getDonneesContexte(): ng.IPromise<IDonneesContexteModele>;
    }
}

declare module creditsEps.Services.Application {
    interface IDonneesCreationService {
        donneesUtilisateurCreation: Modeles.Creation.IWrapperDonneesCreation;
        donneesDepartCreation: Modeles.Creation.IWrapperDonneesCreation;
        isDonneesModifiees(): boolean;
        sauvegardeReussie(): void;
    }
}

declare module creditsEps.Services.Application {
    interface ILireDossierService {
        lireElements(dossier: Modeles.Neo.DossierCreditInstruction.IDossierSchema): ng.IPromise<Array<Modeles.Neo.DossierCreditInstruction.IElementLecture>>;
        parserElements(dossierLecture: Array<Modeles.Neo.DossierCreditInstruction.IElementLecture>): Modeles.Creation.IDossierEPS;
    }
}

declare module creditsEps.Services.Application {
    interface ILisaService {
        next(valeurSortie: number, urlLocal: string): void;
    }
}

declare module creditsEps.Services {
    /**
     * Service de gestion des chargements longs
     * @author Kevin GARRIDO S0077481
     */
    interface ILoadingService {
        startLoading(progressionInconnue: boolean, promesse?: ng.IPromise<any>): void;
        reset(): void;
        getLoading(): Modeles.Commun.ILoading;
        setProgression(etat: number): void;
        addProgression(etat: number): void;
        chargementTermine(): void;
    }
}

declare module creditsEps.Services {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupService {
        /**
         * Affichage d'un PDF via une fenêtre modale
         * @param {titre} Titre de la popup
         * @param {nomPdf} Nom du pdf à afficher
         */
        showPdf(titre: string, nomPdf: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: Object): ng.IPromise<any>;
        /**
         * Popup de confirmation
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * then si valider
         * catch si annuler
         */
        showConfirm(titre: string, message: string): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module creditsEps.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module creditsEps.Services.Rest {
    /**
     * Classe de fonction utilitaire pour les services de l'application
     * @author S0077481
     */
    class UtilsService {
        /**
         * Méthode pour la suppression des éléments ajouté par Angular dans l'objet
         * @param {T} objet - L'objet à nettoyer
         * @return {T} L'objet nettoyé
         */
        static nettoyerObjetCleAngular<T>(objet: T): T;
    }
}

declare module creditsEps.Enumerations.Application {
    class ChoixEnum {
        static OUI: string;
        static NON: string;
    }
}

declare module creditsEps.Enumerations {
    module Tri {
        var DATE: string;
        var ORIGINE: string;
        var STATUT: string;
        var FAMILLE: string;
        var PRODUIT: string;
    }
}

declare module creditsEps.Enumerations.Accessoires {
    class TypeCalculEnum {
        static PERIODIQUE: string;
        static APERIODIQUE: string;
    }
    /**
     * 'A'   année
     * 'S'   semestre
     * 'T'    trimestre
     * 'B'    bimestre
     * 'M'   mois
     */
    class PeriodiciteEnum {
        static ANNEE: string;
        static SEMESTRE: string;
        static TRIMESTRE: string;
        static BIMESTRE: string;
        static MOIS: string;
    }
    /**
     * Type de périodicité.
     * ‘Début de période’, ‘Fin de période’, ‘Anniversaire’  ‘Fin périodicité civile’
     */
    class TypePeriodiciteEnum {
        static DEBUT_PERIODE: string;
        static FIN_PERIODE: string;
        static ANNIVERSAIRE: string;
        static FIN_PERIODICITE_CIVILE: string;
    }
    /**
     * Terme de l'accessoire.
     * O à terme échu.
     * N à terme à échoir.
     */
    class TermeEnum {
        static ECHU: string;
        static A_ECHOIR: string;
    }
}

declare module creditsEps.Enumerations.Beneficiaire {
    /**
     * Indique le type de bénéficiaire.
     * ‘m’ pour personne morale
     * ‘p’ pour personne physique
     */
    enum TypeBeneficiaireEnum {
        PERSONNE_MORAL,
        PERSONNE_PHYSIQUE,
    }
}

declare module creditsEps.Enumerations {
    module CodeSupportDonneesEnum {
        var GESTION: string;
        var INSTRUCTION: string;
    }
}

declare module creditsEps.Enumerations.Eps {
    module Origine {
        var BO: string;
        var INTERNET: string;
    }
}

declare module creditsEps.Enumerations.Marche {
    class TypeMarche {
        static MARCHE: string;
        static MARCHE_PRINCIPAL: string;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur
     */
    class ModaleCreationAccessoireControleur {
        private serviceAgentExtended;
        private $scope;
        private data;
        private $modalInstance;
        private $rootScope;
        private mwEvents;
        private natureAccessoireService;
        private creationEpsService;
        private creationAccessoireService;
        private popupService;
        private $filter;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private ligneTableau;
        private syntheseErreurs;
        private accessoire;
        modifiable: boolean;
        private nouvelAccessoire;
        private accessoireObligatoire;
        private listeTypeCalcul;
        private listeTypeAccessoire;
        private listeTypePeriode;
        private listeModeCalcul;
        private listeTypeAssiette;
        private listePeriode;
        private listeTerme;
        private enregistrementEnCours;
        private suppressionEnCours;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, natureAccessoireService: Services.Rest.EngagementParametre.IRechercheNatureAccessoireService, creationEpsService: Services.Application.ICreationEpsService, creationAccessoireService: Services.Application.Creation.Accessoire.ICreationAccessoireService, popupService: Services.IPopupService, $filter: ng.IFilterService);
        selectTypeCalcul($item: Modeles.Commun.IElement): void;
        selectTypeAccessoire($item: Modeles.EngagementParametre.IModaliteCalculAccessoireProduit): void;
        checkDateFin(dateDebut: Date): void;
        validerEnregistrement(accessoire: Services.Application.Creation.Accessoire.IAccessoireCreation): boolean;
        filterTypeCalcul(typeCalcul: string): string;
        filterModeCalcul(modeCalcul: string): string;
        filterTerme(terme: string): string;
        filterTypeAccessoire(typeAccessoire: Modeles.EngagementParametre.IModaliteCalculAccessoireProduit): string;
        filterPeriodicite(periodicite: string): string;
        filterTypePeriodicite(typePeriodicite: string): string;
        filterAssiette(typeAssiette: string): string;
        checkTaux(): void;
        /** */
        goToAnchor(ancre: string): void;
        enregistrer(): void;
        supprimer(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class ModaleCreationBeneficiaireControleur {
        private serviceAgentExtended;
        private data;
        private $modalInstance;
        private rechercheTiers;
        private $scope;
        private donneesCreation;
        private $location;
        private recherchePersonneService;
        private creationService;
        private creationServiceBeneficiaire;
        private popupService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        iban: string;
        nom: string;
        recherchePersonne: myway.comGestionClient.RecherchePersonneRetour;
        beneficiaire: MyWay.Model.Client;
        beneficiaireDedie: Modeles.Tiers.ITiersNoyau;
        codePostal: string;
        commune: string;
        estUnePersonne: boolean;
        modificationEnCours: boolean;
        private creationEnCours;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, rechercheTiers: Services.Rest.Tiers.IRechercheTiersService, $scope: ng.IScope, donneesCreation: Services.Application.IDonneesCreationService, $location: ng.ILocationService, recherchePersonneService: myway.comGestionClient.RechercherPersonneService, creationService: Services.Application.ICreationEpsService, creationServiceBeneficiaire: Services.Application.Creation.Beneficiaire.ICreationBeneficiaireService, popupService: Services.IPopupService);
        private alimenterDonneesBeneficiare();
        private definirCodePostalCommune(ligne6AdresseAFNOR);
        chercherBeneficiaire(): void;
        enregistrer(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    interface IModalCnilScope extends ng.IScope {
        viewModelCnilCtrl: IModalCnilControleur;
    }
    interface IModalCnilControleur {
        modalDatas: any;
        annuler(): void;
        valider(): void;
    }
    class ModalCnilControleur {
        private $q;
        private $scope;
        private $rootScope;
        private $modalInstance;
        private data;
        private $modal;
        static $inject: string[];
        modalDatas: any;
        constructor($q: ng.IQService, $scope: IModalCnilScope, $rootScope: ng.IRootScopeService, $modalInstance: any, data: any, $modal: any);
        valider(): void;
        annuler(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class ModaleCreationGarantieControleur {
        private serviceAgentExtended;
        private $scope;
        private data;
        private $modalInstance;
        private $rootScope;
        private mwEvents;
        private creationEpsService;
        private creationGarantieService;
        private popupService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private syntheseErreurs;
        private garantie;
        private listeNature;
        private nouvelleGarantie;
        private garantieCourante;
        private enregistrementEnCours;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, creationEpsService: Services.Application.ICreationEpsService, creationGarantieService: Services.Application.Creation.Garantie.ICreationGarantieService, popupService: Services.IPopupService);
        checkDateFin(dateDebut: Date): void;
        /** */
        goToAnchor(ancre: string): void;
        validerEnregistrement(garantie: Services.Application.Creation.Garantie.IGarantieCreation): boolean;
        enregistrer(): void;
        supprimer(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class ModaleCreationMarcheControleur {
        private serviceAgentExtended;
        private $scope;
        private data;
        private $modalInstance;
        private $rootScope;
        private mwEvents;
        private creationEpsService;
        private donneesCreation;
        private creationMarcheService;
        private popupService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private syntheseErreurs;
        private marche;
        private modeleActe;
        private ligneAutorisation;
        private marcheOptions;
        private sousTypeMarche;
        private isDateReceptionRequired;
        private creationMarche;
        private saveEnCours;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, creationEpsService: Services.Application.ICreationEpsService, donneesCreation: Services.Application.IDonneesCreationService, creationMarcheService: Services.Application.Creation.Marche.ICreationMarcheService, popupService: Services.IPopupService);
        gererOptionsAffichages(): void;
        validerEnregistrement(): boolean;
        /** */
        goToAnchor(ancre: string): void;
        supprimer(): void;
        enregistrer(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    interface ISortieModaleMarchePrincipalCreation {
        marchePrincipal: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture;
        tiers: Modeles.Neo.DossierCreditInstruction.IPersonneAutreLecture;
    }
    /**
     * Controleur de l'écran consultation
     */
    class ModaleCreationMarchePrincipalControleur {
        private serviceAgentExtended;
        private $scope;
        private data;
        private $modalInstance;
        private $rootScope;
        private mwEvents;
        private creationEpsService;
        private creationMarchePrincipalService;
        private popupService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private syntheseErreurs;
        private marchePrincipal;
        private tiers;
        private typeTiers;
        private nomGroupementAffiche;
        private creationMarchePrincipal;
        private enregistrementEnCours;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, creationEpsService: Services.Application.ICreationEpsService, creationMarchePrincipalService: Services.Application.Creation.MarchePrincipal.ICreationMarchePrincipalService, popupService: Services.IPopupService);
        validerEnregistrement(): boolean;
        /** */
        goToAnchor(ancre: string): void;
        supprimer(): void;
        enregistrer(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur de l'écran consultation
     */
    class ModaleCreationPayeurControleur {
        private serviceAgentExtended;
        private $scope;
        private data;
        private $modalInstance;
        private $rootScope;
        private mwEvents;
        private creationEpsService;
        private creationPayeurService;
        private popupService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private syntheseErreurs;
        private isCreation;
        private isPayeurPrincipal;
        private payeur;
        private listeModeReglement;
        private listeCompte;
        private chargementModeRegl;
        private rechercheBicEnCours;
        private sauvegardeEnCours;
        private suppressionEnCours;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, creationEpsService: Services.Application.ICreationEpsService, creationPayeurService: Services.Application.Creation.Payeur.ICreationPayeurService, popupService: Services.IPopupService);
        selectModeReglement(modeReglement: Modeles.EngagementParametre.IModeReglement): void;
        recupererBIC(iban: string): void;
        /** */
        goToAnchor(ancre: string): void;
        validerEnregistrement(): boolean;
        enregistrer(): void;
        supprimer(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    interface IRetourPopupAutorisation {
        avecModeleActe: boolean;
        produit: Modeles.EngagementParametre.IProduit;
        objet: Modeles.EngagementParametre.IObjetEPS;
        modeleActe: Modeles.EngagementParametre.ISyntheseModeleActe;
    }
    /**
     * Controleur de l'écran consultation
     */
    class ModeleActeControleur {
        private serviceAgentExtended;
        private data;
        private $modalInstance;
        private $scope;
        private creationEpsService;
        private rechercheModeleActe;
        private rechercheProduit;
        private rechercheObjet;
        private contexteService;
        private popupService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private habilitationSansModele;
        private objet;
        private produit;
        private modeleActe;
        private listeModeleActe;
        private listeProduit;
        private listeObjet;
        private avecModeleActe;
        private identifiantFamille;
        private chargementProduit;
        private chargementModeleActe;
        private chargementObjet;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, creationEpsService: Services.Application.ICreationEpsService, rechercheModeleActe: Services.Rest.EngagementParametre.IRechercheModeleActeService, rechercheProduit: Services.Rest.EngagementParametre.IRechercheProduitEpsService, rechercheObjet: Services.Rest.EngagementParametre.IRechercheObjetEPSService, contexteService: Services.Application.IDonneesContexteService, popupService: Services.IPopupService);
        filterListeModeleActe(liste: Array<Modeles.EngagementParametre.ISyntheseModeleActe>): Array<Modeles.EngagementParametre.ISyntheseModeleActe>;
        /**
         * Récupération de la liste de produit la première fois que l'on veut afficher la liste de produit
         */
        chargerProduit(): void;
        chargerObjet(produit: Modeles.EngagementParametre.IProduit): void;
        /** Validation, vers création de l'EPS */
        valider(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module creditsEps.Controleurs {
    /**
     * Controleur
     */
    class SignataireControleur {
        private serviceAgentExtended;
        private $scope;
        private data;
        private $modalInstance;
        private $rootScope;
        private mwEvents;
        private creationEpsService;
        private donneesCreationService;
        private signataireService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private listeStructure;
        private chargementPopup;
        private typePopup;
        private premierSignataire;
        private deuxiemeSignataire;
        private syntheseErreurs;
        private validationEPSEnCours;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, creationEpsService: Services.Application.ICreationEpsService, donneesCreationService: Services.Application.IDonneesCreationService, signataireService: Services.Application.Creation.Signataire.ISignataireService);
        /**
         * Sauvegarde des signataires puis validation de l'eps
         */
        validerEPS(): void;
        /** */
        goToAnchor(ancre: string): void;
        /** Validation */
        boutonValider(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IRechercheNatureGarantieEPS {
        listeNaturesGarantie: Array<INatureGarantie>;
    }
    interface INatureGarantie {
        /**
         * Libellé de la nature de la garantie.
         */
        libelleNature: string;
        /**
         * Libellé court de la nature de la garantie.
         */
        libelleCourtNature: string;
        /**
         * Indique le type de garantie des Engagement Par Signature avec la nomenclature nationale.
         */
        typeGarantieEpsNational: string;
        /**
         * Indique s'il s'agit d'un  Engagement Par Signature déclarable à la centrale des risques de la BDF.
         */
        declarableBNF: boolean;
        /**
         * Type de produit de l'EPS.
         */
        typeProduitEps: string;
        /**
         * Date de début de validité.
         */
        dateDebutValidite: Date;
        /**
         * Date de finde validité.
         */
        dateFinValidite: Date;
        /**
         * Type d'EPS.
         * '65'          - Caution de paiement de travaux
         * '66'          - Caution fiscale
         * '69'          - Caution de paiement à terme
         * '70'          - Caution de loyer
         */
        codeNatureGarantie: string;
    }
}

declare module creditsEps.Modeles.EngagementParametre {
    interface IPartenariatEPS {
        /**
         * Identifiant d'un Etablissement du Groupe BPCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: number;
        /**
         * Code partenariat EPS
         */
        codePartenariatEPS: string;
        /**
         * Code nature partenariat
         */
        codeNaturePartenariat: string;
        /**
         * Libelle court partenariat EPS
         */
        libelleCourtPartenariatEPS: string;
        /**
         * Libelle long partenariat EPS
         */
        libelleLongPartenariatEPS: string;
        /**
         * Date de début de validité
         */
        dateDebutValidite: Date;
        /**
         * Date de fin de validité
         */
        dateFinValidite: Date;
    }
    interface IRecherchePartenariatEPS {
        /**
         * Liste partenariat
         */
        listePartenariatEPS: Array<IPartenariatEPS>;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface ICreerElementsRequest {
        identifiantDossier: string;
        listeElementCreer: Array<IElementCreer>;
    }
    interface IElementCreer {
    }
    interface IMarcheEPSCreer extends IElementCreer {
        complementEPS: string;
        marcheEPSMAJ: IMarcheEPSMaj;
    }
    interface IPersonneAutreCreer extends IElementCreer {
        dossier: string;
        role: number;
        personneAutreMAJ: IPersonneAutreMaj;
    }
    interface IPayeurCreer extends IElementCreer {
        payeurMaj: Modeles.Neo.DossierCreditInstruction.IPayeurMaj;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IElementSchema {
        idws: string;
        /**
         * Pareil que idws mais pour la ressource dossiercreditinstruction/ouvrirDossier... -_-
         */
        id: string;
        description: string;
    }
    interface IBlocNotesSchema extends IElementSchema {
        typeBlocNote: string;
    }
    interface IClausePersonnaliseeSchema extends IElementSchema {
        destinataireClassePersonne: number;
    }
    interface IAlerteEnSortieSchema extends IElementSchema {
        codeAlerte: string;
        dateEmissionAlerte: Date;
    }
    interface IAlerteEnEntreeSchema extends IElementSchema {
        codeAlerte: number;
        dateEmissionAlerte: Date;
    }
    interface IAvisSchema extends IElementSchema {
        codeTypologieAvis: string;
        dateSaisieAvis: Date;
    }
    interface IEvenementSchema extends IElementSchema {
        codeTypeEven: string;
        dateEffetEven: Date;
    }
    interface IVersementSchema extends IElementSchema {
        pourcentageVersement: number;
    }
    interface IRedacteurActeSchema extends IElementSchema {
        idPersonneSI: string;
    }
    interface IRessourceSchema extends IElementSchema {
        typeRessource: string;
        montantRessource: number;
        nombrePeriodeParAn: number;
    }
    interface IChargeSchema extends IElementSchema {
        typeDech: string;
        montantCharge: number;
        nombrePeriodeParAn: number;
    }
    interface IPhaseCreditExistantSchema extends IElementSchema {
        codeTypePhase: string;
    }
    interface ICreditExistantSchema extends IChargeSchema {
        montantRestantDu: number;
        phasesCreditExistant: Array<IPhaseCreditExistantSchema>;
    }
    interface IRevenuFiscalSchema extends IElementSchema {
        montantRevnMeng: number;
    }
    interface IPatrimoineImmobilierSchema extends IElementSchema {
        naturePatrimoineImmobilier: number;
        valeurActuarielPatrimoine: number;
    }
    interface IEmprunteurSchema extends IElementSchema {
        idwsPersonnes: Array<string>;
        ressources: Array<IRessourceSchema>;
        charges: Array<IChargeSchema>;
        revenusFiscaux: Array<IRevenuFiscalSchema>;
        patrimoinesImmobilier: Array<IPatrimoineImmobilierSchema>;
    }
    interface IFamilleEpargneSchema extends IElementSchema {
        codeFamilleProduitAdresse: string;
        montantValeurEpargneAvenantOper: number;
    }
    interface ICompteSchema extends IElementSchema {
        numeroCompte: string;
        typeCompte: string;
    }
    interface ICompteProfessionnelSchema extends ICompteSchema {
    }
    interface ICompteDepotSchema extends ICompteSchema {
    }
    interface IRelationEntrePersonnesSchema extends IElementSchema {
        codeNatureRelation: string;
        idPersonne2: string;
    }
    interface IComplementFicheContactSchema extends IElementSchema {
    }
    interface IPersonneSchema extends IElementSchema {
        codeTypePersonne: number;
        nomRaisonSociale: string;
        idPersonneSI: string;
        roles: Array<string>;
        ressources: Array<IRessourceSchema>;
        charges: Array<IChargeSchema>;
        famillesEpargne: Array<IFamilleEpargneSchema>;
        comptes: Array<ICompteSchema>;
        relationsEntrePersonnes: Array<IRelationEntrePersonnesSchema>;
        complementFicheContact: IComplementFicheContactSchema;
    }
    interface IPersonneMoraleSchema extends IPersonneSchema {
        listeIdPersonnePhys: Array<string>;
    }
    interface IOppositionSchema extends IElementSchema {
        codeOpposition: string;
        dateDebutOpposition: Date;
        dateFinOpposition: Date;
    }
    interface IInterditBancaireSchema extends IElementSchema {
    }
    interface IActiviteSchema extends IElementSchema {
        codeClasseRisqueCSP: number;
    }
    interface IPersonnePhysiqueSchema extends IPersonneSchema {
        oppositions: Array<IOppositionSchema>;
        interditBancaire: IInterditBancaireSchema;
        activite: IActiviteSchema;
    }
    interface IBienAVendreSchema extends IElementSchema {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        prixNetVendeur: number;
    }
    interface IInfoRegroupementSchema extends IElementSchema {
    }
    interface IPretReamenageSchema extends IElementSchema {
        codeBanque: string;
        idCreditGestion: string;
        montantRestantDuSurPretRefn: number;
        informationRegroupement: IInfoRegroupementSchema;
    }
    interface IReamenagementSchema extends IElementSchema {
        typeReamenagement: number;
        capitalRestantDu: number;
        pretsReamenages: Array<IPretReamenageSchema>;
    }
    interface IAplSchema extends IElementSchema {
        montantAPL: number;
        typeAPL: number;
    }
    interface ICreditExterneSchema extends IElementSchema {
        libletblPret: string;
        montantCapital: number;
        tegActu: number;
    }
    interface IPalierContraintSchema extends IElementSchema {
        dateDebutPeriode: Date;
        durePalier: number;
        montantEcheance: number;
    }
    interface IRemiseClientSchema extends IElementSchema {
        montantApplication: number;
        tauxApplication: number;
    }
    interface ITrancheMontantSchema extends IElementSchema {
        tauxTrancheMontant: number;
        debutTrancheMontant: number;
        finTrancheMontant: number;
        remiseClient: IRemiseClientSchema;
    }
    interface ICotisationSchema extends IElementSchema {
        tauxCotisation: number;
        montantCotisation: number;
        remiseClient: IRemiseClientSchema;
        tranchesMontant: Array<ITrancheMontantSchema>;
    }
    interface ICotisationTrancheAgeSchema extends ICotisationSchema {
    }
    interface ICotisationPhaseSchema extends ICotisationSchema {
    }
    interface ICotisationDerogationSchema extends ICotisationSchema {
    }
    interface ICotisationPeriodeSchema extends ICotisationSchema {
    }
    interface ICouvertureCreditSchema extends IElementSchema {
        montantCouverture: number;
        quotientCouverture: number;
        idCredit: string;
        cotisations: Array<ICotisationSchema>;
    }
    interface IAccessoireSchema extends IElementSchema {
        couverturesCredits: Array<ICouvertureCreditSchema>;
    }
    interface IAccessoireComplementaireSchema extends IAccessoireSchema {
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
    }
    interface IAccessoireLieProduitSchema extends IAccessoireSchema {
        codeTypeAccessoire: string;
        idProduitFinancier: string;
    }
    interface IAvisOrganismeExterneSchema extends IElementSchema {
        codeDecision: string;
        dateAvis: Date;
    }
    interface IAssuranceSchema extends IAccessoireSchema {
        idPersonne: string;
        idConvention: string;
        avisOrganismeExterne: Array<IAvisOrganismeExterneSchema>;
    }
    interface IGarantieSchema extends IAccessoireSchema {
        idPersonne: string;
    }
    interface IBienPorteEnGarantieSchema extends IElementSchema {
    }
    interface IHypothequeAerienneSchema {
    }
    interface IBonDeCaisseCapitalisationSchema {
    }
    interface IDelegationLoyerSchema {
    }
    interface ICessionDaillyAutreSchema {
    }
    interface ICessionDaillyLoyerImmeubleSchema {
    }
    interface IGageVehiculeSchema {
    }
    interface IGageCompteInstrumentFinancierSchema {
    }
    interface INantissementPartSocialeSchema {
    }
    interface INantissementValeurMaterielleSchema {
    }
    interface INantissementValeurMobiliereSchema {
    }
    interface INantissementFondDeCommerceSchema {
    }
    interface IProprietaireSchema {
    }
    interface IHypothequeImmobiliereSchema {
        proprietaires: Array<IProprietaireSchema>;
    }
    interface IBienDiversSchema {
    }
    interface IVersementAttenduSchema {
        montantVersement: number;
    }
    interface IContratAssuranceSchema {
        versementsAttendus: Array<IVersementAttenduSchema>;
    }
    interface IAntichreseSchema {
    }
    interface ICreditHDSchema {
        referencePret: string;
        montantPret: number;
        idCreditExnt: string;
    }
    interface IGarantieHDSchema {
        natureGarantieHorsDossier: string;
        idOrigineGarantieHorsDossier: string;
        creditsHD: Array<ICreditHDSchema>;
    }
    interface IGarantieReelleSchema {
        bienPorteEnGarantie: IBienPorteEnGarantieSchema;
        garantieHD: IGarantieHDSchema;
    }
    interface IGarantiePersonnelleSchema {
        avisOrganismeExterne: Array<IAvisOrganismeExterneSchema>;
    }
    interface IServiceSurObjetSchema {
        idConvention: string;
    }
    interface IEcheanceOptimisationSchema {
        montantRemboursementSaisie: number;
        codeTypeElementSaisie: number;
    }
    interface ICreditPalierTauxSchema {
        tauxInterieurPalier: ITauxInteretAnnuelLecture;
        dureeEnMois: number;
        echeancesOptimisation: Array<IEcheanceOptimisationSchema>;
    }
    interface ICreditParamIndexationSchema {
        numeroIndiceRevisionCredit: number;
    }
    interface ICreditParamRevisionSchema {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        creditParamsIndexation: Array<ICreditParamIndexationSchema>;
    }
    interface ICreditParamRevisionParPhaseSchema {
    }
    interface ICreditPhaseSchema {
        dureeEnMois: number;
        creditPaliersTaux: Array<ICreditPalierTauxSchema>;
        creditParamsRevisionParPhase: ICreditParamRevisionParPhaseSchema;
    }
    interface ICreditPalierProgressionSchema {
    }
    interface IComplementPhasePretCombineSchema {
    }
    interface ICreditPhaseAmortissementSchema {
        creditPaliersProgression: Array<ICreditPalierProgressionSchema>;
        complementPhasePretCombine: IComplementPhasePretCombineSchema;
    }
    interface ICreditPhaseDiffereAmortissementSchema {
    }
    interface ICreditPhaseDiffereTotalSchema {
    }
    interface ICreditPhaseMobilisationSchema {
    }
    interface ICreditPhasePrefinancementSchema {
    }
    interface ISuiviPlanifieSchema {
    }
    interface IPayeurSchema {
        pourcentagePaiementCredit: number;
        idPersonne: string;
    }
    interface ICreditParamRevisionParPeriodeSchema {
    }
    interface ICreditModaliteSchema {
        idModeleCalculImpe: string;
        numeroModeleRemboursementAnticipe: number;
    }
    interface ICreditBonificationInfoSchema {
        codeInformation: string;
        codeDetail: string;
    }
    interface ICreditBonificationSchema {
        idConvention: string;
        information: Array<ICreditBonificationInfoSchema>;
    }
    interface IDroitUtiliseSchema {
        montantDroitAcqsUtilisation: number;
        idTrancheEL: string;
    }
    interface ICompteCourantSchema {
        montantHypothequeCapital: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
    }
    interface IVariationDureeSchema {
        nombrePeriodeVartPossibilite: number;
        typeButoireVartDure: number;
    }
    interface IVersementFractionneSchema {
        nombreVersementSouh: number;
        montantVersementFraction: number;
    }
    interface ITACreditEPSSchema {
        dateEcheanceMER: Date;
        montantCapitalAmortissement: number;
        montantCapitalRestantDu: number;
    }
    interface ICreditEPSSchema {
        codeDevise: string;
        quotientCreditCouvertureParEPS: number;
        referenceExterneCreditCouvertureEPS: string;
        taCreditCouvertureParEPS: Array<ITACreditEPSSchema>;
    }
    interface ICreditInterneSchema extends IElementSchema {
        idProduitFinancier: string;
        montantCapitalCredit: number;
        tegProp: number;
        phases: Array<ICreditPhaseSchema>;
        remiseClient: IRemiseClientSchema;
        suivisPlanifies: Array<ISuiviPlanifieSchema>;
        payeurs: Array<IPayeurSchema>;
        creditParamsRevision: Array<ICreditParamRevisionSchema>;
        creditModalite: ICreditModaliteSchema;
        creditBonification: ICreditBonificationSchema;
        droitsUtilises: Array<IDroitUtiliseSchema>;
        compteCourant: ICompteCourantSchema;
        variationsDuree: Array<IVariationDureeSchema>;
        versementFractionne: IVersementFractionneSchema;
        complementEPS: IComplementEPSSchema;
        creditsEPS: Array<ICreditEPSSchema>;
    }
    interface IPlanFinancementSchema extends IElementSchema {
        montantTotalEmpruntPlan: number;
        montantApportPersonne: number;
        montantPreEchPhase: number;
        aPL: IAplSchema;
        creditsExternes: Array<ICreditExterneSchema>;
        paliersContraints: Array<IPalierContraintSchema>;
        accessoiresComplementaires: Array<IAccessoireComplementaireSchema>;
        accessoiresLiesProduit: Array<IAccessoireLieProduitSchema>;
        assurances: Array<IAssuranceSchema>;
        garanties: Array<IGarantieSchema>;
        servicesSurObjet: Array<IServiceSurObjetSchema>;
        creditsInternes: Array<ICreditInterneSchema>;
    }
    interface IProjetSchema extends IElementSchema {
        typeObjetFinancier: string;
        typeObjetRegle: string;
        codeNatureFinancier: string;
        coutTotalObjet: number;
        bienAVendre: IBienAVendreSchema;
        reamenagement: IReamenagementSchema;
        plansFinancement: Array<IPlanFinancementSchema>;
        idPlanRetn: string;
    }
    interface IBienConsoFinanceSchema {
    }
    interface IAutoMotoSchema {
    }
    interface IBienDetailleSchema {
    }
    interface IBienEquipementProSchema {
    }
    interface ITresorerieFinanceeSchema {
    }
    interface IProjetNonImmobilierSchema {
        bienConsommationFinance: IBienConsoFinanceSchema;
        bienEquipementPro: IBienEquipementProSchema;
        tresorerieFinancee: ITresorerieFinanceeSchema;
    }
    interface IPromotionImmobiliereSchema {
        intituleProgramme: string;
        situationProgramme: number;
    }
    interface ITerrainFinanceSchema {
        coutTerr: number;
    }
    interface IBienSousJacentSchema {
    }
    interface ITerrainSousJacentSchema {
    }
    interface ISoulteFinanceeSchema {
        montantSoul: number;
        bienSousJacent: IBienSousJacentSchema;
    }
    interface IDetailCoutObjetSchema {
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
    }
    interface ITravauxFinancesSchema {
        coutTravaux: number;
        bienSousJacent: IBienSousJacentSchema;
        detailsCoutObjet: Array<IDetailCoutObjetSchema>;
    }
    interface IConstructionFinanceeSchema {
        coutConstructionFinancier: number;
        bienSousJacent: IBienSousJacentSchema;
    }
    interface IBatimentHabitableFinanceSchema {
        coutAcqsBatimentHabitation: number;
        bienSousJacent: IBienSousJacentSchema;
    }
    interface IButLocatifSchema {
        montantAnnuLoyePerc: number;
    }
    interface ITrancheELSchema {
        montantDroitAcqs: number;
    }
    interface IContratEpargneLogementSchema {
        codeTypeEL: number;
        idContratEpargneLogement: string;
        tranchesEL: Array<ITrancheELSchema>;
        idPersonneBeneficiaire: string;
    }
    interface IProjetImmobilierSchema {
        promotionImmobiliere: IPromotionImmobiliereSchema;
        terrainFinance: ITerrainFinanceSchema;
        soulteFinance: ISoulteFinanceeSchema;
        travauxFinance: ITravauxFinancesSchema;
        constructionFinance: IConstructionFinanceeSchema;
        batimentHabitableFinance: IBatimentHabitableFinanceSchema;
        butLocatif: IButLocatifSchema;
        contratsEL: Array<IContratEpargneLogementSchema>;
    }
    interface IProjetEPSSchema {
    }
    interface IComplementDossierSchema {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: number;
    }
    interface IPoolEPSSchema {
        idDossierInstruction: string;
        idOprtCess: string;
        idCadreFinancier: string;
        codeNaturePool: number;
        codeOrigineCess: number;
        typeSousRolePool: number;
    }
    interface ICreerProjetRequest {
        versionWsdl: number;
        dateTraitement: string;
        applicationCharge: number;
        idClientBancaire: string;
        typeObjetCommercialisation: string;
        typeObjetReglemente: string;
        coutTotalObjet: number;
        montantApportPersonne: number;
        idProduit: string;
        canalDeCreation: string;
        codeDevise: string;
    }
    interface ISynthesePlanFinancementSchema {
        coutTotalTTC: number;
        coutTotalFraisGarantie: number;
        coutTotalFraisDossier: number;
        montantApportPersonnel: number;
        mtfaso_MontantConcoursInternes: number;
        mkface_MontantConcoursExternes: number;
    }
    interface IAnomalieLecture {
        typeContrôle: number;
        idAno: string;
        libelleAno: string;
        typeAno: number;
        dateHeureAno: Date;
        idContrôleRegle: string;
        idObjet: string;
    }
    interface IPersonneAutreSchema {
    }
    interface IMarcheEPSSchema {
        idDosInstruction: string;
        numeroRelPlanDossier: number;
        numeroRelCreditPlan: number;
        codeTypeMarche: string;
    }
    interface IComplementEPSSchema extends IElementSchema {
        natureGarantieEPS: string;
        idDossierInstruction: string;
        referenceExterneDossierParent: string;
        idModeleActeEPS: string;
        marchesEPS: Array<IMarcheEPSSchema>;
    }
    interface IDossierSchema extends IElementSchema {
        etatDossier: number;
        sousEtatDossier: number;
        codeDevise: string;
        blocNotesDivers: Array<IBlocNotesSchema>;
        clausesPersonnalisees: Array<IClausePersonnaliseeSchema>;
        alertesEnSortie: Array<IAlerteEnSortieSchema>;
        alertesEnEntree: Array<IAlerteEnEntreeSchema>;
        avis: Array<IAvisSchema>;
        evenements: Array<IEvenementSchema>;
        versements: Array<IVersementSchema>;
        redacteurActe: IRedacteurActeSchema;
        emprunteur: IEmprunteurSchema;
        personnes: Array<IPersonneSchema>;
        projet: IProjetSchema;
        complementDossier: IComplementDossierSchema;
        poolEPS: IPoolEPSSchema;
        anoCtlOuvrtDossier: Array<IAnomalieLecture>;
    }
}

declare module creditsEps.Modeles.Creation {
    interface IDossierEPS {
        dossierEPS?: Neo.DossierCreditInstruction.IDossierLecture;
        listeAccessoireLiesProduit?: Array<Neo.DossierCreditInstruction.IAccessoireLieProduitLecture>;
        listeCouverturesCredit?: Array<Neo.DossierCreditInstruction.ICouvertureCreditLecture>;
        listeCotisations?: Array<Neo.DossierCreditInstruction.ICotisationLecture>;
        listeGaranties?: Array<Neo.DossierCreditInstruction.IGarantieLecture>;
        marcheEps?: Neo.DossierCreditInstruction.IMarcheEPSLecture;
        marchePrincipal?: Neo.DossierCreditInstruction.IMarcheEPSLecture;
        complementEPS?: Neo.DossierCreditInstruction.IComplementEPSLecture;
        blocNotes?: Neo.DossierCreditInstruction.IBlocNotesLecture;
        comptePayeurPrincipal?: Neo.DossierCreditInstruction.IPayeurLecture;
        beneficiaire?: Neo.DossierCreditInstruction.IPersonneAutreLecture;
        payeurPrincipal?: Neo.DossierCreditInstruction.IPersonneLecture;
        payeurSecours?: Neo.DossierCreditInstruction.IPersonneAutreLecture;
        tiersMarchePrincipal?: Neo.DossierCreditInstruction.IPersonneAutreLecture;
        clientEPS?: Neo.DossierCreditInstruction.IEmprunteurLecture;
        listeCompte?: Array<Neo.DossierCreditInstruction.ICompteDepotLecture>;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IEditerDocumentEPSRequest {
        identifiantDossier: string;
        identifiantDocument: string;
        parametres: Array<IParamEditique>;
        identifiantWs: string;
    }
    interface IEditerDocumentEPSResponse {
        data: string;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IElementLecture {
        idws: string;
    }
    interface IAccessoireLecture extends IElementLecture {
        idAccessoireGestion: string;
        idExterneAccessoire: string;
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
        codeTypologieAccessoire: string;
        partFinancierAccessoire: number;
        codeIndiceAccessoireAper: boolean;
        codeIndiceAccessoireFinancier: boolean;
        dateCreation: Date;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        listeIdCouverture: Array<string>;
        listeIdCotisation: Array<string>;
        idConvention: string;
        listeIdAvisOrgnExtr: Array<string>;
        idPlan: string;
    }
    interface IGarantieLecture extends IAccessoireLecture {
        natureGarantie: string;
        commentaire: string;
        dateLimiteRetardCaution: Date;
        codeFormeActeAuthentique: number;
        codeClasseGarantie: number;
        typeSurete: number;
        idPersonne: string;
    }
    interface IGarantiePersonnelleLecture extends IGarantieLecture {
        codeNatureCaution: number;
        listeErrrTechniqueNonBlqn: Array<string>;
    }
    interface IBienPorteEnGarantieLecture {
        libelleObjet: string;
        typeObjetCommercialisation: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        montantEstmVenl: number;
        dateEstmVenl: Date;
        codeModeleEstmVenl: string;
        montantEstmPrdn: number;
        dateEstmPrdn: Date;
        codeModeleEstmPrdn: string;
        codeMotfReSPrdn: string;
        dateExpressionBienCff: Date;
        noteExpressionBienCff: number;
        idObjetGestion: string;
        idGarantieReel: string;
    }
    interface IAntichreseLecture {
        referenceCads: string;
        numeroLot: string;
    }
    interface IHypothequeAerienneLecture {
        numeroSer: string;
        numeroImmt: string;
    }
    interface IBonDeCaisseCapitalisationLecture {
        referenceCadastrale: string;
        numeroCompte: string;
        numeroSiren: string;
        valeurBonOrigine: number;
        numeroContratTitre: string;
        natureBon: string;
        dateeche: Date;
        titreNomPrenDeps: string;
    }
    interface IDelegationLoyerLecture {
        montantAnnuLoye: number;
        numeroCompte: string;
        dateExterneBail: Date;
        nomGern: string;
    }
    interface ICessionDaillyAutreLecture {
    }
    interface IContratAssuranceLecture {
        dateNaisAssurance: Date;
        numeroContratAssurance: string;
        nomCieAssurance: string;
        numeroSiren: string;
        cntrGestion: string;
        typeTechniqueJuridique: string;
        nomContratAssurance: string;
        apportPersonne: number;
        montantMinimumVersementSigne: number;
        codeIndiceAttnVersement: number;
        listeIdVersementAttn: Array<string>;
    }
    interface ICessionDaillyLoyerImmeubleLecture {
    }
    interface IGageVehiculeLecture {
        numeroSer: string;
        numeroImmt: string;
    }
    interface IGageCompteInstrumentFinancierLecture {
        referenceCadastrale: string;
        numeroCompte: string;
    }
    interface INantissementPartSocialeLecture {
        numeroEnregistrement: string;
        numeroCompte: string;
        descriptionOtion: string;
    }
    interface INantissementValeurMaterielleLecture {
        typeValeurMatrimonial: string;
        numeroRefTypeLot: string;
    }
    interface INantissementValeurMobiliereLecture {
        referenceCadastrale: string;
        numeroCompte: string;
    }
    interface INantissementFondDeCommerceLecture {
        numeroInscRcs: string;
        libelleLibr: string;
        titreOccpLocLeqlFondEstExpl: number;
    }
    interface IHypothequeImmobiliereLecture {
        referenceCads: string;
        referenceLot: string;
        typeBien: number;
        typeLogement: string;
        destinataireBien: number;
        surfHabitation: number;
        surfTerr: number;
        zoneImplBien: string;
        qualEmpla: number;
        montantDernierMutt: string;
        dateDernierMutt: string;
        anneConstruction: number;
        montantAnnuLoye: string;
        numeroLotCopr: string;
        numeroSctn: string;
        occpActuarielBien: number;
        codePresHypotheque: number;
        idExpression: string;
        dateDemandeExpression: Date;
        listeIdProprios: Array<string>;
        listeIdReferenceCadastrls: Array<string>;
        listeIdReferenceLot: Array<string>;
    }
    interface IBienDiversLecture {
        reference1: string;
        reference2: string;
    }
    interface IGarantieReelleLecture extends IGarantieLecture {
        codeGarantieRchab: number;
        numeroRangSecnHypotheque: number;
        dureHypothequeMois: number;
        pactCommr: number;
        rangHypotheque: number;
        codeCessRangHypotheque: number;
        montantCouvertureParHypothequeRangInfe: number;
        idGarantieHorsDossier: string;
        idObjetPortGarantie: string;
    }
    interface IServiceSurObjetLecture {
        numeroRegleCalculDateEffetService: string;
        numeroRelationObjetDossierAuqlEstRattachementService: number;
        idPlanFinancier: string;
        idObjetService: string;
    }
    interface IAccessoireComplementaireLecture {
        codeNatureOrigineAccessoire: number;
        idCatlFrsComp: string;
        idCatlParametreRverTiers: string;
    }
    interface IAccessoireLieProduitLecture extends IAccessoireLecture {
        idProduitFinancier: string;
    }
    interface IAssuranceLecture {
        typeAssurance: string;
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeAssuranceObligatoire: number;
        codeAssurancePart: number;
        codeResr: number;
        libelleAssuranceExterne: string;
        numeroSirenCieAssurance: string;
        numeroRegleCalculDateEffet: string;
        codeAgreAssuranceExtr: number;
        idPersonneAssurance: string;
    }
    interface IButLocatifLecture {
        indicePretTransfertLocf: boolean;
        numeroDecisionFavrGlbl: number;
        dateDecisionFavrLoct: Date;
        indiceDecisionGlblFavr: boolean;
        dateConventionLoct: Date;
        natureAvantageFiscal: string;
        montantAvantageFiscal: number;
        montantFrsAnnulationGestionLogement: number;
        montantFrsAnnulationEntnLogement: number;
        montantTaxeFonc: number;
        presServiceVacnLogement: boolean;
        presUneAssuranceLoyeImpe: boolean;
        montantAnnuLoyePerc: number;
        idProjet: string;
    }
    interface ISoulteFinanceeLecture {
        montantSoul: number;
        permDetrSiSoulFaitSuiteDivo: boolean;
        pourcentageProprietaireOrigine: number;
        valeurActiviteCorrValeurBienOrigine: number;
        surfHabitationBienSous: number;
        dateAcqsBienSous: Date;
        idProjet: string;
        idBienSousJacent: string;
    }
    interface IBatimentHabitableFinanceLecture {
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        coutAcqsBatimentHabitation: number;
        codePrixMarcheBale2: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        dateAcqsBatimentHabitation: Date;
        dateConstructionBatimentHabitation: Date;
        montantTVAFinancierARemboursement: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idProjet: string;
        idTerrSousJacent: string;
    }
    interface IConstructionFinanceeLecture {
        coutConstructionFinancier: number;
        dateDebutConstruction: Date;
        dateFinConstruction: Date;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        typeContratConstruction: number;
        typeImeu: number;
        presUneGarantieAcheTravaux: number;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idProjet: string;
        idTerrSousJacent: string;
    }
    interface IBienSousJacentLecture {
        modeAcqsBien: number;
        cRDBienSousJacent: number;
        dateEntrCapitalDateAcqs: Date;
        modeFinancier: number;
        typeObjetCommercialisation: string;
        typeObjetRegle: string;
        idBien: string;
    }
    interface ITerrainSousJacentLecture {
        surfTerr: number;
        terrEstFinancierParCredit: number;
        dateEntrPatrimoineDateAcqs: Date;
        montantLoyeParMois: number;
        modeAcqsTerr: number;
    }
    interface IDetailCoutObjetLecture {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idTravauxFinancier: string;
    }
    interface ITravauxFinancesLecture {
        coutTravaux: number;
        dateFinTravaux: Date;
        surfHabitationCree: number;
        typeTravauxCadreEcpt: number;
        surfHabitationTotalApreTravaux: number;
        dateConstructionBatimentSousJacent: Date;
        surfHabitationBatimentSousJacent: number;
        dateAcqsBatimentSousJacent: Date;
        typeLogementBatimentSous: number;
        idProjet: string;
        idBienSousJacent: string;
        listeIdDetlCoutTravauxEcpt: Array<string>;
    }
    interface ITerrainFinanceLecture {
        coutTerr: number;
        dateAcqsTerr: Date;
        surfTerr: number;
        codeDonTerr: number;
        codeFinancierTerr: number;
        montantFrsNegocie: number;
        idProjet: string;
    }
    interface IDossierLecture extends IElementLecture {
        idDossier: string;
        versionDossier: number;
        codeImprParExpressionVersement: number;
        codeApplicationChargeDossier: number;
        nombrePassOffre: number;
        dateDernierReslAdresse: Date;
        dateHorizonProjet: Date;
        codeVisbInstruction: number;
        dossierExisteCentral: boolean;
        nombrePersonneAssuranceParDeft: number;
        modificationEffcPendantSess: boolean;
        modeOuvertureDossier: number;
        dossierModification: boolean;
        techniqueVent: number;
        codeLivrnImme: boolean;
        numeroAccrCmps: number;
        engagementRevc: number;
        dateSignePret: Date;
        evenMomnVertPourContratConf: string;
        dateTraitement: Date;
        dateTraitementRegle: Date;
        modRegleVersement: string;
        indicePrrgOffre: number;
        idConventionPres: string;
        idPres: string;
        ensgnPres: string;
        montantSouhInitialEmprunt: number;
        origineCommissionProjet: number;
        codeEtatPlns: number;
        codeApplicationAnlsRisque: boolean;
        idDossierGestion: string;
        idElementStructureGestion: string;
        idElementStructureInstruction: string;
        codeAgentDecd: string;
        codeTypologieCadreFiscal: string;
        codeDevise: string;
        codeLevrSecrBancaire: number;
        dateCreationDossier: Date;
        dateDernierMAJ: Date;
        etatDossier: number;
        sousEtatDossier: number;
        dateDemandeFinancier: Date;
        dateemssOffre: Date;
        dateCiblProjet: Date;
        codeOrigineDemande: string;
        dateAccrPrtr: Date;
        codeEtatEngagementHors: number;
        montantEngagementHorsBiln: number;
        dateFinValiditeOffre: Date;
        dateRecuperationOffreParClient: Date;
        dateEffetOffre: Date;
        modeRegle: string;
        numeroCompteSecoPrel: string;
        domiciliationTresCompteSeco: string;
        dateLimiteRetardEmpruntLoiConsommation: Date;
        dateLimiteRetardOffreLoiConsommation: Date;
        dateMinimumAccpOffreLoiImmobilier: Date;
        dateSigneEmprunt: Date;
        dateRefuOffreParEmprunt: Date;
        dateMinnPourVersementFondLoiConsommation: Date;
        dateEditionOffre: Date;
        idExterneDossier: string;
        typeLoiScrivener: number;
        codeAuthentiqueContrat: boolean;
        delRetardScrivener1: number;
        codeVersementCreation: string;
        codeVersementDernierModification: string;
        montantVersementCnvn: number;
        pourcentageFinancier: number;
        numeroEchelleVersement: number;
        torechlVersement: string;
        codeEtatEnvoiDossierSaccef: number;
        dateLieEnvoiSaccef: Date;
        idEnvoiSaccef: string;
        idOrigineDemande: string;
        libelleOrigineDemande: string;
        datePrevSigneNotaire: Date;
        referenceExterneDossier: string;
        elementStructure5: string;
        elementStructure6: string;
        modeDecn: boolean;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        codeTypeEngagement: string;
        dateSigneDossierEnvoi: Date;
        dateFinValiditeAccr: Date;
        indiceOffrePre: boolean;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeEtatPresenceChargeDossier: number;
        codeEtatActiviteDossier: number;
        indicePresenceChargePieceJustificatifParPiece: number;
        idAgentBoActuarielChargeDossier: string;
        idAgentProprietaireDossier: string;
        idAgentInstructionDossier: string;
        idAgentConnaissanceDossier: string;
        idAgentPourDecisionConf: string;
        idEntiteDecision: string;
        idEntitePourTransfertBo: string;
        blocNotes: string;
        codeEtapeSimulation: number;
        numeroFichPres: string;
        codePrscDossierPres: number;
        dateSigneMand: Date;
        precisionTaux: number;
        codeDevCreditDev: string;
        numeroCompteDev: string;
        modeRegleDev: string;
        modRegleVersementDev: string;
        idComplementDossier: string;
        integrationDossierDeVente: number;
        canalDeCreation: string;
        canalDeDistribution: string;
        idBlocNoteNotsDivr: string;
        idReductionActe: string;
        idEmprunt: string;
        listeIdEven: Array<string>;
        listeIdAvis: Array<string>;
        listeIdAlerteEntr: Array<string>;
        listeIdAlerteSort: Array<string>;
        listeIdProjet: Array<string>;
        listeIdVersement: Array<string>;
        listeIdPersonne: Array<string>;
        listeIdClassePersonne: Array<string>;
        idPoolEPS: string;
    }
    interface IGarantieHDLecture {
        natureGarantieHorsDossier: string;
        idOrigineGarantieHorsDossier: string;
        codeGarantieRchab: number;
        rangPrincipalHypotheque: number;
        rangSecnHypotheque: number;
        codeCessRangHypotheque: number;
        idEtabPreteur: string;
        villeConsvHypotheque: string;
        datePublHypotheque: Date;
        refVolume: string;
        numeroVolume: number;
        dateEffetHypotheque: Date;
        dateFinHypotheque: Date;
        libelleEmprunt: string;
        libelleNotaire: string;
        villeNotaire: string;
        montantInscHypothequeOrigine: number;
        montantHypothequeDisp: number;
        dateDispMontant: Date;
        pactCommr: string;
        codeEtatGarantie: number;
        codeIndiceGarantieExterne: number;
        codeIndiceTrfoGarantie: number;
        dureeInitialMois: number;
        idObjetPortGarantie: string;
        codeTypeGarantieMyss: string;
        idGarantieReel: string;
        listeIdCreditExisteHorsDossier: Array<string>;
    }
    interface IRemiseClientLecture {
        typeRemsClient: string;
        montantApplication: number;
        tauxApplication: number;
        margeApplication: number;
        montantDerogation: number;
        tauxDerogation: number;
        margeDerogation: number;
        montantConsolide: number;
        tauxConsolide: number;
        margeConsolide: number;
        modeCalculTaux: number;
        dateCreation: Date;
        montantRems: number;
        montantRemsDerogation: number;
        idCreditIntr: string;
        idCotisation: string;
        idTranche: string;
    }
    interface ITrancheMontantLecture {
        numeroTrancheMontant: number;
        tauxTrancheMontant: number;
        debutTrancheMontant: number;
        finTrancheMontant: number;
        idCotisation: string;
        idRemsClient: string;
    }
    interface ICotisationLecture extends IElementLecture {
        tauxCotisation: number;
        montantCotisation: number;
        codeIndiceBlcgSaisieMontant: number;
        codeModeCalcul: number;
        codeIndiceApplicationEcheance: boolean;
        codePeriodeCalcul: number;
        dateApplicationCotisation: Date;
        dateDebutApplicationCotisation: Date;
        dateFinApplicationCotisation: Date;
        codeRecouvrement: number;
        montantAssiette: number;
        typeAccessoire: string;
        codeSousTypeAccessoire: string;
        nombrePeriodeApplicationCotisation: number;
        periodeApplicationCotisation: number;
        numeroRegleCalculCotisation: string;
        numeroRegleApplicationCotisation: string;
        codeTypeApplicationCotisation: number;
        montantFrsGarantie: number;
        tauxConsolideFrsDossier: number;
        montantConsolideFrsDossier: number;
        partFinancier: number;
        codeIndiceDepsBorne: number;
        codeIndiceInterieurPlanFinancier: number;
        idAccessoire: string;
        idCouverture: string;
        listeIdTrancheMontant: Array<string>;
        idRemsClient: string;
    }
    interface ICotisationTrancheAgeLecture extends ICotisationLecture {
        numeroTrancheAge: number;
        ageMinimum: number;
        ageMaximum: number;
    }
    interface ICotisationPhaseLecture extends ICotisationLecture {
        idPhase: string;
    }
    interface ICotisationPeriodeLecture extends ICotisationLecture {
        numeroTranche: number;
        nombrePeriodePeriode: number;
        periodePeriode: number;
        nombrePeriodeEtlm: number;
        periodeEtlm: number;
    }
    interface ICotisationDerogationLecture extends ICotisationLecture {
        numeroTrancheAge: number;
        nombrePeriodeApplicationDerogation: number;
        periodeApplicationDerogation: number;
    }
    interface IAplLecture {
        montantAPL: number;
        typeAPL: number;
        periodiciteAPL: number;
        idPlanFinancier: string;
    }
    interface ILigneTirageLecture {
        idCaisseEpargne: number;
        idDossierCommercialisation: string;
        idCreditElement: string;
        libelleLongProduit: string;
        dureCredit: number;
        periodeCredit: number;
        montantActuarielCredit: number;
        tauxActuCredit: number;
    }
    interface ILigneInvestissementLecture {
        idOperAssuranceLigneInvs: string;
        dateNotfAccr: Date;
        dateFinValiditeAccr: Date;
        montantEmpruntTotalSurPlan: number;
        montantRestantDisp: number;
        dateAnnulationModification: Date;
        codeMotfAnnulationModification: string;
        listeIdLigneTirg: Array<string>;
    }
    interface IInfoRegroupementLecture {
        codeBanque: string;
        idDossierCommercialisation: string;
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: Date;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: Date;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        idPretReamenagement: string;
    }
    interface ICompteLecture extends IElementLecture {
        numeroCompte: string;
        dateOuverture: Date;
        modeComposition: number;
        codeDeviseCompte: string;
        typeCompte: string;
    }
    interface ICompteProfessionnelLecture {
        referenceProduitCE: string;
        nombreJourDepsAutrePourCompteProf: number;
        codeCtx: number;
    }
    interface ICompteDepotLecture extends ICompteLecture {
        codeProduitCE: number;
        numeroEntiteTitulaire: number;
        libelleEntiteTitulaire: string;
        codeEtatProduit: number;
        soldMoyenLongTermeCompteDepoCE: number;
        soldMinimumCompteDepoCE: number;
        soldRelCompteDepoCE: number;
        codeTypeCartographie: number;
        dateDelvCartographie: Date;
        codeTypeDecvCompteDepo: number;
        montantDecvAutreSurCompteDepo: number;
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        nombreJourDepsAutreDecv: number;
        montantPrelExteReleaseSurCompteDepo: number;
        codeDepsJustificatif: number;
        codePresDecvIrreSurCompteDepo: number;
        codeExisteCartographieBancaireHorsCE: number;
        codeComnRelvCompteHorsCE: number;
        codeExisteCheq: number;
        soldMoyenMensCreationCompteDepoCE: number;
        mvtCreditMensSurCompteDepo: number;
        codeTypeFctCompteDepoCEHorsCE: number;
        dateOuerCompteDepoHorsCE: Date;
        codeEtablissement: string;
        codeGuic: string;
    }
    interface IChargeLecture {
        montantCharge: number;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idPersonne: string;
        idGrpeIntervenant: string;
        typeDeCharge: string;
    }
    interface ICreditExistantLecture {
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: Date;
        dateMER0: Date;
        dateFinCredit: Date;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        montantPrcheche: number;
        montantPrmeecheAmortissement: number;
        mtechePresenceComp: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        periodeAmortissement: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        listeIdPhssCreditExiste: Array<string>;
    }
    interface IRelationEntrePersonnesLecture {
        codeNatureRelation: string;
        idPersonne1: string;
        idPersonne2: string;
    }
    interface IPersonneLecture extends IElementLecture {
        crteResd: number;
        cateAgntecnmBafi: number;
        cateClientBafi: number;
        cateTypeAdmnBafi: number;
        classeAgentBafi: string;
        cleBDF: string;
        idPersonneSI: string;
        dateEntrRelationAvecConsolide: Date;
        codeTypePersonne: number;
        nomRaisonSociale: string;
        codeAssmPartc: number;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
        ensgCommission: string;
        lieuInscRC: string;
        numeroInscRC: string;
        rolsPersonnePourDossier: Array<string>;
        personneEstAssurance: boolean;
        numeroOrdrePersonneEmprunt: number;
        reltnEntrPersonne: Array<IRelationEntrePersonnesLecture>;
        listeIdRessource: Array<string>;
        listeIdCharge: Array<string>;
        listeIdCompte: Array<string>;
        listeIdFamilleEpargne: Array<string>;
        idFicheContact: string;
    }
    interface IPersonnePhysiqueLecture {
        codeTitreCivilite: string;
        libelleTitreCivilite: string;
        prenom: string;
        codeSexePersonne: number;
        nomJeunFill: string;
        dateNais: Date;
        lieuNais: string;
        codePersonneCE: number;
        codeRegimeMatrimonial: string;
        codeSituationFamille: number;
        nombrePersonneACharge: number;
        cateInteret: string;
        dateEffetSituationFamille: Date;
        codeSalrDomiciliationCE: number;
        codeModeLogement: number;
        dateEntrLogement: Date;
        codeCapcJuridique: number;
        codeTypeCapJuridique: string;
        codeNational: number;
        codeSaisieAvisTiersDtnr: number;
        codeContentieuxHorsComptCE: number;
        montantEncoursSaccefHorsOprt: number;
        typeTrspUtilisation: number;
        codeGeotAdresseDomiciliation: string;
        codePaysResdEmprunt: string;
        codePaysLocalisationEmprunt: string;
        codeProfilEmprunt: number;
        codePstlLieuNais: string;
        idActivite: string;
        idIntdBancaire: string;
        listeIdOpps: Array<string>;
    }
    interface IPersonneMoraleLecture {
        numeroINSEE: string;
        dateInscRcs: Date;
        dateCreationSoce: Date;
        chiffreAffrHtExrcPrec: number;
        nombreSalr: number;
        formeJuridique: string;
        libelleFormeJuridique: string;
        typeDroitPersonneMorl: number;
        montantCapital: number;
        listeIdPersonnePhys: Array<string>;
        listeRolePersonnePhys: Array<string>;
    }
    interface ITACreditEPSLecture {
        idDosInstruction: string;
        numeroRelPlanDos: number;
        numeroRelCreditPlan: number;
        numeroRelCredit: number;
        dateEcheanceMER: Date;
        montantCapitalAmortissement: number;
        montantCapitalRestantDu: number;
    }
    interface IPoolEPSLecture {
        idDossierInstruction: string;
        idOprtCess: string;
        idCadreFinancier: string;
        codeNaturePool: number;
        codeOrigineCess: number;
        typeSousRolePool: number;
    }
    interface ICreditEPSLecture {
        idDosInstruction: string;
        numeroRelPlanDos: number;
        numeroRelCreditPlan: number;
        numeroRelCredit: number;
        codeDevise: string;
        quotientCreditCouvertureParEPS: number;
        referenceExterneCreditCouvertureEPS: string;
        listeIdtaCreditCouvertureParEPS: Array<string>;
    }
    interface IProjetLecture {
        typeObjetFinancier: string;
        typeObjetRegle: string;
        codeNatureFinancier: string;
        descriptionObjet: string;
        coutTotalObjet: number;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        montantFrsDivr: number;
        interieurFrsDivrFinancier: string;
        cateRegleAttribut: string;
        montantRachCren: number;
        codeMiseOeuvrProjetPro: number;
        coutObjetSaisieCalculEnvl: number;
        presBienAVend: boolean;
        negocieEffcParNotaire: boolean;
        typeAcqs: number;
        codeDestinataireAutreParObjet: number;
        nombreUnteContratProgrammeImmobilier: string;
        coutFrsNotaire: number;
        coutRelOper: number;
        montantEstmVenl: number;
        dateEstmVenl: Date;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        fraisDeNotairesSaisissables: boolean;
        idReamenagement: string;
        listeIdPlanFinancier: Array<string>;
        idPlanRetn: string;
        idLigneInvs: string;
        idLigneTirg: string;
        idBienAVend: string;
    }
    interface IProjetNonImmobilierLecture {
        indiceProjetProf: boolean;
        indiceProjetConsolideTres: boolean;
        objTresEtdn: boolean;
        objFinancierConsommation: boolean;
        objTresPrfs: boolean;
        descriptionProjetNonImmobilier: string;
        dateMiseDispFond: Date;
        idBienConsommation: string;
        idBienEqpmProf: string;
        idBienTres: string;
    }
    interface IBienDetailleLecture {
        coutTerr: number;
        coutAcqsCommercialisationInds: number;
        coutAcqsHabitation: number;
        coutConstruction: number;
        coutTravauxAmen: number;
        coutPasPort: number;
        coutFondComc: number;
        coutEqpmMte: number;
        coutVehcPrfs: number;
        coutPartSociale: number;
        montantFrsNegocie: number;
        montantFrsNotaire: number;
        coutStck: number;
        coutStckHorsInstruction: number;
        coutBfr: number;
        coutBfrHorsInstruction: number;
        coutAutreFrsPrfs: number;
        coutAutreFrsPrfsHorsInstruction: number;
        montantTVAFinancier: number;
        montantRachCren: number;
        coutPartSoce: number;
        idProjet: string;
    }
    interface ITresorerieFinanceeLecture {
        codeIndiceBienConsommation: boolean;
        codeIndiceTresProf: boolean;
        codeIndiceTresEtdn: boolean;
        idVendeur: string;
    }
    interface IBienEquipementProLecture {
    }
    interface IBienConsoFinanceLecture {
        idVendeur: string;
        montantInscHypotheque: number;
        idProjet: string;
    }
    interface IAutoMotoLecture {
        typeMotr: number;
        modeVehc: string;
        marqVehc: string;
        typeVehc: number;
        gnreVehc: number;
        puisFiscal: number;
        datePrmeMiseCircl: Date;
    }
    interface IAlerteEnEntreeLecture {
        numeroAlerte: number;
        codeAlerte: number;
        codeTraitementAlerte: number;
        dateEmissionAlerte: Date;
        libelleAlerte: string;
    }
    interface ITauxInteretAnnuelLecture {
        modeCalculTaux: number;
        nombrePeriodeParAn: number;
        tauxActu: number;
        tauxProp: number;
    }
    interface ITauxIndiceLecture {
        marge: number;
        valeurIndice: number;
    }
    interface ITauxFixeLecture {
    }
    interface ITauxMixteLecture {
        repartition: number;
        tauxIndiceCmpstTauxMixte: ITauxIndiceLecture;
        tauxFixeCmpstTauxMixte: ITauxFixeLecture;
    }
    interface ICreditPalierProgressionLecture {
        numeroRelationPrmeEcheancePalierPhase: number;
        numeroRelationDernierEcheancePalierPhase: number;
        tauxProgressifAmortissement: ITauxInteretAnnuelLecture;
        codeIndexTauxProgressifAmortissement: number;
        codePeriodeProgressifAmortissement: number;
        nombrePeriodeDureePalierProgressif: number;
        idCreditPhaseAM: string;
        idPalierProgressifAmortissementNiveauProduit: string;
    }
    interface IComplementPhasePretCombineLecture {
        montantAmortissement: number;
        montantInfine: number;
        codeAjtInterieurCapital: number;
        modeSaisieReprCapital: number;
        quotientAmortissement: number;
        idCreditPhaseAM: string;
    }
    interface ICreditParamIndexationLecture {
        numeroPeriodeRevisionAssuranceParametreIndex: number;
        numeroPhaseProduitAssuranceParametreIndex: number;
        numeroIndiceRevisionCredit: number;
        typeRolIndice: string;
        codeIndiceRevision: string;
        modeExpressionUtilisationIndice: number;
        valeurReferenceIndice: number;
        valeurCoefficientParametreRevision: number;
        codeReptModfeche: number;
        modeReptModfeche: number;
        evenDeclarationRevision: string;
        evenDeclarationPrmeRevision: string;
        nombrePeriodeDetrPrmePeriodeRevision: number;
        codePeriodeDelUtilisationDetrDatePrmeRevision: number;
        codeJourRevision: string;
        codeMoisRevision: string;
        nombreJourAjtPourDetrDatePrmeRevision: number;
        natureLimiteVart: number;
        codeValeurReferenceVartMaximum: number;
        modeExpressionVartTauxIndice: number;
        valeurVartTauxIndice: number;
        codeEvenPermDetrValeurInitialIndice: string;
        dateFixeDetrValeurInitialIndice: Date;
        nombrePeriodeDelEvenDetrDateValeurInitialIndice: number;
        codePeriodeDelUtilisationDetrValeurInitialIndice: number;
        codeIndiceValeurReferenceVartEcheance: number;
        valeurVartMaximumEcheance: number;
        idParametreRevision: string;
    }
    interface ICreditParamRevisionLecture {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        codeIndicecheReclame: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
        idCreditIntr: string;
        listeIdParametreIndex: Array<string>;
    }
    interface ICreditParamRevisionParPeriodeLecture {
        numeroPeriodeProduit: number;
        nombrePeriodeDurePeriode: number;
        codePeriodeDurePeriode: number;
        evenDeclarationDebutPeriode: string;
        nombrePeriodeCmpstDelPremierPeriodeRevision: number;
        codePeriodeCorrNombrePeriodeCmpstDel: number;
    }
    interface ICreditParamRevisionParPhaseLecture {
        codeTypePhaseAssuranceParametreRevision: string;
    }
    interface IEcheanceOptimisationLecture {
        montantRemboursementSaisie: number;
        codeTypeElementSaisie: number;
        idPalierTaux: string;
    }
    interface ICreditPalierTauxLecture {
        tauxInterieurPalier: ITauxInteretAnnuelLecture;
        codeTypeRemboursement: number;
        tauxProgressifEcheanceSurPalier: number;
        codePeriodeApplicationTauxProgressifEcheancePalier: number;
        numeroRelationPrmeEcheancePalier: number;
        numeroRelationDernierEcheancePalier: number;
        nombrePeriodeDureePalier: number;
        idCreditPhase: string;
        listeIdEcheanceOptimisation: Array<string>;
        idPalierTauxAssuranceProduit: string;
    }
    interface ITrancheELLecture {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: Date;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
        idDroitUtilisation: string;
        idContratEpargneLogement: string;
    }
    interface ICreditModaliteLecture {
        idModeleCalculImpe: string;
        tauxIndemniteRemboursementAnticipe: number;
        numeroModeleRemboursementAnticipe: number;
        surcTauxParRappRemboursementAnticipe: number;
        tauxInterieurRetardImpe: number;
        montantIndemniteImpe: number;
        codeTraitementInterieurIntrSurImpe: number;
        idCreditIntr: string;
    }
    interface ICompteCourantLecture {
        montantHypothequeCapital: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
        idCreditIntr: string;
    }
    interface ICreditBonificationInfoLecture {
        codeInformation: string;
        codeDetail: string;
    }
    interface ICreditBonificationLecture {
        idCreditExterne: string;
        codeEtat: number;
        montantEtablissement: number;
        montantPartenaire: number;
        idCreditIntr: string;
    }
    interface IActiviteLecture {
        codeClasseRisqueCSP: number;
        dateEffetCSP: Date;
        dateEmbc: Date;
        codeTypeContratEmbc: number;
        raisonSocialeEmplr: string;
        codePosteEmplr: string;
        codeApNEmplr: string;
        codeSalrDomiciliationCE: number;
        codePresActiviteSalr: number;
        codePresSuivantPersonne: number;
        nombreKilmEntreLogementTrvl: number;
        dateFinCdd: Date;
        codeSecteurActivite: number;
        idPersonnePhys: string;
    }
    interface ICreditHDLecture {
        pourcentCreditCouvert: number;
        capitalCouverture: number;
        dateAffectation: Date;
        dateFinAffectation: Date;
        referencePret: string;
        idDossierReference: string;
        libellePret: string;
        montantPret: number;
        codeDevise: string;
        codeRevision: boolean;
        tauxMoyen: number;
        codeIndice: string;
        margeRevision: number;
        dateMER0: Date;
        dateEffet: Date;
        dateFin: Date;
        cRDCredit: number;
        montantEcheanceTotal: number;
        naturePret: string;
        numeroContratEpargne: string;
        montantInitialGarantie: number;
        etabPrtr: string;
        nombrePeriodeCredit: number;
        codePeriodeCredit: number;
        idCreditExiste: string;
    }
    interface IInterditBancaireLecture {
        codeRepnBDF: number;
        codeRepnFicp: number;
        codeTypeRepnBDF: string;
        codeTypeRepnFicp: string;
        dateApplicationBDF: Date;
        dateApplicationFicp: Date;
        libelleRepnBDF: string;
        libelleRepnFicp: string;
        codeArreSurSalr: number;
        dateApplicationFbe: Date;
        codeRepnFbe: number;
        codePresListnSurCntrTechniqueRegn: number;
        libelleListnSurCntrTechniqueRegn: string;
        codeCotisationFibenDirg: string;
        idPersonnePhys: string;
    }
    interface IVersementAttenduLecture {
        numeroRelationVersementAttn: number;
        typeVersement: string;
        montantVersement: number;
        dateDebut: Date;
        dateFin: Date;
        periodeVersement: number;
        idContratAssuranceGarantie: string;
    }
    interface IProprietaireLecture {
        quotientPleinProp: number;
        quotientNueProp: number;
        quotientUsuf: number;
        quotientDroiUsag: number;
        codeModDettnBien: number;
        idPersn: string;
    }
    interface IReferenceCadastraleLecture {
        referenceCadastre: string;
        sectionCadastre: string;
        surfaceReferenceCadastrale: number;
        commentaires: string;
    }
    interface IReferenceLotLecture {
        referenceTypeDeLot: string;
        natureDuLot: string;
        tantieme: number;
    }
    interface ICouvertureCreditLecture extends IElementLecture {
        montantCouverture: number;
        quotientCouverture: number;
        montantEcheanceCouverture: number;
        dateFinAffectationCouverture: Date;
        idAccessoire: string;
        idCreditCouverture: string;
        listeIdCotisation: Array<string>;
    }
    interface IPatrimoineImmobilierLecture {
        naturePatrimoineImmobilier: number;
        codeIndiceUsageLogement: number;
        valeurActuarielPatrimoine: number;
        dateAcqsPatrimoine: Date;
        capitalRestantSurPatrimoine: number;
        mensPretSurPatrimoine: number;
        dateFinPretSurPatrimoine: Date;
    }
    interface ISuiviPlanifieLecture {
        idSuivantPlafond: string;
        cateSuivantPlafond: string;
        codeTypeSuivantPlafond: string;
        datePremierSuivant: Date;
        dateSuivantPlafond: Date;
        libelleLibrAssuranceSuivant: string;
        idClasse: string;
        nombrePeriodeSuivantPlafond: number;
        codePeriodeSuivantPlafond: number;
        regleDeclaration: string;
        typePhaseSuivantPlafond: string;
        nombrePeriodeDelDeclarationSuivantPlafond: number;
        codePeriodeDelDeclarationSuivantPlafond: number;
        codeAffectationSuivantPlafondProduit: number;
        idCreditIntr: string;
    }
    interface IPayeurLecture extends IElementLecture {
        montantPaiementCredit: number;
        pourcentagePaiementCredit: number;
        modeRegleUtilisationParPayr: string;
        numeroComptePayr: string;
        referenceUniqueMand: string;
        dateSigneMand: Date;
        idCreditIntr: string;
        idPersonneIdCommissionPayr: string;
    }
    interface IDroitUtiliseLecture {
        montantDroitAcqsUtilisation: number;
        montantDroitLimite: number;
        idCreditIntr: string;
        idTrancheEpargneLogement: string;
    }
    interface IVariationDureeLecture {
        nombrePeriodeVartPossibilite: number;
        typeButoireVartDure: number;
        idCreditIntr: string;
    }
    interface IPieceLecture {
        libellePieceContrôle: string;
        codeTheme: string;
        identifiantProcessusAuPlusTard: string;
        indiceCasEcheance: number;
        indiceObligatoire: number;
        stttPieceContrôle: number;
        dateDernierMAJSttt: Date;
        numeroOrdreClasse: number;
        libelleAide: string;
    }
    interface IPieceClientLecture {
    }
    interface ILireElementRequest {
        identifiantDossier: string;
        listeIdentifiantElement: Array<string>;
    }
    interface IBienAVendreLecture {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: Date;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: Date;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idProjet: string;
    }
    interface IComplementDossierLecture {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: number;
    }
    interface IReamenagementLecture {
        typeReamenagement: number;
        usagePretTres: number;
        ancnEcheance: number;
        capitalRestantDu: number;
        valeurAchtObjetFinancier: number;
        dureResdPretRefn: number;
        dateAcqsObjetRefn: Date;
        coutAcqsObjetRefn: number;
        idProjet: string;
        listeIdPretReamenagement: Array<string>;
    }
    interface IPretReamenageLecture {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: Date;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: Date;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idReamenagement: string;
        idInformationCompRegr: string;
    }
    interface IPretReamenageableLecture {
        informationPret: IPretReamenageLecture;
        informationRegroupement: IInfoRegroupementLecture;
    }
    interface ICreditExterneLecture {
        libletblPret: string;
        dureAmortissementMois: number;
        tauxAmortissement: number;
        montantCapital: number;
        montantEcheanceAmortissement: number;
        codePeriodeAmortissement: number;
        codeIndiceInterieurTantPPersonne: number;
        libelleLibrSurConcr: string;
        codeDevise: string;
        codeIndiceNaturePret: number;
        codeIndiceTauxRevision: number;
        dureDiffereMois: number;
        typeSurtaxe: number;
        codeIndicePresAssurancePertEmpl: number;
        codeIndiceTypeRemboursement: number;
        tegActu: number;
        mtecheDiffere: number;
        codePeriodeDiffere: number;
        idPlanFinancier: string;
    }
    interface IPalierContraintLecture {
        dateDebutPeriode: Date;
        dateFinPeriode: Date;
        montantEcheance: number;
        durePalier: number;
        idPlanFinancier: string;
    }
    interface IAlerteEnSortieLecture {
        numeroAlerte: number;
        codeAlerte: string;
        codeTraitementAlerte: number;
        dateEmissionAlerte: Date;
        dateRepnAlerte: Date;
    }
    interface IComplementFicheContactLecture {
        hrDebutPlgHor: number;
        hrFinPlgHor: number;
        comentair: string;
    }
    interface IMandatLecture {
        codeCaisse: string;
        dateDeSignature: Date;
        typeFrequenceMandat: string;
        typeMandatSepaSdd: number;
        codeNatureMandat: number;
        referenceMandat: string;
        nomDuCreancier: string;
        adresseDuCreancier: string;
        codePostalDuCreancier: string;
        villeDuCreancier: string;
        codePaysDuCreancier: string;
        libelleDuPaysDonneurOrdre: string;
        idCreancierSepaDomaine: string;
        nomDuDebiteur: string;
        codeBicDebiteur: string;
        numeroIbanCompteDebiteur: string;
        idDuDebiteur: string;
        adresseDuDebiteur: string;
        codePostalDuDebiteur: string;
        villeDuDebiteur: string;
        codePaysDuDebiteur: string;
        libellePaysDuDebiteur: string;
        libelleCreancierInitial: string;
        idCreancierInitial: string;
        libelleDebiteurFinal: string;
        idDebiteurFinal: string;
    }
    interface IBlocNotesLecture extends IElementLecture {
        typeBlocNote: string;
        contratBlocNote: string;
    }
    interface IClausePersonnaliseeLecture {
        destinataireClassePersonne: number;
        libelleClassePersonne: string;
        numeroRelationClassePersonne: number;
    }
    interface IAvisLecture {
        dateSaisieAvis: Date;
        libelleAvis: string;
        idEntiteSaisieAvis: string;
        libelleEntiteSaisieAvis: string;
        codeTypologieAvis: string;
        numeroAvis: number;
    }
    interface IAvisOrganismeExterneLecture {
        idOrgnExterne: string;
        idInterieurEnvoi: string;
        idExterneEnvoi: string;
        dateEnvoi: Date;
        dateAvis: Date;
        codeIndiceTraitementEnvoi: number;
        codeDecision: string;
        codeMotf: string;
        libelleAvisDecision1: string;
        libelleAvisDecision2: string;
        nomAgentInstruction: string;
        numeroTeleInstruction: string;
        libelleAdresseMail: string;
        numeroFaxInstruction: string;
        typeLiaiSaccefTp: number;
        typeRepnOrgnExterne: number;
        idAccessoire: string;
    }
    interface IEvenementLecture {
        numeroRelationEvenDossier: number;
        codeEtatDossier: number;
        dateSaisieEven: Date;
        messEnregistrementSurEvenDossier: string;
        dateEffetEven: Date;
        codeTypeEven: string;
        idEntiteSaisieEven: string;
        libelleEntiteSaisieEven: string;
        codeIndiceGestionCentralEven: number;
        elementStructureGestionBackCentral: string;
        idCaisseAssuranceBackCentral: number;
        libelleEven: string;
        codeNatureEven: string;
        idAvisAssuranceEven: string;
    }
    interface IVersementLecture {
        montantMinimumVersement: number;
        pourcentageVersement: number;
        numeroEchelleVersement: number;
        numeroOrdreClasse: number;
        libelleAvnc: string;
    }
    interface IPromotionImmobiliereLecture {
        situationProgramme: number;
        libelleSyntDossier: string;
        intituleProgramme: string;
        nomScpi: string;
        dateDiss: Date;
        adresseProgrammeImmobilier: string;
        loclProgrammeImmobilier: string;
        codePosteProgrammeImmobilier: string;
        codePays: string;
        stttCapitalisation: number;
        dateFinCommercialisation: Date;
        indiceAlltDeps: number;
        idProjet: string;
    }
    interface IRedacteurActeLecture {
        idPersonneSI: string;
        nomReductionActe: string;
        prenReductionActe: string;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
    }
    interface IRevenuFiscalLecture {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idEmprunt: string;
    }
    interface IRessourceLecture {
        typeRessource: string;
        montantRessource: number;
        tauxPondereRessource: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        idPersonne: string;
        idGrpeIntervenant: string;
    }
    interface IPhaseCreditExistantLecture {
        dateDebutPhase: Date;
        dateFinPhase: Date;
        montantEcheancePhase: number;
        codeTypePhase: string;
        periodeAmortissement: number;
        duree: number;
        idCreditExistant: string;
    }
    interface IFamilleEpargneLecture {
        codeFamilleProduitAdresse: string;
        nombreProduitDetnPourUneFamilleProduitAdresse: number;
        libelleCaisseEpargne: string;
        dateValeurEpargne: Date;
        montantEpargneApreOper: number;
        codeDevise: string;
        idPersonne: string;
        montantValeurEpargneAvantOper: number;
    }
    interface IContratEpargneLogementLecture {
        codeTypeEL: number;
        codeDeviseCompte: string;
        typeDroit: number;
        lienParentAvecCedn: number;
        idContratEpargneLogement: string;
        libelleTitulaireContrat: string;
        codeIndiceBenePrimeEpargneLogement: number;
        dateOuvertureContrat: Date;
        dateClotureContrat: Date;
        codeForc: number;
        codeRaptContratEpargneLogement: number;
        etabOrigineInterieur: string;
        idPersonneApportDroitContrat: string;
        codeDroitJustificatif: number;
        codeResrDroitAcqs: number;
        listeIdTrancheEpargneLogement: Array<string>;
        idPersonneBeneficiaire: string;
    }
    interface IOppositionLecture {
        codeOpposition: string;
        dateDebutOpposition: Date;
        dateFinOpposition: Date;
        idPersonnePhys: string;
    }
    interface IVersementFractionneLecture {
        periodiciteVersement: number;
        montantPremierVersement: number;
        modeRegleVersement: string;
        numeroDomiciliationMADFond: string;
        montantVersementFraction: number;
        nombreVersementSouh: number;
        montantVersementPeriodeMaximum: number;
        montantVersementInitialMaximum: number;
        quotientPremierVersement: number;
        quotientVersementPeriode: number;
    }
    interface IEmprunteurLecture extends IElementLecture {
        nombreEnfantCharge: number;
        nombrePersonneGrpe: number;
        nombrePersonneSuppCharge: number;
        typeLienEntreLesPersonne: number;
        nomGrpe: string;
        ageEnfant: Array<number>;
        dateDernierRapp: Date;
        anneNaisEnfant: Array<number>;
        codeEmplrComun: number;
        ancnChargeLiesAOperImmobilier: number;
        valeurPatrimoineImmobilier: number;
        codeDevise: string;
        montantPatrimoineMobl: number;
        nombreVoiture: number;
        montantRessourcePondere: number;
        montantChargeEmpruntHorsProjetPondere: number;
        montantAutreChargePondere: number;
        denmEmprunt: string;
        libelleLongEmprunt: string;
        intlcEmprunt: string;
        idEntiteTitulaireClient: string;
        idElementStructureGestion: string;
        codeCateEmprunt: string;
        codeTypeMarche: number;
        codeTypeMarchePersonne: number;
        codeTypeRevnMeng: number;
        cateAgntecnmBafi: number;
        cateClientBafi: number;
        typeAdmnBafi: number;
        classeAgentBafi: string;
        codeSituationFamille: number;
        codeSituationFamilleRegle: number;
        nombrePersonneCmpstMeng: number;
        nombrePersonneACharge: number;
        nombreActfMeng: number;
        dateEncoursEpargneLogement: Date;
        montantEncoursIsssPretPEL: number;
        montantEncoursIsssPretLEL: number;
        montantEncoursLivrAutretbl: number;
        montantEncoursPlnsAutretbl: number;
        totalRevnAnnulationNets: number;
        montantRevnMeng: number;
        stttOccpLogementActuariel: number;
        codeTitreCivilite: string;
        nomRaisonSocialeEmprunt: string;
        intituleLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        compIntituleLigne2: string;
        adresseLigne5: string;
        codeDestinataireAutreParObjet: number;
        codeSecteurRattachement: string;
        codeJeunMeng: number;
        presUnePersonneAttnRepnFicp: boolean;
        presUnePersonneFichFicp: boolean;
        esperVie: number;
        esperVieDecision: number;
        esperVieStress: number;
        totalEpargneContractuelle: number;
        totalEpargneLiquide: number;
        listeIdPersonne: Array<string>;
        listeIdCompteDeptGrpePersonne: Array<string>;
        listeIdComptePrfsPersonne: Array<string>;
        listeIdRessourceGrpe: Array<string>;
        listeIdChargeGrpe: Array<string>;
        listeIdCreditExisteGrpe: Array<string>;
        listeIdFamilleEpargnePersonne: Array<string>;
        listeIdRevnFiscalAssuranceEmprunt: Array<string>;
        listeIdDonneurPatrimoineImmobilier: Array<string>;
        montantRessourceAvantProjet: number;
        montantChargeEmpruntAvantProjet: number;
        montantAutreChargeAvantProjet: number;
        restantVivrAvantProjet: number;
        indiceRestantVivrAvantProjet: number;
        tauxEndtAvantProjet: number;
        capceprgAvantOper: number;
    }
    interface IProjetImmobilierLecture {
        defnSiEmpruntEstPrm: boolean;
        codeConditionDerogationPourPtz: number;
        valdelgbaPrmAccessoirePourCateRegleAttribut: boolean;
        eligibilitePtz: boolean;
        eligibilitePC: boolean;
        eligibilitePas: boolean;
        elgbaEpargneLogement: boolean;
        elgbaEcpt: boolean;
        codeBatimentBassConsommation: number;
        codeModeleOccpLogement: number;
        codePrixMarche: number;
        codeTypeMarche: number;
        typeProprietaire: number;
        pourcentageProprietaireApreOper: number;
        montantInscHypotheque: number;
        qualEmplaProjet: number;
        zoneRegleRobnBien: string;
        zonePlusLogement: string;
        codeZoneGegrRegle: number;
        typeImeu: number;
        codeLogementHlm: number;
        idProgrammeImmobilier: string;
        idAccrPourInstruction: string;
        indicemssNouvPartScpi: number;
        codeTypeMarchePourVent: number;
        nomSoceGestion: string;
        centreBourgadeRural: boolean;
        droitAcquisPEL: number;
        droitAcquisCEL: number;
        idTerrFinancier: string;
        idTravauxFinancier: string;
        idConstructionFinancier: string;
        idBatimentHabitationFinancier: string;
        idSoulFinancier: string;
        idObjetButLocf: string;
        idObjetPrmtImmobilier: string;
    }
    interface IScElement {
    }
    interface IScConstante {
        libelle: string;
        valeur: string;
    }
    interface IPersonneAutreLecture extends IPersonneLecture {
    }
    interface ICourrierEPSLecture {
        idDosInstruction: string;
        numeroPlanDossier: number;
        numeroCreditPlan: number;
        numeroRelatif: number;
        typeLettre: number;
        codeCivilite: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    interface IMarcheEPSLecture extends IElementLecture {
        idDosInstruction: string;
        numeroRelPlanDossier: number;
        numeroRelCreditPlan: number;
        codeTypeMarche: string;
        idMarche: string;
        idTiersMarcePrinc: string;
        libelleMoeMarchePrinc: string;
        libelleObjetMarche: string;
        montantMarche: number;
        dateSigneMarche: Date;
        dateFinMarche: Date;
        nomGroupMarche: string;
        libelleLieuExecTravaux: string;
        numeroTranMarche: string;
        numeroLotMarche: string;
    }
    interface IScProduitPhase {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        dateTraitement: Date;
        dateFinApplication: Date;
        dateDebutApplication: Date;
        uniteDureeDunPhase: number;
        modeExpressionDureePhase: number;
        dureePhaseProduit: number;
        dureePhaseProduit1: number;
        dureePhaseProduit2: number;
        dureeDunPhasePas: number;
        periodiciteCalculIntr: number;
        periodiciteCalculIntr1: number;
        periodiciteCalculIntr2: number;
        periodiciteCalculIntr3: number;
        periodiciteCalculIntr4: number;
        periodiciteMERAmortissement: number;
        periodiciteMERAmortissement1: number;
        periodiciteMERAmortissement2: number;
        periodiciteMERAmortissement3: number;
        periodiciteMERAmortissement4: number;
        codePeriodiciteDiffereMER: number;
        codeRecouvrementIntrTermeEchu: number;
        codeRecouvrementAmortissementTermeEchu: number;
        codeTypeConfirmationTauxIntr: number;
        modeCalculTaux: number;
        nombreJourAnnulationNumerateur: number;
        modeCalculAmortissement: number;
        capitalReferenceTableConstante: number;
        typeAssietteRemboursement: number;
        codeVersementAutrePendantPhase: number;
        codeReductionDureePrefinancement: number;
        codePrelevementDureePrefinancement: number;
        codeTypePrefinancement: number;
        codeRecouvrementPartielIntr: number;
        codeCalculIntrRepr: number;
        codeCapitalIntrDiffere: number;
        calculIntrJourReel: number;
        periodiciteMERIntr: number;
        periodiciteMERIntr1: number;
        periodiciteMERIntr2: number;
        periodiciteMERIntr3: number;
        modeCapitalIntr: number;
        modeRecouvrementIntr: number;
        periodiciteCompositionIntr: number;
        codeModeExpressionTauxMoyenPhase: number;
        valeurMinimumTauxMoyenPhase: number;
        valeurMaximumTauxMoyenPhase: number;
        valeurConsolideTauxMoyenPhase: number;
        codeTauxPalierCalcul: number;
        codeIndice: string;
        nombreMaximumPeriodeVartDuree: number;
        codeOptionSurPhaseProduit: number;
        codeObjetOption: number;
        typeOption: number;
        codeCourtPourPresenceDopt: number;
        delaiCourtPresenceDopt: number;
        periodiciteOption: number;
        nombreJourAnnulationDenomination: number;
        quotientConsolideCapitalAmortissement: number;
        quotientMinimumCapitalAmortissement: number;
        quotientMaximumCapitalAmortissement: number;
        unitePeriodeValeurIntituleIndice: number;
        nombrePeriodeValeurIntituleIndice: number;
        codeTypeTraitementDech: number;
        quotientMaximumCapitalIfin: number;
        quotientConsolideCapitalAmortissement1: number;
        quotientMinimumCapitalAmortissement1: number;
        quotientMaximumCapitalAmortissement1: number;
        idRegleButoireDuree: string;
    }
    interface IControleManuelLecture {
        typeActrOrigineContrôle: number;
        commentaireContrôle: string;
        histContrôle: Array<IControleManuelLecture>;
    }
    interface IPieceAgenceLecture {
    }
    interface IComplementEPSLecture extends IElementLecture {
        idDossierInstruction: string;
        numeroRelationPlanDossier: number;
        numeroRelationCreditPlan: number;
        natureGarantieEPS: string;
        referenceExterneDossierParent: string;
        dateDebutEngagement: Date;
        dateFinEngagement: Date;
        montantEngagementGlblOrigine: number;
        idEngagementGlbl: string;
        codeIndicateurRetrocessionEPS: number;
        codeIndiceRadiationAutomatiqueEPS: number;
        codeIndiceEPSAmortissable: number;
        codeEngagementGlobal: number;
        codeTypeObjetEPS: string;
        codeCanalDistributionEPS: string;
        codeSignatureElectroniqueEPS: string;
        dateDecisionEPS: Date;
        idEntiteInstructeur: string;
        codeAgentDecideur: string;
        idModeleActeEPS: string;
        idEDSSignataire: string;
        idEDSSignataire1: string;
        montantAssietteCommission: number;
        numeroSignatureElectroniqueEPS: string;
        listeIdMarcheEPS: Array<string>;
    }
    interface ICreditPhaseAmortissementLecture {
        codeRecouvrementAmortissementTermeEchu: number;
        quotientAmortissement: number;
        modeCalculAmortissement: number;
        codePrelFinPhase: number;
        tauxConstructionPhaseCredit: number;
        amortissementPossible: boolean;
        progTaux: boolean;
        typePretCombine: string;
        idCompPhasePourPretComb: string;
        listeIdPalierProgressifAmortissement: Array<string>;
    }
    interface ICreditPhaseDiffereAmortissementLecture {
        codeRecouvrementInterieurTermeEchu: number;
        codeRecouvrementPartielInterieur: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseDiffereTotalLecture {
        codeRecouvrementInterieurTermeEchu: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseMobilisationLecture {
        codeRecouvrementInterieurTermeEchu: number;
        codeRecouvrementPartielInterieur: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhasePrefinancementLecture {
        codeRecouvrementInterieurTermeEchu: number;
        codeReductionDureePref: number;
        personnalisable: boolean;
        reduction: boolean;
    }
    interface ICreditPhaseLecture {
        codeCalculInterieurRepr: number;
        modeCapitalRecouvrementInterieur: number;
        codeCapitalRecouvrementInterieur: number;
        codePeriodeAssuranceCalculInterieur: number;
        codePeriodeCalculMER: number;
        codeCalculInterieurJourRelease: number;
        codePeriodeCompositionInterieur: number;
        montantPrmeecheService: number;
        montantPrmeecheAccessoireComp: number;
        codeTypePhase: string;
        codeIndiceVersementFondAutrePendantPhase: number;
        dateCreationPhase: Date;
        codeConfirmationTauxInterieurCredit: number;
        nombrePeriodePhase: number;
        codePeriodeDurePhase: number;
        tauxPhase: ITauxInteretAnnuelLecture;
        tauxPhaseHorsBonificationMajre: ITauxInteretAnnuelLecture;
        montantPrmeecheHorsAccessoire: number;
        montantPrmeecheAccessoirePeriode: number;
        interetsDifferes: boolean;
        codeRecouvCapitInterets: number;
        modeRecouvInterets: number;
        modeCapitInterets: number;
        capitActive: boolean;
        recouvActive: boolean;
        choixCapitalisation: boolean;
        choixRecouvrement: boolean;
        capitalisation: boolean;
        recouvrement: boolean;
        idCreditIntr: string;
        idParametreRevisionParPhase: string;
        listeIdPalierTaux: Array<string>;
        phaseProduit: IScProduitPhase;
    }
    interface ISynthesePlanFinancementLecture {
        coutTotalTTC: number;
        coutTotalFraisGarantie: number;
        coutTotalFraisDossier: number;
        montantApportPersonnel: number;
        mtfaso_MontantConcoursInternes: number;
        mkface_MontantConcoursExternes: number;
        coutTotalFraisCourtage: number;
        montantMensualiteAvecAssurance: number;
        montantMensualiteNet: number;
        idPlanFinancier: string;
    }
    interface IGroupeJustificationTEGLecture {
        libelleFrais: string;
        messagesFrais: Array<string>;
    }
    interface IEcheancesJustifieesAssocieesLecture {
        titreCredit: string;
        messagesInterets: Array<string>;
        typesFrais: Array<IGroupeJustificationTEGLecture>;
    }
    interface ICreditInterneLecture {
        indiceEvolutionTauxConsolidePondere: number;
        idConventionPres: string;
        codeIndiceEnvoiAvisEcheance: number;
        codeIndiceOptimisationImps: number;
        codeIndiceTauxInterieurRevision: number;
        numeroCreditPlanFinancier: number;
        referenceExterneCredit: string;
        idProduitFinancier: string;
        libelleLongProduit: string;
        codeFamilleContratRegle: string;
        codeSousclasseBafi: string;
        codeIndiceCreditRelease: number;
        idCreditGestion: string;
        codeIndiceTraitementInterieurIntr: number;
        codeTypeActuarielInterieurIntr: number;
        codeDeviseVersement: string;
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        codeTypeRattachementJustificatifDeclaration: number;
        modeRegleVersement: string;
        numeroEchelleVersement: number;
        dateMER0: Date;
        dateMER1: Date;
        dateCreationCredit: Date;
        dateLimiteVersementFond: Date;
        jourDateEcheance: number;
        dateLimitePremierVersementFond: Date;
        codeIndiceEligibiliteAPL: number;
        codeIndicelgbAuprInstemss: number;
        codeIndiceGestionCreditAvecCompteCrrt: number;
        dateDernierCalculCredit: Date;
        codeIndiceCalculAFaire: number;
        montantPrimeEpargneLogement: number;
        tauxNegocieSurcRemboursementAnticipe: number;
        tauxPondereCntExtr: number;
        tauxPondereConsolide: number;
        margePondereConsolide: number;
        codeCalculEcheanceVersement: number;
        codeettEcheanceVersement: number;
        codeIndiceNatureEcheanceVersement: number;
        intituleLigneUn: string;
        domiciliationTres: string;
        numeroDomiciliationPourMiseADispFond: string;
        montantMinimumVersement: number;
        codeIndiceNaturePretComb: number;
        codeIndicePresUneBonificationUneMajreTaux: number;
        codeConfirmationReductionDurePTZ: number;
        codeConfirmationReductionMontantPTZ: number;
        montantReglePTZ: number;
        montantMinimumPTZ: number;
        montantCreditEuro: number;
        montantMaximumPretPVH: number;
        codeDevise: string;
        codeDeviseSaccef: string;
        nombrePeriodeCredit: number;
        codePeriodeCredit: number;
        montantCapitalCredit: number;
        montantPrmeEcheanceHorsAccessoireCredit: number;
        montantPrmeEcheanceAssurance: number;
        montantTotalCreditHorsAccessoireHorsPeriodePref: number;
        coutTotalAccessoirePosteSurCredit: number;
        coutTotalFrsDossierAssuranceCredit: number;
        coutTotalFrsGarantieAssuranceCredit: number;
        coutTotalFrsCrtgeAssuranceCredit: number;
        coutTotalServiceSurObjetPeriodeAssuranceCredit: number;
        coutTotalAccessoireCompPeriodeAssuranceCredit: number;
        coutTotalServiceSurObjetAperAssuranceCredit: number;
        coutTotalAccessoireCompAperAssuranceCredit: number;
        montantPrmeEcheanceServiceSurObjet: number;
        montantPrmeEcheanceAccessoireComp: number;
        montantTotalAssurancePeriode: number;
        codeIndiceModeCalculTaux: number;
        tauxMoyenActuHorsBonification: number;
        tauxMoyenPropHorsBonification: number;
        tauxFutr: ITauxIndiceLecture;
        tauxInitial: ITauxInteretAnnuelLecture;
        tauxMoyenActu: number;
        tauxMoyenProp: number;
        tegActu: number;
        tegProp: number;
        tAEA: number;
        tauxMontage: number;
        bornesFraisDossier: Array<number>;
        tegModeRestitution: number;
        montantPTZVerrouille: boolean;
        dureePTZVerrouillee: boolean;
        echeancesJustifieesAssociees: IEcheancesJustifieesAssocieesLecture;
        idPlanFinancier: string;
        idCompteCrrt: string;
        idModele: string;
        idModeleVersementFraction: string;
        idRemsClient: string;
        listeIdDroitUtilisation: Array<string>;
        listeIdPayr: Array<string>;
        listeIdPhase: Array<string>;
        listeIdSuivantPlafond: Array<string>;
        listeIdParametreRevision: Array<string>;
        listeIdVartDure: Array<string>;
        listeIdAccessoire: Array<string>;
        listeIdAssurance: Array<string>;
        listeIdGarantie: Array<string>;
        listeIdAccessoireComp: Array<string>;
        listeIdAccessoireLiesProduit: Array<string>;
        listeIdCreditsEPS: Array<string>;
        idComplementEPS: string;
    }
    interface IResultatControle {
        libelle: string;
        messages: Array<string>;
    }
    interface IPlanFinancementLecture {
        libelleRetardAdresse: string;
        montantTotalEmpruntPlan: number;
        montantRestantFinancier: number;
        codeEtatPlanFinancier: number;
        codeContratPlan: number;
        dateCreationPlan: Date;
        dateDernierAnlsAdresse: Date;
        dateEditPropCredit: Date;
        notfEngagementBale2: string;
        codeAnlsMeneTerme: number;
        codeDecisionSpec: number;
        corcTarfCalculParAdresse: number;
        cotisationAnlsRisque: number;
        coefficientTarfCalculParAdresse: number;
        codeOriginePretPrincipal: number;
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        numeroDossierSmac: string;
        typeCritereOptim: number;
        valeurCritereOptim: number;
        accordDePrincipe: number;
        listeResultatControle: Array<IResultatControle>;
        estEligibleAPL: boolean;
        montantAPLModifiable: boolean;
        idProjet: string;
        listeIdCreditIntr: Array<string>;
        listeIdCreditExtr: Array<string>;
        listeIdAssurance: Array<string>;
        listeIdGarantie: Array<string>;
        listeIdAccessoireComp: Array<string>;
        listeIdAccessoireLiesProduit: Array<string>;
        listeIdServiceSurObjet: Array<string>;
        listeIdPalierContrat: Array<string>;
        idAPL: string;
        idSynthesePlanFinancement: string;
    }
}

declare module creditsEps.Services.Application.Creation.EpsEnAttente {
    interface IEpsEnAttenteService {
        rechercherEpsEnAttente(): ng.IPromise<Modeles.RechercheEps.IRecherche>;
        ouvrirModifiEpsDepuisRecherche(eps: Modeles.RechercheEps.ISyntheseEps): ng.IPromise<boolean>;
        ouvrirModifiEpsDepuisSelection(identifiantDossier: string): ng.IPromise<boolean>;
    }
}

declare module creditsEps.Services.Application.Creation.SelectionAutorisation {
    interface ISelectionAutorisationService {
        getPayeurPrincipal(listePayeurGac: Modeles.Gac.IPayeurGAC[]): ng.IPromise<Modeles.Tiers.ITiersNoyau>;
        getCaracteristiqueModeleActe(identifiantModeleActe: string): ng.IPromise<Modeles.EngagementParametre.ICaracteristiqueModeleActe>;
    }
}

declare module creditsEps.Services.Application.Creation.Accessoire {
    interface IAccessoireCreation {
        montant: number;
        taux: number;
        montantAssiette: number;
        terme: string;
        datePerception: Date;
        typeAccessoire: Modeles.EngagementParametre.IModaliteCalculAccessoireProduit;
        typeCalcul: string;
        periodicite: string;
        typePeriodicite: string;
        assiette: string;
        modeCalcul: string;
        dateDebutPeriode: Date;
        dateFinPeriode: Date;
    }
    interface ICreationAccessoireService {
        getListeAccessoireFacultatifs(): Array<Modeles.EngagementParametre.IModaliteCalculAccessoireProduit>;
        initialiserChampsPeriodique(accessoireAInit: IAccessoireCreation, cotisation?: Modeles.Neo.DossierCreditInstruction.ICotisationLecture): IAccessoireCreation;
        initialiserChampsAperiodique(accessoireAInit: IAccessoireCreation, cotisation?: Modeles.Neo.DossierCreditInstruction.ICotisationLecture): IAccessoireCreation;
        checkAccessoireCreation(accessoire: IAccessoireCreation): Array<Modeles.Commun.IErreurForm>;
        saveAccessoire(accessoire: IAccessoireCreation, accessoireProduitCourant?: Modeles.Creation.IAccessoireSyntheseCreation): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IAccessoireLieProduitLecture>;
        /**
         * Suprression de l'accessoire
         * @param accessoireProduitCourant: accessoire à supprimer
         */
        supprimerAccessoire(accessoireProduitCourant: Modeles.Creation.IAccessoireSyntheseCreation): ng.IPromise<void>;
        accessoireCreationToLigneTableauAccessoire(accessoire: IAccessoireCreation, accessoireLieProduit: Modeles.Neo.DossierCreditInstruction.IAccessoireLieProduitLecture, ligneTableau?: Modeles.Creation.IAccessoireSyntheseCreation): Modeles.Creation.IAccessoireSyntheseCreation;
    }
}

declare module creditsEps.Services.Application.Creation.Beneficiaire {
    interface ICreationBeneficiaireService {
        enregistrerBeneficiaire(beneficiaire: MyWay.Model.Client): ng.IPromise<Array<Modeles.Neo.DossierCreditInstruction.IElementLecture>>;
        mettreAJourBeneficiaire(beneficiaire: MyWay.Model.Client): ng.IPromise<void>;
        tiersNoyauToPersonneAutreLecture(beneficiaireDedie: Modeles.Tiers.ITiersNoyau): Modeles.Neo.DossierCreditInstruction.IPersonneAutreLecture;
    }
}

declare module creditsEps.Services.Application.Creation.Garantie {
    interface IGarantieCreation {
        nature: Modeles.EngagementParametre.INatureGarantie;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        montantCouverture: number;
        quotite: number;
    }
    interface ICreationGarantieService {
        initialiserChamps(garantieChoisie: Modeles.Creation.IGarantieSyntheseCreation): IGarantieCreation;
        checkGarantieCreation(garantie: IGarantieCreation): Array<Modeles.Commun.IErreurForm>;
        saveGarantie(garantie: IGarantieCreation, infosLigne?: Modeles.Creation.IGarantieSyntheseCreation): ng.IPromise<Modeles.Creation.IGarantieSyntheseCreation>;
        supprimergarantie(identifiantCouverture: string): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Application.Creation.MarchePrincipal {
    interface ICreationMarchePrincipalService {
        validationSaisie(marchePrincipal: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture, tiers: Modeles.Neo.DossierCreditInstruction.IPersonneAutreLecture, nomGroupementObligatoire: boolean): Array<Modeles.Commun.IErreurForm>;
        enregistrerMarchePrincipal(marchePrincipal: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture, tiers: Modeles.Neo.DossierCreditInstruction.IPersonneAutreLecture): ng.IPromise<Array<Modeles.Neo.DossierCreditInstruction.IElementLecture>>;
        mettreAJourMarchePrincipal(marchePrincipal: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture, tiers: Modeles.Neo.DossierCreditInstruction.IPersonneAutreLecture): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Application.Creation.Marche {
    interface ICreationMarcheService {
        validationSaisie(marche: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture, datePrevisionnelle: boolean): Array<Modeles.Commun.IErreurForm>;
        enregistrerMarche(marche: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture): ng.IPromise<Array<Modeles.Neo.DossierCreditInstruction.IElementLecture>>;
        mettreAJourMarche(marche: Modeles.Neo.DossierCreditInstruction.IMarcheEPSLecture): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Application.Creation.Payeur {
    interface IModalePayeurModele {
        modeReglement: Modeles.EngagementParametre.IModeReglement;
        codeModeReglement: string;
        compte?: Modeles.Neo.DossierCreditInstruction.ICompteDepotLecture;
        titulaire?: string;
        iban?: string;
        bic?: string;
        etablissement?: string;
        dateMandat?: Date;
        rum?: string;
        tresorerie?: string;
        domiciliation?: string;
    }
    interface ICreationPayeurService {
        getModeReglement(): ng.IPromise<Modeles.EngagementParametre.IRechercheModeReglement>;
        /**
         * Retourne la liste des comptes
         */
        getListeCompte(): Array<any>;
        /**
         * Validation de la saisie
         * @return : liste des erreurs
         */
        validerPayeur(payeur: IModalePayeurModele): Array<Modeles.Commun.IErreurForm>;
        /**
         * Création du payeur
         */
        creerPayeur(payeur: IModalePayeurModele, isPayeurPrincipal: boolean): ng.IPromise<void>;
        /**
         * Mise à jour du payeur
         */
        miseAJourPayeur(payeur: IModalePayeurModele, isPayeurPrincipal: boolean): ng.IPromise<void>;
        supprimerPayeurSecours(): ng.IPromise<void>;
        /**
         * Calcul du BIC en fonction de l'IBAN
         */
        determinerBic(iban: string): ng.IPromise<string>;
        rechercherIdwsPersonne(identifiantPersonne: string): string;
    }
}

declare module creditsEps.Services.Application.Creation.Signataire {
    interface IStructureSignataireModele {
        typePopup: string;
        structures?: Array<Modeles.Structure.IDonneesCommunesEDS>;
    }
    interface ISignataireService {
        selectTypeEcran(typeEdsRattachement: string): string;
        rechercherStructure(): ng.IPromise<IStructureSignataireModele>;
        passerEpsEnGestion(edsSignataire1?: Modeles.Structure.IDonneesCommunesEDS, edsSignataire2?: Modeles.Structure.IDonneesCommunesEDS): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Accessoire {
    interface ICaracteristiqueAccessoireQuery {
        identifiantEngagement: string;
        numeroRelatif: string;
        numeroRelatifPhase: string;
    }
    interface ICaracteristiqueAccessoireService {
        getCaracteristiqueAccessoire(query: ICaracteristiqueAccessoireQuery): ng.IPromise<Modeles.Accessoire.ICaracteristique>;
    }
}

declare module creditsEps.Services.Rest.Accessoire {
    interface IRechercheAccessoireQuery {
        identifiantEngagement: string;
    }
    interface IRechercheAccessoireService {
        rechercheAccessoire(query: IRechercheAccessoireQuery): ng.IPromise<Modeles.Accessoire.IRecherche>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IAjouterAccessoireLieProduitService {
        postAjouterAccessoireLieProduit(projet: Modeles.Neo.DossierCreditInstruction.IAccessoireLieProduitRequest): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IAccessoireLieProduitLecture>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IAjouterGarantieService {
        postAjouterGarantie(projet: Modeles.Neo.DossierCreditInstruction.IAjouterGarantieRequest): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IGarantieSchema>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IAjouterMandatPayeurService {
        postAjouterMandatPayeur(projet: Modeles.Neo.DossierCreditInstruction.IAjouterMandatPayeurRequest): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IMandatLecture>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IAjouterPayeurService {
        postAjouterPayeur(projet: Modeles.Neo.DossierCreditInstruction.IAjouterPayeurRequest): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IPayeurLecture>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IAjouterPersonneQuery {
        identifiantClasse: string;
    }
    interface IAjouterPersonneService {
        postAjouterPersonne(body: Modeles.Neo.DossierCreditInstruction.IAjouterPersonneRequest, param: IAjouterPersonneQuery): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IPersonneLecture>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IControlerDossierQuery {
        identifiantDossier: string;
    }
    interface IControlerDossierService {
        getControlerDossier(query: IControlerDossierQuery): ng.IPromise<Array<Modeles.Neo.DossierCreditInstruction.IAnomalieLecture>>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface ICreerElementsQuery {
        identifiantClasse: string;
    }
    interface ICreerElementsService {
        postCreerElements(request: Modeles.Neo.DossierCreditInstruction.ICreerElementsRequest, query: ICreerElementsQuery): ng.IPromise<Array<Modeles.Neo.DossierCreditInstruction.IElementLecture>>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface ICreerProjetService {
        postCreerProjet(projet: Modeles.Neo.DossierCreditInstruction.ICreerProjetRequest): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IDossierSchema>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IDefinirBlocNotesService {
        postDefinirBlocNotes(request: Modeles.Neo.DossierCreditInstruction.IDefinirBlocNotesRequest): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IBlocNotesLecture>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IEditerDocumentEPSService {
        postEditerDocumentEPS(request: Modeles.Neo.DossierCreditInstruction.IEditerDocumentEPSRequest): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IEditerDocumentEPSResponse>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IEditerDocumentsService {
        postEditerDocuments(request: Modeles.Neo.DossierCreditInstruction.IEditerDocumentsRequest): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IDocument[]>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IFermerDossierService {
        putFermerDossier(query: Modeles.Neo.DossierCreditInstruction.IFermerDossierRequest): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface ILancerActionQuery {
        identifiantClasse: string;
    }
    interface ILancerActionService {
        postLancerAction(query: ILancerActionQuery, body: Modeles.Neo.DossierCreditInstruction.ILancerActionRequest): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface ILancerActionsQuery {
        identifiantClasse: string;
    }
    interface ILancerActionsService {
        postLancerActions(query: ILancerActionsQuery, body: Modeles.Neo.DossierCreditInstruction.ILancerActionsRequest): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface ILireElementsService {
        postLireElements(elements: Modeles.Neo.DossierCreditInstruction.ILireElementRequest): ng.IPromise<Array<Modeles.Neo.DossierCreditInstruction.IElementLecture>>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IMiseAJourElementQuery {
        identifiantClasse: string;
    }
    interface IMiseAJourElementService {
        putMiseAJourElement(element: Modeles.Neo.DossierCreditInstruction.IMiseAJourElementRequest, query: IMiseAJourElementQuery): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IMiseAJourElementsQuery {
        /**
         * Nom des objets à mettre à jour séparés par une virgule
         * Ex : ComplementEPSMaj, CreditsInternesMaj
         */
        identifiantClasse: string;
    }
    interface IMiseAJourElementsService {
        putMiseAJourElements(elements: Modeles.Neo.DossierCreditInstruction.IMiseAJourElementsRequest, query: IMiseAJourElementsQuery): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IOuvrirDossierQuery {
        versionWsdl: number;
        dateTraitement: string;
        identifiantDossier: string;
        codeApplication: number;
        actionSurDossier: number;
    }
    interface IOuvrirDossierService {
        postOuvrirDossier(query: IOuvrirDossierQuery): ng.IPromise<Modeles.Neo.DossierCreditInstruction.IDossierSchema>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IPasserDossierSsSuiteQuery {
        codeEvenement?: string;
        dateTraitement: string;
        identifiantDossier: string;
    }
    interface IPasserDossierSsSuiteService {
        putPasserDossierSsSuite(query: IPasserDossierSsSuiteQuery): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface ISauverDossierRequest {
        identifiantDossier: string;
    }
    interface ISauverDossierService {
        putSauverDossier(query: ISauverDossierRequest): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface ISignerOffreQuery {
        identifiantDossier: string;
        signe: boolean;
        dateAccordPreteur: string;
        numeroOffre: string;
        tsIdPersonne: Array<string>;
    }
    interface ISignerOffreService {
        postSignerOffre(query: ISignerOffreQuery): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface ISupprimerElementServiceQuery {
        identifiantDossier: string;
        identifiantElement: string;
    }
    interface ISupprimerElementService {
        deleteSupprimerElement(projet: ISupprimerElementServiceQuery): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.Neo.DossierCreditInstruction {
    interface IValiderEPSQuery {
        versionWsdl: number;
        dateTraitement: string;
        identifiantDossier: string;
        codeApplication: number;
        actionSurDossier: number;
    }
    interface IValiderEPSService {
        putValiderEPS(query: IValiderEPSQuery): ng.IPromise<void>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface ICaracteristiqueModeleActeQuery {
        identifiantModeleActe: string;
    }
    interface ICaracteristiqueModeleActeService {
        getCaracteristiqueModeleActe(query: ICaracteristiqueModeleActeQuery): ng.IPromise<Modeles.EngagementParametre.ICaracteristiqueModeleActe>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IListeAccessoireGarantieQuery {
        natureGarantie: string;
        filtreInstruction?: string;
        filtreAvenant?: string;
    }
    interface IListeAccessoireGarantieService {
        getListeAccessoireGarantie(query: IListeAccessoireGarantieQuery): ng.IPromise<Modeles.EngagementParametre.IListeAccessoiresGarantie>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IListeAccessoireProduitQuery {
        codeFamilleProduit: string;
        numeroRelatifProduit: string;
        typeCalcul?: string;
        filtreInstruction?: string;
        filtreAvenant?: string;
    }
    interface IListeAccessoireProduitService {
        getListeAccessoireProduit(query: IListeAccessoireProduitQuery): ng.IPromise<Modeles.EngagementParametre.IListeAccessoiresProduit>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IRechercheFamilleEPSQuery {
        codeEtablissement: string;
        dateTraitement: string;
    }
    interface IRechercheFamilleEPSService {
        rechercheFamilleEPS(query: IRechercheFamilleEPSQuery): ng.IPromise<Modeles.EngagementParametre.IRechercheFamilleEPS>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IRechercheModeReglementQuery {
        codeEtablissement: string;
        dateTraitement: string;
        codeModeReglement?: string;
        codeModeTraitement?: string;
        codeUtilisation?: string;
    }
    interface IRechercheModeReglementService {
        rechercheModeReglement(query: IRechercheModeReglementQuery): ng.IPromise<Modeles.EngagementParametre.IRechercheModeReglement>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IRechercheModeleActeQuery {
        autoriseAgence?: boolean;
        autoriseInternet?: boolean;
        identifiantFamille?: string;
        codeDateButoirDateFin?: string;
        codeEtablissement?: string;
        dateTraitement?: string;
    }
    interface IRechercheModeleActeService {
        rechercheModeleActe(query: IRechercheModeleActeQuery): ng.IPromise<Modeles.EngagementParametre.IRechercheModeleActeEPS>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IRechercheNatureAccessoireQuery {
    }
    interface IRechercheNatureAccessoireService {
        getRechercheNatureAccessoire(query: IRechercheNatureAccessoireQuery): ng.IPromise<any>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IRechercheNatureGarantieService {
        getRechercheNatureGarantie(): ng.IPromise<Modeles.EngagementParametre.IRechercheNatureGarantieEPS>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IRechercheObjetEPSQuery {
        codeFamilleProduit: string;
        numeroRelatif: string;
    }
    interface IRechercheObjetEPSService {
        rechercheObjetEPS(query: IRechercheObjetEPSQuery): ng.IPromise<Modeles.EngagementParametre.IRechercheObjetEPS>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IRecherchePartenariatEpsQuery {
        codeEtablissement: string;
        dateTraitement: string;
    }
    interface IRecherchePartenariatEpsService {
        recherchePartenariatEps(query: IRecherchePartenariatEpsQuery): ng.IPromise<Modeles.EngagementParametre.IRecherchePartenariatEPS>;
    }
}

declare module creditsEps.Services.Rest.EngagementParametre {
    interface IRechercheProduitEpsQuery {
        identifiantFamilleEps: string;
    }
    interface IRechercheProduitEpsService {
        rechercheProduitEps(query: IRechercheProduitEpsQuery): ng.IPromise<Modeles.EngagementParametre.IRechercheProduitEPS>;
    }
}

declare module creditsEps.Services.Rest.Gac {
    interface ICaracteristiqueGacQuery {
        codeEtablissement: number;
        identifiantClientBancaire: string;
    }
    interface ICaracteristiqueGacService {
        getCaracteristiqueGac(query: ICaracteristiqueGacQuery): ng.IPromise<Modeles.Gac.ICaracteristiqueGAC>;
        postCaracteristiqueGac(query: Modeles.Gac.ICaracteristiqueGAC): ng.IPromise<Modeles.Gac.ICaracteristiqueGAC>;
        putCaracteristiqueGac(query: Modeles.Gac.ICaracteristiqueGAC): ng.IPromise<Modeles.Gac.ICaracteristiqueGAC>;
    }
}

declare module creditsEps.Services.Rest.EntiteTitulaire {
    interface IInformationEntiteTitulaireQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: string;
    }
    interface IInformationEntiteTitulaireService {
        getInformationEntiteTitulaire(query: IInformationEntiteTitulaireQuery): ng.IPromise<Modeles.EntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

declare module creditsEps.Services.Rest.FamilleProduit {
    interface IFamilleEpsQuery {
        identifiantClient: string;
    }
    interface IFamilleEpsService {
        getFamilleEps(query: IFamilleEpsQuery): ng.IPromise<Modeles.AttributEps.IFamilleEpsET>;
    }
}

declare module creditsEps.Services.Rest.Beneficiaire {
    interface ICaracteristiqueBeneficiaireEpsQuery {
        identifiantEngagement: string;
    }
    interface ICaracteristiqueBeneficiaireEpsService {
        getCaracteristiqueBeneficiaireEps(query: ICaracteristiqueBeneficiaireEpsQuery): ng.IPromise<creditsEps.Modeles.Beneficiaire.ICaracteristiqueBeneficiaire>;
    }
}

declare module creditsEps.Services.Rest.Commentaire {
    interface ICaracteristiqueCommentaireEpsQuery {
        identifiantEngagement: string;
    }
    interface ICaracteristiqueCommentaireEpsService {
        getCaracteristiqueCommentaireEps(query: ICaracteristiqueCommentaireEpsQuery): ng.IPromise<Modeles.Commentaire.ICaracteristiqueCommentaireEps>;
        postCaracteristiqueCommentaireEps(commentaire: Modeles.Commentaire.ICaracteristiqueCommentaireEps): ng.IPromise<Modeles.Commentaire.ICaracteristiqueCommentaireEps>;
    }
}

declare module creditsEps.Services.Rest.Encours {
    interface ICaracteristiqueEncoursQuery {
        identifiantClient: string;
    }
    interface ICaracteristiqueEncoursService {
        getCaracteristiqueEncours(query: ICaracteristiqueEncoursQuery): ng.IPromise<Modeles.Encours.ICaracteristiqueEncours>;
    }
}

declare module creditsEps.Services.Rest.Eps {
    interface ICaracteristiqueEpsQuery {
        refMigration?: string;
        refInterneEps?: string;
        refExterneEps?: string;
    }
    interface ICaracteristiqueEpsService {
        getCaracteristiqueEps(query: ICaracteristiqueEpsQuery): ng.IPromise<Modeles.Eps.ICaracteristiqueEps>;
    }
}

declare module creditsEps.Services.Rest.Marche {
    interface ICaracteristiqueMarcheEpsQuery {
        identifiantEngagement: string;
        /** ‘ ’ pour marché ‘PR’ pour marché principal */
        typeMarche: string;
    }
    interface ICaracteristiqueMarcheEpsService {
        getCaracteristiqueMarcheEps(query: ICaracteristiqueMarcheEpsQuery): ng.IPromise<Modeles.Marche.ICaracteristiqueMarcheEps>;
    }
}

declare module creditsEps.Services.Rest.RechercheEps {
    interface IRechercheQuery {
        codeSupportDonneesEps: string;
        identifiantClient?: string;
        typeTri?: string;
        codeFamille?: string;
        codeFamilleProduit?: string;
        numeroRelatifProduit?: string;
        indicateurAvecGarantie?: boolean;
        indicateurSansGarantie?: boolean;
        indicateurAvecModele?: boolean;
        indicateurSansModele?: boolean;
        indicateurStatutValide?: boolean;
        indicateurStatutRadie?: boolean;
        indicateurStatutTermine?: boolean;
        indicateurStatutEnAttente?: boolean;
        indicateurOrigineBO?: boolean;
        indicateurOrigineAgence?: boolean;
        indicateurOrigineInternet?: boolean;
        idEds?: string;
        codeEtablissement?: string;
    }
    interface IRechercheService {
        recherche(query: IRechercheQuery): ng.IPromise<Modeles.RechercheEps.IRecherche>;
    }
}

declare module creditsEps.Services.Rest.Garantie {
    interface ICaracteristiqueGarantieQuery {
        identifiantEngagement: string;
        identifiantGarantie: string;
        numeroRelatif: string;
    }
    interface ICaracteristiqueGarantieService {
        getCaracteristiqueGarantie(query: ICaracteristiqueGarantieQuery): ng.IPromise<Modeles.Garantie.ICaracteristique>;
    }
}

declare module creditsEps.Services.Rest.Garantie {
    interface IRechercheGarantieQuery {
        identifiantEngagement: string;
    }
    interface IRechercheGarantieService {
        rechercheGarantie(query: IRechercheGarantieQuery): ng.IPromise<Modeles.Garantie.IRecherche>;
    }
}

declare module creditsEps.Services.Rest.OperationFinanciereService {
    interface IDeterminationBicQuery {
        numeroIbanCompte: string;
    }
    interface IDeterminationBicService {
        getDeterminationBic(query: IDeterminationBicQuery): ng.IPromise<Modeles.OperationFinanciereService.IDeterminationBic>;
    }
}

declare module creditsEps.Services.Rest.Payeur {
    interface ICaracteristiquePayeurQuery {
        identifiantEngagement: string;
    }
    interface ICaracteristiquePayeurService {
        getCaracteristiquePayeur(query: ICaracteristiquePayeurQuery): ng.IPromise<Modeles.Payeur.ICaracteristique>;
    }
}

declare module creditsEps.Services.Rest.RisqueClient {
    interface INotationTiersQuery {
        identifiantTiers: number;
        codeEtablissement: string;
    }
    interface INotationTiersService {
        getNotationTiers(query: INotationTiersQuery): ng.IPromise<Modeles.RisqueClient.INotationTiers>;
    }
}

declare module creditsEps.Services.Rest.Structure {
    interface IRechercheQuery {
        typeRechercheEDS: number;
        typeEDS: string;
        codeEtablissement: string;
        referenceExterneEDS?: number;
        libelleEDS?: string;
        identifiantEDS?: number;
    }
    interface IRechercheService {
        getRecherche(query: IRechercheQuery): ng.IPromise<Array<Modeles.Structure.IDonneesCommunesEDS>>;
    }
}

declare module creditsEps.Services.Rest.Tiers {
    interface IRechercheTiersQuery {
        codeTypeRecherche: number;
        nom: string;
        codeEtablissement: string;
    }
    interface IRechercheTiersService {
        rechercheTiers(query: IRechercheTiersQuery): ng.IPromise<Modeles.Tiers.ITiers[]>;
    }
}

declare module creditsEps.Services.Rest.Tiers {
    interface ITiersNoyauQuery {
        codeEtablissement: string;
        identifiantPersonne?: number;
        numeroChrono?: number;
        numeroLieuActivite?: number;
    }
    interface ITiersNoyauService {
        getTiersNoyau(query: ITiersNoyauQuery): ng.IPromise<Modeles.Tiers.ITiersNoyau>;
    }
}

declare module creditsEps.Enumerations.Application.Signataire {
    class TypePopupSignataireEnum {
        static UN_SIGNATAIRE: string;
        static DEUX_SIGNATAIRES: string;
        static AUCUN_SIGNATAIRE: string;
    }
}

declare module creditsEps.Enumerations.Creation {
    class IDWSEnum {
        static DOSSIER: string;
        static ACCESSOIRE: string;
        static COUVERTURE: string;
        static COTISATION: string;
        static COTISATION_PHASE: string;
        static GARANTIE_REELLE: string;
        static GARANTIE_PERSO: string;
        static MARCHE: string;
        static COMPLEMENT_EPS: string;
        static COMMENTAIRE: string;
        static COMPTE_PAYEUR: string;
        static PERSONNE: string;
        static PAYEUR_PRINCIPAL: string;
        static PAYEUR_PRINCIPAL_2: string;
        static EMPRUNTEUR: string;
        static COMPTE: string;
        static COMPTE_2: string;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IAccessoireLieProduitRequest {
        /**
         * undefined
         */
        identifiantDossier: string;
        /**
         * undefined
         */
        identifiantCredit: string;
        /**
         * undefined
         */
        codeTypeAccessoire: string;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IAjouterGarantieRequest {
        identifiantDossier: string;
        listeIdentifiantCredCouv: Array<string>;
        natureGarantie: string;
        identifiantGarant: string;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IAjouterMandatPayeurRequest {
        identifiantDossier: string;
        identifiantPayeur: string;
        bicIban: string;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IAjouterPayeurRequest {
        identifiantDossier: string;
        identifiantCredit: string;
        identifiantPersonne: string;
        payeurMiseAJour: IPayeurMaj;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IAjouterPersonneRequest {
        identifiantDossier: string;
        personneMiseAJour: Modeles.Neo.DossierCreditInstruction.IPersonneMaj;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IDefinirBlocNotesRequest {
        identifiantDossier: string;
        typeBlocNote: string;
        valeurBlocNote: string;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IParamEditique {
        id: string;
        data: string;
    }
    interface IDocument {
        fluxImpression: string;
        nom: string;
    }
    interface IEditerDocumentsRequest {
        identifiantDossier: string;
        idws: string;
        identifiantDocument: string;
        lstParametres: Array<IParamEditique>;
        niveauTraitement: number;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IFermerDossierRequest {
        identifiantDossier: string;
        sauvegarde: boolean;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface ILancerActionRequest {
        identifiantDossier: string;
        action: IActionQuestion;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface ILancerActionsRequest {
        identifiantDossier: string;
        actions: Array<IActionQuestion>;
    }
    interface IActionQuestion {
        forceSauvegarde: boolean;
        rangExecution: number;
    }
    interface IValiderAccordPreteurQn extends IActionQuestion {
        dateAccordPreteur: string;
        avis: string;
    }
    interface IRemettreOffreQn extends IActionQuestion {
        dateRemiseEmprunteur: string;
        alerteBlqn: boolean;
    }
    interface ISignerOffreQn extends IActionQuestion {
        dateAccordPreteur: string;
        signe: boolean;
        numeroOffre: string;
        idPersonne: Array<string>;
    }
}

declare module creditsEps.Modeles.Neo.DossierCreditInstruction {
    interface IMiseAJourElementsRequest {
        identifiantDossier: string;
        listeElementsMiseAJour: Array<IElementMaj>;
    }
    interface IMiseAJourElementRequest {
        identifiantDossier: string;
        elementMiseAJour: IElementMaj;
    }
    interface IElementMaj {
        idws: string;
    }
    interface IReamenagementMaj {
        typeReamenagement: number;
        usagePretTres: number;
        ancnEcheance: number;
        capitalRestantDu: number;
        valeurAchtObjetFinancier: number;
        dureResdPretRefn: number;
        dateAcqsObjetRefn: Date;
        coutAcqsObjetRefn: number;
    }
    interface ITrancheMontantMaj {
        tauxTrancheMontant: number;
    }
    interface ICotisationTrancheAgeMaj {
    }
    interface ICotisationPhaseMaj {
    }
    interface ICotisationPeriodeMaj {
        nombrePerdetlm: number;
        periodeEtlm: number;
    }
    interface ICotisationDerogationMaj {
    }
    interface ICotisationMaj extends IElementMaj {
        tauxCotisation: number;
        montantCotisation: number;
        codeIndiceBlcgSaisieMontant: number;
        codePeriodeCalcul: number;
        dateApplicationCotisation: Date;
        dateDebutApplicationCotisation: Date;
        montantAssiette: number;
        nombrePeriodeApplicationCotisation: number;
        periodeApplicationCotisation: number;
        montantFrsGarantie: number;
        partFinancier: number;
    }
    interface ICouvertureCreditMaj extends IElementMaj {
        montantCouverture: number;
        quotientCouverture: number;
        montantEcheanceCouverture: number;
        dateFinAffectationCouverture: Date;
    }
    interface IAplMaj {
        montantAPL: number;
        periodiciteAPL: number;
    }
    interface ICompteProfessionnelMaj {
        nombreJourDepsAutrePourCompteProf: number;
        codeCtx: number;
    }
    interface ICompteDepotMaj {
        codeProduitCE: number;
        numeroEntiteTitulaire: number;
        libelleEntiteTitulaire: string;
        codeCompositionEntiteTitulaire: number;
        codeEtatProduit: number;
        soldMoyenLongTermeCompteDepoCE: number;
        soldMinimumCompteDepoCE: number;
        soldRelCompteDepoCE: number;
        codeTypeCartographie: number;
        dateDelvCartographie: Date;
        codeTypeDecvCompteDepo: number;
        montantDecvAutreSurCompteDepo: number;
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        nombreJourDepsAutreDecv: number;
        montantPrelExteReleaseSurCompteDepo: number;
        codeDepsJustificatif: number;
        codePresDecvIrreSurCompteDepo: number;
        codeExisteCartographieBancaireHorsCE: number;
        codeComnRelvCompteHorsCE: number;
        codeExisteCheq: number;
        soldMoyenMensCreationCompteDepoCE: number;
        mvtCreditMensSurCompteDepo: number;
        codeTypeFctCompteDepoCEHorsCE: number;
        dateOuerCompteDepoHorsCE: Date;
    }
    interface ICompteMaj {
        dateOuverture: Date;
        codeDeviseCompte: string;
    }
    interface IPhaseCreditExistantMaj {
        dateDebutPhase: Date;
        dateFinPhase: Date;
        montantEcheancePhase: number;
        codeTypePhase: string;
        periodeAmortissement: number;
    }
    interface ICreditExistantMaj {
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: Date;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
    }
    interface IChargeMaj {
        typeDech: string;
        montantCharge: number;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
    }
    interface IInterditBancaireMaj {
        codeRepnBDF: number;
        codeRepnFicp: number;
        codeTypeRepnBDF: string;
        codeTypeRepnFicp: string;
        dateApplicationBDF: Date;
        dateApplicationFicp: Date;
        libelleRepnBDF: string;
        libelleRepnFicp: string;
        codeArreSurSalr: number;
        dateApplicationFbe: Date;
        codeRepnFbe: number;
        codePresListnSurCntrTechniqueRegn: number;
        libelleListnSurCntrTechniqueRegn: string;
        codeCotisationFibenDirg: string;
    }
    interface IActiviteMaj {
        codeClasseRisqueCSP: number;
        dateEffetCSP: Date;
        dateEmbc: Date;
        codeTypeContratEmbc: number;
        raisonSocialeEmplr: string;
        codePosteEmplr: string;
        codeApNEmplr: string;
        codeSalrDomiciliationCE: number;
        codePresActiviteSalr: number;
        codePresSuivantPersonne: number;
        nombreKilmEntreLogementTrvl: number;
        dateFinCdd: Date;
        codeSecteurActivite: number;
    }
    interface IRevenuFiscalMaj {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
    }
    interface IEmprunteurMaj {
        nombreEnfantCharge: number;
        nombrePersonneGrpe: number;
        nombrePersonneSuppCharge: number;
        typeLienEntreLesPersonne: number;
        nomGrpe: string;
        ageEnfant: Array<number>;
        dateDernierRapp: Date;
        anneNaisEnfant: Array<number>;
        codeEmplrComun: number;
        capceprgAvenantOper: number;
        ancnChargeLiesAOperImmobilier: number;
        valeurPatrimoineImmobilier: number;
        codeDevise: string;
        montantPatrimoineMobl: number;
        nombreVoiture: number;
        denmEmprunt: string;
        libelleLongEmprunt: string;
        intlcEmprunt: string;
        idEntiteTitulaireClient: string;
        idElementStructureGestion: string;
        codeCateEmprunt: string;
        codeTypeMarchePersonne: number;
        cateAgentEcnmBafi: number;
        cateClientBafi: number;
        typeAdmnBafi: number;
        classeAgentBafi: string;
        codeSituationFamille: number;
        codeSituationFamilleRegle: number;
        nombrePersonneCmpstMeng: number;
        nombreActfMeng: number;
        dateEncoursEpargneLogement: Date;
        encoursEncoursIsssPretPEL: number;
        montantEncoursIsssPretLEL: number;
        montantEncoursLivrAutreEtbl: number;
        montantEncoursPlnsAutreEtbl: number;
        totalRevnAnnulationNets: number;
        montantRevnMeng: number;
        stttOccpLogementActuariel: number;
        codeTitreCivilite: string;
        nomRaisonSocialeEmprunt: string;
        intituleLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        compIntituleLigne2: string;
        adresseLigne5: string;
        codeDestinataireAutreParObjet: number;
        codeSecteurRattachement: string;
        codeJeunMeng: number;
        esperVie: number;
        esperVieDecision: number;
        esperVieStress: number;
        envoiMailSms: string;
        listeIdPersonne: Array<string>;
    }
    interface IButLocatifMaj {
        indicePretTransfertLocf: boolean;
        numeroDecisionFavrGlbl: number;
        dateDecisionFavrLoct: Date;
        indiceDecisionGlblFavr: boolean;
        dateConventionLoct: Date;
        natureAvantageFiscal: string;
        montantAvantageFiscal: number;
        montantFrsAnnulationGestionLogement: number;
        montantFrsAnnulationEntnLogement: number;
        montantTaxeFonc: number;
        presServiceVacnLogement: boolean;
        presUneAssuranceLoyeImpe: boolean;
        montantAnnuLoyePerc: number;
    }
    interface ISoulteFinanceeMaj {
        montantSoul: number;
        permDetrSiSoulFaitSuiteDivo: boolean;
        pourcentageProprietaireOrigine: number;
        valeurActiviteCorrValeurBienOrigine: number;
        surfHabitationBienSous: number;
        dateAcqsBienSous: Date;
    }
    interface IBatimentHabitableFinanceMaj {
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        coutAcqsBatimentHabitation: number;
        codePrixMarcheBale2: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        dateAcqsBatimentHabitation: Date;
        dateConstructionBatimentHabitation: Date;
        montantTVAFinancierARemboursement: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
    }
    interface IConstructionFinanceeMaj {
        coutConstructionFinancier: number;
        dateDebutConstruction: Date;
        dateFinConstruction: Date;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        typeContratConstruction: number;
        typeImeu: number;
        presUneGarantieAcheTravaux: number;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
    }
    interface ITerrainSousJacentMaj {
        surfTerr: number;
        terrEstFinancierParCredit: number;
        dateEntrPatrimoineDateAcqs: Date;
        montantLoyeParMois: number;
        modeAcqsTerr: number;
    }
    interface IBienSousJacentMaj {
        modeAcqsBien: number;
        cRDBienSousJacent: number;
        dateEntrCapitalDateAcqs: Date;
        modeFinancier: number;
        typeObjetCommercialisation: string;
        typeObjetRegle: string;
    }
    interface ITravauxFinancesMaj {
        coutTravaux: number;
        dateFinTravaux: Date;
        surfHabitationCree: number;
        typeTravauxCadreEcpt: number;
        dateConstructionBatimentSousJacent: Date;
        surfHabitationBatimentSousJacent: number;
        dateAcqsBatimentSousJacent: Date;
        typeLogementBatimentSous: number;
    }
    interface ITerrainFinanceMaj {
        coutTerr: number;
        dateAcqsTerr: Date;
        surfTerr: number;
        codeFinancierTerr: number;
        montantFrsNegocie: number;
    }
    interface IDossierMaj extends IElementMaj {
        dateHorizonProjet: Date;
        codeImprParExpressionVersement: number;
        codeApplicationChargeDossier: number;
        codeVisbInstruction: number;
        techniqueVent: number;
        codeLivrnImme: boolean;
        numeroAccrCmps: number;
        engagementRevc: number;
        dateSignePret: Date;
        dateTraitement: Date;
        idConventionPres: string;
        idPres: string;
        ensgnPres: string;
        origineCommissionProjet: number;
        codeEtatPlns: number;
        codeApplicationAnlsRisque: boolean;
        codeTypologieCadreFiscal: string;
        cdeDevise: string;
        codeLevrSecrBancaire: number;
        dateRecuperationOffreParClient: Date;
        modeRegle: string;
        modeRegleVersement: string;
        numeroCompteSecoPrel: string;
        domiciliationTresCompteSeco: string;
        dateLimiteRetardEmpruntLoiConsommation: Date;
        idExterneDossier: string;
        typeLoiScrivener: number;
        codeAuthentiqueContrat: boolean;
        montantVersementCnvn: number;
        pourcentageFinancier: number;
        idReductionActe: string;
        idOrigineDemande: string;
        libelleOrigineDemande: string;
        datePrevSigneNotaire: Date;
        referenceExterneDossier: string;
        elementStructure5: string;
        elementStructure6: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        codeTypeEngagement: string;
        idAgentInstructionDossier: string;
        idAgentPourDecisionConf: string;
        idEntitePourTransfertBo: string;
        blocNotes: string;
        codeEtapeSimulation: number;
        numeroFichPres: string;
        codePrscDossierPres: number;
        codeDevCreditDev: string;
        numeroCompteDev: string;
        modeRegleDev: string;
        modRegleVersementDev: string;
        canalDeDistribution: string;
        dateEnvoiConventionAG: Date;
        envoiMailSms: string;
    }
    interface IPoolEPSMaj {
        idDossierInstruction: string;
        idOprtCess: string;
        idCadreFinancier: string;
        codeNaturePool: number;
        codeOrigineCess: number;
        typeSousRolePool: number;
        numeroVersionCadre: number;
    }
    interface IProjetNonImmobilierMaj {
        descriptionProjetNonImmobilier: string;
        dateMiseDispFond: Date;
    }
    interface IProjetImmobilierMaj {
        defnSiEmpruntEstPrm: boolean;
        codeConditionDerogationPourPtz: number;
        codeBatimentBassConsommation: number;
        codeDestinataireAutreParObjet: number;
        codeModeleOccpLogement: number;
        codePrixMarche: number;
        codeTypeMarche: number;
        typeProprietaire: number;
        pourcentageProprietaireApreOper: number;
        codePaysLocalisation: string;
        montantInscHypotheque: number;
        qualEmplaProjet: number;
        zoneRegleRobnBien: string;
        zonePlusLogement: string;
        codeZoneFrncSinistre: number;
        typeImeu: number;
        idProgrammeImmobilier: string;
        idAccrPourInstruction: string;
        indicemssNouvPartScpi: number;
        codeTypeMarchePourVent: number;
        nomSoceGestion: string;
        centreBourgadeRural: boolean;
    }
    interface IProjetEPSMaj extends IProjetMaj {
    }
    interface IProjetMaj extends IElementMaj {
        descriptionObjet: string;
        coutTotalObjet: number;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        montantFrsDivr: number;
        montantRachCren: number;
        codeMiseOeuvrProjetPro: number;
        coutObjetSaisieCalculEnvl: number;
        negocieEffcParNotaire: boolean;
        typeAcqs: number;
        nombreUnteContratProgrammeImmobilier: string;
        coutFrsNotaire: number;
        coutRelOper: number;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        montantEstmVenl: number;
        dateEstmVenl: Date;
        codeModeleEstmVenl: string;
        indiceAchtRvnt: boolean;
    }
    interface IComplementEPSMaj extends IElementMaj {
        natureGarantieEPS: string;
        referenceExterneDossierParent: string;
        dateDebutEngagement: Date;
        dateFinEngagement: Date;
        montantEngagementGlblOrigine: number;
        idEngagementGlbl: string;
        codeIndicateurRetrocessionEPS: number;
        codeIndiceRadiationAutomatiqueEPS: number;
        codeIndiceEPSAmortissable: number;
        codeEngagementGlobal: number;
        codeTypeObjetEPS: string;
        codeCanalDistributionEPS: string;
        codeSignatureElectroniqueEPS: string;
        dateDecisionEPS: string;
        idEntiteInstructeur: string;
        codeAgentDecideur: string;
        idModeleActeEPS: string;
        idEDSSignataire: string;
        idEDSSignataire1: string;
        montantAssietteCommission: number;
        numeroSignatureElectroniqueEPS: string;
    }
    interface IControleManuelMaj {
        commentaireContrôle: string;
    }
    interface IPieceAgenceMaj {
    }
    interface IPieceClientMaj {
    }
    interface IPieceMaj {
        stttPieceContrôle: number;
    }
    interface ITresorerieFinanceeMaj {
        idVendeur: string;
    }
    interface IBienEquipementProMaj {
    }
    interface IBienDetailleMaj {
        coutTerr: number;
        coutAcqsCommercialisationInds: number;
        coutAcqsHabitation: number;
        coutConstruction: number;
        coutTravauxAmen: number;
        coutPasPort: number;
        coutFondComc: number;
        coutEqpmMte: number;
        coutVehcPrfs: number;
        coutPartSociale: number;
        montantFrsNegocie: number;
        montantFrsNotaire: number;
        coutStck: number;
        coutStckHorsInstruction: number;
        coutBfr: number;
        coutBfrHorsInstruction: number;
        coutAutreFrsPrfs: number;
        coutAutreFrsPrfsHorsInstruction: number;
        montantTVAFinancier: number;
        montantRachCren: number;
        coutPartSoce: number;
    }
    interface IAutoMotoMaj {
        typeMotr: number;
        modeVehc: string;
        marqVehc: string;
        typeVehc: number;
        gnreVehc: number;
        puisFiscal: number;
        datePrmeMiseCircl: Date;
    }
    interface IBienConsoFinanceMaj {
        idVendeur: string;
        montantInscHypotheque: number;
    }
    interface IEvenementMaj {
        messEnregistrementSurEvenDossier: string;
        dateEffetEven: Date;
        idEntiteSaisieEven: string;
        libelleEntiteSaisieEven: string;
        codeIndiceGestionCentralEven: number;
        elementStructureGestionBackCentral: string;
        idCaisseAssuranceBackCentral: number;
    }
    interface IBlocNotesMaj extends IElementMaj {
        contratBlocNote: string;
    }
    interface ICreditPalierProgressionMaj {
        valeurTauxProgressifAmortissement: number;
        codeIndexTauxProgressifAmortissement: number;
        nombrePeriodeDureePalierProgressif: number;
    }
    interface IComplementPhasePretCombineMaj {
        montantAmortissement: number;
        montantInfine: number;
        modeSaisieReprCapital: number;
        quotientAmortissement: number;
    }
    interface ICreditPhaseAmortissementMaj {
        quotientAmortissement: number;
        tauxConstructionPhaseCredit: number;
        montantEchmOptimisation: number;
    }
    interface ICreditPhaseDiffereAmortissementMaj {
    }
    interface ICreditPhaseDiffereTotalMaj {
    }
    interface ICreditPhaseMobilisationMaj {
    }
    interface ICreditPhasePrefinancementMaj {
        codeReductionDureePref: number;
        reductionDureePref: boolean;
    }
    interface ICreditPhaseMaj {
        capitalisation: boolean;
        modeCapitalRecouvrementInterieur: number;
        codeCapitalRecouvrementInterieur: number;
        codePeriodeAssuranceCalculInterieur: number;
        codePeriodeCalculMER: number;
        nombrePeriodePhase: number;
        codePeriodeDurePhase: number;
        valeurTauxPhase: number;
    }
    interface ICreditParamRevisionParPeriodeMaj {
    }
    interface ICreditParamRevisionParPhaseMaj {
    }
    interface ICreditParamRevisionMaj {
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
    }
    interface ICreditPalierTauxMaj {
        tauxProgressifEcheanceSurPalier: number;
        nombrePeriodeDureePalier: number;
    }
    interface ISuiviPlanifieMaj {
        datePremierSuivant: Date;
        dateSuivantPlafond: Date;
        libelleLibrAssuranceSuivant: string;
        idClasse: string;
        nombrePeriodeSuivantPlafond: number;
        codePeriodeSuivantPlafond: number;
    }
    interface ICreditModaliteMaj {
        idModeleCalculImpe: string;
        tauxIndemniteRemboursementAnticipe: number;
        numeroModeleRemboursementAnticipe: number;
        surcTauxParRappRemboursementAnticipe: number;
        tauxInterieurRetardImpe: number;
        montantIndemniteImpe: number;
        codeTraitementInterieurIntrSurImpe: number;
    }
    interface ICompteCourantMaj {
        montantHypothequeCapital: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
    }
    interface ICreditHDMaj {
        numeroContratEpargne: string;
        montantInitialGarantie: number;
    }
    interface IGarantieHDMaj {
        natureGarantieHorsDossier: string;
        idOrigineGarantieHorsDossier: string;
        rangPrincipalHypotheque: number;
        rangSecnHypotheque: number;
        codeCessRangHypotheque: number;
        idEtabPreteur: string;
        villeConsvHypotheque: string;
        datePublHypotheque: Date;
        refVolume: string;
        numeroVolume: number;
        dateEffetHypotheque: Date;
        dateFinHypotheque: Date;
        libelleEmprunt: string;
        libelleNotaire: string;
        villeNotaire: string;
        montantInscHypothequeOrigine: number;
        montantHypothequeDisp: number;
        dateDispMontant: Date;
        pactCommr: string;
        codeEtatGarantie: number;
        codeIndiceGarantieExterne: number;
        codeIndiceTrfoGarantie: number;
        dureeInitialMois: number;
        codeTypeGarantieMyss: string;
    }
    interface ICreditBonificationInfoMaj {
        codeDetail: string;
    }
    interface ICreditBonificationMaj {
        idCreditExterne: string;
    }
    interface IAccessoireComplementaireMaj {
        codeNatureOrigineAccessoire: number;
    }
    interface IAccessoireLieProduitMaj {
    }
    interface IServiceSurObjetMaj {
        numeroRegleCalculDateEffetService: string;
    }
    interface IAssuranceMaj {
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeAssuranceObligatoire: number;
        codeAssurancePart: number;
        codeResr: number;
        libelleAssuranceExterne: string;
        numeroSirenCieAssurance: string;
        numeroRegleCalculDateEffet: string;
        codeAgreAssuranceExtr: number;
    }
    interface IGarantieReelleMaj {
        numeroRangSecnHypotheque: number;
        dureHypothequeMois: number;
        pactCommr: number;
        rangHypotheque: number;
        codeCessRangHypotheque: number;
        montantCouvertureParHypothequeRangInfe: number;
        montantFrais: number;
    }
    interface IGarantiePersonnelleMaj {
        codeNatureCaution: number;
    }
    interface IBienPorteEnGarantieMaj {
        libelleObjet: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        montantEstmVenl: number;
        dateEstmVenl: Date;
        codeModeleEstmVenl: string;
        montantEstmPrdn: number;
        dateEstmPrdn: Date;
        codeModeleEstmPrdn: string;
        codeMotfReSPrdn: string;
        dateExpressionBienCff: Date;
        noteExpressionBienCff: number;
    }
    interface IHypothequeAerienneMaj {
        numeroSer: string;
        numeroImmt: string;
    }
    interface IBonDeCaisseCapitalisationMaj {
        referenceCadastrale: string;
        numeroCompte: string;
        numeroSiren: string;
        valeurBonOrigine: number;
        numeroContratTitre: string;
        natureBon: string;
        dateeche: Date;
        titreNomPrenDeps: string;
    }
    interface IDelegationLoyerMaj {
        montantAnnuLoye: number;
        numeroCompte: string;
        dateExterneBail: Date;
        nomGern: string;
    }
    interface ICessionDaillyAutreMaj {
    }
    interface IContratAssuranceMaj {
        dateNaisAssurance: Date;
        numeroContratAssurance: string;
        nomCieAssurance: string;
        numeroSiren: string;
        cntrGestion: string;
        typeTechniqueJuridique: string;
        nomContratAssurance: string;
        apportPersonne: number;
        montantMinimumVersementSigne: number;
        codeIndiceAttnVersement: number;
    }
    interface IAntichreseMaj {
        referenceCads: string;
        numeroLot: string;
    }
    interface ICessionDaillyLoyerImmeubleMaj {
    }
    interface IGageVehiculeMaj {
        numeroSer: string;
        numeroImmt: string;
    }
    interface IGageCompteInstrumentFinancierMaj {
        referenceCadastrale: string;
        numeroCompte: string;
    }
    interface INantissementPartSocialeMaj {
        numeroEnregistrement: string;
        numeroCompte: string;
        descriptionOtion: string;
    }
    interface INantissementValeurMaterielleMaj {
        typeValeurMatrimonial: string;
        numeroRefTypeLot: string;
    }
    interface INantissementFondDeCommerceMaj {
        numeroInscRcs: string;
        libelleLibr: string;
        titreOccpLocLeqlFondEstExpl: number;
    }
    interface IHypothequeImmobiliereMaj {
        referenceCads: string;
        referenceLot: string;
        typeBien: number;
        typeLogement: string;
        destinataireBien: number;
        surfHabitation: number;
        surfTerr: number;
        zoneImplBien: string;
        qualEmpla: number;
        montantDernierMutt: string;
        dateDernierMutt: string;
        anneConstruction: number;
        montantAnnuLoye: string;
        numeroLotCopr: string;
        numeroSctn: string;
        occpActuarielBien: number;
        codePresHypotheque: number;
        idExpression: string;
        dateDemandeExpression: Date;
    }
    interface IBienDiversMaj {
        reference1: string;
        reference2: string;
    }
    interface INantissementValeurMobiliereMaj {
        referenceCadastrale: string;
        numeroCompte: string;
    }
    interface IGarantieMaj extends IAccessoireMaj {
        commentaire: string;
        codeFormeActeAuthentique: number;
    }
    interface IAccessoireMaj extends IElementMaj {
        idExterneAccessoire: string;
        partFinancierAccessoire: number;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
    }
    interface ICourrierEPSMaj {
        typeLettre: number;
        codeCivilite: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    interface ICreditEPSMaj {
        codeDevise: string;
        quotientCreditCouvertureParEPS: number;
        referenceExterneCreditCouvertureEPS: string;
    }
    interface IPersonneMoraleMaj {
        numeroINSEE: string;
        dateInscRcs: Date;
        dateCreationSoce: Date;
        chiffreAffrHtExrcPrec: number;
        nombreSalr: number;
        formeJuridique: string;
        typeDroitPersonneMorl: number;
        montantCapital: number;
        listeIdPersonnePhys: Array<string>;
        listeRolePersonnePhys: Array<string>;
    }
    interface IPersonnePhysiqueMaj {
        codeTitreCivilite: string;
        prenom: string;
        codeSexePersonne: number;
        nomJeunFill: string;
        dateNais: Date;
        lieuNais: string;
        codePersonneCE: number;
        codeRegimeMatrimonial: string;
        codeSituationFamille: number;
        nombrePersonneACharge: number;
        cateInteret: string;
        dateEffetSituationFamille: Date;
        codeSalrDomiciliationCE: number;
        codeModeLogement: number;
        dateEntrLogement: Date;
        codeCapcJuridique: number;
        codeTypeCapJuridique: string;
        codeNational: number;
        codeSaisieAvisTiersDtnr: number;
        codeContentieuxHorsComptCE: number;
        montantEncoursSaccefHorsOprt: number;
        typeTrspUtilisation: number;
        codeGeotAdresseDomiciliation: string;
        codePaysResdEmprunt: string;
        codePaysLocalisationEmprunt: string;
        codeProfilEmprunt: number;
        codePstlLieuNais: string;
    }
    interface IPersonneAutreMaj extends IPersonneMaj {
    }
    interface IPersonneMaj extends IElementMaj {
        idPersonneSI: string;
        crteResd: number;
        cateAgntecnmBafi: number;
        cateClientBafi: number;
        cateTypeAdmnBafi: number;
        classeAgentBafi: string;
        cleBDF: string;
        dateEntrRelationAvecConsolide: Date;
        nomRaisonSociale: string;
        codeAssmPartc: number;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
        ensgCommission: string;
        lieuInscRC: string;
        numeroInscRC: string;
    }
    interface IMarcheEPSMaj extends IElementMaj {
        codeTypeMarche: string;
        idMarche: string;
        idTiersMarcePrinc: string;
        libelleMoeMarchePrinc: string;
        libelleObjetMarche: string;
        montantMarche: number;
        dateSigneMarche: Date;
        dateFinMarche: Date;
        nomGroupMarche: string;
        libelleLieuExecTravaux: string;
        numeroTranMarche: string;
        numeroLotMarche: string;
    }
    interface ICreditInterneMaj extends IElementMaj {
        idConventionPres: string;
        codeIndiceEnvoiAvisEcheance: number;
        codeIndiceOptimisationImps: number;
        referenceExterneCredit: string;
        codeIndiceTraitementInterieurIntr: number;
        codeTypeActuarielInterieurIntr: number;
        codeDeviseVersement: string;
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        codeTypeRattachementJustificatifDeclaration: number;
        modeRegleVersement: string;
        numeroEchelleVersement: number;
        jourDateEcheance: number;
        codeIndicelgbAuprInstemss: number;
        codeIndiceCalculAFaire: number;
        montantPrimeEpargneLogement: number;
        tauxNegocieSurcRemboursementAnticipe: number;
        tauxPondereCntExtr: number;
        intituleLigneUn: string;
        domiciliationTres: string;
        numeroDomiciliationDispFond: string;
        montantMinimumVersement: number;
        codeIndicePresUneBonificationUneMajreTaux: number;
        tegModeRestitution: number;
        codeConfirmationReductionDurePTZ: number;
        codeConfirmationReductionMontantPTZ: number;
        montantCreditEuro: number;
        montantMaximumPretPVH: number;
        codeDeviseSaccef: string;
        nombrePeriodeCredit: number;
        codePeriodeCredit: number;
        montantCapitalCredit: number;
        coutTotalFrsDossierAssuranceCredit: number;
        margeTauxFutr: number;
        valeurTauxInitial: number;
        tauxMontage: number;
        montantPTZVerrouille: boolean;
        dureePTZVerrouillee: boolean;
    }
    interface ITACreditEPSMaj {
        numeroRelCredit: number;
        dateEcheanceMER: Date;
        montantCapitalAmortissement: number;
        montantCapitalRestantDu: number;
    }
    interface IPretReamenageMaj {
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: Date;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: Date;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
    }
    interface IInfoRegroupementMaj {
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: Date;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: Date;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
    }
    interface IPlanFinancementMaj {
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        dateEditPropCredit: Date;
        dureeSouh: number;
    }
    interface ICreditExterneMaj {
        libletblPret: string;
        dureAmortissementMois: number;
        tauxAmortissement: number;
        montantCapital: number;
        mtecheAmortissement: number;
        codePeriodeAmortissement: number;
        codeIndiceInterieurTantPPersonne: number;
        libelleLibrSurConcr: string;
        codeDevise: string;
        codeIndiceNaturePret: number;
        codeIndiceTauxRevision: number;
        dureDiffereMois: number;
        typeSurtaxe: number;
        codeIndicePresAssurancePertEmpl: number;
        codeIndiceTypeRemboursement: number;
        tegActu: number;
        mtecheDiffere: number;
        codePeriodeDiffere: number;
    }
    interface IPalierContraintMaj {
        dateFinPeriode: Date;
        montantEcheance: number;
        durePalier: number;
    }
    interface IVersementAttenduMaj {
        typeVersement: string;
        montantVersement: number;
        dateDebut: Date;
        dateFin: Date;
        periodeVersement: number;
    }
    interface IProprietaireMaj {
        quotientPleinProp: number;
        quotientNueProp: number;
        quotientUsuf: number;
        quotientDroiUsag: number;
        codeModDettnBien: number;
    }
    interface IReferenceCadastraleMaj {
        referenceCadastre: string;
        sectionCadastre: string;
        surfaceReferenceCadastrale: number;
        commentaires: string;
    }
    interface IReferenceLotMaj {
        referenceTypeDeLot: string;
        natureDuLot: string;
        tantieme: number;
    }
    interface IPatrimoineImmobilierMaj {
        naturePatrimoineImmobilier: number;
        codeIndiceUsageLogement: number;
        valeurActuarielPatrimoine: number;
        dateAcqsPatrimoine: Date;
        capitalRestantSurPatrimoine: number;
        mensPretSurPatrimoine: number;
        dateFinPretSurPatrimoine: Date;
    }
    interface IPayeurMaj {
        montantPaiementCredit: number;
        pourcentagePaiementCredit: number;
        modeRegleUtilisationParPayr: string;
        numeroComptePayr: string;
        personneMaj: Modeles.Neo.DossierCreditInstruction.IPersonneMaj;
    }
    interface IDroitUtiliseMaj {
        montantDroitAcqsUtilisation: number;
        montantDroitLimite: number;
    }
    interface IDetailCoutObjetMaj {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
    }
    interface IComplementFicheContactMaj {
        hrDebutPlgHor: number;
        hrFinPlgHor: number;
        comentair: string;
    }
    interface IClausePersonnaliseeMaj {
        destinataireClassePersonne: number;
        libelleClassePersonne: string;
    }
    interface IAvisMaj {
        dateSaisieAvis: Date;
        libelleAvis: string;
        codeTypologieAvis: string;
    }
    interface IAvisOrganismeExterneMaj {
        idExterneEnvoi: string;
        dateEnvoi: Date;
        dateAvis: Date;
        codeIndiceTraitementEnvoi: number;
        codeDecision: string;
        codeMotf: string;
        libelleAvisDecision1: string;
        libelleAvisDecision2: string;
        nomAgentInstruction: string;
        numeroTeleInstruction: string;
        libelleAdresseMail: string;
        numeroFaxInstruction: string;
        typeLiaiSaccefTp: number;
        typeRepnOrgnExterne: number;
    }
    interface IVersementMaj {
        pourcentageVersement: number;
        libelleAvnc: string;
    }
    interface IRedacteurActeMaj {
        idPersonneSI: string;
        nomReductionActe: string;
        prenReductionActe: string;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
    }
    interface IRessourceMaj {
        typeRessource: string;
        montantRessource: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
    }
    interface IFamilleEpargneMaj {
        codeFamilleProduitAdresse: string;
        nombreProduitDetnPourUneFamilleProduitAdresse: number;
        montantValeurEpargneAvenantOper: number;
        libelleCaisseEpargne: string;
        dateValeurEpargne: Date;
        montantEpargneApreOper: number;
    }
    interface IContratEpargneLogementMaj {
        codeTypeEL: string;
        codeDeviseCompte: string;
        lienParentAvecCedn: number;
        libelleTitulaireContrat: string;
        codeIndiceBenePrimeEpargneLogement: number;
        dateOuvertureContrat: Date;
        dateClotureContrat: Date;
        codeForc: number;
        codeRaptContratEpargneLogement: number;
        idPersonneApportDroitContrat: string;
        codeDroitJustificatif: number;
        codeResrDroitAcqs: number;
        rapatrierTranche: boolean;
        droitEstCede: boolean;
        idContratEpargneLogement: string;
    }
    interface ITrancheELMaj {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: Date;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
    }
    interface IOppositionMaj {
        codeOpposition: string;
        dateDebutOpposition: Date;
        dateFinOpposition: Date;
    }
    interface IVersementFractionneMaj {
        periodiciteVersement: number;
        montantPremierVersement: number;
        modeRegleVersement: string;
        numeroDomiciliationMADFond: string;
        montantVersementFraction: number;
        nombreVersementSouh: number;
        montantVersementPeriodeMaximum: number;
        montantVersementInitialMaximum: number;
        quotientPremierVersement: number;
        quotientVersementPeriode: number;
    }
    interface IBienAVendreMaj {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: Date;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: Date;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
    }
    interface IComplementDossierMaj {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: number;
    }
}

declare module creditsEps.Enumerations.Gac {
    module RegleDateButoirEnum {
        var FTR: string;
        var DEBUT: string;
        var NON: string;
    }
}

declare module creditsEps.Enumerations.Gac {
    module TypePartenariatEnum {
        var SMA: string;
    }
}

declare module creditsEps.Enumerations.Payeur {
    module CodeDomiciliationEnum {
        var RIB: string;
        var IBAN: string;
        var RECOUVREMENT_DEBIT_OFFICE: string;
        var SANS_IBAN: string;
    }
}
