declare module Myway.Ressource.DossierVente.Recherche {
  export interface IActionPossible {
    /**
     * Détermine un acte dans le processus de vente de la gestion des dossiers de vente.                        
     * Une action représente ce qui peut être fait pour faire progresser le processus de vente.                        
     * Une action peut se traduire par un bouton ou une icône  dans l'IHM chargé de clientèle ou dans l'espace client, une action  peut également être disponible uniquement pour les traitements hors IHM.
     * Cette rubrique contient un code action qu'il sera possible d'effectuer sur le dossier.   
     * Exemples : 
     * - VECO : vente confirmée
     * - ANNU : annuler dossier de vente
     * - MIGE : appeler l'application qui réalise la mise en gestion
     */
    codeActionPossible: string;
    /**
     * Libellé associé à un code action, à destination du chargé de clientèle pour IHM MyWay. 
     * Exemples :
     * - 'Imprimer et envoyer' pour le code action DOTR
     * - 'Valider' pour le code action VALI
     */
    libelleActionPossibleAgent: string;
    /**
     * Libellé associé à un code action, à destination du client (dans l'espace client sur internet par exemple).
     * Exemples :
     * - 'Abandon signature électronique'
     */
    libelleActionPossibleClient: string;
    /**
     * détermine le contexte d'une action effectuée sur le poste MyWay.                            
     * Valeurs : 
     * - 'V'        Virtuel (non présenté à l'utilisateur),   
     * - 'O'        Opération (code opération fonctionnelle, appel autre appli ou pop-up),
     * - 'S'        Bouton Spécial (ABAN ANNU),               
     * - 'E'        Action retour Editique (règle spéciale),  
     * - 'B'        Bouton.
     */
    codeTypeActionPossible: string;
    /**
     * Détermine l'action à effectuer en cas de bouton uniquement (codeTypeActionPossible=B). Permet d'optimiser les temps de traitement, et d'éviter des rappels à la ressource pour donner la suite.
     * Pour un bouton, il n’y a toujours qu’un seul code opération fonctionnel possible.
     */
    codeOperationFonctionnelle: string;
    /**
     * Indique le rang d'un bouton associé à une action.
     */
    rangBoutonAction: number;
  }

  export interface IReferenceDossierVente {
    /**
     * Date et heure de référence Catalogue                    
     * Exemple : 
     * - '2015-11-10-14.47.55.788994'
     */
    dateReferenceDossier: string;
    /**
     * Cette rubrique spécifie la dernière entité type de l'organisation ayant modifié le dossier de vente.
     *  Valeurs :                                           
     * - '1' = Agence                                              
     * - '2' = CRC                                                 
     * - '3' = E-Agence                                            
     * - '4' = Internet
     * - '5' = Administratif
     */
    entiteReferenceDossier: string;
    /**
     * Canal de vente de référence      
     *            Exemples:                        
     * 'IN'       Internet                         
     * 'TL'       Téléphone                        
     * 'FF'       Face à face
     */
    canalReferenceDossier: string;
    /**
     * Détermine un processus de vente dans la gestion des dossiers de vente.                                   
     * Un processus de vente est une suite ordonnée d'étapes qui décrivent comment une offre doit être vendue sur un canal de vente bien précis.
     * A chaque dossier de vente, est associé un processus de vente, qui peut être modifié au cours de la vie du dossier.
     * Exemples :
     * - 'FAFA' = Face à face
     * - 'OUSI' = Ouvrir puis signer
     * - 'SIOU' = Signer puis ouvrir
     */
    codeProcessus: string;
  }

