/* tslint:disable:max-line-length */
export namespace RessourceOffreV2EnveloppeOffre {
  export interface EnveloppeOffreContexte {
    /**
     * Code qualité agent affecté au PF
     */
    codeQualiteAgent: string;

    /**
     * Identifiant Produit / Service
     */
    identifiantProduitService: number;

    /**
     * Numéro entité titulaire
     */
    numeroEntiteTitulaire: number;

    /**
     * Référence externe agent
     */
    referenceExterneAgent: number;

    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;

    /**
     * Identifiant élément structure
     */
    identifiantElementStructureBis: number;

    /**
     * Identifiant Elément structure
     */
    identifiantElementStructure: number;

    /**
     * Numéro de l'offre
     */
    numeroOffre: number;

    /**
     * Lors de l'impression en ouverture ou en avenant, permet d'indiquer au "central" que tous les P/S OBLIGATOIRES dans l'Offre ont été ouverts.
     * Si toutes les ouvertures sont correctes, l'Offre passe de l'état d'instance à celui d'ouverture effective.
     * En avenant sans ouverture ou en utilisation de l'impression lors du processus de synthése, il n'y a pas lieu de positionner l'indicateur.
     * Valeurs :
     * 'O'	Toutes les P/S obligatoires sont ouverts
     * 'N'	Au moins un P/S obligatoire n'a pas été ouvert
     * 'R'	Aucune ouverture de P/S obligatoire n'a été déclenchée (l'Offre a déjà été validée)
     */
    indicateurValidationOuvertureOffre: string;
  }
  export interface EnveloppeOffreReponse {
    /**
     * Identifiant Produit / Service
     */
    identifiantProduitService: number;

    /**
     * Numéro offre souscrite
     */
    numeroOffre: number;

    /**
     * Date ouverture offre souscrite
     */
    dateOuvertureOffreSouscrite: string;

    /**
     * Nom Commercial Court Produit / Service
     */
    nomCommercialCourtProduitService: string;

    /**
     * Date du dernier avenant effectué avant l'avenant du jour
     */
    dateAvantDernierAvenantOffre: string;

    /**
     * Date du dernier avenant établi sur une offre donnée
     */
    dateDernierAvenantOffre: string;
  }
  export interface EnveloppeOffre {
    listeProduitService: EnveloppeOffreProduitService[];

    offre: EnveloppeOffreContexte;
  }
  export interface EnveloppeOffreProduitService {
    /**
     * Identifiant Produit / Service
     */
    identifiantProduitService: number;

    /**
     * Numéro entité titulaire
     */
    numeroEntiteTitulaire: number;

    /**
     * Identifiant personne
     */
    numeroPersonne: number;

    /**
     * Code Guichet Interbancaire
     */
    codeGuichet: string;

    /**
     * Référence produit
     */
    numeroCompte: string;

    /**
     * Numéro offre souscrite
     */
    numeroOffre: number;

    /**
     * Référence externe agent
     */
    referenceExterneAgent: number;

    /**
     * Identifiant Produit / Service support
     */
    identifiantProduitServiceSupport: number;

    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;

    /**
     * Code type Produit / Service
     */
    codeTypeProduitService: string;

    /**
     * Indique quelle type d'action est entreprise sur la Référence d'un P/S dans le cadre d'un Avenant.
     * Valeurs :
     * 'R'        Aucune Action sur la Référence.
     * 'T'        Transfert (reprise unitaire) d'une Référence de P/S.
     * 'D'        Avenant Direct sur le P/S par l'interface locale de l'applicatif de gestion du P/S.
     * 'A'        Avenant avec substitution d'un P/S par un autre P/S possédant le même CODIPR, mais un IDEGPS différent. ex: Découvert 3000 -> Découvert 4000
     * 'C'        Clôture du P/S
     * 'O'        A ouvrir : positionné en central (envoi d'une SU29 pour ce P/S)
     */
    codeActionSurAvenantProduitService: string;

    /**
     * Mode de traitement du produit service. Indique la manière dont le P/S est traité
     * 0 : ne pas afficher (le P/S vient d'un SU062 "proposition P/S et client à ne pas afficher") 1 : afficher (le P/S vient d'un SU06 "proposition P/S et client") 2 : reprendre (le P/S vient d'un SU07 et le conseiller a accepté de le reprendre).
     */
    modeTraitementProduitService: number;
  }
  export interface EnveloppeOffreClotureReponse {
    /**
     * Identifiant Produit / Service
     */
    identifiantProduitService: number;

    /**
     * Numéro offre souscrite
     */
    numeroOffre: number;

    /**
     * Date clôture offre.
     */
    dateClotureOffre: string;
  }
}
