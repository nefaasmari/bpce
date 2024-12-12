module Portefeuille.Tests.Mocks {
    "use strict";

    export const PANIER: Modeles.Application.IPanier =
    {
        "listeChoixIndicateurs": [
            {
                "choisi": true,
                "desactive": null,
                "indicateur": {
                    "code": "libelleCourtSegmentMarche",
                    "codeRest": "",
                    "estUniquementVueClients": true,
                    "estVisibleColonne": true,
                    "intitule": "Marché",
                    "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                    "codePreference": "C"
                }
            },
            {
                "choisi": true,
                "desactive": null,
                "indicateur": {
                    "code": "chiffreAffaire",
                    "codeRest": "CA_N",
                    "estUniquementVueClients": false,
                    "estVisibleColonne": true,
                    "intitule": "CA/Budget",
                    "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                    "codePreference": "B"
                }
            }
        ],
        "nom": "",
        "estDefaut": true,
        "numero": 1
    }
};