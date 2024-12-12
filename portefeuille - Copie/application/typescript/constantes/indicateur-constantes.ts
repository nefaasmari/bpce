/* Fichier pré-requis pour utiliser c'est constantes 
 * sans cela une erreur est produite lors de l'execution */
/// <reference path="../enums/application-enums.ts" />
    

module Portefeuille.Constantes {
    "use strict";
       
    export module Indicateur {
        export const ORDRE_INDICATEUR: Array<string> = [
            Enum.Indicateur.CODE.CA_N_MOINS_1.toString(),
            Enum.Indicateur.CODE.CA_N.toString(),
            Enum.Indicateur.CODE.CLIENTPROSPECT.toString(),
            Enum.Indicateur.CODE.ACTIF.toString(),
            Enum.Indicateur.CODE.EQUIPE.toString(),
            Enum.Indicateur.CODE.LEADER.toString(),
            Enum.Indicateur.CODE.FLUX_CREDITEURS_N.toString(),
            Enum.Indicateur.CODE.FLUX_CREDITEURS_N_MOINS_1.toString(),
            Enum.Indicateur.CODE.FLUX_DEBITEURS_N.toString(),
            Enum.Indicateur.CODE.FLUX_DEBITEURS_N_MOINS_1.toString(),
            Enum.Indicateur.CODE.OBJECTIF_FLUX.toString(),
            Enum.Indicateur.CODE.NB_AFFAIRES_EN_COURS.toString(),
            Enum.Indicateur.CODE.NB_APPETENCES.toString(),
            Enum.Indicateur.CODE.NB_PROPOSITIONS_EN_COURS.toString(),
            Enum.Indicateur.CODE.PNB_3112.toString(),
            Enum.Indicateur.CODE.PNB_N.toString(),
            Enum.Indicateur.CODE.PNB_N_MOINS_1.toString(),
            Enum.Indicateur.CODE.POTENTIEL_PROSPECT.toString(),
            Enum.Indicateur.CODE.SCORE_ACTIVATION.toString(),
            Enum.Indicateur.CODE.SCORE_APPETENCE.toString(),
            Enum.Indicateur.CODE.SCORE_DEFAILLANCE.toString(),
            Enum.Indicateur.CODE.DATE_DERNIER_ENTRETIEN.toString(),
            Enum.Indicateur.CODE.DATE_DERNIER_RDV.toString(),
            Enum.Indicateur.CODE.NB_RDV_12_MOIS_GLISSANTS.toString(),
            Enum.Indicateur.CODE.NB_RDV_ANNEE_EN_COURS.toString(),
            Enum.Indicateur.CODE.DATE_PROCHAIN_RDV.toString(),
            Enum.Indicateur.CODE.REV_DATE_DERNIERE_REVUE.toString(),
            Enum.Indicateur.CODE.REV_NB_SSFAMILLES_PROPOSE.toString(),
            Enum.Indicateur.CODE.REV_VALIDEE_PAR.toString(),
            Enum.Indicateur.CODE.NOTE_BALE2.toString(),
            Enum.Indicateur.CODE.PART_ENGAG.toString(),
            Enum.Indicateur.CODE.PROCHAINE_REVISION.toString(),
            Enum.Indicateur.CODE.MARCHE.toString(),
            Enum.Indicateur.CODE.SEG_RELATIONNELLE.toString(),
            Enum.Indicateur.CODE.SEG_RELATIONNELLE_GROUPE.toString(),
            Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString(),
            Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TAG.toString(),
            Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TEXTE.toString(),
            Enum.Indicateur.CODE.ENCOURS_BDF.toString(),
            Enum.Indicateur.CODE.BEGACLI.toString()
        ];

        export const ORDRE_INDICATEUR_REVUE: Array<string> = [
            Enum.Indicateur.CODE.REV_DATE_DERNIERE_REVUE.toString(),
            Enum.Indicateur.CODE.REV_VALIDEE_PAR.toString(),
            Enum.Indicateur.CODE.NB_APPETENCES.toString(),
            Enum.Indicateur.CODE.REV_NB_SSFAMILLES_PROPOSE.toString(),
            Enum.Indicateur.CODE.NB_AFFAIRES_EN_COURS.toString(),
            Enum.Indicateur.CODE.NB_PROPOSITIONS_EN_COURS.toString(),
            Enum.Indicateur.CODE.POTENTIEL_PROSPECT.toString()];

