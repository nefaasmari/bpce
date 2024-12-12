module Portefeuille.Services.Utils {
    "use strict";

    export class ApplicationUtils {

        /**
         * 
         */
        public static recupererNouvelleSelection(): Modeles.Application.IPanier {
            return <Modeles.Application.IPanier>{
                "estDefaut": false,
                "nom": "",
                listeChoixIndicateurs: []
            };
        }

        /**
         * Méthode de vérification sur une string pour voir si celle ci correspond à un nom par défaut de création de sélection
         * @param nomSelection
         */
        public static estOkNomSelection(nomSelection: string): boolean {
            for (var _i = 1; _i <= Constantes.Application.LIMITE_NB_PANIERS; _i++) {
                let nomTest = `${Constantes.Application.NOM_PANIER_CREATION} ${_i}`;
                if (nomSelection.indexOf(nomTest) === 0) {
                    return false;
                }
            }
            return true;
        }

        public static recupererPanierDefaut(listePanier: Array<Modeles.Application.IPanier>): Modeles.Application.IPanier {
            let panierReponse: Modeles.Application.IPanier;
            if (listePanier.length === 1) {
                panierReponse = listePanier[0];
                panierReponse.estDefaut = true;
            } else {
                _.find(listePanier, (panier: Modeles.Application.IPanier) => {
                    if (panier.estDefaut) {
                        panierReponse = panier;
                        return;
                    }
                });
            }
            return panierReponse;
        }

        /**
         * Méthode retournant le pourcentage représenté par "valeur" par rapport à "valeurMax".
         * @param valeurMax
         * @param valeur
         * @returns {number}
         */
        public static calculerHauteurRelativeColonne(valeurMax: number, valeur: number, isPresenceSousValeur?: boolean): number {
            const hauteurMin: number = 1;
            let hauteur: number;
            hauteur = (valeurMax && valeurMax > 0 && valeur) ? 100 * valeur / valeurMax : hauteurMin;
            return (hauteur < hauteurMin) ? hauteurMin : hauteur;
        }

        /**
         * Méthode retournant le pourcentage représenté par "valeur" par rapport à "valeurMax".
         * @param valeurMax
         * @param valeur
         * @returns {number}
         */
        public static calculerHauteurRelativeColonneSousValeur(valeurMax: number, valeur: number, sousValeur: number): number {
            const hauteurMin: number = 15;
            const hauteurMax: number = 85;

            let hauteurCalculee: number = hauteurMin;
            valeur = sousValeur;
            if (valeurMax && valeurMax > 0 && valeur) {
                hauteurCalculee = 100 * valeur / valeurMax;

                //on verifie que la hauteur de la colonne client soit au maximum et au minimum
                if (hauteurCalculee < hauteurMin) {
                    hauteurCalculee = hauteurMin;
                } else if (hauteurCalculee > hauteurMax) {
                    hauteurCalculee = hauteurMax;
                }
            }

            return hauteurCalculee;
        }

        /**
         * Méthode retournant le pourcentage représenté par "valeur" par rapport à "valeurMax".
         * @param valeurMax
         * @param valeur
         * @returns {number}
         */
        public static calculerHauteurRelativeColonneValeur(valeurMax: number, valeur: number, sousValeur: number): number {
            const hauteurMin: number = 1;
            const hauteurMax: number = 85;

            valeur = valeur - sousValeur;
            let hauteurCalculee: number = hauteurMin;

            if (!sousValeur) {
                sousValeur = 0;
            }

            if (valeurMax && valeurMax > 0 && valeur) {
                hauteurCalculee = 100 * valeur / valeurMax;

                //on verifie que la hauteur de la colonne client soit au maximum et au minimum
                if (hauteurCalculee < hauteurMin) {
                    hauteurCalculee = hauteurMin;
                } else if (hauteurCalculee > hauteurMax) {
                    hauteurCalculee = hauteurMax;
                }
            }

            return hauteurCalculee;
        }


        /**
         * Permet de calculer la hauteur de la colonne client actif (par rapport au nombre de client actif)
         * @param valeurMax
         * @param nombreClient
         * @param nombreClientActif
         */
        public static calculerHauteurRelativeColonneClient(valeurMax: number, nombreClient: number, nombreClientActif: number): number {
            const hauteurMin: number = 1;
            const hauteurMax: number = 100;

            let hauteurCalculee: number = hauteurMin;

            if (valeurMax && valeurMax > 0 && nombreClient) {
                hauteurCalculee = 100 * nombreClient / valeurMax;

                //on verifie que la hauteur de la colonne client soit au mmaximum a 95% et au minimum a 5%
                if (nombreClientActif >= nombreClient && hauteurCalculee > hauteurMin) {
                    hauteurCalculee = hauteurMin;
                } else if (hauteurCalculee > hauteurMax) {
                    hauteurCalculee = hauteurMax;
                }
            }
            return hauteurCalculee;
        }

        /**
         * Permet de calculer la hauteur de la colonne client actif (par rapport au nombre de client total)
         * @param valeurMax
         * @param nombreClientActif
         * @param nombreClient
         */
        public static calculerHauteurRelativeColonneClientActif(valeurMax: number, nombreClientActif: number, nombreClient: number): number {
            const hauteurMin: number = 0;
            const hauteurMax: number = 100;

            let hauteurCalculee: number = hauteurMin;

            if (valeurMax && valeurMax > 0 && nombreClientActif) {
                hauteurCalculee = 100 * nombreClientActif / valeurMax;

                //on verifie que la hauteur de la colonne client actif soit au mmaximum a 95% et au minimum a 5%
                if (hauteurCalculee > hauteurMax) {
                    hauteurCalculee = hauteurMax;
                }
            }
            return hauteurCalculee;
        }

        /**
         * 
         * @param data
         */
        public static getPortefeuilleDepuisDonneeSignifiante(data: Modeles.Rest.PortefeuilleV1.recherche.IDonneeSignifiante): Modeles.Application.IPortefeuille {
            if (data) {
                let reponse: Modeles.Application.IPortefeuille = <Modeles.Application.IPortefeuille>{};
                if (data.identifiantPortefeuille) { // cas Portefeuille
                    reponse.id = data.identifiantPortefeuille;
                    reponse.libelle = data.libellePortefeuille;
                } else { // cas SuiviPar Complémentaire 'SPC' 
                    // reponse.id = 0;
                    reponse.id = +data.codeSuiviComplementaire;
                    reponse.libelle = data.libelleSuiviComplementaire ? data.libelleSuiviComplementaire : data.codeSuiviComplementaire + " *pb lib*";
                    reponse.codeSuiviParComplementaire = data.codeSuiviComplementaire;
                }
                reponse.estAffiche = false;
                reponse.listeRelations = [];
                return reponse;
            } else {
                return undefined;
            }
        }

        /**
         * 
         * @param data
         */
        public static getPortefeuilleDepuisListePortefeuille(data: Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleInfo): Modeles.Application.IPortefeuille {
            if (data) {
                let reponse: Modeles.Application.IPortefeuille = <Modeles.Application.IPortefeuille>{};
                reponse.id = data.identifiantPortefeuille;
                reponse.libelle = data.libellePortefeuille;
                reponse.estAffiche = false;
                reponse.idAgent = data.identifiantEdsSuiviPortefeuille;
                reponse.fonctionAgent = data.libelleFonction;
                reponse.nomPrenonAgent = data.libelleCourtEDS;
                reponse.listeRelations = [];
                return reponse;
            } else {
                return undefined;
            }
        }

        /**
         * 
         * @param indicRest
         */
        public static getIndicateur(indicRest: Modeles.Rest.PortefeuilleV1.client.IIndicateur): Modeles.Application.IIndicateur {
            let reponse: Modeles.Application.IIndicateur = <Modeles.Application.IIndicateur>{};
            reponse.code = indicRest.code;
            reponse.dateMaj = moment(indicRest.dateMaj, "DD/MM/YYYY").toDate();
            reponse.tendance = indicRest.tendance;
            // console.log("---> code : ", reponse.code);
            switch (reponse.code) {
                case Enum.Indicateur.CODE.CLIENTPROSPECT.toString():
                case Enum.Indicateur.CODEREL.CLIENTPROSPECT.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.CLIENTPROSPECT.toString();
                    reponse.valeur = Utils.DataUtils.setStrToClientProspectVide(indicRest.valeur);
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.ACTIF.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.ACTIF.toString();
                    reponse.valeur = Utils.DataUtils.setStrToActifInactif(indicRest.valeur);
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.EQUIPE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.NON_EQUIPE.toString();
                    reponse.valeur = Utils.DataUtils.setStrToSansContrat(indicRest.valeur);
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.LEADER.toString():
                    // XXXX
                    reponse.intitule = Enum.Indicateur.INTITULE.LEADER.toString();
                    reponse.valeur = Utils.DataUtils.setStrToLeader(indicRest.valeur);
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.CA_N.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.CA_N.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.CA_N_MOINS_1.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.CA_N_MOINS_1.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.MARCHE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.MARCHE.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.SEG_RELATIONNELLE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.SEG_RELATIONNELLE.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.DATE_DERNIER_ENTRETIEN.toString():
                case Enum.Indicateur.CODEREL.DATE_DERNIER_ENTRETIEN.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.DATE_DERNIER_ENTRETIEN.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.valeurDate = indicRest.valeur ? moment(indicRest.valeur, "DD/MM/YYYY").toDate() : undefined;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.DATE;
                    reponse.icone = Enum.Indicateur.ICONE.DATE_DERNIER_ENTRETIEN.toString();
                    break;
                case Enum.Indicateur.CODE.DATE_DERNIER_RDV.toString():
                case Enum.Indicateur.CODEREL.DATE_DERNIER_RDV.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.DATE_DERNIER_RDV.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.valeurDate = indicRest.valeur ? moment(indicRest.valeur, "DD/MM/YYYY").toDate() : undefined;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.DATE;
                    reponse.icone = Enum.Indicateur.ICONE.DATE_DERNIER_RDV.toString();
                    break;
                case Enum.Indicateur.CODE.DATE_PROCHAIN_RDV.toString():
                case Enum.Indicateur.CODEREL.DATE_PROCHAIN_RDV.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.DATE_PROCHAIN_RDV.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.valeurDate = indicRest.valeur ? moment(indicRest.valeur, "DD/MM/YYYY").toDate() : undefined;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.DATE;
                    reponse.icone = Enum.Indicateur.ICONE.DATE_PROCHAIN_RDV.toString();
                    break;
                case Enum.Indicateur.CODE.NB_RDV_ANNEE_EN_COURS.toString():
                case Enum.Indicateur.CODEREL.NB_RDV_ANNEE_EN_COURS.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.NB_RDV_ANNEE_EN_COURS.toString() + moment().format("YYYY");
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    reponse.icone = Enum.Indicateur.ICONE.NB_RDV_ANNEE_EN_COURS.toString();
                    break;
                case Enum.Indicateur.CODE.NB_RDV_12_MOIS_GLISSANTS.toString():
                case Enum.Indicateur.CODEREL.NB_RDV_12_MOIS_GLISSANTS.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.NB_RDV_12_MOIS_GLISSANTS.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    reponse.icone = Enum.Indicateur.ICONE.NB_RDV_12_MOIS_GLISSANTS.toString();
                    break;
                case Enum.Indicateur.CODE.PROCHAINE_REVISION.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PROCHAINE_REVISION.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.valeurDate = indicRest.valeur ? moment(indicRest.valeur, "DD/MM/YYYY").toDate() : undefined;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.DATE;
                    break;
                case Enum.Indicateur.CODE.NOTE_BALE2.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.NOTE_BALE2.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.PNB_3112.toString():
                case Enum.Indicateur.CODEREL.PNB_3112.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PNB_3112.toString() + moment().subtract(1, "year").format("YYYY");
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.PNB_N.toString():
                case Enum.Indicateur.CODEREL.PNB_N.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PNB_N.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.PNB_N_MOINS_1.toString():
                case Enum.Indicateur.CODEREL.PNB_N_MOINS_1.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PNB_N_MOINS_1.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.REV_DATE_DERNIERE_REVUE.toString():
                case Enum.Indicateur.CODEREL.REV_DATE_DERNIERE_REVUE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.REV_DATE_DERNIERE_REVUE.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.valeurDate = indicRest.valeur ? moment(indicRest.valeur, "DD/MM/YYYY").toDate() : undefined;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.DATE;
                    break;
                case Enum.Indicateur.CODE.REV_NB_SSFAMILLES_PROPOSE.toString():
                case Enum.Indicateur.CODEREL.REV_NB_SSFAMILLES_PROPOSE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.REV_NB_SSFAMILLES_PROPOSE.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    break;
                case Enum.Indicateur.CODE.REV_VALIDEE_PAR.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.REV_VALIDEE_PAR.toString();
                    reponse.valeur = indicRest.valeur ? Utils.DataUtils.formatterPascaleCase(indicRest.valeur) : null;
                    reponse.valeur = reponse.valeur ? reponse.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.FLUX_CREDITEURS_N.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.FLUX_CREDITEURS_N.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.FLUX_CREDITEURS_N_MOINS_1.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.FLUX_CREDITEURS_N_MOINS_1.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.FLUX_DEBITEURS_N.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.FLUX_DEBITEURS_N.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.FLUX_DEBITEURS_N_MOINS_1.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.FLUX_DEBITEURS_N_MOINS_1.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    break;
                case Enum.Indicateur.CODE.POTENTIEL_PROSPECT.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.POTENTIEL_PROSPECT.toString();
                    reponse.valeur = ApplicationUtils.formaterPotentielProspect(indicRest.valeur);
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.NB_AFFAIRES_EN_COURS.toString():
                case Enum.Indicateur.CODEREL.NB_AFFAIRES_EN_COURS.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.NB_AFFAIRES_EN_COURS.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    break;
                case Enum.Indicateur.CODEREL.SEG_RELATIONNELLE_GROUPE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.SEG_RELATIONNELLE_GROUPE.toString();
                    reponse.valeur = indicRest.valeur ? this.getLibelleSegmentationRelationnelle(indicRest.valeur) : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.NB_APPETENCES.toString():
                case Enum.Indicateur.CODEREL.NB_APPETENCES.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.NB_APPETENCES.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    break;
                case Enum.Indicateur.CODE.NB_PROPOSITIONS_EN_COURS.toString():
                case Enum.Indicateur.CODEREL.NB_PROPOSITIONS_EN_COURS.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.NB_PROPOSITIONS_EN_COURS.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    break;
                case Enum.Indicateur.CODEREL.PART_ENGAG.toString():
                case Enum.Indicateur.CODE.PART_ENGAG.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PART_ENGAG.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.POURCENT;
                    break;
                // NOUVEL INDICATEUR conversion indicateur REST en Modeles.Application.IIndicateur
                case Enum.Indicateur.CODE.SCORE_ACTIVATION.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.SCORE_ACTIVATION.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    break;
                case Enum.Indicateur.CODE.SCORE_APPETENCE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.SCORE_APPETENCE.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    break;
                case Enum.Indicateur.CODE.SCORE_DEFAILLANCE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.SCORE_DEFAILLANCE.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.NOMBRE;
                    break;
                case Enum.Indicateur.CODE.TOP_CC.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.TOP_CC.toString();
                    reponse.valeurNumber = ApplicationUtils.ValeurNumberTopCC(indicRest.valeur);
                    reponse.valeur = ApplicationUtils.formaterTopCC(indicRest.valeur);
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
                case Enum.Indicateur.CODE.PART_FLUX_CONFIES_CRED.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PART_FLUX_CONFIES_CRED.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.POURCENT;
                    break;
                case Enum.Indicateur.CODE.PART_FLUX_CONFIES_DEB.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PART_FLUX_CONFIES_DEB.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.POURCENT;
                    break;
                case Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PREMIER_EQUIPEMENT.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.valeurDate = indicRest.valeur ? moment(indicRest.valeur, "DD/MM/YYYY").toDate() : undefined;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.DATE;
                    break;

                // PREMIER_EQUIPEMENT_TAG ne doit plus être proposé dansles filtres.
                case Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TAG.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PREMIER_EQUIPEMENT_TAG.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.valeurDate = indicRest.valeur ? moment(indicRest.valeur, "DD/MM/YYYY").toDate() : undefined;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.DATE;
                    break;

                case Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TEXTE.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.PREMIER_EQUIPEMENT_TEXTE.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;

                case Enum.Indicateur.CODE.OBJECTIF_FLUX.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.OBJECTIF_FLUX.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.POURCENT;
                    break;

                case Enum.Indicateur.CODE.ENCOURS_BDF.toString():
                case Enum.Indicateur.CODEREL.ENCOURS_BDF.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.ENCOURS_BDF.toString();
                    reponse.valeurNumber = indicRest.valeur ? +indicRest.valeur : null;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.MONTANT;
                    // console.log("---> encours BDF reponse : ", reponse);
                    break;

                case Enum.Indicateur.CODE.BEGACLI.toString():
                    reponse.intitule = Enum.Indicateur.INTITULE.BEGACLI.toString();
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.BEGACLI;
                    // console.log("---> begacli reponse : ", reponse);
                    break;

                default:
                    reponse.intitule = "";
                    reponse.valeur = indicRest.valeur ? indicRest.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    reponse.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                    break;
            }
            return reponse;
        }

        /**
         * 
         */
        public static formaterPotentielProspect(valeur: string): string {
            let valeurFormater: string;
            if (valeur === undefined || valeur === null || valeur === "0") {
                valeurFormater = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
            } else {
                valeurFormater = valeur + " " + "étoile" + ((valeur !== "1") ? "s" : "");
            }
            return valeurFormater;
        }

        /**
         * 23/02/2022 Top_CC
         */
        public static formaterTopCC(valeur: string): string {
            // Valeur par défaut = Blanc
            let valeurFormater: string = Constantes.Application.LIBELLE_TOP_CC_BLANC;

            _.forEach(Constantes.Tableau.VALEUR_POSSIBLE_TOP_CC, (libelle: string) => {
                if (valeur[0] === libelle[0]) {
                    valeurFormater = libelle;
                }
            });
            return valeurFormater;
        }

        /**
         * 23/02/2022 : Mettre dans valeurNumber l'index de la valeur TOP CC du tableau constant
         */
        public static ValeurNumberTopCC(valeur: string): number {
            let valeurNumber: number = Constantes.Tableau.VALEUR_POSSIBLE_TOP_CC.indexOf(Constantes.Application.LIBELLE_TOP_CC_BLANC);

            _.forEach(Constantes.Tableau.VALEUR_POSSIBLE_TOP_CC, (libelle: string) => {
                if (valeur[0] === libelle[0]) {
                    valeurNumber = Constantes.Tableau.VALEUR_POSSIBLE_TOP_CC.indexOf(libelle);
                }
            });
            return valeurNumber;
        }

        // transforme un code segmentation BDR en libellé (données récupérées depuis la table délocalisée DU2L chargée à l'init du clients-controller)
        public static segmentationsBDR: Array<any> = [];
        public static getLibelleSegmentationRelationnelle(codeSeg: string): string {
            this.segmentationsBDR.forEach((donnee: any) => {
                if (donnee.CODLTS === "BM" &&
                    donnee.CODLST === codeSeg) {   // segmentations BDR : BM; segmentations PRO : BP
                    codeSeg = donnee.LIDLSG;
                }
            });
            return codeSeg;
        }

        /**
         * 
         * @param statsPtf
         */
        public static getStatsPortefeuilleAppDepuisRest(
            statsPtf: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuille): Modeles.ApplicationStats.IRdvPtf {
            let statsApp: Modeles.ApplicationStats.IRdvPtf = <Modeles.ApplicationStats.IRdvPtf>{};
            if (!statsPtf) {
                return undefined;
            }
            if (statsPtf.portefeuilleRdv) {
                statsApp.nombreClients = statsPtf.portefeuilleRdv.nombreClients;
                statsApp.nombreClientsActifs = statsPtf.portefeuilleRdv.nombreClientsActifs;
                statsApp.nombreClientsPMEESI = statsPtf.portefeuilleRdv.nombreClientsTypePmeEsi;
                statsApp.nombreClientsPEetPEES = statsPtf.portefeuilleRdv.nbClientsPePees;
                statsApp.nombreClientsMEetMEES = statsPtf.portefeuilleRdv.nbClientsMeMees;
                statsApp.nombreClientsGEetGEES = statsPtf.portefeuilleRdv.nbClientsGeGees;
                statsApp.nombreClientsPro = statsPtf.portefeuilleRdv.nombreClientsTypeProEi;
                statsApp.nombreClientsAutres = statsPtf.portefeuilleRdv.nombreClientsTypeAutre;
                statsApp.nombreProspects = statsPtf.portefeuilleRdv.nombreProspects;
                statsApp.nombreClientsAvecProduitService = statsPtf.portefeuilleRdv.nbClientsAvecProduitService;
                statsApp.nombreClientsSansContratEtProspect = statsPtf.portefeuilleRdv.nbClientsSansContratEtProspect;
                statsApp.nombreRelations = statsPtf.portefeuilleRdv.nombreRelationsEconomiques;
                statsApp.nombreRdvProspectAnneeCivile = statsPtf.portefeuilleRdv.nbRdvProspectRealiseAnneeCivile;
                statsApp.nombreRdvProspectAnneeEnCours = statsPtf.portefeuilleRdv.nbProspectsVusAnneeEncours;
                statsApp.nombreRdvRelationEcoClient = statsPtf.portefeuilleRdv.nbRelEcoClientVuesAnneeEncours;
                statsApp.rdvTauxVisite = statsPtf.portefeuilleRdv.tauxDeVisite;
                statsApp.nombreRdvClientAnneeEnCours = statsPtf.portefeuilleRdv.nbRdvClient; //BDRL-1636

                statsApp.nombreClientsNonEquipe = statsPtf.portefeuilleRdv.nbClientsNonEquipe;
            }

            if (statsPtf.listeSegmentationRelationnellePmeEsi && statsPtf.listeSegmentationRelationnellePmeEsi.length > 0) {
                statsApp.listeSegmentationsPMEESI = [];
                _.forEach(statsPtf.listeSegmentationRelationnellePmeEsi, (seg: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePmeEsi) => {
                    let segApp: Modeles.ApplicationStats.ISegmentationRelationnelle = <Modeles.ApplicationStats.ISegmentationRelationnelle>{};
                    segApp.code = seg.codeSegmentation;
                    segApp.libelle = seg.libelleSegmentation;
                    segApp.pourcentage = seg.pourcentageNombreDeClients;
                    statsApp.listeSegmentationsPMEESI.push(segApp);
                });
            }

            //BDRL-1648 : Ajout Segmentation Pro
            if (statsPtf.listeSegmentationRelationnellePro && statsPtf.listeSegmentationRelationnellePro.length > 0) {
                statsApp.listeSegmentationsPro = this.agglomererSegmentationPro(statsPtf.listeSegmentationRelationnellePro);
            }
            return statsApp;
        }

        public static getStatsRentabiliteAppDepuisRest(statsRest: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IInfoPnb)
            : Modeles.ApplicationStats.IRentabilite {
            let statsApp: Modeles.ApplicationStats.IRentabilite;
            if (statsRest) {
                statsApp = <Modeles.ApplicationStats.IRentabilite>{};
                statsApp.dateDebPnb12DerMoisGlissN = Utils.DataUtils.strDateRestToDate(statsRest.dateDebPnb12DerMoisGlissN);
                statsApp.dateDebPnb12DerMoisGlissNMoins1 = Utils.DataUtils.strDateRestToDate(statsRest.dateDebPnb12DerMoisGlissNMoins1);
                statsApp.dateDebPnb3112AnneeNMoins1 = Utils.DataUtils.strDateRestToDate(statsRest.dateDebPnb3112AnneeNMoins1);
                statsApp.dateFinPnb12DerMoisGlissN = Utils.DataUtils.strDateRestToDate(statsRest.dateFinPnb12DerMoisGlissN);
                statsApp.dateFinPnb12DerMoisGlissNMoins1 = Utils.DataUtils.strDateRestToDate(statsRest.dateFinPnb12DerMoisGlissNMoins1);
                statsApp.dateFinPnb3112AnneeNMoins1 = Utils.DataUtils.strDateRestToDate(statsRest.dateFinPnb3112AnneeNMoins1);
                statsApp.pnb12DerniersMoisGlissantN = statsRest.pnb12DerniersMoisGlissantN;
                statsApp.pnb12DerniersMoisGlissNMoins1 = statsRest.pnb12DerniersMoisGlissNMoins1;
                statsApp.pnb3112AnneeNMoins1 = statsRest.pnb3112AnneeNMoins1;
                statsApp.ratioPNBImportants = statsRest.ratioPnbClient;
                statsApp.tauxEvolutionPnb = statsRest.tauxEvolutionPnb;
            } else {
                statsApp = undefined;
            }
            return statsApp;
        }

        public static getStatsRevueAppDepuisRest(
            statsRest: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevue): Modeles.ApplicationStats.IRevuePortefeuille {
            let statsApp: Modeles.ApplicationStats.IRevuePortefeuille;
            if (statsRest) {
                statsApp = <Modeles.ApplicationStats.IRevuePortefeuille>{};
                statsApp.nombreDeClientsAActiver = statsRest.nombreDeClientsAActiver;
                statsApp.nombreDeProduitsAProposer = statsRest.nombreDeProduitsAProposer;
                statsApp.nombreDeClientsAAppetence = statsRest.nombreDeClientsAAppetence;
                statsApp.pourcentageRevuePtfRealisee = statsRest.pourcentageRevuePtfRealisee;
                statsApp.nombreDeClientsARenegocier = statsRest.nombreDeClientsARenegocier;
                statsApp.nombreDePropositionsEnCours = statsRest.cumulPropositionCommerciale;
                statsApp.nombreDeAffairesEnCours = statsRest.cumulNombreAffaires;
                statsApp.nombreDePropositionsEnCours = statsRest.cumulPropositionCommerciale; // bouchon temporaire
                statsApp.nombreDeAffairesEnCours = statsRest.cumulNombreAffaires; // bouchon temporaire
            } else {
                statsApp = undefined;
            }
            return statsApp;
        }

        /**
         * 
         * @param statsRest
         */
        public static getStatsRevueAppDepuisRestGlobal(
            statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds
        ): Modeles.ApplicationStats.IRevuePortefeuille {
            let statsApp: Modeles.ApplicationStats.IRevuePortefeuille;
            if (statsRest && statsRest.vueGlobaleStatPtfEds) {
                statsApp = <Modeles.ApplicationStats.IRevuePortefeuille>{};
                statsApp.nombreDeClientsAActiver = statsRest.vueGlobaleStatPtfEds.nombreDeClientsAActiver;
                statsApp.nombreDeProduitsAProposer = statsRest.vueGlobaleStatPtfEds.nombreDeProduitsAProposer;
                statsApp.nombreDeClientsAAppetence = statsRest.vueGlobaleStatPtfEds.nombreDeClientsAAppetence;
                statsApp.pourcentageRevuePtfRealisee = statsRest.vueGlobaleStatPtfEds.pourcentageRevuePtfRealisee;
                statsApp.nombreDeClientsARenegocier = statsRest.vueGlobaleStatPtfEds.nombreDeClientsTarifARenegocier;
                statsApp.nombreDePropositionsEnCours = statsRest.vueGlobaleStatPtfEds.cumulPropositionCommerciale; // bouchon temporaire
                statsApp.nombreDeAffairesEnCours = statsRest.vueGlobaleStatPtfEds.cumulNombreAffaires; // bouchon temporaire

            } else {
                statsApp = undefined;
            }
            return statsApp;
        }

        /**
         * 
         * @param statsRest
         */
        public static getStatsRentabiliteAppDepuisRestGlobal(statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds)
            : Modeles.ApplicationStats.IRentabilite {
            let statsApp: Modeles.ApplicationStats.IRentabilite = <Modeles.ApplicationStats.IRentabilite>{};
            if (!statsRest || !statsRest.vueGlobaleStatPtfEds) {
                return undefined;
            }
            statsApp.dateDebPnb12DerMoisGlissN =
                Utils.DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateDebPnb12DerMoisGlissN);
            statsApp.dateDebPnb12DerMoisGlissNMoins1 =
                Utils.DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateDebPnb12DerMoisGlissNMoins1);
            statsApp.dateDebPnb3112AnneeNMoins1 =
                Utils.DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateDebPnb3112AnneeNMoins1);
            statsApp.dateFinPnb12DerMoisGlissN =
                Utils.DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateFinPnb12DerMoisGlissN);
            statsApp.dateFinPnb12DerMoisGlissNMoins1 =
                Utils.DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateFinPnb12DerMoisGlissNMoins1);
            statsApp.dateFinPnb3112AnneeNMoins1 =
                Utils.DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateFinPnb3112AnneeNMoins1);
            statsApp.pnb12DerniersMoisGlissantN = statsRest.vueGlobaleStatPtfEds.pnb12DerniersMoisGlissantN;
            statsApp.pnb12DerniersMoisGlissNMoins1 = statsRest.vueGlobaleStatPtfEds.pnb12DerniersMoisGlissNMoins1;
            statsApp.pnb3112AnneeNMoins1 = statsRest.vueGlobaleStatPtfEds.pnb3112AnneeNMoins1;
            /*statsApp.ratioPNBImportants = statsRest.vueGlobaleStatPtfEds.ratioPnbClient;     TODO EA a ne pas mappé qu cadre de la version vue DCA */
            statsApp.tauxEvolutionPnb = statsRest.vueGlobaleStatPtfEds.tauxEvolutionPnb;

            return statsApp;
        }

        /**
         * 
         * @param statsRest
         */
        public static getStatsPortefeuilleAppDepuisRestGlobal(
            statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): Modeles.ApplicationStats.IRdvPtf {
            let statsApp: Modeles.ApplicationStats.IRdvPtf = <Modeles.ApplicationStats.IRdvPtf>{};
            if (!statsRest || !statsRest.vueGlobaleStatPtfEds) {
                return undefined;
            }
            if (statsRest.vueGlobaleStatPtfEds) {
                statsApp.nombreClients = statsRest.vueGlobaleStatPtfEds.nombreClients;
                statsApp.nombreClientsActifs = statsRest.vueGlobaleStatPtfEds.nombreClientsActifs;
                statsApp.nombreClientsPMEESI = statsRest.vueGlobaleStatPtfEds.nombreClientsTypePmeEsi;
                statsApp.nombreClientsPEetPEES = statsRest.vueGlobaleStatPtfEds.nbClientsPePees;
                statsApp.nombreClientsMEetMEES = statsRest.vueGlobaleStatPtfEds.nbClientsMeMees;
                statsApp.nombreClientsGEetGEES = statsRest.vueGlobaleStatPtfEds.nbClientsGeGees;
                statsApp.nombreClientsPro = statsRest.vueGlobaleStatPtfEds.nombreClientsTypeProEi;
                statsApp.nombreClientsAutres = statsRest.vueGlobaleStatPtfEds.nombreClientsTypeAutre;
                statsApp.nombreProspects = statsRest.vueGlobaleStatPtfEds.nombreProspects;
                statsApp.nombreClientsAvecProduitService = statsRest.vueGlobaleStatPtfEds.nbClientsAvecProduitService;
                statsApp.nombreClientsSansContratEtProspect = statsRest.vueGlobaleStatPtfEds.nbClientsSansContratEtProspect;
                statsApp.nombreRelations = statsRest.vueGlobaleStatPtfEds.nombreRelationsEconomiques;
                statsApp.nombreRdvProspectAnneeCivile = statsRest.vueGlobaleStatPtfEds.nbRdvProspectRealiseAnneeCivile;
                statsApp.nombreRdvProspectAnneeEnCours = statsRest.vueGlobaleStatPtfEds.nbProspectsVusAnneeEncours;
                statsApp.nombreRdvRelationEcoClient = statsRest.vueGlobaleStatPtfEds.nbRelEcoClientVuesAnneeEncours;
                statsApp.rdvTauxVisite = statsRest.vueGlobaleStatPtfEds.tauxDeVisite;
                statsApp.nombreRdvClientAnneeEnCours = statsRest.vueGlobaleStatPtfEds.nbRdvClient; //BDRL-1636

                statsApp.nombreClientsNonEquipe = statsRest.vueGlobaleStatPtfEds.nbClientsNonEquipe;
            }

            /* TODO EA a remettre en place mais il n'y a pas de sortie sur la ressource dans le lot 1 vue DCA
            if (statsRest.listeSegmentationRelationnellePmeEsi && statsRest.listeSegmentationRelationnellePmeEsi.length > 0) {
                statsApp.listeSegmentationsPMEESI = [];
                _.forEach(
                    statsRest.listeSegmentationRelationnellePmeEsi,
                    (seg: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePmeEsi) => {
                    let segApp: Modeles.ApplicationStats.ISegmentationRelationnelle = <Modeles.ApplicationStats.ISegmentationRelationnelle>{};
                    segApp.code = seg.codeSegmentation;
                    segApp.libelle = seg.libelleSegmentation;
                    segApp.pourcentage = seg.pourcentageNombreDeClients;
                    statsApp.listeSegmentationsPMEESI.push(segApp);
                });
            }
            //BDRL-1648 : Ajout Segmentation Pro
            if (statsRest.listeSegmentationRelationnellePro && statsRest.listeSegmentationRelationnellePro.length > 0) {
                statsApp.listeSegmentationsPro = this.agglomererSegmentationPro(statsRest.listeSegmentationRelationnellePro);
            }
            */
            return statsApp;
        }

        /**
         * 
         * @param statsRest
         */
        public static getStatsFluxFinancierPortefeuilleAppDepuisRestGlobal(
            statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): Array<Modeles.ApplicationStats.IFlux> {
            let listFlux: Array<Modeles.ApplicationStats.IFlux> = [];
            let fluxTravail: Modeles.ApplicationStats.IFlux;

            //Flux créditeurs
            fluxTravail = <Modeles.ApplicationStats.IFlux>{};
            //Traitement des dates
            fluxTravail.dateDebFlux12DerMoisGlissN = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateDebFluxAnneeN);
            fluxTravail.dateDebFlux12DerMoisGlissNMoins1 = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateDebFluxAnneeNMoins1);
            fluxTravail.dateFinFlux12DerMoisGlissN = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateFinFluxAnneeN);
            fluxTravail.dateFinFlux12DerMoisGlissNMoins1 = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateFinFluxAnneeNMoins1);
            //Traitement des chiffres
            fluxTravail.flux12DerniersMoisGlissantN = statsRest.vueGlobaleStatPtfEds.fluxCrediteursAnneeN;
            fluxTravail.flux12DerniersMoisGlissNMoins1 = statsRest.vueGlobaleStatPtfEds.fluxCrediteursNMoins1;
            fluxTravail.tauxEvolutionFlux = statsRest.vueGlobaleStatPtfEds.tauxEvolutionFluxCrediteurs;

            listFlux.push(fluxTravail);

            //Flux débiteurs
            fluxTravail = <Modeles.ApplicationStats.IFlux>{};
            //Traitement des dates
            fluxTravail.dateDebFlux12DerMoisGlissN = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateDebFluxAnneeN);
            fluxTravail.dateDebFlux12DerMoisGlissNMoins1 = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateDebFluxAnneeNMoins1);
            fluxTravail.dateFinFlux12DerMoisGlissN = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateFinFluxAnneeN);
            fluxTravail.dateFinFlux12DerMoisGlissNMoins1 = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateFinFluxAnneeNMoins1);
            //Traitement des chiffres
            fluxTravail.flux12DerniersMoisGlissantN = statsRest.vueGlobaleStatPtfEds.fluxDebiteursAnneeN;
            fluxTravail.flux12DerniersMoisGlissNMoins1 = statsRest.vueGlobaleStatPtfEds.fluxDebiteursNMoins1;
            fluxTravail.tauxEvolutionFlux = statsRest.vueGlobaleStatPtfEds.tauxEvolutionFluxDebiteurs;

            listFlux.push(fluxTravail);
            return listFlux;
        }

        /**
         * 
         * @param statsRest
         */
        public static getStatsDetailPortefeuilleAppDepuisRestGlobal(
            statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): Modeles.ApplicationStats.IDetailPtf {
            let listDetail: Modeles.ApplicationStats.IDetailPtf = <Modeles.ApplicationStats.IDetailPtf>{};
            listDetail.detailParSuviPar = [];
            if (statsRest &&
                statsRest.vueDetailleeStatPtfEds &&
                statsRest.vueDetailleeStatPtfEds.length > 0) {
                _.forEach(statsRest.vueDetailleeStatPtfEds, (statDetailRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPtfEdsStandard) => {
                    let statDetailApplication: Modeles.ApplicationStats.IDetailPtfParSuviPar = <Modeles.ApplicationStats.IDetailPtfParSuviPar>{};

                    // Detail données général
                    statDetailApplication.codeCiviliteSuiviPar = DataUtils.determinerLibelleCivilite(statDetailRest.codeCiviliteChargeAffaire);
                    // dans certain cas le nom est à vide car aucun poste fonctionnel
                    if (!statDetailRest.nomFamilleChargeAffaire) {
                        statDetailApplication.nomSuiviPar = "AGENT-" + statDetailRest.identifiantEds;
                        statDetailApplication.prenomSuiviPar = "";
                    } else {
                        statDetailApplication.nomSuiviPar =
                            (statDetailRest.nomUsageChargeAffaire &&
                                statDetailRest.nomUsageChargeAffaire !== "")
                                ? statDetailRest.nomUsageChargeAffaire
                                : statDetailRest.nomFamilleChargeAffaire;
                        statDetailApplication.prenomSuiviPar = statDetailRest.prenomChargeAffaire;
                    }

                    // Détail pour le porfeuille
                    statDetailApplication.nbClientsAvecProduitService = statDetailRest.nbClientsAvecProduitService;
                    statDetailApplication.nombreClientsActifs = statDetailRest.nombreClientsActifs;
                    statDetailApplication.nombreClients = statDetailRest.nombreClients;

                    // Détail pour l'activité
                    statDetailApplication.tauxDeVisite = statDetailRest.tauxDeVisite;

                    // Détail pour rentabilité
                    statDetailApplication.pnb12DerniersMoisGlissNMoins1 = statDetailRest.pnb12DerniersMoisGlissNMoins1;
                    statDetailApplication.pnb12DerniersMoisGlissantN = statDetailRest.pnb12DerniersMoisGlissantN;
                    statDetailApplication.tauxEvolutionPnb = statDetailRest.tauxEvolutionPnb;

                    // Détail pour la revue portefeuille
                    statDetailApplication.tauxDeRevue = statDetailRest.pourcentageRevuePtfRealisee;

                    // Détail pour les flux commericaux
                    statDetailApplication.fluxCrediteursNMoins1 = statDetailRest.fluxCrediteursNMoins1;
                    statDetailApplication.fluxCrediteursAnneeN = statDetailRest.fluxCrediteursAnneeN;
                    statDetailApplication.tauxEvolutionFluxCrediteurs = statDetailRest.tauxEvolutionFluxCrediteurs;

                    statDetailApplication.fluxDebiteursNMoins1 = statDetailRest.fluxDebiteursNMoins1;
                    statDetailApplication.fluxDebiteursAnneeN = statDetailRest.fluxDebiteursAnneeN;
                    statDetailApplication.tauxEvolutionFluxDebiteurs = statDetailRest.tauxEvolutionFluxDebiteurs;

                    listDetail.detailParSuviPar.push(statDetailApplication);
                });
                listDetail.detailParSuviPar = _.sortBy(listDetail.detailParSuviPar, (item: Modeles.ApplicationStats.IDetailPtfParSuviPar) => {
                    return item.nomSuiviPar;
                });
            }

            // Total pour chaque détail
            if (statsRest && statsRest.vueGlobaleStatPtfEds) {
                listDetail.tauxDeVisiteTotal = statsRest.vueGlobaleStatPtfEds.tauxDeVisite;
                listDetail.tauxDeRevueTotal = statsRest.vueGlobaleStatPtfEds.pourcentageRevuePtfRealisee;

                //PNB
                listDetail.dateDebPnb12DerMoisGlissNMoins1 = Utils.DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateDebPnb12DerMoisGlissNMoins1);
                listDetail.dateFinPnb12DerMoisGlissNMoins1 = Utils.DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateFinPnb12DerMoisGlissNMoins1);
                listDetail.dateDebPnb12DerMoisGlissN = DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateDebPnb12DerMoisGlissN);
                listDetail.dateFinPnb12DerMoisGlissN = DataUtils.strDateRestToDate(statsRest.vueGlobaleStatPtfEds.dateFinPnb12DerMoisGlissN);

                listDetail.pnb12DerniersMoisGlissNMoins1 = statsRest.vueGlobaleStatPtfEds.pnb12DerniersMoisGlissNMoins1;
                listDetail.pnb12DerniersMoisGlissantN = statsRest.vueGlobaleStatPtfEds.pnb12DerniersMoisGlissantN;
                listDetail.tauxEvolutionPnb = statsRest.vueGlobaleStatPtfEds.tauxEvolutionPnb;

                //Flux
                listDetail.dateDebFluxAnneeNMoins1 = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateDebFluxAnneeNMoins1);
                listDetail.dateFinFluxAnneeNMoins1 = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateFinFluxAnneeNMoins1);
                listDetail.dateDebFluxAnneeN = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateDebFluxAnneeN);
                listDetail.dateFinFluxAnneeN = DataUtils.formaterDateValide(statsRest.vueGlobaleStatPtfEds.dateFinFluxAnneeN);

                listDetail.fluxCrediteursNMoins1 = statsRest.vueGlobaleStatPtfEds.fluxCrediteursNMoins1;
                listDetail.fluxCrediteursAnneeN = statsRest.vueGlobaleStatPtfEds.fluxCrediteursAnneeN;
                listDetail.tauxEvolutionFluxCrediteurs = statsRest.vueGlobaleStatPtfEds.tauxEvolutionFluxCrediteurs;

                listDetail.fluxDebiteursNMoins1 = statsRest.vueGlobaleStatPtfEds.fluxDebiteursNMoins1;
                listDetail.fluxDebiteursAnneeN = statsRest.vueGlobaleStatPtfEds.fluxDebiteursAnneeN;
                listDetail.tauxEvolutionFluxDebiteurs = statsRest.vueGlobaleStatPtfEds.tauxEvolutionFluxDebiteurs;
            }
            return listDetail;
        }

        /**
         * Fonction permettant de generer un identifiant aléatoire
         * @returns {number}
         */
        public static genererIdentifiantAleatoire(): number {
            return Math.floor(new Date().valueOf() * Math.random());
        }

        /**
         * Agglomère les segmentations Pro reçues du service Rest en fonction des codes segmentation
         * @param listeSegmentationProRest
         */
        public static agglomererSegmentationPro(
            listeSegmentationProRest: Array<Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePro>): Array<Modeles.ApplicationStats.ISegmentationRelationnelle> {
            let listeSegmentationResultat: Array<Modeles.ApplicationStats.ISegmentationRelationnelle>;

            if (listeSegmentationProRest) {
                listeSegmentationResultat = [];

                //La caractère recherché est *
                let expressionReguliereRecherchee: RegExp = /\*/;

                _.forEach(listeSegmentationProRest, (segmentationProLue: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePro) => {
                    if (segmentationProLue) {
                        let segmentationTravail: Modeles.ApplicationStats.ISegmentationRelationnelle = <Modeles.ApplicationStats.ISegmentationRelationnelle>{};

                        let nombreEtoiles: number = 0;
                        let tableauAvecEtoiles: Array<string>;

                        if (segmentationProLue.codeSegmentation) {
                            tableauAvecEtoiles = segmentationProLue.codeSegmentation.split(expressionReguliereRecherchee);

                            if (tableauAvecEtoiles) {
                                nombreEtoiles = tableauAvecEtoiles.length - 1;
                            }
                        }

                        //On valorise les propriétés de segmentationTravail en fonction de celles de segmentationProLue
                        switch (nombreEtoiles) {
                            case 0:
                                if (segmentationProLue.codeSegmentation.indexOf(Portefeuille.Constantes.Rest.ENTREE_EN_RELATION) !== -1) {
                                    //Cas "Entrée en relation"
                                    segmentationTravail.code = Portefeuille.Constantes.Rest.CODE_ENTREE_EN_RELATION;
                                    segmentationTravail.libelle = Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_ENTREE_RELATION;
                                    segmentationTravail.pourcentage = segmentationProLue.pourcentageNombreDeClients;
                                } else if (segmentationProLue.codeSegmentation.indexOf(Portefeuille.Constantes.Rest.PRO_RISQUE) !== -1) {
                                    //Cas "Risqué"
                                    segmentationTravail.code = Portefeuille.Constantes.Rest.CODE_RISQUE;
                                    segmentationTravail.libelle = Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_RISQUE;
                                    segmentationTravail.pourcentage = segmentationProLue.pourcentageNombreDeClients;
                                } else {
                                    if (segmentationProLue.codeSegmentation.toUpperCase().substr(0, 3) === Portefeuille.Constantes.Rest.NON_CALCULE_NON_CONCERNE) {
                                        //Autres cas traités
                                        segmentationTravail.code = Portefeuille.Constantes.Rest.CODE_AUTRES;
                                        segmentationTravail.libelle = Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_AUTRES;
                                        segmentationTravail.pourcentage = segmentationProLue.pourcentageNombreDeClients;
                                    } else {
                                        //Autres cas non ignorés (ex SCI)
                                        segmentationTravail = null;
                                    }
                                }
                                break;
                            case 1:
                                segmentationTravail.code = Portefeuille.Constantes.Rest.CODE_PRO_NON_CAPTE;
                                segmentationTravail.libelle = Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_PRO_NON_CAPTE;
                                segmentationTravail.pourcentage = segmentationProLue.pourcentageNombreDeClients;
                                break;
                            case 2:
                                segmentationTravail.code = Portefeuille.Constantes.Rest.CODE_PRO_PARTIELLEMENT_CAPTE;
                                segmentationTravail.libelle = Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_PRO_PARTIELLEMENT_CAPTE;
                                segmentationTravail.pourcentage = segmentationProLue.pourcentageNombreDeClients;
                                break;
                            case 3:
                                segmentationTravail.code = Portefeuille.Constantes.Rest.CODE_PRO_LARGEMENT_CAPTE;
                                segmentationTravail.libelle = Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_PRO_LARGEMENT_CAPTE;
                                segmentationTravail.pourcentage = segmentationProLue.pourcentageNombreDeClients;
                                break;
                            default:
                                segmentationTravail = null;
                                break;
                        }

                        if (segmentationTravail) {
                            //Recherche de ce type de segmentation dans la liste à retourner: Si trouvé => mise à jour pourcentage; Sinon => ajout
                            let indexTrouve: number = -1; //Par défaut on considère la recherche infructueuse
                            indexTrouve = _.findIndex(listeSegmentationResultat, (segmentationTestee: Modeles.ApplicationStats.ISegmentationRelationnelle) => {
                                if (segmentationTestee.code === segmentationTravail.code) {
                                    return true;
                                }
                            });

                            //Exploitation du résultat de la recherche
                            if (indexTrouve === -1) {
                                //Ce type de segmentation n'est pas encore présent dans la liste résultat => on l'ajoute
                                listeSegmentationResultat.push(segmentationTravail);
                            } else {
                                //Ce type de segmentation est déjà présent dans la liste résultat => on met le pourcentage à jour
                                listeSegmentationResultat[indexTrouve].pourcentage = listeSegmentationResultat[indexTrouve].pourcentage + segmentationTravail.pourcentage;
                            }
                        }
                    }
                });
            }
            return listeSegmentationResultat;
        }

        /**
         * Retourne une config de donut selon le type de donut souhaité et les stats passés en paramètre
         * @param typeDonutSouhaite
         * @param statsRdvEtPortefeuille
         */
        public static getConfigDonutSelonType(typeDonutSouhaite: string, statsRdvEtPortefeuille: Modeles.ApplicationStats.IRdvPtf): Services.LibrairieD3.IConfigDonutD3 {
            let configResultat: Services.LibrairieD3.IConfigDonutD3;

            if (typeDonutSouhaite && statsRdvEtPortefeuille) {
                switch (typeDonutSouhaite) {
                    case Constantes.Application.DONUT_PME_ESI:
                        //Segmentation Donut PME
                        configResultat = ApplicationUtils.getConfigDonutD3(typeDonutSouhaite);
                        configResultat.titre = Constantes.Application.GRAPHE_SEGMENTATION_TITRE_GROUPE;
                        configResultat.nombreClients = statsRdvEtPortefeuille.nombreClientsPMEESI.toString();
                        configResultat.listeDonnees = this.alimenterListeDonneesConfigDonut(statsRdvEtPortefeuille.listeSegmentationsPMEESI);
                        break;
                    case Constantes.Application.DONUT_PRO:
                        //Segmentation Donut PRO
                        configResultat = ApplicationUtils.getConfigDonutD3(typeDonutSouhaite);
                        configResultat.titre = Constantes.Application.GRAPHE_SEGMENTATION_TITRE_CLIENT;
                        configResultat.nombreClients = statsRdvEtPortefeuille.nombreClientsPro.toString();
                        configResultat.listeDonnees = this.alimenterListeDonneesConfigDonut(statsRdvEtPortefeuille.listeSegmentationsPro);
                        break;
                    default:
                    //Type de segmentation donut non prise en charge
                }
            }
            return configResultat;
        }

        /**
         * 
         * @param typeDonutSouhaite
         */
        public static getConfigDonutD3(typeDonutSouhaite: string): Services.LibrairieD3.IConfigDonutD3 {
            let configResultat: Services.LibrairieD3.IConfigDonutD3;
            configResultat = <Services.LibrairieD3.IConfigDonutD3>{};
            configResultat.donutChoisi = typeDonutSouhaite;
            configResultat.degrade = Services.LibrairieD3.DEGRADE_DONUT.ROSE;
            return configResultat;
        }

        /**
         * Retourne les données affichées dans un donut à partir d'une liste de segmentation relationnelle
         * @param listeSegmentation
         */
        public static alimenterListeDonneesConfigDonut(listeSegmentation: Array<Modeles.ApplicationStats.ISegmentationRelationnelle>): Array<LibrairieD3.IDonneeFluxD3> {
            let listeDonneesResultat: Array<LibrairieD3.IDonneeFluxD3>;
            if (listeSegmentation) {
                listeDonneesResultat = [];
                _.forEach(listeSegmentation, (seg: Modeles.ApplicationStats.ISegmentationRelationnelle) => {
                    let section = <Services.LibrairieD3.IDonneeFluxD3>{};
                    section.nom = seg.libelle;
                    section.pourcentage = seg.pourcentage;
                    listeDonneesResultat.push(section);
                });
            }
            return listeDonneesResultat;
        }

        /**
         *  Déduit si le navigateur est un Internet Explorer
         */
        public static isIE(): boolean {
            return navigator.userAgent.indexOf("Trident") !== -1;
        }
    }
}