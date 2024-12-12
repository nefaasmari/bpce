/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";

    export class ColonneDataCANControleur {
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Services.eventService
        ];

        public afficherDate: boolean;
        public tendance: number;

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
            let texte: string = Services.Utils.DataUtils.getTexteCA(client, Enum.Indicateur.CODE.CA_N.toString());
            this.afficherDate = (texte === Constantes.Application.CHAINE_INDICATEUR_NON_CONNU) ? false : true;
            return texte;
        }

        public getTexteDate(client: Modeles.Application.IClient): string {
            let texte: string = Services.Utils.DataUtils.getTexteDate(client, Enum.Indicateur.CODE.CA_N.toString());
            return texte;
        }
        public getTendance(client: Modeles.Application.IClient): number {
            let indic: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.CA_N });
            return indic.tendance;
        }
    }

    app.controller("ColonneDataCANControleur", ColonneDataCANControleur);
} 