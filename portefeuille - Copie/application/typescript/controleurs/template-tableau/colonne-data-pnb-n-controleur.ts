/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";

    export class ColonnePnbAnneeNControleur {
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Services.eventService
        ];

        public tendance: number;

        constructor() {
        }

        public getMontant(client: Modeles.Application.IClient): string {
            let texte: string = "";
            let indic: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.PNB_N });
            if (indic) {
                if (indic.valeurNumber !== undefined && indic.valeurNumber != null && indic.valeurNumber !== Number.POSITIVE_INFINITY && indic.valeurNumber !== Number.NEGATIVE_INFINITY) {
                    texte = indic.valeurNumber.toString();
                }
            }
            return texte;
        }

        public getTendance(client: Modeles.Application.IClient): number {
            let indic: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.PNB_N });
            return indic.tendance;
        }
    }

    app.controller("ColonnePnbAnneeNControleur", ColonnePnbAnneeNControleur);
} 