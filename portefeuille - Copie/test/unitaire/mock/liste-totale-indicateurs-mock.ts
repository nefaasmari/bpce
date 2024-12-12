module Portefeuille.Tests.Mocks {
    "use strict";

    export const LISTE_TOTALE_INDICATEURS: Array<Modeles.Application.IIndicateurType> = [
        {
            "code": "codeTypePersonne",
            "codeRest": "",
            "estUniquementVueClients": false,
            "estVisibleColonne": false,
            "intitule": "Client/Prospect",
            "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
            "codePreference": "A"
        },
        {
            "code": "chiffreAffaire",
            "codeRest": "CA_N",
            "estUniquementVueClients": false,
            "estVisibleColonne": true,
            "intitule": "CA/Budget",
            "typeIndicateur": Enum.Indicateur.TYPE.MONTANT,
            "codePreference": "B"
        },
        {
            "code": "libelleCourtSegmentMarche",
            "codeRest": "",
            "estUniquementVueClients": true,
            "estVisibleColonne": true,
            "intitule": "Marché",
            "typeIndicateur": Enum.Indicateur.TYPE.TEXTE,
            "codePreference": "C"
        }
    ];
}