/*
import { RessourceSyntheseV2InformationClient } from '../models/synthesev2.informationClient.models';

export const infoClientMock: RessourceSyntheseV2InformationClient.InformationClient = {
    coordonnees: null,
    titreSousTitre: {
        designationCourteClient: 'XX XXXXX XXXXX',
        dateDeNaissance: '0001-01-01',
        codeTypeSituationFamille: null,
        libelleSituationFamille: null,
        codeCategorieSocioProfessionnel: null,
        libelleProfession: null,
        libelleCSP: null,
        identifiantEDSDomiciliation: 259,
        typeEDSDomiciliation: '003',
        libelleEDSDomiciliation: 'PME PMI COMPTES HGA',
        identifiantEDSSuiviPar: 82930,
        typeEDSSuiviPar: '001',
        libelleEDSSuiviPar: 'MR DALLA NORA FREDERICK',
        dateEntreeEnRelation: '1997-06-06',
        typeSegmentationMarche: '201501',
        codeSegmentationMarche: 'MN',
        libelleSegmentationMarche: 'ENT Hold.',
        typeSegmentationRelation: 'BM',
        dateCalculSegmentationRelation: '2012-01-01',
        codeSegmentationRelation: 'A_DEVP',
        libelleSegmentationRelation: null,
        codeSegmentationActive: null,
        typeUnivers: null,
        codeUnivers: null,
        dateCalculSegmentationActive: null,
        codeSuiviGP: null,
        libelleSuiviGP: null,
        identifiantEDSSuiviGP: 0,
        typeEDSSuiviGP: null,
        libelleEDSSuiviGP: null,
        descriptionSuiviGP: null,
        dateDebutSuiviGP: null,
        listeDetailMarche: [],
        detailSuiviPar: null,
        listeDetailSegmentationActive: [],
        listeDetailSegmentationPro: [
            {
                numeroClient: 9052457,
                libelleClient: 'PEINTURES MAESTRIOUUUUU',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_ACQU',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Acquérir',
                descriptionSegmentation1: 'Clients avec une faible activité en CE mais avec un potentiel externe avéré',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057481,
                libelleClient: 'HNEJYZ',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057482,
                libelleClient: 'grthgrt',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057483,
                libelleClient: 'jiu;ku;',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057484,
                libelleClient: 'zevfv gr',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057485,
                libelleClient: 'bggnbnnn retbrtgb',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057486,
                libelleClient: 'zefpomlvfev',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057487,
                libelleClient: 'POPOPOojjk',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057488,
                libelleClient: 'uyuuyuiiii',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 9057489,
                libelleClient: 'mmpkijffdff',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 90574811,
                libelleClient: 'evfrfeeerv',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            },
            {
                numeroClient: 90574812,
                libelleClient: 'versss vvr',
                typeSegmentationProfessionnelle: 'BM',
                codeSegmentationProfessionnelle: 'A_DEVP',
                dateCalculSegmentation: '2019-06-30',
                libelleSegmentation: 'A Développer',
                descriptionSegmentation1: 'Clients dont l\'équipement et/ou les flux confiés peuvent être améliorés',
                descriptionSegmentation2: null
            }
        ],
        listeDetailSegmentationRelation: [],
        codeReperePro: null,
        libelleReperePro: null,
        villeNaissance: null,
        paysNaissance: null,
        codeInseeNaissance: null
    },
    entretien: {
        codeMediaEntretien: null,
        libelleMediaEntretien: null,
        codeMotifEntretien: null,
        libelleMotifEntretien: null,
        codeCanalEntretien: null,
        libelleCanalEntretien: null,
        codeSensEntretien: null,
        libelleSensEntretien: null,
        dateEntretien: null,
        codeMediaProchainEntretien: null,
        libelleMotifProchainEntretien: null,
        dateProchainEntretien: null,
        indicateurExistenceProchainRDV: null,
        libelleMediaProchainEntretien: null
    },
    opportunite: {
        numeroPersonne: 7905303,
        designationCourteClient: '',
        nombreOpportunitesClient: 2,
        commentaireOpportunite: 'bla bla',
        nombreDVetPropositionClient: 0
    },
    alerte: {
        codeEtatCompletudeDRC: null,
        indicateurAlerteDRC: null,
        libelleEtatDRC: null,
        indicateurNPAI: null,
        codeClientFragile: null,
        libelleClientFragile: null,
        scoreVigilance: null,
        libelleScoreVigilance: null,
        codeEckert: null,
        dateDeces: null,
        indicateurOpposition: null,
        codeContentieux: null,
        montantContentieux: null,
        indicateurATD: null,
        indicateurReclamation: null,
        indicateurInterditBancaire: null,
        codePresenceRPM: null,
        libellePresenceRPM: null,
        nombreRejetMAD: null,
        indicateurReglementaireEpargne: null,
        indicateurAlerteLEP: null,
        indicateurAlertePEL: null,
        listeDetailReglementaireEpargne: [],
        listeDetailAlerteRPM: [],
        listeDetailDRC: [],
    },
    indicateur: {
        codeEtatCompletudeDRC: null,
        indicateurAlerteDRC: null,
        libelleEtatDRC: null,
        niveauRisqueInvestisseur: null,
        dateMesureRisqueInvestisseur: null,
        competenceFinanciere: null,
        dateDernierQCF: null,
        indicateurSocietaire: null,
        codeSLE: null,
        libelleSLE: null,
        dateDerniereEnquete: null,
        codeNiveauSatisfaction: null,
        libelleNiveauSatisfaction: null,
        codeAppartenanceReseau: null,
        libelleAppartenanceReseau: null,
        scoreVigilance: null,
        libelleScoreVigilance: null,
        noteBaleII: null,
        detailNoteBaleII: null,
        codeStatutPPE: null,
        libelleStatutPPE: null,
        listeDetailEnqueteSatisfaction: [],
        indicateurEngagementDom: null,
        libelleEngagementDom: null,
        listeDetailEngagementDom: [],
        detailCompetenceFinanciere: null
    }
};
*/