  export interface ICompositionDossier {
    /**
     * Nom de la classe objet sans son chemin d'accès qui permet d'identifier la classe objet renseignée dans les données génériques au format JSON, associées à une
     * offre de vente.
     * Ce nom sera préfixé de :
     * - "DATA_" pour les données process métier
     * - "MDEC_" pour les données MDEC, et pour les données de l'écran de consultation. La distinction entre MDEC et l'écran de consultation se fera à l'intérieur des données JSON.
     * - "MDPJ_" pour données sur les pièces justificatives concernant MDEC et l'écran de consultation.                              
     * Exemples :                                 
     * - 'DATA_CompteDeDepot'                     
     * - 'MDEC_OuvertureCB'                       
     * - 'MDEC_AlertEcureuil'
     */
    referenceExterneData: string;
    /**
     * Zone groupe comprenant les données relative à une opération liée à l'offre commerciale souscrite par le client.                         
     * Instance d'une classe objet au format JSON dont le schéma est variable. Elle comprend les éléments, propriétés et les données associées.             
     * Exemples :
     * {"_id":"DataCompte","_data":{"Agence":"00301","NumCompte":"08.0021581.73"}},
     * {"_id":"DataChequier","_data":{"ChoixChequier":"CHEQUIERS","ChoixTypeChequier":"PORTEFEUILLE 42","RenouvellementAuto":"OUI","SeuilRenouvellement":"10","Dotation":1,"AgenceDistribution":"12345","Routage":"ROUTAGE A L'AGENCE"}}
     */
    donneeData: string;
  }

  export interface IDonneePersonne {
    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement. Référence interne MYSYS attribué par le central.                            
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne: number;
    /**
     * Etablit le rôle de l'interlocuteur (personne de la clientèle) lié au dossier de vente : soit le titulaire souscripteur / ordonateur, soit le représentant du titulaire souscripteur...   
     * Exemples :          
     * - '1' = Titulaire                                          
     * - '2' = Représentant légal                                 
     * - '3' = Emprunteur                                         
     * - '4' = Co-Emprunteur
     * - '5' = Co-Titulaire
     */
    codeRoleInterlocuteur: string;
    /**
     * Libellé associé au rôle de la personne liée au dossier de vente.
     * Exemples :
     * - 'Titulaire'         
     * - 'Représentant légal'
     * - 'Emprunteur'        
     * - 'Co-Emprunteur'
     */
    libelleRolePersonne: string;
    /**
     * Cet indicateur permet d'indiquer si la personne liée est signataire du dossier de vente.
     * Valeurs :
     * - 'O'        La personne est signataire       
     * - 'N'        La personne n'est pas signataire
     */
    indicateurPersSignataire: string;
  }

