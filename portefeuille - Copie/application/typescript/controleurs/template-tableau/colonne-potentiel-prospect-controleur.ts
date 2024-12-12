/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export class ColonnePotentielProspectControleur {
        public static CLASS_NAME = "ColonnePotentielProspectControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ColonnePotentielProspectControleur.CLASS_NAME);

        public static $inject: string[] = [];

        constructor(
        ) {
        }

        /**
         * Valorise la note du potentiel prospect
         * Paquet mep 27/03
         * @param client
         */
        public valoriserPotentielProspect(client: Modeles.Application.IClient): string {
            let indicateur: Modeles.Application.IIndicateur;
            // Recherche l'indicateur  potentiel prospect contenant une note
            indicateur = _.find(client.listeIndicateurs, (indicateur: Modeles.Application.IIndicateur) => {
                return indicateur &&
                    indicateur.code === Enum.Indicateur.CODE.POTENTIEL_PROSPECT.toString() &&
                    ~Constantes.Tableau.VALEUR_POSSIBLE_POTENTIEL_PROSPECT.indexOf(indicateur.valeur);
            });

            // Renvoi la note si elle est présente, sinon renvoi non connu
            return indicateur ? indicateur.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
        }
    }

    app.controller(ColonnePotentielProspectControleur.CLASS_NAME, ColonnePotentielProspectControleur);
} 