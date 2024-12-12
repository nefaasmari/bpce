/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";

    export class ColonneDataRelationControleur {
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Services.eventService
        ];

        public indicateurProspect: string;

        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $scope: ng.IScope,
            private eventService: Services.Application.IEventService
        ) {
            this.indicateurProspect = Constantes.Application.CHAINE_INDICATEUR_PROSPECT;
        }

        /**
         * Appel à la fonction de filtrage du tableau client du controleur ClientsControleur via EventSErvice
         * @param idRelationFiltre
         */
        public filtrerTableauClients(idRelationFiltre: string): void {
            this.eventService.filtrageTableauClientClientsControleur(idRelationFiltre);
        }

        /**
         * Méthode qui renvoie true si l'indicateur codeTypePersonneRel = 'prospect'
         * @param client
         */
        public isProspect(relationEco: Modeles.Application.IRelationEconomique): boolean {
            return (relationEco.estClient !== undefined && !relationEco.estClient);
        }
    }

    app.controller("ColonneDataRelationControleur", ColonneDataRelationControleur);
} 