  export interface IEtatDossier {
    /**
     * Détermine un processus de vente dans la gestion des dossiers de vente.                                   
     * Un processus de vente est une suite ordonnée d'étapes qui décrivent comment une offre doit être vendue sur un canal de vente bien précis.
     * A chaque dossier de vente, est associé un processus de vente, qui peut être modifié au cours de la vie du dossier.
     * Exemples :
     * - 'FAFA' = Face à face
     * - 'OUSI' = Ouvrir puis signer
     * - 'SIOU' = Signer puis ouvrir
     */
    codeProcessus: string;
    /**
     * Détermine une phase de vente dans la gestion du dossier de vente.
     * Une phase est le premier niveau de découpage du processus de vente.
     * Exemples:
     * -'SIMU' = Simulation
     * -'PROP' = Proposition 
     * -'CONT' = Contractualisation
     */
    codePhaseVente: string;
    /**
     * Détermine une étape de vente dans la gestion du dossier de vente.                                     
     * Une étape est une tâche/séquence caractéristique du processus de vente durant laquelle une action doit être effectuée par le client ou l'Etablissement.     
     * Une étape peut être l'occasion d'un rebond commercial ou d'un changement de canal.
     * Exemples :
     * - 'CONF' = Confirmation 
     * - 'SGNE' = Signature électronique
     * - 'SGNP' = Signature papier
     */
    codeEtapeVente: string;
    /**
     * Détermine le statut de l'étape du processus de vente à un instant donné.
     * Exemples :
     * - 'VECO' = Vente confirmée 
     * - 'EAMS' = En attente choix mode de signature
     * - 'EASP' = En attente signature client
     * - 'ABAN' = Abandonné client
     */
    codeStatutEtape: string;
    /**
     * Cette rubrique permet de stocker une phrase expliquant de façon claire le statut du dossier de vente.    
     * Exemples :
     * - 'Le client doit donner son accord pour poursuivre'
     * - 'le client doit signer le contrat et renvoyer des pièces'
     */
    libelleStatutActionAMener: string;
    /**
     * Détermine une situation de gestion caractéristique du 
     * dossier de vente.
     * Exemples: 
     * - '01' = Non encore validé
     * - '02' = En attente envoie document
     * - '03' = En attente de retours
     */
    codeMomentVie: string;
    /**
     * Cette rubrique a pour but de stocker la date liée à l'échéance d'une étape d'un dossier de vente.   
     * Exemple :
     * - '2016-01-09'
     * Type date au format yyyy-MM-dd
     */
    dateEcheance: string;
    /**
     * Date et Heure précise du dernier événement d'intervention réalisée au niveau du dossier de vente. 
     * Elle provient du poste client de l'agent commercial.
     * Exemple:
     * -'2019-11-10-17.20.33.666074'
     */
    dateDerniereIntervention: string;
    /**
     * Cette rubrique spécifie le canal de vente sur lequel a eu lieu la dernière modification du dossier de vente, ou sur lequel on souhaite effectuer une simulation (méthode GET, codeActionContexte COCA)
     * 
     * Exemples :
     * - 'TL' = Téléphone
     * - 'FF' = Face à face
     * - 'IN' = Internet
     */
    codeCanalEnCours: string;
    /**
     * Cette rubrique spécifie le sens de la communication dans lequel a eu lieu la dernière modification du dossier de vente, ou dans lequel  on souhaite effectuer une simulation (méthode GET, codeActionContexte COCA). 
     * contact entrant (à l'initiative du client),  
     * contact sortant (à l'initiative de l'Etablissement).
     * 
     * Valeurs :                                           
     * - 'E' = Entrant                                             
     * - 'S' = Sortant
     */
    codeSensCommunicEnCours: string;
  }

