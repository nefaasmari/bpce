module Portefeuille.Tests.Directives {
    "use strict";

    let $scope: ng.IScope;
    let element: ng.IAugmentedJQuery;
    let $compile: ng.ICompileService;

    let sut: Portefeuille.Controleurs.PfDiagrammeColonneControleur;
    let sutPrivate: any;

    describe("Test de la directive pf-diagramme-colonne - Initialisation et compilation", () => {

        beforeEach(() => {
            angular.mock.module("##NOM-MODULE##");

            angular.mock.inject(
                (
                    $injector,
                    _$compile_: ng.ICompileService,
                    _$rootScope_: ng.IRootScopeService,
                    _$q_: ng.IQService
                ) => {
                    $compile = _$compile_;
                    $scope = _$rootScope_;
                });

            // Données d'entrée de la directive
            let $scopePrivate: any = $scope;
            $scopePrivate.svgId = "diagramme-colonne-id";
            $scopePrivate.config = [];
            $scopePrivate.config.push(<Portefeuille.Modeles.Application.IDataIndicateurColonne>{
                id: "colonne-clients",
                intitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_CLIENTS,
                valeur: 3120,
                couleur: Portefeuille.Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_CLIENT,
                hauteur: 0,
                estMontant: false
            });
            $scopePrivate.config.push(<Portefeuille.Modeles.Application.IDataIndicateurColonne>{
                id: "colonne-actifs",
                intitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_SANS_CONTRAT,
                valeur: 2040,
                couleur: Portefeuille.Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_SANS_CONTRAT,
                hauteur: 0,
                estMontant: false
            });
            $scopePrivate.config.push(<Portefeuille.Modeles.Application.IDataIndicateurColonne>{
                id: "colonne-prospects",
                intitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_PROSPECTS,
                valeur: 1200,
                couleur: Portefeuille.Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PROSPECT,
                hauteur: 0,
                estMontant: false
            });
            $scopePrivate.config.push(<Portefeuille.Modeles.Application.IDataIndicateurColonne>{
                id: "colonne-relations",
                intitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_RELATIONS,
                valeur: 780,
                couleur: Portefeuille.Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_RELATIONS,
                hauteur: 0,
                estMontant: false
            });

            let aCompiler = '<mw-pf-diagramme-colonne ';
            aCompiler += 'svg-id="svgId" ';
            aCompiler += 'config="config" ';
            aCompiler += '></mw-pf-diagramme-colonne>';

            element = $compile(aCompiler)($scope);

            $scope.$digest();

            sut = element.controller("mwPfDiagrammeColonne");
            sutPrivate = sut;

        });

        it("Compilation directive mw-pf-diagramme-colonne", () => {
            expect(element).toBeDefined();
            expect(element[0].tagName).toBe("MW-PF-DIAGRAMME-COLONNE");
            expect(sut).toBeDefined();
        });
    });
}