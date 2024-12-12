module Portefeuille.Modeles.Tableaux {
    export class TableauClient implements MyWay.UI.ImwTableOptions {

        public tableauColonneDataClient: MyWay.UI.ImwTableColumnOptions = {
            title: "Clients / Prospects",
            bind: "nom",
            cssClass: "col-md-2 colonne-clients",
            disableFilter: false,
            template: "vues/templates-tableau/colonne-tableau-data-client.html"
        };

        public tableauColonneDataNbPersonnes: MyWay.UI.ImwTableColumnOptions = {
            title: "Nb personnes / relation",
            bind: "nbPersonneRelation",
            cssClass: "col-md-2 text-align-right",
            disableFilter: true
        };


        public width: string = "col-md-12 col-lg-12";
        public reserve = false;
        public perPage = Constantes.Application.NB_LIGNE_TABLEAU;
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
        public columns: MyWay.UI.ImwTableColumnOptions[] = [this.tableauColonneDataClient, this.tableauColonneDataNbPersonnes];
        public selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        public tableHandler: MyWay.UI.IMwTableHandler;
        public choixIndicateurs: Array<Modeles.Application.IIndicateurChoix>;
        public hasNoneElements = Constantes.Tableau.TAB_NO_ELEMENT_CLIENT;

        constructor(handler: MyWay.UI.ISelectionChangeHandler,
            handlerTable: MyWay.UI.IMwTableHandler,
            $filter: ng.IFilterService,
            $parse: ng.IParseService,
            data: Modeles.Application.IClient[],
            choixIndicateurs: Array<Modeles.Application.IIndicateurChoix>,
            voirNbPersonne: boolean) {
            if (voirNbPersonne === true) {
                this.columns = [this.tableauColonneDataClient, this.tableauColonneDataNbPersonnes];
            } else {
                this.columns = [this.tableauColonneDataClient];
            }

            this.selectionChangeHandler = handler;
            this.tableHandler = handlerTable;
            this.tableauColonneDataClient.comparator = new Comparator.ClientComparator($filter, $parse);
            this.choixIndicateurs = choixIndicateurs;
            this.initEtatFiltre(<any> handler);
            this.initialiser(data, $filter, $parse);
        }

        /**
         * 
         * @param data
         * @param $filter
         * @param $parse
         */
        private initialiser(data: Modeles.Application.IClient[], $filter: ng.IFilterService, $parse: ng.IParseService): void {
            if (!_.isEmpty(data)) {
                if (!_.isEmpty(this.choixIndicateurs)) {
                    let listeColonnes = [];
                    _.forEach(this.choixIndicateurs, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {

                        // v2 @nwo : certains cas peuvent avoir le premier client avec un indicateur manquant mais les autres OK, 
                        // donc on va tester sur tous les clients disponibles si jamais le 1er n'était pas entier
                        let indexIndicateur = -1;
                        _.find(data, (personne: Modeles.Application.IClient) => {
                            return indexIndicateur = _.findIndex(personne.listeIndicateurs, (indicateurData: Modeles.Application.IIndicateur) => {
                                return indicateurData.code === indicateurChoix.indicateur.code;
                            });
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
                            
                            // gère le filter
                            colonne.filter = "";
                            let isEuros: boolean = false;
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.PNB_3112.toString()
                                || indicateurChoix.indicateur.code === Enum.Indicateur.CODE.PNB_N.toString()
                                || indicateurChoix.indicateur.code === Enum.Indicateur.CODE.PNB_N_MOINS_1.toString()) {
                                isEuros = true;
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
                            // Gestion colonne CA
                            if (indicateurChoix.indicateur.famille === Enum.Indicateur.FAMILLE.CA) {
                                if (indicateurChoix.indicateur.codeRest === Enum.Indicateur.CODEREST.CA_N.toString()) {
                                    colonne.template = "vues/templates-tableau/colonne-tableau-data-ca-n.html";
                                }
                                if (indicateurChoix.indicateur.codeRest === Enum.Indicateur.CODEREST.CA_N_MOINS_1.toString()) {
                                    colonne.template = "vues/templates-tableau/colonne-tableau-data-ca-n-1.html";
                                }
                            }
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.PNB_N.toString()) {
                                colonne.template = "vues/templates-tableau/colonne-tableau-pnb-n.html";
                            }
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.FLUX_CREDITEURS_N.toString()) {
                                colonne.template = "vues/templates-tableau/colonne-tableau-flux-crediteur.html";
                            }
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.FLUX_DEBITEURS_N.toString()) {
                                colonne.template = "vues/templates-tableau/colonne-tableau-flux-debiteur.html";
                            }
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.POTENTIEL_PROSPECT.toString()) {
                                colonne.template = "vues/templates-tableau/colonne-potentiel-prospect.html";
                            }
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.REV_DATE_DERNIERE_REVUE.toString()) {
                                colonne.template = "vues/templates-tableau/colonne-date-derniere-revue.html";
                            }
                            if (indicateurChoix.indicateur.code === Enum.Indicateur.CODE.TOP_CC.toString()) {
                                // pour Top CC : Trié par valeurNumber (Chaque pastille est associée à une valeur numérique pour pouvoir trier dans l'ordre : 1 = "Vert", 2="Orange")
                                colonne.bind = "listeIndicateurs[" + indexIndicateur + "].valeurNumber";
                                colonne.template = "vues/templates-tableau/colonne-tableau-top-cc.html";
                            }

                            colonne.filter += " | valeurNonConnuFiltre";

                            // NOUVEL INDICATEUR, titre pour score
                            let codeRest: string = indicateurChoix.indicateur.codeRest;
                            if (codeRest === Enum.Indicateur.CODEREST.SCORE_ACTIVATION.toString() ||
                                codeRest === Enum.Indicateur.CODEREST.SCORE_APPETENCE.toString()) {
                                colonne.title = colonne.title + " (/100)";
                            }
                            if (codeRest === Enum.Indicateur.CODEREST.SCORE_DEFAILLANCE.toString()) {
                                colonne.title = colonne.title + " (/20)";
                            }

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
                if (document.querySelector(Constantes.Application.CLASSE_COLONNE_CLIENTS)) {
                    // Récupération de l'élément bouton filtre clients
                    let boutonFiltreClients = angular.element(document.querySelector(Constantes.Application.CLASSE_COLONNE_CLIENTS).querySelector(Constantes.Application.CLASSE_BTN_FILTRE));
                    // Initialisation
                    clientsControleur.estAvecFiltreColonne = boutonFiltreClients.hasClass(Constantes.Application.CLASSE_ACTIF);

                    // Evenement de clique sur le bouton
                    boutonFiltreClients.on("click", () => {
                        clientsControleur.estAvecFiltreColonne = boutonFiltreClients.hasClass(Constantes.Application.CLASSE_ACTIF);
                    });
                }
            });
        }
    }
}   