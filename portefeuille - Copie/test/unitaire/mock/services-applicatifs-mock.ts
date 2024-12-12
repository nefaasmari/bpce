module Portefeuille.Tests.Mocks {
    "use strict";

    export function getAuthentificationInfo() {
        return {
            "codeEtablissement": "13135",
            "numeroStationTravail": "P0PRS833",
            "ENVIRON": "DUA",
            "agentConnecte": {
                "referenceExterneAgent": "0078068",
                "typeFonction": "ZZZ",
                "numeroInterneEds": "1134856",
                "typeEds": "001",
                "numeroEdsSuperieur": "0093670",
                "typeEdsRattachement": "002",
                "referenceExterneEdsRattachemen": "0143319",
                "LICEE1": null,
                "numeroExterneEds": "1134856",
                "libelleEds": "SUIVI ET PILOTAGE RISQUES CREDIT",
                "designationLongueAgent": "MR VESSEREAU YANNIS",
                "libelleTypeEds": "SERVICE",
                "designationPosteFonctionnel": "FONCTION CLONEE",
                "codeCivilite": "3",
                "nomFamillePersonnePhysique": "VESSEREAU",
                "prenom": "YANNIS",
                "nomUsagePersonnePhysique": "",
                "adresseMessagerie": "",
                "identifiantInterneSite": "0001500",
                "ligne2Adresse": "",
                "ligne3Adresse": "",
                "ligne4Adresse": "10 AVENUE MAXWELL",
                "ligne5Adresse": "BP 22306",
                "ligne6Adresse": "31023 TOULOUSE CEDEX 1",
                "NODATP": null,
                "codeInseePays": "99000",
                "dateDebutValidite": "22072018",
                "dateFinValidite": "31122099",
                "codeQualiteAgent": "T",
                "codeIndicateurFinStructure": "0",
                "dateDebutValiditeReferentiel": ""
            },
            "guichetAgent": {
                "codeGuichetInterbancaire": "",
                "numeroEdsGuichet": "",
                "referenceExterneEdsGuichet": "",
                "typeEdsGuichet": "",
                "DAGXOP": null
            }
        }
    }

    export function getListeEds() {
        return {
            "listeAgents": [{
                "codeEtablissement": "13135",
                "identifiantElementStructure": 1151905,
                "referenceElementStructure": 1151905,
                "designationAgent": "MR VESSEREAU YANNIS",
                "dateDebutValiditeAgent": "2018-11-21",
                "dateFinValiditeAgent": "2032-12-31",
                "typeFonction": "038",
                "libelleFonction": "CHARGE D AFFAIRES ENTREPRISES",
                "identifiantEDSHierarchique": 41639,
                "referenceEDSHierarchique": 648,
                "typeEDSHierarchique": "003",
                "libelleTypeEDSHierarchique": "AGENCE",
                "libelleEDSHierarchique": "GRISOLLES",
                "identifiantAgent": "0078068",
                "indicateurAgentNonNominatif": null,
                "typePersonnalisation": null,
                "indicateurAffectationTemporaire": null,
                "indicateurNonElligibiliteRDV": null
            }]
        }
    }

    export const SEGMENTATION_RELATIONNELLE_PRO_REST: Array<Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePro> = [
        <Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePro>{
            codeSegmentation: "codeSegmentation_0**",
            libelleSegmentation: "libelleSegmentation_0",
            pourcentageNombreDeClients: 30
        },
        <Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePro>{
            codeSegmentation: "codeSegmentation_1**",
            libelleSegmentation: "libelleSegmentation_1",
            pourcentageNombreDeClients: 40
        },
        <Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePro>{
            codeSegmentation: "codeSegmentation_2**",
            libelleSegmentation: "libelleSegmentation_2",
            pourcentageNombreDeClients: 50
        }
    ];

    export const SEGMENTATION_RELATIONNELLE_PRO: Array<Modeles.ApplicationStats.ISegmentationRelationnelle> = [
        <Modeles.ApplicationStats.ISegmentationRelationnelle>{
            code: "code_PRO_0",
            libelle: Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_PRO_LARGEMENT_CAPTE,
            pourcentage: 25
        },
        <Modeles.ApplicationStats.ISegmentationRelationnelle>{
            code: "code_PRO_1",
            libelle: Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_PRO_NON_CAPTE,
            pourcentage: 30
        },
        <Modeles.ApplicationStats.ISegmentationRelationnelle>{
            code: "code_PRO_2",
            libelle: Portefeuille.Constantes.Application.LIBELLE_AGGLOMERAT_PRO_PARTIELLEMENT_CAPTE,
            pourcentage: 45
        }
    ];
    export const SEGMENTATION_RELATIONNELLE_PMEESI: Array<Modeles.ApplicationStats.ISegmentationRelationnelle> = [
        <Modeles.ApplicationStats.ISegmentationRelationnelle>{
            code: "code_PMEESI_0",
            libelle: "libelle_PMEESI_0",
            pourcentage: 25
        },
        <Modeles.ApplicationStats.ISegmentationRelationnelle>{
            code: "code_PMEESI_1",
            libelle: "libelle_PMEESI_1",
            pourcentage: 30
        },
        <Modeles.ApplicationStats.ISegmentationRelationnelle>{
            code: "code_PMEESI_2",
            libelle: "libelle_PMEESI_2",
            pourcentage: 45
        }
    ];

    export const STATS_REVUE_ET_PORTEFEUILLE: Modeles.ApplicationStats.IRdvPtf = <Modeles.ApplicationStats.IRdvPtf>{
        nombreClients: 456,
        nombreClientsActifs: 123,
        nombreProspects: 234,
        nombreRelations: 21,
        nombreClientsPMEESI: 12,
        nombreClientsPro: 23,
        nombreClientsAutres: 56,
        listeSegmentationsPMEESI: Portefeuille.Tests.Mocks.SEGMENTATION_RELATIONNELLE_PMEESI,
        listeSegmentationsPro: Portefeuille.Tests.Mocks.SEGMENTATION_RELATIONNELLE_PRO,
        nombreRdvProspectAnneeCivile: 87,
        nombreRdvProspectAnneeEnCours: 78,
        nombreRdvRelationEcoClient: 24,
        rdvTauxVisite: 59
    };
}