  export interface IDonneeDossier {
    /**
     * Identifiant d'un Etablissement du RCE.               
     * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France                                     
     * Exemples :                                           
     * 17515 = CE Ile de France                             
     * 16275 = CE Nord France Europe                        
     * 43199 = Crédit Foncier de France (CFF)
     */
    codeEtablissement: string;
    /**
     * Numéro d'identification du dossier de vente.        
     * Un dossier de vente gère la vente d'une offre à un client donné (souscription de contrat de produit ou service, opération sur un contrat, avenant ...)    
     * Le dossier de vente mémorise les données de la proposition / souscription de l'offre commerciale ou de l'opération : contexte de l'acte et caractéristiques du produit / service.
     * Cet identifiant est attribué par le central-DB2 à la création du dossier de vente.
     * Exemple :
     * - 12413558
     */
    identifiantDossierVente: number;
    /**
     * Référence du dossier fournie par le producteur qui gère l'offre.                                     
     * Cette référence producteur permet d'associer les différents CRE émis par le producteur au dossier de vente concerné.                                
     * Exemples :
     * - 'FFI136593693' = n° FFI pour les Crédits Conso Nafi
     */
    identifiantExterneDossierVente: string;
    /**
     * Code de désignation externe de l'application dans la gestion des dossiers de vente.  
     * Concerne notamment les échanges avec les producteurs.
     * Exemples :                                           
     * - 'BPCEA_IMPACT' : Assurances                         
     * - 'NFI_IZIVENTE' : Natixis & Natixis Financement
     */
    codeExterneApplication: string;
    /**
     * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.  
     * Identifiant produit/service de l'offre principale du dossier de vente.
     */
    identifiantProduit: number;
    /**
     * Numéro d'identification d'une offre de vente du catalogue de distribution de la gestion du dossier de  vente.                              
     * Une offre correspond à une prestation (opération) sur un produit / service.                                    
     * Une offre est associée à un code produit service national.
     * Exemples :
     * - '109' = Souscription offre bouquet liberté
     * - '173' = Souscription Prêt Personnel Auto IZIVENTE
     */
    numeroOffre: number;
    /**
     * Libellé commercial associé à l'offre de vente, vision chargé de clientèle.
     * Exemples :
     * - 'Souscription Bouquet Liberté' pour l'offre 109 
     * - 'Souscription Prêt Personnel Auto IZIVENTE' pour l'offre 173
     */
    libelleOffreVisionAgent: string;
    /**
     * Libellé commercial associé à l'offre de vente, vision client. Exemples :
     * 
     * -'Souscription Bouquet Liberté' pour l'offre 109
     * -'Souscription Prêt Personnel Auto ' pour l'offre 173
     */
    libelleOffreVisionClient: string;
    /**
     * Permet de regrouper les offres de ventes en groupes 
     * simples à appréhender pour l'utilisateur.           
     * Exemples:
     * - '01' = Assurance
     * - '02' = Bancarisation
     * - '03' = Credit
     */
    codeCategorieOffre: string;
    /**
     * Détermine un acte de gestion dans le catalogue des processus/opérations de la gestion bancaire.          
     * Un acte de gestion est une opération sur un produit /service ou une prestation à la clientèle.             
     * Format :  concaténation de code sous famille acte de gestion et code objet acte de gestion     
     * Exemples :
     * - 'AV00000821' = Avenant BOUQUET LIBERTE
     * - 'OU00000761' = OUVERTURE FORFAIT SATELLIS INTEGRAL
     */
    codeActeGestionPrincipal: string;
    /**
     * Libellé de désignation d'un acte de gestion.
     * Exemples de valorisation :
     * - Ouverture Livret A        
     * - Ouverture CAT
     */
    libelleActeGestion: string;
    /**
     * Détermine le mode de vente/gestion du dossier de vente.                                          
     * Valeurs :                                       
     * - 'MEGI' = Mise en gestion immédiate(ouvrir puis signer)                       
     * - 'VPC' = Vente par correspondance(signer puis ouvrir)
     */
    codeModeVente: string;
    /**
     * Détermine si un processus de vente donné concerne la plateforme MyWay.                             
     * Il permet de distinguer les dossiers de vente issus d'un processus VMC, des dossiers de vente issus d'un processus MyWay.                                 
     * Valeurs :      
     * - 'O' = Oui - MyWay                                      
     * - 'N' = Non - Mysys (par défaut)
     */
    indicateurProcessusMyway: string;
    /**
     * Date et heure précise de création du dossier de vente par l'agent.
     * Exemple :
     * - '2015-11-10-14.47.55.788994'
     */
    dateCreationDossier: string;
    /**
     * Date et heure précise de relance du dossier de vente par l'agent.
     * Exemple :
     * - '2015-11-10-14.47.55.788994'
     */
    dateDerniereRelance: string;
    /**
     * Code canal de création du dossier de vente.
     * Exemple : 
     * 
     * - 'FF' = Face à face
     * -'TL' = Téléphone
     */
    codeCanalCreation: string;
    /**
     * Cette rubrique spécifie l'entité type de l'organisation ayant créé le dossier de vente. Valeurs :
     * 
     * -'1' = Agence
     * -'2' = CRC
     * -'3' = E-Agence
     * -'4' = Internet
     * -'5' = Administratif
     */
    codeEntiteCreation: string;
    /**
     * Date et heure à laquelle le dossier de vente est passé à l'état 'confirmé'.
     * Valeurs :
     * - '0001-01-01-00.00.00.000000', dossier non confirmé
     * - si valeur différente de ci-dessus, dossier confirmé 
     * (exemple : '2015-11-10-14.49.09.387646')
     */
    dateConfirmationDossier: string;
    /**
     * Date et heure précise de dernière modification du dossier de vente.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateModificationDossier: string;
    /**
     * Numéro de l'entité titulaire principale du dossier de vente.
     * Une entité titulaire se compose d'une ou plusieurs personnes. Synonyme : Client bancaire.
     */
    numeroEntiteTitulaire: number;
    /**
     * Identifie le contrat support du dossier de vente. Permet d'afficher en entête des écrans GGO le compte support.    
     * Format de la rubrique : donnée cadrée à gauche, complétée par des blancs à droite,         
     * Exemple :
     * - 'FR7611425002000403809356890'
     */
    numeroCompte: string;
    /**
     * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.        
     * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôt (ou compte courant) pour un tarif en général forfaitaire.    
     * Cette référence est la référence de l'offre créée dans le cadre du dossier de vente.
     */
    numeroOffreSouscrite: number;
    /**
     * Valeur de EDS de domiciliation attribué au moment de la création du dossier de vente pour aider à l'affectation des dossiers de vente.                                            
     * Le dossier de vente ne conserve que l'EDS attribué à la création et ne le modifie jamais.               
     * Cette rubrique dans un premier temps, concernera les prospects. Si le prospect devient client et se domicilie ailleurs, ce sont les bases client qui font foi.
     */
    codeEdsAttribueCreation: number;
  }

