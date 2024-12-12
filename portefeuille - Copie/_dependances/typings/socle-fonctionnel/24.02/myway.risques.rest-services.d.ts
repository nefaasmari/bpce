
declare namespace Contentieux.RestServices.Commun.Constantes.Inject {
    namespace Angular {
        const $q: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
    }
    /**
     * Regroupement par domaine origine et tri alphabétique
     */
    namespace Service {
        const restService: string;
        const alerteService: string;
        const creanceService: string;
        const creanceParametre: string;
        const compteCCIEService: string;
        const dossierService: string;
        const echeancierService: string;
        const echeancierBDFService: string;
        const rechercheBDFService: string;
        const paiementService: string;
        const portefeuilleService: string;
        const smsService: string;
        const dossierNumeriqueService: string;
        const edsService: string;
        const personneService: string;
        const tiersService: string;
        const cddService: string;
        const cceService: string;
        const offreService: string;
        const creditGestionService: string;
        const creditConsoService: string;
        const syntheseService: string;
        const operationFinanciereService: string;
        const operationDiverseService: string;
        const boiteOutilService: string;
        const informationGarantiePGEService: string;
    }
}

declare namespace Contentieux.RestServices {
    var app: any;
}

declare namespace Contentieux.RestServices.Modeles {
    interface IAlerteProcedureCollective {
        numeroDossier: number;
        dateAlerte: string;
        portefeuille: string;
        identifiantEntiteTitulaire: string;
        libelleAlerte: string;
        exigible: number;
        montantCRD: number;
        motif: string;
        numeroPersonneGarantie: number;
        montantTotal: number;
    }
    interface IAlerteSurendettement {
        numeroDossier: number;
        dateAlerte: string;
        portefeuille: string;
        identifiantEntiteTitulaire: string;
        libelleAlerte: string;
        motifRejet: string;
    }
    interface IAlerteEcheancier {
        numeroDossier: number;
        identifiantEntiteTitulaire: string;
        dateAlerte: string;
        portefeuille: string;
        libelleAlerte: string;
        numeroPersonneGarantie: number;
        nombreAlerteDossier: number;
    }
    interface IAlerteActionPlanifiee {
        dateAlerte: string;
        portefeuille: string;
        identifiantEntiteTitulaire: string;
        libelleAlerte: string;
        commentaire: string;
        prioriteAlerte: string;
        numeroDossier: number;
    }
    interface IAffectationDossier {
        numeroDossier: number;
        dateAffectation: string;
        portefeuille: string;
        motif: string;
        identifiantEntiteTitulaire: string;
        montantContentieux: number;
        montantImpaye: number;
        montantCRD: number;
        exigible: number;
        montantTotal: number;
        numeroPersonneGarantie: number;
    }
    interface IAlerteParamEntree {
        codeAction: string;
        codeEtablissement: string;
        dateEvenement: string;
        codeTypeEvenement: string;
        codeSousTypeEvenement: string;
        ancienSousTypeEvenement: string;
        numeroEvenementSousType: number;
        numeroDossier: number;
        identifiantPortefeuille: number;
        codeValidationNote: string;
        codeEtape: string;
        codeProcedure: string;
        codeAgent: string;
        identifiantCreance: string;
        libelleEvenement: string;
        indicateurPresenceDetail: string;
        numeroPriorite: number;
    }
    interface IAlerteASupprimer {
        codeEtablissement: string;
        identifiantPortefeuille: number;
        codeTypeEvenement: string;
        codeSousTypeEvenement: string;
        dateEvenement: string;
        numeroSousTypeEvenement: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IUrl {
        /**
         * Url du service téléphonie
         */
        url: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICalculGarantie {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un dossier de créances de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * Numéro d'identification d'une créance de la clientèle dans la gestion du Recouvrement.
         */
        identifiantCreance: string;
        /**
         * Référence d'identification d'une garantie portant sur une créance, référence établie par le système de gestion du crédit/engagement
         */
        referenceExterneGarantie: string;
        /**
         * Montant d'appel en provisionnel d'une garantie BPI pour un prêt garanti par l'état.
         */
        montantAppelProvisionnel: number;
        /**
         * Montant d'appel final d'une garantie BPI pour un prêt garanti par l'état.
         */
        montantAppelFinal: number;
        /**
         * Détermine le sens comptable du mouvement / opération.
         * 'V'        Versement Complémentaire
         * 'R'        Reversement à BPI
         */
        codeSens: string;
        /**
         * Montant de la garantie mise en jeu lorsque le contrat est passé en contentieux
         */
        montantTotalMisEnJeu: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICaracteristiqueAgent {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Référence externe agent
         */
        identifiantAgent: number;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephoneAgent: string;
        /**
         * Adresse messagerie
         */
        adresseEMailAgent: string;
        /**
         * Date de fin de validité référentiel
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Nom usage Personne Physique
         */
        nomUsageAgent: string;
        /**
         * Premier prénom état civil Personne
         */
        prenomAgent: string;
        /**
         * Code civilité personne physique
         */
        civiliteAgent: string;
        /**
         * Nom famille Personne Physique
         */
        nomAgent: string;
        /**
         * Indic agent non nominatif
         */
        indicateurNonNominatifAgent: string;
        /**
         * Indic agent affectable
         */
        indicateurAffectableAgent: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICaracteristiqueCDD {
        engagementDomiciliation: IEngagementDomiciliation;
        informationsCDD: IInformationsCDD;
        opposition: IOpposition;
    }
    interface IEngagementDomiciliation {
        /**
         * Montant Engagement Domiciliation
         */
        montantEngagementDomiciliation: number;
        /**
         * Code respect engt domiciliation
         */
        codeRespectEngtDomiciliation: string;
        /**
         * Date dernier controle du contrat
         * Type date au format yyyy-MM-dd
         */
        dateDernierControleContrat: string;
        /**
         * Date prochain controle du contrat
         * Type date au format yyyy-MM-dd
         */
        dateProchainControleContrat: string;
        /**
         * Périodicite versement (EN MOIS)
         */
        periodiciteVersementEnMois: number;
    }
    interface IInformationsCDD {
        /**
         * Code devise ISO 4217 alpha-3
         */
        codeDevise: string;
        /**
         * Date Transformation en Euro
         * Type date au format yyyy-MM-dd
         */
        dateTransformationEnEuro: string;
        /**
         * Montant du solde en Francs
         */
        montantSoldeEnFrancs: number;
        /**
         * Solde compte / devise tenue cpte
         */
        soldeMinuteCompte: number;
        /**
         * Montant moyen
         */
        montantMoyen: number;
        /**
         * Montant du solde le plus bas
         */
        montantSoldePlusBas: number;
        /**
         * Code type calcul agios
         */
        reversementAgios: string;
        /**
         * Code paramétrage date de valeur
         */
        codeParametrageDateValeur: string;
        /**
         * Date début suppression date valeur
         * Type date au format yyyy-MM-dd
         */
        dateDebutSuppressionDateValeur: string;
        /**
         * Type d'Offre
         */
        typeOffre: string;
        /**
         * Date dernière opération
         * Type date au format yyyy-MM-dd
         */
        dateDerniereOperation: string;
        /**
         * Montant du solde réel en francs
         */
        montantSoldeReelEnFrancs: number;
        /**
         * Année de dernière domiciliation
         */
        anneeDerniereDomiciliation: string;
        /**
         * Mois de la dernière domiciliation
         */
        moisDerniereDomiciliation: string;
        /**
         * Montant domiciliation des revenus
         */
        montantDomiciliationDesRevenus: number;
        /**
         * Cumul réserves d'encaissement
         */
        cumulReservesEncaissement: number;
        /**
         * Montant du découvert
         */
        montantDecouvert: number;
        /**
         * Cumul Montants impayés prêts Credec
         */
        montantCumuleImpayePret: number;
        /**
         * Cumul Montants opérations ecartées
         */
        montantCumuleOperationEcartee: number;
        /**
         * Numéro offre souscrite
         */
        numeroOffre: number;
        /**
         * Indicateur habilitation PREDIC
         */
        indicateurHabilitationPredic: string;
        /**
         * Indicateur pertinence PREDIC
         */
        indicateurPertinencePredic: string;
        /**
         * Date situation PREDIC
         * Type date au format yyyy-MM-dd
         */
        dateSituationPredic: string;
        /**
         * Code couleur du mois
         */
        codeCouleurMois: string;
        /**
         * Code dernière note du mois
         */
        codeDerniereNoteMois: string;
        /**
         * Présence Franchise ou Seuil
         */
        presenceFranchiseSeuil: string;
        /**
         * Solde débiteur attendu devise orig
         */
        soldeDebiteurAttenduDeviseOrig: number;
        /**
         * Code état du produit/service
         */
        codeEtatProduitService: string;
        /**
         * Date ouverture du P/S
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureProduitService: string;
        /**
         * Date avenant P/S
         * Type date au format yyyy-MM-dd
         */
        dateAvenantProduitService: string;
        /**
         * Date clôture P/S
         * Type date au format yyyy-MM-dd
         */
        dateClotureProduitService: string;
        /**
         * Solde le plus haut / période
         */
        soldePlusHautParPeriode: number;
        /**
         * Code application remuneration compte
         */
        codeAppliRemunerationCompte: string;
        /**
         * Date début application rémunération
         * Type date au format yyyy-MM-dd
         */
        dateDebutAppliRemuneration: string;
        /**
         * Taux rémunération compte CDD
         */
        tauxRemunerationCompteCDD: number;
        /**
         * Indic gestion contentieuse
         */
        indicateurGestionContentieuse: string;
        /**
         * Indic compte inactif
         */
        indicateurCompteInactif: string;
        /**
         * Mt solde disponible CDD
         */
        montantSoldeDisponibleCDD: number;
        /**
         * Indic revenus réguliers
         */
        indicateurRevenusReguliers: string;
        /**
         * Type clôture CDD
         */
        typeClotureCDD: string;
        /**
         * Cumul Fonds mis à dispo. INSTP
         */
        cumulFondsMisADispoINSTP: number;
        /**
         * Cumul Réserves fonds INSTPAY
         */
        cumulReservesFondsINSTPAY: number;
    }
    interface IOpposition {
        /**
         * Code opposition complet
         */
        codeOpposition: string;
        /**
         * Libelle opposition
         */
        libelleOpposition: string;
        /**
         * Libelle opposition complement
         */
        libelleOppositionComplement: string;
        /**
         * Libelle information service ligne 1
         */
        libelleInfoService1: string;
        /**
         * Libelle information service ligne 2
         */
        libelleInfoService2: string;
        /**
         * Libelle information service ligne 3
         */
        libelleInfoService3: string;
        /**
         * Date début d'effet de l'opposition
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffetOpposition: string;
        /**
         * Date fin d'effet de l'opposition
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetOpposition: string;
        /**
         * identifiant d'opposition
         */
        identifiantOpposition: number;
        /**
         * Indicateur d’opposition conditionnel
         */
        indicateurOppositionCondition: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICaracteristiqueSiege {
        DonneeCommune: IDonneeCommune;
        DonneeSpecifique: IDonneeSpecifique;
        Localisation: Array<ILocalisation>;
        MentionLegaleCorps: IMentionLegaleCorps;
        MentionLegaleDonneeCommune: IMentionLegaleDonneeCommune;
        MentionLegalePied: IMentionLegalePied;
    }
    interface IDonneeCommune {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Correspond à un type : siège, agence, service, poste fonctionnel, ...
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceElementStructure: number;
        /**
         * Libellé de désignation d'un élément de structure appartenant à un Etablissement du GCE.
         */
        libelleElementStructure: string;
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
         *
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement. Exemple : '003' agence ou point de vente
         */
        typeElementStructure: string;
        /**
         * Cette rubrique décrit la date de début de validité du siège.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeEDS: string;
        /**
         * Cette rubrique décrit la date de fin de validité du siège.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEDS: string;
        /**
         * Dénomination du type de l'élément de structure.
         *
         * Exemples : poste fonctionnel
         * service
         * agence
         * unité commerciale
         * secteur commercial
         * groupe commercial
         * direction
         * siège
         * entité administrative
         * GAB
         */
        libelleTypeElementStructure: string;
    }
    interface IDonneeSpecifique {
        /**
         * Code Banque de codification interne.
         * Ce code est unique sur le SI MYSYS : c'est un numéro séquentiel.
         *
         * Exemple :
         * '003' : Caisse de Nord-France-Europe (16275)
         * '004' : Caisse de Picardie (18025)
         * '005' : Caisse de Lorraine-Champagne-Ardenne (15135)
         * '007' : Caisse de Midi-Pyrénées (13135)
         * '008' : Caisse du Auvergne-Limousin (18715)
         * ...
         */
        codeInterneSequentiel: string;
        /**
         * Code Banque de codification interne.
         *
         * Exemple :
         * '627' : Caisse de Nord-France-Europe (16275)
         * '802' : Caisse de Picardie (18025)
         * '513' : Caisse de Lorraine-Champagne-Ardenne (15135)
         * '871' : Caisse du Auvergne-Limousin (18715)
         * '313' : Caisse de Midi-Pyrénées (13135)
         * ...
         */
        CodeInterne: string;
        /**
         * Code du CTR de rattachement d'un Etablissement.
         */
        codeCTRRattachement: string;
        /**
         * Code BIN d'une banque suivant les normes iso attribué par :
         * - VISA pour les cartes VISA
         * - MASTERCARD pour les cartes Eurocard
         * - ABA pour les autres cartes
         * Cas particulier pour les cartes de structure nationale : leur codification commence par un 9 suivi du code ISO du pays (exemple : 9250 pour la France)
         *
         * Norme ISO du 01/08/90
         */
        critereRoutageBIN: string;
        /**
         * Numéro de télex du siège.
         */
        numeroTelex: string;
        /**
         * Numéro de télécopie du siège.
         */
        numeroTelecopie: string;
        /**
         * Numéro d'identification d'un établissement d'une entreprise répertorié au SIRET de l'INSEE : Système d'Identification du Répertoire des ETablissements.
         * L'établissement est une unité de production géographiquement individualisée, mais juridiquement dépendante de l'entreprise.
         * Format :
         * - Numéro SIREN du siège (9 caractères)
         * - Numéro interne de classement (5 caractères)
         *       . Numéro d'ordre séquentiel (4 caractères)
         *       . Clé de contrôle du numéro SIRET (1 caractère)
         */
        numeroSIRET: string;
        /**
         * Lieu d'enregistrement de l'entreprise au Registre du Commerce.
         *
         * Exemple :
         * 'RCS LILLE'
         */
        lieuEnregistrementRC: string;
        /**
         * Montant de la dotation statutaire d'un établissement.
         * Ce montant est repris sur les documents de type lettre en bas de page.
         * Il est affiché avec l'ensemble des informations identifiant l'établissement.
         */
        montantDotationStatutaire: number;
        /**
         * Montant du capital de l'établissement.
         */
        montantCapital: number;
        /**
         * Numéro d'identification d'un organisme autorisé à émettre des prélèvements / créancier.
         *  Référence établie par la BDF.
         * Pour SEPA, les créanciers sont identifiés par une nouvelle référence : identifiantt ICS.
         *
         * Exemple :
         * '000006' : SA MERCIER
         */
        numeroNationalEmetteur: string;
    }
    interface ILocalisation {
        /**
         * Identifie un site de localisation d'un EDS.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantSite: number;
        /**
         * Détermine la nature/finalité d'une adresse.
         *
         * Valeurs :
         * 1 / Localisation géographique
         * 4 / Postale
         */
        typeAdresse: string;
        /**
         * Cette rubrique décrit la date de début de validité d'une localisation d'EDS.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeSite: string;
        /**
         * Cette rubrique décrit la date de fin de validité d'une localisation d'EDS.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeSite: string;
    }
    interface IMentionLegaleCorps {
        /**
         * Référence d'identification d'un Etablissement financier ou assimilé au niveau international
         * BIC = Bank Identifier Code ; norme ISO 9362
         * Format : de 8 à 11 caractères :
         *      - Code banque sur 4 caractères
         *      - Code pays sur 2 caractères ISO 3166
         *      - Code emplacement sur 2 caractères (ville, état, province)
         *      - Code branche sur 3 caractères optionnel (agence)
         *
         * si BIC sur 8 caractères : siège central national de la banque.
         *
         * Codification Caisse Epargne : CEPAFRPPXXX
         *      - XXX : 2/3/4ème chiffres du code caisse
         *
         * Doit être mentionné sur la formule du relevé d'identité du compte : RIB/RICE.
         */
        codeBIC: string;
        /**
         * Code Catégorie Juridique d'une Caisse adhérente en tant que déclarant DGI.
         */
        codeCategorieJuridique: string;
        /**
         * Détermine un CTR / Centre technique informatique du GCE.
         * Les Etablissements du GCE sont positionnés sur une instance de production ou partition (IP1 ou IP2).
         *
         * Valeurs :
         * '04' : IP1
         * '18' : IP2
         */
        codeCTRRattachement: string;
        /**
         * Code Banque de codification interne.
         * Ce code est unique sur le SI SIRIS : c'est un numéro séquentiel.
         *
         * Valeurs :
         * '003' : Caisse du Pas de Calais (16275)
         * '004' : Caisse de Picardie (18025)
         */
        codeInterneEtablissement: string;
        /**
         * Code Banque de codification interne.
         *
         * Valeurs :
         * '627' : Caisse du Pas de Calais (16275)
         * '802' : Caisse de Picardie (18025)
         */
        codeInterneEtablissementSecondaire: string;
        /**
         * Désignation décrivant la ligne 3 du commentaire saisi sur le poste de travail.
         */
        commentaire3: string;
        /**
         * Désignation décrivant la ligne 4 du commentaire saisi sur le poste de travail.
         */
        commentaire4: string;
        /**
         * code BIN d'une banque suivant les normes ISO attribué par :
         *      - VISA pour les cartes VISA
         *      - MASTERCARD pour les cartes EUROCARD
         *      - ABA pour les autres cartes
         */
        critereRoutageBIN: string;
        /**
         * Libelle saisi sur 30 caractères.
         *
         * Exemple :
         * 'DE PICARDIE' pour la CE Picardie
         */
        libelleEDSChequier: string;
        /**
         * Désignation de l'EDS de domiciliation.
         */
        libelleEDSDomiciliation: string;
        /**
         * lieu d'enregistrement de l'établissement au Registre du Commerce.
         *
         * Exemple :
         * 'RCS LILLE'
         */
        lieuEnregistrement: string;
        /**
         * Montant du capital de l'établissement.
         */
        montantCapitalEtablissement: number;
        /**
         * Montant de la dotation statutaire d'un établissement.
         * Ce montant est repris sur les documents de type lettre en bas de page.
         * Il est affiché avec l'ensemble des informations identifiant l'établissement.
         */
        montantDotation: number;
        /**
         * Numéro d'identification d'un organisme autorisé à émettre des prélèvements / créancier.
         * Référence établie par la BDF.
         *
         * Exemple :
         * '000006' : SA MERCIER
         */
        numeroNationalEmetteur: string;
        /**
         * Numéro d'identification d'un courtier au Registre des intermédiaires en assurances.
         * ORIAS / organisme national gérant ce registre.
         */
        numeroORIAS: string;
        /**
         * Numéro SIREN composant le numéro RCS.
         * Numéro d'immatriculation au Registre du Commerce et des Sociétés (RCS) d'une personne physique ou morale exerçant des activités de nature commerciale ou ayant une structure commerciale.
         * Registre national du commerce tenu par l'INPI.
         */
        numeroRCSSIREN: string;
        /**
         * Numéro d'identification d'un établissement d'une entreprise répertorié au SIRET de l'INSEE : Système d'Identification du Répertoire des ETablissements.
         */
        numeroSIRET: string;
        /**
         * Numéro de télécopie du lieu d'activité.
         */
        numeroTelecopieur: string;
        /**
         * Numéro de télex du lieu activité.
         */
        numeroTelex: string;
        /**
         * Désignation d'un Etablissement (Caisse) du GCE comme
         * personne morale.
         * Doit impérativement figurer dans les statuts.
         */
        raisonSociale: string;
        /**
         * Désignation décrivant la ligne 2 du commentaire saisi sur le poste de travail.
         */
        commentaire2: string;
        /**
         * Désignation décrivant la ligne 1 du commentaire saisi sur le poste de travail.
         */
        commentaire1: string;
    }
    interface IMentionLegalePied {
        /**
         * Numéro unique chronologique correspondant à un pied de page.
         */
        codePied: number;
        /**
         * Désignation décrivant la première ligne du pied de page : ligne par ligne.
         * Sera saisie sur le poste de travail.
         */
        ligne1: string;
        /**
         * Désignation décrivant la deuxième ligne du pied de page : ligne par ligne.
         * Sera saisie sur le poste de travail.
         */
        ligne2: string;
        /**
         * Désignation décrivant la troisième ligne du pied de page : ligne par ligne.
         * Sera saisie sur le poste de travail.
         */
        ligne3: string;
        /**
         * Désignation décrivant la quatrième ligne du pied de page : ligne par ligne.
         * Sera saisie sur le poste de travail.
         */
        ligne4: string;
        /**
         * Désignation décrivant la cinquième ligne du pied de page : ligne par ligne.
         * Sera saisie sur le poste de travail.
         */
        ligne5: string;
        /**
         * Désignation décrivant la sixième ligne du pied de page : ligne par ligne.
         * Sera saisie sur le poste de travail.
         */
        ligne6: string;
        /**
         * Désignation décrivant la ligne entête du pied de page (ligne de tirets, nom caisse...).
         * Sera saisie sur le poste de travail.
         */
        ligneEntete: string;
        /**
         * Correspond à un type d'éditique pour les pieds de page.
         *
         * Valeurs :
         *  'C' : éditique centrale (courriers)
         *  'L' : éditique locale PTU
         *  'I' : éditique internet
         */
        typeEditique: string;
        /**
         * Détermine les modalités de saisie des informations dans le pied de page.
         *
         * Valeurs :
         * '1' : pas ligne entête et saisie au km
         * '2' : 1 ligne entête et saisie au km
         * '3' : 1 ligne entête et saisie ligne à ligne
         * '4' : pas de ligne entête et saisie ligne à ligne
         */
        typeSaisie: string;
    }
    interface IMentionLegaleDonneeCommune {
        /**
         * Date de modification des mentions légales.
         */
        dateModificationMentionLegale: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICompteCCIE {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France.
         */
        codeGuichet: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... contrat détenu par un client d'un etablissement bancaire sur la plateforme Mysys.
         */
        referenceProduit: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.Creance {
    interface ICompteSupport {
        /**
         * Référence sous laquelle est répertorié par la Banque de France un Etablissement bancaire : Etablissement de crédit, Institution financière.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'une créance de la clientèle dans la gestion du Recouvrement.
         */
        identifiantCreance: string;
        /**
         * Référence d'identification d'un Etablissement financier ou assimilé au niveau international
         */
        bic: string;
        /**
         * Référence d'identification du compte bancaire au niveau international
         */
        iban: string;
        /**
         * Détermine un compte de recouvrement associé à une créance donnée. Donne le rang de priorité du compte pour le recouvrement d'une créance donnée.
         */
        numeroCompte: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IContratProduitET {
        /**
         * Code Etab Banque Entité Juridique
         */
        identifiantEtablissementGCE: string;
        /**
         * Client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE. Synonyme : Client bancaire Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Numéro d'identification d'un contrat
         */
        identifiantContrat: string;
        /**
         * Code d'état exemple : 'O'  ou  'F'  ouvert / fermé
         * Ce code indique l'etat d'une entité : personne, entité titulaire, contrat, ...
         * O - etat ouvert
         * F - etat ferme, clos
         * I  - en instance d'ouverture
         * K  - en instance de cloture
         * X  - indetermine
         */
        codeEtat: string;
        /**
         * Détermine un produit/service commercialisé par le Groupe CE
         * Nomenclature issue du décisionnel basée sur  des  "axes" : AXES BANCARISATION / SERVICES / CREDIT.
         * ex : 004050
         */
        codeProduitServiceNational: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IListeContrats {
        listeContrats: Array<IContrat>;
    }
    interface IContrat {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Correspond au code Banque sous lequel un Etablissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Guichet d'appartenance du contrat / compte.
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S.
         */
        codeTypeProduitService: string;
        /**
         * Référence d'identification d'un compte, service, crédit... contrat détenu par un client d'un Etablissement bancaire sur la plateforme Mysys.
         */
        referenceProduitService: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement bancaire ou financier sur la plateforme Mysys.
         */
        numeroEntiteTitulaireContrat: number;
        /**
         * Indique l'état du contrat
         *
         *            Valeurs :
         *            'O'        Ouvert
         *            'C'        Clos
         */
        codeEtatContrat: string;
        /**
         * Libellé de désignation d'un type de produit ou service au format long.
         *
         * Valeurs exemples :
         * 'Livret A'
         * 'Capecureuil'
         */
        libelleTypeProduitService: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys.
         */
        identifiantPersonneContrat: number;
        /**
         * Détermine le rôle d'une personne dans la gestion d'un contrat.
         *
         *             Valeurs :
         *              '01'       Titulaire
         *              '02'       Mandataire
         *              '03'       Caution
         *              '04'       Autre participant
         */
        codeRolePersonneContrat: string;
        nomPPContrat: string;
        prenomPPContrat: string;
        designationPPContrat: string;
        raisonSocialePMContrat: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IConversionRibBicIban {
        /**
         * Référence d'identification d'un établissement financier ou assimilé au niveau international.
         * BIC = Bank Identifier Code ; norme ISO 9362
         *
         * Format : de 8 à 11 car
         *    - Code banque sur 4 caractère
         *    - Code pays sur 2 caractères ISO 3166
         *    - Code emplacement sur 2 caractères (ville, état, province)
         *    - Code branche sur 3 caractères optionnel (agence)
         *       * Si BIC sur 8 car : siège central national de la banque
         * Codification Caisse Epargne :
         *    CEPAFRPPXXX XXX : 2/3/4ème chiffres du code établissement
         */
        codeBic: string;
        /**
         * Numéro IBAN du compte pour lequel on recherche le BIC
         * Référence d'identification du compte bancaire au niveau international
         * IBAN = International Bank Account Number Format : norme ISO 13616
         *
         * Code pays : 2 caractères - norme ISO 3166
         * Clé de contrôle : 2 caractères - norme ISO 7604
         * Numéro de base (BBAN) : référence du compte dans le pays d'origine jusqu'à 30 caractères, format fixe par pays
         * France : RIB du compte sur 23 caractères, clé inclue
         *
         * Exemple pour France (format fixe 27 caractères) : FRKK BBBB BGGG GGCC CCCC CCCC Ckk
         *    - FR - Pays
         *    - KK - Clé
         *    - IBAN :
         *       * B - Banque
         *       * G - Guichet
         *       * C - Compte
         *       * K - Clé
         *
         * Pas d'espace sous forme électronique
         */
        numeroIbanCompteBeneficiaire: string;
        /**
         * Numéro d'identification d'un compte géré par un établissement du Groupe BPCE.
         */
        numeroCompte: string;
        /**
         * Référence d'identification d'un établissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ...
         * Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         *
         * Exemples :
         * '17515' - CE Ile de France
         * '16275' - CE Nord France Europe
         * '43199' - Crédit Foncier de France
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         * Un établissement bancaire peut disposer de plusieurs guichets.
         *
         * Exemples :
         * '90000' - IDF PARIS de la CE Ile de France
         * '00600' - LILLE de la CE Nord France Europe
         */
        codeGuichet: string;
        /**
         * clé RIB du compte.
         */
        cleRib: number;
    }
}

declare namespace Contentieux.RestServices.Modeles.Tiers {
    interface ISituationFinanciere {
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
    interface ICorporateInformation {
        /**
         * **Code situation juridique**
         */
        codeSituationJuridique: string;
        /**
         * **Numero SIREN professionnel**
         *
         * **Définition :** Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
         * Système d'Identification du Répertoire des ENtreprises Identifie de manière unique une entreprise au niveau
         * national. Attribué qu'une seule fois, n'est supprimé du répertoire qu'au moment de la disparition de la personne juridique
         * (décès ou cessation de toute activité pour une personne physique, dissolution pour une personne morale). Compose le numéro SIRET : num établissement
         *
         * **Format :** Les 8 premiers chiffres n'ont aucune signification, excepté pour les organismes publics (communes,...)
         * dont le numéro SIREN commence obligatoirement par 1 ou 2.
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
         * Type date au format yyyy-MM-dd
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
        situationFinanciere: ISituationFinanciere;
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
        adresse: IAdresse;
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
        etablissement: IEtablissement;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
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
        /**
         * Mode d'attribution de l'agent économique BDF de la personne morale.
         *
         * L'agent économique peut être calculé automatiquement, forcé techniquement ou forcé par saisie au PTU.
         *
         * Le forcage est technique quand le calcul n'aboutit pas, la valeur par defaut de "301" est alors forcé pour le code agent économique.
         *
         *
         * Valeurs:
         * ' ' : Calculé
         *
         * 'T' : Forcage technique
         *
         * 'M' : Forcage manuel
         */
        codeModeAttributionAgentEconomique: string;
        /**
         * permet d'aiguiller vers les QR concernées.
         * - 0 : Personne connue comme client
         * - 1 : Personne connue comme Tiers
         * - 2 : Personne connue comme prospect
         * - 3 : Personne connue comme Prospect enrichi
         */
        codeTypePersonne: string;
        prospect: IProspect;
        /**
         * indicateur de droits au compte
         */
        indicateurDroitAuCompte: string;
        professionnelImmobilier: IProfessionnelImmobilier;
        dateClotureJuridique: string;
        /**
         * à partir de la V17.01 seulement
         * - Si 'T' : mise à jour complète avec les Immatriculations
         * - Si 'I' : mise à jour des Immatriculations seulement
         * - Sinon mise à jour de corporateInformation sans les Immatriculations
         */
        codeMajImmatriculation: string;
        listeImmatriculation: Array<IImmatriculation>;
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
         * Donnée relative aux personnes morales et entrepreneurs individuels, basée sur une approche commerciale ou sectorielle, permettant de paramétrer des      regroupements fonctionnels de codes NAF.
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
        /**
         * Indique si une Société est Cotée sur un marché réglementé
         */
        indicateurMarcheReglemente: boolean;
        referenceInterneEDS: number;
        /**
         * Date de fin  souscription LEI
         * Type date au format yyyy-MM-dd
         */
        dateFinSouscriptionLei: string;
    }
    interface IAdresse {
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
         * La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution). La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment (entrée, bâtiment, bloc, tour etc.)
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
    interface IEtablissement {
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
         * Type date au format yyyy-MM-dd
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
    interface IMessageFonctionnel {
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
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
    interface IProspect {
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
    interface IProfessionnelImmobilier {
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
    interface IImmatriculation {
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
         * Type date au format yyyy-MM-dd
         */
        dateImmatriculation: string;
    }
    interface IDesignation {
        /**
         * Code Etablissement entité juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Désignation Personne
         */
        designationPersonne: string;
    }
    interface IInterrogationDesignation {
        /**
         * Code Etablissement entité juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
    }
    interface IListeInterrogationDesignation {
        listeInterrogationDesignation: Array<IInterrogationDesignation>;
    }
    interface IDesignationPersonne {
        listeDesignation: Array<IDesignation>;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICreFonctionnel {
        caracteristiqueCRE: ICaracteristiqueCRE;
        partieSpecifiqueCRE: Array<IPartieSpecifiqueCRE>;
    }
    interface IPartieSpecifiqueCRE {
        /**
         * Numéro séquentiel qui permet à l'application émettrice de l'événement d'ordonnancer les segments composant le CRE.
         * Il est initialement à 1.
         */
        numeroSegmentCre: number;
        /**
         * Permet de différencier les structures de données liées à l'évènement, présentes dans la zone banalisée du CRE.
         *
         * Pour un CRE mono segment le code est systématiquement à 001.
         * Pour un CRE multi-segments : la 1er structure de l'évènement a un code 001, la 2ème un code 002 etc.
         *
         * Remarque : Ce code ne donne aucune indication sur l'ordre des occurrences dans le CRE.
         */
        codeStructureDonneeEvenement: string;
        /**
         * Zone banalisée du CRE contenant la description de l'évènement.
         */
        zoneBanaliseeCre: string;
    }
    interface ICaracteristiqueCRE {
        /**
         * Référence d'identification du composant applicatif. Elle permet de gérer l'origine de l'évènement.
         * Code Application ou Code bloc applicatif sur 8 caractères défini dans le catalogue fonctionnel des services.
         */
        codeComposantApplicatif: string;
        /**
         * Identifie un évènement produit par un composant applicatif (application, bloc ) et faisant l'objet d'un CRE fonctionnel.
         * ex : création personne, modification contrat, consultation synthèse ...
         *
         * Nb : Nomenclature gérée dans table SU5E.
         */
        codeEvenement: string;
        /**
         * Détermine la version de définition d'un CRE fonctionnel. Il permet de préciser la ou les structures détaillées associées de description du CRE.
         */
        numeroVersion: string;
        /**
         * Détermine le service initiateur de l'évènement objet d'un CRE fonctionnel.
         *
         * Nb : Nomenclature gérée dans table SU5I.
         */
        codeServiceInitiateur: string;
        /**
         * Numéro de version du service initiateur de l'évènement.
         * Permet de gérer plusieurs évolutions d'un service relatif à un évènement-type.
         */
        numeroVersionServiceInitiateur: string;
        /**
         * Différencie les types d'entités sur lesquels portent les événements (attributaires de l'evt).
         *
         * Valeurs possibles :
         *
         * '1' - Personne,
         *
         * '2' - Entité titulaire,
         *
         * '3' - Contrat,
         *
         * '4' - Ménage / relation,
         *
         * '5' - Prospect,
         *
         * '6' - Dossier de vente.
         */
        codeTypeEntiteEvenement: string;
        /**
         * Référence d'identification de l'entité concernée par l'événement.
         * Fonction du type d'entité objet de l'évènement : identifiant personne, contrat, dossier, ...
         */
        identifiantEntiteEvenement: string;
        /**
         * Date de la journee bancaire en cours au moment de l'emission du CRE.
         * Type date au format yyyy-MM-dd
         */
        dateEvenement: string;
    }
    interface IEnteteApplicativeRetour {
        /**
         * Code du service implémentant la prise.
         */
        codeService: string;
        /**
         * Numéro de version du service.
         */
        numeroVersionService: string;
        /**
         * Code retour macroscropique fourni dans une réponse. Il classifie la nature de la réponse.
         */
        codeRetour: string;
        /**
         * Code de l'anomalie. Il permet de préciser l'anomalie. Il est spécifique au contexte de la prise.
         */
        codeAnomalie: string;
        /**
         * Libellé de description de l'anomalie.
         */
        libelleAnomalie: string;
    }
    interface ICreFonctionnelParamsEntree {
        codeNatureFlux: string;
        codeModeEchange: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.Creance {
    interface ICreance {
        /**
         * Libellé long associé à un produit participant au catalogue des produits de crédit offerts au client.
         */
        nature: string;
        /**
         * Code associé à un produit participant au catalogue des produits de crédit offerts au client.
         */
        codeNature: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... contrat détenu par un client d'un Etablissement bancaire sur la plateforme Mysys
         */
        reference: string;
        dettes: Array<IDette>;
        /**
         * Libellé contenant le statut d'un contrat. Cette valeur est utlisée en étiquette de tuile pour chaque contrat dans l'application MyVario.
         */
        etiquetteContrat: string;
        /**
         * Précise la nature du plan de recouvrement associé
         * à un dossier de créances
         * 'A'        Plan d'apurement ou accord de recouvrement
         * 'R'        Plan de règlement
         * 'S'        Plan de surveillance
         */
        typeEcheancier: string;
        /**
         * Cette rubrique à pour objectif de donner l'état dans lequel est l'échéancier d'un contrat
         * Valeurs :
         * échéancier en attente de signature
         * échéancier en cours
         * échéancier en retard
         * échéancier en  non-respect
         * échéancier caduc
         * échéancier terminé
         */
        etatEcheancier: string;
        /**
         * Date à partir de laquelle est déterminée la date de forclusion pour une créance
         * Type date au format yyyy-MM-dd
         */
        dateDefaillance: string;
        /**
         * Date de fin de contentieux
         * Type date au format yyyy-MM-dd
         */
        dateRegularisation: string;
        /**
         * Permet de savoir si, a partir d'un contrat, on peut débrancher sur l'application synchro
         */
        topSynchro: string;
        /**
         * Numéro d'identification d'une créance de la clientèle dans la gestion du Recouvrement. Une créance correspond à la fraction ou la totalité des sommes dûes par un client sur un contrat de crédit ou un engagement.
         */
        identifiantCreance: string;
        /**
         * Détermine la situation d'une créance
         * '01'       Créance en cours
         * '02'       Créance levée
         */
        codeActiviteCreance: string;
        /**
         * Cette propriété précise si la déchéance du terme
         * a été prononcé ou pas sur le crédit.
         * 0         Créance vive  --> pre-ouverture
         * 1         Créance morte --> déchue
         */
        codeDecheanceDuTerme: number;
        /**
         * Détermine la situation du crédit au regard du
         * statut comptable douteux.
         * 'O'        Douteux
         * 'N'        Sain
         * 'P'        Passage en douteux
         * 'C'        Douteux compromis
         * 'S'        Surendettement
         */
        codePassageCreditStatutDouteux: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichetInterbancaire: string;
        /**
         * La CEGC peut affecter au contrat du client jusqu'à 10 types de garanties. Chacun des types étant identifié par un code produit national et pouvant regrouper plusieurs cautions.
         */
        nombreGarantie: number;
        /**
         * Permet de savoir si, a partir d'un contrat, on peut afficher l'icone solde
         * 'O'        Oui
         * 'N'        Non
         */
        topSolde: string;
        /**
         * ibellé contenant le statut d'un contrat.cette valeur est utlisée en étiquette de tuile our chaque contrat dans l'application MyVario.
         */
        libelleTypeContrat: string;
        /**
         * Totalise le montant des échéances reportées pour un crédit donné à une date d'arrêté concerne soit un crédit, soit une fraction
         */
        montantEcheancesReportees: number;
        /**
         * Catégorie de gestion du produit/service.Correspond à un produit/service élémentaire ou à un regroupement de P/S
         */
        codeTypeProduitService: string;
        /**
         * Détermine la modalité d'entrée en gestion d'un crédit
         * élémentaire ou un dossier.
         * 'E'        Entrée directe en gestion
         * 'I'          Instruction
         * 'R'        Reprise de l'existant
         */
        codeOrigineCreditDossier: string;
        /**
         * Identifie un contrat détenu par un client auprès d'un établissement du Groupe CE : Concerne l'épargne, les engagements, les services ...
         */
        identifiantContrat: string;
        /**
         * Référence d'identification du dossier de financement propre à Instruction / NEO Numéro séquentiel, incrémenté et attribué à chaque création d'un dossier.
         */
        identifiantDossierInstruction: string;
        /**
         * Cette rubrique correspond au Taux d'Intérêt Effectif de la créance. Il servira de taux d'actualisation des flux recouvrables pour le calcul des provisions IFRS.
         */
        tauxActualisationIFRS: number;
        /**
         * Cette rubrique correspond au Taux nominal d'origine ou au taux en cours pour les crédits à taux variable. Il servira de taux d'actualisation des flux recouvrables pour le calcul des provisions CRC2002-03.
         */
        tauxActualisationCRC: number;
        /**
         * Taux de pénalité de retard d'une créance applicable sur tout ou partie du montant de la créance
         */
        tauxPenaliteRetard: number;
        /**
         * Code produit / service dans la nomenclature du catalogue national / BPCE (ex CNCE) fonction de la hiérarchie nationale
         */
        codeProduitService: string;
        /**
         * Date de réalisation de la simulation du remboursement anticipé du crédit
         * Type date au format yyyy-MM-dd
         */
        dateSimulRemboursmtAnticip: string;
        detailCredit: IDetailCredit;
        /**
         * Date de levée de la créance
         * Type date au format yyyy-MM-dd
         */
        dateLevee: string;
        /**
         * Cette propriété précise si cette créance est cofinancée ou non.
         * 'O'        Oui (cofinancement sur cette créance)
         * 'N'          Non (pas de cofinancement)
         */
        indicateurCofinancement: string;
        /**
         * Valeur de la devise du crédit géré par ALIS et transmis à VARIO.
         * Valeurs possibles :
         * 'EUR'      euro
         */
        codeDevise: string;
        /**
         * Cet indicateur permet de savoir si les données garanties sont modifiables
         * Valeurs possibles :
         * 'O' Données modifiables
         * 'N' Données non modifiables
         */
        indicAutorisationModifGarantie: string;
        /**
         * Ce code permet de dissocier les comptes internes des comptes externes :
         * 'I'  :  Compte Interne
         * 'E' : Compte Externe
         * 'A' : Aucun
         */
        codeTypeCompte: string;
        /**
         * Détermine la nature du taux de pénalité applicable
         * dans le cadre du calcul des intérêts de retard.
         * 'L'  : Taux Légal
         * 'S' : Taux saisi
         */
        typeTauxPenalite: string;
        /**
         * Date d'ouverture du compte
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureCompte: string;
        /**
         * Date permettant de connaitre le moment ou un courrier national de mise en demeure a été envoyé.
         * Type date au format yyyy-MM-dd
         */
        dateDeclenchementDelaiFICP: string;
        /**
         * Date du certificat d'irrécouvrabilité
         * Type date au format yyyy-MM-dd
         */
        dateCertificatIrrecouvrabilite: string;
        /**
         * Date à laquelle un contrat est terminé
         * Type date au format yyyy-MM-dd
         */
        dateFinContrat: string;
        /**
         * Date d'effet du contrat
         * Type date au format yyyy-MM-dd
         */
        dateEffetContrat: string;
        /**
         * Determine un produit dans la gestion du recouvrement des créances
         * - Identifiant d'un produit Crédecureuil défini par
         * des caractéristiques financières et/ou des
         * règles de gestion-particulières.
         * - Identifiant d'un produit de la chaîne CTR
         * - Identifiant d'un produit de type CDD
         * - Identifiant d'un produit de type CCE
         */
        identifiantType: string;
        /**
         * Détermine un objet-type dans la gestion des crédits
         * - objet financé
         * - objet en garantie
         */
        codeObjet: number;
        /**
         * Classification des créances dans la gestion du Recouvrement.
         * Exemple :
         * C1         Surendettement Actif
         * C2         Surendettement Passif
         * C3         Rétablissement Personnel
         * 14         REDRESSEMENT JUD
         * 15         LIQUIDATION JUD
         * 16         SAUVEGARDE
         * 17         CONCILIATION
         * 18         LIQUIDATION AMIABLE
         * 19         CESSATION ACTIVITE
         * 20         PB TRESORERIE
         */
        categorie: string;
        /**
         * Date d'entrée en gestion de la créance dans Vario
         */
        dateEntreeGestion: number;
        /**
         * Informations sur la créance
         */
        info1: string;
        /**
         * Informations sur la créance
         */
        info2: string;
        /**
         * Informations sur la créance
         */
        info3: string;
        /**
         * Libelle de l'objet
         */
        libelleObjet: string;
        /**
         * Motif pour lequel le compte ou le prêt figure dans l'application CONTENTIEUX.
         */
        motifMiseEnContentieux: string;
        /**
         * Priorité d'affectation à l'assurance
         */
        prioriteAffectationAssurance: number;
        /**
         * Priorité d'affectation au Capital
         */
        prioriteAffectationCapital: number;
        /**
         * Priorité d'affectation au Frais
         */
        prioriteAffectationFrais: number;
        /**
         * Priorité d'affectation aux Intérêts
         */
        prioriteAffectationInterets: number;
        /**
         * Priorité d'affectation aux Intérêts de Retard
         */
        prioriteAffectationInteretRetar: number;
        /**
         * Cet indicateur permet de savoir si le solde actualisé est
         * modifiable ou non sur l'écran modification créance.
         */
        indicateurSoldeActualiseModif: string;
        /**
         * Cet indicateur permet de savoir si la date de déclenchement
         * du délai FICP est modifiable ou non sur l'écran
         * modification créance
         */
        indicateurVisuDateDeclenchement: string;
        /**
         * Indique l'état de la créance dans le processus de
         * sous-traitance :
         *
         * 'N'        pas de sous-traitance
         * 'S'        Sélectionnée en sous-traitance
         * 'E'        Envoyée au sous-traitant
         * 'P'        Créance irrécouvrable SST
         * 'A'        Remise de dette SST
         * 'R'        Fin recouvrement SST
         * 'F'        Sortie manuelle SST
         * 'D'        Demande de retour caisse
         * 'C'        Demande de retour pour déchéance
         */
        codeEtatGestionSousTraitance: string;
        /**
         * Valeur de la devise du crédit géré par ALIS et
         * transmis à VARIO.
         */
        codeDeviseOrigine: string;
        /**
         * Cet indicateur permet d'autoriser ou non la
         * modification de données
         */
        codeIndicateurMajAutorisee: string;
        /**
         * Permet de savoir si une créance peut être levée ou non en automatique :
         * 'N'        Créance à ne pas lever
         * 'O'        Créance à lever
         */
        indicateurLeveeAutomatique: string;
        /**
         * Cette donnée contient le montant d'origine de la
         * créance.
         */
        montantOrigine: number;
        /**
         * Date de déchéance du terme
         * Type date au format yyyy-MM-dd
         */
        dateDecheanceTerme: string;
        tauxProvision: number;
        dateSortie: number;
        entiteAdminCpteSupport1: string;
        guichetCompteSupport1: string;
        compteSupportRecouvrement1: number;
        entiteAdminCpteSupport2: string;
        guichetCompteSupport2: string;
        compteSupportRecouvrement2: number;
        numeroEntiteTitulaire: number;
        designationBancaireCourte: string;
        codeMiseAJourProduit: string;
        indicateurPerteRecouvrable: string;
        identifiantEDS: number;
        libelleIdentifiantStructure: string;
        codeDeviseCompteSupportRecouv1: string;
        codeDeviseCompteSupportRecouv2: string;
        typeTauxRecouvrement: string;
        tauxRecouvrement: number;
        soldeActualise: number;
        codeCreditPool: string;
        codeSPPIProduitService: string;
        codeBusinessModel: string;
        codeClassificationIFRS9: string;
        numeroOrdre1erComptePayeur: number;
        numeroOrdre2emeComtpePayeur: number;
        numeroOrdre: string;
        /**
         * Indicateur précisant si une créance d'une crédit est gelée ou non. Part d'impayé sortie de la gestion du crédit et
         * cantonée dans une créance dans VARIO
         *
         * 'O'        Créance Gelée
         * 'N'        Créance non Gelée
         */
        indicateurCreanceGelee: string;
        /**
         * Type de calcul espoir de recouvrement
         * - "TX" taux
         * - 'GA' Garanties
         * - 'MT' Montant
         */
        typeCalculEspoirRecouvrement: string;
        /**
         * Motif de changement de taux de recouvrement
         */
        motifChangementTaux: string;
        montantEngagement: number;
        codeObjetPret: string;
        codeEtatCreance: number;
        /**
         * Date de début de lien entre la créance et un intervenant
         * Type date au format yyyy-MM-dd
         */
        dateDebutLien: string;
    }
    interface IDette {
        /**
         * Cette rubrique a pour objectif de donner le libellé du type de la dette pour un contrat :
         * "DEB"
         * "IMP"
         * "CRD"
         * "BILAN"
         * "HB"
         */
        type: string;
        /**
         * montant de la dette
         */
        montant: number;
    }
    interface IDetteImpayee extends IDette {
        /**
         * nombre d'impayé sur la creance
         */
        nbImpaye: number;
    }
    interface IDettePret extends IDette {
        /**
         * Totalise le montant des échéances reportées pour un crédit donné à une date d'arrêté concerne soit un crédit, soit une fraction
         */
        montantCumuleEcheancesReportees: number;
    }
    interface ICaracteristique {
        /**
         * Cette rubrique à pour objectif de connaitre le nombre de contrat régularisé (déchu levé) pour un dossier contentieux.
         */
        nombreContratRegularise: number;
        listeCreance: Array<ICreance>;
    }
    interface IDetailCredit {
        /**
         * Montant de la prochaine échéance nette du crédit synchro (communiqué via le flux IGC en quotidien) montant déduit des aides diverses :
         *  APL et assurance (prise en charge par la compagnie)...
         */
        montantProchaineEcheance: number;
        /**
         * Représente la part capital de la dette restant dûe par le client.
         */
        montantCapitalRestantDu: number;
        /**
         * Montant actualisé de la créance correspondant à un contrat de crédit ou d'engagement en Recouvrement. Règle de gestion spécifique à la gestion du Recouvrement :
         * capital + intérêts + commissions et frais divers éventuellement correspond à la somme due par la client
         */
        soldeActualise: number;
        /**
         * Montant de l'APL contentieux : la part aide pour le logement que verse l'Etat venant se déduire du montant de la dette
         */
        montantAPLContentieux: number;
        /**
         * Date de la dernière échéance effectuée sur un crédit ou créance
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEcheance: string;
        /**
         * Taux proportionnel de calcul des intérêts en cours pour un crédit ou une créance
         */
        tauxCalculInteretsEnCours: number;
        /**
         * Taux de pénalité de retard d'une créance applicable sur tout ou partie du montant de la créance
         */
        tauxPenaliteRetard: number;
        /**
         * Correspond à la date de fin de contrat. Pour crédit : date réelle de fin de crédit
         * Type date au format yyyy-MM-dd
         */
        dateFinContrat: string;
        /**
         * Durée totale ajustée du crédit. Totalise la durée de la phase éventuelle de différé et la phase d'amortissement. Exprimée en mois
         */
        dureeTotalCredit: number;
        /**
         * Représente le montant gelé d'une créance gérée dans Vario.Part d'impayé sortie de la gestion du crédit et cantonée dans une créance dans VARIO
         */
        montantGelCreance: number;
        /**
         * Montant de l'allègement du crédit. Exprimé en euros.
         */
        montantAllegement: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    namespace CreditGestion {
        interface ICreancesGelees {
            choix: Array<IChoix>;
            creances: Array<ICreance>;
            retourQR: Array<IRetourQR>;
        }
        interface ICreance {
            /**
             * type de creance gelee
             */
            typeCreanceGelee: string;
            /**
             * LIBELLE type créance
             */
            libelleTypeCreance: string;
            /**
             * MONTANT ORIGINE GEL CREANCE
             */
            montantOrigineGelCreance: number;
            /**
             * MONTANT GEL CREANCE
             */
            montantGelCreance: number;
            /**
             * MONTANT allegement periodique
             */
            montantAllegementPeriodique: number;
            /**
             * DATE DEBUT GEL CREANCE
             * Type date au format yyyy-MM-dd
             */
            dateDebutGelCreance: string;
            /**
             * DATE DEBUT APPLICATION
             * Type date au format yyyy-MM-dd
             */
            dateDebutApplication: string;
            /**
             * DATE FIN APPLICATION
             * Type date au format yyyy-MM-dd
             */
            dateFinApplication: string;
            /**
             * DATE fin GEL CREANCE
             * Type date au format yyyy-MM-dd
             */
            dateFinGelCreance: string;
            /**
             * CODE MOTIF CLOTURE
             */
            codeMotifCloture1: string;
            /**
             * LIBELLE LONG MOTIF
             */
            libelleLongMotif: string;
            /**
             * Code prise en charge Capital (O/N)
             */
            codePriseChargeCapital: string;
            /**
             * Code prise en charge Intérêt (O/N)
             */
            codePriseChargeInteret: string;
            /**
             * Code prise en charge montant conven.
             */
            codePriseChargeMontantConven: string;
            /**
             * numero creance gelee
             */
            identifiantCreanceGelee: number;
            /**
             * MONTANT AMORTISS gelé/échéance gelée
             */
            montantAmortissGeleParEcheance: number;
            /**
             * MONTANT intérêt gelé/échéance gelée
             */
            montantInteretGeleParEcheance: number;
            /**
             * MT ACC CONVENTION/échéance gelée
             */
            montantAccessConventionEcheance: number;
            /**
             * Code prise en charge mont. non conv.
             */
            codePriseChargeMontantNonConv: string;
            /**
             * MT ACC horsCONVENTION/échéance gelée
             */
            montantAccessHorsConvEcheance: number;
            echeances: Array<IEcheance>;
        }
        interface IEcheance {
            /**
             * MONTANT global gel echeance
             */
            montantGlobalGelEcheance: number;
            /**
             * CODE TYPE ORDRE DE RECOUVREMENT
             */
            codeTypeOrdreRecouvrement: string;
            /**
             * LIBELLE LONG MOTIF
             */
            libelleLongMotif: string;
            /**
             * DATE DECISION ORDRE DE RECOUVREMENT
             * Type date au format yyyy-MM-dd
             */
            dateDecisionOrdreRecouvrement: string;
            /**
             * MONTANT AMORTISS gelé/echeance gelee
             */
            montantAmortissGeleParEcheance: number;
            /**
             * MONTANT interet gelé/echeance gelee
             */
            montantInteretGeleParEcheance: number;
            /**
             * MT ACC CONVENTION/echeance gelee
             */
            mtAccConventionParEcheance: number;
            /**
             * MT ACC horsCONVENTION/echeance gelee
             */
            mtAccHorsconventionParEcheance: number;
            /**
             * DT 1ERE PRESENTATION ORDRE RECOUVREM
             * Type date au format yyyy-MM-dd
             */
            datePremierePresentationOMR: string;
            /**
             * numero creance gelee
             */
            identifiantCreanceGelee: number;
            /**
             * numero echeance gelee
             */
            identifiantEcheanceGelee: number;
            imputations: Array<IImputation>;
        }
        interface IImputation {
            /**
             * NUMERO RELATIF
             */
            numeroRelatif: number;
            /**
             * DATE du paiement
             * Type date au format yyyy-MM-dd
             */
            datePaiement: string;
            /**
             * type d'opération
             */
            typeOperation: string;
            /**
             * libellé type d'opération
             */
            libelleTypeOperation: string;
            /**
             * DATE PRISE EN CPTE EXTOURNE PAIEMENT
             * Type date au format yyyy-MM-dd
             */
            datePriseCpteExtournePaiement: string;
            /**
             * MONTANT AMORTISS payé/echeance gelee
             */
            montantAmortissPayeParEcheance: number;
            /**
             * MONTANT interet payé/echeance gelee
             */
            montantInteretPayeParEcheance: number;
            /**
             * MT ACC CONVENTION/echeance gelee
             */
            mtAccConventionParEcheanceGelee: number;
            /**
             * MT ACC horsCONVENTION/echeance gelee
             */
            mtAccHorsconventionParEcheance: number;
            /**
             * MONTANT IMPUTE SUR ORDRE DE MER
             */
            montantImputeSurOMR: number;
            /**
             * numero creance gelee
             */
            identifiantCreanceGelee: number;
            /**
             * numero echeance gelee
             */
            identifiantEcheanceGelee: number;
        }
        interface IChoix {
            /**
             * type de creance gelee
             */
            typeCreanceGelee: string;
            /**
             * LIBELLE type créance
             */
            libelleTypeCreance: string;
            /**
             * Code prise en charge Capital (O/N)
             */
            codePriseChargeCapital: string;
            /**
             * Code prise en charge Intérêt (O/N)
             */
            codePriseChargeInteret: string;
            /**
             * Code prise en charge montant conven.
             */
            codePriseChargeMontantConven: string;
            /**
             * Code prise en charge mont. non conv.
             */
            codePriseChargeMontantNonConv: string;
        }
    }
}

declare namespace Contentieux.RestServices.Modeles {
    namespace CreditAmortissable {
        interface IProfilCefi {
            /**
             * Code retour Echanges
             */
            codeRetour: number;
            /**
             * Code devise ISO 4217 alpha-3
             */
            codeDevise: string;
            /**
             * Numéro entité titulaire
             */
            numeroEntiteTitulaire: number;
            /**
             * Numéro MYSYS dossier contrat NFI
             */
            numeroMysysDossierContratNfi: string;
            /**
             * Numéro dossier contrat producteur
             */
            numeroDossierContratProducteur: string;
            /**
             * code offre CEFI pret conso
             */
            codeOffreCefiPretConso: string;
            /**
             * Code état Produit / Service
             */
            codeEtatProduitService: string;
            /**
             * Code position dossier
             */
            codePositionDossier: string;
            /**
             * Libellé état compte TEOZ
             */
            libelleEtatCompteTeoz: string;
            /**
             * Date ouverture contrat satellis
             * Type date au format yyyy-MM-dd
             */
            dateOuvertureContratSatellis: string;
            /**
             * Date fin prêt
             * Type date au format yyyy-MM-dd
             */
            dateFinPret: string;
            /**
             * Date dern maj fichier image
             * Type date au format yyyy-MM-dd
             */
            dateDernMajFichierImage: string;
            /**
             * Montant emprunté
             */
            montantEmprunte: number;
            /**
             * Capital restant du ou Encours
             */
            capitalRestantOuEncours: number;
            /**
             * MT échéance pret avec assurance
             */
            mtEcheancePretAvecAssurance: number;
            /**
             * Note octroi calculée CEFI
             */
            noteOctroiCalculeeCefi: string;
            /**
             * Taux effectif global CEFI
             */
            tauxEffectifGlobalCefi: number;
            /**
             * Code motif de l'octroi
             */
            codeMotifLOctroi: string;
            /**
             * Nombre d'échéances du prêt CEFI
             */
            nombreEcheancesPretCefi: number;
            /**
             * Mt solde recouvrement
             */
            mtSoldeRecouvrement: number;
            /**
             * Périodicité des échéances CEFI
             */
            periodiciteDesEcheancesCefi: string;
            /**
             * Code Etab Banque Entité Juridique
             */
            codeEtablissement: string;
            /**
             * Code guichet compte prélévement
             */
            codeGuichet: string;
            /**
             * Numéro compte P/S
             */
            numeroCompte: string;
            /**
             * Identifiant contrat CEFI
             */
            identifiantContratCefi: string;
            /**
             * Code option ass titulaire
             */
            codeOptionAssTitulaire: string;
            /**
             * Code option ass conjoint
             */
            codeOptionAssConjoint: string;
            /**
             * Date première mensualité
             * Type date au format yyyy-MM-dd
             */
            datePremiereMensualite: string;
            /**
             * Libellé Assurance profil prêt CEFI
             */
            libelleAssuranceProfilPretCefi: string;
            /**
             * Date d'octroi
             * Type date au format yyyy-MM-dd
             */
            dateOctroi: string;
            /**
             * Taux nominal
             */
            tauxNominal: number;
            /**
             * Libellé sort
             */
            libelleSort: string;
            /**
             * Montant du capital financé
             */
            montantCapitalFinance: number;
            /**
             * Date de financement
             * Type date au format yyyy-MM-dd
             */
            dateFinancement: string;
            /**
             * Date prochaine échéance crédit
             * Type date au format yyyy-MM-dd
             */
            dateProchaineEcheanceCredit: string;
            /**
             * Date de validation de la simulation
             * Type date au format yyyy-MM-dd
             */
            dateValidationSimulation: string;
            /**
             * Libellé stade de l'offre
             */
            libelleStadeLOffre: string;
            /**
             * Code Produit National
             */
            codeProduitNational: string;
            /**
             * Libellé état client CEFI
             */
            libelleEtatClientCefi: string;
            /**
             * Date décision passage douteux
             * Type date au format yyyy-MM-dd
             */
            dateDecisionPassageDouteux: string;
            /**
             * Mt crédit passé douteux
             */
            mtCreditPasseDouteux: number;
            /**
             * Type différé amortissement
             */
            typeDiffereAmortissement: string;
            /**
             * Mt prêt restant à verser
             */
            mtPretRestantAVerser: number;
            /**
             * Date passage contentieux
             * Type date au format yyyy-MM-dd
             */
            datePassageContentieux: string;
            /**
             * Rôle de la personne
             */
            rolePersonne1: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz1: string;
            numeroPersonne1: string;
            /**
             * Nom famille Personne Physique
             */
            nom1: string;
            /**
             * prenom
             */
            prenom1: string;
            rolePersonne2: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz2: string;
            numeroPersonne2: string;
            /**
             * Nom famille Personne Physique
             */
            nom2: string;
            /**
             * prenom
             */
            prenom2: string;
            rolePersonne3: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz3: string;
            numeroPersonne3: string;
            /**
             * Nom famille Personne Physique
             */
            nom3: string;
            /**
             * prenom
             */
            prenom3: string;
            rolePersonne4: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz4: string;
            numeroPersonne4: string;
            /**
             * Nom famille Personne Physique
             */
            nom4: string;
            /**
             * prenom
             */
            prenom4: string;
            rolePersonne5: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz5: string;
            numeroPersonne5: string;
            /**
             * Nom famille Personne Physique
             */
            nom5: string;
            /**
             * prenom
             */
            prenom5: string;
            rolePersonne6: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz6: string;
            numeroPersonne6: string;
            /**
             * Nom famille Personne Physique
             */
            nom6: string;
            /**
             * prenom
             */
            prenom6: string;
            rolePersonne7: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz7: string;
            numeroPersonne7: string;
            /**
             * Nom famille Personne Physique
             */
            nom7: string;
            /**
             * prenom
             */
            prenom7: string;
            rolePersonne8: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz8: string;
            numeroPersonne8: string;
            /**
             * Nom famille Personne Physique
             */
            nom8: string;
            /**
             * prenom
             */
            prenom8: string;
            rolePersonne9: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz9: string;
            numeroPersonne9: string;
            /**
             * Nom famille Personne Physique
             */
            nom9: string;
            /**
             * prenom
             */
            prenom9: string;
            rolePersonne10: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz10: string;
            numeroPersonne10: string;
            /**
             * Nom famille Personne Physique
             */
            nom10: string;
            /**
             * prenom
             */
            prenom10: string;
            rolePersonne11: string;
            /**
             * Libellé Assurance TEOZ
             */
            libelleAssuranceTeoz11: string;
            numeroPersonne11: string;
            /**
             * Nom famille Personne Physique
             */
            nom11: string;
            /**
             * prenom
             */
            prenom11: string;
            /**
             * Libellé type de différé d'amortiss.
             */
            libelleTypeDiffereAmortiss: string;
            /**
             * Montant total dû
             */
            montantTotalDu: number;
            /**
             * Code état dossier
             */
            codeEtatDossier: string;
            /**
             * Date effet état dossier NFI
             * Type date au format yyyy-MM-dd
             */
            dateEffetEtatDossierNfi: string;
            /**
             * Libelle état dossier
             */
            libelleEtatDossier: string;
            /**
             * Durée différé pret
             */
            dureeDifferePret: number;
            /**
             * Code mode signature
             */
            codeModeSignature: string;
            /**
             * Libellé du mois
             */
            libelleMois: string;
            /**
             * Nb lettre chèque
             */
            nbLettreCheque: number;
            /**
             * Type crédit
             */
            typeCredit: string;
            /**
             * Date dernier déblocage de fonds
             * Type date au format yyyy-MM-dd
             */
            dateDernierDeblocageFonds: string;
        }
    }
}

declare namespace Contentieux.RestServices.Modeles {
    namespace CreditGestion {
        interface IDonneeCredit {
            codeSituationImpayeCredit: string;
            codePassageCreditStatutDouteux: string;
            datePassageStatutDouteux: string;
            codeEcheanceTerme: string;
            datePrononciationDecheanceTerme: string;
            montantImpayeCredit: number;
            numeroRegleCalcul: string;
            tauxInteretRetard: number;
            codeTypeTauxModalite: string;
            montantIndemniteImpaye: number;
            zoneMontantBanalise: number;
            sommeDesMontants: number;
            listeImpaye: Array<IDonneeImpaye>;
            retourQR: Array<IRetourQR>;
            montantEcheanceMER: number;
        }
        interface IDonneeImpaye {
            numeroSituationImpaye: number;
            dateDebutSituationImpaye: string;
            codeMotifImpaye: string;
            codeBlocageEdition: string;
            montantMaximumImpaye: number;
            libelleLongMotifImpaye: string;
            dateBlocageEdition: string;
            codeElementStructureContencieux: string;
            montantFraisDiversImpaye: number;
            dateFinSituationImpaye: string;
            montantIRDepDebutSituationImp: number;
            codeSituationImpayeSuitSinistre: string;
            codeNiveauOrgaTraitement: string;
            montantRemiseIRDepDebutSituat: number;
        }
        interface IRetourQR {
            messageRetour: Array<string>;
            codeRetour: number;
            isErreurBloquante: boolean;
        }
        interface IDonneeCreditParamEntree {
            codeEtablissement: number;
            dateTraitement: string;
            identifiantCredit: string;
            codeProvenance: string;
        }
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IDocumentVersionOutput {
        identifiantDocument: string;
        dateVersion: string;
        dateDocument: string;
        codeNature: string;
        identifiantDocumentGED: string;
        etatInjection: string;
        critereInjection: string;
        /**
         * Date metier
         * Type date au format yyyy-MM-dd
         */
        dateMetier: string;
        /**
         * Identifiant qui a modifié la date metier
         */
        agentModifDateMetier: string;
        /**
         * La date de la dernière modification de la date métier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifDateMetier: string;
        /**
         * Commentaire
         */
        commentaire: string;
        /**
         * Identifiant qui a modifié le commentaire
         */
        agentModifCommentaire: string;
        /**
         * La date de la dernière modification du commentaire
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifCommentaire: string;
        /**
         * Indicateur de de corbeille :
         * O pour document à la corbeille
         * N pour document non mis à la corbeille
         */
        indicateurCorbeille: boolean;
        /**
         * Identifiant qui a modifié l'indicateur de corbeille
         */
        agentModifIndicCorbeille: string;
        /**
         * La date de la dernière modification de l'indicateur de corbeille
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifIndicCorbeille: string;
    }
    interface IDocumentOutput {
        typeDocument: string;
        codeNatureAcquisition: string;
        typeAttributaire: string;
        identifiantAttributaire: string;
        libelleAttributaire: string;
        critereInjection: string;
        metaDonnee: string;
        classementNiveau1: string;
        ordreNiveau1: string;
        classementNiveau2: string;
        ordreNiveau2: string;
        etatInjection: string;
        indicDeplacementEspaceArchivage: string;
        invalide: boolean;
        listeDocumentVersion: Array<IDocumentVersionOutput>;
    }
    interface IRegroupementOutput {
        identifiantRegroupement: string;
        referenceRegroupement: string;
        libelleRegroupement: string;
        indicateurVerrouille: boolean;
        identifiantEtablissementGce: string;
        agent: string;
        dateCreation: string;
        userCreation: string;
        dateModification: string;
        userModification: string;
        listeDocument: Array<IDocumentOutput>;
        /**
         * Date de la dernière importation automatique des documents
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateAutoImportDocm: string;
    }
    interface IDossierNumeriqueMetierOutput {
        listeRegroupement: Array<IRegroupementOutput>;
    }
    interface ICommentaire {
        /**
         * IdntDocm
         */
        idDocm: string;
        /**
         * LiblCommentaire
         */
        libelleCommentaire: string;
    }
    interface IDateMetier {
        /**
         * IdntDocm
         */
        idDocm: string;
        /**
         * DateMetr
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateMetier: string;
    }
    interface IQstnMettreAJourDateMetier {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        listeDateMetier: Array<IDateMetier>;
    }
    interface IQstnMettreAJourCorbeilleSuppression {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        /**
         * ListIdntDoc
         */
        listeIdDoc: Array<string>;
    }
    interface IQstnMettreAJourCorbeilleRestauration {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        /**
         * ListIdntDoc
         */
        listeIdDoc: Array<string>;
    }
    interface IQstnMettreAJourCommentaire {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        listeCommentaire: Array<ICommentaire>;
    }
    interface IRspnCreerOuMajDossierNumerique {
        /**
         * IdntRegr
         */
        idRegr: string;
    }
    interface IBlocDocm {
        typeDoc: string;
        codeNatureAcq: string;
        typeAttrb: string;
        codeAttrb: string;
        libelleAttrb: string;
        metadonnee: string;
        critereInjc: string;
        classementNiveau1: string;
        ordreNiveau1: number;
        classementNiveau2: string;
        ordreNiveau2: number;
        indiceEnvoiDossierPartg: string;
        aideDoc: string;
    }
    interface IQstnCreerOuMajDossierNumerique {
        codeFour: string;
        idEtabGce: string;
        agent: string;
        referenceRegr: string;
        libelleRegr: string;
        metadonnee: string;
        indiceEnvoiDossierPartg: string;
        listeDoc: Array<IBlocDocm>;
    }
    interface IReponseImportAutomatique {
        nbDocumentImportes: number;
    }
    interface IQueryImportAutomatique {
        codeFour: string;
        referenceRegroupement: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IDossier {
        codeEtablissement: string;
        numeroDossier: number;
        identifiantEntiteTitulaire: string;
        portefeuille: string;
        motif: string;
        exigible: number;
        montantTotal: number;
        numeroPersonneGarantie: number;
        montantGel: number;
        dateAffectation: string;
        montantPerteRecouvrable: number;
        nombreCreance: number;
    }
    interface IGestionSuiteListe {
        topSuiteListe: boolean;
        dernierMontantLu: number;
        dernierNumeroDossierLu: number;
    }
    interface IContainer {
        dossiers: Array<IDossier>;
        gestionSuiteListe: IGestionSuiteListe;
    }
}

declare namespace Contentieux.RestServices.Modeles.Surendettement {
    interface IEcheancierBanqueDeFrance {
        /**
         * Identifie un contrat détenu par un client auprès d'un établissement du Groupe CE
         */
        identifiantContrat: string;
        /**
         * Numéro BDF du code observation_plan_dette
         */
        numeroBdfCodeObservation: number;
        /**
         * Cet indicateur permet de savoir si une dette fait l'objet de la Recommandation d'Effacement de Dette
         * '1': Oui  (le montant de la dette est effacé)
         * '0': Non  (la dette ne fait pas l'objet de l'effacement)
         */
        indicateurDetteEffacee: string;
        /**
         * Montant actualisé de la créance correspondant à un contrat de crédit ou d'engagement en Recouvrement
         */
        soldeActualise: number;
        /**
         * Détermine la périodicité de l'échéancier permet de libeller la périodicité de l'échéancier.
         * Valeurs :
         * 'M'        Mensuel
         * 'B'        Bimensuel
         * 'T'        Trimestriel
         * 'S'        Semestriel
         * 'A'        Annuel
         * 'U'        Unique
         */
        codePeriodiciteEcheancier: string;
        /**
         * Date de la première échéance d'un echeancier
         * Type date au format yyyy-MM-dd
         */
        datePremiereEcheance: string;
        /**
         * Il s'agit d'un indicateur permettant de savoir s'il la plan d'apurement est calculé avec le taux de pénalité de la créance ou un taux spécifique par palier du plan mis en place.
         * 'O' Utilisation du taux de pénalité de la créance
         * 'N' Utilisation d'un taux de pénalité spécifique pour  chaque palier du plan d'apurement.
         */
        indicateurTauxPenaliteCreance: string;
        /**
         * Il s'agit d'un indicateur permettant de savoir si l’échéancier est sur la totalité de la dette
         * 'O'        Apurement total de la créance
         * 'N'        Pas d'apurement total de la créance
         */
        indicateurApurementTotalCreance: string;
        /**
         * Cet indicateur permet de savoir si le plan d'apurement comporte un moratoire ou non
         * 'N'        Pas de Moratoire
         * 'O'        Moratoire
         */
        codeIndicateurMoratoire: string;
        /**
         * Référence interne d'identification d'un message échangé dans le cadre de la dématérialisation des courriers des dossiers de surendettment BDF.
         */
        numeroIdentifiantInterneMessage: number;
        /**
         * Contient le montant de l'effacement dans le cas d'un plan avec abandon
         */
        montantAbandon: number;
        /**
         * Code BDF de la catégorie de la dette contracté par le débiteur dans le dossier de surendettement.
         */
        categorieBdfDette: string;
        /**
         * Libelle BDF de la catégorie de la dette contracté par le débiteur dans le dossier de surendettement.
         */
        libelleBdfCategorie: string;
        /**
         * Désignation du créancier d'origine
         */
        nomCreancierOrigine: string;
        paliers: Array<IPalier>;
    }
    interface IPalier {
        /**
         * numero du palier
         */
        numeroPalier: number;
        /**
         * durée de l'échéance
         */
        duree: number;
        /**
         * montant de l'échéance
         */
        montantEcheance: number;
        /**
         * Taux de l'échéance
         */
        taux: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IEcheancierVAD {
        /**
         * Référence unique de l'échéancier émis pour un client sur une créance pour un VAD en plusieurs fois (Sur 9 Chiifres)
         */
        identifiant: number;
        /**
         * Détermine la situation de gestion de l'échéancier VAD dans le cadre du e-recouvrement d'une créance (Sur 1 Caractère)
         * 'C'        Caduc
         * 'A'        Actif
         * 'T'        Terminé
         * 'R'        Non respect
         * 'S'        Supprimé
         */
        codeStatut: string;
        /**
         * Cette date permet de savoir quand l'accord de recouvrement a été signé (Date S)
         * Type date au format yyyy-MM-dd
         */
        dateConclusionAccord: string;
        /**
         * Montant du recouvrement faisant l'objet d'un échelonnement des paiements (Sur 15 Chiffres)
         */
        montantEcheancierPaiement: number;
        /**
         * Montant effectivement réglé dans le cadre du plan de remboursement (Sur 15 Chiffres)
         */
        montantRegle: number;
        /**
         * Détermine le nombre d'échéances que comprend un échéancier (Sur 3 Chiffres)
         */
        nombreEcheances: number;
        /**
         * Date à laquelle le contenu d'une donnée ou occurrence de données est considéré comme exploitable par le système d'information :(Date S)
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        listeEcheances: Array<IEcheanceVAD>;
    }
    interface IEcheanceVAD {
        /**
         * Cette rubrique comprends le numéro de l'échéance en cours (Sur 3 Chiffres)
         */
        numeroEcheance: number;
        /**
         * Donnée contenant la date de l'échéance de l'échéancier de VAD (Date S)
         * Type date au format yyyy-MM-dd
         */
        dateEcheanceEcheancier: string;
        /**
         * Montant du paiement en ligne par carte bancaire dans le cadre du e-recouvrement de créances (Sur 15 Chiffres)
         */
        montantPaiement: number;
        /**
         * Détermine la situation de gestion d'une échéance donnée (Sur 1 Caractère) 'E' A prélever
         * 'P' Transmis à SYSTEMPAY 'R' Refusée
         * 'A' Annulée
         * 'V' Validée
         * 'S' Supprimée
         * 'X' Erreur technique
         */
        codeStatutEcheance: string;
        /**
         * Lors du retour d'une demande de paiement à natixis paiement. Cette rubrique décrit l'erreur retourné par SYSTEM PAY lors de la transaction (Sur 60 Caractères)
         */
        libelleErreurTransNatixis: string;
        /**
         * Libellé correspond au code statut de la demande de paiement dans le cadre du e-recouvrement (Sur 80 Caractères)
         */
        libelleStatutTransNatixis: string;
        /**
         * Indicateur permettant l'activation du bouton "Modifier" sur un dossier échéancier SEPA (sur 1 Caractère) 'O' Bouton actif
         * 'N' Bouton inactif
         */
        indicateurAutorisationModif: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IEcheancier {
        /**
         * A -> Apurement
         * R -> Reglement
         * S -> Surveillance ( a developper)
         * PBT -> Création du point budget
         */
        typeEcheancier: string;
        /**
         * Numéro d'identification d'un dossier de créances de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'une créance de la clientèle dans la gestion du Recouvrement.
         * Une créance correspond à la fraction ou la totalité des sommes dûes par un client sur un contrat de crédit ou un engagement.
         */
        identifiantCreance: string;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         */
        codeTypeProduitService: string;
        /**
         * Identifie un contrat détenu par un client auprès d'un établissement du Groupe CE
         */
        identifiantContrat: string;
        /**
         * Code produit / service dans la nomenclature du catalogue national / BPCE (ex CNCE) fonction de la hiérarchie nationale
         */
        codeProduitService: string;
        /**
         * Libellé long associé à un produit participant au catalogue des produits de crédit offerts au client
         */
        libelleProduitCredit: string;
        /**
         * Si opération GET
         * Numéro d'identification d'un accord de recouvrement
         * relatif à une créance donnée
         */
        numeroHistoAccord: number;
        /**
         * Cette donnée contient le montant de l'accord de la
         * créance.
         */
        montantAccord: number;
        /**
         * montantAccord + intérêts
         */
        montantTotal: number;
        /**
         * Date de la première échéance d'un plabn d'apurement
         * ou d'un plan de règlement.
         */
        datePremiereEcheance: number;
        /**
         * Date à laquelle l'accord de recouvrement a été conclu.
         */
        dateConclusionAccord: number;
        /**
         * cette donnée contient la date de la prochaine échéance.
         */
        dateProchaineEcheance: number;
        /**
         * Durée initiale du plan exprimée en périodes : soit en mois, en trimestres ou en années
         */
        dureeInitiale: number;
        /**
         * Cette durée représente la durée résiduelle du plan en nombre de périodes (soit des mois, des trimestres ou des ans en fonction de UCOBPE).
         */
        dureeResiduelle: number;
        /**
         * Correspond à la date d'établissement de l'échéancier (Création ou modification)
         * La date de mise en place de l'échéancier est positionnée à la date de jour de modification lorsque le gestionnaire modifie l'échéancier d'un plan.
         * Type date au format yyyy-MM-dd
         */
        dateMiseEnPlace: string;
        /**
         * Cette date représente la date de fin de l'accord du plan d'apurement. Elle est initialisée lors de la création du plan en TP en fonction de la date de début et la durée initiale du plan.
         * Elle est positionnée à la date du jour lors de la suppression TP du plan (CEMKPA = 'S')
         * Elle est positionnée à la date du jour lors de la  détection de la fin du plan (CEMKPA = 'T') dans certains cas.
         * Elle est positionnée à la date du jour lors de la caducité (Batch) du plan (CEMKPA = 'C')
         */
        dateFin: number;
        /**
         * 'M'        Mensuel
         * 'T'        Trimestriel
         * 'A'        Annuel
         */
        periodicite: string;
        /**
         * Montant total de l'impayés sur le plan d'apurement mis en place sur la créance.
         */
        montantImpayeAccordRecouvrement: number;
        /**
         * Montant de la prochaine échéance du plan d'apurement mis en place sur la créance.
         * Ce montant en règle générale, le montant de la prochaine échéance du plan d'apurement plus les éventuel impayés de l'accord.
         */
        montantProchaineEcheance: number;
        /**
         * Il s'agit d'un indicateur permettant de savoir si le plan d'apurement est calculé pour apurer totalement la créance
         * 'O'        Apurement total de la créance
         * 'N'        Pas d'apurement total de la créance
         */
        indicateurApurementTotalCreance: string;
        /**
         * Il s'agit d'un indicateur permettant de savoir si le plan d'apurement est calculé avec le taux de pénalité de la créance ou un taux spécifique par palier du plan mis en place.
         * 'O'        Utilisation du taux de pénalité de la créance
         * 'N'        Utilisation d'un taux de pénalité spécifique pour  chaque palier du plan d'apurement.
         */
        indicateurTauxPenaliteCreance: string;
        /**
         * Permet d'identifier l'origine du flux en contentieux.
         * '1'        Débiteur
         * 'D'        Mise en jeu de garantie
         * '7'        Autre
         */
        codeTypeOrigineFlux: string;
        /**
         * Cet indicateur permet de savoir si le plan d' apurement est de type NEIERTZ ou non
         * 'N'        Plan non de type NEIERTZ
         * 'O'        Plan NEIERTZ
         */
        indicateurPlanNeiertz: string;
        /**
         * Cet indicateur permet de savoir si le plan d'apurement comporte un moratoire ou non
         * 'N'        Pas de Moratoire
         * 'O'        Moratoire
         */
        indicateurMoratoire: string;
        /**
         * Pour les accords de recouvrement :
         * Code indiquant si le courrier de relance est géré de manière automatique ou non
         * Pour les plans de règlement :
         * Code indiquant si le courrier de relance Niveau 1 est géré de manière automatique ou non
         * Ce paramètre est indiqué au niveau général caisse et peut être modifié au niveau de chacun des plans
         * 'O'        Le courrier est géré en automatique
         * 'N'        Le courrier n'est pas géré en automatique
         */
        indicGestionAutoCourrierRelance: string;
        /**
         * Pour les accords de recouvrement :
         * Code indiquant si le courrier de mise en demeure est géré de manière automatique ou non
         * Pour les plans de règlement :
         * Code indiquant si le courrier de relance Niveau 2 est géré de manière automatique ou non
         * Ce paramètre est indiqué au niveau général caisse et peut être modifié au niveau de chacun des plans
         * 'O'        Le courrier est géré en automatique
         * 'N'        Le courrier n'est pas géré en automatique
         */
        indicGestionAutoMiseEnDemeure: string;
        /**
         * Détermine la situation d'un plan d'apurement donné dans la gestion du Recouvrement de créances
         * 'B'        Attente Signature
         * 'A'        Actif
         * 'R'        En retard
         * 'N'        Non respect
         * 'C'        Caduc
         * 'S'        Supprimé
         * 'T'        Terminé
         */
        codeEtatPlanApurement: string;
        palier: Array<IPalier>;
        compte: Array<ICompte>;
        /**
         * Il s'agit d'un indicateur permettant de savoir s'il le plan d'apurement ou le plan de règlement possède un historique
         * 'O'        Présence d'un historique
         * 'N'        Absence d'un historique
         */
        indicateurPresenceHistoPlan: string;
        /**
         * Taux de pénalité de retard d'une créance
         * Applicable sur tout ou partie du montant de la créance
         */
        tauxPenaliteRetard: number;
        /**
         * Top indiquant si pour le plan (apurement ou reglement)
         * a l'état actif, en retard ou en non respect, le client
         * reçoit un message de type SMS 3 jours avant chaque    échéance à venir pour le plan.
         * 'O'        Génération d'un SMS sur les échéances à venir.
         * 'N'        Pas de génération de SMS sur les échéances à venir.
         */
        indicateurAlerteSmsSurEcheance: string;
        /**
         * Top indiquant si pour le plan (apurement ou reglement) a l'état actif, en retard ou en non respect, le client reçoit un message de type SMS pour non-paiement ou non-respect d'une échéance du plan.
         * 'O'        Génération d'un SMS sur non-paiement.
         * 'N'        Pas de génération de SMS sur non-paiement.
         */
        indicateurSmsRelanceNonPaiement: string;
        periode: Array<IPeriode>;
        /**
         * En post :
         * S -> Simulation echeancier
         * C -> Création echeancier
         */
        codeAction: string;
        pointBudget: IPointBudget;
        /**
         * numéro de la personne titulaire de l’échéancier
         */
        numeroPersonTitulaireEcheancier: number;
        /**
         * numéro de téléphone sur lequel est envoyé le SMS
         */
        numeroTelephoneSms: string;
        /**
         * Référence d'identification de l'adresse d'un site ou d'une page web
         */
        adresseWebUrl: string;
        /**
         * Détermine si la mise en place d'un prélèvement est effective. Cet indicateur est déterminé à la création du plan.
         * 'N' Pas de prélèvement
         * 'O' Plan avec prélèvement (au moins un compte)
         */
        indicateurPlanAvecPrelevement: string;
        infosCreance: IInfosCreance;
        /**
         * Permet de savoir si le plan d'apurement doit être calculé de facon automatique ou non
         * 'O'        Calcul auto
         * 'N'        sans calcul auto
         */
        indicateurCalculAuto: string;
    }
    interface IPalier {
        /**
         * numero de palier (1 à n)
         */
        numero: number;
        /**
         * Durée du premier palier du plan d'apurement d'une d'une créance.
         * Cette durée peut être  exprimée en mois ou trimestres en fonction de la périodicité du plan d'apurement.
         */
        duree: number;
        /**
         * Montant d'une échéance de l'échéancier mis en place pour apurer une créance.
         */
        montant: number;
        /**
         * Taux du premier palier du plan d'apurement d'une d'une créance pour calcul des pénalités.
         * Ce taux saisi par le rédacteur lors de la mise en  place du plan d'apurement.
         */
        taux: number;
        /**
         * Montant de la part de remboursement du gel pour un palier
         */
        montantRemboursementGel: number;
        periode: Array<IPeriode>;
    }
    interface ICompte {
        /**
         * numero de comtpe de 1 à n
         */
        numeroCompte: number;
        /**
         * '0' ou
         * renseigné avec un compte de prélèvement
         */
        compteSupportRecouvrement: number;
        /**
         * '     ' ou
         * '00000' ou
         * renseigné avec une caisse
         */
        eaCompteSupportRecouvrement: string;
        /**
         * '     ' ou
         * '00000' ou
         * renseigné avec un guichet
         */
        guichetCompteSupport: string;
        /**
         * Pourcentage de l'échéance du plan d'apurement à prélever sur le compte support de recouvrement utilisé pour apurer la créance.
         */
        quotitePrelevee: number;
        /**
         * Référence d'identification du compte bancaire au niveau international
         * IBAN = International Bank Account Number
         */
        numeroIBAN: string;
        /**
         * Référence d'identification d'un Etablissement financier ou assimilé au niveau international
         * BIC = Bank Identifier Code ; norme ISO 9362
         */
        codeBIC: string;
        /**
         * Ce code permet de dissocier les comptes internes des comptes externes.
         * 'I'        Compte interne
         * 'E'        Compte externe
         */
        codeTypeCompte: string;
        /**
         * Permet d'identifier l'origine du flux en contentieux.
         * '1'        Débiteur
         * 'D'        Mise en jeu de garantie
         * '7'        Autre
         */
        codeTypeOrigineFlux: string;
        /**
         * Part de l'impayés global sur l'accord prélevé pour l'échéance du plan d'apurement sur l'autre compte  support.
         */
        montantImpayesPrelevement: number;
    }
    interface IEcheance {
        /**
         * Rang de l'échéance dans l'échéancier du plan d'apurement d'une créance.
         */
        numero: number;
        /**
         * Date de l'échéance dans l'échéancier mis en place dans le plan d'apurement d'une créance.
         * Type date au format yyyy-MM-dd
         */
        date: string;
        /**
         * Montant d'une échéance de l'échéancier mis en place pour apurer une créance.
         */
        montant: number;
        /**
         * Montant actualisé de la créance correspondant à un contrat de crédit ou d'engagement en Recouvrement.
         * Règle de gestion spécifique à la gestion du Recouvrement : capital + intérêts + commissions et frais divers éventuellement
         * Correspond à la somme due par la client
         */
        solde: number;
        /**
         * Ce code définit l'état d'une échéance d'un plan
         * Valeurs possibles pour les plans de règlement :
         * 'A'        blanc
         * 'E'        Non respectée
         * 'P'        Respectée
         */
        codeEtatEcheance: string;
        /**
         * Représente le montant gelé d'une créance gérée dans Vario. Part d'impayé sortie de la gestion du crédit et
         * cantonée dans une créance dans VARIO
         */
        montantGel: number;
        /**
         * Représente le solde  de la créance gelée après l'échéance
         */
        soldeCreanceGelee: number;
    }
    interface IPeriode {
        /**
         * Année de la période en cours
         */
        annee: number;
        /**
         * montal des interets sur l'année
         */
        totalInteret: number;
        echeance: Array<IEcheance>;
    }
    interface IEcheancePaiement extends IEcheance {
        /**
         * Montant de la part intérêts de retard de la créance contentieuse.
         */
        montantInteretRetard: number;
        /**
         * Montant des intérêts de retard non échus pour la créance depuis la dernière échéance du plan d'apurement.
         */
        montantInteretRetardNonEchus: number;
    }
    interface IEcheanceDegressivite extends IEcheance {
        /**
         * Solde débiteur attendu pour une date d'échéance dans le cadre d'un plan de réglement amiable
         */
        soldeDebiteurAttendu: number;
        /**
         * Ce code définit l'état d'une échéance d'un plan
         * Valeurs possibles pour les plans de règlement :
         * 'A'        blanc
         * 'E'        Non respectée
         * 'P'        Respectée
         */
        codeEtatEcheance: string;
    }
    interface IPointBudget {
        /**
         * Montant global des virements périodiques domiciliés sur le compte de dépots du client supérieur à un certain montant plancher et assimilé à  un revenu salarial
         */
        montantSalaire: number;
        /**
         * Montant des revenus locatifs perçus par une personne tous les mois.
         */
        montantRevenusLocatifs: number;
        /**
         * Montant total des autres revenus
         */
        montantAutresRevenus: number;
        /**
         * Montant charge financiere
         */
        montantCharges: number;
    }
    interface IInfosCreance {
        /**
         * Montant actualisé de la créance correspondant à un contrat de crédit ou d'engagement en Recouvrement.
         */
        soldeActualise: number;
        /**
         * Durée totale ajustée du crédit.
         */
        dureeTotaleCredit: number;
        /**
         * Représente le montant gelé d'une créance gérée dans Vario.
         */
        montantGelCreance: number;
        /**
         * Date de la dernière échéance effectuée sur un crédit ou créance
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEcheance: string;
        /**
         * Correspond à la date de fin de contrat. Pour crédit : date réelle de fin de crédit
         * Type date au format yyyy-MM-dd
         */
        dateFinContrat: string;
        /**
         * true = déchu
         * false = non déchu
         */
        etatDecheance: boolean;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IListeEtablissement {
        Etablissement: Array<IEtablissement>;
    }
    interface IEtablissement {
        /**
         * Identifiant d'un Etablissement du Groupe CE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Désignation d'un Etablissement (Caisse) du GCE comme
         * personne morale.
         * Cette information figure dans les statuts.
         */
        libelleEtablissement: string;
        /**
         * Cette propriété correspond à l'acronyme / abréviation de la Caisse utilisé comme suffixe d'adresse email.
         *
         * Exemples :
         * 11315 / cepac
         * 11425 / cen
         * 13135 / cemp
         * 13485 / celr
         * 14445 / cebpl
         * 14505 / celc
         * 16275 / cenfe
         * 18025 / picardie
         * 18315 / cecaz
         * 18715 / cepal
         */
        sigleEtablissement: string;
        /**
         * Référence d'identification de l'adresse d'un site ou d'une page web à saisir dans la barre d'adresses d'un navigateur pour accéder à cette ressource ou document.
         */
        sitwebEtablissement: string;
        /**
         * Ce libellé a été crée afin que certaines applications aient accès au dernier libellé historique de l'établissement (pré-fusions).
         */
        libellehistoEtablissement: string;
        /**
         * Ce libellé a été crée afin que certaines applications aient accès au dernier libellé court en date de l'établissement (post-fusions).
         */
        libelleactuelEtablissement: string;
        /**
         * Cette rubrique est le nom de l'enseigne à laquelle appartient l'établissement.
         * Cette information pourra être exploitée par toutes applications utilisant des maquettes pour l'envoi de mail ou de courrier.
         *
         * Exemples :
         * pour les CE   = "Caisse d'Epargne"
         * pour le CFF   = "Crédit Foncier"
         * pour la BCP   = "Banque BCP"
         * pour le CCOOP = "Crédit Coopératif"
         * ...
         */
        libelleenseigneEtablissement: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ILienHistoFinanceGarantie {
        /**
         * Définit l'Action à réaliser
         * 'C'        Création
         * 'S'        Suppression
         * 'M'        Modification
         * 'V'        Validation
         * 'I'          Interrogation (lecture)
         */
        codeAction: string;
        /**
         * Identifie un contrat détenu par un client auprès d'un établissement du Groupe CE :
         * Concerne l'épargne, les engagements, les services ...
         */
        identifiantContrat: string;
        /**
         * date de la journee bancaire en cours au moment de l'emission du CRE
         * Type date au format yyyy-MM-dd
         */
        dateJourneeBancaireEvt: string;
        /**
         * Numéro d'identification d'une opération comptabilisée dans la gestion des créances en Recouvrement / VARIO
         */
        numeroHistoComptable: number;
        /**
         * Date d'entrée en contentieux
         * Type date au format yyyy-MM-dd
         */
        datePassageContentieuxDossier: string;
        /**
         * Ce montant représente le montant de l'opération de retour de lot de créances pour gestion par un sous-traitant.
         */
        montantOperation: number;
        /**
         * Date de valeur d'une opération en contentieux. Date de valeur des opérations Contentieux = date effective de l'opération.
         * Type date au format yyyy-MM-dd
         */
        dateValeurOperationContentieux: string;
    }
    interface IValeurObjet {
        /**
         * Détermine la nature de l'estimation effectuée sur l'objet donné en garantie.
         * 'V'        Vénale ou à l'origine
         * 'S'        Judiciaire ou sur saisie
         * 'A'        Amiable
         * 'P'        Prudentielle
         */
        codeTypeEstimation: string;
        /**
         * Date de dernière estimation d'un objet / bien. Correspond à la date d'estimation initiale ou de ré-estimation de la valeur selon une méthode donnée
         * Type date au format yyyy-MM-dd
         */
        dateEstimation: string;
        /**
         * Le montant de l'événement est renseigné en fonction du type et du sous type événement.
         */
        montantEstimation: number;
        /**
         * Détermine le mode d'estimation de la valorisation d'un objet donné
         * 'EV'       Evaluation à partir du coût de l'opération
         * 'EX'       Expertise
         * 'RA'       Réévaluation automatique
         * 'DE'       Reprise Valeur d'instruction
         * 'SC'       Sur catalogue
         * 'SP'        Sur pièces
         * 'VA'        Valeur d'instruction
         * 'VC'        Visite complète
         * 'VE'        Visite extérieure
         * 'ME'       Moteur BPCE
         * 'MI'        Moteur interne
         */
        codeModaliteEstimation: string;
        /**
         * Top indiquant si la valeur de l'objet est celle retenue dans le calcul de la garantie. Une seule valeur d'objet peut être retenue dans le calcul de la valeur de la garantie.
         */
        indicValeurObjetUtilise: string;
        /**
         * Détermine le motif / origine et éventuellement le mod d'une ré-estimation de la valeur d'un objet donné.
         * 'O99'      Autres
         * 'O52'      Création de la garantie
         * 'O07'      Dégrèvement
         * 'O50'      Liquidation judiciaire
         * 'O01'      Mise en place dossier
         * 'O05'      Réevaluation indiv. méthode E2
         * 'O06'      Réevaluation indiv. méthode E3
         * 'O02'      Réevaluation stat. méthode S1
         * 'O03'      Réevaluation stat. méthode S2
         * 'O04'      Réevaluation stat. méthode E1
         * 'O09'      Reprise
         * 'O08'      Suivi de valorisation
         * 'AUT'      Automatique
         * 'O51'      Vente du bien
         */
        codeMotifReestimation: string;
    }
    interface IDetailGarantie {
        /**
         * Définit l'Action à réaliser
         * 'C'        Création
         * 'S'        Suppression
         * 'M'        Modification
         * 'V'        Validation
         * 'I'          Interrogation (lecture)
         */
        codeAction: string;
        /**
         * Identifie l'entité ayant mis à jour un élément / objet
         */
        identifiantAgent: string;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'une créance de la clientèle dans la gestion du Recouvrement.
         */
        identifiantCreance: string;
        /**
         * Numéro d'identification d'un dossier de créances de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * Numéro d'identification d'une garantie relatif à un dossier donné et portant sur une créance dans la gestion du Recouvrement.
         */
        numeroGarantieDossierCTX: number;
        /**
         * Identifie la personne référencée comme personne connue dans Client-Tiers garantissant un crédit ou engagement
         */
        identifiantPersonneGarant: number;
        /**
         * C'est la date à partir de laquelle la garantie est affectée au crédit.
         * Type date au format yyyy-MM-dd
         */
        dateAffectationGarantie: string;
        /**
         * C'est la date qui met un terme à la garantie d'un crédit.
         * Type date au format yyyy-MM-dd
         */
        dateFinAffectationGarantie: string;
        /**
         * Montant de la créance couverte par une garantie donnée montant actualisé à la dernière estimation
         */
        montantCouvertureCreanceGar: number;
        /**
         * Montant actuel de la garantie. Ce montant est actualisé en fonction des valeurs d'objets sous-jacents à la garantie.
         * A ne pas confondre avec le montant initial de la garantie qui est celui à la signature du contrat. Ce montant ne peut pas dépasser le montant initial.
         */
        montantActuelGarantie: number;
        /**
         * Montant initial de la couverture d'une créance par une garantie donnée Correspond au montant total ou à une fraction
         * de la garantie (à la signature du contrat) qui est affectée à la créance : une garantie peut être partagée entre plusieurs créances.
         */
        montantInitialCouvertParGaranti: number;
        /**
         * Montant de la créance couverte par une garantie donnée par partenaire pour une créance fractionnée
         */
        montantInitialGarantie: number;
        /**
         * Taux de garantie en % du montant de la créance apportée par une garantie de type sureté personnelle.
         */
        tauxGarantie: number;
        /**
         * Détermine un type de garantie selon la typologie MYSYS
         */
        codeNatureGarantieMySys: string;
        /**
         * Date fournit avec les données garanties dans le cadre de la V1.1 de Recouvrement
         * Type date au format yyyy-MM-dd
         */
        datePublication: string;
        /**
         * Date de 1ère mise en jeu de la garantie de la garantie Correspond à la date de 1er recouvrement par la garantie.
         * Type date au format yyyy-MM-dd
         */
        datePremiereMiseEnJeuGarantie: string;
        /**
         * Détermine si la garantie a été mise en jeu
         * totalement.
         * ' '        Pas de mise en jeu totale
         * 'O'        Mise en jeu totale
         */
        indicateurMisEnJeuGarantieTotal: string;
        /**
         * Permet de savoir si les alertes sur la date de fin de
         * garantie sont à générer.
         * 'O'        Alerte activée
         * ' '          Alerte activée
         * 'N'        Alerte désactivée
         */
        indicateurAlerteActivee: string;
        /**
         * Top indiquant si la garantie doit être ou pas utilisée dans le calcul de l'espoir de recouvrement.
         * 'O'        OUI
         * 'N'        NON
         */
        topGarantieUtiliseeCalcul: string;
        /**
         * Indique si un courrier à destination de la caution doit être envoye ou non.
         * Ce code est positionné à 'O' lorsque le courrier doit être envoye (valeur par defaut).
         * Ce code est utilise dans le segment O91G pour indiquer l'option d'edition au niveau de chaque creance.
         * Ce code est utilise dans le segment O91J pour indiquer l'option d'edition au niveau de chaque CEP.
         * 'O'        Le courrier caution doit être envoyé
         * 'N'        Pas de courrier caution à envoyer
         */
        indicateurEditionCaution: string;
        /**
         * Cette propriété représente le rang d'une hypothèque.
         */
        rangHypotheque: number;
        /**
         * Cette propriété représente le rang d'une garantie.
         */
        rangGarantie: number;
        /**
         * Détermine la nature d'une garantie portant sur une créance dans la gestion du Recouvrement
         */
        codeGarantie: string;
        /**
         * Détermine le type de garantie associée à un engagement (cautionnement, hypothèque,nantissement...)
         */
        typeGarantieGCE: string;
        /**
         * Détermine la catégorie de garantie. Typologie spécifique à la gestion du Recouvrement
         * 'R'        Sûreté réelle
         * 'P'        Sûreté personnelle
         * 'A'        Autre garantie
         */
        codeCategorieGarantie: string;
        /**
         * Détermine s'il le taux de couverture d'une garantie
         * est fourni
         * 'O'        taux fourni
         * 'N'        pas de taux
         */
        indicateurValorisatTauxCouvertu: string;
        /**
         * Détermine le taux de décote ou de surcote à appliquer pour actualiser la valeur de la garantie.
         */
        tauxDecoteGarantie: number;
        /**
         * Détermine si une décote est opérée sur une garantie donnée
         * 'O'        Présence d'une décote
         * 'N'         Pas de décote
         */
        indicateurDecoteGarantie: string;
        /**
         * Cette rubrique représente le libellé qui sera affiché au IHM pour savoir si la garantie est intégrée ou non dans le calcul de l'espoir de recouvrement.
         */
        libelleGarantie: string;
        /**
         * Libellé de désignation du type de garantie
         */
        libelleTypeGarantie: string;
        /**
         * Indique si la garantie est une contre-garantie en risque c'est à dire que cette garantie n'intervient pas dans le calcul de l'espoir de  recouvrement mais uniquement dans l'affectation des provisions en risques
         */
        indicateurContreGarantieRisque: string;
        /**
         * Référence d'identification d'une garantie portant sur une créance, référence établie par le système de gestion du  crédit/engagement
         */
        referenceExterneGarantie: string;
        lienHistoFinanceGarantie: ILienHistoFinanceGarantie;
        objetGarantie: Array<IObjetGarantie>;
        lienCpteRecvGaranti: ILienCpteRecvGaranti;
        /**
         * Ce rubrique permet d'indiquer s'il s'agit ou non d'une garantie d'Etat BPI pour les PGE.
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurGarantieEtatPGE: string;
    }
    interface IGarantie {
        /**
         * Numéro d'identification d'un dossier de créances de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * Identifie la personne référencée comme personne connue dans Client-Tiers garantissant un crédit ou engagement
         */
        identifiantPersonneGarant: number;
        /**
         * Détermine la nature d'une garantie portant sur une créance dans la gestion du Recouvrement
         */
        codeGarantie: string;
        /**
         * Numéro d'identification d'une garantie relatif à un dossier donné et portant sur une créance dans la gestion du Recouvrement.
         */
        numeroGarantieDossierCTX: number;
        /**
         * C'est la date qui met un terme à la garantie d'un crédit.
         * Type date au format yyyy-MM-dd
         */
        dateFinGarantie: string;
        /**
         * 'O' : La garantie est exprimée en taux
         * 'N' : la garantie est exprimée en montant
         */
        indicateurGarantieEnTaux: string;
        surete: ISurete;
        detailGarantie: IDetailGarantie;
    }
    interface ISurete {
        /**
         * Indique si la garantie est exprimée en
         * taux ou en montant
         * 'O' -> Taux
         * 'N' -> Montant
         */
        indicateurGarantieEnTaux: string;
    }
    interface ISuretePersonnelle extends ISurete {
        /**
         * Taux de garantie en % du montant de la créance apportée par une garantie de type sureté personnelle.
         */
        quotite: number;
        /**
         * Montant de la créance couverte par une garantie donnée montant actualisé à la dernière estimation
         */
        montant: number;
        /**
         * Identifie la personne référencée comme personne connue dans Client-Tiers garantissant un crédit ou engagement
         */
        numeroPersonne: number;
    }
    interface ISureteReelle extends ISurete {
        /**
         * Montant de la créance couverte par une garantie donnée montant actualisé à la dernière estimation
         */
        montant: number;
        /**
         * Cette rubrique représente le libellé qui sera affiché au IHM pour savoir si la garantie est intégrée ou non dans le calcul de l'espoir de recouvrement.
         */
        libelleGarantie: string;
    }
    interface IObjetGarantie {
        /**
         * Identifie un objet donné en garantie d'une créance en recouvrement gérée dans VARIO
         */
        identifiantObjetCtx: string;
        /**
         * Détermine un objet-type pouvant être mis en garantie
         */
        codeObjetGarantie: string;
        /**
         * 1ère ligne de l'adresse de l'objet.
         */
        adresseLigne1: string;
        /**
         * Suite 1ère ligne de l'adresse de l'objet.
         */
        adresseLigne1Suite: string;
        /**
         * 2eme ligne de l'adresse de l'objet.
         */
        adresseLigne2: string;
        /**
         * 3eme ligne de l'adresse de l'objet.
         */
        adresseLigne3: string;
        /**
         * 4eme ligne de l'adresse de l'objet.
         */
        codePostale: string;
        /**
         * 5eme ligne de l'adresse de l'objet.
         */
        commune: string;
        valeurObjet: Array<IValeurObjet>;
    }
    interface ILienCpteRecvGaranti {
        /**
         * Définit l'Action à réaliser
         * 'C'        Création
         * 'S'        Suppression
         * 'M'        Modification
         * 'V'        Validation
         * 'I'          Interrogation (lecture)
         */
        codeAction: string;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'une créance de la clientèle dans la gestion du Recouvrement.
         */
        identifiantCreance: string;
        /**
         * Référence d'identification du compte bancaire au niveau international
         */
        numeroIBAN: string;
        /**
         * Numéro d'identification d'une garantie relatif à un dossier donné et portant sur une créance dans la gestion du Recouvrement.
         */
        numeroGarantie: number;
        /**
         * Cette date correspond au jour de création du lien entre le recouvrement et la garantie concernée
         * Type date au format yyyy-MM-dd
         */
        dateCreationLienRecouvGarantie: string;
        /**
         * Cette date correspond au jour de fin du lien entre le cpte de recouvrement et la garantie concernée.
         * Type date au format yyyy-MM-dd
         */
        dateFinLienRecouvGarantie: string;
    }
    interface IGarantieParamEntree {
        topCreationLienHistoFiGarantie: string;
        topLienCpteRecvGaranti: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IHabilitationPortefeuille {
        codeEtablissement: string;
        identifiantEDS: number;
        identifiantPortefeuille: number;
        libellePortefeuille1: string;
        libellePortefeuille2: string;
        codeAgence: string;
        codeModeAcces: string;
        codeTypeRattachement: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.EDS {
    interface IInformation {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code CTR de rattachement
         */
        codeCtrRattachement: string;
        /**
         * Type d'EDS
         */
        typeEDS: string;
        /**
         * Libellé de l'EDS
         */
        libelleEDS: string;
        /**
         * Libellé court du type d'EDS
         */
        libelleCourtTypeEDS: string;
        /**
         * Date début validité de l'EDS
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeEds: string;
        /**
         * Date fin validité de l'EDS
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEds: string;
        /**
         * Identifiant de l'EDS qui dirige
         */
        identifiantResponsableEDS: number;
        /**
         * Identifiant interne de l'EDS de rattachement
         */
        identifiantEDSRattachement: number;
        /**
         * Désignation de l'EDS de rattachement
         */
        designationEDSRattachement: string;
        /**
         * Numéro téléphone
         */
        numeroTelephone: string;
        /**
         * Numéro téléphone interne
         */
        numeroTelephoneInterne: string;
        /**
         * Num SIRET établissement entreprise
         */
        numSiretEtablissementEntreprise: string;
        /**
         * Prix TTC appel
         */
        prixTtcAppel: number;
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Code civilité personne physique
         */
        civilite: string;
        /**
         * Nom usage Personne Physique
         */
        nomUsage: string;
        /**
         * Premier prénom état civil Personne
         */
        prenom: string;
        /**
         * Type fonction (métier) associée au poste fonctionnel
         */
        typeFonction: string;
        /**
         * Libellé fonction poste fonctionnel
         */
        libelleFonction: string;
        /**
         * Désignation longue agent interne
         */
        nomAgentTraitement: string;
        /**
         * Adresse messagerie
         */
        adresseEMail: string;
        /**
         * Date création
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Indicateur agent non nominatif
         */
        indicAgentNonNominatif: string;
        /**
         * Indicateur agent affectable
         */
        indicAgentAffectable: string;
        /**
         * Taux d'occupation d'un poste fonctionnel
         */
        tauxOccupationPosteFonctionnel: number;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Référence externe agent
         */
        referenceExterneAgent1: number;
        /**
         * Numéro Caisse
         */
        numeroCaisse: string;
        /**
         * Code entité administrative
         */
        codeEntiteAdministrative: string;
        /**
         * Code entité administrative
         */
        codeEntiteAdministrative1: string;
        /**
         * Numéro téléphone
         */
        numeroTelephone1: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephone2: string;
        /**
         * Num SIRET établissement entreprise
         */
        numeroSIRET: string;
        /**
         * Numéro téléphone interne
         */
        numeroTelephoneInterne1: string;
        /**
         * Prix TTC appel
         */
        prixTtcAppel1: number;
        /**
         * Identifiant site
         */
        identifiantSite: number;
        /**
         * Code pays INSEE
         */
        codePays: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephoneAdresse: string;
        /**
         * Numéro téléphone interne
         */
        numeroTelephoneInterne2: string;
        /**
         * Prix TTC appel
         */
        prixTtcAppel2: number;
        /**
         * Adresse messagerie
         */
        adresseMessageriePI: string;
        /**
         * Identifiant site de correspondance
         */
        identifiantSiteCorrespondance: number;
        /**
         * Adresse 1 SITE CORRESPONDANCE
         */
        adresse1SiteCorrespondance: string;
        /**
         * Adresse 2 SITE CORRESPONDANCE
         */
        adresse2SiteCorrespondance: string;
        /**
         * Adresse 3 SITE CORRESPONDANCE
         */
        adresse3SiteCorrespondance: string;
        /**
         * Adresse 4 SITE CORRESPONDANCE
         */
        adresse4SiteCorrespondance: string;
        /**
         * Adresse 5 SITE CORRESPONDANCE
         */
        adresse5SiteCorrespondance: string;
        /**
         * Code INSEE pays résidence fiscale
         */
        codeInseePaysResidenceFiscale: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephoneAdresse1: string;
        /**
         * Numéro téléphone interne
         */
        numeroTelephoneInterne3: string;
        /**
         * Prix TTC appel
         */
        prixTtcAppel3: number;
        /**
         * Adresse messagerie
         */
        adresseMessagerie: string;
        /**
         * Type d'agence
         */
        typeAgence: string;
        /**
         * Désignation du type d'agence
         */
        libelleTypeAgence: string;
        /**
         * Type service (EDS)
         */
        typeService: string;
        /**
         * Désignation type service (EDS)
         */
        libelleTypeService: string;
        /**
         * Date modification
         * Type date au format yyyy-MM-dd
         */
        dateModification: string;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Référence interne de l'EDS
         */
        referenceInterneEDS: number;
        /**
         * Référence externe de l'EDS
         */
        referenceExterneEDS: number;
        /**
         * Libellé long du type d'EDS
         */
        libelleLongTypeEDS: string;
        /**
         * Niveau hiérarchique de l'EDS
         */
        niveauHierarchiqueEDS: number;
        /**
         * Identifiant externe de l'EDS de rattachement
         */
        identifiantExtEDSRattachement: number;
        /**
         * Type d'EDS de rattachement
         */
        typeEDSRattachement: string;
        /**
         * Groupe identifiant EDS
         */
        groupeIdentifiantEDS: string;
        /**
         * Nom famille Personne Physique
         */
        nomFamille: string;
        /**
         * Ligne 2 adresse site
         */
        ligneAdresseSite2: string;
        /**
         * Ligne 3 adresse site
         */
        ligneAdresseSite3: string;
        /**
         * Ligne 4 adresse site
         */
        ligneAdresseSite4: string;
        /**
         * Ligne 5 adresse site
         */
        ligneAdresseSite5: string;
        /**
         * Ligne 6 adresse site
         */
        ligneAdresseSite6: string;
        /**
         * Numéro fax
         */
        numeroFax1: string;
        /**
         * Code INSEE localité
         */
        codeInseeLocalite1: string;
        /**
         * Code INSEE localité
         */
        codeInseeLocalite: string;
        /**
         * Numéro fax
         */
        numeroFax: string;
        /**
         * Libellé long type d'EDS de rattachement
         */
        libelleLongTypeEDS1: string;
        /**
         * Libellé court du type d'EDS de rattachement
         */
        libelleCourtTypeEDS1: string;
        /**
         * Libellé tarif tel EDS
         */
        libelleTarifTelEDS: string;
        /**
         * Libellé tarif tel EDS
         */
        libelleTarifTelEDS1: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInformation;
        infoEDSRattachement: IInformation;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IInformationGarantie {
        /**
         * Référence d'identification de la garantie gérée dans un système de gestion de crédit/engagement et consolidée dans la Base Centralisée des Garanties (27 caractères).
         */
        identifiantExterneGarantie: string;
        /**
         * Libellé de format moyen de désignation du type de garantie (32 caractères).
         */
        libelleTypeGarantie: string;
        /**
         * Date à laquelle une garantie est affectée à un crédit.
         * Type date au format yyyy-MM-dd
         */
        dateAffectationGarantie: string;
        /**
         * Date de fin de prise d'effet d'une Garantie.
         * Type date au format yyyy-MM-dd
         */
        dateFinAffectationGarantie: string;
        /**
         * Montant de la garantie déterminé lors de la mise en place de la garantie.
         */
        montantInitialGarantie: number;
        /**
         * Montant d'appel en provisionnel d'une garantie BPI pour un prêt garanti par l'état.
         */
        montantEcretageProvisionnel: number;
        /**
         * Date du versement BPI pour l'appel provisionnel en garantie sur un prêt garanti par l'état (PGE).
         * Type date au format yyyy-MM-dd
         */
        dateVerstAppelProvisionnel: string;
        /**
         * Montant d'appel final d'une garantie BPI pour un prêt garanti par l'état.
         * Il s'agit du montant versé par BPI en complément du de l'appel provisionnel, ou prélevé dans le cas d'un reversement de trop perçu.
         */
        montantAppelFinalGarantie: number;
        /**
         * Date du versement BPI pour l'appel final en garantie sur un prêt garanti par l'état (PGE).
         * Type date au format yyyy-MM-dd
         */
        dateVerstAppelFinal: string;
        /**
         * Type d'opération effectuée sur un compte :
         * 'R'        Remboursement code opération '3X' ou '9X'.
         * 'V'        Versement code opération '2X' ou '8X'.
         * ' '          Non utilisé.
         */
        codeSensOperation: string;
        /**
         * Détermine l'application, le module applicatif, le sytème de gestion d'origine de données relatives aux créances/garanties/objets. Typologie propre à BCG / Base Centralisées des Garanties :.
         * 'VARIO'           Application de gestion des crédit en contentieux
         * 'SYNCHRO'    Logiciel de gestion des crédits des CE
         * 'ALIS'              Logiciel de gestion de crédits complexes, sera rebaptisé en GECCO (GEstion des Crédits Complexes Optimisée) et intégré en tant que nouveau module de SYNCHRO pour le montage de crédits complexes
         * 'CEFI'              Ancienne appellation de NAFI (Crédit de Consommation venant de Natixis Finance)
         */
        codeAppliProvenance: string;
        /**
         * Date de l'écrêtage provisionnel initial BPI
         * Type date au format yyyy-MM-dd
         */
        dateEcretageProvisionnel: string;
        /**
         * Montant de l'écrêtage provisionnel initial BPI
         */
        montantProvisionnelInitial: number;
        /**
         * Date du dernier écrêtage saisi
         * Type date au format yyyy-MM-dd
         */
        dateCreationEnregistrement: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.IInfosDossierAdministratif {
    interface IInfosDossierAdminist {
        /**
         * Numéro d'identification d'un portefeuille de gestion
         * de dossiers de créances en Recouvrement dans un
         * Etablissement donné du GCE (anciennement rédacteur).
         */
        portefeuille: string;
        /**
         * Date de la dernière entrée d'un dossier dans VARIO
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEntree: string;
        /**
         * Détermine la cause d'entrée en gestion du
         * Recouvrement d'une créance donnée
         */
        motif: string;
        siren: string;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement du GCE.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Numéro d'identification d'un dossier de créances
         * de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * ARCHIVE / CLOS / EN COURS DE CESSION / CEDE / SURENDETTEMENT / PROCEDURE COLL
         */
        etiquette: string;
        /**
         * Date d'ouverture du jugement.
         * Type date au format yyyy-MM-dd
         */
        jugementDu: string;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement bancaire sur la plateforme
         * Mysys
         * Personne référencée comme client, tiers ou prospect.
         */
        cedeA: number;
        /**
         * Cette date détermine la date à laquelle le
         * gestionnaire a effectué la cession d'un paquet
         * de créances à un même cessionnaire.
         * Type date au format yyyy-MM-dd
         */
        dateCession: string;
        /**
         * Date de cloture adminisistrative du dossier de
         * créances dans la gestion du Recouvrement
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.InfosDossierHisto {
    interface IContainer {
        evenementATraiter: Array<IEvenement>;
        evenementRealises: Array<IEvenement>;
        evenementFutur: Array<IEvenement>;
    }
    interface IEvenement {
        /**
         * Cette date représente la date effective de l'événement
         * Type date au format yyyy-MM-dd
         */
        dateEvenement: string;
        /**
         * A chaque code type et sous type événement, est
         * associé un libellé.
         * Exemple :
         * Pour un type événement 'Ouverture', il existe
         * sous types suivants :
         *   - Préouverture prêt
         *   - Prise en compte d'une créance
         */
        sousTypeEvenement: string;
        /**
         * Pour les types événement 'ouverture', 'Aggravation',
         * 'Encaissement' et 'Fermeture' cette date contient la
         * date de traitement de l'événement.
         * Pour les types événement 'Notes d'alerte' et 'Notes
         * de suivi' , cette date contient la date de saisie de
         * la validation de la note. Elle vaut '0001-01-01' si
         * la note n'est pas validée.
         * Type date au format yyyy-MM-dd
         */
        dateValidation: string;
        /**
         * Personne à l'origine de l'evenement
         */
        redacteur: string;
        /**
         * Identifie un contrat détenu par un client auprès d'un Etablissement du Groupe CE
         */
        identifiantContrat: string;
        /**
         * C'est la date de la saisie de l'événement.
         * En cas de création BATCH, c'est la date du traitement
         * de l'événement.
         * Type date au format yyyy-MM-dd
         */
        dateCreationEvenement: string;
        /**
         * Pour les types événement 'ouverture', 'Aggravation',
         * 'Encaissement' et 'Fermeture' ce libellé est à blanc.
         * Pour les types événement 'Notes d'alerte' et 'Notes
         * de suivi' , c'est la valeur de la saisie lors de la
         * création de la note.
         */
        commentaire: string;
        codeTypeEvenement: string;
        codeSousTypeEvenement: string;
        numeroSousTypeEvenement: number;
        numeroPriorite: number;
        identifiantCreance: string;
    }
    interface IEvenementProcedure extends IEvenement {
        libelleProcedure: string;
        libelleEtape: string;
        codeEtape: string;
        codeProcedure: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IInfosDossier {
        /**
         * Numéro d'identification d'un dossier de créances de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * Détermine la date de création du dossier
         */
        dateCreation: string;
        /**
         * indique l'étape du cycle de vie d'un dossier de créances dans la gestion du Recouvrement :
         * 'amiable' ou en 'contentieux'
         * Valeurs possibles :
         *   'A'        Amiable
         *   'C'        Contentieux
         */
        phaseRecouvrement: string;
        /**
         * Cette donnée permet de bloquer la clôture automatique des dossiers.
         * Valeurs possibles :
         *   'O'        Blocage de la régularisation
         *   'N'        Pas de blocage de la régularisation
         */
        blocageCloture: boolean;
    }
    interface IListeDossierET {
        dossierET: Array<IDossierET>;
    }
    interface IDossierET {
        numeroDossier: number;
        identifiantEntiteTitulaire: string;
        identifiantPortefeuille: number;
        portefeuille: string;
        motif: string;
        montantImpaye: number;
        montantContentieux: number;
        statutDossierConsultable: string;
        dateBlocageConsultation: string;
        dateReactivationConsultation: string;
        dateSuppressionPrevisionelle: string;
        identifiantAgent: string;
        montantCRD: number;
        exigible: number;
        montantTotal: number;
        etiquette: string;
        cedeA: string;
        dateCession: string;
        dateCloture: string;
        codeFamille: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
        listePersonneMandataire: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
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
         * Type date au format yyyy-MM-dd
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
         * Type date au format yyyy-MM-dd
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
    }
    interface IPersonneEntiteTitulaire {
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
        /**
         * Le type de mandat permet d'enregistrer une
         * procuration qu'accorde un client sur tout
         * ou partie de ses comptes à une autre personne.
         *
         *            Valeurs :
         * 'G'        Procuration générale (sauf CDD,cpte titre,coffre)
         *            On donne procuration sur tous les comptes
         *            de la personne.
         * 'P'        Procuration générale par compte
         *            On donne procuration sur un compte
         *            en disposition
         * 'PS'       Procuration spéciale d'administration
         *            On donne le droit de gérer le compte, mais
         *            pas d'en bénéficier.
         * 'K'        Procuration spéciale porteur de carte pro
         *            On donne procuration sur les comptes support
         *            pour détention de carte
         */
        typeMandat: string;
    }
    interface IInterrogationDesignation {
        /**
         * Code Etablissement entité juridique
         */
        codeEtablissement: string;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
    }
    interface IDesignation {
        /**
         * Code Etablissement entité juridique
         */
        codeEtablissement: string;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Désignation ET
         */
        designationET: string;
    }
    interface IListeInterrogationDesignation {
        listeInterrogationDesignation: Array<IInterrogationDesignation>;
    }
    interface IDesignationET {
        listeDesignation: Array<IDesignation>;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IMedia {
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentificationPersonne {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le  SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
    }
    interface IListeMedia {
        /**
         * '01'       Téléphone fixe
         * '02'       Téléphone mobile
         * '03'       E-mail
         * '04'       Fax
         * '05'       SiteWeb
         */
        codeTypeMedia: string;
        /**
         * libellé type média
         */
        libelleTypeMedia: string;
        /**
         * 'P'        Personnel
         * 'T'        Professionnel
         * 'A'       Sécurisation Opérations en Ligne (SOL)
         */
        codeTypeUsageMedia: string;
        /**
         * libellé type usage média
         */
        libelleTypeUsageMedia: string;
        /**
         * ‘O’        Oui
         * ‘N’        Non
         */
        indicateurPreferenceMedia: boolean;
        /**
         * Adresse mail ou n° de téléphone
         */
        referenceAccesMedia: string;
        /**
         * Indique si le client accepte d'être contacté par ce moyen de contact (Mail, téléphone).
         * Valeurs possibles :
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurOptin: boolean;
        /**
         * commentaire d'un numero de telephone
         */
        commentaire: string;
        /**
         * Code indicatif téléphone international
         */
        indicatifTelephone: string;
        /**
         * Un téléphone défini comme étant sécurisé est celui qui sera utilisé pour les transactions en ligne, les opérations sécurisées...
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurSecu: boolean;
        /**
         * Option choisie par le client pro pour refuser de recevoir des informations commerciales par SMS, fax ou mail (ensemble des média)
         * '0'        envoi commercial par SMS, fax ou mail
         * '1'        pas d'envoi commercial par SMS, fax ou mail
         */
        indicateurProOptout: boolean;
        /**
         * Option choisie par le client pour recevoir des informations commerciales par SMS ou fax.
         * '0'        envoi commercial par SMS ou fax
         * '1'        pas d'envoi commercial par SMS ou fax
         */
        indicateurSmsFax: boolean;
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

declare namespace Contentieux.RestServices.Modeles {
    interface IMemo {
    }
    interface IMemoParamEntree {
        codeAction?: string;
        numeroDossier?: number;
        codeEtablissement?: string;
        identifiantCreance?: string;
        numeroMemoAvantV2?: number;
        dateCreation?: string;
        codeType?: string;
        libelleCourt?: string;
        libelleLong1?: string;
        libelleLong2?: string;
        codeAgent?: string;
        numeroMemo?: number;
        libelleLongMemoCreance?: string;
        libelleLongComplementCreance?: string;
        dateEffet?: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IMouvementFinancier {
        codeMonnaiePriseOrdre: string;
        montantTotal: number;
        montantCapitalCreance: number;
        montantInteretDossier: number;
        montantFraisDossier: number;
        montantAssuranceCreance: number;
        montantInteretRetardDossier: number;
        montantPartCreanceAPL: number;
        montantBonificationAcquiseOrdre: number;
        /**
         * D -> Aggravation
         * C -> Récupération
         */
        codeSens: string;
        dateValeurOperationContentieux: string;
        dateEntreeContentieux: string;
        codeTypeProduitService: string;
        libelleMouvementCreance: string;
        codetypeOrigineFlux: string;
        indicateurEvtDeclenchementAuto: string;
        montantInteretRetardCompta: number;
        montantInteretRetardNonCompta: number;
        montantElementNonCompta: number;
        dateValeurDecompte: string;
        codeOperationCredit: string;
        indicateurOrigineSST: string;
        codeTypeMouvementFinancier: string;
        numeroHistoComptable: number;
        identifiantInternePartenaire: string;
        codeEtablissement: string;
        identifiantCreance: string;
        recuperationPerte: IRecuperationPerte;
    }
    interface IRecuperationPerte {
        codeAction: string;
        motifRecuperation: string;
        montantRecupereAffecteDossier: number;
        codeAgent: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface INoteBale2 {
        /**
         * Détermine le type d'entité faisant l'objet d'une notation.
         *
         * Valeurs :
         * '1'       Entité titulaire
         * '2'       Personne (physique ou morale)
         * '3'       Engagement
         * '4'       Dossier
         */
        typeAttributaireNote: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys.
         * Personne référencée comme client, tiers ou prospect.
         */
        numeroPersonne: number;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ..
         * Correspond au code Banque sous lequel un Etablissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        listeNoteBale2: Array<IDetailNoteBale2>;
    }
    interface IDetailNoteBale2 {
        /**
         * Détermine la typologie d'une note Bale2.
         *
         * Exemples de valeurs :
         * 'NBP1'     Comportement
         * 'NBP2'     Financière
         * 'NBP3'     Qualitative
         * 'NET'      Entité Titulaire
         * 'NBP4'     Dossier
         * 'NENG'     Engagement
         */
        codeTypeNoteBale2: string;
        /**
         * Indique la situation de gestion de l'entité notée.
         * Les entités faisant l'objet d'une notation sont :
         * - les personnes
         * - les entités titulaires
         * - les dossiers d'engagements
         * - les engagements élémentaires
         *
         * Valeurs :
         * '1'        une entité dite "en attente" :
         *             - personne ou entité titulaire dont le dossier est
         *               en instance de décision
         *             - dossier ou engagement élémentaire en instance de décision
         * '2'        un dossier valide - accepté ou une entité titulaire dont le dossier est décidé : accepté ou refusé
         * '3'        un dossier valide - refusé
         * '4'        un dossier ou engagement obsolète
         * '5'        un dossier clos
         */
        codeEtatProprietaireNote: string;
        /**
         * Détermine l'établissement pilote / référent de la notation d'une personne donnée.
         */
        codeEtablissementPilote: string;
        /**
         * Libellé de l'identifiant moteur de Notation.
         *
         * Exemples de valeurs :
         * Moteur NIA : Notation Bâle 2 des Particuliers
         * Moteur NIO : Notation Bâle 2 des Professionnels
         * Moteur NIE : Notation Bâle 2 des Corporates
         */
        libelleMoteur: string;
        /**
         * Correspond au libellé de l'établissement pilote de la personne morale.
         */
        libelleEtablissementPilote: string;
        /**
         * Libellé de désignation de l'origine de la notation.
         */
        libelleOrigineBale2: string;
        /**
         * Libellé de désignation du processus Bale2.
         */
        libelleProcessusBale2: string;
        /**
         * Indique s'il s'agit d'une note prospect ou non.
         *
         * Valeurs :
         * True       Note Prospect
         * False     Note Client
         */
        indicateurNoteProspect: boolean;
        /**
         * Heure d'enregistrement de l’événement de création ou de modification d'une note.
         */
        heureNotation: number;
        /**
         * Détermine la date du dernier évènement :
         *      - soit la création initiale d'une note
         *      - soit la modification d'une note
         * Type date au format yyyy-MM-dd
         */
        dateNotation: string;
        /**
         * Détermine le contexte métier utilisé lors de la notation.
         * Permet de distinguer :
         *            - la notation initiale à l'octroi d'engagement
         *            - la notation de suivi périodique
         *
         * Valeurs :
         * 'O'        Octroi
         * 'S'        Suivi Périodique Mensuel
         * 'Q'        Suivi Périodique Quotidien
         * 'R'        Révision Périodique Indéfinie
         * 'F'        Forçage en défaut
         */
        codeContexteMetierBale2: string;
        /**
         * Détermine la note globale d'une entité.
         * Correspond au niveau de regroupement de la note.
         *
         * Valeurs :
         * '0'        Positif
         * '1'        Positif
         * '2'        Positif
         * '3'        Positif
         * '4'        Positif
         * '5'        Positif
         * '6'        Positif
         * '7'        Positif
         * '8'        Incertain
         * '9'        Très incertain
         * '?'        Note non calculée/non calculable
         * 'A'        Note non calculée/non calculable
         * 'J'        Jeunesse de comptes
         * 'D'        Client en défaut Bâlois (non douteux)
         * 'E'        Note Expert prioritaire
         * 'C'        Absence de comptes
         * 'R'        Absence de règles de notation
         * 'X'        Client en défaut Bâlois (douteux)
         * 'V'        Données financières trop anciennes
         */
        noteBale2Reduite: string;
        /**
         * Détermine la valeur calculée d'un type de note attribuée à une entité donnée.
         * Correspond à la valeur mémorisée.
         */
        noteBale2calculee: string;
        /**
         * Détermine l'établissement noteur de chaque note personne.
         */
        codeEtablissementNoteur: string;
        /**
         * Correspond au libellé de l'établissement qui a effectué la notation Bâle II.
         */
        libelleEtablissementNoteur: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.Offre {
    interface IOffre {
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Numéro offre souscrite
         */
        numeroOffre: number;
        /**
         * Nom Commercial P/S
         */
        nomCommercialPS: string;
        /**
         * Date ouverture offre souscrite
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureOffreSouscrite: string;
        /**
         * Code état offre
         */
        codeEtatOffre: string;
        /**
         * Date clôture offre
         * Type date au format yyyy-MM-dd
         */
        dateClotureOffre: string;
        /**
         * Nom Commercial Court P/S
         */
        nomCommercialCourtPS: string;
        /**
         * Code caractère forfaitaire offre
         */
        codeCaractereForfaitaireOffre: string;
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService: number;
        /**
         * Code famille gestion produit/service
         */
        codeFamilleGestionPS: string;
        /**
         * identifiant Produit/service associé
         */
        identifiantProduitServiceAss: number;
    }
    interface IRecherche {
        listeOffres: Array<IOffre>;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICodeForcage {
        /**
         * libellé retourné par la Qr pour expliquer pourquoi il y a une demande de forcage
         */
        libelleForcage: string;
        /**
         * code établissement du compte concerné par la demande de forcage
         */
        codeEtablissementCompteForcage: string;
        /**
         * code guichet du compte concerné par la demande de forcage
         */
        codeGuichetCompteForcage: string;
        /**
         * référence produit service du compte concerné par la demande de forcage
         */
        referenceProduitCompteForcage: string;
        /**
         * ce code retour indique à l'appelant si un forcage est possible ou non. 000 la mise à jour a été faite 999 la mise à jour n'a pas été faite mais peut être forcée
         */
        codeRetour: number;
    }
    interface IDetailOperationCheque {
        /**
         * Numéro du chèque déposé ou retiré
         */
        numeroCheque: string;
        /**
         * Type du chèque déposé ou retiré, à ne valoriser qu'en mode 02
         */
        typeCheque: string;
        /**
         * Nom du bénéficiaire du chèque
         */
        nomBeneficiaire: string;
        /**
         * Indique s'il s'agit de la dernière contrepartie d'un chèque de banque. à ne valoriser qu'en mode 09
         *             Valeurs possibles :
         *  'M'        Le chèque reste ou passe à l'état "en cours".
         *  'L'        Dernière contrepartie, le chèque passe à l'état "émis".
         *  'D'        Identique à 'L' (Besoin PETRA).
         */
        codeDerniereContrePartie: string;
    }
    interface IDetailOperationDiverse {
        /**
         * Type de l'opération diverse, il dépend de la famille du niveau supérieur.
         */
        typeOperationDiverse: string;
        /**
         * grandes familles des opérations diverses
         * Les 3 caractères sont le code famille "007" par exemple
         */
        familleOperationDiverse: string;
        /**
         * le 2 caractères sont variables "  " ou "01" "02" etc
         */
        prefixeCodeFamille: string;
        /**
         * premier libellé à saisir pour une opération diverse
         */
        libelle1OperationDiverse: string;
        /**
         * second libellé à saisir pour une opération diverse
         */
        libelle2OperationDiverse: string;
        /**
         * Libelle de l'operation diverse pour alimenter le JAB
         */
        libelleOperationDiverse: string;
    }
    interface IDetailOperation {
        detailOperationCheque: IDetailOperationCheque;
        detailOperationDiverse: IDetailOperationDiverse;
        /**
         * code établissement financier
         */
        codeEtablissement: string;
        /**
         * code Guichet
         */
        codeGuichet: string;
        /**
         * Référence du produit service ex :04000084683
         */
        referenceProduitService: string;
        /**
         * code du type de référence du produit service, ex : 0004
         */
        codeTypeProduitService: string;
        /**
         * montant de l'opération dont le détail est présenté ici
         */
        montantOperationUnitaire: number;
        /**
         * montant total de l’opération toutes opérations confondues
         */
        montantTotalOperation: number;
        /**
         * premier libellé apparaissant sur le relevé de compte
         */
        libelleReleveCompte1: string;
        /**
         * second libellé apparaissant sur le relevé de compte
         */
        libelleReleveCompte2: string;
        /**
         * nombre de jours d'encaissement du moyen de paiement
         */
        nombreJourEncaissement: string;
        /**
         * code interne sur 4 caractères pour définir la tarification de l'opération
         */
        codeInterneTarification: string;
        /**
         * Numéro du sac de dépot pour alimenter le JAB
         */
        numeroSacDepot: string;
        /**
         * Indique si le signataire est le représentant légal
         */
        estSignataireRepresentantLegal: boolean;
    }
    interface IOperationFinanciere {
        listeDetailsOperation: Array<IDetailOperation>;
        listeCodeForcage: Array<ICodeForcage>;
        /**
         * devise de l'ensemble de l'ensemble des mouvements de l'opération
         */
        deviseOperation: string;
        /**
         * date de valeur souhaitée pour les opérations
         * Type date au format yyyy-MM-dd
         */
        dateValeurOperation: string;
        /**
         * Permet d'indiquer qu'en cas de retour 999 de la QR, le conseiller souhaite poursuivre l'opération. Est utilisé en cas de forçage des contrôles réalisés par les applicatifs.
         */
        indicateurForcageOperation: boolean;
        /**
         * D pour débit; C pour crédit
         * envoyé à la QR : débit : R01 ; crédit V01
         */
        codeSensOperation: string;
        /**
         * 00: VIO; opérations diverses
         * 01:ESP; espèces
         * 02:CHQ; versement chèque
         * 07:VIO ; espèce divers
         * 09:CHB ; retrait chèque de banque
         * 10:DIV ; divers
         */
        codeModeFinancier: string;
        /**
         * Liste des messages d'information nécessitant une validation
         */
        listeMessageInformationValidation: Array<string>;
        /**
         * top O ou N
         * O : validation du message d'information
         * N : pas de validation
         */
        topValidationMessageInformation: string;
        /**
         * code permettant d'indiquer qu'il s'agit d'une operation d'extourne
         */
        codeIndicateurAnnulation: string;
        /**
         * référence inconnue du conseiller
         */
        referenceTechniqueOperation: string;
        /**
         * Libellé du mode financier alimenté pour envoyer au JAB
         */
        libelleModeFinancier: string;
        /**
         * identifiant de la personne permettant d'alimenter le JAB
         */
        identifiantPersonne: number;
        /**
         * Nom d'usage de la personne permettant d'alimenter le JAB
         */
        nomUsagePersonne: string;
        /**
         * Prénom de la personne permettant d'alimenter le JAB
         */
        prenomPersonne: string;
        /**
         * Identifiant de l'opération permettant d'alimenter le JAB
         */
        identifiantBordereauJab: string;
        /**
         * code fonctionnalité d'origine de l'opération permettant d'alimenter le JAB
         */
        codeFonctionnaliteOrigineOpe: string;
        listeDetailsOperationExtourne: Array<IDetailOperationExtourne>;
        /**
         * Indique si le signataire est le représentant légal pour un retrait sur Livret A
         *
         * 0 : Retrait hors Livret A
         * 1 : Retrait sur Livret A avec signataire RL
         * 2 : Retrait sur Livret A sans signataire RL
         */
        indicateurSignataireRL: number;
    }
    interface IDetailOperationExtourne {
        codeEtablissementOpOrigine: string;
        identifiantAgentOpOrigine: number;
        timeStampOpOrigine: string;
    }
    interface IControleForcageImputation {
        listeCodeForcage: Array<IControleForcageImputationItem>;
    }
    interface IControleForcageImputationItem {
        /**
         * Code retour associé au message d'information  RAISA06
         * 000 Pas de forçage
         * 999 Demande forçage du compte
         */
        codeRetourForcageImputation: number;
        /**
         * Référence sous laquelle est répertorié par la Banque
         * de France un Etablissement bancaire : Etablissement
         * de crédit, Institution financière.
         */
        codeBanque: string;
        /**
         * Référence d'un guichet domiciliataire au sein d'un
         * Etablissement bancaire : Etablissement de crédit,
         * Institution financière.
         * Code attribué par la Banque de France.
         * Code banque + code guichet identifient un guichet
         * d'un Etablissement en France.
         */
        codeGuichet: string;
        /**
         * Référence d'identification d'un compte, service,
         * crédit ... détenu par un client d'un Etablissement
         * du GCE.
         * X2 / code produit/service
         * X7 / radical
         * X2 / chiffre clé modulo 97
         */
        referenceProduit: string;
        /**
         * Motif du forçage:
         * Exemples : Date de valeur et/ou opération
         */
        libelleForcageImputation: string;
    }
    interface IForcageImputation {
        /**
         * True : mode extourne False : mode normal
         */
        modeExtourne: boolean;
        /**
         * "V" Versement "R" Remboursement
         */
        codeSens: string;
        /**
         * Mode financier avec lequel est passée l'opération (quelle que soit son origine).
         * 'ESP' Espèces
         * 'CHQ' Chèque
         * 'VIR' Virement interne
         * 'DIV' Divers
         * 'AUT' Automatique
         * 'VIO' Virement opération diverse
         * 'CHC' Chèque CNCE émis
         * 'CHB' Chèque de banque émis
         */
        modeFinancier: string;
        /**
         * Montant brut de l'opération dans la monnaie de sa prise d'ordre (monnaie initiale) avant chargement de frais, pénalité, taxe ...
         * Le montant net correspond au montant brut quand il n'y a pas de pénalités ou frais
         */
        montantBrutOperation: number;
        /**
         * Cumul des montants en monnaie de prise d'ordre pour tous les comptes constituant l'opération.
         * Versements => Cumul des versements
         * Retraits => Cumul des retraits
         * Virements => Cumul Versements = Cumul Retraits
         */
        montantTotalPriseOrdre: number;
        /**
         * Référence sous laquelle est répertorié par la Banque de France un Etablissement bancaire : Etablissement de crédit, Institution financière.
         */
        codeBanque: string;
        /**
         * Référence d'un guichet domiciliataire au sein d'un Etablissement bancaire : Etablissement de crédit, Institution financière.
         * Code attribué par la Banque de France.
         * Code banque + code guichet identifient un guichet d'un Etablissement en France.
         */
        codeGuichet: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... détenu par un client d'un Etablissement du GCE. X2 / code produit/service X7 / radical X2 / chiffre clé modulo 97
         */
        referenceProduitService: string;
        /**
         * Date de valeur de l'opération (mouvement) sur un compte.
         * Comptabilisation de l'opération en compte : date retenue pour le calcul des intérêts éventuelle -ment dûs par l'une des parties (intérêts créditeur agios ...)
         */
        dateValeur: string;
        /**
         * Code devise
         */
        codeDevise?: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.Creance {
    interface IPaiementCheque {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un dossier de créances de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * Numéro d'identification d'une créance de la clientèle dans la gestion du Recouvrement.
         */
        identifiantCreance: string;
        /**
         * Numéro d'identification d'un mémo relatif à une créance ou à un dossier dans la gestion du Recouvrement.
         */
        numeroAvantV2: number;
        /**
         * Définit l'Action à réaliser
         * Valeurs :
         *  'C'        Création
         *  'S'        Suppression
         *  'M'        Modification
         *  'V'        Validation
         *  'I'        Interrogation (lecture)
         */
        codeAction: string;
        /**
         * Date de création du mémo sur la créance ou sur le dossier
         * Type date au format yyyy-MM-dd
         */
        dateCreationMemo: string;
        /**
         * type de mémo pour une créance.
         *            Valeurs possibles :
         * 'PR'       Mémo sur provision
         * 'PE'       Mémo sur passage en perte
         * 'DP'       Mémo pour dépréciation
         * 'DC'       Mémo douteux compromis vers douteux
         * 'SY'       Note de synthèse
         * 'AF'       Annulation de frais et accessoires
         * 'GA'       Garantie
         * 'PH'       Mémo sur provision Hors bilan
         */
        codeTypeMemo: string;
        /**
         * Libellé court expliquant l'objet du mémo pour passage ne perte ou modification de données entrant dans le calcul de la provision (taux de provision, garantie, montnat de provision).
         */
        libelleCourtMemo: string;
        /**
         * Libellé long expliquant l'objet du mémo pour passage ne perte ou modification de données entrant dans le calcul de la provision (taux de provision, garantie, montnat de provision).
         */
        libelleLongMemo: string;
        /**
         * Libellé long expliquant l'objet du mémo pour passage ne perte ou modification de données entrant dans le calcul de la provision (taux de provision, garantie, montnat de provision).
         */
        libelleLongMemoBis: string;
        /**
         * Numéro d'identification d'un mémo relatif à une créance ou à un dossier dans la gestion du Recouvrement.
         */
        numeroMemo: number;
        /**
         * Libellé long expliquant l'objet du mémo pour passage ne perte ou modification de données entrant dans le calcul de la provision (taux de provision, garantie, montnat de provision).
         */
        libelleLongMemoCreance: string;
        /**
         * Ce libellé long est un complément de 1000 caractères
         */
        libelleLongComplementMemo: string;
        /**
         * Date à laquelle un mémo prend effet. Elle est différente de la date de saisie du mémo.
         * Type date au format yyyy-MM-dd
         */
        dateEffetMemo: string;
        /**
         * Détermine la nature d'une garantie portant sur une créance dans la gestion du Recouvrement
         * VOIR VALEURS EN TABLE M95T
         */
        codeGarantie: string;
        /**
         * Numéro d'identification d'une garantie relatif à un dossier donné et portant sur une créance dans la gestion du recouvrement.
         */
        numeroGarantieDossier: number;
        /**
         * Identifie un contrat détenu par un client auprès d'un établissement du Groupe CE
         */
        identifiantContrat: string;
        /**
         * date de la journee bancaire en cours au moment de l'emission du CRE
         * Type date au format yyyy-MM-dd
         */
        dateJourneeBancaireEvt: string;
        /**
         * Numéro d'identification d'une opération comptabilisée dans la gestion des créances en Recouvrement / VARIO
         */
        numeroHistoComptable: number;
        /**
         * Date d'entrée en contentieux
         * Type date au format yyyy-MM-dd
         */
        datePassageContentieuxDossier: string;
        /**
         * Ce montant représente le montant de l'opération de retour de lot de créances pour gestion par un sous-traitant.
         */
        montantOperation: number;
        /**
         * Montant du recouvrement sur perte.
         */
        montantRecupereAffecteAuDossier: number;
        /**
         * Libellé du motif de la récupération sur perte.
         */
        motifRecuperationSurPerte: string;
        codeActionGarantie: string;
        /**
         * Identifie la personne référencée comme personne connue dans Client-Tiers garantissant un crédit ou engagement
         */
        identifiantPersonneGarant: number;
        /**
         * C'est la date à partir de laquelle la garantie est affectée au crédit.
         * Type date au format yyyy-MM-dd
         */
        dateAffectationGarantieCredit: string;
        /**
         * C'est la date qui met un terme à la garantie d'un crédit.
         * Type date au format yyyy-MM-dd
         */
        dateFinAffectationGarantieCredi: string;
        /**
         * Montant de la créance couverte par une garantie donnée
         * montant actualisé à la dernière estimation
         */
        montantCouvertureCreanceGaranti: number;
        /**
         * Montant actuel de la garantie.
         * Ce montant est actualisé en fonction des valeurs d'objets sous-jacents à la garantie.
         */
        montantActuelGarantie: number;
        /**
         * Montant initial de la couverture d'une créance par une garantie donnée
         */
        montantInitialCouvertGarantie: number;
        /**
         * Montant initial de la garantie en devise d'origine.
         * montant établi dans le contrat
         */
        montantInitialGarantie: number;
        /**
         * Taux de garantie en % du montant de la créance apportée par une garantie de type sureté personnelle.
         */
        tauxGarantie: number;
        /**
         * Détermine un type de garantie selon la typologie
         * MYSYS
         * exemples :
         * '001'      Cession créance Dailly
         * '002'      Gage sur véhicule
         * '0H1'      Hypothèque conventionnelle sur pret viager hypothé
         * '0H2'      Hypothèque Conventionnelle Rechargeable Résidentie
         * '0H3'      Hypothèque sur créances présentes ou futures
         * ...
         */
        codeNatureGarantieMySys: string;
        /**
         * Date fournit avec les données garanties dans le cadre de la V1.1 de Recouvrement
         * Type date au format yyyy-MM-dd
         */
        datePublication: string;
        /**
         * Date de 1ère mise en jeu de la garantie de la garantie
         * Type date au format yyyy-MM-dd
         */
        datePremiereMisEnJeuGarantie: string;
        /**
         * Détermine si la garantie a été mise en jeu totalement.
         * Valeurs :
         *  ' '        Pas de mise en jeu totale
         *  'O'        Mise en jeu totale
         */
        indicateurMisEnJeuGarantieTotal: string;
        /**
         * Permet de savoir si les alertes sur la date de fin de garantie sont à générer.
         * Valeurs :
         *  'O'        Alerte activée
         *  ' '        Alerte activée
         *  'N'        Alerte désactivée
         */
        indicateurAlerteActivee: string;
        /**
         * Top indiquant si la garantie doit être ou pas utilisée dans le calcul de l'espoir de recouvrement.
         * Valeurs
         * 'O'        OUI
         * 'N'        NON
         */
        topGarantieUtiliseeCalcul: string;
        /**
         * Indique si un courrier à destination de la caution
         * doit être envoye ou non.
         * Valeurs possibles :
         * 'O'        Le courrier caution doit être envoyé
         * 'N'        Pas de courrier caution à envoyer
         */
        indicateurEditionCaution: string;
        /**
         * Cette propriété représente le rang d'une hypothèque.
         */
        rangHypotheque: number;
        /**
         * Cette propriété représente le rang d'une garantie.
         */
        rangGarantie: number;
        /**
         * Détermine le type de garantie associée à un engagement (cautionnement, hypothèque, nantissement...)
         */
        typeGarantieGCE: string;
        /**
         * Détermine la catégorie de garantie. Typologie spécifique à la gestion du Recouvrement
         * Valeurs:
         * 'R'        Sûreté réelle
         * 'P'        Sûreté personnelle
         * 'A'        Autre garantie
         */
        codeCategorieGarantie: string;
        /**
         * Détermine s'il le taux de couverture d'une garantie est fourni
         * Valeurs :
         * 'O'        taux fourni
         * 'N'        pas de taux
         */
        indicateurValorTauxCouverture: string;
        /**
         * Date de l'estimation amiable
         * Type date au format yyyy-MM-dd
         */
        dateEstimationObjetAmiable: string;
        /**
         * Date de l'estimation prudentiel
         * Type date au format yyyy-MM-dd
         */
        dateEstimationObjetPrudentiel: string;
        /**
         * Date de l'estimation juridique
         * Type date au format yyyy-MM-dd
         */
        dateEstimationObjetJuridique: string;
        /**
         * Date de l'estimation venale
         * Type date au format yyyy-MM-dd
         */
        dateEstimationObjetVenale: string;
        /**
         * Détermine la devise du montant de l'ordre dans le cadre d'une opération/transaction financière.
         */
        codeMonnaiePriseOrdre: string;
        /**
         * Montant total du mouvement Contentieux.
         * Cumul des montants d'opérations financieres
         */
        montantTotal: number;
        /**
         * Montant de la part capital dans le solde de la créance gérée dans Contentieux.
         */
        montantCapitalCreance: number;
        /**
         * Montant de la part intérêts dans le solde de la créance gérée dans Contentieux.
         */
        montantInteretsDossier: number;
        /**
         * Montant de la part frais dans le solde de la créance gérée dans Contentieux.
         */
        montantFraisDossier: number;
        /**
         * Montant de la part des accessoires dans le solde dans la créance gérée dans Contentieux.
         */
        montantAssuranceCreance: number;
        /**
         * Montant de la part des IR dans le solde dans la créance gérée dans Contentieux.
         */
        montantInteretsRetardDossier: number;
        /**
         * Montant de la part en APL de la créance contentieuse.
         */
        montantPartCreanceEnAPL: number;
        /**
         * montant reçu au titre de bonification restant acquis quoiqu'il advienne sur le crédit et correspondant à un ordre de mise en recouvrement. C'est le cumul des montants de bonification de chaque échéance de M.E.R composant l'ordre.
         */
        montantBonificationAcquiseOrdre: number;
        /**
         * Date de valeur d'une opération en contentieux
         *  Date de valeur des opérations Contentieux = date  effective de l'opération.
         * Type date au format yyyy-MM-dd
         */
        dateValeurOperationContentieux: string;
        /**
         * Date d'entrée en contentieux
         * Type date au format yyyy-MM-dd
         */
        dateEntreeEnContentieux: string;
        /**
         * Catégorie de gestion du produit/service.
         * Exemple de valeurs :
         * 'ACFF'     ASSURANCE CFF
         * 'AEEP'     ASSURANCE SUR EPARGNE
         * 'AEMO'     SECUR'MEDIA FORMULE 1
         * 'AENO'     SECUR'MEDIA FORMULE 2
         * 'AEOO'     SECUR'MEDIA FORMULE 1 FAMILLE
         */
        codeTypeProduitService: string;
        /**
         * Libellé associé à chaque mouvement comptable sur une créance gérée dans Contentieux.
         */
        libelleMouvementSurCreance: string;
        /**
         * Montant des intérêts de retard comptabilisés.
         */
        montantInteretsRetardComptabili: number;
        /**
         * Montant des intérêts de retard non comptabilisés.
         */
        montantInteretsRetardNonComptab: number;
        /**
         * Date de valeur décompte = date de valeur spécifique pour le calcul des décomptes 'manuels' ou 'libre ou jugement'
         * Type date au format yyyy-MM-dd
         */
        dateValeurDecompte: string;
        /**
         * code permettant dans l'histo financier pour une opération de crédit (UCOBMA = 0) de distinguer les les Passages en perte, les Cessions de créance et les annulations de déchéance du terme.
         * Valeurs :
         * 'P'        Passage en perte
         * 'C'        Cession de créance
         * 'R'        Annulation déchéance du terme
         * 'A'        Rachat créance déchue
         */
        codeOperationCredit: string;
        /**
         * Permet de savoir si l'origine d'un mouvement ou d'un évènement est la sous-traitance
         * Valeurs :
         * ' '        Le mouvement ne provient pas de la sous-traitance,  ni de crédit.
         * 'S'        Le mouvement provient de la sous-traitance.
         * 'H'        Le mouvement est soumis à honoraires
         * 'N'        Le mouvement n'est pas soumis à honoraires
         * 'X'        La convention de service signé entre les 2 partenaires déterminera si le versement est soumis à honoraires
         * 'C'        Le mouvement provient de crédit.
         */
        indicateurOrigineSST: string;
        /**
         * Permet d'identifier le type de mouvement financier
         * et son origine.
         * Valeurs
         * 'AGG'      Aggravation
         * 'AGE'      Aggravation suite à extourne récupération
         * 'AGA'      Aggravation suite à extourne récupération garantie
         * 'REC'      Récupération
         * 'REE'      Récupération suite à extourne aggravation
         * 'REP'      Récupération sur pertes
         * 'REG'      Récupération suite à mise en jeu de garantie
         * 'PER'      Passage en perte
         * 'FRJ'      Frais de justice interne
         * 'FRT'      Honoraires tiers interne
         * 'FRA'      Accessoires interne
         * 'DDT'      Déchéance externe
         * 'IMP'      Impayés externe
         * 'IRE'      Intérêts de retard externe
         * 'DEB'      Solde débiteur externe
         * 'CLO'      Clôture de compte externe
         * 'REV'      Pour une récupération sur e-recouvrement
         * 'AGV'      pour une annulation de récupération sur e-recouvrement
         * 'AGP'      Récup suite Réintégration Pertes
         */
        codeTypeMouvementFinancier: string;
        /**
         * Identifie un partenaire dans la gestion du Recouvrement
         */
        identifiantInternePartenaire: string;
        /**
         * Montant du solde exigible du dossier MyVario
         * correspond à :
         * Solde actualisé - Capital restant dû - pertes = somme des soldes exigibles des créances du dossier
         */
        montantExigibleDossierMyVario: number;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichetInterbancaire: string;
        /**
         * Détermine une famille d'opérations diverses Numéro d'ordre attribué à chaque famille
         */
        codeFamilleOperationDiverse: string;
        /**
         * Code hors déposant
         * Valeurs:
         * DEFL : deflag des compteurs
         * GREP : bon d'épargne
         * BOCA : bon de caisse
         * FONG : fongepar
         * ASEP : assurance éparvie
         * ASEA : europe assistance
         * CHAV : chanque chèque de voyage
         * PRIM : prime épargne logement
         * TARI : tarification diverse
         * BT   : bons du trésor
         * BOAR : bons autre réseau(ptt)
         * SICA : sicav et cea
         * FCB  : f.c.p
         * AUT1 : autre recette 1
         * AUT2 : autre recette 2
         * AUT5 : autre recette 5
         * ASCT : assurance sur compte
         * CHAB : change billets
         * PRET : prets
         * COF  : coffres
         * CADI : campagne diverse
         * BPC  : bons propagande cadeaux
         * ENC  : chèque attente encaisse
         * AUT3 : autre  recette 3
         * AUT4 : autre  recette 4
         * AUT6 : autre  recette 6
         * CCB  : commision carte bleue
         * CAJE : carte jeune
         * AVAN : avance diverse
         * DEPA : dépannage
         * RCB  : retrait carte bleue
         */
        codeOperationDiverse: string;
        /**
         * c'est le libellé de l'Opération  Diverse.
         */
        libelleOperationDiverse: string;
        /**
         * Cette zone permet de savoir si une option du menu ou du sous-menu de la GESTION DES Operations Diverses est autorisée en MODE DIRECT, en MODE CLIENT OU DANS LES DEUX MODES.
         * VALEURS POSSIBLES
         * 'DI'          --> autorisée en MODE DIRECT
         * 'CL'          --> autorisée en MODE CLIENT
         * '**'          --> autorisée dans les deux modes (Client/Direct)
         */
        codeModeApparitionFamille: string;
        /**
         * indique le flux financier généré par la transaction
         */
        codeSensTransaction: string;
        /**
         * Mode financier avec lequel est passée l'opération (quelle que soit son origine).
         * Valeurs :
         * 'ESP'      Espèces
         * 'CHQ'      Chèque
         * 'VIR'      Virement interne
         * 'DIV'      Divers
         * 'AUT'      Automatique
         * 'VIO'      Virement opération diverse
         * 'CHC'      Chèque CNCE émis
         * 'CHB'      Chèque de banque émis
         */
        modeFinancier: string;
        /**
         * libelle operation
         */
        libelleOperation: string;
        /**
         * libelle operation complementaire
         */
        libelleOperationComplementaire: string;
        /**
         * Date de l'opération sur un produit.
         * Type date au format yyyy-MM-dd
         */
        dateOperation: string;
        /**
         * code agent
         */
        codeAgent: string;
        /**
         * Détermine un objet-type pouvant être mis en garantie
         * Valeurs :
         * '1'        Terrain à batir
         * '2'        Foncier non bati
         * '3'        Construction
         */
        codeObjetGarantie: string;
        /**
         * 1ère ligne de l'adresse de l'objet.
         */
        adresseLigne1: string;
        /**
         * deuxième ligne de l'adresse de l'objet.
         */
        adresseLigne2: string;
        /**
         * troisième ligne de l'adresse de l'objet.
         */
        adresseLigne3: string;
        /**
         * code postal
         */
        adresseLigne4: string;
        /**
         * commune
         */
        adresseLigne5: string;
        /**
         * suite ligne 1
         */
        adresseLigne1Suite: string;
        /**
         * Détermine s'il existe une estimation de type "Juridique" pour l'objet mis en garantie.
         * Valeurs :
         * 'O'        il existe une estimation de type "Juridique"
         * 'N'        il n'existe pas d'estimation de type "Juridique" pour l'objet considéré.
         */
        indicValorEstimationJuridiq: string;
        /**
         * valorisation selon l'estimation juridique
         */
        mtEstimationObjetJuridique: number;
        /**
         * Cette rubrique permet de connaître la modalité de
         * l'estimation de l'objet.
         * 'DE'       Reprise Valeur d'instruction
         * 'EV'       Evaluation à partir du coût de l'opération
         * 'EX'       Expertise
         * 'RA'       Réévaluaton automatique
         * 'SC'       Sur catalogue
         * 'SP'       Sur pièces
         * 'VA'       Valeur d'instruction
         * 'VC'       Visite complète
         * 'VE'       Visite extérieure
         */
        codeModaliteEstimationJurid: string;
        /**
         * Détermine le motif / origine et éventuellement le mod d'une ré-estimation de la valeur d'un objet donné.
         * 'O99'      Autres
         * 'O52'      Création de la garantie
         * 'O07'      Dégrèvement
         * 'O50'      Liquidation judiciaire
         * 'O01'      Mise en place dossier
         * 'O05'      Réevaluation indiv. méthode E2
         * 'O06'      Réevaluation indiv. méthode E3
         * 'O02'      Réevaluation stat. méthode S1
         * 'O03'      Réevaluation stat. méthode S2
         * 'O04'      Réevaluation stat. méthode E1
         * 'O09'      Reprise
         * 'O08'      Suivi de valorisation
         * 'AUT'      Automatique
         * 'O51'      Vente du bien
         */
        codeMotifReestimationJurid: string;
        /**
         * Détermine si la valeur juridique est utilisée pour le calcul de la garantie
         */
        indicValeurObjetUtilJurid: string;
        /**
         * Détermine s'il existe une estimation de type "Prudentielle" pour l'objet mis en garantie.
         * Valeurs :
         * 'O'        il existe une estimation de type "Prudentielle"
         * 'N'        il n'existe pas d'estimation de type "Prudentielle" pour l'objet considéré.
         */
        indicValorEstimationPrudent: string;
        /**
         * valorisation selon l'estimation prudentielle
         */
        mtEstimationObjetPrudentiel: number;
        /**
         * Cette rubrique permet de connaître la modalité de
         * l'estimation de l'objet.
         * 'DE'       Reprise Valeur d'instruction
         * 'EV'       Evaluation à partir du coût de l'opération
         * 'EX'       Expertise
         * 'RA'       Réévaluaton automatique
         * 'SC'       Sur catalogue
         * 'SP'       Sur pièces
         * 'VA'       Valeur d'instruction
         * 'VC'       Visite complète
         * 'VE'       Visite extérieure
         */
        codeModeEstimationPrudentie: string;
        /**
         * Détermine le motif / origine et éventuellement le mod d'une ré-estimation de la valeur d'un objet donné.
         * 'O99'      Autres
         * 'O52'      Création de la garantie
         * 'O07'      Dégrèvement
         * 'O50'      Liquidation judiciaire
         * 'O01'      Mise en place dossier
         * 'O05'      Réevaluation indiv. méthode E2
         * 'O06'      Réevaluation indiv. méthode E3
         * 'O02'      Réevaluation stat. méthode S1
         * 'O03'      Réevaluation stat. méthode S2
         * 'O04'      Réevaluation stat. méthode E1
         * 'O09'      Reprise
         * 'O08'      Suivi de valorisation
         * 'AUT'      Automatique
         * 'O51'      Vente du bien
         */
        codeMotifReestimationPrude: string;
        /**
         * Détermine si la valeur prudentielle est utilisée pour le calcul de la garantie
         */
        indicValeurObjetUtilPrude: string;
        /**
         * Détermine s'il existe une estimation de type "Amiable" pour l'objet mis en garantie.
         * Valeurs :
         * 'O'        il existe une estimation de type "Amiable"
         * 'N'        il n'existe pas d'estimation de type "Amiable" pour l'objet considéré.
         */
        indicValorEstimationAmiable: string;
        /**
         * valorisation selon l'estimation amiable
         */
        mtEstimationObjetAmiable: number;
        /**
         * Cette rubrique permet de connaître la modalité de
         * l'estimation de l'objet.
         * 'DE'       Reprise Valeur d'instruction
         * 'EV'       Evaluation à partir du coût de l'opération
         * 'EX'       Expertise
         * 'RA'       Réévaluaton automatique
         * 'SC'       Sur catalogue
         * 'SP'       Sur pièces
         * 'VA'       Valeur d'instruction
         * 'VC'       Visite complète
         * 'VE'       Visite extérieure
         */
        codeModeEstimationAmiable: string;
        /**
         * Détermine le motif / origine et éventuellement le mod d'une ré-estimation de la valeur d'un objet donné.
         * 'O99'      Autres
         * 'O52'      Création de la garantie
         * 'O07'      Dégrèvement
         * 'O50'      Liquidation judiciaire
         * 'O01'      Mise en place dossier
         * 'O05'      Réevaluation indiv. méthode E2
         * 'O06'      Réevaluation indiv. méthode E3
         * 'O02'      Réevaluation stat. méthode S1
         * 'O03'      Réevaluation stat. méthode S2
         * 'O04'      Réevaluation stat. méthode E1
         * 'O09'      Reprise
         * 'O08'      Suivi de valorisation
         * 'AUT'      Automatique
         * 'O51'      Vente du bien
         */
        codeMotifReestimationAmiab: string;
        /**
         * Top indiquant si la valeur de l'objet est celle retenue dans le calcul de l'espoir  de recouvrement.
         * Une seule valeur d'objet peut être retenue dans le calcul de l'espoir.
         * Valeurs
         * 'O'        La valeur est utilisée dans le calcul de l'espoir
         * 'N'        La valeur n'est pas utilisée dans le calcul de l'espoir.
         */
        topValeurObjetUtilAmiable: string;
        /**
         * Détermine s'il existe une estimation de type "Venale" pour l'objet mis en garantie.
         * Valeurs :
         * 'O'        il existe une estimation de type "Venale"
         * 'N'        il n'existe pas d'estimation de type "Venale" pour l'objet considéré.
         */
        indicValorEstimationVenale: string;
        /**
         * valorisation selon l'estimation venale
         */
        mtEstimationObjetVenale: number;
        /**
         * Cette rubrique permet de connaître la modalité de
         * l'estimation de l'objet.
         * 'DE'       Reprise Valeur d'instruction
         * 'EV'       Evaluation à partir du coût de l'opération
         * 'EX'       Expertise
         * 'RA'       Réévaluaton automatique
         * 'SC'       Sur catalogue
         * 'SP'       Sur pièces
         * 'VA'       Valeur d'instruction
         * 'VC'       Visite complète
         * 'VE'       Visite extérieure
         */
        codeModaliteEstimationVenal: string;
        /**
         * Détermine le motif / origine et éventuellement le mod d'une ré-estimation de la valeur d'un objet donné.
         * 'O99'      Autres
         * 'O52'      Création de la garantie
         * 'O07'      Dégrèvement
         * 'O50'      Liquidation judiciaire
         * 'O01'      Mise en place dossier
         * 'O05'      Réevaluation indiv. méthode E2
         * 'O06'      Réevaluation indiv. méthode E3
         * 'O02'      Réevaluation stat. méthode S1
         * 'O03'      Réevaluation stat. méthode S2
         * 'O04'      Réevaluation stat. méthode E1
         * 'O09'      Reprise
         * 'O08'      Suivi de valorisation
         * 'AUT'      Automatique
         * 'O51'      Vente du bien
         */
        codeMotifReestimationVenal: string;
        /**
         * Top indiquant si la valeur de l'objet est celle retenue dans le calcul de l'espoir  de recouvrement.
         * Une seule valeur d'objet peut être retenue dans le calcul de l'espoir.
         * Valeurs
         * 'O'        La valeur est utilisée dans le calcul de l'espoir
         * 'N'        La valeur n'est pas utilisée dans le calcul de l'espoir.
         */
        topValeurObjetUtilVenale: string;
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel
         */
        typeFonction: string;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         */
        typeElementStructure: string;
        /**
         * Identifie un objet donné en garantie d'une créance en recouvrement gérée dans VARIO
         */
        identifiantObjetCtx: string;
        /**
         * Permet d'identifier l'origine du flux en contentieux.
         *             Valeurs :
         *  '1'        Débiteur
         *  'D'        Mise en jeu de garantie
         *  '7'        Autre
         */
        codeTypeOrigineFlux: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IPaiementEnLigne {
        codeEtablissement: string;
        numeroDossier: number;
        identifiantCreance: string;
        numeroEntiteTitulaire: number;
        identifiantContrat: string;
        montantPaiementERecouvrement: number;
        codeReseauCarteProsodie: string;
        adresseEmail: string;
        dateFinValidite: string;
        numeroCarteBancaire: string;
        codeCVVCarte: string;
        designationLonguePersonne: string;
        identifiantPersonne: number;
        referenceExternePersonne: number;
        identifiantElementStructure: number;
        codeCivilitePersonnePhysique: string;
        codePersonnaliteJuridique: string;
        codeEnvironnement: string;
        codeMonnaiePriseOrdre: string;
        dateValeurOperationContentieux: string;
        nombreTotalEcheance: number;
        dateEcheancePaiementDiffere: string;
    }
    interface IRetourPaiement {
        identifiantERecouvrementNatixis: string;
        identifiantEcheanciePaiementVAD: number;
        numeroEcheance: number;
    }
    interface IParamEligiteModePaimt {
        codeEtablissement: string;
        numeroDossier: number;
        identifiantCreance: string;
    }
    interface IEligibiliteModePaimt {
        topPaiementCB: string;
        motifCBNonAutorisee: string;
        topPaiementCheque: string;
        motifChequeNonAutorise: string;
        topPaiementPrelevement: string;
        motifPrelevementNonAutorise: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.Creance {
    interface IParametreReglement {
        /**
         * Détermine le mode de règlement des mises de fonds ou des mises en recouvrement d'échéances.
         */
        codeModeReglement: string;
        /**
         * Libellé long d'un mode de règlement des recouvrements
         */
        libelleLongModeReglement: string;
        /**
         * Libellé court d'un mode de règlement des recouvrements
         */
        libelleCourtModeReglement: string;
        /**
         * C'est le nombre de périodes d'éxécution concernant le mode de règlement. Exprimé en nombre de jours.
         */
        delaisExecutionModeReglement: number;
        /**
         * Date a laquelle le mode de paiement peut être utilisé
         * Type date au format yyyy-MM-dd
         */
        dateReglement: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IPortefeuille {
        codeEtablissement: string;
        identifiantRedacteur: number;
        libelle: string;
        identifiantEDS: number;
        identifiantEDSSuperieur: number;
        nombreDeDossierActif: number;
    }
    interface IRecherchePortefeuille {
        mesPortefeuilles: Array<IPortefeuille>;
        portefeuilleCollaborateur: Array<IPortefeuille>;
        portefeuilleEtablissement: Array<IPortefeuille>;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IPrelevementPonctuel {
        codeEtablissement: string;
        numeroDossier: number;
        identifiantCreance: string;
        montantPrelevePremierCompte: number;
        dateValeur: number;
        typeSortieOrdinaire: string;
        entiteAdministrativeCptSupp: string;
        guichetCompteSupport: string;
        compteSupportRecouvrement: number;
        codeTypeOrigineFlux: string;
        numeroIbanCompte: string;
        codeAgent: string;
        numeroAvantV2: number;
        codeAction: string;
        dateCreationMemo: string;
        codeTypeMemo: string;
        libelleCourtMemo: string;
        libelleLongMemo: string;
        libelleLongMemoBis: string;
        numeroMemo: number;
        libelleLongMemoCreance: string;
        libelleLongComplementMemo: string;
        dateEffetMemo: string;
        codeGarantie: string;
        numeroGarantieDossier: number;
        identifiantContrat: string;
        dateJourneeBancaireEvt: string;
        numeroHistoComptable: number;
        datePassageContentieuxDossier: string;
        montantOperation: number;
        montantRecupereAffecteAuDossier: number;
        motifRecuperationSurPerte: string;
        codeActionGarantie: string;
        identifiantPersonneGarant: number;
        dateAffectationGarantieCredit: string;
        dateFinAffectationGarantieCredi: string;
        montantCouvertureCreanceGaranti: number;
        montantActuelGarantie: number;
        montantInitialCouvertGarantie: number;
        montantInitialGarantie: number;
        tauxGarantie: number;
        codeNatureGarantieMySys: string;
        datePublication: string;
        datePremiereMisEnJeuGarantie: string;
        indicateurMisEnJeuGarantieTotal: string;
        indicateurAlerteActivee: string;
        topGarantieUtiliseeCalcul: string;
        indicateurEditionCaution: string;
        rangHypotheque: number;
        rangGarantie: number;
        typeGarantieGCE: string;
        codeCategorieGarantie: string;
        indicateurValorTauxCouverture: string;
        identifiantObjetCtx: string;
        dateEstimationObjetAmiable: string;
        dateEstimationObjetPrudentiel: string;
        dateEstimationObjetJuridique: string;
        dateEstimationObjetVenale: string;
        codeMonnaiePriseOrdre: string;
        montantTotal: number;
        montantCapitalCreance: number;
        montantInteretsDossier: number;
        montantFraisDossier: number;
        montantAssuranceCreance: number;
        montantInteretsRetardDossier: number;
        montantPartCreanceEnAPL: number;
        montantBonificationAcquiseOrdre: number;
        dateValeurOperationContentieux: string;
        dateEntreeEnContentieux: string;
        codeTypeProduitService: string;
        libelleMouvementSurCreance: string;
        montantInteretsRetardComptabili: number;
        montantInteretsRetardNonComptab: number;
        dateValeurDecompte: string;
        codeOperationCredit: string;
        indicateurOrigineSST: string;
        codeTypeMouvementFinancier: string;
        identifiantInternePartenaire: string;
        montantExigibleDossierMyVario: number;
        deviseOperation: string;
        montantOperationUnitaire: number;
        montantTotalOperation: number;
        codeEtablissementCompte: string;
        codeGuichetCompte: string;
        referenceProduitServiceCompte: string;
        dateValeurOperation: string;
        codeIndicateurAnnulation: string;
        libelleReveleCompte1: string;
        libelleReleveCompte2: string;
        topValidationMessageInformation: string;
        typeOperationDiverse: string;
        libelle1OperationDiverse: string;
        libelle2OperationDiverse: string;
        familleOperationDiverse: string;
        libelleModeFinancier: string;
        identifiantPersonne: number;
        nomUsagePersonne: string;
        prenomPersonne: string;
        identifiantBordereauJab: string;
        codeFonctionnaliteOrigineOpe: string;
        codeObjetGarantie: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        /**
         * code postal
         */
        adresseLigne4: string;
        /**
         * commune
         */
        adresseLigne5: string;
        adresseLigne1Suite: string;
        indicValorEstimationJuridiq: string;
        mtEstimationObjetJuridique: number;
        codeModaliteEstimationJurid: string;
        codeMotifReestimationJurid: string;
        indicValeurObjetUtilJurid: string;
        indicValorEstimationPrudent: string;
        mtEstimationObjetPrudentiel: number;
        codeModeEstimationPrudentie: string;
        codeMotifReestimationPrude: string;
        indicValeurObjetUtilPrude: string;
        indicValorEstimationAmiable: string;
        mtEstimationObjetAmiable: number;
        codeModeEstimationAmiable: string;
        codeMotifReestimationAmiab: string;
        topValeurObjetUtilAmiable: string;
        indicValorEstimationVenale: string;
        mtEstimationObjetVenale: number;
        codeModaliteEstimationVenal: string;
        codeMotifReestimationVenal: string;
        topValeurObjetUtilVenale: string;
        /**
         * code interne sur 4 caractères pour définir la tarification de l'opération
         */
        codeInterneTarification: string;
        heureOperation: number;
        /**
         * Montant d'appel en provisionnel d'une garantie BPI pour un prêt garanti par l'état.
         */
        montantAppelProvisionnel: number;
        /**
         * Date du versement BPI pour l'appel provisionnel en garantie sur un prêt garanti par l'état (PGE).
         * Type date au format yyyy-MM-dd
         */
        dateVersementProvisionnel: string;
        /**
         * Montant d'appel final d'une garantie BPI pour un prêt garanti par l'état. Il s'agit du montant versé par BPI en complément du de l'appel provisionnel, ou prèlevé dans le cas d'un reversement de trop perçu.
         */
        montantAppelFinal: number;
        /**
         * Date du versement BPI pour l'appel final en garantie sur un prêt garanti par l'état (PGE).
         * Type date au format yyyy-MM-dd
         */
        dateVersementFinal: string;
        /**
         * Code sens d'une opération.
         * 'C' : Crédit
         * 'D' : Débit
         */
        codeSens: string;
        /**
         * Le montant d'ecretage correspond au reversement du trop perçu si le client a remboursé une une partie de sa dette.
         * Le versement est effectué à la BPI en diminution du provisionnel dejà versé. Le provisionnel étant une avance de garantie.
         */
        montantEcretageProvisionnel: number;
        /**
         * La date d'ecretage correspond à la date du reversement  du trop perçu si le client a remboursé une partie de sa dette. Correspond à la date ou le reversement du montant à la BPI a été effectué.
         * Type date au format yyyy-MM-dd
         */
        dateEcretageProvisionnel: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICreanceDouteuseOuDechue extends ICreanceSaine {
        codeSessionCreance: string;
        indicateurNatureConsolidante: string;
        indicateurCadreRisque: string;
        indicateurCreanceDouteuxComprom: string;
        indicateurDepreciationProvision: string;
        codeCreanceFractionnee: string;
        indicateurRetourSain: string;
        codeClasseFINREPCreance: string;
        typeCofinancement: string;
        dateCalculProvisionCRC200203: string;
        dateDerniereCession: string;
        dateDesactualisationPrevisionne: string;
        dateValeurDecoteCession: string;
        identifiantContrat: string;
        mtCumDesactualConstateCRC: number;
        mtCumInteretCRCAAnnuler: number;
        mtCumInteretIFRSAAnnuler: number;
        mtCumDesactualConstateIFRS: number;
        mtRepriseProvCRCPartInteret: number;
        mtPerteCouverteCRCPartInteret: number;
        mtDotationProvCRCPartInteret: number;
        mtPartInteretAssietteCRC200203: number;
        mtPerteNonCouverteCRCPartInt: number;
        mtInteretCRCPeriodeAAnnuler: number;
        mtPertePartInteretMOIS: number;
        mtInteretIFRSPeriodeAAnnuler: number;
        mtStockProvCRCPartInt0101: number;
        mtUtilisationProvCRCPartInteret: number;
        mtRepriseExcedentProvCRCInt: number;
        mtRepRetourSainCRCPartInt: number;
        mtAssietteProvisionCRC200203: number;
        mtAssietteIFRSRecalculee: number;
        mtRepriseProvCRCHorsInteret: number;
        montantBoniLatent: number;
        mtcoutAmortiIFRS: number;
        mtPerteCouverteCRCHorsInteret: number;
        mtCoutAmortiCRC: number;
        mtPerteCouverteIFRS: number;
        montantCompteCorrecteur: number;
        mtDotationProvCRCHorsInteret: number;
        mtDesactualisationConstateCRC: number;
        mtDesactualPrevisionnelCRC: number;
        mtPerteNonCouverteCRCHorsInt: number;
        mtPerteNonCouverteIFRS: number;
        mtProvisionHorsActualisation: number;
        mtProvisionCRC200203: number;
        mtPerteMOIS: number;
        mtFluxRecouvrableCRC200203: number;
        mtFluxRecouvrablesIFRS: number;
        mtStockProvCRC1erJanvier: number;
        mtDesactualisationConstateIFRS: number;
        mtDesactualPrevisionnelIFRS: number;
        mtUtilisationProvCRCHorsInteret: number;
        mtUtilisationProvisionIFRS: number;
        mtRepriseProvIFRSHorsInteret: number;
        mtRepriseRetourSainCRCHorsInt: number;
        mtRepriseProvRetourSainIFRS: number;
        numeroHistoriqueCRC200203: number;
        tauxActualisationCRC200203TEO: number;
        mtRepriseProvCRCHorsInteretBis: number;
        mtRepriseRetourSainCRCPartInt: number;
        mtDecoteCessionInterne: number;
    }
    interface ICreanceSaine {
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        identifiantCreanceIFRS: string;
        codeEtatCreanceIFRS: string;
        mtStockProvIFRS1erJanv: number;
        mtProvisionIFRS: number;
        numeroHistoriqueIFRS: number;
        dateCalculProvIFRS: string;
        codeTypePopulationIFRS: string;
        mtDotationProvisionIFRS: number;
        mtRepriseProvisionIFRS: number;
        libelleCreanceIFRS: string;
        identifiantEntiteTitulaire: string;
        libelleClient: string;
        identifiantPersonneTitulaire: string;
        identifiantEDSDomiciliation: string;
        libelleEDSDomiciliationET: string;
        identifiantGestionnaireCreance: string;
        libelleGestionnaireCreance: string;
        codeAgentEconomiqueBAFI: string;
        codeNationalitePersonne: string;
        codeINSEEPaysResidencefisc: string;
        codeResident: string;
        codeAgentContrepartie: string;
        identifiantComptable: string;
        referenceExterneCreance: string;
        codeOrigineCreance: string;
        codeSegmentRisqueCategorie: string;
        codeTypeMarcheIFRS: string;
        codeProduitService: string;
        codeDomainePSCNCE: string;
        codeTypeActifIFRS: string;
        codeTypeProduitIIFRS: string;
        typeGarantieGCE: string;
        codetypeGarantieIFRS: string;
        codeSecteurActiviteNAF: string;
        codeSecteurActiviteIFRS: string;
        dateEvtRefCReance: string;
        codeTypeEcheancierRecouvrement: string;
        montantFluxSemestre1: number;
        montantFluxSemestre2: number;
        montantFluxSemestre3: number;
        montantFluxSemestre4: number;
        montantFluxSemestre5: number;
        montantFluxSemestre6: number;
        montantFluxSemestre7: number;
        montantFluxSemestre8: number;
        montantFluxSemestre9: number;
        montantFluxSemestre10: number;
        montantFluxSemestre11: number;
        montantFluxSemestre12: number;
        montantFluxSemestre13: number;
        montantFluxSemestre14: number;
        montantFluxSemestre15: number;
        montantFluxSemestre16: number;
        montantFluxSemestre17: number;
        montantFluxSemestre18: number;
        montantFluxSemestre19: number;
        montantFluxSemestre20: number;
        montantAssietteProvisionIFRS: number;
        codeDeviseISO: string;
        montantPartInteretAssietteIFRS: number;
        montantGlobalFluxARecouvrer: number;
        tauxActualisationIFRSTIE: number;
        codeSPPIProduitService: string;
        codeBusinessModel: string;
        codeClassificationIFRS9: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IEntiteTitulaire {
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Une ET se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement de BPCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *    - 1   Usage privé
         *    - 2   Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Permet de qualifier le client détenteur d'un contrat.
         * Valeurs :
         *    - 1   mode simple
         *    - 2   mode joint entre époux
         *    - 3   mode joint entre tiers
         *    - 4   mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative des personnes.
         * Valeurs :
         *    - 0   Actif
         *    - 1   Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Précise le type d'indivision.
         * Valeurs :
         *    - 1   Mode indivision successorale
         *    - 2   Mode indivision conventionnel avec solidarité
         *    - 3   Mode indivision conventionnel sans solidarité
         */
        modeCompositionIndivision: string;
        /**
         * Complément de la désignation courte de l'entité titulaire,
         * optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationEntiteTitulaire: string;
        /**
         * Identifiant de l'Elément De Structure
         */
        identifiantEDSDomiciliation: number;
        /**
         * Référence externe EDS
         */
        referenceEDSDomiciliation: number;
        /**
         * Libellé de l'Elément De Structure
         */
        libelleEDSDomiciliation: string;
    }
    interface IRechercheEntiteTitulaire {
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IRechercheET {
        /**
         * Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtabBanqueEntiteJuridi: string;
        /**
         * uméro d'identification d'un dossier de créances
         * e la clientèle dans la gestion du Recouvrement.
         */
        numeroDossierContentieux: number;
        /**
         * Ce code permet d'identifier un rédacteur. Il est
         * associé à chaque dossier contentieux.
         */
        identifiantPortefeuille: number;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement du GCE.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Détermine la situation d'un dossier VARIO
         *            Valeurs
         * 'O'        Ouvert
         * 'C'        Clos
         * 'A'        Archivé
         * 'N'        Non concerné
         */
        codeStatutDossier: string;
        /**
         * Date de cloture adminisistrative du dossier de
         * créances dans la gestion du Recouvrement
         * Type date au format yyyy-MM-dd
         */
        dateClotureDossierCreance: string;
        /**
         * Cette zone doit être alimentée avec la date à laquelle
         * le dossier sera bloqué (date de cloture + delai).
         * Dans le programme, si dateJour > dateCloture + delai
         * alors la consultation sera bloquée. Le dossier sera
         * donc supprimé logiquement pour le gestionnaire.
         * Type date au format yyyy-MM-dd
         */
        dateDeBlocageConsultationPrevis: string;
        /**
         * Cette zone doit être alimentée avec la date à laquelle
         * le dossier sera définitivement supprimé (date de
         * blocage en consultation + delai)
         * Dans le programme, si dateJour > dateBloquage + delai
         * alors le dossier sera purgé. Le dossier sera
         * donc supprimé physiquement de VARIO.
         * Type date au format yyyy-MM-dd
         */
        dateSuppressionPrevisionelle: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.Surendettement {
    interface IRecherche {
        /**
         * Référence d'identification d'un dossier de surendettement BDF (Sur 12 Caractères)
         */
        numeroDossierBDF: string;
        /**
         * Date de recevabilité d'un dossier de surendettement Transmise par la BDF (Date S)
         * Type date au format yyyy-MM-dd
         */
        dateRecevabilite: string;
        /**
         * Code de commission projet demat BDF (Sur 5 Caractères)
         */
        codeNotification: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IInfoSmsAEmettreParamEntree {
        codeEtablissement: string;
        numeroDossier: number;
        identifiantPersonne: number;
        identifiantEntiteTitulaire: number;
        numeroTelephoneRelanceSms: string;
        numeroModeleSms: number;
        numeroVersionModeleSms: number;
        indicateurGestionRetourClient: string;
        dateEnvoiSmsMail: string;
        heureEnvoiSmsMail: number;
        identifiantAgent: string;
        contenuMessageEmis: string;
        typeEnvoiRelance: string;
        designationLonguePersonne: string;
        identifiantCreanceCTX?: string;
        identifiantContrat?: string;
        codeEvenement?: string;
    }
    interface IModeleSms {
        codeEtablissement: string;
        typeRelance: string;
        typeEnvoiRelance: string;
        numeroModeleSMS: number;
        numeroVersionModeleSMS: number;
        libelleModeleSMS: string;
        contenuModeleRelance: string;
        nombreCaractereSMS: number;
        indicateurGestionRetourClient: string;
        indicateurModeleSupprimable: string;
        codeMessageType: string;
        codeEvenement: string;
    }
    interface IInfosSmsAEmettre {
        codeEtablissement: string;
        contenuModeleRelance: string;
        codeMessageType: string;
        codeEvenement: string;
    }
    interface IEnvoiSmsUnitaire {
        codeEtablissement: string;
        numeroDossier: number;
        identifiantCreanceCTX: string;
        identifiantPersonne: number;
        identifiantEntiteTitulaire: number;
        identifiantContrat: string;
        numeroTelephoneRelanceSms: string;
        numeroModeleSms: number;
        numeroVersionModeleSms: number;
        indicateurGestionRetourClient: string;
        dateEnvoiSmsMail: string;
        heureEnvoiSmsMail: number;
        identifiantAgent: string;
        contenuMessageEmis: string;
        typeEnvoiRelance: string;
        designationLonguePersonne: string;
        codeEvenement: string;
        codeAction: string;
        designationLongueAgent: string;
        adresseMessagerieAgent: string;
        designationClientBancaireCourte: string;
        raisonSocialeEtablissement: string;
        numeroTelAgent: string;
    }
    interface IModelSmsParamEntree {
        codeEtablissement: string;
        typeRelance: string;
        typeEnvoiRelance: string;
        numeroDossier: number;
        identifiantCreanceCTX: string;
        identifiantContrat?: string;
        identifiantPersonne?: number;
        numeroEntiteTitulaire?: number;
        numeroTelephoneInterne?: string;
        numeroFax?: string;
        libelleAdresseMessagerie?: string;
        designationLongueAgentInterne?: string;
        designationBancaireCourte?: string;
        raisonSocialeEtablissement?: string;
    }
    interface IInfosSmsSortie {
        numeroTelephoneRelanceSms: string;
        numeroModeleSms: number;
        numeroVersionModelesSms: number;
        dateEnvoiSmsMail: string;
        heureEnvoieSmsMail: number;
        contenuMessageEmis: string;
        typeEnvoiRelance: string;
        codeEvenement: string;
        indicateurGestionRetourClient: string;
    }
    interface IRetourRelance {
        retourRelance: boolean;
    }
    interface IRetourRelanceParamEntree {
        codeEtablissement: string;
        numeroDossier: number;
        codeAction: string;
        identifiantAgent: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    namespace MiniProfil {
        interface IParticipantProduit {
            /**
             * Numéro d'identification de la personne dans le SI d'un Etablissement.
             * Référence interne MYSYS.
             * Personne référencée comme client, tiers ou prospect.
             * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
             */
            identifiantTiers: number;
            /**
             * Code rôle des participants dans le mini-profil.
             *
             * Valeurs :
             * '01'       Titulaire
             * '02'       Cotitulaire
             * '03'       Procuration générale
             * '04'       Procuration générale par compte
             * '05'       Représentant légal
             * '06'       Représentant légal personne morale
             * '07'       Procuration spéciale porteur de carte pro
             */
            codeRolePersonne: string;
            /**
             * Dénomination de la personne autre que le nom de famille, correspond :
             *    - soit au nom de famille de l'époux(se) (conjoint)
             *    - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque.
             * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
             * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
             * Donnée réglementaire : information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille.
             * Appelée auparavant nom marital.
             */
            nomUsage: string;
            /**
             * Premier prénom de l'état civil de la personne physique.
             * Nom joint au patronyme qui distingue les personnes d'un même groupe familial entre elles.
             * Donnée réglementaire.
             */
            prenom: string;
            /**
             * Désignation de la personne morale.
             * Identique à celle de l'INSEE ou du Registre du Commerce et des Sociétés (RCS).
             * Figure impérativement dans les statuts.
             * La nature et la composition de ce nom ainsi que les principes le régissant varient selon que la société est commerciale ou civile.
             * Désignation propre à la personne : contrôle de l'unicité.
             */
            raisonSociale: string;
            /**
             * Date de naissance de la personne physique.
             * Donnée réglementaire : information figurant sur toute pièce officielle d'identité.
             * Règle dérogatoire pour les personnes physiques
             * appartenant à un pays sans état civil : le 1er du mois de l'année de naissance supposée.
             * Type date au format yyyy-MM-dd
             */
            dateNaissance: string;
            /**
             * Détermine le type de personnalité juridique de la personne.
             * Il existe principalement deux types de personnalité :
             *            - PJ physique : concerne les individus,
             *            - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations, ...),
             * La personnalité juridique conditionne les droits et obligations.
             *
             * Valeurs :
             * '1'        Personne physique
             * '2'        Personne morale ou assimilée morale
             */
            codePersonnaliteJuridique: string;
            /**
             * Code qui permet de respecter la dénomination de la personne suivant sa situation de famille.
             * Donnée réglementaire.
             *
             * Valeurs :
             * '1'        MME
             * '2'        MLLE
             * '3'        M
             */
            codeCivilite: string;
        }
        interface IIdentificationProduit {
            /**
             * Identifiant d'un Etablissement du GCE.
             * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
             *
             * Exemples :
             * 17515 = CE Ile de France
             * 16275 = CE Nord France Europe
             * 43199 = Crédit Foncier de France (CFF)
             */
            codeEtablissement: string;
            /**
             * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France.
             * Un Etablissement bancaire peut disposer de plusieurs guichets.
             *
             * Exemples :
             * '90000' : IDF PARIS de la CE Ile de France
             * '00600' : LILLE de la CE Nord France Europe
             */
            codeGuichetInterbancaire: string;
            /**
             * Catégorie de gestion du produit/service.
             * Correspond à un produit/service élémentaire ou à un regroupement de P/S.
             * Détermine le format de la référence du contrat (produit ou service en gestion : compte, crédit ...).
             *
             * Exemples :
             * '0000'     LIVRET A
             * '0001'     LIVRET EPARGNE SUPPLEMENTAIRE
             * '0002'     COMPTE D INSTANCE
             * '0003'     PLAN EPARGNE RETRAITE
             * '0004'     CDD
             * '0005'     LIVRET EPARGNE POPULAIRE
             * '0006'     CODEVI
             * '0007'     CREDIT PERMANENT ECUREUIL
             * '0008'     COMPTE COURANT ENTREPRISE
             * '0009'     COMPTE A TERME
             */
            codeProduitService: string;
            /**
             * Référence d'identification d'un compte, service, crédit, etc, détenu par un client d'un Etablissement du GCE.
             * Codification spécifique au GCE.
             * Référence établie par le système de gestion spécifique à chaque type de P/S.
             * Exemples de format :
             * Pour les produits radicalisables (hors CCE), le numéro de compte :
             *   - Code produit/service : '00' à '01', '10' à '17', '19' à '21', '48' et '88'
             *   - Radical : Numéro chronologique attribué par le système
             *                     Référence unique par Etablissement et par guichet.
             *   - Clé Modulo 97
             * Pour les prêts de type P000
             *   - Numéro de dossier (7car)
             */
            referenceProduitService: string;
            /**
             * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
             * Synonyme : Client bancaire.
             * Une ET se compose d'une ou plusieurs personnes.
             * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
             */
            identifiantEntiteTitulaire: number;
            /**
             * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
             * Numéro chronologique attribué par le système :
             *   - P/S simple : référence unique dans MYSYS,
             *   - autres P/S : référence unique par Etablissement.
             */
            identifiantProduitService: number;
            /**
             * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
             * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
             * Numéro chrono attribué par le système : référence unique dans MYSYS.
             */
            numeroOffre: number;
            /**
             * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
             * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
             */
            designationBancaireCourte: string;
        }
        interface IDonneeCommuneProduit {
            /**
             * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha.
             * Nomenclature adoptée par BPCE.
             *
             * Exemples :
             * USD / dollar - USA
             * JPY / yen - JAPON
             * CNY / yuan - CHINE
             * DKK / couronne - DANEMARK
             */
            deviseTenueCompte: string;
            /**
             * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service.
             * Produit ou service souscrit auprès de la clientèle.
             * Situation établie par l'application de gestion.
             *
             * Valeurs :
             * '0'        Produit/Service ouvert
             * '1'        Clôture demandée
             * '2'        Clôture en cours
             * '3'        Produit/Service fermé
             * '8'        Produit/Service en cours d'ouverture
             * '9'        Versements non autorisés
             */
            codeEtatProduitService: string;
            /**
             * Précise s'il existe une opposition active sur un contrat donné (compte, crédit, service, ...).
             *
             * Valeurs :
             * '0'        pas d'opposition
             * '1'        opposition
             */
            indicateurExistenceOpposition: string;
            /**
             * Détermine une variante ou une version de produit/service dans le Catalogue avec des caractéristiques spécifiques.
             * Ce sous code est ajouté au code produit pour déterminer une variante ou version de P/S.
             * Concerne essentiellement des P/S de dépôt-épargne.
             */
            sousCodeProduitService: string;
            /**
             * Détermine si le livret est géré avec un support (matérialisé) ou avec une tenue de compte (dématérialisé).
             *
             * Valeurs :
             * '0'        Support Livret
             * '1'        Relevés de Comptes
             */
            indicateurModeGestionLivret: string;
            /**
             * Le solde du compte est la position du compte en capital à un instant donné (solde magnétique).
             * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
             * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
             * Le solde calculé 'fin de période' sert de base pour établir celui de la période suivante.
             */
            soldeMinuteCompte: number;
            /**
             * Montant reprenant le total des échéances prêts Crédécureuil en Impayé ayant pour compte de prélèvement un CCE donné.
             */
            montantCumuleImpayePret: number;
            /**
             * Charge mensuelle d'endettement.
             */
            chargeMensuelleEndettement: number;
            participantProduit: Array<IParticipantProduit>;
            /**
             * Fonds mis à disposition. Les fonds sont mis à disposition tant que le donneur d'ordre n'est pas crédité ( INSTANT PAYMENT)
             */
            cumulFondsMisADispoinstpay: number;
            /**
             * Fonds réservés . Les fonds sont réservés tant que le compte donneur d'ordre n'est pas imputé( INSTANT PAYMENT).
             */
            cumulReservesFondsInstpay: number;
        }
        interface IDonneeSpecifiqueProfilComplet {
            /**
             * Détermine si le compte PEL était en respect au dernier anniversaire contractuel.
             * Donnée établie lors de chaque traitement anniversaire si le terme du contrat n'est pas atteint.
             * Elle peut être modifiée lors de versements rétroactifs à une date anniversaire.
             * Un PEL est considéré "en respect total", à un anniversaire donné, si le solde du compte est >= au solde minimum réglementaire qui varie selon l'ancienneté du compte.
             *
             * Plage de valeurs :
             * 'RT'       Respect au dernier anniversaire
             * 'NR'       Non-Respect au dernier anniversaire
             */
            codeEtatContractuelAnniversaire: string;
            /**
             * Montant du découvert autorisé.
             */
            montantDecouvertAutorise: number;
            /**
             * Montant reprenant le total des opérations en attente de décision dans le MAD pour un CCE donné.
             */
            montantCumuleOperationEcartee: number;
            /**
             * Le montant à régulariser correspond à tout ce qui n'a pas été versé depuis l'ouverture jusqu'à la date de l'opération e
             * en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
             * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
             * Le solde calculé 'fin de période' sert de base pour établir celui de la période suivante.
             */
            montantARegulariser: number;
            /**
             * Montant du versement périodique alimentant un contrat donné.
             * Peut être cadré par la réglementation : fonction de la date de souscription et de la périodicité.
             * Contrôle catalogue possible des montants mini / maxi.
             * Peut faire l'objet d'un engagement du client.
             */
            montantVersementRegulier: number;
            /**
             * Montant des effets encaissement Crédit du mois.
             */
            montantEffetEncaissement: number;
        }
        interface IDonneeSpecifiqueMiniProfil {
            /**
             * Détermine si l'entité titulaire est privée ou professionnelle.
             *
             * Valeurs :
             * 1          Usage privé
             * 2          Usage professionnel
             */
            codeUsageEntiteTitulaire: string;
            /**
             * Mode de relation des personnes composant une entité titulaire.
             * Permet de qualifier le client détenteur d'un contrat.
             *
             * Valeurs :
             * 1          mode simple
             * 2          mode joint entre époux
             * 3          mode joint entre tiers
             * 4          mode indivision
             */
            modeCompositionEntiteTitulaire: string;
        }
        interface ICaracteristiqueMiniProfil {
            identificationProduit: Array<IIdentificationProduit>;
            donneeCommuneProduit: Array<IDonneeCommuneProduit>;
            donneeSpecfiqueMiniProfil: Array<IDonneeSpecifiqueMiniProfil>;
            donneeSpecifiqueProfilComplet: Array<IDonneeSpecifiqueProfilComplet>;
            detailSoldeDisponible: IDetailSoldeDisponible;
        }
        interface IDetailSoldeDisponible {
            /**
             * MTGXDE, Montant du Découvert Autorisé
             */
            montantDecouvertAutorise: number;
            /**
             * MCDYCN, Montant effets encaissement Crédit
             */
            montantEffetEncaissement: number;
            /**
             * MCPCEC, Cumul Montants opérations ecartées
             */
            montantCumuleOperationEcartee: number;
            /**
             * MCPCCR, Cumul Montants impayés prêts Credec
             */
            montantCumuleImpayePret: number;
            /**
             * MTGLS1, Solde du compte (solde minute)
             */
            soldeMinuteCompte: number;
            /**
             * Détermine si le compte PEL était en respect au dernier anniversaire contractuel.
             * Donnée établie lors de chaque traitement anniversaire si le terme du contrat n'est pas atteint.
             * Elle peut être modifiée lors de versements rétroactifs à une date anniversaire.
             * Un PEL est considéré "en respect total", à un anniversaire donné, si le solde du compte est >= au solde minimum réglementaire qui varie selon l'ancienneté du compte.
             *
             * Plage de valeurs :
             * 'RT'       Respect au dernier anniversaire
             * 'NR'       Non-Respect au dernier anniversaire
             */
            codeEtatContractuelAnniversaire: string;
            /**
             * Fonds mis à disposition. Les fonds sont mis à disposition tant que le donneur d'ordre n'est pas crédité ( INSTANT PAYMENT).
             */
            cumulFondsMisADispoinstpay: number;
            /**
             * Fonds réservés . Les fonds sont réservés tant que le compte donneur d'ordre n'est pas imputé( INSTANT PAYMENT).
             */
            cumulReservesFondsInstpay: number;
        }
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ISolde {
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
         * '0'        Produit/Service ouvert
         * '1'        Clôture demandée
         * '2'        Clôture en cours
         * '3'        Produit/Service fermé
         * '8'        Produit/Service en cours d'ouverture
         * '9'        Versements non autorisés
         */
        codeEtatproduit: string;
        /**
         * Code devise (Euro)
         */
        codeDevise: string;
        /**
         * Cumul réserves d'encaissement en Euro
         */
        cumulReserveEncaissementEuro: number;
        /**
         * Montant solde fusionné en Euro
         */
        montantSoldeFusionneEuro: number;
        /**
         * Cumul montant impayés prêts en Euro
         */
        cumulMontantImpayePretEuro: number;
        /**
         * Cumul montant opérations écartées en Euro
         */
        cumulMontantOpeEcarteEuro: number;
        /**
         * Montant autorisation découvert en Euro
         */
        montantAutoDecouvertEuro: number;
        /**
         * Montant solde disponible en Euro
         */
        montantSoldeDispoEuro: number;
        /**
         * Code établissement compte de fusion
         */
        codeEtablissementFusion: string;
        /**
         * Code guichet compte de fusion
         */
        codeGuichetFusion: string;
        /**
         * Numéro de compte de fusion
         */
        numeroCompteFusion: string;
        /**
         * Ce code permet de déterminer si un compte client est fusionné avec un autre compte.
         * ' '        Compte simple (non fusionné).
         * 'F'        Fusionnant. Ce compte fusionne sur un autre compte.
         * 'G'        Support de fusion. Au moins un autre compte fusionne sur ce compte.
         */
        codeTypeFusion: string;
        /**
         * Code devise du compte
         */
        codeDeviseTenueCompte: string;
        /**
         * Cumul réserves d'encaissement  en devise du compte
         */
        cumulReserveEncaissDeviseCpte: number;
        /**
         * Cumul montant opérations écartées dans la devise du compte
         */
        cumulMontantOpeEcarDeviseCpte: number;
        /**
         * Cumul montant opérations impayées en devise du compte
         */
        cumulMontantImpayeDeviseCpte: number;
        /**
         * Montant découvert en devise du compte
         */
        montantDecouvertDeviseCpte: number;
        /**
         * Solde disponible en devise du compte
         */
        soldeDisponibleDeviseCpte: number;
        /**
         * Solde compte en devise du compte
         */
        soldeCompteDeviseCpte: number;
        /**
         * Cumul Remises de chèques
         */
        cumulRemiseCheque: number;
        /**
         * Cumul Blocage de provisions
         */
        cumulBlocageProvisions: number;
        /**
         * Solde débiteur attendu devise origine
         */
        soldeDebiteurAttenduDeviseOrigi: number;
    }
    interface ISyntheseFinanciere {
        solde: ISolde;
        listeMontant: Array<IMontant>;
        total: ITotal;
    }
    interface IMontant {
        /**
         * Code devise expression montant
         *
         * Détermine une monnaie / devise selon la nomenclature.
         *
         * Valeurs :
         * - USD / dollar - USA
         * - JPY / yen - JAPON
         * - CNY / yuan - CHINE
         * - DKK / couronne - DANEMARK
         *
         * Devise d'expression d'un montant de mouvement / opération
         *
         * CODE DEVISE 'EUROS
         */
        codeDeviseExpressionMontant: string;
        /**
         * Solde / devise tenue compte
         *
         *  Solde du compte arrêté à une date donnée.
         *  Montant exprimé dans la devise de tenue de compte.
         *  La devise doit être explicitement stipulée.
         *
         *  Format :
         *  Valeur interne en décimales selon le nombre maximum
         *  de décimales de la devise : voir ISO 4217
         *  (majoritairement avec 2 décimales)
         *
         *  CONTROLE DE NUMERICITE
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        soldeDeviseTenueCompte: number;
        /**
         * Cumul réserves d'encaissement
         *
         *  Cumul des réserves d'encaissement en monnaie de tenue de compte.
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        cumulReserveEncaissement: number;
        /**
         * Cumul Montants opérations ecartées
         *
         *  Montant reprenant le total des opérations en attente de décision dans le MAD pour un CCE donné
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        cumulMontantOperationEcarte: number;
        /**
         * Cumul Montants impayés prêts Credec
         *
         *  Montant reprenant le total des échéances prêts crédécureuil en Impayé ayant pour compte de prélèvement un CCE donné
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         * Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        cumulMontantImpayePret: number;
        /**
         * Code type fusion
         *
         *  Ce code permet de déterminer si un compte client est fusionné avec un autre compte.
         *
         *  Valeurs :
         *  Compte simple (non fusionné).
         * - F Fusionnant.
         *  Ce compte fusionne sur un autre compte.
         * - G Support de fusion.
         *  Au moins un autre compte fusionne sur ce compte.
         */
        codeTypeFusion: string;
        /**
         * Indic fusion en CAPITAL
         *
         *  Boolen précisant si le compte doit fusionner en capital (par cumul des soldes) avec un ou plusieurs autres comptes, lors de l'imputation d'une opération.
         *
         * Ce code ne peut être positionné à OUI que si
         *  - UCAFU (fusion agio) est à OUI
         *  - UCAIND (autorisation découvert) est à NON
         *  - et s'il n'y a plus de ligne de découvert
         *
         *  Le compte principal est donc associé à un indicateur 'N', tandis que les comptes fusionnés au compte principal ont un indicateur à 'O'
         *
         *  Valeurs :
         * - O OUI : fusion des soldes
         * - N NON
         */
        indicateurFusionEnCapital: string;
        /**
         * Code devise tenue compte ISO 4217
         *
         * Détermine une monnaie / devise selon la nomenclature
         *
         *  Valeurs :
         * - EUR Euro
         *
         *  exemples :
         * - USD / dollar - USA
         * - JPY / yen - JAPON
         * - CNY / yuan - CHINE
         * - DKK / couronne - DANEMARK
         *
         *  Détermine la devise utilisée pour la gestion du compte
         * Sert notamment à l'établissement de la position / arrêté de situation du compte (solde).
         *  Correspond à la devise d'imputation des opérations.
         *
         *  Il s'agit de la devise de tenue de compte du CCE avant conversion en euro.
         */
        codeDeviseISOTenueCompte: string;
        /**
         * Solde compte / devise tenue cpte
         *
         * Solde du compte arrêté à une date donnée.
         *  Montant exprimé dans la devise de tenue de compte.
         *  La devise doit être explicitement stipulée.
         *
         *  Format :
         *  Valeur interne en décimales selon le nombre maximum de décimales de la devise : voir ISO 4217 (majoritairement avec 2 décimales)
         *
         *  CONTROLE DE NUMERICITE
         *
         *  Montant du solde du compte entreprise exprimé dans la devise de tenue de compte.
         */
        soldeCompteDevise: number;
        /**
         * Cumul réserves d'encaissmt en devise
         *
         * Cumul des réserves d'encaissement exprimé en monnaie de tenue de compte.
         */
        cumulReserveEncaissementDevise: number;
        /**
         * Cumul Montants opé.écartées devises
         *
         *  Montant reprenant le total des opérations en attente de décision dans le MAD pour un CCE donné
         *  exprimé en devises (monnaies de tenue de compte).
         *
         *  Montant du cumul des opérations écartées exprimé dans la devise de tenue de compte.
         */
        cumulMontantOperationEcarteDevise: number;
        /**
         * Cumul Montants impayés prêts Credec
         *
         * Montant reprenant le total des échéances prêts crédécureuil en Impayé, ayant pour compte de prélèvement un CCE donné, en monnaie de tenue de compte
         */
        cumulMontantImpayePretDevise: number;
        /**
         * Cumul Blocage de provisions
         *
         * Cumul des blocages de provisions des types de réserves 'SCT' remises émises par EDI et 'TRI' transfert international en monnaie de tenue de compte.
         */
        cumulBlocageProvision: number;
        /**
         * Cumul Remises de chèques
         *
         * Cumul des reserves d'encaissement de type remises de chèques 'RMC' en monnaie de tenue de compte
         */
        cumulRemiseCheque: number;
        /**
         * Code Etablissement
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
    }
    interface ITotal {
        /**
         * Code devise expression montant
         *
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha
         *  voir ISO 4217 numérique
         *  Nomenclature adoptée par BPCE
         *
         *  Valeurs :
         * - EUR Euro
         *
         *  exemples :
         * - USD / dollar - USA
         * - JPY / yen - JAPON
         * - CNY / yuan - CHINE
         * - DKK / couronne - DANEMARK
         *
         * Devise d'expression d'un montant de mouvement / opération
         */
        codeDeviseExpressionMontant: string;
        /**
         * Total crédit de la personne
         *
         * Pour une personne, correspond à la somme du capital restant du des crédits détenus .
         *  Le montant est exprimé en Centimes.
         *
         * ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         * Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        totalCreditTiers: number;
        /**
         * Total impayés de la personne
         *
         *  Pour une personne, correspond à la somme des échéances de prêts impayées.
         *  Le montant est exprimé en Centimes.
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        totalImpayeTiers: number;
        /**
         * Total trésorerie de la personne
         *
         *  Pour une personne, correspond au cumul des soldes des produits de trésorerie.
         *  Le montant est exprimé en Centimes.
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        totalTresorerieTiers: number;
        /**
         * Code devise tenue compte ISO 4217
         *
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha
         *  voir ISO 4217 numérique
         *  Nomenclature adoptée par BPCE
         *
         * Valeurs :
         *  ( AAA voir norme ISO ZZZ )
         * - EUR Euro
         *
         *  exemples :
         * - USD / dollar - USA
         * - JPY / yen - JAPON
         * - CNY / yuan - CHINE
         * - DKK / couronne - DANEMARK
         *
         *
         *  Détermine la devise utilisée pour la gestion du compte
         *  Sert notamment à l'établissement de la position / arrêté de situation du compte (solde).
         *  Correspond à la devise d'imputation des opérations.
         *
         *  Il s'agit de la devise de tenue de compte du CCE avant conversion en euro.
         */
        codeDeviseISOTenueCompte: string;
        /**
         * Total crédit de la personne devises
         *
         *  Pour une personne, correspond à la somme du capital restant du des crédits détenus .
         *  Le montant est exprimé en Centimes et en devise de tenue de compte.
         *
         *  Total crédit de la personne exprimé dans la devise de tenue de compte.
         */
        totalCreditTiersDevise: number;
        /**
         * Total impayés de la personne devises
         *
         *  Pour une personne, correspond à la somme des échéances de prêts impayées.
         *  Le montant est exprimé en Centimes et en devise de tenue de compte.
         *
         *  Total impayés de la personne exprimé dans la devise de tenue de compte.
         */
        totalImpayeTiersDevise: number;
        /**
         * Total trésorerie personne devises
         *
         *  Pour une personne, correspond au cumul des soldes des produits de trésorerie.
         *  Le montant est exprimé en Centimes et en devise de tenue de compte.
         *
         *  Total trésorerie de la personne exprimé dans la devise de tenue de compte.
         */
        totalTresorerieTiersDevise: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IVersementODTechnique {
        /**
         * code etablissement
         */
        codeGuichetInterbancaire: string;
        /**
         * C'est le numéro d'ordre de la famille d'Opérations Diverses permettant l'affichage du menu des familles d'opérations diverses.
         */
        codeFamilleOperationDiverse: string;
        /**
         * Cette zone permet d'identifier tout type d'opération diverse. Chacun de ces types d'OD posséde un schéma comptable.
         */
        codeOperationDiverse: string;
        /**
         * Libellé de l'opération diverse.
         */
        libelleOperationDiverse: string;
        /**
         * Indique le mode dans lequel on se trouve. true : modeExtourne false : pas de mode extourne
         */
        modeExtourne: string;
        /**
         * Code Devise
         */
        codeDevise: string;
        /**
         * Cette zone permet de savoir si une option du menu ou du sous-menu de la GESTION DES Operations Diverses est autorisée en MODE DIRECT, en MODE CLIENT OU DANS LES DEUX MODES.
         * 1) MODE DIRECT :
         *  - une arrivée à la gestion des Opérations Diverses en utilisant l'option du menu GENERAL de SAISIE D'UNE OD.
         * 2) MODE CLIENT :
         *  - une arrivée automatique à la gestion des Opérations diverses à travers une opération Client (ex : 0201,0203,...)
         * Valeurs
         * 'DI' --> autorisée en MODE DIRECT
         * 'CL' --> Hors périmètre( MODE CLIENT)
         * '**' --> autorisée dans les deux modes (Client/Direct)
         */
        codeModeApparitionFamille: string;
        /**
         * Indique le flux financier généré par la transaction.
         * '0' Ouverture matricule
         * '1' Versement
         * '2' Remboursement Extourne
         * '3' Remboursement
         * '4' Versement Extourne
         * '9' annulation matricule
         */
        codeSensTransaction: string;
        /**
         * ' ' opération normale
         * 'A' annulation
         */
        codeAnnulationOperation: string;
        /**
         * Mode financier avec lequel est passé l'opération.
         * 'ESP' Espèces
         * 'CHQ' Chèque
         * 'VIR' Virement interne
         * 'DIV' Divers
         * 'AUT' Automatique
         * 'VIO' Virement opération diverse
         * 'CHC' Chèque CNCE émis
         * 'CHB' Chèque de banque émis
         */
        modeFinancier: string;
        /**
         * information destinée à renseigner le client
         * en précisant l'objet, la nature, l'origine
         * de l'opération.
         */
        libelleOperation: string;
        /**
         * Libellé opération complémentaire
         */
        libelleOperationComplementaire: string;
        /**
         * montant de la transaction financière affectant le
         * compte :
         *  versement / extourne
         *  remboursement / extourne
         *  prélèvement
         *  virement
         */
        montantOperation: number;
        /**
         * Code type de chèque
         * '0' sans réserve
         * '1' chèque sur place
         * '2' chèque hors place
         */
        typeCheque: string;
        dateOperation: string;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IAlerteService {
        getAlertesProceduresCollectives(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteProcedureCollective[]>;
        getAlertesEcheanciers(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteEcheancier[]>;
        getAlertesSurendettement(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteSurendettement[]>;
        getActionsPlanifiees(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteActionPlanifiee[]>;
        getAlertesAffectations(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAffectationDossier[]>;
        putAlerte(alerte: Modeles.IAlerteParamEntree): ng.IPromise<any>;
        deleteAlerte(alerteASupprimer: Modeles.IAlerteASupprimer): ng.IPromise<any>;
        postAlerte(alerte: Modeles.IAlerteParamEntree): ng.IPromise<any>;
    }
    class AlerteService implements IAlerteService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getAlertesProceduresCollectives(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteProcedureCollective[]>;
        getAlertesEcheanciers(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteEcheancier[]>;
        getAlertesSurendettement(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteSurendettement[]>;
        getActionsPlanifiees(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteActionPlanifiee[]>;
        getAlertesAffectations(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAffectationDossier[]>;
        private getListeAlertes<T>(codeEtablissement, idEDS, url);
        putAlerte(alerte: Modeles.IAlerteParamEntree): ng.IPromise<any>;
        deleteAlerte(alerteASupprimer: Modeles.IAlerteASupprimer): ng.IPromise<any>;
        postAlerte(alerte: Modeles.IAlerteParamEntree): ng.IPromise<any>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IBoiteOutilService {
        getUrlServiceTelephonie(codeEtablissement: string): ng.IPromise<Modeles.IUrl>;
    }
    class BoiteOutilService implements IBoiteOutilService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getUrlServiceTelephonie(codeEtablissement: string): ng.IPromise<Modeles.IUrl>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ICCEService {
        getDetailSoldeCCE(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string, codeAction: number): ng.IPromise<Modeles.ISyntheseFinanciere>;
    }
    class CCEService implements ICCEService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getDetailSoldeCCE(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string, codeAction: number): ng.IPromise<Modeles.ISyntheseFinanciere>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ICDDService {
        getDetailSoldeCDD(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string): ng.IPromise<Modeles.ICaracteristiqueCDD>;
    }
    class CDDService implements ICDDService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getDetailSoldeCDD(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string): ng.IPromise<Modeles.ICaracteristiqueCDD>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ICompteCCIEService {
        getCompteCCIE(codeEtablissement: string): ng.IPromise<Modeles.ICompteCCIE>;
    }
    class CompteCCIEService implements ICompteCCIEService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getCompteCCIE(codeEtablissement: string): ng.IPromise<Modeles.ICompteCCIE>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ICreanceParametre {
        getParametreReglement(choixCritere: string, codeModeReglement: string): ng.IPromise<Modeles.Creance.IParametreReglement[]>;
    }
    class CreanceParametre implements ICreanceParametre {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getParametreReglement(choixCritere: string, codeModeReglement: string): ng.IPromise<Modeles.Creance.IParametreReglement[]>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ICreanceService {
        getCaracteristique(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.Creance.ICaracteristique>;
        getCaracteristiqueNonDechusLeves(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.Creance.ICaracteristique>;
        postGarantie(topCreationLienHistoFiGarantie: string, topLienCpteRecvGaranti: string, garantie: Modeles.IGarantie): ng.IPromise<any>;
        putGarantie(garantie: Modeles.IGarantie): ng.IPromise<any>;
        putMouvementFinancier(mouvementFinancier: Modeles.IMouvementFinancier): ng.IPromise<any>;
        postMouvementFinancier(mouvementFinancier: Modeles.IMouvementFinancier): ng.IPromise<any>;
        postPaiementCheque(paiementCheque: Modeles.Creance.IPaiementCheque): ng.IPromise<any>;
        getComptesSupport(codeEtablissement: string, identifiantCreance: number): ng.IPromise<Modeles.Creance.ICompteSupport[]>;
        calculerGarantiePGE(calulGarantie: Modeles.ICalculGarantie): ng.IPromise<Modeles.ICalculGarantie>;
        getEcheancierVAD(identifiantCreance: number, numeroDossier: number): ng.IPromise<Modeles.IEcheancierVAD[]>;
    }
    class CreanceService implements ICreanceService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getCaracteristique(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.Creance.ICaracteristique>;
        getCaracteristiqueNonDechusLeves(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.Creance.ICaracteristique>;
        postGarantie(topCreationLienHistoFiGarantie: string, topLienCpteRecvGaranti: string, garantie: Modeles.IGarantie): ng.IPromise<any>;
        calculerGarantiePGE(calculGarantie: Modeles.ICalculGarantie): ng.IPromise<Modeles.ICalculGarantie>;
        putGarantie(garantie: Modeles.IGarantie): ng.IPromise<any>;
        putMouvementFinancier(mouvementFinancier: Modeles.IMouvementFinancier): ng.IPromise<any>;
        postMouvementFinancier(mouvementFinancier: Modeles.IMouvementFinancier): ng.IPromise<any>;
        postPaiementCheque(paiementCheque: Modeles.Creance.IPaiementCheque): ng.IPromise<any>;
        getComptesSupport(codeEtablissement: string, identifiantCreance: number): ng.IPromise<Modeles.Creance.ICompteSupport[]>;
        getEcheancierVAD(identifiantCreance: number, numeroDossier: number): ng.IPromise<Modeles.IEcheancierVAD[]>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ICreditConsoService {
        getCreditAmortissable(codeEtablissement: string, entiteTitulaire: string, codeGuichet: string, numeroCompte: string, codeProduitService: string): ng.IPromise<Modeles.CreditAmortissable.IProfilCefi[]>;
    }
    class CreditConsoService implements ICreditConsoService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getCreditAmortissable(codeEtablissement: string, entiteTitulaire: string, codeGuichet: string, numeroCompte: string, codeProduitService: string): ng.IPromise<Modeles.CreditAmortissable.IProfilCefi[]>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ICreditGestionService {
        getListeImpayes(codeEtablissement: string, dateTraitement: string, identifiantCredit: string, codeProvenance: string): ng.IPromise<Modeles.CreditGestion.IDonneeCredit>;
        getCreanceGelee(codeEtablissement: string, dateTraitement: string, identifiantCredit: string, typeConsultation: string): ng.IPromise<Modeles.CreditGestion.ICreancesGelees>;
    }
    class CreditGestionService implements ICreditGestionService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getListeImpayes(codeEtablissement: string, dateTraitement: string, identifiantCredit: string, codeProvenance: string): ng.IPromise<Modeles.CreditGestion.IDonneeCredit>;
        getCreanceGelee(codeEtablissement: string, dateTraitement: string, identifiantCredit: string, typeConsultation: string): ng.IPromise<Modeles.CreditGestion.ICreancesGelees>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IDossierNumeriqueMetierService {
        postCreerOuMAJDossierNumerique(question: Modeles.IQstnCreerOuMajDossierNumerique): ng.IPromise<Modeles.IRspnCreerOuMajDossierNumerique>;
        getConsulterDossierNumeriquePourIHM(codeFournisseur: string, listeReferenceRegroupement: string, indicateurDocumentInvalide: boolean): ng.IPromise<Modeles.IDossierNumeriqueMetierOutput>;
    }
    class DossierNumeriqueMetierService implements IDossierNumeriqueMetierService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        postCreerOuMAJDossierNumerique(question: Modeles.IQstnCreerOuMajDossierNumerique): ng.IPromise<Modeles.IRspnCreerOuMajDossierNumerique>;
        getConsulterDossierNumeriquePourIHM(codeFournisseur: string, listeReferenceRegroupement: string, indicateurDocumentInvalide: boolean): ng.IPromise<Modeles.IDossierNumeriqueMetierOutput>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IEcheancierBDFService {
        getEcheancierBDF(codeEtablissement: string, identifiantEntiteTitulaire: string, identifiantCreance: string): ng.IPromise<Modeles.Surendettement.IEcheancierBanqueDeFrance>;
    }
    class EcheancierBDFService implements IEcheancierBDFService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getEcheancierBDF(codeEtablissement: string, identifiantEntiteTitulaire: string, identifiantCreance: string): ng.IPromise<Modeles.Surendettement.IEcheancierBanqueDeFrance>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IEcheancierService {
        postEcheancier(inputEcheancier: Modeles.IEcheancier): ng.IPromise<Modeles.IEcheancier>;
        getEcheancier(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, codeProduitService: string, typeEcheancier: string, numeroHistoAccord: number, modeConsultation: string, etatDecheance: boolean): ng.IPromise<Modeles.IEcheancier[]>;
        deleteEcheancier(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, typeEcheancier: string, numeroHistoAccord: number, numeroGarantie: number): ng.IPromise<Modeles.IEcheancier>;
    }
    class EcheancierService implements IEcheancierService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        postEcheancier(echeancier: Modeles.IEcheancier): ng.IPromise<Modeles.IEcheancier>;
        getEcheancier(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, codeProduitService: string, typeEcheancier: string, numeroHistoAccord: number, modeConsultation: string, etatDecheance: boolean): ng.IPromise<Modeles.IEcheancier[]>;
        deleteEcheancier(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, typeEcheancier: string, numeroHistoAccord: number, numeroGarantie: number): ng.IPromise<Modeles.IEcheancier>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IEDSService {
        getAgent(codeEtablissement: string, idAgent: number): ng.IPromise<Modeles.ICaracteristiqueAgent>;
        getInformationEDSInterne(codeEtablissement: string, refInterneEDS: number): ng.IPromise<Modeles.EDS.ICaracteristiqueEDS>;
        getInfosSiege(codeEtablissement: string, identifiantElementStructure: number, typeOrganisation: string): ng.IPromise<Modeles.ICaracteristiqueSiege>;
        getLibelleEtablissementLong(typeListe: string): ng.IPromise<Modeles.IListeEtablissement>;
    }
    class EDSService implements IEDSService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getAgent(codeEtablissement: string, idAgent: number): ng.IPromise<Modeles.ICaracteristiqueAgent>;
        getInformationEDSInterne(codeEtablissement: string, refInterneEDS: number): ng.IPromise<Modeles.EDS.ICaracteristiqueEDS>;
        getInfosSiege(codeEtablissement: string, identifiantElementStructure: number, typeOrganisation: string): ng.IPromise<Modeles.ICaracteristiqueSiege>;
        getLibelleEtablissementLong(typeListe: string): ng.IPromise<Modeles.IListeEtablissement>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IDossierService {
        getDossier(idDossier: number): ng.IPromise<Modeles.IInfosDossier>;
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, avecDetail?: boolean, identifiantCreance?: string): ng.IPromise<Modeles.InfosDossierHisto.IContainer>;
        getInfosDossierAdministratif(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.IInfosDossierAdministratif.IInfosDossierAdminist>;
        getDossiers(codeEtablissement: string, idEntitesTitulaires: string[]): ng.IPromise<Modeles.IListeDossierET>;
        getIdET(codeEtablissement: string, numeroDossier: number): ng.IPromise<Modeles.IRechercheET>;
        getContratsMySys(codeEtablissement: string, idET: string, contratsActifs?: boolean): ng.IPromise<Modeles.IListeContrats>;
        getContratsProduitsMySys(codeEtablissement: string, idET: string): ng.IPromise<Modeles.IContratProduitET[]>;
        getProvision(codeEtablissement: string, codeGuichetInterbancaire: string, idCreance: string, codeEtatCreance: string): ng.IPromise<Modeles.ICreanceDouteuseOuDechue>;
        getGarantie(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, topDetails: string, numeroGarantieDossierCTX?: number): ng.IPromise<Modeles.IGarantie[]>;
        getDossiersActifsPortefeuille(codeEtablissement: string, identifiantPortefeuille: number): ng.IPromise<Modeles.IContainer>;
    }
    class DossierService implements IDossierService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getDossier(idDossier: number): ng.IPromise<Modeles.IInfosDossier>;
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, avecDetail?: boolean, identifiantCreance?: string): ng.IPromise<Modeles.InfosDossierHisto.IContainer>;
        getInfosDossierAdministratif(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.IInfosDossierAdministratif.IInfosDossierAdminist>;
        /**
         * Récupère les dossiers par Entites Titulaires
         * @param codeEtablissement
         * @param idEntitesTitulaires Au minimum un id doit être présent dans la liste
         */
        getDossiers(codeEtablissement: string, idEntitesTitulaires: string[]): ng.IPromise<Modeles.IListeDossierET>;
        /**
         * Recherche les entites titulaires par dossier
         * @param codeEtablissement
         * @param numeroDossier
         */
        getIdET(codeEtablissement: string, numeroDossier: number): ng.IPromise<Modeles.IRechercheET>;
        /**
         * Recherche les contrats MySys (Système d'information des caisse d'épargne) par Entites titulaires
         * @param codeEtablissement
         * @param idET
         * @param contratsActifs
         */
        getContratsMySys(codeEtablissement: string, idET: string, contratsActifs?: boolean): ng.IPromise<Modeles.IListeContrats>;
        /**
         * Recherche les contrats et produit  MySys (Système d'information des caisse d'épargne) par Entites titulaires
         * Ajout 23.01 forfait Lot D
         * @param codeEtablissement
         * @param idET
         * @param contratsActifs
         */
        getContratsProduitsMySys(codeEtablissement: string, idET: string): ng.IPromise<Modeles.IContratProduitET[]>;
        getProvision(codeEtablissement: string, codeGuichetInterbancaire: string, idCreance: string, codeEtatCreance: string): ng.IPromise<Modeles.ICreanceDouteuseOuDechue>;
        getGarantie(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, topDetails: string, numeroGarantieDossierCTX?: number): ng.IPromise<Modeles.IGarantie[]>;
        /**
         * Récupère les dossiers d'un portefeuille
         * @param codeEtablissement
         * @param dentifiantPortefeuille
         */
        getDossiersActifsPortefeuille(codeEtablissement: string, identifiantPortefeuille: number): ng.IPromise<Modeles.IContainer>;
        private deleteNullParameters(params);
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IInformationGarantiePGEService {
        getInformationGarantie(codeEtablissement: string, identifiantCredit: string): ng.IPromise<Modeles.IInformationGarantie>;
    }
    class InformationGarantiePGEService implements IInformationGarantiePGEService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getInformationGarantie(codeEtablissement: string, identifiantCredit: string): ng.IPromise<Modeles.IInformationGarantie>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IPersonneService {
        getMedia(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IMedia>;
        getAdressePostale(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IAdresse[]>;
        getInformationEntiteTitulaire(codeEtablissement: string, idET: number): ng.IPromise<Modeles.IInformationEntiteTitulaire>;
        getInformationsEntitesTitulaires(listeInterrogationDesignation: Modeles.IListeInterrogationDesignation): ng.IPromise<Modeles.IDesignationET>;
        getRechercheEntiteTitulaire(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IRechercheEntiteTitulaire>;
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.INoteBale2>;
    }
    class PersonneService implements IPersonneService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getMedia(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IMedia>;
        getAdressePostale(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IAdresse[]>;
        getInformationEntiteTitulaire(codeEtablissement: string, idET: number): ng.IPromise<Modeles.IInformationEntiteTitulaire>;
        getInformationsEntitesTitulaires(listeInterrogationDesignation: Modeles.IListeInterrogationDesignation): ng.IPromise<Modeles.IDesignationET>;
        getRechercheEntiteTitulaire(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IRechercheEntiteTitulaire>;
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.INoteBale2>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IOffreService {
        getOffre(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string, codeAction: number): ng.IPromise<Modeles.Offre.IRecherche>;
    }
    class OffreService implements IOffreService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getOffre(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string, codeAction: number): ng.IPromise<Modeles.Offre.IRecherche>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IOperationDiverseService {
        postVersementODTechnique(versementOD: Modeles.IVersementODTechnique): ng.IPromise<Modeles.IVersementODTechnique>;
    }
    class OperationDiverseService implements IOperationDiverseService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        postVersementODTechnique(versementOD: Modeles.IVersementODTechnique): ng.IPromise<Modeles.IVersementODTechnique>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IOperationFinanciereService {
        postOperationFinanciere(operationFinanciere: Modeles.IOperationFinanciere): ng.IPromise<Modeles.IOperationFinanciere>;
        getControleForcageImputation(forcageImputation: Modeles.IForcageImputation): ng.IPromise<Modeles.IControleForcageImputation>;
        getBicIban(codeEtablissement: string, codeGuichet: string, numeroCompte: string, cleRib: number): ng.IPromise<Modeles.IConversionRibBicIban>;
    }
    class OperationFinanciereService implements IOperationFinanciereService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        postOperationFinanciere(operationFinanciere: Modeles.IOperationFinanciere): ng.IPromise<Modeles.IOperationFinanciere>;
        getControleForcageImputation(forcageImputation: Modeles.IForcageImputation): ng.IPromise<Modeles.IControleForcageImputation>;
        getBicIban(codeEtablissement: string, codeGuichet: string, numeroCompte: string, cleRib: number): ng.IPromise<Modeles.IConversionRibBicIban>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IPaiementService {
        postPaiementEnLigne(inputParam: Modeles.IPaiementEnLigne): ng.IPromise<Modeles.IRetourPaiement>;
        postMemo(inputParam: Modeles.IMemoParamEntree): ng.IPromise<any>;
        getEligibiteModePaiement(codeEtablissement: string, identifiantCreance: string, numeroDossier: number): ng.IPromise<Modeles.IEligibiliteModePaimt>;
        postPrelevementPonctuel(prelevementPonctuel: Modeles.IPrelevementPonctuel): ng.IPromise<any>;
        postPrelevementPonctuelPGE(prelevementPonctuel: Modeles.IPrelevementPonctuel): ng.IPromise<any>;
    }
    class PaiementService implements IPaiementService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        postPaiementEnLigne(inputParam: Modeles.IPaiementEnLigne): ng.IPromise<Modeles.IRetourPaiement>;
        postMemo(inputParam: Modeles.IMemoParamEntree): ng.IPromise<any>;
        getEligibiteModePaiement(codeEtablissement: string, identifiantCreance: string, numeroDossier: number): ng.IPromise<Modeles.IEligibiliteModePaimt>;
        postPrelevementPonctuel(prelevementPonctuel: Modeles.IPrelevementPonctuel): ng.IPromise<any>;
        /**
         * 03/2021 - Spécifique Maj BCG pour PGE
         * @param prelevementPonctuel
         */
        postPrelevementPonctuelPGE(prelevementPonctuel: Modeles.IPrelevementPonctuel): ng.IPromise<any>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ITiersService {
        getCorporateInformation(codeEtablissement: string, idTiers: number): ng.IPromise<Modeles.Tiers.ICorporateInformation>;
        getDesignationsPersonnes(listeInterrogationDesignation: Modeles.Tiers.IListeInterrogationDesignation): ng.IPromise<Modeles.Tiers.IDesignationPersonne>;
    }
    class TiersService implements ITiersService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getCorporateInformation(codeEtablissement: string, idTiers: number): ng.IPromise<Modeles.Tiers.ICorporateInformation>;
        getDesignationsPersonnes(listeInterrogationDesignation: Modeles.Tiers.IListeInterrogationDesignation): ng.IPromise<Modeles.Tiers.IDesignationPersonne>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IPortefeuilleService {
        recherchePortefeuilleParEtablissement(codeEtablissement: string): ng.IPromise<Modeles.IRecherchePortefeuille>;
        recherchePortefeuilleParEDS(codeEtablissement: string, identifiantEDS: string): ng.IPromise<Modeles.IRecherchePortefeuille>;
        getHabilitationsPortefeuille(codeEtablissement: string, identifiantEDS: string, codeModeAcces: string): ng.IPromise<Modeles.IHabilitationPortefeuille[]>;
    }
    class PortefeuilleService implements IPortefeuilleService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        recherchePortefeuilleParEtablissement(codeEtablissement: string): ng.IPromise<Modeles.IRecherchePortefeuille>;
        recherchePortefeuilleParEDS(codeEtablissement: string, identifiantEDS: string): ng.IPromise<Modeles.IRecherchePortefeuille>;
        getHabilitationsPortefeuille(codeEtablissement: string, identifiantEDS: string, codeModeAcces: string): ng.IPromise<Modeles.IHabilitationPortefeuille[]>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IRechercheBDFService {
        getRechercheBDF(codeEtablissement: string, identifiantEntiteTitulaire: string): ng.IPromise<Modeles.Surendettement.IRecherche[]>;
    }
    class RechercheBDFService implements IRechercheBDFService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getRechercheBDF(codeEtablissement: string, identifiantEntiteTitulaire: string): ng.IPromise<Modeles.Surendettement.IRecherche[]>;
    }
}

declare namespace Contentieux.RestServices.Services {
    class RestService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
        sendRequest<T>(settings: MyWay.Services.IRequestSettings): ng.IPromise<T>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ISmsService {
        getModeleSms(codeEtablissement: string, typeRelance: string, typeEnvoiRelance: string, numeroDossier: number, identifiantCreanceCTX: string, identifiantContrat?: string, identifiantPersonne?: number, numeroEntiteTitulaire?: number, numeroTelephoneInterne?: string, numeroFax?: string, libelleAdresseMessagerie?: string, designationLongueAgentInterne?: string, designationBancaireCourte?: string, raisonSocialeEtablissement?: string): ng.IPromise<Modeles.IModeleSms[]>;
        postEnvoiSmsUnitaire(envoiSmsUnitaire: Modeles.IEnvoiSmsUnitaire): ng.IPromise<Modeles.IInfosSmsAEmettre>;
        getRetourRelance(codeEtablissement: string, numeroDossier: number, codeAction: string, identifiantAgent: string): ng.IPromise<Modeles.IRetourRelance>;
        putRetourRelance(codeEtablissement: string, numeroDossier: number, codeAction: string, identifiantAgent: string): ng.IPromise<Modeles.IRetourRelance>;
        postCreFonctionnel(codeNatureFlux: string, codeModeEchange: string, creFonctionnel: Modeles.ICreFonctionnel): ng.IPromise<Modeles.IEnteteApplicativeRetour>;
    }
    class SmsService implements ISmsService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getModeleSms(codeEtablissement: string, typeRelance: string, typeEnvoiRelance: string, numeroDossier: number, identifiantCreanceCTX: string, identifiantContrat?: string, identifiantPersonne?: number, numeroEntiteTitulaire?: number, numeroTelephoneInterne?: string, numeroFax?: string, libelleAdresseMessagerie?: string, designationLongueAgentInterne?: string, designationBancaireCourte?: string, raisonSocialeEtablissement?: string): ng.IPromise<Modeles.IModeleSms[]>;
        postEnvoiSmsUnitaire(envoiSmsUnitaire: Modeles.IEnvoiSmsUnitaire): ng.IPromise<Modeles.IInfosSmsAEmettre>;
        getRetourRelance(codeEtablissement: string, numeroDossier: number, codeAction: string, identifiantAgent: string): ng.IPromise<Modeles.IRetourRelance>;
        putRetourRelance(codeEtablissement: string, numeroDossier: number, codeAction: string, identifiantAgent: string): ng.IPromise<any>;
        postCreFonctionnel(codeNatureFlux: string, codeModeEchange: string, creFonctionnel: Modeles.ICreFonctionnel): ng.IPromise<Modeles.IEnteteApplicativeRetour>;
        private deleteNullParameters(params);
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ISyntheseService {
        getMiniProfil(codeEtablissement: string, codeGuichetInterbancaire: string, codeProduitService: string, referenceProduitService: string, numeroCarteBancaire: string, identifiantEntiteTitulaire: number, identifiantTiers: number, typeRecherche: string, typeRestitution: string): ng.IPromise<Modeles.MiniProfil.ICaracteristiqueMiniProfil[]>;
    }
    class SyntheseService implements ISyntheseService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getMiniProfil(codeEtablissement: string, codeGuichetInterbancaire: string, codeProduitService: string, referenceProduitService: string, numeroCarteBancaire: string, identifiantEntiteTitulaire: number, identifiantTiers: number, typeRecherche: string, typeRestitution: string): ng.IPromise<Modeles.MiniProfil.ICaracteristiqueMiniProfil[]>;
    }
}

declare namespace Contentieux.RestServices.Commun.Constantes.Url {
    /**
     * Regroupement par domaine origine et tri alphabétique
     */
    namespace Rest {
        const urlDossierRecouvrement: string;
        const urlDossierRecouvrementService: string;
        const urlCreance: string;
        const urlCreanceParametre: string;
        const urlCreanceService: string;
        const urlDossierSurendettement: string;
        const urlAgent: string;
        const urlDossierNumeriqueMetier: string;
        const urlCreditConso: string;
        const urlCREFonctionnel: string;
        const urlContratCCE: string;
        const urlContratCDD: string;
        const urlOffre: string;
        const urlDossierCreditGestion: string;
        const urlEntiteTitulaire: string;
        const urlEntiteTitulaireService: string;
        const urlRisqueClient: string;
        const urlSyntheseService: string;
        const urlTiersV2: string;
        const urlTiersV3: string;
        const urlTiersService: string;
        const urlOperationFinanciereV1: string;
        const urlOperationDiverse: string;
        const urlOperationFinanciereService: string;
        const urlStructure: string;
        const urlContrat: string;
        const urlServiceTelephonie: string;
        const urlGarantie: string;
    }
    namespace Parametres {
        const typeRechercheEntiteTitulaire: string;
        const codeTypeNote: number;
        const codeEtatDossierActif: number;
        const codeEtatDossierClos: number;
        const codeEtatDossierArchive: number;
        const codeEtatDossierTous: number;
    }
    namespace InfosDossier {
        const urlDossierRecouvrementInfosDossier: string;
        const urlDossierRecouvrementInfosDossierAdminist: string;
        const urlDossierRecouvrementInfosDossierHisto: string;
        const urlDossierRecouvrementRechercheET: string;
        const urlDossierRecouvrementProvision: string;
        const urlDossierContratsMySys: string;
        const urlDossierContratsProduitsMySys: string;
    }
    namespace InfosPersonne {
        const urlDossierRecouvrementListeDossiers: string;
        const urlTiersMedia: string;
        const urlETAdresse: string;
        const urlInfoET: string;
        const urlRechET: string;
        const urlNoteBale: string;
        const urlDesignationET: string;
        const urlTiersDesignationPersonne: string;
    }
    namespace Dossier {
        const urlDossierRecouvrementDossiers: string;
        const urlCompteCCIE: string;
    }
    namespace DossierSurendetement {
        const urlEcheancierBDF: string;
        const urlRechercheBDF: string;
    }
    namespace Portefeuille {
        const urlRecherchePortefeuille: string;
        const urlHabilitationsPortefeuille: string;
    }
    namespace Alertes {
        const urlAlertesAffectation: string;
        const urlAlertesProcedureCollective: string;
        const urlAlertesEcheancier: string;
        const urlAlertesSurendettement: string;
        const urlActionsPlanifiees: string;
        const urlAlerte: string;
    }
    namespace Solde {
        const urlSoldeCDD: string;
        const urlSoldeCCE: string;
        const urlSoldeCreditConsoAmortissable: string;
        const urlSoldeSynchro: string;
        const urlSoldeMiniProfil: string;
    }
    namespace Sms {
        const urlEnvoiSmsUniaire: string;
        const urlModeleSms: string;
        const urlRetourRelance: string;
        const urlCreFonctionnel: string;
    }
    namespace Paiement {
        const urlEnvoiePaiementEnLigne: string;
        const urlPaiementMemo: string;
        const urlEligibilitePaiement: string;
    }
    namespace Creance {
        const urlCaracteristique: string;
        const urlMouvementFinancier: string;
        const urlGarantie: string;
        const urlPaiementCheque: string;
        const urlPrelevementPonctuel: string;
        const urlEcheancier: string;
        const urlCompteSupport: string;
        const urlParametreReglement: string;
        const urlCalculGarantiePGE: string;
        const urlEcheancierVAD: string;
    }
    namespace PersonneMorale {
        const urlTiersCorporateInformation: string;
    }
    namespace Eds {
        const urlCaracteristique: string;
        const urlInfoEDS: string;
        const urlCaracteristiqueSiege: string;
        const urlEtablissementMySys: string;
    }
    namespace DossierNumerique {
        const urlDossierNumeriqueMetier: string;
    }
    namespace OperationFinanciere {
        const urlOperationFinanciere: string;
        const urlControleForcageImputation: string;
        const urlConversionRibBicIban: string;
    }
    namespace OperationDiverse {
        const urlVersementODTechnique: string;
    }
    namespace Contrat {
        const urlInformationContrat: string;
    }
    namespace CreditGestion {
        const urlCreancesGelees: string;
    }
    namespace Offre {
        const urlOffreRecherche: string;
    }
    namespace PGE {
        const urlInformationGarantie: string;
    }
}
