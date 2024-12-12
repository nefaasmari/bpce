declare module Myway.Ressource.coffresFortsNumeriques.recherche {
    
     export interface ICoffreFortNumerique {
          /**
           * Code établissement bancaire
           */
          codeBanque: string;
          /**
           * Identifiant du contrat de Coffre-Fort Numérique.
           * Numéro de chrono attribué par le système : 
           *      - Référence unique dans MySys.
           *      - Compostage établie par le WebService.
           */
          identifiantCFN: string;
          /**
           * Indique le statut du Coffre-Fort Numérique.
           *      - '0' : CFN Ouvert
           *      - '1' : CFN Clos.
           */
          codeSatutCFN: string;
          /**
           * Date de souscription du Coffre-Fort Numérique.
           * Type date au format yyyy-MM-dd
           */
          dateSouscriptionCFN: string;
          /**
           * Date de clôture du Coffre-Fort Numérique.
           * Type date au format yyyy-MM-dd
           */
          dateClotureCFN: string;
          /**
           * Identifiant externe du Coffre-Fort Numérique.
           * Référence national unique (BP & CE) attribué par l'application Coffre-Fort Numérique (WebService).
           * Format : 
           *      - "FR"
           *      - clé
           *      - code établissement
           *      - Identifiant Coffre-Fort Numérique.
           */
          identifiantISAN: string;
          /**
           * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement bancaire ou financier sur la plateforme Mysys (Client bancaire)
           */
          numeroEntiteTitulaire: number;
          /**
           * Code banque du compte de prélèvement (tarification).
           */
          codeBanqueCptPrelevement: string;
          /**
           * Code guichet du compte de prélèvement (tarification).
           */
          codeGuichetCptPrelevement: string;
          /**
           * Numéro du compte de prélèvement (tarification).
           */
          numeroCptPrelevement: string;
        }
      
        export interface IListeCFN {
          coffresFortsNumeriques: Array<ICoffreFortNumerique>;
        }
}
