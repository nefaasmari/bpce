/** ne pas supprimer sert pour le done des tests asynchrones */
interface IDoneFn extends Function {
    (): void;
    /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
    fail: (message?: Error | string) => void;
}

declare module myway.gestionEpargne.depotATerme.commun {
    var communModule: any;
}

declare module myway.gestionEpargne.depotATerme.commun {
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
        constructor();
    }
}

declare module myway.gestionEpargne.depotATerme.commun {
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

declare module myway.gestionEpargne.depotATerme.commun {
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

declare module myway.gestionEpargne.depotATerme.commun {
    /**
     * Service de récupération d'informations de DAT
     */
    class InformationsService {
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

declare module myway.gestionEpargne.depotATerme.commun {
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
         * @param {string} codeEtablissement
         * @param {string} codeGuichet
         * @param {number} numeroPersonne
         * @param {number} numeroEntiteTitulaire
         * @returns {ng.IPromise<DepotATerme[]>} Liste de DAT
         */
        getCatalogueProduit(codeEtablissement: string, codeGuichet: string, numeroPersonne: number, numeroEntiteTitulaire: number): ng.IPromise<DepotATerme[]>;
    }
}