  export interface IDossierVente {
    listeActionPossible: Array<IActionPossible>;
    listeCompositionDossier: Array<ICompositionDossier>;
    donneeDossier: IDonneeDossier;
    listeDonneePersonne: Array<IDonneePersonne>;
    donneeSignature: IDonneeSignature;
    etatDossier: IEtatDossier;
    referenceDossierVente: IReferenceDossierVente;
  }

  export interface IRecherche {
    critereConsultation: ICritereConsultation;
    listeDossierVente: Array<IDossierVente>;
  }

  export interface ICritereConsultation {
    /**
     * Obligatoire, contrôlé par QR
     * -1 : recherche de la liste des dossiers d'une personne 
     * -2 : recherche de la liste des dossiers des personnes composant la relation économique 
     * -3 : recherche de la liste des dossiers d'une personne et des personnes composant la relation économique
     * -4 : recherche de la liste des dossiers affectés/créés/confirmés par un agent
     * -5 : recherche par un numéro de dossier de vente ou l’identifiant externe dossier de vente et son code externe
     */
    typeRecherche: string;
    /**
     * Référence d'identification d'un Etablissement bancaire  ou financier utilisant la plateforme bancaire Mysys.    
     * Donnée obligatoire, contrôlé par la QR.
     */
    codeEtablissementCritere: string;
    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys                                         Personne référencée comme client, tiers ou prospect.
     * Obligatoire pour type de recherche 1, 2 et 3.
     */
    identifiantPersonne: number;
    /**
     * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement bancaire ou financier sur la plateforme Mysys.
     * Critère facultatif .
     */
    identifiantClient: number;
    /**
     * Obligatoire pour le typeRecherche 2 et 3 contrôlé par QR
     * Détermine une composition type de relation (entité économique)
     * Valeurs possibles :
     * -'1' personnes physiques rattachées à la relation
     * -'2' personnes physiques rattachées à la relation + activités pro + personnes morales           
     * -'3' personnes physiques rattachées à la relation + personnes physiques liées et non rattachées
     */
    typeCompositionRelation: string;
    /**
     * 'Obligatoire contrôlé par QR
     * 'I'= IHM Caisse,'C'= IHM Client,'S'=SPA CONS DV , 'P' = DECP
     */
    typeAppelant: string;
    /**
     * Référence externe de l'agent de création du dossier de vente.
     * Obligatoire pour le typeRecherche 4 si referenceExterneAgentModification ou referenceExterneAgentAffecté non renseigné
     * contrôlé par QR.
     */
    referenceExterneAgentCreation: number;
    /**
     * Référence externe de l'agent de modification du dossier de vente.
     * Obligatoire pour le typeRecherche 4 si referenceExterneAgentCreation ou referenceExterneAgentAffecté non renseigné
     * contrôlé par QR
     */
    referenceExterneAgentModif: number;
    /**
     * Référence externe de l'agent d'affectation du dossier de vente.
     * Obligatoire pour le typeRecherche 4 si referenceExterneAgentCreation ou referenceExterneAgentModification non renseigné
     * contrôlé par QR
     */
    referenceExterneAgentAffecte: number;
    /**
     * Il s'agit de l'identifiant élément de structure interne de l'agent de création.   
     * Critère facultatif
     */
    identifiantEDSinterneCreation: number;
    /**
     * Canal de vente courant:     
     * Exemples:                        
     * -'IN'       Internet                         
     * -'TL'       Téléphone                        
     * -'FF'       Face à face
     * Critère facultatif.
     */
    canalVenteCourant: string;
    /**
     * Cette rubrique spécifie l'entité type de l'organisation ayant créé le dossier de vente. Valeurs :
     * 
     * -'1' = Agence
     * -'2' = CRC
     * -'3' = E-Agence
     * -'4' = Internet
     * -'5' = Administratif
     * Critère facultatif.
     */
    codeEntiteVenteCreation: string;
    /**
     * Numéro d'identification d'un poste fonctionnel d'un Etablissement du GCE.      
     * Obligatoire si PF externe non renseignés.
     */
    codeEDSInternePFContexte: number;
    /**
     * Référence externe EDS.
     * Obligatoire PF interne non renseigné.
     */
    codeEdsExternePFContexte: number;
    /**
     * Indique le type organisationnel d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
     * Obligatoire si code EDS externe renseigné.
     */
    typeEdsExterneContexte: string;
    /**
     * Détermine le mode de contractualisation soit électronique, soit papier, soit double clic  (uniquement sur Internet, à partir de la mise en placde Myway)                                             
     *  Valeurs:                                              
     *  -'I'        Indéterminé                                           
     * - 'P'        Papier                                                
     * - 'E'        Electronique                                          
     * - 'D'        Double clic
     * Critère facultatif
     */
    modeDeSignature: string;
    /**
     * Détermine une situation de gestion caractéristique du
     * dossier de vente .
     * Valeurs : 
     * -'01'       Non encore validé           
     * -'02'       En attente envoi documents  
     * -'03'       En attente de retours       
     * -'04'       Actions à mener dans le SI  
     * -'05'       Terminé                     
     * -'06'       Hors délai     
     * Critère facultatif
     */
    momentVie: string;
    /**
     * Détermine le statut de l'étape du processus de vente
     * à un instant donné.                         
     * Exemples: 
     * -'VENA'     Vente non aboutie    
     * -'VECS'     Vente à clôturer SI  
     * -'EAFI'     Vente à finaliser    
     * Critère facultatif
     */
    statutEtape: string;
    /**
     * Classification des statuts des étapes des processus  
     * de vente .                                           
     * Permet de regrouper les statuts qui ont le même      
     * libellé.    
     * Exemples : 
     * -'ERMG'     Erreur, à ouvrir manuellement   
     * -'EAMA'     Ouverture en cours              
     * Critère facultatif.
     */
    familleStatut: string;
    /**
     * Cet indicateur permet de restituer les dossiers pour laquelle la personne est signataire: 
     * Valeur possible : 
     * -'O' : on restitue les dossiers pour laquelle est titulaire et ou signataire
     * -'N' : on restitue les dossier pour laquelle la personne est titulaire.
     * Critère facultatif
     */
    personneSignataire: string;
    /**
     * Détermine un acte de gestion dans le catalogue des processus/opérations de la gestion bancaire.          
     * Un acte de gestion est une opération sur un produit /service ou une prestation à la clientèle.             
     * Format :  concaténation de code sous famille acte de gestion et code objet acte de gestion     
     * Exemples :
     * - 'AV00000821' = Avenant BOUQUET LIBERTE
     * - 'OU00000761' = OUVERTURE FORFAIT SATELLIS INTEGRAL.
     * Critère facultatif.
     */
    codeActeGestionPrincipal: string;
    /**
     * Numéro d'identification d'une offre de vente du catalogue de distribution de la gestion du dossier de  vente.                              
     * Une offre correspond à une prestation (opération) sur un produit / service.                                    
     * Une offre est associée à un code produit service national.
     * Exemples :
     * - '109' = Souscription offre bouquet liberté
     * - '173' = Souscription Prêt Personnel Auto IZIVENTE
     * Critère facultatif
     */
    offre: number;
    /**
     * Identifie le contrat support du dossier de vente. Permet d'afficher en entête des écrans GGO le compte support.    
     * Format de la rubrique : donnée cadrée à gauche, complétée par des blancs à droite,         
     * Exemple :
     * - 'FR7611425002000403809356890'
     * Critère facultatif
     */
    numeroCompte: string;
    /**
     * Numéro d'identification du dossier de vente.        
     * Un dossier de vente gère la vente d'une offre à un client donné (souscription de contrat de produit ou service, opération sur un contrat, avenant ...)    
     * Le dossier de vente mémorise les données de la proposition / souscription de l'offre commerciale ou de l'opération : contexte de l'acte et caractéristiques du produit / service.
     * Cet identifiant est attribué par le central-DB2 à la création du dossier de vente.
     * Exemple :
     * - 12413558
     * Critère obligatoire en recherche de type 5 si identifiant externe dossier vente non renseigné.
     */
    identifiantDossierVente: number;
    /**
     * Référence du dossier fournie par le producteur qui gère l'offre.                                     
     * Cette référence producteur permet d'associer les différents CRE émis par le producteur au dossier de vente concerné.                                
     * Exemples :
     * - 'FFI136593693' = n° FFI pour les Crédits Conso Nafi.
     * Obligatoire en recherche de type 5 si identifiant dossier de vente non renseigné.
     */
    identifiantExterneDossierVente: string;
    /**
     * Code de désignation externe de l'application dans la gestion des dossiers de vente.  
     * Concerne notamment les échanges avec les producteurs.
     * Exemples :                                           
     * - 'BPCEA_IMPACT' : Assurances                         
     * - 'NFI_IZIVENTE' : Natixis & Natixis Financement.
     * Obligatoire en recherche de type 5 si identifiant externe dossier de vente renseigné.
     */
    codeExterneApplication: string;
    /**
     * Critère de recherche de date de création minimum d'un dossier de vente .
     * Le format est date et heure mais seul la date est retenue pour la recherche.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateDebutCreation: string;
    /**
     * Critère de recherche de date de création maximum d'un dossier de vente .
     * Le format est date et heure mais seul la date est retenue pour la recherche.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateFinCreation: string;
    /**
     * Critère de recherche de date de modification minimum d'un dossier de vente .
     * Le format est date et heure mais seul la date est retenue pour la recherche.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateDebutModification: string;
    /**
     * Critère de recherche de date de modification maximum d'un dossier de vente .
     * Le format est date et heure mais seul la date est retenue pour la recherche.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateFinModification: string;
    /**
     * Critère de recherche de date de relance minimum d'un dossier de vente .
     * Le format est date et heure mais seul la date est retenue pour la recherche.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateDebutRelance: string;
    /**
     * Critère de recherche de date de relance maximum d'un dossier de vente .
     * Le format est date et heure mais seul la date est retenue pour la recherche.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateFinRelance: string;
    /**
     * Critère de recherche de date de signature minimum d'un dossier de vente .
     * Le format est date et heure mais seul la date est retenue pour la recherche.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateDebutSignature: string;
    /**
     * Critère de recherche de date de signature maximum d'un dossier de vente .
     * Le format est date et heure mais seul la date est retenue pour la recherche.
     * Exemple :
     * - '2015-11-10-14.49.09.387646'
     */
    dateFinSignature: string;
    /**
     * Indicateur obligatoire.
     * Il permet la restitution ou non des dossiers VMC.
     * Valeurs:
     * -'O' : dossier uniquement MyWay
     * -'N': restitution dossier MyWay et VMC
     */
    indicRestDVMyWay: string;
    /**
     * Indicateur obligatoire.
     * Il permet la restitution ou non des JSON (resume et métier référence) associés au dossier de vente.
     * Valeurs:
     * -'O' restitution des JSON
     * -'N' pas des restitution des JSON
     */
    indicRestJSONResume: string;
    /**
     * Indicateur obligatoire.
     * Il permet la restitution ou non des actions possible associés au dossier de vente.
     * Valeurs:
     * -'O' restitution des actions possible.
     * -'N' pas des restitution des actions possible.
     */
    indicRestActionPossible: string;
    /**
     * Indicateur facultatif permettant le restitution des dossiers VPC.
     * Valeurs:
     * -'1' restitution des dossiers VPC
     * -'0' non restitution des dossiers VPC.
     * Cet indicateur fonctionne avec l'indicateur MEGI, si l'indicateur MEGI est à '1' l'indicateur VPC doit être à '0' et inversement.
     */
    indicVPC: string;
    /**
     * Indicateur facultatif permettant le restitution des dossiers MEGI.
     * Valeurs:
     * -'1' restitution des dossiers MEGI
     * -'0' non restitution des dossiers MEGI.
     * Cet indicateur fonctionne avec l'indicateur VPC, si l'indicateur VPC est à '1' l'indicateur MEGI doit être à '0' et inversement.
     */
    indicMEGI: string;
  }

