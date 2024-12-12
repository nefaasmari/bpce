declare module Myway.Ressource.coffresFortsNumeriques.recherche {
    
     export interface ICoffreFortNumerique {
          /**
           * Code �tablissement bancaire
           */
          codeBanque: string;
          /**
           * Identifiant du contrat de Coffre-Fort Num�rique.
           * Num�ro de chrono attribu� par le syst�me : 
           *      - R�f�rence unique dans MySys.
           *      - Compostage �tablie par le WebService.
           */
          identifiantCFN: string;
          /**
           * Indique le statut du Coffre-Fort Num�rique.
           *      - '0' : CFN Ouvert
           *      - '1' : CFN Clos.
           */
          codeSatutCFN: string;
          /**
           * Date de souscription du Coffre-Fort Num�rique.
           * Type date au format yyyy-MM-dd
           */
          dateSouscriptionCFN: string;
          /**
           * Date de cl�ture du Coffre-Fort Num�rique.
           * Type date au format yyyy-MM-dd
           */
          dateClotureCFN: string;
          /**
           * Identifiant externe du Coffre-Fort Num�rique.
           * R�f�rence national unique (BP & CE) attribu� par l'application Coffre-Fort Num�rique (WebService).
           * Format : 
           *      - "FR"
           *      - cl�
           *      - code �tablissement
           *      - Identifiant Coffre-Fort Num�rique.
           */
          identifiantISAN: string;
          /**
           * Num�ro d'identification d'un client d�tenteur de contrat(s) de produit/service dans le SI d'un Etablissement bancaire ou financier sur la plateforme Mysys (Client bancaire)
           */
          numeroEntiteTitulaire: number;
          /**
           * Code banque du compte de pr�l�vement (tarification).
           */
          codeBanqueCptPrelevement: string;
          /**
           * Code guichet du compte de pr�l�vement (tarification).
           */
          codeGuichetCptPrelevement: string;
          /**
           * Num�ro du compte de pr�l�vement (tarification).
           */
          numeroCptPrelevement: string;
        }
      
        export interface IListeCFN {
          coffresFortsNumeriques: Array<ICoffreFortNumerique>;
        }
}
