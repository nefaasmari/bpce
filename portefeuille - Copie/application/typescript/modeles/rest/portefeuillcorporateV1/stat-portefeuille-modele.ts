declare module Portefeuille.Modeles.Rest.PortefeuillCorporateV1.statPortefeuille {
    export interface IStatPortefeuilleParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure Suivi Par.
         */
        identifiantEds: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
    }

    export interface IPortefeuilleRdv {
        /**
         * Nombre de clients total (non prospects).
         */
        nombreClients: number;
        /**
         * Nombre de cliens actifs.
         */
        nombreClientsActifs: number;
        /**
         * Nombre de prospects.
         */
        nombreProspects: number;
        /**
         * Nombre de relations économiques (toutes catégories confondues).
         */
        nombreRelationsEconomiques: number;
        /**
         * Nombre de clients de type Entreprises - ESI.
         */
        nombreClientsTypePmeEsi: number;
        /**
         * Nombre de clients de type Entreprises - ESI. Dont clients PE et PEES
         */
        nombreClientsTypePEetPEES: number;
        /**
         * Nombre de clients de type Entreprises - ESI. Dont clients ME et MEES
         */
        nombreClientsTypeMEetMEES: number;
        /**
         * Nombre de clients de type Entreprises - ESI. Dont clients GE et GEES
         */
        nombreClientsTypeGEetGEES: number;
        /**
         * Nombre de clients de type PRO (EI inclus).
         */
        nombreClientsTypeProEi: number;
        /**
         * Nombre de clients de type Autres (ni Entreprise - ESI, PRO, EI).
         */
        nombreClientsTypeAutre: number;
        /**
         * Nombre de rendez vous réalisés pour des prospects depuis le 1er janvier de l'année en cours.
         */
        nbRdvProspectRealiseAnneeCivile: number;
        /**
         * Nombre de prospects qui ont un RDV réalisé (donc avec un CRE) depuis le 1er janvier de l'année en cours.
         */
        nbProspectsVusAnneeEncours: number;
        /**
         * Nombre de relations éco dont le leader est client (non prospect) qui ont un RDV validé (donc avec un CRE) depuis le 1er janvier de l'année en cours.
         */
        nbRelEcoClientVuesAnneeEncours: number;
        /**
         * Nombre de rendez-vous réalisés sur l'année en cours (depuis le 1er janvier) pour
         * les relations économiques de type "clients" (dont le leader est client) / nb de relations  économiques de type "clients" (dont le leader est client) au jour J.
         */
        tauxDeVisite: number;
        /**
         * Le nombre total de clients qui ont une segmentation calculée dans le(s) portefeuille(s).
         */
        nombreTotalClientsSegmentation: number;
        /**
         * Nombre de rendez-vous client.
         */
        nbRdvClient: number;
        /**
         * Nombre de client vus.
         */
        nbClientsVus: number;
        /**
         * Nombre de Clients non équipés
         */
        nbClientsNonEquipe: number;
        /**
         * Nombre Clients PE et PEES
         */
        nbClientsPePees: number;
        /**
         * Nombre Clients ME et MEES
         */
        nbClientsMeMees: number;
        /**
         * Nombre Clients GE et GEES
         */
        nbClientsGeGees: number;
        /**
         * Nombre de Clients avec Produit Service
         */
        nbClientsAvecProduitService: number;
        /**
         * Nombre de Clients sans contrat et prospect.
         */
        nbClientsSansContratEtProspect: number;
    }

    export interface ISegmentationRelationnellePmeEsi {
        /**
         * Valeurs : 
         * - A_ACQU : A Acquérir  
         * - A_DEVP : A Développer
         * - A_FIDE  : A Fidéliser 
         * - A_GERE : A Gérer     
         * - A_PRES : A Préserver 
         * - A_SURV : A Surveiller
         * - NONAFF : Non concerné
         */
        codeSegmentation: string;
        /**
         * Libellé segmentation.
         * Valeurs : A Acquérir, A Développer, A Fidéliser, A Gérer, A Préserver, A Surveiller, Non Concerné.
         */
        libelleSegmentation: string;
        /**
         * Pourcentage nombre de clients des portefeuilles dans segmentation.
         */
        pourcentageNombreDeClients: number;
    }

    export interface IStatPortefeuille {
        portefeuilleRdv: IPortefeuilleRdv;
        listeSegmentationRelationnellePmeEsi: Array<ISegmentationRelationnellePmeEsi>;
        listeSegmentationRelationnellePro: Array<ISegmentationRelationnellePro>;
    }

    export interface ISegmentationRelationnellePro {
        /**
         * Valeurs :
         * - SCI : Société Civile Immobilière
         * - MED* : Médium PRO Faiblement ou non Capté
         * - MED** : Médium PRO Partiellement Capté
         * - MED*** : Médium PRO Fortement Capté
         * - LRG* : Large PRO Faiblement ou non Capté
         * - LRG** : Large PRO Partiellement Capté 
         * - LRG*** : Large PRO Fortement Capté
         * - MED_ER : Médium PRO Entrée en Relation
         * - MED_RK : Médium PRO Risqué
         * - LRG_ER : Large PRO Entrée en Relation
         * - RG_RK : Large PRO Risqué
         * - SML* : Small PRO Faiblement ou non Capté
         * - SML** : Small PRO Partiellement Capté
         * - SML*** : Small PRO Fortement Capté
         * - PLR_ER : PLR Entrée en Relation
         * - PLR_RK : PLR Risqué
         * - SML_ER : Small PRO Entrée en Relation 
         * - SML_RK : Small PRO Risqué
         * - PLR* : PLR Faiblement ou non Capté
         * - PLR** : PLR Partiellement Capté
         * - PLR*** : PLR Fortement Capté 
         * - noncalNon : Calculé 
         * - NONAFF : Non Concerné
         */
        codeSegmentation: string;
        /**
         * Libellé segmentation.
         * Valeurs :
         * Société Civile Immobilière, Médium PRO Faiblement ou non Capté, Médium PRO Fortement Capté ...
         */
        libelleSegmentation: string;
        /**
         * Pourcentage nombre de clients des portefeuilles dans segmentation.
         */
        pourcentageNombreDeClients: number;
    }
};