declare module Myway.Ressource.ConsultationIdn {
    export interface IDocumentIdntAttributaire {
        /**
         * Identifiant   document    IDN
         */
        idDocumentIdn: string;
        /**
         * Identifiant attributaire
         */
        idAttributaire: string;
        /**
         * Intitulé attributaire
         */
        intituleAttributaire: string;
        /**
         * Code type attributaire
         */
        codeTypeAttributaire: string;
        /**
         * Code Type Document
         */
        codeTypeDoc: string;
    }

    export interface IRecupererDocumentsIdntAttributaireOutput {
        /**
         * Identifiant acte IDN
         */
        idActeIdn: string;
        /**
         * Code retour
         */
        codeRetour: number;
        /**
         * Libelle retour
         */
        libelleRetour: string;
        /**
         * Documents
         */
        listeDocuments: Array<IDocumentIdntAttributaire>;
    }

    export interface IDocumentIdn {
        /**
         * Nom Document IDN
         */
        nomDocument: string;
        /**
         * Identifiant Document Ged
         */
        identifiantDocumentGed: string;
        /**
         * Mode Usage
         * 0: Eléctronqiue et Papier
         * 1: Papier
         * 2: Eléctronique
         */
        modeUsage: string;
        /**
         * Code Type
         */
        codeType: string;
        /**
         * Identifiant Nature PJ
         */
        identifiantNaturePJ: string;
        /**
         * Type Mime
         */
        typeMime: string;
        /**
         * Description
         */
        description: string;
        /**
         * Nombre Exemplaire Impression
         */
        nombreExemplaireImpression: number;
        /**
         * Nombre Exemplaire Impression Minimum
         */
        nombreExemplaireImpressionMin: number;
        /**
         * Nombre Exemplaire Impression Maximum
         */
        nombreExemplaireImpressionMax: number;
    }

    export interface IRecupererDocumentsIdnOutput {
        /**
         * Code Retour
         */
        codeRetour: number;
        /**
         * Libelle Message
         */
        libelleMessage: string;
        /**
         * ListeDocument
         */
        listeDocument: Array<IDocumentIdn>;
    }

    export interface IRspnStatutActe {
        /**
         * Id acte IDN
         */
        idActeIdn: string;
        /**
         * Etat de l’acte :
         * E =>  A signer
         * C => Acte annulé
         * Autres valeurs => Acte déjà signé
         */
        codeEtatActe: string;
        /**
         * Mode choisi pour l’acte
         */
        codeModeContractualisation: string;
        /**
         * Libellé de l’acte de gestion
         */
        libelleActe: string;
        /**
         * Référence du contrat
         */
        numeroContrat: string;
    }

    export interface IGetStatutActesOutput {
        /**
         * 0 si OK, autre valeur sinon
         */
        codeRetour: string;
        /**
         * Libelle erreur si CodeRetour <> 0
         */
        libelleRetour: string;
        /**
         * listeRspnStatutActe
         */
        listeRspnStatutActe: Array<IRspnStatutActe>;
    }

}