  export interface IDonneeSignature {
    /**
     * Détermine le mode de contractualisation :
     * soit électronique, soit papier, soit blanc ou Indéterminé si le choix du mode de signature n'a pas été effectué, soit double clic (sur formulaire internet)            
     * Valeurs:                                 
     * - 'P' = Papier                                   
     * - 'E' = Electronique 
     * - ' ' ou 'I' = choix du mode de signature non effectué
     * - 'D' = Double clic (internet)
     */
    codeModeSignature: string;
    /**
     * Libellé associé au code mode de signature utilisé. 
     * Exemple de valeurs :                                
     * - 'Papier'                                              
     * - 'Electronique'
     */
    libelleModeSignature: string;
    /**
     * Référence d'identification du document numérisé établie par l'application IDN                       
     * Fournie au moment du dépôt de la liasse documentaire et utilisée ensuite pour récupérer cette liasse.       
     * Format :                                            
     * - Code établissement financier 5 car
     * - Identifiant agent 7 car
     * - Date du jour AAMMJJhhmmss
     * - Incrémentation entre 0 et 999999,  6 car  
     * Exemple :
     * - '183158311352150914123724831031'
     */
    identifiantDocumentNumerise: string;
    /**
     * identifiant unique d'une transaction de contractualisation électronique d'un dossier de vente.
     * Identifiant établi par l'application de contractualisation.                                  
     * Exemple de valeurs :                                  
     * - '0ea0cb25-d029-4874-8f72-9267c663c51e'
     */
    identifiantTransactionContract: string;
    /**
     * Date et heure précise de signature du dossier de vente.                                                
     * Dans le cas d'un dossier avec plusieurs cosignataires, c'est la date et l'heure de la dernière signature effectuée qui est enregistrée.
     * Exemple : 
     * - '2015-11-10-14.47.55.788994'
     * - '0001-01-01-00.00.00.000000' si non signé
     */
    dateSignature: string;
  }

}
