module Portefeuille.Tests.Mocks {
    "use strict";

    export const LISTE_FILTRES_POUR_CLIENTS: Array<any> = [
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
        }
    ];

    export const LISTE_FILTRES_POUR_RELATION_ECO: Array<any> = [{
        "id": 1114298806605,
        "indicateur": {
            "indicateur": {
                "code": "NbRdvSur12moisGlissRel",
                "typeIndicateur": "Nombre",
                "intitule": "Nb RDV (12 derniers M)"
            },
            "utilise": false,
            "utiliseRelationEco": true,
            "listeValeurs": []
        },
        "comparateur": "=",
        "valeurUnique": 2
    }];

    export const LISTE_FILTRES_TYPES_IFILTRE: Array<Modeles.Application.IFiltre> = [
        <Modeles.Application.IFiltre>{
            id: 0,
            indicateur: null,
            comparateur: Enum.Filtre.COMPARATEUR.EGALE,
            operateur: Enum.Filtre.OPERATEUR.ET,
            valeurUnique: 0,
            valeurMultiple1: 0,
            valeurMultiple2: 0
        },
        <Modeles.Application.IFiltre>{
            id: 1,
            indicateur: <Modeles.Application.IIndicateurFiltre>{
                indicateur: <Modeles.Application.IIndicateurType>{
                    code: "code",
                    codeRel: "codeRel",
                    codeRest: "codeRest",
                    typeIndicateur: Enum.Indicateur.TYPE.TEXTE,
                    intitule: "intitule",
                    estUniquementVueClients: true,
                    estVisibleColonne: true,
                    famille: Enum.Indicateur.FAMILLE.PNB,
                    codePreference: "codePref"
                },
                listeValeurs: [],
                utilise: false,
                utiliseRelationEco: false,
                estPanier: false
            },
            comparateur: Enum.Filtre.COMPARATEUR.ENTRE,
            operateur: Enum.Filtre.OPERATEUR.OU,
            valeurUnique: 0,
            valeurMultiple1: 0,
            valeurMultiple2: 0
        },
        <Modeles.Application.IFiltre> {
            id: 1,
            indicateur: <Modeles.Application.IIndicateurFiltre>{
                indicateur: <Modeles.Application.IIndicateurType>{
                    code: "code",
                    codeRel: "codeRel",
                    codeRest: "codeRest",
                    typeIndicateur: Enum.Indicateur.TYPE.MONTANT,
                    intitule: "intitule",
                    estUniquementVueClients: true,
                    estVisibleColonne: true,
                    famille: Enum.Indicateur.FAMILLE.PNB,
                    codePreference: "codePref"
                },
                listeValeurs: [],
                utilise: false,
                utiliseRelationEco: false,
                estPanier: false
            },
            comparateur: Enum.Filtre.COMPARATEUR.ENTRE,
            operateur: Enum.Filtre.OPERATEUR.OU,
            valeurUnique: 0,
            valeurMultiple1: -1,
            valeurMultiple2: -1
        },
        <Modeles.Application.IFiltre>{
            id: 1,
            indicateur: <Modeles.Application.IIndicateurFiltre>{
                indicateur: <Modeles.Application.IIndicateurType>{
                    code: "code",
                    codeRel: "codeRel",
                    codeRest: "codeRest",
                    typeIndicateur: Enum.Indicateur.TYPE.MONTANT,
                    intitule: "intitule",
                    estUniquementVueClients: true,
                    estVisibleColonne: true,
                    famille: Enum.Indicateur.FAMILLE.PNB,
                    codePreference: "codePref"
                },
                listeValeurs: [],
                utilise: false,
                utiliseRelationEco: false,
                estPanier: false
            },
            comparateur: Enum.Filtre.COMPARATEUR.INFERIEUR,
            operateur: Enum.Filtre.OPERATEUR.OU,
            valeurUnique: -1,
            valeurMultiple1: 0,
            valeurMultiple2: 0
        },
        <Modeles.Application.IFiltre>{
            id: 1,
            indicateur: <Modeles.Application.IIndicateurFiltre>{
                indicateur: <Modeles.Application.IIndicateurType>{
                    code: "code",
                    codeRel: "codeRel",
                    codeRest: "codeRest",
                    typeIndicateur: Enum.Indicateur.TYPE.MONTANT,
                    intitule: "intitule",
                    estUniquementVueClients: true,
                    estVisibleColonne: true,
                    famille: Enum.Indicateur.FAMILLE.PNB,
                    codePreference: "codePref"
                },
                listeValeurs: [],
                utilise: false,
                utiliseRelationEco: false,
                estPanier: false
            },
            comparateur: null,
            operateur: Enum.Filtre.OPERATEUR.OU,
            valeurUnique: -1,
            valeurMultiple1: 0,
            valeurMultiple2: 0
        },
        <Modeles.Application.IFiltre>{
            id: 1,
            indicateur: <Modeles.Application.IIndicateurFiltre>{
                indicateur: <Modeles.Application.IIndicateurType>{
                    code: "code",
                    codeRel: "codeRel",
                    codeRest: "codeRest",
                    typeIndicateur: null,
                    intitule: "intitule",
                    estUniquementVueClients: true,
                    estVisibleColonne: true,
                    famille: Enum.Indicateur.FAMILLE.PNB,
                    codePreference: "codePref"
                },
                listeValeurs: [],
                utilise: false,
                utiliseRelationEco: false,
                estPanier: false
            },
            comparateur: null,
            operateur: Enum.Filtre.OPERATEUR.OU,
            valeurUnique: -1,
            valeurMultiple1: 0,
            valeurMultiple2: 0
        },
        <Modeles.Application.IFiltre>{
            id: 1,
            indicateur: <Modeles.Application.IIndicateurFiltre>{
                indicateur: <Modeles.Application.IIndicateurType>{
                    code: "code",
                    codeRel: "codeRel",
                    codeRest: "codeRest",
                    typeIndicateur: null,
                    intitule: "intitule",
                    estUniquementVueClients: true,
                    estVisibleColonne: true,
                    famille: Enum.Indicateur.FAMILLE.PNB,
                    codePreference: "codePref"
                },
                listeValeurs: [],
                utilise: false,
                utiliseRelationEco: false,
                estPanier: false
            },
            comparateur: null,
            operateur: null,
            valeurUnique: -1,
            valeurMultiple1: 0,
            valeurMultiple2: 0
        }

    ];
}