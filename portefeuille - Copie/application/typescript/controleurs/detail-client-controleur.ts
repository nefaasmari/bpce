/// <reference path="../constantes/inject-constantes.ts" />

/**
 * Controleur de la page détail client
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Controleur de l'index
     */
    export class DetailClientControleur {
        public static CLASS_NAME = "DetailClientControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(DetailClientControleur.CLASS_NAME);

        // Proprietées

        // Injection de dépendances 
        public static $inject: string[] = [];

        /**
         * Constructeur
         */
        constructor() {}
    }

    // Déclaration du controleur
    app.controller("DetailClientControleur", DetailClientControleur);
}