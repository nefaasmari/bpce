
declare module myway.clients.suiviDossierVente {
    var app: any;
}

declare module myway.clients.suiviDossierVente {
    interface IInterventionDossier {
        codeAction: string;
        codeCanal: string;
        codeEdsAgentAffectation: number;
        codeEdsAgentTraitement: number;
        codeEntiteVente: string;
        codeErreurApplicative: string;
        codeEtapeVente: string;
        codeEvenement: string;
        codeMotifCommunication: string;
        codeMoyenContact: string;
        codeSensCommunication: string;
        codeStatutEtape: string;
        dateHeureIntervention: string;
        designationAgentAffectation: string;
        designationAgentTraitement: string;
        identifiantInterventionDossier: number;
        indicateurRelance: string;
        libelleAction: string;
        libelleCanal: string;
        libelleEdsAgentAffectation: string;
        libelleEdsAgentTraitement: string;
        libelleEntiteVente: string;
        libelleErreurApplicative: string;
        libelleEtapeVente: string;
        libelleEvenement: string;
        libelleMotifCommunication: string;
        libelleMoyenContact: string;
        libelleNatureIntervention: string;
        libelleSensCommunication: string;
        libelleStatutEtape: string;
        nomAgentAffectation: string;
        nomAgentTraitement: string;
        prenomAgentAffectation: string;
        prenomAgentTraitement: string;
        referenceAgentAffectation: number;
        referenceAgentTraitement: number;
    }
    interface IHistoriqueIntervention {
        dossierVente: IDossierVente;
        listeInterventionDossier: Array<IInterventionDossier>;
    }
    /**
     * Entité du conseiller qui est en cours sur le dossier
     */
    interface IActeurContexte {
        /**
         *  Cette rubrique spécifie l'entité type de l'organisation ayant demandé à consulter, créer ou modifier le dossier de vente.
         *  - '1' = Agence
         *  - '2' = CRC
         *  - '3' = E-Agence
         *  - '4' = Internet
         *  - '5' = Administratif
         *   Création ou maj : Si cette rubrique d'entrée n'est pas renseignée, les rubriques d'entrée sur l'EDS doivent être renseignées.
         */
        codeEntiteVenteContexte: string;
        /**
         *  Libellé de l'entité ayant demandé à consulter, créer ou modifier le dossier de vente.
         *  Valeurs :
         *  - 'AGENCE'
         *  - 'CRC'
         *  - 'E-AGENCE'
         *  - 'ADMINISTRATIF'
         */
        libelleEntiteVenteContexte: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE de type Poste Fonctionnel, ayant demandé à
         * consulter, créer ou modifier le dossier de vente.
         * Correspond à un type : poste fonctionnel
         * Création ou maj : cette entrée doit être renseignée si le codeEntiteVenteContexte et le codeEdsExternePFContexte ne sont pas renseignés.
         */
        codeEdsInternePFContexte: number;
        /**
         *  Référence externe d'un élément de structure dans un Etablissement du GCE de type Poste Fonctionnel, ayant demandé à consulter, créer ou
         *  modifier le dossier de vente.
         *  Référence connue de l'Etablissement
         *  Identifiant défini en fonction du type d'élément de structure (type EDS).
         *  Correspond à un type : poste fonctionnel
         *  Création ou maj : Cette entrée doit être renseignée, si le codeEntiteVenteContexte et le codeEdsInternePFContexte ne sont pas renseignés.
         */
        codeEdsExternePFContexte: number;
        /**
         *  Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE, ayant demandé à consulter, créer ou modifier le
         *  dossier de vente.
         *  Typologie propre à chaque Etablissement du GCE.
         *  Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         *  - '008' = Siège
         *  - '003' = Agence (Point de vente)
         *  - '010' = GAB
         *  - '020' = Guichet (au sens arrêté de caisse)
         *  - '001' = Poste fonctionnel
         *  - '002' = Service
         *  - '009' = Entité Administrative (Guichet interbancaire)
         *  Création ou maj : cette entrée est obligatoire si le codeEdsExternePFContexte est renseigné.
         */
        typeEdsExterneContexte: string;
        /**
         * Numéro d'identification de l'élément de structure (agence, service, groupe ...) auquel est rattaché le poste fonctionnel dans un
         * Etablissement donné.
         * Correspond à un type :  agence, service,...
         * Exemples :
         * - '1286' = AGENCE MOBILE OULCHY LE CHATEAU
         * - '1287' = CREPY EN VALOIS
         * - '1288' = VILLERS COTTERETS
         * - '1289' = DIRECTION GROUPE CHATEAU
         * Création ou maj : cette entrée n'est pas obligatoire si les données EDS sont de niveau poste fonctionnel.
         */
        codeEdsInterneRattachContexte: number;
        /**
         * Référence externe de l'agent ayant demandé à consulter, créer ou modifier le dossier de vente.
         *
         * Création ou maj : cette entrée n'est pas obligatoire si les données EDS sont de niveau poste fonctionnel.
         */
        referenceExterneAgentContexte: number;
    }
    /**
     * Entité du conseiller qui a fait la dernière modif
     */
    interface IActeurDerniereModification {
        /**
         *  Cette rubrique spécifie la dernière entité type de l'organisation ayant modifié le dossier de vente.
         *      Valeurs :
         *  - '1' = Agence
         *  - '2' = CRC
         *  - '3' = E-Agence
         *  - '4' = Internet
         *  - '5' = Administratif
         */
        codeEntiteVenteDerMod: string;
        /**
         *  Libellé de la dernière entité ayant modifié le dossier de vente.
         *  Valeurs :
         *  - 'AGENCE'
         *  - 'CRC'
         *  - 'E-AGENCE'
         *  - 'ADMINISTRATIF'
         */
        libelleEntiteVenteDerMod: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE de type Poste Fonctionnel, ayant participé à la
         * dernière modification du dossier de vente.
         * Correspond à un type : poste fonctionnel
         */
        codeEdsInternePFDerMod: number;
        /**
         *  Nom du dernier agent ayant modifié le dossier de vente
         */
        nomAgentDerMod: string;
        /**
         * Prénom du dernier agent ayant modifié le dossier de vente.
         */
        prenomAgentDerMod: string;
        /**
         * Numéro d'identification de l'élément de structure (agence, service, groupe ...) auquel est rattaché le poste fonctionnel, ayant participé
         * à la dernière modification du dossier de vente.
         *  Correspond à un type :  agence, service,...
         *  Exemples :
         *  - '1286' = AGENCE MOBILE OULCHY LE CHATEAU
         *  - '1287' = CREPY EN VALOIS
         *  - '1288' = VILLERS COTTERETS
         */
        codeEdsInterneRattachDerMod: number;
        /**
         * Référence externe du dernier agent ayant modifié le dossier de vente.
         */
        referenceExterneAgentDerMod: number;
    }
    /**
     * Liste des boutons ou codes opération fonctionnelle + ABAN ANNU APER / gestion des boutons et de l’aperçu editique
     */
    interface IActionPossible {
        /**
         * Détermine un acte dans le processus de vente de la gestion des dossiers de vente.
         * Une action représente ce qui peut être fait pour faire progresser le processus de vente.
         * Une action peut se traduire par un bouton ou une icône  dans l'IHM chargé de clientèle ou dans l'espace client, une action  peut également
         * être disponible uniquement pour les traitements hors IHM.
         *  Cette rubrique contient un code action qu'il sera possible d'effectuer sur le dossier.
         *  Exemples :
         *  - VECO : vente confirmée
         *  - ANNU : annuler dossier de vente
         *  - MIGE : appeler l'application qui réalise la mise en gestion
         */
        codeActionPossible: string;
        /**
         *  Libellé associé à un code action, à destination du chargé de clientèle pour IHM MyWay.
         *  Exemples :
         *  - 'Imprimer et envoyer' pour le code action DOTR
         *  - 'Valider' pour le code action VALI
         */
        libelleActionPossibleAgent: string;
        /**
         *  Libellé associé à un code action, à destination du client (dans l'espace client sur internet par exemple).
         *  Exemples :
         *  - 'Abandon signature électronique'
         */
        libelleActionPossibleClient: string;
        /**
         *  détermine le contexte d'une action effectuée sur le poste MyWay.
         *  Valeurs :
         *  - 'V'        Virtuel (non présenté à l'utilisateur),
         *  - 'O'        Opération (code opération fonctionnelle, appel autre appli ou pop-up),
         *  - 'S'        Bouton Spécial (ABAN ANNU),
         *  - 'E'        Action retour Editique (règle spéciale),
         *  - 'B'        Bouton.
         */
        codeTypeActionPossible: string;
        /**
         *  Détermine l'action à effectuer en cas de bouton uniquement (codeTypeActionPossible=B). Permet d'optimiser les temps de traitement, et
         * d'éviter des rappels à la ressource pour donner la suite.
         *  Pour un bouton, il n’y a toujours qu’un seul code opération fonctionnel possible.
         */
        codeOperationFonctionnelle: string;
        /**
         * Identifie un processus du SI. Correspondance avec les processus LISA. Exemple : OUVR_OFFR_FORF_UNTR
         */
        identifiantProcessusSI: string;
        /**
         * Permet de donner la valeur d'entrée au processus métier appelé.
         * Les valeurs d'entrée sont différentes selon si on rentre dans l'écran COMPO ou l'écran RECAP.
         */
        valeurEntreeProcessusSI: number;
        /**
         * Indique le rang d'un bouton associé à une action.
         */
        rangBoutonAction: number;
    }
    /**
     * Message d’erreur à afficher si non vide /  pour bloc Alertes
     */
    interface IAlerteFonctionnelle {
        /**
         *  Il est associé à une erreur fonctionnelle non bloquante rencontrée lors de la consultation ou de la mise du dossier de vente.
         *  Il est incrémenté à chaque détection d'erreur.
         */
        codeAlerteFonctionnelle: number;
        /**
         *  Libellé de l'erreur fonctionnelle non bloquante rencontrée lors de la consutlation ou de la mise à jour du dossier de vente.
         *  Exemple :
         *  - 'Mode de vente MEGI incompatible avec CFN joint'
         */
        libelleAlerteFonctionnelle: string;
    }
    /**
     * Définition d'un canal de reprise
     */
    interface ICanalReprise {
        /**
         *  Détermine un canal de vente sur lequel le dossier de vente peut être repris.
         *  Exemples :
         *  - 'TL' = Téléphone
         *  - 'IN' = Internet
         *  - 'FF' = Face à face
         */
        codeCanalReprise: string;
        /**
         *  Libellé du canal de reprise.
         *  Exemple :
         *  - 'Téléphone'
         *  - 'Internet'
         *  - 'Face à face'
         */
        libelleCanalReprise: string;
        /**
         *  Indique l'ordre d'affichage des média de vente lors de la reprise d'un dossier de vente (changement de média).
         *
         *  Exemples : 1,2,3...
         */
        rangAffichageCanalReprise: number;
        /**
         * Indique le sens de la communication dans le processus de vente, pour le canal de reprise : contact entrant (à l'initiative du client),
         * contact sortant (à l'initiative de l'Etablissement).
         *  Exemples :
         *  - 'E' = Entrant
         *  - 'S' = Sortant
         */
        codeSensCommunicReprise: string;
        /**
         *  Libellé de désignation du code sens du contact pour le canal de reprise.
         *  Exemples :
         *  - 'Entrant'
         *  - 'Sortant'
         */
        libelleSensCommunicReprise: string;
    }
    /**
     * Chemin d'avancement (suivi du dossier de vente)
     */
    interface ICheminAvancement {
        /**
         * Le code jalon balise le chemin d'avancement. Le chemin d'avancement est le chemin que parcourt un dossier de vente. Il est ponctué d'étapes
         * appelées jalons. Le chemin d'avancement et les jalons permettent à l'utilisateur de visualiser le parcours ainsi que les étapes franchies,
         * à franchir...pour le dossier de vente sur l'application Myway.
         *  Exemples :
         *  - 'PROP' = Proposition
         *  - 'DOEN' = Documents envoyés
         *  - 'DOSI' = Documents signés
         *  - 'OUVE' = Ouverture
         *  - 'TERM' = Terminé
         *  - 'ATCL' = Attestation Clôture
         */
        codeJalon: string;
        /**
         *  Ce libellé est associé au code jalon. Le code jalon balise le chemin d'avancement. Le chemin d'avancement est le chemin que parcourt un
         * dossier de vente. Il est ponctué d'étapes appelées jalons. Le chemin d'avancement et les jalons permettent à l'utilisateur de visualiser le
         * parcours, ainsi que les étapes franchies, à franchir..., pour le dossier de vente sur l'application Myway.
         *  Exemples :
         *  - 'Proposition'
         *  - 'Documents envoyés'
         *  - 'Documents signés'
         */
        libelleJalon: string;
        /**
         *  Cet indicateur caractérise le jalon du chemin d'avancement dans une situation donnée. Le chemin d'avancement, et les jalons permettent de
         * visualiser de façon synthétique  l'avancement du dossier de vente sur l'application Myway. A chaque statut d'un processus de vente, sont
         * associés un chemin d'avancement et un jalon. Lors de cette association, le jalon est enrichi de l' indicateur franchissement qui précise la
         * façon dont il doit être mis à jour. Le jalon pourra être franchi, non franchi...
         *  Exemples :
         *  - '01' = Jalon non franchi, représenté en BLANC
         *  - '02' = Jalon franchi, représenté en NOIR
         *  - '03' = Jalon jamais franchi, représenté en GRIS
         */
        codeFranchissement: string;
        rangJalon: number;
    }
    /**
     * Le commentaire ("post-it")
     */
    interface ICommentaire {
        /**
         * Il s'agit d'un texte libre lié au dossier de vente. Toute demande de mise à jour du texte supprimera le précédent texte et le remplacera
         * par le nouveau.
         */
        texteCommentaire: string;
    }
    /**
     * Une ligne du panier dossier de vente correspondant à un produit/service
     */
    interface ICompositionCaracteristique {
        /**
         *  Identifie un contrat de produit ou service détenu par un client dans la gestion d'un Etablissement GCE.
         *  Concerne les P/S gérés par la production centrale et par les systèmes annexes.
         *  Référence SUPRA des contrats.
         *  Format de la rubrique : donnée cadrée à gauche, complétée par des blancs à droite,
         *  Exemple :
         *  - 'FR7611425002001603809356890' -> n° de compte PEL
         *
         * Création ou maj : donnée obligatoire si codeModaliteDetention = 'C'
         */
        referenceProduitServiceCompo: string;
        /**
         *  Identifiant de l'occurrence composition dans le dossier de vente.
         *  Un dossier de vente peut être composé de plusieurs clients bancaires, de plusieurs sous-actes de gestion... Un rang chronologique ou
         * l'identifiant est attribué à chacun d'eux.
         *  Cette notion d'identifiant est gérée par l'application appelante.
         *  Exemples :
         *  1 = occurrence correspondant à l'acte de gestion principal
         *  2 = occurrence correspondant au client bancaire joint
         *  3 = occurrence correspondant au sous acte de gestion (CDD)
         *  ...
         *
         *  Création ou maj : entrée obligatoire
         */
        identifiantOccurrence: number;
        /**
         *  Identifiant auquel se rattache l'occurrence de la composition.
         *  Un dossier de vente peut être composé de plusieurs clients bancaires, de plusieurs sous-actes de gestion. Un rang chronologique ou
         * identifiant est attribué à chacun d'eux. Le sous-acte de gestion peut-être rattaché à un autre sous-acte de gestion composant le dossier de
         * vente. L'identifiant père composition permet de faire le rattachement.
         *  Cette notion est gérée par l'application appelante.
         *  Exemples :
         *  - occurrence 1 acte de gestion principal
         *  - occurrence 2 client bancaire joint
         *  - occurrence 3 sous-acte de gestion CDD, identifiant père occurrence = 1
         *  - occurrence 4 sous-acte de gestion découvert, identifiant père occurrence = 3
         *  - occurrence 5 sous-acte de gestion carte, identifiant père occurrence = 3
         *  ...
         */
        identifiantPereOccurrence: number;
        /**
         *  Détermine un acte de gestion dans le catalogue des processus/opérations de la gestion bancaire. Un acte de gestion est une opération sur un
         *  produit /service ou une prestation à la clientèle.
         *  Il peut être égal à l'acte de gestion principal ou au sous-acte de gestion ou ne pas être renseigné si l'occurrence ne concerne pas un acte
         *  de gestion.
         *  - 'OU00000002' OUVERTURE RELEVE DE COMPTE
         *  - 'OU00000003' Ouverture CHEQUIER SANS RENOUVELLEMENT
         *  - 'OU00000004' Souscription CARTE VISA PREMIER DEBIT DIFFERE
         *
         *  Création ou maj : doit être renseigné si le codeSousFamilleActeComposition ou l'identifiantProduitServiceCompo non renseignés
         */
        codeActeGestionComposition: string;
        /**
         *  Spécifie le libellé de l'acte de gestion.
         *  Ne sera pas renseigné dans un premier temps.
         */
        libelleActeGestionComposition: string;
        /**
         *  Détermine une sous-famille d'actes de gestion : chaque famille d'actes de gestion est décomposée en sous-familles d'actes selon le
         * catalogue des actes de gestion.
         *  Exemples :
         *  - 'OU' = Ouverture contrat normale
         *  - 'OT' = Ouverture contrat par transfert
         *  - 'AV' = Avenant
         *
         *   Création ou maj : doit être renseigné si codeActeGestionComposition non renseigné
         */
        codeSousFamilleActeComposition: string;
        /**
         *  Indique la nature du Produit/Service Associé.
         *  Non significatif pour les P/S simples.
         *  Valeurs :
         *  - 'O' = ligne correspondant à l'acte de gestion principal
         *  - blanc = pour les autres lignes
         */
        codeNatureActeGestion: string;
        /**
         *  Détermine le mode de détention d'un produit ou service dans le cadre de sa souscription : via un compte (découvert, relevé, chéquier...),
         * via une entité titulaire (livret, assurance, prêt), via une personne ( VDX, Phonécureuil...)
         *  Valeurs :
         *  - 'C'        Compte
         *  - 'E'        Entité titulaire
         *  - 'P'        Personne
         *
         *  Création ou maj : Si 'P', le numeroPersonneCompostion doit être renseigné. Si 'C', la referenceProduitServiceCompo doit être renseignée. Si
         *  'E', le numeroEntiteTitulaire doit être renseignée.
         */
        codeModaliteDetention: string;
        /**
         *  Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         *
         *  Une entité titulaire se compose d'une ou plusieurs personnes.
         *  Synonyme : Client bancaire.
         *
         *  Création ou maj : cette entrée est obligatoire si codeModaliteDetention = 'E'
         */
        numeroEntiteTitulaireCompo: number;
        /**
         *  Numéro d'identification de la personne dans le SI d'un Etablissement. Référence interne MYSYS.
         *  Personne référencée comme client, tiers ou prospect.
         *
         *  Création ou maj : cette entrée est obligatoire si codeModaliteDetention = 'P'
         */
        numeroPersonneComposition: number;
        /**
         *  Mode financier avec lequel est passée l'opération.
         *  Exemples :
         *  - '01' = Espèces
         *  - '02' = Chèque
         *  - '06' = Virement interne
         *  - '07' = Virement espèces opération
         *  - '10' = Divers
         *  - '12' = Automatique
         *  - '00' = Virement opération diverse
         *  - '09' = Chèque de banque émis
         */
        codeModeFinancier: string;
        /**
         *  Etablissement gestionnaire du compte d'imputation de l'opération ou du mouvement, à partir duquel il y a eu virement. Cette rubrique
         *  complète la rubrique codeModeFinancier, afin de déterminer si le virement a  été effectué à partir d'un compte interne ou externe à
         *  l'Etablissement bancaire.
         *  Exemple :
         *  - '13135'
         *
         *  Création ou maj : cette entrée est obligatoire si codeModeFinancier = '10' (divers) ou '00' (virement opération diverse).
         */
        codeEtablissementOperation: string;
        /**
         *  Indique si le produit/service est déjà détenu dans une autre offre et est à intégrer dans l’acte de gestion.
         *  Exemple : CDD existant pour l’acte avenant ou ouverture BL
         *  Valeurs :
         *  - 'O' = Oui, le produit/service est déjà détenu par le client
         *  - 'N' = Non, le produit/service n'est pas détenu par le client
         */
        indicateurProduitRepris: string;
        /**
         *  Numéro d'identification de l'offre d’origine en cas de reprise de produit service d’une autre offre ou en cas de changement d’offre,
         *  souscrite par un client d'un Etablissement du Groupe CE.
         *  L'offre est un package qui globalise des services et des produits autour éventuellement d'un compte de dépôt (ou compte courant) pour un
         *  tarif en général forfaitaire.
         */
        numeroOffreOrigine: number;
        /**
         *  Cet indicateur précise si la mise en gestion du sous-acte de gestion a été effectuée ou non, ou si elle a échouée.
         *  Valeurs:
         *  - 'O' = Oui (mise en gestion effectuée)
         *  - 'N' = Non (mise en gestion non effectuée)
         *  - 'E' = Echec (la mise en gestion a échoué)
         */
        indicateurMiseEnGestion: string;
        /**
         *  Date et heure précise de création d'une ligne composition du dossier de vente.
         *  Exemple :
         *  - '2015-11-02-16.43.42.326223'
         */
        dateCreationLigneComposition: string;
        /**
         *  Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         *
         *  Création ou maj : cette entrée doit être renseignée si codeActeGestionComposition non renseigné
         */
        identifiantProduitServiceCompo: number;
        /**
         *  Numéro d'identification de la ligne de composition du dossier de vente.
         *  Référence unique (numéro chronologique) attribué par DB2 (Central) lors de la création de la ligne.
         */
        identifiantLigneComposition: number;
        /**
         * Ce libellé complète l'acte de gestion. Par exemple, pour les crédits conso, un même acte de gestion est utilisé. Cette donnée permettra de
         * distinguer les crédits conso pour automobile, travaux...
         */
        libelleComplementaireActe: string;
        /**
         *
         *   Détermine si le produit/service a été modifié. Valeurs :
         * 'O' = Oui - Le produit/service a été modifié
         * 'N' = Non - Le produit/service n 'a pas été modifié
         * ' ' = Non concerné
         */
        indicateurProduitModifie: string;
    }
    /**
     * Détail associé à une ligne du panier du dossier de vente, contenant notamment le json produit par les P/S
     */
    interface ICompositionDonneeDetail {
        /**
         *  Numéro d'identification des données détail d'un dossier de vente sous MyWay.
         *  Reférence attribuée par DB2.
         */
        identifiantDonneeDetailJson: number;
        /**
         *  Nom de la classe objet sans son chemin d'accès qui permet d'identifier la classe objet renseignée dans les données génériques au format
         * json, associées à une offre de vente.
         *  Exemple:
         *  - 'WSData_CompteDeDepot'
         *  - 'WSData_OuvertureCB'
         *  - 'WSData_AlertEcureuil'
         *
         *  Création ou maj : cette entrée est obligatoire.
         */
        referenceExterneData: string;
        /**
         *  Zone groupe comprenant les données relative à une opération liée à l'offre commerciale souscrite par le client.
         *  Instance d'une classe objet au format JSON dont le
         *  schéma est variable. Elle comprend les éléments,
         *  propriétés et les données associées.
         *  Exemples :
         *  {"_id":"DataCompte","_data":{"Agence":"00301","NumCompte":"08.0021581.73"}},
         *  {"_id":"DataChequier","_data":{"ChoixChequier":"CHEQUIERS","ChoixTypeChequier":"PORTEFEUILLE
         *  42","RenouvellementAuto":"OUI","SeuilRenouvellement":"10","Dotation":1,"AgenceDistribution":"12345","Routage":"ROUTAGE A L'AGENCE"}}
         */
        donneeData: string;
    }
    /**
     * Le panier stocké dans le dossier de vente
     */
    interface ICompositionDossier {
        /**
         *  undefined
         */
        compositionCaracteristique: ICompositionCaracteristique;
        /**
         *  undefined
         */
        listeCompositionDonneeDetail: Array<ICompositionDonneeDetail>;
    }
    /**
     * Infos liées à la signature
     */
    interface IContractualisationSignature {
        codeModeSignature: string;
        /**
         *  Libellé associé au code mode de signature utilisé.
         *  Valeurs :
         *  - 'Papier'
         *  - 'Electronique'
         */
        libelleModeSignature: string;
        /**
         *  Référence d'identification du document numérisé établie par l'application IDN
         *  Fournie au moment du dépôt de la liasse documentaire et utilisée ensuite pour récupérer cette liasse.
         *  Format :
         *  - Code établissement financier 5 car
         *  - Identifiant agent 7 car
         *  - Date du jour AAMMJJhhmmss
         *  - Incrémentation entre 0 et 999999,  6 car
         *  Exemple :
         *  - '183158311352150914123724831031'
         */
        identifiantDocumentNumerise: string;
        indicateurEnvoiHubmail: string;
        identifiantTransactionContract: string;
        /**
         *  Date et heure précise de signature du dossier de vente.
         *  Dans le cas d'un dossier avec plusieurs cosignataires, c'est la date et l'heure de la dernière signature effectuée qui est enregistrée.
         *  Exemple :
         *  - '2015-11-10-14.47.55.788994'
         *  - '0001-01-01-00.00.00.000000' si non signé
         */
        dateSignature: string;
    }
    /**
     * Données en entrée de DonneePrincipale en cas de création ou MAJ
     */
    interface IInfosEnEntreeDonneePrincipale {
        codeActeGestionPrincipal: string;
        codeSousFamilleActePrincipal: string;
        identProduitServicePrincipal: number;
        indicateurGestionPiece: string;
        referenceOffreMysys: number;
        indicateurExecutionImmediate: string;
        numeroEntiteTitulairePrincipale: number;
    }
    /**
     * Références interne externe DV , acte de gestion de l’offre associé + libellés + dates création modif relance DV  / pour bloc suivi dossier
     * Toutes les données sont optionnelles afin de gérer le PUT (màj). En effet, seules les données valuées (non espace/non 0) sont mises à jour.
     */
    interface IDonneePrincipale {
        /**
         *  Numéro d'identification d'une offre de vente du catalogue de distribution de la gestion du dossier de  vente.
         *  Une offre correspond à une prestation (opération) sur un produit / service.
         *  Une offre est associée à un code produit service national.
         *  Exemples :
         *  - '109' = Souscription offre bouquet liberté
         *  - '173' = Souscription Prêt Personnel Auto IZIVENTE
         */
        numeroOffre?: number;
        /**
         *  Libellé commercial associé à l'offre de vente, vision chargé de clientèle.
         *  Exemples :
         *  - 'Souscription Bouquet Liberté' pour l'offre 109
         *  - 'Souscription Prêt Personnel Auto IZIVENTE' pour l'offre 173
         */
        libelleOffreVisionAgent?: string;
        /**
         *  Libellé commercial associé à l'offre de vente, vision client.
         *  Exemples :
         *  - 'Souscription Bouquet Liberté' pour l'offre 109
         *  - 'Souscription Prêt Personnel Auto ' pour l'offre 173
         */
        libelleOffreVisionClient?: string;
        /**
         *  Détermine un acte de gestion dans le catalogue des processus/opérations de la gestion bancaire.
         *  Un acte de gestion est une opération sur un produit /service ou une prestation à la clientèle.
         *  Format :  concaténation de code sous famille acte de gestion et code objet acte de gestion
         *  Exemples :
         *  - 'AV00000821' = Avenant BOUQUET LIBERTE
         *  - 'OU00000761' = OUVERTURE FORFAIT SATELLIS INTEGRAL
         *
         *  Création : entrée obligatoire
         */
        codeActeGestionPrincipal?: string;
        /**
         * Détermine si un processus de vente donné concerne la plateforme MyWay.
         * Il permet de distinguer les dossiers de vente issus d'un processus VMC, des dossiers de vente issus d'un processus MyWay.
         *
         *  Valeurs :
         *  - 'O' = Oui - MyWay
         *  - 'N' = Non - Mysys (par défaut)
         */
        indicateurProcessusMyway?: string;
        dateCreationDossier?: string;
        /**
         *  Date et heure précise de création de la dernière relance commerciale.
         *  Elle provient du poste client de l'agent commercial.
         *  Cette rubrique permet de retrouver la relance la plus récente adressée au client.
         *  Exemple :
         *  - '2015-11-10-14.47.55.788994'
         *  - '0001-01-01-00.00.00.000000' s'il n'y a pas eu de relance
         */
        dateDerniereRelance?: string;
        /**
         *  Indique si l'étape permet la gestion de la collecte de pièces ou non.
         *  Valeurs:
         *  - 'O' = Oui
         *  - 'N' = Non
         *  - ' ' = Sans objet
         *
         *  Création ou maj : entrée non obligatoire
         */
        indicateurGestionPiece?: string;
        /**
         *  Indique si une notification est à émettre vers le producteur en cas d'évènement sur le dossier de vente
         *  (ex : signature, annulation, ...).
         *  Valeurs:
         *  - 'O' = Oui (à emettre)
         *  - 'N' = Non (à ne pas emettre)
         *  - '  ' = Non concerné
         */
        codeNotificationAEmettre?: string;
        /**
         *  Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         *  Package qui globalise des services et des produits autour éventuellement d'un compte de dépôt (ou compte courant) pour un tarif en général
         *  forfaitaire.
         *  Cette référence est la référence de l'offre créée dans le cadre du dossier de vente.
         *
         *  Création et maj : donnée non obligatoire
         */
        referenceOffreMysys?: number;
        /**
         *  Détermine le mode de vente/gestion du dossier de vente.
         *  Valeurs :
         *  - 'MEGI' = Mise en gestion immédiate(ouvrir puis signer)
         *  - 'VPC' = Vente par correspondance(signer puis ouvrir)
         */
        codeModeVente?: string;
        /**
         *  Détermine si une offre de vente dans le cadre d'un acte de gestion (souscription , avenant, opération...) doit faire l'objet d'une
         *  signature de la part du client. Il est  déterminé en fonction de la composition de l'offre et est attribué au dossier de vente.
         *  Valeurs :
         *  - 'O' = Obligatoire
         *  - 'F' = Facultatif
         *  - 'S' = Sans signature
         */
        codeCaractereSignature?: string;
        /**
         *  Date et heure précise de dernière modification du dossier de vente.
         *  Exemple :
         *  - '2015-11-10-14.49.09.387646'
         */
        dateModificationDossier?: string;
        /**
         *  Indique si le client a choisi une exécution immédiate.
         *  Dans l'affirmative, l'offre associée au dossier peut être ouverte immédiatement. Dans le cas contraire, un délai (14 jours) doit être
         *  observé avant l'ouverture.
         *  Valeurs:
         *  - 'O' = Oui
         *  - 'N' = Non
         *
         *  Création ou maj : entrée non obligatoire
         */
        indicateurExecutionImmediate?: string;
        /**
         * Nom du dernier agent à qui a été affecté le dossier de vente.
         */
        nomAgentAffecte?: string;
        /**
         *  Prénom de l'agent ayant créé le dossier de vente
         */
        prenomAgentCreation?: string;
        /**
         *  Nom de l'agent ayant créé le dossier de vente
         */
        nomAgentCreation?: string;
        /**
         * Prénom du dernier agent à qui a été affecté le dossier de vente.
         */
        prenomAgentAffecte?: string;
        /**
         *  Date et heure à laquelle le dossier de vente est passé à l'état 'confirmé'.
         *  Valeurs :
         *  - '0001-01-01-00.00.00.000000', dossier non confirmé
         *  - si valeur différente de ci-dessus, dossier confirmé
         *  (exemple : '2015-11-10-14.49.09.387646')
         */
        dateConfirmationDossier?: string;
        /**
         *  Détermine une sous-famille d'actes de gestion : chaque famille d'actes de gestion est décomposée en sous-familles d'actes selon le
         *  catalogue des actes de gestion.
         *  Exemples :
         *  - 'OU' = Ouverture contrat normale
         *  - 'OT' = Ouverture contrat par transfert
         *  - 'AV' = Avenant
         *
         *  Création : entrée non obligatoire
         */
        codeSousFamilleActePrincipal?: string;
        /**
         *  Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         *  Identifiant produit/service de l'offre principale du dossier de vente.
         *
         *  Création : entrée non obligatoire
         */
        identProduitServicePrincipal?: number;
        /**
         *  Libellé de désignation du mode de vente.
         *  Exemples :
         *  - 'Mise en gestion immédiate'
         *  - 'Vente par correspondance'
         */
        libelleModeVente?: string;
        /**
         *  Libellé associé au caractère de la signature.
         *  Exemple de libellés :
         *  - 'obligatoire'
         *  - 'facultatif'
         *  - 'pas de signature'
         */
        libelleCaractereSignature?: string;
        /**
         *  Libellé de désignation d'un acte de gestion.
         *  Exemples de valorisation :
         *  - Ouverture Livret A
         *  - Ouverture CAT
         */
        libelleActeGestionPrincipal?: string;
        /**
         *  Référence externe de l'agent ayant créé le dossier de vente.
         */
        referenceExterneAgentCreation?: number;
        /**
         *  Référence externe du dernier agent à qui a été affecté le dossier de vente
         */
        referenceExterneAgentAffecte?: number;
        /**
         * Cet indicateur, permet ou non de bloquer la finalisation du dossier de vente. En cas de signature client, en fonction de cet indicateur, le
         * processus de vente sera différent.  Par exemple, pour une Izicarte, lorsque le client a signé, si l’indicateur est valorisé à Non, le statut
         * du dossier de vente sera « Vente finalisée » ; si le l’indicateur est valorisé à Oui, le statut du dossier de vente sera « Crédit à octroyer ».
         *
         *  Valeurs :
         *  - 'O' = oui
         *  - 'N' = non
         */
        indicateurBlocageFinalisation?: string;
        /**
         *  Numéro de l'entité titulaire principale du dossier de vente.
         *  Une entité titulaire se compose d'une ou plusieurs personnes. Synonyme : Client bancaire.
         *
         *   Donnée non obligatoire (car ne sera pas valorisée pour les prospects) mais à renseigner si les appelants disposent de la donnée.
         */
        numeroEntiteTitulairePrincipale?: number;
        identifiantContratSupport?: string;
        codeCanalCreation?: string;
        typeCreationDossier?: string;
        codeEdsAttribueCreation?: number;
        typeProfessionnel?: string;
    }
    /**
     * Les infos d'identification du dossier de vente
     */
    interface IDossierVente {
        /**
         *  Identifiant d'un Etablissement du RCE.
         *  Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         *  Exemples :
         *  17515 = CE Ile de France
         *  16275 = CE Nord France Europe
         *  43199 = Crédit Foncier de France (CFF)
         *  Création ou maj : entrée obligatoire
         */
        codeEtablissement: string;
        /**
         *  Numéro d'identification du dossier de vente.
         *  Un dossier de vente gère la vente d'une offre à un client donné (souscription de contrat de produit ou service, opération sur un contrat,
         *  avenant ...)
         *  Le dossier de vente mémorise les données de la proposition / souscription de l'offre commerciale ou de l'opération : contexte de l'acte et
         *  caractéristiques du produit / service.
         *  Cet identifiant est attribué par le central-DB2 à la création du dossier de vente.
         *  Exemple :
         *  - 12413558
         *
         *  Maj  : doit être renseignée si identifiantExterneDossierVente et codeExterneApplication non renseignés
         *  Création : doit être égal à zéro
         */
        identifiantDossierVente: number;
        /**
         *  Code de désignation externe de l'application dans la gestion des dossiers de vente.
         *  Concerne notamment les échanges avec les producteurs.
         *  Exemples :
         *  - 'BPCEA_IMPACT' : Assurances
         *  - 'NFI_IZIVENTE' : Natixis & Natixis Financement
         *  Maj : doit être renseigné si identifiantDossierVente non renseigné
         *  Création : entrée facultative
         */
        codeExterneApplication: string;
        /**
         *  Référence du dossier fournie par le producteur qui gère l'offre.
         *  Cette référence producteur permet d'associer les différents CRE émis par le producteur au dossier de vente concerné.
         *
         *  Exemples :
         *  - 'FFI136593693' = n° FFI pour les Crédits Conso Nafi
         *
         *  Maj : doit être renseigné si identifiantDossierVente non renseigné
         *  Création : entrée facultative
         */
        identifiantExterneDossierVente: string;
    }
    /**
     * Etape en cours dans le process de vente
     */
    interface IEtapeEnCours {
        /**
         *  Cette rubrique spécifie le canal de vente sur lequel a eu lieu la dernière modification du dossier de vente, ou sur lequel on souhaite effectuer
         *  une simulation (méthode GET, codeActionContexte COCA)
         *
         *  Exemples :
         *  - 'TL' = Téléphone
         *  - 'FF' = Face à face
         *  - 'IN' = Internet
         */
        codeCanalEnCours: string;
        /**
         *  Libellé du canal de vente sur lequel a eu lieu la dernière modification du dossier de vente, ou sur lequel on souhaite effectuer une simulation
         * (méthode GET, codeActionContexte COCA)
         *  Exemples :
         *  - Téléphone
         *  - Face à face
         *  - Internet
         */
        libelleCanalEnCours: string;
        /**
         *  Cette rubrique permet de stocker une phrase expliquant de façon claire le statut du dossier de vente.
         *  Exemples :
         *  - 'Le client doit donner son accord pour poursuivre'
         *  - 'le client doit signer le contrat et renvoyer des pièces'
         */
        libelleStatutActionAMener: string;
        /**
         *  Numéro d'identification de l'étape de vente dans le cadre de la gestion d'un dossier de vente.
         *  Cet identifiant est attribué au central (DB2) lors de la création de l'étape.
         */
        identifiantEtape: number;
        /**
         *  Détermine un processus de vente dans la gestion des dossiers de vente.
         *  Un processus de vente est une suite ordonnée d'étapes qui décrivent comment une offre doit être vendue sur un canal de vente bien précis.
         *  A chaque dossier de vente, est associé un processus de vente, qui peut être modifié au cours de la vie du dossier.
         *  Exemples :
         *  - 'FAFA' = Face à face
         *  - 'OUSI' = Ouvrir puis signer
         *  - 'SIOU' = Signer puis ouvrir
         */
        codeProcessus: string;
        /**
         *  Libellé associé au code processus de vente.
         *  Exemples :
         *  - 'Face à face'
         *  - 'Ouvrir puis signer'
         *  - 'Signer puis ouvrir'
         */
        libelleProcessus: string;
        /**
         *  Détermine une étape de vente dans la gestion du dossier de vente.
         *  Une étape est une tâche/séquence caractéristique du processus de vente durant laquelle une action doit être effectuée par le client ou
         *  l'Etablissement.
         *  Une étape peut être l'occasion d'un rebond commercial ou d'un changement de canal.
         *  Exemples :
         *  - 'CONF' = Confirmation
         *  - 'SGNE' = Signature électronique
         *  - 'SGNP' = Signature papier
         */
        codeEtape: string;
        /**
         *  Libellé associé à un code étape, à destination du client.
         *  Exemple :
         *  - 'Signature' pour le code étape SGNE
         */
        libelleEtapeClient: string;
        /**
         *  Libellé associé à un code étape, à destination du chargé de clientèle.
         *  Exemple :
         *  - 'Signature électronique' pour le code étape SGNE
         */
        libelleEtapeAgent: string;
        /**
         *  Détermine le statut de l'étape du processus de vente à un instant donné.
         *  Exemples :
         *  - 'VECO' = Vente confirmée
         *  - 'EAMS' = En attente choix mode de signature
         *  - 'EASP' = En attente signature client
         *  - 'ABAN' = Abandonné client
         */
        codeStatut: string;
        /**
         *  Libellé associé au code statut, à destination du client.
         *  Exemples :
         *  - 'En cours de traitement' pour le code statut 'EAMS'
         *  - 'En attente de votre signature' pour le code statut 'EASP'
         */
        libelleStatutClient: string;
        /**
         *  Libellé associé au code statut, à destination du chargé de clientèle.
         *  Exemples :
         *  - 'En attente choix mode de signature' pour le code statut 'EAMS'
         *  - 'En attente signature client' pour le code statut 'EASP'
         */
        libelleStatutAgent: string;
        /**
         *  Désignation de l'action complémentaire à mener dans le cadre d'une impression papier d'un document. Permet d'alerter le chargé de clientèle que
         * l'impression et l'envoi des documents est à la charge du CRC.
         *  Exemple :
         *  - 'Action réservée au CRC'
         */
        libelleActionReservee: string;
        /**
         *  Date et heure à laquelle une étape de vente est créée.
         *  Exemple :
         *  - '2015-11-10-17.20.33.666074'
         */
        dateDebutEtape: string;
        /**
         *  Date et heure à laquelle une étape de vente se termine.
         *  Exemple :
         *  - '9999-12-31-00.00.00.000000' si étape non terminée
         *  - '2015-11-10-17.20.33.666074' si étape terminée
         */
        dateFinEtape: string;
        /**
         *  Cette rubrique a pour but de stocker la date liée à l'échéance d'une étape d'un dossier de vente.
         *  Exemple :
         *  - '2016-01-09'
         */
        dateEcheanceEtape: string;
        /**
         *  Cette rubrique spécifie le sens de la communication dans lequel a eu lieu la dernière modification du dossier de vente, ou dans lequel  on souhaite
         * effectuer une simulation (méthode GET, codeActionContexte COCA).
         *  contact entrant (à l'initiative du client),
         *  contact sortant (à l'initiative de l'Etablissement).
         *  Valeurs :
         *  - 'E' = Entrant
         *  - 'S' = Sortant
         */
        codeSensCommunicEnCours: string;
        /**
         *  Libellé du sens de communication dans lequel a eu lieu la dernière modification du dossier de vente, ou dans lequel  on souhaite effectuer une
         * simulation (méthode GET, actionActionContexte COCA).
         *  contact entrant (à l'initiative du client),
         *  contact sortant (à l'initiative de l'Etablissement).
         *  Valeurs :
         *  - 'Entrant'
         *  - 'Sortant'
         */
        libelleSensCommunicEnCours: string;
    }
    /**
     * Objet regroupant toutes les composantes du dossier de vente.
     */
    interface IGestionDossierVente {
        dossierVente?: IDossierVente;
        donneePrincipale?: IDonneePrincipale;
        commentaire?: ICommentaire;
        etapeEnCours?: IEtapeEnCours;
        partenaire?: IPartenaire;
        acteurDerniereModification?: IActeurDerniereModification;
        acteurContexte?: IActeurContexte;
        contractualisationSignature?: IContractualisationSignature;
        listePersonneLiee?: Array<IPersonneLiee>;
        listeCompositionDossier?: Array<ICompositionDossier>;
        listeCheminAvancement?: Array<ICheminAvancement>;
        listeActionPossible?: Array<IActionPossible>;
        listeCanalReprise?: Array<ICanalReprise>;
        listeAlerteFonctionnelle?: Array<IAlerteFonctionnelle>;
    }
    /**
     * Prescripteur - sans objet
     */
    interface IPartenaire {
        /**
         *  Numéro d'identification interne du tiers partenaire ou prescripteur ou apporteur d'affaires dans le SI d'un Etablissement
         *
         *  Création ou maj : entrée obligatoire si présence d'un partenaire
         */
        identifiantPartenaire: string;
        /**
         *  Libellé de désignation du partenaire
         */
        libellePartenaire: string;
    }
    /**
     * Liste des personnes liées au dossier Titulaire co titulaire Représentant légal / peut être utilisé dans le bloc signataires en reprise
     */
    interface IPersonneLiee {
        /**
         *  Numéro d'identification de la personne dans le SI d'un Etablissement. Référence interne MYSYS attribué par le central.
         *  Personne référencée comme client, tiers ou prospect.
         *
         *  Création ou Maj : entrée obligatoire
         */
        identifiantPersonne: number;
        /**
         *  Etablit le rôle de l'interlocuteur (personne de la clientèle) lié au dossier de vente : soit le titulaire souscripteur / ordonateur, soit le
         * représentant du titulaire souscripteur...
         *  Exemples :
         *  - '1' = Titulaire
         *  - '2' = Représentant légal
         *  - '3' = Emprunteur
         *  - '4' = Co-Emprunteur
         *  Création ou maj : entrée obligatoire. au moins et au plus une personne doit avoir le rôle 1 (titulaire).
         */
        codeRolePersonne: string;
        /**
         *  Libellé associé au rôle de la personne liée au dossier de vente.
         *  Exemples :
         *  - 'Titulaire'
         *  - 'Représentant légal'
         *  - 'Emprunteur'
         *  - 'Co-Emprunteur'
         */
        libelleRolePersonne: string;
        /**
         *  Adresse e-mail de la personne.
         *  Elle correspond :
         *  - à l'adresse e-mail fournie par le client lors de la vente,
         *  - ou, si elle n'a pas été fournie, à l'adresse e-mail préférée de la personne stockée dans le SI
         */
        adresseMailPersonne: string;
        /**
         *  Cet indicateur permet d'indiquer si la personne liée est signataire du dossier de vente.
         *  Valeurs :
         *  - 'O'        La personne est signataire
         *  - 'N'        La personne n'est pas signataire
         *
         *  Création ou Maj : entrée obligatoire
         */
        indicateurSignataire: string;
    }
    interface IParametresSuiviDossier {
        gestionDossierVente: IGestionDossierVente;
        codeEtablissementConnexion: string;
        codeGuichetConnexion: string;
        codeEntite: string;
        identifiantDossierVente: string;
        codeCanal: string;
        codeSensCommunication?: string;
    }
    interface IGestionDossierVentePutQuery {
        gestionDossierVente: IGestionDossierVente;
        codeCanal: string;
        codeSensCommunication?: string;
    }
    interface IGestionDossierVenteService {
        sendPutRequest(query: IGestionDossierVentePutDossierVenteQuery, body: IGestionDossierVente): ng.IPromise<IGestionDossierVente>;
    }
    interface IHistoriqueInterventionService {
        sendGetRequest(dossierVente: IDossierVente): ng.IPromise<IHistoriqueIntervention>;
    }
    interface IGestionDossierVenteMockService {
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
    }
}

