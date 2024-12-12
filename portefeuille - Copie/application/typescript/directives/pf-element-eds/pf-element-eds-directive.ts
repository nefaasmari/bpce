/**
 * Directive pf-element-eds
 * @module portefeuille.Directives
 * @author S0005355 (Eric ALBERT)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfElementEds($compile: ng.ICompileService): ng.IDirective {
        return <ng.IDirective> {
            restrict: "EA",
            templateUrl: "typescript/directives/pf-element-eds/pf-element-eds-vue.html",
            controller: "PfElementEdsControleur",
            controllerAs: "popupCtrl",
            bindToController: true,
            //replace: true,
            transclude: true,
            scope: {
                eds: "="
            },
            compile: (tElement: JQuery, tAttr: ng.IAttributes, trantransclude: ng.ITranscludeFunction) => {
                let contents: JQuery = tElement.contents().remove();
                let compiledContents: ng.ITemplateLinkingFunction;
                return (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ctrl: any, transclude: ng.ITranscludeFunction) => {
                    if (!compiledContents) {
                        compiledContents = $compile(contents, trantransclude);
                    }
                    return compiledContents(scope, (clone: ng.IAugmentedJQuery) => {
                        element.append(clone);
                    });
                };
            }
        };
    }

    // Déclaration de la directive
    // Attention !!! mettre l'injection de la compile en paramètre (Sans en DUA ok mais en VFO ko)
    app.directive("mwPfElementEds", ["$compile", mwPfElementEds]);
}