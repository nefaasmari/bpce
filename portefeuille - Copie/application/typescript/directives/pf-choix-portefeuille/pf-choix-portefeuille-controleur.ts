/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-choix-portefeuille
 * @module portefeuille.Controleurs
 * @author S00053555 (Eric ALBERT)
 */
module Portefeuille.Controleurs {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfChoixPortefeuilleControleur {
        public static CLASS_NAME = "PfChoixPortefeuilleControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfChoixPortefeuilleControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.portefeuilleService,
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.listeClientsService
        ];

        // Variables d'entrée
        public listePortefeuillesDropDown: Modeles.Application.IAgent[];
        public listePortefeuilles: Modeles.Application.IPortefeuille[];
        public ouvertureVoletChoixPortefeuille: boolean;
        public estVueGlobalConsolide: boolean;

        // Variables utiles
        public tousPortfeuillesSelectionnes: any;
        public finInit: boolean = false;
        public sauveListePortefeuille: Modeles.Application.IPortefeuille[];

        /**
         * Constructeur
         */
        constructor(
            private $location: ng.ILocationService,
            private contexteService: Services.Application.IContexteService,
            private portefeuilleService: Services.Application.IPortefeuilleService,
            private eventService: Services.Application.IEventService,
            private listeClientsService: Services.Application.IListeClientsService) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfChoixPortefeuilleControleur.logger.info(">>> Appel de la méthode : PfChoixPortefeuilleControleur.initialiser <<<");