declare module myway.clients.suiviDossierVente {
    class ContexteMEGPSO {
        codeCaisse: string;
        codeGuichet: string;
        codeEntite: string;
        codeSensCommunication: string;
        identifiantDossierVente: number;
        codeCanal: string;
    }
}

declare module myway.clients.suiviDossierVente {
    interface IActe {
        libelleActe: string;
        codeActe: string;
        codeEntite: string;
        codeCanal: string;
        dateFinValiditeActe: Date;
        codeMailSignataire: string;
        codeGuichet: string;
        topFAFGXML: boolean;
        identifiantActeExterne: string;
        identifiantAgence: string;
        identifiantAgent: string;
        referenceContrat: string;
        referenceActeProducteur: string;
        codeTypeActionContrat: string;
        libelleMotifNonEligibilite: string;
        numreroEntiteTitulaire: string;
        codeMessageConsentement: string;
        codeTypeActionMSI: string;
        codeTypeActionPJI: string;
        codeTypeActionCRE: string;
        identifiantActeIDN: string;
        listeSignataire: Array<ISignataire>;
        listeTitulaire: Array<ITitulaire>;
        listeReferenceActe: Array<IReferenceActe>;
        listeOperationFinanciere: Array<IOperationFinanciere>;
        suiviActe: ISuiviActe;
    }
    interface IReferenceActe {
        typeReferenceActe: string;
        valReferenceActe: string;
    }
    interface ITitulaire {
        idPersonne: string;
        adresseMailContr: string;
    }
    interface IFluxGCEDoc {
        nomModeleGcedoc: string;
        fluxXmlGcedoc: string;
    }
    interface IFluxBinaire {
        documentElectronique: string;
    }
    interface IFluxFilenet {
        identifiantComposantApplicatif: string;
        identifiantGEDDocument: string;
    }
    interface IFluxGedTemporaire {
        identifiantComposantApplicatif: string;
        identifiantDocumentTemporaire: string;
    }
    interface IFluxDocPartageICG {
        referencePartage: string;
    }
    interface IFluxXHTML {
        contenuDocumentAlternatif: string;
    }
    interface IFluxLignes {
        ligne1DocumentAlternatif: string;
        ligne2DocumentAlternatif: string;
        ligne3DocumentAlternatif: string;
        ligne4DocumentAlternatif: string;
        ligne5DocumentAlternatif: string;
        ligne6DocumentAlternatif: string;
        ligne7DocumentAlternatif: string;
        ligne8DocumentAlternatif: string;
        ligne9DocumentAlternatif: string;
        ligne10DocumentAlternatif: string;
    }
    interface IDocument {
        nomDocument: string;
        identifiantDocumentIDN: string;
        referenceDocumentProducteur: string;
        donneesStockageDocument: IStockageDocument;
        donneesContenuDocument: IContenuDocument;
        donneesDocumentAlternatif: IContenuDocumentAlternatif;
        donneesComportementSignatureDocument: IComportementSignatureDocument;
    }
    interface ISignataire {
        codeTypeSignr: string;
        idPersonne: string;
        adresseMailContr: string;
        idJustificatifIdGed: string;
        rangSignr: number;
    }
    interface IOptionSignataire {
        idOptSignr: string;
        msgOptSignr: string;
    }
    interface IContenuDocument {
        fluxBinaire: IFluxBinaire;
        fluxGCEDoc: IFluxGCEDoc;
        fluxFilenet: IFluxFilenet;
        fluxGedTemporaire: IFluxGedTemporaire;
        fluxDocPartageICG: IFluxDocPartageICG;
    }
    interface IContenuDocumentAlternatif {
        fluxXHTML: IFluxXHTML;
        listeFluxLignes: Array<IFluxLignes>;
    }
    interface IStockageDocument {
        codeTypeFichier: string;
        codeTypeAttributaire: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        identifiantNaturePieceJointe: string;
        libelleDescriptionDocument: string;
        codeForcageAccessibilite: number;
    }
    interface ISignatureEntite {
        codeTypeSignataire: string;
        identifiantEntiteSignataire: string;
        numeroPageDocument: number;
        numeroAbscisseSignature: number;
        numeroOrdonneeSignature: number;
        hauteurSignature: number;
        largeurSignature: number;
        imageSignatureEntite: string;
    }
    interface ISignatureClient {
        codeTypeSignr: string;
        numeroOrdreSigne: number;
        lablSigne: string;
        numeroPageDoc: number;
        numeroAbscSigne: number;
        numeroOrdnSigne: number;
        hautSigne: number;
        largSigne: number;
    }
    interface ISignataireDocument {
        optionsSignataire: IOptionSignataire;
        codeTypeSignataire: string;
        numeroAffichageDocument: number;
        codeIndicateurSignature: boolean;
    }
    interface IImpressionDoc {
        exmpImpr: number;
        exmpImprMinimum: number;
        exmpImprMaximum: number;
    }
    interface IInfoDocument {
        codeTypeDocument: string;
        typeMimDocument: string;
        labelDocument: string;
        modeUsageDocument: string;
        referenceContratProducteur: string;
        referenceContratDistributeur: string;
        libelleDescriptionDocumentIDN: string;
        libelleSectionRegroupement: string;
    }
    interface IOperationFinanciere {
        libelleClientOpe: string;
        libelleCompteOpe: string;
        dtOpe: Date;
        montantOpe: number;
        natureOpe: string;
        idPersonne: string;
    }
    interface IDossierNumerique {
        acte: IActe;
        codeApplication: string;
        listeDocument: Array<IDocument>;
    }
    interface IComportementSignatureDocument {
        descriptionDocument: IInfoDocument;
        impressionDocument: IImpressionDoc;
        listeSignataireDocument: Array<ISignataireDocument>;
        listeSignatureClient: Array<ISignatureClient>;
        listeSignatureEntite: Array<ISignatureEntite>;
    }
    interface ISuiviActe {
        codeEtatActe: string;
        identifiantTransactionICG: string;
        codeModeContractualisation: string;
        dateContractualisation: string;
    }
    interface IAnnulationDossierNumerique {
        idDossierNumerique: string;
        codeApplication: string;
        referenceActe: string;
        typeReferenceActe: string;
        isDeployMySign: boolean;
    }
    interface IReponseAnnulerDossierNumerique {
        isDossierNumeriqueAnnule: boolean;
    }
    interface IAnnulationTransactionIcg {
        isDeployeMySign: boolean;
        idTransactionIcg: string;
        annulerDossiersConcernes: boolean;
        idPersonne: string;
        codeAction: string;
    }
    interface IReponseAnnulerTransactionIcg {
        isTransactionIcgAnnule: boolean;
    }
    interface IModeSignature {
        codeImpression: string;
    }
    interface ISignature {
        listeDossiersNumeriques: Array<string>;
        modeSignature: IModeSignature;
        referenceExterne: string;
        codeApplication: string;
        isDeployeMySign: boolean;
    }
    interface IReponseSignature {
        codeApplication: string;
        idMultiDossiersNumeriques: string;
        idActeIDN: string;
    }
}

