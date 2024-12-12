/**
 * Ensemble d'interfaces de modèles applicatifs pour les statistiques
 * @module Portefeuille.Modeles.Application
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Modeles.ApplicationStats {
    "use strict";

    /**
     * Modèle de rentabilite
     */
    export interface IRentabilite {
        ratioPNBImportants: number;
        tauxEvolutionPnb: number;
        pnb12DerniersMoisGlissNMoins1: number;
        dateDebPnb12DerMoisGlissNMoins1: Date;
        dateFinPnb12DerMoisGlissNMoins1: Date;
        pnb12DerniersMoisGlissantN: number;
        dateDebPnb12DerMoisGlissN: Date;
        dateFinPnb12DerMoisGlissN: Date;
        pnb3112AnneeNMoins1: number;
        dateDebPnb3112AnneeNMoins1: Date;
        dateFinPnb3112AnneeNMoins1: Date;
    }

    /**
     * Modèle de Flux
     */
    export interface IFlux {
        tauxEvolutionFlux: number;

        flux12DerniersMoisGlissNMoins1: number;
        flux12DerniersMoisGlissantN: number;

        dateDebFlux12DerMoisGlissN: Date;
        dateDebFlux12DerMoisGlissNMoins1: Date;

        dateFinFlux12DerMoisGlissNMoins1: Date;
        dateFinFlux12DerMoisGlissN: Date;
    }


    /**
     * Modèle de rdv et portefeuille
     */
    export interface IRdvPtf {
        nombreClients: number;
        nombreClientsActifs: number;
        nombreProspects: number;
        nombreRelations: number;
        nombreClientsPMEESI: number;
        nombreClientsPEetPEES: number;
        nombreClientsMEetMEES: number;
        nombreClientsGEetGEES: number;
        nombreClientsPro: number;
        nombreClientsAutres: number;
        listeSegmentationsPMEESI: Array<ISegmentationRelationnelle>;
        listeSegmentationsPro: Array<ISegmentationRelationnelle>;   //BDRL-1648 : Ajout Segmentation Pro
        nombreRdvProspectAnneeCivile: number;
        nombreRdvProspectAnneeEnCours: number;
        nombreRdvRelationEcoClient: number;
        rdvTauxVisite: number;
        nombreRdvClientAnneeEnCours: number; //BDRL-1636
        nombreClientsNonEquipe: number;
        nombreClientsAvecProduitService: number;
        nombreClientsSansContratEtProspect: number;
    }

    export interface ISegmentationRelationnelle {
        code: string;
        libelle: string;
        pourcentage: number;
    }

    /**
     * Modèle de revue portefeuille
     */
    export interface IRevuePortefeuille {
        pourcentageRevuePtfRealisee: number;
        nombreDeProduitsAProposer: number;
        nombreDeClientsAActiver: number;
        nombreDeClientsARenegocier: number;
        nombreDeClientsAAppetence: number;
        nombreDePropositionsEnCours: number;
        nombreDeAffairesEnCours: number;
    }

    export interface IClientSimplifie {
        raisonSociale: string;
        identifiantPersonne: number;
        tauxObjectifFlux: number;
        libelleSegment: string;
    }

    /**
     * détail pour les details
     */
    export interface IDetailPtf {
        detailParSuviPar: Array<IDetailPtfParSuviPar>;
        tauxDeRevueTotal: number;
        tauxDeVisiteTotal: number;

        dateDebPnb12DerMoisGlissNMoins1: Date;
        dateFinPnb12DerMoisGlissNMoins1: Date;
        dateDebPnb12DerMoisGlissN: Date;
        dateFinPnb12DerMoisGlissN: Date;
        pnb12DerniersMoisGlissNMoins1: number;
        pnb12DerniersMoisGlissantN: number;
        tauxEvolutionPnb: number;

        dateDebFluxAnneeNMoins1: Date;
        dateFinFluxAnneeNMoins1: Date;
        dateDebFluxAnneeN: Date;
        dateFinFluxAnneeN: Date;

        fluxCrediteursNMoins1: number;
        fluxCrediteursAnneeN: number;
        tauxEvolutionFluxCrediteurs: number;

        fluxDebiteursNMoins1: number;
        fluxDebiteursAnneeN: number;
        tauxEvolutionFluxDebiteurs: number;
    }

    /**
     * Modèle détail portefeuille par suivi par
     */
    export interface IDetailPtfParSuviPar {
        codeCiviliteSuiviPar: string;
        nomSuiviPar: string;
        prenomSuiviPar: string;

        nombreClients: number;
        nbClientsAvecProduitService: number;
        nombreClientsActifs: number;
        tauxDeVisite: number;
        tauxDeRevue: number;

        pnb12DerniersMoisGlissNMoins1: number;
        pnb12DerniersMoisGlissantN: number;
        tauxEvolutionPnb: number;

        fluxCrediteursNMoins1: number;
        fluxCrediteursAnneeN: number;
        tauxEvolutionFluxCrediteurs: number;

        fluxDebiteursNMoins1: number;
        fluxDebiteursAnneeN: number;
        tauxEvolutionFluxDebiteurs: number;
    }
}