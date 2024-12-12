/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export class ColonneTopCCControleur {
        public static CLASS_NAME = "ColonneTopCCControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ColonneTopCCControleur.CLASS_NAME);

        public static $inject: string[] = [];

        constructor(
        ) {

        }

        /**
         * Valorise la couleur Top CC
         * 24/01/2022
         * @param client
         */
        public valoriserTopCC(client: Modeles.Application.IClient): string {
            let indicateur: Modeles.Application.IIndicateur;
            // Recherche le Top CC
            indicateur = _.find(client.listeIndicateurs, (indicateur: Modeles.Application.IIndicateur) => {
                return indicateur &&
                    indicateur.code === Enum.Indicateur.CODE.TOP_CC.toString() &&
                    ~Constantes.Tableau.VALEUR_POSSIBLE_TOP_CC.indexOf(indicateur.valeur);
            });

            // Renvoi la valeur si elle est présente, sinon renvoi blanc
            return indicateur ? indicateur.valeur : Constantes.Tableau.VALEUR_POSSIBLE_TOP_CC[3];
        }

    }

    app.controller(ColonneTopCCControleur.CLASS_NAME, ColonneTopCCControleur);
} 