/**
 * Ressource : /tiers/v2/identification
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v2/tiers/identification
 * Fichier généré le : 2017-04-28
 */
declare module myway.ressources.tiers.identification {

  export interface ICodeMarche {

    /**
     * Code Marché de la personne.
     * 
     * Exemple :
     * MN 101102 /  Particuliers : Particuliers non Professionnels
     * MN 102102 /  Professionnels : Professions Libérales
     * MN 206101 /  Professionnels Privé : Promoteurs
     */
    codeMarche: string;

    /**
     * Libellé de désignation d'un segment clientèle.
     */
    libelleLongCodeMarche: string;

    /**
     * Libellé court de la segmentation clientèle pour affichage sur le poste de travail.
     * Libellé à caractère confidentiel pour ne pas être interprété par la clientèle.
     */
    libelleCourtCodeMarche: string;

    /**
     * Ce libellé permet de restituer le libellé de la famille du code marché.
     * 
     * Exemple :                                
     * 101 : Particuliers
     */
    libelleFamilleCodeMarche: string;
  }

  export interface IDonneeIdentification {

    /**
     * Identifiant d'un Etablissement du RCE.               
     * Correspond au code Banque sous lequel une Caisse ou  
     * un Etablissement du réseau CE est répertoriée par la 
     * Banque de France
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification de la personne dans le        
     *  SI d'un Etablissement.                                                             
     *  Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne: number;

    /**
     * Détermine le type de personnalité juridique de la personne.
     * 
     * Valeurs :
     * 1=personne physique
     * 2=personne morale / assimilée morale
     */
    codePersonnaliteJuridique: string;

    /**
     * Libelle du code qui indique le type de personnalité juridique de la personne.
     */
    libellePersonnaliteJuridique: string;

    /**
     * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes : 
     *                                                                  
     *            Valeurs :                                             
     * '0'        Actif                                                 
     * '1'        Cloturé
     */
    codeEtatPersonne: string;

    /**
     * Détermine la relation de la personne connue avec      
     * l'Etablissement :                                     
     * - client : personne détentrice de contrat(s) de produit / service                          
     * - tiers : personne non 'client' en lien avec une personne 'client' - lien particulier ou professionnel (ex : participant à un contrat, représentant légal)                                       
     * - prospect : personne n'étant ni client ni tiers      
     * 
     * Valeurs possibles :             
     * '0'        Personne connue comme client    
     * '1'        Personne connue comme tiers     
     * '2'        Personne connue comme prospect
     */
    codeTypeRelation: string;

    /**
     * Libelle du code qui indique le type de relation de la personne avec l’établissement
     */
    libelleTypeRelation: string;

    /**
     * Date de première entrée en relation d'une personne
     * donnée avec l'Etablissement (CE).
     */
    dateEntreeRelation: string;
  }

  export interface IIdentification {

    donneeIdentification: IDonneeIdentification;

    lutteAntiBlanchiment: ILutteAntiBlanchiment;

    listMarche: Array<ICodeMarche>;

    suiviComercial: ISuiviCommercial;
  }

  export interface ILutteAntiBlanchiment {

    /**
     * Code alerte VAO. Il indique si une alerte est détectée lors du filtrage.
     * Valeurs :
     * - 'O' : Alerte
     * - 'N' : Pas d'alerte
     */
    codeAlerteVAO: boolean;

    /**
     * Message VAO. Il permet de de préciser à l'agent s'il y a alerte ou non sur la personne filtrée.
     */
    messageAlerteVAO: string;
  }

  export interface ISuiviCommercial {

    /**
     * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
     * Correspond à un type : siège, agence, service, poste fonctionnel, ...
     * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
     */
    identifiantEDSSuiviCommercial: number;

    /**
     * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE.                
     * Typologie propre à chaque Etablissement du GCE.
     * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
     * '008' Siège
     * '003' Agence (Point de vente)
     * '010' GAB
     * '020' Guichet (au sens arrêté de caisse)
     * '001' Poste fonctionnel
     * '002' Service
     * '009' Entité Administrative (Guichet interbancaire)
     * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
     * Exemple : type '003' = agence / point de vente.
     * 
     * Valeurs :
     * '001'      poste fonctionnel
     * '002'      service
     * '003'      agence
     * '004'      unité commerciale
     * '005'      secteur commercial
     * '006'      groupe commercial
     * '007'      direction
     * '008'      siège
     * '009'      entité administrative
     * '010'      GAB
     */
    typeEDSSuiviCommercial: string;

    /**
     * Référence externe d'un élément de structure dans un Etablissement du GCE.
     * Référence connue de l'Etablissement.
     * Identifiant défini en fonction du type d'élément de structure.
     */
    referenceExterneEDSSuiviCommercial: number;

    /**
     * Alimenté uniquement pour les EDS de type Poste fonctionnel (001)
     * 
     * Numéro d'identification d'un agent au sein d'un établissement du réseau GCE.
     * Correspond à un individu ou à un acteur générique.
     * Numéro chrono attribué par le système, pour les établissements.
     * Référence unique dans MYSYS.
     */
    identifiantAgent: number;

    /**
     * Désignation décrivant l'élément de structure.
     * Cette désignation est construite par concaténation :
     *      - Si l'EDS n'est pas un Poste fonctionnel, du libellé court du type d'EDS et de la désignation de l'EDS.
     *      - Si c'est un Poste fonctionnel, du nom et du prénom de l'agent titulaire du Poste fonctionnel.
     */
    designationCourteEDS: string;

    /**
     * Désignation décrivant l'élément de structure.
     * Cette désignation est construite par concaténation :
     *      - Si l'EDS n'est pas un Poste fonctionnel, du libellé long du type d'EDS et de la désignation de l'EDS.
     *      - Si c'est un Poste fonctionnel, de la civilité, du nom et du prénom de l'agent titulaire du Poste fonctionnel.
     */
    designationLongueEDS: string;
  }
}
