/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-detail-filtre
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfDetailFiltreControleur {
        public static CLASS_NAME = "PfDetailFiltreControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfDetailFiltreControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.begacliService
        ];

        // Variables d'entrée
        public listeFiltres: Array<Modeles.Application.IFiltre>;

        // Variables utiles

        /**
         * Constructeur
         */
        constructor(
            private eventService: Services.Application.IEventService,
            private begacliService: Services.Application.IBegacliService) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfDetailFiltreControleur.logger.info(">>> Appel de la méthode : PfDetailFiltreControleur.initialiser <<<");
        }


        public supprimerFiltres(): void {
            this.begacliService.setCasesDecochees();
            this.eventService.supprimerTousLesFiltresClientsControleur();
        }

        public getTxtFiltre(filtre: Modeles.Application.IFiltre): string {
            let txt: string;
            switch (filtre.indicateur.indicateur.typeIndicateur) {
                case Enum.Indicateur.TYPE.TEXTE:
                    txt = this.getTxtListeValeurs(filtre);
                    break;
                case Enum.Indicateur.TYPE.BEGACLI:
                    txt = this.begacliService.getFiltreBegacliTexte(filtre);
                    break;
                default:
                    switch (filtre.comparateur) {
                        case Enum.Filtre.COMPARATEUR.SUPERIEUR:
                            txt = this.getTxtValUnique(filtre);
                            break;
                        case Enum.Filtre.COMPARATEUR.INFERIEUR:
                            txt = this.getTxtValUnique(filtre);
                            break;
                        case Enum.Filtre.COMPARATEUR.EGALE:
                            txt = this.getTxtValUnique(filtre);
                            break;
                        case Enum.Filtre.COMPARATEUR.ENTRE:
                            txt = this.getTxtValMultiple(filtre);
                            break;
                        case Enum.Filtre.COMPARATEUR.NC:
                            txt = this.getTxtValNC(filtre);
                            break;
                        case Enum.Filtre.COMPARATEUR.ECHUE:
                            txt = this.getTxtValDerniereRevue(filtre);
                            break;
                        case Enum.Filtre.COMPARATEUR.ENCOURS:
                            txt = this.getTxtValDerniereRevue(filtre);
                            break;
                        case Enum.Filtre.COMPARATEUR.NONREALISEE:
                            txt = this.getTxtValDerniereRevue(filtre);
                            break;

                        default:
                            txt = "";
                    }
            }
            return txt;
        }

        private getTxtListeValeurs(filtre: Modeles.Application.IFiltre): string {
            let intitule = filtre.indicateur.indicateur.intitule;
            // regardderici ... le changement de nom , pas cool si sans contrat choisi en plus....
            //if (filtre.indicateur.indicateur.code === Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TEXTE.toString()) {
            //    intitule = "Avec contrat";
            //}
            // console.log("--> filtre.indicateur.indicateur.code : ", filtre.indicateur.indicateur.code);
            let listeVal: string[] = _.pluck(_.where(filtre.indicateur.listeValeurs, { "actif": true }), "libelle");
            return `${intitule} = [${listeVal.join(", ")}]`;
        }

        public getDevise(code: string): string {
            return _.indexOf(Constantes.Indicateur.INDICATEUR_EN_EURO, code) !== -1 ? "€" : "k€";
        }

        private getTxtValUnique(filtre: Modeles.Application.IFiltre): string {
            return this.getTexteValeurs(filtre, false);
        }

        private getTxtValMultiple(filtre: Modeles.Application.IFiltre): string {
            return this.getTexteValeurs(filtre, true);
        }

        private getTexteValeurs(filtre: Modeles.Application.IFiltre, multiple: boolean): string {
            let uniteMin: string = "";
            let uniteMax: string = "";
            let valeurNumMin: number = multiple ? filtre.valeurMultiple1 : filtre.valeurUnique;
            let valeurMin: string = valeurNumMin.toString();
            let valeurNumMax: number = multiple ? filtre.valeurMultiple2 : null;
            let valeurMax: string = multiple ? valeurNumMax.toString() : null;
            let indicateur: Modeles.Application.IIndicateurType = filtre.indicateur.indicateur; 

            if (indicateur.typeIndicateur === Enum.Indicateur.TYPE.MONTANT) {
                valeurMin = Services.Utils.DataUtils.formatMontant(valeurNumMin);
                valeurMax = valeurNumMax ? Services.Utils.DataUtils.formatMontant(valeurNumMax) : null;
                uniteMin = ` ${this.getDevise(indicateur.code)}`;
                uniteMax = uniteMin;
            }
            if (indicateur.typeIndicateur === Enum.Indicateur.TYPE.POURCENT) {
                valeurMin = Services.Utils.DataUtils.formatPourcent(valeurNumMin);
                valeurMax = valeurNumMax ? Services.Utils.DataUtils.formatPourcent(valeurNumMax) : null;
                uniteMin = " %";
                uniteMax = uniteMin;
            }
            if (indicateur.typeIndicateur === Enum.Indicateur.TYPE.DATE) {
                    valeurMin = moment(valeurMin).format("DD/MM/YYYY");
                    valeurMax = valeurNumMax ? moment(valeurMax).format("DD/MM/YYYY") : null;
                    uniteMin = "";
                    uniteMax = uniteMin;
            }
            return `${indicateur.intitule} ${filtre.comparateur.toString()} ${valeurMin}${uniteMin}` +
                (valeurMax ? ` et ${valeurMax}${uniteMax}` : ``);
        }

        /**
         * Renvoi un text pour les valeurs NC
         * @param filtre pour fournir l'intitulé
         */
        private getTxtValNC(filtre: Modeles.Application.IFiltre): string {
            return `${filtre.indicateur.indicateur.intitule} ${filtre.comparateur.toString()}`;
        }

        /**
         * Renvoi un text pour indicateur derniere revue : les valeurs Echue, En cours, Non réalisé
         * @param filtre pour fournir l'intitulé
         */
        private getTxtValDerniereRevue(filtre: Modeles.Application.IFiltre): string {
            return `${filtre.indicateur.indicateur.intitule} ${filtre.comparateur.toString()}`;
        }

    }

    // Déclaration du controleur
    app.controller(PfDetailFiltreControleur.CLASS_NAME, PfDetailFiltreControleur);
} 