        export const INDICATEUR_PANIER_FORCAGE: Array<string> = [
            Enum.Indicateur.CODE.SEG_RELATIONNELLE.toString(),
            Enum.Indicateur.CODE.DATE_DERNIER_ENTRETIEN.toString(),
            Enum.Indicateur.CODE.DATE_DERNIER_RDV.toString(),
            Enum.Indicateur.CODE.DATE_PROCHAIN_RDV.toString(),
            Enum.Indicateur.CODE.NB_RDV_ANNEE_EN_COURS.toString(),
            Enum.Indicateur.CODE.NB_RDV_12_MOIS_GLISSANTS.toString()];

        export const INDICATEUR_EN_EURO: Array<string> = [
            Enum.Indicateur.CODE.PNB_3112.toString(),
            Enum.Indicateur.CODE.PNB_N.toString(),
            Enum.Indicateur.CODE.PNB_N_MOINS_1.toString(),
            Enum.Indicateur.CODEREL.PNB_3112.toString(),
            Enum.Indicateur.CODEREL.PNB_N.toString(),
            Enum.Indicateur.CODEREL.PNB_N_MOINS_1.toString()
        ];

        export const INDICATEUR_TAG: Array<string> = [
            Enum.Indicateur.CODE.CLIENTPROSPECT.toString(),
            Enum.Indicateur.CODE.ACTIF.toString(),
            Enum.Indicateur.CODE.EQUIPE.toString(),
            Enum.Indicateur.CODE.LEADER.toString(),
            Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TEXTE.toString()
            //    Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TAG.toString()
        ];

        export const INDICATEUR_CEER_MANUELLEMENT: Array<string> = [
            Enum.Indicateur.CODEREL.REV_NB_SSFAMILLES_PROPOSE.toString(),
            Enum.Indicateur.CODEREL.PNB_3112.toString(),
            Enum.Indicateur.CODEREL.PNB_N.toString(),
            Enum.Indicateur.CODEREL.PNB_N_MOINS_1.toString(),
            Enum.Indicateur.CODEREL.PNB_N_MOINS_1.toString(),
            Enum.Indicateur.CODEREL.NB_AFFAIRES_EN_COURS.toString(),
            Enum.Indicateur.CODEREL.NB_PROPOSITIONS_EN_COURS.toString(),
            Enum.Indicateur.CODEREL.NB_APPETENCES.toString(),
            Enum.Indicateur.CODEREL.SEG_RELATIONNELLE_GROUPE.toString(),
            Enum.Indicateur.CODEREL.REV_DATE_DERNIERE_REVUE.toString(),
            Enum.Indicateur.CODEREL.ENCOURS_BDF.toString()
        ];

        export const LISTE_COMPARATEUR_COMMUNE: Array<Enum.Filtre.COMPARATEUR> = [
            Enum.Filtre.COMPARATEUR.SUPERIEUR,
            Enum.Filtre.COMPARATEUR.INFERIEUR,
            Enum.Filtre.COMPARATEUR.EGALE,
            Enum.Filtre.COMPARATEUR.ENTRE,
            Enum.Filtre.COMPARATEUR.NC
        ];

        export const LISTE_COMPARATEUR_INTERVAL: Array<Enum.Filtre.COMPARATEUR> = [
            Enum.Filtre.COMPARATEUR.SUPERIEUR,
            Enum.Filtre.COMPARATEUR.INFERIEUR,
            Enum.Filtre.COMPARATEUR.ENTRE,
            Enum.Filtre.COMPARATEUR.NC
        ];

        export const LISTE_COMPARATEUR_DERNIERE_REVUE: Array<Enum.Filtre.COMPARATEUR> = [
            Enum.Filtre.COMPARATEUR.ECHUE,
            Enum.Filtre.COMPARATEUR.ENCOURS,
            Enum.Filtre.COMPARATEUR.NONREALISEE
        ];

        export const LISTE_COMPARATEUR: Array<Enum.Filtre.COMPARATEUR> = [
            Enum.Filtre.COMPARATEUR.ECHUE,
            Enum.Filtre.COMPARATEUR.EGALE,
            Enum.Filtre.COMPARATEUR.ENCOURS,
            Enum.Filtre.COMPARATEUR.ENTRE,
            Enum.Filtre.COMPARATEUR.INFERIEUR,
            Enum.Filtre.COMPARATEUR.NC,
            Enum.Filtre.COMPARATEUR.NONREALISEE,
            Enum.Filtre.COMPARATEUR.SUPERIEUR
        ];

