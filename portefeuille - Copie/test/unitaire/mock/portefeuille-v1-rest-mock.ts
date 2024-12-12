module Portefeuille.Tests.Mocks {
    "use strict";

    export const DONNEE_SIGNIFIANTE: Modeles.Rest.PortefeuilleV1.recherche.IDonneeSignifiante = {
        "identifiantPortefeuille": 5014161,
        "codeTypePortefeuille": "N",
        "indicateurAffectation": "O",
        "identifiantElementStructurePortefeuille": 41639,
        "libelleElementStructurePortefeuille": "GRISOLLES",
        "identifiantElementStructureSuiviPortefeuille": 1151905,
        "libelleElementStructureSuiviPortefeuille": "MR VESSEREAU YANNIS",
        "libellePortefeuille": "Portefeuille 1"
    };

    export const REPONSE_RECHERCHE_PORTEFEUILLE_REST: Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche = {
        "CodeEtablissement": "13135",
        "IdentifiantElementStructure": 601637,
        "DonneeSignifiante": [
            {
                "identifiantPortefeuille": 65406,
                "codeTypePortefeuille": "N",
                "indicateurAffectation": "O",
                "identifiantElementStructurePortefeuille": 41407,
                "libelleElementStructurePortefeuille": "MIRANDE",
                "identifiantElementStructureSuiviPortefeuille": 601637,
                "libelleElementStructureSuiviPortefeuille": "ME ESTEBENET JULIE",
                "libellePortefeuille": "MIRANDE",
                codeSuiviComplementaire: "",
                libelleSuiviComplementaire: ""
            },
            {
                "identifiantPortefeuille": 5011687,
                "codeTypePortefeuille": "N",
                "indicateurAffectation": "O",
                "identifiantElementStructurePortefeuille": 41396,
                "libelleElementStructurePortefeuille": "AUCH LIBERATION",
                "identifiantElementStructureSuiviPortefeuille": 601637,
                "libelleElementStructureSuiviPortefeuille": "ME ESTEBENET JULIE",
                "libellePortefeuille": "AUCH LIBERATION",
                codeSuiviComplementaire: "",
                libelleSuiviComplementaire: ""
            },
            {
                "identifiantPortefeuille": 0,
                "codeTypePortefeuille": "N",
                "indicateurAffectation": "O",
                "identifiantElementStructurePortefeuille": 41396,
                "libelleElementStructurePortefeuille": "AUCH LIBERATION",
                "identifiantElementStructureSuiviPortefeuille": 601637,
                "libelleElementStructureSuiviPortefeuille": "ME ESTEBENET JULIE",
                "libellePortefeuille": "AUCH LIBERATION",
                codeSuiviComplementaire: "006",
                libelleSuiviComplementaire: "FLUX"
            },
            {
                "identifiantPortefeuille": 0,
                "codeTypePortefeuille": "N",
                "indicateurAffectation": "O",
                "identifiantElementStructurePortefeuille": 41396,
                "libelleElementStructurePortefeuille": "AUCH LIBERATION",
                "identifiantElementStructureSuiviPortefeuille": 601637,
                "libelleElementStructureSuiviPortefeuille": "ME ESTEBENET JULIE",
                "libellePortefeuille": "AUCH LIBERATION",
                codeSuiviComplementaire: "001",
                libelleSuiviComplementaire: "MIDDLE"
            }
        ]
    }
}