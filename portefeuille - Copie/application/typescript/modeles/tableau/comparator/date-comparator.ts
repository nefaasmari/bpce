"use strict";
module Portefeuille.Modeles.Tableaux.Comparator {

    export class DateComparator implements MyWay.UI.IMwTableComparator {

        constructor(private $filter: ng.IFilterService, private $parse: ng.IParseService) {
        }

        public comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean {
            var getter = this.$parse(columnDescriptor.bind);
            var value = getter(item);
            if (!angular.isDate(value)) {
                return false;
            }
            var valueFormated = this.$filter("date")(value, "dd/MM/yyyy");
            return (valueFormated.toString().toLowerCase().indexOf(criterion) !== -1);
        }
    }
}