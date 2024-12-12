module Portefeuille.Modeles.Tableaux {
    export class TableauRelation implements MyWay.UI.ImwTableOptions {

        public tableauColonneDataRelation: MyWay.UI.ImwTableColumnOptions = {
            title: "Relations",
            bind: "nom",
            cssClass: "col-md-2 col-lg-2 colonne-relations",
            disableFilter: false,
            template: "vues/templates-tableau/colonne-tableau-data-relation.html"
        };

        public tableauColonneDataNbClients: MyWay.UI.ImwTableColumnOptions = {
            title: "Nb clients / prospects",
            bind: "listeClients.length",
            cssClass: "col-md-1 col-lg-1 text-align-right",
            disableFilter: true
        };
        public width: string = "col-md-12 col-lg-12";
        public orderBy = "nom";
        public reserve = false;
        public perPage = Constantes.Application.NB_LIGNE_TABLEAU;
        public multiSelect = false;
        public filterEnable = true;
        public sortEnable = true;
        public moreEnable = false;
        public caption = "Liste des relations économiques";
        public theadSticky = "mw-zone-travail";
        public readOnly = false;
        public templateUrl: string = "";
        public data: Modeles.Application.IRelationEconomique[] = [];
        public selectedItems: Modeles.Application.IRelationEconomique[] = [];
        public disabledItems: Modeles.Application.IRelationEconomique[] = [];
        public columns: MyWay.UI.ImwTableColumnOptions[] = [this.tableauColonneDataRelation, this.tableauColonneDataNbClients];
        public selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        public tableHandler: MyWay.UI.IMwTableHandler;
        public choixIndicateurs: Array<Modeles.Application.IIndicateurChoix>;
        public hasNoneElements = Constantes.Tableau.TAB_NO_ELEMENT_RELATION;

        constructor(handler: MyWay.UI.ISelectionChangeHandler, handlerTable: MyWay.UI.IMwTableHandler, $filter: ng.IFilterService, $parse: ng.IParseService,
            data: Modeles.Application.IRelationEconomique[], choixIndicateurs: Array<Modeles.Application.IIndicateurChoix>) {
            this.selectionChangeHandler = handler;
            this.tableHandler = handlerTable;
            this.tableauColonneDataRelation.comparator = new Comparator.RelationComparator($filter, $parse);
            this.choixIndicateurs = choixIndicateurs;
            this.initEtatFiltre(<any>handler);
            this.initialiser(data);
        }

        private initialiser(data: Modeles.Application.IRelationEconomique[]): void {
            if (!_.isEmpty(data)) {
                if (!_.isEmpty(this.choixIndicateurs)) {
                    let listeColonnes = [];

                    _.forEach(this.choixIndicateurs, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {
                       
                        let indexIndicateur = _.findIndex(data[0].listeIndicateurs, (indicateurData: Modeles.Application.IIndicateur) => {
                            return indicateurData.code === indicateurChoix.indicateur.codeRel;
                        });

                        if (indexIndicateur !== -1 && indicateurChoix.indicateur.estVisibleColonne) {
                            let colonne: MyWay.UI.ImwTableColumnOptions;
                            if (indicateurChoix.indicateur.typeIndicateur === Enum.Indicateur.TYPE.MONTANT
                                || indicateurChoix.indicateur.typeIndicateur === Enum.Indicateur.TYPE.NOMBRE
                                || indicateurChoix.indicateur.typeIndicateur === Enum.Indicateur.TYPE.POURCENT) {
                                colonne = {
                                    title: indicateurChoix.indicateur.intitule,
                                    bind: "listeIndicateurs[" + indexIndicateur + "].valeurNumber",
                                    cssClass: "col-md-1",
                                    disableFilter: true
                                    //,template: "vues/templates-tableau/colonne-tableau-data-number.html"
                                };
                            } else if (indicateurChoix.indicateur.typeIndicateur === Enum.Indicateur.TYPE.DATE) {
                                colonne = {
                                    title: indicateurChoix.indicateur.intitule,
                                    bind: "listeIndicateurs[" + indexIndicateur + "].valeurDate",
                                    cssClass: "col-md-1",
                                    disableFilter: true
                                };
                            } else {
                                colonne = {
                                    title: indicateurChoix.indicateur.intitule,
                                    bind: "listeIndicateurs[" + indexIndicateur + "].valeur",
                                    cssClass: "col-md-1",
                                    disableFilter: true
                                };
                            }
                            colonne.filter = "";
                            let isEuros: boolean = false;
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.PNB_3112.toString()
                                || indicateurChoix.indicateur.code === Enum.Indicateur.CODE.PNB_N.toString()
                                || indicateurChoix.indicateur.code === Enum.Indicateur.CODE.PNB_N_MOINS_1.toString()) {
                                isEuros = true;
                            }
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.REV_DATE_DERNIERE_REVUE.toString()) {
                                colonne.template = "vues/templates-tableau/colonne-date-derniere-revue-rel.html";
                            }

                            switch (indicateurChoix.indicateur.typeIndicateur) {
                                case Enum.Indicateur.TYPE.DATE:
                                    colonne.filter = " | dateNC";
                                    break;
                                case Enum.Indicateur.TYPE.MONTANT:
                                    colonne.filter = ` | montantFiltre: ${isEuros}`;
                                    colonne.cssClass = `${colonne.cssClass} text-align-right`;
                                    break;
                                case Enum.Indicateur.TYPE.POURCENT:
                                    colonne.filter = " | pourcentFiltre";
                                    colonne.cssClass = `${colonne.cssClass} text-align-right`;
                                    break;

                                case Enum.Indicateur.TYPE.NOMBRE:
                                    colonne.filter = " | nombreNC";
                                    colonne.cssClass = `${colonne.cssClass} text-align-right`;
                                    break;
                                default:
                                    break;
                            }
                            colonne.filter += " | valeurNonConnuFiltre";
                            listeColonnes.push(colonne);
                        }

                    });

                    this.columns = this.columns.concat(listeColonnes);
                }
            }
            this.data = data;
        }

        private initEtatFiltre(clientsControleur: Portefeuille.Controleurs.ClientsControleur): void {
            angular.element(document.querySelector(Constantes.Application.CLASSE_COLONNE_RELATIONS)).ready(function () {
                if (document.querySelector(Constantes.Application.CLASSE_COLONNE_RELATIONS)) {
                    // Récupération de l'élément bouton filtre relations
                    let boutonFiltreRelations = angular.element(document.querySelector(Constantes.Application.CLASSE_COLONNE_RELATIONS).querySelector(Constantes.Application.CLASSE_BTN_FILTRE));

                    // Initialisation
                    clientsControleur.estAvecFiltreColonne = boutonFiltreRelations.hasClass(Constantes.Application.CLASSE_ACTIF);

                    // Evenement de clique sur le bouton
                    boutonFiltreRelations.on("click", () => {
                        clientsControleur.estAvecFiltreColonne = boutonFiltreRelations.hasClass(Constantes.Application.CLASSE_ACTIF);
                    });
                }
            });
        }
    }
}   