        export const LISTE_INDICATEUR_NUMERIQUE: Array<Enum.Indicateur.TYPE> = [
            Enum.Indicateur.TYPE.NOMBRE,
            Enum.Indicateur.TYPE.MONTANT,
            Enum.Indicateur.TYPE.POURCENT
        ];

        export const LISTE_OPERATEURS_FILTRE: Array<Enum.Filtre.OPERATEUR> = [
            Enum.Filtre.OPERATEUR.ET,
            Enum.Filtre.OPERATEUR.OU
        ];

        export const LISTE_TOTAL_INDICATEUR: Array<Modeles.Application.IIndicateurType> = [
            {
                "code": Enum.Indicateur.CODE.CA_N_MOINS_1.toString(),
                "codeRest": Enum.Indicateur.CODEREST.CA_N_MOINS_1.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.CA_N_MOINS_1.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.CA,
                "codePreference": Enum.Indicateur.CODEPREF.CA_N_MOINS_1.toString()
            }, {
                "code": Enum.Indicateur.CODE.CA_N.toString(),
                "codeRest": Enum.Indicateur.CODEREST.CA_N.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.CA_N.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.CA,
                "codePreference": Enum.Indicateur.CODEPREF.CA_N.toString()
            }, {
                "code": Enum.Indicateur.CODE.CLIENTPROSPECT.toString(),
                "codeRest": "",
                "codeRel": Enum.Indicateur.CODEREL.CLIENTPROSPECT.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.CLIENTPROSPECT.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": false,
                "codePreference": Enum.Indicateur.CODEPREF.CLIENTPROSPECT.toString()
            }, {
                "code": Enum.Indicateur.CODE.ACTIF.toString(),
                "codeRest": Enum.Indicateur.CODEREST.ACTIF.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.ACTIF.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": false,
                "codePreference": Enum.Indicateur.CODEPREF.ACTIF.toString()
            }, {
                "code": Enum.Indicateur.CODE.EQUIPE.toString(),
                "codeRest": Enum.Indicateur.CODEREST.ACTIF.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.NON_EQUIPE.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": false,
                "codePreference": Enum.Indicateur.CODEPREF.SANS_CONTRAT.toString()
            }, {
                "code": Enum.Indicateur.CODE.LEADER.toString(),
                "codeRest": Enum.Indicateur.CODEREST.ACTIF.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.LEADER.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": false,
                "codePreference": Enum.Indicateur.CODEPREF.LEADER.toString()
            }, {
                "code": Enum.Indicateur.CODE.FLUX_CREDITEURS_N.toString(),
                "codeRest": Enum.Indicateur.CODEREST.FLUX.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.FLUX_CREDITEURS_N.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.FLUX,
                "codePreference": Enum.Indicateur.CODEPREF.FLUX_CREDITEURS_N.toString()
            }, {
                "code": Enum.Indicateur.CODE.FLUX_CREDITEURS_N_MOINS_1.toString(),
                "codeRest": Enum.Indicateur.CODEREST.FLUX.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.FLUX_CREDITEURS_N_MOINS_1.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.FLUX,
                "codePreference": Enum.Indicateur.CODEPREF.FLUX_CREDITEURS_N_MOINS_1.toString()
            }, {
                "code": Enum.Indicateur.CODE.FLUX_DEBITEURS_N.toString(),
                "codeRest": Enum.Indicateur.CODEREST.FLUX.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.FLUX_DEBITEURS_N.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.FLUX,
                "codePreference": Enum.Indicateur.CODEPREF.FLUX_DEBITEURS_N.toString()
            }, {
                "code": Enum.Indicateur.CODE.FLUX_DEBITEURS_N_MOINS_1.toString(),
                "codeRest": Enum.Indicateur.CODEREST.FLUX.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.FLUX_DEBITEURS_N_MOINS_1.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.FLUX,
                "codePreference": Enum.Indicateur.CODEPREF.FLUX_DEBITEURS_N_MOINS_1.toString()
            }, {
                "code": Enum.Indicateur.CODE.OBJECTIF_FLUX.toString(),
                "codeRest": Enum.Indicateur.CODEREST.OBJECTIF_FLUX.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.POURCENT,
                "intitule": Enum.Indicateur.INTITULE.OBJECTIF_FLUX.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.FLUX,
                "codePreference": Enum.Indicateur.CODEPREF.OBJECTIF_FLUX.toString()
            },
            {
                "code": Enum.Indicateur.CODE.PART_FLUX_CONFIES_CRED.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PART_FLUX_CONFIES_CRED.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.POURCENT,
                "intitule": Enum.Indicateur.INTITULE.PART_FLUX_CONFIES_CRED.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.FLUX,
                "codePreference": Enum.Indicateur.CODEPREF.PART_FLUX_CONFIES_CRED.toString()
            }, {
                "code": Enum.Indicateur.CODE.PART_FLUX_CONFIES_DEB.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PART_FLUX_CONFIES_DEB.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.POURCENT,
                "intitule": Enum.Indicateur.INTITULE.PART_FLUX_CONFIES_DEB.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.FLUX,
                "codePreference": Enum.Indicateur.CODEPREF.PART_FLUX_CONFIES_DEB.toString()
            }, {
                "code": Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                "intitule": Enum.Indicateur.INTITULE.PREMIER_EQUIPEMENT.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.OPPORTUNITES,
                "codePreference": Enum.Indicateur.CODEPREF.PREMIER_EQUIPEMENT.toString()
            }, {
                "code": Enum.Indicateur.CODE.BEGACLI.toString(),
                "codeRest": Enum.Indicateur.CODEREST.BEGACLI.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.BEGACLI,
                "intitule": Enum.Indicateur.INTITULE.BEGACLI.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.OPPORTUNITES,
                "codePreference": Enum.Indicateur.CODEPREF.BEGACLI.toString()
            }, {
                "code": Enum.Indicateur.CODE.NB_AFFAIRES_EN_COURS.toString(),
                "codeRest": Enum.Indicateur.CODEREST.AFFAIRES_EN_COURS.toString(),
                "codeRel": Enum.Indicateur.CODEREL.NB_AFFAIRES_EN_COURS.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.NB_AFFAIRES_EN_COURS.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.OPPORTUNITES,
                "codePreference": Enum.Indicateur.CODEPREF.NB_AFFAIRES_EN_COURS.toString()
            }, {
                "code": Enum.Indicateur.CODE.NB_APPETENCES.toString(),
                "codeRest": Enum.Indicateur.CODEREST.NB_APPETENCES.toString(),
                "codeRel": Enum.Indicateur.CODEREL.NB_APPETENCES.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.NB_APPETENCES.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.OPPORTUNITES,
                "codePreference": Enum.Indicateur.CODEPREF.NB_APPETENCES.toString()
            }, {
                "code": Enum.Indicateur.CODE.NB_PROPOSITIONS_EN_COURS.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PROPOSITIONS_EN_COURS.toString(),
                "codeRel": Enum.Indicateur.CODEREL.NB_PROPOSITIONS_EN_COURS.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.NB_PROPOSITIONS_EN_COURS.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.OPPORTUNITES,
                "codePreference": Enum.Indicateur.CODEPREF.NB_PROPOSITIONS_EN_COURS.toString()
            }, {
                "code": Enum.Indicateur.CODE.PNB_3112.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PNB_3112.toString(),
                "codeRel": Enum.Indicateur.CODEREL.PNB_3112.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.PNB_3112.toString() + moment().subtract(1, "year").format("YYYY"),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.PNB,
                "codePreference": Enum.Indicateur.CODEPREF.PNB_3112.toString()
            }, {
                "code": Enum.Indicateur.CODE.PNB_N.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PNB_N.toString(),
                "codeRel": Enum.Indicateur.CODEREL.PNB_N.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.PNB_N.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.PNB,
                "codePreference": Enum.Indicateur.CODEPREF.PNB_N.toString()
            }, {
                "code": Enum.Indicateur.CODE.PNB_N_MOINS_1.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PNB_N_MOINS_1.toString(),
                "codeRel": Enum.Indicateur.CODEREL.PNB_N_MOINS_1.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.PNB_N_MOINS_1.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.PNB,
                "codePreference": Enum.Indicateur.CODEPREF.PNB_N_MOINS_1.toString()
            }, {
                "code": Enum.Indicateur.CODE.POTENTIEL_PROSPECT.toString(),
                "codeRest": Enum.Indicateur.CODEREST.POT_PROS.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.POTENTIEL_PROSPECT.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.PROSPECTION,
                "codePreference": Enum.Indicateur.CODEPREF.POTENTIEL_PROSPECT.toString()
            }, {
                // NOUVEL INDICATEUR score activation
                "code": Enum.Indicateur.CODE.SCORE_ACTIVATION.toString(),
                "codeRest": Enum.Indicateur.CODEREST.SCORE_ACTIVATION.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.SCORE_ACTIVATION.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.PROSPECTION,
                "codePreference": Enum.Indicateur.CODEPREF.SCORE_ACTIVATION.toString()
            }, {
                // NOUVEL INDICATEUR score appétence
                "code": Enum.Indicateur.CODE.SCORE_APPETENCE.toString(),
                "codeRest": Enum.Indicateur.CODEREST.SCORE_APPETENCE.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.SCORE_APPETENCE.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.PROSPECTION,
                "codePreference": Enum.Indicateur.CODEPREF.SCORE_APPETENCE.toString()
            }, {
                // NOUVEL INDICATEUR score défaillance
                "code": Enum.Indicateur.CODE.SCORE_DEFAILLANCE.toString(),
                "codeRest": Enum.Indicateur.CODEREST.SCORE_DEFAILLANCE.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.SCORE_DEFAILLANCE.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.PROSPECTION,
                "codePreference": Enum.Indicateur.CODEPREF.SCORE_DEFAILLANCE.toString()
            }, {
                "code": Enum.Indicateur.CODE.DATE_DERNIER_ENTRETIEN.toString(),
                "codeRest": "",
                "codeRel": Enum.Indicateur.CODEREL.DATE_DERNIER_ENTRETIEN.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                "intitule": Enum.Indicateur.INTITULE.DATE_DERNIER_ENTRETIEN.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RENDEZ_VOUS,
                "codePreference": Enum.Indicateur.CODEPREF.DATE_DERNIER_ENTRETIEN.toString()
            }, {
                "code": Enum.Indicateur.CODE.DATE_DERNIER_RDV.toString(),
                "codeRest": "",
                "codeRel": Enum.Indicateur.CODEREL.DATE_DERNIER_RDV.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                "intitule": Enum.Indicateur.INTITULE.DATE_DERNIER_RDV.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RENDEZ_VOUS,
                "codePreference": Enum.Indicateur.CODEPREF.DATE_DERNIER_RDV.toString()
            }, {
                "code": Enum.Indicateur.CODE.NB_RDV_12_MOIS_GLISSANTS.toString(),
                "codeRest": "",
                "codeRel": Enum.Indicateur.CODEREL.NB_RDV_12_MOIS_GLISSANTS.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.NB_RDV_12_MOIS_GLISSANTS.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RENDEZ_VOUS,
                "codePreference": Enum.Indicateur.CODEPREF.NB_RDV_12_MOIS_GLISSANTS.toString()
            }, {
                "code": Enum.Indicateur.CODE.NB_RDV_ANNEE_EN_COURS.toString(),
                "codeRest": "",
                "codeRel": Enum.Indicateur.CODEREL.NB_RDV_ANNEE_EN_COURS.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.NB_RDV_ANNEE_EN_COURS.toString() + moment().format("YYYY"),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RENDEZ_VOUS,
                "codePreference": Enum.Indicateur.CODEPREF.NB_RDV_ANNEE_EN_COURS.toString()
            }, {
                "code": Enum.Indicateur.CODE.DATE_PROCHAIN_RDV.toString(),
                "codeRest": "",
                "codeRel": Enum.Indicateur.CODEREL.DATE_PROCHAIN_RDV.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                "intitule": Enum.Indicateur.INTITULE.DATE_PROCHAIN_RDV.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RENDEZ_VOUS,
                "codePreference": Enum.Indicateur.CODEPREF.DATE_PROCHAIN_RDV.toString()
            }, {
                "code": Enum.Indicateur.CODE.REV_DATE_DERNIERE_REVUE.toString(),
                "codeRest": Enum.Indicateur.CODEREST.REVUE.toString(),
                "codeRel": Enum.Indicateur.CODEREL.REV_DATE_DERNIERE_REVUE.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                "intitule": Enum.Indicateur.INTITULE.REV_DATE_DERNIERE_REVUE.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.REVUE,
                "codePreference": Enum.Indicateur.CODEPREF.REV_DATE_DERNIERE_REVUE.toString()
            }, {
                "code": Enum.Indicateur.CODE.REV_NB_SSFAMILLES_PROPOSE.toString(),
                "codeRest": Enum.Indicateur.CODEREST.REVUE.toString(),
                "codeRel": Enum.Indicateur.CODEREL.REV_NB_SSFAMILLES_PROPOSE.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                "intitule": Enum.Indicateur.INTITULE.REV_NB_SSFAMILLES_PROPOSE.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.REVUE,
                "codePreference": Enum.Indicateur.CODEPREF.REV_NB_SSFAMILLES_PROPOSE.toString()
            }, {
                "code": Enum.Indicateur.CODE.REV_VALIDEE_PAR.toString(),
                "codeRest": Enum.Indicateur.CODEREST.REVUE.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.REV_VALIDEE_PAR.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.REVUE,
                "codePreference": Enum.Indicateur.CODEPREF.REV_VALIDEE_PAR.toString()
            },
            { // XXXXXX ENCOURS_BDF supprimé en attendant le budget
                "code": Enum.Indicateur.CODE.ENCOURS_BDF.toString(),
                "codeRest": Enum.Indicateur.CODEREST.ENCOURS_BDF.toString(),
                "codeRel": Enum.Indicateur.CODEREL.ENCOURS_BDF.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": Enum.Indicateur.INTITULE.ENCOURS_BDF.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RISQUE,
                "codePreference": Enum.Indicateur.CODEPREF.ENCOURS_BDF.toString()
            },
            {
                "code": Enum.Indicateur.CODE.NOTE_BALE2.toString(),
                "codeRest": Enum.Indicateur.CODEREST.NOTE_BALE2.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.NOTE_BALE2.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RISQUE,
                "codePreference": Enum.Indicateur.CODEPREF.NOTE_BALE2.toString()
            },
            {
                "code": Enum.Indicateur.CODE.PART_ENGAG.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PART_ENGAG.toString(),
                "codeRel": Enum.Indicateur.CODEREL.PART_ENGAG.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.POURCENT,
                "intitule": Enum.Indicateur.INTITULE.PART_ENGAG.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RISQUE,
                "codePreference": Enum.Indicateur.CODEPREF.PART_ENGAG.toString()
            }, {
                "code": Enum.Indicateur.CODE.PROCHAINE_REVISION.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PROCHAINE_REVISION.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                "intitule": Enum.Indicateur.INTITULE.PROCHAINE_REVISION.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RISQUE,
                "codePreference": Enum.Indicateur.CODEPREF.PROCHAINE_REVISION.toString()
            }, {
                "code": Enum.Indicateur.CODE.TOP_CC.toString(),
                "codeRest": Enum.Indicateur.CODEREST.TOP_CC.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.TOP_CC.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.RISQUE,
                "codePreference": Enum.Indicateur.CODEPREF.TOP_CC.toString()
            }, {
                "code": Enum.Indicateur.CODE.MARCHE.toString(),
                "codeRest": "",
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.MARCHE.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.SEGMENTATION,
                "codePreference": Enum.Indicateur.CODEPREF.MARCHE.toString()
            }, {
                "code": Enum.Indicateur.CODE.SEG_RELATIONNELLE.toString(),
                "codeRest": "",
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.SEG_RELATIONNELLE.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.SEGMENTATION,
                "codePreference": Enum.Indicateur.CODEPREF.SEG_RELATIONNELLE.toString()
            }, {
                "code": Enum.Indicateur.CODE.SEG_RELATIONNELLE_GROUPE.toString(),
                "codeRest": Enum.Indicateur.CODEREST.SEG_RELATIONNELLE_GROUPE.toString(),
                "codeRel": Enum.Indicateur.CODEREL.SEG_RELATIONNELLE_GROUPE.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.SEG_RELATIONNELLE_GROUPE.toString(),
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": Enum.Indicateur.FAMILLE.SEGMENTATION,
                "codePreference": Enum.Indicateur.CODEPREF.SEG_RELATIONNELLE_GROUPE.toString()
            }, { 
                "code": Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TAG.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                "intitule": Enum.Indicateur.INTITULE.PREMIER_EQUIPEMENT_TAG.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": false,
                "codePreference": Enum.Indicateur.CODEPREF.PREMIER_EQUIPEMENT_TAG.toString()
            }, {
                // indicateur équivalent à PREMIER_EQUIPEMENT_TAG de type date
                // PREMIER_EQUIPEMENT_TAG contient une date ou NC
                // PREMIER_EQUIPEMENT_TEXTE contient Oui si une date est présente, Non si NC
                "code": Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TEXTE.toString(),
                "codeRest": Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TEXTE.toString(),
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": Enum.Indicateur.INTITULE.PREMIER_EQUIPEMENT_TEXTE.toString(),
                "estUniquementVueClients": true,
                "estVisibleColonne": false,
                "codePreference": Enum.Indicateur.CODEPREF.PREMIER_EQUIPEMENT_TEXTE.toString()
            }
        ];
    }
}