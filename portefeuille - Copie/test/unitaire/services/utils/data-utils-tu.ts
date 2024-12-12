module Portefeuille.Tests.Services.Utils {
    "use strict";

    describe("DataUtils", () => {

        describe("Test de la méthode setONToBoolean", () => {
            it("Test avec CODE_O_TRUE", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setONToBoolean(Constantes.Rest.CODE_O_TRUE);
                expect(result).toBeTruthy();
            });

            it("Test avec une valeur différente de CODE_O_TRUE", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setONToBoolean("X");
                expect(result).toBeFalsy();
            });
        });

        describe("Test de la méthode getEstLeaderDepuisCodeLeader", () => {
            it("Test avec CODE_LEADER_RELATION", () => {
                let result = Portefeuille.Services.Utils.DataUtils.getEstLeaderDepuisCodeLeader(Constantes.Application.CODE_LEADER_RELATION);
                expect(result).toBeTruthy();
            });

            it("Test avec une valeur différente de CODE_LEADER_RELATION", () => {
                let result = Portefeuille.Services.Utils.DataUtils.getEstLeaderDepuisCodeLeader("X");
                expect(result).toBeFalsy();
            });
        });

        describe("Test de la méthode getEstClientDepuisIndicateur", () => {
            it("Test avec valeur = CHAINE_INDICATEUR_CLIENT", () => {
                let indicateur = <Modeles.Application.IIndicateur>{};
                indicateur.valeur = Constantes.Application.CHAINE_INDICATEUR_CLIENT;

                let result = Portefeuille.Services.Utils.DataUtils.getEstClientDepuisIndicateur(indicateur);
                expect(result).toBeTruthy();
            });

            it("Test avec valeur différente de CHAINE_INDICATEUR_CLIENT", () => {
                let indicateur = <Modeles.Application.IIndicateur>{};
                indicateur.valeur = "X";

                let result = Portefeuille.Services.Utils.DataUtils.getEstClientDepuisIndicateur(indicateur);
                expect(result).toBeFalsy();
            });

            it("Test avec indicateur null", () => {
                let result = Portefeuille.Services.Utils.DataUtils.getEstClientDepuisIndicateur(null);
                expect(result).toBeUndefined();
            });
        });

        describe("Test de la méthode getEstActifDepuisIndicateur", () => {
            it("Test avec valeur = CHAINE_INDICATEUR_ACTIF", () => {
                let indicateur = <Modeles.Application.IIndicateur>{};
                indicateur.valeur = Constantes.Application.CHAINE_INDICATEUR_ACTIF;

                let result = Portefeuille.Services.Utils.DataUtils.getEstActifDepuisIndicateur(indicateur);
                expect(result).toBeTruthy();
            });

            it("Test avec valeur différente de CHAINE_INDICATEUR_ACTIF", () => {
                let indicateur = <Modeles.Application.IIndicateur>{};
                indicateur.valeur = "X";

                let result = Portefeuille.Services.Utils.DataUtils.getEstActifDepuisIndicateur(indicateur);
                expect(result).toBeFalsy();
            });
        });

        describe("Test de la méthode setStrToActifInactif", () => {
            it("Test avec code = CODE_STRING_ACTIF", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setStrToActifInactif(Constantes.Rest.CODE_STRING_ACTIF);
                expect(result).toBe(Constantes.Application.CHAINE_INDICATEUR_ACTIF);
            });

            it("Test avec code != CODE_STRING_ACTIF", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setStrToActifInactif("X");
                expect(result).toBe(Constantes.Application.CHAINE_INDICATEUR_INACTIF);
            });

            it("Test avec code null", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setStrToActifInactif(null);
                expect(result).toBe(Constantes.Application.CHAINE_INDICATEUR_NON_CONNU);
            });
        });

        describe("Test de la méthode setStrToClientProspectVide", () => {
            it("Test avec code = CODE_TYPE_PERSONNE_CLIENT", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setStrToClientProspectVide(Constantes.Rest.CODE_TYPE_PERSONNE_CLIENT);
                expect(result).toBe(Constantes.Application.CHAINE_INDICATEUR_CLIENT);
            });

            it("Test avec code = CODE_TYPE_PERSONNE_TIERS", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setStrToClientProspectVide(Constantes.Rest.CODE_TYPE_PERSONNE_TIERS);
                expect(result).toBe(Constantes.Application.CHAINE_INDICATEUR_TIERS);
            });

            it("Test avec code = CODE_TYPE_PERSONNE_PROPECT_RESTREINT", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setStrToClientProspectVide(Constantes.Rest.CODE_TYPE_PERSONNE_PROPECT_RESTREINT);
                expect(result).toBe(Constantes.Application.CHAINE_INDICATEUR_PROSPECT);
            });

            it("Test avec code = CODE_TYPE_PERSONNE_PROPECT_ENRICHI", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setStrToClientProspectVide(Constantes.Rest.CODE_TYPE_PERSONNE_PROPECT_ENRICHI);
                expect(result).toBe(Constantes.Application.CHAINE_INDICATEUR_PROSPECT);
            });

            it("Test avec code = null", () => {
                let result = Portefeuille.Services.Utils.DataUtils.setStrToClientProspectVide(null);
                expect(result).toBe(Constantes.Application.CHAINE_INDICATEUR_NON_CONNU);
            });
        });

        describe("Test de la méthode lPad", () => {
            it("Test nominale", () => {
                let result = Portefeuille.Services.Utils.DataUtils.lPad(9, 3);
                expect(result).toBe("009");
            });
        });

        describe("Test de la méthode booleanToOuiNon", () => {
            it("Test avec true", () => {
                let result = Portefeuille.Services.Utils.DataUtils.booleanToOuiNon(true);
                expect(result).toBe(Constantes.Application.CHAINE_OUI);
            });

            it("Test avec false", () => {
                let result = Portefeuille.Services.Utils.DataUtils.booleanToOuiNon(false);
                expect(result).toBe(Constantes.Application.CHAINE_NON);
            });
        });

        describe("Test de la méthode formatDateIhm", () => {
            it("Test nominale", () => {
                let result = Portefeuille.Services.Utils.DataUtils.formatDateIhm("2019-02-20");
                expect(result).toBe("20/02/2019");
            });
        });

        describe("Test de la méthode formatMontant", () => {
            it("Test nominale", () => {
                let result = Portefeuille.Services.Utils.DataUtils.formatMontant(10000);
                expect(result).toBe("10 000");
            });
        });
    });
}