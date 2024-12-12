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
     identifiant selon la nomenclature Banque de France de l'entit� correspondant � l'�tablissement
     */
    codeEtablissementFinancier: string;
    /*
     code du mode de mise en gestion du P/S.
MEGI - mise en gestion imm�diate
VPC - vente par correspondance
     */
    codeModeMiseGestion: string;
    /*
     code du canal de r�alisation de l'acte
     */
    codeCanal: string;
    /*
     typologie de march� d'entreprise concern� par l'acte
     */
    codeTypeMarcheEntreprise: string;
    /*
     Liste des actes
     */
    listeActes: Array<string>;
  }

  export interface IDocumentActe {
    /*
     D�termine un document-type.
     */
    codeTypeDocument: string;
    /*
     code d�crivant la nature de la pi�ce justificative
     */
    codeNaturePJ: string;
    /*
     D�termine une cat�gorie de justificatifs
     */
    codeTypeJustificatif: string;
    /*
     D�termine la nature d'un document dans le catalogue de la GED     
Correspond au niveau le plus fin caract�risant un 
document
     */
    codeNatureGED: string;
    /*
     code de la maquette IDocXML permettant de g�n�rer le document
     */
    codeTechniqueImpression: string;
    /*
     Cet indicateur pr�cise si le document est obligatoire  
pour l'acte
     */
    indicateurDocumentObligatoire: boolean;
    /*
     Cet indicateur pr�cise si le document est obligatoire  
pour la contractualisation.
     */
    indicateurNonMaterialisation: boolean;
    /*
     D�termine un attributaire-type d�tenteur d'un
document                           
                                                         
            Valeurs :                                    
 '01'       Contrat                                      
 '02'       Personne                                     
 '05'       Relation �conomique                          
 '06'       Demande de financement                       
 '07'       Client Bancaire
     */
    codeTypeAttributaireDocument: string;
    /*
     code de l'application qui permet la g�n�ration du document
     */
    codeApplicationTechniqueEdition: string;
    /*
     code de la maquette. Elle est � associer au code application (outil) qui permet la g�n�ration du document
     */
    codeMaquette: string;
    /*
     indique si le document fait partie du R�f�rentiel des documents d'entreprise
     */
    indicateurDocumentEntreprise: boolean;
    /*
     libell� de description du document dans le R�f�rentiel des documents entreprise
     */
    libelleDocumentEntreprise: string;
    /*
     libell� externe associ� au document entreprise
     */
    libelleExterneDocumentEntreprise: string;
    /*
     identifiant dans la GED du document d'entreprise.
     */
    identifiantDocumentGED: string;
    /*
     typologie des documents telle qu'elle est r�f�renc�e dans l'ICG (Infrastructure de Confiance Groupe). 
Un document a un type de document pour l'ICG, lors de la signature �lectronique
     */
    codeTypeDocumentICG: string;
    /*
     code indiquant le type de fichier associ� au type de document. Permettra de savoir sous quelle forme l'application doit fournir le ficher (XML, PDF, ...)
     */
    codeTypeFichier: string;
    /*
     mode de contractualisation de l'acte pour le dcumnt
     */
    codeModeContractualisation: string;
    /*
     code de comportement du document pour l'acte de gestion, lors de la contractualisation  �lectronique via l'ICG
                                                            
Valeurs :                                        
  '00'       Document � signer                                
  '01'       A pr�senter au client                            
  '02'       R�serv� Caisse
     */
    codeActionSignatureDocument: string;
    /*
     Indique si le document est en cours de partage dans    
ICG (Interface de Confiance Groupe).                   
"true" lorsque le doc est partag�,       
'false" d�s que la suppression de partage est ok.
     */
    indicateurPartageDocumentICG: boolean;
    /*
     Regroupement d'actes de gestion de niveau      
processus/op�ration dans la gestion des pi�ces 
justificatives
     */
    codeFamilleActe: string;
    /*
     D�termine un objet (produit/service ou prestation)    
trait� par un acte de gestion dans la gestion des     
dossiers de num�risation
     */
    codeObjetActe: string;
    /*
     Libell� de d�signation du type de document. Il sera utilis� lors de la contractualisation
     */
    libelleDocumentContract: string;
    /*
     Indique si les documents rattach�s � une classe de 
document pourront �tre utilis�s dans le processus  
de signature �lectronique
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
     Nombre mini exemplaires doc/ �dition
     */
    nbMiniExemplairesDocEdition: number;
    /*
     Nombre  exemplaires  par d�faut / �dition
     */
    nbExemplairesParDefautEdition: number;
    /*
     Indicateur modif �dition nombre exemplaires.
     */
    indicateurModifNbExemplaire: boolean;
    /*
     Nombre maxi exemplaires doc/ �dition
     */
    nbMaxiExemplairesDocEdition: number;
    /*
     Ordre priorit� utilisation
     */
    ordrePrioriteUtilisation: number;
    /*
     libell� section regroupement document
     */
    libelleSectionRegDoc: string;
  }

}
