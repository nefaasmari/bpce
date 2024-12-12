module Portefeuille.Modeles.Application {
    "use strict";

    export interface IContexte {
        identifiantUser: string;
        codeEtablissement: string;
        designation: string;
        edsUser: number;
        edsVisu: number;
        estVueMultiSuiviPar: boolean;
        edsSuperieurUser: number;
    }
} 