declare module myway.clients.suiviDossierVente {
    class DossierNumeriqueService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restUrlDossierNumeriqueV3;
        private restUrlDossierNumeriqueV3Signature;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête DELETE
         * Permet d'annuler la signature electronique
         * @return promise<IResponseAnnulerDossierNumerique>
         */
        annulerSignatureElectronique(donneesAnnulationDossierNumerique: IAnnulationDossierNumerique): ng.IPromise<IReponseAnnulerDossierNumerique>;
        /**
         * Requête POST
         * Cette opération permettant d'initialiser une signature en fonction du mode de signature
         * @return promise<IReponsesignature>
         */
        signature(donneesSignature: ISignature): ng.IPromise<IReponseSignature>;
    }
}

declare module myway.clients.suiviDossierVente {
    /**
     * Interface comportant les données permettant d'interroger la ressource "dossiervente/gestionDossierVente"
     * avec le verbe d'action PUT.
     */
    interface IGestionDossierVentePutDossierVenteQuery {
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cet indicateur permet de savoir si le commentaire lié au dossier de vente (objet Commentaire) doit être ou pas mis à jour dans la base
         * de donnée dossier de vente. En cas de mise à jour, le commentaire existant sera écrasé et remplacé par le nouveau commentaire (annule et
         *  remplace).
         *  Valeurs :
         * 'O' = le commentaire est à mettre à jour
         * 'N' = aucune mise à jour du commentaire
         */
        indicMajCommentaire: string;
        /**
         * En cas de mise à jour, toutes les personnes liées au dossier de vente seront annulées et remplacées par les nouvelles données fournies
         * en entrée de la ressource.
         *  Valeurs :
         *  'O' = toutes les personnes liées sont à mettre à jour
         *  'N' = aucune mise à jour des personnes liées
         */
        indicMajPersonne: string;
        /**
         * Cet indicateur permet de savoir si les données des partenaires prescripteur (objet Partenaire) doivent être mises à jour dans la base
         * de donnée dossier de vente.
         * En cas de mise à jour, toutes les données liées au partenaire seront annulées et remplacées par les nouvelles données fournies en entrée
         *  de la ressource.Valeurs :
         * 'O' = toutes les données partenaire sont à mettre à jour
         * 'N' = aucune mise à jour des données partenaire
         * nb : non utilisé dans GGO
         */
        indicMajPartenaire: string;
        /**
         * Cet indicateur permet de savoir si la composition du dossier (objet CompositionDossier) doit être ou pas mise à jour dans la base de donnée
         * dossier de vente
         * Si oui , c'est toute la composition (caractéristique et détail) qui est mise à jour en annule et remplace.
         * Valeurs:
         *
         * 'O' = Toutes les données composition sont à mettre à jour
         * 'N' = Aucune mise à jour des données composition
         */
        indicMajCompositionDetail: string;
        /**
         * Cet indicateur permet de savoir si la contractualisation du dossier de vente doit être ou pas mise à jour dans la base de données
         * dossier de vente.
         * Si oui c'est toutes les données de la contractualisation qui seront mises à jour en annule et remplace. Valeurs :
         *
         * 'O' : Toutes les données contractualisation signature sont à mettre à jour
         * 'N' : Aucune mise à jour des données contractualisation signature
         */
        indicMajContractSignature: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "dossiervente/v1/gestionDossierVente".
     */
    class GestionDossierVenteService implements IGestionDossierVenteService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(query: IGestionDossierVentePutDossierVenteQuery, body: IGestionDossierVente): ng.IPromise<IGestionDossierVente>;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant de mocker la communication avec la ressource REST "dossiervente/v1/gestionDossierVente".
     */
    class GestionDossierVenteMockService implements IGestionDossierVenteMockService {
        private serviceAgent;
        private qService;
        private $http;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService, $http: ng.IHttpService);
        /**
         * Mock de la requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
        /**
         * @return l'url du fichier mock JSON
         */
        private url();
    }
}

