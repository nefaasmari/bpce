/** ne pas supprimer sert pour le done des tests asynchrones */
interface IDoneFn extends Function {
    (): void;
    /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
    fail: (message?: Error | string) => void;
}

declare module myway.gestionEpargne.horsOffre.commun {
    var communModule: ng.IModule;
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Controleur de la gestion d'erreurs
     */
    class GestionErreursControleur {
        private $scope;
        private gestionErreursService;
        private serviceAgentExtendedHelper;
        static $inject: string[];
        /**
         * Titre de la SPA appelante
         */
        titreSPA: string;
        /**
         * Message Erreur
         */
        errorMessages: string[];
        constructor($scope: ng.IScope, gestionErreursService: GestionErreursService, serviceAgentExtendedHelper: ServiceAgentExtendedHelper);
        /**
         * Permet d'abondonner la simulation
         * @returns {void}
         */
        quitter(): void;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * @constant {string} Clé du contexte processus contenant les données DAT transitant entre la SPA et GGHO
     */
    const CONTEXTE_PROCESSUS_CAT: string;
    /**
     * @constant {string} Clé du contexte processus contenant les données Quadreto transitant entre la SPA et GGHO
     */
    const CONTEXTE_PROCESSUS_QUADRETO: string;
    var CODE_PRODUIT_DAT: string;
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service commun des fonctions
     */
    class CommunService {
        static $inject: string[];
        regimeGeneral: Array<any>;
        residenceFiscale: Array<any>;
        paysResidenceFiscale: Array<any>;
        natureJuridiqueClient: Array<any>;
        lisaInitiale: number;
        constructor();
        isSimulation(): boolean;
        paddy(n: string, p: number, c: string): string;
        affecterRegime(codeResidence: string): any;
        affecterResidenceFiscale(codeResidenceFiscale: string): any;
        affecterPaysResidenceFiscale(codePaysResidenceFiscale: string): any;
        affecterNatureJurique(codeNatureJuridique: string): any;
        recupererLibelleRegime(codeRegimGeneral: string): string;
        recupererLibelleResidenceFiscale(codeResidence: string): string;
        recupererLibellePaysResidenceFiscale(codePaysResidence: string): string;
        recupererLibelleNatureJuridique(codeNatureJuridque: string): string;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de gestion des données contextuelles DAT
     */
    class ContexteDatService {
        private $q;
        private serviceAgentExtendedHelper;
        private identificationService;
        private informationsEntiteTitulaireService;
        private particulierInformationService;
        static $inject: string[];
        /**
         * Objet de donnees contextuelles
         */
        private contexte;
        /**
         * Clé du contexte processus
         */
        private contexteKey;
        constructor($q: ng.IQService, serviceAgentExtendedHelper: ServiceAgentExtendedHelper, identificationService: IdentificationService, informationsEntiteTitulaireService: InformationsEntiteTitulaireService, particulierInformationService: ParticulierInformationService);
        /**
         * Recupère l'instance du contexte
         * @param {string} contexteKey
         * @returns {ng.IPromise<DonneesContextellesDAT>}
         */
        getContexteDAT(contexteKey: string): ng.IPromise<DonneesContextellesDAT>;
        /**
         * Créer le contexte
         * @returns {ng.IPromise<DonneesContextellesDAT>}
         */
        private initialiserContexte();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de gestion des données d'ourverture
     */
    class ContexteProcessusService {
        private $q;
        private serviceAgentExtendedHelper;
        private particulierInformationService;
        private corporateInformationService;
        static $inject: string[];
        /**
         * Objet de donnees contextuelles
         */
        private donneesCAT;
        private donneesQuadreto;
        constructor($q: ng.IQService, serviceAgentExtendedHelper: ServiceAgentExtendedHelper, particulierInformationService: ParticulierInformationService, corporateInformationService: CorporateInformationService);
        /**
         * Définit le contexte processus DAT
         * @param {DonneesContextellesDAT} donneesContextuellesDAT
         * @param {string} codeOptionRegimeGeneral - code fiscalité client issu de la simulation
         * @returns {ng.IPromise<ContexteProcessusDAT>}
         */
        private setContexteProcessusDAT(donneesContextuellesDAT, codeOptionRegimeGeneral);
        /**
         * Définit le contexte processus CAT
         * @param {DonneesContextellesDAT} donneesContextuellesDAT
         * @param {DonneesProduitCAT} donneesProduitCAT
         * @param {string} codeOptionRegimeGeneral - code fiscalité client issu de la simulation
         * @returns {ng.IPromise<void>}
         */
        setContexteProcessusCAT(donneesContextuellesDAT: DonneesContextellesDAT, donneesProduitCAT: DonneesProduitDAT, codeOptionRegimeGeneral: string): ng.IPromise<void>;
        /**
         * Définit le contexte processus Quadreto
         * @param {DonneesContextellesDAT} donneesContextuellesDAT
         * @param {DonneesProduitQuadreto} donneesProduitQuadreto
         * @param {string} codeOptionRegimeGeneral - code fiscalité client issu de la simulation
         * @returns {ng.IPromise<void>}
         */
        setContexteProcessusQuadreto(donneesContextuellesDAT: DonneesContextellesDAT, donneesProduitQuadreto: DonneesProduitQuadreto, codeOptionRegimeGeneral: string): ng.IPromise<void>;
        /**
         * Recupère les données du DAT à ouvrir
         * @returns {ng.IPromise<DonneesOuvertureDAT>}
         */
        getDonneesCAT(): ng.IPromise<DonneesOuvertureDAT>;
        /**
         * Recupère les données du Quadreto à ouvrir
         * @returns {ng.IPromise<DonneesOuvertureQuadreto>}
         */
        getDonneesQuadreto(): ng.IPromise<DonneesOuvertureQuadreto>;
        /**
         * Instancie l'objet de données DAT
         * @param {string} contexteProcessusDat CONTEXTE_PROCESSUS_CAT ou CONTEXTE_PROCESSUS_QUADRETO selon que le Dat à initialiser est un CAT ou un Quadreto
         * @returns {ng.IPromise<DonneesOuvertureDAT>}
         */
        private initialiserDonneesDAT(contexteProcessusDat);
        /**
         * Instancie l'objet de données CAT
         * @returns {ng.IPromise<DonneesOuvertureDAT>}
         */
        private initialiserDonneesCAT();
        /**
         * Instancie l'objet de données Quadreto
         * @returns {ng.IPromise<DonneesOuvertureQuadreto>}
         */
        private initialiserDonneesQuadreto();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de gestion des données contextuelles DAT
     */
    class GestionErreursService {
        static $inject: string[];
        /**
         * Titre SPA
         */
        titreSPA: string;
        /**
         * Message d'erreur
         */
        errorMessages: string[];
        /**
         * Etape Lisa de sortie
         */
        etapeLisaSortie: number;
        constructor();
        /**
         * Permet d'initialiser le service avec le titre de la SPA surveillée
         * @param {string} titre
         * @returns {void}
         */
        initialiser(titre: string, etapeLisa: number): void;
        /**
         * Permet de sauvegarder et de mettre en forme les données de l'erreur à afficher
         * @param {any} erreur
         * @returns {void}
         */
        afficherErreur(erreur: any): void;
        /**
         * Permet de formater le message d'une erreur myway
         * @param {MyWay.Services.Erreur} erreur
         */
        formaterMessageErreur(erreur: MyWay.Services.Erreur): string;
        /**
         * Vérifie si l'erreur a une raison
         * @param {MyWay.Services.Erreur} erreur
         * @returns {boolean}
         */
        private hasRaisonsErreur(erreur);
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de récupération d'informations de DAT
     */
    class NumberFormatService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Formate un nombre au format monetaire
         * @param {number} montant
         * @returns {string} montant à afficher
         */
        formatMontant(montant: number): string;
        /**
         * Getter de mise en forme du taux
         * @param {number} taux
         * @return {string}
         */
        formatTaux(taux: number): string;
        /**
         * Permet de faire des calculs avec une precision de virgule flottante
         * @param {number} expression
         * @param {number} precision
         */
        evaluateWithPrecision(expression: number, precision: number): number;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Modele du contexte DAT issu du PCM
     */
    class ContexteDAT {
        /**
         * Numero de personne : NODAPE
         */
        numeroPersonneIdentifiee: number;
        /**
         * Numero d'identifiant titulaire : NODIET
         */
        identifiantEntiteTitulaire: number;
        /**
         * Type Canal
         */
        codeCanal: string;
        /**
         * Code entité
         */
        codeEntite: string;
        /**
         * Code Sens Communication
         */
        codeSensCommunication: string;
        /**
         * Code Application Appelante
         */
        codeApplicationAppelante: string;
        /**
         * Code Acte de Gestion
         */
        codeActeGestion: string;
        /**
         * Identifiant Produit Service
         */
        codeProduitServiceOffre: number;
        constructor();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Modele du contexte GGHO
     */
    class ContexteGGHO {
        /**
         * Code établissement
         */
        codeEtablissementContrat: string;
        /**
         * Numero de personne : NODAPE
         */
        numeroPersonneIdentifiee: number;
        /**
         * Numero d'identifiant titulaire : NODIET
         */
        identifiantEntiteTitulaire: number;
        /**
         * Type Canal
         */
        codeCanal: string;
        /**
         * Code entité
         */
        codeEntite: string;
        /**
         * Code Application Appelante
         */
        codeApplicationAppelante: string;
        /**
         * Code Acte de Gestion
         */
        codeActeGestion: string;
        /**
         * Identifiant Produit Service
         */
        codeProduitService: number;
        /**
         * code sens Communication
         */
        codeSensCommunication: string;
        constructor();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Structure de données du contexte processus DAT
     */
    interface IContexteProcessusDAT {
        /**
         * Heure d'ouverture de la simulation au format hhmmss
         */
        heureDebutApplication: string;
        /**
         * Numéro de bureau du dommiciliaire
         */
        numeroBureauDomiciliaire: number;
        /**
         * Numero de personne : NODAPE
         */
        numeroPersonne: number;
        /**
         * Numero d'identifiant titulaire : NODIET
         */
        numeroEntiteTitulaire: number;
        /**
         * Code Nature juridique : CODAPJ
         */
        codeNatureJuridique: string;
        /**
         * residence fiscale
         */
        residenceFiscale: string;
        /**
         * code Pays Residence Principale
         */
        codePaysResidencePrincipale: string;
        /**
         * Désignation bancaire courte
         */
        designationBancaireCourte: string;
        /**
         * Code appartenance réseau
         */
        codeAppartenanceReseau: string;
        /**
         * Code Application taxes Fiscales (code option régime général)
         */
        codeApplicationTaxesFiscales: string;
        /**
         * Code devise du DAT selectionné
         */
        deviseInterIso: string;
        /**
         * Code produit régional caisse
         */
        codeProduit: string;
        /**
         * Identifie un produit  selon la codification CENCEP.
         */
        codeProduitNational: string;
        /**
         * Date d'ouverture au format aaaammjj
         */
        dateEffetContrat: string;
        /**
         * Date d'échéance au format aaaammjj
         */
        dateEcheanceContrat: string;
        /**
         * Montant de souscription
         */
        montantNominalSouscription: number;
        /**
         * CODE INDEX MARCHE
         */
        codeIndexTauxReference: string;
        /**
         * C'est le libellé de désignation d'un produit du catalogue DAT.
         * Exemples : "Comptes A Terme 1 mois"
         */
        libelleProduitCatalogueDAT: string;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        /**
         * Taux de rendement annuel brut.
         */
        tauxActuarielNet: number;
    }
    /**
     * Structure de données du contexte processus CAT
     */
    interface IContexteProcessusCAT extends IContexteProcessusDAT {
        /**
         * Code signe (+/-)
         */
        codeSigneTxMargeNego: string;
        /**
         * Taux marge négociation de l'agent
         */
        tauxMargeNegoAgent: number;
        /**
         * Numéro de dérogation
         */
        numeroDerogation: string;
        /**
         * TYPE VERSEMENT INTERETS
         */
        typeVersementInterets: string;
        /**
         * Ce code permet de déterminer le type de taux du contrat CAT (Fixe ou Progressif).
         *
         * * PLAGE DE VALEUR :
         * 'F'        Taux fixe
         * 'P'        Captio  (tx progressif)
         * 'Q'        Capciel (tx progressif)
         * 'G'        Taux Progressif (PII, sans PII)
         * 'R'        Taux révisable
         * 'I'        Taux Fixe avec Bonus Inflation
         * 'T'        TRAAB (QUADRETO)
         * 'N'        Renouvelable BDR
         */
        typeTaux: string;
        /**
         * CODE BAREME TAUX PROGRESSIF
         */
        codeBaremeTauxProgressif: string;
    }
    /**
     * Structure de données du contexte processus CAT
     */
    interface IContexteProcessusQuadreto extends IContexteProcessusDAT {
        /**
         * Montant net revenu souhaité
         * Uniquement pour Quadreto à revenus
         */
        mtRevenuNetSouhaite: number;
        /**
         * Revenu préconisé
         */
        mtNetRevenuCalcule: number;
        /**
         * Détermine la périodicité des revenus d'un placement
         *
         * VALEURS POSSIBLES :
         * ' '        Sans Objet
         * 'M'        Tous les mois
         * 'T'        Tous les trois mois
         * 'S'        Tous les six mois
         * 'A'        Tous les ans
         */
        codePeriodiciteRevenus: string;
        /**
         * Valeur nette PEL à échéance
         */
        montantNetPrevisionnelEcheancePEL: number;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Modele des données contextuelles du DAT
     */
    class DonneesContextellesDAT {
        /**
         * Données de l'établissement
         */
        etablissement: Etablissement;
        /**
         * Données du détenteur
         */
        detenteur: InformationsDetenteur;
        /**
         * Données de fiscalité
         */
        fiscalite: Fiscalite;
        /**
         * Données du produit
         */
        produit: CaracteristiquesProduit;
        /**
         * Données applicative
         */
        application: Application;
        constructor();
    }
    class InformationsDetenteur {
        /**
         * Numero de personne : NODAPE
         */
        numeroPersonne: number;
        /**
         * Numero d'identifiant titulaire : NODIET
         */
        identifiantEntiteTitulaire: number;
        /**
         * Code Type Usage
         * Part / PRO
         */
        codeTypeUsage: string;
        /**
         * Code Nature juridique : CODAPJ
         */
        codeNatureJuridique: string;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        constructor();
    }
    class Fiscalite {
        /**
         * residence fiscale
         */
        residenceFiscale: string;
        /**
         * code Pays Residence Principale
         */
        codePaysResidencePrincipale: string;
        constructor();
    }
    class CaracteristiquesProduit {
        /**
         * Code Acte de Gestion
         */
        codeActeGestion: string;
        /**
         * Identifiant Produit Service
         */
        identifiantProduit: number;
    }
    class Application {
        /**
         * Type Canal
         */
        typeCanal: string;
        /**
         * Code entité
         */
        codeEntite: string;
        /**
         * Code Sens Communication
         */
        codeSensCommunication: string;
        /**
         * Code Application Appelante
         */
        codeApplicationAppelante: string;
        /**
         * heure d'ouverture de l'application
         */
        heureDebutApplication: moment.Moment;
        constructor();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Données nécessaire à l'ouverture du DAT
     */
    class DonneesOuvertureDAT {
        /**
         * Données établissement
         */
        etablissement: Etablissement;
        /**
         * Informations du détenteur visé dans la synthèse
         */
        detenteur: Detenteur;
        /**
         * Données du produit en cours d'ouverture
         */
        produit: DonneesProduitDAT;
        /**
         * Données de l'agent connecté
         */
        agent: Agent;
        constructor();
    }
    /**
     * Données nécessaire à l'ouverture du Quadreto
     */
    class DonneesOuvertureQuadreto {
        /**
         * Données établissement
         */
        etablissement: Etablissement;
        /**
         * Informations du détenteur visé dans la synthèse
         */
        detenteur: Detenteur;
        /**
         * Données du produit en cours d'ouverture
         */
        produit: DonneesProduitQuadreto;
        /**
         * Données de l'agent connecté
         */
        agent: Agent;
        constructor();
    }
    class Etablissement {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Date d'ouverture du guichet
         */
        dateOuvertureGuichet: moment.Moment;
        constructor();
    }
    class Detenteur {
        /**
         * Numero de personne : NODAPE
         */
        numeroPersonne: number;
        /**
         * Numero d'identifiant titulaire : NODIET
         */
        numeroEntiteTitulaire: number;
        /**
         * Code Nature juridique : CODAPJ
         */
        codeNatureJuridique: string;
        /**
         * Numéro de bureau du dommiciliaire
         */
        numeroBureauDomiciliaire: number;
        /**
         * Désignation bancaire courte
         */
        designationBancaireCourte: string;
        /**
         * Infos fiscales du detenteur
         */
        fiscalite: FiscaliteDetenteur;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        constructor();
    }
    class FiscaliteDetenteur {
        /**
         * residence fiscale
         */
        residenceFiscale: string;
        /**
         * code Pays Residence Principale
         */
        codePaysResidencePrincipale: string;
        /**
         * Code Application taxes Fiscales (code option régime général)
         */
        codeApplicationTaxesFiscales: string;
        constructor();
    }
    class DonneesProduitDAT {
        /**
         * Code produit régional caisse
         */
        codeProduit: string;
        /**
         * Identifie un produit  selon la codification CENCEP.
         */
        codeProduitNational: string;
        /**
         * Code devise du DAT selectionné
         */
        deviseInterIso: string;
        /**
         * Date d'ouverture au format aaaammjj
         */
        dateEffetContrat: string;
        /**
         * Date d'échéance au format aaaammjj
         */
        dateEcheanceContrat: string;
        /**
         * Montant de souscription
         */
        montantNominalSouscription: number;
        /**
         * CODE INDEX MARCHE
         */
        codeIndexTauxReference: string;
        /**
         * Code signe (+/-)
         */
        codeSigneTxMargeNego: string;
        /**
         * Taux marge négociation de l'agent
         */
        tauxMargeNegoAgent: number;
        /**
         * Numéro de dérogation
         */
        numeroDerogation: string;
        /**
         * TYPE VERSEMENT INTERETS
         */
        typeVersementInterets: string;
        /**
         * Ce code permet de déterminer le type de taux du contrat CAT (Fixe ou Progressif).
         *
         * * PLAGE DE VALEUR :
         * 'F'        Taux fixe
         * 'P'        Captio  (tx progressif)
         * 'Q'        Capciel (tx progressif)
         * 'G'        Taux Progressif (PII, sans PII)
         * 'R'        Taux révisable
         * 'I'        Taux Fixe avec Bonus Inflation
         * 'T'        TRAAB (QUADRETO)
         * 'N'        Renouvelable BDR
         */
        typeTaux: string;
        /**
         * CODE BAREME TAUX PROGRESSIF
         */
        codeBaremeTauxProgressif: string;
        /**
         * C'est le libellé de désignation d'un produit du catalogue DAT.
         * Exemples : "Comptes A Terme 1 mois"
         */
        libelleProduitCatalogueDAT: string;
        /**
         * Heure d'ouverture de la simulation au format hhmmss
         */
        heureDebutApplication: string;
        /**
         * Taux de rendement annuel brut.
         */
        tauxActuarielNet: number;
        constructor();
    }
    class DonneesProduitQuadreto {
        /**
         * Code produit régional caisse
         */
        codeProduit: string;
        /**
         * Identifie un produit  selon la codification CENCEP.
         */
        codeProduitNational: string;
        /**
         * Code devise du DAT selectionné
         */
        deviseInterIso: string;
        /**
         * Date d'ouverture au format aaaammjj
         */
        dateEffetContrat: string;
        /**
         * Date d'échéance au format aaaammjj
         */
        dateEcheanceContrat: string;
        /**
         * Montant de souscription
         */
        montantNominalSouscription: number;
        /**
         * CODE INDEX MARCHE
         */
        codeIndexTauxReference: string;
        /**
         * C'est le libellé de désignation d'un produit du catalogue DAT.
         * Exemples : "Comptes A Terme 1 mois"
         */
        libelleProduitCatalogueDAT: string;
        /**
         * Heure d'ouverture de la simulation au format hhmmss
         */
        heureDebutApplication: string;
        /**
         * Montant net revenu souhaité
         * Uniquement pour Quadreto à revenus
         */
        mtRevenuNetSouhaite: number;
        /**
         * Revenu préconisé
         */
        mtNetRevenuCalcule: number;
        /**
         * Détermine la périodicité des revenus d'un placement
         *
         * VALEURS POSSIBLES :
         * ' '        Sans Objet
         * 'M'        Tous les mois
         * 'T'        Tous les trois mois
         * 'S'        Tous les six mois
         * 'A'        Tous les ans
         */
        codePeriodiciteRevenus: string;
        /**
         * Taux de rendement annuel brut.
         */
        tauxActuarielNet: number;
        /**
         * Valeur nette PEL à échéance
         */
        montantNetPrevisionnelEcheancePEL: number;
        constructor();
    }
    class Agent {
        /**
         * Code métier de l'application de finance
         */
        codeMetierApplicationFinance: string;
        /**
         * Code utilisateur
         */
        codeUtilisateurCreation: string;
        /**
         * Numéro de bureau de l'opérant
         */
        numeroBureauOperant: string;
        /**
         * Code appartenance réseau
         */
        codeAppartenanceReseau: string;
        constructor();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    class SituationFinanciere {
        /**
         * **Montant capital social**
         */
        montantCapitalSocial: number;
        /**
         * **Montant chiffre affaires TTC Budget**
         */
        montantChiffreAffaires: number;
        effectif: number;
        /**
         * Jour d'arrêté du bilan d'un professionnel pour un exercice donné.
         *
         * Format : JJMM
         * Utilisée en complément de l'année du bilan (Annee Chiffre Affaire)
         */
        dateArreteComptable: number;
        /**
         * Année de référence du chiffre d'affaire ou du montant du budget.
         */
        anneeChiffreAffaires: number;
    }
    class CorporateInformation {
        /**
         * **Code situation juridique**
         */
        codeSituationJuridique: string;
        /**
         * **Numero SIREN professionnel**
         *
         * **Définition :** Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
         * Système d'Identification du Répertoire des ENtreprises Identifie de manière unique une entreprise au niveau national.
         * Attribué qu'une seule fois, n'est supprimé du répertoire qu'au moment de la disparition de la personne juridique
         * (décès ou cessation de toute activité pour une personne physique, dissolution pour une personne morale).
         *
         * Compose le numéro SIRET : num établissement
         *
         * **Format :** Les 8 premiers chiffres n'ont aucune signification, excepté pour les organismes publics (communes,...) dont le numéro SIREN commence obligatoirement par 1 ou 2.
         * Le 9ième chiffre est une clé de contrôle : clé "1-2" suivant l'algorithme de Luhn Un professionnel n'a pas forcément de SIREN, cas des professionnels n'ayant pas d'activité commerciale et/ou n'ayant pas de salariés :
         *
         * Pour les entreprises étarngères résidant en France : SIREN fictif attribué par le Banque De France dans le cadre de l'identification FIBEN (commence par 200)
         *
         * En cas de non attribution par l'INSEE : (hors périmètre SIRENE ou inscription en instance) Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne) numéro attribué par le système
         */
        numeroSiren: string;
        /**
         * Code indiquant si l'entreprise est étrangère.
         */
        codeIndicateurEntrepriseEtrangere: string;
        /**
         * **Date creation juridique**
         */
        dateCreationJuridique: string;
        /**
         * **Raison sociale**
         */
        raisonSociale: string;
        /**
         * **Nom commercial**
         */
        nomCommercial: string;
        /**
         * **Code type commerce organise**
         *
         * Définition :
         * Nature de l'organisation commerciale;
         * caractérise l'activité professionnelle.
         *
         * Valeur :
         * - ' '        Inconnu
         * - '0'        Non concerné
         * - '1'        Franchisé ou Entreprise Affiliée
         * - '2'        Franchiseur ou Tête de Réseau
         */
        codeTypeCommerceOrganise: string;
        /**
         * Identifie une segmentation de clientèle selon BAFI.
         *
         * Permet de classifier la clientèle pour les restitutions règlementaires et BAFI.
         *
         * Format : FSS
         *  - F : Code famille segmentation BAFI / CODFBF
         *  - SS : Sous code segmentation BAFI / CODCBF
         *
         * Exemples :
         *  - '107' SOCIETES FINANCIERES
         *  - '302' ENTREPRENEURS INDIVIDUELS
         *  - '303' PARTICULIERS
         */
        codeAgentEconomique: string;
        /**
         * **Identifiant tiers**
         *
         * **Définition :** Numéro d'identification du tiers dans le SI d'un Etablissement Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         *
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers: number;
        situationFinanciere: SituationFinanciere;
        /**
         * ####Code etablissement banque entite juridique
         *
         * **Définition :**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         * Code interbancaire
         *
         * Nomenclature des sièges des Etablissements du Réseau des Caisses d'Epargne
         *
         * Codif des Caisses: 1er car= 1 et le 5ème = 5
         *
         * **Exemples :**
         *
         * | Code | Libellé |
         * | - | - |
         * | 17515 | CE Ile de France |
         * | 16275 | CE Nord France Europe |
         * | 43199 | Crédit Foncier de France (CFF) |
         */
        codeEtablissement: string;
        /**
         * Code devise ISO 4217 alpha-3
         *
         * Exemple :
         * EUR
         */
        codeDeviseISO4217a3: string;
        /**
         * 1 minimum
         */
        dureeViePersonneMorale: number;
        /**
         * Détermine un type de pièce justifiant d'une activité/situation professionnelle
         * '00'       EXEMPLAIRE DES STATUTS CERTIFIE CONFORME
         * '01'       EXEMPLAIRE DU JOURNAL OFFICIEL
         * '02'       EXTRAIT DE DELIBERATION SIGNE
         * '03'       COPIE CERTIFIE CONFORME DU J.O
         * '04'       AGREMENT DE L'ASSOCIATION
         * '05'       COPIE DE L'ACTE AUTHENTIQUE OU TESTAMENT
         * '06'       STATUTS DE LA DELEGATION DEPARTEMENTALE
         * ...
         */
        codePieceJustificative: string;
        /**
         * 'P'        Personne physique
         * 'M'        Personne morale
         * 'A'        Association
         */
        codeTypeTiers: string;
        /**
         * Mode d'imposition auquel est assujéti un professionnel entreprise ou entrepreneur individuel.
         * Valeurs :
         *
         * - '1'        Forfait
         * - '2'        Réel
         * - '3'        Impôt sur les sociétés (IS)
         * - '4'        Sans régime particulier
         * - '5'        Réel simplifié
         * - '6'        Impôt sur le revenu des personnes physiques (IRPP)
         */
        codeRegimeFiscal: string;
        /**
         * Représente le code cotation
         */
        codeCotation: string;
        /**
         * Indique le type de relation de la personne vis à vis de l'Etablissement GCE ou du réseau CE.
         * Permet de déterminer le personnel de l'Etablissement et leur famille.
         *
         * Les valeurs '6' et '9' concernent des personnes morales
         */
        codeAppartenanceReseau: string;
        adresse: AdressePro;
        /**
         * Détermine le statut dans une famille de catégorie juridique donnée : correspond aux 2 derniers caractères du code catégorie juridique INSEE sur 4 caractères.
         */
        codeCategoJuridi2DerCaracteres: string;
        /**
         * **Code famille categorie juridique INSEE**
         */
        codeFamilleCategorieJuridique: string;
        codeGuichetRisque: number;
        referenceExterneEDS: number;
        eligibiliteTiers: string;
        /**
         * deux chiffre
         */
        codeTypeRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: string;
        numeroImmatriculation: string;
        sigle: string;
        etablissement: EtablissementPro;
        listeMessageFonctionnel: Array<MessageFonctionnel>;
        /**
         * Mot clé pour recherche OU4A
         */
        listeMotCle: Array<string>;
        /**
         * Numero de chrono d'un pro
         */
        numeroChrono: number;
        /**
         * Code tête de groupe
         *
         * Précise la situation d'appartenance de la personne vis à vis d'un groupe (grappage)
         * Entité économique formée par un ensemble de sociétés qui sont soit des sociétés contrôlées par une même société, soit cette société est contrôlante.
         *
         * Valeurs :
         * - '1'        Personne tête de groupe (grappage)
         * - '2'        Personne filiale du groupe (Via lien inter-personnes)
         * - '3'        Personne n'appartenant pas à un groupe
         * - '4'        Personne appartenant à un groupe
         */
        codeTeteGroupe: string;
        troisDerniersCaracteresNAF: string;
        /**
         * **Code famille NAF INSEE**
         *
         * **Définition :** Cette rubrique permet de définir les deux premiers caractères du code NAF qui correspond à la famille de code activité exercée par le professionnel
         */
        codeFamilleNAFINSEE: string;
        activiteEconomiqueReelleProfessionnelle: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEconomique: string;
        /**
         * permet d'aiguiller vers les QR concernées.
         * - 0 : Personne connue comme client
         * - 1 : Personne connue comme Tiers
         * - 2 : Personne connue comme prospect
         * - 3 : Personne connue comme Prospect enrichi
         */
        codeTypePersonne: string;
        prospect: Prospect;
        /**
         * indicateur de droits au compte
         */
        indicateurDroitAuCompte: string;
        professionnelImmobilier: ProfessionnelImmobilier;
        dateClotureJuridique: string;
        /**
         * à partir de la V17.01 seulement
         * - Si 'T' : mise à jour complète avec les Immatriculations
         * - Si 'I' : mise à jour des Immatriculations seulement
         * - Sinon mise à jour de corporateInformation sans les Immatriculations
         */
        codeMajImmatriculation: string;
        listeImmatriculation: Array<Immatriculation>;
        /**
         * Référence d'identification des entités juridiques (LEI : LEGAL ENTITY IDENTIFIER) effectuant des transactions financières.
         */
        identifiantLei: string;
        /**
         * Classification de la personne selon le règlement EMIR / European Market and Infrastructure Regulation.
         * Attribut porté par une contrepartie effectuant une transaction sur le marché des dérivés
         */
        codeEmir: string;
        /**
         * Autorisation donnée par le Client pour que l'Etablissement puisse effectuer des déclarations à sa place (LEI, classification EMIR).
         * 'O'        Etab autorisé à effectuer les déclarations
         * 'N'        Etab non autorisé à effectuer les déclarations
         */
        indicateurDelegationDeclaration: string;
        /**
         * Détermine l'état de blocage d'une personne dans la table Vigilance VAO.
         * 'N'        non bloqué
         * 'B'        bloqué
         * 'D'        débloqué
         */
        codeBlocageVao: string;
        /**
         * indique si la personne "possède" un indice d'américanité
         */
        indiceAmericanite: string;
        /**
         * Cette rubrique indique si le code de classification des personnes morales est renseigné ou non
         */
        indicateurPresenceClassif: string;
        /**
         * Code associé à la branche d'activité.
         * Codification pour l'ensemble des caisses.
         * Donnée relative aux personnes morales et entrepreneurs individuels, basée sur une approche commerciale ou sectorielle, permettant de paramétrer des regroupements fonctionnels de codes NAF.
         * Format XX9999
         */
        brancheActivite: string;
        /**
         * Indicateur Prospect restreint
         */
        indicProspectRestreint: boolean;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes : '0' Actif '1' Cloturé
         */
        codeEtatPersonne: string;
        /**
         * Valeurs possibles : '0' Personne connue comme client '1' Personne connue comme tiers '2' Personne connue comme prospect '3' Personne connue comme prospect enrichi
         */
        typeRelation: string;
    }
    class AdressePro {
        /**
         * Numéro d'identification de l'adresse en tant que localisation géographique.
         */
        identifiant: number;
        /**
         * Détermine la nature/finalité d'une adresse.
         * Valeurs :
         * - '1'        adresse légale (domicile) localisation pour un lieu d'activité
         * - '4'        adresse communication (correspondance)
         * - '6'        adresse spéciale communication
         */
        codeType: string;
        /**
         * Détermine si la personne (client) accepte de recevoir du courrier
         * Valeurs :
         * '0'        envoi de courrier
         * '1'        pas d'envoi de courrier
         */
        indicateurEnvoiCourrier: string;
        /**
         * Permet de savoir qui est le possesseur de l'adresse.
         *
         * Valeurs :
         * - 1          PERSONNE
         * - 2          LIEU D'ACTIVITE
         * - 3          ENTITE JURIDIQUE          (pas géré)
         * - 4          ELEMENT DE STRUCTURE      (pas géré)
         */
        codeTypeLieu: string;
        /**
         * Libellé de la ligne 2 d'une adresse normée AFNOR.
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identification du destinataire.
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2AdresseAFNOR: string;
        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR.
         * La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution).
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment (entrée, bâtiment, bloc, tour etc.)
         */
        ligne3AdresseAFNOR: string;
        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR.
         * La ligne 4 permet d'identifier la voie de destination.
         * Peut comprendre, le numéro dans la voie, type et nom de voie, le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit, un service X, une boîte postale ou un numéro de CEDEX.
         */
        ligne4AdresseAFNOR: string;
        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR.
         * La ligne 5 permet d'identifier la destination.
         * Peut comprendre, le nom d'un quartier, d'un lieu-dit, d'un hameau, le nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu-dit et possédant plusieurs voies internes.
         */
        ligne5AdresseAFNOR: string;
        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR.
         * La ligne 6 permet d'identifier la destination.
         * Peut comprendre, le numéro de code postal et nom de la localité, le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX.
         */
        ligne6AdresseAFNOR: string;
        /**
         * Indique le numéro de la voie
         */
        numeroVoiePTT: number;
        /**
         * Numéro code postal PTT
         */
        codePostalPTT: string;
        /**
         * Détermine le quartier d'une adresse
         */
        codeQuartier: string;
        /**
         * Numéro de la tournée du facteur
         */
        numeroTourneeFacteur: number;
        /**
         * Numéro de téléphone associé à une adresse
         */
        numeroTelephoneAdresse: string;
        /**
         * Identifie une commune / lieu-dit selon la nomenclature INSEE.
         */
        codeInseeLocalite: string;
        /**
         * code validité de l'adresse
         * "00"       adresse correcte
         * "XY"       adresse forcée
         *            X : contrôle analyse syntaxique
         *            Y : contrôle analyse géographique
         */
        codeValiditeAdresse: string;
        /**
         * '0'        Pas en liste rouge
         * '1'        En liste rouge
         */
        codeExistenceListeRouge: string;
        /**
         * numero du fax
         */
        numeroFax: string;
        /**
         * '1'        Ne détient pas de téléphone
         */
        indicateurDetentionTelephone: string;
        /**
         * Cette donnée précise à quoi correspond le téléphone
         */
        commentaireTelephone: string;
        /**
         * Indique le numéro de la voie du fichier HEXAVIA pour les voies francaises répertoriées.
         */
        numeroVoieHexavia: number;
        /**
         * Code postal pour la France et l'étranger :
         * Sur 5 caractères pour la France
         * Sur 9 caractères pour l'étranger : peut être en alphanumérique
         */
        codePostalFranceEtEtranger: string;
        /**
         * Libellé localité
         */
        libelleInseeLocalite: string;
        /**
         * identifie un pays selon la nomenclature AFNOR
         */
        codePaysISO: string;
        /**
         * ' '        Client ne détient pas de Minitel.
         * '1'        Client accède par un Minitel.
         * '2'        Client accède par autre chose que le Minitel
         */
        codeAccesMinitel: string;
        /**
         * Identifie un pays ou territoire selon la norme INSEE.
         */
        codeInseePays: string;
    }
    class EtablissementPro {
        /**
         * Libellé libre du lieu d'activité.
         */
        designationCourteLieuActivite: string;
        /**
         * Désignation longue du lieu activité. Elle est utilisée pour l'impression du volet un de l'adresse. Elle correspond :
         *
         * aux nom et prénom pour la personne physique
         * à la raison sociale pour la personne morale.
         */
        designationLongueLieuActivite: string;
        /**
         * Date de début d'exploitation de l'établissement.
         */
        dateDebutExploitationLieuActivite: string;
        /**
         * Résidents :
         *
         * Personnes physiques ayant leur principal centre d'intérêt en FRANCE
         * Fonctionnaires et autres agents publics français en poste à l'étranger
         * Personnes morales françaises ou étrangères pour leur établissement en FRANCE La France est définie comme suit :
         * France métropolitaine (avec la principauté de MONACO )
         * DOM (avec Saint-Pierre et Miquelon))
         * TOM (avec Mayotte)..
         * Non résidents :
         *
         * Personnes physiques ayant leur principal centre d'intérêt à l'étranger
         * Fonctionnaires et autres agents publics étrangers en poste en FRANCE
         * L'étranger est défini comme suite :
         *
         * Pays autre que la France (y compris les Etats dont l'Institut d'Emission est lié au Trésor Français par un compte d'opérations).
         * La distinction entre les deux types de non-résidents
         * Non-résident zone euro :
         * Personnes appartenant à un un Etat membre de la zone de monnaie unique (EMUM),hors-France,
         *
         * Non-résident hors zones euro :
         * Personnes appartenant à un autre pays étranger (non-EMUM).
         *
         * - '1' Résident
         * - '2' Non Résident
         */
        codeResident: string;
        /**
         * **Numéro complément SIRET établissement**
         *
         * **Définition :** Numéro interne de classement attribué à un établissement appartenant à une entreprise par l'INSEE Identifie un établissement au sein d'une entreprise répertoriée à l'INSEE.
         * Complète le SIREN pour constituer le SIRET
         *
         * **Format :**
         * numéro d'ordre séquentiel X4
         * clé de controle du numéro SIRET : algo Luhn "1-2"
         */
        numeroComplementSIRET: string;
        dateFinExploitation: string;
    }
    class MessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur. Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         *
         * la partie utile du code entité (sur 4 car.) .
         * pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé) .
         * pour un segment, elle correspond aux 4 carac. codifiant le segment.
         * le rang de la rubrique (sur 3 car.)
         * le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un class (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
    class Prospect {
        /**
         * Détermine un segment de clientèle dans une typologie donnée :
         * AC : Activation Clientèle Particuliers
         * AP : Activation Clientèle Professionnel
         * FC : Fréquence Client Personne
         * FP : Fréquence Client PRO
         * FR : Fréquence Client Relation
         * MN : Marché national
         * SA : Activation Clientèle V2
         * SU : Univers Client
         */
        codeSegmentation: string;
        /**
         * Numéro d'identification du portefeuille de clientèle
         * Regroupement de la clientèle pour la gestion commerciale :
         * Ensemble de relations économiques affecté ou non à un poste fonctionnel ou à une agence.
         * Une relation peut être hors portefeuille
         */
        numeroPortefeuille: number;
        /**
         * Détermine la typologie de segmentation clientèle.
         * Correspond au 2 premiers caractères du code   segmentation sur 8 caractères
         * Types :
         * - Activation Clientèle. Segmentation comportementale des Particuliers
         * - Fréquence : Profils client portant des objectifs commerciaux
         * - Code marché : Segmentation des secteurs d'activités
         * - Univers Client.  Profil équipement Client
         * "AC"       Activation Clientèle Particulier
         * "AP"       Activation Clientèle Professionnel
         * "FC"       Fréquence Client
         * "FP"       Fréquence PRO
         * "FR"       Fréquence Relation
         * "MN"       Marché national
         * 'SL'       Spécifique VAO pour progiciel Norkom (i-BP)
         * 'SA'       Activation Clientèntèle v2
         * 'SU'       Univers de détention
         */
        codeTypeSegmentation: string;
    }
    class ProfessionnelImmobilier {
        /**
         * Réponse arbre de décision
         * Indicateur de réponse à la première question :
         * Socièté Civile Immobilière Patrimoniale
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurSteCivileImmoPatrimoniale: boolean;
        /**
         * Réponse arbre de décision PIM
         * Indicateur de réponse à la deuxième question :
         * Société d'exploitation
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurSocieteExploitation: boolean;
        /**
         * arbre de décision PIM
         * Indicateur de réponse à la question 3a :
         * Structure dédiée à une opération immobilière maximum
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurStrDedieeA1OpeImmoMax: boolean;
        /**
         * arbre de décision PIM
         * Indicateur de réponse à la question 3b :
         * Avec garantie prise sur l'actif immobilier financé
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurGarantieSurActifImmoFi: boolean;
        /**
         * Indicateur de réponse à la question 3c :
         * La Structure Assure-t-elle elle-même le remboursement
         * des concours ?
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurStrRemboursementDesConcours: boolean;
        /**
         * Arbre de décision PIM
         * Indicateur de réponse à la question 3d :
         * Exercice de plus d'une activité immobilière
         * 'N'        Non
         * 'O'        Oui
         * ' '        NC
         */
        indicateurExerciceSup1ActiviteImmo: boolean;
        /**
         * Classification des professionnels de l'immobilier
         * dans le cadre de la segmentation de la clientèle.
         * Code déterminé en fonction des réponses à l'arbre de
         * décision des Prof de l'Immobilier.
         * attribut du Prof mémorisé dans la table DU40 / appli
         * SEGMENTATION SADS
         *            Valeurs possibles :
         * 'ENFI'     Entrep. clientèles Non Financières de l'Immobilier
         * 'FSI'      Financements Spécialisés de l'Immobilier
         * 'EXP'      société d'EXPloitation
         * 'PAT'      société PATrimoniale
         * 'ENFI2'    autres professionnels de l'immobilier
         */
        codeCategorieProfImmo: string;
        /**
         * Timestamp de création du questionnaire PIM
         */
        timestampCreationQuestionnairePIM: string;
    }
    class Immatriculation {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire
         */
        identifiantPersonne: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe CE.
         */
        numeroChronoProfesionnel: number;
        /**
         * Détermine un registre officiel en France permettant l'immatriculation de personnes ou la publication d'informations
         * 01         RCS (Registre du commerce et des sociétés)
         * 02         RM (Répertoire des métiers)
         * 03         MSA (Mutualité sociale agricole)
         * 04         Publication journal officiel
         * 05         Préfecture
         * 06         Mairie
         * 07         Ordre des métiers
         * 08         Autres
         */
        codeTypeRegistre: string;
        /**
         * Numéro d'immatriculation à un registre officiel
         * d'un professionnel.
         *
         * Ce numéro peut être notamment :
         *  - un numéro RCS
         *  - un numéro Registre des métiers
         *  - un numéro d'inscription à la préfecture
         *  - un numéro d'inscription à la MSA
         *  - un ordre des métiers pour les professions libérales
         *  - un numéro de publication au JO
         */
        numeroImmatriculationRegistre: string;
        /**
         * Libellé du lieu d'inscription au registre.
         */
        lieuInscriptionRegistre: string;
        /**
         * Date à laquelle une personne est immatriculé en tant que professionnel auprès d'un organisme habilité.
         */
        dateImmatriculation: string;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Model du DAt pour le service parametre
     */
    class DepotATerme {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Code Devise
         */
        codeDevise: string;
        /**
         * Code Produit du DAT
         */
        codeProduit: string;
        /**
         * C'est le libellé de désignation d'un produit du catalogue DAT.
         * Exemples : "Comptes A Terme 1 mois"
         */
        libelleProduitCatalogueDAT: string;
        /**
         * Identifie un produit  selon la codification CENCEP.
         */
        codeProduitNational: string;
        /**
         * Indique pour un produit Caisse la méthode de calcul d'intérêts à utiliser.
         */
        codeMethodeCalculInterets: string;
        /**
         * Regroupe les différentes familles de DAT selon leur catégorie. Elle est déterminante pour l'utilisation de certaines
         * fonctionnalités accessibles qu'à des utilisateurs spécialisés.
         */
        codeCategorieDAT: string;
        /**
         * Signale que tout compte ouvert sous le produit DAT concerné ne peut pas être négocié par le client.
         */
        indrProduitDATNegociable: boolean;
        /**
         * Précise dans quelle unité de temps est exprimée la durée minimum autorisée d'un produit.
         */
        codeUniteDeDureeMinimum: string;
        /**
         * Précise le nombre d'unités de temps (UCTPDI) de la durée minimum autorisée d'un produit.
         */
        nbUnitesDureeMinimum: number;
        /**
         * Précise dans quelle unité de temps est exprimée la durée maximum autorisée d'un produit.
         * Pour le nombre voir la rubrique UPJPDJ
         */
        codeUniteDeDureeMaximum: string;
        /**
         * Précise le nombre d'unités de temps (UCTPDJ) de la la durée maximum autorisée d'un produit.
         */
        nbUnitesDureeMaximum: number;
        /**
         * Pour le CTRCEMPL :
         * Détermine la base de calcul du nombre de jours d'intérêts par an (référence).
         *
         * Cette rubrique est délocalisée ( sa valeur et son libellé précisés dans le pavé "valeurs possibles" sont affichés sur les écrans )
         * et SEULES les 2 valeurs "1" et "2" sont permises.
         * La méthode de calcul employée a été étudiée par le service financier des Caisses et découle de la règle de l'anatocisme
         * ( si durée du compte supérieure à 1 an alors utilisation de la méthode de calcul des intéréts capitalisés,
         * sinon utilisation de la méthode des intéréts simples).
         *
         * Pour le CTR de SECLIN :
         * Détermine la base de calcul du nombre de jours d'intéréts par an ainsi que l'utilisation ou non de la règle d'anatocisme .
         * Pour des raisons techniques et de délai (urgence), 4 valeurs ont été rajoutées dans cette rubrique.
         * Ceci afin d'éviter de modifier des zones de communication (uctpcj à ajouter) et une vingtaine de programmes.
         *
         * valeur 'A' Jours réels et méthode calcul int. simples
         * valeur 'B' 360 jours et méthode calcul int. simples
         * valeur 'C' Jours réels et méthode calcul int.capitalis
         * valeur 'D' 360 jours et méthode calcul int. capitalis.
         *
         * VALEURS POSSIBLES :
         * '1'        Jours réels, formule calcul selon durée du contrat
         * '2'        En 360 jours, formule calcul selon durée du contrat
         * 'A'        Jour réels, taux nominal, formule intérêts simples
         * 'B'        En 360 jours, taux nominal, form. intérêts simples
         * 'C'        Jour réels, taux actuariel, form. intér. composés
         * 'D'        En 360 jours, tx actuariel, form. intér. composés
         */
        codeBaseCalculJoursAnnees: string;
        /**
         * Pour le CTRCEMPL :
         * Détermine la base de calcul du nombre de jours d'intérêts par mois (durée).
         *
         * Cette rubrique est délocalisée ( sa valeur et son libellé précisés dans le pavé "valeurs possibles" sont affichés sur les écrans )
         * et SEULES les 2 valeurs "1" et "2" sont permises.
         * La méthode de calcul employée a été étudiée par le service financier des Caisses et découle de la règle de l'anatocisme
         * ( si durée du compte supérieure à 1 an alors utilisation de la méthode de calcul des intérêts capitalisés,
         * sinon utilisation de la méthode des intérêts simples).
         * > si uctvbm = 2 => tt les mois = 30 jours
         *
         * Pour le CTR de SECLIN :
         * Détermine la base de calcul du nombre de jours d'interets par an ainsi que l'utilisation ou non de la
         * règle d'anatocisme .
         * Pour des raisons techniques et de delai (urgence), 4 valeurs ont été rajoutées dans cette rubrique.
         * Ceci afin d'eviter de modifier des zones de communication (uctpcj à ajouter) et une vingtaine de programmes.
         *
         * valeur 'A' Jours réels et methode calcul int. simples
         * valeur 'B' 360 jours et methode calcul int. simples
         * valeur 'C' Jours réels et methode calcul int.capitalis
         * valeur 'D' 360 jours et methode calcul int. capitalis.
         *
         * VALEURS POSSIBLES :
         * '1'        Jours réels, formule calcul selon durée du contrat
         * '2'        En 360 jours, formule calcul selon durée du contrat
         * 'A'        Jour réels, taux nominal, formule intérêts simples
         * 'B'        En 360 jours, taux nominal, form. intérêts simples
         * 'C'        Jour réels, taux actuariel, form. intér. composés
         * 'D'        En 360 jours, tx actuariel, form. intér. composés
         */
        codeBaseCalculJoursMois: string;
        /**
         * Détermine la périodicité des paiements d'intérêts intermédiaires d'un contrat de placement.
         */
        codePeriodiciteInterets: string;
        /**
         * Détermine la périodicité des revenus d'un placement
         *
         * VALEURS POSSIBLES :
         * ' '        Sans Objet
         * 'M'        Tous les mois
         * 'T'        Tous les trois mois
         * 'S'        Tous les six mois
         * 'A'        Tous les ans
         */
        codePeriodiciteRevenus: string;
        /**
         * Précise si le renouvellement automatique du compte DAT à échéance s'effectue au même taux ou à taux courant.
         *
         * * VALEURS POSSIBLES :
         * '0'        Sans Objet
         * '1'        Au même taux
         * '2'        Au taux courant
         */
        codeRenouvellementAutomatique: string;
        /**
         * Il s'agit du nombre maximum de renouvellements d'un contrat (ex compte à terme).
         */
        nbLimiteRenouvAutomatique: number;
        /**
         * Taux maximum autorisé pour la rémunération d'un contrat de placement.
         */
        tauxMaxRemunerationContrat: number;
        /**
         * Montant nominal minimum de souscription pour un produit.
         * Ce montant minimum est paramétré dans chaque produit ors de la création du produit dans le catalogue (voir UCTVPD).
         */
        montantNominalSouscription: number;
        /**
         * Montant nominal du plafond de souscription du produit.
         * Ce montant maximum est paramétré dans chaque produit lors de la création du produit dans le catalogue (voir UCTVPD).
         */
        montantNominalSouscriptionMax: number;
        /**
         * Précise le délai de déclenchement d'un avis d'échéance envoyé au client avant son terme.
         * Cette donnée est paramétrable pour les DAT lors de la création du produit dans le catalogue.
         */
        nbJourAvantEcheanceAvis: number;
        /**
         * Indique le délai d'édition de l'avis destiné au client (relevé annuel de situation du contrat) correspondant au nb de jours à courir
         * à compter du 1er janvier suivant l'exercice.
         * Cette donnée est paramétrable lors de la création d'un produit dans le catalogue.
         *
         * Pour tous les produits DAT (non CAT/PEL), sa valeur est zéro.
         * Pour tous les produits DAT (CAT/PEL), sa valeur est strictement supérieure à zéro, et strictement inférieur à 31.
         * Elle indique le nombre de jours calendaires à courrir après le 1er janvier.
         */
        nbJourDelaiEditionRlvApresZero: number;
        /**
         * Nombre de jours avant le 01 janvier de l'année civile où le courrier annuel destiné au client est édité.
         * Ce courrier est la plupart du temps destiné à donner au client un relevé ou une situation de son contrat.
         *
         * Cette donnée est paramétrable lors de la création d'un  produit dans le catalogue.
         *
         * Pour tous les produits DAT, sa valeur est à zéro
         */
        nbJourDelaiEditionRlvAvantZero: number;
        /**
         * indique le délai d'édition de l'avis de renouvellement  destiné au client. Il correspond au nombre de jours à courir avant le
         * renouvellement du contrat DAT. L'avis sera donc édité avant renouvellement.
         *
         * Cette donnée est paramétrable lors de la création d'un produit dans le catalogue.
         */
        nbJourAvantRnRlvAvis: number;
        /**
         * Signale la disponibilité de toutes les opérations sur un produit donné.
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * Si UCGVTT = 'O' ou 'N' UCGVDE, UCGVRU, UCGVEH, UCGVBD, UCGVCS, UCGVED, UCGVER, UCGVEE ont la même valeur.
         *
         * * VALEURS POSSIBLES :
         * ' '          disponibilité de certaines opérations
         * 'O'          disponibilité de toutes les opérations
         * 'N'        indisponibilité de toutes les opérations
         */
        indrTtesOperationsDispo: string;
        /**
         * Signale la disponibilité de l'opération d'ouverture ou de dépôt sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpOuvDepotDispo: boolean;
        /**
         * Signale la disponibilité de l'opération de rupture ou de remboursement sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpRuptureRbtDispo: boolean;
        /**
         * Signale la disponibilité de l'opération de cession ou rachat sur un produit donné (Titres Créances Nég.).
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpCessionRachatDispo: boolean;
        /**
         * Signale la disponibilité de l'opération de portage sur un produit donné (Titres Créances Nég.).
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpPortageDispo: boolean;
        /**
         * Signale la disponibilité de l'opération d'échéance sur un produit donné (traité en temps différé).
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpEcheanceDispo: boolean;
        /**
         * Signale la disponibilité de l'opération modification de domiciliation (bureau dom) sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpModifBdDispot: boolean;
        /**
         * Signale la disponibilité de l'opération modification de compte associé (de revenus ou autre) sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpModifCptAssocieDispo: boolean;
        /**
         * Signale la disponibilité de l'opération extourne d'ouverture ou de dépôt sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpExtourneOuvDispo: boolean;
        /**
         * Signale la disponibilité de l'opération extourne de rupture ou de remboursement sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpExtourneRuptureDispo: boolean;
        /**
         * Signale la disponibilité de l'opération extourne de cession sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         * Si UCGVTT = 'O' alors UCGVDE = 'O'
         * Si UCGVTT = 'N' alors UCGVDE = 'N'
         * Si UCGVTT = ' ' alors UCGVDE = 'O' ou 'N'
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpExtourneCessionDispo: boolean;
        /**
         * Signale la disponibilité de l'opération extourne de portage sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpExtournePortageDispo: boolean;
        /**
         * Signale la disponibilité des opérations d'extourne d'échéance et de PII sur un produit donné.
         *
         * Cet indicateur est paramétrable lors de la création d'un produit dans le catalogue (voir UCTVPD).
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrOpExtourneEchPIIDispo: boolean;
        /**
         * Date à laquelle un produit DAT peut être commercialisé.
         * Elle permet ainsi de paramétrer un produit par anticipation sans pour autant être disponible dans les agences du réseau.
         */
        dateLancementCampagneCommDAT: Date;
        /**
         * Précise dans quelle unité de temps est exprimée la durée à respecter après échéance avant de purger les comptes faisant partie de ce produit (UCTPPF).
         * (pour le nombre voir la rubrique UPJPDP).
         */
        codeUniteDureePurgeApresEch: string;
        /**
         * Précise le nombre d'unités de temps (UCTPDP) de la durée à respecter après échéance avant de purger les comptes faisant partie de ce produit (UCTPPF).
         */
        nbUniteDureePurgeApresEch: number;
        /**
         * Ce code permet de déterminer le type de taux du contrat CAT (Fixe ou Progressif).
         *
         * * PLAGE DE VALEUR :
         * 'F'        Taux fixe
         * 'P'        Captio  (tx progressif)
         * 'Q'        Capciel (tx progressif)
         * 'G'        Taux Progressif (PII, sans PII)
         * 'R'        Taux révisable
         * 'I'        Taux Fixe avec Bonus Inflation
         * 'T'        TRAAB (QUADRETO)
         * 'N'        Renouvelable BDR
         */
        typeDeTaux: string;
        /**
         * Libellé du type de taux déterminer précédemment
         */
        libelleTypeDeTaux: string;
        /**
         * Identifie les produits commercialisables sur Internet.
         *
         * * VALEURS POSSIBLES :
         * 'O'          disponibilité
         * 'N'        indisponibilité
         *
         * A savoir 'O' = True // 'N' = FALSE
         */
        indrCommercialInternet: boolean;
        /**
         * Date de fin de commercialisation du produit sur Internet.
         */
        dateFinCommercialInternet: Date;
        /**
         * Identifiant Produit Service : IDEGPS
         */
        identifiantProduitService: number;
        /**
         * Acte de gestion
         * Code sous famille acte de gestion + code acte de gestion
         */
        acteGestion: string;
        constructor();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    class CodeMarche {
        /**
         * Code Marché de la personne.
         *
         * Exemple :
         * MN 101102 /  Particuliers : Particuliers non Professionnels
         * MN 102102 /  Professionnels : Professions Libérales
         * MN 206101 /  Professionnels Privé : Promoteurs
         */
        codeMarche: string;
        /**
         * Libellé de désignation d'un segment clientèle.
         */
        libelleLongCodeMarche: string;
        /**
         * Libellé court de la segmentation clientèle pour affichage sur le poste de travail.
         * Libellé à caractère confidentiel pour ne pas être interprété par la clientèle.
         */
        libelleCourtCodeMarche: string;
        /**
         * Ce libellé permet de restituer le libellé de la famille du code marché.
         *
         * Exemple :
         * 101 : Particuliers
         */
        libelleFamilleCodeMarche: string;
        constructor();
    }
    class DonneeIdentification {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou
         * un Etablissement du réseau CE est répertoriée par la
         * Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le
         *  SI d'un Etablissement.
         *  Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
        /**
         * Détermine le type de personnalité juridique de la personne.
         *
         * Valeurs :
         * 1=personne physique
         * 2=personne morale / assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Libelle du code qui indique le type de personnalité juridique de la personne.
         */
        libellePersonnaliteJuridique: string;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
         *
         *            Valeurs :
         * '0'        Actif
         * '1'        Cloturé
         */
        codeEtatPersonne: string;
        /**
         * Détermine la relation de la personne connue avec
         * l'Etablissement :
         * - client : personne détentrice de contrat(s) de produit / service
         * - tiers : personne non 'client' en lien avec une personne 'client' - lien particulier ou professionnel (ex : participant à un contrat, représentant légal)
         * - prospect : personne n'étant ni client ni tiers
         *
         * Valeurs possibles :
         * '0'        Personne connue comme client
         * '1'        Personne connue comme tiers
         * '2'        Personne connue comme prospect
         */
        codeTypeRelation: string;
        /**
         * Libelle du code qui indique le type de relation de la personne avec l’établissement
         */
        libelleTypeRelation: string;
        /**
         * Date de première entrée en relation d'une personne
         * donnée avec l'Etablissement (CE).
         */
        dateEntreeRelation: string;
        constructor();
    }
    class Identification {
        donneeIdentification: DonneeIdentification;
        lutteAntiBlanchiment: LutteAntiBlanchiment;
        listMarche: Array<CodeMarche>;
        suiviComercial: SuiviCommercial;
        constructor();
    }
    class LutteAntiBlanchiment {
        /**
         * Code alerte VAO. Il indique si une alerte est détectée lors du filtrage.
         * Valeurs :
         * - 'O' : Alerte
         * - 'N' : Pas d'alerte
         */
        codeAlerteVAO: boolean;
        /**
         * Message VAO. Il permet de de préciser à l'agent s'il y a alerte ou non sur la personne filtrée.
         */
        messageAlerteVAO: string;
        constructor();
    }
    class SuiviCommercial {
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Correspond à un type : siège, agence, service, poste fonctionnel, ...
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantEDSSuiviCommercial: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente.
         *
         * Valeurs :
         * '001'      poste fonctionnel
         * '002'      service
         * '003'      agence
         * '004'      unité commerciale
         * '005'      secteur commercial
         * '006'      groupe commercial
         * '007'      direction
         * '008'      siège
         * '009'      entité administrative
         * '010'      GAB
         */
        typeEDSSuiviCommercial: string;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceExterneEDSSuiviCommercial: number;
        /**
         * Alimenté uniquement pour les EDS de type Poste fonctionnel (001)
         *
         * Numéro d'identification d'un agent au sein d'un établissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Numéro chrono attribué par le système, pour les établissements.
         * Référence unique dans MYSYS.
         */
        identifiantAgent: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation :
         *      - Si l'EDS n'est pas un Poste fonctionnel, du libellé court du type d'EDS et de la désignation de l'EDS.
         *      - Si c'est un Poste fonctionnel, du nom et du prénom de l'agent titulaire du Poste fonctionnel.
         */
        designationCourteEDS: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation :
         *      - Si l'EDS n'est pas un Poste fonctionnel, du libellé long du type d'EDS et de la désignation de l'EDS.
         *      - Si c'est un Poste fonctionnel, de la civilité, du nom et du prénom de l'agent titulaire du Poste fonctionnel.
         */
        designationLongueEDS: string;
        constructor();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    class InfosVersementIndexTaux {
        /**
         * CODE INDEX MARCHE
         */
        codeIndexTauxReference: string;
        /**
         * LIBELLE INDEX MARCHE
         */
        libelleIndexTauxReference: string;
        /**
         * INDR AUTOR INDEX TAUX PRODUIT
         */
        indrAutorisationIndexTauxPdt: string;
        /**
         * CODE UTILISATEUR CREATION
         */
        codeUtilisateurCreation: string;
        constructor();
    }
    class InfosFiscalites {
        /**
         * Code option régime général
         */
        codeOptionRegimeGeneral: string;
        constructor();
    }
    class InfosVersement {
        /**
         * LIBELLE PRODUIT CATALOGUE DAT
         */
        libelleProduitCatalogueDAT: string;
        /**
         * TYPE VERSEMENT INTERETS
         */
        typeVersementInterets: string;
        libelleTypeVersementInterets: string;
        /**
         * CD UNITE DUREE RETROACTIVITE M
         */
        uniteDureeRetro: string;
        /**
         * DUREE RETROACTIVITE METIER
         */
        nbUniteDureeRetro: number;
        /**
         * MT NOMINAL SOUSCRIPTION (MINIMUM)
         */
        montantNominalSouscriptionMin: number;
        /**
         * MT NOMINAL SOUSCRIPTION (MAXIMUM)
         */
        montantNominalSouscriptionMax: number;
        /**
         * INDR AUTOR SERVICE PRODUIT MET
         */
        autorisationServiceDAT: boolean;
        /**
         * MT NOMINAL MAXIMUM PRODUIT MET
         */
        montantMaxProduitMetier: number;
        /**
         * CODE SIGNE (+/-) *
         */
        codeSigneTauxMargeMin: string;
        /**
         * CODE SIGNE (+/-) *
         */
        codeSigneTauxMargeMax: string;
        /**
         * TAUX MARGE MINIMUM AUTOR METIER
         */
        tauxMargeMin: number;
        /**
         * TAUX MARGE MAXIMUM AUTOR METIER
         */
        tauxMargeMax: number;
        /**
         * LIBELLE CODE INDICE DE REFERENCE
         */
        libelleCodeIndiceReference: string;
        constructor();
    }
    class Informations {
        /**
         * Code de la devise du produit DAT choisi
         */
        codeDevise: string;
        /**
         * Code du produit DAT choisi
         */
        codeProduit: string;
        infosVersementIndexTaux: Array<InfosVersementIndexTaux>;
        infosFiscalites: InfosFiscalites;
        infosVersement: InfosVersement;
        constructor();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    class InformationEntiteTitulaire {
        compositionEntiteTitulaire: CompositionEntiteTitulaire;
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: CaracteristiqueEntiteTitulaire;
        constructor();
    }
    class CompositionEntiteTitulaire {
        listePersonneTitulaire: Array<PersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<PersonneEntiteTitulaire>;
        constructor();
    }
    class CaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne  V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *  - 1 Usage privé
         *  - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         *  - 1 mode simple
         *  - 2 mode joint entre époux
         *  - 3 mode joint entre tiers
         *  - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         *  - 0 Actif
         *  - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         */
        dateMAJEntiteTitulaire: string;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         *  - ' ' Non clôturé
         *  - '1' Plus d'activité bancaire
         *  - '2' Décédé
         *  - '3' Transféré
         *  - '4' Incident
         *  - '5' Indésirable
         *  - '6' Séparé
         *  - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        /**
         * Date de fermeture de l'entité titulaire.
         */
        dateClotureEntiteTitulaire: string;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         *  - 1 Mode indivision successorale
         *  - 2 Mode indivision conventionnel avec solidarité
         *  - 3 Mode indivision conventionnel sans solidarité
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
         * Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        /**
         * Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        /**
         * Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
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
         * Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire, du mode de composition et de l'usage.
         * Valeurs :
         *  * POUR ET MODE SIMPLE
         *  11 Désignation de la personne
         *  * POUR ET A USAGE PROFESSIONNEL
         *  21 Nom commercial
         *  22 Désignation courte de l'établissement
         *  23 Enseigne commerciale de l'établissement
         *  * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         *  PRIVE
         *  31 Mr ou Mme+nom patronymique Mr+prénom Mr
         *  32 Mr ou Mme+nom patronymique Mr+nom
         *  patronymique Mme+prénom Mme
         *  * POUR ET MODE JOINT ET USAGE PRIVE
         *  41 Désignation personne 1 ou désignation
         *  personne 2
         *  42 Désignation personne 2 ou désignation
         *  personne 1
         *
         *  99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
        /**
         * Type élément structure
         */
        typeElementStructure: string;
        /**
         * Référence externe du Domicilié à = EDS de domiciliation de l'entité titulaire
         */
        refExterneEDSDomiciliationET: number;
        /**
         * Référence externe du Géré par = EDS de gestion de l'entité titulaire
         */
        refExterneEDSGestionET: number;
        /**
         * identifiant élement de structure du guichet de l'entité titulaire
         */
        identifiantEDSGuichet: number;
        /**
         * Nouvelle identifiant élement de structure gestion de l'entité titulaire
         */
        identEDSGestionETNouveau: number;
        /**
         * Nouvelle identifiant élement de structure domicilation de l'entité titulaire
         */
        identEDSDomiciliationETNouveau: number;
        constructor();
    }
    class PersonneEntiteTitulaire {
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
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
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
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         *  - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         *  - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         *  - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
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
         * Indique quelle est la nature du lien Personne / Entité titulaire.
         * Valeurs :
         * PE : Lien Entité Titulaire / Personne
         * PR : Lien Entité Titulaire / Professionnel
         * LA : Lien Entité Titulaire / Lieu d'activité
         */
        natureLienET: string;
        /**
         * Pourcentage de Nue Propriété (valeur max 100,00 %)
         */
        pourcentageNuePropriete: number;
        /**
         * Pourcentage de pleine propriété (valeur max 100,00 %)
         */
        pourcentagePleinePropriete: number;
        /**
         * Pourcentage d'usufruit (valeur max 100,00 %)
         */
        pourcentageUsufruit: number;
        /**
         * Dénomination commerciale se rapportant à un fonds
         * de commerce exploité par une société ou assimilée
         * Nom commercial du professionnel. C'est la dénomination vis à vis de la clientèle. Elle peut correspondre à l'enseigne. Une société peut avoir un nom commercial différent pour chacun des fonds de commerce qu'elle exploite.
         * Exemples :  La Samaritaine, But ...
         */
        nomCommercialProfessionnel: string;
        /**
         * Enseigne du lieu d'activité d'un professionnel.
         * Signe/marque/appellation apposé sur un établissement commercial le distinguant des autres établissements. L'enseigne peut être commune.
         * Elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         * Exemple : Café du Commerce
         */
        enseigneCommercialeLieuActivite: string;
        /**
         * Libellé court du lieu d'activité du Professionnel.
         */
        designationCourteLieuActivite: string;
        /**
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         *  - Désignation courte du particulier si personne physique
         *  - Nom commercial si professionnel
         *  - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationTiers: string;
        /**
         * Personne titulaire à qui on a affecté l'adresse de l'entité titulaire. (Notion non applicable aux usufruitiers).
         */
        indicateurAffectationAdresse: boolean;
        constructor();
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    class ParticulierInformation {
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libellePaysNaissance: string;
        libelleCapaciteJuridique: string;
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
        codeInseeLocalite: string;
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
        statutPro: StatutPro;
        gestionPrivee: GestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        codeEtablissement: string;
        identifiantPersonne: number;
        nomEmployeur: string;
        codeResidenceFiscale: string;
        codeInseePaysResidenceFiscale: string;
        nif: string;
        constructor();
    }
    class GestionPrivee {
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: number;
        identifiantExterneEDS: number;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: number;
        identifiantExterneEDS2: number;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
        identifiantPersonne: number;
        codeEtablissement: string;
    }
    class StatutPro {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: number;
        identifiantInterneAgentModification: number;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
    class AdresseParticulier {
        numeroChronoLieuActivite: number;
        numeroChronoProfessionnel: number;
        codeTypeAdresse: string;
    }
    class Media {
        codeTypeMedia: string;
        portableEtranger: string;
        codeTypeMoyenContact: string;
        codeTypeUsageMedia: string;
        preferenceTelephone: string;
        clientAccepte: string;
        indicateurOppositionTelephone: string;
        referenceAccessMedia: string;
        indicateurPreferenceMedia: string;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Structure de données des paramètres d'appel de la ressource Informations en GET
     */
    class InformationsParametresGET {
        /**
         * code Etablissement Client
         */
        codeEtablissement: string;
        /**
         * Code Guichet client
         */
        codeGuichet: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Code de la devise du produit DAT choisi
         */
        codeDevise: string;
        /**
         * Code du produit DAT choisi
         */
        codeProduit: string;
        /**
         * Code du produit National du DAT choisi
         */
        codeProduitNational: string;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Structure de données des paramètres d'appel de la ressource Parametres en GET
     */
    class ParametreParametresGET {
        /**
         * code Etablissement Client
         */
        codeEtablissement: string;
        /**
         * Code Guichet client
         */
        codeGuichet: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Permet de savoir si on est sur une ouverture du produit en FAF ou en VAD
         */
        typeCanal: string;
        /**
         *  le code usage
         */
        codeTypeUsage: string;
        /**
         * Code entité vente Détermine une entité type de l'organisation effectuant un processus dans la gestion des dossiers de vente.
         * Typologie gérée dans la table DT3F / appli DOSSVENT Valeurs :
         * '1' AGENCE
         * '2' CRC
         * '3' E-AGENCE
         * '4' INTERNET
         */
        codeEntite: string;
        /**
         * Permet de savoir si c'est un DAT
         */
        indicateurDAT: boolean;
        /**
         * Permet de savoir si c'est un Quadreto
         */
        indicateurQuadreto: boolean;
        /**
         * Permet de savoir si c'est un Bon De Caisse
         */
        indicateurBDC: boolean;
        /**
         * Permet de savoir si c'est un CDN
         */
        indicateurCDN: boolean;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Sucre pour mocker ce qui n'est pas mockable dans le service agent
     */
    class ServiceAgentExtendedHelper {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Passerelle de récuperation du contexte d'AuthentificationInfo
         * @returns {ng.IPromise<MyWay.Services.Context.AuthentificationInfo>}
         */
        getAuthentificationInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        /**
         * Passerelle de récuperation du contexte de ParametresComptables
         * @returns {ng.IPromise<MyWay.Services.Context.ParametresComptables>}
         */
        getParametresComptables(): ng.IPromise<MyWay.Services.Context.ParametresComptables>;
        /**
         * Passerelle de récuperation d'un contexte donnée
         * @param {string} contexteKey - clé du contexte
         * @returns {ng.IPromise<any>}
         */
        getFromContext(contexteKey: string): ng.IPromise<any>;
        /**
         * Passerelle de récuperation des données delocalisées de la rubrique UCTPVI
         * @param {string} codeEtablissement
         * @returns {ng.IPromise<any>}
         */
        getDonneesDelocaliseesUCTPVI(codeEtablissement: string): ng.IPromise<any>;
        /**
         * Passerelle de récuperation des données delocalisées de la rubrique QU1C
         * @param {string} codeEtablissement
         * @returns {ng.IPromise<any>}
         */
        getDonneesDelocaliseesQU1C(codeEtablissement: string): ng.IPromise<any>;
        /**
         * Passerelle de récuperation des données delocalisées de la rubrique CODER3
         * @param {string} codeEtablissement
         * @returns {ng.IPromise<any>}
         */
        getDonneesDelocaliseesCODER3(codeEtablissement: string): ng.IPromise<any>;
        /**
         * Passerelle de récuperation des données delocalisées de la rubrique CODER3
         * @param {string} codeEtablissement
         * @returns {ng.IPromise<any>}
         */
        getDonneesDelocaliseesDU1V(codeEtablissement: string): ng.IPromise<any>;
        /**
         * Passerelle de récuperation des données delocalisées de la rubrique CODER3
         * @param {string} codeEtablissement
         * @returns {ng.IPromise<any>}
         */
        getDonneesDelocaliseesCODAPJ(codeEtablissement: string): ng.IPromise<any>;
        /**
         * Passerelle de passage d'étape LISA
         * @param {number} etape
         * @returns {ng.IPromise<MyWay.Services.Lisa.LisaCallbackResult>}
         */
        setEtapeLISA(etape: number): ng.IPromise<MyWay.Services.Lisa.LisaCallbackResult>;
        /**
         * Permet d'ajouter des données au contexte global
         * @param {string} cle
         * @param {string} valeur
         * @returns {ng.IPromise<any>}
         */
        setContexte(cle: string, valeur: any): ng.IPromise<any>;
        /**
         * Permet d'ajouter des données au contexte global
         * @param {string} cle
         * @param {string} valeur
         * @returns {ng.IPromise<any>}
         */
        setMainContexte(cle: string, valeur: any): ng.IPromise<any>;
        getLisaEnCours(): MyWay.Services.IPromesse<any>;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de récupération des infos d'une entreprise
     */
    class CorporateInformationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Method GET
         * Récupère les informations d'une entreprise
         * @param {string} codeEtablissement
         * @param {number} numeroPersonne
         * @returns {ng.IPromise<CorporateInformation>}
         */
        getCorporateInformation(codeEtablissement: string, numeroPersonne: number): ng.IPromise<CorporateInformation>;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de récupération des infos d'identification de la personne
     */
    class IdentificationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Method GET
         * Récupère les information d'une personne
         * @param {string} codeEtablissement
         * @param {number} numeroPersonne
         * @returns {ng.IPromise<Identification>}
         */
        getIdentification(codeEtablissement: string, numeroPersonne: number): ng.IPromise<Identification>;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de récupération d'informations de DAT
     */
    class InformationsDATService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Method GET
         * Récupère les information d'un DAT
         * @param {InformationsParametresGET} params - query params
         * @returns {ng.IPromise<Informations>}
         */
        getInformations(params: InformationsParametresGET): ng.IPromise<Informations>;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de récupération des infos de l'entité titulaire
     */
    class InformationsEntiteTitulaireService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Method GET
         * Récupère les information de l'entité titulaire
         * @param {string} codeEtablissement
         * @param {number} identifiantEntiteTitulaire
         * @returns {ng.IPromise<InformationEntiteTitulaire>}
         */
        getInformations(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<InformationEntiteTitulaire>;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service REST exposant le catalogue produit
     */
    class ParametreDatService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private catalogueDAT;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Method GET
         * Recupère le catalogue des DAT
         * @param {ParametreParametresGET} parametres
         * @returns {ng.IPromise<DepotATerme[]>} Liste de DAT
         */
        getCatalogueProduit(parametres: ParametreParametresGET): ng.IPromise<DepotATerme[]>;
    }
}

declare module myway.gestionEpargne.horsOffre.commun {
    /**
     * Service de récupération des infos d'un particulier
     */
    class ParticulierInformationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Method GET
         * Récupère les informations d'un particulier
         * @param {string} codeEtablissement
         * @param {number} numeroPersonne
         * @returns {ng.IPromise<ParticulierInformation>}
         */
        getParticulierInformation(codeEtablissement: string, numeroPersonne: number): ng.IPromise<ParticulierInformation>;
    }
}
