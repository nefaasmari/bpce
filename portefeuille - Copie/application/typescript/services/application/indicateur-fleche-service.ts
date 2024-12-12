/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de gestion de l'indicateur fleche
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer l'indicateur Fleche
     */
    class IndicateurFlecheService implements IIndicateurFlecheService {
        public static CLASS_NAME = "IndicateurFlecheService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(IndicateurFlecheService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [];

        // Variables utiles

        /**
         * Constructeur
         */
        constructor() { }

        /**
         * Retourne la config utile à la dierctive indicateur fleche en fonction de la valeur transmise en paramètre
         * @param valeur
         */
        public getConfigIndicateurFleche(valeur: number): Portefeuille.Modeles.Application.IConfigIndicateurFleche {
            let configResultat: Portefeuille.Modeles.Application.IConfigIndicateurFleche = <Portefeuille.Modeles.Application.IConfigIndicateurFleche>{};

            if (valeur > 0) {
                configResultat.valeurFormate = "+" + valeur.toLocaleString() + "%";
                configResultat.couleur = Portefeuille.Controleurs.COULEUR_INDICATEUR_FLECHE.VERT.toString();
                configResultat.icone = Portefeuille.Controleurs.ICONE_INDICATEUR_FLECHE.HAUT.toString();

                return configResultat;
            }

            if (valeur < 0) {
                configResultat.valeurFormate = valeur.toLocaleString() + "%";
                configResultat.couleur = Portefeuille.Controleurs.COULEUR_INDICATEUR_FLECHE.ROUGE.toString();
                configResultat.icone = Portefeuille.Controleurs.ICONE_INDICATEUR_FLECHE.BAS.toString();

                return configResultat;
            }

            configResultat.valeurFormate = "0%";
            configResultat.couleur = Portefeuille.Controleurs.COULEUR_INDICATEUR_FLECHE.ORANGE.toString();
            configResultat.icone = Portefeuille.Controleurs.ICONE_INDICATEUR_FLECHE.DROITE.toString();

            return configResultat;
        }
    }

    /**
     * Interface de la classe IndicateurFlecheService
     */
    export interface IIndicateurFlecheService {
        getConfigIndicateurFleche(valeur: number): Portefeuille.Modeles.Application.IConfigIndicateurFleche;
    }

    // Déclaration du service
    app.service("IndicateurFlecheService", IndicateurFlecheService);
}  