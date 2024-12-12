module Portefeuille.Tests.Filter {
    "use strict";

    describe("montantFiltre", () => {

        var getFilter;

        beforeEach(() => {
            angular.mock.module("portefeuille");
            angular.mock.inject((_$filter_) => {
                getFilter = function () {
                    return _$filter_("montantFiltre");
                };
            });
        });

        describe("Fonctionnement normal", () => {
            it("Affiche le montant en entrée avec le format XXX XXX k€", () => {
                var filtre;
                filtre = getFilter();
                var valMedia = "123456";
                var expected = "123 456 k€";
                expect(filtre(valMedia)).toBe(expected);

                var valMedia = "0";
                var expected = "0 k€";
                expect(filtre(valMedia)).toBe(expected);

            });

            it("Affiche l'indicateur CHAINE_INDICATEUR_NON_CONNU si entrée undefined", () => {
                var filtre;
                filtre = getFilter();
                var valMedia = undefined;
                var expected = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                expect(filtre(valMedia)).toBe(expected);
            });

            it("Affiche l'indicateur CHAINE_INDICATEUR_NON_CONNU si entrée NULL", () => {
                var filtre;
                filtre = getFilter();
                var valMedia = null;
                var expected = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                expect(filtre(valMedia)).toBe(expected);
            });

            it("Affiche l'indicateur CHAINE_INDICATEUR_NON_CONNU si entrée Vide", () => {
                var filtre;
                filtre = getFilter();
                var valMedia = "";
                var expected = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                expect(filtre(valMedia)).toBe(expected);
            });
        });
        
    });

    describe("valeurNonConnuFiltre", () => {

        var getFilter;

        beforeEach(() => {
            angular.mock.module("portefeuille");
            angular.mock.inject((_$filter_) => {
                getFilter = function () {
                    return _$filter_("valeurNonConnuFiltre");
                };
            });
        });

        describe("Fonctionnement normal", () => {
            it("Affiche la valeur en entrée", () => {
                var filtre;
                filtre = getFilter();
                var valMedia = "toto";
                var expected = "toto";
                expect(filtre(valMedia)).toBe(expected);
            });

            it("Affiche l'indicateur CHAINE_INDICATEUR_NON_CONNU si entrée undefined", () => {
                var filtre;
                filtre = getFilter();
                var valMedia = undefined;
                var expected = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                expect(filtre(valMedia)).toBe(expected);
            });

            it("Affiche l'indicateur CHAINE_INDICATEUR_NON_CONNU si entrée NULL", () => {
                var filtre;
                filtre = getFilter();
                var valMedia = null;
                var expected = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                expect(filtre(valMedia)).toBe(expected);
            });

            it("Affiche l'indicateur CHAINE_INDICATEUR_NON_CONNU si entrée Vide", () => {
                var filtre;
                filtre = getFilter();
                var valMedia = "";
                var expected = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                expect(filtre(valMedia)).toBe(expected);
            });
        });

    });

    describe("indicateurUtilisantPasFiltre", () => {

        var getFilter;

        beforeEach(() => {
            angular.mock.module("portefeuille");
            angular.mock.inject((_$filter_) => {
                getFilter = function () {
                    return _$filter_("indicateurUtilisantPasFiltre");
                };
            });
        });

        describe("Fonctionnement normal", () => {
            it("Renvoie la liste des indicateur n'etant pas utilisée dans un filtre en vue client", () => {
                var filtre;
                filtre = getFilter();
                var listeIndicateurs = [{ "indicateur": { "code": "DateDernierEntretienRel", "typeIndicateur": "Date", "intitule": "Dernier CR" }, "utilise": false, "utiliseRelationEco": true, "listeValeurs": [] }];
                var estVueClient = true;
                var expected = listeIndicateurs;
                expect(filtre(listeIndicateurs, estVueClient)).toEqual(expected);

                listeIndicateurs = [{ "indicateur": { "code": "DateDernierEntretienRel", "typeIndicateur": "Date", "intitule": "Dernier CR" }, "utilise": true, "utiliseRelationEco": true, "listeValeurs": [] }];
                expected = [];
                expect(filtre(listeIndicateurs, estVueClient)).toEqual(expected);
            });

            it("Renvoie la liste des indicateur n'etant pas utilisée dans un filtre en vue relation", () => {
                var filtre;
                filtre = getFilter();
                var listeIndicateurs = [{ "indicateur": { "code": "DateDernierEntretienRel", "typeIndicateur": "Date", "intitule": "Dernier CR" }, "utilise": true, "utiliseRelationEco": false, "listeValeurs": [] }];
                var estVueClient = false;
                var expected = listeIndicateurs;
                expect(filtre(listeIndicateurs, estVueClient)).toEqual(expected);

                listeIndicateurs = [{ "indicateur": { "code": "DateDernierEntretienRel", "typeIndicateur": "Date", "intitule": "Dernier CR" }, "utilise": true, "utiliseRelationEco": true, "listeValeurs": [] }];
                expected = [];
                expect(filtre(listeIndicateurs, estVueClient)).toEqual(expected);
            });
        });
    });

    describe("sansIndicateurDateFiltre", () => {

        var getFilter;

        beforeEach(() => {
            angular.mock.module("portefeuille");
            angular.mock.inject((_$filter_) => {
                getFilter = function () {
                    return _$filter_("sansIndicateurDateFiltre");
                };
            });
        });

        describe("Fonctionnement normal", () => {
            it("Renvoie la liste des indicateur n'etant pas de type DATE", () => {
                var filtre;
                filtre = getFilter();
                var listeIndicateurs = [{ "indicateur": { "code": "DateDernierEntretienRel", "typeIndicateur": "Nombre", "intitule": "Dernier CR" }, "utilise": true, "utiliseRelationEco": true, "listeValeurs": [] }];
                var expected = listeIndicateurs;
                expect(filtre(listeIndicateurs)).toEqual(expected);

                listeIndicateurs = [{ "indicateur": { "code": "DateDernierEntretienRel", "typeIndicateur": "Date", "intitule": "Dernier CR" }, "utilise": true, "utiliseRelationEco": true, "listeValeurs": [] }];
                expected = [];
                expect(filtre(listeIndicateurs)).toEqual(expected);
            });
        });
    });
}