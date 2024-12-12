/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     *
     */
    export class ColonneDataDerniereRevueRelControleur {
        public static CLASS_NAME = "ColonneDataDerniereRevueRelControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ColonneDataDerniereRevueRelControleur.CLASS_NAME);
        // la periode limite est positionné à 1 an
        public static dateLimite: Date = moment(new Date()).subtract(1, "year").toDate();
        public static $inject: string[] = [];

        constructor(
        ) {
        }

        /**
         * Restitue l'indicateur "dernière revue"
         * @param relation
         */
        private recupererDerniereRevue(relation: Modeles.Application.IRelationEconomique): Modeles.Application.IIndicateur {
            let indicateur: Modeles.Application.IIndicateur;
            // Recherche l'indicateur  date de dernière revue
            indicateur = _.find(relation.listeIndicateurs, (indicateur: Modeles.Application.IIndicateur) => {
                return indicateur &&
                    indicateur.code === Enum.Indicateur.CODEREL.REV_DATE_DERNIERE_REVUE.toString();
            });
            return indicateur;
        }

        /**
         * Valorise la date de dernière revue
         * @param relation
         */
        public valoriserDateRevue(relation: Modeles.Application.IRelationEconomique): string {
            let indicateur: Modeles.Application.IIndicateur;
            indicateur = this.recupererDerniereRevue(relation);
            // Renvoi la date de dernière revue si elle est présente, sinon renvoi non connu
            return indicateur &&
                indicateur.valeurDate &&
                moment(indicateur.valeurDate).isValid() &&
                !moment(indicateur.valeurDate).isSame(Constantes.Application.DATE_MIN) &&
                !moment(indicateur.valeurDate).isSame(Constantes.Application.DATE_MAX)
                ? moment(indicateur.valeurDate).format("DD/MM/YYYY") :
                Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
        }

        /**
         * Indique si le client à une revue ancienne
         * @param relation
         */
        public ancienneRevue(relation: Modeles.Application.IRelationEconomique): boolean {
            let indicateur: Modeles.Application.IIndicateur;
            indicateur = this.recupererDerniereRevue(relation);
            return indicateur &&
                indicateur.valeurDate &&
                moment(indicateur.valeurDate).isValid() &&
                !moment(indicateur.valeurDate).isSame(Constantes.Application.DATE_MIN) &&
                !moment(indicateur.valeurDate).isSame(Constantes.Application.DATE_MAX) &&
                moment(indicateur.valeurDate).isBefore(ColonneDataDerniereRevueControleur.dateLimite);
        }
    }

    app.controller(ColonneDataDerniereRevueRelControleur.CLASS_NAME, ColonneDataDerniereRevueRelControleur);
} 