declare module myway.clients.suiviDossierVente {
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "dossiervente/v1/gestionDossierVente".
     */
    class HistoriqueInterventionService implements IHistoriqueInterventionService {
        private serviceAgentExtended;
        private qService;
        private traceService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService, traceService: myway.clients.suiviDossierVente.TraceService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(dossierVente: IDossierVente): ng.IPromise<IHistoriqueIntervention>;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant de mocker la communication avec la ressource REST "dossiervente/v1/gestionDossierVente".
     */
    class HistoriqueInterventionMockService implements IHistoriqueInterventionService {
        private serviceAgent;
        private qService;
        private $http;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService, $http: ng.IHttpService);
        /**
         * Mock de la requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(dossierVente: IDossierVente): ng.IPromise<IHistoriqueIntervention>;
        /**
         * @return l'url du fichier mock JSON
         */
        private url();
    }
}

declare module myway.clients.suiviDossierVente {
    const enum LogType {
        DEBUG = 1,
        ERROR = 2,
        INFO = 3,
        WARNING = 4,
    }
    interface ITraceService {
        debug(message: string, action?: any, object?: any): void;
        error(message: string, action?: any, object?: any): void;
        info(message: string, action?: any, object?: any): void;
        warning(message: string, action?: any, object?: any): void;
        historiqueLog: string;
    }
    class TraceService {
        private $q;
        private $timeout;
        private static CLASS_NAME;
        private static logger;
        private _logType;
        private colors;
        historiqueLog: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService);
        /**
         * Méthode d'affichage des logs dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        log(message?: string, object?: any): void;
        /**
         * Méthode d'affichage des logs en mode DEBUG dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        debug(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode ERROR dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        error(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode INFO dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        info(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warning(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warn(message: string, object?: any, cache?: boolean): void;
        traceServiceLogger(logType: string, message: string, object?: any, cache?: boolean): void;
        private getTime();
        clearHistoriqueLog(): void;
        logType: string;
    }
}

declare module myway.clients.suiviDossierVente {
    class SuiviDossierVenteConstante {
        static CODE_AIDN: string;
        static CODE_APSO: string;
        static CODE_APPLICATION_CONTELEC: string;
        static CLICK_APERCU_DOCUMENT: string;
        static CODE_ABANDON_CONSEILLER: string;
        static CODE_ABANDON_CLIENT: string;
        static CODE_ACTION_ABANDON_CLIENT: string;
        static CODE_POSI: string;
    }
    /**
     * Classe du controleur SuiviDossierVenteController
     * @class SuiviDossierVenteController
     */
    class SuiviDossierVenteController {
        private serviceAgentExtended;
        private $q;
        private $scope;
        private $rootScope;
        private modalService;
        private gestionDossierVenteService;
        private gestionDossierVenteMockService;
        private historiqueInterventionService;
        private historiqueInterventionMockService;
        private dossierNumeriqueService;
        private traceService;
        private parametres;
        private parametresCopiePourAbandon;
        private abandonDossierVente;
        private actionPrevisualiserDocs;
        abandonDossierBoutonActions: MyWay.UI.IBoutonActionRiche[];
        abandonDossierBoutonVisible: boolean;
        abandonDossierBoutonDisable: boolean;
        previsualiserLesDocumentsVisible: boolean;
        numeroContratVisible: boolean;
        historiqueIntervention: IHistoriqueIntervention;
        identifiantDossierVente: string;
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du controleur SuiviDossierVenteController
         *
         * @returns {void}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, $scope: ng.IScope, $rootScope: ng.IRootScopeService, modalService: MyWay.UI.IModalService, gestionDossierVenteService: GestionDossierVenteService, gestionDossierVenteMockService: GestionDossierVenteMockService, historiqueInterventionService: HistoriqueInterventionService, historiqueInterventionMockService: HistoriqueInterventionMockService, dossierNumeriqueService: DossierNumeriqueService, traceService: myway.clients.suiviDossierVente.TraceService);
        afficherHistoriqueIntervention(): void;
        construireBoutonAbandon(): void;
        chargerHistoriqueIntervention(): void;
        formattageDate(date: string): string;
        chercherCodeActionPossible(codes: string[]): boolean;
        /**
         * Requête pour abandonner le dossier de vente
         * @param actionPossible number
         * @return Promesse sur un objet IGestionDossierVente
         */
        abandonDossierPutRequest(actionPossible: number): ng.IPromise<IGestionDossierVente>;
        /**
         * Modale de confirmation pour abandonner le dossier de vente
         * @param actionPossible number
         */
        confirmAbandonDossier(actionPossible: number, codeOperationFonctionnelle: string, afficherMessagePSO?: boolean): void;
        private cancelTransaction(codeActionPossible);
        previsualiserDocuments(): void;
        getPrescripteur(): string;
        /**
         * Définit si un dossier de vente est avec une SED/SAG sur MySign (true) ou sur IDN (false)
         * @param IGestionDossierVente
         * @return boolean
         */
        isMySign(dossierVente: IGestionDossierVente): boolean;
        /**
         * test si une propriété est définie et non null avant de la transformer en string
         */
        testToString(value: any): any;
    }
}

declare module myway.clients.suiviDossierVente {
}
