/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de choix EDS
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer le choix EDS
     */
    export class ExportService {
        public static CLASS_NAME = "ExportService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ExportService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            "MwNotificationService"
        ];

        constructor(
            private serviceAgent: MyWay.Services.ServiceAgentExtended,
            private mwNotificationService: MyWay.UI.IMwNotificationService) {
        }

        /**
         * Export du tableau affiché dans un fichier CSV
         * @param tableauExport Le tableau à exporter
         * @param nomFichier Le nom du fichier d'export (la date sera ajoutée à la fin du nom indiqué)
         */
        private exporterCSV(tableauExport: MyWay.Services.Export.IDonneesAExporter, nomFichier: string): ng.IPromise<void> {
            let optionSup: MyWay.Services.Export.IOptionsExportFichier = {
                nomFichier: nomFichier
            };

            /** Création du fichier .csv (format Excel) */
            return <ng.IPromise<void>>this.serviceAgent.Export.exporterFichier(
                tableauExport, MyWay.Services.Export.FORMAT_FICHIER.CSV, optionSup).then(() => {
                this.mwNotificationService.showNotification("Export du tableau réussi");
            });
        }

        /**
         * Formatage CSV
         * @param pContenu
         */
        private chargerDonneesTableau(pContenu: Array<Array<string | number> | Object>): Array<MyWay.Services.Export.ILigne> {
            let ligneDonnees: Array<MyWay.Services.Export.ILigne> = [];
            _.forEach(pContenu, (ligneTableauJson: Array<string | number> | Object) => {
                let maLigne: MyWay.Services.Export.ILigne = { ligne: [] };
                for (let i in ligneTableauJson) {
                    let cell: MyWay.Services.Export.ICellule = <MyWay.Services.Export.ICellule>{};
                    cell.cellule = ligneTableauJson[i];
                    maLigne.ligne.push(cell);
                }
                ligneDonnees.push(maLigne);
            });
            return ligneDonnees;
        }

        /**
         * 
         * @param listeEntetes
         * @param donneesExport
         * @param fichierExport
         */
        public genererFichierExport(
            listeEntetes: Array<string>,
            donneesExport: Array<Array<string | number> | Object>,
            fichierExport: string): ng.IPromise<void> {
            let tableauExport: MyWay.Services.Export.IDonneesAExporter;
            tableauExport = {
                entetes: listeEntetes,
                contenu: this.chargerDonneesTableau(donneesExport)
            };
            return this.exporterCSV(tableauExport, fichierExport);
        }
    }
    app.service(ExportService.CLASS_NAME, ExportService);
}