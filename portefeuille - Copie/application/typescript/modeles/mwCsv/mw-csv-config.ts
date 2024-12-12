// Code récupéré depuis Connaissance Client / Ancienne version des liens
module Portefeuille.Services.Application {
    "use strict";

    /**
     * Configuration du fichier CSV (utilisé par le service mwCsvService).
     */
    export interface ICsvOptions {
        /**
         * Use this characters to "escape" fields, otherwise will use double quotes as deafult
         */
        txtDelimiter?: string;
        /**
         * Defines the decimal separator character (default is ,). If set to "locale", it uses the language sensitive representation of the number.
         */
        decimalSeparator?: string;
        /**
         * Will force escaping of every string field. (it should always true)
         */
        quoteStrings?: boolean;
        /**
         * Add the Byte Order Mark, use this option if you are getting an unexpected char when opening the file on any windows App (default is true).
         */
        addByteOrderMarker?: boolean;
        /**
         * Defines the field separator character (default is ;)
         */
        fieldSeparator?: any;
        /**
         * charset encoding
         */
        charset?: string;
        /**
         * output filename (default is export.csv)
         */
        filename?: string;
        /**
         * Defines whether or not using keys as csv column value (default is false).
         */
        label?: boolean;
        /**
         * If provided, would use this attribute to create a header row. This property should be used along with columnOrder because natural order can eventually change.
         */
        header?: string[];
        /**
         * Defines the column order to be set when creating the body of the CSV (may be according to the csv-headers).
         * It can also be used to filter properties in csv.
         */
        columnOrder?: any;
    }

    // uncomment if necessary (doesn't seem to be right now)
    //app.config(["$compileProvider", function ($compileProvider : ng.ICompileProvider) {
    //    // add data prefix to ahref white list
    //    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|data):/);
    //}]);

} 