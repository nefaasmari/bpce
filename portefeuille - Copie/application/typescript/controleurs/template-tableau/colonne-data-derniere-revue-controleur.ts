/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     *
     */
    export class ColonneDataDerniereRevueControleur {
        public static CLASS_NAME = "ColonneDataDerniereRevueControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ColonneDataDerniereRevueControleur.CLASS_NAME);
        // la periode limite est positionné à 1 an
        public static dateLimite: Date = moment(new Date()).subtract(1, "year").toDate();
        public static $inject: string[] = [];

        constructor(
        ) {
        }

        /**
         * Restitue l'indicateur "dernière revue"
         * @param client
         */
        private recupererDerniereRevue(client: Modeles.Application.IClient): Modeles.Application.IIndicateur {
            let indicateur: Modeles.Application.IIndicateur;
            // Recherche l'indicateur  date de dernière revue
            indicateur = _.find(client.listeIndicateurs, (indicateur: Modeles.Application.IIndicateur) => {
                return indicateur &&
                    indicateur.code === Enum.Indicateur.CODE.REV_DATE_DERNIERE_REVUE.toString();
            });
            return indicateur;
        }

        /**
         * Valorise la date de dernière revue
         * @param client
         */
        public valoriserDateRevue(client: Modeles.Application.IClient): string {
            let indicateur: Modeles.Application.IIndicateur;
            indicateur = this.recupererDerniereRevue(client);
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
         * @param client
         */
        public ancienneRevue(client: Modeles.Application.IClient): boolean {
            let indicateur: Modeles.Application.IIndicateur;
            indicateur = this.recupererDerniereRevue(client);
            return indicateur &&
                indicateur.valeurDate &&
                moment(indicateur.valeurDate).isValid() &&
                !moment(indicateur.valeurDate).isSame(Constantes.Application.DATE_MIN) &&
                !moment(indicateur.valeurDate).isSame(Constantes.Application.DATE_MAX) &&
                moment(indicateur.valeurDate).isBefore(ColonneDataDerniereRevueControleur.dateLimite);
        }
    }

    app.controller(ColonneDataDerniereRevueControleur.CLASS_NAME, ColonneDataDerniereRevueControleur);
} 