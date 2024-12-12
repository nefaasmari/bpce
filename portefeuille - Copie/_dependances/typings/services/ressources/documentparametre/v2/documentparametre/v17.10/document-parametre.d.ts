declare module Myway.Ressource.DocumentParametre {
    
  export interface IGetQueryParams {
      codeCanal: string;

      codeModeMiseGestion: string;

      codeTypeMarcheDocumentEntreprise?: string;

      listeActes?: string[];
  }
    
  export interface IDocumentParametre {
    /*
     undefined
     */
    listeDocumentActe: Array<IDocumentActe>;
    /*
     identifiant selon la nomenclature Banque de France de l'entité correspondant à l'établissement
     */
    codeEtablissementFinancier: string;
    /*
     code du mode de mise en gestion du P/S.
MEGI - mise en gestion immédiate
VPC - vente par correspondance
     */
    codeModeMiseGestion: string;
    /*
     code du canal de réalisation de l'acte
     */
    codeCanal: string;
    /*
     typologie de marché d'entreprise concerné par l'acte
     */
    codeTypeMarcheEntreprise: string;
    /*
     Liste des actes
     */
    listeActes: Array<string>;
  }

  export interface IDocumentActe {
    /*
     Détermine un document-type.
     */
    codeTypeDocument: string;
    /*
     code décrivant la nature de la pièce justificative
     */
    codeNaturePJ: string;
    /*
     Détermine une catégorie de justificatifs
     */
    codeTypeJustificatif: string;
    /*
     Détermine la nature d'un document dans le catalogue de la GED     
Correspond au niveau le plus fin caractérisant un 
document
     */
    codeNatureGED: string;
    /*
     code de la maquette IDocXML permettant de générer le document
     */
    codeTechniqueImpression: string;
    /*
     Cet indicateur précise si le document est obligatoire  
pour l'acte
     */
    indicateurDocumentObligatoire: boolean;
    /*
     Cet indicateur précise si le document est obligatoire  
pour la contractualisation.
     */
    indicateurNonMaterialisation: boolean;
    /*
     Détermine un attributaire-type détenteur d'un
document                           
                                                         
            Valeurs :                                    
 '01'       Contrat                                      
 '02'       Personne                                     
 '05'       Relation économique                          
 '06'       Demande de financement                       
 '07'       Client Bancaire
     */
    codeTypeAttributaireDocument: string;
    /*
     code de l'application qui permet la génération du document
     */
    codeApplicationTechniqueEdition: string;
    /*
     code de la maquette. Elle est à associer au code application (outil) qui permet la génération du document
     */
    codeMaquette: string;
    /*
     indique si le document fait partie du Référentiel des documents d'entreprise
     */
    indicateurDocumentEntreprise: boolean;
    /*
     libellé de description du document dans le Référentiel des documents entreprise
     */
    libelleDocumentEntreprise: string;
    /*
     libellé externe associé au document entreprise
     */
    libelleExterneDocumentEntreprise: string;
    /*
     identifiant dans la GED du document d'entreprise.
     */
    identifiantDocumentGED: string;
    /*
     typologie des documents telle qu'elle est référencée dans l'ICG (Infrastructure de Confiance Groupe). 
Un document a un type de document pour l'ICG, lors de la signature électronique
     */
    codeTypeDocumentICG: string;
    /*
     code indiquant le type de fichier associé au type de document. Permettra de savoir sous quelle forme l'application doit fournir le ficher (XML, PDF, ...)
     */
    codeTypeFichier: string;
    /*
     mode de contractualisation de l'acte pour le dcumnt
     */
    codeModeContractualisation: string;
    /*
     code de comportement du document pour l'acte de gestion, lors de la contractualisation  électronique via l'ICG
                                                            
Valeurs :                                        
  '00'       Document à signer                                
  '01'       A présenter au client                            
  '02'       Réservé Caisse
     */
    codeActionSignatureDocument: string;
    /*
     Indique si le document est en cours de partage dans    
ICG (Interface de Confiance Groupe).                   
"true" lorsque le doc est partagé,       
'false" dès que la suppression de partage est ok.
     */
    indicateurPartageDocumentICG: boolean;
    /*
     Regroupement d'actes de gestion de niveau      
processus/opération dans la gestion des pièces 
justificatives
     */
    codeFamilleActe: string;
    /*
     Détermine un objet (produit/service ou prestation)    
traité par un acte de gestion dans la gestion des     
dossiers de numérisation
     */
    codeObjetActe: string;
    /*
     Libellé de désignation du type de document. Il sera utilisé lors de la contractualisation
     */
    libelleDocumentContract: string;
    /*
     Indique si les documents rattachés à une classe de 
document pourront être utilisés dans le processus  
de signature électronique
     */
    indicClasseEligibleSignature: boolean;
    /*
     code Classe Document Entreprise
     */
    codeClasseDocumentEntreprise: string;
    /*
     Code l'acte de gestion
     */
    codeActeGestion: string;
    /*
     Nombre mini exemplaires doc/ édition
     */
    nbMiniExemplairesDocEdition: number;
    /*
     Nombre  exemplaires  par défaut / édition
     */
    nbExemplairesParDefautEdition: number;
    /*
     Indicateur modif édition nombre exemplaires.
     */
    indicateurModifNbExemplaire: boolean;
    /*
     Nombre maxi exemplaires doc/ édition
     */
    nbMaxiExemplairesDocEdition: number;
    /*
     Ordre priorité utilisation
     */
    ordrePrioriteUtilisation: number;
    /*
     libellé section regroupement document
     */
    libelleSectionRegDoc: string;
  }

}
