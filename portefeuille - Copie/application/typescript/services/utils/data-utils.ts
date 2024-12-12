module Portefeuille.Services.Utils {
    "use strict";
    /**
     * 
     */
    export class DataUtils {

        /**
         * 
         * @param inStr
         */
        public static formatterPascaleCase(inStr: string): string {
            return inStr.replace(/\w+/g,
                function (w: string) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); });
        }

        /**
         * 
         * @param code
         */ 
        public static setONToBoolean(code: string): boolean {
            return code === Constantes.Rest.CODE_O_TRUE;
        }

        /**
         * 
         * @param code
         */
        public static getEstLeaderDepuisCodeLeader(code: string) {
            return code === Constantes.Application.CODE_LEADER_RELATION;
        }

        /**
         * 
         * @param indicClientProspect
         */
        public static getEstClientDepuisIndicateur(indicClientProspect: Modeles.Application.IIndicateur): boolean {
            return indicClientProspect ? indicClientProspect.valeur === Constantes.Application.CHAINE_INDICATEUR_CLIENT : undefined;
        }

        /**
         * 
         * @param indicClientActif
         */
        public static getEstActifDepuisIndicateur(indicClientActif: Modeles.Application.IIndicateur): boolean {
            return indicClientActif.valeur === Constantes.Application.CHAINE_INDICATEUR_ACTIF;
        }

        /**
         * 
         * @param code
         */
        public static setStrToActifInactif(code: string): string {
            if (code && code !== " ") {
                return code === Constantes.Rest.CODE_STRING_ACTIF ? Constantes.Application.CHAINE_INDICATEUR_ACTIF : Constantes.Application.CHAINE_INDICATEUR_INACTIF;
            } else {
                return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
            }
        }

        /**
         * 
         * @param code
         */
        public static setStrToSansContrat(code: string): string {
            if (code && code !== " ") {
                return code === Constantes.Rest.CODE_O_TRUE ? Constantes.Application.CHAINE_OUI : Constantes.Application.CHAINE_NON;
            } else {
                return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
            }
        }

        /**
         * 
         * @param code
         */
        public static setStrToLeader(code: string): string {
            if (code && code !== " ") {
                return code === Constantes.Rest.CODE_O_TRUE ? Constantes.Application.CHAINE_OUI : Constantes.Application.CHAINE_NON;
            } else {
                return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
            }
        }

        /**
         * 
         * @param code
         */
        public static setStrToClientProspectVide(code: string): string {
            switch (code) {
                case Constantes.Rest.CODE_TYPE_PERSONNE_CLIENT:
                    return Constantes.Application.CHAINE_INDICATEUR_CLIENT;
                case Constantes.Rest.CODE_TYPE_PERSONNE_TIERS:
                    return Constantes.Application.CHAINE_INDICATEUR_TIERS;
                case Constantes.Rest.CODE_TYPE_PERSONNE_PROPECT_RESTREINT:
                case Constantes.Rest.CODE_TYPE_PERSONNE_PROPECT_ENRICHI:
                    return Constantes.Application.CHAINE_INDICATEUR_PROSPECT;
                default:
                    return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
            }
        }
        
        /**
         * 
         * @param num
         * @param size
         */
        public static lPad(num: number, size: number): string {
            return _.padLeft("" + num, size, "0");
        }

        /**
         * 
         * @param val
         */
        public static booleanToOuiNon(val: boolean): string {
            return val ? Constantes.Application.CHAINE_OUI : Constantes.Application.CHAINE_NON;
        }

        /**
         * 
         * @param val
         */
        public static formatDateIhm(val: string): string {
            return moment(val, Constantes.Application.FORMAT_DATE_REST).format(Constantes.Application.FORMAT_DATE_IHM);
        }

        /**
         * 
         * @param val
         * @param unite
         */
        public static formatMontant(val: number): string {
            return val.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, String.fromCharCode(160));
        }

        /**
         * utilisé pour afficher le filtre
         * @param val
         */
        public static formatPourcent(val: number): string {
            let texte: string;
            texte = val.toFixed(2);
            texte = texte.replace(/\B(?=(\d{3})+(?!\d))/g, String.fromCharCode(160));
            // supprime le .00
            let pos: number;
            if ((pos = texte.indexOf(".00")) > -1) {
                texte = texte.substring(0, pos);
            }
            texte = texte.replace(".", ",");
            return texte;
        }

        /**
         * retitue un nombre entier au format du pays locale
         * @param val Valeur à affiché
         */
        public static formatNombre(val: number): string {
            return val.toLocaleString();
        }

        /**
         * 
         * @param dateRest
         */
        public static strDateRestToDate(dateRest: string): Date {
            let dateMonent: moment.Moment;
            let dateFormater: Date;
            dateFormater = null;
            if (dateRest && dateRest.length > 0) {
                dateMonent = (dateRest.length > 15) ?
                    moment(dateRest.substr(0, 16), "YYYY-MM-DD-HH.mm") :
                    moment(dateRest, "YYYY-MM-DD");
                if (dateMonent.isValid()) {
                    dateFormater = dateMonent.toDate();
                }
            }
            return dateFormater;
        }

        /**
         * 
         * @param codeCivilite
         */
        public static determinerLibelleCivilite(codeCivilite: string): string {
            return (codeCivilite === "1" || codeCivilite === "2") ?
                "ME" : (codeCivilite === "3" ? "MR" : "");
        }

        /**
         * 
         * @param dateFormatString
         */
        public static formaterDateValide(dateFormatString: string): Date {
            return moment(dateFormatString, "MM/YYYY").isValid() ?
                moment(dateFormatString, "MM/YYYY").toDate() : null;
        }


        public static getTexteCA(client: Modeles.Application.IClient, code: String): string {
            let texte: string = "";
            let listeIndic: Array<Modeles.Application.IIndicateur> = _.where(client.listeIndicateurs, { "code": code });
            if (listeIndic && listeIndic.length > 0) {
                let indic: Modeles.Application.IIndicateur = listeIndic[0];
                if (indic.valeurNumber !== undefined &&
                    indic.valeurNumber !== null &&
                    indic.valeurNumber !== Number.POSITIVE_INFINITY &&
                    indic.valeurNumber !== Number.NEGATIVE_INFINITY) {
                    texte = `${indic.valeurNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} k€`;
                } else {
                    texte = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                }
            }
            return texte;
        }

        /**
         * 
         * @param client
         * @param code
         */
        public static getTexteDate(client: Modeles.Application.IClient, code: string): string {
            let texte: string = "";
            let listeIndic: Array<Modeles.Application.IIndicateur> = _.where(client.listeIndicateurs, { "code": code });
            if (listeIndic && listeIndic.length > 0) {
                let indic: Modeles.Application.IIndicateur = listeIndic[0];
                if (indic.valeurNumber !== undefined &&
                    indic.valeurNumber !== null &&
                    indic.dateMaj !== null) {
                    texte = moment(indic.dateMaj).format("MM/YYYY");
                }
            }
            return texte;
        }

        /**
         * 
         * @param nombre
         */
        public static formaterMontantkiloText(nombre: number): string {
            return `${nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, String.fromCharCode(160))} k€`;
        }
    }
}