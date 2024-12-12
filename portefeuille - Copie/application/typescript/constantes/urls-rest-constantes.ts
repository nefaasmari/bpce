module Portefeuille.Constantes {
    "use strict";

    export module urlsRest {
        export const URL_REST: string = "##URL-REST##";
        export const URL_REST_TIERSCORPORATEV1_CORPORATE_INFORMATION: string =
            URL_REST + "/tierscorporate/v1/corporateInformation";

        export const URL_REST_TIERSCORPORATESERVICV1_RECHERCHE_COMMERCIALE:
            string = URL_REST + "/tierscorporateservic/v1/rechercheCommerciale";

        export const URL_REST_PORTEFEUILLEV1_RECHERCHE: string =
            URL_REST + "/portefeuille/v1/recherche";
        export const URL_REST_PORTEFEUILLEV1_RECHERCHE_LISTE: string =
            URL_REST + "/portefeuille/v1/recherche/getListe";
        export const URL_REST_PORTEFEUILLEV1_RELATION_COMMERCIALE: string =
            URL_REST + "/portefeuille/v1/relationCommerciale";
        export const URL_REST_PORTEFEUILLEV1_SUIVI_COMPLEMENTAIRE: string =
            URL_REST + "/portefeuille/v1/suiviComplementaire";
        export const URL_REST_PORTEFEUILLEV1_CLIENT: string =
            URL_REST + "/portefeuille/v1/client";

        export const URL_REST_AGENTV2_RECHERCHE: string =
            URL_REST + "/agent/v2/recherche";
        export const URL_REST_AGENTV2_GESTION_AFFECTATION: string =
            URL_REST + "/agent/v2/gestionAffectation";

        export const URL_REST_STRUCTUREV2_EDS_NIVEAU_INFERIEURE: string =
            URL_REST + "/structure/v2/edsNiveauInferieur";

        export const URL_REST_PREFERENCE_UTILISATEUR: string =
            URL_REST + "/preferenceUtilisateur/v1/";

        export const URL_REST_PORTEFEUILLECORPORATEV1_STATRENTABILITE: string =
            URL_REST + "/portefeuillcorporate/v1/statRentabilite";
        export const URL_REST_PORTEFEUILLECORPORATEV1_STATFLUXMOUVEMENTFINANCIER: string =
            URL_REST + "/portefeuillcorporate/v1/statFluxMvtFinancier";
        export const URL_REST_PORTEFEUILLECORPORATEV1_STATPTF: string =
            URL_REST + "/portefeuillcorporate/v1/statPortefeuille";

        export const URL_REST_PROPOSITIONCORPORATEV1_STATREVUE: string =
            URL_REST + "/propositioncorporate/v1/statRevue";
        export const URL_REST_PROPOSITIONCORPORATEV1_RECHERCHE_REVUE:
            string = URL_REST + "/propositioncorporate/v1/rechercheRevue";
        export const URL_REST_PROPOSITIONCORPORATEV1_STAT_PORTEFEUILLE_EDS: string =
            URL_REST + "/propositioncorporate/v1/statPortefeuilleEds";
       
    }
} 