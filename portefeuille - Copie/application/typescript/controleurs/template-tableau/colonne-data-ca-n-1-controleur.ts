/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";

    export class ColonneDataCAN1Controleur {
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Services.eventService
        ];

        public afficherDate: boolean;

        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $scope: ng.IScope,
            private eventService: Services.Application.IEventService
        ) {
            this.afficherDate = true;
        }

        /**
         * Méthode qui renvoie le texte à afficher pour la colonne dernier CA
         * @param client
         */
        public getTexteCA(client: Modeles.Application.IClient): string {
            let texte: string = Services.Utils.DataUtils.getTexteCA(client, Enum.Indicateur.CODE.CA_N_MOINS_1.toString());
            this.afficherDate = (texte === Constantes.Application.CHAINE_INDICATEUR_NON_CONNU) ? false : true;
            return texte;
        }

        public getTexteDate(client: Modeles.Application.IClient): string {
            let texte: string = Services.Utils.DataUtils.getTexteDate(client, Enum.Indicateur.CODE.CA_N_MOINS_1.toString());
            return texte;
        }
    }

    app.controller("ColonneDataCAN1Controleur", ColonneDataCAN1Controleur);
} 