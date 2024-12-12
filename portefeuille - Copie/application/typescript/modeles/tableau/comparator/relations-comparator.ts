"use strict";
module Portefeuille.Modeles.Tableaux.Comparator {

    export class RelationComparator implements MyWay.UI.IMwTableComparator {

        constructor(private $filter: ng.IFilterService, private $parse: ng.IParseService) {
        }

        public comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean {
            let relationTest: Modeles.Application.IRelationEconomique = <Modeles.Application.IRelationEconomique>item;
            if (relationTest) {
                // on construit une chaine de caracteres afin de retranscrire ce qui est présent dans la colonne
                let texteCompare: string = "";
                texteCompare += relationTest.nom;
                texteCompare += relationTest.id;
                texteCompare += relationTest.relationEconomique;
                return (texteCompare.toString().toLowerCase().indexOf(criterion.toLowerCase()) !== -1);
            } else {
                return false;
            }
        }

    }

}