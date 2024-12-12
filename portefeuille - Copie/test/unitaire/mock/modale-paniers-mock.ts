module Portefeuille.Tests.Mocks.ModalePaniers {
    "use strict";

    export const LISTE_TOTALE_INDICATEURS: Array<any> = [{
        "code": "codeTypePersonne",
        "codeRest": "",
        "typeIndicateur": "Texte",
        "intitule": "Client/Prospect",
        "estUniquementVueClients": false,
        "estVisibleColonne": false
    }, {
        "code": "chiffreAffaire",
        "codeRest": "CA_N",
        "typeIndicateur": "Montant",
        "intitule": "CA/Budget ",
        "estUniquementVueClients": true,
        "estVisibleColonne": true,
        "famille": "CA"
    }, {
        "code": "libelleCourtSegmentMarche",
        "codeRest": "",
        "typeIndicateur": "Texte",
        "intitule": "Marché",
        "estUniquementVueClients": true,
        "estVisibleColonne": true,
        "famille": "Segmentation"
    }, {
        "code": "DateDernierEntretien",
        "codeRest": "",
        "codeRel": "DateDernierEntretienRel",
        "typeIndicateur": "Date",
        "intitule": "Dernier CR",
        "estUniquementVueClients": false,
        "estVisibleColonne": true,
        "famille": "Rendez vous"
    }, {
        "code": "DateDernierRdv",
        "codeRest": "",
        "codeRel": "DateDernierRdvRealiseRel",
        "typeIndicateur": "Date",
        "intitule": "Dernier RDV",
        "estUniquementVueClients": false,
        "estVisibleColonne": true,
        "famille": "Rendez vous"
    }, {
        "code": "DateProchainRdv",
        "codeRest": "",
        "codeRel": "DateProchainRdvRel",
        "typeIndicateur": "Date",
        "intitule": "Prochain RDV",
        "estUniquementVueClients": false,
        "estVisibleColonne": true,
        "famille": "Rendez vous"
    }, {
        "code": "NbRdvAnneeEncours",
        "codeRest": "",
        "codeRel": "NbRdvAnneeEncoursRel",
        "typeIndicateur": "Nombre",
        "intitule": "RDV 2019",
        "estUniquementVueClients": false,
        "estVisibleColonne": true,
        "famille": "Rendez vous"
    }, {
        "code": "NbRdvSur12moisGliss",
        "codeRest": "",
        "codeRel": "NbRdvSur12moisGlissRel",
        "typeIndicateur": "Nombre",
        "intitule": "RDV 12 derniers M",
        "estUniquementVueClients": false,
        "estVisibleColonne": true,
        "famille": "Rendez vous"
    }, {
        "code": "noteBale2",
        "codeRest": "BAL2",
        "typeIndicateur": "Texte",
        "intitule": "Note Bâle II",
        "estUniquementVueClients": true,
        "estVisibleColonne": true,
        "famille": "Risque"
        }];

    export const LISTE_FILTRES_CLIENTS: Array<any> = [];

    export const LISTE_FILTRES_RELATION_ECO: Array<any> = [];

    export const LISTE_PANIERS: Array<any> = [{
        "nom": "Panier 1",
        "listeChoixIndicateurs": [{
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "chiffreAffaire",
                "codeRest": "CA_N",
                "typeIndicateur": "Montant",
                "intitule": "CA/Budget ",
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": "CA"
            }
        }, {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "libelleCourtSegmentMarche",
                "codeRest": "",
                "typeIndicateur": "Texte",
                "intitule": "Marché",
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": "Segmentation"
            }
        }, {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "DateDernierEntretien",
                "codeRest": "",
                "codeRel": "DateDernierEntretienRel",
                "typeIndicateur": "Date",
                "intitule": "Dernier CR",
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": "Rendez vous"
            }
        }, {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "DateDernierRdv",
                "codeRest": "",
                "codeRel": "DateDernierRdvRealiseRel",
                "typeIndicateur": "Date",
                "intitule": "Dernier RDV",
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": "Rendez vous"
            }
        }]
    }];
    
    export const LISTE_PANIERS_MAX: Array<any> = [{
        "nom": "Panier 1",
        "listeChoixIndicateurs": [{
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "chiffreAffaire",
                "codeRest": "CA_N",
                "typeIndicateur": "Montant",
                "intitule": "CA/Budget ",
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": "CA"
            }
        }, {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "libelleCourtSegmentMarche",
                "codeRest": "",
                "typeIndicateur": "Texte",
                "intitule": "Marché",
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": "Segmentation"
            }
        }, {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "DateDernierEntretien",
                "codeRest": "",
                "codeRel": "DateDernierEntretienRel",
                "typeIndicateur": "Date",
                "intitule": "Dernier CR",
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": "Rendez vous"
            }
        }, {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "DateDernierRdv",
                "codeRest": "",
                "codeRel": "DateDernierRdvRealiseRel",
                "typeIndicateur": "Date",
                "intitule": "Dernier RDV",
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": "Rendez vous"
            }
        }, {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "NbRdvSur12moisGliss",
                "codeRest": "",
                "codeRel": "NbRdvSur12moisGlissRel",
                "typeIndicateur": "Nombre",
                "intitule": "RDV 12 derniers M",
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": "Rendez vous"
            }
        }, {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "NbRdvAnneeEncours",
                "codeRest": "",
                "codeRel": "NbRdvAnneeEncoursRel",
                "typeIndicateur": "Nombre",
                "intitule": "RDV 2019",
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "famille": "Rendez vous"
            }
        }]
    }];

    export const LISTE_CODES_INDICATEURS_PANIER_INIT: Array<any> = ["chiffreAffaire", "libelleCourtSegmentMarche", "NbRdvAnneeEncours", "DateDernierEntretien", "DateDernierRdv", "noteBale2"];

    export const LISTE_ECART_INDICATEURS_PARAMETRABLES: Array<any> = [{
        "code": "noteBale2",
        "codeRest": "BAL2",
        "typeIndicateur": "Texte",
        "intitule": "Note Bâle II",
        "estUniquementVueClients": true,
        "estVisibleColonne": true,
        "famille": "Risque"
    }];

    export const TUILE_CATALOGUE_SETTINGS: any = {
        "id": 753150060080,
        "estEnEdition": false,
        "indicateur": {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "chiffreAffaire",
                "codeRest": "CA_N",
                "typeIndicateur": "Montant",
                "intitule": "CA/Budget ",
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": "CA"
            }
        }
    };

    export const TUILE_PANIER_SETTINGS: any = {
        "id": 562751706260,
        "estEnEdition": false,
        "indicateur": {
            "choisi": true,
            "desactive": null,
            "indicateur": {
                "code": "chiffreAffaire",
                "codeRest": "CA_N",
                "typeIndicateur": "Montant",
                "intitule": "CA/Budget ",
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "famille": "CA"
            }
        }
    };
}