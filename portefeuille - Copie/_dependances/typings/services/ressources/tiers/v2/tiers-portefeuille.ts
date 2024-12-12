/**
 * Ressource : /tiers/v2/portefeuille
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v2/tiers/portefeuille
 * Fichier généré le : 2017-05-10
 */
module myway.ressources.tiers.portefeuille {

  export interface IPortefeuilleRattachement {

    /**
     * indique le type de portefeuille de suivi clientèle, à pour valeur :
     *  - H : hors portefeuille
     *  - R : portefeuille réservoir
     *  - C : portefeuille collectif
     *  - N: portefeuille nominatif
     */
    codeTypePortefeuille: string;

    /**
     * Numéro d'identification interne de l'élément de structure de type agence (type3) propriétaire du portefeuille de suivi clientèle.
     */
    identifiantElementStructurePortefeuille: number;

    /**
     * Libellé de l'élément de structure propriétaire du portefeuille de suivi de clientèle
     */
    libelleElementStructurePortefeuille: string;

    /**
     * numéro d'identification interne de l'élément de structure assurant le suivi du portefeuille clientèle, correspond à :
     *  - un poste fonctionnel pour un portefeuille nominatif affecté
     *  - (à compléter)pour les portefeuille non affecté
     */
    identifiantElementStructureSuiviPortefeuille: number;

    /**
     * Libellé de l'élément de structure assurant le suivi du portefeuille clientèle
     */
    libelleElementStructureSuiviPortefeuille: string;

    /**
     * Numéro d'identification d'un portefeuille de suivi clientèle
     */
    identifiantPortefeuille: number;

    /**
     * Indique le motif de rattachement à un portefeuille de clientèle (de type réservoir uniquement), à pour valeur :
     *  - A : Autre Motif
     *  - P : Proposition de mise en portefeuille
     *  - S : changement de segmentation
     *  - D : Changement de domiciliation
     */
    codeMotifPortefeuille: string;

    /**
     * libellé du portefeuille de suivi clientèle
     */
    libellePortefeuille: string;
  }

  export interface IPortefeuilleTransfert {

    /**
     * Numéro d'identification du portefeuille destnatire du transfert
     */
    identifiantPortefeuilleTransfert: number;

    /**
     * Indicateur d'envoi d'un message d'information au chef d'agence sur demande de transfert de portefeuille, prend les valeurs: 
     *  - O : envoi de message
     *  - N : pas d'envoi de message
     */
    indicateurEnvoiMessage: string;

    /**
     * Indique le motif de transfert à un portefeuille de clientèle (de type réservoir uniquement), à pour valeur :
     *  - A : Autre Motif
     *  - P : Proposition de mise en portefeuille
     *  - S : changement de segmentation
     *  - D : Changement de domiciliation
     */
    codeTypeMotifTransfert: string;

    /**
     * Numéro d'identification de l'élément de structure affecté au portefeuille de transfert,
     */
    identifiantElementStructurePortefeuilleTransfert: number;
  }

  export interface ITiersPortefeuille {

    portefeuilleRattachement: IPortefeuilleRattachement;

    portefeuilleTransfert: IPortefeuilleTransfert;

    /**
     * Code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification d'une relation économique correspondant à une regroupement de plusieurs tiers ayant un lien familial et/ou économique entre elles
     */
    identifiantRelationEconomique: number;

    /**
     * Numéro d'identification d'une personne référencé comme client d'un établissement CEP
     */
    identifiantTiers: number;
  }
}
