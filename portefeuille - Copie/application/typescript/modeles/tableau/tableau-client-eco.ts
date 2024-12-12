module Portefeuille.Modeles.Tableaux {
    export class TableauClientEco implements MyWay.UI.ImwTableOptions {

        public tableauColonneDataClient: MyWay.UI.ImwTableColumnOptions = {
            title: "Client",
            bind: "nom",
            cssClass: "col-md-2 col-lg-2",
            disableFilter: false,
            template: "vues/templates-tableau/colonne-tableau-data-client.html"
        };

        public width: string = "col-md-12 col-lg-12";
        //public orderBy = "nom";
        public orderBy = "";
        public reserve = false;
        public perPage = 20;
        public multiSelect = false;
        public filterEnable = true;
        public sortEnable = true;
        public moreEnable = false;
        public caption = "Liste des clients";
        public theadSticky = "mw-zone-travail";
        public readOnly = false;
        public templateUrl: string = "";
        public data: Modeles.Application.IClient[] = [];
        public selectedItems: Modeles.Application.IClient[] = [];
        public disabledItems: Modeles.Application.IClient[] = [];
        public columns: MyWay.UI.ImwTableColumnOptions[] = [this.tableauColonneDataClient];
        public selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;

        constructor(handler: MyWay.UI.ISelectionChangeHandler, $filter: ng.IFilterService, $parse: ng.IParseService,
            data: Modeles.Application.IClient[]) {
            this.selectionChangeHandler = handler;
            this.tableauColonneDataClient.comparator = new Comparator.ClientComparator($filter, $parse);
            this.initialiser(data);
        }

        private initialiser(data: Modeles.Application.IClient[]): void {
            if (!_.isEmpty(data)) {
                let indicateurs = data[0].listeIndicateurs;
                if (!_.isEmpty(indicateurs)) {
                    let listeColonnes = indicateurs.map((indic: Application.IIndicateur, index: number) => {
                        let colonne: MyWay.UI.ImwTableColumnOptions;
                        if (indic.valeurNumber) {
                            colonne = {
                                title: indic.intitule,
                                bind: "listeIndicateurs[" + index + "].valeurNumber",
                                cssClass: "col-md-2 col-lg-2",
                                disableFilter: true
                            };
                        } else {
                            colonne = {
                                title: indic.intitule,
                                bind: "listeIndicateurs[" + index + "].valeur",
                                cssClass: "col-md-2 col-lg-2",
                                disableFilter: true
                            };
                        }
                        switch (indic.typeIndicateur) {
                            case Enum.Indicateur.TYPE.DATE:
                                colonne.filter = " | date: 'dd/MM/yyyy'";
                                break;
                            case Enum.Indicateur.TYPE.MONTANT:
                                colonne.filter = " | currency";
                                break;
                            default:
                                break;
                        }
                        return colonne;
                    });
                    this.columns = this.columns.concat(listeColonnes);
                }
            }
            this.data = data;
        }
    }
}   