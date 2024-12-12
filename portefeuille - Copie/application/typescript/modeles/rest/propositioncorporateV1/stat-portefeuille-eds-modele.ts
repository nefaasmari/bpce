declare module Portefeuille.Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds {
    export interface IStatPortefeuilleEds {
        parametres: IParametres;
        vueGlobaleStatPtfEds: IStatPtfEdsStandard;
        vueDetailleeStatPtfEds: Array<IStatPtfEdsStandard>;
    }

    export interface IParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        listePortefeuilleEds: Array<IPortefeuilleEds>;
        /**
         * Valeur :
         * '0' : vue globale
         * '1' : vue détaillée
         * '2' : vue globale + vue détaillée
         */
        typeVue: string;
    }

    export interface IPortefeuilleEds {
        /**
         * Numéro d'identification de l'élément de structure Suivi Par.
         */
        identifiantEds: number;
        /**
         * Numéro de portefeuille.
         */
        identifiantPortefeuille: number;
    }

    export interface IStatPtfEdsStandard {
        /**
         * Numéro d'identification de l'élément de structure Suivi Par.
         */
        identifiantEds: number;
        /**
         * Code civilité du chargé d'affaire.
         */
        codeCiviliteChargeAffaire: string;
        /**
         * Nom famille du chargé d'affaire
         */
        nomFamilleChargeAffaire: string;
        /**
         * Premier prénom état civil du chargé d'affaire.
         */
        prenomChargeAffaire: string;
        /**
         * Nom usage du chargé d'affaire.
         */
        nomUsageChargeAffaire: string;
        /**
         * Nombre de clients total.
         */
        nombreClients: number;
        /**
         * Nombre de prospects.
         */
        nombreProspects: number;
        /**
         * Nombre de relations économiques (toutes catégories confondues).
         */
        nombreRelationsEconomiques: number;
        /**
         * Nombre de clients de type Entreprises - ESI.
         */
        nombreClientsTypePmeEsi: number;
        /**
         * Nombre de clients de type PRO (EI inclus).
         */
        nombreClientsTypeProEi: number;
        /**
         * Nombre de clients de type Autres (ni Entreprise - ESI, PRO, EI).
         */
        nombreClientsTypeAutre: number;
        /**
         * Nombre de rendez vous réalisés pour des prospects depuis le 1er janvier de l'année en cours.
         */
        nbRdvProspectRealiseAnneeCivile: number;
        /**
         * Nombre de prospects qui ont un RDV réalisé (donc avec un CRE) depuis le 1er janvier de l'année en cours.
         */
        nbProspectsVusAnneeEncours: number;
        /**
         * Nombre de relations éco dont le leader est client (non prospect) qui ont un RDV validé (donc avec un CRE) depuis le 1er janvier de l'année en cours.
         */
        nbRelEcoClientVuesAnneeEncours: number;
        /**
         * Nombre de rendez-vous réalisés sur l'année en cours (depuis le 1er janvier) pour les relations économiques de type "clients" 
         * (dont le leader est client) / nb de relations économiques de type "clients" (dont le leader est client) au jour J.
         */
        tauxDeVisite: number;
        /**
         * Le nombre total de clients qui ont une segmentation calculée dans le(s) portefeuille(s).
         */
        nombreTotalClientsSegmentation: number;
        /**
         * Nombre de rendez-vous client.
         */
        nbRdvClient: number;
        /**
         * Nombre de client vus.
         */
        nbClientsVus: number;
        /**
         * Nombre Clients PE et PEES
         */
        nbClientsPePees: number;
        /**
         * Nombre Clients ME et MEES
         */
        nbClientsMeMees: number;
        /**
         * Nombre Clients GE et GEES
         */
        nbClientsGeGees: number;
        /**
         * Date début de calcul flux année N.
         */
        dateDebFluxAnneeN: string;
        /**
         * Date fin de calcul flux année N.
         */
        dateFinFluxAnneeN: string;
        /**
         * Somme des flux créditeurs des clients de l'année N.
         */
        fluxCrediteursAnneeN: number;
        /**
         * Somme des flux débiteurs des clients de l'année N.
         */
        fluxDebiteursAnneeN: number;
        /**
         * Date début de calcul flux année N-1.
         */
        dateDebFluxAnneeNMoins1: string;
        /**
         * Date fin de calcul flux année N-1.
         */
        dateFinFluxAnneeNMoins1: string;
        /**
         * Somme des flux créditeurs des clients de l'année N-1.
         */
        fluxCrediteursNMoins1: number;
        /**
         * Somme des flux débiteurs des clients de l'année N-1.
         */
        fluxDebiteursNMoins1: number;
        /**
         * Taux évolution flux créditeurs
         */
        tauxEvolutionFluxCrediteurs: number;
        /**
         * Taux évolution flux débiteurs
         */
        tauxEvolutionFluxDebiteurs: number;
        /**
         * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N.
         */
        pnb12DerniersMoisGlissantN: number;
        /**
         * Date début de calcul du PNB de 12 derniers mois glissants de l'année N.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb12DerMoisGlissN: string;
        /**
         * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb12DerMoisGlissN: string;
        /**
         * Somme de tous les PNB des clients des portefeuilles au 31/12 de l'année N-1
         */
        pnb3112AnneeNMoins1: number;
        /**
         * Date début de calcul du PNB au 31/12 de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb3112AnneeNMoins1: string;
        /**
         * Date arrêtée de calcul du PNB au 31/12 de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb3112AnneeNMoins1: string;
        /**
         * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N-1.
         */
        pnb12DerniersMoisGlissNMoins1: number;
        /**
         * Date début de calcul PNB de 12 derniers mois glissants de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb12DerMoisGlissNMoins1: string;
        /**
         * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb12DerMoisGlissNMoins1: string;
        /**
         * % d'évolution du PNB entre les 12 M glissants N-1 et N.
         */
        tauxEvolutionPnb: number;
        /**
         * Nombre de clients actifs.
         */
        nombreClientsActifs: number;
        /**
         * Nombre de Clients non équipés
         */
        nbClientsNonEquipe: number;
        /**
         * Pourcentage de revue portefeuille réalisée.
         */
        pourcentageRevuePtfRealisee: number;
        /**
         * Nombre de clients revus.
         */
        nombreDeClientsRevus: number;
        /**
         * Nombre de produits à proposer.
         */
        nombreDeProduitsAProposer: number;
        /**
         * Nombre de clients à activer.
         */
        nombreDeClientsAActiver: number;
        /**
         * Nombre de clients tarif à renégocier.
         */
        nombreDeClientsTarifARenegocier: number;
        /**
         * Nombre de clients avec Appétence.
         */
        nombreDeClientsAAppetence: number;
        /**
         * Nombre de Clients avec Produit Service
         */
        nbClientsAvecProduitService: number;
        /**
         * Nombre de Clients sans contrat et prospect.
         */
        nbClientsSansContratEtProspect: number;
        /**
         * Cumul nombre des affaires.
         */
        cumulNombreAffaires: number;
        /**
         * Cumul Proposition Commerciale BDR.
         */
        cumulPropositionCommerciale: number;
    }

};