// Code récupéré depuis Connaissance Client / Ancienne version des liens
module Portefeuille.Services.Application {
    "use strict";

    /**
     * Service de génération d'un fichier CSV à partir d'un tableau
     */
    export class CsvService {
        static EOL = "\r\n";
        static BOM = "\ufeff";
        static SPECIAL_CHARS = {
            "\\t": "\t",
            "\\b": "\b",
            "\\v": "\v",
            "\\f": "\f",
            "\\r": "\r"
        };
        static DEFAULT_OPTIONS: ICsvOptions = {
            txtDelimiter: "\"",
            decimalSeparator: ",",
            quoteStrings: true,
            addByteOrderMarker: true,
            fieldSeparator: ";",
            charset: "utf-8",
            label: false,
            filename: "export.csv"
        };

        static $inject: string[] = [
            "$q",
            "$parse",
            "$window",
            "$document",
            "$timeout"
        ];

        constructor(private $q: ng.IQService,
            private $parse: ng.IParseService,
            private $window: ng.IWindowService,
            private $document: ng.IDocumentService,
            private $timeout: ng.ITimeoutService) {
        }

        /**
         * @ngdoc method
         * @name myway.tools.service:mwsfAdresseService#downloadCsv
         * @methodOf myway.tools.service:mwCsvService
         * @param {any[]} data Tableau de données
         * @param {Myway.Tools.ICsvOptions} options Configuration du fichier csv
         * @description
         * Création et téléchargement d'un fichier csv à partir du tableau passé en paramètre.
         * Le tableau doit être un objet simple sans sous-objets puisque ces derniers ne sont pas gérés.
         * Les options sont toutes détaillées dans l'interface dédiée.
         * 
         * #Configuration
         * La configuration fonctionne par surcharge, il faut donc indiquer ce qui diffère de la configuration par défaut.
         * <pre class="prettyprint">
         *   header: [ "Nom", "Prénom", "Age" ],
         *   columnOrder: ["nom", "prenom", "age" ],
         *   filename: "personnes.csv"
         * </pre>
         * 
         * ##Configuration par défaut du fichier csv:
         * <pre class="prettyprint">
         *   txtDelimiter: "\"",
         *   decimalSeparator: ",",
         *   quoteStrings: true,
         *   addByteOrderMarker: true,
         *   fieldSeparator: ";",
         *   charset: "utf-8",
         *   label: false,
         *   filename: "export.csv"
         * </pre>
         * @returns {Promise<any>} Promesse résolue lorsque le téléchargement est lancé ou rejetée en cas d'erreur.
         */
        public downloadCsv(header?: any[], data?: any[], options?: ICsvOptions): ng.IPromise<any> {
            var deferred = this.$q.defer<any>();
            options = this.getOptions(options);
            var csv = this.stringify(header, data, options);
            var blob = new Blob([csv], {
                type: "text/csv;charset=" + options.charset + ";"
            });
            if (window.navigator.msSaveOrOpenBlob) { // IE
                if (navigator.msSaveBlob(blob, options.filename)) {
                    deferred.resolve(null);
                } else {
                    deferred.reject(null);
                }
            } else { // other browsers
                var objectURL = this.$window["URL"].createObjectURL(blob);
                var downloadLink = angular.element("<a></a>");
                downloadLink.attr("href", objectURL);
                downloadLink.attr("download", options.filename);
                downloadLink.attr("target", "_blank");
                this.$document.find("body").append(downloadLink);
                this.$timeout(() => {
                    downloadLink[0].click();
                    downloadLink.remove();
                    this.$window["URL"].revokeObjectURL(objectURL);
                    deferred.resolve(null);
                });
            }
            return deferred.promise;
        }

        /**
         * Get options
         */
        private getOptions(options?: ICsvOptions): ICsvOptions {
            var result: ICsvOptions = angular.extend({}, CsvService.DEFAULT_OPTIONS, options || {});
            // Replaces any badly formatted special character string with correct special character
            if (this.isSpecialChar(result.fieldSeparator)) {
                result.fieldSeparator = this.getSpecialChar(result.fieldSeparator);
            }
            return result;
        }

        /**
         * Creates a csv from a data array
         */
        private stringify(header: any[], data: any[], options?: ICsvOptions): string {
            var lines: string[] = [];

            // Create the header of the file if it is provided
            if (header) {
                angular.forEach(header, (row: any, index: number) => {
                    var infoArray: string[] = [];
                    for (var i = 0; i < row.length; i++) {
                        infoArray.push(this.stringifyField(row[i], options));
                    }
                    lines.push(infoArray.join(options.fieldSeparator));
                });
            }

            if (options.header) { // Check if there's a provided header array
                var encodingArray: string[] = [];
                angular.forEach(options.header, (title: string) => {
                    encodingArray.push(this.stringifyField(title, options));
                });
                lines.push(encodingArray.join(options.fieldSeparator));
            } else if (options.label && data && data.length) { // Check if using keys as labels
                var labelArray: string[] = [];
                var iterator = options.columnOrder || data[0];
                angular.forEach(iterator, (value: string, label: string) => {
                    var val = options.columnOrder ? value : label;
                    labelArray.push(this.stringifyField(val, options));
                });
                lines.push(labelArray.join(options.fieldSeparator));
            }

            angular.forEach(data, (row: any, index: number) => {
                var infoArray: string[] = [];
                var iterator = options.columnOrder || row;
                angular.forEach(iterator, (field: any) => {
                    var val = options.columnOrder ? row[field] : field;
                    infoArray.push(this.stringifyField(val, options));
                });
                lines.push(infoArray.join(options.fieldSeparator));
            });

            var csv = lines.join(CsvService.EOL);

            // Add BOM if needed
            if (options.addByteOrderMarker) {
                csv = CsvService.BOM + csv;
            }

            return csv;
        }

        /**
         * Helper function to check if input is really a special character
         */
        public isSpecialChar(input: string): boolean {
            return CsvService.SPECIAL_CHARS[input] !== undefined;
        }

        /**
         * Helper function to get what the special character was supposed to be since Angular escapes the first backslash
         */
        public getSpecialChar(input: string): string {
            return CsvService.SPECIAL_CHARS[input];
        }

        /**
         * Stringify one field
         */
        private stringifyField(data: any, options: ICsvOptions) {
            var result: any = data;
            if (this.isFloat(data)) {
                if (options.decimalSeparator === "locale") {
                    result = data.toLocaleString();
                } else if (options.decimalSeparator !== ".") {
                    result = data.toString().replace(".", options.decimalSeparator);
                }
            } else if (typeof data === "string") {
                result = data.replace(/"/g, "\"\""); // Escape double quotes
                if (options.quoteStrings || data.indexOf(options.fieldSeparator) !== -1 || data.indexOf("\n") !== -1 || data.indexOf("\r") !== -1) {
                    result = options.txtDelimiter + result + options.txtDelimiter;
                }
            } else if (typeof data === "boolean") {
                result = data ? "TRUE" : "FALSE";
            }
            return result;
        }

        /**
         * Helper function to check if input is float
         */
        private isFloat(input: any): boolean {
            return +input === input && (!isFinite(input) || Boolean(input % 1));
        }

    }

    /**
     * @ngdoc service
     * @name myway.tools.service:mwCsvService
     * @requires $q
     * @requires $parse
     * @requires $window
     * @requires $document
     * @requires $timeout
     * @description
     * Service de génération d'un fichier CSV à partir d'un tableau
     */
    app.service("mwCsvService", CsvService);
}
