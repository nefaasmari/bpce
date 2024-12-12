
declare module socleCommunPlacementsModule {
    var app: any;
}

declare module socleCommunPlacementsModule {
    class ContexteGGHOConstantes {
        static cleContexte: string;
    }
}

declare module socleCommunPlacementsModule {
    interface IContexteGGHO {
        codeEtablissementConnexion?: string;
        codeGuichetConnexion?: string;
        codeEntite: string;
        codeCanal: string;
        codeActeGestion: string;
        codeApplicationAppelante: string;
        identifiantEntiteTitulaire: number;
        codeProduitService: number;
        numeroPersonneIdentifiee: number;
        codeEtablissementContrat: string;
        codeSensCommunication?: string;
        codeProduitServiceOffre?: number;
        numeroOffreSouscrite?: number;
        identifiantDossierVente?: number;
        listeIdentifiantsEntitesTitulaires?: number[];
        codeModeDeVente?: string;
        codeProcessusDeVente?: string;
        agent?: MyWay.Services.Context.AgentConnecte;
        codeProduit?: string;
        codeSousFamilleActeGestion?: string;
        codeTypeProduitServiceOffre?: string;
        codeTypeProduitServiceContrat?: string;
        referenceProduitServiceContrat?: string;
        codeGuichetContrat?: string;
    }
}

declare module socleCommunPlacementsModule {
    /**
     * Service de gestion des particuliers
     */
    class ContexteGGHOService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Ajoute le contexte GGHO passé en paramètre dans le contexte partagé
         * @param contexteGGHO Le contexte GGHO à ajouter au contexte partagé
         */
        setContexteGGHO(contexteGGHO: IContexteGGHO): ng.IPromise<boolean>;
    }
}

declare module socleCommunPlacementsModule {
    /**
     * Service de gestion des particuliers
     */
    class ParticulierService {
        constructor();
        /**
         * TODO
         * @param input TODO
         */
        todo(input: string): string;
    }
}

declare module socleCommunPlacementsModule {
    /**
     * Service de gestion des particuliers
     */
    class RIBService {
        private $q;
        static $inject: string[];
        constructor($q: ng.IQService);
        /**
         * Extrait le code établissement d'un RIB
         * @param rib Le RIB à partir duquel extraire le code établissement
         */
        extractCodeEtablissement(rib: string): string;
        /**
         * Extrait le code guichet d'un RIB
         * @param rib Le RIB à partir duquel extraire le code guichet
         */
        extractCodeGuichet(rib: string): string;
        /**
         * Extrait le code produit d'un RIB
         * @param rib Le RIB à partir duquel extraire le code produit
         */
        extractCodeProduit(rib: string): string;
        /**
         * Extrait le radical d'un RIB
         * @param rib Le RIB à partir duquel extraire le radical
         */
        extractRadical(rib: string): string;
        /**
         * Extrait la clé modulo d'un RIB
         * @param rib Le RIB à partir duquel extraire la clé modulo
         */
        extractCleModulo(rib: string): string;
        /**
         * Extrait la clé RIB d'un RIB
         * @param rib Le RIB à partir duquel extraire la clé RIB
         */
        extractCleRIB(rib: string): string;
        /**
         * Extrait le numéro de compte
         * @param rib Le RIB à partir duquel extraire le numéro de compte
         */
        extractNumeroCompte(rib: string): string;
    }
}
