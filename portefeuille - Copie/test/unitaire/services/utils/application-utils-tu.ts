module Portefeuille.Tests.Services.Utils {
    "use strict";

    describe("ApplicationUtils", () => {

        describe("Test de la méthode getIndicateur", () => {
            it("Test nominal", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe("");
            });
            it("Test avec une valeur sur l'indicateur REST", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.valeur = "VALEUR";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeur).toBe(indicateurRest.valeur);
            });

            it("Test avec code indicateur CLIENTPROSPECT", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.CLIENTPROSPECT.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.CLIENTPROSPECT.toString());
            });
            it("Test avec code indicateur CLIENTPROSPECT et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.CLIENTPROSPECT.toString();
                indicateurRest.valeur = Constantes.Rest.CODE_TYPE_PERSONNE_CLIENT;
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeur).toBe(Constantes.Application.CHAINE_INDICATEUR_CLIENT);
            });

            it("Test avec code indicateur CA_N", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.CA_N.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.CA_N.toString());
            });
            it("Test avec code indicateur CA_N et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.CA_N.toString();
                indicateurRest.valeur = "100000";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeurNumber).toBe(+indicateurRest.valeur);
            });

            it("Test avec code indicateur MARCHE", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.MARCHE.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.MARCHE.toString());
            });
            it("Test avec code indicateur MARCHE et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.MARCHE.toString();
                indicateurRest.valeur = "VALEUR";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeur).toBe(indicateurRest.valeur);
            });

            it("Test avec code indicateur DATE_DERNIER_ENTRETIEN", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.DATE_DERNIER_ENTRETIEN.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.DATE_DERNIER_ENTRETIEN.toString());
            });
            it("Test avec code indicateur DATE_DERNIER_ENTRETIEN et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.DATE_DERNIER_ENTRETIEN.toString();
                indicateurRest.valeur = "YYYY-MM-DD";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeur).toBe(indicateurRest.valeur);
            });

            it("Test avec code indicateur DATE_DERNIER_RDV", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.DATE_DERNIER_RDV.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.DATE_DERNIER_RDV.toString());
            });
            it("Test avec code indicateur DATE_DERNIER_RDV et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.DATE_DERNIER_RDV.toString();
                indicateurRest.valeur = "YYYY-MM-DD";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeur).toBe(indicateurRest.valeur);
            });

            it("Test avec code indicateur DATE_PROCHAIN_RDV", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.DATE_PROCHAIN_RDV.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.DATE_PROCHAIN_RDV.toString());
            });
            it("Test avec code indicateur DATE_PROCHAIN_RDV et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.DATE_PROCHAIN_RDV.toString();
                indicateurRest.valeur = "YYYY-MM-DD";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeur).toBe(indicateurRest.valeur);
            });

            it("Test avec code indicateur NB_RDV_ANNEE_EN_COURS", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.NB_RDV_ANNEE_EN_COURS.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.typeIndicateur).toBe(Enum.Indicateur.TYPE.NOMBRE);
            });
            it("Test avec code indicateur NB_RDV_ANNEE_EN_COURS  et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.NB_RDV_ANNEE_EN_COURS.toString();
                indicateurRest.valeur = "2";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeurNumber).toBe(+indicateurRest.valeur);
            });

            it("Test avec code indicateur NB_RDV_12_MOIS_GLISSANTS", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.NB_RDV_12_MOIS_GLISSANTS.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.NB_RDV_12_MOIS_GLISSANTS.toString());
            });
            it("Test avec code indicateur NB_RDV_12_MOIS_GLISSANTS et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.NB_RDV_12_MOIS_GLISSANTS.toString();
                indicateurRest.valeur = "2";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeurNumber).toBe(+indicateurRest.valeur);
            });

            it("Test avec code indicateur NOTE_BALE2", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.NOTE_BALE2.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.NOTE_BALE2.toString());
            });
            it("Test avec code indicateur NOTE_BALE2 et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.NOTE_BALE2.toString();
                indicateurRest.valeur = "VALEUR";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeur).toBe(indicateurRest.valeur);
            });

            it("Test avec code indicateur SEG_RELATIONNELLE", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.SEG_RELATIONNELLE.toString();
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.intitule).toBe(Enum.Indicateur.INTITULE.SEG_RELATIONNELLE.toString());
            });
            it("Test avec code indicateur SEG_RELATIONNELLE et avec valeur", () => {
                let indicateurRest = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                indicateurRest.code = Enum.Indicateur.CODE.SEG_RELATIONNELLE.toString();
                indicateurRest.valeur = "VALEUR";
                let result = Portefeuille.Services.Utils.ApplicationUtils.getIndicateur(indicateurRest);
                expect(result.valeur).toBe(indicateurRest.valeur);
            });
        });

        describe("Test de la méthode getPortefeuilleDepuisDonneeSignifiante", () => {
            it("Test nominal", () => {
                let portefeuille = Portefeuille.Services.Utils.ApplicationUtils.getPortefeuilleDepuisDonneeSignifiante(Mocks.DONNEE_SIGNIFIANTE);
                expect(portefeuille.id).toBe(Mocks.DONNEE_SIGNIFIANTE.identifiantPortefeuille);
            });

            it("Test avec données d'entrée à null", () => {
                let portefeuille = Portefeuille.Services.Utils.ApplicationUtils.getPortefeuilleDepuisDonneeSignifiante(null);
                expect(portefeuille).toBe(undefined);
            });
        });

        describe("Test de la méthode alimenterListeDonneesConfigDonut", () => {
            it("Test avec objet listeSegmentation non renseigné", () => {
                let resultat = Portefeuille.Services.Utils.ApplicationUtils.alimenterListeDonneesConfigDonut(null);
                expect(resultat).toBeUndefined();
            });

            it("Test avec objet listeSegmentation renseigné", () => {
                let resultat = Portefeuille.Services.Utils.ApplicationUtils.alimenterListeDonneesConfigDonut(Portefeuille.Tests.Mocks.SEGMENTATION_RELATIONNELLE_PMEESI);
                expect(resultat).toBeDefined();
                expect(resultat.length).toEqual(3);
                expect(resultat[0].nom).toEqual(Portefeuille.Tests.Mocks.SEGMENTATION_RELATIONNELLE_PMEESI[0].libelle);
            });
        });

        describe("Test de la méthode getConfigDonutSelonType", () => {
            it("Test avec paramètres non conformes -> stats non renseignées", () => {
                let resultat = Portefeuille.Services.Utils.ApplicationUtils.getConfigDonutSelonType(Portefeuille.Constantes.Application.DONUT_PME_ESI, null);
                expect(resultat).toBeUndefined();
            });

            it("Test avec paramètres non conformes -> type de donut erroné", () => {
                let resultat = Portefeuille.Services.Utils.ApplicationUtils.getConfigDonutSelonType("blablabla", Portefeuille.Tests.Mocks.STATS_REVUE_ET_PORTEFEUILLE);
                expect(resultat).toBeUndefined();
            });

            it("Test avec paramètres conformes", () => {
                let resultat = Portefeuille.Services.Utils.ApplicationUtils.getConfigDonutSelonType(Portefeuille.Constantes.Application.DONUT_PME_ESI, Portefeuille.Tests.Mocks.STATS_REVUE_ET_PORTEFEUILLE);
                expect(resultat).toBeDefined();
                expect(resultat.listeDonnees.length).toEqual(3);
                expect(resultat.listeDonnees[0].nom).toEqual(Portefeuille.Tests.Mocks.SEGMENTATION_RELATIONNELLE_PMEESI[0].libelle);
            });
        });

        describe("Test de la méthode agglomererSegmentationPro", () => {
            it("Test avec objet listeSegmentationProRest non renseigné", () => {
                let resultat = Portefeuille.Services.Utils.ApplicationUtils.agglomererSegmentationPro(null);
                expect(resultat).toBeUndefined();
            });

            it("Test avec objet listeSegmentationProRest renseigné", () => {
                let resultat = Portefeuille.Services.Utils.ApplicationUtils.agglomererSegmentationPro(Portefeuille.Tests.Mocks.SEGMENTATION_RELATIONNELLE_PRO_REST);
                expect(resultat).toBeDefined();
                expect(resultat.length).toEqual(1);
                expect(resultat[0].libelle).toEqual(Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_PRO_PARTIELLEMENT_CAPTE);
            });
        });
    });
}