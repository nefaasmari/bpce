"use strict";
module Portefeuille.Modeles.Tableaux.Comparator {

    export class ClientComparator implements MyWay.UI.IMwTableComparator {

        constructor(private $filter: ng.IFilterService, private $parse: ng.IParseService) {
        }

        public comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean {
            let client: Modeles.Application.IClient = <Modeles.Application.IClient>item;
            if (client) {
                // on construit une chaine de caracteres afin de retranscrire ce qui est présent dans la colonne
                let texteCompare: string = "";
                texteCompare += client.nom;
                //texteCompare += clientTest.nomRelationEconomique; // Inutile, le filtre existe déja au travers d'une liste box
                //if (client.estClient != undefined && !client.estClient) {
                //    texteCompare += Constantes.Application.CHAINE_INDICATEUR_PROSPECT;
                //}
                //if (client.estActifRenseigne && client.estActif) {
                //    texteCompare += Constantes.Application.CHAINE_INDICATEUR_ACTIF;
                //}
                //if (client.estActifRenseigne && !client.estActif) {
                //    texteCompare += Constantes.Application.CHAINE_INDICATEUR_INACTIF;
                //}
                return (texteCompare.toString().toLowerCase().indexOf(criterion.toLowerCase()) !== -1);
            } else {
                return false;
            }
        }
    }
}