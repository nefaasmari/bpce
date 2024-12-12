/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Services.LibrairieD3 {
    "use strict";

    export interface IConfigDonutD3 {
        titre: string;
        donutChoisi: string;
        degrade: DEGRADE_DONUT;
        nombreClients: string;
        listeDonnees: Array<IDonneeFluxD3>;
    }

    export interface IDonneeFluxD3 {
        nom: string;
        pourcentage: number;
    }

    export enum DEGRADE_DONUT {
        BLEU = <any>"BLEU",
        ROSE = <any>"ROSE",
        GRIS = <any>"GRIS"
    };

    class CreationDonutService implements ICreationDonutService {
        public static CLASS_NAME: string = "CreationDonutService";
        private static logger: MyWay.Services.Loggers.ILogger = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(CreationDonutService.CLASS_NAME);

        private margin;
        private width: number;
        private height: number;
        private donut: D3._Selection<any>;

        constructor() {
            CreationDonutService.logger.debug("----------- Constructeur  ------------");
            this.margin = { top: 0, right: 0, bottom: 0, left: 0 };
        }

        /**
         * 
         * @param id
         */
        private setWidthHeight(id: string): void {
            this.margin = { top: 10, right: 10, bottom: 10, left: 10 };
            if (d3.select("#" + id).node()) {
                this.width = d3.select("#" + id).node().getBoundingClientRect().width;
            }
            this.height = 250; // Hauteur max: a l'init, pas de hauteur 
            if (this.width > this.height) {
                this.width = this.height;
            } else {
                this.height = this.width; 
            }
        }

        /**
         * 
         * @param config
         * @param id
         */
        public creerDonut(config: IConfigDonutD3, id: string): void {
            if (!d3.select("#" + id).empty()) {
                d3.select("#" + id).selectAll("svg").remove();
                this.viderDonut();
            }
            this.setWidthHeight(id);
            let color: D3.Scale.OrdinalScale = this.getCouleurDegrade(config.degrade);
            let pie = d3.layout.pie()
                .value((data: IDonneeFluxD3) => { return data.pourcentage; })
                .sort(null);

            let arc = (<any>d3.svg.arc())
                .innerRadius(60)
                .padRadius(125);

            if (!this.donut) {
                // creation du donut
                this.donut = d3.select("#" + id).append("svg")
                    .attr("viewBox", "0 0 " + (this.width) + " " + (this.height))
                    .attr("height", this.height)
                    .classed("svg-content", true)
                    .append("g")
                    .attr("transform", this.getTranslateText(0, 0));
            } else {
                // vidage du donut
                this.donut.selectAll("g.part").remove();
                this.donut.selectAll("text.chiffre-central").remove();
            }

            let partDeTarte = this.donut.selectAll("g.part")
                .data(pie(config.listeDonnees))
                .enter()
                .append("g")
                .attr("transform", this.getTranslateText(this.width / 2, this.height / 2))
                .each((arcDescriptor: any) => {
                    arcDescriptor.outerRadius = 100;
                })
                .attr("class", "part");

            partDeTarte.append("path")
                .attr({
                    d: arc,
                    fill: (data: D3.Layout.ArcDescriptor) => {
                        return color(data.data.nom);
                    }
                })
                .on("mouseover", this.arcTween(105, 0, arc))
                .on("mouseout", this.arcTween(100, 75, arc));

            partDeTarte.append("text")
                .transition()
                .duration(200)
                .attr("transform", (data: any) => {
                    return this.getTranslateText(
                        (data.value <= 4) ?
                            arc.centroid(data).map((valeur: number) => valeur * 3 / 2) :
                            arc.centroid(data)
                    );
                })
                .attr("class", "donut-text")
                .attr("dy", ".4em")
                .attr("text-anchor", "middle")
                .style("fill", (data: any) => {
                    return (data.value <= 4) ? "black" : "white";
                })
                .style("display", (data: any) => {
                    //Pour ne pas afficher de pourcentage avec le donut Gris
                    if (data.value === Number.MAX_VALUE) {
                        return "none";
                    }
                })
                .text((data: any) => {
                    return data.data.pourcentage ? data.data.pourcentage + "%" : "";
                });

            this.donut
                .append("text")
                .attr("transform", this.getTranslateText(this.width / 2, this.height / 2))
                .style("fill", "#4F5563")
                .attr("class", "chiffre-central")
                .style("text-anchor", "middle")
                .style("font-size", "3rem")
                .append("tspan")
                .attr("dy", "0.5ex")
                .text(config.nombreClients);
        }

        /**
         * @param valeurs
         */
        private getTranslateText(...valeurs: Array<any>): string {
            return `translate(${valeurs.join(",")})`;
        }

        /**
         * 
         * @param outerRadius
         * @param delay
         * @param arc
         */
        private arcTween(outerRadius: number, delay: number, arc: any) {
            return function () {
                d3.select(this).transition().delay(delay).attrTween("d", (datum: any) => {
                    var i = d3.interpolate(datum.outerRadius, outerRadius);
                    return (t: any) => {
                        datum.outerRadius = i(t);
                        return arc(datum);
                    };
                });
            };
        }

        /**
         * 
         * @param degrade
         */
        public getCouleurDegrade(degrade: DEGRADE_DONUT): any {
            switch (degrade) {
                case DEGRADE_DONUT.BLEU:
                    return d3.scale.ordinal().range(["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#007399", "#00cccc", "#545494"]);
                case DEGRADE_DONUT.ROSE:
                    return d3.scale.ordinal().range(["#c34f73", "#d4d110", "#63ccc4", "#e45fd2", "#5870d2", "#e6a016", "#5fa262"]); //Couleurs fournies par N.W BDRL-1691
                case DEGRADE_DONUT.GRIS:
                    return d3.scale.ordinal().range(["#cccccc"]);
                default:
                    return d3.scale.category10();
            }
        }

        /**
         * 
         */
        public viderDonut(): void {
            this.donut = undefined;
        }
    }

    export interface ICreationDonutService {
        creerDonut(config: IConfigDonutD3, id: string): void;
        getCouleurDegrade(degrade: DEGRADE_DONUT): any;
        viderDonut(): void;
    }

    app.service(CreationDonutService.CLASS_NAME, CreationDonutService);
}