            this.eventService.setChoixPortfeuilleControleur(this);
            this.listePortefeuilles = null;
            this.ouvertureVoletChoixPortefeuille = false;
            this.listePortefeuillesDropDown = null;
            this.tousPortfeuillesSelectionnes = this.aTousPortefeuillesCoches();
        }

        /**
         * Annuler le choix du portefeuille
         */
        public annulerChoixPortefeuille(): void {
            //recharge l'ancien portefeuille
            this.restaurerPoretefeuille();

            this.ouvertureVoletChoixPortefeuille = false;
            this.eventService.chargerListePortefeilleDropDown();
            this.finInit = true;
        }

        /**
         * 
         * @param indexAgent
         */
        private selectionnerListe(indexAgent?: number): Modeles.Application.IPortefeuille[] {
            return (indexAgent !== null &&
                indexAgent !== undefined) ?
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent :
                this.listePortefeuilles;
        }

        /**
         * 
         * @param indexAgent
         * @param estSuiviPar
         */
        public aPortefeuillesNonCoches(indexAgent?: number, estSuiviPar?: boolean): boolean {
            if (estSuiviPar === undefined) {
                return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                    item.estAffiche === false || item.estAffiche === undefined
                ).length > 0);
            } else if (estSuiviPar) {
                // return (_.where(this.selectionnerListe(indexAgent), { "estAffiche": false, "id": 0 }).length > 0);
                return (_.where(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                    item.id <= Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && !item.estAffiche
                ).length > 0);
            } else {
                //return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                //    item.id > 0 && !item.estAffiche
                //).length > 0);
                return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                    item.id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && !item.estAffiche
                ).length > 0);
            }
        }

        /**
         * 
         * @param indexAgent
         * @param estSuiviPar
         */
        public aPortefeuilleCoche(indexAgent?: number, estSuiviPar?: boolean): boolean {
            if (estSuiviPar === undefined) {
                return (_.where(this.selectionnerListe(indexAgent), { "estAffiche": true }).length > 0);
            } else if (estSuiviPar) {
                // return (_.where(this.selectionnerListe(indexAgent), { "estAffiche": true, "id": 0 }).length > 0);
                return (_.where(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                    item.id <= Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && item.estAffiche
                ).length > 0);
            } else {
                //return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                //    item.id > 0 && item.estAffiche
                //).length > 0);
                return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                    item.id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && item.estAffiche
                ).length > 0);
            }
        }

        /**
         * 
         * @param indexAgent
         * @param estSuiviPar
         */
        public aTousPortefeuillesCoches(indexAgent?: number, estSuiviPar?: boolean): boolean {
            if (estSuiviPar === undefined) {
                return (_.where(this.selectionnerListe(indexAgent), { "estAffiche": false }).length === 0);
            } else if (estSuiviPar) {
                //return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                //    item.id === 0 && !item.estAffiche
                //).length === 0);
                return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                    item.id <= Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && !item.estAffiche
                ).length === 0);
            } else {
                //return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                //    item.id > 0 && !item.estAffiche
                //).length === 0);
                return (_.filter(this.selectionnerListe(indexAgent), (item: Modeles.Application.IPortefeuille) =>
                    item.id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && !item.estAffiche
                ).length === 0);
            }
        }

        /**
         * Appelé lorsqu'on actionne une touche et que la case à cocher globale (3 états) a le focus.
         * @param $event
         * @param indexAgent
         */
        public keyDownTroisEtat($event: KeyboardEvent, indexAgent?: number) {
            if ($event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ESPACE) {
                this.forceMultiSelection(undefined, indexAgent);
            }
        }

        /**
         * Appelé lorsqu'on clique sur la case à cocher globale (3 états).
         * @param $event
         * @param indexAgent
         */
        public forceMultiSelection($event?: ng.IAngularEvent, indexAgent?: number, estSuiviPar?: boolean): void {
            let target: boolean;
            if (this.setIndetermine(indexAgent, estSuiviPar)) {
                target = false;
            }
            if (!this.aPortefeuilleCoche(indexAgent, estSuiviPar)) {
                target = true;
            }
            if (indexAgent !== null &&
                indexAgent !== undefined) {
                angular.forEach(this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent,
                    (item: Modeles.Application.IPortefeuille) => {
                        if (estSuiviPar === undefined) {
                            item.estAffiche = target;
                        } else if (estSuiviPar) {
                            // if (item.id === 0) { item.estAffiche = target; }
                            // if (item.id > 0 && target) { item.estAffiche = !target; }
                            if (item.id <= Constantes.Application.ID_PORTEFEUILLE_MAX_SPC) { item.estAffiche = target; }
                            if (item.id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && target) { item.estAffiche = !target; }
                        } else {
                            //if (item.id > 0) { item.estAffiche = target; }
                            //if (item.id === 0 && target) { item.estAffiche = !target; }
                            if (item.id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC) { item.estAffiche = target; }
                            if (item.id <= Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && target) { item.estAffiche = !target; }
                        }
                    });
                this.listePortefeuillesDropDown[indexAgent].estAffiche = target;
            } else {
                angular.forEach(this.listePortefeuilles, (item: Modeles.Application.IPortefeuille) => {
                    item.estAffiche = target;
                });
                angular.forEach(this.listePortefeuillesDropDown, (item: Modeles.Application.IAgent) => {
                    item.estAffiche = target;
                });
            }
            if ($event !== undefined) {
                $event.preventDefault();
            }
        }

        /**
         * 
         */
        public getLabelTroisEtats(indexAgent?: number, estSuiviPar?: boolean): string {
            return this.aPortefeuilleCoche(indexAgent, estSuiviPar) ?
                Constantes.Application.TXT_DESELECTIONNER_TOUT :
                Constantes.Application.TXT_SELECTIONNER_TOUT;
        }

        /**
         * Permet de retourner le nom et l'ID du portefeuille
         * @param indexPortfeuille position dans la liste de l'agent du portfeuille
         * @param indexAgent position dans la liste d'agent
         * @return {string}
         */
        public getLibelleEtIdPortefeuille(indexPortfeuille: number, indexAgent: number): string {
            if (this.listePortefeuillesDropDown &&
                this.listePortefeuillesDropDown.length > 0 &&
                this.listePortefeuillesDropDown[indexAgent] &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent.length > 0 &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent[indexPortfeuille]) {
                if (this.getEstPortefeuille(indexPortfeuille, indexAgent)) {
                    return this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent[indexPortfeuille].libelle + " - " +
                        this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent[indexPortfeuille].id;
                } else {
                    return this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent[indexPortfeuille].libelle;
                }
            } else {
                return "";
            }
        }

        /**
         * Permet de vérifier si on est sur un portefeuille : id <> 0
         * @param indexPortfeuille
         * @param indexAgent
         * @return {boolean}
         */
        public getEstPortefeuille(indexPortfeuille: number, indexAgent: number): boolean {
            if (this.listePortefeuillesDropDown &&
                this.listePortefeuillesDropDown.length > 0 &&
                this.listePortefeuillesDropDown[indexAgent] &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent.length > 0 &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent[indexPortfeuille]) {
                return this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent[indexPortfeuille].id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC - 1;
            } else {
                return false;
            }
        }

        /**
         * Permet de vérifier si on est sur un suivi par complémenataire : id = 0
         * @param indexPortfeuille
         * @param indexAgent
         * @return {boolean}
         */
        public getEstSuiviParComplementaire(indexPortfeuille: number, indexAgent: number): boolean {
            if (this.listePortefeuillesDropDown &&
                this.listePortefeuillesDropDown.length > 0 &&
                this.listePortefeuillesDropDown[indexAgent] &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent.length > 0 &&
                this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent[indexPortfeuille]) {
                return this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent[indexPortfeuille].id < Constantes.Application.ID_PORTEFEUILLE_MAX_SPC;
            } else {
                return false;
            }
        }

        /**
         * Permet de retourner le nom d'un agent
         * @param {number} index position dans la liste d'agent
         * @return {string} Nom de l'agent
         */
        public getLibelleAgent(index: number): string {
            if (this.listePortefeuillesDropDown &&
                this.listePortefeuillesDropDown.length > 0 &&
                this.listePortefeuillesDropDown[index]) {
                return this.listePortefeuillesDropDown[index].nomPrenonAgent;
            } else {
                return "";
            }
        }

        /**
         * obtenir le texte affiché sur le bouton du choix portfeuille
         */
        public getTxtChoixPortefeuille(): string {
            if (this.listePortefeuilles &&
                this.listePortefeuillesDropDown) {
                let nbPortefeuillesSelectionne: number =
                    _.where(
                        this.portefeuilleService.regrouperToutPortfeuille(this.listePortefeuillesDropDown),
                        { "estAffiche": true }).length;
                return `${Constantes.Application.TXT_CHOIX_PORTEFEUILLE} ` +
                    `(${nbPortefeuillesSelectionne}/${this.listePortefeuilles.length})`;
            } else {
                return `${Constantes.Application.TXT_CHOIX_PORTEFEUILLE} (???/???)`;
            }
        }

        /**
         * Méthode pour deselectionner les choix portefeuille si selection de suivi par complémentaire ou deselectionner les choix suivi par complémentaire si selection de portefeuille
         * @param indexPortfeuille
         * @param indexAgent
         */
        public majSelection(indexPortfeuille: number, indexAgent: number): void {
            if (this.getEstSuiviParComplementaire(indexPortfeuille, indexAgent)) {
                this.deselectChoixPortefeuille();
                this.deselectAutresChoixSuiviParComplementaire(indexPortfeuille, indexAgent);
            } else {
                this.deselectChoixSuiviParComplementaire();
            }
        }

        /**
         * Methode pour deselectionner les autres choix de domaine de suivi par complémentaire car un seul choix est possible
         * @param indexPortfeuille
         * @param indexAgent
         */
        private deselectAutresChoixSuiviParComplementaire(indexPortfeuille: number, indexAgent: number): void {
            let index = 0;
            this.listePortefeuillesDropDown[indexAgent].listPortefeuilleParAgent.forEach((ptf: Modeles.Application.IPortefeuille) => {
                if (index !== indexPortfeuille && (ptf.id < Constantes.Application.ID_PORTEFEUILLE_MAX_SPC)) {
                    ptf.estAffiche = false;
                }
                index++;
            });
        }

        /**
         * Deselectionner tous les choix typés portefeuille réél
         */
        private deselectChoixPortefeuille(): void {
            this.listePortefeuillesDropDown.forEach((agent: Modeles.Application.IAgent) => {
                agent.listPortefeuilleParAgent.forEach((ptf: Modeles.Application.IPortefeuille) => {
                    if (ptf.id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC - 1) {
                        // console.log(ptf);
                        ptf.estAffiche = false;
                    }
                });
            });
        }

        /**
         * Deselectionner tous les choix typés Suivi par complémentaire SPC
         */
        private deselectChoixSuiviParComplementaire(): void {
            this.listePortefeuillesDropDown.forEach((agent: Modeles.Application.IAgent) => {
                agent.listPortefeuilleParAgent.forEach((ptf: Modeles.Application.IPortefeuille) => {
                    if (ptf.id < Constantes.Application.ID_PORTEFEUILLE_MAX_SPC) {
                        ptf.estAffiche = false;
                    }
                });
            });
        }

        /**
         * Appelé lorsqu'on ouvre/ferme le dropdown de choix de portefeuille
         */
        public ouvrirFermerChoixPortefeuille() {
            this.sauvegarderPoretefeuille();
        }

        /**
         *  Sauvegarder le Poretefeuille
         */
        private sauvegarderPoretefeuille(): void {
            this.sauveListePortefeuille = [];
            this.listePortefeuilles.forEach((item: Modeles.Application.IPortefeuille) => {
                this.sauveListePortefeuille.push(angular.copy(item));
            });
        };

        /**
         * Restaurer Poretefeuille via la sauvegarde ou sans 
         */
        private restaurerPoretefeuille(): void {
            if (this.sauveListePortefeuille) {
                // vide la liste de portefeuille
                this.listePortefeuilles.length = 0;
                // Recharge la liste de portefeuille avec la sauvegarde
                this.sauveListePortefeuille.forEach((item: Modeles.Application.IPortefeuille) => {
                    this.listePortefeuilles.push(item);
                });
                this.viderSauvagardePortefeuille();
            } else {
                // Si pas de sauvegarde cela veux dire que c'est la première fois que le 
                // choix portefeuille est ouvert. Donc on réinitalise la liste sans aucune selection.
                this.listePortefeuilles.forEach((item: Modeles.Application.IPortefeuille) => {
                    item.estAffiche = false;
                });
            }
        };

        /**
         * Vider sauvagarde Portefeuille
         */
        private viderSauvagardePortefeuille(): void {
            // Reinitalise la liste de la sauvegarde des portefeuille
            this.sauveListePortefeuille = null;
        }

        /**
         * 
         * @param indexAgent
         */
        public setIndetermine(indexAgent?: number, estSuiviPar?: boolean): boolean {
            return (this.aPortefeuilleCoche(indexAgent, estSuiviPar) && this.aPortefeuillesNonCoches(indexAgent, estSuiviPar));
        }


        /**
         * 
         */
        public validerChoixPortefeuille(): ng.IPromise<void> {
            this.viderSauvagardePortefeuille();
            if (this.sauveListePortefeuille) {
                // vide la liste sauvegardé des portefeuilles
                this.sauveListePortefeuille.length = 0;
                this.sauveListePortefeuille = null;
            }
            this.listePortefeuilles = this.portefeuilleService.regrouperToutPortfeuille(this.listePortefeuillesDropDown);
            return this.portefeuilleService.setListePortfeuillesVisu(this.listePortefeuilles).then(() => {
                this.ouvertureVoletChoixPortefeuille = false;
                // on vide la liste des relations afin de la reconstruire
                this.listeClientsService.razRelations();
                if (this.$location.path() === Constantes.Url.CLIENTS) {
                    this.listeClientsService.initialiserEstLimiteClientsAtteinte(null);
                    // Si on est sur la page de liste client/relations, on doit réinitialiser
                    // la liste sans tenir compte du forçage en place car la liste de portefeuille peut avoir changé
                    // SPC si on passe d'une visu 
                    let typeForcageAAppliquer = this.portefeuilleService.aPortefeuillesReelAffiche() ?
                        Enum.PageClients.TYPE_FORCAGE.TOUT : this.portefeuilleService.aPortefeuilleExpertAffiche() ?
                            Enum.PageClients.TYPE_FORCAGE.CLIENTS : undefined;
                    this.portefeuilleService.setTypeForcage(typeForcageAAppliquer);
                    return this.eventService.initialiserListeRelationEtClient(typeForcageAAppliquer);
                } else {
                    return this.eventService.initialiserVueGlobale();
                }
            });
        }

        public nbPortefeuilleReel(): number {
            return this.portefeuilleService.nbPortefeuilleReel();
        }

        public aSuiviParComplementaire(): boolean {
            return this.portefeuilleService.aSuiviParComplementaire();
        }

        public aPortefeuilleReel(): boolean {
            return this.portefeuilleService.aPortefeuilleReel();
        }

        public aPortefeuille(): boolean {
            return this.portefeuilleService.aPortefeuille();
        }

        /**
         * il y a-t-il une designation dans le contexte ?
         */
        public estDesignation(): boolean {
            return this.contexteService.getDesignation() !== "";
        }

        /**
         * Stop la propagation d'un evenement (emit)
         * @param $event
         */
        public stopPropagation($event: ng.IAngularEvent): void {
            $event.stopPropagation();
        }

        /**
         * 
         * @param indexAgent
         */
        public isCheckedGlobal(indexAgent?: number): boolean {
            return !this.aPortefeuillesNonCoches(indexAgent) && !this.setIndetermine(indexAgent);
        }
    }

    // Déclaration du controleur
    app.controller("PfChoixPortefeuilleControleur", PfChoixPortefeuilleControleur);
} 