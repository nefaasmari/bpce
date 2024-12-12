/**
 * Filtres utiles à l'application
 * @module Portefeuille.Filtres
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Filtres {
    "use strict";

    /**
     * Filtre la liste des indicateurs qui sont utilisés
     * @param {ng.IFilterService} $filter
     * @return {Function} La fonction du filtre
     */
    export function indicateurUtilisantPasFiltre($filter: ng.IFilterService): Function {
        return (listeIndicateurs: Array<Modeles.Application.IIndicateurFiltre>, estVueClient: boolean): Array<Modeles.Application.IIndicateurFiltre> => {
            if (estVueClient) {
                return _.where(listeIndicateurs, { "utilise": false });
            } else {
                return _.where(listeIndicateurs, { "utiliseRelationEco": false });
            }
        };
    }

    /**
     * Filtre la liste des nombre qui sont utilisés
     * @param {ng.IFilterService} $filter
     * @return {Function} La fonction du filtre
     */
    export function nombreFiltre($filter: ng.IFilterService): Function {
        return (valeur: any): any => {
            //Si le montant n'existe pas, ou s'il est fixé à une des valeurs extrèmes, alors il convient d'afficher NC
            return (valeur !== undefined
                && valeur !== null
                && valeur !== ""
                && valeur !== Number.POSITIVE_INFINITY
                && valeur !== Number.NEGATIVE_INFINITY) ?
                Services.Utils.DataUtils.formatNombre(valeur) :
                Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
        };
    }

    /**
     * Formate le montant à afficher en foncntion de la valeur
     * @param $filter
     */
    export function montantFiltre($filter: ng.IFilterService): Function {
        return (valeur: any, isEuros?: boolean): any => {
            const devise: string = isEuros ? "€" : "k€";

            //Si le montant n'existe pas, ou s'il est fixé à une des valeurs extrèmes, alors il convient d'afficher NC
            return (valeur !== undefined
                && valeur !== null
                && valeur !== ""
                && valeur !== Number.POSITIVE_INFINITY
                && valeur !== Number.NEGATIVE_INFINITY) ?
                `${valeur.toString().replace(/\B(?=(\d{3})+(?!\d))/g, String.fromCharCode(160))} ${devise}` : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
        };
    }

    export function pourcentFiltre($filter: ng.IFilterService): Function {
        return (valeur: any): any => {
            //Si le montant n'existe pas, ou s'il est fixé à une des valeurs extrèmes, alors il convient d'afficher NC
            return (
                valeur !== undefined
                && valeur !== null
                && valeur !== ""
                && valeur !== Number.POSITIVE_INFINITY
                && valeur !== Number.NEGATIVE_INFINITY) ?
                `${Services.Utils.DataUtils.formatPourcent(valeur)} %` : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
        };
    }


    /**
     * Filtre la liste des indicateurs qui sont de type Date
     * @param {ng.IFilterService} $filter
     * @return {Function} La fonction du filtre
     */
    export function sansIndicateurDateFiltre($filter: ng.IFilterService): Function {
        return (listeIndicateurs: Array<Modeles.Application.IIndicateurFiltre>): Array<Modeles.Application.IIndicateurFiltre> => {
            let listeIndicateurFitre = _.filter(listeIndicateurs, function (indicateur: Modeles.Application.IIndicateurFiltre) {
                return indicateur.indicateur.typeIndicateur !== Enum.Indicateur.TYPE.DATE;
            });

            return listeIndicateurFitre;
        };
    }

    /**
     * Filtre les valeurs null est indefinis
     * @param {ng.IFilterService} $filter
     * @return {Function} La fonction du filtre
     */
    export function valeurNonConnuFiltre($filter: ng.IFilterService): Function {
        return (valeur: any): any => {
            //chaineTravail est utilisée afin de vérifer si valeur correspond à la chaine Max utilisée lors des comparaisons sur les tris
            let chaineTravail: string = <string>valeur; 
            return (valeur === undefined ||
                valeur === null ||
                valeur === "" ||
                chaineTravail.search(Constantes.Application.FIN_CHAINE_MAX) !== -1) ?
                Constantes.Application.CHAINE_INDICATEUR_NON_CONNU : 
                valeur;
        };
    }

    /**
     * Affichage de date NC (Selon la valeur transmise, on affiche ou pas NC)
     */
    export function dateNC() {

        const dateMin: Date = moment(Constantes.Application.DATE_MIN).toDate();
        const dateMax: Date = moment(Constantes.Application.DATE_MAX).toDate();

        return function (valeur: Date): string {
            if (valeur) {
                if (moment(valeur).isSame(dateMax)) {
                    return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                }

                if (moment(valeur).isSame(dateMin)) {
                    return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                }

                return moment(valeur).format("DD/MM/YYYY");

            } else {
                return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
            }
        };
    }

    /**
     * Affichage de nombre NC (Selon la valeur transmise, on affiche ou pas NC)
     */
    export function nombreNC() {
        const nombreMin: number = Number.NEGATIVE_INFINITY;
        const nombreMax: number = Number.POSITIVE_INFINITY;
        return function (valeur: number): string {
            if (valeur !== null
                && valeur !== undefined) {
                return valeur === nombreMin || valeur === nombreMax ? Constantes.Application.CHAINE_INDICATEUR_NON_CONNU : valeur.toString();
            } else {
                return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
            }
        };
    }

    // Déclaration des filtres
    app.filter("indicateurUtilisantPasFiltre", ["$filter", indicateurUtilisantPasFiltre]);
    app.filter("sansIndicateurDateFiltre", ["$filter", sansIndicateurDateFiltre]);
    app.filter("valeurNonConnuFiltre", ["$filter", valeurNonConnuFiltre]);
    app.filter("montantFiltre", ["$filter", montantFiltre]);
    app.filter("pourcentFiltre", ["$filter", pourcentFiltre]);
    app.filter("nombreFiltre", ["$filter", nombreFiltre]);
    app.filter("nombreNC", ["$filter", nombreNC]);
    app.filter("dateNC", ["$filter", dateNC]);
}