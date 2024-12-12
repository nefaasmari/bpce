module Portefeuille.Tests.Mocks {
    "use strict";

    export const LISTE_INDICATEURS_CHOIX: Array<Modeles.Application.IIndicateurChoix> = [
        {
            "indicateur": {
                "code": "libelleCourtSegmentMarche",
                "codeRest": "",
                "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
                "intitule": "Marché",
                "estUniquementVueClients": true,
                "estVisibleColonne": true,
                "codePreference": "A"
            },
            "choisi": true,
            "desactive": null
        },
        {
            "indicateur": {
                "code": "chiffreAffaire",
                "codeRest": "CA_N",
                "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
                "intitule": "CA/Budget",
                "estUniquementVueClients": false,
                "estVisibleColonne": true,
                "codePreference": "B"
            },
            "choisi": true,
            "desactive": null
        }
    ];
}