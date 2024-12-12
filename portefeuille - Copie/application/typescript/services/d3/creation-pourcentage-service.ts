/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Services.LibrairieD3 {
    "use strict";

    export interface IConfigPourcentageD3 {
        titre: string;
        pourcentageUn: number;
        degrade: DEGRADE_POURCENTAGE;
        pourcentageDeux?: number;
        nombreUn?: number;
        nombreDeux?: number;
        legende?: string;
        id?: string;
    }

    export enum DEGRADE_POURCENTAGE {
        ORANGE = <any>"ORANGE",
        VERT = <any>"VERT",
        VIOLET = <any>"VIOLET",
        BLEU = <any>"BLEU"
    };

    class CreationPourcentageService implements ICreationPourcentageService {
        public static CLASS_NAME: string = "CreationPourcentageService";

        private width: number;
        private height: number;

        /**
         * Constructeur
         */
        constructor() {
        }

        /**
         * 
         * @param id
         */
        private setWidthHeight(id: string): void {
            let element: D3._Selection<any> = d3.select("#" + id);
            if (element.node()) {
                this.width = element.node().getBoundingClientRect().width;
                this.height = this.width;
            }
        }

        /**
         * 
         * @param data
         * @param id
         */
        public creerPourcentage(data: IConfigPourcentageD3, id: string) {
            this.setWidthHeight(id);
            let listeCouleurs: string[] = this.getCouleurDegrade(data.degrade);
            let valAngle: number = (data.nombreUn * 360) / 100;
            let current: number = data.nombreUn;

            let arc: D3.Svg.Arc = this.creerArc((this.width - 40) / 2, ((this.width - 40) / 10), 0);

            // Definir l'emplacement du SVG
            let svg: D3._Selection<any> = this.initialiserSvg(id, this.width, this.height);

            // Definir le fond graphique initiale du donut
            let arrierePlan: D3._Selection<any> = this.CreerCheminPlein(svg, 0, "#e6f7ff", arc);

            // Definir la valeur graphique du initiale donut
            let visuelValeur: D3._Selection<any> = this.CreerCheminPlein(svg, 0, listeCouleurs[0], arc);

            // Affichage de la valeur % au centre
            let texteValeur: D3._Selection<any> = svg.append("text").
                attr("dy", "0.5ex").
                attr("text-anchor", "middle").
                // TODO EA remplacer les sytles par des class
                //attr("class", "xxxxxx").
                style("font-size", "3rem").
                style("font-weight", "bold").
                style("fill", "#ffffff").
                text(current + "%");

            if (data.legende && data.legende.length > 0) {
                let texteInititule: D3._Selection<any> = svg.append("text").
                    attr("dy", "0.5ex").
                    attr("y", this.height / 2 - 10).
                    attr("text-anchor", "middle").
                    // TODO EA remplacer les sytles par  des class
                    //attr("class", "xxxxxx").
                    style("font-size", "1rem").
                    style("font-weight", "bold").
                    style("fill", "#ffffff").
                    style("width", "auto").
                    style("white-space", "nowrap").
                    style("overflow", "hidden").
                    style("text-overflow", "ellipsis").
                    text(data.legende);
                this.tronquerText(texteInititule);
                this.genererTransitionCouleur(texteInititule, 1750, "#ffffff", "#000000");
            }

            this.AjouterMouvementArc(this.genererTransitionCouleur(arrierePlan, 1750, "#ffffff", "#e6f7ff"), 360, arc);
            this.AjouterMouvementArc(this.genererTransitionCouleur(visuelValeur, 1750, "#ffffff", listeCouleurs[0]), valAngle, arc);
            this.genererTransitionCouleur(texteValeur, 1750, "#ffffff", "#000000");
        }

        /**
         * Convertir des degrées en radian
         * @param degree
         */
        private static convertirRadian(degree: number): number {
            return degree * (Math.PI / 180);
        }

        /**
         * 
         * @param rayonExterne
         * @param epaisseur
         * @param angleInitial
         */
        private creerArc(rayonExterne: number, epaisseur: number, angleInitial: number): D3.Svg.Arc {
            return d3.svg.arc().
                innerRadius(rayonExterne).
                outerRadius(rayonExterne - epaisseur).
                startAngle(CreationPourcentageService.convertirRadian(angleInitial)); 
        }

        /**
         * 
         * @param id
         * @param largeur
         * @param hauteur
         */
        private initialiserSvg(id: string, largeur: number, hauteur: number): D3._Selection<any> {
            return d3.select("#" + id).
                append("svg:svg").
                attr("viewBox", "0 0 " + largeur + " " + hauteur).
                classed("svg-content", true).
                append("g").
                attr("transform", "translate(" + largeur / 2 + "," + hauteur / 2 + ")");
        }

        /**
         * 
         * @param svg
         * @param degree
         * @param couleur
         * @param arcModel
         */
        private CreerCheminPlein(svg: D3._Selection<any>, degree: number, couleur: string, arcModel: D3.Svg.Arc): D3._Selection<any> {
            return svg.append("path").
                datum({
                    endAngle: CreationPourcentageService.convertirRadian(degree)
                }).
                style("fill", couleur).
                attr("d", arcModel); 
        }

        /**
         * 
         * @param svg
         * @param duree
         * @param couleurInit
         * @param couleurFin
         */
        private genererTransitionCouleur(svg: D3._Selection<any>, duree: number, couleurInit: string, couleurFin: string): D3.Transition.Transition {
            return svg.transition().duration(duree).styleTween("fill", () => {
                return d3.interpolate(couleurInit, couleurFin);
            });
        }

        /**
         * 
         * @param transition
         * @param degree
         * @param arcModel
         */
        private AjouterMouvementArc(transition: D3.Transition.Transition, degree: number, arcModel: D3.Svg.Arc): D3.Transition.Transition {
            return transition.call(this.arcTween, arcModel, CreationPourcentageService.convertirRadian(degree));
        }

        /**
         * 
         * @param transition
         * @param arc
         * @param newAngle
         */
        private arcTween(transition: D3.Transition.Transition, arc: D3.Svg.Arc, newAngle: number): void {
            transition.attrTween("d", (d: any) => {
                let interpolate: D3.Transition.BaseInterpolate = d3.interpolate(d.endAngle, newAngle);
                return (t: number) => {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            });
        }

        /**
         * 
         * @param pourcent
         * @param listeCouleurs
         * @param id
         */
        public addGradient(pourcent: D3._Selection<any>, listeCouleurs: Array<String>, id: string): void {
            var gradient = pourcent
                .append("linearGradient")
                .attr("id", "gradient" + id)
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "100%")
                .attr("spreadMethod", "pad");

            gradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", listeCouleurs[0])
                .attr("stop-opacity", 1);

            gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", listeCouleurs[1])
                .attr("stop-opacity", 1);
        }

        /**
         * Permet de tronquer le texte en D3 en ajoutant ...
         */
        public tronquerText(self: D3._Selection<any>): void {
            self.each(() => {
                let node: SVGTSpanElement = <SVGTSpanElement>self.node();
                let textLength = node.getComputedTextLength();
                let text: string = self.text();
                let padding: number = 0;
                while (textLength > (this.width - 2 * padding) && text.length > 0) {
                    text = text.slice(0, -1);
                    self.text(text + "...");
                    textLength = node.getComputedTextLength();
                }
            });
        } 

        /**
         * 
         * @param degrade
         */
        private getCouleurDegrade(degrade: DEGRADE_POURCENTAGE): Array<string> {
            switch (degrade) {
                case DEGRADE_POURCENTAGE.BLEU:
                    return ["#0077b3", "#0077b3"];
                case DEGRADE_POURCENTAGE.VERT:
                    return ["#4DDBDB", "#5BEE81"];
                case DEGRADE_POURCENTAGE.VIOLET:
                    return ["#7670DB", "#AE58B8"];
                default: // Orange
                    return ["#FF37BB", "#FF9A23"];
            }
        }
    }

    export interface ICreationPourcentageService {
        creerPourcentage(data: IConfigPourcentageD3, id: string);
    }

    app.service(CreationPourcentageService.CLASS_NAME, CreationPourcentageService);
}