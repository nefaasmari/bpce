/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export class ColonneStatutControleur {
        public static CLASS_NAME = "ColonneStatutControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ColonneStatutControleur.CLASS_NAME);

        private indicateurProspect: string;
        private indicateurActif: string;
        private indicateurInactif: string;

        public static $inject: string[] = [
            
        ];

        constructor(
            
        ) {
            this.indicateurActif = Constantes.Application.CHAINE_INDICATEUR_ACTIF;
            this.indicateurInactif = Constantes.Application.CHAINE_INDICATEUR_INACTIF;
            this.indicateurProspect = Constantes.Application.CHAINE_INDICATEUR_PROSPECT;
        }

        /**
         * Méthode qui renvoie true si l'indicateur codeTypePersonne = 'prospect'
         * @param client
         */
        public isProspect(client: Modeles.Application.IClient): boolean {
            return (client.estClient !== undefined && !client.estClient);
        }

        /**
         * Méthode qui renvoie true si l'indicateur ActifInactif = 'Actif'
         * @param client
         */
        public isActif(client: Modeles.Application.IClient): boolean {
            return (client.estActifRenseigne && client.estActif);
        }

        /**
         * Méthode qui renvoie true si l'indicateur ActifInactif = 'Inactif'
         * @param client
         */
        public isInactif(client: Modeles.Application.IClient): boolean {
            return (client.estActifRenseigne && !client.estActif);
        }

    }

    app.controller(ColonneStatutControleur.CLASS_NAME, ColonneStatutControleur);
} 