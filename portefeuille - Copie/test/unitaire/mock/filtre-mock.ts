module Portefeuille.Tests.Mocks {
    "use strict";

    export const FILTRE_TYPE_TEXTE: any = 
    {
        "id": 339597026381,
        "indicateur": {
            "indicateur": {
                "code": "libelleCourtSegmentMarche",
                "typeIndicateur": "Texte",
                "intitule": "Marché"
            },
            "utilise": true,
            "utiliseRelationEco": false,
            "listeValeurs": [{
                "libelle": "MEES Santé",
                "actif": true
            }, {
                "libelle": "Pro AC",
                "actif": true
            }]
        }
    };

    export const FILTRE_TYPE_NOMBRE_VAL_UNIQUE: any =
    {
        "id": 393428260990,
        "indicateur": {
            "indicateur": {
                "code": "chiffreAffaire",
                "typeIndicateur": "Montant",
                "intitule": "CA/Budget "
            },
            "utilise": true,
            "utiliseRelationEco": false,
            "listeValeurs": []
        },
        "comparateur": ">",
        "valeurUnique": 1000
    };

    export const FILTRE_TYPE_MONTANT_VAL_MULTIPLE: any =
    {
        "id": 774587557883,
        "operateur": "ET",
        "indicateur": {
            "indicateur": {
                "code": "chiffreAffaire",
                "typeIndicateur": "Montant",
                "intitule": "CA/Budget "
            },
            "utilise": true,
            "utiliseRelationEco": false,
            "listeValeurs": []
        },
        "comparateur": "Entre",
        "valeurMultiple1": 10,
        "valeurMultiple2": 10000
    };
}